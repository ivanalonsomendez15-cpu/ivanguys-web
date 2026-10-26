# AETHER V17 — 26 de octubre de 2026

## Cambios funcionales
- Windows: nuevo asesor gráfico de solo lectura para GPU, CPU, RAM y resolución física; tres perfiles (FPS / equilibrado / calidad) y exportación TXT. Explica DLSS, FSR, DSR/DLDSR y RTX Video Super Resolution sin fingir activación automática.
- Android + Windows: mando LAN con mensajes HMAC-SHA256 `STPC17`, identificador de sesión aleatorio y secuencia antirrepetición. El código de emparejamiento ya no viaja literalmente en los paquetes del mando.
- Android + Windows: consulta de CPU/RAM/GPU por LAN `STPC-CAPS17` autenticada por HMAC, con respuesta firmada y nonce. Detección del receptor por broadcast continúa siendo opt-in.
- Conservadas las herramientas de V4–V16, la app Android en segundo plano con notificación, perfiles por juego, diagnósticos y código Cloudflare.
- Actualizados Gradle, proyecto Visual Studio, exportación ZIP de fuentes y flujos de compilación.

## Límites y compatibilidad
- El protocolo V17 requiere actualizar PC y Android a V17 juntos. Un APK V16 no controla un receptor V17.
- HMAC autentica, **no cifra** el tráfico. El código heredado tiene 40 bits de entropía; usar solo en una LAN privada de confianza. El receptor debe abrirse voluntariamente.
- No hay controlador XInput, cambios automáticos de juegos, ni IA neuronal nueva.
- Una pantalla 1920×1080 no puede mostrar 3840×2160 píxeles físicos.
- Sin mediciones reales de aumento de Mbps o FPS, sin 14 servidores físicos desplegados.
- Las pruebas CI de Windows/Android y los SHA-256 se informarán tras finalizar los flujos; no confundir compilación con pruebas físicas.
