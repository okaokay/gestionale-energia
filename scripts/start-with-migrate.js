const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Determina il percorso del database
const dbPath = process.env.DATABASE_PATH
  ? path.resolve(process.env.DATABASE_PATH)
  : path.join(process.cwd(), 'gestionale_energia.db');

console.log('📁 DATABASE_PATH:', dbPath);

// Se il file DB non esiste, esegue la migrazione usando il build JS
function ensureDatabaseMigrated() {
  try {
    const exists = fs.existsSync(dbPath);
    const size = exists ? fs.statSync(dbPath).size : 0;

    // Esegui sempre la migrazione: è idempotente e crea tabelle mancanti
    const migrateScript = path.join(process.cwd(), 'dist', 'backend', 'database', 'migrate-sqlite.js');

    if (!fs.existsSync(migrateScript)) {
      console.error('❌ Script di migrazione non trovato:', migrateScript);
      process.exit(1);
    }

    if (!exists || size === 0) {
      console.log('🔧 Database mancante o vuoto. Avvio migrazione SQLite...');
    } else {
      console.log('🔧 Avvio migrazione idempotente per creare tabelle mancanti...');
    }

    const res = spawnSync(process.argv[0], [migrateScript], { stdio: 'inherit' });
    if (res.status !== 0) {
      console.error('❌ Migrazione fallita con codice:', res.status);
      process.exit(res.status || 1);
    }

    console.log('✅ Migrazione completata. Database pronto.');
  } catch (err) {
    console.error('❌ Errore controllo/migrazione database:', err);
    process.exit(1);
  }
}

// Patch schema: assicura colonne mancanti su email_campaigns per retrocompatibilità
function patchSchemaIfNeeded() {
  try {
    const db = new Database(dbPath);

    // Controlla struttura tabella email_campaigns
    const columns = db.prepare("PRAGMA table_info(email_campaigns)").all().map(c => c.name);
    const hasScheduledEndAt = columns.includes('scheduled_end_at');
    const hasSentAt = columns.includes('sent_at');

    if (!hasScheduledEndAt) {
      try {
        db.exec("ALTER TABLE email_campaigns ADD COLUMN scheduled_end_at TEXT;");
        console.log('   ✅ Patch: aggiunta colonna email_campaigns.scheduled_end_at');
      } catch (e) {
        const msg = typeof e.message === 'string' ? e.message : String(e);
        if (msg.includes('duplicate column name')) {
          console.log('   ⚠️  Patch: scheduled_end_at già presente, skip');
        } else if (msg.includes('no such table')) {
          console.log('   ⚠️  Patch: tabella email_campaigns assente, verrà creata dalla migrazione');
        } else {
          console.log('   ⚠️  Patch: impossibile aggiungere scheduled_end_at:', msg);
        }
      }
    }

    if (!hasSentAt) {
      try {
        db.exec("ALTER TABLE email_campaigns ADD COLUMN sent_at TEXT;");
        console.log('   ✅ Patch: aggiunta colonna email_campaigns.sent_at');
      } catch (e) {
        const msg = typeof e.message === 'string' ? e.message : String(e);
        if (msg.includes('duplicate column name')) {
          console.log('   ⚠️  Patch: sent_at già presente, skip');
        } else if (msg.includes('no such table')) {
          console.log('   ⚠️  Patch: tabella email_campaigns assente, verrà creata dalla migrazione');
        } else {
          console.log('   ⚠️  Patch: impossibile aggiungere sent_at:', msg);
        }
      }
    }

    db.close();
  } catch (err) {
    console.log('❌ Errore durante patch schema:', err);
    // Non bloccare l'avvio del server in caso di errore di patch
  }
}

// Patch schema clienti: assicura colonne estese per clienti_privati e clienti_aziende
function patchClientColumnsIfNeeded() {
  try {
    const db = new Database(dbPath);

    // Colonne estese per clienti_privati (idempotenti)
    const privatiColumns = [
      'ALTER TABLE clienti_privati ADD COLUMN email_secondaria TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN telefono_fisso TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN pec TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN civico_residenza TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN cap_residenza TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN provincia_residenza TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN via_fornitura TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN civico_fornitura TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN cap_fornitura TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN citta_fornitura TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN provincia_fornitura TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN tipo_documento TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN numero_documento TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN ente_rilascio TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN data_scadenza_documento TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN iban TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN preferenza_email INTEGER DEFAULT 1',
      'ALTER TABLE clienti_privati ADD COLUMN preferenza_sms INTEGER DEFAULT 1',
      'ALTER TABLE clienti_privati ADD COLUMN preferenza_telefono INTEGER DEFAULT 1',
      'ALTER TABLE clienti_privati ADD COLUMN note TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN data_consenso TEXT',
      'ALTER TABLE clienti_privati ADD COLUMN created_by TEXT'
    ];

    for (const sql of privatiColumns) {
      try {
        db.exec(sql);
        const colName = sql.split('ADD COLUMN ')[1]?.split(' ')[0] || 'colonna';
        console.log(`   ✅ Patch clienti_privati: aggiunta ${colName}`);
      } catch (e) {
        const msg = typeof e.message === 'string' ? e.message : String(e);
        if (msg.includes('duplicate column name')) {
          const colName = sql.split('ADD COLUMN ')[1]?.split(' ')[0] || 'colonna';
          console.log(`   ⚠️  Patch clienti_privati: ${colName} già presente, skip`);
        } else if (msg.includes('no such table')) {
          console.log('   ⚠️  Patch clienti_privati: tabella assente, verrà creata dalla migrazione');
        } else {
          console.log('   ⚠️  Patch clienti_privati: errore alter:', msg);
        }
      }
    }

    // Colonne estese per clienti_aziende (idempotenti)
    const aziendeColumns = [
      'ALTER TABLE clienti_aziende ADD COLUMN codice_fiscale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN descrizione_ateco TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN pec_aziendale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN via_sede_legale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN civico_sede_legale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN cap_sede_legale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN provincia_sede_legale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN via_sede_operativa TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN civico_sede_operativa TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN cap_sede_operativa TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN citta_sede_operativa TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN provincia_sede_operativa TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN nome_referente TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN cognome_referente TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN ruolo_referente TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN dimensione_azienda TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN settore_merceologico TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN fatturato_annuo REAL',
      'ALTER TABLE clienti_aziende ADD COLUMN iban_aziendale TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN codice_sdi TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN note TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN data_consenso TEXT',
      'ALTER TABLE clienti_aziende ADD COLUMN created_by TEXT'
    ];

    for (const sql of aziendeColumns) {
      try {
        db.exec(sql);
        const colName = sql.split('ADD COLUMN ')[1]?.split(' ')[0] || 'colonna';
        console.log(`   ✅ Patch clienti_aziende: aggiunta ${colName}`);
      } catch (e) {
        const msg = typeof e.message === 'string' ? e.message : String(e);
        if (msg.includes('duplicate column name')) {
          const colName = sql.split('ADD COLUMN ')[1]?.split(' ')[0] || 'colonna';
          console.log(`   ⚠️  Patch clienti_aziende: ${colName} già presente, skip`);
        } else if (msg.includes('no such table')) {
          console.log('   ⚠️  Patch clienti_aziende: tabella assente, verrà creata dalla migrazione');
        } else {
          console.log('   ⚠️  Patch clienti_aziende: errore alter:', msg);
        }
      }
    }

    db.close();
  } catch (err) {
    console.log('❌ Errore durante patch colonne clienti:', err);
    // Non bloccare l'avvio
  }
}

// Ricostruisce le tabelle clienti_* rimuovendo vincoli NOT NULL per supportare import incompleti
function relaxClientNullConstraintsIfNeeded() {
  try {
    const db = new Database(dbPath);

    // Utilità: controlla se una tabella ha vincoli NOT NULL su campi che vogliamo opzionali
    const needRelax = (table, optionalFields) => {
      try {
        const cols = db.prepare(`PRAGMA table_info(${table})`).all();
        if (!cols || cols.length === 0) return false; // tabella non esiste
        const byName = Object.fromEntries(cols.map(c => [c.name, c]));
        return optionalFields.some(f => byName[f] && Number(byName[f].notnull) === 1);
      } catch (e) {
        return false;
      }
    };

    // Ricostruzione generica: crea nuova tabella con schema target, copia dati comuni, rimpiazza
    const rebuildTable = (table, createSql, targetColumns) => {
      // Determina colonne esistenti
      const existing = db.prepare(`PRAGMA table_info(${table})`).all().map(c => c.name);
      const common = targetColumns.filter(c => existing.includes(c));
      db.exec(`BEGIN TRANSACTION;`);
      try {
        db.exec(`CREATE TABLE ${table}_new (${createSql});`);
        if (common.length > 0) {
          const colList = common.join(', ');
          db.exec(`INSERT INTO ${table}_new (${colList}) SELECT ${colList} FROM ${table};`);
        }
        db.exec(`DROP TABLE ${table};`);
        db.exec(`ALTER TABLE ${table}_new RENAME TO ${table};`);
        db.exec(`COMMIT;`);
        console.log(`✅ Tabella ${table} ricostruita con campi nullable`);
      } catch (e) {
        db.exec(`ROLLBACK;`);
        console.log(`❌ Errore ricostruzione ${table}:`, e.message || e);
      }
    };

    // clienti_privati: schema target completamente nullable (allineato a migrate-clienti-nullable.ts)
    const privatiOptional = [
      'nome','cognome','codice_fiscale','data_nascita','email_principale','telefono_mobile',
      'via_residenza','citta_residenza'
    ];
    if (needRelax('clienti_privati', privatiOptional)) {
      console.log('🔨 Ricostruzione clienti_privati per rimuovere vincoli NOT NULL...');
      const privatiCreateColumns = [
        'id TEXT PRIMARY KEY',
        'nome TEXT',
        'cognome TEXT',
        'codice_fiscale TEXT',
        'data_nascita TEXT',
        'email_principale TEXT',
        'email_secondaria TEXT',
        'telefono_fisso TEXT',
        'telefono_mobile TEXT',
        'pec TEXT',
        'via_residenza TEXT',
        'civico_residenza TEXT',
        'cap_residenza TEXT',
        'citta_residenza TEXT',
        'provincia_residenza TEXT',
        'via_fornitura TEXT',
        'civico_fornitura TEXT',
        'cap_fornitura TEXT',
        'citta_fornitura TEXT',
        'provincia_fornitura TEXT',
        'tipo_documento TEXT',
        'numero_documento TEXT',
        'ente_rilascio TEXT',
        'data_scadenza_documento TEXT',
        'iban TEXT',
        'preferenza_email INTEGER DEFAULT 1',
        'preferenza_sms INTEGER DEFAULT 1',
        'preferenza_telefono INTEGER DEFAULT 1',
        'note TEXT',
        'consenso_privacy INTEGER DEFAULT 0',
        'consenso_marketing INTEGER DEFAULT 0',
        'data_consenso TEXT',
        'newsletter_attiva INTEGER DEFAULT 1',
        'unsubscribe_token TEXT',
        'created_at TEXT DEFAULT CURRENT_TIMESTAMP',
        'updated_at TEXT DEFAULT CURRENT_TIMESTAMP',
        'created_by TEXT'
      ];
      rebuildTable('clienti_privati', privatiCreateColumns.join(', '), privatiCreateColumns.map(c => c.split(' ')[0]));
      // Indici utili
      try {
        db.exec(`CREATE INDEX IF NOT EXISTS idx_privati_codice_fiscale ON clienti_privati(codice_fiscale);`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_privati_email ON clienti_privati(email_principale);`);
      } catch {}
    } else {
      console.log('✅ Schema clienti_privati già privo di NOT NULL vincolanti');
    }

    // clienti_aziende: schema target completamente nullable
    const aziendeOptional = [
      'ragione_sociale','partita_iva','codice_ateco','email_referente','telefono_referente','citta_sede_legale'
    ];
    if (needRelax('clienti_aziende', aziendeOptional)) {
      console.log('🔨 Ricostruzione clienti_aziende per rimuovere vincoli NOT NULL...');
      const aziendeCreateColumns = [
        'id TEXT PRIMARY KEY',
        'ragione_sociale TEXT',
        'partita_iva TEXT',
        'codice_fiscale TEXT',
        'codice_ateco TEXT',
        'descrizione_ateco TEXT',
        'pec_aziendale TEXT',
        'via_sede_legale TEXT',
        'civico_sede_legale TEXT',
        'cap_sede_legale TEXT',
        'citta_sede_legale TEXT',
        'provincia_sede_legale TEXT',
        'via_sede_operativa TEXT',
        'civico_sede_operativa TEXT',
        'cap_sede_operativa TEXT',
        'citta_sede_operativa TEXT',
        'provincia_sede_operativa TEXT',
        'nome_referente TEXT',
        'cognome_referente TEXT',
        'ruolo_referente TEXT',
        'email_referente TEXT',
        'telefono_referente TEXT',
        'dimensione_azienda TEXT',
        'settore_merceologico TEXT',
        'fatturato_annuo REAL',
        'iban_aziendale TEXT',
        'codice_sdi TEXT',
        'note TEXT',
        'consenso_privacy INTEGER DEFAULT 0',
        'consenso_marketing INTEGER DEFAULT 0',
        'data_consenso TEXT',
        'newsletter_attiva INTEGER DEFAULT 1',
        'unsubscribe_token TEXT',
        'created_at TEXT DEFAULT CURRENT_TIMESTAMP',
        'updated_at TEXT DEFAULT CURRENT_TIMESTAMP',
        'created_by TEXT'
      ];
      rebuildTable('clienti_aziende', aziendeCreateColumns.join(', '), aziendeCreateColumns.map(c => c.split(' ')[0]));
      try {
        db.exec(`CREATE INDEX IF NOT EXISTS idx_aziende_partita_iva ON clienti_aziende(partita_iva);`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_aziende_email ON clienti_aziende(email_referente);`);
      } catch {}
    } else {
      console.log('✅ Schema clienti_aziende già privo di NOT NULL vincolanti');
    }

    db.close();
  } catch (err) {
    console.log('❌ Errore relax vincoli clienti:', err);
    // Non bloccare l'avvio del server
  }
}

function startServer() {
  const serverScript = path.join(process.cwd(), 'dist', 'backend', 'server.js');
  if (!fs.existsSync(serverScript)) {
    console.error('❌ Script server non trovato:', serverScript);
    process.exit(1);
  }
  console.log('🚀 Avvio server backend...');
  const res = spawnSync(process.argv[0], [serverScript], { stdio: 'inherit' });
  process.exit(res.status || 0);
}

ensureDatabaseMigrated();
// Ricrea tabelle clienti con campi nullable se sono presenti vincoli NOT NULL
relaxClientNullConstraintsIfNeeded();
// Applica patch schema per garantire colonne richieste dalle query runtime
patchSchemaIfNeeded();
// Applica patch clienti per garantire colonne estese
patchClientColumnsIfNeeded();
startServer();