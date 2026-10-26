#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""AETHER IA 4K V21: superresolución neuronal REAL FSRCNN ×2 (OpenCV DNN).
De 1920x1080 a 3840x2160 píxeles en un fichero PNG, NO 4K nativo de pantalla.
Requiere opencv-contrib-python y numpy; no usa red ni servicios de pago.
"""
from __future__ import annotations

import argparse
import os
import sys
import threading
from pathlib import Path

MODEL = Path(__file__).resolve().with_name("FSRCNN_x2.pb")
SCALE = 2
MAX_INPUT_PIXELS = 20_000_000


def dependencies():
    try:
        import cv2
        import numpy as np
    except ImportError as exc:
        raise RuntimeError(
            "Falta OpenCV Contrib/Numpy. Instala con: "
            "py -m pip install opencv-contrib-python==4.11.0.86"
        ) from exc
    if not hasattr(cv2, "dnn_superres"):
        raise RuntimeError(
            "Tu OpenCV carece de dnn_superres. Instala solo opencv-contrib-python "
            "(desinstala opencv-python si hay conflicto)."
        )
    return cv2, np


def load_engine(cv2):
    if not MODEL.is_file() or MODEL.stat().st_size != 38973:
        raise RuntimeError("Faltan los pesos reales FSRCNN_x2.pb (38973 bytes) del proyecto.")
    engine = cv2.dnn_superres.DnnSuperResImpl_create()
    engine.readModel(str(MODEL))
    engine.setModel("fsrcnn", 2)
    cv2.setNumThreads(min(4, max(1, os.cpu_count() or 1)))
    return engine


def neural_upscale(image, engine, np, tile=192, overlap=20):
    """Reales inferencias de red neuronal con solapamiento para limitar la RAM."""
    if image is None or image.ndim != 3 or image.shape[2] != 3:
        raise ValueError("Se requiere una imagen RGB/BGR de tres canales.")
    height, width = image.shape[:2]
    if not (8 <= height and 8 <= width) or width * height > MAX_INPUT_PIXELS:
        raise ValueError("La imagen es demasiado pequeña o supera el máximo de 20 MP.")
    if tile < 32 or overlap < 8 or overlap >= tile // 2:
        raise ValueError("Utiliza tile>=32 y 8<=overlap<tile/2.")
    result = np.empty((height * SCALE, width * SCALE, 3), dtype=np.uint8)
    for y in range(0, height, tile):
        y2 = min(y + tile, height)
        y0c = max(0, y - overlap)
        y1c = min(height, y2 + overlap)
        for x in range(0, width, tile):
            x2 = min(x + tile, width)
            x0c = max(0, x - overlap)
            x1c = min(width, x2 + overlap)
            sample = image[y0c:y1c, x0c:x1c, :]
            inferred = engine.upsample(sample)  # aquí ejecuta el modelo CNN entrenado
            if inferred.shape[:2] != ((y1c-y0c)*2, (x1c-x0c)*2):
                raise RuntimeError("Modelo devolvió dimensiones incorrectas.")
            iy0 = (y - y0c) * 2
            ix0 = (x - x0c) * 2
            result[y*2:y2*2, x*2:x2*2] = inferred[
                iy0:iy0+(y2-y)*2, ix0:ix0+(x2-x)*2
            ]
    return result


def convert(input_file, output_file, tile=192):
    cv2, np = dependencies()
    src = Path(input_file).expanduser().resolve()
    dst = Path(output_file).expanduser().resolve()
    if src == dst:
        raise ValueError("La salida debe ser distinta de la entrada.")
    if not src.is_file():
        raise FileNotFoundError("Imagen no encontrada: " + str(src))
    if src.stat().st_size > 90_000_000:
        raise ValueError("Archivo de entrada demasiado grande (>90 MB).")
    encoded = np.fromfile(str(src), dtype=np.uint8)
    image = cv2.imdecode(encoded, cv2.IMREAD_COLOR)
    if image is None:
        raise ValueError("No se puede leer la imagen. Usa PNG, JPG o BMP.")
    h, w = image.shape[:2]
    engine = load_engine(cv2)
    result = neural_upscale(image, engine, np, tile=tile)
    dst.parent.mkdir(parents=True, exist_ok=True)
    ok, bytes_png = cv2.imencode(".png", result)
    if not ok:
        raise RuntimeError("Error al codificar PNG.")
    bytes_png.tofile(str(dst))
    return f"ÉXITO: {w}×{h} -> {w*2}×{h*2} PNG · CNN FSRCNN x2 · {dst}"


def self_test():
    cv2, np = dependencies()
    engine = load_engine(cv2)
    # Imagen con bordes, gradientes y textura; verificamos inferencia real y tiling.
    h, w = 67, 83
    src = np.empty((h, w, 3), np.uint8)
    yy, xx = np.mgrid[:h, :w]
    src[:,:,0] = ((xx * 9 + yy * 3) % 256).astype(np.uint8)
    src[:,:,1] = ((xx * 2 + yy * 11) % 256).astype(np.uint8)
    src[:,:,2] = (((xx // 7 + yy // 5) % 2) * 255).astype(np.uint8)
    up = neural_upscale(src, engine, np, tile=36, overlap=12)
    assert up.shape == (134,166,3), up.shape
    bicubic = cv2.resize(src,(166,134),interpolation=cv2.INTER_CUBIC)
    mae = float(np.abs(up.astype(np.float32)-bicubic.astype(np.float32)).mean())
    assert mae > 0.05, "CNN no se diferencia de bicúbica (prueba fallida)"
    ok, data = cv2.imencode(".png", up)
    assert ok and len(data)>100
    decoded = cv2.imdecode(data, cv2.IMREAD_COLOR)
    assert decoded is not None and decoded.shape==up.shape
    assert (1920*SCALE,1080*SCALE)==(3840,2160)
    print(f"TEST CNN REAL: OK; 83x67 -> 166x134; diferencia de bicúbica MAE={mae:.3f}")
    print("Entrada 1920x1080 -> salida 3840x2160 conforme a escala x2.")
    return 0


def gui():
    import tkinter as tk
    from tkinter import filedialog, messagebox, ttk
    window = tk.Tk()
    window.title("AETHER IA 4K V21 · FSRCNN neuronal")
    window.geometry("740x390")
    window.configure(bg="#0b192c")
    header = tk.Label(window,text="AETHER · SUPERRESOLUCIÓN IA 4K",
                      bg="#0b192c",fg="#4ce5d3",font=("Segoe UI",18,"bold"))
    header.pack(padx=16,pady=(22,8))
    desc = tk.Label(window,
        text="Red neuronal FSRCNN ×2 REAL. Convierte imágenes 1080p en archivos PNG 4K.\n"
             "No añade píxeles físicos a un monitor 1080p ni escala juegos en tiempo real.\n"
             "Usa CPU; procesa por bloques para reducir memoria. Sin cuotas ni suscripción.",
        bg="#0b192c",fg="#d9edff",font=("Segoe UI",10),justify="center")
    desc.pack(pady=(6,18))
    state = tk.StringVar(value="Preparado: elige una imagen PNG/JPG/BMP.")
    label = tk.Label(window,textvariable=state,bg="#0b192c",fg="#5df3d8",
                     wraplength=700,justify="left",font=("Segoe UI",10))
    label.pack(padx=20,pady=8)
    progress=ttk.Progressbar(window,mode="indeterminate",length=480)
    progress.pack(pady=8)
    btn=tk.Button(window,text="SELECCIONAR IMAGEN Y CREAR 4K CON IA",
                  bg="#41d8c8",fg="#092133",font=("Segoe UI",12,"bold"),
                  padx=12,pady=8)
    btn.pack(pady=12)
    def select():
        inp=filedialog.askopenfilename(parent=window,title="Imagen de entrada",
             filetypes=[("Imágenes","*.png *.jpg *.jpeg *.bmp")])
        if not inp:return
        out=filedialog.asksaveasfilename(parent=window,title="Guardar 4K PNG",
             initialfile=Path(inp).stem+"_AETHER_IA_4K.png",defaultextension=".png",
             filetypes=[("PNG", "*.png")])
        if not out:return
        btn.config(state="disabled")
        state.set("Aplicando la CNN entrenada... En una foto 1080p puede tardar.")
        progress.start(9)
        def worker():
            try: message=convert(inp,out)
            except Exception as e: message="ERROR: "+str(e)
            def done():
                progress.stop()
                btn.config(state="normal")
                state.set(message)
                if message.startswith("ERROR:"):messagebox.showerror("AETHER IA",message)
                else:messagebox.showinfo("AETHER IA","Archivo 4K creado correctamente.")
            try:window.after(0,done)
            except RuntimeError:pass
        threading.Thread(target=worker,daemon=True).start()
    btn.config(command=select)
    window.mainloop()


def main(argv=None):
    p=argparse.ArgumentParser(description="AETHER IA V21: superresolución CNN FSRCNN x2, no interpolación.")
    p.add_argument("--input",help="Imagen de entrada PNG/JPG/BMP")
    p.add_argument("--output",help="Archivo de salida PNG")
    p.add_argument("--tile",type=int,default=192,help="Tamaño de bloque de entrada (por defecto 192)")
    p.add_argument("--self-test",action="store_true",help="Ejecutar prueba neuronal autónoma")
    args=p.parse_args(argv)
    if args.self_test:return self_test()
    if bool(args.input) != bool(args.output):
        p.error("--input y --output deben usarse juntos")
    if args.input:
        print(convert(args.input,args.output,tile=args.tile))
        return 0
    gui()
    return 0

if __name__=="__main__":
    try:sys.exit(main())
    except Exception as exc:
        print("AETHER ERROR:",exc,file=sys.stderr)
        sys.exit(1)
