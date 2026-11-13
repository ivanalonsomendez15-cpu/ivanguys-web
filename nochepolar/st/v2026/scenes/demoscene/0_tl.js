import { L as LitElement, h as html, d as directive } from '../../_21731fba.js';
import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e746bcde.js';
import "../../_04b2873d_tl.js";
import "../../_5fd70235_tl.js";
import { i as id } from '../../_e8351094.js';
import { e as rectify } from '../../_e1311d95.js';
import '../../_ccf4b423.js';
import "../../_3a2cb20e_tl.js";
import '../../_36ce2a0a.js';
const sheet$4 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$4.replaceSync("svg{overflow:visible;--o: var(--offset, 5px);perspective:10000px;will-change:transform}.focus{transform:translate(0, 0);transition:transform .5s cubic-bezier(0.47, 2.02, 0.31, -0.36);pointer-events:none}.shadow{transform-origin:bottom center;transform:skew(-4deg) translate(calc(var(--o, 5px) * 0.8), calc(var(--o, 5px) * 1.28));opacity:.1;transition:all .5s;pointer-events:none}.target{fill:transparent}.target:hover~.focus{transform:translate(0, calc(-2 * var(--o)));transition:transform .2s;animation:none}.target:hover~.shadow{transform:skew(-5deg) translate(var(--o, 5px), calc(var(--o, 5px) * 1.6));opacity:.2;transition:all .2s}");
const clips = [{
  width: 436.6,
  height: 398,
  src: `M0,199.1c14,2.8,22.9,23,23.1,42.8l0,91.9c0,22.6,18.3,40.8,40.9,40.8c43.3-0.1,105.9,0.2,111.5,0.4 c19.8,0.3,40,9.1,42.8,23.1h0c2.8-14.1,23-22.9,42.8-23.1c5.5-0.2,68.2-0.5,111.5-0.4c22.6,0,40.9-18.2,40.9-40.8v-91.9 c0.3-19.8,9.1-40,23.1-42.8v-0.1c-14-2.8-22.9-23-23.1-42.8V64.4c0-22.6-18.3-40.8-40.9-40.8c-43.3,0.1-105.9-0.2-111.5-0.4 c-19.8-0.3-40-9.1-42.8-23.1l0,0c-2.8,14.1-23,22.9-42.8,23.1c-5.5,0.2-68.2,0.5-111.5,0.4c-22.6,0-40.9,18.2-40.9,40.8l0,91.9 C22.9,176,14,196.2,0,199.1L0,199.1z`
}, {
  width: 397.36,
  height: 377,
  src: `M16.8,188.4c0,18.7-12,85.1-13.6,93.8c-17,89.8,38.6,98.8,77.2,90.1c9.8-2.2,104.3-21,118.2,4.6h0.2 c13.9-25.5,108.4-6.8,118.2-4.6c38.5,8.7,94.1-0.2,77.2-90.1c-1.6-8.7-13.6-75.1-13.6-93.8s12-85.1,13.6-93.8 c17-89.8-38.6-98.8-77.2-90.1c-9.8,2.2-104.3,21-118.2-4.6l-0.2,0C184.6,25.5,90.1,6.8,80.3,4.6C41.8-4.2-13.8,4.8,3.1,94.6 C4.8,103.3,16.8,169.7,16.8,188.4z`
}, {
  width: 526.75,
  height: 292.9,
  src: `M526.7,265.3c0.6,9.5-2.3,18.4-10,22.7c-6.4,3.6-14.4,4.9-21.4,4.9c-0.1,0-231.9,0-231.9,0s-231.8,0-231.9,0 c-7,0-15-1.3-21.4-4.9c-7.7-4.4-10.6-13.3-10-22.7c0.8-12,5.3-24.1,8.4-35.6c2.5-9.1,5-18.3,7.4-27.4c2.6-9.6,6.8-20.6,4.6-30.8 c-2.2-10-9.1-17.9-15.3-25c6.2-7.1,13.1-15,15.3-25c2.2-10.2-2-21.2-4.6-30.8c-2.5-9.1-5-18.3-7.4-27.4C5.4,51.8,0.9,39.6,0.1,27.6 c-0.6-9.5,2.3-18.4,10-22.7C16.5,1.3,24.4,0,31.5,0c0.1,0,231.9,0,231.9,0s231.8,0,231.9,0c7,0,15,1.3,21.4,4.9 c7.7,4.4,10.6,13.3,10,22.7c-0.8,12-5.3,24.1-8.4,35.6c-2.5,9.1-5,18.3-7.4,27.4c-2.6,9.6-6.8,20.6-4.6,30.8 c2.2,10,9.1,17.9,15.3,25c-6.2,7.1-13.1,15-15.3,25c-2.2,10.2,2,21.2,4.6,30.8c2.5,9.1,5,18.3,7.4,27.4 C521.4,241.1,525.9,253.3,526.7,265.3z`
}, {
  width: 542.44,
  height: 297.8,
  src: `M536.1,21.7L536.1,21.7l-23.6-3.9L491.2,0h-220h-220L29.8,17.7L6.2,21.6v0c-8.3,1.6-8.3,252.9,0,254.6v0  l23.6,3.9l21.4,17.7h220h220l21.4-17.7l23.6-3.9v0C544.5,274.6,544.5,23.3,536.1,21.7z`
}];
function even(value) {
  value = Math.ceil(value);
  if (value % 2) {
    ++value;
  }
  return value;
}
class SantaImageMaskElement extends LitElement {
  static get properties() {
    return {
      size: {
        type: Number
      },
      src: {
        type: String
      },
      card: {
        type: Number
      },
      _idPrefix: {
        type: String
      }
    };
  }
  static get styles() {
    return [sheet$4];
  }
  constructor() {
    super();
    this._idPrefix = id();
    this.card = ~~(Math.random() * clips.length);
  }
  render() {
    const size = this.size || 0;
    const card = clips[(this.card || 0) % clips.length];
    const scaleX = (this.size || 0) / card.width;
    const scaleY = (this.size || 0) / card.height;
    const scale = Math.min(scaleX, scaleY);
    const height = even(scale * card.height);
    const squarePath = `M0 0 L${size} 0 L${size} ${height} L0 ${height} Z`;
    const namespaced = directive(value => part => {
      part.committer.element.setAttributeNS('http://www.w3.org/1999/xlink', part.committer.name, value);
    });
    return html`
<svg width="${size}" height="${height}">
<linearGradient id="${this._idPrefix}fade" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="black" stop-opacity="0.2"/>
<stop offset="100%" stop-color="black"/>
</linearGradient>
<clipPath id="${this._idPrefix}path" transform="scale(${scale} ${scale})">
<path d="${card.src}" />
</clipPath>
<rect class="target" width="${size}" height="${height}"></rect>
<path class="shadow" d="${squarePath}" clip-path="url(#${this._idPrefix}path)" fill="url(#${this._idPrefix}fade)"></path>
<g class="focus">
  <image xlink:href="${namespaced(this.src)}" clip-path="url(#${this._idPrefix}path)" preserveAspectRatio="xMaxYMax slice" width="${size}" height="${height}" />
  <g clip-path="url(#${this._idPrefix}path)">
    <path transform="scale(${scale} ${scale})" d="${card.src}" style="stroke: var(--stroke-color, transparent); stroke-width: calc(var(--stroke-width, 2) / ${scale / 2}); fill: none" width="${size}" height="${height}" />
  </g>
</g>
</svg>
    `;
  }
}
customElements.define('santa-image-mask', SantaImageMaskElement);
const sheet$3 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$3.replaceSync("@keyframes fly{0%{transform:translateZ(0) translateY(0) translateX(0)}10%{transform:translateZ(0) translateY(-220px) translateX(50px)}50%{transform:translateZ(0) translateY(-220px) translateX(100vw)}50.1%{transform:translateZ(0) translateY(-100vw) translateX(100vw)}50.2%{transform:translateZ(0) translateY(-100vw) translateX(-100vw)}50.3%{transform:translateZ(0) translateY(-220px) translateX(-100vw)}90%{transform:translateZ(0) translateY(-220px) translateX(-280px)}100%{transform:translateZ(0) translateY(0) translateX(0)}}.balloon,.balloon-flight,.balloon-ropes{transition:opacity .2s ease-out;will-change:transform;position:absolute}.balloon{width:183px;height:209px;background:url(img/easteregg-balloon.svg) no-repeat;opacity:1;cursor:pointer}.balloon-ropes{top:199px;left:-24px;width:234px;height:40px;background:url(img/easteregg-balloon-ropes.svg) no-repeat}.balloon-flight{width:155px;height:209px;left:2px;background:url(img/easteregg-balloon-flight.svg) no-repeat;will-change:transform,opacity}.balloon-flight,.balloon-ropes{pointer-events:none;opacity:0}.flying .balloon-flight,.flying .balloon-ropes{opacity:1}.flying .balloon-flight{animation:fly 30s linear}.flying .balloon{opacity:0;pointer-events:none}");
const delay$2 = ms => new Promise(r => window.setTimeout(r, ms));
const FLIGHT_TIME = 30000;
const RANDOM_EGG_WAIT_MIN$1 = 5000;
const RANDOM_EGG_WAIT_MAX$1 = 30000;
class EasterEggBalloonElement extends LitElement {
  static get properties() {
    return {
      flying: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets = [sheet$3];
    this.flying = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.randomlyFly_();
  }
  randomlyFly_() {
    if (!this.isConnected) {
      return;
    }
    window.clearTimeout(this.flyTimout_);
    const timeout = RANDOM_EGG_WAIT_MIN$1 + Math.random() * RANDOM_EGG_WAIT_MAX$1;
    this.flyTimeout_ = window.setTimeout(() => {
      this.fly();
    }, timeout);
  }
  async fly(e) {
    e && e.preventDefault();
    if (!this.flying) {
      window.clearTimeout(this.flyTimeout_);
      this.flying = true;
      await delay$2(FLIGHT_TIME);
      this.flying = false;
      this.randomlyFly_();
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
  }
  render() {
    return html`
<div class="${this.flying ? 'flying' : ''}">
  <a href="#" @click="${e => this.fly(e)}" class="balloon"></a>
  <div class="balloon-ropes"></div>
  <div class="balloon-flight"></div>
</div>
    `;
  }
}
customElements.define('easteregg-balloon', EasterEggBalloonElement);
const sheet$2 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$2.replaceSync("#holder{width:198px;height:110px;background:url(img/easteregg-wrangler.svg) 5px 20px no-repeat;background-size:146px 70px;position:relative}#wrangler{position:absolute;width:85px;height:102px;left:112px;top:7px;z-index:10}#wrangler>*{background-position:center;background-repeat:no-repeat;position:absolute;width:100%;height:100%}#wrangler :nth-child(1){background-image:url(img/easteregg-wrangler-wrangler1.svg);will-change:transform;opacity:0;animation:wrangler-wrangler-1 15s steps(5, end) infinite}#wrangler :nth-child(2){background-image:url(img/easteregg-wrangler-wrangler2.svg);will-change:transform;opacity:0;animation:wrangler-wrangler-2 15s steps(5, end) infinite}#wrangler :nth-child(3){background-image:url(img/easteregg-wrangler-wrangler3.svg);opacity:0;animation:wrangler-wrangler-3 15s steps(5, end) infinite}#reindeer1{position:absolute;width:35px;height:25px;top:26px;left:100px;z-index:5}#reindeer1>*{background-position:center;background-repeat:no-repeat;position:absolute;width:100%;height:100%}#reindeer1 :nth-child(1){background-image:url(img/easteregg-wrangler-reindeer1-shadow.svg);animation:wrangler-reindeer1-shadow 15s linear infinite}#reindeer1 :nth-child(2){background-image:url(img/easteregg-wrangler-reindeer1-1.svg);will-change:transform;opacity:0;animation:wrangler-reindeer1-1 15s linear infinite}#reindeer1 :nth-child(3){background-image:url(img/easteregg-wrangler-reindeer1-2.svg);will-change:transform;opacity:0;animation:wrangler-reindeer1-2 15s linear infinite}#reindeer1 :nth-child(4){background-image:url(img/easteregg-wrangler-reindeer1-3.svg);will-change:transform;opacity:0;animation:wrangler-reindeer1-3 15s linear infinite}#reindeer2{position:absolute;width:31px;height:29px;top:46px;left:0px;z-index:5}#reindeer2>*{background-position:center;background-repeat:no-repeat;position:absolute;width:100%;height:100%}#reindeer2 :nth-child(1){background-image:url(img/easteregg-wrangler-reindeer2-shadow.svg);animation:wrangler-reindeer2-shadow 8s linear infinite}#reindeer2 :nth-child(2){background-image:url(img/easteregg-wrangler-reindeer2-1.svg);will-change:transform;opacity:0;animation:wrangler-reindeer2-1 8s linear infinite}#reindeer2 :nth-child(3){background-image:url(img/easteregg-wrangler-reindeer2-2.svg);will-change:transform;opacity:0;animation:wrangler-reindeer2-2 8s linear infinite}#reindeer2 :nth-child(4){background-image:url(img/easteregg-wrangler-reindeer2-3.svg);will-change:transform;opacity:0;animation:wrangler-reindeer2-3 8s linear infinite}@keyframes wrangler-reindeer1-1{0%{opacity:1;transform:translateY(0)}19%{opacity:1;transform:translateY(-2px)}20%,100%{opacity:0}}@keyframes wrangler-reindeer1-2{0%{opacity:0;transform:translateY(-5px)}19%{opacity:0;transform:translateY(-5px)}20%{opacity:1;transform:translateY(-5px)}39%{opacity:1;transform:translateY(-10px)}40%,60%{opacity:0;transform:translateY(-10px)}100%{opacity:0;transform:translateY(-5px)}}@keyframes wrangler-reindeer1-3{0%{opacity:0;transform:translateY(-10px)}39%{opacity:0;transform:translateY(-10px)}40%{opacity:1;transform:translateY(-10px)}80%{opacity:1;transform:translateY(-25px)}99%{opacity:1;transform:translateY(-25px)}100%{opacity:0;transform:translateY(-5px)}}@keyframes wrangler-reindeer1-shadow{0%{transform:scaleX(1)}80%,100%{transform:scaleX(0.5)}}@keyframes wrangler-wrangler-1{0%,78%{opacity:1}79%,97%{opacity:0}98%,100%{opacity:1}}@keyframes wrangler-wrangler-2{0%,78%,81%{opacity:0}79%,80%{opacity:1}}@keyframes wrangler-wrangler-3{0%,80%{opacity:0}81%,97%{opacity:1}98%,100%{opacity:0}}@keyframes wrangler-reindeer2-shadow{0%,20%{transform:scaleX(1)}21%,49%{transform:scaleX(0.8)}50%,100%{transform:scaleX(1)}}@keyframes wrangler-reindeer2-1{0%,19%{opacity:1}20%,54%{opacity:0}55%,100%{opacity:1}}@keyframes wrangler-reindeer2-2{0%,19%{opacity:0}20%,29%{opacity:1}30%,49%{opacity:0}50%,54%{opacity:1}55%,100%{opacity:0}}@keyframes wrangler-reindeer2-3{0%,29%{opacity:0}30%,49%{opacity:1}50%,100%{opacity:0}}");
class EasterEggReindeerElement extends LitElement {
  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets = [sheet$2];
  }
  render() {
    return html`
<div id="holder">
  <div id="wrangler">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div id="reindeer1">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div id="reindeer2">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
    `;
  }
}
customElements.define('easteregg-reindeer', EasterEggReindeerElement);
const sheet$1 = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet$1.replaceSync(".snowmobile{position:absolute}.snowmobile span{width:32px;height:32px;position:absolute;transition:transform .125s;transform:rotateZ(0deg);transform-origin:bottom center}.snowmobile span:hover{transform:rotateZ(10deg)}.right{transform:rotateY(180deg)}.blue{background:url(img/easteregg-snowmobile1.svg) no-repeat}.red{background:url(img/easteregg-snowmobile2.svg) no-repeat}.yellow{background:url(img/easteregg-snowmobile3.svg) no-repeat}.purple{background:url(img/easteregg-snowmobile4.svg) no-repeat}@keyframes burnout{0%{transform:rotateZ(0) translateY(0) translateX(0)}0.5%{transform:rotateZ(-20deg) translateY(-4px) translateX(0.5vw)}1%{transform:rotateZ(0) translateY(0) translateX(1vw)}50%{transform:rotateZ(0) translateY(0) translateX(200vw)}50.00001%{transform:rotateZ(0) translateY(0) translateX(-200vw)}99%{transform:rotateZ(0) translateY(0) translateX(-1vw)}99.5%{transform:rotateZ(20deg) translateY(-4px) translateX(-0.5vw)}100%{transform:rotateZ(0) translateY(0) translateX(0)}}.drive{animation:burnout 10s linear reverse}.drive.right{animation:burnout 10s linear}.drive.right span{transform:rotateY(180deg)}");
const delay$1 = ms => new Promise(r => window.setTimeout(r, ms));
const DRIVE_TIME = 11000;
const RANDOM_EGG_WAIT_MIN = 5000;
const RANDOM_EGG_WAIT_MAX = 30000;
class EasterEggSnowMobileElement extends LitElement {
  static get properties() {
    return {
      driving: {
        type: Boolean
      },
      direction: {
        type: String
      },
      color: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets = [sheet$1];
    this.driving = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.randomlyDrive_();
  }
  randomlyDrive_() {
    if (!this.isConnected) {
      return;
    }
    window.clearTimeout(this.driveTimeout_);
    const timeout = RANDOM_EGG_WAIT_MIN + Math.random() * RANDOM_EGG_WAIT_MAX;
    this.flyTimeout_ = window.setTimeout(() => {
      this.drive();
    }, timeout);
  }
  async drive(e) {
    e && e.preventDefault();
    if (!this.driving) {
      window.clearTimeout(this.driveTimeout_);
      this.driving = true;
      await delay$1(DRIVE_TIME);
      this.driving = false;
      this.randomlyDrive_();
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
  }
  render() {
    return html`
<a href="#" @click="${e => this.drive(e)}" class="snowmobile ${this.driving ? 'drive' : ''} ${this.direction}">
  <span class="${this.color}"></span>
</a>
    `;
  }
}
customElements.define('easteregg-snowmobile', EasterEggSnowMobileElement);
const sheet = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet.replaceSync(".elves{position:absolute;background:transparent center bottom no-repeat;background-size:contain;transition:transform .5s ease-in-out;transform:translate(0, 0);will-change:transform;margin-left:-72px;margin-top:-58px;width:72px;height:58px}.elves#elves-red{transform:translate(360px, 130px);background-image:url(img/easteregg-tictactoe-move-red.svg);z-index:3}.elves#elves-red.draw{background-image:url(img/easteregg-tictactoe-draw-red.svg)}.elves#elves-blue{transform:translate(350px, 100px);background-image:url(img/easteregg-tictactoe-move-blue.svg);z-index:2}.elves#elves-blue.draw{background-image:url(img/easteregg-tictactoe-draw-blue.svg)}.cell{position:absolute;transform:translate(-50%, -50%);opacity:1;transition:opacity .2s ease;will-change:opacity;background:transparent center no-repeat;background-size:contain}.cell.empty{opacity:0}.cell.red{width:44px;height:19px;background-image:url(img/easteregg-tictactoe-place-red.svg)}.cell.blue{width:48px;height:14px;background-image:url(img/easteregg-tictactoe-place-blue.svg)}.cell:nth-child(1){top:60px;left:88px;transform:translate(-50%, -50%) scale(0.9)}.elves.to-pos-1{transform:translate(88px, 60px) !important}.cell:nth-child(2){top:60px;left:162px;transform:translate(-50%, -50%) scale(0.9)}.elves.to-pos-2{transform:translate(162px, 60px) !important}.cell:nth-child(3){top:60px;left:236px;transform:translate(-50%, -50%) scale(0.9)}.elves.to-pos-3{transform:translate(236px, 60px) !important}.cell:nth-child(4){top:87px;left:65px;transform:translate(-50%, -50%) scale(0.95)}.elves.to-pos-4{transform:translate(65px, 87px) !important}.cell:nth-child(5){top:87px;left:145px;transform:translate(-50%, -50%) scale(0.95)}.elves.to-pos-5{transform:translate(145px, 87px) !important}.cell:nth-child(6){top:87px;left:225px;transform:translate(-50%, -50%) scale(0.95)}.elves.to-pos-6{transform:translate(225px, 87px) !important}.cell:nth-child(7){top:115px;left:44px}.elves.to-pos-7{transform:translate(44px, 115px) !important}.cell:nth-child(8){top:115px;left:132px}.elves.to-pos-8{transform:translate(132px, 115px) !important}.cell:nth-child(9){top:115px;left:220px}.elves.to-pos-9{transform:translate(220px, 115px) !important}#win{position:absolute;width:144px;height:7px;background:transparent center no-repeat;background-size:contain;transform-origin:center;opacity:0;transition:opacity .2s ease-out;will-change:transform,opacity}#win.red{opacity:1;background-image:url(img/easteregg-tictactoe-win-red.svg)}#win.blue{opacity:1;background-image:url(img/easteregg-tictactoe-win-blue.svg)}#win.pos-0{transform:translate3d(88px, 56px, 0) rotateZ(0deg)}#win.pos-1{transform:translate3d(74px, 85px, 0) rotateZ(0deg)}#win.pos-2{transform:translate3d(66px, 114px, 0) rotateZ(0deg)}#win.pos-3{transform:translate3d(-6px, 89px, 0) rotateZ(128deg)}#win.pos-4{transform:translate3d(69px, 101px, 0) rotateZ(108deg)}#win.pos-5{transform:translate3d(156px, 88px, 0) rotateZ(96deg)}#win.pos-6{transform:translate3d(89px, 88px, 0) rotateZ(27deg)}#win.pos-7{transform:translate3d(75px, 82px, 0) rotateZ(163deg)}#win.pos-8{transform:translate3d(75px, 84px, 0) rotateZ(0)}");
const WINS = Object.freeze([7, 56, 448, 73, 146, 292, 273, 84]);
const SHOW_LINE_TIME = 1000;
const RESTART_GAME_TIME_MIN = 10 * 1000;
const RESTART_GAME_TIME_MAX = 60 * 1000;
const delay = ms => new Promise(r => window.setTimeout(r, ms));
class EasterEggTicTacToeElement extends LitElement {
  static get properties() {
    return {
      isPlaying: {
        type: Boolean
      },
      turn: {
        type: Boolean
      },
      redScore: {
        type: Number
      },
      blueScore: {
        type: Number
      },
      cellClasses: {
        type: Array
      },
      winClass: {
        type: String
      },
      redTeamClass: {
        type: String
      },
      blueTeamClass: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.cellsAvailable_ = [];
  }
  connectedCallback() {
    super.connectedCallback();
    this.play_();
  }
  play_() {
    if (!this.isPlaying || !this.cellsAvailable_.length) {
      this.isPlaying = true;
      this.redScore = 0;
      this.blueScore = 0;
      this.turn = Boolean(Math.random() >= .5);
      this.winClass = '';
      this.redTeamClass = '';
      this.blueTeamClass = '';
      this.cellsAvailable_ = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      this.cellClasses = new Array(9).fill('empty');
    }
    const rnd = Math.floor(Math.random() * this.cellsAvailable_.length);
    const cell = this.cellsAvailable_.splice(rnd, 1).pop();
    this.playCell_(cell);
  }
  async playCell_(index) {
    const moveTime = 500;
    const drawTime = 200;
    const doneDrawTime = 500;
    const moveBackTime = 500;
    const playAgainTime = 1000;
    const posClass = `to-pos-${index + 1}`;
    if (this.turn) {
      this.redTeamClass = posClass;
    } else {
      this.blueTeamClass = posClass;
    }
    await delay(moveTime);
    if (this.turn) {
      this.redTeamClass += ' draw';
    } else {
      this.blueTeamClass += ' draw';
    }
    await delay(drawTime);
    const c = Array.from(this.cellClasses);
    c[index] = this.turn ? 'red' : 'blue';
    this.cellClasses = c;
    await delay(doneDrawTime);
    if (this.turn) {
      this.redTeamClass = '';
    } else {
      this.blueTeamClass = '';
    }
    await delay(moveBackTime);
    if (this.turn) {
      this.redScore += 1 << index;
      var w = this.checkWin_(this.redScore);
      if (w !== false) {
        this.showWin_('red', w);
        return;
      }
    } else {
      this.blueScore += 1 << index;
      var w = this.checkWin_(this.blueScore);
      if (w !== false) {
        this.showWin_('blue', w);
        return;
      }
    }
    if (!this.cellsAvailable_.length) {
      window.gtag('event', 'village', {
        action: 'none',
        label: 'tic-tac-draw'
      });
    }
    this.turn = !this.turn;
    await delay(playAgainTime);
    this.play_();
  }
  async showWin_(player, w) {
    this.isPlaying = false;
    window.gtag('event', 'village', {
      action: 'none',
      label: 'tic-tac-win',
      player
    });
    await delay(SHOW_LINE_TIME);
    this.winClass = `${player} pos-${w}`;
    const restartTime = RESTART_GAME_TIME_MIN + Math.random() * (RESTART_GAME_TIME_MAX - RESTART_GAME_TIME_MIN);
    await delay(restartTime);
    this.winClass = '';
    this.play_();
  }
  checkWin_(score) {
    for (let i = 0; i < WINS.length; ++i) {
      if ((WINS[i] & score) === WINS[i]) {
        return i;
      }
    }
    return false;
  }
  update(changedProperties) {
    super.update(changedProperties);
  }
  render() {
    return html`
<div>
  ${this.cellClasses.map(c => html`<div class="cell ${c}"></div>`)}
</div>
<div id="elves-red" class="elves ${this.redTeamClass}"></div>
<div id="elves-blue" class="elves ${this.blueTeamClass}"></div>
<div id="win" class="${this.winClass}"></div>
    `;
  }
}
customElements.define('easteregg-tictactoe', EasterEggTicTacToeElement);
const offset = {
  x: 0,
  y: 0
};
let previousPointer = null;
const container = document.getElementById('village-container');
const scroll = document.getElementById('village-scroll');
function updateOffset(delta) {
  const scrollSize = scroll.getBoundingClientRect();
  const containerSize = container.getBoundingClientRect();
  if (delta) {
    const factor = 2.2;
    offset.x += delta.x / factor;
    offset.y += delta.y / factor;
  }
  const allowed = {
    x: scrollSize.width - containerSize.width >> 1,
    y: scrollSize.height - containerSize.height >> 1
  };
  if (Math.abs(offset.x) > allowed.x) {
    offset.x = Math.sign(offset.x) * allowed.x;
  }
  if (Math.abs(offset.y) > allowed.y) {
    offset.y = Math.sign(offset.y) * allowed.y;
  }
  scroll.style.transform = `translate(-50%, -50%) translate(${~~offset.x}px, ${~~offset.y}px)`;
}
function resetPointer() {
  previousPointer = null;
}
scroll.addEventListener('pointermove', ev => {
  if (ev.buttons !== 1) {
    return;
  }
  const heldPointer = previousPointer;
  previousPointer = {
    x: ev.screenX,
    y: ev.screenY
  };
  if (heldPointer) {
    const delta = {
      x: ev.screenX - heldPointer.x,
      y: ev.screenY - heldPointer.y
    };
    updateOffset(delta);
  }
});
['pointerup', 'pointerout', 'pointerleave'].forEach(eventName => {
  scroll.addEventListener(eventName, resetPointer);
});
window.addEventListener('resize', ev => updateOffset());
sceneApi.preload.images('img/mountain.svg', 'img/road.svg', 'img/ground.svg', 'img/easteregg-tree.svg');
sceneApi.preload.sounds('village_load_sounds');
sceneApi.config({
  scroll: true,
  sound: ['music_start_village', 'village_start']
});
rectify(document.querySelector('.quilt'));
sceneApi.ready(async () => {});