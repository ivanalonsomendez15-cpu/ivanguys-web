# AETHER V45 — 28 octubre 2026

## Wi-Fi: cobertura temporal antes de atribuir latencia
V44 comparaba únicamente RTT de parejas válidas, pero podía clasificar el enlace a partir de ocho respuestas concentradas en un solo intervalo de una prueba de dieciséis parejas. V45 conserva el mínimo de ocho y añade un filtro de representatividad: para el muestreo completo de 16 parejas exige **12 respuestas emparejadas** y **al menos cinco en cada mitad**. Si no se cumplen, muestra **Inconcluso** y recomienda repetir; evita localizar problemas Wi-Fi/router/Internet basándose en una franja de tiempo demasiado parcial. No convierte las no respuestas ICMP en pérdida real de paquetes.

## Verificación
Pruebas sintéticas añadidas para 8/16 agrupadas, 11/16, 12/16 repartidas, 12/16 concentradas, 16/16, entradas nulas y tamaños incompatibles. Se conservan las pruebas anteriores de rutas, VPN, adaptador, gateway, IP, supresión ICMP y pares válidos. El CI debe compilar Windows y Android y verificar el ZIP antes de publicar la release.

## Límites
Esta mejora aumenta la prudencia del diagnóstico, no los Mbps ni los FPS. La clasificación ICMP es orientativa, las sondas no son simultáneas y el filtrado ICMP no prueba avería. No se han medido conexiones físicas del usuario. Android sigue en V32; no desinstalar. El monitor físico 1080p a 200 Hz no puede mostrar píxeles 4K nativos; no se activan overlays lentos ni se altera anticheat.
