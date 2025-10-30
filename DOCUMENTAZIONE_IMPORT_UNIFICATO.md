# Sistema di Import Unificato - Documentazione Completa

## Panoramica

Il Sistema di Import Unificato è una soluzione avanzata per l'importazione intelligente di dati CSV/Excel nel gestionale energia. Il sistema supporta l'importazione automatica di clienti privati, clienti aziende, contratti luce e gas con rilevamento automatico del tipo di record e gestione UPSERT.

## Caratteristiche Principali

### 🎯 Rilevamento Automatico
- **Rilevamento Tipo Record**: Analisi automatica dei campi per determinare il tipo di dato
- **Confidenza**: Sistema di scoring per valutare l'accuratezza del rilevamento
- **Fallback Intelligente**: Gestione di record misti nello stesso file

### 🔄 Gestione UPSERT
- **Clienti Privati**: Ricerca per `codice_fiscale` o `email_principale`
- **Clienti Aziende**: Ricerca per `partita_iva`, `ragione_sociale` o `email_referente`
- **Contratti Luce**: Ricerca per `pod` (Point of Delivery)
- **Contratti Gas**: Ricerca per `pdr` (Point of Redelivery)

### 💰 Sistema Compensi Automatico
- **Calcolo Automatico**: Creazione automatica compensi per nuovi contratti attivi
- **Risoluzione Agenti**: Associazione automatica agenti tramite email
- **Regole Personalizzate**: Supporto per regole di commissione specifiche per cliente

### 📊 Preview Intelligente
- **Anteprima Dati**: Visualizzazione sample dei dati prima dell'import
- **Validazione Preventiva**: Controllo errori e avvisi prima dell'elaborazione
- **Statistiche**: Conteggio record per tipo e stima risultati

### 📈 Dashboard Risultati
- **Statistiche Dettagliate**: Riepilogo completo per tipo di record
- **Gestione Errori**: Visualizzazione errori e avvisi con dettagli
- **Export Report**: Scaricamento report in formato JSON

## Architettura del Sistema

### Backend Services

#### 1. UnifiedImportService
**File**: `backend/services/unifiedImportService.ts`

Servizio principale che orchestra l'intero processo di import:

```typescript
class UnifiedImportService {
    // Metodi principali
    async importFile(fileBuffer: Buffer, fileName: string, options: ImportOptions): Promise<ImportResult>
    async generatePreview(fileBuffer: Buffer, fileName: string): Promise<PreviewResult>
    getImportResult(importId: string): ImportResult | null
    
    // Metodi specializzati UPSERT
    private async insertClientePrivato(record: any): Promise<InsertResult>
    private async insertClienteAzienda(record: any): Promise<InsertResult>
    private async insertContrattoLuce(record: any): Promise<InsertResult>
    private async insertContrattoGas(record: any): Promise<InsertResult>
    
    // Sistema compensi
    private async calculateAutomaticCompensation(contractId: number, contractType: string): Promise<void>
}
```

#### 2. RecordTypeDetector
**File**: `backend/services/recordTypeDetector.ts`

Rilevamento intelligente del tipo di record:

```typescript
interface RecordTypeDetectionResult {
    type: string;
    confidence: number;
    matchedFields: string[];
    missingFields: string[];
}

class RecordTypeDetector {
    detectRecordType(csvFields: string[]): RecordTypeDetectionResult
}
```

#### 3. UnifiedCsvParser
**File**: `backend/services/unifiedCsvParser.ts`

Parser avanzato per file CSV/Excel:

```typescript
interface ParseResult {
    success: boolean;
    records: ParsedRecord[];
    headers: string[];
    totalRows: number;
    globalErrors: string[];
}
```

#### 4. RecordValidator
**File**: `backend/services/recordValidator.ts`

Validazione avanzata dei record:

```typescript
interface ValidationResult {
    validRecords: ValidatedRecord[];
    invalidRecords: InvalidRecord[];
    errors: string[];
    warnings: string[];
}
```

#### 5. RecordAssociator
**File**: `backend/services/recordAssociator.ts`

Associazione intelligente dei record:

```typescript
interface AssociationResult {
    associatedRecords: AssociatedRecord[];
    errors: string[];
    warnings: string[];
}
```

### Frontend Components

#### 1. SuperImportModal
**File**: `frontend/src/components/SuperImportModal.tsx`

Componente principale per l'interfaccia di import:

**Fasi del Processo**:
1. **Upload**: Selezione e caricamento file
2. **Preview**: Anteprima e validazione dati
3. **Options**: Configurazione opzioni avanzate
4. **Progress**: Monitoraggio progresso in tempo reale
5. **Results**: Visualizzazione risultati tramite dashboard

#### 2. ImportResultsDashboard
**File**: `frontend/src/components/ImportResultsDashboard.tsx`

Dashboard completa per visualizzazione risultati:

**Caratteristiche**:
- Statistiche aggregate per tipo di record
- Visualizzazione errori e avvisi
- Export report dettagliato
- Dettagli temporali dell'import

### API Endpoints

#### Import Endpoints
```
POST /api/unified-import/upload
- Caricamento file e avvio import
- Supporta CSV, XLS, XLSX, TXT (max 50MB)

POST /api/unified-import/preview
- Generazione preview senza import
- Validazione preventiva dati

GET /api/unified-import/progress/:importId
- Recupero stato progresso import

GET /api/unified-import/progress-stream/:importId
- Stream tempo reale progresso (SSE)

GET /api/unified-import/result/:importId
- Recupero risultato finale import

GET /api/unified-import/supported-types
- Lista tipi record supportati

GET /api/unified-import/validation-rules/:type
- Regole validazione per tipo specifico

GET /api/unified-import/association-rules
- Regole associazione automatica
```

## Tipi di Record Supportati

### 1. Clienti Privati
**Campi Chiave**: `nome`, `cognome`, `codice_fiscale`, `email_principale`

**Campi Supportati**:
- `nome` (obbligatorio)
- `cognome` (obbligatorio)
- `codice_fiscale` (obbligatorio, chiave UPSERT)
- `email_principale` (chiave UPSERT alternativa)
- `telefono`
- `indirizzo`
- `citta`
- `cap`
- `provincia`
- `assigned_agent_email` (per associazione agente)

### 2. Clienti Aziende
**Campi Chiave**: `ragione_sociale`, `partita_iva`, `email_referente`

**Campi Supportati**:
- `ragione_sociale` (obbligatorio, chiave UPSERT)
- `partita_iva` (obbligatorio, chiave UPSERT primaria)
- `email_referente` (chiave UPSERT alternativa)
- `telefono_referente`
- `indirizzo`
- `citta`
- `cap`
- `provincia`
- `assigned_agent_email` (per associazione agente)

### 3. Contratti Luce
**Campi Chiave**: `tipo_contratto=luce`, `pod`

**Campi Supportati**:
- `tipo_contratto` (deve essere "luce")
- `pod` (obbligatorio, chiave UPSERT)
- `potenza_impegnata`
- `consumo_annuo_stimato`
- `fornitore_attuale`
- `data_inizio_contratto`
- `data_fine_contratto`
- `prezzo_energia`
- `codice_fiscale` o `partita_iva` (per associazione cliente)

### 4. Contratti Gas
**Campi Chiave**: `tipo_contratto=gas`, `pdr`

**Campi Supportati**:
- `tipo_contratto` (deve essere "gas")
- `pdr` (obbligatorio, chiave UPSERT)
- `consumo_annuo_stimato`
- `fornitore_attuale`
- `data_inizio_contratto`
- `data_fine_contratto`
- `prezzo_gas`
- `codice_fiscale` o `partita_iva` (per associazione cliente)

## Configurazione e Opzioni

### Opzioni Import
```typescript
interface ImportOptions {
    autoDetectType?: boolean;          // Rilevamento automatico tipo (default: true)
    skipEmptyRows?: boolean;           // Salta righe vuote (default: true)
    trimValues?: boolean;              // Rimuovi spazi (default: true)
    maxRows?: number;                  // Limite righe (default: illimitato)
    forceRecordType?: string;          // Forza tipo specifico
    confidenceThreshold?: number;      // Soglia confidenza (default: 0.7)
    batchSize?: number;                // Dimensione batch (default: 100)
    validateOnly?: boolean;            // Solo validazione (default: false)
}
```

### Configurazione Soglie
- **Confidenza Minima**: 70% per rilevamento automatico
- **Batch Size**: 100 record per batch di elaborazione
- **Timeout**: 30 secondi per operazione singola
- **Max File Size**: 50MB

## Esempi di Utilizzo

### 1. Import File Misto
```csv
nome,cognome,codice_fiscale,email_principale,ragione_sociale,partita_iva,tipo_contratto,pod,pdr
Mario,Rossi,RSSMRA80A01H501Z,mario.rossi@email.com,,,luce,IT001E12345678,
,,,,,Acme SRL,12345678901,gas,,IT001G87654321
```

### 2. Import Solo Clienti
```csv
nome,cognome,codice_fiscale,email_principale,telefono,assigned_agent_email
Mario,Rossi,RSSMRA80A01H501Z,mario.rossi@email.com,3331234567,agente1@test.com
Luigi,Verdi,VRDLGU75B15F205X,luigi.verdi@email.com,3339876543,agente2@test.com
```

### 3. Import Solo Contratti
```csv
tipo_contratto,pod,pdr,codice_fiscale,partita_iva,consumo_annuo_stimato
luce,IT001E12345678,,RSSMRA80A01H501Z,,3000
gas,,IT001G87654321,,12345678901,5000
```

## Gestione Errori

### Tipi di Errore
1. **Errori di Parsing**: File corrotto, formato non supportato
2. **Errori di Validazione**: Campi obbligatori mancanti, formati non validi
3. **Errori di Database**: Vincoli violati, connessione persa
4. **Errori di Associazione**: Cliente non trovato, agente non valido

### Strategia di Recupero
- **Rollback Parziale**: Solo record falliti vengono scartati
- **Retry Automatico**: Tentativi multipli per errori temporanei
- **Logging Dettagliato**: Tracciamento completo per debugging

## Monitoraggio e Performance

### Metriche Tracciate
- **Tempo di Elaborazione**: Per fase e totale
- **Throughput**: Record al secondo
- **Tasso di Successo**: Percentuale record elaborati con successo
- **Utilizzo Memoria**: Monitoraggio consumo RAM

### Ottimizzazioni
- **Streaming**: Elaborazione a chunk per file grandi
- **Caching**: Cache risultati validazione
- **Pooling**: Pool connessioni database
- **Compressione**: Compressione response API

## Testing

### File di Test Inclusi
- `test-unified-import.csv`: File misto per test completo
- `template_import_universale.csv`: Template con tutti i campi

### Scenari di Test
1. **Import Completo**: Tutti i tipi di record
2. **Import Parziale**: Solo alcuni tipi
3. **Gestione Errori**: Record con errori misti
4. **Performance**: File di grandi dimensioni
5. **Concorrenza**: Import multipli simultanei

## Troubleshooting

### Problemi Comuni

#### 1. "Tipo record non rilevato"
- **Causa**: Campi non corrispondono ai pattern attesi
- **Soluzione**: Verificare nomi colonne, usare forza tipo

#### 2. "Errore UPSERT"
- **Causa**: Chiavi duplicate o vincoli violati
- **Soluzione**: Verificare unicità chiavi, controllare dati esistenti

#### 3. "Timeout import"
- **Causa**: File troppo grande o server sovraccarico
- **Soluzione**: Ridurre batch size, dividere file

#### 4. "Agente non trovato"
- **Causa**: Email agente non valida o agente non esistente
- **Soluzione**: Verificare email agenti, creare agenti mancanti

### Log e Debug
- **Log Level**: Configurabile tramite variabile ambiente
- **File Log**: Rotazione automatica giornaliera
- **Monitoring**: Integrazione con sistemi di monitoraggio esterni

## Roadmap Future

### Prossime Funzionalità
1. **Import da API**: Integrazione con sistemi esterni
2. **Scheduling**: Import programmati automatici
3. **Notifiche**: Alert email per import completati
4. **Audit Trail**: Tracciamento completo modifiche
5. **Machine Learning**: Miglioramento rilevamento automatico

### Miglioramenti Performance
1. **Parallelizzazione**: Elaborazione parallela batch
2. **Caching Avanzato**: Cache distribuita Redis
3. **Ottimizzazione Query**: Indici database ottimizzati
4. **Streaming Avanzato**: Elaborazione real-time

---

## Supporto

Per supporto tecnico o segnalazione bug, consultare:
- **Documentazione API**: `/api/docs`
- **Log Sistema**: `/var/log/gestionale/`
- **Monitoring**: Dashboard Grafana integrata

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: Ottobre 2024