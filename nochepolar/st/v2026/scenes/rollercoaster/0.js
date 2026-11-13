import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var CSSAnimationInterval = function (context) {
  this.interval = null;
  this.ACTIVE_CLASS_NAME = 'play';
  this.animationDuration = null;
  this.container = context;
  this.elements = null;
  this.timer = null;
};
CSSAnimationInterval.prototype = {
  init: function (options) {
    this.interval = options.interval || 1000;
    this.animationDuration = options.animationDuration || 3000;
    this.elements = [].slice.call(this.container.querySelectorAll(options.selector));
    return this;
  },
  startAt: function (delayStart) {
    delayStart = delayStart || 0;
    setTimeout(() => {
      this.show();
      this.timer = setInterval(this.show.bind(this), this.interval);
    }, delayStart);
  },
  show: function () {
    if (!this.elements) {
      return;
    }
    this.elements.forEach(element => {
      element.classList.add(this.ACTIVE_CLASS_NAME);
    });
    setTimeout(this.hide.bind(this), this.animationDuration);
  },
  hide: function () {
    if (!this.elements) {
      return;
    }
    this.elements.forEach(element => {
      element.classList.remove(this.ACTIVE_CLASS_NAME);
    });
  },
  destroy: function () {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
    this.timer = null;
    this.interval = null;
    this.context = null;
    this.elements = null;
  }
};
sceneApi.preload.sounds('rollercoaster_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/gradient_60percent-01.svg');
sceneApi.config({
  sound: ['rollercoaster_start', 'music_start_scene']
});
const container = document.getElementById('module-rollercoaster');
const cartAnimationBack = new CSSAnimationInterval(container);
const cartAnimationFront = new CSSAnimationInterval(container);
sceneApi.ready(async () => {
  cartAnimationBack.init({
    selector: '.cart-back',
    interval: 10000,
    animationDuration: 3800
  }).startAt(0);
  cartAnimationFront.init({
    selector: '.cart-front',
    interval: 10000,
    animationDuration: 2300
  }).startAt(6000);
});