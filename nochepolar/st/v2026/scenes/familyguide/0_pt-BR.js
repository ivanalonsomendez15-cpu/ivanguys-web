import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Aprenda a programar com os elfos do Papai Noel",
    body: "Os elfos est\xE3o sempre aprimorando as habilidades de programa\xE7\xE3o deles. Curta jogos que v\xE3o ensinar os princ\xEDpios b\xE1sicos a voc\xEA. Todos podem se aventurar na programa\xE7\xE3o."
  },
  cards: [{
    id: 'codelab',
    title: "Laborat\xF3rio de c\xF3digos",
    body: "Use os conceitos b\xE1sicos sobre programa\xE7\xE3o para guiar o elfo pela floresta e, assim, encontrar presentes perdidos."
  }, {
    id: 'codeboogie',
    title: "Dan\xE7a dos c\xF3digos",
    body: "Os elfos voltaram a praticar programa\xE7\xE3o enquanto aprimoram as habilidades de dan\xE7a. Use os c\xF3digos para criar coreografias para as dan\xE7as dos elfos, mas lembre-se: quanto melhor voc\xEA ficar, mais dif\xEDceis ser\xE3o as dan\xE7as."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Descubra como \xE9 o Natal ao redor do mundo.",
    body: "O Natal pode ser diferente dependendo do lugar. Saiba como o mundo comemora a \xE9poca natalina na galeria de jogos e testes."
  },
  cards: [{
    id: 'traditions',
    title: "Tradi\xE7\xF5es de fim de ano",
    body: "Enquanto as pessoas do Canad\xE1 usam gorro, as da Austr\xE1lia usam roupa de banho. Clique nos marcadores no mapa para conhecer as tradi\xE7\xF5es de fim de ano ao redor do mundo."
  }, {
    id: 'translations',
    title: "Tradu\xE7\xF5es",
    body: "De Feliz Ano Novo em \xC9lfico at\xE9 \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, aprenda os jarg\xF5es sobre esta \xE9poca do ano de todos os lugares do mundo."
  }, {
    id: 'mercator',
    title: "Teste do mapa",
    body: "O Papai Noel tem muitos lugares para visitar. Corresponda a forma dos pa\xEDses no mapa neste jogo geogr\xE1fico."
  }, {
    id: 'traditionsquiz',
    title: "Teste sobre tradi\xE7\xF5es de fim de ano",
    body: "Voc\xEA sabe qual \xE9 sua hist\xF3ria de natal? Mostre suas habilidades neste teste de nove perguntas que, com certeza, testar\xE1 seus conhecimentos gerais.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Inspire-se e crie algo",
    body: "A vila do Papai Noel prospera com a m\xE1gica de fazer acontecer. Conhe\xE7a jogos de desenhar, colorir, construir e criar com todos os seus personagens favoritos."
  },
  cards: [{
    id: 'santascanvas',
    title: "Tela do Papai Noel",
    body: "Toque no pacote de cria\xE7\xE3o do Papai Noel. Cada ferramenta, pincel e adesivo tem um som personalizado, o que torna a experi\xEAncia audiovisual."
  }, {
    id: 'snowbox',
    title: "Caixa de neve",
    body: "Curta e jogue no seu pr\xF3prio sandbox de inverno. Use os materiais 3D para criar casas, brinquedos, bonecos de neve, florestas ou qualquer outra coisa que voc\xEA imaginar."
  }, {
    id: 'elfmaker',
    title: "Criador de duendes",
    body: "Crie seu pr\xF3prio duende da cabe\xE7a aos p\xE9s. N\xE3o se esque\xE7a de deix\xE1-lo duent\xE1stico para que ele arrase nas festas natalinas que acontecem no Polo Norte."
  }, {
    id: 'santaselfie',
    title: "Selfie do Papai Noel",
    body: "O Papai Noel est\xE1 na barbearia e precisa da sua ajuda para mudar o visual. Pinte a barba dele, seque o cabelo, adicione decora\xE7\xF5es ou raspe tudo com m\xE1quinas de cortar cabelo."
  }]
}, {
  id: 'family',
  heading: {
    title: "Re\xFAnam-se para passar tempo com a fam\xEDlia",
    body: "Prepare a pipoca e se aconchegue em um cobertor quentinho. Voc\xEA pode assistir toda a turma nas telonas do cinema da vila ou ler hist\xF3rias interativas enquanto Ollie, a baleia narval, comemora a \xE9poca natalina no mar."
  },
  cards: [{
    id: 'storybook',
    title: "As aventuras da baleia Ollie",
    body: "Nossos amigos da vila se juntam \xE0 Ollie, a baleia narval, para um dia embaixo d'\xE1gua enquanto organizam a primeira comemora\xE7\xE3o anual das algas."
  }, {
    id: 'museum',
    title: "Um dia no museu",
    body: "Junte-se aos elfos, \xE0s renas, ao Papai Noel e \xE0 Mam\xE3e Noel em uma visita ao museu do esp\xEDrito natalino."
  }, {
    id: 'carpool',
    title: "Carro dos duendes",
    body: "H\xE1 muitos elfos, renas e Pegmans para transportar pelo Polo Norte. Veja como eles viajam de um lugar para o outro."
  }, {
    id: 'liftoff',
    title: "Decolagem do Papai Noel",
    body: "O Papai Noel e as renas j\xE1 est\xE3o preparados para decolar, mas antes disso precisam de uma ajudinha dos elfos programadores."
  }]
}];
const cta = "Aprender";
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