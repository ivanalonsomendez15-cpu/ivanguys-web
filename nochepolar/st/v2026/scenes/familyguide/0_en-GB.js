import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Learn to code with Santa's elves",
    body: "The elves are always working on their coding skills. Explore games that will teach you the basics. Anyone can try their hand at coding!"
  },
  cards: [{
    id: 'codelab',
    title: "Code Lab",
    body: "Use coding fundamentals to navigate the elf through the forest to find dropped presents."
  }, {
    id: 'codeboogie',
    title: "Code Boogie",
    body: "The elves are back to coding practice, while mixing in their dancing skills. Use code to choreograph the elves' dances, but watch out \u2013 as you get better, the dances get harder!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Discover holidays around the world",
    body: "The festive season can look quite different from place to place. Learn how the world celebrates the season with games and quizzes galore."
  },
  cards: [{
    id: 'traditions',
    title: "Christmas Traditions",
    body: "From wearing a toque in Canada to sporting swimming trunks in Australia, click the map pins to learn about festive traditions around the globe."
  }, {
    id: 'translations',
    title: "Translations",
    body: "From Happy New Year in Elvish to \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, learn the seasonal lingo from around the world."
  }, {
    id: 'mercator',
    title: "Map Quiz",
    body: "Santa's got a lot of places to go. Match the outline of a country to the map in this geography game."
  }, {
    id: 'traditionsquiz',
    title: "Festive Traditions Quiz",
    body: "Do you know your holiday history? Show your stuff in a nine-question quiz that's sure to test your trivia skills.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Get inspired and create something",
    body: "Santa's Village thrives on the magic of making. Discover games that let you draw, paint, build and create with all your favourite characters."
  },
  cards: [{
    id: 'santascanvas',
    title: "Santa's Canvas",
    body: "Tap into Santa's very own creative suite. Each tool, brush and sticker has a custom sound, making this an audio and visual experience."
  }, {
    id: 'snowbox',
    title: "Snowbox",
    body: "Experiment and play in your own wintery sandbox. Use 3D materials to build anything: houses, toys, snowpeople, forests or anything else that you can dream up."
  }, {
    id: 'elfmaker',
    title: "Elf Maker",
    body: "Build your own elf from head to toe and make sure that it looks elf-tastic for the many festive soir\xE9es happening on the North Pole."
  }, {
    id: 'santaselfie',
    title: "Santa Selfie",
    body: "Santa is in the barber's and he needs help getting a whole new 'do. Colour his beard, blow-dry his hair, add some decorations or shave it all off with the clippers."
  }]
}, {
  id: 'family',
  heading: {
    title: "Come together for family time",
    body: "Grab the popcorn and snuggle in under a cosy blanket. You can catch the whole gang on the big screen at the Village cinema or read along with an interactive storybook as Ollie the Narwhal celebrates the festive season under the sea."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie Under the Sea",
    body: "Our Village friends join Ollie the narwhal for a day underwater as they put together the first annual kelp lighting celebration."
  }, {
    id: 'museum',
    title: "A Day at the Museum",
    body: "Join the elves, reindeer, Santa and Mrs Claus on a visit to the Museum of Holiday Cheer!"
  }, {
    id: 'carpool',
    title: "Elf Car",
    body: "There's many an elf, reindeer and Pegman to shuttle around the North Pole. Watch how they navigate from place to place."
  }, {
    id: 'liftoff',
    title: "Santa's Takeoff",
    body: "Santa and the reindeer are ready to go but they need a little help from the coding elves before takeoff."
  }]
}];
const cta = "Learn";
const ageLabel = "All Ages";
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