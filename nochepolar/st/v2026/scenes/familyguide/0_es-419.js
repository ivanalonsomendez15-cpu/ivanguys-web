import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Aprende a codificar con los duendes de Santa",
    body: "Los duendes siempre est\xE1n trabajando para mejorar sus habilidades de codificaci\xF3n. Explora juegos y descubre los conceptos b\xE1sicos. \xA1Todos podemos aprender a programar!"
  },
  cards: [{
    id: 'codelab',
    title: "Experimento de c\xF3digos",
    body: "Usa los conceptos b\xE1sicos sobre codificaci\xF3n para guiar al duende por el bosque y encontrar los regalos perdidos."
  }, {
    id: 'codeboogie',
    title: "Baile del c\xF3digo",
    body: "Los duendes est\xE1n de vuelta para seguir codificando y, al mismo tiempo, mejorar sus t\xE9cnicas de baile. Usa c\xF3digo para crear la coreograf\xEDa de los duendes, pero ten cuidado: a medida que mejoras, los bailes ser\xE1n m\xE1s complejos."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Descubre c\xF3mo son las fiestas navide\xF1as en todo el mundo",
    body: "Las fiestas de fin de a\xF1o pueden variar mucho de un lugar a otro. Descubre c\xF3mo se celebra la temporada navide\xF1a en el mundo con muchos juegos y cuestionarios."
  },
  cards: [{
    id: 'traditions',
    title: "Tradiciones navide\xF1as",
    body: "Haz clic en los pines del mapa para conocer las tradiciones navide\xF1as de todo el mundo, como usar gorros de lana en Canad\xE1 o trajes de ba\xF1o en Australia."
  }, {
    id: 'translations',
    title: "Traducciones",
    body: "Aprende t\xE9rminos festivos de todo el mundo, como \u201CFeliz A\xF1o Nuevo\u201D en el idioma de los duendes y \u201C\u0414\u0435\u0434\xA0\u041C\u043E\u0440\u043E\u0437\u201D (Ded\xA0Moroz)."
  }, {
    id: 'mercator',
    title: "Prueba de geograf\xEDa",
    body: "Santa tiene que ir a muchos lugares. En este juego de geograf\xEDa, debes unir la silueta de cada pa\xEDs con su ubicaci\xF3n en el mapa."
  }, {
    id: 'traditionsquiz',
    title: "Cuestionario sobre tradiciones navide\xF1as",
    body: "\xBFConoces la historia de las fiestas de fin de a\xF1o? Demu\xE9stralo con un cuestionario de nueve preguntas que pondr\xE1 a prueba tus habilidades.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Insp\xEDrate y crea algo nuevo",
    body: "La aldea de Santa florece con la magia de las creaciones. Descubre juegos para dibujar, colorear, construir y crear junto con todos tus personajes favoritos."
  },
  cards: [{
    id: 'santascanvas',
    title: "Cuadros de Santa",
    body: "Usa el kit creativo de Santa. Cada herramienta, pincel y calcoman\xEDa tiene un sonido personalizado, lo que hace que esta sea una experiencia audiovisual."
  }, {
    id: 'snowbox',
    title: "Juego libre en la nieve",
    body: "Experimenta y juega en tu propia zona de pruebas invernal. Usa materiales en\xA03D para crear lo que quieras: casas, juguetes, mu\xF1ecos de nieve, bosques o lo que se te ocurra."
  }, {
    id: 'elfmaker',
    title: "Crea tu duende",
    body: "Crea tu propio duende, de pies a cabeza, y aseg\xFArate de que se vea fant\xE1stico para que asista a las veladas navide\xF1as en el Polo\xA0Norte."
  }, {
    id: 'santaselfie',
    title: "Selfie con Santa",
    body: "Santa se encuentra en una barber\xEDa y necesita ayuda para cambiar de estilo. Colorea su barba, s\xE9cale el cabello, agrega detalles decorativos o af\xE9italo con la m\xE1quina."
  }]
}, {
  id: 'family',
  heading: {
    title: "Juntos en familia",
    body: "Prepara unas palomitas y acurr\xFAcate bajo tu manta favorita. Mira a todo el equipo en la pantalla del cine de la aldea o lee un libro de cuentos interactivo mientras Oli, el narval, celebra la temporada navide\xF1a bajo el mar."
  },
  cards: [{
    id: 'storybook',
    title: "Oli bajo el mar",
    body: "Nuestros amigos de la aldea se unen a Oli, el narval, para pasar un d\xEDa bajo el agua y preparar la primera celebraci\xF3n anual de luces de algas."
  }, {
    id: 'museum',
    title: "Un d\xEDa en el museo",
    body: "\xDAnete a los duendes, los renos, Santa y la se\xF1ora Claus en una visita al museo de la alegr\xEDa navide\xF1a."
  }, {
    id: 'carpool',
    title: "Autom\xF3vil de duendes",
    body: "Hay muchos duendes, renos y hombrecitos naranjas que exploran el Polo Norte. Mira c\xF3mo se desplazan de un lugar a otro."
  }, {
    id: 'liftoff',
    title: "Despegue de Santa",
    body: "Santa y los renos est\xE1n listos para comenzar su viaje, pero necesitan la ayuda de los duendes codificadores antes de emprender el vuelo."
  }]
}];
const cta = "M\xE1s informaci\xF3n";
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