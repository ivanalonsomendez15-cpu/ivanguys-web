using System;
using System.Collections.Generic;
using SimTurboPC;
class V23Test {
  static void Main(){
    List<string> modes=AetherLive4KV23.EnumerateVirtualModes();
    foreach(string mode in modes){
      if(mode!="2560x1440" && mode!="2880x1620" && mode!="3840x2160")
        throw new Exception("Modo no autorizado por AETHER: "+mode);
    }
    Console.WriteLine("AETHER V23: consulta de modos segura, "+modes.Count+" modos permitidos. No se aplico ningun cambio al display.");
  }
}
