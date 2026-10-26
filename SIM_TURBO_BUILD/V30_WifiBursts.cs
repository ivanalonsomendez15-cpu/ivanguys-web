using System;
using System.Collections.Generic;
using System.Linq;
namespace SimTurboPC {
  /// <summary>Read-only loss-burst statistics from ordered ICMP attempts.</summary>
  public static class WifiLossBurstsV30 {
    public static int LongestFailureRun(IList<bool> success) {
      if(success==null)throw new ArgumentNullException("success");
      int longest=0,current=0;
      foreach(bool ok in success){
        if(ok)current=0;
        else{current++;if(current>longest)longest=current;}
      }
      return longest;
    }
    public static int FailureRuns(IList<bool> success) {
      if(success==null)throw new ArgumentNullException("success");
      int runs=0;bool wasFailure=false;
      foreach(bool ok in success){
        if(!ok && !wasFailure)runs++;
        wasFailure=!ok;
      }
      return runs;
    }
    public static string Describe(IList<bool> success) {
      if(success==null)throw new ArgumentNullException("success");
      if(success.Count==0)return "Sin muestras: no se puede estimar estabilidad.";
      int lost=success.Count(x=>!x);
      int streak=LongestFailureRun(success);
      int runs=FailureRuns(success);
      return "Intentos "+success.Count+", fallos "+lost+
        ", rachas de fallo "+runs+", racha consecutiva máxima "+streak+
        ". Muestra breve; un ping ICMP perdido no demuestra caída de Internet.";
    }
  }
}