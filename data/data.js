// ============================================================
// data.js  Historias de Usuario del Proyecto SILTGOV
// Sistema Integrado de Liquidaciones  Gobernacion del Valle
// Equipo: ClustLayer | Dev on time
// Velocidad: 18 puntos/sprint | 13 sprints | 234 puntos totales
// ============================================================

const EMBEDDED_DATA = {
  siltgov: {
    userStories: [
      // =======================================================
      // SPRINT 1  Infraestructura y Setup Visual (18 pts)
      // =======================================================
      {
        code: "HU-01",
        title: "Configuracion del repositorio y estructura del proyecto",
        sprint: "S1",
        epic: "E-1 Infraestructura y DevOps",
        points: 5,
        description:
          "Como equipo de desarrollo\nQuiero tener el repositorio configurado con estructura limpia, estandarizada y con estrategia de ramas\nPara garantizar un flujo de trabajo ordenado y trazable desde el inicio.",
        acceptanceCriteria: [
          "Repositorio Git creado con estructura de carpetas definida (backend, frontend, docs).",
          "Estrategia de ramas implementada: main, develop, feature/*, hotfix/*.",
          "Archivo .gitignore configurado correctamente.",
          "README.md con descripcion del proyecto, instalacion y uso.",
          "Conventions de commits documentadas y accesibles para el equipo.",
          "Primer commit limpio sin archivos de entorno ni secretos.",
        ],
        definitionOfDone: [
          "Repositorio accesible y cloneable por todos los miembros.",
          "Estructura de carpetas revisada y aprobada por el equipo.",
          "Documento de convenciones publicado en el repositorio.",
        ],
        tasks: [
          {
            id: "T-01-1",
            title: "Crear repositorio en GitHub con ramas base",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-01-2",
            title: "Definir y documentar convencion de commits",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-01-3",
            title: "Crear README.md inicial",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-01-4",
            title: "Configurar .gitignore para Node y variables de entorno",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },
      {
        code: "HU-02",
        title: "Pipeline CI/CD inicial",
        sprint: "S1",
        epic: "E-1 Infraestructura y DevOps",
        points: 5,
        description:
          "Como equipo de desarrollo\nQuiero tener un pipeline de integracion y entrega continua configurado\nPara que cada push sea validado automaticamente antes de llegar a la rama principal.",
        acceptanceCriteria: [
          "Pipeline configurado en GitHub Actions.",
          "El pipeline corre en cada push a develop y en pull requests a main.",
          "El pipeline ejecuta: lint, build y pruebas basicas.",
          "El pipeline falla si hay errores de lint o build.",
          "Notificaciones configuradas para el equipo en caso de fallo.",
        ],
        definitionOfDone: [
          "Pipeline verde en primer push de prueba.",
          "Documentacion basica del pipeline en README.",
          "Revisado y aprobado por el equipo.",
        ],
        tasks: [
          {
            id: "T-02-1",
            title: "Crear workflow de GitHub Actions para CI",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-02-2",
            title: "Configurar ESLint y Prettier en el proyecto",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-02-3",
            title: "Configurar step de build automatico",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-02-4",
            title: "Probar y validar pipeline con push de prueba",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },
      {
        code: "HU-03",
        title: "Sistema de diseno base  identidad visual del sistema",
        sprint: "S1",
        epic: "E-10 Diseno Visual y UX",
        points: 3,
        description:
          "Como director de diseno\nQuiero definir el sistema de diseno del proyecto con colores, tipografia y componentes base\nPara garantizar consistencia visual en todas las pantallas del sistema.",
        acceptanceCriteria: [
          "Paleta de colores institucional definida: azul, blanco, negro y tonos neutros.",
          "Tipografia seleccionada y documentada.",
          "Componentes base definidos: botones, inputs, tablas, badges de estado.",
          "CSS custom properties configuradas para el sistema de tokens.",
          "Guia de estilos accesible en el repositorio.",
        ],
        definitionOfDone: [
          "Sistema de diseno documentado y aprobado por el equipo.",
          "Variables CSS implementadas en el proyecto.",
          "Coherencia visual validada en prototipo inicial.",
        ],
        tasks: [
          {
            id: "T-03-1",
            title: "Definir paleta de colores y tokens de diseno",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-03-2",
            title: "Implementar variables CSS globales",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-03-3",
            title: "Documentar guia de estilos en docs/",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-03-4",
            title:
              "Implementar variables CSS y sistema de tokens en el proyecto frontend",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },
      {
        code: "HU-04",
        title: "Diseno y maquetacion de navbar y footer",
        sprint: "S1",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como usuario del sistema\nQuiero contar con una barra de navegacion y un footer funcionales y accesibles\nPara navegar facilmente entre las secciones del sistema y acceder a informacion de soporte.",
        acceptanceCriteria: [
          "Navbar con logo, nombre del sistema, notificaciones, ayuda rapida y menu de perfil.",
          "Menu de perfil incluye: ver perfil, editar contacto, cambiar contrasena, configurar 2FA y cerrar sesion.",
          "Footer con enlaces a FAQ, Terminos, Politica de Datos, Manual de Usuario, Soporte Tecnico y version del sistema.",
          "Diseno responsive para movil, tablet y desktop.",
          "Navbar y footer coherentes con el sistema de diseno base.",
          "Accesibilidad: navegacion por teclado funcional.",
        ],
        definitionOfDone: [
          "Navbar y footer implementados en el layout principal.",
          "Responsive validado en los tres breakpoints.",
          "Accesibilidad validada con herramienta de auditoría.",
        ],
        tasks: [
          {
            id: "T-04-1",
            title: "Crear componente Navbar con todos sus elementos",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-04-2",
            title: "Crear componente Footer con todos sus enlaces",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-04-3",
            title: "Validar responsive en los tres breakpoints",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-04-4",
            title: "Validar accesibilidad y navegacion por teclado",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-04-5",
            title: "Integrar navbar y footer en layout base del proyecto",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-04-6",
            title:
              "Implementar logica de interaccion del menu de perfil y notificaciones",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },

      // =======================================================
      // SPRINT 2  Autenticacion Base (18 pts)
      // =======================================================
      {
        code: "HU-05",
        title: "Registro y login de usuarios con JWT",
        sprint: "S2",
        epic: "E-2 Autenticacion y Seguridad",
        points: 8,
        description:
          "Como usuario del sistema\nQuiero poder registrarme e iniciar sesion de forma segura\nPara acceder al sistema con mis credenciales y un token de sesion valido.",
        acceptanceCriteria: [
          "Endpoint POST /auth/login recibe email y contrasena y retorna JWT valido.",
          "Contrasenas almacenadas con hashing bcrypt minimo 12 rounds.",
          "JWT firmado con llave privada y expiracion configurable.",
          "Token de refresco implementado para renovacion de sesion.",
          "Login rechazado con credenciales invalidas (error 401).",
          "Registro valida email unico, contrasena fuerte y campos requeridos.",
          "Logs de inicio de sesion registrados con IP, dispositivo y hora.",
        ],
        definitionOfDone: [
          "Endpoints de login y registro documentados en OpenAPI.",
          "Pruebas unitarias del modulo de autenticacion completas.",
          "SonarCloud en verde para este modulo.",
          "Revisado por Ivan (DevOps) para validacion de seguridad.",
        ],
        tasks: [
          {
            id: "T-05-1",
            title: "Implementar endpoint POST /auth/register",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-05-2",
            title: "Implementar endpoint POST /auth/login con JWT",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-05-3",
            title: "Configurar hashing de contrasenas con bcrypt",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-05-4",
            title: "Implementar token de refresco",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-05-5",
            title: "Escribir pruebas unitarias del modulo de auth",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-06",
        title: "Diseno de pantallas de autenticacion",
        sprint: "S2",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como usuario nuevo\nQuiero contar con pantallas de login, recuperacion de contrasena y registro claras y accesibles\nPara ingresar al sistema sin friccion.",
        acceptanceCriteria: [
          "Pantalla de login con campos de email y contrasena, boton de ingreso y enlace a recuperar contrasena.",
          "Pantalla de recuperacion de contrasena con campo de email y confirmacion.",
          "Modal de aceptacion de Terminos y Condiciones que aparece obligatoriamente al registrarse.",
          "Mensajes de error y exito visibles y comprensibles.",
          "Diseno responsive adaptado a perfil de usuario adulto: tamano de fuente minimo 14px.",
          "Sin distracciones visuales, formulario centrado y limpio.",
        ],
        definitionOfDone: [
          "Pantallas implementadas e integradas con el flujo de autenticacion.",
          "Modal de terminos funcional.",
          "Validaciones visuales de campos activas.",
        ],
        tasks: [
          {
            id: "T-06-1",
            title: "Disenar y maquetar pantalla de login",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-06-2",
            title: "Disenar y maquetar pantalla de recuperacion de contrasena",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-06-3",
            title: "Crear modal de Terminos y Condiciones obligatorio",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-06-4",
            title: "Integrar validaciones visuales de formulario",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-06-5",
            title:
              "Implementar pantallas de login y recuperacion de contrasena en frontend",
            assignedTo: "Ivan Ausecha",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },
      {
        code: "HU-07",
        title:
          "Configuracion de variables de entorno y seguridad en despliegue",
        sprint: "S2",
        epic: "E-1 Infraestructura y DevOps",
        points: 5,
        description:
          "Como DevOps del equipo\nQuiero gestionar variables de entorno de forma segura y tener el entorno de desarrollo funcionando correctamente\nPara proteger credenciales y facilitar el trabajo del equipo.",
        acceptanceCriteria: [
          "Archivo .env.example creado con todas las variables necesarias documentadas.",
          "Variables de entorno para JWT_SECRET, DB_URL, EMAIL_HOST y configuraciones de seguridad definidas.",
          "Entorno de desarrollo dockerizado para homogeneidad entre miembros.",
          "Documentacion de instalacion y configuracion local actualizada.",
          "Secretos no expuestos en el repositorio validado en pipeline.",
        ],
        definitionOfDone: [
          "Todo el equipo puede levantar el entorno local en menos de 15 minutos.",
          "Pipeline revisa que no haya secretos expuestos.",
          "README.md de configuracion de entorno aprobado.",
        ],
        tasks: [
          {
            id: "T-07-1",
            title: "Crear y documentar archivo .env.example",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-07-2",
            title: "Configurar Docker Compose para entorno local",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-07-3",
            title: "Agregar validacion de secretos al pipeline CI",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-07-4",
            title: "Actualizar README con guia de configuracion local",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },

      // =======================================================
      // SPRINT 3  Seguridad Avanzada (18 pts)
      // =======================================================
      {
        code: "HU-08",
        title: "Autenticacion de doble factor (2FA)",
        sprint: "S3",
        epic: "E-2 Autenticacion y Seguridad",
        points: 8,
        description:
          "Como usuario del sistema\nQuiero configurar y usar autenticacion en dos pasos\nPara proteger mi cuenta incluso si mis credenciales son comprometidas.",
        acceptanceCriteria: [
          "Usuario puede activar 2FA desde su perfil.",
          "Implementacion con TOTP (Google Authenticator / Authenticator Apps).",
          "Al activar 2FA, se muestra codigo QR para registro en la app de autenticacion.",
          "El sistema solicita el codigo 2FA en cada inicio de sesion si esta activado.",
          "Codigos de respaldo generados y entregados al usuario al configurar 2FA.",
          "Desactivacion de 2FA requiere confirmacion de contrasena actual.",
          "Logs de uso de 2FA registrados en el sistema de auditoria.",
        ],
        definitionOfDone: [
          "2FA funcional integrado con el flujo de login existente.",
          "Pruebas de integracion del flujo completo de 2FA.",
          "Revisado por Francesco para validacion de integracion backend.",
        ],
        tasks: [
          {
            id: "T-08-1",
            title: "Configurar libreria TOTP para generacion de codigos",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-08-2",
            title: "Implementar endpoint de activacion y verificacion de 2FA",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-08-3",
            title: "Generar y entregar codigos de respaldo al usuario",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-08-4",
            title: "Integrar middleware de 2FA en el flujo de login",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-08-5",
            title: "Escribir pruebas de integracion del flujo 2FA",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-08-6",
            title:
              "Implementar pantalla de verificacion de codigo 2FA en frontend",
            assignedTo: "Ivan Ausecha",
            role: "Frontend",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },
      {
        code: "HU-09",
        title: "Recuperacion de contrasena por correo electronico",
        sprint: "S3",
        epic: "E-2 Autenticacion y Seguridad",
        points: 5,
        description:
          "Como usuario que olvido su contrasena\nQuiero recibir un enlace de recuperacion en mi correo institucional\nPara restablecer mi acceso de forma segura.",
        acceptanceCriteria: [
          "Usuario ingresa su email y recibe un correo con enlace de recuperacion valido por 30 minutos.",
          "Enlace de recuperacion es de un solo uso.",
          "Pantalla de restablecimiento permite ingresar nueva contrasena con confirmacion.",
          "Nueva contrasena debe cumplir politica de seguridad (minimo 8 caracteres, mayuscula, numero y caracter especial).",
          "Registro del restablecimiento en logs de auditoria.",
        ],
        definitionOfDone: [
          "Flujo de recuperacion funcional de extremo a extremo.",
          "Correo enviado correctamente en entorno de prueba.",
          "Enlace expirado correctamente despues de uso o tiempo limite.",
        ],
        tasks: [
          {
            id: "T-09-1",
            title: "Implementar endpoint de solicitud de recuperacion",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-09-2",
            title: "Configurar servicio de envio de correo (SMTP/Sendgrid)",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-09-3",
            title: "Implementar token de recuperacion de uso unico",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-09-4",
            title:
              "Implementar pantalla de restablecimiento de contrasena en frontend",
            assignedTo: "Ivan Ausecha",
            role: "Frontend",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },
      {
        code: "HU-10",
        title: "Control de acceso por roles y middleware de autorizacion",
        sprint: "S3",
        epic: "E-2 Autenticacion y Seguridad",
        points: 5,
        description:
          "Como administrador del sistema\nQuiero que cada endpoint del API verifique el rol del usuario antes de ejecutar cualquier accion\nPara garantizar la separacion de funciones y prevenir accesos no autorizados.",
        acceptanceCriteria: [
          "Middleware de autorizacion verifica JWT y extrae rol en cada request protegido.",
          "Roles implementados: Liquidador, Administrador, Pagador, Superusuario.",
          "Acceso denegado (403) si el rol no tiene permiso sobre el recurso.",
          "Sistema multi-entidad: usuarios solo acceden a datos de su entidad.",
          "Separacion de funciones validada: liquidador no paga, pagador no liquida, administrador no calcula.",
        ],
        definitionOfDone: [
          "Middleware aplicado a todos los endpoints protegidos.",
          "Pruebas de control de acceso completadas para cada rol.",
          "Esquema de roles documentado.",
        ],
        tasks: [
          {
            id: "T-10-1",
            title: "Implementar middleware de autorizacion por rol",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-10-2",
            title: "Definir y configurar los cuatro roles del sistema",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-10-3",
            title: "Implementar aislamiento multi-entidad en queries",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-10-4",
            title: "Escribir pruebas de acceso denegado para cada rol",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },

      // =======================================================
      // SPRINT 4  Superusuario y Estructura Institucional (18 pts)
      // =======================================================
      {
        code: "HU-11",
        title: "Creacion y gestion de departamentos y entidades publicas",
        sprint: "S4",
        epic: "E-3 Gestion de Entidades (Superusuario)",
        points: 8,
        description:
          "Como Superusuario\nQuiero crear y gestionar departamentos y entidades publicas en el sistema\nPara habilitar nuevas entidades que puedan operar en la plataforma.",
        acceptanceCriteria: [
          "Endpoint para crear entidad publica con: departamento, ciudad, nombre, tipo, NIT, direccion, contacto y estado.",
          "Endpoint para activar y desactivar entidades.",
          "Listado de entidades con paginacion y filtros.",
          "Entidad creada no puede acceder al sistema hasta ser activada.",
          "Superusuario no puede ver datos confidenciales de liquidaciones de ninguna entidad.",
          "Registro en logs de cada creacion, edicion y cambio de estado de entidad.",
        ],
        definitionOfDone: [
          "CRUD de entidades funcional y documentado.",
          "Pruebas de creacion y activacion/desactivacion completadas.",
          "Aislamiento de datos confidenciales validado.",
        ],
        tasks: [
          {
            id: "T-11-1",
            title:
              "Disenar modelo de datos para departamento, entidad y oficina",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-11-2",
            title: "Implementar CRUD de departamentos y entidades",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-11-3",
            title:
              "Implementar endpoint de activacion/desactivacion de entidad",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-11-4",
            title: "Agregar registro en logs de auditoria",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-11-5",
            title: "Disenar interfaz de gestion de entidades para Superusuario",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-11-6",
            title: "Implementar vista de gestion de entidades en frontend",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-12",
        title: "Creacion y configuracion de oficinas",
        sprint: "S4",
        epic: "E-3 Gestion de Entidades (Superusuario)",
        points: 5,
        description:
          "Como Superusuario\nQuiero crear oficinas dentro de cada entidad publica y asignarles un administrador\nPara estructurar el sistema acorde a la organizacion institucional real.",
        acceptanceCriteria: [
          "Endpoint para crear oficina con: entidad asociada, nombre, codigo interno, administrador asignado y estado.",
          "Oficina debe pertenecer a una entidad activa.",
          "Un administrador puede ser asignado a una sola oficina.",
          "Listado de oficinas por entidad con estado y administrador asignado.",
        ],
        definitionOfDone: [
          "CRUD de oficinas funcional.",
          "Relacion entre entidad y oficina validada en base de datos.",
          "Pruebas de asignacion de administrador completadas.",
        ],
        tasks: [
          {
            id: "T-12-1",
            title: "Implementar CRUD de oficinas",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-12-2",
            title: "Implementar asignacion de administrador a oficina",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-12-3",
            title: "Validar que oficina pertenece a entidad activa",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-12-4",
            title: "Implementar vista de gestion de oficinas en frontend",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-13",
        title: "Creacion de administradores y pagadores por el Superusuario",
        sprint: "S4",
        epic: "E-3 Gestion de Entidades (Superusuario)",
        points: 5,
        description:
          "Como Superusuario\nQuiero poder crear usuarios con rol de Administrador y Pagador para cada entidad\nPara que puedan comenzar a operar en el sistema una vez configurados.",
        acceptanceCriteria: [
          "Superusuario puede crear usuarios con rol Administrador o Pagador.",
          "El usuario creado recibe correo de bienvenida con instrucciones.",
          "Usuario nuevo tiene estado activo por defecto.",
          "Superusuario puede desactivar cualquier usuario.",
          "Superusuario solo ve datos de gestion (no datos de liquidaciones).",
        ],
        definitionOfDone: [
          "Flujo de creacion de administrador y pagador completo.",
          "Correo de bienvenida enviado correctamente.",
          "Aislamiento de datos confidenciales validado.",
        ],
        tasks: [
          {
            id: "T-13-1",
            title:
              "Implementar endpoint de creacion de usuario por Superusuario",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-13-2",
            title: "Configurar envio de correo de bienvenida",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-13-3",
            title: "Implementar desactivacion de usuario",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-13-4",
            title:
              "Implementar vista de creacion y gestion de administradores y pagadores en frontend",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },

      // =======================================================
      // SPRINT 5  Gestion Centralizada de Beneficiarios (18 pts)
      // =======================================================
      {
        code: "HU-38",
        title: "Registro y gestion del catalogo de beneficiarios",
        sprint: "S5",
        epic: "E-6 Gestion de Beneficiarios",
        points: 8,
        description:
          "Como Liquidador\nQuiero registrar, buscar y reutilizar los datos de un beneficiario desde una tabla centralizada\nPara no tener que ingresar los mismos datos personales en cada liquidacion del mismo ciudadano.",
        acceptanceCriteria: [
          "Endpoint POST /beneficiaries para registrar un nuevo beneficiario con: tipo/numero de documento, nombre completo, correo, telefono, direccion, ciudad, fecha de nacimiento, banco y numero de cuenta.",
          "Endpoint GET /beneficiaries?doc=<numero> para buscar beneficiario existente por documento.",
          "Endpoint PATCH /beneficiaries/:id para actualizar datos de contacto o bancarios.",
          "UNIQUE constraint sobre (doc_type, doc_number) — un ciudadano un registro.",
          "Validacion de todos los campos obligatorios con mensajes claros.",
          "Acceso restringido: solo liquidadores y administradores pueden consultar y registrar.",
          "Registro de auditoria en cada creacion y modificacion.",
        ],
        definitionOfDone: [
          "CRUD de beneficiarios funcional y documentado en OpenAPI.",
          "Constraint UNIQUE validado con prueba de registro duplicado.",
          "Pruebas unitarias del modulo de beneficiarios aprobadas.",
          "SonarCloud en verde para este modulo.",
        ],
        tasks: [
          {
            id: "T-38-1",
            title: "Disenar y migrar tabla beneficiaries en base de datos",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-38-2",
            title: "Implementar endpoint POST /beneficiaries",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-38-3",
            title: "Implementar endpoint GET /beneficiaries con busqueda por documento",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-38-4",
            title: "Implementar endpoint PATCH /beneficiaries/:id",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-38-5",
            title: "Agregar registro de auditoria en creacion y edicion de beneficiarios",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-38-6",
            title: "Escribir pruebas unitarias del modulo beneficiaries",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-39",
        title: "Busqueda y seleccion de beneficiario en el formulario de liquidacion",
        sprint: "S5",
        epic: "E-6 Gestion de Beneficiarios",
        points: 5,
        description:
          "Como Liquidador\nQuiero buscar un beneficiario existente por su numero de documento al crear una liquidacion\nPara recuperar sus datos automaticamente sin ingresarlos de nuevo.",
        acceptanceCriteria: [
          "Campo de busqueda por numero de documento en el paso de datos del beneficiario del formulario.",
          "Si el beneficiario existe: sus datos se autocompletan en el formulario.",
          "Si no existe: se habilita formulario de registro de nuevo beneficiario en el mismo flujo.",
          "Los datos autocargados son editables en ese paso (para corregir desactualizados).",
          "El beneficiario_id queda almacenado en la liquidacion como FK.",
          "Validacion: no se puede avanzar sin beneficiario vinculado.",
        ],
        definitionOfDone: [
          "Flujo de busqueda y autocompletado funcional en el formulario.",
          "beneficiary_id correctamente persistido en la liquidacion.",
          "Prueba de integracion del flujo completo aprobada.",
        ],
        tasks: [
          {
            id: "T-39-1",
            title: "Implementar logica de busqueda de beneficiario en backend al crear liquidacion",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-39-2",
            title: "Implementar componente de busqueda con autocompletado en frontend",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-39-3",
            title: "Validar vinculacion obligatoria de beneficiario antes de avanzar",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-40",
        title: "Interfaz de gestion del catalogo de beneficiarios",
        sprint: "S5",
        epic: "E-6 Gestion de Beneficiarios",
        points: 5,
        description:
          "Como Liquidador o Administrador\nQuiero contar con una pantalla para buscar, ver el historial y editar datos de beneficiarios registrados\nPara mantener el catalogo actualizado y resolver inconsistencias facilmente.",
        acceptanceCriteria: [
          "Pantalla de listado con filtros: busqueda por nombre o documento, paginacion.",
          "Vista de detalle del beneficiario: datos personales, bancarios y liquidaciones asociadas.",
          "Formulario de edicion de datos de contacto y bancarios.",
          "El liquidador solo puede ver beneficiarios de sus propias liquidaciones.",
          "El administrador puede ver todos los de su oficina.",
          "Diseno coherente con el sistema de diseno del proyecto.",
        ],
        definitionOfDone: [
          "Pantallas de listado, detalle y edicion implementadas.",
          "Control de acceso por rol validado.",
          "Responsive validado en los tres breakpoints.",
        ],
        tasks: [
          {
            id: "T-40-1",
            title: "Disenar wireframe de pantallas del modulo de beneficiarios",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-40-2",
            title: "Implementar listado y filtros de beneficiarios",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-40-3",
            title: "Implementar vista de detalle y formulario de edicion de beneficiario",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-40-4",
            title: "Conectar pantallas con endpoints de beneficiarios",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },

      // =======================================================
      // SPRINT 6  Administrador: Sentencias y Vistas (18 pts)
      // =======================================================
      {
        code: "HU-14",
        title: "Registro de sentencias por el Administrador",
        sprint: "S6",
        epic: "E-4 Gestion de Sentencias",
        points: 8,
        description:
          "Como Administrador\nQuiero registrar sentencias judiciales en el sistema con toda la informacion requerida\nPara dejar constancia oficial del fallo y habilitar la creacion de liquidaciones.",
        acceptanceCriteria: [
          "Formulario con campos: numero de radicado, tipo de proceso, fecha de ingreso, juzgado, resumen del fallo, oficina asignada, prioridad, fecha limite y archivos adjuntos.",
          "Adjuntar documentos obligatorios: copia de sentencia y acto administrativo.",
          "Sentencia queda en estado inicial al ser registrada.",
          "Validacion de campos obligatorios con mensajes claros.",
          "Registro auditado con usuario, fecha y hora.",
          "Administrador solo puede registrar sentencias de su propia entidad y oficina.",
        ],
        definitionOfDone: [
          "Endpoint de registro de sentencia funcional y documentado.",
          "Pruebas de validacion de campos y adjuntos completadas.",
          "Registro de auditoria validado.",
        ],
        tasks: [
          {
            id: "T-14-1",
            title: "Disenar modelo de datos para sentencias",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-14-2",
            title: "Implementar endpoint POST /sentences",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-14-3",
            title: "Implementar carga y almacenamiento de archivos adjuntos",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-14-4",
            title: "Agregar registro de auditoria al crear sentencia",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-15",
        title: "Diseno de vistas y dashboard del Administrador",
        sprint: "S6",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como Administrador\nQuiero contar con un dashboard claro que muestre el estado global de mi oficina\nPara gestionar de manera eficiente sentencias, asignaciones y reportes.",
        acceptanceCriteria: [
          "Dashboard muestra: total sentencias, en proceso, pagadas y alertas de vencimiento.",
          "Acceso rapido a las secciones: Sentencias, Asignaciones, Liquidaciones, Usuarios y Reportes.",
          "Indicadores visuales claros para casos urgentes o vencidos.",
          "Diseno sobrio: colores institucionales, sin elementos decorativos innecesarios.",
          "Experiencia tipo tabla estructurada, similar a entorno de gestion administrativa.",
        ],
        definitionOfDone: [
          "Dashboard disenado e implementado.",
          "Validado con criterios de accesibilidad.",
          "Responsive en todos los breakpoints.",
        ],
        tasks: [
          {
            id: "T-15-1",
            title:
              "Disenar wireframe y prototipo del dashboard de administrador",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-15-2",
            title: "Maquetar dashboard con componentes del sistema de diseno",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-15-3",
            title: "Implementar indicadores visuales de alerta y estado",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-15-4",
            title:
              "Conectar dashboard con endpoints de API y renderizar datos reales",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },
      {
        code: "HU-16",
        title: "Gestion de usuarios liquidadores por el Administrador",
        sprint: "S6",
        epic: "E-4 Gestion de Sentencias",
        points: 5,
        description:
          "Como Administrador\nQuiero crear, activar y desactivar usuarios liquidadores en mi oficina\nPara controlar quienes pueden ingresar y operar liquidaciones.",
        acceptanceCriteria: [
          "Formulario de creacion de liquidador con: nombre, documento, correo institucional, oficina, rol y estado.",
          "El liquidador recibe correo de bienvenida con acceso inicial.",
          "Administrador puede activar y desactivar liquidadores.",
          "Administrador puede ver el historial de actividad del liquidador.",
          "No puede crear usuarios fuera de su propia oficina.",
        ],
        definitionOfDone: [
          "CRUD de liquidadores funcional.",
          "Correo de activacion enviado correctamente.",
          "Restriccion de oficina validada.",
        ],
        tasks: [
          {
            id: "T-16-1",
            title: "Implementar endpoint de creacion de liquidadores",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-16-2",
            title: "Implementar activacion y desactivacion de liquidadores",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-16-3",
            title:
              "Implementar consulta de historial de actividad del liquidador",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },

      // =======================================================
      // SPRINT 7  Asignacion y Creacion de Liquidaciones (18 pts)
      // =======================================================
      {
        code: "HU-17",
        title: "Asignacion de liquidaciones a liquidadores",
        sprint: "S7",
        epic: "E-4 Gestion de Sentencias",
        points: 5,
        description:
          "Como Administrador\nQuiero asignar liquidaciones a liquidadores especificos con fecha estimada de entrega\nPara hacer seguimiento y controlar los tiempos de respuesta.",
        acceptanceCriteria: [
          "Administrador selecciona sentencia y la asigna a un liquidador de su oficina.",
          "Se registra: ID de liquidacion, liquidador asignado, fecha de asignacion, fecha estimada y observaciones.",
          "Liquidador asignado recibe notificacion de la nueva asignacion.",
          "Administrador puede reasignar un caso a otro liquidador.",
          "Registro auditado de cada asignacion y reasignacion.",
        ],
        definitionOfDone: [
          "Endpoints de asignacion y reasignacion funcionales.",
          "Notificaciones enviadas correctamente.",
          "Auditoria de asignaciones validada.",
        ],
        tasks: [
          {
            id: "T-17-1",
            title: "Implementar endpoint de asignacion de liquidacion",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-17-2",
            title: "Implementar endpoint de reasignacion",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-17-3",
            title: "Configurar notificacion al liquidador asignado",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-18",
        title: "Creacion y edicion de liquidacion por el Liquidador",
        sprint: "S7",
        epic: "E-5 Liquidaciones  Creacion y Edicion",
        points: 8,
        description:
          "Como Liquidador\nQuiero crear y editar una liquidacion a partir de una sentencia asignada\nPara ingresar todos los datos tecnicos necesarios del caso.",
        acceptanceCriteria: [
          "Formulario con secciones: identificacion del caso, seleccion del beneficiario, datos laborales, calculo y adjuntos.",
          "Campos de identificacion: ID liquidacion, numero sentencia, radicado, juzgado, fecha sentencia, tipo fallo, oficina, entidad.",
          "Seleccion del beneficiario: busqueda por numero de documento en el catalogo centralizado. Si no existe, se permite registrar uno nuevo en el mismo flujo (nuevo beneficiario queda en la tabla beneficiaries).",
          "Datos laborales: fechas de inicio/terminacion, tipo contrato, regimen, salario, factores salariales.",
          "Liquidador solo accede a sus liquidaciones asignadas.",
          "Edicion requiere autorizacion del Administrador si ya fue marcada como terminada.",
          "Estado cambia automaticamente a 'En proceso' al iniciar edicion.",
        ],
        definitionOfDone: [
          "Formulario completo implementado y validado.",
          "Flujo de estados automatico probado.",
          "Control de acceso validado (solo liquidaciones propias).",
        ],
        tasks: [
          {
            id: "T-18-1",
            title: "Disenar modelo de datos completo de liquidacion",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-18-2",
            title: "Implementar endpoint POST /liquidations",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-18-3",
            title: "Implementar endpoint PATCH /liquidations/:id",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-18-4",
            title: "Implementar transicion automatica de estado a En proceso",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-18-5",
            title: "Validar acceso solo a liquidaciones propias del liquidador",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-19",
        title: "Diseno del formulario de liquidacion",
        sprint: "S7",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como Liquidador\nQuiero un formulario de liquidacion organizado por secciones con navegacion clara\nPara completar la informacion sin perderse ni cometer errores.",
        acceptanceCriteria: [
          "Formulario organizado en pasos o secciones claramente diferenciadas.",
          "Barra de progreso que muestra en que seccion se encuentra el usuario.",
          "Validaciones en linea que alertan antes de avanzar al siguiente paso.",
          "Campo numericos con formato automatico (miles, decimales).",
          "Diseno tipo planilla estructurada: claro, sin adornos, enfocado en datos.",
          "Boton de guardado provisional visible en todo momento.",
        ],
        definitionOfDone: [
          "Formulario implementado e integrado con el backend.",
          "Validaciones visuales activas.",
          "Probado con usuario de perfil administrativo no tecnico.",
        ],
        tasks: [
          {
            id: "T-19-1",
            title: "Disenar wireframe del formulario por secciones",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-19-2",
            title: "Implementar formulario multi-paso con barra de progreso",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-19-3",
            title:
              "Implementar validaciones en linea y formato de campos numericos",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-19-4",
            title: "Integrar formulario con endpoints de creacion y edicion",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },

      // =======================================================
      // SPRINT 8  Calculos y Calidad (18 pts)
      // =======================================================
      {
        code: "HU-20",
        title: "Ingreso de datos laborales del beneficiario seleccionado",
        sprint: "S8",
        epic: "E-5 Liquidaciones  Creacion y Edicion",
        points: 5,
        description:
          "Como Liquidador\nQuiero ingresar los datos laborales del beneficiario previamente seleccionado en el formulario\nPara que queden registrados correctamente y sirvan de base para el calculo.",
        acceptanceCriteria: [
          "El beneficiario ya fue seleccionado o registrado en el paso anterior gracias al catalogo centralizado.",
          "Campos laborales: fecha inicio, fecha fin, tipo contrato, regimen y salario base obligatorios.",
          "Factores salariales adicionales, bonificaciones y auxilios son opcionales.",
          "Prima tecnica y horas extras habilitados segun tipo de vinculacion.",
          "Tiempo total laborado calculado automaticamente al ingresar fechas.",
        ],
        definitionOfDone: [
          "Todos los campos validados correctamente en frontend y backend.",
          "Calculo automatico de tiempo laborado funcionando.",
          "Datos persistidos correctamente en base de datos.",
        ],
        tasks: [
          {
            id: "T-20-1",
            title:
              "Implementar validaciones de datos laborales en backend (salario, fechas, contrato)",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-20-2",
            title: "Implementar logica de calculo de tiempo laborado",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-20-3",
            title: "Validar campos condicionales segun tipo de vinculacion",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-21",
        title: "Calculo automatico de liquidacion",
        sprint: "S8",
        epic: "E-5 Liquidaciones  Creacion y Edicion",
        points: 8,
        description:
          "Como Liquidador\nQuiero que el sistema calcule automaticamente el valor de la liquidacion a partir de los datos ingresados\nPara evitar errores manuales y garantizar precision en los montos.",
        acceptanceCriteria: [
          "Calculo incluye: base salarial, dias liquidados, intereses, indexacion, ajustes por IPC, retenciones aplicables y valor neto.",
          "Calculo se ejecuta en el servidor, no en el cliente.",
          "Resultado desglosado visible para el liquidador antes de confirmar.",
          "Calculo rechazado con mensaje claro si hay campos faltantes.",
          "Historial de calculos guardado para auditoria.",
          "El calculo no puede ser modificado manualmente por el liquidador; solo recalcular cambiando datos.",
        ],
        definitionOfDone: [
          "Motor de calculo implementado y probado con casos reales.",
          "Desglose de calculo visible en la interfaz.",
          "Historial de calculos persistido correctamente.",
        ],
        tasks: [
          {
            id: "T-21-1",
            title: "Implementar motor de calculo de liquidacion en backend",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-21-2",
            title: "Implementar endpoint POST /liquidations/:id/calculate",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-21-3",
            title: "Implementar desglose de calculo en respuesta del endpoint",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-21-4",
            title: "Persistir historial de calculos en base de datos",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-21-5",
            title: "Mostrar desglose de calculo en la interfaz del liquidador",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-22",
        title: "Integracion de SonarCloud y calidad de codigo avanzada",
        sprint: "S8",
        epic: "E-1 Infraestructura y DevOps",
        points: 5,
        description:
          "Como DevOps del equipo\nQuiero integrar SonarCloud en el pipeline para analisis continuo de calidad y seguridad del codigo\nPara detectar vulnerabilidades, code smells y deuda tecnica de forma automatica.",
        acceptanceCriteria: [
          "SonarCloud integrado con el repositorio de GitHub.",
          "Analisis corre automaticamente en cada pull request.",
          "Pipeline falla si SonarCloud detecta vulnerabilidades criticas o code smells bloqueantes.",
          "Cobertura de pruebas reportada en SonarCloud.",
          "Badge de calidad de SonarCloud visible en el README.",
        ],
        definitionOfDone: [
          "SonarCloud configurado y reportando en el repositorio.",
          "Pipeline falla correctamente ante vulnerabilidades criticas.",
          "README actualizado con badge de calidad.",
        ],
        tasks: [
          {
            id: "T-22-1",
            title: "Crear proyecto en SonarCloud y obtener token",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-22-2",
            title: "Integrar step de SonarCloud en GitHub Actions",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-22-3",
            title: "Configurar quality gates de bloqueo",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-22-4",
            title: "Actualizar README con badge de calidad",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },

      // =======================================================
      // SPRINT 9  Documentos PDF y Adjuntos (18 pts)
      // =======================================================
      {
        code: "HU-23",
        title: "Generacion de PDF oficial de liquidacion",
        sprint: "S9",
        epic: "E-8 Generacion de Documentos",
        points: 8,
        description:
          "Como Liquidador\nQuiero generar un PDF oficial de la liquidacion con el formato institucional requerido\nPara presentarlo como documento oficial ante la entidad y el beneficiario.",
        acceptanceCriteria: [
          "PDF incluye: encabezado institucional, datos del beneficiario, resumen del calculo, desglose detallado, firma digital del liquidador, fecha y codigo de verificacion.",
          "PDF generado en el servidor, no en el cliente.",
          "Codigo de verificacion unico por documento.",
          "PDF descargable desde la aplicacion.",
          "Formato validado con el estandar institucional acordado.",
          "Solo se puede generar PDF de liquidaciones en estado Terminada.",
        ],
        definitionOfDone: [
          "Generacion de PDF funcional con todos los campos requeridos.",
          "Codigo de verificacion persistido y verificable.",
          "Descarga funcional desde la interfaz.",
        ],
        tasks: [
          {
            id: "T-23-1",
            title:
              "Integrar libreria de generacion de PDF (PDFKit / Puppeteer)",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-23-2",
            title: "Implementar plantilla HTML del PDF institucional",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-23-3",
            title: "Implementar generacion de codigo de verificacion unico",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-23-4",
            title: "Implementar endpoint GET /liquidations/:id/pdf",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-23-5",
            title: "Implementar descarga del PDF en la interfaz",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-24",
        title: "Adjuntar y gestionar documentos de soporte",
        sprint: "S9",
        epic: "E-8 Generacion de Documentos",
        points: 5,
        description:
          "Como Liquidador\nQuiero adjuntar documentos de soporte a cada liquidacion (copia sentencia, soportes laborales, acto administrativo)\nPara mantener el expediente digital completo y accesible.",
        acceptanceCriteria: [
          "Los documentos admitidos son: PDF, JPG, PNG, con limite de 10MB por archivo.",
          "El Liquidador puede cargar multiples archivos por liquidacion.",
          "Archivos listados y descargables por tipo.",
          "El Administrador y el Pagador pueden ver y descargar los adjuntos.",
          "Los archivos eliminados quedan registrados en auditoria.",
        ],
        definitionOfDone: [
          "Carga y descarga de archivos funcional.",
          "Limite de tamano validado.",
          "Listado de documentos por liquidacion funcional.",
        ],
        tasks: [
          {
            id: "T-24-1",
            title:
              "Implementar servicio de almacenamiento de archivos (S3 o equivalente)",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-24-2",
            title: "Implementar endpoints de carga y descarga de adjuntos",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-24-3",
            title: "Implementar validaciones de tipo y tamano de archivo",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-25",
        title: "Diseno del modulo de documentos y visor de PDF",
        sprint: "S9",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como usuario del sistema\nQuiero poder visualizar los documentos PDF desde la plataforma sin necesidad de descargarlos\nPara revisar el contenido rapidamente dentro del sistema.",
        acceptanceCriteria: [
          "Visor de PDF embebido en la interfaz.",
          "Opcion de descarga disponible junto al visor.",
          "Lista de adjuntos clara con nombre, tipo, fecha de carga y acciones.",
          "Interfaz funcional en movil y desktop.",
        ],
        definitionOfDone: [
          "Visor de PDF implementado y funcional.",
          "Lista de adjuntos correctamente renderizada.",
          "Responsive validado.",
        ],
        tasks: [
          {
            id: "T-25-1",
            title: "Integrar componente de visor de PDF en la interfaz",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-25-2",
            title:
              "Disenar lista de adjuntos con acciones de visualizacion y descarga",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-25-3",
            title: "Conectar visor y lista de adjuntos con API de documentos",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },

      // =======================================================
      // SPRINT 10  Flujo de Pagos (18 pts)
      // =======================================================
      {
        code: "HU-26",
        title: "Visualizacion de liquidaciones terminadas por el Pagador",
        sprint: "S10",
        epic: "E-7 Pagos y Comprobantes",
        points: 5,
        description:
          "Como Pagador (Hacienda)\nQuiero ver el listado de liquidaciones marcadas como terminadas\nPara conocer los casos pendientes de pago y su detalle.",
        acceptanceCriteria: [
          "El Pagador accede a un listado de liquidaciones en estado Terminada.",
          "Cada entrada muestra: ID liquidacion, beneficiario, oficina, valor aprobado, fecha de terminacion, liquidador y soporte PDF.",
          "Filtros disponibles: por fecha, valor, oficina.",
          "Paginacion implementada para grandes volumenes.",
          "El Pagador no puede crear ni editar liquidaciones.",
        ],
        definitionOfDone: [
          "Listado de liquidaciones terminadas funcional para el Pagador.",
          "Control de acceso (solo ver, no editar) validado.",
          "Filtros y paginacion funcionando.",
        ],
        tasks: [
          {
            id: "T-26-1",
            title:
              "Implementar endpoint GET /liquidations?status=finished para pagador",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-26-2",
            title: "Disenar wireframe del dashboard del Pagador",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-26-3",
            title: "Implementar filtros y paginacion en la vista del Pagador",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-26-4",
            title: "Implementar dashboard del Pagador y conectar con API",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-27",
        title: "Registro de pago y carga de comprobante",
        sprint: "S10",
        epic: "E-7 Pagos y Comprobantes",
        points: 8,
        description:
          "Como Pagador\nQuiero registrar el pago de una liquidacion y cargar el comprobante de pago\nPara que el sistema actualice el estado a Pagada y quede el soporte contable adjunto.",
        acceptanceCriteria: [
          "Formulario de pago con: fecha de pago, numero de comprobante, valor pagado, banco, medio de pago, archivo comprobante y observacion.",
          "Al confirmar el pago, el estado de la liquidacion cambia automaticamente a Pagada.",
          "Solo el Pagador puede ejecutar esta accion.",
          "Registro completo en auditoria: usuario, fecha, hora, valor y comprobante.",
          "El comprobante queda adjunto y descargable.",
          "Historial de pagos accesible desde la interfaz del Pagador.",
        ],
        definitionOfDone: [
          "Flujo de registro de pago completo y funcional.",
          "Estado de liquidacion actualizado a Pagada.",
          "Comprobante adjunto y descargable.",
          "Auditoria del pago registrada.",
        ],
        tasks: [
          {
            id: "T-27-1",
            title: "Implementar endpoint POST /liquidations/:id/payment",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-27-2",
            title:
              "Implementar transicion de estado a Pagada tras registro de pago",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-27-3",
            title: "Implementar carga del comprobante de pago",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-27-4",
            title: "Disenar formulario de registro de pago",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-27-5",
            title: "Implementar historial de pagos en interfaz del Pagador",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-27-6",
            title:
              "Implementar formulario de registro de pago e integrar con API",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-28",
        title: "Diseno del modulo de pagos y alertas presupuestales",
        sprint: "S10",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como Pagador\nQuiero tener un modulo claro con alertas de liquidaciones pendientes y un resumen del mes\nPara gestionar eficientemente el presupuesto y no omitir pagos.",
        acceptanceCriteria: [
          "Dashboard del Pagador muestra: liquidaciones pendientes de pago, total del mes y alertas presupuestales.",
          "Alertas visuales para liquidaciones proximas a vencer.",
          "Resumen financiero mensual visible.",
          "Diseno coherente con el sistema visual del proyecto.",
        ],
        definitionOfDone: [
          "Dashboard del Pagador completamente implementado.",
          "Alertas visuales funcionando.",
          "Responsive validado.",
        ],
        tasks: [
          {
            id: "T-28-1",
            title: "Disenar dashboard del Pagador con indicadores clave",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-28-2",
            title: "Implementar alertas visuales de vencimiento",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-28-3",
            title: "Implementar resumen financiero mensual y conectar con API",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },

      // =======================================================
      // SPRINT 11  Auditoria, Logs y Testing (18 pts)
      // =======================================================
      {
        code: "HU-29",
        title: "Microservicio de logs y auditoria",
        sprint: "S11",
        epic: "E-9 Reportes y Auditoria",
        points: 8,
        description:
          "Como sistema\nQuiero registrar automaticamente cada accion significativa con todos sus metadatos\nPara garantizar la trazabilidad total de actos administrativos exigida por el marco legal.",
        acceptanceCriteria: [
          "Se registran: IP, dispositivo, navegador, hora, usuario, accion realizada, resultado y microservicio origen.",
          "Logs de: inicio de sesion, creacion/edicion/eliminacion de sentencias, cambios de estado, generacion de PDF, registro de pago.",
          "Microservicio de logs separado del resto de la aplicacion.",
          "Logs no modificables por ningun usuario, incluido el Superusuario.",
          "Retention de logs configurada (minimo 2 anos).",
        ],
        definitionOfDone: [
          "Microservicio de logs funcionando y registrando todas las acciones criticas.",
          "Logs accessibles para Superusuario mediante filtros.",
          "Pruebas de integridad de logs completadas.",
        ],
        tasks: [
          {
            id: "T-29-1",
            title: "Disenar esquema de base de datos para logs de auditoria",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-29-2",
            title: "Implementar microservicio de logs desacoplado",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-29-3",
            title: "Integrar hook de auditoria en todos los endpoints criticos",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-29-4",
            title: "Configurar politica de retencion de logs",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-30",
        title: "Dashboard de auditoria global para Superusuario",
        sprint: "S11",
        epic: "E-9 Reportes y Auditoria",
        points: 5,
        description:
          "Como Superusuario\nQuiero ver y filtrar el log de auditoria global del sistema\nPara monitorear actividad sospechosa y cumplir con los requisitos normativos de trazabilidad.",
        acceptanceCriteria: [
          "Dashboard de auditoria con filtros: usuario, entidad, tipo de accion, fecha, IP.",
          "Alertas de actividad sospechosa: multiples intentos fallidos, acceso fuera de horario.",
          "Exportacion del log filtrado en CSV o PDF.",
          "El Superusuario no puede ver datos confidenciales de liquidaciones.",
        ],
        definitionOfDone: [
          "Dashboard de auditoria implementado y funcional.",
          "Filtros y exportacion funcionando.",
          "Aislamiento de datos confidenciales validado.",
        ],
        tasks: [
          {
            id: "T-30-1",
            title:
              "Implementar endpoint de consulta de logs con filtros avanzados",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-30-2",
            title:
              "Disenar e implementar dashboard de auditoria para Superusuario",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-30-3",
            title: "Implementar exportacion de logs en CSV/PDF",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-31",
        title: "Testing end-to-end y reporte de calidad del sprint",
        sprint: "S11",
        epic: "E-1 Infraestructura y DevOps",
        points: 5,
        description:
          "Como equipo de desarrollo\nQuiero ejecutar pruebas end-to-end que validen los flujos criticos del sistema\nPara garantizar que no hay regresiones y que la calidad del sprint es aceptable.",
        acceptanceCriteria: [
          "Pruebas E2E implementadas para: login, creacion de liquidacion, calculo, generacion PDF y registro de pago.",
          "Pruebas corren en el pipeline de CI.",
          "Reporte de cobertura accesible en SonarCloud.",
          "Ninguna prueba E2E fallida al cerrar el sprint.",
        ],
        definitionOfDone: [
          "Suite de pruebas E2E implementadas y corriendo en CI.",
          "Cobertura reportada en SonarCloud.",
          "Cero fallas al cierre del sprint.",
        ],
        tasks: [
          {
            id: "T-31-1",
            title: "Configurar framework de pruebas E2E (Cypress / Playwright)",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-31-2",
            title: "Escribir prueba E2E para flujo de login y autenticacion",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-31-3",
            title:
              "Escribir prueja E2E para flujo de creacion y calculo de liquidacion",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-31-4",
            title: "Escribir prueba E2E para flujo de pago",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-31-5",
            title: "Integrar suite E2E en pipeline de CI",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },

      // =======================================================
      // SPRINT 12  Reportes (18 pts)
      // =======================================================
      {
        code: "HU-32",
        title: "Reportes internos del Administrador por liquidador y oficina",
        sprint: "S12",
        epic: "E-9 Reportes y Auditoria",
        points: 8,
        description:
          "Como Administrador\nQuiero generar reportes internos de liquidaciones por liquidador, fecha y estado\nPara supervisar el desempeno de mi oficina y detectar retrasos a tiempo.",
        acceptanceCriteria: [
          "Filtros disponibles: fecha inicio/fin, liquidador, estado, tipo de proceso.",
          "Datos generados: total liquidaciones, total valor liquidado, total pagado, promedio tiempo de respuesta, casos pendientes.",
          "Reporte exportable en PDF y Excel.",
          "Administrador solo puede ver reportes de su propia oficina.",
          "Reporte de tiempos: dias promedio desde asignacion hasta terminacion.",
        ],
        definitionOfDone: [
          "Generacion de reportes funcional con todos los filtros.",
          "Exportacion en PDF y Excel funcionando.",
          "Restriccion de alcance de officina validada.",
        ],
        tasks: [
          {
            id: "T-32-1",
            title: "Implementar endpoints de reportes con filtros avanzados",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-32-2",
            title: "Implementar exportacion de reportes en PDF y Excel",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-32-3",
            title:
              "Disenar e implementar interfaz de reportes del Administrador",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-33",
        title: "Reportes globales para el Superusuario",
        sprint: "S12",
        epic: "E-9 Reportes y Auditoria",
        points: 5,
        description:
          "Como Superusuario\nQuiero acceder a reportes agregados por entidad sin ver datos confidenciales individuales\nPara supervisar el uso del sistema y generar indicadores estrategicos.",
        acceptanceCriteria: [
          "Reporte global con: total entidades activas, total liquidaciones globales, total valores procesados, estadisticas por entidad, indicadores de uso.",
          "Sin acceso a datos confidenciales de beneficiarios.",
          "Graficas comparativas entre entidades.",
          "Exportacion en PDF.",
        ],
        definitionOfDone: [
          "Reportes globales funcionales sin exponer datos confidenciales.",
          "Graficas implementadas.",
          "Exportacion en PDF funcionando.",
        ],
        tasks: [
          {
            id: "T-33-1",
            title: "Implementar endpoints de reportes globales agregados",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-33-2",
            title: "Disenar interfaz de reportes globales con graficas",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-33-3",
            title: "Implementar exportacion del reporte global en PDF",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-33-4",
            title:
              "Implementar interfaz de reportes globales e integrar con API",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Juan Francesco Garcia",
      },
      {
        code: "HU-34",
        title: "Diseno del modulo de reportes y graficas interactivas",
        sprint: "S12",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como usuario del sistema\nQuiero ver los reportes con graficas claras y exportables\nPara interpretar los datos rapidamente y presentarlos en informes institucionales.",
        acceptanceCriteria: [
          "Graficas de barras, lineas y torta segun el tipo de dato.",
          "Graficas interactivas con tooltips informativos.",
          "Paleta de colores coherente con el sistema de diseno.",
          "Graficas exportables como imagen PNG.",
          "Responsive: adaptadas a movil y desktop.",
        ],
        definitionOfDone: [
          "Modulo de graficas implementado con libreria de visualizacion.",
          "Exportacion de graficas funcional.",
          "Responsive validado.",
        ],
        tasks: [
          {
            id: "T-34-1",
            title: "Integrar libreria de graficas (Chart.js / D3)",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-34-2",
            title: "Disenar componentes de grafica segun tipo de reporte",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-34-3",
            title: "Implementar exportacion de graficas como PNG",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },

      // =======================================================
      // SPRINT 13  Pulido Final y Preparacion para Demo (18 pts)
      // =======================================================
      {
        code: "HU-35",
        title:
          "Modal de terminos y condiciones, perfil de usuario y accesibilidad",
        sprint: "S13",
        epic: "E-10 Diseno Visual y UX",
        points: 5,
        description:
          "Como usuario del sistema\nQuiero poder gestionar mi perfil, revisar los terminos y configurar preferencias de accesibilidad\nPara tener control sobre mi cuenta y cumplir con la politica institucional.",
        acceptanceCriteria: [
          "Modal de Terminos y Condiciones obligatorio en primer ingreso.",
          "Seccion de perfil: ver datos, editar contacto, cambiar contrasena y configurar 2FA.",
          "Opciones de accesibilidad: tamano de fuente ajustable, contraste alto.",
          "Politica de datos visible desde el footer.",
          "FAQ y Manual de usuario accesibles desde el footer.",
        ],
        definitionOfDone: [
          "Modal de terminos funcional.",
          "Perfil de usuario completamente implementado.",
          "Opciones de accesibilidad funcionando.",
        ],
        tasks: [
          {
            id: "T-35-1",
            title:
              "Implementar modal de Terminos y Condiciones con aceptacion obligatoria",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-35-2",
            title: "Implementar seccion de perfil de usuario completa",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
          {
            id: "T-35-3",
            title:
              "Implementar opciones de accesibilidad de fuente y contraste",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "Frontend",
          },
        ],
        assignedTo: "Adolfo Andrey Quiceno",
      },
      {
        code: "HU-36",
        title:
          "Validaciones de seguridad final y preparacion para despliegue en AWS",
        sprint: "S13",
        epic: "E-2 Autenticacion y Seguridad",
        points: 8,
        description:
          "Como equipo de desarrollo\nQuiero completar las validaciones de seguridad finales y preparar el entorno de produccion en AWS\nPara garantizar que el sistema sea seguro y este listo para ser presentado a la entidad.",
        acceptanceCriteria: [
          "Validacion de SQL Injection: todos los endpoints usan consultas parametrizadas.",
          "Validacion de JWT: llaves publica/privada, tokens con expiracion correcta.",
          "Validacion de IP y dispositivo en inicio de sesion configurada.",
          "Configuracion de Cloudflare como CDN y proteccion DDoS.",
          "Despliegue en AWS EC2/RDS configurado y documentado.",
          "HTTPS configurado en todos los endpoints.",
          "Variables de entorno de produccion configuradas correctamente.",
        ],
        definitionOfDone: [
          "Sistema desplegado en AWS y accesible por HTTPS.",
          "Reporte de seguridad final sin vulnerabilidades criticas.",
          "Documentacion de despliegue actualizada.",
        ],
        tasks: [
          {
            id: "T-36-1",
            title: "Auditar todos los endpoints para consultas parametrizadas",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-36-2",
            title: "Configurar llaves publica/privada para JWT en produccion",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-36-3",
            title: "Configurar Cloudflare y HTTPS",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-36-4",
            title: "Configurar instancias AWS EC2 y RDS",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-36-5",
            title: "Ejecutar reporte de seguridad final con SonarCloud",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },
      {
        code: "HU-37",
        title: "Documentacion tecnica de APIs y manual de usuario base",
        sprint: "S13",
        epic: "E-1 Infraestructura y DevOps",
        points: 5,
        description:
          "Como equipo y futuros usuarios del sistema\nQuiero tener una documentacion tecnica de los endpoints y un manual de usuario basico\nPara facilitar el mantenimiento del sistema y el onboarding de nuevos usuarios.",
        acceptanceCriteria: [
          "Documentacion de endpoints generada con OpenAPI / Swagger y accesible en /api/docs.",
          "Manual de usuario basico en formato PDF con flujos por rol.",
          "README principal del repositorio actualizado con arquitectura, instalacion y uso.",
          "Guia de contribucion documentada para futuros desarrolladores.",
        ],
        definitionOfDone: [
          "Documentacion de API accesible en /api/docs.",
          "Manual de usuario en PDF generado.",
          "README aprobado por el equipo.",
        ],
        tasks: [
          {
            id: "T-37-1",
            title: "Completar anotaciones OpenAPI en todos los endpoints",
            assignedTo: "Juan Francesco Garcia",
            role: "Backend",
          },
          {
            id: "T-37-2",
            title: "Configurar Swagger UI en /api/docs",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
          {
            id: "T-37-3",
            title: "Redactar manual de usuario basico con flujos por rol",
            assignedTo: "Adolfo Andrey Quiceno",
            role: "UX/UI",
          },
          {
            id: "T-37-4",
            title:
              "Actualizar README con arquitectura, instalacion y guia de contribucion",
            assignedTo: "Ivan Ausecha",
            role: "DevOps",
          },
        ],
        assignedTo: "Ivan Ausecha",
      },
    ],
  },
};

