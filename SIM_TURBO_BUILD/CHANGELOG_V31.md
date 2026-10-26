# AETHER V31 — CLARIDAD GLOBAL 1080P, SIN CAMBIAR RESOLUCION
Fecha: 26-10-2026.

## Objetivo realista
Los monitores Full HD tienen 1920x1080 pixeles físicos; ningún software puede reproducir 3840x2160 detalles independientes en ese panel. V31 integra un filtro de **aumento de contraste local en bordes** (unsharp mask), procesado sobre cada captura del escritorio a su resolución nativa. NO es IA; los modos neuronales FSRCNN previos siguen disponibles pero son lentos.

## PC: activar, minimizar y usar las aplicaciones normalmente
1. AETHER CLINIC > IA REAL EN DIRECTO V31.
2. Pulsar **CLARIDAD GLOBAL FULL HD · ACTIVAR Y MINIMIZAR**.
3. Confirmar. Si Windows permite overlay excluido de la captura, el control minimiza a la barra de tareas y aparece un overlay de pantalla completa que intenta conservar clics a través de la ventana.
4. Recuperar el control desde la barra de tareas, pulsar DETENER o cerrar el proceso para desactivar el filtro.
5. No cambia resolución de pantalla, DSR/DLDSR, BIOS, GPU drivers o antivirus.

## Limitaciones imprescindibles
- Este filtro es **experimental**: el overlay puede no aparecer sobre juegos protegidos por anticheat, fullscreen exclusivo o configuraciones multi-monitor.
- No puede garantizar 300–400 FPS, juego sin latencia ni imagen indistinguible de un monitor 4K.
- La ruta de pantalla completa utiliza copia de pantalla + filtrado OpenCV + representación de imágenes Tk: si introduce retraso, DESACTIVAR.
- Sólo mejora la nitidez percibida de los bordes, no añade detalles 4K reales; puede acentuar aliasing, ruido y halos.
- La opción IA 4K virtual de V30 sigue, separada, como demostración de CNN; no debe llamarse 4K universal.
- El overlay crea técnicamente una ventana transparente a los clics para componer la imagen, pero evita abrir una vista previa visible aparte.

## Wi-Fi V31
Aumenta mediciones secuenciales de ping al gateway y a Internet de 12 a 16 muestras cada uno, incluyendo mediana, p95, jitter y rachas de pérdidas. Es diagnóstico read-only, no acelera la conexión ni modifica la tarifa del proveedor.

## Verificación
Las pruebas CI verifican sintaxis, conversión de fotogramas sintéticos y preservación de resoluciones y compilación Windows/Android; no prueban la composición en monitor físico ni FPS de CS2/Valorant/Roblox. El usuario debe medir calidad y rendimiento en su equipo.

## Conservación
El ZIP debe conservar Windows, Android V22 y código fuente. No desinstalar Android V22: puede haber firmas de depuración distintas.
