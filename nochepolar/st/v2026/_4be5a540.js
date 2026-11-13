import { L as LitElement, h as html, i as ifDefined, n as nothing } from './_21731fba.js';
import { f as play } from './_e1311d95.js';
const sheet = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet.replaceSync(":host{width:55px;height:55px;font-size:32px}svg.icon{position:absolute;margin:auto;width:24px;height:24px;fill:currentColor;transition:opacity 4.25s ease-in-out}svg.icon.curr{opacity:1}svg.icon.last{opacity:0}.fade .curr{opacity:0}.fade .last{opacity:1}button{line-height:100%;width:100%;height:100%;padding:0;border-radius:20000px;position:relative;border:2px solid transparent;cursor:pointer;color:#fff;text-align:center;font:inherit;font-family:\"Material Icons\";display:flex;align-items:center;justify-content:center;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";will-change:box-shadow,transform;transition:box-shadow .25s ease-in,transform .25s ease-in,background .25s ease-in,color .25s ease-in;transform:translate(-3px, -5px);background:var(--color-bar, #ff3333);box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 var(--color-bar, #ff3333),8px 7px 0 2px rgba(0,0,0,.24)}button[hidden]{display:none}button:active{transition-duration:.05s;transform:translate(0, 0)}button:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 var(--color-bar, #ff3333),0 0 1px rgba(0,0,0,.16)}button.yellow{background:#ffc100;box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 #ffc100,8px 7px 0 2px rgba(0,0,0,.24)}button.yellow:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 #ffc100,0 0 1px rgba(0,0,0,.16)}button.pink{background:#ff0060;box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 #ff0060,8px 7px 0 2px rgba(0,0,0,.24)}button.pink:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 #ff0060,0 0 1px rgba(0,0,0,.16)}button.red{background:#ff3f00;box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 #ff3f00,8px 7px 0 2px rgba(0,0,0,.24)}button.red:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 #ff3f00,0 0 1px rgba(0,0,0,.16)}button.purple{background:#ad00ad;box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 #ad00ad,8px 7px 0 2px rgba(0,0,0,.24)}button.purple:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 #ad00ad,0 0 1px rgba(0,0,0,.16)}button.green{background:#32a658;box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 #32a658,8px 7px 0 2px rgba(0,0,0,.24)}button.green:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 #32a658,0 0 1px rgba(0,0,0,.16)}button.orange{background:#ff9802;box-shadow:3px 5px 0 rgba(0,0,0,.3),3px 5px 0 #ff9802,8px 7px 0 2px rgba(0,0,0,.24)}button.orange:active{box-shadow:0 0 0 rgba(0,0,0,.3),0 0 0 #ff9802,0 0 1px rgba(0,0,0,.16)}button[disabled]{pointer-events:none;cursor:default}");
class SantaButtonElement extends LitElement {
  static get styles() {
    return [sheet];
  }
  static get properties() {
    return {
      path: {
        type: String
      },
      color: {
        type: String
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      ariaExpanded: {
        attribute: 'aria-expanded'
      },
      ariaLabel: {
        reflect: true,
        attribute: 'aria-label'
      }
    };
  }
  constructor() {
    super();
    this.path = '';
    this.addEventListener('mouseenter', () => {
      play('generic_button_over');
    });
    this.addEventListener('mousedown', () => {
      play('generic_button_click');
    });
    this.addEventListener('touchdown', () => {
      play('generic_button_click');
    });
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has('path')) {
      if (this.path) {
        this._lastPath = changedProperties.get('path');
      } else {
        this._lastPath = undefined;
      }
    }
    return super.shouldUpdate(changedProperties);
  }
  render() {
    let inner;
    if (this.path) {
      inner = html`<svg class="icon curr"><path d=${this.path || ''} /></svg>`;
    } else {
      inner = html`<slot></slot>`;
    }
    return html`<button
      class="${this.color || ''}"
      .disabled=${this.disabled}
      @click=${this._maybePreventClick}
      aria-expanded=${ifDefined(this.ariaExpanded || undefined)}
      aria-label=${this.ariaLabel || nothing}>${inner}</button>`;
  }
  focus() {
    this.shadowRoot.querySelector('button').focus();
  }
  _maybePreventClick(event) {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.role = 'presentation';
  }
}
customElements.define('santa-button', SantaButtonElement);