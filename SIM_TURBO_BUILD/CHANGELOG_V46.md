# AETHER V46 — 4K visual / objetivo 300 FPS + mejora Wi-Fi

## Gráficos: opción FUNCIONAL para probar supermuestreo por GPU
El usuario reporta unos **425 FPS a 1080p** en Counter-Strike 2 y quiere imagen comparable a 4K manteniendo **300 FPS o más** y **200 Hz**. V46 añade un panel específico en **AETHER CLINIC → 4K VISUAL / 300 FPS V46**:
- Enumera los modos de resolución que Windows/NVIDIA anuncian para el monitor principal a la **misma frecuencia** actualmente activa: 3840×2160 (DSR 4x), 2880×1620 (DLDSR 2,25x) y 2560×1440.
- Comprueba con CDS_TEST antes de cualquier cambio. Si ninguno existe a 200 Hz, no fuerza resoluciones personalizadas ni baja a 60 Hz.
- Con consentimiento explícito permite cambiar **temporalmente** la resolución del escritorio mediante Windows. Si la pantalla falla, vuelve al modo original automáticamente tras 20 s; el usuario puede restaurar manualmente, y al cerrar siempre se restaura.
- No captura/redibuja el juego mediante overlay CPU, ni inyecta código en CS2. No activa trampas o evasión anticheat.
- El usuario mide los FPS **reales** en su juego y los introduce: AETHER clasifica si la cifra indicada es ≥300 o hay que probar un modo menos costoso. **AETHER no lee ni inventa FPS ni garantiza alcanzar 300.**
- Pantalla 1080p sigue sin 4K nativo: el objetivo es mejorar el muestreo y la definición percibida; una imagen idéntica a panel físico 4K es imposible.

## Wi-Fi — mejora en esta versión, de acuerdo con el mandato del usuario
Nuevo panel **WI-FI V46 USO REAL** mide la variación real de bytes recibidos/enviados y errores/descartes de la tarjeta Wi-Fi activa, durante aproximadamente 1,2 s, sin descargar archivos ni alterar router, DNS o firewall. Presenta Mb/s de tráfico observado, NO ancho de banda máximo, y distingue reinicios de contadores. Tests sintéticos verifican cálculos.

## Compatibilidad y límites
- Windows .NET Framework 4.8; requiere controlador gráfico que anuncie DSR/DLDSR y conserve Hz actuales. Los juegos pueden requerir elegir la resolución en sus propios ajustes.
- Android V32 de emparejamiento se conserva. La firma debug puede variar; exportar perfiles antes de sustituir APK. No desinstalar si no se desea perderlos.
- La compilación CI puede verificar el código, el ejecutable y el ZIP, pero no comprobar FPS/latencia/imagen en el hardware del usuario.
- No hay reescalado neuronal real para toda la pantalla a 300 FPS ni se puede afirmar lo contrario.
