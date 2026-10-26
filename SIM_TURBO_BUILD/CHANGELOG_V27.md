# AETHER V27 — IA FOCO TURBO/AUTO Y WI-FI PHY

Fecha: 26 de octubre de 2026.

## Cambios implementados
- **FOCO TURBO**: captura el recorte central de **320×180**, aplica el modelo FSRCNN x2 y presenta una vista previa de **640×360**. Es una mejora neural de una región pequeña, NO un filtro de toda la pantalla.
- **FOCO AUTO**: comienza en 480×270 y cambia el área de captura entre 320×180, 480×270 y 640×360 a partir de la latencia media de inferencia de 8 fotogramas; utiliza histéresis (<65 ms aumenta área, >125 ms la reduce), con al menos 2 s entre cambios. No modifica la resolución del monitor ni el juego.
- Se mantiene el límite de cola de 1 fotograma, descarte de imágenes antiguas y visualización separada de FPS de IA, tiempo de captura, tiempo de inferencia y latencia de proceso.
- Se mantienen los modos RAPIDO e IA_4K virtual, el overlay experimental y los modos FOCO anteriores.
- **Wi-Fi V27**: lectura opcional y solo lectura de las tasas PHY RX/TX (Mbps negociados entre PC y router) y de la banda **solo si Windows la informa expresamente**; la banda no se adivina por el canal. Los valores son independientes de un speedtest de Internet.
- Los informes siguen sin incluir SSID, BSSID ni contraseñas. Se conservan las métricas de ping, p95, jitter, DNS, pérdida y señal V26.
- Android V22, copias de seguridad y datos del móvil no se alteran.

## Pruebas previstas en GitHub Actions
- Windows .NET Framework 4.8 y Android V22.
- Python sintaxis, self-test de FSRCNN sobre imágenes sintéticas, pruebas de la lógica adaptativa y benchmark de seis modos (NO FPS de juegos).
- Test C# de señal/canal, PHY RX/TX y banda explícita con netsh sintético en español e inglés, validación y privacidad.
- PyInstaller de la IA en vivo, instalador Windows y un ZIP único de PC+Android+fuentes.

## Límites
- No se puede mostrar 4K nativo en un panel físico de 1080p.
- Los modos FOCO solo mejoran recortes en ventana de vista previa. No son superresolución universal de pantalla completa.
- El modo overlay de toda la pantalla es experimental y NO se ha verificado en Counter-Strike 2, Valorant, Roblox ni juegos con anticheat o pantalla completa exclusiva.
- La inferencia FSRCNN en CPU puede ser lenta y reducir FPS; los benchmarks de CI no son medidas de juego.
- El diagnóstico Wi-Fi no incrementa automáticamente el ancho de banda contratado ni garantiza mejoras de ping.
- Si Windows no proporciona banda o velocidad PHY, se indica «no disponible».
