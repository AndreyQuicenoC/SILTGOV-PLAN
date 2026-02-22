// ============================================================
// database_data.js  Modelo de Base de Datos
// Proyecto: SILTGOV  Sistema Integrado de Liquidaciones
// ============================================================

const DATABASE_DATA = {
  title: "Modelo de Base de Datos  Ejemplo",
  subtitle: "Descripcion del modelo relacional.",
  tables: [
    {
      id: "example_table",
      name: "ExampleTable",
      x: 40,
      y: 40,
      width: 280,
      height: 100,
      color: "#f8fafc",
      stroke: "#e6eef8",
      fields: [
        { name: "id", type: "PK", isPK: true, note: "SERIAL PRIMARY KEY" },
        { name: "nombre", type: "field", note: "VARCHAR(255) NOT NULL" },
        { name: "created_at", type: "field", note: "TIMESTAMP DEFAULT NOW()" },
      ],
    },
  ],
  relationships: [
    {
      from: "table_a.fk_field",
      to: "table_b.id",
      type: "many-to-one",
    },
  ],
};
