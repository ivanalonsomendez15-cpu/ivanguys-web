import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Apr\xE8n a programar amb els elfs del Pare Noel",
    body: "Els elfs treballen cont\xEDnuament per perfeccionar les seves habilitats de programaci\xF3. Explora jocs per aprendre'n els conceptes b\xE0sics. Qualsevol persona pot intentar programar!"
  },
  cards: [{
    id: 'codelab',
    title: "Laboratori de programaci\xF3",
    body: "Aplica els conceptes b\xE0sics de programaci\xF3 i guia l'elf pel bosc perqu\xE8 trobi els regals que han caigut."
  }, {
    id: 'codeboogie',
    title: "El ball del codi",
    body: "Els elfs tornen a programar i alhora demostren les seves habilitats de ball. Fes servir codi per crear coreografies per als elfs. Per\xF2 ves amb compte: a mesura que vagis millorant, els balls seran m\xE9s dif\xEDcils."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Descobreix com es viuen les festes arreu del m\xF3n",
    body: "Aquestes festes s\xF3n molt diferents segons el lloc. Descobreix com se celebren arreu del m\xF3n amb molt\xEDssims jocs i activitats de preguntes i respostes."
  },
  cards: [{
    id: 'traditions',
    title: "Tradicions nadalenques",
    body: "Els canadencs porten un casquet de llana mentre que els australians llueixen un banyador. Fes clic als marcadors del mapa per descobrir les tradicions festives de tot el m\xF3n."
  }, {
    id: 'translations',
    title: "Traduccions",
    body: "Des de \"feli\xE7 any nou\" en \xE8lfic fins a \"\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\": apr\xE8n expressions t\xEDpiques d'aquestes festes en idiomes de tot el m\xF3n."
  }, {
    id: 'mercator',
    title: "Concurs de geografia",
    body: "El Pare Noel ha d'anar a molts llocs. Encaixa les siluetes dels pa\xEFsos al mapa en aquest joc de geografia."
  }, {
    id: 'traditionsquiz',
    title: "Joc de preguntes i respostes sobre tradicions t\xEDpiques d'aquestes festes",
    body: "Coneixes la hist\xF2ria del Nadal? Demostra-ho amb un joc de nou preguntes que posar\xE0 a prova els teus coneixements.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Inspira't i crea alguna cosa",
    body: "El llogaret del Pare Noel brilla amb la m\xE0gia de la creativitat. Descobreix jocs per dibuixar, pintar, construir i crear amb tots els teus personatges preferits."
  },
  cards: [{
    id: 'santascanvas',
    title: "El llen\xE7 del Pare Noel",
    body: "Accedeix al paquet creatiu del Pare Noel. Tots els pinzells, els adhesius i les eines tenen un so personalitzat per fer d'aquest joc una experi\xE8ncia visual i auditiva."
  }, {
    id: 'snowbox',
    title: "Zona de proves nevada",
    body: "Experimenta i juga a la teva zona de proves d'hivern. Utilitza materials 3D per construir cases, joguines, ninots de neu, boscos o qualsevol altra cosa que puguis imaginar."
  }, {
    id: 'elfmaker',
    title: "Creador d'elfs",
    body: "Dissenya el teu propi elf de cap a peus i assegura't que quedi el(f)egant per a totes les festes nadalenques que se celebren al pol Nord."
  }, {
    id: 'santaselfie',
    title: "La selfie del Pare Noel",
    body: "El Pare Noel \xE9s a la barberia i necessita ajuda per canviar d'estil. Canvia-li el color de la barba, decora-li-la, eixuga-li els cabells o afaita'l del tot amb una maquineta d'afaitar."
  }]
}, {
  id: 'family',
  heading: {
    title: "Passa temps en fam\xEDlia",
    body: "Prepara crispetes i tapa't amb una manta ben calenteta. Pots veure tota la colla a la gran pantalla del cinema del llogaret o llegir un llibre interactiu sobre com el narval Ollie celebra el Nadal sota el mar."
  },
  cards: [{
    id: 'storybook',
    title: "L'Ollie sota el mar",
    body: "Els nostres amics del llogaret s'uneixen al narval Ollie per passar un dia sota el mar preparant la primera festa anual d'enllumenat d'algues."
  }, {
    id: 'museum',
    title: "Un dia al museu",
    body: "Visita el Museu de l'esperit festiu en companyia dels elfs, rens i del Pare i de la Mare Noel!"
  }, {
    id: 'carpool',
    title: "El cotxe dels elfs",
    body: "Hi ha diversos elfs, rens i homenets taronja que exploren el pol Nord. Mira com van d'un lloc a un altre."
  }, {
    id: 'liftoff',
    title: "L'enlairament del Pare Noel",
    body: "El Pare Noel i els seus rens ja ho tenen tot llest; nom\xE9s necessiten l'ajuda dels elfs programadors abans d'emprendre el vol."
  }]
}];
const cta = "Aprenentatge";
const ageLabel = "Totes les edats";
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