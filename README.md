# IVANGUYS 3.0 — Actualización especial Zelda + CONNECT + 30 juegos

- **Especial Zelda:** miniatura del usuario en `assets/zelda-ocarina-thumb.webp` y vídeo enlazado a YouTube `4xtmm2H0W_0`; directo 4 nov 2026 22:50 a 5 nov 01:15 (España). El lanzamiento oficial del videojuego es el 5 nov; la cuenta a 00:00 es la celebración de IVANGUYS.
- **30 juegos:** los 20 originales y diez incorporados en la V3.
- **IVANGUYS WORLD:** sombras y nuevos materiales visuales; sigue siendo una aventura 3D estilizada, NO hiperrealista ni un AAA.
- **IVANGUYS CONNECT:** página `social.html` con integración para cuentas, perfiles y avatar, solicitudes de amistad, mensajes 1:1, estado aproximado, llamadas por voz y vídeos moderados. **NO estará operativa** hasta configurar Firebase y publicar las reglas de servidor.
- **Primero lee [`CONFIGURAR-CONNECT.md`](CONFIGURAR-CONNECT.md)** para poner en marcha las funciones online reales y revisar requisitos y costes.
- **No reemplaces** `.github/`, `config.js`, `data/` ni `scripts/` de un repositorio ya configurado. También conserva los secretos de GitHub Actions.

---

# 🎮 IVANGUYS — El universo gamer

Sitio web oficial de la comunidad IVANGUYS, hecho con HTML, CSS y JavaScript para alojarse gratis en **GitHub Pages**.

## Características incluidas

- Página de inicio gamer responsive con navegación, panel de canal y enlaces reales.
- Videoteca automática alimentada por el **RSS público** de YouTube con **GitHub Actions** cada 30 minutos aproximadamente.
- Estadísticas opcionales de suscriptores y número de vídeos con YouTube Data API v3 (clave secreta en Actions, nunca en el código web).
- Dos cuentas atrás en tiempo real, calculadas con la fecha de destino y actualizadas cada segundo: evento Zelda 05/11/2026 00:00 y directo IVANGUYS 04/11/2026 23:00, hora de Madrid.
- Novedades editables desde `data/announcements.json`.
- Comunidad de comentarios reales mediante **giscus** + GitHub Discussions; necesita configuración inicial.
- 12 minijuegos de navegador completos en `games.js`: Snake, Pong, Breakout, Sky Hopper, 2048, Memory, Tres en Raya, Caza el Topo, Reflejos PRO, Mega Clicker, Laberinto y Simon. Los récords solo se guardan en este dispositivo.

## 🟣 Cómo publicarlo en GitHub Pages

1. Entra en [github.com/new](https://github.com/new). Crea un repositorio **público** llamado `ivanguys-web` (u otro nombre).
2. Extrae el ZIP y **sube el CONTENIDO de la carpeta** a la raíz del repositorio (no la carpeta que lo contiene). Deben quedar `index.html`, `styles.css`, `app.js`, `games.js`, `config.js`, `data/`, `scripts/`, `.github/` y `.nojekyll` en la raíz. **Importante:** al subir desde Windows, comprueba que la carpeta oculta `.github` se haya incluido; de lo contrario, súbela por separado.
3. Abre **Settings → Pages → Build and deployment → Deploy from a branch**. Elige la rama `main` y la carpeta `/(root)`. Guarda.
4. Tu sitio tendrá una URL parecida a `https://TU-USUARIO.github.io/ivanguys-web/`. Hasta que crees y actives el repositorio, no existe una URL pública real.
5. Desde **Actions → Sincronizar YouTube IVANGUYS → Run workflow**, lanza la primera sincronización. Las siguientes están programadas aproximadamente cada 30 minutos. En **Settings → Actions → General → Workflow permissions**, puede hacer falta activar la escritura para el token del workflow si aparece un error de permisos. Es posible que GitHub retrase alguna ejecución programada.

**IMPORTANTE:** el ZIP puede abrirse localmente para ver la interfaz, pero para cargar los archivos JSON con `fetch` es mejor usar un servidor local:

```bash
cd ivanguys-github
python -m http.server 8000
```

Después visita `http://localhost:8000/`.

## 🔴 ¿Cómo enlazo mi directo?

Edita en `config.js` la propiedad `liveUrl` y pon su **URL real de YouTube** cuando anuncies la emisión. Hasta entonces, la web mostrará la hora prevista pero **no fingirá que estás emitiendo**. Si cambia la fecha, edita `directDate`.

**Zelda:** Nintendo confirmó el **5 de noviembre de 2026** como fecha de lanzamiento en Nintendo Switch 2. Las **00:00 en España** son la hora de celebración elegida por IVANGUYS y no una afirmación sobre la hora oficial de desbloqueo.

## 💬 Activar comentarios (GitHub Discussions + giscus)

1. En tu repositorio público, activa **Settings → General → Features → Discussions**.
2. Instala [giscus](https://github.com/apps/giscus) en ese repositorio; verás una autorización de GitHub.
3. En [giscus.app/es](https://giscus.app/es), introduce `TU-USUARIO/ivanguys-web`, selecciona la categoría **General** (o una existente), mapeo **título específico**, y copia el `repo`, `repoId`, `category` y `categoryId` generados.
4. Edita esos cuatro campos dentro de `config.js` (`giscus`). Guarda el cambio.
5. La sección Comunidad mostrará comentarios auténticos. Para publicar, los visitantes deberán iniciar sesión con GitHub. Puedes moderarlos desde **Discussions** del repositorio.

Giscus no es un chat de vídeo en directo ni permite anónimos sin cuenta. Para un chat de retransmisión utiliza el chat oficial de YouTube cuando esté disponible.

## 📺 Estadísticas reales opcionales

Los vídeos se importan sin claves. Para publicar el número actualizado de suscriptores y vídeos:

1. Configura un proyecto con **YouTube Data API v3** habilitada, respetando los requisitos de edad y cuenta de Google; pide ayuda a una persona adulta responsable si corresponde.
2. Guarda la clave en **Settings → Secrets and variables → Actions → New repository secret**, con el nombre `YOUTUBE_API_KEY`.
3. Ejecuta manualmente **Sincronizar YouTube IVANGUYS**. GitHub Actions actualizará las métricas junto al feed.

No pegues la clave en `config.js`, `index.html` o en ningún archivo público. Si no configuras la API, los contadores muestran `—` (no cifras inventadas).

## 📰 Cómo añadir anuncios

Edita `data/announcements.json` y añade un objeto a la lista:

```json
{"tag":"NOVEDAD","title":"Título del anuncio","date":"2026-10-20","text":"El texto del anuncio que aparecerá en la web."}
```

Usa la forma de los elementos existentes y mantén el archivo como JSON válido.

## 🚀 Personalización

- `config.js`: canal, directos y fechas, comunidad.
- `styles.css`: colores y estilo visual.
- `data/announcements.json`: noticias de IVANGUYS.
- `games.js`: motores y reglas de los 12 juegos.

**Privacidad y seguridad:** no añadas a la web direcciones, números personales o datos privados. Los mensajes públicos se moderan desde GitHub. Los récords de los juegos se guardan localmente en el navegador, sin servidor de cuentas.

**Fecha de lanzamiento:** [Nintendo España](https://www.nintendo.com/es-es/Campanias-publicitarias/40-aniversario-de-The-Legend-of-Zelda/40-aniversario-de-The-Legend-of-Zelda-Productos-3186351.html).


---
## ✦ NOVEDADES IVANGUYS 2.0

### IVANGUYS WORLD 3D — `world.html`

Juego de mundo abierto ORIGINAL con Three.js, cámara en tercera persona, controles WASD/flechas, ratón para girar la cámara, ESPACIO para saltar, SHIFT para correr y E para interactuar. Incluye joystick y botones táctiles, ciudad, bosque, lago, plaza, personajes Nova/Luna/Axel, misión de exploración, 36 cristales coleccionables, coche conducible, minimapa, día/noche y progreso local (localStorage). El mapa es un mundo explorable de tamaño fijo, **no** un MMORPG ni multijugador. Three.js se descarga de un CDN: hace falta conexión para iniciarlo. Se puede publicar directamente con GitHub Pages.

### IVANGUYS HUB — `hub.html`

Interfaz propia inspirada en servidores de comunidad con diez canales: bienvenida, normas, general, minecraft, roblox, zelda, memes, ideas, juegos y ayuda. No incluye mensajes ficticios ni usuarios inventados. Cada canal muestra un hilo independiente de GitHub Discussions por giscus **si ya tienes configurados** `giscus.repo`, `repoId`, `category`, `categoryId` en `config.js` y la app giscus instalada. Los visitantes participan mediante inicio de sesión de GitHub, con moderación desde Discussions. Los mensajes **no son un chat instantáneo**; para mensajería en tiempo real, notificaciones, usuarios conectados, roles y cuentas propias hace falta un servicio backend adicional (p.ej. Supabase/Firebase), permisos y moderación.

### 8 juegos más (20 en total, más WORLD 3D)

Penaltis PRO, Conecta Cuatro, Apaga las Luces, Palabras Relámpago, Lluvia de Meteoritos, Salto Infinito, Cálculo Turbo y Objetivo Orbital. Siguen disponibles los doce anteriores. El contador de juegos se actualiza en el portal.

### Cómo actualizar tu web existente sin romper YouTube

1. Descarga y descomprime el ZIP de IVANGUYS 2.0.
2. Sube a tu repositorio existente los archivos del interior de `ivanguys-github`, manteniendo `index.html` en la raíz. El ZIP contiene el flujo de YouTube original `.github/workflows/update-youtube.yml` (si ya has editado el flujo en GitHub, **no lo sobrescribas** sin compararlo).
3. Confirma o sustituye los archivos existentes cuando GitHub te lo pida. Si la subida web no admite reemplazar archivos existentes, usa el editor de archivos en GitHub, GitHub Desktop o una copia local con Git.
4. No borres los secretos de GitHub Actions: `YOUTUBE_API_KEY` seguirá guardado en la configuración del repositorio, no aparece en este ZIP.
5. Abre `https://TU-USUARIO.github.io/ivanguys-web/`, visita `world.html` y `hub.html`. Si no se ven los cambios, espera al despliegue y actualiza el navegador con Ctrl+F5.
6. Prueba los 20 minijuegos; sus mejores marcas son locales, no rankings globales.

Seguridad: antes de abrir debates públicos configura moderadores y reglas. No muestres teléfonos ni otros datos personales.
