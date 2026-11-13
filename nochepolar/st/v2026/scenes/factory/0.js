import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    Constants: {
      DELAY_MS: 1E3,
      DRIVE_MS: 7E3,
      LOAD_MS: 2E3,
      DROP_MS: 300,
      PULL_MS: 400,
      LOOKUP_MS: 300,
      BALLDROP_MS: 1500,
      SWALLOW_MS: 400,
      BELLY_MS: 300,
      PUSH_MS: 200,
      EASE_IN_OUT_QUAD: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
      EASE_IN_QUAD: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
      EASE_OUT_QUAD: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      EASE_OUT_QUINT: "cubic-bezier(0.230, 1.000, 0.320, 1.000)"
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
  c.CandyMachine = function (a) {
    this.$el = $(a);
    this.$btnEl = this.$el.find(".js-drop-button");
    this.$elfMouthEl = this.$el.find(".js-drop-elf-mouth");
    this.$elfHeadEl = this.$el.find(".js-drop-elf-head");
    this.$elfArmEl = this.$el.find(".js-drop-elf-arm");
    this.$elfBellyEl = this.$el.find(".js-drop-elf-belly");
    this.$leverEl = this.$el.find(".js-drop-lever");
    this.$barrelEl = this.$el.find(".js-drop-barrel");
    this.$ballEl = this.$el.find(".js-drop-ball");
    this.run = this.run.bind(this);
    this.onBellyFull_ = this.onBellyFull_.bind(this);
    this.reduceBelly_ = this.reduceBelly_.bind(this);
    this.reduceBellyTimer_ = void 0;
    this.hasBigBelly_ = !1;
    this.bellyPlayer_ = this.player_ = null;
    this.init_();
  };
  c.CandyMachine.prototype = {
    init_: function () {
      var a = c.Constants,
        b = a.PULL_MS + a.LOOKUP_MS + a.BALLDROP_MS + a.SWALLOW_MS + a.BELLY_MS + a.PUSH_MS;
      this.offsets_ = {
        pull: 0,
        lookup: a.PULL_MS / b,
        gape: (a.PULL_MS + a.LOOKUP_MS) / b,
        swallow: (a.PULL_MS + a.LOOKUP_MS + a.BALLDROP_MS) / b,
        belly: (a.PULL_MS + a.LOOKUP_MS + a.BALLDROP_MS + a.SWALLOW_MS) / b,
        push: (a.PULL_MS + +a.LOOKUP_MS + a.BALLDROP_MS + a.SWALLOW_MS + a.BELLY_MS) / b
      };
      this.timing_ = {
        duration: b,
        easing: a.EASE_OUT_QUAD,
        fill: "forwards"
      };
      this.duration_ = b;
      this.$btnEl.on(c.InputEvent.START, this.run);
    },
    getPullAnimation_: function () {
      var a = c.Constants,
        b = [{
          transform: "rotateZ(0deg)",
          offset: 0
        }, {
          transform: "rotateZ(-18deg)",
          offset: this.offsets_.lookup
        }, {
          transform: "rotateZ(-18deg)",
          offset: this.offsets_.push,
          easing: a.EASE_IN_QUAD
        }, {
          transform: "rotateZ(0deg)",
          offset: 1
        }];
      a = new KeyframeEffect(this.$elfArmEl[0], [{
        transform: "translate3d(0px,0,0)",
        offset: 0
      }, {
        transform: "translate3d(-20px,0,0)",
        offset: this.offsets_.lookup
      }, {
        transform: "translate3d(-20px,0,0)",
        offset: this.offsets_.push,
        easing: a.EASE_IN_QUAD
      }, {
        transform: "translate3d(0px,0,0)",
        offset: 1
      }], this.timing_);
      b = new KeyframeEffect(this.$leverEl[0], b, this.timing_);
      return new GroupEffect([a, b]);
    },
    getSwallowAnimation_: function () {
      var a = [{
          transform: "rotateZ(0deg)",
          offset: 0
        }, {
          transform: "rotateZ(0deg)",
          offset: this.offsets_.pull
        }, {
          transform: "rotateZ(45deg)",
          offset: this.offsets_.gape
        }, {
          transform: "rotateZ(45deg)",
          offset: this.offsets_.swallow
        }, {
          transform: "rotateZ(0deg)",
          offset: this.offsets_.belly
        }, {
          transform: "rotateZ(0deg)",
          offset: 1
        }],
        b = new KeyframeEffect(this.$elfHeadEl[0], [{
          transform: "rotateZ(95deg)",
          offset: 0
        }, {
          transform: "rotateZ(95deg)",
          offset: this.offsets_.pull
        }, {
          transform: "rotateZ(0deg)",
          offset: this.offsets_.gape
        }, {
          transform: "rotateZ(0deg)",
          offset: this.offsets_.swallow
        }, {
          transform: "rotateZ(95deg)",
          offset: this.offsets_.belly
        }, {
          transform: "rotateZ(95deg)",
          offset: 1
        }], this.timing_);
      a = new KeyframeEffect(this.$elfMouthEl[0], a, this.timing_);
      return new GroupEffect([b, a]);
    },
    getBellyAnimation_: function () {
      var a = c.Constants;
      return new KeyframeEffect(this.$elfBellyEl[0], [{
        transform: "translateX(0px)",
        offset: 0
      }, {
        transform: "translateX(0px)",
        offset: this.offsets_.swallow,
        easing: a.EASE_IN_OUT_QUAD
      }, {
        transform: "translateX(14px)",
        offset: this.offsets_.push,
        easing: a.EASE_IN_OUT_QUAD
      }, {
        transform: "translateX(14px)",
        offset: 1
      }], this.timing_);
    },
    run: function () {
      if (c.shared.utils.playerFinished(this.player_)) {
        c.shared.utils.animWithClass(this.$barrelEl, "run-animation");
        c.shared.utils.animWithClass(this.$ballEl, "run-animation");
        var a = this.getPullAnimation_(),
          b = this.getSwallowAnimation_();
        a = new GroupEffect([a, b], {
          iterations: 1
        });
        this.player_ = document.timeline.play(a);
        this.player_.addEventListener("finish", this.onBellyFull_);
        window.santaApp.fire("sound-trigger", "factory_candy");
        this.hasBigBelly_ ? window.clearTimeout(this.reduceBellyTimer_) : (a = this.getBellyAnimation_(), this.hasBigBelly_ = !0, this.bellyPlayer_ = document.timeline.play(a));
      }
    },
    reduceBelly_: function () {
      this.hasBigBelly_ = !1;
      0 < this.bellyPlayer_.playbackRate && (this.bellyPlayer_.currentTime = this.offsets_.push * this.duration_, this.bellyPlayer_.playbackRate = .5, this.bellyPlayer_.reverse());
    },
    onBellyFull_: function () {
      this.reduceBellyTimer_ = window.setTimeout(this.reduceBelly_, 3E3);
    },
    destroy: function () {
      this.$btnEl.on(c.InputEvent.START, this.run_);
      this.player_ && this.player_.cancel();
      this.bellyPlayer_ && this.bellyPlayer_.cancel();
      window.clearTimeout(this.reduceBellyTimer_);
    }
  };
  c.TetrisTruck = function (a, b) {
    this.$el = $(a);
    this.$cogEl = $(b);
    this.$wheelOne = this.$el.find(".js-truck-wheel-one");
    this.$wheelTwo = this.$el.find(".js-truck-wheel-two");
    this.loads = this.$el.find(".js-truck-load").children();
    this.numberOfLoads = this.loads.length;
    this.loadCounter = -1;
    this.running = !1;
    this.run_ = this.run_.bind(this);
    this.player_ = null;
    a = c.Constants;
    b = a.DELAY_MS + 2 * a.DRIVE_MS + a.LOAD_MS + a.DROP_MS;
    this.offsets_ = {
      enter: a.DELAY_MS / b,
      load: (a.DELAY_MS + a.DRIVE_MS) / b,
      drop: (a.DELAY_MS + a.DRIVE_MS + a.LOAD_MS) / b,
      exit: (a.DELAY_MS + a.DRIVE_MS + a.LOAD_MS + a.DROP_MS) / b
    };
    this.timing_ = {
      duration: b
    };
    this.running = !0;
    this.run_();
  };
  c.TetrisTruck.prototype = {
    getLoad_: function () {
      this.loadCounter++;
      return this.loads[this.loadCounter % this.numberOfLoads];
    },
    getDriveAnimation_: function () {
      var a = c.Constants;
      return new KeyframeEffect(this.$el[0], [{
        transform: "translate3d(100%,0,0)",
        offset: 0
      }, {
        transform: "translate3d(100%,0,0)",
        offset: this.offsets_.enter,
        easing: a.EASE_IN_OUT_QUAD
      }, {
        transform: "translate3d(0%,0,0)",
        offset: this.offsets_.load
      }, {
        transform: "translate3d(0%,0,0)",
        offset: this.offsets_.exit,
        easing: a.EASE_IN_OUT_QUAD
      }, {
        transform: "translate3d(-100%,0,0)",
        offset: 1
      }], this.timing_);
    },
    getWheelAnimation_: function () {
      var a = c.Constants;
      a = [{
        transform: "rotateZ(0deg)",
        offset: 0
      }, {
        transform: "rotateZ(0deg)",
        offset: this.offsets_.enter,
        easing: a.EASE_IN_OUT_QUAD
      }, {
        transform: "rotateZ(-1080deg)",
        offset: this.offsets_.load
      }, {
        transform: "rotateZ(-1080deg)",
        offset: this.offsets_.exit,
        easing: a.EASE_IN_OUT_QUAD
      }, {
        transform: "rotateZ(-2160deg)",
        offset: 1
      }];
      return new GroupEffect([new KeyframeEffect(this.$wheelOne[0], a, this.timing_), new KeyframeEffect(this.$wheelTwo[0], a, this.timing_)]);
    },
    getCogAnimation_: function () {
      return new KeyframeEffect(this.$cogEl[0], [{
        transform: "rotateZ(0deg)",
        offset: 0
      }, {
        transform: "rotateZ(0deg)",
        offset: this.offsets_.load
      }, {
        transform: "rotateZ(360deg)",
        offset: this.offsets_.drop
      }, {
        transform: "rotateZ(360deg)",
        offset: 1
      }], this.timing_);
    },
    getLoadAnimation_: function () {
      var a = c.Constants,
        b = this.getLoad_();
      return new KeyframeEffect(b, [{
        transform: "translateY(-120px)",
        offset: 0
      }, {
        transform: "translateY(-120px)",
        offset: this.offsets_.load
      }, {
        transform: "translateY(-80px)",
        offset: this.offsets_.drop,
        easing: a.EASE_IN_QUAD
      }, {
        transform: "translateY(0)",
        offset: this.offsets_.exit
      }, {
        transform: "translateY(0)",
        offset: 1
      }], this.timing_);
    },
    run_: function () {
      this.destroyPlayer_();
      if (this.running) {
        var a = this.getDriveAnimation_(),
          b = this.getWheelAnimation_(),
          d = this.getCogAnimation_(),
          e = this.getLoadAnimation_();
        a = new GroupEffect([a, e, d, b], {
          iterations: 1
        });
        this.player_ = document.timeline.play(a);
        c.shared.utils.onWebAnimationFinished(this.player_, this.run_);
        window.santaApp.fire("sound-trigger", "factory_car");
      }
    },
    destroyPlayer_: function () {
      this.player_ && this.player_.cancel();
      this.player_ = null;
    },
    destroy: function () {
      this.running = !1;
      this.destroyPlayer_();
    }
  };
  c.Scene = function (a) {
    this.$el = $(a);
    this.div_ = a;
    this.pinballTimer_ = -1;
    this.hasDroppedChocolate_ = !1;
    this.$pinballButton_ = this.$el.find("#button");
    this.$chocolatePipeLever_ = this.$el.find(".js-chocolate-pipe-lever");
    this.$chocolateDrop_ = this.$el.find(".js-chocolate-drop");
    var b = this.$el.find(".js-truck"),
      d = this.$el.find(".js-tetris-machine-cog");
    this.tetrisTruck = new c.TetrisTruck(b, d);
    this.candyMachine = new c.CandyMachine(a);
    this.shootBall = this.shootBall.bind(this);
    this.dumpChocolate = this.dumpChocolate.bind(this);
    this.init_();
  };
  c.Scene.prototype.init_ = function () {
    this.$pinballButton_.on(c.InputEvent.START, this.shootBall);
    this.$chocolatePipeLever_.on(c.InputEvent.START, this.dumpChocolate);
  };
  c.Scene.prototype.stop = function () {
    window.clearTimeout(this.pinballTimer_);
    this.$pinballButton_.off(c.InputEvent.START, this.shootBall);
    this.$chocolatePipeLever_.off(c.InputEvent.START, this.dumpChocolate);
    this.tetrisTruck.destroy();
    this.tetrisTruck = null;
    this.candyMachine.destroy();
    this.candyMachine = null;
  };
  c.Scene.prototype.shootBall = function () {
    var a = this.$el.find(".pinball");
    a.hasClass("fire") || (a.addClass("fire"), window.santaApp.fire("sound-trigger", "factory_shootball"), this.pinballTimer_ = window.setTimeout(function () {
      a.removeClass("fire");
    }, 5500));
  };
  c.Scene.prototype.dumpChocolate = function () {
    this.hasDroppedChocolate_ || (this.hasDroppedChocolate_ = !0, this.$chocolatePipeLever_.addClass("flip"), this.$chocolateDrop_.addClass("run-animation"), window.santaApp.fire("sound-trigger", "factory_choco"));
  };
  c.Scene.prototype.eatCandy = function () {
    this.candyMachine.run();
  };
  c.Game = c.Scene;
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('factory_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/balls.png', 'img/bubble.png', 'img/candy-beam.png', 'img/pinball-spring.png', 'img/tube-shadow.png', 'img/tube.png', 'img/tetris-truck-wheel_70percent.svg', 'img/color-machine-barrel_70percent.svg');
sceneApi.config({
  sound: ['factory_start', 'music_start_scene']
});
const game = new Game(document.getElementById('module-factory'));
sceneApi.ready(async () => {
  window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'Left':
      case 'ArrowLeft':
      case 'Right':
      case 'ArrowRight':
        game.eatCandy();
        break;
      case 'Up':
      case 'ArrowUp':
        game.shootBall();
        break;
      case 'Down':
      case 'ArrowDown':
        game.dumpChocolate();
        break;
      default:
        return;
    }
    e.preventDefault();
  });
});