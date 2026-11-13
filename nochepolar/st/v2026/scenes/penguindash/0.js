import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = {
      Constants: {
        TOTAL_LEVELS: 10,
        INITIAL_COUNTDOWN: 0,
        TIME_LOSE: 20,
        MOVEMENT_FORCE: 10,
        POINTS_LEVEL_COMPLETE: 50,
        POINTS_GIFT_BASIC: 10,
        TUTORIAL_LEFTRIGHT_TIMEOUT: 5E3,
        TUTORIAL_UPDOWN_TIMEOUT: 3E3,
        SPEED_DECAY_FAST: .93,
        SPEED_DECAY_DEFAULT: .98,
        SPEED_MULTIPLE_DEFAULT: 1,
        SPEED_MULTIPLE_FAST: 2,
        SPEED_MOVING_ICE: 2E3,
        WORLD_WIDTH: 4E3,
        WORLD_HEIGHT: 3E3,
        PENGUIN_STATES: {
          sliding: 0,
          accelerating: 1,
          falling: 2,
          celebrating: 3
        },
        GROUPS: [{
          id: "prize",
          continue: !0,
          init: ["prize"],
          update: ["prize"]
        }, {
          id: "obstacle",
          continue: !1,
          front: !0,
          init: ["obstacle"],
          update: ["collide"]
        }, {
          id: "finish",
          update: ["finish"]
        }, {
          id: "ice",
          continue: !0,
          update: ["fast"]
        }, {
          id: "moving",
          continue: !0,
          init: ["moving"],
          update: ["moving"]
        }, {
          id: "snow",
          continue: !0
        }, {
          id: "scenery",
          continue: !1
        }, {
          id: "shadow",
          continue: !1
        }, {
          id: "character",
          continue: !0
        }],
        OBSTACLES: {
          coal1: {
            width: 82,
            height: 82,
            offsetX: 110,
            offsetY: 80,
            square: !0
          },
          coal2: {
            width: 150,
            height: 102,
            offsetX: 135,
            offsetY: 100,
            square: !0
          },
          coal3: {
            width: 160,
            height: 160,
            offsetX: 145,
            offsetY: 105,
            square: !0
          },
          tree1: {
            width: 240,
            height: 240,
            offsetX: 380,
            offsetY: 110,
            square: !0
          },
          tree2: {
            width: 400,
            height: 400,
            offsetX: 480,
            offsetY: 240,
            square: !0
          },
          pole: {
            width: 50,
            height: 50,
            offsetX: 0,
            offsetY: 0,
            square: !0
          }
        },
        CHARACTERS: {
          duck: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
          walrus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 16, 15, 14, 13, 13, 13, 14, 15, 16, 16, 16, 15, 14, 13, 13, 13, 14, 15, 16, 16, 16, 15, 14, 13, 13, 13, 14, 15, 16, 16, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
        }
      }
    },
    h = c.Constants;
  c.Preloader = function () {};
  c.Preloader.prototype.preload = function () {
    this.load.crossOrigin = "anonymous";
    this.load.baseURL = this.game.st_parent.componentDir;
    this.load.video("background", "img/wave-bg-slow-big-no-waves.mp4", "canplaythrough", !0);
    this.load.spritesheet("sprite-penguin", "img/sprite-penguin.png", 153, 108, 32);
    this.load.image("shadow-penguin", "img/penguin-shadow.png");
    this.load.spritesheet("sprite-dust", "img/sprite-dust.png", 150, 108, 16);
    this.load.image("element-present1", "img/element-present1.png");
    this.load.image("element-present2", "img/element-present2.png");
    this.load.image("element-present3", "img/element-present3.png");
    this.load.image("element-present4", "img/element-present4.png");
    this.load.image("element-present5", "img/element-present5.png");
    this.load.image("element-present6", "img/element-present6.png");
    this.load.image("element-presentStacked", "img/element-presentStacked.png");
    this.load.image("element-coal1", "img/element-coal1.png");
    this.load.image("element-coal2", "img/element-coal2.png");
    this.load.image("element-coal3", "img/element-coal3.png");
    this.load.image("element-tree1", "img/element-tree1.png");
    this.load.image("element-tree2", "img/element-tree2.png");
    this.load.spritesheet("sprite-duck", "img/sprite-duck.png", 169, 202, 22);
    this.load.spritesheet("sprite-green_elf", "img/sprite-green_elf.png", 169, 202, 17);
    this.load.spritesheet("sprite-orange_elf", "img/sprite-orange_elf.png", 169, 202, 16);
    this.load.spritesheet("sprite-walrus", "img/sprite-walrus.png", 169, 202, 17);
    this.load.spritesheet("sprite-angels", "img/sprite-angels.png", 900, 750, 1);
    this.load.spritesheet("sprite-sm_iceberg", "img/sprite-sm_iceberg.png", 720, 480, 1);
    this.load.spritesheet("sprite-iceberg", "img/sprite-iceberg.png", 1200, 900, 1);
    this.load.spritesheet("sprite-snowman", "img/sprite-snowman.png", 736, 616, 1);
    this.load.spritesheet("element-duck", "img/element-duck.png");
    this.load.spritesheet("element-green_elf", "img/element-green_elf.png");
    this.load.spritesheet("element-orange_elf", "img/element-orange_elf.png");
    this.load.spritesheet("element-walrus", "img/element-walrus.png");
    this.load.spritesheet("element-angels", "img/element-angels.png");
    this.load.spritesheet("element-sm_iceberg", "img/element-sm_iceberg.png");
    this.load.spritesheet("element-iceberg", "img/element-iceberg.png");
    this.load.spritesheet("element-snowman", "img/element-snowman.png");
    this.load.image("element-snow1", "img/element-snow1.png");
    this.load.image("element-snow1-shadow", "img/element-snow1-shadow.png");
    this.load.image("element-snow2", "img/element-snow2.png");
    this.load.image("element-snow2-shadow", "img/element-snow2-shadow.png");
    this.load.image("element-snow3", "img/element-snow3.png");
    this.load.image("element-snow3-shadow", "img/element-snow3-shadow.png");
    this.load.image("element-snow4", "img/element-snow4.png");
    this.load.image("element-snow4-shadow", "img/element-snow4-shadow.png");
    this.load.image("element-snow5", "img/element-snow5.png");
    this.load.image("element-snow5-shadow", "img/element-snow5-shadow.png");
    this.load.image("element-ice1", "img/element-ice1.png");
    this.load.image("element-ice1-shadow", "img/element-ice1-shadow.png");
    this.load.image("element-ice2", "img/element-ice2.png");
    this.load.image("element-ice2-shadow", "img/element-ice2-shadow.png");
    this.load.image("element-ice3", "img/element-ice3.png");
    this.load.image("element-ice3-shadow", "img/element-ice3-shadow.png");
    this.load.image("element-ice4", "img/element-ice4.png");
    this.load.image("element-ice4-shadow", "img/element-ice4-shadow.png");
    this.load.image("element-ice5", "img/element-ice5.png");
    this.load.image("element-ice5-shadow", "img/element-ice5-shadow.png");
    this.load.image("element-finish", "img/element-finish.png");
    this.load.image("element-start", "img/element-start.png");
    this.load.image("element-finish", "img/element-finish.png");
    this.load.image("element-celebrate", "img/element-celebrate.png");
    this.load.image("element-pole", "img/element-pole.png");
    this.load.spritesheet("sprite-wave1", "img/sprite-wave1.png", 250, 100, 41);
    this.load.spritesheet("sprite-wave2", "img/sprite-wave2.png", 250, 100, 55);
  };
  c.Preloader.prototype.create = function () {
    this.game.state.start("Game");
  };
  c.config = {};
  c.config.Levels = [[{
    x: 1E3,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1105,
    y: 380,
    t: "start",
    g: "scenery"
  }, {
    x: 1005,
    y: 400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1180,
    y: 400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 500,
    t: "snow2",
    g: "snow"
  }, {
    x: 900,
    y: 700,
    t: "snow3",
    g: "snow"
  }, {
    x: 1100,
    y: 700,
    t: "snow4",
    g: "snow"
  }, {
    x: 900,
    y: 900,
    t: "snow5",
    g: "snow"
  }, {
    x: 1100,
    y: 900,
    t: "snow1",
    g: "snow"
  }, {
    x: 1170,
    y: 970,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 900,
    y: 1100,
    t: "snow2",
    g: "snow"
  }, {
    x: 1100,
    y: 1100,
    t: "snow3",
    g: "snow"
  }, {
    x: 800,
    y: 1300,
    t: "snow4",
    g: "snow"
  }, {
    x: 750,
    y: 1300,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 1300,
    t: "ice1",
    g: "ice"
  }, {
    x: 1200,
    y: 1300,
    t: "snow5",
    g: "snow"
  }, {
    x: 800,
    y: 1500,
    t: "snow1",
    g: "snow"
  }, {
    x: 1E3,
    y: 1500,
    t: "ice2",
    g: "ice"
  }, {
    x: 1200,
    y: 1500,
    t: "snow2",
    g: "snow"
  }, {
    x: 800,
    y: 1700,
    t: "snow3",
    g: "snow"
  }, {
    x: 600,
    y: 1700,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 1700,
    t: "ice3",
    g: "ice"
  }, {
    x: 1200,
    y: 1700,
    t: "snow4",
    g: "snow"
  }, {
    x: 1100,
    y: 1700,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 800,
    y: 1900,
    t: "snow5",
    g: "snow"
  }, {
    x: 600,
    y: 1900,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 1900,
    t: "snow1",
    g: "snow"
  }, {
    x: 1200,
    y: 1900,
    t: "snow2",
    g: "snow"
  }, {
    x: 1100,
    y: 1900,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 800,
    y: 2100,
    t: "snow3",
    g: "snow"
  }, {
    x: 600,
    y: 2100,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 2100,
    t: "snow4",
    g: "snow"
  }, {
    x: 1200,
    y: 2100,
    t: "snow5",
    g: "snow"
  }, {
    x: 1100,
    y: 2100,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 2300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1E3,
    y: 2500,
    t: "snow2",
    g: "snow"
  }, {
    x: 1100,
    y: 2700,
    t: "celebrate",
    g: "finish",
    f: "y"
  }, {
    x: 1100,
    y: 2600,
    t: "finish",
    g: "scenery",
    f: "y"
  }], [{
    x: 1270,
    y: 300,
    t: "snow5",
    g: "snow"
  }, {
    x: 1375,
    y: 380,
    t: "start",
    g: "scenery"
  }, {
    x: 1275,
    y: 400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1450,
    y: 400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1200,
    y: 500,
    t: "snow4",
    g: "snow"
  }, {
    x: 1E3,
    y: 500,
    t: "snow3",
    g: "snow"
  }, {
    x: 800,
    y: 500,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1150,
    y: 700,
    t: "snow2",
    g: "snow"
  }, {
    x: 950,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 750,
    y: 800,
    t: "snow5",
    g: "snow"
  }, {
    x: 750,
    y: 1E3,
    t: "ice4",
    g: "ice"
  }, {
    x: 750,
    y: 1200,
    t: "snow4",
    g: "snow"
  }, {
    x: 850,
    y: 1400,
    t: "snow3",
    g: "moving",
    c: {
      axis: "x",
      movement: "-200"
    }
  }, {
    x: 600,
    y: 1600,
    t: "snow2",
    g: "snow"
  }, {
    x: 400,
    y: 1600,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 800,
    y: 1600,
    t: "snow1",
    g: "snow"
  }, {
    x: 1E3,
    y: 1600,
    t: "snow5",
    g: "snow"
  }, {
    x: 900,
    y: 1600,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 600,
    y: 1800,
    t: "snow4",
    g: "snow"
  }, {
    x: 400,
    y: 1800,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 800,
    y: 1800,
    t: "snow3",
    g: "snow"
  }, {
    x: 1E3,
    y: 1800,
    t: "snow2",
    g: "snow"
  }, {
    x: 900,
    y: 1800,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 600,
    y: 2E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 400,
    y: 2E3,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 2E3,
    t: "snow4",
    g: "snow"
  }, {
    x: 800,
    y: 2E3,
    t: "snow5",
    g: "snow"
  }, {
    x: 900,
    y: 2E3,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 900,
    y: 2200,
    t: "celebrate",
    g: "finish",
    f: "y"
  }, {
    x: 900,
    y: 2100,
    t: "finish",
    g: "scenery",
    f: "y"
  }, {
    x: 350,
    y: 270,
    t: "sm_iceberg",
    g: "character"
  }, {
    x: 1150,
    y: 900,
    t: "snowman",
    g: "character"
  }, {
    x: 500,
    y: 1200,
    t: "green_elf",
    g: "character"
  }, {
    x: 1320,
    y: 1900,
    t: "duck",
    g: "character"
  }], [{
    x: 500,
    y: 1400,
    t: "snow2",
    g: "snow"
  }, {
    x: 580,
    y: 1510,
    t: "start",
    g: "scenery",
    r: "90",
    f: "y"
  }, {
    x: 600,
    y: 1410,
    t: "pole",
    g: "obstacle"
  }, {
    x: 600,
    y: 1585,
    t: "pole",
    g: "obstacle"
  }, {
    x: 700,
    y: 1400,
    t: "ice2",
    g: "ice"
  }, {
    x: 900,
    y: 1300,
    t: "snow4",
    g: "snow"
  }, {
    x: 840,
    y: 1260,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 900,
    y: 1500,
    t: "snow5",
    g: "snow"
  }, {
    x: 1100,
    y: 1300,
    t: "snow3",
    g: "snow"
  }, {
    x: 1100,
    y: 1500,
    t: "snow1",
    g: "snow"
  }, {
    x: 1150,
    y: 1100,
    t: "snow2",
    g: "snow"
  }, {
    x: 1200,
    y: 900,
    t: "snow3",
    g: "snow"
  }, {
    x: 1300,
    y: 700,
    t: "snow4",
    g: "snow"
  }, {
    x: 1500,
    y: 650,
    t: "snow5",
    g: "snow"
  }, {
    x: 1700,
    y: 600,
    t: "snow4",
    g: "snow"
  }, {
    x: 1900,
    y: 600,
    t: "snow2",
    g: "snow"
  }, {
    x: 1950,
    y: 550,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 2100,
    y: 650,
    t: "snow2",
    g: "snow"
  }, {
    x: 2300,
    y: 700,
    t: "snow3",
    g: "snow"
  }, {
    x: 2500,
    y: 800,
    t: "snow4",
    g: "snow"
  }, {
    x: 2700,
    y: 900,
    t: "snow3",
    g: "snow"
  }, {
    x: 2900,
    y: 1E3,
    t: "snow4",
    g: "snow"
  }, {
    x: 3100,
    y: 1100,
    t: "snow2",
    g: "snow"
  }, {
    x: 3200,
    y: 1300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1150,
    y: 1700,
    t: "snow2",
    g: "snow"
  }, {
    x: 1200,
    y: 1900,
    t: "snow3",
    g: "snow"
  }, {
    x: 1400,
    y: 1800,
    t: "snow4",
    g: "moving",
    c: {
      axis: "y",
      movement: "+200"
    }
  }, {
    x: 1600,
    y: 1800,
    t: "snow5",
    g: "snow"
  }, {
    x: 1600,
    y: 2E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 1800,
    y: 1800,
    t: "snow2",
    g: "snow"
  }, {
    x: 1800,
    y: 2E3,
    t: "snow3",
    g: "snow"
  }, {
    x: 1870,
    y: 2070,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 2E3,
    y: 1900,
    t: "snow4",
    g: "snow"
  }, {
    x: 2200,
    y: 1800,
    t: "snow5",
    g: "moving",
    c: {
      axis: "y",
      movement: "+200"
    }
  }, {
    x: 2400,
    y: 1900,
    t: "snow1",
    g: "snow"
  }, {
    x: 2600,
    y: 1700,
    t: "ice5",
    g: "ice"
  }, {
    x: 2600,
    y: 1900,
    t: "snow2",
    g: "snow"
  }, {
    x: 2800,
    y: 1700,
    t: "snow3",
    g: "snow"
  }, {
    x: 2800,
    y: 1900,
    t: "snow4",
    g: "snow"
  }, {
    x: 3E3,
    y: 1700,
    t: "snow5",
    g: "snow"
  }, {
    x: 2800,
    y: 1500,
    t: "snow1",
    g: "snow"
  }, {
    x: 2600,
    y: 1500,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 3E3,
    y: 1500,
    t: "snow2",
    g: "snow"
  }, {
    x: 3200,
    y: 1500,
    t: "snow3",
    g: "snow"
  }, {
    x: 3400,
    y: 1400,
    t: "ice4",
    g: "ice"
  }, {
    x: 3600,
    y: 1400,
    t: "snow2",
    g: "snow"
  }, {
    x: 3780,
    y: 1510,
    t: "celebrate",
    g: "finish",
    r: -90,
    f: "y"
  }, {
    x: 3700,
    y: 1510,
    t: "finish",
    g: "scenery",
    r: -90,
    f: "y"
  }, {
    x: 1300,
    y: 870,
    t: "iceberg",
    g: "character"
  }, {
    x: 2350,
    y: 1200,
    t: "sm_iceberg",
    g: "character"
  }, {
    x: 1700,
    y: 350,
    t: "walrus",
    g: "character"
  }, {
    x: 1700,
    y: 2280,
    t: "walrus",
    g: "character"
  }, {
    x: 2750,
    y: 650,
    t: "green_elf",
    g: "character"
  }, {
    x: 2750,
    y: 2180,
    t: "orange_elf",
    g: "character"
  }], [{
    x: 100,
    y: 300,
    t: "snow3",
    g: "snow"
  }, {
    x: 205,
    y: 405,
    t: "start",
    g: "scenery",
    r: "-90"
  }, {
    x: 225,
    y: 305,
    t: "pole",
    g: "obstacle"
  }, {
    x: 225,
    y: 480,
    t: "pole",
    g: "obstacle"
  }, {
    x: 300,
    y: 300,
    t: "snow4",
    g: "snow"
  }, {
    x: 500,
    y: 300,
    t: "snow2",
    g: "snow"
  }, {
    x: 700,
    y: 350,
    t: "snow5",
    g: "snow"
  }, {
    x: 700,
    y: 550,
    t: "snow1",
    g: "snow"
  }, {
    x: 550,
    y: 550,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 900,
    y: 400,
    t: "snow2",
    g: "snow"
  }, {
    x: 900,
    y: 600,
    t: "snow5",
    g: "snow"
  }, {
    x: 980,
    y: 380,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 750,
    y: 600,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1100,
    y: 450,
    t: "ice1",
    g: "ice"
  }, {
    x: 1300,
    y: 450,
    t: "snow3",
    g: "snow"
  }, {
    x: 1500,
    y: 450,
    t: "snow2",
    g: "snow"
  }, {
    x: 1700,
    y: 500,
    t: "snow4",
    g: "snow"
  }, {
    x: 1650,
    y: 600,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 1900,
    y: 550,
    t: "snow5",
    g: "snow"
  }, {
    x: 2100,
    y: 600,
    t: "snow1",
    g: "snow"
  }, {
    x: 2300,
    y: 600,
    t: "snow4",
    g: "snow"
  }, {
    x: 2200,
    y: 600,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2200,
    y: 800,
    t: "snow2",
    g: "snow"
  }, {
    x: 2400,
    y: 800,
    t: "snow1",
    g: "snow"
  }, {
    x: 2300,
    y: 800,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2250,
    y: 1E3,
    t: "snow3",
    g: "snow"
  }, {
    x: 2300,
    y: 1200,
    t: "snow4",
    g: "snow"
  }, {
    x: 2300,
    y: 1400,
    t: "ice5",
    g: "ice"
  }, {
    x: 2200,
    y: 1600,
    t: "snow3",
    g: "snow"
  }, {
    x: 2250,
    y: 1800,
    t: "snow2",
    g: "snow"
  }, {
    x: 2250,
    y: 2E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 2050,
    y: 1950,
    t: "snow5",
    g: "snow"
  }, {
    x: 1900,
    y: 1950,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2250,
    y: 2200,
    t: "ice2",
    g: "ice"
  }, {
    x: 2050,
    y: 2150,
    t: "snow3",
    g: "snow"
  }, {
    x: 2050,
    y: 2350,
    t: "ice1",
    g: "ice"
  }, {
    x: 1850,
    y: 2050,
    t: "snow4",
    g: "snow"
  }, {
    x: 1850,
    y: 2250,
    t: "ice4",
    g: "ice"
  }, {
    x: 1750,
    y: 1850,
    t: "snow5",
    g: "snow"
  }, {
    x: 1650,
    y: 2050,
    t: "ice2",
    g: "ice"
  }, {
    x: 1450,
    y: 2E3,
    t: "ice3",
    g: "ice"
  }, {
    x: 1250,
    y: 1950,
    t: "ice1",
    g: "ice"
  }, {
    x: 1650,
    y: 1650,
    t: "snow3",
    g: "snow"
  }, {
    x: 1730,
    y: 1630,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 1450,
    y: 1700,
    t: "snow4",
    g: "snow"
  }, {
    x: 1250,
    y: 1750,
    t: "snow5",
    g: "snow"
  }, {
    x: 1050,
    y: 1800,
    t: "snow3",
    g: "snow"
  }, {
    x: 1080,
    y: 1905,
    t: "celebrate",
    g: "finish",
    r: -90
  }, {
    x: 1170,
    y: 1905,
    t: "finish",
    g: "scenery",
    r: 90,
    f: "y"
  }, {
    x: 1400,
    y: 930,
    t: "snowman",
    g: "character"
  }, {
    x: 2150,
    y: 2350,
    t: "sm_iceberg",
    g: "character"
  }, {
    x: 350,
    y: 50,
    t: "duck",
    g: "character"
  }, {
    x: 1400,
    y: 700,
    t: "orange_elf",
    g: "character"
  }, {
    x: 1530,
    y: 2300,
    t: "walrus",
    g: "character"
  }], [{
    x: 3E3,
    y: 300,
    t: "snow4",
    g: "snow"
  }, {
    x: 3105,
    y: 405,
    t: "start",
    g: "scenery",
    r: "-90",
    f: "y"
  }, {
    x: 3065,
    y: 305,
    t: "pole",
    g: "obstacle"
  }, {
    x: 3065,
    y: 480,
    t: "pole",
    g: "obstacle"
  }, {
    x: 2800,
    y: 300,
    t: "snow2",
    g: "snow"
  }, {
    x: 2600,
    y: 300,
    t: "snow3",
    g: "snow"
  }, {
    x: 2400,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 2390,
    y: 270,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 2200,
    y: 300,
    t: "snow5",
    g: "snow"
  }, {
    x: 2200,
    y: 500,
    t: "snow3",
    g: "snow"
  }, {
    x: 2050,
    y: 500,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2E3,
    y: 150,
    t: "snow1",
    g: "snow"
  }, {
    x: 1850,
    y: 150,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2E3,
    y: 350,
    t: "snow2",
    g: "snow"
  }, {
    x: 2E3,
    y: 550,
    t: "snow4",
    g: "snow"
  }, {
    x: 1850,
    y: 550,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1800,
    y: 200,
    t: "snow5",
    g: "snow"
  }, {
    x: 1650,
    y: 200,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1800,
    y: 400,
    t: "snow4",
    g: "snow"
  }, {
    x: 1800,
    y: 600,
    t: "snow2",
    g: "snow"
  }, {
    x: 1650,
    y: 600,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1600,
    y: 250,
    t: "snow1",
    g: "snow"
  }, {
    x: 1450,
    y: 250,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1600,
    y: 450,
    t: "snow3",
    g: "snow"
  }, {
    x: 1400,
    y: 500,
    t: "snow2",
    g: "snow"
  }, {
    x: 1300,
    y: 700,
    t: "snow4",
    g: "snow"
  }, {
    x: 1350,
    y: 780,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 1200,
    y: 900,
    t: "snow5",
    g: "snow"
  }, {
    x: 1300,
    y: 1100,
    t: "snow3",
    g: "snow"
  }, {
    x: 1100,
    y: 1100,
    t: "snow1",
    g: "snow"
  }, {
    x: 950,
    y: 1100,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1100,
    y: 1300,
    t: "snow4",
    g: "snow"
  }, {
    x: 950,
    y: 1300,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1300,
    y: 1300,
    t: "snow2",
    g: "snow"
  }, {
    x: 1150,
    y: 1300,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 1500,
    y: 1200,
    t: "snow2",
    g: "snow"
  }, {
    x: 1700,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 1900,
    y: 1200,
    t: "snow3",
    g: "snow"
  }, {
    x: 2100,
    y: 1200,
    t: "ice2",
    g: "ice"
  }, {
    x: 2300,
    y: 1150,
    t: "ice4",
    g: "ice"
  }, {
    x: 2500,
    y: 1150,
    t: "snow4",
    g: "snow"
  }, {
    x: 2700,
    y: 1200,
    t: "snow5",
    g: "snow"
  }, {
    x: 2650,
    y: 1280,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 2900,
    y: 1250,
    t: "snow2",
    g: "snow"
  }, {
    x: 3100,
    y: 1300,
    t: "snow3",
    g: "snow"
  }, {
    x: 3200,
    y: 1500,
    t: "snow1",
    g: "snow"
  }, {
    x: 3250,
    y: 1700,
    t: "snow2",
    g: "snow"
  }, {
    x: 3250,
    y: 1900,
    t: "snow3",
    g: "snow"
  }, {
    x: 3050,
    y: 1750,
    t: "snow5",
    g: "snow"
  }, {
    x: 2900,
    y: 1750,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 3050,
    y: 1950,
    t: "snow4",
    g: "snow"
  }, {
    x: 2850,
    y: 1950,
    t: "snow5",
    g: "snow"
  }, {
    x: 2850,
    y: 1940,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 2650,
    y: 2E3,
    t: "snow3",
    g: "snow"
  }, {
    x: 2450,
    y: 2E3,
    t: "snow2",
    g: "snow"
  }, {
    x: 2250,
    y: 2E3,
    t: "ice4",
    g: "ice"
  }, {
    x: 2050,
    y: 2E3,
    t: "ice5",
    g: "ice"
  }, {
    x: 1850,
    y: 2E3,
    t: "ice3",
    g: "ice"
  }, {
    x: 1650,
    y: 2E3,
    t: "ice2",
    g: "ice"
  }, {
    x: 1450,
    y: 2E3,
    t: "ice1",
    g: "ice"
  }, {
    x: 3250,
    y: 2100,
    t: "snow3",
    g: "snow"
  }, {
    x: 3200,
    y: 2300,
    t: "snow4",
    g: "snow"
  }, {
    x: 3150,
    y: 2500,
    t: "snow5",
    g: "snow"
  }, {
    x: 3120,
    y: 2490,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 2950,
    y: 2550,
    t: "snow2",
    g: "snow"
  }, {
    x: 2750,
    y: 2550,
    t: "snow1",
    g: "snow"
  }, {
    x: 2550,
    y: 2550,
    t: "snow3",
    g: "snow"
  }, {
    x: 2350,
    y: 2550,
    t: "snow1",
    g: "snow"
  }, {
    x: 2150,
    y: 2500,
    t: "snow4",
    g: "snow"
  }, {
    x: 2200,
    y: 2480,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 1950,
    y: 2500,
    t: "snow5",
    g: "snow"
  }, {
    x: 1750,
    y: 2500,
    t: "snow2",
    g: "snow"
  }, {
    x: 1550,
    y: 2500,
    t: "snow3",
    g: "snow"
  }, {
    x: 1350,
    y: 2500,
    t: "snow4",
    g: "snow"
  }, {
    x: 1150,
    y: 2500,
    t: "snow5",
    g: "snow"
  }, {
    x: 950,
    y: 2500,
    t: "snow5",
    g: "snow"
  }, {
    x: 950,
    y: 2300,
    t: "snow1",
    g: "snow"
  }, {
    x: 800,
    y: 2300,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 750,
    y: 2450,
    t: "snow4",
    g: "snow"
  }, {
    x: 750,
    y: 2250,
    t: "snow4",
    g: "snow"
  }, {
    x: 750,
    y: 2050,
    t: "snow3",
    g: "snow"
  }, {
    x: 850,
    y: 2080,
    t: "celebrate",
    g: "finish"
  }, {
    x: 860,
    y: 2170,
    t: "finish",
    g: "scenery",
    f: "x"
  }, {
    x: 2660,
    y: 540,
    t: "angels",
    g: "character"
  }, {
    x: 720,
    y: 300,
    t: "sm_iceberg",
    g: "character"
  }, {
    x: 1220,
    y: 2800,
    t: "duck",
    g: "character"
  }, {
    x: 1150,
    y: 2E3,
    t: "green_elf",
    g: "character"
  }, {
    x: 1830,
    y: 1750,
    t: "walrus",
    g: "character"
  }, {
    x: 2600,
    y: 1750,
    t: "green_elf",
    g: "character"
  }, {
    x: 1900,
    y: 2780,
    t: "orange_elf",
    g: "character"
  }], [{
    x: 3E3,
    y: 2500,
    t: "snow5",
    g: "snow"
  }, {
    x: 3110,
    y: 2570,
    t: "start",
    g: "scenery",
    f: "y"
  }, {
    x: 3010,
    y: 2530,
    t: "pole",
    g: "obstacle"
  }, {
    x: 3185,
    y: 2530,
    t: "pole",
    g: "obstacle"
  }, {
    x: 2800,
    y: 2500,
    t: "snow3",
    g: "snow"
  }, {
    x: 3E3,
    y: 2300,
    t: "snow2",
    g: "snow"
  }, {
    x: 3E3,
    y: 2100,
    t: "snow4",
    g: "snow"
  }, {
    x: 2980,
    y: 2100,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 3E3,
    y: 1900,
    t: "snow1",
    g: "snow"
  }, {
    x: 2950,
    y: 1700,
    t: "snow2",
    g: "snow"
  }, {
    x: 2900,
    y: 1500,
    t: "snow3",
    g: "snow"
  }, {
    x: 2700,
    y: 1400,
    t: "snow4",
    g: "snow"
  }, {
    x: 2600,
    y: 1200,
    t: "snow5",
    g: "snow"
  }, {
    x: 2400,
    y: 1200,
    t: "snow2",
    g: "snow"
  }, {
    x: 2200,
    y: 1300,
    t: "snow3",
    g: "snow"
  }, {
    x: 2E3,
    y: 1400,
    t: "snow4",
    g: "snow"
  }, {
    x: 1800,
    y: 1500,
    t: "snow5",
    g: "snow"
  }, {
    x: 1600,
    y: 1600,
    t: "snow3",
    g: "snow"
  }, {
    x: 1400,
    y: 1700,
    t: "snow2",
    g: "snow"
  }, {
    x: 1200,
    y: 1800,
    t: "snow1",
    g: "snow"
  }, {
    x: 1E3,
    y: 1900,
    t: "snow4",
    g: "snow"
  }, {
    x: 950,
    y: 2100,
    t: "snow2",
    g: "snow"
  }, {
    x: 900,
    y: 2300,
    t: "snow3",
    g: "snow"
  }, {
    x: 1100,
    y: 2300,
    t: "snow5",
    g: "snow"
  }, {
    x: 1300,
    y: 2300,
    t: "snow5",
    g: "snow"
  }, {
    x: 1050,
    y: 2240,
    t: "tree2",
    g: "obstacle"
  }, {
    x: 850,
    y: 2500,
    t: "snow4",
    g: "snow"
  }, {
    x: 1050,
    y: 2500,
    t: "snow5",
    g: "snow"
  }, {
    x: 1250,
    y: 2500,
    t: "snow3",
    g: "moving",
    c: {
      axis: "x",
      movement: "+1350",
      duration: 8E3
    }
  }, {
    x: 850,
    y: 2700,
    t: "snow2",
    g: "snow"
  }, {
    x: 955,
    y: 2880,
    t: "celebrate",
    g: "finish",
    f: "y"
  }, {
    x: 950,
    y: 2780,
    t: "finish",
    g: "scenery",
    f: "y"
  }, {
    x: 1800,
    y: 1620,
    t: "iceberg",
    g: "character"
  }, {
    x: 2020,
    y: 2800,
    t: "duck",
    g: "character"
  }, {
    x: 1250,
    y: 2070,
    t: "orange_elf",
    g: "character"
  }, {
    x: 1630,
    y: 1860,
    t: "walrus",
    g: "character"
  }], [{
    x: 1400,
    y: 1400,
    t: "snow3",
    g: "snow"
  }, {
    x: 1600,
    y: 1500,
    t: "start",
    g: "scenery",
    r: 80
  }, {
    x: 1560,
    y: 1400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1580,
    y: 1575,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1600,
    y: 1320,
    t: "snow4",
    g: "snow"
  }, {
    x: 1800,
    y: 1240,
    t: "snow2",
    g: "snow"
  }, {
    x: 2E3,
    y: 1160,
    t: "snow5",
    g: "snow"
  }, {
    x: 1960,
    y: 960,
    t: "snow1",
    g: "snow"
  }, {
    x: 1900,
    y: 760,
    t: "snow1",
    g: "snow"
  }, {
    x: 1800,
    y: 560,
    t: "snow2",
    g: "snow"
  }, {
    x: 1700,
    y: 360,
    t: "snow4",
    g: "snow"
  }, {
    x: 1500,
    y: 300,
    t: "snow2",
    g: "snow"
  }, {
    x: 1500,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 1300,
    y: 360,
    t: "snow5",
    g: "snow"
  }, {
    x: 1300,
    y: 560,
    t: "snow2",
    g: "snow"
  }, {
    x: 1200,
    y: 200,
    t: "tree2",
    g: "obstacle"
  }, {
    x: 1100,
    y: 460,
    t: "snow3",
    g: "snow"
  }, {
    x: 1050,
    y: 430,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 660,
    t: "snow3",
    g: "snow"
  }, {
    x: 900,
    y: 860,
    t: "snow4",
    g: "snow"
  }, {
    x: 800,
    y: 1060,
    t: "snow4",
    g: "snow"
  }, {
    x: 700,
    y: 1260,
    t: "snow4",
    g: "snow"
  }, {
    x: 800,
    y: 1460,
    t: "snow3",
    g: "snow"
  }, {
    x: 900,
    y: 1660,
    t: "snow2",
    g: "snow"
  }, {
    x: 1100,
    y: 1710,
    t: "snow5",
    g: "snow"
  }, {
    x: 1300,
    y: 1760,
    t: "snow5",
    g: "snow"
  }, {
    x: 1500,
    y: 1860,
    t: "snow3",
    g: "snow"
  }, {
    x: 1700,
    y: 1960,
    t: "snow2",
    g: "snow"
  }, {
    x: 1900,
    y: 2060,
    t: "snow4",
    g: "snow"
  }, {
    x: 1950,
    y: 2260,
    t: "snow3",
    g: "snow"
  }, {
    x: 1900,
    y: 2460,
    t: "snow2",
    g: "snow"
  }, {
    x: 1700,
    y: 2560,
    t: "snow5",
    g: "snow"
  }, {
    x: 1500,
    y: 2660,
    t: "snow4",
    g: "snow"
  }, {
    x: 1300,
    y: 2760,
    t: "snow3",
    g: "snow"
  }, {
    x: 1100,
    y: 2660,
    t: "snow2",
    g: "snow"
  }, {
    x: 900,
    y: 2560,
    t: "snow2",
    g: "snow"
  }, {
    x: 700,
    y: 2460,
    t: "snow4",
    g: "snow"
  }, {
    x: 640,
    y: 2260,
    t: "snow1",
    g: "snow"
  }, {
    x: 590,
    y: 2230,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 840,
    y: 2160,
    t: "snow1",
    g: "snow"
  }, {
    x: 1040,
    y: 2060,
    t: "snow5",
    g: "snow"
  }, {
    x: 1200,
    y: 2160,
    t: "celebrate",
    g: "finish",
    r: 80
  }, {
    x: 1100,
    y: 2160,
    t: "finish",
    g: "scenery",
    r: 80
  }, {
    x: 1050,
    y: 750,
    t: "snowman",
    g: "character"
  }, {
    x: 700,
    y: 2E3,
    t: "green_elf",
    g: "character"
  }, {
    x: 1630,
    y: 2300,
    t: "walrus",
    g: "character"
  }, {
    x: 1E3,
    y: 2370,
    t: "orange_elf",
    g: "character"
  }], [{
    x: 600,
    y: 200,
    t: "snow3",
    g: "snow"
  }, {
    x: 705,
    y: 280,
    t: "start",
    g: "scenery"
  }, {
    x: 605,
    y: 300,
    t: "pole",
    g: "obstacle"
  }, {
    x: 780,
    y: 300,
    t: "pole",
    g: "obstacle"
  }, {
    x: 600,
    y: 400,
    t: "snow4",
    g: "snow"
  }, {
    x: 600,
    y: 600,
    t: "snow2",
    g: "snow"
  }, {
    x: 640,
    y: 800,
    t: "snow5",
    g: "snow"
  }, {
    x: 680,
    y: 1E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 480,
    y: 1E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 380,
    y: 1E3,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 680,
    y: 1200,
    t: "snow4",
    g: "snow"
  }, {
    x: 600,
    y: 1170,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 680,
    y: 1400,
    t: "snow4",
    g: "snow"
  }, {
    x: 620,
    y: 1600,
    t: "snow5",
    g: "snow"
  }, {
    x: 540,
    y: 1800,
    t: "snow3",
    g: "snow"
  }, {
    x: 740,
    y: 1800,
    t: "ice3",
    g: "ice"
  }, {
    x: 940,
    y: 1800,
    t: "ice1",
    g: "ice"
  }, {
    x: 1140,
    y: 1840,
    t: "ice4",
    g: "ice"
  }, {
    x: 1340,
    y: 1880,
    t: "ice5",
    g: "ice"
  }, {
    x: 1540,
    y: 1880,
    t: "ice2",
    g: "ice"
  }, {
    x: 1740,
    y: 1880,
    t: "ice3",
    g: "ice"
  }, {
    x: 1940,
    y: 1880,
    t: "ice1",
    g: "ice"
  }, {
    x: 700,
    y: 2E3,
    t: "snow4",
    g: "snow"
  }, {
    x: 500,
    y: 2E3,
    t: "snow2",
    g: "snow"
  }, {
    x: 400,
    y: 2E3,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 740,
    y: 2200,
    t: "snow5",
    g: "snow"
  }, {
    x: 540,
    y: 2200,
    t: "snow4",
    g: "snow"
  }, {
    x: 440,
    y: 2200,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 780,
    y: 2400,
    t: "snow2",
    g: "snow"
  }, {
    x: 760,
    y: 2520,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 840,
    y: 2600,
    t: "snow3",
    g: "snow"
  }, {
    x: 1040,
    y: 2600,
    t: "snow1",
    g: "snow"
  }, {
    x: 1240,
    y: 2660,
    t: "snow2",
    g: "snow"
  }, {
    x: 1440,
    y: 2720,
    t: "snow3",
    g: "snow"
  }, {
    x: 1640,
    y: 2660,
    t: "snow5",
    g: "snow"
  }, {
    x: 1590,
    y: 2635,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 1840,
    y: 2600,
    t: "snow4",
    g: "snow"
  }, {
    x: 2040,
    y: 2660,
    t: "snow4",
    g: "snow"
  }, {
    x: 2240,
    y: 2720,
    t: "snow5",
    g: "snow"
  }, {
    x: 2240,
    y: 2520,
    t: "snow3",
    g: "snow"
  }, {
    x: 2240,
    y: 2320,
    t: "snow2",
    g: "snow"
  }, {
    x: 2240,
    y: 2120,
    t: "snow3",
    g: "snow"
  }, {
    x: 2140,
    y: 1920,
    t: "snow1",
    g: "snow"
  }, {
    x: 2140,
    y: 1720,
    t: "snow2",
    g: "snow"
  }, {
    x: 2340,
    y: 1920,
    t: "snow3",
    g: "snow"
  }, {
    x: 2340,
    y: 1720,
    t: "snow4",
    g: "snow"
  }, {
    x: 2540,
    y: 1920,
    t: "snow5",
    g: "snow"
  }, {
    x: 2440,
    y: 1920,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2440,
    y: 1720,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2540,
    y: 1720,
    t: "snow3",
    g: "snow"
  }, {
    x: 2200,
    y: 1520,
    t: "snow2",
    g: "snow"
  }, {
    x: 2240,
    y: 1320,
    t: "snow4",
    g: "snow"
  }, {
    x: 2220,
    y: 1120,
    t: "snow1",
    g: "moving",
    c: {
      axis: "y",
      movement: "-200"
    }
  }, {
    x: 2060,
    y: 600,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2160,
    y: 720,
    t: "snow5",
    g: "snow"
  }, {
    x: 2160,
    y: 520,
    t: "snow2",
    g: "snow"
  }, {
    x: 2360,
    y: 720,
    t: "snow3",
    g: "snow"
  }, {
    x: 2360,
    y: 520,
    t: "snow1",
    g: "snow"
  }, {
    x: 2560,
    y: 660,
    t: "snow2",
    g: "moving",
    c: {
      axis: "x",
      movement: "+150"
    }
  }, {
    x: 2910,
    y: 700,
    t: "snow4",
    g: "snow"
  }, {
    x: 3110,
    y: 740,
    t: "ice3",
    g: "ice"
  }, {
    x: 3310,
    y: 740,
    t: "snow2",
    g: "snow"
  }, {
    x: 3510,
    y: 740,
    t: "snow4",
    g: "snow"
  }, {
    x: 3710,
    y: 740,
    t: "snow5",
    g: "snow"
  }, {
    x: 3910,
    y: 850,
    t: "celebrate",
    g: "finish",
    r: -90,
    f: "y"
  }, {
    x: 3810,
    y: 850,
    t: "finish",
    g: "scenery",
    r: -90,
    f: "y"
  }, {
    x: 900,
    y: 900,
    t: "iceberg",
    g: "character"
  }, {
    x: 2500,
    y: 1050,
    t: "angels",
    g: "character"
  }, {
    x: 350,
    y: 600,
    t: "duck",
    g: "character"
  }, {
    x: 300,
    y: 1800,
    t: "green_elf",
    g: "character"
  }, {
    x: 1830,
    y: 2350,
    t: "walrus",
    g: "character"
  }, {
    x: 600,
    y: 2600,
    t: "orange_elf",
    g: "character"
  }, {
    x: 1320,
    y: 2350,
    t: "duck",
    g: "character"
  }, {
    x: 2500,
    y: 2700,
    t: "green_elf",
    g: "character"
  }], [{
    x: 1E3,
    y: 2700,
    t: "snow4",
    g: "snow"
  }, {
    x: 1100,
    y: 2830,
    t: "start",
    g: "scenery",
    f: "y"
  }, {
    x: 1E3,
    y: 2790,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1175,
    y: 2790,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 2500,
    t: "snow3",
    g: "snow"
  }, {
    x: 1100,
    y: 2300,
    t: "snow2",
    g: "moving",
    c: {
      axis: "x",
      movement: "-200"
    }
  }, {
    x: 1E3,
    y: 2100,
    t: "snow5",
    g: "snow"
  }, {
    x: 900,
    y: 1900,
    t: "snow1",
    g: "moving",
    c: {
      axis: "x",
      movement: "+200"
    }
  }, {
    x: 900,
    y: 1700,
    t: "ice1",
    g: "ice"
  }, {
    x: 1100,
    y: 1700,
    t: "ice3",
    g: "ice"
  }, {
    x: 1100,
    y: 1500,
    t: "snow4",
    g: "moving",
    c: {
      axis: "x",
      movement: "-200"
    }
  }, {
    x: 1E3,
    y: 1300,
    t: "ice4",
    g: "ice"
  }, {
    x: 1200,
    y: 1100,
    t: "snow3",
    g: "moving",
    c: {
      axis: "x",
      movement: "-400"
    }
  }, {
    x: 1E3,
    y: 900,
    t: "ice2",
    g: "ice"
  }, {
    x: 800,
    y: 700,
    t: "snow5",
    g: "moving",
    c: {
      axis: "x",
      movement: "+400"
    }
  }, {
    x: 1E3,
    y: 500,
    t: "snow2",
    g: "snow"
  }, {
    x: 1E3,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1105,
    y: 340,
    t: "celebrate",
    g: "finish"
  }, {
    x: 1100,
    y: 440,
    t: "finish",
    g: "scenery"
  }, {
    x: 660,
    y: 1300,
    t: "walrus",
    g: "character"
  }, {
    x: 650,
    y: 1600,
    t: "orange_elf",
    g: "character"
  }, {
    x: 550,
    y: 600,
    t: "duck",
    g: "character"
  }, {
    x: 750,
    y: 2600,
    t: "walrus",
    g: "character"
  }, {
    x: 1330,
    y: 900,
    t: "green_elf",
    g: "character"
  }, {
    x: 1400,
    y: 1300,
    t: "orange_elf",
    g: "character"
  }, {
    x: 1410,
    y: 1700,
    t: "green_elf",
    g: "character"
  }], [{
    x: 200,
    y: 200,
    t: "snow3",
    g: "snow"
  }, {
    x: 280,
    y: 310,
    t: "start",
    g: "scenery",
    r: "90",
    f: "y"
  }, {
    x: 300,
    y: 210,
    t: "pole",
    g: "obstacle"
  }, {
    x: 300,
    y: 385,
    t: "pole",
    g: "obstacle"
  }, {
    x: 400,
    y: 200,
    t: "snow2",
    g: "snow"
  }, {
    x: 600,
    y: 200,
    t: "snow5",
    g: "snow"
  }, {
    x: 800,
    y: 200,
    t: "snow4",
    g: "snow"
  }, {
    x: 760,
    y: 170,
    t: "coal3",
    g: "obstacle"
  }, {
    x: 1E3,
    y: 200,
    t: "snow1",
    g: "snow"
  }, {
    x: 1200,
    y: 200,
    t: "snow2",
    g: "snow"
  }, {
    x: 1400,
    y: 260,
    t: "snow3",
    g: "snow"
  }, {
    x: 1400,
    y: 460,
    t: "snow4",
    g: "snow"
  }, {
    x: 1360,
    y: 660,
    t: "snow2",
    g: "snow"
  }, {
    x: 1160,
    y: 660,
    t: "snow5",
    g: "snow"
  }, {
    x: 960,
    y: 660,
    t: "snow5",
    g: "snow"
  }, {
    x: 760,
    y: 660,
    t: "snow3",
    g: "snow"
  }, {
    x: 560,
    y: 600,
    t: "snow2",
    g: "snow"
  }, {
    x: 560,
    y: 1E3,
    t: "snow4",
    g: "moving",
    c: {
      axis: "y",
      movement: "-200"
    }
  }, {
    x: 560,
    y: 1200,
    t: "snow3",
    g: "snow"
  }, {
    x: 760,
    y: 1240,
    t: "snow1",
    g: "snow"
  }, {
    x: 960,
    y: 1280,
    t: "snow2",
    g: "snow"
  }, {
    x: 1160,
    y: 1280,
    t: "snow3",
    g: "snow"
  }, {
    x: 1160,
    y: 1080,
    t: "snow4",
    g: "snow"
  }, {
    x: 1360,
    y: 1280,
    t: "snow2",
    g: "snow"
  }, {
    x: 1160,
    y: 1280,
    t: "tree2",
    g: "obstacle"
  }, {
    x: 1130,
    y: 1060,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 1360,
    y: 1080,
    t: "snow5",
    g: "snow"
  }, {
    x: 1560,
    y: 1200,
    t: "snow4",
    g: "snow"
  }, {
    x: 1760,
    y: 1200,
    t: "snow2",
    g: "snow"
  }, {
    x: 1760,
    y: 1E3,
    t: "ice3",
    g: "ice"
  }, {
    x: 1700,
    y: 800,
    t: "snow4",
    g: "snow"
  }, {
    x: 1760,
    y: 600,
    t: "snow4",
    g: "snow"
  }, {
    x: 1700,
    y: 400,
    t: "snow3",
    g: "snow"
  }, {
    x: 1700,
    y: 200,
    t: "snow5",
    g: "snow"
  }, {
    x: 1900,
    y: 200,
    t: "snow2",
    g: "snow"
  }, {
    x: 2100,
    y: 200,
    t: "snow2",
    g: "snow"
  }, {
    x: 2180,
    y: 190,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 2300,
    y: 200,
    t: "snow1",
    g: "snow"
  }, {
    x: 2410,
    y: 300,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 2260,
    y: 400,
    t: "snow2",
    g: "snow"
  }, {
    x: 2300,
    y: 600,
    t: "ice1",
    g: "ice"
  }, {
    x: 2260,
    y: 800,
    t: "snow3",
    g: "snow"
  }, {
    x: 2260,
    y: 1E3,
    t: "snow4",
    g: "snow"
  }, {
    x: 2300,
    y: 1200,
    t: "snow2",
    g: "snow"
  }, {
    x: 2415,
    y: 1280,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 2260,
    y: 1400,
    t: "snow5",
    g: "snow"
  }, {
    x: 2300,
    y: 1600,
    t: "snow4",
    g: "snow"
  }, {
    x: 2260,
    y: 1800,
    t: "snow1",
    g: "snow"
  }, {
    x: 2260,
    y: 2E3,
    t: "ice2",
    g: "ice"
  }, {
    x: 2460,
    y: 2E3,
    t: "snow3",
    g: "snow"
  }, {
    x: 2460,
    y: 1800,
    t: "snow2",
    g: "snow"
  }, {
    x: 2310,
    y: 1800,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2660,
    y: 2E3,
    t: "snow5",
    g: "snow"
  }, {
    x: 2660,
    y: 1800,
    t: "snow4",
    g: "snow"
  }, {
    x: 2510,
    y: 1800,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 2860,
    y: 2E3,
    t: "ice1",
    g: "ice"
  }, {
    x: 2860,
    y: 1800,
    t: "snow3",
    g: "snow"
  }, {
    x: 2800,
    y: 1600,
    t: "snow4",
    g: "snow"
  }, {
    x: 2740,
    y: 1400,
    t: "snow2",
    g: "snow"
  }, {
    x: 2740,
    y: 1200,
    t: "snow5",
    g: "snow"
  }, {
    x: 2740,
    y: 1E3,
    t: "snow2",
    g: "snow"
  }, {
    x: 2740,
    y: 800,
    t: "snow3",
    g: "snow"
  }, {
    x: 2740,
    y: 600,
    t: "snow4",
    g: "moving",
    c: {
      axis: "y",
      movement: "-200"
    }
  }, {
    x: 2740,
    y: 200,
    t: "snow2",
    g: "snow"
  }, {
    x: 2710,
    y: 190,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 2940,
    y: 200,
    t: "snow5",
    g: "snow"
  }, {
    x: 3140,
    y: 200,
    t: "snow2",
    g: "snow"
  }, {
    x: 3180,
    y: 400,
    t: "snow3",
    g: "snow"
  }, {
    x: 3180,
    y: 600,
    t: "snow5",
    g: "snow"
  }, {
    x: 3180,
    y: 800,
    t: "ice3",
    g: "ice"
  }, {
    x: 3180,
    y: 1E3,
    t: "ice2",
    g: "ice"
  }, {
    x: 3180,
    y: 1200,
    t: "snow4",
    g: "snow"
  }, {
    x: 3380,
    y: 1200,
    t: "snow5",
    g: "snow"
  }, {
    x: 3580,
    y: 1200,
    t: "snow5",
    g: "snow"
  }, {
    x: 3780,
    y: 1200,
    t: "snow2",
    g: "snow"
  }, {
    x: 3980,
    y: 1310,
    t: "celebrate",
    g: "finish",
    r: -90,
    f: "y"
  }, {
    x: 3880,
    y: 1310,
    t: "finish",
    g: "scenery",
    r: -90,
    f: "y"
  }, {
    x: 3100,
    y: 1500,
    t: "iceberg",
    g: "character"
  }, {
    x: 1300,
    y: 1550,
    t: "angels",
    g: "character"
  }, {
    x: 2580,
    y: 1550,
    t: "walrus",
    g: "character"
  }, {
    x: 880,
    y: 1E3,
    t: "orange_elf",
    g: "character"
  }], [{
    x: 96,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 96,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 120,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 270,
    y: 800,
    t: "snow1",
    g: "snow"
  }, {
    x: 370,
    y: 950,
    t: "snow1",
    g: "snow"
  }, {
    x: 400,
    y: 1100,
    t: "ice1",
    g: "ice"
  }, {
    x: 350,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 325,
    y: 1350,
    t: "snow1",
    g: "snow"
  }, {
    x: 400,
    y: 1300,
    t: "snow1",
    g: "snow"
  }, {
    x: 450,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 575,
    y: 1150,
    t: "snow1",
    g: "snow"
  }, {
    x: 675,
    y: 1E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 700,
    y: 900,
    t: "snow1",
    g: "snow"
  }, {
    x: 700,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 700,
    y: 500,
    t: "finish",
    g: "finish"
  }], [{
    x: 2070,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 2070,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 2070,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 1870,
    y: 700,
    t: "snow1",
    g: "moving",
    c: {
      axis: "y",
      movement: "-100"
    }
  }, {
    x: 1670,
    y: 750,
    t: "snow1",
    g: "snow"
  }, {
    x: 1470,
    y: 800,
    t: "ice1",
    g: "ice"
  }, {
    x: 1370,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 1370,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 1400,
    y: 350,
    t: "snow1",
    g: "snow"
  }, {
    x: 1200,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1200,
    y: 100,
    t: "snow5",
    g: "finish"
  }], [{
    x: 96,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 96,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 96,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 96,
    y: 900,
    t: "snow1",
    g: "snow"
  }, {
    x: 150,
    y: 1050,
    t: "snow1",
    g: "snow"
  }, {
    x: 150,
    y: 1250,
    t: "snow1",
    g: "snow"
  }, {
    x: 350,
    y: 1250,
    t: "snow1",
    g: "snow"
  }, {
    x: 550,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 750,
    y: 1250,
    t: "ice1",
    g: "ice"
  }, {
    x: 950,
    y: 1250,
    t: "snow1",
    g: "snow"
  }, {
    x: 1150,
    y: 1250,
    t: "snow1",
    g: "snow"
  }, {
    x: 1350,
    y: 1300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1550,
    y: 1300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1600,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 1600,
    y: 1E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 1700,
    y: 900,
    t: "snow1",
    g: "snow"
  }, {
    x: 1500,
    y: 900,
    t: "snow1",
    g: "snow"
  }, {
    x: 1300,
    y: 850,
    t: "snow1",
    g: "snow"
  }, {
    x: 1100,
    y: 850,
    t: "snow1",
    g: "snow"
  }, {
    x: 1100,
    y: 650,
    t: "snow1",
    g: "snow"
  }, {
    x: 1100,
    y: 450,
    t: "snow1",
    g: "snow"
  }, {
    x: 1300,
    y: 450,
    t: "snow1",
    g: "snow"
  }, {
    x: 1450,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 1600,
    y: 500,
    t: "snow5",
    g: "finish"
  }], [{
    x: 96,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 96,
    y: 500,
    t: "snow1",
    g: "snow"
  }, {
    x: 120,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 270,
    y: 800,
    t: "snow1",
    g: "snow"
  }, {
    x: 370,
    y: 950,
    t: "snow1",
    g: "snow"
  }, {
    x: 400,
    y: 1100,
    t: "ice1",
    g: "ice"
  }, {
    x: 350,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 325,
    y: 1350,
    t: "snow1",
    g: "snow"
  }, {
    x: 400,
    y: 1300,
    t: "snow1",
    g: "snow"
  }, {
    x: 450,
    y: 1200,
    t: "snow1",
    g: "snow"
  }, {
    x: 575,
    y: 1150,
    t: "snow1",
    g: "snow"
  }, {
    x: 675,
    y: 1E3,
    t: "snow1",
    g: "snow"
  }, {
    x: 700,
    y: 900,
    t: "snow1",
    g: "snow"
  }, {
    x: 700,
    y: 700,
    t: "snow1",
    g: "snow"
  }, {
    x: 700,
    y: 500,
    t: "finish",
    g: "finish"
  }], [{
    x: 1E3,
    y: 300,
    t: "snow1",
    g: "snow"
  }, {
    x: 1105,
    y: 380,
    t: "start",
    g: "scenery"
  }, {
    x: 1005,
    y: 400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1180,
    y: 400,
    t: "pole",
    g: "obstacle"
  }, {
    x: 1050,
    y: 500,
    t: "snow2",
    g: "snow"
  }, {
    x: 1100,
    y: 700,
    t: "snow3",
    g: "snow"
  }, {
    x: 1200,
    y: 900,
    t: "snow4",
    g: "snow"
  }, {
    x: 1100,
    y: 1100,
    t: "snow5",
    g: "snow"
  }, {
    x: 1300,
    y: 1100,
    t: "snow3",
    g: "snow"
  }, {
    x: 1500,
    y: 1150,
    t: "snow2",
    g: "snow"
  }, {
    x: 1700,
    y: 1200,
    t: "snow4",
    g: "snow"
  }, {
    x: 1900,
    y: 1250,
    t: "snow1",
    g: "snow"
  }, {
    x: 2100,
    y: 1300,
    t: "snow3",
    g: "snow"
  }, {
    x: 2150,
    y: 1500,
    t: "snow2",
    g: "snow"
  }, {
    x: 2E3,
    y: 1700,
    t: "snow5",
    g: "snow"
  }, {
    x: 2200,
    y: 1700,
    t: "ice1",
    g: "ice"
  }, {
    x: 2150,
    y: 1900,
    t: "snow5",
    g: "snow"
  }, {
    x: 2100,
    y: 2100,
    t: "snow4",
    g: "snow"
  }, {
    x: 2E3,
    y: 2300,
    t: "snow2",
    g: "snow"
  }, {
    x: 1800,
    y: 2350,
    t: "snow3",
    g: "snow"
  }, {
    x: 1600,
    y: 2350,
    t: "snow1",
    g: "snow"
  }, {
    x: 1400,
    y: 2300,
    t: "ice3",
    g: "ice"
  }, {
    x: 1200,
    y: 2300,
    t: "snow3",
    g: "snow"
  }, {
    x: 1E3,
    y: 2300,
    t: "snow2",
    g: "snow"
  }, {
    x: 1030,
    y: 2405,
    t: "celebrate",
    g: "finish",
    r: -90
  }, {
    x: 1135,
    y: 2410,
    t: "finish",
    g: "scenery",
    r: 90,
    f: "y"
  }, {
    x: 1830,
    y: 2E3,
    t: "walrus",
    g: "character"
  }, {
    x: 900,
    y: 900,
    t: "orange_elf",
    g: "character"
  }, {
    x: 700,
    y: 1400,
    t: "iceberg",
    g: "character"
  }, {
    x: 1460,
    y: 440,
    t: "angels",
    g: "character"
  }, {
    x: 700,
    y: 300,
    t: "tree1",
    g: "obstacle"
  }, {
    x: 700,
    y: 700,
    t: "tree2",
    g: "obstacle"
  }, {
    x: 700,
    y: 1100,
    t: "coal1",
    g: "obstacle"
  }, {
    x: 700,
    y: 1500,
    t: "coal2",
    g: "obstacle"
  }, {
    x: 700,
    y: 1900,
    t: "coal3",
    g: "obstacle"
  }]];
  c.Penguin = function (a) {
    this.game = a;
    this.elem = a.add.sprite("-200", "-200", "sprite-penguin");
    this.shadow = this.elem.addChild(a.make.sprite(0, 6, "shadow-penguin"));
    this.dust = this.elem.addChild(a.make.sprite(-30, 0, "sprite-dust"));
    this.shadow.anchor.set(.4, .5);
    this.dust.anchor.set(.4, .5);
    this.dust.animations.add("default");
    this.dust.animations.play("default", 12, !0);
    this.dust.alpha = 0;
    this.dust.tint = 14407886;
    this.elem.animations.add("slide", [0], !1);
    this.elem.animations.add("accelerating", [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2], 12, !0);
    this.elem.animations.add("falling", [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 12, !1);
    this.elem.animations.add("celebrating", [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 12, !1);
    a.physics.enable(this.elem, Phaser.Physics.ARCADE);
    this.elem.allowGravity = !1;
    this.elem.anchor.set(.4, .5);
    this.elem.angle = 90;
    this.elem.body.setSize(66, 66);
    this.elem.body.offset.x = 27;
    this.elem.body.offset.y = 25;
    this.elem.body.bounce.set(.3, .3);
    this.elem.body.collideWorldBounds = !0;
    this.elem.bringToTop();
    this.slide();
  };
  c.Penguin.prototype.adjustAngle = function () {
    if (0 !== this.elem.body.velocity.x || 0 !== this.elem.body.velocity.y) {
      var a = Math.atan2(this.elem.body.velocity.y, this.elem.body.velocity.x);
      a *= 180 / Math.PI;
      a = -1 * this.game.math.getShortestAngle(a, this.elem.angle);
      this.elem.angle += a / 8;
      this.shadow.x = 6 * -Math.cos(this.elem.angle * Math.PI / 180);
      this.shadow.y = 6 * Math.sin(this.elem.angle * Math.PI / 180);
    }
  };
  c.Penguin.prototype.centerInElement = function (a) {
    var b = a.y + a.height / 2;
    this.elem.x = a.x + a.width / 2;
    this.elem.y = b;
  };
  c.Penguin.prototype.multiplyVelocity = function (a) {
    this.elem.body.velocity.x *= a;
    this.elem.body.velocity.y *= a;
  };
  c.Penguin.prototype.die = function () {
    this.dustAlpha(0);
    this.state = c.Constants.PENGUIN_STATES.falling;
    this.shadow.alpha = 0;
    this.elem.animations.play("falling");
    this.elem.sendToBack();
  };
  c.Penguin.prototype.boost = function () {
    this.state != c.Constants.PENGUIN_STATES.accelerating && (this.state = c.Constants.PENGUIN_STATES.accelerating, this.elem.animations.play("accelerating"));
  };
  c.Penguin.prototype.slide = function () {
    this.state = c.Constants.PENGUIN_STATES.sliding;
    this.elem.animations.play("slide");
  };
  c.Penguin.prototype.dustAlpha = function (a) {
    this.dust.alpha = a;
  };
  c.Penguin.prototype.reset = function () {
    this.elem.body.velocity.x = 0;
    this.elem.body.velocity.y = 0;
    this.shadow.alpha = 1;
    this.slide();
    this.elem.bringToTop();
  };
  c.Wave = function (a) {
    this.game = a;
    this.wave = a.add.group();
    for (a = 0; 4 > a; a++) {
      let a = this.wave.create(3E3 * Math.random(), 3E3 * Math.random(), "sprite-wave" + Math.ceil(2 * Math.random())),
        d = a.animations.add("default");
      a.scale.setTo(2, 2);
      a.animations.play("default", 12, !1);
      d.onComplete.add(function () {
        a.x = Math.floor(2E3 * Math.random() + 500);
        a.y = Math.floor(2E3 * Math.random() + 500);
        a.angle += 180 * Math.floor(2 * Math.random());
        a.animations.play("default", 10, !1);
      });
    }
  };
  c.Wave.prototype.sendBack = function () {
    this.game.world.sendToBack(this.wave);
  };
  c.Start = function (a) {
    this.game = a;
    a.pause = this.pause.bind(this);
    a.unpause = this.unpause.bind(this);
    a.setScale = this.setScale.bind(this);
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("sound-trigger", "pnd_slide_start");
    this.isMobileOrIE = "function" != typeof Object.assign;
    this.isLowPerformance = !1;
  };
  c.Start.prototype.create = function () {
    this.onPath = !0;
    this.onFastIce = !1;
    this.rendering = !0;
    this.dead = !1;
    this.totalTimer = this.timer = 0;
    this.level = 1;
    this.maxLevels = c.Constants.TOTAL_LEVELS;
    this.movementForce = c.Constants.MOVEMENT_FORCE;
    this.movementMultiple = c.Constants.SPEED_MULTIPLE_DEFAULT;
    this.groups = [];
    this.gameStartTime = +new Date();
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = !0;
    this.game.scale.pageAlignVertically = !0;
    this.world.setBounds(0, 0, c.Constants.WORLD_WIDTH, c.Constants.WORLD_HEIGHT);
    this.setScale(this.game.st_parent.scale);
    this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter_, this);
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.penguin = new c.Penguin(this);
    this.camera.follow(this.penguin.elem);
    this.isMobileOrIE || (this.video = this.game.add.video("background"), this.vidsprite = this.video.addToWorld(0, 0, 0, 0, 2.2, 3), this.wave = new c.Wave(this));
    this.debugElements = [];
    this.game.debug.reset();
    this.keys = this.game.input.keyboard.createCursorKeys();
    $(window).on("deviceorientation.penguindash", this.handleOrientation_.bind(this));
    this.initLevels_();
    this.showLevel_(1);
    this.game.penguinPauseOnStart && (this.game.paused = !0);
    this.isMobileOrIE || this.video.play(!0);
  };
  c.Start.prototype.update = function () {
    this.game.st_parent.resolveStart();
    this.isMobileOrIE || (this.wave.sendBack(), this.world.sendToBack(this.vidsprite));
    this.game.stage.backgroundColor = "#3ec4f0";
    for (var a = 0; a < this.debugElements.length; a++);
    if (this.onPath || this.rendering) {
      this.onFastIce || (this.movementMultiple = c.Constants.SPEED_MULTIPLE_DEFAULT, this.penguin.multiplyVelocity(c.Constants.SPEED_DECAY_DEFAULT));
      window.santaApp.fire("sound-trigger", {
        name: "pnd_fast_ice",
        args: [this.onFastIce]
      });
      this.onPath = this.rendering ? !0 : !1;
      this.accelerating = this.rendering = this.onFastIce = this.onMoving = !1;
      this.keys.left.isDown ? (this.penguin.elem.body.velocity.x -= this.movementForce * this.movementMultiple, this.accelerating = !0) : this.keys.right.isDown && (this.penguin.elem.body.velocity.x += this.movementForce * this.movementMultiple, this.accelerating = !0);
      this.keys.up.isDown ? (this.penguin.elem.body.velocity.y -= this.movementForce * this.movementMultiple, this.accelerating = !0) : this.keys.down.isDown && (this.penguin.elem.body.velocity.y += this.movementForce * this.movementMultiple, this.accelerating = !0);
      this.accelerating && this.game.st_parent.tutorial.off("device-tilt keys-arrows spacenav-arrows");
      this.accelerating ? this.penguin.boost() : this.penguin.slide();
      a = (Math.abs(this.penguin.elem.body.velocity.y) + Math.abs(this.penguin.elem.body.velocity.x)) / 1E3;
      window.santaApp.fire("sound-trigger", {
        name: "pnd_slide",
        args: [a || 0]
      });
      this.penguin.dustAlpha(2 * a - .2);
      this.penguin.adjustAngle();
      for (let a in this.levels[this.level - 1]) this.levels[this.level - 1][a].continue && this.physics.arcade.overlap(this.penguin.elem, this.levels[this.level - 1][a].group, null, null, this) && (this.onPath = !0), this.additionalGroupHandling_(this.levels[this.level - 1][a], this.levels[this.level - 1][a].group);
    } else this.dieAndRestart_();
  };
  c.Start.prototype.setScale = function (a) {
    this.game.scale.setGameSize(this.game.st_parent.sceneElem.width() / a, this.game.st_parent.sceneElem.height() / a);
  };
  c.Start.prototype.pause = function () {
    this.game.paused = !0;
    window.santaApp.fire("sound-trigger", "pnd_slide_stop");
  };
  c.Start.prototype.unpause = function () {
    this.game.paused = !1;
    window.santaApp.fire("sound-trigger", "pnd_slide_start");
  };
  c.Start.prototype.initLevels_ = function () {
    this.levels = [];
    this.levelData = c.config.Levels;
    for (let e = 0; e < this.maxLevels; e++) {
      let f = this.initGroups_();
      for (var a = 0; a < this.levelData[e].length; a++) {
        var b = this.levelData[e][a];
        if ("character" == b.g) {
          if (!this.isLowPerformance) {
            var d = this.isMobileOrIE ? f[b.g].group.create(b.x, b.y, "element-" + b.t) : f[b.g].group.create(b.x, b.y, "sprite-" + b.t);
            this.additionalElementInit_(d, b);
          }
        } else this.isLowPerformance && "obstacle" == b.g || (d = f[b.g].group.create(b.x, b.y, "element-" + b.t), this.additionalElementInit_(d, b), this.game.cache.checkImageKey("element-" + b.t + "-shadow") && (d = f.shadow.group.create(b.x - 6, b.y + 4, "element-" + b.t + "-shadow"), this.additionalElementInit_(d, b)));
      }
      this.additionalGroupInit_(f, e);
      this.levels.push(f);
    }
  };
  c.Start.prototype.initGroups_ = function () {
    for (var a = {}, b = 0; b < c.Constants.GROUPS.length; b++) {
      let d = c.Constants.GROUPS[b];
      "function" != typeof Object.assign && (Object.assign = function (a) {
        if (null == a) throw new TypeError("Cannot convert undefined or null to object");
        a = Object(a);
        for (var b = 1; b < arguments.length; b++) {
          var d = arguments[b];
          if (null != d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
        }
        return a;
      });
      a[d.id] = Object.assign({}, d);
      a[d.id].group = this.add.group();
      a[d.id].group.enableBody = !0;
      a[d.id].group.physicsBodyType = Phaser.Physics.ARCADE;
      a[d.id].group.visible = !1;
      d.front ? this.world.bringToTop(a[d.id].group) : this.world.sendToBack(a[d.id].group);
    }
    return a;
  };
  c.Start.prototype.additionalElementInit_ = function (a, b) {
    "character" != b.g && (a.body.immovable = !0, a.scale.setTo(.5, .5));
    switch (b.g) {
      case "obstacle":
        this.debugElements.push(a);
        (b = c.Constants.OBSTACLES[b.t]) && b.width && b.height && b.square ? a.body.setSize(b.width, b.height) : a.body.setCircle(b.width / 4);
        b && b.offsetX && b.offsetY && (a.body.offset.x = b.offsetX, a.body.offset.y = b.offsetY);
        break;
      case "character":
        a.body.setSize(0, 0);
        this.isMobileOrIE || ("undefined" != typeof c.Constants.CHARACTERS[b.t] ? a.animations.add("default", c.Constants.CHARACTERS[b.t]) : a.animations.add("default"), a.animations.play("default", 10, !0));
        break;
      case "moving":
        if (b.c && b.c.axis && b.c.movement) {
          let d = {};
          d[b.c.axis] = b.c.movement;
          this.add.tween(a).to(d, b.c.duration || c.Constants.SPEED_MOVING_ICE, Phaser.Easing.Cubic.InOut, !0, 0, -1, !0);
        }
        break;
      case "finish":
      case "scenery":
        a.anchor.set(.5, .5), b.r && (a.angle = b.r), "y" == b.f && (a.scale.y = -.5), "x" == b.f && (a.scale.x = -.5);
    }
  };
  c.Start.prototype.additionalGroupInit_ = function (a) {
    for (var b in a) switch (b) {
      case "prize":
        let g = a.snow.group.children.concat(a.ice.group.children),
          q = a.snow.group.children.length,
          r = Math.floor(g.length / 2);
        for (var d = 0; d < r; d++) {
          for (var e = Math.floor(6 * Math.random()) + 1, f = Math.floor(Math.random() * (g.length - 1)) + 1; f == q - 1;) f = Math.floor(Math.random() * (g.length - 1)) + 1;
          f = g[f];
          e = a[b].group.create(f.x + 50 + (f.width - 120) * Math.random(), f.y + 50 + (f.width - 120) * Math.random(), "element-present" + e);
          this.additionalElementInit_(e, {
            g: "prize"
          });
        }
    }
  };
  c.Start.prototype.additionalGroupHandling_ = function (a, b) {
    if (a.update) for (let e = 0; e < a.update.length; e++) switch (a.update[e]) {
      case "fast":
        this.physics.arcade.overlap(this.penguin.elem, b, this.overlapFastIce_, null, this);
        break;
      case "moving":
        var d = !1;
        b.forEach(function (a) {
          this.physics.arcade.overlap(this.penguin.elem, a, this.overlapMovement_, null, this) && (d = !0);
        }, this);
        d || (this.movingOffset = null);
        break;
      case "prize":
        this.physics.arcade.overlap(this.penguin.elem, b, this.overlapPrize_, null, this);
        break;
      case "finish":
        this.physics.arcade.overlap(this.penguin.elem, b, this.finishLevel_, null, this);
        break;
      case "collide":
        this.physics.arcade.collide(this.penguin.elem, b, function () {
          window.santaApp.fire("sound-trigger", "pnd_hit");
        });
    }
  };
  c.Start.prototype.showLevel_ = function (a) {
    a = a || this.level;
    if (this.levels[a - 2]) for (var b in this.levels[a - 2]) this.levels[a - 2][b].group.visible = !1;
    for (b in this.levels[a - 1]) this.levels[a - 1][b].group.visible = !0;
    this.penguin.centerInElement(this.levels[a - 1].snow.group.getChildAt(0));
    this.world.bringToTop(this.levels[a - 1].obstacle.group);
    this.world.bringToTop(this.levels[a - 1].scenery.group);
    this.onPath = this.rendering = !0;
  };
  c.Start.prototype.updateCounter_ = function () {
    this.timer++;
    this.game.st_parent.scoreboard.onFrame(-1);
  };
  c.Start.prototype.overlapFastIce_ = function () {
    this.onFastIce = !0;
    1 == this.movementMultiple && (this.movementMultiple = c.Constants.SPEED_MULTIPLE_FAST, this.penguin.multiplyVelocity(this.movementMultiple));
  };
  c.Start.prototype.overlapMovement_ = function (a, b) {
    this.onMoving = !0;
    null == this.movingOffset && (this.movingOffset = {
      x: b.x,
      y: b.y
    });
    a = b.y - this.movingOffset.y;
    this.penguin.elem.x += b.x - this.movingOffset.x;
    this.penguin.elem.y += a;
    this.movingOffset = {
      x: b.x,
      y: b.y
    };
  };
  c.Start.prototype.overlapPrize_ = function (a, b) {
    b.kill();
    window.santaApp.fire("sound-trigger", "pnd_pickup");
    this.game.st_parent.scoreboard.addScore(c.Constants.POINTS_GIFT_BASIC);
  };
  c.Start.prototype.dieAndRestart_ = function () {
    this.dead || (window.santaApp.fire("sound-trigger", "pnd_freeze"), window.santaApp.fire("sound-trigger", "pnd_slide_stop"), this.penguin.die(), this.dead = !0, window.setTimeout(() => {
      this.dead = !1;
      this.restartLevel_();
      this.game.st_parent.scoreboard.onFrame(-c.Constants.TIME_LOSE);
    }, 2500));
    this.penguin.multiplyVelocity(c.Constants.SPEED_DECAY_FAST);
  };
  c.Start.prototype.finishLevel_ = function () {
    this.pause();
    this.level >= this.maxLevels ? this.gameover_() : (this.level++, this.game.st_parent.scoreboard.setLevel(this.level - 1), this.game.st_parent.scoreboard.addScore(c.Constants.POINTS_LEVEL_COMPLETE), this.game.st_parent.levelUp.show(this.level, this.restartLevel_.bind(this)), window.santaApp.fire("sound-trigger", "pnd_level_up"));
  };
  c.Start.prototype.restartLevel_ = function () {
    this.totalTimer += this.timer;
    this.timer = 0;
    this.penguin.reset();
    this.showLevel_();
    this.unpause();
    window.santaApp.fire("sound-trigger", "pnd_restart");
  };
  c.Start.prototype.gameover_ = function () {
    this.game.st_parent.freezeGame();
    this.game.st_parent.gameoverView.show();
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("sound-trigger", "pnd_game_over");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "penguindash",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  c.Start.prototype.handleOrientation_ = function (a) {
    var b = a.originalEvent;
    b.gamma && b.beta && b.alpha && !this.game.paused && !this.dead && (a = b.gamma, b = b.beta, this.penguin.elem.body.velocity.x += .5 * a, this.penguin.elem.body.velocity.y += .25 * b, (10 < Math.abs(a) || 5 < Math.abs(b)) && this.game.st_parent.tutorial.off("device-tilt keys-arrows spacenav-arrows"));
  };
  c.shared = {};
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
  c.shared.LevelUp = k;
  function k(a, b, d) {
    this.bgElem = $(b);
    this.numberElem = $(d);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  k.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  k.prototype.onResize_ = function () {
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
  k.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  k.prototype.numberShown_ = function () {
    l(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  k.prototype.show = function (a, b) {
    this.bgElem.addClass("is-visible");
    l(this.bgElem, "transitionend", 1, b);
    this.bgElem.css("border-width", this.bgBorderWidth);
    l(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function l(a, b, d, e) {
    function f() {
      g || (g = !0, a.removeEventListener(b, f), e && e());
    }
    a = c.shared.utils.unwrapElement(a);
    var g = !1;
    a.addEventListener(b, f);
    window.setTimeout(f, 1E3 * d);
  }
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
  c.shared.Scoreboard = m;
  function n(a, b) {
    a = h ? h[a] : void 0;
    return +a === a ? a : b;
  }
  function m(a, b, d) {
    this.game = a;
    this.initialCountdown_ = n("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  m.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  m.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  m.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = n("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  m.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  m.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  m.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  m.prototype.announce_ = function () {
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
  function p(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  c.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = p(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = p(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  c.Game = function (a, b) {
    this.startPromise = new Promise(a => {
      this.resolveStart = a;
    });
    this.startPromise.then(() => {
      this.updateSize_();
    });
    this._realElem = a;
    this.elem = $(a);
    this.componentDir = b;
    this.sceneElem = this.elem.find("#penguindash-game");
    this.level = 1;
    this.sceneSize = {
      width: 0,
      height: 0
    };
    this.entities = [];
    this.hidden = this.paused = this.isPlaying = !1;
    this.scale = 1;
    this.gameStartTime = +new Date();
    this.watchSceneSize_();
    this.watchOrientation_();
    this.scoreboard = new c.shared.Scoreboard(this, this.elem.find(".board"), c.Constants.TOTAL_LEVELS);
    this.levelUp = new c.shared.LevelUp(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
    this.gameoverView = new c.shared.Gameover(this, this.elem.find(".gameover"));
    this.tutorial = new c.shared.Tutorial("device-tilt keys-arrows spacenav-arrows");
    this.gyroPresent = !1;
    var d = function (a) {
      if (!this.gyroPresent) {
        a = a.originalEvent;
        if (a.alpha || a.beta || a.gamma) this.gyroPresent = !0;
        this.showLockscreenMessage();
      }
    }.bind(this);
    $(window).on("deviceorientation.penguindash", function (a) {
      d(a);
    });
    this.initGame = this.initGame.bind(this);
    this.initGame(!0);
  };
  c.Game.prototype.start = function () {
    function a() {
      b.width && b.height || (window.dispatchEvent(new Event("resize")), window.requestAnimationFrame(a));
    }
    this.tutorial.start();
    this.game.penguinPauseOnStart = !1;
    this.game.paused = !1;
    this.scoreboard.reset();
    this.scoreboard.restart();
    const b = this._realElem.querySelector("canvas");
    a();
  };
  c.Game.prototype.restart = function () {
    this.initGame(!1);
    this.scoreboard.reset();
    this.scoreboard.restart();
  };
  c.Game.prototype.initGame = function (a) {
    window.PhaserGlobal = {};
    window.PhaserGlobal.disableAudio = !0;
    this.game && this.game.destroy();
    this.game = new Phaser.Game("100%", "100%", Phaser.AUTO, this.sceneElem[0], null, !0);
    this.game.st_parent = this;
    this.game.penguinPauseOnStart = a;
    this.game.state.add("Preloader", c.Preloader);
    this.game.state.add("Game", c.Start);
    this.game.state.start("Preloader");
  };
  c.Game.prototype.setScale = function (a) {
    this.scale = a;
    this.game && this.game.world && this.game.setScale(a);
  };
  c.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
    this.game && this.game.pause();
  };
  c.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.isPlaying = !0, this.elem.removeClass("frozen").focus(), this.game && this.game.unpause());
  };
  c.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverView.show();
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "penguindash",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  c.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  c.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  c.Game.prototype.showLockscreenMessage = function () {
    if (this.gyroPresent) {
      var a = this.paused,
        b = this.elem.find(".lockscreen");
      b.attr("hidden") || (a || this.pause(), b.removeClass("hidden"), window.setTimeout(() => {
        b.addClass("hidden");
        a || this.resume();
      }, 3E3));
    }
  };
  c.Game.prototype.updateSize_ = function () {
    var a = window.innerWidth,
      b = window.innerHeight - window.santaApp.headerSize,
      d = 980 > a ? (a + 490) / 1470 : 1;
    this.setScale(d);
    console.info("got size", d);
    this.sceneSize.height = 1 / this.scale * b;
    this.sceneSize.width = 1 / this.scale * a;
    (a = this._realElem.querySelector("canvas")) ? a.focus() : this._realElem.focus();
    this.showLockscreenMessage();
  };
  c.Game.prototype.watchSceneSize_ = function () {
    this.updateSize_();
    $(window).on("resize.penguindash", this.updateSize_.bind(this));
  };
  c.Game.prototype.watchOrientation_ = function () {};
  c.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "penguindash",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.freezeGame();
    $(window).off(".penguindash");
    $(document).off(".penguindash");
    this.elem.off(".penguindash");
    this.tutorial.dispose();
  };
  _globalExport = c.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('pnd_load_sounds');
sceneApi.preload.images('img/element-celebrate.png', 'img/element-coal1.png', 'img/element-coal2.png', 'img/element-coal3.png', 'img/element-finish.png', 'img/element-ice1-fat-shadow.png', 'img/element-ice1-fat.png', 'img/element-ice1-shadow.png', 'img/element-ice1.png', 'img/element-ice2-shadow.png', 'img/element-ice2.png', 'img/element-ice3-shadow.png', 'img/element-ice3.png', 'img/element-ice4-shadow.png', 'img/element-ice4.png', 'img/element-ice5-shadow.png', 'img/element-ice5.png', 'img/element-pole.png', 'img/element-present1.png', 'img/element-present2.png', 'img/element-present3.png', 'img/element-present4.png', 'img/element-present5.png', 'img/element-present6.png', 'img/element-presentStacked.png', 'img/element-snow1-fat.png', 'img/element-snow1-shadow.png', 'img/element-snow1.png', 'img/element-snow2-shadow.png', 'img/element-snow2.png', 'img/element-snow3-shadow.png', 'img/element-snow3.png', 'img/element-snow4-shadow.png', 'img/element-snow4.png', 'img/element-snow5-shadow.png', 'img/element-snow5.png', 'img/element-start.png', 'img/element-tree1.png', 'img/element-tree2.png', 'img/penguin-shadow.png', 'img/sprite-angels.png', 'img/sprite-duck.png', 'img/sprite-dust.png', 'img/sprite-green_elf.png', 'img/sprite-iceberg.png', 'img/sprite-orange_elf.png', 'img/sprite-penguin.png', 'img/sprite-sm_iceberg.png', 'img/sprite-snowman.png', 'img/sprite-walrus.png');
const game = new Game(document.getElementById('module-penguindash'), './');
sceneApi.preload.wait(game.startPromise);
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  orientation: 'portrait',
  sound: [],
  tilt: true
});
sceneApi.ready(async () => {
  game.start();
});