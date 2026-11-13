import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Aprenda a programar com os elfos do Pai Natal",
    body: "Os elfos est\xE3o sempre a trabalhar nas suas capacidades de programa\xE7\xE3o. Explore jogos que ensinam as no\xE7\xF5es b\xE1sicas. Todos podem experimentar a programa\xE7\xE3o!"
  },
  cards: [{
    id: 'codelab',
    title: "Laborat\xF3rio de C\xF3digos",
    body: "Utilize os princ\xEDpios b\xE1sicos da programa\xE7\xE3o para conduzir o elfo atrav\xE9s da floresta e encontre os presentes que a\xED foram deixados."
  }, {
    id: 'codeboogie',
    title: "Baile de c\xF3digo",
    body: "Os elfos est\xE3o de volta \xE0s aulas de programa\xE7\xE3o e v\xE3o dan\xE7ar ao mesmo tempo tamb\xE9m! Utilize c\xF3digo para coreografar a dan\xE7a dos elfos, mas tenha cuidado. \xC0 medida que melhora, as dan\xE7as ficam mais dif\xEDceis!"
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Descubra a \xE9poca festiva em todo o mundo",
    body: "As Festas variam muito de local para local. Saiba como \xE9 que o mundo celebra esta \xE9poca do ano com v\xE1rios jogos e question\xE1rios."
  },
  cards: [{
    id: 'traditions',
    title: "Tradi\xE7\xF5es Festivas",
    body: "Desde usar um gorro no Canad\xE1 a cal\xE7\xF5es de banho na Austr\xE1lia, clique nos alfinetes do mapa para conhecer as tradi\xE7\xF5es das Festas em todo o mundo."
  }, {
    id: 'translations',
    title: "Tradu\xE7\xF5es",
    body: "Desde \"Feliz Ano Novo\" em \xE9lfico a \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, aprenda as frases t\xEDpicas desta altura do ano de todo o mundo."
  }, {
    id: 'mercator',
    title: "Question\xE1rio do mapa",
    body: "O Pai Natal tem de ir a muitos s\xEDtios. Fa\xE7a corresponder o contorno do pa\xEDs ao mapa neste jogo de geografia."
  }, {
    id: 'traditionsquiz',
    title: "Question\xE1rio de tradi\xE7\xF5es natal\xEDcias",
    body: "Conhece a hist\xF3ria do Natal? Este question\xE1rio de nove perguntas vai testar os seus conhecimentos de cultura geral.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Inspire-se e crie alguma coisa",
    body: "A aldeia do Pai Natal prospera com a magia da cria\xE7\xE3o. Descubra jogos que lhe permitem desenhar, pintar, construir e criar com todas as suas personagens favoritas."
  },
  cards: [{
    id: 'santascanvas',
    title: "Tela do Pai Natal",
    body: "Use o pacote criativo do Pai Natal. Cada ferramenta, pincel e autocolante tem um som personalizado, que cria uma experi\xEAncia sonora e visual."
  }, {
    id: 'snowbox',
    title: "Caixa de neve",
    body: "Experimente e divirta-se no seu pr\xF3prio parque de divers\xF5es de inverno. Utilize materiais em 3D para construir o que quiser: casas, bonecos de neve, florestas ou tudo o que conseguir imaginar."
  }, {
    id: 'elfmaker',
    title: "Criador de elfos",
    body: "Crie o seu pr\xF3prio elfo da cabe\xE7a aos p\xE9s e certifique-se de que est\xE1 vestido a rigor para as muitas celebra\xE7\xF5es natal\xEDcias a decorrer no Polo Norte."
  }, {
    id: 'santaselfie',
    title: "Selfie do Pai Natal",
    body: "O Pai Natal est\xE1 na barbearia e precisa de ajuda para escolher um novo penteado. Pinte a barba do Pai Natal, seque o seu cabelo e adicione decora\xE7\xF5es ou rape-lhe o cabelo com a m\xE1quina zero."
  }]
}, {
  id: 'family',
  heading: {
    title: "Tempo em fam\xEDlia",
    body: "Fa\xE7a as pipocas e tape-se com um cobertor quentinho. Pode ver a equipa completa no grande ecr\xE3 no cinema da Aldeia ou ler um livro de hist\xF3rias interativo enquanto Ollie, o Narval, celebra o Natal debaixo de \xE1gua."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie Debaixo do Mar",
    body: "Os nossos amigos da Aldeia juntam-se a Ollie, o Narval, para um dia debaixo de \xE1gua, enquanto criam a primeira celebra\xE7\xE3o anual de ilumina\xE7\xE3o com algas."
  }, {
    id: 'museum',
    title: "Um dia no museu",
    body: "Junte-se aos elfos, \xE0s renas, ao Pai Natal e \xE0 M\xE3e Natal numa visita ao Museu da \xC9poca Festiva!"
  }, {
    id: 'carpool',
    title: "Carro dos gnomos",
    body: "Existem muitos elfos, renas e Pegman para transportar pelo P\xF3lo Norte. Veja como v\xE3o de um lado para o outro."
  }, {
    id: 'liftoff',
    title: "Descolagem do Pai Natal",
    body: "O Pai Natal e as renas est\xE3o prontos, mas precisam de alguma ajuda dos elfos da programa\xE7\xE3o antes da descolagem."
  }]
}];
const cta = "Conhecer";
const ageLabel = "Todas as idades";
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