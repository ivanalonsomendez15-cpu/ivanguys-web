import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "\xD5ppige koos p\xE4kapikkudega kodeerima",
    body: "P\xE4kapikke huvitab kodeerimine v\xE4ga. Neis m\xE4ngudes on lihtne p\xF5hialustega tutvust teha. Iga\xFChest v\xF5ib saada kodeerija!"
  },
  cards: [{
    id: 'codelab',
    title: "Koodilabor",
    body: "Kasutage kodeerimise p\xF5hiteadmisi, et p\xE4kapikk metsas kadunud kingituste juurde juhatada."
  }, {
    id: 'codeboogie',
    title: "Tants ja trall",
    body: "P\xE4kapikud harjutavad tantsutrenniga pooleks kodeerimist. Juhendage kodeerides p\xE4kapikkude tantsu, kuid vaadake ette \u2013 kui teie oskused paranevad, l\xE4hevad tantsud raskemaks."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Avastage maailma p\xFChadekombeid",
    body: "P\xFChad on eri kohtades v\xE4ga erinevad. Need m\xE4ngud ja testid \xF5petavad maailma p\xFChadekombeid tundma."
  },
  cards: [{
    id: 'traditions',
    title: "P\xFChadekombed",
    body: "Kl\xF5psake kaardil n\xF6\xF6pn\xF5eltel, et tutvuda maailma p\xFChadekommetega \u2013 Kanada tutim\xFCtsidest Austraalia ujumisp\xFCksteni."
  }, {
    id: 'translations',
    title: "T\xF5lked",
    body: "Head uut aastat p\xE4kapikukeeles, \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437 ja palju muid p\xFChades\xF5nu k\xF5ikjalt maailmas."
  }, {
    id: 'mercator',
    title: "Kaardiviktoriin",
    body: "J\xF5uluvana peab j\xF5udma paljudesse kohtadesse. Selles geograafiam\xE4ngus tuleb riikide kontuurid kaardil \xF5igesti paigutada."
  }, {
    id: 'traditionsquiz',
    title: "K\xFCsimused p\xFChadekommete kohta",
    body: "Kas tunnete p\xFChadeajalugu? Need \xFCheksa k\xFCsimust panevad iga\xFChe m\xE4lum\xE4nguoskused proovile.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "P\xE4\xE4stke loovus valla",
    body: "J\xF5uluk\xFCla on tegemistuhinas. Aidake m\xE4ngides lemmiktegelastel joonistada, v\xE4rvida, ehitada ja luua."
  },
  cards: [{
    id: 'santascanvas',
    title: "J\xF5uluvana joonistab",
    body: "Proovige j\xF5uluvana k\xE4sit\xF6\xF6komplekti. Igal t\xF6\xF6riistal, pintslil ja kleebisel on oma heli \u2013 t\xF5eliselt audiovisuaalne kogemus."
  }, {
    id: 'snowbox',
    title: "Lumekast",
    body: "Katsetage ja m\xE4ngige talvises liivakastis. Kasutage 3D-materjale, et ehitada igasugu huvitavaid asju: maju, m\xE4nguasju, lumememmesid, metsasid v\xF5i muud."
  }, {
    id: 'elfmaker',
    title: "P\xE4kapikudisainija",
    body: "Disainige omaenda p\xE4kapikk \u2013 tehke temast P\xF5hjanaba p\xFChadeballide t\xE4ht."
  }, {
    id: 'santaselfie',
    title: "J\xF5uluvana selfie",
    body: "J\xF5uluvana tuli juuksurisse ja vajab stiilimuutust. V\xE4rvige ta habe, f\xF6\xF6nitage juuksed, lisage kaunistusi v\xF5i ajage k\xE4\xE4ridega k\xF5ik maha."
  }]
}, {
  id: 'family',
  heading: {
    title: "Perega koos",
    body: "\xD5dus \xF5htu popkorniga teki all. Vaadake kogu kamba seiklusi j\xF5uluk\xFCla kinos v\xF5i lugege interaktiivset juturaamatut narval Ollie merej\xF5uludest."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie meremaailm",
    body: "S\xF5brad j\xF5uluk\xFClast l\xE4hevad narval Olliele merre k\xFClla ning aitavad vetikatest j\xF5ulutulesid teha."
  }, {
    id: 'museum',
    title: "P\xE4ev muuseumis",
    body: "Minge koos p\xE4kapikkude, p\xF5hjap\xF5trade ja j\xF5ulumemmega P\xFChademuuseumi ekskursioonile!"
  }, {
    id: 'carpool',
    title: "P\xE4kapikuauto",
    body: "J\xF5uluk\xFClas sagib hulgaliselt p\xE4kapikke, p\xF5hjap\xF5tru ja abimehi. Vaadake, kuidas nad ringi liiguvad."
  }, {
    id: 'liftoff',
    title: "J\xF5uluvana asub teele",
    body: "J\xF5uluvana ja p\xF5hjap\xF5drad on lennuks peaaegu valmis ning vajavad vaid veidi koodip\xE4kapikkude abi."
  }]
}];
const cta = "\xD5ppige";
const ageLabel = "Igas vanuses";
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