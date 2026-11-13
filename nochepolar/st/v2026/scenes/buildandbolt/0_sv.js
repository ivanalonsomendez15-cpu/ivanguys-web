import { s as sceneApi } from '../../_e310d67a.js';
import { p as prepareAnimation } from '../../_36ce2a0a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var d = {
    INITIAL_COUNTDOWN: 0,
    DEBUG: !1,
    PLAYER_OPTIONS: {
      SINGLE: "single",
      MULTIPLAYER: "multiplayer"
    },
    PLAYER_CONTROLS: {
      ARROWS: {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"],
        action: ["ShiftRight"]
      },
      WASD: {
        up: ["KeyW"],
        down: ["KeyS"],
        left: ["KeyA"],
        right: ["KeyD"],
        action: ["ShiftLeft"]
      },
      SINGLE: {
        up: ["ArrowUp", "KeyW"],
        down: ["ArrowDown", "KeyS"],
        left: ["ArrowLeft", "KeyA"],
        right: ["ArrowRight", "KeyD"],
        action: ["ShiftRight", "ShiftLeft"]
      }
    },
    PLAYER_ACCELERATION_STEP: 5E-4,
    PLAYER_MAX_VELOCITY: .01,
    PLAYER_ACCELERATION_FACTOR: 1,
    PLAYER_DECELERATION_FACTOR: 1,
    PLAYER_ICE_ACCELERATION_FACTOR: 2,
    PLAYER_ICE_DECELERATION_FACTOR: .5,
    PLAYER_PUSH_FORCE: .01,
    PLAYER_BOUNCE_FORCE: .005,
    PLAYER_DIRECTION_CHANGE_THRESHOLD: .05,
    PLAYER_ACTIONS: {
      STICK_TO_PLATFORM: "stick",
      BOUNCE: "bounce",
      BLOCK: "block",
      DROP_ITEM: "drop",
      ADD_TOY_PART: "addtoy",
      ACCEPT_TOY: "accept",
      SLIDE: "slide",
      PIT_FALL: "pitfall"
    },
    PLAYER_STATES: {
      REST: 0,
      WALK: 1,
      PICK_UP: 2,
      DROP_OFF: 3
    },
    PLAYER_FRAMES: {
      REST: {
        start: 1,
        end: 1,
        loop: !0,
        fps: 60
      },
      REST_TO_WALK: {
        start: 1,
        end: 8,
        fps: 60
      },
      WALK: {
        start: 8,
        end: 24,
        loop: !0,
        fps: 60
      },
      WALK_TO_REST: {
        start: 24,
        end: 32,
        fps: 60
      },
      REST_TO_HOLD_REST: {
        start: 32,
        end: 40,
        fps: 60
      },
      HOLD_REST_TO_HOLD_WALK: {
        start: 40,
        end: 48,
        fps: 60
      },
      HOLD_WALK: {
        start: 48,
        end: 64,
        loop: !0,
        fps: 60
      },
      HOLD_WALK_TO_HOLD_REST: {
        start: 64,
        end: 72,
        fps: 60
      },
      HOLD_REST: {
        start: 72,
        end: 72,
        loop: !0,
        fps: 60
      },
      HOLD_REST_TO_REST: {
        start: 72,
        end: 80,
        fps: 60
      }
    },
    BOARD_PADDING_TOP: 95,
    BOARD_PADDING_TOP_MOBILE: 35,
    BOARD_PADDING_LEFT_PERCENTAGE: 3,
    GRID_DIMENSIONS: {
      HEIGHT: 16,
      WIDTH: 28,
      UNIT_SIZE: 50
    },
    WALL_EXTRA_SPACE: .15,
    FENCE_THICKNESS: 2,
    TABLE_HEIGHT: 2,
    TABLE_WIDTH: 3,
    PRESENT_HEIGHT: 2,
    PRESENT_WIDTH: 2,
    PENGUIN_HEIGHT: 1,
    PENGUIN_WIDTH: 1,
    PENGUIN_FRAMES: {
      start: 0,
      end: 12,
      loop: !0,
      fps: 24
    },
    TOY_TYPES: {
      CAR: {
        key: "car",
        size: 2
      },
      ROBOT: {
        key: "robot",
        size: 3
      },
      ROCKET: {
        key: "rocket",
        size: 4
      },
      TEDDY: {
        key: "teddy",
        size: 3
      }
    },
    LEVEL_TRANSITION_TIMING: 500,
    ZOOM_TOUCH_DEVICE: .25
  };
  var f = [{
    time: 60,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 12,
        y: 6
      }
    }, {
      startPos: {
        x: 16,
        y: 6
      }
    }],
    toyType: d.TOY_TYPES.CAR,
    toysCapacity: 1,
    entities: [{
      type: "wall",
      config: {
        height: 4,
        width: 20,
        x: 0,
        y: 0
      }
    }, {
      type: "wall",
      config: {
        height: 4,
        width: 20,
        x: 4,
        y: 12
      }
    }, {
      type: "table",
      config: {
        x: 23,
        y: 4,
        tableType: 1,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 2,
        y: 9,
        tableType: 3,
        isSideView: !1,
        part: 2
      }
    }, {
      type: "present-box",
      config: {
        x: 12,
        y: 9,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 14,
        y: 9,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 0,
          y: 7
        },
        movementLength: 5,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 19,
          y: 4
        },
        movementLength: 7,
        stepSize: .05
      }
    }, {
      type: "fence",
      config: {
        x: 24,
        y: 10,
        cells: [[{
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 6,
        y: 7,
        cells: [[{
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0,
          right: !0
        }], [{}, {}, {}, {
          right: !0
        }], [{}, {}, {}, {
          right: !0
        }], [{}, {}, {}, {
          right: !0
        }], [{}, {}, {}, {
          right: !0
        }]]
      }
    }]
  }, {
    time: 60,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 1,
        y: 7
      }
    }, {
      startPos: {
        x: 1,
        y: 9
      }
    }],
    toyType: d.TOY_TYPES.CAR,
    toysCapacity: 2,
    entities: [{
      type: "wall",
      config: {
        height: 4,
        width: 23,
        x: 5,
        y: 0
      }
    }, {
      type: "wall",
      config: {
        height: 4,
        width: 23,
        x: 5,
        y: 12
      }
    }, {
      type: "table",
      config: {
        x: 13,
        y: 8,
        tableType: 1,
        isSideView: !0,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 20,
        y: 5,
        tableType: 2,
        isSideView: !0,
        part: 2
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 0,
        playerId: "b",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 2,
        playerId: "a",
        isSideView: !0,
        isMiddle: !1,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 12,
        playerId: "b",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 14,
        playerId: "a",
        isSideView: !0,
        isMiddle: !1,
        flipped: !0
      }
    }, {
      type: "ice",
      config: {
        height: 8,
        width: 4,
        x: 7,
        y: 4
      }
    }, {
      type: "ice",
      config: {
        height: 8,
        width: 4,
        x: 14,
        y: 4
      }
    }, {
      type: "ice",
      config: {
        height: 8,
        width: 4,
        x: 21,
        y: 4
      }
    }, {
      type: "pit",
      config: {
        height: 8,
        width: 3,
        x: 25,
        y: 4
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 11,
          y: 4
        },
        movementLength: 7,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 18,
          y: 4
        },
        movementLength: 7,
        stepSize: .1
      }
    }]
  }, {
    time: 90,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 14,
        y: 1
      }
    }, {
      startPos: {
        x: 14,
        y: 14
      }
    }],
    toyType: d.TOY_TYPES.CAR,
    toysCapacity: 3,
    entities: [{
      type: "wall",
      config: {
        height: 4,
        width: 6,
        x: 18,
        y: 2
      }
    }, {
      type: "wall",
      config: {
        height: 4,
        width: 6,
        x: 4,
        y: 10
      }
    }, {
      type: "table",
      config: {
        x: 5,
        y: 7,
        tableType: 3,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 20,
        y: 7,
        tableType: 2,
        isSideView: !1,
        part: 2
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 5,
        playerId: "b",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 7,
        playerId: "a",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 9,
        playerId: "b",
        isSideView: !0,
        isMiddle: !1,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 26,
        y: 5,
        playerId: "a",
        isSideView: !0,
        isMiddle: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 26,
        y: 7,
        playerId: "b",
        isSideView: !0,
        isMiddle: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 26,
        y: 9,
        playerId: "a",
        isSideView: !0,
        isMiddle: !1
      }
    }, {
      type: "pit",
      config: {
        height: 12,
        width: 8,
        x: 10,
        y: 2
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 2,
          y: 14
        },
        movementLength: 7,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 18,
          y: 1
        },
        movementLength: 7,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 2,
          y: 2
        },
        movementLength: 7,
        stepSize: .07
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 18,
          y: 13
        },
        movementLength: 7,
        stepSize: .07
      }
    }, {
      type: "platform",
      config: {
        isVertical: !1,
        startPos: {
          x: 10,
          y: 7
        },
        height: 2,
        width: 2,
        movementLength: 6,
        stepSize: .04
      }
    }]
  }, {
    time: 90,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 20,
        y: 6
      }
    }, {
      startPos: {
        x: 20,
        y: 9
      }
    }],
    toyType: d.TOY_TYPES.TEDDY,
    toysCapacity: 3,
    entities: [{
      type: "wall",
      config: {
        height: 4,
        width: 5,
        x: 12,
        y: 0
      }
    }, {
      type: "wall",
      config: {
        height: 4,
        width: 5,
        x: 12,
        y: 12
      }
    }, {
      type: "table",
      config: {
        x: 19,
        y: 1,
        tableType: 1,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 19,
        y: 13,
        tableType: 2,
        isSideView: !1,
        part: 3
      }
    }, {
      type: "table",
      config: {
        x: 25,
        y: 6,
        tableType: 1,
        isSideView: !0,
        part: 2
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 1,
        playerId: "a",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 3,
        playerId: "b",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 5,
        playerId: "a",
        isSideView: !0,
        isMiddle: !1,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 9,
        playerId: "b",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 11,
        playerId: "a",
        isSideView: !0,
        isMiddle: !0,
        flipped: !0
      }
    }, {
      type: "present-box",
      config: {
        x: 0,
        y: 13,
        playerId: "b",
        isSideView: !0,
        isMiddle: !1,
        flipped: !0
      }
    }, {
      type: "pit",
      config: {
        height: 8,
        width: 3,
        x: 13,
        y: 4
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 0,
          y: 7
        },
        movementLength: 12,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 0,
          y: 8
        },
        movementLength: 12,
        stepSize: .07
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 17,
          y: 3
        },
        movementLength: 9,
        stepSize: .07
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 24,
          y: 3
        },
        movementLength: 9,
        stepSize: .06
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 17,
          y: 12
        },
        movementLength: 7,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 17,
          y: 3
        },
        movementLength: 7,
        stepSize: .04
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 13,
          y: 4
        },
        height: 4,
        width: 3,
        movementLength: 4,
        stepSize: .05
      }
    }, {
      type: "fence",
      config: {
        x: 5,
        y: 1,
        cells: [[{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0,
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }], [{}, {}, {}, {}, {
          right: !0
        }], [{}, {}, {}, {}, {
          right: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 5,
        y: 10,
        cells: [[{}, {}, {}, {}, {
          right: !0
        }], [{}, {}, {}, {}, {
          right: !0
        }], [{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0,
          right: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }]]
      }
    }]
  }, {
    time: 60,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 25,
        y: 2
      }
    }, {
      startPos: {
        x: 1,
        y: 13
      }
    }],
    toyType: d.TOY_TYPES.CAR,
    toysCapacity: 3,
    entities: [{
      type: "wall",
      config: {
        height: 8,
        width: 10,
        x: 9,
        y: 4
      }
    }, {
      type: "table",
      config: {
        x: 5,
        y: 6,
        tableType: 3,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 20,
        y: 8,
        tableType: 1,
        isSideView: !1,
        part: 2
      }
    }, {
      type: "present-box",
      config: {
        x: 10,
        y: 0,
        playerId: "a",
        isSideView: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 13,
        y: 0,
        playerId: "a",
        isSideView: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 16,
        y: 0,
        playerId: "a",
        isSideView: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 10,
        y: 14,
        playerId: "b",
        isSideView: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 13,
        y: 14,
        playerId: "b",
        isSideView: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 16,
        y: 14,
        playerId: "b",
        isSideView: !1
      }
    }, {
      type: "ice",
      config: {
        height: 16,
        width: 28,
        x: 0,
        y: 0
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 4,
          y: 3
        },
        movementLength: 4,
        stepSize: .04
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 4,
          y: 12
        },
        movementLength: 4,
        stepSize: .06
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 19,
          y: 3
        },
        movementLength: 4,
        stepSize: .06
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 19,
          y: 12
        },
        movementLength: 4,
        stepSize: .04
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 0,
          y: 7
        },
        movementLength: 2,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 3,
          y: 6
        },
        movementLength: 3,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 25,
          y: 7
        },
        movementLength: 2,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 24,
          y: 6
        },
        movementLength: 3,
        stepSize: .05
      }
    }]
  }, {
    time: 60,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 12,
        y: 7
      }
    }, {
      startPos: {
        x: 16,
        y: 6
      }
    }],
    toyType: d.TOY_TYPES.ROCKET,
    toysCapacity: 2,
    entities: [{
      type: "table",
      config: {
        x: 10,
        y: 3,
        tableType: 1,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 16,
        y: 3,
        tableType: 2,
        isSideView: !1,
        part: 2
      }
    }, {
      type: "table",
      config: {
        x: 10,
        y: 9,
        tableType: 2,
        isSideView: !1,
        part: 3
      }
    }, {
      type: "table",
      config: {
        x: 16,
        y: 9,
        tableType: 3,
        isSideView: !1,
        part: 4
      }
    }, {
      type: "present-box",
      config: {
        x: 2,
        y: 14,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 4,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 23,
        y: 14,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 25,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "ice",
      config: {
        height: 3,
        width: 8,
        x: 0,
        y: 0
      }
    }, {
      type: "ice",
      config: {
        height: 3,
        width: 7,
        x: 21,
        y: 0
      }
    }, {
      type: "pit",
      config: {
        height: 9,
        width: 8,
        x: 0,
        y: 3
      }
    }, {
      type: "pit",
      config: {
        height: 9,
        width: 7,
        x: 21,
        y: 3
      }
    }, {
      type: "pit",
      config: {
        height: 4,
        width: 13,
        x: 8,
        y: 12
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 2,
          y: 3
        },
        height: 5,
        width: 3,
        movementLength: 4,
        stepSize: .03
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 23,
          y: 3
        },
        height: 5,
        width: 3,
        movementLength: 4,
        stepSize: .03
      }
    }]
  }, {
    time: 60,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 25,
        y: 6
      }
    }, {
      startPos: {
        x: 2,
        y: 6
      }
    }],
    toyType: d.TOY_TYPES.TEDDY,
    toysCapacity: 3,
    entities: [{
      type: "table",
      config: {
        x: 13,
        y: 13,
        tableType: 3,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 21,
        y: 5,
        tableType: 3,
        isSideView: !0,
        part: 2
      }
    }, {
      type: "table",
      config: {
        x: 6,
        y: 5,
        tableType: 1,
        isSideView: !0,
        part: 3
      }
    }, {
      type: "present-box",
      config: {
        x: 3,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 5,
        y: 14,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 7,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 19,
        y: 14,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 21,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 23,
        y: 14,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 1,
          y: 2
        },
        movementLength: 5,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 1,
          y: 8
        },
        movementLength: 5,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 14,
          y: 2
        },
        movementLength: 5,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 14,
          y: 8
        },
        movementLength: 4,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 26,
          y: 2
        },
        movementLength: 5,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 26,
          y: 8
        },
        movementLength: 5,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 6,
          y: 1
        },
        movementLength: 4,
        stepSize: .04
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 2,
          y: 12
        },
        movementLength: 4,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 20,
          y: 1
        },
        movementLength: 4,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 16,
          y: 12
        },
        movementLength: 4,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 4,
          y: 4
        },
        movementLength: 4,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 9,
          y: 4
        },
        movementLength: 4,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 4,
          y: 9
        },
        movementLength: 5,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 6,
          y: 3
        },
        movementLength: 4,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 19,
          y: 4
        },
        movementLength: 4,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 24,
          y: 4
        },
        movementLength: 4,
        stepSize: .03
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 19,
          y: 9
        },
        movementLength: 5,
        stepSize: .05
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !1,
        startPos: {
          x: 19,
          y: 3
        },
        movementLength: 4,
        stepSize: .03
      }
    }]
  }, {
    time: 90,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 2,
        y: 8
      }
    }, {
      startPos: {
        x: 26,
        y: 8
      }
    }],
    toyType: d.TOY_TYPES.ROBOT,
    toysCapacity: 2,
    entities: [{
      type: "table",
      config: {
        x: 4,
        y: 0,
        tableType: 2,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 12,
        y: 6,
        tableType: 1,
        isSideView: !1,
        part: 2
      }
    }, {
      type: "table",
      config: {
        x: 21,
        y: 14,
        tableType: 3,
        isSideView: !1,
        part: 3
      }
    }, {
      type: "present-box",
      config: {
        x: 20,
        y: 0,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 22,
        y: 0,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 5,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 7,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "pit",
      config: {
        height: 3,
        width: 28,
        x: 0,
        y: 3
      }
    }, {
      type: "pit",
      config: {
        height: 3,
        width: 28,
        x: 0,
        y: 10
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 4,
          y: 3
        },
        height: 2,
        width: 2,
        movementLength: 1,
        stepSize: .01
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 22,
          y: 10
        },
        height: 2,
        width: 2,
        movementLength: 1,
        stepSize: .01
      }
    }, {
      type: "fence",
      config: {
        x: 0,
        y: 2,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 0,
        y: 5,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 0,
        y: 9,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 24,
        y: 5,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 24,
        y: 9,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 24,
        y: 12,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }]
  }, {
    time: 90,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 24,
        y: 6
      }
    }, {
      startPos: {
        x: 24,
        y: 9
      }
    }],
    toyType: d.TOY_TYPES.ROCKET,
    toysCapacity: 1,
    entities: [{
      type: "table",
      config: {
        x: 4,
        y: 1,
        tableType: 1,
        isSideView: !0,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 4,
        y: 12,
        tableType: 3,
        isSideView: !0,
        part: 2
      }
    }, {
      type: "table",
      config: {
        x: 24,
        y: 1,
        tableType: 3,
        isSideView: !1,
        part: 3
      }
    }, {
      type: "table",
      config: {
        x: 24,
        y: 13,
        tableType: 1,
        isSideView: !1,
        part: 4
      }
    }, {
      type: "present-box",
      config: {
        x: 26,
        y: 5,
        playerId: "b",
        isSideView: !0,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 26,
        y: 9,
        playerId: "a",
        isSideView: !0,
        isMiddle: !1
      }
    }, {
      type: "ice",
      config: {
        height: 6,
        width: 4,
        x: 6,
        y: 5
      }
    }, {
      type: "pit",
      config: {
        height: 16,
        width: 3,
        x: 0,
        y: 0
      }
    }, {
      type: "pit",
      config: {
        height: 16,
        width: 12,
        x: 10,
        y: 0
      }
    }, {
      type: "penguin",
      config: {
        isVertical: !0,
        startPos: {
          x: 8,
          y: 3
        },
        movementLength: 9,
        stepSize: .05
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 10,
          y: 2
        },
        height: 2,
        width: 2,
        movementLength: 10,
        stepSize: .06
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 12,
          y: 2
        },
        height: 2,
        width: 2,
        movementLength: 10,
        stepSize: .04
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 14,
          y: 2
        },
        height: 2,
        width: 2,
        movementLength: 10,
        stepSize: .06
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 16,
          y: 2
        },
        height: 2,
        width: 2,
        movementLength: 10,
        stepSize: .04
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 18,
          y: 2
        },
        height: 2,
        width: 2,
        movementLength: 10,
        stepSize: .06
      }
    }, {
      type: "platform",
      config: {
        isVertical: !0,
        startPos: {
          x: 20,
          y: 2
        },
        height: 2,
        width: 2,
        movementLength: 10,
        stepSize: .04
      }
    }, {
      type: "fence",
      config: {
        x: 3,
        y: 0,
        cells: [[{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 3,
        y: 11,
        cells: [[{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 9,
        y: 0,
        cells: [[{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 9,
        y: 10,
        cells: [[{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }], [{
          right: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 26,
        y: 7,
        cells: [[{
          bottom: !0
        }, {
          bottom: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 22,
        y: 0,
        cells: [[{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 22,
        y: 12,
        cells: [[{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }], [{
          left: !0
        }]]
      }
    }]
  }, {
    time: 60,
    hurryUpMusicTime: 25,
    players: [{
      startPos: {
        x: 14,
        y: 2
      }
    }, {
      startPos: {
        x: 12,
        y: 14
      }
    }],
    toyType: d.TOY_TYPES.ROCKET,
    toysCapacity: 1,
    entities: [{
      type: "table",
      config: {
        x: 1,
        y: 7,
        tableType: 2,
        isSideView: !1,
        part: 1
      }
    }, {
      type: "table",
      config: {
        x: 24,
        y: 7,
        tableType: 1,
        isSideView: !1,
        part: 2
      }
    }, {
      type: "table",
      config: {
        x: 2,
        y: 1,
        tableType: 3,
        isSideView: !1,
        part: 3
      }
    }, {
      type: "table",
      config: {
        x: 25,
        y: 12,
        tableType: 2,
        isSideView: !0,
        part: 4
      }
    }, {
      type: "present-box",
      config: {
        x: 12,
        y: 0,
        playerId: "a",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "present-box",
      config: {
        x: 14,
        y: 14,
        playerId: "b",
        isSideView: !1,
        isMiddle: !1
      }
    }, {
      type: "ice",
      config: {
        height: 5,
        width: 8,
        x: 0,
        y: 0
      }
    }, {
      type: "ice",
      config: {
        height: 5,
        width: 8,
        x: 20,
        y: 11
      }
    }, {
      type: "ice",
      config: {
        height: 6,
        width: 3,
        x: 5,
        y: 10
      }
    }, {
      type: "ice",
      config: {
        height: 6,
        width: 3,
        x: 20,
        y: 0
      }
    }, {
      type: "ice",
      config: {
        height: 3,
        width: 6,
        x: 11,
        y: 0
      }
    }, {
      type: "ice",
      config: {
        height: 3,
        width: 6,
        x: 11,
        y: 13
      }
    }, {
      type: "pit",
      config: {
        height: 5,
        width: 5,
        x: 0,
        y: 11
      }
    }, {
      type: "pit",
      config: {
        height: 5,
        width: 5,
        x: 23,
        y: 0
      }
    }, {
      type: "pit",
      config: {
        height: 3,
        width: 12,
        x: 8,
        y: 3
      }
    }, {
      type: "pit",
      config: {
        height: 3,
        width: 12,
        x: 8,
        y: 10
      }
    }, {
      type: "fence",
      config: {
        x: 0,
        y: 5,
        cells: [[{
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }]]
      }
    }, {
      type: "fence",
      config: {
        x: 22,
        y: 11,
        cells: [[{
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }, {
          top: !0
        }]]
      }
    }]
  }];
  var k = {};
  class v {
    constructor() {
      this.animations = {};
    }
    init(a, b) {
      this.api = a;
      this.lottiePrepareAnimation = b;
    }
    prepareAnimation(a, b, c, e, g) {
      a = this.lottiePrepareAnimation(a, {
        container: b,
        loop: !1,
        autoplay: !1,
        rendererSettings: {
          className: `animation animation--${c}`
        }
      }).then(a => {
        e(a);
      });
      g && this.api.preload.wait(a);
    }
  }
  k.AnimationManager = new v();
  k.shared = {};
  k.shared.utils = function () {
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
        let g;
        try {
          g = e.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (h) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: g[4],
          y: g[5],
          rotate: 180 / Math.PI * Math.atan2(g[1], g[0])
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
  class x {
    constructor() {
      this.height = d.GRID_DIMENSIONS.UNIT_SIZE * d.GRID_DIMENSIONS.HEIGHT;
      this.width = d.GRID_DIMENSIONS.UNIT_SIZE * d.GRID_DIMENSIONS.WIDTH;
      this.ratio = d.GRID_DIMENSIONS.WIDTH / d.GRID_DIMENSIONS.HEIGHT;
      this.paddingTop = k.shared.utils.touchEnabled ? d.BOARD_PADDING_TOP_MOBILE : d.BOARD_PADDING_TOP;
      this.paddingLeft = d.BOARD_PADDING_LEFT_PERCENTAGE;
      this.cells = [...Array(d.GRID_DIMENSIONS.WIDTH)].map(() => [...Array(d.GRID_DIMENSIONS.HEIGHT)].map(() => []));
      this.scale = 1;
    }
    init(a) {
      this.context = a;
      this.context.style.height = `${this.height}px`;
      this.context.style.width = `${this.width}px`;
      d.DEBUG && this.initDebugView();
      this.onResize();
      window.addEventListener("resize", this.onResize.bind(this));
    }
    reset() {
      for (let a = 0; a < this.cells.length; a++) for (let b = 0; b < this.cells[a].length; b++) this.cells[a][b] = [];
    }
    onResize() {
      this.scale = Math.min(Math.min(this.context.offsetHeight * window.innerWidth / this.width, window.innerHeight - 2 * this.paddingTop) * this.ratio, window.innerWidth - window.innerWidth * this.paddingLeft / 100) / this.context.offsetWidth;
      this.context.style.left = "50%";
      this.context.style.top = "50%";
      k.shared.utils.touchEnabled ? (this.scale += d.ZOOM_TOUCH_DEVICE, this.context.style.transform = `scale(${this.scale.toFixed(2)}) translate(-50%, -50%) translateY(${this.paddingTop}px)`) : this.context.style.transform = `scale(${this.scale.toFixed(2)}) translate(-50%, -50%)`;
    }
    updateBoardPosition(a) {
      const b = -(a.x - this.context.offsetWidth / 2 / d.GRID_DIMENSIONS.UNIT_SIZE) * d.GRID_DIMENSIONS.UNIT_SIZE;
      a = -(a.y - this.context.offsetHeight / 2 / d.GRID_DIMENSIONS.UNIT_SIZE) * d.GRID_DIMENSIONS.UNIT_SIZE;
      this.context.style.transform = `scale(${this.scale.toFixed(2)}) translate(-50%, -50%) translateY(${this.paddingTop}px) translate(${b}px, ${a}px)`;
    }
    initDebugView() {
      for (let a = 0; a < this.cells.length; a++) for (let b = 0; b < this.cells[a].length; b++) {
        let c = document.createElement("div");
        c.setAttribute("class", "debug-cell");
        c.style.transform = `translate(${a * d.GRID_DIMENSIONS.UNIT_SIZE}px, ${b * d.GRID_DIMENSIONS.UNIT_SIZE}px)`;
        this.context.append(c);
      }
    }
    updateDebugCell(a, b) {
      if (d.DEBUG) {
        var c = a * d.GRID_DIMENSIONS.HEIGHT + b;
        c = this.context.getElementsByClassName("debug-cell")[c];
        var e = "";
        for (const c of this.cells[a][b]) e += " " + c.elem.classList;
        c.textContent = e;
      }
    }
    updateEntityPosition(a, b, c, e, g, h = 1, m = 1) {
      if (Math.round(b) != Math.round(e) || Math.round(c) != Math.round(g)) this.removeEntityFromBoard(a, b, c, h, m), this.addEntityToBoard(a, e, g, h, m);
    }
    addEntityToBoard(a, b, c, e = 1, g = 1) {
      b = Math.round(b);
      c = Math.round(c);
      for (let h = b; h < b + e; h++) for (let b = c; b < c + g; b++) this.cells[h][b].push(a), this.updateDebugCell(h, b);
    }
    removeEntityFromBoard(a, b, c, e = 1, g = 1) {
      b = Math.round(b);
      c = Math.round(c);
      for (let h = b; h < b + e; h++) for (let b = c; b < c + g; b++) {
        let c = this.cells[h][b].indexOf(a);
        -1 < c && (this.cells[h][b].splice(c, 1), this.updateDebugCell(h, b));
      }
    }
    getSurroundingEntities(a) {
      const {
          x: b,
          y: c
        } = a.position,
        e = Math.round(b),
        g = Math.round(c),
        h = this.cells[e][g],
        m = [];
      for (let b = e - 1; b <= e + 1; b++) for (let c = g - 1; c <= g + 1; c++) {
        if (!this.cells[b] || !this.cells[b][c]) continue;
        const e = this.cells[b][c];
        if (e === h) for (var l = 0; l < e.length; l++) {
          var q = e[l];
          q.config.checkCell && q.id !== a.id && m.push(q);
        } else for (l = 0; l < e.length; l++) q = e[l], q.config.checkBorder && q.id !== a.id && m.push(q);
      }
      return m;
    }
  }
  k.Board = new x();
  var y = {
    gridToPixelValue: function (a) {
      return a * d.GRID_DIMENSIONS.UNIT_SIZE;
    },
    pixelToGridPosition: function (a, b) {
      var c = a.getBoundingClientRect();
      a = (b.x - c.left) / c.width * d.GRID_DIMENSIONS.WIDTH;
      b = (b.y - c.top) / c.height * d.GRID_DIMENSIONS.HEIGHT;
      ({
        GRID_DIMENSIONS: c
      } = d);
      a = Math.max(0, Math.min(c.WIDTH, a));
      b = Math.max(0, Math.min(c.HEIGHT, b));
      return {
        x: a,
        y: b
      };
    },
    renderAtGridLocation: function (a, b, c, e = !1) {
      a.style.transform = e ? `translate3d(${y.gridToPixelValue(b)}px, ${y.gridToPixelValue(c)}px, 0) scaleX(-1)` : `translate3d(${y.gridToPixelValue(b)}px, ${y.gridToPixelValue(c)}px, 0)`;
    },
    isTouchingBorder: function (a, b) {
      return a.x + a.width > b.x && a.x - 1 < b.x && a.y + a.height > b.y && a.y - 1 < b.y ? !0 : !1;
    },
    isInBorder: function (a, b, c) {
      const e = a.x + a.width - d.WALL_EXTRA_SPACE,
        g = a.x - 1 + d.WALL_EXTRA_SPACE,
        h = a.y - 1 + d.WALL_EXTRA_SPACE;
      a = a.y + a.height - d.WALL_EXTRA_SPACE;
      const m = b.x < c.x && c.x >= e,
        l = b.x > c.x && c.x <= g,
        q = b.y > c.y && c.y <= h;
      c = b.y < c.y && c.y >= a;
      return e > b.x && g < b.x && a > b.y && h < b.y ? (b = {
        x: b.x,
        y: b.y
      }, m && (b.x = e), l && (b.x = g), q && (b.y = h), c && (b.y = a), b) : !1;
    },
    isInFence: function (a, b, c, e) {
      const g = a.x + 1 - d.WALL_EXTRA_SPACE,
        h = a.x - 1 + d.WALL_EXTRA_SPACE,
        m = a.y - 1,
        l = a.y + 1 - d.WALL_EXTRA_SPACE,
        q = b.x < c.x && c.x >= g,
        z = b.x > c.x && c.x <= h,
        A = b.y > c.y && c.y <= m,
        w = b.y < c.y && c.y >= l,
        r = a.x,
        n = a.x,
        t = a.y,
        u = a.y - .4,
        H = b.x < c.x && c.x >= r,
        I = b.x > c.x && c.x <= n,
        J = b.y > c.y && c.y <= t;
      c = b.y < c.y && c.y >= u;
      const p = {
        x: b.x,
        y: b.y
      };
      g > b.x && h < b.x && l > b.y && m < b.y && (q && (a.top && u > b.y && (p.x = g), a.bottom && t < b.y && (p.x = g), a.right && (p.x = g)), H && a.left && r > b.x && (p.x = r), z && (a.top && u > b.y && (p.x = h), a.bottom && t < b.y && (p.x = h), a.left && (p.x = h)), I && a.right && n < b.x && (p.x = n), A && (a.left && r > b.x && (p.y = m), a.right && n < b.x && (p.y = m), a.top && (p.y = m)), J && a.bottom && t < b.y && (p.y = t), w && (a.left && r > b.x && (p.y = l), a.right && n < b.x && (p.y = l), a.bottom && (p.y = l)), c && a.top && u > b.y && (p.y = u));
      a.top && (a.y - .9 > b.y ? e.classList.add("player-under") : e.classList.remove("player-under"));
      a.bottom && (a.y + .9 - d.WALL_EXTRA_SPACE > b.y ? e.classList.add("player-under") : e.classList.remove("player-under"));
      return p.x !== b.x || p.y !== b.y ? p : !1;
    },
    nextAnimationFrame: function (a, b, c, e, g) {
      let h = b,
        m = e,
        l = !1;
      e = Math.round((a.fps || 60) / 1E3 * (g - e));
      1 <= e && (c ? h = a.start + (b - a.start + e) % (a.end - a.start + 1) : (h = Math.min(b + e, a.end), l = h == a.end), m = g);
      return {
        nextFrame: h,
        frameTime: m,
        finished: l
      };
    },
    getAngle: function (a, b) {
      return Math.atan2(a.y - b.y, a.x - b.x);
    },
    getDistance: function (a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
    },
    removeClassesStartWith: function (a, b) {
      Array.from(a.classList).forEach(c => c.startsWith(b) && a.classList.remove(c));
    },
    removeAllChildren: function (a) {
      a.textContent = "";
    }
  };
  class B {
    init(a, b) {
      this.tutorial_ = a.tutorial;
      k.shared.utils.touchEnabled ? (this.domCursorTouch = document.querySelector("[data-cursor-touch]"), this.domCursorTouch.classList.add("touch-device"), this.isTouch = !0, this.currentTouchId = null, b.addEventListener("touchstart", this.onTouchStart.bind(this)), b.addEventListener("touchend", this.onTouchEnd.bind(this))) : (this.trackedKeys = {}, window.addEventListener("keydown", this.onKeyDown.bind(this)), window.addEventListener("keyup", this.onKeyUp.bind(this)), window.addEventListener("blur", this.onBlur.bind(this)));
    }
    onKeyDown(a) {
      this.trackedKeys[a.code] = !0;
    }
    onKeyUp(a) {
      this.trackedKeys[a.code] = !1;
    }
    onBlur() {
      this.trackedKeys = {};
    }
    isKeyControlActive(a) {
      for (const b of a) if (this.trackedKeys[b]) return !0;
      return !1;
    }
    onTouchStart(a) {
      this.currentTouchId = a.changedTouches[0].identifier;
    }
    onTouchEnd(a) {
      if (a = this.getCurrentTouch(a)) this.currentTouchId = a.identifier, this.currentTouchPosition = y.pixelToGridPosition(k.Board.context, {
        x: a.clientX,
        y: a.clientY
      }), this.platform && (this.currentTouchPositionPlatform = {
        x: this.currentTouchPosition.x - this.platform.position.x,
        y: this.currentTouchPosition.y - this.platform.position.y
      }), this.domCursorTouch.classList.remove("transition"), this.hideCursorTouch(), setTimeout(() => {
        this.domCursorTouch.classList.add("transition");
        this.showCursorTouch();
      }, 0), clearTimeout(this.cursorFadeOutTimeout), this.cursorFadeOutTimeout = setTimeout(() => {
        this.hideCursorTouch();
      }, 500), this.touchStarted || (this.tutorial_.off("buildandbolt_mobile.mp4"), this.touchStarted = !0);
    }
    showCursorTouch() {
      this.currentTouchPosition && (this.domCursorTouch.style.transform = `translate(-50%, -50%) translate(${this.currentTouchPosition.x * d.GRID_DIMENSIONS.UNIT_SIZE}px, ${this.currentTouchPosition.y * d.GRID_DIMENSIONS.UNIT_SIZE}px) scale(1)`, this.domCursorTouch.style.opacity = 1);
    }
    hideCursorTouch() {
      this.currentTouchPosition && (this.domCursorTouch.style.transform = `translate(-50%, -50%) translate(${this.currentTouchPosition.x * d.GRID_DIMENSIONS.UNIT_SIZE}px, ${this.currentTouchPosition.y * d.GRID_DIMENSIONS.UNIT_SIZE}px) scale(0.6)`, this.domCursorTouch.style.opacity = 0);
    }
    getCurrentTouch(a) {
      if (null !== this.currentTouchId) for (let b = 0, c; c = a.changedTouches[b]; b++) if (c.identifier === this.currentTouchId) return c;
    }
    getMovementDirections(a, b, c, e) {
      if (this.isTouch) {
        c && c != this.platform ? (this.platform = c, this.currentTouchPosition && (this.currentTouchPositionPlatform = {
          x: this.currentTouchPosition.x - this.platform.position.x,
          y: this.currentTouchPosition.y - this.platform.position.y
        })) : c || (this.platform = null);
        if (this.currentTouchPosition) {
          var g = {
            x: this.currentTouchPosition.x,
            y: this.currentTouchPosition.y
          };
          c && e ? (g = {
            x: this.currentTouchPositionPlatform.x,
            y: this.currentTouchPositionPlatform.y
          }, b = e) : (g.x = Math.min(Math.max(0, g.x - .5), d.GRID_DIMENSIONS.WIDTH - 1), g.y = Math.min(Math.max(0, g.y - .5), d.GRID_DIMENSIONS.HEIGHT - 1));
          c = y.getDistance(g, b);
          if (.2 < c) return e = Math.pow(Math.min(1, c / 3), 2), a = y.getAngle(g, b), c = Math.abs(Math.cos(a)) * e, e *= Math.abs(Math.sin(a)), {
            left: g.x < b.x ? c : 0,
            right: g.x > b.x ? c : 0,
            up: g.y < b.y ? e : 0,
            down: g.y > b.y ? e : 0
          };
          this.clearPosition();
        }
        return {
          left: 0,
          right: 0,
          up: 0,
          down: 0
        };
      }
      b = {
        left: this.isKeyControlActive(a.left),
        right: this.isKeyControlActive(a.right),
        up: this.isKeyControlActive(a.up),
        down: this.isKeyControlActive(a.down)
      };
      c = 0;
      for (g in b) b[g] && c++;
      g = 1 / c;
      return {
        left: b.left ? g : 0,
        right: b.right ? g : 0,
        up: b.up ? g : 0,
        down: b.down ? g : 0
      };
    }
    clearPosition() {
      this.currentTouchPositionPlatform = this.currentTouchPosition = this.currentTouchId = null;
    }
  }
  k.ControlsManager = new B();
  k.shared.LevelUp = C;
  function C(a, b, c) {
    this.bgElem = $(b);
    this.numberElem = $(c);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  C.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  C.prototype.onResize_ = function () {
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
  C.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  C.prototype.numberShown_ = function () {
    D(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  C.prototype.show = function (a, b) {
    this.bgElem.addClass("is-visible");
    D(this.bgElem, "transitionend", 1, b);
    this.bgElem.css("border-width", this.bgBorderWidth);
    D(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function D(a, b, c, e) {
    function g() {
      h || (h = !0, a.removeEventListener(b, g), e && e());
    }
    a = k.shared.utils.unwrapElement(a);
    var h = !1;
    a.addEventListener(b, g);
    window.setTimeout(g, 1E3 * c);
  }
  class E {
    init(a, b, c) {
      this.levelUp = new C(a, b, c);
      this.current = 0;
    }
    transition(a, b) {
      this.levelUp.show(this.current + 1, b);
      setTimeout(() => {
        a();
      }, d.LEVEL_TRANSITION_TIMING);
    }
    goToNextLevel(a, b) {
      this.current++;
      this.transition(a, b);
    }
    reset(a, b) {
      this.current = 0;
      this.transition(a, b);
    }
    updateLevel() {
      this.toyType = f[this.current].toyType;
      this.toysCapacity = f[this.current].toysCapacity;
    }
  }
  k.LevelManager = new E();
  class F {
    init(a, b) {
      this.elem = b;
      this.game = a;
      this.dom = {
        text: this.elem.querySelector("[data-walkthrough-text]"),
        toys: this.elem.querySelector("[data-walkthrough-toys]")
      };
    }
    show() {
      this.elem.classList.remove("is-hidden");
    }
    hide() {
      this.elem.classList.add("is-hidden");
    }
    updateLevel() {
      const {
        toyType: a,
        toysCapacity: b
      } = k.LevelManager;
      this.dom.text.innerHTML = this.getMessage(a, b);
      this.dom.toys.innerHTML = "";
      for (var c = 0; c < a.size; c++) {
        var e = document.createElement("div");
        e.classList.add("walkthrough__toypart");
        e.classList.add("walkthrough__appear");
        const b = document.createElement("img");
        b.classList.add("walkthrough__toypart-img");
        b.src = `img/toys/${a.key}/${c + 1}.svg`;
        const h = document.createElement("div");
        h.classList.add("walkthrough__operator");
        h.classList.add("walkthrough__appear");
        h.innerHTML = c === a.size - 1 ? "=" : "+";
        e.appendChild(b);
        this.dom.toys.appendChild(e);
        this.dom.toys.appendChild(h);
      }
      c = document.createElement("div");
      c.classList.add("walkthrough__toyfull");
      c.classList.add("walkthrough__appear");
      e = document.createElement("img");
      e.classList.add("walkthrough__toyfull-img");
      e.src = `img/toys/${a.key}/full.svg`;
      c.appendChild(e);
      this.dom.toys.appendChild(c);
    }
    getMessage(a, b) {
      return 1 < b ? this.game.msg[`${a.key}-multiple`].replace("{{count}}", `<span class="walkthrough__number">${b}</span>`) : this.game.msg[`${a.key}-single`].replace("1", `<span class="walkthrough__number">${b}</span>`);
    }
  }
  k.Walkthrough = new F();
  class G {
    init(a, b) {
      this.elem = b;
      this.game = a;
      this.dom = {
        numbers: this.elem.querySelectorAll("[data-countdown-numbers]"),
        go: this.elem.querySelector("[data-countdown-go]")
      };
    }
    start() {
      for (let a = 0; a < this.dom.numbers.length; a++) {
        const b = 1E3 * a;
        setTimeout(() => {
          this.dom.numbers[a].classList.add("animate");
          window.santaApp.fire("sound-trigger", "buildandbolt_game_count");
        }, b);
        setTimeout(() => {
          this.dom.numbers[a].classList.remove("animate");
        }, b + 1E3);
        a === this.dom.numbers.length - 1 && (setTimeout(() => {
          this.dom.go.classList.add("animate");
          window.santaApp.fire("sound-trigger", "buildandbolt_level_end");
          window.santaApp.fire("sound-trigger", "buildandbolt_game_count_go");
        }, b + 1E3 + 200), setTimeout(() => {
          this.dom.go.classList.remove("animate");
          this.game.canResume = !0;
          this.game.resume();
          this.game.startMusic();
          k.Walkthrough.hide();
        }, b + 1E3 + 1500));
      }
    }
  }
  k.Countdown = new G();
  k.Entity = class {
    constructor() {
      this.elem = document.createElement("div");
      document.getElementById(this.constructor.targetHolderId).append(this.elem);
      this.elem.setAttribute("class", this.constructor.elemClass);
    }
    onInit(a) {
      this.config = a;
      this.elem.classList.remove("hidden");
      this.render();
      k.Board.addEntityToBoard(this, this.config.x, this.config.y, this.config.width, this.config.height);
    }
    onDispose() {
      this.elem.classList.add("hidden");
    }
    onFrame() {}
    render() {}
    onContact() {
      return null;
    }
  };
  k.shared.pools = function () {
    const a = [];
    return {
      mixin(b, c) {
        function e(a) {
          c.fixed || 0 !== b.pool_.length || b.pool(a);
        }
        function g(a, b) {
          a && a.onInit.apply(a, Array.prototype.slice.call(b, 1));
          return a || null;
        }
        c = c || {};
        b.pool_ = [];
        a.push(b);
        b.pop = function (a) {
          e(a);
          const c = b.pool_.shift();
          return g(c, arguments);
        };
        b.popRandom = function (a) {
          e(a);
          const c = Math.floor(Math.random() * b.pool_.length),
            h = b.pool_[c],
            q = b.pool_.pop();
          q && h !== q && (b.pool_[c] = q);
          return g(h, arguments);
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
  k.shared.pools.PoolType = function () {};
  k.shared.pools.PoolType.onInit = function () {};
  k.shared.pools.PoolType.onDispose = function () {};
  k.shared.pools.PoolType.remove = function () {};
  k.Fence = class extends k.Entity {
    constructor() {
      super();
      this.lastSoundTime = 0;
    }
    onInit(a) {
      super.onInit({
        ...a,
        checkCell: !0,
        checkBorder: !0
      });
      const {
        cells: b,
        row: c,
        column: e
      } = a;
      a = b[c][e];
      const g = this.setType(b, c, e);
      a.top && this.addChild("top", g.top);
      a.right && this.addChild("right", g.right);
      a.bottom && this.addChild("bottom", g.bottom);
      a.left && this.addChild("left", g.left);
    }
    onDispose() {
      super.onDispose();
      y.removeAllChildren(this.elem);
    }
    addChild(a, b = !1) {
      const c = document.createElement("div");
      c.classList.add("fence__background");
      c.classList.add(`fence__background--${a}`);
      b && c.classList.add(`fence__background--${b}`);
      this.elem.appendChild(c);
    }
    render() {
      y.renderAtGridLocation(this.elem, this.config.x, this.config.y);
    }
    onContact(a) {
      let b = [];
      if (this.blockingPosition = y.isInFence(this.config, a.position, a.prevPosition, this.elem)) b = [d.PLAYER_ACTIONS.BLOCK], this.playSound();
      return b;
    }
    playSound() {
      700 < performance.now() - this.lastSoundTime && (window.santaApp.fire("sound-trigger", "buildandbolt_thud"), this.lastSoundTime = performance.now());
    }
    setType(a, b, c) {
      const e = a[b][c],
        g = {
          top: !1,
          right: !1,
          bottom: !1,
          left: !1
        };
      if (e.top || e.bottom) 0 === c && (e.top && (g.top = "start"), e.bottom && (g.bottom = "start")), !a[b][c - 1] || a[b][c - 1].top || a[b][c - 1].bottom || (e.top && (g.top = "start"), e.bottom && (g.bottom = "start")), !a[b][c + 1] || a[b][c + 1].top || a[b][c + 1].bottom || (e.top && (g.top = "end"), e.bottom && (g.bottom = "end")), c === a[b].length - 1 && (e.top && (g.top = "end"), e.bottom && (g.bottom = "end"));
      (e.left || e.right) && a[b - 1] && (!e.left || e.top || !a[b - 1][c] || a[b - 1][c].left || a[b - 1][c].bottom || (g.left = "end-side"), !e.right || e.top || !a[b - 1][c] || a[b - 1][c].right || a[b - 1][c].bottom || (g.right = "end-side"));
      return g;
    }
  };
  k.Fence.targetHolderId = "fences";
  k.Fence.elemClass = "fence";
  k.shared.pools.mixin(k.Fence);
  k.Gui = class {
    constructor(a) {
      this.game = a;
      this.guiElem = this.game.context.querySelector("[data-gui]");
      this.playerSelectionScreen = this.game.context.querySelector("[data-player-selection]");
      this.playerSelectionOptions = this.game.context.querySelectorAll("[data-player-option]");
      this.controlsScreen = this.game.context.querySelector("[data-player-controls]");
      this.controlsButton = this.game.context.querySelector("[data-player-controls-skip]");
      k.shared.utils.touchEnabled ? (this.playerOption = d.PLAYER_OPTIONS.SINGLE, this.startGame()) : (this.playerSelectionScreen.classList.remove("is-hidden"), this.playerSelectionOptions.forEach(a => {
        a.addEventListener("click", this.onPlayerOptionClick.bind(this, a));
        a.addEventListener("mouseenter", this.onPlayerOptionOver.bind(this, a));
      }), this.controlsButton.addEventListener("click", this.onSkipControlsClick.bind(this)), this.controlsButton.addEventListener("mouseenter", this.onSkipControlsOver.bind(this)));
    }
    onPlayerOptionClick(a) {
      this.playerSelectionScreen.classList.add("is-hidden");
      this.playerOption = a.getAttribute("data-player-option");
      this.controlsScreen.classList.remove("is-hidden");
      this.controlsScreen.setAttribute("data-player-controls", this.playerOption);
      window.santaApp.fire("sound-trigger", "generic_button_click");
    }
    onPlayerOptionOver() {
      window.santaApp.fire("sound-trigger", "generic_button_over");
    }
    onSkipControlsClick(a) {
      this.startGame();
      window.santaApp.fire("sound-trigger", "generic_button_click");
      a.currentTarget.blur();
    }
    onSkipControlsOver() {
      window.santaApp.fire("sound-trigger", "generic_button_over");
    }
    startGame() {
      this.game.init(this.playerOption);
    }
  };
  k.Ice = class extends k.Entity {
    onInit(a) {
      super.onInit({
        ...a,
        checkCell: !0
      });
    }
    render() {
      super.render();
      this.elem.style.height = `${y.gridToPixelValue(this.config.height)}px`;
      this.elem.style.width = `${y.gridToPixelValue(this.config.width)}px`;
      y.renderAtGridLocation(this.elem, this.config.x, this.config.y);
    }
    onContact(a) {
      super.onContact(a);
      return [d.PLAYER_ACTIONS.ICE];
    }
  };
  k.Ice.targetHolderId = "ice";
  k.Ice.elemClass = "ice";
  k.shared.pools.mixin(k.Ice);
  k.Slider = class extends k.Entity {
    onInit(a) {
      this.config = {
        ...a,
        checkCell: !0
      };
      this.elem.classList.remove("hidden");
      this.position = {
        x: this.config.startPos.x,
        y: this.config.startPos.y
      };
      this.endPos = {
        x: this.config.isVertical ? this.config.startPos.x : this.config.startPos.x + this.config.movementLength,
        y: this.config.isVertical ? this.config.startPos.y + this.config.movementLength : this.config.startPos.y
      };
      this.elem.style.height = `${y.gridToPixelValue(this.config.height)}px`;
      this.elem.style.width = `${y.gridToPixelValue(this.config.width)}px`;
      this.reversing = !1;
      k.Board.addEntityToBoard(this, this.position.x, this.position.y, this.config.width, this.config.height);
    }
    onFrame() {
      this.prevPosition = Object.assign({}, this.position);
      this.flipped = !1;
      this.reversing ? this.config.isVertical ? (this.position.y -= this.config.stepSize, this.position.y <= this.config.startPos.y && (this.reversing = !1, this.position.y = this.config.startPos.y, this.flipped = !0)) : (this.position.x -= this.config.stepSize, this.position.x <= this.config.startPos.x && (this.reversing = !1, this.position.x = this.config.startPos.x, this.flipped = !0)) : this.config.isVertical ? (this.position.y += this.config.stepSize, this.position.y >= this.endPos.y && (this.reversing = !0, this.position.y = this.endPos.y, this.flipped = !0)) : (this.position.x += this.config.stepSize, this.position.x >= this.endPos.x && (this.reversing = !0, this.position.x = this.endPos.x, this.flipped = !0));
      this.render();
      k.Board.updateEntityPosition(this, this.prevPosition.x, this.prevPosition.y, this.position.x, this.position.y, this.config.width, this.config.height);
    }
    render() {
      y.renderAtGridLocation(this.elem, this.position.x, this.position.y);
    }
    onContact(a) {
      super.onContact(a);
    }
  };
  k.Penguin = class extends k.Slider {
    constructor() {
      super();
      this.innerElem = document.createElement("div");
      this.innerElem.setAttribute("class", "penguin__inner");
      this.elem.appendChild(this.innerElem);
      this.animations = {};
      var a = ["front", "back", "side"];
      const b = [];
      for (const c of a) a = new Promise(a => {
        k.AnimationManager.prepareAnimation(`img/penguin/${c}.json`, this.innerElem, c, b => {
          this.animations[c] = b;
          a();
        });
      }), b.push(a);
      Promise.all(b).then(() => {
        this.render();
        k.AnimationManager.penguinLoaded || (k.AnimationManager.penguinLoaded = !0);
      });
    }
    onInit(a) {
      super.onInit({
        ...a,
        type: "penguin",
        checkBorder: !0,
        height: d.PENGUIN_HEIGHT,
        width: d.PENGUIN_WIDTH
      });
      this.animationFrame = d.PENGUIN_FRAMES.start;
      this.lastAnimationFrame = null;
      this.animationDirection = this.config.isVertical ? "front" : "side";
      k.AnimationManager.penguinLoaded && this.render();
    }
    onDispose() {
      super.onDispose();
      this.animations.front && this.animations.front.container.classList.remove("is-active");
      this.animations.back && this.animations.back.container.classList.remove("is-active");
      this.animations.side && this.animations.side.container.classList.remove("is-active");
      this.innerElem.classList.remove("is-flipped");
    }
    onFrame(a, b) {
      this.lastAnimationFrame || (this.lastAnimationFrame = b);
      const {
        nextFrame: c,
        frameTime: e
      } = y.nextAnimationFrame(d.PENGUIN_FRAMES, this.animationFrame, !0, this.lastAnimationFrame, b);
      this.animationFrame = c;
      this.lastAnimationFrame = e;
      super.onFrame();
    }
    render() {
      super.render();
      this.flipped && (this.config.isVertical ? this.reversing ? (this.animationDirection = "back", this.animations.front && this.animations.front.container.classList.remove("is-active")) : (this.animationDirection = "front", this.animations.back && this.animations.back.container.classList.remove("is-active")) : this.reversing ? this.innerElem.classList.add("is-flipped") : this.innerElem.classList.remove("is-flipped"));
      this.animations[this.animationDirection] && (this.animations[this.animationDirection].container.classList.add("is-active"), this.animations[this.animationDirection].goToAndStop(this.animationFrame, !0));
    }
    getDirectionAngle() {
      return y.getAngle(this.position, this.prevPosition);
    }
    onContact(a) {
      super.onContact(a);
      return [d.PLAYER_ACTIONS.BOUNCE];
    }
  };
  k.Penguin.targetHolderId = "penguins";
  k.Penguin.elemClass = "penguin";
  k.shared.pools.mixin(k.Penguin);
  class K {
    init(a) {
      this.tileImages = a.querySelector("[data-tile-slices]");
      this.canvas = a.querySelector("[data-tile-canvas]");
      this.ctx = this.canvas.getContext("2d");
    }
    renderEntity(a, b, c, e) {
      if (a = K.ASSETS[a]) {
        this.canvas.width = 2 * y.gridToPixelValue(b);
        this.canvas.height = 2 * y.gridToPixelValue(c);
        for (var {
            tileSize: g
          } = a, h = 0; h < c;) {
          let e;
          e = 0 == h ? a.top : h == c - (a.bottom.height || g) ? a.bottom : h == (a.top.height || 1) && a.middle1 ? a.middle1 : a.middle;
          let l = 0;
          for (; l < b;) {
            let a;
            a = 0 == l ? e.left : l == b - g ? e.right : e.middle;
            const c = this.tileImages.querySelector(`[src="${a.path}"]`),
              m = 2 * y.gridToPixelValue(l),
              w = 2 * y.gridToPixelValue(h),
              r = 2 * y.gridToPixelValue(e.height || g),
              n = 2 * y.gridToPixelValue(g);
            this.ctx.save();
            this.ctx.translate(m, w);
            a.flipped ? (this.ctx.scale(-1, 1), this.ctx.drawImage(c, -n, 0, n, r)) : this.ctx.drawImage(c, 0, 0, n, r);
            this.ctx.restore();
            l += g;
          }
          h += e.height || g;
        }
        b = new Image(y.gridToPixelValue(b), y.gridToPixelValue(c));
        b.src = this.canvas.toDataURL("image/png");
        e.appendChild(b);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }
  K.ASSETS = {
    pit: {
      tileSize: 1,
      top: {
        height: 2,
        left: {
          path: "img/pit/pit_top_left.svg"
        },
        middle: {
          path: "img/pit/pit_top_middle.svg"
        },
        right: {
          path: "img/pit/pit_top_right.svg"
        }
      },
      middle1: {
        left: {
          path: "img/pit/pit_middle1_left.svg"
        },
        middle: {
          path: "img/pit/pit_middle_middle.svg"
        },
        right: {
          path: "img/pit/pit_middle1_right.svg"
        }
      },
      middle: {
        left: {
          path: "img/pit/pit_middle_left.svg"
        },
        middle: {
          path: "img/pit/pit_middle_middle.svg"
        },
        right: {
          path: "img/pit/pit_middle_right.svg"
        }
      },
      bottom: {
        left: {
          path: "img/pit/pit_bottom_left.svg"
        },
        middle: {
          path: "img/pit/pit_bottom_middle.svg"
        },
        right: {
          path: "img/pit/pit_bottom_right.svg"
        }
      }
    },
    wall: {
      tileSize: 1,
      top: {
        left: {
          path: "img/wall/wall_top_side.svg"
        },
        middle: {
          path: "img/wall/wall_top_middle.svg"
        },
        right: {
          path: "img/wall/wall_top_side.svg",
          flipped: !0
        }
      },
      middle: {
        left: {
          path: "img/wall/wall_middle_side.svg"
        },
        middle: {
          path: "img/wall/wall_middle.svg"
        },
        right: {
          path: "img/wall/wall_middle_side.svg",
          flipped: !0
        }
      },
      bottom: {
        height: 3,
        left: {
          path: "img/wall/wall_bottom_side.svg"
        },
        middle: {
          path: "img/wall/wall_bottom_middle_1.svg",
          path_alt: "img/wall/wall_bottom_middle_2.svg"
        },
        right: {
          path: "img/wall/wall_bottom_side.svg",
          flipped: !0
        }
      }
    },
    platform: {
      tileSize: .5,
      top: {
        left: {
          path: "img/platform/platform_top_side.png"
        },
        middle: {
          path: "img/platform/platform_middle.png"
        },
        right: {
          path: "img/platform/platform_top_side.png",
          flipped: !0
        }
      },
      middle: {
        left: {
          path: "img/platform/platform_middle_side.png"
        },
        middle: {
          path: "img/platform/platform_middle.png"
        },
        right: {
          path: "img/platform/platform_middle_side.png",
          flipped: !0
        }
      },
      bottom: {
        left: {
          path: "img/platform/platform_bottom_side.png"
        },
        middle: {
          path: "img/platform/platform_bottom_middle.png"
        },
        right: {
          path: "img/platform/platform_bottom_side.png",
          flipped: !0
        }
      }
    }
  };
  k.TileManager = new K();
  k.Pit = class extends k.Entity {
    onInit(a) {
      super.onInit({
        ...a,
        checkCell: !0
      });
      k.TileManager.renderEntity("pit", a.width, a.height, this.elem);
    }
    onDispose() {
      super.onDispose();
      y.removeAllChildren(this.elem);
    }
    addTile(a) {
      let b = document.createElement("div");
      b.classList.add("pit__tile");
      a && b.classList.add(`pit__tile--${a}`);
      this.elem.appendChild(b);
    }
    render() {
      super.render();
      this.elem.style.height = `${y.gridToPixelValue(this.config.height)}px`;
      this.elem.style.width = `${y.gridToPixelValue(this.config.width)}px`;
      y.renderAtGridLocation(this.elem, this.config.x, this.config.y);
    }
    onContact(a) {
      return y.isTouchingBorder(this.config, a.position) ? [d.PLAYER_ACTIONS.PIT_FALL] : [];
    }
  };
  k.Pit.targetHolderId = "pits";
  k.Pit.elemClass = "pit";
  k.shared.pools.mixin(k.Pit);
  k.Platform = class extends k.Slider {
    onContact(a) {
      super.onContact(a);
      return [d.PLAYER_ACTIONS.STICK_TO_PLATFORM];
    }
    onInit(a) {
      super.onInit(a);
      k.TileManager.renderEntity("platform", a.width, a.height, this.elem);
      super.render();
    }
    onDispose() {
      super.onDispose();
      y.removeAllChildren(this.elem);
    }
  };
  k.Platform.targetHolderId = "platforms";
  k.Platform.elemClass = "platform";
  k.shared.pools.mixin(k.Platform);
  class L {
    init(a, b, c) {
      this.game = a;
      this.elem = b;
      this.dom = {
        skipButton: this.elem.querySelector("[data-score-screen-skip]"),
        players: this.elem.querySelectorAll("[data-score-screen-player]")
      };
      c == d.PLAYER_OPTIONS.SINGLE && (this.dom.players[1].remove(), this.elem.classList.add("single-player"), this.dom.players[0].querySelector("[data-score-screen-character]").src = "img/players/a/win.svg");
      this.dom.skipButton.addEventListener("click", this.onSkipControlsClick.bind(this));
      this.dom.skipButton.addEventListener("mouseenter", this.onSkipControlsOver.bind(this));
    }
    show() {
      this.elem.classList.remove("is-hidden");
      this.dom.skipButton.focus();
      this.state = "show";
      window.santaApp.fire("sound-trigger", "buildandbolt_chord");
      window.santaApp.fire("sound-trigger", "buildandbolt_level_transition");
      this.stopWalkSounds();
    }
    stopWalkSounds() {
      setTimeout(() => {
        window.santaApp.fire("sound-trigger", "buildandbolt_player_walk_stop", "all");
        window.santaApp.fire("sound-trigger", "buildandbolt_ice_stop", "all");
      }, 10);
    }
    showEnd(a, b) {
      this.show();
      this.elem.classList.add("game-end");
      if (b) {
        const {
          playersState: b,
          tie: e
        } = a;
        if (e) this.elem.classList.add("tie");else for (a = 0; a < b.length; a++) {
          const {
            id: c,
            state: e
          } = b[a];
          this.elem.querySelector(`.score-screen__player--${c}`).classList.add(e);
        }
      } else this.dom.players[0].classList.add("win");
    }
    hide() {
      this.elem.classList.add("is-hidden");
      setTimeout(() => {
        this.state = "hidden";
      }, 1E3);
    }
    updateScore(a, b, c) {
      this.elem.querySelector(`.score-screen__player--${a} [data-score-screen-score]`).innerHTML = b;
      a = this.elem.querySelector(`.score-screen__player--${a} [data-score-screen-toys]`);
      const e = document.createElement("div");
      e.classList.add("score-screen__toy");
      const g = document.createElement("img");
      g.classList.add("score-screen__toy-img");
      g.classList.add(`score-screen__toy-img--${c}`);
      g.src = `img/toys/${c}/full.svg`;
      e.appendChild(g);
      a.appendChild(e);
      e.offsetWidth * b > a.offsetWidth && !a.classList.contains("left-aligned") && a.classList.add("left-aligned");
    }
    updateCharacters(a) {
      for (let b = 0; b < a.length; b++) {
        const {
          id: c,
          state: e
        } = a[b];
        this.elem.querySelector(`.score-screen__player--${c} [data-score-screen-character]`).src = `img/players/${c}/${e}.svg`;
      }
    }
    onSkipControlsClick(a) {
      window.santaApp.fire("sound-trigger", "generic_button_click");
      this.game.goToNextLevel();
      a.currentTarget.blur();
    }
    onSkipControlsOver() {
      window.santaApp.fire("sound-trigger", "generic_button_over");
    }
    reset(a, b) {
      const c = this.elem.querySelector(`.score-screen__player--${a}`);
      c.classList.remove("win");
      c.classList.remove("lose");
      this.elem.querySelector(`.score-screen__player--${a} [data-score-screen-score]`).innerHTML = b;
      this.elem.querySelector(`.score-screen__player--${a} [data-score-screen-toys]`).innerHTML = "";
      this.elem.classList.remove("game-end");
      this.elem.classList.remove("tie");
    }
  }
  k.ScoreScreen = new L();
  class M {
    init(a, b) {
      this.elem = a;
      this.dom = {
        players: this.elem.querySelectorAll("[data-toys-board-player]"),
        toyImages: this.elem.querySelectorAll("[data-toys-board-toy]"),
        score: this.elem.querySelectorAll("[data-toys-board-score]")
      };
      b == d.PLAYER_OPTIONS.SINGLE && (this.dom.players[1].remove(), this.elem.classList.add("single-player"));
    }
    updateLevel() {
      const {
        toyType: a,
        toysCapacity: b
      } = k.LevelManager;
      for (let c = 0; c < this.dom.players.length; c++) this.dom.toyImages[c].src = `img/toys/${a.key}/full.svg`, this.dom.score[c].innerHTML = b;
    }
    updateScore(a, b) {
      this.elem.querySelector(`.toys-board__player--${a} [data-toys-board-score]`).innerHTML = b;
    }
  }
  k.ToysBoard = new M();
  class N {
    constructor() {
      this.scoresDict = {};
    }
    init(a) {
      this.game = a;
      this.initScoresDict();
    }
    initScoresDict() {
      for (let a = 0; a < this.game.players.length; a++) this.scoresDict[this.game.players[a].id] = {
        toysInLevel: 0,
        toys: []
      };
    }
    updateScore(a) {
      const {
          toyType: b,
          toysCapacity: c
        } = k.LevelManager,
        e = this.scoresDict[a];
      e.toysInLevel++;
      e.toys.push(b.key);
      k.ToysBoard.updateScore(a, c - e.toysInLevel);
      k.ScoreScreen.updateScore(a, e.toys.length, b.key);
      window.santaApp.fire("sound-trigger", "buildandbolt_yay_2", a);
      e.toysInLevel === c && this.endLevel();
    }
    endLevel() {
      let a;
      a = this.game.multiplayer ? this.setWinner() : this.setWinnerSinglePlayer();
      this.resetToysInLevels();
      k.LevelManager.current < f.length - 1 ? k.ScoreScreen.show() : k.ScoreScreen.showEnd(a, this.game.multiplayer);
      this.game.pause();
      this.game.canResume = !1;
    }
    setWinner() {
      const {
          players: a
        } = this.game,
        b = [];
      for (var c = 0; c < a.length; c++) b.push({
        id: a[c].id,
        state: null
      });
      c = !1;
      this.scoresDict[a[0].id].toys.length > this.scoresDict[a[1].id].toys.length ? (b[0].state = "win", b[1].state = "lose") : this.scoresDict[a[0].id].toys.length < this.scoresDict[a[1].id].toys.length ? (b[0].state = "lose", b[1].state = "win") : (b[0].state = "win", b[1].state = "win", c = !0);
      k.ScoreScreen.updateCharacters(b);
      return {
        playersState: b,
        tie: c
      };
    }
    setWinnerSinglePlayer() {
      const {
          players: a
        } = this.game,
        {
          toysCapacity: b
        } = k.LevelManager,
        c = [{
          id: a[0].id,
          state: null
        }];
      c[0].state = this.scoresDict[a[0].id].toysInLevel === b ? "win" : "lose";
      k.ScoreScreen.updateCharacters(c);
      return {
        playersState: c,
        tie: !1
      };
    }
    resetToysInLevels() {
      for (let a = 0; a < this.game.players.length; a++) this.scoresDict[this.game.players[a].id].toysInLevel = 0;
    }
    reset() {
      for (let a = 0; a < this.game.players.length; a++) {
        const b = this.game.players[a];
        this.scoresDict[b.id].toysInLevel = 0;
        this.scoresDict[b.id].toys = [];
        k.ToysBoard.updateScore(b.id, 0);
        k.ScoreScreen.reset(b.id, 0);
      }
    }
  }
  k.ScoreManager = new N();
  k.Player = class {
    constructor(a, b) {
      this.animations = k.AnimationManager.animations[`player-${b}`];
      this.controls = a;
      this.toyParts = [];
      this.id = b;
      this.lastPenguinSoundTime = this.lastErrorSoundTime = 0;
      this.elem = document.querySelector(`.player--${b}`);
      this.elem.classList.add("is-active");
      this.spawnElem = document.querySelector(`.player-spawn--${b}`);
      this.spawnElem.classList.add("is-active");
      this.innerElem = this.elem.querySelector(".player__inner");
      this.toysElem = this.elem.querySelector(".player__toys");
    }
    init(a) {
      this.config = {
        ...a,
        type: "player",
        checkBorder: !0,
        checkCell: !0
      };
      this.resetPosition();
      y.renderAtGridLocation(this.spawnElem, this.position.x, this.position.y);
      k.Board.addEntityToBoard(this, this.position.x, this.position.y);
      this.render();
    }
    pitFall() {
      this.dead = !0;
      this.animationQueue = [];
      this.innerElem.classList.add("is-falling");
      setTimeout(() => {
        this.elem.classList.add("is-hidden");
        this.dead = !1;
        window.santaApp.fire("sound-trigger", "buildandbolt_respawn");
        this.resetPosition();
        k.Board.updateEntityPosition(this, this.prevPosition.x, this.prevPosition.y, this.position.x, this.position.y);
        setTimeout(() => {
          this.innerElem.classList.remove("is-falling");
          this.elem.classList.remove("is-hidden");
        }, 100);
      }, 500);
    }
    resetPosition() {
      this.position = {
        x: this.config.startPos.x,
        y: this.config.startPos.y,
        angle: 0
      };
      this.velocity = {
        x: 0,
        y: 0
      };
      k.ControlsManager.clearPosition();
      this.playingIceSound && (this.playingIceSound = !1, window.santaApp.fire("sound-trigger", "buildandbolt_ice_stop", this.id));
      this.clearToyParts();
      this.platform = null;
      this.playingIceSound = this.onIce = !1;
      this.currentAnimationFrame = d.PLAYER_FRAMES.REST.start;
      this.currentAnimationState = {
        animation: d.PLAYER_FRAMES.REST
      };
      this.playerState = d.PLAYER_STATES.REST;
      this.setDirection("front");
      this.animationQueue = [];
    }
    onFrame(a, b) {
      this.dead || (this.blockPlayer = !1, this.blockingPosition = {
        x: this.position.x,
        y: this.position.y
      }, this.prevPosition = Object.assign({}, this.position), this.updatePosition(a), this.checkActions(), a = 8 * d.PLAYER_ACCELERATION_STEP, 0 == this.velocity.x && 0 == this.velocity.y || this.isDecelerating && Math.abs(this.velocity.x) <= a && Math.abs(this.velocity.y) <= a ? this.setPlayerState(d.PLAYER_STATES.REST) : this.setPlayerState(d.PLAYER_STATES.WALK), this.updateAnimationFrame(b), this.movePlayer(), this.render());
    }
    render() {
      this.animations[this.currentDirection].goToAndStop(this.currentAnimationFrame, !0);
      y.renderAtGridLocation(this.elem, this.position.x, this.position.y);
    }
    updatePosition(a) {
      this.isDecelerating = !1;
      const {
          PLAYER_ACCELERATION_FACTOR: b,
          PLAYER_DECELERATION_FACTOR: c,
          PLAYER_ICE_ACCELERATION_FACTOR: e,
          PLAYER_ICE_DECELERATION_FACTOR: g,
          PLAYER_MAX_VELOCITY: h,
          PLAYER_ACCELERATION_STEP: m,
          PLAYER_DIRECTION_CHANGE_THRESHOLD: l,
          GRID_DIMENSIONS: q
        } = d,
        {
          left: z,
          right: A,
          up: w,
          down: r
        } = k.ControlsManager.getMovementDirections(this.controls, this.position, this.platform, this.platformOffset);
      let n = b,
        t = c;
      this.onIce && (n = e, t = g, this.onIce = !1);
      const u = [];
      z ? (this.velocity.x = Math.max(-h * n, this.velocity.x - m * z * n), z > l && 0 > this.velocity.x && (this.setDirection("left"), u.push("left"))) : 0 > this.velocity.x && (this.velocity.x = Math.min(0, this.velocity.x + m * t), this.isDecelerating = !0, k.ControlsManager.isTouch && !this.recentlyBumped && (this.velocity.x = 0));
      A ? (this.velocity.x = Math.min(h * n, this.velocity.x + m * A * n), A > l && 0 < this.velocity.x && (this.setDirection("right"), u.push("right"))) : 0 < this.velocity.x && (this.velocity.x = Math.max(0, this.velocity.x - m * t), this.isDecelerating = !0, k.ControlsManager.isTouch && !this.recentlyBumped && (this.velocity.x = 0));
      w ? (this.velocity.y = Math.max(-h * n, this.velocity.y - m * w * n), w > l && 0 > this.velocity.y && (this.setDirection("back"), u.push("back"))) : 0 > this.velocity.y && (this.velocity.y = Math.min(0, this.velocity.y + m * t), this.isDecelerating = !0, k.ControlsManager.isTouch && !this.recentlyBumped && (this.velocity.y = 0));
      r ? (this.velocity.y = Math.min(h * n, this.velocity.y + m * r * n), r > l && 0 < this.velocity.y && (this.setDirection("front"), u.push("front"))) : 0 < this.velocity.y && (this.velocity.y = Math.max(0, this.velocity.y - m * t), this.isDecelerating = !0, k.ControlsManager.isTouch && !this.recentlyBumped && (this.velocity.y = 0));
      this.setDiagonalDirections(u);
      this.platform ? (this.platformOffset.x += this.velocity.x * a, this.platformOffset.y += this.velocity.y * a) : (this.position.x = Math.min(q.WIDTH - 1, Math.max(0, this.position.x + this.velocity.x * a)), this.position.y = Math.min(q.HEIGHT - 1, Math.max(0, this.position.y + this.velocity.y * a)));
      this.platform && (this.position.x = this.platform.position.x + this.platformOffset.x, this.position.y = this.platform.position.y + this.platformOffset.y, this.platformOffset.x > this.platform.config.width || -1 > this.platformOffset.x || this.platformOffset.y > this.platform.config.height || -1 > this.platformOffset.y) && (this.platform = null);
      k.ControlsManager.isTouch && k.Board.updateBoardPosition(this.position);
    }
    movePlayer() {
      this.blockPlayer && (this.position.x = this.blockingPosition.x, this.position.y = this.blockingPosition.y, this.velocity.x = 0, this.velocity.y = 0);
      k.Board.updateEntityPosition(this, this.prevPosition.x, this.prevPosition.y, this.position.x, this.position.y);
    }
    checkActions() {
      var a = k.Board.getSurroundingEntities(this);
      const b = {};
      for (const c of a) {
        a = c.onContact(this);
        for (const e of a) b[e] || (b[e] = []), b[e].push(c);
      }
      this.processActions(b);
    }
    processActions(a) {
      var b = a[d.PLAYER_ACTIONS.STICK_TO_PLATFORM];
      b && b.length && (b = b[0], this.platform != b && (this.platform = b, this.platformOffset = {
        x: this.position.x - b.position.x,
        y: this.position.y - b.position.y
      }));
      b = a[d.PLAYER_ACTIONS.PIT_FALL];
      if (!this.platform && b && b.length) window.santaApp.fire("sound-trigger", "buildandbolt_pit"), window.santaApp.fire("sound-trigger", "buildandbolt_player_walk_stop", this.id), window.santaApp.fire("sound-trigger", "buildandbolt_ice_stop", this.id), this.pitFall();else {
        if ((b = a[d.PLAYER_ACTIONS.BLOCK]) && b.length) for (var c of b) c.blockingPosition && (this.blockPlayer = !0, k.ControlsManager.clearPosition(), c.blockingPosition.x !== this.position.x && (this.blockingPosition.x = c.blockingPosition.x), c.blockingPosition.y !== this.position.y && (this.blockingPosition.y = c.blockingPosition.y));
        if ((c = a[d.PLAYER_ACTIONS.ADD_TOY_PART]) && c.length) for (var e of c) this.addToyPart(e.config.part);
        (e = a[d.PLAYER_ACTIONS.ACCEPT_TOY]) && e.length && (this.setPlayerState(d.PLAYER_STATES.DROP_OFF), this.clearToyParts(), window.santaApp.fire("sound-trigger", "buildandbolt_toymaking"), k.ScoreManager.updateScore(this.id), e[0].closeBox(), clearTimeout(this.recentlyCompletedToyTimeout), this.recentlyCompletedToy = !0, this.recentlyCompletedToyTimeout = setTimeout(() => {
          this.recentlyCompletedToy = !1;
        }, 1E3));
        this.recentlyCompletedToy || c && c.length || e && e.length || k.ControlsManager.isTouch || !k.ControlsManager.isKeyControlActive(this.controls.action) || this.playErrorSound();
        (e = a[d.PLAYER_ACTIONS.ICE]) && e.length ? (this.onIce = !0, this.playingIceSound || this.playerState !== d.PLAYER_STATES.WALK || (this.playingIceSound = !0, window.santaApp.fire("sound-trigger", "buildandbolt_ice_start", this.id))) : this.playingIceSound && (this.playingIceSound = !1, window.santaApp.fire("sound-trigger", "buildandbolt_ice_stop", this.id));
        if ((a = a[d.PLAYER_ACTIONS.BOUNCE]) && a.length) for (const b of a) "penguin" === b.config.type && this.bouncedByPenguin(b), this.isCloseToOtherPlayer = "player" === b.config.type ? !0 : !1;
      }
    }
    playErrorSound() {
      200 < performance.now() - this.lastErrorSoundTime && (window.santaApp.fire("sound-trigger", "generic_fail"), this.lastErrorSoundTime = performance.now());
    }
    bump(a, b, c = 1, e = !0) {
      "a" === this.id && e && window.santaApp.fire("sound-trigger", "buildandbolt_elfbump");
      this.velocity.x = Math.cos(a) * b * c;
      this.velocity.y = Math.sin(a) * b * c;
    }
    getDirectionAngle() {
      return y.getAngle(this.position, this.prevPosition);
    }
    getSpeed() {
      return Math.abs(this.position.x - this.prevPosition.x) + Math.abs(this.position.y - this.prevPosition.y);
    }
    bouncedByPenguin(a) {
      const b = y.getDistance(this.position, a.position);
      if (1 > b) {
        let c, e;
        0 === this.getSpeed() ? (c = a.getDirectionAngle(), e = 1, k.ControlsManager.isTouch && (clearTimeout(this.recentlyBumpedTimeout), this.recentlyBumped = !0, this.recentlyBumpedTimeout = setTimeout(() => {
          this.recentlyBumped = !1;
        }, 200))) : (c = this.getDirectionAngle(), e = -1, this.recentlyBumped && (e = 1), clearTimeout(this.recentlyBumpedTimeout), this.recentlyBumped = !0, this.recentlyBumpedTimeout = setTimeout(() => {
          this.recentlyBumped = !1;
        }, 200));
        .5 >= b && !this.recentlyCrushed && (c = a.getDirectionAngle(), c += Math.PI / 2, clearTimeout(this.recentlyCrushedTimeout), this.recentlyCrushed = !0, this.recentlyCrushedTimeout = setTimeout(() => {
          this.recentlyCrushed = !1;
        }, 200));
        this.playPenguinSound();
        this.bump(c, d.PLAYER_PUSH_FORCE, e, !1);
      }
    }
    playPenguinSound() {
      150 < performance.now() - this.lastPenguinSoundTime && (window.santaApp.fire("sound-trigger", "buildandbolt_penguinbump"), this.lastPenguinSoundTime = performance.now());
    }
    addToyPart(a) {
      const {
        toyType: b
      } = k.LevelManager;
      if (-1 == this.toyParts.indexOf(a)) {
        this.toyParts.push(a);
        1 == this.toyParts.length && this.setPlayerState(d.PLAYER_STATES.PICK_UP);
        var c = document.createElement("img");
        this.toyParts.length == b.size ? (y.removeAllChildren(this.toysElem), c.setAttribute("class", `toypart toypart--${b.key}--full`), c.setAttribute("src", `img/toys/${b.key}/full.svg`), this.toysElem.appendChild(c), window.santaApp.fire("sound-trigger", "buildandbolt_yay_1", this.id)) : (c = document.createElement("img"), c.setAttribute("class", `toypart toypart--${b.key}--${a}`), c.setAttribute("src", `img/toys/${b.key}/${a}.svg`), this.toysElem.appendChild(c));
        window.santaApp.fire("sound-trigger", "buildandbolt_pickitem");
      }
    }
    clearToyParts() {
      for (const a of this.toyParts) this.elem.classList.remove(`toypart--${a}`);
      y.removeAllChildren(this.toysElem);
      this.toyParts = [];
    }
    setDirection(a) {
      "left" == a ? this.innerElem.classList.add("is-flipped") : this.innerElem.classList.remove("is-flipped");
      if ("left" == a || "right" == a) a = "side";
      a != this.currentDirection && (this.animations[this.currentDirection] && this.innerElem.classList.remove(`direction--${this.currentDirection}`), this.innerElem.classList.add(`direction--${a}`), this.currentDirection = a);
    }
    setDiagonalDirections(a) {
      y.removeClassesStartWith(this.innerElem, "diagonal--");
      if (1 < a.length) {
        let b = "";
        for (let c = 0; c < a.length; c++) b = `${b}-${a[c]}`;
        this.innerElem.classList.add(`diagonal-${b}`);
      }
    }
    setPlayerState(a) {
      if (a != this.playerState) {
        var b = d.PLAYER_FRAMES.REST,
          c = d.PLAYER_FRAMES.WALK,
          e = d.PLAYER_FRAMES.REST_TO_WALK,
          g = d.PLAYER_FRAMES.WALK_TO_REST;
        this.toyParts.length && (b = d.PLAYER_FRAMES.HOLD_REST, c = d.PLAYER_FRAMES.HOLD_WALK, e = d.PLAYER_FRAMES.HOLD_REST_TO_HOLD_WALK, g = d.PLAYER_FRAMES.HOLD_WALK_TO_HOLD_REST);
        switch (a) {
          case d.PLAYER_STATES.WALK:
            switch (this.playerState) {
              case d.PLAYER_STATES.REST:
                this.addAnimationToQueueOnce(e);
              default:
                this.playerState = d.PLAYER_STATES.WALK, this.addAnimationToQueueOnce(c), this.onIce ? window.santaApp.fire("sound-trigger", "buildandbolt_ice_start", this.id) : window.santaApp.fire("sound-trigger", "buildandbolt_player_walk_start", this.id);
            }
            break;
          case d.PLAYER_STATES.REST:
            switch (this.playerState) {
              case d.PLAYER_STATES.WALK:
                this.addAnimationToQueueOnce(g);
              default:
                this.playerState = d.PLAYER_STATES.REST, this.addAnimationToQueueOnce(b), window.santaApp.fire("sound-trigger", "buildandbolt_player_walk_stop", this.id), window.santaApp.fire("sound-trigger", "buildandbolt_ice_stop", this.id);
            }
            break;
          case d.PLAYER_STATES.PICK_UP:
            this.playerState = d.PLAYER_STATES.PICK_UP;
            this.addAnimationToQueueOnce(d.PLAYER_FRAMES.REST_TO_HOLD_REST);
            break;
          case d.PLAYER_STATES.DROP_OFF:
            this.playerState = d.PLAYER_STATES.DROP_OFF, this.addAnimationToQueueOnce(d.PLAYER_FRAMES.HOLD_REST_TO_REST);
        }
      }
    }
    addAnimationToQueueOnce(a, b) {
      this.animationQueue.find(b => b.animation == a) || !this.animationQueue.length && a == this.currentAnimationState.animation || this.animationQueue.push({
        animation: a,
        callback: b
      });
    }
    updateAnimationFrame(a) {
      let b = this.currentAnimationState.animation;
      if (this.currentAnimationFrame < b.start || this.currentAnimationFrame > b.end) this.currentAnimationFrame = b.start, this.lastAnimationFrame = a;else {
        this.lastAnimationFrame || (this.lastAnimationFrame = a);
        var {
          nextFrame: c,
          frameTime: e,
          finished: g
        } = y.nextAnimationFrame(b, this.currentAnimationFrame, b.loop && !this.animationQueue.length, this.lastAnimationFrame, a);
        this.currentAnimationFrame = c;
        this.lastAnimationFrame = e;
        g && (b.repeat ? (b.repeat--, this.currentAnimationFrame = b.start) : (this.currentAnimationState.callback && this.currentAnimationState.callback.call(this), this.animationQueue.length ? this.currentAnimationState = this.animationQueue.shift() : (this.setPlayerState(d.PLAYER_STATES.REST), this.animationQueue.length && (this.currentAnimationState = this.animationQueue.shift()))));
      }
    }
    onContact() {
      return [d.PLAYER_ACTIONS.BOUNCE];
    }
  };
  k.PresentBox = class extends k.Entity {
    onInit(a) {
      super.onInit({
        ...a,
        width: d.PRESENT_WIDTH,
        height: d.PRESENT_HEIGHT,
        checkBorder: !0
      });
      this.elem.setAttribute("class", "present-box");
      this.elem.classList.add(`present-box--${this.config.playerId}`);
      a = Math.floor(Math.random() * (this.config.isMiddle ? 2 : 3)) + 1;
      this.config.isSideView && this.config.isMiddle ? (this.elem.classList.add("present-box--middle"), this.elem.classList.add(`present-box--middle-${a}`)) : this.config.isSideView && !this.config.isMiddle ? (this.elem.classList.add("present-box--bottom"), this.elem.classList.add(`present-box--bottom-${a}`)) : (this.elem.classList.add("present-box--front"), this.elem.classList.add(`present-box--front-${a}`));
    }
    render() {
      y.renderAtGridLocation(this.elem, this.config.x, this.config.y, this.config.flipped);
    }
    onContact(a) {
      let b = [],
        c = a.id == this.config.playerId;
      if (c) {
        const {
          toyType: b
        } = k.LevelManager;
        for (let e = 1; e <= b.size; e++) -1 == a.toyParts.indexOf(e) && (c = !1);
      }
      c && y.isTouchingBorder(this.config, a.position) && (k.ControlsManager.isTouch || k.ControlsManager.isKeyControlActive(a.controls.action)) && (this.toyAccepted || (b = [d.PLAYER_ACTIONS.ACCEPT_TOY]));
      (this.blockingPosition = y.isInBorder(this.config, a.position, a.prevPosition)) && (b = [...b, d.PLAYER_ACTIONS.BLOCK]);
      return b;
    }
    closeBox() {
      this.toyAccepted = !0;
      this.elem.classList.add("present-box--closed");
    }
    onDispose() {
      super.onDispose();
      this.toyAccepted = !1;
    }
  };
  k.PresentBox.targetHolderId = "present-boxes";
  k.PresentBox.elemClass = "present-box";
  k.shared.pools.mixin(k.PresentBox);
  k.Table = class extends k.Entity {
    constructor() {
      super();
      this.lastSoundTime = 0;
    }
    onInit(a) {
      super.onInit({
        ...a,
        width: a.isSideView ? d.TABLE_HEIGHT : d.TABLE_WIDTH,
        height: a.isSideView ? d.TABLE_WIDTH : d.TABLE_HEIGHT,
        checkBorder: !0
      });
      const {
        toyType: b
      } = k.LevelManager;
      this.elem.setAttribute("class", `table table--${b.key}--${this.config.part} table--${this.config.tableType}${a.isSideView ? " table--side" : ""}`);
    }
    render() {
      y.renderAtGridLocation(this.elem, this.config.x, this.config.y);
    }
    onContact(a) {
      let b = [];
      if (y.isTouchingBorder(this.config, a.position)) {
        if (k.ControlsManager.isTouch || k.ControlsManager.isKeyControlActive(a.controls.action)) b = [d.PLAYER_ACTIONS.ADD_TOY_PART];
        d.DEBUG && (this.elem.style.opacity = .5);
      } else d.DEBUG && (this.elem.style.opacity = 1);
      if (this.blockingPosition = y.isInBorder(this.config, a.position, a.prevPosition)) b = [...b, d.PLAYER_ACTIONS.BLOCK], this.playSound();
      return b;
    }
    playSound() {
      700 < performance.now() - this.lastSoundTime && (window.santaApp.fire("sound-trigger", "buildandbolt_thud"), this.lastSoundTime = performance.now());
    }
  };
  k.Table.targetHolderId = "tables";
  k.Table.elemClass = "table";
  k.shared.pools.mixin(k.Table);
  k.Wall = class extends k.Entity {
    constructor() {
      super();
      this.lastSoundTime = 0;
    }
    onInit(a) {
      super.onInit({
        ...a,
        checkBorder: !0
      });
      k.TileManager.renderEntity("wall", a.width, a.height, this.elem);
    }
    onDispose() {
      super.onDispose();
      y.removeAllChildren(this.elem);
    }
    addTile(a) {
      let b = document.createElement("div");
      b.classList.add("wall__tile");
      a && b.classList.add(`wall__tile--${a}`);
      this.elem.appendChild(b);
    }
    render() {
      this.elem.style.height = `${y.gridToPixelValue(this.config.height)}px`;
      this.elem.style.width = `${y.gridToPixelValue(this.config.width)}px`;
      y.renderAtGridLocation(this.elem, this.config.x, this.config.y);
    }
    onContact(a) {
      let b = [];
      if (this.blockingPosition = y.isInBorder(this.config, a.position, a.prevPosition)) b = [...b, d.PLAYER_ACTIONS.BLOCK], this.playSound();
      return b;
    }
    playSound() {
      1500 < performance.now() - this.lastSoundTime && (window.santaApp.fire("sound-trigger", "buildandboilt_wallstop"), this.lastSoundTime = performance.now());
    }
  };
  k.Wall.targetHolderId = "walls";
  k.Wall.elemClass = "wall";
  k.shared.pools.mixin(k.Wall);
  k.shared.Gameover = class {
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
  k.shared.Scoreboard = O;
  function P(a, b) {
    a = d ? d[a] : void 0;
    return +a === a ? a : b;
  }
  function O(a, b, c) {
    this.game = a;
    this.initialCountdown_ = P("INITIAL_COUNTDOWN", 60);
    this.levels = c || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  O.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  O.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  O.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = P("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  O.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  O.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  O.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  O.prototype.announce_ = function () {
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
  function Q(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  k.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = Q(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = Q(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  k.Game = class {
    constructor(a, b, c, e) {
      d.DEBUG && document.body.classList.add("debug");
      this.context = a;
      this.msg = e;
      this.updateLevel = this.updateLevel.bind(this);
      this.startCountdown = this.startCountdown.bind(this);
      this.goToNextLevel = this.goToNextLevel.bind(this);
      k.AnimationManager.init(b, c);
      k.TileManager.init(a);
      this.initPlayersAnimations();
    }
    initPlayersAnimations() {
      const a = (a, c, e) => {
        const b = document.querySelector(`.player--${c} .player__inner`);
        k.AnimationManager.prepareAnimation(a, b, e, a => {
          k.AnimationManager.animations[`player-${c}`] || (k.AnimationManager.animations[`player-${c}`] = {});
          k.AnimationManager.animations[`player-${c}`][e] = a;
        }, !0);
      };
      a("img/players/a/front.json", "a", "front");
      a("img/players/a/back.json", "a", "back");
      a("img/players/a/side.json", "a", "side");
      a("img/players/b/front.json", "b", "front");
      a("img/players/b/back.json", "b", "back");
      a("img/players/b/side.json", "b", "side");
    }
    showGui() {
      this.gui = new k.Gui(this);
    }
    init(a) {
      this.players = [];
      this.entities = [];
      a == d.PLAYER_OPTIONS.SINGLE ? (this.players.push(new k.Player(d.PLAYER_CONTROLS.SINGLE, "a")), this.multiplayer = !1) : (this.players.push(new k.Player(d.PLAYER_CONTROLS.WASD, "a")), this.players.push(new k.Player(d.PLAYER_CONTROLS.ARROWS, "b")), this.multiplayer = !0);
      this.tutorial = new k.shared.Tutorial("buildandbolt_mobile.mp4");
      k.ControlsManager.init(this, document.querySelector("[data-board-bkg]"));
      k.ScoreManager.init(this);
      k.LevelManager.init(this, document.getElementsByClassName("levelup")[0], document.querySelector(".levelup--number"));
      k.ToysBoard.init(document.querySelector("[data-toys-board]"), a);
      k.Board.init(document.querySelector("[data-board]"));
      k.ScoreScreen.init(this, document.querySelector("[data-score-screen]"), a);
      k.Walkthrough.init(this, document.querySelector("[data-walkthrough]"));
      k.Countdown.init(this, document.querySelector("[data-countdown]"));
      this.gameoverDialog = new k.shared.Gameover(this);
      this.scoreboard = new k.shared.Scoreboard(this, null, f.length);
      this.isPlaying = !1;
      this.lastFrame = null;
      this.canResume = !1;
      k.LevelManager.transition(this.updateLevel, this.startCountdown);
      this.onFrame(0);
    }
    updateLevel() {
      k.LevelManager.updateLevel();
      k.ToysBoard.updateLevel();
      k.Walkthrough.updateLevel();
      this.initLevel();
      0 === k.LevelManager.current && (this.gui.controlsScreen.classList.add("is-hidden"), this.gui.guiElem.classList.add("game-started"), this.gameStarted = !0, window.santaApp.fire("sound-trigger", "buildandbolt_level_transition"), k.shared.utils.touchEnabled && this.tutorial.start());
      this.pause();
    }
    startMusic() {
      window.santaApp.fire("sound-trigger", "buildandbolt_game_start", 0);
    }
    startCountdown() {
      k.shared.utils.touchEnabled && k.Board.updateBoardPosition(this.players[0].position);
      k.ScoreScreen.hide();
      setTimeout(() => {
        k.Walkthrough.show();
      }, 1.5 * d.LEVEL_TRANSITION_TIMING);
      setTimeout(() => {
        k.Countdown.start();
      }, 3 * d.LEVEL_TRANSITION_TIMING);
    }
    initLevel() {
      var a = f[k.LevelManager.current];
      this.scoreboard.setLevel(k.LevelManager.current);
      this.scoreboard.restart();
      this.scoreboard.addTime(a.time);
      this.hurryupMusicTime = a.hurryUpMusicTime || 25;
      this.levelWinner = null;
      for (var b = 0; b < this.players.length; b++) this.players[b].init(a.players[b]);
      for (const c of a.entities) switch (c.type) {
        case "pit":
          this.entities.push(k.Pit.pop(this, c.config));
          break;
        case "penguin":
          this.entities.push(k.Penguin.pop(this, c.config));
          break;
        case "wall":
          this.entities.push(k.Wall.pop(this, c.config));
          break;
        case "fence":
          ({
            cells: a
          } = c.config);
          for (b = 0; b < a.length; b++) for (let e = 0; e < a[b].length; e++) this.entities.push(k.Fence.pop(this, {
            ...a[b][e],
            cells: a,
            row: b,
            column: e,
            x: c.config.x + e,
            y: c.config.y + b
          }));
          break;
        case "table":
          this.entities.push(k.Table.pop(this, c.config));
          break;
        case "present-box":
          if (this.multiplayer || "a" == c.config.playerId) this.multiplayer || (c.config.isMiddle = !1), this.entities.push(k.PresentBox.pop(this, c.config));
          break;
        case "platform":
          this.entities.push(k.Platform.pop(this, c.config));
          break;
        case "ice":
          this.entities.push(k.Ice.pop(this, c.config));
      }
    }
    onFrame(a) {
      if (this.isPlaying) if (this.lastFrame) {
        var b = a - this.lastFrame;
        this.lastFrame = a;
        for (var c of this.entities) c.onFrame(b, a);
        c = !1;
        for (const e of this.players) e.onFrame(b, a), e.isCloseToOtherPlayer && (c = !0);
        c && this.detectPlayerCollision();
        this.scoreboard.onFrame(b / 1E3);
        0 < this.scoreboard.countdown && this.scoreboard.countdown < this.hurryupMusicTime && !this.hurryUpPlayed && (window.santaApp.fire("sound-trigger", "buildandbolt_hurryup"), this.hurryUpPlayed = !0);
      } else this.lastFrame = a;
      this.rafId = window.requestAnimationFrame(this.onFrame.bind(this));
    }
    detectPlayerCollision() {
      if (!this.playerCollision) {
        var a = this.players[0],
          b = this.players[1],
          {
            GRID_DIMENSIONS: c,
            PLAYER_PUSH_FORCE: e,
            PLAYER_BOUNCE_FORCE: g
          } = d,
          h = y.getDistance(a.position, b.position);
        if (1 > h) if (this.playerCollision = !0, setTimeout(() => {
          this.playerCollision = !1;
        }, 100), .5 >= h) a.position.x = Math.min(c.WIDTH - 1, Math.max(0, a.position.x + 1)), b.position.x = Math.min(c.WIDTH - 1, Math.max(0, b.position.x - 1));else {
          var m = a.getSpeed(),
            l = b.getSpeed();
          if (Math.abs(m - l) < g) for (h = 0; h < this.players.length; h++) a = this.players[h], b = a.getDirectionAngle(), a.bump(b, e, -1);else h = m > l ? a : b, a = m < l ? a : b, b = h.getDirectionAngle(), a.bump(b, e, 1), h.bump(b, g, -1);
        }
      }
    }
    resetEntities() {
      k.Board.reset();
      for (const a of this.entities) a.constructor.push(a);
      this.entities = [];
      this.hurryUpPlayed = !1;
    }
    reset() {
      this.resetEntities();
      k.LevelManager.reset(this.updateLevel, this.startCountdown);
      k.ScoreManager.reset();
    }
    goToNextLevel() {
      this.resetEntities();
      k.LevelManager.current < f.length - 1 ? (k.LevelManager.goToNextLevel(this.updateLevel, this.startCountdown), window.santaApp.fire("sound-trigger", "buildandbolt_level_transition")) : (this.gameoverDialog.show(), window.santaApp.fire("sound-trigger", "buildandbolt_win"));
    }
    gameover() {
      "show" !== k.ScoreScreen.state && k.ScoreManager.endLevel();
    }
    pause() {
      this.freezeGame();
    }
    resume() {
      this.gameStarted && this.canResume && this.unfreezeGame();
    }
    restart() {
      this.freezeGame();
      this.reset();
    }
    freezeGame() {
      this.isPlaying = !1;
    }
    unfreezeGame() {
      this.isPlaying || (this.lastFrame = null, this.isPlaying = !0);
    }
  };
  _globalExport = k.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.images('img/player-selection-one.svg', 'img/player-selection-two.svg', 'img/world-edges-bottom.svg', 'img/world-edges-top.svg', 'img/fences/fence_front_left.svg', 'img/fences/fence_front_middle.svg', 'img/fences/fence_front_right.svg', 'img/fences/fence_side_bottom.svg', 'img/fences/fence_side_roundtop.svg', 'img/floor/floor_tile.svg', 'img/ice/shine.svg', 'img/instructions/hand_instruction.svg', 'img/instructions/player01_elf.svg', 'img/instructions/player01_keyboard.svg', 'img/instructions/player02_elf.svg', 'img/instructions/player02_keyboard.svg', 'img/instructions/single_hand_instruction.svg', 'img/penguin/penguin.svg', 'img/pit/pit_bottom_left.svg', 'img/pit/pit_bottom_middle.svg', 'img/pit/pit_bottom_right.svg', 'img/pit/pit_middle_left.svg', 'img/pit/pit_middle_middle.svg', 'img/pit/pit_middle_right.svg', 'img/pit/pit_middle1_left.svg', 'img/pit/pit_middle1_right.svg', 'img/pit/pit_top_left.svg', 'img/pit/pit_top_middle.svg', 'img/pit/pit_top_right.svg', 'img/platform/platform_bottom_middle.png', 'img/platform/platform_bottom_side.png', 'img/platform/platform_middle_side.png', 'img/platform/platform_middle.png', 'img/platform/platform_top_side.png', 'img/players/a/head.svg', 'img/players/a/lose.svg', 'img/players/a/player.svg', 'img/players/a/spawn.svg', 'img/players/a/win.svg', 'img/players/b/head.svg', 'img/players/b/lose.svg', 'img/players/b/player.svg', 'img/players/b/spawn.svg', 'img/players/b/win.svg', 'img/present-boxes/boxes/a.svg', 'img/present-boxes/boxes/b.svg', 'img/present-boxes/front/1.svg', 'img/present-boxes/front/2.svg', 'img/present-boxes/front/3.svg', 'img/present-boxes/presents/a.svg', 'img/present-boxes/presents/b.svg', 'img/present-boxes/side/bottom/1.svg', 'img/present-boxes/side/bottom/2.svg', 'img/present-boxes/side/bottom/3.svg', 'img/present-boxes/side/middle/1.svg', 'img/present-boxes/side/middle/2.svg', 'img/tables/table03_side.svg', 'img/tables/table01_front.svg', 'img/tables/table01_side.svg', 'img/tables/table02_front.svg', 'img/tables/table02_side.svg', 'img/tables/table03_front.svg', 'img/tables/toys/front/car/1.svg', 'img/tables/toys/front/car/2.svg', 'img/tables/toys/front/robot/1.svg', 'img/tables/toys/front/robot/2.svg', 'img/tables/toys/front/robot/3.svg', 'img/tables/toys/front/rocket/1.svg', 'img/tables/toys/front/rocket/2.svg', 'img/tables/toys/front/rocket/3.svg', 'img/tables/toys/front/rocket/4.svg', 'img/tables/toys/front/teddy/1.svg', 'img/tables/toys/front/teddy/2.svg', 'img/tables/toys/front/teddy/3.svg', 'img/tables/toys/side/car/1.svg', 'img/tables/toys/side/car/2.svg', 'img/tables/toys/side/robot/1.svg', 'img/tables/toys/side/robot/2.svg', 'img/tables/toys/side/robot/3.svg', 'img/tables/toys/side/rocket/1.svg', 'img/tables/toys/side/rocket/2.svg', 'img/tables/toys/side/rocket/3.svg', 'img/tables/toys/side/rocket/4.svg', 'img/tables/toys/side/teddy/1.svg', 'img/tables/toys/side/teddy/2.svg', 'img/tables/toys/side/teddy/3.svg', 'img/toys/car/1.svg', 'img/toys/car/2.svg', 'img/toys/car/full.svg', 'img/toys/robot/1.svg', 'img/toys/robot/2.svg', 'img/toys/robot/3.svg', 'img/toys/robot/full.svg', 'img/toys/rocket/1.svg', 'img/toys/rocket/2.svg', 'img/toys/rocket/3.svg', 'img/toys/rocket/4.svg', 'img/toys/rocket/full.svg', 'img/toys/teddy/1.svg', 'img/toys/teddy/2.svg', 'img/toys/teddy/3.svg', 'img/toys/teddy/full.svg', 'img/wall/wall_bottom_middle_1.svg', 'img/wall/wall_bottom_middle_2.svg', 'img/wall/wall_bottom_side.svg', 'img/wall/wall_middle_side.svg', 'img/wall/wall_middle.svg', 'img/wall/wall_top_middle.svg', 'img/wall/wall_top_side.svg');
sceneApi.preload.sounds('buildandbolt_load_sounds');
const msg = {
  'car-multiple': "Bygg {{count}} bilar!",
  'car-single': "Bygg en bil!",
  'robot-multiple': "Bygg {{count}} robotar!",
  'robot-single': "Bygg en robot!",
  'rocket-multiple': "Bygg {{count}} raketer!",
  'rocket-single': "Bygg en raket!",
  'teddy-multiple': "Bygg {{count}} nallebj\xF6rnar!",
  'teddy-single': "Bygg en nallebj\xF6rn!"
};
const game = new Game(document.getElementById('module-buildandbolt'), sceneApi, prepareAnimation, msg);
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  orientation: 'landscape',
  sound: ['buildandbolt_tutorial_start']
});
sceneApi.ready(async () => {
  game.showGui();
});