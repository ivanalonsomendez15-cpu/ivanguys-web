import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Mit den Weihnachtselfen das Programmieren lernen",
    body: "Die Elfen arbeiten immer an der Verbesserung ihrer Programmierkenntnisse. Hier finden Sie Spiele, bei denen Sie die Grundlagen lernen. Jeder kann programmieren."
  },
  cards: [{
    id: 'codelab',
    title: "Code-Labor",
    body: "Helfen Sie dem Elfen mit grundlegenden Programmierkenntnissen, die im Wald verstreuten Geschenke zu finden."
  }, {
    id: 'codeboogie',
    title: "Code-Boogie",
    body: "Die Elfen \xFCben gerade wieder das Programmieren und tanzen dabei wild herum. Ihre Aufgabe ist es, die Choreografie des Elfentanzes in Code darzustellen. Aber Achtung: Je besser Sie werden, desto schwieriger werden die T\xE4nze!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Festtage auf der ganzen Welt",
    body: "Die Feiertage werden von Land zu Land ganz unterschiedlich begangen. In zahlreichen Spielen und Quizzen erfahren Sie, wie weltweit Weihnachten gefeiert wird."
  },
  cards: [{
    id: 'traditions',
    title: "Weihnachtstraditionen aus aller Welt",
    body: "Die einen tragen eine Pudelm\xFCtze, die anderen einen Badeanzug: Klicken Sie auf die Kartenmarkierungen, um mehr \xFCber Weihnachtstraditionen auf der ganzen Welt zu erfahren."
  }, {
    id: 'translations',
    title: "\xDCbersetzungen",
    body: "Lernen Sie alle wichtigen Redewendungen f\xFCr die Feiertage in verschiedenen Sprachen\xA0\u2013 von \"Frohes neues Jahr\" auf Elfisch bis zu \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437."
  }, {
    id: 'mercator',
    title: "Kartenquiz",
    body: "Der Weihnachtsmann kommt viel herum. Ordnen Sie in diesem Geografiespiel die Umrisse dem richtigen Land auf der Karte zu."
  }, {
    id: 'traditionsquiz',
    title: "Quiz \xFCber Weihnachtstraditionen",
    body: "Kennen Sie sich mit Weihnachten aus? Beantworten Sie neun Fragen, um Ihr Wissen unter Beweis zu stellen.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Sich inspirieren lassen und selbst kreativ werden",
    body: "Im Dorf des Weihnachtsmanns wird flei\xDFig gearbeitet. Entdecken Sie Spiele, bei denen Sie mit Ihren Lieblingscharakteren zeichnen, malen, bauen und gestalten k\xF6nnen."
  },
  cards: [{
    id: 'santascanvas',
    title: "Die Leinwand des Weihnachtsmanns",
    body: "Probieren Sie die Kreativwerkzeuge des Weihnachtsmanns aus. Jedes Tool, jeder Pinsel und jeder Sticker macht ein spezielles Ger\xE4usch, was zu einem audiovisuellen Gesamtkunstwerk f\xFChrt."
  }, {
    id: 'snowbox',
    title: "Schneebox",
    body: "Experimentieren und spielen Sie in Ihrer eigenen winterlichen Schneebox. Mit den verf\xFCgbaren 3D-Materialien k\xF6nnen Sie alles M\xF6gliche bauen: H\xE4user, Spielzeug, Schneemenschen, W\xE4lder oder was auch immer Sie sich gerade vorstellen."
  }, {
    id: 'elfmaker',
    title: "Wichtelkiste",
    body: "Du kannst deinen eigenen Wichtel mit dem perfekten wichteligen Look f\xFCr die Weihnachtspartys am Nordpol entwerfen."
  }, {
    id: 'santaselfie',
    title: "Weihnachtsmann-Selfie",
    body: "Der Weihnachtsmann ist beim Friseur und m\xF6chte einen v\xF6llig neuen Look. F\xE4rben Sie seinen Bart, f\xF6hnen Sie ihm die Haare, schm\xFCcken Sie ihn oder schneiden Sie kurzerhand alles ab."
  }]
}, {
  id: 'family',
  heading: {
    title: "Gemeinsame Zeit mit der Familie",
    body: "Schnappen Sie sich Popcorn und machen Sie es sich auf dem Sofa gem\xFCtlich. Sie k\xF6nnen den Figuren auf der Leinwand im Kino des Weihnachtsdorfs zusehen oder das interaktive Bilderbuch lesen und dabei sein, wie Ollie der Narwal im Meer Weihnachten feiert."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie im Meer",
    body: "Unsere Freunde aus dem Weihnachtsdorf besuchen Ollie den Narwal unter Wasser, um gemeinsam alles f\xFCr die festliche Beleuchtung des Kelpwaldes vorzubereiten."
  }, {
    id: 'museum',
    title: "Ein Tag im Museum",
    body: "Besuchen Sie gemeinsam mit den Elfen, den Rentieren, dem Weihnachtsmann und seiner Frau das Weihnachtsmuseum."
  }, {
    id: 'carpool',
    title: "Der Wichtelwagen",
    body: "Viele Weihnachtselfen, Rentiere und nat\xFCrlich auch Pegman sind am Nordpol unterwegs. Sehen Sie sich an, wie sie von einem Ort zum anderen kommen."
  }, {
    id: 'liftoff',
    title: "Abflug des Weihnachtsmanns",
    body: "Der Weihnachtsmann und die Rentiere sind bereit, aber sie brauchen noch ein wenig Hilfe von den Programmierelfen, bevor es losgehen kann."
  }]
}];
const cta = "Lernen";
const ageLabel = "Jedes Alter";
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