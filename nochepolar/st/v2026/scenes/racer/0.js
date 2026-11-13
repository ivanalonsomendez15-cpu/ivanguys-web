import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    INITIAL_COUNTDOWN: 30,
    COUNTDOWN_TRACK_LENGTH: 60,
    COUNTDOWN_TRACK_MAX_X: 150,
    COUNTDOWN_FLASH: 10,
    TOUCH_SENSITIVITY: 85,
    TUTORIAL_LEFTRIGHT_TIMEOUT: 3E3,
    TUTORIAL_UPDOWN_TIMEOUT: 5E3,
    PRESENT_HIT_SCORE: 100,
    LEVEL_UP_SCORE: 500,
    TOTAL_LEVELS: 10
  };
  var h = {
    shared: {}
  };
  function k(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  h.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = k(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = k(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  function l(a, b) {
    this.game = a;
    this.tutorial = b;
    this.keys = {};
    this.touchStarted = this.keyPressed = !1;
    this.currentTouchId = null;
    this.touchStart = {
      x: null,
      y: null
    };
    this.touchCurrent = {
      x: null,
      y: null
    };
    this.touchpadElem = $(a.elem).find(".touchpad");
    this.touchpadNubElem = this.touchpadElem.find(".touchpad-nub");
    this.leftRightPressed = this.upPressed = !1;
  }
  l.prototype.start = function () {
    $(window).on("keydown.racer", this.onKeydown.bind(this)).on("keyup.racer", this.onKeyup.bind(this));
    $(this.game.elem).on("touchstart.racer", this.onTouchstart.bind(this)).on("touchmove.racer", this.onTouchmove.bind(this)).on("touchend.racer", this.onTouchend.bind(this));
  };
  l.prototype.onFrame = function () {
    var a = 0,
      b = 0;
    null !== this.touchCurrent.x ? (a = (this.touchCurrent.x - this.touchStart.x) / c.TOUCH_SENSITIVITY, b = (this.touchCurrent.y - this.touchStart.y) / c.TOUCH_SENSITIVITY) : (this.keys.left && a--, this.keys.right && a++, this.keys.up && b--, this.keys.down && b++);
    var d = a * a + b * b;
    1 < d && (d = Math.sqrt(d), a /= d, b /= d);
    null !== this.touchCurrent.x && this.touchpadNubElem.css("transform", "translate3d(" + a * c.TOUCH_SENSITIVITY + "px," + b * c.TOUCH_SENSITIVITY + "px,0)");
    this.game.inputVector.x = a;
    this.game.inputVector.y = b;
    0 <= this.game.inputVector.y && 0 > b ? window.santaApp.fire("sound-trigger", "rc_player_ride_start") : 0 >= this.game.inputVector.y && 0 < b && window.santaApp.fire("sound-trigger", "rc_player_ride_stop");
  };
  l.prototype.onKeydown = function (a) {
    a.keyCode in l.KEY_CODES_ && (this.keys[l.KEY_CODES_[a.keyCode]] = !0);
    !this.upPressed && this.keys.up && (this.tutorial.off("keys-up"), this.tutorial.off("spacenav-up"), this.upPressed = !0);
    this.leftRightPressed || !this.keys.left && !this.keys.right || (this.tutorial.off("keys-leftright"), this.tutorial.off("spacenav-leftright"), this.leftRightPressed = !0);
  };
  l.prototype.onKeyup = function (a) {
    a.keyCode in l.KEY_CODES_ && (this.keys[l.KEY_CODES_[a.keyCode]] = !1);
  };
  l.prototype.touchStartedInGUI = !1;
  l.prototype.onTouchstart = function (a) {
    this.touchStartedInGUI = !!$(a.target).closest(".gui").length;
    null !== this.currentTouchId || this.touchStartedInGUI || (this.showTouchWidget(a.originalEvent.changedTouches[0]), a.preventDefault(), this.touchStarted || (this.tutorial.off("touch-updown"), this.touchStarted = !0));
  };
  l.prototype.onTouchmove = function (a) {
    var b = this.getCurrentTouch(a.originalEvent);
    b && (this.touchCurrent.x = b.pageX, this.touchCurrent.y = b.pageY);
    a.preventDefault();
  };
  l.prototype.onTouchend = function (a) {
    this.getCurrentTouch(a.originalEvent) && this.hideTouchWidget();
  };
  l.prototype.getCurrentTouch = function (a) {
    if (null === this.currentTouchId) return null;
    for (var b = 0, d; d = a.changedTouches[b]; b++) if (d.identifier === this.currentTouchId) return d;
    for (b = 0; d = a.targetTouches[b]; b++) if (d.identifier === this.currentTouchId) return null;
    this.hideTouchWidget();
    return null;
  };
  l.prototype.showTouchWidget = function (a) {
    this.currentTouchId = a.identifier;
    this.touchStart.x = a.pageX;
    this.touchStart.y = a.pageY;
    this.touchpadElem.css({
      left: this.touchStart.x,
      top: this.touchStart.y
    }).removeClass("hidden");
    this.touchpadNubElem.css("transform", "");
  };
  l.prototype.hideTouchWidget = function () {
    this.currentTouchId = null;
    this.touchCurrent.x = null;
    this.touchCurrent.y = null;
    this.touchpadElem.addClass("hidden");
    this.touchpadNubElem.css("transform", "");
  };
  l.KEY_CODES_ = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  var m = {
    Assets: {}
  };
  m.Assets.init = function (a) {
    function b(b, f) {
      var e = new Image();
      e.src = a + "img/" + f;
      d[b] = e;
    }
    var d = m.Assets.manifest_;
    b("santa", "santa-sleigh.png");
    b("rudolf", "rudolf.png");
    b("tree", "tree.png");
    b("rock", "rock.png");
    b("present", "present.png");
  };
  m.Assets.manifest_ = {};
  m.Assets.get = function (a) {
    return m.Assets.manifest_[a];
  };
  m.Object = {};
  m.Object.Renderable = function () {
    this.position = {
      x: 0,
      y: 0
    };
    this.scale = {
      x: 1,
      y: 1
    };
    this.rotation = 0;
    this.children_ = [];
    this.c_ = -1;
    this.targetRotation = 0;
    this.rebound = !1;
    this.radius = this.targetVelocity = 0;
    this.active = !1;
  };
  m.Object.Renderable.prototype.update = function () {};
  m.Object.Renderable.prototype.render = function () {};
  m.Object.Renderable.prototype.hit = function () {};
  m.Object.Renderable.prototype.chooseRender = function () {};
  m.Object.Renderable.prototype.traverse = function (a) {
    a.translate(this.position.x, this.position.y);
    a.scale(this.scale.x, this.scale.y);
    a.rotate(this.rotation);
    this.update();
    this.render(a);
    for (this.c_ = 0; this.c_ < this.children_.length; ++this.c_) {
      var b = this.children_[this.c_];
      a.save();
      b.traverse(a);
      a.restore();
    }
    this.c_ = -1;
  };
  m.Object.Renderable.prototype.addChild = function (a) {
    this.children_.push(a);
  };
  m.Object.Renderable.prototype.removeChild = function (a) {
    a = this.children_.indexOf(a);
    -1 < a && (this.children_.splice(a, 1), a <= this.c_ && --this.c_);
  };
  m.Object.MarkerLine = function () {
    m.Object.Renderable.call(this);
    this.drawNumbers_ = !0;
    this.triggered = !1;
    this.reset();
  };
  m.Object.MarkerLine.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.MarkerLine.prototype.render = function (a) {
    a.fillStyle = "#f9c6c8";
    a.fillRect(2, -1, window.worldWidth - 4, 4);
    a.fillStyle = "#e91c24";
    a.fillRect(2, -2, window.worldWidth - 4, 4);
    this.showLevel && (a.save(), a.beginPath(), a.textBaseline = "middle", a.textAlign = "center", a.fillStyle = "#E5E5E5", a.font = "800 268px Lobster", a.fillText("" + this.level, this.center || .5 * window.worldWidth, 180), a.fill(), a.closePath(), a.restore());
  };
  m.Object.MarkerLine.prototype.reset = function () {
    this.level = 1;
    this.center = .5 * window.worldWidth;
    this.showLevel = !0;
  };
  m.Object.Rudolf = function (a) {
    m.Object.Renderable.call(this);
    this.position = a;
    this.MAX_VELOCITY = 15;
    this.MAX_ANGLE = .35;
    this.IMAGE = m.Assets.get("rudolf");
    this.velocity = 0;
  };
  m.Object.Rudolf.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.Rudolf.prototype.hit = function () {
    this.velocity = this.MAX_VELOCITY / 3;
  };
  m.Object.Rudolf.prototype.limit_ = function (a, b, d) {
    return Math.min(b, Math.max(d, a));
  };
  m.Object.Rudolf.prototype.turn = function (a) {
    this.targetRotation += a - this.targetVelocity / this.MAX_VELOCITY * a * .3;
  };
  m.Object.Rudolf.prototype.accelerate = function (a) {
    this.targetVelocity += a;
  };
  m.Object.Rudolf.prototype.decelerate = function (a) {
    this.targetVelocity -= a;
  };
  m.Object.Rudolf.prototype.update = function () {
    this.targetVelocity = this.limit_(this.targetVelocity, this.MAX_VELOCITY, 0);
    this.targetRotation = this.limit_(this.targetRotation, this.MAX_ANGLE, -this.MAX_ANGLE);
    this.velocity += (this.targetVelocity - this.velocity) * (this.velocity > this.targetVelocity || this.velocity < this.MAX_VELOCITY / 3 ? .2 : .01);
    this.rotation += .2 * (this.targetRotation - this.rotation);
    this.position.x += Math.sin(this.rotation) * this.velocity;
    this.position.y -= Math.cos(this.rotation) * this.velocity;
    var a = this.limit_(this.position.x, window.worldWidth - 20, 20);
    a != this.position.x && (this.targetRotation = 0);
    this.position.x = a;
    window.santaApp.fire("sound-trigger", {
      name: "rc_sled_speed",
      args: [this.targetVelocity / this.MAX_VELOCITY]
    });
  };
  m.Object.Rudolf.prototype.render = function (a) {
    a.fillStyle = "#FF0000";
    a.save();
    a.translate(-15, -20);
    a.drawImage(this.IMAGE, 0, 0);
    a.restore();
  };
  m.Object.Santa = function (a) {
    m.Object.Renderable.call(this);
    this.position = a;
    this.radius = 25;
    this.IMAGE = m.Assets.get("santa");
    this.acceleration = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.extension = this.baseExtension = 0;
    this.rudolf_ = null;
  };
  m.Object.Santa.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.Santa.prototype.hit = function () {
    window.santaApp.fire("sound-trigger", "rc_player_crash");
  };
  m.Object.Santa.prototype.update = function () {
    var a = this.rudolf_.position.x - this.position.x,
      b = this.rudolf_.position.y - this.position.y,
      d = Math.sqrt(a * a + b * b) - this.baseExtension,
      e = .02 * Math.max(0, d);
    a = Math.atan2(b, a);
    b = Math.sin(a) * e;
    this.acceleration.x = Math.cos(a) * e;
    this.acceleration.y = b;
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x *= .93;
    this.velocity.y *= .93;
    this.rotation = a + .5 * Math.PI;
    this.extension = d;
  };
  m.Object.Santa.prototype.render = function (a) {
    var b = 6 * Math.sin(this.rudolf_.rotation),
      d = 6 * Math.cos(this.rudolf_.rotation);
    a.save();
    a.translate(-23, -35);
    a.drawImage(this.IMAGE, 0, 0);
    a.restore();
    a.save();
    a.rotate(-this.rotation);
    a.strokeStyle = "#411405";
    a.lineWidth = 1;
    a.lineJoin = "round";
    a.lineCap = "round";
    a.beginPath();
    var e = -6,
      f = this.rudolf_.position.x - this.position.x - 6,
      g = this.rudolf_.position.y - this.position.y,
      n = Math.min(7, Math.max(0, 7 - .1 * this.extension));
    f -= b;
    g += d;
    a.moveTo(e, -4);
    a.quadraticCurveTo(e + .5 * (f - e) + n, -4 + .5 * (g - -4), f, g);
    a.stroke();
    a.closePath();
    a.beginPath();
    e = 6;
    f = this.rudolf_.position.x - this.position.x + 6;
    f -= b;
    a.moveTo(e, -4);
    a.quadraticCurveTo(e + .5 * (f - e) - n, -4 + .5 * (g - -4), f, g);
    a.stroke();
    a.closePath();
    a.restore();
  };
  m.Object.Santa.prototype.connectTo = function (a) {
    this.rudolf_ = a;
    this.baseExtension = this.position.y - this.rudolf_.position.y;
  };
  m.Object.Present = function () {
    m.Object.Renderable.call(this);
    this.PRESENT_DIM = 64;
    this.IMAGE = m.Assets.get("present");
    this.imageX_ = 0;
  };
  m.Object.Present.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.Present.prototype.chooseRender = function () {
    this.imageX_ = Math.floor(4 * Math.random()) * this.PRESENT_DIM;
  };
  m.Object.Present.prototype.render = function (a) {
    var b = this.PRESENT_DIM;
    a.save();
    a.translate(-22, -17);
    a.drawImage(this.IMAGE, this.imageX_, 0, b, b, 0, 0, b, b);
    a.restore();
  };
  m.Object.TreeRock = function () {
    m.Object.Renderable.call(this);
    this.IMAGE = m.Assets.get("tree");
    this.imageX_ = 0;
  };
  m.Object.TreeRock.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.TreeRock.prototype.chooseRender = function () {
    this.imageX_ = 0;
    .8 < Math.random() && (this.imageX_ = 130 * Math.floor(3 * Math.random()));
  };
  m.Object.TreeRock.prototype.render = function (a) {
    a.save();
    a.translate(-50, -50);
    a.drawImage(this.IMAGE, this.imageX_, 0, 130, 100, 0, 0, 130, 100);
    a.restore();
  };
  m.Object.Scenery = function () {
    m.Object.Renderable.call(this);
    this.GRID_SIZE = 64;
    this.GRID_SIZE_HALF = .5 * this.GRID_SIZE;
    this.GRID_SIZE_QUARTER = .5 * this.GRID_SIZE_HALF;
    this.GRID_SIZE_EIGTH = .5 * this.GRID_SIZE_QUARTER;
    this.OBJECT_POOL_SIZE = 140;
    this.PRESENT_POOL_SIZE = 20;
    this.TEXT_POOL_SIZE = 5;
    this.HALF_PI = .5 * Math.PI;
    this.worldEl_ = this.cell_ = null;
    this.grid_ = [];
    this.gridMarker_ = 0;
    this.gridMarkersX_ = window.worldWidth / this.GRID_SIZE;
    this.gridHeight_ = window.worldHeight + 4 * this.GRID_SIZE;
    this.gridLastY_ = 0;
    this.clearingTolerance_ = 1;
    this.clearingDiffTolerance_ = 0;
    this.clearing_ = this.targetClearing_ = .5 * window.worldWidth;
    this.clearingWidth_ = .4 * window.worldWidth;
    this.lastLeftBound_ = 0;
    this.lastRightBound_ = window.worldWidth;
    this.objectPool_ = [];
    this.objectIndex_ = this.object_ = null;
    this.objectTries_ = 10;
    this.renderRight_ = this.renderLeft_ = 0;
    this.lastHitPresent_ = {
      x: 0,
      y: 0
    };
    for (var a = 0; a < this.OBJECT_POOL_SIZE; a++) this.objectPool_.push(new m.Object.TreeRock());
    for (a = 0; a < this.PRESENT_POOL_SIZE; a++) this.objectPool_.push(new m.Object.Present());
    for (a = 0; a < this.TEXT_POOL_SIZE; a++) m.Object.Text.pool();
    a = 0;
    for (var b = this.gridHeight_; a < b; a += this.GRID_SIZE) for (var d = 0, e = window.worldWidth; d < e; d += this.GRID_SIZE) this.grid_.push({
      x: d,
      y: -a,
      valid: !1,
      objectIndex: null,
      leftBound: this.lastLeftBound_,
      rightBound: this.lastRightBound_,
      leftAngle: this.HALF_PI,
      rightAngle: this.HALF_PI,
      hit: !1
    });
    this.gridLastY_ = -a;
  };
  m.Object.Scenery.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.Scenery.prototype.connectTo = function (a) {
    this.worldEl_ = a;
  };
  m.Object.Scenery.prototype.reset = function () {
    var a = 0;
    this.clearingTolerance_ = 1;
    this.clearingDiffTolerance_ = 0;
    this.clearing_ = this.targetClearing_ = .5 * window.worldWidth;
    this.clearingWidth_ = .4 * window.worldWidth;
    this.lastLeftBound_ = 0;
    this.lastRightBound_ = window.worldWidth;
    for (var b = this.gridMarker_ = 0, d = this.gridHeight_; b < d; b += this.GRID_SIZE) for (var e = 0, f = window.worldWidth; e < f; e += this.GRID_SIZE) this.cell_ = this.grid_[a], null !== this.cell_.objectIndex && this.resetObject(this.cell_), this.cell_.x = e, this.cell_.y = -b, this.cell_.valid = !1, this.cell_.objectIndex = null, this.cell_.leftBound = this.lastLeftBound_, this.cell_.rightBound = this.lastRightBound_, this.cell_.leftAngle = this.HALF_PI, this.cell_.rightAngle = this.HALF_PI, this.cell_.hit = !1, a++;
    this.gridLastY_ = -b;
  };
  m.Object.Scenery.prototype.test = function (a) {
    for (var b = null, d = !1, e = 0, f = this.grid_.length; e < f; e++) if (this.cell_ = this.grid_[e], a.position.y >= this.cell_.y && a.position.y <= this.cell_.y + this.GRID_SIZE && (a.position.x >= this.cell_.x && a.position.x <= this.cell_.x + this.GRID_SIZE && null !== this.cell_.objectIndex && this.cell_.objectIndex >= this.OBJECT_POOL_SIZE && (this.lastHitPresent_.x = a.position.x, this.lastHitPresent_.y = a.position.y, this.resetObject(this.cell_), d = !0, window.santaApp.fire("sound-trigger", "rc_player_present_pickup")), 0 === e % this.gridMarkersX_)) {
      var g = a.position.y - this.cell_.y,
        n = this.cell_.leftBound + Math.sin(2 * this.cell_.leftAngle) * g;
      g = this.cell_.rightBound - Math.sin(2 * this.cell_.rightAngle) * g;
      a.position.x - a.radius <= n ? (b = this.cell_.leftAngle - this.HALF_PI, a.position.x = n + a.radius + .1) : a.position.x + a.radius >= g ? (b = -this.cell_.rightAngle + this.HALF_PI, a.position.x = g - a.radius - .1) : a.rebound = !1;
      if (null !== b) {
        a.rebound || a.hit();
        a.targetRotation = b;
        a.rebound = !0;
        a.targetVelocity *= .97;
        break;
      }
    }
    return d;
  };
  m.Object.Scenery.prototype.updateClearingValues = function () {
    this.clearingTolerance_ -= .001;
    this.clearingTolerance_ = Math.max(this.clearingTolerance_, .85);
    this.clearingDiffTolerance_ += .1;
    this.clearingDiffTolerance_ = Math.min(this.clearingDiffTolerance_, .8 * window.worldWidth);
    this.clearingWidth_ -= .05;
    this.clearingWidth_ = Math.max(this.clearingWidth_, 3 * this.GRID_SIZE);
    if (Math.random() > this.clearingTolerance_) {
      var a = this.targetClearing_;
      do this.targetClearing_ = Math.random() * window.worldWidth; while (Math.abs(this.targetClearing_ - a) < this.clearingDiffTolerance_);
    }
    this.clearing_ += .1 * (this.targetClearing_ - this.clearing_);
  };
  m.Object.Scenery.prototype.update = function () {
    var a = this.gridMarker_ + this.gridMarkersX_;
    if (this.worldEl_.position.y - window.worldHeight - 2 * this.GRID_SIZE > -this.grid_[this.gridMarker_].y) {
      this.updateClearingValues();
      for (var b = this.gridMarker_; b < a; b++) {
        this.cell_ = this.grid_[b];
        this.cell_.y = this.gridLastY_;
        this.cell_.valid = !0;
        this.cell_.hit = !1;
        null !== this.cell_.objectIndex && this.resetObject(this.cell_);
        this.cell_.x >= this.clearing_ - this.clearingWidth_ && this.cell_.x + this.GRID_SIZE <= this.clearing_ + this.clearingWidth_ && (this.cell_.valid = !1);
        b === this.gridMarker_ && (this.cell_.leftBound = Math.ceil((this.clearing_ - this.clearingWidth_) / this.GRID_SIZE) * this.GRID_SIZE, this.cell_.rightBound = Math.floor((this.clearing_ + this.clearingWidth_) / this.GRID_SIZE) * this.GRID_SIZE, this.cell_.leftBound = Math.max(0, this.cell_.leftBound), this.cell_.rightBound = Math.min(window.worldWidth, this.cell_.rightBound), this.cell_.leftAngle = Math.atan2(this.GRID_SIZE, this.lastLeftBound_ - this.cell_.leftBound), this.cell_.rightAngle = Math.atan2(this.GRID_SIZE, this.cell_.rightBound - this.lastRightBound_), this.lastLeftBound_ = this.cell_.leftBound, this.lastRightBound_ = this.cell_.rightBound);
        this.objectIndex_ = null;
        this.objectTries_ = 10;
        if (this.cell_.valid) {
          if (.4 < Math.random()) {
            do this.objectIndex_ = Math.floor(Math.random() * this.OBJECT_POOL_SIZE), this.objectTries_--; while (this.objectPool_[this.objectIndex_].active);
          }
        } else if (.98 < Math.random()) {
          do if (this.objectIndex_ = this.OBJECT_POOL_SIZE + Math.floor(Math.random() * this.PRESENT_POOL_SIZE), this.objectTries_--, 0 >= this.objectTries_) {
            this.objectIndex_ = null;
            break;
          } while (this.objectPool_[this.objectIndex_].active);
        }
        null !== this.objectIndex_ && (this.cell_.objectIndex = this.objectIndex_, this.object_ = this.objectPool_[this.objectIndex_], this.object_.active = !0, this.worldEl_.addChild(this.object_), this.object_.position.x = this.cell_.x + this.GRID_SIZE_HALF - this.GRID_SIZE_EIGTH + Math.random() * this.GRID_SIZE_QUARTER, this.object_.position.y = this.cell_.y + this.GRID_SIZE_HALF - this.GRID_SIZE_EIGTH + Math.random() * this.GRID_SIZE_QUARTER, this.object_.chooseRender());
      }
      this.gridMarker_ += this.gridMarkersX_;
      this.gridMarker_ %= this.grid_.length;
      this.gridLastY_ -= this.GRID_SIZE;
    }
  };
  m.Object.Scenery.prototype.addScore = function (a) {
    m.Object.Text.pop(null, this.lastHitPresent_, a, this.worldEl_);
  };
  m.Object.Scenery.prototype.resetObject = function (a) {
    if (null === a.objectIndex) throw Error("index never null");
    this.object_ = this.objectPool_[a.objectIndex];
    this.object_.active = !1;
    this.worldEl_.removeChild(this.object_);
    a.objectIndex = null;
  };
  m.Object.Scenery.prototype.render = function (a) {
    a.save();
    a.beginPath();
    a.lineWidth = 6;
    a.lineCap = "round";
    a.strokeStyle = "#D3D3D3";
    for (var b = 0, d = this.grid_.length; b < d; b++) this.cell_ = this.grid_[b], 0 === b % this.gridMarkersX_ && (this.renderLeft_ = this.cell_.leftBound + 5 + Math.sin(2 * this.cell_.leftAngle) * this.GRID_SIZE, a.moveTo(this.renderLeft_, this.cell_.y + this.GRID_SIZE), this.renderLeft_ = this.cell_.leftBound + 5, a.lineTo(this.renderLeft_, this.cell_.y), this.renderRight_ = this.cell_.rightBound - 5 - Math.sin(2 * this.cell_.rightAngle) * this.GRID_SIZE, a.moveTo(this.renderRight_, this.cell_.y + this.GRID_SIZE), this.renderRight_ = this.cell_.rightBound - 5, a.lineTo(this.renderRight_, this.cell_.y));
    a.stroke();
    a.closePath();
    a.restore();
  };
  m.Object.Scenery.prototype.getCenter = function () {
    return this.lastLeftBound_ + (this.lastRightBound_ - this.lastLeftBound_) / 2;
  };
  h.shared.pools = function () {
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
            p = b.pool_.pop();
          p && g !== p && (b.pool_[d] = p);
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
  h.shared.pools.PoolType = function () {};
  h.shared.pools.PoolType.onInit = function () {};
  h.shared.pools.PoolType.onDispose = function () {};
  h.shared.pools.PoolType.remove = function () {};
  m.Object.Text = function () {
    m.Object.Renderable.call(this);
    this.alpha = 0;
    this.inWorld = !1;
    this.text = "";
    this.lastUpdateTime = 0;
  };
  m.Object.Text.prototype = Object.create(m.Object.Renderable.prototype);
  m.Object.Text.prototype.onInit = function (a, b, d) {
    this.position = a;
    this.text = b;
    this.alpha = 1;
    this.active = !0;
    this.lastUpdateTime = +new Date();
    this.inWorld || (this.inWorld = !0, d.addChild(this));
  };
  m.Object.Text.prototype.onDispose = function () {
    this.active = !1;
    this.alpha = 0;
  };
  m.Object.Text.prototype.remove = function () {};
  h.shared.pools.mixin(m.Object.Text);
  m.Object.Text.prototype.render = function (a) {
    if (this.active) {
      var b = +new Date(),
        d = Math.min(1E3, b - this.lastUpdateTime) / 1E3;
      this.lastUpdateTime = b;
      this.alpha -= 2 * d;
      .01 > this.alpha && this.remove();
      a.save();
      a.beginPath();
      a.textBaseline = "middle";
      a.textAlign = "center";
      a.fillStyle = "rgba(0, 170, 232, " + this.alpha + ")";
      a.font = "600 48px Roboto";
      a.shadowOffsetX = 2;
      a.shadowOffsetY = 2;
      a.shadowBlur = 0;
      a.shadowColor = "rgba(0, 0, 0, 0.1)";
      a.fillText("+ " + this.text, 0, -50);
      a.fill();
      a.closePath();
      a.restore();
    }
  };
  m.Renderer = function (a) {
    var b = a.getContext("2d"),
      d = 576,
      e = 640;
    (function (b, g) {
      a.width = b + 20;
      a.height = g;
      d = b;
      e = g;
      window.worldWidth = b;
      window.worldHeight = g;
    })(d, e);
    this.context = b;
    this.clear = function () {
      b.fillStyle = "#FFFFFF";
      b.fillRect(0, 0, d + 20, e);
    };
    this.addShadowLine = function () {
      b.fillStyle = "#E1E7E7";
      b.fillRect(0, 0, 12, e);
    };
    this.addMachineShadows = function () {
      b.fillStyle = "rgba(0,0,0,0.7)";
      b.fillRect(0, 0, d + 20, 13);
      b.fillRect(0, e - 12, d + 20, 12);
      b.fillStyle = "rgba(98,135,137,0.2)";
      b.beginPath();
      b.moveTo(0, 0);
      b.lineTo(0, 23);
      b.lineTo(52, 48);
      b.lineTo(d + 20, 48);
      b.lineTo(d + 20, 0);
      b.closePath();
      b.fill();
    };
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
  h.shared.Scoreboard = q;
  function r(a, b) {
    a = c ? c[a] : void 0;
    return +a === a ? a : b;
  }
  function q(a, b, d) {
    this.game = a;
    this.initialCountdown_ = r("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  q.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  q.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  q.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = r("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  q.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  q.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  q.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  q.prototype.announce_ = function () {
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
  m.Game = function (a, b) {
    this.elem = a;
    m.Assets.init(b);
    this.MIN_DEADLINE = 10;
    this.level = 0;
    this.tutorial = new h.shared.Tutorial("touch-updown keys-up keys-leftright spacenav-up spacenav-leftright");
    this.controls = new l(this, this.tutorial);
    this.renderer = new m.Renderer(a.querySelector("canvas.game"));
    this.scoreboard = new q(this, a.querySelector(".board"), c.TOTAL_LEVELS);
    this.gameoverView = new h.shared.Gameover(this, a.querySelector(".gameover"));
    this.watchSceneSize_();
    this.world = new m.Object.Renderable();
    this.markerLine = new m.Object.MarkerLine();
    this.santa = new m.Object.Santa({
      x: .5 * window.worldWidth,
      y: 400
    });
    this.rudolf = new m.Object.Rudolf({
      x: .5 * window.worldWidth,
      y: 300
    });
    this.scenery = new m.Object.Scenery();
    this.paused = !1;
    this.inputVector = {
      x: 0,
      y: 0
    };
    this.nextDeadline = 30;
    this.markerDistance = 6E3;
    this.markerDistanceIncrease = 1E3;
    this.playing = !1;
    this.updateTime = this.lastUpdateTime = this.gameStartTime = 0;
    this.requestId = -1;
    this.update_ = this.update_.bind(this);
    this.setup_();
  };
  m.Game.prototype.setup_ = function () {
    this.world.addChild(this.markerLine);
    this.world.addChild(this.scenery);
    this.world.addChild(this.rudolf);
    this.world.addChild(this.santa);
    this.world.position.x = 10;
    this.markerLine.position.y = -1E3;
    this.santa.connectTo(this.rudolf);
    this.scenery.connectTo(this.world);
  };
  m.Game.prototype.startGame_ = function () {
    window.santaApp.fire("sound-trigger", "rc_start_game");
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "racer"
    });
    this.gameStartTime = +new Date();
    this.controls.start();
    this.tutorial.start();
    this.unfreezeGame_();
  };
  m.Game.prototype.unfreezeGame_ = function () {
    this.playing || (this.elem.focus(), this.playing = !0, this.lastUpdateTime = +new Date(), this.requestId = window.requestAnimationFrame(this.update_));
  };
  m.Game.prototype.update_ = function () {
    if (this.playing) {
      var a = this.renderer.context;
      this.updateTime = +new Date();
      var b = Math.min(1E3, this.updateTime - this.lastUpdateTime) / 1E3;
      this.lastUpdateTime = this.updateTime;
      if (!this.paused) {
        this.controls.onFrame(b);
        this.renderer.clear();
        this.renderer.addShadowLine();
        this.updateRudolfFromInputs_();
        this.checkForCollisions_();
        this.updateCameraPosition_();
        this.checkMarkerLine_();
        a.save();
        this.world.traverse(a);
        a.restore();
        if (0 < this.level) this.scoreboard.onFrame(b);
        this.renderer.addMachineShadows();
      }
      this.requestId = window.requestAnimationFrame(this.update_);
    }
  };
  m.Game.prototype.checkForCollisions_ = function () {
    if (this.scenery.test(this.rudolf) || this.scenery.test(this.santa)) {
      var a = Math.floor(c.PRESENT_HIT_SCORE * (1 + .1 * (this.level - 1)));
      this.scoreboard.addScore(a);
      this.scenery.addScore(a);
    }
  };
  m.Game.prototype.watchSceneSize_ = function () {
    function a() {
      var a = window.innerWidth,
        e = window.innerHeight - window.santaApp.headerSize,
        f = 900 > a ? a / 900 : 1;
      f = 640 > e ? Math.min(e / 640, f) : f;
      b.css({
        transform: "scale(" + f + ")",
        width: a / f + "px",
        height: e / f + "px"
      });
    }
    var b = $(this.elem).find(".view");
    a();
    $(window).on("resize.racer", a);
  };
  m.Game.prototype.updateCameraPosition_ = function () {
    this.world.position.y = -1 * this.rudolf.position.y + 400;
  };
  m.Game.prototype.updateRudolfFromInputs_ = function () {
    0 !== this.inputVector.x ? this.rudolf.turn(.07 * this.inputVector.x) : this.rudolf.turn(.07 * -this.rudolf.targetRotation);
    0 > this.inputVector.y ? this.rudolf.accelerate(.1 * -this.inputVector.y) : 0 < this.inputVector.y ? this.rudolf.decelerate(.1 * this.inputVector.y) : this.rudolf.decelerate(.1);
  };
  m.Game.prototype.checkMarkerLine_ = function () {
    if (!this.markerLine.triggered && this.santa.position.y <= this.markerLine.position.y) {
      this.level++;
      this.scoreboard.addScore(Math.floor(c.LEVEL_UP_SCORE * (1 + .1 * (this.level - 1))));
      if (this.level === c.TOTAL_LEVELS + 1) {
        this.gameover();
        return;
      }
      this.scoreboard.setLevel(this.level - 1);
      2 <= this.level && this.scoreboard.addTime(this.nextDeadline);
      this.level === c.TOTAL_LEVELS && (this.markerLine.showLevel = !1);
      this.markerLine.triggered = !0;
      this.markerLine.center = 0;
      this.markerLine.level = this.level + 1;
      window.santaApp.fire("sound-trigger", "rc_player_level_up");
      this.nextDeadline -= 5;
      this.nextDeadline = Math.max(this.nextDeadline, this.MIN_DEADLINE);
    }
    !this.markerLine.center && 10 > Math.abs(this.world.position.y + this.markerLine.position.y + 314) && (this.markerLine.center = this.scenery.getCenter());
    this.world.position.y + this.markerLine.position.y > window.worldHeight && (this.markerLine.position.y -= this.markerDistance, this.markerLine.triggered = !1, this.markerDistance += this.markerDistanceIncrease);
  };
  m.Game.prototype.start = function () {
    this.startGame_();
  };
  m.Game.prototype.restart = function () {
    window.santaApp.fire("sound-trigger", "rc_start_game");
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "racer"
    });
    this.gameStartTime = +new Date();
    this.scenery.reset();
    this.santa.position.x = .5 * window.worldWidth;
    this.santa.position.y = 400;
    this.santa.rotation = 0;
    this.santa.velocity.x = 0;
    this.santa.velocity.y = 0;
    this.rudolf.position.x = .5 * window.worldWidth;
    this.rudolf.position.y = 300;
    this.rudolf.targetRotation = 0;
    this.rudolf.rotation = 0;
    this.rudolf.targetVelocity = 0;
    this.level = this.rudolf.velocity = 0;
    this.paused = !1;
    this.scoreboard.setLevel(this.level - 1);
    this.scoreboard.reset();
    this.nextDeadline = 30;
    this.markerDistance = 6E3;
    this.markerLine.position.y = -500;
    this.markerLine.reset();
    window.santaApp.fire("sound-trigger", "rc_start_game");
    this.unfreezeGame_();
  };
  m.Game.prototype.dispose = function () {
    this.playing && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "racer",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.playing = !1;
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".racer");
    $(this.elem).off(".racer");
    this.tutorial.dispose();
  };
  m.Game.prototype.gameover = function () {
    this.playing && (this.playing = !1, window.santaApp.fire("sound-trigger", "rc_game_over"), window.santaApp.fire("sound-trigger", "music_ingame_gameover"), window.santaApp.fire("sound-trigger", {
      name: "rc_sled_speed",
      args: [0]
    }), window.santaApp.fire("analytics-track-game-over", {
      gameid: "racer",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    }), this.gameoverView.show(this.scoreboard.score, this.level));
  };
  m.Game.prototype.pause = function () {
    this.paused = !0;
  };
  m.Game.prototype.resume = function () {
    this.paused = !1;
  };
  m.Game.prototype.isPaused = function () {
    return this.paused;
  };
  h.Game = m.Game;
  _globalExport = h.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('rc_load_sounds');
sceneApi.preload.images('img/present.png', 'img/rock.png', 'img/rudolf.png', 'img/santa-sleigh.png', 'img/surround.png', 'img/tracks.png', 'img/tree.png');
const game = new Game(document.getElementById('module-racer'), './');
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  sound: []
});
sceneApi.ready(async () => {
  sceneApi.play('rc_landing_page');
  game.start();
});