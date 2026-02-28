// ============================================================
// index_data.js  Datos de navegacion de la pagina principal — SILTGOV
// Sistema Integrado de Liquidaciones  Gobernacion del Valle
// Equipo: ClustLayer | Dev on time
// ============================================================

/**
 * INDEX_DATA
 * Contiene toda la informacion necesaria para renderizar la pagina
 * principal: cabecera, bienvenida, tarjetas de navegacion y pie.
 *
 * Principio de separacion de datos y presentacion (Pressman & Maxim, cap. 8.2):
 *   ningun texto de contenido reside en index.html ni en index.js;
 *   ambos actuan unicamente como capa de presentacion.
 */
const INDEX_DATA = {
  header: {
    logoSrc:  'assets/siltgov-icon.svg',
    logoAlt:  'Logo SILTGOV',
    title:    'SILTGOV',
    subtitle: 'Sistema Integrado de Liquidaciones',
  },

  welcome: {
    title:       'Documentacion del Proyecto',
    description: 'Explora cada seccion para conocer la planificacion, arquitectura, estandares de calidad y distribucion del equipo del Sistema Integrado de Liquidaciones de la Gobernacion del Valle del Cauca.',
  },

  /**
   * Tarjetas de navegacion principales.
   * Orden: Fundamentos del proyecto → Recursos tecnicos → Equipo
   * Alineado con la arquitectura de informacion (ISO 25010 — Usabilidad).
   */
  navCards: [
    {
      id:          'project',
      href:        'views/project.html',
      icon:        'nav-icon-project',
      title:       'Proyecto y Arquitectura',
      description: 'Objetivos, marco legal, arquitectura de 3 microservicios, roles de seguridad y recursos del proyecto.',
    },
    {
      id:          'database',
      href:        'views/database_plan.html',
      icon:        'nav-icon-database',
      title:       'Modelo de Base de Datos',
      description: 'Diagrama ERD completo en PostgreSQL: beneficiarios, liquidaciones, auditoria e integridad referencial.',
    },
    {
      id:          'stories',
      href:        'views/user_stories.html',
      icon:        'nav-icon-stories',
      title:       'Historias de Usuario',
      description: 'Casos de uso organizados por epicas y sprints: requerimientos funcionales con criterios de aceptacion.',
    },
    {
      id:          'sitemap',
      href:        'views/site_map.html',
      icon:        'nav-icon-sitemap',
      title:       'Mapa del Sitio',
      description: 'Estructura de navegacion del sistema: zonas publicas, privadas y modulos por rol de usuario.',
    },
    {
      id:          'iso25010',
      href:        'views/iso_25010.html',
      icon:        'nav-icon-iso',
      title:       'ISO/IEC 25010',
      description: 'Las 8 caracteristicas de calidad del estandar aplicadas al sistema: seguridad, fiabilidad, mantenibilidad y mas.',
    },
    {
      id:          'patterns',
      href:        'views/design_patterns.html',
      icon:        'nav-icon-patterns',
      title:       'Patrones de Diseno',
      description: '11 patrones seleccionados: Microservicios, Repository, RBAC, Strategy, State Machine y JWT con Refresco.',
    },
    {
      id:          'team',
      href:        'views/team_distribution.html',
      icon:        'nav-icon-team',
      title:       'Distribucion del Equipo',
      description: 'Planificacion de sprints, carga de trabajo por desarrollador y cronograma de entregas.',
    },
    {
      id:          'members',
      href:        'views/team_members.html',
      icon:        'nav-icon-members',
      title:       'Perfil del Equipo',
      description: 'Integrantes del equipo ClustLayer, sus roles, tecnologias asignadas y responsabilidades.',
    },
  ],

  footer: {
    lines: [
      '© 2025 SILTGOV — Gobernacion del Valle del Cauca',
      'Equipo ClustLayer · Dev on time · Metodologia Scrum',
    ],
  },
};
