import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Leer coderen met de elfen van de Kerstman",
    body: "De elfen willen hun codeervaardigheden altijd verbeteren. Ontdek games waarin je de basis leert. Iedereen kan leren coderen!"
  },
  cards: [{
    id: 'codelab',
    title: "Codelab",
    body: "Beweeg de elf door het bos met de basisprincipes van coderen om de achtergelaten cadeautjes te zoeken."
  }, {
    id: 'codeboogie',
    title: "Codeboogie",
    body: "De elfen zijn al dansend aan het oefenen met coderen. Gebruik code om de danspasjes van de elfen te bepalen. Let op: Hoe beter je wordt, hoe moeilijker de danspassen worden."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Ontdek kerst over de hele wereld",
    body: "Kerst kan er op verschillende plekken ter wereld heel anders uitzien. Ontdek hoe de wereld het feest viert met allerlei games en quizzen."
  },
  cards: [{
    id: 'traditions',
    title: "Kersttradities",
    body: "In Canada dragen ze een speciale kerstmuts en in Australi\xEB een zwembroek. Klik op de spelden op de kaart en leer meer over de verschillende kersttradities wereldwijd."
  }, {
    id: 'translations',
    title: "Vertalingen",
    body: "Van 'Gelukkig nieuwjaar' in het Elfs tot \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437: leer de kerstgroeten van over de hele wereld."
  }, {
    id: 'mercator',
    title: "Landkaartquiz",
    body: "De Kerstman moet naar veel plekken gaan. Leg de omtrek van een land op de kaart in deze aardrijkskundige game."
  }, {
    id: 'traditionsquiz',
    title: "Quiz over tradities rondom de feestdagen",
    body: "Ken jij de geschiedenis van kerst? Stel je kennis op de proef in deze quiz met negen vragen.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Doe inspiratie op en maak iets",
    body: "Het kerstdorp leeft van de magie van creatie. Ontdek games waarmee je al je favoriete personages tekent, schildert, ontwerpt en maakt."
  },
  cards: [{
    id: 'santascanvas',
    title: "Schilderen met de Kerstman",
    body: "Gebruik de creatieve ruimte van de Kerstman zelf. Elke tool, kwast en sticker heeft een ander geluid. Maak er een spektakel van beeld en geluid van."
  }, {
    id: 'snowbox',
    title: "Sneeuwbox",
    body: "Experimenteer en speel met je eigen winterse sandbox. Gebruik 3D-materialen om van alles te maken: huizen, speelgoed, sneeuwpoppen, bossen of wat je maar kunt bedenken."
  }, {
    id: 'elfmaker',
    title: "Maak je eigen elf",
    body: "Maak je eigen elf die de show steelt tijdens de vele feestjes die tijdens de feestdagen op de Noordpool worden gehouden."
  }, {
    id: 'santaselfie',
    title: "Kerstmanselfie",
    body: "De Kerstman is bij de kapper voor een nieuwe look. Verf zijn baard, f\xF6hn zijn haar en voeg wat haaraccessoires toe of scheer juist alles eraf."
  }]
}, {
  id: 'family',
  heading: {
    title: "Kom met het hele gezin samen",
    body: "Pak wat popcorn erbij en kruip lekker onder een dekentje. Zie de hele groep op het grote scherm in de dorpsbioscoop of lees in het interactieve verhalenboek mee met hoe Ollie de narwal diep in de zee kerst viert."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie diep in de zee",
    body: "Onze dorpsvrienden brengen met Ollie de dolfijn een dagje onderwater door en brengen de eerste jaarlijkse feestverlichting in het zeewier aan."
  }, {
    id: 'museum',
    title: "Een dagje naar het museum",
    body: "Ga met de elfen, de rendieren, de Kerstman en zijn vrouw mee naar het Kerstmuseum!"
  }, {
    id: 'carpool',
    title: "Onderweg met de elfen",
    body: "Er zwerven elfen, rendieren en pegmannen rond op de Noordpool. Kijk hoe ze van de ene naar de andere plek gaan."
  }, {
    id: 'liftoff',
    title: "De Kerstman vertrekt",
    body: "De Kerstman en zijn rendieren staan klaar om op pad te gaan, maar ze hebben wat hulp van de codeerelfen nodig voordat ze kunnen vertrekken."
  }]
}];
const cta = "Leren";
const ageLabel = "Alle leeftijden";
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