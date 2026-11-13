import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    Constants: {
      DEFAULT_SCREEN: "map",
      PRESENTS_SCREEN_SELECTOR: ".presents-screen",
      PRESENTS_PRELOAD_AMOUNT: 6,
      PRESENTS_BELT_DURATION: 12,
      PRESENTS_ROTATION_DURATION: .6,
      PRESENTS_DROP_DURATION: .6,
      PRESENTS_MARGIN_MIN: 50,
      PRESENTS_MARGIN_MAX: 100,
      PRESENTS_DROP_ROTATION_MIN: 140,
      PRESENTS_DROP_ROTATION_MAX: 180,
      SLEIGH_SCREEN_SELECTOR: ".sleigh-screen",
      SLEIGH_SHIMMER_DELAY_MIN: 3E3,
      SLEIGH_SHIMMER_DELAY_MAX: 9E3,
      SLEIGH_HAMMER_DELAY_MIN: 100,
      SLEIGH_HAMMER_DELAY_MAX: 1E3
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
        } catch (k) {
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
  c.Present = function (a) {
    this.$el = $(a);
    this.free = !0;
    this.width_ = 0;
    this.margin_ = this.getRandomMargin_();
  };
  c.Present.prototype = {
    getRandomMargin_: function () {
      return Math.floor(Math.random() * (c.Constants.PRESENTS_MARGIN_MAX - c.Constants.PRESENTS_MARGIN_MIN + 1) + c.Constants.PRESENTS_MARGIN_MIN);
    },
    use: function () {
      this.free = !1;
    },
    isFree: function () {
      return this.free;
    },
    onEnterBelt: function () {},
    onExitBelt: function () {
      this.free = !0;
    },
    width: function () {
      this.width_ || (this.width_ = this.$el.width());
      return this.width_;
    },
    outerWidth: function () {
      return this.width() + this.margin_;
    }
  };
  c.PresentPool = function (a) {
    this.items_ = [];
    this.counter_ = -1;
    this.load_(a);
  };
  c.PresentPool.prototype = {
    load_: function (a) {
      for (var b = a.length, d = 0; d < b; d++) this.items_.push(new c.Present(a[d]));
    },
    getFreeItem: function () {
      for (var a = 0, b = null; null === b && a < this.items_.length;) {
        this.counter_++;
        var d = this.items_[this.counter_ % this.items_.length];
        d.isFree() && (d.use(), b = d);
        a++;
      }
      return b;
    }
  };
  c.PresentsBelt = function (a, b) {
    this.$el = $(a);
    this.options = b || {};
    this.options.timeOffset = this.options.timeOffset || 0;
    this.options.direction = this.options.direction || "ltr";
    this.$presentEls = this.$el.find(".presents-screen__belt__present");
    this.distance_ = this.$el.width();
    this.dx_ = c.Constants.PRESENTS_BELT_DURATION / this.distance_;
    this.presentPool = new c.PresentPool(this.$presentEls);
    this.timeline = null;
    this.init_();
  };
  c.PresentsBelt.prototype = {
    onEnterBelt_: function (a) {
      a.onEnterBelt();
      this.setup || this.addItem_();
    },
    onExitBelt_: function (a, b) {
      this.timeline.remove(b);
      a.onExitBelt();
    },
    itemWidthAsSeconds_: function (a) {
      return this.dx_ * a.outerWidth();
    },
    getRandomDropRotation_: function () {
      var a = c.Constants;
      return Math.floor(Math.random() * (a.PRESENTS_DROP_ROTATION_MAX - a.PRESENTS_DROP_ROTATION_MIN + 1) + a.PRESENTS_DROP_ROTATION_MIN);
    },
    scheduleItem_: function (a, b) {
      var d = "ltr" === this.options.direction ? 1 : -1,
        e = .5 * a.width(),
        f = 35 * d,
        k = (this.getRandomDropRotation_() + 35) * d,
        h = d * this.distance_ - e,
        l = b + c.Constants.PRESENTS_BELT_DURATION;
      e = l + c.Constants.PRESENTS_ROTATION_DURATION;
      var m = e + c.Constants.PRESENTS_DROP_DURATION,
        g = m - b;
      d = [{
        transform: "translate(0px, 0px)"
      }, {
        transform: "translate(" + h + "px, 0px)",
        offset: (l - b) / g
      }, {
        transform: "translate(" + h + "px, 0px) rotate(" + f + "deg)",
        offset: (e - b) / g,
        easing: "ease-in"
      }, {
        transform: "translate(" + (h + 90 * d) + "px, 100px) rotate(" + k + "deg)"
      }];
      f = a.$el.get(0);
      g = this.timeline.schedule(1E3 * b, f, d, 1E3 * g);
      this.timeline.call(1E3 * b, this.onEnterBelt_.bind(this, a));
      this.timeline.call(1E3 * e, function () {
        window.santaApp.fire("sound-trigger", "command_presentdrop");
      });
      this.timeline.call(1E3 * m, this.onExitBelt_.bind(this, a, g));
    },
    addItem_: function (a = this.timeline.currentTime / 1E3) {
      var b = this.presentPool.getFreeItem();
      b && (a += this.itemWidthAsSeconds_(b), this.scheduleItem_(b, a));
      return b;
    },
    init_: function () {
      this.timeline = new AnimationUtilTimeline();
      this.setup = !0;
      for (var a = 1, b = 0; b < c.Constants.PRESENTS_PRELOAD_AMOUNT; b++) {
        var d = this.addItem_(a);
        a += this.itemWidthAsSeconds_(d);
      }
      this.timeline.currentTime = 1E3 * (a - 1 + this.options.timeOffset);
      this.setup = !1;
    },
    destroy: function () {
      this.timeline.removeAll();
      this.presentPool = null;
    }
  };
  c.PresentsScreen = function (a) {
    this.$el = $(a);
    this.$leftBeltEl = this.$el.find(".presents-screen__belt--left");
    this.$rightBeltEl = this.$el.find(".presents-screen__belt--right");
    this.isActive = !1;
  };
  c.PresentsScreen.prototype = {
    onActive: function () {
      this.isActive = !0;
      this.leftBelt = new c.PresentsBelt(this.$leftBeltEl);
      this.rightBelt = new c.PresentsBelt(this.$rightBeltEl, {
        direction: "rtl",
        timeOffset: -1
      });
      window.santaApp.fire("sound-trigger", "command_conveyor_start");
    },
    onInactive: function () {
      this.isActive = !1;
      this.leftBelt && this.rightBelt && (this.leftBelt.destroy(), this.rightBelt.destroy());
      window.santaApp.fire("sound-trigger", "command_conveyor_stop");
    }
  };
  c.SleighScreen = function (a) {
    this.$el = $(a);
    this.$shimmerEl = this.$el.find(".js-shimmer");
    this.$hammerArm = this.$el.find(".js-hammer-arm");
    this.$lift = this.$el.find(".js-lift");
    this.isActive = !1;
    this.hammerTimeout = this.timeoutShimmer = void 0;
    this.onTimeToShimmer_ = this.onTimeToShimmer_.bind(this);
    this.scheduleShimmerAnimation_ = this.scheduleShimmerAnimation_.bind(this);
    this.runHammerAnimation_ = this.runHammerAnimation_.bind(this);
    this.onHammerAnimationEnd_ = this.onHammerAnimationEnd_.bind(this);
  };
  c.SleighScreen.prototype = {
    getRandomDelay_: function (a, b) {
      return Math.floor(Math.random() * (a - b + 1) + b);
    },
    getRandomShimmerDelay_: function () {
      return this.getRandomDelay_(c.Constants.SLEIGH_SHIMMER_DELAY_MAX, c.Constants.SLEIGH_SHIMMER_DELAY_MIN);
    },
    getRandomHammerDelay_: function () {
      return this.getRandomDelay_(c.Constants.SLEIGH_HAMMER_DELAY_MAX, c.Constants.SLEIGH_HAMMER_DELAY_MIN);
    },
    onTimeToShimmer_: function () {
      c.shared.utils.animWithClass(this.$shimmerEl, "run-animation", this.scheduleShimmerAnimation_);
    },
    scheduleShimmerAnimation_: function () {
      if (this.isActive) {
        var a = this.getRandomShimmerDelay_();
        this.timeoutShimmer = window.setTimeout(this.onTimeToShimmer_, a);
      }
    },
    runHammerAnimation_: function () {
      this.isActive && c.shared.utils.animWithClass(this.$hammerArm, "run-animation", this.onHammerAnimationEnd_);
    },
    onHammerAnimationEnd_: function () {
      if (this.isActive) {
        window.santaApp.fire("sound-trigger", "command_hammer");
        var a = this.getRandomHammerDelay_();
        this.hammerTimeout = window.setTimeout(this.runHammerAnimation_, a);
      }
    },
    onActive: function () {
      this.startTime = Date.now();
      this.isActive = !0;
      this.scheduleShimmerAnimation_();
      this.runHammerAnimation_();
    },
    onInactive: function () {
      this.isActive = !1;
      window.clearTimeout(this.timeoutShimmer);
      window.clearTimeout(this.hammerTimeout);
      this.$hammerArm.off();
    }
  };
  c.WindsockScreen = function () {
    this.isActive = !1;
  };
  c.WindsockScreen.prototype = {
    onActive: function () {
      this.isActive = !0;
      window.santaApp.fire("sound-trigger", "command_wind_start");
    },
    onInactive: function () {
      this.isActive = !1;
      window.santaApp.fire("sound-trigger", "command_wind_stop");
    }
  };
  c.Scene = function (a) {
    this.$el = $(a);
    this.$windsockEl = this.$el.find(c.Constants.WINDSOCK_SCREEN_SELECTOR);
    this.$presentsEl = this.$el.find(c.Constants.PRESENTS_SCREEN_SELECTOR);
    this.$sleighEl = this.$el.find(c.Constants.SLEIGH_SCREEN_SELECTOR);
    this.javascriptScreens = {};
    this.javascriptScreens.windsock = new c.WindsockScreen();
    this.javascriptScreens.presents = new c.PresentsScreen(this.$presentsEl);
    this.javascriptScreens.sleigh = new c.SleighScreen(this.$sleighEl);
    this.currentScreen = void 0;
    this.onScreenLinkClick_ = this.onScreenLinkClick_.bind(this);
    this.onElfClick_ = this.onElfClick_.bind(this);
    this.addEventHandlers_();
    this.showScreen_(c.Constants.DEFAULT_SCREEN);
  };
  c.Scene.prototype = {
    showScreen_: function (a) {
      if (this.currentScreen != a) {
        var b = this.javascriptScreens[this.currentScreen];
        if (b) b.onInactive();
        this.$el.find(".big-screen__container").hide();
        this.$el.find(".big-screen__container[data-screen=" + a + "]").show();
        this.currentScreen = a;
        if (b = this.javascriptScreens[this.currentScreen]) b.onActive();
        "map" === a && window.santaApp.fire("sound-trigger", "command_map");
        gtag("event", "gameAction", {
          game: "commandcentre",
          action: "interact"
        });
      }
    },
    onScreenLinkClick_: function (a) {
      a = $(a.currentTarget).data("screen");
      this.showScreen_(a);
    },
    onElfClick_: function (a) {
      a = $(a.currentTarget);
      c.shared.utils.animWithClass(a, "run-animation");
    },
    addEventHandlers_: function () {
      this.$el.find("[data-big-screen-link]").on(c.InputEvent.START, this.onScreenLinkClick_);
      this.$el.find("[data-trigger-elf-wave]").on(c.InputEvent.START, this.onElfClick_);
    },
    removeEventHandlers_: function () {
      this.$el.find("[data-big-screen-link]").off(c.InputEvent.START, this.onScreenLinkClick_);
      this.$el.find("[data-trigger-elf-wave]").off(c.InputEvent.START, this.onElfClick_);
    },
    destroy: function () {
      this.removeEventHandlers_();
      Object.keys(this.javascriptScreens).forEach(function (a) {
        this.javascriptScreens[a].onInactive();
      }, this);
      this.javascriptScreens = null;
    }
  };
  c.Game = c.Scene;
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('command_load_sounds');
sceneApi.preload.images('img/cloud.min.svg', 'img/line-dotted_33percent.min.svg', 'img/line-solid_33percent.min.svg', 'img/logo.svg', 'img/map_33percent.min.svg', 'img/presents-cog_33percent.min.svg', 'img/presents-present-blue_33percent.min.svg', 'img/presents-present-green_33percent.min.svg', 'img/presents-present-red_33percent.min.svg', 'img/top-screen-trees_33percent.min.svg', 'img/windsock-wind_33percent.min.svg', 'img/santa_sleep_x2/santasleep_00045.png', 'img/santa_sleep_x2/santasleep_00047.png', 'img/santa_sleep_x2/santasleep_00049.png', 'img/santa_sleep_x2/santasleep_00051.png', 'img/santa_sleep_x2/santasleep_00053.png', 'img/santa_sleep_x2/santasleep_00055.png', 'img/santa_sleep_x2/santasleep_00057.png', 'img/santa_sleep_x2/santasleep_00059.png', 'img/santa_sleep_x2/santasleep_00061.png', 'img/santa_sleep_x2/santasleep_00063.png', 'img/santa_sleep_x2/santasleep_00065.png', 'img/santa_sleep_x2/santasleep_00067.png', 'img/santa_sleep_x2/santasleep_00069.png', 'img/santa_sleep_x2/santasleep_00071.png', 'img/santa_sleep_x2/santasleep_00073.png', 'img/santa_sleep_x2/santasleep_00075.png', 'img/santa_sleep_x2/santasleep_00077.png', 'img/santa_sleep_x2/santasleep_00079.png', 'img/santa_sleep_x2/santasleep_00081.png', 'img/santa_sleep_x2/santasleep_00083.png', 'img/santa_sleep_x2/santasleep_00085.png', 'img/santa_sleep_x2/santasleep_00087.png', 'img/santa_sleep_x2/santasleep_00089.png', 'img/santa_sleep_x2/santasleep_00091.png', 'img/santa_sleep_x2/santasleep_00093.png', 'img/santa_sleep_x2/santasleep_00095.png', 'img/santa_sleep_x2/santasleep_00097.png', 'img/santa_sleep_x2/santasleep_00099.png', 'img/santa_sleep_x2/santasleep_00101.png', 'img/santa_sleep_x2/santasleep_00103.png', 'img/santa_sleep_x2/santasleep_00105.png', 'img/santa_sleep_x2/santasleep_00107.png', 'img/santa_sleep_x2/santasleep_00109.png', 'img/santa_sleep_x2/santasleep_00111.png', 'img/santa_sleep_x2/santasleep_00113.png', 'img/santa_sleep_x2/santasleep_00115.png', 'img/santa_sleep_x2/santasleep_00117.png', 'img/santa_sleep_x2/santasleep_00119.png', 'img/santa_sleep_x2/santasleep_00121.png', 'img/santa_sleep_x2/santasleep_00123.png', 'img/santa_sleep_x2/santasleep_00125.png', 'img/santa_sleep_x2/santasleep_00127.png', 'img/santa_sleep_x2/santasleep_00129.png', 'img/santa_sleep_x2/santasleep_00131.png', 'img/santa_sleep_x2/santasleep_00133.png', 'img/santa_sleep_x2/santasleep_00135.png', 'img/benchpress_x2/benchpress_00000.png', 'img/benchpress_x2/benchpress_00002.png', 'img/benchpress_x2/benchpress_00004.png', 'img/benchpress_x2/benchpress_00006.png', 'img/benchpress_x2/benchpress_00008.png', 'img/benchpress_x2/benchpress_00010.png', 'img/benchpress_x2/benchpress_00012.png', 'img/benchpress_x2/benchpress_00014.png', 'img/benchpress_x2/benchpress_00016.png', 'img/benchpress_x2/benchpress_00018.png', 'img/benchpress_x2/benchpress_00020.png', 'img/benchpress_x2/benchpress_00022.png', 'img/benchpress_x2/benchpress_00024.png', 'img/benchpress_x2/benchpress_00026.png', 'img/benchpress_x2/benchpress_00028.png', 'img/jumprope_x2/Jumprope_00000.png', 'img/jumprope_x2/Jumprope_00001.png', 'img/jumprope_x2/Jumprope_00002.png', 'img/jumprope_x2/Jumprope_00003.png', 'img/jumprope_x2/Jumprope_00004.png', 'img/jumprope_x2/Jumprope_00005.png', 'img/jumprope_x2/Jumprope_00006.png', 'img/jumprope_x2/Jumprope_00007.png', 'img/jumprope_x2/Jumprope_00008.png', 'img/jumprope_x2/Jumprope_00009.png', 'img/jumprope_x2/Jumprope_00010.png', 'img/treadmill_x2/treadmill00000.png', 'img/treadmill_x2/treadmill00002.png', 'img/treadmill_x2/treadmill00004.png', 'img/treadmill_x2/treadmill00006.png', 'img/treadmill_x2/treadmill00008.png', 'img/treadmill_x2/treadmill00010.png', 'img/treadmill_x2/treadmill00012.png', 'img/treadmill_x2/treadmill00014.png', 'img/treadmill_x2/treadmill00016.png', 'img/treadmill_x2/treadmill00018.png', 'img/treadmill_x2/treadmill00020.png', 'img/treadmill_x2/treadmill00022.png', 'img/treadmill_x2/treadmill00024.png', 'img/treadmill_x2/treadmill00026.png', 'img/treadmill_x2/treadmill00028.png', 'img/treadmill_x2/treadmill00030.png', 'img/treadmill_x2/treadmill00032.png', 'img/treadmill_x2/treadmill00034.png', 'img/treadmill_x2/treadmill00036.png', 'img/treadmill_x2/treadmill00038.png');
sceneApi.config({
  sound: ['command_start', 'music_start_scene']
});
sceneApi.ready(async () => {
  new Game(document.getElementById('module-commandcentre'));
});