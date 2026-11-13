import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    Constants: {
      SELECTOR_BLOCKS: ".neighbourhood__block",
      SELECTOR_BLOCKS_CONTAINER: ".neighbourhood__container",
      SELECTOR_CONTROL_BUTTONS: ".control__button",
      SELECTOR_CONTROL_LEFT: ".control__button--left",
      SELECTOR_CONTROL_RIGHT: ".control__button--right",
      CLASS_CONTROL_LEFT_ENABLED: "control__button control__button--left",
      CLASS_CONTROL_LEFT_DISABLED: "control__button control__button--left control__button--disabled",
      CLASS_CONTROL_RIGHT_ENABLED: "control__button control__button--right",
      CLASS_CONTROL_RIGHT_DISABLED: "control__button control__button--right control__button--disabled",
      FULL_SCENE_MIN_WIDTH: 3068,
      MIN_BLOCK_WIDTH: 1022,
      VIEW_SIZE_FACTOR: .7,
      VIEW_GAP: .22,
      CONTAINER_TRANSITION_DURATION_MS: 800,
      RESIZE_DEBOUNCE_THRESHOLD_MS: 300
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
        } catch (g) {
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
  b.utils = {
    debounce: function (a, c) {
      var d;
      return function () {
        var e = this,
          f = arguments;
        d && window.clearTimeout(d);
        d = window.setTimeout(function () {
          d = null;
          a.apply(e, f);
        }, c);
      };
    }
  };
  b.Viewport = function (a, c, d) {
    this.elem = a;
    this.viewportElem = this.elem.find(".scene");
    this.blocksElem = c;
    this.blocksContainerElem = d;
    this.mountainElem = this.elem.find(".mountain");
    this.controlsElem = this.elem.find(b.Constants.SELECTOR_CONTROL_BUTTONS);
    this.controlLeftElem = this.elem.find(b.Constants.SELECTOR_CONTROL_LEFT);
    this.controlRightElem = this.elem.find(b.Constants.SELECTOR_CONTROL_RIGHT);
    this.currentPosition = null;
    this.lastDirectionIndex = this.currentDirectionIndex = 0;
    this.isAnimating = !1;
    this.numberOfBlocks = this.blocksElem.length;
    this.swipeDistY = this.swipeDistX = this.touchStartY = this.touchStartX = this.blockWidth = this.blocksContainerWidth = this.viewportScaledWidth = this.viewportWidth = null;
    this.SWIPE_RESTRAINT = this.SWIPE_THRESHOLD = 100;
    this.debouncedResize_ = b.utils.debounce(this.onWindowResize_.bind(this), b.Constants.RESIZE_DEBOUNCE_THRESHOLD_MS);
  };
  b.Viewport.prototype.init = function () {
    this.attachEvents_();
    this.calculateWidth();
    this.setStyles();
    this.setCurrentPosition(this.getBlockPosition());
    this.updateContainerPosition(!0);
    this.blocksContainerElem.css("visibility", "visible");
    b.shared.utils.touchEnabled ? this.elem.addClass("no-hover") : this.elem.addClass("hover");
  };
  b.Viewport.prototype.destroy = function () {
    this.detachEvents_();
    this.debouncing = this.controlsElem = this.blocksContainerElem = this.blocksElem = null;
  };
  b.Viewport.prototype.attachEvents_ = function () {
    $(window).on("resize", this.debouncedResize_);
    this.controlsElem.on("click", this.onPaginateClick_.bind(this));
    this.controlsElem.on("touchstart", this.onPaginateTouch_.bind(this));
    this.elem.on("touchstart", this.onTouchSceneStart_.bind(this));
    this.elem.on("touchmove", this.onTouchSceneMove_.bind(this));
    this.elem.on("touchend", this.onTouchSceneEnd_.bind(this));
  };
  b.Viewport.prototype.detachEvents_ = function () {
    $(window).off("resize", this.debouncedResize_);
    this.controlsElem.off("click");
    this.controlsElem.off("touchstart");
    this.elem.off("touchstart");
    this.elem.off("touchmove");
    this.elem.off("touchend");
  };
  b.Viewport.prototype.onTouchSceneStart_ = function (a) {
    a = a.originalEvent.changedTouches[0];
    this.swipeDist = 0;
    this.touchStartX = a.pageX;
    this.touchStartY = a.pageY;
  };
  b.Viewport.prototype.onTouchSceneMove_ = function (a) {
    a.preventDefault();
  };
  b.Viewport.prototype.onTouchSceneEnd_ = function (a) {
    a = a.originalEvent.changedTouches[0];
    this.swipeDistX = a.pageX - this.touchStartX;
    this.swipeDistY = a.pageY - this.touchStartY;
    Math.abs(this.swipeDistX) >= this.SWIPE_THRESHOLD && Math.abs(this.swipeDistY) <= this.SWIPE_RESTRAINT && (0 > this.swipeDistX ? this.handlePaginate(-1) : this.handlePaginate(1));
  };
  b.Viewport.prototype.onPaginateTouch_ = function (a) {
    a.preventDefault();
    this.handlePaginate(parseInt($(a.currentTarget).data("direction"), 10));
  };
  b.Viewport.prototype.onPaginateClick_ = function (a) {
    this.handlePaginate(parseInt($(a.currentTarget).data("direction"), 10));
  };
  b.Viewport.prototype.onWindowResize_ = function () {
    this.calculateWidth();
    this.setStyles();
    this.paginate(!0);
  };
  b.Viewport.prototype.calculateWidth = function () {
    this.viewportWidth = Math.floor(this.viewportElem.outerWidth());
    this.viewportScaledWidth = Math.floor(this.viewportWidth * b.Constants.VIEW_SIZE_FACTOR);
    this.blocksContainerWidth = Math.floor(this.viewportScaledWidth * this.numberOfBlocks);
    this.blocksContainerWidth = Math.max(this.blocksContainerWidth, b.Constants.FULL_SCENE_MIN_WIDTH);
    this.blockWidth = Math.floor(this.blocksContainerWidth / this.numberOfBlocks);
    this.blockWidth = Math.max(this.blockWidth, b.Constants.MIN_BLOCK_WIDTH);
  };
  b.Viewport.prototype.setStyles = function () {
    var a;
    this.blocksContainerElem.css("width", this.blocksContainerWidth);
    for (a = 0; a < this.numberOfBlocks; a++) this.blocksElem.eq(a).css({
      width: this.blockWidth,
      left: a * this.blockWidth
    });
  };
  b.Viewport.prototype.setCurrentPosition = function (a) {
    this.currentPosition = Math.floor(a);
  };
  b.Viewport.prototype.getBlockPosition = function () {
    return -1 * (this.blocksContainerWidth === b.Constants.FULL_SCENE_MIN_WIDTH ? (this.blocksContainerWidth - this.viewportWidth) / 2 : this.blockWidth - this.blockWidth * b.Constants.VIEW_GAP);
  };
  b.Viewport.prototype.updateContainerPosition = function (a) {
    this.blocksContainerElem.css({
      "transition-duration": (a ? 0 : b.Constants.CONTAINER_TRANSITION_DURATION_MS) + "ms",
      transform: "translateX(" + this.currentPosition + "px)"
    });
    window.setTimeout(function () {
      this.isAnimating = !1;
    }.bind(this), b.Constants.CONTAINER_TRANSITION_DURATION_MS);
  };
  b.Viewport.prototype.moveMountain = function (a) {
    var c = this.mountainElem.data("translate") || 0,
      d = a ? 0 : b.Constants.CONTAINER_TRANSITION_DURATION_MS,
      e = 0,
      f = {
        i: this.blockWidth
      };
    a || (e = this.currentDirectionIndex > this.lastDirectionIndex ? -1 : 1, $({
      i: 0
    }).animate(f, {
      duration: d,
      step: function (a) {
        var d = parseInt(c, 10);
        d = 0 < e ? d + a / 100 : d - a / 100;
        this.mountainElem.css({
          transform: "translateX(" + d + "px)"
        }).data("translate", d);
      }.bind(this)
    }));
  };
  b.Viewport.prototype.paginate = function (a) {
    var c = 0;
    switch (this.currentDirectionIndex) {
      case -1:
        c = 0;
        this.controlLeftElem.attr("class", b.Constants.CLASS_CONTROL_LEFT_DISABLED);
        break;
      case 0:
        c = this.getBlockPosition();
        this.controlLeftElem.attr("class", b.Constants.CLASS_CONTROL_LEFT_ENABLED);
        this.controlRightElem.attr("class", b.Constants.CLASS_CONTROL_RIGHT_ENABLED);
        break;
      case 1:
        c = -1 * (this.blocksContainerWidth - this.viewportWidth), this.controlRightElem.attr("class", b.Constants.CLASS_CONTROL_RIGHT_DISABLED);
    }
    this.setCurrentPosition(c);
    this.updateContainerPosition(a);
    this.moveMountain(a);
  };
  b.Viewport.prototype.handlePaginate = function (a) {
    this.isAnimating || (this.isAnimating = !0, this.lastDirectionIndex = this.currentDirectionIndex, this.currentDirectionIndex -= a, this.currentDirectionIndex = Math.max(this.currentDirectionIndex, -1), this.currentDirectionIndex = Math.min(this.currentDirectionIndex, 1), this.lastDirectionIndex !== this.currentDirectionIndex ? this.paginate() : this.isAnimating = !1);
  };
  b.Scene = function (a) {
    this.elem = $(a);
    this.blocksElem = this.elem.find(b.Constants.SELECTOR_BLOCKS);
    this.blocksContainerElem = this.elem.find(b.Constants.SELECTOR_BLOCKS_CONTAINER);
    this.viewport = new b.Viewport(this.elem, this.blocksElem, this.blocksContainerElem);
    this.viewport.init();
  };
  b.Scene.prototype.moveLeft = function () {
    this.viewport.handlePaginate(1);
  };
  b.Scene.prototype.moveRight = function () {
    this.viewport.handlePaginate(-1);
  };
  b.Scene.prototype.destroy = function () {
    this.viewport.destroy();
    this.blocksContainerElem = this.blocksElem = null;
  };
  b.Game = b.Scene;
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('streetview_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/bike-elf.png', 'img/mountains.svg', 'img/sprite-bird.png');
const game = new Game(document.getElementById('module-streetview'));
window.addEventListener('keydown', ev => {
  switch (ev.key) {
    case 'Left':
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'Right':
    case 'ArrowRight':
      game.moveRight();
      break;
    default:
      return false;
  }
  ev.preventDefault();
});
sceneApi.config({
  sound: ['streetview_start', 'music_start_scene']
});