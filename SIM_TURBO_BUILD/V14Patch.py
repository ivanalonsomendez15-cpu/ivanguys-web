# AETHER V14 — read-only physical link inspector + configurable Android controller layouts.
# Apply after V13Patch.py from the extracted source project root.
from pathlib import Path
import shutil

BASE=Path(__file__).resolve().parent
def change(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    count=s.count(old)
    if count!=1:raise SystemExit("V14 patch anchor: "+label+" count="+str(count))
    path.write_text(s.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var lab=Tab(tabs,"RED MEDIBLE V13");',
           'var lab=Tab(tabs,"RED MEDIBLE V13");\n      var link=Tab(tabs,"ENLACES V14");',
           "Windows tab")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
           '''      Desc(link,"Auditoría de velocidades de enlace, adaptadores, IP local y Wi-Fi. No confundir velocidad nominal con velocidad real de Internet.",18);
      B(link,"ABRIR AUDITORÍA DE ENLACES V14",16,99,1010,()=>new AetherLinkAuditV14().ShowDialog(this));
      Desc(link,"Si el enlace físico negocia 100 Mb/s, no puede entregar 120–150 Mb/s útiles. Comprueba cable, puerto y cobertura.",190);
      Desc(link,"La auditoría es de solo lectura. Guarda un informe TXT para comparar con el laboratorio de velocidad V13.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
           "Windows audit section")
    change(clinic,'AETHER SYSTEM CLINIC  V13','AETHER SYSTEM CLINIC  V14',"Windows clinic title")
    change(clinic,'SIM TURBO PC ULTRA V13 · AETHER SYSTEM CLINIC',
           'SIM TURBO PC ULTRA V14 · AETHER SYSTEM CLINIC',"Windows window title")
    shutil.copy2(BASE/"V14_LinkAudit.cs",pc/"V14_LinkAudit.cs")
    main=pc/"SIM_TURBO_PC.cs"
    change(main,'AETHER CLINIC V13','AETHER CLINIC V14',"Windows launcher")

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    main=java/"MainActivity.java"
    change(main,'        private TextView controllerStatus;',
           '''        private TextView controllerStatus;
        private String v14ControllerLayout="GENERAL";''',"Android layout field")
    change(main,'            padCard.addView(text("MODO 3 · MANDO ANDROID PARA PC V11", 15, CYAN, true));',
           '''            padCard.addView(text("MODO 3 · MANDO ANDROID PARA PC V14", 15, CYAN, true));
            padCard.addView(text("PERFIL DE BOTONES POR JUEGO (teclas, no XInput)",12,CYAN,true));
            android.widget.Spinner v14Layouts=new android.widget.Spinner(this);
            android.widget.ArrayAdapter<String> v14Adapter=new android.widget.ArrayAdapter<>(
                this,android.R.layout.simple_spinner_item,ControllerLayoutsV14.NAMES);
            v14Adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            v14Layouts.setAdapter(v14Adapter);
            v14ControllerLayout=ControllerLayoutsV14.load(this);
            v14Layouts.setSelection(ControllerLayoutsV14.index(v14ControllerLayout));
            padCard.addView(v14Layouts,new LinearLayout.LayoutParams(-1,dp(49)));
            TextView v14LayoutInfo=text(ControllerLayoutsV14.explanation(v14ControllerLayout),12,GREY,false);
            padCard.addView(v14LayoutInfo);
            v14Layouts.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener(){
                @Override public void onItemSelected(android.widget.AdapterView<?> parent,View view,int position,long id){
                    String next=ControllerLayoutsV14.NAMES[position];
                    if(!next.equals(v14ControllerLayout) && controllerOn)stopController();
                    v14ControllerLayout=next;
                    ControllerLayoutsV14.save(MainActivity.this,next);
                    v14LayoutInfo.setText(ControllerLayoutsV14.explanation(next));
                }
                @Override public void onNothingSelected(android.widget.AdapterView<?> parent){}
            });''',
           "Android profile picker")
    change(main,'    private void addControllerButton(LinearLayout parent,String label,String key) {\n            Button btn=new Button(this);',
           '''    private void addControllerButton(LinearLayout parent,String label,String key) {
            final String[] activeKey=new String[]{null};
            Button btn=new Button(this);''',
           "Android touch press tracking")
    change(main,'''                if(action==MotionEvent.ACTION_DOWN){
                    if(controllerOn&&controllerSender!=null)controllerSender.down(key);
                    return true;
                }
                if(action==MotionEvent.ACTION_UP||action==MotionEvent.ACTION_CANCEL){
                    if(controllerOn&&controllerSender!=null)controllerSender.up(key);
                    return true;
                }''',
           '''                if(action==MotionEvent.ACTION_DOWN){
                    activeKey[0]=ControllerLayoutsV14.key(v14ControllerLayout,label,key);
                    if(controllerOn&&controllerSender!=null)controllerSender.down(activeKey[0]);
                    return true;
                }
                if(action==MotionEvent.ACTION_UP||action==MotionEvent.ACTION_CANCEL){
                    if(controllerOn&&controllerSender!=null&&activeKey[0]!=null)
                        controllerSender.up(activeKey[0]);
                    activeKey[0]=null;
                    return true;
                }''',
           "Android mapped touch events")
    shutil.copy2(BASE/"V14_ControllerLayouts.java",java/"ControllerLayoutsV14.java")
    gradle=android/"app/build.gradle"
    change(gradle,"versionCode 13","versionCode 14","Android versionCode")
    change(gradle,"versionName '13.0'","versionName '14.0'","Android versionName")

print("AETHER V14: Windows read-only link audit and Android saved gamepad layouts integrated.")
