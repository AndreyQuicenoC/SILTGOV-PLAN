// ============================================================
// project_data.js  Informacion del Proyecto SILTGOV
// Sistema Integrado de Liquidaciones  Gobernacion del Valle
// ============================================================

const PROJECT_DATA = {
  name: "SILTGOV",
  fullName: "Sistema Integrado de Liquidaciones — Gobernación del Valle",
  tagline: "Tecnología al servicio de la justicia administrativa",
  version: "v1.0 — Beta planificada",
  status: "En desarrollo activo",
  team: "ClustLayer | Dev on time",

  description:
    "SILTGOV es una plataforma web en la nube diseñada para gestionar de forma digital, segura y trazable todo el ciclo administrativo de las liquidaciones derivadas de sentencias judiciales. El sistema opera desde la fase posterior al fallo judicial, ofreciendo herramientas para registrar sentencias, calcular liquidaciones automáticamente, gestionar estados del proceso y validar pagos — eliminando los procesos manuales, errores y riesgos de fraude interno actuales.",

  context:
    "El sistema está diseñado para operar en múltiples entidades públicas (Gobernaciones, Alcaldías, Secretarías), bajo un modelo multi-entidad centralizado. El primer cliente objetivo es la Gobernación del Valle del Cauca. El sistema no interviene en el proceso judicial: actúa como apoyo procedimental en la fase administrativa de ejecución de sentencias.",

  legalFramework: [
    {
      title: "Modelo de Comercialización",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3L2 7l10 4 10-4-10-4z"/><path d="M2 17l10 4 10-4"/><path d="M2 12l10 4 10-4"/></svg>`,
      content:
        "La intermediación jurídica se realiza a través de la Fundación Univalle, que actúa como representante contractual. El software permanece como propiedad intelectual del equipo ClustLayer. Este modelo permite cumplir requisitos de contratación pública, formalizar facturación y recibir apoyo legal.",
    },
    {
      title: "Protección de Datos Personales",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      content:
        "El sistema maneja información sensible de beneficiarios y actos administrativos. Se aplican principios de minimización, acceso por rol y cifrado de datos sensibles en tránsito y en reposo, conforme a la normativa de protección de datos en el sector público colombiano.",
    },
    {
      title: "Trazabilidad y Auditoría",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      content:
        "Cada acción significativa es registrada con: IP, dispositivo, hora, usuario, acción y resultado. Los logs son inmutables, con retención mínima de 2 años. Este requisito es exigido por el marco normativo de actos administrativos.",
    },
    {
      title: "Separación de Funciones",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
      content:
        "El sistema implementa separación estricta de roles: el Liquidador no paga, el Administrador no liquida, el Pagador no crea liquidaciones y el Superusuario no accede a datos confidenciales. Esto previene fraude interno y cumple principios de legalidad administrativa.",
    },
    {
      title: "Principios Normativos",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
      content:
        "El sistema se alinea con: legalidad administrativa, seguridad de la información en el sector público, prevención de fraude interno y control de actos administrativos. Todo el flujo de liquidaciones queda respaldado documentalmente.",
    },
  ],

  objectives: {
    general:
      "Desarrollar un sistema en la nube que automatice y digitalice el ciclo administrativo de liquidaciones judiciales para entidades públicas, garantizando trazabilidad total, separación de funciones y seguridad de la información.",
    specific: [
      "Registrar y gestionar sentencias judiciales de forma estructurada y segura.",
      "Automatizar el cálculo de liquidaciones reduciendo errores manuales.",
      "Implementar un modelo de roles estricto que separe funciones y prevenga fraude.",
      "Garantizar la trazabilidad completa de cada acto administrativo mediante logs inmutables.",
      "Generar documentos PDF oficiales con firma digital y código de verificación.",
      "Facilitar el registro de pagos y la carga de comprobantes por parte de Hacienda.",
      "Proveer reportes gerenciales por entidad, oficina y liquidador.",
      "Habilitar el sistema para operar en múltiples entidades públicas bajo modelo multi-entidad.",
    ],
  },

  scope: {
    inScope: [
      "Gestión del ciclo post-fallo: registro de sentencias, asignación, cálculo y pago.",
      "Modelo multi-entidad: soporte para Gobernaciones, Alcaldías y Secretarías.",
      "Generación automática de PDF institucional con código de verificación.",
      "Control de acceso por roles: Liquidador, Administrador, Pagador, Superusuario.",
      "Sistema de auditoría y logs inmutables por 2 años.",
      "Notificaciones internas por acción (asignación, pago, vencimientos).",
    ],
    outScope: [
      "El sistema NO interviene en el proceso judicial previo al fallo.",
      "No incluye módulo de nómina ni pagos directos bancarios.",
      "No integra sistemas de gestión documental externos en la v1.",
    ],
  },

  roles: [
    {
      name: "Liquidador",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>`,
      color: "#3B82F6",
      description: "Profesional encargado de crear y calcular liquidaciones a partir de sentencias asignadas.",
      functions: [
        "Crear liquidaciones a partir de sentencias asignadas.",
        "Ingresar datos del beneficiario y laborales.",
        "Solicitar cálculo automático al sistema.",
        "Marcar liquidación como 'Terminada'.",
        "Adjuntar documentos de soporte.",
      ],
      restrictions: [
        "No puede registrar sentencias.",
        "No puede crear usuarios.",
        "No puede cambiar estado a 'Pagada'.",
        "Solo accede a sus propias liquidaciones.",
      ],
    },
    {
      name: "Administrador",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6l3 1M3 10l3 1M3 14l3 1"/><path d="M8 3h13v18H8z"/><line x1="11" y1="8" x2="17" y2="8"/><line x1="11" y1="12" x2="17" y2="12"/><line x1="11" y1="16" x2="14" y2="16"/></svg>`,
      color: "#8B5CF6",
      description: "Jefe de oficina responsable de la supervisión y asignación de casos.",
      functions: [
        "Registrar sentencias judiciales.",
        "Asignar liquidaciones a liquidadores.",
        "Autorizar edición de liquidaciones terminadas.",
        "Crear y gestionar usuarios liquidadores.",
        "Generar reportes internos de su oficina.",
      ],
      restrictions: [
        "No puede ejecutar cálculos directamente.",
        "No puede acceder a otras entidades.",
        "Solo gestiona su propia oficina.",
      ],
    },
    {
      name: "Pagador (Hacienda)",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      color: "#10B981",
      description: "Usuario de Hacienda que gestiona el pago de las liquidaciones aprobadas.",
      functions: [
        "Visualizar liquidaciones en estado 'Terminada'.",
        "Registrar el pago con comprobante.",
        "Cambiar estado a 'Pagada'.",
        "Consultar historial de pagos.",
      ],
      restrictions: [
        "No puede crear ni editar liquidaciones.",
        "No puede registrar sentencias.",
        "Solo puede ver liquidaciones terminadas.",
      ],
    },
    {
      name: "Superusuario",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      color: "#F59E0B",
      description: "Administrador global del sistema encargado de la configuración institucional.",
      functions: [
        "Crear departamentos y entidades públicas.",
        "Crear y gestionar oficinas.",
        "Crear administradores y pagadores.",
        "Habilitar nuevas entidades.",
        "Acceder a reportes globales agregados.",
      ],
      restrictions: [
        "No accede a información confidencial de liquidaciones.",
        "No puede intervenir en el proceso de liquidación.",
      ],
    },
  ],

  states: [
    { name: "Creada", color: "#6B7280", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`, description: "Liquidación registrada, en espera de datos." },
    { name: "En proceso", color: "#3B82F6", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`, description: "Liquidador ingresando datos y calculando." },
    { name: "Terminada", color: "#8B5CF6", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`, description: "Cálculo completado, pendiente de pago." },
    { name: "Pagada", color: "#10B981", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`, description: "Pago registrado con comprobante." },
  ],

  architecture: {
    description:
      "SILTGOV utiliza una arquitectura basada en microservicios ligeros desplegada en AWS. Los servicios se comunican mediante API REST con autenticación JWT. Cloudflare actúa como CDN y capa de protección DDoS.",
    principles: [
      "Microservicios ligeros — sin fragmentación excesiva para evitar latencia.",
      "API REST con JWT para comunicación inter-servicios.",
      "Separación lógica por entidad en base de datos compartida.",
      "Pipeline CI/CD con SonarCloud para calidad continua.",
    ],
    services: [
      {
        name: "Servicio de Usuarios y Auth",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        color: "#3B82F6",
        description: "Gestiona registro, login, JWT, 2FA y control de acceso por rol.",
        tech: ["Node.js", "bcrypt", "TOTP"],
      },
      {
        name: "Servicio de Liquidaciones",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
        color: "#8B5CF6",
        description: "Gestiona sentencias, cálculos, estados, adjuntos y generación de PDF.",
        tech: ["Node.js", "PDFKit", "PostgreSQL"],
      },
      {
        name: "Servicio de Pagos",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
        color: "#10B981",
        description: "Registro de pagos, comprobantes y transición de estados.",
        tech: ["Node.js", "S3", "PostgreSQL"],
      },
      {
        name: "Servicio de Logs y Auditoría",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
        color: "#F59E0B",
        description: "Microservicio desacoplado. Registra todas las acciones críticas de forma inmutable.",
        tech: ["Node.js", "PostgreSQL", "Retention 2y"],
      },
    ],
    infrastructure: [
      { name: "Amazon EC2", role: "Servidor de aplicaciones", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
      { name: "Amazon RDS", role: "Base de datos PostgreSQL", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>` },
      { name: "Amazon S3", role: "Almacenamiento de archivos adjuntos", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>` },
      { name: "Cloudflare", role: "CDN + Protección DDoS + HTTPS", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
      { name: "GitHub Actions", role: "Pipeline CI/CD automatizado", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>` },
      { name: "SonarCloud", role: "Análisis continuo de calidad", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
    ],
  },

  security: [
    { measure: "JWT con llaves pública/privada", description: "Tokens firmados asimétricamente con expiración configurable.", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>` },
    { measure: "Autenticación 2FA (TOTP)", description: "Google Authenticator compatible para usuarios críticos.", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>` },
    { measure: "bcrypt 12 rounds", description: "Contraseñas con hashing de alto costo computacional.", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>` },
    { measure: "Consultas parametrizadas", description: "Prevención de SQL Injection validada en pipeline.", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    { measure: "HTTPS obligatorio", description: "Todo el tráfico cifrado en tránsito con TLS.", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` },
    { measure: "Validación IP + Dispositivo", description: "Detección de sesiones sospechosas en login.", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
  ],

  links: {
    jira: {
      label: "Jira / Taiga",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
      url: "https://taiga.io",
      description: "Tablero de sprints y gestión del backlog.",
    },
    figma: {
      label: "Figma",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
      url: "https://figma.com",
      description: "Prototipo de diseño y sistema visual.",
    },
    repoFrontend: {
      label: "Repositorio Frontend",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      url: "https://github.com/AndreyQuicenoC/SILTGOV-PLAN",
      description: "Código fuente del cliente web.",
    },
    repoBackend: [
      {
        label: "Microservicio Auth & Usuarios",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        url: "https://github.com/AndreyQuicenoC",
        description: "Autenticación, roles y control de acceso.",
      },
      {
        label: "Microservicio Liquidaciones",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
        url: "https://github.com/AndreyQuicenoC",
        description: "Motor de cálculo, sentencias y documentos PDF.",
      },
      {
        label: "Microservicio Pagos & Logs",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
        url: "https://github.com/AndreyQuicenoC",
        description: "Registro de pagos, comprobantes y auditoría.",
      },
    ],
  },
};
