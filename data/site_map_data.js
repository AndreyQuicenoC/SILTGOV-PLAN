// Datos del mapa de sitio - Finanz
const SITE_MAP_DATA = {
  title: "Mapa de sitio — Gestor de Finanzas Personales",
  subtitle:
    "Diagrama HTML interactivo pensado para la presentación: muestra qué ve un usuario antes de loguearse y la estructura interna.",
  zones: [
    {
      id: "public",
      name: "Zona Pública (antes de login)",
      description: "Páginas que ve un usuario nuevo sin autenticación",
      type: "root",
      expanded: true,
      pages: [
        {
          name: "Landing Page",
          description: "Hero, beneficios, capturas, CTA (Regístrate)",
          type: "public",
        },
        {
          name: "Cómo funciona / Tour",
          description: "Paso a paso visual para nuevos usuarios",
          type: "public",
        },
        {
          name: "Características principales",
          description: "Gestión cuentas, reportes, IA, calendario",
          type: "public",
        },
        {
          name: "Blog / Artículos",
          description: "Contenido educativo para atraer y retener usuarios",
          type: "public",
        },
        {
          name: "Sobre nosotros",
          description: "Equipo y propósito del proyecto",
          type: "public",
        },
        {
          name: "FAQ",
          description: "Preguntas frecuentes (seguridad, exportación, cuentas)",
          type: "public",
        },
        {
          name: "Contacto / Soporte",
          description: "Formulario, correo, redes",
          type: "public",
        },
        {
          name: "Políticas (Privacidad & Términos)",
          description: "Requisitos legales y aviso de tratamiento de datos",
          type: "public",
        },
        {
          name: "Registro / Login / Recuperar contraseña",
          description: "Formularios y flujo de autenticación",
          type: "public",
        },
      ],
    },
    {
      id: "private",
      name: "Zona Privada (después de login)",
      description: "Funcionalidades core para usuarios autenticados",
      type: "root",
      expanded: false,
      pages: [
        {
          name: "Dashboard",
          description: "Resumen, KPIs, recomendaciones IA",
          type: "private",
        },
        {
          name: "Transacciones",
          description: "Crear/editar/eliminar, clasificación automática, CSV",
          type: "private",
        },
        {
          name: "Cuentas",
          description: "Agregar bancos, billeteras, ver saldos",
          type: "private",
        },
        {
          name: "Calendario Financiero",
          description: "Pagos recurrentes, recordatorios, metas",
          type: "private",
        },
        {
          name: "Reportes y Estadísticas",
          description: "Gráficas interactivas, exportación",
          type: "private",
        },
        {
          name: "Metas Financieras",
          description: "Progreso visual, planes de ahorro",
          type: "private",
        },
        {
          name: "Agente de Recomendación (IA)",
          description: "Sugerencias, perfil de riesgo, alertas",
          type: "private",
        },
        {
          name: "Perfil y Configuración",
          description: "Datos, preferencias, 2FA, eliminar cuenta",
          type: "private",
        },
        {
          name: "Centro de ayuda interno",
          description: "Soporte dentro de la app",
          type: "private",
        },
      ],
    },
    {
      id: "admin",
      name: "Zona Administrativa (solo equipo)",
      description: "Herramientas internas para operación y DevOps",
      type: "root",
      expanded: false,
      pages: [
        {
          name: "Panel de Administración",
          description: "Usuarios, logs, roles",
          type: "admin",
        },
        {
          name: "Monitoreo y métricas",
          description: "Uptime, recursos, alertas",
          type: "admin",
        },
        {
          name: "Seguridad",
          description: "Dependencias, permisos, revisiones",
          type: "admin",
        },
      ],
    },
  ],
  badges: [
    {
      label: "Zona pública",
      type: "public",
    },
    {
      label: "Zona privada",
      type: "private",
    },
    {
      label: "Zona admin",
      type: "admin",
    },
  ],
};
