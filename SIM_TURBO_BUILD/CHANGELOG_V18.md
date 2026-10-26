# AETHER V18 — 26 de octubre de 2026

## Cambios funcionales
- **Windows**: nueva pestaña «DISCO E INICIO V18», que muestra espacio disponible y total por unidad fija, detecta niveles bajos de espacio con reglas comprobables y enumera exclusivamente nombres de entradas de inicio en HKCU/HKLM. No lee ni exporta comandos de inicio, no borra archivos, no altera el registro ni cierra procesos.
- **Android**: monitor visible voluntario con muestreo adaptable a batería: 20 s si está cargando o batería >50%, 30 s entre 21–50% o batería desconocida, 60 s con batería <=20% y sin cargar. Se conserva la notificación de Foreground Service y la posibilidad de detenerlo; Android puede pausarlo o terminarlo.
- **Pruebas**: 5 casos de reglas de espacio libre C# y 7 casos de cadencia Java, además de compilaciones Windows/Android y validación del ZIP.
- **Conservación**: siguen el mando Android-PC con HMAC de V17, el descubrimiento voluntario, perfiles por juego, Wi-Fi+SIM para descargas HTTP Range compatibles, laboratorios V4–V17 y código editable Cloudflare.

## Limitaciones
- Este módulo no mide la velocidad real de disco ni su SMART, no identifica automáticamente todos los cuellos de botella y no aumenta por sí mismo FPS ni Mb/s.
- 60→120–150 Mb/s solo es posible si tarifa, router, adaptador y señal lo permiten. Un ordenador de 15–20 FPS no se transforma por software en hardware de 120 FPS.
- La exportación de imagen V12 usa interpolación bicúbica, no IA neuronal. Una pantalla 1080p no presenta 4K nativo.
- Las 14 regiones Cloudflare continúan siendo ubicaciones planificadas sin servidores físicos verificados.
- Las compilaciones CI no sustituyen las pruebas con PC y móvil reales. El proyecto fuente editable se publica como ZIP sin EXE/APK dentro.
