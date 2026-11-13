import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Opi koodaamaan tonttujen kanssa",
    body: "Tontut treenaavat jatkuvasti koodaustaitojaan. Pelaa pelej\xE4, joista opit perusteet. Koodausta voi kokeilla kuka vain!"
  },
  cards: [{
    id: 'codelab',
    title: "Koodauslabra",
    body: "Johdata tonttu mets\xE4n halki ja l\xF6yd\xE4 pudonneet lahjat k\xE4ytt\xE4m\xE4ll\xE4 koodauksen perusjuttuja."
  }, {
    id: 'codeboogie',
    title: "Kooditanssi",
    body: "Tontut treenaavat taas koodausta ja esittelev\xE4t samalla tanssitaitojaan. Koodaa tontuille tanssiliikkeet ja ole valmiina aina vain hankalampiin haasteisiin!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Joulunaika eri puolilla maailmaa",
    body: "Joulunaika voi n\xE4ytt\xE4\xE4 eri paikoissa aivan erilaiselta. Pelaa pelej\xE4 ja vastaa visoihin, jotka esittelev\xE4t jouluisia perinteit\xE4 ymp\xE4ri maailmaa."
  },
  cards: [{
    id: 'traditions',
    title: "Lomaperinteet",
    body: "Pipo p\xE4\xE4ss\xE4 Kanadassa, uikkareissa Australiassa \u2013 tutustu joulunajan perinteisiin eri puolilta maailmaa klikkaamalla kartalla n\xE4kyvi\xE4 merkkej\xE4."
  }, {
    id: 'translations',
    title: "K\xE4\xE4nn\xF6kset",
    body: "Katso, miten toivotetaan hyv\xE4\xE4 uutta vuotta haltiakielell\xE4, mit\xE4 tarkoittaa \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437 ja mit\xE4 muualla maailmassa sanotaan joulunaikana."
  }, {
    id: 'mercator',
    title: "Karttavisa",
    body: "Pukki matkaa ymp\xE4ri maailmaa. T\xE4ss\xE4 maantietoa testaavassa peliss\xE4 pit\xE4\xE4 l\xF6yt\xE4\xE4 oikeat maat \xE4\xE4riviivojen perusteella."
  }, {
    id: 'traditionsquiz',
    title: "Joulunajan perinnevisa",
    body: "Tunnetko joulun tarinan? Testaa tietosi vastaamalla yhdeks\xE4\xE4n visaiseen kysymykseen.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "L\xF6yd\xE4 idea ja luo jotain",
    body: "Joulupukin kyl\xE4 el\xE4\xE4 luomisen taiasta. Pelaa pelej\xE4, joissa p\xE4\xE4set piirt\xE4m\xE4\xE4n, maalaamaan, rakentamaan ja luomaan suosikkihahmojasi."
  },
  cards: [{
    id: 'santascanvas',
    title: "Jouluista taiteilua",
    body: "K\xE4y sis\xE4\xE4n Pukin omaan taidepajaan. Kokemus on aidosti audiovisuaalinen, sill\xE4 jokaisella v\xE4lineell\xE4, siveltimell\xE4 ja tarralla on oma \xE4\xE4ni."
  }, {
    id: 'snowbox',
    title: "Lumilaatikko",
    body: "Kokeile ja leiki omassa talvisessa leikkipaikassa. Tee 3D-materiaaleista mit\xE4 vain: taloja, leikkikaluja, lumiukkoja ja \u2011akkoja, metsi\xE4 tai mit\xE4 tahansa mieleesi tulee."
  }, {
    id: 'elfmaker',
    title: "Tontuntekij\xE4",
    body: "Tee p\xE4\xE4st\xE4 varpaisiin oma tonttu, joka on tonttumaisen tyylikk\xE4\xE4n\xE4 valmis kaikkiin Korvatunturin jouluiltamiin."
  }, {
    id: 'santaselfie',
    title: "Pukin selfie",
    body: "Pukki on p\xE4\xE4tt\xE4nyt pist\xE4yty\xE4 parturiin laittamaan tyylins\xE4 uusiksi. Puhalla Pukin parta ja hiukset kuiviksi, v\xE4rj\xE4\xE4 tai koristele ne tai aja ne kokonaan pois."
  }]
}, {
  id: 'family',
  heading: {
    title: "Yhteist\xE4 aikaa koko perheelle",
    body: "Ota karkkipussi ja k\xE4perry l\xE4mpim\xE4n peiton alle. N\xE4e koko tuttu poppoo kyl\xE4n leffateatterin valkokankaalla tai lue interaktiivista satua, jossa Samu Sarvivalas seikkailee jouluisissa tunnelmissa meren alla."
  },
  cards: [{
    id: 'storybook',
    title: "Samu meren alla",
    body: "Yst\xE4v\xE4mme kyl\xE4st\xE4 l\xE4htev\xE4t Samu Sarvivalaan kanssa p\xE4iv\xE4ksi meren alle j\xE4rjest\xE4m\xE4\xE4n ensimm\xE4ist\xE4 lev\xE4valojuhlaa."
  }, {
    id: 'museum',
    title: "P\xE4iv\xE4 museossa",
    body: "L\xE4hde tonttujen, porojen, Pukin ja Joulumuorin kanssa k\xE4ym\xE4\xE4n Jouluilon museossa!"
  }, {
    id: 'carpool',
    title: "Tonttuvaunu",
    body: "Korvatunturilla sukkuloi ymp\xE4riins\xE4 koko joukko tonttuja, poroja ja Pegmaneja. Katso, miten ne l\xF6yt\xE4v\xE4t paikasta toiseen."
  }, {
    id: 'liftoff',
    title: "Pukin l\xE4ht\xF6",
    body: "Pukki ja porot ovat valmiina l\xE4ht\xF6\xF6n, mutta sit\xE4 ennen tarvitaan viel\xE4 hieman apua koodaritontuilta."
  }]
}];
const cta = "Opi";
const ageLabel = "Kaikenik\xE4iset";
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