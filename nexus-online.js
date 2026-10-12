/* Economy online is entirely separate from the local demo; server validates all writes. */
const $=id=>document.getElementById(id);
const labels={
 'aura-violet':['Aura Violeta','💜'],'aura-cyan':['Aura Cian','🩵'],'aura-sun':['Aura Solar','☀️'],
 'trail-ice':['Rastro Glacial','❄️'],'trail-comet':['Rastro Cometa','☄️'],'trail-pixel':['Rastro Pixel','🟪'],
 'banner-stars':['Bandera Estelar','🌌'],'banner-forest':['Bandera Bosque','🌲'],'banner-arcade':['Bandera Arcade','🎮'],
 'badge-sun':['Insignia Sol','🌞'],'badge-moon':['Insignia Lunar','🌙'],'badge-heart':['Insignia Amistad','💖'],
 'badge-owl':['Insignia Sabiduría','🦉'],'skin-neon':['Estela Neón','✨'],'skin-orbit':['Estela Órbita','🪐'],
 'emote-dance':['Emote Danza','🕺'],'emote-wave':['Emote Saludo','👋'],'emote-clap':['Emote Aplauso','👏'],
 'aura-emerald':['Aura Esmeralda','💚'],'aura-galaxy':['Aura Galaxia','🛸'],'banner-rainbow':['Bandera Prisma','🌈'],
 'badge-crown':['Corona Arcadiana','👑']};
const shop={'aura-violet':120,'aura-cyan':120,'aura-sun':180,'trail-ice':170,'trail-comet':220,'trail-pixel':170,'banner-stars':90,'banner-forest':90,'banner-arcade':150,'badge-sun':130,'badge-moon':130,'badge-heart':100,'badge-owl':220,'skin-neon':220,'skin-orbit':260,'emote-dance':150,'emote-wave':80,'emote-clap':90,'aura-emerald':200,'aura-galaxy':300,'banner-rainbow':260,'badge-crown':350};
const missions=[['welcome','Bienvenida',35,'Una vez por cuenta'],['daily','Acceso diario',15,'Una vez por día'],['first_friend','Primer amigo',95,'Requiere una amistad aceptada'],['first_approved_game','Creador aprobado',140,'Requiere un juego HTML aprobado'],['collector','Coleccionista',70,'Requiere un objeto de inventario']];
let user=null,fn=null,loadState=null,current={wallet:{points:0},items:[],mine:[],market:[]},busy=false;
const name=sku=>labels[sku]?.[0]||'Objeto';const icon=sku=>labels[sku]?.[1]||'🎮';
function info(s,failed=false){$('onlineStatus').textContent=s;$('onlineStatus').style.color=failed?'#f9a7b3':'#93e9df';}
function el(tag,content='',cls=''){const e=document.createElement(tag);if(content)e.textContent=content;if(cls)e.className=cls;return e;}
function action(label,callback){const b=el('button',label,'button tiny');b.addEventListener('click',async()=>{if(busy)return;busy=true;b.disabled=true;try{await callback();}catch(e){info('Error de la función online: '+String(e.message||e).slice(0,180),true);}finally{busy=false;b.disabled=false;}});return b;}
function card(title,sub,actions){const a=el('article');a.append(el('h3',title),el('p',sub));for(const b of actions)a.append(b);return a;}
async function start(){info('Conectando con Firebase Authentication…');const[{initializeApp,getApps},{getAuth},{getFunctions,httpsCallable},{firebaseConfig}]=await Promise.all([
 import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
 import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'),
 import('https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js'),
 import('./firebase-config.js')]);
 const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig),auth=getAuth(app);
 await auth.authStateReady();user=auth.currentUser;
 if(!user){info('No has iniciado sesión. Abre CONNECT, entra con tu cuenta y vuelve aquí.',true);return;}
 const functions=getFunctions(app,'europe-west1');fn=(name,data={})=>httpsCallable(functions,name)(data).then(x=>x.data);info('Autenticación correcta. Conectando con las funciones verificadas…');await refresh();}
async function refresh(){if(!fn)return info('Pulsa Conectar mi cuenta CONNECT primero.',true);current=await fn('nexusGetState');paint();info('Datos globales actualizados. Todas las operaciones online las valida el servidor.');}
function paint(){
 $('onlineBalance').textContent=Number(current.wallet?.points||0).toLocaleString('es-ES');$('onlineCaps').textContent='Cápsulas de elección: '+JSON.stringify(current.wallet?.capsules||{});
 const quests=$('onlineMissions');quests.replaceChildren();for(const [id,title,points,desc] of missions)quests.append(card('🎯 '+title,'+'+points+' IV-PUNTOS · '+desc,[action('Solicitar recompensa',async()=>{await fn('nexusClaimMission',{mission:id});await refresh();})]));
 const inventory=$('onlineInventory');inventory.replaceChildren();if(!current.items?.length)inventory.textContent='Aún no tienes cosméticos online.';
 for(const i of current.items||[]){const buttons=[];if(i.state==='owned')buttons.push(action('Publicar en mercado',async()=>{const value=prompt('Precio en puntos virtuales (1 a 100000):','100');if(value===null)return;const price=Number(value);if(!Number.isSafeInteger(price)||price<1||price>100000)throw Error('Precio no válido.');await fn('nexusListItem',{itemId:i.id,price});await refresh();}));inventory.append(card(icon(i.sku)+' '+name(i.sku),'Estado: '+i.state,buttons));}
 const s=$('onlineShop');s.replaceChildren();for(const [sku,price] of Object.entries(shop))s.append(card(icon(sku)+' '+name(sku),price+' IV-PUNTOS',[action('Comprar',async()=>{await fn('nexusBuyCosmetic',{item:sku});await refresh();})]));
 const market=$('onlineListings');market.replaceChildren();if(!current.market?.filter(x=>x.status==='active').length)market.textContent='Todavía no hay anuncios activos.';
 for(const l of current.market||[]){if(l.status!=='active')continue;const mine=l.sellerId===user?.uid;
 market.append(card(icon(l.sku)+' '+name(l.sku),l.price+' IV-PUNTOS · '+(mine?'Tu anuncio':'Anuncio de jugador'),[action(mine?'Cancelar anuncio':'Adquirir con puntos',async()=>{if(mine)await fn('nexusCancelListing',{listingId:l.id});else if(confirm('¿Comprar este cosmético por '+l.price+' IV-PUNTOS virtuales?'))await fn('nexusBuyListing',{listingId:l.id});await refresh();})]));}
 const ownCaps=$('onlineCaps');if(current.wallet?.capsules){const have=Object.entries(current.wallet.capsules).filter(([_,n])=>n>0);if(have.length){const section=el('div');section.append(el('h3','Canjear cápsulas gratuitas con premio a elegir'));
 const choices={basic:['banner-stars','banner-forest','badge-heart'],neon:['aura-violet','aura-cyan','trail-pixel'],epic:['aura-galaxy','skin-orbit','badge-crown']};
 for(const [k,n] of have){const p=el('p',`${k}: ${n} cápsulas · Elige el premio (sin azar)`);section.append(p);for(const sku of choices[k]||[])section.append(action(icon(sku)+' '+name(sku),async()=>{await fn('nexusOpenCapsule',{capsule:k,item:sku});await refresh();}));}
 const old=document.getElementById('onlineCapsActions');if(old)old.remove();section.id='onlineCapsActions';ownCaps.after(section);}
 else document.getElementById('onlineCapsActions')?.remove();}
}
$('onlineConnect').addEventListener('click',()=>start().catch(e=>info('No se pudo conectar: '+String(e.message||e).slice(0,230)+'. Comprueba que hayas desplegado las Functions de Firebase.',true)));
$('onlineRefresh').addEventListener('click',()=>refresh().catch(e=>info('Error: '+String(e.message||e),true)));
