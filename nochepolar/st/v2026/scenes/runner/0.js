import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    INITIAL_COUNTDOWN: 120,
    COUNTDOWN_TRACK_LENGTH: 120,
    COUNTDOWN_FLASH: 10,
    GAME_BASE_SIZE: {
      width: 1410,
      height: 670
    },
    GAME_MAX_SCALE: 1,
    GAME_BASE_SPEED: 350,
    GAME_LEVEL_SPEED: [1, 1.3, 1.6, 1.9],
    GAME_ENTITY_SPACING: 1E3,
    FINISH_LINE_BUFFER: 1500,
    REINDEER_STATE_RUNNING: 0,
    REINDEER_STATE_SLIDING: 1,
    REINDEER_STATE_JUMPING: 2,
    REINDEER_STATE_COLLISION: 3,
    REINDEER_STATE_JUMP_START: 4,
    REINDEER_COLLISION_DURATION_SEC: 2,
    REINDEER_HIT_CLOUD_DURATION_SEC: .5,
    REINDEER_HIT_CLOUD_SIZE: 120,
    REINDEER_X_POS: 450,
    REINDEER_STATES: [{
      css: "reindeer--run",
      xOffset: 95,
      yOffset: 0,
      width: 175,
      height: 170
    }, {
      css: "reindeer--slide",
      xOffset: 63,
      yOffset: 0,
      width: 200,
      height: 95
    }, {
      css: "reindeer--jump",
      xOffset: 70,
      yOffset: 30,
      width: 195,
      height: 115
    }, {
      css: "reindeer--collision",
      xOffset: 110,
      yOffset: 10,
      width: 120,
      height: 165
    }, {
      css: "reindeer--jump",
      xOffset: 70,
      yOffset: 30,
      width: 195,
      height: 115
    }],
    REINDEER_FALL_SPEED: 200,
    REINDEER_JUMP_SPEED: -1100,
    REINDEER_JUMP_ACCELERATION_STEP: -28,
    REINDEER_GRAVITY: 2400,
    REINDEER_COLLISION_X_SPEED: -200,
    REINDEER_COLLISION_Y_SPEED: -500,
    REINDEER_COLLISION_X_FRICTION: 250,
    REINDEER_COLLISION_X_RECOVERY_SPEED: 100,
    REINDEER_FINISH_Y_SPEED: -1750,
    REINDEER_MAGNET_STRENGTH: 500,
    MAGNET_DURATION_SEC: 20,
    MAGNET_ANIMATION_DURATION_SEC: .5,
    PLATFORM_HEIGHT: 270,
    PX_BETWEEN_OBSTACLES: 1E3,
    PX_BETWEEN_BOOSTS: 2E3,
    OBSTACLES_GROUND: [{
      css: "house--1",
      width: 400,
      height: 165
    }, {
      css: "house--2",
      width: 400,
      height: 150
    }, {
      css: "house--3",
      width: 400,
      height: 165
    }, {
      css: "house--4",
      width: 400,
      height: 180
    }, {
      css: "house--5",
      width: 400,
      height: 160
    }, {
      css: "house--6",
      width: 400,
      height: 150
    }, {
      css: "house--7",
      width: 400,
      height: 160
    }, {
      css: "house--8",
      width: 400,
      height: 165
    }, {
      css: "house--9",
      width: 400,
      height: 160
    }, {
      css: "house--10",
      width: 400,
      height: 165
    }, {
      css: "tree-short--1",
      width: 140,
      height: 140,
      hitBottom: 0
    }, {
      css: "tree-short--2",
      width: 140,
      height: 160,
      hitBottom: 0
    }, {
      css: "tree-tall--1",
      width: 230,
      height: 350,
      hitBottom: 100,
      presentsHeight: 50
    }, {
      css: "tree-tall--1",
      width: 186,
      height: 350,
      hitBottom: 100,
      presentsHeight: 50
    }, {
      css: "tree-short--1",
      width: 140,
      height: 140,
      hitBottom: 0
    }, {
      css: "tree-short--2",
      width: 140,
      height: 160,
      hitBottom: 0
    }, {
      css: "tree-tall--1",
      width: 230,
      height: 350,
      hitBottom: 100,
      presentsHeight: 50
    }, {
      css: "tree-tall--1",
      width: 186,
      height: 350,
      hitBottom: 100,
      presentsHeight: 50
    }, {
      css: "trashcan",
      hitCss: "trashcan--hit",
      width: 90,
      height: 128,
      hitBottom: 0,
      hitWidth: 208
    }],
    OBSTACLES_PLATFORM: [{
      css: "antenna",
      width: 88,
      height: 112
    }, {
      css: "chimney--1",
      width: 72,
      height: 112
    }, {
      css: "chimney--2",
      width: 56,
      height: 112
    }, {
      css: "watertower",
      width: 65,
      height: 112
    }],
    PLATFORMS_SHORT: [{
      css: "platform-short--1",
      width: 392,
      height: 270
    }, {
      css: "platform-short--2",
      width: 392,
      height: 270
    }, {
      css: "platform-short--3",
      width: 392,
      height: 270
    }, {
      css: "platform-short--4",
      width: 392,
      height: 270
    }, {
      css: "platform-short--5",
      width: 392,
      height: 270
    }],
    PLATFORMS_TALL: [{
      css: "platform-tall--1",
      width: 392,
      height: 538
    }, {
      css: "platform-tall--2",
      width: 392,
      height: 538
    }, {
      css: "platform-tall--3",
      width: 392,
      height: 538
    }, {
      css: "platform-tall--4",
      width: 392,
      height: 538
    }],
    FINISH: {
      width: 300,
      height: 265
    },
    PRESENTS: [{
      css: "present--1",
      width: 30,
      height: 34,
      score: 100
    }, {
      css: "present--2",
      width: 22,
      height: 25,
      score: 100
    }],
    TREATS: [{
      css: "carrot",
      width: 64,
      height: 56,
      score: 300
    }, {
      css: "candy",
      width: 56,
      height: 34,
      score: 300
    }],
    BOOST_TYPE_TIME: 0,
    BOOST_TYPE_MAGNET: 1,
    BOOSTS: [{
      css: "boost--time",
      boostType: 0,
      text: "+00:10"
    }, {
      css: "boost--magnet",
      boostType: 1
    }],
    BOOST_SIZE: 60
  };
  var e = {
    generator_: null,
    mulberry32: function (a) {
      return function () {
        a |= 0;
        a = a + 1831565813 | 0;
        var b = Math.imul(a ^ a >>> 15, 1 | a);
        b ^= b + Math.imul(b ^ b >>> 7, 61 | b);
        return ((b ^ b >>> 14) >>> 0) / 4294967296;
      };
    },
    hashSeed: function (a) {
      var b = 2166136261;
      if ("string" === typeof a) for (var d = 0; d < a.length; d++) b ^= a.charCodeAt(d), b = Math.imul(b, 16777619);else b = Math.imul(b ^ (a | 0), 16777619);
      b = Math.imul(b ^ b >>> 16, 2246822507);
      b = Math.imul(b ^ b >>> 13, 3266489909);
      return (b ^ b >>> 16) >>> 0;
    },
    setSeed: function (a) {
      a = e.hashSeed(a);
      e.generator_ = e.mulberry32(a);
    },
    random: function () {
      e.generator_ || e.setSeed(Math.floor(1E6 * Math.random()));
      return e.generator_();
    }
  };
  window.Random = e;
  var h = {
      shared: {}
    },
    l = {
      waiting: [],
      reset: function () {
        l.waiting = [];
      },
      after: function (a, b) {
        l.waiting.push({
          remaining: a,
          callback: b
        });
      },
      step: function (a, b, d) {
        l.waiting.push({
          total: a,
          remaining: a,
          callback: d,
          step: b
        });
      },
      stepReverse: function (a, b, d) {
        l.waiting.push({
          total: a,
          remaining: a,
          callback: d,
          step: b,
          reverse: !0
        });
      },
      onFrame: function (a) {
        for (let b = 0, d; d = l.waiting[b]; b++) {
          d.remaining -= a;
          0 > d.remaining && (d.remaining = 0);
          if (d.step) {
            let a = d.remaining / d.total;
            d.reverse || (a = 1 - a);
            d.step(a);
          }
          0 >= d.remaining && (d.callback(), l.waiting.splice(b--, 1));
        }
      }
    };
  h.shared.Coordinator = l;
  h.shared.pools = function () {
    const a = [];
    return {
      mixin(b, d) {
        function f(a) {
          d.fixed || 0 !== b.pool_.length || b.pool(a);
        }
        function g(a, b) {
          a && a.onInit.apply(a, Array.prototype.slice.call(b, 1));
          return a || null;
        }
        d = d || {};
        b.pool_ = [];
        a.push(b);
        b.pop = function (a) {
          f(a);
          const d = b.pool_.shift();
          return g(d, arguments);
        };
        b.popRandom = function (a) {
          f(a);
          const d = Math.floor(Math.random() * b.pool_.length),
            m = b.pool_[d],
            q = b.pool_.pop();
          q && m !== q && (b.pool_[d] = q);
          return g(m, arguments);
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
  h.shared.pools.PoolType = function () {};
  h.shared.pools.PoolType.onInit = function () {};
  h.shared.pools.PoolType.onDispose = function () {};
  h.shared.pools.PoolType.remove = function () {};
  h.Boost = function (a) {
    this.game = a;
    this.boostsElem = a.context.find(".boosts");
    this.elem = $('<div class="boost-wrap hidden"><div class="boost"><div class="boost__inner-bg"></div><div class="boost__inner"></div></div><div class="boost-text"></div></div>');
    this.boostElem = this.elem.find(".boost");
    this.boostTextElem = this.elem.find(".boost-text");
    this.boostsElem.append(this.elem);
    this.height = this.width = c.BOOST_SIZE;
  };
  h.shared.pools.mixin(h.Boost);
  h.Boost.prototype.onInit = function (a, b) {
    this.elem.removeClass().addClass("boost-wrap");
    this.boostElem.removeClass("boost--collected");
    this.boostTextElem.removeClass("boost-text--collected");
    this.collected = this.dead = !1;
    var d = c.BOOSTS[Math.floor(e.random() * c.BOOSTS.length)];
    this.elem.addClass(d.css);
    d.text ? this.boostTextElem.text(d.text) : this.boostTextElem.empty();
    this.boostType = d.boostType;
    this.x = a;
    this.y = -b - this.height / 2;
    this.draw();
  };
  h.Boost.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  h.Boost.prototype.onFrame = function () {
    this.x < this.game.distanceTraveled - this.width && h.Boost.push(this);
  };
  h.Boost.prototype.hit = function () {
    if (!this.collected) switch (this.collected = !0, this.boostElem.addClass("boost--collected"), this.boostTextElem.addClass("boost-text--collected"), window.santaApp.fire("sound-trigger", "runner_present"), this.boostType) {
      case c.BOOST_TYPE_TIME:
        this.game.addTime(10);
        break;
      case c.BOOST_TYPE_MAGNET:
        this.game.magnetMode = !0, this.game.player.toggleMagnet(!0), l.after(c.MAGNET_DURATION_SEC, function () {
          this.game.magnetMode = !1;
          this.game.player.toggleMagnet(!1);
        }.bind(this));
    }
  };
  h.Boost.prototype.draw = function () {
    this.elem.css("transform", "translate3d(" + this.x + "px, " + this.y + "px, 0)");
  };
  h.Boost.prototype.getHitbox = function () {
    return {
      x: this.x - this.game.distanceTraveled,
      y: this.y,
      width: this.width,
      height: this.height
    };
  };
  h.Controls = function (a) {
    this.game_ = a;
    this.player_ = a.player;
    this.tutorial_ = a.tutorial;
    this.currentTouchStartY = this.currentTouchId = null;
    a = this.handle.bind(this);
    this.game_.context.on("touchstart.endlessrunner touchmove.endlessrunner touchend.endlessrunner", a);
    $(window).on("keydown.endlessrunner keyup.endlessrunner", a);
  };
  h.Controls.prototype.handle = function (a) {
    if (this.game_.isPlaying) this["on" + a.type[0].toUpperCase() + a.type.slice(1)](a);
  };
  h.Controls.prototype.isUpDown_ = !1;
  h.Controls.prototype.onKeydown = function (a) {
    if (!this.isUpDown_ && (38 === a.keyCode || 32 === a.keyCode)) this.player_.onUp(), this.isUpDown_ = !0;else if (40 === a.keyCode) this.player_.onDown();
    this.arrowPressed || 38 !== a.keyCode && 40 !== a.keyCode || (this.tutorial_.off("keys-updown"), this.arrowPressed = !0);
  };
  h.Controls.prototype.onKeyup = function (a) {
    38 === a.keyCode || 32 === a.keyCode ? this.isUpDown_ = !1 : 40 === a.keyCode && this.player_.endSlide();
  };
  h.Controls.prototype.touchStartedInGUI = null;
  h.Controls.prototype.onTouchstart = function (a) {
    this.touchStartedInGUI = !!$(a.target).closest(".gui").length;
    if (!this.touchStartedInGUI) {
      var b = a.originalEvent.changedTouches[0];
      this.currentTouchId = b.identifier;
      this.currentTouchStartY = b.pageY;
      a.preventDefault();
      this.touchStarted || (this.tutorial_.off("touch-updown"), this.touchStarted = !0);
    }
  };
  h.Controls.prototype.onTouchmove = function (a) {
    a.preventDefault();
  };
  h.Controls.prototype.onTouchend = function (a) {
    if (a = this.getCurrentTouch(a.originalEvent)) {
      a = this.currentTouchStartY - a.pageY;
      if (0 <= a) this.player_.onUp();else if (-25 > a) this.player_.onDown(2);
      this.currentTouchId = null;
    }
  };
  h.Controls.prototype.getCurrentTouch = function (a) {
    if (null !== this.currentTouchId) for (var b = 0, d; d = a.changedTouches[b]; b++) if (d.identifier === this.currentTouchId) return d;
  };
  function n(a) {
    let b = 0,
      d = !1;
    const f = () => {
      d || 0 !== --b || (d = !0, a());
    };
    window.setTimeout(() => {
      0 === b && (d = !0, a());
    }, 0);
    return a => {
      ++b;
      const d = new Image();
      d.src = a;
      d.onload = f;
      d.onerror = f;
      return d;
    };
  }
  h.Canvas = function (a, b) {
    this.game_ = a;
    this.ready_ = !1;
    this.canvasWidth = 2115;
    this.canvasHeight = 670;
    this.clipPositionX = 352.5;
    this.clipWidth = 1410;
    this.interval = 16.67;
    a = n(() => {
      this.ready_ = !0;
      this.drawDefaultImage_();
    });
    this.mountain = {};
    this.mountain.img = a("img/bg-tile-layer1.png");
    this.mountain.width = 1490;
    this.mountain.height = 671;
    this.mountain.speed = .25;
    this.mountain.x = 0;
    this.trees = {};
    this.trees.img = a("img/bg-tile-layer2.png");
    this.trees.width = 2980;
    this.trees.height = 242;
    this.trees.offsetY = 428;
    this.trees.speed = .5;
    this.trees.x = 0;
    this.ctx = b.getContext("2d");
  };
  h.Canvas.prototype.drawDefaultImage_ = function () {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(this.clipPositionX, 0, this.clipWidth, this.canvasHeight);
    this.ctx.clip();
    this.ctx.drawImage(this.mountain.img, this.mountain.x, 0, this.mountain.width, this.mountain.height);
    this.ctx.drawImage(this.mountain.img, this.mountain.x + this.mountain.width, 0, this.mountain.width, this.mountain.height);
    this.ctx.restore();
    this.ctx.drawImage(this.trees.img, this.trees.x, this.trees.offsetY, this.trees.width, this.trees.height);
    this.mountain.x -= this.mountain.speed;
  };
  h.Canvas.prototype.onFrame = function () {
    this.ready_ && (this.ctx.clearRect(0, this.trees.offsetY, this.canvasWidth, this.trees.height), this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.clipPositionX, 0, this.clipWidth, this.canvasHeight), this.ctx.clip(), this.mountain.x < this.clipPositionX - this.mountain.width && (this.mountain.x = this.clipPositionX), this.ctx.drawImage(this.mountain.img, this.mountain.x, 0, this.mountain.width, this.mountain.height), this.mountain.x < this.clipPositionX + this.clipWidth - this.mountain.width && this.ctx.drawImage(this.mountain.img, this.mountain.x + this.mountain.width, 0, this.mountain.width, this.mountain.height), this.ctx.restore(), this.trees.x < -this.trees.width && (this.trees.x = 0), this.ctx.drawImage(this.trees.img, this.trees.x, this.trees.offsetY, this.trees.width, this.trees.height), this.trees.x < this.canvasWidth - this.trees.width && this.ctx.drawImage(this.trees.img, this.trees.x + this.trees.width, this.trees.offsetY, this.trees.width, this.trees.height), this.mountain.x -= this.mountain.speed, this.trees.x -= this.trees.speed);
  };
  h.Ceiling = function (a) {
    this.ceiling = a.find(".ceiling-on-top");
    this.wall = a.find(".wall");
    this.game = a.find(".game");
    this.resizeHandler_ = this.resizeHandler_.bind(this);
    this.resizeHandler_();
    $(window).on("resize.endlessrunner", this.resizeHandler_);
  };
  h.Ceiling.prototype.resizeHandler_ = function () {
    var a = 0;
    $(window).innerHeight() > 1.5 * this.wall.height() && (a = .35 * ($(window).innerHeight() - this.wall.height()));
    this.ceiling.css("height", a);
    this.game.css("top", a);
  };
  h.Finish = function (a) {
    this.game = a;
    this.elem = a.context.find(".finish");
    this.width = c.FINISH.width;
    this.height = c.FINISH.height;
    this.dead = !1;
  };
  h.Finish.prototype.place = function (a) {
    this.x = a;
    this.dead = !1;
    this.elem.css("transform", "translate3d(" + this.x + "px, 0, 0)");
    this.elem.removeClass("hidden");
  };
  h.Finish.prototype.onFrame = function () {
    this.x < this.game.distanceTraveled - this.width && (this.dead = !0);
  };
  h.Finish.prototype.hit = function (a) {
    a.newState(c.REINDEER_STATE_JUMPING);
    a.ySpeed = c.REINDEER_FINISH_Y_SPEED;
  };
  h.Finish.prototype.getHitbox = function () {
    return {
      x: this.x - this.game.distanceTraveled,
      y: -this.height,
      width: this.width,
      height: 0
    };
  };
  h.Obstacle = function (a) {
    this.game = a;
    this.obstaclesElem = a.context.find(".obstacles");
    this.elem = $('<div class="obstacle hidden"><div class="obstacle__inner"></div></div>');
    this.obstaclesElem.append(this.elem);
  };
  h.shared.pools.mixin(h.Obstacle);
  h.Obstacle.prototype.onInit = function (a, b) {
    this.elem.removeClass().addClass("obstacle");
    this.dead = !1;
    var d = 0 < b ? c.OBSTACLES_PLATFORM : c.OBSTACLES_GROUND;
    d = d[Math.floor(e.random() * d.length)];
    this.elem.addClass(d.css);
    this.x = a;
    this.y = b * -c.PLATFORM_HEIGHT;
    this.level = b;
    this.width = d.width;
    this.height = d.height;
    this.hitBottom = d.hitBottom || 0;
    this.hitCss = d.hitCss;
    this.hitWidth = d.hitWidth;
    this.presentsHeight = 0 < b ? this.game.getPresentHeightForLevel(b + .5) : d.presentsHeight;
    this.draw();
  };
  h.Obstacle.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  h.Obstacle.prototype.onFrame = function () {
    this.x < this.game.distanceTraveled - this.width && h.Obstacle.push(this);
  };
  h.Obstacle.prototype.draw = function () {
    this.elem.css("transform", "translate3d(" + this.x + "px, " + this.y + "px, 0)");
  };
  h.Obstacle.prototype.hit = function (a) {
    this.hitCss ? this.elem.addClass(this.hitCss) : (a.newState(c.REINDEER_STATE_COLLISION), window.santaApp.fire("sound-trigger", "runner_hit"));
    this.hitWidth && (this.width = this.hitWidth);
  };
  h.Obstacle.prototype.getHitbox = function () {
    return {
      x: this.x - this.game.distanceTraveled,
      y: this.y - this.hitBottom,
      width: this.width,
      height: this.height
    };
  };
  h.Platform = function (a) {
    this.game = a;
    this.platformsElem = a.context.find(".platforms");
    this.elem = $('<div class="platform hidden"></div>');
    this.platformsElem.append(this.elem);
  };
  h.shared.pools.mixin(h.Platform);
  h.Platform.prototype.onInit = function (a, b, d) {
    this.elem.removeClass().addClass("platform");
    this.dead = !1;
    b = 0 < b ? c.PLATFORMS_TALL : c.PLATFORMS_SHORT;
    d = d ? b.length - 1 : Math.floor(e.random() * (b.length - 1));
    d = b[d];
    this.elem.addClass(d.css);
    this.x = a;
    this.width = d.width;
    this.height = d.height;
    this.draw();
  };
  h.Platform.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  h.Platform.prototype.onFrame = function () {
    this.x < this.game.distanceTraveled - this.width && h.Platform.push(this);
  };
  h.Platform.prototype.draw = function () {
    this.elem.css("transform", "translate3d(" + this.x + "px, 0, 0)");
  };
  h.Platform.prototype.hit = function () {};
  h.Platform.prototype.getHitbox = function () {
    return {
      x: this.x - this.game.distanceTraveled,
      y: -this.height,
      width: this.width,
      height: 0
    };
  };
  h.Player = function (a, b) {
    this.game = a;
    this.context = $(b);
    this.hitCloudElem = a.context.find(".hit-cloud");
    this.hitCloudInnerElem = a.context.find(".hit-cloud__inner");
    this.magnetElem = a.context.find(".magnet");
    this.state = c.REINDEER_STATE_RUNNING;
  };
  h.Player.prototype.reset = function () {
    this.x = c.REINDEER_X_POS;
    this.jumpsRequested = this.yAcceleration = this.ySpeed = this.xSpeed = this.angle = this.y = 0;
    this.hasMagnet = this.hasHitCloud = this.jumpEndRequested = !1;
    this.newState(c.REINDEER_STATE_RUNNING, !0);
    this.draw();
  };
  h.Player.prototype.newState = function (a, b, d) {
    if (this.state != c.REINDEER_STATE_COLLISION || b) (b = this.state, this.state = a, this.context.removeClass(c.REINDEER_STATES[b].css).addClass(c.REINDEER_STATES[this.state].css), a == c.REINDEER_STATE_RUNNING && b !== c.REINDEER_STATE_RUNNING) ? (this.jumpsRequested = 0, this.jumpEndRequested = !1) : a != c.REINDEER_STATE_JUMP_START || d ? a == c.REINDEER_STATE_COLLISION && (this.xSpeed = c.REINDEER_COLLISION_X_SPEED, this.ySpeed = c.REINDEER_COLLISION_Y_SPEED, this.hasHitCloud = !0, this.drawHitcloud(), this.hitCloudElem.removeClass("hidden"), this.hitCloudInnerElem.addClass("hit-cloud__inner--active"), l.after(c.REINDEER_HIT_CLOUD_DURATION_SEC, function () {
      this.hitCloudElem.addClass("hidden");
      this.hitCloudInnerElem.removeClass("hit-cloud__inner--active");
      this.hasHitCloud = !1;
    }.bind(this)), l.after(c.REINDEER_COLLISION_DURATION_SEC, function () {
      this.newState(c.REINDEER_STATE_RUNNING, !0);
    }.bind(this))) : (0 == this.jumpsRequested ? window.santaApp.fire("sound-trigger", "runner_jump_1") : window.santaApp.fire("sound-trigger", "runner_jump_2"), this.yAcceleration = 0);
  };
  h.Player.prototype.onUp = function () {
    2 > this.jumpsRequested && (this.newState(c.REINDEER_STATE_JUMP_START), this.jumpsRequested++, this.jumpEndRequested = !1);
  };
  h.Player.prototype.onDown = function (a) {
    this.state == c.REINDEER_STATE_RUNNING ? (this.newState(c.REINDEER_STATE_SLIDING), a && l.after(a, function () {
      this.endSlide();
    }.bind(this))) : this.state != c.REINDEER_STATE_JUMPING || this.jumpEndRequested ? this.state != c.REINDEER_STATE_JUMP_START || this.jumpEndRequested || (this.newState(c.REINDEER_STATE_JUMPING), this.ySpeed += 500, this.jumpEndRequested = !0) : (this.ySpeed += 500, this.jumpEndRequested = !0);
  };
  h.Player.prototype.endSlide = function () {
    this.state == c.REINDEER_STATE_SLIDING && this.newState(c.REINDEER_STATE_RUNNING);
  };
  h.Player.prototype.onFrame = function (a) {
    var b;
    var d = b = this.y;
    this.angle = 15 * Math.min(1, this.ySpeed / Math.abs(c.REINDEER_JUMP_SPEED));
    this.state == c.REINDEER_STATE_JUMP_START && (this.yAcceleration += c.REINDEER_JUMP_ACCELERATION_STEP, this.ySpeed += this.yAcceleration, b = this.y += this.ySpeed * a, this.ySpeed <= c.REINDEER_JUMP_SPEED && this.newState(c.REINDEER_STATE_JUMPING));
    !this.ySpeed && this.state != c.REINDEER_STATE_JUMPING || this.state == c.REINDEER_STATE_JUMP_START || (this.y += this.ySpeed * a, this.ySpeed += c.REINDEER_GRAVITY * a, 0 <= this.y && this.land_(0), b = this.y);
    this.x += this.xSpeed * a;
    this.state == c.REINDEER_STATE_COLLISION ? this.xSpeed = Math.min(0, this.xSpeed + c.REINDEER_COLLISION_X_FRICTION * a) : this.x < c.REINDEER_X_POS ? this.xSpeed += c.REINDEER_COLLISION_X_RECOVERY_SPEED * a : (this.x = c.REINDEER_X_POS, this.xSpeed = 0);
    this.draw();
    this.hasHitCloud && this.drawHitcloud();
    this.hasMagnet && this.drawMagnet();
    a = 0 > this.y && 0 == this.ySpeed;
    for (var f = !1, g = 0, m = this.game.entities.length; g < m; g++) {
      var k = this.game.entities[g];
      (k instanceof h.Platform || k instanceof h.Finish) && !f ? d < b ? f = this.checkLandingPlatform_(k, d, b) : a && (f = this.checkSupportingPlatform_(k, this.y), a = !f) : k.getHitbox && this.state !== c.REINDEER_STATE_COLLISION && this.checkCollision_(k);
    }
    a && (this.newState(c.REINDEER_STATE_JUMPING, !1, !0), this.ySpeed = c.REINDEER_FALL_SPEED);
  };
  h.Player.prototype.draw = function () {
    this.context.css("transform", "translate3d(" + (this.x - c.REINDEER_X_POS) + "px, " + this.y + "px, 0) rotateZ(" + this.angle + "deg)");
  };
  h.Player.prototype.drawHitcloud = function () {
    var a = this.getHitbox();
    this.hitCloudElem.css("transform", "translate(" + (a.x + a.width / 2 - c.REINDEER_HIT_CLOUD_SIZE / 2) + "px, " + (a.y - a.height / 2 + c.REINDEER_HIT_CLOUD_SIZE / 2) + "px) translateZ(0)");
  };
  h.Player.prototype.drawMagnet = function () {
    var a = this.getHitbox();
    this.magnetElem.css("transform", "translate(" + (a.x - 75) + "px, " + (a.y - a.height / 2) + "px) translateZ(0)");
  };
  h.Player.prototype.toggleMagnet = function (a) {
    a ? (this.hasMagnet = !0, this.magnetElem.addClass("magnet--active")) : (this.magnetElem.removeClass("magnet--active"), l.after(c.MAGNET_ANIMATION_DURATION_SEC, function () {
      this.hasMagnet = !1;
    }.bind(this)));
  };
  h.Player.prototype.checkCollision_ = function (a) {
    var b = a.getHitbox(),
      d = this.getHitbox();
    this.checkHorizontalHitbox_(b) && (d.y - d.height > b.y || d.y < b.y - b.height || a.hit(this));
  };
  h.Player.prototype.checkLandingPlatform_ = function (a, b, d) {
    return this.checkHorizontalHitbox_(a.getHitbox()) ? -a.height <= d && -a.height > b ? (this.land_(-a.height), a.hit(this), this.draw(), !0) : !1 : !1;
  };
  h.Player.prototype.checkSupportingPlatform_ = function (a, b) {
    return this.checkHorizontalHitbox_(a.getHitbox()) && -a.height == b;
  };
  h.Player.prototype.checkHorizontalHitbox_ = function (a) {
    var b = this.getHitbox();
    return !(a.x + a.width < b.x || a.x >= b.x + b.width);
  };
  h.Player.prototype.land_ = function (a) {
    this.y = a;
    this.angle = this.ySpeed = 0;
    this.newState(c.REINDEER_STATE_RUNNING);
  };
  h.Player.prototype.getHitbox = function () {
    var a = c.REINDEER_STATES[this.state];
    return {
      x: this.x + a.xOffset,
      y: this.y - a.yOffset,
      width: a.width,
      height: a.height
    };
  };
  h.Present = function (a) {
    this.game = a;
    this.presentsElem = a.context.find(".presents");
    this.elem = $('<div class="present-wrap hidden"><div class="present"><div class="present__inner"></div></div></div>');
    this.presentElem = this.elem.find(".present");
    this.presentsElem.append(this.elem);
  };
  h.shared.pools.mixin(h.Present);
  h.Present.prototype.onInit = function (a, b) {
    this.elem.removeClass().addClass("present-wrap");
    this.presentElem.removeClass("present--collected");
    this.collected = this.dead = !1;
    var d = .03 > e.random() ? c.TREATS[Math.floor(e.random() * c.TREATS.length)] : c.PRESENTS[Math.floor(e.random() * c.PRESENTS.length)];
    this.elem.addClass(d.css);
    this.score = d.score;
    this.width = d.width;
    this.height = d.height;
    this.x = a;
    this.y = -b - this.height / 2;
    this.draw();
  };
  h.Present.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  h.Present.prototype.onFrame = function () {
    this.x < this.game.distanceTraveled - this.width && h.Present.push(this);
    if (this.game.magnetMode && this.game.player.state != c.REINDEER_STATE_COLLISION) {
      var a = this.distanceFromPlayer();
      a.dist < c.REINDEER_MAGNET_STRENGTH && (this.x += a.xDiff / 10, this.y += a.yDiff / 10, this.draw());
    }
  };
  h.Present.prototype.hit = function () {
    this.collected || (this.collected = !0, this.presentElem.addClass("present--collected"), this.game.hitPresent(this), window.santaApp.fire("sound-trigger", "runner_present"));
  };
  h.Present.prototype.draw = function () {
    this.elem.css("transform", "translate3d(" + this.x + "px, " + this.y + "px, 0)");
  };
  h.Present.prototype.getHitbox = function () {
    return {
      x: this.x - this.game.distanceTraveled,
      y: this.y,
      width: this.width,
      height: this.height
    };
  };
  h.Present.prototype.setXPos = function (a) {
    this.x = a;
    this.draw();
  };
  h.Present.prototype.distanceFromPlayer = function () {
    var a = this.game.player.getHitbox(),
      b = this.getHitbox(),
      d = a.x + a.width / 2;
    a = a.y - a.height / 2;
    var f = b.x + b.width / 2;
    b = b.y + b.height / 2;
    return {
      xDiff: d - f,
      yDiff: a - b,
      dist: Math.sqrt(Math.pow(d - f, 2) + Math.pow(a - b, 2))
    };
  };
  h.Timer = function (a, b) {
    this.timerId = 0;
    this.start = null;
    this.remaining = b;
    this.alive = !0;
    var d = this;
    this.pause = function () {
      this.alive && (window.clearTimeout(this.timerId), this.remaining -= new Date() - this.start);
    };
    this.resume = function () {
      this.alive && (this.start = new Date(), this.timerId = window.setTimeout(function () {
        a();
        d.alive = !1;
      }, this.remaining));
    };
    this.resume();
  };
  h.shared.Gameover = class {
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
  h.shared.Scoreboard = r;
  function t(a, b) {
    a = c ? c[a] : void 0;
    return +a === a ? a : b;
  }
  function r(a, b, d) {
    this.game = a;
    this.initialCountdown_ = t("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  r.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  r.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  r.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = t("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  r.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  r.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  r.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  r.prototype.announce_ = function () {
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
  function u(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  h.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = u(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = u(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  h.shared.utils = function () {
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
      animWithClass: function (a, d, f) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(d);
          const b = () => {
            a.classList.remove(d);
            a.removeEventListener("animationend", b);
            a.removeEventListener("transitionend", b);
            f && (f(), f = null);
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
        let f;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = b.getPropertyValue(a + "transform");
          if (!a) return !1;
          f = a;
          return !0;
        });
        if ("none" === f) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let g;
        try {
          g = f.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (m) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: g[4],
          y: g[5],
          rotate: 180 / Math.PI * Math.atan2(g[1], g[0])
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
  h.Game = function (a) {
    this.context = $(a);
    this.gameElem_ = this.context.find(".game");
    this.layersElem_ = this.context.find(".layer");
    this.layersContainerElem_ = this.context.find(".layers-wrap");
    this.entitiesLayerElem_ = this.context.find(".entities-layer");
    this.groundElem_ = this.context.find(".ground");
    this.stripesElem_ = this.context.find(".stripes");
    this.stripes_ = '<div class="stripe"></div>';
    this.entities = [];
    this.isPlaying = !1;
    this.paused = !0;
    this.started = !1;
    this.player = new h.Player(this, this.context.find(".reindeer"));
    this.finish = new h.Finish(this);
    this.scoreboard = new r(this, this.context.find(".board"));
    this.gameoverDialog = new h.shared.Gameover(this, this.context.find(".gameover"));
    this.tutorial = new h.shared.Tutorial("touch-updown keys-updown spacenav-updown");
    this.controls = new h.Controls(this);
    this.canvas = new h.Canvas(this, a.querySelector("#stage-canvas"));
    this.ceiling = new h.Ceiling(this.context);
    this.gameSize = c.GAME_BASE_SIZE;
    this.scale = 1;
    this.watchSceneSize_();
    this.manualTime = !!window.__MANUAL_TIME__;
    this.onFrame = this.onFrame.bind(this);
    this.preloadPools_();
  };
  h.Game.prototype.preloadPools_ = function () {
    for (var a = 0; 40 > a; a++) h.Present.pool(this);
    for (a = 0; 5 > a; a++) h.Obstacle.pool(this);
    for (a = 0; 10 > a; a++) h.Platform.pool(this);
    for (a = 0; 3 > a; a++) h.Boost.pool(this);
  };
  h.Game.prototype.start = function () {
    this.started = !0;
    this.restart();
    this.tutorial.start();
  };
  h.Game.prototype.restart = function () {
    this.entities.forEach(function (a) {
      a.remove && a.remove();
    });
    this.entities = [];
    this.scoreboard.reset();
    this.scoreboard.setLevel(-1);
    this.hurryUpPlayed = !1;
    this.speed = c.GAME_BASE_SPEED * c.GAME_LEVEL_SPEED[0];
    this.lastBoostPos = this.lastObstaclePos = this.timePassed = this.distanceTraveled = 0;
    this.lastEntityPos = 1E3;
    this.magnetMode = !1;
    this.level = 0;
    this.setLevelClass(0);
    this.updatingLevel = !1;
    l.reset();
    this.paused = !1;
    this.player.reset();
    this.unfreezeGame();
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "runner"
    });
    window.santaApp.fire("sound-trigger", "runner_start");
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    this.gameStartTime = +new Date();
    for (var a = 0, b = 0; b < c.GAME_LEVEL_SPEED.length; b++) a += c.GAME_LEVEL_SPEED[b];
    this.finishLinePos = a / c.GAME_LEVEL_SPEED.length * c.GAME_BASE_SPEED * c.INITIAL_COUNTDOWN;
    this.finish.place(this.finishLinePos);
    this.entities.push(this.finish);
  };
  h.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  h.Game.prototype.resume = function () {
    this.started && this.paused && (this.paused = !1, this.unfreezeGame());
  };
  h.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.gameElem_.addClass("frozen");
    this.updatingLevel && (this.levelTimer.pause(), this.stripeTimer.pause());
  };
  h.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.gameElem_.removeClass("frozen"), this.updatingLevel && (this.levelTimer.resume(), this.stripeTimer.resume()), this.isPlaying = !0, this.lastFrame = +new Date() / 1E3, this.manualTime || (this.requestId = window.requestAnimationFrame(this.onFrame)));
  };
  h.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverDialog.show();
    window.santaApp.fire("sound-trigger", "runner_game_over");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "runner",
      score: this.scoreboard.score,
      level: 1,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  h.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "runner",
      timePlayed: new Date() - this.gameStartTime,
      level: 1
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".endlessrunner");
    $(document).off(".endlessrunner");
    this.context.off(".endlessrunner");
    h.shared.pools.empty();
    this.tutorial.dispose();
    l.waiting = [];
  };
  h.Game.prototype.step = function (a) {
    if (this.isPlaying) {
      this.timePassed += a;
      var b = Math.floor(this.timePassed);
      0 == this.level && 28 <= b && !this.updatingLevel ? this.updateLevel_(1) : 1 == this.level && 58 <= b && !this.updatingLevel ? this.updateLevel_(2) : 2 == this.level && 88 <= b && !this.updatingLevel && this.updateLevel_(3);
      l.onFrame(a);
      this.distanceTraveled += a * this.speed;
      this.scoreboard.onFrame(a);
      10 > this.scoreboard.countdown && !this.hurryUpPlayed && (window.santaApp.fire("sound-trigger", "runner_hurry_up"), this.hurryUpPlayed = !0);
      this.canvas.onFrame(a);
      this.player.onFrame(a);
      this.updateEntities(a);
      this.entitiesLayerElem_.css("transform", "translate3d(" + -this.distanceTraveled + "px, 0, 0)");
      a = [];
      b = 0;
      for (var d; d = this.entities[b]; b++) d.onFrame(), d.dead && a.push(b);
      for (b = 0; null != (d = a[b]); b++) this.entities.splice(d - b, 1);
    }
  };
  h.Game.prototype.advanceTime = function (a) {
    for (var b = 1 / 60; 0 < a && this.isPlaying;) {
      var d = Math.min(b, a);
      this.step(d);
      a -= d;
    }
  };
  h.Game.prototype.onFrame = function () {
    if (this.isPlaying && !this.manualTime) {
      var a = +new Date() / 1E3,
        b = a - this.lastFrame;
      this.lastFrame = a;
      this.step(b);
      this.requestId = window.requestAnimationFrame(this.onFrame);
    }
  };
  h.Game.prototype.updateLevel_ = function (a) {
    this.updatingLevel = !0;
    var b = this;
    this.stripesElem_.empty();
    for (var d = 0; 6 > d; d++) b.stripesElem_.append(b.stripes_);
    this.manualTime ? (b.level = a, b.setLevelClass(a), b.speed = c.GAME_BASE_SPEED * c.GAME_LEVEL_SPEED[a], b.updatingLevel = !1) : (this.stripeTimer = new h.Timer(function () {
      b.gameElem_.addClass("changing-level");
    }, 200), this.levelTimer = new h.Timer(function () {
      b.gameElem_.removeClass("changing-level");
      b.level = a;
      b.setLevelClass(a);
      b.speed = c.GAME_BASE_SPEED * c.GAME_LEVEL_SPEED[a];
      b.updatingLevel = !1;
    }, 2E3));
  };
  h.Game.prototype.watchSceneSize_ = function () {
    function a() {
      d.scale = 1;
      d.visibleWidth = 1.5 * (b.width() || 1E3);
    }
    var b = this.gameElem_,
      d = this;
    a();
    $(window).on("resize.endlessrunner", a);
  };
  h.Game.prototype.updateEntities = function () {
    var a = this.lastEntityPos + c.GAME_ENTITY_SPACING;
    if (a < this.finishLinePos - c.FINISH_LINE_BUFFER && this.lastEntityPos < this.distanceTraveled + this.visibleWidth) {
      var b = e.random();
      this.lastEntityPos = .2 > b ? this.addObstacle(a, 0) : .5 > b ? this.addPresents(a) : .75 > b ? this.addPlatforms(a) : .9 > b ? this.addBoost(a) : this.lastEntityPos + Math.floor(1E3 * e.random());
    }
  };
  h.Game.prototype.addPlatforms = function (a) {
    var b = Math.ceil(3 * e.random()),
      d = Math.floor(3 * e.random()),
      f = !1,
      g;
    .25 > e.random() && (f = !0);
    for (g = 0; g < b; g++) a = this.addPlatform(a, 0, f);
    a -= 150;
    for (g = 0; g < d; g++) a = this.addPlatform(a, 1, f, 0 == g);
    return a;
  };
  h.Game.prototype.addPlatform = function (a, b, d, f) {
    var g = h.Platform.pop(this, a, b, d);
    this.entities.push(g);
    var m = e.random();
    .25 > m ? this.addPresents(a, g, (b + 1) * c.PLATFORM_HEIGHT + 75) : .5 > m && !d && this.addObstacle(a + .66 * g.width, b + 1);
    .25 > e.random() && !f && this.addPresents(a, g, 75);
    return a += g.width + 7;
  };
  h.Game.prototype.addObstacle = function (a, b) {
    if (this.lastObstaclePos > a - c.PX_BETWEEN_OBSTACLES) return this.lastEntityPos;
    var d = h.Obstacle.pop(this, a, b);
    this.entities.push(d);
    .5 > e.random() && (b = this.getPresentHeightForLevel(b + 1), this.addPresents(a, d, d.presentsHeight || b));
    return this.lastObstaclePos = a + d.width;
  };
  h.Game.prototype.addPresents = function (a, b, d) {
    var f = d || Math.floor(500 * e.random() + 75);
    if (b) {
      d = 75;
      for (var g = 0, m = []; g < b.width;) {
        var k = h.Present.pop(this, 0, f);
        if (g + k.width > b.width) {
          h.Present.push(k);
          break;
        }
        m.push(k);
        g += k.width + d;
      }
      f = a + (b.width - (g - d)) / 2;
      for (b = 0; b < m.length; b++) k = m[b], k.setXPos(f), f += k.width + d, this.entities.push(k);
    } else for (m = Math.ceil(3 * e.random() + 2), g = Math.ceil(4 * e.random()), d = 150, b = 0; b < m; b++) {
      for (var p = 0; p < g; p++) k = h.Present.pop(this, a + p % 2 * (d / 2), f + d / 2 * p), this.entities.push(k);
      a += 150;
    }
    return a;
  };
  h.Game.prototype.addBoost = function (a) {
    if (this.lastBoostPos > a - c.PX_BETWEEN_BOOSTS) return this.lastEntityPos;
    var b = h.Boost.pop(this, a, Math.floor(500 * e.random() + 75));
    this.entities.push(b);
    return this.lastBoostPos = a + b.width;
  };
  h.Game.prototype.hitPresent = function (a) {
    this.scoreboard.addScore(a.score);
  };
  h.Game.prototype.getPresentHeightForLevel = function (a) {
    return a * c.PLATFORM_HEIGHT + 75;
  };
  h.Game.prototype.addTime = function (a) {
    10 > this.scoreboard.countdown && 10 < this.scoreboard.countdown + a && (window.santaApp.fire("sound-trigger", "hurry_up_end"), this.hurryUpPlayed = !1);
    this.scoreboard.addTime(a);
    this.finishLinePos += a * c.GAME_BASE_SPEED * c.GAME_LEVEL_SPEED[c.GAME_LEVEL_SPEED.length - 1];
    this.finish.place(this.finishLinePos);
  };
  h.Game.prototype.setLevelClass = function (a) {
    this.gameElem_.removeClass("level-stop").removeClass("level-0").removeClass("level-1").removeClass("level-2").removeClass("level-3").addClass("level-" + a);
  };
  _globalExport = h.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('runner_load_sounds');
sceneApi.preload.images('img/bg-tile-layer1.png', 'img/bg-tile-layer2.png', 'img/bg-tile-track.svg', 'img/bg-wall-shadow.svg', 'img/bg-windows-repeating.png', 'img/ceiling-roller-long.svg', 'img/ceiling-roller-short.svg', 'img/ceiling-repeating.png', 'img/finish.svg', 'img/foreground-cooling-off.svg', 'img/foreground-gear-base.svg', 'img/foreground-gear-big.svg', 'img/foreground-gear-small.svg', 'img/foreground-machines-cog.svg', 'img/foreground-machines.svg', 'img/foreground-operator.svg', 'img/hero-crash.svg', 'img/hero-jump-01.svg', 'img/hero-slide.svg', 'img/hero.svg', 'img/hit-cloud.svg', 'img/hit-house-01.svg', 'img/hit-house-02.svg', 'img/hit-house-03.svg', 'img/hit-house-04.svg', 'img/hit-house-05.svg', 'img/hit-house-06.svg', 'img/hit-house-07.svg', 'img/hit-house-08.svg', 'img/hit-house-09.svg', 'img/hit-house-10.svg', 'img/hit-roof-antenna.svg', 'img/hit-roof-chimney-1.svg', 'img/hit-roof-chimney-2.svg', 'img/hit-roof-water.svg', 'img/hit-tree-short-1.svg', 'img/hit-tree-short-2.svg', 'img/hit-tree-tall-1.svg', 'img/hit-tree-tall-2.svg', 'img/logo.svg', 'img/orb-magnet-back.svg', 'img/orb-magnet-front.svg', 'img/orb-time-back.svg', 'img/orb-time-front.svg', 'img/paper-stage-gear-big.svg', 'img/paper-stage-gear-small.svg', 'img/paper-stage-left.svg', 'img/paper-stage-right.svg', 'img/plat-short-1.svg', 'img/plat-short-2.svg', 'img/plat-short-3.svg', 'img/plat-short-4.svg', 'img/plat-short-5.svg', 'img/plat-tall-1.svg', 'img/plat-tall-2.svg', 'img/plat-tall-3.svg', 'img/plat-tall-4.svg', 'img/present1.svg', 'img/present2.svg', 'img/spotlight.svg', 'img/trashcan.svg', 'img/treadmill-base.svg', 'img/treadmill-belt.svg', 'img/treadmill-corners.svg', 'img/treadmill-gears.svg', 'img/treadmill-shadow.svg', 'img/treat-candy.svg', 'img/treat-carrot.svg');
const game = new Game(document.getElementById('module-runner'));
if (window.__MANUAL_TIME__) {
  game.manualTime = true;
  window.__TEST_CONTROL__ = {
    game,
    advanceTime: seconds => {
      if (!game.isPlaying && !game.started) {
        game.start();
      }
      game.advanceTime(seconds);
    },
    isReady: () => !!window.__SCENE_READY__
  };
}
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  orientation: 'landscape',
  sound: []
});
sceneApi.ready(() => {
  if (!game.started) {
    game.start();
  }
  window.__SCENE_READY__ = true;
});