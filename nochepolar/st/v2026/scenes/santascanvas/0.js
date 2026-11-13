import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var a = {
    Constants: {
      MOBILE_BREAKPOINT: 768,
      CANVAS_WIDTH_LANDSCAPE: 1600,
      CANVAS_HEIGHT_LANDSCAPE: 900,
      CANVAS_WIDTH_PORTRAIT: 900,
      CANVAS_HEIGHT_PORTRAIT: 1200,
      NUM_BACKUPS: 32,
      CLEAR_ANIMATION_SECONDS: 2,
      COLORPICKER_DEFAULT: "e51c23",
      ROTATE_ANGLE: 45,
      PEN_MIN: 5,
      PEN_MAX: 125,
      PENCIL_MIN: 5,
      PENCIL_MAX: 10,
      ERASER_MIN: 10,
      ERASER_MAX: 100,
      SHAPE_MIN: .5,
      SHAPE_MAX: 9,
      STAMP_MIN: .5,
      STAMP_MAX: 5,
      STICKER_MIN: .25,
      STICKER_MAX: 1.5,
      SPRAY_CIRCLE_SIZE: 50,
      SPRAY_MIN: 100,
      SPRAY_MAX: 300,
      SPRAY_SNOW_OFFSET: 50,
      SPRAY_SNOW_DENSITY: 5,
      SPRAY_SNOW_MAX_SIZE: 5,
      SPRAY_SNOW_MIN_OPACITY: .8,
      TINSEL_MIN: .1,
      TINSEL_MAX: .4,
      FROSTING_MIN: .05,
      FROSTING_MAX: .2,
      NEON_MIN: 5,
      NEON_MAX: 15,
      PAINT_ROLLER_MIN: 25,
      PAINT_ROLLER_MAX: 150,
      CLEAR_ANIMATION_TOTAL_FRAMES: 53,
      SNOW_MAX_X: .02,
      SNOW_MAX_Y: .05,
      SNOW_MAX_SIZE: 10,
      SNOW_MAX_PARTICLES: 60,
      SNOW_MIN_DISTANCE: .2,
      SPRINKLE_SPRAY_CONFIG: {
        images: [{
          elemId: "sprinkle2"
        }, {
          elemId: "sprinkle3"
        }, {
          elemId: "sprinkle4"
        }, {
          elemId: "sprinkle5"
        }]
      },
      CANDY_SPRAY_CONFIG: {
        density: .75,
        maxOffset: 100,
        images: [{
          name: "image-candy-jellybean",
          color: "#ff0619"
        }, {
          name: "image-candy-jellybean",
          color: "#af0000"
        }, {
          name: "image-candy-jellybean",
          color: "#259b24"
        }, {
          name: "image-candy-jellybean",
          color: "#22af22"
        }, {
          name: "image-candy-jellybean",
          color: "#00750b"
        }, {
          name: "image-candy-sprinkle-round",
          noRotate: !0,
          color: "#ff0619",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-round",
          noRotate: !0,
          color: "#af0000",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-round",
          noRotate: !0,
          color: "#259b24",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-round",
          noRotate: !0,
          color: "#22af22",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-round",
          noRotate: !0,
          color: "#00750b",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-round",
          noRotate: !0,
          color: "#f2faff",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle",
          color: "#ff0619",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle",
          color: "#af0000",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle",
          color: "#259b24",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle",
          color: "#22af22",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle",
          color: "#00750b",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle",
          color: "#f2faff",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-tree",
          color: "#ff0619",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-tree",
          color: "#af0000",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-tree",
          color: "#259b24",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-tree",
          color: "#00750b",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-leaf",
          color: "#259b24",
          frequencyFactor: 3
        }, {
          name: "image-candy-sprinkle-leaf",
          color: "#00750b",
          frequencyFactor: 3
        }, {
          name: "image-candy-sucker",
          color: "#e51c23"
        }, {
          name: "image-candy-sucker",
          color: "#259b24"
        }, {
          name: "image-candy-wrapper1",
          color: "#e51c23"
        }, {
          name: "image-candy-wrapper1",
          color: "#259b24"
        }, {
          name: "image-candy-wrapper2",
          color: "#e51c23"
        }, {
          name: "image-candy-wrapper2",
          color: "#259b24"
        }, {
          name: "image-candy-mint-swirl",
          color: "#ff0619"
        }, {
          name: "image-candy-mint-swirl",
          color: "#af0000"
        }, {
          name: "image-candy-mint-swirl",
          color: "#259b24"
        }, {
          name: "image-candy-mint-swirl",
          color: "#22af22"
        }, {
          name: "image-candy-mint-swirl",
          color: "#00750b"
        }, {
          name: "image-candy-mint-wheel",
          color: "#ff0619"
        }, {
          name: "image-candy-mint-wheel",
          color: "#af0000"
        }, {
          name: "image-candy-mint-wheel",
          color: "#259b24"
        }, {
          name: "image-candy-mint-wheel",
          color: "#22af22"
        }, {
          name: "image-candy-mint-wheel",
          color: "#00750b"
        }, {
          name: "image-candy-gumdrop",
          color: "#ff0619"
        }, {
          name: "image-candy-gumdrop",
          color: "#af0000"
        }, {
          name: "image-candy-gumdrop",
          color: "#259b24"
        }, {
          name: "image-candy-gumdrop",
          color: "#22af22"
        }, {
          name: "image-candy-gumdrop",
          color: "#00750b"
        }, {
          elemId: "candycane_green"
        }, {
          elemId: "candycane_greens"
        }, {
          elemId: "candycane_holiday"
        }, {
          elemId: "candycane_red"
        }, {
          elemId: "candycane_reds"
        }, {
          elemId: "candycane_tropical"
        }, {
          elemId: "candycane_holiday"
        }, {
          elemId: "chocolate_gumdrop"
        }, {
          elemId: "chocolate_nuts"
        }, {
          elemId: "chocolate_pretzel"
        }, {
          elemId: "chocolate_squiggle"
        }, {
          elemId: "chocolate_stripes"
        }, {
          elemId: "chocolate_swirl"
        }, {
          elemId: "cookie_choc_chip"
        }, {
          elemId: "cookie_kiss"
        }, {
          elemId: "jellybean_green_dots"
        }, {
          elemId: "jellybean_red_dots"
        }, {
          elemId: "sprinkle_snow"
        }]
      },
      CONFETTI_SPRAY_CONFIG: {
        maxOffset: 50,
        images: [{
          name: "image-confetti-curve",
          color: "#e51c23"
        }, {
          name: "image-confetti-curve",
          color: "#259b24"
        }, {
          name: "image-confetti-curve",
          color: "#9c27b0"
        }, {
          name: "image-confetti-curve",
          color: "#ffeb3b"
        }, {
          name: "image-confetti-curve",
          color: "#ffc107"
        }, {
          name: "image-confetti-curve",
          color: "#e91e63"
        }, {
          name: "image-confetti-curve",
          color: "#5677fc"
        }, {
          name: "image-confetti-triangle",
          color: "#e51c23"
        }, {
          name: "image-confetti-triangle",
          color: "#259b24"
        }, {
          name: "image-confetti-triangle",
          color: "#9c27b0"
        }, {
          name: "image-confetti-triangle",
          color: "#ffeb3b"
        }, {
          name: "image-confetti-triangle",
          color: "#ffc107"
        }, {
          name: "image-confetti-triangle",
          color: "#e91e63"
        }, {
          name: "image-confetti-triangle",
          color: "#5677fc"
        }, {
          name: "image-confetti-circle",
          color: "#e51c23"
        }, {
          name: "image-confetti-circle",
          color: "#259b24"
        }, {
          name: "image-confetti-circle",
          color: "#9c27b0"
        }, {
          name: "image-confetti-circle",
          color: "#ffeb3b"
        }, {
          name: "image-confetti-circle",
          color: "#ffc107"
        }, {
          name: "image-confetti-circle",
          color: "#e91e63"
        }, {
          name: "image-confetti-circle",
          color: "#5677fc"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#e51c23"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#259b24"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#9c27b0"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#ffeb3b"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#ffc107"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#e91e63"
        }, {
          name: "image-confetti-outlined-circle",
          color: "#5677fc"
        }, {
          name: "image-confetti-squiggle",
          color: "#e51c23"
        }, {
          name: "image-confetti-squiggle",
          color: "#259b24"
        }, {
          name: "image-confetti-squiggle",
          color: "#9c27b0"
        }, {
          name: "image-confetti-squiggle",
          color: "#ffeb3b"
        }, {
          name: "image-confetti-squiggle",
          color: "#ffc107"
        }, {
          name: "image-confetti-squiggle",
          color: "#e91e63"
        }, {
          name: "image-confetti-squiggle",
          color: "#5677fc"
        }]
      },
      HOLIDAY_SPRAY_CONFIG: {
        maxOffset: 150,
        density: .5,
        images: [{
          name: "image-string-light",
          color: "#259b24"
        }, {
          name: "image-string-light",
          color: "#e51c23"
        }, {
          name: "image-string-light",
          color: "#5677fc"
        }, {
          name: "image-string-light",
          color: "#ffeb3b"
        }, {
          elemId: "candle"
        }, {
          elemId: "candycane_red"
        }, {
          elemId: "cookie_man"
        }, {
          elemId: "cookie_snowman"
        }, {
          elemId: "cookie_stocking"
        }, {
          elemId: "cookie_tree"
        }, {
          elemId: "firewood"
        }, {
          elemId: "holiday_bells"
        }, {
          elemId: "holiday_hat"
        }, {
          elemId: "holiday_mitten"
        }, {
          elemId: "holly"
        }, {
          elemId: "mug_green"
        }, {
          elemId: "mug_red"
        }, {
          elemId: "red_bow"
        }, {
          elemId: "snowglobe_snowman"
        }, {
          elemId: "snowglobe_tree"
        }, {
          elemId: "stocking_green"
        }, {
          elemId: "stocking_pink"
        }, {
          elemId: "stocking_red"
        }, {
          elemId: "stocking_yellow"
        }]
      },
      OCEAN_SPRAY_CONFIG: {
        maxOffset: 150,
        images: [{
          elemId: "box_fish"
        }, {
          elemId: "coral_large"
        }, {
          elemId: "coral_medium"
        }, {
          elemId: "coral_small"
        }, {
          elemId: "fish_little"
        }, {
          elemId: "fish_pink"
        }, {
          elemId: "fish_teal"
        }, {
          elemId: "fish_yellow"
        }, {
          elemId: "jellyfish"
        }, {
          elemId: "light_fish"
        }, {
          elemId: "ocean_bubble",
          frequencyFactor: 6
        }, {
          elemId: "ocean_bubble",
          sizeFactor: 1.75,
          frequencyFactor: 6
        }, {
          elemId: "ocean_bubble",
          sizeFactor: 2.5,
          frequencyFactor: 6
        }, {
          elemId: "seashell"
        }, {
          elemId: "seaweed_green"
        }, {
          elemId: "seaweed_lime"
        }, {
          elemId: "starfish"
        }, {
          elemId: "turtle"
        }]
      },
      ORNAMENT_SPRAY_CONFIG: {
        maxOffset: 75,
        density: .5,
        noRotate: !0,
        images: [{
          name: "image-ornament-round1",
          color: "#e51c23"
        }, {
          name: "image-ornament-round1",
          color: "#ff9800"
        }, {
          name: "image-ornament-round1",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-round1",
          color: "#259b24"
        }, {
          name: "image-ornament-round1",
          color: "#5677fc"
        }, {
          name: "image-ornament-round1",
          color: "#9c27b0"
        }, {
          name: "image-ornament-round2",
          color: "#e51c23"
        }, {
          name: "image-ornament-round2",
          color: "#ff9800"
        }, {
          name: "image-ornament-round2",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-round2",
          color: "#259b24"
        }, {
          name: "image-ornament-round2",
          color: "#5677fc"
        }, {
          name: "image-ornament-round2",
          color: "#9c27b0"
        }, {
          name: "image-ornament-round3",
          color: "#e51c23"
        }, {
          name: "image-ornament-round3",
          color: "#ff9800"
        }, {
          name: "image-ornament-round3",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-round3",
          color: "#259b24"
        }, {
          name: "image-ornament-round3",
          color: "#5677fc"
        }, {
          name: "image-ornament-round3",
          color: "#9c27b0"
        }, {
          name: "image-ornament-skinny1",
          color: "#e51c23"
        }, {
          name: "image-ornament-skinny1",
          color: "#ff9800"
        }, {
          name: "image-ornament-skinny1",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-skinny1",
          color: "#259b24"
        }, {
          name: "image-ornament-skinny1",
          color: "#5677fc"
        }, {
          name: "image-ornament-skinny1",
          color: "#9c27b0"
        }, {
          name: "image-ornament-skinny2",
          color: "#e51c23"
        }, {
          name: "image-ornament-skinny2",
          color: "#ff9800"
        }, {
          name: "image-ornament-skinny2",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-skinny2",
          color: "#259b24"
        }, {
          name: "image-ornament-skinny2",
          color: "#5677fc"
        }, {
          name: "image-ornament-skinny2",
          color: "#9c27b0"
        }, {
          name: "image-ornament-wide1",
          color: "#e51c23"
        }, {
          name: "image-ornament-wide1",
          color: "#ff9800"
        }, {
          name: "image-ornament-wide1",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-wide1",
          color: "#259b24"
        }, {
          name: "image-ornament-wide1",
          color: "#5677fc"
        }, {
          name: "image-ornament-wide1",
          color: "#9c27b0"
        }, {
          name: "image-ornament-wide2",
          color: "#e51c23"
        }, {
          name: "image-ornament-wide2",
          color: "#ff9800"
        }, {
          name: "image-ornament-wide2",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-wide2",
          color: "#259b24"
        }, {
          name: "image-ornament-wide2",
          color: "#5677fc"
        }, {
          name: "image-ornament-wide2",
          color: "#9c27b0"
        }, {
          name: "image-ornament-wide3",
          color: "#e51c23"
        }, {
          name: "image-ornament-wide3",
          color: "#ff9800"
        }, {
          name: "image-ornament-wide3",
          color: "#ffeb3b"
        }, {
          name: "image-ornament-wide3",
          color: "#259b24"
        }, {
          name: "image-ornament-wide3",
          color: "#5677fc"
        }, {
          name: "image-ornament-wide3",
          color: "#9c27b0"
        }]
      },
      SNOWFLAKE_SPRAY_CONFIG: {
        maxOffset: 150,
        opacity: .5,
        density: .5,
        images: [{
          elemId: "snowflake_1"
        }, {
          elemId: "snowflake_2"
        }, {
          elemId: "snowflake_3"
        }, {
          elemId: "snowflake_4"
        }, {
          elemId: "snowflake_5"
        }, {
          elemId: "snowflake_6"
        }, {
          elemId: "snowflake_7"
        }, {
          elemId: "snowflake_8"
        }, {
          elemId: "snowflake_9"
        }, {
          elemId: "snowflake_10"
        }, {
          elemId: "snowflake_11"
        }]
      },
      SVG_COLOR_MATRIX: {
        "#8bc34a": {
          primary: "#8bc34a",
          highlight: "#93d839",
          medium: "#65af35",
          dark: "#1d9904",
          complement: "#e51c23"
        },
        "#ffeb3b": {
          primary: "#ffeb3b",
          highlight: "#fffb73",
          medium: "#ffcc3e",
          dark: "#ffa33e",
          complement: "#03a9f4"
        },
        "#ffc107": {
          primary: "#ffc107",
          highlight: "#ffdb08",
          medium: "#ffa506",
          dark: "#ff7708",
          complement: "#e91e63"
        },
        "#ff5722": {
          primary: "#ff5722",
          highlight: "#ff8101",
          medium: "#ef4010",
          dark: "#e51b23",
          complement: "#ffc107"
        },
        "#e91e63": {
          primary: "#e91e63",
          highlight: "#fc3d86",
          medium: "#d60756",
          dark: "#b20044",
          complement: "#ff9800"
        },
        "#259b24": {
          primary: "#259b24",
          highlight: "#22af22",
          medium: "#008e00",
          dark: "#00750b",
          complement: "#ffc107"
        },
        "#cddc39": {
          primary: "#cddc39",
          highlight: "#e7ef41",
          medium: "#b5cc0e",
          dark: "#6dba00",
          complement: "#9c27b0"
        },
        "#ff9800": {
          primary: "#ff9800",
          highlight: "#ffb703",
          medium: "#ff7503",
          dark: "#ff5703",
          complement: "#e91e63"
        },
        "#e51c23": {
          primary: "#e51c23",
          highlight: "#ff0619",
          medium: "#c61724",
          dark: "#af0000",
          complement: "#8bc34a"
        },
        "#9c27b0": {
          primary: "#9c27b0",
          highlight: "#c30fe8",
          medium: "#8a11a8",
          dark: "#6e0687",
          complement: "#cddc39"
        },
        "#3f51b5": {
          primary: "#3f51b5",
          highlight: "#4661e0",
          medium: "#2e46aa",
          dark: "#293e96",
          complement: "#ff9800"
        },
        "#03a9f4": {
          primary: "#03a9f4",
          highlight: "#06c5f2",
          medium: "#0692f2",
          dark: "#0677f2",
          complement: "#ffeb3b"
        },
        "#6ae5b9": {
          primary: "#6ae5b9",
          highlight: "#8efcdc",
          medium: "#40d39b",
          dark: "#53bca6",
          complement: "#9c27b0"
        },
        "#9e9e9e": {
          primary: "#9e9e9e",
          highlight: "#bdbdbd",
          medium: "#848484",
          dark: "#777777",
          complement: "#e51c23"
        },
        "#f2faff": {
          primary: "#f2faff",
          highlight: "#ffffff",
          medium: "#d4ecf9",
          dark: "#acd1e2",
          complement: "#03a9f4"
        },
        "#673ab7": {
          primary: "#673ab7",
          highlight: "#764acc",
          medium: "#54349b",
          dark: "#48219e",
          complement: "#ff9800"
        },
        "#5677fc": {
          primary: "#5677fc",
          highlight: "#6c9dff",
          medium: "#3f66e0",
          dark: "#1c40c6",
          complement: "#cddc39"
        },
        "#009688": {
          primary: "#009688",
          highlight: "#06bca6",
          medium: "#008474",
          dark: "#007a7a",
          complement: "#5677fc"
        },
        "#795548": {
          primary: "#795548",
          highlight: "#895c4e",
          medium: "#6b493f",
          dark: "#593d36",
          complement: "#03a9f4"
        },
        "#212121": {
          primary: "#212121",
          highlight: "#333333",
          medium: "#111111",
          dark: "#000000",
          complement: "#3f51b5"
        },
        "#ff0619": {
          highlight: "#ff0619"
        },
        "#af0000": {
          highlight: "#af0000"
        },
        "#22af22": {
          highlight: "#259b24"
        },
        "#00750b": {
          highlight: "#00750b"
        }
      }
    }
  };
  a.utils = function () {
    var c = {};
    return {
      distance: function (b, c) {
        var d = c.x - b.x;
        b = c.y - b.y;
        return Math.sqrt(d * d + b * b);
      },
      angle: function (b, c) {
        return Math.atan2(c.y - b.y, c.x - b.x);
      },
      midpoint: function (b, c) {
        return {
          x: b.x + (c.x - b.x) / 2,
          y: b.y + (c.y - b.y) / 2
        };
      },
      pointInCurve: function (b, c, e, f) {
        var d = 1 - b;
        return {
          x: d * d * c.x + 2 * d * b * e.x + b * b * f.x,
          y: d * d * c.y + 2 * d * b * e.y + b * b * f.y,
          angle: Math.atan2(d * e.y + b * f.y - (d * c.y + b * e.y), d * e.x + b * f.x - (d * c.x + b * e.x))
        };
      },
      curveLength: function (b, c, e) {
        var d = b.x - 2 * c.x + e.x,
          g = b.y - 2 * c.y + e.y;
        e = 2 * c.x - 2 * b.x;
        c = 2 * c.y - 2 * b.y;
        b = 4 * (d * d + g * g);
        d = 4 * (d * e + g * c);
        e = e * e + c * c;
        g = 2 * Math.sqrt(b + d + e);
        c = Math.sqrt(b);
        var h = 2 * b * c,
          l = 2 * Math.sqrt(e),
          k = d / c;
        return (h * g + c * d * (g - l) + (4 * e * b - d * d) * Math.log((2 * c + k + g) / (k + l))) / (4 * h);
      },
      map: function (b, c, e) {
        return c + (e - c) * b;
      },
      svgToImage: function (b, c) {
        var d = window.URL || window.webkitURL || window,
          f = new Image();
        b = new Blob([b], {
          type: "image/svg+xml"
        });
        d = d.createObjectURL(b);
        c && (f.onload = function () {
          c(f);
        });
        f.src = d;
        return f;
      },
      simpleTimeout: function (b) {
        window.setTimeout(b, 0);
      },
      randomLoop: function (b, c, e) {
        window.setTimeout(function () {
          b();
          a.utils.randomLoop(b, c, e);
        }, Math.max(c, Math.random() * e));
      },
      triggerStart: function (b, d) {
        c[b] || (d = d || [], window.santaApp.fire("sound-trigger", "cd_stop_all_drawing"), window.santaApp.fire("sound-trigger", {
          name: this.cleanNameForKlang(b) + "_start",
          args: d
        }), c[b] = !0);
      },
      triggerStop: function (b) {
        c[b] && (window.santaApp.fire("sound-trigger", "cd_stop_all_drawing"), window.santaApp.fire("sound-trigger", this.cleanNameForKlang(b) + "_stop"), c[b] = !1);
      },
      triggerOnce: function (b, d) {
        c[b] || (d = d || [], window.santaApp.fire("sound-trigger", {
          name: b,
          args: d
        }), c[b] = !0);
      },
      triggerReset: function (b) {
        c[b] = !1;
      },
      cleanNameForKlang: function (b) {
        return "cd_" + b.replace(/-/ig, "_");
      }
    };
  }();
  a.ClearAnimation = function (c) {
    this.canvas = c;
    this.context = c.getContext("2d");
    this.callback = null;
    this.animationStart_ = 0;
  };
  a.ClearAnimation.prototype.beginAnimation = function (c) {
    this.animationStart_ || (this.callback = c, this.animationStart_ = performance.now());
  };
  a.ClearAnimation.prototype.update = function () {
    if (this.animationStart_) {
      var c = this.canvas,
        b = this.context,
        d = (performance.now() - this.animationStart_) / 1E3;
      if (d >= a.Constants.CLEAR_ANIMATION_SECONDS) this.animationStart_ = 0, this.callback && this.callback();else {
        var e = ~~Math.sqrt(100);
        d /= a.Constants.CLEAR_ANIMATION_SECONDS;
        var f = (-Math.cos(d * Math.PI) + 1) / 2,
          g = -Math.cos(d * Math.PI / 2) + 1;
        g = `rgba(${Math.round(237 + 18 * g)}, ${Math.round(245 + 10 * g)}, ${Math.round(247 + 8 * g)})`;
        c.width = c.width;
        b.save();
        for (let h = 0; 100 > h; ++h) {
          const l = h % e / e - 1 + f + Math.cos(this.animationStart_ + h) / 4,
            k = Math.sin(d * Math.PI / 2) + ~(h / e) / e,
            m = Math.max(c.width, c.height) / 10 * d * (Math.cos(h) + 2),
            n = b.createRadialGradient(l * c.width, k * c.height, 0, l * c.width, k * c.height, m);
          n.addColorStop(d, g);
          n.addColorStop(1, "rgba(255, 255, 255, 0.0)");
          b.fillStyle = n;
          b.beginPath();
          b.arc(l * c.width, k * c.height, m, 0, 2 * Math.PI);
          b.fill();
        }
        b.restore();
      }
    }
  };
  a.Snow = function (c, b, d) {
    this.canvas = b;
    this.context = b.getContext("2d");
    this.backup = d;
    this.backupContext = d.getContext("2d");
    this.playing = !1;
    this.cleared = !0;
    this.button = c.find('[data-tool="snowglobe"]');
    this.flakes = [];
    this.button.on("click.santascanvas touchend.santascanvas", this.toggleSnow.bind(this));
  };
  a.Snow.prototype.toggleSnow = function () {
    this.playing = !this.playing;
    this.button.attr("data-snowglobe-snowing", this.playing);
    window.santaApp.fire("sound-trigger", {
      name: "cd_toggle_snow",
      args: [this.playing ? 1 : 0]
    });
  };
  a.Snow.prototype.reset = function () {
    this.playing = !1;
    this.flakes = [];
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.backupContext.clearRect(0, 0, this.backup.width, this.backup.height);
    this.cleared = !0;
    this.button.attr("data-snowglobe-snowing", !1);
  };
  a.Snow.prototype.update = function (c) {
    if (this.playing || !this.cleared) if (this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.backupContext.clearRect(0, 0, this.backup.width, this.backup.height), this.cleared = !0, this.playing) {
      .95 < Math.random() && this.flakes.length < a.Constants.SNOW_MAX_PARTICLES && this.addFlake();
      for (var b = 0; b < this.flakes.length; b++) this.drawFlake(this.flakes[b]), this.updateFlake(this.flakes[b], c, b);
      for (b = this.flakes.length - 1; 0 <= b; b--) {
        var d = this.flakes[b];
        this.drawFlake(d);
        this.updateFlake(d, c);
        (d.x > this.backup.width || 0 > d.x || d.y > this.backup.height) && this.flakes.splice(b, 1);
      }
      this.context.drawImage(this.backup, 0, 0, this.canvas.width, this.canvas.height);
      this.cleared = !1;
    }
  };
  a.Snow.prototype.addFlake = function () {
    var c = a.utils.map(Math.random(), a.Constants.SNOW_MIN_DISTANCE, 1);
    this.flakes.push({
      x: Math.random() * this.backup.width,
      y: 0,
      vx: -a.Constants.SNOW_MAX_X / 2 + Math.random() * a.Constants.SNOW_MAX_X,
      vy: c * a.Constants.SNOW_MAX_Y,
      size: c * a.Constants.SNOW_MAX_SIZE
    });
  };
  a.Snow.prototype.updateFlake = function (c, b) {
    c.x += c.vx * b;
    c.y += c.vy * b;
  };
  a.Snow.prototype.drawFlake = function (c) {
    this.backupContext.fillStyle = "rgba(255, 255, 255, 0.8)";
    this.backupContext.beginPath();
    this.backupContext.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
    this.backupContext.fill();
  };
  a.shared = {};
  a.shared.utils = function () {
    class c {
      constructor(b) {
        this.value = b;
      }
      change(b) {
        const c = this.value !== b;
        this.value = b;
        return c;
      }
      moveToTarget(b, c) {
        let d = +this.value;
        if (this.value !== d) throw new TypeError("SmartValue does not contain a number");
        d < b ? d = Math.min(b, d + c) : d > b && (d = Math.max(b, d - c));
        this.value = d;
        return this;
      }
    }
    return {
      animWithClass: function (b, c, e) {
        b.length || (b = [b]);
        b = Array.prototype.slice.call(b);
        b.forEach(b => {
          b.classList.add(c);
          const d = () => {
            b.classList.remove(c);
            b.removeEventListener("animationend", d);
            b.removeEventListener("transitionend", d);
            e && (e(), e = null);
          };
          b.addEventListener("animationend", d);
          b.addEventListener("transitionend", d);
        });
      },
      unwrapElement: function (b) {
        return b instanceof Node ? b : b[0] || null;
      },
      computedTransform: function (b) {
        const c = window.getComputedStyle(b);
        let e;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(b => {
          b = c.getPropertyValue(b + "transform");
          if (!b) return !1;
          e = b;
          return !0;
        });
        if ("none" === e) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let f;
        try {
          f = e.split("(")[1].split(")")[0].split(",").map(b => +b);
        } catch (g) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: f[4],
          y: f[5],
          rotate: 180 / Math.PI * Math.atan2(f[1], f[0])
        };
      },
      onWebAnimationFinished: function (b, c) {
        const d = b.finished;
        d && d.then ? d.then(c) : b.addEventListener("finish", c, !1);
      },
      playerFinished: function (b) {
        return !b || "finished" === b.playState;
      },
      get touchEnabled() {
        return "standalone" in navigator || window.matchMedia("(pointer: coarse)").matches ? !0 : window.matchMedia("(pointer: fine)").matches ? !1 : "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      },
      SmartValue: c
    };
  }();
  a.Canvas = function (c, b) {
    this.$elem = b;
    this.baseIndex = 0;
    this.drawIndex = 1;
    this.undoing = !1;
    this.canvasRatio = 1;
    this.game_ = c;
    this.needSave = !1;
    this.mouse = {
      down: !1,
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      scale: 1
    };
    this.lastMouseY = this.lastMouseX = this.lastTime = this.drawingVolume = 0;
    this.hasDrawn = !1;
    b.find("[data-tool-undo]").on("click.santascanvas touchend.santascanvas", this.undo.bind(this));
    b.find("[data-tool-redo]").on("click.santascanvas touchend.santascanvas", this.redo.bind(this));
    b.find("[data-tool-save]").on("click.santascanvas touchend.santascanvas", this.saveToFile.bind(this));
    b.find("[data-tool-trash]").on("click.santascanvas touchend.santascanvas", this.onTrashClick.bind(this));
  };
  a.Canvas.prototype.start = function () {
    this.onResize();
    $(window).on("resize.santascanvas", this.onResize.bind(this));
  };
  a.Canvas.prototype.initCanvases = function (c) {
    this.displayCanvas = c.find("#draw-canvas")[0];
    this.saveCanvas = c.find("#save-canvas")[0];
    this.backgroundCanvas = c.find("#back-canvas")[0];
    this.foregroundCanvas = c.find("#fore-canvas")[0];
    this.backgroundBackup = c.find("#back-backup")[0];
    this.foregroundBackup = c.find("#fore-backup")[0];
    this.container = $(this.displayCanvas).closest(".Canvas");
    this.displayCtx = this.displayCanvas.getContext("2d");
    1 < this.container.width() / this.container.height() ? (this.canvasHeight = a.Constants.CANVAS_HEIGHT_LANDSCAPE, this.canvasWidth = a.Constants.CANVAS_WIDTH_LANDSCAPE) : (this.canvasHeight = a.Constants.CANVAS_HEIGHT_PORTRAIT, this.canvasWidth = a.Constants.CANVAS_WIDTH_PORTRAIT);
    this.saveCanvas.height = this.canvasHeight;
    this.saveCanvas.width = this.canvasWidth;
    this.backgroundBackup.height = this.canvasHeight;
    this.backgroundBackup.width = this.canvasWidth;
    this.foregroundBackup.height = this.canvasHeight;
    this.foregroundBackup.width = this.canvasWidth;
    this.backupCanvases = [];
    for (var b = 0; b < a.Constants.NUM_BACKUPS; b++) {
      var d = c.find("#draw-backup" + b)[0];
      d.height = this.canvasHeight;
      d.width = this.canvasWidth;
      this.backupCanvases.push({
        canvas: d,
        saved: b ? !1 : !0
      });
    }
    this.snow = new a.Snow(c, this.foregroundCanvas, this.foregroundBackup);
    this.clearAnimation = new a.ClearAnimation(this.foregroundCanvas);
  };
  a.Canvas.prototype.onResize = function () {
    this.hasDrawn || this.initCanvases(this.$elem);
    this.canvasRatio = Math.min(this.container.height() / this.canvasHeight, this.container.width() / this.canvasWidth);
    var c = this.canvasWidth * this.canvasRatio;
    this.displayCanvas.height = this.backgroundCanvas.height = this.foregroundCanvas.height = this.canvasHeight * this.canvasRatio;
    this.displayCanvas.width = this.backgroundCanvas.width = this.foregroundCanvas.width = c;
    this.needSave && this.save();
    this.copyCanvasIndex(this.baseIndex);
    this.copyCanvas(this.foregroundBackup, this.foregroundCanvas);
    this.copyCanvas(this.backgroundBackup, this.backgroundCanvas);
  };
  a.Canvas.prototype.resetCanvas = function () {
    this.updateCanvas(null, null, !0);
    this.clearCanvasElement(this.backgroundCanvas);
    this.clearCanvasElement(this.foregroundCanvas);
    this.clearCanvasElement(this.backgroundBackup);
    this.clearCanvasElement(this.foregroundBackup);
    this.save();
    this.undoing = this.needSave = !1;
  };
  a.Canvas.prototype.mouseChanged = function (c) {
    if (c !== this.game_.mouse) throw Error("unexpected mouse callback");
    var b = this.game_.tools,
      d = this.game_.colorpicker,
      e = this.displayCanvas.getBoundingClientRect();
    e = c.transformCoordinates(c.x, c.y, e);
    this.mouse.x = e.x;
    this.mouse.y = e.y;
    this.mouse.down = e.down;
    this.mouse.scale = this.canvasRatio;
    this.mouse.normX = e.normX;
    this.mouse.normY = e.normY;
    d = 0 <= this.mouse.normX && 1 >= this.mouse.normX && 0 <= this.mouse.normY && 1 >= this.mouse.normY && !c.isInsideEl(c.x, c.y, b.primaryMenu[0]) && !c.isInsideEl(c.x, c.y, b.secondaryMenu[0]) && !c.isInsideEl(c.x, c.y, b.mobileEdit[0]) && !c.isInsideEl(c.x, c.y, b.mobileSlider[0]) && !(d.isPopupOpen() && c.isInsideEl(c.x, c.y, d.popup[0])) && !c.isInsideEl(c.x, c.y, this.game_.rotateElem[0]);
    e = $(c.originalTarget).closest("[data-slider]").length;
    c = $(c.originalTarget).closest("[data-colorpicker]").length;
    d && this.mouse.down && b.selectedTool && !e && !c ? this.updateCanvas(b.selectedTool, b.selectedTool.draw) : d && this.mouse.down || !b.selectedTool || (b.selectedTool.reset(), this.needSave && (this.save(), this.needSave = !1));
  };
  a.Canvas.prototype.updateCanvas = function (c, b, d) {
    this.hasDrawn || d || (this.hasDrawn = !0);
    if (b && c || d) {
      if (this.undoing) {
        for (var e = !1, f = this.drawIndex; !e;) f == this.baseIndex ? e = !0 : (this.clearCanvas(f), f = this.prevIndex(f));
        this.drawIndex = this.nextIndex(this.baseIndex);
        this.copyCanvasIndex(this.baseIndex, this.drawIndex);
        this.undoing = !1;
      }
      d ? (this.clearCanvas(this.drawIndex), this.needSave = !0) : b.call(c, this.backupCanvases[this.drawIndex].canvas, this.mouse, this.backupCanvases[this.baseIndex].canvas, this.game_.slider.size, this.game_.colorpicker.selectedColor) && (this.needSave = !0);
      c && this.calculateDrawingVolume(c.textureName);
    }
    this.copyCanvasIndex(this.drawIndex);
  };
  a.Canvas.prototype.calculateDrawingVolume = function () {
    const c = performance.now() / 1E3;
    var b = Math.abs(Math.abs(this.mouse.x / this.canvasWidth - this.lastMouseX) + Math.abs(this.mouse.y / this.canvasHeight - this.lastMouseY)) / (c - this.lastTime);
    isFinite(b) && (this.drawingVolume += b / 2);
    this.lastTime = c;
    this.lastMouseX = this.mouse.x / this.canvasWidth;
    this.lastMouseY = this.mouse.y / this.canvasHeight;
  };
  a.Canvas.prototype.soundUpdate = function () {
    isFinite(this.drawingVolume) && (this.drawingVolume *= .6, window.santaApp.fire("sound-trigger", "cd_draw_update", Math.min(1, this.drawingVolume)));
  };
  a.Canvas.prototype.save = function () {
    this.backupCanvases[this.drawIndex].saved = !0;
    this.baseIndex = this.drawIndex;
    this.drawIndex = this.nextIndex(this.baseIndex);
    this.copyCanvasIndex(this.baseIndex, this.drawIndex);
    this.backupCanvases[this.drawIndex].saved = !1;
  };
  a.Canvas.prototype.undo = function () {
    var c = this.prevIndex(this.baseIndex);
    c != this.drawIndex && this.backupCanvases[c].saved ? (this.baseIndex = c, this.copyCanvasIndex(this.baseIndex), window.santaApp.fire("sound-trigger", "cd_undo")) : window.santaApp.fire("sound-trigger", "cd_fail");
    this.undoing = !0;
  };
  a.Canvas.prototype.redo = function () {
    if (this.undoing) {
      var c = this.nextIndex(this.baseIndex);
      c != this.drawIndex ? (this.baseIndex = c, this.copyCanvasIndex(this.baseIndex), window.santaApp.fire("sound-trigger", {
        name: "cd_redo",
        args: [this.baseIndex]
      })) : window.santaApp.fire("sound-trigger", "cd_fail");
    }
  };
  a.Canvas.prototype.prevIndex = function (c) {
    return 0 < c ? c - 1 : this.backupCanvases.length - 1;
  };
  a.Canvas.prototype.nextIndex = function (c) {
    return (c + 1) % this.backupCanvases.length;
  };
  a.Canvas.prototype.clearCanvas = function (c) {
    "undefined" != typeof c ? (c = this.backupCanvases[c], this.clearCanvasElement(c.canvas), c.saved = !1) : this.displayCtx.clearRect(0, 0, this.displayCanvas.width, this.displayCanvas.height);
  };
  a.Canvas.prototype.clearCanvasElement = function (c) {
    c.getContext("2d").clearRect(0, 0, c.width, c.height);
  };
  a.Canvas.prototype.copyCanvasIndex = function (c, b) {
    this.copyCanvas(this.backupCanvases[c].canvas, "undefined" != typeof b ? this.backupCanvases[b].canvas : this.displayCanvas);
  };
  a.Canvas.prototype.copyCanvas = function (c, b) {
    var d = b.getContext("2d");
    d.clearRect(0, 0, b.width, b.height);
    d.drawImage(c, 0, 0, b.width, b.height);
  };
  a.Canvas.prototype.saveToFile = function (c) {
    var b = this.saveCanvas.getContext("2d");
    b.fillStyle = "#fff";
    b.fillRect(0, 0, this.saveCanvas.width, this.saveCanvas.height);
    b.drawImage(this.backgroundBackup, 0, 0, this.saveCanvas.width, this.saveCanvas.height);
    b.drawImage(this.backupCanvases[this.baseIndex].canvas, 0, 0, this.saveCanvas.width, this.saveCanvas.height);
    b.drawImage(this.foregroundBackup, 0, 0, this.saveCanvas.width, this.saveCanvas.height);
    gtag("event", "gameAction", {
      game: "santascanvas",
      action: "save"
    });
    this.saveCanvas.msToBlob ? (c = this.saveCanvas.msToBlob(), window.navigator.msSaveBlob(c, "santascanvas.jpg")) : (b = this.saveCanvas.toDataURL("image/jpeg"), c.target.href = b, window.santaApp.fire("sound-trigger", "cd_save"));
  };
  a.Canvas.prototype.onTrashClick = function () {
    this.snow.reset();
    gtag("event", "gameAction", {
      game: "santascanvas",
      action: "trash"
    });
    this.clearAnimation.beginAnimation(this.resetCanvas.bind(this));
    window.santaApp.fire("sound-trigger", "cd_trash");
  };
  a.Colorpicker = function (c) {
    this.elem = c;
    this.container = this.elem.find("[data-colorpicker]");
    this.selector = this.elem.find("[data-colorpicker-selector]");
    this.popup = this.elem.find("[data-colorpicker-popup]");
    this.colors = this.elem.find("[data-colorpicker-color]");
    this.tools = this.elem.find("[data-tool-color]");
    this.subscribers = [];
    this.setColor("#" + a.Constants.COLORPICKER_DEFAULT);
    this.colors.each(function () {
      var b = $(this),
        c = b.attr("data-colorpicker-color");
      b.css("background", c);
    });
    this.selector.on("click.santascanvas touchend.santascanvas", this.togglePopup.bind(this));
    this.colors.on("click.santascanvas touchend.santascanvas", this.onColorClick.bind(this));
    this.selector.on("mouseenter.santascanvas", this.onColorPickerOver.bind(this));
    this.colors.on("mouseenter.santascanvas", this.onColorOver.bind(this));
  };
  a.Colorpicker.prototype.togglePopup = function () {
    this.disabled ? window.santaApp.fire("sound-trigger", "cd_fail") : (this.popup.toggleClass("is-visible"), this.isPopupOpen() && window.santaApp.fire("sound-trigger", "cd_color_popup"));
  };
  a.Colorpicker.prototype.onColorClick = function (c) {
    c = $(c.target).closest("[data-colorpicker-color]").attr("data-colorpicker-color");
    this.setColor(c);
    this.togglePopup();
    window.santaApp.fire("sound-trigger", "cd_color_select");
  };
  a.Colorpicker.prototype.onColorOver = function () {
    window.santaApp.fire("sound-trigger", "cd_color_over");
  };
  a.Colorpicker.prototype.onColorPickerOver = function () {
    window.santaApp.fire("sound-trigger", "generic_button_over");
  };
  a.Colorpicker.prototype.setColor = function (c) {
    this.selectedColor = c;
    this.colors.removeClass("is-selected");
    this.elem.find('[data-colorpicker-color="' + c + '"]').addClass("is-selected");
    this.selector.css({
      "background-color": c
    });
    this.tools.attr("data-tool-color", c);
    this.subscribers.forEach(function (b) {
      b.callback.call(b.context, this.selectedColor);
    }, this);
  };
  a.Colorpicker.prototype.isPopupOpen = function () {
    return this.popup.hasClass("is-visible");
  };
  a.Colorpicker.prototype.subscribe = function (c, b) {
    this.subscribers.push({
      callback: c,
      context: b
    });
  };
  a.Colorpicker.prototype.setDisabled = function (c) {
    this.container.attr("data-colorpicker-disabled", c);
    (this.disabled = c) && this.popup.removeClass("is-visible");
  };
  a.Mouse = function (c) {
    this.$elem = c;
    this.elem = c[0];
    this.rect = this.elem.getBoundingClientRect();
    this.down = !1;
    this.y = this.x = 0;
    this.subscribers = [];
    $(window).on("resize.santascanvas orientationchange.santascanvas", function () {
      this.update();
    }.bind(this));
    c.on("mousemove.santascanvas", function (b) {
      this.x = b.clientX;
      this.y = b.clientY;
      this.target = b.target;
      b.preventDefault();
    }.bind(this));
    c.on("touchstart.santascanvas touchmove.santascanvas", function (b) {
      this.x = b.originalEvent.touches[0].clientX;
      this.y = b.originalEvent.touches[0].clientY;
      this.target = b.originalEvent.touches[0].target;
      b.preventDefault();
    }.bind(this));
    c.on("mousedown.santascanvas touchstart.santascanvas", function (b) {
      this.down = !0;
      this.originalTarget = "touchstart" == b.type ? b.originalEvent.touches[0].target : b.target;
      b.preventDefault();
    }.bind(this));
    c.on("mouseup.santascanvas mouseleave.santascanvas touchend.santascanvas touchleave.santascanvas", function (b) {
      this.down = !1;
      this.originalTarget = null;
      b.cancelable && b.preventDefault();
    }.bind(this));
  };
  a.Mouse.prototype.subscribe = function (c, b) {
    this.subscribers.push({
      callback: c,
      context: b
    });
  };
  a.Mouse.prototype.update = function () {
    var c = this.coordinates();
    this.subscribers.forEach(function (b) {
      b.callback.call(b.context, this, c);
    }, this);
  };
  a.Mouse.prototype.coordinates = function () {
    return this.transformCoordinates(this.x, this.y, this.rect);
  };
  a.Mouse.prototype.transformCoordinates = function (c, b, d) {
    c -= d.left;
    b -= d.top;
    return {
      x: c,
      y: b,
      normX: c / d.width,
      normY: b / d.height,
      down: this.down
    };
  };
  a.Mouse.prototype.isInsideEl = function (c, b, d) {
    d = d.getBoundingClientRect();
    c = this.transformCoordinates(c, b, d);
    return 0 <= c.normX && 1 >= c.normX && 0 <= c.normY && 1 >= c.normY;
  };
  a.Rotator = function (c) {
    this.elem = c;
    this.subscribers = [];
    this.rotateR = this.elem.find("[data-rotate-right]");
    this.rotateL = this.elem.find("[data-rotate-left]");
    this.rotateR.on("click.santascanvas touchend.santascanvas", this.rotate.bind(this, 1));
    this.rotateL.on("click.santascanvas touchend.santascanvas", this.rotate.bind(this, -1));
    this.rotateR.on("mouseenter.santascanvas", this.onRotateButtonOver.bind(this));
    this.rotateL.on("mouseenter.santascanvas", this.onRotateButtonOver.bind(this));
  };
  a.Rotator.prototype.rotate = function (c) {
    var b = a.Constants.ROTATE_ANGLE * c;
    window.santaApp.fire("sound-trigger", {
      name: "cd_rotate",
      args: [c]
    });
    this.subscribers.forEach(function (c) {
      c.callback.call(c.context, b);
    }, this);
  };
  a.Rotator.prototype.onRotateButtonOver = function () {
    window.santaApp.fire("sound-trigger", "generic_button_over");
  };
  a.Rotator.prototype.subscribe = function (c, b) {
    this.subscribers.push({
      callback: c,
      context: b
    });
  };
  a.Slider = function (c, b) {
    this.elem = c;
    this.container = this.elem.find("[data-slider]");
    this.base = this.elem.find("[data-slider-base]");
    this.dot = this.elem.find("[data-slider-dot]");
    this.sliding = !1;
    this.mouse = b;
    this.subscribers = [];
    this.container.on("mousedown.santascanvas touchstart.santascanvas", this.onMousedown.bind(this));
    this.onResize();
    $(window).on("resize.santascanvas", this.onResize.bind(this));
    this.setSize(.5);
  };
  a.Slider.prototype.mouseChanged = function (c) {
    this.sliding && (c.down ? (c = this.checkBounds(c), this.isMobile ? c && c.inY && this.setSize(1 - c.coords.normY, c.coords.y, !0) : c && c.inX && this.setSize(c.coords.normX, c.coords.x)) : this.sliding = !1);
  };
  a.Slider.prototype.onMousedown = function () {
    this.disabled ? window.santaApp.fire("sound-trigger", "cd_fail") : this.sliding = !0;
  };
  a.Slider.prototype.checkBounds = function (c) {
    var b = c.target.closest("[data-slider]");
    if (b = $(b).find("[data-slider-base]")[0]) b = b.getBoundingClientRect();else return null;
    c = this.mouse.transformCoordinates(c.x, c.y, b);
    var d = b = !1;
    0 <= c.normX && 1 >= c.normX && (b = !0);
    0 <= c.normY && 1 >= c.normY && (d = !0);
    return {
      coords: c,
      inX: b,
      inY: d
    };
  };
  a.Slider.prototype.setSize = function (c, b, d) {
    var e = b;
    b || (this.isMobile ? (b = this.base[this.base.length - 1].getBoundingClientRect(), e = b.height * c) : (b = this.base[0].getBoundingClientRect(), e = b.width * c));
    d ? (this.dot.css("left", ""), this.dot.css("right", e), this.dot.css("transform", "translate(50%, -50%) scale(" + (1 + 1 * c) + ")")) : (this.dot.css("left", e), this.dot.css("transform", "translate(-50%, -50%) scale(" + (1 + 1 * c) + ")"));
    this.size = c;
    this.subscribers.forEach(function (b) {
      b.callback.call(b.context, this.size);
    }, this);
  };
  a.Slider.prototype.subscribe = function (c, b) {
    this.subscribers.push({
      callback: c,
      context: b
    });
  };
  a.Slider.prototype.onResize = function () {
    this.elem[0].getBoundingClientRect().width <= a.Constants.MOBILE_BREAKPOINT ? this.isMobile = !0 : this.isMobile = !1;
  };
  a.Slider.prototype.setDisabled = function (c) {
    this.container.attr("data-slider-disabled", c);
    this.disabled = c;
  };
  a.Tool = function (c, b) {
    this.elem = c;
    this.el = this.elem.find('[data-tool="' + b + '"]');
    this.hoverEl = this.elem.find("[data-tool-hover]");
    this.circleEl = this.elem.find("[data-tool-hover-circle]");
    this.name = b;
    this.category = this.el.closest("[data-tool-category]").attr("data-tool-category");
    this.isSelected = !1;
    this.mouseOffset = {
      x: -10,
      y: 10
    };
    this.soundKey = "";
    this.disableColorpicker = this.disableResize = !1;
  };
  a.Tool.prototype.select = function (c) {
    this.isSelected = !0;
    this.el.addClass("Tool--selected");
    this.hoverEl.addClass("is-selected");
    this.hoverEl.attr("data-tool-hover-category", this.category);
    this.hoverEl.attr("data-tool-hover-tool", this.name);
    a.shared.utils.touchEnabled && this.hoverEl.css({
      display: "none"
    });
    this.move(c);
    "spray" === this.category ? window.santaApp.fire("sound-trigger", "sfx_select_lid_open") : "stamp" === this.category ? window.santaApp.fire("sound-trigger", "cd_stamp_up") : window.santaApp.fire("sound-trigger", "cd_generic_select");
  };
  a.Tool.prototype.deselect = function () {
    this.isSelected = !1;
    this.el.removeClass("Tool--selected");
    this.hoverEl.removeClass("is-selected");
    this.hoverEl.css({
      top: "",
      left: ""
    });
    this.elem.css({
      cursor: ""
    });
    this.hoverPreviewEl && this.hoverPreviewEl.css({
      transform: "translate(-50%, -50%)"
    });
    this.currentAngle = 0;
    this.hoverEl.attr("data-tool-hover-category", "");
    this.hoverEl.attr("data-tool-hover-tool", "");
    this.stopMousedown();
    this.reset();
    "spray" === this.category ? window.santaApp.fire("sound-trigger", "sfx_unselect_lid_close") : window.santaApp.fire("sound-trigger", "cd_generic_deselect");
  };
  a.Tool.prototype.move = function (c) {
    a.shared.utils.touchEnabled || this.hoverEl.css({
      left: c.x + this.mouseOffset.x,
      top: c.y + this.mouseOffset.y + window.santaApp.headerSize
    });
  };
  a.Tool.prototype.reset = function () {
    return null;
  };
  a.Tool.prototype.draw = function () {
    return !1;
  };
  a.Tool.prototype.startMousedown = function () {
    a.utils.triggerStart(this.soundKey);
    this.hoverEl.addClass("is-down");
  };
  a.Tool.prototype.stopMousedown = function () {
    a.utils.triggerStop(this.soundKey);
    this.hoverEl.removeClass("is-down");
  };
  a.Tool.prototype.updateSize = function (c) {
    this.currentSize = this.calculateDrawSize(c);
  };
  a.Tool.prototype.calculateDrawSize = function (c) {
    return 100 * c;
  };
  a.Tool.prototype.updateAngle = function () {};
  a.Tool.prototype.preloadImage = function () {};
  a.Eraser = function (c, b) {
    a.Tool.call(this, c, b);
    this.soundKey = b;
    this.points = [];
  };
  a.Eraser.prototype = Object.create(a.Tool.prototype);
  a.Eraser.prototype.draw = function (c, b, d, e) {
    var f = c.getContext("2d");
    this.points.push({
      x: b.normX * c.width,
      y: b.normY * c.height
    });
    if (1 < this.points.length) {
      b = f.globalCompositeOperation;
      f.clearRect(0, 0, c.width, c.height);
      f.drawImage(d, 0, 0, c.width, c.height);
      f.lineJoin = "round";
      f.lineCap = "round";
      f.lineWidth = a.utils.map(e, a.Constants.ERASER_MIN, a.Constants.ERASER_MAX);
      f.globalCompositeOperation = "destination-out";
      f.strokeStyle = "rgba(255, 255, 255, 255)";
      c = this.points[0];
      f.beginPath();
      f.moveTo(c.x, c.y);
      for (e = 0; e < this.points.length - 1; e++) c = this.points[e], d = this.points[e + 1], f.quadraticCurveTo(c.x, c.y, c.x + (d.x - c.x) / 2, c.y + (d.y - c.y) / 2);
      f.stroke();
      f.globalCompositeOperation = b;
    }
    return !0;
  };
  a.Eraser.prototype.reset = function () {
    this.points = [];
  };
  a.Eraser.prototype.calculateDrawSize = function (c) {
    return a.utils.map(c, a.Constants.ERASER_MIN, a.Constants.ERASER_MAX);
  };
  a.LayerTool = function (c, b, d) {
    a.Tool.call(this, c, "scene-" + b);
    this.soundKey = "cd_scene_" + b;
    this.image = c.find("#scene-" + b)[0];
    d == a.LayerTool.Layer.BACKGROUND ? (this.canvas = c.find("#back-canvas")[0], this.backup = c.find("#back-backup")[0]) : d == a.LayerTool.Layer.FOREGROUND && (this.canvas = c.find("#fore-canvas")[0], this.backup = c.find("#fore-backup")[0]);
    this.context = this.canvas.getContext("2d");
    this.backupContext = this.backup.getContext("2d");
  };
  a.LayerTool.prototype = Object.create(a.Tool.prototype);
  a.LayerTool.Layer = {
    BACKGROUND: 0,
    FOREGROUND: 1
  };
  a.LayerTool.prototype.draw = function () {
    if (this.image) {
      var c = this.canvas.height / this.image.height * this.image.width;
      this.context.drawImage(this.image, this.canvas.width / 2 - c / 2, 0, c, this.canvas.height);
      c = this.backup.height / this.image.height * this.image.width;
      this.backupContext.drawImage(this.image, this.backup.width / 2 - c / 2, 0, c, this.backup.height);
      window.santaApp.fire("sound-trigger", this.soundKey);
    } else this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.backupContext.clearRect(0, 0, this.backup.width, this.backup.height);
    return !0;
  };
  a.Marker = function (c, b) {
    a.Tool.call(this, c, b);
    this.soundKey = b;
    this.points = [];
  };
  a.Marker.prototype = Object.create(a.Tool.prototype);
  a.Marker.prototype.draw = function (c, b, d, e, f) {
    d = c.getContext("2d");
    this.points.push({
      x: b.normX * c.width,
      y: b.normY * c.height
    });
    1 == this.points.length ? (c = this.points[0], d.fillStyle = f, d.beginPath(), d.arc(c.x, c.y, this.currentSize / 2, 0, 2 * Math.PI), d.fill()) : (2 == this.points.length ? (c = this.points[0], b = this.points[1], b = a.utils.midpoint(c, b), d.lineJoin = "round", d.lineCap = "round", d.lineWidth = this.currentSize, d.strokeStyle = f, d.beginPath(), d.moveTo(c.x, c.y), d.lineTo(b.x, b.y)) : (d.lineJoin = "round", d.lineCap = "round", d.lineWidth = this.currentSize, d.strokeStyle = f, f = this.points[this.points.length - 3], c = this.points[this.points.length - 2], b = this.points[this.points.length - 1], f = a.utils.midpoint(f, c), b = a.utils.midpoint(c, b), d.beginPath(), d.moveTo(f.x, f.y), d.quadraticCurveTo(c.x, c.y, b.x, b.y)), d.stroke());
    return !0;
  };
  a.Marker.prototype.reset = function () {
    this.points = [];
  };
  a.Marker.prototype.calculateDrawSize = function (c) {
    return a.utils.map(c, a.Constants.PEN_MIN, a.Constants.PEN_MAX);
  };
  a.Neon = function (c, b) {
    a.Marker.call(this, c, b);
    this.soundKey = b;
    this.points = [];
    this.disableColorpicker = !0;
  };
  a.Neon.prototype = Object.create(a.Marker.prototype);
  a.Neon.prototype.draw = function (c, b, d) {
    var e = c.getContext("2d");
    this.points.push({
      x: b.normX * c.width,
      y: b.normY * c.height
    });
    e.clearRect(0, 0, c.width, c.height);
    e.drawImage(d, 0, 0, c.width, c.height);
    if (1 < this.points.length) {
      e.save();
      e.shadowColor = "#6ae5b9";
      e.shadowOffsetX = 0;
      e.shadowOffsetY = 0;
      e.shadowBlur = 5 * this.currentSize;
      e.fillStyle = "#fff";
      e.lineJoin = "round";
      e.lineCap = "round";
      e.lineWidth = this.currentSize;
      e.strokeStyle = "#fff";
      e.beginPath();
      e.moveTo(this.points[0].x, this.points[0].y);
      for (c = 1; c < this.points.length; c++) b = this.points[c - 1], d = a.utils.midpoint(b, this.points[c]), e.quadraticCurveTo(b.x, b.y, d.x, d.y);
      e.stroke();
      e.restore();
    }
    return !0;
  };
  a.Neon.prototype.calculateDrawSize = function (c) {
    return a.utils.map(c, a.Constants.NEON_MIN, a.Constants.NEON_MAX);
  };
  a.PaintRoller = function (c, b) {
    a.Tool.call(this, c, "roller-" + b);
    this.soundKey = "roller_" + b;
    this.drawing = !1;
    this.pattern = c.find("#roller-" + b)[0];
    this.patternCanvas = c.find("#pattern-canvas")[0];
  };
  a.PaintRoller.prototype = Object.create(a.Tool.prototype);
  a.PaintRoller.prototype.draw = function (c, b, d) {
    var e = c.getContext("2d"),
      f = b.normX * c.width;
    b = b.normY * c.height;
    this.drawing ? (b = {
      x: f,
      y: b
    }, f = a.utils.angle(this.startPt, b), b = a.utils.distance(this.startPt, b), e.clearRect(0, 0, c.width, c.height), e.drawImage(d, 0, 0, c.width, c.height), e.save(), e.translate(this.startPt.x, this.startPt.y), e.rotate(f), e.translate(0, -this.currentSize / 2), e.fillRect(0, 0, b, this.currentSize), e.restore(), window.santaApp.fire("sound-trigger", {
      name: "cd_roller_stretch",
      args: [b / Math.max(c.width, c.height)]
    })) : (this.startPt = {
      x: f,
      y: b
    }, this.drawing = !0, this.createPatternCanvas(), e.fillStyle = e.createPattern(this.patternCanvas, "repeat"));
    return !0;
  };
  a.PaintRoller.prototype.createPatternCanvas = function () {
    var c = this.patternCanvas.getContext("2d");
    this.patternCanvas.height = this.currentSize;
    this.patternCanvas.width = this.currentSize / this.pattern.height * this.pattern.width;
    c.drawImage(this.pattern, 0, 0, this.patternCanvas.width, this.patternCanvas.height);
  };
  a.PaintRoller.prototype.reset = function () {
    this.drawing = !1;
  };
  a.PaintRoller.prototype.calculateDrawSize = function (c) {
    return a.utils.map(c, a.Constants.PAINT_ROLLER_MIN, a.Constants.PAINT_ROLLER_MAX);
  };
  a.SVGImage = function () {
    this.cache = {};
    this.height = this.width = 100;
  };
  a.SVGImage.prototype.getSVGString = function () {};
  a.SVGImage.prototype.getImage = function (c, b) {
    this.cache[c] || (this.cache[c] = a.utils.svgToImage(this.getSVGString(c), b));
    return this.cache[c];
  };
  a.ImageItemBow = function () {
    a.SVGImage.call(this);
    this.width = 86;
    this.height = 63;
  };
  a.ImageItemBow.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemBow.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.01 63.03" width="86.01" height="63.03"><defs><style>.cls-1{fill:' + c.primary + ";}.cls-2{fill:" + c.medium + ";}.cls-3{fill:" + c.highlight + ";}.cls-4{fill:" + c.dark + ';}</style></defs><path class="cls-1" d="M40.86,31.43l-1.2-6.08h0l-.57.56.14,5.63S34,45.75,15.78,55.21h0L15.22,63C37.35,50.12,40.86,31.43,40.86,31.43Z"/><path class="cls-2" d="M39.66,25.35l-.44,6.2S34,45.75,15.78,55.21v.22L16,52.85,4,48.66S29.57,35.41,39.66,25.35"/><path class="cls-1" d="M39.82,21.39S30.24,4.8,14,.26c0,0-3.28-1.5-5.62,2.69A18.92,18.92,0,0,0,7.15,5.6h0c-1.64,0-4.61.29-5.43,3.4C.17,14.92-1.09,23.94,1.45,37.41c0,0,.57,5.74,7.5,3.69,6.16-1.82,29.32-10.24,29.32-10.24Zm-1.31-.33h0ZM7.63,5.63Zm.63.08L8,5.67c.12-.24.24-.48.37-.72C10.7.76,14,2.26,14,2.26,25.91,5.59,34.23,15.4,37.82,20.39,34.53,17.25,22.64,6.9,8.26,5.71Z"/><path class="cls-2" d="M8.26,5.71C22.65,6.9,34.53,17.25,37.82,20.39,34.23,15.4,25.91,5.59,14,2.26,14,2.26,10.7.76,8.36,5c-.13.24-.25.48-.37.72Z"/><path class="cls-3" d="M14,34a102.58,102.58,0,0,1,14.51.28l0,.07,9.75-3.46c-20.49,6-28.45-14.37-17.93-20.56A40.64,40.64,0,0,0,10.13,7.43a4.7,4.7,0,0,0-.64,1.39C8,14.35,7.46,26.33,14.08,34Z"/><path class="cls-4" d="M1.45,37.41S2,43.15,9,41.1c3.49-1,12.85-4.33,20-6.87l-.37,0C6.45,32.44,1.37,37,1.45,37.41Z"/><path class="cls-1" d="M45.15,31.43l1.2-6.08h0l.57.56-.14,5.63s5.26,14.2,23.44,23.66h0L70.79,63C48.66,50.12,45.15,31.43,45.15,31.43Z"/><path class="cls-2" d="M46.35,25.35l.44,6.2s5.26,14.2,23.44,23.66v.22l-.18-2.58,12-4.19S56.44,35.41,46.35,25.35"/><path class="cls-1" d="M47.74,30.86S70.9,39.28,77.06,41.1c6.93,2,7.5-3.69,7.5-3.69C87.1,23.94,85.84,14.92,84.28,9c-.82-3.11-3.79-3.45-5.43-3.4h0A18.92,18.92,0,0,0,77.65,3C75.31-1.24,72,.26,72,.26,55.77,4.8,46.2,21.39,46.2,21.39Zm-.23-9.81h0ZM78.38,5.63ZM48.19,20.39C51.78,15.4,60.1,5.59,72,2.26c0,0,3.28-1.5,5.62,2.69.13.24.25.48.37.72l-.27,0C63.37,6.9,51.49,17.25,48.19,20.39Z"/><path class="cls-2" d="M77.75,5.71C63.37,6.9,51.48,17.25,48.19,20.39,51.78,15.4,60.1,5.59,72,2.26c0,0,3.28-1.5,5.62,2.69.13.24.25.48.37.72Z"/><path class="cls-3" d="M72,34a102.58,102.58,0,0,0-14.51.28l0,.07-9.75-3.46c20.49,6,28.45-14.37,17.93-20.56A40.76,40.76,0,0,1,75.88,7.43a4.7,4.7,0,0,1,.64,1.39c1.45,5.53,2,17.51-4.59,25.15Z"/><path class="cls-4" d="M84.56,37.41s-.57,5.74-7.5,3.69c-3.49-1-12.85-4.33-20-6.87l.37,0C79.56,32.44,84.65,37,84.56,37.41Z"/><path class="cls-2" d="M54.1,24.37c.42-2,5.78-3.52,3.49-5.61S46.31,25.2,46.31,25.2H39.82s-9-8.54-11.28-6.44,3.07,3.6,3.49,5.61-6-.33-6,1.68,6.12,7.86,15.42,1.5a4.11,4.11,0,0,1,3.12,0c9.31,6.36,15.43.52,15.43-1.5S53.68,26.39,54.1,24.37Z"/><rect class="cls-1" x="37.81" y="20.38" width="10.38" height="14.34" rx="2.27" ry="2.27"/><path class="cls-3" d="M37.81,26.39s.61,1.16,5.2,1.16,5.19-1.16,5.19-1.16V22.78H37.81Z"/><path class="cls-2" d="M44.36,32.77H41.65a7.11,7.11,0,0,1-3.84-1.12v.8a2.27,2.27,0,0,0,2.27,2.27h5.85a2.27,2.27,0,0,0,2.27-2.27v-.8A7.08,7.08,0,0,1,44.36,32.77Z"/></svg>';
  };
  a.ImageItemCandyGumdrop = function () {
    a.SVGImage.call(this);
    this.width = 46.1;
    this.height = 50.3;
  };
  a.ImageItemCandyGumdrop.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandyGumdrop.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.63 27.9" width="25.63" height="27.9"><defs><style>.cls-2{fill:' + c + ';}.cls-3{opacity:0.2;}.cls-5{opacity:0.5;}.cls-6{fill:#fff;}.cls-7{opacity:0.75;}</style></defs><path class="cls-2" d="M25.53,21.75,22,4.12a5.14,5.14,0,0,0-5-4.12H8.69a5.15,5.15,0,0,0-5,4.12L.1,21.75a5.14,5.14,0,0,0,5,6.15H20.49A5.14,5.14,0,0,0,25.53,21.75Z" transform="translate(0 0)"/><g class="cls-3"><path d="M25.53,21.75,22,4.12A5.12,5.12,0,0,0,19,.43a5.89,5.89,0,0,1,.33,1l3.55,17.63a5.14,5.14,0,0,1-5,6.15H2.48a5.11,5.11,0,0,1-2-.42A5.13,5.13,0,0,0,5.14,27.9H20.49A5.14,5.14,0,0,0,25.53,21.75Z" transform="translate(0 0)"/></g><g class="cls-4"><g class="cls-5"><path class="cls-6" d="M6.53,25.23a.62.62,0,0,1-.51-.7H6a.62.62,0,0,1,.7-.52h0a.6.6,0,0,1,.51.69h0a.6.6,0,0,1-.6.52h-.1Zm7.27-7.62a.62.62,0,0,1-.54-.68h0a.62.62,0,0,1,.68-.54h0a.61.61,0,0,1,.54.68h0a.62.62,0,0,1-.61.55H13.8Zm-4.87-6a.62.62,0,0,1-.59-.64h0A.61.61,0,0,1,9,10.35H9a.62.62,0,0,1,.59.64h0a.61.61,0,0,1-.61.58h0ZM3.17,18.23a.62.62,0,0,1-.59-.64h0A.61.61,0,0,1,3.22,17h0a.62.62,0,0,1,.59.64h0a.61.61,0,0,1-.61.58h0ZM9,7.12a.61.61,0,0,1,.57-.65h0a.6.6,0,0,1,.65.57h0a.61.61,0,0,1-.57.65h0A.61.61,0,0,1,9,7.12Zm11.32.47a.61.61,0,0,1-.19-.84h0a.61.61,0,0,1,.85-.19h0a.61.61,0,0,1,.19.84h0a.61.61,0,0,1-.52.29h0A.6.6,0,0,1,20.28,7.59Zm-16-1.87A.61.61,0,0,1,4,4.88H4a.61.61,0,0,1,.84-.2h0a.62.62,0,0,1,.2.85h0a.64.64,0,0,1-.52.29h0A.58.58,0,0,1,4.23,5.72Z" transform="translate(0 0)"/></g><g class="cls-7"><path class="cls-6" d="M15.65,25.83a.59.59,0,0,1-.2-.83h0a.61.61,0,0,1,.84-.21h0a.6.6,0,0,1,.2.84h0a.58.58,0,0,1-.52.29h0A.54.54,0,0,1,15.65,25.83Zm6.7,0a.59.59,0,0,1-.2-.83h0a.61.61,0,0,1,.84-.21h0a.6.6,0,0,1,.2.84h0a.58.58,0,0,1-.52.29h0A.54.54,0,0,1,22.35,25.83Zm-2.9-4.59h0a.6.6,0,0,1,.46-.73h0a.62.62,0,0,1,.73.47h0a.61.61,0,0,1-.46.73H20A.6.6,0,0,1,19.45,21.24ZM2.71,22.94a.62.62,0,0,1-.12-.86h0A.62.62,0,0,1,3.45,22h0a.61.61,0,0,1,.12.86h0a.6.6,0,0,1-.49.24h0A.63.63,0,0,1,2.71,22.94Zm8.14-1.22a.61.61,0,0,1-.66-.56h0a.61.61,0,0,1,.56-.66h0a.61.61,0,0,1,.66.55h0a.62.62,0,0,1-.56.67Zm4.39-.15a.62.62,0,0,1-.48-.73h0a.61.61,0,0,1,.72-.48h0a.61.61,0,0,1,.48.72h0a.63.63,0,0,1-.6.5h-.12Zm5.69-8.79h0a.62.62,0,0,1,.17-.85h0a.61.61,0,0,1,.85.17h0a.61.61,0,0,1-.16.85h0a.65.65,0,0,1-.34.11h0A.64.64,0,0,1,20.93,12.78Zm-3.69-.64a.61.61,0,0,1,.41-.76h0a.6.6,0,0,1,.76.4h0a.61.61,0,0,1-.4.77h0l-.18,0h0A.61.61,0,0,1,17.24,12.14Zm-4.46,1a.61.61,0,0,1-.31-.81h0a.6.6,0,0,1,.8-.31h0a.61.61,0,0,1,.32.81h0a.61.61,0,0,1-.56.36h0A.7.7,0,0,1,12.78,13.15ZM4.71,11.91a.61.61,0,0,1-.31-.81h0a.6.6,0,0,1,.8-.31h0a.61.61,0,0,1,.32.81h0A.61.61,0,0,1,5,12H5A.7.7,0,0,1,4.71,11.91Zm3.23,4.85a.6.6,0,0,1-.31-.8h0a.6.6,0,0,1,.8-.32h0a.62.62,0,0,1,.32.82h0a.62.62,0,0,1-.56.35h0A.53.53,0,0,1,7.94,16.76Zm6.83-7.43a.6.6,0,0,1,.46-.73h0a.6.6,0,0,1,.73.46h0a.61.61,0,0,1-.46.73h0l-.14,0h0A.61.61,0,0,1,14.77,9.33Zm1.77-3.65h0A.62.62,0,0,1,16,5h0a.6.6,0,0,1,.64-.57h0a.61.61,0,0,1,.57.65h0a.61.61,0,0,1-.61.57h0Zm2.47,12h0a.62.62,0,0,1-.58-.65h0a.6.6,0,0,1,.64-.57h0a.61.61,0,0,1,.57.65h0a.61.61,0,0,1-.61.57h0ZM10.68,3.64A.61.61,0,0,1,11,2.85h0a.61.61,0,0,1,.79.36h0a.61.61,0,0,1-.36.79h0a.52.52,0,0,1-.21,0h0A.61.61,0,0,1,10.68,3.64Zm-4.55.22a.61.61,0,0,1-.55-.66h0a.61.61,0,0,1,.66-.56h0a.62.62,0,0,1,.56.67h0a.63.63,0,0,1-.61.56H6.13Z" transform="translate(0 0)"/></g></g></svg>';
  };
  a.ImageItemCandyJellybean = function () {
    a.SVGImage.call(this);
    this.width = 53.2;
    this.height = 28;
  };
  a.ImageItemCandyJellybean.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandyJellybean.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.62 13.95" width="26.62" height="13.95"><defs><style>.cls-1{fill:' + c + ';}.cls-2{fill:none;stroke:#f2f2f2;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.69px;opacity:0.3;}</style></defs><path class="cls-1" d="M13.31,14C9.83,14,0,13.11,0,5.71H0A6.11,6.11,0,0,1,.71,2.83,5,5,0,0,1,6.37.31a33.28,33.28,0,0,0,6.94,1.17C17.42,1.48,19.86,0,21.62,0c2.78,0,5,2.62,5,5.71h0C26.62,13.11,16.79,14,13.31,14Z"/><path class="cls-2" d="M3.66,8.33A20.65,20.65,0,0,0,14,10.87c6.34,0,9.52-2.54,9.52-2.54"/></svg>';
  };
  a.ImageItemCandyMintSwirl = function () {
    a.SVGImage.call(this);
    this.width = 63.6;
    this.height = 62.9;
  };
  a.ImageItemCandyMintSwirl.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandyMintSwirl.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.25 27.9" width="28.25" height="27.9"><defs><style>.cls-2{fill:#f2faff;}.cls-4{fill:' + a.Constants.SVG_COLOR_MATRIX[c].highlight + ';}.cls-5{opacity:0.2;}</style></defs><circle class="cls-2" cx="14.3" cy="13.95" r="13.95"/><g class="cls-3"><path class="cls-4" d="M1,19.42A12.63,12.63,0,0,1,2,7.77,14.52,14.52,0,0,1,6.6,3.22a8.69,8.69,0,0,1,1.47-.8,10.92,10.92,0,0,1,1.56-.6,12.7,12.7,0,0,1,3.46-.65,13.09,13.09,0,0,1,12.08,7,12.35,12.35,0,0,1,1.26,3.54,11.25,11.25,0,0,1,.09,4,11.81,11.81,0,0,1-3.75,7,11.84,11.84,0,0,1-3.45,2.09,12.21,12.21,0,0,1-1.93.58,11.22,11.22,0,0,1-2.16.21A10,10,0,0,1,7.64,22a9.87,9.87,0,0,1-1.92-3.79,8.47,8.47,0,0,1,0-4.47A8.32,8.32,0,0,1,7.94,9.85a8.23,8.23,0,0,1,3.87-2,7,7,0,0,1,4.56.44,6.56,6.56,0,0,1,3.82,5.25A5.71,5.71,0,0,1,20,15.82a5.38,5.38,0,0,1-2.92,3.31,5.22,5.22,0,0,1-2.17.42,4.43,4.43,0,0,1-2.15-.67,4,4,0,0,1-1.86-3.64,3.07,3.07,0,0,1,2.57-2.76,2.24,2.24,0,0,1,1.77.49A1.94,1.94,0,0,1,16,14.42v0a.21.21,0,0,1-.42,0,1.48,1.48,0,0,0-1.84-1.09,1.91,1.91,0,0,0-1.38,1.82,2.37,2.37,0,0,0,1.28,2A2.51,2.51,0,0,0,16,17.15a3.05,3.05,0,0,0,1.5-1.94,3.38,3.38,0,0,0-.4-2.44,3.85,3.85,0,0,0-1.9-1.64A3.73,3.73,0,0,0,12.7,11a4.78,4.78,0,0,0-3.39,3.54,5.59,5.59,0,0,0,1.34,4.79,6.15,6.15,0,0,0,4.58,2.07A7.45,7.45,0,0,0,20,19.51,7.7,7.7,0,0,0,22.43,15a8.32,8.32,0,0,0-.85-5.1,9.71,9.71,0,0,0-8.53-5.41A12.05,12.05,0,0,0,3.77,9.15,12.4,12.4,0,0,0,1.4,19.33a.2.2,0,0,1-.16.25A.21.21,0,0,1,1,19.47Z"/></g><path class="cls-5" d="M23,3.12a13.88,13.88,0,0,1-19.5,19.5A13.88,13.88,0,1,0,23,3.12Z"/></svg>';
  };
  a.ImageItemCandyMintWheel = function () {
    a.SVGImage.call(this);
    this.height = this.width = 62.8;
  };
  a.ImageItemCandyMintWheel.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandyMintWheel.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 27.9" width="27.9" height="27.9"><defs><style>.cls-1{fill:#f2f2f2;}.cls-2{fill:' + c + ';}.cls-3{opacity:0.2;}</style></defs><circle class="cls-1" cx="13.95" cy="13.95" r="13.95"/><path class="cls-2" d="M27.42,10.35a14,14,0,0,0-6.49-8.47A13.94,13.94,0,0,0,14,14,13.94,13.94,0,0,1,27.42,10.35Z"/><path class="cls-2" d="M17.55,27.42A14,14,0,0,0,26,20.93,13.93,13.93,0,0,0,14,14,13.94,13.94,0,0,1,17.55,27.42Z"/><path class="cls-2" d="M.49,17.55A14,14,0,0,0,7,26,13.94,13.94,0,0,0,14,14,13.92,13.92,0,0,1,.49,17.55Z"/><path class="cls-2" d="M10.35.49A14,14,0,0,0,1.88,7,13.94,13.94,0,0,0,14,14,13.92,13.92,0,0,1,10.35.49Z"/><path class="cls-3" d="M22.6,3A14,14,0,0,1,3,22.6,14,14,0,1,0,22.6,3Z"/></svg>';
  };
  a.ImageItemCandySprinkle = function () {
    a.SVGImage.call(this);
    this.width = 14;
    this.height = 12.6;
  };
  a.ImageItemCandySprinkle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandySprinkle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.06 6.3" width="7.06" height="6.3"><defs><style>.cls-1{fill:none;stroke:' + c + ';stroke-linecap:round;stroke-miterlimit:10;stroke-width:2.1px;}</style></defs><line class="cls-1" x1="1.05" y1="1.05" x2="6.02" y2="5.26"/></svg>';
  };
  a.ImageItemCandySprinkleLeaf = function () {
    a.SVGImage.call(this);
    this.width = 15.6;
    this.height = 10.7;
  };
  a.ImageItemCandySprinkleLeaf.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandySprinkleLeaf.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 10.74" width="15.59" height="10.74"><defs><style>.cls-1{fill:' + c + ';}</style></defs><path class="cls-1" d="M15.56,9a.35.35,0,0,0-.16-.2h0c-2-1.37-1.38-2.66-1.15-3.15a.33.33,0,0,0,0-.32A.33.33,0,0,0,14,5.17,3.49,3.49,0,0,1,11.17,4.1a1.31,1.31,0,0,1,0-1.34.32.32,0,0,0-.08-.38.33.33,0,0,0-.38-.06,3.74,3.74,0,0,1-3.37-.23,1.92,1.92,0,0,1-1-1.74.31.31,0,0,0-.16-.3.32.32,0,0,0-.34,0A7,7,0,0,1,1,1.2a.34.34,0,0,0-.34.19L0,2.77a.32.32,0,0,0,.08.38A7.07,7.07,0,0,1,2.29,7.62a.35.35,0,0,0,.16.25l0,0a.33.33,0,0,0,.34-.07h0a1.92,1.92,0,0,1,2-.35A3.73,3.73,0,0,1,7.12,9.93a.33.33,0,0,0,.29.26A.32.32,0,0,0,7.75,10a1.29,1.29,0,0,1,1-.86,3.45,3.45,0,0,1,2.59,1.47.3.3,0,0,0,.3.11.31.31,0,0,0,.25-.18c.23-.48.83-1.76,3.15-1.09h0a.36.36,0,0,0,.27,0,.43.43,0,0,0,.21-.19A.36.36,0,0,0,15.56,9Z"/></svg>';
  };
  a.ImageItemCandySprinkleRound = function () {
    a.SVGImage.call(this);
    this.height = this.width = 7.7;
  };
  a.ImageItemCandySprinkleRound.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandySprinkleRound.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.66 7.66" width="7.66" height="7.66"><defs><style>.cls-1{fill:' + c + ';}.cls-2{opacity:0.2;}</style></defs><circle class="cls-1" cx="3.83" cy="3.83" r="3.83"/><path class="cls-2" d="M6.17.82A3.86,3.86,0,0,1,6.68,2.7,3.83,3.83,0,0,1,2.85,6.53,3.78,3.78,0,0,1,.51,5.71,3.82,3.82,0,1,0,6.17.82Z"/></svg>';
  };
  a.ImageItemCandySprinkleTree = function () {
    a.SVGImage.call(this);
    this.width = 17;
    this.height = 21;
  };
  a.ImageItemCandySprinkleTree.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandySprinkleTree.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.52 10.45" width="8.52" height="10.45"><defs><style>.cls-1{fill:' + c + ';}</style></defs><path class="cls-1" d="M8.5,9.18l-2-2.77h1.2a.12.12,0,0,0,.09-.19l-2-2.7h.65a.12.12,0,0,0,.11-.18L4.36.06a.11.11,0,0,0-.2,0L2,3.34a.11.11,0,0,0,.1.18h.65l-2,2.7a.12.12,0,0,0,.1.19H2.1L0,9.18a.11.11,0,0,0,.09.19H3.5v1a.12.12,0,0,0,.12.12H4.9A.12.12,0,0,0,5,10.33v-1H8.4A.12.12,0,0,0,8.5,9.18Z"/></svg>';
  };
  a.ImageItemCandySucker = function () {
    a.SVGImage.call(this);
    this.width = 40.9;
    this.height = 100.7;
  };
  a.ImageItemCandySucker.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandySucker.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.27 67.14" width="27.27" height="67.14"><defs><style>.cls-1{fill:#f2f2f2;}.cls-2{fill:' + c.dark + ";}.cls-3{fill:none;stroke:" + c.medium + ";stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.04px;}.cls-4{fill:" + c.primary + ';}.cls-5{opacity:0.2;}</style></defs><rect class="cls-1" x="12.12" y="6.22" width="3.04" height="60.92"/><path class="cls-2" d="M11.8,26.77a21.86,21.86,0,0,0-4.49,3.64C6.06,31.68,4.9,33.1,4.74,34.68a2.09,2.09,0,0,0,.9,2.09,1.67,1.67,0,0,0,1.12.28,2.06,2.06,0,0,0,.86-.35,6.92,6.92,0,0,0,1.08-.84A2.19,2.19,0,0,1,10,35.08a1.69,1.69,0,0,1,1.3.56c.31.32,1,1.55,2.32,1.55s2-1.23,2.31-1.55a1.69,1.69,0,0,1,1.3-.56,2.24,2.24,0,0,1,1.33.78,6.84,6.84,0,0,0,1.07.84,2.06,2.06,0,0,0,.86.35,1.7,1.7,0,0,0,1.13-.28,2.11,2.11,0,0,0,.9-2.09c-.17-1.58-1.32-3-2.57-4.27a22.19,22.19,0,0,0-4.5-3.64Z"/><path class="cls-3" d="M15.15,28.73a27.11,27.11,0,0,1,2,4.62"/><path class="cls-3" d="M12.12,28.73a27.93,27.93,0,0,0-2,4.62"/><circle class="cls-4" cx="13.64" cy="13.64" r="13.64"/><path class="cls-5" d="M24.13,4.92a13.79,13.79,0,0,1,.19,7.77A16.8,16.8,0,0,1,17,22.26,22.47,22.47,0,0,1,6.89,25.49,13.64,13.64,0,0,0,24.13,4.92Z"/></svg>';
  };
  a.ImageItemCandyWrapper1 = function () {
    a.SVGImage.call(this);
    this.width = 100.83;
    this.height = 41.8;
  };
  a.ImageItemCandyWrapper1.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandyWrapper1.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.22 27.87" width="67.22" height="27.87"><defs><style>.cls-1{fill:' + c.dark + ";}.cls-2{fill:none;stroke:" + c.medium + ";stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.06px;}.cls-3{fill:" + c.primary + ';}.cls-4{opacity:0.2;}</style></defs><path class="cls-1" d="M46.07,16.71a37.83,37.83,0,0,0,7.38,6.8c2.59,1.9,5.47,3.65,8.67,3.9A5,5,0,0,0,66.37,26a2.16,2.16,0,0,0,.57-1.7,2.8,2.8,0,0,0-.72-1.3,11.92,11.92,0,0,0-1.7-1.63c-.69-.55-1.51-1.13-1.6-2a2.35,2.35,0,0,1,1.15-2c.64-.47,3.15-1.53,3.15-3.51s-2.51-3-3.15-3.5a2.36,2.36,0,0,1-1.15-2c.09-.88.91-1.46,1.6-2a12,12,0,0,0,1.7-1.64,2.81,2.81,0,0,0,.72-1.29,2.19,2.19,0,0,0-.57-1.71A5,5,0,0,0,62.12.46c-3.2.25-6.08,2-8.67,3.89a38.14,38.14,0,0,0-7.38,6.8Z"/><path class="cls-1" d="M21.15,16.71a37.83,37.83,0,0,1-7.38,6.8c-2.6,1.9-5.47,3.65-8.67,3.9A5,5,0,0,1,.85,26a2.13,2.13,0,0,1-.57-1.7A2.71,2.71,0,0,1,1,23a12.39,12.39,0,0,1,1.69-1.63c.69-.55,1.51-1.13,1.6-2a2.34,2.34,0,0,0-1.14-2C2.51,17,0,15.91,0,13.93s2.51-3,3.15-3.5a2.35,2.35,0,0,0,1.14-2c-.09-.88-.91-1.46-1.6-2A12.47,12.47,0,0,1,1,4.82,2.73,2.73,0,0,1,.28,3.53,2.15,2.15,0,0,1,.85,1.82,5,5,0,0,1,5.1.46c3.2.25,6.07,2,8.67,3.89a38.14,38.14,0,0,1,7.38,6.8Z"/><path class="cls-2" d="M50.47,11.64a80.27,80.27,0,0,1,10.4-3"/><path class="cls-2" d="M50.47,16.23a80.27,80.27,0,0,0,10.4,3"/><path class="cls-2" d="M16.74,11.64a80.12,80.12,0,0,0-10.39-3"/><path class="cls-2" d="M16.74,16.23a80.12,80.12,0,0,1-10.39,3"/><circle class="cls-3" cx="33.61" cy="13.93" r="13.93"/><path class="cls-4" d="M44.33,5A14.08,14.08,0,0,1,44.52,13a17.07,17.07,0,0,1-7.47,9.78,23,23,0,0,1-10.33,3.31A13.94,13.94,0,0,0,44.33,5Z"/></svg>';
  };
  a.ImageItemCandyWrapper2 = function () {
    a.SVGImage.call(this);
    this.width = 117.2;
    this.height = 28;
  };
  a.ImageItemCandyWrapper2.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemCandyWrapper2.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.61 13.95" width="58.61" height="13.95"><defs><style>.cls-1{fill:#f2f2f2;}.cls-2{fill:' + c.primary + ";}.cls-3{fill:" + c.dark + ";}.cls-4{fill:" + c.medium + ';}.cls-5{opacity:0.1;}</style></defs><rect class="cls-1" x="10.93" y="1.72" width="36.75" height="11.78" rx="2.84" ry="2.84"/><path class="cls-2" d="M16.83,1.72h-3a2.82,2.82,0,0,0-1.33.34l5.33,11.43h4.55Z"/><path class="cls-2" d="M14.74,13.49,10.93,5.33v5.32a2.84,2.84,0,0,0,2.85,2.84Z"/><polygon class="cls-2" points="24.69 1.72 20.15 1.72 25.64 13.49 30.19 13.49 24.69 1.72"/><polygon class="cls-2" points="32.55 1.72 28.01 1.72 33.5 13.49 38.05 13.49 32.55 1.72"/><path class="cls-2" d="M45.82,13.31,40.41,1.72H35.87l5.49,11.77h3.47A3,3,0,0,0,45.82,13.31Z"/><path class="cls-2" d="M44.83,1.72h-1.1l4,8.47V4.56A2.84,2.84,0,0,0,44.83,1.72Z"/><path class="cls-3" d="M47.68,8.41a19.3,19.3,0,0,0,3.81,3.52,9.07,9.07,0,0,0,4.49,2,2.61,2.61,0,0,0,2.19-.7,1.14,1.14,0,0,0,.3-.89,1.64,1.64,0,0,0-.37-.67,7,7,0,0,0-.88-.84c-.36-.28-.78-.58-.83-1a1.22,1.22,0,0,1,.59-1C57.32,8.55,58.61,8,58.61,7S57.32,5.4,57,5.16a1.2,1.2,0,0,1-.59-1c0-.46.47-.76.83-1a6.35,6.35,0,0,0,.88-.84,1.64,1.64,0,0,0,.37-.67,1.11,1.11,0,0,0-.3-.88A2.59,2.59,0,0,0,56,0a9.16,9.16,0,0,0-4.49,2,19.92,19.92,0,0,0-3.81,3.52Z"/><path class="cls-3" d="M10.93,8.41a19.3,19.3,0,0,1-3.81,3.52,9.07,9.07,0,0,1-4.49,2,2.61,2.61,0,0,1-2.19-.7,1.14,1.14,0,0,1-.3-.89,1.64,1.64,0,0,1,.37-.67,7,7,0,0,1,.88-.84c.36-.28.78-.58.83-1a1.22,1.22,0,0,0-.59-1C1.29,8.55,0,8,0,7S1.29,5.4,1.63,5.16a1.2,1.2,0,0,0,.59-1c-.05-.46-.47-.76-.83-1a6.35,6.35,0,0,1-.88-.84A1.64,1.64,0,0,1,.14,1.6,1.11,1.11,0,0,1,.44.72,2.59,2.59,0,0,1,2.63,0,9.16,9.16,0,0,1,7.12,2a19.92,19.92,0,0,1,3.81,3.52Z"/><path class="cls-4" d="M50,6.06a.27.27,0,0,1-.26-.18.27.27,0,0,1,.16-.35A42.36,42.36,0,0,1,55.27,4a.28.28,0,0,1,.12.54,40.18,40.18,0,0,0-5.34,1.55Z"/><path class="cls-4" d="M55.33,10h-.06a42.36,42.36,0,0,1-5.41-1.57.27.27,0,0,1-.16-.35.27.27,0,0,1,.35-.16,42.43,42.43,0,0,0,5.34,1.55.27.27,0,0,1,.21.32A.28.28,0,0,1,55.33,10Z"/><path class="cls-4" d="M8.65,6.06H8.56A40.18,40.18,0,0,0,3.22,4.5.28.28,0,0,1,3,4.17.27.27,0,0,1,3.34,4,42.36,42.36,0,0,1,8.75,5.53a.27.27,0,0,1,.16.35A.27.27,0,0,1,8.65,6.06Z"/><path class="cls-4" d="M3.28,10A.28.28,0,0,1,3,9.78a.27.27,0,0,1,.21-.32A42.43,42.43,0,0,0,8.56,7.91a.27.27,0,0,1,.35.16.27.27,0,0,1-.16.35A42.36,42.36,0,0,1,3.34,10Z"/><g class="cls-5"><path d="M44.83,10.12h-31a2.85,2.85,0,0,1-2.85-2.85v3.38a2.84,2.84,0,0,0,2.85,2.84H44.83a2.84,2.84,0,0,0,2.85-2.84V7.27A2.85,2.85,0,0,1,44.83,10.12Z"/></g></svg>';
  };
  a.ImageItemConfettiCurve = function () {
    a.SVGImage.call(this);
    this.width = 40.2;
    this.height = 42.34;
  };
  a.ImageItemConfettiCurve.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemConfettiCurve.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.2 42.34" width="40.2" height="42.34"><defs><style>.cls-1{fill:' + c + ';}</style></defs><path class="cls-1" d="M39.85,42.34c-13.69-.28-24.19-4.59-31.21-12.8C-2,17.16.13.69.23,0L17,2.28,8.62,1.14,17,2.22c0,.09-1.12,9.86,4.56,16.39,3.75,4.33,10,6.61,18.61,6.79Z"/></svg>';
  };
  a.ImageItemConfettiTriangle = function () {
    a.SVGImage.call(this);
    this.height = this.width = 30.2;
  };
  a.ImageItemConfettiTriangle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemConfettiTriangle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.24 30.24" width="30.24" height="30.24"><defs><style>.cls-1{fill:' + c + ';}</style></defs><polygon class="cls-1" points="30.24 30.24 22.14 0 0 22.14 30.24 30.24"/></svg>';
  };
  a.ImageItemConfettiCircle = function () {
    a.SVGImage.call(this);
    this.height = this.width = 19.7;
  };
  a.ImageItemConfettiCircle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemConfettiCircle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.73 19.73" width="19.73" height="19.73"><defs><style>.cls-1{fill:' + c + ';}</style></defs><circle class="cls-1" cx="9.86" cy="9.86" r="9.86"/></svg>';
  };
  a.ImageItemConfettiOutlinedCircle = function () {
    a.SVGImage.call(this);
    this.height = this.width = 25.51;
  };
  a.ImageItemConfettiOutlinedCircle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemConfettiOutlinedCircle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.51 25.51" width="25.51" height="25.51"><defs><style>.cls-1{fill:' + c + ';}</style></defs><path class="cls-1" d="M12.75,25.51A12.76,12.76,0,1,1,25.51,12.76,12.76,12.76,0,0,1,12.75,25.51Zm0-19.73a7,7,0,1,0,7,7A7,7,0,0,0,12.75,5.78Z"/></svg>';
  };
  a.ImageItemConfettiSquiggle = function () {
    a.SVGImage.call(this);
    this.width = 35.9;
    this.height = 58.88;
  };
  a.ImageItemConfettiSquiggle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemConfettiSquiggle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.91 58.88" width="35.91" height="58.88"><defs><style>.cls-1{fill:' + c + ';}</style></defs><path class="cls-1" d="M29.71,58.88a4.8,4.8,0,0,1-4-2.12c-2.93-4.35-1.16-8.64-.1-11.21a9.38,9.38,0,0,0,.79-2.37c-.28,0-1.56,0-2.41,0-2.79,0-7.42,0-10.35-4.31s-1.15-8.64-.09-11.21a9.25,9.25,0,0,0,.79-2.37c-.28,0-1.56,0-2.41,0-2.76,0-7.42.05-10.35-4.3S.45,12.27,1.51,9.71A9.3,9.3,0,0,0,2.3,7.33,4.69,4.69,0,0,1,3.6.8a4.76,4.76,0,0,1,6.59,1.32c2.92,4.35,1.15,8.65.09,11.21a9.82,9.82,0,0,0-.8,2.38c.28,0,1.56,0,2.41,0,2.77,0,7.43-.05,10.35,4.3s1.16,8.64.09,11.21a10.12,10.12,0,0,0-.79,2.37c.28.05,1.57,0,2.41,0,2.77,0,7.43,0,10.36,4.3s1.15,8.65.09,11.21a9.3,9.3,0,0,0-.79,2.38,4.69,4.69,0,0,1-1.3,6.54A4.61,4.61,0,0,1,29.71,58.88Z"/></svg>';
  };
  a.ImageItemOrnamentRound1 = function () {
    a.SVGImage.call(this);
    this.width = 44.6;
    this.height = 59.6;
  };
  a.ImageItemOrnamentRound1.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentRound1.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.57 59.61" width="44.57" height="59.61"><defs><style>.cls-1{fill:' + c + ';}.cls-2{fill:#231f20;opacity:0.1;}.cls-3{fill:#607d8b;}.cls-4{fill:none;stroke:#607d8b;stroke-miterlimit:10;stroke-width:1.03px;}</style></defs><path class="cls-1" d="M25.87,15.63V11.3H18.26v4.35a22.18,22.18,0,1,0,7.61,0Z"/><path class="cls-2" d="M38,21.74a22,22,0,0,0-12.15-6.15V11.3h-3.8v4a24.38,24.38,0,0,1,.17,44.29A22.15,22.15,0,0,0,38,21.74Z"/><path class="cls-3" d="M17.78,8.73a.1.1,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.07l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.11.11,0,0,0,.15,0L22,13.18a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.1.1,0,0,1,.14,0l1.22,1.22a.1.1,0,0,0,.17-.07V8.83a.09.09,0,0,0-.1-.1Z"/><path class="cls-4" d="M22.33,12.25V2.45A1.93,1.93,0,0,0,20.4.52h0a1.92,1.92,0,0,0-1.93,1.93V5.24"/></svg>';
  };
  a.ImageItemOrnamentRound2 = function () {
    a.SVGImage.call(this);
    this.width = 51.4;
    this.height = 59.6;
  };
  a.ImageItemOrnamentRound2.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentRound2.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51.41 59.61" width="51.41" height="59.61"><defs><style>.cls-1,.cls-5,.cls-7,.cls-8{fill:none;}.cls-2{fill:' + c + ';}.cls-3{fill:#231f20;opacity:0.1;}.cls-4{fill:#607d8b;}.cls-5{stroke:#607d8b;stroke-width:1.03px;}.cls-5,.cls-7,.cls-8{stroke-miterlimit:10;}.cls-6{clip-path:url(#clip-path);}.cls-7,.cls-8{stroke:#fff;}.cls-7{stroke-width:2.84px;}.cls-8{stroke-linecap:round;stroke-width:1.06px;}</style><clipPath id="clip-path"><path class="cls-1" d="M29.9,15.63V11.3H22.3v4.35a22.18,22.18,0,1,0,7.6,0Z"/></clipPath></defs><path class="cls-2" d="M29.9,15.63V11.3H22.3v4.35a22.18,22.18,0,1,0,7.6,0Z"/><path class="cls-3" d="M41.79,21.74a22.07,22.07,0,0,0-12.15-6.15V11.3H25.83v4A24.37,24.37,0,0,1,26,59.61,22.15,22.15,0,0,0,41.79,21.74Z"/><path class="cls-4" d="M21.9,8.73a.09.09,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.07l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.11.11,0,0,1,.15,0l1.32,1.32a.1.1,0,0,0,.14,0L29,13.18a.1.1,0,0,1,.14,0L30.4,14.4a.1.1,0,0,0,.17-.07V8.83a.09.09,0,0,0-.1-.1Z"/><path class="cls-5" d="M26.44,12.25V2.45A1.92,1.92,0,0,0,24.51.52h0a1.93,1.93,0,0,0-1.93,1.93V5.24"/><g class="cls-6"><line class="cls-7" y1="28.96" x2="51.41" y2="28.96"/><line class="cls-7" y1="45.32" x2="51.41" y2="45.32"/><line class="cls-8" x1="11.66" y1="35.97" x2="16.14" y2="38.56"/><line class="cls-8" x1="11.66" y1="38.56" x2="16.14" y2="35.97"/><line class="cls-8" x1="13.9" y1="39.85" x2="13.9" y2="34.68"/><line class="cls-8" x1="23.88" y1="35.97" x2="28.36" y2="38.56"/><line class="cls-8" x1="23.88" y1="38.56" x2="28.36" y2="35.97"/><line class="cls-8" x1="26.12" y1="39.85" x2="26.12" y2="34.68"/><line class="cls-8" x1="36.09" y1="35.97" x2="40.58" y2="38.56"/><line class="cls-8" x1="36.09" y1="38.56" x2="40.58" y2="35.97"/><line class="cls-8" x1="38.34" y1="39.85" x2="38.34" y2="34.68"/><circle class="cls-1" cx="32.27" cy="37.23" r="1.42"/><circle class="cls-1" cx="19.94" cy="37.23" r="1.42"/><circle class="cls-1" cx="7.86" cy="37.23" r="1.42"/><circle class="cls-1" cx="44.48" cy="37.23" r="1.42"/></g></svg>';
  };
  a.ImageItemOrnamentRound3 = function () {
    a.SVGImage.call(this);
    this.width = 44.5;
    this.height = 59.6;
  };
  a.ImageItemOrnamentRound3.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentRound3.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.57 59.61" width="44.57" height="59.61"><defs><style>.cls-1{fill:' + c.primary + ";}.cls-2{fill:" + c.dark + ';}.cls-3{fill:#fff;}.cls-4{fill:#231f20;opacity:0.1;}.cls-5{fill:#607d8b;}.cls-6{fill:none;stroke:#607d8b;stroke-miterlimit:10;stroke-width:1.03px;}</style></defs><path class="cls-1" d="M25.87,15.63V11.3H18.26v4.35a22.18,22.18,0,1,0,7.61,0Z"/><circle class="cls-2" cx="9.84" cy="27.39" r="1.41"/><circle class="cls-3" cx="16.73" cy="35.71" r="1.41"/><circle class="cls-2" cx="27.56" cy="35.72" r="1.41"/><circle class="cls-1" cx="20.27" cy="28.75" r="1.41"/><circle class="cls-3" cx="29.69" cy="20.85" r="1.41"/><circle class="cls-3" cx="30.38" cy="43.3" r="1.41"/><circle class="cls-3" cx="31.78" cy="30.15" r="1.41"/><circle class="cls-3" cx="18.34" cy="19.82" r="1.41"/><circle class="cls-2" cx="31.1" cy="52.04" r="1.41"/><circle class="cls-2" cx="14.06" cy="44.71" r="1.41"/><circle class="cls-1" cx="39.63" cy="39.94" r="1.41"/><circle class="cls-3" cx="8.43" cy="49.53" r="1.41"/><circle class="cls-1" cx="5.02" cy="35.71" r="1.41"/><circle class="cls-1" cx="20.27" cy="41.6" r="1.41"/><circle class="cls-1" cx="20.95" cy="54.85" r="1.41"/><path class="cls-4" d="M38,21.74a22,22,0,0,0-12.15-6.15V11.3h-3.8v4a24.38,24.38,0,0,1,.17,44.29A22.15,22.15,0,0,0,38,21.74Z"/><path class="cls-5" d="M17.87,8.73a.09.09,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.07l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.1.1,0,0,1,.14,0l1.32,1.32a.11.11,0,0,0,.15,0L25,13.18a.1.1,0,0,1,.14,0l1.22,1.22a.1.1,0,0,0,.17-.07V8.83a.1.1,0,0,0-.1-.1Z"/><path class="cls-6" d="M22.41,12.25V2.45A1.92,1.92,0,0,0,20.48.52h0a1.93,1.93,0,0,0-1.93,1.93V5.24"/></svg>';
  };
  a.ImageItemOrnamentSkinny1 = function () {
    a.SVGImage.call(this);
    this.width = 23.4;
    this.height = 63.1;
  };
  a.ImageItemOrnamentSkinny1.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentSkinny1.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.43 63.08" width="23.43" height="63.08"><defs><style>.cls-1{fill:' + c + ';}.cls-2{fill:#231f20;opacity:0.06;}.cls-3{fill:#607d8b;}.cls-4{fill:none;stroke:#607d8b;stroke-miterlimit:10;stroke-width:1.03px;}</style></defs><path class="cls-1" d="M17.74,16.21a6,6,0,0,0-2.3-1.76V8.66H8v5.79a6,6,0,0,0-2.3,1.76C-8.31,35.4,7.5,58.11,11,62.75a.86.86,0,0,0,1.35,0C15.93,58.11,31.74,35.4,17.74,16.21Z"/><path class="cls-2" d="M17.74,16.21a6,6,0,0,0-2.3-1.76V8.66H12.06v5.79c10.62,21.67,2.67,34.7-2,46.91.4.57.75,1,1,1.39a.86.86,0,0,0,1.35,0C15.93,58.11,31.74,35.4,17.74,16.21Z"/><path class="cls-3" d="M7.5,7.31a.09.09,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.08l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.1.1,0,0,1,.14,0l1.32,1.32a.11.11,0,0,0,.15,0l1.32-1.32a.1.1,0,0,1,.14,0L16,13a.1.1,0,0,0,.17-.08V7.41a.1.1,0,0,0-.1-.1Z"/><circle class="cls-4" cx="11.78" cy="3.98" r="3.47"/></svg>';
  };
  a.ImageItemOrnamentSkinny2 = function () {
    a.SVGImage.call(this);
    this.width = 25.2;
    this.height = 63.1;
  };
  a.ImageItemOrnamentSkinny2.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentSkinny2.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.2 63.1" width="25.2" height="63.1" style="enable-background:new 0 0 25.2 63.1;" xml:space="preserve"><style type="text/css">.st0{fill:' + c + ';}.st1{fill:#FFFFFF;}.st2{opacity:.06;fill:#231F20;enable-background:new;}.st3{fill:#607D8B;}</style><path class="st0" d="M18.6,16.2c-0.6-0.8-1.4-1.4-2.3-1.8V8.7H8.8v5.8c-0.9,0.4-1.7,1-2.3,1.8c-14,19.2,1.8,41.9,5.4,46.5 c0.3,0.4,0.8,0.4,1.2,0.1c0.1,0,0.1-0.1,0.1-0.1C16.8,58.1,32.6,35.4,18.6,16.2z"/><g><path class="st1" d="M0.9,35.3c0,0.4,0,0.8,0.1,1.2l3.1,2l4.4-2.7L4,33.2L0.9,35.3z"/><polygon class="st1" points="8.4,35.9 12.5,38.5 16.8,35.9 12.5,33.2 "/><path class="st1" d="M20.9,33.2l-4,2.6l4,2.7l3.3-2c0-0.4,0.1-0.8,0.1-1.3L20.9,33.2z"/></g><path class="st2" d="M18.6,16.2c-0.6-0.8-1.4-1.4-2.3-1.8V8.7h-3.4v5.8c10.6,21.7,2.7,34.7-2,46.9c0.4,0.6,0.7,1,1,1.4 c0.3,0.4,0.8,0.4,1.2,0.1c0.1,0,0.1-0.1,0.1-0.1C16.8,58.1,32.6,35.4,18.6,16.2z"/><path class="st3" d="M16.9,7.3C16.9,7.3,16.9,7.3,16.9,7.3h-2.1c1.1-0.7,1.8-1.9,1.8-3.3c0-2.2-1.8-4-4-4c-2.2,0-4,1.8-4,4 c0,1.4,0.7,2.6,1.8,3.3H8.3c-0.1,0-0.1,0-0.1,0.1v5.5c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.2-1.2c0,0,0.1,0,0.1,0l1.3,1.3 c0,0,0.1,0,0.1,0l1.3-1.3c0,0,0.1,0,0.1,0l1.3,1.3c0,0,0.1,0,0.1,0l1.3-1.3c0,0,0.1,0,0.1,0l1.2,1.2c0,0,0.1,0,0.1,0c0,0,0,0,0-0.1  V7.4C17,7.4,17,7.3,16.9,7.3z M9.7,4c0-1.6,1.3-3,3-3s3,1.3,3,3s-1.3,3-3,3S9.7,5.6,9.7,4z"/></svg>';
  };
  a.ImageItemOrnamentWide1 = function () {
    a.SVGImage.call(this);
    this.width = 51.25;
    this.height = 49.1;
  };
  a.ImageItemOrnamentWide1.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentWide1.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.25 49.14" width="51.25" height="49.14"><defs><style>.cls-1{fill:' + c + ';}.cls-2{opacity:0.1;}.cls-3{fill:#607d8b;}.cls-4{fill:none;stroke:#607d8b;stroke-miterlimit:10;stroke-width:1.03px;}</style></defs><path class="cls-1" d="M51.19,29.16C51,26.84,49.4,22,39,18.9c-10.16-3-10.8-6-10.8-6H23s-.65,3-10.81,6C1.47,22.06.07,27.16,0,29.38H0s0,2.12,0,2.27C.21,34,2.08,39.51,14.82,43c6.7,1.84,9.24,4.24,10.2,5.79a.69.69,0,0,0,1.17,0c.95-1.55,3.49-3.94,10.19-5.79C49.32,39.45,51,33.87,51.17,31.55h0A12.64,12.64,0,0,0,51.19,29.16Z"/><path class="cls-2" d="M51.19,29.16C51,26.84,49.4,22,39,18.9c-10.16-3-10.8-6-10.8-6h-4.8s32,18.2-.19,33.91a8.31,8.31,0,0,1,1.89,2,.59.59,0,0,0,1,0C27,47.35,29.46,44.93,36.38,43,49.32,39.45,51,33.87,51.17,31.55h0A12.64,12.64,0,0,0,51.19,29.16Z"/><path class="cls-3" d="M21.34,8.73a.09.09,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.07l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.1.1,0,0,1,.14,0L27,14.5a.11.11,0,0,0,.15,0l1.32-1.32a.1.1,0,0,1,.14,0l1.22,1.22a.1.1,0,0,0,.17-.07V8.83a.1.1,0,0,0-.1-.1Z"/><path class="cls-4" d="M25.88,12.25V2.45A1.92,1.92,0,0,0,24,.52h0A1.93,1.93,0,0,0,22,2.45V5.24"/></svg>';
  };
  a.ImageItemOrnamentWide2 = function () {
    a.SVGImage.call(this);
    this.width = 51.3;
    this.height = 49.1;
  };
  a.ImageItemOrnamentWide2.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentWide2.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.27 49.14" width="51.27" height="49.14"><defs><style>.cls-1{fill:' + c + ';}.cls-2{fill:#fff;}.cls-3{opacity:0.1;}.cls-4{fill:#607d8b;}</style></defs><path class="cls-1" d="M51.19,29.17C51,26.84,49.4,22,39,18.91c-10.16-3-10.8-6-10.8-6H23s-.65,3-10.81,6C1.47,22.07.07,27.16,0,29.39H0s0,2.11,0,2.27C.21,34,2.08,39.51,14.82,43c6.7,1.85,9.24,4.24,10.2,5.79a.69.69,0,0,0,1.17,0c.95-1.55,3.49-3.94,10.19-5.79C49.32,39.46,51,33.87,51.17,31.55h0A12.56,12.56,0,0,0,51.19,29.17Z"/><polygon class="cls-2" points="31.66 26.67 29.53 27.9 29.96 26.28 29.1 26.05 28.43 28.54 26.09 29.89 26.09 27.18 27.91 25.36 27.27 24.73 26.09 25.92 26.09 23.46 25.19 23.46 25.19 25.92 24 24.73 23.37 25.36 25.19 27.18 25.19 29.89 22.84 28.54 22.18 26.05 21.31 26.28 21.75 27.9 19.62 26.67 19.17 27.45 21.3 28.68 19.68 29.11 19.91 29.98 22.4 29.31 24.74 30.67 22.4 32.02 19.91 31.35 19.68 32.22 21.3 32.65 19.17 33.88 19.62 34.66 21.75 33.43 21.31 35.05 22.18 35.28 22.84 32.8 25.19 31.44 25.19 34.15 23.37 35.97 24 36.6 25.19 35.41 25.19 37.87 26.09 37.87 26.09 35.41 27.27 36.6 27.91 35.97 26.09 34.15 26.09 31.44 28.43 32.8 29.1 35.28 29.96 35.05 29.53 33.43 31.66 34.66 32.1 33.88 29.98 32.65 31.59 32.22 31.36 31.35 28.88 32.02 26.53 30.67 28.88 29.31 31.36 29.98 31.59 29.11 29.98 28.68 32.1 27.45 31.66 26.67"/><polygon class="cls-2" points="10.77 34.15 8.95 35.97 9.59 36.6 10.77 35.41 10.77 37.87 11.67 37.87 11.67 35.41 12.86 36.6 13.49 35.97 11.67 34.15 11.67 31.44 14.01 32.8 14.68 35.28 15.54 35.05 15.11 33.43 17.24 34.66 17.69 33.88 15.56 32.65 17.18 32.22 16.95 31.35 14.46 32.02 12.12 30.67 14.46 29.31 16.95 29.98 17.18 29.11 15.56 28.68 17.69 27.45 17.24 26.67 15.11 27.9 15.54 26.28 14.68 26.05 14.01 28.54 11.67 29.89 11.67 27.18 13.49 25.36 12.86 24.73 11.67 25.92 11.67 23.46 10.77 23.46 10.77 25.92 9.59 24.73 8.95 25.36 10.77 27.18 10.77 29.89 8.43 28.54 7.76 26.05 6.9 26.28 7.33 27.9 5.2 26.67 4.75 27.45 6.88 28.68 5.26 29.11 5.5 29.98 7.98 29.31 10.33 30.67 7.98 32.02 5.5 31.35 5.26 32.22 6.88 32.65 4.75 33.88 5.2 34.66 7.33 33.43 6.9 35.05 7.76 35.28 8.43 32.8 10.77 31.44 10.77 34.15"/><polygon class="cls-2" points="46.01 32.22 45.78 31.35 43.29 32.02 40.95 30.67 43.3 29.31 45.78 29.98 46.01 29.11 44.39 28.68 46.52 27.45 46.07 26.67 43.94 27.9 44.38 26.28 43.51 26.05 42.85 28.54 40.5 29.89 40.5 27.18 42.32 25.36 41.69 24.73 40.5 25.92 40.5 23.46 39.61 23.46 39.61 25.92 38.42 24.73 37.79 25.36 39.61 27.18 39.61 29.89 37.26 28.54 36.6 26.05 35.73 26.28 36.16 27.9 34.03 26.67 33.59 27.45 35.72 28.68 34.1 29.11 34.33 29.98 36.81 29.31 39.16 30.67 36.81 32.02 34.33 31.35 34.1 32.22 35.72 32.65 33.59 33.88 34.03 34.66 36.16 33.43 35.73 35.05 36.6 35.28 37.26 32.8 39.61 31.44 39.61 34.15 37.79 35.97 38.42 36.6 39.61 35.41 39.61 37.87 40.5 37.87 40.5 35.41 41.69 36.6 42.32 35.97 40.5 34.15 40.5 31.44 42.85 32.8 43.51 35.28 44.38 35.05 43.94 33.43 46.07 34.66 46.52 33.88 44.39 32.65 46.01 32.22"/><path class="cls-2" d="M40.92,19.52H10.32c-.81.28-1.54.59-2.23.89H43.16C42.46,20.11,41.73,19.81,40.92,19.52Z"/><path class="cls-2" d="M11.08,41.81H40.17c.79-.29,1.52-.59,2.2-.89H8.87C9.55,41.22,10.29,41.52,11.08,41.81Z"/><g class="cls-3"><path d="M51.21,29.16C51.06,26.84,49.42,22,39,18.9c-10.16-3-10.8-6-10.8-6h-4.8s32,18.2-.19,33.91a7.92,7.92,0,0,1,1.89,2,.6.6,0,0,0,1,0C27,47.35,29.48,44.93,36.4,43c12.94-3.57,14.67-9.15,14.79-11.47h0A12.64,12.64,0,0,0,51.21,29.16Z"/></g><path class="cls-4" d="M21.36,8.73a.09.09,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.07l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.11.11,0,0,1,.15,0L27,14.5a.11.11,0,0,0,.15,0l1.32-1.32a.1.1,0,0,1,.14,0l1.22,1.22a.1.1,0,0,0,.17-.07V8.83a.1.1,0,0,0-.1-.1Z"/><path class="cls-4" d="M26.42,12.25h-1V2.45a1.42,1.42,0,1,0-2.83,0V5.24h-1V2.45a2.45,2.45,0,1,1,4.89,0Z"/></svg>';
  };
  a.ImageItemOrnamentWide3 = function () {
    a.SVGImage.call(this);
    this.width = 51;
    this.height = 49;
  };
  a.ImageItemOrnamentWide3.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemOrnamentWide3.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.25 49.14" width="51.25" height="49.14"><defs><style>.cls-1{fill:' + c.primary + ";}.cls-2{fill:" + c.medium + ';}.cls-3{opacity:0.1;}.cls-4{fill:#607d8b;}.cls-5{fill:none;stroke:#607d8b;stroke-miterlimit:10;stroke-width:1.03px;}</style></defs><path class="cls-1" d="M51.19,29.16C51,26.84,49.4,22,39,18.9c-10.16-3-10.8-6-10.8-6H23s-.65,3-10.81,6C1.47,22.06.07,27.16,0,29.38H0s0,2.12,0,2.27C.21,34,2.08,39.51,14.82,43c6.7,1.84,9.24,4.24,10.2,5.79a.69.69,0,0,0,1.17,0c.95-1.55,3.49-3.94,10.19-5.79C49.32,39.45,51,33.87,51.17,31.55h0A12.64,12.64,0,0,0,51.19,29.16Z"/><path class="cls-2" d="M51.11,28.53a5.45,5.45,0,0,0-.22-1L46,30.13,36.82,25.4l8-4.15c-.33-.18-.67-.36-1-.54l-8,4.16-9.12-4.73,6.5-3.37c-.38-.18-.74-.35-1.06-.52L25.62,19.6l-6.49-3.36-1.06.52,6.52,3.38-9.13,4.73-8-4.17c-.37.18-.71.36-1,.54l8,4.16L5.3,30.13l-5-2.57a6.3,6.3,0,0,0-.24,1l4.17,2.16-4,2.09a8.16,8.16,0,0,0,.3.92L5.3,31.21l9.12,4.72-7.63,4,1,.54,7.64-4,9.13,4.73-6,3.09,1.14.48,5.86-3,5.85,3,1.14-.48L26.66,41.2l9.12-4.73,7.63,4,1-.54-7.62-4L46,31.21l4.74,2.45a8.16,8.16,0,0,0,.3-.92l-4-2.07ZM25.62,20.68l9.13,4.72-9.13,4.73L16.5,25.4Zm-19.28,10,9.12-4.73,9.13,4.73-9.13,4.72Zm19.28,10L16.5,35.93l9.12-4.72,9.13,4.72Zm10.16-5.27-9.12-4.72,9.12-4.73,9.13,4.73Z"/><path class="cls-3" d="M51.19,29.16C51,26.84,49.4,22,39,18.9c-10.16-3-10.8-6-10.8-6h-4.8s32,18.2-.19,33.91a8.31,8.31,0,0,1,1.89,2,.59.59,0,0,0,1,0C27,47.35,29.46,44.93,36.38,43,49.32,39.45,51,33.87,51.17,31.55h0A12.64,12.64,0,0,0,51.19,29.16Z"/><path class="cls-4" d="M21.34,8.73a.09.09,0,0,0-.1.1v5.5a.1.1,0,0,0,.17.07l1.22-1.22a.1.1,0,0,1,.14,0l1.32,1.32a.1.1,0,0,0,.14,0l1.32-1.32a.1.1,0,0,1,.14,0L27,14.5a.11.11,0,0,0,.15,0l1.32-1.32a.1.1,0,0,1,.14,0l1.22,1.22a.1.1,0,0,0,.17-.07V8.83a.1.1,0,0,0-.1-.1Z"/><path class="cls-5" d="M25.88,12.25V2.45A1.92,1.92,0,0,0,24,.52h0A1.93,1.93,0,0,0,22,2.45V5.24"/></svg>';
  };
  a.ImageItemPresent = function () {
    a.SVGImage.call(this);
    this.width = 86;
    this.height = 104.6;
  };
  a.ImageItemPresent.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemPresent.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    var b = a.Constants.SVG_COLOR_MATRIX[c.complement];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.02 104.6" width="86.02" height="104.6"><defs><style>.cls-1{isolation:isolate;}.cls-2{fill:' + c.primary + ";}.cls-3{fill:" + b.primary + ";}.cls-4{fill:#221f1f;opacity:0.15;mix-blend-mode:multiply;}.cls-5{fill:" + b.dark + ";}.cls-6{fill:" + b.medium + ";}.cls-7{fill:" + b.highlight + ';}</style></defs><g class="cls-1"><rect class="cls-2" x="1.6" y="33.21" width="82.99" height="71.39"/><rect class="cls-3" x="1.46" y="59.98" width="83.11" height="17.85"/><rect class="cls-2" y="29.4" width="86.02" height="16.04"/><polygon class="cls-4" points="1.46 80.5 1.46 77.83 84.45 77.83 84.56 79.17 1.46 80.5"/><rect class="cls-3" x="34.63" y="27.58" width="16.04" height="19.68" transform="translate(5.23 80.07) rotate(-90)"/><path class="cls-3" d="M13.8,21.29S12,26.36,12.64,29.4H31S13.8,28.39,13.8,21.29Z"/><path class="cls-5" d="M31,29.4s-17.24-1-17.24-8.11C13.8,21.29,19.25,17.23,31,29.4Z"/><path class="cls-3" d="M72,20.33s1.27,6,.64,9.07H53.37S72,27.42,72,20.33Z"/><path class="cls-5" d="M53.37,29.4s18.6-2,18.6-9.07C72,20.33,65.16,17.23,53.37,29.4Z"/><path class="cls-6" d="M43.64,29.4S42.15,4.14,48.27,1.52L64.9,5.22s2.43,2.7.87,8.44c-2.06,7.63-12.4,15.74-12.4,15.74Z"/><path class="cls-3" d="M48.27,1.52S52,5.27,49,11.86c-1.09,2.41-2.12,4.89-2.92,7.26C59.42,16.61,66.17,8.57,66.19,8.56A6.7,6.7,0,0,0,64.9,5.22Z"/><path class="cls-5" d="M48.27,1.52C42.15,4.14,43.64,29.4,43.64,29.4h1.29C43.43,25.63,46,18.45,49,11.86s-.72-10.34-.72-10.34Z"/><path class="cls-5" d="M41.16,7c0-7.1-4-7-4-7-5.07,9.12,8.11,29.4,8.11,29.4C40.16,18.25,41.16,14.06,41.16,7Z"/><path class="cls-3" d="M36.14,7.67v0L17.9,9.75A13.9,13.9,0,0,0,19,14.08,77.71,77.71,0,0,0,44.72,28.89l.21.51h.3S37.42,17.37,36.14,7.67Z"/><path class="cls-7" d="M36.14,7.67a12.51,12.51,0,0,1,1-7.67S26,4.06,21.91,5.07s-4.05,4-4.05,4c0,.21,0,.42,0,.63L36.14,7.69Z"/><path class="cls-6" d="M19,14.08C22.11,21.84,31,29.4,31,29.4H45.23l-.34-.53A78.9,78.9,0,0,1,19,14.08Z"/><rect class="cls-3" x="13.07" y="66.09" width="59.16" height="17.85" transform="translate(-32.37 117.66) rotate(-90)"/><polygon class="cls-4" points="1.46 48.12 1.46 45.44 84.45 45.44 84.56 46.78 1.46 48.12"/></g></svg>';
  };
  a.ImageItemStringLight = function () {
    a.SVGImage.call(this);
    this.width = 77.3;
    this.height = 81;
  };
  a.ImageItemStringLight.prototype = Object.create(a.SVGImage.prototype);
  a.ImageItemStringLight.prototype.getSVGString = function (c) {
    c = a.Constants.SVG_COLOR_MATRIX[c];
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 77.3 80.97" width="77.3" height="80.97"><defs><style>.cls-1{fill:#333;}.cls-2{fill:#212121;}.cls-3{fill:url(#radial-gradient);}.cls-4{fill:' + c.primary + ";}.cls-5{fill:" + c.highlight + ";stroke:" + c.highlight + ';stroke-linejoin:round;stroke-width:1.8px;}</style><radialGradient id="radial-gradient" cx="234.84" cy="50" r="50" gradientTransform="translate(-189.13) scale(1.02 1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + c.highlight + '"/><stop offset="1" stop-color="' + c.highlight + '" stop-opacity="0"/></radialGradient><symbol id="New_Symbol_17" data-name="New Symbol 17" viewBox="0 0 102.32 107.18"><path class="cls-1" d="M42.05,77.24H60.27a4.08,4.08,0,0,1,4.08,4.08V103.1a4.08,4.08,0,0,1-4.08,4.08H42.05A4.08,4.08,0,0,1,38,103.1V81.32A4.08,4.08,0,0,1,42.05,77.24Z"/><polygon class="cls-2" points="37.97 97.05 64.35 97.05 64.35 102.32 37.97 102.32 37.97 97.05"/><polygon class="cls-2" points="37.97 83.24 64.35 83.24 64.35 93.13 37.97 93.13 37.97 83.24"/><ellipse class="cls-3" cx="51.16" cy="50" rx="51.16" ry="50"/><path class="cls-4" d="M26.56,65.89c0-13.59,11-41.9,24.6-41.9s24.6,28.31,24.6,41.9a24.6,24.6,0,0,1-49.2,0Z"/><path class="cls-5" d="M53.15,82.12c-10.81,0-19.58-9.45-19.58-21.11,0-4.32,1.21-10.36,3.27-16.27-3.51,7-5.72,15.68-5.72,21.21,0,10.45,7.86,18.93,17.56,18.93a16.69,16.69,0,0,0,10.54-3.8A18.3,18.3,0,0,1,53.15,82.12Z"/></symbol></defs><use width="102.32" height="107.18" transform="scale(0.76)" xlink:href="#New_Symbol_17"/></svg>';
  };
  a.ImageTextureCrayon = function () {
    a.SVGImage.call(this);
  };
  a.ImageTextureCrayon.prototype = Object.create(a.SVGImage.prototype);
  a.ImageTextureCrayon.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.71 331.89" width="396.71" height="331.89"><defs><style>.cls-1,.cls-2{fill:' + c + ';}.cls-2{fill-rule:evenodd;}.cls-3{fill:#fff;}</style></defs><title>crayon_texture</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M113.11,290.31a2.38,2.38,0,0,0-1.15.35,3,3,0,0,1,0,2.69,10.79,10.79,0,0,1,1.51-.35c1.54-.28,2.69-.57,3.29-1.56a5.14,5.14,0,0,1-2.27-.67A3.32,3.32,0,0,0,113.11,290.31Z"/><path class="cls-1" d="M17.23,188.56l.17-.15a8,8,0,0,0-.33-.93,8.63,8.63,0,0,1-.4-1.11c-.42.6-.45,1.21.21,2.22Z"/><path class="cls-1" d="M25.91,204.22a5.64,5.64,0,0,1-1.2.86l-.23.14c.73.13,1.4.26,2,.41A5.26,5.26,0,0,1,25.91,204.22Z"/><path class="cls-1" d="M61.74,239.87A17.61,17.61,0,0,0,60.15,241a1,1,0,0,1-.63.22,1,1,0,0,1-1-1.28c.35-1.21.16-1.54.12-1.6s-.37-.22-.93-.22c-.19,0-.39,0-.62,0,.19.5.36,1,.53,1.5a1,1,0,0,1-.35,1.12,3.84,3.84,0,0,1-2.29.89,3.66,3.66,0,0,1-2.15-.84,1.93,1.93,0,0,0-1-.48,1,1,0,0,0-.39.08.94.94,0,0,1-.37.07,1,1,0,0,1-.53-.15,1,1,0,0,1-.46-.77,2.05,2.05,0,0,1,.38-1.62,1.32,1.32,0,0,1,1-.43,2.42,2.42,0,0,1,.47.06l-.93-2.34-.86-2.16a.82.82,0,0,1-.07-.31,1.07,1.07,0,0,1-.38.2,3.41,3.41,0,0,1-.87.1H48.7a11.28,11.28,0,0,1,1.18,1,1.06,1.06,0,0,1,.34.89,1,1,0,0,1-.54.77c-1.58.79-1.81,2.05-2.06,4.06a8.66,8.66,0,0,1-1.06,3.76,1,1,0,0,1-.84.46,1,1,0,0,1-.34-.05c-.22-.08-.49-.22-.84-.39a9.55,9.55,0,0,0-2.28-.92c2,.5,3,2.88,3.69,4.95a9.56,9.56,0,0,0,3.66-1.17,6,6,0,0,1,2.62-.84A3.91,3.91,0,0,1,55.07,247a1,1,0,0,1,.28.82,1,1,0,0,1-.46.73,1.6,1.6,0,0,0-.69.87h.25a3.69,3.69,0,0,1,2.72,1.6c.51.58.85.93,1.21.93a1.4,1.4,0,0,0,.69-.23c-.68-3.13-.23-4.19.19-4.72a1.74,1.74,0,0,1,1.41-.68h.09a4.67,4.67,0,0,0-1-.52A5,5,0,0,1,57.28,244a1,1,0,0,1-.13-.85,1,1,0,0,1,.59-.64l1.76-.7,2.92-1.16a1,1,0,0,1,.37-.07H63a4.87,4.87,0,0,1,0-1.57C62.56,239.34,62.15,239.61,61.74,239.87Z"/><path class="cls-1" d="M396.55,166.7l-.6.07a11.16,11.16,0,0,0-1.3.18c0,.1-.11.3-.17.48-.14.39-.33.92-.65,1.64a1,1,0,0,1-.91.58h-.16a1,1,0,0,1-.84-.88c-.12-1.13-.15-2.29-.17-3.4,0-1.88-.08-4.22-.8-4.22a2.34,2.34,0,0,0-.89.24.92.92,0,0,1-.4.08,1,1,0,0,1-.86-1.51,9,9,0,0,1,1.66-1.86c1-.94,1.64-1.55,1.57-2.43a.9.9,0,0,0-.42-.14c-.37,0-.83.44-1.24.83a2.78,2.78,0,0,1-1.84,1,1.84,1.84,0,0,1-1.6-1.12,1,1,0,0,1,.32-1.32c1.92-1.28,2.45-3.13,3.05-5.28a17.65,17.65,0,0,1,1.3-3.55,7.61,7.61,0,0,1-3.5-3.93,1,1,0,0,1,0-.94c.35-.59.66-1.13.93-1.6a16.11,16.11,0,0,0,1.78-3.47c.06-.32-.08-.56-.73-1.5a31.61,31.61,0,0,1-3.17-5.62,1,1,0,0,1,.49-1.31,7.07,7.07,0,0,0,1.75-1c-.14-.13-.37-.3-.53-.42-.75-.55-1.78-1.31-1.71-2.58s1-2.21,2.93-3.49a6.58,6.58,0,0,1-.64-4c0-.06,0-.13,0-.21a6.52,6.52,0,0,1-1.47.81c-1.1.5-2.14,1-2.55,2.23a3.53,3.53,0,0,1-.14.56,1,1,0,0,1-.94.68,1.15,1.15,0,0,1-.26,0,1,1,0,0,1-.73-1.15,3.66,3.66,0,0,1,.12-.5,4.15,4.15,0,0,0-1.19-3,5.89,5.89,0,0,0-4.1-2.2,3.44,3.44,0,0,0-.46,0l-.15,0a1,1,0,0,1-.78-.38,1,1,0,0,1-.15-1,14,14,0,0,1,1.19-2.25,7.36,7.36,0,0,0,.6-1.09,5.26,5.26,0,0,0-1.7-.45,1,1,0,0,1-.48-1.77c.55-.44,1.17-.84,1.77-1.23s1-.64,1.41-1h-.09a2.55,2.55,0,0,1-2.14-1.16,1.73,1.73,0,0,0-1.74-.78,7.79,7.79,0,0,0-.79,0h-.12a1,1,0,0,1-.9-1.44,8,8,0,0,1,5-4c1.51-.58,2.37-1,2.73-2.12a7.87,7.87,0,0,0-1.31.29,7.22,7.22,0,0,1-2,.38c-1.06,0-2.38-.5-2.63-2.86a1,1,0,0,1,.49-1,1,1,0,0,1,.5-.14,1,1,0,0,1,.59.2.82.82,0,0,0,.23.13,3.1,3.1,0,0,0,.5-1.55,10.25,10.25,0,0,0,0-2.77,1.34,1.34,0,0,1-.52.1c-1.15,0-1.81-1.62-2.16-3a7.88,7.88,0,0,1-.18-.87,2,2,0,0,1-1.5.86,2,2,0,0,1-1.47-.86,1,1,0,0,1-.14-1c.29-.75.63-1.45,1-2.13,1.36-2.8,2-4.35-.41-6.33a1,1,0,0,1-.37-.74,1,1,0,0,1,.33-.76,7.18,7.18,0,0,1,3-1.25c.42-.11,1.07-.28,1.56-.46a1.9,1.9,0,0,1-.94-.58,2.17,2.17,0,0,1-.47-1c-1.5,1.79-3.56,2.16-6.14,2.43H369a1,1,0,0,1-.93-.64l-.52-1.31-.88-2.2a1,1,0,0,1,.93-1.37h.09a6,6,0,0,1,3.08.85c.24-.23.48-.43.72-.63.82-.68,1.06-1,1-1.36a1,1,0,0,1,.77-1.17,2.81,2.81,0,0,1,.62-.07,1.47,1.47,0,0,1,1.53,1.94h.1a2.94,2.94,0,0,0-.24-2,1.72,1.72,0,0,0-1.29-.37,7.69,7.69,0,0,0-1.26.12l-.18,0a1,1,0,0,1-1-.8.55.55,0,0,1,0-.18,7.52,7.52,0,0,1-3.2.72,5.37,5.37,0,0,1-1.76-.28,1,1,0,0,1-.66-1,1,1,0,0,1,.7-.93c1.78-.58,2.15-1.59,2.41-3.28A5.73,5.73,0,0,0,366.93,60a3.63,3.63,0,0,1-2.51,1.64,2.28,2.28,0,0,1-1.57-.68,1,1,0,0,1-.56.37,2.2,2.2,0,0,1-.56.07c-1.53,0-2.19-1.52-2.67-2.63a9.78,9.78,0,0,0-.45-1,1,1,0,0,1-.08-.79,1,1,0,0,1-.46-.54,39.89,39.89,0,0,1-1.11-4,8.78,8.78,0,0,0-1.06-3.08l-.49.68a17.39,17.39,0,0,1-4.73,5,1,1,0,0,1-.55.17,1.35,1.35,0,0,1-.28,0,1,1,0,0,1-.63-.56,6.14,6.14,0,0,1-.48-1.63,3.63,3.63,0,0,1-1.64.38,8.31,8.31,0,0,1-3.74-1.25l-.34-.18c-.17,1.76-2.13,4.08-2.54,4.42a1,1,0,0,1-.64.24,1.06,1.06,0,0,1-.42-.09c-1.18-.54-2.37-1.07-3.55-1.56a11,11,0,0,1-3.32,3c-1,.69-3,2.12-3,2.69h0a2.36,2.36,0,0,0,1,.56,1,1,0,0,1-.07,1.91,14.67,14.67,0,0,0-1.44.53,7.87,7.87,0,0,1-2.8.78,2.29,2.29,0,0,1-2-1,1.07,1.07,0,0,1-.18-.65c.07-.81.13-1.63.2-2.45.14-2,.3-4,.53-6a1,1,0,0,1,.49-.75,3.75,3.75,0,0,1,1.86-.56,3.71,3.71,0,0,1,2.08.74,4.86,4.86,0,0,1,.69-1.27c.43-.62.64-.93.36-1.52L330,51a6.51,6.51,0,0,1-2.16.53,2.14,2.14,0,0,1-1.93-1.11,1,1,0,0,1-.06-.88,1,1,0,0,1,.67-.58l.17-.06a5.94,5.94,0,0,0-.59-1.52c-.54-1.12-1.15-2.4-.48-3.46a2.82,2.82,0,0,1,2.33-1.06,17.68,17.68,0,0,0-1.81-2.64c-.56.13-1.59.49-2.46.79-2.21.76-5,1.71-6.78,1.71h-.2a1,1,0,0,1-.88-.61,1,1,0,0,1,.18-1.06,3.17,3.17,0,0,0,.71-2.49A20.33,20.33,0,0,1,312.85,42c-2.29,1.69-2.91,2.14-1.4,4.3a1,1,0,0,1-.82,1.57,1,1,0,0,1-.64-.23,6,6,0,0,0-4-1.24,14.4,14.4,0,0,0-2.59.26,1,1,0,0,1,.24.49,9.46,9.46,0,0,1-.43,4.42,7.12,7.12,0,0,0-.31,3.92,1,1,0,0,1-.16.85,1,1,0,0,1-.77.4h-.37a16,16,0,0,1-2.38-.22,1,1,0,0,1,.21.64A1,1,0,0,1,299,58a5.15,5.15,0,0,0-1.77,3c-.54,1.64-1.16,3.5-3.56,4.58a1,1,0,0,1-.41.09,1.09,1.09,0,0,1-.39-.08,1,1,0,0,1-.55-.58,1.83,1.83,0,0,1,.15-1.69h-.14a1,1,0,0,1-1-.87c-1-7.41,4.34-12,9.58-15.21l-.16,0a17.17,17.17,0,0,1-3.61.61H297a1,1,0,0,1-1-.84,1,1,0,0,1,.64-1.1,2.53,2.53,0,0,0,1.81-1.65h-.45a11.31,11.31,0,0,1-6-2,7.82,7.82,0,0,0-1.28-.68,8,8,0,0,0-.49,2.95,1,1,0,0,1-.82.92l-.18,0a1,1,0,0,1-.91-.59A6.65,6.65,0,0,0,287.08,43a1,1,0,0,1-.1.52,1,1,0,0,1-.83.57c-2.35.15-2.42.89-2.57,2.35-.12,1.29-.32,3.22-2.86,3.92a1.24,1.24,0,0,1-.27,0,1,1,0,0,1-.76-.35,1,1,0,0,1-.14-1.07c.65-1.43.81-2.49.45-3.06a2.18,2.18,0,0,0-1.42-.76,4.25,4.25,0,0,1-.31,2.27,3.15,3.15,0,0,1-2.67,2.18,2.42,2.42,0,0,1-2.08-1.34,1,1,0,0,1,.13-1.21c1.2-1.26,1.45-3,1.71-4.91.11-.77.22-1.56.4-2.34a1,1,0,0,1,.47-.63,3.68,3.68,0,0,1,1.87-.57,3.73,3.73,0,0,1,2.1.76,2.75,2.75,0,0,0-.3-.8,6.85,6.85,0,0,1-.8-2.66,18.67,18.67,0,0,1-4,.61,2.34,2.34,0,0,1-2.17-1c-.61-1.15.31-2.48,1.7-4.49,2.16-3.13,5.13-7.43,2.47-11.26a1,1,0,0,1,.82-1.57,1,1,0,0,1,.63.22c1,.8,2.32,1,4.15,1h.45a6.15,6.15,0,0,1-.75-1.75,3.16,3.16,0,0,0-1.37-1.86,1,1,0,0,1-.11-1.44,6.77,6.77,0,0,1,1.35-1.19l-.2,0h-.16a1,1,0,0,1-.61-.2,1.07,1.07,0,0,1-.39-.69,9.12,9.12,0,0,1,0-1.46c0-.7,0-.82-.5-1.1-1.37.33-2.3.62-3.06.86a8.9,8.9,0,0,1-2.79.57,10,10,0,0,1-2.1-.28c-.19,1.76-1.39,3-2.47,4.17s-1.8,2-1.93,3a6.25,6.25,0,0,1,2-.48A2.16,2.16,0,0,1,272,18.7a1,1,0,0,1-.13,1.17,7.71,7.71,0,0,1-4.28,2.54,3.84,3.84,0,0,0-1.67.73,5.14,5.14,0,0,1,1.56,4.05c-.22,1.53-1.4,2.87-3.61,4.09a1.21,1.21,0,0,1-.32.11,4,4,0,0,1-.7.06c-2.45,0-4.53-2.06-6.53-4-1.43-1.41-2.9-2.87-4.1-3.07.41.83-.17,1.78-1,3.07a11.37,11.37,0,0,0-.87,1.61,3.91,3.91,0,0,1,2.36-.71A4.5,4.5,0,0,1,256,29.55a3.42,3.42,0,0,1,1,2.49,1,1,0,0,1-.76,1c-1.2.3-1.15.74-1.12,1a1,1,0,0,1-.78,1.08,2,2,0,0,1-.48.06c-1.27,0-1.9-1.07-2.36-1.85a2.83,2.83,0,0,0-.63-.87l-.12,0a1.13,1.13,0,0,1-.36.06,1,1,0,0,1-.52-.14,1,1,0,0,1-.48-.73,3,3,0,0,1,.17-1.46h-.09a1.06,1.06,0,0,1-.82-.42l-.08.09a4.61,4.61,0,0,1-2.37,1.67.78.78,0,0,1-.26,0,1,1,0,0,1-.71-.31,1,1,0,0,1-.24-1,6.77,6.77,0,0,0,.34-1.77,6,6,0,0,0-.94.27,5.71,5.71,0,0,1-1.68.37,1.67,1.67,0,0,1-1.18-.43,1,1,0,0,1-.3-.91,1,1,0,0,1,.6-.75c.18-.07.22-.09.23-.8a2.63,2.63,0,0,1,1-2.37,1,1,0,0,1,.55-.17,5.3,5.3,0,0,0-.19-.56,3.56,3.56,0,0,0-1,.94,4.93,4.93,0,0,1-2.46,1.79.84.84,0,0,1-.31,0,1,1,0,0,1-.37-.07,4.37,4.37,0,0,1-2.82-3,4.89,4.89,0,0,1,0-2.46,5.27,5.27,0,0,1-1.15.13,4.85,4.85,0,0,1-3-1.18,4.12,4.12,0,0,0-2.75-1,8.75,8.75,0,0,0-2.05.29.69.69,0,0,1-.25,0,1,1,0,0,1-.58-.19,1,1,0,0,1-.41-.73,2.11,2.11,0,0,1,1.44-2.19c-.33,0-.67-.05-1-.05-.6,0-1.17.05-1.72.09s-1,.09-1.53.09a6.12,6.12,0,0,1-3.77-1.2,1,1,0,0,1-.41-.87,1,1,0,0,1,.51-.82c.76-.42,1-.94.93-1.27s-.44-.49-.94-.49h0a7.53,7.53,0,0,1-1.16,2.15,2.88,2.88,0,0,1-2.1,1.35c-.39,0-1.32-.16-1.65-1.58a1,1,0,0,1,.09-.69,12.88,12.88,0,0,0-1.51-1.12,2.4,2.4,0,0,1-.18,1.28,1.83,1.83,0,0,1-.91.86c.23.29.6.71,1.17,1.32a1,1,0,0,1,.1,1.25,1,1,0,0,1-.83.44,1,1,0,0,1-.37-.08,2.82,2.82,0,0,0-1-.19c-1,0-2,.68-3.07,2a2,2,0,0,1,1.44.86,1,1,0,0,1-.12,1.36l-.64.57c-1,.94-2,1.86-3,2.81a4.91,4.91,0,0,1,.94-.09,8.25,8.25,0,0,1,1.15.09c.31,0,.61.07.91.07a2.32,2.32,0,0,0,.46,0h.15a1,1,0,0,1,.85.47,2,2,0,0,1,0,2,5.45,5.45,0,0,1-4.33,2.24,2.71,2.71,0,0,1-2.12-.86,2.53,2.53,0,0,1-.43-.74,8,8,0,0,0-1,5,1,1,0,0,1-.46,1,1,1,0,0,1-.53.15,1,1,0,0,1-.56-.18.44.44,0,0,0-.26-.1c-.48,0-1.34.87-2,1.57-.3.3-.61.61-.93.91h0a1,1,0,0,1,.81,1.59A19.09,19.09,0,0,1,192.27,42a3.27,3.27,0,0,1,1.94,2.5,1,1,0,0,1-.13.78,1,1,0,0,1-.66.44c-1,.19-1.85.27-2.55.34l-.78.08a19.15,19.15,0,0,0,1.33,1.69,1,1,0,0,1,.23.77,1,1,0,0,1-.41.69,3.43,3.43,0,0,1-1.49.65h0a1.07,1.07,0,0,1,.71,1c0,.46,0,1.09-3,2.07a16.32,16.32,0,0,1-4.83.89c-4,0-4.48-2.49-4.51-3.56a1,1,0,0,1,.33-.76,1,1,0,0,1,.67-.27h.36a9.23,9.23,0,0,0,2-.36,10.62,10.62,0,0,1,2.52-.42,3.08,3.08,0,0,1,2.93,1.74,13.9,13.9,0,0,1,1.84-.4,3.49,3.49,0,0,1-1.51-1c-.27-.25-.52-.49-.69-.49l-.16,0a.84.84,0,0,1-.31,0,1,1,0,0,1-.48-.12.94.94,0,0,1-.49-.63,3.75,3.75,0,0,1,1-2.93,9.55,9.55,0,0,1,2.38-2.17,3,3,0,0,1-2.21-2.07,1,1,0,0,1,.43-1.18,5.61,5.61,0,0,1,2.81-.51h.93c1.32,0,1.64-.14,1.72-.22h0s.12-.34-.45-1.46a1,1,0,0,1,.15-1.11.52.52,0,0,1,.1-.11,6.78,6.78,0,0,1-1-.89,1,1,0,0,1-.19-1.08,1,1,0,0,1,.91-.6c3.94,0,4.1-.5,4.53-1.76a9.23,9.23,0,0,1,1-2.28c-1.22-.59-2.54-1.67-2.66-2.75-.08-.69.29-1.53,1.56-1.83a3.77,3.77,0,0,1,.8-.09,5,5,0,0,1,2.2.61l.33.14a2.67,2.67,0,0,1,2-2.42c.84-.4,1.38-.65,1.37-1.65A7.11,7.11,0,0,0,200.47,23a3.67,3.67,0,0,1-2.34,1.24,3.48,3.48,0,0,1-2.58-1.81,2.22,2.22,0,0,1-1.77.85h-.12a9,9,0,0,0,.92,1.7,1,1,0,0,1-.84,1.54,1,1,0,0,1-.35-.06,5,5,0,0,0-1.87-.35c-2.54,0-5.2,1.8-7.78,3.53a29.83,29.83,0,0,1-4.82,2.85.88.88,0,0,1-.39.08h-.13c-2.89-.38-3.1-2-3.06-2.7.11-1.89,2.55-3.91,5.13-4.5a.51.51,0,0,0-.24,0,6,6,0,0,0-1.58.38,7.31,7.31,0,0,1-2.2.48,2.32,2.32,0,0,1-1.73-.68,4.38,4.38,0,0,1-.91-3.31,1,1,0,0,1,.89-1,7.27,7.27,0,0,0,5.1-2.44A17.52,17.52,0,0,1,182,17a1.14,1.14,0,0,1,.38-.16,6.26,6.26,0,0,1,1-.11h0a1.48,1.48,0,0,1,1.43.71c.43.78-.06,1.55-.58,2.37a4.8,4.8,0,0,0-.68,1.33,4.08,4.08,0,0,0,2.77,1c2.38,0,5-1.6,6.41-2.46a10.33,10.33,0,0,1,1.13-.64,1,1,0,0,1,.39-.08,1,1,0,0,1,.88.53,6.32,6.32,0,0,1,.61,1.49,14,14,0,0,1,1.19-1.23,7.12,7.12,0,0,0,.87-.91,3.53,3.53,0,0,0-.91-.53,1,1,0,0,1-.6-.93,1,1,0,0,1,.63-.91,2.91,2.91,0,0,1,1.07-.21,3.61,3.61,0,0,1,1.13.21c.05-.62.14-1.21.23-1.79,0-.12,0-.23,0-.34a3.38,3.38,0,0,1-1.48.35c-1.43,0-2.63-.95-3.8-1.87a9.92,9.92,0,0,0-2.76-1.74,1,1,0,0,1-.14-1.83,15.4,15.4,0,0,1,1.43-.62,4.73,4.73,0,0,1-.93.1,4.41,4.41,0,0,1-3.08-1.4,5.29,5.29,0,0,1-1.2,1.44,1,1,0,0,1-1.37-.06,3,3,0,0,0-2.27-1A6.75,6.75,0,0,0,179.32,10a3,3,0,0,0-.92,1.59,1,1,0,0,1-.37.89,1,1,0,0,1-.94.17,7.22,7.22,0,0,0-2.29-.36,14.36,14.36,0,0,0-3.37.51,9.88,9.88,0,0,1-1.94.35h0a1,1,0,0,1-.78-.37,1,1,0,0,1-.18-.89c.86-3.19,3.47-4.09,5.57-4.82,1.51-.52,2.48-.89,2.91-1.67a4.14,4.14,0,0,1-1.69.38,3.87,3.87,0,0,1-3.84-3.37A1.77,1.77,0,0,1,172,1.11a1.88,1.88,0,0,1,.92-.45,6.06,6.06,0,0,0-.78-.66l-.66.26-.57.23c-.27,5.81-2.16,13.52-9.32,18.58a1,1,0,0,1-.58.18,1,1,0,0,1-.77-.35c-.64-.77-1.25-1.49-1.82-2.16-3.5-4.13-5.8-6.84-6.25-10.09a49.7,49.7,0,0,1-6,1.24c-1.94.33-4.11.7-6.52,1.2a2.5,2.5,0,0,1,0,1.62c-.52,1.51-2.44,2-4.3,2.56-.66.19-1.33.37-1.88.59a5,5,0,0,1,.41,1,2.78,2.78,0,0,1,.87-.75,3.05,3.05,0,0,1,1.76-.64,3,3,0,0,1,2.06,1c.26.25.51.48.68.48l.16,0a1.13,1.13,0,0,1,.32-.05,1,1,0,0,1,1,.85,2.63,2.63,0,0,1-1,2.34c-.52.5-.5.54-.43.72a1,1,0,0,1-.34,1.17,2.26,2.26,0,0,1-1.35.43h-.23a3.63,3.63,0,0,1,1.53,1,1,1,0,0,1,.2.79,1,1,0,0,1-.45.67,1.71,1.71,0,0,0-.74,1,5.86,5.86,0,0,1,.94-.08,4.93,4.93,0,0,1,.55,0,2,2,0,0,1,1.13-2.51.88.88,0,0,1,.39-.08,1,1,0,0,1,.44.1,1,1,0,0,1,.53.65c.08.31.2.65.33,1,.43,1.16,1.14,3.11-.58,4.08a1,1,0,0,1-.49.13.89.89,0,0,1-.32-.05,4.31,4.31,0,0,0-1.11-.26h-.06l-.17.23A5.24,5.24,0,0,1,136.78,29a1,1,0,0,1-.33.06.92.92,0,0,1-.46-.11,1,1,0,0,1-.5-.61,9.76,9.76,0,0,0-.82-2.14,5.43,5.43,0,0,0-.62.94,1,1,0,0,1-.74.51h0c0,.11.07.22.11.34a1,1,0,0,1,0,.7c-.66,1.49-1.45,2.13-2.65,2.13a5.43,5.43,0,0,1-.67-.05c-.22,0-.45,0-.68,0a4,4,0,0,0-2.24.73,1,1,0,0,1-.53.16,1,1,0,0,1-.37-.08,1,1,0,0,1-.6-.69,4.28,4.28,0,0,1-.11-.8,2.8,2.8,0,0,0,.14,2.31,1,1,0,0,1-.51,1.26,8.79,8.79,0,0,1-3.49,1,2.31,2.31,0,0,1-2-.9c-1-1.31-.29-3.46.25-5.19a3.07,3.07,0,0,0,.11-.36c-1.53-.37-4.06-1.32-4.39-3l-.86.34a3.74,3.74,0,0,0,.67.71,2.08,2.08,0,0,1,.93,1.6,2,2,0,0,1-.86,1.42,1,1,0,0,1-.62.22h-.13a1.05,1.05,0,0,1-.24-.06,4.68,4.68,0,0,1-.71,1.77,1,1,0,0,1-.79.4h-.12a1,1,0,0,1-.8-.59c-1.41-3.23-3.61-4.81-6.71-4.81.2,2.53,1.13,2.6,2.75,2.71a6.1,6.1,0,0,1,2.55.58,1,1,0,0,1,.43.45c1.19,2.57,3,6.44-.49,8.11a1,1,0,0,1-.43.1,1,1,0,0,1-.76-.34c-2.25-2.58-2.36-3.29-1.81-5.34l-2.11.84c.51,2.5.6,5.4-1.69,7.39a1,1,0,0,1-.66.24h-.15a10.82,10.82,0,0,0-1.49-.14,2.45,2.45,0,0,0-.54.05,4.75,4.75,0,0,0,0,.51,3.55,3.55,0,0,1-2.38,4.17.93.93,0,0,1-.4.09,1,1,0,0,1-.54-.17,1,1,0,0,1-.46-.82c0-.42,0-.88.06-1.35a2,2,0,0,1-1,.45h-.13a1,1,0,0,1-.84-.46,1.94,1.94,0,0,0-1.53-.85A10.72,10.72,0,0,1,91,47.27c-1.19,1.4-2.32,2.72-2.45,4.35a1,1,0,0,1-.85.91,8.9,8.9,0,0,0-2.19.9,7.89,7.89,0,0,1-3.26,1.14A2.25,2.25,0,0,1,80,53a3,3,0,0,0-.37,1.06A4.59,4.59,0,0,1,79,55.84a1,1,0,0,1-.44.35,2.77,2.77,0,0,1-1,.21,9.85,9.85,0,0,0,1.57.93,7.28,7.28,0,0,1,3.38,2.81,1,1,0,0,1-.21,1.26,13.55,13.55,0,0,0-1.74,2,15.28,15.28,0,0,1-2,2.24,1,1,0,0,1-.66.25,1,1,0,0,1-.7-.29,1,1,0,0,1-.06-1.36q.44-.51,0-1.53a5.2,5.2,0,0,0-.94-1.35c-.13.64-.73,1-1.57,1.33a3.4,3.4,0,0,1,1.71,2.05,2.15,2.15,0,0,1-1.51,2.46,1,1,0,0,1-.25.07,2.42,2.42,0,0,1-.45,0h-.17a2.85,2.85,0,0,1,1.15,1.4A1,1,0,0,1,74.41,70a2.88,2.88,0,0,0-1.7,1.21A4.91,4.91,0,0,1,70.24,73a1,1,0,0,1-.3,0,1,1,0,0,1-.74-.32A1,1,0,0,1,69,71.69a2.6,2.6,0,0,0-.1-2.38,1.19,1.19,0,0,0-.9-.56,4,4,0,0,1-.5,2.75,2.33,2.33,0,0,1-1.73.85,1.46,1.46,0,0,0-.39.08s-.32.44.14,3a1,1,0,0,1-.45,1,2.88,2.88,0,0,1,1.21.9,1,1,0,0,1,.13.93,1,1,0,0,1-.69.62,13.91,13.91,0,0,0-4.85,2.87c-2,1.54-4,3.12-6.73,3.41,0,.22,0,.44,0,.66a3.65,3.65,0,0,1,1.79-.44,4,4,0,0,1,3.93,3,1,1,0,0,1-.27,1,1,1,0,0,1-.69.27.92.92,0,0,1-.33-.06,3.7,3.7,0,0,0-1.08-.18,1,1,0,0,1,0,.17,1,1,0,0,1-1,1c-1,0-1.71,1.24-1.71,2.07a.61.61,0,0,0,.09.38s.17,0,.21,0a1,1,0,0,1,0,2,2.2,2.2,0,0,1-1.76-.78,2.58,2.58,0,0,1-.54-1.65,4.38,4.38,0,0,1,.73-2.34l-.16,0A.93.93,0,0,1,53,90c-1.52,2.87-4.33,5.11-7.08,7.31l-.18.14c.76,3.54.34,4.68-1.82,5.35-1.09.34-2.44.76-3.62,4.45a3.88,3.88,0,0,1-.14.45,1,1,0,0,1-.93.64,1,1,0,0,1-.33-.06,1,1,0,0,1-.63-1.23c0-.11.06-.22.1-.33a2.52,2.52,0,0,0-.6-2,3.51,3.51,0,0,0-2.7-1.31,4,4,0,0,0-1.85.48c.11.74.71,1.22,1.61,1.87s1.59,1.15,1.61,2.15a2.79,2.79,0,0,1-1.28,2,1.05,1.05,0,0,1-.62.21l-.15,0a1,1,0,0,1-.67-.42c-.54-.81-.92-1-1-1-.37,0-1.11,1-1.55,1.61-.27.36-.54.72-.82,1.06A9.55,9.55,0,0,0,35.22,113a3.85,3.85,0,0,0,1-.1l.24,0a1,1,0,0,1,.78.38,1,1,0,0,1,.11,1.07,3,3,0,0,0,0,1.4c.13,1.27.39,3.63-2.85,4h-.13a1,1,0,0,1-.89-.54,2.43,2.43,0,0,1-.26-.88,16.29,16.29,0,0,0-1.39,2.73,6,6,0,0,1,4-1.24c1-.06,1.86-.11,2.18-.52a3.13,3.13,0,0,0,.1-2.22,1,1,0,0,1,.2-.81,1,1,0,0,1,.75-.38,5.89,5.89,0,0,0,3-.66,4.47,4.47,0,0,1,2.27-.57,8.91,8.91,0,0,1,1.18.09,1,1,0,0,1,.87.87,4.61,4.61,0,0,1-.58,2.62,2.61,2.61,0,0,0-.38,1.73,1,1,0,0,1-.47,1.07,1,1,0,0,1-.51.14,1,1,0,0,1-.66-.25c-1-.9-1.5-1-1.66-1-.48,0-1,1.43-1.32,2.48A10.56,10.56,0,0,1,39,126a1,1,0,0,1-.6.34,4.18,4.18,0,0,1-.61.05,5.27,5.27,0,0,1-2.31-.63A3.75,3.75,0,0,0,34,125.3a3.39,3.39,0,0,0-1.93.82,1,1,0,0,1-.6.2,1.08,1.08,0,0,1-.43-.1,1,1,0,0,1-.57-.86,8.6,8.6,0,0,1,0-1.15,13.5,13.5,0,0,1-3.67,5.29c.38.07.86.13,1.46.19a1,1,0,0,1,.9.88,1,1,0,0,1-.67,1.06c-1.89.66-3.12,1.52-3.65,2.55a1,1,0,0,1-.87.54h0a1,1,0,0,1-.87-.51,10,10,0,0,1-.54-1.15c-.09-.2-.26-.59-.43-.91a2.85,2.85,0,0,1-1.28,1.21,8.94,8.94,0,0,1,.61,3.18l.54,0a4.45,4.45,0,0,1,3.41,1.7,1,1,0,0,1,.24.81,1,1,0,0,1-.47.7l-.12.07h.35a2.85,2.85,0,0,1,2.72,1.7,1,1,0,0,1-.05,1,1,1,0,0,1-.82.48,6,6,0,0,0-3,.66,4.3,4.3,0,0,1-2.26.57l-.56,0a.31.31,0,0,0,0,.12c0,.15.46.5.69.69a4.77,4.77,0,0,1,.85.78,3.56,3.56,0,0,1,2.85-1.53,1,1,0,0,1,0,2c-1,0-1.71,1.24-1.71,2.07a.63.63,0,0,0,.08.38c0,.05.17.05.21.05a1,1,0,1,1,0,2,2.21,2.21,0,0,1-1.76-.78,2.28,2.28,0,0,1-.43-.85,1.15,1.15,0,0,1-.25.12,9.25,9.25,0,0,1-2.69.52,2.44,2.44,0,0,1-2-.79c-.8-.94-.58-2.3-.34-3.74l.06-.4a8.43,8.43,0,0,0-2,3.77,12.06,12.06,0,0,1-1.71,3.71,2.78,2.78,0,0,1,.17.51,3.23,3.23,0,0,1-.62,2.55,1,1,0,0,1-.59.41l-.16,0a1,1,0,0,1,.22.72,7.57,7.57,0,0,0,1.57,5.84,4.51,4.51,0,0,0,3.44,1.5h0a1,1,0,0,1,1,.71,1,1,0,0,1-.38,1.12c-1.72,1.14-1.83,1.67-1.83,1.76,0,.3.77.93,1.34,1.39a13.41,13.41,0,0,1,1.84,1.68,1,1,0,0,1,.19,1,1,1,0,0,1-.75.66,5.85,5.85,0,0,0-1.21.33,8.14,8.14,0,0,0,.6.58c.68.61,1.46,1.31,1.24,2.26a1.93,1.93,0,0,1-1.5,1.25,1.26,1.26,0,0,1-.27,0,.86.86,0,0,1-.41-.1A2.77,2.77,0,0,0,16,176.2a1.7,1.7,0,0,0-1.27.58,4.09,4.09,0,0,0-.94,1.82,5.86,5.86,0,0,1,2-.38,3.66,3.66,0,0,1,3.31,2,1,1,0,0,1-.31,1.31,3.53,3.53,0,0,1-1,.5c.3.23.58.48.84.72a1.06,1.06,0,0,1,.35.72l.25-.09a6.63,6.63,0,0,1,2.14-.52,2.19,2.19,0,0,1,1.41.48c.87-2.35,2.29-3.54,4.21-3.54s3.81,1.07,5.9,2.2c1,.53,2,1.07,3,1.5H36l.25,0a1,1,0,0,1,.54.36,7.85,7.85,0,0,0,2.64.54,4.39,4.39,0,0,0,1.78-.36.93.93,0,0,1,.4-.09,1,1,0,0,1,.45.11,1,1,0,0,1,.52.66,2.42,2.42,0,0,1-.23,1.59l.19,0a1,1,0,0,1,1,1.1,6.19,6.19,0,0,1-1.68,3.26c-.93,1.14-1.44,1.84-1.17,2.94a1,1,0,0,1-1,1.24.68.68,0,0,1-.2,0,8.24,8.24,0,0,0-1.63-.22,4.3,4.3,0,0,0-1.75.39,1,1,0,0,1-.39.08,1,1,0,0,1-.94-1.34c.23-.64.4-1.14.53-1.52a4.34,4.34,0,0,1-1.53.31c-1.53,0-2.76-1-3.64-3a1,1,0,0,1,.91-1.41,1.13,1.13,0,0,1,.32.05,3.17,3.17,0,0,0,.94.2c.26,0,.34-.06.64-.34a2.73,2.73,0,0,1,2-.85,3.84,3.84,0,0,1,.85.1,4.62,4.62,0,0,0-.26-1A6.86,6.86,0,0,1,31.37,188a16,16,0,0,0-4.34,1.1,1,1,0,0,1-.37.07,1,1,0,0,1-.7-1.71c2-1.94,1.72-2.68,1.72-2.69s-.47-.37-1.31-.37a6.66,6.66,0,0,0-2.38.49,1.15,1.15,0,0,1-.36.07,1,1,0,0,1-.3-.05c-.12.21-.25.43-.4.66a5.08,5.08,0,0,1,1.57-.27h0a1,1,0,0,1,0,2,4.88,4.88,0,0,0-3.25,1.71,2.69,2.69,0,0,0,.46,0,.9.9,0,0,1,.37.07,2.6,2.6,0,0,1,.58-.41,1,1,0,0,1,.49-.13,1,1,0,0,1,.41.09,3.74,3.74,0,0,1,2.19,2A4.16,4.16,0,0,1,25.1,194c-.6,1.2-1.13,2.27-.58,3.55a11,11,0,0,0,3.19-2,6,6,0,0,1,4.07-1.75,8.81,8.81,0,0,1,1.87.23,1,1,0,0,1,.15,1.91c-.17.07-.21.08-.23.8a3.2,3.2,0,0,1-.42,1.8,5.28,5.28,0,0,1,2.47,2.77,2.15,2.15,0,0,1-1.27,2.53,1,1,0,0,1-1.16-.15,11.28,11.28,0,0,0-1.53-1.28c0,.18-.07.4-.1.58a5.64,5.64,0,0,1-1.75,3.85,17.78,17.78,0,0,1,4.34,3.71c.05-.1.1-.2.16-.3A3,3,0,0,1,36.5,209l.17,0a1,1,0,0,1,.95.7,9.63,9.63,0,0,0,3,4.38,12.29,12.29,0,0,1,3,3.94,1,1,0,0,1-.5,1.33,15.06,15.06,0,0,1-1.41.55c1.55.72,2.37,1.13,3,1.41a29,29,0,0,0,4.68,1.81,1,1,0,0,1,.61,1.27,4,4,0,0,0,.07,3.52,6.17,6.17,0,0,1,.49,4,1,1,0,0,1,.59-.19h.06c2.36.15,3.88,2,5,4.22a2.35,2.35,0,0,1,.44-.64,4,4,0,0,1,2.92-.92c.7,0,1.43.07,2.15.14a3.4,3.4,0,0,1-.9-.76A4.51,4.51,0,0,1,60,230a1,1,0,0,1,.61-.75l1.78-.71.57-.22a.92.92,0,0,1,.36-.07,1,1,0,0,1,.85.46c1.7,2.66,1.5,4.23,1,5.08a2.08,2.08,0,0,1-.7.77,1,1,0,0,1,1,1.14,3.81,3.81,0,0,1-.67,1.66,5.52,5.52,0,0,1,1.95.59,3.3,3.3,0,0,0,1.36.43,2.2,2.2,0,0,0,.36,0,.76.76,0,0,1,.21,0,1,1,0,0,1,.57.18,1,1,0,0,1,.42.67,2.6,2.6,0,0,1-1,2.34c-.51.5-.49.55-.43.72a1,1,0,0,1,0,.82,1,1,0,0,1-.63.51,4.37,4.37,0,0,1-1.16.16,3.59,3.59,0,0,1-.81-.09,1.8,1.8,0,0,1,.43,1,9.44,9.44,0,0,0,5.22-6.9,1,1,0,0,1,.89-.81,2.49,2.49,0,0,0,2.32-1.36,4.28,4.28,0,0,1,3-2.12l.21,0a1,1,0,0,1,.91.59c.16.35.37.49.79.76a3.45,3.45,0,0,1,1.84,2.49.78.78,0,0,1,0,.14,1.2,1.2,0,0,1,.27-.16l3.51-1.39a1,1,0,0,1,.37-.07,1,1,0,0,1,1,1.2,5,5,0,0,0,.16,3.37,1,1,0,0,1-.88,1.4h-.25a4.43,4.43,0,0,1-4.46-3.25,1.31,1.31,0,0,1-.06-.27l-.07,0a3.64,3.64,0,0,1-1.34.58,5.07,5.07,0,0,1,1.91,2.95,3.1,3.1,0,0,0,.24.68h0a4.55,4.55,0,0,0,1.66-.55,1,1,0,0,1,.42-.1,1,1,0,0,1,.57.18,1,1,0,0,1,.43.89c-.14,2.12-2,3.34-3.63,4.41-1.39.91-2.36,1.59-2.65,2.45a5.52,5.52,0,0,1,2.86,1.65,1,1,0,0,1,.34.84,1,1,0,0,1-.44.77,8.54,8.54,0,0,0-4,5.06c-.72,2-1.47,4-5.63,5.61a4.42,4.42,0,0,1,.56,3.1,3.37,3.37,0,0,1-1.85,2,.56.56,0,0,0,0,.08,1.84,1.84,0,0,1-.35,1.91,5.19,5.19,0,0,0,.72-.12c0-.1.12-.3.18-.47.14-.39.32-.92.65-1.64a1,1,0,0,1,.91-.59h0a1,1,0,0,1,.91.61,13.76,13.76,0,0,0,1.66,2.8c.94,1.32,1.54,2.37,1,3.83l.32,0a26.26,26.26,0,0,1,3.82-.37,7,7,0,0,1,4.08,1.09,1,1,0,0,1-.57,1.82h-.12a6.77,6.77,0,0,0-.85-.06c-.57,0-1.3.09-1.51.55-.39.81.35,2.81,1.64,4.57a3.48,3.48,0,0,0,1.1-1A4.92,4.92,0,0,1,86.26,280a.79.79,0,0,1,.3-.05,1,1,0,0,1,.85.47c1.16,1.85,1.49,2.9,1.16,3.71l.6.08a15.68,15.68,0,0,0,1.86.17s0-.08,0-.12c.19-1.24,1.46-2.05,2.72-2.81a3.94,3.94,0,0,1-1.11.17,2.14,2.14,0,0,1-1.72-.73,1,1,0,0,1-.22-.54,4.86,4.86,0,0,0-.15-.69c-.2-.79-.63-2.43,1-3.13a1.1,1.1,0,0,1,.4-.08h.12a2.75,2.75,0,0,0,.4,0,5.47,5.47,0,0,0,2.13-.55,8.42,8.42,0,0,1,2-.63,4.75,4.75,0,0,1-.53-1.8c-.11-.85-.2-1.53-2.35-2.92a1,1,0,0,1,.54-1.84.91.91,0,0,1,.23,0,23.77,23.77,0,0,0,2.6.47,2.58,2.58,0,0,1-.27-.58,1,1,0,0,1,.46-1.19c.37-.2.76-.37,1.14-.54s.71-.31,1-.45a1.51,1.51,0,0,1-.56-.8c-.1-.34-.19-1.21,1-1.93a.9.9,0,0,1,.39-.13c3.32-.45,5.43-3.16,7.48-5.79s4-5.15,7.06-5.15a7.35,7.35,0,0,1,3.92,1.3,1,1,0,0,1,.45,1,1,1,0,0,1-.8.8c-1.89.36-3.1.95-3.23,1.59-.16.79,1,2.5,4.06,4.55a1,1,0,0,1-.06,1.69c-1.92,1.14-5.37,1.58-8.42,2l-1.67.22a10.93,10.93,0,0,1,1.32,1.06,1,1,0,0,1,.34.9,1,1,0,0,1-.53.78,6.93,6.93,0,0,0-2.63,1.92,1.82,1.82,0,0,1,1.48.77,2,2,0,0,1,.35,1.07c.7-.29,1.46-.68,2.21-1.06,1.73-.89,3.37-1.73,4.84-1.73a2.83,2.83,0,0,1,2.25,1,1,1,0,0,1,.16,1q-1.75,4.1-3.53,8.18a1,1,0,0,1-.53.52,13.71,13.71,0,0,1-3.58.93c-1.13.16-1.67.24-2,.93l.67,0c3.17,0,4.15,1.78,5,3.35a6,6,0,0,0,4,3.47,1,1,0,0,1,.22,1.83l-.38.2a1,1,0,0,1,.17.58c0,1.38.26,1.77.34,1.85s.09.09.33.09a6.05,6.05,0,0,0,1.52-.34,7.29,7.29,0,0,1,2.12-.44,2.31,2.31,0,0,1,2.08,1.12,1,1,0,0,1-.17,1.27,7.61,7.61,0,0,1-5,2.33,5.33,5.33,0,0,1-3.65-1.58h0a7.1,7.1,0,0,0,.86,1.85c.72,1.26,1.47,2.56,1,3.69a2.17,2.17,0,0,1-1.63,1.18l-.21,0a1,1,0,0,1-.92-.6,4.71,4.71,0,0,0-.55-1l-.15.09a3,3,0,0,1-1.52.48h0a15.62,15.62,0,0,0,1.24,2.28,5,5,0,0,1,1,3.9,3.4,3.4,0,0,1,.45,0,3.63,3.63,0,0,1,2.15.84,2,2,0,0,0,1,.48,1.17,1.17,0,0,0,.35-.06,9.5,9.5,0,0,0-.81-1,2.79,2.79,0,0,1-1-2.09c.07-.77.6-1.48,1.82-2.44a1,1,0,0,1,.62-.22,1,1,0,0,1,.72.31,10.24,10.24,0,0,0,2.35,1.91,10.13,10.13,0,0,0-.26-1c-.34-1.2-.91-3.2,1-4.13a1,1,0,0,1,.44-.1,1,1,0,0,1,.68.26c.44.41.65.43.67.43.28,0,.86-.92,1.21-1.47.85-1.34,1.91-3,3.91-3.18H131a1,1,0,0,1,.84.46c1.23,1.9,1.56,3,1.16,3.8a1.48,1.48,0,0,1-.27.4l2.1-.84a.9.9,0,0,1,.22-.06,13.11,13.11,0,0,1,.66-9.46,1,1,0,0,1,.91-.6h0a1,1,0,0,1,.91.59c.16.35.37.49.8.75a3.5,3.5,0,0,1,1.84,2.5,1,1,0,0,1-.47,1.06c-1.31.79-1.34,1.21-1.34,1.22,0,.3,1,1,1.46,1.35,1.06.75,2.26,1.6,2.22,2.91a1.9,1.9,0,0,1-.1.57c3.61,0,5.11.8,6.42,2.65l.2-.54c-2.15-.94-2.16-2.33-2.05-2.9.31-1.72,2.62-2.88,4.57-2.88a4.25,4.25,0,0,1,2.61.82c1.13-.38,1.27-.68,1.27-.68a2.62,2.62,0,0,0-.36-.75,2.5,2.5,0,0,1-.46-2.28,3.17,3.17,0,0,1,2.35-1.51l.24,0a1,1,0,0,1,.94.67c1.07,3.11.31,5.56-2.2,7.16a2.9,2.9,0,0,0,1.19.29,1,1,0,0,0,.36-.05,1,1,0,0,0-.08-.43,1,1,0,0,1,.34-1.12,1,1,0,0,1,.6-.21,1,1,0,0,1,.58.18c.59.42,2.39,1.67,2,3.3-.6,2.26-5,2.84-10.33,3.32l-.32,0,.37.68c.56,1.07,1.2,2.28,2,3.73a1,1,0,0,1,.13.47c3.85-4,9.46-5.89,14.55-7.64s9.42-3.24,10.69-6.22a1,1,0,0,1,.84-.6h.08a1,1,0,0,1,.85.47,7.47,7.47,0,0,1,.76,1.58,3.84,3.84,0,0,1,3.48-2.74,1,1,0,1,1,0,2c-1,0-1.71,1.24-1.71,2.07a.63.63,0,0,0,.08.38s.18,0,.22,0a1,1,0,0,1,0,2,2.22,2.22,0,0,1-1.77-.78l-.1-.14c0,.57,0,.67.92,1.05a1,1,0,0,1,.6.91,1,1,0,0,1-.59.91c-1.85.83-2.45,2.16-3.15,3.71l-.21.46a5.26,5.26,0,0,1,1.58,1.45,3.4,3.4,0,0,0,1,1,1,1,0,0,1,.62.73,1,1,0,0,1-.28.91c-1.53,1.52-7.32,9.23-6.48,12.52A1.64,1.64,0,0,0,175.6,326a1,1,0,0,1,.71,1.14,1,1,0,0,1-1,.82h-.07l-.56-.06a13.31,13.31,0,0,0-1.86-.17,4.73,4.73,0,0,0-.6,0c2.63.11,4.24,1.43,5,4.11,1.35-.82,1.13-2.1.67-3.94-.29-1.18-.59-2.41.33-3.15a1,1,0,0,1,.63-.22.79.79,0,0,1,.3.05,1,1,0,0,1,.49.34c.52-.85,1.11-1.8,2.14-1.8s1.77,1.34,2,1.78a1,1,0,0,1,0,.87,1,1,0,0,1-.7.52c-1,.19-1.19.47-1.19.47s0,.26.34.65a5.51,5.51,0,0,0,1.37,1.14c0-3.62,2.84-4.29,5-4.8,2.73-.64,4.41-1.19,4.53-4.31a1,1,0,0,1,.23-.59,7.16,7.16,0,0,1-2.06-3.8,1,1,0,0,1,.73-1.22,4.56,4.56,0,0,1,1.07-.14c2.08,0,3.54,1.55,4.34,4.61a1,1,0,0,1-.11.76,1,1,0,0,1-.62.46,4.57,4.57,0,0,1-1.08.14,3.59,3.59,0,0,1-.47,0l.09.76c0,.31.07.6.11.86a1.48,1.48,0,0,1,.31,0,3.19,3.19,0,0,1,1.49.42,1,1,0,0,1,.53.8,4.41,4.41,0,0,1-.79,3.46,3.12,3.12,0,0,1-2.44.92,10,10,0,0,1-1.42-.13A8.88,8.88,0,0,0,197.5,328a19.06,19.06,0,0,0,3.62-.45,15.2,15.2,0,0,1,2.95-.4l.48,0c.19-1.74,1.81-2.8,3.07-3.62,2-1.28,2.6-1.86,1.9-3.28a1,1,0,0,1,.9-1.44,1,1,0,0,1,.73.31,14.74,14.74,0,0,1,1.55,2.24,1,1,0,0,1,.32-.88,1,1,0,0,1,.67-.26,1.06,1.06,0,0,1,.31.05,3.91,3.91,0,0,0,1.12.26h.06l.16-.23a5.29,5.29,0,0,1,2.69-1.88,1,1,0,0,1,.34-.06,1,1,0,0,1,.91.59,6.79,6.79,0,0,0,1.43,2,4.1,4.1,0,0,1,1.34,2.3,3.13,3.13,0,0,1,.79-.11,3.54,3.54,0,0,1,2.27,1c.11.09.21.18.31.25.61-4.91,3.27-8,7.15-8.13-.32-1.86-.48-4.25.5-5.48a2.15,2.15,0,0,1,1.75-.84,4,4,0,0,1,1.83.54,2.89,2.89,0,0,0-.82-1.13,2.58,2.58,0,0,1-1-2.06,2,2,0,0,1,1.11-1.38,1,1,0,0,1,.49-.13,1,1,0,0,1,.4.09,1.06,1.06,0,0,1,.44.37l.29-.34c.75-.91,1.61-1.93,2.77-1.93.87,0,1.59.56,2.14,1.68a1,1,0,0,1-.2,1.16l-.38.37.34-.14c1.89-.75,2.1-.84,1.52-2.91a3.64,3.64,0,0,1-.11-.39,1,1,0,0,1,.72-1.18.78.78,0,0,1,.26,0,1,1,0,0,1,1,.72,2.76,2.76,0,0,1,.08.27h0a6.85,6.85,0,0,0,1.85-.86,6.33,6.33,0,0,1,2.88-1.12,2,2,0,0,1,2,1.78,2.63,2.63,0,0,1,0,1.56h0l.21,0a1,1,0,0,1,.7.57l.06.14c1.12,2.48,2,4.11,3.29,4.11h.26a4.3,4.3,0,0,0-.63-.65,2.08,2.08,0,0,1-.93-1.6,2,2,0,0,1,.86-1.42,1,1,0,0,1,.62-.22,1,1,0,0,1,.4.09,6.58,6.58,0,0,0,2.62.51c2.7,0,5.73-1.34,8.65-2.64a39.49,39.49,0,0,1,5.38-2.09.82.82,0,0,1,.26,0,1,1,0,0,1,.73.31,1,1,0,0,1,.22,1,5.45,5.45,0,0,0-.25,2.19,11,11,0,0,1,3.37-5.15,1,1,0,0,1,.62-.21.93.93,0,0,1,.46.12,1,1,0,0,1,.53.95c0,.12,0,.31-.06.56a13.6,13.6,0,0,0-.16,2.23c.18-2.69,1.63-4.48,3-6.23s3-3.69,3.4-6.8a1,1,0,0,1,.93-.86l.4,0a4.34,4.34,0,0,1,2.64.82,1.6,1.6,0,0,1,0-.3c.13-.46.23-.94.33-1.44.47-2.27,1-4.84,4.24-6.22a1,1,0,0,1,.39-.08,1.13,1.13,0,0,1,.44.1,1,1,0,0,1,.53.65c1,4.08-2.09,6.38-4.37,8.06a1,1,0,0,1-.59.2h-.07a6,6,0,0,1,.77,1.47,1,1,0,0,1-.36,1.16c-3.95,2.8-4.27,5.54-4.64,8.71-.1.85-.2,1.72-.38,2.59,1.56,0,1.64-.33,2-1.72a13,13,0,0,1,.81-2.4,1,1,0,0,1,.91-.58h.12a2.71,2.71,0,0,1,1.93.95,2.2,2.2,0,0,1,.39.82,8.55,8.55,0,0,1,2.08-1.14c.73-.33,1.75-.77,1.87-1.17a.54.54,0,0,0,0-.28c-.83-.12-2-.66-2.43-2.62a1,1,0,0,1,.33-1,1,1,0,0,1,.64-.23,1,1,0,0,1,.41.09c.31.14.56.24.76.31l-.17-.51c-.44-1.32-1.19-3.55.59-4.64a1,1,0,0,1,.52-.15.94.94,0,0,1,.37.07c.41.16.78.35,1.15.53l.43.22a1,1,0,0,1,.91-.58c1,0,1.72-1.24,1.72-2.08h0a.66.66,0,0,0-.09-.38s-.17-.05-.21-.05a1,1,0,0,1,0-2,2.2,2.2,0,0,1,1.76.79,2,2,0,0,1,.33.56,3.06,3.06,0,0,1,1.41-1.83,22.17,22.17,0,0,0,2-1.69,4.19,4.19,0,0,0-1.72-2.66c-.74-.68-1.44-1.32-1.3-2.24a2,2,0,0,1,1.25-1.41,1,1,0,0,1,.43-.1,1,1,0,0,1,.83.44c.37.55.71.82,1,.82a4.12,4.12,0,0,0,1.82-1,5,5,0,0,1,2.83-1.34,2.83,2.83,0,0,1,2.31,1.45,8.11,8.11,0,0,0,1.07-.88h-.15a3.54,3.54,0,0,1-2.7-1.11,3.77,3.77,0,0,1-.76-3.1,1,1,0,0,1,1-.87,1,1,0,0,1,.55.16,3.94,3.94,0,0,0,1.67.81,1.44,1.44,0,0,0,.46-.14,5.12,5.12,0,0,1,2.06-.41,8.91,8.91,0,0,1,1,.06,1,1,0,0,1,.75.51,10.06,10.06,0,0,1,3.78-4.32c1.68-1.27,3.14-2.38,3.6-4.74a8.53,8.53,0,0,1-3.82-1,1,1,0,0,1-.49-1,1,1,0,0,1,.71-.84c1.17-.35,1.93-.61,2.41-.79a2.82,2.82,0,0,1-1.35-1.68,2.55,2.55,0,0,1,.51-2,1,1,0,0,1,.52-.39,4,4,0,0,1,1.21-.2c2.35,0,3.5,2.33,4.29,4.52,1.35-1.09,1.17-2,.9-3.32a5.88,5.88,0,0,1,0-3.15,1,1,0,0,1,.91-.69h0a1,1,0,0,1,.92.62c.07.18.09.22.81.23a2.85,2.85,0,0,1,2.09.67,2.88,2.88,0,0,1,2.55-1.94h.2a6.17,6.17,0,0,0-2.19-2.41,1,1,0,0,1-.46-.94,1,1,0,0,1,.63-.84,3.27,3.27,0,0,1,1.12-.22,3.69,3.69,0,0,1,2.15.84,2,2,0,0,0,1,.49,1.37,1.37,0,0,0,.5-.13,3.55,3.55,0,0,0-.76-.84,2.14,2.14,0,0,1-.93-1.6,2,2,0,0,1,.87-1.42,1,1,0,0,1,.61-.22h.13a.84.84,0,0,1,.24.06,4.68,4.68,0,0,1,.71-1.77,1,1,0,0,1,.79-.4c3.25,0,4-.83,6.21-3.24l.79-.87a1,1,0,0,1,.73-.31.89.89,0,0,1,.32,0,1,1,0,0,1,.68.83,9.37,9.37,0,0,1-.25,2.92c-.25,1.25-.34,1.82.13,2.22a44.23,44.23,0,0,1,10.86-10,5,5,0,0,1-1.71-1.33,1,1,0,0,1,.09-1.41c.62-.54.62-1.44.55-2.86-.08-1.61-.19-3.82,2-5a1,1,0,0,1,.47-.12,1,1,0,0,1,.88.51,11.79,11.79,0,0,1,.53,1.14,9.46,9.46,0,0,0,.62,1.23c.94-1.92,1.82-3.89,2.68-5.81,3.17-7.11,6.45-14.45,13.19-20.26L382,202a3,3,0,0,1-1.07.24,2.71,2.71,0,0,1-1.48-.49,1,1,0,0,1,.16-1.77c.17-.07.21-.09.23-.8a2.63,2.63,0,0,1,1-2.37,1.06,1.06,0,0,1,.57-.17.65.65,0,0,1,.19,0,12.53,12.53,0,0,0,2.12.26h.22a8.69,8.69,0,0,0-.4-.81c-.58-1.09-1.29-2.44-.57-3.65.61-1,2-1.46,4.36-1.46h.3a3.43,3.43,0,0,1,1-1.47c.3-.3.45-.46.46-.57-.49-1.53-.8-6.28.57-8.94a3.87,3.87,0,0,1,2.39-2.12,2.1,2.1,0,0,1-.54-1.88c.26-.86,1.11-1,1.73-1.19a3.71,3.71,0,0,1-.84-1.53,2.68,2.68,0,0,1,.93-3.14.93.93,0,0,1,.53-.15,1,1,0,0,1,.79.38,5.93,5.93,0,0,1,.4.62,6.9,6.9,0,0,1,.91-1.73C396.55,168.35,397,167.73,396.55,166.7ZM18,160.26a2.93,2.93,0,0,1-2.1.84,1,1,0,0,1,0-2,.93.93,0,0,0,.69-.26.83.83,0,0,0,.12-.16,1,1,0,0,1-.78-1,1,1,0,0,1,1-1,1.76,1.76,0,0,1,1.84,1.8A2.49,2.49,0,0,1,18,160.26Zm67,112.35c-1,1.92-4.17,2.07-5.13,2.07a5.21,5.21,0,0,1-2.1-.34,1,1,0,0,1-.51-1.2c.46-1.42,1.45-1.84,2.6-2.33A16.93,16.93,0,0,0,83,269.12a1.07,1.07,0,0,1,.56-.17,1,1,0,0,1,.81.4C85.45,270.84,85.28,271.94,84.94,272.61ZM179.06,120.7a3,3,0,0,1,2.16-1.08c.32-.05.76-.12.84-.24s.18-.29,0-1.26a1,1,0,0,1,.23-.86,1,1,0,0,1,.75-.33h.08c2.07.16,2.77,1.36,2.75,2.43,0,2.1-2.93,4.85-6.08,4.94h0a1,1,0,0,1-1-.8A3.52,3.52,0,0,1,179.06,120.7Zm-.81,101.89a3,3,0,0,1,.58,2.52c-.37,1.27-1.72,1.86-2.92,2.39l-.65.29a1,1,0,0,1-.42.09,1.07,1.07,0,0,1-.52-.14,1,1,0,0,1-.48-.82,4.45,4.45,0,0,1,3.24-4.71,1,1,0,0,1,1.17.38Zm-.53,33.54a1,1,0,0,1,.62.83,2.86,2.86,0,0,1-.5,2.22,1.89,1.89,0,0,1-1.47.59,6.93,6.93,0,0,1-1.31-.17,7.36,7.36,0,0,0-1.38-.18,1.71,1.71,0,0,0-1.43.61,1,1,0,0,1-.76.35l-.21,0a1,1,0,0,1-.75-.71,2.5,2.5,0,0,1,.38-2.25c1-1.35,3.33-1.55,4.62-1.55A7.41,7.41,0,0,1,177.72,256.13Zm.16-193c-.07.41-.36.89-1.33.89h-.62l-.77,0a1.2,1.2,0,0,0,0,.63,1.37,1.37,0,0,0,.58,1l.09,0a1,1,0,0,1,.29,0,1,1,0,0,1,.36,1.94l-.23.07a11,11,0,0,0-2.34,1.13,14.39,14.39,0,0,1-5.07,2c.82,1.27.19,3.15-.27,4.53l-.17.52c-.19.6-.62,2-1.77,2-.46,0-1.7,0-2.16-4.48-.24-2.38,0-3.29.91-3.48a6.44,6.44,0,0,1,1.23-.14h.27c0-1.18,1.21-2.2,2.42-3.19.2-.16.44-.35.66-.54a1,1,0,0,1-.89-.79,1.92,1.92,0,0,1,.27-1.69,1.41,1.41,0,0,1,1.11-.53,1.8,1.8,0,0,1,1.21.5,3.09,3.09,0,0,0,1-1.24c.47-.75,1-1.6,2-1.6a2.4,2.4,0,0,1,1.83,1.19C177.33,61.93,178,62.26,177.88,63.09Zm-5.94-27.16a2.37,2.37,0,0,1,1.24.36,3.61,3.61,0,0,1,.07-1.73,2.53,2.53,0,0,1,2.19-1.94,1.61,1.61,0,0,1,1.31.67c.69.93.67,2.61-.08,5.16a1,1,0,0,1-.62.66,1.27,1.27,0,0,1-.34,0,1,1,0,0,1-.56-.17,5,5,0,0,1-.84-.69c0,.24.05.49.06.78a1,1,0,0,1-.37.79,1,1,0,0,1-.63.22.82.82,0,0,1-.22,0,9.68,9.68,0,0,0-1.13-.21,1,1,0,0,1-.18.75,1,1,0,0,1-.69.41,6.41,6.41,0,0,1-.73,0c-2.17,0-2.28-1.47-2.28-1.76C168.14,37.75,170.2,35.93,171.94,35.93Zm-7.26,7.31c.2-.68.73-2.5,2.09-2.5a1.58,1.58,0,0,1,1.17.56c1,1.09,1.41,3.9,1.27,5.36a1,1,0,0,1-.64.84,3,3,0,0,1-1.1.19c-1.43,0-3.11-.9-3.21-2.19a1.6,1.6,0,0,1,.58-1.38A1.05,1.05,0,0,1,164.68,43.24Zm-3.55,222a1,1,0,0,1,.76-.36l.21,0a8.14,8.14,0,0,0,1.63.22,4.24,4.24,0,0,0,1.74-.38.93.93,0,0,1,.4-.09,1,1,0,0,1,.48.13,1,1,0,0,1,.51.73,3.28,3.28,0,0,1-.23,1.65c-.15.45-.2.62-.07.93a1,1,0,0,1,0,.77,1.05,1.05,0,0,1-.55.53l-1.45.58-.89.35a1,1,0,0,1-.37.07,1,1,0,0,1-.93-.63l-.78-2-.62-1.54A1,1,0,0,1,161.13,265.27Zm-5.93-179a1,1,0,0,1,.1,2,.82.82,0,0,0-.17.53c0,.3.1.65.89.65a1,1,0,0,1,0,2,2.63,2.63,0,0,1-2.89-2.65h0a2.9,2.9,0,0,1,.48-1.61,1.94,1.94,0,0,1,1.59-.92Zm-7.19-20a5.34,5.34,0,0,1,2.08-2.9c1.44-1.26,2.16-1.89.47-4a1,1,0,0,1-.13-1,1,1,0,0,1,.86-.59l.75,0a3.1,3.1,0,0,1,2.59.89c.59.79.29,1.73,0,2.64-.38,1.23-.78,2.5.29,3.91a1,1,0,0,1,.19.77.94.94,0,0,1-.44.67,5.35,5.35,0,0,1-3,1,8.25,8.25,0,0,1-1.15-.09,7.11,7.11,0,0,0-.91-.07,3.44,3.44,0,0,0-.46,0H149a1,1,0,0,1-1-1.18Zm5,24.6a1,1,0,0,1-.66,1.09,3.87,3.87,0,0,1-1.26.23,3,3,0,0,1-3-2.78,4.08,4.08,0,0,1,2.95-4.5,1,1,0,0,1,.29,0,1,1,0,0,1,.84.45,5.55,5.55,0,0,1,.88,4.17A4.94,4.94,0,0,0,153,90.82ZM147.63,216.3a1,1,0,0,1,.34-.06,1,1,0,0,1,.83.44,3,3,0,0,1,.58,2.52c-.37,1.27-1.73,1.86-2.93,2.39l-.64.29a1,1,0,0,1-.42.09.92.92,0,0,1-.52-.14,1,1,0,0,1-.48-.82A4.45,4.45,0,0,1,147.63,216.3Zm-8.79,8.13a2.08,2.08,0,0,1,1.58-.6h0a10.66,10.66,0,0,1,3,.72,9.56,9.56,0,0,0,2.3.6h.13l.19,0a1,1,0,0,1,1,1.1c-.23,2.32-1.51,2.67-2.25,2.67a6.49,6.49,0,0,1-2.83-1,6.26,6.26,0,0,0-2.14-.86l-.16,0a.93.93,0,0,1-.4.09,1.05,1.05,0,0,1-.53-.16,1,1,0,0,1-.47-.8A2.24,2.24,0,0,1,138.84,224.43Zm-3.29,12.93a5.89,5.89,0,0,1,2.54-.69c1.25,0,2.91.6,3.77,3.41a1,1,0,0,1-.51,1.19,5.79,5.79,0,0,1-2.55.69c-1.24,0-2.91-.59-3.76-3.41A1,1,0,0,1,135.55,237.36Zm-9.3-2.49a5.45,5.45,0,0,1,4.33-2.24,2.7,2.7,0,0,1,2.12.86,2.79,2.79,0,0,1,.55,2.33,1,1,0,0,1-.47.71,1,1,0,0,1-.52.15,1,1,0,0,1-.34-.06,3.47,3.47,0,0,0-1.15-.18,8.21,8.21,0,0,0-3.25.84,1,1,0,0,1-.41.09,1,1,0,0,1-.85-.47A2,2,0,0,1,126.25,234.87Zm-.91-4h-.87a4.93,4.93,0,0,0-2,.26,1,1,0,0,1-.51.14,1,1,0,0,1-1-1,3.1,3.1,0,0,1,.8-2.37c.94-1,2.42-1.06,3.86-1.06h.88a5.06,5.06,0,0,0,2-.25,1,1,0,0,1,.51-.14,1,1,0,0,1,1,1,3.15,3.15,0,0,1-.79,2.38C128.26,230.81,126.78,230.89,125.34,230.89Zm8.35,35.67.95-.38,2.56-1a1.21,1.21,0,0,1,.37-.07,1.1,1.1,0,0,1,.4.08,1.05,1.05,0,0,1,.53.55l1.86,4.68a1,1,0,0,1-.36,1.2,1.06,1.06,0,0,1-.57.17,1,1,0,0,1-.67-.26,3.84,3.84,0,0,0-1.78-.68c-1.31-.27-3.11-.65-3.87-3A1,1,0,0,1,133.69,266.56ZM135,107a1,1,0,0,1-.31,1.32,3.37,3.37,0,0,1-1.88.67,2.41,2.41,0,0,1-1.77-.81,1,1,0,0,1-.37.39,5.8,5.8,0,0,1-2.94,1c-.81,0-2.28-.32-3-2.51a1,1,0,0,1,.58-1.23l1.76-.7,1.76-.69a.94.94,0,0,1,.36-.08,1,1,0,0,1,.93.64l.11.27a1.16,1.16,0,0,1,.44-.19h0l-.09-.36a1,1,0,0,1,.09-.78,1,1,0,0,1,.63-.48,2.59,2.59,0,0,1,.55-.07c1.53,0,2.17,1.47,2.67,2.64C134.75,106.44,134.89,106.77,135,107Zm-8.86-69a1,1,0,0,1,.66-.52,5.51,5.51,0,0,1,1.27-.15h0a7.66,7.66,0,0,1,3.56,1.08,8.6,8.6,0,0,0,1.74.73,1,1,0,0,1,.69.68,2.41,2.41,0,0,1-.06,2.18,1.32,1.32,0,0,1-1.07.53,2.15,2.15,0,0,1-.5-.07,3.85,3.85,0,0,1,.73,2,1,1,0,0,1-.36.89,1,1,0,0,1-.64.23,1,1,0,0,1-.29,0l-.54-.15a1.72,1.72,0,0,1-1.83,2.4,9.43,9.43,0,0,1-2.27-.37,1,1,0,0,1-.56-.38,2.69,2.69,0,0,1-.06-2.85,5.25,5.25,0,0,1,1.41-1.68,3.06,3.06,0,0,1-1-1.22l0-.08-.93-2.34A1,1,0,0,1,126.18,38.07Zm.32,49.76a.85.85,0,0,1,.23,0,1,1,0,0,1,.7.3,1,1,0,0,1,.27.93,10,10,0,0,0-.21,1.13h.17a1,1,0,0,1,1,.79,1.92,1.92,0,0,1-.28,1.69,1.41,1.41,0,0,1-1.11.53,1.24,1.24,0,0,1-.27,0c-.51,1.89.24,3.17,1.92,5.36a1,1,0,0,1,.17.9,1,1,0,0,1-.64.66,8,8,0,0,1-2.54.46c-1.59,0-3.8-.66-5.23-3.82a1,1,0,0,1,0-.92,1,1,0,0,1,.79-.49c2.38-.19,2.32-1,2.19-2.74C123.56,91,123.39,88.56,126.5,87.83Zm-8.66-50.6a1,1,0,0,1,.81-.42h.17c1.91.33,3,2.21,3.91,3.86a9.55,9.55,0,0,0,1.71,2.46,1,1,0,0,1,.24,1.2,1,1,0,0,1-.9.56l-.19,0a4.74,4.74,0,0,1-1.72-.82,2.23,2.23,0,0,0-1.16-.53,1.82,1.82,0,0,0-.86.29,1,1,0,0,1-.51.14,1,1,0,0,1-.9-.57,5,5,0,0,1-.39-3,2.94,2.94,0,0,0-.28-2.08A1,1,0,0,1,117.84,37.23ZM107.9,76.28a1,1,0,0,1,.61-.21.91.91,0,0,1,.23,0,9,9,0,0,0,1.13.21,1,1,0,0,1,.16-.74,1.07,1.07,0,0,1,.67-.42l.34,0a2.77,2.77,0,0,1,2,1.06c.19.2.46.47.57.47l.15,0a1.15,1.15,0,0,1,.36-.07h0c1.38,0,2.07.5,2,1.35,0,1.77-4.1,2.14-4.9,2.14a4.12,4.12,0,0,1-3.07-1,2.64,2.64,0,0,1-.73-2A1,1,0,0,1,107.9,76.28Zm-5.4,129.06a20.8,20.8,0,0,0,3.71-1,1,1,0,0,1,.39-.08.9.9,0,0,1,.42.1,1,1,0,0,1,.54.61,3.55,3.55,0,0,1-.2,3.11c-.84,1.27-2.52,1.45-4,1.61-.6.07-1.84.2-2,.44,0,0-.16.46.89,2.06a1,1,0,0,1,.09.91,1,1,0,0,1-.7.61,5.58,5.58,0,0,1-1.27.16,2.53,2.53,0,0,1-2.57-2.46c0-.11,0-.25-.08-.37a7.3,7.3,0,0,0-1.87.9,1,1,0,0,1-.52.14,1,1,0,0,1-.62-.21,1,1,0,0,1-.33-1.09C95.68,206.82,99.31,206,102.5,205.34ZM86.8,61.94c.66-1.73,1.71-2.6,3.12-2.6h0c1.42,0,2.88.94,4.29,1.85,1.18.76,2.4,1.55,3.25,1.55h.32a1,1,0,0,1,.94,1.36c-.66,1.7-1.66,2.56-3,2.56s-2.57-.88-3.91-1.81c-1.17-.82-2.37-1.67-3.32-1.67a1.33,1.33,0,0,0-.45.08A1,1,0,0,1,87,63,1,1,0,0,1,86.8,61.94Zm4.64,61.57c0,.83-4,.91-4,.91a.5.5,0,0,1,0-1l3.51-.41-.43.53Zm-16,6.31a1.15,1.15,0,0,1,.26,0,1.06,1.06,0,0,1,.51.14,1,1,0,0,1,.46.62c.45,1.82,0,4.23-4.47,5.41a1.07,1.07,0,0,1-.25,0,1,1,0,0,1-1-.76C70.49,133.42,70.9,131,75.4,129.82ZM68.59,159a4.23,4.23,0,0,1,1.52.28,1,1,0,0,1,.55,1.34c-1,2.35-3.69,3.83-6.26,5.26L63,166.7a1,1,0,0,1-.5.14,1,1,0,0,1-.5-.13,1,1,0,0,1-.5-.86,6.42,6.42,0,0,1,2.07-4.4A7.48,7.48,0,0,1,68.59,159Zm-2.77,10.55a1,1,0,0,1,0-2,2.18,2.18,0,0,1,2.26,2.08,2.12,2.12,0,0,1-1.09,1.8,5,5,0,0,1-2.63.6,1,1,0,0,1,0-2c1.17,0,1.61-.28,1.7-.4A.32.32,0,0,0,65.82,169.58ZM41.24,144.66c.36-1.27,1.73-1.87,2.93-2.39l.64-.29a.8.8,0,0,1,.3-.09l-.1-.27a1,1,0,0,1,0-.84,1,1,0,0,1,.68-.51c1.52-.32,2-.79,2.08-1a1.56,1.56,0,0,0-.2-1.28,1,1,0,0,1,.38-1.29,4.25,4.25,0,0,1,2.24-.68,5.86,5.86,0,0,1,1.36.19,4.09,4.09,0,0,0,.92.15,2.59,2.59,0,0,0,1.59-.66,2.43,2.43,0,0,0-1-.21l-.25,0h-.16a1,1,0,0,1-.91-.6,1,1,0,0,1,.29-1.18,11,11,0,0,1,4.49-2.42c1-.28,1.63-.45,3.75-3.44a1,1,0,0,1,.81-.42,1.1,1.1,0,0,1,.4.08,1,1,0,0,1,.58,1.12c-1.41,7-5.1,9.64-8.67,12.14a24.5,24.5,0,0,0-5.36,4.63,1,1,0,0,1-.78.37h-.15a1,1,0,0,1-.78-.62l-.35-.89a.88.88,0,0,0,0,.15c-.16.45-.21.62-.08.93a1,1,0,0,1-.56,1.3l-2.34.93a1,1,0,0,1-.37.07,1,1,0,0,1-.83-.44A3,3,0,0,1,41.24,144.66Zm6.24,22.88L47,166.9a1,1,0,0,1,.78-1.62,1.07,1.07,0,0,1,.25,0,6.34,6.34,0,0,0,1.49.19,8.34,8.34,0,0,0,4.09-1.25,1,1,0,0,1,.49-.13,1.07,1.07,0,0,1,.35.06,1,1,0,0,1,.59.6c.59,1.63-.86,2.45-1.58,2.85l.89,2.25,1.13,2.82a1,1,0,0,1-.25,1.11A3.24,3.24,0,0,1,53,174.87a2.71,2.71,0,0,1-2.14-1.46,2.3,2.3,0,0,0-.51-.62s-.24,0-.8.54a1,1,0,0,1-1.5-1.3C49.46,170,49.39,169.89,47.48,167.54Zm-9.23-7.79h0a10.75,10.75,0,0,1,2.37.39,9,9,0,0,0,1.8.33.69.69,0,0,0,.28,0,1.08,1.08,0,0,1,.38-.08,1,1,0,0,1,.58.19,1,1,0,0,1,.42.86c-.1,2.28-1.14,2.75-2,2.75a5,5,0,0,1-2-.63,4.89,4.89,0,0,0-1.86-.63,1,1,0,0,0-.78.33,1,1,0,0,1-.7.29.92.92,0,0,1-.36-.07,1,1,0,0,1-.64-.87,2.72,2.72,0,0,1,.63-2.12A2.43,2.43,0,0,1,38.25,159.75Zm-8.42-19.87c-.47-1.37-.42-4.83.76-5.76l.13-.09a4,4,0,0,1,2-.59,2.63,2.63,0,0,1,2.13,1.09,1,1,0,0,1,.14.24l.4,1,.53,1.34a1.06,1.06,0,0,1,0,.8,1,1,0,0,1-.6.52c-1.67.55-2.49.92-2.38,1.39a1,1,0,0,1-.38,1,1.81,1.81,0,0,1-1.06.38A1.73,1.73,0,0,1,29.83,139.88ZM43,179.78a1,1,0,0,1-.9.58h0a3,3,0,0,1-1.32-.27,1,1,0,0,1-.3.93,1,1,0,0,1-.68.27,1.19,1.19,0,0,1-.32,0,2.79,2.79,0,0,0-1-.14,9.52,9.52,0,0,0-2.21.36,8.35,8.35,0,0,1-1.93.32,2.13,2.13,0,0,1-1.7-.71c-.6-.72-.73-1.88-.42-3.77a1,1,0,0,1,.81-.81l.18,0a1,1,0,0,1,.86.49c.2.34.48.53,1.3.53.28,0,.58,0,.87,0s.66,0,1,0a3.51,3.51,0,0,1,2.34.72,2.63,2.63,0,0,1,.49-1.27,3.27,3.27,0,0,1-2.45-2.65,1,1,0,0,1,.57-1.14,6.46,6.46,0,0,1,2.59-.65,2.77,2.77,0,0,1,2.49,1.29C44.38,175.42,43.72,178.28,43,179.78Zm6.84,36.41A3.57,3.57,0,0,1,47,217.31c-2.07,0-4.23-1.13-4.36-3.28a1,1,0,0,1,.33-.79,3.26,3.26,0,0,1,2.16-1.07,2.72,2.72,0,0,1,2.14,1.47,2.7,2.7,0,0,0,.51.62,2.18,2.18,0,0,0,.8-.54,1,1,0,0,1,.68-.27,1,1,0,0,1,.29.05,1,1,0,0,1,.68.72A2.28,2.28,0,0,1,49.86,216.19ZM59.13,230c-1.12,1.37-1,1.57-.58,1.92a1,1,0,0,1,.34.87,1,1,0,0,1-.52.77,4.67,4.67,0,0,1-2.14.72c-1.6,0-1.68-1.61-1.71-2.21a4.4,4.4,0,0,0-.09-.73h-.16a3.35,3.35,0,0,0-1,.19,1,1,0,0,1-.3,0,.93.93,0,0,1-.46-.12,1,1,0,0,1-.49-.59,2.6,2.6,0,0,1,.12-2.33,1.86,1.86,0,0,1,1.57-.69,7.48,7.48,0,0,1,1.58.24,8.58,8.58,0,0,0,1,.18,3.89,3.89,0,0,0-.11-.43,1,1,0,0,1,.16-.9,1,1,0,0,1,.8-.39h0c1.16,0,2.29.18,2.7,1.06S59.7,229.33,59.13,230Zm1.41-18.89a1.11,1.11,0,0,0-.39.07,1,1,0,0,1-.33.06,1,1,0,0,1-.89-.55,5.58,5.58,0,0,1-.55-1.51l-.53,1.29c-.23.56-.44,1.08-.61,1.52a1.05,1.05,0,0,1-.35.46,3.5,3.5,0,0,1-2,.74,3.34,3.34,0,0,1-2.28-1.11c-.41-.37-.68-.59-.94-.59a.75.75,0,0,0-.24,0c-.42.28-.86.58-1.3.9a1,1,0,0,1-.58.19,1,1,0,0,1-.68-1.74,5.94,5.94,0,0,1,1.63-1.13l.85-.56c3.76-2.47,5.84-3.83,5.64-10.39a1,1,0,0,1,.51-.9,1.05,1.05,0,0,1,.49-.13,1,1,0,0,1,.54.16c2.24,1.44,2.07,4.42,1.21,7.45a14.87,14.87,0,0,1,2.43-1.79,14.14,14.14,0,0,0,2.13-1.54,1,1,0,0,1,.7-.29h.1a1,1,0,0,1,.73.43c1.69,2.5.09,3.93-.87,4.78s-1.32,1.17-.35,2.42a1,1,0,0,1-.27,1.46,3.49,3.49,0,0,1-1.87.58,4.63,4.63,0,0,1-1.21-.2A2.83,2.83,0,0,0,60.54,211.14Zm9,25.7c-.3,0-.61,0-.91-.07a5.64,5.64,0,0,0-.77-.07,1.23,1.23,0,0,0-.36,0,1.07,1.07,0,0,1-.25,0,1,1,0,0,1-.9-.56,4.86,4.86,0,0,1-.39-3,3,3,0,0,0-.28-2.08,1,1,0,0,1,.8-1.47l.43,0h0c2.64,0,3.17,2,3.46,3.1a6.93,6.93,0,0,0,.21.68h.18a1,1,0,0,1,.64.23,1,1,0,0,1,.36.78C71.73,236.52,70.36,236.84,69.54,236.84Zm7.57-25.93c-2.06,5.14-3.23,8.54-1.2,13.26a1,1,0,0,1-.92,1.39h-.1a13.33,13.33,0,0,1-5.16-1.31A1.83,1.83,0,0,0,69,224c-.61,0-2,.62-4.31,1.69a1,1,0,0,1-.82,0,1,1,0,0,1-.55-.6c-1.07-3.07,1.67-4.49,4.18-5.45a7.6,7.6,0,0,0-2.41-.68h0c-.33,0-.49,0-.51.68a1,1,0,0,1-.49.84,1,1,0,0,1-1,0c-2.2-1.15-2.23-2.53-2-3.26.48-2,3.46-3.19,5.94-3.19a5.78,5.78,0,0,1,3.86,1.27,3.94,3.94,0,0,1-.27-3.28,1,1,0,0,1,.58-.59l2.37-.95,2.31-.91a.94.94,0,0,1,.37-.07,1,1,0,0,1,.71.29A1,1,0,0,1,77.11,210.91Zm-.5-53.78a3.31,3.31,0,0,1-2.28,1.14,2.09,2.09,0,0,1-.7-.11,2.25,2.25,0,0,1-1.51-2.64c.29-1.7,2.09-3.78,3.78-3.78h0c.48,0,2.06.21,2.11,2.89A4.64,4.64,0,0,1,76.61,157.13Zm-.76-73.45h-.47A9,9,0,0,1,74,83.6a1,1,0,0,1-.67-.43,2,2,0,0,1-.36-1.63,1.8,1.8,0,0,1,.66-1l-.16-.39L73,79a1,1,0,0,1,.16-1,1,1,0,0,1,.77-.36h.19a10.18,10.18,0,0,1,3.72,1.82,6.74,6.74,0,0,0,3.68,1.58,5.32,5.32,0,0,0,2.46-.7.94.94,0,0,1,.84,0,1,1,0,0,1,.58.62c1.19,3.69-2.87,5-5.56,5.92a1.12,1.12,0,0,1-.31.05,1,1,0,0,1-.54-.16A1,1,0,0,1,78.5,86C78.24,83.68,77.34,83.68,75.85,83.68ZM81,114.05c-.32,0-.62-.07-.91-.07a3.23,3.23,0,0,0-.46,0h-.15a1,1,0,0,1-.85-.47,1.93,1.93,0,0,1,0-2,5.39,5.39,0,0,1,4.32-2.24h0a2.69,2.69,0,0,1,2.13.86,2.77,2.77,0,0,1,.54,2.33,1,1,0,0,1-.44.69,5.35,5.35,0,0,1-3,1A8.11,8.11,0,0,1,81,114.05ZM84.2,175.5a10.25,10.25,0,0,0-.62-1.65,1,1,0,0,1,0-1,1,1,0,0,1,.84-.46h.08c2,.16,3.69,1.57,5,4.31a1,1,0,0,1-.25,1.2,3.56,3.56,0,0,1-2.26,1C85.3,178.91,84.69,177,84.2,175.5Zm5.6,85.38c-.27,0-1.12,0-2.13-2.06a8,8,0,0,1-.87-3.23A2.28,2.28,0,0,1,89.14,253h0a1,1,0,1,1,0,2c-.22,0-.34,0-.34.55a6.27,6.27,0,0,0,1.28,3.33,1,1,0,0,1-.28,2Zm-.4-16.59h-.19a1,1,0,0,1-.88-.53c-1.14-2.16-1.42-3.86-.84-5.19a4.37,4.37,0,0,1,3.11-2.32l.26,0a1,1,0,0,1,.93.63l.33.83a1.86,1.86,0,0,1,1.28-.63h0a1.16,1.16,0,0,1,1.15,1.09C94.68,239.52,92.29,243.72,89.4,244.29Zm5.17-13.72a14.33,14.33,0,0,0-2.93-.47,2.8,2.8,0,0,0-.92.13,1.12,1.12,0,0,1-.31.05,1.17,1.17,0,0,1-.26,0,.75.75,0,0,1-.29.09,5.79,5.79,0,0,0-.68,2.83,4.4,4.4,0,0,0,0,.45,1,1,0,0,1,.41.8,1,1,0,0,1-1,1,1.34,1.34,0,0,1-1.28-1,4.08,4.08,0,0,1-.15-1.2c0-1.24.45-4.76,2.47-4.81.92-2.29,3.32-2.29,4.15-2.29.63,0,1.29.05,1.93.11s1.27.1,1.87.1a4.4,4.4,0,0,0,2.15-.42,1.05,1.05,0,0,1,.49-.13,1,1,0,0,1,1,1,4.63,4.63,0,0,1-1,3.44,3.35,3.35,0,0,1-2.5.91A14.73,14.73,0,0,1,94.57,230.57Zm9.19,12.92c0,.24-.07.47-.1.71-.27,2-.6,4.41-3.86,5.46a1.15,1.15,0,0,1-.31,0,1,1,0,0,1-.88-.52c-1.79-3.33.9-5,2.68-6.09.32-.19.63-.38.93-.58a1,1,0,0,1,.56-.18,1,1,0,0,1,.53.16A1,1,0,0,1,103.76,243.49Zm5.89-10.69a1.61,1.61,0,0,0-.06,1.09,1,1,0,0,1-.58,1.26l-2.34.93a1,1,0,0,1-.37.07,1,1,0,0,1-.85-.47,3.51,3.51,0,0,1-.38-3.08,1.6,1.6,0,0,0,.06-1.09,1,1,0,0,1,.58-1.26l1.23-.49,1.11-.44a.94.94,0,0,1,.37-.07,1,1,0,0,1,.85.47A3.51,3.51,0,0,1,109.65,232.8Zm5-107.92a8.28,8.28,0,0,0-4.08,1.24,1,1,0,0,1-.49.13,1.13,1.13,0,0,1-.32,0,1,1,0,0,1-.6-.56,2.86,2.86,0,0,1,.19-2.8,4.51,4.51,0,0,1,3.8-1.75,4.21,4.21,0,0,1,4.19,2.68,1,1,0,0,1-.21,1,1,1,0,0,1-.74.33,1,1,0,0,1-.24,0A6,6,0,0,0,114.62,124.88ZM124,244.94c.77.62,1.15,1.13,1,1.79s-1,.91-1.52,1c-.37,0-.92.12-1.07.34,0,.07-.18.35,0,1.14a1,1,0,0,1-.16.85,3.72,3.72,0,0,1,1.59,3,1,1,0,0,1-.42.79,3.1,3.1,0,0,1-1.81.67,2.94,2.94,0,0,1-2-1c-.27-.25-.52-.48-.69-.48l-.16,0a1.12,1.12,0,0,1-.31.05,1.06,1.06,0,0,1-.5-.13,1,1,0,0,1-.48-.66,2.51,2.51,0,0,1,.39-2.19,2.06,2.06,0,0,1,.49-.44,6,6,0,0,1-2.15-1.94,3.6,3.6,0,0,1-.28-3.55,1,1,0,0,1,.9-.58,1.45,1.45,0,0,1,.29,0,9,9,0,0,1,3.5,2.18,1.89,1.89,0,0,0,.39-.47,4.61,4.61,0,0,0-.48-.6,9.24,9.24,0,0,1-1.56-2.3,1,1,0,0,1,0-.79,1,1,0,0,1,.56-.55l1.41-.56,5.61-2.23a1,1,0,0,1,.37-.07,1.15,1.15,0,0,1,.37.06,4.74,4.74,0,0,1,1.81,1.55c.52.62.86,1,1.22,1l.14,0,.2,0H131c.35,0,1.29.08,1.3,1,0,.28-.11,1-1.15,1A14,14,0,0,0,124,244.94Zm12.43,38.2a1.67,1.67,0,0,0-.06,1.09,1,1,0,0,1-.1.86,1,1,0,0,1-.73.46,7.43,7.43,0,0,1-.91.06,3,3,0,0,1-2.53-1,3.82,3.82,0,0,1-.2-3.35,1,1,0,0,1,.59-.65l2.34-.93a1,1,0,0,1,.37-.07,1,1,0,0,1,.85.47A3.47,3.47,0,0,1,136.43,283.14Zm4-6.89c-.15.45-.2.62-.07.93a1.08,1.08,0,0,1,0,.77,1.05,1.05,0,0,1-.55.53l-1.45.58-.89.35a1,1,0,0,1-1.2-.37,4.73,4.73,0,0,1-.39-.68,1.18,1.18,0,0,1-.15.25,3.38,3.38,0,0,1-2.93,1.09,16.35,16.35,0,0,1-2.13-.18,3,3,0,0,0-.42,0,1,1,0,0,1-.85-.61,4.43,4.43,0,0,1,1.22-5.6,1,1,0,0,1,.59-.23h.26c1.39,0,1.71.71,1.78,1.13a1.49,1.49,0,0,1-.45,1.27,12,12,0,0,0,2.21.19,1,1,0,0,1,.85.49,5.21,5.21,0,0,1,2.75-2l.64-.29a1.07,1.07,0,0,1,.43-.09,1,1,0,0,1,.47.12,1,1,0,0,1,.52.73A3.28,3.28,0,0,1,140.42,276.25Zm-.67-9.38h0a4.49,4.49,0,0,1,.83-2.75,3.37,3.37,0,0,1,2.83-1.35,1,1,0,0,1,0,2,1.42,1.42,0,0,0-1.23.55,2.59,2.59,0,0,0-.43,1.55c0,1.26.67,2.68,1.56,2.68a1,1,0,0,1,0,2C141.08,271.55,139.75,269.17,139.75,266.87ZM151.52,290a1,1,0,0,1-.67.26.84.84,0,0,1-.31,0,3.91,3.91,0,0,0-1.12-.26h-.06a1.2,1.2,0,0,1-.16.23,5.29,5.29,0,0,1-2.69,1.88,1,1,0,0,1-.34.06,1,1,0,0,1-.44-.1,1,1,0,0,1-.51-.58c-.3-.9-.79-2.41-1.25-2.41l-.13,0-.24,0a1,1,0,0,1-1-.76,1.58,1.58,0,0,1,.3-1.37c.77-1,2.57-1.1,3.31-1.1,2.42,0,5.08,1,5.59,3.19A1,1,0,0,1,151.52,290Zm.54-63.92a2.77,2.77,0,0,1-2.14-.84,2.83,2.83,0,0,1-.62-2.26,1,1,0,0,1,.43-.73,1,1,0,0,1,.56-.17.86.86,0,0,1,.28,0,4.39,4.39,0,0,0,1.17.21.68.68,0,0,0,.46-.12c.05-.06.28-.39.14-1.58a1,1,0,0,1,.84-1.1l.34,0a2.79,2.79,0,0,1,2,1.06c.19.2.45.47.57.47l.15,0a1.15,1.15,0,0,1,.36-.07,1,1,0,0,1,.88.54,1.86,1.86,0,0,1-.13,1.91A7.11,7.11,0,0,1,152.06,226.09Zm4.8,45.57-.63.29a1.07,1.07,0,0,1-.43.09,1,1,0,0,1-1-1,4.46,4.46,0,0,1,3.24-4.72,1,1,0,0,1,.34-.06,1,1,0,0,1,.83.45,3,3,0,0,1,.59,2.51C159.43,270.54,158.06,271.13,156.86,271.66Zm6.08,17.45a3.36,3.36,0,0,0,1.37.42,1.47,1.47,0,0,0,.36,0l.21,0a1,1,0,0,1,1,.79,2.47,2.47,0,0,1-.4,2.19,2.43,2.43,0,0,1-2,.84,4.44,4.44,0,0,1-3.06-1.33,3.38,3.38,0,0,1-1-2.46,1,1,0,0,1,.88-1h.05a1.06,1.06,0,0,1-.18-.33,2.45,2.45,0,0,1,.22-2.31,3.38,3.38,0,0,1,2.93-1.09,16.35,16.35,0,0,1,2.13.18l.42,0a1,1,0,0,1,.88.69,2.43,2.43,0,0,1-.21,2.31,3.38,3.38,0,0,1-2.93,1.09q-.37,0-.72,0Zm8.23,5a1,1,0,0,1-.83.61c-.37,0-.69.05-1,.05-2.64,0-2.7-1.6-2.75-2.76a6.92,6.92,0,0,0-.34-2.18,1,1,0,0,1,.95-1.32h.17a5.09,5.09,0,0,1,3.69,2.32A3.67,3.67,0,0,1,171.17,294.14Zm1.16-10.74a2.54,2.54,0,0,0-.38,1.73,1,1,0,0,1-1,1.21h0c-3.53-.07-4.76-1.79-4.75-3.25s1.58-3.31,4.46-3.31a8,8,0,0,1,1.44.13,1,1,0,0,1,.81.87A4.7,4.7,0,0,1,172.33,283.4Zm11.27-18.53c-.51.5-.5.55-.43.72a1,1,0,0,1-.07.86,1,1,0,0,1-.71.49l-.34,0a2.78,2.78,0,0,1-2-1.07c-.19-.19-.46-.46-.57-.46l-.15,0a1.13,1.13,0,0,1-.36.06,1,1,0,0,1-.5-.13,1,1,0,0,1-.49-.7,6,6,0,0,1-.07-.61,5.22,5.22,0,0,1-2.31,3.42l.42-.17a.94.94,0,0,1,.37-.07,1,1,0,0,1,.76.36,1,1,0,0,1,.09,1.16,25.65,25.65,0,0,1-7.06,7.06,1.06,1.06,0,0,1-.59.19,1,1,0,0,1-.54-.16,1,1,0,0,1-.44-1,5,5,0,0,0-.16-3.38.89.89,0,0,1-.08-.31l-.17.09,0,0a3,3,0,0,1,.33,2.05,1,1,0,0,1-.56.75,4.42,4.42,0,0,1-2,.47,8.28,8.28,0,0,1-1-.08,5.38,5.38,0,0,0-.78-.07,2.51,2.51,0,0,0-1.29.35,1,1,0,0,1-1.33-.35,2,2,0,0,1,0-2,5.43,5.43,0,0,1,4.33-2.25,3.62,3.62,0,0,1,.89.11c-.39-3.05,2.78-4.46,5.35-5.59,1.65-.73,3.36-1.49,4-2.49a1,1,0,0,1,.86-.48H177a1,1,0,0,1,.81.79,5.23,5.23,0,0,1,.09.76,1.83,1.83,0,0,1,.39-.86,1.66,1.66,0,0,1,1.32-.57A5.65,5.65,0,0,1,181,262a5.08,5.08,0,0,0,1.25.24.78.78,0,0,0,.65-.25,1,1,0,0,1,.75-.35,1.35,1.35,0,0,1,.28,0,1,1,0,0,1,.71.81A2.63,2.63,0,0,1,183.6,264.87Zm1.94-28.57c-.23,1.89-4.54,2.73-6.13,2.73-1.8,0-2.54-.69-2.84-1.27-.44-.87-.21-2,.71-3.26a1,1,0,0,1,.7-.42h.3a3.54,3.54,0,0,1,2.27,1c.44.35.72.57,1,.57s.7-.15,1.48-.84a1,1,0,0,1,.67-.25l.24,0C185.52,235,185.58,235.91,185.54,236.3Zm3.17-28.77a.82.82,0,0,1-.26,0,1,1,0,0,1-.73-.32,1,1,0,0,1-.22-1,2.88,2.88,0,0,0,0-2.22h-.07l-.18,0a.76.76,0,0,1-.21,0,1,1,0,0,1-.83-.45,2,2,0,0,1-.36-1.63,2.44,2.44,0,0,1,1.44-1.45l.09,0,.49-.19,1.85-.74a1.16,1.16,0,0,1,.37-.07,1.05,1.05,0,0,1,.49.13,1,1,0,0,1,.49.71c.06.35.14.72.21,1.08C191.72,203.45,192.36,206.55,188.71,207.53Zm4.47-142c-1.26,0-1.68.33-1.72.42h0a.79.79,0,0,0,.26.06,1,1,0,0,1,0,2A2.18,2.18,0,0,1,189.46,66h0a2.13,2.13,0,0,1,1.09-1.8,5.1,5.1,0,0,1,2.63-.59,1,1,0,0,1,0,2Zm81-11.76a3.18,3.18,0,0,1,2.46-1.21h.1a1,1,0,0,1,.9.56,1,1,0,0,1-.17,1.13c-.22.24,0,1.12.21,1.77.32,1.11.68,2.36,0,3.4a3.18,3.18,0,0,1-2.46,1.21h-.11a1,1,0,0,1-.72-1.69c.22-.23,0-1.12-.22-1.77C273.8,56.09,273.44,54.84,274.14,53.8Zm-5.79,185.35a1,1,0,0,1,.57-.6l3.51-1.39a1,1,0,0,1,.37-.07,1,1,0,0,1,.81.41,2.67,2.67,0,0,1-.35,3.87c-.52.55-.52.63-.46.84a1,1,0,0,1-.07.8,1,1,0,0,1-.63.49,2.77,2.77,0,0,1-.56.07c-1.53,0-2.19-1.53-2.67-2.64-.16-.35-.3-.69-.45-1A1,1,0,0,1,268.35,239.15Zm-1-44.63a1,1,0,0,1-.4.86,3.82,3.82,0,0,1-2.29.89,3.72,3.72,0,0,1-2.15-.84,2,2,0,0,0-1-.49,1,1,0,0,0-.39.09,1.16,1.16,0,0,1-.37.07.93.93,0,0,1-.46-.12,1,1,0,0,1-.51-.66,2.25,2.25,0,0,1,.4-2,3.57,3.57,0,0,1,2.83-1.12C265.06,191.24,267.22,192.37,267.34,194.52Zm-3.71-27a.94.94,0,0,1,.43-.1,1,1,0,0,1,.77.35,3.1,3.1,0,0,1,.95,2.82c-.38,1.33-1.88,1.81-3.33,2.28a9.9,9.9,0,0,0-1.65.62,1,1,0,0,1-.49.13,1,1,0,0,1-.54-.16,1,1,0,0,1-.45-.92C259.47,170.45,260.88,168.81,263.63,167.48Zm-5.09,60.92a1.94,1.94,0,0,1,1.59-.92h0a1,1,0,0,1,.1,2,.82.82,0,0,0-.17.53c0,.3.11.65.9.65a1,1,0,0,1,0,2,2.63,2.63,0,0,1-2.9-2.65A2.9,2.9,0,0,1,258.54,228.4ZM257.11,56.45c-.24,2.37-.57,5.62-5.22,6.7a.91.91,0,0,1-.23,0,1,1,0,0,1-.88-.52c-1.72-3.16.92-4.65,2.67-5.64a7.66,7.66,0,0,0,1.91-1.32,1,1,0,0,1,.76-.35.91.91,0,0,1,.39.08A1,1,0,0,1,257.11,56.45ZM233.44,42.13a2.4,2.4,0,0,1,1.45-1.45l.08,0,.4-.16,1.94-.77a1,1,0,0,1,1,.15,7.77,7.77,0,0,1-.82-1.63c-.56-1.68.1-2.5.54-2.83a1,1,0,0,1,.6-.21h.32a4.41,4.41,0,0,0,3.24-1A14,14,0,0,1,246.51,32a.79.79,0,0,1,.3,0,1,1,0,0,1,.67.25,1,1,0,0,1,.31,1,5,5,0,0,0,.17,3.38,1.55,1.55,0,0,1,.07.23h0l.36-.1a.92.92,0,0,1,.29,0,1.06,1.06,0,0,1,.51.14,1,1,0,0,1,.46.65l0,.14a1,1,0,0,1,.26-.15l3.51-1.4a1,1,0,0,1,1.25.46c1.4,2.61.89,3.95.25,5.1-.32.56-.43.77,1.14,2.09a1,1,0,0,1-.65,1.76l-.27,0c-2.77-.77-3.37-2-3.9-3.53A6.61,6.61,0,0,0,249.6,39a.87.87,0,0,1-.09-.11l-.13.19a1.44,1.44,0,0,1-1.12.52,1.33,1.33,0,0,1-.28,0l0,.12a3.44,3.44,0,0,1-2.8,3.07.91.91,0,0,1-.23,0,1,1,0,0,1-.95-.7,2.37,2.37,0,0,0-.44-.84,1.83,1.83,0,0,1-1.73,1.19,4.37,4.37,0,0,1-2.94-1.86,3.18,3.18,0,0,1-.33,3.87c-.45.65-.6.9-.4,1.4a1,1,0,0,1,0,.78,1,1,0,0,1-.57.53,4.16,4.16,0,0,1-1.4.29,1.6,1.6,0,0,1-1.35-.61,3,3,0,0,1,0-2.67h-.11a1,1,0,0,1-.83-.44A2,2,0,0,1,233.44,42.13Zm-13.71-8.52a2.73,2.73,0,0,1,2.37-1.18,3.08,3.08,0,0,1,.53,0,2.35,2.35,0,0,1,.08-.6c.37-1.27,1.73-1.87,2.93-2.4l.64-.29a1.07,1.07,0,0,1,.43-.09,1,1,0,0,1,.47.12,1,1,0,0,1,.52.73,3.41,3.41,0,0,1-.22,1.65c-.16.45-.21.63-.08.93a1,1,0,0,1,0,.77,1,1,0,0,1-.55.53l-1.44.57.08.14a2,2,0,0,1,.14,2.08,1.84,1.84,0,0,1-1.73.81c-1.25,0-3.65-.79-4.15-1.73A2.06,2.06,0,0,1,219.73,33.61Zm-3.14,25.84a1.42,1.42,0,0,1,1.11-.52,1.81,1.81,0,0,1,1.1.4A2.43,2.43,0,0,0,220,58.22,4.37,4.37,0,0,1,223.61,56a9.17,9.17,0,0,1-.5-1.6,1,1,0,0,1,1-1.22,1.06,1.06,0,0,1,.31,0,3.54,3.54,0,0,0,1.08.18,6.24,6.24,0,0,0,3.34-1.46A8.71,8.71,0,0,1,233.76,50a7.07,7.07,0,0,1,1.56.19,1,1,0,0,1,.46,1.69,4.18,4.18,0,0,0-.87,2.47c-.25,1.64-.58,3.87-3.52,4.78a1,1,0,0,1-.94-.19,1,1,0,0,1-.35-.88,12.42,12.42,0,0,0,.1-2l-.71.52a5.91,5.91,0,0,1-3.27,1.56,2.31,2.31,0,0,1-1.54-.55l-.06.08a4.47,4.47,0,0,0-.73,1.87c-.37,1.56-.88,3.71-4.32,4.32h-.18a1,1,0,0,1-1-.76c-.28-1.12-.7-1.12-.9-1.12h-.23a1,1,0,0,1-1-.79A2,2,0,0,1,216.59,59.45Zm15.46,4a1,1,0,0,1,0,2,2.38,2.38,0,0,1-2.59-2.43,3.71,3.71,0,0,1,.79-2.22,2.84,2.84,0,0,1,2.19-1.17h0a1,1,0,0,1,0,2,.87.87,0,0,0-.61.4,1.68,1.68,0,0,0-.37,1C231.46,63.26,231.46,63.48,232.05,63.48ZM220,104.57a1,1,0,0,1,.13-1,1,1,0,0,1,.81-.4H221c2,.16,3.69,1.57,5,4.31a1,1,0,0,1-.32,1.26,3.48,3.48,0,0,1-4.52,0,2.18,2.18,0,0,0-1.13-.51,2.12,2.12,0,0,0-1.13.48,1,1,0,0,1-.58.19,1.15,1.15,0,0,1-.36-.07,1,1,0,0,1-.62-.71c-.35-1.57,1-2.37,1.79-2.84.29-.17.81-.48.87-.64A.38.38,0,0,0,220,104.57ZM209.55,31.79a5.4,5.4,0,0,1,3-1,8.25,8.25,0,0,1,1.15.09c.31,0,.61.07.9.07a3.48,3.48,0,0,0,.47,0h.15a1,1,0,0,1,.68.26,1,1,0,0,1,.31.81c-.16,2.05-1.57,3.69-4.31,5a1.08,1.08,0,0,1-.43.1,1.16,1.16,0,0,1-.37-.07,1,1,0,0,1-.56-.56l-.36-.9-1-2.61A1,1,0,0,1,209.55,31.79Zm4.9,4.81a.86.86,0,0,1,.32-.05.91.91,0,0,1,.45.11,1,1,0,0,1,.5.58c1.19,3.69-2.87,5-5.56,5.92a.84.84,0,0,1-.31.05.92.92,0,0,1-.46-.11,1,1,0,0,1-.5-.58C207.71,38.83,211.77,37.49,214.45,36.6Zm-7,8.68a1,1,0,0,1,.61-.73l3.51-1.39a.94.94,0,0,1,.37-.07,1,1,0,0,1,.41.09,3.36,3.36,0,0,1,2,2c.43,1.33-.33,2.64-1.07,3.91-.64,1.11-1.31,2.25-1.11,3.24a1,1,0,0,1-.21.83,1,1,0,0,1-.77.37h0a3.1,3.1,0,0,1-2.41-.88c-.8-.88-.67-2.1-.56-3.27.15-1.45.19-2.45-.53-3.17A1,1,0,0,1,207.46,45.28Zm-2.07,85.83a1,1,0,0,1,.76-.34l.19,0a1,1,0,0,1,.76.67,2.45,2.45,0,0,1-.22,2.31,3.35,3.35,0,0,1-2.93,1.09,16.35,16.35,0,0,1-2.13-.18l-.42-.05a1,1,0,0,1-.92-.84,2.82,2.82,0,0,1,.35-2.33,1.63,1.63,0,0,1,1.31-.57h0a5.57,5.57,0,0,1,1.35.24,5.24,5.24,0,0,0,1.26.24A.72.72,0,0,0,205.39,131.11Zm-2-10.14a.75.75,0,0,1,.21,0,1.06,1.06,0,0,1,.61.2,1,1,0,0,1,.38.74c.2,3.59-1.47,6.69-5.08,9.49a1,1,0,0,1-.61.21,1,1,0,0,1-.64-.24,1,1,0,0,1-.25-1.23,7.19,7.19,0,0,0,.55-2.84C198.71,125,198.93,121.9,203.39,121Zm-5.34-58.08a1.41,1.41,0,0,0,1-.3.46.46,0,0,0,.16-.34s0,0,0-.07a1,1,0,0,1,.09-2,2,2,0,0,1,1.92,2.06,2.53,2.53,0,0,1-.74,1.77,3.28,3.28,0,0,1-2.41.88,1,1,0,0,1,0-2ZM198,251.29a1.07,1.07,0,0,1-.25,0,1,1,0,0,1-1-.76c-.45-1.82,0-4.23,4.46-5.41a1.15,1.15,0,0,1,.26,0,1.06,1.06,0,0,1,.51.14,1,1,0,0,1,.46.62C202.88,247.69,202.47,250.1,198,251.29ZM206.74,315a14.5,14.5,0,0,0-.23,2.62,1,1,0,0,1-.32.78,1.47,1.47,0,0,1-1,.4c-1.6,0-2.19-2.45-2.2-4,0-2.28,1.17-3.76,3-3.77h0a1,1,0,0,1,1,1A14.29,14.29,0,0,1,206.74,315ZM228,299.9a.94.94,0,0,1-.83-.38,3.35,3.35,0,0,1,.22.7c.62,3.65-6.36,8.66-10.57,11.32a1.21,1.21,0,0,1-.44.15l-.34,0a1.67,1.67,0,0,1-1.31-.51,2.12,2.12,0,0,1-.38-1.75,2.39,2.39,0,0,0-.28-1.69,3.16,3.16,0,0,1-.12.37c-.71,1.9-2.92,2.9-5.07,3.86l-.14.07a1,1,0,0,1-.41.08,1,1,0,0,1-.88-.52c-1.72-3.16.92-4.65,2.67-5.64a7.66,7.66,0,0,0,1.91-1.32,1,1,0,0,1,.76-.35h.14a1,1,0,0,1,.77.57,5.18,5.18,0,0,1,.46,1.61,1,1,0,0,1,.73-.32h.16a11.23,11.23,0,0,0,1.78.19h.11a12.27,12.27,0,0,0-1.39-1.81,1,1,0,0,1,.33-1.57c.48-.22,1-.4,1.52-.58,1.54-.54,2.25-.87,2.15-1.29a1,1,0,0,1,1-1.25h0a2.47,2.47,0,0,1,2,.74,1.74,1.74,0,0,1,.37.66,2.92,2.92,0,0,0-.2-2.53,1,1,0,0,1,.9-1.44.91.91,0,0,1,.23,0,4.83,4.83,0,0,1,3.23,1.9,5.19,5.19,0,0,1-.18-1.64c0-3.15-.48-3.31-.57-3.31a.78.78,0,0,0-.26.06,1,1,0,0,1-.33.06,1,1,0,0,1-.59-.19c-.45-.32-1.49-1.08-1.17-2.06a1.29,1.29,0,0,1,1.35-.85,6.44,6.44,0,0,1,3.23,1.21v-.07h0a3.71,3.71,0,0,1,.79-2.21,2.81,2.81,0,0,1,2.19-1.17h0a1,1,0,0,1,0,2,.87.87,0,0,0-.61.4,1.68,1.68,0,0,0-.37,1c0,.22,0,.44.59.44a1,1,0,1,1,0,2,3.1,3.1,0,0,1-.78-.09,3.62,3.62,0,0,1-.73,3.33C229.17,299.13,228.81,299.9,228,299.9Zm8.23.73a1,1,0,0,1-.46.67,3.51,3.51,0,0,1-1.86.57,4.56,4.56,0,0,1-1.21-.2,2.83,2.83,0,0,0-.7-.13,1.4,1.4,0,0,0-.4.07,1,1,0,0,1-.33.06,1,1,0,0,1-.83-.45,2.06,2.06,0,0,1-.12-2.16,3.9,3.9,0,0,1,3.29-1.7,2.7,2.7,0,0,1,2.14.9A2.76,2.76,0,0,1,236.23,300.63Zm10-203.2a13.76,13.76,0,0,1-2.2,4.78,10.2,10.2,0,0,0-2,4.89,1,1,0,0,1-1,1h0a36.26,36.26,0,0,1-3.91-.5,27.31,27.31,0,0,0-4.59-.5,13.38,13.38,0,0,0-3.58.47,1.09,1.09,0,0,1-.26,0,1,1,0,0,1-.6-.19,1,1,0,0,1-.4-.78c-.06-2,2.08-2.39,3.49-2.62.56-.09,1.73-.28,1.86-.54,0-.07,0-.39-.32-1.07a1,1,0,0,1,.89-1.46h.1c1.88.19,3.15,1.57,4.27,2.79a14,14,0,0,0,1.27,1.28c1.46-2.36.2-5.22-1.46-7.07a1,1,0,0,1,.37-1.6L244,94a1.21,1.21,0,0,1,.37-.07,1,1,0,0,1,.65.24,1,1,0,0,1,.33,1,10,10,0,0,0-.21,1.13h.16a1,1,0,0,1,.7.28A1,1,0,0,1,246.26,97.43Zm-.86-4.09c0-.57.2-2.41,3.14-2.47h0a1,1,0,0,1,1,1.23,10.88,10.88,0,0,0-.21,1.13l.17,0a1,1,0,0,1,1,.89,3,3,0,0,1-.48,2.46,1.67,1.67,0,0,1-1.24.55C247.24,97.11,245.41,95.06,245.4,93.34ZM251.18,268a2.23,2.23,0,0,1-1.88-1c-1-1.54-.75-4.38-.4-5.25a1,1,0,0,1,.78-.62,2.43,2.43,0,0,1,.38,0c1.79,0,2.5,1.86,3.08,3.36a13.9,13.9,0,0,0,.6,1.41,1,1,0,0,1-.29,1.28A3.93,3.93,0,0,1,251.18,268Zm6.87,32.33a2.43,2.43,0,0,1-1.95.84,4.44,4.44,0,0,1-3.06-1.33,3.38,3.38,0,0,1-1-2.46,1,1,0,0,1,.88-1l.42,0h0a5,5,0,0,1,2.2.61,3.52,3.52,0,0,0,1.37.42,1.53,1.53,0,0,0,.36,0,.75.75,0,0,1,.21,0,1,1,0,0,1,1,.78A2.49,2.49,0,0,1,258.05,300.37Zm5.59-44.68a1.42,1.42,0,0,1-1.11.52,2,2,0,0,1-.48-.07,1,1,0,0,1-.47,1,1.94,1.94,0,0,1-1,.3c-.92,0-1.84-.79-1.84-2.56,0-2,1.13-4,3.23-4H262a1,1,0,0,1,.95,1.22,7.81,7.81,0,0,0-.21,1.13h.16a1,1,0,0,1,1,.79A2,2,0,0,1,263.64,255.69Zm4.28-6.95a3.77,3.77,0,0,1-.7-.07v0a1,1,0,0,1-.39.94,1,1,0,0,1-.6.2.93.93,0,0,1-.4-.09,4,4,0,0,1-2.54-3.28,7.8,7.8,0,0,0-1.78-3.54,1,1,0,0,1-.21-.92,1,1,0,0,1,.66-.68,8.38,8.38,0,0,1,2.54-.44c1.9,0,4.44.88,5.73,5.09a.91.91,0,0,1,0,.49C269.88,248.35,268.78,248.74,267.92,248.74Zm6.57,39.66a1,1,0,0,1-.75.49,7.43,7.43,0,0,1-.91.06,3,3,0,0,1-2.53-1,3.84,3.84,0,0,1-.2-3.36,1,1,0,0,1,.59-.65l1-.4L273,283a1.21,1.21,0,0,1,.37-.07,1,1,0,0,1,.65.24,1,1,0,0,1,.33,1,5,5,0,0,0,.17,3.38A1,1,0,0,1,274.49,288.4ZM280,88.55a1,1,0,0,1-.57.18,1,1,0,0,1-.46-.11,1.27,1.27,0,0,0-.55-.09c-.25,0-.54,0-.84.06a9.28,9.28,0,0,1-1.06.08c-1.74,0-2.74-1-3-2.93a1,1,0,0,1,1-1.12,1,1,0,0,1,.46.11,1.22,1.22,0,0,0,.54.09,6.63,6.63,0,0,0,.85-.07c.34,0,.7-.07,1.06-.07,1.73,0,2.74,1,3,2.92A1,1,0,0,1,280,88.55Zm8.48-33.18a3.4,3.4,0,0,1-1.89.67c-1.7,0-2.44-1.67-3-3-.09-.22-.19-.43-.29-.64A1,1,0,0,1,284,51l.4,0a3.53,3.53,0,0,1,1.25.26,2.16,2.16,0,0,0,.61.14.77.77,0,0,0,.32-.07,1,1,0,0,1,.38-.07,1,1,0,0,1,.39.08,1,1,0,0,1,.54.55l.46,1.16.47,1.18A1,1,0,0,1,288.49,55.37Zm1.69-4.26a1.91,1.91,0,0,0-.61-.15.82.82,0,0,0-.33.07.94.94,0,0,1-.37.07,1,1,0,0,1-.39-.08,1,1,0,0,1-.54-.55l-.52-1.31-.41-1a1,1,0,0,1,.78-1.36l1.56-.23a3.84,3.84,0,0,0,2.58-1c.34-.24.75-.54,1.3-.91a1,1,0,0,1,.56-.18,1,1,0,0,1,.71.29,3.15,3.15,0,0,1,1.22,2.65c-.23,1.1-1.36,1.54-2.26,1.89a6.61,6.61,0,0,0-1,.45l.06.11a1,1,0,0,1,.05,1,1,1,0,0,1-.76.56,2.66,2.66,0,0,1-.39,0A3.78,3.78,0,0,1,290.18,51.11Zm8.67,187.16a3.4,3.4,0,0,1-1.89.67c-1.7,0-2.43-1.67-3-3-.1-.22-.19-.44-.29-.65a1,1,0,0,1,0-.89,1,1,0,0,1,.74-.52,2.69,2.69,0,0,1,.4,0,3.89,3.89,0,0,1,1.25.25,2.07,2.07,0,0,0,.61.15.81.81,0,0,0,.32-.07.94.94,0,0,1,.37-.07,1.1,1.1,0,0,1,.4.08,1,1,0,0,1,.53.55l.93,2.34A1,1,0,0,1,298.85,238.27ZM296,217.75a1,1,0,0,1-.44.1,1.07,1.07,0,0,1-.43-.09,1,1,0,0,1-.54-.67c-.45-1.81,0-4.23,4.47-5.4a.73.73,0,0,1,.25,0,1,1,0,0,1,.64.24,1,1,0,0,1,.36.84C300.12,214.78,298.71,216.42,296,217.75Zm9.55-13.28-1.23.49-2.29.91a.92.92,0,0,1-.36.07,1,1,0,0,1-1-1.23,9.57,9.57,0,0,0,.21-1.13l-.17,0a1,1,0,0,1-.85-.49,1.69,1.69,0,0,1-.1-1.79,2.56,2.56,0,0,1,2.36-1.06,4.65,4.65,0,0,1,3.21,1.22,2.85,2.85,0,0,1,.83,2.09A1,1,0,0,1,305.52,204.47Zm11.77-73.95c1.06-.81,1.71-1.36,1.75-2.06a1,1,0,0,1,.91-1l.67,0a1.57,1.57,0,0,1,1.52.75c.34.75-.19,1.38-.67,1.93s-1,1.16-.93,1.69c0,.38.45.75.78,1a1,1,0,0,1-.59,1.8.84.84,0,0,1-.31-.05,4.34,4.34,0,0,0-1.12-.26h-.06l-.16.22a5.35,5.35,0,0,1-2.69,1.89,1,1,0,0,1-1.25-.53C313.87,133.13,315.92,131.56,317.29,130.52Zm-3.54,93.59a3,3,0,0,1-2.4-1.7,5.89,5.89,0,0,1-.86-2.91,2.49,2.49,0,0,1,2.59-2.71,1,1,0,0,1,0,2c-.3,0-.59,0-.59.72a3.31,3.31,0,0,0,1.28,2.6,1,1,0,0,1,0,2Zm9.64-24.38c-.55,1.43-4.41,7.2-7.83,7.2-1.15,0-2.69-.63-3.43-3.59a1,1,0,0,1,.19-.87,1,1,0,0,1,.78-.38h.36c2.47,0,3.79-.82,5.6-1.94.84-.52,1.79-1.11,3-1.69a1.13,1.13,0,0,1,.44-.1,1,1,0,0,1,.93,1.36Zm10.12,16.63a3.4,3.4,0,0,1-1.89.67c-1.7,0-2.44-1.67-3-3-.09-.22-.19-.44-.28-.65a1,1,0,0,1,0-.89,1,1,0,0,1,.74-.52,2.66,2.66,0,0,1,.39,0,3.78,3.78,0,0,1,1.25.25,1.91,1.91,0,0,0,.61.15.82.82,0,0,0,.33-.07.94.94,0,0,1,.37-.07,1,1,0,0,1,.39.08,1,1,0,0,1,.54.55l.93,2.34A1,1,0,0,1,333.51,216.36Zm.62-32.8a1,1,0,0,1-.64.23.92.92,0,0,1-.46-.11,1.27,1.27,0,0,0-.55-.09c-.25,0-.54,0-.84.06a9.28,9.28,0,0,1-1.06.08c-1.74,0-2.74-1-3-2.93a1,1,0,0,1,.55-1,5.72,5.72,0,0,1,2.54-.69c1.24,0,2.91.59,3.76,3.41A1,1,0,0,1,334.13,183.56Zm-.52-29.76a1,1,0,0,1,0-2c.24,0,.43-.47.43-.89a1.19,1.19,0,0,0-.2-.71.53.53,0,0,0-.46-.2,1,1,0,0,1,0-2,2.49,2.49,0,0,1,2.05,1,3.21,3.21,0,0,1,.61,1.92A2.63,2.63,0,0,1,333.61,153.8Zm1.05-8.37h-.16a1,1,0,0,1-.83-.45,5.46,5.46,0,0,1-.88-4.17,5.34,5.34,0,0,0,0-1.38,1,1,0,0,1,.68-1.1,4,4,0,0,1,1.22-.2h0a3.48,3.48,0,0,1,3.42,3.3A3.75,3.75,0,0,1,334.66,145.43Zm4-60.35a1,1,0,0,1,.79-.55l.53,0h0a2.56,2.56,0,0,1,2,.76c.77.86.64,2.07.52,3.25-.09.85-.2,1.82.14,2.22a1,1,0,0,1,.15,1c-.34.79-.78,1.63-1.65,1.63-1.25,0-1.42-1.42-1.67-3.58a12.66,12.66,0,0,0-.77-3.77A1,1,0,0,1,338.65,85.08Zm7.17,46.07a2,2,0,0,1-1.52.61,6.83,6.83,0,0,1-1.75-.34,7.18,7.18,0,0,0-1.89-.37,2.13,2.13,0,0,0-.69.1,1,1,0,0,1-.29,0,.91.91,0,0,1-.48-.13,1,1,0,0,1-.48-.6,2.44,2.44,0,0,1,.38-2.25c1-1.36,3.33-1.56,4.61-1.56a7.08,7.08,0,0,1,2.19.29,1,1,0,0,1,.63.86C346.63,129.49,346.41,130.52,345.82,131.15ZM361.92,87c.14,1.27.39,3.63-2.85,4h-.13a1,1,0,0,1-.74-.33,1,1,0,0,1-.23-.9,9.57,9.57,0,0,0,.21-1.13l-.17,0a1,1,0,0,1-.83-.45,2,2,0,0,1-.36-1.63,2.44,2.44,0,0,1,1.44-1.45l.09,0,1.09-.43,1.25-.5a.94.94,0,0,1,.37-.07,1,1,0,0,1,.89,1.46A3,3,0,0,0,361.92,87Zm5.93,135.67a5,5,0,0,1-2.63.6,1,1,0,0,1,0-2c1.17,0,1.61-.29,1.71-.4a.37.37,0,0,0-.25-.09,1,1,0,0,1,0-2,2.18,2.18,0,0,1,2.26,2.09A2.12,2.12,0,0,1,367.85,222.62Z"/><path class="cls-1" d="M21.11,194.85c.43-.32.38-.89.22-2a8.46,8.46,0,0,1-.11-1.77c-1.56-.14-2-1-2.07-1.47a2,2,0,0,1-1,.77l-.29.23C20.22,190.93,20.51,191.61,21.11,194.85Z"/><path class="cls-1" d="M20.65,127.73s0-.08,0-.11c-.41.07-.83.16-1.3.26s-1,.23-1.57.32a2.9,2.9,0,0,1-.39,3.22C20,130.41,20.49,128.88,20.65,127.73Z"/><path class="cls-1" d="M20.66,140.06a2.12,2.12,0,0,0-1.12.35.86.86,0,0,0,.87.45,8.28,8.28,0,0,0,2.15-.48,8.28,8.28,0,0,1-1-.17A3.92,3.92,0,0,0,20.66,140.06Z"/><path class="cls-1" d="M1.39,162.4c1,.09,1.74.17,2.5.17a15.55,15.55,0,0,0,4.6-.82l0-.21c-.29-1.39-.68-3.27.25-4.64A30.94,30.94,0,0,0,0,162.28Z"/><path class="cls-2" d="M108.3,284.5c-4.94,6.54-7.93-2.43,0,0Z"/><path class="cls-3" d="M105.82,284.07c-1.7,0-2.41.82-2.41,1.58,0-.76.71-1.58,2.41-1.58Zm-2.41,1.58a1.33,1.33,0,0,0,1.42,1.29,1.33,1.33,0,0,1-1.42-1.29Z"/></g></g></svg>';
  };
  a.ImageTexturePaintbrush = function () {
    a.SVGImage.call(this);
  };
  a.ImageTexturePaintbrush.prototype = Object.create(a.SVGImage.prototype);
  a.ImageTexturePaintbrush.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400"><defs><style>.cls-1{fill:' + c + '; fill-opacity: .5}</style></defs><path class="cls-1" d="M325,347.75a37.24,37.24,0,0,1,1-5.25,9.22,9.22,0,0,1,3.05,1.29c.67.44,1.72-.69,2.61-1,7.31-2.71,13.44-9,19.41-15.92,3.53-4.07,6.9-8.29,11.37-10.2,5.35-2.29,7.54-10.35,5.69-18.87-.88-4.07-1.33-7.81-.16-11.82a52.91,52.91,0,0,0,1.64-19.16,44.55,44.55,0,0,0,3.25-5c2-3.66,5-6,8.46-8.23,7.32-4.7,11.46-11.94,9.29-17.34-1.81-4.51-1.21-9.87-.84-15.24.17-2.34.29-4.66.34-6.94a8.41,8.41,0,0,1,4.88-2.76c.78-.16.73-1.7,1.12-2.56,3.25-7.08,3.11-15.89,2.47-25-.38-5.37-1-10.73.83-15.25,2.16-5.4-2-12.65-9.32-17.36-3.51-2.26-6.47-4.59-8.47-8.25-.56-1-1.25-1.94-1.88-2.9a1.12,1.12,0,0,0,.09-.89c-2.28-4.81-1.77-8.76,2.25-11.79.64-.48-.08-1.85-.09-2.8-.1-7.79-4-15.69-8.48-23.63-2.65-4.69-5.49-9.28-5.79-14.13-.36-5.81-7.21-10.58-15.86-11.7A35.54,35.54,0,0,1,346.54,74a10.24,10.24,0,0,1,1.38-3c.44-.67-.69-1.72-1-2.61-2.71-7.31-9-13.44-15.92-19.41-4.07-3.54-8.29-6.9-10.2-11.37-2.29-5.35-10.35-7.54-18.87-5.7-4.07.89-7.81,1.34-11.82.17-8.41-2.47-17.08-2.17-25.84-.88-2.56.38-5.12.76-7.67,1.16-.86-.53-1.67-1.12-2.55-1.64-9.56-5.63-21-9.21-28-18a1.29,1.29,0,0,0-.95-.58c-5.32,0-8.67-2.15-9.68-7.08-.17-.78-1.71-.73-2.57-1.12-7.08-3.25-15.89-3.11-25-2.47-5.38.38-10.74,1-15.26-.83C167.84-1.33,161.66,1.66,157,7.4h0S148.79,3,141.11,4c-5.58.72-11.41,5.49-17,9.61a9.3,9.3,0,0,0-3.27,8.17,7.54,7.54,0,0,1-.29,3.17,5.56,5.56,0,0,0-.75.08c-6.71,1.68-14.1,3.18-18.19,7-.63.6-1.27,1.2-1.89,1.81-.94-1.79-2.38-1.21-4.11-.29,0,0-9.23-1.38-16.13,2.14-5,2.55-8.9,9-12.74,14.74a9.29,9.29,0,0,0-.33,8.79,7.68,7.68,0,0,1,.79,3.08c-.22.12-.5.2-.69.33C60.81,66.49,54.35,70.39,51.8,75.4c-3.52,6.9-6.93,14-5.45,21.52a6.34,6.34,0,0,1-2.16,5.81c-.94.88-2,2.06-1.84,3,1.22,6.15-1.52,12.42,2.15,18.51a11.32,11.32,0,0,1,1.31,3.22c-.55,2.65-1,5.28-1.26,7.88-.12.23-.26.45-.38.68a19,19,0,0,0-2.6,4.47,34.74,34.74,0,0,0-3.75,3.92c-3.71,4.65-8.3,8.27-12.73,12.13-2.08,1.82-5.25,2-8.12-.33-4.72-3.79-5.54-1.94-6.36.74,0,0-7.5,5.55-9.89,12.92-1.74,5.34.06,12.65,1.41,19.43a9.33,9.33,0,0,0,6,6.45,7.55,7.55,0,0,1,2.74,1.62c-.07.24-.21.5-.25.71-1.36,6.78-3.17,14.11-1.44,19.45A61.61,61.61,0,0,0,14,229.28a18.58,18.58,0,0,0-1.22,10c-1.56.44-1.48,1.91-1.21,3.71,0,0-4.4,8.22-3.41,15.9.73,5.57,5.49,11.41,9.61,16.95a9.3,9.3,0,0,0,8.17,3.27c3.4-.46,6.05,1.31,8.28,3.35.65.6,1.34,1.19,2,1.79-.08.38-.13.75-.21,1.13-1.27,5.82-.6,11.38,1.64,15.07-1.33.93-.76,2.29.1,3.89,0,0-1.38,9.23,2.13,16.13,2.55,5,9,8.9,14.74,12.74a9.32,9.32,0,0,0,8.79.33c3.05-1.57,6.14-.79,8.92.38,7,3,14.31,5.69,21.38,8.62,7.49,3.11,15.57,5.65,22.65,9.22a18.15,18.15,0,0,0,4.72,1.5c4.86,6.21,10.28,11.73,17.18,15.49,3.66,2,6,5,8.23,8.46,3.22,5,7.62,8.47,11.81,9.49-.28,1.6,1.09,2.16,2.82,2.69,0,0,5.55,7.5,12.92,9.89,5.34,1.74,12.66-.06,19.43-1.41a9.31,9.31,0,0,0,6.45-6c1.05-3.26,3.78-4.9,6.58-6,4.58-1.86,9.16-3.87,13.74-5.85a26.51,26.51,0,0,1,8.46,3.74c7.39,4.6,15.71,5.23,19.65,1,3.3-3.57,8.4-5.33,13.41-7.29q3.28-1.28,6.41-2.67a8.37,8.37,0,0,1,4.59,3.23c.48.64,1.85-.08,2.8-.09,7.79-.1,15.69-4,23.63-8.48,4.69-2.65,9.27-5.49,14.13-5.79C319.1,363.25,323.87,356.4,325,347.75Z"/></svg>';
  };
  a.ImageTexturePencil = function () {
    a.SVGImage.call(this);
  };
  a.ImageTexturePencil.prototype = Object.create(a.SVGImage.prototype);
  a.ImageTexturePencil.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.97 173.08" width="205.97" height="173.08"><defs><style>.cls-1{fill:' + c + '; fill-opacity: .5}</style></defs><title>pencil_texture3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M71.38,17.83l.15.19a3,3,0,0,0,1.34.87,4.71,4.71,0,0,0,1.11,3,3.84,3.84,0,0,0,2.94,1.45,3.27,3.27,0,0,0,1-.14,3.78,3.78,0,0,0,2.59-3.37,3,3,0,0,0-.77-2.36,2.75,2.75,0,0,0-.65-.53,3.9,3.9,0,0,0-.74-.91,3.76,3.76,0,0,0-1-3.32,4.71,4.71,0,0,0-5.4-.73,3.64,3.64,0,0,0-1.79,4.06A3,3,0,0,0,71.38,17.83Z"/><path class="cls-1" d="M187,48.4a3.86,3.86,0,0,0,.7-.07A3.47,3.47,0,0,0,190.37,45a4,4,0,0,0-2.45-4.19c-.6-.21-2.67-.69-4.35,1.74a3,3,0,0,0-.2,3.06C184.52,47.82,185.88,48.4,187,48.4Z"/><path class="cls-1" d="M53.27,51.05l-.32.21a3.9,3.9,0,0,0-2.1-.17,2.45,2.45,0,0,0-.38,0A3.35,3.35,0,0,0,47,54.13a3,3,0,0,0,.75,2.38,2.88,2.88,0,0,0,.66.55,3.63,3.63,0,0,0,2.5,1.77,3.51,3.51,0,0,0,.55.05,3,3,0,0,0,1.94-.72,3.15,3.15,0,0,0,.61-.71l.2-.13h.32a2.83,2.83,0,0,1,.88,0,3,3,0,0,0,1.79.6,3.05,3.05,0,0,0,.6-.06,3,3,0,0,0,2-1.54,3.89,3.89,0,0,0-.61-4.68A5.38,5.38,0,0,0,53.27,51.05Z"/><path class="cls-1" d="M138.9,61.56a4.25,4.25,0,0,0,2.13.6,3.65,3.65,0,0,0,1.7-.44,3,3,0,0,0,2,.8,3.23,3.23,0,0,0,.68-.08,3,3,0,0,0,2.13-1.92c1.43-4.06-.21-5.64-1.32-6.22a3.35,3.35,0,0,0-3.14,0,3.63,3.63,0,0,0-2.78-.44,3,3,0,0,0-1.76,1.25l-.19.15a3,3,0,0,0-1,2.36l0,1.44A3,3,0,0,0,138.9,61.56Z"/><path class="cls-1" d="M199,61.76a3.8,3.8,0,0,0,.89-.1,4.44,4.44,0,0,0,3.39-4.06,3.79,3.79,0,0,0-2.92-3.76,3,3,0,0,0-2.65.51,2.88,2.88,0,0,0-.71.81,3.61,3.61,0,0,0-1.77,2.5,2.93,2.93,0,0,0,.29,1.93A3.92,3.92,0,0,0,199,61.76Z"/><path class="cls-1" d="M4.65,83.61A5,5,0,0,0,7.08,85a3,3,0,0,0,3.45-1.85,4.5,4.5,0,0,0-1.06-4.73,4.26,4.26,0,0,0-4.39-1.28,3.77,3.77,0,0,0-2.52,3.22A3,3,0,0,0,4.65,83.61Z"/><path class="cls-1" d="M87,84.78a3,3,0,0,0-3.17,2.09,5.52,5.52,0,0,1-.45.94,10.67,10.67,0,0,0-.88,2,3,3,0,0,0,2,3.74,4,4,0,0,0,1.17.17,4.39,4.39,0,0,0,3.22-1.47,5.12,5.12,0,0,0,1.21-5.07A3.68,3.68,0,0,0,87,84.78Z"/><path class="cls-1" d="M204.89,82.93a4.67,4.67,0,0,0-5.4-.73,3.62,3.62,0,0,0-1.79,4A3,3,0,0,0,199,88l.15.19a3,3,0,0,0,2.25,1h.11l1.45,0a3,3,0,0,0,2.47-1.49A3.84,3.84,0,0,0,204.89,82.93Z"/><path class="cls-1" d="M45.36,154a3.65,3.65,0,0,0-2.51-1.77,3,3,0,0,0-3.2,1.58,4.67,4.67,0,0,0,.61,5.13,3.81,3.81,0,0,0,2.94,1.46,3.27,3.27,0,0,0,1-.14,3.78,3.78,0,0,0,2.59-3.37,3,3,0,0,0-.77-2.36A2.91,2.91,0,0,0,45.36,154Z"/><path class="cls-1" d="M114.3,159.52c-4.13-.35-5.83,2.06-6,4.23a3,3,0,0,0,.88,2.42,3,3,0,0,0,2.09.86l.34,0c2.62-.3,4.38-1.41,5.22-3.31a3,3,0,0,0-2.48-4.18Z"/><path class="cls-1" d="M56.56,164.36a3,3,0,0,0-1.69-.42,3.65,3.65,0,0,0-3.48-.48,3.75,3.75,0,0,0-2.18,3,2.91,2.91,0,0,0,1.7,3.25l.13.06a7.14,7.14,0,0,0,3.23,1,3.73,3.73,0,0,0,1.94-.52A3.78,3.78,0,0,0,58,167,3,3,0,0,0,56.56,164.36Z"/><path class="cls-1" d="M63.72,165.83c-.93-.26-2.75-.35-4.47,1.92a3,3,0,0,0,.47,4.1,4.67,4.67,0,0,0,3,1.23A3.59,3.59,0,0,0,66.31,169,3.6,3.6,0,0,0,63.72,165.83Z"/><path class="cls-1" d="M60.21,31.6a4.14,4.14,0,0,0,1.46.27A4.29,4.29,0,0,0,65,30.25a4.43,4.43,0,0,0,.72-5A3.38,3.38,0,0,0,62,23.67l-.23.06a3,3,0,0,0-2.09.33,3,3,0,0,0-1.5,2.7l.08,2.17A3,3,0,0,0,60.21,31.6Z"/><path class="cls-1" d="M65.77,35.15A3,3,0,0,0,64.55,38c.13,1,.74,2.25,2.84,2.79a3,3,0,0,0,2.21-.3c2.14.21,3.71-1.06,4.26-3.49a3,3,0,0,0-2.47-3.61l-.11-.12.33,0A6.21,6.21,0,0,0,75.9,31.2a3.18,3.18,0,0,0-.32-4.33,3.68,3.68,0,0,0-3.2-.89,5.69,5.69,0,0,0-3.63,2.57h0A3.3,3.3,0,0,0,69,32.06a3,3,0,0,0-3.24,3.09Z"/><path class="cls-1" d="M55.08,58.84a3.37,3.37,0,0,0-1.9,2.36A3.45,3.45,0,0,0,51,64.09a3,3,0,0,0,.7,2.29,2.9,2.9,0,0,0,.61.55l.15.19a3,3,0,0,0,2.25,1h.12l1.44-.06a3,3,0,0,0,2.64-1.82,3,3,0,0,0,1.4-1.55,4.7,4.7,0,0,0-1.26-5A3.61,3.61,0,0,0,55.08,58.84Z"/><path class="cls-1" d="M8.86,94.32a3.09,3.09,0,0,0-1-3.2c0-1.91-1.25-3.3-3.5-3.82A3,3,0,0,0,.74,90.37a3.65,3.65,0,0,0-.48,3.48A3.73,3.73,0,0,0,3.3,96a2.83,2.83,0,0,0,.5,0,4.88,4.88,0,0,0,.86.31,4.35,4.35,0,0,0,1.09.14A3.16,3.16,0,0,0,8.86,94.32Z"/><path class="cls-1" d="M77.05,92.58a3.57,3.57,0,0,0,2.73-.85,3,3,0,0,0,.71-3.35,2.86,2.86,0,0,0-1-1.26,4,4,0,0,0-1.34-1.28,4.27,4.27,0,0,0-3.28-.32,3,3,0,0,0-4.18,2.37,3.86,3.86,0,0,0,2.2,3.93,8.25,8.25,0,0,0,3.38.74Z"/><path class="cls-1" d="M202.7,93.89l-.55-.4c-2.82-2-5.79-3.95-8.54-2.95a3.77,3.77,0,0,0-.73.35,4.89,4.89,0,0,0,0-2.34,2.71,2.71,0,0,0,.5-.84A4.5,4.5,0,0,0,192.27,83a4.26,4.26,0,0,0-4.39-1.28,4.55,4.55,0,0,0-.51.21,4.25,4.25,0,0,0-5.6.76,3.76,3.76,0,0,0-.52.91A2.9,2.9,0,0,0,179.62,86a3.8,3.8,0,0,0-.75,3.48,2.83,2.83,0,0,0-.63-.18,3.7,3.7,0,0,0-.89-.45,3,3,0,0,0-.34-3h.1a3.42,3.42,0,0,0,.86-.12c.84-.22,2.27-1,2.38-3.43a2.7,2.7,0,0,0-.12-.94,3.57,3.57,0,0,0,.69-1.57,3,3,0,0,0-.06-1.34c-.08-.28-.14-.55-.2-.8a3.26,3.26,0,0,0,.88.1,4,4,0,0,0,1,1.17,3.68,3.68,0,0,0,2.19.74,3.37,3.37,0,0,0,2.34-.93,3.51,3.51,0,0,0,1.05-2.1,5,5,0,0,0,.66-.2,4.36,4.36,0,0,0,2.72-4.08,2.47,2.47,0,0,0-.05-.38,3,3,0,0,0,1.3.31,2.77,2.77,0,0,0,.49,0c.11,0,.23,0,.35,0l.6-.06a3,3,0,0,0,.2,1,2.53,2.53,0,0,0,.2.36,3.86,3.86,0,0,0-1.54,4.47A3,3,0,0,0,196,80a3.88,3.88,0,0,0,.48,0l.36,0c1.47-.1,4-.68,4.24-3.42a3,3,0,0,0-.37-1.76,3.08,3.08,0,0,0-.23-.84A3.67,3.67,0,0,0,201.51,72a5,5,0,0,0-.84-3.53,5.73,5.73,0,0,0-.44-4.07,3.56,3.56,0,0,0-3.51-1.92,6.53,6.53,0,0,0-2.21-3.26l-.38-.36a3,3,0,0,0-.81-.77,3.31,3.31,0,0,0-1.72-1.56,3,3,0,0,0-1-1.75c-2.25-1.81-3.93-1.5-4.95-.91a2.31,2.31,0,0,0-.36.25,3.94,3.94,0,0,0,1.06-1.84A3,3,0,0,0,186,50c-1-1.72-3.15-2.51-5.55-2.05s-4,1.85-4.27,3.67a3.9,3.9,0,0,0,2.25,4.09,2.87,2.87,0,0,0,1.33.35l-.1,0c-2.26,1-3,2.46-3.11,3.71a3,3,0,0,0-.16-.48,8.73,8.73,0,0,0-1.83-2.72,3.79,3.79,0,0,0,1-2.41A4,4,0,0,0,173.11,50c-.59-.21-2.66-.7-4.34,1.74a2.5,2.5,0,0,0-.36.71,3,3,0,0,0-1.3-.37,6.48,6.48,0,0,0,.68-2.65,3.13,3.13,0,0,0-1.08-2.35,5.07,5.07,0,0,0-.3-1.13,3.85,3.85,0,0,0,1.17.2l.39,0a3,3,0,0,0,2.17,1h.11l1.45-.05a2.57,2.57,0,0,0,.4-.07,4.25,4.25,0,0,0,2,.56,3.6,3.6,0,0,0,1.71-.43,3.68,3.68,0,0,0,1.87-3.71,3.53,3.53,0,0,0-4.62-3.07,4.78,4.78,0,0,0-3.87-.61,3.35,3.35,0,0,0-6.39.87,3.35,3.35,0,0,0-.08.54,3.37,3.37,0,0,0-.22-.35,3,3,0,0,0-2.67-4.3h0c-.13,0-.25,0-.37,0a3.74,3.74,0,0,0,1.26-3.28,3.61,3.61,0,0,0-2.6-3.12,3.91,3.91,0,0,0-4.05,1.44,3.89,3.89,0,0,0-2.42.55,2.6,2.6,0,0,0-.38.27,3.61,3.61,0,0,0-1-.45,3,3,0,0,0-.54-1.61,5.07,5.07,0,0,0,1.66-2.52,2.94,2.94,0,0,0-.45-2.66,2.85,2.85,0,0,0-2.42-1.21,5.48,5.48,0,0,0-2.47.57,5.58,5.58,0,0,0-2.67-3.06,4.67,4.67,0,0,0,.53-1.79A3.78,3.78,0,0,0,142,16.11a5,5,0,0,0,1.55-2.36,3,3,0,0,0,1.46.39,3,3,0,0,0,1.19-.24A3,3,0,0,0,148,11.82a7.71,7.71,0,0,1,.57-1.61,3.07,3.07,0,0,0-.66-3.9,2.79,2.79,0,0,0-2.58-.59,3.5,3.5,0,0,0-3,.13,4.55,4.55,0,0,0-2.39,4,4.52,4.52,0,0,0-3.53,1.71,3.67,3.67,0,0,0-.65,1.58,4.88,4.88,0,0,0-.9-.47,6.72,6.72,0,0,0-.93-2.41,3.07,3.07,0,0,0,.25-.59,3,3,0,0,0-.38-2.52,2.87,2.87,0,0,0,1,.17,3.52,3.52,0,0,0,.45,0,5,5,0,0,1,.57,0c2.78-.08,4.38-1.16,4.76-3.2a3,3,0,0,0-3.38-3.5,5.15,5.15,0,0,1-.57,0c-2.78.08-4.38,1.16-4.77,3.21a3,3,0,0,0,.17,1.62,4.21,4.21,0,0,0-4.24-.1,5.5,5.5,0,0,0-3,.36A3.88,3.88,0,0,0,123.13,7a3,3,0,0,0-2.42-.71c-.18,0-.38,0-.58,0A6.25,6.25,0,0,0,117,7a4.23,4.23,0,0,0,.47-1.86,3,3,0,0,0-.81-2.11,3,3,0,0,0-3.49-3c-.11,0-.23,0-.35,0-1.47.1-4,.67-4.24,3.42a2.89,2.89,0,0,0,.09,1.1,2.94,2.94,0,0,0,0,1.5,2.87,2.87,0,0,0,.8,1.27c-.38,0-.7,0-.91,0a3.48,3.48,0,0,0-.38-.23c-1.39-.61-2.81-.22-4.26,1.15a3,3,0,0,0-.73,3.23l-.06.29A3.4,3.4,0,0,0,101.82,10a4.24,4.24,0,0,0-4.28-.22,3.1,3.1,0,0,0-1.64-.44h-.22a3.58,3.58,0,0,0,.19-.58,1.25,1.25,0,0,0,0-.19,5.15,5.15,0,0,0,.91-1,3,3,0,0,0-2.07-4.61c-3.57-.5-5,.7-5.55,2A3.31,3.31,0,0,0,88.72,4c-1.25-1.71-3.42-1.47-4.13-1.39A3,3,0,0,0,82,6a3.63,3.63,0,0,1,0,.58c.07,2.42.9,4,2.48,4.55a3.43,3.43,0,0,0-.11.46A3,3,0,0,0,85.2,14c1,1.08,3.22,1.64,5.11,1.64a7.6,7.6,0,0,0,1.55-.16,4.63,4.63,0,0,0,1.86,2.12,3.91,3.91,0,0,0,1,.42,4.11,4.11,0,0,0-.67,1.69,3,3,0,0,0,.13,1.48,3.14,3.14,0,0,0-1.09.85c-.47.58-1.38,2.17.23,4.33a3.87,3.87,0,0,0,.32.37,3,3,0,0,0,.23,2,3,3,0,0,0,2.67,1.65,3.36,3.36,0,0,0,.74,2.71,3,3,0,0,0-2.84,1.23,3,3,0,0,0-.39.8c0-.15-.07-.29-.1-.4a3,3,0,0,0-1.8-2A4,4,0,0,0,89,33s0-.1,0-.16c-.06-1.65-1.34-3.71-4.69-4.18A3,3,0,0,0,85.06,26a3,3,0,0,0-1.71-2.17c-3.67-1.66-5.35-.49-6.12.78a3.46,3.46,0,0,0,1,4.52,4.46,4.46,0,0,0,2.73.93l.23,0A3,3,0,0,0,81,32.61c1.05,2.8,2.82,3.81,4.36,3.86a4.11,4.11,0,0,0-1.24,2.08A3,3,0,0,0,84,40a3.73,3.73,0,0,0-1.26-.43,6.86,6.86,0,0,0-.16-.73,3,3,0,0,0-.74-1.26,3,3,0,0,0-.23-.65A4.19,4.19,0,0,0,77,34.72,3.81,3.81,0,0,0,73.74,38,3.47,3.47,0,0,0,75,40.91a5.39,5.39,0,0,0,.19,3.1,3.56,3.56,0,0,0,3,2.27h.28a3.08,3.08,0,0,0,.61-.06,5.55,5.55,0,0,0-.85.94,3.28,3.28,0,0,0-1.81,1.29,3.12,3.12,0,0,0-1-.59,3,3,0,0,0,.31-2.17,3,3,0,0,0-1.5-1.92c-3.36-1.79-5.08-.28-5.7.53a4,4,0,0,0-2.12-.63,3,3,0,0,0-.89.14,2.88,2.88,0,0,0,0-1.17l-.15-.87C65,39.82,64.62,37.6,63,36a3,3,0,0,0-3.21-.58,3,3,0,0,0-1.42,1.28,3.06,3.06,0,0,0-1-1,2.7,2.7,0,0,0-.61-.25,3.51,3.51,0,0,0-1.44-1.28,3.67,3.67,0,0,0-2.08-.3,3,3,0,0,0-.84-.41l-.12-.15c-.59-.73-1.82-2.26-3.87-1.84a3.23,3.23,0,0,0-1.5.75,3,3,0,0,0-1.61,0,3.42,3.42,0,0,0-2.5,3.15,2.85,2.85,0,0,0,0,1,5.67,5.67,0,0,0-1.88-1A3,3,0,0,0,37,38.31a4.94,4.94,0,0,0,3.62,4.94,3,3,0,0,0,2.56-.39,3,3,0,0,0,1.21,1.39,4.25,4.25,0,0,0,2.13.6A3.7,3.7,0,0,0,48.81,44a3,3,0,0,0,.65,2.19,3,3,0,0,0,1.7,1,4.41,4.41,0,0,0,2.42.74,4.56,4.56,0,0,0,1-.11A3,3,0,0,0,56.94,45a5.35,5.35,0,0,0-.67-2.63A4.53,4.53,0,0,0,58.07,41a5.83,5.83,0,0,0,3.31,4.9,3,3,0,0,0,2,.12,2.76,2.76,0,0,0-.07.76,3.66,3.66,0,0,0-.48,3.48,3.39,3.39,0,0,0,.75,1.09,4.8,4.8,0,0,0-1.37,2.76,3,3,0,0,0,1.5,3.11,6.84,6.84,0,0,0,3.31.86,5.18,5.18,0,0,0,4-1.72,3.07,3.07,0,0,0,.62-1.3,3.85,3.85,0,0,0,1.25,1.36,3.38,3.38,0,0,0,.82.38,3,3,0,0,0-.88.94,3,3,0,0,0-.29,2.42c0,.07,0,.16.06.25a3,3,0,0,0-2.18-.25l-.56,0a4.87,4.87,0,0,0-4.22,1.1,3.58,3.58,0,0,0-.5.66,3.12,3.12,0,0,0-.79-.18,3.75,3.75,0,0,0-3.79,2.78,2.93,2.93,0,0,0,.11,2.27,3.36,3.36,0,0,0,3.09,3.13l.38,0a2.92,2.92,0,0,0,1.3-.3,4.06,4.06,0,0,0,2.16-2.72h0a2.69,2.69,0,0,0,.79-.11l.55,0a4.89,4.89,0,0,0,4.22-1.09A3.43,3.43,0,0,0,74,64.5a3.39,3.39,0,0,0,1.28.9,3.22,3.22,0,0,0,.27,1.14,3,3,0,0,0-.81.26,2.92,2.92,0,0,0-.73-.06h-.83c-1.42,0-5.5.07-6.18,3.55l-.33-.16a3,3,0,0,0-1.89-.07L64,70a11,11,0,0,0-2.07,0,3.56,3.56,0,0,0-2.58-1.25,3,3,0,0,0-2.42.94,2.94,2.94,0,0,0-.65,1.1l-.06.06a5.74,5.74,0,0,0-1.35,2,3.19,3.19,0,0,0-.68.53,5.11,5.11,0,0,0-.63.84c-.05-.1-.07-.21-.12-.31a3,3,0,0,0-2.72-1.52l-2.88.11a3,3,0,0,0-2.34,1.28,2.78,2.78,0,0,0-.33.64,3.16,3.16,0,0,0-.65-.55,2.88,2.88,0,0,0-.59-.28,5.15,5.15,0,0,0,0-.55,4,4,0,0,0-.35-1.19,3.24,3.24,0,0,0,.47-.81,3.49,3.49,0,0,0,.2-.72,4.34,4.34,0,0,0,.62.06A3.59,3.59,0,0,0,48.21,68a3,3,0,0,0,0-2A3,3,0,0,0,49,63.8a3.49,3.49,0,0,0,0-3A3.44,3.44,0,0,0,46.67,59a2.92,2.92,0,0,0-1.1-.07L45,58.64a7.18,7.18,0,0,0-.83-.37s0,0,0-.07A3.13,3.13,0,0,0,44,54.66c1.88-1,3.44-2.21,3.12-4.42-.4-2.73-3.44-3.21-4.74-3.42a3.64,3.64,0,0,0-.57,0,5.05,5.05,0,0,0-2.7-1.88,2.94,2.94,0,0,0-2.66.45,3,3,0,0,0-.45.42,3.67,3.67,0,0,0-4.15,2.6,3,3,0,0,0,1.31,3.53c.13.1.4.37.59.56s.49.48.77.73a3.87,3.87,0,0,0-1.06,1.89,3,3,0,0,0,1.8,3.45A17.94,17.94,0,0,0,40,59.79a2.78,2.78,0,0,0-.24,1.13,3.5,3.5,0,0,0-2.44,2.79,3,3,0,0,0,0,.84,3.07,3.07,0,0,0-2,1.43A3,3,0,0,0,33,63.81a4.26,4.26,0,0,0-.66-.36,2.85,2.85,0,0,0-1.7-2.2l-.13-.07c-1-.49-3.17-1.63-5.17-.45A3.82,3.82,0,0,0,23.55,64a2.91,2.91,0,0,0,1.75,2.78l.13.06a9.43,9.43,0,0,0,1.73.73,3.7,3.7,0,0,0,1,1.77,4.7,4.7,0,0,0,5.4.73A3.69,3.69,0,0,0,35,68.55a3.62,3.62,0,0,0,1.56,1.88,5,5,0,0,1,.4.4l.4.4a7.75,7.75,0,0,0-.57.66,3,3,0,0,0-.19,3.3,5.27,5.27,0,0,0-.22.67,3.19,3.19,0,0,0-.08.75,4.68,4.68,0,0,0-1-.48,3,3,0,0,0-2.64.29,2.93,2.93,0,0,0-1,1,3,3,0,0,0-2.8-1.3,7.27,7.27,0,0,0-2,.52,2.7,2.7,0,0,0-.24-.44A3,3,0,0,0,24.78,75c-.49-.1-.94-.17-1.37-.24a3,3,0,0,0-.63-1.46,3,3,0,0,0-2.61-1.09l-.34,0A4.77,4.77,0,0,0,16,73.93a4,4,0,0,0-.54,3.48,3,3,0,0,0,1.18,1.68,4.36,4.36,0,0,0,1.08,1.74,2.84,2.84,0,0,0,.71.54,3.18,3.18,0,0,0,.25,1.38,3,3,0,0,0,1.87,1.69,5.47,5.47,0,0,1,.93.45,11.8,11.8,0,0,0,2,.89,2.93,2.93,0,0,0,.88.13c.11,0,.21,0,.32,0a3,3,0,0,0,1.86.66h.16a3,3,0,0,0,2.73-2.22A7.37,7.37,0,0,1,31,81.71a.06.06,0,0,1,0,0,3.48,3.48,0,0,0,.35.65,9.47,9.47,0,0,0-2.46,3.51,4.39,4.39,0,0,0,.43,4.22,5.22,5.22,0,0,0-2.22-1h0a3,3,0,0,0-4.66,2.33,4.94,4.94,0,0,0,1.39,4,2.85,2.85,0,0,0-1.05-.21h0a5.64,5.64,0,0,0-1.55.21,2.82,2.82,0,0,0,.08-.82,3.63,3.63,0,0,0,.48-3.48,3.74,3.74,0,0,0-3-2.19,3,3,0,0,0-2.48.68,2.34,2.34,0,0,0-.31.32A3.58,3.58,0,0,0,13.15,93a3,3,0,0,0,2.52,3.3,4.66,4.66,0,0,0,1.15,1c.09,0,.18.07.26.11a2.45,2.45,0,0,0-.12.41,5.38,5.38,0,0,0,0,1.55,6.31,6.31,0,0,0-.77-.42,3.59,3.59,0,0,0-3.47.15,4.81,4.81,0,0,0-2.37.32,3,3,0,0,0-1.92,2.74c-.12.27-.38.74-.51,1a4.51,4.51,0,0,0-.68,3.12,4.21,4.21,0,0,0-2,4.5A3.79,3.79,0,0,0,8.56,114h.26A3.61,3.61,0,0,0,12,112a4.06,4.06,0,0,0,1.17.75,3,3,0,0,0,.41,1.64,2.55,2.55,0,0,0,.3.41,3.79,3.79,0,0,0,1.21,3.09,3.46,3.46,0,0,0,.05,2.16c.68,2,2.53,2.47,4,2.74-.14,0-.28,0-.42,0l-1.45.06a2.23,2.23,0,0,0-.36,0,6.11,6.11,0,0,0-1.4-1.47,3,3,0,0,0-4.1.46,4.9,4.9,0,0,0-1.22,2.69A2.91,2.91,0,0,0,7.26,128a3.68,3.68,0,0,1,0,.57c0,1.07-.09,3.06,1.61,4.27a3.6,3.6,0,0,0,2.14.68,5.32,5.32,0,0,0,1.82-.36,3,3,0,0,0,1.9-3.13c0-.17-.05-.32-.07-.49a3.2,3.2,0,0,0,.63.65,2.94,2.94,0,0,0,3.06,2.9,2.9,2.9,0,0,0,.07,1.37l0,.12a3.79,3.79,0,0,0,2.11,3.11,3.11,3.11,0,0,0,.91,1,2.93,2.93,0,0,0,.06,1.41,2.86,2.86,0,0,0,.11,1.61,2.94,2.94,0,0,0,1.87,1.83,5.27,5.27,0,0,0,1,.23,4,4,0,0,0,1.9,2.81,2.9,2.9,0,0,0,1.32.54c.1.09.25.25.37.37a8.73,8.73,0,0,0,1.34,1.19,3.24,3.24,0,0,0,.95.43c-.1,1.34.24,3.67,3.54,4.45h0a2.92,2.92,0,0,0,1.67.52l.45,0a3,3,0,0,0,2.23-1.64c.45-.92,1.23-2.51.44-3.95.13-.15.26-.31.39-.49a3.3,3.3,0,0,0,2.07,2.56A3.09,3.09,0,0,0,43.9,152H44a3.09,3.09,0,0,0,2.39-1.27,4.59,4.59,0,0,0,4.17,4.13l.3,0A3,3,0,0,0,53,154a5,5,0,0,0,.43-.5,6.67,6.67,0,0,0,3.75,2.33,4,4,0,0,0,.76.07,3.86,3.86,0,0,0,3.64-2.44,3,3,0,0,0-.82-3.36c.22,0,.44.06.68.07h.06a3,3,0,0,0,2.12-.88,3.85,3.85,0,0,0,.26-.34,3.29,3.29,0,0,0,.48.73,3.82,3.82,0,0,0,.18,1.3,3.74,3.74,0,0,0,3.22,2.52,2.23,2.23,0,0,0,.37,0h0a3.19,3.19,0,0,0,.26,1c-2.29-.17-5.12.06-6.85,3.32a7,7,0,0,0-4,.58,3.58,3.58,0,0,0-2.07,3.73,3,3,0,0,0,1.2,2,3,3,0,0,0,2.27.52c1-.18,1.31,0,1.46.12a3,3,0,0,0,1.65.5,2.78,2.78,0,0,0,.81-.11,3,3,0,0,0,1.9-1.61,4.56,4.56,0,0,0,.39-1.43h0a3.42,3.42,0,0,1,1.88-.22,5,5,0,0,0,5.28-2.63,3,3,0,0,0,.45-1.7,3.07,3.07,0,0,0,.53.06,3,3,0,0,0,1.53-.43,3,3,0,0,0,1.35.32h0a6.65,6.65,0,0,0,1-.09,2.85,2.85,0,0,0,1.11.6,3,3,0,0,0,.66.1l.61.11a2.91,2.91,0,0,0,1.69.53,3,3,0,0,0,2.19-.95h0a3.7,3.7,0,0,0,.55-4.8c0-.05-.08-.08-.11-.13a2.41,2.41,0,0,0,.71-.07,2.93,2.93,0,0,0,.51.13,4.25,4.25,0,0,0,1.2,1.27,5.62,5.62,0,0,0,1.27.65,4.32,4.32,0,0,0-.87.31,4.6,4.6,0,0,0-2.48,3.46,2.86,2.86,0,0,0,.37,2,4.55,4.55,0,0,0-2.78-1.31,2.94,2.94,0,0,0-2.39.83,3,3,0,0,0-.9,2.37,6.24,6.24,0,0,0,1.3,3.07,6.24,6.24,0,0,0-1.55,1.05,3,3,0,0,0,.87,4.93,7.17,7.17,0,0,0,2.8.65,3.65,3.65,0,0,0,3.25-1.72,3.36,3.36,0,0,0,.25-3,3.87,3.87,0,0,0,1.85-2.23,3,3,0,0,0-.31-2.57,3,3,0,0,0-.68-.75,3.06,3.06,0,0,0,2.61-.4l.41.16a6.25,6.25,0,0,0,2.4.55,3.39,3.39,0,0,0,3-1.66,3,3,0,0,0-1.12-4.3l-.27-.14A16,16,0,0,0,91,155.14a3.55,3.55,0,0,0,1.35-.66,3.21,3.21,0,0,0,1-3.79A2.94,2.94,0,0,0,91.53,149a4.13,4.13,0,0,0-3-1.59,3.61,3.61,0,0,0,1-2.56,4,4,0,0,0-2-3.26,2.26,2.26,0,0,0-.26-.16,2.09,2.09,0,0,0,0-.24,3,3,0,0,0-1.54-2.55,4.22,4.22,0,0,0-1.56-3.93,5.14,5.14,0,0,0-2.9-1.2,4,4,0,0,0-1.49-1.15,9.94,9.94,0,0,0-1.65-1,3,3,0,0,0-2.86-2.12h0a6,6,0,0,0-2.41.51l0-.05c1.61-.64,2.87-2.45,2.2-5.27a3,3,0,0,0-4.07-2l-.62.3a3.59,3.59,0,0,0-2.19-1.07,3.07,3.07,0,0,0-1.69.28A4,4,0,0,0,65.19,123a3.58,3.58,0,0,0-2.49-2.57,3.62,3.62,0,0,0-2.26.14c-.46-1.82-1.71-3.78-3.62-4.2l-.19,0a3.8,3.8,0,0,0,.29-.38,3,3,0,0,0,.43-2.39,2.94,2.94,0,0,0-1.5-1.92c-4-2.11-5.63.35-5.93.87,0,.07-.06.15-.1.23a3.49,3.49,0,0,0-1.11-.49,3.25,3.25,0,0,0-1.64,0,6.11,6.11,0,0,0-1.1-.49,3,3,0,0,0-2.67.45A3,3,0,0,0,42.17,114a3,3,0,0,0-3.57,2.58,4.23,4.23,0,0,0,1.81,4.12,3.49,3.49,0,0,0,2.74,2.65A4.53,4.53,0,0,0,42,125.17a3.09,3.09,0,0,0-.15,1.09,2.5,2.5,0,0,0-.55-.05,4.94,4.94,0,0,0-4.94,3.62,3.17,3.17,0,0,0-.12.81c-2.8.2-3.72,1.71-4,2.7a3.42,3.42,0,0,0,1.8,4l.33.15a2.92,2.92,0,0,0,.67,1.67,7.42,7.42,0,0,0,1.43,1.3,5.93,5.93,0,0,0-.37.89,2.92,2.92,0,0,0-.08,1.28,4.51,4.51,0,0,0-2.4.3,4.54,4.54,0,0,0-1-1.35,4.81,4.81,0,0,0-1.42-3.82,4.75,4.75,0,0,0-3.8-1.46,3.66,3.66,0,0,0-1.11-.74c0-.1,0-.2,0-.3a6,6,0,0,0-1.21-3.9,3,3,0,0,0,.27-2.43,3,3,0,0,0-2.15-2,7.11,7.11,0,0,1-.71-.28,3,3,0,0,0-.82-1.67,3,3,0,0,0-.73-1.37,3,3,0,0,0-1.45-.83l.1,0c.31,0,.76.13,1,.19a3,3,0,0,0,1.6.47,1.13,1.13,0,0,0,.18,0,3.49,3.49,0,0,0,1.18.54,4.26,4.26,0,0,0,3.72,2.61l.36,0a3.36,3.36,0,0,0,3-3.07,3.83,3.83,0,0,0-.51-2.14l.28-.17a3,3,0,0,0,1.21-2.42A5,5,0,0,0,30,115a3,3,0,0,0,0-.9,2.19,2.19,0,0,1,0-.36c0-.19,0-.39-.07-.6a3,3,0,0,0,1.83-.72,3,3,0,0,0,1-2.5s0,0,0,0a4.65,4.65,0,0,0,1,.21H34a3,3,0,0,0,2.38-1.2A2.92,2.92,0,0,0,38,110.41a4.16,4.16,0,0,0,1.51.28,4.63,4.63,0,0,0,3.22-1.34A4.23,4.23,0,0,0,44,105a3.55,3.55,0,0,0-1.26-1.75l-.06-.22a3.53,3.53,0,0,0,1.2-2.1,3,3,0,0,0-2.49-3.51,4.54,4.54,0,0,0-1.16-1,2.8,2.8,0,0,0-1.15-.35,4.79,4.79,0,0,0,1-.87,2.59,2.59,0,0,0,.32-.47,3.48,3.48,0,0,0,2.37-1.07,3.65,3.65,0,0,0,.82-3.44l.24,0,.57,0a3.05,3.05,0,0,0,1.16-.38,3,3,0,0,0,2.68,2.38l.77,0c3.47,0,5-2.12,5.25-4.1a.18.18,0,0,1,0-.07l0,0a4.47,4.47,0,0,0,1.07.6,2.78,2.78,0,0,0-.62,1.22,4,4,0,0,0,1.83,4.6,3.2,3.2,0,0,0,.89,1.57,3.22,3.22,0,0,0-3.22.68,7.13,7.13,0,0,0-.75-.64,3,3,0,0,0-4.09.47c-1.84,2.2-1.18,4-.81,4.72a3.65,3.65,0,0,0,3.25,1.9l.46,0a3.79,3.79,0,0,0,1.84-.73,3.45,3.45,0,0,0,.17,2,3.8,3.8,0,0,0,2.33,2.15,3,3,0,0,0,2.57-.25,3.29,3.29,0,0,0,.47.19A5,5,0,0,0,62.09,108a3.07,3.07,0,0,0,.67.08,2.9,2.9,0,0,0,1.46-.39,3,3,0,0,0,.58,1.9,2.93,2.93,0,0,0,1.29,1,4.1,4.1,0,0,0,3.85,3h.25a3,3,0,0,0,2.22-1,3.06,3.06,0,0,0,.73-1.55,4.35,4.35,0,0,0,1-1.16,3,3,0,0,0-.2-3.32,4.09,4.09,0,0,0-1.86-1.38,2.82,2.82,0,0,0-.36-.66,3,3,0,0,0-2.4-1.21h0a5.05,5.05,0,0,0-3.55,1.35l-.07-1.83a3,3,0,0,0-.32-1.22,4.83,4.83,0,0,0-.38-4,4.14,4.14,0,0,0-1.69-1.68,3.34,3.34,0,0,0,1.48-1.32,4,4,0,0,0,0-4,4.25,4.25,0,0,0-.27-.46,3.6,3.6,0,0,0,2.24-2.17,4.09,4.09,0,0,0,.14-.56l.19,0c1-.32,3.88-1.28,3.76-4a1.92,1.92,0,0,0,0-.22A4.11,4.11,0,0,0,74,85h.3c2.41-.18,3.4-2.51,3.73-3.28A3,3,0,0,0,76,77.6a9.13,9.13,0,0,1,1.49-.17,8.46,8.46,0,0,0,3.39-.76,2.86,2.86,0,0,0,.34.57,2.85,2.85,0,0,0,0,1c0,.11,0,.23,0,.36.1,1.46.67,4,3.42,4.24h.27A3,3,0,0,0,86.94,82a2.25,2.25,0,0,0,.42-.13h0A3,3,0,0,0,90,83.39l.34,0c2.47-.28,4.16-1.29,5.06-3a1.39,1.39,0,0,0,.19.15,3.4,3.4,0,0,0,2.31,1.72,2.57,2.57,0,0,0,.73.1,3,3,0,0,0,1.79-.6A4.28,4.28,0,0,0,102.25,77a5.24,5.24,0,0,0-4.72-3.37,3.62,3.62,0,0,0-3.72,2,2.84,2.84,0,0,0-.13.35,3.07,3.07,0,0,0-1.35-.1,3.61,3.61,0,0,1-.57,0,7.09,7.09,0,0,0-2.15.18,3.14,3.14,0,0,0-1.93-1.93,4.63,4.63,0,0,0-.12-.78s0-.06,0-.1,0-.15,0-.22a2.75,2.75,0,0,0,.62.24,3.49,3.49,0,0,0,.94.13,4.4,4.4,0,0,0,3.53-2,3,3,0,0,0-.47-4.1c-2.21-1.84-4-1.17-4.73-.81a3.65,3.65,0,0,0-1.87,3,6.44,6.44,0,0,0-.86-1.24A5.74,5.74,0,0,0,83,66.81c.07-.09.15-.18.22-.28a.36.36,0,0,1,0-.09,3.93,3.93,0,0,0,.59.06,3.51,3.51,0,0,0,2.8-1.39,3,3,0,0,0-.46-4.1,6.92,6.92,0,0,1-.45-1.08,7.85,7.85,0,0,0-2.31-3.66c0-.19,0-.37,0-.52a3,3,0,0,0,.41-2.54l0,0a8.48,8.48,0,0,0,1.59.16,4.59,4.59,0,0,0,3.76-1.61,4.4,4.4,0,0,0,.57.73,3.38,3.38,0,0,0,3,2.58,2.42,2.42,0,0,0,.38,0,3,3,0,0,0,2.11-.87,4,4,0,0,0,2.25,1.31,3.56,3.56,0,0,0,1.17,1.18,3.38,3.38,0,0,0,1.74.49A3.54,3.54,0,0,0,103,56.13c.06,0,.11,0,.17,0s.47.11.78.18c.51.13,1.09.27,1.71.38A2.94,2.94,0,0,0,104,57.87c-.11.16-.26.38-.41.63a3.84,3.84,0,0,0-.85-.27,3,3,0,0,0-2.46.64l-.22.22a3.79,3.79,0,0,0-1.82-.72,3,3,0,0,0-2.38.75,3.06,3.06,0,0,0-.54.66l-.4.27a3.56,3.56,0,0,0-1.39-.76c-.94-.25-2.75-.34-4.47,1.93a3,3,0,0,0,.46,4.1,4.67,4.67,0,0,0,3,1.23,3.57,3.57,0,0,0,2.51-1c.07.08.14.17.22.25a3.07,3.07,0,0,0,1.38.67,3.39,3.39,0,0,0,1.14,1,3.73,3.73,0,0,0,0,1.25,4,4,0,0,0,3,3.28,3.35,3.35,0,0,0,.79.09A4.06,4.06,0,0,0,105,70a3,3,0,0,0-.19-3.59,3,3,0,0,0,1.12-1.55A3.67,3.67,0,0,0,108,64,4.62,4.62,0,0,0,109,58a3,3,0,0,0-1.27-1.09,4.8,4.8,0,0,0,2.6-.86,3,3,0,0,0,1.37.38,2.93,2.93,0,0,0,1.71-.61l.14-.12a3,3,0,0,0,1.55,1.87,3.38,3.38,0,0,0,.58.21,3.79,3.79,0,0,0-.62,2,3,3,0,0,0,2.74,3,5.28,5.28,0,0,0,1,0,4.74,4.74,0,0,0-.49,1,3,3,0,0,0,1.3,3.53,2.68,2.68,0,0,1,.11.59,3,3,0,0,0,.55,1.41,3.72,3.72,0,0,0,.12,3.21,3.67,3.67,0,0,0,3.25,1.9,3.55,3.55,0,0,0,.46,0,3.6,3.6,0,0,0,3.12-2.59,3.66,3.66,0,0,0-.39-2.79l.17-.14A3,3,0,0,0,129,65c-.09-.26-.15-.55-.22-.84-.3-1.24-.8-3.33-2.8-4.37a2.68,2.68,0,0,0-.67-.24v-.09a3.4,3.4,0,0,0,1.21-.83,3.73,3.73,0,0,0,.58-4.13,2.88,2.88,0,0,0,1.55-.45,2.93,2.93,0,0,0,1.33-2,4.53,4.53,0,0,0,.82.51,3,3,0,0,0,3.23-.48,2.94,2.94,0,0,0,1-1.84,4,4,0,0,0,2-2.85c0-.13,0-.27,0-.4a3,3,0,0,0,2,1.84,3.76,3.76,0,0,0,.66.1c.15,0,.39.06.61.11a3,3,0,0,0,1.69.53,2.94,2.94,0,0,0,2.19-1h0a3.7,3.7,0,0,0,.54-4.8c0-.06-.09-.1-.13-.16a3,3,0,0,0-.19-1.12,3.82,3.82,0,0,0,1.79.48h.23a3.32,3.32,0,0,0,1.84-.75,7.11,7.11,0,0,0,0,1.45,3,3,0,0,0,2.24,2.53,4,4,0,0,0,1.08.14,4.21,4.21,0,0,0,1.84-.43,3,3,0,0,0,2.16.94h.11l1.44-.06.27,0a4.3,4.3,0,0,0,1.79-.62,5,5,0,0,0,1.41,3.31c-1,1.86-1.08,3.85-.12,5.17A3.13,3.13,0,0,0,162,55.79s0,.08,0,.12a5.29,5.29,0,0,0-2.85.94,7.64,7.64,0,0,0-.7-.43,2.91,2.91,0,0,0-.95-.29,5.05,5.05,0,0,0-.26-2.78A3,3,0,0,0,154.32,49,5.08,5.08,0,0,0,150,47a3,3,0,0,0-2,5l.08.08c1.4,1.46,2.71,2.85,2.91,3.93a3.13,3.13,0,0,0-1.13,1.45,5.37,5.37,0,0,0,1,5.31,3.31,3.31,0,0,0,.27.26c-.18-.05-.37-.1-.58-.14a2.91,2.91,0,0,0-3.24,1.69l-.07.13c-.09.19-.22.43-.34.71-1.51-.18-3.58.09-4.65,1.2a3.19,3.19,0,0,0-.75,3.16,3,3,0,0,0-1.8.17,3,3,0,0,0-1.15-.17,4.91,4.91,0,0,0-4.39-.44,3,3,0,0,0-2,2.94,5.19,5.19,0,0,0,.94,2.82c0,.12-.06.24-.07.37a9.15,9.15,0,0,0,0,1.15,4,4,0,0,0-1.74,0,2.6,2.6,0,0,0-.4.1c-1.83.62-2.86,2.57-2.69,5.08s1.31,4,3.08,4.34a3,3,0,0,0,.62.06,3.8,3.8,0,0,0,3.46-2.48,3,3,0,0,0-.1-2.82c0-.11.07-.24.1-.36a4,4,0,0,0,.94.24h.33a3.68,3.68,0,0,0,2.51-1,4.37,4.37,0,0,0,.61.2,2.48,2.48,0,0,0,.66.08c.12,0,.24,0,.36,0a3.14,3.14,0,0,0,2.35,2,3,3,0,0,0,.53,0,3.07,3.07,0,0,0,1.29-.28,6.7,6.7,0,0,0,1.07.36h0a1.87,1.87,0,0,0,.31.17,3.12,3.12,0,0,0-.69,3,3.19,3.19,0,0,0,.86,1.4,3.18,3.18,0,0,0-.69,1.65,3.62,3.62,0,0,0-1.66-.62,2.93,2.93,0,0,0-2.38.77,2.77,2.77,0,0,0-.6.77l-.11,0A3,3,0,0,0,139,90.88a3.87,3.87,0,0,0,.74,4.55,5,5,0,0,0,3.5,1.24,6.8,6.8,0,0,0,3-.66,4,4,0,0,0,.89-.62,3.06,3.06,0,0,0,.54.74,3,3,0,0,0,.12,1.81,3,3,0,0,0,.83,1.16,2.23,2.23,0,0,0-.26.27,2.86,2.86,0,0,0-.5,1,5.28,5.28,0,0,0-.48.28,3.37,3.37,0,0,0-2.55-1.47,3.61,3.61,0,0,0-2.16-1.34,3,3,0,0,0-2.34.49,3.09,3.09,0,0,0-1.13,1.56,5,5,0,0,0-1.41,2.43,3,3,0,0,0,2,3.5.46.46,0,0,0,.07.07,4.21,4.21,0,0,0,2.18,1.23,3,3,0,0,0,.83.53c-.08.4-.12.76-.15,1.06-.06.51-.06.51-.32.81a3,3,0,0,0-.35.53,5.18,5.18,0,0,0-4.6-.22l-.09.05-.06,0a4.83,4.83,0,0,0-.61-1,2.88,2.88,0,0,0-.77-1.86,3.28,3.28,0,0,0-.64-.54,3.83,3.83,0,0,0-1.67-1.5,2.76,2.76,0,0,0-.34-1,3.07,3.07,0,0,0-.53-.65l.36-.07a3.43,3.43,0,0,0,2.49-3.16,3,3,0,0,0-.84-2.56,2.82,2.82,0,0,0-.55-.43,6.38,6.38,0,0,0-.85-1,5,5,0,0,0,1-1.51A4.3,4.3,0,0,0,137.44,93a4,4,0,0,0,.55-3.48,3,3,0,0,0-3-2.23l-1.44.05a3.11,3.11,0,0,0-.75.14A3.6,3.6,0,0,0,130.55,86a3,3,0,0,0-2.54.72A3.07,3.07,0,0,0,127,89a3.29,3.29,0,0,0-1.61-.61,3.5,3.5,0,0,0-3.36,1.69,9.58,9.58,0,0,0-2.89-.75,3.92,3.92,0,0,0-2.45-3.93c-.59-.21-2.66-.7-4.34,1.73a3,3,0,0,0-.2,3.07.56.56,0,0,0,0,.08,3,3,0,0,0-1,2,5.67,5.67,0,0,0,0,.83l-.13,0a3.52,3.52,0,0,0-2.26,2.1,5.48,5.48,0,0,0-.6.29A2.85,2.85,0,0,0,106,94.16c2-.6,4.15-2.49,4.42-4.59a3.51,3.51,0,0,0-.63-2.52,3.09,3.09,0,0,0,.57-2.51,3,3,0,0,0,1.39.35,3.42,3.42,0,0,0,.62-.06h0a3.65,3.65,0,0,0,1.41.27,4.88,4.88,0,0,0,2.24-.58,4.69,4.69,0,0,0,1.68-1.41,3.55,3.55,0,0,0,.85.31,3.68,3.68,0,0,0,.58,0,3.34,3.34,0,0,0,3.14-2.41,2.94,2.94,0,0,0,.1-1.83c-.1-.38-.19-.68-.26-.91a2.18,2.18,0,0,0-.06-.22c0-.07,0-.14,0-.23s.11-.54.18-.92a3,3,0,0,0-1.94-3.37l-.19,0a3.37,3.37,0,0,0-.25-1.38,3.73,3.73,0,0,0-3-2.18,2.91,2.91,0,0,0-3.24,1.69l-.06.13c0,.06-.07.14-.11.21a3.42,3.42,0,0,0-2.24-.34,3.28,3.28,0,0,0-1.37.61A4,4,0,0,0,107.41,71a3,3,0,0,0-3.22,2.09,5,5,0,0,0-1.42,2.43A3,3,0,0,0,104.62,79a4.22,4.22,0,0,0,1.52.28,4.42,4.42,0,0,0,1.29-.22,6,6,0,0,0-.21.86,3,3,0,0,0,.46,2.07c-.16,0-.31-.08-.49-.11a3,3,0,0,0-2.56.84,3.32,3.32,0,0,0-.44.55,5.45,5.45,0,0,0-1.5,1.51,4.73,4.73,0,0,0-2.79-1.2,3,3,0,0,0-3.29,2.69c-.44,4.68,2.62,5.22,3.24,5.28l.33,0a3.56,3.56,0,0,0,1.68-.46,3,3,0,0,0,.82,2.37,3,3,0,0,0,1.51.84c-1.45.23-3.3,1-3.53,3.33a3,3,0,0,0,1.07,2.6,3.21,3.21,0,0,0,.77.46,4,4,0,0,0,3.36,2.38H106a3.34,3.34,0,0,0,2.34-1.15,2.92,2.92,0,0,0,1.32.21,3.14,3.14,0,0,1,.87,0,2.92,2.92,0,0,0,1.79.6,3,3,0,0,0,2.21-1,3.68,3.68,0,0,0,2.85-3.08,3,3,0,0,0-.08-1.29,2.85,2.85,0,0,0,1.19-.69l.62.11.15.17a4.41,4.41,0,0,0-.42,2.89,3.79,3.79,0,0,0,3.31,3.26l.26,0a3.8,3.8,0,0,0,3.53-2.79,3,3,0,0,0-.12-2.27,2,2,0,0,0,0-.24c.15,0,.3,0,.46,0a4.79,4.79,0,0,0,.89-.09,3.24,3.24,0,0,0,.53-.16,5.43,5.43,0,0,0-.22.68,3,3,0,0,0,.94,3,2.9,2.9,0,0,0,1,.57,7.21,7.21,0,0,0,.63.66c-3.53,0-5,2.24-5.22,4.26A3.13,3.13,0,0,0,125,108a3.13,3.13,0,0,0-1.89,1.46,3.24,3.24,0,0,0-.27,2.73,4.35,4.35,0,0,0-1.81.26,1.17,1.17,0,0,0-.2-.06,6.92,6.92,0,0,0-1.37-.13,2.91,2.91,0,0,0-.74-1.68,3,3,0,0,0-4.14-.31,3.61,3.61,0,0,0-4-.06,3.81,3.81,0,0,0-.23-.5,3.59,3.59,0,0,0-3.93-1.87,5.05,5.05,0,0,0-.55.18,2.92,2.92,0,0,0-3,.7A7.93,7.93,0,0,0,100,108h0c.6-1.75.27-2.86-.31-3.57a8.81,8.81,0,0,0,.55-1.27,4.31,4.31,0,0,1,.15-.43,3,3,0,0,0-2.13-4.67c-2.64-.28-4.46,1-5.4,3.83a4.31,4.31,0,0,1-.15.43,3,3,0,0,0-.42,1,6.15,6.15,0,0,0-1.48-.55,3,3,0,0,0-2.59.68,3.05,3.05,0,0,0-1,2.49,4.37,4.37,0,0,1-.22.4,2.93,2.93,0,0,0-.39,2,3.49,3.49,0,0,0-.65.56A3.69,3.69,0,0,0,83.4,111a4.17,4.17,0,0,0-4.49,1.42,4.45,4.45,0,0,0-.73,5,3.36,3.36,0,0,0,2.91,1.63,3.81,3.81,0,0,0,.74-.08,2.83,2.83,0,0,0,.9-.36,3.05,3.05,0,0,0,.35,1,2.91,2.91,0,0,0,1.15,1.08,6.76,6.76,0,0,0-.81.79,4.45,4.45,0,0,0-.5.75,3.26,3.26,0,0,0-.67-.6,3.49,3.49,0,0,0-2.9-.46l-.09,0a3,3,0,0,0-1.76.16,3,3,0,0,0-1.77,2.13c-.2,1-.58,4.21,3.45,5.17h0a3,3,0,0,0,2.84.28,3.61,3.61,0,0,0,.6-.35A3.55,3.55,0,0,0,86,131.18a3,3,0,0,0,1.93-.71,2.78,2.78,0,0,0,.61-.72,3.67,3.67,0,0,0,1.78-2.5v-.12c.05,0,.1-.09.15-.15a4.9,4.9,0,0,0-.26-6.56,2.4,2.4,0,0,0-.43-.41,2.76,2.76,0,0,0,.25-.8,4.31,4.31,0,0,0,1-1.15,2.93,2.93,0,0,0,.35-1,2.94,2.94,0,0,0,2.43.81.58.58,0,0,0,.19,0,4.39,4.39,0,0,0,3,1.42,3.83,3.83,0,0,0,.65-.06,3.88,3.88,0,0,0,2.89-2.57,2.81,2.81,0,0,0,.2-1h0a4.54,4.54,0,0,0,.82-.07,2.83,2.83,0,0,0,1.54,1.48,3.1,3.1,0,0,0,1.28.27,3,3,0,0,0,1.68-.51,3.79,3.79,0,0,0,1.74,0,3,3,0,0,0-.65,2l0,1.32a3.14,3.14,0,0,0-3.65-.12c-.62.41-2,1.64-1.13,4.16a3,3,0,0,0,1.17,1.52l.37.49c.75,1,2,2.77,4.08,2.77h.23a4,4,0,0,0,3.27-2.24c0-.06,0-.13.08-.19a5.2,5.2,0,0,0,3.5-2.22,2.93,2.93,0,0,0,.28-1.78,2.91,2.91,0,0,0,1.08-1.22l.32-.65c0-.08.07-.16.11-.23a5.71,5.71,0,0,0,.84.07,5.06,5.06,0,0,0,1.2-.15,4.9,4.9,0,0,0,2-1,5.61,5.61,0,0,0,1.53.24,3.81,3.81,0,0,0,3.25-1.71,3.5,3.5,0,0,0,.38-2.88,4,4,0,0,0,.69.06,4.52,4.52,0,0,0,3.26-1.42,2.68,2.68,0,0,0,.52-.74l.49-.16a6.47,6.47,0,0,0,1.77,2.41,4.16,4.16,0,0,0,2.65,1,3.48,3.48,0,0,0,1.23-.23,3.46,3.46,0,0,0,.7.26,2.08,2.08,0,0,0,0,.25,2.95,2.95,0,0,0,2.83,2.62,3.65,3.65,0,0,0-.53.25,3,3,0,0,0-1.32,1.94l0,.07a3.92,3.92,0,0,0-.31,3.33.08.08,0,0,0,0,0,2.73,2.73,0,0,0-.71,1l-.07.13-.24.48a3.42,3.42,0,0,0-.45,0,4.58,4.58,0,0,0-2-.64,1.69,1.69,0,0,0-.23,0l0-.64a3,3,0,0,0-.79-1.88l-.07-1.7a3,3,0,0,0-1.61-2.54,3,3,0,0,0-2-.26,3.4,3.4,0,0,0-3.39-.28,3.35,3.35,0,0,0-1.79,2.7,3.27,3.27,0,0,0-.67.28,3.93,3.93,0,0,0-2,4.37,4.78,4.78,0,0,0,4.41,3.37h.16c.14,0,.27,0,.4,0a5,5,0,0,0,.68,2.41,3,3,0,0,0-.68.41,3,3,0,0,0-2.16-1.5c-4-.56-5.29,1-5.71,2.39a3.28,3.28,0,0,0,1.1,3.47,5.66,5.66,0,0,0-1.37.16,3,3,0,0,0-2.2,2.39,3.55,3.55,0,0,0-.06.64,3,3,0,0,0-2,2.67c0,.13,0,.24,0,.37l-.07.06a4.53,4.53,0,0,0-3.87-3,3,3,0,0,0-1.12.12,2.92,2.92,0,0,0-.14-1.7.31.31,0,0,0-.05-.1,4.07,4.07,0,0,0-2.49-4.58,3.39,3.39,0,0,0-1.16-.14,2.94,2.94,0,0,0-.54-2.22,3,3,0,0,0-1.59-1.1,3.77,3.77,0,0,0-2.36-5.68,3,3,0,0,0-2.82.65,2.89,2.89,0,0,0-.7.94A4.15,4.15,0,0,0,96,127.06a3,3,0,0,0-3.49,3.05,2.88,2.88,0,0,0-1.79,1.62l-.06.12a9.06,9.06,0,0,0-.79,2,4.17,4.17,0,0,0-2.73,2.75,3,3,0,0,0,2.75,3.84A4.19,4.19,0,0,0,93,141.82a5.43,5.43,0,0,0,1.45-.22l.05,0c-1.5,1.54-.47,3.79.31,5.47a2.93,2.93,0,0,0,1.12,1.27,3.6,3.6,0,0,0,2,.61,3.08,3.08,0,0,0,2.35-1.09c2.05-2.41-.72-5.7-1-6.07a3.13,3.13,0,0,0-3.39-1,2.82,2.82,0,0,0,.65-1,4.53,4.53,0,0,0,.26-1.61,4.06,4.06,0,0,0,1.55,1l.23.07a3,3,0,0,0,.63,1.7,3,3,0,0,0,2.46,1.22h0a3,3,0,0,0,.91,1.93,3,3,0,0,0,1,3,6.64,6.64,0,0,0,.84.6,4.78,4.78,0,0,0-.22.64,3,3,0,0,0,.63,2.67,4.52,4.52,0,0,0,3.5,1.76c.13,0,.26,0,.38,0a5,5,0,0,0,1.61,1.07,3.22,3.22,0,0,0,.58.18,3.07,3.07,0,0,0,.32,1.71,3.44,3.44,0,0,0,3.14,1.84h.17a3,3,0,0,0,3-2.55,4.07,4.07,0,0,1,.36-.36,8.81,8.81,0,0,0,1.2-1.35,3,3,0,0,0,.15-3.13,2.51,2.51,0,0,0-.27-.37,4.33,4.33,0,0,0,1.39-1,4.55,4.55,0,0,0,.74-1.11h0a3.18,3.18,0,0,0,.53.14,3,3,0,0,0-.83,2.3c0,.07-.16.29-.22.4a3,3,0,0,0,.1,3.22,5.23,5.23,0,0,0-1.34.8,3.46,3.46,0,0,0-1.22,3.35,3.83,3.83,0,0,0,2.91,2.84,2.94,2.94,0,0,0,2.69-.47,3.77,3.77,0,0,0,.46-.43,3.57,3.57,0,0,0,2.8-3.12,2.83,2.83,0,0,0,0-.5,3.12,3.12,0,0,0,1-.57,3,3,0,0,0,1-1.9,3,3,0,0,0,1.29.31h0a7.57,7.57,0,0,1,1.31.79,7.91,7.91,0,0,0,4.21,1.66A4.29,4.29,0,0,0,139,155a3,3,0,0,0,.74-2.72,3,3,0,0,0-1.85-2.12,10.72,10.72,0,0,1-1.72-.93c-1.54-1-3.88-2.39-7.14-.92a2.9,2.9,0,0,0-.65.42,3,3,0,0,0-1.44-.53l-.24,0a3.24,3.24,0,0,0-.52-.53h.13a4.87,4.87,0,0,0,4.22-1.1,3.28,3.28,0,0,0,.4-.52,5.82,5.82,0,0,0,1.6-.28l.16.06a6.17,6.17,0,0,1,.93.44,11.26,11.26,0,0,0,2,.89,3.49,3.49,0,0,0,.84.13,3.65,3.65,0,0,0,.82.79,3.45,3.45,0,0,0,1.92.58,4,4,0,0,0,1-.13l.08,0a2.92,2.92,0,0,0,.19.49,5,5,0,0,0-.2,1.82,3,3,0,0,0,2.91,2.72h.25c3.77,0,5.38-2,6-3.18a3,3,0,0,0,.13-2.46c0-.12.05-.23.07-.35a4.25,4.25,0,0,0,3.17-2.31,3,3,0,0,0-1.8-4.29,5.22,5.22,0,0,0-.84-1.5,3,3,0,0,0,1.75.57h0a4.85,4.85,0,0,0,4.24-3.53,3.93,3.93,0,0,0,.08-1.09l.06-.09.42.18a3,3,0,0,0,1.59.11,4.46,4.46,0,0,0,1.73-.76,3.93,3.93,0,0,0,3-1.42,4.56,4.56,0,0,0,1-1.69,2.77,2.77,0,0,0,1.85-1.33,3.65,3.65,0,0,0,1.78-2.5,3,3,0,0,0-.83-2.66,3.3,3.3,0,0,0-.79-.55,4.45,4.45,0,0,0,1.72-.79,3,3,0,0,0,.79-.93h.19a6.33,6.33,0,0,0,.17,1,6.14,6.14,0,0,0-.64,1.72,3,3,0,0,0,1.13,3,2.92,2.92,0,0,0,1.94.59,4.08,4.08,0,0,0,2.21.74,3.5,3.5,0,0,0,1.07-.19l.58.79a23,23,0,0,0,1.89,2.42,2.95,2.95,0,0,0,3.19.82,3,3,0,0,0,2-2.47l.12,0a3.35,3.35,0,0,0,.84-.58,3.22,3.22,0,0,0,1,.18,3,3,0,0,0,2.18-1h0a4.47,4.47,0,0,0,.86-1.29,4,4,0,0,0,.77,1,4.48,4.48,0,0,0,2.68,1.11,3.18,3.18,0,0,0,2.06,2.21l0,0,1,.32.14.05h0l.64.21,0,0a4.68,4.68,0,0,0,1,.12,2.67,2.67,0,0,0,2.74-2,2.61,2.61,0,0,0-.24-2.42,3,3,0,0,0,.63-1.83,5,5,0,0,0-2.05-4.16,3,3,0,0,0,1.08-2.3,4.93,4.93,0,0,0-3.63-4.93,3,3,0,0,0-1.88,0,3.53,3.53,0,0,0-1.65-3.73,3.46,3.46,0,0,0-2.83-.25c-.93-2-1.74-3.67-4-3.43a2.3,2.3,0,0,1-.83.1,4.29,4.29,0,0,0,.12-1.48,3.62,3.62,0,0,0-2.36-3,3.83,3.83,0,0,0,.69-2.68,3.6,3.6,0,0,0-.24-.94c.12,0,.23,0,.35,0a3.29,3.29,0,0,0,1.11-.2,3.23,3.23,0,0,0,.59-.29l.35-.16.21-.1c0,.08,0,.18.06.29l0,.09a3.5,3.5,0,0,0-.65,2.89,3,3,0,0,0,3.12,2.34,5.31,5.31,0,0,0,2.45.63,4,4,0,0,0,.58,0,3,3,0,0,0,2.32-1.57,4.33,4.33,0,0,0,.49-2.29,2,2,0,0,0,.24,0h.33a4.17,4.17,0,0,0,.88-.09,2.9,2.9,0,0,0,.84.14,3.49,3.49,0,0,0,1.84-.56,8.7,8.7,0,0,0,2-1.88,2.85,2.85,0,0,0,.64-.29,3.45,3.45,0,0,0,.87.12h.09a4.5,4.5,0,0,0,3.17-1.4,3,3,0,0,0-.39-4.61Z"/><path class="cls-1" d="M84.25,95a3,3,0,0,0-.81,3.11c1.23,3.84,3.53,4.27,4.49,4.27h.23a3.33,3.33,0,0,0,3-2.8c.25-1.62-.6-3.82-3.77-5.13A3,3,0,0,0,84.25,95Z"/><path class="cls-1" d="M150.07,155a3.78,3.78,0,0,0-3.77-1.93c-1,.18-2.31.87-2.87,3.11a3,3,0,0,0,.94,3,3.16,3.16,0,0,0,1,.57,3.68,3.68,0,0,0,2.78,1.53,3.5,3.5,0,0,0,.82-.11,3.43,3.43,0,0,0,2.5-3.16,3,3,0,0,0-.84-2.56A3.32,3.32,0,0,0,150.07,155Z"/></g></g></svg>';
  };
  a.ImageTextureSpray = function () {
    a.SVGImage.call(this);
  };
  a.ImageTextureSpray.prototype = Object.create(a.SVGImage.prototype);
  a.ImageTextureSpray.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374.73 400" width="374.73" height="400"><defs><style>.cls-1{fill:' + c + ';fill-rule:evenodd;}</style></defs><path class="cls-1" d="M268.77,0l2.45.79c-.2.61-.39,1.23-.59,1.84-1-.26-2.24-1-2.65-.18C266.28,1.46,269,1.33,268.77,0Z"/><path class="cls-1" d="M320.82,39.8c-1.29.66-2.72-1.21-2.47-2.83C319.91,36.17,322.3,37.54,320.82,39.8Z"/><path class="cls-1" d="M212.5,8.86c-8.89-5,6.48-8.67,0,0Z"/><path class="cls-1" d="M300.42,33.89l1.22.39c-.59,1.65.62,1.56-.79,2.45l-1.22-.4C299,34.79,299.93,35.57,300.42,33.89Z"/><path class="cls-1" d="M266.55,23.62c-1.08,1.21-1.88,3-4.05,2.07.26-.81.53-1.63.79-2.45A4.23,4.23,0,0,1,266.55,23.62Z"/><path class="cls-1" d="M230.11,21.31c.89.91,3.29,1,2.47,2.83C231,23.6,228.56,23.47,230.11,21.31Z"/><path class="cls-1" d="M216.09,22.87a4.18,4.18,0,0,1-2.86-1.6C214.2,20.11,217.25,20.5,216.09,22.87Z"/><path class="cls-1" d="M275.47,42.05c-.8-1.52-1.23,0-3.06-1C272.29,38.57,277.47,39.47,275.47,42.05Z"/><path class="cls-1" d="M279.74,41.4c2.12.79.49,3.49,3.49,3.83l-1,3.06c-2-.16-2-1.34-3.48-1.79C281,45.28,279.47,43.13,279.74,41.4Z"/><path class="cls-1" d="M283.41,42.59l1.83.59c-.6,1.16-.49,2,.63,2.23C284.52,47.62,282.94,44.33,283.41,42.59Z"/><path class="cls-1" d="M244.64,30.74a2.82,2.82,0,0,1,.44,2.84c-.11,1.5,1.19-.43,1.64,1.21C244.63,37.3,243.18,33.16,244.64,30.74Z"/><path class="cls-1" d="M294.64,47.57c2.43.31,0,5.11-1.8,3.47C291.92,49.32,293.6,48.28,294.64,47.57Z"/><path class="cls-1" d="M253.84,35.74c1.91,1,1.27,4.78,3.89,2.61a2.82,2.82,0,0,1,.44,2.84c-.68-.33-1.13-.21-1.42.22-1.8.31-1.14-3-2.26-1.4C253.39,39,253.21,37.6,253.84,35.74Z"/><path class="cls-1" d="M294.68,51.64l2.45.79A1.37,1.37,0,1,1,294.68,51.64Z"/><path class="cls-1" d="M327.74,62.32c2.12,1.23,2.31,3.42-.79,2.45C327.21,64,327.48,63.13,327.74,62.32Z"/><path class="cls-1" d="M219.19,27.92c2,.33.78,2.33,3.28,2.42-1.08,1.88-3.26,1.63-4.86,2.48Q218.39,30.38,219.19,27.92Z"/><path class="cls-1" d="M227.36,31.92c-.28,1.12-1.16,1-1.4,2.25-2.27-.55-.88-3-2.88-3.64C225,28,225,31.72,227.36,31.92Z"/><path class="cls-1" d="M241.64,35.85c.62-1.38,2.8.52,3.06,1C243.52,38.84,242.33,36.86,241.64,35.85Z"/><path class="cls-1" d="M302.05,56c1.36.16,1.48,1,2.25,1.41-1.1,1.29-.63,1.24-1.8,3.47C300.65,59,301.72,58.83,302.05,56Z"/><path class="cls-1" d="M277.62,54.24c-2.29-.88-1.22-3.47-1.68-5.28C279.26,48.67,277.7,51.33,277.62,54.24Z"/><path class="cls-1" d="M210,29c1.43-1.35,3.28,1.34,2.47,2.82-1.94-1.13-1.58,2.24-3.65.85C208.66,30.85,211.19,29.47,210,29Z"/><path class="cls-1" d="M254.32,42.65c2.62.89,2.46,3.51,1.06,5.08-1.69-.67.18-3.16-2.27-3.44A3,3,0,0,0,254.32,42.65Z"/><path class="cls-1" d="M305.74,59.27c1.15.94,1.68,2.2.65,4.26-1.55-.42-2.27.54-3.06-1C304.28,60.45,306.39,62.2,305.74,59.27Z"/><path class="cls-1" d="M249.83,41.88C248.71,43,248,45,246.2,44.76c1.06-.55,1.54-2,.18-2.64C247.19,41.37,248.63,41.87,249.83,41.88Z"/><path class="cls-1" d="M295.75,56.71c2.83,1.12-.75,3.81,3.69,3.22-.21,1.09-1.56,1.25-.6,1.84-.32,1.36-2.26-.42-3.25-.38C295.39,59.9,293.76,57.79,295.75,56.71Z"/><path class="cls-1" d="M227,35.18c1.32-.22,1.45,2.49,2.45.79C231.41,38.87,225.87,37.42,227,35.18Z"/><path class="cls-1" d="M234.14,38.16c2.15,1.29-.4,5.13-2.62,3.89C233.4,40.49,232.92,40.12,234.14,38.16Z"/><path class="cls-1" d="M239.07,43.81c-2.67,0-.91-2.26-2.47-2.82C238.13,38.69,240.61,41.53,239.07,43.81Z"/><path class="cls-1" d="M240.67,41a4.18,4.18,0,0,1,2.86,1.6c-.34,2-1.94,1.54-3.65.85C240.14,42.58,240.41,41.76,240.67,41Z"/><path class="cls-1" d="M269.68,53.7c-1.19-.59-1.24-1.75-1.86-2.63C269.72,48.9,272.45,52.27,269.68,53.7Z"/><path class="cls-1" d="M283.13,56c-1.2,1.45-1.32,2.74,0,4.07-3,1.34-1.9-3.78-4.71-4.23C280.1,54.16,281.78,53.73,283.13,56Z"/><path class="cls-1" d="M262.51,48.68l1.84.59c-2,2.85,1.24,4.73-1.37,6.32-2.27-2,0-3.5-2.48-4.86C261.07,49.86,262.59,50.83,262.51,48.68Z"/><path class="cls-1" d="M286.38,56.39c2.17.77,1.48,3,3.5,3.84-.6.49-1.61.17-1.82,1.44C285.6,60.88,285.77,58.75,286.38,56.39Z"/><path class="cls-1" d="M321.08,68.28c1.13,1.89,0,3.8-1.58,4.9C316.86,71.35,319.63,69.91,321.08,68.28Z"/><path class="cls-1" d="M218,35.67c-.15,1.36-.94,1.48-1.4,2.25-.36-.84-2.2-.92-1.25-2.43A3.62,3.62,0,0,1,218,35.67Z"/><path class="cls-1" d="M253.15,48.36c2.13,1.17,3-.2,5.1,1C257.59,51.33,252,51.67,253.15,48.36Z"/><path class="cls-1" d="M228.46,41.06c1.13.28,1,1.17,2.26,1.41-.45,1.79-1,3.36-2.83,2.46C228.94,43.2,227.42,42.79,228.46,41.06Z"/><path class="cls-1" d="M298.25,63.61c1.68.33,1.17,1.79,1,3C297.05,66.6,297.56,65.15,298.25,63.61Z"/><path class="cls-1" d="M224.6,40.49c1.79-.31,1.13,3,2.25,1.4.55.06.5.43.41.81s-.26.82-.4,1.23c-1.84-1.78-4.26.84-3.69-3.23C223.85,41,224.31,40.92,224.6,40.49Z"/><path class="cls-1" d="M290.31,63.07c1.09.64,2.57,1.08,1.86,2.63-.68-.33-1.13-.22-1.43.21C289.72,65.42,289.69,64.41,290.31,63.07Z"/><path class="cls-1" d="M266.85,56.17c.84.17,1.61,2.79,2.25,1.4,1.71,2.14-2.63.75-3.24,1.66C263.89,58.1,266.05,57.26,266.85,56.17Z"/><path class="cls-1" d="M281.54,60.91c1.68.34,1.17,1.79,1,3.05-2.19-.86-2.08-1.6-4.29-1.39C278.63,60.54,281.42,63.33,281.54,60.91Z"/><path class="cls-1" d="M324.4,74.76c2.76.63,3.9,2.09,3.29,4.44C326.33,76.73,323,78.48,324.4,74.76Z"/><path class="cls-1" d="M330.32,77.35c2.62-.15-.77,2.77,1.85,2.62-.67,1.36-1.32,2.74-3.24,1.66C331.25,79.91,328.6,78.49,330.32,77.35Z"/><path class="cls-1" d="M263.81,57.21c1,1-.59,5.42-2.61,3.89C260.07,58.77,262.74,58.25,263.81,57.21Z"/><path class="cls-1" d="M205.46,39a3,3,0,0,0,1.64,1.2c-.59.36-1.5,1.37-.6,1.84C205,43.6,204.27,40.55,205.46,39Z"/><path class="cls-1" d="M313,74.46l2.45.79c-.26.81-.53,1.63-.79,2.45C312.65,77.36,312.09,76.28,313,74.46Z"/><path class="cls-1" d="M193.45,38.54c2.38.82.51,3.83.87,5.69C193,42.93,192.15,39.58,193.45,38.54Z"/><path class="cls-1" d="M174.89,33.22c2.39.13.23,3-.38,3.26A2.06,2.06,0,0,1,174.89,33.22Z"/><path class="cls-1" d="M310.05,85.67c-.19-1.6-1.21-2.78-.45-4.88-1-.56-1.31.11-1.62.83-.67-1.25-1.84-3.59.16-4.68.48,1.25,1.4,4.89,3.28,2.41C312.35,81.53,310.41,83.3,310.05,85.67Z"/><path class="cls-1" d="M205.73,46.57c-.61-1.21-3.14-1.09-3.65.84a2.41,2.41,0,0,1-1.66-3.24C201.66,47.26,206.42,41.41,205.73,46.57Z"/><path class="cls-1" d="M181,37.23c1.83.62.37,4.92-1.8,3.48C179.63,39.17,180.09,37.73,181,37.23Z"/><path class="cls-1" d="M305.51,78.8c-.37,2.27-2.65.8-3,3.08-.84-.43.38-1.9-.63-2.23C302.67,78.57,304,78.54,305.51,78.8Z"/><path class="cls-1" d="M197.83,50.1c-3.68-.67.78-4-.45-4.88,1-1.7,1.11,1,2.44.79C199.54,48.11,198.49,48.72,197.83,50.1Z"/><path class="cls-1" d="M206.76,47.57c.2,2.73-2.72-.64-3,1C202.19,47.15,205.24,46.39,206.76,47.57Z"/><path class="cls-1" d="M178.4,39.09c-.28.48,0,.65.41.81-2.21,1.5-2.44,1-5.27,1.67-.77-1.53.43-1.56,1-3.06C175.61,40.72,176.82,38.75,178.4,39.09Z"/><path class="cls-1" d="M306.34,80.42a11.94,11.94,0,0,1,.65,4.26c-1.49-.58-2.93-1.07-3.45.24-1.33-.51.57-2.68.57-3.87C304.77,80.68,305.9,81.23,306.34,80.42Z"/><path class="cls-1" d="M340.43,92.1c-.49,2.05-1.69,2.72-3.44,2.27.17-.6-.6-.71-1-1C336.31,90.7,339.29,90.19,340.43,92.1Z"/><path class="cls-1" d="M194.12,44.84c1.24,1.35.4,2.46-.57,3.87-.75-.13-1.05-.49-1-1-.76.2-1.09,1.21-2.23.63C191,46.1,192.91,46.15,194.12,44.84Z"/><path class="cls-1" d="M313.29,84l2.45.79c-.11,2.69-2.86,2.42-3.65.84A3,3,0,0,0,313.29,84Z"/><path class="cls-1" d="M331.48,92.59c-2.09.06-1.59-1.63-4.48-.77a3.28,3.28,0,0,0-1.25-2.43C327.57,87.93,331.8,90.68,331.48,92.59Z"/><path class="cls-1" d="M179.45,42.13a5.27,5.27,0,0,0-1.39,4.28C175.21,46.28,177.06,40.57,179.45,42.13Z"/><path class="cls-1" d="M169.25,40.19q3,1,2.08,4.05l-3.06-1c1.68,3-1.55,3.83-1.37,6.32-2.27-1.47.1-3.8-3.71-5.26C165.08,40.8,167.77,44.77,169.25,40.19Z"/><path class="cls-1" d="M340.66,95.56c-.26.82-.53,1.63-.79,2.45-1.13-.28-1.05-1.17-2.25-1.4C338.44,95.88,339.16,95,340.66,95.56Z"/><path class="cls-1" d="M186.81,46.54c2.59.71,1.87,3.13,3.3,4.44-.58,1.21-2.47-.16-3,1.05C187.14,50.11,185.76,49,186.81,46.54Z"/><path class="cls-1" d="M320.28,91.68c1.12.28,1.05,1.17,2.25,1.41-1.34,3.36-4.57,3-7.29,3.72.95-1.51-.88-1.59-1.24-2.43,1.46-.13,2.52-1.06,3.85-1.45,1.47.1.5,1.44,1.44,1.81C320.69,95.09,319,92.94,320.28,91.68Z"/><path class="cls-1" d="M323.14,93.28c.91.45,2.1,3.28,3.48,1.8,1.48,1.1-1.48,1.64-1.19,3.67C323.23,97.67,322.66,95.74,323.14,93.28Z"/><path class="cls-1" d="M154.6,39.51c1.15.78,2,1.7.85,3.65L153,42.37A4.2,4.2,0,0,1,154.6,39.51Z"/><path class="cls-1" d="M182.15,48.41,184,49c-.34.86-.66,1.7,0,2-1.88.58-.75.87-2,2.05C180.26,52.44,181.7,50.18,182.15,48.41Z"/><path class="cls-1" d="M195.62,52.76c1.09,1.57-2.49,1.61-1,3.06-1.57,1.73-1.09-1.76-2.87-1.6C191.86,51.42,194.7,54,195.62,52.76Z"/><path class="cls-1" d="M293.56,84.4c2.14.61,2.5,2.13,3.7,3.22-1.33,2.36-4.15.53-5.1-1-.48,1.44.47,2.15-.58,3.87-2.24-.21,0-2.74-2.47-2.82.8-2.27,1.26-1.53,1.19-3.67C292.51,86.33,291.54,85.53,293.56,84.4Z"/><path class="cls-1" d="M116.45,27.86c-.33.85-.66,1.7,0,2-.46.77-1.7,0-2.65-.18C115.22,29,113.7,27,116.45,27.86Z"/><path class="cls-1" d="M173,51.55c.1-1.47,1.45-.5,1.82-1.45a2.83,2.83,0,0,1,.43,2.85C173.91,52.8,173.79,52,173,51.55Z"/><path class="cls-1" d="M180.15,52.5c1.39.65.45,2.49,2.47,2.82-.21,1.09-1.56,1.25-.59,1.84-1.56.3-4.79.33-5.71-1.17.55-.42,1.09-.85.39-1.22C178,54.2,179.34,53.91,180.15,52.5Z"/><path class="cls-1" d="M173,51.55c-1,1.51.89,1.59,1.25,2.43-1.34,1.34-3.1.29-4.49-.78A2.42,2.42,0,0,1,173,51.55Z"/><path class="cls-1" d="M316.07,98.43c3,.37,2.09,4.26-.79,2.45C315.54,100.07,315.81,99.25,316.07,98.43Z"/><path class="cls-1" d="M314.06,100.49c-1.75,2.42,1.55,2.27.64,4.26C312.41,104.24,310.14,99.63,314.06,100.49Z"/><path class="cls-1" d="M314.31,106c4.49,2.13,3.08-2.82,6.08-2.09-.81,1.45-1.81,2,.44,2.84C319.57,108.57,313.78,109.45,314.31,106Z"/><path class="cls-1" d="M118.18,39.24c-.44,1.79-1,3.36-2.82,2.47.43-1.08-.33-1.54.18-2.65C116.61,39.49,117.07,38.73,118.18,39.24Z"/><path class="cls-1" d="M338.8,113.89c-1.19.65-3.39-.44-2.67-2.21C337.36,111,339.91,111.91,338.8,113.89Z"/><path class="cls-1" d="M331.23,110.09c-.48,2-1.68,2.71-3.43,2.27C326.91,110.52,329.08,109,331.23,110.09Z"/><path class="cls-1" d="M122.72,46.11c-.91,1.86-3,.36-3.06-1C120.84,43.13,122,45.11,122.72,46.11Z"/><path class="cls-1" d="M127.84,49.12c-6.13.56,1.31-6.33,0,0Z"/><path class="cls-1" d="M139.67,52.26c-.13,2.4-3,.23-3.26-.37C136.5,50.59,139.85,50.82,139.67,52.26Z"/><path class="cls-1" d="M173.61,70.66c-2.52.8-5.76-1.58-6.34-3.39.48-1.82,3.08-1.06,3.46-.24,1.18-1.8-1.73-1.51-1.86-2.63,1.5-2,2.72,1.73,3.24-1.66C174.4,64.47,173.85,67.64,173.61,70.66Z"/><path class="cls-1" d="M331.7,117c-.3,3-4.13,2.39-5.07,1.06C327.16,115.44,330,117.37,331.7,117Z"/><path class="cls-1" d="M120.12,50c1.36.16,1.48,1,2.25,1.41a2.92,2.92,0,0,0-1.21,1.64C119.49,52.71,119.42,51.55,120.12,50Z"/><path class="cls-1" d="M341.52,122.2c1,1-1.51,3.63-3,3.08C338.73,122.74,340.7,123.59,341.52,122.2Z"/><path class="cls-1" d="M102.4,48.34c.74.81.25,2.25.23,3.45-3,0-.93-2.59-3.08-3C100.53,46.41,101.3,49.84,102.4,48.34Z"/><path class="cls-1" d="M348.29,128.45c-1,1.11-4.24,3-3.26-.38C346.6,129.14,346.9,127.72,348.29,128.45Z"/><path class="cls-1" d="M130,59.27c2.13.44.16,3,.64,4.27-2.13.55-1.85-.15-4.26.65-1.11-1.14-3.92-1.4-3.69-3.22C124.57,57.16,127.58,61.32,130,59.27Z"/><path class="cls-1" d="M136.72,63.48a1.37,1.37,0,1,1-2.45-.79C135.82,62.06,135,63,136.72,63.48Z"/><path class="cls-1" d="M346.89,130.7c1.16.76,1.25,2.08,3.28,2.41-.78,2.15-2.83,1.81-5.08,1.06C345,132.11,345.59,132,346.89,130.7Z"/><path class="cls-1" d="M120.6,59c-3.78,2.85,1.08,3.59-1.36,6.32a8.29,8.29,0,0,1-1.28-6.5C119,59.2,119.49,58.44,120.6,59Z"/><path class="cls-1" d="M146.13,69.9a3.07,3.07,0,0,0-1.2,1.64l-1.22-.4a3,3,0,0,1,0-2C145.34,69.71,145.25,68.49,146.13,69.9Z"/><path class="cls-1" d="M346.73,135.38a3.62,3.62,0,0,0,2.25,1.4c-.26.82-.53,1.64-.79,2.45l-2.45-.79c.5,2.67,0,2.68.25,5.49-2.8,1.21-5-.38-5.53-3.82C343.09,139.59,344.41,136.51,346.73,135.38Z"/><path class="cls-1" d="M131.05,66.38c.94.77,1.67,1.29,2.45.79.1,2.33,1.8,3.85,1.28,6.5-3.59-.64-.93-2.54-1.46-3.85a3.62,3.62,0,0,1-2.65-.18A4.19,4.19,0,0,1,131.05,66.38Z"/><path class="cls-1" d="M125.61,72.74c2.26.25,1.51,2.85.24,3.45C124.52,74.9,124.34,74.31,125.61,72.74Z"/><path class="cls-1" d="M104.4,67.24c-.05.56-.42.5-.8.41-.2,1.13.6,1.74,2.05,2-.15,1.36-.94,1.48-1.41,2.25-.9-.9,0-2.74-2.46-2.83C102.12,67.44,102.85,66.53,104.4,67.24Z"/><path class="cls-1" d="M114.83,72.63c1.21.58-.16,2.47,1,3.05-1.09,1.5-1.86-1.93-2.84.43-1-.49-1-1.5-.43-2.84C113.76,73.87,114.56,73.76,114.83,72.63Z"/><path class="cls-1" d="M355.21,151c1.68.34,1.74,1.5,1.05,3C353.74,154.76,353.35,152.18,355.21,151Z"/><path class="cls-1" d="M108.73,72.69a12.23,12.23,0,0,1,.65,4.27C106.73,76.72,107.57,73.35,108.73,72.69Z"/><path class="cls-1" d="M92.42,68.77c1.55.23,1,1.55,2.86,1.61-.54,3.27-2.63,3.52-4.64,3.9C89.38,72.68,91.07,70.52,92.42,68.77Z"/><path class="cls-1" d="M126.7,79.85c1.19.58.66,2,1.85,2.63-1,1.8-3.85-.21-5.49.25a3.62,3.62,0,0,1,.18-2.65C125.27,80.62,125.72,82.47,126.7,79.85Z"/><path class="cls-1" d="M103.67,75.79c-.2.61-.39,1.23-.59,1.84-1.9-.06-1.31-1.38-2.86-1.6C101,75.28,102.47,75.78,103.67,75.79Z"/><path class="cls-1" d="M107.56,78.4c-1.06,1.57.35,1.86-.38,3.26-2.49-.09-1.56-1.93-2.46-2.83A2.81,2.81,0,0,1,107.56,78.4Z"/><path class="cls-1" d="M114.1,81.19a2.05,2.05,0,0,0-.38,3.25c-.46.77-1.7,0-2.65-.18C112.93,83.57,110.83,80,114.1,81.19Z"/><path class="cls-1" d="M117.16,82.18q3.33.84,2.07,4c-1.39-.72-1.69.69-3.26-.37C117.54,85.09,116.89,83.67,117.16,82.18Z"/><path class="cls-1" d="M125.73,84.94a3,3,0,0,0,1.64,1.21c-.16,1.36-1,1.48-1.41,2.25-.42-.55-.85-1.09-1.22-.4C123.36,87.38,125.25,85.2,125.73,84.94Z"/><path class="cls-1" d="M120.45,86.62c1.54.57.56,2.44,0,4.07C118.68,90.12,119.34,87.19,120.45,86.62Z"/><path class="cls-1" d="M114.13,85.25c1.19.59.67,2,1.86,2.63-.81.74-2,.82-3.46.24C112.76,86.56,114.08,87.15,114.13,85.25Z"/><path class="cls-1" d="M65,70.05l1.23.39c-.28.48,0,.66.41.81l-.39,1.22c-.49-.28-.66.06-.81.42l-1.23-.39c.28-.49,0-.66-.41-.82l.39-1.22C64.64,70.74,64.81,70.41,65,70.05Z"/><path class="cls-1" d="M100.27,82.13c.63,1,.64,2.78-.38,3.26-.72-.82-1.64-1.55-1-3C99.53,82.68,100,82.56,100.27,82.13Z"/><path class="cls-1" d="M57.46,72.35c-.34,2-1.94,1.54-3.65.85C54.35,71.35,56.61,70.68,57.46,72.35Z"/><path class="cls-1" d="M113.78,90.55c1.76.8,1.9,2.43,2.07,4-.36-.59-1.37-1.5-1.84-.6C113.27,93.19,113.19,92,113.78,90.55Z"/><path class="cls-1" d="M105.62,88.59c2.85,1.13-1.26,2.65-1,5.09-2.38-1-3.75,0-6.32-1.36-1.18,1.8,1.72,1.5,1.86,2.63-1,1.62-3.42.65-3.83,3.49-1.09-.64-.55-2.11-2.67-2.21l1-3.06c2.59,1.06,3.21-1.72,4.86-2.49C101.46,93.21,104.52,90.84,105.62,88.59Z"/><path class="cls-1" d="M353.56,170.71c2.56.57-.55,4-.55,5.91l-2.45-.79a12,12,0,0,0,1-5.1C352.38,171.06,353.23,171.39,353.56,170.71Z"/><path class="cls-1" d="M91.78,87.5c-.87,1.28-1.93,2.21-3.85,1.46.19-.61.39-1.23.59-1.84C89.91,87.85,90.21,86.43,91.78,87.5Z"/><path class="cls-1" d="M347.08,174c.12-1.25-1.39-1.67-.23-3.46,1.84-.15.83,4.48,2.25,1.41,1.67,2.07-1.11,3.76-1,7.13-3.53.93-2.4-3.54-5.31-2.4C341.39,174.14,345.7,174.38,347.08,174Z"/><path class="cls-1" d="M103.66,96.75c-.4,1.53-.86,3-1.8,3.47-2.12-.11-1.58-1.58-2.66-2.21C100.63,97.48,101.62,96.07,103.66,96.75Z"/><path class="cls-1" d="M372.2,184.17c.74.48.62,1.39,1.44,1.82-.49,1-1.5,1-2.84.43C371,185.06,371.74,184.94,372.2,184.17Z"/><path class="cls-1" d="M88.4,95.87a2.84,2.84,0,0,1,.43,2.84c-1.25-.11-1.67,1.39-3.46.24C86.2,97.56,88.16,98.41,88.4,95.87Z"/><path class="cls-1" d="M94.52,97.85c-1.33,1-.13,2.49-.38,3.26C92,102.63,91.39,96.55,94.52,97.85Z"/><path class="cls-1" d="M343.47,178.94l2.45.8c-2.53,2.11,1.55,2.16.45,4.87C345.58,182.63,341.88,182.14,343.47,178.94Z"/><path class="cls-1" d="M114.54,107c-2.89.67-4.41,4-8.31,2.72a3.68,3.68,0,0,0-2.08-4C108.14,104,110.2,106.06,114.54,107Z"/><path class="cls-1" d="M340.43,180c2.05,1-.62,3-2.22,2.67C338.61,181.1,339.79,181.07,340.43,180Z"/><path class="cls-1" d="M373.29,191.28c.73.48.61,1.39,1.44,1.82-.83.72-1.55,1.64-3,1C370.9,192.69,372.53,192.44,373.29,191.28Z"/><path class="cls-1" d="M58.24,90.86c2,.34,2.56,1.41,1.66,3.24l-2.45-.79C57.71,92.49,58,91.67,58.24,90.86Z"/><path class="cls-1" d="M347.18,184.2l3.06,1a3.58,3.58,0,0,0-1.4,2.25C346.83,187.11,346.28,186,347.18,184.2Z"/><path class="cls-1" d="M334.74,180.86a4.14,4.14,0,0,1,2.86,1.6C337,184.26,333.42,182.92,334.74,180.86Z"/><path class="cls-1" d="M343.38,191.76c.67-2.22-6.63-5.7-1.29-8.53,1.81.6-.15,3.14.64,4.27,1.91.72,2.57-1,4.68.16-.47,1.43.48,2.14-.57,3.87C345.59,191.41,344.88,192.35,343.38,191.76Z"/><path class="cls-1" d="M87.23,101.58c1,1.55.12,4-.75,6.51C84.68,106.93,84.4,102,87.23,101.58Z"/><path class="cls-1" d="M114.78,110.48l1.83.59c-1.23,1.54-1.93,2.58,1,3-.16,1.36-1,1.48-1.4,2.25-.25-1.23-1.5-2-2.47-2.82Z"/><path class="cls-1" d="M96.43,106.58c2,.48,2.71,1.67,2.27,3.43a5.26,5.26,0,0,1-4.28-1.38C95,107.83,95.82,107.38,96.43,106.58Z"/><path class="cls-1" d="M353.54,189.63c.81,3-2.36,9.72-5.24,5.75C349.54,192.47,351.82,191.6,353.54,189.63Z"/><path class="cls-1" d="M97.33,116.33c-1.09,1.85-3.65.86-5.68.87.49-2.23-1.2-2,.57-3.87C94.34,112.5,97.52,114.4,97.33,116.33Z"/><path class="cls-1" d="M371.37,203.51c1.08.63,2.56,1.07,1.85,2.62-.68-.33-1.13-.21-1.42.22C370.77,205.85,370.74,204.85,371.37,203.51Z"/><path class="cls-1" d="M355.92,205.28c.66,1.15.71,3.72-.77,4.48C352,208.9,354.79,206.13,355.92,205.28Z"/><path class="cls-1" d="M361.23,207.67c1.69.67,2.26,1.91,1.46,3.85-2-.18-1.31,0-3.06-1C359.86,209,361.18,209.56,361.23,207.67Z"/><path class="cls-1" d="M88,120.08c1.83,1.32,2.15.48,4.09,2-.72,1.93-2.26,2.24-4.46,1.26C88.36,122,86.94,121.65,88,120.08Z"/><path class="cls-1" d="M362.49,212.13c1.37.33-.42,2.26-.37,3.26-1.12-.11-1-.85-.83-1.62-1.66-.19-2.71.28-2.06-2C361,211.59,361.71,214.87,362.49,212.13Z"/><path class="cls-1" d="M365.57,215.16l-2.44-.79A1.37,1.37,0,1,1,365.57,215.16Z"/><path class="cls-1" d="M351.08,209.8c2.78.28,2.14,2.31,1.26,4.46-1.56-.22-1-1.55-2.86-1.6C349.71,211.1,351,211.69,351.08,209.8Z"/><path class="cls-1" d="M84.41,127c1.31.52.82,2,.24,3.46C83.15,129.84,82.7,127.86,84.41,127Z"/><path class="cls-1" d="M37.1,114.45a4.18,4.18,0,0,1-2.86-1.6C35,111,38,112.63,37.1,114.45Z"/><path class="cls-1" d="M88.72,130.45c-.73,3.12-2-.25-3,1.05C84.18,130.08,87.4,129.66,88.72,130.45Z"/><path class="cls-1" d="M58.52,121.37c2,.49,2.71,1.68,2.27,3.44C58.65,125.85,57.37,123.56,58.52,121.37Z"/><path class="cls-1" d="M349.52,216.73c2.89-1.17,4,4.09,2.28,5.47C349,221.18,349.18,217.88,349.52,216.73Z"/><path class="cls-1" d="M71.42,129.59c2.34,1.13,3.43,3.47,3.29,4.45-.7,1.28-3.09-.73-4.48-.77Z"/><path class="cls-1" d="M364.25,225.54c2.75,0,1.5,2,3.28,2.41-.92.89-2.36.74-4.07,0C363.72,227.18,364,226.36,364.25,225.54Z"/><path class="cls-1" d="M63.48,129.06l1.84.59c-.16,1.36-.95,1.49-1.41,2.25C62.88,131.4,62.85,130.4,63.48,129.06Z"/><path class="cls-1" d="M346.32,222.45c3.81,2.19,2.67,5.47,3.54,9.94a13.84,13.84,0,0,1-4.55-8.91C345.91,223.66,346,222.89,346.32,222.45Z"/><path class="cls-1" d="M84.13,140.46c1.39-1.33,1.91,2,1.66,3.24-.68-.33-1.13-.21-1.42.22C82.58,143.64,85.92,140.74,84.13,140.46Z"/><path class="cls-1" d="M77,141.55c-1.17,0-1.6,1.52-2.63,1.85-2-.48-.53-2.79-2.27-3.44C74.44,138,74.57,140.9,77,141.55Z"/><path class="cls-1" d="M357.79,230.89c2.13.45.16,3,.64,4.27a4.2,4.2,0,0,1-2.86-1.6C355.68,231.44,357.15,232,357.79,230.89Z"/><path class="cls-1" d="M99.47,149.47c-.33,2.36-2,2-3.85,1.47C96,148.58,97.67,148.94,99.47,149.47Z"/><path class="cls-1" d="M363.33,236.74c3,1.78-2,2.7-1.78,5.51-2.69-.56-6.49-1-9-3.58.4-1.21,1.92-.24,2-2C356.22,239.13,361.3,240.47,363.33,236.74Z"/><path class="cls-1" d="M55.22,137.88c1.14,1.29,3.07,2.18,1.87,4.67C53.11,143.58,51.26,138.5,55.22,137.88Z"/><path class="cls-1" d="M345.18,232.23c1.38-1.48,2.57,1.35,3.48,1.8C346.58,236.61,346.75,232.86,345.18,232.23Z"/><path class="cls-1" d="M93,150.75c1.32.52-.59,2.69-.58,3.88-.73-.48-.62-1.39-1.44-1.82C91.05,151,92.58,152,93,150.75Z"/><path class="cls-1" d="M348.27,235.25c1.57.9,3.22,1.76,2.07,4.05Q346.41,238.76,348.27,235.25Z"/><path class="cls-1" d="M51.42,145.44c2.33.77,1.2,3.91-1.4,2.25C50.17,146.33,51,146.21,51.42,145.44Z"/><path class="cls-1" d="M56.73,147.84c-.39,1.55-1.57,1.58-2.21,2.66C52.47,149.46,55.14,147.52,56.73,147.84Z"/><path class="cls-1" d="M87.15,158.34c1.53.4,3,.86,3.47,1.8C89.6,160.4,85.3,161.23,87.15,158.34Z"/><path class="cls-1" d="M56.56,150.48c2.54-2,5.33,3.46,1.65,3.24C56,153.5,57.93,151.14,56.56,150.48Z"/><path class="cls-1" d="M68.19,154.24c5.67-1.05-.14,5.76,0,0Z"/><path class="cls-1" d="M82.88,159c-2.21,2.63-2.58,4-.16,4.68-.46,1.77-2.46.52-2.41,3.27A8.29,8.29,0,0,0,76,163.53c1-3,3.16-.81,2.81-4.51C80.55,159.76,81.14,158.25,82.88,159Z"/><path class="cls-1" d="M65.54,154.06c.46.53.38,2,1,1,.77.46,0,1.7-.18,2.64l-2.45-.79C63.88,154.78,64.17,155.22,65.54,154.06Z"/><path class="cls-1" d="M360.42,252a12.14,12.14,0,0,1-3,3.08c-2-.34-1.54-1.94-.85-3.66C357.5,251,358.94,251.46,360.42,252Z"/><path class="cls-1" d="M335.13,244.53c1.43,1.48.94,3.94,1.48,5.89-3.3,1.16-2.88.31-6.33-1.37.71-2.81,3.73-1.09,2.81-4.5C334,245.42,334.48,247.52,335.13,244.53Z"/><path class="cls-1" d="M12.54,142.35c-1.18,2-2.37,0-3.06-1C10.65,139.37,11.84,141.34,12.54,142.35Z"/><path class="cls-1" d="M353.29,251.08l-1,3.06c-2.18-.25-1.9-1.75-1.65-3.24C351.72,251.33,352.18,250.56,353.29,251.08Z"/><path class="cls-1" d="M39.3,153.7c-1.57,4.25-5.42,1.21-7.14-1C34.24,151.94,38.07,150.39,39.3,153.7Z"/><path class="cls-1" d="M363.32,257.7c1.05.14.87.92,1.64,1.2-.33,1.67-1.49,1.74-3,1.05C362.08,258.58,362.86,258.46,363.32,257.7Z"/><path class="cls-1" d="M351.91,255.36c-1.13.8-2,2-3.85,1.46-.47-.78.54-2.32-1.25-2.43C348.73,253.29,349.83,254.39,351.91,255.36Z"/><path class="cls-1" d="M357,256.33c1.2.84-1,3.22-2.63,1.86C354.47,256.05,356.37,257.43,357,256.33Z"/><path class="cls-1" d="M69.92,165.62c-.82,2.69-4.08-.54-4.29-1.39C66.27,162.4,69.07,164.62,69.92,165.62Z"/><path class="cls-1" d="M358.64,257.54c1.05.14.87.91,1.64,1.2-.77,1.15-1.7,2-3.65.85C357.24,258.79,358,258.34,358.64,257.54Z"/><path class="cls-1" d="M73.79,166.19c-.42,1.85-2,1.44-2.41,3.28-.49-.6-.18-1.61-1.44-1.82C71.07,166.86,72,165.65,73.79,166.19Z"/><path class="cls-1" d="M73,168.64c2.3,2,.23,4.52-2.61,3.89C71.28,169.43,73.36,172.45,73,168.64Z"/><path class="cls-1" d="M52,162.53c2.15-.08,1.18,1.44,2,2-1.28.17-2.2,1-3.65.85A4.18,4.18,0,0,1,52,162.53Z"/><path class="cls-1" d="M353.17,259.82c.74.48.62,1.39,1.44,1.82-.82.73-1.54,1.65-3,1.05a3.62,3.62,0,0,1,.18-2.65C352.43,260.37,352.88,260.26,353.17,259.82Z"/><path class="cls-1" d="M89.35,176.63c-1,1.1-2.41,1.28-4.27.65C85.44,175,87.5,176,89.35,176.63Z"/><path class="cls-1" d="M67.53,170.93c.55,2.36-1.15,4.52-1.78,5.51-1.86-2,.21-2.8-1.87-4.66C64.78,170.88,65.7,170,67.53,170.93Z"/><path class="cls-1" d="M347.9,261.5c2.17.42,3.43,1.31,2.27,3.44-1.57-1.07-1.87.35-3.26-.38Z"/><path class="cls-1" d="M56,173.27c-.36-2.23-2.66,0-3.45.24-.93-3.19,4.17-3.13,6.89-2.51.55,3.35-2.71,4.46-5.86,3.52C53.28,172,55.72,174.82,56,173.27Z"/><path class="cls-1" d="M72.66,176c-.6,1.16-.49,1.95.63,2.23-.27,1.12-1.16,1.05-1.4,2.25-.44-1.48-.31-3.25-2.07-4A2.81,2.81,0,0,1,72.66,176Z"/><path class="cls-1" d="M82.08,182.39c1,.15.86.92,1.64,1.21-.1,1.81-1.62.84-2,2.05C80.16,185.08,81,182.9,82.08,182.39Z"/><path class="cls-1" d="M79.85,183c-2.21,1.09-.25,2.29-.58,3.87-.66.2-1.33.39-1.22-.39a4.47,4.47,0,0,0-1.82,1.44C76.14,187.24,76.13,181.11,79.85,183Z"/><path class="cls-1" d="M52.1,174.73c1,.15.87.92,1.64,1.21-.15,2-2.06.63-2.21,2.67A2.6,2.6,0,0,1,52.1,174.73Z"/><path class="cls-1" d="M42.94,173.8c1.36.16,1.49.95,2.25,1.41-.58,1.19-2,.66-2.63,1.85C40.69,175.84,42.63,175.82,42.94,173.8Z"/><path class="cls-1" d="M74.77,184.08c.43,3.7-4.83,2.46-7.31,1.7C68.68,181.45,72.49,187.17,74.77,184.08Z"/><path class="cls-1" d="M352.33,279.16c-1.25-.78-1.25.89-2.23.63C344.8,277.05,353.56,273.54,352.33,279.16Z"/><path class="cls-1" d="M69.93,188.61c-.82.72-1.54,1.64-3,1C66.14,187.13,68.72,186.75,69.93,188.61Z"/><path class="cls-1" d="M328.87,272.26c1.58.89,1.53,2.62,3.69,3.22C330.76,277.84,327.57,274.6,328.87,272.26Z"/><path class="cls-1" d="M72.18,190c.82,2.32-1.91,6.21-4.43,5.33-1.14-1-.69-2.71.16-4.68C69.54,190.84,71.6,191.87,72.18,190Z"/><path class="cls-1" d="M343.17,278.23c.5.93,1.94,1.39,3.48,1.8-.36,2.3-2.42,1.27-4.27.65C342.64,279.86,342.91,279,343.17,278.23Z"/><path class="cls-1" d="M333.39,277.1c1.7,1.94.42,8.38-3.59,6.95C329.32,281.87,332.28,279.32,333.39,277.1Z"/><path class="cls-1" d="M335.45,279.11c2,.34,1.53,1.94.84,3.66C334.55,282.3,335,280.7,335.45,279.11Z"/><path class="cls-1" d="M79,198.29a12,12,0,0,0-2.19,4.7c-1.84-1.78-1-1.74.37-3.26-2.63-.83-3.1,2.59-6.3.67.77-1.83,2.22-2.33,3.22-3.7C76.59,197.67,77.29,196.64,79,198.29Z"/><path class="cls-1" d="M80.4,198.07l1.83.6c-.26,1-1,2.23-.18,2.64-.62,1.38-2.8-.52-3.06-1C79.27,199.2,80.16,199.27,80.4,198.07Z"/><path class="cls-1" d="M312.87,279.93c-1.53-.56-.71-2.75.38-3.26-.19-.75-1.2-1.08-.63-2.23C317.06,275.28,315.32,279.4,312.87,279.93Z"/><path class="cls-1" d="M68,196.76c2.27.8-.73,2.4.44,2.85-.37.61-1.36,0-1.63.82C65.33,198.88,66.78,197.91,68,196.76Z"/><path class="cls-1" d="M87.56,203.09c.43.8.85,1.61,1.24,2.43-.22,2.48-3.44,1.28-4.06,0C84.82,203.07,86.66,204,87.56,203.09Z"/><path class="cls-1" d="M345.28,286.35c.11,1.53,1.69,3.67-.16,4.68-1.12-.28-1.05-1.17-2.25-1.41C343.16,287.53,344.05,286.6,345.28,286.35Z"/><path class="cls-1" d="M372.25,299.11a1.37,1.37,0,1,1-2.44-.79C371.35,297.7,370.56,298.63,372.25,299.11Z"/><path class="cls-1" d="M51.48,195.49c1.76.46.83,2.3,2.47,2.83-.82.72-1.54,1.64-3,1,.17-.6-.6-.72-1-1A4.18,4.18,0,0,0,51.48,195.49Z"/><path class="cls-1" d="M312.26,279.74c1.54,1.46-2.64,2.67.24,3.45-.17.84-2.8,1.61-1.41,2.25a2.81,2.81,0,0,1-2.84.43c.1-1.66,4.16-3.29,1.38-4.28C310,279.93,310.71,279,312.26,279.74Z"/><path class="cls-1" d="M333.49,287.27c2.68-2,2.66,5.74-.57,3.87C331.44,289.57,334.91,288.3,333.49,287.27Z"/><path class="cls-1" d="M341,289c1.5.94.37,4.77-.36,5.29-2-.15-.06-2.35-2.66-2.21C338.81,290.68,340.3,290.59,341,289Z"/><path class="cls-1" d="M63.76,203.52l2.45.79a4.18,4.18,0,0,1-1.6,2.86C62.55,206.2,62.43,205,63.76,203.52Z"/><path class="cls-1" d="M77.86,210.1c-1.67,1-2.11.4-4.46,1.26.26-.82.52-1.63.79-2.45C76.49,209.59,76.15,208.79,77.86,210.1Z"/><path class="cls-1" d="M83,213.1c.5.94,2,1.39,3.48,1.8,0,1.89-1.38,1.31-1.6,2.86-2.61-2.1-2.91-.68-5.29-.36C80.53,215.65,81.89,214.64,83,213.1Z"/><path class="cls-1" d="M325.39,291.41c1.95.54,1.6,2.25,1.46,3.85C326.05,294.14,324.85,293.22,325.39,291.41Z"/><path class="cls-1" d="M80.33,212.92c1.29,1.3-2.48,4.11-3.24,1.66C77.66,213,79.76,214.48,80.33,212.92Z"/><path class="cls-1" d="M281.73,278c1.78-.3,2,2.62,3.06,1C287.23,281.05,279.89,280.08,281.73,278Z"/><path class="cls-1" d="M342.75,298.37c-.81,1.34-3.19,1.78-4.07,0C339.49,297.07,341.87,296.64,342.75,298.37Z"/><path class="cls-1" d="M344,298.77c1.29.87,2.22,1.93,1.46,3.85C343.87,301.88,343.88,300.34,344,298.77Z"/><path class="cls-1" d="M13.82,192.79c-.2.61-.4,1.22-.59,1.84-1.37-.16-1.49-.95-2.25-1.41C11.47,192.19,12.48,192.17,13.82,192.79Z"/><path class="cls-1" d="M370.1,307.88c2.88.4,3.72,1.84,2.68,4.25C370.06,311.65,368.56,310.54,370.1,307.88Z"/><path class="cls-1" d="M71.58,212.8c.66,1.19.51,2.8-.16,4.68-1.84-1-2.26.54-3.06-1C68.83,214.09,70.5,214,71.58,212.8Z"/><path class="cls-1" d="M366.44,308.73c-.48,2-1.68,2.71-3.43,2.27a1.93,1.93,0,0,0-.83-1.62A2.31,2.31,0,0,1,366.44,308.73Z"/><path class="cls-1" d="M88.52,219c1.25,2.8,4.31,2.11,2.51,6.89-.5-.94-1.94-1.39-3.48-1.79C87.33,222.08,87,220.53,88.52,219Z"/><path class="cls-1" d="M324.2,295.09l1.84.59c-.27.81-.53,1.63-.79,2.45-1.78-1.25-2.95,1.93-4.68-.16C321.35,296.17,323.48,297,324.2,295.09Z"/><path class="cls-1" d="M61.39,210.86c2.13.93,2.65,1.89,4.9,1.58a5.33,5.33,0,0,0-1.39,4.29,3.63,3.63,0,0,0-2.25-1.41c1.46-3.46-.24-2.14-2-2C60.86,212.49,61.12,211.67,61.39,210.86Z"/><path class="cls-1" d="M85.68,219.38l-1,3.06c-.68-.33-1.14-.21-1.42.22,0-1.53-2.24-1.92-3.08-3C81.42,216.93,83.54,218.18,85.68,219.38Z"/><path class="cls-1" d="M320.35,296.55c-.34,1.67-1.5,1.73-3,1C317.89,296,319.66,295.1,320.35,296.55Z"/><path class="cls-1" d="M334.45,303.13c-1.91.8-.34,2.89-1.8,3.47-1.81-.09-.84-1.61-2-2C332.09,304.51,332.71,302.72,334.45,303.13Z"/><path class="cls-1" d="M73.89,220.31c2.66.61-.32,2.82-.58,3.87C72,223.66,73.89,221.5,73.89,220.31Z"/><path class="cls-1" d="M290.65,296.42c-1.9-.74-3.63-.39-6.11.05-.19-1.26-1.2-2.11,0-4.07,3,.61,4.75.28,5.27-1.67C291.49,291.9,290.89,294.25,290.65,296.42Z"/><path class="cls-1" d="M76.15,223.74c2.59.39,1.95,2.42,1.27,4.47C77.09,226.67,75.69,225.69,76.15,223.74Z"/><path class="cls-1" d="M82.89,225.92c1.43,1,1.5,2.64.45,4.88-1.06.59-2.85-.26-4.48-.77C80.07,228.39,83,230.07,82.89,225.92Z"/><path class="cls-1" d="M333.7,309.64c-1.54.77-1.56-.42-3.06-1C331.4,307.09,334.82,306.84,333.7,309.64Z"/><path class="cls-1" d="M320.43,304.68c-.41,1.54-.86,3-1.8,3.48-1.67-1.47-2-.8-4.29-1.39C316.26,304.88,317.46,302,320.43,304.68Z"/><path class="cls-1" d="M302.28,300.17c1.84-1.56,2,2,.85,3.66C299.77,303.13,303.55,301.18,302.28,300.17Z"/><path class="cls-1" d="M329.21,308.87c-.75,2.58-2.27,2.95-3.85,1.46.21-1.09,1.56-1.25.6-1.83C327.33,307.37,327.75,308.05,329.21,308.87Z"/><path class="cls-1" d="M100.27,234.91l1.83.6-1,3.06C99.11,238.23,99.58,236.63,100.27,234.91Z"/><path class="cls-1" d="M298.61,299c3,1.67,1.32,6-1.15,7.74C295.33,304.78,299.43,302.08,298.61,299Z"/><path class="cls-1" d="M61.5,223.07a4.46,4.46,0,0,1,.63,2.23c-1.27,1.17-2.44,2.55-4.66,1.87A5.58,5.58,0,0,1,61.5,223.07Z"/><path class="cls-1" d="M89.48,234.81c.73.4.23,1.42-.39,1.22-.18.6.59.72,1,1-.67,1.36-1.32,2.74-3.24,1.66C88.16,238.21,88.2,235.3,89.48,234.81Z"/><path class="cls-1" d="M64.8,227.51c1.17.61,1.34,2.75,0,4.07C63.49,230.25,63.61,229,64.8,227.51Z"/><path class="cls-1" d="M312.11,307.4c.28,1.68-.07,4.41-3,3.08C309.12,307.55,311.26,308.74,312.11,307.4Z"/><path class="cls-1" d="M85.22,235.46c1.69,3.69-4.44.6-4.23,4.72-.91-.9-1-2.21-3.28-2.41a4.16,4.16,0,0,0,1.6-2.87C81.54,235.6,84,236.81,85.22,235.46Z"/><path class="cls-1" d="M68.49,230.73c1.92.55,3.31,1.38,3.89,2.61-1.42,2.33-3.15,1.84-4.66,1.88C65.94,234.63,67.39,231.29,68.49,230.73Z"/><path class="cls-1" d="M301.52,306.69a1.77,1.77,0,0,1,.64,2.23c-2-1.63-1.72,1.3-3.46.24.2-.62.4-1.23.59-1.84C300.46,307.92,301.25,307.81,301.52,306.69Z"/><path class="cls-1" d="M90.59,244c-2.13-.1-1.59-1.57-2.67-2.21C89.11,239.62,91.46,242.07,90.59,244Z"/><path class="cls-1" d="M72.26,242.09c-.32-.88-1.83-.17-.43-2.85,2,.34,1.08,2.17,2.46,2.83-.49,1-1.5,1.06-2.84.44C71.51,242,71.88,242,72.26,242.09Z"/><path class="cls-1" d="M304.45,314.39c-.42,1.85-2,1.43-2.42,3.28-.8-.61-1.25-1.41-2-2a3.06,3.06,0,0,0,1.21-1.63C302.76,315.08,303.05,313.67,304.45,314.39Z"/><path class="cls-1" d="M81.22,243.63c1.36.33-.42,2.26-.37,3.26-2.14,1.55-3.65-1.87-5.49.26a2.85,2.85,0,0,1-.44-2.85,1.74,1.74,0,0,0,2.23-.63A2.05,2.05,0,0,0,81.22,243.63Z"/><path class="cls-1" d="M295.48,312.85c1.12.27,1,1.16,2.25,1.4-.64,1.73-1.7,2.66-3.85,1.46A4.18,4.18,0,0,1,295.48,312.85Z"/><path class="cls-1" d="M310,318.21l1.84.59c-.26.82-.53,1.63-.79,2.45C310.3,320.42,308.8,320,310,318.21Z"/><path class="cls-1" d="M88,247.84l3.06,1C90.75,250.53,86,250.52,88,247.84Z"/><path class="cls-1" d="M270,308c-.32.93-5-.12-3.48-1.8C268.2,305.3,268.9,307.16,270,308Z"/><path class="cls-1" d="M71.86,243.31l1.84.6c-.2.61-.4,1.22-.59,1.83-1.65-.59-1.57.63-2.45-.79A3,3,0,0,0,71.86,243.31Z"/><path class="cls-1" d="M84.74,249.5c-.16,2-1.64,1.46-1.8,3.48-.59-.21-.23-.91-.22-1.43-1.74-1.06-1.72,1.31-3.46.24C79.92,248.85,82.55,245.47,84.74,249.5Z"/><path class="cls-1" d="M289.39,314.94c2.56,1.94.19,2.92-1.79,3.47-.74-.81-.25-2.25-.24-3.45C288.21,315.29,289.06,315.62,289.39,314.94Z"/><path class="cls-1" d="M62.5,243c1.23-.44,2.47.19,3.68,1.19C64.36,246.5,63.59,244.69,62.5,243Z"/><path class="cls-1" d="M283.51,316.42c-4.49.12-10.14-1.2-14.46-1.29-.54,1.3-.12,2.11,1.25,2.43-1,1.61-5.35,0-5.91-.56.35-1.65.78-3.13,2.63-1.85,0-1.35-1.11-2.16-2.47-2.83C269.11,304.92,277.86,315.3,283.51,316.42Z"/><path class="cls-1" d="M101.68,255.65c1.89,3.89,3.89,2,3.93,6.68-1.78-3.34-3,0-5.49.25-.14,1.26,2.21,1.25,1,3-2.27-.54-1.81-2.47-3.69-3.22C98.88,260.15,100.29,257.93,101.68,255.65Z"/><path class="cls-1" d="M314.71,324.47c-1.93,1.24-1.67,3.41-4.46,1.26.2-.61.39-1.22.59-1.84C312.28,324.37,313,323.42,314.71,324.47Z"/><path class="cls-1" d="M331,330.42c1.33.51-.58,2.68-.57,3.87-1.4-.73-1.7.69-3.26-.37a4.14,4.14,0,0,1,.38-3.26C328.3,329.72,330.48,331.64,331,330.42Z"/><path class="cls-1" d="M164.34,277.24l1.83.6c-1.17.61-1.09,1.79.64,2.23C165.49,281.36,162.68,279.16,164.34,277.24Z"/><path class="cls-1" d="M256.16,306.91l2.45.79c.66,1.59-.84,1.05-.18,2.64,2.6.69,2.57,1.93,4.9,1.59-.76,2.5-3.15,1.82-5.28,1.67C258.13,311,255.43,309.83,256.16,306.91Z"/><path class="cls-1" d="M89.67,255.15c3.74,1.1,1,7.14-2.8,4.5C87.59,257.74,89.13,257.41,89.67,255.15Z"/><path class="cls-1" d="M317.4,328.72c.79,1.12,2,2,1.46,3.85C316.62,332.12,316.16,329.41,317.4,328.72Z"/><path class="cls-1" d="M122.35,269.09c-2.62,1.55-1.63,2-2.61,3.89-.5-1.11-2.77-1.31-3.27-2.41-1.74-1.07-1.72,1.3-3.46.23-1.07,2.08,3.65,1.2,2.27,3.44-3-1.29-3.12-.89-4.5-2.8.59-.5,1.61-.19,1.81-1.45-.52-2.11-4.67-2.37-2.9-5.67,2.25,1.4,2.44-1.23,4.68.16-.25,2.5-2.06,1.95-3.43,2.27,2.82,2.66,5.27,2.23,8.57,2.77.38-1.22-1.42-1.31-.44-2.84C120.47,266,121.88,267.84,122.35,269.09Z"/><path class="cls-1" d="M147.65,276.58c2.15-.07,1.18,1.45,2,2C149,279.87,145.85,278.26,147.65,276.58Z"/><path class="cls-1" d="M96,260.59c0,1.91-5,1.73-3.87-.58C93.6,260.49,94.3,259.54,96,260.59Z"/><path class="cls-1" d="M244,309.05c4.23-1.12,4.15,4.35,7,5.64-3.15,2.06.37,5.92-4.42,5.33-1.07,1.56.35,1.86-.38,3.25-1.43.88-3.84-.18-4.25,2.69a7.5,7.5,0,0,1-.86-5.69c3.63.91,1.51-3.9,4.85-2.48-3.34-3.25,2.26-5.18-2.91-7.71C243.5,309.62,245,309.7,244,309.05Z"/><path class="cls-1" d="M300.49,326.64c1.7,1.34,2.81.48,4.7,2.19a4.18,4.18,0,0,1-1.6,2.86c-2.13-.78-2.17-2.63-4.31-3.42A3,3,0,0,0,300.49,326.64Z"/><path class="cls-1" d="M259.69,314.81c-.78,3.14-3.53,2.41-4.84,4.52a14.89,14.89,0,0,1-3.28-2.41C252.93,312.54,256.29,312.7,259.69,314.81Z"/><path class="cls-1" d="M271.52,318c2.38.83.51,3.83.87,5.69-.61-1.16-2.08-1.66-2.23.63l-3.06-1C268.27,320,271.17,320.39,271.52,318Z"/><path class="cls-1" d="M87.89,260.66c.62.37,0,1.35.83,1.62-.51,1.33-2.68-.58-3.87-.57C85.14,259.93,87.32,261.87,87.89,260.66Z"/><path class="cls-1" d="M104,267.23l1.83.59c-1.52.79-.56,1.51-1,3.06C102.94,270.5,104.25,268.47,104,267.23Z"/><path class="cls-1" d="M257,327.45c.13-1.6-1.87-2.11-3.08-3,2.93-1.76,6.12-2.57,5-7.16.63,2.84,4.59,1.16,4.92,3.61,0,2-1.72.65-2.84.44-1.66,3.78,2.52,3.17,2.87,3.63-1.09,2.27-5.55,1.89-4.42,5.33,1.75-2.18,2-.86,3.87.57-.91.89-2.35.74-4.07,0-1.45,2.79,2,3.08.06,6.11-1.57-1.07-1.87.35-3.26-.38-.22-2.08.38-3.31,2-4.09-1.52-1.08-3.79-1-6.93-1.56,2.08-3.28-2.48-3.16-.66-6.3C252.84,325.83,253.72,329.6,257,327.45Z"/><path class="cls-1" d="M276,322.79c1.94.72,2.25,2.26,1.26,4.47C275.36,326.11,274.41,324.45,276,322.79Z"/><path class="cls-1" d="M325.63,338.81c1,.15.86.92,1.64,1.21-.34,1.67-1.5,1.73-3,1C324.38,339.7,325.17,339.58,325.63,338.81Z"/><path class="cls-1" d="M98.12,266.67c1.43-1.51,1.76,1.77,3.48,1.8-.59,1.19-1.76,1.23-2.63,1.85C97.67,269.62,100.15,267,98.12,266.67Z"/><path class="cls-1" d="M118.93,273.39c1.37.16,1.49.95,2.26,1.41-.65,1.73-1.71,2.66-3.86,1.46A4.2,4.2,0,0,1,118.93,273.39Z"/><path class="cls-1" d="M142.81,281.1a4.18,4.18,0,0,0,2.86,1.61C145.34,284.35,140.84,283.49,142.81,281.1Z"/><path class="cls-1" d="M301.36,332.32c-.23,1.56-1.55,1-1.6,2.87C296.65,334.38,299.6,332,301.36,332.32Z"/><path class="cls-1" d="M141.82,284.17c-1.17,3.9-4.08-1.82-5.69.86-2-.48-1.15-2.47-2.27-3.44C136.27,278.6,141.07,281.12,141.82,284.17Z"/><path class="cls-1" d="M148.73,283.7c1.53,1.41,1.22,3.17-.57,3.87-.42-1.15-1.29-2.07-.85-3.66C148,284.24,148.44,284.13,148.73,283.7Z"/><path class="cls-1" d="M214.68,309.73c-1.14-.94-1.67-2.2-.64-4.26,2,1.17,2.64-.15,4.48.77A24.15,24.15,0,0,0,214.68,309.73Z"/><path class="cls-1" d="M47.53,251.68c1,.14.86.92,1.64,1.2-.34,2-1.94,1.54-3.66.85C45.91,252.52,47.43,253.49,47.53,251.68Z"/><path class="cls-1" d="M278.73,327c1.54.92,1.85,2.46,1.26,4.46C277.09,331.28,277.67,327.74,278.73,327Z"/><path class="cls-1" d="M126.1,278.41c1.55.4,1.59,1.57,2.67,2.22-1.43.53-1.94,2.86-4.06,2.07C124.44,280.64,124.18,279.17,126.1,278.41Z"/><path class="cls-1" d="M234.45,313.41c1.05.15.87.92,1.64,1.21-.09,1.81-1.61.84-2,2.05C232.54,316.11,233.37,313.92,234.45,313.41Z"/><path class="cls-1" d="M252.82,319.35c-.11,2.12-1.58,1.58-2.22,2.66-1-.49-1-1.5-.43-2.84C251.25,319.6,251.7,318.84,252.82,319.35Z"/><path class="cls-1" d="M7.76,240.86l2.45.79c-.11,2.12-1.29,2.15-2.22,2.66C6.68,243.79,7.18,242.35,7.76,240.86Z"/><path class="cls-1" d="M113.26,276.29a4.21,4.21,0,0,0,2.87,1.61c-.27,1-1,2.23-.18,2.64-.52,1.33-2.68-.58-3.87-.57C112.47,278.74,112.87,277.52,113.26,276.29Z"/><path class="cls-1" d="M236.92,316.24c1.06,2.38.35,2.46,3.3,4.45-2.81.94-1.74,4.6.86,5.68a4.12,4.12,0,0,1-1.6,2.86c-1.1-.45.3-2.19-.43-2.84-.53,0-.81.42-1.42.22-.47,1.94.93,2.93,1.26,4.46-.82.74-2,.82-3.46.24.33-4.25-1.72-7.29-2.54-11,1.74,2.09,2-.59,2.21-2.67C236.32,318.39,236.55,317.18,236.92,316.24Z"/><path class="cls-1" d="M208,307.56c.84.42-.37,1.89.63,2.23-1.38,1.13-1.8.45-3.26-.38C205.42,307.27,207.32,308.66,208,307.56Z"/><path class="cls-1" d="M138,285.63c1.27.94,1.57,5.56-1.38,4.28C137.85,287.85,136.55,286.3,138,285.63Z"/><path class="cls-1" d="M349.16,353.85a1.38,1.38,0,1,1-.79,2.45C347.74,354.75,348.68,355.54,349.16,353.85Z"/><path class="cls-1" d="M58.8,260.73c1.38.83,3,1.54,2.27,3.43-2.17-1.57-1.9,1.62-4.07,0C57.45,262.76,58.64,262.74,58.8,260.73Z"/><path class="cls-1" d="M132.67,285.27c-2.65,2.88.48,2.76-.55,5.9-2.1-.28-2.71-1.33-4.09-2,1.12-.57,1.78-3.5,0-4.07C129.31,283.63,131.16,283.9,132.67,285.27Z"/><path class="cls-1" d="M143.89,288.21c1.91.78.12,4.43-1.8,3.48.39,1.51,2.61,2.07,1.26,4.46-2.23-1.06-2-3.42-3.9-4.64C140.54,289.66,142.5,289.5,143.89,288.21Z"/><path class="cls-1" d="M94.52,273.62c2,.34,2.56,1.41,1.66,3.24C95.5,275.84,93.62,275.45,94.52,273.62Z"/><path class="cls-1" d="M127,284.1l-1,3.06c-1.76.23-3.89-.28-5.91-.55.18-.85,2.8-1.62,1.41-2.25A10,10,0,0,1,127,284.1Z"/><path class="cls-1" d="M145.55,291.45c1.93.72,2.24,2.26,1.26,4.47C144.23,295.54,144.87,293.5,145.55,291.45Z"/><path class="cls-1" d="M187.81,307.13a26,26,0,0,0-4.25,2.69C180.59,307.3,186.34,304.06,187.81,307.13Z"/><path class="cls-1" d="M246.77,325.51c1.77.69,3.57,2.71,1.46,3.85C246.28,328.82,246.64,327.11,246.77,325.51Z"/><path class="cls-1" d="M98.43,278.26c1.91.56,1.23,2.44.65,4.27-1.12-.28-1-1.17-2.25-1.4-.75.19-1.09,1.2-2.23.63l1-3.06A2.81,2.81,0,0,0,98.43,278.26Z"/><path class="cls-1" d="M90.89,276.5c.49.94,1.94,1.39,3.47,1.8.14,2.06-.5,2.13-1.8,3.47C89.33,280.73,89.22,278.88,90.89,276.5Z"/><path class="cls-1" d="M269,334.05c1.37.15,1.49.94,2.26,1.4-.34,1.67-1.5,1.74-3,1.05C269.65,335.61,268.43,335.7,269,334.05Z"/><path class="cls-1" d="M243.12,326.36c2.43.45,1.21,2.78,2.07,4-1.56.63-3,1.49-5.07,1.07C241.07,329.67,241.9,327.64,243.12,326.36Z"/><path class="cls-1" d="M63.56,269c2.66.2,1.28,4.46-1,3.06A3.26,3.26,0,0,1,63.56,269Z"/><path class="cls-1" d="M121.71,287.81c.73,1.6,1.46,5,.06,6.1a4.83,4.83,0,0,1-2.49-4.86C120.1,288.66,120.91,288.24,121.71,287.81Z"/><path class="cls-1" d="M171.1,304.44c.56,1.73.87,2.8,3.28,2.41-1.68,2-4,1.16-3.62,4.92-2.57-.39.7-3.76-2.07-4C169.79,307.21,170,305,171.1,304.44Z"/><path class="cls-1" d="M111.52,285.87c2.41.88,4.82,3.68,2.29,5.47C112.63,289.74,111,288.36,111.52,285.87Z"/><path class="cls-1" d="M129.08,292.22a3.62,3.62,0,0,0,2.25,1.4c-.57,3.21-3.38,2.05-3.81,5.53l-2.45-.79c.26-.82.52-1.63.79-2.45C130.38,297.37,127.08,293.63,129.08,292.22Z"/><path class="cls-1" d="M179.08,309.05c.8-.95,1.14.27,1.83.59-.79,2.27-1.25,1.52-1.18,3.67C177.15,312.56,179.93,309.43,179.08,309.05Z"/><path class="cls-1" d="M229.89,325.46l1.83.59-1,3.06C229,328.65,229.45,327,229.89,325.46Z"/><path class="cls-1" d="M285,343.26l1.84.59a3.16,3.16,0,0,1-1.19,3.67C283.33,346.63,283.51,344.83,285,343.26Z"/><path class="cls-1" d="M139.09,296.81c5.12.44,3.47,4.35,5.35,6.46-1.39,2.18-2.14-.59-4.49-.78,0-1.4.05-5.11-1.85-2.62C136.47,298.77,139.39,298.58,139.09,296.81Z"/><path class="cls-1" d="M220.92,323.92c.63,1.54-.31.76-.79,2.45,1.54.42,2.26-.54,3.06,1,.89.08,1-1.37,1.4-2.25l2.45.79c-2.07,2-2.64,3.68-3.81,5.53-.72-.82-2.22-1.25-1-3-2.78.74-4.12-1.89-6.93-1.56,1.72-.23,3.44-1.72,1.8-3.48C218.32,321.3,219,323.55,220.92,323.92Z"/><path class="cls-1" d="M200.72,317.39a3.27,3.27,0,0,1,1.24,2.43c-.49,3.05-7.6,5.18-6.1.06,1.44,2.26,2.44,1.59,4.48.77A4.23,4.23,0,0,1,200.72,317.39Z"/><path class="cls-1" d="M196.85,316.82c2,.15.63,2.05,2.66,2.21-.47.73-1.39.61-1.82,1.44C197.53,319.19,196.66,318.27,196.85,316.82Z"/><path class="cls-1" d="M205,320.81q3,.49,1.66,3.24c-3-1.95-3,2.17-6.1.05C200.51,320,204.83,324.44,205,320.81Z"/><path class="cls-1" d="M250.94,335.64c1.78,1,.27,1.89-.38,3.26-.73-.82-1.65-1.55-1.05-3C250.19,336.19,250.64,336.07,250.94,335.64Z"/><path class="cls-1" d="M73.82,279.1l1.84.59a3.17,3.17,0,0,1-1.19,3.68C72.17,282.47,72.35,280.67,73.82,279.1Z"/><path class="cls-1" d="M242.17,333.48c-.5,2.37-1.65,3.44-3.64,2.89,1.07-1.57-.35-1.87.38-3.26C240.48,334.17,240.77,332.76,242.17,333.48Z"/><path class="cls-1" d="M274,343.77c-.82,1-.13,7.4-3.4,6.34.91-2.64,2.59-3.64.36-5.3C271.24,343,273.42,345,274,343.77Z"/><path class="cls-1" d="M279.51,345.55c1.09,3.08-6.27,5.3-4.07,0C277.18,346.32,277.77,344.81,279.51,345.55Z"/><path class="cls-1" d="M100,288.22c1.14,1.28,3.07,2.17,1.87,4.66-.68-.33-1.13-.22-1.42.22A6,6,0,0,1,100,288.22Z"/><path class="cls-1" d="M111.38,292.59c-1.29,2.49-6.37,2.82-5.43,6.35-2,1.5-1.67-2.51-1.46-3.85C107,294.21,108.05,289.91,111.38,292.59Z"/><path class="cls-1" d="M232.18,330.93c.55.06.5.43.41.81,0,1.85,2.19-.24,3.67,1.19-.43,1.07.33,1.53-.18,2.65-1.51.62-3.9-1.41-5.31-2.4C230.92,331.82,231.71,331.7,232.18,330.93Z"/><path class="cls-1" d="M213.61,325.61c1,.5,1.06,1.5.43,2.84-1.81-.09-.83-1.61-2-2C212.36,325.82,213.34,326.42,213.61,325.61Z"/><path class="cls-1" d="M151.58,306.25c1.19,1.12-1,3.92-2.82,2.47,1.41-.89.2-.8.79-2.45a3,3,0,0,0,1.64,1.2Z"/><path class="cls-1" d="M252.59,338.88c2.16-.2,2.81,2.91,4.29,1.38.27,1.51-.56,3.05-1.59,4.9-1.45-1.47.28-4.57-3.9-4.64A3.07,3.07,0,0,0,252.59,338.88Z"/><path class="cls-1" d="M66.3,279.37c2.26-.13-.54,3.26-1.19,3.68C62.38,282.25,65.6,279.68,66.3,279.37Z"/><path class="cls-1" d="M136.7,302.12l1.83.59c-.26.81-.53,1.63-.79,2.45C135.5,305.11,136,303.66,136.7,302.12Z"/><path class="cls-1" d="M139.56,303.72c1.36.15,1.48.94,2.25,1.4-.82.72-1.25,2.21-3,1.05C139,305.35,139.3,304.53,139.56,303.72Z"/><path class="cls-1" d="M145.7,307.73c1.12.28,1.05,1.17,2.25,1.4-1.11.5-1.08,3.22-3.24,1.66Z"/><path class="cls-1" d="M199.37,325.74c-.63,3.43-3.69,2.11-5.25,3.71-1.19-.58-1.24-1.75-1.86-2.62C194.14,324.67,196.65,323.66,199.37,325.74Z"/><path class="cls-1" d="M211.81,329.09c1.91.55,1.23,2.44.65,4.26-2.72-2.32-1.56,2.94-3.85,1.46C210,332.72,208.74,330.84,211.81,329.09Z"/><path class="cls-1" d="M249.39,344.61c-2.49-.09-1.56-1.93-2.47-2.83C248.55,340.15,251.27,341.75,249.39,344.61Z"/><path class="cls-1" d="M66.34,283.44c.45-.77,1.69,0,2.64.18-.48,2.05-1.68,2.71-3.43,2.27C65.33,284.56,68,284.44,66.34,283.44Z"/><path class="cls-1" d="M114.89,298.45c-.63,1.09-1.07,2.57-2.62,1.86C111.5,298.9,113.23,298,114.89,298.45Z"/><path class="cls-1" d="M228.75,335.23c1.66.35,2.57,1.08,1.86,2.63C229,337.52,228.05,336.79,228.75,335.23Z"/><path class="cls-1" d="M117.14,299.86c.32.3,1.87,2.28,2.45.79,1,1.21.49,3.15.45,4.87-2.23-.22-.28-2.58-1.65-3.23-1,0,0,.86-.6,1.83-.26-.61-3.13-2.77-3.25-.37C112.19,302.07,116.29,301.26,117.14,299.86Z"/><path class="cls-1" d="M176.33,319.65c2,1,.15,3.59-2,2.05C174.92,320.9,175.72,320.46,176.33,319.65Z"/><path class="cls-1" d="M277.33,352.28c.73.82,1.65,1.54,1.05,3a3.62,3.62,0,0,1-2.65-.18A4.2,4.2,0,0,1,277.33,352.28Z"/><path class="cls-1" d="M303.46,361.4a3,3,0,0,0,1.64,1.2,3,3,0,0,0-1.21,1.64C301.89,363.91,302.2,362,303.46,361.4Z"/><path class="cls-1" d="M206.54,330.76l1.84.6c-.27.81-.53,1.63-.8,2.45C205.34,333.76,205.85,332.31,206.54,330.76Z"/><path class="cls-1" d="M271.43,351.72l1.83.6c-.26.81-.52,1.63-.79,2.45C270.8,354.43,271.31,353,271.43,351.72Z"/><path class="cls-1" d="M99.21,296.77c1.68.33,1.17,1.79,1.05,3a3.62,3.62,0,0,1-2.65-.18C97.67,297.74,99,298.32,99.21,296.77Z"/><path class="cls-1" d="M240,342.25l1.84.59c-.16,1.37-.95,1.49-1.41,2.26C239.41,344.6,239.39,343.59,240,342.25Z"/><path class="cls-1" d="M252.87,346.4q3.33.86,2.07,4.05A3.06,3.06,0,0,1,252.87,346.4Z"/><path class="cls-1" d="M160.85,317.35c2.36.36-.07,5.79-2,4.09C158,319.7,159.64,317.92,160.85,317.35Z"/><path class="cls-1" d="M169.22,320.73c.28,3-4.41,1.28-2.61,3.89-2.38,1.19-2.88-2.93-4.11-4C164.2,319.79,167.47,318.3,169.22,320.73Z"/><path class="cls-1" d="M180.43,323.68c3.13,1.47,3.08,4.56,2.92,7.71-2.48,1.09-3.69-.19-4.7-2.2C182.25,328.86,180.66,326.09,180.43,323.68Z"/><path class="cls-1" d="M222.06,337.13a4.53,4.53,0,0,1,1.26,4.46c-1.3,1.24-1.49-1.7-2.64-.18-.89-.9-.74-2.35,0-4.07C221.32,337.67,221.77,337.56,222.06,337.13Z"/><path class="cls-1" d="M138.61,310.85c-.34,1.67-1.5,1.73-3,1C135.9,310.22,137.06,310.16,138.61,310.85Z"/><path class="cls-1" d="M226.76,339.32c1.17.9,2.94,2.59.85,3.66C225.6,342.64,226.07,341,226.76,339.32Z"/><path class="cls-1" d="M248.18,346.24c3.72.66,2.93,3.62,4.33,5.46-1,.64-2.71,0-3.24,1.65a3.07,3.07,0,0,0-1.64-1.2C248,350.09,247.53,348.45,248.18,346.24Z"/><path class="cls-1" d="M289,360.1c5.25-1.81,1.6,7.21-1.4,2.26C288,361.4,288.06,359.93,289,360.1Z"/><path class="cls-1" d="M210.29,340.09c1.21-2.16.2-3.17,1-5.1,1.21,1.93,1.49,2.8,4.5,2.81l-.79,2.44c-.75-.12-1.05-.48-1-1-.89-.08-1,1.37-1.4,2.25A3.62,3.62,0,0,0,210.29,340.09Z"/><path class="cls-1" d="M141.89,313.26l1.83.59c-1.05,1.73.48,2.14-.57,3.87C141.6,316.81,141.29,315.26,141.89,313.26Z"/><path class="cls-1" d="M203.1,333c.73,1,.64,2.41,2.47,2.83a3.09,3.09,0,0,0-1.21,1.64c-2-.16-.63-2.06-2.66-2.22C203.17,334.38,201.63,333.94,203.1,333Z"/><path class="cls-1" d="M133.12,311.1c1.09,1.87-2.36,3.32-4.66,1.87C129.6,311.55,131.82,312.23,133.12,311.1Z"/><path class="cls-1" d="M229.23,342.15c1.14.78,2,1.69.84,3.65C228.07,345.46,228.54,343.86,229.23,342.15Z"/><path class="cls-1" d="M126.8,309.74c2.22,1.51-.63,5.48-3.22,3.69C124.05,311,125.71,310.94,126.8,309.74Z"/><path class="cls-1" d="M115.58,306.79c1.71,1.17,1.11,3.52.87,5.69C114,311.31,112.58,307.83,115.58,306.79Z"/><path class="cls-1" d="M152.55,322.11c-1.86-.71-3.93.33-4.9-1.58C148.54,316.92,154.2,318.07,152.55,322.11Z"/><path class="cls-1" d="M195,333.11c-.33,2-2.33.78-2.42,3.28C190.48,335.3,193,332.21,195,333.11Z"/><path class="cls-1" d="M216.39,340c2.19.24,1.91,1.75,1.66,3.24-.67.37-1.8-.18-2.23.63C214.14,343.35,215.29,340.54,216.39,340Z"/><path class="cls-1" d="M201.5,335.89c-.55.43-1.09.86-.4,1.23-.42.84-1.89-.37-2.23.63-.55-.05-.5-.42-.41-.81l.39-1.22C199.93,336.15,200.39,335.38,201.5,335.89Z"/><path class="cls-1" d="M210.52,343.54c-2-.52-1.52-2.28-3.88-2.61.25-1,1-2.23.17-2.64C208.23,337.75,212.69,342.18,210.52,343.54Z"/><path class="cls-1" d="M86.22,299.33c1.89.05,1.31,1.38,2.86,1.6-.27,1.47-2,.11-2.43,1.24C85.62,301.68,85.59,300.67,86.22,299.33Z"/><path class="cls-1" d="M225.59,345c-.94,2.57-4.58,3.78-6.49,1.28C220.7,342.58,222.35,344.63,225.59,345Z"/><path class="cls-1" d="M229.88,346.41c-.41,1.54-.86,3-1.8,3.48-.91-.9-1.31-2.05-2.47-2.83C226.44,345.69,228.36,346.45,229.88,346.41Z"/><path class="cls-1" d="M172.35,329.86c-.91,1.55-2.46,1.86-4.46,1.26C168.41,328.8,170.72,330,172.35,329.86Z"/><path class="cls-1" d="M196.84,337.77c2,1.21.6,4.46-.56,5.91a3.53,3.53,0,0,1-2.07-4.06C196,340.81,195.72,337.91,196.84,337.77Z"/><path class="cls-1" d="M286.21,366.64c2.63,1.48-1.73,4.33-2.62,1.86C283.69,366.36,285.59,367.74,286.21,366.64Z"/><path class="cls-1" d="M157.46,325.73c2,.34,1.54,1.94.85,3.65C157.24,328.56,157.21,327.22,157.46,325.73Z"/><path class="cls-1" d="M166,328.49c-.18,3.64-2.63,2.84-4,4.11-1.53-1.09-1.23-3.11-1.06-5.08A12.23,12.23,0,0,1,166,328.49Z"/><path class="cls-1" d="M50.75,291.93a2.82,2.82,0,0,1,.43,2.84c-1.65-.59-1.56.62-2.45-.79C48.83,292.17,50.35,293.14,50.75,291.93Z"/><path class="cls-1" d="M124.63,316.47c2.53-1.43,2.92,2.56,3.49,3.83C126.07,321.48,125,317.86,124.63,316.47Z"/><path class="cls-1" d="M175.43,332.88a3,3,0,0,0,1.64,1.21c-.15,2-2.06.63-2.21,2.66C173.19,336.2,174.34,333.4,175.43,332.88Z"/><path class="cls-1" d="M199.31,340.6c1.65.34,2.56,1.07,1.85,2.62C199.51,342.88,198.6,342.15,199.31,340.6Z"/><path class="cls-1" d="M209.1,343.76c1.41,1.86-1.59,2.55.26,5.49-1.85-.42-1.44-2-3.28-2.41C206.31,344.3,208.28,345.15,209.1,343.76Z"/><path class="cls-1" d="M185.64,336.86c3.42.9,2.1,2.7,4.9,1.58-.61.59-2.51,5.4.65,4.27-1.31,2.76-4.48,1.9-7.31,1.69a21.67,21.67,0,0,0,2.41-3.28c-1.34-.62-2.35-.59-2.84.44-1.31-.52-.82-2-.24-3.46C184.68,339,185.5,338.57,185.64,336.86Z"/><path class="cls-1" d="M239.31,354.87c.82,1.66-2.22,4.27-3.2,5.73-2.11-1-2.31-2.91-1.68-5.28C236.57,356.17,238.24,356.1,239.31,354.87Z"/><path class="cls-1" d="M137.52,324.69c-.73,1.92,1.43,3.13-.15,6.72a4.14,4.14,0,0,0-2.86-1.6c1.56,2.92.35,2.53.06,6.1-2.34-.85-1.74-3.2-.87-5.69-1.56-1.07-1.86.35-3.26-.38l1.59-4.9C134.34,325.8,136.76,326.88,137.52,324.69Z"/><path class="cls-1" d="M89,309.68l2.45.79c-.1,1.82-1.62.84-2,2A2.81,2.81,0,0,1,89,309.68Z"/><path class="cls-1" d="M154.46,330.84c.89.91.73,2.35,0,4.07a4.2,4.2,0,0,1-2.87-1.6C151.72,330.82,153.56,331.75,154.46,330.84Z"/><path class="cls-1" d="M216.9,351c2.49.26,1.3,2.4,3.08,3-.4,1.22-1.92.24-2,2.06C217.22,354.24,214.56,353.06,216.9,351Z"/><path class="cls-1" d="M161.41,334.44c1.36.32-.42,2.26-.38,3.26-1.39-.73-1.69.68-3.26-.38C158.36,335.14,160.49,336,161.41,334.44Z"/><path class="cls-1" d="M284.45,374.19a4.78,4.78,0,0,1,1.68,5.27,1.88,1.88,0,0,0-1.62.83C281.36,379.2,283.16,376.37,284.45,374.19Z"/><path class="cls-1" d="M279.36,373.21l1.83.6a4.14,4.14,0,0,1-1.6,2.86,3,3,0,0,0-1.64-1.2C278.23,374.34,279.12,374.42,279.36,373.21Z"/><path class="cls-1" d="M200.61,349.13c1.36.15,1.48.94,2.25,1.4-.5,1-1.51,1.06-2.85.43Z"/><path class="cls-1" d="M211,352.49c1.33.51-.58,2.68-.57,3.87-1.84-1-2.27.54-3.06-1A9.07,9.07,0,0,0,211,352.49Z"/><path class="cls-1" d="M316.74,389.35c-.27.81-.53,1.63-.79,2.45A1.37,1.37,0,1,1,316.74,389.35Z"/><path class="cls-1" d="M139,332.61c1.68.34,1.74,1.5,1.05,3-1.36-.15-1.49-.94-2.25-1.4A3,3,0,0,0,139,332.61Z"/><path class="cls-1" d="M175.74,344.47c-.7,2.49-2.09,1.12-3.45.24Q173.51,343.6,175.74,344.47Z"/><path class="cls-1" d="M212.47,356.34a3.61,3.61,0,0,0,2.25,1.4c-.26.82-.52,1.64-.79,2.45C212.37,359.46,212.38,357.92,212.47,356.34Z"/><path class="cls-1" d="M157.62,342c-.7,1.28-3.41-.57-3.68-1.19C155.07,337.14,158.07,339.52,157.62,342Z"/><path class="cls-1" d="M166,343.35l1.83.59a14.51,14.51,0,0,1,0,4.07C166.26,346.59,163.69,345.36,166,343.35Z"/><path class="cls-1" d="M190.87,352.07c2.6,2.16-1.52,2.93-3.44,2.27.26-.82.53-1.64.79-2.45C189.21,352.15,190.46,352.93,190.87,352.07Z"/><path class="cls-1" d="M215.77,360.79c.58-1.5,2.13.49,2.45.79-1.12.13-.83,3-2.63,1.85C216.16,361.93,217.38,361.9,215.77,360.79Z"/><path class="cls-1" d="M220.25,361.56l1.23.4c-.28.48.05.65.41.8L221.5,364c-.49-.28-.66.05-.82.41l-1.22-.39c.28-.49-.05-.66-.41-.81l.39-1.23C219.93,362.25,220.1,361.92,220.25,361.56Z"/><path class="cls-1" d="M211.5,361.44a4.2,4.2,0,0,1,2.87,1.6c-.49,2-1.68,2.71-3.44,2.27C210.46,364.36,210.93,362.92,211.5,361.44Z"/><path class="cls-1" d="M182.55,354.79c1,.14.87.92,1.64,1.2-.15,2-2.06.64-2.21,2.67C181.37,357.56,181.24,355.41,182.55,354.79Z"/><path class="cls-1" d="M140.12,341.76l3.67,1.18C143.64,345.71,138.62,344.09,140.12,341.76Z"/><path class="cls-1" d="M240.93,375c-.64,1.08-1.08,2.56-2.63,1.85C237.53,375.44,239.26,374.51,240.93,375Z"/><path class="cls-1" d="M137.88,342.39c-.57,1.87-2.06,2-3,3.08C133.71,344.1,135.7,340.52,137.88,342.39Z"/><path class="cls-1" d="M170.33,352.87c2,.33,1.08,2.17,2.47,2.82-1.33,1.35-2.62,1.23-4.07,0C168.78,353.84,170.1,354.42,170.33,352.87Z"/><path class="cls-1" d="M187.27,359l1.84.59q-.51,3-3.24,1.66C186.15,360.14,187,360.22,187.27,359Z"/><path class="cls-1" d="M142.8,346c1.89,2.23-.86,1.72-1.38,4.29-.89-.91-.74-2.35,0-4.07C142.06,346.55,142.51,346.44,142.8,346Z"/><path class="cls-1" d="M216.26,369.73c.62.37,0,1.35.83,1.62-.5,1-1.5,1.06-2.85.43C214.16,369.64,215.68,370.61,216.26,369.73Z"/><path class="cls-1" d="M160.18,355a4.24,4.24,0,0,1-1.6,2.86,2.41,2.41,0,0,1-1.66-3.24A4.19,4.19,0,0,1,160.18,355Z"/><path class="cls-1" d="M253,385.67c1.62.74.45,2.23-.8,2.45l-1.22-.4.6-1.84C252.28,386.21,252.74,386.1,253,385.67Z"/><path class="cls-1" d="M134.68,348.11c1.66.35,2.57,1.08,1.86,2.63C135,351.57,133.48,350.14,134.68,348.11Z"/><path class="cls-1" d="M90.82,335.3c2.13.1,1.59,1.57,2.67,2.21C92.23,339.67,89.65,337.33,90.82,335.3Z"/><path class="cls-1" d="M199,373c-1.22-.39-1.32,1.42-2.85.43C193.83,369.88,200.08,368.45,199,373Z"/><path class="cls-1" d="M162.68,361.89c-.26.82-.53,1.63-.79,2.45-1.66-.35-2.56-1.08-1.85-2.63A3.6,3.6,0,0,1,162.68,361.89Z"/><path class="cls-1" d="M144.73,356.77l1.84.59c-.16,1.36-.94,1.49-1.41,2.25C144.13,359.12,144.11,358.11,144.73,356.77Z"/><path class="cls-1" d="M242.75,396.54c1.86.46,1.46,2.88.24,3.46C240.73,399.75,241.49,397.14,242.75,396.54Z"/><path class="cls-1" d="M136.65,362.94c1,.5,1.06,1.51.44,2.85l-1.84-.59C135.4,363.83,136.19,363.71,136.65,362.94Z"/><path class="cls-1" d="M1.4,323.31c2.26.26,1.5,2.85.24,3.46A3,3,0,0,0,0,325.56C.28,324.44,1.16,324.51,1.4,323.31Z"/><path class="cls-1" d="M160.24,384.09c-.26.81-.53,1.63-.79,2.45-.88-.91-3.29-1-2.47-2.83C158.55,384.77,158.85,383.36,160.24,384.09Z"/><path class="cls-1" d="M224.9,8.14a4.51,4.51,0,0,0-1.81,1.44c-1.45-1.93,1.54-3.57,3.43-2.27-.33.68-.21,1.13.22,1.42C226.18,9.55,226,8.24,224.9,8.14Z"/><path class="cls-1" d="M314.14,43.73c1.39.63-1.23,1.41-1.4,2.25-1.3-.19-1.88-.75-1.45-1.82C312.69,45.82,311.74,43.52,314.14,43.73Z"/><path class="cls-1" d="M202.28,25.84c.75-.15,3.83,1.68,4.88-.45,3.48,1.42-.91,4.22.06,6.11C204.56,32.46,202.9,28.69,202.28,25.84Z"/><path class="cls-1" d="M231.9,38.79c-.75.2-1.09,1.2-2.23.63.75-1.23,2.76-3.48.77-4.48.82-.74,2.26-.25,3.46-.23-1.14,1.74-2.64,2-1.39,4.28C232.17,39.65,231.79,39.13,231.9,38.79Z"/><path class="cls-1" d="M272.7,50.62c.69.33.16,1.29,0,2,.33.87,1.38.41,2,2a3,3,0,0,0-1.2,1.64,3.09,3.09,0,0,0-1.64-1.21C273.27,52.92,270.36,51.81,272.7,50.62Z"/><path class="cls-1" d="M299.67,63.39c.6-.49,1.62-.18,1.82-1.44,1.79,1.13-.45,4.32,2.49,4.86-.28,1.12-1.17,1-1.41,2.25C300.73,67.62,303.24,64,299.67,63.39Z"/><path class="cls-1" d="M251.33,49.8c.78,2.4,2.39,1.72,1.26,4.47,2.09.42,4.62,1.69,5.08-1.07l3.06,1c-.72,3.53-1.89,4.12.06,6.1-1.1,1.18-3.92-1-5.71-1.17-.77-1.53.72-1,1-3.06-2.76-1.06-4.29.28-6.72-.14-.49.94.24,1.24,0,2,3.5-1.46,6.94,3.23,8.19,6,1.33.25,1-2.64,2.22-2.67,1.66.34,2.56,1.07,1.85,2.63,1.55.7,1.25-2.22,3.05-1.05-.28,1.12-1.17,1.05-1.41,2.25,1.74,1.4,1.11-1.83,2.85-.43.56-1-.11-1.31-.83-1.62,3.07-2.28,5.1,2.2,6.55,4.82.85,0,.08-3.9,3.24-1.66-.2-.66-.38-1.33.4-1.22,0-2-1.38,1.12-2.65-.18,1.76-1.41,1.58-2.81,2.61-3.89.24-1.31-1.24-1.75-1.86-2.63a4.2,4.2,0,0,1,1.61-2.86c4,.55.48,3.85,2.68,4.25A5.27,5.27,0,0,0,276.49,64c2.72-2.17,3.38,3.52,4.32,5.45a2.56,2.56,0,0,1,3.24-1.65c.59-1.84,1.19-3.68,1.78-5.51,1.16.76,1.26,2.08,3.28,2.41-.8,2.27-1.25,1.52-1.19,3.67-1.49-.58-2.21.35-3.46.24,1,2.49-3.69,5.17,1.48,5.89.66-1.7-1.37-2-.85-3.66.74-2.22,2.67-2.11,5.08-1.06-.21,2.51-2.26,3.58-1.58,4.89,1.3.23,1.73-1.27,3-1,0-2.06.63-4.41-.87-5.69,3.46-1.24,1.57,4.63,5.14,5-.22,2.23-2.58.28-3.24,1.65.12,1.82,1.12,3.18,1.87,4.67-3.34.53-1,1.52-2.19,4.69-2.68-.33-2.84-2-5.31-2.39,1-1.22.67-2,2-4.08,1.21.4.24,1.92,2.06,2,.54-1.3.12-2.11-1.25-2.43-1.51-1-1.59.89-2.43,1.25-.82-2.06-2.31-1.83-4.7-2.2.77-2.6-3.21-2.78-2.29-5.47-1.26.54-1.62,2.81-3,3.08,5-.26,3.87,4.57,8.79,4.19-3.18,1.88,2,2.77-.56,5.91,1.14-.53,2.45-2.31,3.46-.24-5.14,2.22,2.11,6.11.07,8.14,2.6,1.13,2.62-1.23,4.49.77-.38-1.17-1.58-1.92-.85-3.66,1.53,1.18,1.24,1.4,2,2,1.35-2.67,5.28.1,6.26-4.74.38,1.37,1.34,3.73,2.45.79.43,1.15,2.31,1.55,1.66,3.24,1.5.6,2.22-.32,3-1,0-1-.86,0-1.83-.6,1.12-1.79,2.54-3,4.86-2.48-1.12,3.07,2,.8,1.66,3.24,1-1.12,2.95-.22,3.43-2.27,1,2,2.8.4,4.9,1.58-.92.8-2.09.88-2.65-.18-.16,2-1.34,2-1.8,3.48-4.92-2.4-4,.51-6.28,2.7-1.56-.23-1-1.55-2.86-1.6-1,2.58,3.3,2.1-.38,3.26-.25,1.32,2.64,1,2.67,2.21-.67,4-5.42.07-6.07,4.13,1.22.7,1.45-.5,1.82-1.45,1.81,1.9,2.32.49,4.48.78-1.8,2.12,1.48,1.46,1,1,2.94,3,3.07,9.06,10.43,5.4-.34.85-.67,1.7,0,2,.92-1.46.93-1.47,3.24-1.65,3.4,4.4-2.92,11.21,2.76,12.38-1.12,3.27-2.93,0-5.29-.36,2.53,1.66-1.47,2.69.87,5.69,1.29.53,1-2.08,1.6-2.86,1.45.45,1.46,1.63,3.47,1.8-.65,2.72-2.72,2.66-4.85,2.48-.44,1.08.33,1.54-.18,2.65,1-.35,2.46.16,3-1,.48.5,1.14,3.4,2.05,2,1.2.84-1,3.22-2.63,1.85.2.67.39,1.34-.39,1.23.83,2.61,4.88-.22,5.51,1.78-2.53-.42-.63,4.24-2.63,1.86-1.7,4.79,2.63,5.69,6.36,5.43,1-2.48,0-2.65,1.38-4.29,2,.86,3.65,1.88,4.3,3.42-2.9.52-1.28,3.65-4.44,3.3.48-1.69,1.42-.9.79-2.45-1.25-.11-2,.82-3.46.23.55,2.11,1.6,4,2.1,6.09-.74-.48-.62-1.39-1.44-1.82,2.17,3.23-2.39,5.67.47,6.91-.12,1.79-1.65.78-2.43,1.25.67,1,.2,2.62.84,3.65-.56,1.55-2.6.25-3.65.85,1.9,2.43,1.7,5.94,6.57,6.86-2,3.17-.14,3.13-1.77,5.51.2,1.25,1.78,1.81,2.46,2.82-1.77,1.82-.08,1.64-.58,3.87-1.89-.71-2.6.89-3.43,2.27.46,1.13,2.18,1.61,1.66,3.24,2.15,1.22,3.17.2,5.09,1,.38,1.17,1.58,1.92.85,3.65,1.54-.77,1,.73,3.06,1-.06,1.39,1.11,2.55-.38,3.26,1.3.19,1.88.75,1.45,1.82,2,.2,1.32-1.38,1.59-2.86,3.23,1-1.05,2.81,2.08,4a42.21,42.21,0,0,0-5,7.17c-3.18-.42-2.23-2.95-5.73-3.2.41,2.69,2.28,4.63,5.55,5.85,2.89,0,3.91-3.68,6.68-3.93,2.22-.12-.18,2.13,2.05,2,2,.06.27-2.09,1-3.07a4.2,4.2,0,0,1,2.86,1.61c-.31,2.74-2.88,4.06-4,2.07.08,5-3.83,5-6,8.19-.45,1.44,1.75.32,1.62-.83,1.08,1.29.36,5.19-.55,5.91-2-1.55-6-2-5.13-5-.95,1.14-1.31,4.16-4.45,3.3-.81-1.88,2.24-2.26,3.22-3.7-2.54-2-1.72,2.62-4.27.65,1.45-2.31.56-4,3.42-4.3.3-2.39-3.73-2.24-3.65.85-1.36-.16-1.49-.94-2.25-1.4.33-2,2.1-1.23,3.24-1.66-1.1-1-2.88-1.1-4.5-2.81-1.65,2,2.69,1,1,3l-2.45-.79c-.58,1.49.35,2.21.24,3.46,2.65-1.72,3,3.45,5.13,5-1.05,1.82-2.4.5-3,1,2,1.31,6.49,2.28,5.35,6.46-2.15.07-1.41-.39-3.67-1.18.44,1.3,2,2,2.27,3.43,4.66-.06,3.89-4.6,7.47-6.37,4.61,1.91-5.74,7,.48,8.94-.75,1.53-2.51,1.08-2.6,3.89-2.44,1-2.8-.19-4.9-1.58-.16,2.3,2.49,3.16,3.1,5.06-1.61,2.23.3,1.57-2,4.09-1.78-1.64-2.39-2.35-5.31-2.4,1.74-1.14-.17-3.69-1.06-5.07-1.67.08.8,2.25-.58,3.87-1.76-.46-1-2.23-1.66-3.24-3.56,1.66,2.43,6.34,2.33,9.54a3.62,3.62,0,0,1-2.65-.18l.6-1.84-3.68-1.18c-.9,2.31,4.72,3.29.65,4.26.49,2.46,2.49-.35,3.87.58,1,1.77-1.18,1.92-1.38,4.28-1.05-.14-.87-.91-1.64-1.2-1.34-.24.37,1.95-1.82,1.44a16.45,16.45,0,0,0,12.44,3.34c-1.81,2.95-1.91,3.43-1.76,7.55-1.19-.68-1.75-.11-2.64-.18.2.66.38,1.33-.4,1.22.21,1.6,2.43-1.16,4.07,0-3.35,1.78-.91,3.45,1.06,5.08-2,1-1.46,4.12-3.22,3.69-.26,2,2.36,2.54,1.88,4.66-.81,1.08-3.53-1.56-3.66.85-1.2-.58-.69-2-1-3,4.57-1.71.58-4-2.09-6.08a1.77,1.77,0,0,0-1.82,1.44c-1.86-2.63-3.79-5.22-8-6.64a4.51,4.51,0,0,0-1.81,1.44c-.21,1.73,3.94,4.9,4.89,1.58,1.66,1.63-.51,3.27,3.09,3-1.31,1.44-4.05.08-4.87,2.49-.51,2.22,2.36-1.63,1.84.59,0,2.06-4.72,0-2.83,2.47-3.49,2-7.88-2.25-7-5.63,3,.27,1.25-2.44,4.06-2.07-.35-2.38-1.64-4.28-1.9-6.7-3.31-.81-5.38.81-8.33.69,1.22,2,4.37-.74,6.71.14,0,1.51.52,2.8-.16,4.68,1.31-.09,1-1.69,2,0-1.85.95-4.75.93-4,4.11-2.21.34-3.74,2-5.67,2.9-.65,1.35,1.54,1.25,1.24,2.43,1.2.32-.21-2.59,1.6-2.87.09,2.37,1.16,1.84,2.47,2.83-2.28,2.36-5.32,2.16-5.85,5.55a3,3,0,0,1,2,0c-1.75.23-3,1.49-3.41,4.3-2.76-1.06-3.43,1.95-6.3.67,1.38-4.26-.11-5.2-.5-8.95,3.22,1.3,4.28-1.64,6.7-1.89-.8-1.63-2.46-4.68.36-5.29.08-.89-1.37-1-2.25-1.41-.56,2.33-.67,4.43.86,5.69-2.25,1.34-6,2.55-8.75-.12-.7,1.56.77,2,1.86,2.63-.63,1.1-2.53-.28-2.63,1.86-.3,1.49,2.59,1.24,2.65.17,1,4,1.39,6.21-.52,10-3.25-1.07-2.66-4.09-4.13-6.07-1.8,1-.05,4.43-.75,6.52a4.56,4.56,0,0,0,1.82-1.44c1.72.56-2,1.2.83,1.62-.09,1.81-1.61.84-2,2.05,1.95.06,6.25-.39,6.74,2.17,2.14-.07,1.56.7,3.26.38,0-1-.41-1.83-.44-2.84-.92.84-2.5,1.18-3.26-.38,2.75-.48,2.44-3.09,3.62-4.91,1.54,2.72,3-.69,5.3.35-.17,2-1.35,2-1.8,3.48l-3.68-1.19a3,3,0,0,1,0,2c1.09.26,5.66-.38,4.7,2.19,1.07.43,1.54-.33,2.65.18a4.22,4.22,0,0,1,1.6-2.87c3.63.7,5.16-.66,7.94.54,1.07-2.08.24-3.19.16-4.68-2.3,1.53-2-.86-4.09-2,1.9-1.46,4.94,1.54,7.94.53,0-.53-.42-.81-.22-1.42-1.73-1.4-1.11,1.83-2.84.43-.37-1,.13-2.45-.24-3.45-1.22-.39-1.31,1.42-2.84.43.64-1.35-1.55-1.25-1.24-2.43,3.6-4.27,7.59,3.61,10.78.1,1.29.7-1,3.26,0,4.07,1.36.06,1.79-1.45,2.64.18-3,1.69,1.09,5.41-1.56,6.93-2.05-2.34-1.54-2.27-4.92-3.61.92,1.4,1.19,3.14.26,5.49-1.69-.49-.91-1.42-2.45-.79,1,2.19-1.36,4-2.81,4.5-1.39-4.74-8.84-2.49-9.56.29-.36,1.38,2.52,1.1,3.48,1.8-2.83,2.54-.42,5.9-2.77,8.57-1.38-.16-.19-5.3-2-2-2.78-1.9-.06-4.59,2.19-4.7,0-.53-.42-.81-.21-1.42-2.08,1.5-4.34.7-5.51-1.78-3.82-.19-3.33,5.27-6.29,2.7.1.64.19,1.27.84,1.62-2.14,2.45-5.09.17-6.13-2l1-3.06c.36-1.38-2.51-1.1-3.48-1.8-.32,1-1.58,1-3.23,1.66-1.09-1.15-.63-3.09-3.7-3.23-1.16,2.13,1.66,2.23,2.27,3.44-2.4.84-.8,3.29-3.63,2.89-.24,1.31,1.24,1.74,1.85,2.62-1.93.63-2.77,5.1-3,1-2.86,4.07,6.23,5,7.74,1.15-1.74-1.07-1.43,1.87-3.45.23.58-.35,1.49-1.37.59-1.83,3.07-2.24,5,.85,6.34,3.4-1.6,3.19-4.95,3-7.9,3.53-.42,2.19-.58,3.88-2.4,5.31-1.06-1.26-1.44-4.74-5.54-5.85,2,2.62.18,4.15-3.64,2.88a3,3,0,0,1,0-2c-4-.95-8.51.57-8.71,3.95-.79-1.53-1.51-.57-3.06-1,.5-2.35,1.26-4.21,3.22-3.7-.18-2.47-7-3.84-7.32-.33-1.17-.76-1.42-2.39-2.87-1.61-1.24,5.74,4.75,2.92,6.52.76,1.05,3.41-4.37,2.76-5.65,4.93.46,1.64,4.8,1.29,2.69,4.25-1.76-3.3-2.37,1.26-4.27.65,1.16-.85.79-4.19-.26-5.49-2.17,2.77-5.58-.57-8.77-2.16.1-1.81,1.62-.84,2-2.05,2.12.1,1.58,1.57,2.66,2.21-.27-3.54,1.41-2.26,2.81-4.5.72-1.39-2.9-.56-1.24-2.43-3.29,2.64-5-1.85-6.75-4.21-1.83-.91-2.23,1-3.25,1.66,3.64-.75,2.13,1.22,5.12,3-.74,2.55-2.3,3.49-2.79,6.54-.66-1-1.28-1.14-2,0-.28,1.16,1.95,1,2.05,2-1.18,1.35-3.67.14-5.91-.55-.82,1.78,1.59,1.91,2.47,2.82-.9,4.56-5.69,1.52-6.65,6,1.41.13.9,4.29-.56,5.9-2.71-2.35-5.07-.31-9.16-.93.85-1.79.16-2.86,2.8-4.51-3.34-.87-4.35,2.81-7.92,1.5.33-.68.22-1.13-.22-1.42.41-1.55,1.14-2.44,2.22-2.66-.61-1.73-2-3.07-.87-5.69.67,1.36,2.07,2.35,1.26,4.46,3.84-2.39,4.5,2,8,2.57-.2,1.3-.75,1.88-1.82,1.44.45,1.13,2.18,1.61,1.65,3.24,1.29-.48,1.83-2.41,3-3.08-2.85,1.28-3-1-.62-2.23.58-1.49-.35-2.2-.24-3.45-2,0-3.43,1.28-6.1.05-1.4-1.5.55-4.71-3.1-5.05,1.06-1.57-.35-1.87.37-3.27,1.79.85,3.64-.6,3.48,1.8,2.72-.05,1.22-5.7,3.64-2.88.82-1.78-1.59-1.91-2.47-2.82.06,3.84-5.57.59-6.46,5.35-2.31-.19-4.06.72-6.3.67.26-.82.52-1.64.79-2.45-2.67-.66-3.78,2.82-6.11,0-.59,1.24.54,5.09-2.17,6.74-1.89-.06-1.31-1.38-2.86-1.6,0,1.68,1.11,2.83,2.88,3.63-.79,1.31-.37,4.54,1,3,.46,2-4.33,2.16-5.86,3.52.74-2.78-.76-8.08,2.13-10.81-.34-1.69-2-2.7-1.87-4.66,1.09.36,4.09-.5,4.29,1.39,2.23.1.67-1,1.6-2.87-1.88.24-4.68.81-4.09-2-1.13,1.44-2.61,2.22-3.42,4.3l-2.45-.79c-1.61-.83-.6,3.49-2.21,2.67-.14.75.95.87,1.64,1.2-3.42.95,1.39,5-3,5.12,0,1.52,3.36,1.34,4.7,2.19-2.52,2.79-2.18,9.95-6.38,13.49-2.28-1.17,1.59-1.78.77-4.49-.43-1.33-4.24-2.52-6.34-3.4.91-3.32,2.38-4.55,2.18-6.73,1.06-.51,3.32,2.71,3.29,4.45,3.22-1.68-.56-4.12.76-6.52-1.84-1-2.27.53-3.06-1,1.84-3.18,3.67-4.39,3.77-9.6,1.93,1,3.77-2.58,3.87.58,2.31-.16,3.15-3.18,5.67-2.9-2.34-.57-3.21-3.06.38-3.26-2.49-3-4-.32-7.74-1.15-.6,1.5.89,1.93,1,3-2.77,1.52-5.94,4.59-4.8,8.59-1.7-.32-2.64.83-4.27.65,1.7-2.4-1.95-2.07-.65-4.27,1.7-.91,2,.72,2.87,1.6.48-2.8-3.86-3.13-3.52-5.86,1.29,2.4,4.32-2.44,3.42-4.31-.39,2.29-4.44,2.56-3.83,3.5-1.26,1.41-3.19-1-4.28-1.39.18-3.29,3.9.31,5.07-1.06-.83-.49-3.48-2-5.73-3.2.36,4.28,1.59,7.53-.1,10.78l3.06,1c1.3-2.2-.79-2.66-.65-4.27.63.14,1.44,1.83,3.28,2.41a56.37,56.37,0,0,1-3.8,7.57c-1.5-2.32-.19-4.43-1.47-5.89-2.1.62-.19,3.46-1,5.1-1.86-.71-3.93.32-4.9-1.59.48-2.39,2.61-1.55,3.63-2.88-3.66-1.65,2.6-6.37-3.73-7.29-.06,3.72,3.45,5.46-.93,9.16-2.64-1.86-2.49.11-6.12-2,2.23-.31,2-5.37,5.26-3.71,1.35-2.91-1.58-3.63-3.91-4.65.53-1.62.89-3.57,2-4.08,1.23,3,1.68.2,3.24-1.66,1.73,2.11-1.35,4.7-.75,6.52,2.24-.29,2.13-5.15,5.67-2.91.38-1.21-1.42-1.31-.44-2.84,1.37-.32,3.19.23,3.44-2.27,2.49.77,3.28,2.41,4.11,4,2,.06.27-2.09,1-3.06-.75.2-1.09,1.2-2.23.63-2-2.46,4.7-3.47,3.65-.84,1.53,1,1.63-.82,2.84-.44,0-1.37-3-1.17-1.65-3.24-.6.27-2.78,1.95-1.84-.59-.53-.05-.81.41-1.42.22a12.34,12.34,0,0,1-12.17,4.18c1.07-1.34-1-4.4,1.8-3.48-3-1.1,1.52-3.38-1.87-4.66-1.3-.53-1,2.08-1.61,2.86-.13,1.26,2.79,1,1.05,3.05-2-.16-.63-2.06-2.67-2.22-.7,1.22.5,1.45,1.45,1.82-1.1.52-1.47,2.46-2,4.09-1.64-1.42-1.8-.4-4.29-1.39.57-1.55,2.68-.1,3.24-1.65-.14-2.11-2.62.13-2.86-1.61-.43,1.55.54,2.27-1,3.06-2.22-1.41-2.67-4.71-5.33-4.42,0-2.54,1.53-3,2.2-4.7-1.58,1.24-3.75,1.34-5.48,2.29-1.29-.88,3.11-4.16.36-5.3,1.49-1.37,3.69,1.13,4.09,2,.42-1.54-.54-2.26,1-3.06a3.62,3.62,0,0,0,2.25,1.4c-.63.79-.31,3.4-1.6,2.87,0,.87.76,1.31.63,2.23a14.56,14.56,0,0,0,6.51.75c-4.43-1.38.71-6.84,4.21-6.75-.85-1.88-4.33.65-4.7-2.2.37-.61,1.36,0,1.63-.82-.66-2.3-3.55-1.94-6.15-4,.94,1.55,1.1,2.69,3.28,2.42.7,1.51-.5,4,1.88,4.66-.28,1.12-1.17,1.05-1.41,2.25-5.84-1-6.32-4.89-12.46-5.38-.53-2.27,3.38-2.1,1.59-4.9,1.78,1.16,2.2-.35,3.45-.23-1.6-2.25-4.88-3.64-6.16-6.05-1.49.09-2.6.91-4.68-.16-.3,1.18,1.89,1.08,1.24,2.43,1.4.06,2.24-1,4.07,0,.79,1.45-.84,1.71-1.6,2.87,0,.53.42.8.22,1.42,2.07,1.39,1.71-2,3.65-.85-2.41.4-.36,3.73-3.63,2.88-.71,1.56.2,2.29,1.85,2.63-.11,1.78-1.64.78-2.43,1.24,1.5,1.11,1.41,3,2.69,4.25-.84,1.82-2.86,1.7-1.19,3.67-.81,1.08-2.16,1.11-3.65.85.72,2.3,3.63.53,5.51,1.78,1-.95-1.18-2.64.79-2.45-.46,6.73,1.45,8.53,7.42,10.51.62-1.34.6-2.35-.43-2.84.92-.64,2.91.45,4.08,2-2.55,1.66-.42,2.51-2.39,5.31,1,.56,1.31-.11,1.62-.83.73.82,1.64,1.54,1,3-1.83-1.73-3.84-.82-3,1-3.36,1.18-4.1-3.34-4.32-5.46-1.71,0,1,2.7-1,3.06-1.09-2.79-2.53-2.33-2.29-5.47l-3.06-1c.35,1.7.49,3.5,2.69,4.25-2.41,1.95-5.89,1.82-8.1,4.14-.33-1.53-1.73-2.52-1.26-4.46a6.17,6.17,0,0,0,4.85-2.48c.28-1.17-2-1.05-2.05-2,.82-.74,2.26-.25,3.46-.24-.32-2.41.67-1.81,2.21-2.66-1-2.52-3.49.42-5.29-.36,1-1.3-1-4.48-4.1-4,1.21-1.61,2.64-2.82,4.85-2.49-1.73-.76-1.79-5.57-2.72-8.31A5.3,5.3,0,0,1,145,270.3c-1.06.66-4.77,1.26-3.23,3.7,1.34.24-.35-1.93,1.41-2.26,0,2.16,2.74.91,5.31,2.4-1.69,1-2.71,3.35-3.4,6.33-1.11-2.29-4.24-5.81-7-5.63-.28,2.4,1.93.34,2.66,2.22-1.49.4-2.75,1.26-4.46,1.26.48-.74,1.39-.62,1.82-1.44-1.55-.71-2.28.2-2.63,1.85-1.81-1.89-2.32-.49-4.48-.77,1.29-2.64,4.78-1.51,3-5.11.11-2.13,1.58-1.58,2.22-2.67.24-1.6-2.37-.8-2.23.63-.77-.46,0-1.7.17-2.64,3.34-.16,3,.59,5.1,1,.49-.94-.24-1.25,0-2-5.16,1.15-3.66-2.85-7.13-1-.13.75.95.88,1.64,1.21-.23,1.55-1.55,1-1.6,2.86-2.26-1.09-3.35.13-5.71-1.17,1.35,3.09,3.17.77,6.12,2-.56,2-2.81,3.12,0,4.07-.65,1.38-2.49.45-2.83,2.47-.61-2.31,1.27-2.93.36-5.3a3,3,0,0,1-2,0,4.2,4.2,0,0,1-3.85,1.46c-.44,2.77,4.19,1.43,4.5,2.81-2.17,1.09-4.08,2.68-7.72.88,1.26-1.71,2.66-5.81,1-5.09.62-2.71,4.61-4.76,5.82-7.58.07-2-1.79.29-3-1,1.5-2.06,4.94-.32,6.69-1.9-2.29-1.21-2.94-3.26-4.52-4.84.6-.49,1.61-.17,1.82-1.44a40.06,40.06,0,0,1,4.08,2c1.38-2.07-1.67-1.87-1.65-3.24-.72-.06-.81,1.08-1.62.83-1.84-.43-1.74-1.84-2.47-2.83,1.51-.81,1.28-.12,1.4-2.25,2.34.59,4.25.31,5.69-.86a4.47,4.47,0,0,0-1.44-1.82c-2.26.25-3.34,2.79-6.08,2.09.16-2,1.63-1.46,1.79-3.48-2.68,1.42-5,3.45-8.09,4.15.19.75,1.2,1.08.63,2.23-2-1.14-1.58,2.23-3.66.85,0,1.38.2,2.62,2.47,2.82-1.2.66-2.8.52-4.68-.16-.44,1.59.43,2.51.85,3.66,1.4-3.68,3.94-.16,6.3-.67-.36-2-1.86-3.48-1.48-5.89,2.16-1,2,.38,2.41-3.28a4.23,4.23,0,0,1,3.26.38c-.58,1.87-1,4.14-3,3.08.29,2.06,2.46-.4,3.88.57-2.5,3.4,0,3.54-.15,6.72a2.4,2.4,0,0,1-3.06-1c-1.43-.19-2,3.32.44,2.84L123.34,266c-3.65-.57-6.28,0-8.35-1.35.37-2.38,3.06,1.83,3.43-2.27-2.94-1.09-3.86,1.76-6.91.47.33-.68.22-1.13-.21-1.42.26-1.47,2-.11,2.43-1.24-2-2.12-2.52-5.67.75-6.52-.4-.82-.81-1.63-1.24-2.43-.54,0-.81.42-1.43.22,0,1,1.76,1.14.44,2.84-2.77-2.91-5,1.33-9.15,1.1,0-1.72-.23-4.84,1.17-5.71.84,2.76,9.26.82,6.89-2.5,1.54.79,2.1-1.83-.43-2.84-1.63-.36.5,1.32-.79,2.45-1.87-.58-2-2.07-3.08-3-.92,1.84,1.43,2,0,4.07a4.14,4.14,0,0,1-3.26-.38,14.29,14.29,0,0,1,2.41-3.27c-3.5-.2-2.18,4.58-4,6.14-1.26-2.34-2.84.31-4.27.65-1.2-1-.53-3.56,1.6-2.87-.37-.66.18-1.79-.63-2.23-1.45,2.17-4.42,1.35-5.45,4.33-1.54-.92-1.86-2.46-1.26-4.47,3.5,1.61,3.66-1.74,8.13-.07,1-.71,3-3,1.19-3.68,1.72-.22,4.35-2,5.49-.25,1-2.39-2.35-2.54-2.68-4.25,1.49-.08,2.11-1.87,3.85-1.46,0-1.2.5-2.64-.24-3.45,1.33-.41,2.87-.4,3.85-1.47-.82-1.23-2.71-.29-2.46-2.82-.72-.07-.81,1.08-1.62.83A4.54,4.54,0,0,0,109,231c-.82.72-1.54,1.64-3,1,.19,1.26,2.23,1.58.84,3.66-1.09-.64-2.34-.3-1.42.21-3.13-3.69-9.49,1.56-13-3.54-1.93.86,1.77,3.15,4.3,3.42-1,1.66-2.74,2-5.07,1.06,2.79-1.92-1.67-3.67-2.29-5.47,1.89-1.81.48-2.32.77-4.48.87,1.26,2.27,2.24,1.26,4.46,2.1.29,2.72,1.34,4.09,2,.33-2.58,4.09-1.15,5.45-4.32-.34-1-1.26-1.74-1-3-2.51,2.22-4.74-.27-7.74-1.14.16-2.34,2.59-2.65.57-3.87.9-1.24,3.51.87,5.1,1l.39-1.23c-1.53-1.55-6.75-1.29-8.16-2-1.5-1.73,3,0,2.83-2.47,1.89.06,1.31,1.38,2.86,1.61,1.46-.15,2.45-1.21,3-3.08-1.91-1.95,3.91,3.67,4.33,5.45,2.15.54,3.25-1,4.25-2.68-1.92,2.15-2.8.39-5.91-.56,3-1.6-3.59-8.23,2.36-9.38.43-1.07-.34-1.53.17-2.65-2.89.2-3.5,1-4.44,3.3,1.13,1.12.51,3.14.45,4.88-2.7-3-2.88,4.11-6.28,2.7.6-2.82,2.6-2.9,4-4.1.71-2.93-2.62-3.77-3.51-5.87-1,2.37,1.59,2.93,1.87,4.66-.52,1.31-2,.82-3.45.23,1.78,1.15.49,5.53-3.21,5.73-2-3.24-1-2.88-5.74-5.24-.31-1.79,3-1.13,1.4-2.24.63-1.39,2.83.5,2.25,1.4,2.45.25.73-2.13,2.22-2.67.59.21.23.9.21,1.42.88.05,1.31-.76,2.23-.63-1.13-2.14-1.24-4.81-1.69-7.3,4,2.61,6.63-1.93,9.16.93-.66,1.53-.78-1.18-2.45-.79-.18,1.45.69,2.37.85,3.65,2-1.17,3.65-4.76,6.09-2.09.8-1.61-2.1-1.31-1.86-2.63a4.65,4.65,0,0,0-1.82,1.44c-2.08-.64-2.19-2.28-2.88-3.63-1.85,0,.39,2.49-1.6,2.86.11-1-.46-1.36-1-3-2.41.15-1.91,2.17-3,3.08-2.58-2.24,3.29-5.61.73-8.55,1.25-1.24,3.15-1.17,5.08-1.07.2-.61.4-1.22.59-1.83-.14-2.11-2.62.13-2.86-1.61.2-.61.4-1.22.59-1.83,2.52-.37,1.38.89,3.48,1.8.18-1.63-1-2.57-.65-4.27a4.55,4.55,0,0,0-4.46,1.26c-.12,3.08.12,3.23.67,6.3-3.35-.87-5.09,1.37-8.75-.12,1.61-.51,1.62-4.15,4.24-2.68C89,187,90.92,184,88.6,183.14c.09-1.81,1.61-.84,2-2,1.11.11,1,.85.83,1.62,2.46-.1.84-2,2.41-3.28,2.08-.26,4.44,0,6.3-.67.28-1.16-2-1-2.05-2,2.7-2.27,2.27-5,2.77-8.57-2.15-.25-2,2.49-4.07,0,.14.95.94,1.56,2,2-.7,1.28-3.1-.73-4.48-.77,0,.87.77,1.31.63,2.23,1.74,1.07,1.72-1.3,3.46-.23-1,2.54-.34,4.25-.76,6.51-1.44.79-1.7-.84-2.86-1.6,1.06,2.19-2.65.69-4.26.65.67-2-.61-2.45.77-4.48.1-1.5-1.2.43-1.64-1.21-2.54,2-7.59-.84-9.54,2.33-1-.5-1.06-1.5-.44-2.84,4.12,2.06,4.94-2.34,9-.49.13-2-3.15-2.14-1.87-4.67,1.18.59,1.23,1.76,1.85,2.63,1.29.53,1-2.08,1.6-2.86,2.18-1,4.68.13,6.93,1.56-.19-.75-1.2-1.09-.63-2.23a12,12,0,0,1-5.09-1c-1,.14-1.56.94-2,2.05-.67-1.41-2.22-.12-4.28-1.38,3.12-2.75-2-1.51-1.26-4.47,1.9-1,1.33,1.49,2.66,2.22,1.2-1,3.51.2,4.46-1.27.91,2.7,5.87,3.36,7.14,1-1.68-3.84,1.35-8.13,5.19-9.82-.56-.05-.5-.42-.41-.81-1.26-.13-1.25,2.22-3,1,.35-1.66,1.08-2.56,2.63-1.86.19-2-1.49.17-2.44-.79-.25-1.06.28-2.53-1.86-2.62,1.74-1.6,5.48-1.19,7.33.33-.5-1.45-1.76-2.5-1.27-4.46-1.69,1.42-3.34,4.66-6.49,1.28-1.89.3-4,3.85-2.4,5.31-2.75,1.17-8.25,1.56-8.29,4.76,4-.16,1.7-1.58,4.9,1.58a4.21,4.21,0,0,1-1.6,2.86c-1.46-.12-2.39-4.17-3.68-1.18-1.5-1.45-1.89-3.46-.67-6.3a3.62,3.62,0,0,1,2.65.18c-.58-2.11-1.84-2.9,1-3.07-.79-2.5-3-.19-6.12-2,2.18-.61,5.54-3.08,6.71.14,1-2.2-2-2.4-.45-4.88-.85-.33-1.7-.66-2,0-1.46-2.26,3,.2,1.59-2.86.53,1.11,2.53,3.24,3.68,1.18.62.88.67,2,1.85,2.63-2.62-5.35,5.24-1.06,4.43-5.33a4.18,4.18,0,0,1,2.86,1.6c-.42,1.84-2,1.44-2.41,3.28,2.18.93,1.7-3.33,4.47-1.26a6.3,6.3,0,0,1,1.18-3.68c2.13.58-.83,2.11.85,3.66,2.45-1.46.11-3.86,4.25-2.69-1.43-1.83-1.54-3.18.57-3.87.05-.53-.41-.81-.21-1.42-1.31.08-1,1.69-2,0-1,1.73.47,2.14-.57,3.87-3.15-.9.53-2.11-1.66-3.24-2.21.6-4.59,2.56-2.2,4.7-1.89,1.26-1.88-2.75-3.69-3.22-1,.14-1.56.94-2,2-.54-1.42-2.87-1.94-2.07-4,.72-.92,2.17-.41,3-1-.77-2.4-3.5-.26-5.1-1,.47-1.75,2.07-1.29,3.66-.85.58-1.49.5-2.64-.24-3.46,1.52-.81,1.28-.12,1.41-2.25,2.58.73,3.15-2.48,5-3.1,2.66.9,3.11,0,4.09,2,1,0,0-.86.59-1.84l-2.45-.79c0-3.7.83-4.77-1.69-7.31,1.53-1.33,2.09.33,3.43-2.27,1.4,1.17,1.2,3.14.26,5.49,2,0,2.6-2.9,5.27-1.67-.67,2.35-2.53,2.37-4.66,1.87.47,3,2.18,6-.54,7.94.6,1.09,4.27-.28,4.45-3.3-4.13-.17,1.35-1.07-1.66-3.23,1.7-2.55,4,.07,5.28-1.68.81,2.65,6.37,2.87,4.54,6.87,1-.13,1.56-.94,2-2.05-.58-1.92-3.49-2.64-4.72-4.23,2.66-.48,3.8,2.86,6.94,1.56-2.31-2.41-5.08-3.69-8.4-5.41.64-1.09,1.08-2.56,2.63-1.85-.39-2.76-1.93.27-4.09-2,2.29-1.37.09-5.63,3.2-5.73-1.43-3,1-7.17.7-12.62,2.7,4.25,4.95-.84,6.74,2.18,3-1.11-1.5-2.6.16-4.68,0,2.54,3.07,3.53,4.32,5.45.56-1-.11-1.31-.83-1.62,1-.1.85-2.33,2-2.05a4.65,4.65,0,0,0-1.44-1.82c-1.67,0,1.42,2.49-1,3.06-1.58-1.82.94-3.09-1.88-4.66.33-2,2.25-1.69,2.84-.43,1.39-2.08-2-1.72-.84-3.66,2-1.68,2.2,1,3.26.38.21,2.91.33,9,5.18,11.14-.05-1.67-3.2-1.77-2.07-4,1.4.73,1.7-.69,3.26.38.37-2.28,1.86-2.37,3-3.08-2-3.11-3.64,2.85-6.5,1.28.64-1.7-.93-2.25-2.47-2.83,2.58-2.66,1.12-7.09,4.19-8.78,1.94,2.17,2.79-.35,4.46-1.27.1-1-1.25.19-1-1-2,2.5-6.73-.48-7.08,5.16-1.86-.58-.83-2.64-.65-4.27,1,.53,1.45-.17.82-.41,2.65.72,3.05-3.61,4.82-6.56.65-.73,2.38.67,2.84-.43,1.28.7-.57,3.4-1.19,3.67,3.3,1.68,5-1.31,7.13,1-.19-.75-1.2-1.09-.63-2.23,3.78.4,4.93-1,9.15-1.1-3,1.79-3.53,3.82-3.19,7.76-3-.45-4,2.87-7.3,1.69-1.37-2.43,4-1.45,2.6-3.89-1.8,1.81-4.7,1.45-6.47,3.32.23,2,1.88-1.52,3.45-.24-1,2.23.39,3.21,1.26,4.47,1.64-2.61,1.7-2.86,5.26-3.71-.21.59-.91.23-1.42.21-.14.75.95.88,1.64,1.21-2.24.63-3.69,2.79-5.87,3.51,3.56,2.09,3.18-2.77,7.7-2.92,1.05-2-2.24-2.94,0-4.07,2.28.2,2.06,1.67,4.09,2-1.31-1.54-2.2-3.3-3.91-4.64,1-2,2.54-3,3.62-4.92,4.09,2.09,3,.09,4.66-1.87.41,4,3.51,1.83,5.71,1.17-1.2,4-3,6.75-6.25,6.77,1.63,2.79,4.52-.46,5.06-3.1,2.56,1.44,6.38-3.13,9.14-1.11a4.57,4.57,0,0,1-2.23.64,1.94,1.94,0,0,0,.83,1.62c1.16.27,1-2,2-2.06-2.22-2.07-2.42-5.64.12-8.75-.51-2.5-2.69,0-3.87-.57,1.17-1.79-.32-2.22-1-3,3.78-4.17,9.36,2.5,12.63.69.18-2-1.5.17-2.45-.79,1.1-.5,1.23-2.91,2.82-2.46,2.48-.25-.3,2.19,1.24,2.43,1.25-1.23,2.29-2.86,3.84-3.5a4.18,4.18,0,0,0,2.86,1.6c-1.36,1.82-1.91-1-2.83,2.47-.26.69,3.3.55,3.66-.85-.14,1.61.33,3.17-1,5.1,1.88.67,2.37-1.36,4.68.16.25-1.32-2.63-1-2.67-2.21.34-2,1.94-1.54,3.66-.85-.15,1-.92.86-1.21,1.64,1.66.59,1.56-.62,2.45.79,1.17-.38,1.92-1.58,3.66-.85.42-1-3.61-2.53-3.26-.38-3.08-2.55-2-4.83-1.7-7.31,1.85-.38,4.36.54,6.1,0a4.15,4.15,0,0,0-.37,3.25c2.9-1,6.19-1.2,8.51-3.33,1.07.82,1.11,2.16.85,3.66a2.39,2.39,0,0,1,3.06,1,28.29,28.29,0,0,0,3.44-2.26c-2.25-.73-2.55,2.34-5.49.25A12.24,12.24,0,0,0,213.11,53c-1.28-.41-4,1.44-2.82,2.47-.06.56-.43.5-.81.42-.49-.28-.65,0-.81.41-2.31-1.71,1.35-4.07,2.81-4.5-.63-1.89-5.1-1.82-3.91-4.64,1.16.6,2,.49,2.23-.63.74.48,1.43,4.66,2.86,1.6,1.29,1-1.81,4.33,1.26,4.46-1-2.82,1-4.17.34-7.33,2-.28,2.57,2.68,3.67,1.19,0,1.88,2.57,2.43,1.88,4.66,1-.33,1.46-1.8,2.63-1.85.44-1.59-1.66-1.88-3.28-2.41a4.24,4.24,0,0,1,1.6-2.87c2.42,1.49,2.25,1.12,4.48.78-.9,2.33-1.11,4.31,1.88,4.66,1.65-2-2.7-1-1.05-3a14.09,14.09,0,0,0,5.71,1.16c-.34,2.73,2.2,4,2.7,6.28,1.15-.43,2.91.36,3.24-1.65.62.36,0,1.35.83,1.61.53,0,.81-.41,1.42-.21-1.71-2.86,2-.76,4.88-.45.13-.41.26-.82.4-1.23-.2-1.88-3.2-1-4.29-1.38,2.07-2.37,4.65-1.68,5.45-4.32,3.3.69.49,4.52,2.1,6.08,1.26-.54,1.63-2.81,3-3.08C252.19,49.53,251.67,49.92,251.33,49.8ZM310,106.63c-.77,1.35,3.37,4.12,3.48,1.79C311.5,108.26,311.49,107.08,310,106.63ZM283.79,303l2.45.79A1.37,1.37,0,1,0,283.79,303Zm-13.25-2.93c-2.52.75-3.24.48-5.49.25,1.69,1,.95,3.26,3.5,3.84C268.74,301.87,270.22,302.09,270.54,300.06ZM111.17,226.27c-4,.44.39-1.36-1-3.05-1,2.75-3.33,2.83-4.43,5.34A7.29,7.29,0,0,0,111.17,226.27Zm-1.26-4.47c-3.38.73-7,.87-9.74,2.94C103.33,223.59,108.06,225.5,109.91,221.8Zm-8.72-63c1.63-.85.12-1.29.18-2.65.52,0,1.21.37,1.42-.22-1.49-.58-2.94-1.07-3.46.24C101.47,156.29,99.52,158.48,101.19,158.82Zm6-27.12c-1.77-1.68-4.76-1.88-5.27,1.68C104.22,133.79,106.17,133.6,107.24,131.7ZM209.54,62c.52-1.63,1.05-3.27,1.58-4.9C208.75,56.56,207.59,60.89,209.54,62Zm32.34.31c.2-2.85,4.24,1.32,6.09-2.09-1.44-.48-2.14.47-3.87-.58,1.06-1.56-.35-1.86.38-3.25.33-1.67,2.52.28,2.62-1.86C243,54.32,239.27,60.34,241.88,62.3Zm11.64,3.76c-2-2.84-1-4-1.7-7.31a3.82,3.82,0,0,0-2.81,4.5C251.32,61.78,251.25,65.82,253.52,66.06ZM215.35,52.37l1.83.6c-.3-2.33.44-3.24.16-4.69C215.84,49.75,216.74,50.21,215.35,52.37Zm2.46,2.83c2.41,0,4.57-.39,5.67-2.9-.76-.46-.88-1.25-2.25-1.41C222.73,53.78,219.72,53.72,217.81,55.2Zm53.52,22.7c2,1.63,1.71-1.31,3.45-.24-.2.61.26.89.22,1.42-1.5-.28-1.83,1.76-3.65.85-.92,1.83-.05,2.75.84,3.65-.53-5.35,3.06-.37,4.05-2.07-1.67-.67.17-3.72,0-4.07a1.76,1.76,0,0,0,2.45.79c1.09-1.92-.61-2.41-.84-3.65A1.78,1.78,0,0,1,276,76c.24-1.32-2.1-1.31-1.86-2.63,2.37.09.35-2.87,2.63-1.85,1.16-2.13-1.65-2.22-2.27-3.44A15.68,15.68,0,0,1,271.33,77.9ZM225.14,55.54c-.08.38-.14.75.42.81.15-.36.32-.7.8-.42a1.78,1.78,0,0,0,.64,2.24c.13-1.61.49-3.32-1.46-3.86C225.4,54.72,225.27,55.13,225.14,55.54Zm-4.07,0a7.06,7.06,0,0,0,1.06,5.08,1.89,1.89,0,0,0-1.61.83c4.83,1-.36-3.08,1.78-5.51.84.32,2.38.62,1.42-.22C222.61,55.24,222.15,56,221.07,55.57Zm44.29,15.67c-.68,1.54-1.19,3,1.05,3-1.24-4.2,3.76-.08,4.45-3.3C267.94,68.94,268.11,72.94,265.36,71.24ZM225.59,60.42c.67.41,1.52,3.21,2.87,1.6C228.15,60.79,227.06,58.19,225.59,60.42ZM251,76.05c.44-1.13,2.16.23,2.42-1.24-2.61-1.49.56-6-3.53-7.9A27.49,27.49,0,0,1,251,76.05Zm48.16,16.23c.82-.72,1.25-2.21,3-1a3,3,0,0,0,0-2l-1.22-.4C300.9,91.55,296.46,90,299.13,92.28Zm-17.77-7.76c.89,1.07-.63,3.38,2.27,3.43-.22-1.42-.4-2.86-.65-4.26C282.71,84.49,281.72,83.9,281.36,84.52Zm2.5,6.89,2.45.79c.58-1.49,1.07-2.93-.24-3.46C285.92,90.77,284,89.38,283.86,91.41ZM299,97c4-.34,3.6,1.61,7.54,1.77C307.3,95.82,299.46,93.46,299,97Zm-4.07,0c1.06,1,2.4,3.19,3.26.38C296.14,97.07,296.12,95.13,294.9,97ZM187.38,63.62c-1.09,3-.07,3.92-3,5.11,2,1.19,3-.31,3.67,1.19C185.56,66.79,190.67,66,187.38,63.62Zm129.45,51.29c.52.93.55,2.1,2.67,2.21-1.48-2.85,1.2-3.44,3-5.12-2.12-.1-1.58-1.57-2.66-2.21C317.9,111.18,319.23,114.4,316.83,114.91ZM177.06,70.43c1.5.59,2.21-.35,3.46-.24a1.89,1.89,0,0,0,.83,1.62c-.59-3.22-1.28-3.34-.26-5.49-1,1.71-1.11-1-2.44-.79C179.24,68.56,178.5,67.58,177.06,70.43Zm137.17,48.36c-.53,0-1.22-.37-1.43.22,2,.33,1.81,1.8,4.09,2-.65-2.26,2.27-3.17-.65-4.27C315.27,116.84,315.39,119.07,314.23,118.79Zm-143-44.85c-1.8-1.18-1.51,1.72-2.63,1.86,1.89,2,3.61.42,4.66-1.88-1.33.22-1.45-2.49-2.45-.79C171.14,73.29,171.48,73.46,171.2,73.94Zm-11,.51c-1.49-.58.5-2.13.8-2.45C158.13,70.13,157.93,76.4,160.21,74.45Zm153.5,54.32c1.89,0,1.31,1.37,2.86,1.6.13-2.4,2.69-.07,4.07,0,.26-1.49.22-2.84-.85-3.65C320.73,130.6,315.27,126.83,313.71,128.77Zm-154.88-50c-1.3,2,2.44,1.47,2.47,2.82C162.79,79.31,160.4,77.93,158.83,78.74Zm161.09,62.18c-1.38-.66-.45-2.5-2.46-2.83C316.57,139.62,319,142,319.92,140.92Zm2.45.79c0,3,1.91,2,3.3,4.44,1.06-1.73-1.3-1.72-.24-3.45.52,0,1.22.37,1.43-.22C324.67,141.13,323.57,144.05,322.37,141.71Zm-187-44.85c2.29.65,1.83-.4,2-2.06-.76-.13-1.71-.66-2,0C136.06,95.16,135.73,96,135.4,96.86Zm189.37,62.52c1.67.08-.61-2,.38-3.25-1.83-.92-2,1.43-4.07,0-.95,2.18.7,3,2.07,4,1.31-1.27-1.8-2.69.18-2.64C324.28,157.93,323.31,159.28,324.77,159.38ZM122.19,98c.18,4.2,5.9,1.6,5.07-1.07C125.82,97.77,122.93,95.8,122.19,98Zm-3.36,10.4a14.29,14.29,0,0,0,3.27,2.41c1.81-3.67.94-6.66,4.82-6.55-1.23,2-.56,1.48-1.79,3.47,1.77-.3,2,2.62,3.06,1-2.79-2.27,1.81-8.1-1.5-7.92A48.49,48.49,0,0,1,118.83,108.4ZM327.3,168.31c2.27.79,4.31,1.11,5.9.56-1.72-1.26-3.23-1.07-5.11-3C327.83,166.68,327.56,167.5,327.3,168.31ZM121.63,103.9c-.9-.46,0-1.48.59-1.84l-1.83-.59C119,102.94,120.3,105.51,121.63,103.9Zm202.81,85.8c1.66.35,3.14.78,1.86,2.63,2.3,0,2.47,1.28,3.87.57-.7-.37-.16-.8.4-1.22C328.56,190.32,327.15,186.91,324.44,189.7Zm-3.65.85c3,1.12,2.31-.23,2.83-2.47l-1.84-.59C321.6,189.51,321.83,188.8,320.79,190.55Zm16.53,5.34c1.64,1.53,4.08-2.57,1.6-2.86A4.21,4.21,0,0,0,337.32,195.89ZM130.63,130.47c-.52-1.1-2.47-1.47-4.09-2a1.78,1.78,0,0,0-.63-2.23C124.65,128.78,128.54,131.33,130.63,130.47Zm204.3,70.73c1.19-1,3-.73,4.05-2.07-3-1.1-4-2.13-5.94-4.63C331.76,197.71,334.09,199.07,334.93,201.2ZM100.11,130.75c1.56.71,2.29-.2,2.63-1.85-1.65-.92-.92-.79-2.67-2.22C99.34,128.42,100.85,129,100.11,130.75ZM113,139l1.83.6c.39.08.75.14.81-.42.11-2.78-1.84-4.5-2.5-6.89C110.07,134.12,116.73,136.78,113,139Zm-1.94,10.19c-1.57-.9-2.07-2.35-3.7-3.22C107.26,147.4,109.62,150.2,111.07,149.16ZM91.3,145.48c1.58,1.32,3.46-1.73,2.21-2.66C93.36,144.85,91.16,142.88,91.3,145.48Zm223.35,85c2.84.85,3.2-1.25,3.48,1.8.13-3.07,3.42,0,4.46-1.26C320.34,229.13,316.89,227.63,314.65,230.48ZM101.86,165.12c2.24.09,2.67-2.21,3.87.57.34-1.91-4.65-5.85-3.1-5.06C101.71,162.47,103,163.15,101.86,165.12Zm223.45,74.21c-2-.31-6.07-3.42-5.9-.55C321,237.61,323.61,241.68,325.31,239.33ZM110.07,173.18c1.39.72,1.69-.69,3.26.38,1.15-1.35-.16-3.91-1.25-2.44C114.14,173.35,109.71,171,110.07,173.18Zm-3.87-.58c-.6,1.66.62,1.57-.79,2.45l4.28,1.39c-.31-1.8,3.33-.57,1.4-2.25C109.07,176.93,107.63,174.15,106.2,172.6Zm202.7,73.6c1.64,1.53,4.08-2.57,1.6-2.86C310.27,244.89,309,244.31,308.9,246.2Zm8.61,6.84c-.89-.91-3.3-1-2.47-2.83-1.29-.42-4,1.43-2.83,2.47C313.9,251,316.36,253.81,317.51,253Zm5.33,4.42c2.56-.81,4.29,2.6,6.93,1.56a11.1,11.1,0,0,0,1,3.05c.29-.44.74-.55,1.42-.22-1.11-4-2.46-4.76-5.76-7.27C326.14,257.26,323.17,254.78,322.84,257.46ZM105.42,198c-.91-2.15-2.53-2.81-.26-5.49-1.89-.05-1.31-1.37-2.86-1.6-.84,2.56-.6,4.28.47,6.91a1.77,1.77,0,0,1,2.23-.63C104.77,197.87,104.79,198.88,105.42,198Zm181.76,75.62c1.49-1.83,0-4.71-1.65-3.24,1.78,1,.27,1.89-.38,3.26,1.23.93,4.32.65,2.84-.43C287.84,273.61,287.67,273.94,287.18,273.66ZM300.65,278c1.6.14,3.32.5,3.85-1.46l-1.84-.59C302.57,277.77,301.05,276.8,300.65,278Zm-19.53-.22c-1.44-.48-2.15.47-3.87-.58-.64,1.86-.45,3.3.65,4.27,2.28-.5-1.39-2.74,1-3.06,1.81,2,.37,3.62,3.88,2.61-2.16,1.06.16,2.08-.57,3.86-1.14-.77-4.57-.38-3.28-2.4-1.83-1.49-4.71,0-3.24,1.65,1.5-1.21,4.31,1.38,7.15,3,.29-.43.41-1.2,1-1,1-2.06-1.68-2.2-.65-4.27,1.26-.19,2.11-1.2,4.07,0,.23-1.2,1.12-1.13,1.4-2.25-2.74,1.32-4.9-3.08-7.17-5,.1-1.82,1.62-.84,2-2.06-1.21,0-2-2.61-3.06-1C282,273.34,279.71,275.22,281.12,277.79ZM112,223.82c-1.28,4,4.67,1.1,5.91.55C115.3,223,113.72,226.75,112,223.82Zm-1.7,13.65c2.49.08,1.56,1.92,2.47,2.82.46-.77,1.24-.89,1.4-2.25-.33-1.76-2.2.5-2.25-1.41,2.26-1.61,3.71-1.59,5.47-2.28-1.38-1.25-1.73-1.15-.43-2.85-.77-.28-.6-1.06-1.64-1.2C114.32,233.84,111.33,233.78,110.26,237.47Zm153.45,50.24c2.91.16-2,7,3.34,8.52,1.14-2.54-1.4-1.32-1.25-2.43,1.33-2.07,4.49-.55,5.67-2.91-2-1.63-1.72,1.31-3.45.24-4.26-3.05,1.88-6.2-2.13-10.15C266,284,267.24,286.62,263.71,287.71Zm-1.78,5.51c-1.42,2.43,1.89,2.44,1.27,4.47-1.21-.24-1.13-1.13-2.25-1.41.86,2.73-.29,3.66.86,5.69,1.16-1,.22-2.86,2.83-2.47.48-1.43-.47-2.14.57-3.87C262.46,295.68,263.71,293.68,261.93,293.22Zm33.36-.71c.77.46.89,1.24,2.25,1.4.19-1,.95-2.19.18-2.65C297.45,292.73,295.73,291.37,295.29,292.51ZM124.52,239.37c.26-.82.52-1.64.79-2.45A1.38,1.38,0,1,0,124.52,239.37Zm148.85,58.22c.19-1.8.46-3.64-2.08-4C270.34,295.73,272,296.59,273.37,297.59Zm-40-12.24c1.59.44,3,.6,4.07,0C236.77,283.3,234.28,282.78,233.38,285.35Zm13.49,6.38c1.11.52,1.57-.25,2.64.18.4-1.43-1.6-4.23-3.08-3C247.46,289.38,247.49,290.39,246.87,291.73Zm-19.16-3.48c-.84-.32-2.39-.62-1.42.22,2,1.24,3.66-.56,3.47,1.8-1.92-1.09-2.57.3-3.24,1.65,2.25.56,1.65,2.57,3.7,3.23.95-.95-1.18-2.64.79-2.45a5.21,5.21,0,0,1,.64,4.26c2.59.9,3.86,4.71,4.7,2.2,0,.52.29.87,1,1-.11,2.45-2.26,5.93.47,6.92,1.27-3.2-1.09-5.53,1.15-7.75-1.08-2.06-3-.75-1.26-4.46-2.56-1.34-1.78,3.85-4.66,1.87,2.09-.71,2.26-3,1.58-4.89,3.22.6,6.85.4,5.45-4.32a1.77,1.77,0,0,1-2.23.63c-.51,1.11.25,1.57-.18,2.64-1.93-2.79-3.89,1.26-5.47,2.29-.28-1.81-3.18-.4-2.86-1.6.81-1.41,2.19-1.7,3.43-2.27-3-.37-.5-6.18-3.1-5.06C231.91,285.51,228.9,287.65,227.71,288.25Zm44.88,13.82c1.85,0,4.47-1.75,5.91.56-.58-3.06-3.3-1.94-4.72-4.23A4.47,4.47,0,0,1,272.59,302.07ZM140.8,262.2c.65-2.37-1-3.58-3.29-4.44C136.74,260.2,139.07,261,140.8,262.2Zm112,36.19c.14-1.94-1.08-3.19-3.5-3.83-.48,1.69-1.42.9-.79,2.45C250.88,296.34,251.32,296.49,252.83,298.39Zm-58.55-17.56c-1.68-.84-.6-3.1-2.08-4.05a3.67,3.67,0,0,0-.18,2.65c-.84-.33-2.38-.62-1.42.21C192.93,280.33,193.08,281.51,194.28,280.83Zm-57.74-18c-1.39-.82-.54-2.79-3.09-3C132.9,261.34,135.56,263.81,136.54,262.85Zm3.07,3c1.92,1.65,4.12-1.15,2.83-2.47C141.67,264.57,140.51,265,139.61,265.88Zm22,7.12c1.2,0,2.65.5,3.46-.24-1-.37,0-1.71-1.44-1.82C163.57,272.76,162.05,271.78,161.65,273Zm51.07,21.9c-1.66-1.73,1.51-2.25,2.21-2.67-1.19-.58-.67-2-1.86-2.62-1.38,3.27-3.72,6.92-7.27,5.76,0-.6-.22-3.5-1.44-1.82,1.69,2.1-2.46,1.09-2.82,2.47,2.7.21,3.4.38,3.89,2.61,1.13-2.11,3-2.68,5.47-2.29.95-.95-1.18-2.64.79-2.45C211.19,294.83,212,295.81,212.72,294.9Zm-15.33-7c-.38-.87-1.66-3.85-3.27-2.41C196.21,285.51,195.44,289.54,197.39,287.92Zm15,12.27c1.57-.19,6-1.06,3.63-2.88C215.82,300.3,212.36,296.87,212.36,300.19Zm15.5,4.33c1.87,1.22.09,1.55-.79,2.45.27.62,3,2.47,3.67,1.19-3.63-.87-.23-2.15.38-3.26C230.61,303.82,228.42,303,227.86,304.52Z"/><path class="cls-1" d="M92.76,193.28c-.35,1.09-2.8,3-1.39,4.28-.78,1.47-3,.17-3.85,1.46.46,1,1.39,1.68.24,3.46-2.1-.29-2.72-1.34-4.09-2,.57-1.48,1-2.92.58-3.87-1.47.13-2.42,1.28-4.27.65,1-.66,1.14-1.28,0-2-2.41.41-2.18.19-5.29-.36.33-.68.22-1.13-.22-1.42,1.47-.13,1.91-2.27,3.85-1.47-.2.62-.39,1.23-.59,1.84.93.49,1.24-.24,2,0,.85-2.48-2.41-2.85-1.68-5.27,1,1.8,2.53-.91,5.09,1-.82,1.16-2.5,2.2-1.8,3.47,1.19-.67,3.35.55,3.86-1.45a3.59,3.59,0,0,0,2.25,1.4c-2.2,3.91-1,4.35-2.38,7.34,1.75.09,2.14-2.48,3.64-2.88.13-.75-1-.87-1.64-1.2.4-3.21,3.5-1.15,4-4.11A3.09,3.09,0,0,0,92.76,193.28Z"/><path class="cls-1" d="M83.17,212.49c-2-1.55-.6-5.78-4.52-4.84,0-1.9,1.38-1.31,1.6-2.86,1.79,1,4.71,1.33,4.31,3.41a3.32,3.32,0,0,0-3.07-1C81.44,209.29,84.21,209.91,83.17,212.49Z"/><path class="cls-1" d="M98.07,239.61c-.92,2.14-1.89,2.65-1.58,4.9-1.84,1.31-2.27-.84-3.65.85-1.14-.44.22-2.16-1.25-2.43.9-1.24,2.77-.59,3.44-2.27C98.33,242.69,95.21,238.43,98.07,239.61Z"/><path class="cls-1" d="M241,316.2c-2.32-.65.27-2.5-4.5-2.8.71-3.27,4.13-1.25,6.49-1.28.5,2.6-1.58,3.27-1.36,6.31-.85-.33-1.7-.66-2,0C238.19,317.81,240.81,317,241,316.2Z"/><path class="cls-1" d="M232.59,47.13c.64-1.09,2.11-.54,2.21-2.67,1.7,3,4.49.45,6.95,3.6-1.22.61-3,.12-4.68-.16.4.82.81,1.63,1.25,2.43-.86,1.33-1.75,2.58-3.44,2.27-1.19-1.9,1.86-2.79.77-4.48C233.31,48.71,236.3,46.57,232.59,47.13Z"/><path class="cls-1" d="M319.81,84.77A3.27,3.27,0,0,0,317.38,86c-1.48-1.09,1.32-1.94,1.6-2.86.73.47.61,1.39,1.44,1.82C320.08,85.62,319.7,85.11,319.81,84.77Z"/><path class="cls-1" d="M185.37,44.72c.33-.85.66-1.7,0-2,2-1,3.78,2.47,5.73,3.21C189.16,46.37,188.39,45.15,185.37,44.72Z"/><path class="cls-1" d="M202.51,50.26c1.75.46,1.28,2.06.85,3.65a2.83,2.83,0,0,0-2.85.43C199.54,52.77,201.52,52.53,202.51,50.26Z"/><path class="cls-1" d="M319.13,99.42c2.79-3.47,5.78.64,6.74,2.18A2.83,2.83,0,0,1,323,102c.13,1.47,1.28,2.41.65,4.27C322.07,103.52,322.75,99.9,319.13,99.42Z"/><path class="cls-1" d="M151.65,50.73c1,1.46,1,2.15,1.86,2.63,2.17-.46,1.4-2,2-4.09,1.68,1.64,2.38.61,4.89,1.58-1.79,3.92-1,4.51,1.68,5.27-1.18,2.36-3.84,1.83-6.5,1.28,1.35-2.39-2.31-2.22-2.88-3.63-1.17,3.28.92,3.62.69,8.34A5.5,5.5,0,0,1,158.46,61c-.52,2.31-1.78,3.18-2.81,4.5-2-.84-5.11-1.13-5.92-2.59,1.82-1.45,2.64-2.24-1-3C153.42,58.05,149.72,53.49,151.65,50.73Z"/><path class="cls-1" d="M150.15,63.76c.38,3.21-5.43,4.13-1.17,5.71-.46.77-1.7,0-2.65-.18.4-1.22.79-2.45,1.19-3.67L142.62,64c.57,1.58,3.33,2,2.69,4.24a1.89,1.89,0,0,1-.83-1.62c-.75.2-1.09,1.21-2.23.63-2.24-.21,0-2.73-2.47-2.82-1.54.65,2.21,2.29-1,3.06-1.17-3.06-2.07-6.85-7.2-9.09,2.25,0,4.07-2.19,6.26-4.74,4.11.45,4.48,2.82,7.56,3.8-.26.82-.53,1.63-.79,2.45C148.79,60,147.15,63.08,150.15,63.76Z"/><path class="cls-1" d="M156.07,66.35c.67-1.68,1.91-2.26,3.85-1.46-1.66,1.92-4,2-2.8,4.5C155.29,68.35,156.62,67,156.07,66.35Z"/><path class="cls-1" d="M163.32,58.55c.1-1.81,1.62-.84,2-2-.46-2.17-2-1.4-4.09-2,1.34-1.77,2,.82,3.24-1.65.65,1.71,1.73,3.2,4.92,3.61-2,1.93-.81,4.3,1.65,3.24C170.46,63.27,167.26,58.19,163.32,58.55Z"/><path class="cls-1" d="M167.45,64.62c1.3,1-2,1.36-1.8,3.47-2.74-1.49-3.29-4.1-6.36-5.43.61-.8,1.41-1.25,2-2,2.06.44,3.66,2.22,1.66,3.24C164.35,63.89,166.74,65.9,167.45,64.62Z"/><path class="cls-1" d="M130.93,54.17a3,3,0,0,1,0-2c.67.33,1.13.22,1.42-.22,1.6,1.93-1.87,2.25-2.41,3.28C129,54.47,130,53.67,130.93,54.17Z"/><path class="cls-1" d="M126.24,52c.48.28.65,0,.8-.41l1.23.39c1.24,1.3-1.41,2.06-.18,2.65C127.65,55.61,125.27,53.38,126.24,52Z"/><path class="cls-1" d="M328.94,125.58c3.69-1.94-.38-2.28.35-5.3,2.69,2.21,6.33,3.92,8,6.64-.57,1.56-2.67.11-3.24,1.66C335.11,125.45,331,127.42,328.94,125.58Z"/><path class="cls-1" d="M152.81,66c.92-1.66.65,1.25,1.64,1.21-1.06,1.59-2.12,3.19-4.66,1.88C149.74,66.55,154,67.43,152.81,66Z"/><path class="cls-1" d="M330.61,130.85a6.4,6.4,0,0,1,3.08,3c2.3,0-1.64-.74,0-2,.67-.37,1.8.18,2.23-.63,1.34.84.15,3,3.08,3l-1,3.06c-2.95-3.94-1.74.31-6.31-1.36,2.29-2.57-4.59-3.4-1.5-7.93l3.67,1.19C333.39,131,331.62,130.17,330.61,130.85Z"/><path class="cls-1" d="M129.34,80c-2.28-2.33,3.32-4.91.76-6.52.58-1.49,2.13.49,2.45.79-1.68,1.83-.64,2.69-1.17,5.71a1.75,1.75,0,0,0-2.23.63C128.49,80.3,129,79.92,129.34,80Z"/><path class="cls-1" d="M344.17,145.37c2,.68,4.42,1.15,3.7,3.22-2.13.46-2.87-3-5.71-1.17C342,145.2,344.29,147.6,344.17,145.37Z"/><path class="cls-1" d="M337.3,149.91c.68.33,1.13.22,1.42-.22,1.8.1-1.37,2.75.43,2.85C338.71,153.54,336.34,151.31,337.3,149.91Z"/><path class="cls-1" d="M342.06,158.21c-.25-1.07.27-2.53-1.86-2.63.4-1.22.79-2.45,1.19-3.67.68.33,1.13.21,1.42-.22,2.4.48,2.48,2.14,3.69,3.22,1.16.27,1.05-1.95,2-2,3.3,7.34-7.72,4.1-10.3,8.84,2.94-1.58,7-.91,9.74-2.94,1.56.56-.2,2.83,2.47,2.83,1.37.36,1.1-2.51,1.8-3.48s2.89,1,3.45-.23a32.22,32.22,0,0,1-8,10.24c.67-2.18-1.73-4.48-.25-5.49.14-.92-1.76-.8-1.44-1.81-1.38-.36-1.11,2.51-1.81,3.47-1.45-1.33-5,.51-5.44,4.32-2.58-2.08-3.38-2.79-5.34-4.42,2.14-1.73,1.89-2.17,4.25-2.68-.51-2.57-2.81-1.22-4.07,0a7.2,7.2,0,0,1,4.41-7.36C337.91,156.17,340.2,158.78,342.06,158.21Z"/><path class="cls-1" d="M110.08,87.33c.5.59.18,1.61,1.44,1.81-.9.89-1,3.3-2.82,2.47C110.29,90.85,109.93,88.81,110.08,87.33Z"/><path class="cls-1" d="M69.31,77.53c.9,1.48,1.35-.06,2.25,1.41-.28,1.12-1.17,1-1.4,2.25-1.82-.1-.85-1.62-2.06-2A3,3,0,0,0,69.31,77.53Z"/><path class="cls-1" d="M111.78,94.64l2.45.79c-.73,1.39.69,1.69-.38,3.25,1.83.92,2.75,0,3.66-.84,2.24,3.16-4.65,2.12-2.81,4.5a23.88,23.88,0,0,0-6.08,2.09c-.9-1.18,2-3.43,3.63-2.88,0-.54-.41-.81-.22-1.43-2.25.59-4.4,1.38-5.45,4.33-4.47-1.26-5.43,2-8.53,1.3,3-1.48.83-3.69,3.62-4.92,2.34,2.5,5.23,1.23,7.32.34a4.47,4.47,0,0,0-1.44-1.82C109.47,98.77,110.47,96.39,111.78,94.64Z"/><path class="cls-1" d="M360.12,175.54c-1.39-.72-.56,2.89-2.43,1.24.16-2,1.35-2,1.8-3.48,2,.34,1.08,2.17,2.47,2.83C361.4,177,361.25,175.64,360.12,175.54Z"/><path class="cls-1" d="M337.31,172.9c-.2.61-.39,1.22-.59,1.83,3.27-1.53-2.27-2.9-.26-5.48,1.79.78,1.58,2.59,4.5,2.8-.11,1.25.83,2,.24,3.46-2.19-2.11-1-.33-1.21,1.64a4.23,4.23,0,0,1-3.26-.38c1.22-2.33-2.09-2.34-1.26-4.46Z"/><path class="cls-1" d="M92.79,109.46a4.47,4.47,0,0,0-1.44-1.82l1-3.06c2.88,1.24,1.23,5.46-.75,6.52-.42-.55-.86-1.1-1.23-.4C89.13,110.09,91.7,108.78,92.79,109.46Z"/><path class="cls-1" d="M75.44,102.5c1.71-.92,1.65.87,3.67,1.18a4.22,4.22,0,0,0-1.6,2.87c-2.28-.13-4,.89-5.89,1.48C73.13,105.54,76,106.68,75.44,102.5Z"/><path class="cls-1" d="M102,118.53c.14-.41.27-.82.4-1.23-1.92.19-3.45-.38-1.44-1.82l-1.22-.39c-1,0,0,.86-.6,1.84-2.14-.1-.76-2-1.86-2.63,2.27-1.83,5.12,2.68,4.86-2.49,2.89,1.36.24,2.37.46,4.88,1.74,1.4,1.1-1.83,2.84-.43,0,1.2-.51,2.64.24,3.45-.44,1.14-2.16-.23-2.43,1.25-.84-.43.37-1.9-.63-2.23-2.46.48.35,2.48-.58,3.87-1.57.26-3,.77-5.29-.36,2.38,4.88-2.38,7.56-5.41,8.39-2.1-.86,2.27-1.78.17-2.65.33-.68,1.29-.15,2,0-2-2.22,1-7-2.72-8.31.36-.62,1.35,0,1.62-.83,1.86,3.46,9.13,4,8.33-.69Z"/><path class="cls-1" d="M91.22,137.34c1.85.7,3.45-1.26,4.49.78-2.31,3.07-7.33.5-6.34-3.4,1.64,1.21,1.52-1,2-2.06,1.88,1.23-.06,1.24-.38,3.26C93.07,135.62,91.85,135.67,91.22,137.34Z"/><path class="cls-1" d="M350.6,223.84c1.36-1.16.84,2.93,3.89,2.61l-1,3.06c-1.7-1.34-1.6-3.61-3.91-4.65.21-.58.91-.23,1.42-.21C351.29,224.17,351,224,350.6,223.84Z"/><path class="cls-1" d="M84.62,149.41c.73,1.38-3.34,3-2.39,5.31-4-1.94-3.14,0-8.36-1.35,1.65-1.45,3.94-1.63,6.5-1.28-.19-1.26-2.23-1.58-.84-3.65C81.11,148.54,83.72,150.64,84.62,149.41Z"/><path class="cls-1" d="M342.79,237.54c1-2.19,1.62,1.68,4.49.77,0,1.54-.47,3.31-.16,4.68,1.32-1.07,1.24,1.26,2,0,1.8.1-1.37,2.74.43,2.84-.9.89-2.35.73-4.07,0,.68-1.2.11-1.76.18-2.65-2.73-1.63-5.36,2.1-5.05,3.1-1.26,1.1-2.32-2.18-3.89-2.61a39.6,39.6,0,0,1,3-5.11c1.12.27,1.05,1.16,2.25,1.4.93.15.8-1.76,1.82-1.44C344,238,343.22,237.83,342.79,237.54Z"/><path class="cls-1" d="M74.7,155c1.66.59,1.57-.63,2.45.79-.09,2.48-2.45.53-3.24,1.65C72.38,156.79,75.09,156.66,74.7,155Z"/><path class="cls-1" d="M343.1,249.14c.14-.41.27-.82.4-1.23,1.95,1.59,2.86.55,3.89,2.61a30.42,30.42,0,0,1-2.21,2.67C344.63,254.29,345.24,250.08,343.1,249.14Z"/><path class="cls-1" d="M77.88,168.19c3.67,3.74-2.6,4.58-4.63,5.94C72.6,171.8,77.87,172.53,77.88,168.19Z"/><path class="cls-1" d="M83.68,179.53c.69,1.41-3.19,2.37-4.86,2.48-.33-1.69.75-1.27-.43-2.84-1.37-.34-1.82,1.12-2.22,2.66-2.15.08-1.17-1.44-2-2,.72-1.59,2.93-.27,3.85-1.46C79.48,180,81.84,181.67,83.68,179.53Z"/><path class="cls-1" d="M75.79,206.05c-2.39-.55-2.33.77-4.05,2.07-1.12-.28-1-1.17-2.25-1.4.2-.62.4-1.23.59-1.84,2,1.21,2.43-.28,1-1,.17-1.15,2.39.73,1.44,1.82,2.24.1.67-1,1.6-2.86,1.3.19,1.88.74,1.44,1.82.49.28.66-.06.81-.42C77.2,204.77,75.89,204.92,75.79,206.05Z"/><path class="cls-1" d="M76.66,211.73c-.28.46-.82.42-1,1-.05,1.05,1.76,1.15.43,2.85C73.86,215.15,74.55,211.53,76.66,211.73Z"/><path class="cls-1" d="M78.37,221.08c2.67,0,1,2.19,1.66,3.24C79.75,225.07,77.74,222.47,78.37,221.08Z"/><path class="cls-1" d="M337.59,312.25c1.08,1.55-2.13,3.1-3.64,2.89C334.75,312.55,335.58,315.13,337.59,312.25Z"/><path class="cls-1" d="M296,304.91c-1,1.73-.1,2.43-.58,3.87-1.78-.11-.77-1.65-1.24-2.43a3.07,3.07,0,0,1-2,0c-.7,1.55.21,2.28,1.86,2.63-1.91,1.1-1.59,2.78-2.61,3.89-3.77-1.4-4.42-1.49-8.35-1.35.56-1-.11-1.31-.83-1.62-.39-1.67,2.32-1.79.79-2.45A32.61,32.61,0,0,0,296,304.91Z"/><path class="cls-1" d="M49.43,237.42c.63-1.09,1.07-2.56,2.63-1.86-.34.86-.66,1.7,0,2C51.25,238.35,51.21,237.13,49.43,237.42Z"/><path class="cls-1" d="M111.28,259.43c-.09,2.48-2.45.53-3.24,1.65C107,260.36,110.36,256.66,111.28,259.43Z"/><path class="cls-1" d="M81.12,254.42c2.08,3,3.32,1.07,6.32,1.36-.65,2.59-1.57,2.13-1.38,4.29-1-.56-1.31.1-1.63.83-.9-.93-2.4-4.18-4.5-2.81C79,256.91,82,256.54,81.12,254.42Z"/><path class="cls-1" d="M214.68,309.73c1,.15.87.92,1.64,1.21-1.17.77-2.83,3.09-.79,2.45.81,1-1.4,4.52-3.63,2.88.22,1.59,2.65,2.05,2.88,3.63-.46,1.86-2.88,1.46-3.46.24-3.57,1.63.05,4-.95,7.13l-2.45-.79c-1.17-1.62,1.82-5.36-1.48-5.89.11-1.46,1.45-.49,1.82-1.44-.23-2-1.89,1.52-3.45.24.09-2.16,2.27-.22,3-1.05-1.51-1.25-.32-3.08.77-4.48l3.06,1c.13-1.26-2.22-1.25-1-3C212.05,311.25,214.73,313.15,214.68,309.73Z"/><path class="cls-1" d="M268.36,327.75c-1,1.51.88,1.59,1.24,2.43-.82,2.39-3,2.13-4.86,2.48.15-1,.52-4.07-1.68-5.27,4.73-2.53,5.49-.15,11,1.53-.83,1.36-2.75.61-4.26.64.2-.61.39-1.22.59-1.83A3,3,0,0,1,268.36,327.75Z"/><path class="cls-1" d="M84.71,268.42c1.61.54,4,.67,2.47,2.83-1.78.3-2-2.62-3.06-1C83.3,269.7,84.61,269.55,84.71,268.42Z"/><path class="cls-1" d="M196,309.09c.57-1-.1-1.31-.83-1.62a3,3,0,0,0,1.21-1.64c.74.13,1,.49,1,1,.75-.2,1.08-1.2,2.23-.63-2,1.4-1.94,2.17-1.39,4.29-1-.15-.86-.92-1.63-1.21-.49-.28-.66,0-.82.41C195.11,309.36,195.62,309,196,309.09Z"/><path class="cls-1" d="M158.3,306.39c.28-1.5-1.76-1.82-.85-3.65a3.66,3.66,0,0,1,2.65.17c-.51-1.06-1.45-1.79.18-2.64-4.29-1.64-7.47,2.34-6.46,5.35-2.82-.81-2.57-.27-4.9-1.58-.19-2.16.73-1.7,1.38-4.29a17.08,17.08,0,0,1,5.49-.25c-.77-3.16,1.75-.62,2.83-2.47.17,3.6,5,1.77,6.56,4.82-2.28,1.06.61,4.31,1.44,1.82,2.27,2.33-1.52,4.59,2.09,6.08l-1,3.06c-.68-.33-1.14-.21-1.42.22-.39-3.66-4.79-2.28-4.13-6.07-2.49-1.2-4.35-1.18-4.66,1.88-1.57-1.06-1.87.35-3.26-.38,1.22-3.66-.71.29-1.44-1.82A5.15,5.15,0,0,1,158.3,306.39Z"/><path class="cls-1" d="M249.87,330.56c.66.35.14.73-.2.62.76,1.59-.27,2.8.24,3.45-2,1.49-1.67-2.51-1.46-3.85C249.13,331.11,249.58,331,249.87,330.56Z"/><path class="cls-1" d="M172.83,315.82c.08-.9-1.37-1-2.25-1.4.09-4.19,4-1.49,3-5.12l2.44.79c.18,1.79.07,3.72,1.07,5.08-1.2,1-3.65-.47-4.46,1.26C172,316.09,172.49,315.71,172.83,315.82Z"/><path class="cls-1" d="M247.87,334.65c-.77,2.15-3.09,1.28-4.66,1.88C244.69,335.82,246.54,332.55,247.87,334.65Z"/><path class="cls-1" d="M259.72,339.83c.1-1.46,1.45-.49,1.82-1.44.9.61-.48,4.95,1.66,3.24,1.11,1-1.95,2.09-2,4.09-1.21-.4-.24-1.93-2.05-2C259.13,341.41,263.65,341,259.72,339.83Z"/><path class="cls-1" d="M125.52,303.24c-1.22,4.65-3.37,4.16-3.18,7.76C121.16,310.79,121.13,301.66,125.52,303.24Z"/><path class="cls-1" d="M245.72,343.42c.47.83-.74,2.93-.76,6.52-3.06-.14-2.6-2.08-3.69-3.22C242.21,344.56,244.63,345.29,245.72,343.42Z"/><path class="cls-1" d="M173.31,322.73c-4,1-.52,4.72-5.46,4.32,1.05-1.72.1-2.43.57-3.87C170.55,325.73,170.41,321.27,173.31,322.73Z"/><path class="cls-1" d="M195.14,330.46c.78-.36,4.05,2.33,4.11,4-1.54-.4-3-.86-3.48-1.79A1.76,1.76,0,0,0,195.14,330.46Z"/><path class="cls-1" d="M176.21,328.4c.65.34.13.72-.2.61-.14.75,1,.88,1.64,1.21-1.44,1.66-4.05,3-4.88.45.27-1.12,1.16-1.05,1.4-2.25C175,328.75,175.87,329.08,176.21,328.4Z"/><path class="cls-1" d="M147.08,324.4c1.19,1.26.41,3.53,2.68,4.25a3,3,0,0,0-1.2,1.63l-3.07-1c.44-.69,1.13-3.82,0-2C144.33,326.82,146.7,325.14,147.08,324.4Z"/><path class="cls-1" d="M182.18,337.09c1.63,1.1-1.29,1.29-1,3.06-2-1.17-2.65.15-4.49-.77-.07-2.15,1.44-1.18,2-2.05.94.8-.27,1.14-.6,1.83A4.46,4.46,0,0,0,182.18,337.09Z"/><path class="cls-1" d="M193.93,353.06c1.57,1.06,1.87-.36,3.26.37-.7,4.3-3.78,3.93-6.68,3.93C191.64,355.91,193.86,356.57,193.93,353.06Z"/><path class="cls-1" d="M96.13,161.92c-1.4-.73-1.69.68-3.26-.38,1.52-2.31-.51-2.8.16-4.68,1,0,1.15-1.76,2.85-.44.49-1.78-2.27-1.9-1.46-3.85,1,2,2.1-1,4.48.78C96.44,156.7,96.6,157.79,96.13,161.92Z"/><path class="cls-1" d="M106.29,270.66l1.84.59c.13,2.15-.79,2.47-1.78,5.51a12.14,12.14,0,0,1,5.1,1c.15,2.38-3.68,2-2,4.08-2.51,1.58-.11-3.65-2.88-3.63-1.42,1.35-4.69,2.84-6.3.67-.08-2.16,1.44-1.18,2-2.06-.62-1.79-3.28.84-5.29-.35,1.16-2.74,3.23-3.69,5-5.14C103.6,272.79,105.4,273,106.29,270.66Z"/></svg>';
  };
  a.ImageShapeCircle = function () {
    a.SVGImage.call(this);
    this.height = this.width = 65;
  };
  a.ImageShapeCircle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeCircle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" width="65" height="65"><defs><style>.cls-1{fill:' + c + ';}</style></defs><circle class="cls-1" cx="32.5" cy="32.5" r="32.5"/></svg>';
  };
  a.ImageShapeDiamond = function () {
    a.SVGImage.call(this);
    this.width = 61.4;
    this.height = 75;
  };
  a.ImageShapeDiamond.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeDiamond.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.38 75" width="61.38" height="75"><defs><style>.cls-1{fill:' + c + ';}</style></defs><polygon class="cls-1" points="30.69 75 0 37.5 30.69 0 61.38 37.5 30.69 75"/></svg>';
  };
  a.ImageShapeHeart = function () {
    a.SVGImage.call(this);
    this.width = 75.2;
    this.height = 65;
  };
  a.ImageShapeHeart.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeHeart.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.16 65" width="75.16" height="65"><defs><style>.cls-1{fill:' + c + ';}</style></defs><path class="cls-1" d="M55.89,0A19.48,19.48,0,0,0,37.58,11.46,19.48,19.48,0,0,0,19.27,0C-1.39,0,0,19,0,19,0,42.39,37.58,65,37.58,65S75.14,42.39,75.14,19C75.14,19,76.56,0,55.89,0Z"/></svg>';
  };
  a.ImageShapeOctagon = function () {
    a.SVGImage.call(this);
    this.height = this.width = 75;
  };
  a.ImageShapeOctagon.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeOctagon.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="75" height="75"><defs><style>.cls-1{fill:' + c + ';}</style></defs><polygon class="cls-1" points="53.03 0 21.97 0 0 21.97 0 53.03 21.97 75 53.03 75 75 53.03 75 21.97 53.03 0"/></svg>';
  };
  a.ImageShapePentagon = function () {
    a.SVGImage.call(this);
    this.width = 78.9;
    this.height = 75;
  };
  a.ImageShapePentagon.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapePentagon.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.86 75" width="78.86" height="75"><defs><style>.cls-1{fill:' + c + ';}</style></defs><polygon class="cls-1" points="39.43 0 0 28.65 15.06 75 63.8 75 78.86 28.65 39.43 0"/></svg>';
  };
  a.ImageShapeRectangle = function () {
    a.SVGImage.call(this);
    this.width = 115.6;
    this.height = 65;
  };
  a.ImageShapeRectangle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeRectangle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.56 65" width="115.56" height="65"><defs><style>.cls-1{fill:' + c + ';}</style></defs><rect class="cls-1" width="115.56" height="65"/></svg>';
  };
  a.ImageShapeSquare = function () {
    a.SVGImage.call(this);
    this.height = this.width = 65;
  };
  a.ImageShapeSquare.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeSquare.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" width="65" height="65"><defs><style>.cls-1{fill:' + c + ';}</style></defs><rect class="cls-1" width="65" height="65"/></svg>';
  };
  a.ImageShapeStar = function () {
    a.SVGImage.call(this);
    this.width = 78.8;
    this.height = 75;
  };
  a.ImageShapeStar.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeStar.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.71 75" width="78.71" height="75"><defs><style>.cls-1{fill:' + c + ';}</style></defs><polygon class="cls-1" points="39.2 0 51.5 24.58 78.72 28.38 59.14 47.67 63.93 74.73 39.54 62.08 15.28 75 19.78 47.89 0 28.81 27.17 24.71 39.2 0"/></svg>';
  };
  a.ImageShapeTriangle = function () {
    a.SVGImage.call(this);
    this.width = 75.1;
    this.height = 65;
  };
  a.ImageShapeTriangle.prototype = Object.create(a.SVGImage.prototype);
  a.ImageShapeTriangle.prototype.getSVGString = function (c) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.06 65" width="75.06" height="65"><defs><style>.cls-1{fill:' + c + ';}</style></defs><polygon class="cls-1" points="37.53 0 0 65 75.06 65 37.53 0"/></svg>';
  };
  a.ImageManager = {
    getImage: function (c, b, d) {
      return this.images[c].getImage(b, d);
    },
    getImageDimensions: function (c) {
      return {
        width: this.images[c].width,
        height: this.images[c].height
      };
    },
    images: {
      "image-bow": new a.ImageItemBow(),
      "image-present": new a.ImageItemPresent(),
      "image-ornament-round1": new a.ImageItemOrnamentRound1(),
      "image-ornament-round2": new a.ImageItemOrnamentRound2(),
      "image-ornament-round3": new a.ImageItemOrnamentRound3(),
      "image-ornament-skinny1": new a.ImageItemOrnamentSkinny1(),
      "image-ornament-skinny2": new a.ImageItemOrnamentSkinny2(),
      "image-ornament-wide1": new a.ImageItemOrnamentWide1(),
      "image-ornament-wide2": new a.ImageItemOrnamentWide2(),
      "image-ornament-wide3": new a.ImageItemOrnamentWide3(),
      "image-candy-gumdrop": new a.ImageItemCandyGumdrop(),
      "image-candy-jellybean": new a.ImageItemCandyJellybean(),
      "image-candy-mint-swirl": new a.ImageItemCandyMintSwirl(),
      "image-candy-mint-wheel": new a.ImageItemCandyMintWheel(),
      "image-candy-sprinkle": new a.ImageItemCandySprinkle(),
      "image-candy-sprinkle-leaf": new a.ImageItemCandySprinkleLeaf(),
      "image-candy-sprinkle-round": new a.ImageItemCandySprinkleRound(),
      "image-candy-sprinkle-tree": new a.ImageItemCandySprinkleTree(),
      "image-candy-sucker": new a.ImageItemCandySucker(),
      "image-candy-wrapper1": new a.ImageItemCandyWrapper1(),
      "image-candy-wrapper2": new a.ImageItemCandyWrapper2(),
      "image-confetti-curve": new a.ImageItemConfettiCurve(),
      "image-confetti-triangle": new a.ImageItemConfettiTriangle(),
      "image-confetti-circle": new a.ImageItemConfettiCircle(),
      "image-confetti-outlined-circle": new a.ImageItemConfettiOutlinedCircle(),
      "image-confetti-squiggle": new a.ImageItemConfettiSquiggle(),
      "image-string-light": new a.ImageItemStringLight(),
      "texture-pencil": new a.ImageTexturePencil(),
      "texture-crayon": new a.ImageTextureCrayon(),
      "texture-paintbrush": new a.ImageTexturePaintbrush(),
      "texture-spray-color": new a.ImageTextureSpray(),
      "shape-circle": new a.ImageShapeCircle(),
      "shape-diamond": new a.ImageShapeDiamond(),
      "shape-heart": new a.ImageShapeHeart(),
      "shape-octagon": new a.ImageShapeOctagon(),
      "shape-pentagon": new a.ImageShapePentagon(),
      "shape-rectangle": new a.ImageShapeRectangle(),
      "shape-square": new a.ImageShapeSquare(),
      "shape-star": new a.ImageShapeStar(),
      "shape-triangle": new a.ImageShapeTriangle()
    }
  };
  a.PenGarland = function (c, b, d) {
    a.Tool.call(this, c, b);
    this.soundKey = b;
    this.textureName = "texture-" + b;
    this.points = [];
    this.sizeConfig = d && d.sizeConfig || {
      min: a.Constants.PEN_MIN,
      max: a.Constants.PEN_MAX
    };
    this.$image = c.find("#" + this.textureName);
    this.image = this.$image[0];
    this.height = this.$image.height();
    this.width = this.$image.width();
    this.lineColor = "";
    this.lineSize = 0;
    this.updateSize();
    this.spacing = 2 * this.currentSize;
    this.spaceUntilNext = 0;
    this.disableColorpicker = !0;
  };
  a.PenGarland.prototype = Object.create(a.Tool.prototype);
  a.PenGarland.prototype.draw = function (c, b) {
    var d = c.getContext("2d"),
      e = b.normX * c.width;
    c = b.normY * c.height;
    var f = b = this.currentSize;
    this.sizeConfig.scale && (b = this.sizeFactor * this.width, f = this.sizeFactor * this.height);
    var g = this.getOffsets(b, f),
      h = g.x;
    g = g.y;
    var l = this.image;
    this.points.push({
      x: e,
      y: c
    });
    if (1 == this.points.length) {
      var k = this.points[0];
      this.drawAlongCurve(k, k, k, d, l, e, c, b, f, h, g);
      this.lineColor && (d.fillStyle = this.lineColor, d.beginPath(), d.arc(k.x, k.y, this.lineSize / 2, 0, 2 * Math.PI), d.fill());
    } else if (2 == this.points.length) {
      k = this.points[0];
      var m = this.points[1];
      m = a.utils.midpoint(k, m);
      this.drawAlongCurve(k, k, m, d, l, e, c, b, f, h, g);
      this.lineColor && (d.lineJoin = "round", d.lineCap = "round", d.lineWidth = this.lineSize, d.strokeStyle = this.lineColor, d.beginPath(), d.moveTo(k.x, k.y), d.lineTo(m.x, m.y), d.stroke());
    } else {
      var n = this.points[this.points.length - 3];
      k = this.points[this.points.length - 2];
      m = this.points[this.points.length - 1];
      n = a.utils.midpoint(n, k);
      m = a.utils.midpoint(k, m);
      this.drawAlongCurve(n, k, m, d, l, e, c, b, f, h, g);
      this.lineColor && (d.lineJoin = "round", d.lineCap = "round", d.lineWidth = this.lineSize, d.strokeStyle = this.lineColor, d.beginPath(), d.moveTo(n.x, n.y), d.quadraticCurveTo(k.x, k.y, m.x, m.y), d.stroke());
    }
    return !0;
  };
  a.PenGarland.prototype.reset = function () {
    this.points = [];
    this.spaceUntilNext = 0;
    this.spacing = 2 * this.currentSize;
  };
  a.PenGarland.prototype.drawAlongCurve = function (c, b, d, e, f, g, h, l, k, m, n) {
    if ((g = a.utils.curveLength(c, b, d)) && isFinite(g)) if (g > this.spaceUntilNext) {
      for (h = this.spaceUntilNext; h < g;) {
        var p = a.utils.pointInCurve(h / g, c, b, d);
        this.drawItem(e, f, p, l, k, m, n);
        h += this.spacing;
      }
      window.santaApp.fire("sound-trigger", {
        name: "cd_" + this.soundKey + "_oneshot",
        args: [this.sizeFactor]
      });
      this.spaceUntilNext = h - g;
    } else this.spaceUntilNext -= g;
  };
  a.PenGarland.prototype.drawItem = function (c, b, d, e, f, g, h) {
    c.save();
    c.translate(d.x, d.y);
    c.drawImage(b, -g, -h, e, f);
    c.restore();
  };
  a.PenGarland.prototype.getOffsets = function (c, b) {
    return {
      x: c / 2,
      y: b / 2
    };
  };
  a.PenGarland.prototype.calculateDrawSize = function (c) {
    if (this.sizeConfig.scale) {
      var b = Math.max(this.height, this.width);
      this.sizeFactor = a.utils.map(c, this.sizeConfig.min, this.sizeConfig.max);
      return b * this.sizeFactor;
    }
    return a.utils.map(c, this.sizeConfig.min, this.sizeConfig.max);
  };
  a.PenBells = function (c, b, d) {
    a.PenGarland.call(this, c, b, d);
    this.lineColor = "#e43935";
    this.lineSize = 3;
    this.soundKey = b;
    this.disableColorpicker = !0;
  };
  a.PenBells.prototype = Object.create(a.PenGarland.prototype);
  a.PenBells.prototype.getOffsets = function (c) {
    return {
      x: c / 2,
      y: 0
    };
  };
  a.PenHangingLights = function (c, b, d) {
    a.PenGarland.call(this, c, b, d);
    this.lineColor = "#99eaff";
    this.lineSize = 3;
    this.soundKey = b;
    this.$image = c.find("#" + this.textureName + "1");
    this.image = this.$image[0];
    this.height = this.$image.height();
    this.width = this.$image.width();
    this.textures = [c.find("#" + this.textureName + "1"), c.find("#" + this.textureName + "2"), c.find("#" + this.textureName + "3")];
    this.spacing = this.currentSize / 2;
    this.spaceUntilNext = this.spacing / 2;
    this.disableColorpicker = !0;
  };
  a.PenHangingLights.prototype = Object.create(a.PenGarland.prototype);
  a.PenHangingLights.prototype.drawItem = function (c, b, d) {
    b = this.textures[Math.floor(3 * Math.random())];
    var e = b.width() * this.sizeFactor,
      f = b.height() * this.sizeFactor,
      g = 180 * d.angle / Math.PI;
    45 < g && 90 >= g || -45 > g && -90 <= g || (-90 > g ? g += 180 : 90 < g && (g -= 180), c.save(), c.translate(d.x, d.y), c.rotate(g * Math.PI / 180), c.drawImage(b[0], -e / 2, 0, e, f), c.restore());
  };
  a.PenHangingLights.prototype.reset = function () {
    this.points = [];
    this.spacing = this.currentSize / 2;
    this.spaceUntilNext = this.spacing / 2;
  };
  a.PenHangingLights.prototype.getOffsets = function (c) {
    return {
      x: c / 2,
      y: 0
    };
  };
  a.PenStringLights = function (c, b, d) {
    a.PenGarland.call(this, c, b, d);
    this.lineColor = "#212121";
    this.lineSize = 3;
    this.soundKey = b;
    this.$image = c.find("#" + this.textureName + "1");
    this.image = this.$image[0];
    this.height = this.$image.height();
    this.width = this.$image.width();
    this.textures = [c.find("#" + this.textureName + "1"), c.find("#" + this.textureName + "2"), c.find("#" + this.textureName + "3"), c.find("#" + this.textureName + "4")];
    this.textureIndex = 0;
    this.spacing = .75 * this.currentSize;
    this.spaceUntilNext = this.spacing / 2;
    this.disableColorpicker = this.faceUp = !0;
  };
  a.PenStringLights.prototype = Object.create(a.PenGarland.prototype);
  a.PenStringLights.prototype.drawItem = function (c, b, d) {
    b = this.textures[this.textureIndex];
    var e = b.width() * this.sizeFactor,
      f = b.height() * this.sizeFactor,
      g = 180 * d.angle / Math.PI;
    45 < g && 90 >= g || -45 > g && -90 <= g || (-90 > g ? g += 180 : 90 < g && (g -= 180), this.faceUp && (g += 180), c.save(), c.translate(d.x, d.y), c.rotate(g * Math.PI / 180), c.drawImage(b[0], -e / 2, .1 * -f, e, f), c.restore(), this.faceUp = !this.faceUp, this.textureIndex = (this.textureIndex + 1) % this.textures.length);
  };
  a.PenStringLights.prototype.reset = function () {
    this.points = [];
    this.spacing = .75 * this.currentSize;
    this.spaceUntilNext = this.spacing / 2;
  };
  a.PenStringLights.prototype.getOffsets = function (c, b) {
    return {
      x: c / 2,
      y: .1 * b
    };
  };
  a.TextureDrawer = function (c, b, d) {
    a.Tool.call(this, c, b);
    this.soundKey = b;
    this.textureName = "texture-" + b;
    this.drawFrequency = d && d.drawFrequency || 4;
    this.points = [];
    this.monotone = d && d.monotone || !1;
    this.noRotation = d && d.noRotation || !1;
    this.sizeConfig = d && d.sizeConfig || {
      min: a.Constants.PEN_MIN,
      max: a.Constants.PEN_MAX
    };
    this.monotone && (this.$image = c.find("#" + this.textureName), this.image = this.$image[0], this.height = this.$image.height(), this.width = this.$image.width(), this.disableColorpicker = !0);
  };
  a.TextureDrawer.prototype = Object.create(a.Tool.prototype);
  a.TextureDrawer.prototype.draw = function (c, b, d, e, f) {
    var g = c.getContext("2d");
    d = b.normX * c.width;
    c = b.normY * c.height;
    var h = this.currentSize,
      l = this.currentSize;
    this.sizeConfig.scale && (h = this.sizeFactor * this.width, l = this.sizeFactor * this.height);
    var k = h / 2,
      m = l / 2;
    var n = this.monotone ? this.image : a.ImageManager.getImage(this.textureName, f);
    this.points.push({
      x: d,
      y: c
    });
    if (1 == this.points.length) {
      var p = this.points[0];
      a.utils.simpleTimeout(function () {
        g.save();
        g.drawImage(n, p.x - k, p.y - m, h, l);
        g.restore();
      }.bind(this));
    } else if (2 == this.points.length) {
      p = this.points[0];
      f = this.points[1];
      var r = a.utils.midpoint(p, f),
        q = a.utils.curveLength(p, p, r);
      if (!q || !isFinite(q)) return;
      a.utils.simpleTimeout(function () {
        for (var b = 0; b < q; b += h / this.drawFrequency) {
          var c = a.utils.pointInCurve(b / q, p, p, r),
            d = this.noRotation ? 0 : Math.random();
          g.save();
          g.translate(c.x, c.y);
          g.rotate(2 * d * Math.PI);
          g.drawImage(n, -k, -m, h, l);
          g.restore();
        }
      }.bind(this));
    } else {
      c = this.points[this.points.length - 3];
      p = this.points[this.points.length - 2];
      f = this.points[this.points.length - 1];
      var t = a.utils.midpoint(c, p),
        u = a.utils.midpoint(p, f);
      q = a.utils.curveLength(t, p, u);
      if (!q || !isFinite(q)) return;
      a.utils.simpleTimeout(function () {
        for (var b = 0; b < q; b += h / this.drawFrequency) {
          var c = a.utils.pointInCurve(b / q, t, p, u),
            d = this.noRotation ? 0 : Math.random();
          g.save();
          g.translate(c.x, c.y);
          g.rotate(2 * d * Math.PI);
          g.drawImage(n, -k, -m, h, l);
          g.restore();
        }
      }.bind(this));
    }
    return !0;
  };
  a.TextureDrawer.prototype.reset = function () {
    this.points = [];
  };
  a.TextureDrawer.prototype.calculateDrawSize = function (c) {
    if (this.sizeConfig.scale) {
      var b = Math.max(this.height, this.width);
      this.sizeFactor = a.utils.map(c, this.sizeConfig.min, this.sizeConfig.max);
      return b * this.sizeFactor;
    }
    return a.utils.map(c, this.sizeConfig.min, this.sizeConfig.max);
  };
  a.Pencil = function (c, b) {
    a.TextureDrawer.call(this, c, b);
    this.drawFrequency = 2;
    this.soundKey = b;
  };
  a.Pencil.prototype = Object.create(a.TextureDrawer.prototype);
  a.Pencil.prototype.calculateDrawSize = function (c) {
    return a.utils.map(c, a.Constants.PENCIL_MIN, a.Constants.PENCIL_MAX);
  };
  a.Shape = function (c, b) {
    a.Tool.call(this, c, "shape-" + b);
    this.shapeName = "shape-" + b;
    this.soundKey = "cd_shape_place";
    this.stamped = !1;
    this.sizeMultiplier = 1;
    this.shapeImages = {};
    b = a.ImageManager.getImageDimensions(this.shapeName);
    this.height = b.height;
    this.width = b.width;
    this.hoverPreviewEl = c.find(".Tool-hover-preview--" + this.shapeName);
    this.currentAngle = 0;
  };
  a.Shape.prototype = Object.create(a.Tool.prototype);
  a.Shape.prototype.draw = function (c, b) {
    if (this.stamped) return !1;
    var d = c.getContext("2d"),
      e = this.width * this.sizeMultiplier,
      f = this.height * this.sizeMultiplier,
      g = b.normX * c.width;
    c = b.normY * c.height;
    b = e / 2;
    var h = f / 2,
      l = this.el.attr("data-tool-color");
    l = a.ImageManager.getImage(this.shapeName, l);
    var k = this.currentAngle * Math.PI / 180;
    d.save();
    d.translate(g, c);
    d.rotate(k);
    d.drawImage(l, -b, -h, e, f);
    d.restore();
    return this.stamped = !0;
  };
  a.Shape.prototype.startMousedown = function () {
    a.utils.triggerOnce(this.soundKey);
    this.el.addClass("Tool--down");
  };
  a.Shape.prototype.stopMousedown = function () {
    a.utils.triggerReset(this.soundKey);
    this.el.removeClass("Tool--down");
  };
  a.Shape.prototype.reset = function () {
    this.stamped = !1;
  };
  a.Shape.prototype.updateSize = function (c) {
    this.sizeMultiplier = a.utils.map(c, a.Constants.SHAPE_MIN, a.Constants.SHAPE_MAX);
    this.currentSize = this.calculateDrawSize(c);
  };
  a.Shape.prototype.calculateDrawSize = function () {
    return Math.max(this.width * this.sizeMultiplier, this.height * this.sizeMultiplier);
  };
  a.Shape.prototype.updateAngle = function (c) {
    this.currentAngle += c;
    this.hoverPreviewEl.css({
      transform: "translate(-50%, -50%) rotate(" + this.currentAngle + "deg)"
    });
  };
  a.Shape.prototype.preloadImage = function (c) {
    return a.ImageManager.getImage(this.shapeName, c);
  };
  a.SprayColor = function (c, b) {
    a.TextureDrawer.call(this, c, b);
  };
  a.SprayColor.prototype = Object.create(a.TextureDrawer.prototype);
  a.SprayColor.prototype.calculateDrawSize = function (c) {
    return a.utils.map(c, a.Constants.SPRAY_MIN, a.Constants.SPRAY_MAX);
  };
  a.SprayPattern = function (c, b, d) {
    a.Tool.call(this, c, b);
    this.soundKey = b;
    this.images = d.images || [];
    this.imageIndex = 0;
    this.currentSize = a.Constants.SPRAY_CIRCLE_SIZE;
    this.maxOffset = d.maxOffset || 0;
    this.density = d.density || 1;
    this.noRotate = d.noRotate;
    this.disableColorpicker = this.disableResize = !0;
    this.populateImages(c);
  };
  a.SprayPattern.prototype = Object.create(a.Tool.prototype);
  a.SprayPattern.prototype.draw = function (c, b) {
    var d = c.getContext("2d"),
      e = b.normX * c.width,
      f = b.normY * c.height;
    if (1 <= this.density || Math.random() < this.density) for (c = 0; c < this.density; c++) {
      this.imageIndex = Math.floor(Math.random() * this.images.length);
      var g = this.images[this.imageIndex],
        h = g.width,
        l = g.height,
        k = -h / 2 + this.getRandomOffset(),
        m = -l / 2 + this.getRandomOffset(),
        n;
      g.elem ? n = g.elem : g.name && (n = a.ImageManager.getImage(g.name, g.color));
      a.utils.simpleTimeout(function () {
        d.save();
        d.translate(e, f);
        this.noRotate || g.noRotate || d.rotate(2 * Math.random() * Math.PI);
        d.drawImage(n, k, m, h, l);
        d.restore();
      });
    }
    return !0;
  };
  a.SprayPattern.prototype.populateImages = function (c) {
    for (var b = this.images.length - 1; 0 <= b; b--) {
      var d = this.images[b],
        e = d.sizeFactor || 1;
      if (d.elemId) d.elem = c.find("#" + d.elemId), d.width = d.elem.width() * e, d.height = d.elem.height() * e, d.elem = d.elem[0];else if (d.name) {
        var f = a.ImageManager.getImageDimensions(d.name);
        d.width = f.width * e;
        d.height = f.height * e;
      }
      if (d.frequencyFactor) for (e = 0; e < d.frequencyFactor; e++) this.images.push(d);
    }
  };
  a.SprayPattern.prototype.preloadImage = function () {
    for (var c = this.images.length - 1; 0 <= c; c--) {
      var b = this.images[c];
      b.name && a.ImageManager.getImage(b.name, b.color);
    }
  };
  a.SprayPattern.prototype.getRandomOffset = function () {
    return Math.random() * this.maxOffset * 2 - this.maxOffset;
  };
  a.SprayPattern.prototype.calculateDrawSize = function () {
    return a.Constants.SPRAY_CIRCLE_SIZE;
  };
  a.SpraySnow = function (c, b) {
    a.Tool.call(this, c, b);
    this.soundKey = b;
    this.density = a.Constants.SPRAY_SNOW_DENSITY;
    this.maxOffset = a.Constants.SPRAY_SNOW_OFFSET;
    this.disableColorpicker = this.disableResize = !0;
  };
  a.SpraySnow.prototype = Object.create(a.Tool.prototype);
  a.SpraySnow.prototype.draw = function (c, b) {
    var d = c.getContext("2d"),
      e = b.normX * c.width;
    c = b.normY * c.height;
    for (b = 0; b < this.density; b++) {
      var f = Math.random() * a.Constants.SPRAY_SNOW_MAX_SIZE,
        g = Math.random() * (1 - a.Constants.SPRAY_SNOW_MIN_OPACITY) + a.Constants.SPRAY_SNOW_MIN_OPACITY;
      d.save();
      d.fillStyle = "rgba(242, 250, 255, " + g + ")";
      d.beginPath();
      d.arc(e + this.getRandomOffset(), c + this.getRandomOffset(), f, 0, 2 * Math.PI);
      d.fill();
      d.restore();
    }
    return !0;
  };
  a.SpraySnow.prototype.getRandomOffset = function () {
    return Math.random() * this.maxOffset * 2 - this.maxOffset;
  };
  a.SpraySnow.prototype.calculateDrawSize = function () {
    return a.Constants.SPRAY_CIRCLE_SIZE;
  };
  a.Stamp = function (c, b) {
    a.Tool.call(this, c, "stamp-" + b);
    this.stampName = b;
    this.imageName = "image-" + b;
    this.soundKey = "cd_stamp_down";
    this.stamped = !1;
    this.sizeMultiplier = 1;
    this.stampImages = {};
    b = a.ImageManager.getImageDimensions(this.imageName);
    this.height = b.height;
    this.width = b.width;
    this.hoverPreviewEl = c.find(".Tool-hover-preview--stamp-" + this.stampName);
    this.currentAngle = 0;
  };
  a.Stamp.prototype = Object.create(a.Tool.prototype);
  a.Stamp.prototype.draw = function (c, b) {
    if (this.stamped) return !1;
    var d = c.getContext("2d"),
      e = this.width * this.sizeMultiplier,
      f = this.height * this.sizeMultiplier,
      g = b.normX * c.width;
    c = b.normY * c.height;
    b = e / 2;
    var h = f / 2,
      l = this.el.attr("data-tool-color");
    l = a.ImageManager.getImage(this.imageName, l);
    var k = this.currentAngle * Math.PI / 180;
    d.save();
    d.translate(g, c);
    d.rotate(k);
    d.drawImage(l, -b, -h, e, f);
    d.restore();
    return this.stamped = !0;
  };
  a.Stamp.prototype.startMousedown = function () {
    a.utils.triggerOnce(this.soundKey, [this.sizeMultiplier]);
    this.el.addClass("Tool--down");
  };
  a.Stamp.prototype.stopMousedown = function () {
    a.utils.triggerReset(this.soundKey);
    this.el.removeClass("Tool--down");
  };
  a.Stamp.prototype.reset = function () {
    this.stamped = !1;
  };
  a.Stamp.prototype.updateSize = function (c) {
    this.sizeMultiplier = a.utils.map(c, a.Constants.STAMP_MIN, a.Constants.STAMP_MAX);
    this.currentSize = this.calculateDrawSize(c);
  };
  a.Stamp.prototype.calculateDrawSize = function () {
    return Math.max(this.width * this.sizeMultiplier, this.height * this.sizeMultiplier);
  };
  a.Stamp.prototype.preloadImage = function (c) {
    return a.ImageManager.getImage(this.imageName, c);
  };
  a.Stamp.prototype.updateAngle = function (c) {
    this.currentAngle += c;
    this.hoverPreviewEl.css({
      transform: "translate(-50%, -50%) rotate(" + this.currentAngle + "deg)"
    });
  };
  a.Sticker = function (c, b, d) {
    a.Tool.call(this, c, "sticker-" + b);
    this.stickerName = "sticker-" + b;
    this.sticker = c.find("#" + this.stickerName)[0];
    this.soundKey = "cd_sticker_place";
    this.stamped = !1;
    this.sizeMultiplier = 1;
    this.addlMultiplier = d || 1;
    this.hoverPreviewEl = c.find(".Tool-hover-preview--default");
    this.currentAngle = 0;
  };
  a.Sticker.prototype = Object.create(a.Tool.prototype);
  a.Sticker.prototype.draw = function (c, b) {
    if (this.stamped) return !1;
    var d = c.getContext("2d"),
      e = this.sticker.width * this.sizeMultiplier,
      f = this.sticker.height * this.sizeMultiplier,
      g = b.normX * c.width;
    c = b.normY * c.height;
    b = e / 2;
    var h = f / 2,
      l = this.currentAngle * Math.PI / 180;
    d.save();
    d.translate(g, c);
    d.rotate(l);
    d.drawImage(this.sticker, -b, -h, e, f);
    d.restore();
    return this.stamped = !0;
  };
  a.Sticker.prototype.startMousedown = function () {
    a.utils.triggerOnce(this.soundKey);
    this.el.addClass("Tool--down");
  };
  a.Sticker.prototype.stopMousedown = function () {
    a.utils.triggerReset(this.soundKey);
    this.el.removeClass("Tool--down");
  };
  a.Sticker.prototype.reset = function () {
    this.stamped = !1;
  };
  a.Sticker.prototype.updateSize = function (c) {
    this.sizeMultiplier = a.utils.map(c, a.Constants.STICKER_MIN, a.Constants.STICKER_MAX) * this.addlMultiplier;
    this.currentSize = this.calculateDrawSize(c);
  };
  a.Sticker.prototype.calculateDrawSize = function () {
    return Math.max(this.sticker.width * this.sizeMultiplier, this.sticker.height * this.sizeMultiplier);
  };
  a.Sticker.prototype.updateAngle = function (c) {
    this.currentAngle += c;
    this.hoverPreviewEl.css({
      transform: "translate(-50%, -50%) rotate(" + this.currentAngle + "deg)"
    });
  };
  a.Tools = function (c, b) {
    this.game_ = c;
    this.sliders = $("[data-slider]", b);
    this.rotators = $("[data-rotator]", b);
    this.primaryMenu = b.find(".Tools--primary");
    this.categoryPickers = this.primaryMenu.find("[data-tool-category-picker]");
    this.toolDisplay = this.primaryMenu.find("[data-tool-display]");
    this.secondaryMenu = b.find(".Tools--secondary");
    this.secondaryMenuToggle = this.secondaryMenu.find("[data-tool-tray-toggle]");
    this.categoryMenus = this.secondaryMenu.find("[data-tool-category-menu]");
    this.categoryTrays = this.secondaryMenu.find("[data-tool-category-tray]");
    this.categoryTools = this.categoryTrays.find("[data-tool]");
    this.categoryMenuNavs = this.categoryMenus.find("[data-tool-category-nav]");
    this.categoryMenuNavBtns = this.categoryMenuNavs.find("[data-tool-nav]");
    this.snowButton = b.find(".Category--snow");
    this.subcategoryPickers = this.categoryMenus.find("[data-tool-subcategory-picker]");
    this.subcategoryMenus = this.categoryMenus.find("[data-tool-subcategory-menu]");
    this.tertiaryMenu = b.find(".Tools--tertiary");
    this.tertiaryMenuMobile = this.tertiaryMenu.find(".Tools-mobile");
    this.mobileEdit = this.tertiaryMenuMobile.find(".Tools-edit");
    this.mobileRotate = this.tertiaryMenuMobile.find(".Tools-rotator");
    this.mobileSlider = this.tertiaryMenuMobile.find(".Tools-slider");
    this.tertiaryMenuButtons = this.tertiaryMenu.find(".Button");
    this.mobileEraser = this.tertiaryMenuMobile.find('[data-tool="eraser-mobile"]');
    this.categoryPickers.on("click.santascanvas touchend.santascanvas", this.onCategoryClick_.bind(this));
    this.subcategoryPickers.on("click.santascanvas touchend.santascanvas", this.onSubcategoryClick_.bind(this));
    this.categoryMenuNavBtns.on("click.santascanvas touchend.santascanvas", this.onNavClick_.bind(this));
    this.mobileEraser.on("click.santascanvas touchend.santascanvas", this.onCategoryClick_.bind(this));
    this.secondaryMenuToggle.on("click.santascanvas touchend.santascanvas", this.onToggleClick_.bind(this));
    this.categoryPickers.on("mouseenter.santascanvas", this.onCategoryOver_.bind(this));
    this.categoryMenuNavBtns.on("mouseenter.santascanvas", this.onGenericOver_.bind(this));
    this.categoryTools.on("mouseenter.santascanvas", this.onCategoryToolsOver_.bind(this));
    this.tertiaryMenuButtons.on("mouseenter.santascanvas", this.onGenericOver_.bind(this));
    this.snowButton.on("mouseenter.santascanvas", this.onSnowButtonOver_.bind(this));
    this.lastSize = 0;
    this.secondaryMenuToggled = !1;
    this.pencil = new a.TextureDrawer(b, "pencil", {
      drawFrequency: 7,
      sizeConfig: {
        min: a.Constants.PENCIL_MIN,
        max: a.Constants.PENCIL_MAX
      }
    });
    this.crayon = new a.TextureDrawer(b, "crayon");
    this.marker = new a.Marker(b, "marker");
    this.paintbrush = new a.TextureDrawer(b, "paintbrush");
    this.tinsel = new a.TextureDrawer(b, "tinsel", {
      sizeConfig: {
        min: a.Constants.TINSEL_MIN,
        max: a.Constants.TINSEL_MAX,
        scale: !0
      },
      monotone: !0
    });
    this.icing = new a.TextureDrawer(b, "icing", {
      sizeConfig: {
        min: a.Constants.FROSTING_MIN,
        max: a.Constants.FROSTING_MAX,
        scale: !0
      },
      noRotation: !0,
      monotone: !0,
      drawFrequency: 8
    });
    this.garland = new a.PenGarland(b, "garland", {
      sizeConfig: {
        min: .5,
        max: 2.5,
        scale: !0
      }
    });
    this.neon = new a.Neon(b, "neon");
    this.bell = new a.PenBells(b, "bell", {
      sizeConfig: {
        min: .1,
        max: .3,
        scale: !0
      }
    });
    this.hangingLights = new a.PenHangingLights(b, "hanging-lights", {
      sizeConfig: {
        min: .1,
        max: .3,
        scale: !0
      }
    });
    this.stringLights = new a.PenStringLights(b, "string-lights", {
      sizeConfig: {
        min: .25,
        max: 1,
        scale: !0
      }
    });
    this.spray = new a.SprayColor(b, "spray-color");
    this.spraySprinkles = new a.SprayPattern(b, "spray-sprinkles", a.Constants.SPRINKLE_SPRAY_CONFIG);
    this.sprayCandy = new a.SprayPattern(b, "spray-candy", a.Constants.CANDY_SPRAY_CONFIG);
    this.sprayConfetti = new a.SprayPattern(b, "spray-confetti", a.Constants.CONFETTI_SPRAY_CONFIG);
    this.sprayHoliday = new a.SprayPattern(b, "spray-holiday", a.Constants.HOLIDAY_SPRAY_CONFIG);
    this.sprayOcean = new a.SprayPattern(b, "spray-ocean", a.Constants.OCEAN_SPRAY_CONFIG);
    this.sprayOrnaments = new a.SprayPattern(b, "spray-ornaments", a.Constants.ORNAMENT_SPRAY_CONFIG);
    this.spraySnow = new a.SpraySnow(b, "spray-snow");
    this.spraySnowflakes = new a.SprayPattern(b, "spray-snowflakes", a.Constants.SNOWFLAKE_SPRAY_CONFIG);
    this.sceneAir = new a.LayerTool(b, "air", a.LayerTool.Layer.BACKGROUND);
    this.sceneAirport = new a.LayerTool(b, "airport", a.LayerTool.Layer.BACKGROUND);
    this.sceneBeach = new a.LayerTool(b, "beach", a.LayerTool.Layer.BACKGROUND);
    this.sceneDock = new a.LayerTool(b, "dock", a.LayerTool.Layer.BACKGROUND);
    this.sceneGingerbread = new a.LayerTool(b, "gingerbread", a.LayerTool.Layer.BACKGROUND);
    this.sceneIceberg = new a.LayerTool(b, "iceberg", a.LayerTool.Layer.BACKGROUND);
    this.sceneLivingroom = new a.LayerTool(b, "livingroom", a.LayerTool.Layer.BACKGROUND);
    this.sceneNight = new a.LayerTool(b, "night", a.LayerTool.Layer.BACKGROUND);
    this.sceneNone = new a.LayerTool(b, "none", a.LayerTool.Layer.BACKGROUND);
    this.sceneSnow = new a.LayerTool(b, "snow", a.LayerTool.Layer.BACKGROUND);
    this.sceneUnderwater = new a.LayerTool(b, "underwater", a.LayerTool.Layer.BACKGROUND);
    this.eraser = new a.Eraser(b, "eraser");
    this.eraserMobile = new a.Eraser(b, "eraser-mobile");
    this.shapeCircle = new a.Shape(b, "circle");
    this.shapeDiamond = new a.Shape(b, "diamond");
    this.shapeHeart = new a.Shape(b, "heart");
    this.shapeOctagon = new a.Shape(b, "octagon");
    this.shapePentagon = new a.Shape(b, "pentagon");
    this.shapeRectangle = new a.Shape(b, "rectangle");
    this.shapeSquare = new a.Shape(b, "square");
    this.shapeStar = new a.Shape(b, "star");
    this.shapeTriangle = new a.Shape(b, "triangle");
    this.stampBow = new a.Stamp(b, "bow");
    this.stampPresent = new a.Stamp(b, "present");
    this.stampOrnamentRound1 = new a.Stamp(b, "ornament-round1");
    this.stampOrnamentRound2 = new a.Stamp(b, "ornament-round2");
    this.stampOrnamentRound3 = new a.Stamp(b, "ornament-round3");
    this.stampOrnamentSkinny1 = new a.Stamp(b, "ornament-skinny1");
    this.stampOrnamentSkinny2 = new a.Stamp(b, "ornament-skinny2");
    this.stampOrnamentWide1 = new a.Stamp(b, "ornament-wide1");
    this.stampOrnamentWide2 = new a.Stamp(b, "ornament-wide2");
    this.stampCandyGumdrop = new a.Stamp(b, "candy-gumdrop");
    this.stampCandyJellybean = new a.Stamp(b, "candy-jellybean");
    this.stampCandyMintSwirl = new a.Stamp(b, "candy-mint-swirl");
    this.stampCandyMintWheel = new a.Stamp(b, "candy-mint-wheel");
    this.stampCandySucker = new a.Stamp(b, "candy-sucker");
    this.stampCandyWrapper1 = new a.Stamp(b, "candy-wrapper1");
    this.stampCandyWrapper2 = new a.Stamp(b, "candy-wrapper2");
    this.rollerCheckered = new a.PaintRoller(b, "checkered");
    this.rollerDiagonal = new a.PaintRoller(b, "diagonal");
    this.rollerHorizontal = new a.PaintRoller(b, "horizontal");
    this.rollerPolkadots = new a.PaintRoller(b, "polkadots");
    this.rollerSnowflakes = new a.PaintRoller(b, "snowflakes");
    this.rollerTrees = new a.PaintRoller(b, "trees");
    this.rollerVertical = new a.PaintRoller(b, "vertical");
    this.stickerDinosaur = new a.Sticker(b, "dinosaur");
    this.stickerFishTeal = new a.Sticker(b, "fish-teal", 3);
    this.stickerSanta = new a.Sticker(b, "santa", 1.5);
    this.stickerCactus = new a.Sticker(b, "cactus", 1.5);
    this.stickerIgloo = new a.Sticker(b, "igloo", 1.5);
    this.stickerTreePalm = new a.Sticker(b, "tree-palm");
    this.stickerBrownBear = new a.Sticker(b, "brown-bear");
    this.stickerFishYellow = new a.Sticker(b, "fish-yellow", 3);
    this.stickerGingerbreadMan = new a.Sticker(b, "gingerbread-man", 1.5);
    this.stickerMrsClaus = new a.Sticker(b, "mrs-claus", 1.5);
    this.stickerNarwhal = new a.Sticker(b, "narwhal");
    this.stickerPenguinPresents = new a.Sticker(b, "penguin-presents", 2);
    this.stickerRudolphFront = new a.Sticker(b, "rudolph-front");
    this.stickerRudolphSide = new a.Sticker(b, "rudolph-side");
    this.stickerSantaSled = new a.Sticker(b, "santa-sled", 1.5);
    this.stickerSnowMonster = new a.Sticker(b, "snow-monster");
    this.stickerCloud1 = new a.Sticker(b, "cloud1", 1);
    this.stickerCloud2 = new a.Sticker(b, "cloud2", 2);
    this.stickerCloud3 = new a.Sticker(b, "cloud3", 2);
    this.stickerCoralLarge = new a.Sticker(b, "coral-large", 3);
    this.stickerCoralMedium = new a.Sticker(b, "coral-medium", 3);
    this.stickerCoralSmall = new a.Sticker(b, "coral-small", 3);
    this.stickerMoon = new a.Sticker(b, "moon");
    this.stickerSeaweedGreen = new a.Sticker(b, "seaweed-green", 3);
    this.stickerSeaweedLime = new a.Sticker(b, "seaweed-lime", 3);
    this.stickerSun = new a.Sticker(b, "sun");
    this.stickerTreeHoliday = new a.Sticker(b, "tree-holiday");
    this.stickerTreesBlue = new a.Sticker(b, "trees-blue");
    this.stickerTreesGreen = new a.Sticker(b, "trees-green");
    this.stickerBeachBall = new a.Sticker(b, "beach-ball", 2);
    this.stickerBell = new a.Sticker(b, "bell", 1.5);
    this.stickerCandle = new a.Sticker(b, "candle", 4);
    this.stickerClock = new a.Sticker(b, "clock", 1.5);
    this.stickerDiscoBall = new a.Sticker(b, "disco-ball");
    this.stickerFirewood = new a.Sticker(b, "firewood", 2);
    this.stickerFrame1 = new a.Sticker(b, "frame1", 2);
    this.stickerFrame2 = new a.Sticker(b, "frame2", 2);
    this.stickerFrame3 = new a.Sticker(b, "frame3", 2);
    this.stickerHolly = new a.Sticker(b, "holly", 3);
    this.stickerPresentsStack = new a.Sticker(b, "presents-stack", 1.5);
    this.stickerRecordPlayer = new a.Sticker(b, "record-player", 2);
    this.stickerRedBow = new a.Sticker(b, "red-bow", 4);
    this.stickerShowLights = new a.Sticker(b, "show-lights", 1.5);
    this.stickerSnowglobeSnowman = new a.Sticker(b, "snowglobe-snowman", 3);
    this.stickerSnowglobeTree = new a.Sticker(b, "snowglobe-tree", 3);
    this.stickerStereo = new a.Sticker(b, "stereo", 2);
    this.stickerStockingGreen = new a.Sticker(b, "stocking-green", 2.5);
    this.stickerStockingPink = new a.Sticker(b, "stocking-pink", 2.5);
    this.stickerStockingRed = new a.Sticker(b, "stocking-red", 2.5);
    this.stickerStockingYellow = new a.Sticker(b, "stocking-yellow", 2.5);
    this.stickerTreasureClosed = new a.Sticker(b, "treasure-closed", 2);
    this.stickerTreasureOpen = new a.Sticker(b, "treasure-open", 2);
    this.stickerWindow = new a.Sticker(b, "window", 2);
    this.stickerWreath = new a.Sticker(b, "wreath", 2);
    this.stickerElf1 = new a.Sticker(b, "elf1", 1.5);
    this.stickerElf2 = new a.Sticker(b, "elf2", 1.5);
    this.stickerElf3 = new a.Sticker(b, "elf3", 1.5);
    this.stickerElf4 = new a.Sticker(b, "elf4", 1.5);
    this.stickerElf5 = new a.Sticker(b, "elf5", 1.5);
    this.stickerElf6 = new a.Sticker(b, "elf6", 1.5);
    this.stickerElf7 = new a.Sticker(b, "elf7", 1.5);
    this.stickerElf8 = new a.Sticker(b, "elf8", 1.5);
    this.stickerElf9 = new a.Sticker(b, "elf9", 1.5);
    this.stickerElf10 = new a.Sticker(b, "elf10", 1.5);
    this.stickerElf11 = new a.Sticker(b, "elf11", 1.5);
    this.stickerElf12 = new a.Sticker(b, "elf12", 1.5);
    this.stickerElf13 = new a.Sticker(b, "elf13", 1.5);
    this.stickerElf14 = new a.Sticker(b, "elf14", 1.5);
    this.stickerElf15 = new a.Sticker(b, "elf15", 1.5);
    this.stickerElf16 = new a.Sticker(b, "elf16", 1.5);
    this.stickerElf17 = new a.Sticker(b, "elf17", 1.5);
    this.stickerElf18 = new a.Sticker(b, "elf18", 1.5);
    this.stickerElf19 = new a.Sticker(b, "elf19", 1.5);
    this.stickerElf20 = new a.Sticker(b, "elf20", 1.5);
    this.stickerElf21 = new a.Sticker(b, "elf21", 1.5);
    this.stickerElf22 = new a.Sticker(b, "elf22", 1.5);
    this.stickerElf23 = new a.Sticker(b, "elf23", 1.5);
    this.stickerElf24 = new a.Sticker(b, "elf24", 1.5);
    this.stickerElf25 = new a.Sticker(b, "elf25", 1.5);
    this.stickerElf26 = new a.Sticker(b, "elf26", 1.5);
    this.stickerElf27 = new a.Sticker(b, "elf27", 1.5);
    this.stickerElf28 = new a.Sticker(b, "elf28", 1.5);
    this.stickerElf29 = new a.Sticker(b, "elf29", 1.5);
    this.stickerElfDuckFloat = new a.Sticker(b, "elf-duck-float", 1.5);
    this.stickerElfJamGuitar = new a.Sticker(b, "elf-jam-guitar", 1.5);
    this.stickerElfJamSing = new a.Sticker(b, "elf-jam-sing", 1.5);
    this.stickerElfMermaid = new a.Sticker(b, "elf-mermaid", 1.5);
    this.stickerElfMerman = new a.Sticker(b, "elf-merman", 1.5);
    this.stickerElfScuba1 = new a.Sticker(b, "elf-scuba1", 1.5);
    this.stickerElfScuba2 = new a.Sticker(b, "elf-scuba2", 1.5);
    this.stickerElfSeesaw = new a.Sticker(b, "elf-seesaw", 1.5);
    this.stickerCandycaneGreen = new a.Sticker(b, "candycane-green", 2);
    this.stickerCookieChocChip = new a.Sticker(b, "cookie-choc-chip", 5);
    this.stickerCookieMan = new a.Sticker(b, "cookie-man", 5);
    this.stickerFaceEyesGlasses1 = new a.Sticker(b, "face-eyes-glasses1", 2);
    this.stickerFaceMouthBlack = new a.Sticker(b, "face-mouth-black", 2);
    this.stickerHatBlue = new a.Sticker(b, "hat-blue", 2);
    this.stickerHeadElfHair2 = new a.Sticker(b, "head-elf-hair2", 2);
    this.stickerElfCar = new a.Sticker(b, "elf-car", 1.5);
    this.stickerHouse = new a.Sticker(b, "house");
    this.stickerSantaSleigh = new a.Sticker(b, "santa-sleigh", .5);
    this.stickerSchoolBus = new a.Sticker(b, "school-bus");
    this.stickerVillageHouses = new a.Sticker(b, "village-houses", 8);
    this.stickerCandies = new a.Sticker(b, "candies", 4);
    this.stickerCandycaneGreens = new a.Sticker(b, "candycane-greens", 5);
    this.stickerCandycaneHoliday = new a.Sticker(b, "candycane-holiday", 5);
    this.stickerCandycaneRed = new a.Sticker(b, "candycane-red", 5);
    this.stickerCandycaneReds = new a.Sticker(b, "candycane-reds", 5);
    this.stickerCandycaneTropical = new a.Sticker(b, "candycane-tropical", 5);
    this.stickerCandycornHoliday = new a.Sticker(b, "candycorn-holiday", 10);
    this.stickerChocolateGumdrop = new a.Sticker(b, "chocolate-gumdrop", 6);
    this.stickerChocolateNuts = new a.Sticker(b, "chocolate-nuts", 6);
    this.stickerChocolatePretzel = new a.Sticker(b, "chocolate-pretzel", 5);
    this.stickerChocolateSquiggle = new a.Sticker(b, "chocolate-squiggle", 6);
    this.stickerChocolateStripes = new a.Sticker(b, "chocolate-stripes", 6);
    this.stickerChocolateSwirl = new a.Sticker(b, "chocolate-swirl", 6);
    this.stickerCookieKiss = new a.Sticker(b, "cookie-kiss", 5);
    this.stickerCookieSnowman = new a.Sticker(b, "cookie-snowman", 5);
    this.stickerCookieStocking = new a.Sticker(b, "cookie-stocking", 5);
    this.stickerCookieTree = new a.Sticker(b, "cookie-tree", 5);
    this.stickerMilk = new a.Sticker(b, "milk", 5);
    this.stickerMugGreen = new a.Sticker(b, "mug-green", 5);
    this.stickerMugRed = new a.Sticker(b, "mug-red", 5);
    this.stickerSantaDance = new a.Sticker(b, "santa-dance", 1.5);
    this.stickerSantaSleep = new a.Sticker(b, "santa-sleep", 1.5);
    this.stickerAstronaut = new a.Sticker(b, "astronaut");
    this.stickerBat = new a.Sticker(b, "bat", 3);
    this.stickerBoxFish = new a.Sticker(b, "box-fish", 3);
    this.stickerBrownBearBaby = new a.Sticker(b, "brown-bear-baby", 2);
    this.stickerBrownBearPirate = new a.Sticker(b, "brown-bear-pirate");
    this.stickerDolphin = new a.Sticker(b, "dolphin", 1.5);
    this.stickerFishPink = new a.Sticker(b, "fish-pink", 3);
    this.stickerJellyfish = new a.Sticker(b, "jellyfish", 4);
    this.stickerLightFish = new a.Sticker(b, "light-fish", 3);
    this.stickerNutcrackerGreen = new a.Sticker(b, "nutcracker-green");
    this.stickerPegmanHips = new a.Sticker(b, "pegman-hips", 1.5);
    this.stickerPenguinAngry = new a.Sticker(b, "penguin-angry", 3);
    this.stickerPolarBearScuba = new a.Sticker(b, "polar-bear-scuba");
    this.stickerReindeerBabies = new a.Sticker(b, "reindeer-babies");
    this.stickerReindeerBabyBoy = new a.Sticker(b, "reindeer-baby-boy", 2);
    this.stickerReindeerBabyGirl = new a.Sticker(b, "reindeer-baby-girl", 2);
    this.stickerReindeerWhite = new a.Sticker(b, "reindeer-white");
    this.stickerRobotPurple = new a.Sticker(b, "robot-purple");
    this.stickerRudolphDancing2 = new a.Sticker(b, "rudolph-dancing2");
    this.stickerScubaGreen = new a.Sticker(b, "scuba-green");
    this.stickerScubaOrange = new a.Sticker(b, "scuba-orange");
    this.stickerSeagullFly2 = new a.Sticker(b, "seagull-fly2", 3);
    this.stickerShark = new a.Sticker(b, "shark");
    this.stickerSnowmanBigPenguin = new a.Sticker(b, "snowman-big-penguin");
    this.stickerSnowmanBigTub = new a.Sticker(b, "snowman-big-tub");
    this.stickerWalrus = new a.Sticker(b, "walrus", 1.5);
    this.stickerElfHead1 = new a.Sticker(b, "elf-head1", 2);
    this.stickerElfHead2 = new a.Sticker(b, "elf-head2", 2);
    this.stickerElfHead3 = new a.Sticker(b, "elf-head3", 2);
    this.stickerElfHead4 = new a.Sticker(b, "elf-head4", 2);
    this.stickerElfHead5 = new a.Sticker(b, "elf-head5", 2);
    this.stickerFaceBearMouth = new a.Sticker(b, "face-bear-mouth", 2);
    this.stickerFaceCarrotNose = new a.Sticker(b, "face-carrot-nose", 2);
    this.stickerFaceEyesGlasses2 = new a.Sticker(b, "face-eyes-glasses2", 2);
    this.stickerFaceEyesGlasses3 = new a.Sticker(b, "face-eyes-glasses3", 2);
    this.stickerFaceEyesGlasses4 = new a.Sticker(b, "face-eyes-glasses4", 2);
    this.stickerFaceEyesGlasses5 = new a.Sticker(b, "face-eyes-glasses5", 2);
    this.stickerFaceEyesNormal = new a.Sticker(b, "face-eyes-normal", 2);
    this.stickerFaceEyesSunglasses1 = new a.Sticker(b, "face-eyes-sunglasses1", 2);
    this.stickerFaceEyesSunglasses2 = new a.Sticker(b, "face-eyes-sunglasses2", 2);
    this.stickerFaceEyesSunglasses3 = new a.Sticker(b, "face-eyes-sunglasses3", 2);
    this.stickerFaceEyesSunglasses4 = new a.Sticker(b, "face-eyes-sunglasses4", 2);
    this.stickerFaceMoustache = new a.Sticker(b, "face-moustache", 2);
    this.stickerFaceMouthWhite = new a.Sticker(b, "face-mouth-white", 2);
    this.stickerFaceNosePink = new a.Sticker(b, "face-nose-pink", 2);
    this.stickerFaceNoseRed = new a.Sticker(b, "face-nose-red", 2);
    this.stickerFaceSantaBeard = new a.Sticker(b, "face-santa-beard", 2);
    this.stickerFaceTeeth = new a.Sticker(b, "face-teeth", 2);
    this.stickerFaceWalrusMouth = new a.Sticker(b, "face-walrus-mouth", 2);
    this.stickerHatAntlersBlue = new a.Sticker(b, "hat-antlers-blue", 2);
    this.stickerHatAntlersBrown = new a.Sticker(b, "hat-antlers-brown", 2);
    this.stickerHatBeanie = new a.Sticker(b, "hat-beanie", 2);
    this.stickerHatGreen = new a.Sticker(b, "hat-green", 2);
    this.stickerHatOrange = new a.Sticker(b, "hat-orange", 2);
    this.stickerHatPink = new a.Sticker(b, "hat-pink", 2);
    this.stickerHatPurple = new a.Sticker(b, "hat-purple", 2);
    this.stickerHatSanta = new a.Sticker(b, "hat-santa", 2);
    this.stickerHatYellow = new a.Sticker(b, "hat-yellow", 2);
    this.stickerHeadBear = new a.Sticker(b, "head-bear", 2);
    this.stickerHeadElfHair1 = new a.Sticker(b, "head-elf-hair1", 2);
    this.stickerHeadElfHair2 = new a.Sticker(b, "head-elf-hair2", 2);
    this.stickerHeadElfHair3 = new a.Sticker(b, "head-elf-hair3", 2);
    this.stickerHeadElfHair4 = new a.Sticker(b, "head-elf-hair4", 2);
    this.stickerHeadElfHair5 = new a.Sticker(b, "head-elf-hair5", 2);
    this.stickerHeadElfHair6 = new a.Sticker(b, "head-elf-hair6", 2);
    this.stickerHeadElfHair7 = new a.Sticker(b, "head-elf-hair7", 2);
    this.stickerHeadElfHair8 = new a.Sticker(b, "head-elf-hair8", 2);
    this.stickerHeadElfHair9 = new a.Sticker(b, "head-elf-hair9", 2);
    this.stickerHeadElfHair10 = new a.Sticker(b, "head-elf-hair10", 2);
    this.stickerHeadReindeer = new a.Sticker(b, "head-reindeer", 2);
    this.tools = [this.pencil, this.crayon, this.marker, this.paintbrush, this.tinsel, this.icing, this.garland, this.neon, this.bell, this.hangingLights, this.stringLights, this.spray, this.spraySprinkles, this.sprayCandy, this.sprayConfetti, this.sprayHoliday, this.sprayOcean, this.sprayOrnaments, this.spraySnow, this.spraySnowflakes, this.sceneAir, this.sceneAirport, this.sceneBeach, this.sceneDock, this.sceneGingerbread, this.sceneIceberg, this.sceneLivingroom, this.sceneNight, this.sceneNone, this.sceneSnow, this.sceneUnderwater, this.eraser, this.eraserMobile, this.shapeCircle, this.shapeDiamond, this.shapeHeart, this.shapeOctagon, this.shapePentagon, this.shapeRectangle, this.shapeSquare, this.shapeStar, this.shapeTriangle, this.stampBow, this.stampPresent, this.stampOrnamentRound1, this.stampOrnamentRound2, this.stampOrnamentRound3, this.stampOrnamentSkinny1, this.stampOrnamentSkinny2, this.stampOrnamentWide1, this.stampOrnamentWide2, this.stampCandyGumdrop, this.stampCandyJellybean, this.stampCandyMintSwirl, this.stampCandyMintWheel, this.stampCandySucker, this.stampCandyWrapper1, this.stampCandyWrapper2, this.rollerCheckered, this.rollerDiagonal, this.rollerHorizontal, this.rollerPolkadots, this.rollerSnowflakes, this.rollerTrees, this.rollerVertical, this.stickerBrownBear, this.stickerDinosaur, this.stickerFishTeal, this.stickerFishYellow, this.stickerGingerbreadMan, this.stickerMrsClaus, this.stickerNarwhal, this.stickerPenguinPresents, this.stickerRudolphFront, this.stickerRudolphSide, this.stickerSantaSled, this.stickerSanta, this.stickerSnowMonster, this.stickerCactus, this.stickerCloud1, this.stickerCloud2, this.stickerCloud3, this.stickerCoralLarge, this.stickerCoralMedium, this.stickerCoralSmall, this.stickerIgloo, this.stickerMoon, this.stickerSeaweedGreen, this.stickerSeaweedLime, this.stickerSun, this.stickerTreeHoliday, this.stickerTreePalm, this.stickerTreesBlue, this.stickerTreesGreen, this.stickerBeachBall, this.stickerBell, this.stickerCandle, this.stickerClock, this.stickerDiscoBall, this.stickerFirewood, this.stickerFrame1, this.stickerFrame2, this.stickerFrame3, this.stickerHolly, this.stickerPresentsStack, this.stickerRecordPlayer, this.stickerRedBow, this.stickerShowLights, this.stickerSnowglobeSnowman, this.stickerSnowglobeTree, this.stickerStereo, this.stickerStockingGreen, this.stickerStockingPink, this.stickerStockingRed, this.stickerStockingYellow, this.stickerTreasureClosed, this.stickerTreasureOpen, this.stickerWindow, this.stickerWreath, this.stickerElf1, this.stickerElf2, this.stickerElf3, this.stickerElf4, this.stickerElf5, this.stickerElf6, this.stickerElf7, this.stickerElf8, this.stickerElf9, this.stickerElf10, this.stickerElf11, this.stickerElf12, this.stickerElf13, this.stickerElf14, this.stickerElf15, this.stickerElf16, this.stickerElf17, this.stickerElf18, this.stickerElf19, this.stickerElf20, this.stickerElf21, this.stickerElf22, this.stickerElf23, this.stickerElf24, this.stickerElf25, this.stickerElf26, this.stickerElf27, this.stickerElf28, this.stickerElf29, this.stickerElfDuckFloat, this.stickerElfJamGuitar, this.stickerElfJamSing, this.stickerElfMermaid, this.stickerElfMerman, this.stickerElfScuba1, this.stickerElfScuba2, this.stickerElfSeesaw, this.stickerCandycaneGreen, this.stickerCookieChocChip, this.stickerCookieMan, this.stickerFaceEyesGlasses1, this.stickerFaceMouthBlack, this.stickerHatBlue, this.stickerHeadElfHair2, this.stickerElfCar, this.stickerHouse, this.stickerSantaSleigh, this.stickerSchoolBus, this.stickerVillageHouses, this.stickerCandies, this.stickerCandycaneGreens, this.stickerCandycaneHoliday, this.stickerCandycaneRed, this.stickerCandycaneReds, this.stickerCandycaneTropical, this.stickerCandycornHoliday, this.stickerChocolateGumdrop, this.stickerChocolateNuts, this.stickerChocolatePretzel, this.stickerChocolateSquiggle, this.stickerChocolateStripes, this.stickerChocolateSwirl, this.stickerCookieKiss, this.stickerCookieSnowman, this.stickerCookieStocking, this.stickerCookieTree, this.stickerMilk, this.stickerMugGreen, this.stickerMugRed, this.stickerSantaDance, this.stickerSantaSleep, this.stickerAstronaut, this.stickerBat, this.stickerBoxFish, this.stickerBrownBearBaby, this.stickerBrownBearPirate, this.stickerDolphin, this.stickerFishPink, this.stickerJellyfish, this.stickerLightFish, this.stickerNutcrackerGreen, this.stickerPegmanHips, this.stickerPenguinAngry, this.stickerPolarBearScuba, this.stickerReindeerBabies, this.stickerReindeerBabyBoy, this.stickerReindeerBabyGirl, this.stickerReindeerWhite, this.stickerRobotPurple, this.stickerRudolphDancing2, this.stickerScubaGreen, this.stickerScubaOrange, this.stickerSeagullFly2, this.stickerShark, this.stickerSnowmanBigPenguin, this.stickerSnowmanBigTub, this.stickerWalrus, this.stickerElfHead1, this.stickerElfHead2, this.stickerElfHead3, this.stickerElfHead4, this.stickerElfHead5, this.stickerFaceBearMouth, this.stickerFaceCarrotNose, this.stickerFaceEyesGlasses2, this.stickerFaceEyesGlasses3, this.stickerFaceEyesGlasses4, this.stickerFaceEyesGlasses5, this.stickerFaceEyesNormal, this.stickerFaceEyesSunglasses1, this.stickerFaceEyesSunglasses2, this.stickerFaceEyesSunglasses3, this.stickerFaceEyesSunglasses4, this.stickerFaceMoustache, this.stickerFaceMouthWhite, this.stickerFaceNosePink, this.stickerFaceNoseRed, this.stickerFaceSantaBeard, this.stickerFaceTeeth, this.stickerFaceWalrusMouth, this.stickerHatAntlersBlue, this.stickerHatAntlersBrown, this.stickerHatBeanie, this.stickerHatGreen, this.stickerHatOrange, this.stickerHatPink, this.stickerHatPurple, this.stickerHatSanta, this.stickerHatYellow, this.stickerHeadBear, this.stickerHeadElfHair1, this.stickerHeadElfHair2, this.stickerHeadElfHair3, this.stickerHeadElfHair4, this.stickerHeadElfHair5, this.stickerHeadElfHair6, this.stickerHeadElfHair7, this.stickerHeadElfHair8, this.stickerHeadElfHair9, this.stickerHeadElfHair10, this.stickerHeadReindeer];
  };
  a.Tools.prototype.start = function () {
    this.selectTool_ = this.selectTool_.bind(this);
    this.secondaryMenu.on("click.santascanvas touchend.santascanvas", this.selectTool_);
    this.onResize();
    $(window).on("resize.santascanvas", this.onResize.bind(this));
    var c = this.primaryMenu.find('[data-tool-category="drawing"]'),
      b = this.secondaryMenu.find('[data-tool-category="drawing"]');
    c.addClass("is-active");
    b.addClass("is-active");
    this.currentCategory = "drawing";
    this.secondaryMenuActive = !0;
    this.toolDisplay.attr("data-current-category", this.currentCategory);
    var d = this.secondaryMenu.find('[data-tool="marker"]');
    this.selectedTool = this.tools.filter(function (b) {
      if (b.el[0] === d[0] && !b.isSelected) return b;
    })[0];
    c = this.game_.mouse.coordinates();
    this.selectedTool.select(c);
    this.sliderChanged(this.game_.slider.size);
    this.toolDisplay.attr("data-current-tool", this.selectedTool.name);
  };
  a.Tools.prototype.mouseChanged = function (c, b) {
    if (this.selectedTool) if (this.selectedTool.move(b), b.down) {
      (c = this.isInsideCanvas(c)) && this.selectedTool.startMousedown();
      b = $(this.game_.mouse.originalTarget).closest("[data-slider]").length;
      var d = $(this.game_.mouse.originalTarget).closest("[data-colorpicker]").length;
      c && !d && (!this.isMobile && this.secondaryMenuActive && (this.secondaryMenu.removeClass("is-active"), this.game_.colorpicker.isPopupOpen() && this.game_.colorpicker.togglePopup()), this.isMobile && !b && (this.game_.sceneElem.addClass("ui-hidden"), this.game_.colorpicker.isPopupOpen() && this.game_.colorpicker.togglePopup()));
    } else this.selectedTool.stopMousedown(), this.isMobile ? this.game_.sceneElem.removeClass("ui-hidden") : this.secondaryMenuActive && !this.secondaryMenuToggled && this.secondaryMenu.addClass("is-active");
  };
  a.Tools.prototype.selectTool_ = function (c) {
    if (!($(c.target).closest("[data-slider]").length || $(c.target).closest("[data-rotator]").length || $(c.target).closest("[data-colorpicker]").length || $(c.target).closest("[data-tool-tray-toggle]").length)) {
      var b = this.selectedTool;
      b && b.deselect();
      var d = $(c.target).closest(".Category").length && "eraser" !== this.currentCategory && "scene" !== this.currentCategory ? this.secondaryMenu.find('[data-tool-category="' + this.currentCategory + '"] [data-tool]') : $(c.target).closest("[data-tool]");
      if (this.selectedTool = this.tools.filter(function (b) {
        if (b.el[0] === d[0] && !b.isSelected) return b;
      })[0]) this.game_.colorpicker.setDisabled(!1), this.game_.slider.setDisabled(!1), a.LayerTool.prototype.isPrototypeOf(this.selectedTool) ? (this.selectedTool.draw(), this.selectedTool = null, this.toolDisplay.attr("data-current-tool", ""), this.toolDisplay.attr("data-current-category", ""), this.isMobile && (this.currentCategory = null, this.secondaryMenuActive = !1, this.categoryPickers.removeClass("is-active"), this.secondaryMenu.removeClass("is-active"))) : this.selectedTool != b ? (c = this.game_.mouse.coordinates(), this.selectedTool.preloadImage(this.game_.colorpicker.selectedColor), this.selectedTool.select(c), this.sliderChanged(this.game_.slider.size), this.toolDisplay.attr("data-current-tool", this.selectedTool.name), this.game_.colorpicker.setDisabled(this.selectedTool.disableColorpicker), this.game_.slider.setDisabled(this.selectedTool.disableResize), this.isMobile && this.secondaryMenu.removeClass("is-active")) : (this.selectedTool = null, this.toolDisplay.attr("data-current-tool", ""));
    }
  };
  a.Tools.prototype.onCategoryClick_ = function (c) {
    var b = $(c.target).closest("[data-tool-category-picker]"),
      d = b.attr("data-tool-category"),
      e = this.secondaryMenu.find('[data-tool-category="' + d + '"]');
    this.secondaryMenuToggled = !1;
    this.currentCategory && this.currentCategory == d ? (this.secondaryMenuActive && (this.selectedTool || (b.toggleClass("is-active"), this.currentCategory = null, this.toolDisplay.attr("data-current-category", "")), this.secondaryMenu.toggleClass("is-active")), "eraser" != d || $(c.target).closest("[data-slider]").length || (b.removeClass("is-active"), this.currentCategory = null, this.selectedTool.deselect(), this.selectedTool = null)) : (this.game_.colorpicker.isPopupOpen() && this.game_.colorpicker.togglePopup(), this.game_.colorpicker.setDisabled(!1), this.game_.slider.setDisabled(!1), this.categoryPickers.removeClass("is-active"), this.categoryMenus.removeClass("is-active"), b.addClass("is-active"), this.currentCategory = d, this.toolDisplay.attr("data-current-category", this.currentCategory), this.selectedTool && (this.selectedTool.deselect(), this.selectedTool = null), "eraser" == d ? (this.secondaryMenuActive = !1, this.secondaryMenu.removeClass("is-active"), this.secondaryMenuToggle.addClass("is-hidden"), this.selectTool_(c)) : (this.secondaryMenuActive = !0, this.secondaryMenu.addClass("is-active"), this.secondaryMenuToggle.removeClass("is-hidden"), e.addClass("is-active"), this.isMobile || this.selectTool_(c)), window.santaApp.fire("sound-trigger", "selfie_click"));
  };
  a.Tools.prototype.onSubcategoryClick_ = function (c) {
    c = $(c.target).closest("[data-tool-subcategory-picker]");
    var b = c.attr("data-tool-subcategory");
    b = this.secondaryMenu.find('[data-tool-subcategory="' + b + '"]');
    this.subcategoryPickers.removeClass("is-active");
    this.subcategoryMenus.removeClass("is-active");
    b.scrollLeft(0);
    b.addClass("is-active");
    c.addClass("is-active");
    this.game_.colorpicker.setDisabled(!1);
    this.game_.slider.setDisabled(!1);
  };
  a.Tools.prototype.onToggleClick_ = function () {
    this.secondaryMenuToggled = !this.secondaryMenuToggled;
    this.secondaryMenu.toggleClass("is-active");
  };
  a.Tools.prototype.sliderChanged = function (c) {
    this.selectedTool && (this.selectedTool.updateSize(c), this.circleSize = this.selectedTool.currentSize * this.game_.canvas.canvasRatio, this.selectedTool.circleEl.css({
      height: this.circleSize,
      width: this.circleSize
    }), this.selectedTool.mouseOffset = {
      x: -this.circleSize / 2,
      y: this.circleSize / 2
    });
    this.lastSize !== c && (window.santaApp.fire("sound-trigger", {
      name: "cd_size",
      args: [c]
    }), this.lastSize = c);
  };
  a.Tools.prototype.rotatorChanged = function (c) {
    this.selectedTool && this.selectedTool.updateAngle(c);
  };
  a.Tools.prototype.colorChanged = function (c) {
    this.selectedTool && this.selectedTool.preloadImage(c);
  };
  a.Tools.prototype.onNavClick_ = function (c) {
    var b = $(c.target).closest("[data-tool-category-tray]");
    c = 260 * ("next" === $(c.target).attr("data-tool-nav") ? 1 : -1);
    b.animate({
      scrollLeft: b.scrollLeft() + c
    }, 300);
    window.santaApp.fire("sound-trigger", "spirit_click");
  };
  a.Tools.prototype.onCategoryOver_ = function (c) {
    c = $(c.target).closest("[data-tool-category-picker]").attr("data-tool-category");
    window.santaApp.fire("sound-trigger", "cd_" + c + "_over");
  };
  a.Tools.prototype.onGenericOver_ = function () {
    window.santaApp.fire("sound-trigger", "generic_button_over");
  };
  a.Tools.prototype.onSnowButtonOver_ = function () {
    window.santaApp.fire("sound-trigger", "cd_snow_button_over");
  };
  a.Tools.prototype.onCategoryToolsOver_ = function (c) {
    $(c.target).closest("[data-tool]").attr("data-tool");
    c = $(c.target).index();
    window.santaApp.fire("sound-trigger", {
      name: "cd_tool_over",
      args: [c]
    });
  };
  a.Tools.prototype.onResize = function () {
    this.categoryMenuNavs.each(function () {
      var c = $(this).closest("[data-tool-category-tray]"),
        b = c[0].getBoundingClientRect().width;
      c[0] && c[0].scrollWidth > b ? $(this).addClass("is-active") : $(this).removeClass("is-active");
    });
    this.game_.sceneElem[0].getBoundingClientRect().width <= a.Constants.MOBILE_BREAKPOINT ? this.isMobile = !0 : this.isMobile = !1;
  };
  a.Tools.prototype.isInsideCanvas = function (c) {
    return this.game_.mouse.isInsideEl(c.x, c.y, this.game_.canvas.displayCanvas) && !this.game_.mouse.isInsideEl(c.x, c.y, this.game_.rotateElem[0]) && !this.game_.mouse.isInsideEl(c.x, c.y, this.primaryMenu[0]) && !this.game_.mouse.isInsideEl(c.x, c.y, this.secondaryMenu[0]) && !this.game_.mouse.isInsideEl(c.x, c.y, this.mobileEdit[0]) && !this.game_.mouse.isInsideEl(c.x, c.y, this.mobileSlider[0]);
  };
  a.Game = function (c, b) {
    this.elem = $(c);
    this.importPath = b;
    this.sceneElem = this.elem.find(".scene");
    this.rotateElem = this.elem.find(".force-rotate");
    this.mouse = new a.Mouse(this.sceneElem);
    this.canvas = new a.Canvas(this, this.sceneElem);
    this.tools = new a.Tools(this, this.sceneElem);
    this.slider = new a.Slider(this.elem, this.mouse);
    this.colorpicker = new a.Colorpicker(this.elem);
    this.rotator = new a.Rotator(this.elem);
    this.onFrame_ = this.onFrame_.bind(this);
    (this.isIE = -1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/")) && this.sceneElem.find("[data-tool-save]").addClass("u-hidden");
  };
  a.Game.prototype.start = function () {
    this.tools.start();
    this.canvas.start();
    this.mouse.subscribe(this.tools.mouseChanged, this.tools);
    this.mouse.subscribe(this.canvas.mouseChanged, this.canvas);
    this.mouse.subscribe(this.slider.mouseChanged, this.slider);
    this.slider.subscribe(this.tools.sliderChanged, this.tools);
    this.rotator.subscribe(this.tools.rotatorChanged, this.tools);
    this.colorpicker.subscribe(this.tools.colorChanged, this.tools);
    this.elem.find("#reset-button, #reset-button-toolbox").on("click.santascanvas touchend.santascanvas", this.resetCanvas_.bind(this));
    this.restart();
  };
  a.Game.prototype.resetCanvas_ = function () {
    this.canvas.resetCanvas();
  };
  a.Game.prototype.restart = function () {
    this.paused = !1;
    this.resetCanvas_();
    this.unfreezeGame();
  };
  a.Game.prototype.update = function (c) {
    this.isPlaying && (this.mouse.update(), this.canvas.snow.update(c), this.canvas.clearAnimation.update(), this.canvas.soundUpdate());
  };
  a.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  a.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen"), this.isPlaying = !0, this.lastFrame = performance.now(), this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  a.Game.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var c = performance.now(),
        b = Math.min(1E3, c - this.lastFrame);
      this.lastFrame = c;
      this.update(b);
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  a.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  a.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  a.Game.prototype.dispose = function () {
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".santascanvas");
    $(document).off(".santascanvas");
  };
  _globalExport = a.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds(window.innerWidth > 768 ? 'cd_load_sounds_desktop' : 'cd_load_sounds');
sceneApi.preload.images('img/icons/reset.svg', 'img/loading.svg', 'img/share.svg', 'img/icons/check.svg', 'img/icons/rotate_clock.svg', 'img/icons/rotate_counter_clock.svg', 'img/icons/snow.svg', 'img/icons/trash.svg', 'img/icons/save.svg', 'img/scenes/air.png', 'img/scenes/airport.png', 'img/scenes/beach.png', 'img/scenes/dock.png', 'img/scenes/iceberg.png', 'img/scenes/livingroom.png', 'img/scenes/snow.png', 'img/scenes/underwater.png', 'img/tools/tool_pencil_tray.svg', 'img/tools/tool_marker_tray.svg', 'img/tools/tool_stamp.svg', 'img/tools/tool_drawing.svg', 'img/tools/spray/tool_spray_color.svg', 'img/tools/tool_roller.svg', 'img/tools/tool_shapes.svg', 'img/tools/tool_scene.svg', 'img/tools/tool_sticker.svg', 'img/tools/tool_eraser.svg', 'img/tools/color_wheel_bottom.svg', 'img/tools/slider-base.svg', 'img/tools/slider-dot.svg');
const game = new Game(document.getElementById('module-santascanvas'), './');
sceneApi.config({
  orientation: 'portrait',
  sound: ['cd_start', 'music_start_scene']
});
sceneApi.ready(async () => {
  game.start();
});