import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "L\xE6r \xE5 kode med julenissens alver",
    body: "Alvene jobber alltid med kodeferdighetene sine. Utforsk spill der du kan l\xE6re det grunnleggende. Hvem som helst kan pr\xF8ve \xE5 kode!"
  },
  cards: [{
    id: 'codelab',
    title: "Kodingslab",
    body: "Bruk enkel koding til \xE5 hjelpe alvene med \xE5 finne presanger som er sluppet over skogen."
  }, {
    id: 'codeboogie',
    title: "Kodeboogie",
    body: "Alvene er i gang med \xE5 \xF8ve seg p\xE5 koding igjen, og de blander gjerne inn litt dans. Bruk kode til \xE5 koreografere alvenes danser \u2013 men pass p\xE5! Jo bedre du blir, desto vanskeligere blir dansene!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "L\xE6r om julefeiring verden rundt",
    body: "Julen ser ganske ulik ut fra sted til sted. L\xE6r om hvordan h\xF8ytiden feires rundt omkring i verden, med spill og sp\xF8rreleker i massevis."
  },
  cards: [{
    id: 'traditions',
    title: "Juletradisjoner",
    body: "Klikk p\xE5 knappen\xE5lene p\xE5 kartet for \xE5 l\xE6re om juletradisjoner verden rundt \u2013 fra toppluer i Canada til badebukser i Australia."
  }, {
    id: 'translations',
    title: "Oversettelser",
    body: "L\xE6r deg julehilsener fra alle verdenshj\xF8rner \u2013 fra \xABGodt nytt\xE5r\xBB p\xE5 alvisk til \xAB\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\xBB."
  }, {
    id: 'mercator',
    title: "Kartquiz",
    body: "Nissen har mange steder \xE5 bes\xF8ke. I dette geografispillet skal du finne ut hvor p\xE5 kartet de forskjellige omrissene av land h\xF8rer hjemme."
  }, {
    id: 'traditionsquiz',
    title: "Sp\xF8rrelek om juletradisjoner",
    body: "Kjenner du julens historie? Svar p\xE5 ni sp\xF8rsm\xE5l, og test ut kunnskapene dine.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Bli inspirert, og lag noe",
    body: "Det er magien ved det \xE5 lage ting som holder Julenissens landsby i gang. Her finner du spill der du kan tegne, male, bygge og skape sammen med alle favorittfigurene dine."
  },
  cards: [{
    id: 'santascanvas',
    title: "Julenissens lerret",
    body: "Pr\xF8v ut nissens eget utstyrsskrin. Hvert redskap, hver pensel og hvert klistremerke har sin egen lyd, s\xE5 dette er en opplevelse b\xE5de for \xF8ynene og \xF8rene."
  }, {
    id: 'snowbox',
    title: "Sn\xF8kasse",
    body: "Eksperiment\xE9r og lek i din egen vintersandkasse. Bruk 3D-materialer til \xE5 bygge hva som helst \u2013 hus, leker, sn\xF8figurer, skoger og alt mulig annet du kan komme p\xE5."
  }, {
    id: 'elfmaker',
    title: "Lag en alv",
    body: "Bygg din egen alv fra topp til t\xE5, og s\xF8rg for at den ser alvsindig bra ut, s\xE5 den er klar for de mange juleselskapene p\xE5 Nordpolen."
  }, {
    id: 'santaselfie',
    title: "Julenissens selfie",
    body: "Nissen er i barbersalongen og \xF8nsker seg ny frisyre. Farg skjegget, f\xF8n h\xE5ret, sett p\xE5 litt pynt \u2013 eller fjern alt sammen med klippemaskinen."
  }]
}, {
  id: 'family',
  heading: {
    title: "P\xE5 tide med en familiesamling",
    body: "Hent popkornet, og smyg deg under et deilig pledd. Du kan se hele gjengen p\xE5 Landsbykinoen eller f\xF8lge med i en interaktiv eventyrbok mens narhvalen Ollie feirer undervannsjul."
  },
  cards: [{
    id: 'storybook',
    title: "Ollies undervannsjul",
    body: "Landsbyvennene tilbringer en dag under vann med narhvalen Ollie for \xE5 forberede den f\xF8rste \xE5rlige tanglysfesten."
  }, {
    id: 'museum',
    title: "En dag p\xE5 museet",
    body: "Bli med alvene, reinsdyrene, nissefar og nissemor p\xE5 julestemningsmuseet!"
  }, {
    id: 'carpool',
    title: "Alvebil",
    body: "Mange alver, reinsdyr og klypemenn g\xE5r i skytteltrafikk rundt p\xE5 Nordpolen. Se hvordan de navigerer fra sted til sted."
  }, {
    id: 'liftoff',
    title: "Julenissens avreise",
    body: "Nissen og reinsdyrene er klare til \xE5 dra, men de trenger litt hjelp fra kodealvene f\xF8r avgang."
  }]
}];
const cta = "Les";
const ageLabel = "Alle aldre";
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