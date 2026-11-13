import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {};
  c.utils = function () {
    var b = {};
    return {
      distance: function (a, b) {
        return Math.sqrt(a * a + b * b);
      },
      randomLoop: function (a, b, d) {
        window.setTimeout(function () {
          a();
          c.utils.randomLoop(a, b, d);
        }, Math.max(b, Math.random() * d));
      },
      triggerStart: function (a) {
        b[a] || (window.santaApp.fire("sound-trigger", a + "_start"), b[a] = !0);
      },
      triggerStop: function (a) {
        b[a] && (window.santaApp.fire("sound-trigger", a + "_stop"), b[a] = !1);
      },
      triggerOnce: function (a) {
        b[a] || (window.santaApp.fire("sound-trigger", a), b[a] = !0);
      },
      triggerReset: function (a) {
        b[a] = !1;
      }
    };
  }();
  c.Face = function (b, a) {
    this.game_ = b;
    this.eyes = a.find(".eye");
    this.eyebrows = a.find(".eyebrow");
    this.nose = a.find(".nose");
    this.face = a.find(".Face");
  };
  c.Face.prototype.start = function () {
    c.utils.randomLoop(function () {
      this.eyes.each(function (b, a) {
        $(a).addClass("eye--blink");
        window.setTimeout(function () {
          $(a).removeClass("eye--blink");
        }, 200);
      }, this);
    }.bind(this), 1E3, 8E3);
  };
  c.Face.prototype.mouseChanged = function (b, a) {
    function e(a, b, d) {
      a.css({
        transform: "translate3d(" + b + "em, " + d + "em, 0)"
      });
    }
    function d(b) {
      var d = this.nose[0].getBoundingClientRect(),
        e = a.x - (d.left + d.right) / 2;
      d = a.y - 86 - (d.top + d.bottom) / 2;
      return Math.sqrt(e * e + d * d) < b;
    }
    if (b !== this.game_.mouse) throw Error("unexpected mouse callback");
    e(this.eyes, 10 * a.relX, 5 * a.relY);
    e(this.eyebrows, 0, 5 * b.relY);
    e(this.face, 10 * a.relX, 5 * a.relY);
    b = this.game_.tools;
    this.face.toggleClass("Face--hairdryerLeft", b.hairdryer.isSelected && a.down && -.3 > a.relX);
    this.face.toggleClass("Face--hairdryerRight", b.hairdryer.isSelected && a.down && .3 < a.relX);
    this.face.toggleClass("Face--hairdryerCenter", b.hairdryer.isSelected && a.down && .3 > Math.abs(a.relX));
    this.face.toggleClass("Face--alarmed", b.clipper.isSelected);
    this.face.toggleClass("Face--shaving", b.clipper.isSelected && a.down && d.call(this, 120));
  };
  c.Constants = {
    CANVAS_WIDTH: 1200,
    CANVAS_HEIGHT: 1400,
    CLOTH_HEIGHT: 25,
    CLOTH_WIDTH: 22,
    START_Y: 670,
    SPACING: 20,
    TIME_STEP: 16,
    PHYSICS_DELTA: .001024,
    PHYSICS_ACCURACY: 3,
    MOUSE_INFLUENCE: 20,
    MOUSE_CUT: 20,
    GRAVITY: 2E3,
    TEAR_DISTANCE: 80,
    ADD_DISTANCE: 100,
    DAMPING: .8,
    HAIRDRYER_FORCE: 5500,
    NEAR_SANTA_DIM: 230,
    ENCODER: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    INTERACTION_URL_DELAY: 250
  };
  c.Point = function (b, a) {
    this.game_ = b;
    this.options = a;
    this.x = a.x;
    this.y = a.y;
    this.px = this.x;
    this.py = this.y;
    this.vy = this.vx = 0;
    this.pinned = a.pinned || !1;
    this.rotation = a.rotation || 2 * Math.random() * Math.PI;
    this.constraints = a.constraints || [];
    this.draw = a.hasOwnProperty("draw") ? a.draw : !0;
    this.constrain = a.hasOwnProperty("constrain") ? a.constrain : !0;
  };
  c.Point.prototype.reset = function () {
    if (this.draw) {
      var b = this.decoration,
        a = this.spray;
      var e = new c.Point(this.game_, this.options);
      e.decoration = b;
      e.spray = a;
    } else e = new c.Point(this.game_, this.options);
    e.draw = !0;
    e.constrain = !0;
    return e;
  };
  c.Point.prototype.update = function (b) {
    var a = c.Constants.MOUSE_CUT,
      e = c.Constants.MOUSE_INFLUENCE,
      d = c.Constants.GRAVITY,
      f = c.Constants.DAMPING,
      g = c.Constants.HAIRDRYER_FORCE,
      k = c.Constants.PHYSICS_DELTA,
      n = this.game_.tools.selectedTool,
      m = this.game_.mouse.scaleFactor,
      p = this.x * m - b.x;
    m = c.utils.distance(p, this.y * m - b.y);
    b.down && (this.game_.tools.clipper.isSelected && m < a && (this.game_.interactionDone(), this.removeConstraint()), this.game_.tools.hairdryer.isSelected && this.addForce(p / Math.abs(p) * g, 0), !n && m < e && (this.px = this.x - (b.x - b.px), this.py = this.y - (b.y - b.py)));
    this.addForce(0, d);
    b = this.x + (this.x - this.px) * f + this.vx / 2 * k;
    f = this.y + (this.y - this.py) * f + this.vy / 2 * k;
    this.px = this.x;
    this.py = this.y;
    this.x = b;
    this.y = f;
    this.vy = this.vx = 0;
  };
  c.Point.prototype.drawHair = function (b, a, e) {
    if (this.draw) {
      var d = Math.sin(this.rotation),
        f = Math.cos(this.rotation),
        g = b.width,
        k = b.height;
      a.save();
      a.setTransform(f, d, -d, f, this.x * e, this.y * e);
      a.drawImage(b, -g / 2, -k / 2, g, k);
      a.restore();
    }
  };
  c.Point.prototype.drawSpray = function (b, a) {
    this.spray && this.draw && b.drawImage(this.spray, (this.x - this.spray.width / 2) * a, (this.y - this.spray.height / 2) * a, this.spray.width * a, this.spray.height * a);
  };
  c.Point.prototype.drawDecoration = function (b, a) {
    this.decoration && this.draw && b.drawImage(this.decoration, (this.x - this.decoration.width / 2) * a, (this.y - this.decoration.height / 2) * a, this.decoration.width * a, this.decoration.height * a);
  };
  c.Point.prototype.resolveConstraints = function (b) {
    if (this.pinned) this.x = this.px, this.y = this.py;else {
      for (var a = this.constraints.length; a--;) this.resolveConstraint(b[this.constraints[a]]);
      b = c.Constants.CANVAS_WIDTH - 1;
      a = c.Constants.CANVAS_HEIGHT - 1;
      this.x > b ? this.x = 2 * b - this.x : 1 > this.x && (this.x = 2 - this.x);
      1 > this.y ? this.y = 2 - this.y : this.y > a && (this.y = a, this.draw = !1);
    }
  };
  c.Point.prototype.removeConstraint = function () {
    this.pinned = this.constrain = !1;
  };
  c.Point.prototype.addForce = function (b, a) {
    this.vx += b;
    this.vy += a;
  };
  c.Point.prototype.pin = function () {
    this.pinned = !0;
  };
  c.Point.prototype.resolveConstraint = function (b) {
    if (this.constrain) {
      var a = c.Constants.TEAR_DISTANCE,
        e = c.Constants.SPACING,
        d = this.x - b.x,
        f = this.y - b.y,
        g = c.utils.distance(d, f);
      e = (e - g) / g;
      this.game_.tools.clipper.isSelected && f > a && this.removeConstraint();
      a = d * e * .5;
      f = f * e * .5;
      this.x += a;
      this.y += f;
      b.x -= a;
      b.y -= f;
    }
  };
  c.encoding = {
    encode: function (b) {
      for (var a = b[0], e = "", d = 1, f = 0; f < b.length; f++) a === b[f + 1] ? d++ : (e += d, e += a, a = b[f + 1], d = 1);
      return e;
    },
    decode: function (b) {
      var a = b.match(/([0-9]+)/g);
      b = b.match(/([A-Za-z])/g);
      for (var e = "", d = 0; d < b.length; d++) for (var f = b[d], g = a[d]; g--;) e += f;
      return e;
    }
  };
  c.Cloth = function (b, a) {
    this.canvas = a;
    this.ctx = this.canvas.getContext("2d");
    this.hairCanvas = document.createElement("canvas");
    this.game_ = b;
    this.mouse = {
      down: !1,
      x: 0,
      y: 0,
      px: 0,
      py: 0
    };
    this.canPlaceDecoration = !0;
    this.nearBeard = !1;
  };
  c.Cloth.prototype.start = function () {
    this.hairShape = this.drawHairShape_();
    this.points = this.drawInitialCloth();
    $(this.canvas).on("click.santaselfie touchend.santaselfie", this.addHair_.bind(this));
    $(window).on("resize.santaselfie", function () {
      this.hairShape = this.drawHairShape_();
    }.bind(this));
  };
  c.Cloth.prototype.resetCloth = function () {
    this.points = this.drawInitialCloth();
    this.game_.interactionDone();
  };
  c.Cloth.prototype.mouseChanged = function (b, a) {
    if (b !== this.game_.mouse) throw Error("unexpected mouse callback");
    var e = !1,
      d = this.game_.tools,
      f = this.canvas.getBoundingClientRect();
    f = b.transformCoordinates(b.x, b.y, f);
    this.mouse.px = this.mouse.x;
    this.mouse.py = this.mouse.y;
    this.mouse.x = f.x;
    this.mouse.y = f.y;
    this.mouse.down = f.down;
    this.canPlaceDecoration || (this.canPlaceDecoration = !a.down);
    if (this.mouse.down && d.selectedTool && (d.selectedTool.spray || d.hairclean.isSelected || d.selectedTool.decoration || d.clipper.isSelected)) {
      b = b.scaleFactor;
      f = !1;
      for (var g = this.points.length; g--;) if (this.points[g].draw && c.utils.distance(this.points[g].options.x * b - this.mouse.x, this.points[g].options.y * b - this.mouse.y) < c.Constants.SPACING * b && (d.clipper.isSelected && (f = this.nearBeard = !0), d.selectedTool.spray && (this.points[g].spray = d.selectedTool.spray, e = !0), d.hairclean.isSelected && (this.points[g].spray = null, this.points[g].decoration = null, e = !0), d.selectedTool.decoration && this.canPlaceDecoration)) {
        this.points[g].decoration = d.selectedTool.decoration;
        window.santaApp.fire("sound-trigger", "selfie_item");
        this.canPlaceDecoration = !1;
        e = !0;
        break;
      }
      f || (this.nearBeard = !1);
    }
    d.selectedTool && d.selectedTool.spray && a.down && a.x > c.Constants.NEAR_SANTA_DIM ? c.utils.triggerStart("selfie_color") : a.down || c.utils.triggerStop("selfie_color");
    this.nearBeard && d.clipper.isSelected && a.down ? c.utils.triggerStart("selfie_shave_cutting") : this.nearBeard && a.down || c.utils.triggerStop("selfie_shave_cutting");
    e && this.game_.interactionDone();
  };
  c.Cloth.prototype.drawInitialCloth = function () {
    function b(a, b) {
      a = p({
        x: m + a * g,
        y: k - b * g,
        pinned: !0
      });
      n.push(a);
    }
    function a(a, b) {
      a = p({
        x: m + 60 + a * g,
        y: k - 165 - b * g,
        pinned: !0
      });
      n.push(a);
    }
    for (var e = c.Constants.CANVAS_WIDTH, d = c.Constants.CLOTH_WIDTH, f = c.Constants.CLOTH_HEIGHT, g = c.Constants.SPACING, k = c.Constants.START_Y, n = [], m = e / 2 - d * g / 2, p = function (a) {
        return new c.Point(this.game_, a);
      }.bind(this), l = 0; l <= f; l++) for (var h = 0; h <= d; h++) {
      var r = [];
      0 < h && r.push(n.length - 1);
      0 < l && r.push(h + (l - 1) * (d + 1));
      var v = m + h * g,
        t = k + l * g,
        w = 5 > t || c.utils.distance(v - e / 2, t - k - 30) < (d + 2) * g / 2,
        q = d / 2;
      r = p({
        x: v,
        y: t,
        pinned: w,
        constraints: r,
        draw: l > f - q ? (h - q) * (h - q) + (l - (f - q)) * (l - (f - q)) < q * q : !0
      });
      n.push(r);
    }
    for (l = 1; 5 > l; l++) for (h = 0; 2 > h; h++) b(h, l), b(h + d - 1, l);
    for (h = 3; 11 > h; h++) a(h, 3);
    for (h = 3; 12 > h; h++) a(h, 2);
    for (h = 4; 12 > h; h++) a(h, 1);
    for (h = 5; 11 > h; h++) a(h, 0);
    return n;
  };
  c.Cloth.prototype.drawHairShape_ = function () {
    var b = this.hairCanvas.getContext("2d"),
      a = this.game_.mouse.scaleFactor;
    this.hairCanvas.width = 53 * a;
    this.hairCanvas.height = 52 * a;
    b.scale(a, a);
    b.fillStyle = "#ffffff";
    b.beginPath();
    b.moveTo(47, 30);
    b.bezierCurveTo(46, 28, 49, 25, 49, 23);
    b.bezierCurveTo(48, 20, 47, 18, 46, 15);
    b.bezierCurveTo(44, 15, 46, 18, 40, 19);
    b.bezierCurveTo(41, 12, 34, 7, 34, 0);
    b.bezierCurveTo(31, 5, 30, 11, 31, 17);
    b.bezierCurveTo(28, 13, 23, 10, 22, 4);
    b.bezierCurveTo(19, 9, 19, 13, 18, 18);
    b.bezierCurveTo(13, 14, 6, 14, 0, 17);
    b.bezierCurveTo(4, 18, 9, 19, 11, 23);
    b.bezierCurveTo(9, 21, 2, 21, 0, 22);
    b.bezierCurveTo(9, 26, 10, 38, 17, 43);
    b.bezierCurveTo(17, 44, 12, 48, 11, 46);
    b.bezierCurveTo(13, 49, 19, 48, 22, 48);
    b.bezierCurveTo(23, 49, 26, 50, 27, 50);
    b.bezierCurveTo(32, 52, 28, 44, 33, 52);
    b.bezierCurveTo(33, 46, 37, 47, 39, 50);
    b.bezierCurveTo(39, 48, 38, 46, 37, 44);
    b.bezierCurveTo(42, 44, 46, 41, 49, 38);
    b.bezierCurveTo(47, 39, 44, 39, 43, 37);
    b.bezierCurveTo(44, 39, 53, 31, 53, 29);
    b.bezierCurveTo(51, 31, 49, 31, 47, 30);
    b.bezierCurveTo(47, 29, 48, 31, 47, 30);
    b.closePath();
    b.fill();
    return this.hairCanvas;
  };
  c.Cloth.prototype.update = function () {
    for (var b = c.Constants.PHYSICS_ACCURACY; b--;) for (var a = this.points.length; a--;) this.points[a].resolveConstraints(this.points);
    for (b = this.points.length; b--;) this.points[b].update(this.mouse);
  };
  c.Cloth.prototype.draw = function () {
    var b = this.game_.mouse.scaleFactor;
    this.canvas.width = c.Constants.CANVAS_WIDTH * b;
    this.canvas.height = c.Constants.CANVAS_HEIGHT * b;
    for (var a = this.points.length; a--;) this.points[a].drawHair(this.hairShape, this.ctx, b);
    this.ctx.globalCompositeOperation = "source-atop";
    for (a = this.points.length; a--;) this.points[a].drawSpray(this.ctx, b);
    this.ctx.globalCompositeOperation = "source-over";
    for (a = this.points.length; a--;) this.points[a].drawDecoration(this.ctx, b);
  };
  c.Cloth.prototype.addHair_ = function () {
    if (this.game_.tools.hairgrow.isSelected) {
      for (var b = this.game_.mouse.scaleFactor, a = this.points.length, e = !1; a--;) c.utils.distance(this.points[a].options.x * b - this.mouse.x, this.points[a].options.y * b - this.mouse.y) < c.Constants.ADD_DISTANCE && (this.points[a] = this.points[a].reset(), e = !0);
      e && this.game_.interactionDone();
    }
  };
  c.Cloth.prototype.save = function () {
    var b = c.Constants.ENCODER,
      a = this.game_.tools.sprays,
      e = this.game_.tools.decorations,
      d = this.points.map(function (d) {
        var f = 0;
        d.draw && d.constrain && (f += 1);
        d.draw && d.spray && (f += 5 * (a.indexOf(d.spray) + 1));
        d.draw && d.decoration && (f += e.indexOf(d.decoration) + 1);
        return b[f];
      });
    return c.encoding.encode(d.join(""));
  };
  c.Cloth.prototype.restore = function (b) {
    var a = c.Constants.ENCODER,
      e = this.game_.tools.sprays,
      d = this.game_.tools.decorations;
    b = c.encoding.decode(b).split("").map(function (b) {
      return a.indexOf(b);
    });
    for (var f = this.drawInitialCloth(), g = 0; g < f.length; g++) {
      f[g].draw = f[g].constrain = 0 < b[g];
      var k = Math.floor((b[g] - 1) / 5);
      f[g].spray = 0 < k ? e[k - 1] : void 0;
      k = (b[g] - 1) % 5;
      f[g].decoration = 0 < k ? d[k - 1] : void 0;
    }
    this.points = f;
  };
  c.Mouse = function (b) {
    this.$elem = b;
    this.elem = b[0];
    this.rect = this.elem.getBoundingClientRect();
    this.down = !1;
    this.relY = this.relX = this.y = this.x = 0;
    this.subscribers = [];
    $(window).on("resize.santaselfie orientationchange.santaselfie", function () {
      this.calculateScale_();
      this.update();
    }.bind(this));
    this.calculateScale_();
    b.on("mousemove", function (a) {
      this.x = a.clientX;
      this.y = a.clientY;
      a.preventDefault();
    }.bind(this));
    b.on("touchstart touchmove", function (a) {
      this.x = a.originalEvent.touches[0].clientX;
      this.y = a.originalEvent.touches[0].clientY;
      a.preventDefault();
    }.bind(this));
    b.on("mousedown touchstart", function (a) {
      this.down = !0;
      a.preventDefault();
    }.bind(this));
    b.on("mouseup mouseleave touchend touchleave", function (a) {
      this.down = !1;
      a.cancelable && a.preventDefault();
    }.bind(this));
  };
  c.Mouse.prototype.calculateScale_ = function () {
    var b = $(window).width(),
      a = $(window).height() - window.santaApp.headerSize;
    b = Math.min((b + 1420) / 3340, a / 985);
    this.$elem.css({
      "font-size": b
    });
    this.rect = this.elem.getBoundingClientRect();
    this.scaleFactor = b;
  };
  c.Mouse.prototype.subscribe = function (b, a) {
    this.subscribers.push({
      callback: b,
      context: a
    });
  };
  c.Mouse.prototype.update = function () {
    var b = this.coordinates();
    this.subscribers.forEach(function (a) {
      a.callback.call(a.context, this, b);
    }, this);
  };
  c.Mouse.prototype.coordinates = function () {
    return this.transformCoordinates(this.x, this.y, this.rect);
  };
  c.Mouse.prototype.transformCoordinates = function (b, a, e) {
    return {
      x: b - e.left,
      y: a - e.top,
      relX: 2 * b / e.width - 1,
      relY: 2 * a / e.height - 1,
      down: this.down,
      scale: this.scaleFactor
    };
  };
  c.shared = {};
  c.shared.utils = function () {
    class b {
      constructor(a) {
        this.value = a;
      }
      change(a) {
        const b = this.value !== a;
        this.value = a;
        return b;
      }
      moveToTarget(a, b) {
        let d = +this.value;
        if (this.value !== d) throw new TypeError("SmartValue does not contain a number");
        d < a ? d = Math.min(a, d + b) : d > a && (d = Math.max(a, d - b));
        this.value = d;
        return this;
      }
    }
    return {
      animWithClass: function (a, b, d) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(b);
          const e = () => {
            a.classList.remove(b);
            a.removeEventListener("animationend", e);
            a.removeEventListener("transitionend", e);
            d && (d(), d = null);
          };
          a.addEventListener("animationend", e);
          a.addEventListener("transitionend", e);
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
        } catch (g) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: f[4],
          y: f[5],
          rotate: 180 / Math.PI * Math.atan2(f[1], f[0])
        };
      },
      onWebAnimationFinished: function (a, b) {
        const d = a.finished;
        d && d.then ? d.then(b) : a.addEventListener("finish", b, !1);
      },
      playerFinished: function (a) {
        return !a || "finished" === a.playState;
      },
      get touchEnabled() {
        return "standalone" in navigator || window.matchMedia("(pointer: coarse)").matches ? !0 : window.matchMedia("(pointer: fine)").matches ? !1 : "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      },
      SmartValue: b
    };
  }();
  function u(b, a) {
    b.prototype = Object.create(a.prototype);
    b.prototype.constructor = b;
    Object.setPrototypeOf(b, a);
  }
  c.Tool = function (b, a, e) {
    this.elem = b;
    this.el = this.elem.find(".Tool-" + a);
    this.container = this.el.closest(".Tool-container");
    this.isSelected = !1;
    this.mouseOffset = e || {
      x: 0,
      y: 0
    };
    this.animationEl = null;
    this.animateInfinitely = !1;
    this.animationPlayer = null;
    this.isAnimating = !1;
    this.initAnimation_();
  };
  c.Tool.prototype.select = function (b) {
    this.isSelected = !0;
    this.el.addClass("Tool--selected");
    this.width = this.el.width();
    c.shared.utils.touchEnabled ? this.elem.css({
      "background-size": 0
    }) : this.elem.css({
      cursor: "none"
    });
    this.move(b);
    window.santaApp.fire("sound-trigger", "selfie_click");
  };
  c.Tool.prototype.deselect = function () {
    this.isSelected = !1;
    this.el.removeClass("Tool--selected Tool--left Tool--right Tool-hairdryer--center");
    this.el.css({
      top: "",
      left: ""
    });
    this.elem.css({
      cursor: ""
    });
  };
  c.Tool.prototype.isLeftRightTool_ = function () {
    return !1;
  };
  c.Tool.prototype.move = function (b) {
    var a = this.mouseOffset.x;
    0 < b.relX && this.isLeftRightTool_() && (a = this.width - this.mouseOffset.x);
    this.el.css({
      left: b.x - a * b.scale,
      top: b.y - this.mouseOffset.y * b.scale + window.santaApp.headerSize
    });
    b = this.shouldAnimate_(b);
    b !== this.isAnimating && ((this.isAnimating = b) ? (this.animationEl.show(), this.animationPlayer.currentTime = 0, this.animationPlayer.play()) : this.animateInfinitely && (this.animationEl.hide(), this.animationPlayer.pause()));
  };
  c.Tool.prototype.initAnimation_ = function () {
    this.el.find(".Tool-animation").length && (this.animationEl = this.el.find(".Tool-animation"));
    var b = this.createAnimation_();
    b && (this.animateInfinitely = Infinity === b.timing.iterations, this.animationPlayer = document.timeline.play(b), this.animationPlayer.pause());
  };
  c.Tool.prototype.createAnimation_ = function () {
    return null;
  };
  c.Tool.prototype.shouldAnimate_ = function (b) {
    return this.animationPlayer ? b.down && b.x > c.Constants.NEAR_SANTA_DIM : !1;
  };
  c.Clipper = function (b, a) {
    c.Tool.call(this, b, "clipper", {
      x: 40,
      y: 0
    });
    this.cloth_ = a;
  };
  u(c.Clipper, c.Tool);
  c.Clipper.prototype.createAnimation_ = function () {
    return new KeyframeEffect(this.animationEl[0], [{
      backgroundPosition: "0 0px"
    }, {
      backgroundPosition: "0 -2100px"
    }], {
      duration: 460,
      easing: "steps(14, end)",
      iterations: Infinity
    });
  };
  c.Clipper.prototype.shouldAnimate_ = function (b) {
    return b.down && b.x > c.Constants.NEAR_SANTA_DIM && this.cloth_.nearBeard;
  };
  c.Clipper.prototype.select = function (b) {
    c.Tool.prototype.select.call(this, b);
    window.santaApp.fire("sound-trigger", "selfie_concerned");
  };
  c.Clipper.prototype.deselect = function () {
    c.Tool.prototype.deselect.call(this);
    window.santaApp.fire("sound-trigger", "selfie_happy");
  };
  c.Hairgrow = function (b) {
    c.Tool.call(this, b, "hairgrow", {
      x: 110,
      y: 25
    });
  };
  u(c.Hairgrow, c.Tool);
  c.Hairgrow.prototype.createAnimation_ = function () {
    return new KeyframeEffect(this.animationEl[0], [{
      backgroundPosition: "0 350px"
    }, {
      backgroundPosition: "0 -2450px"
    }], {
      duration: 230,
      easing: "steps(8, end)"
    });
  };
  c.Hairgrow.prototype.isLeftRightTool_ = function () {
    return !0;
  };
  c.Hairclean = function (b) {
    c.Tool.call(this, b, "hairclean", {
      x: 120,
      y: 10
    });
  };
  u(c.Hairclean, c.Tool);
  c.Hairclean.prototype.createAnimation_ = function () {
    return new KeyframeEffect(this.animationEl[0], [{
      backgroundPosition: "0 0px"
    }, {
      backgroundPosition: "0 -2100px"
    }], {
      duration: 460,
      easing: "steps(14, end)",
      iterations: Infinity
    });
  };
  c.Hairclean.prototype.isLeftRightTool_ = function () {
    return !0;
  };
  c.Spray = function (b, a) {
    c.Tool.call(this, b, "spray--" + a, {
      x: 47,
      y: 0
    });
    this.spray = this.elem.find("#spray--" + a)[0];
  };
  c.Spray.prototype = Object.create(c.Tool.prototype);
  c.Decoration = function (b, a, e, d) {
    c.Tool.call(this, b, "decoration--" + a, e);
    this.decoration = d;
  };
  c.Decoration.prototype = Object.create(c.Tool.prototype);
  c.Tools = function (b, a) {
    this.game_ = b;
    this.elem = a.find(".Tools");
    this.clipper = new c.Clipper(a, b.cloth);
    this.hairdryer = new c.Tool(a, "hairdryer", {
      x: 100,
      y: 0
    });
    this.hairgrow = new c.Hairgrow(a);
    this.hairclean = new c.Hairclean(a);
    this.sprayRed = new c.Spray(a, "red");
    this.sprayOrange = new c.Spray(a, "orange");
    this.sprayYellow = new c.Spray(a, "yellow");
    this.sprayGreen = new c.Spray(a, "green");
    this.sprayCyan = new c.Spray(a, "cyan");
    this.sprayPurple = new c.Spray(a, "purple");
    this.sprayPink = new c.Spray(a, "pink");
    this.sprayBlue = new c.Spray(a, "blue");
    this.decorationSnowman = new c.Decoration(a, "snowman", {
      x: 40,
      y: 50
    }, a.find("#snowman")[0]);
    this.decorationBauble = new c.Decoration(a, "bauble", {
      x: 40,
      y: 50
    }, a.find("#bauble")[0]);
    this.decorationBow = new c.Decoration(a, "bow", {
      x: 50,
      y: 45
    }, a.find("#bow")[0]);
    this.decorationHolly = new c.Decoration(a, "holly", {
      x: 40,
      y: 45
    }, a.find("#holly")[0]);
    this.tools = [this.clipper, this.hairdryer, this.hairgrow, this.hairclean, this.sprayRed, this.sprayOrange, this.sprayYellow, this.sprayGreen, this.sprayCyan, this.sprayPurple, this.sprayPink, this.sprayBlue, this.decorationSnowman, this.decorationBauble, this.decorationBow, this.decorationHolly];
    this.sprays = [this.sprayRed.spray, this.sprayOrange.spray, this.sprayYellow.spray, this.sprayGreen.spray, this.sprayCyan.spray, this.sprayPurple.spray, this.sprayPink.spray, this.sprayBlue.spray];
    this.decorations = [this.decorationSnowman.decoration, this.decorationBauble.decoration, this.decorationBow.decoration, this.decorationHolly.decoration];
  };
  c.Tools.prototype.start = function () {
    function b(a, b) {
      this.isSelected && (0 < b.relX ? (this.el.addClass("Tool--right"), this.el.removeClass("Tool--left")) : (this.el.addClass("Tool--left"), this.el.removeClass("Tool--right")));
    }
    this.selectTool_ = this.selectTool_.bind(this);
    this.elem.on("click touchend", this.selectTool_);
    var a = this.game_.mouse;
    a.subscribe(function (a, b) {
      this.isSelected && (.3 >= Math.abs(b.relX) ? this.el.addClass("Tool-hairdryer--center") : this.el.removeClass("Tool-hairdryer--center"), -.3 > b.relX ? this.el.addClass("Tool--left") : this.el.removeClass("Tool--left"), .3 < b.relX ? this.el.addClass("Tool--right") : this.el.removeClass("Tool--right"));
    }, this.hairdryer);
    a.subscribe(b, this.hairclean);
    a.subscribe(b, this.hairgrow);
  };
  c.Tools.prototype.mouseChanged = function (b, a) {
    this.selectedTool && this.selectedTool.move(a);
    this.hairdryer.isSelected && a.down && a.x > c.Constants.NEAR_SANTA_DIM ? c.utils.triggerStart("selfie_dryer") : a.down || c.utils.triggerStop("selfie_dryer");
    this.clipper.isSelected && a.down && a.x > c.Constants.NEAR_SANTA_DIM ? c.utils.triggerStart("selfie_shave") : a.down || c.utils.triggerStop("selfie_shave");
    this.hairgrow.isSelected && a.down && a.x > c.Constants.NEAR_SANTA_DIM ? c.utils.triggerOnce("selfie_spray_small") : a.down || c.utils.triggerReset("selfie_spray_small");
    this.hairclean.isSelected && a.down && a.x > c.Constants.NEAR_SANTA_DIM ? c.utils.triggerOnce("selfie_spray_big") : a.down || c.utils.triggerReset("selfie_spray_big");
  };
  c.Tools.prototype.deselect = function () {
    this.selectedTool && this.selectedTool.deselect();
    this.selectedTool = null;
  };
  c.Tools.prototype.selectTool_ = function (b) {
    var a = this.selectedTool;
    if (this.selectedTool = this.tools.filter(function (a) {
      if (a.container[0] === b.target && !a.isSelected) return a;
    })[0]) {
      var e = this.game_.mouse.coordinates();
      this.selectedTool.select(e);
    }
    a && a.deselect();
  };
  c.Game = function (b, a) {
    this.elem = $(b);
    this.gameStartTime = null;
    this.sceneElem = this.elem.find(".scene");
    this.callback_ = a;
    b = this.sceneElem.find("#beard")[0];
    this.mouse = new c.Mouse(this.sceneElem);
    this.cloth = new c.Cloth(this, b);
    this.face = new c.Face(this, this.sceneElem);
    this.tools = new c.Tools(this, this.sceneElem);
    this.onFrame_ = this.onFrame_.bind(this);
    this.interactionDoneTimeout_ = this.accumulator = 0;
    this.initialBeard_ = "";
  };
  c.Game.prototype.start = function (b) {
    this.tools.start();
    this.cloth.start();
    this.face.start();
    this.mouse.subscribe(this.tools.mouseChanged, this.tools);
    this.mouse.subscribe(this.cloth.mouseChanged, this.cloth);
    this.mouse.subscribe(this.face.mouseChanged, this.face);
    this.elem.find("#share-button, #share-button-toolbox").on("click.santaselfie touchend.santaselfie", this.showShareOverlay.bind(this));
    this.elem.find("#reset-button, #reset-button-toolbox").on("click.santaselfie touchend.santaselfie", this.resetBeard_.bind(this));
    this.restart();
    this.initialBeard_ = this.cloth.save();
    b && b.beard && this.cloth.restore(b.beard);
  };
  c.Game.prototype.resetBeard_ = function () {
    this.cloth.resetCloth();
    this.updateUrlState_();
  };
  c.Game.prototype.restart = function () {
    this.paused = !1;
    this.unfreezeGame();
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "santaselfie"
    });
    this.gameStartTime = +new Date();
  };
  c.Game.prototype.update = function (b) {
    if (this.isPlaying) for (this.mouse.update(), this.accumulator += b; this.accumulator > c.Constants.TIME_STEP;) this.cloth.update(), this.accumulator -= c.Constants.TIME_STEP;
  };
  c.Game.prototype.showShareOverlay = function () {
    this.tools.deselect();
    window.clearTimeout(this.interactionDoneTimeout_);
    this.updateUrlState_();
    window.santaApp.fire("game-stop", {
      share: !0
    });
  };
  c.Game.prototype.interactionDone = function () {
    window.clearTimeout(this.interactionDoneTimeout_);
    this.interactionDoneTimeout_ = window.setTimeout(() => this.updateUrlState_(), c.Constants.INTERACTION_URL_DELAY);
  };
  c.Game.prototype.updateUrlState_ = function () {
    const b = this.cloth.save();
    this.callback_(b === this.initialBeard_ ? null : {
      beard: b
    });
  };
  c.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  c.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen"), this.isPlaying = !0, this.lastFrame = +new Date(), this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  c.Game.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var b = +new Date(),
        a = Math.min(1E3, b - this.lastFrame);
      this.lastFrame = b;
      this.update(a);
      this.cloth.draw();
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  c.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  c.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  c.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "santaselfie",
      timePlayed: new Date() - this.gameStartTime,
      level: 1
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".santaselfie");
    $(document).off(".santaselfie");
  };
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('selfie_load_sounds');
sceneApi.preload.images('img/background/chair.svg', 'img/background/mirror.svg', 'img/background/photos.svg', 'img/background/pole--background.svg', 'img/background/pole--foreground.svg', 'img/background/pole--stripes.svg', 'img/face/eye--blink.svg', 'img/face/eye--closed.svg', 'img/face/eye.svg', 'img/face/mouth--breath.svg', 'img/face/mouth--smile.svg', 'img/face/nose.svg', 'img/icons/reset.svg', 'img/loading.svg', 'img/pole.svg', 'img/santa/body.svg', 'img/santa/face.svg', 'img/share.svg', 'img/sprites/clipper.png', 'img/sprites/hairclean.png', 'img/sprites/hairgrow.png', 'img/tools/clipper.svg', 'img/tools/decorations/bauble.svg', 'img/tools/decorations/bow.svg', 'img/tools/decorations/holly.svg', 'img/tools/decorations/snowman.svg', 'img/tools/hairclean.svg', 'img/tools/hairdryer--center.svg', 'img/tools/hairdryer--left.svg', 'img/tools/hairdryer--right.svg', 'img/tools/hairgrow.svg', 'img/tools/shadows/bauble.svg', 'img/tools/shadows/bow.svg', 'img/tools/shadows/clipper.svg', 'img/tools/shadows/hairclean.svg', 'img/tools/shadows/hairdryer.svg', 'img/tools/shadows/hairgrow.svg', 'img/tools/shadows/holly.svg', 'img/tools/shadows/snowman.svg', 'img/tools/shadows/spray.svg', 'img/tools/spray--blue.svg', 'img/tools/spray--cyan.svg', 'img/tools/spray--green.svg', 'img/tools/spray--orange.svg', 'img/tools/spray--pink.svg', 'img/tools/spray--purple.svg', 'img/tools/spray--red.svg', 'img/tools/spray--yellow.svg', 'img/tools/sprays/blue.png', 'img/tools/sprays/cyan.png', 'img/tools/sprays/green.png', 'img/tools/sprays/orange.png', 'img/tools/sprays/pink.png', 'img/tools/sprays/purple.png', 'img/tools/sprays/red.png', 'img/tools/sprays/yellow.png', 'img/tray_lg.svg', 'img/tray_ornament_lg.svg');
const game = new Game(document.getElementById('module-santaselfie'), data => sceneApi.data(data));
sceneApi.config({
  sound: ['music_start_ingame', 'selfie_start']
});
sceneApi.ready(async data => {
  game.start(data);
});