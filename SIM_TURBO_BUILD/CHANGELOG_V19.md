# AETHER V19 — 26 de octubre de 2026

## Nuevas funciones
- **Windows / juego por proceso**: pestaña «JUEGO / PROCESO V19». Lista procesos visibles con PID y permite medir durante aproximadamente 1 segundo el uso de CPU normalizado por procesadores lógicos y la RAM residente de un proceso seleccionado. Diagnóstico y recomendaciones para equipos modestos, informe TXT. Solo lectura, no modifica prioridades ni cierra procesos.
- **Android / detección voluntaria**: botón «V19 · DETECTAR JUEGO Y CONFIGURAR MANDO». Utiliza el último juego **registrado previamente por el usuario** que figure en los eventos de uso (requiere permiso opcional de Android). Selecciona el perfil del mando AETHER Minecraft/Roblox/Carreras/General; al cambiar de perfil detiene el mando activo para liberar teclas. No modifica los juegos ni inspecciona aplicaciones no registradas.
- **Pruebas**: 6 casos Java de clasificación de perfiles, 6 casos C# de recomendaciones de CPU/RAM, compilación Android y Windows, integridad y SHA-256 del ZIP de fuentes.
- **Compatibilidad**: se conservan íntegros Windows, Android, Cloudflare y los módulos V4–V18, incluidos mando HMAC, monitor voluntario con notificación, pruebas A/B, diagnósticos de Wi-Fi y escalado bicúbico.

## Límites verificables
- CPU de proceso y RAM no equivalen a FPS; el rendimiento de GPU no se mide en V19. Las muestras dependen de permisos y de que el proceso continúe abierto.
- La selección automática solo utiliza paquetes previamente guardados; Android puede retrasar o no entregar eventos de uso. La app no fuerza gráficos en otros juegos.
- Ni 60→150 Mb/s ni 15→120 FPS están garantizados. La tarifa, Wi-Fi, router, CPU y GPU imponen límites.
- La pantalla 1080p no puede mostrar 4K nativo. El laboratorio de imágenes V12 usa interpolación, no IA neuronal.
- Los 14 nodos regionales siguen siendo ubicaciones planificadas, sin servidores físicos confirmados.
- La CI verifica compilación y reglas, no pruebas de extremo a extremo en dispositivos físicos.
