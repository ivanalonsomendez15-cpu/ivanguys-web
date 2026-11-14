/* NOCHEPOLAR — expansión jugable acumulativa, noviembre 2026.
   Sobre la adaptación independiente de Santa Tracker. No modifica el original.
   Todas las partidas, el avatar y los sellos se guardan solo en este navegador. */
(() => {
'use strict';
const STORE='np:world:v1:', kinds=['tren','elfo','clima','pasaporte'];
const glyph=['❄','✦','✧','🎁','🦌','🔔','🎄','🌟','🛷','🐧'];
const h=(tag,text='',cl='')=>{const el=document.createElement(tag);if(text)el.textContent=text;if(cl)el.className=cl;return el};
const b=(text,fn,cl='npw-btn')=>{const el=h('button',text,cl);el.type='button';el.addEventListener('click',fn);return el};
const keep=(key,value)=>{try{localStorage.setItem(STORE+key,JSON.stringify(value))}catch(e){}};
const read=(key,fallback)=>{try{const v=localStorage.getItem(STORE+key);return v===null?fallback:JSON.parse(v)}catch(e){return fallback}};
const date=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const seasonNames=['Ferrocarril de la aurora','Ciudad bajo la nieve','Noche de los ocho cometas','Fábrica imposible',
'Campeonato de los renos','Expedición de los faros','Orquesta de las estrellas','Festival de la gran víspera'];
const palettes=['#36b3ad','#eeb551','#7f76c7','#e46c8b','#52a2cc','#49b98e','#b770b3','#dc755a'];
const p=(text,cl='')=>h('p',text,cl);
const heading=(title,desc,icon)=>{
 const head=h('div','','npw-head');
 head.append(h('div',icon,'npw-head-icon'),h('h2',title),p(desc,'npw-head-desc'));
 return head;
};
const svgText=(x,y,label)=>'<text x="'+x+'" y="'+y+'" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="800" fill="#fff">'+label+'</text>';
const makeScene=(kind)=>{
 if(kind==='cine')return '<svg viewBox="0 0 900 330" role="img" aria-label="Sala de cine con escenario y butacas">'+
 '<rect width="900" height="330" fill="#92365e"/><path d="M0 0h110v330H0ZM790 0h110v330H790Z" fill="#cf5073"/>'+
 '<rect x="160" y="26" width="580" height="208" rx="18" fill="#f8d58b"/><rect x="176" y="42" width="548" height="171" rx="8" fill="#346db3"/>'+
 '<circle cx="450" cy="121" r="58" fill="#f4bb8e"/><path d="M387 115L450 31L515 116Z" fill="#ef5a72"/>'+
 '<path d="M410 140q40 35 80 0" fill="none" stroke="#9d485d" stroke-width="8"/>'+
 '<path d="M0 247h900v83H0" fill="#592b5c"/>'+
 Array.from({length:9},(_,i)=>'<rect x="'+(25+i*102)+'" y="'+(254+i%2*8)+'" width="78" height="70" rx="20" fill="'+(i%2?'#ed7392':'#7c66b4')+'" stroke="#ffcd88" stroke-width="6"/>').join('')+'</svg>';
 if(kind==='arcade')return '<svg viewBox="0 0 900 330" role="img" aria-label="Sala de recreativos con máquinas de videojuegos">'+
 '<rect width="900" height="330" fill="#4a57aa"/><path d="M0 265h900v65H0" fill="#2dbbcb"/>'+
 Array.from({length:5},(_,i)=>'<g transform="translate('+(50+i*170)+' 35)">'+
 '<path d="M5 50h120l10 230H0Z" fill="'+palettes[i]+'" stroke="#ffe4a0" stroke-width="9"/>'+
 '<rect x="18" y="63" width="96" height="112" rx="8" fill="#183e83"/>'+
 '<rect x="28" y="71" width="77" height="83" fill="#61d5dd"/>'+
 '<circle cx="65" cy="110" r="23" fill="#ffe0a4"/><circle cx="61" cy="104" r="8" fill="#e85c73"/>'+
 '<rect x="25" y="183" width="81" height="51" rx="8" fill="#f4e1a6"/>'+
 '<circle cx="85" cy="206" r="8" fill="#e45274"/><path d="M42 194v24M30 206h24" stroke="#3e7cbd" stroke-width="7"/>'+
 '</g>').join('')+'</svg>';
 if(kind==='pasaporte')return '<svg viewBox="0 0 900 330" role="img" aria-label="Oficina de pasaportes con sellos y libros">'+
 '<rect width="900" height="330" fill="#5e9cb7"/><path d="M0 235H900V330H0Z" fill="#e2ba7c"/>'+
 Array.from({length:6},(_,i)=>'<g transform="translate('+(45+i*144)+' 44)">'+
 '<rect width="115" height="155" rx="13" fill="'+palettes[i]+'" stroke="#fff1bd" stroke-width="9"/>'+
 '<circle cx="57" cy="76" r="34" fill="#ffdc88"/><path d="M57 48v56M34 76h46" stroke="#5187a6" stroke-width="7"/>'+
 '</g>').join('')+svgText(450,283,'PASAPORTES Y SELLOS')+'</svg>';
 return '<svg viewBox="0 0 900 330" role="img" aria-label="Taller de aventuras con regalos y estrellas">'+
 '<rect width="900" height="330" fill="#569bd3"/><path d="M0 240h900v90H0" fill="#3e70ae"/>'+
 Array.from({length:9},(_,i)=>'<g transform="translate('+(i*108+15)+' '+(90+i%2*36)+')">'+
 '<rect width="82" height="83" rx="8" fill="'+palettes[i%8]+'"/><path d="M36 0v83M0 39h82" stroke="#ffe8a1" stroke-width="12"/>'+
 '</g>').join('')+'<path d="M0 260H900" stroke="#f9ca7a" stroke-width="14"/></svg>';
};
function interior(host,kind,open){
 const titles={cine:'Cine Polar',arcade:'Arcade Polar',aventuras:'Centro de aventuras',pasaporte:'Oficina de pasaportes'};
 const prompts={cine:'Una sala de proyección, butacas y aventuras animadas.',arcade:'Las máquinas de juegos funcionan durante toda la temporada.',aventuras:'Cada fecha te lleva a una misión diferente.',pasaporte:'Reúne los recuerdos de tus grandes expediciones.'};
 const wrap=h('section','','npw-interior');
 wrap.append(heading(titles[kind]||'La aldea',prompts[kind]||'¡Bienvenido!',kind==='cine'?'🎬':kind==='arcade'?'🎮':kind==='pasaporte'?'🏅':'🎁'));
 const art=h('div','','npw-interior-art');art.innerHTML=makeScene(kind);wrap.append(art);
 // Cada sala incluye un reto propio de encontrar tres objetos.
 const key='room-'+kind, collected=read(key,[]);
 const props={cine:['🎟️','🎞️','🍿'],arcade:['🕹️','⭐','🏆'],aventuras:['🧭','🎁','🔔'],pasaporte:['📬','🗝️','🏅']}[kind]||['🌟','🎁','🔔'];
 const note=p('Busca los tres secretos de la sala: '+collected.length+'/3','npw-room-note');
 const spots=h('div','','npw-room-props');
 props.forEach((symbol,i)=>{
   const button=b(collected.includes(i)?'✓':symbol,()=>{
     if(collected.includes(i))return;
     collected.push(i);keep(key,collected);
     button.textContent='✓';button.classList.add('collected');
     note.textContent=collected.length===3?'🏅 ¡Has encontrado todos los secretos!':'Secretos encontrados: '+collected.length+'/3';
   },'npw-room-prop'+(collected.includes(i)?' collected':''));
   button.setAttribute('aria-label','Encontrar objeto '+(i+1));
   spots.append(button);
 });
 art.append(spots);wrap.append(note);
 const actions=h('div','','npw-interior-actions');
 if(kind==='cine'){actions.append(b('🎥 Ver la cartelera',()=>host.querySelector('.np-hub-cards')?.scrollIntoView({behavior:'smooth'}),'npw-btn npw-red'),b('🚂 Visitar el tren',()=>open('train')))}
 if(kind==='arcade'){actions.append(b('🦌 Reno Express',()=>open('reno'),'npw-btn npw-red'),b('💡 Circuitos del Polo',()=>open('circuito')))}
 if(kind==='aventuras'){actions.append(b('🎪 Grandes eventos',()=>open('weekly'),'npw-btn npw-red'),b('🚂 Tren Polar',()=>open('train')))}
 if(kind==='pasaporte'){actions.append(b('🧝 Vestir a mi elfo',()=>open('elfo'),'npw-btn npw-red'),b('🚂 Tren Polar',()=>open('train')))}
 wrap.append(actions);host.append(wrap);
}
const stations=[
 {n:'Taller de regalos',icon:'🎁',action:'calendar'},
 {n:'Cine Polar',icon:'🎬',action:'cine'},
 {n:'Arcade',icon:'🎮',action:'arcade'},
 {n:'Plaza de las aventuras',icon:'🌟',action:'weekly'},
 {n:'Oficina de sellos',icon:'🏅',action:'passport'},
 {n:'Estación de Oriente',icon:'👑',action:'kings'}
];
function feature(root,kind,open,back){
 root.replaceChildren();const shell=h('section','','npw-feature');
 const backBtn=b('← Volver a la aldea',back,'npw-btn');shell.append(backBtn);
 if(kind==='tren'){
   shell.append(heading('🚂 Tren Polar','Sube al tren, recorre las seis estaciones y visita cualquiera de los destinos.','🚂'));
   const index=Math.max(0,Math.min(5,read('train',0)));
   let position=index;
   const rail=h('div','','npw-train-scene');
   rail.innerHTML='<div class="npw-scenery"><span>🌲</span><span>🏠</span><span>🎄</span><span>🏰</span></div>'+
     '<div class="npw-scenery-ground"></div><div class="npw-train-engine" aria-hidden="true">🚂<span>🎁</span></div><div class="npw-tracks"></div>';
   const train=rail.querySelector('.npw-train-engine'),label=h('h3','','npw-station'),counter=p('','npw-progress');
   const stops=h('div','','npw-stops');
   let locked=false;
   const render=()=>{label.textContent=stations[position].icon+' '+stations[position].n;counter.textContent='Estación '+(position+1)+' de 6';
    train.style.left=(10+position*13)+'%';stops.replaceChildren();
    stations.forEach((s,i)=>stops.append(b((i===position?'● ':'○ ')+s.n,()=>travel(i),'npw-stop'+(position===i?' is-current':''))))};
   const travel=i=>{if(locked||i===position)return;locked=true;position=i;keep('train',i);render();
    // El cambio de estación es interactivo y sin esperas obligatorias.
    locked=false};
   render();
   shell.append(rail,label,counter,stops);
   const go=b('Visitar la estación seleccionada',()=>open(stations[position].action),'npw-btn npw-red');shell.append(go);
   const setGo=()=>go.textContent='Visitar '+stations[position].n;
   stops.addEventListener('click',setGo);setGo();
 } else if(kind==='elfo'){
   shell.append(heading('🧝 Mi elfo','Viste a tu ayudante y guarda su aspecto para las futuras aventuras.','🧝'));
   const data=Object.assign({coat:0,hat:0,accessory:0},read('avatar',{}));
   const coats=['#e85b72','#3eaf9a','#7c75c4','#eab54c','#4e9ece'];
   const hats=['#ec5d71','#31a98d','#a773be','#f0ba58'];
   const accessory=['🎁','🔔','⭐','🎄','🎵'];
   const preview=h('div','','npw-elf-preview');
   const render=()=>{
     preview.innerHTML='<svg viewBox="0 0 280 285" role="img" aria-label="Tu elfo vestido"><ellipse cx="140" cy="272" rx="65" ry="12" fill="#23849b50"/>'+
       '<path d="M112 195L106 267M169 195L175 267" stroke="#34426c" stroke-width="21" stroke-linecap="round"/>'+
       '<path d="M87 265H124M160 265H198" stroke="#39406f" stroke-width="19" stroke-linecap="round"/>'+
       '<rect x="87" y="128" width="106" height="95" rx="30" fill="'+coats[data.coat]+'"/>'+
       '<path d="M98 142l-28 60M183 141l27 61" stroke="#e2a875" stroke-width="20" stroke-linecap="round"/>'+
       '<ellipse cx="140" cy="111" rx="67" ry="59" fill="#e8b784"/>'+
       '<path d="M70 88L139 9L206 91Z" fill="'+hats[data.hat]+'"/>'+
       '<path d="M75 91Q140 70 204 91" stroke="#fff5dc" stroke-width="15" fill="none"/>'+
       '<circle cx="140" cy="14" r="15" fill="#fff4c3"/>'+
       '<circle cx="115" cy="112" r="6" fill="#312d45"/><circle cx="159" cy="112" r="6" fill="#312d45"/>'+
       '<path d="M121 137Q141 152 159 134" stroke="#9b5257" stroke-width="6" stroke-linecap="round" fill="none"/>'+
       '<path d="M100 190H180" stroke="#ffe0a7" stroke-width="13"/>'+
       '<text x="217" y="207" text-anchor="middle" font-size="39">'+accessory[data.accessory]+'</text></svg>';
     keep('avatar',data);
   };
   shell.append(preview);
   const controls=h('div','','npw-avatar-options');
   const types=[['Abrigo','coat',coats],['Gorro','hat',hats],['Accesorio','accessory',accessory]];
   types.forEach(([label,key,colors])=>{
      const field=h('div','','npw-field');field.append(h('h3',label));
      const row=h('div','','npw-options');
      colors.forEach((color,i)=>{const btn=b(key==='accessory'?color:'●',()=>{data[key]=i;render();draw()},'npw-choice');
       if(key!=='accessory')btn.style.color=color;row.append(btn)});
      const draw=()=>Array.from(row.children).forEach((el,i)=>el.classList.toggle('chosen',i===data[key]));
      draw();field.append(row);controls.append(field);
   });
   shell.append(controls);render();
 } else if(kind==='clima'){
   shell.append(heading('🌦 El tiempo en Nochepolar','Cambia el ambiente de la aldea, o deja que siga la hora peninsular.','🌤️'));
   const options=[['auto','🕰️ Automático'],['day','☀️ Día'],['night','🌙 Noche'],['snow','❄️ Nevada'],['aurora','🌌 Aurora']];
   const current=read('climate','auto');
   const sample=h('div','','npw-weather-scene');shell.append(sample);
   const row=h('div','','npw-options');
   const update=v=>{
     keep('climate',v);
     sample.className='npw-weather-scene climate-'+v;
     sample.textContent={auto:'✨ La aldea sigue el reloj de España',day:'☀️ Día luminoso en el taller',night:'🌙 Se encienden las luces de la aldea',snow:'❄️ Copos sobre las calles',aurora:'🌌 Luces en el cielo polar'}[v];
     Array.from(row.children).forEach((x,i)=>x.classList.toggle('chosen',options[i][0]===v));
     window.postMessage({source:'nochepolar-world',type:'climate-changed',value:v},location.origin);
     const frames=Array.from(document.querySelectorAll('santa-gameloader')).flatMap(el=>Array.from(el.shadowRoot?.querySelectorAll('iframe')||[]));
     frames.forEach(frame=>{try{frame.contentWindow?.postMessage({source:'nochepolar-world',type:'climate-changed',value:v},location.origin)}catch(e){}});
   };
   options.forEach(([val,label])=>row.append(b(label,()=>update(val),'npw-btn')));
   shell.append(row);update(current);
 } else if(kind==='pasaporte'){
   shell.append(heading('🏅 Mi gran pasaporte','Guarda aventuras, especiales y recuerdos de la temporada en este dispositivo.','📕'));
   passport(shell,read('passport-context',{}));
 } else {
   shell.append(heading('Nochepolar','Escoge una nueva aventura.','🌟'));
 }
 root.append(shell);
}
function passport(root,context={}){
 const completedDays=context.completedDays||[];
 const weekly=Array.from({length:8},(_,i)=>({
   name:seasonNames[i],base:Math.max(0,Number(localStorage.getItem('nochepolar:special:2026-27:w'+i))||0),
   bonus:read('bonus-weekly-'+i,0)
 }));
 const kings=Array.from({length:2},(_,i)=>({
   name:i===0?'Cabalgata de Reyes':'Día de Reyes',
   base:Math.max(0,Number(localStorage.getItem('nochepolar:special:2026-27:k'+i))||0),
   bonus:read('bonus-kings-'+i,0)
 }));
 const ticket=read('train',null),elf=read('avatar',null),secrets=read('village-secrets',[]);
 const count=completedDays.length+weekly.filter(x=>x.base===3&&x.bonus===2).length+kings.filter(x=>x.base===3&&x.bonus===2).length;
 const stats=h('div','','npw-passport-stats');
 [['Aventuras',completedDays.length+'/55'],['Eventos completos',weekly.filter(x=>x.base===3&&x.bonus===2).length+'/8'],
 ['Reyes',kings.filter(x=>x.base===3&&x.bonus===2).length+'/2'],['Insignias',String(count)]].forEach(([name,value])=>{
  const cell=h('div','','npw-stat');cell.append(h('strong',value),p(name));stats.append(cell);
 });
 root.append(stats);
 const album=h('div','','npw-album');
 const stickers=[
   ...completedDays.map(d=>({name:'Día '+(d.i+1)+' · '+d.name,icon:glyph[d.i%glyph.length],earned:true})),
   ...weekly.map((v,i)=>({name:seasonNames[i],icon:['🚂','🏰','☄️','⚙️','🦌','🌍','🎼','🎄'][i],earned:v.base===3&&v.bonus===2})),
   ...kings.map((v,i)=>({name:v.name,icon:i?'🎁':'👑',earned:v.base===3&&v.bonus===2})),
   {name:'Tren Polar',icon:'🚂',earned:ticket!==null},
   {name:'Mi elfo',icon:'🧝',earned:!!elf},
   ...secrets.map((n)=>({name:['Copo secreto','Sello del taller','Estrella del tren','Chispa de Navidad'][n]||'Secreto',icon:'✦',earned:true})),
   ...['cine','arcade','aventuras','pasaporte'].map(k=>({name:'Sala '+k,icon:'✨',earned:read('room-'+k,[]).length===3}))
 ];
 stickers.forEach(v=>{
   const cell=h('div','','npw-sticker'+(v.earned?' earned':''));
   cell.append(h('span',v.earned?v.icon:'✧'),p(v.name));album.append(cell);
 });
 root.append(album);
 const footer=p('Los sellos aparecen cuando completas sus actividades. Guardado local en este navegador.','npw-note');
 root.append(footer);
}
function extraDay({box,day,title,next}){
 const key='day-'+day;
 if(read(key,false)){next();return{dispose(){}}}
 let live=true;
 const index=day%6,seed=day*13+7,letter=title.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]/g,'').trim();
 const names=['Código de la aldea','Cristales giratorios','Correo del Polo','Secuencia de luces','Camino de estrellas','Taller de engranajes'];
 const prompts=[
 'Activa las cuatro señales de la máquina en el orden marcado.',
 'Encuentra el símbolo distinto entre los cristales.',
 'Elige los sobres correctos para completar el envío.',
 'Memoriza el patrón y repítelo.',
 'Sigue las balizas que iluminan el camino.',
 'Repara tres piezas de un invento del taller.'
 ];
 let step=0;
 const stages=[names[index],prompts[index]];
 const card=h('section','','npw-daily npw-feature');
 const titleEl=heading('Misión especial: '+title,stages[1],glyph[day%glyph.length]);
 card.append(titleEl);
 const progress=p('Prueba especial del día '+(day+1)+' de 55','npw-progress');
 const field=h('div','','npw-daily-field');
 card.append(progress,field);
 const done=()=>{
   if(!live)return;
   keep(key,true);field.replaceChildren(heading('¡Sello conseguido!',letter+' ya tiene su primera insignia.','⭐'),
     b('Continuar con la gran aventura',next,'npw-btn npw-red'));
 };
 function draw(){
   if(!live)return;
   field.replaceChildren();
   if(index===0||index===4){
     const order=[(seed%4)+1,((seed+2)%4)+1,((seed+1)%4)+1,((seed+3)%4)+1];
     const cue=p('Pulsa las señales en este orden: '+order.join(' → '),'npw-code');field.append(cue);
     const row=h('div','','npw-puzzle-row');
     for(let i=1;i<=4;i++)row.append(b(index===0?['','🔔','⭐','🎁','❄️'][i]:'✦ '+i,()=>{
       if(order[step]===i){step++;progress.textContent='Señales '+step+'/4';if(step===4)done()}
       else{step=0;progress.textContent='Prueba de nuevo desde la primera señal'}
     }));
     field.append(row);
   }else if(index===1){
     const goal=(seed%7)+1;
     field.append(p('Busca el cristal '+goal+'.','npw-code'));
     const row=h('div','','npw-puzzle-row');
     for(let i=1;i<=8;i++)row.append(b((i===goal?'💎 ':'❄️ ')+i,()=>{if(i===goal)done();else progress.textContent='Ese cristal no coincide'}));
     field.append(row);
   }else if(index===2){
     const symbols=['🎁','🛷','⭐','🎄','🔔','❄️'];
     const wanted=[seed%6,(seed+2)%6,(seed+4)%6];
     field.append(p('Entrega: '+wanted.map(i=>symbols[i]).join(' → '),'npw-code'));
     const row=h('div','','npw-puzzle-row');
     symbols.forEach((symbol,i)=>row.append(b(symbol,()=>{
       if(wanted[step]===i){step++;progress.textContent='Paquetes '+step+'/3';if(step===3)done()}
       else {step=0;progress.textContent='Revisa el orden de los paquetes'}
     })));
     field.append(row);
   }else if(index===3){
     const colors=['🔴','🟡','🟢','🔵'],seq=Array.from({length:4},(_,j)=>(seed+j*3)%4);
     field.append(p('Partitura: '+seq.map(i=>colors[i]).join(' '),'npw-code'));
     const row=h('div','','npw-puzzle-row');
     colors.forEach((col,i)=>row.append(b(col,()=>{
       if(seq[step]===i){step++;progress.textContent='Luces '+step+'/4';if(step===4)done()}
       else{step=0;progress.textContent='Vuelve a empezar la secuencia'}
     })));
     field.append(row);
   }else{
     const pieces=['⚙️','💎','🔔','⏰','🧰'],answer=[seed%5,(seed+1)%5,(seed+3)%5];
     field.append(p('Montaje: '+answer.map(i=>pieces[i]).join(' → '),'npw-code'));
     const row=h('div','','npw-puzzle-row');
     pieces.forEach((piece,i)=>row.append(b(piece,()=>{
       if(answer[step]===i){step++;progress.textContent='Piezas '+step+'/3';if(step===3)done()}
       else{step=0;progress.textContent='Comprueba el plano de montaje'}
     })));
     field.append(row);
   }
 }
 draw();box.replaceChildren(card);
 return {dispose(){live=false}};
}
function bonus(root,kind,index,active,back){
 const key='bonus-'+kind+'-'+index;
 let count=Math.max(0,Math.min(2,read(key,0)));
 const themed=kind==='kings'?(index===0?'Cabalgata de Oriente':'La mañana de los regalos'):seasonNames[index];
 const badge=kind==='kings'?'👑':['🚂','🏰','☄️','⚙️','🦌','🌍','🎼','🎄'][index];
 const intro=h('section','','npw-bonus');
 const render=()=>{
   intro.replaceChildren();
   intro.append(heading('🌟 Gran final: '+themed,'Dos pruebas adicionales para conseguir el trofeo especial.',badge));
   const meter=p('Pruebas especiales: '+count+'/2','npw-progress');intro.append(meter);
   if(count===2){intro.append(h('div','🏆 ¡Trofeo especial conseguido!','npw-win'));return}
   if(!active()){intro.append(p('Este capítulo se abre en la fecha de su celebración.','npw-note'));return}
   const game=h('div','','npw-bonus-game');intro.append(game);
   const seed=index*3+(kind==='kings'?32:7);
   if(count===0){
     game.append(h('h3','Mapa de señales'),p('Sigue las tres señales de la ruta en orden.','npw-note'));
     const symbols=['🌟','🎁','🔔','❄️','🎄','🦌'];
     const order=[(seed)%6,(seed+2)%6,(seed+4)%6];let pos=0;
     game.append(p(order.map(i=>symbols[i]).join(' → '),'npw-code'));
     const row=h('div','','npw-puzzle-row');
     symbols.forEach((v,i)=>row.append(b(v,()=>{
       if(order[pos]!==i){pos=0;meter.textContent='Ruta incorrecta: vuelve a la primera señal';return}
       pos++;meter.textContent='Ruta '+pos+'/3';
       if(pos===3){count=1;keep(key,count);render()}
     })));
     game.append(row);
   }else{
     game.append(h('h3','Máquina del festival'),p('Recoge cuatro piezas para preparar el gran cierre.','npw-note'));
     const sorted=[0,1,2,3].map((v,i)=>(v+(seed%4))%4);
     const symbols=['⚙️','🔔','🎁','⭐'];let pos=0;
     game.append(p(sorted.map(i=>symbols[i]).join(' → '),'npw-code'));
     const row=h('div','','npw-puzzle-row');
     symbols.forEach((v,i)=>row.append(b(v,()=>{
       if(sorted[pos]!==i){pos=0;meter.textContent='Revisa el plano de la máquina';return}
       pos++;meter.textContent='Máquina '+pos+'/4';
       if(pos===4){count=2;keep(key,count);render()}
     })));
     game.append(row);
   }
 };
 render();root.append(intro);
}
function festive24(root){
 const panel=h('div','','npw-24');
 panel.append(heading('🎅 La gran víspera','Las 19 paradas ilustradas, un mapa mundial y una celebración especial.','🌍'));
 const pieces=h('div','','npw-route-preview');
 const stops=['Polo Norte','Sídney','Tokio','Seúl','Bangkok','Nueva Delhi','Dubái','El Cairo','Atenas','Roma',
 'Madrid','Londres','Reikiavik','Nueva York','Ciudad de México','Lima','Santiago','Buenos Aires','Polo Norte'];
 stops.forEach((stop,i)=>{const node=h('span',(i===0?'🛷 ':'✦ ')+stop,'npw-stop-city');pieces.append(node)});
 panel.append(p('Recorrido de la aventura del 24 de diciembre','npw-note'),pieces);
 root.append(panel);
}
function themeForDate(){
 const d=date();
 const starts=['2026-11-01','2026-11-08','2026-11-15','2026-11-22','2026-11-29',
 '2026-12-06','2026-12-13','2026-12-20'];
 const ends=['2026-11-07','2026-11-14','2026-11-21','2026-11-28','2026-12-05',
 '2026-12-12','2026-12-19','2026-12-25'];
 return starts.findIndex((s,i)=>d>=s&&d<=ends[i]);
}
function eventHeader(root,kind,index=-1){
 const i=index<0?themeForDate():index;
 const wrap=h('div','','npw-event-diorama');
 wrap.style.setProperty('--npw-event-color',palettes[(Math.max(0,i))%8]);
 const icon=kind==='kings'?'👑':['🚂','🏰','☄️','⚙️','🦌','🌍','🎼','🎄'][Math.max(0,i)%8];
 const art=h('div','','npw-event-art');
 const themes=[
   '<rect x="235" y="102" width="290" height="85" rx="19" fill="#e95d79"/><rect x="342" y="65" width="120" height="91" rx="18" fill="#54bfd2"/><circle cx="299" cy="194" r="25" fill="#294e98"/><circle cx="466" cy="194" r="25" fill="#294e98"/><path d="M180 200H590" stroke="#ffdd91" stroke-width="16"/>',
   '<rect x="188" y="91" width="94" height="105" fill="#e59d5b"/><rect x="315" y="58" width="135" height="138" fill="#86bdd5"/><rect x="484" y="105" width="98" height="91" fill="#9f7eca"/><path d="M165 92l73-76 72 76M296 60l91-56 91 56M470 107l63-65 66 65" stroke="#f7f8dc" stroke-width="14" fill="none"/>',
   '<path d="M110 196L360 44M340 212L580 52" stroke="#ffdda0" stroke-width="21" stroke-linecap="round"/><circle cx="370" cy="42" r="31" fill="#fff7cc"/><circle cx="589" cy="47" r="28" fill="#f7ae9f"/><path d="M505 183l23-46 20 46 48 9-42 34 8 18-34-24-32 18 8-46Z" fill="#ffe398"/>',
   '<circle cx="377" cy="119" r="92" fill="#f4b96d" stroke="#fff0b4" stroke-width="19"/><circle cx="377" cy="119" r="45" fill="#3f8aa8"/><rect x="115" y="157" width="147" height="69" rx="8" fill="#e97e99"/><path d="M173 158v69M115 181h147" stroke="#fbe4a2" stroke-width="13"/><rect x="505" y="134" width="103" height="90" rx="12" fill="#6ccbaa"/>',
   '<path d="M110 190Q270 85 590 178" stroke="#ffeab2" stroke-width="15" stroke-dasharray="18 13" fill="none"/><path d="M285 112L365 48L393 103L443 102L412 146L355 153L316 179Z" fill="#f7d297"/><circle cx="390" cy="78" r="5" fill="#453858"/><path d="M405 98L458 75L426 119" fill="#f7d297"/>',
   '<rect x="230" y="74" width="75" height="147" rx="9" fill="#f2dfb3"/><rect x="429" y="74" width="75" height="147" rx="9" fill="#e3c7f0"/><path d="M216 72l51-53 51 53M414 72l51-53 51 53" fill="#ed718a"/><path d="M264 18V2M465 18V2" stroke="#ffe693" stroke-width="12"/><path d="M260 152L370 29L465 152" stroke="#fff2b0" stroke-width="10" fill="none"/>',
   '<path d="M170 163q65-89 129 0T428 163T565 163" fill="none" stroke="#ffe9c0" stroke-width="15"/><circle cx="283" cy="175" r="44" fill="#f0c577"/><circle cx="480" cy="175" r="48" fill="#e77b98"/><path d="M285 87v-40h70v49M483 82V38h75v49" stroke="#fff0b5" stroke-width="13" fill="none"/><text x="374" y="91" font-size="68" fill="#fff9c4">♫</text>',
   '<path d="M375 10L480 186H270Z" fill="#3eb08d"/><path d="M375 56L460 206H290Z" fill="#258a84"/><rect x="360" y="199" width="28" height="34" fill="#986f51"/><circle cx="375" cy="39" r="18" fill="#ffe78f"/><rect x="135" y="156" width="100" height="71" fill="#df5b7c"/><path d="M174 156v71M135 183h100" stroke="#ffe49c" stroke-width="13"/><rect x="506" y="156" width="99" height="71" fill="#6fc2d6"/><path d="M544 156v71M506 183h99" stroke="#fff0b0" stroke-width="12"/>'
 ];
 const design=themes[kind==='kings'?7:Math.max(0,i)%8];
 art.innerHTML='<svg viewBox="0 0 730 245" role="img" aria-label="Escenario ilustrado del evento">'+
  '<path d="M0 0H730V245H0Z" fill="#5bafd1" opacity=".14"/>'+
  '<path d="M0 225Q145 173 307 222T730 216V245H0Z" fill="#fff4d1" opacity=".85"/>'+design+'</svg>';
 wrap.append(art,h('span',icon,'npw-event-icon'),h('div',kind==='kings'?'La estrella de Oriente':seasonNames[Math.max(0,i)%8],'npw-event-title'));
 root.append(wrap);
}
window.NochepolarWorld={feature,interior,passport,extraDay,bonus,festive24,eventHeader,themeForDate,
 getPreference:(name,def)=>read(name,def),savePreference:keep,stations};
})();
