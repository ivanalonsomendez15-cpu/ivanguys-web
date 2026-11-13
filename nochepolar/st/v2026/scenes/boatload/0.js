import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var d = {
    INITIAL_COUNTDOWN: 60,
    TIME_PER_BOAT: 2,
    TOTAL_LEVELS: 10,
    SCORE_BOAT: 50,
    BOAT_START_SPEED: 50,
    BOAT_SPEED_PER_LEVEL: 10,
    BOAT_SPAWN_INTERVAL: 7,
    BOAT_SPAWN_VARIANCE: 2,
    BOAT_SPAWN_MULTIPLY_EACH_LEVEL: 1,
    BOAT_SPAWN_BASE: .5,
    BOAT_X: 850,
    BOAT_HEIGHT_SMALL: 246,
    BOAT_WIDTH_LARGE: 90,
    BUBBLE_SPAWN_INTERVAL: .13,
    BUBBLE_SPAWN_VARIANCE: .05,
    ICEBERG_START_SPEED: 60,
    ICEBERG_SPEED_PER_LEVEL: 5,
    ICEBERG_SPAWN_INTERVAL: 3,
    ICEBERG_SPAWN_VARIANCE: 2,
    ICEBERG_SPAWN_MULTIPLY_EACH_LEVEL: 1,
    ICEBERG_SPAWN_BASE: .5,
    ICEBERG_X: 500,
    ICEBERG_X_VARIANCE: 250,
    PRESENT_INITIAL_VELOCITY: 400,
    PRESENT_WIDTH: 20,
    PRESENT_START_X: 166,
    PRESENT_END_X: 830,
    TIME_BETWEEN_PRESENTS: .5,
    COUNTDOWN_TRACK_LENGTH: 60,
    COUNTDOWN_TRACK_MAX_X: 150,
    COUNTDOWN_FLASH: 10,
    PLAYER_MAX_SPEED: 750,
    PLAYER_CENTER: 79,
    LEVEL_DURATION: 21,
    TUTORIAL_SPACE_TIMEOUT: 5E3,
    TUTORIAL_ARROW_TIMEOUT: 3E3,
    BOATS: [{
      css: "boat--1",
      height: 195,
      width: 89,
      speed: .8,
      sound: "bl_score_yellow"
    }, {
      css: "boat--2",
      height: 164,
      width: 81,
      speed: 1,
      sound: "bl_score_red"
    }, {
      css: "boat--3",
      height: 173,
      width: 81,
      speed: 1.2,
      sound: "bl_score_red"
    }],
    ICEBERGS: [{
      css: "iceberg--1",
      height: 162,
      width: 98,
      speed: .9
    }, {
      css: "iceberg--2",
      height: 57,
      width: 49,
      speed: 1.4
    }, {
      css: "iceberg--3",
      height: 120,
      width: 111,
      speed: .8
    }, {
      css: "iceberg--4",
      height: 73,
      width: 64,
      speed: 1.3
    }, {
      css: "iceberg--5",
      height: 124,
      width: 95,
      speed: 1.1
    }, {
      css: "iceberg--6",
      height: 87,
      width: 84,
      speed: 1.3
    }]
  };
  var f = {
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
      if ("string" === typeof a) for (var c = 0; c < a.length; c++) b ^= a.charCodeAt(c), b = Math.imul(b, 16777619);else b = Math.imul(b ^ (a | 0), 16777619);
      b = Math.imul(b ^ b >>> 16, 2246822507);
      b = Math.imul(b ^ b >>> 13, 3266489909);
      return (b ^ b >>> 16) >>> 0;
    },
    setSeed: function (a) {
      a = f.hashSeed(a);
      f.generator_ = f.mulberry32(a);
    },
    random: function () {
      f.generator_ || f.setSeed(Math.floor(1E6 * Math.random()));
      return f.generator_();
    }
  };
  window.Random = f;
  var g = {
    shared: {}
  };
  g.shared.pools = function () {
    const a = [];
    return {
      mixin(b, c) {
        function e(a) {
          c.fixed || 0 !== b.pool_.length || b.pool(a);
        }
        function l(a, b) {
          a && a.onInit.apply(a, Array.prototype.slice.call(b, 1));
          return a || null;
        }
        c = c || {};
        b.pool_ = [];
        a.push(b);
        b.pop = function (a) {
          e(a);
          const c = b.pool_.shift();
          return l(c, arguments);
        };
        b.popRandom = function (a) {
          e(a);
          const c = Math.floor(Math.random() * b.pool_.length),
            p = b.pool_[c],
            x = b.pool_.pop();
          x && p !== x && (b.pool_[c] = x);
          return l(p, arguments);
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
  g.shared.pools.PoolType = function () {};
  g.shared.pools.PoolType.onInit = function () {};
  g.shared.pools.PoolType.onDispose = function () {};
  g.shared.pools.PoolType.remove = function () {};
  function h(a) {
    this.game = a;
    this.elem = $('<div class="boat hidden "></div>');
    this.game.boatsElem.append(this.elem);
  }
  g.shared.pools.mixin(h);
  h.prototype.onInit = function (a) {
    this.elem.removeClass("boat--1 boat--2 boat--3 hidden hit");
    this.dead = !1;
    this.nextBubble = this.hitNumber = 0;
    this.elem.addClass(a.css);
    this.height = a.height;
    this.width = a.width;
    this.speed = a.speed;
    this.sound = a.sound;
    this.bubbleVariance = d.BUBBLE_SPAWN_VARIANCE;
    this.bubbleInterval = d.BUBBLE_SPAWN_INTERVAL - this.bubbleVariance / 2;
    a = this.game.viewElem[0].getBoundingClientRect().top * (1 / this.game.scale);
    this.y = this.game.sceneSize.height - a;
    this.elem.css({
      top: -this.height,
      left: d.BOAT_X - this.width / 2
    });
    this.draw();
  };
  h.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  h.prototype.draw = function () {
    this.elem.css("transform", "translateY(" + (this.y + this.height) + "px) translateZ(0)");
  };
  h.prototype.onFrame = function (a) {
    this.y -= this.game.boatSpeed * this.speed * a;
    this.y > -this.height ? this.draw() : h.push(this);
    this.nextBubble -= a;
    0 >= this.nextBubble && (k.pop(this.game, 10 * f.random() - 5, this.y + this.height - 6, this.speed), this.nextBubble = this.bubbleInterval + f.random() * this.bubbleVariance);
  };
  h.prototype.hit = function (a, b, c) {
    m.push(a);
    a = d.TIME_PER_BOAT;
    0 < this.hitNumber && (a /= 2);
    var e = h.calculateScore_(this.game.level, ++this.hitNumber);
    this.game.hitBoat(e, a, b, c);
    window.santaApp.fire("sound-trigger", this.sound);
  };
  h.calculateScore_ = function (a, b) {
    var c = d.SCORE_BOAT;
    return (c + a * c) * Math.pow(2, Math.min(3, b));
  };
  h.prototype.getHitbox = function () {
    return {
      x: d.BOAT_X,
      y: this.y,
      center: this.height / 2 - 10
    };
  };
  function k(a) {
    this.game = a;
    this.elem = $('<div class="bubble hidden"></div>');
    this.elem[0].bubble = this;
    a = Math.ceil(6 * f.random());
    this.elem.addClass("bubble--" + a);
    this.game.bubblesElem.append(this.elem);
  }
  g.shared.pools.mixin(k);
  k.prototype.onInit = function (a, b, c) {
    this.elem.addClass("animate").css({
      animation: "bubble-left " + c / 12 * 1E3 + "ms",
      top: b,
      left: a,
      opacity: 0
    }).removeClass("hidden");
  };
  k.prototype.onDispose = function () {
    this.elem.addClass("hidden").removeClass("animate").css({
      top: -100,
      animation: "",
      opacity: 1
    });
  };
  function n(a) {
    this.game = a;
    this.player = this.game.player;
    this.tutorial = this.game.tutorial;
    this.keyDownCounter = 0;
    this.currentTouchId = null;
    a = this.handle.bind(this);
    this.game.elem.on("touchstart.boatload touchmove.boatload touchend.boatload", a);
    $(window).on("keydown.boatload keyup.boatload", a);
  }
  n.prototype.isUpDown_ = !1;
  n.prototype.isDownDown_ = !1;
  n.prototype.isSpaceDown_ = !1;
  n.prototype.isMoving_ = !1;
  n.prototype.touchStartedInGUI = !1;
  n.prototype.handle = function (a) {
    if (this.game.isPlaying) this["on" + a.type[0].toUpperCase() + a.type.slice(1)](a.originalEvent);
  };
  n.prototype.onKeydown = function (a) {
    38 === a.keyCode ? this.isUpDown_ = !0 : 40 === a.keyCode ? this.isDownDown_ = !0 : 32 !== a.keyCode && 39 !== a.keyCode || this.isSpaceDown_ || (this.spacePressed || (this.tutorial.off("keys-space"), this.spacePressed = !0), this.isSpaceDown_ = !0, this.getDistance(), this.player.preparePresent());
    this.arrowPressed || 38 !== a.keyCode && 40 !== a.keyCode || (this.tutorial.off("keys-updown"), this.arrowPressed = !0);
    this.updatePlayerFromKeyboard();
  };
  n.prototype.onKeyup = function (a) {
    if (38 === a.keyCode) this.isUpDown_ = !1;else if (40 === a.keyCode) this.isDownDown_ = !1;else if (32 === a.keyCode || 39 === a.keyCode) this.stopCount = clearInterval(this.timer), this.isSpaceDown_ = !1, this.player.dropPresent();
    this.updatePlayerFromKeyboard();
  };
  n.prototype.getDistance = function () {
    this.keyDownCounter = 0;
    this.player.distance = 0;
    this.timer = setInterval(() => {
      this.keyDownCounter += .15;
      this.player.distance = 3 > this.keyDownCounter ? this.keyDownCounter : 3;
    }, 10);
  };
  n.prototype.updatePlayerFromKeyboard = function () {
    this.isUpDown_ ? this.player.keyboardGoUp() : this.isDownDown_ ? this.player.keyboardGoDown() : this.player.keyboardStop();
    this.isUpDown_ || this.isDownDown_ ? this.isMoving_ || (this.isMoving_ = !0) : this.isMoving_ = !1;
  };
  n.prototype.onTouchstart = function (a) {
    this.touchStartedInGUI = !!$(a.target).closest(".gui").length;
    if (!this.touchStartedInGUI) {
      null !== this.currentTouchId && this.player.touchEnded();
      var b = a.changedTouches[0],
        c = 1 / this.game.scale * b.pageY;
      this.currentTouchId = b.identifier;
      this.player.setY(c);
      this.getDistance();
      this.player.preparePresent();
      a.preventDefault();
      this.touchStarted || (this.tutorial.off("touch-updown"), this.touchStarted = !0);
    }
  };
  n.prototype.onTouchmove = function (a) {
    var b = this.getCurrentTouch(a);
    b && this.player.setY(1 / this.game.scale * b.pageY);
    a.preventDefault();
  };
  n.prototype.onTouchend = function (a) {
    this.getCurrentTouch(a) && (this.stopCount = clearInterval(this.timer), this.currentTouchId = null, this.player.touchEnded());
  };
  n.prototype.getCurrentTouch = function (a) {
    if (null === this.currentTouchId) return null;
    for (var b = 0, c; c = a.changedTouches[b]; b++) if (c.identifier === this.currentTouchId) return c;
    return null;
  };
  function q(a) {
    this.game = a;
    this.elem = $('<div class="iceberg hidden"></div>');
    this.game.icebergsElem.append(this.elem);
  }
  g.shared.pools.mixin(q);
  q.prototype.onInit = function (a, b) {
    this.elem.removeClass("hidden hit iceberg--1 iceberg--2 iceberg--3 iceberg--4 iceberg--5 iceberg--6").addClass(a.css);
    this.dead = !1;
    this.height = a.height;
    this.width = a.width;
    this.speed = a.speed;
    this.y = 0;
    this.x = b;
    this.presents = [];
    this.elem.css({
      top: -this.height,
      left: this.x,
      height: this.height,
      width: this.width
    });
    this.draw();
  };
  q.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
    if (this.presents.length) {
      for (var a = 0; a < this.presents.length; a++) m.push(this.presents[a]);
      this.presents = [];
    }
  };
  q.prototype.draw = function () {
    this.elem.css("transform", "translateY(" + this.y + "px) translateZ(0)");
  };
  q.prototype.onFrame = function (a) {
    a *= this.game.icebergSpeed * this.speed;
    this.y += a;
    this.y < this.game.sceneSize.height + this.height ? this.draw() : q.push(this);
    if (this.presents.length) for (var b = 0; b < this.presents.length; b++) this.presents[b].y += a, this.presents[b].draw();
  };
  q.prototype.hit = function (a) {
    a.dead = !0;
    window.santaApp.fire("sound-trigger", "bl_hit_ice");
    this.presents.push(a);
  };
  q.prototype.getHitbox = function () {
    return {
      center: this.height / 2 - 20,
      y: this.y - this.height + 10,
      x: this.x + this.width / 2 - 5
    };
  };
  function r(a, b) {
    this.game = a;
    this.elem = b;
    this.distance = 0;
    this.railsElem = this.game.elem.find(".player-rails");
    this.elfElem = this.elem.find(".player-elf");
    this.leftRopeElem = this.elem.find(".player-rope--left");
    this.rightRopeElem = this.elem.find(".player-rope--right");
    this.reset();
    this.animate = this.animate.bind(this);
  }
  r.prototype.reset = function () {
    this.targetY = this.y = this.game.sceneSize.height / 2;
    this.minY = .15 * this.game.sceneSize.height;
    this.maxY = .82 * this.game.sceneSize.height;
    var a = this.maxY - this.minY;
    this.railsElem.css({
      height: a - a % 20 + 80,
      top: this.minY - 25
    });
    if (this.present) this.present.onInit(this.y - 10);else this.present = m.pop(this.game, this.y - 10);
    this.soundFrameCounter = 0;
    this.throwing = this.isMoving = !1;
    this.elem.css("transform", "translateY(" + (this.y - d.PLAYER_CENTER) + "px) translateZ(0)");
    t.reset();
    this.preparing = this.prepared = this.waiting = !1;
    this.animate(0);
  };
  r.prototype.onFrame = function (a) {
    this.isMoving !== (this.targetY !== this.y) && (this.isMoving = !this.isMoving);
    this.isMoving && (a *= d.PLAYER_MAX_SPEED, a > Math.abs(this.targetY - this.y) ? (this.y = this.targetY, this.dropWhenStopped && (this.dropWhenStopped = !1, this.dropPresent())) : this.y += a * (this.targetY > this.y ? 1 : -1), this.elem.css("transform", "translateY(" + (this.y - d.PLAYER_CENTER) + "px) translateZ(0)"), this.present && (this.present.y = this.y - 10, this.present.draw()), this.soundFrameCounter = (this.soundFrameCounter + 1) % 3);
  };
  r.prototype.setY = function (a) {
    a < this.minY ? a = this.minY : a > this.maxY && (a = this.maxY);
    this.targetY = a;
  };
  r.prototype.keyboardGoUp = function () {
    this.setY(this.minY);
  };
  r.prototype.keyboardGoDown = function () {
    this.setY(this.maxY);
  };
  r.prototype.keyboardStop = function () {
    this.setY(this.y);
  };
  r.prototype.touchEnded = function () {
    this.y === this.targetY ? this.dropPresent() : this.dropWhenStopped = !0;
  };
  r.prototype.releasePresent_ = function () {
    this.game.dropPresent(this.present);
    this.present = null;
    this.throwing = !1;
    this.waiting = !0;
    window.setTimeout(function () {
      this.present || (this.present = m.pop(this.game, this.y - 10), this.waiting = !1, this.autoPrepare && this.preparePresent());
    }.bind(this), 1E3 * d.TIME_BETWEEN_PRESENTS);
  };
  r.prototype.dropPresent_ = function () {
    this.throwing = !0;
    t.stepReverse(.1, this.animate, function () {
      this.releasePresent_();
    }.bind(this));
  };
  r.prototype.dropPresent = function () {
    this.prepared ? (this.prepared = !1, this.dropPresent_()) : this.preparing && (this.dropWhenPrepared = !0);
    this.autoPrepare = !1;
  };
  r.prototype.animate = function (a) {
    let b = 20 * -this.distance * a,
      c = .07 * a * this.distance + .48;
    a = 12 * this.distance * a + 14;
    this.elfElem.css("transform", "translateX(" + b + "px) translateZ(0)");
    this.present.addX = b;
    this.present.draw();
    this.leftRopeElem.css("transform", "scaleY(" + c + ") rotate(" + a + "deg) translateZ(0)");
    this.rightRopeElem.css("transform", "scaleY(" + c + ") rotate(-" + a + "deg) translateZ(0)");
  };
  r.prototype.preparePresent = function () {
    this.waiting ? this.autoPrepare = !0 : this.preparing || this.throwing || !this.present || (this.preparing = !0, window.santaApp.fire("sound-trigger", "bl_rope_stretch"), t.step(.3, this.animate, function () {
      this.preparing = !1;
      this.dropWhenPrepared ? (this.dropWhenPrepared = !1, this.dropPresent_()) : this.prepared = !0;
    }.bind(this)));
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
      animWithClass: function (a, c, e) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(c);
          const b = () => {
            a.classList.remove(c);
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
        let l;
        try {
          l = e.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (p) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: l[4],
          y: l[5],
          rotate: 180 / Math.PI * Math.atan2(l[1], l[0])
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
  function m(a) {
    this.game = a;
    this.elem = $('<div class="present hidden"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26.966px" height="30.337px" viewBox="0 0 26.966 30.337" enable-background="new 0 0 26.966 30.337" xml:space="preserve"><rect x="5.098" y="7.098" width="15.123" height="15.122"/><polygon points="13.511,15.543 20.22,15.543 20.22,13.516 13.511,13.516 13.511,7.098 11.483,7.098 11.483,13.516 5.099,13.516 5.099,15.543 11.483,15.543 11.483,22.22 13.511,22.22 "/></svg></div>');
    a = Math.ceil(3 * f.random());
    this.elem.addClass("present--" + a);
    this.game.presentsElem.append(this.elem);
    this.dead = !1;
    this.velocity = this.addX = this.y = this.x = 0;
    this.scale = 1;
  }
  g.shared.pools.mixin(m);
  m.PRESENT_CENTER = d.PRESENT_WIDTH / 2;
  m.prototype.onInit = function (a) {
    this.elem.removeClass("hidden");
    this.dead = !1;
    this.x = d.PRESENT_START_X;
    this.y = a;
    this.addX = 0;
    this.velocity = d.PRESENT_INITIAL_VELOCITY;
    this.scale = 1;
    this.draw();
  };
  m.prototype.onDispose = function () {
    this.elem.addClass("hidden");
    this.dead = !0;
  };
  m.prototype.missed = function () {
    this.dead = !0;
    t.step(.6, a => {
      this.addX = 20 * a;
      this.draw();
    }, () => {
      this.remove();
      this.game.lastMissedPresent = null;
    });
    g.shared.utils.animWithClass(this.elem, "present--missed");
  };
  m.prototype.draw = function () {
    this.elem.css("transform", "translate(" + (this.x + this.addX) + "px, " + this.y + "px) scale(" + this.scale + ") translateZ(0)");
  };
  m.prototype.onFrame = function (a) {
    if (this.x >= d.PRESENT_END_X) this.game.missedBoat(this, this.x - m.PRESENT_CENTER, this.y - m.PRESENT_CENTER);else {
      this.x += this.velocity * a / 3;
      this.x > d.PRESENT_END_X && (this.x = d.PRESENT_END_X);
      a = 0;
      for (var b = this.game.entities.length; a < b; a++) this.game.entities[a].getHitbox && this.checkCollition_(this.game.entities[a]);
      this.scale = 1.5 - Math.abs((this.x - d.PRESENT_START_X) / (d.PRESENT_END_X - d.PRESENT_START_X) - .5);
      this.draw();
    }
  };
  m.prototype.checkCollition_ = function (a) {
    var b = a.getHitbox();
    b.x < this.x || b.x >= this.x + 30 || Math.abs(this.y - b.y - b.center) <= b.center - m.PRESENT_CENTER + 20 && a.hit(this, this.x + m.PRESENT_CENTER, this.y + m.PRESENT_CENTER);
  };
  var t = {
    waiting: [],
    reset: function () {
      t.waiting = [];
    },
    after: function (a, b) {
      t.waiting.push({
        remaining: a,
        callback: b
      });
    },
    step: function (a, b, c) {
      t.waiting.push({
        total: a,
        remaining: a,
        callback: c,
        step: b
      });
    },
    stepReverse: function (a, b, c) {
      t.waiting.push({
        total: a,
        remaining: a,
        callback: c,
        step: b,
        reverse: !0
      });
    },
    onFrame: function (a) {
      for (let b = 0, c; c = t.waiting[b]; b++) {
        c.remaining -= a;
        0 > c.remaining && (c.remaining = 0);
        if (c.step) {
          let a = c.remaining / c.total;
          c.reverse || (a = 1 - a);
          c.step(a);
        }
        0 >= c.remaining && (c.callback(), t.waiting.splice(b--, 1));
      }
    }
  };
  g.shared.Coordinator = t;
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
  g.shared.LevelUp = u;
  function u(a, b, c) {
    this.bgElem = $(b);
    this.numberElem = $(c);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  u.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  u.prototype.onResize_ = function () {
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
  u.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  u.prototype.numberShown_ = function () {
    v(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  u.prototype.show = function (a, b) {
    this.bgElem.addClass("is-visible");
    v(this.bgElem, "transitionend", 1, b);
    this.bgElem.css("border-width", this.bgBorderWidth);
    v(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function v(a, b, c, e) {
    function l() {
      p || (p = !0, a.removeEventListener(b, l), e && e());
    }
    a = g.shared.utils.unwrapElement(a);
    var p = !1;
    a.addEventListener(b, l);
    window.setTimeout(l, 1E3 * c);
  }
  g.shared.Scoreboard = w;
  function y(a, b) {
    a = d ? d[a] : void 0;
    return +a === a ? a : b;
  }
  function w(a, b, c) {
    this.game = a;
    this.initialCountdown_ = y("INITIAL_COUNTDOWN", 60);
    this.levels = c || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  w.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  w.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  w.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = y("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  w.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  w.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  w.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  w.prototype.announce_ = function () {
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
  function z(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  g.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = z(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = z(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  function A(a) {
    this.elem = $(a);
    this.viewElem = this.elem.find(".view");
    this.boatsElem = this.elem.find(".boats");
    this.icebergsElem = this.elem.find(".icebergs");
    this.presentsElem = this.elem.find(".presents");
    this.bubblesElem = this.elem.find(".bubbles");
    this.bgElem = this.elem.find(".bg");
    this.entities = [];
    this.isPlaying = !1;
    this.paused = !0;
    this.level = 1;
    this.hidden = !1;
    this.scale = 1;
    this.sceneSize = {
      height: 0,
      width: 0
    };
    this.watchSceneSize_();
    this.player = new r(this, this.elem.find(".player"));
    this.scoreboard = new w(this, this.elem.find(".board"), 10);
    this.gameoverDialog = new g.shared.Gameover(this);
    this.tutorial = new g.shared.Tutorial("touch-updown keys-space keys-updown");
    this.controls = new n(this);
    this.levelUp = new u(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
    this.scoreElem = this.elem.find(".score-sign");
    this.splashElem = this.elem.find(".splash");
    this.gameStartTime = +new Date();
    this.onFrame = this.onFrame.bind(this);
    this.preloadPools_();
    this.reuseBubbles_();
  }
  A.prototype.preloadPools_ = function () {
    for (var a = 0; 5 > a; a++) h.pool(this);
    for (a = 0; 7 > a; a++) q.pool(this), m.pool(this);
    for (a = 0; 30 > a; a++) k.pool(this);
  };
  A.prototype.start = function () {
    this.started = !0;
    this.tutorial.start();
    this.restart();
  };
  A.prototype.restart = function () {
    this.entities.forEach(function (a) {
      a.remove();
    });
    this.entities = [];
    this.level = (+(location.search.match(/[?&]level=(\d+)/) || [])[1] || 1) - 1;
    this.nextLevel = d.LEVEL_DURATION;
    this.scoreboard.reset();
    this.scoreboard.setLevel(this.level);
    this.boatSpeed = d.BOAT_START_SPEED;
    this.nextBoat = 0;
    this.lastBoat = this.nextBoatType = null;
    this.icebergSpeed = d.ICEBERG_START_SPEED;
    this.nextIceberg = 0;
    this.lastMissedPresent && this.lastMissedPresent.remove();
    this.lastMissedPresent = null;
    t.reset();
    this.paused = !1;
    this.player.reset();
    this.manualTime = !!window.__MANUAL_TIME__;
    this.unfreezeGame();
    window.santaApp.fire("sound-trigger", "bl_game_start");
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "boatload"
    });
    this.gameStartTime = +new Date();
  };
  A.prototype.step = function (a) {
    if (this.isPlaying) {
      t.onFrame(a);
      this.player.onFrame(a);
      this.updateLevel_(a);
      this.scoreboard.onFrame(a);
      this.updateBoats(a);
      this.updateIcebergs(a);
      for (var b = [], c = 0, e; e = this.entities[c]; c++) e.onFrame(a), e.dead && b.push(c);
      for (a = 0; null != (c = b[a]); a++) this.entities.splice(c - a, 1);
    }
  };
  A.prototype.advanceTime = function (a) {
    for (var b = 1 / 60; 0 < a && this.isPlaying;) {
      var c = Math.min(b, a);
      this.step(c);
      a -= c;
    }
  };
  A.prototype.onFrame = function () {
    if (this.isPlaying && !this.manualTime) {
      var a = +new Date() / 1E3,
        b = a - this.lastFrame;
      this.lastFrame = a;
      this.step(b);
      this.requestId = window.requestAnimationFrame(this.onFrame);
    }
  };
  A.prototype.setScale = function (a) {
    this.scale = a;
    this.bgElem.css("transform", "scaleX(" + a + ")");
    this.viewElem.css("transform", "scale(" + a + ")").css("height", this.sceneSize.height + "px");
    this.player && this.player.reset();
  };
  A.prototype.updateBoats = function (a) {
    this.nextBoat -= a;
    if (!(0 < this.nextBoat)) {
      this.nextBoatType || (a = Math.ceil(f.random() * d.BOATS.length), this.nextBoatType = d.BOATS[a - 1]);
      if (this.lastBoat) {
        a = (this.lastBoat.y + this.lastBoat.height) / (this.lastBoat.speed * this.boatSpeed);
        var b = this.sceneSize.height / (this.nextBoatType.speed * this.boatSpeed);
        if (a > b) {
          this.nextBoat = a - b;
          return;
        }
      }
      a = h.pop(this, this.nextBoatType);
      this.entities.push(a);
      this.lastBoat = a;
      this.nextBoatType = null;
      a = Math.pow(d.BOAT_SPAWN_MULTIPLY_EACH_LEVEL, this.level);
      b = d.BOAT_SPAWN_VARIANCE * a;
      this.nextBoat = d.BOAT_SPAWN_BASE + d.BOAT_SPAWN_INTERVAL * a - b / 2 + f.random() * b;
      this.lastBoat && (a = (this.lastBoat.y + this.lastBoat.height) / (this.lastBoat.speed * this.boatSpeed), this.nextBoat = Math.min(a, this.nextBoat));
    }
  };
  A.prototype.updateIcebergs = function (a) {
    this.nextIceberg -= a;
    if (!(0 < this.nextIceberg)) {
      a = Math.ceil(f.random() * d.ICEBERGS.length);
      a = d.ICEBERGS[a - 1];
      for (var b = d.ICEBERG_X + f.random() * d.ICEBERG_X_VARIANCE - d.ICEBERG_X_VARIANCE / 2, c = (this.sceneSize.height - a.height) / a.speed, e = 0; e < this.entities.length; e++) if (this.entities[e] instanceof q && c < (this.sceneSize.height + this.entities[e].height - this.entities[e].y) / this.entities[e].speed) {
        this.nextIceberg = 1;
        return;
      }
      a = q.pop(this, a, b);
      this.entities.push(a);
      a = Math.pow(d.ICEBERG_SPAWN_MULTIPLY_EACH_LEVEL, this.level);
      b = d.ICEBERG_SPAWN_VARIANCE * a;
      this.nextIceberg = d.ICEBERG_SPAWN_BASE + d.ICEBERG_SPAWN_INTERVAL * a - b / 2 + f.random() * b;
    }
  };
  A.prototype.updateLevel_ = function (a) {
    this.nextLevel -= a;
    0 < this.nextLevel || (this.level === d.TOTAL_LEVELS - 1 ? this.gameover() : (this.level++, this.scoreboard.setLevel(this.level), this.boatSpeed += d.BOAT_SPEED_PER_LEVEL, this.icebergSpeed += d.ICEBERG_SPEED_PER_LEVEL, this.nextLevel = d.LEVEL_DURATION));
  };
  A.prototype.dropPresent = function (a) {
    a.velocity = 0 !== this.player.distance ? 350 * this.player.distance : d.PRESENT_INITIAL_VELOCITY;
    this.entities.push(a);
    window.santaApp.fire("sound-trigger", "bl_shoot");
  };
  A.prototype.hitBoat = function (a, b, c, e) {
    this.scoreElem.text("" + a);
    this.animate_(this.scoreElem, c, e);
    this.scoreboard.addScore(a);
    this.scoreboard.addTime(b);
    gtag("event", "gameAction", {
      game: "boatload",
      action: "hit"
    });
  };
  A.prototype.missedBoat = function (a, b, c) {
    this.animate_(this.splashElem, b, c);
    this.lastMissedPresent = a;
    a.missed();
    window.santaApp.fire("sound-trigger", "bl_hit_water");
    gtag("event", "gameAction", {
      game: "boatload",
      action: "miss"
    });
  };
  A.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  A.prototype.animate_ = function (a, b, c) {
    a.css({
      left: b,
      top: c
    });
    a.removeClass("hidden");
    g.shared.utils.animWithClass(a, "animate", function () {
      a.addClass("hidden");
    });
  };
  A.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen"), this.isPlaying = !0, this.lastFrame = +new Date() / 1E3, this.manualTime || (this.requestId = window.requestAnimationFrame(this.onFrame)));
  };
  A.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverDialog.show();
    window.santaApp.fire("sound-trigger", "bl_game_stop");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "boatload",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  A.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  A.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  A.prototype.watchSceneSize_ = function () {
    function a() {
      var a = window.innerWidth,
        l = window.innerHeight - window.santaApp.headerSize,
        p = 980 > a ? a / 980 : 1;
      p = 600 > l ? Math.min(l / 600, p) : p;
      b.height = 1 / p * l;
      b.width = 1 / p * a;
      c.setScale(p);
    }
    var b = this.sceneSize,
      c = this;
    a();
    $(window).on("resize.boatload", a).on("orientationchange.boatload", a);
  };
  A.prototype.reuseBubbles_ = function () {
    this.bubblesElem.on("transitionend", function (a) {
      k.push(a.target.bubble);
    });
  };
  A.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "boatload",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".boatload");
    $(document).off(".boatload");
    this.elem.off(".boatload");
    this.levelUp.dispose();
    g.shared.pools.empty();
    this.tutorial.dispose();
    t.waiting = [];
  };
  g.Game = A;
  _globalExport = g.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('bl_load_sounds');
sceneApi.preload.images('img/boat1.svg', 'img/boat2.svg', 'img/boat3.svg', 'img/iceberg1.svg', 'img/iceberg2.svg', 'img/iceberg3.svg', 'img/iceberg4.svg', 'img/iceberg5.svg', 'img/iceberg6.svg', 'img/logo.svg', 'img/player-crossbow.svg', 'img/player-elf.svg', 'img/player-ropes.svg', 'img/present.svg', 'img/rail.png', 'img/trees-bottom.svg', 'img/trees-left.svg', 'img/trees-right.svg', 'img/trees-top.svg');
const game = new Game(document.getElementById('module-boatload'));
if (window.__MANUAL_TIME__) {
  game.manualTime = true;
  window.__TEST_CONTROL__ = {
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