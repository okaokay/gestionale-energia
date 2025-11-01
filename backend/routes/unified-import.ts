import express from 'express';
import multer from 'multer';
import { randomUUID } from 'crypto';
import { pool } from '../config/database';
import path from 'path';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

type ImportOptions = {
    dryRun?: boolean;
    batchSize?: number;
    skipValidation?: boolean;
    skipAssociation?: boolean;
    autoDetectType?: boolean;
};

type ImportProgress = {
    stage: 'queued' | 'parsing' | 'processing' | 'completed' | 'failed';
    progress: number;
    message: string;
    startedAt: string;
    completedAt?: string;
};

type ImportResult = {
    success: boolean;
    fileName: string;
    totalRows: number;
    processed: number;
    errors: Array<{ row: number; error: string }>;
    inserted: {
        clienti_privati: number;
        contratti_luce: number;
        contratti_gas: number;
    };
    warnings: string[];
};

const activeImports: Record<string, {
    options: ImportOptions;
    progress: ImportProgress;
    result: ImportResult;
}> = {};

// Rileva le colonne presenti in una tabella (SQLite)
async function getTableColumns(tableName: string): Promise<string[]> {
    try {
        const res = await pool.query<{ name: string }>(`PRAGMA table_info(${tableName})`);
        return (res.rows || []).map(r => String((r as any).name)).filter(Boolean);
    } catch {
        return [];
    }
}

function parseCsvSimple(content: string) {
    // Normalizza newline e rimuove righe vuote
    let lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
    if (lines.length === 0) return { headers: [], records: [] };

    // Gestisci BOM (\uFEFF) ed eventuale riga iniziale Excel "sep=,"
    const firstLineClean = lines[0].replace(/^\uFEFF/, '').trim();
    if (/^sep\s*=\s*[,;\t]$/i.test(firstLineClean)) {
        lines = lines.slice(1);
    }

    if (lines.length < 2) return { headers: [], records: [] };

    const headerLine = lines[0].replace(/^\uFEFF/, '');
    const headers = headerLine.split(',').map(h => h.trim().replace(/(^"|"$)/g, ''));

    const records: Array<Record<string, string>> = [];
    for (let i = 1; i < lines.length; i++) {
        let raw = lines[i];
        if (!raw.trim()) continue;
        raw = raw.replace(/^\uFEFF/, '');
        // Nota: parsing semplice; per campi con virgole in quote, puoi passare a csv-parse
        const values = raw.split(',').map(v => v.trim().replace(/(^"|"$)/g, ''));
        const record: Record<string, string> = {};
        headers.forEach((h, idx) => {
            record[h] = values[idx] || '';
        });
        records.push(record);
    }
    return { headers, records };
}

// Rileva dinamicamente il nome della colonna di scadenza
// Alcuni DB hanno `data_scadenza`, altri `data_fine`.
async function getScadenzaColumn(tableName: 'contratti_luce' | 'contratti_gas'): Promise<'data_scadenza' | 'data_fine'> {
    try {
        const res = await pool.query<{ name: string }>(`PRAGMA table_info(${tableName})`);
        const cols = res.rows?.map((r: any) => r.name?.toLowerCase()) || [];
        if (cols.includes('data_scadenza')) return 'data_scadenza';
        if (cols.includes('data_fine')) return 'data_fine';
        // Default di sicurezza
        return 'data_fine';
    } catch {
        return 'data_fine';
    }
}

async function findUserIdByEmail(email?: string): Promise<string | null> {
    if (!email) return null;
    try {
        const res = await pool.query<{ id: number | string }>('SELECT id FROM users WHERE email = $1 LIMIT 1', [email]);
        const row = res.rows?.[0];
        return row ? String(row.id) : null;
    } catch {
        return null;
    }
}

async function findClientePrivatoId(record: Record<string, string>): Promise<string | null> {
    const cf = record.codice_fiscale || record.cliente_codice_fiscale;
    const email = record.email_principale || record.cliente_email;
    if (cf) {
        const res = await pool.query<{ id: number | string }>('SELECT id FROM clienti_privati WHERE codice_fiscale = $1 LIMIT 1', [cf]);
        if (res.rows[0]?.id) return String(res.rows[0].id);
    }
    if (email) {
        const res = await pool.query<{ id: number | string }>('SELECT id FROM clienti_privati WHERE email_principale = $1 LIMIT 1', [email]);
        if (res.rows[0]?.id) return String(res.rows[0].id);
    }
    return null;
}

async function insertClientePrivato(record: Record<string, string>, createdBy: string | null, assignedAgentId: string | null, dryRun: boolean): Promise<string> {
    // In SQLite il PK di clienti_privati è INTEGER (rowid) nel DB corrente.
    // Evitiamo UUID qui e usiamo last_insert_rowid() per ottenere l'ID appena inserito.
    if (dryRun) return randomUUID();

    const nome = record.nome || record.cliente_nome || null;
    const cognome = record.cognome || record.cliente_cognome || null;
    const cf = record.codice_fiscale || record.cliente_codice_fiscale || null;
    const data_nascita = record.data_nascita || record.cliente_data_nascita || null;
    const email = record.email_principale || record.cliente_email || null;
    const tel = record.telefono_mobile || record.cliente_telefono || null;
    const via = record.via_residenza || record.cliente_indirizzo || null;
    const civico = record.civico_residenza || null;
    const cap = record.cap_residenza || record.cliente_cap || null;
    const citta = record.citta_residenza || record.cliente_citta || null;
    const provincia = record.provincia_residenza || record.cliente_provincia || null;
    const tipo_doc = record.tipo_documento || record.cliente_documento_tipo || null;
    const num_doc = record.numero_documento || record.cliente_documento_numero || null;
    const ente = record.ente_rilascio || record.cliente_documento_rilasciato_da || null;
    const scadenza_doc = record.data_scadenza_documento || record.cliente_documento_data_scadenza || null;
    const iban = record.iban || null;

    // Rileva colonne disponibili per compatibilità
    const colsAvailable = await getTableColumns('clienti_privati');
    // Mappa completa delle colonne possibili con i valori calcolati
    const allFieldMap: Record<string, any> = {
        nome: nome,
        cognome: cognome,
        codice_fiscale: cf,
        data_nascita: data_nascita,
        email_principale: email,
        telefono_mobile: tel,
        via_residenza: via,
        civico_residenza: civico,
        cap_residenza: cap,
        citta_residenza: citta,
        provincia_residenza: provincia,
        tipo_documento: tipo_doc,
        numero_documento: num_doc,
        ente_rilascio: ente,
        data_scadenza_documento: scadenza_doc,
        iban: iban,
        consenso_privacy: 1,
        consenso_marketing: 1,
        data_consenso: new Date().toISOString(),
        created_by: createdBy || null
    };

    // Colonne opzionali aggiuntive se disponibili
    if (assignedAgentId) {
        allFieldMap['assigned_agent_id'] = assignedAgentId;
    }
    // Inserisci created_at solo se la colonna esiste; usiamo l'ora attuale
    allFieldMap['created_at'] = new Date().toISOString();

    // Costruisci dinamicamente columns/values includendo SOLO colonne presenti nel DB
    const columns: string[] = [];
    const values: any[] = [];
    for (const [col, val] of Object.entries(allFieldMap)) {
        if (colsAvailable.includes(col)) {
            columns.push(col);
            values.push(val);
        }
    }

    // Garanzia: assicurati che ci sia almeno un set minimo di colonne essenziali
    // (nome, cognome, email_principale) se presenti, altrimenti l'INSERT fallisce per mancanza di colonne
    if (columns.length === 0) {
        throw new Error('Schema clienti_privati non compatibile: nessuna colonna disponibile per l\'inserimento');
    }

    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
    await pool.query(`
        INSERT INTO clienti_privati (${columns.join(', ')})
        VALUES (${placeholders})
    `, values);

    const sel = await pool.query<{ id: number }>(`SELECT last_insert_rowid() as id`);
    const id = sel.rows?.[0]?.id;
    return String(id);
}

async function insertContrattoLuce(record: Record<string, string>, clienteId: string, createdBy: string | null, dryRun: boolean): Promise<string> {
    const id = randomUUID();
    if (dryRun) return id;

    const numero_contratto = record.numero_contratto || record.contratto_luce_numero || record.numero_contratto_luce || null;
    const pod = record.pod || record.contratto_luce_pod || (record as any).pod_pdr || null;
    const fornitore = record.fornitore || record.contratto_luce_fornitore_precedente || null;
    const data_attivazione = record.data_attivazione || record.contratto_luce_data_inizio || null;
    const data_scadenza = record.data_scadenza || record.contratto_luce_data_fine || record.contratto_luce_data_scadenza || null;
    const prezzo_energia = record.prezzo_energia || record.contratto_luce_prezzo_energia || null;
    const stato_csv = (record.stato || record.stato_contratto || (record as any)['stato contratto luce'] || record.stato_contratto_luce || null);

    // Determina il nome della colonna di scadenza presente nel DB
    const scadenzaCol = await getScadenzaColumn('contratti_luce');

    // Rileva colonne disponibili per gestire DB senza created_by/stato
    const colsAvailable = await getTableColumns('contratti_luce');

    const columns: string[] = ['id', 'cliente_privato_id', 'tipo_cliente', 'numero_contratto', 'pod', 'fornitore', 'data_attivazione', scadenzaCol];
    const values: any[] = [id, clienteId, 'privato', numero_contratto, pod, fornitore, data_attivazione, data_scadenza];

    if (colsAvailable.includes('prezzo_energia')) {
        columns.push('prezzo_energia');
        values.push(prezzo_energia);
    }
    if (colsAvailable.includes('stato')) {
        columns.push('stato');
        values.push(stato_csv || 'compilazione');
    }
    if (colsAvailable.includes('created_by')) {
        columns.push('created_by');
        values.push(createdBy);
    }
    // Nota: evitiamo 'created_at' per compatibilità, se presente sarà gestito da default/trigger esterni

    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    await pool.query(`
        INSERT INTO contratti_luce (${columns.join(', ')})
        VALUES (${placeholders})
    `, values);

    return id;
}

// Trova un contratto luce esistente tramite numero_contratto o POD (eventualmente legato al cliente)
async function findContrattoLuceId(record: Record<string, string>, clienteId?: string): Promise<string | null> {
    const numero_contratto = record.numero_contratto || record.contratto_luce_numero || record.numero_contratto_luce || null;
    const pod = record.pod || record.contratto_luce_pod || (record as any).pod_pdr || null;
    // Prima prova con numero_contratto
    if (numero_contratto) {
        try {
            const res = await pool.query<{ id: number | string }>('SELECT id FROM contratti_luce WHERE numero_contratto = $1 LIMIT 1', [numero_contratto]);
            if (res.rows?.[0]?.id) return String(res.rows[0].id);
        } catch {}
    }
    // Poi prova con POD
    if (pod) {
        try {
            // Se disponibile, usa anche il cliente come contesto
            const cols = await getTableColumns('contratti_luce');
            let query = 'SELECT id FROM contratti_luce WHERE pod = $1';
            const params: any[] = [pod];
            if (clienteId) {
                if (cols.includes('cliente_privato_id')) {
                    query += ' AND cliente_privato_id = $2';
                    params.push(clienteId);
                } else if (cols.includes('cliente_id')) {
                    query += ' AND cliente_id = $2';
                    params.push(clienteId);
                }
            }
            query += ' LIMIT 1';
            const res = await pool.query<{ id: number | string }>(query, params);
            if (res.rows?.[0]?.id) return String(res.rows[0].id);
        } catch {}
    }
    return null;
}

// Effettua UPSERT per contratto luce: se esiste aggiorna, altrimenti inserisce
async function upsertContrattoLuce(record: Record<string, string>, clienteId: string, createdBy: string | null, dryRun: boolean): Promise<{ id: string; action: 'inserted' | 'updated' | 'would_insert' | 'would_update' }> {
    const modeRaw = (record as any).modalita_import || '';
    const mode = String(modeRaw).toLowerCase();
    const shouldUpdate = mode === 'update' || mode === 'upsert';

    const existingId = await findContrattoLuceId(record, clienteId);
    if (shouldUpdate && existingId) {
        if (dryRun) return { id: existingId, action: 'would_update' };

        const numero_contratto = record.numero_contratto || record.contratto_luce_numero || record.numero_contratto_luce || null;
        const pod = record.pod || record.contratto_luce_pod || (record as any).pod_pdr || null;
        const fornitore = record.fornitore || record.contratto_luce_fornitore_precedente || null;
        const data_attivazione = record.data_attivazione || record.contratto_luce_data_inizio || null;
        const data_scadenza = record.data_scadenza || record.contratto_luce_data_fine || record.contratto_luce_data_scadenza || null;
        const prezzo_energia = record.prezzo_energia || record.contratto_luce_prezzo_energia || null;
        const stato_csv = (record.stato || record.stato_contratto || (record as any)['stato contratto luce'] || record.stato_contratto_luce || null);

        const scadenzaCol = await getScadenzaColumn('contratti_luce');
        const colsAvailable = await getTableColumns('contratti_luce');

        const sets: string[] = [];
        const params: any[] = [];
        if (numero_contratto !== null) { sets.push('numero_contratto = $' + (params.push(numero_contratto))); }
        if (pod !== null) { sets.push('pod = $' + (params.push(pod))); }
        if (fornitore !== null) { sets.push('fornitore = $' + (params.push(fornitore))); }
        if (data_attivazione !== null) { sets.push('data_attivazione = $' + (params.push(data_attivazione))); }
        if (data_scadenza !== null) { sets.push(`${scadenzaCol} = $` + (params.push(data_scadenza))); }
        if (colsAvailable.includes('prezzo_energia')) { sets.push('prezzo_energia = $' + (params.push(prezzo_energia))); }
        if (colsAvailable.includes('stato')) { sets.push('stato = $' + (params.push(stato_csv || 'compilazione'))); }

        if (sets.length > 0) {
            params.push(existingId);
            const setClause = sets.join(', ');
            await pool.query(`UPDATE contratti_luce SET ${setClause} WHERE id = $${params.length}`, params);
        }
        return { id: existingId, action: 'updated' };
    }

    // Fallback: inserisci
    const newId = await insertContrattoLuce(record, clienteId, createdBy, dryRun);
    return { id: newId, action: dryRun ? 'would_insert' : 'inserted' };
}

async function insertContrattoGas(record: Record<string, string>, clienteId: string, createdBy: string | null, dryRun: boolean): Promise<string> {
    const id = randomUUID();
    if (dryRun) return id;

    const numero_contratto = record.numero_contratto || record.contratto_gas_numero || record.numero_contratto_gas || null;
    const pdr = record.pdr || record.contratto_gas_pdr || (record as any).pod_pdr || null;
    const fornitore = record.fornitore || record.contratto_gas_fornitore_precedente || null;
    const data_attivazione = record.data_attivazione || record.contratto_gas_data_inizio || null;
    const data_scadenza = record.data_scadenza || record.contratto_gas_data_fine || record.contratto_gas_data_scadenza || null;
    const prezzo_gas = record.prezzo_gas || record.contratto_gas_prezzo_gas || null;
    const stato_csv = (record.stato || record.stato_contratto || (record as any)['stato contratto gas'] || record.stato_contratto_gas || null);

    const scadenzaCol = await getScadenzaColumn('contratti_gas');

    const colsAvailable = await getTableColumns('contratti_gas');

    const columns: string[] = ['id', 'cliente_privato_id', 'tipo_cliente', 'numero_contratto', 'pdr', 'fornitore', 'data_attivazione', scadenzaCol];
    const values: any[] = [id, clienteId, 'privato', numero_contratto, pdr, fornitore, data_attivazione, data_scadenza];

    if (colsAvailable.includes('prezzo_gas')) {
        columns.push('prezzo_gas');
        values.push(prezzo_gas);
    }
    if (colsAvailable.includes('stato')) {
        columns.push('stato');
        values.push(stato_csv || 'compilazione');
    }
    if (colsAvailable.includes('created_by')) {
        columns.push('created_by');
        values.push(createdBy);
    }
    // Evitiamo 'created_at' per compatibilità

    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    await pool.query(`
        INSERT INTO contratti_gas (${columns.join(', ')})
        VALUES (${placeholders})
    `, values);

    return id;
}

// Trova un contratto gas esistente tramite numero_contratto o PDR (eventualmente legato al cliente)
async function findContrattoGasId(record: Record<string, string>, clienteId?: string): Promise<string | null> {
    const numero_contratto = record.numero_contratto || record.contratto_gas_numero || record.numero_contratto_gas || null;
    const pdr = record.pdr || record.contratto_gas_pdr || (record as any).pod_pdr || null;
    if (numero_contratto) {
        try {
            const res = await pool.query<{ id: number | string }>('SELECT id FROM contratti_gas WHERE numero_contratto = $1 LIMIT 1', [numero_contratto]);
            if (res.rows?.[0]?.id) return String(res.rows[0].id);
        } catch {}
    }
    if (pdr) {
        try {
            const cols = await getTableColumns('contratti_gas');
            let query = 'SELECT id FROM contratti_gas WHERE pdr = $1';
            const params: any[] = [pdr];
            if (clienteId) {
                if (cols.includes('cliente_privato_id')) {
                    query += ' AND cliente_privato_id = $2';
                    params.push(clienteId);
                } else if (cols.includes('cliente_id')) {
                    query += ' AND cliente_id = $2';
                    params.push(clienteId);
                }
            }
            query += ' LIMIT 1';
            const res = await pool.query<{ id: number | string }>(query, params);
            if (res.rows?.[0]?.id) return String(res.rows[0].id);
        } catch {}
    }
    return null;
}

// Effettua UPSERT per contratto gas: se esiste aggiorna, altrimenti inserisce
async function upsertContrattoGas(record: Record<string, string>, clienteId: string, createdBy: string | null, dryRun: boolean): Promise<{ id: string; action: 'inserted' | 'updated' | 'would_insert' | 'would_update' }> {
    const modeRaw = (record as any).modalita_import || '';
    const mode = String(modeRaw).toLowerCase();
    const shouldUpdate = mode === 'update' || mode === 'upsert';

    const existingId = await findContrattoGasId(record, clienteId);
    if (shouldUpdate && existingId) {
        if (dryRun) return { id: existingId, action: 'would_update' };

        const numero_contratto = record.numero_contratto || record.contratto_gas_numero || record.numero_contratto_gas || null;
        const pdr = record.pdr || record.contratto_gas_pdr || (record as any).pod_pdr || null;
        const fornitore = record.fornitore || record.contratto_gas_fornitore_precedente || null;
        const data_attivazione = record.data_attivazione || record.contratto_gas_data_inizio || null;
        const data_scadenza = record.data_scadenza || record.contratto_gas_data_fine || record.contratto_gas_data_scadenza || null;
        const prezzo_gas = record.prezzo_gas || record.contratto_gas_prezzo_gas || null;
        const stato_csv = (record.stato || record.stato_contratto || (record as any)['stato contratto gas'] || record.stato_contratto_gas || null);

        const scadenzaCol = await getScadenzaColumn('contratti_gas');
        const colsAvailable = await getTableColumns('contratti_gas');

        const sets: string[] = [];
        const params: any[] = [];
        if (numero_contratto !== null) { sets.push('numero_contratto = $' + (params.push(numero_contratto))); }
        if (pdr !== null) { sets.push('pdr = $' + (params.push(pdr))); }
        if (fornitore !== null) { sets.push('fornitore = $' + (params.push(fornitore))); }
        if (data_attivazione !== null) { sets.push('data_attivazione = $' + (params.push(data_attivazione))); }
        if (data_scadenza !== null) { sets.push(`${scadenzaCol} = $` + (params.push(data_scadenza))); }
        if (colsAvailable.includes('prezzo_gas')) { sets.push('prezzo_gas = $' + (params.push(prezzo_gas))); }
        if (colsAvailable.includes('stato')) { sets.push('stato = $' + (params.push(stato_csv || 'compilazione'))); }

        if (sets.length > 0) {
            params.push(existingId);
            const setClause = sets.join(', ');
            await pool.query(`UPDATE contratti_gas SET ${setClause} WHERE id = $${params.length}`, params);
        }
        return { id: existingId, action: 'updated' };
    }

    const newId = await insertContrattoGas(record, clienteId, createdBy, dryRun);
    return { id: newId, action: dryRun ? 'would_insert' : 'inserted' };
}

function detectRecordType(rec: Record<string, string>): string {
    const t = (rec.tipo_record || rec.cliente_tipo || rec.tipo || '').toLowerCase();
    if (t.includes('privat')) return 'cliente_privato';
    if (t.includes('aziend')) return 'cliente_azienda';
    if (t.includes('luce')) return 'contratto_luce';
    if (t.includes('gas')) return 'contratto_gas';
    // fallback su colonne presenti
    if (rec.pod || rec.contratto_luce_pod) return 'contratto_luce';
    if (rec.pdr || rec.contratto_gas_pdr) return 'contratto_gas';
    if (rec.codice_fiscale || rec.email_principale || rec.cliente_email) return 'cliente_privato';
    return 'unknown';
}

router.get('/supported-types', async (req, res) => {
    res.json({
        success: true,
        data: {
            types: ['cliente_privato', 'cliente_azienda', 'contratto_luce', 'contratto_gas']
        }
    });
});

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const importId = randomUUID();
        const optionsRaw = req.body?.options || {};
        const options: ImportOptions = typeof optionsRaw === 'string' ? JSON.parse(optionsRaw) : (optionsRaw || {});
        const fileName = req.file?.originalname || 'file.csv';
        const content = req.file ? req.file.buffer.toString('utf8') : (typeof req.body.file === 'string' ? req.body.file : '');
        if (!content) {
            return res.status(400).json({ success: false, message: 'File CSV mancante.' });
        }

        activeImports[importId] = {
            options,
            progress: {
                stage: 'queued',
                progress: 0,
                message: 'In coda',
                startedAt: new Date().toISOString()
            },
            result: {
                success: false,
                fileName,
                totalRows: 0,
                processed: 0,
                errors: [],
                inserted: { clienti_privati: 0, contratti_luce: 0, contratti_gas: 0 },
                warnings: []
            }
        };

        // Parsing CSV
        activeImports[importId].progress = { stage: 'parsing', progress: 5, message: 'Parsing CSV', startedAt: activeImports[importId].progress.startedAt };
        const { headers, records } = parseCsvSimple(content);
        activeImports[importId].result.totalRows = records.length;

        // Debug: colonne disponibili in clienti_privati/aziende
        try {
            const colsPriv = await getTableColumns('clienti_privati');
            const colsAz = await getTableColumns('clienti_aziende');
            activeImports[importId].result.warnings.push(`clienti_privati colonne: ${colsPriv.join(', ')}`);
            activeImports[importId].result.warnings.push(`clienti_aziende colonne: ${colsAz.join(', ')}`);
        } catch {}

        // Created_by: prendi un admin esistente se possibile
        let createdBy: string | null = null;
        try {
            const adminRes = await pool.query<{ id: number | string }>('SELECT id FROM users WHERE email = $1 LIMIT 1', ['admin@gestionale.it']);
            createdBy = adminRes.rows[0]?.id ? String(adminRes.rows[0].id) : null;
        } catch {
            createdBy = null;
        }

        // Elaborazione
        activeImports[importId].progress = { stage: 'processing', progress: 10, message: 'Elaborazione records', startedAt: activeImports[importId].progress.startedAt };

        const batchSize = Math.max(1, Math.min(options.batchSize || 100, 1000));
        let processed = 0;

        // BEGIN TRANSACTION
        await pool.query('BEGIN');

        for (let i = 0; i < records.length; i++) {
            const rec = records[i];
            const rowNum = i + 1;
            try {
                const tipo = options.autoDetectType === false && rec.tipo_record ? rec.tipo_record : detectRecordType(rec);

                if (tipo === 'unknown') {
                    activeImports[importId].result.warnings.push(`Riga ${rowNum}: tipo_record non rilevato`);
                    continue;
                }

                // associazione agente se richiesto
                let assignedUserId: string | null = null;
                if (!options.skipAssociation) {
                    // Supporta sia chiave inglese che italiana e ID diretto
                    const directId = (rec.assigned_agent_id || (rec as any).agente_id || (rec as any).agent_id);
                    if (directId) {
                        assignedUserId = String(directId);
                    } else {
                        assignedUserId = await findUserIdByEmail(
                            (rec as any).assigned_agent_email || (rec as any).agente_email || (rec as any).agent_email || (rec as any).assegnato_a_email
                        );
                    }
                }

                // Debug: registra agente rilevato per cliente_privato
                if (tipo === 'cliente_privato') {
                    activeImports[importId].result.warnings.push(`Riga ${rowNum}: agente rilevato = ${assignedUserId || 'null'}`);
                }

                // Inserimento per tipo
                if (tipo === 'cliente_privato') {
                    const existingId = await findClientePrivatoId(rec);
                    let clienteId = existingId || await insertClientePrivato(rec, createdBy || assignedUserId, assignedUserId, !!options.dryRun);
                    if (!existingId) activeImports[importId].result.inserted.clienti_privati++;
                    // Se il cliente esiste già, aggiorna l'assegnazione agente se disponibile
                    if (existingId && assignedUserId && !options.dryRun) {
                        try {
                            const cols = await getTableColumns('clienti_privati');
                            if (cols.includes('assigned_agent_id')) {
                                const upd = await pool.query(`UPDATE clienti_privati SET assigned_agent_id = $1 WHERE id = $2`, [assignedUserId, clienteId]);
                                activeImports[importId].result.warnings.push(`Riga ${rowNum}: update assigned_agent_id cliente_id=${clienteId}, changes=${upd.rowCount}`);
                            } else {
                                activeImports[importId].result.warnings.push(`Riga ${rowNum}: colonna assigned_agent_id non presente, skip update`);
                            }
                        } catch (e) {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: impossibile aggiornare assegnazione agente (${(e as any)?.message || 'errore'})`);
                        }
                    }
                    // Se nel record ci sono campi contratto luce/gas, inseriscili
                    if (rec.pod || rec.contratto_luce_pod || rec.numero_contratto_luce) {
                        const up = await upsertContrattoLuce(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                        if (up.action === 'inserted' || up.action === 'would_insert') {
                            activeImports[importId].result.inserted.contratti_luce++;
                        } else {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: contratto_luce ${up.id} aggiornato (${up.action})`);
                        }
                    }
                    if (rec.pdr || rec.contratto_gas_pdr || rec.numero_contratto_gas) {
                        const up = await upsertContrattoGas(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                        if (up.action === 'inserted' || up.action === 'would_insert') {
                            activeImports[importId].result.inserted.contratti_gas++;
                        } else {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: contratto_gas ${up.id} aggiornato (${up.action})`);
                        }
                    }
                } else if (tipo === 'contratto_luce') {
                    let clienteId = await findClientePrivatoId(rec);
                    if (!clienteId) {
                        // crea cliente minimo se mancante
                        clienteId = await insertClientePrivato(rec, createdBy || assignedUserId, assignedUserId, !!options.dryRun);
                        activeImports[importId].result.inserted.clienti_privati++;
                    }
                    // Aggiorna assegnazione agente anche su contratti, se disponibile
                    if (assignedUserId && !options.dryRun) {
                        try {
                            const cols = await getTableColumns('clienti_privati');
                            if (cols.includes('assigned_agent_id')) {
                                const upd = await pool.query(`UPDATE clienti_privati SET assigned_agent_id = $1 WHERE id = $2`, [assignedUserId, clienteId]);
                                activeImports[importId].result.warnings.push(`Riga ${rowNum}: update assigned_agent_id da contratto_luce cliente_id=${clienteId}, changes=${upd.rowCount}`);
                            }
                        } catch (e) {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: impossibile aggiornare assegnazione agente da contratto_luce (${(e as any)?.message || 'errore'})`);
                        }
                    }
                    {
                        const up = await upsertContrattoLuce(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                        if (up.action === 'inserted' || up.action === 'would_insert') {
                            activeImports[importId].result.inserted.contratti_luce++;
                        } else {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: contratto_luce ${up.id} aggiornato (${up.action})`);
                        }
                    }
                } else if (tipo === 'contratto_gas') {
                    let clienteId = await findClientePrivatoId(rec);
                    if (!clienteId) {
                        clienteId = await insertClientePrivato(rec, createdBy || assignedUserId, assignedUserId, !!options.dryRun);
                        activeImports[importId].result.inserted.clienti_privati++;
                    }
                    // Aggiorna assegnazione agente anche su contratti, se disponibile
                    if (assignedUserId && !options.dryRun) {
                        try {
                            const cols = await getTableColumns('clienti_privati');
                            if (cols.includes('assigned_agent_id')) {
                                const upd = await pool.query(`UPDATE clienti_privati SET assigned_agent_id = $1 WHERE id = $2`, [assignedUserId, clienteId]);
                                activeImports[importId].result.warnings.push(`Riga ${rowNum}: update assigned_agent_id da contratto_gas cliente_id=${clienteId}, changes=${upd.rowCount}`);
                            }
                        } catch (e) {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: impossibile aggiornare assegnazione agente da contratto_gas (${(e as any)?.message || 'errore'})`);
                        }
                    }
                    {
                        const up = await upsertContrattoGas(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                        if (up.action === 'inserted' || up.action === 'would_insert') {
                            activeImports[importId].result.inserted.contratti_gas++;
                        } else {
                            activeImports[importId].result.warnings.push(`Riga ${rowNum}: contratto_gas ${up.id} aggiornato (${up.action})`);
                        }
                    }
                } else if (tipo === 'cliente_azienda') {
                    // TODO: estendere per aziende se necessario (simile a privati con tabella clienti_aziende)
                    activeImports[importId].result.warnings.push(`Riga ${rowNum}: import clienti_azienda non implementato in questa versione`);
                }

                processed++;
                if (processed % batchSize === 0) {
                    activeImports[importId].progress.progress = Math.min(95, Math.floor(10 + (processed / records.length) * 85));
                }
            } catch (err: any) {
                activeImports[importId].result.errors.push({ row: rowNum, error: err?.message || 'Errore generico' });
            }
        }

        // COMMIT or ROLLBACK
        if (!options.dryRun) {
            await pool.query('COMMIT');
        } else {
            await pool.query('ROLLBACK');
        }

        activeImports[importId].result.processed = processed;
        activeImports[importId].result.success = activeImports[importId].result.errors.length === 0;
        activeImports[importId].progress = {
            stage: 'completed',
            progress: 100,
            message: `Import completato (${processed}/${records.length})`,
            startedAt: activeImports[importId].progress.startedAt,
            completedAt: new Date().toISOString()
        };

        return res.json({
            success: true,
            data: {
                importId,
                message: 'Import avviato',
                totalRows: records.length
            }
        });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error?.message || 'Errore interno upload' });
    }
});

router.get('/progress/:importId', async (req, res) => {
    const { importId } = req.params;
    const state = activeImports[importId];
    if (!state) return res.status(404).json({ success: false, message: 'Import non trovato' });
    res.json({ success: true, data: state.progress });
});

router.get('/result/:importId', async (req, res) => {
    const { importId } = req.params;
    const state = activeImports[importId];
    if (!state) return res.status(404).json({ success: false, message: 'Import non trovato' });
    res.json({ success: true, data: state.result });
});

export default router;