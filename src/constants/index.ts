import type { EducationItem, ExperienceItem, Project, SkillGroup } from '@/types'

export const NAV_ITEMS = [
  { label: 'Sobre mí', href: '/about' },
  { label: 'Proyectos', href: '/projects' },
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
          'Plataforma web empresarial para la gestión y supervisión de la asistencia del personal mediante dispositivos de marcacion biométricos Hikvision, mediante SDK. Permite consultar las marcaciones, administrar empleados y empresas, visualizar indicadores de asistencia y centralizar lo que registran los lectores de huella y reconocimiento facial. Integra esos dispositivos con los sistemas internos de producción mediante APIs y notificaciones automatizadas.',
          'API REST en Node.js, Express y TypeScript, con MySQL y Prisma.',
          'Dashboard de KPIs, empleados, empresas, estado del lector, eventos, parámetros y calendario de festivos.',
          'Integración con lectores Hikvision mediante SDK propietario e ISAPI: marcaciones por huella y rostro, empleados, plantillas biométricas y fotografías.',
          'Webhooks, cola de eventos (outbox) y workers para notificar marcaciones a Control de Producción con firma HMAC.',
          'Reglas de jornada (primera marcación válida en ventanas de 5 minutos, entrada y salida), cálculo de horas trabajadas, jornadas completas e incompletas y reportes en Excel con filtros y fines de semana resaltados.',
          'Seguridad con JWT, bcrypt, Helmet, rate limiting y validación con Zod. Auditoría y pruebas automatizadas de webhooks y de la cola de asistencia.',
          'Infraestructura con Ubuntu Server y MikroTik: servidor en la red interna con IP pública estática, puertos del lector liberados en el router, Docker y despliegue en AWS ECS/EC2 y RDS, con dominio público y código en GitHub.',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'Prisma', 'Hikvision', 'Docker', 'AWS'],
      },
      {
        title: 'Bot de atención al cliente con IA',
        subtitle: 'IA aplicada | Lenguaje natural | CRM',
        points: [
          'Agente conversacional impulsado por inteligencia artificial que lee, interpreta y responde en lenguaje natural mensajes, comentarios y menciones recibidos a través de Facebook e Instagram. Comprende las consultas de los clientes y genera respuestas contextualizadas con la información de los productos y de la tienda. Se integra con OpenAI, Kommo CRM, Meta Business Suite y Make para automatizar las conversaciones y gestionar la atención al cliente.',
          'Interpretación y respuesta en lenguaje natural a mensajes, comentarios y menciones, con respuestas amigables y certeras.',
          'Respuestas contextualizadas con información de productos y de la tienda.',
          'Integración con la API de OpenAI, Kommo CRM, Meta Business Suite y Make.',
          'Creación del flujo del bot, automatización de la atención al cliente y gestión de conversaciones.',
        ],
        technologies: ['OpenAI', 'Kommo CRM', 'Meta Business Suite', 'Make'],
      },
      {
        title: 'Fexton Empaque',
        subtitle: 'Full Stack | APIs | Impresión en red local | AWS',
        points: [
          'Aplicación web empresarial para la gestión y optimización del proceso de empaque y del control de inventario, antes dependiente del sistema legacy en Symfony/PHP. Centraliza el seguimiento de la producción y automatiza la generación e impresión de etiquetas en impresoras Zebra de la red local. Se comunica con el sistema empresarial mediante APIs y webhooks para mantener sincronizados el inventario y la producción, y genera documentos, proformas y reportes operativos.',
          'Frontend con Next.js, React y Tailwind CSS. API REST con NestJS, TypeORM y MySQL.',
          'JWT/Passport, roles de administrador y operador, Swagger/OpenAPI y auditoría de eventos.',
          'Integración de APIs y webhooks con el sistema legacy para sincronizar inventario y producción en tiempo real, y nuevas funciones en el sistema principal.',
          'Impresión de etiquetas en impresoras Zebra de la red local desde AWS, con ZPL, Zebra Browser Print, y PrintNode y CUPS en el servidor local.',
          'Documentos de inventario con firmas, proformas en PDF, importación desde Excel y archivos en Amazon S3.',
          'Paneles de KPIs y reportes. Docker y despliegue en AWS con Route 53, ECS y RDS (clúster compartido) y configuración de subdominios.',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'TypeORM', 'MySQL', 'Zebra', 'Amazon S3', 'Docker', 'AWS'],
      },
      {
        title: 'Integración Symfony–WooCommerce',
        subtitle: 'APIs | Webhooks | Automatización comercial',
        points: [
          'Plugin de integración que conecta el sistema empresarial Symfony con WordPress y WooCommerce, y sincroniza productos, precios, existencias y pedidos entre ambas plataformas. Gestiona ventas, pagos, cancelaciones y compras mediante APIs REST y webhooks. Incorpora procesos asíncronos, importaciones por lotes, detección de conflictos y reconciliación de inventario para mantener la información consistente sin interrumpir la compra.',
          'API REST y webhooks protegidos con clave de servicio.',
          'Sincronización de precios y stock desde Symfony, y detección de ventas, pagos y cancelaciones hacia el sistema legacy, y de compras del legacy hacia la tienda.',
          'Sincronización inicial de catálogo por lotes, trabajos de importación con vigilancia y reglas de inventario con reconciliación.',
          'Detección de conflictos y ejecución asíncrona mediante Action Scheduler y WP-Cron.',
          'Panel de administración, campos personalizados de cliente en el checkout y optimización de WordPress.',
        ],
        technologies: ['PHP', 'WordPress', 'WooCommerce', 'APIs REST', 'Webhooks'],
      },
      {
        title: 'Control de Producción',
        subtitle: 'Backend | APIs | Pruebas | CI/CD',
        points: [
          'Backend empresarial que centraliza horarios, turnos, asistencia del personal, áreas de trabajo y máquinas asignadas. Funciona como capa de integración entre el sistema principal y otras fuentes de información, y recibe las marcaciones de Biocontrol mediante webhooks seguros. Ofrece APIs para consultar y administrar la operación, incorpora controles de acceso, y cuenta con pruebas automatizadas y despliegue continuo en AWS.',
          'API REST tipo BFF sobre el sistema legacy y una base externa de empleados.',
          'Gestión de horarios, turnos, asistencia, áreas de trabajo, máquinas asignadas y reportes.',
          'Integración con Biocontrol: recepción de webhooks de asistencia con firma HMAC-SHA256.',
          'JWT en cookie httpOnly, sesiones locales, permisos por módulos, throttling y Helmet.',
          'Pruebas unitarias con Jest, pruebas de API con Postman y análisis de calidad con SonarQube: errores, vulnerabilidades, deuda técnica, cobertura y quality gate.',
          'Documentación Swagger, gestión de tareas en Jira y CI/CD con AWS CodeBuild y CodePipeline.',
        ],
        technologies: ['NestJS', 'TypeORM', 'MySQL', 'Amazon RDS', 'Jest', 'Postman', 'SonarQube', 'Swagger', 'Jira', 'AWS'],
      },
      {
        title: 'Infraestructura, redes y soporte técnico',
        subtitle: 'Linux | MikroTik | Starlink | Hardware y software',
        points: [
          'Administración y mantenimiento de la infraestructura tecnológica: servidores Linux, equipos de red MikroTik y conectividad con Starlink. Configura la comunicación entre la red interna y los servicios desplegados en AWS, integra lectores biométricos e impresoras con las aplicaciones web, y cubre el mantenimiento preventivo y correctivo de hardware y software de los equipos de cómputo.',
          'Gestión de puertos para comunicar la red interna con servicios desplegados en AWS.',
          'Instalación, configuración y mantenimiento de servidores Linux Ubuntu Server para aplicaciones y servicios de impresión.',
          'Integración de lectores Hikvision e impresoras Zebra con las aplicaciones web.',
          'Mantenimiento preventivo y correctivo de hardware y software en computadores (un equipo de bodega y tres de puntos de venta): limpieza, ampliación de RAM, reemplazo de HDD por SSD y reinstalación de Windows y programas.',
        ],
        technologies: ['Linux', 'MikroTik', 'Starlink', 'Hikvision', 'Zebra', 'Windows'],
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
    logo: 'fexton',
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
    description: 'Aplicación web de gestión de tareas con metodología Kanban. Permite registrar usuarios, crear y organizar actividades, y visualizar y editar las tareas de forma dinámica. Integra MongoDB para almacenar la información y Taiga para planificar sprints y backlog con Scrum.',
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
    description: 'Plataforma web de películas que permite explorar títulos, gestionar usuarios y guardar preferencias. Obtiene el contenido desde la API de Pexels y almacena usuarios y preferencias en Supabase. Aplica pautas de accesibilidad WCAG y separa el despliegue del frontend y del backend.',
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
    description: 'Plataforma web de comunicación en tiempo real para videollamadas y mensajes, con arquitectura cliente-servidor. Separa los servicios de usuarios, chat, voz y video. Usa Socket.IO para la comunicación entre cliente y servidor, y Peer.js para las conexiones multimedia entre navegadores.',
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
