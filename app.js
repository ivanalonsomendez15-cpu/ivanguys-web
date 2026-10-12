(() => {
  'use strict';
  const cfg = window.IVANGUYS_CONFIG;
  const $ = id => document.getElementById(id);
  const pages = ['inicio','canal','zelda','comunidad','arcade'];
  let videos = [], videoFilter = 'all', gameFilter = 'all';
  let currentGame = null;
  const fmt = new Intl.NumberFormat('es-ES');
  const text = (id, value) => { const el=$(id); if(el)el.textContent=value; };
  const pad = n => String(n).padStart(2,'0');
  const cleanURL = url => {
    try { const p=new URL(url); return p.protocol==='https:' && ['www.youtube.com','youtube.com','youtu.be','i.ytimg.com','img.youtube.com'].includes(p.hostname) ? p.href : null; }
    catch { return null; }
  };
  const formatDate = value => {try{return new Intl.DateTimeFormat('es-ES',{day:'numeric',month:'short',year:'numeric',timeZone:cfg.timezone}).format(new Date(value))}catch{return ''}};
  const timeUntil = target => {
    const delta = Math.max(0,Math.floor((new Date(target).getTime()-Date.now())/1000));
    return { days:Math.floor(delta/86400),hours:Math.floor(delta%86400/3600),minutes:Math.floor(delta%3600/60),seconds:delta%60,ended:delta===0 };
  };
  function updateTimers(){
    const now = new Date();
    text('topClock', new Intl.DateTimeFormat('es-ES',{timeZone:cfg.timezone,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now));
    [['zelda',cfg.zeldaDate],['direct',cfg.directDate]].forEach(([id,when])=>{
      const t=timeUntil(when);
      const label = t.ended ? (id==='zelda'?'¡YA ES 5 DE NOVIEMBRE!':'¡HA LLEGADO EL MOMENTO!') : `${t.days}d ${pad(t.hours)}h ${pad(t.minutes)}m ${pad(t.seconds)}s`;
      text(id+'CountdownMini',label);
      const host=$(id+'Clock');
      for(const [k,v] of Object.entries({days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds})) {
        const node=host?.querySelector('[data-unit="'+k+'"]'); if(node) node.textContent=k==='days'?String(v):pad(v);
      }
    });
    if(Date.now()>=new Date(cfg.directDate).getTime()){
      text('liveNotice',cfg.liveUrl?'Ya es la hora programada del directo. Comprueba el enlace de la emisión.':'Ya llegó la hora programada del directo. Sigue los anuncios del canal para conocer dónde verlo.');
    }
  }
  function setPage(page){
    const active=pages.includes(page)?page:'inicio';
    document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id==='page-'+active));
    document.querySelectorAll('[data-page-link]').forEach(x=>{const on=x.dataset.pageLink===active;x.classList.toggle('active',on);if(on)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});
    text('currentPageLabel', ({inicio:'Inicio',canal:'YouTube',zelda:'Especial Zelda',comunidad:'Comunidad',arcade:'Arcade'})[active]);
    $('mobileOverlay').classList.remove('show');document.querySelector('.sidebar').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false');
    window.scrollTo({top:0,behavior:'instant'});
    if(active==='arcade')renderGameCards();
  }
  function videoCard(v){
    const item=document.createElement('article');item.className='video-card';
    const a=document.createElement('a');a.href=cleanURL(v.url)||cfg.channelUrl;a.target='_blank';a.rel='noopener noreferrer';a.className='video-thumb';a.setAttribute('aria-label','Ver vídeo: '+v.title);
    if(v.thumbnail && cleanURL(v.thumbnail)){
      const im=document.createElement('img');im.src=cleanURL(v.thumbnail);im.alt='Miniatura de '+v.title;im.loading='lazy';a.append(im);
    }
    const overlay=document.createElement('span');overlay.className='play-overlay';overlay.textContent='▶';a.append(overlay);
    const info=document.createElement('div');info.className='video-info';
    const h=document.createElement('h3');h.textContent=v.title;const sm=document.createElement('small');sm.textContent='▶ IVANGUYS · '+formatDate(v.published);info.append(h,sm);item.append(a,info);return item;
  }
  function renderVideoList(where, subset){
    const el=$(where);el.replaceChildren();
    if(!subset.length){const block=document.createElement('div');block.className='empty-state';block.innerHTML='<div class="empty-symbol">▶</div><h3>Aún no hay vídeos sincronizados</h3><p>Cuando GitHub Actions lea el canal aparecerán sus publicaciones reales aquí. Mientras tanto, visita YouTube.</p>';const a=document.createElement('a');a.className='btn ghost';a.href=cfg.channelUrl;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Ir a IVANGUYS en YouTube ↗';block.append(a);el.append(block);return;}
    subset.forEach(v=>el.append(videoCard(v)));
  }
  function renderVideos(){
    renderVideoList('homeVideos',videos.slice(0,3));
    renderVideoList('allVideos',videos.filter(v=>videoFilter==='all'||v.type===videoFilter));
  }
  async function loadVideos(){
    try{
      const response=await fetch('data/youtube.json?t='+Date.now(),{cache:'no-store'});
      if(!response.ok)throw Error('HTTP '+response.status);
      const json=await response.json();
      videos=Array.isArray(json.videos)?json.videos.filter(v=>typeof v.title==='string' && cleanURL(v.url)).slice(0,25):[];
      text('statSubscribers',Number.isFinite(json.subscribers)?fmt.format(json.subscribers):'—');
      text('statSubscribersFoot',Number.isFinite(json.subscribers)?'Datos públicos de YouTube':'Necesita YOUTUBE_API_KEY (opcional)');
      text('statVideos',Number.isFinite(json.videoCount)?fmt.format(json.videoCount):'—');
      text('lastSyncLabel',json.lastUpdated?'Última sincronización: '+formatDate(json.lastUpdated):'Pendiente de sincronización');
      renderVideos();
    }catch{
      videos=[];renderVideos();text('lastSyncLabel','No se pudieron cargar los datos');
    }
  }
  async function loadAnnouncements(){
    try{
      const response=await fetch('data/announcements.json');if(!response.ok)throw Error();
      const data=await response.json();const host=$('announcements');host.replaceChildren();
      data.forEach(post=>{
        const box=document.createElement('article');box.className='announcement';
        const top=document.createElement('div');top.className='announcement-top';
        const tag=document.createElement('span');tag.textContent=post.tag;
        const date=document.createElement('time');date.dateTime=post.date;date.textContent=formatDate(post.date+'T12:00:00+02:00');top.append(tag,date);
        const title=document.createElement('h3');title.textContent=post.title;const body=document.createElement('p');body.textContent=post.text;box.append(top,title,body);host.append(box);
      });
    }catch{$('announcements').textContent='Los anuncios no están disponibles ahora mismo.'}
  }
  function initGiscus(){
    const g=cfg.giscus;
    if(!g.repo||!g.repoId||!g.categoryId)return;
    const shell=$('commentsShell');shell.replaceChildren();shell.classList.add('configured');
    const script=document.createElement('script');
    script.src='https://giscus.app/client.js';script.async=true;script.crossOrigin='anonymous';
    const attr={repo:g.repo,'repo-id':g.repoId,category:g.category,'category-id':g.categoryId,mapping:'specific',term:'Comunidad IVANGUYS',strict:'0','reactions-enabled':'1','emit-metadata':'0','input-position':'top',theme:'dark',lang:'es',loading:'lazy'};
    Object.entries(attr).forEach(([k,v])=>script.setAttribute('data-'+k,String(v)));
    shell.append(script);
  }
  const games=[
    {id:'invaders',title:'Galactic Defenders',subtitle:'Defiende tu galaxia de invasores espaciales.',emoji:'👾',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#232c6c,#6539aa)'},
    {id:'asteroids',title:'Asteroid Pilot',subtitle:'Pilota tu nave a través de meteoritos.',emoji:'🛸',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#1a4868,#43799b)'},
    {id:'blockdrop',title:'Blocks Drop',subtitle:'Completa líneas con piezas que caen.',emoji:'🧱',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#45368f,#b75299)'},
    {id:'sudoku4',title:'Sudoku 4×4',subtitle:'Un reto de números para pensar.',emoji:'🔟',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#424c9f,#538db1)'},
    {id:'mines',title:'Campo Misterioso',subtitle:'Descubre el tablero sin pisar peligros.',emoji:'🚩',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#384d64,#6b9c81)'},
    {id:'reversi',title:'Reversi Duel',subtitle:'Conquista el tablero contra una IA.',emoji:'⚪',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#13585b,#3b9a75)'},
    {id:'kart',title:'Neon Kart Rush',subtitle:'Cambia de carril y supera obstáculos.',emoji:'🏎️',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#203875,#b54786)'},
    {id:'towers',title:'Torres de Hanói',subtitle:'Ordena los cuatro discos con ingenio.',emoji:'🏛️',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#544e89,#4b8b9a)'},
    {id:'trivia',title:'Gamer Quiz',subtitle:'Diez preguntas para fans de videojuegos.',emoji:'❓',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#774a87,#954e8b)'},
    {id:'treasure',title:'Treasure Maze',subtitle:'Encuentra los cinco tesoros ocultos.',emoji:'💎',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#315c85,#269f7b)'},

    {id:'snake',title:'Neon Snake',subtitle:'Come orbes, crece y evita chocar.',emoji:'🐍',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#263b67,#28766e)'},
    {id:'pong',title:'Cosmic Pong',subtitle:'Defiende tu portería contra la IA.',emoji:'🏓',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#384c94,#392969)'},
    {id:'breakout',title:'Breakout Nova',subtitle:'Rompe todos los bloques de colores.',emoji:'🧱',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#71385e,#994974)'},
    {id:'fly',title:'Sky Hopper',subtitle:'Salta entre las barreras infinitas.',emoji:'🚀',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#295479,#267f99)'},
    {id:'2048',title:'2048 Fusion',subtitle:'Une números iguales hasta 2048.',emoji:'🔢',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#624d87,#9f7796)'},
    {id:'memory',title:'Memory Match',subtitle:'Descubre todas las parejas ocultas.',emoji:'🧠',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#5a3989,#8d527c)'},
    {id:'ttt',title:'Tres en Raya',subtitle:'Desafía a un rival automático.',emoji:'⭕',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#254a70,#6271b7)'},
    {id:'mole',title:'Caza el Topo',subtitle:'Atrapa los topos antes de que huyan.',emoji:'🐹',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#665131,#876236)'},
    {id:'reaction',title:'Reflejos PRO',subtitle:'Pulsa justo cuando cambie a verde.',emoji:'⚡',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#315f69,#3b9d8b)'},
    {id:'clicker',title:'Mega Clicker',subtitle:'Consigue puntos, combos y mejoras.',emoji:'💎',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#573b93,#9c5bb9)'},
    {id:'maze',title:'Laberinto Pixel',subtitle:'Encuentra la salida del laberinto.',emoji:'🧩',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#29534e,#4b8b66)'},
    {id:'simon',title:'Simon Galaxy',subtitle:'Memoriza la secuencia de colores.',emoji:'🌈',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#653c84,#834b9c)'},
    {id:'penalty',title:'Penaltis PRO',subtitle:'Diez penaltis contra un portero con reflejos.',emoji:'⚽',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#136057,#235e9c)'},
    {id:'connect4',title:'Conecta Cuatro',subtitle:'Consigue cuatro fichas seguidas contra una IA.',emoji:'🔵',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#425c9c,#6e4696)'},
    {id:'lights',title:'Apaga las Luces',subtitle:'Un reto lógico con interruptores conectados.',emoji:'💡',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#6e5236,#7f657b)'},
    {id:'wordrush',title:'Palabras Relámpago',subtitle:'Escribe lo más rápido posible.',emoji:'⌨️',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#295277,#3d9d8c)'},
    {id:'stardodge',title:'Lluvia de Meteoritos',subtitle:'Esquiva obstáculos y sobrevive.',emoji:'☄️',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#36285a,#b74f70)'},
    {id:'jumpsprint',title:'Salto Infinito',subtitle:'Corre y salta hasta batir tu récord.',emoji:'🏃',category:'arcade',tag:'ARCADE',bg:'linear-gradient(135deg,#364a78,#d18965)'},
    {id:'mathflash',title:'Cálculo Turbo',subtitle:'Resuelve operaciones contra el reloj.',emoji:'🧮',category:'puzzle',tag:'PUZLE',bg:'linear-gradient(135deg,#293a70,#7960ab)'},
    {id:'taporbit',title:'Objetivo Orbital',subtitle:'Toca objetivos en movimiento.',emoji:'🎯',category:'skill',tag:'HABILIDAD',bg:'linear-gradient(135deg,#57407b,#a94482)'}
  ];
  function renderGameCards(){
    const host=$('gamesGrid');host.replaceChildren();
    const q=$('gameSearch').value.toLocaleLowerCase('es').trim();
    const filtered=games.filter(g=>(gameFilter==='all'||g.category===gameFilter)&&g.title.toLocaleLowerCase('es').includes(q));
    for(const g of filtered){
      const item=document.createElement('article');item.className='game-card';
      const cover=document.createElement('div');cover.className='game-cover';cover.style.background=g.bg;
      const tag=document.createElement('span');tag.className='genre';tag.textContent=g.tag;
      const art=document.createElement('span');art.className='game-art';art.textContent=g.emoji;cover.append(tag,art);
      const body=document.createElement('div');body.className='game-card-body';const title=document.createElement('h3');title.textContent=g.title;const desc=document.createElement('p');desc.textContent=g.subtitle;
      const foot=document.createElement('div');foot.className='game-card-foot';const best=document.createElement('small');best.textContent='🏆 '+(localStorage.getItem('ivanguys_best_'+g.id)||'0')+' pts';
      const btn=document.createElement('button');btn.className='play-game';btn.textContent='▶ JUGAR';btn.addEventListener('click',()=>openGame(g));
      foot.append(best,btn);body.append(title,desc,foot);item.append(cover,body);host.append(item);
    }
    if(!filtered.length){const e=document.createElement('div');e.className='empty-state';e.textContent='No hay juegos con ese nombre.';host.append(e)}
  }
  function openGame(game){
    if(currentGame){currentGame.destroy();currentGame=null;}
    text('gameModalTitle',game.title);text('gameModalDescription',game.subtitle);
    $('gameModal').classList.remove('hidden');document.body.style.overflow='hidden';
    currentGame=window.IvanguysGames.create(game.id,{stage:$('gameStage'),instructions:$('gameInstructions'),score:$('scoreCurrent'),best:$('scoreBest')});
    currentGame.start();$('closeGame').focus();
  }
  function closeGame(){if(currentGame){currentGame.destroy();currentGame=null;}document.body.style.overflow='';$('gameModal').classList.add('hidden');renderGameCards();}
  function bind(){
    const onHash=()=>{const page=location.hash.slice(1)||'inicio';setPage(page)};window.addEventListener('hashchange',onHash);onHash();
    $('menuToggle').addEventListener('click',()=>{const el=document.querySelector('.sidebar');const open=el.classList.toggle('open');$('mobileOverlay').classList.toggle('show',open);$('menuToggle').setAttribute('aria-expanded',String(open))});
    $('mobileOverlay').addEventListener('click',()=>{$('mobileOverlay').classList.remove('show');document.querySelector('.sidebar').classList.remove('open')});
    for(const id of ['sideYoutube','topSubscribe','channelSubscribe'])$(id).href=cfg.channelUrl;
    if(cfg.liveUrl&&cleanURL(cfg.liveUrl)){$('liveButton').href=cleanURL(cfg.liveUrl);$('liveButton').classList.remove('hidden');text('liveNotice','La emisión está anunciada: consulta el enlace para verla y confirmar su estado.');}
    document.querySelectorAll('[data-video-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-video-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');videoFilter=b.dataset.videoFilter;renderVideos()}));
    $('refreshVideos').addEventListener('click',loadVideos);
    document.querySelectorAll('[data-game-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-game-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');gameFilter=b.dataset.gameFilter;renderGameCards()}));
    $('gameSearch').addEventListener('input',renderGameCards);
    $('closeGame').addEventListener('click',closeGame);
    $('restartGame').addEventListener('click',()=>{if(currentGame)currentGame.start()});
    $('gameModal').addEventListener('click',e=>{if(e.target===$('gameModal'))closeGame()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape' && !$('gameModal').classList.contains('hidden'))closeGame()});
  }
  bind();updateTimers();setInterval(updateTimers,1000);loadVideos();loadAnnouncements();initGiscus();renderGameCards();setInterval(()=>{if(document.visibilityState==='visible')loadVideos()},300000);
})();
