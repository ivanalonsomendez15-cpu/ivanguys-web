# NOCHEPOLAR — ampliación del código original de Santa Tracker

Esta carpeta contiene SOLO los añadidos y los adaptadores de alojamiento de NOCHEPOLAR.

**La web base no es una reconstrucción:** el flujo de compilación descarga
https://github.com/google/santa-tracker-web, conserva las escenas, sonidos,
gráficos y juegos que están en ese repositorio y aplica cambios específicos
para publicar bajo /ivanguys-web/nochepolar/.

- extra.js: portal de 55 aventuras únicas (1 de noviembre–25 de diciembre de 2026).
- extra.css: integración visual sobre la web original.
- build.py: transforma rutas para GitHub Pages, desactiva servicios de Google
  no apropiados para una adaptación independiente y coloca las nuevas actividades
  encima de las escenas originales.
- .github/workflows/nochepolar-oficial.yml: compila desde la fuente upstream y
  copia el sitio resultante a la carpeta pública nochepolar/.

La edición publicada por Google puede contener funciones más recientes que
NO figuran en su repositorio público. Este proyecto no se presenta como web
oficial de Google ni afirma reproducir cambios no publicados.

## Licencias y atribución

Google Santa Tracker: Copyright Google LLC.
Código bajo Apache License 2.0; recursos de imagen/audio bajo Creative
Commons Attribution (CC BY). Deben conservarse los créditos y la licencia.

Las actividades extra de NOCHEPOLAR son una ampliación independiente.
No forman parte de los juegos originales de Google.

## Advertencias conocidas

- No hay respaldo de servidor para impedir el cambio de reloj o de navegador.
  Por tanto, la irrepetibilidad es local a cada navegador.
- El recorrido extra del 24 de diciembre es una simulación de fantasía,
  no un seguimiento físico o datos de radar en tiempo real.
- Antes de anunciar la web como lista se debe comprobar la compilación de
  GitHub Actions y probarla de verdad en móvil y ordenador.
