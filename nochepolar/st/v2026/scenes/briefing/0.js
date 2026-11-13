import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = {
    Constants: {
      SLIDE_SIZE: 393,
      RANDOM_DELAY_POOL_MS: [3504, 7008, 10512, 14016, 17520, 21024],
      LAST_SLIDE_INDEX: 3,
      ELEVATOR_UNTIL_DOOR_OPENS_MS: 2E3,
      ELEVATOR_DOOR_OPENED_MS: 2200,
      ELEVATOR_UNTIL_DOOR_CLOSES_MS: 5E3,
      ELEVATOR_ANIMATION_DURATION_MS: 8E3,
      SCREEN_SLIDE_DURATION_MS: 2E3,
      SCREEN_SLIDE_CYCLE_MS: 7E3,
      SLEEPING_ELVES_LIMIT: 3,
      CLASS_INCOMING_ELEVATOR: "elevator--incoming",
      CLASS_OPENED_ELEVATOR: "elevator--opened",
      CLASS_ACTIVE_BUTTON: "elevator__panel__button--active",
      CLASS_ACTIVE_CHARACTER: "elevator__character--active",
      LAST_SET_INDEX: 3,
      NUM_OF_CHARACTERS: 3
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
  b.Clock = function (a) {
    this.context_ = b.shared.utils.unwrapElement(a);
    this.onClockClick_ = this.onClockClick_.bind(this);
    this.secondsPointer_ = this.context_.querySelector(".js-clock-pointer-seconds");
    this.minutesPointer_ = this.context_.querySelector(".js-clock-pointer-minutes");
    this.hourPointer_ = this.context_.querySelector(".js-clock-pointer-hour");
    this.secondsPlayer_ = this.secondsPointer_.animate([{
      transform: "rotate(0deg)"
    }, {
      transform: "rotate(360deg)"
    }], {
      duration: 6E4,
      iterations: Infinity
    });
  };
  b.Clock.prototype.init = function () {
    this.context_.addEventListener("click", this.onClockClick_);
  };
  b.Clock.prototype.destroy = function () {
    this.context_.removeEventListener("click", this.onClockClick_);
    this.secondsPlayer_.cancel();
  };
  b.Clock.prototype.spinPointers_ = function () {
    var a = (this.secondsPlayer_.currentTime + 1250) / 6E4 * 360 + 360,
      c = b.shared.utils.computedTransform(this.secondsPointer_);
    this.secondsPointer_.animate([{
      transform: "rotate(" + c.rotate + "deg)"
    }, {
      transform: `rotate(${a}deg)`
    }], {
      duration: 1250,
      easing: "ease-out"
    });
    a = {
      duration: 500,
      easing: "ease-out"
    };
    c = b.shared.utils.computedTransform(this.hourPointer_);
    var d = "rotate(" + (c.rotate + 30) + "deg)";
    this.hourPointer_.animate([{
      transform: "rotate(" + c.rotate + "deg)"
    }, {
      transform: d
    }], a);
    this.hourPointer_.style.transform = d;
    c = b.shared.utils.computedTransform(this.minutesPointer_);
    d = "rotate(" + (c.rotate + 390) + "deg)";
    this.minutesPointer_.animate([{
      transform: "rotate(" + c.rotate + "deg)"
    }, {
      transform: d
    }], a);
    this.minutesPointer_.style.transform = d;
  };
  b.Clock.prototype.onClockClick_ = function () {
    this.spinPointers_();
  };
  b.Elevator = function (a) {
    this.$context_ = $(a);
    this.context_ = this.$context_[0];
    this.$button = this.$context_.find(".js-elevator-button");
    this.$characters = this.$context_.find(".js-elevator-character");
    this.$penguin = this.$characters.filter(".js-elevator-character-penguin");
    this.$deer = this.$characters.filter(".js-elevator-character-deer");
    this.$snowman = this.$characters.filter(".js-elevator-character-snowman");
    this.$activeButton = null;
    this.isBusy = !1;
    this.showCount = 0;
    this.charactersSet = {
      0: [this.$penguin],
      1: [this.$penguin, this.$snowman],
      2: [this.$penguin, this.$snowman, this.$deer]
    };
    this.randomCharactersSet = {
      0: [this.$penguin, this.$snowman],
      1: [this.$penguin, this.$deer],
      2: [this.$penguin, this.$snowman, this.$deer],
      3: [this.$deer, this.$snowman]
    };
    this.onButtonClick_ = this.onButtonClick_.bind(this);
  };
  b.Elevator.prototype.init = function () {
    this.addEventListeners_();
  };
  b.Elevator.prototype.destroy = function () {
    this.removeEventListeners_();
    this.isBusy = !1;
  };
  b.Elevator.prototype.addEventListeners_ = function () {
    this.$button.on("click", this.onButtonClick_);
  };
  b.Elevator.prototype.removeEventListeners_ = function () {
    this.$button.off("click", this.onButtonClick_);
  };
  b.Elevator.prototype.onButtonClick_ = function (a) {
    this.isBusy || (this.isBusy = !0, this.$activeButton = $(a.currentTarget), this.$activeButton.addClass(b.Constants.CLASS_ACTIVE_BUTTON), this.callElevator_(), window.santaApp.fire("sound-trigger", "briefing_elevator_button"));
  };
  b.Elevator.prototype.showCharacters_ = function () {
    this.getCharacters_().forEach(function (a) {
      a.addClass(b.Constants.CLASS_ACTIVE_CHARACTER);
    });
  };
  b.Elevator.prototype.getCharacters_ = function () {
    if (this.showCount < b.Constants.NUM_OF_CHARACTERS) {
      var a = this.charactersSet[this.showCount];
      this.showCount++;
    } else a = this.randomCharactersSet[Math.floor(Math.random() * (b.Constants.LAST_SET_INDEX - 0 + 1)) + 0];
    return a;
  };
  b.Elevator.prototype.closeElevator_ = function () {
    this.$context_.removeClass(b.Constants.CLASS_INCOMING_ELEVATOR).removeClass(b.Constants.CLASS_OPENED_ELEVATOR);
    this.$activeButton.removeClass(b.Constants.CLASS_ACTIVE_BUTTON);
    this.$characters.removeClass(b.Constants.CLASS_ACTIVE_CHARACTER);
    this.isBusy = !1;
  };
  b.Elevator.prototype.activateCharacters_ = function () {
    this.$context_.addClass(b.Constants.CLASS_OPENED_ELEVATOR);
  };
  b.Elevator.prototype.callElevator_ = function () {
    this.showCharacters_();
    this.$context_.addClass(b.Constants.CLASS_INCOMING_ELEVATOR);
    window.setTimeout(function () {
      window.santaApp.fire("sound-trigger", "briefing_elevator_open");
    }, b.Constants.ELEVATOR_UNTIL_DOOR_OPENS_MS);
    window.setTimeout(this.activateCharacters_.bind(this), b.Constants.ELEVATOR_DOOR_OPENED_MS);
    window.setTimeout(function () {
      window.santaApp.fire("sound-trigger", "briefing_elevator_close");
    }, b.Constants.ELEVATOR_UNTIL_DOOR_CLOSES_MS);
    window.setTimeout(this.closeElevator_.bind(this), b.Constants.ELEVATOR_ANIMATION_DURATION_MS);
  };
  b.Projection = function (a) {
    this.$context_ = $(a);
    this.context_ = this.$context_[0];
    this.currentSlide_ = 0;
    this.previousSlide_ = null;
    this.movingWaterTimer = this.slideshowTimer_ = this.slidingTimer_ = -1;
    this.CLASS_TOGGLED = "is-toggled";
    this.CLASS_SLIDE_UP = "run-slide-up";
    this.CLASS_SHOWERING = "is-showering";
    this.isAnimating = this.isToggled = !1;
    this.$handle = this.$context_.find(".js-projector-handle");
    this.$projectionGroup_ = this.$context_.find(".js-screen-group");
    this.$projectorBeamSquare = this.$context_.find(".js-projector-beam-square");
    this.$arrowLeft = this.$context_.find(".js-arrow-left");
    this.$arrowRight = this.$context_.find(".js-arrow-right");
    this.$projection = this.$context_.find(".js-projection");
    this.$clickHandler = this.$context_.find(".js-screen-click-handler");
    this.$waterDashHolder = this.$context_.find(".js-shower-water");
    this.prevSlide_ = this.prevSlide_.bind(this);
    this.nextSlide_ = this.nextSlide_.bind(this);
    this.onContextClick_ = this.onContextClick_.bind(this);
    this.projectionPlayer_ = function (a) {
      a = a.animate([{
        transform: "translateY(0px)"
      }, {
        transform: "translateY(-273px)"
      }], {
        duration: 1E3,
        easing: "ease-in-out",
        fill: "forwards"
      });
      a.playbackRate = 0;
      return a;
    }(this.$projectionGroup_.get(0));
    b.shared.utils.onWebAnimationFinished(this.projectionPlayer_, function () {
      this.isAnimating = !1;
    }.bind(this));
    this.waterDashPlayer_ = function (a) {
      a = a.animate([{
        strokeDashoffset: "-100px"
      }, {
        strokeDashoffset: "-200px"
      }], {
        duration: 1E3,
        iterations: Infinity
      });
      a.pause();
      return a;
    }(this.$waterDashHolder.get(0));
  };
  b.Projection.prototype.init = function () {
    this.addEventListeners_();
    this.startCycle_();
  };
  b.Projection.prototype.destroy = function () {
    this.removeEventListeners_();
    this.stopCycle_();
    this.waterDashPlayer_.cancel();
    this.projectionPlayer_.cancel();
  };
  b.Projection.prototype.addEventListeners_ = function () {
    this.$arrowLeft.on("click", this.prevSlide_);
    this.$arrowRight.on("click", this.nextSlide_);
    this.$clickHandler.on("click", this.onContextClick_);
  };
  b.Projection.prototype.removeEventListeners_ = function () {
    this.$arrowLeft.off("click", this.prevSlide_);
    this.$arrowRight.off("click", this.nextSlide_);
    this.$clickHandler.off("click", this.onContextClick_);
  };
  b.Projection.prototype.onContextClick_ = function () {
    this.isAnimating || (this.isAnimating = !0, window.clearTimeout(this.slidingTimer_), this.isToggled ? (this.isToggled = !1, this.projectionPlayer_.playbackRate = -1, window.santaApp.fire("sound-trigger", "briefing_screen_down"), this.startCycle_(), this.slidingTimer_ = window.setTimeout(function () {
      this.waterDashPlayer_.pause();
      this.$context_.removeClass(this.CLASS_SHOWERING);
    }.bind(this), b.Constants.SCREEN_SLIDE_DURATION_MS)) : (this.isToggled = !0, this.projectionPlayer_.playbackRate = 1, window.santaApp.fire("sound-trigger", "briefing_screen_up"), this.waterDashPlayer_.play(), this.stopCycle_(), this.slidingTimer_ = window.setTimeout(function () {
      this.$context_.addClass(this.CLASS_SHOWERING);
    }.bind(this), b.Constants.SCREEN_SLIDE_DURATION_MS / 2.5)));
  };
  b.Projection.prototype.changeSlide_ = function () {
    var a = this.currentSlide_ * b.Constants.SLIDE_SIZE * -1;
    window.santaApp.fire("sound-trigger", "briefing_change_slide");
    this.$projection.css({
      transform: "translateX(" + a + "px)"
    });
  };
  b.Projection.prototype.prevSlide_ = function () {
    this.isToggled || (window.clearInterval(this.slideshowTimer_), this.currentSlide_ = Math.max(this.currentSlide_ - 1, 0), this.previousSlide_ !== this.currentSlide_ && (this.previousSlide_ = this.currentSlide_, this.changeSlide_()), this.startCycle_());
  };
  b.Projection.prototype.nextSlide_ = function () {
    this.isToggled || (window.clearInterval(this.slideshowTimer_), this.currentSlide_++, this.currentSlide_ > b.Constants.LAST_SLIDE_INDEX && (this.currentSlide_ = 0), this.previousSlide_ !== this.currentSlide_ && (this.previousSlide_ = this.currentSlide_, this.changeSlide_()), this.startCycle_());
  };
  b.Projection.prototype.stopCycle_ = function () {
    window.clearInterval(this.slideshowTimer_);
  };
  b.Projection.prototype.startCycle_ = function () {
    window.clearInterval(this.slideshowTimer_);
    this.slideshowTimer_ = window.setInterval(this.nextSlide_.bind(this), b.Constants.SCREEN_SLIDE_CYCLE_MS);
  };
  b.Sleepy = function (a, c) {
    this.$context_ = $(a);
    this.context_ = this.$context_[0];
    this.$head = this.$context_.find(".js-spectator-head");
    this.$headVerticalStep1 = this.$context_.find(".js-spectator-head-vertical-1");
    this.$headVerticalStep2 = this.$context_.find(".js-spectator-head-vertical-2");
    this.$headVerticalFinal = this.$context_.find(".js-spectator-head-vertical-3");
    this.$letters = this.$context_.find(".js-letters");
    this.CSS_SLEEPING_CLASS = "is-sleeping";
    this.CSS_BOUNCING_CLASS = "is-bouncing";
    this.isSleeping = !1;
    this.scheduleSleepingTimer_ = this.bouncingKeyframesTimer_ = this.sleepingKeyframesTimer_ = this.sleepingTimer_ = -1;
    this.player_ = null;
    this.sleepingVertically = !0;
    this.sleepyController = c;
    this.onSleepyClick_ = this.onSleepyClick_.bind(this);
  };
  b.Sleepy.prototype.init = function () {
    this.scheduleSleep_();
    this.addEventListeners_();
  };
  b.Sleepy.prototype.destroy = function () {
    this.removeEventListeners_();
    window.clearTimeout(this.sleepingKeyframesTimer_);
    window.clearTimeout(this.sleepingTimer_);
    window.clearTimeout(this.bouncingKeyframesTimer_);
    window.clearTimeout(this.scheduleSleepingTimer_);
    this.isSleeping = !1;
    this.player_ && this.player_.cancel();
  };
  b.Sleepy.prototype.addEventListeners_ = function () {
    this.$context_.on("click", this.onSleepyClick_);
  };
  b.Sleepy.prototype.removeEventListeners_ = function () {
    this.$context_.off("click", this.onSleepyClick_);
  };
  b.Sleepy.prototype.scheduleSleep_ = function () {
    var a = 15E3 * Math.random() + 3E3;
    this.sleepingTimer_ = window.setTimeout(this.tryToSleep_.bind(this), a);
  };
  b.Sleepy.prototype.tryToSleep_ = function () {
    !this.sleepyController.canSleep() || this.player_ ? this.scheduleSleep_() : (this.chooseSleepingMode_(), this.sleepingVertically ? this.tweenRotateYHead_() : this.tweenRotateZHead_(), this.sleepingKeyframesTimer_ = window.setTimeout(this.startSleepingKeyframes_.bind(this), 50), this.isSleeping = !0, this.sleepyController.addSleepy(), window.santaApp.fire("sound-trigger", "briefing_snore"));
  };
  b.Sleepy.prototype.wakeUp_ = function () {
    this.stopSleepingKeyframes_();
    this.player_ && (this.player_.playbackRate *= -2, this.player_.play(), b.shared.utils.onWebAnimationFinished(this.player_, () => {
      this.player_.cancel();
      this.player_ = null;
    }));
    window.santaApp.fire("sound-trigger", "briefing_wakeup");
    window.clearTimeout(this.sleepingKeyframesTimer_);
    window.clearTimeout(this.sleepingTimer_);
    window.clearTimeout(this.bouncingKeyframesTimer_);
    this.isSleeping = !1;
    this.sleepyController.subtractSleepy();
    this.scheduleSleepingTimer_ = window.setTimeout(this.scheduleSleep_.bind(this), 3E3);
  };
  b.Sleepy.prototype.chooseSleepingMode_ = function () {
    this.sleepingVertically = .5 < Math.random();
  };
  b.Sleepy.prototype.startSleepingKeyframes_ = function () {
    this.$letters.addClass(this.CSS_SLEEPING_CLASS);
    this.bouncingKeyframesTimer_ = window.setTimeout(function () {
      this.sleepingVertically ? this.$headVerticalFinal.addClass(this.CSS_BOUNCING_CLASS) : this.$head.addClass(this.CSS_BOUNCING_CLASS);
    }.bind(this), 3E3);
  };
  b.Sleepy.prototype.stopSleepingKeyframes_ = function () {
    this.$letters.removeClass(this.CSS_SLEEPING_CLASS);
    this.$headVerticalFinal.removeClass(this.CSS_BOUNCING_CLASS);
    this.$head.removeClass(this.CSS_BOUNCING_CLASS);
  };
  b.Sleepy.prototype.tweenRotateYHead_ = function () {
    const a = [this.$head[0], this.$headVerticalStep1[0], this.$headVerticalStep2[0], this.$headVerticalFinal[0]],
      c = new KeyframeEffect(document.body, [], 1E3);
    c.onsample = c => {
      const d = a[null === c && this.player_ && this.player_.currentTime ? 3 : Math.min(a.length - 1, Math.floor(c / .25))];
      a.forEach(a => {
        a.style.visibility = a === d ? "visible" : "hidden";
      });
    };
    if (this.player_) throw Error("still has player");
    this.player_ = document.timeline.play(c);
  };
  b.Sleepy.prototype.tweenRotateZHead_ = function () {
    var a = this.$head[0];
    if (this.player_) throw Error("still has player");
    this.player_ = a.animate([{
      transform: "rotate(0deg)",
      easing: "ease-out"
    }, {
      transform: "rotate(70deg)"
    }], {
      duration: 2E3,
      fill: "forwards"
    });
  };
  b.Sleepy.prototype.onSleepyClick_ = function () {
    this.isSleeping && window.setTimeout(this.wakeUp_.bind(this), 200);
  };
  b.SleepyController = function () {
    this.count = 0;
  };
  b.SleepyController.prototype.init = function () {};
  b.SleepyController.prototype.destroy = function () {
    this.count = 0;
  };
  b.SleepyController.prototype.canSleep = function () {
    return this.count < b.Constants.SLEEPING_ELVES_LIMIT;
  };
  b.SleepyController.prototype.addSleepy = function () {
    this.count++;
  };
  b.SleepyController.prototype.subtractSleepy = function () {
    this.count--;
  };
  b.Spectator = function (a) {
    this.$context_ = $(a);
    this.$group = this.$context_.find(".js-spectator-group");
    this.context_ = this.$context_[0];
    this.onSpectatorClick_ = this.onSpectatorClick_.bind(this);
  };
  b.Spectator.prototype.init = function () {
    this.addEventListeners_();
  };
  b.Spectator.prototype.destroy = function () {
    this.removeEventListeners_();
  };
  b.Spectator.prototype.addEventListeners_ = function () {
    this.$context_.on("click", this.onSpectatorClick_);
  };
  b.Spectator.prototype.removeEventListeners_ = function () {
    this.$context_.off("click", this.onSpectatorClick_);
  };
  b.Spectator.prototype.tweenShakeChair_ = function () {
    this.$group.get(0).animate([{
      transform: "translate(0)"
    }, {
      transform: "translate(+10px)",
      offset: .25
    }, {
      transform: "translate(-10px)",
      offset: .75
    }, {
      transform: "translate(0)"
    }], {
      duration: 600,
      easing: "ease-in-out"
    });
  };
  b.Spectator.prototype.onSpectatorClick_ = function () {
    this.tweenShakeChair_();
  };
  b.Scene = function (a) {
    this.$context_ = $(a);
    this.context_ = this.$context_[0];
    this.projection = new b.Projection(a.querySelector(".js-projection"));
    this.elevator = new b.Elevator(a.querySelector(".js-elevator"));
    this.sleepyController = new b.SleepyController();
    this.spectators = [];
    this.sleepers = [];
    this.clocks = [];
    this.$spectators = this.$context_.find(".js-spectator");
    this.$clocks = this.$context_.find(".js-clock");
    this.numSpectators = this.$spectators.length;
    this.numSleepers = 0;
    this.numClocks = this.$clocks.length;
    for (a = 0; a < this.numSpectators; a++) {
      var c = this.$spectators.eq(a);
      var d = c.get();
      this.spectators.push(new b.Spectator(d));
      c.data("is-sleepy") && (this.sleepers.push(new b.Sleepy(d, this.sleepyController)), this.numSleepers++);
    }
    for (a = 0; a < this.numClocks; a++) c = this.$clocks.eq(a), this.clocks.push(new b.Clock(c));
    this.init_();
  };
  b.Scene.prototype.init_ = function () {
    var a;
    this.projection.init();
    this.elevator.init();
    this.sleepyController.init();
    for (a = 0; a < this.numSpectators; a++) this.spectators[a].init();
    for (a = 0; a < this.numSleepers; a++) this.sleepers[a].init();
    for (a = 0; a < this.numClocks; a++) this.clocks[a].init();
  };
  b.Scene.prototype.destroy = function () {
    var a;
    this.projection.destroy();
    this.elevator.destroy();
    this.sleepyController.destroy();
    for (a = 0; a < this.numSpectators; a++) this.spectators[a].destroy();
    for (a = 0; a < this.numSleepers; a++) this.sleepers[a].destroy();
    for (a = 0; a < this.numClocks; a++) this.clocks[a].destroy();
  };
  b.Game = b.Scene;
  _globalExport = b.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('briefing_load_sounds');
sceneApi.preload.images('img/logo.svg', 'img/clock-min.svg', 'img/decorations-min.svg', 'img/deer-chair-min.svg', 'img/elf-chair-min.svg', 'img/shadow-min.svg', 'img/sleepy-z-small-min.svg', 'img/sleepy-z-medium-min.svg', 'img/sleepy-z-large-min.svg');
sceneApi.config({
  sound: ['briefing_start', 'music_start_scene']
});
sceneApi.ready(async () => {
  new Game(document.getElementById('module-briefing'));
  let currentAudienceMember = -1;
  window.addEventListener('keydown', ev => {
    switch (ev.key) {
      case 'Left':
      case 'ArrowLeft':
        document.getElementById('leftarrow').click();
        break;
      case 'Right':
      case 'ArrowRight':
        document.getElementById('rightarrow').click();
        break;
      case 'Up':
      case 'ArrowUp':
        document.getElementById('up-elevator-arrow').click();
        break;
      case 'Down':
      case 'ArrowDown':
        document.getElementById('down-elevator-arrow').click();
        break;
      case 'Enter':
        document.getElementById('showdeer').click();
        break;
      case '1':
      case '2':
      case '3':
      case '4':
        const el = document.querySelector('.clock--' + ev.key);
        el && el.click();
        break;
      case ' ':
        const spectators = document.querySelectorAll('#audience .spectator');
        ++currentAudienceMember;
        spectators[currentAudienceMember % spectators.length].click();
        break;
      default:
        return false;
    }
    ev.preventDefault();
  });
});