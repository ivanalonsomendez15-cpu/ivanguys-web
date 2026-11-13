import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    Background: function (a) {
      this.currentEl = a.eq(0);
      this.nextEl = a.eq(1);
      this.transitionLevel = 0;
      this.transitionProgress = null;
      this.reset();
    }
  };
  b.Background.BACKGROUND_HEIGHT = 150;
  b.Background.TRANSITION_DURATION = 5;
  b.Background.prototype.reset = function () {
    this.transitionLevel = 0;
    this.nextEl.attr("class", "background background--0");
    this.endTransition_();
  };
  b.Background.prototype.transition = function () {
    this.transitionProgress = 0;
  };
  b.Background.prototype.endTransition_ = function () {
    this.transitionProgress = null;
    this.transitionLevel++;
    var a = this.currentEl;
    this.currentEl = this.nextEl;
    this.nextEl = a;
    this.currentEl.css({
      transform: "translateZ(0)",
      zIndex: 0
    });
    this.nextEl.css({
      transform: "translate3d(0, -100%, 0)",
      zIndex: 1
    });
    this.nextEl.attr("class", "background background--" + this.transitionLevel);
  };
  b.Background.prototype.onFrame = function (a) {
    null != this.transitionProgress && (this.transitionProgress += a / b.Background.TRANSITION_DURATION, 1 < this.transitionProgress ? this.endTransition_() : this.nextEl.css("transform", "translate3d(0, " + (-100 + 100 * this.transitionProgress) + "%, 0)"));
  };
  b.shared = {};
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
            g = c.pool_[d],
            k = c.pool_.pop();
          k && g !== k && (c.pool_[d] = k);
          return f(g, arguments);
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
  b.Cloud = function (a) {
    this.game = a;
    this.elem = $('<div class="cloud hidden"></div>');
    this.dead = !1;
    this.size = 1;
    this.speed = 120;
    this.y = -150;
    this.game.cloudsElem.append(this.elem);
  };
  b.shared.pools.mixin(b.Cloud);
  b.Cloud.prototype.onInit = function () {
    this.elem.removeClass("hidden");
    this.dead = !1;
    var a = Math.floor(3 * Math.random());
    this.size = 1 - .25 * a;
    this.speed = 120 - 30 * a;
    this.y = -150;
    this.elem.css("left", Math.random() * this.game.sceneSize.width);
    this.elem.addClass("cloud--" + a);
  };
  b.Cloud.prototype.onFrame = function (a) {
    this.y += this.speed * a;
    this.y < this.game.sceneSize.height + 150 ? this.elem.css("transform", "translate3d(0," + this.y + "px,0) scale(" + this.size + ")") : this.remove();
  };
  b.Cloud.prototype.onDispose = function () {
    this.elem.css("transform", "");
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  b.Constants = {
    INITIAL_COUNTDOWN: 60,
    TOTAL_LEVELS: 10,
    ITEM_SPAWN_INTERVAL: 2,
    ITEM_SPAWN_VARIANCE: 2,
    ITEM_SPAWN_MULTIPLY_EACH_LEVEL: .95,
    ITEM_SPEED_MULTIPLY_EACH_LEVEL: 1.15,
    CLOCK_SPAWN_INTERVAL: 10,
    CLOCK_SPAWN_VARIANCE: 2,
    CLOCK_SPAWN_MULTIPLY_EACH_LEVEL: .95,
    CLOCK_SPEED_MULTIPLY_EACH_LEVEL: 1.15,
    ITEM_SPEED_NORMAL: 75,
    ITEM_SPEED_FAST: 150,
    ITEM_SPEED_FASTER: 225,
    ITEM_SCORE_NORMAL: 50,
    ITEM_SCORE_FAST: 75,
    ITEM_TIME_NORMAL: 5,
    ITEM_TIME_FAST: 10,
    DANGER_LEVEL_START: 2,
    DANGER_SPEED_SCALE: 1.5,
    DANGER_SPAWN_INTERVAL: 10,
    DANGER_SPAWN_VARIANCE: 3,
    DANGER_SCORE_RETRACTION_FAST: -10,
    DANGER_SCORE_RETRACTION_SLOW: -5,
    ITEM_MIN_DISTANCE: 75,
    COUNTDOWN_TRACK_LENGTH: 60,
    COUNTDOWN_TRACK_MAX_X: 150,
    COUNTDOWN_FLASH: 10,
    PLAYER_MAX_SPEED: 900,
    PLAYER_ACCELERATION: 3,
    PLAYER_MAX_ROTATION: 15,
    PLAYER_MAX_FIRESCALE: 1.25,
    PLAYER_HIT_DURATION: 1,
    PLAYER_CENTER: 150,
    PLAYER_MIN_X: 225,
    PLAYER_MAX_X: 680,
    PLAYER_MIN_Y: 100,
    PLAYER_MAX_Y: 500,
    TOUCH_SENSITIVITY: 70,
    SCENE_WIDTH: 980,
    SCENE_HEIGHT: 600,
    CLOUD_SPAWN_INTERVAL: 1.7,
    CLOUD_SPAWN_VARIANCE: 2.5,
    LEVEL_DURATION: 21,
    GOAL_DURATION: 3.5,
    TUTORIAL_LEFTRIGHT_TIMEOUT: 5E3,
    TUTORIAL_UPDOWN_TIMEOUT: 3E3,
    ITEM_TYPES: [{
      css: "item-present item-present--1",
      weight: 2.5,
      fast: !1
    }, {
      css: "item-present item-present--2",
      weight: 2.5,
      fast: !1
    }, {
      css: "item-present item-present--3",
      weight: 1.5,
      fast: !0
    }, {
      css: "item-present item-present--4",
      weight: 2.5,
      fast: !1
    }, {
      css: "item-ball item-ball--1",
      weight: 1,
      fast: !0
    }, {
      css: "item-ball item-ball--2",
      weight: 1,
      fast: !0
    }, {
      css: "item-ball item-ball--3",
      weight: 1,
      fast: !0
    }, {
      css: "item-ball item-ball--4",
      weight: 1,
      fast: !0
    }, {
      css: "item-candy item-candy--1",
      weight: 1,
      fast: !0
    }, {
      css: "item-candy item-candy--2",
      weight: 1,
      fast: !0
    }, {
      css: "item-candy item-candy--3",
      weight: 1,
      fast: !0
    }, {
      css: "item-candy item-candy--4",
      weight: 1,
      fast: !0
    }],
    CLOCK_TYPES: [{
      css: "item-clock item-clock--1",
      weight: 2,
      fast: !1
    }, {
      css: "item-clock item-clock--2",
      weight: 1,
      fast: !0
    }],
    DANGER_TYPES: [{
      css: "item-danger item-danger--1",
      weight: 1,
      faster: !0
    }, {
      css: "item-danger item-danger--2",
      weight: 2,
      fast: !0
    }, {
      css: "item-danger item-danger--3",
      weight: 1.5,
      fast: !1
    }, {
      css: "item-danger item-danger--4",
      weight: 1.5,
      fast: !1
    }]
  };
  b.Constants.DANGER_WEIGHT = b.Constants.DANGER_TYPES.reduce(function (a, c) {
    return a + c.weight;
  }, 0);
  b.Constants.ITEM_WEIGHT = b.Constants.ITEM_TYPES.reduce(function (a, c) {
    return a + c.weight;
  }, 0);
  b.Constants.CLOCK_WEIGHT = b.Constants.CLOCK_TYPES.reduce(function (a, c) {
    return a + c.weight;
  }, 0);
  var h = b.Constants;
  b.Controls = function (a) {
    this.game = a;
    this.player = this.game.player;
    this.tutorial = this.game.tutorial;
    this.keys = {};
    this.currentTouchId = null;
    this.touchStart = {
      x: null,
      y: null
    };
    this.touchCurrent = {
      x: null,
      y: null
    };
    this.touchpadElem = a.elem.find(".touchpad");
    this.touchpadNubElem = this.touchpadElem.find(".touchpad-nub");
  };
  b.Controls.prototype.reset = function () {};
  b.Controls.prototype.start = function () {
    $(window).on("keydown.jetpack", this.onKeydown.bind(this)).on("keyup.jetpack", this.onKeyup.bind(this));
    $(this.game.elem).on("touchstart.jetpack", this.onTouchstart.bind(this)).on("touchmove.jetpack", this.onTouchmove.bind(this)).on("touchend.jetpack", this.onTouchend.bind(this));
  };
  b.Controls.prototype.onFrame = function () {
    var a = 0,
      c = 0;
    null !== this.touchCurrent.x ? (a = (this.touchCurrent.x - this.touchStart.x) / b.Constants.TOUCH_SENSITIVITY, c = (this.touchCurrent.y - this.touchStart.y) / b.Constants.TOUCH_SENSITIVITY) : (this.keys.left && a--, this.keys.right && a++, this.keys.up && c--, this.keys.down && c++);
    var d = a * a + c * c;
    1 < d && (d = Math.sqrt(d), a /= d, c /= d);
    null !== this.touchCurrent.x && this.touchpadNubElem.css("transform", "translate3d(" + a * b.Constants.TOUCH_SENSITIVITY + "px," + c * b.Constants.TOUCH_SENSITIVITY + "px,0)");
    this.player.inputVector.x = a;
    this.player.inputVector.y = c;
  };
  b.Controls.prototype.onKeydown = function (a) {
    a.keyCode in b.Controls.KEY_CODES_ && (this.keys[b.Controls.KEY_CODES_[a.keyCode]] = !0);
    this.leftrightPressed || !this.keys.left && !this.keys.right || (this.tutorial.off("keys-leftright"), this.tutorial.off("spacenav-leftright"), this.leftrightPressed = !0);
    this.updownPressed || !this.keys.up && !this.keys.down || (this.tutorial.off("keys-updown"), this.tutorial.off("spacenav-updown"), this.updownPressed = !0);
  };
  b.Controls.prototype.onKeyup = function (a) {
    a.keyCode in b.Controls.KEY_CODES_ && (this.keys[b.Controls.KEY_CODES_[a.keyCode]] = !1);
  };
  b.Controls.prototype.touchStartedInGUI = !1;
  b.Controls.prototype.onTouchstart = function (a) {
    this.touchStartedInGUI = !!$(a.target).closest(".gui").length;
    null !== this.currentTouchId || this.touchStartedInGUI || (this.showTouchWidget(a.originalEvent.changedTouches[0]), a.preventDefault(), this.touchStarted || (this.tutorial.off("touch-updown"), this.touchStarted = !0));
  };
  b.Controls.prototype.onTouchmove = function (a) {
    var c = this.getCurrentTouch(a.originalEvent);
    c && (this.touchCurrent.x = c.pageX, this.touchCurrent.y = c.pageY);
    a.preventDefault();
  };
  b.Controls.prototype.onTouchend = function (a) {
    this.getCurrentTouch(a.originalEvent) && this.hideTouchWidget();
  };
  b.Controls.prototype.getCurrentTouch = function (a) {
    if (null !== this.currentTouchId) {
      for (var c = 0, d; d = a.changedTouches[c]; c++) if (d.identifier === this.currentTouchId) return d;
      for (c = 0; d = a.targetTouches[c]; c++) if (d.identifier === this.currentTouchId) return;
      this.hideTouchWidget();
    }
  };
  b.Controls.prototype.showTouchWidget = function (a) {
    this.currentTouchId = a.identifier;
    this.touchStart.x = a.pageX;
    this.touchStart.y = a.pageY;
    this.touchpadElem.css({
      left: this.touchStart.x,
      top: this.touchStart.y
    }).removeClass("hidden");
    this.touchpadNubElem.css("transform", "");
  };
  b.Controls.prototype.hideTouchWidget = function () {
    this.currentTouchId = null;
    this.touchCurrent.x = null;
    this.touchCurrent.y = null;
    this.touchpadElem.addClass("hidden");
    this.touchpadNubElem.css("transform", "");
  };
  b.Controls.KEY_CODES_ = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  b.Item = function (a) {
    this.game = a;
    this.elem = $('<div class="item hidden">');
    this.subElem = $("<div>").appendTo(this.elem);
    this.isHit = this.dead = !1;
    this.flowDirection = null;
    this.types = b.Constants.ITEM_TYPES;
    this.type = null;
    this.y = this.x = this.speed = 0;
    this.game.itemsElem.append(this.elem);
  };
  b.Item.prototype.reset = function () {
    this.elem.removeClass("hidden");
    this.subElem[0].textContent = "";
    this.isHit = this.dead = !1;
    this.flowDirection = null;
    this.subElem.attr("class", this.type.css);
    this.speed = this.type.faster ? b.Constants.ITEM_SPEED_FASTER : this.type.fast ? b.Constants.ITEM_SPEED_FAST : b.Constants.ITEM_SPEED_NORMAL;
    this.speed *= Math.pow(b.Constants.ITEM_SPEED_MULTIPLY_EACH_LEVEL, this.game.level);
    this.x = Math.random() * b.Constants.SCENE_WIDTH;
    this.y = -150;
    this.elem.css("left", this.x + "px");
    this.sound = -1 !== this.type.css.indexOf("present") ? "jp_pickup_parachute_item" : "jp_pickup_item";
  };
  b.Item.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  b.Item.prototype.onFrame = function (a) {
    var c = 0;
    this.y += this.speed * a;
    this.flowDirection && (c = this.x += b.Item.flowDirections_[this.flowDirection] * this.speed * a);
    this.y < this.game.sceneSize.height + 150 && -200 < this.x && this.x < this.game.sceneSize.width + 200 ? this.elem.css("transform", "translate3d(" + c + "px, " + this.y + "px, 0)") : this.remove();
  };
  b.Item.prototype.weightedRandomType = function (a) {
    a = Math.random() * (a || b.Constants.ITEM_WEIGHT);
    for (var c = 0, d; (d = this.types[c]) && !(a -= d.weight, 0 > a); c++);
    return d;
  };
  b.Item.prototype.triggerHit = function (a, c, d) {
    this.isHit = !0;
    this.game.caughtItem(a, c);
    this.subElem.attr("class", "item-score")[0].textContent = d;
    window.santaApp.fire("sound-trigger", this.sound);
  };
  b.Item.flowDirections_ = {
    left: -1,
    right: 1
  };
  b.DangerItem = function (a) {
    b.Item.call(this, a);
    this.elem.addClass("item--danger");
    this.types = b.Constants.DANGER_TYPES;
  };
  b.DangerItem.prototype = Object.create(b.Item.prototype);
  b.shared.pools.mixin(b.DangerItem);
  b.DangerItem.prototype.onInit = function () {
    this.type = this.weightedRandomType(b.Constants.DANGER_WEIGHT);
    var a = parseInt(this.type.css[this.type.css.length - 1]);
    this.reset();
    this.speed *= b.Constants.DANGER_SPEED_SCALE;
    3 === a ? (this.x = b.Constants.SCENE_WIDTH + 150, this.y = b.DangerItem.randomNumber_(0, .2) * b.Constants.SCENE_HEIGHT, this.flowDirection = "left", this.elem.css("left", "auto")) : 4 === a && (this.x = -150, this.y = b.DangerItem.randomNumber_(0, .2) * b.Constants.SCENE_HEIGHT, this.elem.css("left", 0), this.flowDirection = "right");
    this.sound = "jetpack_hit";
  };
  b.DangerItem.prototype.hit = function () {
    var a = -~~(this.game.scoreboard.score * b.DangerItem.randomNumber_(0, .2)),
      c = -~~(this.game.scoreboard.lastSeconds * b.DangerItem.randomNumber_(0, .2));
    this.triggerHit(a, c, a);
  };
  b.DangerItem.randomNumber_ = function (a, c) {
    return Math.random() * (c - a) + a;
  };
  b.Goal = function (a, c) {
    this.elem = a;
    this.game = c;
    this.reset();
  };
  b.Goal.PADDING_ = 10;
  b.Goal.prototype.reset = function () {
    this.elem.attr("style", "").addClass("goal--hidden");
  };
  b.Goal.prototype.transition = function () {
    var a = this.game.sceneSize.height - this.elem.height() - this.game.sceneSize.height * b.Goal.PADDING_ / 100;
    this.elem.removeClass("goal--hidden").css("transform", "translate3d(0, " + a + "px, 0)");
    window.setTimeout(function () {
      this.game.gameover();
    }.bind(this), 1E3 * b.Constants.GOAL_DURATION);
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
  b.Player = function (a, c) {
    const d = b.shared.utils.SmartValue;
    this.game = a;
    this.elem = $(c).css({
      left: "0",
      top: "0"
    });
    this.fireElem = this.elem.find(".fire");
    this.inputVector = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: new d(),
      y: new d()
    };
    this.soundPosition = new d();
    this.soundVelocity = new d();
    this.soundOutOfScreen = new d();
    this.reset();
  };
  b.Player.prototype.reset = function () {
    this.x = b.Constants.SCENE_WIDTH / 2;
    this.y = .75 * this.game.sceneSize.height;
    this.velocity.x.value = 0;
    this.shake = this.velocity.y.value = 0;
    this.isHit = !1;
    this.hitDuration = 0;
    this.isGoingUp = !1;
    this.elem.removeClass("player--hit");
    this.elem.removeClass("player--up");
    this.soundFrameCounter = 0;
    this.soundPosition.value = null;
    this.soundVelocity.value = null;
    this.soundOutOfScreen.value = !1;
    this.onFrame(0);
  };
  b.Player.prototype.onFrame = function (a) {
    var c = this.inputVector.x,
      d = this.inputVector.y,
      e = this.game.sceneSize.width,
      f = !1,
      g = this.game.sceneSize.height - 80,
      l = b.Constants.SCENE_WIDTH / 2 - e / 2 + 58;
    e = l + e - 116;
    70 > this.y ? (f = !0, d = 1) : this.y > g && (f = !0, d = -1);
    this.x < l ? (f = !0, c = 1) : this.x > e && (f = !0, c = -1);
    this.isHit && (this.hitDuration += a, d = c = 0, this.hitDuration >= b.Constants.PLAYER_HIT_DURATION && (this.isHit = !1, this.hitDuration = 0, this.elem.removeClass("player--hit")));
    this.soundOutOfScreen.change(f) && window.santaApp.fire("sound-trigger", f ? "jp_out_of_screen" : "jp_back_to_screen");
    this.velocity.x.moveToTarget(c, a * b.Constants.PLAYER_ACCELERATION);
    this.velocity.y.moveToTarget(d, a * b.Constants.PLAYER_ACCELERATION);
    this.x += this.velocity.x.value * b.Constants.PLAYER_MAX_SPEED * a;
    this.y += this.velocity.y.value * b.Constants.PLAYER_MAX_SPEED * a;
    this.shake += a;
    this.x += 15 * Math.sin(3 * this.shake) * a;
    this.y += 15 * Math.sin(4 * this.shake) * a;
    a = Math.pow(b.Constants.PLAYER_MAX_FIRESCALE, -d);
    this.elem.css("transform", "translate3D(" + this.x + "px," + this.y + "px,0) rotate(" + this.velocity.x.value * b.Constants.PLAYER_MAX_ROTATION + "deg)");
    this.fireElem.css("transform", "translateZ(0) scale(" + a + ")");
    -1 !== d || this.isGoingUp ? this.isGoingUp && -1 < d && (this.isGoingUp = !1, this.elem.removeClass("player--up")) : (this.isGoingUp = !0, this.elem.addClass("player--up"));
    this.checkCollisions_();
    0 === this.soundFrameCounter && this.updateSound_();
    this.soundFrameCounter = (this.soundFrameCounter + 1) % 3;
  };
  b.Player.prototype.checkCollisions_ = function () {
    var a = this.x,
      c = this.y,
      d = this;
    this.game.forEachCollidable(function (e) {
      var f = e.x - a,
        g = e.y - c;
      f * f + g * g < b.Player.ITEM_MIN_DISTANCESQ_ && (e.hit(), e instanceof b.DangerItem && (d.elem.addClass("player--hit"), d.isHit = !0));
    });
  };
  b.Player.prototype.updateSound_ = function () {
    var a = Math.sqrt(this.velocity.x.value * this.velocity.x.value + this.velocity.y.value * this.velocity.y.value);
    this.soundVelocity.change(a) && window.santaApp.fire("sound-trigger", {
      name: "jp_player_moving",
      args: [a]
    });
    a = (this.x - b.Constants.SCENE_WIDTH / 2) / (this.game.sceneSize.width / 2);
    a *= .85;
    this.soundPosition.change(a) && window.santaApp.fire("sound-trigger", {
      name: "jp_player_position",
      args: [a]
    });
  };
  b.Player.ITEM_MIN_DISTANCESQ_ = b.Constants.ITEM_MIN_DISTANCE * b.Constants.ITEM_MIN_DISTANCE;
  b.ScoreItem = function (a) {
    b.Item.call(this, a);
  };
  b.ScoreItem.prototype = Object.create(b.Item.prototype);
  b.shared.pools.mixin(b.ScoreItem);
  b.ScoreItem.prototype.onInit = function () {
    this.type = this.weightedRandomType(b.Constants.ITEM_WEIGHT);
    this.reset();
  };
  b.ScoreItem.prototype.hit = function () {
    var a = b.ScoreItem.calculateScore_(this.game.level, this.type);
    this.triggerHit(a, 0, a);
  };
  b.ScoreItem.calculateScore_ = function (a, c) {
    return (c.fast ? b.Constants.ITEM_SCORE_FAST : b.Constants.ITEM_SCORE_NORMAL) * (a + 1);
  };
  b.TimeItem = function (a) {
    b.Item.call(this, a);
    this.types = b.Constants.CLOCK_TYPES;
  };
  b.TimeItem.prototype = Object.create(b.Item.prototype);
  b.shared.pools.mixin(b.TimeItem);
  b.TimeItem.prototype.onInit = function () {
    this.type = this.weightedRandomType(b.Constants.CLOCK_WEIGHT);
    this.reset();
    this.sound = "jetpack_clock";
  };
  b.TimeItem.prototype.hit = function () {
    var a = b.TimeItem.calculateTime_(this.game.level, this.type);
    this.triggerHit(0, a, b.TimeItem.formatTime_(a));
  };
  b.TimeItem.calculateTime_ = function (a, c) {
    return c.fast ? b.Constants.ITEM_TIME_FAST : b.Constants.ITEM_TIME_NORMAL;
  };
  b.TimeItem.formatTime_ = function (a) {
    var c = Math.floor(a / 60);
    a -= 60 * c;
    return "+ " + ("00" + c).substr(-2) + ":" + ("00" + a).substr(-2);
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
  b.shared.Scoreboard = m;
  function n(a, c) {
    a = h ? h[a] : void 0;
    return +a === a ? a : c;
  }
  function m(a, c, d) {
    this.game = a;
    this.initialCountdown_ = n("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  m.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  m.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  m.prototype.onFrame = function (a) {
    this.countdown -= a;
    const c = Math.ceil(this.countdown);
    c !== this.lastSeconds && (this.lastSeconds = c, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = n("COUNTDOWN_FLASH", 10), a = c <= a && 0 !== c, this.losing !== a && (this.losing = a, 0 < c && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  m.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  m.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  m.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  m.prototype.announce_ = function () {
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
  function p(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  b.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = p(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...c) {
      a = p(a).concat(c).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  b.Game = function (a) {
    this.elem = $(a);
    this.itemsElem = this.elem.find(".items");
    this.bgElem = this.elem.find(".bg");
    this.sceneElem = this.elem.find(".scene");
    this.cloudsElem = this.elem.find(".clouds");
    this.sceneSize = {
      width: 0,
      height: 0
    };
    this.entities = [];
    this.hidden = this.paused = this.isPlaying = !1;
    this.scale = 1;
    this.watchSceneSize_();
    this.gameStartTime = +new Date();
    this.background = new b.Background(this.elem.find(".background"));
    this.goal = new b.Goal(this.elem.find(".goal"), this);
    this.player = new b.Player(this, this.elem.find(".player"));
    this.scoreboard = new b.shared.Scoreboard(this, this.elem.find(".board"), b.Constants.TOTAL_LEVELS);
    this.gameoverView = new b.shared.Gameover(this, this.elem.find(".gameover"));
    this.tutorial = new b.shared.Tutorial("touch-updown keys-leftright keys-updown spacenav-leftright spacenav-updown");
    this.controls = new b.Controls(this);
    this.onFrame_ = this.onFrame_.bind(this);
    this.preloadPools_();
  };
  b.Game.prototype.preloadPools_ = function () {
    for (var a = 0; 12 > a; a++) b.ScoreItem.pool(this), b.DangerItem.pool(this);
    for (a = 0; 20 > a; a++) b.Cloud.pool(this);
    b.TimeItem.pool(this);
    b.TimeItem.pool(this);
  };
  b.Game.prototype.start = function () {
    this.controls.start();
    this.restart();
    this.tutorial.start();
  };
  b.Game.prototype.restart = function () {
    this.entities.forEach(function (a) {
      a.remove();
    });
    this.entities = [];
    this.bgElem.find(".sky").remove();
    this.bgElem.prepend('<div class="sky"></div>');
    this.level = 0;
    this.nextLevel = b.Constants.LEVEL_DURATION;
    this.isFinished = this.paused = !1;
    this.nextCloud = this.nextClock = this.nextDanger = this.nextItem = 0;
    this.background.reset();
    this.goal.reset();
    this.scoreboard.reset();
    this.scoreboard.setLevel(this.level);
    this.player.reset();
    this.controls.reset();
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("sound-trigger", "jp_start_game");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "jetpack"
    });
    this.unfreezeGame();
  };
  b.Game.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var a = +new Date() / 1E3,
        c = a - this.lastFrame;
      this.lastFrame = a;
      this.background.onFrame(c);
      this.controls.onFrame(c);
      this.player.onFrame(c);
      this.isFinished || (this.scoreboard.onFrame(c), this.updateItems_(c), this.updateDanger_(c), this.updateClocks_(c), this.updateClouds_(c));
      this.updateLevel_(c);
      a = 0;
      for (var d; d = this.entities[a]; a++) d.onFrame(c), d.dead && this.entities.splice(a--, 1);
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  b.Game.prototype.setScale = function (a) {
    this.scale = a;
    1 > a ? this.sceneElem.css("transform", "scale(" + a + ")") : this.sceneElem.removeAttr("style");
  };
  b.Game.prototype.updateItems_ = function (a) {
    this.nextItem -= a;
    0 < this.nextItem || (this.entities.push(b.ScoreItem.pop(this)), a = b.Constants.ITEM_SPAWN_VARIANCE * Math.pow(b.Constants.ITEM_SPAWN_MULTIPLY_EACH_LEVEL, this.level), this.nextItem = b.Constants.ITEM_SPAWN_INTERVAL * Math.pow(b.Constants.ITEM_SPAWN_MULTIPLY_EACH_LEVEL, this.level) - a / 2 + Math.random() * a);
  };
  b.Game.prototype.updateClocks_ = function (a) {
    this.nextClock -= a;
    0 < this.nextClock || (this.entities.push(b.TimeItem.pop(this)), a = b.Constants.CLOCK_SPAWN_VARIANCE * Math.pow(b.Constants.CLOCK_SPAWN_MULTIPLY_EACH_LEVEL, this.level), this.nextClock = b.Constants.CLOCK_SPAWN_INTERVAL * Math.pow(b.Constants.CLOCK_SPAWN_MULTIPLY_EACH_LEVEL, this.level) - a / 2 + Math.random() * a);
  };
  b.Game.prototype.updateDanger_ = function (a) {
    this.nextDanger -= a;
    this.level < b.Constants.DANGER_LEVEL_START || 0 < this.nextDanger || (this.entities.push(b.DangerItem.pop(this)), this.nextDanger = b.Constants.DANGER_SPAWN_INTERVAL / Math.pow(this.level ? this.level : 1, 1.2) + Math.random() * b.Constants.DANGER_SPAWN_VARIANCE);
  };
  b.Game.prototype.updateClouds_ = function (a) {
    this.nextCloud -= a;
    0 < this.nextCloud || (a = b.Cloud.pop(this), this.entities.push(a), a = b.Constants.CLOUD_SPAWN_VARIANCE, this.nextCloud = b.Constants.CLOUD_SPAWN_INTERVAL - a / 2 + Math.random() * a);
  };
  b.Game.prototype.updateLevel_ = function (a) {
    this.nextLevel -= a;
    0 < this.nextLevel || (this.level++, this.level === b.Constants.TOTAL_LEVELS ? (this.isFinished = !0, this.goal.transition()) : (this.background.transition(), this.scoreboard.setLevel(this.level), this.nextLevel = b.Constants.LEVEL_DURATION));
  };
  b.Game.prototype.forEachCollidable = function (a) {
    for (var c = 0, d; d = this.entities[c]; c++) d instanceof b.Item && !d.isHit && a(d);
  };
  b.Game.prototype.caughtItem = function (a, c) {
    this.scoreboard.addScore(a);
    this.scoreboard.addTime(c);
  };
  b.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  b.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.isPlaying = !0, this.elem.removeClass("frozen").focus(), this.lastFrame = +new Date() / 1E3, this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  b.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverView.show();
    window.santaApp.fire("sound-trigger", "jp_game_over");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "jetpack",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
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
    function a() {
      var a = window.innerWidth,
        f = window.innerHeight - window.santaApp.headerSize;
      d.setScale(980 > a ? a / 980 : 1);
      c.height = 1 / d.scale * f;
      c.width = 1 / d.scale * a;
    }
    var c = this.sceneSize,
      d = this;
    a();
    $(window).on("resize.jetpack", a);
  };
  b.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "jetpack",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".jetpack");
    $(document).off(".jetpack");
    this.elem.off(".jetpack");
    this.tutorial.dispose();
    b.Cloud.pool_ = [];
    b.Item.pool_ = [];
    b.ScoreItem.pool_ = [];
    b.DangerItem.pool_ = [];
    b.TimeItem.pool_ = [];
  };
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('jp_load_sounds');
sceneApi.preload.images('img/cloud.png', 'img/fire.png', 'img/items.png', 'img/logo.svg', 'img/player.png', 'img/touchpad.png', 'img/player-hit.svg', 'img/player-overlay.svg', 'img/clock.png', 'img/danger.png', 'img/levelclouds.svg');
const game = new Game(document.getElementById('module-jetpack'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  sound: []
});
sceneApi.ready(async () => {
  game.start();
});