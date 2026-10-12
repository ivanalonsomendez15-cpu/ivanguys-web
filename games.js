/* 12 minijuegos originales de IVANGUYS ARCADE. Sin librerías ni servicios externos. */
(() => {
  'use strict';
  const pick=n=>Math.floor(Math.random()*n), clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  function create(id,ui){
    let disposers=[],running=true,score=0,best=0;
    const key='ivanguys_best_'+id;
    try{best=Number(localStorage.getItem(key))||0}catch{}
    const stage=ui.stage;
    function listen(el,event,cb,options){el.addEventListener(event,cb,options);disposers.push(()=>el.removeEventListener(event,cb,options))}
    function every(cb,ms){const t=setInterval(cb,ms);disposers.push(()=>clearInterval(t));return t}
    function after(cb,ms){const t=setTimeout(cb,ms);disposers.push(()=>clearTimeout(t));return t}
    function raf(cb){let active=true,frame=null;function tick(t){if(!active||!running)return;cb(t);frame=requestAnimationFrame(tick)}frame=requestAnimationFrame(tick);disposers.push(()=>{active=false;cancelAnimationFrame(frame)})}
    function clear(){running=false;for(const fn of disposers.splice(0)){try{fn()}catch{}}stage.replaceChildren();ui.instructions.textContent='';}
    function start(){clear();running=true;score=0;showScore();(implementations[id]||implementations.snake)();}
    function destroy(){clear()}
    function showScore(){ui.score.textContent=String(score);ui.best.textContent=String(best)}
    function setScore(n){score=Math.max(0,Math.round(n));if(score>best){best=score;try{localStorage.setItem(key,String(best))}catch{}}showScore()}
    function line(message){const p=document.createElement('div');p.className='game-info-line';p.textContent=message;stage.append(p);return p}
    function toast(message){const p=document.createElement('div');p.className='game-toast';p.setAttribute('aria-live','polite');p.textContent=message;stage.append(p);return p}
    function win(message){line(message);running=false}
    function button(label,cb,parent=stage,css='touch-btn'){const b=document.createElement('button');b.className=css;b.textContent=label;parent.append(b);listen(b,'click',cb);return b}
    function buttons(actions){const box=document.createElement('div');box.className='game-btn-row';for(const [label,fn] of actions)button(label,fn,box);stage.append(box);return box}
    function keyboard(handler){listen(document,'keydown',e=>{if(!running)return;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','w','W','a','A','s','S','d','D'].includes(e.key))e.preventDefault();handler(e.key)},false)}
    function canvas(w=560,h=320){const c=document.createElement('canvas');c.width=w;c.height=h;c.setAttribute('aria-label','Tablero del juego');stage.append(c);const ctx=c.getContext('2d');return [c,ctx]}
    function rect(ctx,x,y,w,h,color,r=0){ctx.fillStyle=color;if(r){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}else ctx.fillRect(x,y,w,h)}
    function dot(ctx,x,y,r,color){ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill()}
    function background(ctx,w,h){rect(ctx,0,0,w,h,'#0c1429');ctx.strokeStyle='#ffffff08';for(let x=0;x<w;x+=28){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=0;y<h;y+=28){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}}
    function snake(){
      ui.instructions.textContent='Muévete con las flechas / WASD o los botones. Come luces verdes sin chocar.';
      const [c,x]=canvas(500,300),unit=20,cols=25,rows=15;
      let body=[{x:11,y:7},{x:10,y:7},{x:9,y:7}],dir={x:1,y:0},next={...dir},food={x:17,y:7};
      function place(){const free=[];for(let j=0;j<rows;j++)for(let i=0;i<cols;i++)if(!body.some(s=>s.x===i&&s.y===j))free.push({x:i,y:j});if(!free.length){win('¡Has llenado todo el tablero!');return}food=free[pick(free.length)]}
      function steer(dx,dy){if(dx===-dir.x && dy===-dir.y)return;next={x:dx,y:dy}}
      keyboard(k=>{if(k==='ArrowUp'||k.toLowerCase()==='w')steer(0,-1);if(k==='ArrowDown'||k.toLowerCase()==='s')steer(0,1);if(k==='ArrowLeft'||k.toLowerCase()==='a')steer(-1,0);if(k==='ArrowRight'||k.toLowerCase()==='d')steer(1,0)});
      buttons([['↑',()=>steer(0,-1)],['←',()=>steer(-1,0)],['↓',()=>steer(0,1)],['→',()=>steer(1,0)]]);
      function draw(){background(x,500,300);dot(x,food.x*20+10,food.y*20+10,7,'#55f0b7');body.forEach((s,i)=>rect(x,s.x*20+2,s.y*20+2,16,16,i===0?'#c5a1ff':'#7f65d8',4))}
      function tick(){if(!running)return;dir=next;const head={x:body[0].x+dir.x,y:body[0].y+dir.y},eats=head.x===food.x&&head.y===food.y;
        if(head.x<0||head.y<0||head.x>=cols||head.y>=rows||body.slice(0,eats?undefined:-1).some(s=>s.x===head.x&&s.y===head.y)){win('¡Fin de partida! Reinicia para intentarlo otra vez.');return}
        body.unshift(head);if(eats){setScore(score+10);place()}else body.pop();draw()}
      draw();every(tick,115);
    }
    function pong(){
      ui.instructions.textContent='Muévete con ↑/↓ o W/S. También puedes mover la pala con el ratón o el dedo. Llega a 7 puntos.';
      const [c,x]=canvas(),h=320,w=560;let py=130,ay=130,ball={x:280,y:160,vx:4,vy:2.8},down=new Set(),last=0;
      function serve(direction){ball={x:280,y:160,vx:direction*(3.5+Math.random()),vy:(Math.random()*4-2)||2}}
      keyboard(k=>{if(['ArrowUp','w','W'].includes(k))py-=26;if(['ArrowDown','s','S'].includes(k))py+=26;py=clamp(py,0,h-73)});
      function pointer(e){const b=c.getBoundingClientRect();py=clamp((e.clientY-b.top)*h/b.height-37,0,h-73)}listen(c,'pointermove',pointer);listen(c,'pointerdown',pointer);
      buttons([['↑',()=>py=clamp(py-32,0,247)],['↓',()=>py=clamp(py+32,0,247)]]);
      raf(t=>{const d=clamp((t-(last||t))/16.7,.2,2);last=t;ball.x+=ball.vx*d;ball.y+=ball.vy*d;if(ball.y<9||ball.y>h-9)ball.vy*=-1;
        ay=clamp(ay+(ball.y-(ay+36))*0.047*d,0,h-73);
        if(ball.x<43&&ball.x>35&&ball.vx<0&&ball.y>py-8&&ball.y<py+81){ball.vx=Math.abs(ball.vx)*1.07;ball.vy=(ball.y-py-36)*.095}
        if(ball.x>517&&ball.x<526&&ball.vx>0&&ball.y>ay-8&&ball.y<ay+81){ball.vx=-Math.abs(ball.vx)*1.05;ball.vy=(ball.y-ay-36)*.09}
        if(ball.x>w+8){setScore(score+1);if(score===7){win('¡VICTORIA! Has ganado a la IA.');return}serve(-1)}if(ball.x< -8)serve(1);
        background(x,w,h);x.fillStyle='#626c94';for(let j=5;j<h;j+=24)x.fillRect(278,j,4,14);rect(x,31,py,12,73,'#b69cff',6);rect(x,518,ay,12,73,'#59e0df',6);dot(x,ball.x,ball.y,8,'#fff3c7');x.font='bold 15px sans-serif';x.fillStyle='#bbc4e9';x.fillText('TÚ',24,25);x.fillText('IA',510,25)
      });
    }
    function breakout(){
      ui.instructions.textContent='Controla la pala con ←/→, A/D o con el puntero. Evita perder la pelota. 3 intentos.';
      const [c,x]=canvas(),w=560,h=320;const paddle={x:235,y:299,w:90},ball={x:280,y:255,vx:3,vy:-3.5};let lives=3,bricks=[];
      for(let r=0;r<4;r++)for(let j=0;j<8;j++)bricks.push({x:15+j*67,y:40+r*27,w:60,h:19,alive:true,color:['#a88dff','#62d9e5','#ff87bd','#f9c87b'][r]});
      function move(e){const b=c.getBoundingClientRect();paddle.x=clamp((e.clientX-b.left)*w/b.width-paddle.w/2,0,w-paddle.w)}
      listen(c,'pointermove',move);listen(c,'pointerdown',move);
      keyboard(k=>{if(k==='ArrowLeft'||k.toLowerCase()==='a')paddle.x=clamp(paddle.x-33,0,w-paddle.w);if(k==='ArrowRight'||k.toLowerCase()==='d')paddle.x=clamp(paddle.x+33,0,w-paddle.w)});
      buttons([['←',()=>paddle.x=clamp(paddle.x-36,0,470)],['→',()=>paddle.x=clamp(paddle.x+36,0,470)]]);
      let last=0;raf(t=>{const d=clamp((t-(last||t))/16.7,.4,1.8);last=t;ball.x+=ball.vx*d;ball.y+=ball.vy*d;
        if(ball.x<8||ball.x>w-8)ball.vx*=-1;if(ball.y<8)ball.vy=Math.abs(ball.vy);
        if(ball.vy>0&&ball.y+8>=paddle.y&&ball.y-8<paddle.y+12&&ball.x>paddle.x&&ball.x<paddle.x+paddle.w){ball.vy=-Math.abs(ball.vy);ball.vx=(ball.x-paddle.x-paddle.w/2)*.085}
        for(const b of bricks)if(b.alive&&ball.x>b.x-6&&ball.x<b.x+b.w+6&&ball.y>b.y-6&&ball.y<b.y+b.h+6){b.alive=false;ball.vy*=-1;setScore(score+5);break}
        if(ball.y>h+8){lives--;if(lives<=0){win('Te quedaste sin vidas. ¡Vuelve a intentarlo!');return}ball.x=280;ball.y=255;ball.vx=2.8;ball.vy=-3.4}
        if(bricks.every(b=>!b.alive)){win('¡HAS DESTRUIDO TODOS LOS BLOQUES!');return}
        background(x,w,h);for(const b of bricks)if(b.alive)rect(x,b.x,b.y,b.w,b.h,b.color,4);rect(x,paddle.x,paddle.y,paddle.w,11,'#b5a2ff',6);dot(x,ball.x,ball.y,7,'#f4fdff');x.fillStyle='#f4aaba';x.font='bold 14px sans-serif';x.fillText('❤'.repeat(lives),15,22)
      });
    }
    function fly(){
      ui.instructions.textContent='Pulsa ESPACIO, haz clic o toca SALTAR para mantener la nave en el aire. Esquiva los obstáculos.';
      const [c,x]=canvas(520,310),w=520,h=310;let y=150,vy=0,frame=0,pipes=[],alive=true;
      function jump(){if(alive)vy=-5.6}listen(c,'pointerdown',jump);keyboard(k=>{if(k===' '||k==='ArrowUp')jump()});buttons([['🚀 SALTAR',jump]]);
      raf(()=>{if(!alive)return;frame++;vy+=.33;y+=vy;if(frame%94===0)pipes.push({x:w+10,gap:62+pick(123),seen:false});
        pipes.forEach(p=>{p.x-=2.7;if(!p.seen&&p.x+45<92){p.seen=true;setScore(score+1)}});pipes=pipes.filter(p=>p.x>-65);
        for(const p of pipes)if(92+13>p.x&&92-13<p.x+45&&(y-13<p.gap||y+13>p.gap+115))alive=false;
        if(y<12||y>h-12)alive=false;
        background(x,w,h);for(const p of pipes){rect(x,p.x,0,45,p.gap,'#41c2ac',6);rect(x,p.x,p.gap+115,45,h-p.gap-115,'#41c2ac',6)}dot(x,92,y,13,'#d6aaff');x.font='20px sans-serif';x.fillText('✦',85,y+7);
        if(!alive){running=false;line('¡Choque! Reinicia para volver a volar.')}});
    }
    function fusion(){
      ui.instructions.textContent='Usa las flechas, WASD o los controles. Al mover, los bloques iguales se fusionan.';
      let board=Array(16).fill(0),ended=false;
      const box=document.createElement('div');box.className='game-board numbers-grid';box.style.gridTemplateColumns='repeat(4,1fr)';stage.append(box);
      function spawn(){const free=board.map((v,i)=>v?null:i).filter(v=>v!==null);if(free.length)board[free[pick(free.length)]]=Math.random()<.91?2:4}
      function draw(){box.replaceChildren();board.forEach(n=>{const el=document.createElement('div');el.className='tile';el.dataset.n=n;el.textContent=n||'';box.append(el)})}
      function shift(k){if(ended)return;let changed=false;const next=board.slice();
        for(let i=0;i<4;i++){
          const idx=Array.from({length:4},(_,j)=>{if(k==='left')return i*4+j;if(k==='right')return i*4+3-j;if(k==='up')return j*4+i;return (3-j)*4+i});
          const vals=idx.map(p=>board[p]).filter(Boolean),merged=[];
          for(let j=0;j<vals.length;j++){if(vals[j]===vals[j+1]){merged.push(vals[j]*2);setScore(score+vals[j]*2);j++}else merged.push(vals[j])}
          while(merged.length<4)merged.push(0);idx.forEach((p,j)=>{next[p]=merged[j];if(next[p]!==board[p])changed=true});
        }
        if(changed){board=next;spawn();draw();if(board.includes(2048)&&!ended){toast('¡Has alcanzado 2048! Puedes continuar.')}if(board.every(Boolean)&&!board.some((n,i)=>i%4<3&&n===board[i+1]||i<12&&n===board[i+4])){ended=true;toast('Sin movimientos. ¡Inténtalo de nuevo!')}}
      }
      spawn();spawn();draw();keyboard(k=>{const map={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right'};if(map[k])shift(map[k])});
      buttons([['↑',()=>shift('up')],['←',()=>shift('left')],['↓',()=>shift('down')],['→',()=>shift('right')]]);
      let tx=0,ty=0;listen(box,'touchstart',e=>{tx=e.changedTouches[0].clientX;ty=e.changedTouches[0].clientY},{passive:true});listen(box,'touchend',e=>{const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.max(Math.abs(dx),Math.abs(dy))>22)shift(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up'))},{passive:true});
    }
    function memory(){
      ui.instructions.textContent='Haz clic en dos cartas. Si coinciden, se quedan descubiertas. Encuentra las 8 parejas.';
      const faces=['🍕','🎮','🌈','⭐','🚀','🍉','🦊','💎'];let deck=[...faces,...faces].sort(()=>Math.random()-.5);let open=[],found=new Set(),locked=false;
      const box=document.createElement('div');box.className='game-board';box.style.gridTemplateColumns='repeat(4,1fr)';stage.append(box);
      const cards=deck.map((v,i)=>{const b=button('?',()=>flip(i),box,'tile memory-card');b.setAttribute('aria-label','Carta '+(i+1));return b});
      function flip(i){if(locked||found.has(i)||open.includes(i))return;cards[i].textContent=deck[i];cards[i].classList.add('selected');open.push(i);
        if(open.length===2){const [a,b]=open;if(deck[a]===deck[b]){found.add(a);found.add(b);cards[a].classList.add('hit');cards[b].classList.add('hit');setScore(score+10);open=[];if(found.size===16)toast('¡Perfecto! Has descubierto las 8 parejas.')}else{locked=true;after(()=>{for(const j of open){cards[j].textContent='?';cards[j].classList.remove('selected')}open=[];locked=false},700)}}
      }
    }
    function ttt(){
      ui.instructions.textContent='Tú juegas con X y la IA con O. Intenta conseguir tres símbolos alineados.';
      let board=Array(9).fill(''),done=false;
      const box=document.createElement('div');box.className='game-board ttt-field';box.style.gridTemplateColumns='repeat(3,1fr)';stage.append(box);
      const status=toast('Tu turno · X');const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      const outcome=b=>{for(const l of lines)if(b[l[0]]&&b[l[0]]===b[l[1]]&&b[l[1]]===b[l[2]])return b[l[0]];return b.every(Boolean)?'tie':null};
      function aiChoice(){const choices=board.map((n,i)=>n?null:i).filter(v=>v!==null);let best=-Infinity,idx=choices[0];
        for(const i of choices){board[i]='O';const value=minimax(board,false,0);board[i]='';if(value>best){best=value;idx=i}}return idx;}
      function minimax(b,max,depth){const out=outcome(b);if(out==='O')return 10-depth;if(out==='X')return depth-10;if(out==='tie')return 0;
        let val=max?-Infinity:Infinity;for(let i=0;i<9;i++)if(!b[i]){b[i]=max?'O':'X';const t=minimax(b,!max,depth+1);b[i]='';val=max?Math.max(val,t):Math.min(val,t)}return val;}
      const els=Array.from({length:9},(_,i)=>button('',()=>choose(i),box,'tile'));
      function draw(){els.forEach((b,i)=>{b.textContent=board[i];b.disabled=!!board[i]||done;b.setAttribute('aria-label','Casilla '+(i+1)+' '+(board[i]||'vacía'))})}
      function end(){const result=outcome(board);if(result){done=true;if(result==='X'){setScore(score+10);status.textContent='¡GANASTE!';}else if(result==='O')status.textContent='La IA ha ganado. ¡Revancha!';else{setScore(score+2);status.textContent='¡EMPATE!';}draw();return true}return false}
      function choose(i){if(done||board[i])return;board[i]='X';draw();if(end())return;board[aiChoice()]='O';draw();end()}draw();
    }
    function mole(){
      ui.instructions.textContent='Pulsa el topo que aparezca. Tienes 30 segundos para conseguir todos los puntos posibles.';
      let active=-1,secs=30,finished=false;const timer=line('Tiempo restante: '+secs+' s');
      const box=document.createElement('div');box.className='game-board whack-field';box.style.gridTemplateColumns='repeat(3,1fr)';stage.append(box);
      const cells=Array.from({length:9},(_,i)=>button('🕳️',()=>hit(i),box,'tile'));
      function spawn(){active=pick(9);cells.forEach((b,i)=>{b.textContent=i===active?'🐹':'🕳️';b.setAttribute('aria-label',i===active?'Topo':'Agujero')})}
      function hit(i){if(finished||i!==active)return;setScore(score+1);spawn()}
      spawn();every(spawn,720);every(()=>{secs--;timer.textContent='Tiempo restante: '+secs+' s';if(secs<=0){finished=true;running=false;timer.textContent='¡Tiempo agotado! '+score+' puntos';cells.forEach(x=>x.disabled=true)}},1000);
    }
    function reaction(){
      ui.instructions.textContent='Pulsa INICIAR. Cuando el círculo pase a VERDE, pulsa enseguida. Si pulsas antes, tienes que volver a empezar.';
      let state='idle',readyAt=0,roundToken=0;const status=toast('Prepárate para medir tus reflejos.');
      const target=button('⚡',handle,stage,'reaction-target');const ctrl=button('▶ INICIAR',startRound,stage,'game-big-btn');
      function startRound(){state='waiting';const token=++roundToken;target.className='reaction-target red';status.textContent='Espera al VERDE...';ctrl.disabled=true;after(()=>{if(state==='waiting'&&token===roundToken){state='ready';readyAt=performance.now();target.className='reaction-target green';status.textContent='¡AHORA!'}},1700+pick(3200))}
      function handle(){if(state==='waiting'){state='idle';roundToken++;status.textContent='¡Demasiado pronto! Pulsa INICIAR otra vez.';target.className='reaction-target';ctrl.disabled=false}else if(state==='ready'){const ms=Math.round(performance.now()-readyAt);setScore(Math.max(0,1500-ms));status.textContent='Has reaccionado en '+ms+' ms · '+score+' puntos';state='idle';target.className='reaction-target';ctrl.disabled=false}else status.textContent='Pulsa INICIAR primero.'}
      keyboard(k=>{if(k===' '||k==='Enter')handle()});
    }
    function clicker(){
      ui.instructions.textContent='Consigue gemas durante 30 segundos. Compra mejoras para multiplicar cada clic.';
      let coins=0,mult=1,seconds=30,started=false,finished=false,cost=20;
      const timer=line('30 segundos para hacerte con las gemas.');
      const gem=button('💎',()=>{if(finished)return;if(!started){started=true;runClock()}coins+=mult;setScore(score+mult);stats()},stage,'reaction-target');
      const stats=()=>{timer.textContent=`⏳ ${seconds}s · 💎 ${coins} gemas disponibles · ✨ x${mult}`;upgrade.textContent='Mejorar (+1/clic) · '+cost+' 💎'};
      const upgrade=button('',()=>{if(coins>=cost&&!finished){coins-=cost;mult++;cost=Math.round(cost*2.2);stats()}},stage,'touch-btn');stats();
      function runClock(){every(()=>{seconds--;stats();if(seconds<=0){finished=true;running=false;gem.disabled=true;upgrade.disabled=true;timer.textContent='¡Fin! Total acumulado: '+score+' gemas.'}},1000)}
    }
    function maze(){
      ui.instructions.textContent='Recorre el laberinto con flechas, WASD o botones. Llega al círculo dorado.';
      const W=21,H=15,C=21,grid=Array.from({length:H},()=>Array(W).fill(1));
      const stack=[[1,1]];grid[1][1]=0;
      while(stack.length){const [cx,cy]=stack[stack.length-1];const dirs=[[2,0],[-2,0],[0,2],[0,-2]].sort(()=>Math.random()-.5).filter(([dx,dy])=>cx+dx>0&&cy+dy>0&&cx+dx<W-1&&cy+dy<H-1&&grid[cy+dy][cx+dx]);
        if(!dirs.length){stack.pop();continue}const [dx,dy]=dirs[0];grid[cy+dy/2][cx+dx/2]=0;grid[cy+dy][cx+dx]=0;stack.push([cx+dx,cy+dy]);}
      let px=1,py=1,steps=0,ended=false;const target=[W-2,H-2], [c,x]=canvas(W*C,H*C);
      function draw(){background(x,c.width,c.height);for(let y=0;y<H;y++)for(let j=0;j<W;j++)if(grid[y][j])rect(x,j*C,y*C,C-1,C-1,'#38416b',3);dot(x,target[0]*C+C/2,target[1]*C+C/2,8,'#ffe396');dot(x,px*C+C/2,py*C+C/2,8,'#76eae3')}
      function move(dx,dy){if(ended)return;const nx=px+dx,ny=py+dy;if(!grid[ny]||grid[ny][nx]!==0)return;px=nx;py=ny;steps++;draw();if(px===target[0]&&py===target[1]){ended=true;setScore(Math.max(1,300-steps));toast('¡SALIDA! '+steps+' movimientos.')}}
      keyboard(k=>{const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]};if(m[k])move(...m[k])});
      buttons([['↑',()=>move(0,-1)],['←',()=>move(-1,0)],['↓',()=>move(0,1)],['→',()=>move(1,0)]]);draw();
    }
    function simon(){
      ui.instructions.textContent='Observa los destellos y repite la secuencia de los 4 colores. Cada ronda añade un color.';
      const palette=['#5dcbfa','#f16d91','#f2c85f','#7bdfaf'];let seq=[],idx=0,accepting=false,over=false;
      const hint=toast('Pulsa EMPEZAR para ver la secuencia.');
      const box=document.createElement('div');box.className='game-board';box.style.gridTemplateColumns='repeat(2,1fr)';box.style.maxWidth='270px';stage.append(box);
      const pads=palette.map((color,i)=>{const b=button('',()=>tap(i),box,'simon-pad');b.style.background=color;b.setAttribute('aria-label','Color '+(i+1));return b});
      const startBtn=button('▶ EMPEZAR',begin,stage,'game-big-btn');
      function light(i,delay){after(()=>pads[i].classList.add('lit'),delay);after(()=>pads[i].classList.remove('lit'),delay+420)}
      function round(){accepting=false;idx=0;seq.push(pick(4));hint.textContent='Mira la secuencia ('+seq.length+' colores)...';seq.forEach((n,j)=>light(n,350+j*620));after(()=>{accepting=true;hint.textContent='¡Tu turno! Repite '+seq.length+' colores.'},350+seq.length*620)}
      function begin(){if(over)return;startBtn.disabled=true;round()}
      function tap(i){if(!accepting||over)return;pads[i].classList.add('lit');after(()=>pads[i].classList.remove('lit'),200);if(seq[idx]!==i){accepting=false;over=true;hint.textContent='¡Secuencia incorrecta! Llegaste a la ronda '+seq.length+'.';return}idx++;if(idx===seq.length){accepting=false;setScore(score+10);hint.textContent='¡BIEN! Siguiente ronda...';after(round,750)}}
    }
    const implementations={snake,pong,breakout,fly,'2048':fusion,memory,ttt,mole,reaction,clicker,maze,simon};
    return {start,destroy};
  }
  window.IvanguysGames={create};
})();
