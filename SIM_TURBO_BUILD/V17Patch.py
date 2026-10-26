# AETHER V17: HMAC-authenticated LAN controller and PC hardware graphics advisor.
# Apply after V16Patch.py. Neither HMAC nor 1080p upscaling is encryption/4K native.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent

def replace(path,old,new,label):
    code=path.read_text(encoding="utf-8-sig")
    n=code.count(old)
    if n!=1:raise SystemExit("V17 patch anchor "+label+" count="+str(n))
    path.write_text(code.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    game=pc/"V11_AndroidGamepad.cs"
    replace(game,'    int lastSeq=-1;',
            '    int lastSeq=-1;\n    string sessionId=null;\n    DateTime lastPacketUtc=DateTime.MinValue;',
            "session tracking")
    replace(game,'if(!Local(endpoint.Address)||packet.Length>120)continue;',
            'if(!Local(endpoint.Address)||packet.Length>180)continue;',
            "packet length")
    replace(game,r'''          string msg=Encoding.ASCII.GetString(packet);
          string[] p=msg.Split('|');
          if(p.Length!=5||p[0]!="STPC-CTRL"||p[1]!=code)continue;
          int sequence;
          if(!int.TryParse(p[4],out sequence)||sequence<0)continue;
          if(deviceIp!=null&&!string.Equals(deviceIp,endpoint.Address.ToString(),StringComparison.Ordinal))continue;
          if(sequence<=lastSeq)continue;
          if(!keyMap.ContainsKey(p[3]))continue;
          if(p[2]!="DOWN"&&p[2]!="UP")continue;
          if(deviceIp==null)deviceIp=endpoint.Address.ToString();
          lastSeq=sequence;
          total++;
          if(p[2]=="DOWN")Press(p[3]);
          else Release(p[3]);
          if(total%9==1)status.Text="Mando conectado · "+deviceIp+
              "\r\nBotón: "+p[3]+" · mensajes "+total+" · pulsa ESC del juego para salir";''',
            r'''          string sid,action,key;
          int sequence;
          if(!AetherSecurePacketV17.TryParseController(
              Encoding.ASCII.GetString(packet),code,out sid,out action,out key,out sequence))continue;
          if(deviceIp!=null&&!string.Equals(deviceIp,endpoint.Address.ToString(),StringComparison.Ordinal))continue;
          if(!keyMap.ContainsKey(key))continue;
          if(sessionId!=null&&sessionId!=sid) {
            // New session only after the previous one is inactive.
            if((DateTime.UtcNow-lastPacketUtc).TotalMilliseconds<1800)continue;
            foreach(string held in new List<string>(down.Keys))Release(held);
            lastSeq=-1;
          }
          if(sequence<=lastSeq)continue;
          if(deviceIp==null)deviceIp=endpoint.Address.ToString();
          sessionId=sid;
          lastPacketUtc=DateTime.UtcNow;
          lastSeq=sequence;
          total++;
          if(action=="DOWN")Press(key);
          else Release(key);
          if(total%9==1)status.Text="Mando autenticado V17 · "+deviceIp+
              "\r\nBotón: "+key+" · mensajes "+total+" · pulsa ESC del juego para salir";''',
            "secure receiver")
    replace(game,'Text="AETHER · MANDO ANDROID PARA PC V11";',
            'Text="AETHER · MANDO ANDROID PARA PC V17";',"gamepad title")
    replace(game,'Info("PUERTO 45727 · Solo se aceptan botones previamente definidos (WASD, A/B/X/Y, L/R, Start).",172,60);',
            'Info("PUERTO 45727 · HMAC-SHA256 y secuencia antirrepetición. No cifra los datos. Solo LAN privada.",172,60);',
            "security notice")
    shutil.copy2(BASE/"V17_SecurePacket.cs",pc/"V17_SecurePacket.cs")
    lan=pc/"V12_LanDiscovery.cs"
    replace(lan,'''          } else if(p.Length==3 && p[0]=="STPC-CAPS" && p[1]==code &&
                    Regex.IsMatch(p[2],@"^[A-F0-9]{16}$")) {
            reply="STPC-CAPS-OK|"+p[2]+"|"+capabilities;''',
            '''          } else if(p.Length==3 && p[0]=="STPC-CAPS17" &&
                    Regex.IsMatch(p[1],@"^[A-F0-9]{16}$") &&
                    AetherSecurePacketV17.Verify(code,"CAPS17|"+p[1],p[2])) {
            string response="STPC-CAPS17-OK|"+p[1]+"|"+capabilities;
            reply=response+"|"+AetherSecurePacketV17.Sign(code,response);''',
            "authenticated capability discovery")
    clinic=pc/"V11_SystemClinic.cs"
    replace(clinic,'var experiment=Tab(tabs,"PRUEBAS A/B V16");',
            'var experiment=Tab(tabs,"PRUEBAS A/B V16");\n      var graphics=Tab(tabs,"GPU Y PANTALLA V17");',
            "graphics tab")
    replace(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
            '''      Desc(graphics,"Detecta GPU, CPU, RAM y resolución. Recomendaciones según perfil: FPS, equilibrado o calidad. Solo lectura.",18);
      B(graphics,"ABRIR ASESOR GRÁFICO V17",16,99,1010,()=>new AetherGraphicsAdvisorV17().ShowDialog(this));
      Desc(graphics,"DLSS/FSR requieren soporte del juego. DSR/DLDSR pueden mejorar bordes con coste de FPS.",190);
      Desc(graphics,"Una pantalla 1080p no muestra 4K nativo; la interpolación de V12 no es IA neuronal.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
            "graphics controls")
    replace(clinic,"AETHER SYSTEM CLINIC  V16","AETHER SYSTEM CLINIC  V17","clinic title")
    replace(clinic,"SIM TURBO PC ULTRA V16 · AETHER SYSTEM CLINIC",
            "SIM TURBO PC ULTRA V17 · AETHER SYSTEM CLINIC","window title")
    replace(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V16","AETHER CLINIC V17","launcher")
    shutil.copy2(BASE/"V17_GraphicsAdvisor.cs",pc/"V17_GraphicsAdvisor.cs")

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    sender=java/"ControllerSender.java"
    replace(sender,'    private final String token;',
            '    private final String token;\n    private final String sessionId=SecurePacketV17.newSessionId();',
            "session nonce")
    replace(sender,'''            byte[] data = ("STPC-CTRL|" + token + "|" + action + "|" + key + "|" + n)
                .getBytes(StandardCharsets.US_ASCII);''',
            '''            byte[] data = SecurePacketV17.encode(token,sessionId,action,key,n)
                .getBytes(StandardCharsets.US_ASCII);''',
            "HMAC controller sender")
    discovery=java/"PcDiscovery.java"
    replace(discovery,'String request="STPC-CAPS|"+code.toUpperCase(Locale.ROOT)+"|"+nonce;',
            '''String request="STPC-CAPS17|"+nonce+"|"+
            SecurePacketV17.sign(code,"CAPS17|"+nonce);''',
            "capabilities request")
    replace(discovery,r'''            String prefix="STPC-CAPS-OK|"+nonce+"|";
            if(!body.startsWith(prefix))throw new IOException("Respuesta de emparejamiento no válida");
            String[] fields=body.substring(prefix.length()).split("\\|",3);
            if(fields.length!=3)throw new IOException("Respuesta incompleta");
            return "CPU lógica: "+fields[0]+" · RAM: "+fields[1]+" · GPU: "+fields[2];''',
            r'''            String prefix="STPC-CAPS17-OK|"+nonce+"|";
            if(!body.startsWith(prefix))throw new IOException("Respuesta de emparejamiento no válida");
            String[] fields=body.substring(prefix.length()).split("\\|",4);
            if(fields.length!=4)throw new IOException("Respuesta incompleta");
            String signed=body.substring(0,body.lastIndexOf('|'));
            if(!SecurePacketV17.verify(code,signed,fields[3]))
                throw new IOException("Respuesta PC sin autenticación válida");
            return "CPU lógica: "+fields[0]+" · RAM: "+fields[1]+" · GPU: "+fields[2];''',
            "capabilities response verification")
    main=java/"MainActivity.java"
    replace(main,'padCard.addView(text("MODO 3 · MANDO ANDROID PARA PC V14", 15, CYAN, true));',
            'padCard.addView(text("MODO 3 · MANDO ANDROID PARA PC V17 · AUTENTICADO", 15, CYAN, true));',
            "Android UI")
    shutil.copy2(BASE/"V17_SecurePacket.java",java/"SecurePacketV17.java")
    gradle=android/"app/build.gradle"
    replace(gradle,"versionCode 16","versionCode 17","Android versionCode")
    replace(gradle,"versionName '16.0'","versionName '17.0'","Android versionName")

print("AETHER V17: LAN HMAC authentication, anti-replay, authenticated hardware response, GPU advisor.")
