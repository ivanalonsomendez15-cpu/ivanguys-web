package com.simturbopc.ultra;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.widget.Toast;
import org.json.JSONObject;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

/** User-controlled JSON backup. ONLY nonsecret game profiles and gamepad layouts.
 * Does not export pairing tokens, PC IPs, diagnostic history or usage stats.
 */
public final class AetherBackupV22 {
    public static final int EXPORT_REQUEST=2221;
    public static final int IMPORT_REQUEST=2222;
    private static final String GAMES="aether_game_profiles_v12";
    private static final String LAYOUTS="aether_gamepad_layouts_v20";
    private static final String GLOBAL="aether_controller_layout_v14";
    private static final int MAX_BYTES=131072;
    private AetherBackupV22(){}

    public static void beginExport(Activity activity) {
        Intent i=new Intent(Intent.ACTION_CREATE_DOCUMENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("application/json");
        i.putExtra(Intent.EXTRA_TITLE,"AETHER_V22_PERFILES.json");
        activity.startActivityForResult(i,EXPORT_REQUEST);
    }
    public static void beginImport(Activity activity) {
        Intent i=new Intent(Intent.ACTION_OPEN_DOCUMENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("application/json");
        activity.startActivityForResult(i,IMPORT_REQUEST);
    }
    private static JSONObject saveGroup(Context ctx,String key,boolean game) throws Exception{
        JSONObject o=new JSONObject();
        for(java.util.Map.Entry<String,?> entry:
            ctx.getSharedPreferences(key,Context.MODE_PRIVATE).getAll().entrySet()){
            String id=entry.getKey();
            Object raw=entry.getValue();
            if(!(raw instanceof String))continue;
            String value=(String)raw;
            String pkg=game?id:(id.startsWith("layout:")?id.substring(7):"");
            if(!GameProfiles.validPackage(pkg))continue;
            if(game) {
                boolean found=false;
                for(String mode:GameProfiles.MODES)if(mode.equals(value))found=true;
                if(!found)continue;
            } else {
                if(!GameLayoutRulesV20.normalize(value).equals(value))continue;
            }
            o.put(id,value);
        }
        return o;
    }
    private static byte[] makeBackup(Context ctx)throws Exception{
        JSONObject object=new JSONObject();
        object.put("format","AETHER_SETTINGS_V22");
        object.put("version",22);
        object.put("game_profiles",saveGroup(ctx,GAMES,true));
        object.put("gamepad_layouts",saveGroup(ctx,LAYOUTS,false));
        object.put("general_layout",ControllerLayoutsV14.load(ctx));
        byte[] data=object.toString(2).getBytes(StandardCharsets.UTF_8);
        if(data.length>MAX_BYTES)throw new Exception("Demasiados perfiles para exportar.");
        return data;
    }
    private static byte[] readFile(Context ctx,Uri uri)throws Exception{
        try(InputStream in=ctx.getContentResolver().openInputStream(uri);
            ByteArrayOutputStream out=new ByteArrayOutputStream()){
            if(in==null)throw new Exception("No se pudo abrir el archivo.");
            byte[] buf=new byte[8192];
            int size=0,n;
            while((n=in.read(buf))!=-1){
                size+=n;
                if(size>MAX_BYTES)throw new Exception("Copia demasiado grande (>128 KiB).");
                out.write(buf,0,n);
            }
            return out.toByteArray();
        }
    }
    private static java.util.Map<String,String> validated(JSONObject object,boolean games)throws Exception{
        java.util.Map<String,String> map=new java.util.TreeMap<>();
        Iterator<String> keys=object.keys();
        while(keys.hasNext()){
            String id=keys.next();
            String pkg=games?id:(id.startsWith("layout:")?id.substring(7):"");
            if(!GameProfiles.validPackage(pkg))throw new Exception("Nombre de juego inválido.");
            if(map.size()>=500)throw new Exception("Demasiados juegos en el archivo.");
            String value=object.getString(id);
            if(games){
                boolean ok=false;
                for(String mode:GameProfiles.MODES)if(mode.equals(value))ok=true;
                if(!ok)throw new Exception("Modo de juego desconocido.");
            } else if(!GameLayoutRulesV20.normalize(value).equals(value)){
                throw new Exception("Diseño de mando desconocido.");
            }
            map.put(id,value);
        }
        return map;
    }
    private static boolean restore(Context ctx,byte[] bytes)throws Exception{
        JSONObject root=new JSONObject(new String(bytes,StandardCharsets.UTF_8));
        if(!"AETHER_SETTINGS_V22".equals(root.optString("format"))||root.optInt("version")!=22)
            throw new Exception("La copia no es de AETHER V22.");
        java.util.Map<String,String> games=validated(root.getJSONObject("game_profiles"),true);
        java.util.Map<String,String> layouts=validated(root.getJSONObject("gamepad_layouts"),false);
        String general=root.getString("general_layout");
        if(ControllerLayoutsV14.index(general)<0)throw new Exception("Diseño general inválido.");
        boolean valid=false;
        for(String item:ControllerLayoutsV14.NAMES)if(item.equals(general))valid=true;
        if(!valid)throw new Exception("Diseño general inválido.");
        SharedPreferences.Editor ge=ctx.getSharedPreferences(GAMES,Context.MODE_PRIVATE).edit().clear();
        for(java.util.Map.Entry<String,String> e:games.entrySet())ge.putString(e.getKey(),e.getValue());
        SharedPreferences.Editor le=ctx.getSharedPreferences(LAYOUTS,Context.MODE_PRIVATE).edit().clear();
        for(java.util.Map.Entry<String,String> e:layouts.entrySet())le.putString(e.getKey(),e.getValue());
        // Commit synchronously: when the user leaves after seeing success, these exist on disk.
        if(!ge.commit()||!le.commit()||
            !ctx.getSharedPreferences(GLOBAL,Context.MODE_PRIVATE).edit()
                .putString("layout",general).commit())throw new Exception("No se pudo guardar en disco.");
        return true;
    }
    public static boolean onActivityResult(Activity activity,int requestCode,int resultCode,Intent data){
        if(requestCode!=EXPORT_REQUEST && requestCode!=IMPORT_REQUEST)return false;
        if(resultCode!=Activity.RESULT_OK||data==null||data.getData()==null)return true;
        try{
            Uri destination=data.getData();
            if(requestCode==EXPORT_REQUEST){
                byte[] content=makeBackup(activity);
                try(OutputStream out=activity.getContentResolver().openOutputStream(destination,"wt")){
                    if(out==null)throw new Exception("Archivo de salida no disponible.");
                    out.write(content);out.flush();
                }
                Toast.makeText(activity,"AETHER V22: copia guardada con tus perfiles.",Toast.LENGTH_LONG).show();
            }else{
                byte[] content=readFile(activity,destination);
                new android.app.AlertDialog.Builder(activity)
                    .setTitle("Restaurar perfiles AETHER")
                    .setMessage("La copia reemplazará los perfiles de juegos y diseños de mando guardados. No incluye contraseñas. ¿Continuar?")
                    .setNegativeButton("Cancelar",null)
                    .setPositiveButton("Restaurar",(d,w)->{
                        try{
                            restore(activity,content);
                            Toast.makeText(activity,"Perfiles restaurados. Cierra y abre AETHER.",Toast.LENGTH_LONG).show();
                        }catch(Exception ex){
                            Toast.makeText(activity,"No se restauró: "+ex.getMessage(),Toast.LENGTH_LONG).show();
                        }
                    }).show();
            }
        }catch(Exception ex){
            Toast.makeText(activity,"AETHER V22: "+ex.getMessage(),Toast.LENGTH_LONG).show();
        }
        return true;
    }
}
