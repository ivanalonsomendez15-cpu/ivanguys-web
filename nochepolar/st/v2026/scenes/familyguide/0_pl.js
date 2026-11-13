import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Naucz si\u0119 programowania z elfami \u015Awi\u0119tego Miko\u0142aja",
    body: "Elfy nieustannie rozwijaj\u0105 swoje umiej\u0119tno\u015Bci programowania. Odkryj gry, kt\xF3re naucz\u0105 Ci\u0119 podstaw. Ka\u017Cdy mo\u017Ce spr\xF3bowa\u0107 swoich si\u0142 w kodowaniu!"
  },
  cards: [{
    id: 'codelab',
    title: "Programowanie trasy",
    body: "Wykorzystaj podstawow\u0105 wiedz\u0119 z programowania, by przeprowadzi\u0107 elfa przez las i pom\xF3c mu znale\u017A\u0107 rozrzucone prezenty."
  }, {
    id: 'codeboogie',
    title: "Kodowanie w\xA0rytmie boogie",
    body: "Elfy wr\xF3ci\u0142y do \u0107wicze\u0144 z kodowania, dok\u0142adaj\u0105c do nich swoje zdolno\u015Bci taneczne. U\u017Cyj kodu, by przygotowa\u0107 choreografi\u0119 elfich ta\u0144c\xF3w, ale uwaga \u2013 im lepiej b\u0119dzie Ci sz\u0142o, tym ta\u0144ce b\u0119d\u0105 trudniejsze!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Poznaj \u015Bwi\u0119ta na ca\u0142ym \u015Bwiecie",
    body: "\u015Awi\u0119ta mog\u0105 wygl\u0105da\u0107 bardzo r\xF3\u017Cnie w r\xF3\u017Cnych miejscach. Z tego zbioru gier i quiz\xF3w dowiesz si\u0119, jak obchodzi si\u0119 te dni na ca\u0142ym \u015Bwiecie."
  },
  cards: [{
    id: 'traditions',
    title: "\u015Awi\u0105teczne tradycje",
    body: "Klikaj pinezki na mapie, by pozna\u0107 \u015Bwi\u0105teczne tradycje z ca\u0142ego \u015Bwiata \u2013 od noszenia czapek w Kanadzie po przechadzanie si\u0119 w k\u0105piel\xF3wkach w Australii."
  }, {
    id: 'translations',
    title: "T\u0142umaczenia",
    body: "Naucz si\u0119 \u015Bwi\u0105tecznych zwrot\xF3w z ca\u0142ego \u015Bwiata \u2013 od \u201ESzcz\u0119\u015Bliwego Nowego Roku\u201D w j\u0119zyku elf\xF3w po \u201E\u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437\u201D."
  }, {
    id: 'mercator',
    title: "Quiz z\xA0mapami",
    body: "\u015Awi\u0119ty Miko\u0142aj musi odwiedzi\u0107 wiele miejsc. Ta gra geograficzna polega na dopasowywaniu kontur\xF3w kraj\xF3w do odpowiednich miejsc na mapie."
  }, {
    id: 'traditionsquiz',
    title: "Quiz na temat tradycji \u015Bwi\u0105tecznych",
    body: "Czy znasz histori\u0119 \u015Bwi\u0105t? Pochwal si\u0119 wiedz\u0105 w z\u0142o\u017Conym z dziewi\u0119ciu pyta\u0144 quizie.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Poszukaj w sobie natchnienia i stw\xF3rz co\u015B ciekawego",
    body: "Magia tworzenia sprawia, \u017Ce wioska \u015Awi\u0119tego Miko\u0142aja rozkwita. Odkryj gry, w kt\xF3rych razem z ulubionymi postaciami mo\u017Cesz rysowa\u0107, malowa\u0107, budowa\u0107 i tworzy\u0107 r\xF3\u017Cne rzeczy."
  },
  cards: [{
    id: 'santascanvas',
    title: "Obraz Miko\u0142aja",
    body: "U\u017Cyj tego samego pakietu kreatywnego, z kt\xF3rego korzysta \u015Awi\u0119ty Miko\u0142aj. Ka\u017Cdy przyb\xF3r, p\u0119dzel i ka\u017Cda naklejka wydaje w\u0142asny d\u017Awi\u0119k, dodaj\u0105c doznania d\u017Awi\u0119kowe do wizualnych."
  }, {
    id: 'snowbox',
    title: "\u015Anie\u017Cne klocki",
    body: "Eksperymentuj i baw si\u0119 we w\u0142asnej zimowej piaskownicy. U\u017Cywaj tr\xF3jwymiarowych materia\u0142\xF3w, by tworzy\u0107, co tylko zechcesz: domy, zabawki, ba\u0142wany, lasy i inne rzeczy, jakie Ci przyjd\u0105 do g\u0142owy."
  }, {
    id: 'elfmaker',
    title: "Kreator elf\xF3w",
    body: "stw\xF3rz w\u0142asnego elfa od st\xF3p do g\u0142\xF3w i zadbaj, by wygl\u0105da\u0142 elfiastycznie podczas wszystkich wieczork\xF3w towarzyskich organizowanych na biegunie."
  }, {
    id: 'santaselfie',
    title: "Selfie \u015Awi\u0119tego Miko\u0142aja",
    body: "\u015Awi\u0119ty Miko\u0142aj wybra\u0142 si\u0119 do fryzjera, by zrobi\u0107 sobie now\u0105 fryzur\u0119. Pokoloruj mu brod\u0119, wysusz w\u0142osy, dodaj ozdoby \u2013 albo przytnij wszystko maszynk\u0105."
  }]
}, {
  id: 'family',
  heading: {
    title: "Ca\u0142a rodzina razem",
    body: "Z\u0142ap popcorn i u\u0142\xF3\u017C si\u0119 wygodnie pod ciep\u0142ym kocem. Mo\u017Cesz ogl\u0105da\u0107 ca\u0142\u0105 band\u0119 na du\u017Cym ekranie w wioskowym kinie lub czyta\u0107 z interaktywnej ksi\u0105\u017Ceczki opowie\u015B\u0107 o tym, jak narwal Ollie obchodzi \u015Bwi\u0119ta w morskich g\u0142\u0119binach."
  },
  cards: [{
    id: 'storybook',
    title: "Podwodne przygody Olliego",
    body: "Nasi przyjaciele z wioski przy\u0142\u0105czaj\u0105 si\u0119 do narwala Olliego, by wsp\xF3lnie sp\u0119dzi\u0107 dzie\u0144 pod wod\u0105 i przygotowa\u0107 doroczne uroczyste zapalanie \u015Bwiate\u0142ek w\u015Br\xF3d wodorost\xF3w."
  }, {
    id: 'museum',
    title: "Dzie\u0144 w muzeum",
    body: "Do\u0142\u0105cz do elf\xF3w, renifera, \u015Awi\u0119tego Miko\u0142aja i Pani Miko\u0142ajowej podczas wizyty w Muzeum \u015Awi\u0105tecznej Rado\u015Bci!"
  }, {
    id: 'carpool',
    title: "Samoch\xF3d elf\xF3w",
    body: "W okolicach bieguna p\xF3\u0142nocnego kr\u0119ci si\u0119 wiele elf\xF3w, renifer\xF3w i Pegman\xF3w. Obserwuj, jak przemieszczaj\u0105 si\u0119 z miejsca na miejsce."
  }, {
    id: 'liftoff',
    title: "\u015Awi\u0119ty Miko\u0142aj odlatuje",
    body: "\u015Awi\u0119ty Miko\u0142aj i renifer s\u0105 gotowi do drogi, ale zanim wyrusz\u0105, potrzebuj\u0105 pomocy koduj\u0105cych elf\xF3w."
  }]
}];
const cta = "Ciekawostki";
const ageLabel = "Bez ogranicze\u0144 wiekowych";
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