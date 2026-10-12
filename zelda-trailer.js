(() => {
  const play = document.getElementById('playZeldaTrailer');
  play?.addEventListener('click', () => {
    const host=document.getElementById('zeldaTrailer');
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube-nocookie.com/embed/4xtmm2H0W_0?autoplay=1';
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy='strict-origin-when-cross-origin';
    frame.allowFullscreen=true;frame.title='Tráiler del remake de Zelda: Ocarina of Time';
    host.replaceChildren(frame);
  });
  const panel=document.getElementById('directStatusPanel');
  if (!panel) return;
  const start=Date.parse('2026-11-04T22:50:00+01:00');
  const end=Date.parse('2026-11-05T01:15:00+01:00');
  function update(){const t=Date.now();panel.textContent=t<start?'🔴 Directo especial IVANGUYS: 4 nov 22:50 — 5 nov 01:15 (Madrid).':t<end?'🔴 Estamos en el horario previsto del directo de IVANGUYS (hasta las 01:15). Consulta su canal para comprobar la emisión.':'✅ Ha terminado el horario programado del directo especial de IVANGUYS.';}
  update();setInterval(update,1000);
})();
