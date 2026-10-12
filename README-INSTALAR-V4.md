# IVANGUYS 4.0 NEXUS — Paquete incremental para GitHub

## IMPORTANTE: qué incluye realmente

Este paquete **no son las 500 mejoras anteriores terminadas**. Es la primera gran versión funcional para avanzar en esa dirección. No modifica tus 30 minijuegos, el mundo WORLD existente, Zelda, `social.html`, `social.js`, ni `config.js`.

**Ya programado y probado localmente:**

- `nexus.html` + `nexus.css` + `nexus.js`: 20 misiones de demostración, 22 cosméticos, tienda de puntos, recompensas por elección, inventario, equipamiento, anuncios de mercado local y exportación de datos.
- `arena.html` + `arena.js`: ARENA NOVA 3D, juego original de etiquetas de energía en primera persona. Incluye movimiento, rivales de entrenamiento, puntuación, energía, obstáculos y dificultades. Requiere conexión al motor Three.js externo. No es un clon de Roblox Rivals ni tiene multijugador online.
- `creator.html` + `creator.js`: editor HTML, archivo `.html` importable, dos plantillas, previsualización en iframe sandbox sin origen compartido y borradores locales. Envía juegos a la colección `ugc_games` de Firestore solo cuando hay sesión activa y reglas adecuadas.
- `moderation-v4.html` + `moderation-v4.js`: panel de moderador para revisar envíos, con aprobación/rechazo protegidos por reglas de Firestore.
- `menu-v4.js` y `config-v3.js`: añade entradas para NEXUS, ARENA y CREATOR al menú actual conservando las fechas de Zelda.
- `functions/index.js`: backend con Firebase Cloud Functions para saldo online, misiones verificables, cosméticos, cápsulas de elección y mercado mundial con transacciones atómicas. **Es código fuente, no está desplegado**.
- `firestore-v4.rules`: copia completa de tus reglas anteriores con los accesos de Creator y la economía añadidos. **No se publica por GitHub Pages.**
- `nexus-online.js`: interfaz preparada para usar el backend en cuanto esté desplegado. Hasta entonces muestra un aviso.

## Parte A. Instalar páginas estáticas en GitHub

1. Guarda una copia de seguridad del repositorio `ivanalonsomendez15-cpu/ivanguys-web`.
2. Entra en `https://github.dev/ivanalonsomendez15-cpu/ivanguys-web`.
3. Descomprime este ZIP. Arrastra **el contenido de esta carpeta**, no la carpeta entera, a la raíz del repositorio. GitHub preguntará por `config-v3.js`: confirma el reemplazo. Este archivo conserva las fechas y añade la navegación V4.
4. No borres `config.js`, `social.js`, `social.html`, `world.js`, `games.js`, `.github`, `data` ni `scripts`.
5. Pulsa Ctrl+Shift+G, añade los cambios y elige **Commit > Sync Changes**.
6. Espera a GitHub Pages. Abre las páginas:
   - `https://ivanalonsomendez15-cpu.github.io/ivanguys-web/nexus.html`
   - `https://ivanalonsomendez15-cpu.github.io/ivanguys-web/arena.html`
   - `https://ivanalonsomendez15-cpu.github.io/ivanguys-web/creator.html`
7. El menú de `index.html` incorporará los enlaces por medio de `config-v3.js` + `menu-v4.js`.

**Ahora mismo funcionan sin backend adicional:** economía y mercado *locales*, misiones de demostración, editor HTML, borradores y Arena 3D (si carga Three.js).

## Parte B. Preparar seguridad para juegos de la comunidad

1. Abre Firebase > Firestore Database > Reglas.
2. Antes de publicar, revisa `firestore-v4.rules`. Conserva las reglas existentes y añade `ugc_games` y `nexus_*`.
3. **MODERACIÓN:** sustituye `PON_AQUI_UID_MODERADOR` por el UID de Firebase Authentication de un moderador adulto responsable. La consola de Firebase > Authentication > Usuarios muestra el UID. No lo confundas con la API key web. El UID del moderador no es un secreto, pero sus credenciales sí.
4. Pega **todo el contenido original del archivo `firestore-v4.rules` sin traducción automática** y publícalo. No publiques reglas abiertas como `allow read, write: if true`.
5. El moderador inicia sesión en CONNECT desde el mismo dominio y abre `moderation-v4.html` para revisar proyectos pendientes.
6. Los HTML de terceros se ejecutan solo en marcos `sandbox="allow-scripts"`, **sin `allow-same-origin`**, con CSP y con revisión antes de aparecer públicamente. Esto disminuye riesgos pero no garantiza aislamiento perfecto. No admitas enlaces sospechosos ni contenido no autorizado.

## Parte C. Activar mercado mundial verificado (requiere backend)

**NO está activado por subir el ZIP a GitHub.** Las Functions deben desplegarse en el proyecto Firebase `ivanguys-web-5e4f6` usando Firebase CLI o un despliegue autorizado. Suele requerir que un adulto revise y active la facturación Blaze y los límites de gasto antes del despliegue. No actives la facturación sin comprender los costes.

El código está en `functions/`. `firebase.json` y `.firebaserc` identifican el proyecto. Tras revisar código, cuotas y reglas en un entorno de pruebas, un administrador con permisos puede usar:

```bash
npm install -g firebase-tools
firebase login
firebase use ivanguys-web-5e4f6
cd functions
npm install
cd ..
firebase deploy --only functions:nexus,firestore:rules
```

Estas instrucciones NO se ejecutan automáticamente en GitHub Pages ni necesitan pegar credenciales secretas en archivos públicos. Para uso profesional hay que realizar pruebas de integración con emuladores y cuentas de prueba antes del despliegue.

Funciones del backend programadas:
- `nexusGetState`: leer el saldo, inventario y anuncios globales.
- `nexusClaimMission`: conceder recompensas una vez (o diariamente) cuando el servidor puede comprobar la condición.
- `nexusBuyCosmetic`: comprar un objeto conocido con puntos sin azar.
- `nexusOpenCapsule`: cambiar una cápsula gratuita por un cosmético **elegido**.
- `nexusListItem`: publicar un objeto realmente poseído.
- `nexusCancelListing`: devolver el objeto de un anuncio cancelado.
- `nexusBuyListing`: transferir objeto y puntos entre comprador y vendedor mediante una sola transacción.

No existe dinero real, retirada de saldo, apuestas, compras aleatorias ni probabilidades ocultas.

## Proton

En esta versión puedes utilizar una dirección `@proton.me` o `@protonmail.com` en el registro por correo y contraseña de Firebase. **Eso no es iniciar sesión mediante la identidad de Proton**. No se ha implementado un botón `Iniciar sesión con Proton`: hace falta que Proton ofrezca una integración oficial para terceros y configurarla de forma segura.

## Anti-bugs y anti-cheat

Hay cinco capas implementadas o preparadas para los módulos principales: (1) validación, (2) límites de estado, (3) idempotencia, (4) autorización/transacciones en servidor cuando se activa, (5) errores/registro y recuperación. No equivale a 5 sistemas independientes por cada una de las 500 ideas ni a una IA anti-cheat entrenada.

No hay sistema anti-cheat de IA entrenado ni detección infalible. Para lanzarlo harían falta telemetría consentida y mínima, señales verificadas en servidor, modelo probado con falsos positivos, revisión humana y controles adecuados a usuarios menores de edad. El motor de puntuación de ARENA es local y NO alimenta el saldo mundial; así se evita confiar en resultados inventados desde el navegador.

## Avisos

- La publicación de juegos HTML requiere una política de contenidos, moderación real y un responsable que revise permisos, edad de los usuarios y condiciones de Firebase.
- Las mejoras restantes de las 500 son un plan de desarrollo, no parte funcional de este ZIP.
- Ninguna puntuación local ni captura de pantalla acredita un funcionamiento real entre dos cuentas.
- El mercado global no debe anunciarse como operativo hasta desplegar Cloud Functions, las reglas de Firestore y realizar pruebas end-to-end.
