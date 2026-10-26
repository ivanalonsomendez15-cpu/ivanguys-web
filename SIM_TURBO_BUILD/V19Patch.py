# AETHER V19: per-game Windows process sampler + opt-in Android gamepad auto layout.
# Apply after V18Patch.py. Existing V4-V18 sources and functionality are preserved.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
def change(path,old,new,label):
    content=path.read_text(encoding="utf-8-sig")
    n=content.count(old)
    if n!=1:raise SystemExit("V19 anchor "+label+" count="+str(n))
    path.write_text(content.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var storage=Tab(tabs,"DISCO E INICIO V18");',
           'var storage=Tab(tabs,"DISCO E INICIO V18");\n      var process=Tab(tabs,"JUEGO / PROCESO V19");',
           "process tab")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
           '''      Desc(process,"Selecciona un juego abierto y mide CPU real del proceso y RAM residente durante 1 segundo. Solo lectura.",18);
      B(process,"ABRIR ANALIZADOR POR JUEGO V19",16,99,1010,()=>new AetherGameProcessClinicV19().ShowDialog(this));
      Desc(process,"Guarda un TXT. Una CPU total baja no descarta saturación de un núcleo o de la GPU.",190);
      Desc(process,"No mide FPS; para FPS reales utiliza el contador del juego y el comparador A/B V16.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
           "process tab controls")
    change(clinic,"AETHER SYSTEM CLINIC  V18","AETHER SYSTEM CLINIC  V19","clinic header")
    change(clinic,"SIM TURBO PC ULTRA V18 · AETHER SYSTEM CLINIC",
           "SIM TURBO PC ULTRA V19 · AETHER SYSTEM CLINIC","clinic window title")
    change(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V18","AETHER CLINIC V19","main launcher")
    shutil.copy2(BASE/"V19_GameProcessClinic.cs",pc/"V19_GameProcessClinic.cs")

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    main=java/"MainActivity.java"
    change(main,'        private String v14ControllerLayout="GENERAL";',
           '''        private String v14ControllerLayout="GENERAL";
        private android.widget.Spinner v19LayoutSpinner;''',
           "layout spinner field")
    change(main,'            padCard.addView(v14Layouts,new LinearLayout.LayoutParams(-1,dp(49)));',
           '''            padCard.addView(v14Layouts,new LinearLayout.LayoutParams(-1,dp(49)));
            v19LayoutSpinner=v14Layouts;''',
           "spinner binding")
    change(main,'        Button lastGame=new Button(this);lastGame.setAllCaps(false);',
           '''        Button autoLayout=new Button(this);autoLayout.setAllCaps(false);
        autoLayout.setText("V19 · DETECTAR JUEGO Y CONFIGURAR MANDO");
        aetherCard.addView(autoLayout,new LinearLayout.LayoutParams(-1,dp(47)));
        autoLayout.setOnClickListener(v->{
            if(!GameProfiles.hasUsageAccess(this)){
                v12Info.setText("Acceso de uso opcional: activa el permiso para detectar un juego registrado.");
                startActivity(new android.content.Intent(android.provider.Settings.ACTION_USAGE_ACCESS_SETTINGS));
                return;
            }
            String pkg=GameProfiles.lastConfiguredGame(this,600000L);
            if(pkg==null){
                v12Info.setText("No hay juegos registrados recientes. Guarda antes un perfil por paquete.");
                return;
            }
            String layout=GameAutoProfileV19.layoutForPackage(pkg);
            if(controllerOn)stopController();
            v14ControllerLayout=layout;
            ControllerLayoutsV14.save(this,layout);
            if(v19LayoutSpinner!=null)
                v19LayoutSpinner.setSelection(ControllerLayoutsV14.index(layout));
            v12GamePackage.setText(pkg);
            v12Info.setText("Juego registrado: "+pkg+" · mando "+layout+
                ". Se aplica solo a AETHER, nunca cambia la configuración del juego.");
        });
        Button lastGame=new Button(this);lastGame.setAllCaps(false);''',
           "opt-in game to controller layout")
    shutil.copy2(BASE/"V19_GameAutoProfile.java",java/"GameAutoProfileV19.java")
    gradle=android/"app/build.gradle"
    change(gradle,"versionCode 18","versionCode 19","Android versionCode")
    change(gradle,"versionName '18.0'","versionName '19.0'","Android versionName")
print("AETHER V19: Windows per-process CPU/RAM sampling + Android registered-game layout selection.")
