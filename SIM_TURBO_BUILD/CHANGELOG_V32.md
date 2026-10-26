# AETHER V32 — REPARACIÓN DEL BOTÓN «CONECTAR Y MEDIR» EN ANDROID

## Problema confirmado en las fuentes V31
- El botón enviaba telemetría en UDP 45721 y mostraba "Mediciones enviadas" sin que el PC devolviese confirmación.
- Los errores aparecían al fondo, debajo de "LECTURAS DEL MÓVIL", dando la impresión de un botón que no hacía nada.
- Un firewall de Windows, un código antiguo o un receptor no iniciado podían provocar pérdida silenciosa.
- Cuando Android se minimiza, la actividad se detiene; el enlace de telemetría no es un servicio en segundo plano.

## Corregido en V32
- Nuevo paquete de comprobación STPC32 con identificador aleatorio y valores acotados; no usa Internet ni datos móviles.
- PC sólo reconoce el emparejamiento con código actual de 10 dígitos hexadecimales y origen de red IPv4 privada.
- Respuesta UDP de vuelta al móvil con identificador y firma HMAC-SHA256 vinculada al código actual. El móvil verifica el origen, el identificador y la firma ANTES de informar "CONECTADO".
- Plazo de espera de 1,75 segundos, dos intentos y error visible (IP, wifi, firewall UDP 45721, código y V32 del PC).
- Mensajes junto al botón, botón bloqueado temporalmente mientras se comprueba, sin indicar conexión antes de confirmar.
- Después de conectar, las muestras periódicas vuelven a confirmar que el receptor responde; informa fallos si el enlace cae.
- Se conserva recepción de muestras antiguas STPC2 en el PC, sin respuesta firmada para versiones viejas.
- No añade una excepción automática de firewall, no ejecuta comandos remotos, no comunica tokens con Cloudflare.
- Windows muestra fallo claro si el puerto UDP 45721 no puede abrirse.

## Instalación importante
Instalar V32 tanto en PC COMO en Android: un Android V32 no puede recibir una confirmación de un PC V31.
AVISO: el APK de Android es una compilación de desarrollo firmada con clave debug variable. Puede NO poderse actualizar encima de la versión anterior. **Antes de cualquier desinstalación, exporta tus perfiles y diseños desde V22/V31**; desinstalar Android elimina los datos locales. No prometemos actualización in situ con firma distinta.

## Limitaciones y pruebas
- Es posible que Windows Firewall o el aislamiento de clientes Wi-Fi del router impida UDP 45721; la app informará. No cambia el firewall.
- El puerto 45728 corresponde a la detección de PC para mando, es distinto y requiere abrir MANDO ANDROID en el PC.
- La conexión de telemetría se detiene al pasar Android a segundo plano; no se ha implementado un servicio de primer plano persistente.
- Los tests automatizados validan que los programas compilen y los mensajes firmados/incorrectos; no simulan los dos dispositivos sobre un router real.
- Se conserva Windows V4-V31, Wi-Fi 16 muestras, IA gráfica V31 y Android perfiles/copia de seguridad.
