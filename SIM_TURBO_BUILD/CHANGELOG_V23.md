# AETHER V23 — 4K EN DIRECTO (WINDOWS, JUEGOS Y NAVEGADOR)

### ¿Qué hace?
V23 no convierte fotografías. Integra la ventana **4K EN DIRECTO V23** dentro de AETHER CLINIC, capaz de utilizar resoluciones virtuales anunciadas por la GPU para TODO EL ESCRITORIO DEL MONITOR PRINCIPAL mientras la ventana sigue abierta.

- **NVIDIA DSR 4,00x**: en un monitor de 1920×1080 ofrece un modo virtual de 3840×2160, que se reduce a los píxeles físicos 1080p. No crea un panel 4K nativo ni utiliza IA para ese modo.
- **NVIDIA DLDSR 2,25x**: alternativa basada en IA del controlador RTX, aproximadamente 2880×1620 para un monitor 1080p. No es 4K 3840×2160.
- Modo equilibrado 2560×1440 cuando esté disponible.
- Cambia la resolución **solamente si Windows y el driver ofrecen ese modo** y supera una comprobación CDS_TEST; no fuerza resoluciones personalizadas ni modifica archivos de videojuegos.
- Detecta GPU, resolución y lista de modos compatibles de la pantalla principal.
- Confirma antes de aplicar y exige **confirmar en 20 segundos** o restaura automáticamente.
- Botón para restaurar y restauración al cerrar la ventana. Es una configuración temporal, sin grabar la resolución como permanente en el Registro de Windows.
- Recuerda la preferencia de calidad seleccionada, pero el usuario debe autorizar la activación de nuevo tras cerrar o reiniciar.
- Funciona sobre escritorio, navegador y juegos que respeten la resolución global. Si un juego usa pantalla completa exclusiva, puede requerir seleccionar la resolución DSR en el menú del propio juego.
- No inyecta código, shaders, DLL ni modificaciones en Counter-Strike 2, Valorant o Roblox.

### Limitaciones
El controlador NVIDIA debe tener habilitados **DSR - Factores** (y DLDSR si se desea modo neuronal). Si estos modos no aparecen, AETHER informa y no cambia nada. En pantallas múltiples solamente se controla la principal. DSR exige más trabajo GPU y puede reducir bastante los FPS. No aumenta los píxeles físicos; el resultado depende del juego, driver y pantalla. No promete mejora de todos los navegadores o vídeos.

### Conservación
Se mantienen V4–V22 Windows, Android V22 (perfiles y copias locales), Cloudflare y el módulo de fotografías IA FSRCNN V21 (por separado).

### Consultar NVIDIA
- https://www.nvidia.com/en-us/geforce/news/dynamic-super-resolution-instantly-improves-your-games-with-4k-quality-graphics/
- https://nvidia.custhelp.com/app/answers/detail/a_id/3597
