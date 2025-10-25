/**
 * Script migrazione SQLite
 * Crea database e dati iniziali
 */

import Database from 'better-sqlite3';
import * as bcrypt from 'bcryptjs';
import path from 'path';
import { randomUUID } from 'crypto';

const dbPath = path.join(__dirname, '../../gestionale_energia.db');
const db = new Database(dbPath);

async function runMigration() {
    try {
        console.log('🚀 Inizio migrazione SQLite...');
        
        // Abilita foreign keys
        db.pragma('foreign_keys = ON');
        
        // Tabella users
        db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                nome TEXT NOT NULL,
                cognome TEXT NOT NULL,
                ruolo TEXT NOT NULL CHECK (ruolo IN ('super_admin', 'admin', 'operatore', 'visualizzatore')),
                attivo INTEGER DEFAULT 1,
                ultimo_accesso TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
        `);
        
        console.log('✅ Tabella users creata');
        
        // Inserisci Super Admin
        const passwordHash = await bcrypt.hash('Admin123!', 10);
        const adminId = randomUUID();
        
        const stmt = db.prepare(`
            INSERT OR IGNORE INTO users (id, email, password_hash, nome, cognome, ruolo, attivo)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);
        
        stmt.run(adminId, 'admin@gestionale.it', passwordHash, 'Super', 'Admin', 'super_admin', 1);
        
        console.log('✅ Utente Super Admin creato');
        console.log('   Email: admin@gestionale.it');
        console.log('   Password: Admin123!');
        
        // Tabelle clienti
        db.exec(`
            CREATE TABLE IF NOT EXISTS clienti_privati (
                id TEXT PRIMARY KEY,
                nome TEXT NOT NULL,
                cognome TEXT NOT NULL,
                codice_fiscale TEXT UNIQUE NOT NULL,
                data_nascita TEXT NOT NULL,
                email_principale TEXT NOT NULL,
                telefono_mobile TEXT NOT NULL,
                via_residenza TEXT NOT NULL,
                citta_residenza TEXT NOT NULL,
                consenso_privacy INTEGER DEFAULT 0,
                consenso_marketing INTEGER DEFAULT 0,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            
            CREATE TABLE IF NOT EXISTS clienti_aziende (
                id TEXT PRIMARY KEY,
                ragione_sociale TEXT NOT NULL,
                partita_iva TEXT UNIQUE NOT NULL,
                codice_ateco TEXT NOT NULL,
                email_referente TEXT NOT NULL,
                telefono_referente TEXT NOT NULL,
                citta_sede_legale TEXT NOT NULL,
                consenso_privacy INTEGER DEFAULT 0,
                consenso_marketing INTEGER DEFAULT 0,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
        `);
        
        console.log('✅ Tabelle clienti create');
        
        // Tabelle contratti
        db.exec(`
            CREATE TABLE IF NOT EXISTS contratti_luce (
                id TEXT PRIMARY KEY,
                cliente_privato_id TEXT,
                cliente_azienda_id TEXT,
                tipo_cliente TEXT NOT NULL,
                numero_contratto TEXT UNIQUE NOT NULL,
                pod TEXT NOT NULL,
                fornitore TEXT NOT NULL,
                data_attivazione TEXT NOT NULL,
                data_scadenza TEXT NOT NULL,
                prezzo_energia REAL NOT NULL,
                stato TEXT DEFAULT 'attivo',
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (cliente_privato_id) REFERENCES clienti_privati(id) ON DELETE CASCADE,
                FOREIGN KEY (cliente_azienda_id) REFERENCES clienti_aziende(id) ON DELETE CASCADE
            );
            
            CREATE TABLE IF NOT EXISTS contratti_gas (
                id TEXT PRIMARY KEY,
                cliente_privato_id TEXT,
                cliente_azienda_id TEXT,
                tipo_cliente TEXT NOT NULL,
                numero_contratto TEXT UNIQUE NOT NULL,
                pdr TEXT NOT NULL,
                fornitore TEXT NOT NULL,
                data_attivazione TEXT NOT NULL,
                data_scadenza TEXT NOT NULL,
                prezzo_gas REAL NOT NULL,
                stato TEXT DEFAULT 'attivo',
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (cliente_privato_id) REFERENCES clienti_privati(id) ON DELETE CASCADE,
                FOREIGN KEY (cliente_azienda_id) REFERENCES clienti_aziende(id) ON DELETE CASCADE
            );
        `);
        
        console.log('✅ Tabelle contratti create');
        
        // Tabella offerte
        db.exec(`
            CREATE TABLE IF NOT EXISTS offerte (
                id TEXT PRIMARY KEY,
                nome_offerta TEXT NOT NULL,
                fornitore TEXT NOT NULL,
                tipo_energia TEXT NOT NULL,
                data_inizio_validita TEXT NOT NULL,
                data_fine_validita TEXT NOT NULL,
                prezzo_luce REAL,
                prezzo_gas REAL,
                costo_fisso_mensile_luce REAL,
                costo_fisso_mensile_gas REAL,
                durata_vincolo_mesi INTEGER,
                target_clienti TEXT NOT NULL,
                consumo_minimo_kwh REAL,
                consumo_massimo_kwh REAL,
                codici_ateco_ammessi TEXT,
                condizioni_particolari TEXT,
                pdf_filename TEXT,
                pdf_path TEXT,
                dati_estratti_ai TEXT,
                stato TEXT DEFAULT 'attiva',
                analizzato_da_ai INTEGER DEFAULT 0,
                creato_da TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (creato_da) REFERENCES users(id)
            );
        `);
        
        console.log('✅ Tabella offerte creata');
        
        // Tabella AI matches
        db.exec(`
            CREATE TABLE IF NOT EXISTS ai_matches (
                id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
                offerta_id TEXT NOT NULL,
                cliente_privato_id TEXT,
                cliente_azienda_id TEXT,
                tipo_cliente TEXT NOT NULL,
                contratto_luce_id TEXT,
                contratto_gas_id TEXT,
                score_matching REAL NOT NULL,
                categoria_lead TEXT NOT NULL,
                risparmio_stimato_annuo REAL,
                percentuale_risparmio REAL,
                giorni_a_scadenza INTEGER,
                stato_contatto TEXT DEFAULT 'non_contattato',
                note_venditore TEXT,
                data_prossimo_followup TEXT,
                dettagli_matching TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (offerta_id) REFERENCES offerte(id) ON DELETE CASCADE,
                FOREIGN KEY (cliente_privato_id) REFERENCES clienti_privati(id) ON DELETE CASCADE,
                FOREIGN KEY (cliente_azienda_id) REFERENCES clienti_aziende(id) ON DELETE CASCADE
            );
        `);
        
        console.log('✅ Tabella ai_matches creata');
        
        // Tabella email campaigns
        db.exec(`
            CREATE TABLE IF NOT EXISTS email_campaigns (
                id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
                nome_campagna TEXT NOT NULL,
                tipologia TEXT NOT NULL,
                target_clienti TEXT NOT NULL,
                offerta_id TEXT,
                stato TEXT DEFAULT 'bozza',
                data_schedulata TEXT,
                data_invio_effettivo TEXT,
                totale_destinatari INTEGER DEFAULT 0,
                invii_riusciti INTEGER DEFAULT 0,
                invii_falliti INTEGER DEFAULT 0,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (offerta_id) REFERENCES offerte(id) ON DELETE SET NULL
            );
        `);
        
        console.log('✅ Tabella email_campaigns creata');
        
        // Tabella email templates
        db.exec(`
            CREATE TABLE IF NOT EXISTS email_templates (
                id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
                nome_template TEXT NOT NULL,
                tipologia TEXT NOT NULL,
                oggetto TEXT NOT NULL,
                corpo_html TEXT NOT NULL,
                attivo INTEGER DEFAULT 1,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
        `);
        
        console.log('✅ Tabella email_templates creata');
        
        // Tabella email logs
        db.exec(`
            CREATE TABLE IF NOT EXISTS email_logs (
                id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
                campagna_id TEXT,
                destinatario_email TEXT NOT NULL,
                cliente_privato_id TEXT,
                cliente_azienda_id TEXT,
                oggetto TEXT NOT NULL,
                stato_invio TEXT DEFAULT 'in_attesa',
                aperta INTEGER DEFAULT 0,
                click_link INTEGER DEFAULT 0,
                data_apertura TEXT,
                inviato_at TEXT,
                errore TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (campagna_id) REFERENCES email_campaigns(id) ON DELETE CASCADE,
                FOREIGN KEY (cliente_privato_id) REFERENCES clienti_privati(id) ON DELETE CASCADE,
                FOREIGN KEY (cliente_azienda_id) REFERENCES clienti_aziende(id) ON DELETE CASCADE
            );
        `);
        
        console.log('✅ Tabella email_logs creata');
        
        console.log('\n✨ Migrazione SQLite completata con successo!');
        console.log('\n🎯 Database pronto all\'uso:');
        console.log(`   Percorso: ${dbPath}`);
        console.log('   Tipo: SQLite (nessun server richiesto)');
        console.log('\n✅ Avvia il server: npm run dev');
        console.log('   Frontend: http://localhost:5177');
        console.log('   Login: admin@gestionale.it / Admin123!\n');
        
    } catch (error) {
        console.error('❌ Errore durante la migrazione:', error);
        throw error;
    } finally {
        db.close();
    }
}

runMigration().catch(console.error);

