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
// Applica patch schema per garantire colonne richieste dalle query runtime
patchSchemaIfNeeded();
// Applica patch clienti per garantire colonne estese
patchClientColumnsIfNeeded();
startServer();