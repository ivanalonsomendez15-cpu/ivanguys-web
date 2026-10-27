# AETHER V33 — CORRECCIÓN OVERLAY 1080P

**Error reportado por usuario:**
`No se puede activar overlay: can't set fullscreen attribute for ".!toplevel": override-redirect flag is set`.

## Causa
Tkinter (Windows) no permite combinar `overrideredirect(True)` (ventana sin bordes) con `attributes("-fullscreen", True)` en la misma ventana. El código de AETHER V31-V32 lo hacía al activar el filtro global. El fallo se produce antes de procesar fotogramas.

## Cambio comprobable
En el programa de captura e imagen V33, usar `geometry(f"{screen_width}x{screen_height}+0+0")` para ocupar todo el monitor principal sin la propiedad conflictiva `-fullscreen`. Se mantiene el modo sin bordes, el procesamiento Full HD y la exclusión de la captura si el sistema la admite.

## Pruebas
- La suite CI analiza la sintaxis del archivo final empaquetado y confirma que ya no existe la llamada conflictiva.
- Se reconstruye el instalador y un solo ZIP con Windows V33, Android V32 y fuentes completas.
- No hay pruebas reales de composición del overlay en el hardware del usuario ni FPS en juegos.
- El filtro global sigue siendo experimental y puede ser incompatible con juegos con pantalla completa exclusiva, Windows Capture Protection y configuraciones de monitores múltiples.

## Límites
**NO transforma un panel 1080p en uno 4K físico**. "CLARIDAD GLOBAL FULL HD" es un filtro de nitidez NO neuronal. No promete 300–400 FPS, cero latencia ni calidad 4K nativa. Se conserva V32 Android para el arreglo del emparejamiento. No desinstalar apps antiguas Android sin exportar perfiles: clave debug diferente puede impedir actualización en el sitio.
