import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "L\xE4r dig att koda med jultomtens nissar",
    body: "Tomtenissarna slipar alltid p\xE5 sina programmeringskunskaper. L\xE4r dig grunderna genom olika spel. Alla kan testa att koda!"
  },
  cards: [{
    id: 'codelab',
    title: "Kodlabb",
    body: "Anv\xE4nd grundl\xE4ggande kodning f\xF6r att leda tomtenissen genom skogen till de tappade julklapparna."
  }, {
    id: 'codeboogie',
    title: "Koddans",
    body: "Tomtenissarna forts\xE4tter att \xF6va kodning och finslipar samtidigt p\xE5 dansf\xE4rdigheterna. Anv\xE4nd koden f\xF6r att koreografera tomtenissarnas dans \u2013 men se upp, ju duktigare du blir desto sv\xE5rare blir danserna!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Uppt\xE4ck julfirande runt om i v\xE4rlden",
    body: "Julfirandet kan se helt annorlunda ut p\xE5 olika platser. L\xE4r dig hur v\xE4rlden firar jul med massor av spel och fr\xE5gesporter."
  },
  cards: [{
    id: 'traditions',
    title: "Jultraditioner",
    body: "Klicka p\xE5 kartn\xE5larna f\xF6r att l\xE4ra dig mer om jultraditioner \xF6ver hela v\xE4rlden, fr\xE5n vinterm\xF6ssor i Kanada till badkl\xE4der i Australien."
  }, {
    id: 'translations',
    title: "\xD6vers\xE4ttningar",
    body: "L\xE4r dig julfraser fr\xE5n hela v\xE4rlden, fr\xE5n gott nytt \xE5r p\xE5 alviska till \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437."
  }, {
    id: 'mercator',
    title: "Karttest",
    body: "Jultomten har m\xE5nga platser att bes\xF6ka. Passa in l\xE4ndernas konturer p\xE5 kartan i det h\xE4r geografispelet."
  }, {
    id: 'traditionsquiz',
    title: "Fr\xE5gesport om jultraditioner",
    body: "Kan du din julhistoria? Testa dina kunskaper i en fr\xE5gesport p\xE5 nio fr\xE5gor.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Bli inspirerad och skapa n\xE5got",
    body: "Jultomtens by v\xE4xer med skapandets magi. Uppt\xE4ck spel d\xE4r du kan rita, m\xE5la, bygga och skapa med alla dina favoritfigurer."
  },
  cards: [{
    id: 'santascanvas',
    title: "M\xE5la med tomten",
    body: "Anv\xE4nd jultomtens kreativa verktyg. Varje verktyg, pensel och dekal har ett eget ljud, s\xE5 anv\xE4nd b\xE5de \xF6ron och \xF6gon."
  }, {
    id: 'snowbox',
    title: "Sn\xF6l\xE5da",
    body: "Experimentera och lek i din egen vintersandl\xE5da. Anv\xE4nd 3D-material f\xF6r att bygga vad som helst: hus, leksaker, sn\xF6gubbar, skogar eller n\xE5got annat du kan hitta p\xE5."
  }, {
    id: 'elfmaker',
    title: "Skapa en tomtenisse",
    body: "Skapa en egen tomtenisse som \xE4r chic fr\xE5n topp till t\xE5 och redo f\xF6r julfirandet i Nordpolen."
  }, {
    id: 'santaselfie',
    title: "Tomteselfie",
    body: "Jultomten \xE4r hos fris\xF6ren och beh\xF6ver hj\xE4lp med en helt ny frilla. F\xE4rga sk\xE4gget, torka h\xE5ret, l\xE4gg till dekorationer eller raka av alltihop med rakapparaten."
  }]
}, {
  id: 'family',
  heading: {
    title: "Dags f\xF6r en familjestund",
    body: "Poppa lite popcorn och kryp in under en mysig filt. Du kan se hela g\xE4nget p\xE5 storsk\xE4rmen i byns teater eller l\xE4sa en interaktiv sagobok n\xE4r narvalen Ollie firar jul under havet."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie under havet",
    body: "V\xE5ra byv\xE4nner h\xE4nger med narvalen Ollie en dag under havsytan och startar ett \xE5rligt firande med alger och ljusslingor."
  }, {
    id: 'museum',
    title: "En dag i museet",
    body: "H\xE4ng med tomtenissarna, renarna, jultomten och tomtemor p\xE5 ett bes\xF6k i Julst\xE4mningens museum!"
  }, {
    id: 'carpool',
    title: "Tomtenissens bil",
    body: "Det finns m\xE5nga tomtenissar, renar och sm\xE5gubbar att skjutsa runt p\xE5 Nordpolen. Se hur de reser till olika platser."
  }, {
    id: 'liftoff',
    title: "Jultomten lyfter",
    body: "Jultomten och renarna \xE4r redo att \xE5ka men beh\xF6ver lite hj\xE4lp fr\xE5n kodningsnissarna innan de ger sig iv\xE4g."
  }]
}];
const cta = "L\xE4r dig mer";
const ageLabel = "Alla \xE5ldrar";
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