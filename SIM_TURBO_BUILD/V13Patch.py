# AETHER V13: bounded speed/jitter measurements and Android read-only network report.
# Apply after V12Patch.py from extracted project root.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
def replace(path,old,new,label):
    content=path.read_text(encoding="utf-8-sig")
    n=content.count(old)
    if n!=1:raise SystemExit("V13 anchor invalid: "+label+" count="+str(n))
    path.write_text(content.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")
pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    replace(clinic,'var image=Tab(tabs,"IMAGEN / 4K");',
            'var image=Tab(tabs,"IMAGEN / 4K");\n      var lab=Tab(tabs,"RED MEDIBLE V13");',"new Windows tab")
    replace(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
            '''      Desc(lab,"Mediciones voluntarias: router, Internet, jitter y 3 descargas HTTP de 5 MiB. No cambia la configuración del sistema.",18);
      B(lab,"ABRIR LABORATORIO DE RED V13",16,99,1010,()=>new AetherNetworkLabV13().ShowDialog(this));
      Desc(lab,"Para comparar 60 con 120–150 Mb/s, mide Wi-Fi y Ethernet, verifica la tarifa y utiliza la misma prueba en ambos.",190);
      Desc(lab,"No promete duplicar tu velocidad: los resultados son mediciones puntuales con límite de datos y cancelación.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',"new Windows lab controls")
    replace(clinic,'AETHER SYSTEM CLINIC  V12','AETHER SYSTEM CLINIC  V13',"Windows header")
    replace(clinic,'SIM TURBO PC ULTRA V11 · AETHER SYSTEM CLINIC',
            'SIM TURBO PC ULTRA V13 · AETHER SYSTEM CLINIC',"Windows title")
    shutil.copy2(BASE/"V13_NetworkLab.cs",pc/"V13_NetworkLab.cs")
    main=pc/"SIM_TURBO_PC.cs"
    s=main.read_text(encoding="utf-8-sig")
    if 'AETHER CLINIC V12' in s:
        main.write_text(s.replace('AETHER CLINIC V12','AETHER CLINIC V13'),encoding="utf-8-sig")
android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    shutil.copy2(BASE/"V13_NetworkQuality.java",java/"NetworkQuality.java")
    main=java/"MainActivity.java"
    anchor='        v12Info=text("Todo queda local. Abre el receptor V12 en Windows para detectar PC. "+'
    section='''        Button networkV13=new Button(this);
        networkV13.setAllCaps(false);
        networkV13.setText("V13 · INFORME DE RED MÓVIL (SIN DESCARGAS)");
        aetherCard.addView(networkV13,new LinearLayout.LayoutParams(-1,dp(47)));
        networkV13.setOnClickListener(v->{
            try{v12Info.setText(NetworkQuality.report(this));}
            catch(Exception ex){v12Info.setText("Diagnóstico no disponible: "+ex.getMessage());}
        });
'''
    replace(main,anchor,section+anchor,"Android read-only report")
    gradle=android/"app/build.gradle"
    replace(gradle,"versionCode 12","versionCode 13","Android versionCode")
    replace(gradle,"versionName '12.0'","versionName '13.0'","Android versionName")
print("AETHER V13 patch applied: Windows network lab + Android network quality.")
