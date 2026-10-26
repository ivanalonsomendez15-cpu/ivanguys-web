# AETHER V15 · Perfilador de PC y mando táctil con diagonales

Base: AETHER V14; desarrollo incremental de 26/10/2026. Esta versión no modifica el código Cloudflare existente ni elimina módulos previos.

## Windows · PERFILADOR DE RENDIMIENTO V15

- Nueva pestaña en AETHER SYSTEM CLINIC para abrir un perfilador de recursos de solo lectura.
- Muestreo cada 3 segundos, hasta 120 registros (máximo seis minutos de historial en memoria).
- CPU estimada mediante WMI Win32_Processor.LoadPercentage; RAM utilizada/libre mediante Win32_OperatingSystem; GPU detectada por WMI.
- Identificación de los 8 procesos con mayor memoria residente, sin finalizar procesos ni cambiar sus prioridades.
- Tres perfiles informativos: EQUILIBRADO, PC MODESTO, JUEGOS, con avisos contextualizados de CPU/RAM.
- Exportación CSV local de CPU y RAM con marcas temporales; botón DETENER.
- No mide FPS reales, temperaturas ni GPU %, y no promete pasar de 15–20 FPS a 100–120 FPS.

## Android · MANDO TÁCTIL V15

- Nuevo joystick táctil circular con zona muerta del 30 %, direcciones WASD y diagonales simultáneas.
- Liberación de las teclas al soltar el dedo, cancelar el gesto, cambiar perfil, detener el mando o desmontar la vista.
- Los botones A/B/X/Y y el stick se pueden usar con dedos distintos; continúa siendo emulación de teclado, no XInput.
- Nuevo botón para medir tres intercambios UDP autenticados por código con el PC emparejado, mostrando mediana y muestras de RTT.
- El RTT corresponde a la respuesta de la API de descubrimiento AETHER, no al ping de un juego.
- Mantiene Android Foreground Service visible, perfiles por paquete, detección voluntaria de juegos, detección de PC y modo Wi-Fi+SIM previo.

## Cloudflare y límites

- Se incluye el código Cloudflare anterior sin afirmar despliegue de nuevos servidores; los 14 nodos regionales siguen pendientes.
- Una pantalla 1920×1080 nunca mostrará 3840×2160 píxeles nativos. La conversión bicúbica anterior NO es IA.
- No se ha medido ninguna mejora real de Mbps o FPS en hardware físico.
- Para verificar: ejecutar workflows Windows/Android y fuentes, comprobar integridad ZIP, SHA-256 y abrir ambos proyectos.
- El receptor UDP V11 emplea código de emparejamiento en red local; para uso fuera de redes de confianza haría falta autenticación criptográfica más fuerte.
