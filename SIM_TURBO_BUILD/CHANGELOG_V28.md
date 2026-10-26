# AETHER V28 — FOCO CURSOR IA + ESCANEO WIFI POR CANAL

Fecha: 26 de octubre de 2026.

## IA en directo (Windows)
- Se añade **FOCO CURSOR** (480×270 capturados alrededor del puntero y procesados con FSRCNN x2 a 960×540), como **vista previa separada**. Sigue el puntero en cada fotograma, recorta de forma segura en los bordes del monitor y usa el centro si el puntero está fuera. Las coordenadas del ratón no se guardan ni envían.
- Pensado para inspeccionar texto/ventanas y aplicaciones de escritorio; en juegos con ratón capturado o invisible puede seguir el centro o no resultar útil. No modifica resolución, drivers, anticheat ni procesos.
- Se mantienen FOCO TURBO y FOCO AUTO, los modos RAPIDO y IA_4K virtual y la ventana de superposición **experimental** de pantalla completa.
- La pestaña DSR V23 queda marcada como **LEGADO: CAMBIA RESOLUCIÓN**, separada de la IA real. No se activa automáticamente.
- El test FSRCNN V28 verifica el recorte con monitores de coordenadas negativas, puntero en bordes y fuera del monitor, 7 rutas neuronales y adaptación FOCO AUTO.

## Wi-Fi (solo lectura)
- **ESCANEO DE CANALES V28**: lectura de `netsh wlan show networks mode=bssid`, conteo de BSSID visibles por canal sin incluir SSID, BSSID, MAC ni credenciales en el informe. Es un recuento de puntos anunciados, **no una medición de saturación, interferencias ni velocidad**.
- Se muestran recuentos en el canal propio cuando Windows lo informa, y vecinos potencialmente solapados **solo** en 2,4 GHz cuando la banda se informa explícitamente.
- Conserva V27: gateway/Internet ICMP, p95, mediana, jitter, DNS, intensidad de señal, banda y velocidad de enlace PHY.
- Sin modificar DNS, canal, router, drivers ni configuración del sistema. Sin promesas de más Mbps.

## Pruebas y entrega
- Windows .NET Framework 4.8, Android V22, Python FSRCNN sintético, C# test del analizador ES/EN, PyInstaller y ZIP completo mediante GitHub Actions.
- Android V22 se incluye sin alterar datos existentes; el APK de compilación puede tener firma diferente. **No desinstalar la aplicación antigua** sin exportar los ajustes y verificar compatibilidad.

## Limitaciones
- Pantalla física 1080p no puede mostrar 4K nativo. FOCO CURSOR procesa una región reducida y es solo vista previa; NO es un filtro universal para CS2, Valorant o Roblox.
- El filtro global sigue sin validar a 60 FPS en el PC del usuario y puede reducir FPS o fallar con pantalla completa exclusiva.
- Las pruebas CI de imágenes sintéticas no miden FPS del juego ni mejoran la conexión de Internet.
