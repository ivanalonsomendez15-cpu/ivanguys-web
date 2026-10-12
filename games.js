/* 30 minijuegos originales de IVANGUYS ARCADE. Sin librerías ni servicios externos. */
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
    function penalty(){
      ui.instructions.textContent='Lanza 10 penaltis. Elige una de las 9 zonas de la portería. ¡Cuidado con el portero!';
      let kicks=0,goals=0;const status=toast('⚽ Penalti 1/10 · Elige dónde tirar');
      const field=document.createElement('div');field.className='game-board';field.style.gridTemplateColumns='repeat(3,1fr)';field.style.maxWidth='345px';stage.append(field);
      const cells=Array.from({length:9},(_,i)=>button(['↖️','⬆️','↗️','⬅️','🎯','➡️','↙️','⬇️','↘️'][i],()=>shoot(i),field,'tile'));
      function shoot(zone){if(kicks>=10)return;const keeper=pick(9);kicks++;const saved=keeper===zone||((zone===4||zone===1||zone===7)&&Math.random()<.19);if(!saved){goals++;setScore(score+10+(zone===0||zone===2||zone===6||zone===8?5:0));}status.textContent=(saved?'🧤 ¡PARADA!':'🥅 ¡GOOOL!')+` · ${goals} goles de ${kicks} lanzamientos`;
        if(kicks===10){cells.forEach(b=>b.disabled=true);toast(`Final: ${goals}/10 goles. ¡Pulsa Reiniciar para otra tanda!`)}else lineOnce.textContent=`Próximo lanzamiento: ${kicks+1}/10`;}
      const lineOnce=line('Punta a las esquinas para conseguir puntos extra.');
    }
    function connect4(){
      ui.instructions.textContent='Conecta cuatro fichas azules en horizontal, vertical o diagonal antes que la IA.';
      const W=7,H=6,board=Array(W*H).fill(0),grid=document.createElement('div');grid.className='game-board';grid.style.gridTemplateColumns='repeat(7,1fr)';grid.style.maxWidth='490px';stage.append(grid);
      const status=toast('Tu turno · 🔵');let ended=false;
      const cells=Array.from({length:W*H},(_,i)=>button('·',()=>put(i%W),grid,'tile'));
      const get=(x,y)=>x>=0&&x<W&&y>=0&&y<H?board[y*W+x]:-1;
      function outcome(color){for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(get(x,y)===color)for(const [dx,dy] of [[1,0],[0,1],[1,1],[1,-1]])if([1,2,3].every(n=>get(x+dx*n,y+dy*n)===color))return true;return false;}
      function drop(col,color){for(let y=H-1;y>=0;y--)if(!get(col,y)){board[y*W+col]=color;return true;}return false;}
      function available(){return Array.from({length:W},(_,x)=>x).filter(x=>get(x,0)===0)}
      function evaluate(col,color){const fake=board.slice();for(let y=H-1;y>=0;y--)if(fake[y*W+col]===0){fake[y*W+col]=color;break;}const idx=board.slice();for(let j=0;j<board.length;j++)board[j]=fake[j];const wins=outcome(color);for(let j=0;j<board.length;j++)board[j]=idx[j];return wins;}
      function redraw(){cells.forEach((b,i)=>{b.textContent=board[i]===1?'🔵':board[i]===2?'🟠':'·';b.disabled=ended||get(i%W,0)!==0;});}
      function put(col){if(ended||!drop(col,1))return;redraw();if(outcome(1)){setScore(score+100);status.textContent='🎉 ¡Has ganado!';ended=true;redraw();return;}
        if(!available().length){status.textContent='¡Empate!';ended=true;redraw();return;}
        const choices=available();let ai=choices.find(c=>evaluate(c,2));if(ai===undefined)ai=choices.find(c=>evaluate(c,1));if(ai===undefined)ai=choices.slice().sort((a,b)=>Math.abs(a-3)-Math.abs(b-3))[0];drop(ai,2);redraw();if(outcome(2)){status.textContent='La IA ha conectado cuatro. ¡Revancha!';ended=true;}else if(!available().length){status.textContent='¡Empate!';ended=true;}redraw();}
      redraw();
    }
    function lights(){
      ui.instructions.textContent='Apaga todas las luces. Cada botón cambia su casilla y las cuatro vecinas.';
      const N=5,board=Array(25).fill(false),grid=document.createElement('div');grid.className='game-board';grid.style.gridTemplateColumns='repeat(5,1fr)';grid.style.maxWidth='390px';stage.append(grid);let moves=0,solved=false;
      const status=toast('Apaga todas las luces 💡');
      function toggle(i){const x=i%N,y=Math.floor(i/N);for(const [dx,dy] of [[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy;if(nx>=0&&nx<N&&ny>=0&&ny<N)board[ny*N+nx]=!board[ny*N+nx];}}
      for(let i=0;i<12;i++)toggle(pick(25));if(!board.some(Boolean))toggle(12);
      const cells=Array.from({length:25},(_,i)=>button('',()=>press(i),grid,'tile'));
      function draw(){cells.forEach((b,i)=>{b.textContent=board[i]?'💡':'·';b.style.background=board[i]?'#ad8549':'#192947';b.disabled=solved;});status.textContent=`Movimientos: ${moves} · Luces encendidas: ${board.filter(Boolean).length}`}
      function press(i){if(solved)return;moves++;toggle(i);draw();if(!board.some(Boolean)){solved=true;setScore(Math.max(5,200-moves*3));toast('✨ ¡Todas apagadas! Tablero resuelto.');draw();}}draw();
    }
    function wordrush(){
      ui.instructions.textContent='Escribe la palabra que aparece. Cada acierto vale 10 puntos. Tienes 45 segundos.';
      const words=['aventura','velocidad','cristal','nintendo','laberinto','galaxia','universo','infinito','tormenta','bosque','planeta','leyenda','estrella','diamante','campeon','dragones','porteria','regreso','misterio','arcade','desafio','secreto','estrellas'];
      let current='',seconds=45,finished=false;const status=toast('45 segundos para empezar.');const prompt=document.createElement('h2');prompt.style.cssText='font-size:clamp(24px,6vw,50px);text-align:center;color:#77f7de;letter-spacing:2px';stage.append(prompt);
      const input=document.createElement('input');input.type='text';input.autocapitalize='off';input.autocomplete='off';input.spellcheck=false;input.maxLength=30;input.placeholder='Escribe aquí y pulsa Enter';input.style.cssText='display:block;margin:10px auto;padding:13px;border-radius:12px;border:1px solid #8ef4e5;background:#1b2440;color:white;width:min(95%,360px);font-size:18px;text-align:center';stage.append(input);
      const newWord=()=>{current=words[pick(words.length)];prompt.textContent=current;};newWord();
      function answer(){if(finished)return;if(input.value.trim().toLocaleLowerCase('es')===current){setScore(score+10);status.textContent='✅ ¡Correcto!';newWord();}else status.textContent='❌ Inténtalo con la palabra exacta.';input.value='';}
      listen(input,'keydown',e=>{if(e.key==='Enter')answer()});button('✔ COMPROBAR',answer,stage,'game-big-btn');
      every(()=>{seconds--;if(!finished)status.textContent=`⏳ ${seconds}s · ${score/10} palabras correctas`;if(seconds<=0){finished=true;input.disabled=true;prompt.textContent='¡TIEMPO!';status.textContent=`¡Final! ${score/10} palabras correctas.`;}},1000);input.focus();
    }
    function stardodge(){
      ui.instructions.textContent='Esquiva meteoritos con A/D o las flechas. En móvil, arrastra la nave. Sobrevive el máximo tiempo.';
      const [c,ctx]=canvas(560,325);let x=280,meteors=[],lastSpawn=0,dead=false,start=performance.now(),hits=0;const hint=toast('← → para moverte. ¡Esquiva!');
      listen(c,'pointermove',e=>{if(e.buttons||e.pointerType==='touch'){const r=c.getBoundingClientRect();x=clamp((e.clientX-r.left)*c.width/r.width,19,541)}});listen(c,'pointerdown',e=>{const r=c.getBoundingClientRect();x=clamp((e.clientX-r.left)*c.width/r.width,19,541)});
      let delta=0,last=performance.now();raf(t=>{if(dead)return;const dt=Math.min((t-last)/1000,.04);last=t;delta+=dt;// El teclado se maneja con las pulsaciones de abajo.
        x=clamp(x+move*dt*255,18,542);if(t-lastSpawn>Math.max(200,660-delta*7)){meteors.push({x:20+pick(520),y:-20,r:12+pick(12),v:95+randSpeed()+delta*3});lastSpawn=t;}
        background(ctx,560,325);for(const m of meteors){m.y+=m.v*dt;dot(ctx,m.x,m.y,m.r,'#f0839e');dot(ctx,m.x-4,m.y-5,m.r*.28,'#ffdca2');if(Math.abs(m.x-x)<m.r+13&&Math.abs(m.y-280)<m.r+14){dead=true;hint.textContent=`💥 Fin · ${Math.round(delta)} segundos · ${score} puntos`;}}
        meteors=meteors.filter(m=>m.y<350);ctx.fillStyle='#6ff3db';ctx.beginPath();ctx.moveTo(x,249);ctx.lineTo(x-20,303);ctx.lineTo(x,292);ctx.lineTo(x+20,303);ctx.closePath();ctx.fill();setScore(Math.floor(delta*7));});
      function randSpeed(){return pick(80)}let move=0;keyboard(k=>{if(k==='ArrowLeft'||k==='a')move=-1;if(k==='ArrowRight'||k==='d')move=1;});listen(document,'keyup',e=>{if(['a','d','ArrowLeft','ArrowRight'].includes(e.key))move=0});
      buttons([['◀',()=>{x=clamp(x-35,18,542)}],['▶',()=>{x=clamp(x+35,18,542)}]]);
    }
    function jumpsprint(){
      ui.instructions.textContent='Salta obstáculos con ESPACIO, flecha arriba o un toque. Cada tramo superado suma puntos.';
      const [c,ctx]=canvas(560,310);let y=0,vy=0,obstacles=[],distance=0,speed=230,dead=false,last=performance.now(),spawn=0;
      const info=toast('Pulsa ESPACIO para saltar.');function jump(){if(!dead&&y<.01)vy=420;}
      keyboard(k=>{if([' ','ArrowUp','w'].includes(k))jump()});listen(c,'pointerdown',jump);button('⬆ SALTAR',jump,stage,'game-big-btn');
      raf(t=>{if(dead)return;const dt=Math.min(.045,(t-last)/1000);last=t;distance+=speed*dt;speed=Math.min(450,230+distance/45);y=Math.max(0,y+vy*dt);vy-=1100*dt;if(y===0)vy=0;spawn-=dt;if(spawn<=0){obstacles.push({x:590,w:23+pick(18),h:28+pick(25)});spawn=.85+Math.random()*.65;}
        background(ctx,560,310);rect(ctx,0,264,560,7,'#69cf9c');for(const o of obstacles){o.x-=speed*dt;rect(ctx,o.x,264-o.h,o.w,o.h,'#ed798a',5);if(o.x<107&&o.x+o.w>76&&y<o.h-7){dead=true;info.textContent=`🏁 Partida finalizada · ${score} puntos`}}obstacles=obstacles.filter(o=>o.x>-40);rect(ctx,77,220-y,29,44,'#76ddf0',7);dot(ctx,97,229-y,3,'#273f5b');if(!dead)setScore(Math.floor(distance/12));});
    }
    function mathflash(){
      ui.instructions.textContent='Resuelve operaciones rápidas sin calculadora. Tienes 60 segundos.';
      let seconds=60,correct=0,ended=false,solution=0;const info=toast('¡Resuelve tantos como puedas!');const question=document.createElement('h2');question.style.cssText='font-size:clamp(24px,6vw,44px);text-align:center;color:#bca4ff';stage.append(question);const grid=document.createElement('div');grid.className='game-board';grid.style.gridTemplateColumns='repeat(3,1fr)';grid.style.maxWidth='480px';stage.append(grid);
      const opts=Array.from({length:3},()=>button('?',()=>{},grid,'tile'));
      function next(){const a=1+pick(16+correct),b=1+pick(15+correct);const op=['+','−','×'][pick(3)];solution=op==='+'?a+b:op==='−'?a-b:a*b;question.textContent=`${a} ${op} ${b} = ?`;const answers=[solution,solution+(pick(7)+1)*(Math.random()<.5?-1:1),solution+(pick(7)+8)*(Math.random()<.5?-1:1)].sort(()=>Math.random()-.5);opts.forEach((bt,i)=>{bt.textContent=String(answers[i]);bt.onclick=()=>{if(ended)return;if(answers[i]===solution){correct++;setScore(score+10);info.textContent='✅ ¡Bien!'}else{info.textContent=`❌ La respuesta era ${solution}`;}next();};});}
      next();every(()=>{seconds--;if(!ended)info.textContent=`⏳ ${seconds} segundos · ${correct} aciertos`;if(seconds<=0){ended=true;question.textContent='¡TIEMPO!';opts.forEach(b=>b.disabled=true);info.textContent=`Has conseguido ${score} puntos`; }},1000);
    }
    function taporbit(){
      ui.instructions.textContent='Toca los objetivos luminosos en movimiento. 30 segundos para hacer tantos puntos como puedas.';
      const [c,ctx]=canvas(560,320);let goal={x:280,y:155,vx:1.3,vy:.9},left=30,finished=false,last=performance.now();const hint=toast('Toca el objetivo brillante, no el fondo.');
      const hit=(e)=>{if(finished)return;const r=c.getBoundingClientRect(),mx=(e.clientX-r.left)*c.width/r.width,my=(e.clientY-r.top)*c.height/r.height;if(Math.hypot(mx-goal.x,my-goal.y)<30){setScore(score+10);goal.x=40+pick(480);goal.y=45+pick(230);goal.vx=(Math.random()-.5)*5;goal.vy=(Math.random()-.5)*5;}};listen(c,'pointerdown',hit);raf(t=>{if(finished)return;const dt=Math.min(.05,(t-last)/1000);last=t;goal.x+=goal.vx*dt*65;goal.y+=goal.vy*dt*65;if(goal.x<30||goal.x>530)goal.vx*=-1;if(goal.y<30||goal.y>290)goal.vy*=-1;background(ctx,560,320);dot(ctx,goal.x,goal.y,28,'#bf9aff');dot(ctx,goal.x,goal.y,16,'#e4f9ff');dot(ctx,goal.x,goal.y,7,'#68f9ee');});every(()=>{left--;hint.textContent=`⏱ ${left}s · ${score} puntos`;if(left<=0){finished=true;hint.textContent=`🏆 Final · ${score} puntos`;}},1000);
    }
    function invaders(){
      ui.instructions.textContent='Defiende la galaxia: ←/→ o A/D para moverte; ESPACIO para lanzar rayos. Toca los controles en móvil.';
      const [c,x]=canvas(560,340);let ship=280,shots=[],foes=[],tick=0,ended=false;
      for(let r=0;r<4;r++)for(let j=0;j<9;j++)foes.push({x:50+j*53,y:35+r*34,alive:true});
      function shoot(){if(!ended&&shots.length<3)shots.push({x:ship,y:294})}
      keyboard(k=>{if(['ArrowLeft','a','A'].includes(k))ship=clamp(ship-25,25,535);if(['ArrowRight','d','D'].includes(k))ship=clamp(ship+25,25,535);if(k===' ')shoot()});
      buttons([['◀',()=>ship=clamp(ship-24,25,535)],['✦',shoot],['▶',()=>ship=clamp(ship+24,25,535)]]);
      raf(()=>{if(ended)return;tick++;background(x,560,340);let offset=Math.sin(tick*.015)*Math.min(62,tick*.07),desc=Math.floor(tick/420)*16;
        shots.forEach(s=>s.y-=7);shots=shots.filter(s=>s.y>-10);for(const f of foes)if(f.alive){const fx=f.x+offset,fy=f.y+desc;rect(x,fx-12,fy-10,24,20,'#b78afb',6);dot(x,fx,fy,4,'#eaf4ff');for(const s of shots)if(Math.abs(s.x-fx)<17&&Math.abs(s.y-fy)<12){f.alive=false;s.y=-50;setScore(score+10);break}if(fy>=284){ended=true;line('Los invasores llegaron a tu base. ¡Inténtalo otra vez!')}}
        for(const s of shots)rect(x,s.x-2,s.y,4,14,'#5deed9',3);rect(x,ship-22,302,44,22,'#6bd4e6',9);rect(x,ship-5,291,10,15,'#e4fff7',4);
        if(foes.every(f=>!f.alive)){ended=true;win('¡GALAXIA SALVADA!')} });
    }
    function asteroids(){
      ui.instructions.textContent='Gira y acelera con las flechas/WASD. Pulsa ESPACIO para lanzar rayos a los meteoritos.';
      const [c,x]=canvas(560,340);let px=280,py=170,vx=0,vy=0,ang=-Math.PI/2,shots=[],rocks=Array.from({length:11},()=>({x:pick(560),y:pick(340),vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,r:16+pick(19)})),k=new Set(),t=0,done=false;
      keyboard(key=>{k.add(key.toLowerCase());if(key===' '){shots.push({x:px,y:py,vx:Math.cos(ang)*7,vy:Math.sin(ang)*7,t:90})}});
      buttons([['↶',()=>ang-=.25],['⇧',()=>{vx+=Math.cos(ang)*.35;vy+=Math.sin(ang)*.35}],['↷',()=>ang+=.25],['✦',()=>shots.push({x:px,y:py,vx:Math.cos(ang)*7,vy:Math.sin(ang)*7,t:90})]]);
      raf(()=>{if(done)return;t++;if(t%12===0){k.clear()}if(k.has('arrowleft')||k.has('a'))ang-=.06;if(k.has('arrowright')||k.has('d'))ang+=.06;if(k.has('arrowup')||k.has('w')){vx+=Math.cos(ang)*.14;vy+=Math.sin(ang)*.14}vx*=.995;vy*=.995;px=(px+vx+560)%560;py=(py+vy+340)%340;background(x,560,340);
        for(const r of rocks){r.x=(r.x+r.vx+560)%560;r.y=(r.y+r.vy+340)%340;x.strokeStyle='#c3badc';x.lineWidth=2;x.beginPath();x.arc(r.x,r.y,r.r,0,7);x.stroke();if(Math.hypot(r.x-px,r.y-py)<r.r+8){done=true;line('Tu nave chocó con un meteorito.')}}
        for(const s of shots){s.x=(s.x+s.vx+560)%560;s.y=(s.y+s.vy+340)%340;s.t--;dot(x,s.x,s.y,3,'#66ffcd');for(const r of rocks)if(Math.hypot(r.x-s.x,r.y-s.y)<r.r){r.x=700;s.t=0;setScore(score+20)}}rocks=rocks.filter(r=>r.x<=560);shots=shots.filter(s=>s.t>0);
        x.save();x.translate(px,py);x.rotate(ang+Math.PI/2);x.fillStyle='#60d9f2';x.beginPath();x.moveTo(0,-18);x.lineTo(-13,14);x.lineTo(13,14);x.closePath();x.fill();x.restore();if(!rocks.length){done=true;win('¡Has limpiado el cinturón de meteoritos!')}});
    }
    function blockdrop(){
      ui.instructions.textContent='Encaja las piezas. A/D o ←/→ mueve; ↑ gira y ↓ acelera. Botones táctiles disponibles.';
      const W=10,H=17,S=18;const [c,x]=canvas(W*S,H*S);const board=Array.from({length:H},()=>Array(W).fill(0)),shapes=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,0],[1,0],[1,1]],[[0,1],[0,1],[1,1]]];let piece,px,py,ended=false;
      const randomPiece=()=>shapes[pick(shapes.length)].map(r=>r.slice());
      function fit(test,nx,ny){return test.every((r,y)=>r.every((v,a)=>!v||((nx+a)>=0&&(nx+a)<W&&(ny+y)<H&&(ny+y<0||!board[ny+y][nx+a]))))}
      function spawn(){piece=randomPiece();px=3;py=0;if(!fit(piece,px,py)){ended=true;line('¡Partida terminada!')}}
      function rotate(){const rot=piece[0].map((_,i)=>piece.map(r=>r[i]).reverse());if(fit(rot,px,py))piece=rot}
      function move(n){if(fit(piece,px+n,py))px+=n}
      function step(){if(ended)return;if(fit(piece,px,py+1)){py++;return}piece.forEach((r,y)=>r.forEach((v,a)=>{if(v&&py+y>=0)board[py+y][px+a]=1}));let lines=0;for(let y=H-1;y>=0;y--)if(board[y].every(Boolean)){board.splice(y,1);board.unshift(Array(W).fill(0));lines++;y++}if(lines)setScore(score+lines*100);spawn()}
      keyboard(k=>{if(['ArrowLeft','a','A'].includes(k))move(-1);if(['ArrowRight','d','D'].includes(k))move(1);if(k==='ArrowUp')rotate();if(k==='ArrowDown')step()});buttons([['←',()=>move(-1)],['↻',rotate],['→',()=>move(1)],['↓',step]]);spawn();every(step,530);raf(()=>{background(x,W*S,H*S);board.forEach((r,y)=>r.forEach((v,a)=>{if(v)rect(x,a*S+1,y*S+1,S-2,S-2,'#8bc0ff',3)}));piece?.forEach((r,y)=>r.forEach((v,a)=>{if(v)rect(x,(px+a)*S+1,(py+y)*S+1,S-2,S-2,'#e2acff',3)}))});
    }
    function sudoku4(){
      ui.instructions.textContent='Sudoku 4×4: cada fila, columna y bloque 2×2 lleva 1, 2, 3 y 4. Completa las casillas vacías.';
      const layouts=[[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]],[[3,1,2,4],[2,4,3,1],[1,3,4,2],[4,2,1,3]]];const sol=layouts[pick(layouts.length)];const show=sol.map((r,y)=>r.map((v,i)=>(y+i*2)%3===0?0:v));let selected=1,errors=0,done=false;
      const grid=document.createElement('div');grid.className='game-board numbers-grid';grid.style.gridTemplateColumns='repeat(4,1fr)';grid.style.maxWidth='400px';stage.append(grid);
      function draw(){grid.replaceChildren();show.forEach((r,y)=>r.forEach((v,a)=>{const b=button(v||'·',()=>{if(done||sol[y][a]===v&&v!==0)return;if(selected===sol[y][a]){show[y][a]=selected;setScore(score+15);draw();if(show.every((rr,j)=>rr.every((val,i)=>val===sol[j][i]))){done=true;win('¡SUDOKU COMPLETADO!')}}else{errors++;line('❌ Prueba otra cifra. Error '+errors)}},grid,'tile');b.style.fontSize='23px';b.style.border=(y===1?'3px solid #59adc6':'1px solid #394260');}));}
      const row=buttons([['1',()=>selected=1],['2',()=>selected=2],['3',()=>selected=3],['4',()=>selected=4]]);draw();
    }
    function mines(){
      ui.instructions.textContent='Busca los tesoros. Hay 10 casillas peligrosas. Cambia a modo bandera antes de marcar las sospechosas.';
      const W=9,H=9,hidden=Array(W*H).fill(0),opened=new Set(),flagged=new Set();let flagMode=false,ended=false;
      for(let count=0;count<10;){const i=pick(W*H);if(hidden[i]!==-1){hidden[i]=-1;count++}}
      const neighbours=i=>{const x=i%W,y=Math.floor(i/W),n=[];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const xx=x+dx,yy=y+dy;if((dx||dy)&&xx>=0&&xx<W&&yy>=0&&yy<H)n.push(yy*W+xx)}return n};hidden.forEach((v,i)=>{if(v!==-1)hidden[i]=neighbours(i).filter(j=>hidden[j]===-1).length});
      const grid=document.createElement('div');grid.className='game-board';grid.style.gridTemplateColumns='repeat(9,1fr)';grid.style.maxWidth='390px';stage.append(grid);const hint=toast('Modo actual: DESCUBRIR');
      buttons([['🚩 Cambiar modo',()=>{flagMode=!flagMode;hint.textContent='Modo actual: '+(flagMode?'BANDERA':'DESCUBRIR')}]]);
      function uncover(i){if(opened.has(i)||flagged.has(i)||ended)return;opened.add(i);if(hidden[i]===-1){ended=true;line('Has encontrado un peligro. Intenta otra partida.');return}setScore(score+5);if(hidden[i]===0)for(const j of neighbours(i))uncover(j);if(opened.size===W*H-10){ended=true;line('🏆 ¡Tablero completado!')}}
      function draw(){grid.replaceChildren();hidden.forEach((v,i)=>{const bt=button(flagged.has(i)?'🚩':opened.has(i)?v===-1?'✕':v||' ': '▢',()=>{if(ended)return;if(flagMode){if(flagged.has(i))flagged.delete(i);else flagged.add(i)}else uncover(i);draw()},grid,'tile');bt.style.cssText='padding:0;min-height:34px;font-size:17px;background:'+(opened.has(i)?'#33486b':'#252c4f')})}draw();
    }
    function reversi(){
      ui.instructions.textContent='Reversi contra IA. Tú eres morado. Coloca fichas y rodea las blancas para darles la vuelta.';
      let b=Array(64).fill(0);b[27]=b[36]=1;b[28]=b[35]=2;let ended=false;const dirs=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],grid=document.createElement('div');grid.className='game-board';grid.style.cssText='grid-template-columns:repeat(8,1fr);max-width:400px';stage.append(grid);
      function flips(idx,col){if(b[idx])return [];const x=idx%8,y=Math.floor(idx/8),all=[];for(const [dx,dy] of dirs){let xx=x+dx,yy=y+dy,run=[];while(xx>=0&&xx<8&&yy>=0&&yy<8&&b[yy*8+xx]===3-col){run.push(yy*8+xx);xx+=dx;yy+=dy}if(xx>=0&&xx<8&&yy>=0&&yy<8&&b[yy*8+xx]===col)all.push(...run)}return all}
      function options(col){return Array.from({length:64},(_,i)=>i).filter(i=>flips(i,col).length)}
      function move(i,col){const f=flips(i,col);if(!f.length)return false;b[i]=col;f.forEach(j=>b[j]=col);return true}
      function end(){if(options(1).length||options(2).length)return false;ended=true;const a=b.filter(v=>v===1).length,c=b.filter(v=>v===2).length;setScore(a*10);line('Final: Tú '+a+' — IA '+c+(a>c?' 🏆 Ganaste':a===c?' Empate':' ¡Revancha!'));return true}
      function draw(){grid.replaceChildren();b.forEach((v,i)=>{const bt=button(v===1?'🟣':v===2?'⚪':options(1).includes(i)?'·':'',()=>{if(ended||!move(i,1))return;draw();if(end())return;after(()=>{const o=options(2);if(o.length){const sorted=o.sort((a,b)=>flips(b,2).length-flips(a,2).length);move(sorted[0],2)}draw();end();},350)},grid,'tile');bt.style.cssText='padding:0;min-height:38px;background:#1e5b5a;font-size:23px'})}draw();
    }
    function kart(){
      ui.instructions.textContent='Carrera de 60 segundos: cambia de carril con ←/→ o A/D y esquiva otros karts. Puntos por distancia.';
      const [c,x]=canvas(480,320),lanes=[135,240,345];let lane=1,cars=[],ticks=0,done=false,left=60;
      function steer(d){lane=clamp(lane+d,0,2)}keyboard(k=>{if(['ArrowLeft','a','A'].includes(k))steer(-1);if(['ArrowRight','d','D'].includes(k))steer(1)});buttons([['◀ Carril',()=>steer(-1)],['Carril ▶',()=>steer(1)]]);
      every(()=>{left--;if(left<=0&&!done){done=true;win('¡META! Has llegado con '+score+' puntos')}},1000);
      raf(()=>{if(done)return;ticks++;if(ticks%38===0)cars.push({lane:pick(3),y:-45});background(x,480,320);rect(x,80,0,320,320,'#27384b');for(const xx of [188,293])for(let y=(ticks*5)%44-44;y<320;y+=44)rect(x,xx,y,4,26,'#fff8da');
        cars.forEach(c=>{c.y+=3.8+ticks/500;rect(x,lanes[c.lane]-22,c.y,44,54,'#f38f9e',10);if(c.lane===lane&&c.y>239&&c.y<313){done=true;line('🚗 ¡Colisión! Vuelve a intentarlo.')}});cars=cars.filter(c=>c.y<340);rect(x,lanes[lane]-22,249,44,56,'#80e7ec',10);rect(x,lanes[lane]-15,256,30,17,'#203c68',5);if(ticks%8===0)setScore(score+1);x.fillStyle='white';x.font='bold 17px sans-serif';x.fillText('⏱ '+left+'s',10,26)});
    }
    function towers(){
      ui.instructions.textContent='Torres de Hanói: mueve todos los discos al poste derecho sin colocar uno grande sobre otro pequeño.';
      const stacks=[[4,3,2,1],[],[]];let from=null,moves=0;const grid=document.createElement('div');grid.className='game-board';grid.style.gridTemplateColumns='repeat(3,minmax(70px,1fr))';grid.style.maxWidth='550px';stage.append(grid);
      function draw(){grid.replaceChildren();stacks.forEach((s,i)=>{const bt=button('POSTE '+(i+1),()=>{if(from===null){if(s.length)from=i}else{if(from!==i&&stacks[from].length&&(!s.length||s.at(-1)>stacks[from].at(-1))){s.push(stacks[from].pop());moves++;setScore(score+5);if(stacks[2].length===4)win('¡Completado en '+moves+' movimientos!')}from=null}draw()},grid,'tile');bt.style.minHeight='220px';bt.style.display='flex';bt.style.flexDirection='column';bt.style.justifyContent='end';bt.style.gap='5px';bt.style.background=from===i?'#574c95':'#1e2e4b';for(const disk of s){const el=document.createElement('div');el.style.cssText=`background:#bca0ff;height:22px;border-radius:6px;width:${disk*18+15}px;max-width:100%;margin:0 auto`;bt.prepend(el)}})}draw();
    }
    function trivia(){
      ui.instructions.textContent='Concurso gamer: responde diez preguntas de videojuegos y suma puntos.';
      const items=[['¿Qué objeto te permite construir en Minecraft?',['Bloques','Páginas','Dados'],0],['¿Qué significa NPC?',['Personaje no jugador','Nuevo portal central','Nivel personal completo'],0],['¿Cuál de estos es un juego de puzles?',['Tetris','Fútbol','Carreras'],0],['¿Qué consola fabricó Nintendo?',['Switch','PlayStation','Xbox'],0],['¿Qué personaje suele salvar Hyrule?',['Link','Kirby','Sonic'],0],['¿Cómo se llaman los mundos que creas en Minecraft?',['Mundos','Circuitos','Rondas'],0],['¿Qué es un speedrun?',['Terminar rápido un juego','Tocar música','Crear un avatar'],0],['En un juego cooperativo, ¿qué haces?',['Colaborar','Jugar solo','Pausar siempre'],0],['¿Qué significa FPS en rendimiento?',['Fotogramas por segundo','Fichas para saltar','Fuerza por salto'],0],['¿Qué sirve para guardar una partida?',['Sistema de guardado','Filtro de color','Subtítulos'],0]];let n=0;const question=document.createElement('h2');stage.append(question);const opts=document.createElement('div');opts.className='game-board';opts.style.maxWidth='520px';stage.append(opts);
      function next(){if(n>=items.length){win('¡Concurso terminado! Total: '+score+' puntos');return}const [q,answers,correct]=items[n];question.textContent=`${n+1}/10 · ${q}`;const shuffled=answers.map((v,i)=>({v,i})).sort(()=>Math.random()-.5);opts.replaceChildren();shuffled.forEach(a=>button(a.v,()=>{if(a.i===correct)setScore(score+10);n++;next()},opts,'tile'))}next();
    }
    function treasure(){
      ui.instructions.textContent='Laberinto de tesoros. Usa flechas/WASD para recoger las 5 gemas y llegar a la salida.';
      const level=['############','#P..#..T...#','#.#.#.####.#','#.#.#...T#.#','#...###.#..#','###...#.#.##','#T..#...#..#','#.##.###.#.#','#....T...#E#','#.#.####.#.#','#T.........#','############'];let map=level.map(r=>r.split('')),px=1,py=1,got=0;
      const grid=document.createElement('div');grid.className='game-board';grid.style.gridTemplateColumns='repeat(12,1fr)';grid.style.maxWidth='540px';stage.append(grid);
      function move(dx,dy){const nx=px+dx,ny=py+dy;if(!map[ny]||map[ny][nx]==='#')return;px=nx;py=ny;if(map[py][px]==='T'){got++;setScore(score+20);map[py][px]='.'}if(map[py][px]==='E'&&got>=5){win('¡Has encontrado todos los tesoros!')}draw()}
      keyboard(k=>{if(['ArrowUp','w','W'].includes(k))move(0,-1);if(['ArrowDown','s','S'].includes(k))move(0,1);if(['ArrowLeft','a','A'].includes(k))move(-1,0);if(['ArrowRight','d','D'].includes(k))move(1,0)});buttons([['↑',()=>move(0,-1)],['←',()=>move(-1,0)],['↓',()=>move(0,1)],['→',()=>move(1,0)]]);
      function draw(){grid.replaceChildren();map.forEach((row,y)=>row.forEach((v,x)=>{const d=document.createElement('div');d.textContent=px===x&&py===y?'🧑‍🚀':v==='T'?'💎':v==='E'?'🚪':'';d.style.cssText='aspect-ratio:1;display:grid;place-items:center;background:'+(v==='#'?'#524578':v==='E'?'#377e66':'#182843')+';border-radius:2px;font-size:15px';grid.append(d)}))}draw();
    }

    const implementations={invaders,asteroids,blockdrop,sudoku4,mines,reversi,kart,towers,trivia,treasure,snake,pong,breakout,fly,'2048':fusion,memory,ttt,mole,reaction,clicker,maze,simon,penalty,connect4,lights,wordrush,stardodge,jumpsprint,mathflash,taporbit};
    return {start,destroy};
  }
  window.IvanguysGames={create};
})();
