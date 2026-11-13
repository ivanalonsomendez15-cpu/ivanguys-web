import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
    GameManager: {
      color: "#f06",
      currentCanvas: null,
      currentIndex: 0,
      currentOrnament: null,
      gallery: null,
      ie: null,
      ios: null,
      lastOrnament: null,
      lastOrnamentObj: null,
      ornaments: [],
      sizeSlider: null,
      tool: null,
      toolWrapper: null,
      totalOrnament: 0,
      dispose: function () {
        this.totalOrnaments = this.toolWrapper = this.tool = this.sizeSlider = this.ornaments = this.lastOrnamentObj = this.lastOrnament = this.ios = this.ie = this.gallery = this.currentOrnament = this.currentIndex = this.currentCanvas = this.color = null;
      },
      bounce: function (b, a) {
        b.animate([{
          transform: "scale3d(.87, .87, .87)",
          offset: 0
        }, {
          transform: "scale3d(1.1, 1.1, 1.1)",
          offset: .2
        }, {
          transform: "scale3d(.9, .9, .9)",
          offset: .4
        }, {
          transform: "scale3d(1.03, 1.03, 1.03)",
          offset: .6
        }, {
          transform: "scale3d(.97, .97, .97)",
          offset: .8
        }, {
          transform: "scale3d(1, 1, 1)",
          offset: 1
        }], {
          duration: a || 1E3,
          easing: "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
        });
      },
      extension: function () {
        return this.ie || this.ios ? ".png" : ".svg";
      }
    }
  };
  c.Mouse = function (b) {
    this.elem = b[0];
    this.rect = this.elem.getBoundingClientRect();
    this.down = !1;
    this.relY = this.relX = this.y = this.x = 0;
    this.subscribers = [];
    this.touchStartedInOrnamentLink = this.touchStartedInCanvas = !1;
    var a = function () {
      var a = $(window).width(),
        g = $(window).height() - window.santaApp.headerSize;
      a = Math.min((a + 1420) / 3340, g / 985);
      b.css({
        "font-size": a
      });
      this.rect = this.elem.getBoundingClientRect();
      this.scaleFactor = a;
    }.bind(this);
    $(window).on("resize.seasonofgiving", a);
    a();
    b.on("mousemove", function (a) {
      this.x = a.clientX;
      this.y = a.clientY;
      a.preventDefault();
    }.bind(this));
    b.on("touchstart touchmove", function (a) {
      this.x = a.originalEvent.touches[0].clientX;
      this.y = a.originalEvent.touches[0].clientY;
      (this.touchStartedInCanvas = !!$(a.target).closest(".canvas").length) && a.preventDefault();
    }.bind(this));
    b.on("mousedown touchstart", function (a) {
      this.down = !0;
      this.touchStartedInOrnamentLink = !!$(a.target).closest(".ornament-copy").length;
      (this.touchStartedInCanvas = !!$(a.target).closest(".canvas").length) && a.preventDefault();
    }.bind(this));
    b.on("mouseup mouseleave touchend touchleave", function (a) {
      this.down = !1;
      !a.cancelable || !this.touchStartedInCanvas && this.touchStartedInOrnamentLink || (a.preventDefault(), this.touchStartedInOrnamentLink = this.touchStartedInCanvas = !1);
      window.santaApp.fire("sound-trigger", "spirit_crayon_end");
    }.bind(this));
  };
  c.Mouse.prototype.subscribe = function (b, a) {
    this.subscribers.push({
      callback: b,
      context: a
    });
  };
  c.Mouse.prototype.update = function () {
    var b = this.transformCoordinates(this.x, this.y, this.rect);
    this.subscribers.forEach(function (a) {
      a.callback.call(a.context, b);
    });
  };
  c.Mouse.prototype.transformCoordinates = function (b, a, d) {
    return {
      x: b - d.left,
      y: a - d.top,
      relX: 2 * b / d.width - 1,
      relY: 2 * a / d.height - 1,
      down: this.down
    };
  };
  c.Ornament = function (b, a) {
    this.elem = $(a);
    this.isActive = !1;
    this.canvas = a.find(b)[0];
    this.aspectRatio = 1;
    this.canvas.width = 560 * (window.devicePixelRatio || 1);
    this.canvas.height = this.canvas.width / this.aspectRatio;
    this.canvas.style.width = 1 / (window.devicePixelRatio || 1) * this.canvas.width + "px";
    this.canvas.style.height = 1 / (window.devicePixelRatio || 1) * this.canvas.height + "px";
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.tempCanvas = $(this.canvas).prev()[0];
    this.tempCanvas.width = this.canvas.width;
    this.tempCanvas.height = this.canvas.height;
    this.tempCanvas.style.width = this.canvas.style.width;
    this.tempCanvas.style.height = this.canvas.style.height;
    this.tempCtx = this.tempCanvas.getContext("2d");
    this.dpr = window.devicePixelRatio || 1;
    this.isDrawing = !1;
    this.lastPoint = {
      x: 0,
      y: 0
    };
    this.points = [];
    this.mouse = {
      down: !1,
      x: 0,
      y: 0,
      px: 0,
      py: 0
    };
    this.wrapperDelay = null;
    this.ornamentStage = $(this.canvas).parent();
    this.ornamentScene = this.ornamentStage.closest(".scene-ornament");
    this.ornamentWrapper = this.ornamentScene.parent();
    this.ornament = this.ornamentStage.closest(".ornament");
    this.ornamentCopy = this.ornamentScene.find(".ornament-copy");
    this.guideImg = this.ornamentScene.find(".color-guide")[0];
    this.logoImg = this.ornamentScene.find(".ornament-logo")[0];
    this.subjectCopy = this.ornamentScene.find(".ornament-copy-subject").text();
    this.moreInfoUrl = this.ornamentScene.find(".ornament-link").attr("href");
    this.ornamentAnim = null;
    this.randomColor = "#" + Math.floor(16777215 * Math.random()).toString(16);
    this.organization = $(this.ornamentScene).attr("data-org");
    this.ornamentItemCanvas = this.elem.find("#ornament-item-canvas--" + this.organization)[0];
    this.ornamentInGallery = this.ornamentItemCanvas.closest(".ornament-item");
    this.isDrawn = !1;
  };
  c.Ornament.prototype.init = function () {
    this.addEventListeners();
    this.resize();
  };
  c.Ornament.prototype.addEventListeners = function () {
    $(window).on({
      "resize.seasonofgiving": this.resize.bind(this),
      "touchend.seasonofgiving mouseup.seasonofgiving": this.globalMouseUp.bind(this),
      "touchstart.seasonofgiving mousedown.seasonofgiving": this.mouseDown.bind(this),
      "touchmove.seasonofgiving mousemove.seasonofgiving": this.mouseMove.bind(this)
    });
    this.elem.find(".Tool-bottomContainer").on("touchmove", function (b) {
      b.preventDefault();
    });
  };
  c.Ornament.prototype.show = function (b) {
    b = b || 0;
    this.isActive = !0;
    window.clearTimeout(this.wrapperDelay);
    this.wrapperDelay = window.setTimeout(function () {
      this.ornamentWrapper.addClass("active");
      c.GameManager.navigation.handleResize();
    }.bind(this), .5 * b);
    console.info("making ornament and copy visible", this.ornamentCopy[0]);
    this.ornament.addClass("visible");
    this.ornamentCopy.addClass("visible");
  };
  c.Ornament.prototype.hide = function () {
    this.cloneCanvas();
    this.ornament.removeClass("visible");
    this.ornamentCopy.removeClass("visible");
    this.ornamentWrapper.removeClass("active");
    this.isActive = !1;
  };
  c.Ornament.prototype.cloneCanvas = function () {
    if (this.isDrawn) {
      $(this.ornamentInGallery).addClass("ornament-item--drawn");
      var b = this.ornamentItemCanvas.getContext("2d");
      this.ornamentItemCanvas.width = this.canvas.width;
      this.ornamentItemCanvas.height = this.canvas.height;
      b.drawImage(this.canvas, 0, 0);
    }
    return b;
  };
  c.Ornament.prototype.clamp = function (b, a, d) {
    return b < a ? a : b > d ? d : b;
  };
  c.Ornament.prototype.relativeValue = function (b, a, d, g, f) {
    return this.clamp(g + (b - a) / (d - a) * (f - g), g, f);
  };
  c.Ornament.prototype.resize = function () {
    var b = 0;
    b = +$(window).width();
    var a = +$(window).height();
    b = 1024 < b && 600 < a ? this.relativeValue(b, 1024, 1400, 400, 520) : this.relativeValue(Math.min(b, a), 320, 1025, 280, 400);
    this.ornamentStage.css({
      width: b,
      height: b
    });
    $(".ornament", this.elem).css({
      "max-width": b,
      "max-height": b
    });
    this.isActive && (this.show(), c.GameManager.navigation.handleResize());
    a = this.ornamentStage[0].getBoundingClientRect();
    var d = this.canvas;
    b = this.tempCanvas;
    var g = this.ctx,
      f = d.toDataURL(),
      e = new Image();
    e.onload = function () {
      g.drawImage(e, 0, 0, e.width, e.height, 0, 0, d.width, d.height);
    };
    e.src = f;
    a.width < a.height ? (d.width = b.width = (window.devicePixelRatio || 1) * a.width, d.height = b.height = d.width / this.aspectRatio) : (d.height = b.height = (window.devicePixelRatio || 1) * a.height, d.width = b.width = d.height / this.aspectRatio);
    a = 1 / (window.devicePixelRatio || 1) * d.height + "px";
    d.style.width = b.style.width = 1 / (window.devicePixelRatio || 1) * d.width + "px";
    d.style.height = b.style.height = a;
  };
  c.Ornament.prototype.globalMouseUp = function () {
    this.isActive && (this.isDrawing = !1, this.points.length = 0, $(this.tempCanvas).removeClass("temp-canvas--active"), this.ctx.drawImage(this.tempCanvas, 0, 0), c.GameManager.tool && c.GameManager.tool.el.css({
      opacity: 1
    }), this.elem.find(".Tool--selected").hasClass("Tool-crayon--eraser") ? window.santaApp.fire("sound-trigger", "spirit_eraser_end") : window.santaApp.fire("sound-trigger", "spirit_crayon_end"));
  };
  c.Ornament.prototype.mouseDown = function (b) {
    var a = b.originalEvent.composedPath()[0];
    a = a && "canvas" === a.localName;
    if (c.GameManager.tool && this.isActive && a) {
      this.elem.find(".Tool--selected").hasClass("Tool-crayon--eraser") ? window.santaApp.fire("sound-trigger", "spirit_eraser_start") : window.santaApp.fire("sound-trigger", "spirit_crayon_start");
      this.isDrawn = this.isDrawing = !0;
      "mousedown" === b.type ? (a = b.clientX, b = b.clientY) : (a = b.originalEvent.touches[0].pageX, b = b.originalEvent.touches[0].pageY);
      var d = this.canvas.getBoundingClientRect();
      this.lastPoint = {
        x: a - d.left,
        y: b - d.top
      };
      this.randomColor = "#" + Math.floor(16777215 * Math.random()).toString(16);
      this.points.push(this.lastPoint);
      this.tempCtx.lineJoin = "round";
      this.tempCtx.lineCap = "round";
      this.tempCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.tempCtx.beginPath();
      b = this.points[0];
      this.tempCtx.moveTo(b.x * this.dpr, b.y * this.dpr);
      this.tempCtx.lineTo((b.x + .1) * this.dpr, (b.y + .1) * this.dpr);
      this.tempCtx.lineWidth = c.GameManager.sizeSlider.strokeSize;
      this.tempCtx.strokeStyle = "rainbow" !== c.GameManager.color ? c.GameManager.color : this.randomColor;
      this.tempCtx.stroke();
      $(this.tempCanvas).addClass("temp-canvas--active");
      c.GameManager.tool && c.GameManager.tool.el.css({
        opacity: .8
      });
    }
  };
  c.Ornament.prototype.mouseMove = function (b) {
    if (this.isDrawing && this.isActive) {
      var a = this.canvas.getBoundingClientRect();
      if ("mousemove" === b.type) {
        var d = b.pageX;
        b = b.pageY;
      } else d = b.originalEvent.touches[0].pageX, b = b.originalEvent.touches[0].pageY;
      a = {
        x: d - a.left,
        y: b - a.top
      };
      this.points.push(a);
      this.tempCtx.lineJoin = "round";
      this.tempCtx.lineCap = "round";
      this.tempCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      d = this.points[0];
      b = this.points[1];
      this.tempCtx.beginPath();
      this.tempCtx.moveTo(d.x * this.dpr, d.y * this.dpr);
      this.distanceBetween(this.lastPoint, a);
      this.angleBetween(this.lastPoint, a);
      var g;
      var f = 0;
      for (g = this.points.length; f < g; f++) this.tempCtx.quadraticCurveTo(d.x * this.dpr, d.y * this.dpr, (d.x + (b.x - d.x) / 2) * this.dpr, (d.y + (b.y - d.y) / 2) * this.dpr), d = this.points[f], b = this.points[f + 1];
      this.tempCtx.lineWidth = c.GameManager.sizeSlider.strokeSize;
      this.tempCtx.strokeStyle = "rainbow" !== c.GameManager.color ? c.GameManager.color : this.randomColor;
      this.tempCtx.stroke();
      this.lastPoint = a;
    }
  };
  c.Ornament.prototype.reset = function () {
    this.tempCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  c.Ornament.prototype.distanceBetween = function (b, a) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  };
  c.Ornament.prototype.angleBetween = function (b, a) {
    return Math.atan2(a.x - b.x, a.y - b.y);
  };
  c.OrnamentExporter = function (b, a) {
    this.canvas = $("<canvas>")[0];
    this.extension = c.GameManager.extension();
    this.ornamentImg = new Image();
    this.ornamentImg.crossOrigin = "anonymous";
    this.ornamentImg.src = a + "img/download-ornament" + this.extension;
    this.compositeLogoImg = new Image();
    this.compositeLogoImg.crossOrigin = "anonymous";
    this.compositeLogoImg.src = a + "img/print-st-logo" + this.extension;
    this.printGuideImg = new Image();
    this.printGuideImg.crossOrigin = "anonymous";
    this.printGuideImg.src = a + "img/print-guide" + this.extension;
    this.printInstructionCopy = b.elem.find(".print-instructions-copy").text().trim();
    this.moreInformationCopy = b.elem.find(".more-information-copy").text().trim();
    this.santaTrackerCopy = b.elem.find(".santatracker-copy").text().trim();
  };
  c.OrnamentExporter.PRINT_LAYOUT = {
    IMAGE_WIDTH: 3508,
    IMAGE_HEIGHT: 2480,
    VIEWPORT_WIDTH: 792,
    VIEWPORT_HEIGHT: 612,
    FOLD_X: 396,
    FOLD_Y_START: 146,
    FOLD_Y_END: 522,
    CIRCLE_X_LEFT: 229,
    CIRCLE_X_RIGHT: 563,
    CIRCLE_Y: 353,
    CIRCLE_RADIUS: 157,
    CIRCLE_STROKE: 12,
    LOGO_HEIGHT: 70,
    LOGO_WIDTH: 180,
    LOGO_X: 473,
    LOGO_Y: 224,
    INFO_Y: 357,
    INFO_LINE_HEIGHT: 17,
    ST_LINK_Y: 467,
    BG_X: 52,
    BG_Y: 39,
    INSTRUCTIONS_X: 396,
    INSTRUCTIONS_Y: 117,
    INSTRUCTIONS_LINE_HEIGHT: 14.4,
    INSTRUCTIONS_MAX_WIDTH: 200,
    INSTRUCTIONS_ENGLISH_WIDTH: 120
  };
  c.OrnamentExporter.DOWNLOAD_LAYOUT = {
    ORNAMENT_WIDTH_RATIO: 1.0735,
    ORNAMENT_HEIGHT_RATIO: 1.5068,
    DRAWING_X_OFFSET: .0342,
    DRAWING_Y_OFFSET: .3119,
    SHADOW_WIDTH_RATIO: 1.0631,
    SHADOW_HEIGHT_RATIO: 1.0881,
    LOGO_FONT_RATIO: .025,
    COPY_MARGIN_RATIO: .0475,
    LOGO_Y: .82,
    LOGO_WIDTH_RATIO: .0542,
    LOGO_HEIGHT_RATIO: .0957,
    INFORMATION_FONT_RATIO: .0133
  };
  c.OrnamentExporter.prototype.print = function (b) {
    if (b) {
      var a = c.OrnamentExporter.PRINT_LAYOUT;
      this.canvas.width = a.IMAGE_WIDTH;
      this.canvas.height = a.IMAGE_HEIGHT;
      var d = this.canvas.getContext("2d"),
        g = b.canvas;
      d.clearRect(0, 0, a.IMAGE_WIDTH, a.IMAGE_HEIGHT);
      var f = a.IMAGE_HEIGHT / a.VIEWPORT_HEIGHT;
      d.translate(a.IMAGE_WIDTH / 2 - f * a.VIEWPORT_WIDTH / 2, 0);
      d.scale(f, f);
      this.drawDrawing_(d, g, b.guideImg, a.CIRCLE_X_LEFT - a.CIRCLE_RADIUS, a.CIRCLE_Y - a.CIRCLE_RADIUS, 2 * a.CIRCLE_RADIUS);
      d.beginPath();
      d.moveTo(a.FOLD_X, a.FOLD_Y_START);
      d.lineTo(a.FOLD_X, a.FOLD_Y_END);
      d.lineWidth = 1;
      d.strokeStyle = "#D8D8D8";
      d.stroke();
      d.beginPath();
      d.arc(a.CIRCLE_X_LEFT, a.CIRCLE_Y, a.CIRCLE_RADIUS + a.CIRCLE_STROKE / 2, 0, 2 * Math.PI, !1);
      d.lineWidth = a.CIRCLE_STROKE;
      d.strokeStyle = "#29B6F6";
      d.stroke();
      d.beginPath();
      d.arc(a.CIRCLE_X_RIGHT, a.CIRCLE_Y, a.CIRCLE_RADIUS + a.CIRCLE_STROKE / 2, 0, 2 * Math.PI, !1);
      d.lineWidth = a.CIRCLE_STROKE;
      d.strokeStyle = "#29B6F6";
      d.stroke();
      this.drawImageContained_(d, b.logoImg, a.LOGO_X, a.LOGO_Y, a.LOGO_WIDTH, a.LOGO_HEIGHT, .5, 1);
      d.fillStyle = "#000000";
      d.globalCompositeOperation = "source-atop";
      d.fillRect(a.LOGO_X, a.LOGO_Y, a.LOGO_WIDTH, a.LOGO_HEIGHT);
      d.globalCompositeOperation = "source-over";
      d.drawImage(this.printGuideImg, a.BG_X, a.BG_Y);
      d.font = "900 25px Roboto, sans-serif";
      d.textAlign = "center";
      d.textBaseline = "alphabetic";
      d.fillStyle = "#29B6F6";
      d.fillText(b.subjectCopy, a.CIRCLE_X_RIGHT, a.CIRCLE_Y - 20);
      d.font = "700 11px Roboto, sans-serif";
      d.textAlign = "center";
      d.textBaseline = "top";
      d.fillStyle = "#29B6F6";
      d.fillText(this.moreInformationCopy, a.CIRCLE_X_RIGHT, a.INFO_Y);
      d.fillText(this.formatUrl_(b.moreInfoUrl), a.CIRCLE_X_RIGHT, a.INFO_Y + a.INFO_LINE_HEIGHT);
      d.font = "700 7px Roboto, sans-serif";
      d.textAlign = "center";
      d.textBaseline = "top";
      d.fillStyle = "#29B6F6";
      d.fillText("santatracker.google.com", a.CIRCLE_X_RIGHT, a.ST_LINK_Y);
      b = 0 === document.documentElement.lang.indexOf("en") ? a.INSTRUCTIONS_ENGLISH_WIDTH : a.INSTRUCTIONS_MAX_WIDTH;
      d.font = "900 12px Roboto, sans-serif";
      d.textAlign = "center";
      d.textBaseline = "alphabetical";
      d.fillStyle = "#424242";
      this.wrapText_(d, this.printInstructionCopy, a.INSTRUCTIONS_X, a.INSTRUCTIONS_Y, b, -a.INSTRUCTIONS_LINE_HEIGHT);
      a = "<!DOCTYPE html><html><head><title>" + (window.document.title + "</title></head>");
      a = a + '<body style="margin: 0;"><img style="width: 100%;" src="' + (this.canvas.toDataURL() + '">');
      a += "</body></html>";
      var e = window.open();
      e.document.open();
      e.document.write(a);
      e.document.close();
      e.addEventListener("load", function () {
        e.focus();
        e.print();
      }, !1);
    }
  };
  c.OrnamentExporter.prototype.download = function (b) {
    if (b) {
      var a = c.OrnamentExporter.DOWNLOAD_LAYOUT,
        d = window.devicePixelRatio || 1,
        g = window.screen.width,
        f = window.screen.height;
      this.canvas.width = g * d;
      this.canvas.height = f * d;
      var e = this.canvas.getContext("2d"),
        h = b.canvas;
      e.clearRect(0, 0, g * d, f * d);
      e.scale(d, d);
      d = h.width / d;
      var k = d * a.ORNAMENT_WIDTH_RATIO,
        l = d * a.ORNAMENT_HEIGHT_RATIO,
        m = g / 2 - k / 2,
        n = f / 2 - l / 2;
      this.drawDrawing_(e, h, b.guideImg, m + k * a.DRAWING_X_OFFSET, n + l * a.DRAWING_Y_OFFSET, d);
      e.rect(0, 0, g, f);
      e.fillStyle = "#388E3C";
      e.globalCompositeOperation = "destination-over";
      e.fill();
      e.globalCompositeOperation = "source-over";
      e.drawImage(this.ornamentImg, m, n, k * a.SHADOW_WIDTH_RATIO, l * a.SHADOW_HEIGHT_RATIO);
      e.font = "" + f * a.LOGO_FONT_RATIO + "px Lobster, sans-serif";
      h = e.measureText("Santa Tracker").width;
      d = f * a.COPY_MARGIN_RATIO + h / 2;
      h = f - f * a.COPY_MARGIN_RATIO;
      e.textAlign = "center";
      e.textBaseline = "alphabetic";
      e.fillStyle = "#ffffff";
      e.fillText(this.santaTrackerCopy, d, h);
      k = f * a.LOGO_WIDTH_RATIO;
      e.drawImage(this.compositeLogoImg, d - k / 2, f * a.LOGO_Y, k, f * a.LOGO_HEIGHT_RATIO);
      e.font = "900 " + f * a.INFORMATION_FONT_RATIO + "px Roboto, sans-serif";
      e.textAlign = "right";
      e.textBaseline = "alphabetic";
      e.fillStyle = "#ffffff";
      b = this.moreInformationCopy + " " + this.formatUrl_(b.moreInfoUrl);
      e.fillText(b, g - f * a.COPY_MARGIN_RATIO, h);
      a = "<!DOCTYPE html><html><head><title>" + (window.document.title + "</title></head>");
      a = a + '<body style="margin: 0;"><img style="width: 100%;" src="' + (this.canvas.toDataURL() + '">');
      a += "</body></html>";
      window.open().document.write(a);
    }
  };
  c.OrnamentExporter.prototype.drawDrawing_ = function (b, a, d, g, f, e) {
    var h = e / 2,
      k = g + h,
      l = f + h;
    b.beginPath();
    b.arc(k, l, h, 0, 2 * Math.PI, !1);
    b.fillStyle = "#ffffff";
    b.fill();
    b.globalCompositeOperation = "source-atop";
    b.drawImage(a, g, f, e, e);
    b.globalCompositeOperation = "source-over";
    b.drawImage(d, g, f, e, e);
  };
  c.OrnamentExporter.prototype.drawImageContained_ = function (b, a, d, g, f, e, h, k) {
    var l = e,
      m = f;
    f / e > a.width / a.height ? m = a.width / a.height * l : l = a.height / a.width * m;
    b.drawImage(a, d + f * h - m * h, g + e * k - l * k, m, l);
  };
  c.OrnamentExporter.prototype.formatUrl_ = function (b) {
    return b.replace(/^[^:]+:\/\//, "").replace(/[#\?].+/, "").replace(/\/$/, "");
  };
  c.OrnamentExporter.prototype.wrapText_ = function (b, a, d, g, f, e) {
    var h = a.split(" ");
    a = [];
    for (var k = "", l = 0 > e, m = 0; m < h.length; m++) {
      var n = k + h[m] + " ";
      b.measureText(n).width > f && 0 < m ? (a.push(k), g += l ? e : 0, k = h[m] + " ") : k = n;
    }
    a.push(k);
    e = l ? -e : e;
    for (f = 0; f < a.length; f++) b.fillText(a[f], d, g), g += e;
  };
  c.OrnamentGallery = function (b, a) {
    this.isVisible = !1;
    this.el = $(b).find(".ornament-gallery");
    this.context = $(a);
    this.items = this.context.find(".ornament-item");
    this.buttonInfo = this.context.find(".Button-info");
    this.scrollOffset = 0;
    this.touchStart = {
      x: 0,
      y: 0
    };
    this.mousePosition = {
      x: 0,
      y: 0
    };
    this.currentOrnament = null;
    this.crayon = this.context.find(".ornament-gallery-crayon");
    this.crayonHeight = $(this.crayon).height();
    this.crayonOffset = {
      x: 12,
      y: 22
    };
    this.bounceIn = [{
      transform: this.animScale(.3, 1),
      opacity: "0"
    }, {
      transform: this.animScale(1.2, 1),
      opacity: ".5"
    }, {
      transform: this.animScale(.9, 1),
      opacity: "1"
    }, {
      transform: this.animScale(1.03, 1),
      opacity: "1"
    }, {
      transform: this.animScale(.97, 1),
      opacity: "1"
    }, {
      transform: this.animScale(1, 1),
      opacity: "1"
    }];
    this.bounceOut = [{
      transform: this.animScale(1, 1),
      opacity: "1",
      visibility: "visible"
    }, {
      transform: this.animScale(1.13, 1),
      opacity: "1",
      visibility: "visible"
    }, {
      transform: this.animScale(.3, 1),
      opacity: "0",
      visibility: "visible"
    }, {
      transform: this.animScale(.3, 1),
      opacity: "0",
      visibility: "hidden"
    }];
    c.GameManager.gallery = this;
  };
  c.OrnamentGallery.prototype.init = function () {
    var b = this.handleSelectItem.bind(this),
      a = this.onTouchstart.bind(this),
      d = this.onTouchend.bind(this),
      g = this.onMouseover.bind(this);
    this.items.each(function () {
      $(this).on({
        click: b,
        touchstart: a,
        touchend: d,
        mouseover: g
      });
    });
    this.items.on({
      mousemove: this.onMousemove.bind(this),
      mouseout: this.onMouseout.bind(this)
    });
  };
  c.OrnamentGallery.prototype.onTouchstart = function (b) {
    var a = b.originalEvent.changedTouches[0];
    this.touchStart.x = a.pageX;
    this.touchStart.y = a.pageY;
    this.currentOrnament = $(b.target).closest(".ornament-item-container");
    this.showHoverImage();
  };
  c.OrnamentGallery.prototype.onTouchend = function (b) {
    var a = b.originalEvent.changedTouches[0];
    this.touchStart.x == a.pageX && this.touchStart.y == a.pageY && this.handleSelectItem(b);
    this.hideHoverImage();
  };
  c.OrnamentGallery.prototype.onMouseover = function (b) {
    this.scrollOffset = this.context.find(".scene").scrollTop();
    this.currentOrnament = $(b.target).closest(".ornament-item-container");
    this.showHoverImage();
  };
  c.OrnamentGallery.prototype.onMousemove = function (b) {
    this.mousePosition.x = b.pageX;
    this.mousePosition.y = b.pageY;
    this.moveCrayon();
  };
  c.OrnamentGallery.prototype.onMouseout = function () {
    this.hideCrayon();
    this.hideHoverImage();
  };
  c.OrnamentGallery.prototype.handleSelectItem = function (b) {
    if (this.isVisible && (b = $(b.currentTarget).data("org"))) {
      var a = this.context.find(".scene-ornament-wrapper").find('.scene-ornament[data-org="' + b + '"]').parent();
      this.buttonInfo.addClass("active");
      this.hide();
      c.GameManager.lastOrnamentObj && c.GameManager.lastOrnamentObj.hide();
      c.GameManager.lastOrnament = a;
      c.GameManager.currentIndex = a.index() - 2;
      c.GameManager.ornaments[c.GameManager.currentIndex].show(500);
      c.GameManager.lastOrnamentObj = c.GameManager.ornaments[c.GameManager.currentIndex];
      c.GameManager.currentCanvas = this.context.find("#canvas--" + b)[0];
      window.santaApp.fire("sound-trigger", "spirit_click");
    }
  };
  c.OrnamentGallery.prototype.hide = function () {
    this.isVisible && (this.scrollOffset = this.context.find(".scene").scrollTop(), this.transitionOut(), this.context.find(".nav-ornament").addClass("nav-ornament--active"), this.context.find(".scene-intro, .scene-gallery, .scene-footer").hide(), this.context.find(".Tool-panel").show());
    this.isVisible = !1;
    this.el.removeClass("active");
  };
  c.OrnamentGallery.prototype.show = function () {
    this.isVisible || (this.context.find(".Tool-panel").hide(), this.context.find(".scene-intro, .scene-gallery, .scene-footer").show(), this.transitionIn(), this.context.find(".nav-ornament").removeClass("nav-ornament--active"), this.context.find(".scene").scrollTop(this.scrollOffset));
    this.isVisible = !0;
    this.el.addClass("active");
  };
  c.OrnamentGallery.prototype.transitionIn = function () {
    for (var b = [], a = 0; a < this.items.length; a++) b.push(new KeyframeEffect(this.items[a], this.bounceIn, {
      fill: "backwards",
      delay: 65 * a,
      duration: 600,
      ease: "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
    }));
    document.timeline.play(new GroupEffect(b));
  };
  c.OrnamentGallery.prototype.transitionOut = function () {
    for (var b = [], a = this.items.length - 1; 0 <= a; a--) b.push(new KeyframeEffect(this.items[a], this.bounceOut, {
      fill: "backwards",
      delay: 40 * a,
      duration: 450,
      ease: "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
    }));
    document.timeline.play(new GroupEffect(b));
  };
  c.OrnamentGallery.prototype.animScale = function (b, a) {
    return "scale3d(" + b * a + "," + b * a + "," + b * a + ")";
  };
  c.OrnamentGallery.prototype.showHoverImage = function () {
    this.currentOrnament.addClass("ornament-item-container--active");
  };
  c.OrnamentGallery.prototype.hideHoverImage = function () {
    this.currentOrnament.removeClass("ornament-item-container--active");
  };
  c.OrnamentGallery.prototype.moveCrayon = function () {
    this.crayon.css({
      left: this.mousePosition.x - this.crayonOffset.x,
      top: this.mousePosition.y - this.crayonHeight - this.crayonOffset.y + this.scrollOffset
    });
    this.crayon.addClass("ornament-gallery-crayon--active");
  };
  c.OrnamentGallery.prototype.hideCrayon = function () {
    this.crayon.removeClass("ornament-gallery-crayon--active");
  };
  c.OrnamentNavigation = function (b) {
    this.elem = $(b);
    this.ornamentNavigation = $(".nav-ornament", this.elem);
    this.ornamentCopyContainer = $(".ornament-copy-container", this.elem);
    this.ornamentCopy = $(".ornament-copy", this.elem);
    this.mobileCopyContainer = $(".copy-container", this.elem);
    this.buttonNext = $(".Button-next-ornament", this.elem);
    this.buttonPrev = $(".Button-prev-ornament", this.elem);
    this.buttonShowAll = $(".Button-show-all", this.elem);
    this.buttonInfo = $(".Button-info", this.elem);
    this.buttonClose = $(".Button-close", this.elem);
    this.ornament = this.ornamentCopy.closest(".ornament", this.elem[0]);
    this.totalOrnaments = c.GameManager.ornaments.length;
    this.lastOrnamentNum = 0;
    this.lastOrnament = null;
    this.init();
    c.GameManager.navigation = this;
  };
  c.OrnamentNavigation.prototype.init = function () {
    this.addEventListeners();
    this.handleResize();
  };
  c.OrnamentNavigation.prototype.addEventListeners = function () {
    this.buttonNext.on("touchstart mousedown", this.handleNext.bind(this));
    this.buttonPrev.on("touchstart mousedown", this.handlePrev.bind(this));
    this.buttonShowAll.on("touchstart mousedown", this.handleShowGallery.bind(this));
    this.buttonInfo.on("touchstart mousedown", this.handleShowInfo.bind(this));
    this.buttonClose.on("touchstart mousedown", this.handleHideInfo.bind(this));
    $(window).on("resize.seasonofgiving", this.handleResize.bind(this));
  };
  c.OrnamentNavigation.prototype.handleNext = function () {
    c.GameManager.bounce(this.buttonNext[0]);
    c.GameManager.currentIndex += 1;
    c.GameManager.currentIndex > c.GameManager.ornaments.length - 1 && (c.GameManager.currentIndex = 0);
    var b = c.GameManager.currentIndex,
      a = this.elem.find(".scene-ornament-wrapper").eq(b);
    a.toggleClass("active");
    c.GameManager.lastOrnament && (c.GameManager.lastOrnament.removeClass("active"), c.GameManager.lastOrnamentObj.hide());
    this.elem.find(".Button-info").addClass("active");
    c.GameManager.lastOrnament = this.elem.find(a);
    c.GameManager.ornaments[b].show();
    c.GameManager.lastOrnamentObj = c.GameManager.ornaments[b];
    c.GameManager.gallery.hide();
    window.santaApp.fire("sound-trigger", "spirit_click");
  };
  c.OrnamentNavigation.prototype.handlePrev = function () {
    c.GameManager.bounce(this.buttonPrev[0]);
    --c.GameManager.currentIndex;
    0 > c.GameManager.currentIndex && (c.GameManager.currentIndex = this.totalOrnaments - 1);
    var b = c.GameManager.currentIndex,
      a = this.elem.find(".scene-ornament-wrapper").eq(b);
    a.toggleClass("active");
    c.GameManager.lastOrnament && (c.GameManager.lastOrnament.removeClass("active"), c.GameManager.lastOrnamentObj.hide());
    this.elem.find(".Button-info").addClass("active");
    c.GameManager.lastOrnamentObj = c.GameManager.ornaments[b];
    c.GameManager.lastOrnament = this.elem.find(a);
    c.GameManager.lastOrnamentObj.show();
    c.GameManager.gallery.hide();
    window.santaApp.fire("sound-trigger", "spirit_click");
  };
  c.OrnamentNavigation.prototype.handleShowGallery = function () {
    c.GameManager.bounce(this.buttonShowAll[0]);
    c.GameManager.lastOrnament && (c.GameManager.lastOrnament.removeClass("active"), this.elem.find(".Button-info").removeClass("active"), c.GameManager.lastOrnamentObj.hide());
    c.GameManager.lastOrnament.removeClass("active");
    c.GameManager.lastOrnament = null;
    c.GameManager.gallery.show();
    window.santaApp.fire("sound-trigger", "spirit_click");
  };
  c.OrnamentNavigation.prototype.handleResize = function () {
    var b = window.innerHeight - window.santaApp.headerSize;
    if (1024 >= window.innerWidth || 600 >= window.innerHeight) {
      var a = this.elem.find(".Tool-crayon--violet")[0];
      var d = a.getBoundingClientRect().top - 84 - window.santaApp.headerSize;
      a = {
        top: d,
        transform: "scale(0.7)"
      };
      this.ornamentCopyContainer.css("height", b);
      this.buttonInfo.css("top", d - 5);
      this.ornamentNavigation.css(a);
    } else b = c.GameManager.currentIndex, this.elem.find(".scene-ornament-wrapper").eq(b), b = 0 < this.elem.find(".scene-ornament-wrapper.active .ornament-copy").length ? this.elem.find(".scene-ornament-wrapper.active .ornament-copy") : this.elem.find(".scene-ornament-wrapper .ornament-copy"), b[0].getBoundingClientRect(), b[0].getBoundingClientRect(), this.ornamentCopyContainer.css("height", "auto"), this.buttonInfo.css("top", "auto"), this.ornamentNavigation.css("top", "auto");
    this.handleHideInfo();
  };
  c.OrnamentNavigation.prototype.handleShowInfo = function () {
    this.elem.find(".scene-container").css("z-index", 4);
    this.elem.find(".Tool-panel").css("z-index", 2);
    c.GameManager.lastOrnament.find(".ornament-copy-container").addClass("show");
    c.GameManager.bounce(this.buttonInfo[0]);
  };
  c.OrnamentNavigation.prototype.handleHideInfo = function () {
    this.ornamentCopyContainer.hasClass("show") && (c.GameManager.bounce(this.buttonClose[0]), this.elem.find(".scene-container").css("z-index", 0), this.elem.find(".Tool-panel").css("z-index", 4), this.ornamentCopyContainer.removeClass("show"));
  };
  c.CustomSlider = function (b) {
    b = $(b);
    this.sizeSliderThumb = b.find("#Slider-thumb--scale")[0];
    this.crazyonSizeWrapper = b.find(".crayon-size-wrapper");
    this.strokeSize = 0;
    this.currentValue = -1;
    this.minValue = 1;
    this.maxValue = 4;
    this.mobileSizeContainer = b.find(".crayon-size-container");
    this.mobileSizeContainer.children().each((a, b) => {
      const d = +b.dataset.size;
      $(b).on("touchstart mousedown", () => {
        this.updateValueTo(d);
        this.toggleMobile();
      });
    });
    this.mobileSizeTool = b.find(".crayon-size-indicator-container");
    this.mobileSizeTool.on("touchstart mousedown", this.toggleMobile.bind(this));
    const a = b.find("#Slider");
    a.on("touchmove mousemove touchdown mousedown", function (b) {
      if (b.originalEvent.touches && 0 < b.originalEvent.touches.length || b.which) {
        var d = a[0].getBoundingClientRect();
        b = b.pageX - d.left;
        d = a.width();
        this.updateValueTo(Math.round(.5 + b / d * 4));
      }
    }.bind(this));
    this.updateValueTo(4);
  };
  c.CustomSlider.prototype.toggleMobile = function (b) {
    this.mobileSizeContainer.toggleClass("open", b);
  };
  c.CustomSlider.prototype.updateValueTo = function (b) {
    const a = this.maxValue,
      d = this.minValue;
    b = Math.max(d, Math.min(a, b));
    this.currentValue != b && (this.currentValue = b, window.santaApp.fire("sound-trigger", "spirit_sizeselect"), this.sizeSliderThumb.style.transform = "translate(" + (b - 1) / 3 * 159 + "px) scale(" + (b / a + (a - b) * b / d * .04) + ")", c.GameManager.tool && c.GameManager.tool.bounceTo(.2 * b + .2), this.strokeSize = 10 * b, this.crazyonSizeWrapper.find(".active").removeClass("active"), this.crazyonSizeWrapper.find('[data-size="' + b + '"]').addClass("active"), this.crazyonSizeWrapper.find('[data-size="' + b + '"] > div').addClass("active"));
  };
  c.ToolWrapper = function (b) {
    this.el = b;
  };
  c.Tool = function (b, a, d) {
    this.game = b;
    this.el = this.elem.find(".Tool-" + a);
    this.container = this.el.closest(".Tool-container");
    this.isSelected = !1;
    this.color = this.el.data("color");
    this.height = this.el.height();
    this.width = this.el.width();
    this.mouseOffset = d || {
      x: 0,
      y: 0
    };
  };
  c.Tool.prototype.select = function () {
    var b = .1 * c.GameManager.sizeSlider.strokeSize * .2 + .2;
    this.isSelected = !0;
    this.el.addClass("Tool--selected");
    this.width = this.el.width();
    this.elem.find(".canvas").addClass("canvas--active");
    this.bounceTo(b);
    this.move(this.game.mouse);
    window.santaApp.fire("sound-trigger", "spirit_click");
  };
  c.Tool.prototype.bounceTo = function (b) {
    function a(a, b) {
      return "scale3d(" + a * b + "," + a * b + "," + a * b + ")";
    }
    const d = a(1, b);
    b = [{
      transform: a(.3, b)
    }, {
      transform: a(1.2, b)
    }, {
      transform: a(.9, b)
    }, {
      transform: a(1.03, b)
    }, {
      transform: a(.97, b)
    }, {
      transform: d
    }];
    const g = this.el[0];
    g.animate(b, {
      duration: 500,
      easing: "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
    }).onfinish = function () {
      g.style.transform = d;
    };
  };
  c.Tool.prototype.deselect = function () {
    this.isSelected = !1;
    this.bounceTo(1);
    this.el.removeClass("Tool--selected");
    this.el.css({
      top: "",
      left: "",
      transform: ""
    });
    this.elem.find(".canvas").removeClass("canvas--active");
    c.GameManager.tool = null;
  };
  c.Tool.prototype.move = function (b) {
    var a = this.mouseOffset;
    this.el.css({
      left: b.x - a.x,
      top: b.y - this.height - a.y
    });
  };
  c.Tool.prototype.resize = function () {
    this.el.css({
      height: $(window).width() / 7,
      width: $(window).width() / 7
    });
  };
  c.Tools = function (b, a, d) {
    c.Tool.prototype.elem = a;
    this.game = b;
    b = {
      x: 5,
      y: 100
    };
    this.context = $(a);
    this.elem = this.context.find(".Tools");
    this.crayonRed = new c.Tool(this.game, "crayon--red", b);
    this.crayonOrange = new c.Tool(this.game, "crayon--orange", b);
    this.crayonYellow = new c.Tool(this.game, "crayon--yellow", b);
    this.crayonLightGreen = new c.Tool(this.game, "crayon--light-green", b);
    this.crayonGreen = new c.Tool(this.game, "crayon--green", b);
    this.crayonLightBlue = new c.Tool(this.game, "crayon--light-blue", b);
    this.crayonBlue = new c.Tool(this.game, "crayon--blue", b);
    this.crayonViolet = new c.Tool(this.game, "crayon--violet", b);
    this.crayonPurple = new c.Tool(this.game, "crayon--purple", b);
    this.crayonRainbow = new c.Tool(this.game, "crayon--rainbow", b);
    this.crayonBrown = new c.Tool(this.game, "crayon--brown", b);
    this.eraser = new c.Tool(this.game, "crayon--eraser", {
      x: 20,
      y: 80
    });
    this.sizeSlider = new c.CustomSlider(this.context);
    c.GameManager.sizeSlider = this.sizeSlider;
    this.exporter = d;
    this.print = this.context.find(".Button-print");
    this.print.on("click", this.onClickPrint.bind(this));
    this.download = this.context.find(".Button-download");
    this.download.on("click", this.onClickDownload.bind(this));
    this.clearOrnament = this.context.find(".Button-reset");
    this.clearOrnament.on("touchstart mousedown", this.onClickReset.bind(this));
    this.downloadMobile = this.context.find(".Button-download--mobile");
    this.downloadMobile.parent().on("touchstart mousedown", this.onClickDownload.bind(this));
    this.resetMobile = this.context.find(".Button-reset--mobile");
    this.resetMobile.parent().on("touchstart mousedown", this.onClickReset.bind(this));
    this.toolWrapper = new c.ToolWrapper(this.context.find(".Tool-wrapper"));
    c.GameManager.toolWrapper = this.toolWrapper;
    this.buttons = this.context.find(".Buttons");
    this.tools = [this.crayonRed, this.crayonOrange, this.crayonYellow, this.crayonLightGreen, this.crayonGreen, this.crayonLightBlue, this.crayonBlue, this.crayonViolet, this.crayonPurple, this.crayonBrown, this.crayonRainbow, this.eraser];
    $(window).on("resize.seasonofgiving", this.handleResize.bind(this));
    this.handleResize();
  };
  c.Tools.prototype.handleResize = function () {
    $(window).height();
    this.elem.height();
    if (1024 < $(window).width() && 600 < $(window).height()) this.elem.find(".Tool-container").css({
      height: "70px",
      width: "33.3%"
    });else {
      var b = 550 < $(window).width() ? 14 : 7;
      b = $(window).width() / b - 10;
      this.elem.find(".Tool-container").css({
        height: b,
        width: b
      });
    }
    this.buttons.css({
      left: this.toolWrapper.el[0].offsetLeft,
      top: this.toolWrapper.el.height() + 10
    });
  };
  c.Tools.prototype.start = function () {
    this.game.mouse.subscribe(this.mouseChanged, this);
    this.elem.on("click touchend", this.selectTool.bind(this));
  };
  c.Tools.prototype.mouseChanged = function (b) {
    this.selectedTool && this.selectedTool.move(b);
  };
  c.Tools.prototype.selectTool = function (b) {
    var a = this.selectedTool;
    0 < $(b.target).closest(".crayon-size-wrapper").length || (this.selectedTool = this.tools.filter(function (a) {
      if (a.container[0] === b.target && !a.isSelected) return a;
    })[0], a && a.deselect(), this.selectedTool && (c.GameManager.tool = this.selectedTool, this.selectedTool.select(), c.GameManager.color = this.selectedTool.color));
  };
  c.Tools.prototype.onClickReset = function () {
    c.GameManager.lastOrnamentObj && c.GameManager.lastOrnamentObj.reset();
  };
  c.Tools.prototype.onClickPrint = function () {
    c.GameManager.lastOrnamentObj && this.exporter.print(c.GameManager.lastOrnamentObj);
  };
  c.Tools.prototype.onClickDownload = function () {
    c.GameManager.lastOrnamentObj && this.exporter.download(c.GameManager.lastOrnamentObj);
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
      animWithClass: function (a, b, g) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(b);
          const d = () => {
            a.classList.remove(b);
            a.removeEventListener("animationend", d);
            a.removeEventListener("transitionend", d);
            g && (g(), g = null);
          };
          a.addEventListener("animationend", d);
          a.addEventListener("transitionend", d);
        });
      },
      unwrapElement: function (a) {
        return a instanceof Node ? a : a[0] || null;
      },
      computedTransform: function (a) {
        const b = window.getComputedStyle(a);
        let g;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = b.getPropertyValue(a + "transform");
          if (!a) return !1;
          g = a;
          return !0;
        });
        if ("none" === g) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let f;
        try {
          f = g.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (e) {
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
  c.Game = function (b, a) {
    this.elem = $(b);
    this.gameStartTime = +new Date();
    this.sceneElem = this.elem.find(".scene");
    c.GameManager.ios = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
    c.GameManager.ie = -1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/");
    (c.GameManager.ios || c.GameManager.ie) && $('img[src*="svg"]', this.elem).attr("src", function () {
      return $(this).attr("src").replace(".svg", ".png");
    });
    this.exporter = new c.OrnamentExporter(this, a);
    this.mouse = new c.Mouse(this.elem);
    this.tools = new c.Tools(this, this.elem, this.exporter);
    this.ornaments = [];
    var d,
      g = this;
    this.elem.find('.canvas[id^="canvas--"]').each(function () {
      d = new c.Ornament("#" + $(this).attr("id"), g.elem);
      g.ornaments.push(d);
    });
    c.GameManager.ornaments = this.ornaments;
    this.ornamentGallery = new c.OrnamentGallery(this.elem.find(".scene-gallery"), this.elem);
    this.ornamentNavigation = new c.OrnamentNavigation(this.elem);
    this.onFrame_ = this.onFrame_.bind(this);
  };
  c.Game.prototype.start = function () {
    this.tools.start();
    this.restart();
    $(window).on("resize.seasonofgiving", this.handleResize.bind(this));
    this.ornamentGallery.init();
    for (var b = 0; b < this.ornaments.length; b++) this.ornaments[b].init();
    this.handleResize();
    this.ornamentGallery.show();
  };
  c.Game.prototype.handleResize = function () {
    var b = window.innerWidth,
      a = window.innerHeight - window.santaApp.headerSize;
    this.elem.find(".scene-ornament").css({
      width: b,
      height: 1024 >= b || 600 >= a ? a : "auto"
    });
  };
  c.Game.prototype.restart = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  c.Game.prototype.update = function () {
    this.isPlaying && this.mouse.update();
  };
  c.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  c.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen"), this.isPlaying = !0, this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  c.Game.prototype.onFrame_ = function () {
    this.isPlaying && (this.update(), this.requestId = window.requestAnimationFrame(this.onFrame_));
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
    this.isPlaying && (window.santaApp.fire("analytics-track-game-quit", {
      gameid: "seasonofgiving",
      timePlayed: new Date() - this.gameStartTime,
      level: 1
    }), window.santaApp.fire("sound-trigger", "spirit_end"));
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".seasonofgiving");
    $(document).off(".seasonofgiving");
    c.GameManager.dispose();
  };
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('spirit_load_sounds');
sceneApi.preload.images('img/color-guide--khan-academy.svg', 'img/color-guide--libraries-without-borders.svg', 'img/color-guide--code.svg', 'img/color-guide--donors-choose.svg', 'img/color-guide--pratham-books.svg', 'img/footer-elf.svg', 'img/header-icon.svg', 'img/icons/code.svg', 'img/icons/donors-choose.svg', 'img/icons/download.svg', 'img/icons/info.svg', 'img/icons/khan-academy.svg', 'img/icons/libraries-without-borders.svg', 'img/icons/pratham-books.svg', 'img/icons/prev.svg', 'img/icons/print.svg', 'img/icons/reset.svg', 'img/icons/show-all.svg', 'img/intro-elf-left.svg', 'img/intro-elf-right.svg', 'img/intro-ornament.svg', 'img/intro-title-text.svg', 'img/ornament-hook.svg', 'img/ornament/donors-choose-hover.svg', 'img/ornament/code-hover.svg', 'img/ornament/khan-academy-hover.svg', 'img/ornament/libraries-without-borders-hover.svg', 'img/ornament/pratham-books-hover.svg', 'img/panel-arrow.svg', 'img/panel-ornament.svg', 'img/season-of-giving-bg.svg', 'img/tools/crayon-blue.svg', 'img/tools/crayon-brown.svg', 'img/tools/crayon-green.svg', 'img/tools/crayon-light-blue.svg', 'img/tools/crayon-light-green.svg', 'img/tools/crayon-orange.svg', 'img/tools/crayon-purple.svg', 'img/tools/crayon-rainbow.svg', 'img/tools/crayon-red.svg', 'img/tools/crayon-violet.svg', 'img/tools/crayon-yellow.svg', 'img/tools/eraser.svg', 'img/tools/shadow-crayon.svg', 'img/tools/slider-size-bg.svg');
sceneApi.config({
  sound: ['spirit_start', 'music_start_scene'],
  orientation: 'portrait'
});
const game = new Game(document.getElementById('module-seasonofgiving'), './');
sceneApi.ready(async () => {
  game.start();
});