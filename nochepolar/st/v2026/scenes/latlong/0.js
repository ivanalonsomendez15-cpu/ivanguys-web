import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    shared: {}
  };
  c.shared.pools = function () {
    const a = [];
    return {
      mixin(b, d) {
        function e(a) {
          d.fixed || 0 !== b.pool_.length || b.pool(a);
        }
        function f(a, b) {
          a && a.onInit.apply(a, Array.prototype.slice.call(b, 1));
          return a || null;
        }
        d = d || {};
        b.pool_ = [];
        a.push(b);
        b.pop = function (a) {
          e(a);
          const d = b.pool_.shift();
          return f(d, arguments);
        };
        b.popRandom = function (a) {
          e(a);
          const d = Math.floor(Math.random() * b.pool_.length),
            g = b.pool_[d],
            n = b.pool_.pop();
          n && g !== n && (b.pool_[d] = n);
          return f(g, arguments);
        };
        b.pool = function (a) {
          a = new b(a);
          b.pool_.push(a);
        };
        b.push = function (a) {
          if (a.onDispose) a.onDispose();
          b.pool_.push(a);
        };
        b.prototype.remove = function () {
          b.push(this);
        };
        b.prototype.onInit = b.prototype.onInit || function () {};
        b.prototype.onDispose = b.prototype.onDispose || function () {};
      },
      empty() {
        for (let b = 0; b < a.length; b++) a[b].pool_ = [];
      }
    };
  }();
  c.shared.pools.PoolType = function () {};
  c.shared.pools.PoolType.onInit = function () {};
  c.shared.pools.PoolType.onDispose = function () {};
  c.shared.pools.PoolType.remove = function () {};
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
  c.Present = function (a) {
    this.color = a.color;
    this.number = a.number;
    this.rotation = 10 * Math.random() * (.5 < Math.random() ? 1 : -1);
    this.el = a.presentTemplate.clone().removeAttr("id");
    this.el.addClass("Present--" + this.color);
    this.el.find(".Present-tag").text(this.number);
    this.el.find(".Present-box").css({
      transform: "rotate(" + this.rotation + "deg)"
    });
    this.parentEl = a.parentEl;
    this.elfTemplate = a.elfTemplate;
    this.active = !0;
    this.delivering = !1;
    this.deliverCallback = this.deliverMarker = null;
    this.velocityX = this.right = this.x = 0;
    a = new KeyframeEffect(document.body, [], 0);
    this.player = document.timeline.play(a);
  };
  c.shared.pools.mixin(c.Present, {
    fixed: !0
  });
  c.Present.prototype.onInit = function (a, b) {
    this.setX(a);
    this.velocityX = b;
    this.active = !0;
    this.delivering = !1;
    this.deliverCallback = this.deliverMarker = null;
    this.parentEl.append(this.el);
  };
  c.Present.prototype.onDispose = function () {
    this.el.remove();
    this.el.css("transform-origin", "").find(".Elf").remove();
    this.player.cancel();
  };
  c.Present.prototype.setX = function (a) {
    this.x = a;
    this.right = a + h.PRESENT_WIDTH;
    this.el.css("left", a);
  };
  c.Present.prototype.deliver = function (a, b) {
    var d = this.el[0].getBoundingClientRect(),
      e = a[0].getBoundingClientRect(),
      f = Math.abs(this.velocityX),
      g = 2500 - 900 * f / 100;
    f = e.left - d.left + e.width / 2 + f * g / 1E3;
    d = e.top - d.top + e.height / 2;
    var l = this.elfTemplate.clone().removeAttr("id");
    l.addClass("Elf--" + this.color);
    l.appendTo(this.el);
    e = this.el[0];
    l = new KeyframeEffect(l[0], [{
      transform: "translate3d(0, 144px, 0) scale(2)"
    }, {
      transform: "translate3d(0, 0px, 0) scale(2)"
    }], {
      duration: Math.round(.2 * g),
      easing: "ease"
    });
    g = new KeyframeEffect(e, [{
      transform: "translateZ(0) scale(1) rotate(0deg)"
    }, {
      transform: "translateZ(0) scale(0) rotate(" + -f / d * 45 + "deg)"
    }], {
      duration: Math.round(.8 * g),
      easing: "cubic-bezier(.35,.16,.22,1)",
      fill: "forwards"
    });
    g = new SequenceEffect([l, g]);
    this.el.css("transform-origin", f + "px " + d + "px");
    a.addClass("Grid-marker--correct");
    this.player.cancel();
    this.player = document.timeline.play(g);
    c.shared.utils.onWebAnimationFinished(this.player, this.onFinishDelivery_.bind(this));
    this.delivering = !0;
    this.deliverMarker = a;
    this.deliverCallback = b;
    window.santaApp.fire("sound-trigger", "latlong_jetpack");
  };
  c.Present.prototype.onPause = function () {
    this.delivering && this.player.pause();
  };
  c.Present.prototype.onResume = function () {
    this.delivering && this.player.play();
  };
  c.Present.prototype.onFinishDelivery_ = function () {
    this.delivering && (this.delivering = !1, this.deliverMarker.removeClass("Grid-marker--correct"), this.deliverCallback(this));
  };
  c.Belt = function (a, b, d, e, f) {
    this.elem = a.find(".Belt");
    this.grid = a.find(".Grid");
    this.onLevelCompleteCallback = b;
    this.addScoreCallback = d;
    this.missedPresentCallback = e;
    this.matchedPresentCallback = f;
    this.presentTemplate = a.find("#present-template");
    this.elfTemplate = a.find("#elf-template");
    this.presents = [];
    this.grid.on("mouseup.latlong touchend.latlong", this.onGridClick.bind(this));
    this.grid.find(".Grid-marker").on("mouseenter.latlong", function () {
      window.santaApp.fire("sound-trigger", "latlong_over");
    });
    this.onDeliver_ = this.onDeliver_.bind(this);
    this.rescale();
    this.generatePresents_();
  };
  c.Belt.prototype.rescale = function () {
    this.beltWidth = this.elem.width();
    this.visibleWidth = this.beltWidth - h.BELT_CYCLE_DISTANCE;
    if (2 === this.presents.length) for (var a = 0; a < this.presents.length; a++) this.presents[a].setX(this.getMidpoint_() + a * h.PRESENT_SPAWN_WIDTH);
  };
  c.Belt.prototype.getMidpoint_ = function () {
    return this.visibleWidth / 2 - this.targetCount * h.PRESENT_SPAWN_WIDTH / 2;
  };
  c.Belt.prototype.reset = function () {
    this.presents.forEach(function (a) {
      a.remove();
    });
    this.presents = [];
    this.grid.find(".Grid-marker").removeClass("Grid-marker--correct");
    this.correctCount = this.beltSpeed = this.beltDistance = 0;
  };
  c.Belt.prototype.generatePresents_ = function () {
    for (var a = c.Constants.COLORS, b = c.Constants.NUMBERS, d = 0; d < a.length; d++) for (var e = 0; e < b.length; e++) c.Present.pool({
      color: a[d],
      number: b[e],
      parentEl: this.elem,
      presentTemplate: this.presentTemplate,
      elfTemplate: this.elfTemplate
    });
  };
  c.Belt.prototype.onFrame = function (a) {
    this.beltDistance += a * this.beltSpeed;
    this.beltDistance > h.BELT_CYCLE_DISTANCE && this.cycleBelt();
    this.elem.css({
      transform: "translate3d(" + -this.beltDistance + "px, 0, 0)"
    });
    this.checkDeadPresents();
  };
  c.Belt.prototype.checkDeadPresents = function () {
    for (var a = this.beltDistance, b = 0, d; d = this.presents[b]; b++) if (d.right < a) d.active && (this.markPresentAndCheckLevel(d), this.missedPresentCallback(d));else break;
  };
  c.Belt.prototype.onLevel = function (a) {
    this.reset();
    this.remainingPresents = this.targetCount = c.Constants.PRESENTS_PER_LEVEL[a - 1];
    this.spawnCount = 0;
    this.beltSpeed = c.Constants.BELT_SPEED_PER_LEVEL[a - 1];
    window.santaApp.fire("sound-trigger", {
      name: "latlong_conveyor_speed",
      args: [this.beltSpeed / Math.max.apply(Math, c.Constants.BELT_SPEED_PER_LEVEL)]
    });
    this.cycleBelt();
  };
  c.Belt.prototype.cycleBelt = function () {
    var a = Math.min(h.BELT_CYCLE_DISTANCE, this.beltDistance);
    this.beltDistance -= a;
    this.presents = this.presents.filter(function (b) {
      var d = b.x - a;
      if (0 > d + h.PRESENT_WIDTH && !b.delivering) return b.remove(), !1;
      b.setX(d);
      return !0;
    });
    var b = this.presents.length ? this.presents[this.presents.length - 1].x + h.PRESENT_SPAWN_WIDTH : this.beltSpeed ? this.visibleWidth : this.getMidpoint_();
    for (var d; this.spawnCount < this.targetCount && b < this.beltWidth;) {
      d = c.Present.popRandom(null, b, -this.beltSpeed);
      if (!d) break;
      this.presents.push(d);
      b += h.PRESENT_SPAWN_WIDTH;
      this.spawnCount++;
    }
  };
  c.Belt.prototype.onGridClick = function (a) {
    a = $(a.target).closest(".Grid-marker");
    if (0 < a.length) {
      var b = a.closest(".Grid-longitude").data("color"),
        d = a.closest(".Grid-latitude").data("number");
      if (b = this.matchesAny(b, d)) this.onCorrect(b, a);else this.onIncorrect(a);
    }
  };
  c.Belt.prototype.matchesAny = function (a, b) {
    for (var d = this.beltDistance, e = d + this.visibleWidth, f = 0, g; g = this.presents[f]; f++) {
      var l = g.color === a && g.number === b;
      if (g.right > d && g.x < e && l && g.active) return g;
    }
    return !1;
  };
  c.Belt.prototype.onCorrect = function (a, b) {
    window.santaApp.fire("sound-trigger", "latlong_success");
    this.addScoreCallback(c.Constants.PRESENT_SCORE);
    a.active = !1;
    a.deliver(b, this.onDeliver_);
    this.matchedPresentCallback(a);
  };
  c.Belt.prototype.onIncorrect = function (a) {
    window.santaApp.fire("sound-trigger", "latlong_failure");
    c.shared.utils.animWithClass(a, "Grid-marker--incorrect");
  };
  c.Belt.prototype.onDeliver_ = function (a) {
    this.markPresentAndCheckLevel(a);
  };
  c.Belt.prototype.markPresentAndCheckLevel = function (a) {
    this.remainingPresents--;
    a.active = !1;
    if (0 === this.remainingPresents) this.onLevelCompleteCallback();
  };
  c.Belt.prototype.onPause = function () {
    this.presents.forEach(function (a) {
      a.onPause();
    });
  };
  c.Belt.prototype.onResume = function () {
    this.presents.forEach(function (a) {
      a.onResume();
    });
  };
  c.Constants = {
    LEVEL_COUNT: 5,
    INITIAL_COUNTDOWN: 60,
    TIME_PER_LEVEL: 20,
    COUNTDOWN_TRACK_LENGTH: 90,
    COUNTDOWN_TRACK_MAX_X: 150,
    COUNTDOWN_FLASH: 10,
    PRESENT_SCORE: 10,
    COLORS: ["red", "green", "blue", "pink", "cyan"],
    NUMBERS: [1, 2, 3, 4, 5],
    PRESENTS_PER_LEVEL: [2, 4, 8, 16, 50],
    BELT_SPEED_PER_LEVEL: [0, 32, 50, 64, 96],
    BELT_CYCLE_DISTANCE: 1200,
    PRESENT_SPAWN_WIDTH: 152,
    PRESENT_WIDTH: 130,
    MATCH_TIME: 3,
    MISS_TIME: -6
  };
  var h = c.Constants;
  c.shared.Gameover = class {
    constructor(a, b = !1) {
      this.game = a;
      this._hasPlayExtra = "boolean" === typeof b && b;
    }
    show(a, b) {
      window.santaApp.fire("game-stop", {
        score: a || this.game && this.game.scoreboard && this.game.scoreboard.score || 0,
        level: b || 0,
        hasPlayExtra: this._hasPlayExtra
      });
    }
  };
  c.shared.LevelUp = k;
  function k(a, b, d) {
    this.bgElem = $(b);
    this.numberElem = $(d);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  k.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  k.prototype.onResize_ = function () {
    var a = window.innerWidth,
      b = window.innerHeight;
    this.bgBorderWidth = a;
    this.bgElem.css({
      width: 2 * a,
      height: 2 * a,
      left: -.5 * a,
      top: -(a - b / 2)
    });
  };
  k.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  k.prototype.numberShown_ = function () {
    m(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  k.prototype.show = function (a, b) {
    this.bgElem.addClass("is-visible");
    m(this.bgElem, "transitionend", 1, b);
    this.bgElem.css("border-width", this.bgBorderWidth);
    m(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function m(a, b, d, e) {
    function f() {
      g || (g = !0, a.removeEventListener(b, f), e && e());
    }
    a = c.shared.utils.unwrapElement(a);
    var g = !1;
    a.addEventListener(b, f);
    window.setTimeout(f, 1E3 * d);
  }
  c.shared.Scoreboard = p;
  function q(a, b) {
    a = h ? h[a] : void 0;
    return +a === a ? a : b;
  }
  function p(a, b, d) {
    this.game = a;
    this.initialCountdown_ = q("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  p.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  p.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  p.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = q("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  p.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  p.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  p.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  p.prototype.announce_ = function () {
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
  function r(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  c.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = r(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = r(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  c.Game = function (a) {
    this.debug = 0 <= location.href.indexOf("debug");
    this.elem = $(a);
    this.scene = this.elem.find(".scene");
    this.gui = this.elem.find(".gui");
    this.scoreboard = new c.shared.Scoreboard(this, this.elem.find(".board"), c.Constants.LEVEL_COUNT);
    this.gameoverView = new c.shared.Gameover(this, this.elem.find(".gameover"));
    this.levelUp = new c.shared.LevelUp(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
    this.pauseOverlay = this.elem.find(".pauseOverlay");
    this.tutorial = new c.shared.Tutorial("latlong.mp4");
    this.hidden = this.paused = this.isPlaying = !1;
    this.gameStartTime = +new Date();
    this.onFrame = this.onFrame.bind(this);
    this.bumpLevel_ = this.bumpLevel_.bind(this);
    this.belt = new c.Belt(this.elem, this.onFinishLevel_.bind(this), this.scoreboard.addScore.bind(this.scoreboard), this.onMissPresent_.bind(this), this.onMatchPresent_.bind(this));
  };
  c.Game.prototype.start = function () {
    this.restart();
    this.tutorial.start();
    this.watchWindowSize_();
  };
  c.Game.prototype.restart = function () {
    this.paused && this.pauseOverlay.hide();
    this.level = 0;
    this.paused = !1;
    this.scoreboard.reset();
    this.bumpLevel_();
    this.debug || (window.santaApp.fire("sound-trigger", "latlong_start"), window.santaApp.fire("sound-ambient", "music_start_ingame"));
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "latlong"
    });
    this.unfreezeGame();
  };
  c.Game.prototype.onFrame = function () {
    if (this.isPlaying) {
      var a = +new Date() / 1E3,
        b = Math.min(1, a - this.lastFrame);
      this.lastFrame = a;
      this.scoreboard.onFrame(b);
      this.belt.onFrame(b);
      this.requestId = window.requestAnimationFrame(this.onFrame);
    }
  };
  c.Game.prototype.onFinishLevel_ = function () {
    this.level === h.LEVEL_COUNT ? this.gameover() : this.levelUp.show(this.level + 1, this.bumpLevel_);
  };
  c.Game.prototype.onMissPresent_ = function () {
    this.scoreboard.addTime(h.MISS_TIME);
    this.tutorial.off("latlong.mp4");
  };
  c.Game.prototype.onMatchPresent_ = function () {
    this.scoreboard.addTime(h.MATCH_TIME);
    this.tutorial.off("latlong.mp4");
  };
  c.Game.prototype.bumpLevel_ = function () {
    this.level++;
    this.belt.onLevel(this.level);
    0 < this.level && window.santaApp.fire("sound-trigger", "latlong_level_up");
    var a = c.Constants.TIME_PER_LEVEL;
    this.scoreboard.setLevel(this.level - 1);
    this.scoreboard.addTime(a);
  };
  c.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
    this.belt.onPause();
  };
  c.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen"), this.belt.onResume(), this.isPlaying = !0, this.lastFrame = +new Date() / 1E3, this.requestId = window.requestAnimationFrame(this.onFrame));
  };
  c.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverView.show();
    window.santaApp.fire("sound-trigger", "latlong_game_over");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "latlong",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  c.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
    this.elem.addClass("is-paused");
    this.debug || this.pauseOverlay.show();
  };
  c.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
    this.pauseOverlay.hide();
    this.elem.removeClass("is-paused");
  };
  c.Game.prototype.watchWindowSize_ = function () {
    $(window).on("resize.latlong orientationchange.latlong", this.belt.rescale.bind(this.belt));
  };
  c.Game.prototype.dispose = function () {
    window.santaApp.fire("analytics-track-game-quit", {
      gameid: "latlong",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    $(window).off(".latlong");
    $(document).off(".latlong");
    this.levelUp.dispose();
    this.tutorial.dispose();
    c.shared.pools.empty();
  };
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('latlong_load_sounds');
sceneApi.preload.images('img/belt.svg', 'img/elf-fire.svg', 'img/elfs.svg', 'img/logo.svg', 'img/map.jpg', 'img/marker-colors.svg', 'img/present-ribbon.svg', 'img/present-shadow.svg', 'img/present-tag.svg', 'img/status.svg');
sceneApi.config({
  pause: true,
  sound: ['latlong_start'],
  orientation: 'portrait'
});
const game = new Game(document.getElementById('module-latlong'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.ready(async () => {
  game.start();
});