import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    Draggable: function (a, c) {
      this.el = $(a);
      this.rootEl = $(c);
      this.container = $(a).parent();
      this.el.data("container", this.container);
      this.el.on("mousedown.jamband", this.mousedown_.bind(this));
      this.el.on("touchstart.jamband", this.touchstart_.bind(this));
    }
  };
  b.Draggable.prototype.dragStart_ = function (a, c) {
    this.startX = a;
    this.startY = c;
    this.el.addClass("dragging");
    this.el.trigger("dragging");
    this.rootEl.find(".droppable:not(:has(.draggable))").addClass("dropTarget");
  };
  b.Draggable.prototype.dragMove_ = function (a, c) {
    this.el.css({
      position: "absolute",
      transform: "translate3d(" + a + "px, " + c + "px, 0px)"
    });
  };
  b.Draggable.prototype.dragEnd_ = function (a, c) {
    var d = this.rootEl.find(".droppable").filter(function (d, e) {
      d = e.getBoundingClientRect();
      return d.left < a && a < d.left + d.width && d.top < c && c < d.top + d.height;
    }).first();
    if (d.length) {
      var e = d.find(".draggable");
      if (e.length && !e.is(this.el)) if (this.el.parent().hasClass("droppable")) e.appendTo(this.el.parent()), e.trigger("dropped", this.el.parent().data());else {
        var f = e.data("container");
        e.appendTo(f);
        e.trigger("dragging");
        e.trigger("returned");
      }
      this.el.appendTo(d);
      this.el.trigger("dropped", d.data());
      gtag("event", "gameAction", {
        game: "jamband",
        action: "dropped"
      });
    } else this.el.appendTo(this.container), this.el.trigger("returned");
    this.el.css({
      position: "",
      transform: ""
    });
    this.el.removeClass("dragging");
    this.rootEl.find(".droppable").removeClass("dropTarget");
  };
  b.Draggable.prototype.getScrollOffsetLeft_ = function (a) {
    var c = 0;
    $(a.target).parents().each(function (a, e) {
      c += e.scrollLeft;
    });
    return c;
  };
  b.Draggable.prototype.mousedown_ = function (a) {
    var c = a.clientX + this.getScrollOffsetLeft_(a);
    this.dragStart_(c, a.clientY);
    $(window).on("mousemove.jamband", this.mousemove_.bind(this));
    $(window).on("mouseup.jamband", this.mouseup_.bind(this));
    a.preventDefault();
  };
  b.Draggable.prototype.touchstart_ = function (a) {
    var c = a.originalEvent.touches[0].clientX + this.getScrollOffsetLeft_(a);
    this.dragStart_(c, a.originalEvent.touches[0].clientY);
    $(window).on("touchmove.jamband", this.touchmove_.bind(this));
    $(window).on("touchend.jamband", this.touchend_.bind(this));
    a.preventDefault();
  };
  b.Draggable.prototype.mousemove_ = function (a) {
    this.dragMove_(a.clientX - this.startX, a.clientY - this.startY);
    a.preventDefault();
  };
  b.Draggable.prototype.touchmove_ = function (a) {
    this.dragMove_(a.originalEvent.touches[0].clientX - this.startX, a.originalEvent.touches[0].clientY - this.startY);
    a.preventDefault();
    this.x = a.originalEvent.touches[0].clientX;
    this.y = a.originalEvent.touches[0].clientY;
  };
  b.Draggable.prototype.mouseup_ = function (a) {
    this.dragEnd_(a.clientX, a.clientY);
    $(window).off("mousemove.jamband mouseup.jamband");
    a.preventDefault();
  };
  b.Draggable.prototype.touchend_ = function (a) {
    this.dragEnd_(this.x, this.y);
    $(window).off("touchmove.jamband touchend.jamband");
    a.preventDefault();
  };
  b.DragDrop = function (a) {
    a = $(a);
    a.find(".draggable").each(function (c, d) {
      new b.Draggable($(d), a);
    });
  };
  b.Drawer = function (a) {
    function c(a) {
      a *= e.find(".InstrumentContainer:not(.collapse)").first().width();
      a *= Math.floor((e.scrollLeft() + a) / a);
      e.animate({
        scrollLeft: a
      }, {
        duration: 300
      });
    }
    a = $(a);
    this.drawer = a.find(".Drawer");
    var d = a.find("#drawer-tab"),
      e = a.find("#drawer-scrollable");
    d.on("mouseup.jamband touchend.jamband", this.toggle.bind(this));
    a.find("#drawer-arrow--left").on("click.jamband touchend.jamband", function () {
      c(-1);
    });
    a.find("#drawer-arrow--right").on("click.jamband touchend.jamband", function () {
      c(1);
    });
    e.on("scroll", function () {});
  };
  b.Drawer.prototype.toggle = function () {
    this.drawer.toggleClass("Drawer--hidden");
  };
  b.Audio = function (a, c, d) {
    this.index = a;
    this.name = c;
    this.beat = d;
    this.timeout = 0;
    this._bpm = 120;
    this.beatSync16th = 4;
    this.beatduration = 60 / this._bpm;
    this.beatsPerSecond = 1 / this.beatduration;
  };
  b.Audio.prototype.play = function (a, c, d) {
    if (0 !== a && 1 !== a) throw new TypeError("expected pattern 0 or 1");
    window.clearTimeout(this.timeout);
    const e = performance.now() / 1E3;
    this.timeout = window.setTimeout(() => {
      window.santaApp.fire("sound-trigger", "jamband_play_track", this.index, a, c);
      d && d();
    }, 1E3 * ((~~(Math.max(0, Math.floor(e / (60 / this._bpm))) / this.beatSync16th) + 1) * this.beatSync16th * this.beatduration - e));
  };
  b.Audio.prototype.stop = function () {
    window.clearTimeout(this.timeout);
    window.santaApp.fire("sound-trigger", "jamband_play_track", this.index, -1, 1);
  };
  b.Audio.prototype.preview = function () {
    window.santaApp.fire("sound-trigger", {
      name: "preview_instrument",
      args: [this.name.toLowerCase()]
    });
  };
  b.Instrument = function (a, c, d) {
    this.name = c;
    this.el = this.elem.find(".Instrument-" + c.toLowerCase());
    this.container = this.el.closest(".InstrumentContainer");
    this.audio = new b.Audio(a, c, d.beat);
    this.el.on("dropped", (a, c) => {
      this.drop(c);
    });
    this.el.on("returned", this.reset.bind(this));
    this.el.on("dragging", this.drag.bind(this));
    this.el.on("mousedown.jamband touchstart.jamband", this.preview.bind(this));
  };
  b.Instrument.prototype.preview = function () {
    this.el.parent().is(this.container) && this.audio.preview();
  };
  b.Instrument.prototype.play = function (a) {
    var c = function () {
      this.el.parent().hasClass("Stage") && (this.el.removeClass("playing-0 playing-1").addClass("playing playing-" + a.pattern), this.elem.trigger("playing"));
      this.countOnStage();
    }.bind(this);
    this.audio.play(a.pattern, a.volume, c);
  };
  b.Instrument.prototype.drag = function () {
    this.container.removeClass("collapse");
    this.el.removeClass("Instrument--small");
  };
  b.Instrument.prototype.drop = function (a) {
    this.play(a);
    this.container.addClass("collapse");
    this.el.addClass("waiting");
  };
  b.Instrument.prototype.reset = function () {
    this.audio.stop();
    this.el.addClass("Instrument--small");
    this.el.removeClass("waiting playing playing-0 playing-1");
    this.countOnStage();
  };
  b.Instrument.prototype.putOnStage = function (a) {
    this.el.trigger("dragging");
    this.el.appendTo(a);
    a = a.data();
    this.el.trigger("dropped", {
      pattern: +a.pattern,
      volume: +a.volume
    });
  };
  b.Instrument.prototype.putInDrawer = function () {
    this.el.trigger("dragging");
    this.el.appendTo(this.container);
    this.el.trigger("returned");
  };
  b.Instrument.prototype.countOnStage = function () {
    var a = this.elem.find(".Stage .Instrument").length;
    this.elem.trigger("stagechanged.jamband", {
      count: a
    });
  };
  b.Instruments = function (a) {
    this.elem = $(a);
    b.Instrument.prototype.elem = a;
    this.stages = a.find(".Stage");
    this.instruments = [new b.Instrument(0, "Bass", {
      beat: 32
    }), new b.Instrument(1, "Drums", {
      beat: 16
    }), new b.Instrument(2, "Bell", {
      beat: 16
    }), new b.Instrument(3, "Boombox", {
      beat: 32
    }), new b.Instrument(4, "Guitar", {
      beat: 32
    }), new b.Instrument(5, "Rap", {
      beat: 32
    }), new b.Instrument(6, "Sax", {
      beat: 32
    }), new b.Instrument(7, "Synth", {
      beat: 32
    }), new b.Instrument(8, "Tamb", {
      beat: 16
    }), new b.Instrument(9, "Xylo", {
      beat: 32
    })];
    this.elem.on("dropped returned randomize reset restore", this.checkIfAllEmpty.bind(this));
    a.find("#drawer-button--random").on("mouseup.jamband touchend.jamband", this.randomize.bind(this));
    this.elem.trigger("reset");
  };
  b.Instruments.prototype.checkIfAllEmpty = function () {
    var a = this.elem.find(".Stage .Instrument").length;
    this.elem.toggleClass("is-allEmpty", 0 === a);
  };
  b.Instruments.prototype.randomize = function () {
    this.reset();
    var a = function (a) {
      for (var d = a.length - 1; 0 < d; d--) {
        var c = Math.floor(Math.random() * (d + 1)),
          f = a[d];
        a[d] = a[c];
        a[c] = f;
      }
      return a;
    }(this.instruments.slice()).slice(0, this.stages.length);
    this.stages.each(function (c, d) {
      a[c].putOnStage($(d));
    });
    this.elem.trigger("randomize");
  };
  b.Instruments.prototype.reset = function () {
    this.instruments.forEach(function (a) {
      a.putInDrawer();
    });
  };
  b.Instruments.prototype.save = function () {
    var a = [],
      c = this.instruments.map(function (a) {
        return a.el[0];
      });
    this.stages.each(function (d, e) {
      d = c.indexOf($(e).find(".Instrument")[0]);
      a.push(d);
    });
    return a.every(function (a) {
      return -1 === a;
    }) ? "" : a.join(",");
  };
  b.Instruments.prototype.restore = function (a) {
    this.reset();
    var c = a.split(",").map(function (a) {
      return parseInt(a, 10);
    }).map(function (a) {
      return this.instruments[a];
    }, this);
    this.stages.each(function (a, e) {
      c[a] && c[a].putOnStage($(e));
    });
    this.elem.trigger("restore");
  };
  b.Lights = function (a) {
    function c(a, c, d) {
      a ? c.addClass(d) : c.removeClass(d);
    }
    a = $(a);
    var d = a.find(".Lights");
    this.floorLights = d.find(".Light-floor");
    this.ceilingLights = d.find(".Light-ceiling");
    a.on("stagechanged.jamband", function (a, d) {
      a = d.count;
      c(0 < a, this.ceilingLights, "Light-ceiling--on");
      c(2 < a, this.floorLights, "Light-floor--on");
      c(3 < a, this.floorLights, "animate");
      c(4 < a, this.floorLights, "Light-colored--on");
      c(5 < a, this.ceilingLights, "Light-colored--on");
    }.bind(this));
  };
  b.Game = function (a) {
    this.elem = $(a);
    this.scene = this.elem.find(".scene");
    this.gui = this.elem.find(".gui");
    this.shareOverlay = null;
    this.gameStartTime = +new Date();
    this.drawer = new b.Drawer(this.elem);
    this.lights = new b.Lights(this.elem);
    this.instruments = null;
    this.elem.find("#drawer-button--share").on("click.jamband touchend.jamband", this.showShareOverlay.bind(this));
    this.elem.on("stagechanged.jamband", () => {
      const a = {};
      if (this.instruments) {
        const c = this.instruments.save();
        c && (a.band = c);
      }
      window.santaApp.fire("game-data", a);
    });
  };
  b.Game.prototype.start = function (a) {
    this.instruments = new b.Instruments(this.elem);
    new b.DragDrop(this.elem);
    (a = a.band) && this.instruments.restore(a);
    a = function () {
      var a = Math.min(1, $(window).width() / 1800),
        d = Math.min(1, 1.5 * a);
      this.scene.css("font-size", a + "px");
      this.gui.css("font-size", d + "px");
    }.bind(this);
    a();
    $(window).on("resize.jamband orientationchange.jamband", a);
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "jamband"
    });
  };
  b.Game.prototype.showShareOverlay = function () {
    window.santaApp.fire("game-stop", {
      share: !0
    });
  };
  b.Game.prototype.dispose = function () {
    this.instruments.reset();
    window.santaApp.fire("analytics-track-game-quit", {
      gameid: "jamband",
      timePlayed: new Date() - this.gameStartTime,
      level: 1
    });
    $(window).off(".jamband");
    $(document).off(".jamband");
  };
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('jamband_load_sounds');
sceneApi.preload.images('img/background-mountains.svg', 'img/background-trees.svg', 'img/crowd1.svg', 'img/crowd2.svg', 'img/drawer-tab.svg', 'img/stage.svg', 'img/stage-arrow.svg', 'img/icons/arrow.svg', 'img/icons/close.svg', 'img/icons/open.svg', 'img/icons/random.svg', 'img/instruments/bass-body.svg', 'img/instruments/bass-foot.svg', 'img/instruments/bass-guitar.svg', 'img/instruments/bass-head.svg', 'img/instruments/bass.svg', 'img/instruments/bell-arm--left.svg', 'img/instruments/bell-bell.svg', 'img/instruments/bell-body.svg', 'img/instruments/bell-foot.svg', 'img/instruments/bell-head.svg', 'img/instruments/bell.svg', 'img/instruments/boombox-arm--left.svg', 'img/instruments/boombox-arm--right.svg', 'img/instruments/boombox-body.svg', 'img/instruments/boombox-foot.svg', 'img/instruments/boombox-head.svg', 'img/instruments/boombox.svg', 'img/instruments/drums-arm--left.svg', 'img/instruments/drums-arm--right.svg', 'img/instruments/drums-body.svg', 'img/instruments/drums-head.svg', 'img/instruments/drums-hihat.svg', 'img/instruments/drums-kick.svg', 'img/instruments/drums.svg', 'img/instruments/guitar-arm--left.svg', 'img/instruments/guitar-arm--right.svg', 'img/instruments/guitar-body.svg', 'img/instruments/guitar-foot.svg', 'img/instruments/guitar-hand.svg', 'img/instruments/guitar-head.svg', 'img/instruments/guitar.svg', 'img/instruments/rap-arm--left.svg', 'img/instruments/rap-arm--right.svg', 'img/instruments/rap-body.svg', 'img/instruments/rap-foot.svg', 'img/instruments/rap-head.svg', 'img/instruments/rap.svg', 'img/instruments/sax-base.svg', 'img/instruments/sax-body.svg', 'img/instruments/sax-foot.svg', 'img/instruments/sax-hand.svg', 'img/instruments/sax-sax-mouth.svg', 'img/instruments/sax-sax.svg', 'img/instruments/sax.svg', 'img/instruments/synth-arm--left.svg', 'img/instruments/synth-arm--right.svg', 'img/instruments/synth-body.svg', 'img/instruments/synth-foot.svg', 'img/instruments/synth-head.svg', 'img/instruments/synth-keyboard.svg', 'img/instruments/synth.svg', 'img/instruments/tamb-arm.svg', 'img/instruments/tamb-body.svg', 'img/instruments/tamb-foot.svg', 'img/instruments/tamb-head.svg', 'img/instruments/tamb.svg', 'img/instruments/xylo-arm--left.svg', 'img/instruments/xylo-arm--right.svg', 'img/instruments/xylo-board.svg', 'img/instruments/xylo-body.svg', 'img/instruments/xylo-foot.svg', 'img/instruments/xylo-head.svg', 'img/instruments/xylo-stick--left.svg', 'img/instruments/xylo-stick--right.svg', 'img/instruments/xylo.svg', 'img/lights/ceiling-light--green.svg', 'img/lights/ceiling-light--red.svg', 'img/lights/ceiling-light.svg', 'img/lights/ceiling.svg', 'img/lights/floor-light--green.svg', 'img/lights/floor-light--red.svg', 'img/lights/floor-light.svg', 'img/lights/floor.svg', 'img/lights/floorBracket.svg', 'img/lights/stage-blue--on.svg', 'img/lights/stage-blue.svg', 'img/lights/stage-green--on.svg', 'img/lights/stage-green.svg', 'img/lights/stage-red--on.svg', 'img/lights/stage-red.svg');
sceneApi.config({
  sound: ['jamband_start'],
  orientation: 'landscape'
});
const game = new Game(document.getElementById('module-jamband'));
sceneApi.ready(async data => {
  game.start(data);
});