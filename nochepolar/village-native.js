/* NOCHEPOLAR — carteles ilustrados interactivos sobre la escena navideña.
 * Los cinco accesos mantienen las rutas existentes. La aldea original no se toca.
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

  // Una sección de la misma aldea: escena industrial llena de vida detrás de los accesos.
  const makeMachine = (x,y,scale,color,accent) =>
    '<g transform="translate('+x+' '+y+') scale('+scale+')">'+
    '<ellipse cx="105" cy="312" rx="170" ry="33" fill="#282a7170"/>'+
    '<rect x="-30" y="27" width="264" height="288" rx="45" fill="'+color+'" stroke="#ffdc8e" stroke-width="13"/>'+
    '<rect x="14" y="65" width="173" height="100" rx="24" fill="'+accent+'" stroke="#fff2a9" stroke-width="11"/>'+
    '<circle cx="101" cy="116" r="31" fill="#3f72bb"/><circle cx="101" cy="116" r="17" fill="#ffe8ab"/>'+
    '<circle cx="25" cy="213" r="14" fill="#ffcc5f"/><circle cx="78" cy="213" r="14" fill="#55c4c1"/>'+
    '<circle cx="130" cy="213" r="14" fill="#f36e80"/><circle cx="181" cy="213" r="14" fill="#ad92db"/>'+
    '<rect x="0" y="253" width="206" height="37" rx="13" fill="#1e619c"/>'+
    '<circle cx="29" cy="273" r="9" fill="#fff"/><circle cx="65" cy="273" r="9" fill="#fff"/>'+
    '<circle cx="101" cy="273" r="9" fill="#fff"/><circle cx="137" cy="273" r="9" fill="#fff"/><circle cx="173" cy="273" r="9" fill="#fff"/>'+
    '</g>';
  const belt = (x,y,width) =>
    '<g transform="translate('+x+' '+y+')">'+
    '<rect width="'+width+'" height="62" rx="19" fill="#183b80" stroke="#ef70a2" stroke-width="14"/>'+
    '<rect x="0" y="7" width="'+width+'" height="32" rx="11" fill="#6886d7"/>'+
    Array.from({length:Math.floor(width/64)},(_,i)=>'<circle cx="'+(i*64+27)+'" cy="51" r="11" fill="#f6d783" stroke="#214b91" stroke-width="6"/>').join('')+
    '</g>';
  const scene = [
    '<svg class="npv-illustration" viewBox="0 0 1440 1500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">',
    '<defs>',
      '<linearGradient id="npv-factory" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#713dba"/><stop offset=".46" stop-color="#c157ac"/><stop offset="1" stop-color="#4b91c3"/></linearGradient>',
      '<linearGradient id="npv-floor" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#33b4e3"/><stop offset="1" stop-color="#1c81b7"/></linearGradient>',
    '</defs>',
    '<rect width="1440" height="1500" fill="url(#npv-factory)"/>',

    // Arranque de la nueva escena con juguetes y regalos: puente visual con el taller anterior.
    '<g class="npv-presents-bridge">',
    '<path d="M0 0H1440V118Q1265 108 1120 136Q936 167 742 132Q541 97 359 134Q165 170 0 112Z" fill="#493b95"/>',
    '<path d="M0 0H1440V46H0Z" fill="#fcda7b"/>',
    '<path d="M0 44H1440V55H0Z" fill="#69cfd0"/>',
    ...Array.from({length:22},(_,i)=>'<circle cx="'+(i*71+8)+'" cy="49" r="7" fill="'+(['#ff6a85','#7ce5ba','#fee89d','#ffffff'][i%4])+'"/>'),
    makeGift(95,116,1.2,'#da4c71'),makeGift(240,143,1.55,'#2b96c5'),
    makeGift(430,116,1.18,'#ffc044'),makeGift(625,146,1.6,'#a758c2'),
    makeGift(830,102,1.22,'#f27949'),makeGift(1040,138,1.5,'#27ba98'),
    makeGift(1235,108,1.28,'#a77cdd'),makeGift(1390,136,1.38,'#e04e72'),
    '<path d="M0 160Q180 148 360 172T720 175T1080 166T1440 180" fill="none" stroke="#fee8a8" stroke-width="20"/>',
    '</g>',

    // Coloured wall, detailed panels, cables and pipes.
    '<path d="M0 192H1440M0 510H1440M0 886H1440M0 1264H1440" stroke="#ffe482" stroke-width="24"/>',
    '<path d="M0 214H1440M0 530H1440M0 906H1440" stroke="#2998ca" stroke-width="12"/>',
    ...Array.from({length:16},(_,i)=>'<rect x="'+(i*96)+'" y="0" width="42" height="104" fill="'+(['#ce57c0','#50a6e4','#27bbaa','#f0828f'][i%4])+'" opacity=".75"/>'),
    ...Array.from({length:23},(_,i)=>'<circle cx="'+(25+i*63)+'" cy="199" r="8" fill="'+(['#fff1a9','#2dcea4','#fd7f8f','#78d4fa'][i%4])+'"/>'),
    '<path d="M0 110Q290 201 700 100T1440 125" stroke="#2b4a97" stroke-width="25" fill="none"/>',
    '<path d="M0 118Q290 209 700 108T1440 133" stroke="#ffd786" stroke-width="8" fill="none" stroke-dasharray="23 33"/>',
    '<circle cx="93" cy="123" r="75" fill="#ee5a78" stroke="#fff1a4" stroke-width="15"/>',
    '<circle cx="93" cy="123" r="35" fill="#45c7ce"/><circle cx="93" cy="123" r="15" fill="#ffd27c"/>',
    makeMachine(198,242,1.18,'#35a9c6','#ffd874'),makeMachine(1040,238,1.06,'#ed6793','#88d6ed'),
    belt(0,510,1440),
    makeGift(136,516,1.1,'#e9567c'),makeGift(346,513,1.22,'#42c0a1'),
    makeGift(565,516,.98,'#ffaf4f'),makeGift(860,516,1.13,'#956bd2'),
    makeGift(1210,515,1.38,'#f16580'),
    '<path d="M0 589L1440 589L1440 735H0Z" fill="#2355a5"/>',
    '<rect x="0" y="585" width="1440" height="29" fill="#fce0a0"/>',
    ...Array.from({length:20},(_,i)=>'<circle cx="'+(i*76+19)+'" cy="605" r="9" fill="'+(['#e9567a','#62dabb','#fee38b','#f8fbff'][i%4])+'"/>'),
    '<path d="M0 765Q220 718 420 785T885 760T1440 765V1010H0Z" fill="#3cc5df"/>',
    '<path d="M0 885H1440" stroke="#fff1b5" stroke-width="22"/>',
    '<rect x="0" y="918" width="1440" height="359" fill="url(#npv-floor)"/>',
    '<path d="M0 1103H1440M0 1220H1440" stroke="#c7f4f1" stroke-width="21"/>',
    ...Array.from({length:16},(_,i)=>'<path d="M'+(i*112)+' 918L'+((i-4)*218)+' 1277" stroke="#c7f4f1" stroke-width="14"/>'),
    '<path d="M0 1301H1440V1500H0Z" fill="#4a62b4"/>',
    '<path d="M0 1340H1440" stroke="#ffe18c" stroke-width="27"/>',
    ...Array.from({length:23},(_,i)=>'<circle cx="'+(i*65+17)+'" cy="1341" r="9" fill="'+(['#e76086','#36cba8','#ffe37c'][i%3])+'"/>'),
    makeMachine(20,1035,1.05,'#f09450','#ffe7ad'),makeMachine(1165,1008,1.18,'#5dbdd2','#d8f6e4'),
    makeElf(280,1045,1.33,'#ea617b','#a16e49'),makeElf(1030,1105,1.18,'#39bc9a','#eec191'),
    makeElf(707,1430,1.28,'#9f78da','#c37e54'),
    belt(320,1400,850),
    makeGift(425,1403,1.9,'#e75d80'),makeGift(655,1390,1.65,'#40bfb0'),
    makeGift(866,1406,1.7,'#f29a54'),makeGift(1059,1392,1.4,'#9770c5'),
    '<g class="npv-gears"><circle cx="789" cy="404" r="88" fill="#fee29a" stroke="#ff94a1" stroke-width="19"/>',
    '<circle cx="789" cy="404" r="49" fill="#54c3dc" stroke="#2b5698" stroke-width="22"/>',
    '<circle cx="789" cy="404" r="11" fill="#fff4c1"/></g>',

    // Pequeños detalles no interactivos para llenar el escenario sin tapar los carteles.
    '<g class="npv-detail-layer">',
    '<path d="M0 680Q340 649 760 691T1440 665" fill="none" stroke="#f3ce69" stroke-width="10"/>',
    ...Array.from({length:19},(_,i)=>{
      const x=i*81+16, y=680-11*Math.sin(i/2.9),c=['#8be5cb','#fff1af','#ed718e','#88d2f1'][i%4];
      return '<path d="M'+x+' '+y+'l13 3-9 15Z" fill="'+c+'"/>';
    }),
    '<g transform="translate(68 853)"><rect x="0" y="0" width="108" height="72" rx="10" fill="#f7bb55"/><rect x="10" y="10" width="88" height="46" rx="8" fill="#fff1b5"/><path d="M20 52h68" stroke="#e27a65" stroke-width="7"/><circle cx="32" cy="25" r="6" fill="#e77c94"/><circle cx="55" cy="25" r="6" fill="#3faabf"/><circle cx="78" cy="25" r="6" fill="#52bf95"/></g>',
    '<g transform="translate(1260 785)"><rect width="116" height="98" rx="12" fill="#a458af"/><path d="M0 17H116" stroke="#ffd08d" stroke-width="16"/><circle cx="58" cy="61" r="31" fill="#fff0ac"/><path d="M58 41v23l16 10" stroke="#5b89b6" stroke-width="9" stroke-linecap="round" fill="none"/></g>',
    '<path d="M45 1180h170M1240 1194h164" stroke="#e8dc9e" stroke-width="10" stroke-linecap="round"/>',
    ...Array.from({length:13},(_,i)=>{
       const x=i*117+31, y=1261+(i%3)*8;
       return '<circle cx="'+x+'" cy="'+y+'" r="7" fill="'+(['#f9b96a','#9ce7d2','#ffd899'][i%3])+'"/>';
    }),
    '</g>',

    '<g class="npv-sparks">',
      ...Array.from({length:32},(_,i)=>{
        const x=(i*227)%1420+12,y=(i*293)%1280+60;
        return '<path d="M'+x+' '+(y-8)+'l4 8-4 8-4-8Z" fill="'+(['#ffe29c','#f4a3d3','#fff','#8bf0d8'][i%4])+'" opacity=".8"/>';
      }),
    '</g>',
    '</svg>'
  ].join('');
  // Cada cartel tiene una miniilustración diferente, no el mismo pictograma repetido.
  const art = {
    cine: '<svg viewBox="0 0 220 160" aria-hidden="true"><path d="M0 0H220V160H0Z" fill="#bd3d74"/><path d="M0 0Q25 24 25 83T0 160H39V0ZM220 0Q195 28 195 83T220 160H181V0Z" fill="#f77a9a"/><rect x="44" y="19" width="132" height="102" rx="9" fill="#d8ecf9" stroke="#fff7c6" stroke-width="10"/><rect x="57" y="30" width="106" height="81" rx="5" fill="#3486c6"/><circle cx="107" cy="67" r="28" fill="#f5ca9a"/><path d="M77 65Q109 17 136 64L145 45L107 15L71 45Z" fill="#e65c74"/><path d="M85 92Q109 108 131 91" fill="none" stroke="#b85a67" stroke-width="7" stroke-linecap="round"/><circle cx="94" cy="64" r="4" fill="#283653"/><circle cx="121" cy="64" r="4" fill="#283653"/><path d="M20 137H200" stroke="#fff2b9" stroke-width="13"/><path d="M90 131L119 145L90 156Z" fill="#eb5c78"/></svg>',
    arcade: '<svg viewBox="0 0 220 160" aria-hidden="true"><rect width="220" height="160" fill="#5a3bb1"/><circle cx="32" cy="31" r="16" fill="#ffda62"/><circle cx="194" cy="43" r="12" fill="#ff7e91"/><rect x="54" y="24" width="112" height="118" rx="19" fill="#ef6a81" stroke="#ffd883" stroke-width="9"/><rect x="67" y="38" width="86" height="62" rx="10" fill="#53d6d5"/><path d="M77 80Q108 32 143 78" fill="none" stroke="#fffbd1" stroke-width="9"/><path d="M105 46L118 56L105 66L92 56Z" fill="#f5c14d"/><path d="M76 121H110M93 104V138" stroke="#f9f3c4" stroke-width="9" stroke-linecap="round"/><circle cx="130" cy="118" r="10" fill="#ffe58e"/><circle cx="151" cy="107" r="8" fill="#f9f3c4"/><path d="M10 104L40 92L32 126Z" fill="#f6b4e7"/><path d="M184 112L208 99L204 131Z" fill="#b1f9ef"/></svg>',
    aventuras: '<svg viewBox="0 0 220 160" aria-hidden="true"><rect width="220" height="160" fill="#77c6e6"/><path d="M0 115Q52 94 108 115T220 111V160H0Z" fill="#e1f9ed"/><path d="M30 123L63 30L93 121ZM135 127L165 20L207 126Z" fill="#fff5d4"/><rect x="68" y="72" width="92" height="79" rx="6" fill="#ed5b7d"/><rect x="61" y="65" width="105" height="22" rx="5" fill="#fa8c79"/><path d="M108 67V150M65 113H163" stroke="#ffda61" stroke-width="16"/><path d="M111 66Q83 32 77 53Q76 65 111 66Q144 30 147 52Q149 69 111 66Z" fill="#ffda61"/><circle cx="32" cy="44" r="9" fill="#fff"/><circle cx="196" cy="41" r="7" fill="#fff"/><circle cx="194" cy="87" r="5" fill="#fff"/></svg>',
    selfie: '<svg viewBox="0 0 220 160" aria-hidden="true"><rect width="220" height="160" fill="#9bd9e5"/><path d="M0 145Q100 125 220 145V160H0Z" fill="#d4f4e4"/><rect x="30" y="14" width="160" height="120" rx="24" fill="#fbd47e" stroke="#fff4b9" stroke-width="10"/><path d="M47 14H173" stroke="#5b9bbc" stroke-width="9"/><circle cx="111" cy="77" r="43" fill="#edb889"/><path d="M64 75L110 18L157 75Z" fill="#ec5171"/><path d="M69 69Q111 59 151 69" stroke="#fff" stroke-width="14" fill="none"/><circle cx="144" cy="32" r="13" fill="#fff"/><circle cx="95" cy="80" r="5" fill="#2d3356"/><circle cx="123" cy="80" r="5" fill="#2d3356"/><path d="M72 91Q113 154 147 92Q130 136 111 130Q87 138 72 91Z" fill="#fff"/><path d="M95 96Q110 106 126 95" stroke="#bc5c57" stroke-width="5" fill="none"/><path d="M8 32L23 24M197 36L213 24" stroke="#f3ca60" stroke-width="7"/></svg>',
    pasaporte: '<svg viewBox="0 0 220 160" aria-hidden="true"><rect width="220" height="160" fill="#b2e6bb"/><circle cx="54" cy="65" r="34" fill="#f6d785" stroke="#e39355" stroke-width="9"/><path d="M54 38V94M27 66H81" stroke="#59a9a2" stroke-width="6"/><rect x="91" y="19" width="92" height="119" rx="12" fill="#4287ac" stroke="#f5da93" stroke-width="9"/><path d="M112 22V135" stroke="#95c9c5" stroke-width="7"/><circle cx="146" cy="75" r="28" fill="#f4d37b"/><path d="M146 51V99M125 76H166M131 61Q146 52 161 61M131 90Q146 98 161 89" stroke="#348a96" stroke-width="4" fill="none"/><path d="M10 134L40 117L65 141" stroke="#fff6cc" stroke-width="10" fill="none"/></svg>'
  };
  const cards = [
    ['cine','Tiempo de cine','La gran sala de películas','green'],
    ['arcade','Arcade polar','Juegos y desafíos','yellow'],
    ['aventuras','55 aventuras','Una historia cada día','blue'],
    ['selfie','Santa Selfie+','El estudio de Papá Noel','lightblue'],
    ['pasaporte','Pasaporte polar','Colecciona tus sellos','brown']
  ];
  const makeCard = ([key,title,sub,color]) =>
    '<button type="button" class="npv-game-card npv-card-'+key+' npv-card-'+color+'" data-np="'+key+'" aria-label="Abrir '+title+'">'+
      '<span class="npv-card-art">'+art[key]+'</span>'+
      '<span class="npv-card-bottom"><span class="npv-card-title">'+title+'</span>'+
      '<span class="npv-card-sub">'+sub+'</span></span>'+
    '</button>';

  const quarter = document.createElement('section');
  quarter.id = 'np-village-quarter';
  quarter.setAttribute('aria-label', 'Barrio Nochepolar: otra parte de la misma aldea');
  quarter.innerHTML = [
    '<div class="npv-village-stage">',
      scene,
      '<div class="npv-hanging-garland" aria-hidden="true"><span></span></div>',
      '<div class="npv-title"><span class="npv-ribbon">✦ TALLER DE JUEGOS ✦</span><h2>Nochepolar</h2></div>',
      '<div class="npv-town">',cards.map(makeCard).join(''),'</div>',
    '</div>',
    '<p class="npv-credit">NOCHEPOLAR · Aventuras de invierno</p>'
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
  // El acceso flotante deja de cubrir los juegos cuando se entra en el barrio.
  if (typeof IntersectionObserver === 'function') {
    const observer = new IntersectionObserver(entries => {
      const visible = !!entries[0]?.isIntersecting;
      if (window.parent !== window) window.parent.postMessage({
        source:'nochepolar-village', action:'quarter-visibility', visible
      }, location.origin);
    }, {threshold:0.03});
    observer.observe(quarter);
  }
  addEventListener('message', event => {
    if (event.origin !== location.origin) return;
    if (event.data && event.data.source === 'nochepolar-main' && event.data.action === 'scroll-quarter') {
      quarter.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
})();
