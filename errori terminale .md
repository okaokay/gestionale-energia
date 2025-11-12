[Tue Nov 11 2025 08:02:14.266]
gestionale-energia: 
::ffff:172.18.0.3 - - [11/Nov/2025:07:02:14 +0000] "GET /api/contratti/cliente/privato/38109f47-9974-43e8-b8e7-8ef032e0ab99 HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
🔄 Stato cliente 38109f47-9974-43e8-b8e7-8ef032e0ab99 sincronizzato con contratto luce: Chiusa
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
🔍 Verifica condizioni automazione commissione (da contratto LUCE):
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
- Stato nuovo: Chiusa
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
- Stati che triggerano pagamento: [ 'Da attivare', 'Chiusa', 'chiusa', 'Attivo' ]
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
- Stato è valido? true
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
- Commissione già pagata? null
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
- Commissione LUCE: null
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
- Agente assegnato: 2d1a5cc5-2326-45e7-87f8-ec4ed4510a9b
[Tue Nov 11 2025 08:02:14.332]
gestionale-energia: 
::ffff:172.18.0.3 - - [11/Nov/2025:07:02:14 +0000] "PUT /api/contratti/luce/be0ca8a1-603d-4ef4-a9d3-0c3933fee1e1 HTTP/1.1" 200 756 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
[Tue Nov 11 2025 08:02:14.412]
gestionale-energia: 
=== DEBUG PROCEDURA_NUOVA ===
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
Valore ricevuto: "Switch"
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
Tipo: string
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
Lunghezza: 6
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
Valore trimmed: "Switch"
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
Valori validi: [
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Switch',
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Voltura',
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Subentro',
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Allaccio',
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Attivazione su presa morosa',
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Disattivazione',
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
'Voltura mortis causa'
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
]
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
È incluso nei valori validi? true
[Tue Nov 11 2025 08:02:14.413]
gestionale-energia: 
=============================
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
❌ Errore query SQLite: SqliteError: FOREIGN KEY constraint failed
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:57:37)
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
at /app/dist/backend/routes/storico-procedure.js:138:35
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
code: 'SQLITE_CONSTRAINT_FOREIGNKEY'
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
}
[Tue Nov 11 2025 08:02:14.415]
gestionale-energia: 
↳ SQL:
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
INSERT INTO storico_procedure (
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
id,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
contratto_luce_id,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
tipo_contratto,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
procedura_precedente,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
procedura_nuova,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
note,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
allegato_filename,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
allegato_path,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
allegato_mimetype,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
allegato_size,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
created_by,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
created_at
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
↳ Params: [
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
'7e87e573-0fe1-4b64-9faf-b62ec72606ab',
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
'be0ca8a1-603d-4ef4-a9d3-0c3933fee1e1',
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
'luce',
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
null,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
'Switch',
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
'Stato modificato dalla lista clienti',
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
null,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
null,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
null,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
null,
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
'afa64685-9c41-414a-a931-44b01f65d6e7'
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
]
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
❌ Errore: SqliteError: FOREIGN KEY constraint failed
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
at Object.query (/app/dist/backend/config/database.js:57:37)
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
at /app/dist/backend/routes/storico-procedure.js:138:35
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
code: 'SQLITE_CONSTRAINT_FOREIGNKEY'
[Tue Nov 11 2025 08:02:14.416]
gestionale-energia: 
}
[Tue Nov 11 2025 08:02:14.417]
gestionale-energia: 
::ffff:172.18.0.3 - - [11/Nov/2025:07:02:14 +0000] "POST /api/storico-procedure/luce/be0ca8a1-603d-4ef4-a9d3-0c3933fee1e1 HTTP/1.1" 500 64 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 OPR/122.0.0.0 (Edition std-2)"
