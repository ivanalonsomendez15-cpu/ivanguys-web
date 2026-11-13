/* NOCHEPOLAR: two original, fully playable Christmas games within the
   Santa Tracker village. No new website or replacement landing page. */
(() => {
  'use strict';

  const node=(tag,txt='',cls='')=>{
    const x=document.createElement(tag);x.textContent=txt;if(cls)x.className=cls;return x;
  };
  const button=(txt,click,cls='npg-button')=>{
    const x=node('button',txt,cls);x.type='button';x.addEventListener('click',click);return x;
  };
  const progressKey='nochepolar:arcade:v2:';
  const saveBest=(name,num)=>{
    const key=progressKey+name;
    try{const previous=Number(localStorage.getItem(key)||0);if(num>previous)localStorage.setItem(key,String(num));}catch(e){}
  };
  const format=(n)=>String(Math.max(0,Math.floor(n)));

  function reindeerExpress(host,onExit){
    host.replaceChildren();
    let running=true,raf=0,last=0,elapsed=0,spawnTimer=0,level=1,gifts=0,score=0,hearts=4;
    let obstacles=[],stars=[],lane=1,flash=0,boost=0;
    const required=9;
    const root=node('div','','npg-game');
    root.append(node('h2','🦌 Reno Express: Operación Reparto'));
    root.append(node('p','Pilota el trineo por tres carriles. Recoge regalos 🎁, evita tormentas 🌩️ y consigue 9 entregas en cada una de las 3 etapas.','npg-caption'));
    const stats=node('div','','npg-stats');
    const canvas=document.createElement('canvas');
    canvas.width=900;canvas.height=460;canvas.className='npg-flight-canvas';
    canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Juego de trineo con tres carriles');
    const ctx=canvas.getContext('2d');
    const buttons=node('div','','npg-controls');
    const instructions=node('p','Sube y baja de carril usando ↑ y ↓ del teclado o estos botones.','npg-hint');
    const left=button('⬆️ SUBIR',()=>change(-1));
    const right=button('⬇️ BAJAR',()=>change(1));
    buttons.append(left,right);
    const banner=node('div','','npg-banner');
    const footer=node('div','','npg-actions');
    const restart=button('↻ Reiniciar partida',()=>reset());
    const leave=button('← Salir al Arcade',()=>{dispose();onExit();});
    footer.append(restart,leave);
    root.append(stats,canvas,buttons,instructions,banner,footer);
    host.append(root);
    let loopValid=true;
    function reset(){level=1;gifts=0;score=0;hearts=4;elapsed=0;spawnTimer=0;lane=1;obstacles=[];banner.replaceChildren();running=true;last=0;boost=0;updateStats();cancelAnimationFrame(raf);raf=requestAnimationFrame(frame);}
    function updateStats(){
      stats.textContent='ETAPA '+level+'/3   ·   🎁 '+gifts+'/'+required+'   ·   💗 '+hearts+'   ·   ⭐ '+score+
        '   ·   Récord '+(localStorage.getItem(progressKey+'reno')||'0');
    }
    function change(delta){lane=Math.max(0,Math.min(2,lane+delta));}
    function key(ev){if(ev.key==='ArrowUp'||ev.key==='ArrowDown'){
      if(!host.isConnected)return;ev.preventDefault();change(ev.key==='ArrowUp'?-1:1);
    }}
    document.addEventListener('keydown',key);
    canvas.addEventListener('pointerdown',ev=>{
      const box=canvas.getBoundingClientRect();
      change(((ev.clientY-box.top)/(box.height||1)>0.5)?1:-1);
    });
    function storm(){return {type:'storm',lane:Math.floor(Math.random()*3),x:960,size:50};}
    function gift(){return {type:'gift',lane:Math.floor(Math.random()*3),x:960,size:44};}
    function star(){return {type:'star',lane:Math.floor(Math.random()*3),x:960,size:42};}
    function spawn(){const r=Math.random();obstacles.push(r<.21?storm():r>.92?star():gift());}
    function draw(t){
      const w=canvas.width,h=canvas.height;
      ctx.clearRect(0,0,w,h);
      const bg=ctx.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#02a9e6');bg.addColorStop(.67,'#81d9ee');bg.addColorStop(1,'#dff7f5');
      ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      // Stars and distant light trails move even when there are no obstacles.
      for(let i=0;i<40;i++){
        const x=((i*137+ w-(t*.025*(1+i%3)))%w+w)%w,y=((i*67+11)%160);
        ctx.fillStyle='rgba(255,255,255,'+(.55+(i%3)*.15)+')';
        ctx.beginPath();ctx.arc(x,y,1+(i%3),0,Math.PI*2);ctx.fill();
      }
      ctx.fillStyle='#ffffffaa';for(let i=0;i<3;i++){
        const y=208+i*86;ctx.fillRect(0,y+64,w,3);
      }
      // Alpine hills.
      const shift=(t*.04)%240;
      for(let i=-2;i<7;i++){
        let x=i*220-shift;
        ctx.fillStyle=i%2?'#93d5d7':'#b4e6de';
        ctx.beginPath();ctx.moveTo(x-120,h);ctx.lineTo(x+60,280);ctx.lineTo(x+230,h);ctx.fill();
        ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(x+14,333);ctx.lineTo(x+60,280);ctx.lineTo(x+102,333);ctx.fill();
      }
      // The player has a visible silhouette and two following reindeer.
      const sy=192+lane*86;
      ctx.font='54px "Segoe UI Emoji",sans-serif';ctx.textAlign='center';
      ctx.fillText('🦌',86,sy);ctx.fillText('🦌',141,sy);
      ctx.strokeStyle='#854520';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(166,sy-21);ctx.lineTo(211,sy-9);ctx.stroke();
      ctx.fillText('🛷',205,sy+6);
      if(boost>0){ctx.font='25px sans-serif';ctx.fillText('✨',251,sy-13);}
      for(const item of obstacles){
        const iy=192+item.lane*86;
        ctx.font=item.type==='storm'?'62px sans-serif':'52px sans-serif';
        ctx.fillText(item.type==='storm'?'🌩️':item.type==='star'?'💖':'🎁',item.x,iy);
      }
      if(flash>0){
        ctx.fillStyle='rgba(255,247,148,'+Math.min(.4,flash)+')';ctx.fillRect(0,0,w,h);
      }
      ctx.font='bold 17px sans-serif';ctx.textAlign='left';ctx.fillStyle='#155472';
      ctx.fillText('TRINEO EXPRESS • 3 ETAPAS',25,36);
    }
    function win(){
      running=false;cancelAnimationFrame(raf);saveBest('reno',score);updateStats();
      banner.replaceChildren(node('div','🏆 ¡ENTREGAS COMPLETADAS!','npg-celebrate'),
        node('p','Has recorrido las tres regiones y entregado 27 regalos. Puntos: '+score+'.'));
      banner.append(button('Jugar otra vez',reset,'npg-button-big'));
    }
    function lose(){
      running=false;cancelAnimationFrame(raf);saveBest('reno',score);updateStats();
      banner.replaceChildren(node('h3','🌨️ El trineo necesita reparaciones'),
        node('p','La tormenta ha detenido el viaje. Conservas '+score+' puntos.'));
      banner.append(button('Reintentar la aventura',reset,'npg-button-big'));
    }
    function frame(timestamp){
      if(!loopValid||!running||!ctx)return;
      const dt=last?Math.min(.055,(timestamp-last)/1000):.016;
      last=timestamp;elapsed+=dt;
      if(document.hidden){raf=requestAnimationFrame(frame);return;}
      spawnTimer+=dt;
      const interval=Math.max(.56,1.12-level*.12);
      if(spawnTimer>interval){spawnTimer=0;spawn();}
      const speed=220+level*54;
      for(const item of obstacles){item.x-=speed*dt;}
      const kept=[];
      for(const item of obstacles){
        if(item.x<265&&item.x>160&&item.lane===lane&&!item.touched){
          item.touched=true;
          if(item.type==='gift'){
            gifts++;score+=100;flash=.23;
            if(gifts>=required){
              if(level>=3){win();draw(timestamp);return;}
              level++;gifts=0;hearts=Math.min(4,hearts+1);boost=1.2;
              banner.textContent='✨ ¡ETAPA '+level+' DESBLOQUEADA! Más velocidad y regalos.';
            }
          }else if(item.type==='star'){hearts=Math.min(4,hearts+1);score+=30;flash=.2;}
          else{hearts--;flash=.36;if(hearts<=0){lose();draw(timestamp);return;}}
          updateStats();
        }else if(item.x>20&&!item.touched)kept.push(item);
      }
      obstacles=kept;
      flash=Math.max(0,flash-dt);boost=Math.max(0,boost-dt);
      draw(timestamp);raf=requestAnimationFrame(frame);
    }
    updateStats();raf=requestAnimationFrame(frame);
    function dispose(){loopValid=false;running=false;cancelAnimationFrame(raf);document.removeEventListener('keydown',key);}
    return {dispose};
  }

  // Rotation game: directions 0=N, 1=E, 2=S, 3=W.
  const opposite=d=>(d+2)%4;
  const turn=(dirs,angle)=>dirs.map(d=>(d+angle)%4);
  const glyph=(dirs)=>{
    const mask=dirs.reduce((m,n)=>m|(1<<n),0);
    const signs={0:'·',1:'╵',2:'╶',3:'└',4:'╷',5:'│',6:'┌',7:'├',
      8:'╴',9:'┘',10:'─',11:'┴',12:'┐',13:'┤',14:'┬',15:'┼'};
    return signs[mask]||'·';
  };
  function factoryCircuit(host,onExit){
    host.replaceChildren();
    let level=0,moves=0,grid=[],path=[],width=7,height=5,finished=false,disposed=false;
    let nextButton=null, repeatButton=null;
    const board=node('div','','npg-circuit');
    const status=node('div','','npg-stats');
    const tip=node('p','Gira las piezas tocándolas. Cuando una tubería lleva energía azul desde el generador hasta el regalo, se enciende.','npg-caption');
    const message=node('p','','npg-hint');
    const header=node('div','','npg-game');
    header.append(node('h2','💡 Circuitos del Polo: fábrica de luces'),
      node('p','Ocho niveles. Conecta el generador ⚡ con el gran regalo 🎁 sin dejar huecos. Gira las piezas del circuito y descubre la ruta correcta.','npg-caption'),status,board,tip,message);
    const controls=node('div','','npg-actions');
    controls.append(button('💡 Pista',giveHint),button('↻ Reiniciar nivel',build),
      button('← Salir al Arcade',()=>{dispose();onExit()}));
    header.append(controls);host.append(header);
    function build(){
      if(disposed)return;
      if(nextButton){nextButton.remove();nextButton=null;}
      if(repeatButton){repeatButton.remove();repeatButton=null;}
      message.textContent='';
      finished=false;moves=0;
      const offset=(level%2)?1:-1;
      const bendLeft=2+(level%2),bendRight=4+(level%2);
      const mid=2,next=mid+offset;
      const points=[];
      for(let x=0;x<=bendLeft;x++)points.push([x,mid]);
      points.push([bendLeft,next]);
      for(let x=bendLeft+1;x<=bendRight;x++)points.push([x,next]);
      points.push([bendRight,mid]);
      for(let x=bendRight+1;x<width;x++)points.push([x,mid]);
      // Remove duplicates while preserving the route.
      path=[];const seen=new Set();
      points.forEach(([x,y])=>{const k=x+','+y;if(!seen.has(k)){seen.add(k);path.push([x,y]);}});
      grid=Array.from({length:height},(_,y)=>Array.from({length:width},(_,x)=>{
        const p=path.findIndex(z=>z[0]===x&&z[1]===y);
        const connector=[];
        if(p>=0){
          const before=path[p-1],after=path[p+1];
          for(const pt of [before,after]){
            if(!pt)continue;
            if(pt[0]>x)connector.push(1);
            else if(pt[0]<x)connector.push(3);
            else if(pt[1]>y)connector.push(2);
            else if(pt[1]<y)connector.push(0);
          }
        }else{
          const fakeTypes=[[0,2],[1,3],[0,1],[1,2],[2,3],[3,0]];
          connector.push(...fakeTypes[(x*5+y*3+level)%fakeTypes.length]);
        }
        let angle=(x*11+y*7+level*3)%4;
        if(p===0||p===path.length-1)angle=0;
        return {x,y,dirs:connector,angle,endpoint:p===0?'⚡':p===path.length-1?'🎁':'',path:p>=0};
      }));
      drawBoard();
    }
    function actual(tile){return turn(tile.dirs,tile.angle);}
    function connected(){
      const queue=[[0,2]],seen=new Set(['0,2']);
      while(queue.length){
        const [x,y]=queue.shift(),tile=grid[y][x];
        const dirs=actual(tile);
        for(const d of dirs){
          const dx=[0,1,0,-1][d],dy=[-1,0,1,0][d],nx=x+dx,ny=y+dy;
          if(nx<0||ny<0||nx>=width||ny>=height)continue;
          const other=grid[ny][nx];
          if(!actual(other).includes(opposite(d)))continue;
          const key=nx+','+ny;
          if(!seen.has(key)){seen.add(key);queue.push([nx,ny]);}
        }
      }
      return seen;
    }
    function solved(){
      return path.every(([x,y])=>{
        const tile=grid[y][x], rotated=actual(tile);
        return rotated.length===tile.dirs.length &&
          tile.dirs.every(direction=>rotated.includes(direction));
      });
    }
    function done(){
      if(finished)return;
      finished=true;saveBest('circuit',level+1);
      if(level===7){
        status.textContent='🏆 LOS OCHO CIRCUITOS ESTÁN ENCENDIDOS';
        message.textContent='¡Toda la aldea tiene luz! Has resuelto los 8 niveles.';
        repeatButton=button('🎄 ¡Repetir los ocho niveles!',()=>{level=0;build()},'npg-button-big');
        header.append(repeatButton);
      }else{
        message.textContent='🌟 ¡Circuito completo! Has reparado la instalación.';
        nextButton=button('⚡ SIGUIENTE NIVEL →',()=>{level++;build()},'npg-button-big');
        controls.prepend(nextButton);
      }
    }
    function pieceSVG(directions,isLit){
      const ns='http://www.w3.org/2000/svg';
      const svg=document.createElementNS(ns,'svg');
      svg.setAttribute('viewBox','0 0 100 100');
      svg.setAttribute('aria-hidden','true');
      const el=(tag,attrs)=>{
        const n=document.createElementNS(ns,tag);
        Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,String(v)));
        return n;
      };
      // Each pipe is an actual illustrated tube rather than a line-font symbol.
      const points=[[50,0],[100,50],[50,100],[0,50]];
      const tone=isLit?'#5ad6b1':'#277fab';
      for(const direction of directions){
        const [x,y]=points[direction];
        svg.append(el('line',{x1:50,y1:50,x2:x,y2:y,stroke:'#165f83',
          'stroke-width':34,'stroke-linecap':'butt'}));
        svg.append(el('line',{x1:50,y1:50,x2:x,y2:y,stroke:tone,
          'stroke-width':25,'stroke-linecap':'butt'}));
        svg.append(el('line',{x1:50,y1:50,x2:x,y2:y,stroke:'#ddffff',
          'stroke-width':7,'stroke-linecap':'butt',opacity:'.78'}));
      }
      svg.append(el('circle',{cx:50,cy:50,r:18,fill:'#155e80'}));
      svg.append(el('circle',{cx:50,cy:50,r:13,fill:isLit?'#86ffd8':'#77cce7'}));
      svg.append(el('circle',{cx:45,cy:45,r:4,fill:'#fff',opacity:'.75'}));
      if(isLit){
        svg.append(el('circle',{cx:50,cy:50,r:4,fill:'#fffacd'}));
      }
      return svg;
    }
    function drawBoard(){
      board.replaceChildren();
      status.textContent='CIRCUITO '+(level+1)+'/8 · Giros '+moves+
        ' · Mejor etapa '+(localStorage.getItem(progressKey+'circuit')||'0')+'/8';
      const lit=connected();
      for(const row of grid){
        for(const tile of row){
          const b=button('',()=>{
            if(finished||tile.endpoint)return;
            tile.angle=(tile.angle+1)%4;moves++;drawBoard();
            if(solved())done();
          },'npg-pipe');
          const active=lit.has(tile.x+','+tile.y);
          if(tile.endpoint){
            b.classList.add('npg-source');
            b.textContent=tile.endpoint;
          } else {
            b.append(pieceSVG(actual(tile),active));
          }
          if(active)b.classList.add('npg-lit');
          b.title='Girar pieza de tubería '+(tile.x+1)+','+(tile.y+1);
          board.append(b);
        }
      }
    }
    function giveHint(){
      if(finished)return;
      const incorrect=path.find(([x,y],i)=>{
        if(i===0||i===path.length-1)return false;
        const tile=grid[y][x],actualDirs=actual(tile);
        return !tile.dirs.every(d=>actualDirs.includes(d));
      });
      if(!incorrect){message.textContent='⚡ Las piezas del camino ya miran en la dirección adecuada. Revisa la conexión final.';return;}
      const [x,y]=incorrect,cell=grid[y][x];
      message.textContent='💡 Pista: revisa la casilla de la columna '+(x+1)+
        ' y fila '+(y+1)+'. Gírala hasta que conecte con sus vecinas.';
      [...board.children].forEach((t,i)=>t.classList.toggle('npg-hinted',i===y*width+x));
    }
    build();
    function dispose(){disposed=true;}
    return {dispose};
  }

  window.NochepolarArcade = {reno:reindeerExpress,circuito:factoryCircuit};
})();