# Contexto General

Equipo conformado por 3 integrantes con responsabilidades claramente segmentadas.

Velocidad estimada del equipo:
18 puntos por sprint.

Duración de sprint:
1 semana.

Horizonte de planeación:
Aproximadamente 3 meses (12 sprints).

Capacidad estimada total:
18 puntos × 12 sprints = 216 puntos proyectados.

Lógica de estimación:
Poker Scrum.

Asignación:
Cada HU tiene tareas, a cada HU se asigna una persona

La planificación será iterativa, con entregables funcionales al final de cada sprint.

---

# 2. Asignación de Responsabilidades por Rol

## Juan Francesco García Vargas

### Responsable:

Backend, Seguridad y Autenticación (Backend)

### Alcance General

* Diseño e implementación de arquitectura backend.
* Modelado de base de datos.
* Implementación de lógica de negocio (liquidaciones, estados, validaciones).
* API REST estructurada por módulos.
* Control de roles y permisos.

Seguridad en backend:

* JWT.
* Encriptación de contraseñas.
* Manejo de sesiones.
* Control de acceso por rol.
* Middleware de autorización.
* Auditoría y logs.
* Integración con módulo de 2FA.
* Gestión de estados del flujo (En proceso, Terminado, Pagado).
* Versionamiento de endpoints.

### Entregables esperados

* Backend funcional modular.
* Documentación básica de endpoints.
* Esquema de roles y permisos.
* Validaciones robustas en servidor.

---

## Ivan Ausecha Salamanca

### Responsable

DevOps, Calidad Técnica y Seguridad Complementaria

### Alcance General

* Configuración del repositorio (estructura limpia y estandarizada).
* Pipeline CI/CD.
* Integración con SonarCloud.
* Validaciones automáticas:

  * ESLint.
  * Prettier.
  * Reglas de calidad.
  * Verificación automática de build.
* Estrategia de ramas (Git Flow o simplificado).
* Configuración de entorno de pruebas.
* Gestión de variables de entorno.

Implementación:

* Recuperación de contraseña.
* Autenticación en dos pasos (2FA).
* Configuración de seguridad en despliegue.
* Control de versiones y convenciones de commits.
* Documentación técnica del entorno.

### Entregables esperados

* Pipeline estable.
* Control de calidad automatizado.
* Reporte continuo de calidad de código.
* Sistema de recuperación de contraseña funcional.
* 2FA integrado con backend.

---

## Adolfo Andrey Quiceno

### Responsable

Diseño Web, UX/UI y Dirección del Proyecto

### Alcance General

* Diseño visual del sistema.
* Diseño del navbar.
* Diseño del footer (FAQ, Términos, Manual).
* Diseño del apartado Perfil.
* Diseño de flujos de usuario.
* Wireframes.
* Definición de experiencia UX para usuarios adultos.
* Validación visual de accesibilidad.
* Definición de estructura tipo Excel innovadora.
* Consistencia visual.
* Prototipos base.
* Supervisión del cumplimiento de experiencia de usuario.
* Coordinación general del sprint.
* Revisión final antes de liberar sprint.

### Entregables esperados

* Sistema visual coherente.
* Prototipos aprobados.
* Flujo UX simplificado.
* Manual visual base.
* Validación de calidad estética y funcional.

---

# 3. DURANTE EL DESARROLLO

## Dinámica de Trabajo

* Reunión de planificación cada semana.
* Definición de historias hasta completar 18 puntos.
* Revisión interna de calidad antes de cierre.
* Demo funcional al final de cada sprint.
* Retroalimentación y ajuste para siguiente sprint.

---

## Criterios de Calidad

No se aprueba sprint con:

* Build roto.
* SonarCloud en rojo.
* Vulnerabilidades críticas.
* Errores visuales graves.
* Flujos incompletos.

Toda historia debe cumplir:

* Validación técnica.
* Validación funcional.
* Validación visual.
* Validación de seguridad.