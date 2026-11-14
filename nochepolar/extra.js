/* NOCHEPOLAR: ampliación no oficial de Google Santa Tracker.
   Original Santa Tracker: Copyright Google LLC, Apache-2.0 / assets CC BY.
   Actividades originales de NOCHEPOLAR: 2026. */
(() => {
  'use strict';
  if (document.getElementById('np-entry')) return;

  const titles = [
    'El despertar del Polo','Bosque de faroles','El reloj de hielo','Taller de juguetes perdidos',
    'Avalancha de estrellas','El puente de azúcar','Código del trineo','Tormenta de confeti',
    'El secreto del cacao','Carrera de renos','Las campanas invisibles','Noche de auroras',
    'Laboratorio de copos','El mapa oculto','El gran cartero','Misterio del cascanueces',
    'Luces del bosque','El lago espejo','Expedición polar','La estación de vapor',
    'Puerta de nieve','La canción del viento','Fábrica de caramelos','Baile de pingüinos',
    'El castillo brillante','En busca del cometa','Los relojes mágicos','Ruta de regalos',
    'El cielo de cristal','Encender diciembre',
    'Primera nevada','La fábrica musical','Guardianes del hielo','Travesía del abeto',
    'El código del farol','La isla de los pingüinos','La noche de los siete sellos',
    'El rescate del muñeco','Vuelo sobre las nubes','Faro de estrellas',
    'El misterio del taller','La prueba de los elfos','Puente del solsticio',
    'La bahía helada','El bosque susurrante','La corona polar',
    'La expedición de luz','El gran festival','El cielo de los renos',
    'El camino invisible','Las llaves del cielo','Preparar el despegue',
    'Ensayo general','EL GRAN VIAJE MUNDIAL','El despertar de Navidad'
  ];
  const words = [
    'NIEVE','ABETO','RELOJ','JUGUETE','ESTRELLA','PUENTE','TRINEO','CONFETI',
    'CACAO','RENO','CAMPANA','AURORA','CRISTAL','BRUJULA','CARTA','NUEZ',
    'FAROL','ESPEJO','EXPEDICION','VAPOR','PUERTA','VIENTO','CARAMELO','PINGUINO',
    'CASTILLO','COMETA','MINUTOS','REGALO','CIELO','DICIEMBRE',
    'NEVADA','MUSICA','GUARDIAN','ARBOL','FARO','ISLA','SELLO','MUÑECO',
    'NUBE','ESTRELLAS','TALLER','ELFO','SOLSTICIO','BAHIA','BOSQUE','CORONA',
    'LUZ','FESTIVAL','RENOS','CAMINO','LLAVE','DESPEGUE','ENSAYO','MUNDO','NAVIDAD'
  ];
  const icons = ['❄️','🎄','⏰','🧸','⭐','🍭','🛷','🎉','☕','🦌','🔔','🌌','🔬','🗺️','💌','🎭','💡','🪞','🧭','🚂','🚪','🎵','🍬','🐧','🏰','☄️','🕰️','🎁','🌠','✨'];
  const types = ['destreza','memoria','enigma','orden','codigo','estrellas','secuencia','reaccion'];
  const trivia = [
    ['¿En qué hemisferio está el Polo Norte?', ['Norte','Sur','Este'], 0],
    ['¿Qué instrumento tiene teclas blancas y negras?', ['Tambor','Piano','Flauta'], 1],
    ['¿Cuál de estos es un mamífero?', ['Reno','Pingüino','Trucha'], 0],
    ['¿Cuál es el planeta más cercano al Sol?', ['Mercurio','Marte','Júpiter'], 0],
    ['¿Qué ocurre cuando el agua se congela?', ['Pasa a sólido','Hierve','Se convierte en gas'], 0],
    ['¿Cuál de estos es un océano?', ['Atlántico','Sáhara','Andes'], 0],
    ['¿Cuántos días tiene diciembre?', ['28','30','31'], 2]
  ];
  const season = '2026';
  const zone = 'Europe/Madrid';
  const localDay = () => new Intl.DateTimeFormat('en-CA', {
    timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  const isoFor = (i) => i < 30 ? season + '-11-' + String(i + 1).padStart(2, '0')
    : season + '-12-' + String(i - 29).padStart(2, '0');
  const indexNow = titles.findIndex((_, i) => isoFor(i) === localDay());
  const storageKey = (i) => 'np:v' + (i === 12 ? '4' : '3') + ':' + season + ':' + i;
  const won = (i) => localStorage.getItem(storageKey(i)) === 'done';
  const host = document.createElement('section');
  host.id = 'np-root';
  host.innerHTML = '<button id="np-entry" type="button" aria-label="Abrir las misiones de NOCHEPOLAR">🎁 <span>55 aventuras</span></button>' +
    '<div id="np-screen" role="dialog" aria-label="NOCHEPOLAR" aria-modal="true" hidden>' +
    '<div class="np-window"><div class="np-head"><div class="np-brand">❄️ NOCHEPOLAR <small>Edición ampliada</small></div>' +
    '<button id="np-close" type="button" aria-label="Cerrar">✕</button></div>' +
    '<div class="np-content" id="np-content"></div>' +
    '<footer>NOCHEPOLAR · Aventuras de invierno · Adaptación no oficial de Santa Tracker</footer></div></div>';
  document.body.appendChild(host);
  const screen = document.getElementById('np-screen');
  const content = document.getElementById('np-content');
  const nativeBack = document.createElement('button');
  nativeBack.id = 'np-native-back';
  nativeBack.className = 'np-native-back';
  nativeBack.type = 'button';
  nativeBack.textContent = '⌂';
  nativeBack.title = 'Volver a la aldea';
  nativeBack.setAttribute('aria-label', 'Volver a la aldea original');
  nativeBack.addEventListener('click', () => {
    clearExpedition();
    leaveNative();
    screen.hidden = true;
  });
  screen.querySelector('.np-window').append(nativeBack);
  function enterNative(scene) {
    screen.hidden = false;
    screen.classList.add('np-native-mode');
    ['np-cine','np-arcade','np-calendar','np-gameplay','np-passport','np-adventure','np-weekly','np-kings','np-world'].forEach(c=>screen.classList.remove(c));
    screen.classList.add('np-'+scene);
    nativeBack.hidden = false;
  }
  function leaveNative() {
    screen.classList.remove('np-native-mode','np-cine','np-arcade','np-calendar','np-gameplay','np-passport','np-adventure','np-weekly','np-kings','np-world');
    nativeBack.hidden = true;
  }
  nativeBack.hidden = true;
  function decorativeScene() {
    const sky = h('div','','np-scene-decor');
    sky.setAttribute('aria-hidden','true');
    sky.append(h('div','❄　✧　✦　❄　⋆　✧　❄','np-scene-snow'));
    return sky;
  }
  const entry = document.getElementById('np-entry');
  entry.innerHTML = '🎄 <span>Nuevo barrio ↓</span>';
  function scrollToDistrict() {
    const send = () => {
      const players=Array.from(document.querySelectorAll('santa-gameloader'));
      const frames=players.flatMap(p=>Array.from(p.shadowRoot?.querySelectorAll('iframe')||[]));
      const village=frames.find(f=>(f.src||'').includes('/modvil/'));
      if (!village?.contentWindow) return false;
      village.contentWindow.postMessage({source:'nochepolar-main',action:'scroll-quarter'},location.origin);
      return true;
    };
    if(send())return;
    if(window.santaApp && typeof window.santaApp.go === 'function') {
      window.santaApp.go('');
      setTimeout(()=>{if(!send())showCalendar();},1100);
    } else showCalendar();
  }
  entry.addEventListener('click',scrollToDistrict);
  document.getElementById('np-close').addEventListener('click', () => { screen.hidden = true; clearExpedition(); leaveNative(); });
  screen.addEventListener('click', e => {if (e.target === screen && !screen.classList.contains('np-native-mode')) {screen.hidden = true;clearExpedition();}});
  document.addEventListener('keydown', e => {if (e.key === 'Escape' && !screen.hidden) {screen.hidden = true;clearExpedition();leaveNative();}});
  const h = (tag, text, cls = '') => {
    const el = document.createElement(tag);
    el.textContent = text;
    if (cls) el.className = cls;
    return el;
  };
  const btn = (label, action, cls = '') => {
    const el = h('button', label, cls);
    el.type = 'button';
    el.addEventListener('click', action);
    return el;
  };
  const status = i => won(i) ? '✓ Completado' :
    isoFor(i) > localDay() ? '🔒 Próximamente' :
    isoFor(i) < localDay() ? '⌛ Cerrado' : '▶ ¡Solo hoy!';
  const goBack = () => content.prepend(btn('← Calendario', showCalendar, 'np-back'));

  const originals = [
    ['🛷','Jetpack','jetpack'],['🧪','Code Lab','codelab'],['🏂','Pistas navideñas','elfski'],
    ['🎁','Envolver regalos','wrapbattle'],['🐧','Penguin Dash','penguindash'],
    ['🦌','Carrera de renos','runner'],['🎨','Santa Selfie +','santaselfie'],
    ['🎺','Banda de música','jamband'],['🧱','Construir','build'],
    ['🧠','Memoria','matching'],['🌎','Mercator','mercator'],
    ['🎨','Lienzo de Papá Noel','santascanvas'],['🚀','Despegue','takeoff'],
    ['❄️','Snowball','snowball'],['🪂','Planeador','glider'],
    ['🌪️','Túnel de viento','windtunnel']
  ];
  const cinema = [
    ['🎬','La aventura del coche','carpool'],['🚀','Preparando el despegue','liftoff'],
    ['📸','Selfies en la aldea','selfies'],['🏖️','Vacaciones polares','onvacation'],
    ['🐧','Una prueba de pingüinos','penguinproof'],['🎄','Papá Noel ha vuelto','santasback'],
    ['📡','Una señal desde el espacio','satellite'],['🏗️','En el taller','workshop'],
    ['🌙','La noche de la aldea','yulelog'],['🛷','Todo preparado','takeoff'],
    ['😴','Horas de descanso','tired'],['💡','Se hace la luz','likealight']
  ];
  const clearExpedition = () => {
    if (window.NochepolarActive?.dispose) window.NochepolarActive.dispose();
    window.NochepolarActive = null;
    if (window.NochepolarPlayingGame?.dispose) window.NochepolarPlayingGame.dispose();
    window.NochepolarPlayingGame = null;
    if (window.NochepolarSpecials?.dispose) window.NochepolarSpecials.dispose();
  };
  function openOriginal(route) {
    clearExpedition();
    screen.hidden = true;
    leaveNative();
    if (window.santaApp && typeof window.santaApp.go === 'function') {
      window.santaApp.go(route);
    } else {
      const base = '/ivanguys-web/nochepolar/intl/es/';
      window.location.href = base + route + '.html';
    }
  }
  function toolbar() {
    const group = h('div','','np-hub-nav');
    group.append(
      btn('🗓️ Calendario',showCalendar,'np-hub-link'),
      btn('🎬 Cine original',()=>showCollection('cine'),'np-hub-link'),
      btn('🎮 Juegos nuevos + clásicos',()=>showCollection('arcade'),'np-hub-link'),
      btn('🏅 Pasaporte',showPassport,'np-hub-link'),
      btn('🎪 8 grandes eventos',showWeekly,'np-hub-link'),
      btn('👑 Reyes Magos',showKings,'np-hub-link'),
      btn('🚂 Tren Polar',()=>showWorld('tren'),'np-hub-link'),
      btn('🧝 Mi elfo',()=>showWorld('elfo'),'np-hub-link'),
      btn('🌦 Clima',()=>showWorld('clima'),'np-hub-link')
    );
    return group;
  }
  function showWeekly() {
    clearExpedition();enterNative('weekly');
    content.replaceChildren(decorativeScene(),toolbar());
    const holder=h('div','','np-special-host');content.append(holder);
    window.NochepolarWorld?.eventHeader?.(content,'weekly');
    if(window.NochepolarSpecials?.weekly)window.NochepolarSpecials.weekly(holder,showCalendar);
    else holder.append(h('p','No se pudo cargar el módulo de eventos. Actualiza la página.'));
  }
  function showKings() {
    clearExpedition();enterNative('kings');
    content.replaceChildren(decorativeScene(),toolbar());
    const holder=h('div','','np-special-host');content.append(holder);
    window.NochepolarWorld?.eventHeader?.(content,'kings');
    if(window.NochepolarSpecials?.kings)window.NochepolarSpecials.kings(holder,showCalendar);
    else holder.append(h('p','No se pudo cargar el módulo de Reyes. Actualiza la página.'));
  }
  function showWorld(kind) {
    clearExpedition();enterNative('world');
    content.replaceChildren(decorativeScene(),toolbar());
    const panel=h('div','','np-world-feature');content.append(panel);
    window.NochepolarWorld?.feature?.(panel,kind,openWorld,showCalendar);
  }
  function openWorld(action){
    switch(action){
      case 'calendar':showCalendar();break;
      case 'cine':showCollection('cine');break;
      case 'arcade':showCollection('arcade');break;
      case 'weekly':showWeekly();break;
      case 'kings':showKings();break;
      case 'passport':showPassport();break;
      case 'elfo':showWorld('elfo');break;
      case 'reno':showNewGame('reno');break;
      case 'circuito':showNewGame('circuito');break;
      case 'village':clearExpedition();leaveNative();screen.hidden=true;break;
      default:showCalendar();
    }
  }
  function showCollection(kind) {
    clearExpedition();
    enterNative(kind==='cine'?'cine':'arcade');
    content.replaceChildren(decorativeScene(),toolbar());
    content.append(h('h1',kind==='cine'?'🎬 Cine de la aldea':'🎮 Arcade del Polo Norte'));
    content.append(h('p',kind==='cine'?
      'Clips y escenas animadas del Santa Tracker original. Pulsa para ver cada uno dentro del juego auténtico.':
      'Dos juegos originales añadidos por NOCHEPOLAR, junto con los juegos auténticos de Santa Tracker. No sustituimos ninguno de los originales.',
      'np-intro'));
    window.NochepolarWorld?.interior?.(content,kind,openWorld);
    if(kind==='cine') {
      const upcoming = h('section','','np-film-coming');
      upcoming.setAttribute('aria-label','Película original en producción');
      upcoming.append(
        h('div','🎞️  ✨  🎄','np-film-reels'),
        h('h2','La gran película de NOCHEPOLAR'),
        h('p','En producción · Una aventura animada original. Se estrenará cuando estén terminados y comprobados todos los fotogramas, escenas y sonidos.','np-film-copy'),
        h('div','🔒 Próximamente · No disponible todavía','np-film-lock')
      );
      content.append(upcoming);
    }
    const items = kind==='cine'?cinema:originals;
    const cards = h('div','','np-hub-cards');
    if(kind!=='cine'){
      cards.append(
        btn('🦌 Reno Express · Nuevo',()=>showNewGame('reno'),'np-hub-card np-hub-feature'),
        btn('💡 Circuitos del Polo · Nuevo',()=>showNewGame('circuito'),'np-hub-card np-hub-feature')
      );
    }
    for(const [emoji,name,route] of items){
      const card = btn(emoji+'  '+name+'  ›',()=>openOriginal(route),'np-hub-card');
      cards.append(card);
    }
    content.append(cards);
    content.append(btn('Volver al calendario',showCalendar,'np-back'));
  }
  function showPassport() {
    clearExpedition();
    enterNative('passport');
    content.replaceChildren(decorativeScene(),toolbar());
    const done = titles.map((name,i)=>({name,i})).filter(x=>won(x.i));
    content.append(h('h1','🏅 Pasaporte de aventuras'));
    content.append(h('p','Eventos completados en este navegador: '+done.length+' de 55. Cada fecha cuenta una sola vez y las misiones se cierran al terminar el día.','np-intro'));
    const gallery = h('div','','np-hub-cards');
    for(const x of done)gallery.append(h('div',icons[x.i%icons.length]+'  '+x.name,'np-hub-medal'));
    if(!done.length) gallery.append(h('p','Completa la expedición de hoy para conseguir tu primera insignia.'));
    window.NochepolarWorld?.passport?.(content,{completedDays:done});
    content.append(gallery);
    content.append(btn('Volver al calendario',showCalendar,'np-back'));
  }

  function showNewGame(which) {
    clearExpedition();
    enterNative('gameplay');
    content.replaceChildren();
    if (!window.NochepolarArcade || !window.NochepolarArcade[which]) {
      content.append(h('p','El juego nuevo no se ha cargado. Actualiza la página e inténtalo de nuevo.','np-intro'));
      return;
    }
    const stage = h('section','','np-new-game-stage');
    content.append(stage);
    window.NochepolarPlayingGame = window.NochepolarArcade[which](stage,()=>showCollection('arcade'));
  }
  function launchSelfiePlus(){
    clearExpedition();
    screen.hidden=true;
    leaveNative();
    // Directly navigate to Google's existing selfie, not a replacement canvas.
    try{
      if(window.santaApp&&typeof window.santaApp.go==='function')
        window.santaApp.go('santaselfie');
      else {window.location.href='/ivanguys-web/nochepolar/intl/es/santaselfie.html';return;}
    }catch(e){window.location.href='/ivanguys-web/nochepolar/intl/es/santaselfie.html';return;}
    let attempts=0;
    const openInFrame=()=>{
      if(attempts++>=24)return;
      try {
        const players=Array.from(document.querySelectorAll('santa-gameloader'));
        const frames=players.flatMap(player=>Array.from(player.shadowRoot?.querySelectorAll('iframe')||[]));
        const target=frames.find(frame=>(frame.src||'').includes('/santaselfie/'));
        if(target?.contentWindow){
          const child=target.contentWindow;
          if(child.NochepolarSelfie&&typeof child.NochepolarSelfie.open==='function'){
            child.NochepolarSelfie.open();return;
          }
          child.postMessage({type:'np:selfie:open'},location.origin);
          // Recover from an extension script that failed to load in the original iframe.
          try {
            const childDoc=target.contentDocument;
            if(childDoc?.querySelector('#module-santaselfie .scene')&&
               !childDoc.getElementById('np-selfie-hub')&&!childDoc.getElementById('np-selfie-injected')){
              const css=childDoc.createElement('link');
              css.rel='stylesheet';css.href='/ivanguys-web/nochepolar/selfie-enhance.css';
              childDoc.head.append(css);
              const tag=childDoc.createElement('script');
              tag.id='np-selfie-injected';
              tag.src='/ivanguys-web/nochepolar/selfie-enhance.js';
              childDoc.head.append(tag);
            }
          }catch(e){}
        }
      }catch(e){}
      setTimeout(openInFrame,520);
    };
    setTimeout(openInFrame,700);
  }
  // Always-visible shortcuts: show exactly where the movies and additional games are.
  const shortcuts = h('nav','','np-shortcuts');
  shortcuts.setAttribute('aria-label','Accesos de NOCHEPOLAR');
  shortcuts.append(
    btn('🎬 CINE',()=>{screen.hidden=false;showCollection('cine')},'np-shortcut'),
    btn('🎮 JUEGOS',()=>{screen.hidden=false;showCollection('arcade')},'np-shortcut'),
    btn('🏅 PASAPORTE',()=>{screen.hidden=false;showPassport()},'np-shortcut'),
    btn('🎅 SELFIE+',launchSelfiePlus,'np-shortcut np-shortcut-selfie')
  );
  host.append(shortcuts);
  function showCalendar() {
    clearExpedition();
    enterNative('calendar');
    content.replaceChildren(decorativeScene(),toolbar());
    content.append(h('h1', '55 días. 55 aventuras. Un gran final.'));
    content.append(h('p', 'Cada fecha descubre una misión distinta. Cuando pasa el día, se cierra para siempre. Los juegos clásicos de Santa Tracker siguen detrás de este portal.', 'np-intro'));
    const specialLinks=h('div','','nps-callouts');
    specialLinks.append(btn('🎪 OCHO GRANDES EVENTOS SEMANALES',showWeekly,'nps-button'),btn('👑 5 Y 6 DE ENERO · REYES MAGOS',showKings,'nps-button'));
    content.append(specialLinks);
    content.append(h('p','🎅 24 de diciembre: gran aventura ilustrada por 19 ciudades y acceso al seguimiento original de Google durante Nochebuena.','np-intro'));
    for (const [month, start, end] of [['NOVIEMBRE', 0, 30], ['DICIEMBRE', 30, 55]]) {
      const heading = h('h2', month);
      content.append(heading);
      const grid = h('div', '', 'np-calendar');
      for (let i = start; i < end; i++) {
        const day = i < 30 ? i + 1 : i - 29;
        const item = btn(String(day) + ' ' + (icons[i % icons.length]) + (i === 53 ? ' 🎅' : ''),
          () => showDay(i), 'np-date');
        if (i === titles.findIndex((_,j)=>isoFor(j)===localDay())) item.classList.add('np-today');
        if (won(i)) item.classList.add('np-done');
        if (i === 53) item.classList.add('np-grand');
        item.title = status(i);
        grid.append(item);
      }
      content.append(grid);
    }
    content.append(h('p', 'Completadas: ' + titles.filter((_,i) => won(i)).length + '/55 · Zona horaria: España peninsular', 'np-count'));
  }
  function showDay(i) {
    clearExpedition();
    enterNative('adventure');
    content.replaceChildren(decorativeScene(),toolbar());
    content.append(h('div', icons[i % icons.length], 'np-big-icon'));
    content.append(h('h1', titles[i]));
    content.append(h('p', isoFor(i) + ' · ' + status(i), 'np-day-status'));
    if(i===53){
      window.NochepolarWorld?.festive24?.(content);
      if(localDay()==='2026-12-24'){
        content.append(btn('🌍 Consultar el seguimiento oficial de Google',()=>window.open('https://santatracker.google.com/intl/es/','_blank','noopener,noreferrer'),'np-primary'));
        content.append(btn('🎄 Volver a la aldea original',()=>openOriginal(''),'np-hub-link'));
      }
    }
    if (i !== titles.findIndex((_,j)=>isoFor(j)===localDay()) || won(i)) {
      content.append(h('p', won(i) ? 'Esta misión ya se completó y no se puede repetir.' :
        'Solo se puede jugar en su fecha. Las actividades anteriores se cierran y las futuras siguen ocultas.', 'np-intro'));
      goBack();
      return;
    }
    const type = types[i % types.length];
    const box = h('div', '', 'np-game');
    content.append(box);
    function finish() {
      localStorage.setItem(storageKey(i), 'done');
      box.replaceChildren(h('div', '🏆', 'np-big-icon'), h('h2', '¡Misión completada!'), h('p', 'Se ha sellado tu pasaporte. ¡Mañana habrá una aventura nueva!'));
      box.append(btn('Volver al calendario', showCalendar, 'np-primary'));
    }
    if (window.NochepolarExpedition && typeof window.NochepolarExpedition.play === 'function') {
      const beginOriginal=()=>{
        window.NochepolarActive = window.NochepolarExpedition.play({
          box, day:i, title:titles[i], date:isoFor(i), onComplete:finish
        });
      };
      if(window.NochepolarWorld?.extraDay)
        window.NochepolarActive=window.NochepolarWorld.extraDay({box,day:i,title:titles[i],next:beginOriginal});
      else beginOriginal();
      goBack();
      return;
    }
    if (i === 53) { showFinal(i); return; }
    if (type === 'destreza') {
      let clicks = 0;
      box.append(h('h2', 'Atrapa siete destellos'), h('p', 'Encuentra el destello que cambia de sitio cada vez que lo tocas.'));
      const arena = h('div', '', 'np-arena');
      const target = btn('✨', () => {
        clicks++;
        if (clicks === 7) return finish();
        target.style.left = (8 + ((clicks * 47 + i * 13) % 75)) + '%';
        target.style.top = (8 + ((clicks * 31 + i * 7) % 70)) + '%';
        counter.textContent = 'Destellos: ' + clicks + '/7';
      }, 'np-target');
      target.style.left = '45%'; target.style.top = '35%';
      arena.append(target);
      const counter = h('p', 'Destellos: 0/7', 'np-count');
      box.append(arena, counter);
    } else if (type === 'memoria') {
      box.append(h('h2', 'Memoria polar'), h('p', 'Empareja las cuatro parejas antes de que se esfumen.'));
      const faces = ['🎁','🦌','🎄','⭐'];
      const cards = faces.concat(faces).map((sym, n) => ({sym, id: n, order: (n * 17 + i * 31) % 19}))
        .sort((a, b) => a.order - b.order);
      const grid = h('div', '', 'np-pairs');
      let first = null, busy = false, matched = 0;
      cards.forEach(c => {
        const tile = btn('?', () => {
          if (busy || tile.disabled || first === tile) return;
          tile.textContent = c.sym;
          if (!first) {first = tile; return;}
          if (first.textContent === tile.textContent) {
            first.disabled = tile.disabled = true;
            first.classList.add('np-match'); tile.classList.add('np-match');
            first = null;
            matched++;
            if (matched === 4) finish();
          } else {
            busy = true;
            const prev = first;
            setTimeout(() => {prev.textContent = tile.textContent = '?'; first = null; busy = false;}, 700);
          }
        }, 'np-memory-tile');
        grid.append(tile);
      });
      box.append(grid);
    } else if (type === 'enigma') {
      const q = trivia[(i / 8 | 0) % trivia.length];
      box.append(h('h2', 'Enigma de la aldea'), h('p', q[0]));
      q[1].forEach((option, n) => box.append(btn(option, () => {
        if (n === q[2]) finish();
        else hint.textContent = 'Ese intento no era correcto. Vuelve a probar.';
      }, 'np-option')));
      const hint = h('p', '', 'np-hint'); box.append(hint);
    } else if (type === 'orden') {
      box.append(h('h2', 'Ordena las señales'), h('p', 'Pulsa las balizas del menor al mayor sin equivocarte.'));
      const values = [3 + i % 7, 9 + i % 7, 16 + i % 7, 22 + i % 7];
      const scrambled = [values[2], values[0], values[3], values[1]];
      let current = 0;
      scrambled.forEach(v => box.append(btn(String(v), (e) => {
        if (v === values[current]) {
          current++; e.target.disabled = true; e.target.classList.add('np-match');
          if (current === 4) finish();
        } else hint.textContent = 'Busca primero la baliza más pequeña.';
      }, 'np-number')));
      const hint = h('p', '', 'np-hint'); box.append(hint);
    } else if (type === 'codigo') {
      const word = words[i];
      const shuffled = word.slice(1) + word[0];
      box.append(h('h2', 'Descifra el mensaje secreto'), h('p', 'Las letras se han desplazado una posición. Reconstruye la palabra: ' + shuffled));
      const inp = document.createElement('input');
      inp.placeholder = 'Tu respuesta'; inp.maxLength = 30; inp.autocomplete = 'off';
      const hint = h('p', '', 'np-hint');
      box.append(inp, btn('Descifrar', () => {
        if (inp.value.trim().toLocaleUpperCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'') ===
          word.normalize('NFD').replace(/[\u0300-\u036f]/g,'')) finish();
        else hint.textContent = 'Todavía no. Prueba de nuevo.';
      }, 'np-primary'), hint);
    } else if (type === 'estrellas') {
      box.append(h('h2', 'Rescata los regalos escondidos'), h('p', 'Entre las 16 cajas hay cinco regalos brillantes. Encuéntralos.'));
      const grid = h('div', '', 'np-pairs');
      const hits = [1,4,7,10,14].map(x => (x + i) % 16);
      let found = 0;
      for (let n=0; n<16; n++) {
        grid.append(btn('📦', e => {
          e.target.disabled = true;
          if (hits.includes(n)) {
            e.target.textContent = '🎁'; found++;
            if (found === 5) finish();
          } else e.target.textContent = '❄️';
        }, 'np-memory-tile'));
      }
      box.append(grid);
    } else if (type === 'secuencia') {
      box.append(h('h2', 'La melodía de los elfos'), h('p', 'Repite la secuencia iluminada, en el mismo orden.'));
      const seq = [i%4, (i+2)%4, (i+1)%4, (i+3)%4];
      const player = h('p', 'Observa la secuencia:', 'np-count');
      const display = h('p', seq.map(x => ['🔴','🔵','🟡','🟢'][x]).join(' → '), 'np-sequence');
      let pos=0;
      const row = h('div', '', 'np-actions');
      ['🔴','🔵','🟡','🟢'].forEach((v,n) => row.append(btn(v, () => {
        if (n !== seq[pos]) {pos=0; player.textContent = 'No era esa. Empieza de nuevo.'; return;}
        pos++; player.textContent = 'Aciertos: ' + pos + '/4';
        if (pos===4) finish();
      }, 'np-number')));
      box.append(player, display, row);
    } else if (type === 'reaccion') {
      box.append(h('h2', 'Reflejos del reno'), h('p', '¡Pulsa el botón cuando se vuelva verde! No antes.'));
      const state = h('p', 'Toca «Preparar» para comenzar.', 'np-count');
      let start=0, armed=false;
      const test = btn('Preparar', () => {
        if (!armed) {
          armed = true; test.textContent = 'Espera…';
          test.classList.remove('np-ready');
          state.textContent = 'Preparando el salto de luz…';
          setTimeout(() => { if (!test.isConnected) return; start=performance.now(); test.textContent='¡AHORA!';test.classList.add('np-ready');}, 1400 + (i % 4)*400);
        } else if (start) {
          const ms = Math.round(performance.now() - start);
          if (ms <= 1100) finish();
          else {test.textContent='Preparar otra vez';armed=false;start=0;state.textContent='Has tardado '+ms+' ms. Prueba a reaccionar antes.';}
        } else {state.textContent='¡Demasiado pronto!';}
      }, 'np-primary');
      box.append(test, state);
    }
    goBack();
  }

  function showFinal(i) {
    const box = h('div', '', 'np-game');
    box.append(h('h2', '🎅 La gran vuelta al mundo'), h('p', 'Una misión especial de Nochebuena: acompaña una expedición festiva y desbloquea las paradas del recorrido.'));
    const stops = ['Polo Norte','Sídney','Tokio','Nueva Delhi','El Cairo','Madrid','Nueva York','Ciudad de México','Polo Norte'];
    let step = 0;
    const stop = h('div', '🛷 ' + stops[step], 'np-grand-stop');
    const meter = h('p', 'Etapa 1 de ' + stops.length, 'np-count');
    const trail = h('div', '', 'np-route');
    trail.textContent = '🌍  ✨     ⭐     🛷     ✨     🎁';
    box.append(trail, stop, meter);
    box.append(btn('Viajar a la siguiente parada →', () => {
      step++;
      if (step >= stops.length) {
        localStorage.setItem(storageKey(i), 'done');
        box.replaceChildren(h('div','🎁🎄🎅','np-big-icon'),h('h2','¡Nochebuena completada!'),
          h('p','¡Has realizado el gran viaje! El resto de juegos originales de Santa Tracker sigue disponible detrás del portal.'));
        box.append(btn('Volver al calendario', showCalendar, 'np-primary'));
        return;
      }
      stop.textContent = '🛷 ' + stops[step];
      meter.textContent = 'Etapa ' + (step + 1) + ' de ' + stops.length;
    }, 'np-primary'));
    content.append(box);goBack();
  }
  // The original village sends clicks from its physically illustrated buildings.
  window.addEventListener('message',ev=>{
    if(ev.origin!==location.origin)return;
    const data=ev.data;
    if(!data||data.source!=='nochepolar-village')return;
    if(data.action==='quarter-visibility'){
      host.classList.toggle('np-quarter-visible',Boolean(data.visible));
      return;
    }
    switch(data.action){
      case 'cine': showCollection('cine');break;
      case 'arcade': showCollection('arcade');break;
      case 'aventuras': showCalendar();break;
      case 'selfie': launchSelfiePlus();break;
      case 'pasaporte': showPassport();break;
    }
  });
  // Permite abrir el portal sin alterar ninguna escena original.
  if (new URLSearchParams(location.search).get('nochepolar') === '1') {
    screen.hidden = false; showCalendar();
  }
})();
