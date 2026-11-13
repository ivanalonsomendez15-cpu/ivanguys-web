/* NOCHEPOLAR — aventuras completas (2026).
   Módulo original que amplía la aldea de Google Santa Tracker.
   No sustituye ni altera las escenas clásicas. */
(() => {
  'use strict';

  const symbols = ['🎁','🦌','🌟','❄️','🎄','🔔','🧸','🍬','💎','⛄','🛷','🍪'];
  const decoys = ['🌲','🍄','🧣','🎩','🥨','🧦','🪁','🪀','🪄','🪴','🎸','🎈'];
  const places = [
    ['Taller del Polo','fábrica de juguetes','🎁'],['Bosque brillante','árboles cubiertos de luz','🌲'],
    ['Estación Aurora','laboratorio de luz','🌌'],['Puerto del hielo','muelle de los barcos polares','⛵'],
    ['Montaña nevada','observatorio del cielo','🏔️'],['Pueblo de azúcar','pastelería encantada','🍬'],
    ['Circuito de renos','pista de carreras','🦌'],['Isla Pingüino','reserva de pingüinos','🐧'],
    ['Faro del cometa','torre astronómica','🔭'],['Castillo de escarcha','patio de cristal','🏰'],
    ['Bóveda de regalos','almacén secreto','📦']
  ];
  const scenes = [
    ['El laboratorio ha perdido sus cristales. Haz funcionar la máquina de invierno.',
     'Comprueba las piezas de nieve y restaura su energía.',
     'La puerta de hielo se abre si superas todas las pruebas.'],
    ['La aldea ha quedado a oscuras. Vuelve a encender los faroles uno a uno.',
     'Encuentra la ruta que siguen las chispas de luz.',
     'La celebración regresará cuando complete el circuito.'],
    ['Una tormenta ha desordenado los paquetes del gran almacén.',
     'Encuentra los envíos, ordénalos y prepara su transporte.',
     'El último regalo debe llegar a su destino.'],
    ['Los renos necesitan una nueva ruta para su vuelo de prueba.',
     'Explora el mapa, recupera los símbolos y revisa el tablero.',
     'La gran salida depende de tu coordinación.'],
    ['Los duendes han inventado un artefacto extraño.',
     'Pon a prueba los mecanismos de la máquina y sus códigos.',
     'Solo una combinación correcta permitirá arrancarlo.'],
    ['El cielo del Polo Norte se está quedando sin estrellas.',
     'Rescata los destellos perdidos mientras recorres las estaciones.',
     'Enciende el firmamento para cerrar la expedición.'],
    ['Ha llegado una carta misteriosa para Papá Noel.',
     'Cada pista te llevará más cerca de descifrar el mensaje.',
     'Reúne las señales para completar la entrega.'],
    ['Los habitantes preparan un festival navideño secreto.',
     'Cada puesto del pueblo tiene un reto por terminar.',
     'Cuando todos los puestos estén listos comenzará el desfile.']
  ];
  const plans = [
    ['buscar','laberinto','memoria','taller','clasificar','atrapar','ritmo','final'],
    ['laberinto','buscar','clasificar','ritmo','memoria','taller','atrapar','final'],
    ['clasificar','taller','buscar','memoria','laberinto','atrapar','ritmo','final'],
    ['atrapar','laberinto','buscar','taller','ritmo','clasificar','memoria','final'],
    ['memoria','taller','clasificar','buscar','atrapar','laberinto','ritmo','final'],
    ['taller','buscar','laberinto','atrapar','clasificar','memoria','ritmo','final'],
    ['ritmo','atrapar','taller','memoria','buscar','clasificar','laberinto','final'],
    ['buscar','taller','atrapar','clasificar','laberinto','ritmo','memoria','final']
  ];
  const names = {
    experimento:'Laboratorio de copos — estreno del 13 de noviembre',
    buscar:'Bosque de descubrimientos',laberinto:'Pasadizos de hielo',
    memoria:'Archivo de recuerdos',taller:'Banco de inventos',
    clasificar:'Cinta de paquetes',atrapar:'Vuelo de estrellas',
    ritmo:'Partitura de la aurora',final:'La misión definitiva'
  };
  const h = (tag, text='', classname='') => {
    const el = document.createElement(tag);el.textContent=text;
    if(classname) el.className=classname;
    return el;
  };
  const button=(text,cb,cls='npq-btn')=>{
    const x=h('button',text,cls);x.type='button';x.addEventListener('click',cb);return x;
  };
  const shuffle=(arr,rng)=>{
    const out=arr.slice();
    for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
    return out;
  };
  function rngFor(seed){
    let state=(seed*1664525+1013904223)>>>0;
    return()=>{state=(state*1664525+1013904223)>>>0;return state/4294967296;};
  }
  const ordinal=n=>String(n).padStart(2,'0');
  function play({box,day,title,onComplete,date}){
    const plan = day === 12
      ? ['experimento','laberinto','buscar','memoria','taller','clasificar','atrapar','ritmo','final']
      : plans[day%plans.length];
    const memoryKey='np:expedition:v3:'+date;
    let index=Math.max(0,Math.min(plan.length,Number(localStorage.getItem(memoryKey)||0)));
    let cleanup=()=>{};
    let open=true;
    let seed=day*271+2026;
    const rng=rngFor(seed);
    const theme=scenes[day%scenes.length];
    const area=places[day%places.length];
    const destination=places[(day+6)%places.length];
    const medal=symbols[day%symbols.length];
    const history=()=>{localStorage.setItem(memoryKey,String(index));};
    const dispose=()=>{open=false;cleanup();};
    function completeTask(){
      cleanup();cleanup=()=>{};
      index++;history();
      if(index>=plan.length){dispose();onComplete();return;}
      box.replaceChildren();
      const section=h('div','','npq-interlude');
      section.append(h('div','🌟','npq-star'));
      section.append(h('h2','¡Capítulo superado!'));
      section.append(h('p','Has superado '+index+' de '+plan.length+' pruebas. Tu progreso está guardado.'));
      section.append(button('CONTINUAR LA AVENTURA →',render,'npq-button-big'));
      box.append(section);
    }
    function header(type){
      box.replaceChildren();
      const shell=h('div','','npq-shell');
      shell.style.setProperty('--npq-hue',String((day*47)%360));
      const kicker=h('p','CAPÍTULO '+ordinal(index+1)+' / '+ordinal(plan.length)+' · '+area[0],'npq-kicker');
      const progress=h('div','','npq-progress');
      progress.style.gridTemplateColumns='repeat('+plan.length+',minmax(0,1fr))';
      for(let n=0;n<plan.length;n++){
        const p=h('span','','npq-step');
        if(n<index)p.classList.add('done');
        if(n===index)p.classList.add('active');
        progress.append(p);
      }
      shell.append(kicker,progress,h('h2',names[type]));
      box.append(shell);
      return shell;
    }
    function nextIfLive(){
      if(!open)return false;
      if(date!==new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())){
        dispose();box.replaceChildren(h('p','Este evento ha terminado. Vuelve al calendario.'));return false;
      }
      return true;
    }

    function experiment(){
      const shell=header('experimento');
      shell.append(h('p','¡Experiencia exclusiva de hoy! Fabrica cuatro cristales para reactivar el laboratorio. Cada cristal exige un equilibrio distinto de frío, simetría y brillo.','npq-description'));
      const recipes=[
        [3,6,5,'Copo de ventana'],[7,4,8,'Aurora de hielo'],
        [5,9,3,'Cristal perfecto'],[9,7,9,'Supercopo polar']
      ];
      let round=0;
      const screen=h('div','','npq-experiment-screen');
      const art=document.createElementNS('http://www.w3.org/2000/svg','svg');
      art.setAttribute('viewBox','0 0 220 220');art.setAttribute('aria-label','Copo de nieve experimental');
      art.style.cssText='width:min(270px,85%);height:220px;display:block;margin:auto;filter:drop-shadow(0 4px 12px #008bb655)';
      for(let k=0;k<6;k++){
        const g=document.createElementNS('http://www.w3.org/2000/svg','g');
        g.setAttribute('transform','translate(110 110) rotate('+(k*60)+')');
        const p=document.createElementNS('http://www.w3.org/2000/svg','path');
        p.setAttribute('d','M0 0 L0 -81 M0 -50 L-23 -63 M0 -50 L23 -63 M0 -29 L-19 -38 M0 -29 L19 -38');
        p.setAttribute('fill','none');p.setAttribute('stroke','#58d9ff');
        p.setAttribute('stroke-linecap','round');p.setAttribute('stroke-linejoin','round');
        p.classList.add('npq-ice-path');g.append(p);art.append(g);
      }
      screen.append(art);
      const title=h('h3','','npq-order'),guide=h('p','','npq-hint'),count=h('p','','npq-counter');
      const controls=[];
      for(const label of ['❄️ Frío','🔷 Simetría','✨ Brillo']){
        const wrapper=h('label','','npq-lab-control');
        const caption=h('span',label);
        const value=h('b','5');
        const input=document.createElement('input');input.type='range';input.min='0';input.max='10';input.step='1';input.value='5';
        input.addEventListener('input',()=>{value.textContent=input.value;updateSnow();});
        wrapper.append(caption,input,value);controls.push(input);shell.append(wrapper);
      }
      function updateSnow(){
        const [cold,symmetry,shine]=controls.map(el=>Number(el.value));
        for(const line of art.querySelectorAll('.npq-ice-path')){
          line.setAttribute('stroke-width',String(2+Math.round(symmetry/2)));
          line.setAttribute('stroke','hsl('+(175+cold*7)+' 90% '+(50+shine*3)+'%)');
        }
        art.style.transform='rotate('+(symmetry*6)+'deg) scale('+(0.82+shine*.03)+')';
      }
      function showTarget(){
        const [cold,symmetry,shine,name]=recipes[round];
        title.textContent='Experimento '+(round+1)+'/4: '+name;
        guide.textContent='Objetivo: Frío '+cold+' · Simetría '+symmetry+' · Brillo '+shine+'. Ajusta los tres mandos.';
        count.textContent='Cristales fabricados: '+round+'/4';
        controls.forEach(c=>c.value='5');updateSnow();
      }
      const check=button('🧪 ACTIVAR EL CRISTAL',()=>{
        const [cold,symmetry,shine]=recipes[round];
        const values=controls.map(c=>Number(c.value));
        if(values[0]!==cold||values[1]!==symmetry||values[2]!==shine){
          guide.textContent='No se ha estabilizado. Compara tus tres mandos con los valores del objetivo y vuelve a intentarlo.';
          return;
        }
        round++;
        if(round===recipes.length){completeTask();return;}
        showTarget();
      },'npq-button-big');
      showTarget();shell.append(screen,title,guide,count,check);
    }
    function search(){
      const shell=header('buscar');
      const goal=symbols[(day+3)%symbols.length];
      const target=8+(day%4), total=30;
      shell.append(h('p','Recorre '+area[1]+'. Encuentra '+target+' símbolos '+goal+' escondidos entre otros objetos.','npq-description'));
      const counter=h('p','Encontrados: 0 / '+target,'npq-counter');
      const field=h('div','','npq-find-field');
      const spots=shuffle(Array(target).fill(goal).concat(
        Array.from({length:total-target},(_,i)=>decoys[(i+day)%decoys.length])),rng);
      let found=0,failed=0;
      spots.forEach((s,i)=>{
        const btn=button(s,()=>{
          if(btn.disabled)return;
          if(s===goal){
            btn.classList.add('npq-picked');btn.disabled=true;btn.textContent='✓';
            found++;counter.textContent='Encontrados: '+found+' / '+target;
            if(found===target){setTimeout(()=>nextIfLive()&&completeTask(),300);}
          }else{
            btn.classList.add('npq-wrong');failed++;
            setTimeout(()=>btn.classList.remove('npq-wrong'),320);
          }
        },'npq-find-icon');
        btn.style.setProperty('--angle',((i*27+day*31)%17-8)+'deg');
        field.append(btn);
      });
      shell.append(field,counter);
    }
    function maze(){
      const shell=header('laberinto');
      shell.append(h('p','Guía a tu explorador desde la entrada hasta el portal mágico. Usa las flechas del teclado o los controles en pantalla.','npq-description'));
      const size=11;
      const grid=Array.from({length:size},()=>Array(size).fill(0));
      const srng=rngFor(seed+73);
      const directions=[[2,0],[-2,0],[0,2],[0,-2]];
      function carve(x,y){
        grid[y][x]=1;
        for(const [dx,dy] of shuffle(directions,srng)){
          const nx=x+dx,ny=y+dy;
          if(nx>0&&nx<size-1&&ny>0&&ny<size-1&&!grid[ny][nx]){
            grid[y+dy/2][x+dx/2]=1;carve(nx,ny);
          }
        }
      }
      carve(1,1);
      let px=1,py=1;
      const map=h('div','','npq-maze');
      const tiles=[];
      for(let y=0;y<size;y++)for(let x=0;x<size;x++){
        const tile=h('div','','npq-maze-cell');
        if(!grid[y][x])tile.classList.add('wall');
        if(x===size-2&&y===size-2)tile.textContent='🚪';
        map.append(tile);tiles.push(tile);
      }
      function paint(){
        tiles.forEach((t,n)=>{
          const x=n%size,y=Math.floor(n/size);
          t.classList.toggle('hero',x===px&&y===py);
          if(x===px&&y===py)t.textContent='🧝';
          else t.textContent=x===size-2&&y===size-2?'🚪':'';
        });
      }
      function move(dx,dy){
        if(!nextIfLive())return;
        const x=px+dx,y=py+dy;
        if(x<0||y<0||x>=size||y>=size||!grid[y][x])return;
        px=x;py=y;paint();
        if(px===size-2&&py===size-2)completeTask();
      }
      const pad=h('div','','npq-dpad');
      pad.append(button('↑',()=>move(0,-1)),button('←',()=>move(-1,0)),button('↓',()=>move(0,1)),button('→',()=>move(1,0)));
      const key=ev=>{
        const moves={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};
        if(moves[ev.key]){ev.preventDefault();move(...moves[ev.key]);}
      };
      document.addEventListener('keydown',key);
      cleanup=()=>document.removeEventListener('keydown',key);
      paint();shell.append(map,pad);
    }
    function memory(){
      const shell=header('memoria');
      shell.append(h('p','Encuentra las seis parejas del archivo. Cada pareja recupera un recuerdo de '+title.toLowerCase()+'.','npq-description'));
      const faces=shuffle(symbols.slice(0,6).concat(symbols.slice(0,6)),rng);
      const board=h('div','','npq-memory');
      let first=null,blocked=false,pairs=0,flipTimer;
      faces.forEach((symbol,n)=>{
        const card=button('?',()=>{
          if(blocked||card.disabled||card===first)return;
          card.textContent=symbol;
          card.classList.add('revealed');
          if(!first){first=card;return;}
          if(first.textContent===symbol){
            card.disabled=first.disabled=true;first.classList.add('matched');card.classList.add('matched');first=null;pairs++;
            status.textContent='Parejas: '+pairs+'/6';
            if(pairs===6)completeTask();
          }else{
            const prev=first;blocked=true;
            flipTimer=setTimeout(()=>{prev.textContent='?';card.textContent='?';prev.classList.remove('revealed');card.classList.remove('revealed');blocked=false;first=null;},800);
          }
        },'npq-memory-tile');board.append(card);
      });
      cleanup=()=>clearTimeout(flipTimer);
      const status=h('p','Parejas: 0/6','npq-counter');
      shell.append(board,status);
    }
    function workshop(){
      const shell=header('taller');
      shell.append(h('p','La máquina del taller necesita cinco piezas correctas. Lee el pedido y fabrica un objeto especial.','npq-description'));
      const recipes=[
        [['🔴','🔵','🟢'],'🔵','Pintura azul'],
        [['🧸','🎸','🪁'],'🧸','Juguete de peluche'],
        [['🎄','🎁','🦌'],'🦌','Figura de reno'],
        [['⭐','🔔','🎈'],'🔔','Campanilla'],
        [['🎀','🍪','🧦'],'🎀','Lazo decorativo']
      ];
      const order=shuffle(recipes,rng);
      let step=0,crafted=[];
      const machine=h('div','⚙️  🧰  ⚙️','npq-machine');
      const orderText=h('p','','npq-order');
      const row=h('div','','npq-workshop-choices');
      const warn=h('p','','npq-hint');
      const product=h('div','?','npq-product');
      function show(){
        row.replaceChildren();
        const [options,correct,label]=order[step];
        orderText.textContent='Pieza '+(step+1)+'/5 · Busca: '+label;
        shuffle(options,rng).forEach(v=>row.append(button(v,()=>{
          if(v!==correct){warn.textContent='Esa pieza no encaja. Prueba otra.';return;}
          crafted.push(v);product.textContent=crafted.join(' ');warn.textContent='¡Pieza instalada!';
          step++;
          if(step>=order.length){completeTask();return;}
          show();
        },'npq-workshop-item')));
      }
      show();shell.append(machine,orderText,row,warn,product);
    }
    function sorting(){
      const shell=header('clasificar');
      shell.append(h('p','Clasifica correctamente 18 artículos para que la expedición no pierda ningún regalo.','npq-description'));
      const bins=[
        {label:'Juguetes',symbols:['🧸','🪀','🪁','🎲','🎮']},
        {label:'Decoración',symbols:['🎄','🔔','⭐','🎀','🕯️']},
        {label:'Dulces',symbols:['🍬','🍪','🍫','🧁','🍭']}
      ];
      const items=shuffle(Array.from({length:18},(_,j)=>({bin:j%3,symbol:bins[j%3].symbols[(j+day)%5]})),rng);
      let step=0;
      const gift=h('div','','npq-sort-gift'),counter=h('p','','npq-counter'),hint=h('p','','npq-hint');
      function show(){
        gift.textContent=items[step].symbol;
        counter.textContent='Paquetes: '+step+'/18';
      }
      const row=h('div','','npq-sort-bins');
      bins.forEach((bin,n)=>row.append(button(bin.label,()=>{
        if(n!==items[step].bin){hint.textContent='¡Ese paquete pertenece a otra categoría!';return;}
        hint.textContent='¡Bien clasificado!';
        step++;if(step>=items.length){completeTask();return;}show();
      },'npq-bin')));
      show();shell.append(gift,row,counter,hint);
    }
    function catching(){
      const shell=header('atrapar');
      const targetCount=14+(day%4);
      shell.append(h('p','Atrapa '+targetCount+' chispas que cruzan el cielo. ¡Se mueven de verdad! En móvil puedes tocarlas con el dedo.','npq-description'));
      const sky=h('div','','npq-sky');
      const light=button('🌟',()=>{hits++;counter.textContent='Estrellas: '+hits+' / '+targetCount;
        if(hits===targetCount){cancelAnimationFrame(raf);completeTask();return;}
        tick=performance.now();},'npq-flying-light');
      const counter=h('p','Estrellas: 0 / '+targetCount,'npq-counter');
      let hits=0,raf=0,tick=performance.now();
      function frame(ts){
        const rect=sky.getBoundingClientRect();
        const maxX=Math.max(10,rect.width-64),maxY=Math.max(10,rect.height-64);
        const t=(ts-tick)/1000,spd=1.9+(day%5)*.12;
        light.style.left=Math.round((Math.sin(t*spd+day)+1)/2*maxX)+'px';
        light.style.top=Math.round((Math.sin(t*spd*.74+day*.4)+1)/2*maxY)+'px';
        if(open&&light.isConnected)raf=requestAnimationFrame(frame);
      }
      sky.append(light);shell.append(sky,counter);
      raf=requestAnimationFrame(frame);
      cleanup=()=>cancelAnimationFrame(raf);
    }
    function rhythm(){
      const shell=header('ritmo');
      shell.append(h('p','La aurora envía un código de siete luces. Obsérvalo y repítelo sin equivocarte. Puedes volver a ver la señal.','npq-description'));
      const seq=Array.from({length:7},()=>Math.floor(rng()*4));
      let input=0,ready=false,timer=0;
      const colors=['🔴','🟡','🟢','🔵'];
      const tip=h('p','Memoriza la secuencia...','npq-counter');
      const display=h('div','','npq-rhythm-display');
      const row=h('div','','npq-rhythm-keys');
      function reveal(){
        ready=false;input=0;
        display.textContent=seq.map(i=>colors[i]).join('  ');
        tip.textContent='Memoriza las siete luces';
        clearTimeout(timer);
        timer=setTimeout(()=>{display.textContent='❔  ❔  ❔  ❔';tip.textContent='Repite la secuencia';ready=true;},3800);
      }
      colors.forEach((c,i)=>row.append(button(c,()=>{
        if(!ready)return;
        if(seq[input]!==i){
          tip.textContent='Fallaste en la luz '+(input+1)+'. Puedes intentarlo de nuevo.';
          input=0;return;
        }
        input++;tip.textContent='Luces correctas: '+input+'/7';
        if(input===seq.length)completeTask();
      },'npq-rhythm-key')));
      const replay=button('👁 Volver a mostrar',reveal,'npq-btn');
      shell.append(display,row,tip,replay);
      reveal();cleanup=()=>clearTimeout(timer);
    }
    function final(){
      const shell=header('final');
      const isBig=day===53;
      const stops=isBig?[
        ['Polo Norte','🌌'],['Sídney','🦘'],['Tokio','🗼'],['Seúl','🌟'],
        ['Bangkok','🌺'],['Nueva Delhi','🪔'],['Dubái','🏙️'],
        ['El Cairo','🏛️'],['Atenas','🏺'],['Roma','🏟️'],
        ['Madrid','🎄'],['Londres','🎡'],['Reikiavik','❄️'],
        ['Nueva York','🗽'],['Ciudad de México','🌮'],
        ['Lima','🦙'],['Santiago','🏔️'],['Buenos Aires','🎭'],
        ['Polo Norte','🏠']
      ]:[[area[0],area[2]],['Cueva brillante','💎'],['Bosque de luces','🌟'],
         [destination[0],destination[2]],['Plaza de la aldea','🎁'],['El gran árbol','🎄']];
      shell.append(h('p',isBig?
        '¡Especial de Nochebuena! Completa 19 etapas de una vuelta al mundo imaginaria. El seguimiento original de Santa Tracker sigue disponible en su mapa.':
        'Ya tienes todos los materiales. Sigue las seis paradas de la ruta final para terminar '+title.toLowerCase()+'.',
        'npq-description'));
      const route=h('div','','npq-route');
      const city=h('div','','npq-route-current');
      const question=h('p','','npq-counter');
      const options=h('div','','npq-route-options');
      const note=h('p','','npq-hint');
      let step=0;
      function show(){
        const goal=stops[step];
        city.textContent=goal[1]+' '+goal[0];
        question.textContent='Destino '+(step+1)+' de '+stops.length+' · Selecciona el lugar indicado';
        route.textContent=stops.slice(0,step).map(x=>x[1]).join(' — ')+' 🛷';
        options.replaceChildren();
        const wrong1=stops[(step+3)%stops.length][0],wrong2=stops[(step+6)%stops.length][0];
        const labels=[...new Set([goal[0],wrong1,wrong2])];
        while(labels.length<3)labels.push('Estación '+labels.length);
        shuffle(labels,rng).forEach(label=>options.append(button(label,()=>{
          if(label!==goal[0]){note.textContent='Esa no es la parada que aparece en el mapa.';return;}
          step++;note.textContent='¡Parada desbloqueada!';
          if(step===stops.length)completeTask();else show();
        },'npq-destination')));
      }
      show();shell.append(route,city,question,options,note);
    }
    const handlers={experimento:experiment, buscar:search,laberinto:maze,memoria:memory,clasificar:sorting,
      taller:workshop,atrapar:catching,ritmo:rhythm,final};
    function render(){
      if(!nextIfLive())return;
      cleanup();cleanup=()=>{};
      if(index>=plan.length){onComplete();return;}
      handlers[plan[index]]();
    }
    function start(){
      if(index>0){render();return;}
      box.replaceChildren();
      const cover=h('div','','npq-cover');
      cover.style.setProperty('--npq-hue',String((day*41)%360));
      cover.append(h('div',area[2]+' '+medal+' 🌠','npq-cover-art'),
        h('p','EXPEDICIÓN N.º '+ordinal(day+1),'npq-kicker'),
        h('h2',title),h('p',theme[0]),h('p',theme[1]),h('p',theme[2]),
        h('p','Ocho desafíos diferentes · Guardado automático por capítulo · Disponible solo hoy','npq-facts'));
      if(day===53)cover.append(h('p','🎅 ESPECIAL: gran recorrido final con 19 paradas y los juegos clásicos de Santa Tracker','npq-special'));
      cover.append(button('🎮 EMPEZAR LA EXPEDICIÓN',render,'npq-button-big'));
      box.append(cover);
    }
    start();
    return {dispose};
  }
  window.NochepolarExpedition={play};
})();