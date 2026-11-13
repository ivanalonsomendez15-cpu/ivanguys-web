import { s as sceneApi } from '../../_e310d67a.js';
import { p as prepareAnimation } from '../../_36ce2a0a.js';
import { i as isTouchDevice } from '../../_271b59a1.js';
import '../../_e1311d95.js';
const Teams = {
  OPPONENT: 'opponent',
  PLAYER: 'player'
};
const Arena = {
  WIDTH: 1200,
  HEIGHT: 900,
  BACKGROUND_COLOR: '#ffffff',
  BORDER_COLOR: '#333333',
  BORDER_WIDTH: 3,
  CENTER_LINE_COLOR: 'rgba(0, 0, 0, 0.15)',
  CENTER_LINE_WIDTH: 2,
  OUT_OF_BOUNDS_MARGIN: 50,
  PADDING_TOP: 60,
  PADDING_TOP_MOBILE: 20,
  PADDING_LEFT_PERCENTAGE: 2,
  ZOOM_TOUCH_DEVICE: 0
};
const Elf$1 = {
  RADIUS: 20,
  SPEED: 200,
  WANDER_INTERVAL: 2,
  WANDER_MARGIN: 30,
  DODGE_DISTANCE: 70,
  DODGE_COOLDOWN: 0.5,
  DODGE_LOCK_DURATION: 0.2
};
const ElfColors = {
  PLAYER: '#3498db',
  OPPONENT: '#e74c3c',
  SELECTION_RING: '#f1c40f',
  SELECTION_RING_OFFSET: 5,
  SELECTION_RING_WIDTH: 3
};
const PlayerAI = {
  SEEK_SNOWBALL_CHANCE: 0.7,
  SEEK_COOLDOWN_AFTER_SEEK: 3,
  SEEK_COOLDOWN_RANDOM_EXTRA: 2,
  SEEK_COOLDOWN_AFTER_CHECK: 1.5
};
const PlayerAIConfig = {
  seekChance: PlayerAI.SEEK_SNOWBALL_CHANCE,
  seekCooldownAfterSeek: PlayerAI.SEEK_COOLDOWN_AFTER_SEEK,
  seekCooldownRandomExtra: PlayerAI.SEEK_COOLDOWN_RANDOM_EXTRA,
  seekCooldownAfterCheck: PlayerAI.SEEK_COOLDOWN_AFTER_CHECK
};
const OpponentAI = {
  THROW_INACCURACY: 40,
  THROW_DELAY: 1.5,
  SEEK_SNOWBALL_CHANCE: 0.3,
  SEEK_COOLDOWN_AFTER_SEEK: 2,
  SEEK_COOLDOWN_AFTER_CHECK: 2
};
const OpponentAIConfig = {
  seekChance: OpponentAI.SEEK_SNOWBALL_CHANCE,
  seekCooldownAfterSeek: OpponentAI.SEEK_COOLDOWN_AFTER_SEEK,
  seekCooldownRandomExtra: 0,
  seekCooldownAfterCheck: OpponentAI.SEEK_COOLDOWN_AFTER_CHECK
};
const Levels = [{
  opponentAI: {
    seekChance: 0.2,
    seekCooldownAfterSeek: 3,
    seekCooldownRandomExtra: 1,
    seekCooldownAfterCheck: 3,
    throwInaccuracy: 80,
    throwDelay: 2.5
  }
}, {
  opponentAI: {
    seekChance: 0.6,
    seekCooldownAfterSeek: 2,
    seekCooldownRandomExtra: 0,
    seekCooldownAfterCheck: 2,
    throwInaccuracy: 30,
    throwDelay: 1.5
  }
}, {
  opponentAI: {
    seekChance: 0.9,
    seekCooldownAfterSeek: 1,
    seekCooldownRandomExtra: 0,
    seekCooldownAfterCheck: 1,
    throwInaccuracy: 1,
    throwDelay: 0.5
  }
}];
const Snowball$1 = {
  RADIUS: 10,
  SPEED: 500,
  PICKUP_RADIUS: 30,
  DROPPED_PICKUP_RADIUS: 70,
  OPPONENT_PICKUP_RADIUS: 60
};
const Gameplay = {
  STARTING_HEALTH: 100,
  DAMAGE_PER_HIT: 20,
  SNOWBALL_COUNT: 5,
  SPAWN_RESPAWN_DELAY: 4,
  SPAWN_POINT_TOLERANCE: 5,
  FRIENDLY_FIRE: false
};
class Elf {
  constructor(x, y, team, index, animations) {
    this.x = x;
    this.y = y;
    this.team = team;
    this.index = index;
    this.animations = animations;
    this.radius = Elf$1.RADIUS;
    this.color = team === Teams.OPPONENT ? ElfColors.OPPONENT : ElfColors.PLAYER;
    this.targetX = x;
    this.targetY = y;
    this.speed = Elf$1.SPEED;
    this.heldSnowball = null;
    this.wanderTimer = 0;
    this.wanderInterval = Elf$1.WANDER_INTERVAL;
    this.seekSnowballCooldown = 0;
    this.throwInaccuracy = OpponentAI.THROW_INACCURACY;
    this.throwDelayTimer = 0;
    this.dodgeLockTimer = 0;
    this.dodgeCooldown = 0;
    const teamClass = team === Teams.OPPONENT ? 'opponent' : 'player';
    this.elem = document.querySelector(`.elf--${teamClass}-${index}`);
    this.innerElem = this.elem.querySelector('.elf__inner');
    this.snowballElem = this.elem.querySelector('.elf__snowball');
    this.currentDirection = 'front';
    this.currentFrame = 0;
    this.lastAnimationUpdate = 0;
    this.innerElem.classList.remove('direction--back', 'direction--side', 'is-flipped');
    this.innerElem.classList.add('direction--front');
    this.elem.style.transition = 'none';
    this.elem.style.left = `${this.x}px`;
    this.elem.style.top = `${this.y}px`;
    this.elem.offsetHeight;
    this.elem.style.transition = '';
  }
  updateHeldSnowballDisplay() {
    if (this.heldSnowball && this.snowballElem) {
      if (!this.snowballElem.hasChildNodes()) {
        const img = document.createElement('img');
        img.src = 'img/snowball.svg';
        img.style.width = '100%';
        img.style.height = '100%';
        this.snowballElem.appendChild(img);
      }
      this.snowballElem.classList.add('is-visible');
    } else if (this.snowballElem) {
      this.snowballElem.classList.remove('is-visible');
    }
  }
  playThrowAnimation() {
    this.innerElem.classList.add('is-throwing');
    setTimeout(() => {
      this.innerElem.classList.remove('is-throwing');
    }, 300);
  }
  playHitAnimation() {
    this.elem.classList.add('is-hit');
    if (this.heldSnowball) {
      const offsetDistance = 100;
      if (this.currentDirection === 'front') {
        this.heldSnowball.y += offsetDistance;
      } else if (this.currentDirection === 'back') {
        this.heldSnowball.y -= offsetDistance;
      } else if (this.currentDirection === 'side') {
        const isFlipped = this.innerElem.classList.contains('is-flipped');
        this.heldSnowball.x += isFlipped ? -offsetDistance : offsetDistance;
      }
      this.heldSnowball.drop();
      this.heldSnowball = null;
    }
    setTimeout(() => {
      this.elem.classList.remove('is-hit');
    }, 400);
  }
  update(dt, arena) {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 1) {
      const moveDist = this.speed * dt;
      if (moveDist >= dist) {
        this.x = this.targetX;
        this.y = this.targetY;
      } else {
        this.x += dx / dist * moveDist;
        this.y += dy / dist * moveDist;
      }
    }
    if (arena) {
      const centerY = arena.y + arena.height / 2;
      if (this.team === Teams.OPPONENT) {
        const maxY = centerY - 40;
        this.y = Math.min(this.y, maxY);
        this.targetY = Math.min(this.targetY, maxY);
      } else {
        this.y = Math.max(this.y, centerY);
        this.targetY = Math.max(this.targetY, centerY);
      }
    }
  }
  render() {
    this.elem.style.left = `${this.x}px`;
    this.elem.style.top = `${this.y}px`;
    this.updateHeldSnowballDisplay();
    this.updateAnimation();
  }
  cycleAnimationFrames(frameStart, frameEnd, frameSpeed) {
    const now = performance.now();
    if (now - this.lastAnimationUpdate > frameSpeed) {
      if (this.currentFrame < frameStart || this.currentFrame > frameEnd) {
        this.currentFrame = frameStart;
      } else {
        const frameRange = frameEnd - frameStart + 1;
        this.currentFrame = frameStart + (this.currentFrame - frameStart + 1) % frameRange;
      }
      this.lastAnimationUpdate = now;
    }
    return this.currentFrame;
  }
  updateAnimation() {
    if (!this.animations) return;
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const isMoving = Math.abs(dx) > 1 || Math.abs(dy) > 1;
    let newDirection = this.currentDirection;
    if (isMoving) {
      if (Math.abs(dy) > Math.abs(dx)) {
        newDirection = dy > 0 ? 'front' : 'back';
      } else {
        newDirection = 'side';
      }
    }
    if (newDirection !== this.currentDirection) {
      this.innerElem.classList.remove(`direction--${this.currentDirection}`);
      this.innerElem.classList.add(`direction--${newDirection}`);
      this.currentFrame = 0;
      this.lastAnimationUpdate = 0;
      this.currentDirection = newDirection;
    }
    if (newDirection === 'side') {
      if (dx < 0) {
        this.innerElem.classList.add('is-flipped');
      } else {
        this.innerElem.classList.remove('is-flipped');
      }
    }
    const isHolding = !!this.heldSnowball;
    let targetFrame;
    if (isHolding) {
      targetFrame = isMoving ? this.cycleAnimationFrames(50, 70, 50) : 40;
    } else {
      targetFrame = isMoving ? this.cycleAnimationFrames(10, 30, 50) : 0;
    }
    if (this.animations[this.currentDirection]) {
      this.animations[this.currentDirection].goToAndStop(targetFrame, true);
    }
  }
  dodge(arena) {
    if (this.dodgeCooldown > 0) return;
    const dodgeDistance = Elf$1.DODGE_DISTANCE;
    const margin = Elf$1.WANDER_MARGIN;
    const leftBound = arena.x + margin;
    const rightBound = arena.x + arena.width - margin;
    let direction;
    const horizontalMovement = this.targetX - this.x;
    if (Math.abs(horizontalMovement) > 5) {
      direction = horizontalMovement > 0 ? 1 : -1;
    } else if (this.x - dodgeDistance < leftBound) {
      direction = 1;
    } else if (this.x + dodgeDistance > rightBound) {
      direction = -1;
    } else {
      direction = Math.random() < 0.5 ? -1 : 1;
    }
    const newX = this.x + direction * dodgeDistance;
    this.x = Math.max(leftBound, Math.min(rightBound, newX));
    this.targetX = this.x;
    const centerY = arena.y + arena.height / 2;
    if (this.team === Teams.PLAYER) {
      this.y = Math.max(this.y, centerY);
      this.targetY = Math.max(this.targetY, centerY);
    }
    this.dodgeCooldown = Elf$1.DODGE_COOLDOWN;
    this.dodgeLockTimer = Elf$1.DODGE_LOCK_DURATION;
  }
  getVelocity() {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 1) return {
      vx: 0,
      vy: 0
    };
    return {
      vx: dx / dist * this.speed,
      vy: dy / dist * this.speed
    };
  }
  getRandomPointInTerritory(arena) {
    const margin = Elf$1.WANDER_MARGIN;
    const centerY = arena.y + arena.height / 2;
    const x = arena.x + margin + Math.random() * (arena.width - margin * 2);
    let y;
    if (this.team === Teams.OPPONENT) {
      y = arena.y + margin + Math.random() * (centerY - arena.y - margin * 2);
    } else {
      y = centerY + margin + Math.random() * (arena.y + arena.height - centerY - margin * 2);
    }
    return {
      x,
      y
    };
  }
  updateAI(dt, arena, snowballs, config, targets = null) {
    this.wanderTimer -= dt;
    this.seekSnowballCooldown -= dt;
    this.throwDelayTimer -= dt;
    this.dodgeLockTimer -= dt;
    this.dodgeCooldown -= dt;
    if (this.dodgeLockTimer > 0) return;
    if (this.tryThrow(targets)) return;
    if (this.trySeek(snowballs, config)) return;
    this.wander(arena);
  }
  tryThrow(targets) {
    if (!this.heldSnowball || !targets || targets.length === 0) return false;
    if (this.throwDelayTimer <= 0) {
      const target = this.findNearestTarget(targets);
      if (target) {
        const offsetX = (Math.random() - 0.5) * this.throwInaccuracy * 2;
        const offsetY = (Math.random() - 0.5) * this.throwInaccuracy * 2;
        this.heldSnowball.throw(target.x + offsetX, target.y + offsetY);
      }
      return true;
    }
    return false;
  }
  trySeek(snowballs, config) {
    if (this.heldSnowball) return false;
    if (this.seekSnowballCooldown > 0) return false;
    const availableSnowball = this.findNearestSnowball(snowballs);
    if (availableSnowball && Math.random() < config.seekChance) {
      this.targetX = availableSnowball.x;
      this.targetY = availableSnowball.y;
      this.seekSnowballCooldown = config.seekCooldownAfterSeek + Math.random() * (config.seekCooldownRandomExtra || 0);
      this.wanderTimer = this.wanderInterval;
      return true;
    }
    this.seekSnowballCooldown = config.seekCooldownAfterCheck;
    return false;
  }
  wander(arena) {
    if (this.heldSnowball) {
      const centerY = arena.y + arena.height / 2;
      const targetInOurTerritory = this.team === Teams.OPPONENT ? this.targetY < centerY : this.targetY > centerY;
      if (!targetInOurTerritory) {
        this.wanderTimer = 0;
      }
    }
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const atDestination = dx * dx + dy * dy < 25;
    if (this.wanderTimer <= 0 || atDestination) {
      this.wanderTimer = this.wanderInterval + Math.random();
      const point = this.getRandomPointInTerritory(arena);
      this.targetX = point.x;
      this.targetY = point.y;
    }
  }
  updatePlayerAI(dt, arena, snowballs) {
    this.updateAI(dt, arena, snowballs, PlayerAIConfig);
  }
  updateOpponentAI(dt, arena, snowballs, playerElves, configOverride = null) {
    const config = configOverride || OpponentAIConfig;
    this.updateAI(dt, arena, snowballs, config, playerElves);
  }
  findNearestSnowball(snowballs) {
    let nearest = null;
    let nearestDist = Infinity;
    for (const snowball of snowballs) {
      if (snowball.heldBy || snowball.thrown) continue;
      const dx = snowball.x - this.x;
      const dy = snowball.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = snowball;
      }
    }
    return nearest;
  }
  findNearestTarget(targets) {
    let nearest = null;
    let nearestDist = Infinity;
    for (const target of targets) {
      const dx = target.x - this.x;
      const dy = target.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = target;
      }
    }
    return nearest;
  }
  calculateLeadPosition(target, snowballSpeed) {
    const {
      vx,
      vy
    } = target.getVelocity();
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const timeToTarget = dist / snowballSpeed;
    return {
      x: target.x + vx * timeToTarget,
      y: target.y + vy * timeToTarget
    };
  }
}
class Snowball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spawnX = x;
    this.spawnY = y;
    this.radius = Snowball$1.RADIUS;
    this.heldBy = null;
    this.thrown = false;
    this.velocityX = 0;
    this.velocityY = 0;
    this.speed = Snowball$1.SPEED;
    this.team = null;
    this.wasDropped = false;
    this.throwCounted = false;
  }
  throw(targetX, targetY) {
    const dx = targetX - this.x;
    const dy = targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    this.velocityX = dx / dist * this.speed;
    this.velocityY = dy / dist * this.speed;
    if (this.heldBy) {
      this.team = this.heldBy.team;
      this.heldBy.playThrowAnimation();
      this.heldBy.heldSnowball = null;
      this.heldBy = null;
    }
    this.thrown = true;
    window.santaApp.fire('sound-trigger', 'snowball_throw');
  }
  drop() {
    if (this.heldBy) {
      this.heldBy.heldSnowball = null;
      this.heldBy = null;
    }
    this.wasDropped = true;
  }
  update(dt) {
    if (this.heldBy) {
      const elf = this.heldBy;
      const direction = elf.currentDirection;
      let offsetX = 0;
      let offsetY = 0;
      if (direction === 'front') {
        offsetX = 0;
        offsetY = 10;
      } else if (direction === 'back') {
        offsetX = 0;
        offsetY = -5;
      } else if (direction === 'side') {
        const isFlipped = elf.innerElem.classList.contains('is-flipped');
        offsetX = isFlipped ? -12 : 12;
        offsetY = 5;
      }
      this.x = elf.x + offsetX;
      this.y = elf.y + offsetY;
    } else if (this.thrown) {
      this.x += this.velocityX * dt;
      this.y += this.velocityY * dt;
    }
  }
  render(ctx) {
    const displayRadius = this.heldBy ? this.radius * 1.3 : this.radius;
    const gradient = ctx.createRadialGradient(this.x - displayRadius * 0.3, this.y - displayRadius * 0.3, displayRadius * 0.1, this.x, this.y, displayRadius);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.4, '#f0f8ff');
    gradient.addColorStop(0.8, '#e6f2ff');
    gradient.addColorStop(1, '#d0e8ff');
    ctx.beginPath();
    ctx.arc(this.x, this.y, displayRadius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#5a9fd4';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.x - displayRadius * 0.35, this.y - displayRadius * 0.35, displayRadius * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fill();
  }
  contains(x, y) {
    const dx = this.x - x;
    const dy = this.y - y;
    return dx * dx + dy * dy <= this.radius * this.radius;
  }
  collidesWithElf(elf) {
    const dx = this.x - elf.x;
    const dy = this.y - elf.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < this.radius + elf.radius;
  }
  canBePickedUpBy(elf) {
    const dx = this.x - elf.x;
    const dy = this.y - elf.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (this.wasDropped) {
      return dist < Snowball$1.DROPPED_PICKUP_RADIUS;
    }
    const pickupRadius = elf.team === 'opponent' ? Snowball$1.OPPONENT_PICKUP_RADIUS : Snowball$1.PICKUP_RADIUS;
    return dist < pickupRadius;
  }
}
class LevelManager {
  constructor() {
    this.currentLevelIndex = 0;
  }
  getCurrentLevel() {
    return Levels[this.currentLevelIndex];
  }
  getCurrentLevelNumber() {
    return this.currentLevelIndex + 1;
  }
  hasNextLevel() {
    return this.currentLevelIndex < Levels.length - 1;
  }
  nextLevel() {
    if (this.hasNextLevel()) {
      this.currentLevelIndex++;
      return true;
    }
    return false;
  }
  reset() {
    this.currentLevelIndex = 0;
  }
}
class Stats {
  constructor() {
    this.reset();
  }
  reset() {
    this.ballsThrown = 0;
    this.ballsHit = 0;
    this.damageTaken = 0;
  }
  recordThrow() {
    this.ballsThrown++;
  }
  recordHit() {
    this.ballsHit++;
  }
  recordDamage(amount) {
    this.damageTaken += amount;
  }
  getAccuracy() {
    if (this.ballsThrown === 0) return 0;
    return Math.round(this.ballsHit / this.ballsThrown * 100);
  }
  getStats() {
    return {
      thrown: this.ballsThrown,
      hit: this.ballsHit,
      damageTaken: this.damageTaken,
      accuracy: this.getAccuracy()
    };
  }
}
class Game {
  constructor(canvas, api, prepareAnimation) {
    this.canvas = canvas;
    this.api = api;
    this.prepareAnimation = prepareAnimation;
    this.ctx = canvas.getContext('2d');
    this.width = 0;
    this.height = 0;
    this.lastTime = 0;
    this.isPlaying = false;
    this.showingStartScreen = true;
    this.gameOver = false;
    this.playerWon = false;
    this.levelManager = new LevelManager();
    this.scoreboard = new app.shared.Scoreboard(this, null, 3);
    this.gameover = new app.shared.Gameover(this);
    this.scoreboard.announce_ = function () {
      window.clearTimeout(this.announceTimeout_);
      this.announceTimeout_ = window.setTimeout(() => {
        const detail = {
          score: this.score,
          level: this.level + 1,
          maxLevel: this.levels,
          time: null
        };
        window.santaApp.fire('game-score', detail);
      }, 1);
    };
    this.elves = [];
    this.snowballs = [];
    this.playerElves = [];
    this.opponentElves = [];
    this.playerHealth = Gameplay.STARTING_HEALTH;
    this.opponentHealth = Gameplay.STARTING_HEALTH;
    this.friendlyFire = Gameplay.FRIENDLY_FIRE;
    this.stats = new Stats();
    this.arenaWidth = Arena.WIDTH;
    this.arenaHeight = Arena.HEIGHT;
    this.arenaX = 0;
    this.arenaY = 0;
    this.ratio = Arena.WIDTH / Arena.HEIGHT;
    this.scale = 1;
    this.paddingTop = Arena.PADDING_TOP;
    this.paddingLeft = Arena.PADDING_LEFT_PERCENTAGE;
    this.isTouchDevice = isTouchDevice();
    if (this.isTouchDevice) {
      this.paddingTop = Arena.PADDING_TOP_MOBILE;
    }
    this.spawnPoints = [];
    this.spawnRespawnDelay = Gameplay.SPAWN_RESPAWN_DELAY;
    this.elfAnimations = {
      player: {},
      opponent: {}
    };
    this.animationsLoaded = false;
    this.playerGifts = Array.from(document.querySelectorAll('.health-bar--player .gift'));
    this.opponentGifts = Array.from(document.querySelectorAll('.health-bar--opponent .gift'));
    this.arenaElement = document.getElementById('arena');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initElfAnimations();
    const arena = document.getElementById('arena');
    arena.addEventListener('pointerdown', e => this.onPointerDown(e));
    this.initLevel();
  }
  resize() {
    const maxHeight = window.innerHeight - this.paddingTop * 2;
    const maxWidth = window.innerWidth - window.innerWidth * this.paddingLeft / 100;
    const targetedHeight = Math.min(this.arenaHeight * window.innerWidth / this.arenaWidth, maxHeight);
    const targetedWidth = Math.min(targetedHeight * this.ratio, maxWidth);
    this.scale = targetedWidth / this.arenaWidth;
    if (this.isTouchDevice) {
      this.scale += Arena.ZOOM_TOUCH_DEVICE;
    }
    this.arenaElement.style.position = 'absolute';
    this.arenaElement.style.left = '50%';
    this.arenaElement.style.top = '50%';
    this.arenaElement.style.transformOrigin = '0 0';
    if (!this.isTouchDevice) {
      this.arenaElement.style.transform = `scale(${this.scale.toFixed(3)}) translate(-50%, -50%)`;
    } else {
      this.arenaElement.style.transform = `scale(${this.scale.toFixed(3)}) translate(-50%, -50%) translateY(${this.paddingTop}px)`;
    }
    this.canvas.width = this.arenaWidth;
    this.canvas.height = this.arenaHeight;
    this.width = this.arenaWidth;
    this.height = this.arenaHeight;
  }
  initElfAnimations() {
    const loadedAnimations = {
      player: 0,
      opponent: 0
    };
    const totalAnimations = 6;
    const initAnimation = (team, direction, index) => {
      const playerType = team === 'player' ? 'a' : 'b';
      const path = `img/players/${playerType}/${direction}.json`;
      const container = document.querySelector(`.elf--${team}-${index} .elf__inner`);
      this.prepareAnimation(path, {
        container,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: `animation animation--${direction}`
        }
      }).then(anim => {
        anim.goToAndStop(0, true);
        if (!this.elfAnimations[team][index]) {
          this.elfAnimations[team][index] = {};
        }
        this.elfAnimations[team][index][direction] = anim;
        loadedAnimations[team]++;
        if (loadedAnimations.player + loadedAnimations.opponent === totalAnimations) {
          this.animationsLoaded = true;
          console.log('All elf animations loaded');
        }
      });
    };
    for (let i = 0; i < 3; i++) {
      ['front', 'back', 'side'].forEach(direction => {
        initAnimation('player', direction, i);
        initAnimation('opponent', direction, i);
      });
    }
  }
  updateGifts(health, isPlayer) {
    const maxGifts = Gameplay.STARTING_HEALTH / Gameplay.DAMAGE_PER_HIT;
    const aliveGifts = Math.ceil(health / Gameplay.DAMAGE_PER_HIT);
    const gifts = isPlayer ? this.playerGifts : this.opponentGifts;
    for (let i = 0; i < maxGifts; i++) {
      const gift = gifts[i];
      const shouldBeAlive = i < aliveGifts;
      const isCurrentlyAlive = !gift.classList.contains('is-dead');
      if (shouldBeAlive !== isCurrentlyAlive) {
        if (!shouldBeAlive) {
          gift.classList.add('is-dead', 'is-popping');
          setTimeout(() => {
            gift.classList.remove('is-popping');
          }, 200);
        } else {
          gift.classList.remove('is-dead');
        }
      }
    }
  }
  start() {
    this.showingStartScreen = true;
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    startScreen.classList.remove('hidden');
    startButton.addEventListener('click', () => this.startGame());
    const nextLevelButton = document.getElementById('next-level-button');
    if (nextLevelButton) {
      nextLevelButton.addEventListener('click', () => this.startNextLevel());
    }
    const restartButton = document.getElementById('restart-button');
    const homeButton = document.getElementById('home-button');
    restartButton.addEventListener('click', () => this.restartGame());
    homeButton.addEventListener('click', () => this.goToHome());
  }
  startGame() {
    this.showingStartScreen = false;
    const startScreen = document.getElementById('start-screen');
    startScreen.classList.add('hidden');
    window.santaApp.fire('sound-ambient', 'music_start_ingame');
    this.isPlaying = true;
    this.lastTime = performance.now();
    this.levelManager.reset();
    this.initLevel();
    this.scoreboard.restart();
    this.loop();
  }
  startNextLevel() {
    this.showingStartScreen = false;
    const gameOverScreen = document.getElementById('game-over-screen');
    const levelCompleteContent = document.getElementById('level-complete-content');
    gameOverScreen.classList.add('hidden');
    levelCompleteContent.classList.add('hidden');
    this.playerHealth = Gameplay.STARTING_HEALTH;
    this.opponentHealth = Gameplay.STARTING_HEALTH;
    this.gameOver = false;
    this.playerWon = false;
    this.levelManager.nextLevel();
    this.isPlaying = true;
    this.lastTime = performance.now();
    this.initLevel();
    this.scoreboard.restart();
    this.loop();
  }
  initLevel() {
    this.elves = [];
    this.snowballs = [];
    this.scoreboard.setLevel(this.levelManager.currentLevelIndex);
    this.gameOver = false;
    this.stats.reset();
    const centerX = this.arenaWidth / 2;
    const centerY = this.arenaHeight / 2;
    this.elves.push(new Elf(centerX - 100, centerY - 100, Teams.OPPONENT, 0, this.elfAnimations.opponent[0]));
    this.elves.push(new Elf(centerX, centerY - 150, Teams.OPPONENT, 1, this.elfAnimations.opponent[1]));
    this.elves.push(new Elf(centerX + 100, centerY - 100, Teams.OPPONENT, 2, this.elfAnimations.opponent[2]));
    this.elves.push(new Elf(centerX - 100, centerY + 100, Teams.PLAYER, 0, this.elfAnimations.player[0]));
    this.elves.push(new Elf(centerX, centerY + 150, Teams.PLAYER, 1, this.elfAnimations.player[1]));
    this.elves.push(new Elf(centerX + 100, centerY + 100, Teams.PLAYER, 2, this.elfAnimations.player[2]));
    const snowballCount = Gameplay.SNOWBALL_COUNT;
    const spacing = this.arenaWidth / (snowballCount + 1);
    this.spawnPoints = [];
    for (let i = 1; i <= snowballCount; i++) {
      const x = spacing * i;
      const y = centerY;
      this.spawnPoints.push({
        x,
        y,
        timer: 0,
        hasSnowball: true
      });
      this.snowballs.push(new Snowball(x, y));
    }
    this.updateGifts(this.playerHealth, true);
    this.updateGifts(this.opponentHealth, false);
  }
  pause() {
    if (this.showingStartScreen || this.gameOver) return;
    this.isPlaying = false;
  }
  showGameOverScreen() {
    const gameOverScreen = document.getElementById('game-over-screen');
    const levelCompleteContent = document.getElementById('level-complete-content');
    const gameEndContent = document.getElementById('game-end-content');
    const gameOverTitle = document.getElementById('game-over-title');
    if (this.playerWon) {
      if (this.levelManager.hasNextLevel()) {
        const stats = this.stats.getStats();
        document.getElementById('stat-thrown').textContent = stats.thrown;
        document.getElementById('stat-damage').textContent = stats.damageTaken;
        document.getElementById('stat-accuracy').textContent = stats.accuracy + '%';
        levelCompleteContent.classList.remove('hidden');
        gameEndContent.classList.add('hidden');
        gameOverScreen.classList.remove('hidden');
      } else {
        this.gameover.show(this.scoreboard.score, this.levelManager.currentLevelIndex + 1);
      }
    } else {
      gameOverTitle.className = 'game-over-screen__title lose';
      const stats = this.stats.getStats();
      document.getElementById('end-stat-thrown').textContent = stats.thrown;
      document.getElementById('end-stat-damage').textContent = stats.damageTaken;
      document.getElementById('end-stat-accuracy').textContent = stats.accuracy + '%';
      levelCompleteContent.classList.add('hidden');
      gameEndContent.classList.remove('hidden');
      gameOverScreen.classList.remove('hidden');
    }
  }
  resume() {
    if (this.showingStartScreen) return;
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.lastTime = performance.now();
      this.loop();
    }
  }
  restart() {
    if (this.showingStartScreen) return;
    this.playerHealth = Gameplay.STARTING_HEALTH;
    this.opponentHealth = Gameplay.STARTING_HEALTH;
    this.levelManager.reset();
    this.initLevel();
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.lastTime = performance.now();
      this.loop();
    }
  }
  restartGame() {
    const gameOverScreen = document.getElementById('game-over-screen');
    const levelCompleteContent = document.getElementById('level-complete-content');
    const gameEndContent = document.getElementById('game-end-content');
    gameOverScreen.classList.add('hidden');
    levelCompleteContent.classList.add('hidden');
    gameEndContent.classList.add('hidden');
    this.gameOver = false;
    this.playerWon = false;
    this.playerHealth = Gameplay.STARTING_HEALTH;
    this.opponentHealth = Gameplay.STARTING_HEALTH;
    this.levelManager.reset();
    this.initLevel();
    this.isPlaying = true;
    this.lastTime = performance.now();
    this.loop();
  }
  goToHome() {
    this.api.go('');
  }
  loop() {
    if (!this.isPlaying) return;
    const now = performance.now();
    const dt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    this.update(dt);
    this.render();
    requestAnimationFrame(() => this.loop());
  }
  gameover() {}
  update(dt) {
    const playerElves = this.elves.filter(e => e.team === Teams.PLAYER);
    const opponentElves = this.elves.filter(e => e.team === Teams.OPPONENT);
    const arenaBounds = {
      x: 0,
      y: 0,
      width: this.arenaWidth,
      height: this.arenaHeight
    };
    playerElves.forEach(elf => {
      elf.updatePlayerAI(dt, arenaBounds, this.snowballs);
    });
    const currentLevel = this.levelManager.getCurrentLevel();
    opponentElves.forEach(elf => {
      elf.updateOpponentAI(dt, arenaBounds, this.snowballs, playerElves, currentLevel.opponentAI);
    });
    this.elves.forEach(elf => elf.update(dt, arenaBounds));
    this.snowballs.forEach(snowball => snowball.update(dt));
    this.snowballs.forEach(snowball => {
      if (snowball.thrown && snowball.team === Teams.PLAYER && !snowball.throwCounted) {
        this.stats.recordThrow();
        snowball.throwCounted = true;
      }
    });
    this.snowballs.forEach(snowball => {
      if (!snowball.thrown) return;
      for (const elf of this.elves) {
        if (snowball.collidesWithElf(elf)) {
          if (this.friendlyFire || snowball.team !== elf.team) {
            if (snowball.team === Teams.PLAYER && elf.team === Teams.OPPONENT) {
              this.stats.recordHit();
            }
            if (elf.team === Teams.PLAYER) {
              this.playerHealth = Math.max(0, this.playerHealth - Gameplay.DAMAGE_PER_HIT);
              this.stats.recordDamage(1);
              this.updateGifts(this.playerHealth, true);
            } else {
              this.opponentHealth = Math.max(0, this.opponentHealth - Gameplay.DAMAGE_PER_HIT);
              this.updateGifts(this.opponentHealth, false);
            }
            elf.playHitAnimation();
            window.santaApp.fire('sound-trigger', 'snowball_hit');
            snowball.markedForRemoval = true;
            break;
          }
        }
      }
    });
    this.spawnPoints.forEach(sp => {
      const hasSnowballAtSpawn = this.snowballs.some(s => !s.heldBy && !s.thrown && Math.abs(s.x - sp.x) < Gameplay.SPAWN_POINT_TOLERANCE && Math.abs(s.y - sp.y) < Gameplay.SPAWN_POINT_TOLERANCE);
      if (hasSnowballAtSpawn) {
        sp.timer = 0;
        sp.hasSnowball = true;
      } else {
        if (sp.hasSnowball) {
          sp.hasSnowball = false;
          sp.timer = this.spawnRespawnDelay;
        } else if (sp.timer > 0) {
          sp.timer -= dt;
          if (sp.timer <= 0) {
            this.snowballs.push(new Snowball(sp.x, sp.y));
            sp.hasSnowball = true;
            sp.timer = 0;
          }
        }
      }
    });
    this.elves.forEach(elf => {
      if (elf.heldSnowball) return;
      this.snowballs.forEach(snowball => {
        if (snowball.heldBy || snowball.thrown) return;
        if (snowball.canBePickedUpBy(elf)) {
          snowball.heldBy = elf;
          elf.heldSnowball = snowball;
          elf.throwDelayTimer = OpponentAI.THROW_DELAY;
        }
      });
    });
    this.snowballs = this.snowballs.filter(snowball => {
      if (snowball.markedForRemoval) return false;
      if (!snowball.thrown) return true;
      const margin = Arena.OUT_OF_BOUNDS_MARGIN;
      const outOfArena = snowball.x < -margin || snowball.x > this.arenaWidth + margin || snowball.y < -margin || snowball.y > this.arenaHeight + margin;
      return !outOfArena;
    });
    if (this.playerHealth <= 0) {
      this.gameOver = true;
      this.playerWon = false;
      this.isPlaying = false;
      this.showGameOverScreen();
    } else if (this.opponentHealth <= 0) {
      this.gameOver = true;
      this.playerWon = true;
      this.isPlaying = false;
      this.showGameOverScreen();
    }
  }
  render() {
    this.ctx.fillStyle = Arena.BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.arenaWidth, this.arenaHeight);
    this.ctx.strokeStyle = Arena.BORDER_COLOR;
    this.ctx.lineWidth = Arena.BORDER_WIDTH;
    this.ctx.strokeRect(0, 0, this.arenaWidth, this.arenaHeight);
    const centerY = this.arenaHeight / 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, centerY);
    this.ctx.lineTo(this.arenaWidth, centerY);
    this.ctx.strokeStyle = Arena.CENTER_LINE_COLOR;
    this.ctx.lineWidth = Arena.CENTER_LINE_WIDTH;
    this.ctx.stroke();
    this.snowballs.forEach(snowball => {
      if (!snowball.heldBy) {
        snowball.render(this.ctx);
      }
    });
    this.elves.forEach(elf => elf.render(this.ctx));
  }
  onPointerDown(e) {
    if (!this.isPlaying || this.gameOver) return;
    const arena = document.getElementById('arena');
    const rect = arena.getBoundingClientRect();
    const x = (e.clientX - rect.left) / this.scale;
    const y = (e.clientY - rect.top) / this.scale;
    const arenaCenterY = this.arenaHeight / 2;
    const arenaBounds = {
      x: 0,
      y: 0,
      width: this.arenaWidth,
      height: this.arenaHeight
    };
    let clickedElf = null;
    const target = e.target;
    if (target.classList.contains('elf') || target.closest('.elf')) {
      const elfElem = target.classList.contains('elf') ? target : target.closest('.elf');
      clickedElf = this.elves.find(elf => elf.elem === elfElem);
    }
    if (clickedElf && clickedElf.team === Teams.PLAYER) {
      clickedElf.dodge(arenaBounds);
    } else if (y < arenaCenterY) {
      const playerElves = this.elves.filter(e => e.team === Teams.PLAYER);
      const elvesWithSnowballs = playerElves.filter(elf => elf.heldSnowball);
      if (elvesWithSnowballs.length > 0) {
        const randomElf = elvesWithSnowballs[Math.floor(Math.random() * elvesWithSnowballs.length)];
        randomElf.heldSnowball.throw(x, y);
      }
    }
  }
}
sceneApi.preload.sounds('snowball_load_sounds');
sceneApi.config({
  orientation: 'landscape',
  pause: true,
  tilt: true
});
const canvas = document.getElementById('game-canvas');
const game = new Game(canvas, sceneApi, prepareAnimation);
sceneApi.addEventListener('pause', () => game.pause());
sceneApi.addEventListener('resume', () => game.resume());
sceneApi.addEventListener('restart', () => game.restart());
sceneApi.ready(async () => {
  game.start();
});