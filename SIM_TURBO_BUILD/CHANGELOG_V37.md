# AETHER V37 — diagnóstico Wi-Fi protegido frente a rutas ajenas

## Cambio funcional y verificable
En V36 se advertía si la ruta WAN IPv4 podía salir por Ethernet o VPN, **pero el programa seguía haciendo los 16 pings WAN y ejecutando la comparación LAN/WAN**. Eso podía atribuir a Wi-Fi un problema de otra interfaz. V37 cambia el comportamiento, no solo el texto:

- Obtiene una vez la dirección IPv4 local elegida para el destino WAN (socket UDP conectado, sin transmitir datagramas).
- Para cada adaptador Wi-Fi activo comprueba también la IPv4 local elegida hacia su gateway. Si no corresponde a ese adaptador, **omite las dos pruebas**, porque ni siquiera las sondas LAN serían atribuibles con seguridad.
- Si el gateway es atribuible al Wi-Fi pero la ruta WAN no lo es, es desconocida o existe un túnel VPN/PPP activo, **solo mide 16 sondas al gateway**; no hace 16 pings WAN innecesarios ni llama al clasificador LAN/WAN. El informe lo explica.
- Si ambas rutas son atribuibles al Wi-Fi y no hay túnel detectado, mantiene las 16 parejas LAN/WAN alternadas de V35.

Esto mejora la **precisión diagnóstica** y evita tráfico de prueba WAN que no sirve para analizar el adaptador seleccionado. No promete aumentar Mbps, reducir ping de juegos ni elevar FPS. El control de rutas es orientativo: la ruta seleccionada por UDP puede diferir de ICMP o del juego y la VPN podría no aparecer como interfaz Tunnel/PPP. No se modifica Windows, DNS, drivers, router, rutas ni firewall.

## Pruebas y entrega
Pruebas sintéticas previstas en CI: gateway que sale por Wi-Fi o por otra interfaz, origen IPv4 nulo/0.0.0.0, IPv6, ruta WAN ajena, túnel activo, y comprobación de que no se atribuye la WAN cuando está omitida. Solo publicar paquete PC V37 + Android V32 + fuentes si compilaciones, pruebas y verificación ZIP finalizan correctamente.

Android se mantiene en V32; una APK debug puede tener firma distinta de la instalada. No desinstalar Android ni perder perfiles. Se mantiene el asesor de 200 Hz sin activar overlays lentos ni interferir con anticheat. Un panel físico de 1920×1080 no puede mostrar 3840×2160 píxeles nativos; el supersampling solo puede reducirse a los píxeles disponibles. CI no comprueba FPS reales ni la ruta del ordenador del usuario.
