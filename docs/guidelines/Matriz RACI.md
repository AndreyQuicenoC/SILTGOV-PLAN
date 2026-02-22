## CATEGORÍAS

* **R = Responsible (Ejecuta)**
* **A = Accountable (Responsable final / Aprueba)**
* **C = Consulted (Consultado)**
* **I = Informed (Informado)**

---

## 1. PROCESO: REGISTRO Y GESTIÓN DE SENTENCIAS

| Actividad                           | Liquidador | Administrador | Pagador | Superusuario |
| ----------------------------------- | ---------- | ------------- | ------- | ------------ |
| Registrar sentencia                 | I          | R / A         | I       | I            |
| Adjuntar documentos oficiales       | I          | R             | I       | I            |
| Validar integridad documental       | C          | A             | I       | I            |
| Modificar datos de sentencia        | I          | R / A         | I       | I            |
| Eliminar registro (según normativa) | I          | A             | I       | C            |

---

## 2. PROCESO: ASIGNACIÓN DE LIQUIDACIONES

| Actividad                           | Liquidador | Administrador | Pagador | Superusuario |
| ----------------------------------- | ---------- | ------------- | ------- | ------------ |
| Crear liquidación (desde sentencia) | I          | R / A         | I       | I            |
| Asignar liquidador                  | I          | R / A         | I       | I            |
| Reasignar liquidador                | I          | R / A         | I       | I            |
| Notificación de asignación          | I          | R             | I       | I            |

---

## 3. PROCESO: ELABORACIÓN DE LIQUIDACIÓN

| Actividad                   | Liquidador | Administrador | Pagador | Superusuario |
| --------------------------- | ---------- | ------------- | ------- | ------------ |
| Ingresar datos laborales    | R          | I             | I       | I            |
| Realizar cálculos           | R          | I             | I       | I            |
| Adjuntar soportes técnicos  | R          | I             | I       | I            |
| Solicitar edición posterior | R          | A             | I       | I            |
| Autorizar edición           | I          | R / A         | I       | I            |
| Marcar como terminada       | R          | I             | I       | I            |
| Supervisar consistencia     | C          | A             | I       | I            |

---

## 4. PROCESO: GENERACIÓN DE DOCUMENTOS

| Actividad                     | Liquidador | Administrador | Pagador | Superusuario |
| ----------------------------- | ---------- | ------------- | ------- | ------------ |
| Generar PDF oficial           | R          | I             | I       | I            |
| Validar formato institucional | C          | A             | I       | I            |
| Descargar documento           | R          | R             | R       | I            |

---

## 5. PROCESO: PAGO

| Actividad                           | Liquidador | Administrador | Pagador | Superusuario |
| ----------------------------------- | ---------- | ------------- | ------- | ------------ |
| Visualizar liquidaciones terminadas | I          | I             | R       | I            |
| Registrar pago                      | I          | I             | R / A   | I            |
| Subir soporte de pago               | I          | I             | R       | I            |
| Cambiar estado a “Pagado”           | I          | I             | R       | I            |
| Supervisar ejecución presupuestal   | I          | A             | R       | I            |

---

## 6. PROCESO: GESTIÓN DE USUARIOS

| Actividad                       | Liquidador | Administrador | Pagador | Superusuario |
| ------------------------------- | ---------- | ------------- | ------- | ------------ |
| Crear usuario liquidador        | I          | R / A         | I       | I            |
| Desactivar usuario              | I          | R / A         | I       | C            |
| Crear entidad pública           | I          | I             | I       | R / A        |
| Crear oficina                   | I          | I             | I       | R / A        |
| Asignar administrador a oficina | I          | I             | I       | R / A        |

---

## 7. PROCESO: SEGURIDAD Y AUDITORÍA

| Actividad                         | Liquidador | Administrador | Pagador | Superusuario |
| --------------------------------- | ---------- | ------------- | ------- | ------------ |
| Inicio de sesión                  | R          | R             | R       | R            |
| Autenticación 2FA                 | R          | R             | R       | R            |
| Registro de logs                  | I          | I             | I       | A            |
| Monitoreo de actividad sospechosa | I          | C             | I       | R / A        |
| Generar reporte de auditoría      | I          | C             | I       | R / A        |

---

## 8. PROCESO: REPORTES

| Actividad                    | Liquidador | Administrador | Pagador | Superusuario |
| ---------------------------- | ---------- | ------------- | ------- | ------------ |
| Consultar reporte individual | R          | R             | I       | I            |
| Generar reporte por oficina  | I          | R / A         | I       | I            |
| Generar reporte global       | I          | I             | I       | R / A        |
| Exportar reportes            | I          | R             | I       | R            |

---

## 9. RESPONSABILIDADES CLAVE POR ROL (RESUMEN EJECUTIVO)

### Liquidador

* Ejecuta cálculos.
* Genera documentos.
* Solicita modificaciones.
* No aprueba ni paga.

### Administrador

* Responsable final de la oficina.
* Registra sentencias.
* Asigna casos.
* Autoriza modificaciones.
* Supervisa resultados.

### Pagador

* Ejecuta pagos.
* Cambia estado a pagado.
* Adjunta soporte contable.

### Superusuario

* Configura estructura institucional.
* Supervisa auditoría.
* Administra entidades.
* No accede a información sensible detallada.

---

## 10. PRINCIPIO FUNDAMENTAL

La matriz garantiza:

* Separación estricta de funciones.
* Prevención de fraude.
* Trazabilidad total.
* Control jerárquico claro.
* Cumplimiento normativo en sector público.
