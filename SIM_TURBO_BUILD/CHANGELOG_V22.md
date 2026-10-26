# AETHER V22 — GUARDADO AUTOMÁTICO REAL

## Windows
- Los interruptores del piloto V8 (red, gaming, avisos de drivers) y la lista de ejecutables se recuperan al volver a abrir el programa, también después de reiniciar Windows.
- Las opciones de análisis V10 (ping, DNS y módulo seleccionado) vuelven a abrirse como estaban.
- Se recuerda la última pestaña de AETHER CLINIC, donde encontrarás **GUARDADO V22**.
- Botones para **exportar e importar** una copia de preferencias. Importar requiere confirmación y reapertura de ventanas.
- Guardado por usuario en `%LOCALAPPDATA%\SimTurboPC\V22\preferences.txt`, escritura de reemplazo y archivo de recuperación.
- La activación del piloto, el modo mando y cualquier cambio sobre el sistema **NO** se reanudan de forma silenciosa al reiniciar. Las preferencias sí.
- Se conservan las funciones V4–V21, incluida la IA neuronal FSRCNN x2.

## Android
- Los perfiles de juego y diseños del mando que ya usaban SharedPreferences ahora guardan con commit sincrónico.
- Dos botones: **EXPORTAR COPIA** y **RESTAURAR AJUSTES** en AETHER Android.
- Los archivos de copia usan el selector del teléfono (no permiso de archivos completo).
- Copia JSON limitada a perfiles de juego, disposición de botones y perfil general; se excluyen códigos de emparejamiento, IP del ordenador, registros y uso de aplicaciones.
- Al actualizar el APK con el mismo paquete y firma, las preferencias existentes se preservan. No borres la aplicación antes de actualizarla.
- Android no promete mantener monitorización encendida tras apagar/reiniciar: se requiere consentimiento y notificación.

## Nube
El Worker `long-sky-d531` no dispone de KV/D1 comprobado ni de autenticación de cuentas: **NO hay copia en la nube**. No se envían configuraciones ni datos privados al Worker.

## Uso
1. PC: instalar Windows V22 desde el ZIP conjunto, abrir AETHER CLINIC -> GUARDADO V22.
2. Android: instalar/actualizar Android V22 desde el mismo ZIP y usar la sección AETHER V22 para exportar una copia opcional.
3. Cerrar programas y reiniciar: las configuraciones locales persisten sin necesidad de tener navegador abierto.

## Pruebas
Se deben validar compilaciones Windows/Android, existencia del código de guardado y estructura ZIP. No afirmar prueba en dispositivos reales hasta efectuarla.
