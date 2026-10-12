# ACTUALIZAR TU WEB EXISTENTE A IVANGUYS 2.0

## Qué incluye este paquete

Incluye `index.html`, `styles.css`, `app.js`, `games.js`, `hub.html`, `hub.css`, `hub.js`, `world.html`, `world.css`, `world.js` e ideas para la próxima versión.

**No incluye ni modifica** `config.js`, `data/`, `scripts/` ni `.github/`: así conservas las credenciales, la sincronización de YouTube, los anuncios y el contenido que ya tienes en tu repositorio.

## Método recomendado: GitHub Desktop

1. Si aún no tienes GitHub Desktop, descárgalo de https://desktop.github.com/ e inicia sesión con tu cuenta de GitHub.
2. En GitHub Desktop, elige **File → Clone repository** y selecciona `ivanalonsomendez15-cpu/ivanguys-web`. Clónalo en una carpeta de tu ordenador. Si ya lo tienes clonado, ábrelo.
3. Haz una **copia de seguridad** de esa carpeta del repositorio.
4. Descomprime `IVANGUYS-WEB-V2-ACTUALIZACION.zip`. Abre la carpeta `ACTUALIZACION-V2`.
5. Copia su contenido a la **raíz** de la carpeta local del repositorio. Confirma el reemplazo de `index.html`, `app.js`, `games.js` y `styles.css` cuando Windows lo solicite.
6. Vuelve a GitHub Desktop. Verás los cambios. En **Summary** escribe `IVANGUYS 2.0: HUB, WORLD 3D y 20 minijuegos`.
7. Pulsa **Commit to main** y después **Push origin**.
8. GitHub Pages publicará la actualización automáticamente. Abre tu web y pulsa **Ctrl+F5** para evitar una versión antigua guardada en la caché.

## Comprobación de funciones

- En Inicio: tarjetas IVANGUYS WORLD y HUB.
- En Arcade: 20 minijuegos + acceso al mundo abierto.
- `world.html`: la escena 3D carga con Internet, funciona con teclado/ratón y botones táctiles.
- `hub.html`: sus 10 canales funcionan. Para escribir mensajes reales de comunidad debes tener giscus habilitado en `config.js`; si no está configurado aparece una guía, no mensajes falsos. No es chat instantáneo.
- En YouTube: se conserva el flujo de GitHub Actions original y la API Key (si ya estaba guardada como secreto).

**No borres ni reemplaces la carpeta `.github` ni `config.js` existente.**

### Próximas mejoras

Consulta `IDEAS-PARA-LA-V3.md` para 25 funcionalidades propuestas (no implementadas todavía).
