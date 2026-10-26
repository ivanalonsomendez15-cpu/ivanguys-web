# AETHER V24 — IA SOBRE FOTOGRAMAS EN DIRECTO Y DIAGNÓSTICO WIFI

## Corrección del malentendido de V23
V23 intentaba activar resolución virtual mediante NVIDIA DSR; eso exige un modo anunciado por el controlador y NO coincide con el objetivo de una IA que procese la imagen en vivo sin cambiar Windows. V24 ofrece una opción distinta y no necesita DSR.

## Nuevo: procesamiento de imágenes en DIRECTO, sin cambiar resolución Windows
- Procesa continuamente fotogramas capturados localmente con la red neuronal FSRCNN x2 entrenada. Usa modelo de V21, no interpolación presentada como IA.
- Modo **IA rápida**: reduce el fotograma para acelerar la CNN y genera otra imagen de la resolución física. Puede perder calidad fina; no promete mejorar todos los contenidos.
- Modo **IA_4K**: aplica CNN x2 (1080p -> imagen interna 2160p) y reduce el resultado al panel original 1080p, sin configurar jamás resolución de Windows. Este modo aumenta mucho el cómputo y puede ser lento.
- **Vista previa** en otra ventana de la imagen de pantalla procesada. Prueba viable para escritorio y ventanas visibles cuando las APIs lo permiten.
- **Filtro fullscreen experimental**: presentación click-through mediante ventana de Windows excluida de la captura con WDA_EXCLUDEFROMCAPTURE. Requiere Windows 10 2004+, DWM y que la API de captura respete esa exclusión. En juegos fullscreen exclusivo, anticheat o apps protegidas puede no funcionar.
- Botón detener. No captura audio, no guarda imágenes, no sube fotogramas a Internet ni inyecta software en los juegos.
- FPS mostrados son fotogramas procesados por la CNN, NO FPS del juego. No se promete 60/120 FPS.
- **Un monitor 1920×1080 no puede mostrar 3840×2160 píxeles físicos**. El modo IA puede cambiar la apariencia de la imagen, nunca transformarlo en 4K nativo.

## Wi-Fi V24
- Recoge **12 mediciones** ICMP separadas al router (cuando está disponible) y a 1.1.1.1; reporta fallos, media, máximo, mínimo, variación de latencia y velocidad de enlace.
- Diferencia problemas del router/interferencia de problemas aguas arriba cuando se puede inferir.
- Nunca promete pasar de 60 a 120–150 Mb/s sin ancho de banda físico, tarifa y pruebas.
- No desactiva seguridad, resetea la pila de red ni cambia DNS sin consentimiento.

## Incluye
Windows V4–V24, Android V22, Cloudflare Worker, fuente Python para IA V21 (fotos) y V24 (fotogramas) y tests del modelo.

## Pruebas necesarias
Windows C# compilado, Android APK V22 compilada, empaquetado PyInstaller V24 y pruebas CNN sobre fotogramas sintéticos. El filtro fullscreen y juegos reales necesitan pruebas en equipo físico; no llamarlos universalmente compatibles sin evidencia.

## Ayuda
Sección AETHER CLINIC -> **IA REAL EN DIRECTO V24**. El apartado anterior DSR V23 queda rotulado como OPCIONAL.
