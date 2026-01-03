# Resumen del Proyecto: Car Masters System v1.0

## 1. Contexto del Proyecto
Desarrollo de una plataforma integral de gestión (POS) y presencia digital para **Car Masters**, un taller de detailing y protección automotriz de alto nivel. El sistema combina una landing page de conversión con un panel administrativo robusto para la operación diaria.

## 2. Arquitectura Tecnológica
*   **Frontend (Cliente)**:
    *   **Framework**: React 18 + Vite.
    *   **Estilos**: Tailwind CSS (Diseño "Dark & Red" personalizado).
    *   **Animaciones**: Framer Motion (Transiciones suaves, efectos de entrada).
    *   **Iconografía**: Lucide React.
    *   **Estado**: React Hooks (useState, useEffect, useContext).
    *   **Hosting**: Cloudflare Pages (Optimizado para SPA).
*   **Backend (Servidor)**:
    *   **Runtime**: Node.js.
    *   **Framework**: Express.js.
    *   **Autenticación**: JWT (JSON Web Tokens).
    *   **Manejo de Archivos**: Multer (Subida de imágenes de órdenes).
    *   **Hosting**: Render / Hostinger (Compatible con Docker/Node).
*   **Base de Datos**:
    *   **ORM**: Drizzle / Consultas SQL directas (pg/sqlite3).
    *   **Motores**:
        *   *Desarrollo*: SQLite (local).
        *   *Producción*: PostgreSQL (Escalable).
    *   **Sincronización**: Script de auto-inicialización de esquemas (`database.js`).

## 3. Estado Actual de Funcionalidades (Funcionando al 100%)

### A. Módulo de Identidad & UI (Visual)
*   **Rediseño Total**: Implementación de paleta de colores `Zinc-950` (Fondo) y `Red-600` (Acentos).
*   **Experiencia de Usuario**: Efectos `backdrop-blur` (cristal), bordes sutiles y tipografía itálica/negrita para transmitir velocidad y elegancia.
*   **Landing Page**: Hero section interactiva, menú responsive, llamadas a la acción claras ("Cotizar Proyecto", "Acceso Clientes").

### B. Módulo de Seguridad (Auth)
*   **Login/Registro**: Pantallas totalmente estilizadas.
*   **Protección**: Rutas protegidas en el frontend (requieren Token válido).
*   **Persistencia**: Manejo de sesiones mediante `localStorage`.

### C. Módulo Administrativo (POS)
*   **Dashboard**: Métricas en tiempo real (Ventas del mes, Órdenes activas).
*   **Gestión de Clientes**:
    *   Modal de registro rápido ("Nuevo Cliente").
    *   Validación de datos (Teléfono, Email).
*   **Gestión de Órdenes**:
    *   Creación de órdenes de servicio vinculadas a clientes y vehículos.
    *   **Evidencia Visual**: Subida de imágenes del estado del vehículo.
    *   Cálculo automático de totales.
    *   Estados de orden (Pendiente, En Proceso, Terminado, Entregado).
*   **Inventario/Servicios**: Selector de servicios (Lavado, Detailing, PPF, Cerámico).

## 4. Estructura de Archivos Clave
*   `/client`: Código fuente del Frontend.
    *   `src/components/AdminPanel.jsx`: Núcleo del POS (Lógica de negocio + UI).
    *   `src/components/Login.jsx`: Puerta de entrada segura.
    *   `src/components/CarMastersHero.jsx`: Página de aterrizaje pública.
*   `/index.js`: Punto de entrada del Backend (API Routes).
*   `/database.js`: Capa de abstracción de datos (Maneja la conexión DB).

## 5. Próximos Pasos (Hoja de Ruta Inmediata)
1.  **Despliegue de Backend**: Subir el servidor a Render/Hostinger para que la API sea accesible mundialmente.
2.  **Conexión DNS Final**: Apuntar `carmasters.space` a Cloudflare Pages y `api.carmasters.space` al Backend.
3.  **Variables de Entorno**: Configurar `VITE_API_URL` en Cloudflare para que el Frontend sepa dónde está el Backend productivo.
4.  **Optimización PWA**: Asegurar que la app sea instalable en móviles (Manifest + Service Workers).

---
*Generado automáticamente por Trae AI - Asistente de Desarrollo Senior*
