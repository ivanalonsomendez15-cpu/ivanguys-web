import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
      Constants: {
        INITIAL_COUNTDOWN: 60,
        TIME_PER_CHIMNEY: 3,
        TOTAL_LEVELS: 10,
        SCORE_CHIMNEY_LARGE: 10,
        SCORE_CHIMNEY_SMALL: 20,
        CHIMNEY_START_SPEED: 150,
        CHIMNEY_SPEED_PER_LEVEL: 30,
        CHIMNEY_SPAWN_INTERVAL: 3,
        CHIMNEY_SPAWN_VARIANCE: 2,
        CHIMNEY_SPAWN_MULTIPLY_EACH_LEVEL: .8,
        CHIMNEY_SPAWN_BASE: .5,
        CHIMNEY_START_X: 1E3,
        CHIMNEY_END_X: -300,
        CHIMNEY_WIDTH_SMALL: 70,
        CHIMNEY_WIDTH_LARGE: 90,
        CHIMNEY_Y_SMALL: 524,
        CHIMNEY_Y_LARGE: 497,
        CHIMNEY_FLAG_VISIBLE: 600,
        PRESENT_INITIAL_VELOCITY: 0,
        PRESENT_GRAVITY: 2E3,
        PRESENT_WIDTH: 20,
        PRESENT_START_Y: 102,
        PRESENT_END_Y: 660,
        TIME_BETWEEN_PRESENTS: .5,
        COUNTDOWN_TRACK_LENGTH: 60,
        COUNTDOWN_TRACK_MAX_X: 150,
        COUNTDOWN_FLASH: 10,
        PLAYER_MAX_SPEED: 400,
        PLAYER_CENTER: 150,
        PLAYER_MIN_X: 225,
        PLAYER_MAX_X: 680,
        PLAYER_START_X: 450,
        LEVEL_DURATION: 21,
        LEVEL_COUNT: 4,
        LEVEL_BG_WIDTH: 890,
        LEVEL_FG_WIDTH: 932,
        LEVEL_BG_TRANSITION: 2,
        LEVEL_FG_TRANSITION: 7,
        TUTORIAL_SPACE_TIMEOUT: 5E3,
        TUTORIAL_ARROW_TIMEOUT: 3E3
      }
    },
    g = b.Constants;
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
        } catch (h) {
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
  b.shared.pools = function () {
    const a = [];
    return {
      mixin(c, d) {
        function e(a) {
          d.fixed || 0 !== c.pool_.length || c.pool(a);
        }
        function f(a, c) {
          a && a.onInit.apply(a, Array.prototype.slice.call(c, 1));
          return a || null;
        }
        d = d || {};
        c.pool_ = [];
        a.push(c);
        c.pop = function (a) {
          e(a);
          const d = c.pool_.shift();
          return f(d, arguments);
        };
        c.popRandom = function (a) {
          e(a);
          const d = Math.floor(Math.random() * c.pool_.length),
            h = c.pool_[d],
            k = c.pool_.pop();
          k && h !== k && (c.pool_[d] = k);
          return f(h, arguments);
        };
        c.pool = function (a) {
          a = new c(a);
          c.pool_.push(a);
        };
        c.push = function (a) {
          if (a.onDispose) a.onDispose();
          c.pool_.push(a);
        };
        c.prototype.remove = function () {
          c.push(this);
        };
        c.prototype.onInit = c.prototype.onInit || function () {};
        c.prototype.onDispose = c.prototype.onDispose || function () {};
      },
      empty() {
        for (let c = 0; c < a.length; c++) a[c].pool_ = [];
      }
    };
  }();
  b.shared.pools.PoolType = function () {};
  b.shared.pools.PoolType.onInit = function () {};
  b.shared.pools.PoolType.onDispose = function () {};
  b.shared.pools.PoolType.remove = function () {};
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
  b.shared.Scoreboard = l;
  function m(a, c) {
    a = g ? g[a] : void 0;
    return +a === a ? a : c;
  }
  function l(a, c, d) {
    this.game = a;
    this.initialCountdown_ = m("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
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
    const c = Math.ceil(this.countdown);
    c !== this.lastSeconds && (this.lastSeconds = c, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = m("COUNTDOWN_FLASH", 10), a = c <= a && 0 !== c, this.losing !== a && (this.losing = a, 0 < c && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
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
  b.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = n(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...c) {
      a = n(a).concat(c).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  b.Chimney = function (a) {
    this.game = a;
    this.elem = $('\n    <div class="train hidden">\n      <div class="flag">\n        <div class="flag-stick"></div>\n        <div class="flag-score"></div>\n      </div>\n      <div class="handle"></div>\n      <div class="hand"></div>\n      <div class="chimney"></div>\n      <div class="wheel1"></div>\n      <div class="wheel2"></div>\n    </div>\n  ');
    a.chimneysElem.append(this.elem);
    this.dead = !1;
    this.x = this.hits = 0;
    this.isLarge = !1;
    this.hitTimer = 0;
  };
  b.shared.pools.mixin(b.Chimney);
  b.Chimney.prototype.onInit = function () {
    this.elem.removeClass("hidden hit");
    this.dead = !1;
    this.hits = 0;
    this.x = b.Constants.CHIMNEY_START_X;
    .5 > Math.random() && (this.elem.addClass("large"), this.isLarge = !0);
    this.draw();
  };
  b.Chimney.prototype.remove = function () {
    b.Chimney.push(this);
  };
  b.Chimney.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  b.Chimney.prototype.draw = function () {
    this.elem.css("transform", "translateX(" + this.x + "px) translateZ(0)");
  };
  b.Chimney.prototype.onFrame = function (a) {
    this.x -= this.game.chimneySpeed * a;
    this.x > b.Constants.CHIMNEY_END_X ? this.draw() : this.remove();
  };
  b.Chimney.prototype.hit = function () {
    this.hits++;
    var a = b.Chimney.calculateScore_(this.game.level, this.isLarge, this.hits);
    this.elem.find(".flag-score").text("" + a);
    this.elem.addClass("hit");
    this.game.hitChimney(a);
    this.hitTimer && window.clearTimeout(this.hitTimer);
    this.hitTimer = window.setTimeout(function () {
      this.elem.removeClass("hit");
    }.bind(this), b.Constants.CHIMNEY_FLAG_VISIBLE);
  };
  b.Chimney.calculateScore_ = function (a, c, d) {
    c = b.Constants["SCORE_CHIMNEY_" + (c ? "LARGE" : "SMALL")];
    return (c + a * c) * Math.pow(2, d);
  };
  b.Chimney.prototype.getHitbox = function () {
    return this.isLarge ? {
      center: b.Constants.CHIMNEY_WIDTH_LARGE / 2,
      y: b.Constants.CHIMNEY_Y_LARGE,
      x: this.x + 25
    } : {
      center: b.Constants.CHIMNEY_WIDTH_SMALL / 2,
      y: b.Constants.CHIMNEY_Y_SMALL,
      x: this.x + 35
    };
  };
  b.Controls = function (a) {
    this.game = a;
    this.player = this.game.player;
    this.tutorial = this.game.tutorial;
    this.stage = this.game.elem.find(".stage");
    this.currentTouchId = null;
    this.onTouchStart_ = this.onTouchStart_.bind(this);
    this.onTouchMove_ = this.onTouchMove_.bind(this);
    this.onTouchEnd_ = this.onTouchEnd_.bind(this);
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onKeyUp_ = this.onKeyUp_.bind(this);
    this.game.elem.on("touchstart.presentdrop", this.onTouchStart_);
    this.game.elem.on("touchmove.presentdrop", this.onTouchMove_);
    this.game.elem.on("touchend.presentdrop", this.onTouchEnd_);
    $(window).on("keydown.presentdrop", this.onKeyDown_);
    $(window).on("keyup.presentdrop", this.onKeyUp_);
  };
  b.Controls.prototype.isRightDown_ = !1;
  b.Controls.prototype.isLeftDown_ = !1;
  b.Controls.prototype.isSpaceDown_ = !1;
  b.Controls.prototype.onKeyDown_ = function (a) {
    37 === a.keyCode ? this.isLeftDown_ = !0 : 39 === a.keyCode ? this.isRightDown_ = !0 : 32 !== a.keyCode && 40 !== a.keyCode || this.isSpaceDown_ || (this.spacePressed || (this.tutorial.off("keys-space"), this.tutorial.off("spacenav-space"), this.spacePressed = !0), this.isSpaceDown_ = !0, this.game.isPlaying && this.player.dropPresent());
    this.arrowPressed || 37 !== a.keyCode && 39 !== a.keyCode || (this.tutorial.off("keys-leftright"), this.tutorial.off("spacenav-leftright"), this.arrowPressed = !0);
    this.updatePlayerFromKeyboard();
  };
  b.Controls.prototype.onKeyUp_ = function (a) {
    if (37 === a.keyCode) this.isLeftDown_ = !1;else if (39 === a.keyCode) this.isRightDown_ = !1;else if (32 === a.keyCode || 40 === a.keyCode) this.isSpaceDown_ = !1;
    this.updatePlayerFromKeyboard();
  };
  b.Controls.prototype.updatePlayerFromKeyboard = function () {
    this.isRightDown_ ? this.player.keyboardGoRight() : this.isLeftDown_ ? this.player.keyboardGoLeft() : this.player.keyboardStop();
  };
  b.Controls.prototype.touchStartedInGUI = null;
  b.Controls.prototype.onTouchStart_ = function (a) {
    if (this.game.isPlaying && (this.touchStartedInGUI = !!$(a.target).closest(".gui").length, null === this.currentTouchId && !this.touchStartedInGUI)) {
      var c = this.stage[0].getBoundingClientRect(),
        d = a.originalEvent.changedTouches[0],
        e = d.pageX / this.game.scale;
      c = c.left / this.game.scale;
      this.currentTouchId = d.identifier;
      this.player.setX(e - c);
      a.preventDefault();
      this.touchStarted || (this.tutorial.off("touch-leftright"), this.touchStarted = !0);
    }
  };
  b.Controls.prototype.onTouchMove_ = function (a) {
    if (this.game.isPlaying) {
      var c = this.getCurrentTouch_(a);
      if (c) {
        var d = this.stage[0].getBoundingClientRect();
        this.player.setX(c.pageX / this.game.scale - d.left / this.game.scale);
      }
      a.preventDefault();
    }
  };
  b.Controls.prototype.onTouchEnd_ = function (a) {
    this.getCurrentTouch_(a) && (this.currentTouchId = null, this.player.touchEnded());
  };
  b.Controls.prototype.getCurrentTouch_ = function (a) {
    if (null === this.currentTouchId) return null;
    for (var c = 0, d; d = a.originalEvent.changedTouches[c]; c++) if (d.identifier == this.currentTouchId) return d;
    return null;
  };
  b.Levels = function (a) {
    this.game = a;
    this.bgElem = this.game.elem.find(".level-bg");
    this.fgElem = this.game.elem.find(".level-fg");
    this.lastFgElem = this.fgElem.children().eq(0);
    this.nextFgElem = this.fgElem.children().eq(1);
    this.fgLoopCounter = this.fgRight = this.bgRightTarget = this.bgRight = 0;
  };
  b.Levels.prototype.reset = function () {
    this.fgElem.css("right", "0px").children().attr("class", "level-fg0");
    this.bgElem.css("right", "0px");
    this.fgLoopCounter = this.fgRight = this.bgRight = this.bgRightTarget = 0;
  };
  b.Levels.prototype.onFrame = function (a) {
    var c = !1,
      d = this.fgRight + b.Levels.FG_TRANSITION_SPEED * a;
    d > b.Constants.LEVEL_FG_WIDTH && (this.lastFgElem.attr("class", this.nextFgElem.attr("class")), this.fgLoopCounter = (this.fgLoopCounter + 1) % b.Levels.FG_ITERATIONS_PER_LEVEL, c = 0 === this.fgLoopCounter) && (this.nextFgElem.attr("class", "level-fg" + this.game.level % b.Constants.LEVEL_COUNT), this.bgRightTarget = this.bgRight + b.Constants.LEVEL_BG_WIDTH);
    this.fgRight = d % b.Constants.LEVEL_FG_WIDTH;
    this.fgElem.css("right", -this.fgRight + "px");
    this.bgRight !== this.bgRightTarget && (this.bgRight += b.Levels.BG_TRANSITION_SPEED * a, this.bgRight > this.bgRightTarget && (this.bgRight = this.bgRightTarget = (this.game.level - 1) % b.Constants.LEVEL_COUNT ? this.bgRightTarget : 0), this.bgElem.css("right", -this.bgRight + "px"));
    c && this.game.nextLevel();
  };
  b.Levels.FG_ITERATIONS_PER_LEVEL = Math.round(b.Constants.LEVEL_DURATION / b.Constants.LEVEL_FG_TRANSITION);
  b.Levels.FG_TRANSITION_SPEED = b.Constants.LEVEL_FG_WIDTH / b.Constants.LEVEL_FG_TRANSITION;
  b.Levels.BG_TRANSITION_SPEED = b.Constants.LEVEL_BG_WIDTH / b.Constants.LEVEL_BG_TRANSITION;
  b.Player = function (a, c) {
    this.game = a;
    this.elem = $(c);
    this.ropeElvesElem = a.elem.find(".elf-rope");
    this.x = this.targetX = 0;
    this.lastElfPull = null;
    this.dropWhenStopped = !1;
    this.hasPresent = !0;
    this.soundFrameCounter = 0;
    this.isMoving = !1;
  };
  b.Player.prototype.reset = function () {
    this.targetX = this.x = b.Constants.PLAYER_START_X;
    this.lastElfPull = null;
    this.dropWhenStopped = !1;
    this.hasPresent = !0;
    this.soundFrameCounter = 0;
    this.isMoving = !1;
    this.elem.css("left", this.x - b.Constants.PLAYER_CENTER + "px");
  };
  b.Player.prototype.onFrame = function (a) {
    this.isMoving !== (this.targetX !== this.x) && (this.isMoving = !this.isMoving, window.santaApp.fire("sound-trigger", this.isMoving ? "pd_pull_start" : "pd_pull_stop"));
    this.isMoving && (a *= b.Constants.PLAYER_MAX_SPEED, a > Math.abs(this.targetX - this.x) ? (this.x = this.targetX, this.dropWhenStopped && (this.dropWhenStopped = !1, this.dropPresent())) : this.x += a * (this.targetX > this.x ? 1 : -1), this.elem.css("left", this.x - b.Constants.PLAYER_CENTER + "px"), 0 === this.soundFrameCounter && window.santaApp.fire("sound-trigger", {
      name: "pd_sled_position",
      args: [(this.x - b.Constants.PLAYER_MIN_X) / (b.Constants.PLAYER_MAX_X - b.Constants.PLAYER_MIN_X) * 2 - 1]
    }), this.soundFrameCounter = (this.soundFrameCounter + 1) % 3);
  };
  b.Player.prototype.setX = function (a) {
    a < b.Constants.PLAYER_MIN_X ? (a = b.Constants.PLAYER_MIN_X, window.santaApp.fire("sound-trigger", "pd_player_crash")) : a > b.Constants.PLAYER_MAX_X && (a = b.Constants.PLAYER_MAX_X, window.santaApp.fire("sound-trigger", "pd_player_crash"));
    this.targetX = a;
    a !== this.x && a > this.x !== this.lastElfPull && (this.lastElfPull = a > this.x, this.ropeElvesElem.toggleClass("back", this.lastElfPull));
  };
  b.Player.prototype.keyboardGoRight = function () {
    this.setX(b.Constants.PLAYER_MAX_X);
  };
  b.Player.prototype.keyboardGoLeft = function () {
    this.setX(b.Constants.PLAYER_MIN_X);
  };
  b.Player.prototype.keyboardStop = function () {
    this.setX(this.x);
  };
  b.Player.prototype.touchEnded = function () {
    this.x === this.targetX ? this.dropPresent() : this.dropWhenStopped = !0;
  };
  b.Player.prototype.dropPresent = function () {
    this.hasPresent && (this.game.createPresent(this.x), this.hasPresent = !1, b.shared.utils.animWithClass(this.elem.find(".elf"), "newpresent"), window.santaApp.fire("sound-trigger", "pd_item_drop"), window.setTimeout(function () {
      this.hasPresent = !0;
    }.bind(this), 1E3 * b.Constants.TIME_BETWEEN_PRESENTS));
  };
  b.Present = function (a) {
    this.game = a;
    this.elem = $('<div class="present hidden" />');
    a.presentsElem.append(this.elem);
    this.dead = !1;
    this.velocity = this.y = this.x = 0;
  };
  b.shared.pools.mixin(b.Present);
  b.Present.prototype.onInit = function (a) {
    this.elem.removeClass("hidden");
    this.dead = !1;
    this.x = a - b.Present.PRESENT_CENTER;
    this.y = b.Constants.PRESENT_START_Y;
    this.velocity = b.Constants.PRESENT_INITIAL_VELOCITY;
    this.elem.css("left", this.x + "px");
    this.draw();
  };
  b.Present.prototype.remove = function () {
    b.Present.push(this);
  };
  b.Present.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  b.Present.prototype.draw = function () {
    this.elem.css("top", this.y + "px");
  };
  b.Present.prototype.onFrame = function (a) {
    var c = this.y;
    this.y < b.Constants.PRESENT_END_Y ? (this.velocity += b.Constants.PRESENT_GRAVITY * a, this.y += this.velocity * a, this.y > b.Constants.PRESENT_END_Y && (this.y = b.Constants.PRESENT_END_Y)) : (this.remove(), window.santaApp.fire("sound-trigger", "pd_item_miss"));
    this.game.forEachActiveChimney(function (a) {
      var d = a.getHitbox();
      if (!(d.y <= c || d.y >= this.y)) {
        var f = Math.abs(this.x - d.x - d.center);
        f <= d.center - b.Present.PRESENT_CENTER ? (this.remove(), a.hit()) : f < d.center + b.Present.PRESENT_CENTER && (this.remove(), a.hit());
      }
    }, this);
    this.draw();
  };
  b.Present.prototype.drop = function (a) {
    this.elem.addClass("drop");
    this.elem.css({
      left: a - b.Present.PRESENT_CENTER + "px"
    });
    this.elem.appendTo(this.elem.closest(".stage").find(".presents"));
  };
  b.Present.PRESENT_CENTER = b.Constants.PRESENT_WIDTH / 2;
  b.Game = function (a) {
    this.elem = $(a);
    this.player = new b.Player(this, this.elem.find(".player"));
    this.scoreboard = new l(this, this.elem.find(".board"), b.Constants.TOTAL_LEVELS);
    this.gameoverDialog = new b.shared.Gameover(this, this.elem.find(".gameover"));
    this.tutorial = new b.shared.Tutorial("touch-leftright keys-space keys-leftright spacenav-space spacenav-leftright");
    this.controls = new b.Controls(this);
    this.levels = new b.Levels(this);
    this.entities = [];
    this.hidden = this.paused = this.isPlaying = !1;
    this.scale = 1;
    this.chimneysElem = this.elem.find(".chimneys");
    this.presentsElem = this.elem.find(".presents");
    this.gameStartTime = Date.now();
    this.requestId = this.nextChimney = this.level = this.lastFrame = this.chimneySpeed = 0;
    this.onFrame_ = this.onFrame_.bind(this);
    this.watchSceneSize_();
    this.preloadPools_();
  };
  b.Game.prototype.preloadPools_ = function () {
    for (var a = 0; 7 > a; a++) b.Chimney.pool(this);
    b.Present.pool(this);
    b.Present.pool(this);
  };
  b.Game.prototype.start = function () {
    this.restart();
    this.tutorial.start();
  };
  b.Game.prototype.restart = function () {
    this.entities.forEach(function (a) {
      a.remove();
    });
    this.entities = [];
    this.level = (+(location.search.match(/[?&]level=(\d+)/) || [])[1] || 1) - 1;
    this.scoreboard.reset();
    this.scoreboard.setLevel(this.level);
    this.chimneySpeed = b.Constants.CHIMNEY_START_SPEED;
    this.nextChimney = 0;
    this.player.reset();
    this.levels.reset();
    this.paused = !1;
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("sound-trigger", "pd_start_game");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "presentdrop"
    });
    this.unfreezeGame();
  };
  b.Game.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var a = Date.now() / 1E3,
        c = a - this.lastFrame;
      this.lastFrame = a;
      this.player.onFrame(c);
      this.levels.onFrame(c);
      this.scoreboard.onFrame(c);
      this.updateChimneys_(c);
      a = [];
      for (var d = 0, e; e = this.entities[d]; d++) e.onFrame(c), e.dead && a.push(d);
      a.forEach(function (a, c) {
        this.entities.splice(a - c, 1);
      }, this);
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  b.Game.prototype.setScale = function (a) {
    this.scale = a;
    var c = this.elem.find(".view"),
      d = this.elem.find(".bg");
    1 > a ? (c.css("transform", "scale(" + a + ")"), d.css("transform", "scaleY(" + a + ")")) : c.removeAttr("style");
  };
  b.Game.prototype.updateChimneys_ = function (a) {
    this.nextChimney -= a;
    if (!(0 < this.nextChimney)) {
      a = b.Chimney.pop(this);
      this.entities.push(a);
      a = Math.pow(b.Constants.CHIMNEY_SPAWN_MULTIPLY_EACH_LEVEL, this.level);
      var c = b.Constants.CHIMNEY_SPAWN_VARIANCE * a;
      this.nextChimney = b.Constants.CHIMNEY_SPAWN_BASE + b.Constants.CHIMNEY_SPAWN_INTERVAL * a - c / 2 + Math.random() * c;
    }
  };
  b.Game.prototype.createPresent = function (a) {
    a = b.Present.pop(this, a);
    this.entities.push(a);
  };
  b.Game.prototype.hitChimney = function (a) {
    this.scoreboard.addScore(a);
    this.scoreboard.addTime(1);
    window.santaApp.fire("sound-trigger", "pd_player_present_pickup");
  };
  b.Game.prototype.forEachActiveChimney = function (a, c) {
    for (var d = 0, e; e = this.entities[d]; d++) e instanceof b.Chimney && a.call(c, e);
  };
  b.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  b.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen").focus(), this.isPlaying = !0, this.lastFrame = Date.now() / 1E3, this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  b.Game.prototype.nextLevel = function () {
    this.level === b.Constants.TOTAL_LEVELS - 1 ? this.gameover() : (this.level++, this.scoreboard.setLevel(this.level), this.chimneySpeed += b.Constants.CHIMNEY_SPEED_PER_LEVEL, window.santaApp.fire("sound-trigger", "pd_player_level_up"));
  };
  b.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverDialog.show();
    window.santaApp.fire("sound-trigger", "pd_game_over");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "presentdrop",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: Date.now() - this.gameStartTime
    });
  };
  b.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  b.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  b.Game.prototype.watchSceneSize_ = function () {
    var a = $(window),
      c = function () {
        var c = a.width(),
          e = a.height() - window.santaApp.headerSize;
        c = 890 > c ? c / 890 : 1;
        c = 660 > e ? Math.min(e / 640, c) : c;
        this.setScale(c);
      }.bind(this);
    c();
    $(window).on("resize.presentdrop", c);
  };
  b.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "presentdrop",
      timePlayed: Date.now() - this.gameStartTime,
      level: this.level
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".presentdrop");
    $(document).off(".presentdrop");
    this.elem.off(".presentdrop");
    this.tutorial.dispose();
    b.Chimney.pool_ = [];
    b.Present.pool_ = [];
  };
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('pd_load_sounds', 30);
sceneApi.preload.images('img/chimneys.png', 'img/environment.png', 'img/level-bg.png', 'img/level-fg.png', 'img/logo.svg', 'img/mountains.png', 'img/player-rails.png', 'img/player.png');
const game = new Game(document.getElementById('module-presentdrop'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  orientation: 'landscape',
  sounds: []
});
sceneApi.ready(async () => {
  game.start();
});