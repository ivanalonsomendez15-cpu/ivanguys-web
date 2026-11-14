/* NOCHEPOLAR — nuevo barrio escenográfico integrado en la aldea original.
 * Edificios independientes, senderos, vecinos, detalles e interacción accesible.
 * No sustituye ni altera los juegos y el seguimiento de Santa Tracker.
 */
(() => {
  'use strict';
  if (document.querySelector('#np-village-quarter')) return;
  const main = document.querySelector('#modules main');
  if (!main) return;
  const send = action => {
    if (window.parent !== window) window.parent.postMessage(
      {source: 'nochepolar-village', action}, location.origin
    );
  };
  const makeTree = (x, y, s, variant = 0) => {
    const greens = ['#16846c','#218c77','#168079','#207a72'];
    const green = greens[variant % greens.length];
    return '<g transform="translate('+x+' '+y+') scale('+s+')" class="npv-tree">'+
      '<ellipse cx="5" cy="2" rx="52" ry="11" fill="#b2dfe0" opacity=".62"/>'+
      '<rect x="-9" y="-51" width="18" height="62" rx="2" fill="#8d5e52"/>'+
      '<path d="M0 -204L-53 -126H-32L-78 -58H-49L-88 -17H88L49 -58H78L32 -126H53Z" fill="'+green+'"/>'+
      '<path d="M0 -204L-53 -126H-30L-70 -64Q-40 -69 -22 -57Q21 -45 52 -63L78 -58L38 -124L53 -126Z" fill="#35b08a" opacity=".8"/>'+
      '<path d="M-51 -122Q-10 -105 45 -121M-69 -56Q-8 -41 69 -55M-81 -15Q-12 2 80 -15" stroke="#edf9f4" stroke-width="14" fill="none" stroke-linecap="round"/>'+
      '<circle cx="-24" cy="-105" r="6" fill="#ffca51"/><circle cx="37" cy="-53" r="7" fill="#f06776"/><circle cx="-18" cy="-18" r="6" fill="#e7b2f5"/>'+
      '</g>';
  };
  const makeLamp = (x, y, s = 1) =>
    '<g transform="translate('+x+' '+y+') scale('+s+')">'+
    '<ellipse cx="0" cy="2" rx="39" ry="10" fill="#d6ecdf"/>'+
    '<path d="M-4 0V-144" stroke="#1b7680" stroke-width="14" stroke-linecap="round"/>'+
    '<path d="M-23 -147Q0 -164 23 -147L19 -99Q0 -87 -19 -99Z" fill="#ffe9a0" stroke="#1c777f" stroke-width="9"/>'+
    '<path d="M-23 -147L0 -172L23 -147" fill="#d34b62" stroke="#e8fcf5" stroke-width="6"/>'+
    '<circle cx="0" cy="-124" r="10" fill="#fff9d4"/><path d="M-23 -91H23" stroke="#1c777f" stroke-width="7"/>'+
    '<path d="M-10 -59Q8 -47 21 -54" fill="none" stroke="#f6c25c" stroke-width="5"/>'+
    '</g>';
  const makeGift = (x, y, s, hue) =>
    '<g transform="translate('+x+' '+y+') scale('+s+') rotate('+(x % 17 - 8)+')">'+
    '<rect x="-26" y="-35" width="52" height="39" rx="3" fill="'+hue+'"/>'+
    '<path d="M-6 -35V5H7V-35M-27 -25H27" stroke="#ffe58e" stroke-width="10"/>'+
    '<rect x="-29" y="-40" width="58" height="12" rx="3" fill="'+hue+'"/>'+
    '<path d="M0 -40Q-40 -68 -27 -48Q-15 -35 0 -40Q40 -68 27 -48Q15 -35 0 -40" fill="#ffe58e"/>'+
    '</g>';
  const makeElf = (x,y,s,shirt,skin) =>
    '<g class="npv-elf" transform="translate('+x+' '+y+') scale('+s+')">'+
    '<ellipse cx="4" cy="6" rx="42" ry="11" fill="#bcdde0" opacity=".7"/>'+
    '<path d="M-15 -45L-23 0M17 -45L22 0" stroke="#423d68" stroke-width="14" stroke-linecap="round"/>'+
    '<path d="M-38 -4H-16M17 -4H42" stroke="#332f50" stroke-width="13" stroke-linecap="round"/>'+
    '<rect x="-28" y="-87" width="56" height="49" rx="17" fill="'+shirt+'"/>'+
    '<path d="M-17 -87L0 -72L18 -87" fill="#fff3bf"/>'+
    '<path d="M-27 -77L-42 -46M28 -77L47 -50" stroke="'+skin+'" stroke-width="15" stroke-linecap="round"/>'+
    '<circle cx="0" cy="-118" r="36" fill="'+skin+'"/>'+
    '<path d="M-37 -121L0 -176L38 -119Z" fill="'+shirt+'"/>'+
    '<path d="M-36 -122Q0 -111 36 -122" fill="none" stroke="#fff8d3" stroke-width="11"/>'+
    '<circle cx="0" cy="-173" r="9" fill="#fff8d3"/>'+
    '<circle cx="-13" cy="-116" r="4" fill="#282c40"/><circle cx="13" cy="-116" r="4" fill="#282c40"/>'+
    '<path d="M-12 -101Q0 -91 12 -101" fill="none" stroke="#a64b55" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="-33" cy="-113" r="9" fill="'+skin+'"/><circle cx="33" cy="-113" r="9" fill="'+skin+'"/>'+
    '</g>';
  const scenery = [
    '<svg class="npv-illustration" viewBox="0 0 1440 1050" preserveAspectRatio="none" aria-hidden="true" focusable="false">',
    '<defs><linearGradient id="npv-sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#54c8eb"/><stop offset="1" stop-color="#d9f7ef"/></linearGradient></defs>',
    '<rect width="1440" height="1050" fill="url(#npv-sky)"/>',
    '<circle cx="1200" cy="90" r="61" fill="#fff6c3" opacity=".8"/>',
    '<path d="M0 350L115 229L211 348L348 183L489 373L626 213L778 371L928 214L1053 372L1209 197L1380 383L1440 320V576H0Z" fill="#c4eef1"/>',
    '<path d="M0 403L164 287L283 440L408 275L566 449L730 309L872 457L1001 271L1139 456L1272 279L1440 417V617H0Z" fill="#90cfde"/>',
    '<path d="M0 470Q250 390 490 472T950 473T1440 454V1050H0Z" fill="#e5f9f4"/>',
    '<path d="M0 552Q240 480 430 540T830 545T1440 527V1050H0Z" fill="#f8ffed"/>',
    '<path d="M-90 840Q288 662 565 810T1530 748" fill="none" stroke="#d2e9e2" stroke-width="122" stroke-linecap="round"/>',
    '<path d="M-90 840Q288 662 565 810T1530 748" fill="none" stroke="#f9e5b3" stroke-width="91" stroke-linecap="round"/>',
    '<path d="M-90 840Q288 662 565 810T1530 748" fill="none" stroke="#fff3d1" stroke-width="76" stroke-linecap="round"/>',
    '<path d="M0 965Q230 911 498 967T1054 961T1440 950V1050H0Z" fill="#e8fbf7"/>',
    '<path d="M0 1012Q318 970 545 1023T1150 1015T1440 998V1050H0Z" fill="#fff"/>',
    ...[
      [28,576,.55],[124,543,.43],[225,581,.65],[332,487,.32],[454,586,.55],[561,542,.34],
      [710,591,.62],[847,537,.38],[1015,560,.54],[1158,540,.45],[1331,581,.6],[1417,517,.51],
      [40,813,.72],[234,857,.41],[386,930,.34],[631,962,.42],[865,879,.37],[1088,923,.53],[1313,850,.65]
    ].map(([x,y,s],i)=>makeTree(x,y,s,i)),
    makeLamp(135,735,.75),makeLamp(1273,728,.75),makeLamp(736,958,.59),
    makeGift(85,917,.65,'#df4e69'),makeGift(146,929,.46,'#2b9fbb'),
    makeGift(1128,1000,.6,'#f18a53'),makeGift(1195,1006,.85,'#9570c1'),
    makeGift(1374,908,.68,'#ef4a6d'),makeGift(329,1004,.48,'#2bb09d'),
    makeElf(246,958,.65,'#e64a72','#7c4a34'),
    makeElf(974,995,.72,'#39ab86','#f1be87'),
    makeElf(1332,975,.59,'#b96bb3','#d78e62'),
    '<path d="M0 694Q320 648 635 694T1440 664" fill="none" stroke="#347e78" stroke-width="8"/>',
    ...Array.from({length:19},(_,i)=>{
      const x=i*78+17,y=688-24*Math.sin(i/3.7),color=['#ffcf5a','#f16b7e','#80d7ec','#cba8e6','#84d0a0'][i%5];
      return '<path d="M'+x+' '+y+'l8 11-13 12Z" fill="'+color+'" stroke="#fff4cd" stroke-width="2"/>';
    }),
    '</svg>'
  ].join('');
  const houses = [
    {key:'cine',className:'cinema',name:'CINE POLAR',icon:'▶',label:'Cine navideño',notice:'¡Películas!',roof:'red'},
    {key:'arcade',className:'arcade',name:'ARCADE',icon:'★',label:'Juegos',notice:'¡A jugar!',roof:'teal'},
    {key:'aventuras',className:'adventures',name:'55 AVENTURAS',icon:'🎁',label:'Aventuras del día',notice:'¡Descubre!',roof:'violet'},
    {key:'selfie',className:'selfie',name:'BARBERÍA',icon:'✂',label:'Selfie de Papá Noel',notice:'¡Sonríe!',roof:'pink'},
    {key:'pasaporte',className:'passport',name:'PASAPORTE',icon:'✦',label:'Pasaporte de aventuras',notice:'¡Sellos!',roof:'green'}
  ];
  const house = (h) => [
    '<button type="button" class="npv-house ',h.className,'" data-np="',h.key,'" aria-label="Entrar a ',h.label,'">',
    '<span class="npv-ground-shadow" aria-hidden="true"></span>',
    '<span class="npv-chimney" aria-hidden="true"><i></i></span>',
    '<span class="npv-roof" aria-hidden="true"><span class="npv-snow-ridge"></span></span>',
    '<span class="npv-side-wall" aria-hidden="true"></span>',
    '<span class="npv-building">',
    '<span class="npv-upper-window" aria-hidden="true">✦</span>',
    '<span class="npv-window npv-window-left" aria-hidden="true"><i></i></span>',
    '<span class="npv-window npv-window-right" aria-hidden="true"><i></i></span>',
    '<span class="npv-festoon" aria-hidden="true">●　●　●　●　●　●</span>',
    '<span class="npv-awning" aria-hidden="true"></span>',
    '<span class="npv-door" aria-hidden="true"><span>',h.icon,'</span></span>',
    '<span class="npv-marquee">',h.name,'</span>',
    '</span>',
    '<span class="npv-step" aria-hidden="true"></span>',
    '<span class="npv-porch" aria-hidden="true"></span>',
    '<span class="npv-tooltip">',h.notice,'</span>',
    '</button>'
  ].join('');
  const quarter = document.createElement('section');
  quarter.id = 'np-village-quarter';
  quarter.setAttribute('aria-label', 'Barrio Nochepolar: otra parte de la misma aldea');
  quarter.innerHTML = [
    '<div class="npv-top-bridge" aria-hidden="true"><span class="npv-top-ribbon">❄　🎁　✦　🎄　✦　🎁　❄</span></div>',
    '<div class="npv-title"><span class="npv-ribbon">UN NUEVO RINCÓN DE LA ALDEA</span>',
    '<h2>¡El Barrio Nochepolar!</h2><p>El camino continúa... ¡Hay mucho que descubrir!</p></div>',
    '<div class="npv-village-stage">',
    scenery,
    '<div class="npv-decoration npv-deco-left" aria-hidden="true">🎁<span>❄</span></div>',
    '<div class="npv-decoration npv-deco-right" aria-hidden="true">🧸<span>✦</span></div>',
    '<div class="npv-town">',houses.map(house).join(''),'</div>',
    '</div>',
    '<p class="npv-credit">NOCHEPOLAR · Nuevas aventuras para esta aldea</p>'
  ].join('');
  const last = Array.from(main.querySelectorAll('modvil-module')).pop();
  if (last) last.insertAdjacentElement('afterend', quarter);
  else main.append(quarter);
  quarter.querySelectorAll('[data-np]').forEach(button => {
    button.addEventListener('click', () => send(button.getAttribute('data-np')));
  });
  const reveal = () => {
    if (quarter.getBoundingClientRect().top < innerHeight * 1.3) quarter.classList.add('npv-visible');
  };
  addEventListener('scroll', reveal, {passive:true});
  reveal();
  addEventListener('message', event => {
    if (event.origin !== location.origin) return;
    if (event.data && event.data.source === 'nochepolar-main' && event.data.action === 'scroll-quarter') {
      quarter.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
})();
