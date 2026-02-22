// ============================================================
// team_data.js  Distribucion del Equipo por Sprint
// Proyecto: SILTGOV  Sistema Integrado de Liquidaciones
// ============================================================

const TEAM_DATA = {
  description: "Descripcion general del equipo y su metodologia de trabajo.",
  epics: [
    {
      id: "E-0",
      name: "Nombre de la Epica",
      color: "#3b82f6",
      description: "Descripcion breve de lo que cubre esta epica.",
    },
  ],
  sprints: [
    {
      id: "sprint-1",
      name: "Sprint 1: Nombre del sprint",
      duration: "Semana 1",
      color: "#3b82f6",
      goal: "Objetivo del sprint.",
      teamNote: "Descripcion de lo esperable del equipo en este sprint.",
      stories: [
        {
          code: "HU-00",
          title: "Historia de ejemplo",
          points: 3,
          assignedTo: "Responsable",
          tasks: [
            {
              id: "T-00-1",
              title: "Tarea de ejemplo",
              assignedTo: "Responsable",
              role: "rol",
            },
          ],
        },
      ],
    },
  ],
};
