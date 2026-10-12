# IVANGUYS 4.0 — Plan de verificación

## Pruebas efectuadas en entorno aislado
- Sintaxis JS de `nexus.js`, `nexus-online.js`, `arena.js`, `creator.js`, `moderation-v4.js`, `menu-v4.js`, `config-v3.js` y `functions/index.js` mediante `node --check`.
- Página NEXUS: 20 misiones y 22 artículos aparecen, una misión concede 45 puntos, una cápsula elegida añade un cosmético.
- Creator Lab: la vista previa aparece en un `iframe sandbox` y el ejemplo de reflejos registra clics.
- Comprobación del HTML de Arena y manejo de fallo cuando no llega la biblioteca 3D.

## Pruebas pendientes que NO deben afirmarse completadas
- Renderización WebGL 3D real con Three.js; el entorno de pruebas bloquea la CDN externa.
- Creación de cuentas reales, envíos y moderación a través del Firebase del usuario.
- Despliegue y pruebas con emuladores de Firebase Functions/Firestore.
- Compra/venta entre dos usuarios y verificación de concurrencia/race conditions.
- Telemetría antitrampas y detección IA (no implementadas).
- Accesibilidad completa y compatibilidad de todos los navegadores.

## Cinco controles que deben aplicarse a CADA función antes de declararla lista
1. **Entradas**: esquema, tamaño, tipos, límites, representación y caracteres válidos.
2. **Autorización**: autenticación, permisos mínimos, propietario del recurso y bloqueo.
3. **Integridad**: backend autoritativo, transacciones y comprobación de estados.
4. **Recuperación**: idempotencia, pruebas de reconexión, fallos parciales y operaciones concurrentes.
5. **Observabilidad**: errores con contexto no sensible, métricas y alertas apropiadas.

## Casos de prueba adicionales recomendados
- Repetir una misión varias veces: una sola recompensa por usuario y periodo.
- Abrir simultáneamente el mismo anuncio desde dos cuentas: un solo comprador puede adquirirlo.
- Intentar modificar saldo o inventario desde JavaScript del navegador: Firestore debe rechazar escrituras.
- Intentar publicar HTML sin sesión: denegado, sin publicación.
- Intentar leer envíos pendientes de otro usuario: denegado.
- Intentar aprobar juegos sin la cuenta moderadora autorizada: denegado.
- Probar HTML con `fetch`, formularios, `window.top`, scripts externos y ventanas emergentes: bloqueados por CSP + sandbox.
- Comprobar la caducidad de sesiones, privacidad de perfiles y límites de gasto.
