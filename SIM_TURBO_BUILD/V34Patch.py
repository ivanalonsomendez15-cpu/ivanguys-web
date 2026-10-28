# AETHER V34: native high-Hz review (no screen mirroring), Wi-Fi 24+24-ping quality.
# Applies after V32Patch.py and preserves Android V32.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir(): raise SystemExit("V34: no se encuentran las fuentes PC_Windows")
def change(path,old,new,name):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V34 anchor "+name+": "+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")

clinic=pc/"V11_SystemClinic.cs"
change(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V31");',
'''var liveAI=Tab(tabs,"IA REAL EN DIRECTO V31");
      var smooth34=Tab(tabs,"200 HZ / IMAGEN V34");
      var wifi34=Tab(tabs,"WI-FI V34 MEJORADO");''',"new tabs")
change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
'''      Desc(smooth34,"V34 prioriza fluidez: consulta la frecuencia REAL de Windows y los ajustes del driver SIN capturar la pantalla.",18);
      B(smooth34,"ABRIR PANEL 200 HZ / GPU V34",16,99,1010,
        ()=>new AetherSmoothDisplayV34().ShowDialog(this));
      Desc(smooth34,"No puede crear 4K nativo en pantalla 1080p ni garantizar 200-300 FPS. El overlay por CPU de V33 puede reducir la fluidez.",190);
      Desc(smooth34,"DLSS/FSR están disponibles según juego; DSR/DLDSR aumentan el trabajo de GPU. Prioriza medir FPS reales.",267);

      Desc(wifi34,"V34 añade NUEVA medición LAN vs WAN: 24 pings router + 24 Internet, p95, jitter y rachas.",18);
      B(wifi34,"ANALIZAR WI-FI Y LOCALIZAR EL CUELLO DE BOTELLA",16,99,1010,
        ()=>new AetherWifiBaselineWindowV34().ShowDialog(this));
      Desc(wifi34,"Informe exportable. Solo lectura: no cambia router, DNS, firewall ni configuración de la red.",190);
      Desc(wifi34,"Si el router falla pero Internet no, puede tratarse de ICMP filtrado; comparar velocidades con Ethernet y 5 GHz.",267);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',"add V34 button")
change(clinic,'AETHER SYSTEM CLINIC  V31','AETHER SYSTEM CLINIC  V34',"header")
change(clinic,'SIM TURBO PC ULTRA V31 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V34 · AETHER SYSTEM CLINIC',"title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V31','AETHER CLINIC V34',"main label")

live=pc/"V31_LiveAiWifi.cs"
change(live,
'Add("CLARIDAD GLOBAL FULL HD · ACTIVAR Y MINIMIZAR",20,624,858,54,()=>Run("CLARIDAD_1080",true,true));',
'Add("200 HZ SIN FILTRO LENTO · GUÍA NATIVA V34",20,624,858,54,()=>new AetherSmoothDisplayV34().ShowDialog(this));',
"replace misleading overlay button")
change(live,
'Add("FILTRO IA NEURONAL PANTALLA COMPLETA · EXPERIMENTAL",20,694,858,54,()=>Run("RAPIDO",true));',
'Add("DIAGNÓSTICO WI-FI AMPLIADO V34",20,694,858,54,()=>new AetherWifiBaselineWindowV34().ShowDialog(this));',
"remove second slow overlay")
for name in ("V34_WifiBaseline.cs","V34_SmoothDisplay.cs"):
    shutil.copy2(BASE/name,pc/name)
print("V34: added 200-Hz native review and LAN-WAN Wi-Fi quality; disabled slow fullscreen overlay buttons.")
