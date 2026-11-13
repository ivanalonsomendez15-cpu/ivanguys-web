import { s as sceneApi } from '../../_e310d67a.js';
import { h as href, e as rectify } from '../../_e1311d95.js';
const models = [{
  id: 'code',
  heading: {
    title: "Belajar membuat kode bersama Kurcaci Sinterklas",
    body: "Kurcaci selalu berupaya meningkatkan kemampuan coding mereka. Temukan game yang akan mengajari Anda dasar-dasarnya. Siapa pun bisa mencoba coding!"
  },
  cards: [{
    id: 'codelab',
    title: "Lab Kode",
    body: "Gunakan dasar-dasar coding untuk menuntun kurcaci melalui hutan dan menemukan hadiah yang dijatuhkan."
  }, {
    id: 'codeboogie',
    title: "Tarian Kode",
    body: "Para kurcaci kembali berlatih coding, sambil menampilkan kemampuan menari mereka. Gunakan kode untuk mengatur koreografi tarian kurcaci - tetapi bersiaplah, karena makin jago Anda, makin sulit pula tarian mereka."
  }]
}, {
  id: 'celebrate',
  heading: {
    title: "Temukan perayaan Natal di seluruh dunia",
    body: "Perayaan Natal bisa cukup berbeda dari satu tempat ke tempat lain. Pelajari bagaimana dunia merayakan Natal dengan banyak sekali game dan kuis."
  },
  cards: [{
    id: 'traditions',
    title: "Tradisi Liburan",
    body: "Mulai dari mengenakan toque di Kanada hingga memakai celana renang di Australia, klik pin peta untuk mempelajari tradisi perayaan Natal di seluruh dunia."
  }, {
    id: 'translations',
    title: "Terjemahan",
    body: "Mulai dari ucapan Selamat Tahun Baru dalam bahasa Elvish hingga \u0414\u0435\u0434 \u041C\u043E\u0440\u043E\u0437, pelajari ungkapan seputar perayaan Natal dan Tahun Baru dari seluruh dunia."
  }, {
    id: 'mercator',
    title: "Kuis Peta",
    body: "Ada banyak tempat yang akan dikunjungi Sinterklas. Cocokkan garis negara dengan peta di game geografi ini."
  }, {
    id: 'traditionsquiz',
    title: "Kuis Tradisi Natal",
    body: "Apakah Anda tahu sejarah Natal dan Tahun Baru Anda? Tunjukkan keahlian Anda bermain kuis dengan sembilan pertanyaan yang akan menguji kemampuan Anda bermain tebak-tebakan.",
    href: 'https://earth.google.com/web/@43.129579,-112.010821,1838a,2269637d,35y,0.00000182h,0.4t,0r/data=CisSKRIgZDRkYTI4YTFkMmYwMTFlODk2YTFjZDc4YmJiZmMxYTkiBXNwbC0w'
  }]
}, {
  id: 'create',
  heading: {
    title: "Dapatkan inspirasi dan berkreasilah",
    body: "Desa Sinterklas dipenuhi kreasi-kreasi ajaib. Temukan game yang memungkinkan Anda menggambar, melukis, membangun, dan berkreasi dengan semua karakter favorit Anda."
  },
  cards: [{
    id: 'santascanvas',
    title: "Kanvas Sinterklas",
    body: "Manfaatkan perangkat kreatif milik Sinterklas. Setiap alat, kuas, dan stiker memiliki suara khusus, sehingga memberikan pengalaman audio dan visual."
  }, {
    id: 'snowbox',
    title: "Snowbox",
    body: "Lakukan eksperimen dan bermainlah dengan sandbox musim dingin Anda sendiri. Gunakan material 3D untuk membangun berbagai hal: rumah, mainan, manusia salju, hutan, atau hal lain yang dapat Anda bayangkan."
  }, {
    id: 'elfmaker',
    title: "Pembuat Kurcaci",
    body: "Buat kurcaci Anda sendiri, dari ujung kepala hingga ujing kaki, dan pastikan dandanannya sudah kuren untuk menghadiri berbagai pesta liburan yang diadakan di Kutub Utara."
  }, {
    id: 'santaselfie',
    title: "Selfie Sinterklas",
    body: "Sinterklas sedang di salon potong rambut dan ingin merombak gaya rambutnya. Warnai jenggotnya, keringkan rambutnya, tambahkan hiasan, atau cukur bersih semuanya menggunakan alat cukur."
  }]
}, {
  id: 'family',
  heading: {
    title: "Nikmati waktu bersama keluarga",
    body: "Ambil popcorn dan bersantailah di balik selimut yang nyaman. Anda dapat berkumpul dengan seluruh penduduk untuk menikmati film layar lebar di bioskop Desa atau membaca buku cerita interaktif saat Ollie si Paus Narwhal merayakan liburan Natal di bawah laut."
  },
  cards: [{
    id: 'storybook',
    title: "Ollie Penghuni Bawah Laut",
    body: "Teman-teman kita di Desa mencoba hidup sehari di bawah laut bersama Ollie si paus narwhal untuk mengadakan perayaan tahunan \"penerangan hutan rumput laut\" yang pertama."
  }, {
    id: 'museum',
    title: "Sehari di Museum",
    body: "Bergabunglah dengan kurcaci, rusa kutub, Sinterklas, dan Nyonya Sinterklas mengunjungi Museum of Holiday Cheer."
  }, {
    id: 'carpool',
    title: "Mobil Kurcaci",
    body: "Ada banyak kurcaci, rusa kutub, dan pegman yang hilir mudik di sekitar Kutub Utara. Lihat cara mereka berpindah dari satu tempat ke tempat lain."
  }, {
    id: 'liftoff',
    title: "Keberangkatan Sinterklas",
    body: "Sinterklas dan rusa kutub sudah siap pergi, tetapi mereka memerlukan sedikit bantuan dari kurcaci pembuat kode sebelum berangkat."
  }]
}];
const cta = "Pelajari";
const ageLabel = "Semua Usia";
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