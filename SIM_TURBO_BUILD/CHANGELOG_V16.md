# SIM TURBO PC ULTRA / AETHER V16 — 2026-10-26

## Base conservada
Se parte de V15. Se aplican V4Patch.py ... V16Patch.py en orden sobre los proyectos originales. No se borran las fuentes Windows/Android/Cloudflare, el receptor LAN ni los módulos de versiones anteriores.

## Windows: comparador de experimentos A/B
- Nueva pestaña «PRUEBAS A/B V16» en System Clinic.
- Ventana «AETHER V16 · COMPARADOR A/B DE RED Y FPS».
- Tres mediciones de ANTES y tres de DESPUÉS, con mediana, cambio absoluto y relativo, y estado del objetivo 120/150 Mb/s.
- Puede comparar descarga, subida y latencia (donde menos es mejor).
- Campos opcionales para FPS antes/después del mismo juego y escena. FPS manuales, NO medidos por el programa.
- Campo de notas y exportación local a CSV UTF-8. No altera registro, DNS, drivers ni servicios.
- La variación de tres muestras no prueba causalidad: se recomienda repetir y comparar con Ethernet.

## Android: asesor de hardware y perfil por juego
- Botón «V16 · ANALIZAR MÓVIL Y PERFIL DEL JUEGO» en el panel AETHER.
- Informe local de Android, núcleos lógicos, RAM total/disponible, batería y tipo de red.
- Estimación de enlace indicada expresamente como dato del SO, NO speedtest.
- Consulta el perfil del paquete de juego seleccionado y da consejos contextualizados.
- Sin permisos nuevos, sin root, sin cambiar otros juegos ni recopilar datos externos.

## Limitaciones y seguridad
- No se han medido 120–150 Mb/s ni 100–120 FPS en dispositivos reales.
- El mando Android usa teclado por Wi-Fi LAN, no XInput.
- La imagen 4K V12 usa bicúbica, NO un modelo de IA; pantalla 1080p sigue siendo 1080p.
- Los 14 destinos Cloudflare son planificados, no servidores físicos desplegados.
- Las mejoras no pueden superar límites de hardware, contrato o pantalla.

## Pruebas requeridas
- Aplicar parches V4–V16 y comprobar anclas.
- Compilar C# Windows en windows-latest y Android Gradle en ubuntu-latest.
- Validar ZIP, SHA256SUMS, presencia de módulos V16 y conservación de V15.
- Pruebas en hardware físico siguen pendientes.
