// ============================================================
// index_data.js  Datos de la pagina principal SILTGOV
// Sistema Integrado de Liquidaciones  Gobernacion del Valle
// Equipo: ClustLayer | Dev on time
// ============================================================

const INDEX_DATA = {
  header: {
    title: "SILTGOV",
    subtitle: "Sistema Integrado de Liquidaciones del Gobierno",
  },

  welcome: {
    title: "Documentacion del Proyecto",
    description:
      "Explora las diferentes secciones de la documentacion para conocer la estructura, funcionalidades y planificacion del proyecto SILTGOV — Sistema Integrado de Liquidaciones del Gobierno.",
  },

  cards: [
    {
      href: "views/project.html",
      iconType: "project",
      title: "Informacion del Proyecto",
      description:
        "Descripcion, objetivos, marco legal, arquitectura de 3 microservicios, roles y recursos del proyecto SILTGOV.",
    },
    {
      href: "views/databse_plan.html",
      iconType: "database",
      title: "Planificacion de Base de Datos",
      description:
        "Modelo relacional PostgreSQL con tabla centralizada de beneficiarios, liquidaciones, usuarios, pagos y auditoria.",
    },
    {
      href: "views/site_map.html",
      iconType: "sitemap",
      title: "Mapa del Sitio",
      description:
        "Estructura completa del sitio web con zonas publicas, privadas y administrativas por rol de usuario.",
    },
    {
      href: "views/user_stories.html",
      iconType: "stories",
      title: "Historias de Usuario",
      description:
        "Backlog completo de 40 historias de usuario distribuidas en 13 sprints con criterios de aceptacion y DoD.",
    },
    {
      href: "views/team_distribution.html",
      iconType: "team",
      title: "Distribucion por Sprints",
      description:
        "Historias de usuario y tareas con asignaciones por sprint, velocidad del equipo y progreso planificado.",
    },
    {
      href: "views/team_members.html",
      iconType: "members",
      title: "Equipo de Trabajo",
      description:
        "Integrantes del equipo ClustLayer, perfiles, habilidades especializadas y datos de contacto.",
    },
    {
      href: "views/iso_25010.html",
      iconType: "iso",
      title: "Normativa ISO 25010",
      description:
        "Marco de calidad del software: categorias y subcategorias aplicadas al proyecto con criterios detallados.",
    },
    {
      href: "views/design_patterns.html",
      iconType: "patterns",
      title: "Patrones de Diseno",
      description:
        "Patrones arquitecturales y de diseno seleccionados para garantizar un desarrollo robusto, escalable y mantenible.",
    },
  ],

  footer: {
    line1: "2025 SILTGOV — Sistema Integrado de Liquidaciones del Gobierno",
    line2: "Equipo ClustLayer — metodologia agil Scrum",
  },
};
