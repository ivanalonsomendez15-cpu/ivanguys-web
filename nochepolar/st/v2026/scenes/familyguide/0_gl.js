import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Aprende a crear c\xF3digo cos elfos de Pap\xE1 Noel",
    body: "Os elfos sempre est\xE1n mellorando as s\xFAas habilidades de programaci\xF3n. Explora xogos cos que poder\xE1s aprender os conceptos b\xE1sicos. Todo o mundo pode probar a crear c\xF3digo!"
  },
  cards: [{
    id: 'codelab',
    title: "Laboratorio de codificaci\xF3n",
    body: "Utiliza os conceptos b\xE1sicos de programaci\xF3n para conseguir que o elfo atope os regalos que hai estrados polo bosque."
  }, {
    id: 'codeboogie',
    title: "Baile de c\xF3digo",
    body: "Os elfos volveron \xE1s clases de codificaci\xF3n, pero non perden de bailar. Escribe c\xF3digo para crear as coreograf\xEDas dos bailes dos elfos. Ten en conta que os bailes ser\xE1n m\xE1is dif\xEDciles a medida que vaias progresando."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Descubre como son estas festas en todo o mundo",
    body: "As festas poden ter un aspecto distinto en cada lugar. Descubre como se celebran en todo o mundo cos nosos xogos e tests."
  },
  cards: [{
    id: 'traditions',
    title: "Tradici\xF3ns de Nadal",
    body: "No Canad\xE1 l\xE9vanse gorros de la, mentres que en Australia imperan os traxes de ba\xF1o. Fai clic nos alfinetes do mapa para descubrir as tradici\xF3ns que hai nestas festas en todo o mundo."
  }, {
    id: 'translations',
    title: "Traduci\xF3ns",
    body: "Ensin\xE1mosche as expresi\xF3ns t\xEDpicas destas festas en todo o mundo: desde \"\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\" ata como dicir \"Feliz Aninovo\" no idioma dos elfos."
  }, {
    id: 'mercator',
    title: "Test de xeograf\xEDa",
    body: "Pap\xE1 Noel ten que ir a unha morea de lugares. Neste xogo de xeograf\xEDa, ter\xE1s que colocar a silueta de cada pa\xEDs no mapa."
  }, {
    id: 'traditionsquiz',
    title: "Xogo de preguntas sobre as tradici\xF3ns do Nadal",
    body: "Co\xF1eces a historia destas festas? Demostra o que sabes con este test de nove preguntas que po\xF1er\xE1 a proba os teus co\xF1ecementos.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "D\xE9ixate levar pola inspiraci\xF3n e crea algo",
    body: "A creatividade \xE9 o que move a aldea de Pap\xE1 Noel. Descubre xogos cos que poder\xE1s debuxar, pintar, constru\xEDr e crear elementos con todos os teus personaxes favoritos."
  },
  cards: [{
    id: 'santascanvas',
    title: "Pintura de Nadal",
    body: "Descubre a suite creativa de Pap\xE1 Noel. Cada ferramenta, pincel e adhesivo ten un son propio, polo que podes gozar de toda unha experiencia audiovisual."
  }, {
    id: 'snowbox',
    title: "Zona de probas nevada",
    body: "Experimenta e xoga na t\xFAa propia zona de probas invernal. Utiliza materiais en 3D para constru\xEDr casas, xoguetes, bonecos de neve, bosques ou calquera outra cousa que se che ocorra."
  }, {
    id: 'elfmaker',
    title: "Crea un elfo",
    body: "Crea o teu propio elfo dos p\xE9s \xE1 cabeza e d\xE9ixao feito un pincel para as festas do Nadal que se celebran no Polo Norte."
  }, {
    id: 'santaselfie',
    title: "Autofoto de Pap\xE1 Noel",
    body: "Pap\xE1 Noel est\xE1 na barbar\xEDa e necesita axuda para cambiar de look. P\xEDntalle a barba, s\xE9calle o pelo, eng\xE1delle decoraci\xF3n ou af\xE9itao totalmente coas tesoiras."
  }]
}, {
  id: 'family',
  heading: {
    title: "Goza do tempo en familia",
    body: "Prepara uns flocos de millo e t\xE1pate cunha manta ben abrigosi\xF1a. Podes ver todo o equipo no cine da aldea ou ler un libro interactivo mentres o narval Ollie celebra estas festas baixo o mar."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie baixo o mar",
    body: "Os nosos amigos da aldea \xFAnense ao narval Ollie para pasar o d\xEDa baixo o mar e montar a primeira festa anual de alumeamento festivo con algas."
  }, {
    id: 'museum',
    title: "Un d\xEDa no museo",
    body: "Visita cos elfos, os renos, Pap\xE1 Noel e Mam\xE1 Noel o Museo da Diversi\xF3n das Festas."
  }, {
    id: 'carpool',
    title: "Coche dos elfos",
    body: "Hai moitos elfos, renos e homi\xF1os laranxas no Polo Norte. Mira como van dun lugar a outro."
  }, {
    id: 'liftoff',
    title: "Engalaxe de Pap\xE1 Noel",
    body: "Pap\xE1 Noel e os renos est\xE1n listos para sa\xEDr, pero necesitan a axuda dos elfos programadores antes de engalar."
  }]
}];
const cta = "Aprender";
const ageLabel = "Todas as idades";
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