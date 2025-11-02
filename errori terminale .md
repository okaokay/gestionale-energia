2025-11-01 18:46:49 gestionale-energia-hostinger  | 📁 DATABASE_PATH: /app/backend/database/database.sqlite
2025-11-01 18:46:49 gestionale-energia-hostinger  | 🔧 Avvio migrazione idempotente per creare tabelle mancanti...
2025-11-01 18:46:49 gestionale-energia-hostinger  | 🚀 Inizio migrazione SQLite...
2025-11-01 18:46:49 gestionale-energia-hostinger  | ✅ Tabella users creata
2025-11-01 18:46:49 gestionale-energia-hostinger  | ✅ Utente Super Admin creato
2025-11-01 18:46:49 gestionale-energia-hostinger  |    Email: admin@gestionale.it
2025-11-01 18:46:49 gestionale-energia-hostinger  |    Password: Admin123!
2025-11-01 18:46:49 gestionale-energia-hostinger  | ✅ Tabelle clienti create
2025-11-01 18:46:49 gestionale-energia-hostinger  | ✅ Tabelle contratti create
2025-11-01 18:46:49 gestionale-energia-hostinger  | 💰 Creazione tabella contabilita_movimenti...
2025-11-01 18:46:49 gestionale-energia-hostinger  | ✅ Tabella contabilita_movimenti creata con indici
2025-11-01 18:46:49 gestionale-energia-hostinger  | ✅ Tabella offerte creata
2025-11-01 18:46:49 gestionale-energia-hostinger  | 🧩 Verifica/Aggiunta colonne utenti mancanti...
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.role già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.is_active già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.parent_id già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.agency_name già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.phone già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.commissioni_luce_default già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  users.commissioni_gas_default già presente, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  | 🧩 Verifica/Aggiunta colonne mancanti...
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.codice_cliente
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  provincia_residenza già presente su clienti_privati, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.incomplete_data
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.missing_fields
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.data_quality_score
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.stato
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.assigned_agent_id
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.commissione_pattuita
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_privati.commissione_pagata
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ⚠️  provincia_sede_legale già presente su clienti_aziende, skip
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.codice_cliente
2025-11-01 18:46:49 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.stato
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.assigned_agent_id
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.commissione_pattuita
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.commissione_pagata
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.email_principale
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.incomplete_data
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.missing_fields
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ✅ Aggiunta colonna clienti_aziende.data_quality_score
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  contratti_luce.data_inizio già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  contratti_gas.data_inizio già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  contratti_luce.data_fine già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  contratti_gas.data_fine già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  | 💼 Creazione tabella compensi...
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Tabella compensi creata con indici
2025-11-01 18:46:50 gestionale-energia-hostinger  | 📰 Creazione tabelle newsletter...
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Tabelle newsletter create e seed inserito
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Tabella ai_matches creata
2025-11-01 18:46:50 gestionale-energia-hostinger  | 📧 Creazione tabella email_templates...
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Tabella email_templates creata
2025-11-01 18:46:50 gestionale-energia-hostinger  | 📧 Creazione tabella email_campaigns...
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Tabella email_campaigns creata con indici
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  scheduled_end_at già presente su email_campaigns, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  sent_at già presente su email_campaigns, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  | 📧 Creazione tabella email_logs...
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Tabella email_logs creata con indici
2025-11-01 18:46:50 gestionale-energia-hostinger  | 
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✨ Migrazione SQLite completata con successo!
2025-11-01 18:46:50 gestionale-energia-hostinger  | 
2025-11-01 18:46:50 gestionale-energia-hostinger  | 🎯 Database pronto all'uso:
2025-11-01 18:46:50 gestionale-energia-hostinger  |    Percorso: /app/backend/database/database.sqlite
2025-11-01 18:46:50 gestionale-energia-hostinger  |    Tipo: SQLite (nessun server richiesto)
2025-11-01 18:46:50 gestionale-energia-hostinger  | 
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Avvia il server: npm run dev
2025-11-01 18:46:50 gestionale-energia-hostinger  |    Frontend: http://localhost:5177
2025-11-01 18:46:50 gestionale-energia-hostinger  |    Login: admin@gestionale.it / Admin123!
2025-11-01 18:46:50 gestionale-energia-hostinger  | 
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Migrazione completata. Database pronto.
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Schema clienti_privati già privo di NOT NULL vincolanti
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Schema clienti_aziende già privo di NOT NULL vincolanti
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: email_secondaria già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: telefono_fisso già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: pec già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: civico_residenza già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: cap_residenza già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: provincia_residenza già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: via_fornitura già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: civico_fornitura già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: cap_fornitura già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: citta_fornitura già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: provincia_fornitura già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: tipo_documento già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: numero_documento già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: ente_rilascio già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: data_scadenza_documento già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: iban già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: preferenza_email già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: preferenza_sms già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: preferenza_telefono già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: note già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: data_consenso già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_privati: created_by già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: codice_fiscale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: descrizione_ateco già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: pec_aziendale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: via_sede_legale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: civico_sede_legale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: cap_sede_legale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: provincia_sede_legale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: via_sede_operativa già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: civico_sede_operativa già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: cap_sede_operativa già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: citta_sede_operativa già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: provincia_sede_operativa già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: nome_referente già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: cognome_referente già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: ruolo_referente già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: dimensione_azienda già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: settore_merceologico già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: fatturato_annuo già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: iban_aziendale già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: codice_sdi già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: note già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: data_consenso già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  |    ⚠️  Patch clienti_aziende: created_by già presente, skip
2025-11-01 18:46:50 gestionale-energia-hostinger  | 🚀 Avvio server backend...
2025-11-01 18:46:50 gestionale-energia-hostinger  | ✅ Database SQLite connesso: /app/backend/database/database.sqlite
2025-11-01 18:46:50 gestionale-energia-hostinger  | 📡 Configurazione AI: Provider=ollama, URL=http://185.31.67.249/api/generate
2025-11-01 18:46:51 gestionale-energia-hostinger  | 🔌 Test connessione database...
2025-11-01 18:46:51 gestionale-energia-hostinger  | ✅ Test connessione SQLite OK
2025-11-01 18:46:51 gestionale-energia-hostinger  | ⏰ Avvio cron job alert scadenze: 0 9 * * *
2025-11-01 18:46:51 gestionale-energia-hostinger  | ✅ Cron job email scheduler attivo
2025-11-01 18:46:51 gestionale-energia-hostinger  | 
2025-11-01 18:46:51 gestionale-energia-hostinger  | ⏰ Avvio scheduler campagne email (ogni 5 minuti)
2025-11-01 18:46:51 gestionale-energia-hostinger  | ✅ Campaign scheduler attivo
2025-11-01 18:46:51 gestionale-energia-hostinger  | 
2025-11-01 18:46:51 gestionale-energia-hostinger  | 
2025-11-01 18:46:51 gestionale-energia-hostinger  | ============================================================
2025-11-01 18:46:51 gestionale-energia-hostinger  | 🚀 GESTIONALE ENERGIA - Server avviato con successo!
2025-11-01 18:46:51 gestionale-energia-hostinger  | ============================================================
2025-11-01 18:46:51 gestionale-energia-hostinger  | 📡 Server in ascolto su: http://localhost:3001
2025-11-01 18:46:51 gestionale-energia-hostinger  | 🌍 Ambiente: production
2025-11-01 18:46:51 gestionale-energia-hostinger  | 📊 Database: undefined
2025-11-01 18:46:51 gestionale-energia-hostinger  | 🔐 Frontend URL: http://localhost:5173
2025-11-01 18:46:51 gestionale-energia-hostinger  | ============================================================
2025-11-01 18:46:51 gestionale-energia-hostinger  | 
2025-11-01 18:46:51 gestionale-energia-hostinger  | 📋 API Endpoints disponibili:
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/auth/login
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/clienti
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/clienti/privati
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/clienti/aziende
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/contratti/luce
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/contratti/gas
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/contratti/scadenze
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/offerte
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/offerte/upload (Super Admin)
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/offerte/:id/matches
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/dashboard/stats
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/emails/campaigns
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/emails/campaigns
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/unified-import/upload (Import CSV/Excel)
2025-11-01 18:46:51 gestionale-energia-hostinger  |    POST   /api/unified-import/validate (Validazione file)
2025-11-01 18:46:51 gestionale-energia-hostinger  |    GET    /api/unified-import/supported-types
2025-11-01 18:46:51 gestionale-energia-hostinger  | ============================================================
2025-11-01 18:46:51 gestionale-energia-hostinger  | 
2025-11-01 18:46:51 gestionale-energia-hostinger  | ✅ Pronto per ricevere richieste!
2025-11-01 18:46:51 gestionale-energia-hostinger  | 
2025-11-01 18:46:54 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:46:54 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /agenti HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 200 496 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:08 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:08 +0000] "GET /api/agenti HTTP/1.1" 200 247 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:10 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:10 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:10 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:10 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019230648 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:10 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:10 +0000] "GET /api/clienti/newsletter HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:12 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:12 +0000] "GET /api/dashboard/scadenze HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:12 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:12 +0000] "GET /api/dashboard/stats HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:12 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:12 +0000] "GET /api/dashboard/hot-leads HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:13 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:13 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:13 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:13 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:13 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:47:13 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019233183 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.251 Electron/37.6.1 Safari/537.36"
2025-11-01 18:47:24 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:47:24 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:47:55 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:47:55 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:48:25 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:48:25 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:48:55 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:48:55 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /clienti HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 200 496 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:57 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:57 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:58 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:58 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:58 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:58 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019338398 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:58 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:58 +0000] "GET /api/clienti/newsletter HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:48:59 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:48:59 +0000] "GET /vite.svg HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:00 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:00 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:00 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:00 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:01 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:01 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:01 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:01 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:01 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:01 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019341223 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:01 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:01 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /clienti HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 200 496 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /api/agenti HTTP/1.1" 200 247 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019347696 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /api/clienti/newsletter HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:49:07 +0000] "GET /vite.svg HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:49:25 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:49:25 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:49:55 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:49:55 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:50:00 gestionale-energia-hostinger  | 
2025-11-01 18:50:00 gestionale-energia-hostinger  | ⏰ [01/11/2025, 18:50:00] Controllo campagne programmate
2025-11-01 18:50:00 gestionale-energia-hostinger  | 📧 Inizio controllo campagne programmate...
2025-11-01 18:50:00 gestionale-energia-hostinger  | 💤 Nessuna campagna programmata da inviare
2025-11-01 18:50:25 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:50:25 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:50:55 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:50:55 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:51:25 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:51:25 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:51:42 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:42 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 117 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:43 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:43 +0000] "GET /api/unified-import/result/0870b820-d65c-4ac9-ac59-921de1fe165c HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:48 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:48 +0000] "POST /api/clienti/recalculate-quality HTTP/1.1" 200 120 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:48 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:48 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019508432 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:50 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:51 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:51 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:51 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:51 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:51 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:51 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019511033 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:51 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:51 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:51 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:51 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019512275 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:52 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:52 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019513225 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:53 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:53 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:54 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:54 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:54 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:54 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:54 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:54 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019514009 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:54 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:54 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:54 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:54 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019515312 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:51:55 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:51:55 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:51:55 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:09 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:52:09 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:52:09 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:52:09 gestionale-energia-hostinger  | }
2025-11-01 18:52:10 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:10 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 117 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:10 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:10 +0000] "GET /api/unified-import/result/661ac062-4fe3-4611-826c-4fb6c0dc8fca HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:18 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: no such column: last_quality_check
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at Database.prepare (/app/node_modules/better-sqlite3/lib/methods/wrappers.js:5:21)
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:56:33)
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at /app/dist/backend/routes/clienti.js:1277:35
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
2025-11-01 18:52:18 gestionale-energia-hostinger  |   code: 'SQLITE_ERROR'
2025-11-01 18:52:18 gestionale-energia-hostinger  | }
2025-11-01 18:52:18 gestionale-energia-hostinger  | ❌ Errore: SqliteError: no such column: last_quality_check
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at Database.prepare (/app/node_modules/better-sqlite3/lib/methods/wrappers.js:5:21)
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:56:33)
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at /app/dist/backend/routes/clienti.js:1277:35
2025-11-01 18:52:18 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
2025-11-01 18:52:18 gestionale-energia-hostinger  |   code: 'SQLITE_ERROR'
2025-11-01 18:52:18 gestionale-energia-hostinger  | }
2025-11-01 18:52:18 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:18 +0000] "POST /api/clienti/recalculate-quality HTTP/1.1" 500 64 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:21 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:21 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019541398 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:22 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:52:22 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:52:25 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:52:25 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:52:55 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:52:55 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:53:26 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:53:26 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:53:47 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: no such column: last_quality_check
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at Database.prepare (/app/node_modules/better-sqlite3/lib/methods/wrappers.js:5:21)
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:56:33)
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at /app/dist/backend/routes/clienti.js:1277:35
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
2025-11-01 18:53:47 gestionale-energia-hostinger  |   code: 'SQLITE_ERROR'
2025-11-01 18:53:47 gestionale-energia-hostinger  | }
2025-11-01 18:53:47 gestionale-energia-hostinger  | ❌ Errore: SqliteError: no such column: last_quality_check
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at Database.prepare (/app/node_modules/better-sqlite3/lib/methods/wrappers.js:5:21)
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:56:33)
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at /app/dist/backend/routes/clienti.js:1277:35
2025-11-01 18:53:47 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
2025-11-01 18:53:47 gestionale-energia-hostinger  |   code: 'SQLITE_ERROR'
2025-11-01 18:53:47 gestionale-energia-hostinger  | }
2025-11-01 18:53:47 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:47 +0000] "POST /api/clienti/recalculate-quality HTTP/1.1" 500 64 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:49 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:49 +0000] "GET /clienti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:49 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:49 +0000] "GET /assets/index-DVVMs0j4.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:49 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:49 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/ui-vendor-UvlydG9n.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /assets/index-C7XLw35E.css HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /api/agenti HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /api/clienti/newsletter HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:50 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:50 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762019630261 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:51 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:53:51 +0000] "GET /vite.svg HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:53:56 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:53:56 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:54:07 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:54:07 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 117 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:54:09 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:54:09 +0000] "GET /api/unified-import/result/b7693f4a-3eb4-4b8a-b85f-2c58d1c63adf HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:54:26 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:54:26 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:54:46 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:54:46 +0000] "GET /api/unified-import/result/b7693f4a-3eb4-4b8a-b85f-2c58d1c63adf HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:54:48 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: no such column: last_quality_check
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at Database.prepare (/app/node_modules/better-sqlite3/lib/methods/wrappers.js:5:21)
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:56:33)
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at /app/dist/backend/routes/clienti.js:1277:35
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
2025-11-01 18:54:48 gestionale-energia-hostinger  |   code: 'SQLITE_ERROR'
2025-11-01 18:54:48 gestionale-energia-hostinger  | }
2025-11-01 18:54:48 gestionale-energia-hostinger  | ❌ Errore: SqliteError: no such column: last_quality_check
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at Database.prepare (/app/node_modules/better-sqlite3/lib/methods/wrappers.js:5:21)
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:56:33)
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at /app/dist/backend/routes/clienti.js:1277:35
2025-11-01 18:54:48 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
2025-11-01 18:54:48 gestionale-energia-hostinger  |   code: 'SQLITE_ERROR'
2025-11-01 18:54:48 gestionale-energia-hostinger  | }
2025-11-01 18:54:48 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:54:48 +0000] "POST /api/clienti/recalculate-quality HTTP/1.1" 500 64 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:54:56 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:54:56 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:55:00 gestionale-energia-hostinger  | 
2025-11-01 18:55:00 gestionale-energia-hostinger  | ⏰ [01/11/2025, 18:55:00] Controllo campagne programmate
2025-11-01 18:55:00 gestionale-energia-hostinger  | 📧 Inizio controllo campagne programmate...
2025-11-01 18:55:00 gestionale-energia-hostinger  | 💤 Nessuna campagna programmata da inviare
2025-11-01 18:55:27 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:55:27 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_luce.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:309:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:403:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:714:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ❌ Errore query SQLite: SqliteError: NOT NULL constraint failed: contratti_gas.data_attivazione
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at Object.query (/app/dist/backend/config/database.js:57:37)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at insertContrattoGas (/app/dist/backend/routes/unified-import.js:435:27)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:525:19)
2025-11-01 18:55:29 gestionale-energia-hostinger  |     at async /app/dist/backend/routes/unified-import.js:743:36 {
2025-11-01 18:55:29 gestionale-energia-hostinger  |   code: 'SQLITE_CONSTRAINT_NOTNULL'
2025-11-01 18:55:29 gestionale-energia-hostinger  | }
2025-11-01 18:55:29 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:55:29 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 117 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:55:30 gestionale-energia-hostinger  | ::ffff:172.18.0.1 - - [01/Nov/2025:17:55:30 +0000] "GET /api/unified-import/result/f1fcd479-d9d9-40dd-95fa-5da091d5982b HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
2025-11-01 18:55:57 gestionale-energia-hostinger  | ::1 - - [01/Nov/2025:17:55:57 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
