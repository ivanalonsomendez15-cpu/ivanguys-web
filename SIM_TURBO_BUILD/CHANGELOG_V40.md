# AETHER V40 — 28 octubre 2026

## Mejora Wi-Fi real
La prueba de 16 parejas LAN/WAN verifica ahora **antes y después de cada pareja** que siguen estables el adaptador Wi-Fi, su estado, gateway IPv4, direcciones IPv4, selección de ruta LAN/WAN y presencia de túnel. V39 solo lo comprobaba cada cuatro parejas y al terminar. Si detecta deriva, interrumpe las sondas y **descarta la interpretación** de la serie. El chequeo UDP conectado no envía datagramas. No cambia DNS, router, driver ni configuración de red.

## Verificación
Pruebas sintéticas de SampleSnapshotStable cubren estado estable, cambio de gateway, ruta LAN, ruta WAN, túnel e IPv4. CI debe compilar Windows y Android y empaquetar el ZIP antes de publicar una release. No se han medido Mbps, FPS, estabilidad real de Wi-Fi ni precisión de rutas ICMP en el PC del usuario.

## Gráficos y límites
Se conserva el asesor 200 Hz sin filtro de pantalla completa. No se activa ningún overlay lento ni se modifica anticheat. 1920×1080 es el límite físico del panel: una imagen supermuestreada o un archivo 3840×2160 **no convierte** la pantalla en 4K nativo. La verificación CI no mide FPS de juegos. Android V32 permanece sin cambios; no desinstalar ni sustituir instalaciones existentes automáticamente.

## Limitaciones adicionales
Los cambios de ruta que ocurran y se reviertan entre dos instantáneas pueden no detectarse; comprobar cada pareja reduce la ventana ciega, no la elimina. La selección de ruta UDP puede diferir de ICMP o del tráfico de videojuegos. Las pruebas de ICMP pueden ser filtradas y no equivalen a pérdida de paquetes de aplicaciones. Más comprobaciones locales añaden cierta sobrecarga de CPU, sin mediciones físicas de impacto.
