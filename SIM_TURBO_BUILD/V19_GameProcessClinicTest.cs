using System;
using SimTurboPC;
class V19GameProcessClinicTest {
  static void Check(bool ok,string msg){if(!ok)throw new Exception("FAIL: "+msg);}
  static void Main(){
    Check(AetherGameProcessClinicV19.Advice(92,1,8).Contains("gran parte"),"CPU high");
    Check(AetherGameProcessClinicV19.Advice(55,1,8).Contains("apreciable"),"CPU medium");
    Check(AetherGameProcessClinicV19.Advice(10,1,8).Contains("límite por núcleo"),"CPU low");
    Check(AetherGameProcessClinicV19.Advice(20,7,8).Contains("elevado"),"RAM high");
    Check(AetherGameProcessClinicV19.Advice(-1,1,8).Contains("incompleta"),"missing CPU");
    Check(AetherGameProcessClinicV19.Advice(20,1,0).Contains("Sin información"),"invalid cores");
    Console.WriteLine("OK V19 Windows game-process advice: 6 cases");
  }
}
