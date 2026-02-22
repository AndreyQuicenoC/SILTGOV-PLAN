// ============================================================
// data.js  Datos de Historias de Usuario
// Proyecto: SILTGOV  Sistema Integrado de Liquidaciones
// ============================================================

const EMBEDDED_DATA = {
  siltgov: {
    userStories: [
      {
        code: "HU-00",
        title: "Ejemplo de historia de usuario",
        sprint: "S1",
        epic: "E-0 Nombre de la Epica",
        points: 3,
        description: "Como [rol]\nQuiero [accion]\nPara [beneficio].",
        acceptanceCriteria: [
          "Criterio de aceptacion 1.",
          "Criterio de aceptacion 2.",
        ],
        definitionOfDone: [
          "Validacion tecnica completada.",
          "Pruebas funcionales aprobadas.",
        ],
        tasks: [
          {
            id: "T-00-1",
            title: "Descripcion de la tarea",
            assignedTo: "Responsable",
            role: "rol",
          },
        ],
        assignedTo: "Responsable principal",
      },
    ],
  },
};
