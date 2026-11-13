import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "L\xE6r at kode med julemandens nisser",
    body: "Nisserne arbejder altid p\xE5 at blive bedre til at kode. Pr\xF8v nogle spil, der l\xE6rer dig de grundl\xE6ggende ting. Alle kan pr\xF8ve at kode!"
  },
  cards: [{
    id: 'codelab',
    title: "Kodelaboratorium",
    body: "Brug grundl\xE6ggende kodning til at hj\xE6lpe nissen gennem skoven og finde tabte gaver."
  }, {
    id: 'codeboogie',
    title: "Kodeboogie",
    body: "Nisserne er igen i gang med at kode, og denne gang danser de ogs\xE5. Brug kode til at koreografere nissernes dans \u2013 mens pas p\xE5, efterh\xE5nden som du bliver bedre, bliver dansene sv\xE6rere!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "F\xE5 mere at vide om juletraditioner i hele verden",
    body: "Juledagene er ret forskellige, alt efter hvor i verden man bor. Se, hvordan andre fejrer jul med masser af spil og quizzer."
  },
  cards: [{
    id: 'traditions',
    title: "Juletraditioner",
    body: "Du kan tage en lang hue p\xE5 i Canada eller g\xE5 i badebukser i Australien \u2013 klik p\xE5 mark\xF8rerne p\xE5 kortet for at l\xE6re om juletraditioner rundt omkring i verden."
  }, {
    id: 'translations',
    title: "Overs\xE6ttelser",
    body: "Frag \"godt nyt\xE5r\" p\xE5 nissernes sprog til \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437 \u2013 l\xE6r udtryk til \xE5rstiden fra hele verden."
  }, {
    id: 'mercator',
    title: "Kortquiz",
    body: "Julemanden har mange steder, han skal bes\xF8ge. Find det rette sted til omridset af et land p\xE5 kortet i dette geografispil."
  }, {
    id: 'traditionsquiz',
    title: "Quiz om juletraditioner",
    body: "Kender du historien om helligdagene? Vis dine evner i en quiz med ni sp\xF8rgsm\xE5l, som helt sikkert vil teste din paratviden.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Lad dig inspirere til at skabe noget",
    body: "I Julemandens landsby elsker alle magien ved at skabe. Pr\xF8v spillene, hvor du kan tegne, male, bygge og skabe sammen med dine yndlingsfigurer."
  },
  cards: [{
    id: 'santascanvas',
    title: "Julemandens l\xE6rred",
    body: "Kig ind i julemandens eget kunstneriske v\xE6rksted. Hvert stykke v\xE6rkt\xF8j, hver pensel og hver m\xE6rkat har en tilpasset lyd, der g\xF8r dette til en oplevelse b\xE5de for \xF8jnene og \xF8rerne."
  }, {
    id: 'snowbox',
    title: "Snekasse",
    body: "Du kan eksperimentere og lege i din egen vinterlige sandkasse. Brug 3D-materialer til at bygge alt: Huse, leget\xF8j, snem\xE6nd og -koner, skove eller alt muligt andet, du kan finde p\xE5."
  }, {
    id: 'elfmaker',
    title: "Lav en nisse",
    body: "Byg din egen nisse fra top til t\xE5, og s\xF8rg for, at den ser fantastisk ud til de mange julefester p\xE5 Nordpolen."
  }, {
    id: 'santaselfie',
    title: "Julemandsselfie",
    body: "Julemanden er hos barberen, og han skal have hj\xE6lp til at f\xE5 en helt ny stil. Farv hans sk\xE6g, t\xF8r hans h\xE5r med f\xF8nt\xF8rreren, brug dekorationerne, eller barb\xE9r det hele af med h\xE5rklipperen."
  }]
}, {
  id: 'family',
  heading: {
    title: "Hyg dig sammen med familien",
    body: "S\xE6t dig godt til rette med popcorn og et t\xE6ppe. Du kan se hele sl\xE6nget p\xE5 det store l\xE6rred i landsbyens biograf, eller du kan l\xE6se en interaktiv eventyrbog om narhvalen Ollie, der holder jul under havet."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie under havet",
    body: "Vores venner fra landsbyen tager med narhvalen Ollie ned under havet for en dag, n\xE5r de holder lysfest i tangen for f\xF8rste gang."
  }, {
    id: 'museum',
    title: "En dag p\xE5 museet",
    body: "Tag en tur med nisserne, julemanden og hans kone p\xE5 Julemuseet!"
  }, {
    id: 'carpool',
    title: "Nissebil",
    body: "Der er mange nisser, rensdyr og pegmen, som skal hj\xE6lpes rundt p\xE5 Nordpolen. Se, hvordan de finder vej fra sted til sted."
  }, {
    id: 'liftoff',
    title: "Julemandens afgang",
    body: "Julemanden og hans rensdyr er klar til at drage afsted, men de har brug for lidt hj\xE6lp fra kodenisserne, f\xF8r de flyver."
  }]
}];
const cta = "Quiz";
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