/* IVANGUYS V3 + acceso aditivo al universo V4. Conserva config.js. */
(() => {
  const cfg=window.IVANGUYS_CONFIG;
  if(cfg){
    cfg.directDate='2026-11-04T22:50:00+01:00';
    cfg.directEndDate='2026-11-05T01:15:00+01:00';
    cfg.zeldaTrailerUrl='https://www.youtube.com/watch?v=4xtmm2H0W_0';
  }
  const s=document.createElement('script');s.defer=true;s.src='menu-v4.js';document.head.append(s);
})();
