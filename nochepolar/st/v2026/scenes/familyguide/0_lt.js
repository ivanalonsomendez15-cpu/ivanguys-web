import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Mokykit\u0117s programuoti su Kal\u0117d\u0173 Senelio elfais",
    body: "Elfai nuolat tobulina savo programavimo \u012Fg\u016Bd\u017Eius. I\u0161bandykite \u017Eaidimus, kuriuos \u017Eaisdami gausite pagrindus. Bet kas gali pam\u0117ginti programuoti!"
  },
  cards: [{
    id: 'codelab',
    title: "Kod\u0173 laboratorija",
    body: "Pasitelk\u0119 programavimo pagrindus veskite elf\u0105 per mi\u0161k\u0105 ir surinkite pamestas dovanas."
  }, {
    id: 'codeboogie',
    title: "Bugivugio kodai",
    body: "Elfai gr\u012F\u017Eo prie programavimo darb\u0173, kartu derindami \u0161oki\u0173 \u012Fg\u016Bd\u017Eius. Ra\u0161ydami kod\u0105 vadovaukite elf\u0173 \u0161okiams, ta\u010Diau b\u016Bkite budr\u016Bs: kuo labiau \u012Fgusite, tuo labiau sunk\u0117s \u0161okiai!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Atraskite pasaulio \u0161ven\u010Di\u0173 tradicijas",
    body: "\u0160vent\u0117s \u012Fvairiose \u0161alyse gali atrodyti i\u0161ties skirtingai. Su\u017Einokite, kaip pasaulis mini \u0161ventes, pasirink\u0119 i\u0161 daugyb\u0117s \u017Eaidim\u0173 ir priz\u0173."
  },
  cards: [{
    id: 'traditions',
    title: "\u0160ven\u010Di\u0173 tradicijos",
    body: "Kanadoje d\u0117vi skryb\u0117laites, o Australijoje u\u017Esideda glaudes \u2013 spustel\u0117j\u0119 \u017Eem\u0117lap\u012F su\u017Einosite, kokios \u0161ven\u010Di\u0173 tradicijos visame pasaulyje."
  }, {
    id: 'translations',
    title: "Vertimai",
    body: "Nuo pasveikinimo sulaukus Nauj\u0173j\u0173 met\u0173 elf\u0173 kalba iki \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437 (liet. Senis \u0161altis): susipa\u017Einkite su \u0161ventiniu \u012Fvairi\u0173 kalb\u0173 \u017Eargonu."
  }, {
    id: 'mercator',
    title: "\u017Dem\u0117lapi\u0173 viktorina",
    body: "Kal\u0117d\u0173 seneliui reikia nuvykti \u012F daugyb\u0119 viet\u0173. Raskite \u0161alies kont\u016Br\u0173 viet\u0105 \u017Eem\u0117lapyje \u0161iame geografiniame \u017Eaidime."
  }, {
    id: 'traditionsquiz',
    title: "Viktorina apie \u0161ven\u010Di\u0173 tradicijas",
    body: "Ar \u017Einote savo \u0161ven\u010Di\u0173 istorij\u0105? Pademonstruokite savo i\u0161manym\u0105 atsakydami \u012F devynis viktorinos klausimus, kurie tikrai parodys, kuriuos faktus \u017Einote.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "\u012Ekv\u0117pti kit\u0173 darb\u0173 kurkite patys",
    body: "Kal\u0117d\u0173 Senelio kaimelyje k\u016Brimo magija tvyro ore. \u017Daisdami \u017Eaidimus pie\u0161kite, da\u017Eykite, konstruokite ir kurkite su savo m\u0117gstamais persona\u017Eais."
  },
  cards: [{
    id: 'santascanvas',
    title: "Kal\u0117d\u0173 Senelio drob\u0117",
    body: "\u012E\u017Eenkite \u012F Kal\u0117d\u0173 Senelio dirbtuves. Kiekvienas \u012Frankis, teptukas ir lipdukas skleid\u017Eia i\u0161skirtin\u012F gars\u0105, tad tai tampa audiovizualine patirtimi."
  }, {
    id: 'snowbox',
    title: "Sniego d\u0117\u017E\u0117",
    body: "Eksperimentuokite ir \u017Eaiskite asmenin\u0117je \u017Eiemi\u0161koje sm\u0117lio d\u0117\u017E\u0117je. Naudodami 3D med\u017Eiagas kurkite visk\u0105: namus, \u017Eaislus, senius besmegenius, mi\u0161kus ar bet k\u0105, k\u0105 tik galite \u012Fsivaizduoti."
  }, {
    id: 'elfmaker',
    title: "Elfo k\u016Brimas",
    body: "Sukurkite savo elf\u0105 nuo galvos iki koj\u0173 ir u\u017Etikrinkite, kad jis atrodyt\u0173 elfi\u0161kai fantasti\u0161kai, kai dalyvaus daugyb\u0117je \u0160iaur\u0117s a\u0161igalyje vykstan\u010Di\u0173 \u0161ventini\u0173 pob\u016Bvi\u0173."
  }, {
    id: 'santaselfie',
    title: "Kal\u0117d\u0173 Senelio asmenuk\u0117",
    body: "Kal\u0117d\u0173 Senelis apsilank\u0117 kirpykloje \u2013 pad\u0117kite jam visi\u0161kai atsinaujinti plaukus. Nuda\u017Eykite barzd\u0105, i\u0161d\u017Eiovinkite plaukus, prid\u0117kite kelet\u0105 papuo\u0161im\u0173 arba visk\u0105 nuskuskite ma\u0161in\u0117le."
  }]
}, {
  id: 'family',
  heading: {
    title: "Susiburkite visa \u0161eima",
    body: "\u010Ciupkite sprag\u0117si\u0173 ir susisupkite \u012F jauki\u0105 antklod\u0119. Galite steb\u0117ti vis\u0105 gauj\u0105 did\u017Eiajame kaimelio kino teatro ekrane arba skaityti interaktyvi\u0105 pasakojim\u0173 knyg\u0105, kurioje narvalas Olis \u0161ventin\u012F laikotarp\u012F leid\u017Eia j\u016Broje."
  },
  cards: [{
    id: 'storybook',
    title: "Olis j\u016Broje",
    body: "Kaimelio draugai prisijungia prie narvalo Olio ir pasineria po vandeniu, kur visi kartu rengia pirm\u0105j\u012F rudadumbli\u0173 \u0161vies\u0173 festival\u012F."
  }, {
    id: 'museum',
    title: "Diena muziejuje",
    body: "Aplankykite \u0160ventinio d\u017Eiugesio muziej\u0173 su elfais, elniais, Kal\u0117d\u0173 Seneliu ir jo \u017Emona!"
  }, {
    id: 'carpool',
    title: "Elf\u0173 automobilis",
    body: "Elfams, elniams ir \u017Emogiukams tenka daug lakstyti po \u0160iaur\u0117s a\u0161igal\u012F. Steb\u0117kite, kaip jie juda \u0161en bei ten."
  }, {
    id: 'liftoff',
    title: "Kal\u0117d\u0173 Senelio i\u0161vykimas",
    body: "Kal\u0117d\u0173 Senelis ir elniai yra pasireng\u0119 i\u0161vykti, ta\u010Diau prie\u0161 pakylant jiems reikia \u0161iek tiek elf\u0173 programuotoj\u0173 pagalbos."
  }]
}];
const cta = "Su\u017Einokite";
const ageLabel = "Bet koks am\u017Eius";
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