import { d as directive, a as isPrimitive, L as LitElement, h as html } from './_21731fba.js';
import { i as id } from './_e8351094.js';
import { p as prepareAsset } from "./_04b2873d_lt.js";

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _state = new WeakMap();
const _infinity = 0x7fffffff;
const until = directive((...args) => part => {
  let state = _state.get(part);
  if (state === undefined) {
    state = {
      lastRenderedIndex: _infinity,
      values: []
    };
    _state.set(part, state);
  }
  const previousValues = state.values;
  let previousLength = previousValues.length;
  state.values = args;
  for (let i = 0; i < args.length; i++) {
    if (i > state.lastRenderedIndex) {
      break;
    }
    const value = args[i];
    if (isPrimitive(value) || typeof value.then !== 'function') {
      part.setValue(value);
      state.lastRenderedIndex = i;
      break;
    }
    if (i < previousLength && value === previousValues[i]) {
      continue;
    }
    state.lastRenderedIndex = _infinity;
    previousLength = 0;
    Promise.resolve(value).then(resolvedValue => {
      const index = state.values.indexOf(value);
      if (index > -1 && index < state.lastRenderedIndex) {
        state.lastRenderedIndex = index;
        part.setValue(resolvedValue);
        part.commit();
      }
    });
  }
});
const sheet = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet.replaceSync("button{pointer-events:auto;cursor:pointer;padding:0;margin:0;position:absolute;opacity:0;border-radius:100000px}svg{pointer-events:none;opacity:.95;transition:opacity .125s;filter:drop-shadow(4px 12px 0 rgba(0, 0, 0, 0.15))}button:focus{outline:none}button:focus+svg{opacity:.7}.size{width:275px;height:270px;overflow:hidden}img{animation-iteration-count:infinite;animation-timing-function:step-end;height:270px}video{object-fit:cover}img,video{pointer-events:none;-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjc1LjA3NCIgaGVpZ2h0PSIyNzAuNTA4IiB2aWV3Qm94PSIwIDAgMjc1LjA3NCAyNzAuNTA4Ij48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTEwNC4xMSAyNjcuNjhhNDguNDk4IDQ4LjQ5OCAwIDAgMCAxOC4wNDMtNi42NzJjMTMuMzQ2IDcuODEgMjkuMzY4IDExLjIzNiA0NS44MzQgOC42NDggMjguMDg3LTQuNDE1IDQ5LjU3NS0yNS4wODcgNTYuMzk2LTUwLjkyLjE2Ny0uMDI0LjMzNC0uMDQ2LjUtLjA3MiAyNy4yMy00LjI4IDQ2LjA2Ny0yOC4zMzIgNDIuMDc2LTUzLjcyLTEuMzA2LTguMy00Ljg5LTE1LjcxNS0xMC4wNzQtMjEuNzg4IDEyLjQ4LTYuMjM0IDIwLjA2Ni0yMC4wMTggMTcuNzg0LTM0LjUzLTIuNTUtMTYuMjMtMTYuNTY0LTI3LjgwNy0zMi40OTUtMjcuNzg2YTYyLjE1IDYyLjE1IDAgMCAwLS43NDctOC44ODhjLTUuMDctMzIuMjUtMzQuMzI2LTU0LjY4NC02Ni4zODItNTEuNzM1QzE2OS4zNDYgNi41NDQgMTU0Ljg3Ni0yIDEzOS41OS40MDRjLTkuNjczIDEuNTItMTcuNjg4IDcuMTE2LTIyLjU4NSAxNC43NTgtOS41NTQtMy40MjQtMjAuMDc4LTQuNTcyLTMwLjgxLTIuODg1LTMxLjAyMiA0Ljg3Ny01My4xMiAzMS43NDYtNTIuOTE0IDYyLjIyNWEzNC43NyAzNC43NyAwIDAgMC00LjI1OC4zOUMxMC4zNTggNzcuODMtMi4zOTQgOTUuMzM3LjU0MiAxMTRjMS45NDUgMTIuMzc4IDEwLjMwNCAyMi4xNSAyMS4xNTYgMjYuNDc1LTE1LjA0NiA4LjQ1My0yNC4wMTMgMjUuNjMtMjEuMTc1IDQzLjY3OCAzLjU4IDIyLjc4IDI0LjYzIDM4LjQ3IDQ3LjM1MyAzNS41NzIuMDEgMi40NTIuMjA0IDQuOTM1LjU5NyA3LjQzMyA0LjE3MyAyNi41NTQgMjkuMDg0IDQ0LjY5NyA1NS42MzcgNDAuNTIzeiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvc3ZnPg==)}@keyframes tutorial-steps-2{0%{transform:translateX(0px)}50%{transform:translateX(-275px)}100%{transform:translateX(0)}}img.steps-2{animation-name:tutorial-steps-2;animation-duration:2s;width:550px}@keyframes tutorial-steps-3{0%{transform:translateX(0px)}33.3333333333%{transform:translateX(-275px)}66.6666666667%{transform:translateX(-550px)}100%{transform:translateX(0)}}img.steps-3{animation-name:tutorial-steps-3;animation-duration:3s;width:825px}@keyframes tutorial-steps-4{0%{transform:translateX(0px)}25%{transform:translateX(-275px)}50%{transform:translateX(-550px)}75%{transform:translateX(-825px)}100%{transform:translateX(0)}}img.steps-4{animation-name:tutorial-steps-4;animation-duration:4s;width:1100px}@keyframes tutorial-steps-5{0%{transform:translateX(0px)}20%{transform:translateX(-275px)}40%{transform:translateX(-550px)}60%{transform:translateX(-825px)}80%{transform:translateX(-1100px)}100%{transform:translateX(0)}}img.steps-5{animation-name:tutorial-steps-5;animation-duration:5s;width:1375px}@keyframes tutorial-steps-6{0%{transform:translateX(0px)}16.6666666667%{transform:translateX(-275px)}33.3333333333%{transform:translateX(-550px)}50%{transform:translateX(-825px)}66.6666666667%{transform:translateX(-1100px)}83.3333333333%{transform:translateX(-1375px)}100%{transform:translateX(0)}}img.steps-6{animation-name:tutorial-steps-6;animation-duration:6s;width:1650px}");
const tutorialDelay = 1500;
const tutorialWidth = 275;
const tutorialHeight = 270;
function prepareTutorialAsset(name, callback) {
  if (name.indexOf('.') === -1) {
    name = `input/${name}.svg`;
  }
  const {
    promise,
    asset
  } = prepareAsset("/ivanguys-web/nochepolar/st/v2026/img/tutorial/" + name);
  promise.then(() => {
    if (asset instanceof Image) {
      const heightRatio = asset.naturalHeight / tutorialHeight;
      const steps = Math.round(asset.naturalWidth / heightRatio / tutorialWidth);
      asset.classList.add('steps-' + steps);
    }
    callback(true);
  }, err => {
    console.warn('failed to prepare tutorial', err);
    callback(false);
  });
  asset.classList.add('size');
  return asset;
}
function resetTutorialAsset(node) {
  if (node instanceof Image) {
    node.style.animation = '';
    node.offsetLeft;
    node.style.animation = null;
  } else {
    node.currentTime = 0;
  }
}
class SantaTutorialElement extends LitElement {
  static get properties() {
    return {
      filter: {
        type: String
      },
      orientation: {
        type: String
      },
      _activeNode: {
        type: Element
      },
      _displayPromise: {
        type: Promise
      }
    };
  }
  static get styles() {
    return [sheet];
  }
  constructor() {
    super();
    this._active = null;
    this._dismissed = new Set();
    this._tutorials = new Set();
    this._displayPromise = Promise.resolve(true);
    this.filter = 'mouse';
    this._idPrefix = id();
  }
  render() {
    return html`
<div ?hidden=${until(this._displayPromise, true)}>
  <button class="size" @click="${this.onClickDismiss_}"></button>
  <svg xmlns="http://www.w3.org/2000/svg" class="size">
    <clipPath id="${this._idPrefix}path">
      <path d="M104.11 267.68a48.498 48.498 0 0 0 18.043-6.672c13.346 7.81 29.368 11.236 45.834 8.648 28.087-4.415 49.575-25.087 56.396-50.92.167-.024.334-.046.5-.072 27.23-4.28 46.067-28.332 42.076-53.72-1.306-8.3-4.89-15.715-10.074-21.788 12.48-6.234 20.066-20.018 17.784-34.53-2.55-16.23-16.564-27.807-32.495-27.786a62.15 62.15 0 0 0-.747-8.888c-5.07-32.25-34.326-54.684-66.382-51.735C169.346 6.544 154.876-2 139.59.404c-9.673 1.52-17.688 7.116-22.585 14.758-9.554-3.424-20.078-4.572-30.81-2.885-31.022 4.877-53.12 31.746-52.914 62.225a34.77 34.77 0 0 0-4.258.39C10.358 77.83-2.394 95.337.542 114c1.945 12.378 10.304 22.15 21.156 26.475-15.046 8.453-24.013 25.63-21.175 43.678 3.58 22.78 24.63 38.47 47.353 35.572.01 2.452.204 4.935.597 7.433 4.173 26.554 29.084 44.697 55.637 40.523z"/>
    </clipPath>
    <g class="size" clip-path="url(#${this._idPrefix}path)">
      <rect class="size" fill="white"></rect>
      <foreignObject clip-path="url(#${this._idPrefix}path)" width="275" height="270" class="size">
        <div class="size">${this._activeNode}</div>
      </foreignObject>
    </g>
  </svg>
</div>
    `;
  }
  onClickDismiss_(ev) {
    this._active && this.dismiss(this._active);
    ev.target.blur();
  }
  reset() {
    this._activeNode = null;
    this._displayPromise = Promise.resolve(true);
    this._active = null;
    this._tutorials = new Set();
    this._dismissed = new Set();
  }
  _valid(cand) {
    if (this._dismissed.has(cand)) {
      return false;
    }
    if (cand.indexOf('.') !== -1) {
      return true;
    }
    const left = cand.split('-')[0];
    if (this.filter === left) {
      return true;
    }
    if (left === 'device' && this.filter === 'touch') {
      return true;
    }
    return false;
  }
  _refreshTutorials() {
    if (this._dismissed.has(this._active)) ;else if (this._active) {
      return;
    }
    let found = null;
    try {
      this._tutorials.forEach(cand => {
        if (this._valid(cand)) {
          found = cand;
          throw null;
        }
      });
    } catch (e) {
      if (e !== null) {
        throw e;
      }
    }
    if (found) {
      let node;
      const p = new Promise(r => {
        node = prepareTutorialAsset(found, ok => r(!ok));
        this._activeNode = node;
      });
      p.then(hidden => {
        if (hidden && node == this._activeNode) {
          this.dismiss(found);
        }
      });
      const timeout = new Promise(r => window.setTimeout(r, tutorialDelay));
      this._displayPromise = Promise.all([p, timeout]).then(([result]) => {
        resetTutorialAsset(node);
        return result;
      });
    } else {
      this._displayPromise = Promise.resolve(true);
      this._activeNode = null;
    }
    this._active = found;
  }
  dismiss(...tutorials) {
    const size = this._dismissed.size;
    tutorials.forEach(tutorial => {
      this._dismissed.add(tutorial);
    });
    if (size !== this._dismissed.size) {
      this._refreshTutorials();
    }
  }
  queue(...tutorials) {
    const size = this._tutorials.size;
    tutorials.forEach(tutorial => {
      this._tutorials.add(tutorial);
    });
    if (size !== this._tutorials.size) {
      this._refreshTutorials();
    }
  }
}
customElements.define('santa-tutorial', SantaTutorialElement);
export { until as u };