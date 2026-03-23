# 🚀 Hartanto Situmorang - Interactive Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.38.0-FF4B8B?logo=framer)](https://www.framer.com/motion/)

> **Portfolio interaktif multi-mode** dengan animasi canvas yang menakjubkan, dirancang untuk menampilkan skills dan projects dengan pengalaman yang berbeda untuk setiap audience.

![Portfolio Preview](./app/public/preview.png)

---

## ✨ Features

### 🎨 **Three Unique Portfolio Modes**

| Mode | Target | Background Effect | Features |
|------|--------|-------------------|----------|
| **Recruiter Mode** | HR/Recruiters | 🌈 Iridescence (Mouse-tracking) | Key metrics, Project cards, Skills showcase |
| **Developer Mode** | Fellow Developers | 💻 Letter Glitch (Matrix rain) | Code snippets, Git stats, Tech stack |
| **HR Mode** | HR Professionals | 📋 Clean Single Page | Interactive timeline, Soft skills, Contact |

### 🎯 **Interactive Elements**
- **Plasma Background** - Animasi fluid pada halaman pemilihan mode
- **Splash Cursor** - Efek splash berwarna saat mouse bergerak (Developer Mode)
- **Interactive Timeline** - Klik untuk melihat detail di modal (HR Mode)
- **Responsive Design** - Desktop, Tablet, Mobile

---

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - UI Library
- **TypeScript 5.9.3** - Type Safety
- **Vite 7.2.4** - Build Tool & Dev Server

### Styling & UI
- **Tailwind CSS 3.4.19** - Utility-first CSS
- **shadcn/ui** - 40+ UI Components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icons

### Animation
- **Framer Motion 12.38.0** - React animations
- **Custom Canvas** - Plasma, Iridescence, Letter Glitch effects

### Forms & Validation
- **React Hook Form 7.70.0** - Form management
- **Zod 4.3.5** - Schema validation

---

## 📦 Installation

### Prerequisites
- **Node.js** v18+ atau v20+ (Disarankan: v20 LTS)
- **npm** v9+ atau v10+

```bash
# Cek versi
node --version    # Harus v18+
npm --version     # Harus v9+
```

### Step-by-Step Installation

#### 1. Clone Repository
```bash
git clone https://github.com/hartanto-situmorang/portfolio.git
cd portfolio/app
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start Development Server
```bash
npm start
# atau
npm run dev
```

#### 4. Open in Browser
```
http://localhost:5173
```

---

## 📁 Project Structure

```
app/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── backgrounds/        # Custom canvas backgrounds
│   │   │   ├── PlasmaBackground.tsx      # Mode selection bg
│   │   │   ├── IridescenceBackground.tsx # Recruiter bg
│   │   │   ├── LetterGlitchBackground.tsx # Developer bg
│   │   │   ├── SplashCursor.tsx          # Developer cursor effect
│   │   │   └── index.ts
│   │   ├── modes/              # Three portfolio modes
│   │   │   ├── RecruiterMode.tsx
│   │   │   ├── DeveloperMode.tsx
│   │   │   ├── HRMode.tsx
│   │   │   └── index.ts
│   │   ├── ui/                 # shadcn/ui components (40+)
│   │   ├── ModeSelection.tsx   # Mode selection page
│   │   └── ui-custom/          # Custom UI components
│   ├── data/
│   │   └── portfolio.ts        # CV data & projects
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── hooks/                  # Custom React hooks
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Jalankan development server (port 5173) |
| `npm run dev` | Sama dengan `npm start` |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview build production |
| `npm run lint` | Jalankan ESLint |

---

## 🎨 Customization Guide

### 1. **Mengubah Data Personal**

Edit file `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'NAMA ANDA',
  location: 'Lokasi, Indonesia',
  phone: '08xxxxxxxxxx',
  email: 'email@anda.com',
  website: 'www.website.com',
  summary: 'Deskripsi singkat tentang diri Anda...'
};
```

### 2. **Mengubah Skills**

```typescript
export const skills: Skill[] = [
  {
    category: 'Kategori Skill',
    items: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  // Tambahkan kategori lainnya
];
```

### 3. **Mengubah Projects**

```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Nama Project',
    subtitle: 'Subjudul Project',
    description: 'Deskripsi lengkap...',
    technologies: ['Tech 1', 'Tech 2'],
    features: ['Feature 1', 'Feature 2'],
    metrics: 'Metrik penting',
    date: '2023 - 2024',
    image: '/images/project.jpg'
  }
];
```

### 4. **Mengubah Timeline Experience**

```typescript
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-1',
    year: '2024',
    title: 'Judul Posisi',
    company: 'Nama Perusahaan',
    description: 'Deskripsi pekerjaan...',
    projects: [],
    skills: ['Skill 1', 'Skill 2']
  }
];
```

### 5. **Mengubah Warna/Tema**

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ...
    }
  }
}
```

### 6. **Mengubah Background Effects**

Background effects menggunakan custom canvas:
- `src/components/backgrounds/PlasmaBackground.tsx`
- `src/components/backgrounds/IridescenceBackground.tsx`
- `src/components/backgrounds/LetterGlitchBackground.tsx`

---

## 🚀 Deployment ke VPS (Ubuntu/Nginx)

### Prerequisites VPS
- Ubuntu 20.04+ / 22.04+
- Nginx
- Node.js v18+ (untuk build)
- Domain name (opsional)

### Step 1: Setup VPS

```bash
# SSH ke VPS
ssh root@your-vps-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 (opsional, untuk process management)
sudo npm install -g pm2
```

### Step 2: Clone & Build Project di VPS

```bash
# Buat directory untuk project
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio

# Clone repository
cd /var/www/portfolio
git clone https://github.com/hartanto-situmorang/portfolio.git .

# Masuk ke folder app
cd app

# Install dependencies
npm install

# Build untuk production
npm run build
```

### Step 3: Configure Nginx

```bash
# Buat konfigurasi Nginx
sudo nano /etc/nginx/sites-available/portfolio
```

Isi dengan konfigurasi berikut:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/portfolio/app/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing - redirect all to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Aktifkan konfigurasi:

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

### Step 4: Setup SSL (HTTPS) dengan Certbot

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Generate SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal sudah otomatis ter-setup
```

### Step 5: Setup Firewall

```bash
# Allow SSH, HTTP, HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### Step 6: Auto-Deploy dengan Git Hook (Opsional)

Buat post-receive hook untuk auto-deploy:

```bash
# Di local machine, tambahkan remote VPS
git remote add vps ssh://root@your-vps-ip/var/repo/portfolio.git

# Di VPS, buat bare repository
sudo mkdir -p /var/repo
cd /var/repo
sudo git init --bare portfolio.git
sudo chown -R $USER:$USER /var/repo

# Buat post-receive hook
cat > /var/repo/portfolio.git/hooks/post-receive << 'EOF'
#!/bin/bash
TARGET="/var/www/portfolio"
GIT_DIR="/var/repo/portfolio.git"
BRANCH="main"

while read oldrev newrev ref
do
    if [[ $ref = refs/heads/$BRANCH ]]; then
        echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
        git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f $BRANCH
        cd $TARGET/app && npm install && npm run build
        echo "Deployment complete!"
    fi
done
EOF

chmod +x /var/repo/portfolio.git/hooks/post-receive
```

---

## 📤 Push ke GitHub

### Initial Push (Pertama Kali)

```bash
# Masuk ke folder project
cd d:\DATA YOUTUBE\coverin\indoensia pop edm\Kimi_Agent_React Mode Portfolio

# Inisialisasi git (jika belum)
git init

# Tambahkan remote repository
git remote add origin https://github.com/hartanto-situmorang/portfolio.git

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit: Portfolio website with React + TypeScript"

# Push ke main branch
git branch -M main
git push -u origin main
```

### Push Update (Setelah Modifikasi)

```bash
# Cek status perubahan
git status

# Tambahkan file yang diubah
git add .
# atau tambahkan file spesifik
git add app/src/data/portfolio.ts

# Commit perubahan
git commit -m "Update: deskripsi perubahan yang dilakukan"

# Push ke GitHub
git push origin main
```

### Push Update & Deploy ke VPS (Sekaligus)

```bash
# Push ke GitHub
git push origin main

# Push ke VPS (jika setup git hook)
git push vps main

# Atau deploy manual ke VPS
ssh root@your-vps-ip "cd /var/www/portfolio && git pull && cd app && npm install && npm run build"
```

---

## 🔄 Workflow Development Lengkap

### Daily Development Workflow

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies (jika ada perubahan)
npm install

# 3. Start development server
npm start

# 4. Make changes... (edit files)

# 5. Test build locally
npm run build
npm run preview

# 6. Commit dan push
git add .
git commit -m "feat: tambah fitur baru"
git push origin main

# 7. Deploy ke VPS
# Opsi A: Git hook (auto-deploy)
git push vps main

# Opsi B: Manual deploy
ssh root@your-vps-ip "cd /var/www/portfolio && git pull && cd app && npm install && npm run build"
```

---

## 🛠️ Troubleshooting

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 5173 is already in use"
```bash
npm start -- --port 3000
```

### Build Error
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Nginx Error
```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx error log
sudo tail -f /var/log/nginx/error.log

# Test config
sudo nginx -t
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Mobile | < 640px | Single column layout |
| Tablet | 640px - 1024px | Two column layout |
| Desktop | > 1024px | Full layout |

---

## 📞 Contact

- **Email**: situmorang140201hart@gmail.com
- **Phone**: 083157682848
- **Location**: Riau, Indonesia

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Hartanto Situmorang</strong>
</p>
