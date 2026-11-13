import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    shared: {}
  };
  b.shared.Gameover = class {
    constructor(a, c = !1) {
      this.game = a;
      this._hasPlayExtra = "boolean" === typeof c && c;
    }
    show(a, c) {
      window.santaApp.fire("game-stop", {
        score: a || this.game && this.game.scoreboard && this.game.scoreboard.score || 0,
        level: c || 0,
        hasPlayExtra: this._hasPlayExtra
      });
    }
  };
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
        let g;
        try {
          g = e.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (f) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: g[4],
          y: g[5],
          rotate: 180 / Math.PI * Math.atan2(g[1], g[0])
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
  b.shared.LevelUp = l;
  function l(a, c, d) {
    this.bgElem = $(c);
    this.numberElem = $(d);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  l.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  l.prototype.onResize_ = function () {
    var a = window.innerWidth,
      c = window.innerHeight;
    this.bgBorderWidth = a;
    this.bgElem.css({
      width: 2 * a,
      height: 2 * a,
      left: -.5 * a,
      top: -(a - c / 2)
    });
  };
  l.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  l.prototype.numberShown_ = function () {
    p(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  l.prototype.show = function (a, c) {
    this.bgElem.addClass("is-visible");
    p(this.bgElem, "transitionend", 1, c);
    this.bgElem.css("border-width", this.bgBorderWidth);
    p(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function p(a, c, d, e) {
    function g() {
      f || (f = !0, a.removeEventListener(c, g), e && e());
    }
    a = b.shared.utils.unwrapElement(a);
    var f = !1;
    a.addEventListener(c, g);
    window.setTimeout(g, 1E3 * d);
  }
  var u = {};
  b.Constants = {
    INITIAL_COUNTDOWN: 0,
    COUNTDOWN_FLASH: 0,
    CANVAS_MAX_HEIGHT: 8E3,
    LEVELS: 4,
    TRACK_PIXELS_PER_BEAT: 150,
    ARROW_SIZE: {
      desktop: 80,
      mobile: 60
    },
    ARROW_MARGIN: 10,
    TRACK_LINE_POSITION: {
      desktop: 300,
      mobile: 120
    },
    ARROW_IMG_WIDTH: 40,
    ARROW_IMG_HEIGHT: 40,
    ARROW_MULTI_MARGIN: 25,
    COLORS: {
      ARROW_FILL: "#333",
      ARROW_PASSED_FILL: "#eee",
      ARROW_MULTI_FILL: "#484848",
      ARROW_MULTI_SHADOW: "rgba(0, 0, 0, 0.2)",
      ARROW_MULTI_RAINBOW: "red orange yellow green blue indigo purple".split(" "),
      TRACK_LINE: "#4d4d4d",
      TRACK_LINE_MEGA: "#eeeeee",
      POWERUP: "rgba(0, 0, 0, 0.5)",
      POWERUP_SHADOW: "rgba(255, 255, 255, 0.2)",
      POWERUP_SHINE: "rgba(255, 255, 255, 0.5)",
      POWERUP_MARKER: "#d1febb",
      GRADIENT_START: "#00ffb5",
      GRADIENT_END: "#2ab4ff"
    },
    HIT_SCORES: {
      MISS: {
        points: 0,
        text: "misstir",
        powerup: -.03
      },
      OK: {
        points: 10,
        text: "\xCD lagi",
        accuracy: Number.MAX_VALUE,
        powerup: 0
      },
      GOOD: {
        points: 50,
        text: "Gott",
        accuracy: 25,
        powerup: .03
      },
      PERFECT: {
        points: 100,
        text: "Fullkomi\xF0",
        accuracy: 10,
        powerup: .1
      },
      HOLD: {
        points: 1,
        powerup: .001
      },
      COMBO: {
        points: 50,
        powerup: .05
      }
    },
    ARROW_MULTI_HOLD_POINTS: 1,
    ARROW_MULTI_HOLD_POWERUP: .001,
    ARROW_MULTI_SHADOW_BLUR: 10,
    ARROW_MULTI_SHADOW_OFFSET: 2,
    COMBO_POINTS_BONUS: 50,
    COMBO_POWERUP_BONUS: .05,
    POWERUP_MARGIN: {
      desktop: 20,
      mobile: 10
    },
    POWERUP_INNER_MARGIN: {
      desktop: 5,
      mobile: 0
    },
    POWERUP_HEIGHT: {
      desktop: 30,
      mobile: 5
    },
    POWERUP_SHINE_POSITION: 17,
    POWERUP_SHINE_HEIGHT: {
      desktop: 4,
      mobile: 0
    },
    POWERUP_MARKER_WIDTH: {
      desktop: 3,
      mobile: 1
    },
    POWERUP_DECAY: .0035,
    ELF_LEFT_OFFSET: -120,
    ELF_RIGHT_OFFSET: 130,
    TOY_SIZE: 130,
    TOY_VERTICAL_OFFSET: 140,
    TOY_WRAP_OFFSET: 140,
    PRESENT_HEIGHT: 110,
    PRESENT_WIDTH: 150,
    PRESENT_VERTICAL_OFFSET: 150,
    KEY_DELAY: 50
  };
  b.Constants.DIRECTIONS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  b.shared.Scoreboard = v;
  function w(a, c) {
    a = u ? u[a] : void 0;
    return +a === a ? a : c;
  }
  function v(a, c, d) {
    this.game = a;
    this.initialCountdown_ = w("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  v.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  v.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  v.prototype.onFrame = function (a) {
    this.countdown -= a;
    const c = Math.ceil(this.countdown);
    c !== this.lastSeconds && (this.lastSeconds = c, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = w("COUNTDOWN_FLASH", 10), a = c <= a && 0 !== c, this.losing !== a && (this.losing = a, 0 < c && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  v.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  v.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  v.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  v.prototype.announce_ = function () {
    window.clearTimeout(this.announceTimeout_);
    this.announceTimeout_ = window.setTimeout(() => {
      window.santaApp.fire("game-score", {
        score: this.score,
        level: this.level + 1,
        maxLevel: this.levels,
        time: this.lastSeconds || this.countdown
      });
    }, 1);
  };
  b.Step = {
    IDLE_1: {
      key: "IDLE_1",
      back: "idle_1"
    },
    IDLE_2: {
      key: "IDLE_2",
      back: "idle_2"
    },
    FAIL: {
      key: "FAIL",
      back: "fail"
    },
    WRAP_BLUE: {
      color: "blue",
      key: "WRAP_BLUE",
      back: "wrap_back_blue",
      front: "wrap_front_blue"
    },
    WRAP_GREEN: {
      color: "green",
      key: "WRAP_GREEN",
      back: "wrap_back_green",
      front: "wrap_front_green"
    },
    WRAP_RED: {
      color: "red",
      key: "WRAP_RED",
      back: "wrap_back_red",
      front: "wrap_front_red"
    }
  };
  const x = {
    [b.Step.IDLE_1.key]: 24,
    [b.Step.IDLE_2.key]: 24,
    [b.Step.FAIL.key]: 24,
    [b.Step.WRAP_BLUE.key]: 24,
    [b.Step.WRAP_GREEN.key]: 24,
    [b.Step.WRAP_RED.key]: 24
  };
  b.Animation = class {
    constructor(a, c) {
      this.key = a.key;
      this.backName = a.back;
      this.frontName = a.front;
      this.frame = 0;
      this.frameCount = x[this.key];
      this.frameDuration = 1E3 / 24 * (60 / c) * 2;
      this.elapsedTime = 0;
      this.paused = !0;
    }
    play() {
      this.frame = 0;
      this.paused = !1;
    }
    getFrame(a, c) {
      if (a) return {
        x: c % 24 * 400,
        y: 0,
        width: 400,
        height: 300,
        offsetX: 0,
        offsetY: 0,
        sprite: `${a}_${Math.floor(c / 24)}`
      };
    }
    update(a) {
      if (this.paused) return {
        back: this.getFrame(this.backName, this.frame),
        front: this.getFrame(this.frontName, this.frame)
      };
      this.elapsedTime += a;
      this.elapsedTime > this.frameDuration && (a = Math.floor(this.elapsedTime / this.frameDuration), this.frame += a, this.frame = Math.min(this.frame, this.frameCount - 1), this.elapsedTime -= a * this.frameDuration);
      return {
        back: this.getFrame(this.backName, this.frame),
        front: this.getFrame(this.frontName, this.frame)
      };
    }
  };
  b.Present = class {
    constructor(a) {
      this.elf = a;
      this.presentEl = $(".present", this.elf.frontEl);
      this.toyEl = $(".present-toy", this.elf.frontEl);
      this.boxEl = $(".present-box", this.elf.frontEl);
      this.playing = !1;
      this.toyClass = this.boxClass = null;
    }
    init(a, c) {
      this.playing = !0;
      this.toyClass = `present-toy--${Math.ceil(8 * Math.random())}`;
      this.boxClass = `present-box--${a}-${c}`;
      this.toyEl.addClass(this.toyClass);
      this.boxEl.addClass(this.boxClass);
      this.presentEl.css("left", this.elf.elfOffset + (this.elf.frontCanvas.width - this.presentEl.width()) / 2);
      c || window.santaApp.fire("sound-trigger", "wrapbattle_wrap_present_fail");
    }
    showToy() {
      this.toyEl.addClass("is-active");
    }
    hideToy() {
      setTimeout(() => this.toyEl.removeClass("is-active"), 200);
      window.santaApp.fire("sound-trigger", "wrapbattle_wrap_present");
    }
    showBox() {
      this.boxEl.addClass("is-active");
      setTimeout(this.hideBox.bind(this), 500);
    }
    hideBox() {
      this.boxEl.removeClass("is-active");
      this.playing = !1;
    }
    cleanUp() {
      this.toyEl.removeClass(`is-active ${this.toyClass}`);
      this.boxEl.removeClass(`is-active ${this.boxClass}`);
      this.boxClass = this.toyClass = null;
      this.playing = !1;
    }
  };
  b.Character = class {
    constructor(a, c, d, e, g) {
      this.currentState = this.animation = null;
      this.backEl = a;
      this.frontEl = c;
      this.animations = "fail_0 idle_1_0 idle_2_0 wrap_back_blue_0 wrap_back_green_0 wrap_back_red_0 wrap_front_blue_0 wrap_front_green_0 wrap_front_red_0".split(" ");
      this.lastFrame = null;
      this.color = d;
      this.dir = e;
      this.elfOffset = g;
      this.backCanvas = document.createElement("canvas");
      this.backCanvas.width = a.offsetWidth;
      this.backCanvas.height = 300;
      a.appendChild(this.backCanvas);
      this.backContext = this.backCanvas.getContext("2d");
      this.frontCanvas = document.createElement("canvas");
      this.frontCanvas.width = c.offsetWidth;
      this.frontCanvas.height = 300;
      c.appendChild(this.frontCanvas);
      this.frontContext = this.frontCanvas.getContext("2d");
      this.images = {};
      this.renderSprites_(d);
      this.present = new b.Present(this);
      this.offsetX = this.postAnimationCallback = this.nextAnimationBeat = this.animationQueue = null;
    }
    onResize() {
      this.backCanvas.width = this.backEl.offsetWidth;
      this.frontCanvas.width = this.frontEl.offsetWidth;
    }
    renderSprites_(a) {
      this.animations.forEach(c => {
        this.loadImage(c, a);
      });
    }
    loadImage(a, c) {
      let d = new Image();
      d.onload = () => {
        this.images[a] = d;
      };
      d.onerror = () => {
        d.onerror = null;
        setTimeout(() => {
          d.src += "?" + +new Date();
        }, 1E3);
      };
      d.src = this.dir + `img/steps/${c}/${a}.png`;
    }
    update(a) {
      this.animation && (a = this.animation.update(a), a !== this.lastFrame && (this.renderFrame(a.back, this.backContext), this.renderFrame(a.front, this.frontContext), this.lastFrame = a));
    }
    renderFrame(a, c) {
      if (a) {
        var d = this.images[a.sprite];
        d ? (this.offsetX = (c.canvas.width - a.width) / 2 + this.elfOffset, c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.drawImage(d, a.x, a.y, a.width, a.height, this.offsetX, a.offsetY, a.width, a.height)) : 0 === a.x && this.loadImage(a.sprite, this.color);
      } else c.clearRect(0, 0, c.canvas.width, c.canvas.height);
    }
    play(a, c) {
      this.animation = new b.Animation(a, c);
      this.animation.play();
    }
    cleanUp() {
      this.animation = null;
      this.present.cleanUp();
    }
  };
  b.AnimationPlayer = class {
    constructor(a, c, d) {
      this.leftElf = a;
      this.rightElf = c;
      this.sequencer = d;
      this.beat = -1;
      this.leftElf.animationQueue = [];
      this.rightElf.animationQueue = [];
      this.leftElf.nextAnimationBeat = 0;
      this.rightElf.nextAnimationBeat = 0;
    }
    update(a) {
      a = Math.floor(a / (60 / this.sequencer.getBPM()));
      this.beat !== a && (this.beat = a, this.onBeat(this.leftElf), this.onBeat(this.rightElf));
    }
    onBeat(a) {
      this.beat >= a.nextAnimationBeat && (a.postAnimationCallback && (a.postAnimationCallback(), a.postAnimationCallback = null), this.onAnimationBar(a));
    }
    onAnimationBar(a) {
      let c = a.animationQueue.shift();
      c ? this.playGenericAnimation(c) : (.5 > Math.random() ? a.play(b.Step.IDLE_1, this.sequencer.getBPM()) : a.play(b.Step.IDLE_2, this.sequencer.getBPM()), a.nextAnimationBeat = this.beat + 2);
    }
    playGenericAnimation(a) {
      let c = a.left ? this.leftElf : this.rightElf;
      c.play(a.animationName, this.sequencer.getBPM());
      c.nextAnimationBeat = this.beat + 2;
      a.startCallback && a.startCallback();
      a.endCallback && (c.postAnimationCallback = a.endCallback);
    }
    queueAnimation(a, c) {
      (c ? this.leftElf : this.rightElf).animationQueue.push({
        animationName: a,
        left: c
      });
    }
    playWrapAnimation(a, c, d) {
      let e = d ? this.leftElf : this.rightElf;
      e.present.playing || (e.present.cleanUp(), e.present.init(c.color, a), e.present.showToy(), e.animationQueue.push({
        animationName: c,
        left: d,
        startCallback: e.present.hideToy.bind(e.present),
        endCallback: e.present.showBox.bind(e.present)
      }));
    }
    cleanUp() {
      this.leftElf.postAnimationCallback = null;
      this.rightElf.postAnimationCallback = null;
      this.beat = -1;
      this.leftElf.animationQueue = [];
      this.rightElf.animationQueue = [];
      this.leftElf.nextAnimationBeat = 0;
      this.rightElf.nextAnimationBeat = 0;
    }
  };
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
  b.Controls = class {
    constructor(a) {
      this.game = a;
      this.keysDown = [];
      this.debounce_ = {};
    }
    setup() {
      $(document).on("keydown.wrapbattle", this.onKeyDown.bind(this));
      $(document).on("keyup.wrapbattle", this.onKeyUp.bind(this));
      $(".mobile-button", this.game.elem).on(b.InputEvent.START, this.onTouchEvent.bind(this, !0));
      $(".mobile-button", this.game.elem).on(b.InputEvent.END + " " + b.InputEvent.CANCEL, this.onTouchEvent.bind(this, !1));
    }
    onTouchEvent(a, c) {
      c = c.originalEvent || c;
      c = $(c.target);
      if (c.hasClass("mobile-button--up")) c = b.Constants.DIRECTIONS.UP;else if (c.hasClass("mobile-button--down")) c = b.Constants.DIRECTIONS.DOWN;else if (c.hasClass("mobile-button--left")) c = b.Constants.DIRECTIONS.LEFT;else if (c.hasClass("mobile-button--right")) c = b.Constants.DIRECTIONS.RIGHT;else return;
      a ? this.addKey(c) : this.removeKey(c);
    }
    onKeyDown(a) {
      a.keyCode && (37 > a.keyCode || 40 < a.keyCode) || this.addKey(a.keyCode);
    }
    onKeyUp(a) {
      this.removeKey(a.keyCode);
    }
    addKey(a) {
      0 > this.keysDown.indexOf(a) && this.keysDown.push(a);
    }
    removeKey(a) {
      window.clearTimeout(this.debounce_[a] || 0);
      this.debounce_[a] = window.setTimeout(() => {
        delete this.debounce_[a];
        for (var c = 0; c < this.keysDown.length; c++) if (this.keysDown[c] == a) {
          this.keysDown.splice(c, 1);
          break;
        }
      }, b.Constants.KEY_DELAY);
    }
  };
  b.Arrow = class {
    constructor(a, c) {
      this.location = a.trackLocation;
      this.directions = a.directions;
      this.length = a.length;
      this.data = a;
      this.cacheCanvas = c[0];
    }
    render(a, c, d, e) {
      if (d && d[0]) {
        var g = d[0].getContext("2d");
        d = d[0].width;
        var f = b.Constants.ARROW_SIZE[c],
          h = b.Constants.ARROW_MARGIN,
          r = 4 * f + 3 * h;
        a = this.location + a;
        var m = this.location - e;
        e = b.Constants.ARROW_SIZE.desktop + b.Constants.ARROW_MARGIN;
        var q = f + b.Constants.ARROW_MULTI_SHADOW_BLUR + b.Constants.ARROW_MULTI_SHADOW_OFFSET,
          k = f + 5;
        g.save();
        g.translate(0, m);
        for (m = 0; m < this.directions.length; m++) {
          const y = this.directions[m];
          g.save();
          let t = (d - r) / 2 + f / 2,
            n;
          switch (y) {
            case b.Constants.DIRECTIONS.UP:
              t += f + h;
              n = 0;
              break;
            case b.Constants.DIRECTIONS.DOWN:
              t += 2 * (f + h);
              n = e;
              break;
            case b.Constants.DIRECTIONS.LEFT:
              n = 2 * e;
              break;
            case b.Constants.DIRECTIONS.RIGHT:
              t += 3 * (f + h), n = 3 * e;
          }
          this.passed && !this.caught && (g.globalAlpha = .5);
          g.translate(t, 0);
          if (this.length) {
            g.clearRect(-f / 2, m - f / 2, k, this.length + k + 5);
            for (let d = this.length, h = 0; 0 < d; d -= b.Constants.ARROW_MULTI_MARGIN, h++) d + a < b.Constants.TRACK_LINE_POSITION[c] ? g.drawImage(this.cacheCanvas, e * (h % b.Constants.COLORS.ARROW_MULTI_RAINBOW.length + 1), 3 * e, k, q, -f / 2, d - f / 2, k, q) : g.drawImage(this.cacheCanvas, 0, 3 * e, k, q, -f / 2, d - f / 2, k, q);
            this.caught ? g.drawImage(this.cacheCanvas, n, 2 * e, k, k, -f / 2, -f / 2, k, k) : g.drawImage(this.cacheCanvas, n, 0, k, k, -f / 2, -f / 2, k, k);
          } else this.caught ? this.clearAndDraw(g, this.cacheCanvas, n, 2 * e, k, k, -f / 2, -f / 2, k, k) : this.clearAndDraw(g, this.cacheCanvas, n, 0, k, k, -f / 2, -f / 2, k, k);
          g.restore();
        }
        g.restore();
      }
    }
    clearAndDraw(a, c, d, e, g, f, h, r, m, q) {
      a.clearRect(h, r, m, q);
      a.drawImage(c, d, e, g, f, h, r, m, q);
    }
  };
  b.Levels = {
    combos: [{
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1.5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1.5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: .75,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1.25,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 2.66,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 3,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 2.66,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 3,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 2.66,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 3,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: .75,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT, b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1.25,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT, b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: .25,
        length: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: .25,
        length: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .25,
        length: .5,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: .25,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: .75,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1.25,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 1.25,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 2,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 1,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: 0,
        directions: [b.Constants.DIRECTIONS.DOWN, b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 1.5,
        directions: [b.Constants.DIRECTIONS.UP, b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      arrows: [{
        beat: .25,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: .5,
        directions: [b.Constants.DIRECTIONS.UP]
      }]
    }],
    levels: [{
      length: 80,
      startDelay: 1,
      track: [{
        beat: 3,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 5,
        comboIndex: 6
      }, {
        beat: 7,
        comboIndex: 3
      }, {
        beat: 9.5,
        comboIndex: 7
      }, {
        beat: 15,
        comboIndex: 3
      }, {
        beat: 17.5,
        comboIndex: 7
      }, {
        beat: 19,
        comboIndex: 3
      }, {
        beat: 23,
        comboIndex: 8
      }, {
        beat: 25.5,
        comboIndex: 7
      }, {
        beat: 31,
        comboIndex: 3
      }, {
        beat: 35,
        comboIndex: 3
      }, {
        beat: 37,
        comboIndex: 9
      }, {
        beat: 43,
        comboIndex: 3
      }, {
        beat: 47,
        comboIndex: 3
      }, {
        beat: 49.5,
        comboIndex: 4
      }, {
        beat: 51.5,
        comboIndex: 0
      }, {
        beat: 55,
        comboIndex: 8
      }, {
        beat: 57.5,
        comboIndex: 7
      }, {
        beat: 63,
        comboIndex: 3
      }, {
        beat: 67,
        comboIndex: 3
      }, {
        beat: 69,
        comboIndex: 9
      }, {
        beat: 70,
        comboIndex: 29
      }, {
        beat: 71,
        comboIndex: 9
      }, {
        beat: 75,
        comboIndex: 3
      }, {
        beat: 79,
        comboIndex: 3
      }]
    }, {
      length: 111,
      startDelay: 3,
      track: [{
        beat: 1,
        comboIndex: 2
      }, {
        beat: 3.5,
        comboIndex: 9
      }, {
        beat: 6,
        length: 2,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 9,
        comboIndex: 11
      }, {
        beat: 14,
        length: 2,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 17,
        comboIndex: 12
      }, {
        beat: 21,
        comboIndex: 13
      }, {
        beat: 25,
        length: 2,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 29,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 31,
        comboIndex: 15
      }, {
        beat: 33,
        comboIndex: 13
      }, {
        beat: 37,
        comboIndex: 11
      }, {
        beat: 41,
        comboIndex: 12
      }, {
        beat: 45,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 47,
        comboIndex: 15
      }, {
        beat: 49,
        comboIndex: 13
      }, {
        beat: 53,
        comboIndex: 13
      }, {
        beat: 59,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 61,
        comboIndex: 9
      }, {
        beat: 63,
        length: 1,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 65,
        comboIndex: 12
      }, {
        beat: 69,
        comboIndex: 13
      }, {
        beat: 73,
        length: 2,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 77,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 79,
        comboIndex: 15
      }, {
        beat: 81,
        comboIndex: 13
      }, {
        beat: 85,
        comboIndex: 11
      }, {
        beat: 89,
        comboIndex: 12
      }, {
        beat: 93,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 95,
        comboIndex: 15
      }, {
        beat: 97,
        comboIndex: 13
      }, {
        beat: 101,
        comboIndex: 13
      }, {
        beat: 107,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 109,
        comboIndex: 9
      }]
    }, {
      length: 98,
      startDelay: 3,
      track: [{
        beat: 1,
        comboIndex: 17
      }, {
        beat: 5,
        comboIndex: 18
      }, {
        beat: 9,
        comboIndex: 16
      }, {
        beat: 10.5,
        comboIndex: 10
      }, {
        beat: 13,
        comboIndex: 21
      }, {
        beat: 15.5,
        length: 2,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 21,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 21.25,
        length: 2,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 26.5,
        directions: [b.Constants.DIRECTIONS.LEFT, b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 29,
        comboIndex: 19
      }, {
        beat: 31,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 33,
        comboIndex: 21
      }, {
        beat: 37,
        comboIndex: 22
      }, {
        beat: 41,
        comboIndex: 20
      }, {
        beat: 45,
        comboIndex: 20
      }, {
        beat: 50.5,
        comboIndex: 10
      }, {
        beat: 53,
        length: 2,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 58,
        comboIndex: 10
      }, {
        beat: 62,
        comboIndex: 19
      }, {
        beat: 65,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 67,
        comboIndex: 9
      }, {
        beat: 71,
        comboIndex: 23
      }, {
        beat: 73,
        comboIndex: 21
      }, {
        beat: 77,
        comboIndex: 22
      }, {
        beat: 83,
        comboIndex: 9
      }, {
        beat: 85,
        comboIndex: 21
      }, {
        beat: 87,
        comboIndex: 23
      }, {
        beat: 89,
        comboIndex: 22
      }, {
        beat: 91,
        comboIndex: 9
      }, {
        beat: 94,
        comboIndex: 19
      }, {
        beat: 96,
        directions: [b.Constants.DIRECTIONS.LEFT, b.Constants.DIRECTIONS.RIGHT]
      }]
    }, {
      length: 155,
      startDelay: 0,
      track: [{
        beat: 3,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 7.5,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 9,
        comboIndex: 24
      }, {
        beat: 11.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 14.5,
        comboIndex: 27
      }, {
        beat: 19,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 24,
        comboIndex: 25
      }, {
        beat: 28,
        length: 2,
        directions: [b.Constants.DIRECTIONS.LEFT]
      }, {
        beat: 32,
        comboIndex: 25
      }, {
        beat: 36,
        comboIndex: 26
      }, {
        beat: 40,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 44,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 48,
        comboIndex: 24
      }, {
        beat: 52,
        comboIndex: 25
      }, {
        beat: 56,
        comboIndex: 26
      }, {
        beat: 60,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 62.5,
        comboIndex: 28
      }, {
        beat: 66,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 70.5,
        comboIndex: 28
      }, {
        beat: 74,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 80,
        directions: [b.Constants.DIRECTIONS.LEFT, b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 82,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 86,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 88,
        comboIndex: 1
      }, {
        beat: 96,
        comboIndex: 25
      }, {
        beat: 100,
        comboIndex: 26
      }, {
        beat: 104,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 108,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 112,
        comboIndex: 24
      }, {
        beat: 116,
        comboIndex: 25
      }, {
        beat: 120,
        comboIndex: 26
      }, {
        beat: 124,
        length: 1.5,
        directions: [b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 126.5,
        comboIndex: 28
      }, {
        beat: 130,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 134.5,
        comboIndex: 28
      }, {
        beat: 138,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 144,
        directions: [b.Constants.DIRECTIONS.LEFT, b.Constants.DIRECTIONS.RIGHT]
      }, {
        beat: 146,
        directions: [b.Constants.DIRECTIONS.DOWN]
      }, {
        beat: 150,
        directions: [b.Constants.DIRECTIONS.UP]
      }, {
        beat: 152,
        comboIndex: 25
      }]
    }]
  };
  b.Track = class {
    constructor(a) {
      this.game = a;
      this.trackPosition = 0;
      this.message = $(".message", a.elem);
      this.comboMessage = $(".combo-message", a.elem);
      this.canvasContainer = $(".arrow-track", a.elem);
      this.track = $(".track", a.elem);
      this.arrows = [];
      this.misses = 0;
      this.ready = !1;
      this.level = this.isHoldingKey = this.messageText = this.combos = this.activeCombo = this.bpm = this.multipleArrows = this.lastInCombo = this.points = this.levelFailed = this.isNextComboElfLeft = this.levelEndTrackPosition = null;
    }
    initLevel(a, c) {
      this.levelFailed = !1;
      this.trackPosition = this.misses = 0;
      this.arrows = [];
      this.comboMessage.removeClass("is-active");
      this.message.removeClass("is-active");
      this.bpm = c;
      this.level = b.Levels.levels[a];
      this.combos = [];
      a = b.Constants.TRACK_LINE_POSITION[this.game.responsiveKey];
      for (c = 0; c < this.level.track.length; c++) {
        let a = this.level.track[c];
        if (void 0 != a.comboIndex) {
          let e = b.Levels.combos[a.comboIndex];
          for (let f = 0; f < e.arrows.length; f++) {
            var d = e.arrows[f];
            d = {
              combo: c,
              directions: d.directions,
              trackLocation: (a.beat + d.beat) * b.Constants.TRACK_PIXELS_PER_BEAT,
              length: d.length * b.Constants.TRACK_PIXELS_PER_BEAT
            };
            f == e.arrows.length - 1 && (d.lastInCombo = !0, this.combos.push(!0));
            this.arrows.push(new b.Arrow(d, this.game.cacheCanvas));
          }
        } else this.arrows.push(new b.Arrow({
          directions: a.directions,
          trackLocation: a.beat * b.Constants.TRACK_PIXELS_PER_BEAT,
          length: a.length * b.Constants.TRACK_PIXELS_PER_BEAT
        }, this.game.cacheCanvas)), this.combos.push(!1);
      }
      this.resetComboElf();
      this.levelEndTrackPosition = -this.level.length * b.Constants.TRACK_PIXELS_PER_BEAT + a;
      this.trackPosition = b.Constants.TRACK_PIXELS_PER_BEAT * this.level.startDelay + a;
      this.renderTrack();
      this.ready = !0;
    }
    renderTrack() {
      if (this.level) {
        var a = b.Constants.CANVAS_MAX_HEIGHT,
          c = this.level.length * b.Constants.TRACK_PIXELS_PER_BEAT;
        this.canvases = [];
        this.canvasContainer.empty();
        for (var d = 0; d <= c / a + 1; d++) {
          let c = $(document.createElement("canvas"));
          c[0].height = a;
          c[0].width = this.canvasContainer.width();
          this.canvases.push(c);
          this.canvasContainer.append(c);
        }
        this.canvasContainer.css("transform", `translateY(${this.trackPosition}px)`);
        for (a = this.arrows.length - 1; 0 <= a; a--) this.renderArrow(this.arrows[a]);
      }
    }
    renderArrow(a) {
      var c = b.Constants.ARROW_SIZE[this.game.responsiveKey];
      let d = b.Constants.CANVAS_MAX_HEIGHT,
        e = Math.floor((a.location - c / 2) / d);
      c = Math.floor((a.location + c / 2 + (a.length || 0)) / d);
      a.render(this.trackPosition, this.game.responsiveKey, this.canvases[e], e * d);
      e != c && a.render(this.trackPosition, this.game.responsiveKey, this.canvases[c], c * d);
    }
    checkArrows(a) {
      let c,
        d = [];
      for (var e = 0; e < a.length; e++) d.push(!1);
      this.points = 0;
      this.activeCombo = null;
      for (e = 0; e < this.arrows.length; e++) {
        let f = this.arrows[e];
        if (f.passed) continue;
        let h = this.getArrowBoundaries(f);
        if (h.arrowPosition > this.track.height() + b.Constants.ARROW_SIZE[this.game.responsiveKey] / 2) break;
        if (this.arrowInRange(f, h)) {
          this.lightUpDirections(f);
          void 0 != f.data.combo && (this.activeCombo = f.data.combo);
          var g = !0;
          f.directions.forEach(function (c) {
            c = a.indexOf(c);
            0 <= c ? d[c] = !0 : g = !1;
          });
          g && (f.length && f.caught ? (this.updateDisplayValues(b.Constants.HIT_SCORES.HOLD), this.isHoldingKey || window.santaApp.fire("sound-trigger", {
            name: "wrapbattle_long",
            args: [this.bpm]
          }), this.isHoldingKey = !0) : f.caught || (1 < f.directions.length && (this.multipleArrows = !0), c = this.checkAccuracy(f, h), f.caught = !0, this.renderArrow(f), f.data.lastInCombo && this.combos[f.data.combo] && (this.updateDisplayValues(b.Constants.HIT_SCORES.COMBO), this.registerCombo(!0), this.lastInCombo = !0)));
          f.length && this.renderArrow(f);
        } else h.arrowPosition < h.arrowEnd ? (f.passed || (f.passed = !0, f.caught || this.renderArrow(f)), f.caught || (c = b.Track.ACCURACY.MISS, this.misses++, 5 < this.misses && !this.levelFailed && (this.levelFailed = !0, this.game.gameover()))) : !g && this.isHoldingKey && (this.isHoldingKey = !1, window.santaApp.fire("sound-trigger", {
          name: "wrapbattle_stop_long",
          args: [this.bpm]
        }));
      }
      0 <= d.indexOf(!1) && (c = b.Track.ACCURACY.MISS);
      this.registerAccuracy(c);
    }
    getArrowBoundaries(a) {
      let c = {},
        d = b.Constants.TRACK_LINE_POSITION[this.game.responsiveKey] - .75 * b.Constants.ARROW_SIZE[this.game.responsiveKey];
      c.arrowBegin = b.Constants.TRACK_LINE_POSITION[this.game.responsiveKey] + .75 * b.Constants.ARROW_SIZE[this.game.responsiveKey];
      c.arrowEnd = a.length ? d - a.length : d;
      c.arrowPosition = a.location + this.trackPosition;
      return c;
    }
    arrowInRange(a, c) {
      c || (c = this.getArrowBoundaries(a));
      return c.arrowPosition > c.arrowEnd && c.arrowPosition < c.arrowBegin;
    }
    lightUpDirections(a) {
      a.directions.forEach(function (a) {
        switch (a) {
          case b.Constants.DIRECTIONS.UP:
            this.game.litUpDirections[1] = !0;
            break;
          case b.Constants.DIRECTIONS.DOWN:
            this.game.litUpDirections[2] = !0;
            break;
          case b.Constants.DIRECTIONS.LEFT:
            this.game.litUpDirections[0] = !0;
            break;
          case b.Constants.DIRECTIONS.RIGHT:
            this.game.litUpDirections[3] = !0;
        }
      }, this);
    }
    checkAccuracy(a, c) {
      c || (c = this.getArrowBoundaries(a));
      a = Math.abs(c.arrowPosition - b.Constants.TRACK_LINE_POSITION[this.game.responsiveKey]);
      return a < b.Constants.HIT_SCORES.PERFECT.accuracy ? b.Track.ACCURACY.PERFECT : a < b.Constants.HIT_SCORES.GOOD.accuracy ? b.Track.ACCURACY.GOOD : b.Track.ACCURACY.OK;
    }
    updateDisplayValues(a) {
      this.points += a.points;
      this.game.powerUp += a.powerup;
      this.game.powerUp = Math.max(0, Math.min(1, this.game.powerUp));
      a.text && (this.messageText = a.text);
    }
    registerCombo(a) {
      a && (this.comboMessage.addClass("is-active"), setTimeout(function () {
        this.comboMessage.removeClass("is-active");
      }.bind(this), 500));
      this.playWrapAnimation(a);
      this.resetComboElf();
    }
    showAccuracyMessage() {
      this.messageText && (this.message.text(this.messageText), this.message.addClass("is-active"), setTimeout(function () {
        this.message.removeClass("is-active");
      }.bind(this), 300));
    }
    registerAccuracy(a) {
      this.messageText = "";
      if (a) {
        let c;
        switch (a) {
          case b.Track.ACCURACY.MISS:
            this.updateDisplayValues(b.Constants.HIT_SCORES.MISS);
            this.combos[this.activeCombo] && (this.game.animationPlayer.queueAnimation(b.Step.FAIL, this.isNextComboElfLeft), this.combos[this.activeCombo] = !1, c = "wrapbattle_miss", this.registerCombo(!1));
            break;
          case b.Track.ACCURACY.OK:
            this.updateDisplayValues(b.Constants.HIT_SCORES.OK);
            this.misses = 0;
            c = "wrapbattle_correct";
            break;
          case b.Track.ACCURACY.GOOD:
            this.updateDisplayValues(b.Constants.HIT_SCORES.GOOD);
            this.misses = 0;
            c = "wrapbattle_correct";
            break;
          case b.Track.ACCURACY.PERFECT:
            this.updateDisplayValues(b.Constants.HIT_SCORES.PERFECT), this.misses = 0, c = "wrapbattle_correct";
        }
        this.multipleArrows ? (a !== b.Track.ACCURACY.MISS && window.santaApp.fire("sound-trigger", {
          name: "wrapbattle_correct",
          args: [this.bpm]
        }), this.multipleArrows = !1) : this.lastInCombo ? (this.lastInCombo = !1, window.santaApp.fire("sound-trigger", "wrapbattle_correct")) : c && window.santaApp.fire("sound-trigger", c);
      }
      this.showAccuracyMessage();
    }
    playWrapAnimation(a) {
      let c = Math.random();
      this.game.animationPlayer.playWrapAnimation(a, .33 > c ? b.Step.WRAP_BLUE : .66 > c ? b.Step.WRAP_GREEN : b.Step.WRAP_RED, this.isNextComboElfLeft);
    }
    resetComboElf() {
      this.isNextComboElfLeft = !this.isNextComboElfLeft;
    }
    update(a) {
      this.ready && (this.checkArrows(a), this.game.points += this.points, this.game.scoreboard.addScore(this.points), this.game.powerUpActive && (this.game.points += this.points, this.game.scoreboard.addScore(this.points)));
    }
    render(a, c) {
      this.ready && !this.levelFailed && (this.trackPosition -= a / 1E3 / (60 / c) * b.Constants.TRACK_PIXELS_PER_BEAT, this.canvasContainer.css("transform", `translateY(${this.trackPosition}px)`), this.trackPosition <= this.levelEndTrackPosition - b.Constants.TRACK_LINE_POSITION[this.game.responsiveKey] && (this.game.onLevelCompleted(), this.ready = !1));
    }
    cleanUp() {
      this.canvases = [];
      this.canvasContainer.empty();
    }
  };
  b.Track.ACCURACY = {
    MISS: 1,
    OK: 2,
    GOOD: 3,
    PERFECT: 4
  };
  const z = [80, 87, 110, 140];
  b.Sequencer = class {
    constructor() {
      this._bpm = 120;
      this._playTimeout = this._playAt = 0;
      window.santaApp.fire("sound-trigger", "wrapbattle_set_playback_rate", 1);
    }
    playTrack(a, c) {
      const d = z[a];
      if (void 0 === d) throw Error(`unknown BPM for ${a}`);
      const e = this.getTimeToNextBar();
      this._playTimeout = window.setTimeout(() => {
        window.santaApp.fire("sound-trigger", "wrapbattle_play_track", a);
        this._playAt = performance.now();
        this._bpm = d;
        c();
      }, 1E3 * e);
    }
    setMaxIntensity() {
      window.santaApp.fire("sound-trigger", "wrapbattle_megamode_start");
      window.santaApp.fire("sound-trigger", "wrapbattle_megamode_transition_in");
    }
    setNormalIntensity(a) {
      window.santaApp.fire("sound-trigger", "wrapbattle_megamode_end");
      a && window.santaApp.fire("sound-trigger", "wrapbattle_megamode_transition_out");
    }
    pause() {
      window.santaApp.fire("sound-trigger", "wrapbattle_set_playback_rate", 0);
    }
    resume() {
      window.santaApp.fire("sound-trigger", "wrapbattle_set_playback_rate", 1);
    }
    getTimeToNextBar(a = 4) {
      if (!this._playAt) return 0;
      var c = this._bpm;
      const d = 60 / c;
      c /= 60;
      const e = performance.now() - this._playAt;
      c = a - e * c % a;
      .5 > c && (c += a);
      return c * d;
    }
    onNextBar(a) {
      const c = this.getTimeToNextBar();
      c && this._playAt && window.santaApp.fire("sound-trigger", {
        name: "wrapbattle_next_level_transition",
        args: [c]
      });
      window.setTimeout(a, 1E3 * c);
    }
    stop() {
      window.clearTimeout(this._playTimeout);
      this._playAt = 0;
      window.santaApp.fire("sound-trigger", "wrapbattle_play_track", -1);
    }
    getBPM() {
      return this._bpm;
    }
  };
  b.Game = class {
    constructor(a, c) {
      this.elem = $(a);
      this.componentDir = c;
      this.gameStartTime = null;
      this.isPlaying = this.paused = !1;
      this.requestId = this.lastFrame = 0;
      this.lastResponsiveKey = this.responsiveKey = null;
      this.level = 0;
      this.imagesLoaded = this.imageNames = this.images = this.powerUpActiveRendered = null;
      this.scoreboard = new v(this, this.elem.find(".board"), b.Levels.levels.length);
      this.gameoverDialog = new b.shared.Gameover(this, this.elem.find(".gameover"));
      this.levelUp = new l(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
      this.cacheContext = this.cacheCanvas = this.pbContext = this.pbCanvas = this.fgContext = this.fgCanvas = this.bgContext = this.bgCanvas = this.canvases = null;
      this.initCanvases();
      this.leftElf = new b.Character($(".djs--back .dj--left", a)[0], $(".djs--front .dj--left", a)[0], "boy", c, b.Constants.ELF_LEFT_OFFSET);
      this.rightElf = new b.Character($(".djs--back .dj--right", a)[0], $(".djs--front .dj--right", a)[0], "girl", c, b.Constants.ELF_RIGHT_OFFSET);
      this.track = new b.Track(this);
      this.controls = new b.Controls(this);
      this.powerUp = this.points = 0;
      this.powerUpActive = !1;
      this.litUpDirections = [];
      this.circlePositions = [];
      this.onFrame_ = this.onFrame_.bind(this);
      this.sequencer = new b.Sequencer();
      this.animationPlayer = new b.AnimationPlayer(this.leftElf, this.rightElf, this.sequencer);
      this.bpmBasedElements = this.elem.find(".audience-row, .speaker-top, .speaker-bottom");
    }
    initCanvases() {
      this.canvases = [];
      this.bgCanvas = $(".background-canvas", this.elem);
      this.bgContext = this.bgCanvas[0].getContext("2d");
      this.canvases.push(this.bgCanvas);
      this.fgCanvas = $(".foreground-canvas", this.elem);
      this.fgContext = this.fgCanvas[0].getContext("2d");
      this.canvases.push(this.fgCanvas);
      this.pbCanvas = $(".power-bar", this.elem);
      this.pbContext = this.pbCanvas[0].getContext("2d");
      this.canvases.push(this.pbCanvas);
      for (let a = 0; a < this.canvases.length; a++) this.canvases[a][0].width = this.canvases[a].width(), 0 != a && (this.canvases[a][0].height = this.canvases[a].height());
      this.cacheCanvas = $(document.createElement("canvas"));
      this.cacheContext = this.cacheCanvas[0].getContext("2d");
      this.initCacheCanvas();
    }
    start() {
      window.santaApp.fire("sound-trigger", "wrapbattle_start_game");
      this.controls.setup();
      $(window).on("resize.wrapbattle", this.onResize_.bind(this));
      this.restart();
    }
    restart() {
      this.onResize_();
      this.level = 0;
      this.scoreboard.reset();
      this.points = 0;
      this.deactivatePowerup();
      this.track.cleanUp();
      this.sequencer.playTrack(this.level, () => {
        this.paused = !1;
        this.gameStartTime = +new Date();
        this.track.initLevel(this.level, this.sequencer.getBPM());
        this.bpmBasedElements.css("animation-duration", 60 / this.sequencer.getBPM() * 2 + "s");
        this.animationPlayer.cleanUp();
        this.leftElf.cleanUp();
        this.rightElf.cleanUp();
        this.unfreezeGame();
      });
      window.santaApp.fire("analytics-track-game-start", {
        gameid: "wrapbattle"
      });
    }
    update(a) {
      this.litUpDirections = [!1, !1, !1, !1];
      this.track.update(this.controls.keysDown);
      this.render(a);
      this.elem.find(".points").text(this.points);
      this.leftElf.update(a);
      this.rightElf.update(a);
      this.powerUp = Math.max(0, Math.min(1, this.powerUp));
      1 != this.powerUp || this.powerUpActive || this.activatePowerup();
      this.powerUpActive && (this.powerUp -= b.Constants.POWERUP_DECAY, 0 >= this.powerUp && this.deactivatePowerup());
    }
    render(a) {
      this.drawTrackLine();
      this.powerUpActive != this.powerUpActiveRendered && this.drawTrackLine();
      this.track.render(a, this.sequencer.getBPM());
      this.drawPowerBarFg();
      this.drawCircles();
    }
    initCacheCanvas() {
      this.imageNames = ["arrow-up", "arrow-down", "arrow-left", "arrow-right"];
      this.images = {};
      this.imagesLoaded = 0;
      setTimeout(this.setUpCacheCanvas.bind(this), 1E3);
      this.imageNames.forEach(this.loadImage.bind(this));
    }
    loadImage(a) {
      let c = new Image();
      c.onload = () => {
        this.images[a] = c;
        this.imagesLoaded++;
        this.imagesLoaded >= this.imageNames.length && this.setUpCacheCanvas();
      };
      c.onerror = () => {
        c.onerror = null;
        setTimeout(() => {
          c.src += "?" + +new Date();
        }, 1E3);
      };
      c.src = this.componentDir + `img/${a}.png`;
    }
    setUpCacheCanvas() {
      let a = b.Constants.ARROW_SIZE[this.responsiveKey],
        c = b.Constants.ARROW_SIZE.desktop + b.Constants.ARROW_MARGIN;
      this.cacheCanvas[0].height = 4 * c;
      this.cacheCanvas[0].width = 8 * c;
      this.cacheContext.fillStyle = b.Constants.COLORS.ARROW_FILL;
      this.drawCachedArrowRow(0);
      this.cacheContext.fillStyle = b.Constants.COLORS.ARROW_PASSED_FILL;
      this.cacheContext.globalAlpha = 1;
      this.drawCachedArrowRow(2 * c);
      this.cacheContext.fillStyle = b.Constants.COLORS.ARROW_MULTI_FILL;
      this.cacheContext.shadowColor = b.Constants.COLORS.ARROW_MULTI_SHADOW;
      this.cacheContext.shadowBlur = b.Constants.ARROW_MULTI_SHADOW_BLUR;
      this.cacheContext.shadowOffsetY = b.Constants.ARROW_MULTI_SHADOW_OFFSET;
      this.cacheContext.save();
      this.cacheContext.translate(a / 2, 3 * c + a / 2);
      this.cacheContext.beginPath();
      this.cacheContext.arc(0, 0, a / 2, 0, 2 * Math.PI);
      this.cacheContext.fill();
      this.cacheContext.restore();
      for (let d = 0; d < b.Constants.COLORS.ARROW_MULTI_RAINBOW.length; d++) this.cacheContext.fillStyle = b.Constants.COLORS.ARROW_MULTI_RAINBOW[d], this.cacheContext.save(), this.cacheContext.translate(c * (d + 1) + a / 2, 3 * c + a / 2), this.cacheContext.beginPath(), this.cacheContext.arc(0, d, a / 2, 0, 2 * Math.PI), this.cacheContext.fill(), this.cacheContext.restore();
    }
    drawCachedArrowRow(a) {
      let c = b.Constants.ARROW_SIZE[this.responsiveKey],
        d = b.Constants.ARROW_SIZE.desktop + b.Constants.ARROW_MARGIN;
      for (let e = 0; e < this.imageNames.length; e++) {
        let g = this.imageNames[e];
        this.cacheContext.save();
        this.cacheContext.translate(d * e + c / 2, a + c / 2);
        this.cacheContext.beginPath();
        this.cacheContext.arc(0, e, c / 2, 0, 2 * Math.PI);
        this.cacheContext.fill();
        this.cacheContext.drawImage(this.images[g], -b.Constants.ARROW_IMG_WIDTH / 2, -b.Constants.ARROW_IMG_HEIGHT / 2, b.Constants.ARROW_IMG_WIDTH, b.Constants.ARROW_IMG_HEIGHT);
        this.cacheContext.restore();
      }
    }
    drawTrackLine() {
      let a = b.Constants.TRACK_LINE_POSITION[this.responsiveKey];
      this.bgContext.clearRect(0, 0, this.bgCanvas.width(), this.bgCanvas.height());
      this.bgContext.fillStyle = this.powerUpActive ? b.Constants.COLORS.TRACK_LINE_MEGA : b.Constants.COLORS.TRACK_LINE;
      this.bgContext.fillRect(0, a, this.bgCanvas.width(), 2);
      this.powerUpActiveRendered = this.powerUpActive;
    }
    drawPowerBarBg() {
      this.fgContext.clearRect(0, 0, this.fgCanvas.width(), this.fgCanvas.height());
      var a = b.Constants.POWERUP_MARGIN[this.responsiveKey];
      let c = b.Constants.POWERUP_INNER_MARGIN[this.responsiveKey],
        d = b.Constants.POWERUP_HEIGHT[this.responsiveKey],
        e = this.fgCanvas.width() - 2 * a;
      this.fgContext.fillStyle = b.Constants.COLORS.POWERUP_SHADOW;
      this.fgContext.fillRect(a, a, e, d + 2 * c);
      let g = a + c,
        f = a + d / 2,
        h = e - 2 * c;
      a = this.fgContext.createLinearGradient(g, f, a + e - c, f);
      a.addColorStop(0, b.Constants.COLORS.GRADIENT_START);
      a.addColorStop(1, b.Constants.COLORS.GRADIENT_END);
      this.fgContext.fillStyle = a;
      this.fgContext.fillRect(g, g, h, d);
    }
    drawPowerBarFg() {
      this.pbContext.clearRect(0, 0, this.pbCanvas.width(), this.pbCanvas.height());
      let a = b.Constants.POWERUP_MARGIN[this.responsiveKey],
        c = b.Constants.POWERUP_INNER_MARGIN[this.responsiveKey],
        d = b.Constants.POWERUP_HEIGHT[this.responsiveKey],
        e = this.pbCanvas.width() - 2 * a,
        g = a + c,
        f = e - 2 * c;
      this.pbContext.fillStyle = b.Constants.COLORS.POWERUP;
      this.pbContext.fillRect(a + e - c - f * (1 - this.powerUp), g, f * (1 - this.powerUp), d);
      this.pbContext.fillStyle = b.Constants.COLORS.POWERUP_SHINE;
      this.pbContext.fillRect(g, g + b.Constants.POWERUP_SHINE_POSITION, f * this.powerUp, b.Constants.POWERUP_SHINE_HEIGHT[this.responsiveKey]);
      this.pbContext.fillStyle = b.Constants.COLORS.POWERUP_MARKER;
      this.pbContext.fillRect(g + f * this.powerUp, g, b.Constants.POWERUP_MARKER_WIDTH[this.responsiveKey], d);
    }
    drawCircles() {
      let a = b.Constants.TRACK_LINE_POSITION[this.responsiveKey],
        c = this.pbContext.canvas.width,
        d = b.Constants.ARROW_SIZE[this.responsiveKey],
        e = b.Constants.ARROW_MARGIN,
        g = 4 * d + 3 * e;
      for (let f = 0; 4 > f; f++) {
        let h = (c - g) / 2 + f * (d + e) + d / 2;
        this.pbContext.lineWidth = 2;
        this.pbContext.strokeStyle = this.powerUpActive ? b.Constants.COLORS.TRACK_LINE_MEGA : b.Constants.COLORS.TRACK_LINE;
        if (this.litUpDirections[f]) {
          let c = this.pbContext.createLinearGradient(h - d / 2, a, h + d / 2, a);
          c.addColorStop(0, b.Constants.COLORS.GRADIENT_START);
          c.addColorStop(1, b.Constants.COLORS.GRADIENT_END);
          this.pbContext.strokeStyle = c;
        }
        this.circlePositions[f] = h;
        this.pbContext.beginPath();
        this.pbContext.arc(h, a, d / 2, 0, 2 * Math.PI);
        this.pbContext.stroke();
      }
    }
    activatePowerup() {
      this.sequencer.setMaxIntensity();
      this.elem.addClass("megamode");
      this.powerUpActive = !0;
      this.bpmBasedElements.css("animation-duration", 30 / this.sequencer.getBPM() * 2 + "s");
    }
    deactivatePowerup() {
      this.sequencer.setNormalIntensity(this.powerUpActive);
      this.elem.removeClass("megamode");
      this.powerUpActive = !1;
      this.powerUp = 0;
      this.bpmBasedElements.css("animation-duration", 60 / this.sequencer.getBPM() * 2 + "s");
    }
    onLevelCompleted() {
      if (this.level + 1 === b.Levels.levels.length) this.gameover();else this.sequencer.onNextBar(() => {
        this.sequencer.stop();
        this.levelUp.show(this.level + 2, this.startNextLevel.bind(this, this.level + 1));
      });
    }
    startNextLevel(a) {
      this.level = a;
      this.points = 0;
      this.deactivatePowerup();
      this.scoreboard.setLevel(this.level);
      this.track.cleanUp();
      this.sequencer.playTrack(this.level % b.Constants.LEVELS, () => {
        this.animationPlayer.cleanUp();
        this.leftElf.cleanUp();
        this.rightElf.cleanUp();
        this.track.initLevel(this.level, this.sequencer.getBPM());
        this.bpmBasedElements.css("animation-duration", 60 / this.sequencer.getBPM() * 2 + "s");
      });
    }
    freezeGame() {
      cancelAnimationFrame(this.requestId);
      this.isPlaying = !1;
      this.sequencer.pause();
      this.elem.addClass("frozen");
    }
    unfreezeGame() {
      this.isPlaying || (this.elem.removeClass("frozen"), this.isPlaying = !0, this.lastFrame = +new Date(), this.requestId = window.requestAnimationFrame(this.onFrame_));
    }
    onFrame_() {
      if (this.isPlaying) {
        var a = +new Date(),
          c = Math.min(1E3, a - this.lastFrame);
        this.lastFrame = a;
        this.update(c);
        this.animationPlayer.update(a / 1E3);
        this.requestId = window.requestAnimationFrame(this.onFrame_);
      }
    }
    pause() {
      this.paused = !0;
      this.freezeGame();
    }
    resume() {
      this.gameStartTime && this.sequencer.resume();
      this.paused = !1;
      this.unfreezeGame();
    }
    togglePause() {
      this.paused ? this.resume() : this.isPlaying && this.pause();
    }
    onResize_() {
      var a = 800 > $(window).width() ? "mobile" : "desktop";
      this.lastResponsiveKey && this.lastResponsiveKey == a || (this.lastResponsiveKey = this.responsiveKey, this.responsiveKey = a, this.setUpCacheCanvas());
      for (a = 0; a < this.canvases.length; a++) this.canvases[a][0].width = this.canvases[a].width(), this.canvases[a][0].height = this.canvases[a].height();
      this.drawPowerBarBg();
      this.leftElf.onResize();
      this.rightElf.onResize();
      this.track.renderTrack();
      this.render(0);
      this.leftElf.update(0);
      this.rightElf.update(0);
    }
    gameover() {
      this.freezeGame();
      this.gameoverDialog.show();
      this.sequencer.stop();
      this.leftElf.cleanUp();
      this.rightElf.cleanUp();
      this.animationPlayer.cleanUp();
      window.santaApp.fire("sound-trigger", "wrapbattle_gameover");
    }
    dispose() {
      this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
        gameid: "wrapbattle",
        timePlayed: new Date() - this.gameStartTime,
        level: 1
      });
      this.freezeGame();
      window.cancelAnimationFrame(this.requestId);
      $(window).off(".wrapbattle");
      $(document).off(".wrapbattle");
      this.elem.off(".wrapbattle");
      this.levelUp.dispose();
    }
  };
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
window.Klang = {
  Util: {
    now() {
      return performance.now();
    }
  },
  $(id) {
    return {
      _content: null
    };
  },
  engineVersion: 'webaudio'
};
sceneApi.preload.sounds('wrapbattle_load_sounds');
sceneApi.preload.images('img/arrow-down.png', 'img/arrow-up.png', 'img/arrow-left.png', 'img/arrow-right.png', 'img/scene/crowd-background.png', 'img/scene/speaker-boom.svg', 'img/scene/speaker-left-corner.svg', 'img/scene/speaker-left-corner-foam.png', 'img/scene/speaker-right-corner.svg', 'img/scene/speaker-right-corner-foam.png', 'img/scene/table.svg', 'img/scene/turn-tables.svg', 'img/scene/wrap-center.png', 'img/scene/wrap-left.png', 'img/scene/wrap-right.png', 'img/steps/boy/fail_0.png', 'img/steps/boy/idle_1_0.png', 'img/steps/boy/idle_2_0.png', 'img/steps/boy/wrap_back_blue_0.png', 'img/steps/boy/wrap_back_green_0.png', 'img/steps/boy/wrap_back_red_0.png', 'img/steps/boy/wrap_front_blue_0.png', 'img/steps/boy/wrap_front_green_0.png', 'img/steps/boy/wrap_front_red_0.png', 'img/steps/girl/fail_0.png', 'img/steps/girl/idle_1_0.png', 'img/steps/girl/idle_2_0.png', 'img/steps/girl/wrap_back_blue_0.png', 'img/steps/girl/wrap_back_green_0.png', 'img/steps/girl/wrap_back_red_0.png', 'img/steps/girl/wrap_front_blue_0.png', 'img/steps/girl/wrap_front_green_0.png', 'img/steps/girl/wrap_front_red_0.png', 'img/presents/gift_blue_false.png', 'img/presents/gift_blue_true.png', 'img/presents/gift_green_false.png', 'img/presents/gift_green_true.png', 'img/presents/gift_red_false.png', 'img/presents/gift_red_true.png', 'img/toys/toys-01.svg', 'img/toys/toys-02.svg', 'img/toys/toys-03.svg', 'img/toys/toys-04.svg', 'img/toys/toys-05.svg', 'img/toys/toys-06.svg', 'img/toys/toys-07.svg', 'img/toys/toys-08.svg');
const game = new Game(document.getElementById('module-wrapbattle'), './');
sceneApi.config({
  sound: ['wrapbattle_start'],
  orientation: 'portrait',
  pause: true
});
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.ready(async () => {
  game.start();
});