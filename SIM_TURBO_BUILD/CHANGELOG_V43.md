# AETHER V43 — 28 octubre 2026

## Mejora verificable de fiabilidad Wi-Fi
V42 podía clasificar la diferencia de latencia entre router e Internet aun cuando casi todas las sondas ICMP hubieran fallado: bastaba una respuesta aislada en cada serie para llegar a la clasificación de V34. En V43, la atribución comparativa requiere **al menos ocho parejas de muestras con respuestas ICMP válidas en ambos destinos**. Si hay menos, el resultado es **inconcluso**: no se atribuye el fallo a Wi-Fi, router o red exterior. Se muestra el número de parejas válidas y se conservan las estadísticas descriptivas, sin inventar muestras ni pérdidas.

La comprobación es determinista y de solo lectura. Se mantiene el muestreo alternado LAN/WAN, el corte anticipado de destinos ICMP silenciosos, las comprobaciones de ruta antes y después de cada pareja, y el descarte ante cambios de interfaz, puerta de enlace, IPv4 o túnel. No se modifica Windows, Wi-Fi, DNS, VPN, router ni controladores. Esta mejora **evita conclusiones insuficientemente fundamentadas**, no acelera la red.

## Pruebas
Los tests sintéticos comprueban 0, 7 y 8 parejas válidas, respuestas no simultáneas, datos nulos, series de diferente longitud, valores negativos y los tests heredados de rutas, ICMP y estabilidad. GitHub Actions compila PC Windows V43 y Android V32, prueba la lógica y empaqueta PC + Android + fuentes en un ZIP; publicar únicamente si CI termina con éxito. Las pruebas sintéticas no equivalen a medidas físicas de Mbps, FPS, Wi-Fi o latencia de juegos.

## Pantalla, privacidad y limitaciones
El monitor físico 1920×1080 a 200 Hz no puede mostrar 4K nativo (3840×2160 píxeles físicos). Se conserva el asesor gráfico de 200 Hz sin activar capturas/redibujado de pantalla completa ni interferir con anticheat. El supermuestreo en software compatible puede mejorar nitidez aparente con coste de GPU; no garantiza 200 FPS. Android permanece en V32 sin desinstalarse. Una APK debug nueva puede tener firma distinta: exportar perfiles antes de cualquier actualización que requiera reinstalación. Las rutas inferidas con socket UDP pueden diferir de ICMP y de las usadas por los juegos. Ocho parejas válidas son un umbral conservador, no una prueba causal de avería; filtros ICMP pueden sesgar la muestra.
