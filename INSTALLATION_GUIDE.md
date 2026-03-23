# 🚀 Installation Guide - Hartanto Situmorang Portfolio

## 📋 Prerequisites

Pastikan sudah terinstall di komputer Anda:

- **Node.js** v18+ atau v20+ (Disarankan: v20 LTS)
- **npm** v9+ atau v10+
- **Git** (opsional, untuk clone)

### Cek Versi
```bash
node --version    # Harus v18+
npm --version     # Harus v9+
```

---

## 📦 Installation Steps

### 1. Extract Project

Extract file `hartanto-portfolio.zip` ke folder pilihan Anda:

```bash
# Windows (PowerShell)
Expand-Archive -Path hartanto-portfolio.zip -DestinationPath C:\Projects\

# Linux/Mac
unzip hartanto-portfolio.zip -d ./Projects/
```

### 2. Navigate to Project Folder

```bash
cd hartanto-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

Ini akan menginstall semua dependencies yang diperlukan:
- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- Tailwind CSS 3.4.19
- Framer Motion 12.38.0
- Dan 40+ shadcn/ui components

### 4. Start Development Server

```bash
npm start
```

Atau:
```bash
npm run dev
```

### 5. Open in Browser

Buka browser dan akses:
```
http://localhost:5173
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Jalankan development server (port 5173) |
| `npm run dev` | Sama dengan `npm start` |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview build production |
| `npm run lint` | Jalankan ESLint |

---

## 📁 Project Structure

```
hartanto-portfolio/
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

## 🎨 Features Overview

### 1️⃣ Mode Selection Page
- **Plasma Background** - Animasi fluid canvas berwarna ungu-biru
- 3 Tombol pilihan dengan hover animations
- Loading animation saat startup

### 2️⃣ Recruiter Mode (`/recruiter`)
- **Iridescence Background** - Warna berubah mengikuti mouse
- Key metrics dashboard
- 4 Project cards dengan detail profesional
- Technical skills showcase
- Education & certifications

### 3️⃣ Developer Mode (`/developer`)
- **Letter Glitch Background** - Matrix rain effect
- **Splash Cursor** - Efek splash berwarna saat mouse bergerak
- Code snippets dengan syntax highlighting
- Tech stack showcase
- Git stats

### 4️⃣ HR Mode (`/hr`)
- **Single page, no scroll** design
- Soft skills showcase (6 skills)
- **Interactive Timeline** - Klik untuk lihat detail di modal
- Education & leadership sections
- Contact section

---

## 🔧 Troubleshooting

### Error: "Cannot find module"
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 5173 is already in use"
```bash
# Gunakan port berbeda
npm start -- --port 3000
```

### Error: "Command not found: npm"
- Pastikan Node.js sudah terinstall
- Restart terminal/command prompt

### Build Error
```bash
# Clear cache dan rebuild
rm -rf node_modules dist
npm install
npm run build
```

---

## 📱 Responsive Design

Website sudah responsive untuk:
- Desktop (1920px, 1440px, 1280px)
- Tablet (768px)
- Mobile (375px, 390px)

---

## 🌐 Deployment ke Hostinger

### Build untuk Production
```bash
npm run build
```

File production ada di folder `dist/`:
- `index.html`
- `assets/` (JS & CSS bundles)

### Upload ke Hostinger
1. Login ke hPanel
2. Buka File Manager → `public_html/`
3. Upload isi folder `dist/`
4. Selesai!

---

## 📞 Support

Jika ada masalah:
1. Cek Node.js version: `node --version`
2. Cek npm version: `npm --version`
3. Pastikan port 5173 tidak digunakan aplikasi lain

---

## 📦 Dependencies (Latest Versions)

### Core
- React: ^19.2.0
- React DOM: ^19.2.0
- TypeScript: ~5.9.3
- Vite: ^7.2.4

### Styling
- Tailwind CSS: ^3.4.19
- tailwindcss-animate: ^1.0.7
- class-variance-authority: ^0.7.1

### Animation
- framer-motion: ^12.38.0

### UI Components
- @radix-ui/*: ^1.x (40+ components)
- lucide-react: ^0.562.0 (icons)
- shadcn/ui components

### Forms
- react-hook-form: ^7.70.0
- zod: ^4.3.5
- @hookform/resolvers: ^5.2.2

---

**Created:** 19 Maret 2026  
**Version:** 1.0.0  
**Author:** Hartanto Situmorang
