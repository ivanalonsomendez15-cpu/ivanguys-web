import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Leer saam met Kersvader se elwe hoe om te kodeer",
    body: "Die elwe werk altyd aan hul koderingvaardighede. Verken speletjies wat vir jou die basiese beginsels sal leer. Enigeen kan kodering probeer!"
  },
  cards: [{
    id: 'codelab',
    title: "Kodelaboratorium",
    body: "Gebruik basiese koderingbeginsels om die elf deur die woud te navigeer om presente op te spoor wat laat val is."
  }, {
    id: 'codeboogie',
    title: "Kode-Boogie",
    body: "Die elwe is weer besig met koderingsoefening terwyl hulle dit met hul dansvaardighede meng. Gebruik kode om die elwe se danse te choreografeer. Maar pasop: Soos jy beter raak, raak die danse al moeiliker!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Ontdek feestye regoor die w\xEAreld",
    body: "Die feestyd kan van plek tot plek baie verskillend lyk. Vind uit hoe die w\xEAreld die feestyd met volop speletjies en vasvrawedstryde vier."
  },
  cards: [{
    id: 'traditions',
    title: "Vakansietradisies",
    body: "Van 'n toque dra in Kanada tot spog met 'n swembroek in Australi\xEB \u2026 klik op die kaartspeldjies om meer oor feestydtradisies regoor die w\xEAreld te wete te kom."
  }, {
    id: 'translations',
    title: "Vertalings",
    body: "Van Voorspoedige Nuwejaar in Elwetaal tot \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, kan jy die vreemde feestydtaal van regoor die w\xEAreld leer."
  }, {
    id: 'mercator',
    title: "Kaartvasvra",
    body: "Kersvader het baie plekke waarheen hy moet gaan. Pas die buitelyn van 'n land by die kaart in hierdie aardrykskundespeletjie."
  }, {
    id: 'traditionsquiz',
    title: "Vasvra oor feestydtradisies",
    body: "Ken jy jou feestydgeskiedenis? Wys hoe goed jy is in 'n 9-vraagvasvra wat beslis jou triviavaardighede gaan toets.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Raak ge\xEFnspireer en skep iets",
    body: "Kersvader se dorpie floreer op die wonder van maak. Ontdek speletjies wat jou met al jou gunstelingkarakters laat teken, verf, bou en skep."
  },
  cards: [{
    id: 'santascanvas',
    title: "Kersvader se skilderdoek",
    body: "Skakel in by Kersvader se eie skeppende suite. Elke stuk gereedskap, kwas en plakker het 'n gepasmaakte klank wat hiervan 'n visuele en oudio-ervaring maak."
  }, {
    id: 'snowbox',
    title: "Sneeuput",
    body: "Eksperimenteer en speel in jou eie wintersandput. Gebruik 3D-materiaal om enigiets te bou: huise, speelgoed, sneeumense, woude of enigiets anders wat jy kan optower."
  }, {
    id: 'elfmaker',
    title: "Elf-maker",
    body: "Bou jou eie elf van kop tot tone en maak seker dit lyk elftasties vir die vele feestydpartytjies wat in die Noordpool gaan plaasvind."
  }, {
    id: 'santaselfie',
    title: "Kersvader-selfie",
    body: "Kersvader is by die haarkapper en hy het hulp nodig om 'n splinternuwe kapsel te kry. Gee sy baard kleur, blaas sy hare droog, voeg 'n bietjie versierings by of skeer alles met die skeermasjien af."
  }]
}, {
  id: 'family',
  heading: {
    title: "Kom bymekaar vir gesinstyd",
    body: "Gryp die springmielies en kruip in onder 'n snoesige kombers. Jy kan vir die hele spul op die grootskerm by die dorpie se bioskoop gaan kyk of saamlees in 'n interaktiewe storieboek terwyl Ollie die eenhoringvis die feestyd onder die see vier."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie onder die see",
    body: "Ons dorpievriende sluit aan by Ollie die eenhoringvis vir 'n dag onder die water terwyl hulle die eerste jaarlikse seegrasliggieviering aanmekaarsit."
  }, {
    id: 'museum',
    title: "'n Dag by die museum",
    body: "Sluit aan by die elwe, rendiere, Kersvader en mev. Kersvader op 'n besoek aan die Museum van Feestydvreugde!"
  }, {
    id: 'carpool',
    title: "Elfkar",
    body: "Daar's baie elwe, rendiere en penmannetjies wat in die Noordpool rondgependel moet word. Kyk hoe hulle van plek tot plek navigeer."
  }, {
    id: 'liftoff',
    title: "Kersvader se opstyg",
    body: "Kersvader en die rendiere is gereed om te vertrek maar hulle benodig 'n bietjie hulp van die koderingelwe voor hulle kan opstyg."
  }]
}];
const cta = "Leer";
const ageLabel = "Alle ouderdomme";
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