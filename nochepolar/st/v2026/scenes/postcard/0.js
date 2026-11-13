import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
      Constants: {
        BACKGROUND_COUNT: 8,
        FOREGROUND_COUNT: 8,
        SCREEN_WIDTH: 850,
        SCREEN_HEIGHT: 500,
        SMALL_SCREEN_WIDTH: 140,
        SMALL_CHARACTER_HEIGHT: 118,
        PICKER_ICON_SIZE: 74,
        TOUCH_TRESHOLD: 100
      }
    },
    f = c.Constants;
  function h(a, b) {
    let d = 0;
    return e => {
      d || (a(e), d = window.setTimeout(() => {
        d = 0;
      }, b));
    };
  }
  c.Controls = function (a) {
    this.scene = a;
    this.picker = a.picker;
    this.tutorial = a.tutorial;
    this.keys = {};
    this.start = {
      x: 0,
      y: 0
    };
    this.limitOnKeyDown_ = h(this.onKeyDown_.bind(this), 500);
    $(window).on("keydown.sendamessage", this.limitOnKeyDown_);
    this.scene.elem.on("touchstart.sendamessage", this.handleTouchStart_.bind(this));
    this.scene.elem.on("touchend.sendamessage", this.handleTouchEnd_.bind(this));
  };
  c.Controls.prototype.onKeyDown_ = function (a) {
    var b;
    a.keyCode in c.Controls.KEY_CODES_ && (b = c.Controls.KEY_CODES_[a.keyCode]);
    switch (b) {
      case "left":
        this.picker.navigate(-1, 0);
        break;
      case "right":
        this.picker.navigate(1, 0);
        break;
      case "up":
        this.picker.navigate(0, -1);
        break;
      case "down":
        this.picker.navigate(0, 1);
    }
    this.leftRightPressed || "left" !== b && "right" !== b || (this.tutorial.off("keys-leftright"), this.tutorial.off("spacenav-leftright"), this.leftRightPressed = !0);
    this.upDownPressed || "up" !== b && "down" !== b || (this.tutorial.off("keys-updown"), this.tutorial.off("spacenav-updown"), this.upDownPressed = !0);
  };
  c.Controls.KEY_CODES_ = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  c.Controls.prototype.handleTouchStart_ = function (a) {
    var b = a.originalEvent.changedTouches[0];
    this.start.x = b.pageX;
    this.start.y = b.pageY;
    a.preventDefault();
    ($(a.target).closest(".board").length || $(a.target).closest(".overlay").length) && $(a.target).trigger("click");
  };
  c.Controls.prototype.getChange_ = function (a) {
    return Math.abs(a) > c.Constants.TOUCH_TRESHOLD ? 0 > a ? 1 : -1 : 0;
  };
  c.Controls.prototype.handleTouchEnd_ = function (a) {
    var b = a.originalEvent.changedTouches[0];
    a = this.getChange_(b.pageX - this.start.x);
    b = this.getChange_(b.pageY - this.start.y);
    this.leftRightSwiped || 0 === a || (this.tutorial.off("touch-leftright"), this.leftRightSwiped = !0);
    this.upDownSwiped || 0 === b || (this.tutorial.off("touch-updown"), this.upDownSwiped = !0);
    this.picker.navigate(a, b);
  };
  c.Picker = function (a, b) {
    this.elem = a.elem;
    this.foreground = a.foreground;
    this.background = a.background;
    this.attachEvents_();
    b && "bg" in b && "fg" in b && (this.background.set(+b.bg), this.foreground.set(+b.fg));
  };
  c.Picker.prototype.attachEvents_ = function () {
    this.elem.find(".fgs-up").on("click", this.handleChange_(0, -1));
    this.elem.find(".fgs-down").on("click", this.handleChange_(0, 1));
    this.elem.find(".bgs-left").on("click", this.handleChange_(-1, 0));
    this.elem.find(".bgs-right").on("click", this.handleChange_(1, 0));
  };
  c.Picker.prototype.handleChange_ = function (a, b) {
    return function (d) {
      d.preventDefault();
      this.navigate(a, b);
    }.bind(this);
  };
  c.Picker.prototype.navigate = function (a, b) {
    const d = this.background.getPosition(a),
      e = this.foreground.getPosition(b);
    window.santaApp.fire("game-data", {
      bg: d,
      fg: e
    });
    this.background.set(d);
    this.foreground.set(e);
    0 !== a ? window.santaApp.fire("sound-trigger", {
      name: "sm_change_bg",
      args: [d]
    }) : 0 !== b && window.santaApp.fire("sound-trigger", {
      name: "sm_change_fg",
      args: [e]
    });
  };
  c.Slider = function (a, b) {
    this.elem = $(a);
    this.changed = b.changed;
    this.max = b.max;
    this.size = b.size;
    this.horizontal = b.horizontal;
    this.children = [].slice.call(this.elem.children());
    this.children = this.children.map(function (a) {
      return $(a);
    });
    this.center = Math.ceil(this.max / 2) - 1;
    this.selected = 1;
    this.first = this.position = 0;
    this.totalSize = this.size * this.max;
    this.balance_(-this.center);
  };
  c.Slider.prototype.getPosition = function (a) {
    isNaN(this.selected) && (this.selected = 1);
    a = this.selected + a;
    1 > a ? a = this.max + a % this.max : a > this.max && (a %= this.max);
    return a;
  };
  c.Slider.prototype.update_ = function (a) {
    this.elem.css("transform", "translate" + (this.horizontal ? "X" : "Y") + "(" + this.position * this.size * -1 + "px)");
    this.changed(this.selected, this.position, a);
  };
  c.Slider.prototype.balance_ = function (a) {
    var b = this.horizontal ? "left" : "top";
    if (0 < a) {
      var d = this.children.splice(0, a);
      for (var e = 0, g; g = d[e]; e++) g.css(b, "+=" + this.totalSize + "px");
      this.children.push.apply(this.children, d);
    } else {
      d = this.children.splice(a);
      for (e = 0; g = d[e]; e++) g.css(b, "-=" + this.totalSize + "px");
      this.children.unshift.apply(this.children, d);
    }
    this.first += a * this.size;
  };
  c.Slider.prototype.slide = function (a) {
    this.selected = this.getPosition(a);
    this.position += a;
    this.update_(a);
  };
  c.Slider.prototype.draw = function (a) {
    this.balance_(a);
    this.slide(a);
  };
  c.Slider.prototype.set = function (a) {
    isNaN(a) || this.selected === a || (1 > a ? a = this.max + a % this.max : a > this.max && (a %= this.max), a -= this.selected, Math.abs(a) > this.center && (0 < a ? (a = this.max - a, a *= -1) : a = this.max + a), this.draw(a));
  };
  c.shared = {};
  function k(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  c.shared.Tutorial = class {
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
  c.Scene = function (a, b) {
    this.elem = $(a);
    this.fgsLogoElem = this.elem.find(".picker .fgs .logo");
    this.bgsLogoElem = this.elem.find(".picker .bgs .logo");
    this.fgsTrackElem = this.elem.find(".fgs-up, .fgs-down");
    this.bgsTrackElem = this.elem.find(".bgs-left, .bgs-right");
    this.bgsTimer = this.fgsTimer = null;
    this.foreground = new c.Slider(this.elem.find(".message .fgs"), {
      max: f.FOREGROUND_COUNT,
      size: f.SCREEN_HEIGHT,
      changed: this.fgsChanged_.bind(this)
    });
    this.background = new c.Slider(this.elem.find(".message .bgs"), {
      max: f.BACKGROUND_COUNT,
      size: f.SCREEN_WIDTH,
      horizontal: !0,
      changed: this.bgsChanged_.bind(this)
    });
    this.picker = new c.Picker(this, b);
    this.tutorial = new c.shared.Tutorial("touch-updown touch-leftright keys-updown keys-leftright spacenav-updown spacenav-leftright");
    this.controls = new c.Controls(this);
    this.tutorial.start();
  };
  c.Scene.prototype.fgsChanged_ = function (a, b) {
    window.clearTimeout(this.fgsTimer);
    this.fgsTimer = window.setTimeout(function () {
      this.elem.removeClass("fgs-active");
    }.bind(this), 500);
    this.elem.addClass("fgs-active");
    this.fgsTrackElem.each(function () {
      var a = f.SMALL_CHARACTER_HEIGHT * (b + 1) * -1 + ($(this).data("offset") || 0);
      $(this).css("background-position", "0 " + a + "px");
    });
    this.fgsLogoElem.css("background-position", "0 " + -1 * f.PICKER_ICON_SIZE * b + "px");
  };
  c.Scene.prototype.bgsChanged_ = function (a, b) {
    window.clearTimeout(this.bgsTimer);
    this.bgsTimer = window.setTimeout(function () {
      this.elem.removeClass("bgs-active");
    }.bind(this), 500);
    this.elem.addClass("bgs-active");
    this.bgsTrackElem.each(function () {
      var a = f.SMALL_SCREEN_WIDTH * (b + 1) * -1 + ($(this).data("offset") || 0);
      $(this).css("background-position", a + "px 0");
    });
    this.bgsLogoElem.css("background-position", "-74px " + -1 * f.PICKER_ICON_SIZE * b + "px");
  };
  c.Scene.prototype.dispose = function () {
    $(window).off(".sendamessage");
    this.elem.off(".sendamessage");
    this.tutorial.dispose();
  };
  c.Game = c.Scene;
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('sm_load_sounds');
sceneApi.preload.images('img/bgs-small.png', 'img/bgs.png', 'img/fgs-small.png', 'img/fgs.png', 'img/logo.svg', 'img/sprite.png');
sceneApi.config({
  sound: ['sm_start', 'music_start_scene']
});
sceneApi.ready(async data => {
  new Game(document.getElementById('module-postcard'), data);
});