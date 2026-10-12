/* IVANGUYS CREATOR LAB: sandbox sin same-origin. Publicaciones en Firestore pendientes de revision. */
const $=id=>document.getElementById(id),MAX_BYTES=45000,KEY='ivanguys_creator_drafts';
const templates={
click:`<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;background:#141c38;color:#fff;font:18px system-ui;text-align:center;padding:24px}button{font-size:40px;border:0;background:#8663e8;border-radius:12px;padding:20px;cursor:pointer;color:white}h1{font-size:27px}</style></head><body><h1>✦ Reflejos estelares</h1><p>Puntos: <b id="score">0</b></p><button id="star">✦ ¡Toca!</button><script>let n=0;document.getElementById('star').onclick=()=>{n++;document.getElementById('score').textContent=n;};<\/script></body></html>`,
maze:`<!doctype html><html><head><meta charset="utf-8"><style>body{background:#101b30;color:#fff;text-align:center;font:18px system-ui}#map{font:28px monospace;white-space:pre;line-height:1.25;display:inline-block;text-align:left;color:#82eadc}button{font-size:22px;margin:4px;background:#414e86;border:0;color:white;border-radius:8px;padding:10px}</style></head><body><h2>🌌 Micro-laberinto</h2><div id="map"></div><div><button onclick="move(0,-1)">▲</button><button onclick="move(-1,0)">◀</button><button onclick="move(0,1)">▼</button><button onclick="move(1,0)">▶</button></div><p id="msg">Llega hasta la estrella ⭐</p><script>let p=[1,1],m=['########','#....#.#','#.##...#','#....#.#','##.##..#','#......#','########'];function draw(){document.getElementById('map').textContent=m.map((l,y)=>l.split('').map((c,x)=>x===p[0]&&y===p[1]?'@':x===6&&y===5?'★':c).join('')).join('\\n');}window.move=(x,y)=>{let a=p[0]+x,b=p[1]+y;if(m[b]&&m[b][a]!==undefined&&m[b][a]!=='#')p=[a,b];if(a===6&&b===5)document.getElementById('msg').textContent='¡VICTORIA!';draw();};draw();<\/script></body></html>`
};
function note(t,bad=false){$('status').textContent=t;$('status').classList.toggle('bad',bad);}
function bytes(s){return new TextEncoder().encode(s).length;}
function safeTitle(t){return String(t||'').trim().slice(0,60);}
function shield(html){
  // Restrict browser capabilities regardless of included user HTML.
  const csp=`default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; media-src data: blob:; connect-src 'none'; form-action 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; navigate-to 'none'`;
  const pre=`<meta http-equiv="Content-Security-Policy" content="${csp}"><meta name="referrer" content="no-referrer"><base target="_self">`;
  // User HTML is held under unique opaque origin by sandbox without allow-same-origin.
  return pre+html;
}
function preview(source){if(bytes(source)>MAX_BYTES)throw Error('Máximo 45.000 bytes de HTML.');const frame=$('preview');frame.srcdoc='';frame.srcdoc=shield(source);}
function drafts(){try{const a=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(a)?a.slice(0,15):[];}catch{return [];}}
function safeStorage(a){try{localStorage.setItem(KEY,JSON.stringify(a));return true;}catch(e){note('No queda espacio para guardar borradores.',true);return false;}}
function drawDrafts(){const el=$('drafts');el.replaceChildren();const a=drafts();if(!a.length){el.textContent='Todavía no has guardado ningún borrador.';return;}
 a.forEach((g,i)=>{const card=document.createElement('article');card.className='galCard';const title=document.createElement('h3');title.textContent=g.title;const info=document.createElement('p');info.textContent=`${new Date(g.date).toLocaleDateString('es-ES')} · ${bytes(g.html)} bytes`;const button=document.createElement('button');button.className='button tiny';button.textContent='Abrir';button.onclick=()=>{$('title').value=g.title;$('description').value=g.description;$('source').value=g.html;try{preview(g.html);}catch(e){note(e.message,true);}};const del=document.createElement('button');del.className='button tiny danger';del.textContent='Borrar';del.onclick=()=>{if(confirm('¿Borrar este borrador local?')){const next=drafts();next.splice(i,1);safeStorage(next);drawDrafts();}};card.append(title,info,button,del);el.append(card);});}
function input(){const title=safeTitle($('title').value),description=$('description').value.trim().slice(0,180),html=$('source').value;if(title.length<4)throw Error('Escribe un título de 4 a 60 caracteres.');if(!html.trim()||bytes(html)>MAX_BYTES)throw Error('El HTML debe tener contenido y pesar 45 KB como máximo.');return{title,description,html};}
$('templateClick').onclick=()=>{$('source').value=templates.click;$('title').value='Reflejos estelares';preview(templates.click);};
$('templateMaze').onclick=()=>{$('source').value=templates.maze;$('title').value='Micro-laberinto';preview(templates.maze);};
$('previewBtn').onclick=()=>{try{preview(input().html);note('Vista previa aislada actualizada.');}catch(e){note(e.message,true);}};
$('file').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;if(file.size>MAX_BYTES||!(/\.html?$/i.test(file.name)))return note('Solo archivos .html de 45 KB o menos.',true);try{$('source').value=await file.text();$('title').value=file.name.replace(/\.html?$/i,'').slice(0,60);preview($('source').value);note('Archivo cargado localmente, sin publicarlo.');}catch(e){note('Error leyendo el archivo.',true);}};
$('saveBtn').onclick=()=>{try{const g=input();const list=drafts();list.unshift({...g,date:Date.now()});if(safeStorage(list.slice(0,10))){drawDrafts();note('Borrador guardado en este navegador.');}}catch(e){note(e.message,true);}};
async function sdk(){const [{initializeApp,getApps},{getAuth},{getFirestore}]=await Promise.all([
 import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
 import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'),
 import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')]);
 const {firebaseConfig}=await import('./firebase-config.js');const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig);
 return{app,auth:getAuth(app),db:getFirestore(app)};}
$('publishBtn').onclick=async()=>{const b=$('publishBtn');if(b.disabled)return;b.disabled=true;try{const x=input();const {auth,db}=await sdk();if(!auth.currentUser)throw Error('Inicia sesión primero en IVANGUYS CONNECT en este navegador y vuelve aquí.');const {addDoc,collection,serverTimestamp}=await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
 const ref=await addDoc(collection(db,'ugc_games'),{...x,ownerId:auth.currentUser.uid,status:'pending',createdAt:serverTimestamp(),updatedAt:serverTimestamp()});note(`Proyecto enviado a revisión (ID ${ref.id.slice(0,7)}). No será público hasta que un moderador lo apruebe.`);
 }catch(e){console.error(e);note('No se pudo enviar: '+String(e.message||e).slice(0,220),true);}finally{b.disabled=false;}};
async function gallery(){const b=$('refresh');b.disabled=true;$('galleryStatus').textContent='Cargando galería…';try{const{db}=await sdk();const{query,collection,where,getDocs,limit}=await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');const snap=await getDocs(query(collection(db,'ugc_games'),where('status','==','approved'),limit(24)));const root=$('gallery');root.replaceChildren();
 if(snap.empty){$('galleryStatus').textContent='Todavía no hay juegos aprobados. Puedes probar las plantillas del laboratorio.';return;}
 $('galleryStatus').textContent=`${snap.size} juego(s) aprobado(s). Pulsa Jugar para cargarlos en el marco aislado.`;
 snap.forEach(doc=>{const g=doc.data(),card=document.createElement('article');card.className='galCard';const title=document.createElement('h3');title.textContent=g.title||'Juego';const desc=document.createElement('p');desc.textContent=g.description||'Sin descripción';const play=document.createElement('button');play.className='button tiny';play.textContent='▶ Jugar';play.onclick=()=>{if(typeof g.html!=='string'||bytes(g.html)>MAX_BYTES)return note('Este juego no cumple los límites.',true);preview(g.html);scrollTo({top:350,behavior:'smooth'});note(`Jugando a ${g.title} en un marco aislado.`);};card.append(title,desc,play);root.append(card);});
 }catch(e){$('galleryStatus').textContent='La galería online no está disponible. Puedes usar el editor y los borradores sin conexión. Detalle: '+String(e.message||e).slice(0,180);}
 finally{b.disabled=false;}}
$('refresh').onclick=gallery;$('source').value=templates.click;preview(templates.click);drawDrafts();gallery();
