using System;
using SimTurboPC;

public static class StorageClinicTestV18 {
  static void Contains(string text,string expected,string label) {
    if(text.IndexOf(expected,StringComparison.OrdinalIgnoreCase)<0)
      throw new Exception("FAIL "+label+": "+text);
  }
  public static int Main() {
    long gib=1024L*1024*1024;
    Contains(AetherStorageClinicV18.SpaceAdvice(8*gib,100*gib),"ATENCIÓN","8% free");
    Contains(AetherStorageClinicV18.SpaceAdvice(16*gib,100*gib),"AVISO","16% free");
    Contains(AetherStorageClinicV18.SpaceAdvice(30*gib,100*gib),"razonable","30% free");
    Contains(AetherStorageClinicV18.SpaceAdvice(-1,100*gib),"insuficientes","invalid free");
    Contains(AetherStorageClinicV18.SpaceAdvice(10*gib,0),"insuficientes","invalid total");
    Console.WriteLine("OK V18 C# storage decision rules: 5 cases");
    return 0;
  }
}
