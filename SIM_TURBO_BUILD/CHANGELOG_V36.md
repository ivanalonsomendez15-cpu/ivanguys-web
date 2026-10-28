# AETHER V36 — identificar ruta WAN antes de atribuir problemas al Wi-Fi

## Mejora real de diagnóstico
V35 compara 16 parejas ICMP LAN/WAN, pero en un PC con Wi-Fi y Ethernet, una VPN o varias interfaces, las muestras a 1.1.1.1 pueden salir por una ruta distinta del adaptador Wi-Fi analizado. V36 incorpora un control de **IPv4 de origen elegida para el destino WAN** mediante un socket UDP conectado, sin enviar datagramas. La IP local elegida se compara con las direcciones IPv4 del adaptador Wi-Fi activo. Si no coincide, el informe advierte que el resultado WAN no puede atribuirse a ese Wi-Fi. Si hay un túnel activo, se muestra un aviso adicional. Si no se puede conocer la ruta, el diagnóstico queda explícitamente inconcluso para atribución.

La selección UDP es **orientativa**, no prueba que ICMP, IPv6 o un juego concreto sigan la misma ruta; no cambia rutas, DNS, cortafuegos, controladores ni ajustes. No se muestran IP públicas ni se mide velocidad real de Internet. Las 16 parejas y las precauciones sobre ICMP filtrado de V35 siguen disponibles.

## Pruebas y limitaciones
Pruebas sintéticas de coincidencia de origen Wi-Fi, origen ajeno (Ethernet/VPN), túnel activo, ruta desconocida y regresión de clasificación ICMP. CI puede compilar Windows y Android y comprobar la lógica, pero **no** valida la ruta real ni Mbps/FPS en el equipo del usuario. Android permanece V32 sin desinstalaciones ni cambios de firma. No activar overlays que capturan y redibujan pantalla ni inyectar código en juegos/anticheat.

Un monitor 1920×1080 a 200 Hz solo muestra 1920×1080 píxeles físicos; DSR/DLDSR puede renderizar internamente a más resolución y reducirla, pero no crea píxeles 4K físicos. Los FPS y la latencia dependen del juego, GPU y ajustes. No se garantiza 200–300 FPS ni mejora de Mbps.

**Política de entrega:** publicar un ZIP único PC + Android V32 + fuentes solo si la compilación y las pruebas CI pasan. No desinstalar Android por una firma debug diferente.
