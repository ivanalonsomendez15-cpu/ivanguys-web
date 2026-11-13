import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Ikasi programatzen Bizarzuriren laguntzaileekin",
    body: "Laguntzaileak programazio-gaitasunak lantzen ari dira. Probatu oinarrizkoena ikasteko balioko dizuten jokoak. Edonor saia daiteke programatzen."
  },
  cards: [{
    id: 'codelab',
    title: "Kodearen laborategia",
    body: "Erabili oinarrizko programazioa laguntzailea basoan zehar eramateko, erori diren opariak jaso ditzan."
  }, {
    id: 'codeboogie',
    title: "Kodearen dantza",
    body: "Laguntzaileak berriro ari dira programazioa praktikatzen, dantzan dabiltzan bitartean. Erabili programazio laguntzaileek nola dantzatu behar duten esateko, baina kontuz: programatzeko duzun gaitasuna hobetu ahala, dantzak gero eta zailagoak izango dira."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Ezagutu mundu osoko ospakizunak",
    body: "Jaiak desberdinak dira munduko txoko bakoitzean. Ikasi nola ospatzen diren munduan zehar, jokoen eta galderen bidez."
  },
  cards: [{
    id: 'traditions',
    title: "Jaietako tradizioak",
    body: "Kanadan artilezko txanoa janzten dute; Australian, berriz, bainujantzia. Egin klik mapako txintxetetan mundu osoko jaietako ohiturak ezagutzeko."
  }, {
    id: 'translations',
    title: "Itzulpenak",
    body: "Ikasi laguntzaileen hizkuntzan \"Urteberri on\" esaten, \"\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\" ahoskatzen eta Gabonei buruzko mundu osoko esamoldeak."
  }, {
    id: 'mercator',
    title: "Mapen jokoa",
    body: "Bizarzurik toki askotara joan behar du. Lotu herrialdeen profila eta mapa geografiari buruzko joko honetan."
  }, {
    id: 'traditionsquiz',
    title: "Jaietako ohiturei buruzko jokoa",
    body: "Ezagutzen al duzu ospakizun hauen historia? Erakutsi zenbat dakizun bederatzi galderako azterketa honetan; dituzun ezagutza guztiak erabili beharko dituzu.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Inspira zaitez eta sortu zerbait",
    body: "Bizarzuriren herrixka ekintzaren bidez loratzen da. Bertako jokoetan marraztu, margotu, eraiki eta sortu egin ahalko duzu, zure gogoko pertsonaiarekin batera."
  },
  cards: [{
    id: 'santascanvas',
    title: "Bizarzuriren mihisea",
    body: "Sar zaitez Bizarzuriren sorkuntza-suitean. Tresna, pintzel eta eranskailu bakoitzak soinu berezi bat dauka, begiekin eta belarriekin goza dezazun."
  }, {
    id: 'snowbox',
    title: "Elurretako proben eremua",
    body: "Egin esperimentuak eta jolastu zeure neguko proben eremuan. Erabili 3D-ko materialak eta eraiki etxeak, jostailuak, elurretako panpinak, basoak edo bururatzen zaizun beste edozer."
  }, {
    id: 'elfmaker',
    title: "Sortu zure iratxoa",
    body: "Sortu iratxo bat oso-osorik eta ziurtatu dotore-dotore dagoela Ipar Poloan ospatzen ari diren gau-ekitaldi guztietarako."
  }, {
    id: 'santaselfie',
    title: "Bizarzuriren selfiea",
    body: "Bizarzuri bizarginarenean dago eta laguntza behar du. Tindatu bizarra, lehortu ilea, gehitu apaingarriak edo kendu bizarra oso-osorik bizarra egitekoarekin."
  }]
}, {
  id: 'family',
  heading: {
    title: "Elkar zaitezte familia-giroan",
    body: "Hartu krispetak eta jarri goxo tapaki bero baten azpian. Kuadrilla osoa zertan dabilen ikus dezakezu Bizarzuriren herrixkako antzokiko pantaila handian. Bestela, istorio-liburu interaktiboa irakur dezakezu, Ollie narbalak ur azpian Gabonak nola ospatzen dituen ikusteko."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie itsaspean",
    body: "Bizarzuriren herrixkako lagunek narbalarekin bat egingo dute ur azpian, algak argiz apaintzeko urteroko ekitaldiaren lehen edizioa antolatzeko."
  }, {
    id: 'museum',
    title: "Egun-pasa museoan",
    body: "Joan jaietako espirituaren museora laguntzaileekin, elur-oreinekin, Bizarzurirekin eta Bizarzuriren emaztearekin."
  }, {
    id: 'carpool',
    title: "Iratxoen autoa",
    body: "Laguntzaile, elur-orein eta Pegman ugari dabiltza Ipar Poloan gora eta behera. Ikusi nola mugitzen diren batetik bestera."
  }, {
    id: 'liftoff',
    title: "Bizarzuriren aireratzea",
    body: "Bizarzuri eta elur-oreinak prest daude, baina, aireratu baino lehen, laguntzaile programatzaileen laguntza behar dute."
  }]
}];
const cta = "Ikasi";
const ageLabel = "Adin guztiak";
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