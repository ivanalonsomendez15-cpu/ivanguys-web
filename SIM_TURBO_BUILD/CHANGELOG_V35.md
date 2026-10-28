# AETHER V35 — Wi-Fi LAN/WAN alternado, sin captura de pantalla

## Mejora verificable de Wi-Fi
V34 medía todas las muestras del router y **después** todas las de Internet, lo que podía confundir cambios ocurridos con el tiempo con diferencias entre destinos. V35 añade 16 parejas de mediciones alternadas, invirtiendo el orden en cada ronda, con timeout de 400 ms por intento. El informe mantiene p95, mediana, jitter aproximado y rachas del módulo V34.

Corrige una interpretación importante: si el gateway no contesta ICMP pero Internet sí, **no** se presenta como fallo Wi-Fi; puede ser un router que filtra ping. Si no responde ningún destino, el diagnóstico es inconcluso. Si solo responde el router, tampoco se atribuye a DNS: se mide contra una IP numérica. Se agregan pruebas sintéticas para estas situaciones.

## Imagen y compatibilidad
Se mantiene el panel V34 de lectura de resolución/Hz de Windows y accesos a opciones del driver. El botón principal no activa el overlay de captura/re-renderizado lento. No hay inyección en juegos ni modificaciones de anticheat. Un panel 1920×1080 de 200 Hz **no** puede mostrar exactamente los 3840×2160 píxeles físicos de un monitor 4K. DSR/DLDSR y DLSS dependen de hardware, controlador y juego; no garantizan 200–300 FPS.

## Seguridad y límites de verificación
- V35 no altera DNS, canal, firewall, router ni configuración de Windows. Los pings son pruebas de solo lectura y no transfieren archivos.
- No se ha medido una mejora de Mbps ni de FPS. ICMP filtrado o limitado puede parecer pérdida.
- La prueba automatizada verifica la lógica con muestras sintéticas. La latencia real, la conexión móvil y el monitor de 200 Hz requieren pruebas en los dispositivos del usuario.
- Android se mantiene en V32. Los APK debug de CI pueden tener firma distinta de una instalación previa; **no desinstalar** ni perder perfiles por actualizar. Exportar copia desde la versión anterior si en algún momento se plantea migrar.
- Solo publicar el ZIP de instalador PC + APK Android + fuentes si los trabajos CI terminan correctamente. Un éxito CI no sustituye pruebas de campo ni firma estable de Android.
