import type { PersonalInfo, Project, TimelineEvent, Skill } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'HARTANTO SITUMORANG',
  location: 'Riau, Indonesia',
  phone: '083157682848',
  email: 'situmorang140201hart@gmail.com',
  website: 'www.hartanto.s.com',
  summary: 'Full Stack Developer with strong passion in business systems and data architecture. Experienced in leading end-to-end enterprise system development, from requirement analysis and system design to deployment and maintenance. Skilled in designing scalable client-server architecture, building enterprise web and mobile applications, and managing structured databases. Strong analytical thinker with experience collaborating with stakeholders and cross-functional teams to deliver business-driven software solutions.'
};

export const skills: Skill[] = [
  {
    category: 'Architecture & System Design',
    items: ['Client-Server Architecture', 'MVC Pattern', 'Database Design (ERD)', 'System Modeling', 'SDLC']
  },
  {
    category: 'Programming',
    items: ['PHP', 'JavaScript', 'Python', 'SQL', 'Java', 'Kotlin']
  },
  {
    category: 'Frameworks',
    items: ['Laravel', 'React', 'Node.js']
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'AJAX']
  },
  {
    category: 'Backend & API',
    items: ['RESTful API Development', 'Authentication & Authorization System']
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL']
  },
  {
    category: 'Tools & Collaboration',
    items: ['Git', 'Postman', 'UML', 'SKPL', 'Linux/Ubuntu', 'Windows']
  }
];

export const projects: Project[] = [
  {
    id: 'erp-putera-wibowo',
    title: 'ERP PT Putera Wibowo Borneo',
    subtitle: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP system supporting multi-site mining operations with complex business workflows across 5 locations with 100+ users. Reduced processing time up to 50% from actual process.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
    features: [
      'Multi-site operations management (5 locations)',
      'Role-Based Access Control (RBAC) for multi-level users',
      'Stock transaction management with monitoring & forecasting',
      'Employee attendance system & payroll module',
      'Invoice and administrative management',
      'Employee KPI (Key Performance Indicator) tracking',
      'Real-time operational and financial reports',
      'Analytics dashboard with dynamic data visualization'
    ],
    metrics: '50% process time reduction | 100+ active users | 5 locations',
    date: '2023 - 2024',
    image: '/images/erp-system.jpg'
  },
  {
    id: 'realtime-monitoring',
    title: 'Realtime Monitoring Unit',
    subtitle: 'IoT-Based Equipment Tracking System',
    description: 'Real-time monitoring system for tracking heavy equipment and operational units across multiple mining sites with live dashboard and alerting system.',
    technologies: ['React', 'Node.js', 'WebSocket', 'IoT Sensors', 'PostgreSQL', 'Chart.js'],
    features: [
      'Real-time GPS tracking of equipment',
      'Live dashboard with operational status',
      'Automated alerts for maintenance schedules',
      'Fuel consumption monitoring',
      'Performance analytics and reporting',
      'Mobile-responsive interface'
    ],
    metrics: 'Real-time updates | 50+ units monitored',
    date: '2023',
    image: '/images/monitoring-system.jpg'
  },
  {
    id: '3d-container-design',
    title: '3D Design Container',
    subtitle: 'Interactive 3D Visualization',
    description: 'Interactive 3D container design and visualization tool for planning and optimizing storage layouts in mining and logistics operations.',
    technologies: ['Three.js', 'React Three Fiber', 'WebGL', 'JavaScript', 'Blender'],
    features: [
      'Interactive 3D model manipulation',
      'Drag-and-drop component placement',
      'Real-time dimension calculations',
      'Export to CAD formats',
      'VR/AR compatibility',
      'Collaborative design sharing'
    ],
    metrics: '3D visualization | Interactive design',
    date: '2023',
    image: '/images/3d-container.jpg'
  },
  {
    id: 'spa-kiosk-table',
    title: 'SPA Kiosk Table for Customer',
    subtitle: 'Self-Service Customer Portal',
    description: 'Single Page Application kiosk system deployed on tablet devices for customer self-service, product browsing, and order placement in retail environments.',
    technologies: ['React', 'PWA', 'Touch UI', 'Local Storage', 'Offline Sync'],
    features: [
      'Touch-optimized interface',
      'Offline capability with sync',
      'Product catalog with search',
      'Order placement and tracking',
      'Customer feedback system',
      'Multi-language support'
    ],
    metrics: 'Kiosk deployment | Customer self-service',
    date: '2024',
    image: '/images/kiosk-table.jpg'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-1',
    year: '2022',
    title: 'Started Professional Journey',
    company: 'PT Putera Wibowo Borneo',
    description: 'Joined as Full Stack Developer, beginning career in enterprise software development with focus on mining industry solutions.',
    projects: [],
    skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript']
  },
  {
    id: 'event-2',
    year: '2023',
    title: 'ERP System Development',
    company: 'PT Putera Wibowo Borneo',
    description: 'Led the development of comprehensive ERP system supporting multi-site mining operations. Managed end-to-end development from requirement gathering to deployment.',
    projects: [projects[0]],
    skills: ['System Architecture', 'Database Design', 'Team Leadership', 'API Development']
  },
  {
    id: 'event-3',
    year: '2023',
    title: 'IoT & Monitoring Solutions',
    company: 'PT Putera Wibowo Borneo',
    description: 'Expanded expertise to IoT and real-time monitoring systems, developing solutions for equipment tracking and operational visibility.',
    projects: [projects[1], projects[2]],
    skills: ['React', 'Node.js', 'WebSocket', 'Three.js', 'IoT Integration']
  },
  {
    id: 'event-4',
    year: '2024',
    title: 'BNSP Certification & Innovation',
    company: 'PT Putera Wibowo Borneo',
    description: 'Achieved BNSP Certified Programmer certification. Continued innovation with customer-facing solutions and kiosk applications.',
    projects: [projects[3]],
    skills: ['PWA Development', 'Touch UI', 'Certified Professional']
  }
];

export const certifications = [
  {
    name: 'BNSP Certified Programmer',
    organization: 'Badan Nasional Sertifikasi Profesi',
    certificateNo: '620103512500000882024',
    valid: 'July 2024 - July 2027'
  }
];

export const education = {
  degree: 'Bachelor of Applied Informatics Engineering',
  institution: 'Politeknik Caltex Riau',
  gpa: '3.77'
};

export const leadership = [
  'Member of Student Executive Board (BEM) 2022 - Social and community service program planning',
  'Learning X Program by LG Group - Collaborative project development',
  'ITSA Caltex Riau (Documentation Division) 2022 - Training documentation and reporting',
  'ISO 2022 Committee - New student training program coordination'
];
