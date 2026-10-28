# AETHER V38 — protección ante cambios de ruta durante el diagnóstico Wi-Fi

## Mejora real de Wi-Fi
V37 comprobaba la ruta antes de empezar, pero podía mezclar resultados si Windows cambiaba la salida (Wi-Fi/Ethernet/VPN) durante los 16 pings. V38 vuelve a comprobar la IPv4 de origen seleccionada hacia el gateway y 1.1.1.1 **cada cuatro muestras y al terminar**. Si alguna ruta cambia o aparece/desaparece una interfaz Tunnel/PPP, interrumpe las sondas y **descarta la interpretación LAN/WAN**: no atribuye a Wi-Fi datos mezclados. Se muestran los recuentos parciales y se recomienda repetir con la ruta estable. Si no cambia, conserva el comportamiento V37 y 16 parejas alternadas cuando ambas rutas son atribuibles.

Pruebas sintéticas: ruta sin cambios, cambio LAN, cambio WAN, aparición/desaparición de túnel y origen desconocido; compilación C# y Android V32 y ZIP único en GitHub Actions. Los tests de CI no son mediciones físicas en el PC del usuario. La selección de origen UDP es orientativa: ICMP y videojuegos pueden seguir otras rutas; algunas VPN no aparecen como Tunnel/PPP y un cambio fugaz entre comprobaciones puede pasar inadvertido.

## Gráficos y seguridad
Sin overlays lentos de pantalla completa, sin inyección en juegos ni modificación de anticheat. Asesor para monitor 1080p a 200 Hz sin modificar resolución ni prometer FPS. 1920×1080 físico no puede mostrar 3840×2160 píxeles nativos; supersampling solo puede reducirse a la matriz física. Sin cambios en DNS, router, rutas, drivers ni firewall.

Android sigue V32. No se desinstala ni se cambia la firma del dispositivo; el APK de depuración recompilado puede no actualizar sobre otra firma. No se afirman aumentos de Mbps, latencia o FPS. Publicar ZIP PC V38 + Android V32 + fuentes únicamente si la compilación y las pruebas CI finalizan correctamente.
