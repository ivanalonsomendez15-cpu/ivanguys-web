import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Aprende a programar con los elfos de Pap\xE1 Noel",
    body: "Los elfos est\xE1n constantemente desarrollando sus habilidades de programaci\xF3n. Con nuestros juegos, podr\xE1s aprender los conceptos b\xE1sicos de este \xE1mbito. \xA1La programaci\xF3n est\xE1 al alcance de todos!"
  },
  cards: [{
    id: 'codelab',
    title: "Laboratorio de programaci\xF3n",
    body: "Aplica conocimientos b\xE1sicos de programaci\xF3n y ayuda al elfo a recoger los regalos que se encuentran repartidos por el bosque."
  }, {
    id: 'codeboogie',
    title: "Baile de c\xF3digo",
    body: "Los elfos han vuelto a las clases de programaci\xF3n, pero sin dejar de lado sus dotes para bailar. Utiliza el c\xF3digo para coreografiar sus movimientos. \xA1Cuanto mejor lo hagas, m\xE1s complejos ser\xE1n los bailes!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Descubre c\xF3mo se viven estas fiestas en todo el mundo",
    body: "Estas fiestas se celebran de formas distintas en todo el mundo. Descubre c\xF3mo se viven en otros pa\xEDses mediante montones de juegos y cuestionarios."
  },
  cards: [{
    id: 'traditions',
    title: "Tradiciones festivas",
    body: "Los canadienses llevan gorros de lana mientras que los australianos lucen sus ba\xF1adores. Haz clic en los marcadores del mapa para descubrir c\xF3mo se celebran estas fiestas en otras partes del mundo."
  }, {
    id: 'translations',
    title: "Traducciones",
    body: "Te ense\xF1amos expresiones t\xEDpicas de estas fiestas de todo el mundo: desde el significado de \"\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\" hasta c\xF3mo decir \"\xA1Feliz A\xF1o Nuevo!\" en el idioma de los elfos."
  }, {
    id: 'mercator',
    title: "Test de Geograf\xEDa",
    body: "La lista de pa\xEDses que visitar\xE1 Pap\xE1 Noel es muy larga. En este juego de geograf\xEDa, tendr\xE1s que descubrir d\xF3nde encajan las siluetas de cada pa\xEDs dentro del mapa."
  }, {
    id: 'traditionsquiz',
    title: "Cuestionario sobre tradiciones festivas",
    body: "\xBFCu\xE1nto sabes de la historia de estas fiestas? Pon a prueba tus conocimientos con un cuestionario de nueve preguntas.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Insp\xEDrate y empieza a crear",
    body: "La creatividad es el combustible que mueve la aldea de Pap\xE1 Noel. Descubre juegos en los que puedes dibujar, pintar y crear con todos tus personajes favoritos."
  },
  cards: [{
    id: 'santascanvas',
    title: "Pintura navide\xF1a",
    body: "Te traemos la suite de creatividad del mism\xEDsimo Pap\xE1 Noel. Se trata de una experiencia tanto visual como auditiva, ya que cada herramienta, pincel y pegatina tiene un sonido personalizado."
  }, {
    id: 'snowbox',
    title: "Zona de pruebas nevada",
    body: "Experimenta y juega en tu propia zona nevada de pruebas. Utiliza materiales en 3D para crear casas, juguetes, mu\xF1ecos de nieve, bosques y cualquier cosa que puedas imaginar."
  }, {
    id: 'elfmaker',
    title: "Crea un elfo",
    body: "Crea tu propio elfo de pies a cabeza y d\xE9jalo hecho un pincel para las veladas navide\xF1as que se celebran en el Polo Norte."
  }, {
    id: 'santaselfie',
    title: "El selfie de Pap\xE1 Noel",
    body: "Pap\xE1 Noel ha ido a la barber\xEDa y est\xE1 listo para un cambio de look radical, pero necesita tu ayuda. Puedes secarle el pelo, te\xF1irle la barba de colores, decor\xE1rsela o incluso afeit\xE1rsela entera con las tijeras."
  }]
}, {
  id: 'family',
  heading: {
    title: "Disfruta del tiempo en familia",
    body: "Pon las palomitas en el microondas y acurr\xFAcate con tu manta m\xE1s calentita. \xBFTe gustar\xEDa celebrar estas fiestas bajo el mar con Oli el Narval? En la aldea, podr\xE1s seguir las aventuras de toda la tropa en el cine o leer un cuento interactivo."
  },
  cards: [{
    id: 'storybook',
    title: "Oli bajo el mar",
    body: "Nuestros amigos de la aldea se unen a Oli el Narval para pasar el d\xEDa bajo el mar y montar la primera fiesta anual de alumbrado festivo con algas."
  }, {
    id: 'museum',
    title: "Un d\xEDa en el museo",
    body: "Visita el Museo del Jolgorio Festivo en compa\xF1\xEDa de los elfos, los renos, Pap\xE1 Noel y Mam\xE1 Noel."
  }, {
    id: 'carpool',
    title: "Coche de los elfos",
    body: "Hay muchos elfos, renos y hombrecitos naranjas pululando por el Polo Norte. Observa c\xF3mo se mueven de un lado a otro."
  }, {
    id: 'liftoff',
    title: "El despegue de Pap\xE1 Noel",
    body: "Pap\xE1 Noel y los renos ya tienen todo a punto para salir. Sin embargo, antes de despegar, necesitan que los elfos de la programaci\xF3n les echen una mano."
  }]
}];
const cta = "Aprender";
const ageLabel = "Todas las edades";
class Accordion {
  constructor(el) {
    this.el = el;
    this.dom();
    this.appendCards();
  }
  dom() {
    this.cards_container = this.el.querySelector('.accordion__content');
  }
  _renderItem(item) {
    const rawHref = item.href || `${item.id}.html` || '#';
    const safeHref = href(rawHref);
    const imageBase = "/ivanguys-web/nochepolar/st/v2026/img/scenes/" + item.id;
    return `
<div class="accordion__card">
  <a href="${safeHref}" ${item.href ? `target="_blank"` : ''}>
    <div class="card__upper">
      <img src="${imageBase}_2x.png" srcset="${imageBase}_2x.png 2x, ${imageBase}_1x.png 1x" loading="lazy" />
    </div>
    <div class="card__text">
      <h5 class="card__title">${item.title}</h5>
      <div class="card__age">${ageLabel}</div>
      <div class="card__desc">${item.body}</div>
      <div class="card__cta">${cta}</div>
    </div>
  </a>
</div>
`;
  }
  appendCards() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < models.length; i++) {
      const group = document.createElement('div');
      group.className = 'accordion__content-block';
      if (models[i].id) {
        group.id = models[i].id;
      }
      group.innerHTML = `
<div class="accordion__info">
  <h5 class="accordion__info-title">${models[i].heading.title}</h5>
  <p class="accordion__info-body">${models[i].heading.body}</p>
</div>
<div class="accordion__cards">
${models[i].cards.map(item => this._renderItem(item)).join('')}
</div>
      `;
      fragment.appendChild(group);
    }
    this.cards_container.appendChild(fragment);
  }
}
rectify(document.body);
new Accordion(document.querySelector('[data-familyguide-accordion]'));
sceneApi.ready(async () => {});