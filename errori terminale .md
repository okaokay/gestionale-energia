gestionale-energia

[Wed Nov 12 2025 06:24:30.043]
gestionale-energia: 
📁 DATABASE_PATH: /app/data/gestionale_energia.db
[Wed Nov 12 2025 06:24:30.064]
gestionale-energia: 
🌱 Seed DB ripristinato in /app/data/gestionale_energia.db
[Wed Nov 12 2025 06:24:30.066]
gestionale-energia: 
⚠️  FORCE_SEED_RESTORE abilitato: sovrascrivo uploads con seed
[Wed Nov 12 2025 06:24:30.116]
gestionale-energia: 
🌱 Seed uploads ripristinato in /app/uploads
[Wed Nov 12 2025 06:24:30.119]
gestionale-energia: 
🔧 Avvio migrazione idempotente per creare tabelle mancanti...
[Wed Nov 12 2025 06:24:30.213]
gestionale-energia: 
🚀 Inizio migrazione SQLite...
[Wed Nov 12 2025 06:24:30.217]
gestionale-energia: 
✅ Tabella users creata
[Wed Nov 12 2025 06:24:30.413]
gestionale-energia: 
✅ Utente Super Admin creato
[Wed Nov 12 2025 06:24:30.416]
gestionale-energia: 
Email: admin@gestionale.it
[Wed Nov 12 2025 06:24:30.416]
gestionale-energia: 
Password: Admin123!
[Wed Nov 12 2025 06:24:30.416]
gestionale-energia: 
✅ Tabelle clienti create
[Wed Nov 12 2025 06:24:30.417]
gestionale-energia: 
✅ Tabelle contratti create
[Wed Nov 12 2025 06:24:30.417]
gestionale-energia: 
👤 Creazione tabelle attività cliente...
[Wed Nov 12 2025 06:24:30.417]
gestionale-energia: 
✅ Tabelle attività cliente create
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
🔧 Verifica/Aggiunta colonne ultimo contatto su clienti...
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  clienti_privati.data_ultimo_contatto già presente
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  clienti_privati.tipo_ultimo_contatto già presente
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  clienti_aziende.data_ultimo_contatto già presente
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  clienti_aziende.tipo_ultimo_contatto già presente
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
💰 Creazione tabella contabilita_movimenti...
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
✅ Tabella contabilita_movimenti creata con indici
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
✅ Tabella offerte creata
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
🧩 Verifica/Aggiunta colonne utenti mancanti...
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.role già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.is_active già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.parent_id già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.agency_name già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.phone già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.commissioni_luce_default già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  users.commissioni_gas_default già presente, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
🧩 Verifica/Aggiunta colonne mancanti...
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  codice_cliente già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  provincia_residenza già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  incomplete_data già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  missing_fields già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  data_quality_score già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  stato già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  assigned_agent_id già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  commissione_pattuita già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  commissione_pagata già presente su clienti_privati, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  provincia_sede_legale già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  codice_cliente già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  stato già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  assigned_agent_id già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  commissione_pattuita già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  commissione_pagata già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  email_principale già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.422]
gestionale-energia: 
⚠️  incomplete_data già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  missing_fields già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  data_quality_score già presente su clienti_aziende, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.data_inizio già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_gas.data_inizio già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.data_fine già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_gas.data_fine già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.note già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.data_stipula già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.agente già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.nome_offerta già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.validita_offerta già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.commodity già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.procedure già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.pdp già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.tipo_offerta già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.created_by già presente, skip
[Wed Nov 12 2025 06:24:30.424]
gestionale-energia: 
⚠️  contratti_luce.updated_at già presente, skip
[Wed Nov 12 2025 06:24:30.425]
gestionale-energia: 
⚠️  contratti_gas.note già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.data_stipula già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.agente già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.nome_offerta già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.validita_offerta già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.commodity già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.procedure già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.pdp già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.tipo_offerta già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.created_by già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
⚠️  contratti_gas.updated_at già presente, skip
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
💼 Creazione tabella compensi...
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
✅ Tabella compensi creata con indici
[Wed Nov 12 2025 06:24:30.429]
gestionale-energia: 
📰 Creazione tabelle newsletter...
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✅ Tabelle newsletter create e seed inserito
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✅ Tabella ai_matches creata
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
📧 Creazione tabella email_templates...
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✅ Tabella email_templates creata
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
📧 Creazione tabella email_campaigns...
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✅ Tabella email_campaigns creata con indici
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
⚠️  scheduled_end_at già presente su email_campaigns, skip
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
⚠️  sent_at già presente su email_campaigns, skip
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
📧 Creazione tabella email_logs...
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✅ Tabella email_logs creata con indici
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✨ Migrazione SQLite completata con successo!
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
🎯 Database pronto all'uso:
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
Percorso: /app/data/gestionale_energia.db
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
Tipo: SQLite (nessun server richiesto)
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
✅ Avvia il server: npm run dev
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
Frontend: http://localhost:5177
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
Login: admin@gestionale.it / Admin123!
[Wed Nov 12 2025 06:24:30.466]
gestionale-energia: 
[Wed Nov 12 2025 06:24:30.475]
gestionale-energia: 
✅ Migrazione completata. Database pronto.
[Wed Nov 12 2025 06:24:30.498]
gestionale-energia: 
✅ Schema clienti_privati già privo di NOT NULL vincolanti
[Wed Nov 12 2025 06:24:30.503]
gestionale-energia: 
✅ Schema clienti_aziende già privo di NOT NULL vincolanti
[Wed Nov 12 2025 06:24:30.507]
gestionale-energia: 
✅ Tabella configurazioni già presente
[Wed Nov 12 2025 06:24:30.509]
gestionale-energia: 
✅ Tabella configurazioni pronta con defaults
[Wed Nov 12 2025 06:24:30.511]
gestionale-energia: 
⚠️  Patch clienti_privati: email_secondaria già presente, skip
[Wed Nov 12 2025 06:24:30.511]
gestionale-energia: 
⚠️  Patch clienti_privati: telefono_fisso già presente, skip
[Wed Nov 12 2025 06:24:30.511]
gestionale-energia: 
⚠️  Patch clienti_privati: pec già presente, skip
[Wed Nov 12 2025 06:24:30.512]
gestionale-energia: 
⚠️  Patch clienti_privati: civico_residenza già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: cap_residenza già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: provincia_residenza già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: via_fornitura già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: civico_fornitura già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: cap_fornitura già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: citta_fornitura già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: provincia_fornitura già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: tipo_documento già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: numero_documento già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: ente_rilascio già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: data_scadenza_documento già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: iban già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_email già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_sms già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: preferenza_telefono già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: note già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: data_consenso già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: utente_acquisizione già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: news_letter già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: created_by già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: commissione_luce già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_privati: commissione_gas già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: codice_fiscale già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: descrizione_ateco già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: pec_aziendale già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: via_sede_legale già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: civico_sede_legale già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: cap_sede_legale già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: provincia_sede_legale già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: via_sede_operativa già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: civico_sede_operativa già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: cap_sede_operativa già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: citta_sede_operativa già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: provincia_sede_operativa già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: nome_referente già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: cognome_referente già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: ruolo_referente già presente, skip
[Wed Nov 12 2025 06:24:30.514]
gestionale-energia: 
⚠️  Patch clienti_aziende: dimensione_azienda già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: settore_merceologico già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: fatturato_annuo già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: iban_aziendale già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: codice_sdi già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: note già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: data_consenso già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: created_by già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: commissione_luce già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
⚠️  Patch clienti_aziende: commissione_gas già presente, skip
[Wed Nov 12 2025 06:24:30.516]
gestionale-energia: 
🚀 Avvio server backend...
[Wed Nov 12 2025 06:24:30.817]
gestionale-energia: 
✅ Database SQLite connesso: /app/data/gestionale_energia.db
[Wed Nov 12 2025 06:24:31.330]
gestionale-energia: 
📡 Configurazione AI: Provider=ollama, URL=http://185.31.67.249/api/generate
[Wed Nov 12 2025 06:24:31.482]
gestionale-energia: 
🔌 Test connessione database...
[Wed Nov 12 2025 06:24:31.484]
gestionale-energia: 
✅ Test connessione SQLite OK
[Wed Nov 12 2025 06:24:31.484]
gestionale-energia: 
⏰ Avvio cron job alert scadenze: 0 9 * * *
[Wed Nov 12 2025 06:24:31.486]
gestionale-energia: 
✅ Cron job email scheduler attivo
[Wed Nov 12 2025 06:24:31.487]
gestionale-energia: 
[Wed Nov 12 2025 06:24:31.487]
gestionale-energia: 
⏰ Avvio scheduler campagne email (ogni 5 minuti)
[Wed Nov 12 2025 06:24:31.487]
gestionale-energia: 
✅ Campaign scheduler attivo
[Wed Nov 12 2025 06:24:31.487]
gestionale-energia: 
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
============================================================
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
🚀 GESTIONALE ENERGIA - Server avviato con successo!
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
============================================================
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
📡 Server in ascolto su: http://localhost:3001
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
🌍 Ambiente: production
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
📊 Database: undefined
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
🔐 Frontend URL: https://gmgestionale.cloud
[Wed Nov 12 2025 06:24:31.489]
gestionale-energia: 
============================================================
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
📋 API Endpoints disponibili:
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/auth/login
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/clienti
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/clienti/privati
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/clienti/aziende
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/contratti/luce
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/contratti/gas
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/contratti/scadenze
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/offerte
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/offerte/upload (Super Admin)
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/offerte/:id/matches
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/dashboard/stats
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/emails/campaigns
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/emails/campaigns
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/unified-import/upload (Import CSV/Excel)
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
POST   /api/unified-import/validate (Validazione file)
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
GET    /api/unified-import/supported-types
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
============================================================
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
✅ Pronto per ricevere richieste!
[Wed Nov 12 2025 06:24:31.490]
gestionale-energia: 
[Wed Nov 12 2025 06:24:35.066]
gestionale-energia: 
::ffff:127.0.0.1 - - [12/Nov/2025:05:24:35 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Wed Nov 12 2025 06:25:00.538]
gestionale-energia: 
[Wed Nov 12 2025 06:25:00.538]
gestionale-energia: 
⏰ [12/11/2025, 06:25:00] Controllo campagne programmate
[Wed Nov 12 2025 06:25:00.538]
gestionale-energia: 
📧 Inizio controllo campagne programmate...
[Wed Nov 12 2025 06:25:00.538]
gestionale-energia: 
💤 Nessuna campagna programmata da inviare
[Wed Nov 12 2025 06:25:05.124]
gestionale-energia: 
::ffff:127.0.0.1 - - [12/Nov/2025:05:25:05 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"
[Wed Nov 12 2025 06:25:35.174]
gestionale-energia: 
::ffff:127.0.0.1 - - [12/Nov/2025:05:25:35 +0000] "GET /health HTTP/1.1" 200 81 "-" "curl/7.88.1"


-----------------------------------


traefik

[Wed Nov 12 2025 06:24:30.373]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Configuration loaded from flags."
[Wed Nov 12 2025 06:24:30.373]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Traefik version 2.10.7 built on 2023-12-06T15:54:59Z"
[Wed Nov 12 2025 06:24:30.376]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Static configuration loaded {\"global\":{\"checkNewVersion\":true},\"serversTransport\":{\"maxIdleConnsPerHost\":200},\"entryPoints\":{\"web\":{\"address\":\":80\",\"transport\":{\"lifeCycle\":{\"graceTimeOut\":\"10s\"},\"respondingTimeouts\":{\"idleTimeout\":\"3m0s\"}},\"forwardedHeaders\":{},\"http\":{},\"http2\":{\"maxConcurrentStreams\":250},\"udp\":{\"timeout\":\"3s\"}},\"websecure\":{\"address\":\":443\",\"transport\":{\"lifeCycle\":{\"graceTimeOut\":\"10s\"},\"respondingTimeouts\":{\"idleTimeout\":\"3m0s\"}},\"forwardedHeaders\":{},\"http\":{},\"http2\":{\"maxConcurrentStreams\":250},\"udp\":{\"timeout\":\"3s\"}}},\"providers\":{\"providersThrottleDuration\":\"2s\",\"docker\":{\"watch\":true,\"endpoint\":\"unix:///var/run/docker.sock\",\"defaultRule\":\"Host(`{{ normalize .Name }}`)\",\"swarmModeRefreshSeconds\":\"15s\"}},\"api\":{\"dashboard\":true},\"log\":{\"level\":\"DEBUG\",\"format\":\"common\"},\"certificatesResolvers\":{\"letsencrypt\":{\"acme\":{\"email\":\"info.gianlucamancini@gmail.com\",\"caServer\":\"https://acme-v02.api.letsencrypt.org/directory\",\"storage\":\"/letsencrypt/acme.json\",\"keyType\":\"RSA4096\",\"certificatesDuration\":2160,\"httpChallenge\":{\"entryPoint\":\"web\"}}}}}"
[Wed Nov 12 2025 06:24:30.379]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="\nStats collection is disabled.\nHelp us improve Traefik by turning this feature on :)\nMore details on: https://doc.traefik.io/traefik/contributing/data-collection/\n"
[Wed Nov 12 2025 06:24:30.386]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Starting provider aggregator aggregator.ProviderAggregator"
[Wed Nov 12 2025 06:24:30.386]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Starting TCP Server" entryPointName=web
[Wed Nov 12 2025 06:24:30.386]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Starting TCP Server" entryPointName=websecure
[Wed Nov 12 2025 06:24:30.386]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Starting provider *traefik.Provider"
[Wed Nov 12 2025 06:24:30.386]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="*traefik.Provider provider configuration: {}"
[Wed Nov 12 2025 06:24:30.389]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Configuration received: {\"http\":{\"routers\":{\"acme-http\":{\"entryPoints\":[\"web\"],\"service\":\"acme-http@internal\",\"rule\":\"PathPrefix(`/.well-known/acme-challenge/`)\",\"priority\":2147483647}},\"services\":{\"acme-http\":{},\"api\":{},\"dashboard\":{},\"noop\":{}},\"serversTransports\":{\"default\":{\"maxIdleConnsPerHost\":200}}},\"tcp\":{},\"udp\":{},\"tls\":{}}" providerName=internal
[Wed Nov 12 2025 06:24:30.410]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Starting provider *docker.Provider"
[Wed Nov 12 2025 06:24:30.412]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="*docker.Provider provider configuration: {\"watch\":true,\"endpoint\":\"unix:///var/run/docker.sock\",\"defaultRule\":\"Host(`{{ normalize .Name }}`)\",\"swarmModeRefreshSeconds\":\"15s\"}"
[Wed Nov 12 2025 06:24:30.413]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Starting provider *acme.ChallengeTLSALPN"
[Wed Nov 12 2025 06:24:30.413]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="*acme.ChallengeTLSALPN provider configuration: {}"
[Wed Nov 12 2025 06:24:30.413]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Starting provider *acme.Provider"
[Wed Nov 12 2025 06:24:30.421]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="*acme.Provider provider configuration: {\"email\":\"info.gianlucamancini@gmail.com\",\"caServer\":\"https://acme-v02.api.letsencrypt.org/directory\",\"storage\":\"/letsencrypt/acme.json\",\"keyType\":\"RSA4096\",\"certificatesDuration\":2160,\"httpChallenge\":{\"entryPoint\":\"web\"},\"ResolverName\":\"letsencrypt\",\"store\":{},\"TLSChallengeProvider\":{},\"HTTPChallengeProvider\":{}}"
[Wed Nov 12 2025 06:24:30.421]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Attempt to renew certificates \"720h0m0s\" before expiry and check every \"24h0m0s\"" providerName=letsencrypt.acme ACME CA="https://acme-v02.api.letsencrypt.org/directory"
[Wed Nov 12 2025 06:24:30.421]
traefik: 
time="2025-11-12T05:24:30Z" level=info msg="Testing certificate renew..." ACME CA="https://acme-v02.api.letsencrypt.org/directory" providerName=letsencrypt.acme
[Wed Nov 12 2025 06:24:30.422]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Configuration received: {\"http\":{},\"tcp\":{},\"udp\":{},\"tls\":{}}" providerName=letsencrypt.acme
[Wed Nov 12 2025 06:24:30.479]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="No default certificate, fallback to the internal generated certificate" tlsStoreName=default
[Wed Nov 12 2025 06:24:30.481]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Provider connection established with docker 28.5.1 (API 1.51)" providerName=docker
[Wed Nov 12 2025 06:24:30.488]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Added outgoing tracing middleware acme-http@internal" entryPointName=web routerName=acme-http@internal middlewareType=TracingForwarder middlewareName=tracing
[Wed Nov 12 2025 06:24:30.488]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Creating middleware" middlewareType=Recovery middlewareName=traefik-internal-recovery entryPointName=web
[Wed Nov 12 2025 06:24:30.543]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Filtering unhealthy or starting container" providerName=docker container=gestionale-energia-gestionale-energia-822f70c46cd2b6c9634fcbc2526a20ae0fc24ba08692d1cd325801dc68edbdc7
[Wed Nov 12 2025 06:24:30.565]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Configuration received: {\"http\":{\"routers\":{\"traefik\":{\"entryPoints\":[\"websecure\"],\"service\":\"api@internal\",\"rule\":\"Host(`gmgestionale.cloud`) \\u0026\\u0026 PathPrefix(`/dashboard`)\",\"tls\":{}}},\"services\":{\"traefik-gestionale-energia\":{\"loadBalancer\":{\"servers\":[{\"url\":\"http://172.18.0.3:80\"}],\"passHostHeader\":true}}}},\"tcp\":{},\"udp\":{}}" providerName=docker
[Wed Nov 12 2025 06:24:30.589]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="No default certificate, fallback to the internal generated certificate" tlsStoreName=default
[Wed Nov 12 2025 06:24:30.592]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Added outgoing tracing middleware acme-http@internal" entryPointName=web routerName=acme-http@internal middlewareType=TracingForwarder middlewareName=tracing
[Wed Nov 12 2025 06:24:30.592]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Creating middleware" middlewareName=traefik-internal-recovery middlewareType=Recovery entryPointName=web
[Wed Nov 12 2025 06:24:30.985]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="No default certificate, fallback to the internal generated certificate" tlsStoreName=default
[Wed Nov 12 2025 06:24:30.993]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Added outgoing tracing middleware acme-http@internal" routerName=acme-http@internal middlewareName=tracing middlewareType=TracingForwarder entryPointName=web
[Wed Nov 12 2025 06:24:30.993]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Creating middleware" entryPointName=web middlewareName=traefik-internal-recovery middlewareType=Recovery
[Wed Nov 12 2025 06:24:30.993]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Added outgoing tracing middleware api@internal" entryPointName=websecure routerName=traefik@docker middlewareName=tracing middlewareType=TracingForwarder
[Wed Nov 12 2025 06:24:30.993]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Creating middleware" entryPointName=websecure middlewareName=traefik-internal-recovery middlewareType=Recovery
[Wed Nov 12 2025 06:24:30.993]
traefik: 
time="2025-11-12T05:24:30Z" level=debug msg="Adding route for gmgestionale.cloud with TLS options default" entryPointName=websecure
[Wed Nov 12 2025 06:24:35.072]
traefik: 
time="2025-11-12T05:24:35Z" level=debug msg="Provider event received {Status:health_status: healthy ID:822f70c46cd2b6c9634fcbc2526a20ae0fc24ba08692d1cd325801dc68edbdc7 From:ghcr.io/okaokay/gestionale-energia:latest Type:container Action:health_status: healthy Actor:{ID:822f70c46cd2b6c9634fcbc2526a20ae0fc24ba08692d1cd325801dc68edbdc7 Attributes:map[com.docker.compose.config-hash:f75189891aad750bb4b94a8db1a26cfdc8f3f46294a2c25833d01c22626ae486 com.docker.compose.container-number:1 com.docker.compose.depends_on: com.docker.compose.image:sha256:84e4776162cb47eb87d6183f55627efb993fc3619ee2ce63c7a7f6d83598eb43 com.docker.compose.oneoff:False com.docker.compose.project:gestionale-energia com.docker.compose.project.config_files:/docker/gestionale-energia/docker-compose.yml com.docker.compose.project.environment_file:/docker/gestionale-energia/.env com.docker.compose.project.working_dir:/tmp/hstgr-4629k_ty-dckr-mgr/hostinger com.docker.compose.service:gestionale-energia com.docker.compose.version:2.40.1 image:ghcr.io/okaokay/gestionale-energia:latest name:gestionale-energia org.opencontainers.image.created:2025-11-12T05:22:30.935Z org.opencontainers.image.description: org.opencontainers.image.licenses: org.opencontainers.image.revision:1aaf62ec3736acaddbbb158c82dce2db96daeb73 org.opencontainers.image.source:https://github.com/okaokay/gestionale-energia org.opencontainers.image.title:gestionale-energia org.opencontainers.image.url:https://github.com/okaokay/gestionale-energia org.opencontainers.image.version:latest traefik.docker.network:gestionale_net traefik.enable:true traefik.http.middlewares.redirect-https.redirectscheme.permanent:true traefik.http.middlewares.redirect-https.redirectscheme.scheme:https traefik.http.middlewares.unlayer-headers.headers.contentSecurityPolicy:default-src 'self' https: data: blob:; base-uri 'self'; font-src 'self' https: data:; img-src 'self' https: data: blob:; object-src 'none'; script-src 'self' blob: https://editor.unlayer.com https://*.unlayer.com 'unsafe-inline' 'unsafe-eval'; style-src 'self' https: 'unsafe-inline'; frame-src 'self' https://editor.unlayer.com https://*.unlayer.com; connect-src 'self' https://editor.unlayer.com https://*.unlayer.com wss:; form-action 'self'; frame-ancestors 'self' traefik.http.middlewares.unlayer-headers.headers.customResponseHeaders.Cross-Origin-Resource-Policy:cross-origin traefik.http.middlewares.unlayer-headers.headers.removeResponseHeaders:Content-Security-Policy,Cross-Origin-Resource-Policy,Cross-Origin-Embedder-Policy traefik.http.routers.gestionale-http.entrypoints:web traefik.http.routers.gestionale-http.middlewares:redirect-https,unlayer-headers traefik.http.routers.gestionale-http.rule:Host(`gmgestionale.cloud`) || Host(`www.gmgestionale.cloud`) && PathPrefix(`/`) traefik.http.routers.gestionale.entrypoints:websecure traefik.http.routers.gestionale.middlewares:unlayer-headers traefik.http.routers.gestionale.rule:Host(`gmgestionale.cloud`) || Host(`www.gmgestionale.cloud`) && PathPrefix(`/`) traefik.http.routers.gestionale.service:gestionale traefik.http.routers.gestionale.tls:true traefik.http.routers.gestionale.tls.certresolver:letsencrypt traefik.http.services.gestionale.loadbalancer.server.port:3001]} Scope:local Time:1762925075 TimeNano:1762925075071627012}" providerName=docker
[Wed Nov 12 2025 06:24:35.079]
traefik: 
time="2025-11-12T05:24:35Z" level=error msg="field not found, node: removeResponseHeaders" providerName=docker container=gestionale-energia-gestionale-energia-822f70c46cd2b6c9634fcbc2526a20ae0fc24ba08692d1cd325801dc68edbdc7
[Wed Nov 12 2025 06:24:35.079]
traefik: 
time="2025-11-12T05:24:35Z" level=debug msg="Configuration received: {\"http\":{\"routers\":{\"traefik\":{\"entryPoints\":[\"websecure\"],\"service\":\"api@internal\",\"rule\":\"Host(`gmgestionale.cloud`) \\u0026\\u0026 PathPrefix(`/dashboard`)\",\"tls\":{}}},\"services\":{\"traefik-gestionale-energia\":{\"loadBalancer\":{\"servers\":[{\"url\":\"http://172.18.0.3:80\"}],\"passHostHeader\":true}}}},\"tcp\":{},\"udp\":{}}" providerName=docker
[Wed Nov 12 2025 06:24:35.079]
traefik: 
time="2025-11-12T05:24:35Z" level=debug msg="Skipping unchanged configuration." providerName=docker
[Wed Nov 12 2025 06:25:01.603]
traefik: 
time="2025-11-12T05:25:01Z" level=debug msg="Serving default certificate for request: \"gmgestionale.cloud\""
[Wed Nov 12 2025 06:25:01.646]
traefik: 
time="2025-11-12T05:25:01Z" level=debug msg="http: TLS handshake error from 37.159.37.77:17592: remote error: tls: unknown certificate"
[Wed Nov 12 2025 06:25:06.570]
traefik: 
time="2025-11-12T05:25:06Z" level=debug msg="Serving default certificate for request: \"gmgestionale.cloud\""
[Wed Nov 12 2025 06:25:06.622]
traefik: 
time="2025-11-12T05:25:06Z" level=debug msg="http: TLS handshake error from 37.159.37.77:17659: remote error: tls: unknown certificate"
[Wed Nov 12 2025 06:25:06.701]
traefik: 
time="2025-11-12T05:25:06Z" level=debug msg="Serving default certificate for request: \"gmgestionale.cloud\""