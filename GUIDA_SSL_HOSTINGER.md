# Guida Attivazione SSL su Hostinger per gmgestionale.cloud

## 📋 Prerequisiti
- Dominio `gmgestionale.cloud` configurato e attivo
- Applicazione deployata su Hostinger con Docker Manager
- Accesso al pannello di controllo Hostinger

## 🔐 Attivazione SSL Automatica

### Passo 1: Accesso al Pannello SSL
1. Accedi al **pannello di controllo Hostinger**
2. Vai su **Domini** → **gmgestionale.cloud**
3. Clicca su **SSL/TLS**

### Passo 2: Attivazione SSL Gratuito
1. Seleziona **SSL Gratuito** (Let's Encrypt)
2. Clicca su **Attiva SSL**
3. Attendi la generazione automatica del certificato (2-10 minuti)

### Passo 3: Verifica Configurazione
1. Verifica che lo stato SSL sia **Attivo**
2. Testa l'accesso a `https://gmgestionale.cloud`
3. Controlla che il certificato sia valido nel browser

## 🔧 Configurazione Nginx per SSL

### Aggiornamento nginx.conf (se necessario)
Se vuoi gestire SSL direttamente tramite Nginx nel container, decommentare e configurare la sezione HTTPS nel file `nginx.conf`:

```nginx
server {
    listen 443 ssl http2;
    server_name gmgestionale.cloud;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:MozTLS:10m;
    ssl_session_tickets off;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000" always;

    # Stessa configurazione del server HTTP
    location / {
        proxy_pass http://app:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Copia tutte le altre location dal server HTTP
}
```

## 🚀 Configurazione Consigliata per Hostinger

### Opzione 1: SSL Gestito da Hostinger (Consigliato)
- **Vantaggi**: Automatico, rinnovato automaticamente, zero configurazione
- **Configurazione**: Usa solo la porta 80 nel container, Hostinger gestisce HTTPS
- **File da usare**: `docker-compose.prod.yml` attuale (già configurato)

### Opzione 2: SSL Gestito da Nginx nel Container
- **Vantaggi**: Controllo completo, configurazione personalizzata
- **Svantaggi**: Gestione manuale dei certificati
- **Configurazione**: Richiede certificati SSL nel volume `/ssl`

## 📝 Checklist Post-Attivazione SSL

### ✅ Verifiche Obbligatorie
- [ ] `https://gmgestionale.cloud` carica correttamente
- [ ] Certificato SSL valido (icona lucchetto verde nel browser)
- [ ] Redirect automatico da HTTP a HTTPS
- [ ] API funzionanti su HTTPS (`https://gmgestionale.cloud/api/auth/status`)
- [ ] Login e autenticazione funzionanti
- [ ] Upload file funzionanti

### ✅ Test di Sicurezza
- [ ] Test SSL su [SSL Labs](https://www.ssllabs.com/ssltest/)
- [ ] Verifica headers di sicurezza
- [ ] Test HSTS (Strict Transport Security)

## 🔧 Risoluzione Problemi Comuni

### Problema: "Certificato non valido"
**Soluzione**: 
1. Attendi 10-15 minuti dopo l'attivazione
2. Svuota cache del browser
3. Verifica che il dominio punti correttamente ai DNS di Hostinger

### Problema: "Mixed Content" (contenuti misti)
**Soluzione**:
1. Verifica che tutte le risorse (CSS, JS, immagini) usino HTTPS
2. Controlla le variabili d'ambiente `FRONTEND_URL` e `BACKEND_URL`
3. Assicurati che siano impostate su `https://gmgestionale.cloud`

### Problema: "Redirect Loop"
**Soluzione**:
1. Verifica la configurazione `TRUST_PROXY=true` nel container
2. Controlla gli header `X-Forwarded-Proto` in nginx.conf

## 📞 Supporto
- **Documentazione Hostinger**: [SSL/TLS Guide](https://support.hostinger.com/en/articles/1583467-how-to-activate-ssl-certificate)
- **Test SSL**: [SSL Labs Test](https://www.ssllabs.com/ssltest/)
- **Verifica Configurazione**: `curl -I https://gmgestionale.cloud`

## 🎯 Risultato Finale
Dopo l'attivazione SSL, la tua applicazione sarà accessibile in modo sicuro su:
- **URL Principale**: `https://gmgestionale.cloud`
- **API Endpoint**: `https://gmgestionale.cloud/api/*`
- **Health Check**: `https://gmgestionale.cloud/health`

Il certificato SSL sarà rinnovato automaticamente da Hostinger ogni 90 giorni.