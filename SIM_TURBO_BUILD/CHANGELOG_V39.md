# AETHER V39 — estabilidad del enlace Wi-Fi, gateway e IPv4 durante la prueba

## Mejora funcional (solo lectura)
V38 detectaba cambios de origen IPv4 y túnel VPN/PPP durante las 16 muestras, pero no comprobaba si el propio adaptador Wi-Fi se desconectaba ni si Windows renovaba la dirección IPv4 o la puerta de enlace mientras se medía. V39 añade comprobaciones del adaptador **por ID**, estado **Up**, gateway IPv4 y conjunto completo de IPv4 asignadas **cada cuatro muestras y al finalizar**. Si falta el adaptador, cambia la IP/gateway o cae el enlace, interrumpe las sondas y **descarta las conclusiones LAN/WAN** en vez de mostrar cifras mezcladas. Las comprobaciones no modifican rutas, DNS, firewall, adaptadores ni controladores.

## Pruebas y límites
Pruebas sintéticas: enlace estable, direcciones IPv4 en orden distinto, desconexión, cambio de adaptador, gateway cambiado o ausente, dirección añadida o retirada y ausencia de IP. GitHub Actions debe compilar Windows y Android V32 y verificar el ZIP único antes de publicar. Las pruebas sintéticas no demuestran detección en todos los drivers, routers o cambios entre comprobaciones. Las rutas UDP son indicativas; ICMP y juegos pueden tomar otro camino. Un router que no responda ICMP no prueba pérdida real de paquetes.

## Gráficos, privacidad y compatibilidad
Se mantiene el asesor de 1080p/200 Hz sin overlay lento de pantalla completa, inyección en juegos ni modificaciones de anticheat. Un monitor 1920×1080 no puede mostrar los píxeles físicos nativos de 3840×2160; supermuestreo y reescalado no cambian el panel. No se ha medido aumento de Mbps ni FPS. Android continúa en V32: no desinstalar, ni sustituir a ciegas APK con firmas distintas. El instalador y la APK se publican solo tras CI correcto; no se han probado físicamente en los dispositivos del usuario.
