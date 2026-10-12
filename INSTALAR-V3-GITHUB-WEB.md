# Instalar IVANGUYS 3.0 con github.dev (sin instalar programas)

Esta actualización modifica tu repositorio **ivanalonsomendez15-cpu/ivanguys-web**.

## Pasos

1. Haz una **copia de seguridad** de la versión actual (en GitHub: Code → Download ZIP).
2. Abre `https://github.dev/ivanalonsomendez15-cpu/ivanguys-web` e inicia sesión.
3. Descarga `IVANGUYS-WEB-V3-ACTUALIZACION.zip`, descomprímelo y abre la carpeta `ACTUALIZACION-V3`.
4. **Desde Windows** selecciona todos los archivos y la carpeta `assets` de su interior, y arrástralos a la **raíz** `ivanguys-web` del Explorador de github.dev. Confirma reemplazar archivos si lo pregunta; en algunas versiones reemplaza directamente.
5. Verifica las marcas **M** junto a los archivos modificados (`index.html`, `styles.css`, `app.js`, `games.js`, `hub.html`, `world.js`, etc.), y **A/U** junto a los nuevos (`social.html`, `social.js`, `config-v3.js`, `zelda-trailer.js`, `firebase-config.js`, `assets`, etc.). No debe crearse una carpeta adicional `ACTUALIZACION-V3` dentro del repositorio.
6. **NO BORRES NI REEMPLACES** `.github/`, `data/`, `scripts/` ni el archivo `config.js` existente: así conservas YouTube y los ajustes de la comunidad. El nuevo `config-v3.js` actualiza **solo las fechas Zelda y el tráiler** sin tocar la configuración previa.
7. Pulsa el icono de **Control de código fuente** (rama) en la barra izquierda, después **+** para preparar todos los cambios. Escribe como mensaje `IVANGUYS V3 - Zelda + CONNECT + 30 juegos`. Pulsa **Commit** y luego **Sync Changes** o **Push**.
8. Ve a `https://github.com/ivanalonsomendez15-cpu/ivanguys-web/actions`. Espera a que la publicación de GitHub Pages termine en verde. Abre `https://ivanalonsomendez15-cpu.github.io/ivanguys-web/` y fuerza la recarga con Ctrl+F5.
9. Comprueba `#zelda`, `#arcade`, `world.html`, `hub.html` y `social.html`. **La sección CONNECT muestra un aviso de configuración**, no permite crear cuentas, hasta seguir la guía `CONFIGURAR-CONNECT.md` y publicar las reglas de Firebase.

## Qué está disponible inmediatamente

- Zelda: 4 de noviembre de 22:50 a 5 de noviembre a la 01:15, trailer enlazado `https://www.youtube.com/watch?v=4xtmm2H0W_0`, miniatura en `assets/zelda-ocarina-thumb.webp`.
- Los **30 juegos** sin servidor y el mundo 3D con mejores materiales y sombras (requiere WebGL y conexión para cargar Three.js).

## Qué necesita configuración adicional

- Registro con contraseña, fotos de perfil, solicitudes de amistad, mensajes privados, estado conectado/desconectado, llamadas de voz, subidas de vídeo y moderación requieren **Firebase Authentication, Firestore, Storage y reglas de seguridad**.
- **No** es una plataforma de streaming del tamaño de YouTube ni un juego hiperrealista AAA. Las llamadas pueden requerir TURN en algunas redes.
- Si usas Firebase, revisa políticas de privacidad, edad mínima y gastos con un adulto responsable antes de publicar un servicio social abierto a otras personas.
