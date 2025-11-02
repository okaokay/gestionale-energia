gestionale-energia

[Sun Nov 02 2025 18:56:47.055]
gestionale-energia: 
📁 DATABASE_PATH: /app/backend/database/database.sqlite
[Sun Nov 02 2025 18:56:47.072]
gestionale-energia: 
🌱 Seed DB ripristinato in /app/backend/database/database.sqlite
[Sun Nov 02 2025 18:56:47.072]
gestionale-energia: 
🔧 Avvio migrazione idempotente per creare tabelle mancanti...
[Sun Nov 02 2025 18:56:47.188]
gestionale-energia: 
🚀 Inizio migrazione SQLite...
[Sun Nov 02 2025 18:56:47.192]
gestionale-energia: 
✅ Tabella users creata
[Sun Nov 02 2025 18:56:47.389]
gestionale-energia: 
✅ Utente Super Admin creato
[Sun Nov 02 2025 18:56:47.389]
gestionale-energia: 
Email: admin@gestionale.it
[Sun Nov 02 2025 18:56:47.391]
gestionale-energia: 
Password: Admin123!
[Sun Nov 02 2025 18:56:47.391]
gestionale-energia: 
✅ Tabelle clienti create
[Sun Nov 02 2025 18:56:47.391]
gestionale-energia: 
✅ Tabelle contratti create
[Sun Nov 02 2025 18:56:47.391]
gestionale-energia: 
💰 Creazione tabella contabilita_movimenti...
[Sun Nov 02 2025 18:56:47.409]
gestionale-energia: 
✅ Tabella contabilita_movimenti creata con indici
[Sun Nov 02 2025 18:56:47.410]
gestionale-energia: 
✅ Tabella offerte creata
[Sun Nov 02 2025 18:56:47.411]
gestionale-energia: 
🧩 Verifica/Aggiunta colonne utenti mancanti...
[Sun Nov 02 2025 18:56:47.411]
gestionale-energia: 
⚠️  users.role già presente, skip
[Sun Nov 02 2025 18:56:47.411]
gestionale-energia: 
⚠️  users.is_active già presente, skip
[Sun Nov 02 2025 18:56:47.411]
gestionale-energia: 
⚠️  users.parent_id già presente, skip
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
⚠️  users.agency_name già presente, skip
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
⚠️  users.phone già presente, skip
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
⚠️  users.commissioni_luce_default già presente, skip
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
⚠️  users.commissioni_gas_default già presente, skip
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
🧩 Verifica/Aggiunta colonne mancanti...
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
⚠️  codice_cliente già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.412]
gestionale-energia: 
⚠️  provincia_residenza già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.413]
gestionale-energia: 
⚠️  incomplete_data già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.413]
gestionale-energia: 
⚠️  missing_fields già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.413]
gestionale-energia: 
⚠️  data_quality_score già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.413]
gestionale-energia: 
⚠️  stato già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.413]
gestionale-energia: 
⚠️  assigned_agent_id già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  commissione_pattuita già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  commissione_pagata già presente su clienti_privati, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  provincia_sede_legale già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  codice_cliente già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  stato già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  assigned_agent_id già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  commissione_pattuita già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  commissione_pagata già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  email_principale già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  incomplete_data già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  missing_fields già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  data_quality_score già presente su clienti_aziende, skip
[Sun Nov 02 2025 18:56:47.415]
gestionale-energia: 
⚠️  contratti_luce.data_inizio già presente, skip
[Sun Nov 02 2025 18:56:47.416]
gestionale-energia: 
⚠️  contratti_gas.data_inizio già presente, skip
[Sun Nov 02 2025 18:56:47.416]
gestionale-energia: 
⚠️  contratti_luce.data_fine già presente, skip
[Sun Nov 02 2025 18:56:47.416]
gestionale-energia: 
⚠️  contratti_gas.data_fine già presente, skip
[Sun Nov 02 2025 18:56:47.420]
gestionale-energia: 
✅ Aggiunta colonna contratti_luce.note
[Sun Nov 02 2025 18:56:47.420]
gestionale-energia: 
⚠️  contratti_luce.data_stipula già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.agente già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.nome_offerta già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.validita_offerta già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.commodity già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.procedure già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.pdp già presente, skip
[Sun Nov 02 2025 18:56:47.422]
gestionale-energia: 
⚠️  contratti_luce.tipo_offerta già presente, skip
[Sun Nov 02 2025 18:56:47.427]
gestionale-energia: 
✅ Aggiunta colonna contratti_luce.created_by
[Sun Nov 02 2025 18:56:47.427]
gestionale-energia: 
⚠️  contratti_luce.updated_at già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
✅ Aggiunta colonna contratti_gas.note
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.data_stipula già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.agente già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.nome_offerta già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.validita_offerta già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.commodity già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.procedure già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.pdp già presente, skip
[Sun Nov 02 2025 18:56:47.432]
gestionale-energia: 
⚠️  contratti_gas.tipo_offerta già presente, skip
[Sun Nov 02 2025 18:56:47.438]
gestionale-energia: 
✅ Aggiunta colonna contratti_gas.created_by
[Sun Nov 02 2025 18:56:47.438]
gestionale-energia: 
⚠️  contratti_gas.updated_at già presente, skip
[Sun Nov 02 2025 18:56:47.438]
gestionale-energia: 
💼 Creazione tabella compensi...
[Sun Nov 02 2025 18:56:47.442]
gestionale-energia: 
✅ Tabella compensi creata con indici
[Sun Nov 02 2025 18:56:47.442]
gestionale-energia: 
📰 Creazione tabelle newsletter...
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
✅ Tabelle newsletter create e seed inserito
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
✅ Tabella ai_matches creata
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
📧 Creazione tabella email_templates...
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
✅ Tabella email_templates creata
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
📧 Creazione tabella email_campaigns...
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
✅ Tabella email_campaigns creata con indici
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
⚠️  scheduled_end_at già presente su email_campaigns, skip
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
⚠️  sent_at già presente su email_campaigns, skip
[Sun Nov 02 2025 18:56:47.449]
gestionale-energia: 
📧 Creazione tabella email_logs...
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
✅ Tabella email_logs creata con indici
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
✨ Migrazione SQLite completata con successo!
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
🎯 Database pronto all'uso:
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
Percorso: /app/backend/database/database.sqlite
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
Tipo: SQLite (nessun server richiesto)
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
✅ Avvia il server: npm run dev
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
Frontend: http://localhost:5177
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
Login: admin@gestionale.it / Admin123!
[Sun Nov 02 2025 18:56:47.450]
gestionale-energia: 
[Sun Nov 02 2025 18:56:47.459]
gestionale-energia: 
✅ Migrazione completata. Database pronto.
[Sun Nov 02 2025 18:56:47.467]
gestionale-energia: 
✅ Schema clienti_privati già privo di NOT NULL vincolanti
[Sun Nov 02 2025 18:56:47.469]
gestionale-energia: 
✅ Schema clienti_aziende già privo di NOT NULL vincolanti
[Sun Nov 02 2025 18:56:47.473]
gestionale-energia: 
⚠️  Patch clienti_privati: email_secondaria già presente, skip
[Sun Nov 02 2025 18:56:47.473]
gestionale-energia: 
⚠️  Patch clienti_privati: telefono_fisso già presente, skip
[Sun Nov 02 2025 18:56:47.473]
gestionale-energia: 
⚠️  Patch clienti_privati: pec già presente, skip
[Sun Nov 02 2025 18:56:47.473]
gestionale-energia: 
⚠️  Patch clienti_privati: civico_residenza già presente, skip
[Sun Nov 02 2025 18:56:47.473]
gestionale-energia: 
⚠️  Patch clienti_privati: cap_residenza già presente, skip
[Sun Nov 02 2025 18:56:47.474]
gestionale-energia: 
⚠️  Patch clienti_privati: provincia_residenza già presente, skip
[Sun Nov 02 2025 18:56:47.474]
gestionale-energia: 
⚠️  Patch clienti_privati: via_fornitura già presente, skip
[Sun Nov 02 2025 18:56:47.474]
gestionale-energia: 
⚠️  Patch clienti_privati: civico_fornitura già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: cap_fornitura già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: citta_fornitura già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: provincia_fornitura già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: tipo_documento già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: numero_documento già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: ente_rilascio già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: data_scadenza_documento già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: iban già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_email già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_sms già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_telefono già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: note già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: data_consenso già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_privati: created_by già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_aziende: codice_fiscale già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_aziende: descrizione_ateco già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_aziende: pec_aziendale già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_aziende: via_sede_legale già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_aziende: civico_sede_legale già presente, skip
[Sun Nov 02 2025 18:56:47.476]
gestionale-energia: 
⚠️  Patch clienti_aziende: cap_sede_legale già presente, skip
[Sun Nov 02 2025 18:56:47.478]
gestionale-energia: 
⚠️  Patch clienti_aziende: provincia_sede_legale già presente, skip
[Sun Nov 02 2025 18:56:47.478]
gestionale-energia: 
⚠️  Patch clienti_aziende: via_sede_operativa già presente, skip
[Sun Nov 02 2025 18:56:47.479]
gestionale-energia: 
⚠️  Patch clienti_aziende: civico_sede_operativa già presente, skip
[Sun Nov 02 2025 18:56:47.479]
gestionale-energia: 
⚠️  Patch clienti_aziende: cap_sede_operativa già presente, skip
[Sun Nov 02 2025 18:56:47.479]
gestionale-energia: 
⚠️  Patch clienti_aziende: citta_sede_operativa già presente, skip
[Sun Nov 02 2025 18:56:47.479]
gestionale-energia: 
⚠️  Patch clienti_aziende: provincia_sede_operativa già presente, skip
[Sun Nov 02 2025 18:56:47.479]
gestionale-energia: 
⚠️  Patch clienti_aziende: nome_referente già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: cognome_referente già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: ruolo_referente già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: dimensione_azienda già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: settore_merceologico già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: fatturato_annuo già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: iban_aziendale già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: codice_sdi già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: note già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: data_consenso già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
⚠️  Patch clienti_aziende: created_by già presente, skip
[Sun Nov 02 2025 18:56:47.481]
gestionale-energia: 
🚀 Avvio server backend...
[Sun Nov 02 2025 18:56:47.684]
gestionale-energia: 
✅ Database SQLite connesso: /app/backend/database/database.sqlite
[Sun Nov 02 2025 18:56:48.040]
gestionale-energia: 
📡 Configurazione AI: Provider=ollama, URL=http://185.31.67.249/api/generate
[Sun Nov 02 2025 18:56:48.167]
gestionale-energia: 
🔌 Test connessione database...
[Sun Nov 02 2025 18:56:48.169]
gestionale-energia: 
✅ Test connessione SQLite OK
[Sun Nov 02 2025 18:56:48.169]
gestionale-energia: 
⏰ Avvio cron job alert scadenze: 0 9 * * *
[Sun Nov 02 2025 18:56:48.171]
gestionale-energia: 
✅ Cron job email scheduler attivo
[Sun Nov 02 2025 18:56:48.171]
gestionale-energia: 
[Sun Nov 02 2025 18:56:48.171]
gestionale-energia: 
⏰ Avvio scheduler campagne email (ogni 5 minuti)
[Sun Nov 02 2025 18:56:48.172]
gestionale-energia: 
✅ Campaign scheduler attivo
[Sun Nov 02 2025 18:56:48.172]
gestionale-energia: 
[Sun Nov 02 2025 18:56:48.173]
gestionale-energia: 
[Sun Nov 02 2025 18:56:48.173]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
🚀 GESTIONALE ENERGIA - Server avviato con successo!
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
📡 Server in ascolto su: http://localhost:3001
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
🌍 Ambiente: production
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
📊 Database: undefined
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
🔐 Frontend URL: https://gmgestionale.cloud
[Sun Nov 02 2025 18:56:48.174]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
📋 API Endpoints disponibili:
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/auth/login
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/clienti
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/clienti/privati
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/clienti/aziende
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/contratti/luce
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/contratti/gas
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/contratti/scadenze
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/offerte
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/offerte/upload (Super Admin)
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/offerte/:id/matches
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/dashboard/stats
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/emails/campaigns
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/emails/campaigns
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/unified-import/upload (Import CSV/Excel)
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
POST   /api/unified-import/validate (Validazione file)
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
GET    /api/unified-import/supported-types
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
============================================================
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
✅ Pronto per ricevere richieste!
[Sun Nov 02 2025 18:56:48.175]
gestionale-energia: 
[Sun Nov 02 2025 18:56:52.050]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:17:56:52 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 18:57:11.652]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:11 +0000] "HEAD / HTTP/1.1" 200 1084 "http://gmgestionale.cloud" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0"
[Sun Nov 02 2025 18:57:11.827]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:11 +0000] "GET / HTTP/1.1" 200 - "http://gmgestionale.cloud" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
[Sun Nov 02 2025 18:57:16.548]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:16 +0000] "GET / HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:16.567]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:16 +0000] "GET / HTTP/1.1" 200 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:22.103]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:17:57:22 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 18:57:22.879]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:22 +0000] "GET / HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:24.361]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /clienti HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.636]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 200 496 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.660]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/index-D1Ae7cGo.css HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.669]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.671]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.679]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.680]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/ui-vendor-DU45XGmo.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.681]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.681]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:24.683]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:24 +0000] "GET /assets/index-VHk07IWM.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.080]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/agenti HTTP/1.1" 200 696 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.092]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/clienti/newsletter HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.093]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762106245048 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.278]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /vite.svg HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.290]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/220 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.311]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/219 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.312]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/218 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.313]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/217 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.313]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/216 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.314]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/215 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.315]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/214 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.315]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/212 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.315]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/211 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:25.315]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:25 +0000] "GET /api/contratti/cliente/privato/213 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.074]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/220 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.087]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/219 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.092]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/218 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.099]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/217 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.105]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/216 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.109]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/215 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.113]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/214 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.117]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/212 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.121]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/213 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.126]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "DELETE /api/clienti/privati/211 HTTP/1.1" 200 59 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:29.220]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:29 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762106249176 HTTP/1.1" 200 99 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:32.942]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:32 +0000] "GET /assets/react-vendor-D3F3s8fL.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:33.042]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:33 +0000] "GET /assets/chart-vendor-BqqkiiEX.js HTTP/1.1" 200 496 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:33.382]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:33 +0000] "GET /assets/pdf-vendor-B-ysb6PP.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:33.405]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:33 +0000] "GET /assets/router-vendor-DledTNQw.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:33.569]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:33 +0000] "GET /assets/utils-vendor-Bxj2aTs6.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:34.006]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:34 +0000] "GET /assets/ui-vendor-DU45XGmo.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:34.006]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:34 +0000] "GET /assets/date-vendor-wnl_q3Xu.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:34.295]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:34 +0000] "GET /assets/index-VHk07IWM.js HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:38.523]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:38 +0000] "GET /wordpress/wp-admin/setup-config.php HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:46.384]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at findContrattoLuceId (/app/dist/backend/routes/unified-import.js:568:47)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:581:24)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:975:36
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
↳ SQL: SELECT id FROM contratti_luce WHERE pod = ? AND (cliente_privato_id = ? OR cliente_azienda_id = ?) LIMIT 1
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
↳ Params: [ 'IT001E98765432', 'f93fc097-656f-48a1-bd47-ad88a201a3df' ]
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
❌ Errore query SQLite: SqliteError: FOREIGN KEY constraint failed
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:57:37)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at insertContrattoLuce (/app/dist/backend/routes/unified-import.js:520:27)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:632:19)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:975:36 {
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
code: 'SQLITE_CONSTRAINT_FOREIGNKEY'
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
}
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
↳ SQL:
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
INSERT INTO contratti_luce (id, cliente_privato_id, tipo_cliente, numero_contratto, pod, fornitore, data_attivazione, data_fine, prezzo_energia, stato, created_by)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
[Sun Nov 02 2025 18:57:46.385]
gestionale-energia: 
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
↳ Params: [
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'cd2a7b26-e6a9-4bb9-aa75-647facca553a',
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'f93fc097-656f-48a1-bd47-ad88a201a3df',
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'privato',
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
null,
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'IT001E98765432',
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
null,
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'2025-11-02',
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
null,
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
null,
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'compilazione',
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
'afa64685-9c41-414a-a931-44b01f65d6e7'
[Sun Nov 02 2025 18:57:46.386]
gestionale-energia: 
]
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
at findContrattoLuceId (/app/dist/backend/routes/unified-import.js:568:47)
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
at async upsertContrattoLuce (/app/dist/backend/routes/unified-import.js:581:24)
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:1166:36
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
↳ SQL: SELECT id FROM contratti_luce WHERE pod = ? AND (cliente_privato_id = ? OR cliente_azienda_id = ?) LIMIT 1
[Sun Nov 02 2025 18:57:46.387]
gestionale-energia: 
↳ Params: [ 'IT001E12345678', '7adaa806-0dcc-4d2c-96ed-ba9b6bd52bee' ]
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
❌ Errore query SQLite: RangeError: Too few parameter values were provided
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:52:35)
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
at findContrattoGasId (/app/dist/backend/routes/unified-import.js:722:47)
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
at async upsertContrattoGas (/app/dist/backend/routes/unified-import.js:735:24)
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
at async /app/dist/backend/routes/unified-import.js:1179:36
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
↳ SQL: SELECT id FROM contratti_gas WHERE pdr = ? AND (cliente_privato_id = ? OR cliente_azienda_id = ?) LIMIT 1
[Sun Nov 02 2025 18:57:46.388]
gestionale-energia: 
↳ Params: [ '00102401153590', '7adaa806-0dcc-4d2c-96ed-ba9b6bd52bee' ]
[Sun Nov 02 2025 18:57:46.392]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:46 +0000] "POST /api/unified-import/upload HTTP/1.1" 200 116 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:46.947]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:46 +0000] "GET /assets/+E),new%20URL(E,x)%7Dlet%20m=%7Bget%20action()%7Breturn%20u%7D,get%20location()%7Breturn%20e(a,i)%7D,listen(d)%7Bif(o)throw%20new%20Error( HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:46.963]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:46 +0000] "GET /api/unified-import/result/edf241a3-ec8a-400b-bbf3-b3fe1edff120 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:57:47.544]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:57:47 +0000] "GET /+E),new%20URL(E,x)%7Dlet%20m=%7Bget%20action()%7Breturn%20u%7D,get%20location()%7Breturn%20e(a,i)%7D,listen(d)%7Bif(o)throw%20new%20Error( HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
[Sun Nov 02 2025 18:57:52.153]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:17:57:52 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Sun Nov 02 2025 18:58:03.949]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:58:03 +0000] "POST /api/clienti/recalculate-quality HTTP/1.1" 200 120 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:58:04.024]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:58:04 +0000] "GET /api/clienti?search=&tipo=&limit=200&_t=1762106283981 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:58:04.130]
gestionale-energia: 
::ffff:172.18.0.3 - - [02/Nov/2025:17:58:04 +0000] "GET /api/contratti/cliente/azienda/7adaa806-0dcc-4d2c-96ed-ba9b6bd52bee HTTP/1.1" 200 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Sun Nov 02 2025 18:58:22.205]
gestionale-energia: 
::ffff:127.0.0.1 - - [02/Nov/2025:17:58:22 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"