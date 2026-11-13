import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    Constants: {
      HOUSE_CSS_SELECTOR: ".js-house",
      HOUSE_NOSE_SELECTOR: ".js-house-nose",
      HOUSE_BG_SELECTOR: ".js-face-bg",
      HOUSE_IRIS_SELECTOR: ".js-iris",
      NOSE_TRANSITION_DURATION: 300,
      CLASS_PAUSE_ANIMATION: "pause-eyes-animating",
      EASE_IN_QUAD: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
      EASE_OUT_QUAD: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      EASE_IN_OUT_QUAD: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
      COLOR_IN_DURATION: 200,
      COLOR_OUT_DURATION: 3E3,
      COLOR_OUT_DELAY: 2E3,
      SUPRISED_ANIMATION_DURATION: 150,
      SURPRISED_FACE_NOSE_DURATION: 800,
      SURPRISED_FACE_NOSE_DELAY: 0,
      SURPRISED_FACE_COLOR_DURATION: 2E3,
      SURPRISED_FACE_COLOR_DELAY: 0,
      EYE_DIAMETER: 14,
      MOUTH_SURPRISED: {
        cx: 10,
        cy: 37,
        rx: 6,
        ry: 6
      }
    }
  };
  c.shared = {};
  c.shared.utils = function () {
    class a {
      constructor(b) {
        this.value = b;
      }
      change(b) {
        const a = this.value !== b;
        this.value = b;
        return a;
      }
      moveToTarget(b, a) {
        let e = +this.value;
        if (this.value !== e) throw new TypeError("SmartValue does not contain a number");
        e < b ? e = Math.min(b, e + a) : e > b && (e = Math.max(b, e - a));
        this.value = e;
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
  c.House = function (a) {
    this.context_ = a;
    this.$context_ = $(a);
    this.colorMediator = this.eyesMediator = null;
    this.$noses_ = this.$context_.find(c.Constants.HOUSE_NOSE_SELECTOR);
    this.$iris_ = this.$context_.find(c.Constants.HOUSE_IRIS_SELECTOR);
    this.$background_ = this.$context_.find(c.Constants.HOUSE_BG_SELECTOR);
    this.$window_ = $(window);
    this.mouthContainer = this.$context_.find(".face__mouth")[0];
    this.mouthEllipse = this.$context_.find(".face__mouth svg ellipse")[0];
    this.mouthPlayer = this.eyesPlayer = this.colorPlayer = null;
    this.onHouseClick_ = this.onHouseClick_.bind(this);
    this.onNoseClick_ = this.onNoseClick_.bind(this);
    this.onWindowResize_ = this.onWindowResize_.bind(this);
    this.color = this.$context_.data("color");
    this.noseIndex_ = 0;
    this.isBusyBeingSurprised = !1;
    this.numberOfNoses_ = this.$noses_.length;
    this.prevTheta = 0;
    this.eyesPosition_ = {
      x: 0,
      y: 0
    };
    this.init_();
  };
  c.House.prototype = {
    init_: function () {
      this.addEventListeners_();
      this.mouthNormal = {
        cx: parseFloat(this.mouthEllipse.getAttribute("cx")),
        cy: parseFloat(this.mouthEllipse.getAttribute("cy")),
        rx: parseFloat(this.mouthEllipse.getAttribute("rx")),
        ry: parseFloat(this.mouthEllipse.getAttribute("ry"))
      };
      this.mouthSurprised = c.Constants.MOUTH_SURPRISED;
      this.calculatePositions_();
    },
    calculatePositions_: function () {
      this.iris_ = {
        x: 0,
        y: 0,
        size: this.$iris_.width(),
        radius: this.$iris_.width() / 2
      };
      var a = this.$context_[0].getBoundingClientRect(),
        b = this.$iris_[0].getBoundingClientRect();
      this.eyesPosition_ = {
        x: (a.left + a.right) / 2,
        y: b.top + this.iris_.radius
      };
      this.distanceThreshold_ = c.Constants.EYE_DIAMETER - this.iris_.radius - 1;
      this.maxEyeMoveThreashold_ = this.$context_.width();
    },
    onWindowResize_: function () {
      this.calculatePositions_();
    },
    addEventListeners_: function () {
      this.$context_.on(c.InputEvent.START, this.onHouseClick_);
      this.$noses_.on(c.InputEvent.START, this.onNoseClick_);
      this.$window_.on("resize", this.onWindowResize_);
    },
    removeEventListeners_: function () {
      this.$context_.off(c.InputEvent.START, this.onHouseClick_);
      this.$noses_.off(c.InputEvent.START, this.onNoseClick_);
      this.$window_.off("resize", this.onWindowResize_);
    },
    onHouseClick_: function () {
      this.colorMediator.publish(this.color, this);
      window.santaApp.fire("sound-trigger", "playground_color");
    },
    onNoseClick_: function (a) {
      a.stopPropagation();
      a.stopImmediatePropagation();
      a = this.$noses_[this.noseIndex_ % this.numberOfNoses_];
      this.noseIndex_++;
      var b = {
        duration: c.Constants.NOSE_TRANSITION_DURATION,
        fill: "both",
        easing: c.Constants.EASE_OUT_QUAD
      };
      a = new GroupEffect([new KeyframeEffect(this.$noses_[this.noseIndex_ % this.numberOfNoses_], [{
        transform: "scale(0) rotate(-90deg)",
        visibility: "hidden"
      }, {
        transform: "scale(1) rotate(0deg)",
        visibility: "visible"
      }], b), new KeyframeEffect(a, [{
        transform: "scale(1) rotate(0deg)",
        visibility: "visible"
      }, {
        transform: "scale(0) rotate(90deg)",
        visibility: "hidden"
      }], b)]);
      document.timeline.play(a);
      this.makeSurpriseFace_(c.Constants.SURPRISED_FACE_NOSE_DURATION, c.Constants.SURPRISED_FACE_NOSE_DELAY);
      window.santaApp.fire("sound-trigger", "playground_nose");
    },
    animateSmallMouth_: function (a, b) {
      var d = this.mouthNormal.ry + (this.mouthSurprised.ry - this.mouthNormal.ry) * a,
        e = this.mouthNormal.cx + (this.mouthSurprised.cx - this.mouthNormal.cx) * a,
        f = this.mouthNormal.cy + (this.mouthSurprised.cy - this.mouthNormal.cy) * a;
      b.target.setAttribute("rx", this.mouthNormal.rx + (this.mouthSurprised.rx - this.mouthNormal.rx) * a);
      b.target.setAttribute("ry", d);
      b.target.setAttribute("cx", e);
      b.target.setAttribute("cy", f);
    },
    animateLargeMouth_: function (a, b) {
      var d = this.mouthSurprised.ry + (this.mouthNormal.ry - this.mouthSurprised.ry) * a,
        e = this.mouthSurprised.cx + (this.mouthNormal.cx - this.mouthSurprised.cx) * a,
        f = this.mouthSurprised.cy + (this.mouthNormal.cy - this.mouthSurprised.cy) * a;
      b.target.setAttribute("rx", this.mouthSurprised.rx + (this.mouthNormal.rx - this.mouthSurprised.rx) * a);
      b.target.setAttribute("ry", d);
      b.target.setAttribute("cx", e);
      b.target.setAttribute("cy", f);
    },
    makeSuprisedMouth_: function (a, b) {
      c.shared.utils.playerFinished(this.mouthPlayer) ? (b = new KeyframeEffect(this.mouthEllipse, [], {
        delay: b,
        duration: c.Constants.SUPRISED_ANIMATION_DURATION,
        easing: c.Constants.EASE_OUT_QUAD,
        fill: "forwards"
      }), b.onsample = this.animateSmallMouth_.bind(this), a = new KeyframeEffect(this.mouthEllipse, [], {
        delay: a,
        duration: c.Constants.SUPRISED_ANIMATION_DURATION,
        easing: c.Constants.EASE_OUT_QUAD,
        fill: "forwards"
      }), a.onsample = this.animateLargeMouth_.bind(this), this.mouthAnimation = new SequenceEffect([b, a]), this.mouthPlayer = document.timeline.play(this.mouthAnimation)) : this.mouthPlayer.currentTime = b + c.Constants.SUPRISED_ANIMATION_DURATION;
    },
    makeSuprisedEyes_: function (a, b) {
      if (c.shared.utils.playerFinished(this.eyesPlayer)) {
        this.isBusyBeingSurprised = !0;
        var d = {
            transform: "scale(1)"
          },
          e = {
            transform: "scale(0.6)"
          },
          f = {
            transform: "scale(0.6)"
          },
          g = {
            transform: "scale(1)"
          };
        b = {
          duration: c.Constants.SUPRISED_ANIMATION_DURATION,
          delay: b,
          fill: "forwards",
          easing: c.Constants.EASE_OUT_QUAD
        };
        a = {
          duration: c.Constants.SUPRISED_ANIMATION_DURATION,
          delay: a,
          fill: "forwards",
          easing: c.Constants.EASE_OUT_QUAD
        };
        d = new GroupEffect([new SequenceEffect([new KeyframeEffect(this.$iris_.eq(0)[0], [d, e], b), new KeyframeEffect(this.$iris_.eq(0)[0], [f, g], a)]), new SequenceEffect([new KeyframeEffect(this.$iris_.eq(1)[0], [d, e], b), new KeyframeEffect(this.$iris_.eq(1)[0], [f, g], a)])], {
          fill: "none"
        });
        this.eyesPlayer = document.timeline.play(d);
        c.shared.utils.onWebAnimationFinished(this.eyesPlayer, function () {
          this.isBusyBeingSurprised = !1;
        }.bind(this));
      } else this.eyesPlayer.currentTime = b + c.Constants.SUPRISED_ANIMATION_DURATION;
    },
    makeSurpriseFace_: function (a, b) {
      this.makeSuprisedMouth_(a, b);
      this.makeSuprisedEyes_(a, b);
    },
    changeColor: function (a) {
      var b = this.$background_[0],
        d = window.getComputedStyle(b);
      a = new SequenceEffect([new KeyframeEffect(b, [{
        fill: d.fill
      }, {
        fill: a
      }], {
        duration: c.Constants.COLOR_IN_DURATION,
        fill: "forwards",
        easing: c.Constants.EASE_IN_QUAD
      }), new KeyframeEffect(b, [{
        fill: a
      }, {
        fill: this.color
      }], {
        duration: c.Constants.COLOR_OUT_DURATION,
        delay: c.Constants.COLOR_OUT_DELAY,
        fill: "forwards",
        easing: c.Constants.EASE_OUT_QUAD
      })], {
        fill: "none"
      });
      this.colorPlayer = document.timeline.play(a);
      this.makeSurpriseFace_(c.Constants.SURPRISED_FACE_COLOR_DURATION, c.Constants.SURPRISED_FACE_COLOR_DELAY);
    },
    moveEyes: function (a) {
      if (!this.isBusyBeingSurprised) {
        var b = a.x - this.eyesPosition_.x;
        a = a.y - this.eyesPosition_.y;
        var d = 180 / Math.PI * Math.atan2(b, a) * -1;
        this.$iris_.css("transform", "rotate(" + d + "deg) translateY(" + this.distanceThreshold_ * Math.min(1, Math.max(Math.abs(b), Math.abs(a)) / this.maxEyeMoveThreashold_) + "px)");
        this.prevTheta = d;
      }
    },
    destroy: function () {
      this.removeEventListeners_();
    }
  };
  c.HouseColorMediator = function () {
    this.houses = {};
  };
  c.HouseColorMediator.prototype.destroy = function () {
    this.houses = {};
  };
  c.HouseColorMediator.prototype.subscribe = function (a, b) {
    b && (this.houses[a] = b, b.colorMediator = this);
  };
  c.HouseColorMediator.prototype.unsubscribe = function (a) {
    this.houses.hasOwnProperty(a) && delete this.houses[a];
  };
  c.HouseColorMediator.prototype.publish = function (a, b) {
    var d = null;
    for (d in this.houses) "function" === typeof this.houses[d].changeColor && this.houses[d].changeColor(a, b);
  };
  c.HouseEyesMediator = function (a) {
    this.onMouseMove_ = this.onMouseMove_.bind(this);
    this.$context_ = $(a);
    this.houses = {};
    this.$context_.on("mousemove", this.onMouseMove_);
  };
  c.HouseEyesMediator.prototype.destroy = function () {
    this.houses = {};
    this.$context_.off("mousemove", this.onMouseMove_);
  };
  c.HouseEyesMediator.prototype.subscribe = function (a, b) {
    b && (this.houses[a] = b, b.eyesMediator = this);
  };
  c.HouseEyesMediator.prototype.unsubscribe = function (a) {
    this.houses.hasOwnProperty(a) && delete this.houses[a];
  };
  c.HouseEyesMediator.prototype.onMouseMove_ = function (a) {
    var b = null;
    a = {
      x: a.pageX,
      y: a.pageY
    };
    for (b in this.houses) "function" === typeof this.houses[b].moveEyes && this.houses[b].moveEyes(a);
  };
  c.Scene = function (a) {
    this.$context_ = $(a);
    this.context_ = this.$context_[0];
    this.houses = [];
    this.$houses = this.$context_.find(c.Constants.HOUSE_CSS_SELECTOR);
    this.init_();
  };
  c.Scene.prototype.init_ = function () {
    var a;
    this.colorMediator = new c.HouseColorMediator();
    this.eyesMediator = new c.HouseEyesMediator(this.$context_);
    this.numHouses = this.$houses.length;
    for (a = 0; a < this.numHouses; a++) {
      var b = this.$houses.eq(a);
      b = new c.House(b);
      this.houses.push(b);
      this.colorMediator.subscribe("house" + a, b);
      this.eyesMediator.subscribe("house" + a, b);
    }
  };
  c.Scene.prototype.destroy = function () {
    var a;
    this.colorMediator.destroy();
    this.eyesMediator.destroy();
    for (a = 0; a < this.numHouses; a++) this.houses[a].destroy();
  };
  c.Game = c.Scene;
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('playground_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/cloud.min.svg', 'img/mountains-80percent-01.svg', 'img/eye-iris.svg');
sceneApi.config({
  sound: ['playground_start', 'music_start_scene']
});
sceneApi.ready(async () => {
  new Game(document.getElementById('module-playground'));
});