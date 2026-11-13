import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    Constants: {
      FAN_STATE_LOW: 0,
      FAN_STATE_MED: 1,
      FAN_STATE_HIGH: 2,
      FAN_SPEED_CONFIGS: [{
        leverAngle: -35,
        indicatorOffset: 15,
        threadClass: "thread--low",
        parachuteClass: "parachute-wrap--low",
        windBalloonClass: "wind-balloon--low",
        soundValue: 0
      }, {
        leverAngle: 0,
        indicatorOffset: 40,
        threadClass: "thread--med",
        parachuteClass: "parachute-wrap--med",
        windBalloonClass: "wind-balloon--med",
        soundValue: .5
      }, {
        leverAngle: 35,
        indicatorOffset: 75,
        threadClass: "thread--high",
        parachuteClass: "parachute-wrap--high",
        windBalloonClass: "wind-balloon--high",
        soundValue: 1
      }],
      FAN_SPEED_CHANGE_DELAY_MS: 500,
      SNOWBLOWER_SWITCH_CLASSNAMES: ["snowblower-switch--low", "snowblower-switch--med", "snowblower-switch--high"],
      RUDOLF_NORMAL_CLASSNAME: "rudolf-wrap--normal",
      RUDOLF_SERIOUS_CLASSNAME: "rudolf-wrap--serious",
      PARACHUTE_ANIMATION_DURATION_MS: 600,
      WIND_BALLOON_ANIMATION_DURATION_MS: 500,
      SCREEN_BACKGROUND_WIDTH: 1870,
      SNOW_CANVAS_WIDTH: 615,
      SNOW_CANVAS_HEIGHT: 490,
      SNOWBLOWER_STATE_OFF: 0,
      SNOWBLOWER_STATE_MED: 1,
      SNOWBLOWER_STATE_HIGH: 2
    }
  };
  b.shared = {};
  b.shared.utils = function () {
    class a {
      constructor(a) {
        this.value = a;
      }
      change(a) {
        const c = this.value !== a;
        this.value = a;
        return c;
      }
      moveToTarget(a, d) {
        let c = +this.value;
        if (this.value !== c) throw new TypeError("SmartValue does not contain a number");
        c < a ? c = Math.min(a, c + d) : c > a && (c = Math.max(a, c - d));
        this.value = c;
        return this;
      }
    }
    return {
      animWithClass: function (a, d, e) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(d);
          const c = () => {
            a.classList.remove(d);
            a.removeEventListener("animationend", c);
            a.removeEventListener("transitionend", c);
            e && (e(), e = null);
          };
          a.addEventListener("animationend", c);
          a.addEventListener("transitionend", c);
        });
      },
      unwrapElement: function (a) {
        return a instanceof Node ? a : a[0] || null;
      },
      computedTransform: function (a) {
        const c = window.getComputedStyle(a);
        let e;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = c.getPropertyValue(a + "transform");
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
        const c = a.finished;
        c && c.then ? c.then(d) : a.addEventListener("finish", d, !1);
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
  b.Animations = function () {
    this.fanStateMap_ = {};
    this.fanStateMap_[b.Constants.FAN_STATE_LOW] = {
      beginAngle: -25,
      endAngle: -35,
      backgroundDuration: 12
    };
    this.fanStateMap_[b.Constants.FAN_STATE_MED] = {
      beginAngle: -10,
      endAngle: -20,
      backgroundDuration: 9
    };
    this.fanStateMap_[b.Constants.FAN_STATE_HIGH] = {
      beginAngle: 5,
      endAngle: -5,
      backgroundDuration: 4
    };
  };
  b.Animations.prototype.getParachuteAnimation = function (a, c, d) {
    var e = b.shared.utils.computedTransform(a).rotate,
      f = this.fanStateMap_[c].beginAngle;
    c = this.fanStateMap_[c].endAngle;
    e = new KeyframeEffect(a, [{
      transform: "rotateZ(" + e + "deg)"
    }, {
      transform: "rotateZ(" + f + "deg)"
    }], 500 * Math.abs(f - e) / 20);
    a = new KeyframeEffect(a, [{
      transform: "rotateZ(" + f + "deg)"
    }, {
      transform: "rotateZ(" + c + "deg)"
    }], {
      direction: "alternate",
      duration: d,
      easing: "ease-in-out",
      iterations: Infinity
    });
    return new SequenceEffect([e, a]);
  };
  b.Animations.prototype.getBackgroundAnimation = function (a, c) {
    var d = b.shared.utils.computedTransform(a).x,
      e = -b.Constants.SCREEN_BACKGROUND_WIDTH;
    c = this.fanStateMap_[c].backgroundDuration;
    d = new KeyframeEffect(a, [{
      transform: "translateX(" + d + "px)"
    }, {
      transform: "translateX(" + e + "px)"
    }], (e - d) / e * c * 1E3);
    a = new KeyframeEffect(a, [{
      transform: "translateX(0)"
    }, {
      transform: "translateX(" + e + "px)"
    }], {
      duration: 1E3 * c,
      iterations: Infinity
    });
    return new SequenceEffect([d, a]);
  };
  b.FanStateManager = function (a, c) {
    this.stateCycle_ = [b.Constants.FAN_STATE_LOW, b.Constants.FAN_STATE_MED, b.Constants.FAN_STATE_HIGH];
    this.stateConfigMap_ = {};
    this.stateConfigMap_[b.Constants.FAN_STATE_LOW] = b.Constants.FAN_SPEED_CONFIGS[0];
    this.stateConfigMap_[b.Constants.FAN_STATE_MED] = b.Constants.FAN_SPEED_CONFIGS[1];
    this.stateConfigMap_[b.Constants.FAN_STATE_HIGH] = b.Constants.FAN_SPEED_CONFIGS[2];
    this.currentStateIndex_ = 0;
    this.stateChangeDelta_ = 1;
    this.rudolf_ = c;
    this.animations_ = new b.Animations();
    c = document.timeline.play(new SequenceEffect([]));
    this.windBalloonElem_ = a.querySelector(".wind-balloon");
    this.windBalloonAnimation_ = c;
    this.screenElem_ = a.querySelector(".screen");
    this.screenAnimation_ = c;
  };
  b.FanStateManager.prototype.init = function () {
    this.updateAnimations_();
  };
  b.FanStateManager.prototype.destroy = function () {
    this.stopAnimations_();
  };
  b.FanStateManager.prototype.cycleState = function () {
    var a = this.currentStateIndex_ + this.stateChangeDelta_;
    if (0 > a || a >= this.stateCycle_.length) this.stateChangeDelta_ *= -1, a = this.currentStateIndex_ + this.stateChangeDelta_;
    this.currentStateIndex_ = a;
    window.setTimeout(function () {
      this.updateScene_();
    }.bind(this), b.Constants.FAN_SPEED_CHANGE_DELAY_MS);
    window.santaApp.fire("sound-trigger", {
      name: "windtunnel_fan_speed",
      args: [this.getConfig().soundValue]
    });
  };
  b.FanStateManager.prototype.getState = function () {
    return this.stateCycle_[this.currentStateIndex_];
  };
  b.FanStateManager.prototype.getConfig = function () {
    return this.stateConfigMap_[this.stateCycle_[this.currentStateIndex_]];
  };
  b.FanStateManager.prototype.getLeverAngle = function () {
    return this.getConfig().leverAngle;
  };
  b.FanStateManager.prototype.getIndicatorOffset = function () {
    return this.getConfig().indicatorOffset;
  };
  b.FanStateManager.prototype.getThreadsClass = function () {
    return this.getConfig().threadClass;
  };
  b.FanStateManager.prototype.updateScene_ = function () {
    this.rudolf_.onFanStateChanged(this.getState());
    this.updateAnimations_();
  };
  b.FanStateManager.prototype.updateAnimations_ = function () {
    const a = this.animations_.getParachuteAnimation(this.windBalloonElem_, this.getState(), b.Constants.WIND_BALLOON_ANIMATION_DURATION_MS),
      c = this.animations_.getBackgroundAnimation(this.screenElem_, this.getState());
    this.stopAnimations_();
    this.windBalloonAnimation = document.timeline.play(a);
    this.screenAnimation = document.timeline.play(c);
  };
  b.FanStateManager.prototype.stopAnimations_ = function () {
    this.windBalloonAnimation_.cancel();
    this.screenAnimation_.cancel();
  };
  b.Fan = function (a, c) {
    this.context_ = $(a);
    this.threadsElem = this.context_.find(".threads");
    this.indicatorElem = this.context_.find(".indicator");
    this.leverFrameElem = this.context_.find(".lever-wrap");
    this.leverElem = this.context_.find(".lever");
    this.fanStateManager_ = c;
    this.onLeverClicked_ = this.onLeverClicked_.bind(this);
  };
  b.Fan.prototype.init = function () {
    this.addEventListeners_();
  };
  b.Fan.prototype.destroy = function () {
    this.removeEventListeners_();
  };
  b.Fan.prototype.addEventListeners_ = function () {
    this.leverFrameElem.on("click", this.onLeverClicked_);
  };
  b.Fan.prototype.removeEventListeners_ = function () {
    this.leverFrameElem.off("click", this.onLeverClicked_);
  };
  b.Fan.prototype.onLeverClicked_ = function () {
    this.fanStateManager_.cycleState();
    this.updateLeverAngle_();
    this.updateIndicatorPosition_();
    window.setTimeout(function () {
      this.updateThreads_();
    }.bind(this), b.Constants.FAN_SPEED_CHANGE_DELAY_MS);
  };
  b.Fan.prototype.updateLeverAngle_ = function () {
    var a = this.fanStateManager_.getLeverAngle();
    this.leverElem.css("transform", "rotateZ(" + a + "deg)");
  };
  b.Fan.prototype.updateIndicatorPosition_ = function () {
    var a = this.fanStateManager_.getIndicatorOffset();
    this.indicatorElem.css("transform", "translateX(" + a + "px)");
  };
  b.Fan.prototype.updateThreads_ = function () {
    var a = this.fanStateManager_.getThreadsClass();
    this.threadsElem.find(".thread").removeClass("thread--low thread--med thread--high").addClass("thread " + a);
  };
  b.Rudolf = function (a) {
    this.context_ = $(a);
    this.light_ = this.context_.find(".rudolf-light");
    this.rudolf_ = this.context_.find(".rudolf");
    this.parachuteContainer_ = this.context_.find(".parachute-wrap");
    this.parachuteElem_ = this.parachuteContainer_.find(".parachute");
    this.parachuteShadowElem_ = this.parachuteContainer_.find(".parachute-shadow");
    this.fanState_ = b.Constants.FAN_STATE_LOW;
    this.animations_ = new b.Animations();
    this.parachuteAnimation_ = new SequenceEffect([]);
    this.parachuteShadowAnimation_ = new SequenceEffect([]);
    this.animationPlayer_ = document.timeline.play(this.parachuteAnimation_);
    this.onRudolfClicked_ = this.onRudolfClicked_.bind(this);
  };
  b.Rudolf.prototype.init = function () {
    this.addEventListeners_();
    this.updateAnimations_();
  };
  b.Rudolf.prototype.destroy = function () {
    this.removeEventListeners_();
    this.stopAnimations_();
  };
  b.Rudolf.prototype.onFanStateChanged = function (a) {
    this.fanState_ = a;
    a == b.Constants.FAN_STATE_HIGH ? this.context_.removeClass(b.Constants.RUDOLF_NORMAL_CLASSNAME).addClass(b.Constants.RUDOLF_SERIOUS_CLASSNAME) : this.context_.hasClass(b.Constants.RUDOLF_SERIOUS_CLASSNAME) && this.context_.removeClass(b.Constants.RUDOLF_SERIOUS_CLASSNAME).addClass(b.Constants.RUDOLF_NORMAL_CLASSNAME);
    this.updateAnimations_();
  };
  b.Rudolf.prototype.addEventListeners_ = function () {
    this.rudolf_.on("click", this.onRudolfClicked_);
  };
  b.Rudolf.prototype.removeEventListeners_ = function () {
    this.rudolf_.off("click", this.onRudolfClicked_);
  };
  b.Rudolf.prototype.onRudolfClicked_ = function () {
    this.light_.toggleClass("litup");
  };
  b.Rudolf.prototype.updateAnimations_ = function () {
    const a = this.animations_.getParachuteAnimation(this.parachuteElem_[0], this.fanState_, b.Constants.PARACHUTE_ANIMATION_DURATION_MS),
      c = this.animations_.getParachuteAnimation(this.parachuteShadowElem_[0], this.fanState_, b.Constants.PARACHUTE_ANIMATION_DURATION_MS);
    this.stopAnimations_();
    this.animation_ = document.timeline.play(new GroupEffect([a, c]));
  };
  b.Rudolf.prototype.stopAnimations_ = function () {
    this.animation_ && this.animation_.cancel();
  };
  b.Snow = function (a, c, d) {
    this.ctx_ = a.getContext("2d");
    this.width_ = a.width = b.Constants.SNOW_CANVAS_WIDTH;
    this.height_ = a.height = b.Constants.SNOW_CANVAS_HEIGHT;
    this.gravity_ = .15;
    this.windForceMap_ = {};
    this.windForceMap_[b.Constants.FAN_STATE_LOW] = -.1;
    this.windForceMap_[b.Constants.FAN_STATE_MED] = -.15;
    this.windForceMap_[b.Constants.FAN_STATE_HIGH] = -.2;
    this.fanState_ = d;
    this.snowblowerStrengthMap_ = {};
    this.snowblowerStrengthMap_[b.Constants.SNOWBLOWER_STATE_OFF] = 0;
    this.snowblowerStrengthMap_[b.Constants.SNOWBLOWER_STATE_MED] = .3;
    this.snowblowerStrengthMap_[b.Constants.SNOWBLOWER_STATE_HIGH] = .9;
    this.snowblower_ = c;
    this.snowInitialVelocityX_ = -1;
    this.snowInitialVelocityY_ = -5;
    this.snowInitialX_ = 580;
    this.snowInitialY_ = 280;
    this.snowFadeAreaSize_ = 100;
    this.snowMaxAge_ = 250;
    this.snowflakes_ = [];
    this.onFrame_ = this.onFrame_.bind(this);
  };
  b.Snow.prototype.init = function () {
    this.requestId_ = window.requestAnimationFrame(this.onFrame_);
  };
  b.Snow.prototype.destroy = function () {
    window.cancelAnimationFrame(this.requestId_);
  };
  b.Snow.prototype.onFrame_ = function () {
    this.update_();
    this.requestId_ = window.requestAnimationFrame(this.onFrame_);
  };
  b.Snow.prototype.update_ = function () {
    Math.random() < this.snowblowerStrengthMap_[this.snowblower_.getState()] && this.snowflakes_.push({
      x: this.snowInitialX_,
      y: this.snowInitialY_,
      size: 2 + 5 * Math.random(),
      age: 0,
      velocityX: this.snowInitialVelocityX_ + 6 * Math.random() - 3,
      velocityY: this.snowInitialVelocityY_ + 6 * Math.random() - 4
    });
    this.ctx_.clearRect(0, 0, this.width_, this.height_);
    for (var a = 0, c = this.snowflakes_.length - 1; 0 <= c; c--) {
      var d = this.snowflakes_[c];
      d.age > this.snowMaxAge_ ? a++ : (d.age++, d.velocityX += this.windForceMap_[this.fanState_.getState()], d.velocityY += this.gravity_, d.x += d.velocityX, d.y += d.velocityY, this.drawSnowflake_(d));
    }
    this.snowflakes_ = this.snowflakes_.slice(a);
  };
  b.Snow.prototype.drawSnowflake_ = function (a) {
    var c = 1;
    a.x < this.snowFadeAreaSize_ && (c = 1 - (this.snowFadeAreaSize_ - a.x) / this.snowFadeAreaSize_);
    a.y > this.height_ - this.snowFadeAreaSize_ && (c = Math.min(c, (this.height_ - a.y) / this.snowFadeAreaSize_));
    this.ctx_.fillStyle = "rgba(255, 255, 255, " + c + ")";
    this.ctx_.beginPath();
    this.ctx_.arc(a.x, a.y, a.size, 0, 2 * Math.PI, !0);
    this.ctx_.closePath();
    this.ctx_.fill();
  };
  b.Snowblower = function (a) {
    this.context_ = $(a);
    this.switchElem_ = this.context_.find(".snowblower-switch");
    this.stateCycle_ = [b.Constants.SNOWBLOWER_STATE_OFF, b.Constants.SNOWBLOWER_STATE_MED, b.Constants.SNOWBLOWER_STATE_HIGH];
    this.stateClassMap_ = {};
    this.stateClassMap_[b.Constants.SNOWBLOWER_STATE_OFF] = b.Constants.SNOWBLOWER_SWITCH_CLASSNAMES[0];
    this.stateClassMap_[b.Constants.SNOWBLOWER_STATE_MED] = b.Constants.SNOWBLOWER_SWITCH_CLASSNAMES[1];
    this.stateClassMap_[b.Constants.SNOWBLOWER_STATE_HIGH] = b.Constants.SNOWBLOWER_SWITCH_CLASSNAMES[2];
    this.stateChangeDelta_ = this.stateIndex_ = 1;
    this.onSwitchClicked_ = this.onSwitchClicked_.bind(this);
  };
  b.Snowblower.prototype.init = function () {
    this.addEventListeners_();
  };
  b.Snowblower.prototype.destroy = function () {
    this.removeEventListeners_();
  };
  b.Snowblower.prototype.addEventListeners_ = function () {
    this.switchElem_.on("click", this.onSwitchClicked_);
  };
  b.Snowblower.prototype.removeEventListeners_ = function () {
    this.switchElem_.off("click", this.onSwitchClicked_);
  };
  b.Snowblower.prototype.getState = function () {
    return this.stateCycle_[this.stateIndex_];
  };
  b.Snowblower.prototype.onSwitchClicked_ = function () {
    var a = this.stateIndex_ + this.stateChangeDelta_;
    if (0 > a || a >= this.stateCycle_.length) this.stateChangeDelta_ *= -1, a = this.stateIndex_ + this.stateChangeDelta_;
    this.stateIndex_ = a;
    a = Object.keys(this.stateClassMap_).map(a => this.stateClassMap_[a]).join(" ");
    this.switchElem_.removeClass(a);
    this.switchElem_.addClass(this.stateClassMap_[this.getState()]);
    window.santaApp.fire("sound-trigger", "windtunnel_lever_snow");
  };
  b.Game = function (a) {
    this.rudolf = new b.Rudolf(a.querySelector(".rudolf-wrap"));
    this.snowblower = new b.Snowblower(a.querySelector(".snowblower"));
    this.fanStateManager = new b.FanStateManager(a, this.rudolf);
    this.fan = new b.Fan(a.querySelector(".fan-base"), this.fanStateManager);
    this.snow = new b.Snow(a.querySelector(".snow-canvas"), this.snowblower, this.fanStateManager);
    this.init_();
  };
  b.Game.prototype.init_ = function () {
    this.fan.init();
    this.fanStateManager.init();
    this.rudolf.init();
    this.snowblower.init();
    this.snow.init();
  };
  b.Game.prototype.destroy = function () {
    this.fan.destroy();
    this.fanStateManager.destroy();
    this.rudolf.destroy();
    this.snowblower.destroy();
    this.snow.destroy();
  };
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('windtunnel_load_sounds', 10);
sceneApi.preload.images('img/logo.svg', 'img/base-back.png', 'img/cog-big.png', 'img/cog-small.png', 'img/console-blibs.png', 'img/console-graph.png', 'img/console-lights.png', 'img/console-meters.png', 'img/console-tape.png', 'img/consoles.png', 'img/elfs.png', 'img/fan-base.png', 'img/fan-controller-shadow.png', 'img/fan-controller.png', 'img/fan-indicator.png', 'img/fan-lever-base.png', 'img/fan-lever-handle.png', 'img/fan-shadow.png', 'img/fan-threads-high.png', 'img/fan-threads-low.png', 'img/fan-threads-med.png', 'img/lift-shadow.png', 'img/lift.png', 'img/light.png', 'img/machine-base.png', 'img/parachute-shadow.png', 'img/parachute.png', 'img/rudolf-nose-light.png', 'img/rudolf-serious.png', 'img/rudolf-serious-shadow.png', 'img/rudolf-shadow.png', 'img/rudolf.png', 'img/screen.png', 'img/snow-layer1.png', 'img/snow-layer2.png', 'img/snow-layer3.png', 'img/snow-layer4.png', 'img/snowblower-switch.png', 'img/snowblower.png', 'img/wind-balloon.png', 'img/wires.png');
new Game(document.getElementById('module-windtunnel'));
sceneApi.config({
  sound: ['windtunnel_start', 'music_start_scene']
});