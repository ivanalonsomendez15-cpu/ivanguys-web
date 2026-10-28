# AETHER V42 — 28 octubre 2026

## Mejora verificable de eficiencia y diagnóstico Wi-Fi
V42 conserva las comprobaciones de enlace, gateway, IPv4, ruta y túnel antes y después de cada pareja de sondas de V41. Si **ambos** destinos ICMP no responden en sus primeras ocho pruebas, se conserva la detención anticipada inconclusa. Si **solo uno** permanece silencioso en sus ocho primeros intentos y el otro sí ha respondido, V42 deja de enviar hasta ocho sondas adicionales al destino silencioso y continúa recogiendo hasta 16 muestras reales del destino que responde. No rellena artificialmente con pérdidas la serie del destino omitido, no calcula comparación LAN/WAN con series parciales y explica por separado el posible filtrado ICMP del router o de la WAN. En modo solo LAN se conserva la salida anticipada a ocho intentos silenciosos.

La mejora es una reducción determinista de solicitudes ICMP en escenarios sintéticos, no una aceleración de la conexión. El ahorro máximo adicional respecto de V41 es de ocho sondas de un destino por encuesta elegible (hasta 3,2 s de esperas de 400 ms, solo si todas agotan el timeout). Si las primeras ocho fallan por azar y después habría respuestas, la clasificación queda inconclusa: repetir la medición. Ningún ajuste de Windows, router, DNS, VPN, driver o firewall se cambia.

## Pruebas
Pruebas sintéticas V42: umbrales de siete y ocho intentos, respuesta aislada, fallos negativos, datos nulos, guardas de ruta/enlace y textos que evitan atribuir un fallo DNS o Wi-Fi a la ausencia de ICMP. CI de Windows V42, Android V32, asesor 200 Hz, fuentes y ZIP único: publicar solo si todo finaliza correctamente. No hay medidas reales de Mbps, FPS, latencia del juego o rendimiento de Wi-Fi en el equipo del usuario.

## Gráficos y seguridad
Pantalla física 1920×1080 a 200 Hz: el asesor no activa superposición de captura/redibujado global ni altera anticheat. No puede mostrar 4K nativo (3840×2160 píxeles físicos). El supermuestreo en aplicaciones compatibles puede mejorar nitidez aparente, con coste de GPU; no se garantiza 200 FPS. Android sigue en V32, sin desinstalación ni cambio de firma deliberado. Una APK debug recompilada podría no actualizar la instalada por firma distinta. Rutas UDP son orientativas y no prueban ruta ICMP/juegos; túneles y cambios muy breves pueden pasar inadvertidos.
