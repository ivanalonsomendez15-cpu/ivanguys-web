/* NOCHEPOLAR · interactive new district inside Google's ORIGINAL village.
 * Keeps all upstream Santa Tracker games and the December 24 tracker untouched.
 */
(() => {
  'use strict';
  if (document.querySelector('#np-village-quarter')) return;
  const main=document.querySelector('#modules main');
  if (!main) return;
  const send=action=>{
    if(window.parent!==window) window.parent.postMessage({source:'nochepolar-village',action},location.origin);
  };
  const quarter=document.createElement('section');
  quarter.id='np-village-quarter';
  quarter.setAttribute('aria-label','Barrio Nochepolar, una nueva zona jugable de la aldea');
  quarter.innerHTML=[
    '<div class="npv-stars" aria-hidden="true">✦　❄　✧　⋆　❄　✦　✧　⋆　❄</div>',
    '<div class="npv-mountains" aria-hidden="true"></div>',
    '<div class="npv-title"><span class="npv-ribbon">✨ NUEVA ZONA ✨</span>',
    '<h2>¡Bienvenido al Barrio Nochepolar!</h2>',
    '<p>Más atracciones, dentro de la misma aldea. Entra en los edificios para descubrirlas.</p></div>',
    '<div class="npv-town">',
    '<button type="button" class="npv-house cinema" data-np="cine" aria-label="Entrar al cine navideño">',
    '<span class="npv-chimney"></span><span class="npv-roof"></span><span class="npv-building">',
    '<span class="npv-marquee">CINE POLAR</span><span class="npv-front">▶</span>',
    '<span class="npv-windows">⭐　⭐</span></span><span class="npv-label">🎬 Cine</span></button>',
    '<button type="button" class="npv-house arcade" data-np="arcade" aria-label="Entrar a los videojuegos">',
    '<span class="npv-chimney"></span><span class="npv-roof"></span><span class="npv-building">',
    '<span class="npv-marquee">ARCADE</span><span class="npv-front">🎮</span>',
    '<span class="npv-windows">✦　✦</span></span><span class="npv-label">🎮 Juegos</span></button>',
    '<button type="button" class="npv-house adventures" data-np="aventuras" aria-label="Entrar a las aventuras del día">',
    '<span class="npv-chimney"></span><span class="npv-roof"></span><span class="npv-building">',
    '<span class="npv-marquee">55 AVENTURAS</span><span class="npv-front">🎁</span>',
    '<span class="npv-windows">❄　❄</span></span><span class="npv-label">🎁 Aventuras</span></button>',
    '<button type="button" class="npv-house selfie" data-np="selfie" aria-label="Entrar a la barbería de Papá Noel">',
    '<span class="npv-chimney"></span><span class="npv-roof"></span><span class="npv-building">',
    '<span class="npv-marquee">BARBERÍA</span><span class="npv-front">🎅</span>',
    '<span class="npv-windows">✄　✄</span></span><span class="npv-label">🎅 Selfie+</span></button>',
    '<button type="button" class="npv-house passport" data-np="pasaporte" aria-label="Abrir la oficina de pasaportes">',
    '<span class="npv-chimney"></span><span class="npv-roof"></span><span class="npv-building">',
    '<span class="npv-marquee">PASAPORTE</span><span class="npv-front">🏅</span>',
    '<span class="npv-windows">✦　✦</span></span><span class="npv-label">🏅 Sellos</span></button>',
    '</div>',
    '<div class="npv-snowdrift" aria-hidden="true"></div>',
    '<p class="npv-credit">Ampliación no oficial sobre el Santa Tracker original de código abierto</p>'
  ].join('');
  const last=Array.from(main.querySelectorAll('modvil-module')).pop();
  if(last)last.insertAdjacentElement('afterend',quarter);
  else main.append(quarter);
  quarter.querySelectorAll('[data-np]').forEach(b=>
    b.addEventListener('click',()=>send(b.getAttribute('data-np'))));
  const reveal=()=>{
    if(quarter.getBoundingClientRect().top<innerHeight*.9)quarter.classList.add('npv-visible');
  };
  addEventListener('scroll',reveal,{passive:true});
  reveal();
  addEventListener('message',event=>{
    if(event.origin!==location.origin)return;
    if(event.data?.source==='nochepolar-main'&&event.data.action==='scroll-quarter'){
      quarter.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
})();