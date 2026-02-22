// ===================================
// Team Data - Finanz Project
// ===================================

const TEAM_DATA = {
  descripcion:
    "Equipo de 7 integrantes organizados con metodología Scrum para desarrollo ágil del proyecto Finanz",

  roles: [
    {
      id: "product-owner-frontend",
      nombre: "Product Owner & Frontend",
      icono: "PO",
      color: "#3b82f6",
      miembros: ["Andrey Quiceno"],
      responsabilidades: [
        "Definir y priorizar el Product Backlog",
        "Crear historias de usuario con criterios de aceptación",
        "Validar que el desarrollo cumpla los requerimientos",
        "Desarrollar componentes frontend según asignación",
        "Generar informes de sprint",
      ],
    },
    {
      id: "frontend-dev",
      nombre: "Desarrollo Frontend",
      icono: "FE",
      color: "#10b981",
      miembros: ["Daniel Trujillo", "Ivan Ausecha"],
      responsabilidades: [
        "Desarrollar interfaces de usuario responsive",
        "Implementar componentes y vistas del sistema",
        "Integrar con APIs del backend",
        "Validaciones frontend en tiempo real",
        "Testing de componentes",
      ],
    },
    {
      id: "backend-db",
      nombre: "Backend & Base de Datos",
      icono: "BD",
      color: "#f59e0b",
      miembros: ["Francesco"],
      responsabilidades: [
        "Diseñar y optimizar esquema de base de datos",
        "Desarrollar APIs RESTful seguras",
        "Implementar lógica de negocio y validaciones",
        "Gestionar operaciones con base de datos",
        "Encriptación y seguridad de datos",
      ],
    },
    {
      id: "backend-dev",
      nombre: "Desarrollo Backend",
      icono: "BE",
      color: "#8b5cf6",
      miembros: ["UV Casaviejas", "UV Juan José"],
      responsabilidades: [
        "Desarrollar APIs y endpoints",
        "Implementar autenticación y autorización",
        "Validaciones del lado del servidor",
        "Documentar APIs con Swagger/OpenAPI",
        "Testing de servicios backend",
      ],
    },
    {
      id: "devops",
      nombre: "DevOps & Pruebas",
      icono: "DO",
      color: "#ef4444",
      miembros: ["Jonathan"],
      responsabilidades: [
        "Configurar CI/CD y pipeline de despliegue",
        "Testing end-to-end de la aplicación",
        "Gestionar pull requests y merges",
        "Implementar monitoreo y logging",
        "Preparar entorno de producción",
      ],
    },
  ],

  sprints: [
    {
      id: "sprint-1",
      nombre: "Sprint 1: MVP - Acceso y Público Básico",
      duracion: "Semanas 1-2",
      color: "#3b82f6",
      enfoque: "HU01-HU04, HU10-HU12 - Sitio funcional con acceso de usuarios",
      tareas: [
        {
          rol: "Andrey (Product Owner & Frontend)",
          actividades: [
            "Definir requerimientos detallados para landing page (HU01-HU04)",
            "Especificar flujos de registro, login y recuperación (HU10-HU12)",
            "Desarrollar landing page (HU01), tour (HU02) y características (HU03)",
            "Crear y priorizar historias del Sprint 1",
            "Generar informe del Sprint 1",
          ],
        },
        {
          rol: "Ivan (Frontend)",
          actividades: [
            "Desarrollar formulario de login con validaciones (HU11)",
            "Implementar formulario de registro (HU10)",
            "Crear formulario de recuperación de contraseña (HU12)",
            "Implementar validaciones en tiempo real",
            "Integrar spinners y mensajes de feedback",
          ],
        },
        {
          rol: "Daniel (Frontend)",
          actividades: [
            "Implementar página de planes/precios (HU04)",
            "Desarrollar mensajes de error y validación",
            "Implementar redirecciones post-autenticación",
            "Optimizar responsive design",
          ],
        },
        {
          rol: "Francesco (Backend & BD)",
          actividades: [
            "Diseñar estructura de base de datos",
            "Crear tablas de usuarios con campos necesarios",
            "Implementar sistema de transacciones (preparación)",
            "Configurar PostgreSQL y migraciones",
          ],
        },
        {
          rol: "Juan José (Backend - Auth)",
          actividades: [
            "API de login y generación de tokens JWT (HU11)",
            "API de registro de usuarios (HU10)",
            "Sistema de recuperación de contraseña (HU12)",
            "Implementar encriptación de contraseñas",
            "Validaciones del lado del servidor",
          ],
        },
        {
          rol: "Casa (Backend - Cuentas)",
          actividades: [
            "API para contenido de landing y planes",
            "Preparar base para gestión de cuentas",
            "Validaciones de datos",
            "Manejo de sesiones y tokens",
          ],
        },
        {
          rol: "Jonathan (DevOps)",
          actividades: [
            "Configurar repositorio y estructura de branches",
            "Implementar HTTPS y certificados SSL",
            "Rate limiting en endpoints de autenticación",
            "Configurar entornos de desarrollo y staging",
            "Testing de flujos de autenticación",
          ],
        },
      ],
    },
    {
      id: "sprint-2",
      nombre: "Sprint 2: Finanzas Básicas",
      duracion: "Semanas 3-4",
      color: "#10b981",
      enfoque: "HU13, HU14, HU16, HU17 - Gestión mínima de finanzas",
      tareas: [
        {
          rol: "Andrey (Product Owner & Frontend)",
          actividades: [
            "Definir estructura del dashboard y widgets (HU13)",
            "Especificar calendario financiero (HU17)",
            "Desarrollar dashboard principal con resumen (HU13)",
            "Implementar calendario financiero interactivo (HU17)",
            "Generar informe del Sprint 2",
          ],
        },
        {
          rol: "Ivan (Frontend)",
          actividades: [
            "Crear formulario de registro de transacciones (HU14)",
            "Desarrollar lista de transacciones con filtros",
            "Implementar visualizaciones de saldos",
            "Integrar módulo de transacciones con backend",
          ],
        },
        {
          rol: "Daniel (Frontend)",
          actividades: [
            "Implementar gestión de cuentas (crear, editar, eliminar) (HU16)",
            "Desarrollar navegación entre módulos",
            "Optimizar UI/UX de dashboard",
          ],
        },
        {
          rol: "Francesco (Backend & BD)",
          actividades: [
            "Diseñar tablas de transacciones con índices optimizados",
            "CRUD completo de transacciones (HU14)",
            "API de cálculos de saldos e ingresos/egresos",
            "Proteger rutas privadas del dashboard",
            "Validar integridad de datos financieros",
          ],
        },
        {
          rol: "Juan José (Backend)",
          actividades: [
            "API para datos del dashboard y resúmenes",
            "API del calendario financiero (HU17)",
            "Sistema de recordatorios de pagos",
            "Validaciones de datos financieros",
          ],
        },
        {
          rol: "Casa (Backend - Cuentas)",
          actividades: [
            "CRUD de cuentas bancarias (HU16)",
            "Crear relaciones entre usuarios, cuentas y transacciones",
            "API de gestión de cuentas",
            "Validaciones de saldos",
          ],
        },
        {
          rol: "Jonathan (DevOps)",
          actividades: [
            "Testing de CRUD completo",
            "Testing de cálculos financieros",
            "Validar permisos y autorización",
            "Integración frontend-backend",
            "Actualizar CI/CD",
          ],
        },
      ],
    },
    {
      id: "sprint-3",
      nombre: "Sprint 3: Valor Agregado - Reportes e IA",
      duracion: "Semanas 5-6",
      color: "#f59e0b",
      enfoque: "HU18-HU20 - Análisis y diferenciación del proyecto",
      tareas: [
        {
          rol: "Andrey (Product Owner & Frontend)",
          actividades: [
            "Definir tipos de reportes y estadísticas (HU18)",
            "Especificar estructura de metas financieras (HU19)",
            "Desarrollar componentes de visualización de datos",
            "Implementar gráficos con Chart.js/D3 (HU18)",
            "Generar informe del Sprint 3",
          ],
        },
        {
          rol: "Ivan (Frontend)",
          actividades: [
            "Crear interfaz de metas financieras (HU19)",
            "Desarrollar formularios para crear y editar metas",
            "Implementar visualización de progreso de metas",
          ],
        },
        {
          rol: "Daniel (Frontend)",
          actividades: [
            "Desarrollar sección de recomendaciones IA (HU20)",
            "Crear gráficos interactivos (barras, líneas, torta)",
            "Mejorar dashboard con análisis",
          ],
        },
        {
          rol: "Francesco (Backend & BD)",
          actividades: [
            "Diseñar tablas de metas financieras",
            "CRUD de metas financieras (HU19)",
            "Optimizar consultas complejas de reportes",
            "Configurar cache para reportes frecuentes",
          ],
        },
        {
          rol: "Juan José (Backend)",
          actividades: [
            "APIs de generación de reportes y estadísticas (HU18)",
            "Sistema de seguimiento de progreso de metas",
            "Cálculos de proyecciones",
          ],
        },
        {
          rol: "Casa (Backend)",
          actividades: [
            "API de recomendaciones con reglas básicas (HU20)",
            "Algoritmo simple de sugerencias",
            "Cálculos complejos de análisis financiero",
          ],
        },
        {
          rol: "Jonathan (DevOps)",
          actividades: [
            "Testing de cálculos y agregaciones",
            "Validar visualizaciones de datos",
            "Testing de lógica de recomendaciones",
            "Actualizar CI/CD",
          ],
        },
      ],
    },
    {
      id: "sprint-4",
      nombre: "Sprint 4: Experiencia Avanzada",
      duracion: "Semanas 7-8",
      color: "#8b5cf6",
      enfoque: "HU05-HU09, HU15 - Mejor experiencia de usuario",
      tareas: [
        {
          rol: "Andrey (Product Owner & Frontend)",
          actividades: [
            "Definir contenido para blog y artículos (HU05)",
            "Crear página 'Sobre nosotros' (HU06)",
            "Desarrollar formulario de contacto (HU08)",
            "Implementar blog y sistema de artículos (HU05)",
            "Generar informe del Sprint 4",
          ],
        },
        {
          rol: "Ivan (Frontend)",
          actividades: [
            "Desarrollar interfaz de importación CSV/Excel (HU15)",
            "Crear interfaz de carga de archivos",
            "Implementar preview de datos antes de importar",
          ],
        },
        {
          rol: "Daniel (Frontend)",
          actividades: [
            "Implementar FAQ con accordion (HU07)",
            "Crear páginas de política y términos (HU09)",
            "Desarrollar plantillas para artículos educativos",
          ],
        },
        {
          rol: "Francesco (Backend & BD)",
          actividades: [
            "Diseñar tablas para blog y artículos",
            "Configurar almacenamiento de archivos CSV/Excel",
            "Validar seguridad en carga de archivos",
            "Escaneo de archivos por malware",
          ],
        },
        {
          rol: "Juan José (Backend)",
          actividades: [
            "API para gestión de blog y artículos (HU05)",
            "CRUD de artículos",
            "Endpoint para formulario de contacto (HU08)",
          ],
        },
        {
          rol: "Casa (Backend)",
          actividades: [
            "Parser para importación de CSV/Excel (HU15)",
            "Validación de formato de archivos",
            "Procesamiento masivo de transacciones",
            "Sistema de envío de correos",
          ],
        },
        {
          rol: "Jonathan (DevOps)",
          actividades: [
            "Testing de carga de archivos",
            "Validar procesamiento de CSV/Excel",
            "Testing de formularios",
            "Actualizar CI/CD",
          ],
        },
      ],
    },
    {
      id: "sprint-5",
      nombre: "Sprint 5: Administración y Robustez",
      duracion: "Semanas 9-10",
      color: "#ef4444",
      enfoque: "HU21-HU25 - Producto completo y robusto",
      tareas: [
        {
          rol: "Andrey (Product Owner & Frontend)",
          actividades: [
            "Definir estructura de perfil y configuración (HU21)",
            "Especificar controles de seguridad (HU25)",
            "Desarrollar interfaz de perfil de usuario (HU21)",
            "Preparar documentación de usuario",
            "Generar informe final del proyecto",
          ],
        },
        {
          rol: "Ivan (Frontend)",
          actividades: [
            "Implementar formularios de edición de perfil",
            "Desarrollar centro de ayuda con búsqueda (HU22)",
            "Crear guías rápidas y tutoriales",
            "Optimización de rendimiento frontend",
          ],
        },
        {
          rol: "Daniel (Frontend)",
          actividades: [
            "Desarrollar dashboard administrativo (HU23)",
            "Implementar visualización de métricas (HU24)",
            "Crear interfaces de configuración de seguridad",
            "Refinamiento de UI/UX",
          ],
        },
        {
          rol: "Francesco (Backend & BD)",
          actividades: [
            "Diseñar tablas de perfil y roles",
            "Implementar sistema de logs y monitoreo (HU24)",
            "Auditoría de seguridad completa (HU25)",
            "Optimización de base de datos",
            "Configurar backups automáticos",
          ],
        },
        {
          rol: "Juan José (Backend)",
          actividades: [
            "API de perfil de usuario (HU21)",
            "API del centro de ayuda (HU22)",
            "API de administración de usuarios (HU23)",
            "Optimización de consultas",
          ],
        },
        {
          rol: "Casa (Backend)",
          actividades: [
            "API de monitoreo y métricas (HU24)",
            "API de gestión de seguridad (HU25)",
            "Mejora de rendimiento de APIs",
            "Documentación completa de APIs",
          ],
        },
        {
          rol: "Jonathan (DevOps)",
          actividades: [
            "Testing end-to-end completo de toda la aplicación",
            "Pruebas de carga y estrés",
            "CI/CD completo para producción",
            "Preparar entorno de producción",
            "Documentación técnica",
          ],
        },
      ],
    },
  ],
};
