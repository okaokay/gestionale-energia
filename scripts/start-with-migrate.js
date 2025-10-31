const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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
startServer();