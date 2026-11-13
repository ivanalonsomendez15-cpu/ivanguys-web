import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var e = {
    DOOR_COUNT: 12,
    LAST_LEVEL: 5,
    INITIAL_COUNTDOWN: 30,
    MINIMUM_COUNTDOWN: 5,
    COUNTDOWN_TRACK_LENGTH: 60,
    COUNTDOWN_TRACK_MAX_X: 150,
    COUNTDOWN_FLASH: 10,
    SCORE_MATCH: 50,
    SCORE_LEVEL_UP: 500,
    TIME_PER_LEVEL: 30,
    MAX_TIME: 120,
    MISMATCH_TIMEOUT: 400,
    LEVEL_CAP_DURATION: 15,
    SLIDING_DOOR_DURATION: 400,
    MAX_OPEN_DOORS: 2,
    SELECTOR_DOOR: ".door",
    SELECTOR_DOOR_TARGET: ".door-target",
    SELECTOR_CARD: ".card",
    CLASS_FIGURE_PREFIX: "card--figure-",
    CLASS_DOOR_OPEN: "door--open",
    CLASS_DOOR_ENABLED: "door--enabled"
  };
  var g = {
    shared: {}
  };
  g.shared.utils = function () {
    class a {
      constructor(a) {
        this.value = a;
      }
      change(a) {
        const b = this.value !== a;
        this.value = a;
        return b;
      }
      moveToTarget(a, c) {
        let b = +this.value;
        if (this.value !== b) throw new TypeError("SmartValue does not contain a number");
        b < a ? b = Math.min(a, b + c) : b > a && (b = Math.max(a, b - c));
        this.value = b;
        return this;
      }
    }
    return {
      animWithClass: function (a, c, d) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(c);
          const b = () => {
            a.classList.remove(c);
            a.removeEventListener("animationend", b);
            a.removeEventListener("transitionend", b);
            d && (d(), d = null);
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
        let d;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = b.getPropertyValue(a + "transform");
          if (!a) return !1;
          d = a;
          return !0;
        });
        if ("none" === d) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let f;
        try {
          f = d.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (p) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: f[4],
          y: f[5],
          rotate: 180 / Math.PI * Math.atan2(f[1], f[0])
        };
      },
      onWebAnimationFinished: function (a, c) {
        const b = a.finished;
        b && b.then ? b.then(c) : a.addEventListener("finish", c, !1);
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
  g.shared.LevelUp = h;
  function h(a, b, c) {
    this.bgElem = $(b);
    this.numberElem = $(c);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  h.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  h.prototype.onResize_ = function () {
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
  h.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  h.prototype.numberShown_ = function () {
    k(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  h.prototype.show = function (a, b) {
    this.bgElem.addClass("is-visible");
    k(this.bgElem, "transitionend", 1, b);
    this.bgElem.css("border-width", this.bgBorderWidth);
    k(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function k(a, b, c, d) {
    function f() {
      p || (p = !0, a.removeEventListener(b, f), d && d());
    }
    a = g.shared.utils.unwrapElement(a);
    var p = !1;
    a.addEventListener(b, f);
    window.setTimeout(f, 1E3 * c);
  }
  g.shared.Gameover = class {
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
  g.shared.Scoreboard = l;
  function m(a, b) {
    a = e ? e[a] : void 0;
    return +a === a ? a : b;
  }
  function l(a, b, c) {
    this.game = a;
    this.initialCountdown_ = m("INITIAL_COUNTDOWN", 60);
    this.levels = c || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  l.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  l.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  l.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = m("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  l.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  l.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  l.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  l.prototype.announce_ = function () {
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
  function n(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  g.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = n(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = n(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  function q(a, b, c, d) {
    this.elem_ = b;
    this.cardClass_ = d;
    this.clickHandler_ = c;
    this.id = a;
    this.uniqueId = q.ID_COUNTER++;
    this.isMismatched = this.isOpened = this.isCompleted = !1;
    this.setCard();
    this.enable();
    this.attachEvents_();
  }
  q.ID_COUNTER = 0;
  q.prototype.attachEvents_ = function () {
    this.elem_.on("click", function () {
      this.clickHandler_(this);
    }.bind(this));
  };
  q.prototype.destroy = function () {
    this.elem_.off("click");
  };
  q.prototype.reset = function () {
    this.isOpened && this.close();
    this.isCompleted = !1;
    this.elem_.find(e.SELECTOR_CARD).attr("class", "card");
    this.elem_.attr("class", "door").off("click");
  };
  q.prototype.close = function () {
    this.elem_.removeClass(e.CLASS_DOOR_OPEN);
    this.isMismatched = this.isOpened = !1;
  };
  q.prototype.open = function () {
    this.elem_.addClass(e.CLASS_DOOR_OPEN);
    this.isOpened = !0;
  };
  q.prototype.toggle = function () {
    this.isOpened ? this.close() : this.open();
  };
  q.prototype.complete = function () {
    this.isCompleted = !0;
    this.isMismatched = !1;
  };
  q.prototype.setCard = function () {
    this.elem_.find(e.SELECTOR_CARD).addClass(this.cardClass_);
  };
  q.prototype.enable = function () {
    this.elem_.addClass(e.CLASS_DOOR_ENABLED);
  };
  q.prototype.disable = function () {
    this.elem_.removeClass(e.CLASS_DOOR_ENABLED);
  };
  function r() {
    this.allCards = [];
  }
  r.prototype.prepare = function () {
    this.allCards.length = 0;
    for (var a = 1; a <= e.DOOR_COUNT; a++) this.allCards.push(e.CLASS_FIGURE_PREFIX + a);
  };
  r.prototype.getLevelCards = function (a) {
    var b = null,
      c = Math.round(a / 2);
    if (0 >= a) throw Error("Cards: invalid number of cards.");
    this.allCards.sort(() => Math.random() - .5);
    var d = [];
    for (a = 0; a < c; a++) b = this.allCards.pop(), d.push(b), d.push(b);
    return d;
  };
  function t(a) {
    this.level = 0;
    this.elem = a;
    this.lastPattern = null;
    this.DOORS_LEVEL_MAP = [[2, 3, 8, 9], [0, 1, 2, 3, 4, 5], [1, 2, 3, 4, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];
    this.PATTERNS_LEVEL_MAP = [["horMirror", "offset01", "checkerboard"], ["offset10", "offset30", "random"], ["horMirror", "offset01", "random"], ["horMirror", "offset10Alt", "random"], "horMirror offset01 checkerboard offset11 offset10 offset10Alt".split(" "), "horMirror offset01 checkerboard offset11 offset10 offset10Alt".split(" "), ["horMirror", "offset11", "offset30", "horVerMirror"], ["horMirror", "offset11", "offset30", "horVerMirror", "random"], ["offset30", "horVerMirror", "random"], ["random"]];
    this.DOORS_PATTERNS = {
      horMirror: [4, 2, 0, 0, 2, 4, 5, 3, 1, 1, 3, 5],
      checkerboard: [3, 2, 1, 0, 4, 5, 2, 3, 0, 1, 5, 4],
      offset11: [0, 1, 2, 3, 4, 5, 5, 0, 1, 2, 3, 4],
      offset01: [4, 2, 0, 1, 3, 5, 4, 2, 0, 1, 3, 5],
      offset10: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
      offset10Alt: [0, 0, 1, 1, 2, 2, 5, 3, 3, 4, 4, 5],
      offset30: [0, 1, 2, 0, 1, 2, 3, 4, 5, 3, 4, 5],
      horVerMirror: [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0]
    };
    this.compilePatterns_();
  }
  t.prototype.compilePatterns_ = function () {
    for (var a in this.DOORS_PATTERNS) {
      if (!this.DOORS_PATTERNS.hasOwnProperty(a)) return;
      for (var b = this.DOORS_PATTERNS[a], c = Array(6), d = 0, f; 12 > d; d++) f = b[d], c[f] ? b[d] = 2 * f + 1 : (b[d] = 2 * f, c[f] = !0);
    }
    for (a = 0; c = this.PATTERNS_LEVEL_MAP[a]; a++) for (d = Array(this.DOORS_LEVEL_MAP[a].length), f = 0; b = c[f]; f++) this.shuffle_(d, b, a);
  };
  t.prototype.start = function () {};
  t.prototype.getNumberOfDoors = function () {
    return this.DOORS_LEVEL_MAP[this.level].length;
  };
  t.prototype.getDoorIndex = function (a) {
    return this.DOORS_LEVEL_MAP[this.level][a];
  };
  t.prototype.shuffleCards = function (a) {
    var b = this.PATTERNS_LEVEL_MAP[this.level];
    do {
      var c = Math.floor(Math.random() * b.length);
      c = b[c];
    } while ("random" !== c && c === this.lastPattern);
    this.lastPattern = c;
    return this.shuffle_(a, c, this.level);
  };
  t.prototype.shuffle_ = function (a, b, c) {
    return "random" === b ? (a = a.slice(), a.sort(() => Math.random() - .5), a) : this.patternShuffle_(a, b, c);
  };
  t.prototype.patternShuffle_ = function (a, b, c) {
    var d = Array(a.length);
    c = this.DOORS_LEVEL_MAP[c];
    b = this.DOORS_PATTERNS[b];
    for (var f = 0; f < a.length; f++) {
      var p = b[c[f]];
      if (p >= a.length) throw Error("Pattern was out of level bounds");
      d[f] = a[p];
    }
    return d;
  };
  t.prototype.set = function (a) {
    this.level = a - 1;
  };
  t.prototype.get = function () {
    return this.level + 1;
  };
  t.prototype.reset = function () {
    this.level = 0;
  };
  t.prototype.next = function () {
    this.set(this.level + 2);
  };
  function u(a) {
    this.elem = $(a);
    this.isPlaying = !1;
    this.doors = [];
    this.doorsOpen = {};
    this.numberOfCompletedDoors = this.numberOfMismatchedDoors = this.numberOfOpenedDoors = this.numberOfDoors = 0;
    this.gameStartTime = +new Date();
    this.cards = new r();
    this.gameoverDialog = new g.shared.Gameover(this, this.elem.find(".gameover"));
    this.scoreboard = new l(this, this.elem.find(".board"), 10);
    this.tutorial = new g.shared.Tutorial("matching.svg");
    this.$doors = this.elem.find(e.SELECTOR_DOOR);
    this.$targets = this.elem.find(e.SELECTOR_DOOR_TARGET);
    this.mismatchTimeout = 0;
    this.levelModel = new t(this.elem);
    this.levelUp = new h(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
    this.onFrame_ = this.onFrame_.bind(this);
  }
  u.prototype.start = function () {
    this.$targets.on("click", this.onTargetClick_.bind(this));
    this.$targets.on("touchstart", this.onTargetTouch_.bind(this));
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    this.cards.prepare();
    this.paused = !1;
    this.restart();
    this.tutorial.start();
  };
  u.prototype.destroy = function () {
    if (this.isPlaying) {
      var a = {
        gameid: "matching",
        timePlayed: new Date() - this.gameStartTime,
        level: this.levelModel.get() - 1
      };
      window.santaApp.fire("analytics-track-game-quit", a);
    }
    window.clearTimeout(this.mismatchTimeout);
    this.doors.forEach(function (a) {
      a.destroy();
    });
    this.levelUp.dispose();
    window.cancelAnimationFrame(this.requestId);
  };
  u.prototype.createDoors_ = function () {
    this.numberOfDoors = this.levelModel.getNumberOfDoors();
    this.doors = [];
    var a = this.cards.getLevelCards(this.numberOfDoors);
    a = this.levelModel.shuffleCards(a);
    for (var b, c, d = 0; d < this.numberOfDoors; d++) b = this.$doors.eq(this.levelModel.getDoorIndex(d)), c = a.pop(), this.doors.push(this.createDoor_(b, c));
  };
  u.prototype.createDoor_ = function (a, b) {
    var c = b.match(/\d+$/)[0];
    return new q(c, a, this.onDoorClick_.bind(this), b);
  };
  u.prototype.onTargetClick_ = function (a) {
    a = $(a.target).data("target");
    a = parseInt(a, 10);
    this.$doors.eq(a).click();
  };
  u.prototype.onTargetTouch_ = function (a) {
    a.preventDefault();
    this.onTargetClick_(a);
  };
  u.prototype.onDoorClick_ = function (a) {
    a.isCompleted || this.paused || (this.tutorial.off("matching.svg"), a.isOpened ? this.closeDoor_(a) : (this.numberOfOpenedDoors >= e.MAX_OPEN_DOORS && this.closeLastOpenedDoors_(), this.openDoor_(a), 1 < this.numberOfOpenedDoors - this.numberOfMismatchedDoors && this.checkDoorMatch_(a)));
  };
  u.prototype.checkDoorMatch_ = function (a) {
    if (this.isDoorMatched_(a.id)) this.scoreboard.addScore(this.getMatchScore()), this.completeDoors_(a.id), window.santaApp.fire("sound-trigger", "m_match");else {
      for (var b in this.doorsOpen) this.doorsOpen[b].isMismatched = !0, this.numberOfMismatchedDoors++;
      this.mismatchTimeout = window.setTimeout(this.closeMismatchedDoors_.bind(this), e.SLIDING_DOOR_DURATION);
      window.santaApp.fire("sound-trigger", "m_mismatch");
    }
  };
  u.prototype.isDoorMatched_ = function (a) {
    var b = 0,
      c;
    for (c in this.doorsOpen) {
      var d = this.doorsOpen[c];
      d.isMismatched || d.id !== a || b++;
    }
    return 2 === b;
  };
  u.prototype.openDoor_ = function (a) {
    if (!a) throw Error("Door is missing.");
    a.open();
    this.doorsOpen[a.uniqueId] = a;
    this.numberOfOpenedDoors++;
    window.santaApp.fire("sound-trigger", "m_door_open");
  };
  u.prototype.closeDoor_ = function (a, b) {
    if (!a) throw Error("Door is missing.");
    a.close();
    delete this.doorsOpen[a.uniqueId];
    this.numberOfOpenedDoors--;
    this.numberOfOpenedDoors = Math.max(this.numberOfOpenedDoors, 0);
    this.numberOfMismatchedDoors--;
    this.numberOfMismatchedDoors = Math.max(this.numberOfMismatchedDoors, 0);
    b || window.santaApp.fire("sound-trigger", "m_door_close");
  };
  u.prototype.closeLastOpenedDoors_ = function () {
    var a;
    for (a in this.doorsOpen) {
      var b = this.doorsOpen[a];
      b.isCompleted || this.closeDoor_(b);
    }
  };
  u.prototype.closeMismatchedDoors_ = function () {
    var a;
    for (a in this.doorsOpen) {
      var b = this.doorsOpen[a];
      !b.isCompleted && b.isMismatched && this.closeDoor_(b);
    }
  };
  u.prototype.closeAllDoors_ = function () {
    this.doors.forEach(a => {
      this.closeDoor_(a, !0);
    });
  };
  u.prototype.completeDoors_ = function (a) {
    var b;
    for (b in this.doorsOpen) {
      var c = this.doorsOpen[b];
      c.id === a && (c.complete(), this.numberOfCompletedDoors++, this.numberOfMismatchedDoors--, this.numberOfMismatchedDoors = Math.max(this.numberOfMismatchedDoors, 0));
    }
    this.doorsOpen = {};
    this.numberOfOpenedDoors = 0;
    this.checkCompletion_();
  };
  u.prototype.checkCompletion_ = function () {
    this.numberOfCompletedDoors === this.numberOfDoors && this.finishLevel();
  };
  u.prototype.resetDoors_ = function () {
    this.doors.forEach(function (a) {
      a.reset();
    });
    this.doorsOpen = {};
    this.numberOfMismatchedDoors = this.numberOfCompletedDoors = this.numberOfOpenedDoors = 0;
  };
  u.prototype.restart = function () {
    this.levelModel.set(1);
    this.startLevel_();
    window.santaApp.fire("sound-trigger", "music_start_ingame");
    this.scoreboard.reset();
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "matching"
    });
  };
  u.prototype.startLevel_ = function () {
    this.restartDoors_();
    this.unfreezeGame_();
    window.santaApp.fire("sound-trigger", "m_game_start");
  };
  u.prototype.restartDoors_ = function () {
    var a = 0;
    this.cards.prepare();
    if (0 < this.numberOfOpenedDoors || 0 < this.numberOfCompletedDoors) a = e.SLIDING_DOOR_DURATION;
    this.closeAllDoors_();
    window.setTimeout(function () {
      this.resetDoors_();
      this.createDoors_();
    }.bind(this), a);
  };
  u.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var a = +new Date() / 1E3,
        b = a - this.lastFrame;
      this.lastFrame = a;
      this.scoreboard.onFrame(b);
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  u.prototype.finishLevel = function () {
    10 === this.levelModel.get() ? this.gameover() : (this.scoreboard.addScore(this.getLevelScore()), this.levelModel.next(), this.scoreboard.setLevel(this.levelModel.get() - 1), window.santaApp.fire("sound-trigger", "m_level_up"), this.levelUp.show(this.levelModel.get()), this.levelUp.bgElem.one("transitionend", function () {
      this.updateTime_();
      this.startLevel_();
    }.bind(this)));
  };
  u.prototype.getLevelScore = function () {
    var a = this.scoreboard.countdown / 30,
      b = e.SCORE_LEVEL_UP,
      c = e.SCORE_LEVEL_UP / 10 * (this.levelModel.get() - 1);
    return Math.ceil((b + c) * a);
  };
  u.prototype.getMatchScore = function () {
    return Math.ceil(e.SCORE_MATCH + e.SCORE_MATCH / 10 * (this.levelModel.get() - 1));
  };
  u.prototype.updateTime_ = function () {
    var a = e.INITIAL_COUNTDOWN - 5 * (this.levelModel.get() - 1);
    a = Math.max(a, e.LEVEL_CAP_DURATION);
    this.scoreboard.addTime(a);
  };
  u.prototype.gameover = function () {
    this.freezeGame_();
    this.gameoverDialog.show(0, this.levelModel.get());
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "matching",
      score: this.scoreboard.score,
      level: this.levelModel.get() - 1,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  u.prototype.freezeGame_ = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  u.prototype.unfreezeGame_ = function () {
    this.isPlaying || (this.isPlaying = !0, this.elem.removeClass("frozen").focus(), this.lastFrame = +new Date() / 1E3, this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  u.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame_();
  };
  u.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame_();
  };
  g.Game = u;
  _globalExport = g.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('m_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/house.svg', 'img/cloud.min.svg', 'img/mountains.svg', 'img/sprite-doors.svg', 'img/trees-left.png', 'img/trees-right.png', 'img/rotate.svg');
const game = new Game(document.getElementById('module-matching'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  orientation: 'landscape',
  sound: []
});
sceneApi.ready(async () => {
  game.start();
});