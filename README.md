# SILTGOV — Sistema Integrado de Liquidaciones

> **Equipo ClustLayer** · *Dev on time*

Plataforma web en la nube para la **Gobernación del Valle del Cauca (Colombia)** que digitaliza y automatiza el ciclo administrativo de liquidaciones derivadas de sentencias judiciales, desde el registro del fallo hasta el pago y comprobación.

---

## Equipo

| Integrante | Rol |
|---|---|
| Andrey Quiceno | Frontend / UX |
| Francesco | Arquitectura / Backend |
| Iván | Infraestructura / Backend |

---

## Datos del proyecto

| Ítem | Detalle |
|---|---|
| **Metodología** | Scrum — 5 sprints de entrega (épicas) |
| **Historias de usuario** | 37 HU distribuidas en los 5 sprints |
| **Plataforma** | Solo web · Colombia · nube AWS |
| **Sprint de cimentación** | Semana 1 — base técnica e identidad visual |

---

## Arquitectura (resumen)

Microservicios desplegados en **AWS EC2**, base de datos **PostgreSQL en Amazon RDS**, almacenamiento de archivos en **Amazon S3**, entrega estática por **CloudFront/S3**. API Gateway como punto de entrada unificado.

**4 microservicios**:
- 🔐 **Usuarios y Auth** — registro, login, JWT, 2FA (TOTP), control de roles
- 📊 **Liquidaciones** — sentencias, cálculos, estados, beneficiarios
- 📄 **Documentos de Pago** — generación PDF (PDFKit), comprobantes, adjuntos
- 📋 **Logs y Auditoría** — registro inmutable, retención **4 años**, solo Superusuario

---

## Calidad y normativa

El sistema se alineará a:
- **ISO/IEC 25010** — calidad del producto software (funcionalidad, seguridad, fiabilidad, mantenibilidad, usabilidad…)
- **ISO/IEC 27001** — seguridad de la información en el sector público colombiano
- Normativa de actos administrativos y separación de funciones (antifrau interno)

---

## Colores institucionales

| Color | Hex | Uso |
|---|---|---|
| Azul institucional | `#1C5BB8` | Primario / cabeceras |
| Verde | `#34A853` | Confirmaciones / estado exitoso |
| Dorado | `#FBBC05` | Alertas / acentos |
| Blanco / Gris oscuro | `#FFFFFF` / `#1F2937` | Fondos (modo claro/oscuro) |

---

## Documentación del plan

La carpeta `views/` contiene las páginas del plan del proyecto:

| Vista | Contenido |
|---|---|
| `project.html` | Resumen general, arquitectura, roles, alcance |
| `iso_25010.html` | Calidad del software — ISO/IEC 25010 |
| `design_patterns.html` | Patrones de diseño aplicados |
| `site_map.html` | Mapa del sitio |
| `team_distribution.html` | Distribución del equipo por sprint |
| `team_members.html` | Integrantes |
| `user_stories.html` | 37 historias de usuario |
| `database_plan.html` | Modelo de base de datos |
