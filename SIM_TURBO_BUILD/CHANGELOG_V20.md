# AETHER V20 — 26/10/2026

## Windows
- Nueva pestaña **ESTABILIDAD V20** en AETHER System Clinic.
- Pruebas ICMP voluntarias y limitadas (12 muestras por destino; timeout 900 ms).
- Mediana, P95, pérdidas ICMP y variación absoluta media de RTT; exportación CSV.
- Router IPv4 detectado o destino externo 1.1.1.1; cancelación entre muestras.
- No modifica configuración, DNS, firewall, prioridades ni velocidad contratada.

## Android
- Al guardar un perfil de juego se conserva también el diseño de mando elegido.
- El botón «DETECTAR JUEGO Y CONFIGURAR MANDO» recupera ese diseño personalizado; si no existe, aplica la sugerencia de V19.
- Datos almacenados en SharedPreferences locales. No se modifica ningún juego externo.
- Servicio visible, permisos voluntarios, HMAC LAN y demás funciones anteriores conservadas.

## Pruebas
- 7 aserciones C# para mediana, percentil, jitter, pérdidas y ausencia de ICMP.
- 7 aserciones Java para validación de paquete y reglas de selección de diseño.
- Compilación de Windows y Android mediante GitHub Actions; hardware real pendiente.

## Límites
- Una pantalla 1080p no muestra 4K nativo; la interpolación V12 no es IA.
- No hay garantía de aumentar 60 Mb/s a 120–150 Mb/s ni 15–20 FPS a 100–120 FPS.
- Las 14 ubicaciones Cloudflare siguen sin VPS regionales desplegados.
