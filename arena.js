/* ARENA NOVA 3D - original laser-tag con Three.js. Sin rankings de confianza del cliente. */
const $=id=>document.getElementById(id);
let THREE;
try{THREE=await Promise.race([import('https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js'),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Tiempo de espera del motor agotado')),12000))]);}
catch(e){$('menuDesc').textContent='No se ha podido descargar el motor 3D. Necesitas una conexión que permita cargar jsDelivr. Detalle: '+String(e.message||'');$('startBtn').disabled=true;console.warn(e);}
if(THREE){
$('startBtn').disabled=false;$('startBtn').textContent='▶ ENTRAR EN LA ARENA';$('menuDesc').textContent='Un jugador contra drones de entrenamiento. Sin armas reales, dinero ni apuestas.';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const scene=new THREE.Scene();scene.background=new THREE.Color('#121a38');scene.fog=new THREE.Fog('#151a3f',32,105);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;$('render').appendChild(renderer.domElement);
const camera=new THREE.PerspectiveCamera(77,innerWidth/innerHeight,.07,130);camera.rotation.order='YXZ';
scene.add(new THREE.HemisphereLight(0xbfd8ff,0x292747,2.0));const sun=new THREE.DirectionalLight(0xffffff,2.2);sun.position.set(12,25,6);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-42;sun.shadow.camera.right=42;sun.shadow.camera.top=42;sun.shadow.camera.bottom=-42;scene.add(sun);
const mats={floor:new THREE.MeshStandardMaterial({color:0x263454,roughness:.87,metalness:.18}),wall:new THREE.MeshStandardMaterial({color:0x394765,metalness:.18,roughness:.66}),block:new THREE.MeshStandardMaterial({color:0x505e83,roughness:.58,metalness:.21}),cyan:new THREE.MeshStandardMaterial({color:0x60edd9,emissive:0x2c91a3,emissiveIntensity:.7}),pink:new THREE.MeshStandardMaterial({color:0xe582ff,emissive:0x8b33ad,emissiveIntensity:.7}),yellow:new THREE.MeshStandardMaterial({color:0xffd98a,emissive:0x946322,emissiveIntensity:.7})};
const solid=[],solidObjects=[];
function box(x,y,z,w,h,d,material,collides=true){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;scene.add(m);if(collides){solid.push({x,z,w,d,h});solidObjects.push(m);}return m;}
box(0,-.65,0,56,1,56,mats.floor,false);
const grid=new THREE.GridHelper(56,28,0x88ffff,0x53617e);grid.position.y=-.12;grid.material.transparent=true;grid.material.opacity=.22;scene.add(grid);
for(const [x,z,w,d] of [[0,-28,56,1],[0,28,56,1],[-28,0,1,56],[28,0,1,56]])box(x,4,z,w,8,d,mats.wall);
const obstacles=[[-15,-12,5,5],[15,12,5,5],[-13,12,6,3],[13,-12,6,3],[0,-16,9,3],[0,16,9,3],[-19,1,4,10],[19,-1,4,10],[-7,0,4,7],[7,0,4,7],[0,0,3,3]];
obstacles.forEach(([x,z,w,d],i)=>{box(x,1.6,z,w,3.2,d,mats.block);box(x,3.28,z,w+.2,.14,d+.2,i%2?mats.pink:mats.cyan,false);});
for(let i=0;i<14;i++){const t=i/14*Math.PI*2;const x=Math.cos(t)*25,z=Math.sin(t)*25;const pole=box(x,3,z,.5,6,.5,mats.wall,false);const glow=new THREE.PointLight(i%2?0x70eaff:0xe19aff,6,17);glow.position.set(x,6,z);scene.add(glow);}
const drones=[];const raycaster=new THREE.Raycaster(),targetObjects=[];const pulseEffects=[];
function addBot(i){const group=new THREE.Group();const outer=new THREE.Mesh(new THREE.IcosahedronGeometry(.67,1),new THREE.MeshStandardMaterial({color:i%2?0xff89db:0x83e7ff,emissive:i%2?0xae2988:0x227eae,emissiveIntensity:.45,metalness:.3,roughness:.35}));outer.userData.bot=i;group.add(outer);const eye=new THREE.Mesh(new THREE.SphereGeometry(.17,10,10),mats.yellow);eye.position.set(0,0,.61);group.add(eye);const ring=new THREE.Mesh(new THREE.TorusGeometry(.92,.045,7,34),i%2?mats.pink:mats.cyan);ring.rotation.x=Math.PI/2;group.add(ring);group.traverse(o=>{if(o.isMesh){o.userData.bot=i;targetObjects.push(o)}});scene.add(group);drones.push({mesh:group,hp:2,speed:.5+i%3*.24,phase:i*.91,shot:0,alive:true});}
for(let i=0;i<9;i++)addBot(i);
const cameraPivot={x:0,z:14,yaw:0,pitch:0};let score=0,streak=0,tags=0,energy=100,timeLeft=180,elapsed=0,last=performance.now(),cooldown=0,jump=0,jumpSpeed=0,running=false,paused=true,finished=false,warningUntil=0;let difficulty='normal';const keys=new Set();let touchAim=false;
const posOk=(x,z,r=.62)=>{if(Math.abs(x)>26.5||Math.abs(z)>26.5)return false;return !solid.some(o=>Math.abs(x-o.x)<o.w/2+r&&Math.abs(z-o.z)<o.d/2+r)};
function botPosition(b,i,dt){if(!b.alive)return;b.phase+=dt*b.speed;const base=i/9*Math.PI*2;const x=Math.cos(base)*17+Math.sin(b.phase*.9+i)*4,z=Math.sin(base)*17+Math.cos(b.phase*.75+i)*3;b.mesh.position.set(x,1.6+Math.sin(b.phase*2.7)*.25,z);b.mesh.rotation.y=b.phase;}
function spawnPulse(origin,end,color){const points=[origin.clone(),end.clone()];const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color,transparent:true,opacity:1}));scene.add(line);pulseEffects.push({line,time:.17});}
function alertBanner(t){$('banner').textContent=t;$('banner').classList.add('show');warningUntil=performance.now()+1150;}
function tagged(){if(!running||paused||cooldown>0)return;cooldown=.24;tags++;camera.updateMatrixWorld();raycaster.setFromCamera(new THREE.Vector2(0,0),camera);const hits=raycaster.intersectObjects(targetObjects,false);let hit=null;const wallHits=raycaster.intersectObjects(solidObjects,false);const wallDistance=wallHits.length?wallHits[0].distance:Infinity;
for(const h of hits){const index=h.object.userData.bot;if(Number.isInteger(index)&&drones[index]?.alive&&h.distance<42&&h.distance<wallDistance){hit={bot:drones[index],index,point:h.point};break;}}
const origin=new THREE.Vector3(cameraPivot.x,camera.position.y-.12,cameraPivot.z),end=hit?hit.point:origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(35));spawnPulse(origin,end,0x99fdec);
if(hit){hit.bot.hp--;if(hit.bot.hp<=0){hit.bot.alive=false;hit.bot.mesh.visible=false;score+=100+streak*8;streak++;if(streak%3===0)alertBanner(`✦ ¡RACHA ${streak}!`);setTimeout(()=>{if(running&&!finished){hit.bot.hp=2;hit.bot.alive=true;hit.bot.mesh.visible=true;}},4000);}else score+=25;}updateHud();}
function updateHud(){$('score').textContent=score;$('streak').textContent=streak;$('bots').textContent=drones.filter(d=>d.alive).length;$('energy').style.width=clamp(energy,0,100)+'%';$('energyText').textContent=`ENERGÍA ${Math.ceil(energy)}/100 · TAGS ${tags}`;$('timer').textContent=String(Math.floor(timeLeft/60)).padStart(2,'0')+':'+String(Math.floor(timeLeft%60)).padStart(2,'0');}
function pause(){paused=true;$('menu').classList.remove('hidden');$('startBtn').textContent='▶ REANUDAR';$('menuDesc').textContent=finished?`Partida terminada · ${score} puntos locales. Pulsa iniciar para jugar de nuevo.`:'Pulsa reanudar para volver al entrenamiento 3D.';}
function reset(){score=0;streak=0;tags=0;energy=100;timeLeft=180;elapsed=0;cooldown=0;finished=false;cameraPivot.x=0;cameraPivot.z=14;cameraPivot.yaw=0;cameraPivot.pitch=0;for(const b of drones){b.alive=true;b.hp=2;b.mesh.visible=true;}updateHud();}
$('startBtn').onclick=()=>{difficulty=$('difficulty').value;if(!running||finished){reset();running=true;}paused=false;$('menu').classList.add('hidden');if(matchMedia('(pointer:fine)').matches)renderer.domElement.requestPointerLock?.().catch(()=>{});};
addEventListener('keydown',e=>{if(e.code==='Escape'){if(!paused){pause();document.exitPointerLock?.();}return;}keys.add(e.code);if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();});addEventListener('keyup',e=>keys.delete(e.code));
renderer.domElement.addEventListener('click',()=>{if(running&&!paused){if(document.pointerLockElement!==renderer.domElement&&matchMedia('(pointer:fine)').matches)renderer.domElement.requestPointerLock?.().catch(()=>{});tagged();}});
addEventListener('mousemove',e=>{if(!running||paused)return;if(document.pointerLockElement===renderer.domElement||touchAim){cameraPivot.yaw-=e.movementX*.0026;cameraPivot.pitch=clamp(cameraPivot.pitch-e.movementY*.0023,-1.15,1.15);}});
$('tagBtn').addEventListener('pointerdown',e=>{e.preventDefault();tagged();});
for(const el of document.querySelectorAll('[data-control]')){const map={up:'KeyW',down:'KeyS',left:'KeyA',right:'KeyD'},k=map[el.dataset.control];el.addEventListener('pointerdown',e=>{e.preventDefault();keys.add(k);el.setPointerCapture(e.pointerId);});el.addEventListener('pointerup',()=>keys.delete(k));el.addEventListener('pointercancel',()=>keys.delete(k));}
let tx=0,ty=0;renderer.domElement.addEventListener('touchstart',e=>{if(e.touches.length){tx=e.touches[0].clientX;ty=e.touches[0].clientY;}},{passive:true});renderer.domElement.addEventListener('touchmove',e=>{if(!running||paused||!e.touches.length)return;const x=e.touches[0].clientX,y=e.touches[0].clientY;cameraPivot.yaw-=(x-tx)*.006;cameraPivot.pitch=clamp(cameraPivot.pitch-(y-ty)*.004,-1.1,1.1);tx=x;ty=y;},{passive:true});
function loop(now){requestAnimationFrame(loop);let dt=Math.min((now-last)/1000,.055);last=now;if(document.hidden)dt=0;
if(running&&!paused&&dt>0){timeLeft=Math.max(0,timeLeft-dt);elapsed+=dt;cooldown=Math.max(0,cooldown-dt);
const fwd=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'));const side=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
const mag=Math.hypot(fwd,side)||1;const speed=keys.has('ShiftLeft')?11:7.5;const x=(Math.sin(cameraPivot.yaw)*fwd+Math.cos(cameraPivot.yaw)*side)/mag*speed*dt;const z=(-Math.cos(cameraPivot.yaw)*fwd+Math.sin(cameraPivot.yaw)*side)/mag*speed*dt;
if(posOk(cameraPivot.x+x,cameraPivot.z))cameraPivot.x+=x;if(posOk(cameraPivot.x,cameraPivot.z+z))cameraPivot.z+=z;
if(keys.has('Space')&&jump===0&&jumpSpeed===0)jumpSpeed=6.2;
if(jumpSpeed!==0||jump>0){jump+=jumpSpeed*dt;jumpSpeed-=18*dt;if(jump<0){jump=0;jumpSpeed=0;}}
for(let i=0;i<drones.length;i++){const bot=drones[i];botPosition(bot,i,dt);if(!bot.alive)continue;bot.shot-=dt;const dx=bot.mesh.position.x-cameraPivot.x,dz=bot.mesh.position.z-cameraPivot.z,dist=Math.hypot(dx,dz);
if(dist<18&&bot.shot<=0){bot.shot=(difficulty==='pro'?1.3:difficulty==='normal'?2.2:3.5)+Math.random()*.8;const difficultyChance=difficulty==='pro'?.78:difficulty==='normal'?.48:.22;if(Math.random()<difficultyChance){energy=Math.max(0,energy-(difficulty==='pro'?15:10));$('hit').classList.add('show');setTimeout(()=>$('hit').classList.remove('show'),140);streak=0;if(energy<=0){energy=100;cameraPivot.x=0;cameraPivot.z=14;alertBanner('REAPARICIÓN · SIGUE JUGANDO');}}}}
for(let i=pulseEffects.length-1;i>=0;i--){const p=pulseEffects[i];p.time-=dt;p.line.material.opacity=Math.max(0,p.time/.17);if(p.time<=0){scene.remove(p.line);p.line.geometry.dispose();p.line.material.dispose();pulseEffects.splice(i,1);}}
if(now>warningUntil)$('banner').classList.remove('show');if(timeLeft<=0){finished=true;pause();document.exitPointerLock?.();}updateHud();}
camera.position.set(cameraPivot.x,1.75+jump,cameraPivot.z);camera.rotation.y=cameraPivot.yaw;camera.rotation.x=cameraPivot.pitch;renderer.render(scene,camera);}
requestAnimationFrame(loop);
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
addEventListener('blur',()=>{keys.clear();if(running&&!paused){paused=true;pause();}});updateHud();
}
