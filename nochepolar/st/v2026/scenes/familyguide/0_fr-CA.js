import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Apprendre \xE0 coder avec les lutins du p\xE8re No\xEBl",
    body: "Les lutins travaillent toujours \xE0 am\xE9liorer leurs habilet\xE9s \xE0 coder. Explore des jeux qui t'enseigneront les notions de base. Tout le monde peut essayer de coder!"
  },
  cards: [{
    id: 'codelab',
    title: "Labo de code",
    body: "Utilise les notions de base du codage pour guider le lutin dans la for\xEAt et trouver des cadeaux."
  }, {
    id: 'codeboogie',
    title: "Danse du code",
    body: "Les lutins sont de retour \xE0 leur exercice de codage, tout en y m\xEAlant leurs talents de danseurs. Utilise du code pour chor\xE9graphier les danses des lutins. Mais attention\xA0: plus tu t'am\xE9liores, plus les danses deviennent difficiles!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "D\xE9couvrir les f\xEAtes autour du monde",
    body: "Les f\xEAtes peuvent \xEAtre tr\xE8s diff\xE9rentes d'un endroit \xE0 l'autre. Apprends comment le monde c\xE9l\xE8bre les f\xEAtes avec une foule de jeux et de questionnaires."
  },
  cards: [{
    id: 'traditions',
    title: "Traditions des F\xEAtes",
    body: "Du port de la tuque au Canada \xE0 celui du maillot de bain en Australie, clique sur les \xE9pingles de la carte pour en savoir plus sur les traditions des f\xEAtes autour du monde."
  }, {
    id: 'translations',
    title: "Traductions",
    body: "De Bonne ann\xE9e en elfique \xE0 \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, apprends les expressions des f\xEAtes de partout au monde."
  }, {
    id: 'mercator',
    title: "Quiz g\xE9o",
    body: "Le p\xE8re No\xEBl a de nombreux endroits \xE0 visiter. Associe le contour d'un pays avec la carte dans ce jeu de g\xE9ographie."
  }, {
    id: 'traditionsquiz',
    title: "Jeu-questionnaire sur les traditions des f\xEAtes",
    body: "Connais-tu l'histoire des f\xEAtes? Montre tes connaissances dans un jeu-questionnaire en neuf questions qui mettra tes habilet\xE9s \xE0 l'\xE9preuve.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Trouver l'inspiration et cr\xE9er quelque chose",
    body: "Le village du p\xE8re No\xEBl prosp\xE8re dans la magie de la cr\xE9ation. D\xE9couvre des jeux qui te permettent de dessiner, de peindre, de construire et de cr\xE9er avec tous tes personnages favoris."
  },
  cards: [{
    id: 'santascanvas',
    title: "La toile du p\xE8re No\xEBl",
    body: "D\xE9couvre la propre suite cr\xE9ative du p\xE8re No\xEBl. Chaque outil, brosse et autocollant est accompagn\xE9 d'un son personnalis\xE9, ce qui permet de cr\xE9er une exp\xE9rience audio et visuelle."
  }, {
    id: 'snowbox',
    title: "Bac \xE0 neige",
    body: "Fais des d\xE9couvertes et joue dans ton propre carr\xE9 de sable hivernal. Utilise des mat\xE9riaux en 3D pour construire tout ce qui te chante\xA0: des maisons, des jouets, des bonhommes de neige, des for\xEAts ou n'importe quoi d'autre qui te fait r\xEAver."
  }, {
    id: 'elfmaker',
    title: "Cr\xE9ateur de lutin",
    body: "Cr\xE9ez votre propre lutin des pieds \xE0 la t\xEAte et assurez-lui un look \xAB\xA0farfastique\xA0\xBB pour les nombreuses soir\xE9es des f\xEAtes qui ont lieu au p\xF4le Nord."
  }, {
    id: 'santaselfie',
    title: "Autoportrait du p\xE8re No\xEBl",
    body: "Le p\xE8re No\xEBl est chez le coiffeur et il a besoin d'aide pour obtenir une toute nouvelle coupe. Colore sa barbe, s\xE8che-lui les cheveux, ajoute des d\xE9corations ou rase-le avec la tondeuse."
  }]
}, {
  id: 'family',
  heading: {
    title: "Se rassembler pour du temps en famille",
    body: "Attrape le pop-corn et blottis-toi sous une couverture. Tu peux voir le groupe en entier sur grand \xE9cran au cin\xE9ma du village ou lire un livre de contes pendant qu'Ollie le narval c\xE9l\xE8bre les f\xEAtes sous la mer."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie sous la mer",
    body: "Nos amis du village se joignent \xE0 Ollie le narval pour une journ\xE9e sous l'eau alors qu'ils organisent la premi\xE8re c\xE9l\xE9bration d'illumination des algues."
  }, {
    id: 'museum',
    title: "Une journ\xE9e au mus\xE9e",
    body: "Joins-toi aux lutins, aux rennes, au p\xE8re No\xEBl et \xE0 la m\xE8re No\xEBl pour une visite du Mus\xE9e de la c\xE9l\xE9bration des f\xEAtes!"
  }, {
    id: 'carpool',
    title: "La voiture des lutins",
    body: "Plusieurs lutins et rennes ainsi que Pegman circulent au p\xF4le Nord. Vois comment ils se d\xE9placent d'un endroit \xE0 l'autre."
  }, {
    id: 'liftoff',
    title: "Envol du p\xE8re No\xEBl",
    body: "Le p\xE8re No\xEBl et les rennes sont pr\xEAts \xE0 partir, mais ils ont besoin de l'aide des lutins codeurs avant de s'envoler."
  }]
}];
const cta = "Apprendre";
const ageLabel = "Tous les \xE2ges";
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