# 📊 Guida Importazione Completa Clienti + Contratti (v2.0)

## ✅ IMPLEMENTAZIONE COMPLETATA AL 100%!

Il sistema di importazione è ora **completamente aggiornato** con **TUTTI i campi richiesti** dall'immagine fornita!

---

## 🆕 NUOVI CAMPI AGGIUNTI

### **Per CLIENTI (Privati & Aziende):**
- ✅ **codice_cliente**: Codice identificativo del cliente (es: CLI001)
- ✅ **news_letter**: Consenso newsletter (1/0), separato da consenso_marketing
- ✅ **utente_acquisizione**: Nome dell'agente/utente che ha acquisito il cliente

### **Per CONTRATTI (Luce & Gas):**
- ✅ **commodity**: Tipo di commodity (Luce/Gas)
- ✅ **procedure**: Tipo procedura (Switch, Voltura, etc.)
- ✅ **pdp**: Codice PDP identificativo
- ✅ **tipo_offerta**: Tipo offerta (Domestico, Business, etc.)
- ✅ **utente_acquisizione**: Nome dell'agente/utente che ha acquisito il contratto

---

## 📋 LISTA COMPLETA CAMPI CSV

### 📌 **HEADER CSV COMPLETO:**
```
tipo,nome,cognome,email_principale,telefono_mobile,codice_fiscale,codice_cliente,
data_nascita,luogo_nascita,provincia_nascita,email_secondaria,telefono_fisso,
via,numero_civico,citta,cap,provincia,nazione,consenso_marketing,news_letter,
utente_acquisizione,note,ragione_sociale,partita_iva,codice_ateco,pec,codice_sdi,
nome_referente,cognome_referente,email_referente,telefono_referente,tipo_contratto,
numero_contratto,pod_pdr,fornitore,commodity,procedure,pdp,data_stipula,
data_attivazione,data_scadenza,agente,nome_offerta,tipo_offerta,validita_offerta,
stato_contratto,prezzo,note_contratto
```

**TOTALE: 48 campi!**

---

## 🎯 **Corrispondenza con l'immagine fornita:**

| Colonna Immagine | Campo CSV | Tabella DB |
|------------------|-----------|------------|
| cod ID | *(auto-generato UUID)* | `id` |
| Commodity | `commodity` | `commodity` (contratti) |
| Procedure | `procedure` | `procedure` (contratti) |
| PDP | `pdp` | `pdp` (contratti) |
| Codice cliente | `codice_cliente` | `codice_cliente` (clienti) |
| Ragione Sociale | `ragione_sociale` | `ragione_sociale` (aziende) |
| Codice Fiscale | `codice_fiscale` | `codice_fiscale` |
| P.Iva | `partita_iva` | `partita_iva` (aziende) |
| Data stipula | `data_stipula` | `data_stipula` (contratti) |
| Data creazione | *(auto-generato)* | `created_at` |
| Data attivazione | `data_attivazione` | `data_attivazione` (contratti) |
| Utente acquisizione | `utente_acquisizione` | `utente_acquisizione` |
| agente | `agente` | `agente` (contratti) |
| Fornitore | `fornitore` | `fornitore` (contratti) |
| Offerta | `nome_offerta` | `nome_offerta` (contratti) |
| validita offerta | `validita_offerta` | `validita_offerta` (contratti) |
| tipo offerta | `tipo_offerta` | `tipo_offerta` (contratti) |
| Stato | `stato_contratto` | `stato` (contratti) |
| news letter | `news_letter` | `news_letter` (clienti) |
| codice ateco | `codice_ateco` | `codice_ateco` (aziende) |

---

## 💡 **ESEMPI PRATICI**

### Esempio 1: Cliente privato CON contratto luce COMPLETO
```csv
privato,Mario,Rossi,mario.rossi@email.it,3331234567,RSSMRA80A01H501U,CLI001,1980-01-01,Roma,RM,mario.r@email.it,0612345678,Via Roma,10,Roma,00100,RM,Italia,1,1,Giovanni Bianchi,Cliente VIP,,,,,,,,,luce,LUCE123456,IT001E12345678,Enel,Luce,Switch,PDP001,2024-01-15,2024-02-01,2026-02-01,Giovanni Bianchi,Offerta Luce Flex,Domestico,2026-01-31,attivo,0.25,Contratto vantaggioso
```

### Esempio 2: Azienda CON contratto gas COMPLETO
```csv
azienda,,,info@azienda.it,,,CLI003,,,,,,,Via Torino,15,Torino,10100,TO,Italia,1,1,Maria Neri,Nota azienda,Azienda SRL,12345678901,47.11.20,pec@azienda.it,ABCDEFG,Giovanni,Verdi,g.verdi@azienda.it,3331112222,gas,GAS789012,IT002G98765432,Eni,Gas,Voltura,PDP002,2024-03-10,2024-04-01,2027-04-01,Maria Neri,Offerta Gas Business,Business,2027-03-31,attivo,0.75,Contratto aziendale
```

### Esempio 3: Cliente SENZA contratto (dati minimi)
```csv
privato,Lucia,Bianchi,lucia.b@gmail.com,3339876543,,CLI002,,,,,,,Via Milano,25,Milano,20100,MI,Italia,0,0,,,,,,,,,,,,,,,,,,,,,,,,,
```

---

## 📊 **DATABASE SCHEMA AGGIORNATO**

### **clienti_privati & clienti_aziende:**
- `codice_cliente` TEXT *(NUOVO!)*
- `news_letter` INTEGER DEFAULT 0 *(NUOVO!)*
- `utente_acquisizione` TEXT *(NUOVO!)*

### **contratti_luce & contratti_gas:**
- `commodity` TEXT *(NUOVO!)*
- `procedure` TEXT *(NUOVO!)*
- `pdp` TEXT *(NUOVO!)*
- `tipo_offerta` TEXT *(NUOVO!)*
- `utente_acquisizione` TEXT *(NUOVO!)*

---

## 🚀 **COME USARLO**

1. **Vai su Clienti** nella sidebar
2. **Clicca "Importa"** (pulsante viola nella toolbar)
3. **Scarica Template CSV** (pulsante verde)
4. **Compila il CSV** con i tuoi dati (anche parziali!)
5. **Carica e importa!**

---

## ✨ **VANTAGGI**

- ✅ **48 campi disponibili** - Copertura totale!
- ✅ **Tolleranza errori** - Una riga errata non blocca l'importazione
- ✅ **Campi opzionali** - Compila solo quello che hai
- ✅ **Clienti + Contratti insieme** - Un solo file!
- ✅ **100% allineato con requisiti** - Tutti i campi dall'immagine inclusi
- ✅ **Tracciabilità completa** - Utente acquisizione, date, etc.

---

## 📞 **SUPPORTO**

Il sistema è **pronto e funzionante al 100%**!

Se una riga ha errori, verrà saltata e vedrai i dettagli nella sezione "Risultato Importazione".

**TUTTO IMPLEMENTATO! 🎊**


