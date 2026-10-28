# AETHER V44 — 28 octubre 2026

## Mejora real de diagnóstico Wi-Fi: clasificación basada solo en parejas válidas
V43 exigía ocho parejas LAN/WAN con respuestas, pero después llamaba al clasificador V34 usando las series completas, incluidas respuestas aisladas sin correspondencia en el otro destino. Un pico de latencia solo en una respuesta no emparejada podía disparar un aviso de problema local o exterior. V44 mantiene el umbral de ocho parejas y ahora entrega al clasificador **exclusivamente los RTT de los índices donde router y WAN respondieron**. Las respuestas aisladas siguen visibles en los resúmenes descriptivos, pero no determinan la atribución LAN/WAN.

## Pruebas
Tests sintéticos nuevos: ocho parejas normales más ocho picos LAN sin pareja, ocho picos WAN sin pareja, p95 alto realmente emparejado en LAN y WAN, entradas nulas y longitudes incompatibles. Se conservan pruebas de ruta, enlace, gateway, IPv4, túneles, corte por ICMP silencioso y supresión por destino. Las compilaciones PC y Android y el ZIP solo se publican si GitHub Actions supera sus trabajos.

## Seguridad, gráficos y límites
No cambia configuración de red, controladores, DNS, VPN ni firewall. Las parejas se toman de forma alternada y secuencial, no simultánea; el clasificador es orientativo, no causal. ICMP puede filtrarse o limitarse; no equivale a pérdida de tráfico de aplicaciones ni al ping de videojuegos. No se han medido Mbps o FPS físicos. Se mantiene el asesor de pantalla 1080p a 200 Hz sin activar overlay de pantalla completa ni interferir con anticheat. Supermuestreo puede mejorar apariencia, pero un panel 1080p nunca muestra 4K nativo. Android sigue en V32; no desinstalar ni sustituir perfiles sin copia de seguridad.
