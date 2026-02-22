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
      icon: "⚖️",
      content:
        "La intermediación jurídica se realiza a través de la Fundación Univalle, que actúa como representante contractual. El software permanece como propiedad intelectual del equipo ClustLayer. Este modelo permite cumplir requisitos de contratación pública, formalizar facturación y recibir apoyo legal.",
    },
    {
      title: "Protección de Datos Personales",
      icon: "🔒",
      content:
        "El sistema maneja información sensible de beneficiarios y actos administrativos. Se aplican principios de minimización, acceso por rol y cifrado de datos sensibles en tránsito y en reposo, conforme a la normativa de protección de datos en el sector público colombiano.",
    },
    {
      title: "Trazabilidad y Auditoría",
      icon: "📋",
      content:
        "Cada acción significativa es registrada con: IP, dispositivo, hora, usuario, acción y resultado. Los logs son inmutables, con retención mínima de 2 años. Este requisito es exigido por el marco normativo de actos administrativos.",
    },
    {
      title: "Separación de Funciones",
      icon: "🏛️",
      content:
        "El sistema implementa separación estricta de roles: el Liquidador no paga, el Administrador no liquida, el Pagador no crea liquidaciones y el Superusuario no accede a datos confidenciales. Esto previene fraude interno y cumple principios de legalidad administrativa.",
    },
    {
      title: "Principios Normativos",
      icon: "📜",
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
      icon: "🧮",
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
      icon: "🗂️",
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
      icon: "💳",
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
      icon: "🛡️",
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
    { name: "Creada", color: "#6B7280", icon: "📝", description: "Liquidación registrada, en espera de datos." },
    { name: "En proceso", color: "#3B82F6", icon: "⚙️", description: "Liquidador ingresando datos y calculando." },
    { name: "Terminada", color: "#8B5CF6", icon: "✅", description: "Cálculo completado, pendiente de pago." },
    { name: "Pagada", color: "#10B981", icon: "💰", description: "Pago registrado con comprobante." },
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
        icon: "👤",
        color: "#3B82F6",
        description: "Gestiona registro, login, JWT, 2FA y control de acceso por rol.",
        tech: ["Node.js", "bcrypt", "TOTP"],
      },
      {
        name: "Servicio de Liquidaciones",
        icon: "📊",
        color: "#8B5CF6",
        description: "Gestiona sentencias, cálculos, estados, adjuntos y generación de PDF.",
        tech: ["Node.js", "PDFKit", "PostgreSQL"],
      },
      {
        name: "Servicio de Pagos",
        icon: "💳",
        color: "#10B981",
        description: "Registro de pagos, comprobantes y transición de estados.",
        tech: ["Node.js", "S3", "PostgreSQL"],
      },
      {
        name: "Servicio de Logs y Auditoría",
        icon: "📋",
        color: "#F59E0B",
        description: "Microservicio desacoplado. Registra todas las acciones críticas de forma inmutable.",
        tech: ["Node.js", "PostgreSQL", "Retention 2y"],
      },
    ],
    infrastructure: [
      { name: "Amazon EC2", role: "Servidor de aplicaciones", icon: "☁️" },
      { name: "Amazon RDS", role: "Base de datos PostgreSQL", icon: "🗃️" },
      { name: "Amazon S3", role: "Almacenamiento de archivos adjuntos", icon: "📁" },
      { name: "Cloudflare", role: "CDN + Protección DDoS + HTTPS", icon: "🛡️" },
      { name: "GitHub Actions", role: "Pipeline CI/CD automatizado", icon: "⚙️" },
      { name: "SonarCloud", role: "Análisis continuo de calidad", icon: "🔍" },
    ],
  },

  security: [
    { measure: "JWT con llaves pública/privada", description: "Tokens firmados asimétricamente con expiración configurable.", icon: "🔑" },
    { measure: "Autenticación 2FA (TOTP)", description: "Google Authenticator compatible para usuarios críticos.", icon: "📱" },
    { measure: "bcrypt 12 rounds", description: "Contraseñas con hashing de alto costo computacional.", icon: "🔒" },
    { measure: "Consultas parametrizadas", description: "Prevención de SQL Injection validada en pipeline.", icon: "💉" },
    { measure: "HTTPS obligatorio", description: "Todo el tráfico cifrado en tránsito con TLS.", icon: "🌐" },
    { measure: "Validación IP + Dispositivo", description: "Detección de sesiones sospechosas en login.", icon: "🖥️" },
  ],

  links: {
    jira: {
      label: "Jira / Taiga",
      icon: "📌",
      url: "https://taiga.io",
      description: "Tablero de sprints y gestión del backlog.",
    },
    figma: {
      label: "Figma",
      icon: "🎨",
      url: "https://figma.com",
      description: "Prototipo de diseño y sistema visual.",
    },
    repoFrontend: {
      label: "Repositorio Frontend",
      icon: "💻",
      url: "https://github.com/AndreyQuicenoC/SILTGOV-PLAN",
      description: "Código fuente del cliente web.",
    },
    repoBackend: [
      {
        label: "Microservicio Auth & Usuarios",
        icon: "👤",
        url: "https://github.com/AndreyQuicenoC",
        description: "Autenticación, roles y control de acceso.",
      },
      {
        label: "Microservicio Liquidaciones",
        icon: "📊",
        url: "https://github.com/AndreyQuicenoC",
        description: "Motor de cálculo, sentencias y documentos PDF.",
      },
      {
        label: "Microservicio Pagos & Logs",
        icon: "📋",
        url: "https://github.com/AndreyQuicenoC",
        description: "Registro de pagos, comprobantes y auditoría.",
      },
    ],
  },
};
