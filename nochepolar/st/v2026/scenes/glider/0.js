import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    INITIAL_COUNTDOWN: 60,
    TOTAL_LEVELS: 10,
    COUNTDOWN_FLASH: 10,
    BASE_FONT_SIZE: 10,
    MAX_SCALE: 1.25,
    TOTAL_BUILDINGS: 26,
    BUILDING_START_SPEED: 13,
    BUILDING_SPEED_PER_LEVEL: 5,
    BUILDING_SPAWN_INTERVAL: 2.7,
    BUILDING_SPAWN_VARIANCE: 1,
    BUILDING_SPAWN_MULTIPLY_EACH_LEVEL: .7,
    BUILDING_SPAWN_BASE: .5,
    ITEM_SPAWN_INTERVAL: 7,
    ITEM_SPAWN_VARIANCE: 2,
    ITEM_SPAWN_MULTIPLY_EACH_LEVEL: .95,
    ITEM_SPEED_MULTIPLY_EACH_LEVEL: 1.15,
    ITEM_SPEED_NORMAL: 7.5,
    ITEM_SPEED_FAST: 15,
    ITEM_SCORE_NORMAL: 50,
    ITEM_SCORE_FAST: 75,
    ITEM_TIME_NORMAL: 1,
    ITEM_TIME_FAST: 2,
    OBSTACLE_SPAWN_INTERVAL: 7,
    OBSTACLE_SPAWN_VARIANCE: 2,
    OBSTACLE_SPAWN_MULTIPLY_EACH_LEVEL: .95,
    OBSTACLE_SPEED_MULTIPLY_EACH_LEVEL: 1.25,
    OBSTACLE_SPEED_NORMAL: 75,
    OBSTACLE_SPEED_FAST: 150,
    PLAYER: {
      width: 10,
      height: 4
    },
    PLAYER_MAX_SPEED: 90,
    PLAYER_ACCELERATION: 3,
    PLAYER_MAX_ROTATION: 25,
    PLAYER_PULSE_TIME: 3,
    PLAYER_PRESENT_X: 9,
    PLAYER_PRESENT_Y: 8.5,
    TOTAL_PRESENTS: 8,
    PRESENT_INITIAL_VELOCITY: 0,
    PRESENT_GRAVITY: 200,
    PRESENT: {
      width: 2.5,
      height: 2.5
    },
    TIME_BETWEEN_PRESENTS: .5,
    CLOUD_SPAWN_INTERVAL: 4.5,
    CLOUD_SPAWN_VARIANCE: 2.5,
    LEVEL_DURATION: 14,
    BUILDINGS: [{
      width: 26,
      height: 12,
      originalwidth: 13.9,
      xgap: 3,
      ygap: 5,
      chimneys: [{
        type: 100,
        xpos: 22.9,
        ypos: .1
      }]
    }, {
      width: 21,
      height: 12,
      originalwidth: 26.5,
      xgap: 3,
      ygap: 5,
      chimneys: [{
        type: 200,
        xpos: 18.8,
        ypos: .5
      }]
    }, {
      width: 25,
      height: 12,
      originalwidth: 31.6,
      xgap: 3,
      ygap: 4,
      chimneys: [{
        type: 100,
        xpos: 18.7,
        ypos: .2
      }]
    }, {
      width: 27,
      height: 11,
      originalwidth: 32.9,
      xgap: 3,
      ygap: 6,
      chimneys: [{
        type: 200,
        xpos: 3.5,
        ypos: 1.2
      }]
    }, {
      width: 24,
      height: 20,
      originalwidth: 31.8,
      xgap: 4,
      ygap: 2,
      chimneys: [{
        type: 100,
        xpos: 4,
        ypos: .1
      }]
    }, {
      width: 24,
      height: 9,
      originalwidth: 31.6,
      xgap: 4,
      ygap: 7,
      chimneys: [{
        type: 100,
        xpos: 5.4,
        ypos: .2
      }]
    }, {
      width: 24,
      height: 9,
      originalwidth: 32,
      xgap: 4,
      ygap: 6,
      chimneys: [{
        type: 300,
        xpos: 4.5,
        ypos: .2
      }]
    }, {
      width: 26,
      height: 14,
      originalwidth: 32.2,
      xgap: 3,
      ygap: 7,
      chimneys: [{
        type: 100,
        xpos: 4.1,
        ypos: .1
      }]
    }, {
      width: 24,
      height: 13,
      originalwidth: 31.9,
      xgap: 4,
      ygap: 5,
      chimneys: [{
        type: 300,
        xpos: 6.3,
        ypos: 2.2
      }, {
        type: 200,
        xpos: 21.8,
        ypos: .2
      }]
    }, {
      width: 25,
      height: 34,
      originalwidth: 31.8,
      xgap: 3,
      ygap: 9,
      chimneys: [{
        type: 200,
        xpos: 13.8,
        ypos: 2.5
      }, {
        type: 300,
        xpos: 25,
        ypos: .1
      }]
    }, {
      width: 27,
      height: 15,
      originalwidth: 34.5,
      xgap: 4,
      ygap: 10,
      chimneys: [{
        type: 300,
        xpos: 7.1,
        ypos: 3.5
      }, {
        type: 200,
        xpos: 23.8,
        ypos: 0
      }]
    }, {
      width: 25,
      height: 9,
      originalwidth: 32.4,
      xgap: 4,
      ygap: 10,
      chimneys: [{
        type: 100,
        xpos: 13.7,
        ypos: .1
      }]
    }, {
      width: 27,
      height: 10,
      originalwidth: 33,
      xgap: 3,
      ygap: 6,
      chimneys: [{
        type: 200,
        xpos: 3.7,
        ypos: .7
      }]
    }, {
      width: 25,
      height: 45,
      originalwidth: 31.7,
      xgap: 3,
      ygap: 8,
      chimneys: [{
        type: 200,
        xpos: 4.9,
        ypos: 1.8
      }, {
        type: 300,
        xpos: 19.4,
        ypos: .2
      }, {
        type: 300,
        xpos: 25,
        ypos: .2
      }]
    }, {
      width: 26,
      height: 16,
      originalwidth: 31.8,
      xgap: 3,
      ygap: 5,
      chimneys: [{
        type: 200,
        xpos: 7.8,
        ypos: .1
      }]
    }, {
      width: 26,
      height: 13,
      originalwidth: 32.7,
      xgap: 3,
      ygap: 5,
      chimneys: [{
        type: 100,
        xpos: 13.6,
        ypos: .1
      }]
    }, {
      width: 25,
      height: 34,
      originalwidth: 31.5,
      xgap: 3,
      ygap: 14,
      chimneys: [{
        type: 300,
        xpos: 16.6,
        ypos: 10.2
      }, {
        type: 200,
        xpos: 23,
        ypos: 8.8
      }]
    }, {
      width: 26,
      height: 9,
      originalwidth: 31.9,
      xgap: 3,
      ygap: 7,
      chimneys: [{
        type: 100,
        xpos: 23,
        ypos: .2
      }]
    }, {
      width: 26,
      height: 9,
      originalwidth: 32.3,
      xgap: 3,
      ygap: 6,
      chimneys: [{
        type: 300,
        xpos: 25,
        ypos: 1
      }]
    }, {
      width: 26,
      height: 4,
      originalwidth: 32,
      xgap: 3,
      ygap: 7,
      chimneys: [{
        type: 100,
        xpos: 23,
        ypos: .2
      }]
    }, {
      width: 25,
      height: 34,
      originalwidth: 31.2,
      xgap: 3,
      ygap: 7,
      chimneys: [{
        type: 200,
        xpos: 3.8,
        ypos: .2
      }, {
        type: 200,
        xpos: 10.1,
        ypos: .2
      }, {
        type: 300,
        xpos: 16.4,
        ypos: 4
      }]
    }, {
      width: 26,
      height: 12,
      originalwidth: 32.3,
      xgap: 3,
      ygap: 6,
      chimneys: [{
        type: 200,
        xpos: 10.2,
        ypos: .1
      }]
    }, {
      width: 26,
      height: 9,
      originalwidth: 32.3,
      xgap: 3,
      ygap: 6,
      chimneys: [{
        type: 100,
        xpos: 23.3,
        ypos: 1.1
      }]
    }, {
      width: 26,
      height: 16,
      originalwidth: 32,
      xgap: 3,
      ygap: 8,
      chimneys: [{
        type: 100,
        xpos: 22.2,
        ypos: .2
      }]
    }, {
      width: 9,
      height: 32,
      originalwidth: 16.7,
      xgap: 4,
      ygap: 0,
      chimneys: []
    }, {
      width: 7,
      height: 26,
      originalwidth: 16.6,
      xgap: 5,
      ygap: 0,
      chimneys: []
    }],
    CHIMNEY_TYPES: {
      100: {
        width: 5
      },
      200: {
        width: 4
      },
      300: {
        width: 3
      }
    },
    OBSTACLE_TYPES: [{
      css: "animated balloon",
      points: 100,
      presents: 10,
      yVariance: 20,
      fast: !1,
      width: 5,
      height: 8,
      xgap: 2,
      ygap: 0
    }, {
      css: "beam",
      points: 500,
      presents: 30,
      yVariance: 20,
      fast: !0,
      width: 7,
      height: 63,
      xgap: 2,
      ygap: 0,
      margintop: -63
    }, {
      css: "box",
      points: 600,
      presents: 30,
      yVariance: 20,
      fast: !1,
      width: 7,
      height: 75.5,
      xgap: 2,
      ygap: 0,
      margintop: -75.5
    }, {
      css: "animated bird",
      points: 100,
      presents: 10,
      yVariance: 20,
      fast: !1,
      width: 9,
      height: 5,
      xgap: 0,
      ygap: 3
    }, {
      css: "animated frisbee",
      points: 200,
      presents: 20,
      yVariance: 30,
      fast: !0,
      width: 9,
      height: 4,
      xgap: 0,
      ygap: 0
    }],
    ITEM_TYPES: [{
      css: "candy",
      weight: 6,
      fast: !1,
      score: 200,
      time: 0,
      width: 6,
      height: 6,
      xgap: 0,
      ygap: 0
    }, {
      css: "time",
      weight: 4,
      fast: !0,
      score: 0,
      time: 5,
      width: 6,
      height: 6,
      xgap: 0,
      ygap: 0
    }]
  };
  var e = {
    Entity: function () {
      this.children = [];
      this.parent = null;
      this.y = this.x = this.screenY = this.screenX = 0;
    }
  };
  e.Entity.prototype.walk = function (a) {
    a(this);
    for (var c = 0, d; d = this.children[c]; c++) d.walk(a);
  };
  e.Entity.prototype.addChild = function (a) {
    a.parent = this;
    this.children.push(a);
    a.updateScreenPos_();
  };
  e.Entity.prototype.removeChild = function (a) {
    var c = this.children.indexOf(a);
    0 <= c && (this.children.splice(c, 1), a.parent = null, a.updateScreenPos_());
  };
  e.Entity.prototype.setPos = function (a, c) {
    this.x = a;
    this.y = c;
    this.updateScreenPos_();
  };
  e.Entity.prototype.setX = function (a) {
    this.setPos(a, this.y);
  };
  e.Entity.prototype.setY = function (a) {
    this.setPos(this.x, a);
  };
  e.Entity.prototype.updateScreenPos_ = function () {
    this.parent ? (this.screenX = this.parent.screenX + this.x, this.screenY = this.parent.screenY + this.y) : (this.screenX = this.x, this.screenY = this.y);
    for (var a = 0, c; c = this.children[a]; a++) c.updateScreenPos_();
  };
  e.Entity.prototype.onFrame = function () {};
  e.shared = {};
  e.shared.pools = function () {
    const a = [];
    return {
      mixin(c, d) {
        function f(a) {
          d.fixed || 0 !== c.pool_.length || c.pool(a);
        }
        function g(a, c) {
          a && a.onInit.apply(a, Array.prototype.slice.call(c, 1));
          return a || null;
        }
        d = d || {};
        c.pool_ = [];
        a.push(c);
        c.pop = function (a) {
          f(a);
          const d = c.pool_.shift();
          return g(d, arguments);
        };
        c.popRandom = function (a) {
          f(a);
          const d = Math.floor(Math.random() * c.pool_.length),
            k = c.pool_[d],
            l = c.pool_.pop();
          l && k !== l && (c.pool_[d] = l);
          return g(k, arguments);
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
  e.shared.pools.PoolType = function () {};
  e.shared.pools.PoolType.onInit = function () {};
  e.shared.pools.PoolType.onDispose = function () {};
  e.shared.pools.PoolType.remove = function () {};
  e.Chimney = function (a, c, d, f) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="chimney">');
    this.elem.addClass("position-" + d);
    this.elem.addClass("chimney-" + f);
    this.scoreElem = $('<div class="score score-' + f + ' hidden">');
    this.scoreElem.appendTo(this.elem);
    this.type = f;
    this.width = b.CHIMNEY_TYPES[String(this.type)].width;
    this.height = 1;
    this.isHit = this.dead = !1;
    this.elem.appendTo(c);
  };
  e.Chimney.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Chimney);
  e.Chimney.prototype.onInit = function () {
    this.elem.removeClass("hidden");
    this.scoreElem.removeClass("pop");
    this.scoreElem.addClass("hidden");
    this.isHit = this.dead = !1;
  };
  e.Chimney.prototype.onDispose = function () {
    this.dead = !0;
  };
  e.Chimney.prototype.onFrame = function () {};
  e.Chimney.prototype.hit = function () {
    this.isHit = !0;
    this.scoreElem.removeClass("hidden");
    this.scoreElem.addClass("pop");
    this.game.caughtItem(this.type * (this.game.level + 1), 0);
    window.santaApp.fire("sound-trigger", "glider_chimney_hit");
  };
  e.Building = function (a) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="building hidden"></div>');
    this.chimneysElem = $('<div class="chimneys">').appendTo(this.elem);
    this.type = Math.floor(Math.random() * b.TOTAL_BUILDINGS);
    this.info = b.BUILDINGS[this.type];
    this.width = this.info.width;
    this.height = this.info.height;
    this.originalwidth = this.info.originalwidth;
    this.xgap = this.info.xgap;
    this.ygap = this.info.ygap;
    this.createChimneys_();
    this.elem.addClass("building-" + (this.type + 1));
    this.game.buildingsElem.append(this.elem);
    this.setPos(this.game.sceneSize.width, this.game.sceneSize.height - this.height);
  };
  e.Building.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Building);
  e.Building.prototype.onInit = function () {
    this.elem.removeClass("hidden");
    this.dead = !1;
    this.children.forEach(function (a) {
      a.onInit();
    });
    this.setPos(this.game.sceneSize.width, this.game.sceneSize.height - this.height);
  };
  e.Building.prototype.onFrame = function (a) {
    this.setPos(this.x - this.game.buildingSpeed * a, this.game.sceneSize.height - this.height);
    this.screenX > -this.originalwidth ? this.elem.css("transform", "translate3d(" + this.x + "em, 0, 0)") : this.remove();
  };
  e.Building.prototype.hit = function () {
    this.game.player.hit();
    window.santaApp.fire("sound-trigger", "glider_hit");
  };
  e.Building.prototype.onDispose = function () {
    this.elem.css("transform", "");
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  e.Building.prototype.createChimneys_ = function () {
    if (0 < this.info.chimneys.length) for (var a = this.info.chimneys, c = 0, d = a.length; c < d; c++) {
      var f = new e.Chimney(this.game, this.chimneysElem, c, a[c].type);
      f.setPos(a[c].xpos, a[c].ypos);
      this.addChild(f);
    }
  };
  e.Cloud = function (a) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="cloud hidden"></div>');
    this.dead = !1;
    this.size = 1;
    this.speed = 60;
    this.setPos(-200, 0);
    this.game.cloudsElem.append(this.elem);
  };
  e.Cloud.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Cloud);
  e.Cloud.prototype.onInit = function () {
    this.elem.removeClass("hidden");
    this.dead = !1;
    var a = Math.floor(3 * Math.random());
    this.size = 1 - .25 * a;
    this.speed = 120 - 30 * a;
    this.setPos(this.game.sceneSize.width, Math.random() * this.game.sceneSize.height * .6);
    this.elem.css("top", this.y + "em");
  };
  e.Cloud.prototype.onFrame = function (a) {
    this.setX(this.x - this.speed / 10 * a);
    -18 < this.screenX ? this.elem.css("transform", "translate3d(" + this.x + "em, 0, 0) scale(" + this.size + ")") : this.remove();
  };
  e.Cloud.prototype.onDispose = function () {
    this.elem.css("transform", "");
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  e.Collision = function (a) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="collision hidden" />');
    this.animationElem = $('<div class="hit-cloud" />');
    this.animationElem.appendTo(this.elem);
    a.collisionsElem.append(this.elem);
  };
  e.Collision.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Collision);
  e.Collision.prototype.onInit = function (a, c) {
    var d = this;
    this.elem.removeClass("hidden");
    this.setPos(a + 5, c + 2);
    this.elem.css("transform", "translate3d(" + this.x + "em, " + this.y + "em, 0)");
    this.animationElem.addClass("active");
    this.animationElem.off();
    this.animationElem.one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd", function () {
      d.animationElem.removeClass("active");
      d.remove();
    });
    this.dead = !1;
  };
  e.Collision.prototype.remove = function () {
    e.Collision.push(this);
  };
  e.Collision.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  e.Collision.prototype.onFrame = function () {};
  e.shared.utils = function () {
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
      animWithClass: function (a, d, f) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(d);
          const c = () => {
            a.classList.remove(d);
            a.removeEventListener("animationend", c);
            a.removeEventListener("transitionend", c);
            f && (f(), f = null);
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
        let f;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = c.getPropertyValue(a + "transform");
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
        } catch (k) {
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
  e.Controls = function (a) {
    this.game = a;
    this.player = this.game.player;
    this.tutorial = this.game.tutorial;
    this.currentOrientation = window.orientation;
    this.accelY = this.accelX = 0;
    this.isDesktopish = !e.shared.utils.touchEnabled;
    this.keys = {};
    a = this.handle.bind(this);
    $(window).on("keydown.glider keyup.glider", a).on("deviceorientation.glider", a).on("devicemotion.glider", a).on("touchend.glider", a);
  };
  e.Controls.prototype.handle = function (a) {
    if (this.game.isPlaying) this["on" + a.type[0].toUpperCase() + a.type.slice(1)](a);
  };
  e.Controls.prototype.arrowPressed_ = !1;
  e.Controls.prototype.spacePressed_ = !1;
  e.Controls.prototype.tilt = 0;
  e.Controls.prototype.onDeviceorientation = function (a) {
    a = a.originalEvent;
    if (null != a.gamma && !this.isDesktopish) {
      var c = a.gamma;
      window.orientation && (c = window.orientation / 90 * a.beta);
      this.tilt = c.toFixed(1);
      !this.tiltStarted && 2 < this.tilt && (this.tutorial.off("device-tilt"), this.tiltStarted = !0);
    }
  };
  e.Controls.prototype.onDevicemotion = function (a) {
    a = a.originalEvent;
    this.accelX = a.accelerationIncludingGravity.x;
    this.accelY = a.accelerationIncludingGravity.y;
  };
  e.Controls.prototype.reset = function () {};
  e.Controls.prototype.onFrame = function () {
    var a = 0,
      c = 0;
    this.isDesktopish ? (this.keys.left && (a -= .6), this.keys.right && (a += .6), this.keys.up && (c -= .6), this.keys.down && (c += .6), this.keys.space && this.player.dropPresent()) : 90 == window.orientation ? 1 < this.accelY && 1 < this.accelX ? (a -= .5, c -= .5) : -1 > this.accelY && 1 < this.accelX ? (a += .5, c -= .5) : -1 > this.accelY && -1 > this.accelX ? (a += .5, c += .5) : 1 < this.accelY && -1 > this.accelX ? (a -= .5, c += .5) : 1 < this.accelY ? a -= .5 : -1 > this.accelY ? a += .5 : -1 > this.accelX ? c += .5 : 1 < this.accelX && (c -= .5) : -90 == window.orientation && (2 < this.accelY && 2 < this.accelX ? (a += .5, c += .5) : -2 > this.accelY && 2 < this.accelX ? (a -= .5, c += .5) : -2 > this.accelY && -2 > this.accelX ? (a -= .5, c -= .5) : 2 < this.accelY && -2 > this.accelX ? (a += .5, c -= .5) : 2 < this.accelY ? a += .5 : -2 > this.accelY ? a -= .5 : -2 > this.accelX ? c -= .5 : 2 < this.accelX && (c += .5));
    var d = a * a + c * c;
    1 < d && (d = Math.sqrt(d), a /= d, c /= d);
    this.player.inputVector.x = a;
    this.player.inputVector.y = c;
  };
  e.Controls.prototype.onTouchend = function () {
    this.isDesktopish || this.player.dropPresent();
  };
  e.Controls.prototype.onKeydown = function (a) {
    a.keyCode in e.Controls.KEY_CODES_ && (this.keys[e.Controls.KEY_CODES_[a.keyCode]] = !0);
    !this.arrowPressed_ && (this.keys.left || this.keys.right || this.keys.up || this.keys.down) && (this.game.tutorial.off("keys-arrows"), this.game.tutorial.off("spacenav-arrows"), this.arrowPressed_ = !0);
    !this.spacePressed_ && this.keys.space && (this.game.tutorial.off("keys-space"), this.game.tutorial.off("spacenav-space"), this.spacePressed_ = !0);
  };
  e.Controls.prototype.onKeyup = function (a) {
    a.keyCode in e.Controls.KEY_CODES_ && (this.keys[e.Controls.KEY_CODES_[a.keyCode]] = !1);
  };
  e.Controls.KEY_CODES_ = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  e.Item = function (a) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="item hidden">');
    this.scoreElem = $('<div class="item-text">').appendTo(this.elem);
    this.subElem = $('<div class="item-orb">').appendTo(this.elem);
    $('<div class="item-back">').appendTo(this.subElem);
    $('<div class="item-front">').appendTo(this.subElem);
    this.isHit = this.dead = !1;
    this.type = null;
    this.speed = 0;
    this.game.itemsElem.append(this.elem);
  };
  e.Item.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Item);
  e.Item.prototype.onInit = function () {
    this.elem.removeClass("hidden");
    this.subElem.show();
    this.scoreElem.attr("class", "item-text");
    this.scoreElem[0].textContent = "";
    this.isHit = this.dead = !1;
    this.type = e.Item.pickRandomType();
    this.width = this.type.width;
    this.height = this.type.height;
    this.xgap = this.type.xgap;
    this.ygap = this.type.ygap;
    this.elem.attr("class", "item " + this.type.css);
    this.speed = this.type.fast ? b.ITEM_SPEED_FAST : b.ITEM_SPEED_NORMAL;
    this.speed *= Math.pow(b.ITEM_SPEED_MULTIPLY_EACH_LEVEL, this.game.level);
    this.setPos(this.game.sceneSize.width, Math.random() * this.game.sceneSize.height * .4);
    this.elem.css("top", this.y + "em");
  };
  e.Item.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  e.Item.prototype.onFrame = function (a) {
    this.setX(this.x - this.speed * a);
    this.screenX > -this.width ? this.elem.css("transform", "translate3d(" + this.x + "em, 0, 0)") : this.remove();
  };
  e.Item.prototype.hit = function () {
    this.isHit = !0;
    this.game.caughtItem(this.type.score * (this.game.level + 1), this.type.time);
    if (0 < this.type.time && 0 === this.type.score) {
      window.santaApp.fire("sound-trigger", "glider_clock");
      var a = 10 <= this.type.time ? "+00:" + this.type.time : "+00:0" + this.type.time;
    } else window.santaApp.fire("sound-trigger", "generic_score"), a = this.type.score;
    this.subElem.hide();
    this.scoreElem.attr("class", "item-score")[0].textContent = a;
  };
  e.Item.calculateScore_ = function (a, c) {
    return (c.fast ? b.ITEM_SCORE_FAST : b.ITEM_SCORE_NORMAL) * (a + 1);
  };
  e.Item.calculateTime_ = function (a, c) {
    return c.fast ? b.ITEM_TIME_FAST : b.ITEM_TIME_NORMAL;
  };
  e.Item.pickRandomType = function () {
    for (var a = Math.random() * e.Item.TOTAL_ITEM_WEIGHT_, c = 0, d; (d = b.ITEM_TYPES[c]) && !(a -= d.weight, 0 > a); c++);
    return d;
  };
  e.Item.TOTAL_ITEM_WEIGHT_ = b.ITEM_TYPES.reduce(function (a, c) {
    return a + c.weight;
  }, 0);
  e.Obstacle = function (a) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="obstacle hidden">');
    this.subElem = $("<div>").appendTo(this.elem);
    this.dead = !1;
    this.type = null;
    this.speed = 0;
    this.animateBack = !1;
    this.game.obstaclesElem.append(this.elem);
  };
  e.Obstacle.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Obstacle);
  e.Obstacle.prototype.onInit = function () {
    this.elem.removeClass("hidden");
    this.subElem[0].textContent = "";
    this.dead = !1;
    this.type = e.Obstacle.pickRandomType();
    this.width = this.type.width;
    this.height = this.type.height;
    this.xgap = this.type.xgap;
    this.ygap = this.type.ygap;
    this.marginTop = 0;
    this.type.margintop && (this.marginTop = this.type.margintop);
    this.elem.attr("class", "obstacle " + this.type.css);
    this.speed = this.type.fast ? b.ITEM_SPEED_FAST : b.ITEM_SPEED_NORMAL;
    this.speed *= Math.pow(b.OBSTACLE_SPEED_MULTIPLY_EACH_LEVEL, this.game.level);
    this.setPos(this.game.sceneSize.width, Math.random() * this.game.sceneSize.height * .4 + this.marginTop);
    this.yVariance = 0;
    this.elem.css("top", this.y + "em");
  };
  e.Obstacle.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  e.Obstacle.prototype.onFrame = function (a) {
    this.setX(this.x - this.speed * a);
    this.animateBack ? (this.yVariance -= this.speed * a, 0 >= this.yVariance && (this.animateBack = !1)) : (this.yVariance += this.speed * a, this.yVariance >= this.type.yVariance && (this.animateBack = !0));
    this.screenX > -this.type.width ? this.elem.css("transform", "translate3d(" + this.x + "em, " + this.yVariance + "em, 0)") : (this.elem.css("transform", ""), this.remove());
  };
  e.Obstacle.prototype.hit = function () {
    var a = this;
    e.Item.calculateScore_(this.game.level, this.type);
    this.game.player.hit();
    window.santaApp.fire("sound-trigger", "glider_hit");
    "animated balloon" == this.type.css && (this.elem.addClass("pop"), setTimeout(function () {
      a.elem.removeClass("pop");
      a.elem.css("transform", "");
      a.remove();
    }, 500));
  };
  e.Obstacle.calculateScore_ = function (a, c) {
    return (c.fast ? b.ITEM_SCORE_FAST : b.ITEM_SCORE_NORMAL) * (a + 1);
  };
  e.Obstacle.pickRandomType = function () {
    return b.OBSTACLE_TYPES[Math.floor(Math.random() * b.OBSTACLE_TYPES.length)];
  };
  e.utils = {};
  e.utils.restartAnimation = function (a) {
    a.find(".animated").addClass("resizing");
    setTimeout(function () {
      a.find(".animated").removeClass("resizing");
    }, 100);
  };
  e.Player = function (a, c) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $(c).css({
      left: "0",
      top: "0"
    });
    this.inputVector = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: new e.shared.utils.SmartValue(),
      y: new e.shared.utils.SmartValue()
    };
    this.hasPresent = !0;
    this.isHit = !1;
    this.elem.addClass("animated");
    this.reset();
  };
  e.Player.prototype = Object.create(e.Entity.prototype);
  e.Player.prototype.reset = function () {
    this.setPos(0, .5 * this.game.sceneSize.height);
    this.velocity.x.value = 0;
    this.shake = this.velocity.y.value = 0;
    e.utils.restartAnimation(this.elem.parent());
    this.onFrame(0);
  };
  e.Player.prototype.onFrame = function (a) {
    var c = this.inputVector.x,
      d = this.inputVector.y,
      f = this.game.sceneSize.height - b.PLAYER.height,
      g = this.game.sceneSize.width - b.PLAYER.width;
    0 > this.screenY ? d = 1 : this.screenY > f && (d = -1);
    0 > this.screenX ? c = 1 : this.screenX > g && (c = -1);
    this.velocity.x.moveToTarget(c, a * b.PLAYER_ACCELERATION);
    this.velocity.y.moveToTarget(d, a * b.PLAYER_ACCELERATION);
    c = this.velocity.x.value * b.PLAYER_MAX_SPEED * a;
    d = this.velocity.y.value * b.PLAYER_MAX_SPEED * a;
    this.shake += a;
    this.setPos(this.x + c + Math.sin(3 * this.shake) * a, this.y + d + Math.sin(4 * this.shake) * a);
    this.elem.css("transform", "translate3D(" + this.x + "em, " + this.y + "em, 0) rotate(" + this.velocity.y.value * b.PLAYER_MAX_ROTATION + "deg)");
    this.checkCollisions_();
  };
  e.Player.prototype.hit = function () {
    if (!this.isHit) {
      var a = this,
        c = this.elem;
      this.isHit = !0;
      c.addClass("pulse crash");
      this.game.createCollision(this.screenX, this.screenY);
      setTimeout(function () {
        c.removeClass("crash");
      }, 700);
      setTimeout(function () {
        a.isHit = !1;
        c.removeClass("pulse");
      }, 1E3 * b.PLAYER_PULSE_TIME);
    }
  };
  e.Player.prototype.checkCollisions_ = function () {
    if (!this.isHit) {
      var a = this.screenX + 5,
        c = this.screenY + 5;
      this.game.forEachCollidable(function (d) {
        d.yVariance = d.yVariance || 0;
        a < d.screenX + d.xgap + d.width && a + b.PLAYER.width > d.screenX + d.xgap && c < d.screenY + d.ygap + d.yVariance + d.height && b.PLAYER.height + c > d.screenY + d.ygap + d.yVariance && d.hit();
      });
    }
  };
  e.Player.prototype.dropPresent = function () {
    if (this.hasPresent) {
      var a = this.elem,
        c = this;
      this.hasPresent = !1;
      a.addClass("drop");
      window.santaApp.fire("sound-trigger", "glider_presentdrop");
      setTimeout(function () {
        a.removeClass("drop");
        c.game.createPresent(c.screenX + b.PLAYER_PRESENT_X, c.screenY + b.PLAYER_PRESENT_Y);
      }, 200);
      setTimeout(function () {
        c.hasPresent = !0;
      }, 1E3 * b.TIME_BETWEEN_PRESENTS);
    }
  };
  e.Present = function (a) {
    e.Entity.call(this);
    this.game = a;
    this.elem = $('<div class="present hidden" />');
    this.elem.addClass("present-" + Math.ceil(Math.random() * b.TOTAL_PRESENTS));
    a.presentsElem.append(this.elem);
  };
  e.Present.prototype = Object.create(e.Entity.prototype);
  e.shared.pools.mixin(e.Present);
  e.Present.prototype.onInit = function (a, c) {
    this.elem.removeClass("hidden");
    this.setPos(a, c);
    this.elem.css("transform", "translate3d(" + this.x + "em, " + this.y + "em, 0)");
    this.dead = !1;
    this.velocity = b.PRESENT_INITIAL_VELOCITY;
  };
  e.Present.prototype.remove = function () {
    this.elem.addClass("hidden");
    e.Present.push(this);
  };
  e.Present.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  e.Present.prototype.onFrame = function (a) {
    this.screenY < this.game.sceneSize.height ? (this.velocity += b.PRESENT_GRAVITY * a, this.setY(this.y + this.velocity * a), this.elem.css("transform", "translate3d(" + this.x + "em, " + this.y + "em, 0)")) : this.remove();
    this.checkCollisions_();
  };
  e.Present.prototype.checkCollisions_ = function () {
    var a = this.screenX,
      c = this.screenY,
      d = this;
    this.game.forEachActiveChimney(function (f) {
      a < f.screenX + f.width && a + b.PRESENT.width > f.screenX && c < f.screenY + f.height && b.PRESENT.height + c > f.screenY && (d.elem.addClass("hidden"), d.remove(), f.hit());
    });
  };
  e.shared.Gameover = class {
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
  e.shared.Scoreboard = h;
  function m(a, c) {
    a = b ? b[a] : void 0;
    return +a === a ? a : c;
  }
  function h(a, c, d) {
    this.game = a;
    this.initialCountdown_ = m("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  h.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  h.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  h.prototype.onFrame = function (a) {
    this.countdown -= a;
    const c = Math.ceil(this.countdown);
    c !== this.lastSeconds && (this.lastSeconds = c, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = m("COUNTDOWN_FLASH", 10), a = c <= a && 0 !== c, this.losing !== a && (this.losing = a, 0 < c && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  h.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  h.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  h.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  h.prototype.announce_ = function () {
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
  e.shared.Tutorial = class {
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
  e.Game = function (a) {
    this.root = new e.Entity();
    this.elem = $(a);
    this.itemsElem = this.elem.find(".items");
    this.bgElem = this.elem.find(".bg");
    this.sceneElem = this.elem.find(".scene");
    this.cloudsElem = this.elem.find(".clouds");
    this.buildingsElem = this.elem.find(".buildings");
    this.obstaclesElem = this.elem.find(".obstacles");
    this.presentsElem = this.elem.find(".presents");
    this.collisionsElem = this.elem.find(".collisions");
    this.sceneSize = {
      width: 0,
      height: 0
    };
    this.hidden = this.paused = this.isPlaying = !1;
    this.isMobile = e.shared.utils.touchEnabled;
    this.scale = 1;
    this.watchSceneSize_();
    this.gameStartTime = +new Date();
    this.player = new e.Player(this, this.elem.find(".player"));
    this.scoreboard = new e.shared.Scoreboard(this, this.elem.find(".board"), b.TOTAL_LEVELS);
    this.gameoverView = new e.shared.Gameover(this, this.elem.find(".gameover"));
    this.tutorial = new e.shared.Tutorial("device-tilt keys-arrows keys-space spacenav-arrows spacenav-space");
    this.controls = new e.Controls(this);
    this.bgElem.addClass("frozen");
    this.player.elem.addClass("frozen");
    this.onFrame = this.onFrame.bind(this);
    this.preloadPools_();
  };
  e.Game.prototype.preloadPools_ = function () {
    e.Present.pool(this);
    e.Present.pool(this);
    e.Collision.pool(this);
    e.Collision.pool(this);
    for (var a = 0; 5 > a; a++) e.Item.pool(this);
    for (a = 0; 12 > a; a++) e.Obstacle.pool(this);
    for (a = 0; 20 > a; a++) e.Building.pool(this);
    for (a = 0; 20 > a; a++) e.Cloud.pool(this);
  };
  e.Game.prototype.start = function () {
    this.restart();
    this.tutorial.start();
  };
  e.Game.prototype.restart = function () {
    this.root.children.forEach(function (a) {
      a.remove();
    });
    this.root.children = [];
    this.bgElem.removeClass("frozen");
    this.player.elem.removeClass("frozen");
    this.bgElem.find(".sky").remove();
    this.bgElem.find(".mountains").remove();
    this.bgElem.find(".trees").remove();
    this.bgElem.prepend('<div class="sky"></div><div class="mountains"></div><div class="trees"></div>');
    this.level = 0;
    this.nextLevel = b.LEVEL_DURATION;
    this.buildingSpeed = b.BUILDING_START_SPEED;
    this.paused = !1;
    this.nextBuilding = this.nextCloud = this.nextObstacle = this.nextItem = 0;
    this.scoreboard.reset();
    this.player.reset();
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("sound-ambient", "glider_start");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "glider"
    });
    this.unfreezeGame();
  };
  e.Game.prototype.onFrame = function () {
    if (this.isPlaying) {
      var a = +new Date() / 1E3,
        c = a - this.lastFrame;
      this.lastFrame = a;
      this.controls.onFrame(c);
      this.player.onFrame(c);
      this.scoreboard.onFrame(c);
      this.updateItems_(c);
      this.updateObstacles_(c);
      this.updateBuildings_(c);
      this.updateClouds_(c);
      this.updateLevel_(c);
      var d = [];
      this.root.walk(function (a) {
        a.onFrame(c);
        a.dead && d.push(a);
      });
      a = 0;
      for (var f; f = d[a]; a++) f.parent.removeChild(f);
      this.requestId = window.requestAnimationFrame(this.onFrame);
    }
  };
  e.Game.prototype.setScale = function (a) {
    var c = b.BASE_FONT_SIZE * a;
    this.scale = a;
    this.pixelMultiplier = 1 / c;
    this.elem.css("font-size", c + "px");
    e.utils.restartAnimation(this.elem);
  };
  e.Game.prototype.updateItems_ = function (a) {
    this.nextItem -= a;
    0 < this.nextItem || (a = e.Item.pop(this), this.root.addChild(a), a = b.ITEM_SPAWN_VARIANCE * Math.pow(b.ITEM_SPAWN_MULTIPLY_EACH_LEVEL, this.level), this.nextItem = b.ITEM_SPAWN_INTERVAL * Math.pow(b.ITEM_SPAWN_MULTIPLY_EACH_LEVEL, this.level) - a / 2 + Math.random() * a);
  };
  e.Game.prototype.createPresent = function (a, c) {
    a = e.Present.pop(this, a, c);
    this.root.addChild(a);
  };
  e.Game.prototype.createCollision = function () {
    var a = e.Collision.pop(this, this.player.screenX, this.player.screenY);
    this.root.addChild(a);
  };
  e.Game.prototype.updateObstacles_ = function (a) {
    this.nextObstacle -= a;
    0 < this.nextObstacle || (a = e.Obstacle.pop(this), this.root.addChild(a), a = b.OBSTACLE_SPAWN_VARIANCE * Math.pow(b.OBSTACLE_SPAWN_MULTIPLY_EACH_LEVEL, this.level), this.nextObstacle = b.OBSTACLE_SPAWN_INTERVAL * Math.pow(b.OBSTACLE_SPAWN_MULTIPLY_EACH_LEVEL, this.level) - a / 2 + Math.random() * a);
  };
  e.Game.prototype.updateClouds_ = function (a) {
    this.nextCloud -= a;
    0 < this.nextCloud || (a = e.Cloud.pop(this), this.root.addChild(a), a = b.CLOUD_SPAWN_VARIANCE, this.nextCloud = b.CLOUD_SPAWN_INTERVAL - a / 2 + Math.random() * a);
  };
  e.Game.prototype.updateBuildings_ = function (a) {
    this.nextBuilding -= a;
    0 < this.nextBuilding || (a = e.Building.pop(this), this.root.addChild(a), this.nextBuilding = b.BUILDING_SPAWN_BASE + b.BUILDING_SPAWN_INTERVAL * Math.pow(b.BUILDING_SPAWN_MULTIPLY_EACH_LEVEL, this.level));
  };
  e.Game.prototype.updateLevel_ = function (a) {
    this.nextLevel -= a;
    0 < this.nextLevel || (this.level++, this.scoreboard.setLevel(this.level), this.buildingSpeed += b.BUILDING_SPEED_PER_LEVEL, this.nextLevel = b.LEVEL_DURATION);
  };
  e.Game.prototype.forEachCollidable = function (a) {
    this.root.walk(function (c) {
      (c instanceof e.Item && !c.isHit || c instanceof e.Obstacle || c instanceof e.Building) && a(c);
    });
  };
  e.Game.prototype.forEachActiveChimney = function (a) {
    this.root.walk(function (c) {
      c instanceof e.Chimney && !c.isHit && a(c);
    });
  };
  e.Game.prototype.caughtItem = function (a, c) {
    this.scoreboard.addScore(a);
    this.scoreboard.addTime(c);
  };
  e.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  e.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.isPlaying = !0, this.elem.removeClass("frozen"), this.lastFrame = +new Date() / 1E3, this.requestId = window.requestAnimationFrame(this.onFrame));
  };
  e.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverView.show();
    window.santaApp.fire("sound-trigger", "glider_game_over");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "glider",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  e.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  e.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  e.Game.prototype.watchSceneSize_ = function () {
    function a() {
      var a = d.width();
      980 > a ? a = g ? a / 980 * .75 : a / 980 : 1200 < a ? g ? a = 1 : (a /= 1200, a > b.MAX_SCALE && (a = b.MAX_SCALE)) : a = 1;
      f.setScale(a);
      c.height = f.px2em(d.height());
      c.width = f.px2em(d.width());
    }
    var c = this.sceneSize,
      d = this.bgElem,
      f = this,
      g = this.isMobile;
    a();
    $(window).on("resize.glider", a);
  };
  e.Game.prototype.px2em = function (a) {
    return a * this.pixelMultiplier;
  };
  e.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "glider",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".glider");
    $(document).off(".glider");
    this.elem.off(".glider");
    this.tutorial.dispose();
    e.Cloud.pool_ = [];
    e.Item.pool_ = [];
    e.Obstacle.pool_ = [];
    e.Building.pool_ = [];
  };
  _globalExport = e.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('glider_load_sounds');
sceneApi.preload.images('img/bg-mountains.svg', 'img/bg-tile-trees.svg', 'img/cloud.svg', 'img/hit-beam.svg', 'img/hit-box.svg', 'img/hit-fireworks-center.svg', 'img/hit-fireworks-spark.svg', 'img/hit-house-01.svg', 'img/hit-house-02.svg', 'img/hit-house-03.svg', 'img/hit-house-04.svg', 'img/hit-house-05.svg', 'img/hit-house-06.svg', 'img/hit-house-07.svg', 'img/hit-house-08.svg', 'img/hit-house-09.svg', 'img/hit-house-10.svg', 'img/hit-house-11.svg', 'img/hit-house-12.svg', 'img/hit-house-13.svg', 'img/hit-house-14.svg', 'img/hit-house-15.svg', 'img/hit-house-16.svg', 'img/hit-house-17.svg', 'img/hit-house-18.svg', 'img/hit-house-19.svg', 'img/hit-house-20.svg', 'img/hit-house-21.svg', 'img/hit-house-22.svg', 'img/hit-house-23.svg', 'img/hit-house-23.svg', 'img/hit-tree-1.svg', 'img/hit-tree-2.svg', 'img/logo.svg', 'img/orb-santa-back.svg', 'img/orb-santa-front.svg', 'img/orb-snow-back.svg', 'img/orb-snow-front.svg', 'img/orb-time-back.svg', 'img/orb-time-front.svg', 'img/pin-elf-glider.svg', 'img/points-100.svg', 'img/points-200.svg', 'img/points-300.svg', 'img/present-01.svg', 'img/present-02.svg', 'img/present-03.svg', 'img/present-04.svg', 'img/present-05.svg', 'img/present-06.svg', 'img/present-07.svg', 'img/present-08.svg', 'img/stars-tile.svg', 'img/treat-candy.svg');
const game = new Game(document.getElementById('module-glider'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  sound: [],
  orientation: 'landscape',
  tilt: true
});
sceneApi.ready(async () => {
  game.start();
});