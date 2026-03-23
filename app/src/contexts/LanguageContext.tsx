import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translations object - nested structure
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      career: 'Career',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      mode: {
        simple: 'Simple',
        splash: 'Splash',
      },
      lang: {
        id: 'IND',
        en: 'ENG',
      },
    },
    loading: 'Loading Portfolio',
    hero: {
      status: 'Open To Work',
      role: 'Full Stack Developer',
      tagline: "I just love to code and give people something that can help them daily and simplify their life.",
      cta: {
        primary: 'Explore My Work',
        secondary: 'Get In Touch',
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'Who I Am',
      summary: {
        title: 'Professional Summary',
        content: 'Full Stack Developer with strong passion in business systems and data architecture. Experienced in leading end-to-end enterprise system development, from requirement analysis and system design to deployment and maintenance. Skilled in designing scalable client-server architecture, building enterprise web and mobile applications, and managing structured databases. Strong analytical thinker with experience collaborating with stakeholders and cross-functional teams to deliver business-driven software solutions.',
      },
      education: {
        title: 'Education',
        degree: 'Bachelor of Applied Informatics Engineering',
        institution: 'Politeknik Caltex Riau',
        gpa: 'GPA',
      },
      certification: {
        title: 'Certification',
        name: 'BNSP Certified Programmer',
        organization: 'Badan Nasional Sertifikasi Profesi',
        valid: 'Valid',
      },
      highlight: {
        problemSolver: {
          title: 'Problem Solver',
          desc: 'Passionate about translating complex business requirements into elegant technical solutions.',
        },
        innovation: {
          title: 'Innovation Driven',
          desc: 'Always exploring new technologies and approaches to deliver cutting-edge solutions.',
        },
        bnsp: {
          title: 'BNSP Certified',
          desc: 'Certified Programmer with professional recognition from Badan Nasional Sertifikasi Profesi.',
        },
      },
    },
    career: {
      title: 'Career Journey',
      subtitle: 'My Professional Path',
      leadership: {
        title: 'Leadership & Activities',
        items: [
          'Member of Student Executive Board (BEM) 2022 - Social and community service program planning',
          'Learning X Program by LG Group - Collaborative project development',
          'ITSA Caltex Riau (Documentation Division) 2022 - Training documentation and reporting',
          'ISO 2022 Committee - New student training program coordination',
        ],
      },
      workExperience: 'Work Experience',
      timeline: [
        {
          year: '2022',
          title: 'Started Professional Journey',
          description: 'Joined as Full Stack Developer, beginning career in enterprise software development with focus on mining industry solutions.',
        },
        {
          year: '2023',
          title: 'ERP System Development',
          description: 'Led the development of comprehensive ERP system supporting multi-site mining operations. Managed end-to-end development from requirement gathering to deployment.',
        },
        {
          year: '2023',
          title: 'IoT & Monitoring Solutions',
          description: 'Expanded expertise to IoT and real-time monitoring systems, developing solutions for equipment tracking and operational visibility.',
        },
        {
          year: '2024',
          title: 'BNSP Certification & Innovation',
          description: 'Achieved BNSP Certified Programmer certification. Continued innovation with customer-facing solutions and kiosk applications.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Featured Work',
      viewDetails: 'View Details',
      close: 'Close',
      technologies: 'Technologies',
      features: 'Key Features',
      metrics: 'Metrics',
      period: 'Period',
      items: [
        {
          title: 'ERP PT Putera Wibowo Borneo',
          subtitle: 'Enterprise Resource Planning System',
          description: 'Comprehensive ERP system supporting multi-site mining operations with complex business workflows across 5 locations with 100+ users. Reduced processing time up to 50% from actual process.',
          features: [
            'Multi-site operations management (5 locations)',
            'Role-Based Access Control (RBAC) for multi-level users',
            'Stock transaction management with monitoring & forecasting',
            'Employee attendance system & payroll module',
            'Invoice and administrative management',
            'Employee KPI (Key Performance Indicator) tracking',
            'Real-time operational and financial reports',
            'Analytics dashboard with dynamic data visualization',
          ],
          metrics: '50% process time reduction | 100+ active users | 5 locations',
        },
        {
          title: 'Realtime Monitoring Unit',
          subtitle: 'IoT-Based Equipment Tracking System',
          description: 'Real-time monitoring system for tracking heavy equipment and operational units across multiple mining sites with live dashboard and alerting system.',
          features: [
            'Real-time GPS tracking of equipment',
            'Live dashboard with operational status',
            'Automated alerts for maintenance schedules',
            'Fuel consumption monitoring',
            'Performance analytics and reporting',
            'Mobile-responsive interface',
          ],
          metrics: 'Real-time updates | 50+ units monitored',
        },
        {
          title: '3D Design Container',
          subtitle: 'Interactive 3D Visualization',
          description: 'Interactive 3D container design and visualization tool for planning and optimizing storage layouts in mining and logistics operations.',
          features: [
            'Interactive 3D model manipulation',
            'Drag-and-drop component placement',
            'Real-time dimension calculations',
            'Export to CAD formats',
            'VR/AR compatibility',
            'Collaborative design sharing',
          ],
          metrics: '3D visualization | Interactive design',
        },
        {
          title: 'SPA Kiosk Table for Customer',
          subtitle: 'Self-Service Customer Portal',
          description: 'Single Page Application kiosk system deployed on tablet devices for customer self-service, product browsing, and order placement in retail environments.',
          features: [
            'Touch-optimized interface',
            'Offline capability with sync',
            'Product catalog with search',
            'Order placement and tracking',
            'Customer feedback system',
            'Multi-language support',
          ],
          metrics: 'Kiosk deployment | Customer self-service',
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical Expertise',
      architecture: 'Architecture & System Design',
      programming: 'Programming',
      frameworks: 'Frameworks',
      frontend: 'Frontend',
      backend: 'Backend & API',
      database: 'Database',
      tools: 'Tools & Collaboration',
      alwaysLearning: 'Always Learning',
      learningDesc: 'Continuously expanding my skillset to deliver better solutions',
      yearsExperience: 'Years Experience',
      technologies: 'Technologies',
      majorProjects: 'Major Projects',
      categories: {
        'Architecture & System Design': 'Architecture & System Design',
        'Programming': 'Programming',
        'Frameworks': 'Frameworks',
        'Frontend': 'Frontend',
        'Backend & API': 'Backend & API',
        'Database': 'Database',
        'Tools & Collaboration': 'Tools & Collaboration',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's Connect",
      heading: "Let's work together",
      description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      website: 'Website',
      followMe: 'Follow Me',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      sendMessage: 'Send a Message',
      subject: 'Subject',
      subjectPlaceholder: "What's this about?",
      messagePlaceholder: 'Tell me about your project or opportunity...',
      form: {
        name: 'Name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      career: 'Karir',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak',
      mode: {
        simple: 'Sederhana',
        splash: 'Animasi',
      },
      lang: {
        id: 'IND',
        en: 'ENG',
      },
    },
    loading: 'Memuat Portfolio',
    hero: {
      status: 'Terbuka Untuk Kerja',
      role: 'Full Stack Developer',
      tagline: 'Saya suka coding dan memberikan sesuatu yang dapat membantu orang lain setiap hari dan menyederhanakan hidup mereka.',
      cta: {
        primary: 'Jelajahi Karya Saya',
        secondary: 'Hubungi Saya',
      },
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Mengenal Lebih Dalam',
      summary: {
        title: 'Ringkasan Profesional',
        content: 'Full Stack Developer dengan passion kuat dalam sistem bisnis dan arsitektur data. Berpengalaman dalam memimpin pengembangan sistem enterprise end-to-end, dari analisis kebutuhan dan desain sistem hingga deployment dan maintenance. Terampil dalam merancang arsitektur client-server yang scalable, membangun aplikasi web dan mobile enterprise, dan mengelola database terstruktur. Thinker analitis yang kuat dengan pengalaman berkolaborasi dengan stakeholders dan tim cross-functional untuk menghasilkan solusi software yang berbasis bisnis.',
      },
      education: {
        title: 'Pendidikan',
        degree: 'Sarjana Terapan Teknik Informatika',
        institution: 'Politeknik Caltex Riau',
        gpa: 'IPK',
      },
      certification: {
        title: 'Sertifikasi',
        name: 'Programmer Bersertifikat BNSP',
        organization: 'Badan Nasional Sertifikasi Profesi',
        valid: 'Berlaku',
      },
      highlight: {
        problemSolver: {
          title: 'Pemecah Masalah',
          desc: 'Bersemangat dalam menerjemahkan kebutuhan bisnis yang kompleks menjadi solusi teknis yang elegan.',
        },
        innovation: {
          title: 'Berbasis Inovasi',
          desc: 'Selalu mengeksplorasi teknologi dan pendekatan baru untuk memberikan solusi terdepan.',
        },
        bnsp: {
          title: 'Bersertifikat BNSP',
          desc: 'Programmer Bersertifikat dengan pengakuan profesional dari Badan Nasional Sertifikasi Profesi.',
        },
      },
    },
    career: {
      title: 'Perjalanan Karir',
      subtitle: 'Perjalanan Profesional Saya',
      leadership: {
        title: 'Kepemimpinan & Kegiatan',
        items: [
          'Anggota Badan Eksekutif Mahasiswa (BEM) 2022 - Perencanaan program pengabdian sosial dan masyarakat',
          'Program Learning X oleh LG Group - Pengembangan proyek kolaboratif',
          'ITSA Caltex Riau (Divisi Dokumentasi) 2022 - Dokumentasi dan pelaporan pelatihan',
          'Panitia ISO 2022 - Koordinasi program pelatihan mahasiswa baru',
        ],
      },
      workExperience: 'Pengalaman Kerja',
      timeline: [
        {
          year: '2022',
          title: 'Memulai Perjalanan Profesional',
          description: 'Bergabung sebagai Full Stack Developer, memulai karir dalam pengembangan software enterprise dengan fokus pada solusi industri pertambangan.',
        },
        {
          year: '2023',
          title: 'Pengembangan Sistem ERP',
          description: 'Memimpin pengembangan sistem ERP komprehensif yang mendukung operasi pertambangan multi-site. Mengelola pengembangan end-to-end dari pengumpulan kebutuhan hingga deployment.',
        },
        {
          year: '2023',
          title: 'Solusi IoT & Monitoring',
          description: 'Memperluas keahlian ke sistem IoT dan monitoring real-time, mengembangkan solusi untuk pelacakan equipment dan visibilitas operasional.',
        },
        {
          year: '2024',
          title: 'Sertifikasi BNSP & Inovasi',
          description: 'Mencapai sertifikasi Programmer Bersertifikat BNSP. Melanjutkan inovasi dengan solusi customer-facing dan aplikasi kiosk.',
        },
      ],
    },
    projects: {
      title: 'Proyek',
      subtitle: 'Ringkasan Project',
      viewDetails: 'Lihat Detail',
      close: 'Tutup',
      technologies: 'Teknologi',
      features: 'Fitur Utama',
      metrics: 'Metrik',
      period: 'Periode',
      items: [
        {
          title: 'ERP PT Putera Wibowo Borneo',
          subtitle: 'Sistem Enterprise Resource Planning',
          description: 'Sistem ERP komprehensif yang mendukung operasi pertambangan multi-site dengan workflow bisnis kompleks di 5 lokasi dengan 100+ pengguna. Mengurangi waktu pemrosesan hingga 50% dari proses aktual.',
          features: [
            'Manajemen operasi multi-site (5 lokasi)',
            'Role-Based Access Control (RBAC) untuk pengguna multi-level',
            'Manajemen transaksi stok dengan monitoring & forecasting',
            'Sistem absensi karyawan & modul payroll',
            'Manajemen invoice dan administrasi',
            'Tracking KPI (Key Performance Indicator) karyawan',
            'Laporan operasional dan finansial real-time',
            'Dashboard analytics dengan visualisasi data dinamis',
          ],
          metrics: 'Pengurangan waktu proses 50% | 100+ pengguna aktif | 5 lokasi',
        },
        {
          title: 'Monitoring Unit Realtime',
          subtitle: 'Sistem Pelacakan Equipment Berbasis IoT',
          description: 'Sistem monitoring real-time untuk pelacakan heavy equipment dan unit operasional di berbagai site pertambangan dengan dashboard live dan sistem alerting.',
          features: [
            'Pelacakan GPS equipment real-time',
            'Dashboard live dengan status operasional',
            'Alert otomatis untuk jadwal maintenance',
            'Monitoring konsumsi bahan bakar',
            'Analytics dan reporting performa',
            'Interface mobile-responsive',
          ],
          metrics: 'Update real-time | 50+ unit terpantau',
        },
        {
          title: 'Desain Container 3D',
          subtitle: 'Visualisasi 3D Interaktif',
          description: 'Tool desain dan visualisasi container 3D interaktif untuk perencanaan dan optimasi layout penyimpanan dalam operasi pertambangan dan logistik.',
          features: [
            'Manipulasi model 3D interaktif',
            'Penempatan komponen drag-and-drop',
            'Perhitungan dimensi real-time',
            'Export ke format CAD',
            'Kompatibilitas VR/AR',
            'Berbagi desain kolaboratif',
          ],
          metrics: 'Visualisasi 3D | Desain interaktif',
        },
        {
          title: 'SPA Kiosk Table untuk Customer',
          subtitle: 'Portal Customer Self-Service',
          description: 'Sistem kiosk Single Page Application yang dideploy pada perangkat tablet untuk customer self-service, browsing produk, dan pemesanan di lingkungan retail.',
          features: [
            'Interface yang dioptimalkan untuk touch',
            'Kemampuan offline dengan sync',
            'Katalog produk dengan pencarian',
            'Pemesanan dan tracking',
            'Sistem feedback customer',
            'Dukungan multi-bahasa',
          ],
          metrics: 'Deploy kiosk | Customer self-service',
        },
      ],
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Keahlian Teknis',
      architecture: 'Arsitektur & Desain Sistem',
      programming: 'Pemrograman',
      frameworks: 'Framework',
      frontend: 'Frontend',
      backend: 'Backend & API',
      database: 'Database',
      tools: 'Alat & Kolaborasi',
      alwaysLearning: 'Selalu Belajar',
      learningDesc: 'Terus memperluas keahlian saya untuk memberikan solusi yang lebih baik',
      yearsExperience: 'Tahun Pengalaman',
      technologies: 'Teknologi',
      majorProjects: 'Proyek Utama',
      categories: {
        'Architecture & System Design': 'Arsitektur & Desain Sistem',
        'Programming': 'Pemrograman',
        'Frameworks': 'Framework',
        'Frontend': 'Frontend',
        'Backend & API': 'Backend & API',
        'Database': 'Database',
        'Tools & Collaboration': 'Alat & Kolaborasi',
      },
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Mari Terhubung',
      heading: 'Mari bekerja sama',
      description: 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.',
      email: 'Email',
      phone: 'Telepon',
      location: 'Lokasi',
      website: 'Website',
      followMe: 'Ikuti Saya',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      sendMessage: 'Kirim Pesan',
      subject: 'Subjek',
      subjectPlaceholder: 'Perihal apa ini?',
      messagePlaceholder: 'Ceritakan tentang proyek atau peluang Anda...',
      form: {
        name: 'Nama',
        email: 'Email',
        emailPlaceholder: 'email@anda.com',
        message: 'Pesan',
        send: 'Kirim Pesan',
        sending: 'Mengirim...',
        success: 'Pesan berhasil dikirim!',
        error: 'Gagal mengirim pesan. Silakan coba lagi.',
      },
    },
    footer: {
      rights: 'Hak cipta dilindungi.',
    },
  },
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'id' : 'en'));
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: unknown = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key; // Return key if translation not found
        }
      }
      
      return typeof value === 'string' ? value : key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
