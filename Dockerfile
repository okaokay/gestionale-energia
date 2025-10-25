# Multi-stage build per ottimizzare le dimensioni dell'immagine

# Stage 1: Build del frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci --only=production
COPY frontend/ ./
RUN npm run build

# Stage 2: Build del backend
FROM node:18-alpine AS backend-builder
WORKDIR /app/backend
COPY package*.json ./
RUN npm ci --only=production
COPY backend/ ./backend/
COPY tsconfig.json ./
RUN npm run build

# Stage 3: Immagine finale di produzione
FROM node:18-alpine AS production
WORKDIR /app

# Installa SQLite3 e altre dipendenze di sistema
RUN apk add --no-cache sqlite

# Copia le dipendenze di produzione
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copia il backend compilato
COPY --from=backend-builder /app/dist ./dist

# Copia il frontend buildato
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Copia i file necessari
COPY backend/database/schema.sql ./backend/database/
COPY backend/database/database.sqlite ./backend/database/

# Crea le directory necessarie
RUN mkdir -p uploads/temp uploads/contracts uploads/documenti

# Espone la porta del backend
EXPOSE 3001

# Variabili d'ambiente di produzione
ENV NODE_ENV=production
ENV PORT=3001

# Comando di avvio
CMD ["node", "dist/backend/server.js"]