/* NOCHEPOLAR: eight weekly events plus the Three Kings epilogue.
   Unofficial original extension, separate from Google's original Santa tracking. */
(() => {
  'use strict';
  const dates=[
    ['🚂','El ferrocarril de la aurora','2026-11-01','2026-11-07','Reconstruye el tren que ilumina el cielo.',[0,1,2]],
    ['🏰','La ciudad bajo la nieve','2026-11-08','2026-11-14','Rescata la ciudad, abastece sus casas y abre las puertas.',[1,3,7]],
    ['☄️','La noche de los ocho cometas','2026-11-15','2026-11-21','Descifra las constelaciones y el mapa de los cometas.',[2,5,0]],
    ['⚙️','La fábrica imposible','2026-11-22','2026-11-28','Una máquina de juguetes gigantesca necesita reparación.',[7,3,1]],
    ['🦌','Campeonato de los renos','2026-11-29','2026-12-05','Pilota un reno por una ruta de obstáculos y estrellas.',[4,0,5]],
    ['🌍','La expedición de los faros','2026-12-06','2026-12-12','Recorre ciudades y recupera su luz.',[5,1,3]],
    ['🎼','La orquesta de las estrellas','2026-12-13','2026-12-19','Reconstruye la partitura de la aurora.',[6,2,7]],
    ['🎄','El festival de la gran víspera','2026-12-20','2026-12-25','La gran final: carrera, concierto y viaje mundial.',[4,6,5]]
  ];
  const kings=[
    ['👑','Gran cabalgata de los Reyes Magos','2027-01-05','Carrozas, rutas y señales estelares.',[7,5,2]],
    ['🎁','La mañana mágica de Reyes','2027-01-06','Prepara los regalos y celebra el final de la fiesta.',[1,3,6]]
  ];
  const names=['Mapa ferroviario','Central de luz','Código de las estrellas','Centro de envíos','Carrera del reno','Atlas de ciudades','Orquesta polar','Montaje del gran invento'];
  const $=(tag,txt='',cl='')=>{const e=document.createElement(tag);e.textContent=txt;if(cl)e.className=cl;return e};
  const btn=(txt,fn,cl='nps-button')=>{const e=$('button',txt,cl);e.type='button';e.addEventListener('click',fn);return e};
  const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const state=(start,end)=>today()<start?'future':today()>end?'past':'live';
  const key=id=>'nochepolar:special:2026-27:'+id;
  const current=id=>Math.min(3,Math.max(0,Number(localStorage.getItem(key(id)))||0));
  const save=(id,n)=>localStorage.setItem(key(id),String(n));
  const readable=s=>s.slice(8,10)+'/'+s.slice(5,7)+'/'+s.slice(0,4);
  let disposed=false,stop=()=>{};
  function clear(){disposed=true;stop();stop=()=>{}}
  function create(root,title,description){
    root.replaceChildren();const c=$('section','','nps-panel');
    c.append($('div','❄️　✦　🌟　✦　❄️','nps-hero-art'),$('p','✦ NOCHEPOLAR · LA ALDEA TE ESPERA','nps-overline'),$('h2',title),$('p',description,'nps-desc'));root.append(c);return c
  }
  function info(root,message){let el=root.querySelector('.nps-hint');if(!el){el=$('p','','nps-hint');root.append(el)}el.textContent=message}
  function stage(root,mode,seed,complete){
    clear();disposed=false;
    const box=create(root,names[mode],'Completa este desafío para abrir el siguiente capítulo.');
    const done=()=>{if(!disposed){clear();complete()}};
    if(mode===0){
      box.append($('p','Conecta en orden las siete estaciones del tren.','nps-instructions'));
      const path=$('p','🚂 Inicio → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 🌌','nps-banner');
      const row=$('div','','nps-board');let next=1;
      [4,1,6,2,7,3,5].forEach(n=>row.append(btn('🚦 '+n,()=>{
        if(n!==next){info(box,'Necesitas primero la estación '+next+'.');return}
        next++;path.textContent='🚂 '+Array(next-1).fill('●').join(' ━ ')+' ━ 🌌';
        const tile=Array.from(row.children).find(x=>x.textContent==='🚦 '+n);
        if(tile){tile.disabled=true;tile.textContent='✓ '+n}if(next===8)done();
      })));
      box.append(path,row);
    } else if(mode===1){
      box.append($('p','Enciende las nueve lámparas: cada pulsación cambia su estado y el de sus vecinas.','nps-instructions'));
      const lights=Array(9).fill(true);
      const flip=i=>[i,i-3,i+3,i-1,i+1].forEach(k=>{
        if(k>=0&&k<9&&(k===i||Math.abs(Math.floor(k/3)-Math.floor(i/3))+Math.abs(k%3-i%3)===1))lights[k]=!lights[k]
      });
      [1,4,8].forEach(flip);
      const row=$('div','','nps-board nps-lights');
      const tiles=Array.from({length:9},(_,i)=>btn('',()=>{flip(i);draw();if(lights.every(Boolean))done()}));
      const draw=()=>tiles.forEach((x,i)=>{x.textContent=lights[i]?'💡':'🌑';x.setAttribute('aria-label','Lámpara '+(i+1));x.classList.toggle('nps-on',lights[i])});
      draw();row.append(...tiles);box.append(row,btn('Ver pista',()=>info(box,'Prueba con las lámparas 2, 5 y 9.')));
    } else if(mode===2){
      const pieces=['🎄','🔔','⭐','🎁','❄️','🦌','🧸','🌙'];
      const pattern=[0,3,5,2,7,1].map(n=>(n+seed)%8);let pos=0,hidden=false;
      box.append($('p','Memoriza los seis símbolos y repítelos después de que desaparezcan.','nps-instructions'));
      const display=$('div',pattern.map(n=>pieces[n]).join(' '),'nps-banner');box.append(display);
      const timer=setTimeout(()=>{if(!disposed){hidden=true;display.textContent='❔ ❔ ❔ ❔ ❔ ❔'}},4000);
      stop=()=>clearTimeout(timer);
      const row=$('div','','nps-board');
      pieces.forEach((v,n)=>row.append(btn(v,()=>{
        if(!hidden){info(box,'Observa la secuencia primero.');return}
        if(n!==pattern[pos]){pos=0;info(box,'Inténtalo desde el principio.');return}
        pos++;info(box,'Símbolos correctos: '+pos+'/6');if(pos===6)done();
      })));box.append(row);
    } else if(mode===3){
      const items=[['🧸 Osito','Taller'],['🍪 Galletas','Cocina'],['🔔 Campanas','Establo'],['📦 Caja','Almacén'],['🔭 Telescopio','Observatorio'],['🦌 Arnés','Establo']];
      let ix=0;const line=$('h3','','nps-banner'),count=$('p','','nps-count');
      const draw=()=>{line.textContent=items[ix][0];count.textContent='Envío '+(ix+1)+' de '+items.length};
      box.append(count,line);const row=$('div','','nps-board');
      ['Taller','Cocina','Establo','Almacén','Observatorio'].forEach(s=>row.append(btn('📍 '+s,()=>{
        if(s!==items[ix][1]){info(box,'Ese no es el destino.');return}
        ix++;if(ix===items.length)done();else draw();
      })));box.append(row);draw();
    } else if(mode===4){
      box.append($('p','Dirige el reno hacia las estrellas sin cruzar una nube. Selecciona el carril seguro en cada tramo.','nps-instructions'));
      const row=$('div','','nps-board nps-lanes');
      const lane=$('div','','nps-banner');const count=$('p','','nps-count');let round=0,misses=0;
      function render(){
        row.replaceChildren();
        const safe=(seed+round*2)%3;
        lane.textContent='🛷 🌌　'+['☁️','⭐','☁️'].map((_,n)=>n===safe?'⭐':'🌫️').join('　');
        count.textContent='Tramo '+(round+1)+'/10 · Nubes tocadas: '+misses+'/3';
        for(let i=0;i<3;i++)row.append(btn(['◀ Izquierda','▲ Centro','Derecha ▶'][i],()=>{
          if(i!==safe){misses++;info(box,'¡Nube! Busca el carril de la estrella.');if(misses>=3){round=0;misses=0}}
          else round++;
          if(round===10)done();else render();
        }));
      }box.append(lane,count,row);render();
    } else if(mode===5){
      const stops=[
        ['Sídney','Ópera junto al puerto'],['Tokio','Capital de Japón'],['El Cairo','Pirámides próximas'],
        ['Madrid','Capital de España'],['París','Torre Eiffel'],['Nueva York','Estatua de la Libertad'],
        ['Ciudad de México','Zócalo'],['Río de Janeiro','Cristo Redentor']
      ];
      const atlas=$('div','🌍 🛷 ⭐','nps-map'),count=$('p','','nps-count'),clue=$('h3','','nps-banner');
      const row=$('div','','nps-board');box.append(atlas,count,clue,row);let i=0;
      function draw(){
        const [correct,hint]=stops[i];count.textContent='Parada '+(i+1)+'/8';
        clue.textContent='¿Dónde estamos? Pista: '+hint;row.replaceChildren();
        [correct,stops[(i+3)%8][0],stops[(i+5)%8][0]].sort().forEach(city=>row.append(btn('📍 '+city,()=>{
          if(city!==correct){info(box,'Esa ciudad no coincide con la pista.');return}
          i++;if(i===8)done();else{atlas.textContent='🌍 '+('✦ '.repeat(i))+' 🛷';draw()}
        })));
      }draw();
    } else if(mode===6){
      const tones=['🔴','🟢','🟡','🔵'];const seq=[0,2,1,3,1,0,3,2].map(n=>(n+seed)%4);
      let i=0;box.append($('p','Toca ocho notas en el orden de esta partitura original.','nps-instructions'));
      const sheet=$('div',seq.map(n=>tones[n]).join(' '),'nps-banner');
      const count=$('p','Notas correctas: 0/8','nps-count');const row=$('div','','nps-board');
      tones.forEach((tone,n)=>row.append(btn(tone,()=>{
        if(n!==seq[i]){i=0;info(box,'Has cambiado una nota. Repite desde el principio.')}
        else{i++;if(i===8){done();return}}
        count.textContent='Notas correctas: '+i+'/8';
      })));box.append(sheet,count,row);
    } else {
      const parts=[['Motor','⚙️'],['Cristal','💎'],['Campana','🔔'],['Cinta','🎁'],['Palanca','🕹️'],['Reloj','⏰'],['Bobina','🌀'],['Estrella','⭐']];
      const count=$('p','','nps-count'),target=$('h3','','nps-banner'),row=$('div','','nps-board');
      let i=0;box.append(count,target,row);
      function draw(){
        count.textContent='Pieza '+(i+1)+'/8';target.textContent='Plano: '+parts[i][0];row.replaceChildren();
        [i,(i+3)%8,(i+5)%8].sort((a,b)=>parts[a][0].localeCompare(parts[b][0])).forEach(n=>row.append(btn(parts[n][1]+' '+parts[n][0],()=>{
          if(n!==i){info(box,'Esa pieza no aparece en el plano.');return}
          i++;if(i===8)done();else draw();
        })));
      }draw();
    }
  }
  function listWeekly(root,back){
    clear();const panel=create(root,'🎪 Ocho grandes eventos semanales','Cada semana, una nueva historia ilumina la aldea. Elige tu aventura y supera sus tres desafíos.');
    panel.classList.add('nps-festivals');
    panel.append(btn('← Volver al calendario',back,'nps-back'));
    const list=$('div','','nps-list');
    dates.forEach((data,i)=>{
      const [icon,title,start,end,story]=data,p=current('w'+i);
      const card=$('article','','nps-card');
      card.append($('h3',icon+' '+(i+1)+'. '+title),$('p',story),$('p',readable(start)+' – '+readable(end),'nps-count'),
        $('p',p===3?'🏆 Completado':state(start,end)==='live'?'▶ Disponible':state(start,end)==='future'?'🔒 Aún no comienza':'⌛ Finalizado','nps-label'),
        btn('Abrir evento',()=>openWeekly(root,back,i)));
      list.append(card);
    });panel.append(list);
  }
  function openWeekly(root,back,i){
    clear();const [icon,title,start,end,story,stages]=dates[i],id='w'+i,p=current(id);
    const panel=create(root,icon+' '+title,story);
    panel.append($('p',readable(start)+' – '+readable(end),'nps-count'),btn('← Ocho eventos',()=>listWeekly(root,back),'nps-back'));
    if(p===3){panel.append($('div','🏆','nps-trophy'),$('h3','¡Evento superado!'));return}
    if(state(start,end)!=='live'){panel.append($('p','Este evento solo se juega durante su semana. Puedes ver su historia, pero no acceder antes o después.'));return}
    function chapter(n){
      if(state(start,end)!=='live'){openWeekly(root,back,i);return}
      stage(root,stages[n],i*9+n*3+1,()=>{
        save(id,n+1);
        if(n===2){openWeekly(root,back,i);return}
        const c=create(root,'✨ Capítulo superado',title);
        c.append($('p','Tu progreso está guardado: '+(n+1)+'/3.'),
          btn('Continuar al siguiente desafío',()=>chapter(n+1),'nps-button nps-primary'));
      });
    }
    panel.append($('p','Progreso: '+p+'/3 desafíos','nps-count'),
      btn(p?'Continuar aventura':'COMENZAR AVENTURA',()=>chapter(p),'nps-button nps-primary'));
  }
  function listKings(root,back){
    clear();const panel=create(root,'👑 Especial de los Reyes Magos','La estrella de Oriente vuelve a brillar. Vive la gran cabalgata del 5 de enero y descubre la mañana mágica del día 6.');
    panel.classList.add('nps-reyes');
    panel.append(btn('← Calendario',back,'nps-back'));
    const list=$('div','','nps-list');
    kings.forEach(([icon,title,date,story],i)=>{
      const card=$('article','','nps-card');
      card.classList.add('nps-reyes-card');card.append($('div',icon,'nps-card-icon'),$('h3',icon+' '+title),$('p',story),$('p',readable(date),'nps-count'),
        $('p',current('k'+i)===3?'🏆 Completado':state(date,date)==='live'?'▶ Especial abierto':'🔒 Exclusivo de su fecha','nps-label'),
        btn('Abrir especial',()=>openKings(root,back,i)));
      list.append(card);
    });panel.append(list);
  }
  function openKings(root,back,i){
    clear();const [icon,title,date,story,stages]=kings[i],id='k'+i,p=current(id);
    const panel=create(root,icon+' '+title,story);
    panel.classList.add('nps-reyes');
    panel.append($('div',i?'🎁 ✨ 🌟 👑 👑 👑':'🐪 🌟 ✨ 👑 👑 👑','nps-kings'),
      $('p',readable(date)+' · hora peninsular española','nps-count'),btn('← Reyes Magos',()=>listKings(root,back),'nps-back'));
    if(p===3){panel.append($('div','🏆','nps-trophy'),$('h3','¡Especial completado!'));return}
    if(state(date,date)!=='live'){panel.append($('p',state(date,date)==='future'?'🔒 Este especial se desbloqueará en su fecha.':'⌛ Este especial ya ha terminado.'));return}
    function chapter(n){
      if(state(date,date)!=='live'){openKings(root,back,i);return}
      stage(root,stages[n],i*11+n*4+2,()=>{
        save(id,n+1);
        if(n===2){openKings(root,back,i);return}
        const c=create(root,'🌟 ¡Prueba superada!',title);
        c.append($('p','Capítulo '+(n+1)+' de 3 terminado.'),
          btn('Continuar con Reyes',()=>chapter(n+1),'nps-button nps-primary'));
      });
    }
    panel.append($('p','Progreso guardado: '+p+'/3','nps-count'),btn(p?'CONTINUAR':'COMENZAR ESPECIAL',()=>chapter(p),'nps-button nps-primary'));
  }
  window.NochepolarSpecials={weekly:listWeekly,kings:listKings,dispose:clear};
})();
