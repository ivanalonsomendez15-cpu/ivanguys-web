import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    shared: {}
  };
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
  c.shared.Overlay = function (a) {
    this.elem = c.shared.utils.unwrapElement(a);
  };
  c.shared.Overlay.prototype.show = function () {
    this.elem.classList.add("is-visible");
  };
  c.shared.Overlay.prototype.hide = function (a) {
    function b() {
      d.removeEventListener("animationend", b);
      d.classList.remove("is-visible");
      d.classList.remove("is-closed");
      a && a();
    }
    var d = this.elem;
    d.addEventListener("animationend", b);
    d.classList.add("is-closed");
  };
  c.ChooseMap = function (a) {
    this.elem = a;
    this.callback_ = null;
    this.elem.on("click", ".choose-map__option", this.setMap_.bind(this));
    this.overlay = new c.shared.Overlay(this.elem[0]);
  };
  c.ChooseMap.prototype.setMap_ = function (a) {
    a = $(a.currentTarget).data("map");
    this.callback_(a);
    window.setTimeout(() => {
      this.overlay.hide();
    }, 100);
  };
  c.ChooseMap.prototype.show = function (a) {
    this.callback_ = a;
    this.overlay.show();
  };
  c.Constants = {
    ZOOM_MAX: 4,
    ZOOM_STEP_SIZE: 1,
    PRESCALE_TIME: .3,
    HINT_ZOOM: 2,
    HINT_BUTTON_PAN_TIME: .6,
    HINT_RANDOM_DISTANCE: 15,
    CHARACTERS: "santa penguin gingerbread-man rudolph pegman mrs-claus".split(" "),
    SPAWN_COUNT: 6,
    INITIAL_COUNTDOWN: 0,
    COUNTDOWN_TRACK_LENGTH: 0,
    COUNTDOWN_FLASH: 0
  };
  c.Controls = function (a, b, d) {
    this.elem = a;
    this.sceneElem = b;
    this.scrollableElem = this.elem.find(".viewport--scrollable");
    this.viewportDimensions = d;
    this.enabled = !1;
    this.interactionType = "";
    this.pinching = this.selecting = this.syncingScroll = !1;
    this.originalPinchScale = this.originalPinchDistance = void 0;
    this.hasLastLocation = !1;
    this.lastLocation = {
      x: 0,
      y: 0
    };
    this.pan = {
      x: 0,
      y: 0
    };
    this.needsPanUpdate = !1;
    this.scale = 1;
    this.needsScaleUpdate = !1;
  };
  c.Controls.prototype.start = function () {
    this.elem.on("touchstart.santasearch", this.onTouchstart_.bind(this));
    this.elem.on("touchmove.santasearch", this.onTouchmove_.bind(this));
    this.elem.on("touchend.santasearch", this.onTouchend_.bind(this));
    this.elem.on("mousedown.santasearch", this.onMousedown_.bind(this));
    this.elem.on("mousemove.santasearch", this.onMousemove_.bind(this));
    this.elem.on("mouseup.santasearch", this.onMouseup_.bind(this));
    this.elem.on("mouseleave.santasearch", this.onMouseup_.bind(this));
    this.scrollableElem.on("scroll.santasearch", this.onScroll_.bind(this));
    this.elem.find(".zoom__in").on("click", this.zoomIn_.bind(this));
    this.elem.find(".zoom__out").on("click", this.zoomOut_.bind(this));
    this.scrollableElem.on("dblclick.santasearch", this.nextZoomLevel_.bind(this));
    this.enabled = !0;
  };
  c.Controls.prototype.reset = function () {
    this.scale = 1;
    this.pan.x = 0;
    this.pan.y = 0;
    this.selecting = this.pinching = !1;
    this.syncScroll();
    this.scaleTarget = void 0;
  };
  c.Controls.prototype.updateLocation_ = function (a, b) {
    this.enabled && (this.hasLastLocation && (this.pan.x += a - this.lastLocation.x, this.pan.y += b - this.lastLocation.y, this.needsPanUpdate = !0), this.lastLocation.x = a, this.lastLocation.y = b, this.hasLastLocation = !0, this.syncScroll());
  };
  c.Controls.prototype.syncScroll = function () {
    this.syncingScroll = !0;
    this.scrollableElem.scrollLeft(this.viewportDimensions.left - this.pan.x);
    this.scrollableElem.scrollTop(this.viewportDimensions.top - this.pan.y);
  };
  c.Controls.prototype.claimInteraction = function (a) {
    if (this.interactionType && this.interactionType !== a) return !1;
    this.interactionType = a;
    return !0;
  };
  c.Controls.prototype.onTouchstart_ = function (a) {
    if (this.claimInteraction("touch")) {
      var b = a.originalEvent.touches.length;
      this.sceneElem[0].contains(a.target) && (console.info("preventing default, this.elem[0] contains thing...", this.elem[0], "thing", a.target), a.preventDefault());
      1 === b ? (this.selecting = !0, this.updateLocation_(a.originalEvent.changedTouches[0].pageX, a.originalEvent.changedTouches[0].pageY)) : this.pinchStart_(a);
    }
  };
  c.Controls.prototype.onTouchmove_ = function (a) {
    if (this.claimInteraction("touch")) {
      var b = a.originalEvent.touches.length,
        d = a.originalEvent.changedTouches[0].pageX,
        e = a.originalEvent.changedTouches[0].pageY;
      1 === b && this.hasLastLocation && e < this.lastLocation.y || a.preventDefault();
      this.selecting && 1 === b ? this.updateLocation_(d, e) : this.pinching && this.pinchMove_(a);
    }
  };
  c.Controls.prototype.onTouchend_ = function (a) {
    if (this.claimInteraction("touch")) {
      var b = a.originalEvent.changedTouches[0].pageX,
        d = a.originalEvent.changedTouches[0].pageY;
      1 === a.originalEvent.changedTouches.length ? (this.updateLocation_(b, d), this.selecting = !1, this.interactionType = "") : this.pinchEnd_();
      this.hasLastLocation = !1;
    }
  };
  c.Controls.prototype.calculatePinchDistance_ = function (a) {
    return Math.sqrt(Math.pow(a.originalEvent.touches[1].pageX - a.originalEvent.touches[0].pageX, 2) + Math.pow(a.originalEvent.touches[1].pageY - a.originalEvent.touches[0].pageY, 2));
  };
  c.Controls.prototype.pinchStart_ = function (a) {
    this.originalPinchDistance = this.calculatePinchDistance_(a);
    this.originalPinchScale = this.scale;
    this.pinching = !0;
  };
  c.Controls.prototype.pinchMove_ = function (a) {
    a = this.calculatePinchDistance_(a) / this.originalPinchDistance;
    this.scalePan(this.scale, this.originalPinchScale * a);
  };
  c.Controls.prototype.pinchEnd_ = function () {
    this.pinching = !1;
  };
  c.Controls.prototype.onMousedown_ = function (a) {
    this.claimInteraction("mouse") && (this.updateLocation_(a.pageX, a.pageY), this.selecting = !0);
  };
  c.Controls.prototype.onMousemove_ = function (a) {
    this.claimInteraction("mouse") && this.selecting && this.updateLocation_(a.pageX, a.pageY);
  };
  c.Controls.prototype.onMouseup_ = function (a) {
    this.claimInteraction("mouse") && (this.updateLocation_(a.pageX, a.pageY), this.selecting = this.hasLastLocation = !1, this.interactionType = "");
  };
  c.Controls.prototype.onScroll_ = function () {
    if (this.syncingScroll) this.syncingScroll = !1;else {
      var a = this.viewportDimensions;
      this.pan.x = a.left - this.scrollableElem.scrollLeft();
      this.pan.y = a.top - this.scrollableElem.scrollTop();
      this.needsPanUpdate = !0;
    }
  };
  c.Controls.prototype.scalePan = function (a, b) {
    1 > b && (b = 1);
    b > c.Constants.ZOOM_MAX && (b = c.Constants.ZOOM_MAX);
    this.pan.x *= b / a;
    this.pan.y *= b / a;
    this.scale = b;
    1 === this.scale && (this.pan.x = 0, this.pan.y = 0);
    this.needsScaleUpdate = this.needsPanUpdate = !0;
  };
  c.Controls.prototype.zoomIn_ = function () {
    if (this.enabled && this.scale !== c.Constants.ZOOM_MAX) {
      var a = this.scale + c.Constants.ZOOM_STEP_SIZE;
      this.scaleTarget = a <= c.Constants.ZOOM_MAX ? a : c.Constants.ZOOM_MAX;
    }
  };
  c.Controls.prototype.zoomOut_ = function () {
    if (this.enabled && 1 !== this.scale) {
      var a = this.scale - c.Constants.ZOOM_STEP_SIZE;
      this.scaleTarget = 1 <= a ? a : 1;
    }
  };
  c.Controls.prototype.nextZoomLevel_ = function (a) {
    let b = this.viewportDimensions.height / 2 - a.pageY;
    this.pan.x += (this.viewportDimensions.width / 2 - a.pageX) / this.scale;
    this.pan.y += b / this.scale;
    this.needsPanUpdate = !0;
    this.scale === c.Constants.ZOOM_MAX ? this.scaleTarget = 1 : this.zoomIn_();
  };
  c.Character = function (a, b, d) {
    this.name = a;
    this.location = {};
    this.scale = {};
    this.isFound = !1;
    this.mapElem = b;
    this.colliderElem = this.mapElem.find(`.character-collider--${this.name}`);
    this.drawerItemElem = d.find(`.drawer__item--${this.name}`);
    this.layerElem = null;
    this.colliderElem.on("click touchstart", this.onFound_.bind(this));
    this.drawerItemElem.on("click", this.onSelected_.bind(this));
  };
  c.Character.prototype.reset = function (a) {
    var b = this.mapElem.find(".map__svg");
    this.isFound = !1;
    this.drawerItemElem.removeClass("drawer__item--found").removeClass("drawer__item--focused");
    this.colliderElem.removeClass("character-collider--found");
    for (var d = 1; d <= c.Constants.SPAWN_COUNT; d++) this.getLayer_(b, d).hide();
    for (d = 0; 5 > d && (this.layerElem = this.getLayer_(b, Math.ceil(Math.random() * c.Constants.SPAWN_COUNT)).show(), !this.layerElem.length); ++d);
    if (!this.layerElem.length) throw Error(`Layer for ${this.name} not found.`);
    this.layerElem[0].classList.add("map__character");
    this.layerElem[0].classList.remove("map__character--found");
    b = this.layerElem[0].getBoundingClientRect();
    d = this.layerElem[0].getBoundingClientRect();
    let e = (a.width - this.mapElem.width()) / 2,
      f = (a.height - this.mapElem.height()) / 2,
      g = this.mapElem[0].getBoundingClientRect();
    e -= g.left;
    f -= g.top;
    this.location = {
      left: (d.left + e) / a.width,
      top: (d.top + f) / a.height
    };
    this.scale = {
      width: b.width / a.width,
      height: b.height / a.height
    };
  };
  c.Character.prototype.getLayer_ = function (a, b) {
    let d = this.name.replace("-", "").toUpperCase();
    return a.find(`#${d}-${b}`);
  };
  c.Character.prototype.updatePosition = function (a) {
    this.colliderElem && this.colliderElem.css("transform", `translate3d(${a.width * this.location.left}px, ${a.height * this.location.top}px, 0)`);
  };
  c.Character.prototype.updateScale = function (a) {
    if (this.colliderElem) {
      var b = a.height * this.scale.height;
      this.colliderElem.css("width", a.width * this.scale.width);
      this.colliderElem.css("height", b);
    }
  };
  c.Character.prototype.onLostFocus = null;
  c.Character.prototype.onFound_ = function () {
    if (!this.isFound) {
      gtag("event", "gameAction", {
        game: "santasearch",
        action: "found"
      });
      window.santaApp.fire("sound-trigger", `ss_character_${this.name}`);
      var a = this.drawerItemElem.hasClass("drawer__item--focused");
      this.isFound = !0;
      this.drawerItemElem.removeClass("drawer__item--focused");
      this.drawerItemElem.addClass("drawer__item--found");
      this.colliderElem.addClass("character-collider--found");
      this.layerElem[0].classList.add("map__character--found");
      if (a && this.onLostFocus) this.onLostFocus();
    }
  };
  c.Character.prototype.onSelected = null;
  c.Character.prototype.onSelected_ = function () {
    if (!this.isFound && this.onSelected) this.onSelected();
  };
  c.Character.prototype.focus = function () {
    this.drawerItemElem.addClass("drawer__item--focused");
  };
  c.Character.prototype.blur = function () {
    this.drawerItemElem.removeClass("drawer__item--focused");
  };
  c.Map = function (a, b, d, e) {
    this.mapElem = b;
    this.drawerElem = a.find(".drawer");
    this.sizeElem = a.find(".viewport__size");
    this.componentDir = d;
    this.controls = e;
    this.characters = {
      santa: null,
      penguin: null,
      "gingerbread-man": null,
      rudolph: null,
      pegman: null,
      "mrs-claus": null
    };
    this.allFound = !1;
    this.hintTarget = void 0;
    this.focusNextUnfoundCharacter_ = this.focusNextUnfoundCharacter_.bind(this);
    this.changeFocus_ = this.changeFocus_.bind(this);
    this.setHintTarget_ = this.setHintTarget_.bind(this);
    c.Constants.CHARACTERS.forEach(a => {
      let d = new c.Character(a, b, this.drawerElem);
      d.onLostFocus = this.focusNextUnfoundCharacter_;
      d.onSelected = this.changeFocus_.bind(this, d);
      this.characters[a] = d;
    });
  };
  c.Map.prototype.setMap = function (a, b) {
    this.allFound = !1;
    this.hintTarget = void 0;
    this.loadMap_(a, b);
    this.drawerElem.on("click.santasearch", ".hint", this.setHintTarget_);
    this.mapName = a;
  };
  c.Map.prototype.resetCharacters_ = function (a) {
    c.Constants.CHARACTERS.forEach(b => {
      this.characters[b].reset(a);
    });
    this.updateCharacters_(a);
    this.focusedCharacter = this.characters.santa;
    this.focusedCharacter.focus();
  };
  c.Map.prototype.loadMap_ = function (a, b) {
    if (this.mapName === a) this.resetCharacters_(b);else return $.ajax({
      url: `${this.componentDir}img/maps/${a}.svg`,
      dataType: "xml",
      crossDomain: !0
    }).then(d => {
      this.mapElem.find(".map__svg").remove();
      d = d.children ? d.children[0] : d.querySelector("*");
      this.mapElem.prepend(d);
      this.mapName = a;
      this.resetCharacters_(b);
    });
  };
  c.Map.prototype.setHintTarget_ = function () {
    this.controls.enabled && (this.hintTarget = this.focusedCharacter);
  };
  c.Map.prototype.updateCharacters_ = function (a) {
    c.Constants.CHARACTERS.forEach(b => {
      b = this.characters[b];
      b.updateScale(a);
      b.updatePosition(a);
    });
  };
  c.Map.prototype.focusNextUnfoundCharacter_ = function () {
    let a;
    for (let b = 0; b < c.Constants.CHARACTERS.length; b++) {
      let d = this.characters[c.Constants.CHARACTERS[b]];
      if (!d.isFound) {
        a = d;
        break;
      }
    }
    a ? (this.focusedCharacter.blur(), a.focus(), this.focusedCharacter = a) : this.allFound = !0;
  };
  c.Map.prototype.changeFocus_ = function (a) {
    this.focusedCharacter.blur();
    a.focus();
    this.focusedCharacter = a;
  };
  c.Map.prototype.changeSize = function (a) {
    this.mapElem.css("width", a.width);
    this.mapElem.css("height", a.height);
    this.sizeElem.css("width", a.width);
    this.sizeElem.css("height", a.height);
    this.mapElem.css("margin-left", -(a.width / 2));
    this.mapElem.css("margin-top", -(a.height / 2));
    this.updateCharacters_(a);
  };
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
  c.Game = function (a, b) {
    this.elem = $(a);
    this.viewportElem = this.elem.find(".viewport--map");
    this.mapElem = this.elem.find(".map");
    this.guiElem = this.elem.find(".gui");
    this.drawerElem = this.elem.find(".drawer");
    this.gameoverModal = new c.shared.Gameover(this, this.elem.find(".gameover"));
    this.chooseMap = new c.ChooseMap(this.elem.find(".choose-map"));
    this.mapDimensions = {
      height: 0,
      width: 0
    };
    this.viewportDimensions = {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    this.gameStartTime = null;
    this.sceneElem = this.elem.find(".scene");
    this.controls = new c.Controls(this.elem, this.sceneElem, this.viewportDimensions);
    this.gameAspectRatio = 1600 / 900;
    this.isPlaying = this.paused = !1;
    this.requestId = this.lastFrame = 0;
    this.map = new c.Map(this.elem, this.mapElem, b, this.controls);
    this.onFrame_ = this.onFrame_.bind(this);
    this.startMap_ = this.startMap_.bind(this);
  };
  c.Game.prototype.start = function () {
    this.setupEventHandlers_();
    this.restart();
  };
  c.Game.prototype.setupEventHandlers_ = function () {
    $(window).on("resize.santasearch orientationchange.santasearch", this.onResize_.bind(this));
  };
  c.Game.prototype.getRandomHintDistanceOffset_ = function () {
    let a = c.Constants.HINT_RANDOM_DISTANCE;
    return (a / 2 - Math.floor(Math.random() * a)) / 100;
  };
  c.Game.prototype.hintLocation_ = function (a) {
    window.santaApp.fire("sound-trigger", "ss_button_hint");
    gtag("event", "gameAction", {
      game: "santasearch",
      action: "hint"
    });
    a = a.location;
    let b = this.getRandomHintDistanceOffset_(),
      d = this.getRandomHintDistanceOffset_();
    this.panAndScaleToTarget_(this.controls.scale, c.Constants.HINT_ZOOM, this.mapDimensions.width * (.5 - a.left + b), this.mapDimensions.height * (.5 - a.top + d), c.Constants.HINT_BUTTON_PAN_TIME);
  };
  c.Game.prototype.preScale_ = function (a) {
    this.controls.enabled = !1;
    let b = this.controls.scale;
    this.controls.scalePan(b, a);
    this.panAndScaleToTarget_(b, a, this.controls.pan.x, this.controls.pan.y, c.Constants.PRESCALE_TIME);
  };
  c.Game.prototype.panAndScaleToTarget_ = function (a, b, d, e, f) {
    this.controls.enabled = !1;
    a = b / a;
    let g = this.mapDimensions.height * a,
      h = this.clampXPanForWidth_(d, this.mapDimensions.width * a),
      k = this.clampYPanForHeight_(e, g);
    this.mapElem.css("transition-duration", `${f}s`);
    this.mapElem.css("transform", `translate3d(${h}px, ${k}px, 0) scale(${a}, ${a})`);
    setTimeout(() => {
      this.mapElem.css("transition-duration", "0s");
      this.controls.enabled = !0;
      this.controls.scale = b;
      this.controls.pan.x = h;
      this.controls.pan.y = k;
      this.controls.needsScaleUpdate = !0;
      this.controls.needsPanUpdate = !0;
    }, 1E3 * f);
  };
  c.Game.prototype.scale_ = function (a) {
    let b = +this.viewportElem.width(),
      d = +this.viewportElem.height();
    b / d < this.gameAspectRatio ? (this.mapDimensions.width = d * this.gameAspectRatio, this.mapDimensions.height = d) : (this.mapDimensions.width = b, this.mapDimensions.height = b / this.gameAspectRatio);
    this.mapDimensions.width *= a;
    this.mapDimensions.height *= a;
    this.viewportDimensions.width = b;
    this.viewportDimensions.height = d;
    this.viewportDimensions.left = this.mapDimensions.width / 2 - b / 2;
    this.viewportDimensions.top = this.mapDimensions.height / 2 - d / 2;
    this.map.changeSize(this.mapDimensions);
    this.controls.syncScroll();
  };
  c.Game.prototype.clampXPanForWidth_ = function (a, b) {
    b = (b - this.viewportElem.width()) / 2;
    0 > b - Math.abs(a) && (a = 0 > a ? -b : b);
    return a;
  };
  c.Game.prototype.clampYPanForHeight_ = function (a, b) {
    b = (b - this.viewportElem.height()) / 2;
    0 > b - Math.abs(a) && (a = 0 > a ? -b : b);
    return a;
  };
  c.Game.prototype.updatePan_ = function () {
    let a = this.controls.pan.y,
      b = this.mapDimensions.height;
    this.controls.pan.x = this.clampXPanForWidth_(this.controls.pan.x, this.mapDimensions.width);
    this.controls.pan.y = this.clampYPanForHeight_(a, b);
  };
  c.Game.prototype.restart = function () {
    this.onResize_();
    this.chooseMap.show(this.startMap_);
  };
  c.Game.prototype.startMap_ = function (a) {
    this.controls.reset();
    this.scale_(1);
    this.map.setMap(a, this.mapDimensions);
    this.controls.start();
    this.paused = !1;
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "santasearch"
    });
    this.gameStartTime = +new Date();
    this.unfreezeGame();
  };
  c.Game.prototype.update = function () {
    this.isPlaying && (this.map.allFound ? (this.gameover(), this.isPlaying = !1) : (this.map.hintTarget && (this.hintLocation_(this.map.hintTarget), this.map.hintTarget = void 0), this.controls.scaleTarget && (this.preScale_(this.controls.scaleTarget), this.controls.scaleTarget = void 0), this.controls.needsScaleUpdate && this.controls.enabled && (this.scale_(this.controls.scale), this.controls.needsScaleUpdate = !1), this.controls.needsPanUpdate && this.controls.enabled && (this.updatePan_(), this.mapElem.css("transform", `translate3d(${this.controls.pan.x}px, ${this.controls.pan.y}px, 0)`), this.controls.needsPanUpdate = !1)));
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
      var a = +new Date(),
        b = Math.min(1E3, a - this.lastFrame);
      this.lastFrame = a;
      this.update(b);
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
  c.Game.prototype.onResize_ = function () {
    var a = this.viewportElem.width();
    let b = this.viewportElem.height() > this.mapDimensions.height;
    (a > this.mapDimensions.width || b) && this.scale_(this.controls.scale);
    a = Math.min(1, this.elem.width() / 1200);
    this.elem.css("font-size", a + "px");
  };
  c.Game.prototype.gameover = function () {
    this.gameoverModal.show();
  };
  c.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "santasearch",
      timePlayed: new Date() - this.gameStartTime,
      level: 1
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".santasearch");
    $(document).off(".santasearch");
    this.elem.off(".santasearch");
  };
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('santasearch_load_sounds');
sceneApi.preload.images('img/check.svg', 'img/choose-map/beach.svg', 'img/choose-map/characters-left.svg', 'img/choose-map/characters-right.svg', 'img/choose-map/magnifying-glass.svg', 'img/choose-map/mountains.svg', 'img/choose-map/museum.svg', 'img/choose-map/santa.svg', 'img/choose-map/secretlab.svg', 'img/gameover.svg', 'img/gingerbread-man-shadow.svg', 'img/gingerbread-man.svg', 'img/mrs-claus-shadow.svg', 'img/mrs-claus.svg', 'img/pegman-shadow.svg', 'img/pegman.svg', 'img/penguin-shadow.svg', 'img/penguin.svg', 'img/rudolph-shadow.svg', 'img/rudolph.svg', 'img/santa-shadow.svg', 'img/santa.svg', 'img/title-background.svg', 'img/zoom.svg');
const game = new Game(document.getElementById('module-santasearch'), './');
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  sound: ['santasearch_start']
});
sceneApi.ready(async () => {
  game.start();
});