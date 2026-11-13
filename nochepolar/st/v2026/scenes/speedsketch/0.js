import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
      Constants: {
        TOTAL_LEVELS: 4,
        INITIAL_COUNTDOWN: 30,
        COUNTDOWN_FLASH: 10,
        HANDWRITING_URL: "https://handwriting.googleapis.com/v1beta1/labeledInks:recognizeInks?key=AIzaSyDH0ZhfpNC39Bx_7Z8s9KFNprToZbNP88A",
        HANDWRITING_THRESHOLD: 4,
        HANDWRITING_RECOGNITION_THRESHOLD: 2,
        MAX_API_RATE: 1,
        WORDS: "holiday lights;stocking;chimney;sleigh;ribbon;mistletoe;mug;tree;snowflake;candy cane;ornament;cookie;jetpack;skier;santa;star;snowman;reindeer;nutcracker;present;campfire;penguin;ice skater;jingle bells;mittens;gingerbread man;wreath;candy;elf;peppermint;sweater".split(";")
      }
    },
    l = c.Constants;
  c.EventEmitter = function () {
    this.listeners = {};
  };
  c.EventEmitter.prototype.addListener = function (a, b) {
    this.listeners.hasOwnProperty(a) || (this.listeners[a] = []);
    this.listeners[a].push(b);
  };
  c.EventEmitter.prototype.isFunction = function (a) {
    return "function" == typeof a || !1;
  };
  c.EventEmitter.prototype.emit = function (a) {
    for (var b = arguments.length, d = Array(1 < b ? b - 1 : 0), e = 1; e < b; e++) d[e - 1] = arguments[e];
    return (b = this.listeners[a]) && b.length ? (b.forEach(function (a) {
      a.apply(this, d);
    }), !0) : !1;
  };
  c.view = {};
  c.view.SplashView = function (a) {
    c.EventEmitter.call(this);
    this.elem = a.find(".splashview");
    this.elem.hide();
  };
  c.view.SplashView.prototype = Object.create(c.EventEmitter.prototype);
  c.view.SplashView.prototype.enableButtons = function () {
    this.elem.find(".splashview__button").on("touchend mouseup", function () {
      window.santaApp.fire("sound-trigger", "generic_button_click");
      this.emit("START_GAME");
      this.disableButtons();
    }.bind(this));
  };
  c.view.SplashView.prototype.disableButtons = function () {
    this.elem.find(".splashview__button").off("touchend mouseup");
  };
  c.view.SplashView.prototype.showView = function () {
    this.enableButtons();
    this.elem.show();
  };
  c.view.SplashView.prototype.hideView = function () {
    this.disableButtons();
    this.elem.hide();
  };
  function m() {
    this.lang = $("html").attr("lang") || "en";
    this.isEnglish = "en" === this.lang.split("-")[0];
  }
  m.CACHE_ = {};
  m.prototype.capitalize = function (a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  m.prototype.hasItemTranslation = function (a, b) {
    b = "speedsketch_item_" + b.replace(/\s+/g, "-");
    return !!this.getMsgOrNull(a, b);
  };
  m.prototype.getItemTranslation = function (a, b) {
    var d = "speedsketch_item_" + b.replace(/\s+/g, "-");
    a = this.getMsgOrNull(a, d);
    return !a && this.isEnglish ? b : a;
  };
  m.prototype.getTranslation = function (a, b, d, e) {
    a = this.getMsgOrNull(a, b, d || null, e || null);
    return null === a ? "[Unknown message: " + b + "]" : a;
  };
  m.prototype.getMsgOrNull = function (a, b, d, e) {
    var g = null;
    b in m.CACHE_ ? g = m.CACHE_[b] : (a = a.find("#" + b), 0 < a.length && (g = a.text(), m.CACHE_[b] = g));
    g && d && e && (g = this.replaceVarWithValue(g, d, e));
    return g;
  };
  m.prototype.getInterpolatedTranslation = function (a, b, d) {
    return this.replaceVarWithValue(a, b, d);
  };
  m.prototype.replaceVarWithValue = function (a, b, d) {
    d = String(d);
    return a.replace("{{" + b + "}}", d);
  };
  c.Utils = new m();
  function n() {}
  n.prototype.createSvgFromSegments = function (a, b, d, e) {
    e = e || {};
    e.order = e.order || 0;
    e.color = e.color || "#000000";
    var g = [];
    if (1 == e.order) for (var f = 0; f < a.length; f++) {
      for (var h = [[], []], k = 0; k < a[f].length; k++) h[0].push(a[f][k][0]), h[1].push(a[f][k][1]);
      g.push(h);
    } else a && (g = a);
    b -= 2 * e.padding;
    d -= 2 * e.padding;
    a = this.createSvg(b, d);
    f = this.calculateBoundingBox(g);
    h = [f.x, f.y];
    f.w / f.h > b / d ? (k = b / f.w, h[1] -= .5 * (d / k - f.h)) : (k = d / f.h, h[0] -= .5 * (b / k - f.w));
    b = 2 * b / 140;
    for (f = 0; f < g.length; f++) a.appendChild(this.createLinePath(g[f], h, k, b, e.color));
    return a;
  };
  n.prototype.createSvg = function (a, b) {
    var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    d.setAttribute("width", a);
    d.setAttribute("height", b);
    d.setAttribute("viewBox", "0 0 " + a + " " + b);
    return d;
  };
  n.prototype.calculateBoundingBox = function (a) {
    for (var b = -1, d = -1, e = -1, g = -1, f = 0; f < a.length; f++) for (var h = 0; h < a[f][0].length; h++) {
      if (-1 == b || b > a[f][0][h]) b = a[f][0][h];
      if (-1 == d || d < a[f][0][h]) d = a[f][0][h];
      if (-1 == e || e > a[f][1][h]) e = a[f][1][h];
      if (-1 == g || g < a[f][1][h]) g = a[f][1][h];
    }
    return {
      x: b - 5,
      y: e - 5,
      w: d - b + 10,
      h: g - e + 10
    };
  };
  n.prototype.createLinePath = function (a, b, d, e, g) {
    if (0 != a.length && 0 != a[0].length) {
      for (var f = document.createElementNS("http://www.w3.org/2000/svg", "path"), h = "M" + (a[0][0] - b[0]) * d + " " + (a[1][0] - b[1]) * d, k = 1; k < a[0].length; k++) h += " L" + (a[0][k] - b[0]) * d + " " + (a[1][k] - b[1]) * d;
      f.setAttribute("d", h);
      f.setAttribute("stroke", g);
      f.setAttribute("stroke-width", e);
      f.setAttribute("stroke-linecap", "round");
      f.setAttribute("fill", "none");
      return f;
    }
  };
  c.SVGUtils = new n();
  c.HandwritingAPI = function () {};
  c.HandwritingAPI.prototype.processSegments = function (a, b, d) {
    return this.sendRequest(a, {
      width: b,
      height: d
    });
  };
  c.HandwritingAPI.prototype.getSimilarDrawings = function (a, b, d) {
    return this.sendRequest(a, {
      similar_drawings: !0,
      width: b,
      height: d
    });
  };
  c.HandwritingAPI.prototype.sendRequest = function (a, b) {
    var d = {
        recognizer_name: b.similar_drawings ? "recognizers/santaquickdraw-ink" : "recognizers/santaquickdraw",
        inks: [],
        request_options: {
          allow_retain_log: !1
        },
        client_info: {
          browser_info: {
            user_agent: navigator.userAgent
          },
          app_version: 1
        }
      },
      e = {};
    b.width && (e.context = {
      writing_area: {
        width: b.width,
        height: b.height
      }
    });
    if (a) {
      b = [];
      for (var g of a) {
        a = [];
        for (var f = 0; f < g[0].length; f++) a.push({
          x: g[0][f],
          y: g[1][f],
          t: (g[2][f] / 1E3).toFixed(9) + "s"
        });
        b.push({
          points: a
        });
      }
      e.strokes = b;
      d.inks = [e];
    }
    return $.post({
      url: c.Constants.HANDWRITING_URL,
      data: JSON.stringify(d),
      contentType: "application/json"
    });
  };
  c.HandwritingAPI.prototype.parseResponse = function (a) {
    var b = a.results[0].candidates,
      d = a.results[0].labeledInkName.replace("labeledInks/", "");
    return b.map(function (a) {
      var b = null;
      if ("santaquickdraw-ink" === a.language) {
        b = JSON.parse(a.label);
        var e = b[0];
        b = b[1];
      } else e = a.label;
      return {
        word: e,
        score: a.score,
        id: d,
        neighbor: b
      };
    });
  };
  c.view.CardsView = function (a, b) {
    c.EventEmitter.call(this);
    this.importPath = b;
    this.handwritingAPI = new c.HandwritingAPI();
    this.container = a;
    this.newround_card = a.find(".newround-card");
    this.timesup_card = a.find(".timesup-card");
    this.round_detail_card = a.find(".rounddetails-card");
    this.newround_card.hide();
    this.timesup_card.hide();
    this.round_detail_card.hide();
  };
  c.view.CardsView.prototype = Object.create(c.EventEmitter.prototype);
  c.view.CardsView.prototype.showCard = function (a, b) {
    a.isVisible = !0;
    a.show({
      duration: 0,
      complete: () => {
        a.addClass("visible");
        b && b();
      }
    });
  };
  c.view.CardsView.prototype.hideCard = function (a, b) {
    a.isVisible = !1;
    a.hasClass("visible") && (a.removeClass("visible"), window.setTimeout(() => {
      a.hide();
      b && b();
    }, 1E3));
  };
  c.view.CardsView.prototype.showNewRoundCard = function (a) {
    this.showCard(this.newround_card);
    var b = c.Utils.getItemTranslation(this.container, a.word);
    this.newround_card.find(".slate__big-text").text(c.Utils.capitalize(b));
    this.newround_card.find(".newround-card__current-round").text(a.level);
    this.newround_card.find(".newround-card__total-rounds").text(c.Constants.TOTAL_LEVELS);
    var d = () => {
      if (a.onCardDismiss) a.onCardDismiss();
      this.hideCard(this.newround_card);
    };
    window.setTimeout(() => {
      this.newround_card.find(".newround-card__button").on("touchend mouseup", () => {
        this.newround_card.find(".newround-card__button").off("touchend mouseup");
        d();
      });
    }, 1E3);
  };
  c.view.CardsView.prototype.showTimesUpCard = function (a, b) {
    this.hideCard(this.newround_card);
    this.showCard(this.timesup_card);
    var d = a.filter(a => 1 == a.recognized).length,
      e = this.timesup_card.find(".timesup-card__title"),
      g = this.timesup_card.find(".timesup-card__subline"),
      f = this.timesup_card.find(".timesup-card__drawings");
    f.html("");
    0 == d ? (e.text(c.Utils.getTranslation(this.container, "quickdraw-timesup-title-noguess")), g.text(c.Utils.getTranslation(this.container, "quickdraw-timesup-subline-noguess")), window.santaApp.fire("sound-ambient", "music_ingame_gameover")) : (window.santaApp.fire("sound-trigger", "qd_game_win"), e.text(c.Utils.getTranslation(this.container, "quickdraw-timesup-title-guess")), g.text(c.Utils.getInterpolatedTranslation(c.Utils.getTranslation(this.container, "quickdraw-timesup-subline-guess"), "recognized", d)));
    gtag("event", "gameAction", {
      game: "speedsketch",
      action: "recognized",
      extra: d
    });
    a.forEach(a => {
      f.append(this.createDrawingElem(a, 300, 225));
    });
    this.timesup_card.find(".timesup-card__button").off("touchend mouseup").on("touchend mouseup", () => {
      window.santaApp.fire("sound-trigger", "generic_button_click");
      b && b("NEW_GAME");
      this.hideCard(this.timesup_card);
    });
  };
  c.view.CardsView.prototype.createDrawingElem = function (a, b, d) {
    const e = $("<div>").addClass("timesup-card__drawing");
    e.tabIndex = 0;
    a.recognized ? e.addClass("timesup-card__drawing--recognized") : e.addClass("timesup-card__drawing--not-recognized");
    b = c.SVGUtils.createSvgFromSegments(a.drawing, b, d, {
      padding: 10
    });
    e.append(b);
    e.on("click", () => this.showRoundDetailsCard(a));
    return e;
  };
  c.view.CardsView.prototype.showRoundDetailsCard = function (a) {
    this.round_detail_card.scrollTop(0);
    this.showCard(this.round_detail_card);
    this.round_detail_card.scrollTop(0);
    this.round_detail_card.find(".rounddetails-card__title").text(c.Utils.getInterpolatedTranslation(c.Utils.getTranslation(this.container, "quickdraw-rounddetails-title"), "thing", c.Utils.getItemTranslation(this.container, a.word)));
    var b = this.round_detail_card.find(".rounddetails-card__drawing--user"),
      d = c.SVGUtils.createSvgFromSegments(a.drawing, b.width(), .736 * b.width(), {
        padding: 25,
        color: "rgba(0,0,0,1.00)"
      });
    b.html("");
    b.append(d);
    b = a.word.replace(/\s+/g, "-").toLowerCase();
    this.round_detail_card.find(".rounddetails-card__santa-title").text(c.Utils.getInterpolatedTranslation(c.Utils.getTranslation(this.container, "quickdraw-rounddetails-santa-version"), "thing", c.Utils.getItemTranslation(this.container, a.word)));
    this.round_detail_card.find(".rounddetails-card__drawing--santa .rounddetails-card__drawing-inner").css("background-image", "url('" + this.importPath + "img/drawings/" + b + ".svg')");
    a.drawing && 0 < a.drawing.length ? (this.round_detail_card.find(".rounddetails-card__similar-drawings").show(), a.recognized ? (this.round_detail_card.find(".rounddetails-card__similar-drawings-title--not-recognized").hide(), this.round_detail_card.find(".rounddetails-card__similar-drawings-title--recognized").show()) : (this.round_detail_card.find(".rounddetails-card__similar-drawings-title--recognized").hide(), this.round_detail_card.find(".rounddetails-card__similar-drawings-title--not-recognized").show()), this.fetchAndShowDrawingNeighbors(a)) : this.round_detail_card.find(".rounddetails-card__similar-drawings").hide();
    this.round_detail_card.find(".rounddetails-card__back-btn").off("touchend mouseup").on("touchend mouseup", () => {
      this.hideCard(this.round_detail_card);
    });
  };
  c.view.CardsView.prototype.fetchAndShowDrawingNeighbors = function (a) {
    var b = this.round_detail_card.find(".rounddetails-card__similar-drawing");
    a.drawing && 0 < a.drawing.length ? this.handwritingAPI.getSimilarDrawings(a.drawing, a.width, a.height).fail((a, b, g) => {
      console.error(a, b, g);
    }).done(d => {
      d = this.handwritingAPI.parseResponse(d);
      d = d.filter(a => a.neighbor);
      d = d.filter(b => b.word != a.word);
      d = d.slice(0, 3);
      for (var e = 0; 3 > e; e++) if (d.length > e) {
        var g = $(b[e]);
        g.show();
        g.find("p").text(c.Utils.getItemTranslation(this.container, d[e].word) || d[e].word);
        var f = g.find(".rounddetails-card__similar-drawing-reference");
        f.html("");
        var h = c.SVGUtils.createSvgFromSegments(a.drawing, g.width(), .736 * g.width(), {
          padding: 10,
          color: "rgba(0,0,0,0.15)"
        });
        f.append(h);
        f = g.find(".rounddetails-card__similar-drawing-neighbor");
        f.html("");
        g = c.SVGUtils.createSvgFromSegments(d[e].neighbor, g.width(), .736 * g.width(), {
          padding: 10,
          order: 1
        });
        f.append(g);
      } else $(b[e]).hide();
    }) : b.hide();
  };
  c.view.GameView = function (a) {
    c.EventEmitter.call(this);
    this.container = a;
    this.elem = a.find(".gameview");
    this.initListeners();
  };
  c.view.GameView.prototype = Object.create(c.EventEmitter.prototype);
  c.view.GameView.prototype.initListeners = function () {
    this.elem.find(".gameview__clear-btn").on("touchend mouseup", function () {
      this.emit("CLEAR");
    }.bind(this));
  };
  c.view.GameView.prototype.setCurrentWord = function (a) {
    this.elem.find(".helping-elf__secondary").text(c.Utils.capitalize(c.Utils.getItemTranslation(this.container, a)));
  };
  c.SpeechController = function () {
    this.supported = !1;
    if (this.synth = window.speechSynthesis) this.supported = !0, this.synth.getVoices();
  };
  c.SpeechController.prototype.speak = function (a, b) {
    if (this.supported) {
      a = a.replace(/'/gi, "\u2019");
      a = new SpeechSynthesisUtterance(a);
      a.lang = "en" === c.Utils.lang ? "en-US" : c.Utils.lang;
      a.addEventListener("end", function () {
        b && b();
      });
      var d = function () {
        this.synth.speaking ? setTimeout(function () {
          d();
        }.bind(this), 200) : b && b();
      }.bind(this);
      setTimeout(function () {
        d();
      }.bind(this), 500);
      a.rate = 1.1;
      this.synth.speak(a);
    }
  };
  c.view.MachineView = function (a) {
    this.container = a;
    this.elem = a.find(".machineview");
    this.elemA = this.elem.find(".machineview__primary");
    this.elemB = this.elem.find(".machineview__secondary");
    this.elemC = this.elem.find(".machineview__tertiary");
    this.speech = new c.SpeechController();
  };
  c.view.MachineView.prototype.reset = function () {
    this.setText("...");
    this.guessesQueue = [];
    this.mentionedWords = {};
    this.talkingGuesses = !1;
    this.recentMentionedWords = [];
  };
  c.view.MachineView.prototype.setText = function (a, b, d) {
    b = b || "";
    d = d || "";
    this.elemA.text(a || "");
    this.elemB.text(b);
    this.elemC.text(d);
  };
  c.view.MachineView.prototype.setResultWord = function (a) {
    this.guessesQueue = [];
    a = c.Utils.getInterpolatedTranslation(c.Utils.getTranslation(this.container, "quickdraw-machine-know"), "thing", "~" + c.Utils.getItemTranslation(this.container, a) + "~").split("~");
    "!" == a[2] ? (a[1] += "!", a[2] = null) : "." == a[2] && (a[1] += ".", a[2] = null);
    this.speakAndWrite(a[0], a[1], a[2]);
    setTimeout(function () {
      0 == this.guessesQueue.length && this.setText("...");
    }.bind(this), 3E3);
  };
  c.view.MachineView.prototype.speakAndWrite = function (a, b, d, e) {
    b = b || "";
    d = d || "";
    this.setText(a, b, d);
    this.speak(a + " " + b + " " + d, e);
  };
  c.view.MachineView.prototype.speak = function (a, b) {
    this.talking = !0;
    this.speech.speak(a, function () {
      this.talking = !1;
      b && b();
    }.bind(this));
  };
  c.view.MachineView.prototype.setGuesses = function (a) {
    this.guessesQueue = a.filter(function (a) {
      return !this.mentionedWords.hasOwnProperty(a);
    }.bind(this));
    !this.talkingGuesses && 0 < this.guessesQueue.length && this.readNextGuess(!0);
    return this.guessesQueue.length;
  };
  c.view.MachineView.prototype.readNextGuess = function (a) {
    this.talkingGuesses = !0;
    if (0 == this.guessesQueue.length) this.talkingGuesses = !1;else {
      a && (this.recentMentionedWords = []);
      var b = this.guessesQueue.shift();
      if (c.Utils.getItemTranslation(this.container, b)) {
        var d = c.Utils.getTranslation(this.container, "quickdraw-machine-see"),
          e = c.Utils.getItemTranslation(this.container, b);
        this.setText(d, e);
        d = c.Utils.getTranslation(this.container, "quickdraw-machine-or") + " " + c.Utils.getItemTranslation(this.container, b);
        a && (d = c.Utils.getTranslation(this.container, "quickdraw-machine-see") + " " + c.Utils.getItemTranslation(this.container, b));
        this.speak(d, function () {
          this.readNextGuess();
        }.bind(this));
      }
      this.recentMentionedWords.push(b);
      this.mentionedWords[b] = 1;
    }
  };
  c.view.DrawingCanvas = function (a) {
    c.EventEmitter.call(this);
    this.$canvas = a.find(".drawingCanvas");
    this.canvas = this.$canvas[0];
    this.$pen = a.find(".whiteboard__pen");
    this.strokeColor = "#37414D";
    this.strokeWidth = 10;
    this.strokeCap = "round";
    this.previousPos = null;
    this.paths = [];
    paper.install(this);
    paper.setup(this.canvas);
    this.tool_ = new paper.Tool();
    this.path = null;
    this.lastMouseY = this.lastMouseX = 0;
    this.lastTime = 1;
    this.drawingVolume = 0;
    this.resizeCanvas();
    $(window).on("resize", function () {
      this.resizeCanvas();
    }.bind(this));
  };
  c.view.DrawingCanvas.prototype = Object.create(c.EventEmitter.prototype);
  c.view.DrawingCanvas.prototype.currentTimeMs = function () {
    return this.startTime ? new Date() - this.startTime : 0;
  };
  c.view.DrawingCanvas.prototype.clearDrawingCanvas = function () {
    paper.project.activeLayer.removeChildren();
    this.resizeCanvas();
    delete this.startTime;
    this.paths = [];
  };
  c.view.DrawingCanvas.prototype.getSegments = function () {
    return this.paths;
  };
  c.view.DrawingCanvas.prototype.resizeCanvas = function () {
    window.matchMedia("(max-width: 767px)").matches ? (this.canvas.width = this.$canvas.width(), this.canvas.height = this.$canvas.parent().height(), this.canvas.style.width = this.$canvas.width() + "px", this.canvas.style.height = this.$canvas.parent().height() + "px", paper.view.viewSize = new paper.Size(this.canvas.width, this.canvas.height)) : (this.canvas.width = this.$canvas.width(), this.canvas.height = 594 * this.canvas.width / 1015, this.canvas.style.width = this.$canvas.width() + "px", this.canvas.style.height = 594 * this.$canvas.width() / 1015 + "px", paper.view.viewSize = new paper.Size(this.canvas.width, this.canvas.height), this.$canvas.parent().css("padding-bottom", 594 * this.$canvas.width() / 1015));
    paper.view.draw();
  };
  c.view.DrawingCanvas.prototype.startListening = function () {
    paper.view.on("mousemove", function (a) {
      this.canvas && this.$pen.css({
        bottom: paper.view.viewSize.height - a.point.y + 1,
        left: a.point.x + 1
      });
    }.bind(this));
    this.tool_.on("mousedown", function (a) {
      this.path && (this.path.selected = !1);
      this.path = new paper.Path({
        segments: [a.point],
        strokeColor: this.strokeColor,
        strokeCap: this.strokeCap,
        strokeWidth: this.strokeWidth
      });
      0 == this.paths.length && (this.startTime = new Date());
      this.paths.push([[a.point.x], [a.point.y], [this.currentTimeMs()]]);
      paper.view.draw();
      window.santaApp.fire("sound-trigger", "qd_marker_start");
    }.bind(this));
    this.tool_.on("mousedrag", function (a) {
      this.path.add(a.point);
      var b = this.paths[this.paths.length - 1];
      if (0 == b[0].length || 4 < Math.abs(b[0][b[0].length - 1] - a.point.x) || 4 < Math.abs(b[1][b[1].length - 1] - a.point.y)) b[0].push(a.point.x), b[1].push(a.point.y), b[2].push(this.currentTimeMs());
      this.path.smooth();
      paper.view.draw();
      this.emit("DRAWING_UPDATED", this);
      this.calculateDrawingVolume(a.point);
    }.bind(this));
    this.tool_.on("mouseup", function (a) {
      this.path.smooth();
      paper.view.draw();
      this.emit("DRAWING_UPDATED", this);
      this.paths[this.paths.length - 1][0].push(a.point.x);
      this.paths[this.paths.length - 1][1].push(a.point.y);
      this.paths[this.paths.length - 1][2].push(this.currentTimeMs());
      window.santaApp.fire("sound-trigger", "qd_marker_stop");
    }.bind(this));
  };
  c.view.DrawingCanvas.prototype.calculateDrawingVolume = function (a) {
    var b = Math.abs(Math.abs(a.x / this.canvas.width - this.lastMouseX) + Math.abs(a.y / this.canvas.height - this.lastMouseY)) / (performance.now() / 1E3 - this.lastTime);
    isFinite(b) && (this.drawingVolume += b / 2);
    this.lastTime = performance.now() / 1E3;
    this.lastMouseX = a.x / this.canvas.width;
    this.lastMouseY = a.y / this.canvas.height;
    this.soundUpdate();
  };
  c.view.DrawingCanvas.prototype.soundUpdate = function () {
    isFinite(this.drawingVolume) && (this.drawingVolume *= .6, window.santaApp.fire("sound-trigger", "qd_draw_update", Math.min(1, this.drawingVolume)));
  };
  c.view.DrawingCanvas.prototype.stopListening = function () {
    paper.view.off("mousemove");
    this.tool_.off("mousedown");
    this.tool_.off("mousedrag");
    this.tool_.off("mouseup");
  };
  function p(a, b) {
    let d = 0,
      e = 0;
    return function () {
      function g() {
        e = k;
        a.apply(h, f);
      }
      const f = arguments,
        h = this,
        k = +new Date();
      window.clearTimeout(d);
      k >= e + b ? g() : d = window.setTimeout(g, b);
    };
  }
  c.DrawingRecognitionController = function () {
    c.EventEmitter.call(this);
    this.handwritingAPI = new c.HandwritingAPI();
    this.processDrawingThrottle = p(function (a) {
      this.processDrawing(a);
    }.bind(this), 1E3 * c.Constants.MAX_API_RATE);
    this.isRecognizing = !1;
  };
  c.DrawingRecognitionController.prototype = Object.create(c.EventEmitter.prototype);
  c.DrawingRecognitionController.prototype.start = function () {
    this.isRecognizing = !0;
  };
  c.DrawingRecognitionController.prototype.stop = function () {
    this.isRecognizing = !1;
  };
  c.DrawingRecognitionController.prototype.onDrawingUpdated = function (a) {
    this.processDrawingThrottle(a);
  };
  c.DrawingRecognitionController.prototype.processDrawing = function (a) {
    var b = a.getSegments();
    10 < b.reduce(function (a, b) {
      return a + b[0].length;
    }, 0) && this.handwritingAPI.processSegments(b, a.canvas.width, a.canvas.height).fail(function (a, b, g) {
      console.error(a, b, g);
    }).done(function (a) {
      this.processRecognitionResponse(this.handwritingAPI.parseResponse(a));
    }.bind(this));
  };
  c.DrawingRecognitionController.prototype.processRecognitionResponse = function (a) {
    a = this.filterGuesses(a);
    this.emit("NEW_RECOGNITIONS", a);
  };
  c.DrawingRecognitionController.prototype.filterGuesses = function (a) {
    return a.filter(function (a) {
      return a.score < c.Constants.HANDWRITING_THRESHOLD;
    });
  };
  c.Clock = function () {
    c.EventEmitter.call(this);
    this.reset();
    this.started = !1;
  };
  c.Clock.prototype = Object.create(c.EventEmitter.prototype);
  c.Clock.prototype.reset = function () {
    this.timeLeft = this.totalTime = c.Constants.INITIAL_COUNTDOWN;
    this.started = !1;
  };
  c.Clock.prototype.startClock = function () {
    this.started = !0;
    this.interval && clearInterval(this.interval);
    this.interval = setInterval(function () {
      var a = Math.round(this.timeLeft);
      this.timeLeft -= .1;
      a != Math.round(this.timeLeft) && this.emit("TIME_DOWN");
      0 >= this.timeLeft && (this.timeLeft = 0, this.pauseClock(), this.emit("TIMES_UP"));
    }.bind(this), 100);
  };
  c.Clock.prototype.pauseClock = function () {
    this.started = !1;
    clearInterval(this.interval);
    this.interval = null;
  };
  c.GameRound = function (a, b) {
    this.presentationWord = this.word = a.word;
    this.startTime = new Date();
    this.recognized = !1;
    this.level = b;
    this.recognitions = [];
    this.height = this.width = 0;
  };
  c.GameRound.prototype.getElapsedTime = function () {
    return (new Date().getTime() - this.startTime.getTime()) / 1E3;
  };
  c.shared = {};
  c.shared.Scoreboard = q;
  function r(a, b) {
    a = l ? l[a] : void 0;
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
  c.GameController = function (a, b) {
    c.EventEmitter.call(this);
    this.container = a;
    this.recognitionController = new c.DrawingRecognitionController();
    this.clock = new c.Clock();
    this.scoreboard = new c.shared.Scoreboard(this, a.find(".board"), c.Constants.TOTAL_LEVELS);
    this.cardsView = new c.view.CardsView(a, b);
    this.gameView = new c.view.GameView(a);
    this.machineView = new c.view.MachineView(a);
    this.drawingCanvas = new c.view.DrawingCanvas(a);
    this.drawingUntouched = !0;
    this.drawingCanvas.addListener("DRAWING_UPDATED", function (a) {
      this.onDrawingUpdated(a);
    }.bind(this));
    this.gameView.addListener("CLEAR", function () {
      this.drawingCanvas.clearDrawingCanvas();
      window.santaApp.fire("sound-trigger", "qd_clear");
    }.bind(this));
    this.recognitionController.addListener("NEW_RECOGNITIONS", function (a) {
      this.onNewRecognitions(a);
    }.bind(this));
    this.clock.addListener("TIMES_UP", function () {
      this.roundTimesUp();
    }.bind(this));
    this.clock.addListener("TIME_DOWN", function () {
      this.scoreboard.onFrame(1);
    }.bind(this));
    this.elem = a.find(".gameview");
    this.elem.hide();
    this.resetGameRounds();
    this.newGuessesCounter = 0;
  };
  c.GameController.prototype = Object.create(c.EventEmitter.prototype);
  c.GameController.prototype.prepareNewGame = function (a) {
    if (!this.preparedChallenge) this.fetchNewRound([], function (b) {
      a ? a(b) : this.preparedChallenge = b;
    }.bind(this));else if (a) {
      var b = Object.assign({}, this.preparedChallenge);
      this.preparedChallenge = void 0;
      a(b);
    }
  };
  c.GameController.prototype.resetGameRounds = function () {
    this.presentedWords = [];
    this.previousRounds = [];
  };
  c.GameController.prototype.showView = function () {
    this.elem.show();
    this.drawingCanvas.resizeCanvas();
  };
  c.GameController.prototype.onDrawingUpdated = function (a) {
    this.recognitionController.onDrawingUpdated(a);
    this.drawingUntouched && (this.drawingUntouched = !1, this.machineView.setText("..."));
  };
  c.GameController.prototype.onNewRecognitions = function (a) {
    this.currentRound.recognitions = a;
    if (this.recognitionController.isRecognizing) {
      var b = a.filter(function (a) {
        return a.word == this.currentRound.word && a.score < c.Constants.HANDWRITING_RECOGNITION_THRESHOLD;
      }.bind(this))[0];
      this.currentRound && b ? this.roundRecognized(b) : this.currentRound && (a = a.filter(function (a) {
        return a.word != this.currentRound.word;
      }.bind(this)), a = a.map(function (a) {
        return a.word;
      }).filter(a => c.Utils.hasItemTranslation(this.container, a)), 0 == this.machineView.setGuesses(a) ? this.newGuessesCounter++ : this.newGuessesCounter = 0, 2 < this.newGuessesCounter && (this.newGuessesCounter = 0, a = c.Utils.getTranslation(this.container, "quickdraw-round-no-new-guess"), this.machineView.speakAndWrite(a)));
    }
  };
  c.GameController.prototype.fetchNewRound = function (a, b) {
    a = c.Constants.WORDS.filter(function (a) {
      return 0 > this.indexOf(a);
    }, a);
    b({
      word: a[Math.floor(Math.random() * a.length)]
    });
  };
  c.GameController.prototype.startNewGameWithChallenge = function (a, b) {
    b = b || {
      onCardDismiss: function () {}
    };
    this.resetGameRounds();
    this.scoreboard.reset();
    this.scoreboard.score = void 0;
    this.level = 1;
    this.completedLevels = 0;
    this.clock.reset();
    this.clock.startClock();
    this.startNewRoundWithChallenge(a, {
      onCardDismiss: b.onCardDismiss
    });
    this.gameView.addListener("CLEAR", function () {
      this.machineView.reset();
    }.bind(this));
  };
  c.GameController.prototype.startNewRoundWithChallenge = function (a, b) {
    b = b || {
      onCardDismiss: function () {}
    };
    this.pauseGame();
    this.drawingUntouched = !0;
    this.currentRound = new c.GameRound(a, this.level);
    this.currentRound.width = this.drawingCanvas.canvas.width;
    this.currentRound.height = this.drawingCanvas.canvas.height;
    this.presentedWords.push(this.currentRound.word);
    var d = function () {
      this.gameView.setCurrentWord(this.currentRound.word);
      this.drawingCanvas.clearDrawingCanvas();
      this.machineView.reset();
      this.recognitionController.start();
      this.clock.reset();
      this.clock.startClock();
      window.santaApp.fire("sound-trigger", "generic_button_click");
      window.santaApp.fire("sound-ambient", "music_start_ingame");
    }.bind(this);
    this.scoreboard.setLevel(this.level - 1);
    this.cardsView.showNewRoundCard({
      level: this.level,
      word: this.currentRound.presentationWord,
      onCardDismiss: function () {
        b.onCardDismiss();
        d();
      }
    });
  };
  c.GameController.prototype.roundRecognized = function (a) {
    this.recognitionController.stop();
    this.pauseGame();
    this.machineView.setResultWord(this.currentRound.word);
    setTimeout(function () {
      this.submitRoundResult({
        recognition: a
      }, function (a) {
        this.previousRounds.push(this.currentRound);
        this.completedLevels++;
        this.level < c.Constants.TOTAL_LEVELS ? (this.level++, this.startNewRoundWithChallenge(a), window.santaApp.fire("sound-trigger", "qd_level_up")) : (this.endGame(), window.santaApp.fire("sound-trigger", "qd_complete"));
      }.bind(this));
    }.bind(this), 1500);
  };
  c.GameController.prototype.roundTimesUp = function () {
    this.recognitionController.stop();
    setTimeout(function () {
      this.machineView.speakAndWrite(c.Utils.getTranslation(this.container, "quickdraw-round-timesup"), c.Utils.getTranslation(this.container, "quickdraw-round-sorry"));
    }.bind(this), 500);
    this.submitRoundResult({
      recognition: !1
    }, function (a) {
      this.previousRounds.push(this.currentRound);
      this.level < c.Constants.TOTAL_LEVELS ? (this.machineView.reset(), this.level++, this.startNewRoundWithChallenge(a)) : this.endGame();
    }.bind(this));
  };
  c.GameController.prototype.submitRoundResult = function (a, b) {
    this.scoreboard.restart();
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    this.currentRound.drawing = this.drawingCanvas.getSegments();
    this.currentRound.recognized = a.recognition ? !0 : !1;
    this.fetchNewRound(this.presentedWords, function (a) {
      b && b(a);
    });
  };
  c.GameController.prototype.pauseGame = function () {
    this.clock.pauseClock();
  };
  c.GameController.prototype.endGame = function () {
    this.recognitionController.stop();
    this.clock.pauseClock();
    this.machineView.reset();
    window.santaApp.fire("sound-ambient", "music_start_scene");
    this.cardsView.showTimesUpCard(this.previousRounds, function (a) {
      "NEW_GAME" == a && this.prepareNewGame(function (a) {
        this.startNewGameWithChallenge(a);
      }.bind(this));
    }.bind(this));
  };
  c.GameController.prototype.exitGame = function () {
    this.pauseGame();
    this.recognitionController.stop();
    this.machineView.setGuesses([]);
    this.currentRound = void 0;
    this.clock.pauseClock();
    this.drawingCanvas.stopListening();
  };
  c.GameController.prototype.prepareGame = function () {
    this.drawingCanvas.startListening();
  };
  c.Game = function (a, b) {
    this.elem = $(a);
    this.splashView = new c.view.SplashView(this.elem);
    this.gameController = new c.GameController(this.elem, b);
  };
  c.Game.prototype.start = function () {
    this.gameController.prepareGame();
    this.gameController.prepareNewGame();
    this.gameController.addListener("GAME_END", function () {
      this.showSplashscreen();
    }.bind(this));
    this.splashView.showView();
    this.splashView.addListener("START_GAME", function () {
      this.startGame();
      window.santaApp.fire("sound-ambient", "music_start_ingame");
    }.bind(this));
  };
  c.Game.prototype.dispose = function () {
    this.gameController.exitGame();
  };
  c.Game.prototype.startGame = function () {
    this.gameController.prepareNewGame(function (a) {
      this.gameController.startNewGameWithChallenge(a, {
        onCardDismiss: function () {
          this.splashView.hideView();
          this.gameController.showView();
        }.bind(this)
      });
    }.bind(this));
  };
  c.Game.prototype.showSplashscreen = function () {
    this.gameController.hideView();
    this.splashView.showView();
  };
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('qd_load_sounds');
sceneApi.preload.images('img/back-button-arrow.svg', 'img/clear-btn.svg', 'img/elf.svg', 'img/eraser.svg', 'img/icon.svg', 'img/mobile-bubble.svg', 'img/pen.svg', 'img/pens.svg', 'img/robby.svg', 'img/speech-bubble.svg', 'img/speedsketch-background.svg', 'img/splashscreen-image.svg', 'img/tag-not-recognized.svg', 'img/tag-recognized.svg', 'img/whiteboard.svg');
const game = new Game(document.getElementById('module-speedsketch'), './');
sceneApi.config({
  sound: ['qd_start', 'music_start_scene'],
  orientation: 'portrait'
});
sceneApi.ready(async () => {
  game.start();
});