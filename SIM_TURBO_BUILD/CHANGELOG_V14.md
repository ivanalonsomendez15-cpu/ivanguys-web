# AETHER V14 · Auditoría de enlace y perfiles de mando por juego

Fecha de desarrollo: 26/10/2026 (Europe/Madrid). Base: V13.

## Windows · AUDITORÍA DE ENLACES V14

- Nuevo apartado en AETHER SYSTEM CLINIC, conservando los anteriores.
- Lectura de interfaces Ethernet y Wi-Fi activas: tipo, velocidad negociada del enlace, IPv4 local, router y DNS.
- Identifica enlaces de 100 Mb/s que físicamente no pueden alcanzar 120–150 Mb/s útiles.
- Ejecuta `netsh wlan show interfaces` en modo solo lectura para mostrar señal, banda y tasas según Windows.
- Recomendaciones verificables para comparar 60 Mb/s por Wi-Fi con Ethernet y 5 GHz.
- Botones de actualizar, copiar y guardar informe TXT. Sin cambios automáticos en Windows, DNS, firewall o registro.

## Android · PERFILES DE MANDO V14

- Selector visible de perfiles de botones: GENERAL, MINECRAFT, ROBLOX y CARRERAS.
- Guarda el perfil elegido de forma local en SharedPreferences.
- Ajusta las teclas que transmite el mando por Wi-Fi al receptor Windows ya existente.
- Evita teclas atascadas: cambiar el perfil con mando activo detiene el envío y libera las teclas; los eventos UP sueltan exactamente la tecla usada al pulsar.
- Conserva las funciones Android V4–V13: monitor voluntario en segundo plano, perfiles informativos de juegos, detección de PC por LAN y diagnóstico de red.
- No es un mando Xbox/XInput nativo ni modifica los juegos Android; los perfiles dependen de la asignación de teclas de cada juego.

## Límites y pruebas

- El enlace Wi-Fi/Ethernet nominal no equivale a los Mbps de Internet. No hay promesa de pasar de 60 a 120–150 Mb/s.
- Una pantalla 1080p sigue siendo 1080p aunque procese una imagen de origen 4K.
- No hay 14 VPS regionales desplegados y verificados.
- No se ha medido rendimiento físico en el PC ni en el móvil del usuario.
- La compilación de Windows y Android, pruebas de ZIP y SHA-256 deben consultarse en el resultado de GitHub Actions correspondiente a esta versión; no deben darse por aprobadas antes de finalizar.

## Reproducción

Ejecuta `python3 SIM_TURBO_BUILD/source_project_export.py` desde la raíz del repositorio para generar el ZIP completo V14. El proyecto exportado incluye Visual Studio, Android Studio, Cloudflare y scripts históricos.
