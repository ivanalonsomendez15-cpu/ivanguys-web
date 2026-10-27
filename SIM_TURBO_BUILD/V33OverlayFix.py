# V33: fix Tkinter illegal override-redirect/fullscreen combination.
# Applied to packaged AETHER_IA_DIRECTO.py after V32 source export.
from pathlib import Path
import sys
p=Path(sys.argv[1]) if len(sys.argv)>1 else Path("IA_SUPERRESOLUCION/AETHER_IA_DIRECTO.py")
s=p.read_text(encoding="utf-8")
bad='        self.overlay.attributes("-fullscreen",True)'
good='''        # Tk on Windows refuses fullscreen with overrideredirect.
        # Use explicit geometry to cover the actual primary display.
        sw=int(self.root.winfo_screenwidth())
        sh=int(self.root.winfo_screenheight())
        self.overlay.geometry(f"{sw}x{sh}+0+0")'''
if s.count(bad)!=1:raise SystemExit("V33 expected one fullscreen option, got "+str(s.count(bad)))
s=s.replace(bad,good)
if 'self.overlay.attributes("-fullscreen",True)' in s:
    raise SystemExit("V33 cannot combine fullscreen with overrideredirect")
# A Tk Toplevel's winfo_id is sometimes the CHILD hwnd on Windows.
# WDA needs the window manager's native top-level hwnd to succeed.
before='''def exclude_from_capture(win) -> bool:
    try:
        user32=ctypes.windll.user32
        hwnd=win.winfo_id()
        return bool(user32.SetWindowDisplayAffinity(ctypes.c_void_p(hwnd), WDA_EXCLUDEFROMCAPTURE))
    except Exception:
        return False'''
after='''def exclude_from_capture(win) -> bool:
    try:
        user32=ctypes.windll.user32
        user32.GetAncestor.argtypes=[ctypes.c_void_p,ctypes.c_uint]
        user32.GetAncestor.restype=ctypes.c_void_p
        widget_hwnd=int(win.winfo_id())
        top_hwnd=user32.GetAncestor(ctypes.c_void_p(widget_hwnd),2) or widget_hwnd
        user32.SetWindowDisplayAffinity.argtypes=[ctypes.c_void_p,ctypes.c_uint]
        user32.SetWindowDisplayAffinity.restype=ctypes.c_bool
        return bool(user32.SetWindowDisplayAffinity(ctypes.c_void_p(top_hwnd),WDA_EXCLUDEFROMCAPTURE))
    except Exception:
        return False'''
if s.count(before)!=1:raise SystemExit("V33 expected one native hwnd affinity method")
s=s.replace(before,after)
# Apply click-through to the outer native frame with correct 64-bit HWND.
old_style='''        hwnd=self.overlay.winfo_id()
        get_style=user32.GetWindowLongW
        set_style=user32.SetWindowLongW
        style=get_style(hwnd,GWL_EXSTYLE)
        set_style(hwnd,GWL_EXSTYLE,style|WS_EX_TRANSPARENT|WS_EX_LAYERED)'''
new_style='''        user32.GetAncestor.argtypes=[ctypes.c_void_p,ctypes.c_uint]
        user32.GetAncestor.restype=ctypes.c_void_p
        widget_hwnd=int(self.overlay.winfo_id())
        hwnd=user32.GetAncestor(ctypes.c_void_p(widget_hwnd),2) or widget_hwnd
        user32.GetWindowLongW.argtypes=[ctypes.c_void_p,ctypes.c_int]
        user32.GetWindowLongW.restype=ctypes.c_long
        user32.SetWindowLongW.argtypes=[ctypes.c_void_p,ctypes.c_int,ctypes.c_long]
        user32.SetWindowLongW.restype=ctypes.c_long
        style=user32.GetWindowLongW(ctypes.c_void_p(hwnd),GWL_EXSTYLE)
        user32.SetWindowLongW(ctypes.c_void_p(hwnd),GWL_EXSTYLE,
            style|WS_EX_TRANSPARENT|WS_EX_LAYERED)'''
if s.count(old_style)!=1:raise SystemExit("V33 style anchor not found")
s=s.replace(old_style,new_style)
p.write_text(s,encoding="utf-8")
print("V33: correccion de ventana sin cambiar resolucion Windows.")
