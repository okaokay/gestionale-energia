gestionale-energia-hostinger

[Sun Nov 02 2025 20:57:37.596]
gestionale-energia-hostinger: 
📁 DATABASE_PATH: /app/backend/database/database.sqlite
[Sun Nov 02 2025 20:57:37.602]
gestionale-energia-hostinger: 
🔧 Database mancante o vuoto. Avvio migrazione SQLite...
[Sun Nov 02 2025 20:57:37.661]
gestionale-energia-hostinger: 
🚀 Inizio migrazione SQLite...
[Sun Nov 02 2025 20:57:37.665]
gestionale-energia-hostinger: 
✅ Tabella users creata
[Sun Nov 02 2025 20:57:37.764]
gestionale-energia-hostinger: 
✅ Utente Super Admin creato
[Sun Nov 02 2025 20:57:37.764]
gestionale-energia-hostinger: 
Email: admin@gestionale.it
[Sun Nov 02 2025 20:57:37.764]
gestionale-energia-hostinger: 
Password: Admin123!
[Sun Nov 02 2025 20:57:37.769]
gestionale-energia-hostinger: 
✅ Tabelle clienti create
[Sun Nov 02 2025 20:57:37.775]
gestionale-energia-hostinger: 
✅ Tabelle contratti create
[Sun Nov 02 2025 20:57:37.775]
gestionale-energia-hostinger: 
💰 Creazione tabella contabilita_movimenti...
[Sun Nov 02 2025 20:57:37.785]
gestionale-energia-hostinger: 
✅ Tabella contabilita_movimenti creata con indici
[Sun Nov 02 2025 20:57:37.788]
gestionale-energia-hostinger: 
✅ Tabella offerte creata
[Sun Nov 02 2025 20:57:37.788]
gestionale-energia-hostinger: 
🧩 Verifica/Aggiunta colonne utenti mancanti...
[Sun Nov 02 2025 20:57:37.790]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.role
[Sun Nov 02 2025 20:57:37.792]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.is_active
[Sun Nov 02 2025 20:57:37.795]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.parent_id
[Sun Nov 02 2025 20:57:37.797]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.agency_name
[Sun Nov 02 2025 20:57:37.799]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.phone
[Sun Nov 02 2025 20:57:37.802]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.commissioni_luce_default
[Sun Nov 02 2025 20:57:37.804]
gestionale-energia-hostinger: 
✅ Aggiunta colonna users.commissioni_gas_default
[Sun Nov 02 2025 20:57:37.804]
gestionale-energia-hostinger: 
🧩 Verifica/Aggiunta colonne mancanti...
[Sun Nov 02 2025 20:57:37.807]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.codice_cliente
[Sun Nov 02 2025 20:57:37.810]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.provincia_residenza
[Sun Nov 02 2025 20:57:37.812]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.incomplete_data
[Sun Nov 02 2025 20:57:37.814]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.missing_fields
[Sun Nov 02 2025 20:57:37.817]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.data_quality_score
[Sun Nov 02 2025 20:57:37.819]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.stato
[Sun Nov 02 2025 20:57:37.820]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.assigned_agent_id
[Sun Nov 02 2025 20:57:37.822]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.commissione_pattuita
[Sun Nov 02 2025 20:57:37.827]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_privati.commissione_pagata
[Sun Nov 02 2025 20:57:37.829]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.provincia_sede_legale
[Sun Nov 02 2025 20:57:37.831]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.codice_cliente
[Sun Nov 02 2025 20:57:37.834]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.stato
[Sun Nov 02 2025 20:57:37.837]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.assigned_agent_id
[Sun Nov 02 2025 20:57:37.839]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.commissione_pattuita
[Sun Nov 02 2025 20:57:37.841]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.commissione_pagata
[Sun Nov 02 2025 20:57:37.843]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.email_principale
[Sun Nov 02 2025 20:57:37.846]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.incomplete_data
[Sun Nov 02 2025 20:57:37.848]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.missing_fields
[Sun Nov 02 2025 20:57:37.850]
gestionale-energia-hostinger: 
✅ Aggiunta colonna clienti_aziende.data_quality_score
[Sun Nov 02 2025 20:57:37.852]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.data_inizio
[Sun Nov 02 2025 20:57:37.854]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.data_inizio
[Sun Nov 02 2025 20:57:37.857]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.data_fine
[Sun Nov 02 2025 20:57:37.859]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.data_fine
[Sun Nov 02 2025 20:57:37.861]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.note
[Sun Nov 02 2025 20:57:37.864]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.data_stipula
[Sun Nov 02 2025 20:57:37.866]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.agente
[Sun Nov 02 2025 20:57:37.869]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.nome_offerta
[Sun Nov 02 2025 20:57:37.872]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.validita_offerta
[Sun Nov 02 2025 20:57:37.874]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.commodity
[Sun Nov 02 2025 20:57:37.876]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.procedure
[Sun Nov 02 2025 20:57:37.878]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.pdp
[Sun Nov 02 2025 20:57:37.880]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.tipo_offerta
[Sun Nov 02 2025 20:57:37.882]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.created_by
[Sun Nov 02 2025 20:57:37.885]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_luce.updated_at
[Sun Nov 02 2025 20:57:37.887]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.note
[Sun Nov 02 2025 20:57:37.889]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.data_stipula
[Sun Nov 02 2025 20:57:37.891]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.agente
[Sun Nov 02 2025 20:57:37.893]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.nome_offerta
[Sun Nov 02 2025 20:57:37.895]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.validita_offerta
[Sun Nov 02 2025 20:57:37.898]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.commodity
[Sun Nov 02 2025 20:57:37.900]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.procedure
[Sun Nov 02 2025 20:57:37.903]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.pdp
[Sun Nov 02 2025 20:57:37.905]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.tipo_offerta
[Sun Nov 02 2025 20:57:37.908]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.created_by
[Sun Nov 02 2025 20:57:37.910]
gestionale-energia-hostinger: 
✅ Aggiunta colonna contratti_gas.updated_at
[Sun Nov 02 2025 20:57:37.910]
gestionale-energia-hostinger: 
💼 Creazione tabella compensi...
[Sun Nov 02 2025 20:57:37.920]
gestionale-energia-hostinger: 
✅ Tabella compensi creata con indici
[Sun Nov 02 2025 20:57:37.920]
gestionale-energia-hostinger: 
📰 Creazione tabelle newsletter...
[Sun Nov 02 2025 20:57:37.930]
gestionale-energia-hostinger: 
✅ Tabelle newsletter create e seed inserito
[Sun Nov 02 2025 20:57:37.931]
gestionale-energia-hostinger: 
✅ Tabella ai_matches creata
[Sun Nov 02 2025 20:57:37.931]
gestionale-energia-hostinger: 
📧 Creazione tabella email_templates...
[Sun Nov 02 2025 20:57:37.934]
gestionale-energia-hostinger: 
✅ Tabella email_templates creata
[Sun Nov 02 2025 20:57:37.934]
gestionale-energia-hostinger: 
📧 Creazione tabella email_campaigns...
[Sun Nov 02 2025 20:57:37.943]
gestionale-energia-hostinger: 
✅ Tabella email_campaigns creata con indici
[Sun Nov 02 2025 20:57:37.943]
gestionale-energia-hostinger: 
⚠️  scheduled_end_at già presente su email_campaigns, skip
[Sun Nov 02 2025 20:57:37.943]
gestionale-energia-hostinger: 
⚠️  sent_at già presente su email_campaigns, skip
[Sun Nov 02 2025 20:57:37.943]
gestionale-energia-hostinger: 
📧 Creazione tabella email_logs...
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
✅ Tabella email_logs creata con indici
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
✨ Migrazione SQLite completata con successo!
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
🎯 Database pronto all'uso:
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
Percorso: /app/backend/database/database.sqlite
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
Tipo: SQLite (nessun server richiesto)
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
✅ Avvia il server: npm run dev
[Sun Nov 02 2025 20:57:37.950]
gestionale-energia-hostinger: 
Frontend: http://localhost:5177
[Sun Nov 02 2025 20:57:37.951]
gestionale-energia-hostinger: 
Login: admin@gestionale.it / Admin123!
[Sun Nov 02 2025 20:57:37.951]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:37.958]
gestionale-energia-hostinger: 
✅ Migrazione completata. Database pronto.
[Sun Nov 02 2025 20:57:37.963]
gestionale-energia-hostinger: 
✅ Schema clienti_privati già privo di NOT NULL vincolanti
[Sun Nov 02 2025 20:57:37.963]
gestionale-energia-hostinger: 
✅ Schema clienti_aziende già privo di NOT NULL vincolanti
[Sun Nov 02 2025 20:57:37.968]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta email_secondaria
[Sun Nov 02 2025 20:57:37.971]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta telefono_fisso
[Sun Nov 02 2025 20:57:37.974]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta pec
[Sun Nov 02 2025 20:57:37.977]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta civico_residenza
[Sun Nov 02 2025 20:57:37.980]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta cap_residenza
[Sun Nov 02 2025 20:57:37.980]
gestionale-energia-hostinger: 
⚠️  Patch clienti_privati: provincia_residenza già presente, skip
[Sun Nov 02 2025 20:57:37.983]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta via_fornitura
[Sun Nov 02 2025 20:57:37.985]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta civico_fornitura
[Sun Nov 02 2025 20:57:37.988]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta cap_fornitura
[Sun Nov 02 2025 20:57:37.990]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta citta_fornitura
[Sun Nov 02 2025 20:57:37.993]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta provincia_fornitura
[Sun Nov 02 2025 20:57:37.996]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta tipo_documento
[Sun Nov 02 2025 20:57:37.999]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta numero_documento
[Sun Nov 02 2025 20:57:38.002]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta ente_rilascio
[Sun Nov 02 2025 20:57:38.005]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta data_scadenza_documento
[Sun Nov 02 2025 20:57:38.007]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta iban
[Sun Nov 02 2025 20:57:38.010]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta preferenza_email
[Sun Nov 02 2025 20:57:38.013]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta preferenza_sms
[Sun Nov 02 2025 20:57:38.015]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta preferenza_telefono
[Sun Nov 02 2025 20:57:38.018]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta note
[Sun Nov 02 2025 20:57:38.021]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta data_consenso
[Sun Nov 02 2025 20:57:38.023]
gestionale-energia-hostinger: 
✅ Patch clienti_privati: aggiunta created_by
[Sun Nov 02 2025 20:57:38.026]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta codice_fiscale
[Sun Nov 02 2025 20:57:38.029]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta descrizione_ateco
[Sun Nov 02 2025 20:57:38.031]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta pec_aziendale
[Sun Nov 02 2025 20:57:38.034]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta via_sede_legale
[Sun Nov 02 2025 20:57:38.037]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta civico_sede_legale
[Sun Nov 02 2025 20:57:38.039]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta cap_sede_legale
[Sun Nov 02 2025 20:57:38.040]
gestionale-energia-hostinger: 
⚠️  Patch clienti_aziende: provincia_sede_legale già presente, skip
[Sun Nov 02 2025 20:57:38.043]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta via_sede_operativa
[Sun Nov 02 2025 20:57:38.046]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta civico_sede_operativa
[Sun Nov 02 2025 20:57:38.048]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta cap_sede_operativa
[Sun Nov 02 2025 20:57:38.050]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta citta_sede_operativa
[Sun Nov 02 2025 20:57:38.053]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta provincia_sede_operativa
[Sun Nov 02 2025 20:57:38.058]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta nome_referente
[Sun Nov 02 2025 20:57:38.061]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta cognome_referente
[Sun Nov 02 2025 20:57:38.064]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta ruolo_referente
[Sun Nov 02 2025 20:57:38.066]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta dimensione_azienda
[Sun Nov 02 2025 20:57:38.068]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta settore_merceologico
[Sun Nov 02 2025 20:57:38.070]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta fatturato_annuo
[Sun Nov 02 2025 20:57:38.073]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta iban_aziendale
[Sun Nov 02 2025 20:57:38.076]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta codice_sdi
[Sun Nov 02 2025 20:57:38.079]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta note
[Sun Nov 02 2025 20:57:38.082]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta data_consenso
[Sun Nov 02 2025 20:57:38.085]
gestionale-energia-hostinger: 
✅ Patch clienti_aziende: aggiunta created_by
[Sun Nov 02 2025 20:57:38.085]
gestionale-energia-hostinger: 
🚀 Avvio server backend...
[Sun Nov 02 2025 20:57:38.241]
gestionale-energia-hostinger: 
✅ Database SQLite connesso: /app/backend/database/database.sqlite
[Sun Nov 02 2025 20:57:38.680]
gestionale-energia-hostinger: 
📡 Configurazione AI: Provider=ollama, URL=http://185.31.67.249/api/generate
[Sun Nov 02 2025 20:57:38.867]
gestionale-energia-hostinger: 
🔌 Test connessione database...
[Sun Nov 02 2025 20:57:38.869]
gestionale-energia-hostinger: 
✅ Test connessione SQLite OK
[Sun Nov 02 2025 20:57:38.869]
gestionale-energia-hostinger: 
⏰ Avvio cron job alert scadenze: 0 9 * * *
[Sun Nov 02 2025 20:57:38.875]
gestionale-energia-hostinger: 
✅ Cron job email scheduler attivo
[Sun Nov 02 2025 20:57:38.875]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:38.875]
gestionale-energia-hostinger: 
⏰ Avvio scheduler campagne email (ogni 5 minuti)
[Sun Nov 02 2025 20:57:38.876]
gestionale-energia-hostinger: 
✅ Campaign scheduler attivo
[Sun Nov 02 2025 20:57:38.876]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
============================================================
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
🚀 GESTIONALE ENERGIA - Server avviato con successo!
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
============================================================
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
📡 Server in ascolto su: http://localhost:3001
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
🌍 Ambiente: production
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
📊 Database: undefined
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
🔐 Frontend URL: http://localhost:5173
[Sun Nov 02 2025 20:57:38.878]
gestionale-energia-hostinger: 
============================================================
[Sun Nov 02 2025 20:57:38.879]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:38.879]
gestionale-energia-hostinger: 
📋 API Endpoints disponibili:
[Sun Nov 02 2025 20:57:38.879]
gestionale-energia-hostinger: 
POST   /api/auth/login
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/clienti
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
POST   /api/clienti/privati
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
POST   /api/clienti/aziende
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/contratti/luce
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/contratti/gas
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/contratti/scadenze
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/offerte
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
POST   /api/offerte/upload (Super Admin)
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/offerte/:id/matches
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/dashboard/stats
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/emails/campaigns
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
POST   /api/emails/campaigns
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
POST   /api/unified-import/upload (Import CSV/Excel)
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
POST   /api/unified-import/validate (Validazione file)
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
GET    /api/unified-import/supported-types
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
============================================================
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
✅ Pronto per ricevere richieste!
[Sun Nov 02 2025 20:57:38.880]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 20:57:42.606]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:19:57:42 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
[Sun Nov 02 2025 20:58:12.663]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:19:58:12 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
[Sun Nov 02 2025 20:58:42.731]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:19:58:42 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
[Sun Nov 02 2025 20:59:12.769]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:19:59:12 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
[Sun Nov 02 2025 20:59:42.814]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:19:59:42 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
[Sun Nov 02 2025 21:00:00.067]
gestionale-energia-hostinger: 
[Sun Nov 02 2025 21:00:00.067]
gestionale-energia-hostinger: 
⏰ [02/11/2025, 21:00:00] Controllo campagne programmate
[Sun Nov 02 2025 21:00:00.067]
gestionale-energia-hostinger: 
📧 Inizio controllo campagne programmate...
[Sun Nov 02 2025 21:00:00.067]
gestionale-energia-hostinger: 
💤 Nessuna campagna programmata da inviare
[Sun Nov 02 2025 21:00:12.861]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:20:00:12 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"
[Sun Nov 02 2025 21:00:42.905]
gestionale-energia-hostinger: 
::1 - - [02/Nov/2025:20:00:42 +0000] "GET /health HTTP/1.1" 200 81 "-" "Wget"