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
