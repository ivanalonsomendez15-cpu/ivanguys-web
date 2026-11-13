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
  // Fifty-five hand-written plots: one narrative arc for each calendar date.
  const uniqueMissions = ["La campana de apertura permanece muda.|Busca la chispa inaugural entre los edificios.|Haz que la primera luz llegue a toda la aldea.","Los faroles del bosque han perdido su guía.|Sigue señales ocultas entre los abetos.|Devuelve el resplandor a cada sendero.","Un reloj de hielo señala una hora imposible.|Reconstruye las pistas de sus engranajes.|Pon de nuevo en marcha la torre nevada.","Los juguetes han desaparecido antes de ser empaquetados.|Explora las mesas del taller y reúne las piezas.|Recupera el último envío de la mañana.","Una lluvia de estrellas ha cubierto el circuito.|Localiza los destellos sin confundir sus marcas.|Abre una ruta segura bajo el cielo.","El puente de caramelo ya no une los dos barrios.|Encuentra sus señales entre los dulces.|Reconstruye el paso hacia la pastelería.","El trineo transmite un código lleno de interferencias.|Recupera las letras de la señal.|Descifra el permiso de despegue.","Una tormenta de confeti ha borrado las pistas.|Clasifica los fragmentos y despeja el mapa.|Recupera las instrucciones del festival.","El maestro chocolatero ha perdido su receta.|Busca los ingredientes y ordena sus símbolos.|Prepara la primera taza del invierno.","Los renos han cambiado todos los indicadores.|Recorre el circuito de entrenamiento.|Encuentra la meta que nadie consigue ver.","Las campanas parecen sonar sin estar allí.|Sigue los ecos entre la nieve.|Descubre quién dirige el concierto secreto.","Una aurora extraña ilumina solo medio cielo.|Reconstruye los patrones de luz.|Haz que la noche brille de extremo a extremo.","El laboratorio necesita cuatro cristales distintos.|Ajusta la nueva máquina de copos.|Supera el experimento y abre el observatorio.","Un mapa hallado bajo una caja muestra caminos invisibles.|Encuentra sus coordenadas y símbolos.|Llega hasta el escondite de la brújula.","Un cartero polar debe repartir cartas sin nombre.|Investiga las señales de cada destinatario.|Entrega el último sobre antes del anochecer.","El cascanueces guarda una contraseña misteriosa.|Descifra lo que oculta su caja de música.|Abre el cofre de la función navideña.","Las luces de un bosque se encienden en orden equivocado.|Sigue un rastro entre los árboles.|Reorganiza el gran arco luminoso.","El lago refleja una aldea diferente.|Compara las pistas de ambos lados.|Encuentra el detalle que rompe el espejo.","Una expedición se ha desviado de su ruta.|Busca las balizas cubiertas de nieve.|Guía a los viajeros hasta la estación.","La máquina de vapor ha perdido presión.|Reúne piezas y resuelve los indicadores.|Haz salir el tren de la plataforma.","Una puerta de nieve aparece cada invierno en otro lugar.|Descubre sus marcas y su secuencia.|Cruza hacia la cámara de luces.","El viento transporta notas musicales desconocidas.|Recoge los ritmos escondidos.|Compón la melodía que abre el valle.","La fábrica ha confundido todos los sabores de caramelos.|Separa los lotes y localiza las etiquetas.|Completa el gran escaparate dulce.","Una colonia de pingüinos prepara una danza sorpresa.|Reconstruye el orden de sus pasos.|Enciende la pista de baile junto al mar.","Las torres del castillo de escarcha están apagadas.|Descubre la señal correcta en cada torre.|Ilumina todas las ventanas del patio.","Un cometa deja pistas detrás de las montañas.|Sigue su trayectoria en el cielo.|Encuentra el observatorio de su aterrizaje.","Los relojes del pueblo marcan horas diferentes.|Ordena los mensajes de sus guardianes.|Sincroniza el reloj maestro de Navidad.","Un montón de regalos lleva direcciones incompletas.|Resuelve cada destino y cada sello.|Prepara la caravana sin dejar ninguno atrás.","El cielo parece hecho de cristales transparentes.|Descubre cómo se iluminan sus fragmentos.|Completa el mosaico de la última noche de noviembre.","Las primeras luces de diciembre necesitan un nuevo circuito.|Reúne los interruptores del pueblo.|Celebra el encendido de la temporada.","Una nevada dibuja símbolos misteriosos sobre la plaza.|Memoriza el patrón de sus copos.|Descubre el mensaje escondido bajo la nieve.","Los instrumentos de la fábrica tienen notas mezcladas.|Restablece la secuencia de sonidos.|Haz sonar el himno de los elfos.","Los guardianes del hielo protegen una llave antigua.|Averigua el orden de las señales.|Abre el santuario de cristal.","El abeto mayor se ha quedado sin adornos.|Recupera las piezas por el bosque.|Completa su decoración luminosa.","Un farol transmite palabras cifradas desde una torre.|Resuelve la señal que llega a la plaza.|Reúne a los habitantes junto al puente.","Una isla de pingüinos aparece entre bancos de hielo.|Reconstruye la ruta del barco.|Encuentra su faro antes de que anochezca.","Siete sellos mantienen cerrada una biblioteca.|Busca y ordena las marcas ocultas.|Descubre la historia que se guarda dentro.","Un muñeco de nieve ha perdido su sombrero y sus pistas.|Recorre los jardines para reunirlas.|Devuélvele sus objetos y su sonrisa.","Las nubes están más bajas que nunca.|Traza una ruta por el cielo sin perder los puntos.|Alcanza la plataforma de despegue.","El faro no puede proyectar su luz hacia las estrellas.|Resuelve el mecanismo de su lente.|Enciende el haz que guía a los viajeros.","Una carta extraña aparece dentro de un reloj del taller.|Descifra las instrucciones del inventor.|Pon en marcha su obra sorpresa.","Los elfos han preparado una prueba de coordinación.|Supera las estaciones de entrenamiento.|Obtén el permiso para el trabajo final.","El solsticio altera los reflejos del puente.|Recorre cada pasarela siguiendo las pistas.|Devuelve la luz al otro lado del río.","Una bahía helada esconde cajas de suministros.|Busca las marcas entre el hielo.|Prepara el puerto para recibir visitas.","El bosque susurra nombres de antiguas estrellas.|Escucha su orden a través de símbolos.|Recupera el mapa que guarda entre las ramas.","Una corona de cristales está dividida en piezas.|Encuentra los fragmentos correctos.|Reúne la corona para la ceremonia polar.","Las luces de una expedición se han dispersado.|Reúne las siete señales del grupo.|Abre el sendero de vuelta a la aldea.","El festival necesita que todos sus puestos estén listos.|Organiza los objetos y las pistas.|Inaugura la fiesta en la gran plaza.","Los renos observan un cielo que cambia de forma.|Busca el dibujo de las constelaciones.|Termina el mapa nocturno de vuelo.","Un camino se oculta bajo la niebla.|Encuentra sus balizas siguiendo el orden justo.|Llega hasta el refugio de los exploradores.","Las llaves del cielo han cambiado de lugar.|Relaciona las formas con sus cerraduras.|Desbloquea la puerta del observatorio.","La rampa de despegue permanece apagada.|Revisa las luces y los mecanismos.|Completa el ensayo previo a la gran jornada.","El ensayo general necesita una coordinación perfecta.|Resuelve las pruebas del equipo de vuelo.|Deja todo preparado para la noche siguiente.","El gran recorrido mundial comienza en el Polo Norte.|Descifra las ciudades y prepara cada parada ilustrada.|Acompaña las diecinueve etapas de la expedición complementaria.","La aldea se despierta después de la gran noche.|Reconstruye los recuerdos y abre los últimos regalos.|Celebra el cierre del calendario con el equipo."].map(x=>x.split('|'));
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
      : shuffle(['buscar','laberinto','memoria','taller','clasificar','atrapar','ritmo'],rngFor(day*977+404)).concat('final');
    const memoryKey='np:expedition:v'+(day===12?'4':'3')+':'+date;
    let index=Math.max(0,Math.min(plan.length,Number(localStorage.getItem(memoryKey)||0)));
    let cleanup=()=>{};
    let open=true;
    let seed=day*271+2026;
    const rng=rngFor(seed);
    const theme=uniqueMissions[day] || scenes[day%scenes.length];
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
      shell.append(h('p','El laboratorio ha perdido su energía. Fabrica cuatro cristales únicos. ¡No tienes que adivinar combinaciones! El panel te indica qué mando subir o bajar.','npq-description'));
      const recipes=[
        [3,6,5,'Copo de ventana'],[7,4,8,'Aurora de hielo'],
        [5,9,3,'Cristal perfecto'],[9,7,9,'Supercopo polar']
      ];
      let round=0,helpStep=0;
      const screen=h('div','','npq-experiment-screen');
      const art=document.createElementNS('http://www.w3.org/2000/svg','svg');
      art.setAttribute('viewBox','0 0 220 220');
      art.setAttribute('aria-label','Cristal de nieve interactivo');
      art.style.cssText='width:min(270px,85%);height:220px;display:block;margin:auto;filter:drop-shadow(0 4px 12px #008bb655)';
      for(let k=0;k<6;k++){
        const g=document.createElementNS('http://www.w3.org/2000/svg','g');
        g.setAttribute('transform','translate(110 110) rotate('+(k*60)+')');
        const path=document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d','M0 0 L0 -81 M0 -50 L-23 -63 M0 -50 L23 -63 M0 -29 L-19 -38 M0 -29 L19 -38');
        path.setAttribute('fill','none');path.setAttribute('stroke','#58d9ff');
        path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');
        path.classList.add('npq-ice-path');g.append(path);art.append(g);
      }
      screen.append(art);
      const title=h('h3','','npq-order');
      const guide=h('p','','npq-hint');
      guide.setAttribute('role','status');
      const count=h('p','','npq-counter');
      const summary=h('div','','npq-lab-feedback');
      const controls=[],statuses=[];
      const labels=['❄️ Frío','🔷 Simetría','✨ Brillo'];
      labels.forEach((label,n)=>{
        const wrapper=h('label','','npq-lab-control');
        const caption=h('span',label);
        const value=h('b','5');
        const input=document.createElement('input');
        input.type='range';input.min='0';input.max='10';input.step='1';input.value='5';
        input.setAttribute('aria-label',label);
        input.addEventListener('input',()=>{value.textContent=input.value;updateSnow();updateHints();});
        const status=h('span','', 'npq-lab-status');
        status.setAttribute('role','status');
        wrapper.append(caption,input,value,status);
        controls.push(input);statuses.push(status);
        shell.append(wrapper);
      });
      function updateSnow(){
        const [cold,symmetry,shine]=controls.map(el=>Number(el.value));
        for(const line of art.querySelectorAll('.npq-ice-path')){
          line.setAttribute('stroke-width',String(2+Math.round(symmetry/2)));
          line.setAttribute('stroke','hsl('+(175+cold*7)+' 90% '+(50+shine*3)+'%)');
        }
        art.style.transform='rotate('+(symmetry*6)+'deg) scale('+(0.82+shine*.03)+')';
      }
      function target(){return recipes[round].slice(0,3);}
      function updateHints(){
        const expected=target(),actual=controls.map(el=>Number(el.value));
        let matched=0;
        statuses.forEach((node,n)=>{
          const diff=expected[n]-actual[n];
          if(!diff){node.textContent='✓ CORRECTO';node.classList.add('npq-lab-correct');matched++;}
          else{
            node.textContent=(diff>0?'↑ SUBE '+diff:'↓ BAJA '+(-diff));
            node.classList.remove('npq-lab-correct');
          }
        });
        summary.textContent='⚙️ Ajustes correctos: '+matched+'/3';
        if(matched===3) guide.textContent='✅ ¡Cristal estabilizado! Pulsa ACTIVAR EL CRISTAL para guardarlo.';
        else guide.textContent='🔎 Pista: sigue las flechas de cada mando. Cuando los tres estén en verde, activa el cristal.';
      }
      function showTarget(){
        const [cold,symmetry,shine,name]=recipes[round];
        title.textContent='Cristal '+(round+1)+'/4: '+name;
        count.textContent='Cristales fabricados: '+round+'/4';
        // The three target values are always visible: do not force blind guesses.
        summary.setAttribute('aria-label','Objetivo del experimento');
        controls.forEach((control,n)=>{
          control.value='5';
          const valueNode=control.parentElement&&control.parentElement.querySelector('b');
          if(valueNode)valueNode.textContent='5';
        });
        updateSnow();updateHints();
      }
      const help=button('💡 ¿Necesitas ayuda?',()=>{
        const expected=target(),actual=controls.map(x=>Number(x.value));
        const wrong=actual.findIndex((v,n)=>v!==expected[n]);
        if(wrong<0){guide.textContent='¡Todo correcto! Pulsa el botón rojo para fabricar el copo.';return;}
        guide.textContent='Pista concreta: '+labels[wrong]+' debe quedar en '+expected[wrong]+
          '. Está ahora en '+actual[wrong]+'. Desliza hacia '+(actual[wrong]<expected[wrong]?'la derecha':'la izquierda')+'.';
      },'npq-btn');
      const check=button('🧪 ACTIVAR EL CRISTAL',()=>{
        const expected=target(),actual=controls.map(c=>Number(c.value));
        const match=actual.every((v,n)=>v===expected[n]);
        if(!match){
          updateHints();
          guide.textContent='Casi: '+labels[actual.findIndex((v,n)=>v!==expected[n])]+
            ' aún no coincide. Mira las flechas verdes y rojas debajo de los mandos.';
          return;
        }
        round++;
        if(round===recipes.length){completeTask();return;}
        showTarget();
      },'npq-button-big');
      shell.append(screen,title,summary,guide,count,help,check);
      showTarget();
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
      const clues=[
        'Empieza en el extremo norte del planeta.',
        'Aquí se encuentra una famosa Ópera junto al puerto de Australia.',
        'La capital japonesa es el siguiente destino.',
        'Capital de Corea del Sur, cerca de la península coreana.',
        'Capital de Tailandia, al sureste de Asia.',
        'Una de las grandes ciudades del norte de la India.',
        'Una gran ciudad de Emiratos Árabes Unidos con rascacielos.',
        'Ciudad egipcia cercana a las pirámides de Guiza.',
        'Capital de Grecia, donde está la Acrópolis.',
        'Capital italiana junto al Coliseo.',
        'Capital española: prepara los regalos de la Península Ibérica.',
        'Capital del Reino Unido, junto al Támesis.',
        'Capital de Islandia, con auroras y paisajes geotérmicos.',
        'La ciudad estadounidense donde está la Estatua de la Libertad.',
        'Capital mexicana, situada en una gran altiplanicie.',
        'Capital peruana frente al océano Pacífico.',
        'Capital chilena al pie de los Andes.',
        'Capital argentina, junto al Río de la Plata.',
        'Regresamos a nuestro hogar del extremo norte.'
      ];
      const coords=[
        [0,86],[151,-34],[139,36],[127,37],[100,13],[77,28],[55,25],
        [31,30],[23,38],[12,42],[-3,40],[0,51],[-22,64],
        [-74,41],[-99,19],[-77,-12],[-70,-33],[-58,-34],[0,86]
      ];
      shell.append(h('p',isBig?
        '🎅 EL GRAN EVENTO DEL 24: tras superar los capítulos de preparación, pilotarás el recorrido ilustrado por 19 paradas del mundo, recogerás sellos y desbloquearás el gran final. Es una simulación festiva, no seguimiento GPS real.':
        'Ya tienes todos los materiales. Sigue las seis paradas de la ruta final para terminar '+title.toLowerCase()+'.',
        'npq-description'));
      const route=h('div','','npq-route');
      const city=h('div','','npq-route-current');
      const question=h('p','','npq-counter');
      const options=h('div','','npq-route-options');
      const note=h('p','','npq-hint');
      const gifts=h('p','🎁 Regalos virtuales: 0 · Sellos del viaje: 0','npq-counter');
      let step=0,animating=false,flightFrame=0;
      let map=null,trail=null,sleigh=null,stopDots=[];
      const svgNS='http://www.w3.org/2000/svg';
      const mapPoint=([longitude,latitude])=>[
        Math.round((longitude+180)/360*900),
        Math.max(32,Math.min(385,Math.round((83-latitude)/166*410)))
      ];
      function svg(tag,attrs={}){
        const el=document.createElementNS(svgNS,tag);
        for(const [name,value] of Object.entries(attrs))el.setAttribute(name,String(value));
        return el;
      }
      if(isBig){
        map=h('div','','npq-world');
        const surface=svg('svg',{viewBox:'0 0 900 410',role:'img','aria-label':'Mapa ilustrado del viaje de Nochebuena con paradas y trineo'});
        surface.append(svg('rect',{x:0,y:0,width:900,height:410,fill:'#098dbb',rx:18}));
        for(let k=1;k<6;k++)surface.append(svg('line',{
          x1:0,y1:k*68,x2:900,y2:k*68,stroke:'#ffffff',opacity:'.14','stroke-width':1
        }));
        for(let k=1;k<9;k++)surface.append(svg('line',{
          x1:k*100,y1:0,x2:k*100,y2:410,stroke:'#ffffff',opacity:'.11','stroke-width':1
        }));
        // A stylized cartographic background; not intended to represent exact borders.
        [
          'M80 90L132 42 200 53 227 89 187 120 177 179 132 188 101 151Z',
          'M192 193L241 222 259 278 237 345 213 366 190 313 171 247Z',
          'M390 90L419 57 465 67 499 97 488 143 457 158 440 208 402 176Z',
          'M490 74L535 50 595 55 646 82 712 92 740 116 700 152 637 149 618 203 563 211 520 163Z',
          'M677 258L737 243 791 281 802 328 761 351 697 334Z',
          'M423 213L485 221 522 267 499 315 457 325 426 281Z'
        ].forEach(d=>surface.append(svg('path',{d,fill:'#a8d6b1',stroke:'#d8efc1','stroke-width':3,opacity:'.87'})));
        trail=svg('polyline',{points:'',fill:'none',stroke:'#ffe96d','stroke-width':4,
          'stroke-linecap':'round','stroke-linejoin':'round','stroke-dasharray':'8 5'});
        surface.append(trail);
        stops.forEach((stop,i)=>{
          const [x,y]=mapPoint(coords[i]);
          const dot=svg('circle',{cx:x,cy:y,r:5,fill:'#fff9a7',stroke:'#ffffff','stroke-width':2,opacity:'.5'});
          surface.append(dot);stopDots.push(dot);
        });
        sleigh=svg('text',{x:450,y:15,'font-size':34,'text-anchor':'middle'});
        sleigh.textContent='🛷';surface.append(sleigh);
        map.append(surface);
        shell.append(map);
      }
      function updateMap(){
        if(!map)return;
        const reached=coords.slice(0,Math.min(step+1,coords.length));
        trail.setAttribute('points',reached.map(p=>mapPoint(p).join(',')).join(' '));
        stopDots.forEach((dot,i)=>{
          dot.setAttribute('opacity',i<=step?'1':'.35');
          dot.setAttribute('r',i===step?'8':'5');
        });
        const pos=mapPoint(coords[Math.min(step,coords.length-1)]);
        sleigh.setAttribute('x',pos[0]);sleigh.setAttribute('y',pos[1]-14);
        gifts.textContent='🎁 Regalos virtuales: '+(step*20)+' · Sellos del viaje: '+step+'/19';
      }
      function finishMove(){
        animating=false;
        step++;
        note.textContent='✅ ¡Sello desbloqueado! Has llegado a '+stops[step-1][0]+'.';
        if(step===stops.length){completeTask();return;}
        show();
      }
      function fly(){
        if(!map){finishMove();return;}
        const from=mapPoint(coords[Math.min(step,coords.length-1)]);
        const to=mapPoint(coords[Math.min(step+1,coords.length-1)]);
        const start=performance.now();
        animating=true;
        const animate=t=>{
          if(!map?.isConnected||!open)return;
          const progress=Math.min(1,(t-start)/950);
          const smooth=progress*progress*(3-2*progress);
          const x=from[0]+(to[0]-from[0])*smooth;
          const y=from[1]+(to[1]-from[1])*smooth-25*Math.sin(progress*Math.PI);
          sleigh.setAttribute('x',String(x));sleigh.setAttribute('y',String(y-14));
          if(progress<1)flightFrame=requestAnimationFrame(animate);
          else finishMove();
        };
        flightFrame=requestAnimationFrame(animate);
        cleanup=()=>cancelAnimationFrame(flightFrame);
      }
      function show(){
        if(!nextIfLive())return;
        const goal=stops[step];
        city.textContent=isBig ? '🌍 Parada '+(step+1)+': '+clues[step] : goal[1]+' '+goal[0];
        question.textContent='Destino '+(step+1)+' de '+stops.length+' · Selecciona el lugar correcto';
        route.textContent=stops.slice(0,step).map(x=>x[1]).join(' — ')+' 🛷';
        updateMap();
        options.replaceChildren();
        const wrong1=stops[(step+3)%stops.length][0],wrong2=stops[(step+6)%stops.length][0];
        const labels=[...new Set([goal[0],wrong1,wrong2])];
        while(labels.length<3)labels.push('Estación '+labels.length);
        shuffle(labels,rng).forEach(label=>options.append(button(label,()=>{
          if(animating||!nextIfLive())return;
          if(label!==goal[0]){
            note.textContent='💡 La pista está en la descripción de la parada. Intenta localizar el país o el monumento.';return;
          }
          fly();
        },'npq-destination')));
      }
      show();shell.append(route,city,question,options,note);
      if(isBig)shell.append(gifts);
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