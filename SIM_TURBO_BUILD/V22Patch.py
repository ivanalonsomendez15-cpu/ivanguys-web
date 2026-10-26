# AETHER V22: real persistence and user-driven local backup; no fake cloud storage.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
def change(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V22 anchor "+label+" count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")
pc=Path("PC_Windows")
if pc.is_dir():
    autopilot=pc/"V8_AetherAutopilot.cs"
    change(autopilot,'if(File.Exists(backupFile)) Log("Hay una restauración pendiente de otra sesión; revisa PARAR Y RESTAURAR.");',
      '''if(File.Exists(backupFile)) Log("Hay una restauración pendiente de otra sesión; revisa PARAR Y RESTAURAR.");
            AetherSavedSettingsV22.BindCheck(optNetwork,"autopilot.network");
            AetherSavedSettingsV22.BindCheck(optGames,"autopilot.games");
            AetherSavedSettingsV22.BindCheck(optDrivers,"autopilot.drivers");
            AetherSavedSettingsV22.BindText(games,"autopilot.executables");
            Log("V22: tus opciones y juegos se guardan en disco. El piloto NO arranca solo al reiniciar.");''',
      "persist Windows V8 preferences")
    lab=pc/"V10_InnovationLab.cs"
    change(lab,'menu.SelectedIndex=0;',
      '''menu.SelectedIndex=0;
      AetherSavedSettingsV22.BindCheck(pilotDiagnostics,"innovation.ping");
      AetherSavedSettingsV22.BindCheck(pilotDns,"innovation.dns");
      AetherSavedSettingsV22.BindMenu(menu,"innovation.menu");''',"persist V10 options")
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var neural4k=Tab(tabs,"IA 4K REAL V21");',
           'var neural4k=Tab(tabs,"IA 4K REAL V21");\n      var saves=Tab(tabs,"GUARDADO V22");',"settings page")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
      '''      Desc(saves,"Tus ajustes quedan guardados en este PC, incluso al cerrar la app o reiniciar Windows.",18);
      B(saves,"VER AJUSTES / EXPORTAR / RESTAURAR COPIA",16,99,1010,
        ()=>new AetherPreferencesPanelV22().ShowDialog(this));
      Desc(saves,"Ruta local: %LOCALAPPDATA%\\\\SimTurboPC\\\\V22\\\\preferences.txt. No necesitas abrir el navegador.",190);
      Desc(saves,"Cloudflare NO guarda todavía tus ajustes. Para nube haría falta base de datos y autenticación.",264);
      AetherSavedSettingsV22.BindTabs(tabs,"clinic.tab");

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
      "settings page UI and tab persistence")
    change(clinic,"AETHER SYSTEM CLINIC  V21","AETHER SYSTEM CLINIC  V22","clinic header")
    change(clinic,"SIM TURBO PC ULTRA V21 · AETHER SYSTEM CLINIC",
                 "SIM TURBO PC ULTRA V22 · AETHER SYSTEM CLINIC","clinic window")
    change(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V21","AETHER CLINIC V22","launcher label")
    shutil.copy2(BASE/"V22_Settings.cs",pc/"V22_Settings.cs")
android=Path("Android")
if android.is_dir():
    root=android/"app/src/main/java/com/simturbopc/ultra"
    main=root/"MainActivity.java"
    change(main,'        Button lastGame=new Button(this);lastGame.setAllCaps(false);',
      '''        Button backupV22=new Button(this);backupV22.setAllCaps(false);
        backupV22.setText("V22 · EXPORTAR COPIA DE MIS AJUSTES");
        aetherCard.addView(backupV22,new LinearLayout.LayoutParams(-1,dp(48)));
        backupV22.setOnClickListener(v->AetherBackupV22.beginExport(this));
        Button restoreV22=new Button(this);restoreV22.setAllCaps(false);
        restoreV22.setText("V22 · RESTAURAR AJUSTES GUARDADOS");
        aetherCard.addView(restoreV22,new LinearLayout.LayoutParams(-1,dp(48)));
        restoreV22.setOnClickListener(v->AetherBackupV22.beginImport(this));
        aetherCard.addView(text("Los perfiles y diseños se guardan AUTOMÁTICAMENTE en Android, incluso tras reiniciar. "+
          "Puedes exportar una copia antes de cambiar de móvil. El monitor no se activa sin tu permiso.",12,GREY,false));
        Button lastGame=new Button(this);lastGame.setAllCaps(false);''',
      "Android backup button")
    change(main,'    private void start() {',
      '''    @Override
    protected void onActivityResult(int requestCode,int resultCode,android.content.Intent data) {
        super.onActivityResult(requestCode,resultCode,data);
        AetherBackupV22.onActivityResult(this,requestCode,resultCode,data);
    }

    private void start() {''',
      "Android SAF backup callbacks")
    shutil.copy2(BASE/"V22_AndroidBackup.java",root/"AetherBackupV22.java")
    # Existing prefs did persist with apply(), but explicit writes are committed before claiming success.
    for fname in ("GameProfiles.java","GameLayoutOverridesV20.java","ControllerLayoutsV14.java"):
        p=root/fname
        s=p.read_text(encoding="utf-8")
        assert s.count(".apply();")>=1,fname
        s=s.replace(".apply();",".commit();")
        p.write_text(s,encoding="utf-8")
    gradle=android/"app/build.gradle"
    change(gradle,"versionCode 20","versionCode 22","Android version code")
    change(gradle,"versionName '20.0'","versionName '22.0'","Android version label")
print("AETHER V22: Windows saved preferences and backup; Android persistent profiles and JSON export/import.")
