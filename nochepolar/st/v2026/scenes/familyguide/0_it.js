import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Impara a programmare con gli elfi di Babbo Natale",
    body: "Gli elfi sono sempre al lavoro per migliorare le loro capacit\xE0 di programmazione. Esplora i giochi che ti insegneranno le nozioni di base. Tutti possono provare a programmare!"
  },
  cards: [{
    id: 'codelab',
    title: "Laboratorio del codice",
    body: "Usa i concetti di base della programmazione per guidare gli elfi attraverso la foresta alla ricerca dei regali perduti."
  }, {
    id: 'codeboogie',
    title: "La danza del codice",
    body: "Gli elfi sono tornati a esercitarsi con la programmazione e intanto si divertono a ballare. Usa la programmazione per la coreografia delle danze degli elfi, ma attenzione, man mano che la tua bravura cresce, le danze si fanno sempre pi\xF9 difficili!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Scopri le usanze festive di tutto il mondo",
    body: "Le feste possono avere un aspetto molto diverso da un luogo all'altro. Scopri in che modo si festeggia nelle varie parti del mondo con tantissimi quiz e giochi divertenti."
  },
  cards: [{
    id: 'traditions',
    title: "Tradizioni natalizie",
    body: "Dall'indossare un \"toque\" in Canada ai costumi da bagno sportivi in Australia, fai clic sui segnaposto sulla mappa per scoprire le tradizioni natalizie di tutto il mondo."
  }, {
    id: 'translations',
    title: "Traduzioni",
    body: "Da \"Felice anno nuovo\" nella lingua degli elfi a \"\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\", impara il vocabolario delle feste nelle lingue di tutto il mondo."
  }, {
    id: 'mercator',
    title: "Quiz di geografia",
    body: "Babbo Natale deve raggiungere molti luoghi. Collega il contorno dei paesi sulla mappa con il loro nome geografico."
  }, {
    id: 'traditionsquiz',
    title: "Quiz sulle tradizioni del periodo festivo",
    body: "Conosci la storia delle festivit\xE0 natalizie? Fai vedere chi sei con questo quiz di nove domande che metter\xE0 alla prova le tue capacit\xE0.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Lasciati ispirare e crea qualcosa di nuovo",
    body: "Il villaggio di Babbo Natale vive della magia dei preparativi. Scopri giochi per disegnare, dipingere, costruire e creare tutti i tuoi personaggi preferiti."
  },
  cards: [{
    id: 'santascanvas',
    title: "La tela di Babbo Natale",
    body: "Tocca ed esplora la suite di creativit\xE0 di Babbo Natale Un'esperienza audiovisiva, grazie al suono specifico di ogni strumento, pennello e adesivo."
  }, {
    id: 'snowbox',
    title: "Giochiamo con la neve",
    body: "Sperimenta e gioca nel tuo parco giochi invernale personale. Usa materiali in 3D per costruire qualsiasi cosa: case, giocattoli, pupazzi di neve, foreste o qualsiasi altra cosa ti passi per la testa."
  }, {
    id: 'elfmaker',
    title: "Crea un elfo",
    body: "Crea il tuo folletto personalizzato dalla testa ai piedi, con un look el(f)egante per le serate di gala natalizie al Polo Nord."
  }, {
    id: 'santaselfie',
    title: "Selfie con Babbo Natale",
    body: "Babbo Natale \xE8 dal barbiere e ha bisogno di aiuto per rifarsi il look. Colora la sua barba, asciugagli i capelli, aggiungi qualche decorazione oppure rasa tutto con il regolabarba."
  }]
}, {
  id: 'family',
  heading: {
    title: "Divertimento in famiglia",
    body: "Prendi i popcorn e infilati sotto una coperta al calduccio. Puoi gustarti tutta la banda sul grande schermo del cinema del villaggio o leggere un libro interattivo, mentre il narvalo Ollie festeggia il Natale in fondo al mare."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie in fondo al mare",
    body: "Gli amici del villaggio vanno a trovare il narvalo Ollie per trascorrere un giorno in fondo al mare e festeggiare insieme per la prima volta la festa annuale delle decorazioni luminose fatte con le alghe."
  }, {
    id: 'museum',
    title: "Una giornata al museo",
    body: "Visita con gli elfi, le renne, Babbo Natale e la signora Natale il Museo dello Spirito Natalizio!"
  }, {
    id: 'carpool',
    title: "L'auto del folletto",
    body: "Ci sono molti elfi, renne e Pegman da scarrozzare in giro per il Polo Nord. Guarda come si spostano da un posto all'altro."
  }, {
    id: 'liftoff',
    title: "Il decollo di Babbo Natale",
    body: "Babbo Natale e le sue renne sono pronti a partire ma hanno bisogno di un piccolo aiuto dagli elfi programmatori prima di decollare."
  }]
}];
const cta = "Impara";
const ageLabel = "Tutte le et\xE0";
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