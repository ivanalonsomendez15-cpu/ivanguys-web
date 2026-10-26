using System;
using System.IO;
using SimTurboPC;
class TestAetherPreferencesV22 {
  static void Require(bool good,string why){if(!good)throw new Exception(why);}
  static void Main(){
    // CI runs under an ephemeral user profile. No personal data or tokens.
    string backup=Path.Combine(Path.GetTempPath(),"aether-v22-test-"+Guid.NewGuid().ToString("N")+".aether");
    try{
      AetherSavedSettingsV22.Save("autopilot.network","0");
      AetherSavedSettingsV22.Save("autopilot.games","1");
      AetherSavedSettingsV22.Save("autopilot.executables","Minecraft.Windows, RocketLeague, RobloxPlayerBeta");
      AetherSavedSettingsV22.Save("innovation.menu","7");
      Require(AetherSavedSettingsV22.Load("autopilot.network","x")=="0","checkbox not durable");
      Require(AetherSavedSettingsV22.Load("autopilot.games","x")=="1","game toggle lost");
      Require(AetherSavedSettingsV22.Load("autopilot.executables","x").Contains("RocketLeague"),"games lost");
      Require(AetherSavedSettingsV22.Load("innovation.menu","x")=="7","menu lost");
      AetherSavedSettingsV22.BackupTo(backup);
      AetherSavedSettingsV22.Save("autopilot.network","1");
      AetherSavedSettingsV22.RestoreFrom(backup);
      Require(AetherSavedSettingsV22.Load("autopilot.network","x")=="0","backup restore failure");
      File.WriteAllText(backup,"invalid backup");
      bool rejected=false;
      try{AetherSavedSettingsV22.RestoreFrom(backup);}catch(InvalidDataException){rejected=true;}
      Require(rejected,"invalid file accepted");
      Require(AetherSavedSettingsV22.Load("autopilot.network","x")=="0","import changed on failure");
      Console.WriteLine("AETHER V22 GUARDADO WINDOWS OK: recovery, export/import, invalid files blocked.");
    }finally{try{File.Delete(backup);}catch{}}
  }
}
