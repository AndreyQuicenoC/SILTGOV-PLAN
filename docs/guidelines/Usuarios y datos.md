# 1. USUARIO LIQUIDADOR

## 1.1 Sección: Dashboard

### Datos que visualiza

* ID de liquidación
* Número de radicado
* Nombre del beneficiario
* Tipo de proceso (sentencia, tutela, derecho de petición)
* Oficina
* Fecha de asignación
* Estado actual
* Fecha límite estimada
* Observaciones administrativas

---

## 1.2 Sección: Crear / Editar Liquidación

### Datos de Identificación del Caso

* ID interno de liquidación
* Número de sentencia
* Número de radicado
* Juzgado de origen
* Fecha de sentencia
* Tipo de fallo
* Oficina responsable
* Entidad pública
* Departamento

### Datos del Beneficiario

* Nombre completo
* Tipo de documento
* Número de documento
* Dirección
* Teléfono
* Correo electrónico
* Cargo desempeñado
* Tipo de vinculación (contrato, nombramiento, provisionalidad)
* Dependencia

### Datos Laborales

* Fecha de inicio laboral
* Fecha de terminación
* Tiempo total laborado
* Tipo de contrato
* Régimen aplicable
* Salario base
* Factores salariales adicionales
* Bonificaciones
* Auxilios
* Prima técnica (si aplica)
* Horas extras (si aplica)

### Datos de Cálculo

* Base salarial
* Días liquidados
* Intereses
* Indexación
* Ajustes por IPC
* Total liquidado
* Retenciones aplicables
* Valor neto a pagar

### Archivos Adjuntos

* Copia de sentencia
* Acto administrativo
* Soportes laborales
* Liquidación preliminar en PDF
* Observaciones técnicas

---

## 1.3 Sección: Estados

### Campos

* Estado actual
* Fecha cambio de estado
* Usuario que realizó el cambio
* Observación del cambio
* Historial completo de estados

---

## 1.4 Sección: Generar Documento

### Datos para PDF

* Encabezado institucional
* Datos del beneficiario
* Resumen del cálculo
* Desglose detallado
* Firma digital del liquidador
* Fecha de generación
* Código único de verificación

---

# 2. USUARIO ADMINISTRADOR

## 2.1 Sección: Registro de Sentencias

### Datos requeridos

* Número de radicado
* Tipo de proceso
* Fecha de ingreso
* Juzgado
* Resumen del fallo
* Oficina asignada
* Prioridad
* Fecha límite de cumplimiento
* Archivos adjuntos

---

## 2.2 Sección: Asignación de Liquidaciones

### Datos

* ID de liquidación
* Liquidador asignado
* Fecha de asignación
* Fecha estimada de entrega
* Estado inicial
* Observaciones

---

## 2.3 Sección: Gestión de Usuarios (Liquidadores)

### Datos del Liquidador

* Nombre completo
* Documento
* Correo institucional
* Oficina
* Rol
* Estado (activo/inactivo)
* Fecha de creación
* Historial de actividad

---

## 2.4 Sección: Autorización de Edición

### Datos

* ID de liquidación
* Usuario solicitante
* Motivo de edición
* Fecha de solicitud
* Fecha de autorización
* Estado de autorización
* Registro de quién autorizó

---

## 2.5 Sección: Reportes

### Filtros

* Fecha inicio / fin
* Liquidador
* Oficina
* Estado
* Tipo de proceso

### Datos generados

* Total liquidaciones
* Total valor liquidado
* Total pagado
* Promedio tiempo de respuesta
* Casos pendientes

---

# 3. USUARIO PAGADOR (HACIENDA)

## 3.1 Sección: Liquidaciones Terminadas

### Datos visibles

* ID de liquidación
* Beneficiario
* Oficina
* Valor aprobado
* Fecha de terminación
* Liquidador responsable
* Cuenta bancaria del beneficiario
* Soporte PDF

---

## 3.2 Sección: Registrar Pago

### Datos requeridos

* Fecha de pago
* Número de comprobante
* Valor pagado
* Banco
* Medio de pago
* Archivo soporte (comprobante)
* Usuario que registra pago
* Observación

---

## 3.3 Sección: Historial de Pagos

### Datos

* ID liquidación
* Fecha pago
* Valor pagado
* Diferencias (si existen)
* Estado contable
* Referencia presupuestal

---

# 4. SUPERUSUARIO (SOPORTE GLOBAL)

## 4.1 Sección: Gestión de Entidades

### Datos

* Departamento
* Ciudad
* Nombre entidad pública
* Tipo entidad
* NIT
* Dirección
* Contacto institucional
* Estado (activo/inactivo)
* Fecha creación

---

## 4.2 Sección: Gestión de Oficinas

### Datos

* Entidad asociada
* Nombre oficina
* Código interno
* Administrador asignado
* Estado

---

## 4.3 Sección: Auditoría Global

### Datos

* Usuario
* Rol
* Entidad
* Acción realizada
* Fecha y hora
* IP
* Dispositivo
* Estado de sesión
* Resultado de la acción

---

## 4.4 Sección: Reportes Globales

### Datos agregados

* Número total de entidades activas
* Total liquidaciones globales
* Total valores procesados
* Estadísticas por entidad
* Indicadores de uso
* (Sin acceso a datos confidenciales individuales)

---

# 5. DATOS TRANSVERSALES DEL SISTEMA

## 5.1 Seguridad

* ID sesión
* Token JWT
* Fecha inicio sesión
* Fecha expiración
* IP
* Dispositivo
* Navegador
* Intentos fallidos
* Registro 2FA

---

## 5.2 Control de Cambios

* ID registro modificado
* Campo modificado
* Valor anterior
* Valor nuevo
* Usuario
* Fecha
* Justificación

---

# 6. RESUMEN ESTRUCTURAL

Cada rol debe manejar:

* Datos estrictamente necesarios.
* Separación de funciones.
* Trazabilidad completa.
* Registro de auditoría.
* Control de estados.