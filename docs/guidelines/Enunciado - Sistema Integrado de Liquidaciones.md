# DOCUMENTACIÓN TÉCNICA

Sistema Integral de Liquidaciones – Gobernación del Valle

---

# 1. MARCO LEGAL Y CONTEXTUAL

## 1.1 Objeto del Sistema

Desarrollar un sistema en la nube para:

* Gestión de liquidaciones derivadas de sentencias.
* Respuesta a derechos de petición relacionados con pagos.
* Administración de estados de pago.
* Control de trazabilidad y auditoría.
* Automatización del proceso administrativo posterior al fallo judicial.

### Alcance

* El sistema no interviene en el proceso judicial. Opera desde la fase administrativa de ejecución de la sentencia como apoyo procedimental.

---

## 1.2 Contexto Institucional

* El sistema está diseñado para operar en múltiples entidades públicas (Gobernaciones, Alcaldías, Secretarías, etc.), bajo un modelo multi-entidad centralizado.
* Ejemplo de entidad objetivo: Gobernación del Valle del Cauca

---

## 1.3 Estructura Jurídica del Proyecto

### Modelo de Comercialización

Dado que el equipo desarrollador está conformado por estudiantes y no por una empresa constituida, se propone:

* Intermediación jurídica a través de la Fundación Univalle.
* La fundación actúa como representante contractual.
* El software permanece como propiedad intelectual del equipo.
* La fundación percibe un porcentaje (%) por intermediación que se debe considerar en el pago del equipo de desarrolladores.

Esto permite:

* Cumplir requisitos de contratación pública.
* Evitar riesgos legales individuales.
* Formalizar facturación y obligaciones tributarias.
* Recibir el apoyo legal de carácter público para la media o baja experiencia de los desarrolladores.

---

## 1.4 Principios Normativos Aplicables

El sistema debe alinearse con:

* Principios de legalidad administrativa.
* Protección de datos personales.
* Trazabilidad y auditoría de actos administrativos.
* Separación de funciones.
* Prevención de fraude interno.
* Seguridad de la información en el sector público.

---

# 2. MODELO FUNCIONAL

## 2.1 Alcance Funcional General

El sistema permite:

* Registrar sentencias.
* Asignar liquidaciones.
* Calcular liquidaciones automáticamente.
* Gestionar estados.
* Validar pagos.
* Generar reportes.
* Registrar actividad y auditoría.
* Generar pdfs.

---

# 3. MODELO DE USUARIOS Y ROLES

## 3.1 Tipos de Usuario

### 1. Liquidador

#### Funciones:

* Crear liquidaciones.
* Ingresar datos de cálculo.
* Editar liquidaciones (con autorización).
* Marcar liquidación como “terminada”.

#### Restricciones:

* No puede registrar sentencias.
* No puede crear usuarios.
* No puede cambiar de estado a “pagado”.

---

### 2. Administrador

#### Perfil:

* Jefe de oficina.

#### Funciones:

* Registrar sentencias.
* Asignar liquidaciones.
* Autorizar edición.
* Crear usuarios liquidadores.
* Generar reportes internos.

#### Restricciones:

* No puede ejecutar cálculos.
* No puede acceder a otras entidades.

---

### 3. Usuario Pagador (Hacienda)

#### Funciones:

* Visualizar liquidaciones terminadas.
* Subir soporte de pago.
* Cambiar de estado a “pagado”.

#### Objetivo:

* Evitar procesos manuales.
* Garantizar separación de funciones.
* Mantener trazabilidad.

---

### 4. Superusuario (Soporte Global)

#### Funciones:

* Crear departamentos.
* Crear entidades públicas.
* Crear oficinas.
* Crear administradores.
* Crear pagadores.
* Habilitar nuevas entidades en el sistema.
* Generar reportes agregados.

#### Restricción:

* No accede a información confidencial específica.

---

# 4. MODELO DE ESTADOS

Cada liquidación puede tener cuatro estados:

* Creada

* En proceso

* Terminada

* Pagada

* Transiciones controladas por rol.

---

# 5. ARQUITECTURA DEL SISTEMA

## 5.1 Modelo General

Arquitectura basada en microservicios ligeros:

* Microservicio de Usuarios.
* Microservicio de Liquidaciones.
* Microservicio de Seguridad (logs y auditoría).
* No se utilizará una fragmentación excesiva para evitar latencia y complejidad.

---

## 5.2 Infraestructura

Despliegue previsto en:

* Amazon Web Services.
* Cloudflare.
* Modelo SaaS multi-entidad centralizado.

---

## 5.3 Modelo Multi-Entidad

Tablas estructurales clave:

* Departamento.
* Entidad pública.
* Oficina.
* Usuarios.
* Liquidaciones.
* Estados.
* Logs.
* Separación lógica por entidad y oficina.

---

# 6. SEGURIDAD DE LA INFORMACIÓN

## 6.1 Amenazas Identificadas

* SQL Injection.
* Interceptación de peticiones.
* Suplantación de microservicios.
* Robo de credenciales.
* Manipulación política o fraude interno.

---

## 6.2 Medidas Técnicas

### 6.2.1 Prevención de SQL Injection

* Uso obligatorio de consultas parametrizadas.
* Validación en pipeline CI/CD.

---

### 6.2.2 Autenticación

* JWT como mecanismo de autorización.
* Tokens en header.
* Llaves pública/privada.
* Encriptación de tráfico.
* Autenticación de doble factor (2FA).
* Validación por IP y dispositivo.

---

### 6.2.3 Registro de Auditoría

Se almacenará:

* IP.
* Dispositivo.
* Hora.
* Usuario.
* Acción realizada.
* Microservicio exclusivo de logs.

---

### 6.2.4 Separación de Funciones

* Liquidador no paga.
* Administrador no liquida.
* Pagador no crea liquidaciones.
* Superusuario no accede a datos sensibles.

---

# 7. MODELO DE INTERFAZ (UI/UX)

## 7.1 Público Objetivo

* Contadores.
* Abogados.
* Auxiliares administrativos.
* Perfil con baja tolerancia a interfaces complejas.

---

## 7.2 Lineamientos

* Colores neutros (azul, blanco, negro).
* Diseño sobrio.
* Formularios estructurados.
* Experiencia similar a entorno tipo Excel.
* Generación automática de PDF.

Referencia estructural basada en sistemas administrativos existentes como:

* SAP ERP (No replicar diseño, solo estructura funcional).

---

# 8. ESTRATEGIA DE DESARROLLO

## 8.1 Fases

* Diseño en Figma.
* Planeación Scrum en Taiga.
* Desarrollo de microservicios.
* Integración front-back.
* Pruebas internas.
* Versión Beta (70% funcional).
* Presentación a entidad.
* Firma contractual.

---

## 8.2 Equipo Propuesto

* Arquitectura y Seguridad.
* Frontend y Product Owner.
* DevOps y pipelines.
* Apoyo técnico adicional.

---

# 9. MODELO DE GOBERNANZA DEL PROYECTO

## 9.1 Control de Versiones

* Repositorio Git.
* Branching controlado.
* CI/CD automatizado.

---

## 9.2 Entregables Clave

* Prototipo Figma.
* Documento técnico.
* Modelo relacional.
* Arquitectura de microservicios.
* Demo funcional.
* Documento legal preliminar.

---

# 10. CONSIDERACIONES CRÍTICAS

* Sistema con impacto político potencial.
* Alta exigencia en seguridad.
* Necesidad de respaldo legal sólido.
* Trazabilidad completa obligatoria.
* Diseño enfocado en funcionalidad, no estética.

---

# 11. CONCLUSIÓN

El proyecto integra:

* Marco legal claro.
* Separación estricta de funciones.
* Arquitectura segura.
* Modelo multi-entidad escalable.
* Estrategia contractual viable.
* Plan de desarrollo estructurado.
