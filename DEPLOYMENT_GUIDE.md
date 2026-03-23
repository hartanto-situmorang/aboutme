# Deployment Guide - Hartanto Situmorang Portfolio

## 🚀 Deploy ke Hostinger Shared Hosting

### File yang Sudah Siap Deploy

Folder `dist/` berisi:
- `index.html` - Entry point
- `assets/` - CSS dan JS bundles

### Langkah Deploy ke Hostinger

#### 1. Upload via File Manager

1. Login ke **Hostinger Control Panel** (hPanel)
2. Buka **File Manager**
3. Navigasi ke folder `public_html/` (atau subdomain folder)
4. **Hapus semua file lama** (jika ada)
5. Upload file-file dari folder `dist/`:
   - Upload `index.html`
   - Upload folder `assets/` beserta isinya

#### 2. Upload via FTP (Alternatif)

Gunakan FTP client seperti FileZilla:

```
Host: ftp.yourdomain.com
Username: your_ftp_username
Password: your_ftp_password
Port: 21
```

Upload ke folder `public_html/`:
- `index.html`
- Folder `assets/`

#### 3. Upload via Git (Jika Hostinger mendukung)

```bash
# Di server Hostinger (via SSH)
cd ~/public_html
rm -rf *
cp -r /path/to/dist/* .
```

### Struktur File di Server

```
public_html/
├── index.html          # Entry point
└── assets/
    ├── index-XXXX.js   # JavaScript bundle
    └── index-XXXX.css  # CSS bundle
```

### Konfigurasi .htaccess (Jika diperlukan)

Buat file `.htaccess` di `public_html/` untuk SPA routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Verifikasi Deployment

1. Buka domain Anda di browser
2. Pastikan halaman loading muncul
3. Test ketiga mode:
   - **Recruiter Mode** - Background iridescence, project profesional
   - **Developer Mode** - Matrix effect + splash cursor
   - **HR Mode** - Timeline dengan modal detail

### Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Blank page | Cek console browser, pastikan assets loaded |
| 404 errors | Pastikan .htaccess ada untuk SPA routing |
| CSS tidak load | Cek path assets di index.html |
| Animasi lag | Normal, background canvas intensive |

### Fitur Website

#### 🎨 Mode Selection
- **Plasma Background** - Animasi fluid saat pemilihan mode
- 3 Pilihan: Recruiter, Developer, HR

#### 💼 Recruiter Mode
- **Iridescence Background** - Efek warna berubah mengikuti mouse
- Key metrics dashboard
- Project cards dengan detail profesional
- Skills & certifications

#### 💻 Developer Mode
- **Letter Glitch Background** - Efek matrix code
- **Splash Cursor** - Efek splash saat mouse bergerak
- Code snippets dengan syntax highlighting
- Tech stack showcase
- Git stats

#### 👥 HR Mode
- Soft skills showcase
- **Interactive Timeline** - Klik untuk lihat detail di modal
- Education & certifications
- Leadership & activities
- Contact section

### Project yang Ditampilkan

1. **ERP PT Putera Wibowo Borneo** - Multi-site mining ERP
2. **Realtime Monitoring Unit** - IoT equipment tracking
3. **3D Design Container** - Three.js visualization
4. **SPA Kiosk Table** - Customer self-service portal

### Tech Stack

- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS
- Framer Motion (Animations)
- shadcn/ui (Components)
- Custom Canvas Backgrounds

### Kontak

- Email: situmorang140201hart@gmail.com
- Phone: 083157682848
- Location: Riau, Indonesia

---

**Build Date:** 19 Maret 2026  
**Version:** 1.0.0
