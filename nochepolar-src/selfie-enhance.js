/* NOCHEPOLAR: Selfie+ for the ORIGINAL Santa's Selfie scene.
   Accessory layers overlay the existing beard simulator; original tools
   continue to work. No Google source is replaced. */
(() => {
  'use strict';
  if (document.getElementById('np-selfie-hub')) return;
  const scene=document.querySelector('#module-santaselfie .scene');
  const face=document.querySelector('#module-santaselfie .Face');
  const mirror=document.querySelector('#module-santaselfie .Background-mirror');
  if(!scene||!face)return;
  const hats=['','🎩','👑','🧢','🎓','🪖','🌺','🧙','⛑️','👒','🎀','🦌'];
  const glasses=['','🕶️','👓','🥽','😎','✨','🌟','💎','🎭'];
  const badges=['','🎀','⭐','🎁','🔔','🎄','🧸','🍬','❄️','💝'];
  const backgrounds=[
    ['Original','#00ADEB',0],['Aurora','#2ec5c4',65],['Rosa','#f19dbd',165],
    ['Noche','#183f91',220],['Bosque','#39bc80',30],['Ártico','#96dcf3',-20],
    ['Violeta','#9f78cb',195],['Dorado','#f3bf64',115],['Atardecer','#ff8b69',275]
  ];
  const beardLooks=[
    ['Original','none'],['Neón','saturate(2) hue-rotate(55deg)'],
    ['Azul polar','saturate(1.5) hue-rotate(160deg)'],
    ['Rosa','saturate(1.7) hue-rotate(280deg)'],
    ['Vintage','sepia(.45) saturate(1.2)'],['Invierno','contrast(1.4) brightness(1.2)'],
    ['Pastel','saturate(.7)'],['Color intenso','saturate(2.5) contrast(1.12)']
  ];
  const stickerOptions=['⭐','🎁','❄️','🎄','💖','🔔','🍭','🌈','🦌','🧸','💎','☃️'];
  const key='np:selfie:design:v1';
  const savedKey='np:selfie:saved:';
  const defaultState=()=>({hat:'',glasses:'',badge:'',background:0,beard:0,stickers:[]});
  let state=defaultState();
  try {const v=JSON.parse(localStorage.getItem(key)||'null');if(v&&typeof v==='object')state={...state,...v};}catch(e){}
  function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch(e){}}
  function node(type,className,text=''){
    const el=document.createElement(type);el.className=className;el.textContent=text;return el;
  }
  function button(label,fn,className='np-selfie-choice'){
    const b=node('button',className,label);b.type='button';b.addEventListener('click',fn);return b;
  }
  const layer=node('div','np-selfie-layer');
  const topper=node('div','np-selfie-prop np-selfie-hat');
  const eyewear=node('div','np-selfie-prop np-selfie-glasses');
  const badge=node('div','np-selfie-prop np-selfie-badge');
  const stickerLayer=node('div','np-selfie-stickers');
  layer.append(topper,eyewear,badge,stickerLayer);
  face.append(layer);
  const root=node('div','np-selfie-hub');
  root.id='np-selfie-hub';
  const open=button('✨ Selfie+',()=>{panel.hidden=!panel.hidden;renderPanel();},'np-selfie-open');
  const panel=node('section','np-selfie-panel');
  panel.hidden=true;
  const bar=node('div','np-selfie-toolbar');
  bar.append(node('strong','', '🎅 SELFIE+'),button('✕',()=>{panel.hidden=true;stickerMode='';},'np-selfie-dismiss'));
  const tabs=node('nav','np-selfie-tabs');
  const options=node('div','np-selfie-options');
  const msg=node('p','np-selfie-msg','Amplía el selfie sin perder las herramientas originales.');
  const actions=node('div','np-selfie-actions');
  panel.append(bar,tabs,options,msg,actions);
  root.append(open,panel);scene.append(root);
  let tab='sombreros';
  let stickerMode='';
  let previous=[];

  function apply(){
    topper.textContent=state.hat||'';
    eyewear.textContent=state.glasses||'';
    badge.textContent=state.badge||'';
    scene.style.backgroundColor=backgrounds[state.background]?.[1]||'#00ADEB';
    if(mirror) mirror.style.filter='hue-rotate('+Number(backgrounds[state.background]?.[2]||0)+'deg)';
    const beard=document.getElementById('beard');
    if(beard) beard.style.filter=beardLooks[state.beard]?.[1]||'none';
    stickerLayer.replaceChildren();
    (Array.isArray(state.stickers)?state.stickers:[]).slice(-35).forEach(item=>{
      const el=node('span','np-selfie-sticker',item.symbol);
      el.style.left=item.x+'%';el.style.top=item.y+'%';
      stickerLayer.append(el);
    });
    save();
  }
  function snapshot(){
    previous.push(JSON.stringify(state));
    if(previous.length>16)previous.shift();
  }
  function assign(keyName,value){
    snapshot();
    state[keyName]=value;apply();
    msg.textContent='¡Perfecto! Puedes seguir usando los aerosoles y tijeras originales de Papá Noel.';
    renderPanel();
  }
  function renderPanel(){
    tabs.replaceChildren();options.replaceChildren();actions.replaceChildren();
    const categories=[
      ['sombreros','🎩 Sombreros'],['gafas','🕶️ Gafas'],['adornos','🎁 Adornos'],
      ['fondos','🌈 Fondos'],['barba','🎨 Filtros'],['pegatinas','🌟 Pegatinas'],['guardar','💾 Guardar']
    ];
    categories.forEach(([id,label])=>tabs.append(button(label,()=>{
      tab=id;renderPanel();
    },'np-selfie-tab'+(tab===id?' active':''))));
    if(tab==='sombreros'||tab==='gafas'||tab==='adornos'){
      const values=tab==='sombreros'?hats:tab==='gafas'?glasses:badges;
      const keyName=tab==='sombreros'?'hat':tab==='gafas'?'glasses':'badge';
      values.forEach(v=>options.append(button(v||'∅',()=>assign(keyName,v),'np-selfie-emoji'+(state[keyName]===v?' active':''))));
    }else if(tab==='fondos'){
      backgrounds.forEach(([name,color],i)=>{
        const b=button(name,()=>assign('background',i),'np-selfie-swatch'+(state.background===i?' active':''));
        b.style.background=color;options.append(b);
      });
    }else if(tab==='barba'){
      options.append(node('p','np-selfie-msg','Los filtros modifican el color visual; las herramientas de pintura originales siguen funcionando.'));
      beardLooks.forEach(([label],i)=>options.append(button(label,()=>assign('beard',i),'np-selfie-name'+(state.beard===i?' active':''))));
    }else if(tab==='pegatinas'){
      options.append(node('p','np-selfie-msg','Elige una pegatina y pulsa sobre la cara de Papá Noel para colocarla. Abre el panel de nuevo para cambiarla.'));
      stickerOptions.forEach(v=>options.append(button(v,()=>{
        stickerMode=v;panel.hidden=true;msg.textContent='Toca la cara de Papá Noel para colocar '+v;
      },'np-selfie-emoji')));
      options.append(button('Borrar pegatinas',()=>assign('stickers',[]),'np-selfie-name'));
    }else if(tab==='guardar'){
      options.append(node('p','np-selfie-msg','Guarda hasta cinco estilos con tus accesorios. No modifica tu barba original.'));
      for(let n=1;n<=5;n++){
        const row=node('div','np-selfie-slot');
        const present=!!localStorage.getItem(savedKey+n);
        row.append(node('span','', 'Diseño '+n+(present?' ✓':' · vacío')));
        row.append(button('Guardar',()=>{
          localStorage.setItem(savedKey+n,JSON.stringify(state));msg.textContent='Diseño '+n+' guardado en este navegador.';
          renderPanel();
        },'np-selfie-small'));
        row.append(button('Cargar',()=>{
          const raw=localStorage.getItem(savedKey+n);
          if(!raw){msg.textContent='Esta ranura está vacía.';return;}
          try{snapshot();state={...defaultState(),...JSON.parse(raw)};apply();msg.textContent='Diseño '+n+' cargado.';}catch(e){msg.textContent='No se pudo cargar ese diseño.';}
          renderPanel();
        },'np-selfie-small'));
        options.append(row);
      }
    }
    actions.append(button('🎲 Sorpresa',()=>{
      snapshot();
      state.hat=hats[Math.floor(Math.random()*hats.length)];
      state.glasses=glasses[Math.floor(Math.random()*glasses.length)];
      state.badge=badges[Math.floor(Math.random()*badges.length)];
      state.background=Math.floor(Math.random()*backgrounds.length);
      state.beard=Math.floor(Math.random()*beardLooks.length);
      state.stickers=[];apply();renderPanel();
    },'np-selfie-small'));
    actions.append(button('↶ Deshacer extra',()=>{
      const raw=previous.pop();
      if(!raw){msg.textContent='No hay cambios extra que deshacer.';return;}
      state=JSON.parse(raw);apply();renderPanel();
    },'np-selfie-small'));
    actions.append(button('Restablecer extras',()=>{
      snapshot();state=defaultState();apply();renderPanel();
    },'np-selfie-small'));
  }
  face.addEventListener('pointerdown',e=>{
    if(!stickerMode)return;
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
    const rect=face.getBoundingClientRect();
    const x=Math.round((e.clientX-rect.left)/rect.width*100);
    const y=Math.round((e.clientY-rect.top)/rect.height*100);
    snapshot();
    if(!Array.isArray(state.stickers))state.stickers=[];
    state.stickers.push({symbol:stickerMode,x:Math.max(0,Math.min(100,x)),
      y:Math.max(0,Math.min(100,y))});
    apply();stickerMode='';
  },true);
  window.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&!panel.hidden){panel.hidden=true;stickerMode='';}
  });
  renderPanel();apply();
})();