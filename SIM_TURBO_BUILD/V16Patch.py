# AETHER V16: evidence-based A/B network + FPS experiment notebook on Windows,
# and local per-game device adviser on Android. Apply AFTER V15Patch.py.
from pathlib import Path
import shutil

BASE=Path(__file__).resolve().parent
def change(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    count=s.count(old)
    if count!=1:
        raise SystemExit("V16 patch anchor "+label+" count="+str(count))
    path.write_text(s.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var performance=Tab(tabs,"RENDIMIENTO V15");',
           'var performance=Tab(tabs,"RENDIMIENTO V15");\n      var experiment=Tab(tabs,"PRUEBAS A/B V16");',
           "Windows experiment tab")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
           '''      Desc(experiment,"Compara tres medidas ANTES y DESPUÉS: descarga/subida/latencia, y FPS opcionales del mismo juego. Sin ajustes ocultos.",18);
      B(experiment,"ABRIR COMPARADOR DE RED Y FPS V16",16,99,1010,()=>new AetherExperimentLabV16().ShowDialog(this));
      Desc(experiment,"Calcula medianas, cambio porcentual y objetivo 120–150 Mb/s. Guarda CSV para repetir el experimento.",190);
      Desc(experiment,"Los FPS se introducen manualmente; no se simula una mejora de hardware ni se modifica Windows.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
           "Windows A/B controls")
    change(clinic,"AETHER SYSTEM CLINIC  V15","AETHER SYSTEM CLINIC  V16","Windows header")
    change(clinic,"SIM TURBO PC ULTRA V15 · AETHER SYSTEM CLINIC",
           "SIM TURBO PC ULTRA V16 · AETHER SYSTEM CLINIC","Windows title")
    shutil.copy2(BASE/"V16_ExperimentLab.cs",pc/"V16_ExperimentLab.cs")
    change(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V15","AETHER CLINIC V16",
           "Windows launcher")

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    main=java/"MainActivity.java"
    change(main,'        Button v15Rtt=new Button(this);',
           '''        Button v16Advisor=new Button(this);
        v16Advisor.setAllCaps(false);
        v16Advisor.setText("V16 · ANALIZAR MÓVIL Y PERFIL DEL JUEGO");
        aetherCard.addView(v16Advisor,new LinearLayout.LayoutParams(-1,dp(48)));
        v16Advisor.setOnClickListener(v->{
            try{
                String pkg=v12GamePackage.getText().toString().trim();
                v12Info.setText(DeviceAdvisorV16.report(this,pkg));
            }catch(Exception ex){
                v12Info.setText("Informe no disponible: "+ex.getMessage());
            }
        });
        Button v15Rtt=new Button(this);''',
           "Android adviser button")
    shutil.copy2(BASE/"V16_DeviceAdvisor.java",java/"DeviceAdvisorV16.java")
    gradle=android/"app/build.gradle"
    change(gradle,"versionCode 15","versionCode 16","Android versionCode")
    change(gradle,"versionName '15.0'","versionName '16.0'","Android versionName")

print("AETHER V16: A/B notebook for Windows and opt-in local Android device/game adviser integrated.")
