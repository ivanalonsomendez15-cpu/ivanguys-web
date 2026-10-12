/* IVANGUYS WORLD — juego 3D original, alojable en GitHub Pages.
   Three.js se carga como módulo externo para mantener el proyecto ligero. */
(async () => {
  'use strict';
  const loader = document.querySelector('#loading');
  let THREE;
  try { THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js'); }
  catch (e) { loader.innerHTML = '<strong>No se pudo cargar el motor 3D</strong><p>Comprueba tu conexión a Internet y actualiza la página.</p><a href="./index.html#arcade" style="color:#8dfce3">Volver al arcade</a>'; return; }
  const $ = s => document.querySelector(s);
  const rand = (() => { let seed = 247138; return () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 4294967296); })();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#98c8f5');
  scene.fog = new THREE.Fog('#98c8f5', 105, 330);
  const renderer = new THREE.WebGLRenderer({antialias:true, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.55));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.38;
  $('#view').append(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(63,innerWidth/innerHeight,.12,370);
  const hemisphere = new THREE.HemisphereLight(0xd7edff,0x446045,2.3); scene.add(hemisphere);
  const sun = new THREE.DirectionalLight(0xffeed0,2.1);sun.position.set(-65,110,55);scene.add(sun);
  sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-115;sun.shadow.camera.right=115;sun.shadow.camera.top=115;sun.shadow.camera.bottom=-115;sun.shadow.camera.near=1;sun.shadow.camera.far=340;sun.shadow.bias=-0.00012;sun.shadow.normalBias=0.03;
  const bounce = new THREE.AmbientLight(0xb3cdff,0.28);scene.add(bounce);
  const mats = (color,options={}) => new THREE.MeshStandardMaterial({color,roughness:.87,metalness:0,...options});
  // Texturas procedurales ligeras, repetibles, y creadas dentro del navegador.
  function surfaceTexture(kind){
    const c=document.createElement('canvas');c.width=c.height=256;
    const g=c.getContext('2d');g.fillStyle=kind==='grass'?'#879c67':kind==='asphalt'?'#48505a':'#b6b4a6';g.fillRect(0,0,256,256);
    const r=(()=>{let seed=kind==='grass'?1717:9797;return()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296)})();
    for(let i=0;i<5500;i++){const x=r()*256,y=r()*256,alpha=(.08+r()*.24).toFixed(2);
      g.fillStyle=kind==='grass'?r()>.4?`rgba(23,62,19,${alpha})`:`rgba(215,221,134,${alpha})`:r()>.5?`rgba(15,22,29,${alpha})`:`rgba(226,229,235,${alpha})`;
      g.fillRect(x,y,kind==='grass'?1:1+r()*2,kind==='grass'?2+r()*4:1+r()*2);
    }
    const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(kind==='grass'?30:12,kind==='grass'?30:12);t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return t;
  }
  const grassTex=surfaceTexture('grass'),asphaltTex=surfaceTexture('asphalt');
  const mat = {grass:mats('#ffffff',{map:grassTex}),road:mats('#ffffff',{map:asphaltTex,roughness:.94}),mark:mats('#e5dec2'),stone:mats('#b7c7d2'),sand:mats('#decba2'),water:mats('#4eabd0',{metalness:.12,roughness:.36}),leaves:mats('#2f986a'),trunk:mats('#845d50'),roof:mats('#725a99'),gold:mats('#ffd565',{metalness:.54,roughness:.3,emissive:'#705321',emissiveIntensity:.17})};
  function box(w,h,d,material,x=0,y=0,z=0,parent=scene){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);m.receiveShadow=true;m.castShadow=h>3&&parent===scene;parent.add(m);return m;}
  function cyl(top,bottom,height,material,x=0,y=0,z=0,parent=scene,seg=9){const m=new THREE.Mesh(new THREE.CylinderGeometry(top,bottom,height,seg),material);m.position.set(x,y,z);m.receiveShadow=true;m.castShadow=height>2&&parent===scene;parent.add(m);return m;}
  function sphere(r,material,x=0,y=0,z=0,parent=scene,segments=12){const m=new THREE.Mesh(new THREE.SphereGeometry(r,segments,9),material);m.position.set(x,y,z);parent.add(m);return m;}
  // Suelo, costas, caminos, plaza y lago.
  box(430,.28,430,mat.grass,0,-.25,0);
  box(56,.04,430,mat.road,0,-.09,0);box(430,.04,17,mat.road,0,-.08,0);
  box(18,.05,430,mats('#a0b3c1'),0,-.11,0);
  box(17,.08,430,mat.road,0,-.07,0);
  box(430,.05,1.1,mat.mark,0,-.025,-8.3);box(430,.05,1.1,mat.mark,0,-.025,8.3);
  for(let z=-195;z<195;z+=16)box(.6,.035,7,mat.mark,0,0,z);
  for(let x=-195;x<195;x+=16)box(6,.03,.4,mat.mark,x,0,0);
  const plaza=cyl(24,24,.16,mats('#d7c8b5'),0,0,0,scene,48);
  const monument=cyl(4.2,6,2,mats('#d8d3da'),0,1,0);cyl(2.3,2.5,8,mats('#bdacd2'),0,5.3,0);const orb=sphere(2.2,mats('#77f1ec',{emissive:'#159c99',emissiveIntensity:.48}),0,10.9,0);
  const lagoon=cyl(29,29,.07,mat.water,-92,-.035,84,scene,48);lagoon.scale.z=.7; // Superficie del lago plana.
  const sea=box(125,.15,420,mat.water,-206,-.12,0);
  for(let i=0;i<24;i++){const a=i/24*Math.PI*2;box(2,.4,2,mat.sand,-92+31*Math.cos(a),.01,84+22*Math.sin(a));}
  const solids=[];
  function building(x,z,w,d,h,c){
    box(w,h,d,mats(c),x,h/2,z);box(w+1.2,.55,d+1.2,mat.roof,x,h+.36,z);solids.push({x,z,r:Math.max(w,d)/2+.8,w:w/2+.7,d:d/2+.7});
    const winMat=mats('#a0eeff',{emissive:'#15435c',emissiveIntensity:.18});
    for(let yy=3;yy<h-1;yy+=4.8)for(let xx=-w/2+2;xx<w/2-1;xx+=4){box(2,2.3,.09,winMat,x+xx,yy,z+d/2+.06);}
    box(2.8,3.8,.18,mats('#342d53'),x,h>3?1.9:h/2,z+d/2+.18);
  }
  const buildingPalette=['#e6a3a1','#9daee8','#a3ddcc','#d0b1e3','#f1d09a','#bacad9','#92d4e8'];
  for(let gx=-150;gx<=150;gx+=28)for(let gz=-139;gz<=139;gz+=28){
    if(Math.abs(gx)<38||Math.abs(gz)<24)continue;
    if(gx<-61&&gz>48&&gz<115)continue; // lago
    if(gx>65&&gz<-44)continue; // bosque
    if(rand()<.16)continue;
    const w=12+rand()*6,d=12+rand()*6,h=9+rand()*26;
    building(gx+(rand()-.5)*4,gz+(rand()-.5)*4,w,d,h,buildingPalette[Math.floor(rand()*buildingPalette.length)]);
  }
  // Bosque: instancias para sostener decenas de árboles sin perjudicar FPS.
  const treeTrunk=new THREE.InstancedMesh(new THREE.CylinderGeometry(.55,.72,4,6),mat.trunk,190);
  const treeTop=new THREE.InstancedMesh(new THREE.ConeGeometry(3.4,9,7),mat.leaves,190);
  const dummy=new THREE.Object3D();const trees=[];let t=0;
  for(let i=0;i<360&&t<190;i++){
    let x=65+rand()*124,z=-170+rand()*120;
    if(Math.abs(z)<22||Math.abs(x)<25)continue;
    const height=.78+rand()*.85;
    dummy.position.set(x,1.8*height,z);dummy.scale.set(height,height,height);dummy.updateMatrix();treeTrunk.setMatrixAt(t,dummy.matrix);
    dummy.position.set(x,6.5*height,z);dummy.updateMatrix();treeTop.setMatrixAt(t,dummy.matrix);
    trees.push([x,z]);t++;
  }
  treeTrunk.count=treeTop.count=t;scene.add(treeTrunk,treeTop);
  for(let i=0;i<40;i++){
    const x=-167+rand()*70,z=-150+rand()*270;
    if(Math.abs(z)<20 || (Math.hypot(x+92,(z-84)/.7)<32))continue;
    cyl(.46,.66,3.4,mat.trunk,x,1.7,z);const l=cyl(0,3.5,8,mat.leaves,x,6.9,z);l.rotation.y=rand()*6;
  }
  // Montañas en el horizonte, pistas junto al paseo, estadios.
  for(const [x,z,r,h] of [[-185,-180,48,55],[180,178,64,80],[-190,190,61,77],[174,-184,64,65]]){
    const m=new THREE.Mesh(new THREE.ConeGeometry(r,h,7),mats('#608bb1'));m.position.set(x,h/2-1,z);scene.add(m);
    const cap=new THREE.Mesh(new THREE.ConeGeometry(r*.32,h*.22,7),mats('#d4e5ec'));cap.position.set(x,h*.88,z);scene.add(cap);
  }
  const pitch=box(39,.055,55,mats('#328a75'),85,.01,80);box(.5,.08,55,mats('#e1fcf6'),65,.075,80);box(.5,.08,55,mats('#e1fcf6'),105,.075,80);box(39,.08,.5,mats('#e1fcf6'),85,.075,52);box(39,.08,.5,mats('#e1fcf6'),85,.075,108);
  const goalMat=mats('#f5ffff');for(const zz of [53,107]){box(10,.4,.4,goalMat,85,3,zz);for(let xx of [80,90])box(.4,5,.4,goalMat,xx,1,zz);}
  // Farolas de la ciudad: halos y luz local para una sensación urbana más real.
  const lampMetal=mats('#455c70',{metalness:.65,roughness:.34});
  const lampGlass=mats('#fff8cb',{emissive:'#ffe7a6',emissiveIntensity:.95,roughness:.2});
  const nightLamps=[];
  for(let z=-158;z<=160;z+=40) for(const x of [-22,22]){
    cyl(.16,.22,9,lampMetal,x,4.5,z);sphere(.69,lampGlass,x,9.15,z);
    if(z%80===-78||z===-158){const lamp=new THREE.PointLight(0xffdc9e,0,29,2);lamp.position.set(x,9,z);scene.add(lamp);nightLamps.push(lamp);}
  }
  // Nubes discretas en capas que dan profundidad al horizonte.
  const cloudMat=new THREE.MeshBasicMaterial({color:'#f7f5ff',transparent:true,opacity:.46,depthWrite:false});
  const cloudBodies=[];
  for(let i=0;i<17;i++){
    const cx=-200+rand()*400,cz=-200+rand()*400,cy=78+rand()*35;
    const body=new THREE.Group();body.position.set(cx,cy,cz);scene.add(body);
    for(let j=0;j<4;j++){const sph=new THREE.Mesh(new THREE.SphereGeometry(6+rand()*8,10,7),cloudMat);sph.scale.y=.3;sph.position.set(j*8-13,(rand()-.5)*2,rand()*5);body.add(sph)}cloudBodies.push(body);
  }
  // Cristales coleccionables repartidos por el mapa.
  const gems=[];const crystalMaterial=mats('#83ffe5',{emissive:'#1597aa',emissiveIntensity:.64,metalness:.28,roughness:.22});
  for(let i=0;i<36;i++){
    let x,z,tries=0;
    do{x=-173+rand()*346;z=-170+rand()*340;tries++;}while(tries<80&&(solids.some(b=>Math.abs(x-b.x)<b.w+3&&Math.abs(z-b.z)<b.d+3)||Math.hypot(x+92,(z-84)/.7)<25));
    const mesh=new THREE.Mesh(new THREE.OctahedronGeometry(1.3,0),crystalMaterial);mesh.position.set(x,2.6,z);scene.add(mesh);gems.push({mesh,base:2.6,got:false});
  }
  // Avatar, amistoso y completamente original.
  const avatar=new THREE.Group();scene.add(avatar);
  cyl(.82,.92,2.1,mats('#7153dc'),0,1.7,0,avatar);sphere(.83,mats('#f4c4a5'),0,3.22,0,avatar);
  const eye=mats('#263451');sphere(.105,eye,-.31,3.32,.75,avatar);sphere(.105,eye,.31,3.32,.75,avatar);
  const headband=box(1.9,.35,.82,mats('#50e4d9'),0,3.9,0,avatar);
  for(const x of [-.54,.54]){box(.53,1.45,.63,mats('#293e79'),x,.7,0,avatar);box(.39,1.2,.4,mats('#f4c4a5'),x*1.92,1.75,0,avatar);}
  // NPCs con letreros legibles y misiones.
  function makeLabel(str){const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#182447ec';ctx.roundRect(7,12,498,100,30);ctx.fill();ctx.strokeStyle='#7cffe2';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#faffff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 49px system-ui';ctx.fillText(str,256,66);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true}));sprite.scale.set(8,2,1);return sprite;}
  const npcs=[];
  function npc(name,x,z,color,description){const group=new THREE.Group();group.position.set(x,0,z);scene.add(group);cyl(.75,.88,2.1,mats(color),0,1.5,0,group);sphere(.8,mats('#ffd3ae'),0,3.04,0,group);const label=makeLabel(name);label.position.set(0,5.2,0);group.add(label);npcs.push({name,x,z,description,group});}
  npc('NOVA',9,12,'#925deb','¡Bienvenido! Reúne 10 cristales para abrir tu siguiente misión.');npc('LUNA',-78,54,'#3279b5','¡Este lago esconde las mejores vistas de IVANGUYS WORLD!');npc('AXEL',94,-59,'#c2724a','¡Has llegado a los bosques! Vuelve a la plaza con Nova.');
  // Vehículo conducible con E junto al mismo.
  const car=new THREE.Group();car.position.set(-15,0,12);scene.add(car);
  box(4,1.1,7,mats('#ea6885'),0,1.1,0,car);box(3.4,1.3,3.8,mats('#a2d5e6'),0,2,0.5,car);
  for(const xx of [-2.15,2.15])for(const zz of [-2.15,2.15]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.77,.77,.48,12),mats('#151e31'));wheel.rotation.z=Math.PI/2;wheel.position.set(xx,.7,zz);car.add(wheel);}
  const badge=makeLabel('COCHE · E');badge.position.set(0,4.3,0);car.add(badge);
  const start={x:0,z:16};const player={x:start.x,z:start.z,y:0,vy:0,yaw:Math.PI,vehicle:false,carYaw:0};
  let saved={};try{saved=JSON.parse(localStorage.getItem('ivanguys_world_v2')||'{}')}catch{}
  let collected=0,score=0,mission=0;
  if(saved && Array.isArray(saved.gems)){saved.gems.forEach(i=>{if(gems[i]){gems[i].got=true;gems[i].mesh.visible=false;}});collected=gems.filter(g=>g.got).length;score=Number(saved.score)||collected*50;mission=Math.min(4,Math.max(0,Number(saved.mission)||0));}
  const persist=()=>{try{localStorage.setItem('ivanguys_world_v2',JSON.stringify({gems:gems.map((g,i)=>g.got?i:null).filter(v=>v!==null),score,mission}))}catch{}};
  const missions=[['Encuentra a Nova en la plaza','Acércate y pulsa E para hablar.'],['Recoge 10 cristales','Explora el mapa y encuentra los cristales turquesa.'],['Visita el lago del oeste','Busca a Luna junto al lago para descubrir el siguiente destino.'],['Explora el bosque del este','Habla con Axel en la zona de árboles.'],['Regresa con Nova','¡Has completado la aventura inicial! Habla con Nova.'],['Misiones completadas','Sigue explorando. Hay 36 cristales escondidos.']];
  function refreshHud(){$('#gems').textContent=`${collected} / 36`;$('#score').textContent=score.toLocaleString('es-ES');$('#quest').querySelector('strong').textContent=missions[mission]?.[0]||missions[5][0];$('#quest').querySelector('p').textContent=missions[mission]?.[1]||missions[5][1];}
  refreshHud();
  let timer=null;const notify=message=>{$('#status').textContent=message;$('#status').classList.remove('hidden');clearTimeout(timer);timer=setTimeout(()=>$('#status').classList.add('hidden'),3600)};
  setTimeout(()=>$('#status').classList.add('hidden'),4800);
  function interact(){
    const dcar=Math.hypot(player.x-car.position.x,player.z-car.position.z);
    if(player.vehicle){player.vehicle=false;avatar.visible=true;player.x=car.position.x+5;player.z=car.position.z;notify('Has salido del coche. ¡A explorar!');return;}
    if(dcar<8){player.vehicle=true;avatar.visible=false;player.carYaw=car.rotation.y;notify('¡Modo conducción! WASD para acelerar y girar, E para bajar.');return;}
    const near=npcs.find(n=>Math.hypot(n.x-player.x,n.z-player.z)<7);
    if(!near){notify('Acércate a un personaje o a un coche para interactuar.');return;}
    if(near.name==='NOVA'){
      if(mission===0){mission=1;notify('🗺️ NOVA: ¡Tu aventura comienza! Recoge 10 cristales.');}
      else if(mission===1&&collected>=10){mission=2;score+=200;notify('✦ NOVA: ¡Genial! +200 puntos. Ve a ver a LUNA al lago.');}
      else if(mission===4){mission=5;score+=600;notify('🏆 ¡AVENTURA COMPLETADA! +600 puntos. Sigue explorando el mundo.');}
      else notify('NOVA: '+missions[mission]?.[1]);
    }else if(near.name==='LUNA'&&mission===2){mission=3;score+=150;notify('🌊 LUNA: ¡Buen trabajo! +150 puntos. Encuentra a AXEL en el bosque.');}
    else if(near.name==='AXEL'&&mission===3){mission=4;score+=150;notify('🌲 AXEL: ¡Fantástico! +150 puntos. Vuelve con Nova.');}
    else notify(near.name+': '+near.description);
    persist();refreshHud();
  }
  const keys=new Set();document.addEventListener('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();keys.add(e.key.toLowerCase());if(e.code==='Space'&&player.y<=.02&&!player.vehicle)player.vy=10;if(e.key.toLowerCase()==='e'&&!e.repeat)interact();});document.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>keys.clear());
  for(const button of document.querySelectorAll('[data-key]')){const k=button.dataset.key;button.addEventListener('pointerdown',e=>{button.setPointerCapture(e.pointerId);keys.add(k)});for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>keys.delete(k));}
  $('#touchJump').addEventListener('pointerdown',()=>{if(player.y<=.02&&!player.vehicle)player.vy=10;});$('#touchAction').addEventListener('click',interact);
  $('#touchRun').addEventListener('pointerdown',()=>keys.add('shift'));['pointerup','pointercancel','pointerleave'].forEach(ev=>$('#touchRun').addEventListener(ev,()=>keys.delete('shift')));
  let day=true;$('#dayBtn').addEventListener('click',()=>{day=!day;scene.background=new THREE.Color(day?'#98c8f5':'#111f48');scene.fog.color.set(day?'#98c8f5':'#111f48');hemisphere.intensity=day?2.3:.64;sun.intensity=day?2.1:.13;bounce.intensity=day?.28:.43;nightLamps.forEach(l=>l.intensity=day?0:1.4);cloudMat.opacity=day?.46:.10;renderer.toneMappingExposure=day?1.38:1;$('#dayBtn').textContent=day?'☀ DÍA':'☾ NOCHE';});
  let quality=1;$('#qualityBtn').addEventListener('click',()=>{quality=(quality+1)%3;renderer.setPixelRatio([Math.min(devicePixelRatio||1,1.55),1,.75][quality]);renderer.shadowMap.enabled=quality===0;renderer.shadowMap.needsUpdate=true;$('#qualityBtn').textContent=['⚙ CALIDAD','⚙ MEDIA','⚙ BAJA'][quality];});
  let cameraYaw=Math.PI,cameraPitch=.34,drag=false,px=0,py=0;
  renderer.domElement.addEventListener('pointerdown',e=>{drag=true;px=e.clientX;py=e.clientY;renderer.domElement.setPointerCapture(e.pointerId)});
  renderer.domElement.addEventListener('pointermove',e=>{if(!drag)return;cameraYaw-=(e.clientX-px)*.005;cameraPitch=THREE.MathUtils.clamp(cameraPitch+(e.clientY-py)*.0025,.12,.8);px=e.clientX;py=e.clientY});
  renderer.domElement.addEventListener('pointerup',()=>drag=false);renderer.domElement.addEventListener('pointercancel',()=>drag=false);
  const mapctx=$('#map').getContext('2d'),mapW=176;
  function map(){const c=mapctx;c.clearRect(0,0,176,176);c.fillStyle='#3c8e78';c.fillRect(0,0,176,176);const toMap=(x,z)=>[(x+215)/430*176,(z+215)/430*176];
    c.fillStyle='#45526e';c.fillRect(82,0,12,176);c.fillRect(0,85,176,6);
    c.fillStyle='#d7c6b0';c.beginPath();c.arc(88,88,10,0,Math.PI*2);c.fill();c.fillStyle='#50bde0';c.beginPath();const pond=toMap(-92,84);c.ellipse(pond[0],pond[1],12,8,0,0,Math.PI*2);c.fill();
    c.fillStyle='#275a41';c.fillRect(115,22,56,44);
    for(const n of npcs){const [x,y]=toMap(n.x,n.z);c.fillStyle='#ffb0f7';c.beginPath();c.arc(x,y,3,0,Math.PI*2);c.fill();}
    const [xx,yy]=toMap(player.x,player.z);c.fillStyle='#ffffff';c.beginPath();c.arc(xx,yy,5,0,Math.PI*2);c.fill();c.strokeStyle='#18ffe2';c.lineWidth=2.5;c.stroke();}
  map();let last=performance.now(),clock=0,prevMap=0;
  function collides(x,z){return solids.some(b=>Math.abs(x-b.x)<b.w+1&&Math.abs(z-b.z)<b.d+1)}
  function frame(now){requestAnimationFrame(frame);let dt=Math.min(.045,(now-last)/1000);last=now;clock+=dt;
    const fw=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0);
    const side=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0);
    let dir=0;const walking=!!(fw||side);
    if(player.vehicle){
      if(walking){player.carYaw-=side*dt*1.35*(fw>=0?1:-1);const speed=(keys.has('shift')?35:23)*fw;player.x+=Math.sin(player.carYaw)*speed*dt;player.z+=Math.cos(player.carYaw)*speed*dt;}
      car.position.set(player.x,0,player.z);car.rotation.y=player.carYaw;cameraYaw=THREE.MathUtils.lerp(cameraYaw,player.carYaw,dt*.7);
    }else{
      if(walking){dir=Math.atan2(side,fw)+cameraYaw;const speed=(keys.has('shift')?18:11)*dt;const nx=THREE.MathUtils.clamp(player.x+Math.sin(dir)*speed,-201,201);const nz=THREE.MathUtils.clamp(player.z+Math.cos(dir)*speed,-201,201);
        if(!collides(nx,player.z))player.x=nx;if(!collides(player.x,nz))player.z=nz;player.yaw=THREE.MathUtils.lerp(player.yaw,dir,Math.min(1,dt*9));}
      player.vy-=25*dt;player.y+=player.vy*dt;if(player.y<0){player.y=0;player.vy=0;}avatar.position.set(player.x,player.y+Math.sin(clock*11)*.085*(walking?1:0),player.z);avatar.rotation.y=player.yaw;
    }
    player.x=THREE.MathUtils.clamp(player.x,-200,200);player.z=THREE.MathUtils.clamp(player.z,-200,200);
    for(let i=0;i<gems.length;i++){const gem=gems[i];if(gem.got)continue;gem.mesh.rotation.y+=dt*1.9;gem.mesh.position.y=gem.base+Math.sin(clock*2.1+i*.6)*.35;
      if(Math.hypot(gem.mesh.position.x-player.x,gem.mesh.position.z-player.z)<2.5){gem.got=true;gem.mesh.visible=false;collected++;score+=50;refreshHud();persist();if(collected===10&&mission===1)notify('✦ ¡10 cristales! Vuelve a hablar con NOVA.');else if(collected%5===0)notify(`✨ ¡${collected} cristales encontrados!`);}
    }
    cloudBodies.forEach((cloud,i)=>{cloud.position.x+=dt*(.15+(i%5)*.025);if(cloud.position.x>215)cloud.position.x=-215});
    lagoon.position.y=-.035+Math.sin(clock*.9)*.025;
    orb.position.y=10.9+Math.sin(clock*2)*.25;orb.rotation.y+=dt;
    let closest=player.vehicle?null:npcs.find(n=>Math.hypot(n.x-player.x,n.z-player.z)<7);
    const nearCar=Math.hypot(car.position.x-player.x,car.position.z-player.z)<8;
    $('#interaction').hidden=!(closest||nearCar||player.vehicle);if(!$('#interaction').hidden)$('#interaction').innerHTML=player.vehicle?'Pulsa <kbd>E</kbd> para bajar del coche':nearCar?'Pulsa <kbd>E</kbd> para conducir':'Pulsa <kbd>E</kbd> para hablar con '+closest.name;
    const dist=player.vehicle?17:12,height=player.vehicle?10:7;
    const target=new THREE.Vector3(player.x-Math.sin(cameraYaw)*dist,player.y+height+Math.sin(cameraPitch)*7,player.z-Math.cos(cameraYaw)*dist);
    camera.position.lerp(target,Math.min(1,dt*4.7));camera.lookAt(player.x,player.y+(player.vehicle?1.5:2.2),player.z);
    $('#position').textContent=`X ${Math.round(player.x)} · Z ${Math.round(player.z)}`;
    if(now-prevMap>250){map();prevMap=now;}
    renderer.render(scene,camera);
  }
  function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)}window.addEventListener('resize',resize);
  camera.position.set(0,10,40);camera.lookAt(0,2,0);renderer.render(scene,camera);
  loader.remove();notify('🎮 ¡Bienvenido a IVANGUYS WORLD! Busca a NOVA en la plaza.');requestAnimationFrame(frame);
})();
