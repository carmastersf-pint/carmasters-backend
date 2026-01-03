# 🚀 Guía de Despliegue y Mantenimiento

Este documento es para el encargado técnico del sistema.

## 1. Estado Actual (Validado)
*   **Frontend**: Construido en `client/dist`. Listo para producción.
*   **Backend**: Alojado en Render (`carmasters-api.onrender.com`).
*   **Conexión**: El Frontend está configurado para hablar directamente con el backend de Render para máxima estabilidad.

## 2. Pasos para Actualizar el Sistema

### Si haces cambios en el código (Visuales o Lógica):
1.  Abre la terminal en `gestor-taller/client`.
2.  Ejecuta: `npm run build`
3.  Esto actualizará la carpeta `dist`.
4.  Sube el contenido de la carpeta `dist` a **Cloudflare Pages**.

### Si haces cambios en el Backend:
1.  Guarda los cambios.
2.  Haz `git add .`, `git commit -m "cambios"`, `git push`.
3.  Render detectará los cambios y redesplegará automáticamente.

## 3. Solución de Problemas Comunes

### 🔴 "Error de Red" o "Network Error"
*   Verifica que el backend en Render no esté "dormido" (Render apaga servidores gratuitos tras inactividad). Abre `https://carmasters-api.onrender.com` en el navegador para "despertarlo".
*   Verifica tu conexión a internet.

### 🔴 Imágenes no cargan
*   Asegúrate de que el backend esté corriendo. Las imágenes se guardan en el servidor.
*   Si cambiaste de servidor, las imágenes subidas anteriormente podrían perderse (en el plan gratuito de Render, el disco es efímero). **Recomendación para futuro**: Usar Cloudinary o AWS S3 para imágenes.

### 🔴 Dominio Personalizado (api.carmasters.space)
*   Actualmente desactivado para evitar errores.
*   Si deseas reactivarlo:
    1. Ve a Render Dashboard > Settings > Custom Domains.
    2. Añade `api.carmasters.space`.
    3. Configura el DNS en Cloudflare como se indicó anteriormente.
    4. Cambia `VITE_API_URL` en `client/.env.production`.
    5. Reconstruye el frontend (`npm run build`).
