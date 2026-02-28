// ============================================================
// iso_25010_data.js  Marco legal ISO 25010 aplicado a SILTGOV
// Sistema Integrado de Liquidaciones  Gobernacion del Valle
// Equipo: ClustLayer | Dev on time
// ============================================================

const ISO_25010_DATA = {
  meta: {
    title: "Marco de Calidad ISO 25010",
    subtitle: "Norma Internacional aplicada al proyecto SILTGOV",
    description:
      "La norma ISO/IEC 25010:2011 define el modelo de calidad del producto de software. Establece ocho caracteristicas principales y sus subcategorias, las cuales sirven como base para especificar, medir y evaluar la calidad de un sistema. SILTGOV adopta este marco para garantizar que el sistema de liquidaciones de la Gobernacion del Valle cumpla con estandares formales de calidad en cada dimension.",
    standard: "ISO/IEC 25010:2011",
    scope: "Modelo de calidad del producto de software y sistemas de informacion",
  },

  categories: [
    {
      id: "funcional",
      name: "Adecuacion Funcional",
      priority: "Critica",
      priorityLevel: "critical",
      summary:
        "Grado en que el producto software proporciona funciones que satisfacen las necesidades declaradas e implicadas cuando se usa bajo condiciones especificadas.",
      subcategories: [
        {
          id: "completitud",
          name: "Completitud Funcional",
          definition:
            "Grado en que el conjunto de funcionalidades cubre las tareas y objetivos del usuario especificados.",
          application:
            "SILTGOV debe cubrir la totalidad del ciclo de liquidacion de empleados de la Gobernacion del Valle: registro de beneficiarios, calculo de liquidaciones con todas las variables legales (primas, cesantias, vacaciones, intereses), generacion de comprobantes en PDF, registro de pagos y auditoria completa. Ninguna de estas etapas puede quedar sin soporte funcional, ya que cualquier omision implica incumplimiento de obligaciones laborales ante el Estado.",
        },
        {
          id: "correccion",
          name: "Correccion Funcional",
          definition:
            "Grado en que un producto software provee resultados correctos con el nivel de precision requerido.",
          application:
            "Los calculos de liquidacion en SILTGOV deben ser matematicamente exactos conforme al Codigo Sustantivo del Trabajo colombiano. La precision en los valores monetarios (primas de servicios, indemnizacion por despido, compensacion de vacaciones) es critica para evitar demandas laborales. El sistema utiliza aritmetica decimal de alta precision para todos los calculos financieros, y los resultados son validados contra formulas legales vigentes.",
        },
        {
          id: "pertinencia",
          name: "Pertinencia Funcional",
          definition:
            "Grado en que las funcionalidades facilitan el logro de tareas y objetivos especificos.",
          application:
            "Cada modulo del sistema esta disenado para responder directamente a los procesos de la Gobernacion: el modulo de beneficiarios centraliza la gestion de empleados sin duplicacion, el modulo de liquidaciones agiliza el proceso de calculo, y el modulo de auditorias satisface los requerimientos de control interno. No se incluyen funcionalidades superfluas que distraigan al operador o compliquen la interfaz.",
        },
      ],
    },
    {
      id: "seguridad",
      name: "Seguridad",
      priority: "Maxima prioridad",
      priorityLevel: "critical",
      summary:
        "Grado en que el producto software protege la informacion y los datos de manera que las personas u otros productos tengan el nivel de acceso adecuado segun su tipo y nivel de autorizacion.",
      subcategories: [
        {
          id: "confidencialidad",
          name: "Confidencialidad",
          definition:
            "Grado en que el producto asegura que los datos son accesibles unicamente para los usuarios autorizados.",
          application:
            "La informacion de empleados y sus liquidaciones es de caracter personal y financiero, protegida por la Ley 1581 de 2012 (habeas data). SILTGOV implementa cifrado AES-256 para datos en reposo y TLS 1.3 para datos en transito. El acceso a cada registro esta controlado por politicas de roles (RBAC): el rol Operador solo accede a los beneficiarios asignados a su jurisdiccion, el rol Supervisor puede ver reportes consolidados sin datos individuales, y el rol Administrador gestiona configuraciones sin acceder a datos de produccion.",
        },
        {
          id: "integridad",
          name: "Integridad",
          definition:
            "Grado en que el sistema evita el acceso no autorizado o la modificacion de datos.",
          application:
            "Toda escritura en la base de datos PostgreSQL de SILTGOV genera un registro inmutable en la tabla de auditoria (audit_logs) con timestamp, usuario, accion, valores anteriores y nuevos. Esto garantiza que ninguna modificacion de liquidacion o pago quede sin traza. Se implementan restricciones de integridad referencial (claves foraneas) para que ningun registro de liquidacion pueda existir sin un beneficiario valido, y ninguna transaccion pueda referenciar una liquidacion inexistente.",
        },
        {
          id: "autenticidad",
          name: "Autenticidad",
          definition:
            "Grado en que la identidad de un sujeto o recurso puede ser probada como la declarada.",
          application:
            "SILTGOV utiliza autenticacion JWT de doble capa: acceso (15 min) y refresco (7 dias). Ademas implementa TOTP (Autenticacion de Dos Factores) para cuentas con permisos administrativos, cumpliendo con el decreto 1377 del MINTIC sobre gestion de identidades en entidades publicas. Las sesiones se invalidan automaticamente ante deteccion de cambio de dispositivo o IP inusual.",
        },
        {
          id: "responsabilidad",
          name: "Responsabilidad",
          definition:
            "Grado en que las acciones de una entidad pueden ser atribuidas unicamente a esa entidad.",
          application:
            "Cada accion sobre el sistema queda firmada con el ID del usuario autenticado, timestamp del servidor y hash de integridad del registro. Los logs del Servicio de Logs y Auditoria tienen retencion de 2 anos conforme a las directrices de archivo publico. Esto permite, ante una auditoria de la Contraloria del Valle, identificar con certeza quien aprobo cada liquidacion y en que momento.",
        },
        {
          id: "no_repudio",
          name: "No Repudio",
          definition:
            "Grado en que se puede demostrar que las acciones o eventos ocurrieron, de modo que dichos eventos no puedan ser repudiados.",
          application:
            "Los comprobantes de liquidacion generados por SILTGOV incluyen firma digital basada en claves del servidor, garantizando su autenticidad. Una vez emitido y firmado digitalmente un comprobante, no puede ser negado por ninguna de las partes. El sistema archivar los PDFs generados con hash SHA-256 en almacenamiento inmutable (S3 con Object Lock), asegurando su valor probatorio ante instancias judiciales o administrativas.",
        },
      ],
    },
    {
      id: "fiabilidad",
      name: "Fiabilidad",
      priority: "Alta",
      priorityLevel: "high",
      summary:
        "Grado en que un sistema realiza funciones especificas bajo condiciones determinadas durante un periodo de tiempo determinado.",
      subcategories: [
        {
          id: "disponibilidad",
          name: "Disponibilidad",
          definition:
            "Grado en que un sistema esta operativo y accesible cuando se requiere su uso.",
          application:
            "SILTGOV apunta a un SLA de 99.5% de disponibilidad en horario laboral (lunes a viernes, 7am-6pm). La infraestructura desplegada en AWS con balanceo de carga y redundancia en base de datos (RDS Multi-AZ) garantiza que fallas en un nodo no interrumpan el servicio. Los picos de uso (periodos de pago masivo) son absorbidos mediante auto-scaling horizontal del Servicio de Liquidaciones.",
        },
        {
          id: "tolerancia_fallos",
          name: "Tolerancia a Fallos",
          definition:
            "Grado en que un sistema opera como se espera ante la presencia de fallos en hardware o software.",
          application:
            "Si el Servicio de Liquidaciones falla durante un calculo, la transaccion se revierte atomicamente via ACID en PostgreSQL, sin dejar registros parciales. El Servicio de Logs registra el fallo con contexto completo para su diagnostico. Los servicios se comunican mediante llamadas HTTP con circuit-breaker pattern: si un servicio downstream no responde en 3 intentos, la solicitud se redirige a una respuesta de error controlada en lugar de propagar el fallo en cascada.",
        },
        {
          id: "recuperabilidad",
          name: "Recuperabilidad",
          definition:
            "Grado en que un sistema puede recuperar datos afectados y restablecer el estado deseado ante interrupcion.",
          application:
            "La base de datos de SILTGOV cuenta con backups automaticos diarios y point-in-time recovery con ventana de 7 dias. Ante un fallo critico, el objetivo de tiempo de recuperacion (RTO) es de 2 horas y el objetivo de punto de recuperacion (RPO) es de 1 hora. Los procedimientos de restauracion estan documentados y probados trimestralmente.",
        },
        {
          id: "ausencia_fallos",
          name: "Ausencia de Fallos",
          definition:
            "Grado en que un sistema esta libre de defectos bajo condiciones especificadas.",
          application:
            "El ciclo de desarrollo de SILTGOV incluye pruebas unitarias (cobertura minima 80%), pruebas de integracion para cada endpoint de API y pruebas de regresion ejecutadas en CI/CD antes de cada despliegue. Las historias de usuario incluyen criterios de Definicion de Terminado (DoD) que exigen cero errores criticos en entornos de staging antes de despliegue a produccion.",
        },
      ],
    },
    {
      id: "usabilidad",
      name: "Usabilidad",
      priority: "Alta",
      priorityLevel: "high",
      summary:
        "Grado en que un producto puede ser utilizado por usuarios especificos para conseguir metas especificas con efectividad, eficiencia y satisfaccion en un contexto de uso especificado.",
      subcategories: [
        {
          id: "operabilidad",
          name: "Operabilidad",
          definition:
            "Grado en que un producto tiene atributos que facilitan su uso y control.",
          application:
            "La interfaz de SILTGOV esta disenada para personal administrativo de la Gobernacion con conocimientos ofitmaticos medios. Todos los formularios de liquidacion siguen un flujo paso a paso con validacion en tiempo real, evitando que el usuario envie datos incompletos o erroneos. Los mensajes de error son descriptivos y proponen la correccion. Los accesos directos de teclado y la navegacion secuencial entre campos reducen el tiempo de ingreso de datos.",
        },
        {
          id: "aprendibilidad",
          name: "Aprendibilidad",
          definition:
            "Grado en que un sistema permite a los usuarios aprender su uso con efectividad, eficiencia y satisfaccion.",
          application:
            "El sistema incluye tooltips contextuales en cada campo del formulario de liquidacion explicando que dato se requiere y en que formato. La arquitectura de la interfaz sigue patrones de diseno conocidos (formularios en cascada, tablas filtrables) para minimizar la curva de aprendizaje. Se contempla la generacion de un manual de usuario breve dentro del propio sistema, accesible desde cualquier pantalla.",
        },
        {
          id: "proteccion_errores",
          name: "Proteccion contra Errores del Usuario",
          definition:
            "Grado en que el sistema protege a los usuarios de cometer errores.",
          application:
            "SILTGOV valida los datos en dos capas: frontend (validacion inmediata con mensajes en linea) y backend (validacion de negocio antes de persistir). Los campos de tipo moneda aceptan unicamente numeros con dos decimales. Las fechas son seleccionadas mediante calendarios que restringen rangos invalidos. Antes de confirmar una liquidacion, se muestra un resumen detallado para revision del operador, y las acciones destructivas (eliminar, aprobar pagos) requieren confirmacion explicita.",
        },
        {
          id: "reconocibilidad",
          name: "Reconocibilidad de la Adecuacion",
          definition:
            "Grado en que los usuarios reconocen si un producto es adecuado para sus necesidades.",
          application:
            "La pantalla de inicio de SILTGOV presenta de forma clara y jerarquizada las secciones del sistema, con descripciones breves de su funcion. El vocabulario utilizado en la interfaz es el propio del contexto laboral colombiano (liquidacion, prima de servicios, cesantias), evitando terminologia tecnica informatica que pueda confundir al personal administrativo de la Gobernacion.",
        },
      ],
    },
    {
      id: "eficiencia",
      name: "Eficiencia de Desempeno",
      priority: "Media",
      priorityLevel: "medium",
      summary:
        "Desempeno relativo a la cantidad de recursos utilizados bajo condiciones establecidas.",
      subcategories: [
        {
          id: "comportamiento_temporal",
          name: "Comportamiento Temporal",
          definition:
            "Grado en que los tiempos de respuesta y procesamiento de un sistema cumplen los requisitos.",
          application:
            "Los endpoints de SILTGOV tienen tiempos de respuesta objetivo: consulta de beneficiarios menor a 200ms, calculo de liquidacion individual menor a 500ms, generacion de PDF menor a 2 segundos. Se implementa cache de datos de beneficiarios activos para reducir consultas repetitivas a la base de datos. Los reportes de consolidado mensual se generan de forma asincrona con notificacion al usuario cuando estan listos.",
        },
        {
          id: "capacidad",
          name: "Capacidad",
          definition:
            "Grado en que los limites maximos de un sistema cumplen los requisitos.",
          application:
            "SILTGOV esta disenado para soportar hasta 500 beneficiarios activos simultaneos y procesar hasta 200 liquidaciones mensuales sin degradacion. La base de datos esta indexada para consultas frecuentes (busqueda por numero de documento, listados por estado de liquidacion). El almacenamiento de PDFs en S3 escala sin limite operacional segun el volumen de comprobantes historicos.",
        },
        {
          id: "utilizacion_recursos",
          name: "Utilizacion de Recursos",
          definition:
            "Grado en que el sistema usa los recursos adecuados cuando realiza su funcion.",
          application:
            "Los microservicios de SILTGOV estan empaquetados en contenedores con limites de CPU y memoria definidos (Servicio de Liquidaciones: 512MB RAM, 0.5 CPU). El Servicio de Logs usa insercion en batch para minimizar la contention en base de datos. Los PDFs se generan con PDFKit en streaming para evitar cargar el documento completo en memoria, reduciendo el footprint del proceso.",
        },
      ],
    },
    {
      id: "mantenibilidad",
      name: "Mantenibilidad",
      priority: "Alta",
      priorityLevel: "high",
      summary:
        "Grado de efectividad y eficiencia con el que el producto puede ser modificado para mejorarlo, corregirlo o adaptarlo.",
      subcategories: [
        {
          id: "modularidad",
          name: "Modularidad",
          definition:
            "Grado en que el sistema se compone de componentes discretos tal que un cambio en uno tiene minimo impacto en los demas.",
          application:
            "SILTGOV adopta arquitectura de 3 microservicios independientes: Usuarios y Auth, Liquidaciones, y Logs y Auditoria. Cada servicio tiene su propia base de datos logica y se comunica via API REST bien definida. Esta separacion garantiza que un cambio en la logica de calculo de liquidaciones no afecte el servicio de autenticacion ni el de logs. Cada servicio puede desplegarse, actualizarse y escalarse de forma independiente.",
        },
        {
          id: "analizabilidad",
          name: "Analizabilidad",
          definition:
            "Grado de efectividad y eficiencia con el que se puede diagnosticar el sistema para encontrar causas de fallos.",
          application:
            "El Servicio de Logs y Auditoria de SILTGOV centraliza todos los registros de actividad con niveles de severidad (INFO, WARN, ERROR, CRITICAL). Los logs incluyen correlation IDs para rastrear una solicitud a traves de todos los microservicios. Los errores se registran con stack trace completo, tiempo de respuesta y contexto del usuario, permitiendo diagnosticar incidentes en minutos en lugar de horas.",
        },
        {
          id: "modificabilidad",
          name: "Modificabilidad",
          definition:
            "Grado en que el sistema puede ser modificado efectivamente sin introducir defectos o degradar la calidad existente.",
          application:
            "Las formulas de calculo de liquidacion estan parametrizadas en archivos de configuracion separados del codigo fuente, de modo que cambios en la legislacion laboral (porcentajes de primas, topes de cesantias) pueden aplicarse sin modificar ni redesplegar el codigo. El esquema de base de datos sigue versionado con migraciones, permitiendo evolucionar la estructura de datos sin perder informacion historica.",
        },
        {
          id: "capacidad_prueba",
          name: "Capacidad de Prueba",
          definition:
            "Grado de efectividad y eficiencia con el que se pueden establecer criterios de prueba y ejecutar pruebas.",
          application:
            "Cada microservicio de SILTGOV incluye una suite de pruebas unitarias e integracion ejecutadas automaticamente en el pipeline CI/CD. Los calculos de liquidacion tienen casos de prueba parametrizados con valores de referencia legales (scenarios de despido sin justa causa, vacaciones compensadas, liquidacion parcial de primas). La cobertura minima de codigo exigida es 80% por servicio antes del merge a la rama principal.",
        },
      ],
    },
    {
      id: "compatibilidad",
      name: "Compatibilidad",
      priority: "Baja",
      priorityLevel: "low",
      summary:
        "Grado en que un producto puede intercambiar informacion con otros productos, y realizar sus funciones requeridas mientras comparte el mismo hardware o software.",
      subcategories: [
        {
          id: "coexistencia",
          name: "Coexistencia",
          definition:
            "Grado en que el producto puede cumplir sus funciones mientras comparte entorno y recursos con otros productos.",
          application:
            "SILTGOV se despliega en contenedores Docker sobre la infraestructura compartida de AWS de la Gobernacion del Valle, coexistiendo con otros sistemas institucionales. Los recursos de red y almacenamiento estan aislados mediante VPCs y politicas de IAM, garantizando que el consumo de recursos de SILTGOV no afecte otros sistemas gobernamentales hospedados en la misma plataforma.",
        },
        {
          id: "interoperabilidad",
          name: "Interoperabilidad",
          definition:
            "Grado en que dos o mas sistemas pueden intercambiar informacion y utilizar la informacion intercambiada.",
          application:
            "La API REST de SILTGOV esta documentada con OpenAPI 3.0, permitiendo integracion con sistemas externos como el sistema de nomina actual de la Gobernacion o con futuros sistemas de gestion humana. Los formatos de intercambio son JSON estandarizado y PDF/A para comprobantes oficiales. Se contempla un endpoint de exportacion de liquidaciones en formato CSV para compatibilidad con herramientas de Business Intelligence gubernamentales.",
        },
      ],
    },
    {
      id: "portabilidad",
      name: "Portabilidad",
      priority: "Media-baja",
      priorityLevel: "low",
      summary:
        "Grado de efectividad y eficiencia con el que un sistema puede ser transferido de un hardware, software u otro entorno operacional a otro.",
      subcategories: [
        {
          id: "adaptabilidad",
          name: "Adaptabilidad",
          definition:
            "Grado en que un producto puede ser adaptado efectiva y eficientemente a diferentes entornos de hardware, software u operacionales.",
          application:
            "SILTGOV es una aplicacion web SPA (Single Page Application) que funciona en cualquier navegador moderno (Chrome, Firefox, Edge) sin instalacion de software adicional en los equipos de la Gobernacion. El backend esta contenedorizado con Docker, lo que permite migrar entre proveedores de nube (AWS, Azure, on-premise) con minimas modificaciones en la configuracion de infraestructura. Las variables de entorno centralizan toda la configuracion dependiente del entorno, facilificando el paso de desarrollo a produccion.",
        },
      ],
    },
  ],
};