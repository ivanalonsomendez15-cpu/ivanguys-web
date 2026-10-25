# AETHER V12 — 25 octubre 2026

## Implementado en código fuente
- Windows: módulo LAN UDP 45728 para detectar receptor de mando mientras esté abierto.
- Consulta autenticada por código de emparejamiento de CPU lógica, RAM y GPU (solo LAN).
- Windows: laboratorio de imagen con exportación real de PNG 3840 × 2160 por interpolación bicúbica; NO es IA y no aumenta la resolución física de una pantalla 1080p.
- Android: monitor de red y batería mediante servicio visible voluntario (Foreground Service connectedDevice), muestra cada 20 s, notificación y parada manual.
- Android: perfiles locales EQUILIBRADO / LATENCIA / AHORRO / CALIDAD por nombre de paquete, consejos sin modificar otras aplicaciones.
- Android: detección de último juego previamente configurado mediante UsageStatsManager, únicamente con permiso de acceso de uso.
- Android: botón para detectar el PC por difusión LAN, sin enviar el código de emparejamiento; botón adicional para leer hardware del PC ya emparejado.
- Conserva Wi-Fi + SIM para archivos HTTPS con Range, laboratorio de diagnóstico V11, mando Wi-Fi teclado (NO XInput), Cloudflare y nodos planificados.

## Limitaciones y seguridad
- Los perfiles Android no cambian los ajustes gráficos de otros juegos. Son preferencias y consejos locales.
- Android puede interrumpir un servicio en segundo plano por batería o restricciones del sistema.
- La detección LAN exige PC y Android en la misma Wi-Fi y receptor abierto, con firewall que permita UDP 45728.
- La lectura de CPU/RAM/GPU exige el código local de emparejamiento; no es un canal de administración remota.
- La mejora 4K es bicúbica y NO utiliza una red neuronal. El panel 1080p no muestra 4K nativo.
- No se prometen 120–150 Mb/s, 100–120 FPS, despliegues regionales físicos ni mil millones de implementaciones.
- Las 1.000 millones de ideas son combinaciones de plantillas, no funcionalidades implementadas.
- El código fuente puede compilarse mediante GitHub Actions. La ejecución en hardware real, la autonomía de Android y el rendimiento deben verificarse en los dispositivos.

## Pruebas requeridas
1. CI Android Gradle `:app:assembleDebug` en JDK 17 y SDK 35.
2. CI Windows C# .NET Framework 4.8 (o compilador incluido) sin errores.
3. ZIP fuente: integridad CRC, existencia de Windows, Android, Cloudflare y documentación.
4. Prueba manual de LAN: misma Wi-Fi, receptor abierto, código correcto/incorrecto, firewall.
5. Prueba manual Android: permisos, notificación visible, minimizar, detener, consumo de batería.
6. Prueba manual exportación 1080p→PNG 4K y apertura del archivo generado.

## Próximos incrementos
- Mejorar UX de emparejamiento con IP precargada y controles táctiles analógicos.
- Añadir medición de FPS con métricas de Windows y comparación antes/después por juego.
- Añadir motor de IA real solo cuando exista un modelo de inferencia compatible, con pruebas y licencia clara.
