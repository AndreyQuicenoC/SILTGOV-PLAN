// ============================================================
// team_data.js  Distribucion del Equipo por Sprint
// Proyecto: SILTGOV  Sistema Integrado de Liquidaciones
// Equipo: ClustLayer | Dev on time
// Velocidad: 18 puntos/sprint | 12 sprints | 216 puntos totales
// ============================================================

const TEAM_DATA = {
  team: "ClustLayer",
  slogan: "Dev on time",
  description: "Equipo de 3 integrantes que trabaja con metodologia Scrum. Velocidad de 18 puntos por sprint durante 12 sprints de una semana cada uno, con un total planificado de 216 puntos de historia.",
  velocity: 18,
  sprintDuration: "1 semana",
  totalSprints: 12,
  totalPoints: 216,

  epics: [
    { id: "E-1",  name: "Infraestructura y DevOps",                 color: "#3b82f6", description: "Repositorio, pipeline CI/CD, entorno de desarrollo, SonarCloud, testing y documentacion tecnica." },
    { id: "E-2",  name: "Autenticacion y Seguridad",                color: "#ef4444", description: "Login con JWT, 2FA, recuperacion de contrasena, control de acceso por rol y validaciones de seguridad finales." },
    { id: "E-3",  name: "Gestion de Entidades (Superusuario)",      color: "#8b5cf6", description: "Creacion y gestion de departamentos, entidades publicas, oficinas y usuarios administradores y pagadores." },
    { id: "E-4",  name: "Gestion de Sentencias",                    color: "#f59e0b", description: "Registro de sentencias, asignacion y reasignacion a liquidadores, gestion de plazos." },
    { id: "E-5",  name: "Liquidaciones  Creacion y Edicion",       color: "#10b981", description: "Formulario multi-paso, ingreso de datos laborales y del beneficiario, calculo automatico." },
    { id: "E-7",  name: "Pagos y Comprobantes",                     color: "#06b6d4", description: "Visualizacion de liquidaciones terminadas por el pagador, registro de pago y carga de comprobante." },
    { id: "E-8",  name: "Generacion de Documentos",                 color: "#6366f1", description: "PDF oficial de liquidacion con codigo de verificacion, gestion de adjuntos y visor de documentos." },
    { id: "E-9",  name: "Reportes y Auditoria",                     color: "#64748b", description: "Microservicio de logs, dashboard de auditoria para Superusuario y reportes internos y globales." },
    { id: "E-10", name: "Diseno Visual y UX",                       color: "#ec4899", description: "Sistema de diseno base, navbar, footer, dashboards por rol, formularios, PDF templates y accesibilidad." },
  ],

  sprints: [
    {
      id: "sprint-1",
      name: "Sprint 1: Infraestructura y Setup Visual",
      duration: "Semana 1",
      color: "#3b82f6",
      totalPoints: 18,
      goal: "Repositorio configurado, pipeline CI/CD operativo y sistema de diseno base implementado.",
      teamNote: "Sprint de cimentacion. Ivan establece la base tecnica del proyecto mientras Andrey define la identidad visual del sistema. Francesco revisa la arquitectura planeada y da retroalimentacion al equipo. Al final del sprint el equipo debe poder clonar, ejecutar el entorno local y ver el layout base del sistema.",
      epics: ["E-1", "E-10"],
      stories: [
        {
          code: "HU-01", title: "Configuracion del repositorio y estructura del proyecto",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-01-1", title: "Crear repositorio en GitHub con ramas base",          assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-01-2", title: "Definir y documentar convencion de commits",           assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-01-3", title: "Crear README.md inicial",                              assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-01-4", title: "Configurar .gitignore",                                assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
        {
          code: "HU-02", title: "Pipeline CI/CD inicial",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-02-1", title: "Crear workflow GitHub Actions para CI",                assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-02-2", title: "Configurar ESLint y Prettier",                        assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-02-3", title: "Configurar step de build automatico",                 assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-02-4", title: "Probar pipeline con push de prueba",                  assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
        {
          code: "HU-03", title: "Sistema de diseno base  identidad visual",
          points: 3, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-03-1", title: "Definir paleta de colores y tokens de diseno",        assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-03-2", title: "Implementar variables CSS globales",                  assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-03-3", title: "Documentar guia de estilos",                          assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-04", title: "Diseno y maquetacion de navbar y footer",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-04-1", title: "Crear componente Navbar",                             assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-04-2", title: "Crear componente Footer",                             assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-04-3", title: "Validar responsive",                                  assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-04-4", title: "Validar accesibilidad",                               assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-04-5", title: "Integrar en layout base",                             assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
      ],
    },
    {
      id: "sprint-2",
      name: "Sprint 2: Autenticacion Base",
      duration: "Semana 2",
      color: "#ef4444",
      totalPoints: 18,
      goal: "Sistema de login con JWT funcional, pantallas de autenticacion implementadas y entorno de desarrollo homogeneo.",
      teamNote: "Francesco implementa el nucleo de autenticacion del sistema mientras Ivan asegura el entorno y las variables de entorno. Andrey construye las pantallas de autenticacion. Al cierre del sprint un usuario puede iniciar sesion y recibir un JWT valido.",
      epics: ["E-2", "E-1", "E-10"],
      stories: [
        {
          code: "HU-05", title: "Registro y login de usuarios con JWT",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-05-1", title: "Implementar endpoint POST /auth/register",            assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-05-2", title: "Implementar endpoint POST /auth/login con JWT",       assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-05-3", title: "Configurar hashing con bcrypt",                       assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-05-4", title: "Implementar token de refresco",                       assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-05-5", title: "Escribir pruebas unitarias del modulo auth",          assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-06", title: "Diseno de pantallas de autenticacion",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-06-1", title: "Disenar pantalla de login",                           assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-06-2", title: "Disenar pantalla de recuperacion de contrasena",      assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-06-3", title: "Crear modal de Terminos y Condiciones",               assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-06-4", title: "Integrar validaciones visuales de formulario",        assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-07", title: "Variables de entorno y seguridad en despliegue",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-07-1", title: "Crear y documentar .env.example",                    assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-07-2", title: "Configurar Docker Compose para entorno local",        assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-07-3", title: "Agregar validacion de secretos al pipeline",          assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-07-4", title: "Actualizar README con guia de configuracion",         assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
      ],
    },
    {
      id: "sprint-3",
      name: "Sprint 3: Seguridad Avanzada",
      duration: "Semana 3",
      color: "#ef4444",
      totalPoints: 18,
      goal: "2FA operativo, recuperacion de contrasena funcional y middleware de control de acceso por rol implementado.",
      teamNote: "Ivan lidera la seguridad complementaria con 2FA y recuperacion de contrasena. Francesco implementa el middleware de autorizacion que protegera todos los endpoints del sistema. Andrey valida visualmente el flujo de autenticacion completo. Demo al cierre: flujo login - 2FA - acceso segun rol.",
      epics: ["E-2"],
      stories: [
        {
          code: "HU-08", title: "Autenticacion de doble factor (2FA)",
          points: 8, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-08-1", title: "Configurar libreria TOTP",                            assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-08-2", title: "Implementar activacion y verificacion 2FA",           assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-08-3", title: "Generar y entregar codigos de respaldo",              assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-08-4", title: "Integrar 2FA en flujo de login",                     assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-08-5", title: "Escribir pruebas de integracion del flujo 2FA",      assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
          ],
        },
        {
          code: "HU-09", title: "Recuperacion de contrasena por correo",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-09-1", title: "Implementar endpoint de solicitud de recuperacion",   assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-09-2", title: "Configurar servicio de envio de correo",              assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-09-3", title: "Implementar token de recuperacion de uso unico",      assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
            { id: "T-09-4", title: "Implementar pantalla de restablecimiento",            assignedTo: "Ivan Ausecha",          role: "DevOps/Seguridad" },
          ],
        },
        {
          code: "HU-10", title: "Control de acceso por roles y middleware",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-10-1", title: "Implementar middleware de autorizacion por rol",      assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-10-2", title: "Definir y configurar los cuatro roles del sistema",   assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-10-3", title: "Implementar aislamiento multi-entidad en queries",    assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-10-4", title: "Escribir pruebas de acceso denegado por rol",         assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
      ],
    },
    {
      id: "sprint-4",
      name: "Sprint 4: Superusuario y Estructura Institucional",
      duration: "Semana 4",
      color: "#8b5cf6",
      totalPoints: 18,
      goal: "Superusuario puede crear y gestionar departamentos, entidades, oficinas, administradores y pagadores.",
      teamNote: "Francesco construye todo el modulo de estructura institucional. Ivan apoya con la gestion de correos de bienvenida. Andrey mantiene coordinacion de sprint y revisa que los flujos del Superusuario sean intuitivos. Demo: creacion completa de una entidad con su oficina y su administrador.",
      epics: ["E-3"],
      stories: [
        {
          code: "HU-11", title: "Creacion y gestion de departamentos y entidades publicas",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-11-1", title: "Disenar modelo de datos para departamento y entidad", assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-11-2", title: "Implementar CRUD de departamentos y entidades",       assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-11-3", title: "Implementar activacion y desactivacion de entidad",   assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-11-4", title: "Agregar registro de auditoria",                       assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-12", title: "Creacion y configuracion de oficinas",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-12-1", title: "Implementar CRUD de oficinas",                        assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-12-2", title: "Implementar asignacion de administrador a oficina",   assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-12-3", title: "Validar que oficina pertenece a entidad activa",      assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-13", title: "Creacion de administradores y pagadores por Superusuario",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-13-1", title: "Implementar creacion de usuario por Superusuario",    assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-13-2", title: "Configurar correo de bienvenida",                     assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-13-3", title: "Implementar desactivacion de usuario",                assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
      ],
    },
    {
      id: "sprint-5",
      name: "Sprint 5: Administrador  Sentencias y Vistas",
      duration: "Semana 5",
      color: "#f59e0b",
      totalPoints: 18,
      goal: "El Administrador puede registrar sentencias, crear liquidadores y ver su dashboard operativo.",
      teamNote: "Francesco implementa el registro de sentencias y gestion de liquidadores. Andrey construye el dashboard del administrador con indicadores clave. Demo al finalizar: administrador ingresa, registra una sentencia y crea un liquidador.",
      epics: ["E-4", "E-10"],
      stories: [
        {
          code: "HU-14", title: "Registro de sentencias por el Administrador",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-14-1", title: "Disenar modelo de datos para sentencias",             assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-14-2", title: "Implementar endpoint POST /sentences",                assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-14-3", title: "Implementar carga de archivos adjuntos",              assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-14-4", title: "Agregar auditoria al crear sentencia",                assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-15", title: "Diseno de vistas y dashboard del Administrador",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-15-1", title: "Wireframe y prototipo del dashboard",                 assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-15-2", title: "Maquetar dashboard con componentes del diseno",       assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-15-3", title: "Implementar indicadores de alerta y estado",          assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-16", title: "Gestion de usuarios liquidadores",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-16-1", title: "Implementar creacion de liquidadores",                assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-16-2", title: "Implementar activacion y desactivacion",              assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-16-3", title: "Implementar historial de actividad del liquidador",   assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
      ],
    },
    {
      id: "sprint-6",
      name: "Sprint 6: Asignacion y Creacion de Liquidaciones",
      duration: "Semana 6",
      color: "#10b981",
      totalPoints: 18,
      goal: "El Administrador puede asignar liquidaciones y el Liquidador puede iniciar la creacion de una.",
      teamNote: "Francesco implementa los endpoints de asignacion y creacion de liquidaciones. Andrey construye el formulario multi-paso de liquidacion. Ivan configura las notificaciones. Demo: flujo completo de asignacion y apertura del formulario por el liquidador.",
      epics: ["E-4", "E-5", "E-10"],
      stories: [
        {
          code: "HU-17", title: "Asignacion de liquidaciones a liquidadores",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-17-1", title: "Implementar endpoint de asignacion",                  assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-17-2", title: "Implementar endpoint de reasignacion",                assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-17-3", title: "Configurar notificacion al liquidador asignado",      assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
        {
          code: "HU-18", title: "Creacion y edicion de liquidacion por el Liquidador",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-18-1", title: "Disenar modelo de datos completo de liquidacion",     assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-18-2", title: "Implementar endpoint POST /liquidations",             assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-18-3", title: "Implementar endpoint PATCH /liquidations/:id",        assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-18-4", title: "Implementar transicion automatica a En proceso",      assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-18-5", title: "Validar acceso solo a liquidaciones propias",         assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-19", title: "Diseno del formulario de liquidacion",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-19-1", title: "Wireframe del formulario por secciones",              assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-19-2", title: "Implementar formulario multi-paso con barra de progreso", assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-19-3", title: "Validaciones en linea y formato de campos numericos", assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-19-4", title: "Integrar formulario con endpoints",                   assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
      ],
    },
    {
      id: "sprint-7",
      name: "Sprint 7: Calculos y Calidad de Codigo",
      duration: "Semana 7",
      color: "#10b981",
      totalPoints: 18,
      goal: "El calculo automatico de liquidaciones funciona correctamente y SonarCloud esta integrado en el pipeline.",
      teamNote: "Francesco construye el nucleo del motor de calculo  el corazon funcional del sistema. Ivan integra SonarCloud para que la calidad sea visible desde este sprint en adelante. Andrey implementa la vista del desglose de calculo. Demo: liquidador ingresa datos, ejecuta calculo y ve el desglose completo en pantalla.",
      epics: ["E-5", "E-1"],
      stories: [
        {
          code: "HU-20", title: "Ingreso de datos laborales y del beneficiario",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-20-1", title: "Validaciones de datos del beneficiario en backend",   assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-20-2", title: "Logica de calculo de tiempo laborado",                assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-20-3", title: "Validar campos condicionales segun vinculacion",      assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-21", title: "Calculo automatico de liquidacion",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-21-1", title: "Implementar motor de calculo en backend",             assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-21-2", title: "Implementar endpoint POST /liquidations/:id/calculate",assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-21-3", title: "Desglose de calculo en respuesta del endpoint",       assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-21-4", title: "Persistir historial de calculos",                     assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-21-5", title: "Mostrar desglose en interfaz del liquidador",         assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-22", title: "Integracion de SonarCloud y calidad avanzada",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-22-1", title: "Crear proyecto en SonarCloud y obtener token",        assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-22-2", title: "Integrar step de SonarCloud en GitHub Actions",       assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-22-3", title: "Configurar quality gates de bloqueo",                 assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-22-4", title: "Actualizar README con badge de calidad",              assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
      ],
    },
    {
      id: "sprint-8",
      name: "Sprint 8: Documentos PDF y Adjuntos",
      duration: "Semana 8",
      color: "#6366f1",
      totalPoints: 18,
      goal: "El sistema genera PDF oficial de liquidacion con codigo de verificacion y gestiona adjuntos correctamente.",
      teamNote: "Francesco implementa el motor de generacion de PDF y los endpoints de adjuntos. Ivan configura el almacenamiento en S3. Andrey crea la plantilla visual del PDF y el visor en la interfaz. Demo: generar y descargar un PDF oficial completo de una liquidacion terminada.",
      epics: ["E-8"],
      stories: [
        {
          code: "HU-23", title: "Generacion de PDF oficial de liquidacion",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-23-1", title: "Integrar libreria de generacion de PDF",              assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-23-2", title: "Implementar plantilla HTML del PDF institucional",    assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-23-3", title: "Implementar codigo de verificacion unico",            assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-23-4", title: "Implementar endpoint GET /liquidations/:id/pdf",      assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-23-5", title: "Implementar descarga del PDF en interfaz",            assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-24", title: "Adjuntar y gestionar documentos de soporte",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-24-1", title: "Implementar servicio de almacenamiento en S3",        assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-24-2", title: "Implementar endpoints de carga y descarga de adjuntos",assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-24-3", title: "Validaciones de tipo y tamano de archivo",            assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-25", title: "Diseno del modulo de documentos y visor PDF",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-25-1", title: "Integrar visor de PDF en interfaz",                  assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-25-2", title: "Disenar lista de adjuntos con acciones",              assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
      ],
    },
    {
      id: "sprint-9",
      name: "Sprint 9: Flujo de Pagos",
      duration: "Semana 9",
      color: "#06b6d4",
      totalPoints: 18,
      goal: "El Pagador puede ver liquidaciones terminadas, registrar pagos y cargar comprobantes. El estado cambia a Pagada automaticamente.",
      teamNote: "Francesco construye los endpoints del modulo de pagos. Andrey diseña el dashboard y formulario del pagador. Demo completo: pagador ve liquidacion, registra pago, carga comprobante y la liquidacion queda en estado Pagada con auditoria registrada.",
      epics: ["E-7", "E-10"],
      stories: [
        {
          code: "HU-26", title: "Visualizacion de liquidaciones terminadas por el Pagador",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-26-1", title: "Implementar endpoint de liquidaciones para pagador",  assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-26-2", title: "Disenar dashboard del Pagador",                       assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-26-3", title: "Implementar filtros y paginacion en vista Pagador",   assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-27", title: "Registro de pago y carga de comprobante",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-27-1", title: "Implementar endpoint POST /liquidations/:id/payment", assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-27-2", title: "Implementar transicion de estado a Pagada",           assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-27-3", title: "Implementar carga del comprobante de pago",           assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-27-4", title: "Disenar formulario de registro de pago",              assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-27-5", title: "Implementar historial de pagos en interfaz",          assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-28", title: "Diseno del modulo de pagos y alertas presupuestales",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-28-1", title: "Dashboard pagador con indicadores clave",             assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-28-2", title: "Implementar alertas visuales de vencimiento",         assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-28-3", title: "Implementar resumen financiero mensual",              assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
      ],
    },
    {
      id: "sprint-10",
      name: "Sprint 10: Auditoria, Logs y Testing E2E",
      duration: "Semana 10",
      color: "#64748b",
      totalPoints: 18,
      goal: "Microservicio de logs funcionando, dashboard de auditoria para Superusuario y suite de pruebas E2E en CI.",
      teamNote: "Francesco construye el microservicio de logs y el dashboard de auditoria. Ivan implementa las pruebas E2E y las integra al pipeline. Andrey diseña el dashboard de auditoria. Este sprint da cierre a las funcionalidades criticas del sistema.",
      epics: ["E-9", "E-1"],
      stories: [
        {
          code: "HU-29", title: "Microservicio de logs y auditoria",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-29-1", title: "Disenar esquema de base de datos para logs",          assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-29-2", title: "Implementar microservicio de logs desacoplado",       assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-29-3", title: "Integrar hook de auditoria en endpoints criticos",    assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-29-4", title: "Configurar politica de retencion de logs",            assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
        {
          code: "HU-30", title: "Dashboard de auditoria global para Superusuario",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-30-1", title: "Endpoint de consulta de logs con filtros avanzados",  assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-30-2", title: "Disenar dashboard de auditoria para Superusuario",    assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-30-3", title: "Implementar exportacion de logs en CSV/PDF",          assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-31", title: "Testing end-to-end y reporte de calidad",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-31-1", title: "Configurar framework de pruebas E2E",                 assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-31-2", title: "Prueba E2E para flujo de login y autenticacion",      assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-31-3", title: "Prueba E2E para creacion y calculo de liquidacion",   assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-31-4", title: "Prueba E2E para flujo de pago",                       assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-31-5", title: "Integrar suite E2E en pipeline CI",                   assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
      ],
    },
    {
      id: "sprint-11",
      name: "Sprint 11: Reportes",
      duration: "Semana 11",
      color: "#64748b",
      totalPoints: 18,
      goal: "Reportes internos del Administrador y reportes globales del Superusuario implementados y exportables.",
      teamNote: "Francesco construye los endpoints de reportes con todos sus filtros. Andrey diseña e implementa el modulo visual con graficas interactivas. Ivan integra la libreria de graficas. Demo: administrador genera y exporta un reporte de su oficina; superusuario visualiza estadisticas comparativas.",
      epics: ["E-9", "E-10"],
      stories: [
        {
          code: "HU-32", title: "Reportes internos del Administrador",
          points: 8, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-32-1", title: "Endpoints de reportes con filtros avanzados",         assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-32-2", title: "Exportacion en PDF y Excel",                          assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-32-3", title: "Interfaz de reportes del Administrador",              assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-33", title: "Reportes globales para Superusuario",
          points: 5, assignedTo: "Juan Francesco Garcia",
          tasks: [
            { id: "T-33-1", title: "Endpoints de reportes globales agregados",            assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-33-2", title: "Interfaz de reportes globales con graficas",          assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-33-3", title: "Exportacion del reporte global en PDF",               assignedTo: "Juan Francesco Garcia", role: "Backend" },
          ],
        },
        {
          code: "HU-34", title: "Diseno del modulo de reportes y graficas interactivas",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-34-1", title: "Integrar libreria de graficas",                       assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-34-2", title: "Componentes de grafica segun tipo de reporte",        assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-34-3", title: "Exportacion de graficas como PNG",                    assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
      ],
    },
    {
      id: "sprint-12",
      name: "Sprint 12: Pulido Final y Preparacion para Demo",
      duration: "Semana 12",
      color: "#6366f1",
      totalPoints: 18,
      goal: "Sistema desplegado en AWS por HTTPS, documentacion completa y manual de usuario listo para presentar a la entidad.",
      teamNote: "Sprint de cierre. Ivan lidera el despliegue en AWS y la auditoria de seguridad final. Francesco completa la documentacion de la API con Swagger. Andrey finaliza el perfil de usuario, la accesibilidad y el manual de usuario. Demo final con todos los roles operativos en el entorno de produccion.",
      epics: ["E-10", "E-2", "E-1"],
      stories: [
        {
          code: "HU-35", title: "Modal de terminos, perfil y accesibilidad",
          points: 5, assignedTo: "Adolfo Andrey Quiceno",
          tasks: [
            { id: "T-35-1", title: "Modal de Terminos y Condiciones obligatorio",         assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-35-2", title: "Seccion de perfil de usuario completa",               assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-35-3", title: "Opciones de accesibilidad de fuente y contraste",     assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
          ],
        },
        {
          code: "HU-36", title: "Validaciones de seguridad y despliegue en AWS",
          points: 8, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-36-1", title: "Auditar endpoints para consultas parametrizadas",     assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-36-2", title: "Configurar JWT con llaves publica/privada en prod",   assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-36-3", title: "Configurar Cloudflare y HTTPS",                       assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-36-4", title: "Configurar instancias AWS EC2 y RDS",                 assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-36-5", title: "Reporte de seguridad final con SonarCloud",           assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
        {
          code: "HU-37", title: "Documentacion tecnica de APIs y manual de usuario",
          points: 5, assignedTo: "Ivan Ausecha",
          tasks: [
            { id: "T-37-1", title: "Completar anotaciones OpenAPI en todos los endpoints",assignedTo: "Juan Francesco Garcia", role: "Backend" },
            { id: "T-37-2", title: "Configurar Swagger UI en /api/docs",                  assignedTo: "Ivan Ausecha",          role: "DevOps" },
            { id: "T-37-3", title: "Redactar manual de usuario por rol",                  assignedTo: "Adolfo Andrey Quiceno", role: "UX/UI" },
            { id: "T-37-4", title: "Actualizar README con arquitectura y contribucion",   assignedTo: "Ivan Ausecha",          role: "DevOps" },
          ],
        },
      ],
    },
  ],
};
