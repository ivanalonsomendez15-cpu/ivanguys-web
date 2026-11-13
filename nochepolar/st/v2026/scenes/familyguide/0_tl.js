import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Matutong mag-code gamit ang mga Elf ni Santa",
    body: "Laging nagsisikap ang mga elf sa kanilang mga kasanayan sa pag-code. Mag-explore ng mga laro na magtuturo sa iyo ng mga pangunahing kaalaman. Puwedeng subukan ng kahit sino ang pag-code!"
  },
  cards: [{
    id: 'codelab',
    title: "Code Lab",
    body: "Gumamit ng mga pangunahing kasanayan sa pag-code mara ma-navigate ang elf sa kagubatan para mahanap ang mga inilaglag na regalo."
  }, {
    id: 'codeboogie',
    title: "Code Boogie",
    body: "Nagbabalik ang mga elf sa pagsasanay sa pag-code, habang sinasabayan ng kanilang mga kasanayan sa pagsasayaw. Gumamit ng code para ma-choreograph ang mga sayaw ng mga elf - pero mag-ingat ka, habang gumagaling ka, mas humihirap ang mga sayaw!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Tuklasin ang kapaskuhan sa buong mundo",
    body: "Magkakaiba talaga ang hitsura ng kapaskuhan sa iba't ibang lugar. Alamin kung paano ipinagdiriwang ng mundo ang season sa mga laro at iba't ibang quiz."
  },
  cards: [{
    id: 'traditions',
    title: "Holiday Traditions",
    body: "Mula sa pagsusuot ng toque sa Canada hanggang sa pagsusuot ng swim trunks sa Australia, i-click ang mga pin sa map para malaman ang tungkol sa mga tradisyon sa kapaskuhan sa buong mundo."
  }, {
    id: 'translations',
    title: "Mga Pagsasalin",
    body: "Mula sa Happy New Year sa Elvish hanggang sa \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, matuto ng seasonal na wika mula sa buong mundo."
  }, {
    id: 'mercator',
    title: "Map Quiz",
    body: "Maraming lugar na pupuntahan si Santa. Itugma sa mapa ang outline ng isang bansa sa geography game na ito."
  }, {
    id: 'traditionsquiz',
    title: "Quiz ukol sa Mga Tradisyon sa Kapaskuhan",
    body: "Alam mo ba ang iyong history ng kapaskuhan? Ipakita ang kakayahan mo sa siyam na tanong na quiz na tiyak na susubok sa iyong mga kasanayan sa trivia.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Magkaroon ng inspirasyon at gumawa ng isang bagay",
    body: "Umuunlad ang Village ni Santa sa magic ng paggawa. Tuklasin ang mga laro na nagbibigay-daan sa iyo na gumuhit, magpinta, bumuo, at gumawa kasama ng lahat ng paborito mong character."
  },
  cards: [{
    id: 'santascanvas',
    title: "Santa's Canvas",
    body: "Mag-tap sa mismong creative suite ni Santa. May custom na tunog ang bawat tool, brush, at sticker, na dahilan para maging audio at visual na karanasan ito."
  }, {
    id: 'snowbox',
    title: "Snowbox",
    body: "Mag-eksperimento at maglaro sa sarili mong wintery sandbox. Gumamit ng mga 3D na materyales para bumuo ng kahit ano: mga bahay, laruan, snowpeople, gubat, o kahit ano pang maisip mo."
  }, {
    id: 'elfmaker',
    title: "Elf Maker",
    body: "Bumuo ng sarili mong elf mula ulo hanggang paa at tiyaking elftastic ito para sa maraming party sa kapaskuhan na nangyayari sa North Pole."
  }, {
    id: 'santaselfie',
    title: "Santa Selfie",
    body: "Nasa barberya si Santa at kailangan niya ng tulong para sa bagong gupit. Kulayan ang kanyang balbas, i-blower ang kanyang buhok, lagyan ng kaunting palamuti, o ahitin lahat gamit ang clippers."
  }]
}, {
  id: 'family',
  heading: {
    title: "Magsama-sama sa oras para sa pamilya",
    body: "Sunggaban ang popcorn at sumiksik sa ilalim ng kumportableng kumot. Mapapanood mo ang buong barkada sa big screen sa Village theater o magbasa ng interactive storybook habang ipinagdiriwang ni Ollie the Narwhal ang season sa ilalim ng dagat."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie Under The Sea",
    body: "Sinamahan ng ating mga kaibigan sa Village si Ollie the narwhal nang isang araw sa ilalim ng tubig habang binubuo nila ang unang taunang pagdiriwang sa pagpapailaw ng kelp."
  }, {
    id: 'museum',
    title: "Isang Araw sa Museo",
    body: "Samahan ang mga elf, reindeer, si Santa, at si Mrs. Claus sa pagbisita sa Museum of Holiday Cheer!"
  }, {
    id: 'carpool',
    title: "Elf Car",
    body: "Maraming elf, reindeer, at si pegman para mag-shuttle sa North Pole. Tingnan kung paano sila mag-navigate sa iba't ibang lugar."
  }, {
    id: 'liftoff',
    title: "Paglipad ni Santa",
    body: "Handa nang umalis si Santa at ang reindeer pero kailangan nila ng kaunting tulong mula sa mga coding elf bago lumipad."
  }]
}];
const cta = "Matuto";
const ageLabel = "Lahat ng Edad";
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