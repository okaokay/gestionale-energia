# Multi-stage build per ottimizzare le dimensioni dell'immagine

# Stage 1: Build del frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: Build del backend
FROM node:18-alpine AS backend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY backend/ ./backend/
COPY tsconfig.json ./
RUN npm run build

# Stage 3: Immagine finale di produzione
FROM node:18-alpine AS production
WORKDIR /app

# Installa SQLite3, Python e strumenti di build necessari per better-sqlite3
RUN apk add --no-cache \
    sqlite \
    python3 \
    make \
    g++ \
    py3-pip \
    pkgconfig \
    cairo-dev \
    pango-dev \
    libjpeg-turbo-dev \
    giflib-dev \
    pixman-dev

# Configura Python per node-gyp
RUN ln -sf python3 /usr/bin/python
ENV PYTHON=/usr/bin/python3

# Copia le dipendenze di produzione
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copia il backend compilato
COPY --from=backend-builder /app/dist ./dist

# Copia il frontend buildato
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Copia i file necessari
COPY backend/database/schema.sql ./backend/database/

# Crea le directory necessarie
RUN mkdir -p uploads/temp uploads/contracts uploads/documenti uploads/clienti backend/database

# Crea il database SQLite e esegue le migrazioni
RUN touch /app/gestionale_energia.db
RUN node dist/backend/database/migrate-sqlite.js

# Espone la porta del backend
EXPOSE 3001

# Variabili d'ambiente di produzione
ENV NODE_ENV=production
ENV PORT=3001

# Comando di avvio
CMD ["node", "dist/backend/server.js"]