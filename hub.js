(() => {
  'use strict';
  const cfg=window.IVANGUYS_CONFIG||{};
  const rooms={
    bienvenida:['¡Bienvenido a IVANGUYS HUB!','Tu punto de entrada. Preséntate sin publicar información privada y descubre los canales.','Tu entrada al universo IVANGUYS'],
    normas:['Normas de la comunidad','Respeto, nada de spam y protección de datos personales. Si ves algo inadecuado, repórtalo para que se pueda moderar.','Juguemos con respeto'],
    general:['Charlemos de videojuegos','¿A qué estás jugando? Comenta tus mejores descubrimientos y haz amistades en un espacio respetuoso.','Conversaciones de todo tipo'],
    minecraft:['Todo sobre Minecraft','Construcciones, retos, trucos y aventuras cúbicas.','Zona Minecraft'],
    roblox:['Creaciones de Roblox','Comparte ideas, experiencias y tus juegos favoritos.','Zona Roblox'],
    zelda:['El rincón de Zelda','Teorías, recuerdos y expectativas para el especial de noviembre. ¡Cuidado con los spoilers!','Zelda y Nintendo'],
    memes:['Rincón de memes','Comparte tus ideas para vídeos cómicos y memes aptos para todos.','Humor gamer'],
    ideas:['Ideas para vídeos','¿Qué reto quieres ver en IVANGUYS? Aquí puedes proponerlo.','La comunidad decide'],
    juegos:['Arcade y récords','Compara marcas del arcade y comparte tus estrategias (los récords de la web se almacenan localmente).','Zona de juegos'],
    ayuda:['Ayuda y sugerencias','Cuenta qué funciona, qué falla y qué mejorarías en IVANGUYS.','Soporte comunitario']
  };
  const $=id=>document.getElementById(id),feed=$('feed');
  const enabled=Boolean(cfg.giscus?.repo&&cfg.giscus?.repoId&&cfg.giscus?.categoryId);
  function show(room){const slug=Object.hasOwn(rooms,room)?room:'bienvenida';const [heading,desc,subtitle]=rooms[slug];
    $('channelTitle').textContent=slug;$('shortDesc').textContent=subtitle;$('roomHeading').textContent=heading;$('roomDescription').textContent=desc;$('discussionTitle').textContent='# '+slug;
    document.querySelectorAll('[data-room]').forEach(b=>{b.classList.toggle('selected',b.dataset.room===slug);b.setAttribute('aria-current',String(b.dataset.room===slug))});
    feed.replaceChildren();
    if(enabled){
      const script=document.createElement('script');script.src='https://giscus.app/client.js';script.async=true;script.crossOrigin='anonymous';
      const data={repo:cfg.giscus.repo,'repo-id':cfg.giscus.repoId,category:cfg.giscus.category||'General','category-id':cfg.giscus.categoryId,mapping:'specific',term:'IVANGUYS HUB #'+slug,strict:'1','reactions-enabled':'1','emit-metadata':'0','input-position':'top',theme:'dark',lang:'es',loading:'lazy'};
      Object.entries(data).forEach(([k,v])=>script.setAttribute('data-'+k,String(v)));feed.append(script);
    }else{
      const div=document.createElement('div');div.className='placeholder';const icon=document.createElement('span');icon.textContent='💬';const title=document.createElement('h3');title.textContent='Este canal está preparado';const p=document.createElement('p');p.textContent='Para publicar mensajes compartidos, activa GitHub Discussions y configura giscus en config.js. No mostramos conversaciones inventadas ni guardamos comentarios solamente en tu ordenador.';
      const a=document.createElement('a');a.href='https://giscus.app/es';a.textContent='Configurar debates ↗';a.target='_blank';a.rel='noopener noreferrer';div.append(icon,title,p,a);feed.append(div);
    }
    $('shade').classList.remove('open');document.querySelector('.channels').classList.remove('open');
  }
  document.querySelectorAll('[data-room]').forEach(b=>b.addEventListener('click',()=>location.hash=b.dataset.room));
  window.addEventListener('hashchange',()=>show(decodeURIComponent(location.hash.slice(1))));
  $('mobileMenu').addEventListener('click',()=>{$('shade').classList.add('open');document.querySelector('.channels').classList.add('open')});
  $('shade').addEventListener('click',()=>{$('shade').classList.remove('open');document.querySelector('.channels').classList.remove('open')});
  show(decodeURIComponent(location.hash.slice(1))||'bienvenida');
})();
