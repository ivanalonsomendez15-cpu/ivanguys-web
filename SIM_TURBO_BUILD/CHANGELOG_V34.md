# AETHER V34 — Wi-Fi prioritario y 200 Hz sin overlay lento

**Objetivo de versión**: eliminar el acceso sencillo al overlay CPU que el usuario comprobó que iba con tirones en su pantalla de 200 Hz. No se presenta como 4K real; no existe forma de mostrar todos los píxeles de un panel 4K nativo en un 1080p físico.

## Nuevas herramientas
1. **WI-FI V34 MEJORADO** en AETHER CLINIC: nueva medición 24 pings a gateway + 24 pings a Internet 1.1.1.1, mediana, p95, jitter aproximado, rachas de pérdidas, separación entre fallo local y externo, y exportación TXT. Solo lectura y con botón de repetición. No promete más Mb/s. La telemetría Android V32 permanece.
2. **200 HZ / IMAGEN V34** en AETHER CLINIC: consulta la resolución y frecuencia verdaderas del monitor principal sin cambiar nada; abre configuración avanzada de Windows, modo juego y panel NVIDIA si está disponible. Recomienda mantener GPU/driver al mando del renderizado para evitar el overlay lento de V33.
3. En la ventana antigua **IA REAL EN DIRECTO V31**, los dos botones de filtro a pantalla completa lento se sustituyen por acceso a herramientas V34. Los modos IA de vista previa continúan.

## Límites
- V34 no hace que un monitor Full HD muestre exactamente 4K nativo: es físicamente imposible.
- No hay nuevo motor de superresolución a 200–300 FPS; tampoco se afirma que esta versión convierta CS2, Valorant o Windows en 4K.
- El diagnóstico de latencia ICMP no mide FPS de juegos ni el ancho de banda de la tarifa. Pérdidas ICMP pueden ser filtrado, no cortes reales.
- Los tests CI comprueban algoritmos de Wi-Fi y compilación del código; solo el PC real del usuario permite verificar el enlace, los FPS y la frecuencia.
- APK Android V32 se conserva, pero recompilarlo en GitHub puede generar nueva firma debug. No desinstalar una app antigua sin exportar perfiles.

## Futuras revisiones
Las mejoras al proyecto principal siempre incorporarán un cambio real de Wi-Fi verificable, sin promesas imposibles de ancho de banda ni modificaciones de red no consentidas.
