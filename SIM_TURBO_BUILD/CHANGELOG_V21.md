# AETHER V21 — IA 4K REAL, no bicúbica

## Lo implementado
- Red neuronal **FSRCNN ×2** entrenada, modelo TensorFlow `FSRCNN_x2.pb` incluido en el proyecto (38.973 bytes).
- Inferencia con OpenCV DNN / módulo `dnn_superres`, sin servidor externo.
- Foto **1920×1080 → archivo PNG 3840×2160**. Para otras dimensiones, salida al doble exacto, conservando proporciones.
- Procesado por bloques con solapamiento para reducir picos de memoria, y guardar en PNG.
- Aplicación Python con interfaz Tkinter, modo línea de comandos y pruebas automáticas con imagen sintética.
- Integración en Windows: en AETHER CLINIC aparece pestaña `IA 4K REAL V21`; la pestaña ejecuta el programa Python al convertir (dependencia instalada por el usuario).
- Conserva exportador clásico bicúbico V12, claramente identificado como NO IA.
- Conservar todas las funciones Windows V4–V20 y Android V20.

## Requisitos y uso en Windows (fuentes completas)
Instala Python 3.11/3.12 y ejecuta en PowerShell:

```powershell
py -m pip install opencv-contrib-python==4.11.0.86
py IA_SUPERRESOLUCION\AETHER_IA_4K.py
```

En modo CLI:

```powershell
py IA_SUPERRESOLUCION\AETHER_IA_4K.py --input foto_1080p.png --output foto_4k.png
```

Para integrar desde Visual Studio, compila PC_Windows y abre AETHER CLINIC > IA 4K REAL V21. El proyecto debe conservar la carpeta IA_SUPERRESOLUCION al ejecutarse.

## Pruebas
- `py IA_SUPERRESOLUCION\AETHER_IA_4K.py --self-test` aplica la CNN a una imagen sintética, verifica dimensiones y que el resultado difiere de interpolación bicúbica.
- Las compilaciones CI en GitHub deben comprobar Python y C# (estado verificable en Actions).

## Limitaciones
No es un DLSS global ni cambia juegos o vídeo en tiempo real. La IA aproxima detalles y puede crear artefactos; no recupera verdad absoluta de una imagen borrosa. Un monitor 1080p no enseña 4K nativo. Puede tardar y consume CPU; no se afirma aceleración GPU CUDA en el wheel estándar de OpenCV.

## Procedencia / licencia
Modelo entrenado de Saafke, `FSRCNN_Tensorflow`, bajo Apache License 2.0. Fuente: https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/models/FSRCNN_x2.pb
Licencia incluida en `IA_SUPERRESOLUCION/LICENSE_MODELO_APACHE_2.0.txt`.
