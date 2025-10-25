# Gestionale Energia - Sistema Completo per Agenzia Luce e Gas

Sistema di gestione completo con AI integration per analisi offerte e matching clienti.

## 🚀 Caratteristiche Principali

- **Gestione Clienti**: Anagrafica completa privati e aziende con codici ATECO
- **Contratti Luce e Gas**: Gestione contratti con alert scadenze automatici
- **Email Automatizzate**: Sistema email marketing con targeting intelligente
- **Comparatore AI**: Analisi PDF offerte con Ollama AI e matching automatico clienti
- **Dashboard Avanzata**: KPI, grafici e reportistica completa
- **Multi-ruolo**: Super Admin, Admin, Operatore, Visualizzatore
- **GDPR Compliant**: Audit log, consensi, diritto oblio

## 📋 Requisiti

- Node.js 18+
- PostgreSQL 14+
- npm o yarn

## 🛠 Installazione

1. Clona il repository
2. Copia `.env.example` in `.env` e configura le variabili
3. Installa le dipendenze:
```bash
npm run setup
```

4. Crea il database PostgreSQL:
```bash
createdb gestionale_energia
```

5. Esegui le migrations:
```bash
npm run db:migrate
```

6. Avvia l'applicazione:
```bash
npm run dev
```

L'applicazione sarà disponibile su:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 👤 Credenziali Default

**Super Admin:**
- Email: admin@gestionale.it
- Password: Admin123!

## 📚 Documentazione API

Le API sono disponibili su `http://localhost:3001/api/`

Endpoint principali:
- `/api/auth/*` - Autenticazione
- `/api/customers/*` - Gestione clienti
- `/api/contracts/*` - Gestione contratti
- `/api/offers/*` - Gestione offerte
- `/api/ai/*` - Analisi AI e matching
- `/api/emails/*` - Email marketing
- `/api/dashboard/*` - Dashboard e KPI

## 🏗 Struttura Progetto

```
├── backend/
│   ├── config/          # Configurazioni
│   ├── database/        # Schema DB e migrations
│   ├── middleware/      # Middleware Express
│   ├── models/          # Modelli dati
│   ├── routes/          # Route API
│   ├── controllers/     # Business logic
│   ├── services/        # Servizi (email, AI, ecc.)
│   └── server.ts        # Entry point backend
├── frontend/
│   ├── src/
│   │   ├── components/  # Componenti React
│   │   ├── pages/       # Pagine applicazione
│   │   ├── services/    # API client
│   │   ├── context/     # Context React
│   │   └── App.tsx      # Entry point frontend
│   └── package.json
└── package.json
```

## 📄 Licenza

Proprietario - Tutti i diritti riservati

