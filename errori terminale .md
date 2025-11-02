gestionale-energia

[Sun Nov 02 2025 17:55:52.609]
gestionale-energia: 
📁 DATABASE_PATH: /app/backend/database/database.sqlite
[Sun Nov 02 2025 17:55:52.619]
gestionale-energia: 
🌱 Seed DB ripristinato in /app/backend/database/database.sqlite
[Sun Nov 02 2025 17:55:52.621]
gestionale-energia: 
🔧 Avvio migrazione idempotente per creare tabelle mancanti...
[Sun Nov 02 2025 17:55:52.714]
gestionale-energia: 
🚀 Inizio migrazione SQLite...
[Sun Nov 02 2025 17:55:52.718]
gestionale-energia: 
✅ Tabella users creata
[Sun Nov 02 2025 17:55:52.909]
gestionale-energia: 
✅ Utente Super Admin creato
[Sun Nov 02 2025 17:55:52.911]
gestionale-energia: 
Email: admin@gestionale.it
[Sun Nov 02 2025 17:55:52.911]
gestionale-energia: 
Password: Admin123!
[Sun Nov 02 2025 17:55:52.911]
gestionale-energia: 
✅ Tabelle clienti create
[Sun Nov 02 2025 17:55:52.911]
gestionale-energia: 
✅ Tabelle contratti create
[Sun Nov 02 2025 17:55:52.911]
gestionale-energia: 
💰 Creazione tabella contabilita_movimenti...
[Sun Nov 02 2025 17:55:52.928]
gestionale-energia: 
✅ Tabella contabilita_movimenti creata con indici
[Sun Nov 02 2025 17:55:52.928]
gestionale-energia: 
✅ Tabella offerte creata
[Sun Nov 02 2025 17:55:52.929]
gestionale-energia: 
🧩 Verifica/Aggiunta colonne utenti mancanti...
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.role già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.is_active già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.parent_id già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.agency_name già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.phone già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.commissioni_luce_default già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  users.commissioni_gas_default già presente, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
🧩 Verifica/Aggiunta colonne mancanti...
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  codice_cliente già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.930]
gestionale-energia: 
⚠️  provincia_residenza già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  incomplete_data già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  missing_fields già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  data_quality_score già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  stato già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  assigned_agent_id già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  commissione_pattuita già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  commissione_pagata già presente su clienti_privati, skip
[Sun Nov 02 2025 17:55:52.931]
gestionale-energia: 
⚠️  provincia_sede_legale già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.932]
gestionale-energia: 
⚠️  codice_cliente già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.932]
gestionale-energia: 
⚠️  stato già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.932]
gestionale-energia: 
⚠️  assigned_agent_id già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.932]
gestionale-energia: 
⚠️  commissione_pattuita già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.932]
gestionale-energia: 
⚠️  commissione_pagata già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  email_principale già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  incomplete_data già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  missing_fields già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  data_quality_score già presente su clienti_aziende, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  contratti_luce.data_inizio già presente, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  contratti_gas.data_inizio già presente, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  contratti_luce.data_fine già presente, skip
[Sun Nov 02 2025 17:55:52.934]
gestionale-energia: 
⚠️  contratti_gas.data_fine già presente, skip
[Sun Nov 02 2025 17:55:52.939]
gestionale-energia: 
✅ Aggiunta colonna contratti_luce.note
[Sun Nov 02 2025 17:55:52.939]
gestionale-energia: 
⚠️  contratti_luce.data_stipula già presente, skip
[Sun Nov 02 2025 17:55:52.939]
gestionale-energia: 
⚠️  contratti_luce.agente già presente, skip
[Sun Nov 02 2025 17:55:52.939]
gestionale-energia: 
⚠️  contratti_luce.nome_offerta già presente, skip
[Sun Nov 02 2025 17:55:52.941]
gestionale-energia: 
⚠️  contratti_luce.validita_offerta già presente, skip
[Sun Nov 02 2025 17:55:52.941]
gestionale-energia: 
⚠️  contratti_luce.commodity già presente, skip
[Sun Nov 02 2025 17:55:52.941]
gestionale-energia: 
⚠️  contratti_luce.procedure già presente, skip
[Sun Nov 02 2025 17:55:52.941]
gestionale-energia: 
⚠️  contratti_luce.pdp già presente, skip
[Sun Nov 02 2025 17:55:52.941]
gestionale-energia: 
⚠️  contratti_luce.tipo_offerta già presente, skip
[Sun Nov 02 2025 17:55:52.946]
gestionale-energia: 
✅ Aggiunta colonna contratti_luce.created_by
[Sun Nov 02 2025 17:55:52.946]
gestionale-energia: 
⚠️  contratti_luce.updated_at già presente, skip
[Sun Nov 02 2025 17:55:52.951]
gestionale-energia: 
✅ Aggiunta colonna contratti_gas.note
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.data_stipula già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.agente già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.nome_offerta già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.validita_offerta già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.commodity già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.procedure già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.pdp già presente, skip
[Sun Nov 02 2025 17:55:52.953]
gestionale-energia: 
⚠️  contratti_gas.tipo_offerta già presente, skip
[Sun Nov 02 2025 17:55:52.957]
gestionale-energia: 
✅ Aggiunta colonna contratti_gas.created_by
[Sun Nov 02 2025 17:55:52.957]
gestionale-energia: 
⚠️  contratti_gas.updated_at già presente, skip
[Sun Nov 02 2025 17:55:52.957]
gestionale-energia: 
💼 Creazione tabella compensi...
[Sun Nov 02 2025 17:55:52.961]
gestionale-energia: 
✅ Tabella compensi creata con indici
[Sun Nov 02 2025 17:55:52.961]
gestionale-energia: 
📰 Creazione tabelle newsletter...
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
✅ Tabelle newsletter create e seed inserito
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
✅ Tabella ai_matches creata
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
📧 Creazione tabella email_templates...
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
✅ Tabella email_templates creata
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
📧 Creazione tabella email_campaigns...
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
✅ Tabella email_campaigns creata con indici
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
⚠️  scheduled_end_at già presente su email_campaigns, skip
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
⚠️  sent_at già presente su email_campaigns, skip
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
📧 Creazione tabella email_logs...
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
✅ Tabella email_logs creata con indici
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
✨ Migrazione SQLite completata con successo!
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
🎯 Database pronto all'uso:
[Sun Nov 02 2025 17:55:52.971]
gestionale-energia: 
Percorso: /app/backend/database/database.sqlite
[Sun Nov 02 2025 17:55:52.972]
gestionale-energia: 
Tipo: SQLite (nessun server richiesto)
[Sun Nov 02 2025 17:55:52.972]
gestionale-energia: 
[Sun Nov 02 2025 17:55:52.972]
gestionale-energia: 
✅ Avvia il server: npm run dev
[Sun Nov 02 2025 17:55:52.972]
gestionale-energia: 
Frontend: http://localhost:5177
[Sun Nov 02 2025 17:55:52.972]
gestionale-energia: 
Login: admin@gestionale.it / Admin123!
[Sun Nov 02 2025 17:55:52.972]
gestionale-energia: 
[Sun Nov 02 2025 17:55:52.980]
gestionale-energia: 
✅ Migrazione completata. Database pronto.
[Sun Nov 02 2025 17:55:52.990]
gestionale-energia: 
✅ Schema clienti_privati già privo di NOT NULL vincolanti
[Sun Nov 02 2025 17:55:52.990]
gestionale-energia: 
✅ Schema clienti_aziende già privo di NOT NULL vincolanti
[Sun Nov 02 2025 17:55:52.995]
gestionale-energia: 
⚠️  Patch clienti_privati: email_secondaria già presente, skip
[Sun Nov 02 2025 17:55:52.995]
gestionale-energia: 
⚠️  Patch clienti_privati: telefono_fisso già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: pec già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: civico_residenza già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: cap_residenza già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: provincia_residenza già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: via_fornitura già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: civico_fornitura già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: cap_fornitura già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: citta_fornitura già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: provincia_fornitura già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: tipo_documento già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: numero_documento già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: ente_rilascio già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: data_scadenza_documento già presente, skip
[Sun Nov 02 2025 17:55:52.997]
gestionale-energia: 
⚠️  Patch clienti_privati: iban già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_email già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_sms già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_telefono già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_privati: note già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_privati: data_consenso già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_privati: created_by già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_aziende: codice_fiscale già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_aziende: descrizione_ateco già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_aziende: pec_aziendale già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_aziende: via_sede_legale già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_aziende: civico_sede_legale già presente, skip
[Sun Nov 02 2025 17:55:52.998]
gestionale-energia: 
⚠️  Patch clienti_aziende: cap_sede_legale già presente, skip
[Sun Nov 02 2025 17:55:53.001]
gestionale-energia: 
⚠️  Patch clienti_aziende: provincia_sede_legale già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: via_sede_operativa già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: civico_sede_operativa già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: cap_sede_operativa già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: citta_sede_operativa già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: provincia_sede_operativa già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: nome_referente già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: cognome_referente già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: ruolo_referente già presente, skip
[Sun Nov 02 2025 17:55:53.002]
gestionale-energia: 
⚠️  Patch clienti_aziende: dimensione_azienda già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: settore_merceologico già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: fatturato_annuo già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: iban_aziendale già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: codice_sdi già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: note già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: data_consenso già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
⚠️  Patch clienti_aziende: created_by già presente, skip
[Sun Nov 02 2025 17:55:53.003]
gestionale-energia: 
🚀 Avvio server backend...
[Sun Nov 02 2025 17:55:53.238]
gestionale-energia: 
✅ Database SQLite connesso: /app/backend/database/database.sqlite
[Sun Nov 02 2025 17:55:53.912]
gestionale-energia: 
📡 Configurazione AI: Provider=ollama, URL=http://185.31.67.249/api/generate
[Sun Nov 02 2025 17:55:54.222]
gestionale-energia: 
🔌 Test connessione database...
[Sun Nov 02 2025 17:55:54.226]
gestionale-energia: 
✅ Test connessione SQLite OK
[Sun Nov 02 2025 17:55:54.228]
gestionale-energia: 
⏰ Avvio cron job alert scadenze: 0 9 * * *
[Sun Nov 02 2025 17:55:54.232]
gestionale-energia: 
✅ Cron job email scheduler attivo
[Sun Nov 02 2025 17:55:54.232]
gestionale-energia: 
[Sun Nov 02 2025 17:55:54.233]
gestionale-energia: 
⏰ Avvio scheduler campagne email (ogni 5 minuti)
[Sun Nov 02 2025 17:55:54.235]
gestionale-energia: 
✅ Campaign scheduler attivo
[Sun Nov 02 2025 17:55:54.235]
gestionale-energia: 
[Sun Nov 02 2025 17:55:54.237]
gestionale-energia: 
[Sun Nov 02 2025 17:55:54.237]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
🚀 GESTIONALE ENERGIA - Server avviato con successo!
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
📡 Server in ascolto su: http://localhost:3001
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
🌍 Ambiente: production
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
📊 Database: undefined
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
🔐 Frontend URL: https://gmgestionale.cloud
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
📋 API Endpoints disponibili:
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
POST   /api/auth/login
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
GET    /api/clienti
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
POST   /api/clienti/privati
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
POST   /api/clienti/aziende
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
GET    /api/contratti/luce
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
GET    /api/contratti/gas
[Sun Nov 02 2025 17:55:54.239]
gestionale-energia: 
GET    /api/contratti/scadenze
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
GET    /api/offerte
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
POST   /api/offerte/upload (Super Admin)
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
GET    /api/offerte/:id/matches
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
GET    /api/dashboard/stats
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
GET    /api/emails/campaigns
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
POST   /api/emails/campaigns
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
POST   /api/unified-import/upload (Import CSV/Excel)
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
POST   /api/unified-import/validate (Validazione file)
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
GET    /api/unified-import/supported-types
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
✅ Pronto per ricevere richieste!
[Sun Nov 02 2025 17:55:54.240]
gestionale-energia: 
[Sun Nov 02 2025 17:55:57.600]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:16:55:57 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 17:56:27.653]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:16:56:27 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 17:56:57.703]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:16:56:57 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 17:57:01.818]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:01 +0000] "GET /clienti HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:01.991]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:01 +0000] "GET /assets/index-VHk07IWM.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.025]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.033]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.038]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/ui-vendor-DU45XGmo.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.043]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 200 496 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.047]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/index-D1Ae7cGo.css HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.052]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.066]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.071]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.356]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/agenti HTTP/1.1" 200 696 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.365]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/clienti/newsletter HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.366]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762102622323 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.415]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /vite.svg HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.470]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/220 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.471]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/219 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.471]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/218 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.472]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/217 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.473]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/216 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.474]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/215 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.476]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/214 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.476]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/212 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.476]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/213 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:02.479]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:02 +0000] "GET /api/contratti/cliente/privato/211 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.606]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/220 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.612]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/219 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.616]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/218 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.620]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/217 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.624]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/216 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.629]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/215 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.633]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/214 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.637]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/212 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.642]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/213 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.646]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "DELETE /api/clienti/privati/211 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:06.830]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:06 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762102626771 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
❌ Errore query SQLite: SqliteError: datatype mismatch
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:57:37)
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
at insertClientePrivato (/app/dist/backend/routes/unified-import.js:260:27)
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
at async upsertClientePrivato (/app/dist/backend/routes/unified-import.js:326:19)
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:883:36 {
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
code: 'SQLITE_MISMATCH'
[Sun Nov 02 2025 17:57:16.371]
gestionale-energia: 
}
[Sun Nov 02 2025 17:57:16.372]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 17:57:16.372]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 17:57:16.372]
gestionale-energia: 
at findContrattoLuceId (/app/dist/backend/routes/unified-import.js:520:47)
[Sun Nov 02 2025 17:57:16.372]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 17:57:16.372]
gestionale-energia: 
at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:533:24)
[Sun Nov 02 2025 17:57:16.372]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:1118:36
[Sun Nov 02 2025 17:57:16.373]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 17:57:16.373]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 17:57:16.373]
gestionale-energia: 
at findContrattoGasId (/app/dist/backend/routes/unified-import.js:674:47)
[Sun Nov 02 2025 17:57:16.373]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 17:57:16.373]
gestionale-energia: 
at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:687:24)
[Sun Nov 02 2025 17:57:16.373]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:1131:36
[Sun Nov 02 2025 17:57:16.377]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:16 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 116 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:17.136]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:17 +0000] "GET /api/unified-import/result/fe7152e0-e29b-414f-9cea-b745c0a425e7 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:21.812]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:21 +0000] "POST /api/clienti/recalculate-quality HTTP/1.1" 200 120 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:21.885]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:21 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762102641853 HTTP/1.1" 200 937 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:21.991]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:21 +0000] "GET /api/contratti/cliente/azienda/3b504499-2ea6-4dcb-a746-54e62a7553ed HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:25.895]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:25 +0000] "DELETE /api/clienti/aziende/3b504499-2ea6-4dcb-a746-54e62a7553ed HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:25.987]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:25 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762102645940 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:27.753]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:16:57:27 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 17:57:31.796]
gestionale-energia: 
❌ Errore query SQLite: SqliteError: datatype mismatch
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:57:37)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at insertClientePrivato (/app/dist/backend/routes/unified-import.js:260:27)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at async upsertClientePrivato (/app/dist/backend/routes/unified-import.js:326:19)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:883:36 {
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
code: 'SQLITE_MISMATCH'
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
}
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at findContrattoLuceId (/app/dist/backend/routes/unified-import.js:520:47)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:533:24)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:1118:36
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at findContrattoGasId (/app/dist/backend/routes/unified-import.js:674:47)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:687:24)
[Sun Nov 02 2025 17:57:31.797]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:1131:36
[Sun Nov 02 2025 17:57:31.801]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:31 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 116 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 17:57:32.239]
gestionale-energia: 
::ffff:172.18.0.2 - - [02/Nov/2025:16:57:32 +0000] "GET /api/unified-import/result/ba820487-99aa-4a05-9de6-e0e17e2ae843 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"