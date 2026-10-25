# AETHER V13 — Laboratorio de red verificable (26-10-2026)

## Entrega nueva

- Windows: `V13_NetworkLab.cs` integra una ventana con ping al router,
  ping externo (8 muestras por destino), media, mínimo, máximo,
  variación media entre muestras y fallos ICMP.
- Windows: test de descarga HTTPS voluntario, tres muestras limitadas a
  5 MiB cada una (máximo 15 MiB de datos útiles), cálculo en Mb/s y
  mediana. Botón Cancelar, límite temporal por conexión y exportación TXT.
- Android: `NetworkQuality.java` consulta el tipo de conexión, validación
  de Internet, si Android marca la red como limitada y las estimaciones de
  ancho de banda del enlace. No descarga archivos ni cambia ajustes.
- Nueva pestaña Windows «RED MEDIBLE V13» y nuevo botón Android «INFORME
  DE RED MÓVIL»; conservados los módulos V4–V12.
- Proyecto fuente editable con solución Visual Studio, proyecto Android,
  Cloudflare, parches históricos, manifiesto SHA256 y ZIP.

## Precisión y seguridad

El ping ICMP puede estar bloqueado y no representa la latencia de un juego.
El jitter indicado es la variación media absoluta entre muestras sucesivas.
La prueba HTTP depende de Cloudflare/CDN, y no certifica la tarifa contratada.
El ancho de banda que Android estima no es una prueba de velocidad real.
El software no puede transformar automáticamente 60 Mb/s en 150 Mb/s ni
un PC de 15 FPS en otro de 120 FPS sin capacidad física suficiente.
El exportador 4K V12 es bicúbico, no IA, y una pantalla 1080p sigue siendo 1080p.
Los 14 destinos AETHER continúan sin VPS físicos verificados.

## Validación

La automatización de GitHub Actions compila Windows y Android desde las
fuentes reconstruidas, verifica que el ZIP contiene los archivos de V13
y comprueba todos los SHA256. Las mediciones de red reales, el mando Android
y la compatibilidad con móviles concretos requieren pruebas físicas.
