# AETHER V29 — FOCO ECO + COMPARATIVA WIFI 2,4 GHz
Fecha: 26-10-2026.

## IA en directo
- Nuevo modo FOCO ECO de **vista previa**: captura una región central de 480×270 píxeles, aplica FSRCNN x2 para generar 960×540 cuando la imagen cambia y reutiliza el último resultado neuronal mientras la región está casi estática. Un nuevo cálculo se fuerza al menos cada 2 segundos, incluso si la escena no cambia.
- Compara una miniatura local de 64×36 en escala de grises (MAE, umbral 0,6) para evitar inferencias repetidas sobre contenido prácticamente idéntico. La captura y el procesamiento se mantienen en memoria local, sin enviar ni guardar imágenes.
- No supone mejora para juegos con mucho movimiento. El modo ECO es útil principalmente para texto y escritorio casi estático, y puede omitir cambios muy sutiles hasta el refresco forzado.
- Se conservan FOCO CURSOR, FOCO AUTO, TURBO, RAPIDO, IA_4K virtual y overlay experimental. Ninguno cambia la resolución de Windows.
- El modo ECO no modifica los FPS de CS2, Valorant ni Roblox. La vista previa no equivale a mejorar los píxeles del juego directamente.

## Wi-Fi
- Nuevo cálculo orientativo y **de solo lectura** de solapamiento de BSSID visibles sobre los canales 1, 6 y 11 de 2,4 GHz. Usa pesos según la separación de canales y sugiere cuál tiene menos BSSID ponderados para investigarlo en el router, **sin reconfigurarlo**.
- Este recuento no mide tiempo de aire, intensidad de señales vecinas, ancho de canal, congestión real ni velocidad de Internet. Una sugerencia no es garantía de mayor velocidad.
- Conserva gateway/Internet ICMP, pérdida, mediana, p95, jitter, DNS, banda, señal y velocidad PHY.
- No guarda nombres de redes, BSSID, MAC ni credenciales. No altera DNS, seguridad ni drivers.

## Verificación
- El self-test FSRCNN debe comprobar que ECO procesa el primer fotograma, evita repetir la inferencia para imagen idéntica, vuelve a inferir ante un cambio grande y fuerza refresco tras 2 s.
- Test C# de recuentos ES/EN, privacidad y comparativa de 1/6/11.
- Windows .NET Framework 4.8, Android V22 sin modificar, PyInstaller, fuentes y ZIP único mediante GitHub Actions.
- Las pruebas de CI no validan overlays ni FPS de juegos reales; 1080p no puede convertirse físicamente en 4K.
- Android V22 utiliza firma debug de compilación; no desinstalar versiones previas ni borrar datos para actualizar.
