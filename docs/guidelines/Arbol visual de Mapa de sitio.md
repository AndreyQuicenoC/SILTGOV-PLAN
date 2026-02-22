ESTRUCTURA GLOBAL (Todos los roles)
Sistema de Liquidaciones
│
├── Navbar
│   ├── Logo
│   ├── Nombre del sistema
│   ├── Notificaciones
│   ├── Ayuda rápida
│   └── Perfil
│       ├── Ver perfil
│       ├── Editar contacto
│       ├── Cambiar contraseña
│       ├── Configurar 2FA
│       └── Cerrar sesión
│
├── Modal obligatorio
│   └── Aceptación de Términos y Condiciones
│
└── Footer
    ├── FAQ
    ├── Términos y Condiciones
    ├── Política de Datos
    ├── Manual de Usuario
    ├── Soporte Técnico
    └── Versión del sistema


USUARIO LIQUIDADOR
Liquidador
│
├── Dashboard
│   ├── Casos asignados
│   ├── En proceso
│   ├── Terminados
│   └── Alertas
│
├── Mis Liquidaciones
│   ├── Todas
│   ├── En proceso
│   ├── Terminadas
│   └── Devueltas
│
├── Crear Liquidación
│   ├── Datos sentencia
│   ├── Datos beneficiario
│   ├── Datos laborales
│   ├── Cálculo automático
│   ├── Adjuntar documentos
│   └── Generar PDF
│
├── Documentos
│   ├── Liquidaciones generadas
│   └── Historial PDF
│
└── Reportes
    ├── Estadísticas personales
    └── Tiempos de respuesta


USUARIO ADMINISTRADOR
Administrador
│
├── Dashboard
│   ├── Total sentencias
│   ├── En proceso
│   ├── Pagadas
│   └── Alertas
│
├── Sentencias
│   ├── Registrar nueva
│   ├── Ver listado
│   └── Editar
│
├── Asignaciones
│   ├── Asignar liquidador
│   ├── Reasignar
│   └── Control tiempos
│
├── Liquidaciones
│   ├── Ver todas
│   ├── Autorizar edición
│   └── Historial cambios
│
├── Usuarios (Liquidadores)
│   ├── Crear
│   ├── Activar / Desactivar
│   └── Ver actividad
│
└── Reportes
    ├── Por fecha
    ├── Por liquidador
    └── Exportar


USUARIO PAGADOR
Pagador
│
├── Dashboard
│   ├── Pendientes de pago
│   ├── Total mes
│   └── Alertas presupuestales
│
├── Liquidaciones Pendientes
│   ├── Ver detalle
│   ├── Descargar soporte
│   ├── Registrar pago
│   └── Subir comprobante
│
├── Historial de Pagos
│   ├── Pagos realizados
│   ├── Diferencias
│   └── Exportar
│
└── Reportes Financieros
    ├── Total pagado
    ├── Por oficina
    └── Ejecución presupuestal


SUPERUSUARIO
Superusuario
│
├── Dashboard Global
│   ├── Entidades activas
│   ├── Total liquidaciones
│   └── Alertas seguridad
│
├── Entidades
│   ├── Crear entidad
│   ├── Editar
│   └── Activar / Desactivar
│
├── Oficinas
│   ├── Crear oficina
│   ├── Asignar administrador
│   └── Configuración
│
├── Usuarios
│   ├── Crear Administrador
│   ├── Crear Pagador
│   ├── Ver por entidad
│   └── Desactivar
│
├── Auditoría
│   ├── Logs acceso
│   ├── Actividad sospechosa
│   └── Exportar reporte
│
└── Reportes Globales
    ├── Uso por entidad 
    ├── Volumen procesado
    └── Estadísticas comparativas