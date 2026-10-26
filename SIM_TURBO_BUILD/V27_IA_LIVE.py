#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""AETHER V27: real trained FSRCNN x2 on LIVE screen frames, never changes Windows resolution.

Modes:
  RAPIDO: capture 1080p => scale to 540p => neural x2 => native 1080p
  IA_4K:  capture 1080p => neural x2 to virtual 4K => resample to panel 1080p
  FOCO:    capture ONLY central 640x360 pixels => FSRCNN x2 => 1280x720 PREVIEW
  FOCO_RAPIDO: capture ONLY central 480x270 => FSRCNN x2 => 960x540 PREVIEW
  FOCO_TURBO: capture ONLY central 320x180 => FSRCNN x2 => 640x360 PREVIEW
  FOCO_AUTO: adaptive central 320x180 / 480x270 / 640x360, CPU-time driven PREVIEW

Focus modes deliberately do NOT cover the whole desktop or produce 4K. They avoid
capturing 1080p and significantly reduce CPU inference workload, with lower
resolution/coverage than full-screen modes. They are preview-only.

Both are AI-processed video, neither displays 4K native pixels on a 1080p panel.
Optional fullscreen click-through overlay is experimental and requires
WDA_EXCLUDEFROMCAPTURE; otherwise preview-only. No game DLL injection.
Captured frames are processed in RAM only; no uploads, recordings or screenshots.
"""
from __future__ import annotations
import argparse
import ctypes
import os
from pathlib import Path
import queue
import sys
import threading
import time

SCALE = 2
WDA_EXCLUDEFROMCAPTURE = 0x00000011
GWL_EXSTYLE = -20
WS_EX_TRANSPARENT = 0x00000020
WS_EX_LAYERED = 0x00080000
FOCUS_LEVELS = ((320,180),(480,270),(640,360))

def next_focus_level(level, inference_ms):
    """Deterministic hysteresis; only inference cost (not game FPS) is considered."""
    if not 0 <= level < len(FOCUS_LEVELS):
        raise ValueError('Invalid focus level')
    if inference_ms > 125 and level > 0:
        return level - 1
    if inference_ms < 65 and level < len(FOCUS_LEVELS)-1:
        return level + 1
    return level


def model_path() -> Path:
    # PyInstaller extracts bundled FSRCNN model to sys._MEIPASS.
    packed = getattr(sys, "_MEIPASS", None)
    if packed:
        return Path(packed) / "FSRCNN_x2.pb"
    return Path(__file__).resolve().parent / "FSRCNN_x2.pb"

def dependencies():
    try:
        import cv2
        import numpy as np
    except ImportError as exc:
        raise RuntimeError("Faltan OpenCV Contrib y NumPy.") from exc
    if not hasattr(cv2, "dnn_superres"):
        raise RuntimeError("OpenCV no tiene módulo dnn_superres (requiere Contrib).")
    return cv2, np

def create_engine(cv2):
    weights = model_path()
    if not weights.is_file() or weights.stat().st_size != 38973:
        raise RuntimeError("Modelo neuronal FSRCNN x2 ausente o incompleto.")
    model = cv2.dnn_superres.DnnSuperResImpl_create()
    model.readModel(str(weights))
    model.setModel("fsrcnn", 2)
    cv2.setNumThreads(min(4, max(1, os.cpu_count() or 1)))
    return model

def process_frame(bgr, engine, cv2, preset: str, np):
    """Pure, verifiable neural pipeline. Returns panel-size image (never changes display mode)."""
    if bgr is None or bgr.ndim != 3 or bgr.shape[2] != 3 or bgr.dtype != np.uint8:
        raise ValueError("BGR uint8 color frame required")
    h, w = bgr.shape[:2]
    if not 16 <= w <= 4096 or not 16 <= h <= 2160:
        raise ValueError("Frame dimensions unsupported")
    if preset == "RAPIDO":
        source = cv2.resize(bgr, (max(8, w//2), max(8, h//2)), interpolation=cv2.INTER_AREA)
    elif preset == "IA_4K":
        source = bgr
    else:
        raise ValueError("Preset unknown")
    neural = engine.upsample(source)  # trained CNN, not sharpening or bicubic
    assert neural.shape[0] == source.shape[0]*2 and neural.shape[1] == source.shape[1]*2
    if neural.shape[:2] != (h,w):
        neural = cv2.resize(neural, (w,h), interpolation=cv2.INTER_AREA)
    return neural

def process_focus_frame(bgr, engine, cv2, np, preset):
    """Real neural x2 on a small screen crop, preserving native input dimensions.
    Returns a PREVIEW of the central crop only, not a whole-screen enhanced image.
    """
    if bgr is None or bgr.ndim != 3 or bgr.shape[2] != 3 or bgr.dtype != np.uint8:
        raise ValueError("BGR uint8 color frame required")
    if preset not in ("FOCO", "FOCO_RAPIDO", "FOCO_TURBO", "FOCO_AUTO"):
        raise ValueError("Focus preset unknown")
    width, height = {"FOCO":(640,360),"FOCO_RAPIDO":(480,270),
                     "FOCO_TURBO":(320,180),"FOCO_AUTO":(640,360)}[preset]
    h, w = bgr.shape[:2]
    if w < 16 or h < 16:
        raise ValueError("Capture too small")
    cw, ch = min(w, width), min(h, height)
    x, y = (w-cw)//2, (h-ch)//2
    crop = bgr[y:y+ch, x:x+cw].copy()
    output = engine.upsample(crop)
    assert output.shape == (ch*2, cw*2, 3)
    return output

def process_pipeline(bgr, engine, cv2, preset, np):
    if preset in ("FOCO", "FOCO_RAPIDO", "FOCO_TURBO", "FOCO_AUTO"):
        return process_focus_frame(bgr, engine, cv2, np, preset)
    return process_frame(bgr, engine, cv2, preset, np)

def capture_region(mon, preset, focus_level=1):
    """For focus modes, mss captures the central crop directly, avoiding full 1080p copy."""
    if preset not in ("FOCO", "FOCO_RAPIDO", "FOCO_TURBO", "FOCO_AUTO"):
        return mon
    width, height = {"FOCO":(640,360),"FOCO_RAPIDO":(480,270),
                     "FOCO_TURBO":(320,180),
                     "FOCO_AUTO":FOCUS_LEVELS[focus_level]}[preset]
    cw, ch = min(mon["width"], width), min(mon["height"], height)
    return {"left": mon["left"] + (mon["width"]-cw)//2,
            "top": mon["top"] + (mon["height"]-ch)//2,
            "width": cw, "height": ch}

def self_test():
    cv2, np = dependencies()
    model = create_engine(cv2)
    yy, xx = np.mgrid[:72,:128]
    source=np.empty((72,128,3), dtype=np.uint8)
    source[:,:,0]=(xx*3+yy)%256
    source[:,:,1]=(xx*7+yy*5)%256
    source[:,:,2]=(((xx//12+yy//12)%2)*255)
    results=[]
    for preset in ("RAPIDO","IA_4K"):
        start=time.perf_counter()
        processed=process_frame(source,model,cv2,preset,np)
        assert processed.shape==(72,128,3)
        delta=float(np.abs(processed.astype(np.float32)-source.astype(np.float32)).mean())
        assert delta>.05, "CNN pipeline inactive"
        results.append((preset,round((time.perf_counter()-start)*1000,1),round(delta,2)))
    full=np.empty((720,1280,3),dtype=np.uint8)
    full[:,:,0]=np.arange(1280,dtype=np.uint16)[None,:]%256
    full[:,:,1]=np.arange(720,dtype=np.uint16)[:,None]%256
    full[:,:,2]=128
    for preset, expected_size in (("FOCO",(640,360)),("FOCO_RAPIDO",(480,270)),
                                  ("FOCO_TURBO",(320,180)),("FOCO_AUTO",(480,270))):
        region=capture_region({"left":0,"top":0,"width":1280,"height":720},preset)
        assert (region["width"],region["height"])==expected_size
        cropped=full[region["top"]:region["top"]+region["height"],
                     region["left"]:region["left"]+region["width"]].copy()
        processed=process_pipeline(cropped,model,cv2,preset,np)
        assert processed.shape==(expected_size[1]*2,expected_size[0]*2,3)
        assert not np.array_equal(processed[:8,:8],cropped[:8,:8]), "CNN inactive"
        negative=capture_region({"left":-1920,"top":0,"width":1920,"height":1080},preset)
        assert negative["left"]>=-1920 and negative["left"]+negative["width"]<=0
        print("FOCO",preset,"captura",region["width"],"x",region["height"],
              "-> salida",processed.shape[1],"x",processed.shape[0])
    for level,(width,height) in enumerate(FOCUS_LEVELS):
        region=capture_region({"left":0,"top":0,"width":1280,"height":720},"FOCO_AUTO",level)
        assert (region["width"],region["height"])==(width,height)
        cropped=full[region["top"]:region["top"]+height,region["left"]:region["left"]+width].copy()
        processed=process_pipeline(cropped,model,cv2,"FOCO_AUTO",np)
        assert processed.shape==(height*2,width*2,3),("auto level",level)
    assert next_focus_level(2,140)==1
    assert next_focus_level(1,140)==0
    assert next_focus_level(0,140)==0
    assert next_focus_level(0,50)==1
    assert next_focus_level(1,50)==2
    assert next_focus_level(2,50)==2
    assert next_focus_level(1,95)==1
    print("AETHER V27: 6 rutas FSRCNN x2 probadas; FOCO AUTO con histéresis de tiempo de IA.")
    for mode,ms,delta in results:
        print("MODO",mode,ms,"ms en fotograma 128x72. Diferencia visual MAE",delta)
    print("No se prueba FPS en CS2/Valorant/Roblox ni overlay real en entorno sin pantalla.")
    return 0

def exclude_from_capture(win) -> bool:
    try:
        user32=ctypes.windll.user32
        hwnd=win.winfo_id()
        return bool(user32.SetWindowDisplayAffinity(ctypes.c_void_p(hwnd), WDA_EXCLUDEFROMCAPTURE))
    except Exception:
        return False

class Live:
    def __init__(self, preset, overlay):
        if sys.platform!="win32":
            raise RuntimeError("El modo en directo exige Windows 10/11.")
        try:
            import mss
            from PIL import Image, ImageTk
            import tkinter as tk
            from tkinter import ttk
        except ImportError as e:
            raise RuntimeError("Faltan dependencias de captura o ventana.") from e
        self.mss=mss;self.Image=Image;self.ImageTk=ImageTk
        self.cv2,self.np=dependencies()
        self.engine=create_engine(self.cv2)
        self.tk=tk
        self.preset=preset
        self.working=False
        self.queue=queue.Queue(maxsize=1)
        self.fps=0.0
        self.dropped=0
        self.frames=0
        self.capture_ms=0.0
        self.infer_ms=0.0
        self.latency_ms=0.0
        self.last_error=None
        self.target_fps={"RAPIDO":8.0,"IA_4K":4.0,"FOCO":12.0,"FOCO_RAPIDO":18.0,"FOCO_TURBO":24.0,"FOCO_AUTO":18.0}[preset]
        self.focus_level=1
        self.focus_samples=[]
        self.last_focus_change=0.0
        self.capture_size="pendiente"
        self.root=tk.Tk()
        self.root.title("AETHER V27 · IA de imagen en directo")
        self.root.geometry("760x410")
        self.root.configure(bg="#0d2033")
        self.root.protocol("WM_DELETE_WINDOW",self.close)
        tk.Label(self.root,text="AETHER IA · MEJORA EN DIRECTO",
           bg="#0d2033",fg="#42dfcb",font=("Segoe UI",16,"bold")).pack(pady=(14,8))
        tk.Label(self.root,text="La pantalla sigue en 1080p. El modo IA_4K calcula 4K virtual y lo\n"+
             "reduce a los píxeles físicos. No garantiza mejor calidad ni FPS de juego.\n"+
             "No modifica la resolución de Windows, los drivers ni los videojuegos.",
             justify="center",bg="#0d2033",fg="#e1f2f3").pack(pady=4)
        bar=tk.Frame(self.root,bg="#0d2033");bar.pack(pady=10)
        self.start_button=tk.Button(bar,text="INICIAR IA EN DIRECTO",command=self.start,
              bg="#33bdb5",fg="#06151e",font=("Segoe UI",10,"bold"),padx=12)
        self.start_button.pack(side="left",padx=7)
        tk.Button(bar,text="DETENER",command=self.stop,
              bg="#d55d6d",fg="#ffffff",padx=15).pack(side="left",padx=7)
        self.status=tk.StringVar(value="Sin captura. Todos los fotogramas se procesan localmente.")
        tk.Label(self.root,textvariable=self.status,justify="center",wraplength=630,
              bg="#0d2033",fg="#8cf2ce").pack(pady=8)
        tk.Label(self.root,text="FPS = procesamiento de AETHER, NO FPS del juego. La IA puede aumentar la latencia.",
              bg="#0d2033",fg="#d6d6df").pack(pady=3)
        self.overlay_requested=overlay
        if overlay and preset.startswith("FOCO"):
            raise RuntimeError("FOCO solo se ofrece como vista previa, no como filtro global.")
        self.overlay=None
        self.preview=None
        self.image=None
        self.thread=None
        self.root.after(80,self.update)
    def _make_output(self):
        # Two supported forms: overlay requires exclusion from screen capture.
        # Preview always available and does not attempt to hide the target game.
        self.overlay=self.tk.Toplevel(self.root)
        self.overlay.configure(bg="black")
        self.overlay.attributes("-topmost",True)
        self.overlay.protocol("WM_DELETE_WINDOW",self.stop)
        self.preview=self.tk.Label(self.overlay, bg="black")
        self.preview.pack(fill="both",expand=True)
        if not self.overlay_requested:
            self.overlay.title("AETHER · VISTA PREVIA IA EN DIRECTO (no reemplaza el juego)")
            self.overlay.geometry("1000x600+40+50")
            self.overlay.update_idletasks()
            if not exclude_from_capture(self.overlay):
                self.status.set("AVISO: vista previa no excluida de captura; puede aparecer efecto espejo.")
            return
        self.overlay.title("AETHER · FILTRO IA EN DIRECTO (EXPERIMENTAL)")
        self.overlay.overrideredirect(True)
        self.overlay.attributes("-fullscreen",True)
        self.overlay.update()
        if not exclude_from_capture(self.overlay):
            self.overlay.destroy();self.overlay=None;self.preview=None
            raise RuntimeError("Windows no admite EXCLUIR overlay de la captura. Usa modo VISTA PREVIA.")
        # Click-through: avoid intercepting in-game mouse and keyboard input.
        user32=ctypes.windll.user32
        hwnd=self.overlay.winfo_id()
        get_style=user32.GetWindowLongW
        set_style=user32.SetWindowLongW
        style=get_style(hwnd,GWL_EXSTYLE)
        set_style(hwnd,GWL_EXSTYLE,style|WS_EX_TRANSPARENT|WS_EX_LAYERED)
        self.root.lift()
    def start(self):
        if self.working:return
        try:self._make_output()
        except Exception as exc:
            self.status.set("No se puede activar overlay: "+str(exc))
            return
        self.last_error=None
        self.frames=0
        self.dropped=0
        self.fps=0.0
        self.working=True
        self.start_button.config(state="disabled")
        self.thread=threading.Thread(target=self._worker,daemon=True)
        self.thread.start()
    def _worker(self):
        try:
            with self.mss.mss() as sct:
                # Select the monitor containing Windows desktop origin (primary).
                mon=next((m for m in sct.monitors[1:]
                    if m["left"]<=0<m["left"]+m["width"]
                    and m["top"]<=0<m["top"]+m["height"]),sct.monitors[1])
                w=mon["width"];h=mon["height"]
                if w>4096 or h>2160:
                    raise RuntimeError("Monitor supera límites de captura V26.")
                capture=capture_region(mon,self.preset,self.focus_level)
                self.capture_size=str(capture["width"])+"x"+str(capture["height"])
                t_prev=time.perf_counter()
                while self.working:
                    cycle=time.perf_counter()
                    if self.preset=="FOCO_AUTO":
                        capture=capture_region(mon,self.preset,self.focus_level)
                        self.capture_size=str(capture["width"])+"x"+str(capture["height"])
                    # Screen read from mss, no system changes or game injection.
                    raw=self.np.asarray(sct.grab(capture),dtype=self.np.uint8)
                    bgr=raw[:,:,:3].copy()
                    captured=time.perf_counter()
                    result=process_pipeline(bgr,self.engine,self.cv2,self.preset,self.np)
                    processed=time.perf_counter()
                    if not self.working:break
                    dt=max(.0001,processed-t_prev);t_prev=processed
                    # Pipeline FPS is NOT game FPS.
                    fps=1.0/dt
                    self.fps=fps if not self.fps else self.fps*.75+fps*.25
                    self.capture_ms=(captured-cycle)*1000
                    self.infer_ms=(processed-captured)*1000
                    if self.preset=="FOCO_AUTO":
                        self.focus_samples.append(self.infer_ms)
                        if len(self.focus_samples)>=8 and processed-self.last_focus_change>=2.0:
                            mean_ms=sum(self.focus_samples)/len(self.focus_samples)
                            self.focus_samples.clear()
                            new_level=next_focus_level(self.focus_level,mean_ms)
                            if new_level!=self.focus_level:
                                self.focus_level=new_level
                                self.last_focus_change=processed
                    self.latency_ms=(processed-cycle)*1000
                    self.frames+=1
                    if self.queue.full():
                        try:self.queue.get_nowait();self.dropped+=1
                        except queue.Empty:pass
                    try:self.queue.put_nowait(result)
                    except queue.Full:self.dropped+=1
                    wait=1.0/self.target_fps-(time.perf_counter()-cycle)
                    if wait>0:time.sleep(wait)
        except Exception as exc:
            # Tkinter is not thread-safe; update error on GUI thread.
            self.last_error=str(exc)
            self.working=False
    def update(self):
        try:
            if self.preview is not None and self.preview.winfo_exists():
                frame=None
                while True:
                    try:frame=self.queue.get_nowait()
                    except queue.Empty:break
                if frame is not None:
                    target_w=self.preview.winfo_width()
                    target_h=self.preview.winfo_height()
                    if 10<target_w<8193 and 10<target_h<8193:
                        rgb=self.cv2.cvtColor(frame,self.cv2.COLOR_BGR2RGB)
                        obj=self.Image.fromarray(rgb)
                        obj=obj.resize((target_w,target_h),self.Image.Resampling.BILINEAR)
                        self.image=self.ImageTk.PhotoImage(obj)
                        self.preview.configure(image=self.image)
                    self.status.set(
                      f"IA FSRCNN x2 · {self.fps:.1f} FPS de AETHER (NO del juego) · "
                      f"captura {self.capture_ms:.0f} ms · IA {self.infer_ms:.0f} ms · "
                      f"total {self.latency_ms:.0f} ms · descartados {self.dropped}\n"
                      f"Modo {self.preset} · captura {self.capture_size} · salida IA {frame.shape[1]}x{frame.shape[0]}\n"
                      f"{'SOLO RECORTE CENTRAL, NO TODA LA PANTALLA' if self.preset.startswith('FOCO') else 'RESOLUCIÓN WINDOWS SIN CAMBIOS'}."
                    )
            if self.last_error is not None:
                self.status.set("Error de captura/IA: "+self.last_error)
                self.last_error=None
                self.start_button.config(state="normal")
        except Exception as e:
            self.status.set("Vista previa: "+str(e))
        self.root.after(70,self.update)
    def stop(self):
        self.working=False
        self.start_button.config(state="normal")
        self.status.set("Filtro IA detenido. No se han cambiado resoluciones ni controladores.")
        if self.overlay is not None:
            try:self.overlay.destroy()
            except Exception:pass
        self.overlay=None;self.preview=None;self.image=None
        while not self.queue.empty():
            try:self.queue.get_nowait()
            except queue.Empty:break
    def close(self):
        self.stop()
        self.root.destroy()
    def run(self):
        self.root.mainloop()

def benchmark(preset):
    cv2,np=dependencies()
    model=create_engine(cv2)
    # Synthetic 1080p; no screen capture and no game FPS claim.
    xx=np.arange(1920,dtype=np.uint16)[None,:]
    yy=np.arange(1080,dtype=np.uint16)[:,None]
    frame=np.empty((1080,1920,3),dtype=np.uint8)
    frame[:,:,0]=(xx+yy)%256
    frame[:,:,1]=(2*xx+yy)%256
    frame[:,:,2]=(xx+3*yy)%256
    t=time.perf_counter()
    region=capture_region({"left":0,"top":0,"width":1920,"height":1080},preset)
    if preset.startswith("FOCO"):
        frame=frame[region["top"]:region["top"]+region["height"],
                    region["left"]:region["left"]+region["width"]].copy()
    out=process_pipeline(frame,model,cv2,preset,np)
    ms=(time.perf_counter()-t)*1000
    if preset.startswith("FOCO"):
        assert out.shape==(frame.shape[0]*2,frame.shape[1]*2,3)
    else:
        assert out.shape==frame.shape
    print(f"AETHER V27: {preset}, captura {frame.shape[1]}x{frame.shape[0]}, salida {out.shape[1]}x{out.shape[0]}, FSRCNN {ms:.1f} ms/frame, techo teorico {1000/max(ms,1):.2f} FPS de IA (NO de juego).")
    print("Benchmark CPU sintetico: no mide captura, overlay, compositor, latencia de pantalla ni juegos.")
    return 0

def main():
    p=argparse.ArgumentParser(description="AETHER IA V27 - mejora neural de fotogramas en directo, monitor 1080p intacto.")
    p.add_argument("--mode",choices=["RAPIDO","IA_4K","FOCO","FOCO_RAPIDO","FOCO_TURBO","FOCO_AUTO"],default="RAPIDO")
    p.add_argument("--overlay",action="store_true",help="Experimental: overlay fullscreen, sin modificar resolución")
    p.add_argument("--self-test",action="store_true",help="Test de inferencia CNN sin captura")
    p.add_argument("--benchmark",action="store_true",help="Benchmark CPU 1080p de un fotograma, NO FPS de juegos")
    a=p.parse_args()
    if a.self_test:return self_test()
    if a.benchmark:return benchmark(a.mode)
    Live(a.mode,a.overlay).run()
    return 0

if __name__=="__main__":
    try:sys.exit(main())
    except Exception as exc:
        print("AETHER V27 ERROR: "+str(exc),file=sys.stderr)
        sys.exit(1)
