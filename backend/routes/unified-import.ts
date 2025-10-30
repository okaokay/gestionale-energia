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

async function insertClientePrivato(record: Record<string, string>, createdBy: string | null, dryRun: boolean): Promise<string> {
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

    await pool.query(`
        INSERT INTO clienti_privati (
            nome, cognome, codice_fiscale, data_nascita,
            email_principale, telefono_mobile, via_residenza,
            civico_residenza, cap_residenza, citta_residenza, provincia_residenza,
            tipo_documento, numero_documento, ente_rilascio, data_scadenza_documento, iban,
            consenso_privacy, consenso_marketing, data_consenso,
            created_by, created_at
        ) VALUES (
            $1, $2, $3, $4,
            $5, $6, $7,
            $8, $9, $10, $11,
            $12, $13, $14, $15, $16,
            1, 1, datetime('now'),
            $17, datetime('now')
        )
    `, [nome, cognome, cf, data_nascita, email, tel, via, civico, cap, citta, provincia, tipo_doc, num_doc, ente, scadenza_doc, iban, createdBy]);

    const sel = await pool.query<{ id: number }>(`SELECT last_insert_rowid() as id`);
    const id = sel.rows?.[0]?.id;
    return String(id);
}

async function insertContrattoLuce(record: Record<string, string>, clienteId: string, createdBy: string | null, dryRun: boolean): Promise<string> {
    const id = randomUUID();
    if (dryRun) return id;

    const numero_contratto = record.numero_contratto || record.contratto_luce_numero || record.numero_contratto_luce || null;
    const pod = record.pod || record.contratto_luce_pod || null;
    const fornitore = record.fornitore || record.contratto_luce_fornitore_precedente || null;
    const data_attivazione = record.data_attivazione || record.contratto_luce_data_inizio || null;
    const data_scadenza = record.data_scadenza || record.contratto_luce_data_fine || record.contratto_luce_data_scadenza || null;
    const prezzo_energia = record.prezzo_energia || record.contratto_luce_prezzo_energia || null;

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
        values.push('attivo');
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

async function insertContrattoGas(record: Record<string, string>, clienteId: string, createdBy: string | null, dryRun: boolean): Promise<string> {
    const id = randomUUID();
    if (dryRun) return id;

    const numero_contratto = record.numero_contratto || record.contratto_gas_numero || record.numero_contratto_gas || null;
    const pdr = record.pdr || record.contratto_gas_pdr || null;
    const fornitore = record.fornitore || record.contratto_gas_fornitore_precedente || null;
    const data_attivazione = record.data_attivazione || record.contratto_gas_data_inizio || null;
    const data_scadenza = record.data_scadenza || record.contratto_gas_data_fine || record.contratto_gas_data_scadenza || null;
    const prezzo_gas = record.prezzo_gas || record.contratto_gas_prezzo_gas || null;

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
        values.push('attivo');
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
                    assignedUserId = await findUserIdByEmail(rec.assigned_agent_email || rec.agent_email || rec.assegnato_a_email);
                }

                // Inserimento per tipo
                if (tipo === 'cliente_privato') {
                    const existingId = await findClientePrivatoId(rec);
                    const clienteId = existingId || await insertClientePrivato(rec, createdBy || assignedUserId, !!options.dryRun);
                    if (!existingId) activeImports[importId].result.inserted.clienti_privati++;
                    // Se nel record ci sono campi contratto luce/gas, inseriscili
                    if (rec.pod || rec.contratto_luce_pod || rec.numero_contratto_luce) {
                        await insertContrattoLuce(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                        activeImports[importId].result.inserted.contratti_luce++;
                    }
                    if (rec.pdr || rec.contratto_gas_pdr || rec.numero_contratto_gas) {
                        await insertContrattoGas(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                        activeImports[importId].result.inserted.contratti_gas++;
                    }
                } else if (tipo === 'contratto_luce') {
                    let clienteId = await findClientePrivatoId(rec);
                    if (!clienteId) {
                        // crea cliente minimo se mancante
                        clienteId = await insertClientePrivato(rec, createdBy || assignedUserId, !!options.dryRun);
                        activeImports[importId].result.inserted.clienti_privati++;
                    }
                    await insertContrattoLuce(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                    activeImports[importId].result.inserted.contratti_luce++;
                } else if (tipo === 'contratto_gas') {
                    let clienteId = await findClientePrivatoId(rec);
                    if (!clienteId) {
                        clienteId = await insertClientePrivato(rec, createdBy || assignedUserId, !!options.dryRun);
                        activeImports[importId].result.inserted.clienti_privati++;
                    }
                    await insertContrattoGas(rec, clienteId, createdBy || assignedUserId, !!options.dryRun);
                    activeImports[importId].result.inserted.contratti_gas++;
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