// ============================================================
// design_patterns_data.js  Patrones de diseno aplicados a SILTGOV
// Sistema Integrado de Liquidaciones  Gobernacion del Valle
// Equipo: ClustLayer | Dev on time
// ============================================================

const DESIGN_PATTERNS_DATA = {
  meta: {
    title: "Patrones de Diseno",
    subtitle: "Decisiones de arquitectura y diseno del sistema SILTGOV",
    description:
      "Los patrones de diseno son soluciones reutilizables a problemas recurrentes en el desarrollo de software. SILTGOV adopta un conjunto de patrones seleccionados segun las necesidades del sistema: seguridad gubernamental, integridad financiera, trazabilidad de auditorias y mantenibilidad a largo plazo.",
  },

  categories: [
    {
      id: "arquitecturales",
      name: "Patrones Arquitecturales",
      color: "indigo",
      description:
        "Definen la organizacion macro del sistema: como se dividen los servicios, como se comunican y donde reside cada responsabilidad.",
      patterns: [
        {
          id: "microservices",
          name: "Arquitectura de Microservicios",
          type: "Arquitectural",
          intent:
            "Descomponer el sistema en servicios autonomos, cada uno con su propia responsabilidad, base de codigo y ciclo de despliegue.",
          problem:
            "Un sistema monolitico que gestiona autenticacion, logica de liquidaciones y auditoria al mismo tiempo se vuelve fragil: un fallo en el calculo de liquidaciones podria colapsar la autenticacion de usuarios.",
          solution:
            "SILTGOV se divide en 3 microservicios independientes: Servicio de Usuarios y Auth (maneja JWT y TOTP), Servicio de Liquidaciones (procesa calculos, genera PDFs y registra pagos), y Servicio de Logs y Auditoria (registra todas las acciones del sistema con retencion de 2 anos).",
          benefits: [
            "Despliegue independiente de cada servicio sin afectar los demas",
            "Escalabilidad horizontal del Servicio de Liquidaciones en periodos de pago masivo",
            "Fallo aislado: si el servicio de logs no responde, las liquidaciones siguen operando",
            "Equipos pueden trabajar en paralelo sobre servicios distintos",
          ],
          relatedFiles: ["project_data.js -> architecture.services"],
        },
        {
          id: "repository",
          name: "Repository Pattern",
          type: "Acceso a datos",
          intent:
            "Abstraer la capa de acceso a datos detras de una interfaz bien definida, desacoplando la logica de negocio de la implementacion de base de datos.",
          problem:
            "Si la logica de negocio del Servicio de Liquidaciones realiza consultas SQL directas, cualquier cambio de esquema o motor de base de datos requiere modificar el codigo de negocio en multiples lugares.",
          solution:
            "Cada entidad principal tiene su propio repositorio: BeneficiaryRepository (CRUD de beneficiarios con busqueda por documento), LiquidationRepository (creacion, consulta y cambio de estado), AuditRepository (insercion en batch de registros de auditoria). La capa de servicio solo conoce la interfaz del repositorio, no la implementacion SQL.",
          benefits: [
            "La logica de negocio no depende de PostgreSQL: se puede sustituir o mockear en pruebas",
            "Las consultas complejas quedan encapsuladas y son reutilizables",
            "Facilita pruebas unitarias al poder reemplazar repositorios con implementaciones en memoria",
            "El esquema beneficiaries centralizado es gestionado exclusivamente por BeneficiaryRepository",
          ],
          relatedFiles: ["database_data.js -> beneficiaries, liquidations"],
        },
        {
          id: "api_gateway",
          name: "API Gateway",
          type: "Integracion",
          intent:
            "Proveer un unico punto de entrada para todas las solicitudes del cliente, enrutando cada llamada al microservicio correspondiente.",
          problem:
            "El cliente SPA (Single Page Application) no deberia necesitar conocer las URLs internas de los 3 microservicios. Ademas, la autenticacion JWT debe validarse antes de que cualquier solicitud llegue a los servicios de negocio.",
          solution:
            "El API Gateway recibe todas las peticiones del frontend, valida el token JWT, y enruta a Servicio de Liquidaciones (/api/liquidaciones/*), Servicio de Auth (/api/auth/*) o Servicio de Logs (/api/audit/*). Tambien aplica rate limiting y registro de accesos antes de reenviar.",
          benefits: [
            "El frontend tiene una URL unica de API sin conocer la topologia interna",
            "La validacion de JWT ocurre en un solo lugar, no en cada microservicio",
            "Rate limiting centralizado previene ataques de fuerza bruta",
            "Facilita el cambio de ubicacion de un microservicio sin modificar el cliente",
          ],
          relatedFiles: ["project_data.js -> architecture"],
        },
      ],
    },
    {
      id: "creacionales",
      name: "Patrones Creacionales",
      color: "amber",
      description:
        "Controlan la creacion de objetos complejos, encapsulando la logica de instanciacion para asegurar consistencia.",
      patterns: [
        {
          id: "factory_method",
          name: "Factory Method",
          type: "Creacional",
          intent:
            "Definir una interfaz para crear objetos, permitiendo que las subclases o estrategias decidan que clase concreta instanciar.",
          problem:
            "El Servicio de Liquidaciones genera documentos en distintos formatos segun el caso: PDF para el comprobante oficial, CSV para exportacion contable y JSON para integracion con otros sistemas. El codigo de negocio no deberia acoplarse a la implementacion concreta de cada formato.",
          solution:
            "DocumentFactory recibe el tipo de exportacion como parametro y retorna el generador correspondiente: PdfDocumentGenerator (usa PDFKit para generar el comprobante legal), CsvDocumentGenerator (tabulados para contabilidad), JsonDocumentGenerator (respuesta estructurada para API). La logica de calculo de liquidacion invoca la factory sin saber cual generador se usara.",
          benefits: [
            "Agregar un nuevo formato de exportacion (XLSX) no requiere modificar la logica de negocio",
            "Cada generador puede ser probado en forma aislada",
            "La seleccion del formato queda en un unico punto del codigo",
          ],
          relatedFiles: ["Servicio de Liquidaciones - generacion de PDFKit"],
        },
        {
          id: "singleton",
          name: "Singleton",
          type: "Creacional",
          intent:
            "Garantizar que una clase tiene una unica instancia y proporcionar un punto de acceso global a ella.",
          problem:
            "El gestor de configuracion que carga variables de entorno (conexion DB, claves JWT, parametros de AWS S3) debe existir como una sola instancia compartida. Multiples instancias podrian generar inconsistencias si la configuracion cambia en caliente.",
          solution:
            "ConfigManager es un Singleton inicializado una vez al arranque del microservicio. Provee acceso de solo lectura a todas las variables de entorno criticas (DB_URL, JWT_SECRET, S3_BUCKET, TOTP_ISSUER). Cualquier componente que necesite configuracion obtiene la misma instancia sin crearla de nuevo.",
          benefits: [
            "Configuracion consistente en todos los modulos del servicio",
            "Inicializacion temprana con validacion de variables requeridas al arranque",
            "Facil de mockear en pruebas de integracion",
          ],
          relatedFiles: ["Configuracion de microservicios - variables de entorno"],
        },
      ],
    },
    {
      id: "estructurales",
      name: "Patrones Estructurales",
      color: "emerald",
      description:
        "Organizan las relaciones entre componentes del sistema para simplificar la estructura y reutilizar codigo.",
      patterns: [
        {
          id: "facade",
          name: "Facade",
          type: "Estructural",
          intent:
            "Proveer una interfaz simplificada a un subsistema complejo, ocultando su complejidad interna.",
          problem:
            "El calculo de una liquidacion laboral involucra multiples calculos interdependientes: dias trabajados, prima de servicios proporcional, cesantias, intereses sobre cesantias, vacaciones compensadas y deducciones. Un controlador REST no deberia orquestar directamente todos estos sub-calculos.",
          solution:
            "LiquidationFacade expone un unico metodo calculateLiquidation(beneficiaryId, params) que internamente coordina: DaysCalculator, PrimaCalculator, CesantiasCalculator, VacationsCalculator, DeductionsCalculator y LiquidationBuilder. El controlador REST solo invoca la fachada y recibe el resultado final estructurado.",
          benefits: [
            "El controlador REST es simple y legible, delegando la complejidad a la fachada",
            "Los calculadores internos pueden evolucionar independientemente sin afectar la API",
            "Facilita pruebas de integracion del flujo completo de liquidacion",
            "Reduce el acoplamiento entre la capa HTTP y la logica de dominio",
          ],
          relatedFiles: ["data.js -> HU-01 a HU-25 (historias de liquidacion)"],
        },
        {
          id: "decorator",
          name: "Decorator",
          type: "Estructural",
          intent:
            "Agregar responsabilidades adicionales a un objeto dinamicamente sin modificar su clase.",
          problem:
            "Un comprobante de liquidacion basico contiene los datos calculados. Pero en ciertos casos debe llevar firma digital, marca de agua de estado (PAGADO, ANULADO) o sello de auditoria. No conviene crear subclases para cada combinacion posible.",
          solution:
            "La clase base LiquidationDocument puede ser envuelta con decoradores: DigitalSignatureDecorator (agrega hash SHA-256 y metadatos de firma), WatermarkDecorator (superpone texto de estado sobre el PDF), AuditStampDecorator (agrega QR de trazabilidad para verificacion). Cada decorador aplica su transformacion y delega al siguiente.",
          benefits: [
            "Las combinaciones de comportamientos son flexibles sin explosion de subclases",
            "Cada decorador tiene una sola responsabilidad y puede ser probado independientemente",
            "Nuevos tipos de firma o sello se agregan sin modificar el documento base",
          ],
          relatedFiles: ["Servicio de Liquidaciones - generacion de comprobantes"],
        },
      ],
    },
    {
      id: "comportamiento",
      name: "Patrones de Comportamiento",
      color: "rose",
      description:
        "Gestionan la comunicacion y el flujo de control entre objetos para distribuir responsabilidades de forma flexible.",
      patterns: [
        {
          id: "observer",
          name: "Observer (Eventos de Dominio)",
          type: "Comportamiento",
          intent:
            "Definir una dependencia uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado, todos sus suscriptores son notificados automaticamente.",
          problem:
            "Cuando una liquidacion cambia de estado (BORRADOR -> APROBADO -> PAGADO), multiples acciones deben ocurrir: registrar el evento en auditoria, notificar al supervisor por correo, actualizar el historial del beneficiario. Acoplarlo directamente en el servicio de liquidaciones mezcla responsabilidades.",
          solution:
            "El Servicio de Liquidaciones publica eventos de dominio (LiquidationApprovedEvent, LiquidationPaidEvent) al cambiar de estado. Los suscriptores reaccionan independientemente: AuditEventListener registra en audit_logs, NotificationListener envia correo al supervisor, BeneficiaryHistoryListener actualiza el historial del beneficiario en su perfil.",
          benefits: [
            "El Servicio de Liquidaciones no conoce ni depende de auditoria o notificaciones",
            "Nuevas reacciones a eventos se agregan sin modificar el publicador",
            "Cada listener puede escalar o fallar sin afectar el flujo principal",
            "Trazabilidad completa de cada transicion de estado en audit_logs",
          ],
          relatedFiles: ["database_data.js -> audit_logs, liquidations"],
        },
        {
          id: "strategy",
          name: "Strategy",
          type: "Comportamiento",
          intent:
            "Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables desde el exterior.",
          problem:
            "El calculo de la liquidacion difiere segun la causa de terminacion del contrato: despido sin justa causa, terminacion con justa causa, renuncia voluntaria o fin de contrato a termino fijo. Cada caso aplica formulas distintas para indemnizaciones y compensaciones.",
          solution:
            "La interfaz LiquidationStrategy define el metodo calculate(contractData). Las implementaciones concretas son: UnfairDismissalStrategy (agrega indemnizacion por despido sin justa causa segun articulo 64 CST), JustCauseTerminationStrategy (sin indemnizacion adicional), VoluntaryResignationStrategy (calcula solo prestaciones sociales) y FixedTermEndStrategy (proporcional al tiempo restante). El LiquidationFacade selecciona la estrategia segun el campo terminationCause.",
          benefits: [
            "Cada formula legal esta encapsulada y puede ser probada con casos de referencia del CST",
            "Agregar una nueva causa de terminacion es agregar una nueva estrategia sin modificar el facade",
            "Los cambios legislativos en formulas de indemnizacion solo afectan la estrategia correspondiente",
          ],
          relatedFiles: ["data.js -> HU-12, HU-13 (calculo y aprobacion de liquidacion)"],
        },
        {
          id: "state_machine",
          name: "State Machine (Maquina de Estados)",
          type: "Comportamiento",
          intent:
            "Permitir que un objeto altere su comportamiento cuando cambia su estado interno, haciendo que el objeto parezca cambiar de clase.",
          problem:
            "Una liquidacion tiene un ciclo de vida estricto: no puede pagarse antes de aprobarse, ni puede editarse despues de estar pagada. Sin un control formal de transiciones, la inconsistencia en estados genera conflictos legales y de auditoria.",
          solution:
            "El modelo Liquidacion implementa una maquina de estados con 5 estados: BORRADOR (editable por el operador), EN_REVISION (bloqueado para edicion, esperando supervisor), APROBADO (listo para pago, inmutable), PAGADO (archivado, genera comprobante definitivo), ANULADO (terminal, requiere motivo). Solo las transiciones autorizadas son permitidas; cualquier intento invalido retorna un error de negocio con codigo HTTP 422.",
          benefits: [
            "Imposible pagar una liquidacion no aprobada: integridad del ciclo de vida garantizada",
            "Cada estado define que acciones son validas, simplificando las validaciones",
            "Todas las transiciones quedan registradas en audit_logs con timestamp y usuario",
            "Facilita reportes de productividad: cuantas liquidaciones estan en cada estado",
          ],
          relatedFiles: ["database_data.js -> liquidations.status", "data.js -> HU-15 (transicion de estados)"],
        },
        {
          id: "chain_of_responsibility",
          name: "Chain of Responsibility",
          type: "Comportamiento",
          intent:
            "Pasar una solicitud a lo largo de una cadena de manejadores, donde cada uno decide procesar o delegar al siguiente.",
          problem:
            "Al crear una liquidacion, los datos deben pasar por multiples validaciones en secuencia: existencia del beneficiario en el catalogo, validez del periodo de liquidacion, verificacion de que no exista una liquidacion activa para el mismo beneficiario, y verificacion de permisos del operador. Mezclar todas estas validaciones en un solo metodo genera codigo ilegible.",
          solution:
            "La solicitud de creacion de liquidacion pasa por una cadena de validadores: BeneficiaryExistsValidator -> DuplicateLiquidationValidator -> PeriodValidator -> PermissionsValidator. Cada validador, si detecta un error, lanza una excepcion de validacion con mensaje claro. Si todas pasan, la solicitud llega al LiquidationService para ser procesada.",
          benefits: [
            "Cada validacion es un componente independiente con su propia responsabilidad",
            "La cadena puede reconfigurarse o extenderse sin modificar el servicio principal",
            "Los mensajes de error son especificos de cada validacion, mejorando la usabilidad",
            "Facil de probar cada eslabOn de la cadena en aislamiento",
          ],
          relatedFiles: ["data.js -> HU-10 (formulario de nueva liquidacion), HU-38 (catalogo beneficiarios)"],
        },
      ],
    },
    {
      id: "seguridad",
      name: "Patrones de Seguridad",
      color: "violet",
      description:
        "Implementaciones especializadas para proteger el sistema de accesos no autorizados, garantizar la identidad y mantener la trazabilidad de todas las operaciones.",
      patterns: [
        {
          id: "rbac",
          name: "Control de Acceso Basado en Roles (RBAC)",
          type: "Seguridad",
          intent:
            "Asignar permisos a roles en lugar de a usuarios individuales, usando los roles asignados a cada usuario para determinar que operaciones puede realizar.",
          problem:
            "La Gobernacion del Valle tiene multiples tipos de usuarios del sistema: operadores de liquidaciones, supervisores, administradores del sistema y auditores de la Contraloria. Cada uno necesita accesso a distintas funcionalidades y un nivel diferente de visibilidad sobre los datos.",
          solution:
            "SILTGOV define 4 roles: OPERADOR (crear y editar liquidaciones de su jurisdiccion, gestionar beneficiarios asignados), SUPERVISOR (aprobar liquidaciones, ver reportes por area), ADMINISTRADOR (gestionar usuarios y configuracion del sistema, sin acceso a datos de produccion), AUDITOR (acceso de solo lectura a logs y reportes, sin datos personales). Los permisos se verifican en el API Gateway antes de enrutar cada solicitud.",
          benefits: [
            "Principio de minimo privilegio: cada usuario accede solo a lo que necesita",
            "Cambiar los permisos de un rol afecta automaticamente a todos los usuarios con ese rol",
            "Cumple con las exigencias de control interno de la Contraloria del Valle",
            "Separacion de funciones: quien aprueba la liquidacion no es quien la creo",
          ],
          relatedFiles: ["project_data.js -> roles", "data.js -> HU-02 (gestion de usuarios)"],
        },
        {
          id: "jwt_refresh",
          name: "JWT con Token de Refresco",
          type: "Seguridad",
          intent:
            "Usar tokens de acceso de corta duracion junto con tokens de refresco de larga duracion para equilibrar seguridad y experiencia de usuario.",
          problem:
            "Si el token JWT de acceso tiene una duracion larga (dias), un token robado compromete la cuenta por mucho tiempo. Si tiene duracion muy corta (minutos), el usuario debe autenticarse constantemente, reduciendo la productividad del personal administrativo.",
          solution:
            "El Servicio de Usuarios y Auth emite dos tokens al autenticarse: un Access Token JWT (valido 15 minutos, contiene rol y claims del usuario) y un Refresh Token opaco (valido 7 dias, almacenado en HttpOnly cookie). Al expirar el Access Token, el cliente solicita automaticamente uno nuevo usando el Refresh Token, sin interrumpir la sesion. El Refresh Token se invalida al detectar cambio de IP o user-agent inusual.",
          benefits: [
            "La ventana de vulnerabilidad ante un token robado se limita a 15 minutos",
            "Los usuarios administrativos trabajan sin interrupciones durante la jornada laboral",
            "La revocacion de sesiones es inmediata: invalidar el Refresh Token en base de datos",
            "Cumple con el decreto de seguridad del MINTIC para sistemas de informacion publica",
          ],
          relatedFiles: ["project_data.js -> security", "database_data.js -> users (refresh_token, token_expires_at)"],
        },
      ],
    },
  ],
};
