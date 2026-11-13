import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    Constants: {
      TTS_DOMAIN: "https://translate.googleapis.com/translate_tts",
      TTS_QUERY: "?ie=UTF-8&client=santa-tracker&tl={TL}&q={Q}",
      KLANG_EVENT_KEY: "elvish_klang_event",
      PHRASES: [{
        elvish: '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="57" viewBox="0 0 256 57"><g><g fill="#fff"><path d="M176.2 39h7.6l-8.4-12.5h5L168.7 9 157 26.5h5L153.6 39h7.6l-7.6 11.7h13.1v4.8h4v-4.8h13L176.2 39zm-12.8 1.4l2.7-4.2h-7.5l5.5-8.3 2.8-4.2h-5l6.6-9.9 6.6 9.9h-5l2.8 4.2 5.5 8.3h-7.5l2.7 4.2 4.8 7.5h-20.1l5.1-7.5zM168.6 1l1.2 2.4 2.6.4-1.9 1.9.5 2.6-2.4-1.2-2.4 1.2.4-2.6-1.9-1.9 2.7-.4z"/></g><path fill="none" d="M213.4 19.9h39.4V29h-39.4z"/><path fill="#fff" d="M247.5 18.4c.4-1 .6-2 .6-3.1 0-4.5-3.7-8.3-8.3-8.3-2.8 0-5.2 1.4-6.7 3.5-1.5-2.1-4-3.5-6.7-3.5-4.5 0-8.2 3.7-8.2 8.3 0 1.1.2 2.1.6 3.1H213v12.1h2.9v25.1h34.6V30.5h2.9V18.4h-5.9zm-26.4-3.1c0-2.9 2.4-5.3 5.2-5.3 2.9 0 5.2 2.3 5.2 5.1v.1h3v-.1c.1-2.8 2.4-5.1 5.2-5.1 2.9 0 5.3 2.4 5.3 5.3 0 1.1-.4 2.2-1 3.1h-21.9c-.6-.9-1-2-1-3.1zm10 37.2h-12.3v-22h12.3v22zm0-25h-15.2v-6.1h15.2v6.1zm16.3 25h-12.3v-22h12.3v22zm2.9-25h-15.2v-6.1h15.2v6.1z"/><g fill="#fff"><circle cx="104.2" cy="10.9" r="3"/><path d="M107.9 25.2c-.1 0-.2 0-.2-.1 2.6-3.2 6.5-8.8 6.5-14 0-5.5-4.5-9.9-9.9-9.9s-9.9 4.5-9.9 9.9c0 5.2 3.8 10.8 6.5 14-.2 0-.4.1-.6.1-.1 0-.2 0-.3.1-.4.1-.8.3-1.2.4-.1 0-.2.1-.3.1-.4.2-.7.3-1.1.5-.1 0-.2.1-.3.1-.3.2-.7.4-1 .6-.1.1-.2.1-.3.2-.3.2-.6.4-.9.7-.1.1-.2.1-.3.2-.3.2-.6.5-.8.7l-.3.3c-.3.3-.5.5-.7.8l-.3.3c-.2.3-.4.6-.7.8l-.3.3-.6.9c-.1.1-.1.2-.2.3-1.3 2.3-2.1 4.9-2.1 7.8 0 8.6 7 15.6 15.6 15.6h.6c1.4-.1 2.8-.3 4.1-.7 1.7-.5 3.3-1.3 4.7-2.4 3.8-2.8 6.3-7.4 6.3-12.5-.1-7.3-5.2-13.4-12-15.1zm-3.7-21c3.8 0 6.9 3.1 6.9 6.9 0 5-4.8 11-7 13.5-2.2-2.5-6.9-8.4-6.9-13.5 0-3.8 3.1-6.9 7-6.9zm.5 49h-.6c-7.1 0-12.9-5.8-12.9-12.9 0-1.6.3-3 .8-4.4.8 1.7 1.9 3.3 3.1 4.7 1.5 1.7 3.2 3.1 5.1 4.2l2.1 1.3v2.1c0 .6.5 1 1 1h1.3v4zm8.8-4V47c0-.7-.5-1.2-1.2-1.2h-4.1v-4.4c0-.6-.5-1-1-1H98v-3.9h3.9v-4.1h1.5c2.4 0 4.3-1.9 4.4-4.3 5.3 1.6 9.2 6.5 9.2 12.3 0 3.4-1.3 6.5-3.5 8.8z"/></g><path fill="#fff" d="M56.8 40.5h-3.3C47 29 33.1 16 17.5 15.2c0-4.8-3.9-8.7-8.7-8.7C4 6.5.1 10.4.1 15.2c0 4.8 3.9 8.7 8.7 8.7 3 0 5.6-1.5 7.2-3.8v20.4h-2.4c-2.2 0-3.9 1.7-3.9 3.9v7.2c0 2.2 1.8 3.9 3.9 3.9h43.2c2.2 0 3.9-1.8 3.9-3.9v-7.2c0-2.1-1.7-3.9-3.9-3.9zm-48-19.6c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7c0 3.2-2.5 5.7-5.7 5.7zM19 18.4c13.3 1.5 25.1 12.5 31.1 22.1H19V18.4zm38.7 33.2c0 .5-.4.9-.9.9H13.6c-.5 0-.9-.4-.9-.9v-7.2c0-.5.4-.9.9-.9h43.2c.5 0 .9.4.9.9v7.2z"/></g></svg>',
        elvish_klang_event: "translations_elf_santaclaus",
        ar: "\u0628\u064e\u0627\u0628\u064e\u0627 \u0646\u064f\u0648\u0650\u064a\u0644",
        "zh-CN": "\u5723\u8bde\u8001\u4eba",
        "zh-TW": "\u8056\u8a95\u8001\u4eba",
        cs: "Santa Klaus",
        da: "Julemanden",
        nl: "Kerstman",
        en: "Santa Claus",
        fr: "P\u00e8re No\u00ebl",
        de: "Weihnachtsmann",
        el: "\u0386\u03b3\u03b9\u03bf\u03c2 \u0392\u03b1\u03c3\u03af\u03bb\u03b7\u03c2",
        hi: "\u0938\u093e\u0902\u0924\u093e \u0915\u094d\u0932\u0949\u091c\u093c",
        hu: "Mikul\u00e1s",
        it: "Babbo Natale",
        ja: "\u30b5\u30f3\u30bf\u30af\u30ed\u30fc\u30b9",
        ko: "\uc0b0\ud0c0 \ud074\ub85c\uc2a4",
        no: "julenissen",
        pl: "\u015awi\u0119ty Miko\u0142aj",
        pt: "Papai Noel",
        ru: "\u0414\u0435\u0434 \u041c\u043e\u0440\u043e\u0437",
        sk: "Santa Claus",
        es: "Pap\u00e1 Noel",
        sv: "Jultomten",
        th: "\u0e0b\u0e32\u0e19\u0e15\u0e32\u0e04\u0e25\u0e2d\u0e2a",
        tr: "Noel Baba"
      }, {
        elvish: '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="57" viewBox="0 0 256 57"><g><path fill="#fff" d="M86.8 54l.6-12.4c-3.8-3.6-5.9-8.2-5.9-13.1C81.4 17.8 91.7 9 104.2 9c12.6 0 22.8 8.7 22.8 19.5S116.8 48 104.2 48c-1.5 0-3.1-.1-4.6-.4L86.8 54zm17.4-42c-10.9 0-19.8 7.4-19.8 16.5 0 4.2 1.9 8.3 5.5 11.3l.5.5L90 49l9.1-4.6.5.1c1.5.3 3.1.5 4.6.5 10.9 0 19.8-7.4 19.8-16.5S115.1 12 104.2 12zM151.2 54l.6-12.4c-3.8-3.6-5.9-8.2-5.9-13.1 0-10.7 10.2-19.5 22.8-19.5s22.8 8.7 22.8 19.5S181.2 48 168.7 48c-1.5 0-3.1-.1-4.6-.4L151.2 54zm17.5-42c-10.9 0-19.8 7.4-19.8 16.5 0 4.2 1.9 8.3 5.5 11.3l.5.5-.4 8.7 9.1-4.6.5.1c1.5.3 3.1.5 4.6.5 10.9 0 19.8-7.4 19.8-16.5S179.6 12 168.7 12zM214.5 54l.6-12.4c-3.8-3.6-5.9-8.2-5.9-13.1C209.2 17.8 219.4 9 232 9c12.6 0 22.8 8.7 22.8 19.5S244.5 48 231.9 48c-1.5 0-3.1-.1-4.6-.4L214.5 54zm17.4-42c-10.9 0-19.8 7.4-19.8 16.5 0 4.2 1.9 8.3 5.5 11.3l.5.5-.4 8.7 9.1-4.6.5.1c1.5.3 3.1.5 4.6.5 10.9 0 19.8-7.4 19.8-16.5S242.8 12 231.9 12zM56.8 40.5h-3.3C47 29 33.1 16 17.5 15.2c0-4.8-3.9-8.7-8.7-8.7C4 6.5.1 10.4.1 15.2c0 4.8 3.9 8.7 8.7 8.7 3 0 5.6-1.5 7.2-3.8v20.4h-2.4c-2.2 0-3.9 1.7-3.9 3.9v7.2c0 2.2 1.8 3.9 3.9 3.9h43.2c2.2 0 3.9-1.8 3.9-3.9v-7.2c0-2.1-1.7-3.9-3.9-3.9zm-48-19.6c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7c0 3.2-2.5 5.7-5.7 5.7zM19 18.4c13.3 1.5 25.1 12.5 31.1 22.1H19V18.4zm38.7 33.2c0 .5-.4.9-.9.9H13.6c-.5 0-.9-.4-.9-.9v-7.2c0-.5.4-.9.9-.9h43.2c.5 0 .9.4.9.9v7.2z"/></g></svg>',
        elvish_klang_event: "translations_elf_hohoho",
        ar: "\u0647\u0648 \u0647\u0648 \u0647\u0648",
        "zh-CN": "\u55ec\u55ec\u55ec",
        "zh-TW": "\u55ec\u55ec\u55ec",
        cs: "Ho Ho Ho",
        da: "Ho Ho Ho",
        nl: "Ho Ho Ho",
        en: "Ho Ho Ho",
        fr: "Ho Ho Ho",
        de: "Ho Ho Ho",
        el: "\u03a7\u03bf \u03c7\u03bf \u03c7\u03bf",
        hi: "\u0939\u094b \u0939\u094b \u0939\u094b",
        hu: "Ho Ho Ho",
        it: "Ho Ho Ho",
        ja: "\u30db\u30fc\u30db\u30fc\u30db\u30fc",
        ko: "\ud638 \ud638 \ud638",
        no: "Ho Ho Ho",
        pl: "Ho Ho Ho",
        pt: "Ho Ho Ho",
        ru: "\u0425\u043e-\u0445\u043e-\u0445\u043e",
        sk: "Ho Ho Ho",
        es: "Ho Ho Ho",
        sv: "Ho ho ho",
        th: "\u0e42\u0e2e \u0e42\u0e2e \u0e42\u0e2e",
        tr: "Ho Ho Ho"
      }, {
        elvish: '<svg xmlns="http://www.w3.org/2000/svg" width="181.2" height="57" viewBox="0 0 181.2 57"><g><path fill="#fff" d="M24.2 55.5C12.4 55.5 2.7 45.9 2.7 34s9.6-21.5 21.5-21.5S45.7 22.2 45.7 34s-9.6 21.5-21.5 21.5zm0-40C14 15.5 5.7 23.8 5.7 34S14 52.5 24.2 52.5 42.7 44.2 42.7 34s-8.3-18.5-18.5-18.5z"/><circle fill="#fff" cx="17.6" cy="25.3" r="2.5"/><circle fill="#fff" cx="31.7" cy="25.3" r="2.5"/><path fill="#fff" d="M24.2 47.4c-7.4 0-13.3-6.3-13.3-13.3h26.7c0 7-6 13.3-13.4 13.3z"/><g fill="#fff"><path d="M104.1 12.1h-3.6v-2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2h-18v-2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2h-2.6c-3 0-5.4 2.4-5.4 5.4v32.3c0 3 2.4 5.4 5.4 5.4h30.3c3 0 5.4-2.4 5.4-5.4V17.5c-.1-3-2.5-5.4-5.5-5.4zm2.4 37.7c0 1.3-1.1 2.4-2.4 2.4H73.8c-1.3 0-2.4-1.1-2.4-2.4V22.1h35v27.7zM83.5 27.3v4h4v16h4v-20z"/></g><path fill="#fff" d="M149.2 24.6c-.7 0-1.4-.5-1.5-1.3-.1-.8.4-1.6 1.3-1.7 1-.1 1.9-.4 2.8-.8h-.1c-1-.5-2-1.1-3-2-.3-.3-.7-.8-1-1.4-.3-.9-.2-1.8.3-2.4.4-.5.9-.8 1.6-1 .6-.1 1.2-.1 1.8-.1-.5-.6-1-1.4-1.2-2.4-.1-.8.5-1.6 1.3-1.7.8-.1 1.6.5 1.7 1.3.1.4.4.8.8 1.3.2.2.4.5.6.7.2.3.8 1.1.7 2.1-.1.5-.3.9-.5 1.1-.4.5-1 .6-1.1.6-.8.1-1.5.1-2.1 0h-.6c.6.5 1.2.8 2 1.2.3.2.6.3.9.5.3.2 1.2.7 1.4 1.6.2.8 0 1.6-.6 2.2-.4.4-.8.6-1.2.8-1.3.6-2.7 1-4.2 1.3 0 .1 0 .1-.1.1zM158.7 10.6c-1.8 1.8 1 4.6 2.8 2.8 1.9-1.8-1-4.6-2.8-2.8zM170.4 19.7c-1.8 1.8 1 4.6 2.8 2.8 1.8-1.8-1-4.7-2.8-2.8zM138.2 14.2c-1.8 1.8 1 4.6 2.8 2.8 1.9-1.8-1-4.6-2.8-2.8zM162.1 41.1c-1.8 1.8 1 4.6 2.8 2.8 1.8-1.8-1-4.7-2.8-2.8zM167.2 28.2c-1.8 1.8 1 4.6 2.8 2.8 1.9-1.8-1-4.6-2.8-2.8zM173.8 34.6c-2.7-.5-10.6-1.4-19.2 1.5-1-1.3-2.1-2.7-3.4-4-1.5-1.5-3-2.7-4.4-3.8-.1-3.1-.9-6.2-3-8.7-.5-.6-1.5-.7-2.1-.2-.6.5-.7 1.5-.2 2.1 1.2 1.4 1.8 3 2.1 4.8-1.4-.7-2.6-1-3.6-1-1.2 0-2 .5-2.4.9-.3.3-.6.8-.7 1.2L129 50.7c-.4 1.3-.1 2.7.9 3.7.7.6 1.5 1 2.4 1 .4 0 .9-.1 1.3-.3l22.4-8.8c.4-.2.8-.4 1-.6.9-.9 1.6-2.7-.2-6.3-.1-.3-.3-.5-.4-.8 7.6-2.4 14.5-1.6 17-1.1.8.1 1.6-.4 1.7-1.2.1-.8-.5-1.6-1.3-1.7zm-22.1 2.6c-1.5.7-3 1.4-4.5 2.4-.6-.5-1.2-1.1-1.8-1.7l-.1-.1c.5-1.6 1-3.6 1.3-5.8.8.7 1.6 1.4 2.5 2.2 1 1.1 1.9 2.1 2.6 3zm-7.9-7.3c-.1 1.9-.4 3.7-.8 5.2-2.6-3.2-3.5-5.7-3.4-6.5l.1-.2h.3c.8 0 2.1.5 3.8 1.5zm-11.4 22.6c-.3.1-.4 0-.5-.1-.1-.1-.2-.3-.1-.5l6.3-18.6c1.2 2.3 3.2 4.7 5.2 6.8 2.4 2.4 4.9 4.2 7.1 5.4l-18 7zm22.5-8.9h-.3c-1 0-2.7-.7-4.8-2.2 1.2-.7 2.5-1.3 3.7-1.8 1.2 2.2 1.6 3.7 1.4 4zM153.2 31.6c-.7 0-1.2-.4-1.4-1.1-.2-.8-.4-1.6-.5-2.4 0-.4-.2-1.4.6-2.3.9-1 2.5-.9 3.8.2l.9.9c.4.4.7.7 1.1 1 .6.4 1.1.7 1.6.6.3 0 .6-.3.6-.3 0-.1-.1-.4-.6-.9l-.4-.4c-.5-.4-1-.9-1.5-1.5-.8-1.1-.8-2.5.1-3.4.8-.9 2.4-1.3 4.1-.2l.3.2c.6.4 1.1.7 1.6.9v-.6c0-.9-.3-1.9-.9-2.9-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6.5 1 1.2 2.5 1.2 4.2 0 .6.1 2.4-1 3.3-.5.5-1.3.6-2 .5-.7-.1-1.4-.4-2-.7 1.2 1.2 1.4 2.4 1.3 3.2-.2 1.6-1.6 2.9-3.3 3.1-1.2.1-2.4-.3-3.6-1.3-.5-.4-.9-.8-1.3-1.2 0 .2.1.4.2.6.2.8-.2 1.6-1 1.9h-.5z"/></g></svg>',
        elvish_klang_event: "translations_elf_happynewyear",
        ar: "\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0646\u062a\u0645 \u0628\u062e\u064a\u0631",
        "zh-CN": "\u65b0\u5e74\u5feb\u4e50",
        "zh-TW": "\u65b0\u5e74\u5feb\u6a02",
        cs: "\u0160\u0165astn\u00fd Nov\u00fd Rok",
        da: "Godt Nyt\u00e5r",
        nl: "Gelukkig Nieuwjaar",
        en: "Happy New Year",
        fr: "Bonne ann\u00e9e",
        de: "Frohes neues Jahr",
        el: "\u0395\u03c5\u03c4\u03c5\u03c7\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf \u03c4\u03bf \u039d\u03ad\u03bf \u0388\u03c4\u03bf\u03c2",
        hi: "\u0928\u092f\u093e \u0938\u093e\u0932 \u092e\u0941\u092c\u093e\u0930\u0915 \u0939\u094b",
        hu: "Boldog \u00faj \u00e9vet!",
        it: "Buon anno",
        ja: "\u660e\u3051\u307e\u3057\u3066\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059",
        ko: "\uc0c8\ud574 \ubcf5 \ub9ce\uc774 \ubc1b\uc73c\uc138\uc694",
        no: "Godt nytt \u00e5r",
        pl: "Szcz\u0119\u015bliwego Nowego Roku",
        pt: "Feliz Ano Novo",
        ru: "\u0421 \u041d\u043e\u0432\u044b\u043c \u0433\u043e\u0434\u043e\u043c",
        sk: "\u0160\u0165astn\u00fd Nov\u00fd Rok",
        es: "Feliz A\u00f1o Nuevo",
        sv: "Gott Nytt \u00c5r",
        th: "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e1b\u0e35\u0e43\u0e2b\u0e21\u0e48",
        tr: "Mutlu Y\u0131llar"
      }, {
        elvish: '<svg xmlns="http://www.w3.org/2000/svg" width="181.2" height="57" viewBox="0 0 181.2 57"><g><path fill="#fff" d="M89.3 52.4c-11.9 0-21.5-9.6-21.5-21.5S77.4 9.4 89.3 9.4s21.5 9.6 21.5 21.5-9.6 21.5-21.5 21.5zm0-40c-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5 18.5-8.3 18.5-18.5-8.3-18.5-18.5-18.5z"/><circle fill="#fff" cx="82.6" cy="22.2" r="2.5"/><circle fill="#fff" cx="96.8" cy="22.2" r="2.5"/><path fill="#fff" d="M89.3 44.2c-7.4 0-13.3-6-13.3-13.3h26.7c-.1 7.3-6 13.3-13.4 13.3zM46.1 40.7l-5-2.9 4.3-2.7-1.5-2.4-5.6 3.5-4.2-2.4 5.1-3.8-5-3.8 4.1-2.4 5.6 3.6 1.5-2.4-4.4-2.8 5-2.9-1.4-2.5-5 2.9-.2-5.1-2.9.1.2 6.6-3.9 2.3-.4-7-6.4 3.1v-4.6l6-3.1-1.3-2.6-4.6 2.4V6h-2.9v5.8l-4.5-2.4-1.3 2.6 5.8 3.1v4.6l-6.3-3.1-.4 7-4-2.3.3-6.7-2.9-.1-.2 5.2-5.1-2.9-1.4 2.5 5 2.9-4.3 2.7 1.5 2.4 5.6-3.5 4.2 2.4-5 3.8 5 3.8-4.2 2.4-5.6-3.6L3.9 35l4.4 2.8-5.1 2.9 1.4 2.5 5.1-2.9.2 5.1 2.9-.1-.2-6.6 4.1-2.3.4 7 6.3-3.2V45l-6.1 3 1.3 2.6 4.6-2.4V54h2.9v-5.9l4.5 2.4L32 48l-5.8-3.1v-4.8l6.4 3.3.4-7 4 2.3-.3 6.7 2.9.1.2-5.2 5.1 2.9 1.2-2.5zM34.4 30l-3 2.3-3.9-2.3 3.9-2.3 3 2.3zm-4.5-8.9l.3 4.1-4 2.3v-4.6l3.7-1.8zm-10.4 0l3.7 1.8v4.6l-3.9-2.3.2-4.1zM15 30l2.9-2.2 3.9 2.2-3.8 2.2-3-2.2zm4.5 8.8l-.2-4.1 3.9-2.3v4.4l-3.7 2zm10.3 0L26 36.9v-4.4l4 2.3-.2 4zM164.3 19.9c-.6 0-1.1-.3-1.4-.9-1.2-2.9-2.8-5.6-4.6-8.2-.5-.7-.3-1.6.4-2.1s1.6-.3 2.1.4c1.9 2.7 3.5 5.6 4.9 8.7.3.8 0 1.6-.8 2-.2.1-.4.1-.6.1zM169.1 16.6c-.7 0-1.3-.5-1.5-1.2-.4-1.9-1.5-4.2-2.5-5.7-.4-.7-.2-1.6.5-2.1.7-.4 1.6-.2 2.1.5.5.8 2.3 3.8 2.9 6.7.2.8-.4 1.6-1.2 1.8h-.3zM175.6 23.3l-.1-1.1c-.1-.5-.3-1-.5-1.4-1.2-2.1-3.8-2.8-5.9-1.6-1.3.7-2.1 2-2.2 3.5-.1 1.3-.4 5.1-1.2 7.2 0 0-.1-.1-.1-.2-1.7-2.1-3-4.7-4.2-7.1l-5.9-11.8-.2-.5c-1.2-2.1-3.8-2.8-5.9-1.6-.5.3-.8.6-1.2 1-.5-.5-1.1-.9-1.8-1.1-1.1-.3-2.3-.1-3.3.4-1 .6-1.7 1.5-2 2.6-.2.7-.2 1.4 0 2.1-.5.1-1 .2-1.5.5-1.9 1.1-2.6 2.8-2 4.7-.5.1-1 .3-1.5.5-2.1 1.2-2.7 3.3-1.7 5.8 2.6 5.8 5.4 12 9 18.6 2.2 4.1 5.3 6.7 9.2 7.8 1.4.4 2.9.6 4.2.6 3.6 0 6.6-1.2 7.6-1.7 9.7-5.5 12.1-17.8 11.2-27.2zm-12.8 24.8c-.8.5-5.1 2.1-9.5.9-3.1-.9-5.6-3-7.4-6.4-3.5-6.5-6.3-12.6-8.8-18.3-.6-1.4-.1-1.7.4-2 .5-.3 1.2-.2 1.6.2 1.7 3.1 4.8 8.9 6.3 11.8.3.5.8.8 1.3.8.2 0 .5-.1.7-.2.7-.4 1-1.3.7-2-2.1-4.2-7.3-13.7-7.5-14-.5-1.1-.3-1.5.4-1.9.3-.2.7-.2 1-.1.3.1.6.3.8.6 1.8 3.1 4.9 8.6 7 12.5.3.5.8.8 1.3.8.2 0 .5-.1.7-.2.7-.4 1-1.3.6-2-2.1-3.9-5.2-9.3-7-12.4V16c-.8-1.4-1.3-2.4-1.4-2.4-.2-.3-.2-.7-.1-1 .1-.3.3-.6.6-.8s.7-.2 1-.1c.3.1.6.3.8.6.1.1 5.8 9.9 8.3 15.4.3.8 1.2 1.1 2 .7.8-.3 1.1-1.2.7-2-1.8-3.9-5.1-9.9-7-13.2-.2-.3-.2-.7-.1-1 .1-.3.3-.6.6-.8.6-.4 1.4-.1 1.8.4l6.1 12.2c1.3 2.6 2.6 5.3 4.6 7.7 1.1 1.4 2.2 1.5 2.9 1.4 1.3-.2 2-1.3 2.2-1.8 1.2-3 1.4-8.2 1.5-8.4 0-.4.3-.8.7-1.1.6-.4 1.4-.1 1.8.5.1.1.1.2.1.4.2 1.9 2.1 18.7-9.7 25.4zM138.6 44.5c-.5 0-1-.3-1.3-.7-1.4-2.3-3.1-5.4-5-9.6-.4-.7 0-1.6.7-2 .7-.4 1.6 0 2 .7 1.9 4 3.5 7.1 4.9 9.3.4.7.2 1.6-.5 2.1-.2.1-.5.2-.8.2zM134.8 48.1c-.5 0-.9-.2-1.2-.6-2.8-3.8-5.6-8.7-6.3-10.8-.3-.8.2-1.6.9-1.9.8-.3 1.6.2 1.9.9.6 1.7 3.1 6.2 5.9 10 .5.7.3 1.6-.3 2.1-.3.2-.6.3-.9.3z"/></g></svg>',
        elvish_klang_event: "translations_elf_seasonsgreetings",
        ar: "\u062a\u0647\u0627\u0646\u064a \u0627\u0644\u0645\u0648\u0633\u0645",
        "zh-CN": "\u8282\u65e5\u95ee\u5019",
        "zh-TW": "\u7bc0\u6176\u795d\u8cc0",
        cs: "\u0160\u0165astn\u00e9 sv\u00e1tky",
        da: "Gl\u00e6delig jul",
        nl: "Prettige kerstdagen",
        en: "Season's Greetings",
        fr: "Bonnes f\u00eates",
        de: "Frohes Fest",
        el: "\u0398\u03b5\u03c1\u03bc\u03ad\u03c2 \u03b5\u03c5\u03c7\u03ad\u03c2",
        hi: "\u0928\u0935\u090b\u0924\u0941 \u0915\u0940 \u0936\u0941\u092d\u0915\u093e\u092e\u0928\u093e\u090f\u0902",
        hu: "Kar\u00e1csonyi \u00fcdv\u00f6zlet",
        it: "Auguri",
        ja: "\u5b63\u7bc0\u306e\u3054\u6328\u62f6",
        ko: "\uc990\uac70\uc6b4 \uc131\ud0c4\uc808",
        no: "God jul og godt nytt \u00e5r",
        pl: "Weso\u0142ych \u015awi\u0105t i szcz\u0119\u015bliwego Nowego Roku",
        pt: "Sauda\u00e7\u00f5es festivas",
        ru: "\u0421 \u041d\u043e\u0432\u044b\u043c \u0433\u043e\u0434\u043e\u043c \u0438 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u043e\u043c",
        sk: "\u0160\u0165astn\u00e9 sviatky",
        es: "\u00a1Felices Fiestas!",
        sv: "God Jul och Gott Nytt \u00c5r",
        th: "\u0e2a\u0e48\u0e07\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e38\u0e02\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e17\u0e28\u0e01\u0e32\u0e25",
        tr: "Tatil Kutlamalar\u0131"
      }],
      DEFAULT_LANGUAGE: "en",
      CLASS_PLAYING: "playing-phrase",
      EASE_IN_QUAD: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
      EASE_OUT_QUAD: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      EASE_IN_OUT_QUAD: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
      EASE_IN_QUINT: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
      EASE_IN_OUT_CIRC: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
      ANIMATION_BTN_PAGINATION: {
        distancePx: 4,
        durationDown: 200,
        durationDelay: 0,
        durationUp: 300,
        easingDown: "EASE_OUT_QUAD",
        easingUp: "EASE_OUT_QUAD"
      },
      ANIMATION_BTN_PLAY: {
        distancePx: 8,
        durationDown: 200,
        durationDelay: 1E3,
        durationUp: 850,
        easingDown: "EASE_OUT_QUAD",
        easingUp: "EASE_IN_QUINT"
      }
    }
  };
  b.shared = {};
  b.shared.utils = function () {
    class a {
      constructor(a) {
        this.value = a;
      }
      change(a) {
        const c = this.value !== a;
        this.value = a;
        return c;
      }
      moveToTarget(a, d) {
        let c = +this.value;
        if (this.value !== c) throw new TypeError("SmartValue does not contain a number");
        c < a ? c = Math.min(a, c + d) : c > a && (c = Math.max(a, c - d));
        this.value = c;
        return this;
      }
    }
    return {
      animWithClass: function (a, d, e) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(d);
          const c = () => {
            a.classList.remove(d);
            a.removeEventListener("animationend", c);
            a.removeEventListener("transitionend", c);
            e && (e(), e = null);
          };
          a.addEventListener("animationend", c);
          a.addEventListener("transitionend", c);
        });
      },
      unwrapElement: function (a) {
        return a instanceof Node ? a : a[0] || null;
      },
      computedTransform: function (a) {
        const c = window.getComputedStyle(a);
        let e;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = c.getPropertyValue(a + "transform");
          if (!a) return !1;
          e = a;
          return !0;
        });
        if ("none" === e) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let f;
        try {
          f = e.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (h) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: f[4],
          y: f[5],
          rotate: 180 / Math.PI * Math.atan2(f[1], f[0])
        };
      },
      onWebAnimationFinished: function (a, d) {
        const c = a.finished;
        c && c.then ? c.then(d) : a.addEventListener("finish", d, !1);
      },
      playerFinished: function (a) {
        return !a || "finished" === a.playState;
      },
      get touchEnabled() {
        return "standalone" in navigator || window.matchMedia("(pointer: coarse)").matches ? !0 : window.matchMedia("(pointer: fine)").matches ? !1 : "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      },
      SmartValue: a
    };
  }();
  b.InputEvent = {};
  (function () {
    let a = "mousedown",
      c = "mousemove",
      d = "mouseup mouseout",
      e = "mouseup";
    window.PointerEvent ? (a = "pointerdown", c = "pointermove", d = "pointerup pointerout", e = "pointerup") : b.shared.utils.touchEnabled && (a += " touchstart", c += " touchmove", d += " touchend touchleave touchcancel", e += " touchend");
    b.InputEvent = {
      CANCEL: d,
      START: a,
      MOVE: c,
      END: e,
      normalize(a) {
        a = a.originalEvent ? a.originalEvent : a;
        return a = a.touches ? a.touches[0] : a;
      }
    };
  })();
  function k(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  b.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = k(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...c) {
      a = k(a).concat(c).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  b.Scene = function (a) {
    this.$el = $(a);
    this.$phraseContainerFrom = this.$el.find(".js-phrase-container-from");
    this.$phraseContainerTo = this.$el.find(".js-phrase-container-to");
    this.$languagesFrom = this.$el.find("#js-language-dropdown-from");
    this.$languagesTo = this.$el.find("#js-language-dropdown-to");
    this.$btnPlay = this.$el.find(".js-btn-play");
    this.$btnPrev = this.$el.find(".js-btn-prev");
    this.$btnNext = this.$el.find(".js-btn-next");
    this.$btnShuffle = this.$el.find(".js-btn-shuffle");
    this.detectedLabel = this.$el.find(".js-detected-label").text();
    this.paginationAnimation_ = this.changeTextAnimation_ = this.playAnimation_ = null;
    this.phraseIndex = 0;
    this.toLang = this.fromLang = b.Constants.DEFAULT_LANGUAGE;
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onPlayPhrase_ = this.onPlayPhrase_.bind(this);
    this.onPrevPhrase_ = this.onPrevPhrase_.bind(this);
    this.onNextPhrase_ = this.onNextPhrase_.bind(this);
    this.onShuffleLanguages_ = this.onShuffleLanguages_.bind(this);
    this.onSelectFromLanguage_ = this.onSelectFromLanguage_.bind(this);
    this.onSelectToLanguage_ = this.onSelectToLanguage_.bind(this);
    this.tutorial_ = new b.shared.Tutorial("translations.svg");
    this.init_();
  };
  b.Scene.prototype.buildPhrases_ = function (a) {
    var c = b.Constants.PHRASES.length,
      d;
    for (d = 0; d < c; d++) {
      var e = b.Constants.PHRASES[d],
        f = $("<div>", {
          "data-index": d,
          "class": "js-phrase translations-scene"
        });
      Object.keys(e).forEach(function (a) {
        var c = e[a];
        a = $("<span>", {
          "class": "translations-scene"
        }).attr("data-lang", a).html(c);
        12 < c.length && a.addClass("long-phrase");
        f.append(a);
      });
      a.append(f);
    }
    return a.children();
  };
  b.Scene.prototype.setDefaultLanguages_ = function () {
    this.fromLang = document.documentElement.lang || b.Constants.DEFAULT_LANGUAGE;
    this.$languagesFrom.find("option[value=" + this.fromLang + "]") || (this.fromLang = b.Constants.DEFAULT_LANGUAGE, this.detectedLabel = "");
    var a = this.$languagesFrom.find('option[value="' + this.fromLang + '"]');
    a.text(a.text() + " - " + this.detectedLabel);
    a.attr("selected", "selected");
    this.toLang = this.fromLang;
    this.selectRandomToLanguage_();
  };
  b.Scene.prototype.playAudio_ = function (a, c, d) {
    gtag("event", "gameAction", {
      game: "translations",
      action: "listen"
    });
    "elvish" === this.toLang ? window.santaApp.fire("sound-trigger", d) : (c = c || b.Constants.DEFAULT_LANGUAGE, d = b.Constants.TTS_DOMAIN + b.Constants.TTS_QUERY, d = encodeURI(d.replace("{TL}", c).replace("{Q}", a)), window.santaApp.fire("sound-trigger", "@", d));
  };
  b.Scene.prototype.getButtonAnimation_ = function (a, c, d) {
    var e = new GroupEffect([new KeyframeEffect(a, [{
      transform: "translateY(0px)"
    }, {
      transform: "translateY(" + d.distancePx + "px)"
    }], {
      fill: "forwards",
      endDelay: d.durationDelay,
      duration: d.durationDown,
      easing: b.Constants[d.easingDown]
    }), new KeyframeEffect(c, [{
      transform: "scale(1)"
    }, {
      transform: "scaleY(0.9) scaleX(0.8)"
    }], {
      fill: "forwards",
      endDelay: d.durationDelay,
      duration: d.durationDown,
      easing: b.Constants[d.easingDown]
    })], {
      fill: "none"
    });
    a = new GroupEffect([new KeyframeEffect(a, [{
      transform: "translateY(" + d.distancePx + "px)"
    }, {
      transform: "translateY(0px)"
    }], {
      duration: d.durationUp,
      easing: b.Constants[d.easingUp]
    }), new KeyframeEffect(c, [{
      transform: "scaleY(0.9) scaleX(0.8)"
    }, {
      transform: "scale(1)"
    }], {
      duration: d.durationUp,
      easing: b.Constants[d.easingUp]
    })]);
    return new SequenceEffect([e, a]);
  };
  b.Scene.prototype.transitionToPhrase_ = function (a) {
    this.cancelAnimation_(this.paginationAnimation_);
    var c = a < this.phraseIndex ? -1 : 1,
      d = b.Constants.PHRASES.length;
    a = 0 > a ? a + d : a % d;
    d = this.$phrasesFrom.eq(this.phraseIndex);
    var e = this.$phrasesFrom.eq(a),
      f = this.$phrasesTo.eq(this.phraseIndex),
      h = this.$phrasesTo.eq(a),
      g = {
        duration: 650,
        fill: "both",
        easing: b.Constants.EASE_IN_OUT_CIRC
      };
    c = new GroupEffect([new KeyframeEffect(d[0], [{
      transform: "translateX(0)",
      opacity: 1
    }, {
      transform: "translateX(" + -100 * c + "%)",
      opacity: 0
    }], g), new KeyframeEffect(f[0], [{
      transform: "translateX(0)",
      opacity: 1
    }, {
      transform: "translateX(" + -100 * c + "%)",
      opacity: 0
    }], g), new KeyframeEffect(e[0], [{
      transform: "translateX(" + 100 * c + "%)",
      opacity: 0
    }, {
      transform: "translateX(0)",
      opacity: 1
    }], g), new KeyframeEffect(h[0], [{
      transform: "translateX(" + 100 * c + "%)",
      opacity: 0
    }, {
      transform: "translateX(0)",
      opacity: 1
    }], g)]);
    this.paginationAnimation_ = document.timeline.play(c);
    this.phraseIndex = a;
  };
  b.Scene.prototype.selectRandomToLanguage_ = function () {
    var a = this.$languagesTo.find("option");
    a = "" + a.eq(Math.floor(Math.random() * a.length)).val();
    if (a === this.fromLang || a === this.toLang) return this.selectRandomToLanguage_();
    this.$languagesTo.val(a);
    this.$languagesTo.trigger("change");
  };
  b.Scene.prototype.selectRandomPhrase_ = function () {
    var a = Math.floor(Math.random() * this.$phrasesFrom.length);
    if (a === this.phraseIndex) return this.selectRandomPhrase_();
    this.transitionToPhrase_(a);
  };
  b.Scene.prototype.onSelectFromLanguage_ = function () {
    this.fromLang = this.$languagesFrom.val();
    this.$phrasesFrom.find("span").hide();
    this.$phrasesFrom.find('span[data-lang="' + this.fromLang + '"]').css("display", "table-cell");
  };
  b.Scene.prototype.onSelectToLanguage_ = function () {
    this.toLang = this.$languagesTo.val();
    this.$phrasesTo.find("span").hide();
    this.$phrasesTo.find('span[data-lang="' + this.toLang + '"]').css("display", "table-cell");
  };
  b.Scene.prototype.disableTutorial_ = function () {
    this.tutorial_.off("translations.svg");
  };
  b.Scene.prototype.onPrevPhrase_ = function () {
    if (b.shared.utils.playerFinished(this.changeTextAnimation_)) {
      this.cancelAnimation_(this.changeTextAnimation_);
      this.disableTutorial_();
      var a = this.$btnPrev.find("#btn-prev-top")[0],
        c = this.$btnPrev.find("#btn-prev-shadow")[0];
      a = this.getButtonAnimation_(a, c, b.Constants.ANIMATION_BTN_PAGINATION);
      this.changeTextAnimation_ = document.timeline.play(a);
      this.transitionToPhrase_(this.phraseIndex - 1);
    }
  };
  b.Scene.prototype.onNextPhrase_ = function () {
    if (b.shared.utils.playerFinished(this.changeTextAnimation_)) {
      this.cancelAnimation_(this.changeTextAnimation_);
      this.disableTutorial_();
      var a = this.$btnNext.find("#btn-next-top")[0],
        c = this.$btnNext.find("#btn-next-shadow")[0];
      a = this.getButtonAnimation_(a, c, b.Constants.ANIMATION_BTN_PAGINATION);
      this.changeTextAnimation_ = document.timeline.play(a);
      this.transitionToPhrase_(this.phraseIndex + 1);
    }
  };
  b.Scene.prototype.onShuffleLanguages_ = function () {
    if (b.shared.utils.playerFinished(this.changeTextAnimation_)) {
      this.cancelAnimation_(this.changeTextAnimation_);
      this.disableTutorial_();
      var a = this.$btnShuffle.find("#btn-shuffle-top")[0],
        c = this.$btnShuffle.find("#btn-shuffle-shadow")[0];
      a = this.getButtonAnimation_(a, c, b.Constants.ANIMATION_BTN_PAGINATION);
      this.changeTextAnimation_ = document.timeline.play(a);
      this.selectRandomToLanguage_();
      this.selectRandomPhrase_();
    }
  };
  b.Scene.prototype.onKeyDown_ = function (a) {
    const c = this.$languagesTo[0];
    switch (a.key) {
      case "Left":
      case "ArrowLeft":
        this.onPrevPhrase_();
        break;
      case "Right":
      case "ArrowRight":
        this.onNextPhrase_();
        break;
      case "Up":
      case "ArrowUp":
        c.selectedIndex--;
        0 > c.selectedIndex && (c.selectedIndex = c.options.length - 1);
        this.$languagesTo.trigger("change");
        break;
      case "Down":
      case "ArrowDown":
        c.selectedIndex++;
        c.selectedIndex >= c.options.length && (c.selectedIndex = 0);
        this.$languagesTo.trigger("change");
        break;
      case " ":
        this.onPlayPhrase_();
    }
  };
  b.Scene.prototype.onPlayPhrase_ = function () {
    if (b.shared.utils.playerFinished(this.playAnimation_)) {
      this.cancelAnimation_(this.playAnimation_);
      this.disableTutorial_();
      this.playAudio_(b.Constants.PHRASES[this.phraseIndex][this.toLang], this.toLang, b.Constants.PHRASES[this.phraseIndex][b.Constants.KLANG_EVENT_KEY]);
      var a = this.$btnPlay.find("#btn-play-top")[0],
        c = this.$btnPlay.find("#btn-play-shadow")[0];
      a = this.getButtonAnimation_(a, c, b.Constants.ANIMATION_BTN_PLAY);
      this.playAnimation_ = document.timeline.play(a);
      this.$el.addClass(b.Constants.CLASS_PLAYING);
      b.shared.utils.onWebAnimationFinished(this.playAnimation_, () => {
        this.$el.removeClass(b.Constants.CLASS_PLAYING);
      });
    }
  };
  b.Scene.prototype.addEventHandlers_ = function () {
    window.addEventListener("keydown", this.onKeyDown_);
    this.$btnPlay.on(b.InputEvent.START, this.onPlayPhrase_);
    this.$btnPrev.on(b.InputEvent.START, this.onPrevPhrase_);
    this.$btnNext.on(b.InputEvent.START, this.onNextPhrase_);
    this.$btnShuffle.on(b.InputEvent.START, this.onShuffleLanguages_);
    this.$languagesFrom.on("change", this.onSelectFromLanguage_);
    this.$languagesTo.on("change", this.onSelectToLanguage_);
  };
  b.Scene.prototype.removeEventHandlers_ = function () {
    window.removeEventListener("keydown", this.onKeyDown_);
    this.$btnPlay.off(b.InputEvent.START, this.onPlayPhrase_);
    this.$btnPrev.off(b.InputEvent.START, this.onPrevPhrase_);
    this.$btnNext.off(b.InputEvent.START, this.onNextPhrase_);
    this.$btnShuffle.off(b.InputEvent.START, this.onShuffleLanguages_);
    this.$languagesFrom.off("change", this.onSelectFromLanguage_);
    this.$languagesTo.off("change", this.onSelectToLanguage_);
  };
  b.Scene.prototype.startTutorial_ = function () {
    this.tutorial_.start();
  };
  b.Scene.prototype.init_ = function () {
    this.setDefaultLanguages_();
    this.$phrasesFrom = this.buildPhrases_(this.$phraseContainerFrom);
    this.$phrasesTo = this.buildPhrases_(this.$phraseContainerTo);
    this.onSelectFromLanguage_();
    this.onSelectToLanguage_();
    this.transitionToPhrase_(0);
    this.addEventHandlers_();
    this.startTutorial_();
  };
  b.Scene.prototype.cancelAnimation_ = function (a) {
    a && a.cancel();
  };
  b.Scene.prototype.destroy = function () {
    this.removeEventHandlers_();
    this.audio = null;
    this.cancelAnimation_(this.playAnimation_);
    this.cancelAnimation_(this.changeTextAnimation_);
    this.cancelAnimation_(this.paginationAnimation_);
  };
  b.Game = b.Scene;
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('translations_load_sounds');
sceneApi.preload.images('img/dropdown-arrow.svg', 'img/dropdown-arrow-active.svg', 'img/logo.svg');
new Game(document.getElementById('module-translations'));
sceneApi.config({
  sound: ['music_start_scene', 'translations_start']
});
sceneApi.ready(async () => {});