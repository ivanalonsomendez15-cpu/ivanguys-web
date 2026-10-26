# AETHER V26 — IA DE ENFOQUE EN DIRECTO Y DIAGNÓSTICO DE RADIO WI-FI

Fecha: 26 octubre 2026

## Cambios reales
- **IA FOCO 640×360**: captura directamente el recorte central de la pantalla y aplica FSRCNN x2, produciendo una vista previa neuronal 1280×720. No captura el escritorio entero en este modo, por lo que reduce la cantidad de píxeles procesados frente a V25 RÁPIDO (960×540 de entrada neuronal).
- **IA FOCO RÁPIDO 480×270**: captura directamente el recorte central y aplica FSRCNN x2 para una vista previa 960×540. Menor coste de inferencia a cambio de mostrar una zona más pequeña y menos detalle.
- Se conservan **RÁPIDO** (captura completa 1080p, reduce a 540p, FSRCNN x2 y muestra 1080p) e **IA_4K** (captura completa 1080p, FSRCNN x2 a 4K virtual, reduce a 1080p). Ninguno cambia resolución Windows.
- Las dos opciones FOCO son **solo vista previa**; no se presentan como mejora de toda la pantalla ni como 4K. El overlay experimental de pantalla completa sigue siendo el de V25 y puede ir lento.
- **Wi-Fi V26**: nueva lectura *solo de diagnóstico* de porcentaje de señal y canal por `netsh wlan show interfaces` cuando Windows informa esos campos. Se extraen solo valores numéricos; no se muestran SSID, BSSID, MAC, contraseñas ni IP de esta consulta.
- Mediana de ping correcta para números pares de muestras, desviación estándar y aviso explícito de que el p95 con 12 muestras es una estimación limitada.
- Android V22 y datos anteriores sin cambios. El APK debug del entorno CI puede no instalarse como actualización sobre un APK firmado con otra clave.

## Pruebas CI exigidas
- Windows C# .NET Framework 4.8 compila con V26, Android V22 ensambla.
- Test de parseo de señal/canal en español e inglés, valores inválidos y ausencia de SSID/BSSID en informes.
- Python: compilación sintáctica, inferencia real FSRCNN de los 4 modos en imágenes sintéticas, benchmarks de los 4 modos (no FPS del juego), prueba del ejecutable empaquetado.
- Instalador PC, APK Android, ZIP de fuentes y documentación en un único archivo publicado como GitHub Release.

## Limitaciones sin ocultar
- **1080p físico nunca puede convertirse en 4K nativo** mediante software.
- Los modos FOCO aceleran al procesar **menos área**, no porque hayan conseguido superresolución 4K fluida universal.
- El overlay de pantalla completa no está validado en CS2, Valorant, Roblox ni con pantalla completa exclusiva/anti-cheat.
- FPS medidos son de inferencia, no FPS del juego ni latencia extremo a extremo; la captura y composición añaden costes.
- Las lecturas de señal Wi-Fi no aumentan Mbps, y los valores de canal no bastan para identificar con seguridad 2,4/5/6 GHz.
- Una mejora medible de Mbps requeriría cambios de red y comparaciones reales antes/después, no un algoritmo que cree ancho de banda.
