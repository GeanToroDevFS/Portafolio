import type { EducationItem, ExperienceItem, Project, SkillGroup } from '@/types'

export const NAV_ITEMS = [
  { label: 'Sobre mí', href: '/about' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Contacto', href: '/contact' },
] as const

export const PERSONAL_INFO = {
  name: 'Gean Franco Muñoz Toro',
  givenName: 'Gean Franco',
  familyName: 'Muñoz Toro',
  initials: 'GF',
  role: 'Tecnólogo en Desarrollo de Software',
  headline: 'Full Stack Empresarial | APIs e Integraciones | IA Aplicada | Docker | AWS',
  description:
    'Tecnólogo en Desarrollo de Software con experiencia en el desarrollo de soluciones empresariales utilizadas en entornos productivos y orientadas a los procesos del negocio. He participado en el ciclo completo de aplicaciones Full Stack: desarrollo de frontend, backend y APIs, integración con sistemas legacy, dispositivos y plataformas externas, y despliegue en la nube hasta su puesta en producción.',
  approach:
    'He implementado automatización de procesos con inteligencia artificial y utilizo herramientas de IA para optimizar el desarrollo y la implementación, conservando el criterio técnico y la validación del código. Cuento con conocimientos de redes, servidores e infraestructura y experiencia en soporte técnico. Trabajo con metodologías ágiles en entornos colaborativos, aplicando principios de UX/UI y habilidades de comunicación, organización y trabajo en equipo.',
  location: 'Yumbo, Valle del Cauca, Colombia',
  cvPath: '/Cv/HvAc.pdf',
} as const

export const TECH_STACK = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'NestJS' },
  { name: 'Docker' },
  { name: 'AWS' },
  { name: 'MySQL' },
  { name: 'PostgreSQL' },
  { name: 'Prisma' },
] as const

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend y APIs',
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'PHP',
      'Python',
      'APIs REST',
      'Webhooks',
      'Swagger/OpenAPI',
      'JWT',
      'Prisma',
      'TypeORM',
      'Socket.IO',
      'Peer.js',
    ],
  },
  {
    title: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'Amazon RDS', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    title: 'Inteligencia artificial y automatización',
    items: [
      'API de OpenAI',
      'ChatGPT',
      'Kommo CRM',
      'Meta Business Suite',
      'Make',
      'WordPress',
      'WooCommerce',
      'Integración con sistemas legacy',
    ],
  },
  {
    title: 'DevOps e infraestructura',
    items: [
      'Docker',
      'Linux (servidor y doméstico)',
      'Certbot (certificados de dominios)',
      'AWS ECS',
      'AWS EC2',
      'AWS RDS',
      'Route 53',
      'Amazon S3',
      'CodeBuild',
      'CodePipeline',
      'CI/CD',
    ],
  },
  {
    title: 'Redes y hardware',
    items: [
      'MikroTik',
      'Starlink',
      'Hikvision (SDK/ISAPI)',
      'Zebra',
      'ZPL',
      'Zebra Browser Print',
      'CUPS',
      'PrintNode',
    ],
  },
  {
    title: 'Pruebas y calidad',
    items: ['Jest', 'Postman', 'SonarQube', 'ESLint'],
  },
  {
    title: 'Control de versiones',
    items: ['Git', 'GitHub'],
  },
  {
    title: 'Metodologías y diseño',
    items: ['Scrum', 'Jira', 'Taiga', 'Figma', 'Principios UX/UI', 'Pautas WCAG'],
  },
  {
    title: 'Desarrollo asistido por IA',
    items: ['ChatGPT', 'Claude', 'Gemini', 'Codex', 'Cline'],
  },
]

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    id: 'fexton',
    role: 'Desarrollador Full Stack e Integraciones Tecnológicas',
    company: 'Fexton S.A.S.',
    description:
      'Desarrollo de soluciones empresariales y APIs en producción, integración de sistemas y dispositivos, automatización de procesos con IA, despliegue en la nube e infraestructura de red.',
    areas: [
      {
        title: 'Fexton Biocontrol',
        subtitle: 'Full Stack | Hardware biométrico | Cloud',
        points: [
          'Plataforma web de asistencia del personal desarrollada con Next.js, React y Tailwind CSS.',
          'API REST en Node.js, Express y TypeScript, con MySQL y Prisma.',
          'Dashboard de KPIs, empleados, empresas, estado del lector, eventos, parámetros y calendario de festivos.',
          'Integración con lectores Hikvision mediante SDK propietario e ISAPI: marcaciones por huella y rostro, empleados, plantillas biométricas y fotografías.',
          'Webhooks, cola de eventos (outbox) y workers para notificar marcaciones a Control de Producción con firma HMAC.',
          'Reglas de jornada, cálculo de horas trabajadas y reportes en Excel.',
          'Seguridad con JWT, bcrypt, Helmet, rate limiting y validación con Zod. Pruebas automatizadas.',
          'Infraestructura con Ubuntu Server y MikroTik. Docker y despliegue en AWS ECS/EC2 y RDS.',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'Prisma', 'Hikvision', 'Docker', 'AWS'],
      },
      {
        title: 'Bot de atención al cliente con IA',
        subtitle: 'IA aplicada | Lenguaje natural | CRM',
        points: [
          'Agente conversacional con inteligencia artificial para Facebook e Instagram.',
          'Interpretación y respuesta en lenguaje natural a mensajes, comentarios y menciones.',
          'Respuestas contextualizadas con información de productos y de la tienda.',
          'Integración con la API de OpenAI, Kommo CRM, Meta Business Suite y Make.',
          'Automatización de la atención al cliente y gestión de conversaciones.',
        ],
        technologies: ['OpenAI', 'Kommo CRM', 'Meta Business Suite', 'Make'],
      },
      {
        title: 'Fexton Empaque',
        subtitle: 'Full Stack | APIs | Impresión en red local | AWS',
        points: [
          'Optimización del flujo de empaque, anteriormente dependiente del sistema legacy Symfony/PHP.',
          'Frontend con Next.js, React y Tailwind CSS. API REST con NestJS, TypeORM y MySQL.',
          'JWT/Passport, roles de administrador y operador, Swagger/OpenAPI y auditoría de eventos.',
          'Integración de APIs y webhooks con el sistema legacy para sincronizar inventario y producción.',
          'Impresión de etiquetas en impresoras Zebra de la red local desde AWS, con ZPL, Zebra Browser Print, PrintNode y CUPS.',
          'Documentos de inventario con firmas, proformas en PDF, importación desde Excel y archivos en Amazon S3.',
          'Paneles de KPIs y reportes. Docker y despliegue en AWS.',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'TypeORM', 'MySQL', 'Zebra', 'Amazon S3', 'Docker', 'AWS'],
      },
      {
        title: 'Integración Symfony–WooCommerce',
        subtitle: 'APIs | Webhooks | Automatización comercial',
        points: [
          'Plugin PHP Fexton Symfony Sync para WordPress/WooCommerce, compatible con tablas de pedidos HPOS y checkout por bloques.',
          'API REST y webhooks protegidos con clave de servicio.',
          'Sincronización de precios y stock desde Symfony, y detección de ventas, pagos, cancelaciones y compras.',
          'Sincronización inicial de catálogo por lotes, importaciones con vigilancia y reconciliación de inventario.',
          'Detección de conflictos y ejecución asíncrona mediante Action Scheduler y WP-Cron.',
          'Panel de administración, campos personalizados de cliente en el checkout y optimización de WordPress.',
        ],
        technologies: ['PHP', 'WordPress', 'WooCommerce', 'APIs REST', 'Webhooks'],
      },
      {
        title: 'Control de Producción',
        subtitle: 'Backend | APIs | Pruebas | CI/CD',
        points: [
          'Desarrollo exclusivamente backend con NestJS, TypeORM y MySQL en Amazon RDS.',
          'API REST tipo BFF sobre el sistema legacy y una base externa de empleados.',
          'Gestión de horarios, turnos, asistencia, áreas de trabajo, máquinas asignadas y reportes.',
          'Integración con Biocontrol: recepción de webhooks de asistencia con firma HMAC-SHA256.',
          'JWT en cookie httpOnly, sesiones locales, permisos por módulos, throttling y Helmet.',
          'Pruebas unitarias con Jest, pruebas de API con Postman y análisis de calidad con SonarQube.',
          'Documentación Swagger, gestión de tareas en Jira y CI/CD con AWS CodeBuild y CodePipeline.',
        ],
        technologies: ['NestJS', 'TypeORM', 'MySQL', 'Amazon RDS', 'Jest', 'Postman', 'SonarQube', 'Swagger', 'Jira', 'AWS'],
      },
      {
        title: 'Infraestructura, redes y soporte técnico',
        subtitle: 'Linux | MikroTik | Starlink',
        points: [
          'Configuración de conectividad con Starlink y equipos MikroTik.',
          'Gestión de puertos para comunicar la red interna con servicios desplegados en AWS.',
          'Instalación, configuración y mantenimiento de servidores Linux Ubuntu Server.',
          'Integración de lectores Hikvision e impresoras Zebra.',
          'Mantenimiento preventivo y correctivo de computadores: ampliación de RAM, reemplazo de HDD por SSD, reinstalación de Windows y programas.',
        ],
        technologies: ['Linux', 'MikroTik', 'Starlink', 'Hikvision', 'Zebra'],
      },
    ],
  },
]

export const AI_ASSISTED_DEVELOPMENT = {
  title: 'Desarrollo asistido por IA',
  points: [
    'Uso de ChatGPT, Claude, Gemini, Codex y Cline para agilizar programación, análisis, depuración, documentación e implementación.',
    'Conservación de la comprensión de la arquitectura, la validación del código y el control técnico de las soluciones.',
  ],
} as const

export const TIMELINE = [
  {
    id: 'univalle',
    type: 'education' as const,
    role: 'Tecnología en Desarrollo de Software',
    company: 'Universidad del Valle',
    duration: '2022 — 2026',
    location: 'Yumbo, Valle del Cauca',
    logo: 'univalle',
    description:
      'Formación en fundamentos de ingeniería de software, programación orientada a objetos, bases de datos PostgreSQL, UX/UI, redes y sistemas operativos.',
    tags: ['Python', 'Java', 'SQL', 'React', 'Scrum'],
  },
  {
    id: 'fexton',
    type: 'work' as const,
    role: 'Desarrollador Full Stack e Integraciones Tecnológicas',
    company: 'Fexton S.A.S.',
    duration: 'Abr 2026 — Oct 2026',
    location: 'Colombia',
    description:
      'Desarrollo de soluciones empresariales y APIs en producción, integración de sistemas y dispositivos, automatización de procesos con IA, despliegue en la nube e infraestructura de red.',
    tags: ['Next.js', 'NestJS', 'Node.js', 'Docker', 'AWS', 'SonarQube'],
  },
] as const

export const EDUCATION: readonly EducationItem[] = [
  {
    id: 'liceo',
    title: 'Bachiller Técnico',
    institution: 'Liceo Comercial',
    period: '2018',
    location: 'Yumbo',
  },
]

export const COMPLEMENTARY_TRAINING = [
  'Fundamentos de Programación Orientada a Objetos.',
  'Fundamentos de Programación Orientada a Eventos.',
  'Bases de Datos (PostgreSQL, Supabase, MongoDB y Firebase).',
  'Desarrollo de Software I.',
  'Desarrollo de Software II.',
  'Diseño de Contenido UX/UI.',
  'Proyecto Integrador.',
  'Scrum Foundation Professional Certificate (SFPC).',
  'Fundamentos de Redes.',
  'Sistemas Operativos.',
] as const

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 'codenova',
    title: 'CodeNova',
    period: 'Septiembre de 2025',
    badge: 'Proyecto académico · Universidad del Valle',
    description: 'Aplicación web interactiva para visualización y edición dinámica de tareas tipo Kanban.',
    technologies: ['Node.js', 'Vite', 'JavaScript', 'MongoDB', 'Taiga', 'Figma', 'Vercel', 'Render'],
    highlights: [
      'Usuarios y registro de tareas.',
      'Integración con MongoDB.',
      'Scrum mediante Taiga para sprints y backlog.',
      'Diseño de modelos en Figma.',
      'Despliegue en Vercel y Render.',
    ],
  },
  {
    id: 'moviewave',
    title: 'MovieWave',
    period: 'Octubre de 2025',
    badge: 'Proyecto académico · Universidad del Valle',
    description: 'Plataforma web de películas, con usuarios, preferencias y pautas de accesibilidad.',
    technologies: ['React', 'Node.js', 'Supabase', 'Pexels', 'Figma', 'Taiga', 'Vercel', 'Render'],
    highlights: [
      'Integración con la API de Pexels.',
      'Supabase para usuarios y preferencias.',
      'Aplicación de pautas WCAG.',
      'CI/CD para despliegue automatizado.',
      'Scrum mediante Taiga y diseño en Figma.',
      'Despliegue en Vercel y Render.',
    ],
  },
  {
    id: 'realtime',
    title: 'RealTime',
    period: 'Noviembre – diciembre de 2025',
    badge: 'Proyecto académico · Universidad del Valle',
    description: 'Plataforma web de videollamadas en tiempo real con arquitectura cliente-servidor.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'Firebase', 'Socket.IO', 'Peer.js', 'Vercel', 'Render'],
    highlights: [
      'Servidores de usuarios, chat, voz y video.',
      'Integración con Firebase.',
      'Comunicación en tiempo real con Socket.IO y Peer.js.',
      'Uso de servidor STUN.',
      'Despliegue en Vercel y Render.',
    ],
  },
]

export const VALIDATION_MESSAGES = {
  required: (field: string) => `El ${field} es obligatorio`,
  invalidEmail: 'Correo no válido',
  minLength: (field: string, min: number) =>
    `El ${field} es muy corto (mínimo ${min} caracteres)`,
} as const

export const SUCCESS_MESSAGES = {
  formSent: 'Mensaje enviado. Me pongo en contacto pronto.',
} as const

export const ERROR_MESSAGES = {
  formSend: 'No se pudo enviar el mensaje. Intenta de nuevo.',
  formUnavailable:
    'El formulario todavía no está configurado. Puedes escribirme directamente al correo.',
  generic: 'Algo salió mal. Por favor, intenta más tarde.',
} as const
