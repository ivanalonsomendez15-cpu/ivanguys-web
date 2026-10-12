# IVANGUYS CONNECT — configuración del sistema de cuentas y amigos

## Qué funciona y qué necesita configurar

La web y los **30 minijuegos**, Zelda y el mundo 3D están diseñados para GitHub Pages. La sección `social.html` contiene una integración real preparada para usar **Firebase Authentication, Cloud Firestore y Firebase Storage**; hasta configurar tu propio proyecto, muestra un aviso y NO registra usuarios ni finge conversaciones.

### Configuración del administrador (mejor junto a una persona adulta responsable)

1. Abre **Firebase Console** (`https://console.firebase.google.com/`) y crea un proyecto para IVANGUYS. Revisa edad mínima, términos, privacidad y costes antes de ofrecer un registro público.
2. En Configuración del proyecto, añade una **Aplicación web**. Copia las propiedades de su `firebaseConfig` a `firebase-config.js`. Esta clave **NO** es `YOUTUBE_API_KEY` ni va en secretos de GitHub. La configuración web es pública: la protección real proviene de las reglas.
3. En **Authentication → Sign-in method**, habilita **Correo electrónico/Contraseña**. Considera habilitar verificación de correo y políticas contra abusos en un lanzamiento real.
4. En **Firestore Database**, crea la base de datos y publica el contenido de `firestore.rules` en la pestaña Reglas, sustituyendo `PON_AQUI_UID_MODERADOR` por el UID de tu cuenta de administrador en Firebase Authentication. No uses tu nombre de usuario ni tu contraseña: es un identificador alfanumérico del usuario.
5. En **Storage**, crea un bucket y publica `storage.rules`, con el mismo UID de moderador. **Firebase Storage puede requerir un plan de pago Blaze**; no actives facturación sin revisar los costes y límites con una persona adulta. Si prefieres no activar Storage, las fotos personalizadas y la subida de vídeos permanecerán sin funcionar, pero Authentication/Firestore pueden funcionar si tu proyecto cumple los requisitos.
6. Sube el ZIP (salvo que solo quieras copiar algunos archivos) a la raíz de `ivanguys-web`, preservando `.github/`, `data/`, `scripts/`, `config.js` y tus secretos de Actions. Espera la publicación de GitHub Pages.
7. Entra en `social.html` y crea una cuenta de prueba. Desde otro navegador u otra cuenta de prueba, busca su apodo exacto, solicita amistad, acepta, envía un mensaje y prueba la llamada con permisos explícitos de micrófono.
8. Para **publicar vídeos**: la subida crea una ficha en la colección `videos` con `status: pending`. Revisa manualmente en Firestore el título, el vídeo, la privacidad y la autoría. Solo la cuenta del moderador especificada en las reglas puede cambiar `status` a `approved` o `rejected` en Firestore. Los demás usuarios solo ven vídeos aprobados y sus propias subidas pendientes.

## Seguridad y limitaciones importantes

- **Nunca** guardar contraseñas en los archivos del repositorio ni en `localStorage`; Firebase Authentication gestiona las contraseñas. No publiques tus secretos de YouTube ni claves privadas de administración.
- Los usuarios no pueden enviarse mensajes o llamarse sin una amistad aceptada, de acuerdo con las reglas. Hay opciones de bloquear y denunciar, pero las denuncias **necesitan una persona real que las revise** en Firestore.
- El estado online es aproximado: usa actualizaciones periódicas de actividad del navegador. Puede retrasarse hasta algo más de un minuto.
- Las **llamadas son de voz 1 a 1** y usan WebRTC con señalización por Firestore. El navegador pedirá permiso de micrófono. Algunas redes necesitan un servidor **TURN**, que no está incluido: no se garantiza conexión en todas las redes.
- Los vídeos son archivos MP4/WEBM de máximo 35 MB. No equivale a los servicios de transcodificación, streaming, detección de copyright y moderación a gran escala de YouTube. Las URL de descarga de Firebase Storage pueden ser compartibles; no subas vídeos privados o sensibles. Los vídeos aprobados se ven tras iniciar sesión.
- Las reglas ayudan, pero para abrir una comunidad a muchas personas añade verificación de correo, rate limiting, herramientas de moderación profesional, protección anti-spam, política de privacidad, mecanismos de retirada y supervisión, así como cumplimiento de las normas locales de protección de menores y datos.
- El mundo abierto añade iluminación, sombras, nubes y superficies procedurales. **No es fotorrealismo ni un juego AAA**: con modelos, texturas y animaciones profesionales se podría desarrollar más.

## Mantenimiento

- Revisa **Firestore / reports** periódicamente para tramitar denuncias. Las reglas permiten leer las denuncias solo al UID moderador.
- Para evitar costes inesperados, define presupuestos, alertas y límites de uso en Google Cloud / Firebase.
- Los archivos `firestore.rules` y `storage.rules` **no se aplican automáticamente** por subirlos a GitHub; hay que copiarlos a la consola de Firebase y publicarlos allí.
- Publicar `firebase-config.js` no da permisos administrativos. El UID de moderador debe mantenerse en reglas de servidor, NO en un campo editable por el usuario.
