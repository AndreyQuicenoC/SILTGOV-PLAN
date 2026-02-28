## ESTRUCTURA INICIAL

Estructura pensada con:

* Navbar persistente superior
* Sidebar contextual por rol
* Vista de Perfil editable (solo contacto)
* Footer global con accesos legales y soporte
* Aceptación obligatoria de Términos y Condiciones en primer ingreso o actualización

---

# 1. ESTRUCTURA GLOBAL (COMÚN A TODOS LOS USUARIOS)

## 1.1 Navbar Superior (Global)

Elementos:

* Logo institucional
* Nombre del sistema
* Selector de entidad/oficina (si aplica)
* Notificaciones
* Ícono de ayuda rápida
* Perfil (dropdown)

  * Ver perfil
  * Editar contacto
  * Cerrar sesión

---

## 1.2 Vista de Perfil (Todos los roles)

Información visible (no editable):

* Nombre completo
* Documento
* Rol
* Entidad
* Oficina
* Fecha de creación
* Estado de cuenta

Campos editables:

* Número de teléfono
* Correo electrónico

Acciones:

* Guardar cambios
* Cambiar contraseña
* Configurar autenticación 2FA

---

## 1.3 Footer Global (Visible en todo el sistema)

* FAQ
* Términos y Condiciones
* Manual de Usuario
* Política de Tratamiento de Datos
* Contacto Soporte Técnico
* Versión del sistema
* Información legal institucional

---

## 1.4 Aceptación de Términos

Condiciones:

* Obligatorio en primer inicio de sesión.
* Obligatorio cuando se actualicen términos.

Modal con:

* Documento completo.
* Check obligatorio.
* Botón “Aceptar”.

Registro en base de datos con:

* Usuario
* Fecha
* Versión aceptada
* IP

---

# 2. MAPA DE SITIO – USUARIO LIQUIDADOR

Navbar Principal:

* Dashboard
* Mis Liquidaciones
* Crear Liquidación
* Documentos
* Reportes
* Perfil (dropdown)

---

## 2.1 Dashboard

* Resumen de casos asignados
* Liquidaciones pendientes
* Liquidaciones en proceso
* Liquidaciones terminadas
* Alertas de vencimiento

---

## 2.2 Mis Liquidaciones

Subsecciones:

* Todas
* En proceso
* Terminadas
* Devueltas para edición

Acciones:

* Ver detalle
* Editar (si autorizado)
* Generar PDF
* Historial de cambios

---

## 2.3 Crear Liquidación

Formulario estructurado:

* Datos de sentencia
* Datos del beneficiario
* Datos laborales
* Cálculo automático
* Adjuntar documentos

Acciones:

* Guardar borrador
* Enviar a revisión

---

## 2.4 Documentos

* Liquidaciones generadas
* Historial de PDFs
* Descargas

---

## 2.5 Reportes

* Estadísticas personales
* Tiempo promedio de entrega
* Cantidad de casos procesados

---

# 3. MAPA DE SITIO – USUARIO ADMINISTRADOR

Navbar Principal:

* Dashboard
* Sentencias
* Asignaciones
* Liquidaciones
* Usuarios (Liquidadores)
* Reportes
* Perfil

---

## 3.1 Dashboard

* Total sentencias registradas
* Liquidaciones en proceso
* Casos vencidos
* Casos pagados
* Indicadores de oficina

---

## 3.2 Sentencias

* Registrar nueva sentencia
* Ver listado
* Editar información
* Adjuntar documentos

---

## 3.3 Asignaciones

* Asignar liquidador
* Reasignar
* Control de tiempos
* Estado de ejecución

---

## 3.4 Liquidaciones

* Ver todas las liquidaciones
* Autorizar edición
* Supervisar cambios
* Historial completo

---

## 3.5 Usuarios (Liquidadores)

* Crear usuario liquidador
* Activar / desactivar
* Ver historial
* Restablecer acceso

---

## 3.6 Reportes

* Reporte por fecha
* Reporte por liquidador
* Reporte financiero preliminar
* Exportar PDF/Excel

---

# 4. MAPA DE SITIO – USUARIO PAGADOR (HACIENDA)

Navbar Principal:

* Dashboard
* Liquidaciones Pendientes de Pago
* Historial de Pagos
* Reportes Financieros
* Perfil

---

## 4.1 Dashboard

* Total pendiente de pago
* Total pagado del mes
* Casos urgentes
* Alertas presupuestales

---

## 4.2 Liquidaciones Pendientes

* Listado filtrable
* Ver detalle
* Descargar liquidación
* Registrar pago
* Subir comprobante

---

## 4.3 Historial de Pagos

* Pagos realizados
* Estado contable
* Diferencias detectadas
* Exportar reporte

---

## 4.4 Reportes Financieros

* Total pagado por período
* Total por oficina
* Ejecución presupuestal

---

# 5. MAPA DE SITIO – SUPERUSUARIO

Navbar Principal:

* Dashboard Global
* Entidades
* Oficinas
* Usuarios
* Auditoría
* Reportes Globales
* Perfil

---

## 5.1 Dashboard Global

* Número total de entidades activas
* Total liquidaciones globales
* Indicadores de uso
* Alertas de seguridad

---

## 5.2 Entidades

* Crear entidad pública
* Editar entidad
* Activar / desactivar
* Asignar estructura territorial

---

## 5.3 Oficinas

* Crear oficina
* Asociar administrador
* Configuración interna

---

## 5.4 Usuarios

Subsecciones:

* Crear Administrador

* Crear Usuario Pagador

* Ver Usuarios por Entidad

* Desactivar / Activar

* Reset de credenciales

* (El superusuario es el único que puede crear administradores y pagadores)

---

## 5.5 Auditoría

* Logs de acceso
* Intentos fallidos
* Actividad sospechosa
* Cambios críticos
* Exportación de auditoría

---

## 5.6 Reportes Globales

* Uso por entidad
* Volumen de liquidaciones
* Estadísticas comparativas
* Indicadores del sistema

---

# 6. APARTADOS TRANSVERSALES DE GESTIÓN

## Manual de Usuario

Sección estructurada por rol:

* Guía Liquidador
* Guía Administrador
* Guía Pagador
* Guía Superusuario

## FAQ

Clasificado por:

* Acceso
* Seguridad
* Gestión de liquidaciones
* Pagos
* Problemas técnicos

---

# 7. PRINCIPIOS DE DISEÑO APLICADOS

* Separación clara por rol.
* Menús minimalistas.
* Navegación jerárquica simple.
* Formularios estructurados.
* Acceso rápido a acciones principales.
* Footer institucional constante.
* Control legal visible y obligatorio.