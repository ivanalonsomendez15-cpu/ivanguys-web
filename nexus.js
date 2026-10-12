/* IVANGUYS NEXUS - beta local, no constituye una economia segura en un servidor. */
(()=>{'use strict';
const KEY='ivanguys_nexus_v4', VERSION=4;
const catalog=[
{id:'aura-violet',name:'Aura Violeta',icon:'💜',price:120,kind:'aura'},
{id:'aura-cyan',name:'Aura Cian',icon:'🩵',price:120,kind:'aura'},
{id:'aura-sun',name:'Aura Solar',icon:'☀️',price:180,kind:'aura'},
{id:'trail-ice',name:'Rastro Glacial',icon:'❄️',price:170,kind:'trail'},
{id:'trail-comet',name:'Rastro Cometa',icon:'☄️',price:220,kind:'trail'},
{id:'trail-pixel',name:'Rastro Pixel',icon:'🟪',price:170,kind:'trail'},
{id:'banner-stars',name:'Bandera Estelar',icon:'🌌',price:90,kind:'banner'},
{id:'banner-forest',name:'Bandera Bosque',icon:'🌲',price:90,kind:'banner'},
{id:'banner-arcade',name:'Bandera Arcade',icon:'🎮',price:150,kind:'banner'},
{id:'badge-sun',name:'Insignia Sol',icon:'🌞',price:130,kind:'badge'},
{id:'badge-moon',name:'Insignia Lunar',icon:'🌙',price:130,kind:'badge'},
{id:'badge-heart',name:'Insignia Amistad',icon:'💖',price:100,kind:'badge'},
{id:'badge-owl',name:'Insignia Sabiduría',icon:'🦉',price:220,kind:'badge'},
{id:'skin-neon',name:'Estela Neón',icon:'✨',price:220,kind:'trail'},
{id:'skin-orbit',name:'Estela Órbita',icon:'🪐',price:260,kind:'trail'},
{id:'emote-dance',name:'Emote Danza',icon:'🕺',price:150,kind:'emote'},
{id:'emote-wave',name:'Emote Saludo',icon:'👋',price:80,kind:'emote'},
{id:'emote-clap',name:'Emote Aplauso',icon:'👏',price:90,kind:'emote'},
{id:'aura-emerald',name:'Aura Esmeralda',icon:'💚',price:200,kind:'aura'},
{id:'aura-galaxy',name:'Aura Galaxia',icon:'🛸',price:300,kind:'aura'},
{id:'banner-rainbow',name:'Bandera Prisma',icon:'🌈',price:260,kind:'banner'},
{id:'badge-crown',name:'Corona Arcadiana',icon:'👑',price:350,kind:'badge'}];
const missions=[
['first','Bienvenido a IVANGUYS','Explora esta nueva sección.',45,'🌟'],
['creative','Arquitecto de aventuras','Visita Creator Lab y prueba un juego HTML.',75,'🏗️'],
['tagger','Explorador de Arena','Entra al juego 3D original.',70,'🕹️'],
['safe','Defensor de la comunidad','Lee las normas de seguridad del portal.',35,'🛡️'],
['gamer','Maratón Arcade','Prueba un juego diferente del Arcade.',65,'🎮'],
['world','Paseo tridimensional','Visita IVANGUYS WORLD.',65,'🌍'],
['social','Conexión de amigos','Visita CONNECT.',50,'🤝'],
['music','Rumbo al escenario','Revisa el especial Zelda.',40,'🎼'],
['collection','Primer cosmético','Revisa tu inventario.',40,'🎒'],
['capsule','Diseño de cápsulas','Descubre las recompensas de elección.',45,'🎁'],
['shop','Buen gusto','Explora las opciones de la tienda.',40,'🛍️'],
['market','Economía responsable','Lee cómo funciona el mercado de prueba.',45,'⚖️'],
['profile','Tu estilo','Elige la estética que más te guste.',50,'🎨'],
['learn','Aprendiz prudente','Lee los límites de los sistemas anti-trampas.',65,'🧠'],
['creator2','Nueva idea','Planea un minijuego original.',85,'💡'],
['friendship','Amistad positiva','Repasa buenas prácticas para jugar con otros.',50,'💬'],
['improve','Cazador de fallos','Comprueba el centro de seguridad.',50,'🔧'],
['return','Siguiente temporada','Visita la colección de cosméticos.',70,'🌠'],
['style','Personalización','Visita el equipamiento.',50,'💎'],
['journey','Veterano IVANGUYS','Completa tu visita a NEXUS.',100,'🏆']
].map(([id,title,desc,pts,icon])=>({id,title,desc,pts,icon}));
const capsules=[{id:'basic',name:'Cápsula Creativa',cost:1,items:['banner-stars','banner-forest','badge-heart']},{id:'neon',name:'Cápsula Neón',cost:2,items:['aura-violet','aura-cyan','trail-pixel']},{id:'epic',name:'Cápsula Galáctica',cost:3,items:['aura-galaxy','skin-orbit','badge-crown']}];
let state;
const $=id=>document.getElementById(id);
const btn=(text,act,disabled=false,cls='')=>`<button class="button ${cls}" data-action="${act}" ${disabled?'disabled':''}>${text}</button>`;
function fresh(){return{v:VERSION,points:0,completed:[],inventory:[],equipped:{},capsules:{basic:2,neon:0,epic:0},listings:[],history:[],events:[]};}
const validObj=x=>x&&typeof x==='object'&&!Array.isArray(x);
function normalize(obj){if(!validObj(obj))return fresh();const x=fresh();x.points=Number.isSafeInteger(obj.points)?Math.min(1000000,Math.max(0,obj.points)):0;x.completed=Array.isArray(obj.completed)?[...new Set(obj.completed.filter(y=>missions.some(m=>m.id===y)))]:[];x.inventory=Array.isArray(obj.inventory)?obj.inventory.filter(y=>catalog.some(i=>i.id===y)).slice(0,500):[];x.equipped=validObj(obj.equipped)?obj.equipped:{};x.capsules=validObj(obj.capsules)?Object.fromEntries(capsules.map(c=>[c.id,Math.min(99,Math.max(0,Number.isSafeInteger(obj.capsules[c.id])?obj.capsules[c.id]:0))])):x.capsules;x.listings=Array.isArray(obj.listings)?obj.listings.filter(y=>validObj(y)&&catalog.some(i=>i.id===y.item)&&Number.isSafeInteger(y.price)&&y.price>=1&&y.price<=100000).slice(0,50):[];x.history=Array.isArray(obj.history)?obj.history.slice(-60):[];return x;}
function load(){try{return normalize(JSON.parse(localStorage.getItem(KEY)||'null'));}catch(e){console.warn('Recuperando estado invalido',e);return fresh();}}
function persist(obj){try{localStorage.setItem(KEY,JSON.stringify(obj));return true;}catch(e){message('No se ha podido guardar. Revisa el almacenamiento del navegador.',true);return false;}}
function transaction(fn){let next=normalize(state);try{fn(next);if(!Number.isSafeInteger(next.points)||next.points<0||next.points>1000000)throw Error('Saldo fuera de límites.');if(next.inventory.length>500)throw Error('Inventario lleno.');if(!persist(next))return;state=next;render();}catch(e){message(e.message||'Operación rechazada.',true);}}
function message(txt,bad=false){$('status').textContent=txt;$('status').classList.toggle('bad',bad);}
const item=id=>catalog.find(x=>x.id===id);
function render(){
$('balance').textContent=state.points.toLocaleString('es-ES');$('missionStat').textContent=`${state.completed.length}/${missions.length} completadas`;
$('missionsGrid').innerHTML=missions.map(m=>`<article><span class="icon">${m.icon}</span><h3>${m.title}</h3><p>${m.desc}</p><span class="reward">+${m.pts} IV-PUNTOS</span><br>${btn(state.completed.includes(m.id)?'✓ Completada':'Completar demo',`mission:${m.id}`,state.completed.includes(m.id))}</article>`).join('');
$('capsulesGrid').innerHTML=capsules.map(c=>`<article><span class="icon">🎁</span><h3>${c.name}</h3><p>Disponibles: <b>${state.capsules[c.id]||0}</b></p><small>Recompensas garantizadas; elige una:</small>${c.items.map(x=>`<p>${item(x).icon} ${item(x).name} ${btn('Elegir',`capsule:${c.id}:${x}`,!(state.capsules[c.id]>0),'tiny')}</p>`).join('')}</article>`).join('');
$('shopGrid').innerHTML=catalog.map(i=>`<article><span class="icon">${i.icon}</span><h3>${i.name}</h3><small>Tipo: ${i.kind}</small><span class="reward">${i.price} IV-PUNTOS</span><br>${btn('Comprar',`buy:${i.id}`,state.points<i.price)}</article>`).join('');
$('invCount').textContent=`${state.inventory.length} objetos`;
const groups=Object.entries(state.inventory.reduce((r,id)=>{r[id]=(r[id]||0)+1;return r;},{}));
$('inventoryGrid').innerHTML=groups.length?groups.map(([id,count])=>{const i=item(id);return`<article><span class="icon">${i.icon}</span><h3>${i.name}</h3><p>Disponibles: ${count}</p><small>${state.equipped[i.kind]===id?'★ EQUIPADO':'Cosmético · no afecta al juego'}</small>${btn('Equipar',`equip:${id}`,false,'tiny')}${btn('Publicar oferta local',`sell:${id}`,false,'tiny secondary')}</article>`}).join(''):'<p>No tienes objetos. Obtén uno con una cápsula o en la tienda.</p>';
$('myListings').innerHTML=state.listings.length?state.listings.map((l,idx)=>`<div class="listing"><strong>${item(l.item).icon} ${item(l.item).name}</strong> · ${l.price} IV-PUNTOS · oferta ${idx+1}<div>${btn('Retirar anuncio',`cancel:${idx}`,false,'tiny')}</div></div>`).join(''):'<p class="sub">No tienes anuncios. Publica un objeto desde el inventario.</p>';
$('marketHistory').innerHTML=state.history.length?state.history.slice().reverse().slice(0,15).map(x=>`<div class="listing">${String(x).replaceAll('<','&lt;')}</div>`).join(''):'<p class="sub">Aquí aparecerán compras, recompensas y anuncios locales. No hay compradores ficticios.</p>';
}
function addHistory(s){state.history.push(s);state.history=state.history.slice(-60);}
function handleAction(action){const [op,a,c]=action.split(':');
if(op==='mission'){const m=missions.find(x=>x.id===a);if(!m||state.completed.includes(m.id))return;transaction(s=>{s.completed.push(m.id);s.points+=m.pts;if(s.completed.length%5===0)s.capsules.neon=Math.min(99,(s.capsules.neon||0)+1);s.history.push(`Misión ${m.title}: +${m.pts} puntos`);});message(`¡Misión completada! +${m.pts} puntos (demo).`);}
if(op==='capsule'){if(!capsules.some(x=>x.id===a&&x.items.includes(c)))return;transaction(s=>{if(!s.capsules[a])throw Error('No tienes cápsulas.');s.capsules[a]--;s.inventory.push(c);s.history.push(`Cápsula: ${item(c).name}`);});message('Recompensa elegida añadida al inventario.');}
if(op==='buy'){const i=item(a);if(!i)return;transaction(s=>{if(s.points<i.price)throw Error('Saldo insuficiente.');s.points-=i.price;s.inventory.push(i.id);s.history.push(`Compra: ${i.name}, -${i.price}`);});message('Cosmético adquirido.');}
if(op==='equip'){const i=item(a);if(!i||!state.inventory.includes(a))return;transaction(s=>{s.equipped[i.kind]=a;});message('Cosmético equipado.');}
if(op==='sell'){const i=item(a);if(!i||!state.inventory.includes(a))return;const entered=prompt(`Precio de anuncio LOCAL para ${i.name} (1–100000 IV-PUNTOS):`,String(i.price));if(entered===null)return;const price=Number(entered);transaction(s=>{if(!Number.isSafeInteger(price)||price<1||price>100000)throw Error('El precio debe ser un entero válido.');const index=s.inventory.indexOf(a);if(index<0)throw Error('Objeto no disponible.');s.inventory.splice(index,1);s.listings.push({item:a,price,created:Date.now()});s.history.push(`Oferta creada: ${i.name} por ${price} puntos`);});message('Anuncio de prueba creado. Sin transacciones con otros usuarios.');}
if(op==='cancel'){const i=Number(a);transaction(s=>{if(!Number.isSafeInteger(i)||!s.listings[i])throw Error('Oferta no disponible.');const [l]=s.listings.splice(i,1);s.inventory.push(l.item);s.history.push(`Oferta cancelada: ${item(l.item).name}`);});message('Objeto devuelto al inventario.');}
}
$('missionsGrid').addEventListener('click',e=>{const target=e.target.closest('[data-action]');if(target)handleAction(target.dataset.action);});
['capsulesGrid','shopGrid','inventoryGrid','myListings'].forEach(name=>$(name).addEventListener('click',e=>{const target=e.target.closest('[data-action]');if(target)handleAction(target.dataset.action);}));
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('selected',x===b));document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('hidden',x.id!==b.dataset.tab));}));
$('exportBtn').onclick=()=>{const data=JSON.stringify(state,null,2);const url=URL.createObjectURL(new Blob([data],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='ivanguys-nexus-datos-locales.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('resetBtn').onclick=()=>{if(!confirm('¿Borrar puntos, misiones y cosméticos SOLO de este navegador?'))return;state=fresh();persist(state);render();message('Progreso de Nexus reiniciado.');};
window.addEventListener('error',e=>message('Error de interfaz: '+String(e.message||'desconocido').slice(0,120),true));
state=load();render();
window.IVANGUYS_NEXUS_TEST={getState:()=>JSON.parse(JSON.stringify(state)),catalogCount:catalog.length,missionCount:missions.length};
})();
