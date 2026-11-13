import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    Constants: {
      OFFSET: -200,
      MARGIN: 80,
      DURATION: 40,
      STATE_NORMAL: 0,
      STATE_MEDIUM: 1,
      STATE_FAST: 2,
      TIMESCALE_NORMAL: 1,
      TIMESCALE_MEDIUM: 2,
      TIMESCALE_FAST: 4,
      CLASS_SPEED_NORMAL: "",
      CLASS_SPEED_MEDIUM: "speed-mode--medium",
      CLASS_SPEED_FAST: "speed-mode--fast",
      CLOSET_DRESS_ANIMATION_NAME: "module-airport-outfit-cycle-#{color}",
      TYPE_ELF: "elf",
      TYPE_REINDEER: "reindeer",
      REINDEER_PROBABILITY: [!0, !0, !1, !1, !1, !1, !1, !1, !1, !1]
    }
  };
  c.BeltItem = function (a) {
    this.$el = $(a);
    this.id = this.$el.data("id");
    this.type = this.$el.data("type");
    this.crazyType = this.$el.data("crazyType");
    this.color = this.$el.data("color");
    this.free = !0;
    this.width_ = void 0;
  };
  c.BeltItem.prototype = {
    use: function () {
      this.free = !1;
    },
    isFree: function () {
      return this.free;
    },
    isElf: function () {
      return this.type === c.Constants.TYPE_ELF;
    },
    isReindeer: function () {
      return this.type === c.Constants.TYPE_REINDEER;
    },
    enterBelt: function () {
      this.$el.css("visibility", "visible");
    },
    exitBelt: function () {
      this.free = !0;
      this.$el.css("visibility", "hidden");
      this.$el.css("background", "");
    },
    width: function () {
      this.width_ || (this.width_ = this.$el.width());
      return this.width_;
    },
    outerWidth: function () {
      return this.width() + c.Constants.MARGIN;
    },
    startCrazyAnimation: function () {
      this.$el.addClass("elf-" + this.crazyType);
      "passedOut" === this.crazyType && window.santaApp.fire("sound-trigger", "airport_fall");
      "sleeping" === this.crazyType && window.santaApp.fire("sound-trigger", "airport_fall");
      "rollingOnBack" === this.crazyType && window.santaApp.fire("sound-trigger", "airport_fall");
      "fallingBackwards" === this.crazyType && window.santaApp.fire("sound-trigger", "airport_fall");
    },
    stopCrazyAnimation: function () {
      this.$el.removeClass("elf-" + this.crazyType);
    }
  };
  c.BeltItemPool = function (a) {
    this.items_ = [];
    this.lastUsedItem_ = null;
    this.counter_ = -1;
    for (var b = a.length, d = 0; d < b; d++) this.addItem(a[d]);
  };
  c.BeltItemPool.prototype = {
    notSameAsPrevious_: function (a) {
      return this.lastUsedItem_ ? this.lastUsedItem_.id != a.id && this.lastUsedItem_.crazyType != a.crazyType : !0;
    },
    addItem: function (a) {
      this.items_.push(new c.BeltItem(a));
    },
    getFreeItem: function () {
      for (var a = 0, b = null; null === b && a < this.items_.length;) {
        this.counter_++;
        var d = this.items_[this.counter_ % this.items_.length];
        d.isFree() && this.notSameAsPrevious_(d) && (d.use(), b = this.lastUsedItem_ = d);
        a++;
      }
      return b;
    }
  };
  c.Closet = function (a, b, d) {
    this.state = d;
    this.$el = $(a);
    this.$context = $(b);
    this.$colorables = this.$el.find(".outfit .colorable");
    this.$levers = this.$context.find(".closet-lever");
    this.width = this.$el.width();
    this.removeClassTimer = void 0;
  };
  c.Closet.prototype = {
    flashLights_: function (a) {
      var b = c.Constants.CLOSET_DRESS_ANIMATION_NAME;
      b = b.replace("#{color}", a.color);
      a = this.state.dx() * (this.width - a.width()) * .75;
      a /= this.state.timeScale();
      a = Math.max(.2, a);
      this.$colorables.css({
        animationName: b,
        animationDuration: a + "s"
      });
      b = Math.max(1.5, a);
      this.$levers.css({
        animationDuration: b + "s"
      });
      this.$context.addClass("closet--processing");
      window.clearTimeout(this.removeClassTimer);
      this.removeClassTimer = setTimeout(function () {
        this.$context.removeClass("closet--processing");
      }.bind(this), 1E3 * b);
    },
    dress: function (a) {
      this.flashLights_(a);
      a.$el.find(".undressed").css("display", "none");
      this.state.isFastState() ? (a.$el.find(".crazy").css("display", "block"), window.setTimeout(function () {
        a.startCrazyAnimation();
      }, 100)) : a.$el.find(".dressed").css("display", "block");
      window.santaApp.fire("sound-trigger", "airport_machine");
    },
    undress: function (a) {
      a.$el.find(".undressed").css("display", "block");
      a.$el.find(".dressed").css("display", "none");
      a.$el.find(".crazy").css("display", "none");
      a.stopCrazyAnimation();
    }
  };
  c.shared = {};
  c.shared.utils = function () {
    class a {
      constructor(a) {
        this.value = a;
      }
      change(a) {
        const b = this.value !== a;
        this.value = a;
        return b;
      }
      moveToTarget(a, d) {
        let b = +this.value;
        if (this.value !== b) throw new TypeError("SmartValue does not contain a number");
        b < a ? b = Math.min(a, b + d) : b > a && (b = Math.max(a, b - d));
        this.value = b;
        return this;
      }
    }
    return {
      animWithClass: function (a, d, e) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(d);
          const b = () => {
            a.classList.remove(d);
            a.removeEventListener("animationend", b);
            a.removeEventListener("transitionend", b);
            e && (e(), e = null);
          };
          a.addEventListener("animationend", b);
          a.addEventListener("transitionend", b);
        });
      },
      unwrapElement: function (a) {
        return a instanceof Node ? a : a[0] || null;
      },
      computedTransform: function (a) {
        const b = window.getComputedStyle(a);
        let e;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = b.getPropertyValue(a + "transform");
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
        const b = a.finished;
        b && b.then ? b.then(d) : a.addEventListener("finish", d, !1);
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
  c.InputEvent = {};
  (function () {
    let a = "mousedown",
      b = "mousemove",
      d = "mouseup mouseout",
      e = "mouseup";
    window.PointerEvent ? (a = "pointerdown", b = "pointermove", d = "pointerup pointerout", e = "pointerup") : c.shared.utils.touchEnabled && (a += " touchstart", b += " touchmove", d += " touchend touchleave touchcancel", e += " touchend");
    c.InputEvent = {
      CANCEL: d,
      START: a,
      MOVE: b,
      END: e,
      normalize(a) {
        a = a.originalEvent ? a.originalEvent : a;
        return a = a.touches ? a.touches[0] : a;
      }
    };
  })();
  c.Controls = function (a, b) {
    this.$el = $(a);
    this.state = b;
    this.latestX = this.startX = -1;
    this.dragging = !1;
    this.onDragStart_ = this.onDragStart_.bind(this);
    this.onDragMove_ = this.onDragMove_.bind(this);
    this.onDragEnd_ = this.onDragEnd_.bind(this);
    this.bindEvents_();
  };
  c.Controls.prototype = {
    updateState_: function (a) {
      gtag("event", "gameAction", {
        game: "airport",
        action: "interact"
      });
      0 < a ? this.state.nextState() : 0 > a ? this.state.previousState() : 0 === a && this.state.cycleState();
    },
    onDragEnd_: function () {
      this.dragging && (this.$el.off(c.InputEvent.MOVE, this.onDragMove_), this.$el.off(c.InputEvent.END, this.onDragEnd_), this.$el.off(c.InputEvent.CANCEL, this.onDragEnd_), this.updateState_(Math.min(1, Math.max(-1, this.latestX - this.startX))), this.dragging = !1, window.santaApp.fire("sound-trigger", "airport_lever"));
    },
    onDragMove_: function (a) {
      a.preventDefault();
      a = c.InputEvent.normalize(a);
      this.latestX = a.clientX;
    },
    onDragStart_: function (a) {
      a = c.InputEvent.normalize(a);
      this.dragging = !0;
      this.latestX = this.startX = a.clientX;
      this.$el.on(c.InputEvent.MOVE, this.onDragMove_);
      this.$el.on(c.InputEvent.END, this.onDragEnd_);
      this.$el.on(c.InputEvent.CANCEL, this.onDragEnd_);
    },
    bindEvents_: function () {
      this.$el.on(c.InputEvent.START, this.onDragStart_);
    },
    destroy: function () {
      this.$el.off();
    }
  };
  c.State = function (a) {
    this.dx_ = c.Constants.DURATION / a;
    this.currentState_ = c.Constants.STATE_NORMAL;
    this.previousState_ = -1;
    this.stateCycle_ = [c.Constants.STATE_NORMAL, c.Constants.STATE_MEDIUM, c.Constants.STATE_FAST];
  };
  c.State.prototype = {
    setState_: function (a) {
      this.previousState_ = this.currentState_;
      this.currentState_ = a;
      $(this).trigger("change", this.currentState_);
    },
    dx: function () {
      return this.dx_;
    },
    timeScale: function () {
      return this.isMediumState() ? c.Constants.TIMESCALE_MEDIUM : this.isFastState() ? c.Constants.TIMESCALE_FAST : c.Constants.TIMESCALE_NORMAL;
    },
    className: function () {
      return this.isMediumState() ? c.Constants.CLASS_SPEED_MEDIUM : this.isFastState() ? c.Constants.CLASS_SPEED_FAST : c.Constants.CLASS_SPEED_NORMAL;
    },
    soundEventName: function () {
      return this.isMediumState() ? "airport_conveyor_speed_2" : this.isFastState() ? "airport_conveyor_speed_3" : "airport_conveyor_speed_1";
    },
    isNormalState: function () {
      return this.currentState_ === c.Constants.STATE_NORMAL;
    },
    isMediumState: function () {
      return this.currentState_ === c.Constants.STATE_MEDIUM;
    },
    isFastState: function () {
      return this.currentState_ === c.Constants.STATE_FAST;
    },
    cycleState: function () {
      var a = this.currentState_ - this.previousState_;
      this.isFastState() ? this.previousState() : this.isNormalState() ? this.nextState() : 0 > a ? this.previousState() : 0 < a && this.nextState();
    },
    nextState: function () {
      var a = this.stateCycle_[this.currentState_ + 1 % this.stateCycle_.length];
      a > this.currentState_ && this.setState_(a);
    },
    previousState: function () {
      var a = this.stateCycle_[this.currentState_ - 1 % this.stateCycle_.length];
      a < this.currentState_ && this.setState_(a);
    }
  };
  c.Belt = function (a) {
    this.$context = $(a);
    this.$el = $(".conveyor-belt", a);
    this.itemsOnBelt = [];
    this.distance = this.$el.width() + Math.abs(c.Constants.OFFSET);
    this.state = new c.State(this.distance);
    this.$state = $(this.state);
    this.elfPool = new c.BeltItemPool($(".conveyor-belt__item--elf", a));
    this.reindeerPool = new c.BeltItemPool($(".conveyor-belt__item--reindeer", a));
    this.closet = new c.Closet($(".closet", a), a, this.state);
    this.controls = new c.Controls($(".speed-controls", a), this.state);
    this.init_();
  };
  c.Belt.prototype = {
    noReindeerOnBelt_: function () {
      var a = this.itemsOnBelt.length,
        b;
      for (b = 0; b < a; b++) {
        var d = this.itemsOnBelt[b];
        if (d.isReindeer()) return !1;
      }
      return !0;
    },
    timeForReindeer_: function () {
      return this.noReindeerOnBelt_() ? !0 : this.itemsOnBelt[this.itemsOnBelt.length - 1].isReindeer() ? !1 : c.Constants.REINDEER_PROBABILITY[Math.floor(Math.random() * c.Constants.REINDEER_PROBABILITY.length)];
    },
    getNextItem: function () {
      var a;
      !this.state.isNormalState() && this.timeForReindeer_() && (a = this.reindeerPool.getFreeItem());
      a || (a = this.elfPool.getFreeItem());
      return a;
    },
    onEnterBelt: function (a) {
      a.enterBelt();
      this.setup || this.addItem();
    },
    onInsideCloset: function (a) {
      this.closet.dress(a);
    },
    onExitBelt: function (a, b) {
      this.closet.undress(a);
      a.exitBelt();
      a = this.itemsOnBelt.indexOf(a);
      -1 < a && this.itemsOnBelt.splice(a, 1);
      this.timeline.remove(b);
    },
    timeToCloset: function (a) {
      var b = Math.abs(c.Constants.OFFSET) - this.closet.$el.width();
      b = .5 * (c.Constants.DURATION + this.state.dx() * b);
      return a + b;
    },
    itemWidthAsSeconds: function (a) {
      return this.state.dx() * a.outerWidth();
    },
    scheduleItem: function (a, b) {
      this.itemsOnBelt.push(a);
      var d = [{
        transform: "translate3d(0px, 0, 0)"
      }, {
        transform: "translate3d(" + this.distance + "px, 0, 0)"
      }];
      d = this.timeline.schedule(1E3 * b, a.$el.get(0), d, 1E3 * c.Constants.DURATION);
      c.shared.utils.onWebAnimationFinished(d, this.onExitBelt.bind(this, a, d));
      this.timeline.call(1E3 * b, this.onEnterBelt.bind(this, a, b));
      this.timeline.call(1E3 * this.timeToCloset(b), this.onInsideCloset.bind(this, a));
    },
    addItem: function (a) {
      a = a || this.timeline.currentTime / 1E3;
      var b = this.getNextItem();
      b ? (a += this.itemWidthAsSeconds(b), this.closet.undress(b), this.scheduleItem(b, a)) : console.warn("NO FREE ITEM IN POOL");
      return b;
    },
    setSpeedClass_: function (a) {
      this.$context.removeClass(c.Constants.CLASS_SPEED_MEDIUM);
      this.$context.removeClass(c.Constants.CLASS_SPEED_FAST);
      a && this.$context.addClass(a);
    },
    onStateChange_: function () {
      this.setSpeedClass_(this.state.className());
      this.timeline.playbackRate = this.state.timeScale();
      window.santaApp.fire("sound-trigger", this.state.soundEventName());
    },
    init_: function () {
      this.timeline = new AnimationUtilTimeline();
      this.$state.bind("change", this.onStateChange_.bind(this));
      this.setup = !0;
      for (var a = 1, b = 0; 6 > b; b++) {
        var d = this.addItem(a);
        a += this.itemWidthAsSeconds(d);
      }
      this.timeline.currentTime = 1E3 * (a - 1);
      this.setup = !1;
    },
    destroy: function () {
      this.timeline.removeAll();
      this.$state.unbind();
      this.controls.destroy();
      this.reindeerPool = this.elfPool = null;
    }
  };
  c.Game = c.Belt;
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('airport_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/sign1.png', 'img/sign2.png', 'img/bigplane.png', 'img/plane-departing.png', 'img/plane-flying.png', 'img/escalator.png', 'img/closet.png', 'img/baskets.png');
sceneApi.config({
  sound: ['airport_start', 'music_start_scene']
});
const game = new Game(document.getElementById('module-airport'));
window.addEventListener('keydown', ev => {
  switch (ev.key) {
    case 'ArrowRight':
    case 'Right':
    case 'ArrowUp':
    case 'Up':
      game.controls.updateState_(+1);
      break;
    case 'Enter':
    case ' ':
      game.controls.updateState_(0);
      break;
    case 'ArrowLeft':
    case 'Left':
    case 'ArrowDown':
    case 'Down':
      game.controls.updateState_(-1);
      break;
  }
});