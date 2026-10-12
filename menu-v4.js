/* Non-destructive navigation addon. Works with existing index.html. */
(()=>{'use strict';
function mount(){
 const nav=document.querySelector('.nav-links');
 if(nav&&!document.getElementById('nexusNav')){
   const paths=[['nexus.html','✦','NEXUS · Misiones','nexusNav'],['arena.html','⚡','ARENA NOVA 3D','arenaNav'],['creator.html','⌘','CREATOR LAB','creatorNav']];
   let after=nav.querySelector('a[href="social.html"]')||nav.lastElementChild;
   for(const [path,icon,text,id] of paths){const a=document.createElement('a');a.href=path;a.id=id;a.className='nav-link';a.innerHTML=`<span class="nav-icon">${icon}</span> ${text} <span class="tiny-count">V4</span>`;after.insertAdjacentElement('afterend',a);after=a;}
 }
 const promos=document.querySelector('.v2-promo-grid');if(promos&&!document.getElementById('v4FeatureNexus')){
  for(const [id,url,icon,label,title,desc] of [
   ['v4FeatureNexus','nexus.html','🎯','IV-PUNTOS','IVANGUYS NEXUS','Misiones, puntos, objetos y cápsulas de recompensa con elección.'],
   ['v4FeatureArena','arena.html','⚡','ARENA 3D','ARENA NOVA','Juega en primera persona contra drones de etiquetas de energía.'],
   ['v4FeatureCreator','creator.html','⌘','JUEGOS HTML','CREATOR LAB','Importa, crea y prueba minijuegos HTML de forma aislada.']]){
   const a=document.createElement('a');a.id=id;a.href=url;a.className='v2-promo hub-v2';a.innerHTML=`<span class="v2-icon">${icon}</span><span class="v2-label">NOVEDAD · ${label}</span><h3>${title}</h3><p>${desc}</p><strong>ENTRAR →</strong>`;promos.append(a);
  }
 }
 const actions=document.querySelector('.hero-actions');if(actions&&!document.getElementById('v4HeroNexus')){const a=document.createElement('a');a.className='btn ghost';a.href='nexus.html';a.id='v4HeroNexus';a.textContent='✦ NEXUS 4.0';actions.append(a);}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
