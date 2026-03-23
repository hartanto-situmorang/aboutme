# 🚀 Hartanto Situmorang - Interactive Portfolio

Website portofolio interaktif dengan 3 mode berbeda untuk Recruiter, Developer, dan HR.

## ✨ Features

### 🎯 Mode Selection (Landing Page)
- **Plasma Background** - Animasi fluid canvas berwarna ungu-biru
- 3 Tombol pilihan mode dengan smooth hover animations
- Loading animation saat startup

### 💼 Recruiter Mode
- **Iridescence Background** - Warna berubah mengikuti pergerakan mouse
- Key metrics dashboard (100+ users, 50% improvement, 5 locations)
- 4 Project cards dengan detail profesional
- Technical skills showcase dalam kategori
- Education & BNSP Certification

### 💻 Developer Mode
- **Letter Glitch Background** - Matrix rain effect seperti hacker
- **Splash Cursor** - Efek splash berwarna saat mouse bergerak dan klik
- Code snippets dengan syntax highlighting (PHP, JavaScript)
- Tech stack showcase (Backend, Frontend, Database, DevOps)
- Git activity stats

### 👥 HR Mode
- **Single page, no scroll** design dengan soft colors
- 6 Soft skills dengan deskripsi
- **Interactive Timeline** - Klik untuk lihat detail di modal
- Education & Leadership sections
- Contact CTA section

## 📋 Projects Displayed

1. **ERP PT Putera Wibowo Borneo** - Multi-site mining ERP system
2. **Realtime Monitoring Unit** - IoT-based equipment tracking
3. **3D Design Container** - Three.js interactive visualization
4. **SPA Kiosk Table** - Customer self-service PWA

## 🛠️ Tech Stack

- **React 19.2.0** - UI Library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool
- **Tailwind CSS 3.4.19** - Styling
- **Framer Motion 12.38.0** - Animations
- **shadcn/ui** - UI Components (40+ components)
- **Lucide React** - Icons

## 📦 Installation

### Prerequisites
- Node.js v18+ (Disarankan: v20 LTS)
- npm v9+

### Steps

```bash
# 1. Extract project
# Extract file portfolio.tar.gz ke folder pilihan

# 2. Navigate ke project folder
cd portfolio-export

# 3. Install dependencies
npm install

# 4. Start development server
npm start

# 5. Buka browser
# http://localhost:5173
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Jalankan dev server (port 5173) |
| `npm run dev` | Sama dengan `npm start` |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview build production |

## 🌐 Deployment

### Build untuk Production
```bash
npm run build
```

File production ada di folder `dist/`:
- `index.html`
- `assets/` (JS & CSS bundles)

### Deploy ke Hostinger
1. Login ke hPanel Hostinger
2. Buka File Manager → `public_html/`
3. Upload isi folder `dist/`
4. Selesai!

## 📁 Project Structure

```
src/
├── components/
│   ├── backgrounds/        # Custom canvas backgrounds
│   │   ├── PlasmaBackground.tsx
│   │   ├── IridescenceBackground.tsx
│   │   ├── LetterGlitchBackground.tsx
│   │   └── SplashCursor.tsx
│   ├── modes/              # Three portfolio modes
│   │   ├── RecruiterMode.tsx
│   │   ├── DeveloperMode.tsx
│   │   └── HRMode.tsx
│   ├── ui/                 # 40+ shadcn/ui components
│   └── ModeSelection.tsx   # Mode selection page
├── data/
│   └── portfolio.ts        # CV data & projects
├── types/
│   └── index.ts            # TypeScript types
├── App.tsx                 # Main app
└── main.tsx                # Entry point
```

## 🎨 Animations

| Efek | Mode | Teknologi |
|------|------|-----------|
| Plasma | Selection | Canvas API |
| Iridescence | Recruiter | Canvas API + Mouse tracking |
| Letter Glitch | Developer | Canvas API (Matrix effect) |
| Splash Cursor | Developer | Canvas API + Mouse events |
| Framer Motion | All | React animation library |

## 📱 Responsive

- Desktop (1920px, 1440px, 1280px)
- Tablet (768px)
- Mobile (375px, 390px)

## 📞 Contact

- **Email:** situmorang140201hart@gmail.com
- **Phone:** 083157682848
- **Location:** Riau, Indonesia

---

**Created:** 19 Maret 2026  
**Version:** 1.0.0  
**Author:** Hartanto Situmorang
