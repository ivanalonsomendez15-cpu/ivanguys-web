# AETHER V25 — IA EN DIRECTO + MÉTRICAS WIFI (26 octubre 2026)

## Mejoras implementadas
- **IA neuronal FSRCNN x2** en la captura voluntaria de pantalla. No cambia resolución de Windows, no modifica drivers ni inyecta en juegos. Conserva modo de ventana y overlay experimental de V24.
- La vista previa mide por separado tiempo de captura, inferencia FSRCNN, tiempo total por fotograma, FPS **de AETHER** y fotogramas descartados. No son FPS del juego ni latencia de extremo a extremo del monitor.
- Cola de un fotograma: cuando la IA no da abasto, descarta el fotograma viejo en vez de acumular retraso.
- Límite de trabajo objetivo 8 FPS (RÁPIDO) / 4 FPS (IA_4K) para reducir consumo excesivo cuando la inferencia es rápida; si tarda más, FPS serán inferiores.
- Corrige actualización de interfaz Tk desde un hilo secundario al reportar errores.
- Intenta excluir también la ventana de vista previa de la captura para evitar efecto espejo; si no se puede, advierte.
- `--benchmark --mode RAPIDO` o `--benchmark --mode IA_4K`: un fotograma sintético de 1920x1080 para medir inferencia en ese equipo, sin prometer rendimiento de juegos.
- **Wi-Fi V25:** pings de gateway e Internet con media, mediana, p95, mínimo, máximo, jitter y fallos ICMP; latencia de resolución DNS de example.com; fecha local y exportación manual de informe TXT. Identifica si se está midiendo Ethernet o Wi-Fi.
- Mantiene Android V22 y no toca ni desinstala datos de versiones anteriores. Android debug firmado en CI puede no ser instalable encima de una versión firmada con otra clave.

## Límites comprobables
- Un monitor físico 1080p no puede mostrar 3840x2160 píxeles reales. El modo IA_4K procesa internamente a 4K virtual y reduce a 1080p. No equivale a 4K nativo.
- Capturar, procesar y superponer cada fotograma puede consumir mucha CPU y aumentar latencia. No es sustituto garantizado de NVIDIA DLSS, RTX Video Super Resolution ni de una GPU 4K.
- Overlay global y videojuegos en pantalla completa exclusiva/anti-cheat no están validados en hardware del usuario. Nunca se promete funcionamiento universal con CS2, Valorant o Roblox.
- La medición Wi-Fi es **diagnóstico**, no un aumento automático de Mbps; ping ICMP bloqueado no prueba caída de conexión.
- Pruebas CI: compilación C# .NET Framework 4.8, Android V22, test FSRCNN con fotogramas sintéticos y test del EXE PyInstaller. No prueban calidad subjetiva de imagen ni FPS reales de juegos.

## Distribución
El ZIP todo-en-uno pesa más de 100 MB, límite de archivos Git normales. Se publica como **GitHub Release asset** (no commit de archivo binario gigante) y como GitHub Actions artifact. Fuentes editables permanecen en la rama `sim-turbo-build-v3-20261025`.
