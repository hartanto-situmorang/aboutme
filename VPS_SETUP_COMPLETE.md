# 🚀 Setup VPS Lengkap - nhart.cloud

## ✅ Langkah 1-3 Sudah Selesai (Installasi & Build)

```bash
# SSH ke VPS
ssh root@YOUR_VPS_IP

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx & Git
sudo apt install -y nginx git

# Clone & Build Project
cd /var/www/portfolio
git clone https://github.com/hartanto-situmorang/portfolio.git .
cd app
npm install
npm run build
```

---

## 📋 Langkah 4: Konfigurasi Nginx untuk nhart.cloud

### 4.1 Hapus Default Config (Opsional tapi Direkomendasikan)

```bash
# Hapus default site
sudo rm /etc/nginx/sites-enabled/default

# Backup default config
sudo mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup
```

### 4.2 Buat Konfigurasi Website

```bash
# Buka file konfigurasi
sudo nano /etc/nginx/sites-available/portfolio
```

**Isi dengan konfigurasi berikut:**

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name nhart.cloud www.nhart.cloud;
    
    root /var/www/portfolio/app/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # SPA routing - redirect all to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
        return 404;
    }
}
```

**Simpan file:** `CTRL + X`, lalu `Y`, lalu `ENTER`

### 4.3 Aktifkan Konfigurasi

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Test konfigurasi
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Enable Nginx on boot
sudo systemctl enable nginx
```

---

## 📋 Langkah 5: Setup DNS (Domain nhart.cloud)

### 5.1 Login ke Domain Provider

1. Buka website tempat Anda membeli domain `nhart.cloud`
2. Login ke control panel/domain management
3. Cari menu **DNS Management** atau **Nameservers**

### 5.2 Tambahkan A Records

| Type | Host/Name | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| A | @ (atau kosong) | YOUR_VPS_IP | 3600 |
| A | www | YOUR_VPS_IP | 3600 |

**Contoh:**
```
Type: A
Name: @
Value: 192.168.1.100  (ganti dengan IP VPS Anda)
TTL: 3600
```

```
Type: A
Name: www
Value: 192.168.1.100  (ganti dengan IP VPS Anda)
TTL: 3600
```

### 5.3 Tunggu Propagasi DNS

DNS propagation biasanya membutuhkan waktu:
- **Cepat:** 5-15 menit
- **Normal:** 1-2 jam
- **Maksimal:** 24-48 jam

**Cek DNS propagation:**
```bash
# Di local machine (Windows PowerShell)
nslookup nhart.cloud

# Atau
ping nhart.cloud
```

---

## 📋 Langkah 6: Setup SSL/HTTPS dengan Certbot

### 6.1 Install Certbot

```bash
# Install Certbot dan plugin Nginx
sudo apt install -y certbot python3-certbot-nginx
```

### 6.2 Generate SSL Certificate

```bash
# Generate certificate untuk domain
sudo certbot --nginx -d nhart.cloud -d www.nhart.cloud
```

**Ikuti instruksi di layar:**
1. Masukkan email Anda
2. Setuju dengan Terms of Service
3. Pilih apakah ingin share email dengan EFF (Y/N)
4. Certbot akan otomatis mengupdate konfigurasi Nginx

### 6.3 Verifikasi SSL Auto-Renewal

```bash
# Test auto-renewal
sudo certbot renew --dry-run
```

Jika sukses, SSL akan otomatis di-renew setiap 90 hari.

---

## 📋 Langkah 7: Setup Firewall

```bash
# Allow SSH
sudo ufw allow OpenSSH

# Allow HTTP dan HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

**Output yang diharapkan:**
```
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx Full (v6)            ALLOW       Anywhere (v6)
```

---

## 📋 Langkah 8: Verifikasi Website

### 8.1 Cek Status Nginx

```bash
sudo systemctl status nginx
```

### 8.2 Test Website

Buka browser dan akses:
- **HTTP:** `http://nhart.cloud`
- **HTTPS:** `https://nhart.cloud`

### 8.3 Troubleshooting

#### Jika website tidak bisa diakses:

```bash
# Cek error log Nginx
sudo tail -f /var/log/nginx/error.log

# Cek access log
sudo tail -f /var/log/nginx/access.log

# Test Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Cek apakah port 80 dan 443 terbuka
sudo netstat -tlnp | grep nginx
```

#### Jika SSL tidak berfungsi:

```bash
# Cek status certbot
sudo certbot certificates

# Reinstall certificate
sudo certbot --nginx -d nhart.cloud -d www.nhart.cloud --force-renew
```

#### Jika DNS belum propagate:

```bash
# Cek DNS record
dig nhart.cloud

# Atau
dig @8.8.8.8 nhart.cloud
```

---

## 📋 Langkah 9: Setup Auto-Deploy (Opsional tapi Direkomendasikan)

### 9.1 Buat Deploy Script

```bash
# Buat script deploy
sudo nano /usr/local/bin/deploy-portfolio
```

**Isi script:**

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Navigate to project
cd /var/www/portfolio

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
cd app
npm install

# Build project
echo "🔨 Building project..."
npm run build

# Reload Nginx
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Website: https://nhart.cloud"
```

**Buat executable:**

```bash
sudo chmod +x /usr/local/bin/deploy-portfolio
```

### 9.2 Deploy Manual

```bash
# Jalankan script deploy
sudo deploy-portfolio
```

### 9.3 Deploy dari Local Machine

```bash
# Di Windows PowerShell (local machine)
ssh root@YOUR_VPS_IP "cd /var/www/portfolio && git pull && cd app && npm install && npm run build && sudo systemctl reload nginx"
```

---

## 📋 Ringkasan Perintah Cepat

| Aksi | Perintah |
|------|----------|
| **SSH ke VPS** | `ssh root@YOUR_VPS_IP` |
| **Check Nginx status** | `sudo systemctl status nginx` |
| **Reload Nginx** | `sudo systemctl reload nginx` |
| **Check error log** | `sudo tail -f /var/log/nginx/error.log` |
| **Test Nginx config** | `sudo nginx -t` |
| **Deploy update** | `sudo deploy-portfolio` |
| **Check SSL status** | `sudo certbot certificates` |
| **Renew SSL** | `sudo certbot renew` |

---

## ✅ Checklist Final

- [ ] Nginx terinstall dan berjalan
- [ ] Website bisa diakses di `http://nhart.cloud`
- [ ] DNS A record sudah di-setup
- [ ] SSL/HTTPS aktif di `https://nhart.cloud`
- [ ] Firewall aktif (UFW)
- [ ] Auto-renewal SSL berfungsi
- [ ] Deploy script berfungsi (opsional)

---

**Website Anda sekarang live di:** 🌐 **https://nhart.cloud**
