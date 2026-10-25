# SIM TURBO V11 — new Windows clinic + real, consent-based Android LAN keyboard gamepad.
# Apply only after V4-V10 patches to unpacked sources.
from pathlib import Path
import shutil

base=Path(__file__).resolve().parent
pc=Path("PC_Windows/SIM_TURBO_PC.cs")
s=pc.read_text(encoding="utf-8-sig")
anchor='            Controls.Add(Text("RED / SALUD", 39, 132, 240, 24, 10, muted, FontStyle.Bold));'
if s.count(anchor)!=1:raise SystemExit("V11: Windows main launcher anchor missing or repeated")
button='''            Button clinicV11=MakeButton("AETHER CLINIC V11",518,78,232,cyan,Color.FromArgb(13,55,65));
            clinicV11.Click+=(s,e)=>new AetherSystemClinicV11(token,pcIp).ShowDialog(this);
'''
s=s.replace(anchor,button+anchor)
s=s.replace("SIM TURBO PC ULTRA  |  Centro de red","SIM TURBO PC ULTRA V11  |  Centro de red y mando Android")
pc.write_text(s,encoding="utf-8-sig")
for name in ["V11_SystemClinic.cs","V11_AndroidGamepad.cs"]:
    shutil.copyfile(base/name,Path("PC_Windows")/name)

main=Path("Android/app/src/main/java/com/simturbopc/ultra/MainActivity.java")
s=main.read_text(encoding="utf-8")
anchor="import android.view.View;"
if s.count(anchor)!=1:raise SystemExit("V11: Android imports missing")
s=s.replace(anchor,anchor+"\nimport android.view.MotionEvent;")
anchor="    private TextView cellStatus;"
if s.count(anchor)!=1:raise SystemExit("V11: Android fields anchor missing")
s=s.replace(anchor,anchor+'''
    private ControllerSender controllerSender;
    private boolean controllerOn = false;
    private Button controllerToggle;
    private TextView controllerStatus;
''')
anchor='        root.addView(text("PRIVACIDAD Y LÍMITES", 12, CYAN, true));'
if s.count(anchor)!=1:raise SystemExit("V11: Android controller section anchor missing")
section='''        LinearLayout padCard = card(); root.addView(padCard);
        padCard.addView(text("MODO 3 · MANDO ANDROID PARA PC V11", 15, CYAN, true));
        gap(padCard,10);
        padCard.addView(text("Controles por Wi-Fi local al PC emparejado. No usa datos SIM. En Windows abre AETHER CLINIC V11 > MANDO ANDROID y activa el receptor.",13,GREY,false));
        gap(padCard,12);
        controllerToggle = new Button(this);
        controllerToggle.setAllCaps(false);
        controllerToggle.setText("ACTIVAR MANDO");
        controllerToggle.setTextColor(BG);
        controllerToggle.setTypeface(null,Typeface.BOLD);
        controllerToggle.setBackground(rounded(CYAN,14));
        padCard.addView(controllerToggle,new LinearLayout.LayoutParams(-1,dp(52)));
        controllerToggle.setOnClickListener(v->{if(controllerOn)stopController();else startController();});
        gap(padCard,10);
        controllerStatus=text("Mando desconectado. Empareja primero y activa el receptor en PC.",12,GREY,false);
        padCard.addView(controllerStatus);
        gap(padCard,8);
        padCard.addView(text("CRUCETA · W / A / S / D",12,CYAN,true));
        LinearLayout dirs=new LinearLayout(this);
        dirs.setOrientation(LinearLayout.HORIZONTAL);
        addControllerButton(dirs,"↑","W");
        addControllerButton(dirs,"←","A");
        addControllerButton(dirs,"↓","S");
        addControllerButton(dirs,"→","D");
        padCard.addView(dirs);
        gap(padCard,9);
        padCard.addView(text("BOTONES · teclado configurable en cada juego",12,CYAN,true));
        LinearLayout buttons=new LinearLayout(this);
        buttons.setOrientation(LinearLayout.HORIZONTAL);
        addControllerButton(buttons,"A","SPACE");
        addControllerButton(buttons,"B","ESC");
        addControllerButton(buttons,"X","F");
        addControllerButton(buttons,"Y","E");
        padCard.addView(buttons);
        gap(padCard,8);
        LinearLayout extras=new LinearLayout(this);
        extras.setOrientation(LinearLayout.HORIZONTAL);
        addControllerButton(extras,"LB","Q");
        addControllerButton(extras,"RB","SHIFT");
        addControllerButton(extras,"START","ENTER");
        padCard.addView(extras);
        gap(root,18);
'''
s=s.replace(anchor,section+anchor)
anchor='    private void start() {'
if s.count(anchor)!=1:raise SystemExit("V11: Android start method anchor missing")
methods='''    private void startController() {
        if(!active) {
            controllerStatus.setText("Primero pulsa CONECTAR Y MEDIR.");
            return;
        }
        try {
            controllerSender=new ControllerSender(this,pairedPcIp,pairedToken);
            controllerOn=true;
            controllerToggle.setText("DETENER MANDO");
            controllerToggle.setBackground(rounded(0xFFFE8196,14));
            controllerStatus.setText("Mando activo: el PC debe abrir el receptor V11. Mantén pulsado para mover.");
        }catch(Exception ex){
            controllerOn=false;
            controllerSender=null;
            controllerStatus.setText("No se pudo conectar el mando: "+ex.getMessage());
        }
    }
    private void stopController() {
        controllerOn=false;
        if(controllerSender!=null){
            controllerSender.close();
            controllerSender=null;
        }
        if(controllerToggle!=null){
            controllerToggle.setText("ACTIVAR MANDO");
            controllerToggle.setBackground(rounded(CYAN,14));
        }
        if(controllerStatus!=null)controllerStatus.setText("Mando detenido. No se envían teclas.");
    }
    private void addControllerButton(LinearLayout parent,String label,String key) {
        Button btn=new Button(this);
        btn.setAllCaps(false);
        btn.setText(label);
        btn.setTextSize(17);
        btn.setTypeface(null,Typeface.BOLD);
        btn.setTextColor(BG);
        btn.setBackground(rounded(CYAN,12));
        LinearLayout.LayoutParams params=new LinearLayout.LayoutParams(0,dp(66),1f);
        params.setMargins(dp(2),dp(3),dp(2),dp(3));
        parent.addView(btn,params);
        btn.setOnTouchListener((v,event)->{
            int action=event.getActionMasked();
            if(action==MotionEvent.ACTION_DOWN){
                if(controllerOn&&controllerSender!=null)controllerSender.down(key);
                return true;
            }
            if(action==MotionEvent.ACTION_UP||action==MotionEvent.ACTION_CANCEL){
                if(controllerOn&&controllerSender!=null)controllerSender.up(key);
                return true;
            }
            return true;
        });
    }

'''
s=s.replace(anchor,methods+anchor)
anchor='    private void stop() {\n        stopCell();'
if s.count(anchor)!=1:raise SystemExit("V11: Android safe stop anchor missing")
s=s.replace(anchor,'    private void stop() {\n        stopController();\n        stopCell();')
s=s.replace("HYPERLINK ANDROID V4","HYPERLINK ANDROID V11 · MANDO PC")
main.write_text(s,encoding="utf-8")
shutil.copyfile(base/"V11_ControllerSender.java",main.parent/"ControllerSender.java")
gradle=Path("Android/app/build.gradle")
g=gradle.read_text(encoding="utf-8")
if "versionCode 4" not in g:raise SystemExit("V11: versionCode V4 anchor missing")
g=g.replace("versionCode 4","versionCode 11").replace("versionName '4.0'","versionName '11.0'")
gradle.write_text(g,encoding="utf-8")
print("AETHER V11: Windows clinic (6 tabs, diagnostics) + local Android keyboard gamepad integrated.")
