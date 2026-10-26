# AETHER V30 — FOCO MOVIMIENTO + LATENCIA P95 + RACHAS WIFI
Fecha: 26-10-2026.

## Imagen en directo (Windows)
- **FOCO MOVIMIENTO**: captura voluntariamente el monitor principal en RAM, compara una miniatura de luminancia de 80x48 y elige la zona de 480x270 píxeles con más cambios en una cuadrícula 4x4. Aplica FSRCNN x2 solo a esa zona para ofrecer una VISTA PREVIA de 960x540. Si la escena no cambia, conserva la zona anterior. Puede seguir animaciones o notificaciones y NO reconoce personas ni objetivos de videojuegos.
- El modo FOCO MOVIMIENTO puede consumir más CPU que otros FOCO porque captura toda la pantalla para localizar cambios, aunque la IA procesa solo el recorte.
- El procesamiento de fotogramas mide **p95 de latencia del bucle** en ventana móvil de 64 muestras y el tiempo hasta la solicitud de presentación en interfaz (no latencia de monitor/fotones). Continúa mostrando captura, inferencia, descartes y FPS del proceso, nunca FPS del juego.
- La cola guarda solo el fotograma reciente con su marca temporal; no se registran imágenes ni coordenadas, ni se suben a Internet.
- No se modifica la resolución de Windows, no se inyecta código en CS2, Valorant o Roblox y no se altera el anticheat. 1080p sigue teniendo 1080p físicos.
- La mejora visual global de 60 FPS sigue SIN RESOLVERSE. El overlay de pantalla completa es experimental, no validado en juegos reales. No debe presentarse FOCO MOVIMIENTO como 4K en toda la pantalla.

## Wi-Fi
- **Rachas de pérdida ICMP**: para 12 pings secuenciales al gateway y 12 a Internet, informa número de rachas y mayor secuencia de fallos consecutivos, además de las métricas de mediana, p95, jitter y DNS.
- Una racha de 2 fallos al gateway ahora activa una recomendación de comprobar la red local. ICMP bloqueado no demuestra corte y 12 muestras son insuficientes para conclusiones definitivas.
- Se mantiene el análisis orientativo de canales 1/6/11, señal, banda y PHY. No cambia router, DNS, drivers ni contraseñas. No puede duplicar los Mbps.

## Pruebas
- Self-test neuronal con fotogramas sintéticos: nueve rutas, ROI de movimiento, límites de monitor con coordenadas negativas, quietud y p95.
- Prueba independiente C# de rachas Wi-Fi: sin pérdidas, múltiples rachas, todas perdidas, vacío, mensaje legible.
- GitHub Actions compila Windows .NET Framework 4.8, Android V22 y PyInstaller; ejecuta self-test y benchmarks sintéticos y empaqueta un único ZIP.
- Los benchmarks no equivalen a FPS reales ni verifican overlay en juegos.
- Android V22 no se ha modificado: no desinstalar versiones antiguas, que podrían tener firmas distintas.
