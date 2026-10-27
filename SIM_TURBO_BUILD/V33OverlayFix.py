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
p.write_text(s,encoding="utf-8")
print("V33: correccion de ventana sin cambiar resolucion Windows.")
