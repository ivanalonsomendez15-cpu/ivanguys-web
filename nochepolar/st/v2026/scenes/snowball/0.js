import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e746bcde.js';
import '../../_e1311d95.js';
import '../../_ccf4b423.js';
const {
  ShadyCSS
} = self;
const preparedTemplates = new Set();
class BasicElement extends HTMLElement {
  static get is() {
    return null;
  }
  static get template() {
    return null;
  }
  static prepareTemplate() {
    if (preparedTemplates.has(this)) {
      return;
    }
    const {
      template,
      is
    } = this;
    if (ShadyCSS != null && is != null && template != null) {
      ShadyCSS.prepareTemplate(template, is);
    }
    preparedTemplates.add(this);
  }
  stampTemplate() {
    this.attachShadow({
      mode: 'open'
    });
    this.constructor.prepareTemplate();
    const template = this.constructor.template;
    if (template != null) {
      this.shadowRoot.appendChild(document.importNode(template.content, true));
    }
  }
}
class ClockSystem {
  constructor() {
    this.clocks = new Map();
    this.active = false;
    this.timeZero = performance.now();
    this.timeSyncDelta = 0;
  }
  stop() {
    this.active = false;
  }
  teardown(game) {
    this.stop();
    this.clocks.clear();
  }
  get time() {
    return performance.now() - this.timeZero + this.timeSyncDelta;
  }
  synchronize(timeZero, time) {
    this.timeZero = timeZero;
    this.timeSyncDelta = time - performance.now();
  }
  startClock(name, handler) {
    if (!this.clocks.has(name)) {
      this.clocks.set(name, []);
    }
    const handlers = this.clocks.get(name);
    handlers.push(handler);
    if (!this.active) {
      this.active = true;
      this.tick();
    }
  }
  tick() {
    self.requestAnimationFrame(() => {
      if (!this.active) {
        return;
      }
      this.clocks.forEach(handlers => handlers.forEach(handler => handler(this.time)));
      this.tick();
    });
  }
}
function GamelikeInterface() {}
GamelikeInterface.prototype.setup = function () {};
GamelikeInterface.prototype.update = function () {};
GamelikeInterface.prototype.setLevel = function (level) {};
Object.defineProperty(GamelikeInterface.prototype, 'level', {
  get() {}
});
class DefaultBaseClass$1 {}
const Gamelike = (SuperClass = DefaultBaseClass$1) => class extends SuperClass {
  constructor() {
    super();
    this.clockSystem = new ClockSystem();
    this.currentLevel = null;
    this.ready = false;
    this.finished = false;
    this.clockSystem.startClock('gameloop', time => {
      this.preciseTick = time * 60 / 1000;
      this.tick = Math.floor(this.preciseTick);
      if (!this.ready) {
        this.setup();
        this.ready = true;
      }
      if (this.currentLevel == null || this.finished) {
        return;
      }
      this.update();
    });
  }
  finish() {
    if (this.finished) {
      return;
    }
    this.finished = true;
    this.clockSystem.stop();
  }
  setup() {}
  update() {}
  teardown() {
    this.clockSystem.teardown(this);
  }
  setLevel(level) {
    if (this.currentLevel != null) {
      this.currentLevel.teardown(this);
    }
    this.currentLevel = level;
    if (this.currentLevel != null) {
      this.currentLevel.setup(this);
    }
  }
  get level() {
    return this.currentLevel;
  }
};
const {
  WebGLRenderer
} = self.THREE;
const template$6 = document.createElement('template');
template$6.innerHTML = `
<style>
  :host, canvas {
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    pointer-events: none;
  }
</style>
`;
class RenderSystem extends BasicElement {
  static get is() {
    return 'render-system';
  }
  static get template() {
    return template$6;
  }
  get aspectRatio() {
    return this.width / this.height;
  }
  constructor() {
    super();
    this.stampTemplate();
    this.renderer = new WebGLRenderer();
    this.renderer.autoClear = true;
    this.shadowRoot.appendChild(this.renderer.domElement);
  }
  measure(game) {
    this.width = self.innerWidth;
    this.height = self.innerHeight;
    this.renderer.setPixelRatio(self.devicePixelRatio);
    this.renderer.setSize(this.width, this.height, true);
  }
  update(game) {
    const {
      currentLevel,
      camera
    } = game;
    this.renderer.render(currentLevel, camera);
  }
  teardown(game) {}
  clear() {
    this.renderer.clearColor();
  }
}
customElements.define(RenderSystem.is, RenderSystem);
class Event {
  constructor(type, detail, target) {
    this.type = type;
    this.detail = detail;
    this.target = target;
  }
}
class DefaultBaseClass {}
const Entity = (SuperClass = DefaultBaseClass) => {
  class EntityClass extends SuperClass {
    setup(game) {}
    teardown(game) {}
    update(game) {}
  }
  return EntityClass;
};
const combine = (...fns) => (...args) => fns.forEach(fn => fn(...args));
const randomElement = array => array[Math.floor(Math.random() * array.length)];
const randomValue = object => {
  const keys = Object.keys(object);
  return object[keys[Math.floor(Math.random() * keys.length)]];
};
const {
  Vector2: Vector2$g,
  Raycaster,
  Octree
} = self.THREE;
const HitEvents = new Set(['enter', 'move', 'exit', 'pick']);
const intermediateVector2$6 = new Vector2$g();
const EntityElement$4 = Entity(BasicElement);
const template$5 = document.createElement('template');
template$5.innerHTML = `
<style>
:host {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>`;
const addEventListener = (target, eventName, listener) => {
  const removableListener = event => listener(event);
  target.addEventListener(eventName, removableListener, {
    passive: true
  });
  return () => target.removeEventListener(eventName, removableListener);
};
class InputSystem extends EntityElement$4 {
  static get is() {
    return 'input-system';
  }
  static get template() {
    return template$5;
  }
  constructor() {
    super();
    this.stampTemplate();
    this.raycaster = new Raycaster();
    this.octree = new Octree({
      undeferred: false,
      depthMax: Infinity,
      objectsThreshold: 8,
      overlapPct: 0.15
    });
    this.eventTargets = new WeakMap();
    this.targetHitTrackCount = new WeakMap();
    this.hitSourceEvents = new Map();
    this.previousMoveHits = new Map();
    this.unsubscribe = combine(this.on('click', event => this.hitSourceEvents.set('click', event)), this.on('pointer-move', event => this.hitSourceEvents.set('pointer-move', event)), addEventListener(this, 'mousemove', event => this.onPointerMove(event)), addEventListener(this, 'touchmove', event => this.onPointerMove(event)), addEventListener(this, 'click', event => this.onClick(event)));
  }
  teardown(game) {
    this.unsubscribe();
  }
  onPointerMove(event) {
    const {
      offsetX: x,
      offsetY: y
    } = event;
    this.dispatch(new Event('pointer-move', {
      x,
      y
    }, this));
  }
  onClick(event) {
    const {
      offsetX: x,
      offsetY: y
    } = event;
    this.dispatch(new Event('click', {
      x,
      y
    }, this));
  }
  normalizeXY(x, y, width, height, normalized = new Vector2$g()) {
    normalized.x = 2 * x / width - 1;
    normalized.y = -2 * y / height + 1;
    return normalized;
  }
  dispatch(event) {
    const targetHandlers = this.eventTargets.get(event.target);
    if (targetHandlers == null) {
      return;
    }
    const handlers = targetHandlers.get(event.type);
    if (handlers == null) {
      return;
    }
    let stopPropagation = false;
    for (let i = 0; i < handlers.length; ++i) {
      stopPropagation = handlers[i](event) === false;
      if (stopPropagation) {
        break;
      }
    }
    return stopPropagation;
  }
  on(eventName, handler, target = this) {
    if (!this.eventTargets.has(target)) {
      this.eventTargets.set(target, new Map());
    }
    const targetHandlers = this.eventTargets.get(target);
    if (!targetHandlers.has(eventName)) {
      targetHandlers.set(eventName, []);
    }
    const handlers = targetHandlers.get(eventName);
    handlers.push(handler);
    if (HitEvents.has(eventName)) {
      this.trackHitTarget(target);
    }
    return () => {
      handlers.splice(handlers.indexOf(handler), 1);
      if (HitEvents.has(eventName)) {
        this.untrackHitTarget(target);
      }
    };
  }
  trackHitTarget(target) {
    const hitTrackCount = this.targetHitTrackCount.get(target) || 0;
    if (hitTrackCount === 0) {
      this.octree.add(target, {
        useFaces: false
      });
    }
    this.targetHitTrackCount.set(target, hitTrackCount + 1);
  }
  untrackHitTarget(target) {
    const hitTrackCount = this.targetHitTrackCount.get(target) || 0;
    if (hitTrackCount > 0) {
      const finalCount = hitTrackCount - 1;
      this.targetHitTrackCount.set(target, finalCount);
      if (finalCount === 0) {
        this.octree.remove(target);
      }
    }
  }
  update(game) {
    const {
      width,
      height,
      camera
    } = game;
    this.octree.update();
    this.octree.rebuild();
    this.testHits(width, height, camera);
  }
  testHits(width, height, camera) {
    if (this.hitSourceEvents.size === 0) {
      return;
    }
    const moveEvent = this.hitSourceEvents.get('pointer-move');
    if (moveEvent != null) {
      const {
        x,
        y
      } = moveEvent.detail;
      const hits = this.intersectHitTargets(x, y, width, height, camera);
      const hitDetails = {
        x,
        y,
        hits
      };
      hits.forEach((intersections, target) => {
        const details = Object.assign({
          intersections
        }, hitDetails);
        if (this.previousMoveHits.has(target)) {
          this.previousMoveHits.delete(target);
        } else {
          this.dispatch(new Event('enter', details, target));
        }
        this.dispatch(new Event('move', details, target));
      });
      this.previousMoveHits.forEach((intersections, target) => {
        this.dispatch(new Event('exit', hitDetails, target));
      });
      this.previousMoveHits = hits;
    }
    const clickEvent = this.hitSourceEvents.get('click');
    if (clickEvent != null) {
      const {
        x,
        y
      } = clickEvent.detail;
      const hits = this.intersectHitTargets(x, y, width, height, camera);
      const hitDetails = {
        x,
        y,
        hits
      };
      let stopPropagation = false;
      hits.forEach((intersections, target) => {
        if (stopPropagation) {
          return;
        }
        const details = Object.assign({
          intersections
        }, hitDetails);
        stopPropagation = this.dispatch(new Event('pick', details, target));
      });
    }
    this.hitSourceEvents.clear();
  }
  intersectHitTargets(x, y, width, height, camera) {
    const normalized = this.normalizeXY(x, y, width, height, intermediateVector2$6);
    this.raycaster.setFromCamera(normalized, camera);
    const ray = this.raycaster.ray;
    const candidates = this.octree.search(ray.origin, ray.far, true, ray.direction);
    const hits = this.raycaster.intersectOctreeObjects(candidates);
    return hits.sort((a, b) => a.distance > b.distance).reduce((map, hit, index) => {
      const target = hit.object;
      if (!map.has(target)) {
        map.set(target, []);
      }
      map.get(target).push(hit);
      return map;
    }, new Map());
  }
}
customElements.define(InputSystem.is, InputSystem);
const {
  PerspectiveCamera,
  OrthographicCamera
} = self.THREE;
const template$4 = document.createElement('template');
template$4.innerHTML = `
<style>
  :host {
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  *[hidden] {
    display: none;
  }
</style>`;
const GamelikeBasicElement = Gamelike(BasicElement);
class Game extends GamelikeBasicElement {
  static get template() {
    return template$4;
  }
  constructor(...args) {
    super(...args);
    this.stampTemplate();
    this.renderSystem = new RenderSystem();
    this.inputSystem = new InputSystem();
    this.camera = new OrthographicCamera(1, 1, 1, 1, 1, 100000);
    this.shadowRoot.appendChild(this.renderSystem);
    this.shadowRoot.appendChild(this.inputSystem);
    self.addEventListener('resize', () => this.measure());
  }
  connectedCallback() {
    this.measure();
  }
  measure() {
    this.width = self.innerWidth;
    this.height = self.innerHeight;
    if (this.currentLevel != null) {
      this.currentLevel.measure(this);
    }
    this.camera.aspect = this.width / this.height;
    this.camera.left = -this.width / 2;
    this.camera.right = this.width / 2;
    this.camera.top = this.height / 2;
    this.camera.bottom = -this.height / 2;
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
    this.renderSystem.measure(this);
  }
  update() {
    this.currentLevel.update(this);
    this.renderSystem.update(this);
    this.inputSystem.update(this);
  }
  teardown() {
    super.teardown();
    if (this.currentLevel != null) {
      this.setLevel(null);
    }
    this.inputSystem.teardown(this);
    this.renderSystem.teardown(this);
  }
  setLevel(level) {
    super.setLevel(level);
    if (level != null) {
      this.camera.position.copy(level.position);
      this.camera.position.z = -3200;
      this.camera.lookAt(level.position);
      this.camera.rotation.z = 0;
    }
  }
}
const classFreeItems = new WeakMap();
const classAllocatedItems = new WeakMap();
function AllocatableInterface() {}
AllocatableInterface.allocate = function (...args) {};
AllocatableInterface.free = function (allocatable) {};
AllocatableInterface.createItem = function () {};
Object.defineProperty(AllocatableInterface, 'freeItems', {
  get() {}
});
Object.defineProperty(AllocatableInterface, 'allocatedItems', {
  get() {}
});
AllocatableInterface.prototype.onAllocated = function () {};
AllocatableInterface.prototype.onFreed = function () {};
const Allocatable = SuperClass => {
  class Allocatable extends SuperClass {
    static allocate(...args) {
      if (this.freeItems.length === 0) {
        this.freeItems.push(this.createItem());
      }
      const item = this.freeItems.pop();
      this.allocatedItems.push(item);
      item.onAllocated(...args);
      return item;
    }
    static free(item) {
      const index = this.allocatedItems.indexOf(item);
      if (index === -1) {
        return;
      }
      this.allocatedItems.splice(index, 1);
      item.onFreed();
      this.freeItems.push(item);
    }
    static createItem() {
      return new this();
    }
    static get freeItems() {
      if (!classFreeItems.has(this)) {
        classFreeItems.set(this, []);
      }
      return classFreeItems.get(this);
    }
    static get allocatedItems() {
      if (!classAllocatedItems.has(this)) {
        classAllocatedItems.set(this, []);
      }
      return classAllocatedItems.get(this);
    }
    onAllocated() {}
    onFreed() {}
  }
  return Allocatable;
};
const {
  Vector2: Vector2$f
} = self.THREE;
class AbstractShape {
  get type() {
    return 'abstract';
  }
  contains(other) {
    const tests = containmentTests[this.type];
    const test = tests && tests[other.type];
    if (test != null) {
      return test(this, other);
    }
    console.warn('Containment test attempted between two unsupported types:', this, other);
    return false;
  }
  intersects(other) {
    const tests = intersectionTests[this.type];
    const test = tests && tests[other.type];
    if (test != null) {
      return test(this, other);
    }
    console.warn('Intersection test attempted between two unsupported types:', this, other);
    return false;
  }
}
const AllocatableAbstractShape = Allocatable(AbstractShape);
class Point extends AllocatableAbstractShape {
  get type() {
    return 'point';
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  get width() {
    return 1;
  }
  get height() {
    return 1;
  }
  onAllocated(position) {
    this.position = position;
  }
  onFreed() {
    this.position = null;
  }
}
class Line extends AllocatableAbstractShape {
  get type() {
    return 'line';
  }
  get x() {
    return this.midpoint.x;
  }
  get y() {
    return this.midpoint.y;
  }
  get width() {
    return Math.abs(this.a.x - this.b.x);
  }
  get height() {
    return Math.abs(this.a.y - this.b.y);
  }
  constructor() {
    super();
    this.midpoint = new Vector2$f();
  }
  onAllocated(a, b) {
    this.a = a;
    this.b = b;
    this.midpoint.set((this.a.x + this.b.x) / 2, (this.a.y + this.b.y) / 2);
  }
  onFreed() {
    this.a = null;
    this.b = null;
  }
}
class Circle extends AllocatableAbstractShape {
  get type() {
    return 'circle';
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  get width() {
    return this.radius * 2;
  }
  get height() {
    return this.width;
  }
  onAllocated(radius, position) {
    this.radius = radius;
    this.position = position;
    this.radiusSquared = radius * radius;
  }
  onFreed() {
    this.radius = 0;
    this.position = null;
    this.radiusSquared = 0;
  }
}
class Rectangle extends AllocatableAbstractShape {
  get type() {
    return 'rectangle';
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  get left() {
    return this.position.x - this.halfWidth;
  }
  get right() {
    return this.position.x + this.halfWidth;
  }
  get top() {
    return this.position.y + this.halfHeight;
  }
  get bottom() {
    return this.position.y - this.halfHeight;
  }
  constructor() {
    super();
  }
  onAllocated(width, height, position = new Vector2$f()) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
  }
  onFreed() {
    this.width = 0;
    this.height = 0;
    this.position = null;
    this.halfWidth = 0;
    this.halfHeight = 0;
  }
}
const lineIntersectsLine = (() => {
  const u0 = new Vector2$f();
  const u1 = new Vector2$f();
  const v0 = new Vector2$f();
  const v1 = new Vector2$f();
  return (a, b) => {
    v0.subVectors(a.b, a.a);
    v1.subVectors(a.a, b.a);
    u0.subVectors(b.b, b.a);
    u1.subVectors(a.b, b.b);
    const d = u0[0] * v0[1] - u0[1] * v0[0];
    const r = (v1.y * v0.x - v1.x * v0.y) / d;
    const s = (v1.y * u0.x - v1.x * u0.y) / d;
    return 0 <= r && r <= 1 && 0 <= s && s <= 1;
  };
})();
const circleIntersectsCircle = (() => {
  const delta = new Vector2$f();
  return (a, b) => {
    const proximity = delta.subVectors(a.position, b.position).length();
    const tangentDistance = a.radius + b.radius;
    return proximity < tangentDistance;
  };
})();
const rectangleIntersectsRectangle = (() => {
  return (a, b) => {
    if (b.left > a.right || b.right < a.left || b.top < a.bottom || b.bottom > a.top) {
      return false;
    }
    return true;
  };
})();
const circleIntersectsRectangle = (() => {
  const circleDistance = new Vector2$f();
  return (circle, rectangle) => {
    circleDistance.subVectors(circle.position, rectangle.position);
    circleDistance.x = Math.abs(circleDistance.x);
    circleDistance.y = Math.abs(circleDistance.y);
    if (circleDistance.x > rectangle.halfWidth + circle.radius) {
      return false;
    }
    if (circleDistance.y > rectangle.halfHeight + circle.radius) {
      return false;
    }
    if (circleDistance.x <= rectangle.halfWidth || circleDistance.y <= rectangle.halfHeight) {
      return true;
    }
    const cornerDistanceSquared = Math.pow(circleDistance.x - rectangle.halfWidth, 2) + Math.pow(circleDistance.y - rectangle.halfHeight, 2);
    return cornerDistanceSquared <= circle.radiusSquared;
  };
})();
const pointIntersectsCircle = (() => {
  const delta = new Vector2$f();
  return (point, circle) => {
    const distance = delta.subVectors(point.position, circle.position).length();
    return distance <= circle.radius;
  };
})();
const pointIntersectsRectangle = (() => {
  return (point, rectangle) => {
    if (point.x < rectangle.x - rectangle.halfWidth || point.x > rectangle.x + rectangle.halfHeight || point.y < rectangle.y - rectangle.halfHeight || point.y > rectangle.y + rectangle.halfHeight) {
      return false;
    }
    return true;
  };
})();
const lineIntersectsRectangle = (() => {
  const intermediateLine = new Line();
  return (line, rectangle) => {
    for (let i = 0, v0 = rectangle.bl; i < rectangle.vertices.length; ++i) {
      let v1 = rectangle.vertices[i];
      intermediateLine.onAllocated(v0, v1);
      if (lineIntersectsLine(line, intermediateLine)) {
        break;
      }
      v0 = v1;
    }
    intermediateLine.onFreed();
    return false;
  };
})();
const intersectionTests = {
  point: {
    point: (point, other) => point.x === other.x && point.y === other.y,
    rectangle: (point, rectangle) => pointIntersectsRectangle(point, rectangle),
    circle: (point, circle) => pointIntersectsCircle(point, circle)
  },
  line: {
    rectangle: (line, rectangle) => lineIntersectsRectangle(line, rectangle),
    line: (line, other) => lineIntersectsLine(line, other)
  },
  circle: {
    circle: (circle, other) => circleIntersectsCircle(circle, other),
    rectangle: (circle, rectangle) => circleIntersectsRectangle(circle, rectangle),
    point: (circle, point) => pointIntersectsCircle(point, circle)
  },
  rectangle: {
    point: (rectangle, point) => pointIntersectsRectangle(point, rectangle),
    line: (rectangle, line) => lineIntersectsRectangle(line, rectangle),
    circle: (rectangle, circle) => circleIntersectsRectangle(circle, rectangle),
    rectangle: (rectangle, other) => rectangleIntersectsRectangle(rectangle, other)
  }
};
const rectangleContainsPoint = (rectangle, point) => {
  if (point.x < rectangle.left || point.x > rectangle.right || point.y < rectangle.bottom || point.y > rectangle.top) {
    return false;
  }
  return true;
};
const rectangleContainsRectangle = (() => {
  const point = new Vector2$f();
  return (rectangle, other) => {
    point.set(other.left, other.top);
    if (!rectangleContainsPoint(rectangle, point)) {
      return false;
    }
    point.set(other.right, other.bottom);
    if (!rectangleContainsPoint(rectangle, point)) {
      return false;
    }
    return true;
  };
})();
const rectangleContainsCircle = (rectangle, circle) => {
  if (circle.x - circle.radius < rectangle.left || circle.x + circle.radius > rectangle.right || circle.y - circle.radius > rectangle.top || circle.y + circle.radius < rectangle.bottom) {
    return false;
  }
  return true;
};
const circleContainsPoint = (circle, point) => {
  return circle.position.distanceTo(point.position) <= circle.radius;
};
const containmentTests = {
  circle: {
    point: circleContainsPoint
  },
  rectangle: {
    point: rectangleContainsPoint,
    rectangle: rectangleContainsRectangle,
    circle: rectangleContainsCircle
  }
};
const {
  Vector2: Vector2$e
} = self.THREE;
class QuadTree {
  constructor(depth, bounds, maxObjects = 10, maxDepth = 5, measureBounds = object => object) {
    this.depth = depth;
    this.bounds = bounds;
    this.measureBounds = measureBounds;
    this.maxObjects = maxObjects;
    this.maxDepth = maxDepth;
    this.nodes = [];
    this.objects = [];
  }
  get tl() {
    return this.nodes[0];
  }
  get bl() {
    return this.nodes[1];
  }
  get tr() {
    return this.nodes[2];
  }
  get br() {
    return this.nodes[3];
  }
  clear() {
    this.objects = [];
    for (let i = 0; i < this.nodes.length; ++i) {
      this.nodes[i].clear();
    }
    this.nodes = [];
  }
  clearDynamic() {
    this.objects = this.objects.filter(object => object.static);
    for (let i = 0; i < this.nodes.length; ++i) {
      this.nodes[i].clearDynamic();
    }
    let empty = true;
    for (let i = 0; i < this.nodes.length; ++i) {
      if (this.nodes.length > 0) {
        empty = false;
        break;
      }
    }
    if (empty) {
      this.nodes = [];
    }
  }
  split() {
    const {
      halfWidth,
      halfHeight,
      x,
      y
    } = this.bounds;
    for (let j = -1, i = 0; j < 2; j += 2) {
      for (let k = -1; k < 2; k += 2, i++) {
        const rectangle = Rectangle.allocate(halfWidth, halfHeight, new Vector2$e(x + j * halfWidth / 2.0, y + k * halfHeight / 2.0));
        this.nodes[i] = new QuadTree(this.depth + 1, rectangle, this.maxObjects, this.maxDepth, this.measureBounds);
      }
    }
  }
  getQuadrantIndex(rectangle) {
    for (let i = 0; i < this.nodes.length; ++i) {
      const node = this.nodes[i];
      if (node.bounds.contains(rectangle)) {
        return i;
      }
    }
    return -1;
  }
  redistributeObjects() {
    if (this.nodes.length === 0) {
      this.split();
    }
    let i = 0;
    while (i < this.objects.length) {
      const length = this.objects.length;
      const object = this.objects.shift();
      this.traverseAndInsert(object);
      if (length === this.objects.length) {
        i++;
      }
    }
  }
  traverseAndInsert(object) {
    const bounds = this.measureBounds(object);
    if (bounds == null) {
      console.warn('Object bounds could not be measured:', object);
      return;
    }
    const quadrantIndex = this.getQuadrantIndex(bounds);
    if (quadrantIndex > -1) {
      this.nodes[quadrantIndex].add(object);
    } else {
      this.objects.push(object);
    }
  }
  add(object) {
    this.traverseAndInsert(object);
    if (this.objects.length > this.maxObjects && this.depth < this.maxDepth) {
      this.redistributeObjects();
    }
  }
  remove(object) {
    const index = this.objects.indexOf(object);
    if (index > -1) {
      this.objects.splice(index, 1);
    } else {
      const bounds = this.measureBounds(object);
      const quadrantIndex = this.getQuadrantIndex(bounds);
      if (quadrantIndex > -1) {
        this.nodes[quadrantIndex].remove(object);
      }
    }
  }
  getObjectsNear(object) {
    const bounds = this.measureBounds(object);
    const quadrantIndex = this.getQuadrantIndex(bounds);
    const results = quadrantIndex > -1 ? this.nodes[quadrantIndex].getObjectsNear(object) : [];
    return results.concat(this.objects);
  }
}
const {
  Object3D: Object3D$d,
  Mesh: Mesh$b,
  PlaneBufferGeometry: PlaneBufferGeometry$6,
  MeshBasicMaterial: MeshBasicMaterial$9
} = self.THREE;
class Collision2DSystem {
  constructor(getCollider = object => object.collider, debug = false) {
    this.debug = debug;
    this.collisionHandlers = new Map();
    this.collidables = new Set();
    this.getCollider = getCollider;
    this.quadTree = null;
    this.collisionDebugLayer = debug ? new Object3D$d() : null;
    this.collisionDebugObjects = debug ? new Map() : null;
    this.collisionDebugBounds = null;
    this.collisionDebugLimit = null;
    this.collisionLimit = null;
  }
  teardown(game) {
    this.quadTree.clear();
    this.collidables.clear();
  }
  set limit(limit) {
    this.collisionLimit = limit;
    if (this.debug) {
      if (this.collisionDebugLimit != null) {
        this.collisionDebugLayer.remove(this.collisionDebugLimit);
      }
      const collisionDebugLimit = new Mesh$b(new PlaneBufferGeometry$6(limit.width, limit.height), new MeshBasicMaterial$9({
        color: 0x00ff00,
        opacity: 0.25,
        transparent: true,
        side: 2
      }));
      this.collisionDebugLayer.add(collisionDebugLimit);
      this.collisionDebugLimit = collisionDebugLimit;
    }
  }
  set bounds(bounds) {
    this.quadTree = new QuadTree(0, bounds, 10, 6, this.getCollider);
    this.collidables.forEach(collidable => this.quadTree.add(collidable));
    if (this.debug) {
      if (this.collisionDebugBounds != null) {
        this.collisionDebugLayer.remove(this.collisionDebugBounds);
      }
      const collisionDebugBounds = new Mesh$b(new PlaneBufferGeometry$6(bounds.width, bounds.height), new MeshBasicMaterial$9({
        color: 0x00ff00,
        opacity: 1.0,
        transparent: true,
        wireframe: true,
        side: 2
      }));
      this.collisionDebugLayer.add(collisionDebugBounds);
      this.collisionDebugBounds = collisionDebugBounds;
    }
  }
  get bounds() {
    return this.quadTree && this.quadTree.bounds;
  }
  handleCollisions(collidable, handler) {
    if (!this.collisionHandlers.has(collidable)) {
      this.collisionHandlers.set(collidable, []);
    }
    this.collisionHandlers.get(collidable).push(handler);
    return () => {
      const handlers = this.collisionHandlers.get(collidable) || [];
      const handlerIndex = handlers.indexOf(handler);
      handlers.splice(handlerIndex, 1);
      if (handlers.length === 0) {
        this.collisionHandlers.delete(collidable);
      }
    };
  }
  addCollidable(collidable) {
    if (!this.collidables.has(collidable)) {
      this.collidables.add(collidable);
      if (this.debug) {
        const collider = this.getCollider(collidable);
        const object = new Mesh$b(new PlaneBufferGeometry$6(collider.width, collider.height), new MeshBasicMaterial$9({
          color: 0x00ff00,
          transparent: true,
          opacity: 0.5,
          side: 2
        }));
        this.collisionDebugObjects.set(collidable, object);
        this.collisionDebugLayer.add(object);
      }
    }
  }
  removeCollidable(collidable) {
    if (this.collidables.has(collidable)) {
      this.collidables.delete(collidable);
      if (this.debug) {
        this.getCollider(collidable);
        const object = this.collisionDebugObjects.get(collidable);
        this.collisionDebugObjects.delete(collidable);
        this.collisionDebugLayer.remove(object);
      }
    }
  }
  notifyCollision(object, other) {
    if (this.collisionHandlers.has(object)) {
      const handlers = this.collisionHandlers.get(object);
      for (let i = 0; i < handlers.length; ++i) {
        handlers[i](object, other);
      }
    }
  }
  update(game) {
    if (this.quadTree == null) {
      return;
    }
    if (this.debug) {
      if (this.collisionDebugLimit && this.collisionLimit) {
        this.collisionDebugLimit.position.x = this.collisionLimit.position.x;
        this.collisionDebugLimit.position.y = this.collisionLimit.position.y;
        this.collisionDebugLimit.position.z = game.mapSystem.grid.cellSize;
      }
      this.collisionDebugObjects.forEach((object, collidable) => {
        const collider = this.getCollider(collidable);
        object.position.x = collider.position.x;
        object.position.y = collider.position.y;
        object.position.z = 2.0;
      });
    }
    const measuredCollisions = {};
    this.quadTree.clearDynamic();
    this.collidables.forEach(collidable => {
      if (!collidable.static) {
        this.quadTree.add(collidable);
      }
    });
    const collisionLimit = this.collisionLimit || this.bounds;
    this.collidables.forEach(collidable => {
      const collider = this.getCollider(collidable);
      if (!collisionLimit.contains(collider)) {
        return;
      }
      const nearbyCollidables = this.quadTree.getObjectsNear(collidable);
      for (let i = 0; i < nearbyCollidables.length; ++i) {
        const nearbyCollidable = nearbyCollidables[i];
        if (nearbyCollidable === collidable) {
          continue;
        }
        const nearbyCollider = this.getCollider(nearbyCollidable);
        let nearbyCollisions = measuredCollisions[nearbyCollidable.uuid];
        if (!nearbyCollisions) {
          nearbyCollisions = {};
          measuredCollisions[nearbyCollidable.uuid] = nearbyCollisions;
        } else if (nearbyCollisions[collidable.uuid]) {
          continue;
        } else {
          nearbyCollisions[collidable.uuid] = true;
        }
        let collidableCollisions = measuredCollisions[collidable.uuid];
        if (collidableCollisions && collidableCollisions[nearbyCollidable.uuid]) {
          continue;
        }
        if (collider.intersects(nearbyCollider)) {
          this.notifyCollision(collidable, nearbyCollidable);
          this.notifyCollision(nearbyCollidable, collidable);
        }
      }
    });
  }
}
const {
  TextureLoader
} = self.THREE;
const loader$1 = new TextureLoader();
const textureMemo = assetPath => {
  let texture;
  return baseUrl => {
    if (texture == null) {
      texture = loader$1.load(`${baseUrl}${assetPath}`);
    }
    return texture;
  };
};
const tiles = textureMemo('img/tiles.png');
const snowball = textureMemo('img/snowball.png');
const parachute = textureMemo('img/parachute.png');
const shieldGift = textureMemo('img/shield-gift.png');
class Component {
  static fromJSON(json) {
    const instance = new this();
    Object.assign(instance, json);
    return instance;
  }
}
class Trail extends Component {
  constructor(size, color, showTest) {
    super();
    this.size = size;
    this.color = color;
    this.showTest = showTest;
  }
}
const {
  Vector2: Vector2$d
} = self.THREE;
class Trajectory extends Component {
  constructor() {
    super();
    this.origin = new Vector2$d();
    this.targetPosition = new Vector2$d();
  }
  get direction() {
    const direction = new Vector2$d();
    direction.subVectors(this.targetPosition, this.origin).normalize();
    return direction;
  }
}
class Presence extends Component {
  constructor() {
    super();
    this.present = true;
    this.exiting = false;
  }
  get exiting() {
    return this.exitTime > -1;
  }
  set exiting(value) {
    if (value === true) {
      if (!this.exiting) {
        this.exitTime = performance.now();
      }
    } else {
      this.exitTime = -1;
    }
  }
  get gone() {
    return !this.present && !this.exiting;
  }
}
const {
  Vector2: Vector2$c
} = self.THREE;
class Splat extends Component {
  constructor(position = new Vector2$c(), direction = new Vector2$c(), size = 40.0, quantity = 5) {
    super();
    this.position = position;
    this.direction = direction;
    this.size = size;
    this.quantity = quantity;
  }
}
const {
  Mesh: Mesh$a,
  Vector2: Vector2$b,
  BoxGeometry,
  MeshBasicMaterial: MeshBasicMaterial$8,
  RawShaderMaterial: RawShaderMaterial$6,
  PlaneBufferGeometry: PlaneBufferGeometry$5
} = self.THREE;
const PI_OVER_TWELVE = Math.PI / 12.0;
const PI_OVER_SIX = Math.PI / 6.0;
const PI_OVER_TWO$2 = Math.PI / 2.0;
const path = new Vector2$b();
const vertexShader$5 = `
precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float random;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying float vRandom;

void main() {
  vUv = uv;
  vRandom = random;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fragmentShader$5 = `
precision highp float;

vec2 rotate2d(float angle, vec2 v){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle)) * v;
}

uniform sampler2D map;
uniform float time;

varying vec2 vUv;
varying float vRandom;

void main() {
  float elapsed = time / (1000.0 + 5000.0 * vRandom);
  vec2 halfUv = vec2(0.5);
  vec2 rUv = rotate2d(elapsed * 3.14159 * 2.0, vUv - halfUv) + halfUv;
  vec4 color = texture2D(map, rUv);

  color -= vec4(0.05, 0.015, 0.0, 0.0) * cos(time / 30.0 * vRandom);

  gl_FragColor = color;
}
`;
const EntityMesh$3 = Entity(Mesh$a);
const AllocatableEntityMesh = Allocatable(EntityMesh$3);
class Snowball extends AllocatableEntityMesh {
  constructor(size = 12) {
    const uniforms = {
      map: {
        value: null
      },
      time: {
        value: 0
      },
      random: {
        value: Math.random()
      }
    };
    super(new PlaneBufferGeometry$5(size, size), new RawShaderMaterial$6({
      uniforms,
      vertexShader: vertexShader$5,
      fragmentShader: fragmentShader$5,
      side: 2,
      transparent: true
    }));
    this.size = size;
    this.uniforms = uniforms;
    this.collider = Circle.allocate(size / 2, this.position);
    this.trail = new Trail(size / 2, 0xaaccff, game => this.thrown);
    this.trajectory = new Trajectory();
    this.splat = new Splat(this.position);
  }
  onAllocated(thrower) {
    this.trajectory.origin.copy(thrower.position);
    this.trajectory.targetPosition.set(0, 0);
    this.thrower = thrower;
    this.visible = false;
    this.thrown = false;
    this.position.copy(this.trajectory.origin);
    this.tickWhenThrown = -1;
    this.skew = 0;
    this.collidedWith = null;
    this.presence = new Presence();
  }
  setup(game) {
    const {
      collisionSystem,
      effectSystem
    } = game;
    if (this.uniforms.map.value == null) {
      this.uniforms.map.value = snowball(game.assetBaseUrl);
    }
    this.unsubscribeFromCollisions = collisionSystem.handleCollisions(this, (snowball, collidable) => {
      if (collidable === this.thrower) {
        return;
      }
      window.santaApp.fire('sound-trigger', 'snowball_hit');
      this.collidedWith = collidable;
      this.visible = false;
    });
    effectSystem.trailEffect.add(this);
  }
  teardown(game) {
    const {
      effectSystem
    } = game;
    if (this.unsubscribeFromCollisions != null) {
      this.unsubscribeFromCollisions();
      this.unsubscribeFromCollisions = null;
    }
    effectSystem.trailEffect.remove(this);
  }
  update(game) {
    this.uniforms.time.value = game.clockSystem.time;
    if (!this.thrown) {
      return;
    } else if (this.tickWhenThrown === -1) {
      this.tickWhenThrown = game.tick;
    } else {
      this.advance(game);
    }
  }
  throwAt(target) {
    if (!this.thrown) {
      this.visible = true;
      this.thrown = true;
      this.trajectory.targetPosition.copy(target);
      this.splat.direction.subVectors(this.trajectory.targetPosition, this.trajectory.origin).normalize();
      this.skew = Math.random() * PI_OVER_SIX - PI_OVER_TWELVE;
    }
  }
  advance(game) {
    const {
      mapSystem
    } = game;
    const {
      grid
    } = mapSystem;
    const {
      trajectory
    } = this;
    const tickDelta = game.preciseTick - this.tickWhenThrown;
    const maxDistance = 256;
    path.subVectors(trajectory.targetPosition, trajectory.origin).clampLength(0, maxDistance);
    const maxAnimationFrames = 42;
    const durationScale = path.length() / maxDistance;
    const duration = maxAnimationFrames * durationScale;
    const time = tickDelta / duration;
    const shotAngle = path.angle();
    const arcScale = Math.abs(shotAngle % Math.PI - PI_OVER_TWO$2) / PI_OVER_TWO$2;
    const arcSize = arcScale * arcScale * Math.sin(time * Math.PI) * 20.0 * durationScale;
    path.multiplyScalar(time).add(trajectory.origin);
    this.position.x = path.x;
    this.position.y = path.y;
    this.position.z = grid.cellSize / 2.0 + arcSize;
    if (tickDelta >= duration) {
      this.presence.exiting = false;
      this.presence.present = false;
    }
  }
  deserialize(object) {
    Object.assign(this, object);
  }
  serialize() {
    return {
      thrown: this.thrown,
      tickWhenThrown: this.tickWhenThrown,
      skew: this.skew,
      target: {
        x: this.target.x,
        y: this.target.y
      },
      position: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
}
class BigSnowball extends Snowball {
  constructor() {
    super(40);
    this.splat.size = 75;
    this.splat.quantity = 7;
    this.trail.size = 10;
  }
}
const powerupType = {
  NOTHING: 0,
  BIG_SNOWBALL: 1,
  SHIELD: 2
};
class Powerups extends Component {
  constructor() {
    super();
    this.primary = null;
    this.secondary = null;
    this.swapped = false;
  }
  swap() {
    this.swapped = !this.swapped;
  }
  get active() {
    return this.swapped ? this.secondary : this.primary;
  }
  set active(value) {
    if (this.swapped) {
      this.secondary = value;
    } else {
      this.primary = value;
    }
    if (this.active == null && this.inactive != null) {
      this.swap();
    }
  }
  get inactive() {
    return this.swapped ? this.primary : this.secondary;
  }
  set inactive(value) {
    if (this.active == null) {
      return;
    }
    if (this.swapped) {
      this.primary = value;
    } else {
      this.secondary = value;
    }
  }
  decrementActiveQuantity() {
    const {
      active
    } = this;
    if (active == null) {
      return;
    }
    active.quantity--;
    if (active.quantity <= 0) {
      this.pop();
    }
  }
  pop() {
    this.active = null;
  }
  collect(type) {
    if (this.active == null) {
      this.active = new Powerup(type);
    } else {
      this.inactive = new Powerup(type);
    }
  }
  copyFromJson(json) {
    this.primary = this.secondary = null;
    if (json.primary != null) {
      this.collect(json.primary.type);
      if (json.secondary != null) {
        this.collect(json.secondary.type);
      }
    }
    this.swapped = json.swapped;
  }
}
class Powerup extends Component {
  constructor(type) {
    super();
    this.type = type;
    this.quantity = 3;
  }
}
const {
  Object3D: Object3D$c,
  Vector2: Vector2$a
} = self.THREE;
new Vector2$a();
const snowballConstructorForType = type => {
  switch (type) {
    default:
    case powerupType.NOTHING:
      return Snowball;
    case powerupType.BIG_SNOWBALL:
      return BigSnowball;
  }
};
class SnowballSystem {
  constructor(drag) {
    this.snowballs = [];
    this.newSnowballs = [];
    this.snowballLayer = new Object3D$c();
    this.drag = drag;
  }
  teardown(game) {
    const snowballs = this.newSnowballs.concat(this.snowballs);
    for (let i = 0; i < snowballs.length; ++i) {
      const snowball = snowballs[i];
      if (snowball.parent != null) {
        this.snowballLayer.remove(snowball);
      }
      snowball.teardown(game);
      snowball.constructor.free(snowball);
    }
    this.snowballs = [];
    this.newSnowballs = [];
  }
  update(game) {
    while (this.newSnowballs.length) {
      this.setupSnowball(this.newSnowballs.pop(), game);
    }
    for (let i = 0; i < this.snowballs.length; ++i) {
      const snowball = this.snowballs[i];
      if (snowball.collidedWith != null) {
        this.removeSnowball(snowball, game);
        continue;
      }
      snowball.update(game);
      if (snowball.thrown && snowball.presence.gone) {
        this.removeSnowball(snowball, game);
      }
    }
  }
  setupSnowball(snowball, game) {
    const {
      collisionSystem
    } = game;
    collisionSystem.addCollidable(snowball);
    this.snowballs.push(snowball);
    this.snowballLayer.add(snowball);
    snowball.setup(game);
  }
  removeSnowball(snowball, game) {
    const {
      collisionSystem,
      effectSystem
    } = game;
    effectSystem.snowsplatEffect.showFor(snowball);
    this.snowballs.splice(this.snowballs.indexOf(snowball), 1);
    this.snowballLayer.remove(snowball);
    collisionSystem.removeCollidable(snowball);
    snowball.teardown(game);
    snowball.constructor.free(snowball);
  }
  throwSnowball(thrower, target) {
    const {
      powerups
    } = thrower;
    const {
      active: powerup
    } = powerups;
    const type = powerup == null ? powerupType.NOTHING : powerup.type;
    powerups.decrementActiveQuantity();
    const SnowballConstructor = snowballConstructorForType(type);
    const snowball = SnowballConstructor.allocate(thrower);
    snowball.throwAt(target);
    this.newSnowballs.push(snowball);
  }
}
const {
  BufferGeometry: BufferGeometry$3,
  BufferAttribute: BufferAttribute$6,
  Points: Points$2,
  RawShaderMaterial: RawShaderMaterial$5,
  Color: Color$1,
  DynamicDrawUsage: DynamicDrawUsage$1
} = self.THREE;
const vertexShader$4 = `
precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

attribute vec3 position;
attribute vec2 uv;
attribute float displayTime;
attribute vec3 color;
attribute float size;

varying vec3 vColor;
varying float vDisplayTime;
varying float vSize;

#define PI 3.14159

void main() {
  vColor = color;
  vDisplayTime = displayTime;
  vSize = size;

  float timeDelta = time - vDisplayTime;
  float elapsed = timeDelta / 700.0;

  float drop = 75.0 - sin(PI / 2.0 + PI / 2.0 * elapsed) * 75.0;
  float scale = 10.0 - elapsed * 7.5;

  gl_PointSize = size * scale;
  gl_Position = projectionMatrix * modelViewMatrix *
      vec4(position.x, position.y - drop, position.z, 1.0);
}
`;
const fragmentShader$4 = `
precision highp float;

uniform float time;

varying vec3 vColor;
varying float vDisplayTime;
varying float vSize;

void main() {
  float timeDelta = time - vDisplayTime;
  float scale = vSize / 6.0;

  if (vDisplayTime <= 0.0 || timeDelta >= 700.0) {
    discard;
  }

  float dist = 0.5 - abs(length(gl_PointCoord - vec2(0.5)));
  float show = dist;

  float fade = timeDelta / (700.0 * scale);

  if (fade > 1.0) {
    discard;
  }

  gl_FragColor = vec4(vColor, (show - fade) / (3.0 * scale));
}
`;
const intermediateColor = new Color$1();
const EntityClass$4 = Entity();
class TrailEffect extends EntityClass$4 {
  constructor() {
    super();
    this.nextAvailableParticle = 0;
    this.maxParticles = 500;
    const positions = new BufferAttribute$6(new Float32Array(this.maxParticles * 3), 3).setUsage(DynamicDrawUsage$1);
    const colors = new BufferAttribute$6(new Float32Array(this.maxParticles * 3), 3).setUsage(DynamicDrawUsage$1);
    const displayTimes = new BufferAttribute$6(new Float32Array(this.maxParticles), 1).setUsage(DynamicDrawUsage$1);
    const sizes = new BufferAttribute$6(new Float32Array(this.maxParticles), 1).setUsage(DynamicDrawUsage$1);
    const uniforms = {
      time: {
        value: 0
      }
    };
    const geometry = new BufferGeometry$3();
    geometry.setAttribute('position', positions);
    geometry.setAttribute('color', colors);
    geometry.setAttribute('displayTime', displayTimes);
    geometry.setAttribute('size', sizes);
    const material = new RawShaderMaterial$5({
      vertexShader: vertexShader$4,
      fragmentShader: fragmentShader$4,
      uniforms,
      transparent: true,
      side: 2,
      depthTest: false
    });
    this.trailedObjects = [];
    this.uniforms = uniforms;
    this.layer = new Points$2(geometry, material);
    this.layer.frustumCulled = false;
  }
  add(object) {
    this.trailedObjects.push(object);
  }
  remove(object) {
    this.trailedObjects.splice(this.trailedObjects.indexOf(object), 1);
  }
  update(game) {
    this.uniforms.time.value = game.clockSystem.time;
    for (let i = 0; i < this.trailedObjects.length; ++i) {
      const object = this.trailedObjects[i];
      const {
        trail
      } = object;
      if (trail && trail.showTest(game)) {
        const particleIndex = this.nextAvailableParticle;
        const {
          attributes
        } = this.layer.geometry;
        const {
          position,
          color,
          displayTime,
          size
        } = attributes;
        position.setXYZ(particleIndex, object.position.x, object.position.y, object.position.z + 1.0);
        intermediateColor.setHex(trail.color);
        color.setXYZ(particleIndex, intermediateColor.r, intermediateColor.g, intermediateColor.b);
        size.setX(particleIndex, trail.size);
        displayTime.setX(particleIndex, game.clockSystem.time);
        position.needsUpdate = color.needsUpdate = size.needsUpdate = displayTime.needsUpdate = true;
        this.nextAvailableParticle = (particleIndex + 1) % this.maxParticles;
      }
    }
  }
}
const constants = `
#define PI 3.1415926536
`;
const rotate2d = `
vec2 rotate2d(float a, vec2 v){
  return mat2(cos(a), -sin(a), sin(a), cos(a)) * v;
}`;
const fade = `
float fade(vec2 tileState, float time) {
  float alpha = 1.0;

  if (tileState.x == 4.0) {
    time -= tileState.y;

    float elapsed = time / 300.0;
    alpha = max(1.0 - elapsed, 0.0);
  }

  return alpha;
}`;
const sink = `
vec3 sink(vec2 tileState, float time, vec3 position) {
  if (tileState.x == 4.0) {
    time -= tileState.y;
    float elapsed = time / 300.0;

    float scale = min(1.0 + elapsed * 0.5, 2.0);
    float translate = pow(time / 50.0, 2.0);

    position.z -= translate;
    position.z /= scale;
  }

  return position;
}
`;
const shake = `
vec3 shake(vec2 tileState, float time, vec3 position) {
  if (tileState.x == 3.0) {
    time -= tileState.y;

    float xOffset = sin(time / 70.0 * PI) * 1.0;

    position.x += xOffset;
  }

  return position;
}`;
const {
  BufferGeometry: BufferGeometry$2,
  BufferAttribute: BufferAttribute$5,
  Points: Points$1,
  RawShaderMaterial: RawShaderMaterial$4,
  DynamicDrawUsage
} = self.THREE;
const vertexShader$3 = `

precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

attribute vec3 position;
attribute float displayTime;
attribute vec2 direction;
attribute float random;
attribute float size;

varying float vDisplayTime;

${constants}
${rotate2d}

void main() {
  vDisplayTime = displayTime;

  float timeDelta = time - vDisplayTime;
  float elapsed = min(timeDelta / 300.0, 1.0);

  float spread = PI / -3.0 * random + PI / 6.0;

  vec2 dist = rotate2d(spread, direction) * fract(random * 7.158) * 85.0 * elapsed;

  dist.y -= pow(3.0 * elapsed, 2.0);

  float halfSize = size / 2.0;
  float eighthSize = size / 8.0;

  gl_PointSize = (halfSize * random + halfSize + eighthSize) * (1.0 - elapsed);
  gl_Position = projectionMatrix * modelViewMatrix *
      vec4(position.xy + dist, position.z, 1.0);
}
`;
const fragmentShader$3 = `
precision highp float;

uniform sampler2D map;
uniform float time;

varying float vDisplayTime;

void main() {
  if (vDisplayTime < 1.0) {
    discard;
  }

  float timeDelta = time - vDisplayTime;
  float elapsed = min(timeDelta / 300.0, 1.0);

  float alpha = elapsed;

  if (alpha >= 1.0) {
    discard;
  }

  vec4 color = texture2D(map, gl_PointCoord);

  if (color.a > 0.5) {
    color.a = alpha;
  }

  gl_FragColor = color;
}
`;
const EntityClass$3 = Entity();
class SnowsplatEffect extends EntityClass$3 {
  constructor() {
    super();
    this.nextAvailableParticle = 0;
    this.maxParticles = 2000;
    const position = new BufferAttribute$5(new Float32Array(this.maxParticles * 3), 3).setUsage(DynamicDrawUsage);
    const direction = new BufferAttribute$5(new Float32Array(this.maxParticles * 2), 2).setUsage(DynamicDrawUsage);
    const displayTime = new BufferAttribute$5(new Float32Array(this.maxParticles), 1).setUsage(DynamicDrawUsage);
    const size = new BufferAttribute$5(new Float32Array(this.maxParticles), 1).setUsage(DynamicDrawUsage);
    const random = new BufferAttribute$5(new Float32Array(this.maxParticles), 1);
    for (let i = 0; i < this.maxParticles; ++i) {
      random.setX(i, Math.random());
    }
    const geometry = new BufferGeometry$2();
    geometry.setAttribute('position', position);
    geometry.setAttribute('direction', direction);
    geometry.setAttribute('displayTime', displayTime);
    geometry.setAttribute('size', size);
    geometry.setAttribute('random', random);
    const uniforms = {
      time: {
        value: 0
      },
      map: {
        value: null
      }
    };
    const material = new RawShaderMaterial$4({
      vertexShader: vertexShader$3,
      fragmentShader: fragmentShader$3,
      uniforms,
      transparent: true,
      depthTest: false,
      side: 2
    });
    this.uniforms = uniforms;
    this.layer = new Points$1(geometry, material);
    this.layer.frustumCulled = false;
    this.splats = [];
  }
  showFor(entity) {
    const {
      splat
    } = entity;
    if (splat == null) {
      return;
    }
    this.splats.push(splat);
  }
  update(game) {
    if (this.uniforms.map.value == null) {
      this.uniforms.map.value = snowball(game.assetBaseUrl);
    }
    this.uniforms.time.value = game.clockSystem.time;
    while (this.splats.length) {
      const splat = this.splats.pop();
      const remainingParticles = this.maxParticles - this.nextAvailableParticle;
      const particleIndex = remainingParticles < splat.quantity ? 0 : this.nextAvailableParticle;
      const {
        position,
        direction,
        displayTime,
        size
      } = this.layer.geometry.attributes;
      for (let i = 0; i < splat.quantity; ++i) {
        const index = particleIndex + i;
        position.setXYZ(index, splat.position.x, splat.position.y, splat.position.z);
        direction.setXY(index, splat.direction.x, splat.direction.y);
        displayTime.setX(index, game.clockSystem.time);
        size.setX(index, splat.size);
      }
      position.needsUpdate = direction.needsUpdate = displayTime.needsUpdate = size.needsUpdate = true;
      this.nextAvailableParticle = (this.nextAvailableParticle + splat.quantity) % this.maxParticles;
    }
  }
}
const {
  BufferGeometry: BufferGeometry$1,
  BufferAttribute: BufferAttribute$4,
  Points,
  RawShaderMaterial: RawShaderMaterial$3,
  AdditiveBlending,
  Object3D: Object3D$b,
  Color
} = self.THREE;
class EffectSystem {
  constructor() {
    this.trailedObjects = [];
    this.effectsLayer = new Object3D$b();
    this.trailEffect = new TrailEffect();
    this.snowsplatEffect = new SnowsplatEffect();
    this.effectsLayer.add(this.trailEffect.layer);
    this.effectsLayer.add(this.snowsplatEffect.layer);
  }
  teardown(game) {
    this.trailEffect.teardown(game);
    this.snowsplatEffect.teardown(game);
  }
  update(game) {
    this.trailEffect.update(game);
    this.snowsplatEffect.update(game);
  }
}
const lod = {
  HIGH: 'high',
  LOW: 'low'
};
class LodSystem {
  static get lod() {
    return lod;
  }
  constructor(getCollider = object => object.collider) {
    this.getCollider = getCollider;
    this.lodEntities = [];
    this.limit = null;
  }
  teardown(game) {
    this.lodEntities = [];
  }
  addEntity(entity) {
    this.lodEntities.push(entity);
  }
  removeEntity(entity) {
    const entityIndex = this.lodEntities.indexOf(entity);
    if (entityIndex > -1) {
      this.lodEntities.splice(entityIndex, 1);
    }
  }
  update(game) {
    if (this.limit == null) {
      return;
    }
    const {
      camera
    } = game;
    this.limit.position.x = camera.position.x;
    this.limit.position.y = camera.position.y * -4 / 3;
    for (let i = 0; i < this.lodEntities.length; ++i) {
      const entity = this.lodEntities[i];
      const bounds = this.getCollider(entity);
      if (bounds == null || this.limit.contains(bounds)) {
        entity.lod = lod.HIGH;
      } else {
        entity.lod = lod.LOW;
      }
    }
  }
}
const {
  Vector3: Vector3$6
} = self.THREE;
class HexCoord extends Vector3$6 {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z);
  }
  get q() {
    return this.x;
  }
  set q(q) {
    this.x = q;
  }
  get r() {
    return this.y;
  }
  set r(r) {
    this.y = r;
  }
  get s() {
    return this.z;
  }
  set s(s) {
    this.z = s;
  }
  toString() {
    return `${this.x},${this.y},${this.z}`;
  }
}
function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}
PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();
    if (a == b) return 0;
    return a > b ? 1 : -1;
  }
};
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');
  return this._elements[0];
};
PriorityQueue.prototype.deq = function () {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();
  if (size === 0) return first;
  this._elements[0] = last;
  var current = 0;
  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;
    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }
    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }
    if (largest === current) break;
    this._swap(largest, current);
    current = largest;
  }
  return first;
};
PriorityQueue.prototype.enq = function (element) {
  var size = this._elements.push(element);
  var current = size - 1;
  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);
    if (this._compare(current, parent) <= 0) break;
    this._swap(parent, current);
    current = parent;
  }
  return size;
};
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};
PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};
PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};
PriorityQueue.prototype._swap = function (a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};
const intermediateHexCoord = new HexCoord();
const intermediateNeighbors = [new HexCoord(), new HexCoord(), new HexCoord(), new HexCoord(), new HexCoord(), new HexCoord()];
const cubicNeighborhood = [new HexCoord(1, -1, 0), new HexCoord(1, 0, -1), new HexCoord(0, 1, -1), new HexCoord(-1, 1, 0), new HexCoord(-1, 0, 1), new HexCoord(0, -1, 1)];
const SQRT_THREE = Math.sqrt(3);
const defaultHeuristic = (() => {
  const toOddq = new HexCoord();
  const currentOddq = new HexCoord();
  return (grid, toIndex, currentIndex) => grid.indexToOddq(toIndex, toOddq).distanceTo(grid.indexToOddq(currentIndex, currentOddq));
})();
const defaultPassable = (grid, currentIndex) => true;
class HexGrid {
  static get SQRT_THREE() {
    return SQRT_THREE;
  }
  static get defaultHeuristic() {
    return defaultHeuristic;
  }
  static get defaultPassable() {
    return defaultPassable;
  }
  static get intermediateHexCoord() {
    return intermediateHexCoord;
  }
  static get intermediateNeighbors() {
    return intermediateNeighbors;
  }
  static get cubicNeighborhood() {
    return cubicNeighborhood;
  }
  constructor(width, height, cellSize) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.cellHeight = HexGrid.SQRT_THREE / 2 * cellSize;
    this.pixelWidth = this.width * this.cellSize * 0.75 + 0.25 * this.cellSize;
    this.pixelHeight = this.height * this.cellHeight + this.cellHeight * 0.5;
  }
  uvToPixel(uv, pixel = new HexCoord()) {
    const {
      x,
      y
    } = uv;
    pixel.x = (x - 0.5 / this.width) * this.pixelWidth;
    pixel.y = (1.0 - y - 0.5 / this.height) * this.pixelHeight;
    return pixel;
  }
  uvToIndex(uv) {
    return this.pixelToIndex(this.uvToPixel(uv, HexGrid.intermediateHexCoord));
  }
  pixelToIndex(pixel) {
    return this.oddqToIndex(this.pixelToOddq(pixel, intermediateHexCoord));
  }
  pixelToOddq(pixel, oddq = new HexCoord()) {
    const size = this.cellSize / 2.0;
    const {
      x,
      y
    } = pixel;
    const q = x * 2 / 3 / size;
    const r = (-x / 3 + SQRT_THREE / 3 * y) / size;
    const s = 0;
    oddq.set(q, r, s);
    return this.roundOddq(oddq);
  }
  pixelToAxial(pixel, axial = new HexCoord()) {
    const size = this.cellSize / 2.0;
    const {
      x,
      y
    } = pixel;
    axial.q = x * 2 / 3 / size;
    axial.r = (-x / 3 + SQRT_THREE / 3 * y) / size;
    axial.s = 0;
    return this.roundAxial(axial);
  }
  indexToCube(index, cube = new HexCoord()) {
    const oddq = this.indexToOddq(index, intermediateHexCoord);
    return this.oddqToCube(oddq, cube);
  }
  indexToOddq(index, oddq = new HexCoord()) {
    oddq.x = Math.floor(index / this.height);
    oddq.y = index % this.height;
    oddq.z = 0;
    return oddq;
  }
  indexToRingIndices(index, radius) {
    return this.cubeToRingIndices(this.indexToCube(index, intermediateHexCoord), radius);
  }
  indexToNeighborIndices(index) {
    return this.cubeToNeighborIndices(this.indexToCube(index, intermediateHexCoord));
  }
  indexToPixel(index, pixel = new HexCoord()) {
    this.indexToOffset(index, pixel);
    pixel.multiplyScalar(this.cellSize);
    return pixel;
  }
  indexToOffset(index, offset = new HexCoord()) {
    return this.cubeToOffset(this.indexToCube(index, offset), offset);
  }
  indexToPosition(index, position = new HexCoord()) {
    const pixel = this.indexToPixel(index, HexGrid.intermediateHexCoord);
    const x = pixel.x - this.pixelWidth / 2;
    const y = -pixel.y + this.pixelHeight / 2;
    position.set(x, y, 0);
    return position;
  }
  cubeToIndex(cube) {
    return this.oddqToIndex(this.cubeToOddq(cube, intermediateHexCoord));
  }
  cubeToOddq(cube, oddq = new HexCoord()) {
    const {
      x,
      y,
      z
    } = cube;
    oddq.q = x;
    oddq.r = z + (x - (x & 1)) / 2;
    oddq.s = 0;
    return oddq;
  }
  cubeToAxial(cube, axial = new HexCoord()) {
    const {
      x,
      z
    } = cube;
    axial.q = x;
    axial.r = z;
    axial.s = 0;
    return axial;
  }
  cubeToRingIndices(cube, radius) {
    if (radius === 0) {
      return [this.cubeToIndex(cube)];
    }
    const ring = [];
    const cursor = cubicNeighborhood[4].clone().multiplyScalar(radius).add(cube);
    for (let i = 0; i < 6; ++i) {
      for (let j = 0; j < radius; ++j) {
        ring.push(this.cubeToIndex(cursor));
        cursor.add(cubicNeighborhood[i]);
      }
    }
    return ring;
  }
  cubeToNeighborCubes(cube, neighbors = []) {
    for (let i = 0; i < cubicNeighborhood.length; ++i) {
      neighbors[i] = neighbors[i] || new HexCoord();
      neighbors[i].addVectors(cube, cubicNeighborhood[i]);
    }
    return neighbors;
  }
  cubeToNeighborIndices(cube) {
    return this.cubeToNeighborCubes(cube, intermediateNeighbors).map(cube => this.cubeToIndex(cube));
  }
  cubeToOffset(cube, offset = new HexCoord()) {
    const scaleX = 0.5;
    const scaleY = 0.5;
    const {
      x,
      z
    } = cube;
    offset.x = 0.5 + 1.5 * x * scaleX;
    offset.y = 0.5 + (HexGrid.SQRT_THREE / 2 * x + HexGrid.SQRT_THREE * z) * scaleY;
    offset.z = 0;
    return offset;
  }
  oddqToIndex(oddq) {
    const {
      q,
      r
    } = oddq;
    if (q > -1 && q < this.width && r > -1 && r < this.height) {
      return q * this.height + r;
    }
    return -1;
  }
  oddqToCube(oddq, cube = new HexCoord()) {
    const {
      q,
      r
    } = oddq;
    cube.x = q;
    cube.z = r - (q - (q & 1)) / 2;
    cube.y = -cube.x - cube.z;
    return cube;
  }
  axialToCube(axial, cube = new HexCoord()) {
    const {
      q,
      r
    } = axial;
    cube.x = q;
    cube.z = r;
    cube.y = -cube.x - cube.z;
    return cube;
  }
  offsetToPosition(offset, position = new Vector3()) {
    const x = offset.x * this.cellSize * 0.75 + 0.25 * this.cellSize - this.pixelWidth / 2;
    const y = -1 * offset.y * this.cellSize * 0.75 - 0.5 * this.cellSize + this.pixelHeight / 2;
    position.x = x;
    position.y = y;
    position.z = y;
    return position;
  }
  positionToIndex(position) {
    const x = (position.x + this.pixelWidth / 2) / this.pixelWidth;
    const y = (position.y + this.pixelHeight / 2) / this.pixelHeight;
    const hexCoord = HexGrid.intermediateHexCoord;
    hexCoord.x = x;
    hexCoord.y = y;
    hexCoord.z = 0;
    return this.uvToIndex(hexCoord);
  }
  roundCube(cube) {
    const rX = Math.round(cube.x);
    const rY = Math.round(cube.y);
    const rZ = Math.round(cube.z);
    const dX = Math.abs(rX - cube.x);
    const dY = Math.abs(rY - cube.y);
    const dZ = Math.abs(rZ - cube.z);
    cube.x = rX;
    cube.y = rY;
    cube.z = rZ;
    if (dX > dY && dX > dZ) {
      cube.x = -rY - rZ;
    } else if (dY > dZ) {
      cube.y = -rX - rZ;
    } else {
      cube.z = -rX - rY;
    }
    return cube;
  }
  roundAxial(axial) {
    const cube = this.axialToCube(axial, intermediateHexCoord);
    const roundedCube = this.roundCube(cube);
    return this.cubeToAxial(roundedCube, axial);
  }
  roundOddq(oddq) {
    intermediateHexCoord.set(oddq.q, -oddq.q - oddq.r, oddq.r);
    const roundedCube = this.roundCube(intermediateHexCoord);
    return this.cubeToOddq(roundedCube, oddq);
  }
  waypoints(fromIndex, toIndex, passable = defaultPassable, heuristic = defaultHeuristic) {
    const path = this.path(fromIndex, toIndex, passable, heuristic);
    const cubes = path.map(index => this.indexToCube(index));
    const waypoints = [];
    const lastDelta = new HexCoord();
    const nextDelta = new HexCoord();
    lastDelta.set(0, 0, 0);
    for (let i = 0; i < path.length; ++i) {
      const cube = cubes[i];
      const nextCube = cubes[i + 1];
      cubes[i + 2];
      if (nextCube != null) {
        nextDelta.subVectors(nextCube, cube);
      }
      if (nextCube == null || !lastDelta.equals(nextDelta)) {
        lastDelta.copy(nextDelta);
        waypoints.push(this.cubeToIndex(cube));
      }
    }
    return waypoints;
  }
  path(fromIndex, toIndex, passable = defaultPassable, heuristic = defaultHeuristic) {
    const frontier = new PriorityQueue((a, b) => b.cost - a.cost);
    const path = [];
    if (!passable(this, toIndex)) {
      return path;
    }
    const cost = new Map();
    const directions = new Map();
    cost.set(fromIndex, 0);
    frontier.enq({
      cost: 0,
      index: fromIndex
    });
    while (frontier.size() > 0) {
      const currentIndex = frontier.deq().index;
      if (currentIndex === toIndex) {
        let index = toIndex;
        do {
          path.unshift(index);
          index = directions.get(index);
        } while (directions.size > 0 && index !== fromIndex);
        path.unshift(fromIndex);
        break;
      }
      const neighborIndices = this.indexToNeighborIndices(currentIndex);
      for (let i = 0; i < neighborIndices.length; ++i) {
        const neighborIndex = neighborIndices[i];
        if (neighborIndex < 0 || neighborIndex == null || !passable(this, neighborIndex)) {
          continue;
        }
        const neighborCost = heuristic(this, toIndex, neighborIndex);
        const previousTotalCost = cost.get(neighborIndex);
        const newTotalCost = cost.get(fromIndex) + neighborCost;
        if (previousTotalCost == null || newTotalCost < previousTotalCost) {
          cost.set(neighborIndex, newTotalCost);
          frontier.enq({
            cost: newTotalCost,
            index: neighborIndex
          });
          directions.set(neighborIndex, currentIndex);
        }
      }
    }
    return path;
  }
}
const {
  Vector2: Vector2$9,
  Vector3: Vector3$5
} = self.THREE;
class MagicHexGrid extends HexGrid {
  constructor(width, height, cellSize, angularScale = 0.8110396639) {
    super(width, height, cellSize);
    this.angularScale = angularScale;
    this.absoluteCellHeight = this.cellHeight * this.angularScale;
    this.absolutePixelHeight = this.height * this.absoluteCellHeight + this.absoluteCellHeight * 0.5;
  }
  hitToIndex(hit) {
    hit.uv;
    return this.uvToIndex(hit.uv);
  }
  hitToPosition(hit) {
    const uv = hit.uv;
    const width = this.pixelWidth;
    const height = this.pixelHeight;
    return new Vector2$9(uv.x * width - width / 2, uv.y * height - height / 2);
  }
  playerWaypointsForMap(player, destination, map) {
    const {
      index,
      position
    } = destination;
    const playerIndex = this.positionToIndex(player.position);
    const tileIsPassable = (grid, currentIndex) => {
      const state = map.getTileState(currentIndex);
      const sprite = map.getTileObstacle(currentIndex);
      return state > 0 && state < 3 && sprite < 0 && state !== 5.0;
    };
    const waypoints = this.waypoints(playerIndex, index, tileIsPassable);
    if (waypoints.length) {
      const path = waypoints.slice(1, waypoints.length - 1).map(index => {
        return this.indexToPosition(index);
      });
      path.push(position);
      return path;
    }
    return waypoints;
  }
}
const {
  Vector2: Vector2$8,
  Mesh: Mesh$9,
  Object3D: Object3D$a,
  MeshBasicMaterial: MeshBasicMaterial$7,
  BufferAttribute: BufferAttribute$3,
  RawShaderMaterial: RawShaderMaterial$2,
  InstancedBufferGeometry: InstancedBufferGeometry$1,
  InstancedBufferAttribute: InstancedBufferAttribute$2,
  PlaneBufferGeometry: PlaneBufferGeometry$4,
  CylinderBufferGeometry: CylinderBufferGeometry$1
} = self.THREE;
const vertexShader$2 = `
precision highp float;

${constants}

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float tileScale;
uniform float time;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 tileOffset;
attribute vec2 tileState;
attribute float tileSprite;

varying vec2 vTileState;
varying vec3 vPosition;
varying vec3 vFinalPosition;
varying float vTileScale;

${rotate2d}
${shake}
${sink}

void main() {


  vec3 offsetPosition = tileOffset * tileScale;

  vec3 scaledPosition = position * (tileScale / 2.0);

  scaledPosition.xy = rotate2d(PI / 2.0, scaledPosition.xy);
  scaledPosition.xz = rotate2d(PI / -2.0, scaledPosition.xz);

  vec3 finalPosition = scaledPosition + offsetPosition;

  if (tileState.x == 5.0 && finalPosition.z > 0.0) {
    finalPosition.z *= 3.0;
  }

  finalPosition = shake(tileState, time, finalPosition);
  finalPosition = sink(tileState, time, finalPosition);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);

  vPosition = position;
  vFinalPosition = finalPosition;
  vTileState = tileState;
  vTileScale = tileScale;
}
`;
const fragmentShader$2 = `
precision highp float;

uniform float time;

varying vec2 vUv;
varying vec2 vTileState;
varying vec3 vPosition;
varying vec3 vFinalPosition;
varying float vTileScale;

${fade}

void main() {

  if (vTileState.x < 1.0) {
    discard;
  }

  float shouldHighlight = vTileState.x == 2.0 ? 1.0 : 0.0;
  float toneScale = 0.15 + abs(sin(time / 300.0)) * 0.15;
  float rScale = 0.45 * toneScale;
  float gScale = 0.75 * toneScale;

  vec3 colorTone = vec3(
      1.0 - shouldHighlight * rScale,
      1.0 - shouldHighlight * gScale,
      1.0);

  vec4 color = vTileState.x == 5.0
      ? vec4(0.94, 0.97, 1.0, 1.0)
      : vec4(1.0, 1.0, 1.0, 1.0);

  if (vPosition.y < 0.5) {
    color = vec4(0.80, 0.87, 0.86, 1.0) + vPosition.y / 7.0;
  }

  float aScale = fade(vTileState, time);

  if (aScale < 0.0) {
    discard;
  }

  gl_FragColor = vec4(color.rgb * colorTone, color.a * aScale);
}
`;
const EntityObject3D$5 = Entity(Object3D$a);
class HexMap extends EntityObject3D$5 {
  constructor() {
    super();
    this._map = null;
    this.pickHandlers = [];
    this.inputSurface = null;
    this.tileCount = 0;
  }
  setup(game) {
    const {
      mapSystem,
      inputSystem
    } = game;
    const {
      grid
    } = mapSystem;
    const uniforms = {
      tileScale: {
        value: grid.cellSize
      },
      time: {
        value: 0
      }
    };
    const geometry = new InstancedBufferGeometry$1();
    const material = new RawShaderMaterial$2({
      vertexShader: vertexShader$2,
      fragmentShader: fragmentShader$2,
      uniforms,
      transparent: true
    });
    const hexGeometry = new CylinderBufferGeometry$1(1, 1, 1, 6);
    grid.width * grid.height;
    Object.assign(geometry.attributes, hexGeometry.attributes);
    geometry.setIndex(hexGeometry.index);
    this.geometry = geometry;
    this.uniforms = uniforms;
    const hexes = new Mesh$9(geometry, material);
    this.hexes = hexes;
    this.hexes.position.x -= grid.pixelWidth / 2.0;
    this.hexes.position.y += grid.pixelHeight / 2.0;
    this.hexes.frustumCulled = false;
    this.add(this.hexes);
    const inputSurface = new Mesh$9(new PlaneBufferGeometry$4(grid.pixelWidth, grid.pixelHeight), new MeshBasicMaterial$7({
      transparent: true,
      visible: false,
      wireframe: false
    }));
    this.inputSurface = inputSurface;
    this.inputSurface.position.z = 8;
    this.inputSurface.position.y = -2;
    this.inputSurface.position.x = 2;
    this.inputSurface.frustumCulled = false;
    this.add(inputSurface);
    this.pickHandlers = [];
    this.unsubscribe = inputSystem.on('pick', event => this.pickHandlers.forEach(handler => handler(event)), this.inputSurface);
  }
  get map() {
    return this._map;
  }
  set map(map) {
    this._map = map;
    const geometry = this.geometry;
    if (map) {
      geometry.setAttribute('tileOffset', map.tileOffsets);
      geometry.setAttribute('tileState', map.tileStates);
    } else {
      geometry.removeAttribute('tileOffset');
      geometry.removeAttribute('tileState');
    }
  }
  teardown(game) {
    this.remove(this.inputSurface);
    this.remove(this.hexes);
    this.unsubscribe();
  }
  update(game) {
    this.uniforms.time.value = performance.now();
  }
  handlePick(handler) {
    this.pickHandlers.push(handler);
    return () => {
      this.pickHandlers.splice(this.pickHandlers.indexOf(handler), 1);
    };
  }
}
const {
  Mesh: Mesh$8,
  Object3D: Object3D$9,
  BufferAttribute: BufferAttribute$2,
  RawShaderMaterial: RawShaderMaterial$1,
  InstancedBufferGeometry,
  InstancedBufferAttribute: InstancedBufferAttribute$1,
  PlaneBufferGeometry: PlaneBufferGeometry$3
} = self.THREE;
const vertexShader$1 = `
precision highp float;

${constants}

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float tileScale;
uniform float time;
uniform float tileHeight;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 tileOffset;
attribute vec2 tileState;
attribute float tileObstacle;

varying vec2 vUv;
varying vec2 vTileState;
varying float vTileObstacle;
varying vec3 vPosition;

${shake}
${sink}

void main() {
  vec3 offsetPosition = tileOffset * tileScale;
  vec3 scaledPosition = position * tileScale;

  scaledPosition.y += tileHeight / 2.0;

  vec3 finalPosition = shake(tileState, time, scaledPosition + offsetPosition);
  finalPosition = sink(tileState, time, finalPosition);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);

  vec2 uvOffset = vec2(mod(tileObstacle, 4.0), (3.0 - floor(tileObstacle / 4.0))) / 4.0;
  vUv = uvOffset + uv / 4.0;
  vPosition = position;
  vTileState = tileState;
  vTileObstacle = tileObstacle;
}
`;
const fragmentShader$1 = `
precision highp float;

uniform float scale;
uniform float time;
uniform sampler2D map;

varying vec2 vUv;
varying vec2 vTileState;
varying float vTileObstacle;
varying vec3 vPosition;

${fade}

void main() {
  if (vTileState.x < 1.0 || vTileObstacle < 0.0) {
    discard;
  }

  vec4 color = texture2D(map, vUv);

  vec2 border = mod(vUv, 0.25);

  #ifdef debug

  if (border.x > 0.0 && border.x < 0.01 || border.x > 0.24 && border.x < 0.25 || border.y > 0.0 && border.y < 0.01 || border.y > 0.24 && border.y < 0.25) {
    color = vec4(1.0, 0.0, 0.0, 0.25);
  }

  #endif

  color.a *= fade(vTileState, time);

  if (color.a < 0.1) {
    discard;
  }

  gl_FragColor = color;
}
`;
const orientationMesh = new Mesh$8();
orientationMesh.rotation.x += Math.PI / 6.0;
orientationMesh.updateMatrix();
const EntityObject3D$4 = Entity(Object3D$9);
class Obstacles extends EntityObject3D$4 {
  setup(game) {
    const {
      mapSystem
    } = game;
    const {
      grid
    } = mapSystem;
    const uniforms = {
      time: {
        value: 0
      },
      map: {
        value: tiles(game.assetBaseUrl)
      },
      tileScale: {
        value: grid.cellSize
      },
      tileHeight: {
        value: grid.cellHeight
      }
    };
    const planeGeometry = new PlaneBufferGeometry$3(2.0, 2.0);
    const geometry = new InstancedBufferGeometry();
    const material = new RawShaderMaterial$1({
      vertexShader: vertexShader$1,
      fragmentShader: fragmentShader$1,
      uniforms,
      transparent: true
    });
    planeGeometry.applyMatrix(orientationMesh.matrix);
    Object.assign(geometry.attributes, planeGeometry.attributes);
    geometry.setIndex(planeGeometry.index);
    this.geometry = geometry;
    const mesh = new Mesh$8(geometry, material);
    mesh.position.x -= grid.pixelWidth / 2.0;
    mesh.position.y += grid.pixelHeight / 2.0;
    mesh.position.z = grid.cellSize * 0.75;
    mesh.frustumCulled = false;
    this.add(mesh);
    this.mesh = mesh;
    this.uniforms = uniforms;
  }
  update(game) {
    this.uniforms.time.value = performance.now();
  }
  get map() {
    return this._map;
  }
  set map(map) {
    this._map = map;
    const geometry = this.geometry;
    if (map) {
      geometry.setAttribute('tileOffset', map.tileOffsets);
      geometry.setAttribute('tileState', map.tileStates);
      geometry.setAttribute('tileObstacle', map.tileObstacles);
    } else {
      geometry.removeAttribute('tileOffset');
      geometry.removeAttribute('tileState');
      geometry.removeAttribute('tileObstacle');
    }
  }
}
class SeedRandom {
  constructor(seed = 0x2F6E2B1) {
    this.seed = seed;
  }
  clone() {
    return new SeedRandom(this.seed);
  }
  random() {
    return this.randInt() / 0x10000000;
  }
  randInt() {
    let s = this.seed;
    s = s + 0x7ED55D16 + (s << 12) & 0xFFFFFFFF;
    s = (s ^ 0xC761C23C ^ s >>> 19) & 0xFFFFFFFF;
    s = s + 0x165667B1 + (s << 5) & 0xFFFFFFFF;
    s = (s + 0xD3A2646C ^ s << 9) & 0xFFFFFFFF;
    s = s + 0xFD7046C5 + (s << 3) & 0xFFFFFFFF;
    s = (s ^ 0xB55A4F09 ^ s >>> 16) & 0xFFFFFFFF;
    this.seed = s;
    return s & 0xFFFFFFF;
  }
  randRange(low, high = undefined) {
    if (high === undefined) {
      return this.randRange(0, low);
    }
    return low + ~~((high - low) * this.random());
  }
}
const treeTypes = 4;
const {
  BufferAttribute: BufferAttribute$1,
  InstancedBufferAttribute
} = self.THREE;
class GameMap {
  constructor(grid, seed, treeDensity = 0.15) {
    const seedRandom = this.seedRandom = new SeedRandom(seed);
    this.erodeSeedRandom = seedRandom.clone();
    this.erodeStep = 0;
    const tileCount = grid.width * grid.height;
    const tileStates = new InstancedBufferAttribute(new Float32Array(tileCount * 2), 2, false, 1);
    const tileOffsets = new InstancedBufferAttribute(new Float32Array(tileCount * 3), 3, false, 1);
    const tileObstacles = new InstancedBufferAttribute(new Float32Array(tileCount), 1, false, 1);
    const oddq = new HexCoord();
    const halfSize = new HexCoord(grid.width / 2.0, grid.height / 2.0, 0);
    const intermediateHexCoord = new HexCoord();
    oddq.set(grid.width, grid.height, 0.0);
    const maxMag = oddq.length() / 2.0;
    const erosionMag = maxMag * 0.65;
    const tileRings = [];
    let passableTileCount = 0;
    for (let q = 0; q < grid.width; ++q) {
      for (let r = 0; r < grid.height; ++r) {
        oddq.set(q, r, 0);
        const mag = intermediateHexCoord.subVectors(oddq, halfSize).length();
        const magDelta = Math.abs(erosionMag - mag);
        const index = grid.oddqToIndex(oddq);
        const offset = grid.indexToOffset(index, oddq);
        const erosionChance = 0.5 + magDelta / erosionMag;
        const state = mag > erosionMag ? seedRandom.random() < erosionChance ? 0.0 : 1.0 : 1.0;
        const obstacle = seedRandom.random() < treeDensity ? seedRandom.randRange(treeTypes) : -1.0;
        if (state > 0.0) {
          const ringIndex = Math.floor(mag);
          tileRings[ringIndex] = tileRings[ringIndex] || [];
          tileRings[ringIndex].push(index);
        }
        if (state === 1.0) {
          passableTileCount++;
        }
        tileStates.setXY(index, state, 0.0);
        tileOffsets.setXYZ(index, offset.x, -offset.y, 0.0);
        tileObstacles.setX(index, obstacle);
      }
    }
    this.passableTileCount = passableTileCount;
    this.initialPassableTileCount = passableTileCount;
    this.tileCount = tileCount;
    this.tileRings = tileRings;
    this.tileStates = tileStates;
    this.tileOffsets = tileOffsets;
    this.tileObstacles = tileObstacles;
    this.grid = grid;
    this._generateRaisedTiles(seedRandom);
    this.mainIsland = this._computeMainIsland();
  }
  _generateRaisedTiles(seedRandom) {
    const grid = this.grid;
    const frontier = [];
    const visited = new Set();
    const maxIterations = Math.floor(this.tileCount / 64.0);
    for (let i = 0; i < maxIterations; ++i) {
      let index = -1;
      let state = -1;
      let attempts = 10;
      do {
        index = seedRandom.randRange(this.tileCount);
        state = this.getTileState(index);
        if (! --attempts) {
          return;
        }
      } while (state !== 1);
      let size = 0;
      frontier.push(index);
      while (frontier.length > 0 && size < 5.0) {
        const currentIndex = frontier.pop();
        const state = this.getTileState(currentIndex);
        const obstacle = this.getTileObstacle(currentIndex);
        if (seedRandom.random() > 0.5 && !visited.has(currentIndex) && obstacle === -1 && state === 1.0) {
          this.setTileState(currentIndex, 5.0);
          visited.add(currentIndex);
          size++;
          const neighborIndices = grid.indexToNeighborIndices(currentIndex);
          for (let i = 0; i < neighborIndices.length; i++) {
            const neighborIndex = neighborIndices[i];
            frontier.push(neighborIndex);
          }
        }
      }
      frontier.splice(0, frontier.length - 1);
    }
  }
  erode() {
    const maxErodedTiles = Math.ceil(this.tileRings.length / 5) * 3.0;
    const numberOfTiles = this.erodeSeedRandom.randRange(maxErodedTiles);
    for (let i = 0; i < numberOfTiles; ++i) {
      const ring = this.tileRings[this.tileRings.length - 1];
      if (ring == null) {
        this.tileRings.pop();
        continue;
      }
      const ringIndex = this.erodeSeedRandom.randRange(ring.length);
      const index = ring[ringIndex];
      const state = this.getTileState(index);
      if (state === 1.0) {
        this.passableTileCount--;
      }
      if (state === 1.0 || state === 5.0) {
        this.setTileState(index, 3.0);
      } else if (state === 3.0) {
        ring.splice(ringIndex, 1);
        this.setTileState(index, 4.0);
      }
      if (!ring.length) {
        this.tileRings.pop();
      }
    }
  }
  getRandomNearbyPassableTileIndex(index, maxRadius, random = this.seedRandom) {
    const radius = Math.floor(Math.random() * (maxRadius - 1)) + 1;
    const ring = this.grid.indexToRingIndices(index, radius);
    while (ring.length) {
      const ringIndex = Math.floor(Math.random() * ring.length);
      const tileIndex = ring[ringIndex];
      this.getTileState(tileIndex);
      if (this.getTileState(index) === 1.0 && this.getTileObstacle(index) === -1.0) {
        return tileIndex;
      }
      ring.splice(ringIndex, 1);
    }
    return index;
  }
  isTraversable(index) {
    if (index < 0 || index >= this.tileCount) {
      return false;
    }
    return this.getTileState(index) === 1.0 && this.getTileObstacle(index) === -1.0;
  }
  _computeMainIsland() {
    const grid = this.grid;
    const center = new HexCoord(Math.floor(grid.width / 2), Math.floor(grid.height / 2), 0);
    let startIndex = grid.oddqToIndex(center);
    for (let radius = 1; !this.isTraversable(startIndex) && radius < Math.max(grid.width, grid.height); ++radius) {
      const ring = grid.cubeToRingIndices(grid.oddqToCube(center, new HexCoord()), radius);
      for (let i = 0; i < ring.length; ++i) {
        if (this.isTraversable(ring[i])) {
          startIndex = ring[i];
          break;
        }
      }
    }
    const mainIsland = new Set();
    if (!this.isTraversable(startIndex)) {
      return mainIsland;
    }
    const frontier = [startIndex];
    mainIsland.add(startIndex);
    while (frontier.length) {
      const neighborIndices = grid.indexToNeighborIndices(frontier.pop());
      for (let i = 0; i < neighborIndices.length; ++i) {
        const neighborIndex = neighborIndices[i];
        if (mainIsland.has(neighborIndex) || !this.isTraversable(neighborIndex)) {
          continue;
        }
        mainIsland.add(neighborIndex);
        frontier.push(neighborIndex);
      }
    }
    return mainIsland;
  }
  getRandomHabitableTileIndex(random = this.seedRandom) {
    for (let i = 0; i < this.tileCount; ++i) {
      if (this.tileRings.length === 0) {
        break;
      }
      const minRingIndex = Math.floor(this.tileRings.length / 4);
      const maxRingIndex = Math.max(2.0, this.tileRings.length - 10);
      const ringIndex = random.randRange(minRingIndex, maxRingIndex);
      const ring = this.tileRings[ringIndex];
      if (ring == null || ring.length === 0) {
        continue;
      }
      const tileIndex = random.randRange(ring.length);
      const index = ring[tileIndex];
      if (this.isTraversable(index) && this.mainIsland.has(index)) {
        return index;
      }
    }
    console.warn('No habitable tile index found!');
  }
  setTileObstacle(index, sprite) {
    const tileObstacles = this.tileObstacles;
    tileObstacles.setX(index, sprite);
    tileObstacles.needsUpdate = true;
  }
  getTileObstacle(index) {
    return this.tileObstacles.getX(index);
  }
  setTileState(index, state) {
    const tileStates = this.tileStates;
    tileStates.setXY(index, state, performance.now());
    tileStates.needsUpdate = true;
  }
  getTileState(index) {
    return this.tileStates.getX(index);
  }
}
const {
  Math: Math$2
} = self.THREE;
const EntityClass$2 = Entity();
class Tree extends EntityClass$2 {
  constructor(tileIndex, position) {
    super();
    this.tileIndex = tileIndex;
    this.position = position;
    this.position.y += 15;
    this.static = true;
    this.uuid = Math$2.generateUUID();
    this.collider = null;
  }
  setup(game) {
    this.collider = Circle.allocate(14, this.position);
  }
  teardown(game) {
    Circle.free(this.collider);
    this.collider = null;
  }
}
const {
  Math: Math$1
} = self.THREE;
const EntityClass$1 = Entity();
class RaisedTile extends EntityClass$1 {
  constructor(tileIndex, position, radius) {
    super();
    this.tileIndex = tileIndex;
    this.position = position;
    this.radius = radius;
    this.static = true;
    this.uuid = Math$1.generateUUID();
    this.collider = null;
  }
  setup(game) {
    this.collider = Circle.allocate(this.radius, this.position);
  }
  teardown(game) {
    Circle.free(this.collider);
    this.collider = null;
  }
}
const {
  Mesh: Mesh$7,
  ShapeBufferGeometry: ShapeBufferGeometry$1,
  Shape: Shape$1,
  Path: Path$2,
  MeshBasicMaterial: MeshBasicMaterial$6
} = self.THREE;
const EntityMesh$2 = Entity(Mesh$7);
class DestinationMarker extends EntityMesh$2 {
  constructor(size = 10.0, color = 0x22cc88) {
    const x = new Shape$1();
    const armWidth = size / 3.0;
    const halfArmWidth = armWidth / 2.0;
    const armLength = size / 2.0;
    x.moveTo(-halfArmWidth, halfArmWidth);
    x.lineTo(-armLength, halfArmWidth);
    x.lineTo(-armLength, -halfArmWidth);
    x.lineTo(-halfArmWidth, -halfArmWidth);
    x.lineTo(-halfArmWidth, -armLength);
    x.lineTo(halfArmWidth, -armLength);
    x.lineTo(halfArmWidth, -halfArmWidth);
    x.lineTo(armLength, -halfArmWidth);
    x.lineTo(armLength, halfArmWidth);
    x.lineTo(halfArmWidth, halfArmWidth);
    x.lineTo(halfArmWidth, armLength);
    x.lineTo(-halfArmWidth, armLength);
    x.lineTo(-halfArmWidth, halfArmWidth);
    super(new ShapeBufferGeometry$1(x), new MeshBasicMaterial$6({
      side: 2,
      color,
      opacity: 0.5,
      transparent: true,
      depthTest: false
    }));
  }
  setup(game) {
    const {
      mapSystem
    } = game;
    const {
      grid
    } = mapSystem;
    this.rotation.z = Math.PI / 4.0;
    this.position.z = grid.cellSize * 0.5;
    this.visible = false;
  }
}
const {
  Object3D: Object3D$8
} = self.THREE;
new DestinationMarker();
class MapSystem {
  constructor(unitWidth = 32, unitHeight = 32, tileScale = 32) {
    this.grid = new MagicHexGrid(unitWidth, unitHeight, tileScale);
    this.map = null;
    this.mapLayer = new Object3D$8();
    this.hexMap = new HexMap();
    this.obstacles = new Obstacles();
    this.obstacleCollidables = new Set();
    this.destinationMarker = new DestinationMarker();
    const gimbal = new Object3D$8();
    gimbal.rotation.x = 4 * Math.PI / 5;
    gimbal.add(this.hexMap);
    gimbal.add(this.obstacles);
    gimbal.add(this.destinationMarker);
    this.mapLayer.add(gimbal);
    this.gimbal = gimbal;
    this.mapLayer.add(gimbal);
    this.pickHandlers = [];
    this.didSetup = false;
  }
  resize(unitWidth, unitHeight, tileScale) {
    if (this.didSetup) {
      console.warn('MapSystem.resize called after setup; the map geometry is already ' + 'built at the old size and will not match the new grid.');
      return;
    }
    this.grid = new MagicHexGrid(unitWidth, unitHeight, tileScale);
  }
  teardown(game) {
    this.hexMap.teardown(game);
  }
  handleMapPick(handler) {
    this.pickHandlers.push(handler);
    return () => {
      const index = this.pickHandlers.indexOf(handler);
      this.pickHandlers.splice(index, 1);
    };
  }
  onMapPicked(event) {
    const hit = event.detail.hits.get(this.hexMap.inputSurface)[0];
    const index = this.grid.hitToIndex(hit);
    const position = this.grid.hitToPosition(hit);
    const pickEvent = {
      index,
      position
    };
    this.pickHandlers.forEach(handler => {
      handler(pickEvent);
    });
  }
  setup(game) {
    this.didSetup = true;
    this.obstacles.setup(game);
    this.destinationMarker.setup(game);
    this.hexMap.setup(game);
    this.hexMap.handlePick(event => this.onMapPicked(event));
  }
  update(game) {
    const {
      clientSystem
    } = game;
    const {
      player: clientPlayer
    } = clientSystem;
    this.obstacles.update(game);
    this.hexMap.update(game);
    this.removeErodedObstacleCollidables(game);
    if (!clientPlayer) {
      return;
    }
    const destinationReached = clientPlayer.path.destinationReached;
    const showMarker = !destinationReached && clientSystem.destinationFromPointer;
    if (this.destinationMarker.visible !== showMarker) {
      this.destinationMarker.visible = showMarker;
    }
    if (showMarker) {
      this.destinationMarker.position.x = clientPlayer.path.destination.x;
      this.destinationMarker.position.y = clientPlayer.path.destination.y - 20.0;
    }
  }
  rebuildMap(game, seed) {
    this.obstacleCollidables.forEach(tree => {
      game.collisionSystem.removeCollidable(tree);
    });
    const treeDensity = game.gameMode != null ? game.gameMode.treeDensity : undefined;
    this.map = new GameMap(this.grid, seed, treeDensity);
    this.hexMap.map = this.map;
    this.obstacles.map = this.map;
    this.obstacleCollidables = new Set();
    Array.from(this.map.tileObstacles.array).forEach((obstacle, index) => {
      if (obstacle < 0) {
        return;
      }
      const position = this.grid.indexToPosition(index);
      position.y -= this.grid.cellSize / 2.0;
      const tree = new Tree(index, position);
      tree.setup(game);
      game.collisionSystem.addCollidable(tree);
      this.obstacleCollidables.add(tree);
    });
    const raisedTileRadius = this.grid.cellHeight / 2.0;
    for (let index = 0; index < this.map.tileCount; ++index) {
      if (this.map.getTileState(index) !== 5.0) {
        continue;
      }
      const raisedTile = new RaisedTile(index, this.grid.indexToPosition(index), raisedTileRadius);
      raisedTile.setup(game);
      game.collisionSystem.addCollidable(raisedTile);
      this.obstacleCollidables.add(raisedTile);
    }
  }
  removeErodedObstacleCollidables(game) {
    if (this.map == null) {
      return;
    }
    this.obstacleCollidables.forEach(obstacle => {
      const tileState = this.map.getTileState(obstacle.tileIndex);
      if (tileState === 1.0 || tileState === 2.0 || tileState === 5.0) {
        return;
      }
      game.collisionSystem.removeCollidable(obstacle);
      this.obstacleCollidables.delete(obstacle);
      obstacle.teardown(game);
    });
  }
}
class Arrival extends Component {
  constructor(tileIndex) {
    super();
    this.droppedTick = Infinity;
    this.arrived = false;
    this.tileIndex = tileIndex;
  }
  isDropping() {
    return this.droppedTick < Infinity && !this.arrived;
  }
  droppedAt(tick) {
    this.droppedTick = tick;
  }
  arrive() {
    this.arrived = true;
  }
}
class Health extends Component {
  constructor() {
    super();
    this.lastAliveTime = -1;
  }
  get alive() {
    return this.lastAliveTime < 0;
  }
  set alive(value) {
    if (value === false) {
      if (this.alive) {
        this.lastAliveTime = performance.now();
      }
    } else {
      this.lastAliveTime = -1;
    }
  }
  get dead() {
    return !this.alive;
  }
  revive() {
    this.lastAliveTime = -1;
  }
}
class Path$1 extends Component {
  constructor() {
    super();
    this.destination = null;
    this.waypoints = [];
  }
  follow(waypoints) {
    this.destination = waypoints[waypoints.length - 1];
    this.waypoints = waypoints;
  }
  get nextWaypoint() {
    return this.waypoints[0];
  }
  get destinationReached() {
    return this.waypoints.length === 0;
  }
}
const shieldDuration = 3000;
class Shield extends Component {
  constructor() {
    super();
    this.expiresAt = -1;
  }
  activate(duration = shieldDuration) {
    this.expiresAt = performance.now() + duration;
  }
  get active() {
    return this.expiresAt >= 0 && performance.now() < this.expiresAt;
  }
  get remaining() {
    if (this.expiresAt < 0) {
      return 0;
    }
    const left = this.expiresAt - performance.now();
    return left > 0 ? left : 0;
  }
  get progress() {
    return this.remaining / shieldDuration;
  }
}
class Speed {
  constructor(scale = 1.0) {
    this.scale = scale;
  }
}
class Visibility extends Component {
  constructor() {
    super();
    this.opacity = 1.0;
  }
}
const {
  GLTFLoader,
  AnimationMixer,
  AnimationClip,
  Skeleton,
  LoopOnce,
  SkeletonUtils
} = self.THREE;
const loader = new GLTFLoader();
const cloneGltf = gltf => {
  const clonedScene = SkeletonUtils.clone(gltf.scene);
  return {
    ...gltf,
    scene: clonedScene
  };
};
class Model {
  constructor(gltf) {
    this.object = gltf.scene;
    this.object.updateMatrixWorld();
    this.animations = gltf.animations;
    this.animationMixer = new AnimationMixer(this.object.children[0]);
    this.playing = false;
    this.currentAction = null;
    this.mixedAnimationActions = {};
    this.mixedAnimationCount = 0;
  }
  getClip(animationName) {
    return AnimationClip.findByName(this.animations, animationName);
  }
  getAction(animationName) {
    const clip = this.getClip(animationName);
    const action = this.animationMixer.clipAction(clip);
    return action;
  }
  play(animationName) {
    if (animationName === this.playing) {
      return;
    }
    if (this.currentAction) {
      this.currentAction.setEffectiveWeight(0);
    }
    this.animationMixer.stopAllAction();
    const action = this.getAction(animationName);
    if (action != null) {
      action.setEffectiveWeight(1.0);
      action.reset().play();
      this.playing = animationName;
      this.playTime = performance.now();
    } else {
      console.warn('No such animation clip:', animationName);
    }
    this.currentAction = action;
    return action;
  }
  playOnce(animationName) {
    const action = this.play(animationName);
    if (action != null) {
      action.loop = LoopOnce;
      action.repititions = 0;
      action.clampWhenFinished = true;
    }
    return action;
  }
  mixOnce(animationName) {
    const clip = this.getClip(animationName);
    const existingAction = this.animationMixer.existingAction(clip);
    if (existingAction != null && existingAction.isRunning()) {
      existingAction.stop();
    }
    this.mixedAnimationCount++;
    const action = this.animationMixer.clipAction(clip);
    action.loop = LoopOnce;
    action.repititions = 0;
    action.reset().play();
    action.zeroSlopeAtEnd = true;
    action.clampWhenFinished = true;
    action.timeScale = 1.75;
    const currentAction = this.currentAction;
    if (currentAction != null) {
      currentAction.weight = 0;
    }
    const onFinished = event => {
      if (event.action === action) {
        this.animationMixer.removeEventListener('finished', onFinished);
        action.fadeOut(0.25);
        currentAction.setEffectiveWeight(1.0).fadeIn(0.25);
        if (currentAction !== this.currentAction && this.currentAction.weight < 1.0) {
          this.currentAction.setEffectiveWeight(1.0).fadeIn(0.25).play();
        }
      }
    };
    this.animationMixer.addEventListener('finished', onFinished);
  }
  update(game) {
    if (this.playing) {
      const frameTime = performance.now();
      this.animationMixer.update((frameTime - this.playTime) / 1000.0);
      this.playTime = frameTime;
    }
  }
}
const createElf = (() => {
  const loadGltf = (() => {
    let gltfLoads;
    return assetBaseUrl => {
      if (gltfLoads == null) {
        gltfLoads = new Promise(resolve => {
          loader.load(`${assetBaseUrl}models/elf-animated.gltf`, gltf => resolve(gltf));
        });
      }
      return gltfLoads;
    };
  })();
  return (assetBaseUrl, majorColor, minorColor, gender) => {
    return loadGltf(assetBaseUrl).then(gltf => new Model(cloneGltf(gltf)));
  };
})();
const {
  CanvasTexture,
  Sprite,
  SpriteMaterial
} = self.THREE;
const bubbleDiameter = 58.0;
const minimumOpacity$1 = 0.3;
const maximumOpacity$1 = 1.0;
const maximumScale$1 = 1.12;
const bubbleTexture = (() => {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  const half = size / 2.0;
  const body = context.createRadialGradient(half, half, 0, half, half, half);
  body.addColorStop(0.00, 'rgba(255, 255, 255, 0.00)');
  body.addColorStop(0.55, 'rgba(150, 240, 200, 0.05)');
  body.addColorStop(0.86, 'rgba(92, 216, 162, 0.22)');
  body.addColorStop(0.96, 'rgba(52, 190, 132, 0.52)');
  body.addColorStop(1.00, 'rgba(52, 190, 132, 0.00)');
  context.fillStyle = body;
  context.fillRect(0, 0, size, size);
  const highlightX = size * 0.34;
  const highlightY = size * 0.30;
  const highlightRadius = size * 0.17;
  const highlight = context.createRadialGradient(highlightX, highlightY, 0, highlightX, highlightY, highlightRadius);
  highlight.addColorStop(0.0, 'rgba(255, 255, 255, 0.55)');
  highlight.addColorStop(1.0, 'rgba(255, 255, 255, 0.00)');
  context.fillStyle = highlight;
  context.fillRect(0, 0, size, size);
  return new CanvasTexture(canvas);
})();
const materialTemplate$1 = new SpriteMaterial({
  map: bubbleTexture,
  transparent: true,
  opacity: maximumOpacity$1,
  depthTest: false,
  depthWrite: false
});
const EntitySprite = Entity(Sprite);
class ShieldBubble extends EntitySprite {
  constructor() {
    super(materialTemplate$1.clone());
    this.visible = false;
    this.progress = 0.0;
  }
  set progress(value) {
    const clamped = value < 0.0 ? 0.0 : value > 1.0 ? 1.0 : value;
    const scale = bubbleDiameter * (maximumScale$1 - (maximumScale$1 - 1.0) * clamped);
    this.scale.set(scale, scale, 1.0);
    this.material.opacity = minimumOpacity$1 + (maximumOpacity$1 - minimumOpacity$1) * clamped;
  }
}
const {
  Mesh: Mesh$6,
  ShapeBufferGeometry,
  Shape,
  Path,
  MeshBasicMaterial: MeshBasicMaterial$5
} = self.THREE;
const EntityMesh$1 = Entity(Mesh$6);
class PlayerMarker extends EntityMesh$1 {
  constructor(radius = 15.0, thickness = 4.0, color = 0xea4335, chevron = false) {
    const arc = new Shape();
    arc.moveTo(0, 0);
    arc.absarc(0, 0, radius, 0, Math.PI * 2, false);
    const hole = new Path();
    hole.moveTo(0, 0);
    hole.absarc(0, 0, radius - thickness, 0, Math.PI * 2, true);
    arc.holes.push(hole);
    const shapes = [arc];
    if (chevron) {
      shapes.push(buildChevron(radius));
    }
    super(new ShapeBufferGeometry(shapes), new MeshBasicMaterial$5({
      color,
      opacity: 0.72,
      transparent: true
    }));
  }
}
const buildChevron = radius => {
  const base = radius + 2.5;
  const tip = base + 8.0;
  const halfWidth = 7.0;
  const notch = 3.0;
  const chevron = new Shape();
  chevron.moveTo(0, -tip);
  chevron.lineTo(-halfWidth, -base);
  chevron.lineTo(0, -(base + notch));
  chevron.lineTo(halfWidth, -base);
  chevron.lineTo(0, -tip);
  return chevron;
};
const {
  Mesh: Mesh$5,
  MeshBasicMaterial: MeshBasicMaterial$4,
  PlaneBufferGeometry: PlaneBufferGeometry$2,
  Object3D: Object3D$7,
  Vector2: Vector2$7
} = self.THREE;
const intermediateVector2$5 = new Vector2$7();
const PI_OVER_TWO$1 = Math.PI / 2.0;
const PI_OVER_TWO_POINT_TWO_FIVE = Math.PI / 2.25;
const majorColors = ['#84488F', '#D55040', '#4DB1E9', '#55AB57', '#56BBCA', '#BC3EB4'];
const minorColors = ['#E7C241', '#936644', '#B8906D', '#DBBC99'];
const hairColors = ['#2F3030', '#7C4149', '#AB2923', '#EA9639'];
const generateElfTexture = (() => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const TWO_PI = Math.PI * 2.0;
  const cache = {};
  canvas.width = canvas.height = 512;
  return (majorColor, minorColor, hairColor = '#fff', ponytail = true) => {
    const cacheKey = `${majorColor}_${minorColor}`;
    if (cache[cacheKey] != null) {
      return cache[cacheKey];
    }
    const hairColorPosition = ponytail ? 0 : 128;
    context.clearRect(0, 0, hairColorPosition, 153);
    context.fillStyle = hairColor;
    context.fillRect(hairColorPosition, 0, 256 - hairColorPosition, 153);
    context.fillStyle = '#fff';
    context.fillRect(256, 0, 256, 153);
    context.fillStyle = minorColor;
    context.fillRect(0, 153, 512, 174);
    context.fillStyle = majorColor;
    context.fillRect(0, 327, 512, 140);
    context.fillStyle = '#333';
    context.fillRect(0, 467, 512, 45);
    context.arc(44, 207, 21, 0, TWO_PI);
    context.arc(150, 207, 21, 0, TWO_PI);
    context.fill();
    context.fillStyle = '#F9D448';
    context.fillRect(252, 460, 60, 52);
    const image = document.createElement('img');
    image.src = canvas.toDataURL();
    cache[cacheKey] = image;
    return image;
  };
})();
const clientPlayerMarker = new PlayerMarker(15.0, 4.0, 0xea4335, true);
const EntityObject3D$3 = Entity(Object3D$7);
const AllocatableEntityObject3D$3 = Allocatable(EntityObject3D$3);
class Elf extends AllocatableEntityObject3D$3 {
  static fromJson(json) {
    const elf = Elf.allocate(json.id, json.arrival.tileIndex);
    elf.position.copy(json.position);
    Object.assign(elf.health, json.health);
    Object.assign(elf.arrival, json.arrival);
    Object.assign(elf.presence, json.presence);
    elf.powerups.copyFromJson(json.powerups);
    return elf;
  }
  randomizeColors() {
    const material = this.elf.children[1].material;
    material.map.image = generateElfTexture(randomElement(majorColors), randomElement(minorColors));
    material.map.needsUpdate = true;
  }
  ensureCorrectTextureImage() {
    if (this.elf != null) {
      this.elf.children[1].material.map.image = this.textureImage;
      this.elf.children[1].material.map.needsUpdate = true;
      this.elf.children[1].material.needsUpdate = true;
    }
  }
  clone() {
    return Elf.allocate(this.playerId, this.majorColor, this.minorColor, this.gender);
  }
  constructor() {
    super();
    this.modelInitialized = false;
    const hitTarget = new Mesh$5(new PlaneBufferGeometry$2(100, 100), new MeshBasicMaterial$4({
      color: 0xff0000,
      opacity: 0.5,
      visible: false,
      side: 2,
      transparent: true,
      wireframe: false
    }));
    this.add(hitTarget);
    this.hitTarget = hitTarget;
    const dolly = new Object3D$7();
    this.add(dolly);
    this.dolly = dolly;
    const shieldBubble = new ShieldBubble();
    shieldBubble.position.y = 20.0;
    dolly.add(shieldBubble);
    this.shieldBubble = shieldBubble;
    this.path = null;
    this.lod = lod.LOW;
    this.collider = Rectangle.allocate(15, 45, this.position);
  }
  onAllocated(playerId, startingTileIndex, majorColor = randomElement(majorColors), minorColor = randomElement(minorColors), hairColor = randomElement(hairColors), ponytail = !!Math.round(Math.random())) {
    this.playerId = playerId;
    this.majorColor = majorColor;
    this.minorColor = minorColor;
    this.textureImage = generateElfTexture(majorColor, minorColor, hairColor, ponytail);
    this.dolly.rotation.x = PI_OVER_TWO_POINT_TWO_FIVE;
    this.dolly.position.z = 19;
    this.dolly.position.y = -10.0;
    this.hasAssignedTarget = false;
    this.path = new Path$1();
    this.health = new Health();
    this.arrival = new Arrival(startingTileIndex);
    this.presence = new Presence();
    this.powerups = new Powerups();
    this.shield = new Shield();
    this.visibility = new Visibility();
    this.speed = new Speed();
    this.sank = false;
    this.shieldBubble.visible = false;
    if (this.elf) {
      this.elf.children[1].material.opacity = 1.0;
    }
  }
  setup(game) {
    const {
      lodSystem,
      clientSystem,
      collisionSystem,
      stateSystem
    } = game;
    const {
      player: clientPlayer
    } = clientSystem;
    this.stateSystem = stateSystem;
    lodSystem.addEntity(this);
    collisionSystem.addCollidable(this);
    if (this === clientPlayer) {
      this.dolly.add(clientPlayerMarker);
      clientPlayerMarker.rotation.x = -PI_OVER_TWO$1;
    }
    this.ensureCorrectTextureImage();
  }
  teardown(game) {
    const {
      collisionSystem,
      lodSystem
    } = game;
    lodSystem.removeEntity(this);
    collisionSystem.removeCollidable(this);
    if (this.unsubscribe != null) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }
  update(game) {
    const {
      clientSystem,
      mapSystem,
      inputSystem,
      collisionSystem,
      entityRemovalSystem
    } = game;
    const {
      player: clientPlayer
    } = clientSystem;
    const {
      grid
    } = mapSystem;
    const {
      arrival,
      path,
      health,
      shield,
      shieldBubble
    } = this;
    const isClientPlayer = this === clientPlayer;
    const shielded = shield.active;
    if (shielded) {
      shieldBubble.visible = true;
      shieldBubble.progress = shield.progress;
    } else if (shieldBubble.visible) {
      shieldBubble.visible = false;
    }
    if (isClientPlayer) {
      if (!arrival.arrived && clientPlayerMarker.visible) {
        clientPlayerMarker.visible = false;
      } else if (arrival.arrived && !clientPlayerMarker.visible) {
        clientPlayerMarker.visible = true;
      }
    }
    if (arrival.arrived && this.unsubscribe == null) {
      this.hitTarget.position.z = grid.cellSize / 4.0 + 2.0;
      this.unsubscribe = combine(inputSystem.on('pick', event => {
        if (!isClientPlayer) {
          clientSystem.assignTarget(this);
          return false;
        }
      }, this.hitTarget), collisionSystem.handleCollisions(this, (self, other) => {
        if (other instanceof Snowball && other.thrower !== this) {
          const {
            direction
          } = other.trajectory;
          this.face(Math.atan2(direction.y, direction.x) - PI_OVER_TWO$1);
          if (this.shield.active) {
            return;
          }
          this.die();
          entityRemovalSystem.teleportEntity(this);
        }
      }));
    }
    if (this.lodNeedsUpdate) {
      if (this.currentLod === lod.HIGH && health.alive) {
        this.initializeModel(game.assetBaseUrl);
        this.visible = true;
      } else {
        this.visible = false;
      }
      this.lodNeedsUpdate = false;
    }
    if (health.alive) {
      if (!path.destinationReached) {
        const {
          speed
        } = this;
        const nextWaypoint = path.nextWaypoint;
        const delta = intermediateVector2$5;
        delta.subVectors(nextWaypoint, this.position);
        const length = delta.length();
        delta.normalize();
        delta.multiplyScalar(2.25 * speed.scale);
        const lengthNormalized = delta.length();
        if (length <= lengthNormalized) {
          this.position.x = nextWaypoint.x;
          this.position.y = nextWaypoint.y;
          path.waypoints.shift();
        } else {
          this.position.x += delta.x;
          this.position.y += delta.y;
        }
        this.face(Math.atan2(delta.y, delta.x) + PI_OVER_TWO$1);
        this.run();
      } else {
        this.idle();
      }
      if (this.hasAssignedTarget) {
        this.throw();
        this.hasAssignedTarget = false;
      }
    } else {
      const {
        presence,
        visibility
      } = this;
      if (presence.exiting) {
        if (clientPlayerMarker.parent === this.dolly) {
          this.dolly.remove(clientPlayerMarker);
        }
        if (this.currentLod === lod.HIGH && this.elf != null) {
          const material = this.elf.children[1].material;
          material.opacity = visibility.opacity;
        }
      }
      collisionSystem.removeCollidable(this);
    }
    if (this.model != null) {
      this.model.update(game);
    }
  }
  set lod(value) {
    if (this.health && !this.health.alive) {
      return;
    }
    if (value != this.currentLod) {
      this.currentLod = value;
      this.lodNeedsUpdate = true;
    }
  }
  initializeModel(assetBaseUrl) {
    if (!this.modelInitialized) {
      console.count('Elf model initialized');
      createElf(assetBaseUrl).then(model => {
        const elf = model.object.children[0];
        const material = elf.children[1].material.clone();
        const map = material.map.clone();
        elf.children[1].material = material;
        material.map = map;
        material.transparent = true;
        elf.scale.multiplyScalar(5.0);
        this.elf = elf;
        this.model = model;
        this.dolly.add(elf);
        this.ensureCorrectTextureImage();
      });
    }
    this.modelInitialized = true;
  }
  face(angle) {
    this.dolly.rotation.y = angle;
  }
  idle() {
    if (this.model != null) {
      this.model.play('elf_rig_idle');
    }
  }
  run() {
    if (this.model != null) {
      this.model.play('elf_rig_running');
    }
  }
  throw() {
    if (this.model != null) {
      this.model.mixOnce('elf_rig_throw');
    }
  }
  fallDown() {
    if (this.model != null) {
      const fall = Math.floor(Math.random() * 3) + 1;
      this.model.playOnce(`elf_rig_fall_down_${fall}`);
      const handler = event => {
        const animation = this.model.play(`elf_rig_fall_down_${fall}_idle`);
        if (animation != null) {
          animation.fadeIn(0.5);
          this.model.animationMixer.removeEventListener('finished', handler);
        }
      };
      this.model.animationMixer.addEventListener('finished', handler);
    }
  }
  sink() {
    this.sank = true;
    this.die();
  }
  die() {
    if (this.health.dead) {
      return;
    }
    this.health.alive = false;
    this.fallDown();
    if (this.stateSystem != null) {
      this.stateSystem.recordPlayerKnockedOut();
    }
  }
}
const {
  Math: ThreeMath$2,
  Object3D: Object3D$6,
  Vector2: Vector2$6,
  Vector3: Vector3$4
} = self.THREE;
const intermediateVector2$4 = new Vector2$6();
const PI_OVER_TWO = Math.PI / 2.0;
class PlayerSystem {
  setup(game) {
    this.path = null;
    this.playerLayer = new Object3D$6();
    this.playerMap = {};
    this.players = [];
    this.newPlayers = [];
    this.parachutingPlayers = [];
    this.playerDestinations = {};
    this.playerTargetedPositions = {};
    this.playerPowerups = [];
  }
  teardown(game) {
    this.clearAllPlayers(game);
  }
  hasPlayer(id) {
    return !!this.playerMap[id];
  }
  addPlayerFromJson(playerJson) {
    const player = this.addPlayerInstance(Elf.fromJson(playerJson));
    const {
      path
    } = playerJson;
    const {
      destination
    } = path;
    if (destination != null) {
      this.assignPlayerDestination(player.playerId, {
        index: destination.index,
        position: new Vector3$4().copy(destination.position)
      });
    }
    return player;
  }
  addPlayer(id = ThreeMath$2.generateUUID(), startingTileIndex = -1) {
    if (this.playerMap[id]) {
      throw new Error(`player ${id} already described`);
    }
    return this.addPlayerInstance(Elf.allocate(id, startingTileIndex));
  }
  addPlayerInstance(player) {
    this.playerMap[player.playerId] = player;
    this.players.push(player);
    this.newPlayers.push(player);
    return player;
  }
  getPlayer(id) {
    return this.playerMap[id];
  }
  clearAllPlayers(game) {
    const all = Object.keys(this.playerMap);
    all.forEach(id => this.removePlayer(id, game));
  }
  removePlayer(id, game) {
    const player = this.playerMap[id];
    if (player === undefined) {
      return;
    }
    this.playerLayer.remove(player);
    player.teardown(game);
    Elf.free(player);
    const possibleArrays = [this.players, this.newPlayers, this.parachutingPlayers];
    possibleArrays.forEach(array => {
      const index = array.indexOf(player);
      if (index !== -1) {
        array.splice(index, 1);
      }
    });
    const possibleObjects = [this.playerMap, this.playerDestinations, this.playerTargetedPositions];
    possibleObjects.forEach(object => delete object[id]);
  }
  assignPlayerPowerup(playerId, type) {
    console.log(`Player ${playerId} collected powerup ${type}`);
    const player = this.playerMap[playerId];
    const {
      powerups
    } = player;
    if (type === powerupType.SHIELD) {
      player.shield.activate();
      this.playerPowerups.push(player);
      return;
    }
    powerups.collect(type);
    this.playerPowerups.push(player);
  }
  assignPlayerDestination(playerId, destination) {
    const player = this.playerMap[playerId];
    if (player != null) {
      this.playerDestinations[playerId] = destination;
    }
  }
  assignPlayerTargetedPosition(playerId, targetedPosition) {
    const player = this.playerMap[playerId];
    if (player != null) {
      this.playerTargetedPositions[playerId] = targetedPosition;
    }
    player.hasAssignedTarget = true;
  }
  update(game) {
    const {
      mapSystem,
      snowballSystem,
      clientSystem,
      parachuteSystem,
      entityRemovalSystem,
      stateSystem
    } = game;
    const {
      grid,
      map
    } = mapSystem;
    const {
      player: clientPlayer
    } = clientSystem;
    if (map == null) {
      return;
    }
    if (this.playerPowerups.some(player => player === clientPlayer)) {
      window.santaApp.fire('sound-trigger', 'snowball_pickup');
    }
    this.playerPowerups = [];
    while (this.newPlayers.length) {
      const player = this.newPlayers.shift();
      const {
        arrival
      } = player;
      if (arrival.tileIndex < 0) {
        arrival.tileIndex = map.getRandomHabitableTileIndex();
      }
      player.setup(game);
      if (!arrival.arrived) {
        parachuteSystem.dropEntity(player, player !== clientPlayer);
        this.parachutingPlayers.push(player);
      }
      stateSystem.recordPlayerConnected();
    }
    for (let i = 0; i < this.parachutingPlayers.length; ++i) {
      const player = this.parachutingPlayers[i];
      if (player.arrival.arrived) {
        const {
          arrival
        } = player;
        const position = grid.indexToPosition(arrival.tileIndex, intermediateVector2$4);
        this.parachutingPlayers.splice(i--, 1);
        player.position.x = position.x;
        player.position.y = position.y;
        this.playerLayer.add(player);
      }
    }
    for (let playerId in this.playerDestinations) {
      const player = this.playerMap[playerId];
      if (player.health.dead || !player.arrival.arrived) {
        continue;
      }
      const destination = this.playerDestinations[playerId];
      const path = grid.playerWaypointsForMap(player, destination, map);
      if (path.length) {
        player.path.follow(path);
      } else if (player === clientPlayer) {
        clientSystem.assignTarget(destination);
      } else ;
    }
    this.playerDestinations = {};
    for (let playerId in this.playerTargetedPositions) {
      const player = this.playerMap[playerId];
      if (player.health.dead) {
        continue;
      }
      const targetPosition = this.playerTargetedPositions[playerId];
      const partial = intermediateVector2$4;
      if (player === clientPlayer) {
        window.santaApp.fire('sound-trigger', 'snowball_throw');
      }
      snowballSystem.throwSnowball(player, targetPosition);
      partial.subVectors(targetPosition, player.position).normalize();
      player.face(Math.atan2(partial.y, partial.x) + PI_OVER_TWO);
    }
    this.playerTargetedPositions = {};
    for (let i = 0; i < this.players.length; ++i) {
      const player = this.players[i];
      const {
        presence,
        arrival
      } = player;
      player.update(game);
      const tileIndex = grid.positionToIndex(player.position);
      const tileState = map.getTileState(tileIndex);
      if (arrival.arrived && tileState === 4.0 && presence.present && !presence.exiting) {
        player.sink();
        entityRemovalSystem.freezeEntity(player);
      } else if (presence.gone) {
        this.players.splice(i--, 1);
        if (player !== clientPlayer) {
          player.teardown(game);
          Elf.free(player);
          this.playerLayer.remove(player);
        }
        window.santaApp.fire('sound-trigger', 'snowball_frozen');
      }
    }
  }
}
const {
  Vector2: Vector2$5
} = self.THREE;
const DirectionKeys = {
  ArrowUp: {
    x: 0,
    y: 1
  },
  ArrowDown: {
    x: 0,
    y: -1
  },
  ArrowLeft: {
    x: -1,
    y: 0
  },
  ArrowRight: {
    x: 1,
    y: 0
  },
  Up: {
    x: 0,
    y: 1
  },
  Down: {
    x: 0,
    y: -1
  },
  Left: {
    x: -1,
    y: 0
  },
  Right: {
    x: 1,
    y: 0
  }
};
const throwKeys = new Set([' ', 'Spacebar']);
class KeyboardControls {
  constructor(target = self) {
    this.target = target;
    this.heldDirections = [];
    this.throwRequested = false;
    this.direction = new Vector2$5();
    this.onKeyDown = event => this.handleKeyDown(event);
    this.onKeyUp = event => this.handleKeyUp(event);
    this.onBlur = () => this.releaseAll();
    target.addEventListener('keydown', this.onKeyDown);
    target.addEventListener('keyup', this.onKeyUp);
    target.addEventListener('blur', this.onBlur);
  }
  isShortcut(event) {
    return event.ctrlKey || event.metaKey || event.altKey;
  }
  handleKeyDown(event) {
    if (this.isShortcut(event)) {
      return;
    }
    const direction = DirectionKeys[event.key];
    if (direction != null) {
      event.preventDefault();
      if (this.heldDirections.indexOf(event.key) < 0) {
        this.heldDirections.push(event.key);
      }
      return;
    }
    if (throwKeys.has(event.key) || event.code === 'Space') {
      event.preventDefault();
      if (!event.repeat) {
        this.throwRequested = true;
      }
    }
  }
  handleKeyUp(event) {
    const index = this.heldDirections.indexOf(event.key);
    if (index >= 0) {
      this.heldDirections.splice(index, 1);
    }
  }
  releaseAll() {
    this.heldDirections.length = 0;
    this.throwRequested = false;
  }
  currentDirection() {
    if (this.heldDirections.length === 0) {
      return null;
    }
    const key = this.heldDirections[this.heldDirections.length - 1];
    const direction = DirectionKeys[key];
    this.direction.set(direction.x, direction.y);
    return this.direction;
  }
  consumeThrowRequest() {
    const requested = this.throwRequested;
    this.throwRequested = false;
    return requested;
  }
  dispose() {
    this.target.removeEventListener('keydown', this.onKeyDown);
    this.target.removeEventListener('keyup', this.onKeyUp);
    this.target.removeEventListener('blur', this.onBlur);
    this.releaseAll();
  }
}
function sceneString(msgid) {
  const element = document.querySelector(`[msgid="${msgid}"]`);
  if (element == null) {
    console.warn('No string for msgid', msgid);
    return '';
  }
  return element.textContent.trim();
}
const {
  Math: ThreeMath$1,
  Mesh: Mesh$4,
  PlaneBufferGeometry: PlaneBufferGeometry$1,
  MeshBasicMaterial: MeshBasicMaterial$3,
  Vector2: Vector2$4
} = self.THREE;
const endGameAfter = 2500;
const keyboardLookAheadTiles = 2;
const keyboardForwardThreshold = 0.1;
const keyboardDriftPenalty = 0.35;
const keyboardMaximumDriftCells = 3.0;
const keyboardThrowDistance = 256;
const markerMinimumScale = 0.4;
class ClientSystem {
  constructor() {
    this.player = null;
    this.targetedPosition = null;
    this.destination = null;
    this.destinationFromPointer = true;
    this.pendingSpawnAt = null;
    this.keyboard = null;
    this.keyboardDirectionX = 0;
    this.keyboardDirectionY = 0;
    this.keyboardRayOrigin = new Vector2$4(0, 0);
    this.keyboardAim = new Vector2$4(0, -1);
    const arrivalMarker = new PlayerMarker();
    arrivalMarker.material.depthTest = false;
    arrivalMarker.scale.set(markerMinimumScale, markerMinimumScale, 1.0);
    this.arrivalMarker = arrivalMarker;
    this.announcedDeath = false;
    this.lastValidScore = 0;
    this.wasDeadAt = 0;
  }
  assignTarget(target) {
    this.targetedPosition = target.position.clone();
  }
  assignDestination(destination, fromPointer = true) {
    this.destination = destination;
    this.destinationFromPointer = fromPointer;
  }
  assignPlayer(player) {
    this.player = player;
  }
  teardown(game) {
    const {
      playerSystem
    } = game;
    if (this.player != null) {
      playerSystem.removePlayer(this.player.playerId, game);
    }
    const {
      arrivalMarker
    } = this;
    if (arrivalMarker.parent != null) {
      arrivalMarker.parent.remove(arrivalMarker);
    }
    if (this.keyboard != null) {
      this.keyboard.dispose();
      this.keyboard = null;
    }
    this.player = null;
  }
  setup(game) {
    this.keyboard = new KeyboardControls();
  }
  update(game) {
    if (this.player == null) {
      return;
    }
    const {
      clockSystem,
      stateSystem
    } = game;
    const {
      population
    } = stateSystem;
    const {
      knockedOut,
      maximum
    } = population;
    const iceableElves = maximum - 1;
    const {
      camera
    } = game;
    const {
      presence,
      playerId,
      health,
      path,
      arrival
    } = this.player;
    if (health.dead) {
      const now = performance.now();
      if (!this.wasDeadAt) {
        this.wasDeadAt = now;
      }
      if ((presence.gone || now - this.wasDeadAt > endGameAfter) && !this.announcedDeath) {
        console.info('now was', now, 'wasDeadAt', this.wasDeadAt);
        window.santaApp.fire('game-stop', {
          level: this.lastValidScore,
          maxLevel: iceableElves,
          levelLabel: 'iced',
          gameoverMessage: sceneString('snowball_gameover_lose'),
          gameoverArt: 'lose'
        });
        this.announcedDeath = true;
        game.finish();
      }
      return;
    }
    window.santaApp.fire('game-score', {
      level: knockedOut,
      maxLevel: iceableElves,
      levelLabel: 'iced',
      time: clockSystem.time / 1000
    });
    this.lastValidScore = knockedOut;
    const {
      networkSystem,
      playerSystem,
      mapSystem,
      parachuteSystem
    } = game;
    const {
      grid
    } = mapSystem;
    this.updateKeyboardControls(game);
    const {
      destination,
      targetedPosition,
      arrivalMarker
    } = this;
    if (!arrival.arrived) {
      if (arrivalMarker.parent == null && arrival.tileIndex > -1) {
        const position = grid.indexToPosition(arrival.tileIndex);
        arrivalMarker.position.z = 19.0;
        arrivalMarker.position.y = position.y + this.player.dolly.position.y;
        arrivalMarker.position.x = position.x;
        arrivalMarker.rotation.x = this.player.dolly.rotation.x;
        camera.position.x = position.x;
        camera.position.y = position.y * -0.75;
        playerSystem.playerLayer.add(arrivalMarker);
      }
      if (arrivalMarker.parent != null && arrival.isDropping()) {
        const descent = (game.tick - arrival.droppedTick) / parachuteSystem.frameCount;
        const progress = descent < 0.0 ? 0.0 : descent > 1.0 ? 1.0 : descent;
        const scale = markerMinimumScale + (1.0 - markerMinimumScale) * progress;
        arrivalMarker.scale.set(scale, scale, 1.0);
      }
    } else {
      if (arrivalMarker.parent != null) {
        arrivalMarker.parent.remove(arrivalMarker);
        arrivalMarker.scale.set(markerMinimumScale, markerMinimumScale, 1.0);
      }
    }
    if (destination != null) {
      playerSystem.assignPlayerDestination(playerId, destination);
      networkSystem.postMove(this.player.position, destination.position);
      this.destination = null;
    }
    if (targetedPosition != null) {
      playerSystem.assignPlayerTargetedPosition(playerId, this.targetedPosition);
      networkSystem.postTargetedPosition(this.targetedPosition);
      this.targetedPosition = null;
    }
  }
  updateKeyboardControls(game) {
    const {
      keyboard,
      player
    } = this;
    if (keyboard == null || player == null) {
      return;
    }
    const {
      map,
      grid
    } = game.mapSystem;
    if (map == null || !player.arrival.arrived) {
      return;
    }
    this.updateKeyboardMovement(grid, map, player, keyboard);
    if (keyboard.consumeThrowRequest()) {
      const aim = this.keyboardAim;
      this.assignTarget({
        position: new Vector2$4(player.position.x + aim.x * keyboardThrowDistance, player.position.y + aim.y * keyboardThrowDistance)
      });
    }
  }
  updateKeyboardMovement(grid, map, player, keyboard) {
    const direction = keyboard.currentDirection();
    if (direction == null) {
      if (this.keyboardDirectionX !== 0 || this.keyboardDirectionY !== 0) {
        this.keyboardDirectionX = 0;
        this.keyboardDirectionY = 0;
        this.stopAfterNextWaypoint(player);
      }
      return;
    }
    const turned = direction.x !== this.keyboardDirectionX || direction.y !== this.keyboardDirectionY;
    if (!turned && player.path.waypoints.length > 1) {
      return;
    }
    if (turned) {
      this.keyboardRayOrigin.set(player.position.x, player.position.y);
    }
    this.keyboardDirectionX = direction.x;
    this.keyboardDirectionY = direction.y;
    const destination = this.keyboardDestination(grid, map, player, direction);
    if (destination == null) {
      this.keyboardAim.set(direction.x, direction.y).normalize();
      return;
    }
    this.keyboardAim.set(destination.position.x - player.position.x, destination.position.y - player.position.y).normalize();
    this.assignDestination(destination, false);
  }
  stopAfterNextWaypoint(player) {
    const {
      path
    } = player;
    if (path.waypoints.length > 1) {
      path.follow(path.waypoints.slice(0, 1));
    }
  }
  keyboardDestination(grid, map, player, direction) {
    let index = grid.positionToIndex(player.position);
    let position = player.position;
    let destination = null;
    for (let tiles = 0; tiles < keyboardLookAheadTiles; ++tiles) {
      const step = this.bestNeighborTowards(grid, map, index, position, direction);
      if (step == null) {
        break;
      }
      index = step.index;
      position = step.position;
      destination = step;
    }
    return destination;
  }
  bestNeighborTowards(grid, map, fromIndex, fromPosition, direction) {
    const neighbors = grid.indexToNeighborIndices(fromIndex);
    const origin = this.keyboardRayOrigin;
    let best = null;
    let bestScore = -Infinity;
    for (let i = 0; i < neighbors.length; ++i) {
      const index = neighbors[i];
      if (index === fromIndex || !map.isTraversable(index)) {
        continue;
      }
      const position = grid.indexToPosition(index);
      const deltaX = position.x - fromPosition.x;
      const deltaY = position.y - fromPosition.y;
      const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (length === 0) {
        continue;
      }
      const towards = (deltaX * direction.x + deltaY * direction.y) / length;
      if (towards <= keyboardForwardThreshold) {
        continue;
      }
      const drift = direction.x * (position.y - origin.y) - direction.y * (position.x - origin.x);
      const driftCells = Math.min(Math.abs(drift) / grid.cellHeight, keyboardMaximumDriftCells);
      const score = towards - keyboardDriftPenalty * driftCells;
      if (score > bestScore) {
        bestScore = score;
        best = {
          index,
          position
        };
      }
    }
    return best;
  }
}
const LevelType = {
  LOBBY: 0,
  MAIN: 1
};
const MessageType = {
  LEVEL_CHANGED: 0,
  POPULATION_ANNOUNCED: 1,
  RECONNECTED: 2,
  GAME_INITIALIZED: 3,
  TILE_ERODED: 4,
  PLAYER_JOINED: 5,
  PLAYER_LEFT: 6,
  PLAYER_MOVED: 7,
  SNOWBALL_THROWN: 8,
  PLAYER_ASSIGNED: 9,
  TIME_SYNCHRONIZED: 10
};
class Socket {
  constructor(url, game) {
    this.url = url;
    this.game = game;
    this.backoff = 0;
    this.retryTimeout = 0;
    this.clientId = '';
    this.onready = null;
    this.postQueue = new Map();
    this.target_ = null;
    this.serverQueue = [];
    this.socket = new WebSocket(this.url);
    this.configureSocket_(this.socket);
  }
  configureSocket_(socket) {
    socket.addEventListener('open', () => {
      if (this.socketClientId != null) {
        this.send({
          type: MessageType.RECONNECTED,
          clientId: this.clientId,
          game: this.game
        });
      }
      this.postQueue.forEach(data => socket.send(data));
    });
    socket.addEventListener('message', ev => {
      this.postQueue = new Map();
      this.backoff = 0;
      const payload = JSON.parse(ev.data);
      if (!this.handlePayload_(payload)) {
        console.warn('got unhandled payload', payload);
      }
    });
    socket.addEventListener('close', () => this.retry_());
  }
  retry_() {
    this.socket.close();
    const backoffTime = 1000 * (Math.pow(this.backoff, 1.02) + Math.random());
    window.clearTimeout(this.retryTimeout);
    this.retryTimeout = window.setTimeout(() => {
      this.socket = new WebSocket(this.url);
      this.configureSocket_(this.socket);
    }, backoffTime);
  }
  set target(target) {
    this.target_ = target;
    if (target) {
      const queue = this.serverQueue;
      queue.forEach(payload => this.sendToTarget_(payload));
    }
  }
  get target() {
    return this.target_;
  }
  post(data, coalesceKey) {
    const raw = JSON.stringify(data);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(raw);
    } else {
      this.postQueue.set(coalesceKey, raw);
    }
  }
  handlePayload_(payload) {
    let ok = false;
    if (this.target && this.target.onSocketMessage && this.target.onSocketMessage(payload) !== false) {
      ok = true;
    }
    return ok;
  }
}
const {
  Scene
} = self.THREE;
const EntityScene = Entity(Scene);
class Level extends EntityScene {
  measure(game) {}
}
const EntityElement$3 = Entity(BasicElement);
let template$3 = null;
const initializeTemplate$1 = assetBaseUrl => {
  template$3 = document.createElement('template');
  template$3.innerHTML = `
<style>
@keyframes float {
  0% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(-5deg);
  }
}

@keyframes drag {
  0% {
    transform: translateY(-5%);
  }

  50% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(-5%);
  }
}

:host {
  display: flex;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: Lobster;
  color: #fff;
}

.container {
  margin: auto;
  text-align: center;
  font-size: 2em;
}

:host(.hide-population) h1 {
  transition: none;
  opacity: 0;
  transform: translateY(10px);
}

h1 {
  transition: opacity 0.3s, transform 0.3s;
  font-size: 4em;
  transform: translateY(0px);
}

h2 > span {
  display: block;
}

#elf {
  display: block;
  margin: auto;
  width: 256px;
  height: 256px;
  animation: drag 5s ease-in-out infinite;
}

#elf:after {
  content: '';
  display: block;
  width: 256px;
  height: 256px;
  background-image: url(${assetBaseUrl}img/elves-parachuting.svg);
  background-size: 200%;

  transform-origin: center 20%;
  animation: float 3s ease-in-out infinite;
}
</style>
<div class="container">
  <div id="elf"></div>
  <h1><span id="present"></span>/<span id="needed"></span></h1>
  <h2>
    <span>Waiting for more</span>
    <span>elves to join</span>
  </h2>
</div>`;
};
class LobbyStatus extends EntityElement$3 {
  static get is() {
    return 'lobby-status';
  }
  static get template() {
    return template$3;
  }
  connectedCallback() {
    if (template$3 == null) {
      let parentNode = this.parentNode;
      while (parentNode && parentNode.tagName !== 'SNOWBALL-GAME') {
        if (parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          parentNode = parentNode.host;
        } else {
          parentNode = parentNode.parentNode;
        }
      }
      initializeTemplate$1(parentNode.assetBaseUrl);
    }
    if (this.shadowRoot == null) {
      this.stampTemplate();
      this.present = this.shadowRoot.querySelector('#present');
      this.needed = this.shadowRoot.querySelector('#needed');
    }
  }
  update(game) {
    const {
      stateSystem
    } = game;
    if (this.present && this.needed && stateSystem.hasCurrentPopulation) {
      this.classList.remove('hide-population');
      this.present.textContent = stateSystem.population.allTime;
      this.needed.textContent = stateSystem.population.maximum;
    } else {
      this.classList.add('hide-population');
    }
  }
}
customElements.define(LobbyStatus.is, LobbyStatus);
class LobbyLevel extends Level {
  constructor(...args) {
    super(...args);
    this.lobbyStatus = new LobbyStatus();
  }
  setup(game) {
    game.shadowRoot.appendChild(this.lobbyStatus);
  }
  teardown(game) {
    game.shadowRoot.removeChild(this.lobbyStatus);
  }
  update(game) {
    this.lobbyStatus.update(game);
  }
}
const {
  Vector3: Vector3$3
} = self.THREE;
const intermediateVector3 = new Vector3$3();
class TetheredCameraTracker {
  constructor(camera, tetherDistance = 100.0, acceleration = 0.15) {
    this.camera = camera;
    this.target = null;
    this.tetherDistance = tetherDistance;
    this.acceleration = acceleration;
    this.velocity = new Vector3$3(0.0, 0.0, 0.0);
  }
  update(game) {
    if (!this.target) {
      return;
    }
    const delta = intermediateVector3;
    delta.copy(this.target.position);
    delta.y *= -0.75;
    delta.subVectors(delta, this.camera.position);
    delta.z = 0;
    const deltaLength = delta.length();
    if (deltaLength >= this.tetherDistance) {
      delta.normalize().multiplyScalar(this.acceleration);
      this.velocity.add(delta);
    } else {
      delta.normalize().multiplyScalar(length / this.tetherDistance * this.acceleration);
      this.velocity.sub(delta);
    }
    if (this.velocity.length() > 0.1) {
      this.velocity.x = this.velocity.x > 0 ? this.velocity.x - 0.1 : this.velocity.x + 0.1;
      this.velocity.y = this.velocity.y > 0 ? this.velocity.y - 0.1 : this.velocity.y + 0.1;
    } else {
      this.velocity.set(0.0, 0.0, 0.0);
    }
    this.camera.position.add(this.velocity);
  }
}
class Contents extends Component {
  constructor() {
    super();
    this.inventory = [];
  }
  get isEmpty() {
    return this.inventory.length === 0;
  }
  clear() {
    this.inventory = [];
  }
}
const {
  Object3D: Object3D$5,
  Mesh: Mesh$3,
  Texture,
  BufferGeometry,
  MeshBasicMaterial: MeshBasicMaterial$2,
  BufferAttribute
} = self.THREE;
const geometry$1 = new BufferGeometry();
const normals = new BufferAttribute(new Float32Array([-1, 0, -0, -1, 0, -0, -1, 0, -0, 0, -0.0, -1, 0, -0.0, -1, 0, -0.0, -1, 1, -0, 0, 1, -0, 0, 1, -0, 0, 0, 0.0, 1, 0, 0.0, 1, 0, 0.0, 1, 0, -1, 0.0, 0, -1, 0.0, 0, -1, 0.0, 0, 1, -0.0, 0, 1, -0.0, 0, 1, -0.0, -1, 0, 0, -0, -0.0, -1, 1, 0, 0, -0, 0.0, 1, 0, -1, 0.0, 0, 1, -0.0]), 3);
const uvs = new BufferAttribute(new Float32Array([0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0, 0, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0.5, 0, 0, 0.5, 0, 0, 1, 0.5, 0.5, 0.5, 1, 0, 1, 0.5, 0.5, 0.5, 1, 0.5, 0.0, 0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0.5]), 2);
[0, 1, 2, 18, 3, 4, 5, 19].forEach(index => {
  uvs.setXY(index, 0.5 - uvs.getX(index), 0.5 - uvs.getY(index));
});
const positions = new BufferAttribute(new Float32Array([-0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5]), 3);
const indices = new BufferAttribute(new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 18, 1, 3, 19, 4, 6, 20, 7, 9, 21, 10, 12, 22, 13, 15, 23, 16]), 1);
geometry$1.setAttribute('position', positions);
geometry$1.setAttribute('uv', uvs);
geometry$1.setAttribute('normal', normals);
geometry$1.setIndex(indices);
const colorCombos = {
  yellowRed: ['#FADE4B', '#BE584A'],
  redYellow: ['#BE584A', '#FADE4B'],
  orangeBlue: ['#E68F49', '#4EB3EC'],
  yellowBlue: ['#FADF4B', '#4EB3EC'],
  purpleGreen: ['#87488F', '#67B783'],
  purpleYellow: ['#87488F', '#FADF4B'],
  bluePurple: ['#4EB3EA', '#87488F']
};
const generateDropTexture = (() => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const cache = {};
  canvas.width = canvas.height = 128;
  return (majorColor, minorColor) => {
    const cacheKey = `${majorColor}_${minorColor}`;
    if (cache[cacheKey] != null) {
      return cache[cacheKey];
    }
    context.fillStyle = majorColor;
    context.fillRect(0, 0, 128, 128);
    context.fillStyle = minorColor;
    context.fillRect(24, 0, 16, 128);
    context.fillRect(0, 24, 128, 16);
    const image = document.createElement('img');
    image.src = canvas.toDataURL();
    cache[cacheKey] = image;
    return image;
  };
})();
const EntityObject3D$2 = Entity(Object3D$5);
const AllocatableEntityObject3D$2 = Allocatable(EntityObject3D$2);
class Drop extends AllocatableEntityObject3D$2 {
  constructor() {
    super();
    this.giftTexture = new Texture();
    const model = new Mesh$3(geometry$1, new MeshBasicMaterial$2({
      map: this.giftTexture,
      transparent: true
    }));
    this.add(model);
    this.model = model;
    this.collider = Circle.allocate(10, this.position);
  }
  onAllocated(containedItem = powerupType.BIG_SNOWBALL) {
    this.isShieldGift = containedItem === powerupType.SHIELD;
    if (this.isShieldGift) {
      this.model.scale.set(15, 15, 13);
    } else {
      this.model.scale.set(Math.random() * 7 + 12, Math.random() * 7 + 12, Math.random() * 5 + 10);
      this.model.material.map = this.giftTexture;
      this.giftTexture.image = generateDropTexture(...randomValue(colorCombos));
      this.giftTexture.needsUpdate = true;
    }
    this.arrival = new Arrival();
    this.contents = new Contents();
    this.presence = new Presence();
    this.spinTime = -1;
  }
  setup(game) {
    const {
      mapSystem,
      collisionSystem
    } = game;
    const {
      grid
    } = mapSystem;
    this.collidingPlayer = null;
    this.model.rotation.set(Math.PI / 2.5, 0, 0);
    this.model.position.z = grid.cellSize / 2.0;
    this.model.material.opacity = 1.0;
    if (this.isShieldGift) {
      this.model.material.map = shieldGift(game.assetBaseUrl);
    }
    this.unsubscribe = collisionSystem.handleCollisions(this, (drop, other) => {
      if (this.collidingPlayer == null && !this.presence.exiting && other instanceof Elf) {
        this.collidingPlayer = other;
      }
    });
  }
  teardown(game) {
    this.collidingPlayer = null;
    if (this.unsubscribe != null) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }
  update(game) {
    const {
      mapSystem
    } = game;
    const {
      grid
    } = mapSystem;
    const {
      presence
    } = this;
    if (!presence.exiting) {
      this.model.rotation.y += 0.01;
    } else {
      if (this.spinTime > -1) {
        const duration = 300;
        const elapsed = performance.now() - this.spinTime;
        const timeScale = Math.min(elapsed / duration, 1.0);
        const spinDelta = -1 * (Math.pow(timeScale - 1.0, 4) + Math.pow(timeScale - 1.0, 3));
        this.model.rotation.y += spinDelta * 2.0 * Math.PI;
        this.model.position.z += spinDelta * grid.cellSize;
        this.model.scale.multiplyScalar(Math.max(1.0, 1.0 + spinDelta));
        this.model.material.opacity = Math.max(1.0 - timeScale, 0.0);
        if (timeScale === 1.0) {
          presence.present = false;
          presence.exiting = false;
        }
      } else {
        this.model.rotation.y = 0;
        this.model.rotation.x = Math.PI / 2.0;
      }
    }
  }
  spin() {
    this.presence.exiting = true;
    this.presence.present = true;
    this.spinTime = performance.now();
  }
}
const EntityElement$2 = Entity(BasicElement);
let template$2 = null;
const initializeTemplate = assetBaseUrl => {
  template$2 = document.createElement('template');
  template$2.innerHTML = `
<style>
  :host {
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 128px;
    height: calc(209/201 * 128px);
    background-image: url(${assetBaseUrl}img/item-frame.png);
    background-size: 100%;
    pointer-events: all;
  }

  .icon {
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    width: 72px;
    height: 72px;
    top: 28px;
    left: 28px;
    background-size: 100%;
  }

  :host(.one) #one,
  :host(.two) #two,
  :host(.three) #three {
    opacity: 1;
  }

  :host(.two) #one {
    transform: scale(0.6) translate(-55%, -10%);
  }

  :host(.two) #two {
    transform: scale(0.6) translate(55%, 10%);
  }

  :host(.two.three) #one {
    transform: scale(0.5) translate(-40%, -40%);
  }

  :host(.two.three) #two {
    transform: scale(0.6) translate(45%, -10%);
  }

  :host(.three) #three {
    transform: scale(0.8) translate(0, 17.5%);
  }

  :host(.powerup-1) .icon {
    background-image: url(${assetBaseUrl}img/powerup-1.png);
  }
</style>
<div id="one" class="icon"></div>
<div id="two" class="icon"></div>
<div id="three" class="icon"></div>`;
};
class PowerupStatus extends EntityElement$2 {
  static get is() {
    return 'powerup-status';
  }
  static get template() {
    return template$2;
  }
  constructor(...args) {
    super(...args);
    this.powerup = null;
    this.currentQuantity = 0;
  }
  connectedCallback() {
    if (template$2 == null) {
      let parentNode = this.parentNode;
      while (parentNode && parentNode.tagName !== 'SNOWBALL-GAME') {
        if (parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          parentNode = parentNode.host;
        } else {
          parentNode = parentNode.parentNode;
        }
      }
      initializeTemplate(parentNode.assetBaseUrl);
    }
    if (this.shadowRoot == null) {
      this.stampTemplate();
    }
  }
  set value(powerup) {
    if (powerup == null) {
      this.powerup = powerup;
      this.currentQuantity = 0;
      this.classList.remove('one', 'two', 'three');
      return;
    }
    if (this.currentQuantity !== powerup.quantity) {
      this.classList.toggle('one', powerup.quantity >= 1);
      this.classList.toggle('two', powerup.quantity >= 2);
      this.classList.toggle('three', powerup.quantity >= 3);
      this.currentQuantity = powerup.quantity;
    }
    if (this.powerup === powerup) {
      return;
    }
    if (this.powerup != null) {
      this.classList.remove(`powerup-${this.powerup.type}`);
    }
    if (powerup != null) {
      this.classList.add(`powerup-${powerup.type}`);
    }
    this.powerup = powerup;
  }
}
customElements.define(PowerupStatus.is, PowerupStatus);
const EntityElement$1 = Entity(BasicElement);
const template$1 = document.createElement('template');
template$1.innerHTML = `
<style>
:host {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  height: 265px;
  width: 212px;
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none;
}

powerup-status {
  transition: transform 0.3s;
}

:host(.swap) #powerupTwo,
#powerupOne {
  transform: translate(40%, 0%);
  z-index: 2;
}

:host(.swap) #powerupOne,
#powerupTwo {
  transform: scale(calc(1/2)) translate(180%, 50%);
  z-index: 1;
}

:host(.swap:not(.has-active)) #powerupTwo,
:host(:not(.swap):not(.has-active)) #powerupOne {
  transform: translate(40%, 200%);
}

:host(.swap:not(.has-inactive)) #powerupOne,
:host(:not(.swap):not(.has-inactive)) #powerupTwo {
  transform: scale(calc(1/2)) translate(180%, 350%);
}

@media (max-width: 768px) {
  :host {
    transform-origin: bottom left;
    transform: scale(0.7);
  }
}

</style>
<powerup-status id="powerupOne"></powerup-status>
<powerup-status id="powerupTwo"></powerup-status>`;
class PowerupUi extends EntityElement$1 {
  static get is() {
    return 'powerup-ui';
  }
  static get template() {
    return template$1;
  }
  constructor(...args) {
    super(...args);
    this.stampTemplate();
    this.powerupOne = this.shadowRoot.querySelector('#powerupOne');
    this.powerupTwo = this.shadowRoot.querySelector('#powerupTwo');
    this.swapped = false;
    this.swapRequested = false;
  }
  swap() {
    this.swapped = !this.swapped;
    this.classList.toggle('swap', this.swapped);
  }
  get activePowerup() {
    return this.swapped ? this.powerupTwo : this.powerupOne;
  }
  get inactivePowerup() {
    return this.swapped ? this.powerupOne : this.powerupTwo;
  }
  update(game) {
    const {
      clientSystem
    } = game;
    const {
      player
    } = clientSystem;
    if (player == null) {
      return;
    }
    const {
      powerups
    } = player;
    this.classList.toggle('has-active', powerups.active != null);
    this.classList.toggle('has-inactive', powerups.inactive != null);
    if (this.swapRequested && powerups.inactive != null) {
      powerups.swapped = !powerups.swapped;
    }
    this.swapRequested = false;
    if (powerups.swapped != this.swapped) {
      this.swap();
    }
    this.activePowerup.value = powerups.active;
    this.inactivePowerup.value = powerups.inactive;
  }
}
customElements.define(PowerupUi.is, PowerupUi);
const EntityElement = Entity(BasicElement);
const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  position: absolute;
  top: 0;
  right: 0;
}

#container {
  padding: 1em;
  margin: 3em;
  text-align: center;
  color: #fff;
  background-color: #68E4C1;
  font-family: 'Lobster';
  border-radius: 6px;
  box-shadow: 0px 4px 0px rgba(66, 66, 66, 0.5);
}

small {
  transform: scale(0.5);
}

h1 {
  font-size: 4em;
  margin: 0;
}

@media (max-width: 768px) {
  :host {
    transform-origin: top right;
    transform: scale(0.7);
  }
}
</style>
<div id="container">
  <h1><span id="remaining">0</span><small>/</small><span id="maximum">100</span></h1>
</div>
`;
class PopulationUi extends EntityElement {
  static get is() {
    return 'population-ui';
  }
  static get template() {
    return template;
  }
  constructor(...args) {
    super(...args);
    this.stampTemplate();
    this.remainingEl = this.shadowRoot.querySelector('#remaining');
    this.maximumEl = this.shadowRoot.querySelector('#maximum');
    this.remaining = this.maximum = 0;
  }
  update(game) {
    super.update(game);
    const {
      stateSystem
    } = game;
    const {
      population
    } = stateSystem;
    const {
      knockedOut,
      maximum
    } = population;
    const remaining = maximum - knockedOut;
    if (remaining !== this.remaining) {
      this.remaining = remaining;
      this.remainingEl.textContent = remaining;
    }
    if (maximum !== this.maximum) {
      this.maximum = maximum;
      this.maximumEl.textContent = maximum;
    }
  }
}
customElements.define(PopulationUi.is, PopulationUi);
const {
  AmbientLight
} = self.THREE;
class MainLevel extends Level {
  setup(game) {
    const {
      camera,
      collisionSystem,
      snowballSystem,
      parachuteSystem,
      entityRemovalSystem,
      dropSystem,
      effectSystem,
      playerSystem,
      clientSystem,
      lodSystem,
      mapSystem,
      stateSystem
    } = game;
    const {
      snowballLayer
    } = snowballSystem;
    const {
      playerLayer
    } = playerSystem;
    const {
      mapLayer,
      grid,
      map,
      gimbal
    } = mapSystem;
    const {
      effectsLayer
    } = effectSystem;
    const {
      collisionDebugLayer
    } = collisionSystem;
    const {
      parachuteLayer
    } = parachuteSystem;
    const {
      icebergLayer
    } = entityRemovalSystem;
    const {
      dropLayer
    } = dropSystem;
    this.unsubscribe = mapSystem.handleMapPick(event => this.pickEvent = event);
    this.cameraTracker = new TetheredCameraTracker(camera);
    this.light = new AmbientLight(0xbbaaaa, Math.PI);
    this.powerupUi = new PowerupUi();
    this.populationUi = new PopulationUi();
    this.measure(game);
    collisionSystem.bounds = Rectangle.allocate(grid.pixelWidth, grid.pixelHeight, mapLayer.position);
    if (collisionSystem.debug) {
      collisionDebugLayer.position.z = grid.cellSize / 4.0 + 1.0;
      gimbal.add(collisionDebugLayer);
    }
    gimbal.add(snowballLayer);
    gimbal.add(playerLayer);
    gimbal.add(effectsLayer);
    gimbal.add(parachuteLayer);
    gimbal.add(icebergLayer);
    gimbal.add(dropLayer);
    this.add(mapLayer);
    this.add(this.light);
    game.shadowRoot.insertBefore(this.powerupUi, game.shadowRoot.firstElementChild);
    game.shadowRoot.insertBefore(this.populationUi, game.shadowRoot.firstElementChild);
    this.populationUi.hidden = true;
  }
  measure(game) {
    const {
      camera,
      collisionSystem,
      lodSystem
    } = game;
    Rectangle.free(this.lodLimit);
    this.lodLimit = Rectangle.allocate(game.width + 256, game.height * 4 / 3 + 256);
    this.cameraTracker.tetherDistance = 0.05 * Math.max(game.width, game.height);
    lodSystem.limit = this.lodLimit;
    collisionSystem.limit = this.lodLimit;
  }
  teardown(game) {
    this.unsubscribe();
    this.remove(game.mapSystem.mapLayer);
    this.remove(game.effectSystem.effectsLayer);
    this.remove(game.snowballSystem.snowballLayer);
    this.remove(game.playerSystem.playerLayer);
    this.remove(this.light);
  }
  update(game) {
    const {
      mapSystem,
      clientSystem,
      dropSystem
    } = game;
    const {
      player: clientPlayer
    } = clientSystem;
    if (clientPlayer) {
      if (clientPlayer.health.alive) {
        this.cameraTracker.target = clientPlayer;
        if (this.pickEvent != null) {
          clientSystem.assignDestination(this.pickEvent);
        }
        if (clientPlayer.arrival.arrived && !clientPlayer.presence.exiting && !clientPlayer.presence.gone) {
          this.cameraTracker.update(game);
        }
      } else if (clientPlayer.health.dead) {
        if (this.pickEvent != null) {
          this.cameraTracker.target = this.pickEvent;
        }
        if (this.cameraTracker.target !== clientPlayer) {
          this.cameraTracker.update(game);
        }
      }
    }
    this.powerupUi.update(game);
    this.populationUi.update(game);
    this.pickEvent = null;
  }
}
class NetworkLevel extends MainLevel {
  setup(game) {
    super.setup(game);
    this.lastErosionTick = this.lastDropTick = game.setupTick;
  }
  update(game) {
    super.update(game);
    const {
      mapSystem,
      tick
    } = game;
    const {
      map
    } = mapSystem;
    if (map != null) {
      const erosionTickDelta = tick - this.lastErosionTick;
      const erosions = Math.floor(erosionTickDelta / 32);
      if (erosions > 0) {
        for (let i = 0; i < erosions; ++i) {
          map.erode();
        }
        this.lastErosionTick = tick;
      }
    }
  }
}
const throwSnowball = target => ({
  type: MessageType.SNOWBALL_THROWN,
  target
});
const move = (from, to) => ({
  type: MessageType.PLAYER_MOVED,
  from,
  to
});
class NetworkSystem {
  setup(game) {
    const {
      clientSystem,
      clockSystem
    } = game;
    this.synchronizeTime = (timeZero, time) => clockSystem.synchronize(timeZero, time);
    this.pendingGameInitialization = null;
    this.pendingLevelChange = null;
    this.pendingMessages = [];
    this.clientPlayerId = null;
    this.socket = null;
  }
  teardown(game) {}
  connect(serverUrl = 'ws://localhost:8080/socket') {
    this.socket = new Socket(serverUrl, 'snowball');
    this.socket.target = this;
  }
  post(payload, coalesce) {
    if (this.socket) {
      this.socket.post(payload, coalesce);
    }
  }
  postMove(from, to) {
    this.post(move(from, to));
  }
  postTargetedPosition(targetedPosition) {
    this.post(throwSnowball(targetedPosition));
  }
  update(game) {
    const {
      stateSystem,
      mapSystem,
      dropSystem,
      clientSystem,
      playerSystem
    } = game;
    if (this.pendingGameInitialization) {
      const {
        seed,
        erode,
        players
      } = this.pendingGameInitialization;
      mapSystem.rebuildMap(game, seed);
      for (let i = 0; i < erode; ++i) {
        mapSystem.map.erode();
      }
      for (let i = 0; i < players.length; ++i) {
        const playerJson = players[i];
        const player = playerSystem.hasPlayer(playerJson.id) ? playerSystem.getPlayer(playerJson.id) : playerSystem.addPlayerFromJson(playerJson);
        if (player.playerId === this.clientPlayerId && clientSystem.player == null) {
          clientSystem.assignPlayer(player);
        }
      }
    }
    this.pendingGameInitialization = null;
    if (this.pendingLevelChange != null) {
      const {
        state
      } = this.pendingLevelChange;
      let LevelClass = null;
      switch (state.level) {
        case LevelType.LOBBY:
          LevelClass = LobbyLevel;
          break;
        case LevelType.MAIN:
          LevelClass = NetworkLevel;
          break;
        default:
          console.warn('Unknown level:', state);
          break;
      }
      if (LevelClass != null && !(game.currentLevel instanceof LevelClass)) {
        game.setLevel(new LevelClass());
      }
    }
    this.pendingLevelChange = null;
    while (this.pendingMessages.length) {
      const message = this.pendingMessages.shift();
      const {
        type,
        state,
        tick
      } = message;
      switch (type) {
        case MessageType.POPULATION_ANNOUNCED:
          Object.assign(stateSystem.population, state);
          break;
        case MessageType.TILE_ERODED:
          mapSystem.map.erode();
          break;
        case MessageType.PLAYER_JOINED:
          if (!playerSystem.hasPlayer(state.id)) {
            playerSystem.addPlayerFromJson(state);
          }
          break;
        case MessageType.PLAYER_LEFT:
          playerSystem.removePlayer(state.id);
          break;
        case MessageType.PLAYER_MOVED:
          if (player.health.dead) {
            player.health.revive();
          }
          const lastPath = state.path[state.path.length - 1];
          const destination = {
            position: lastPath,
            index: mapSystem.grid.positionToIndex(lastPath)
          };
          playerSystem.assignPlayerDestination(state.id, destination);
          break;
        case MessageType.SNOWBALL_THROWN:
          break;
        default:
          console.warn('Unhandled socket message', message);
          break;
      }
    }
  }
  _indexFor(game, tick, position) {
    const {
      mapSystem,
      playerSystem
    } = game;
    const {
      map
    } = mapSystem;
    if (position != null) {
      return mapSystem.grid.positionToIndex(position);
    }
    return map.getRandomHabitableTileIndex(playerSystem.random);
  }
  onSocketMessage(message) {
    console.log('Handling message', message);
    switch (message.type) {
      case MessageType.TIME_SYNCHRONIZED:
        const {
          timeZero,
          time
        } = message;
        this.synchronizeTime(timeZero, time);
        break;
      case MessageType.GAME_INITIALIZED:
        this.pendingGameInitialization = message;
        break;
      case MessageType.LEVEL_CHANGED:
        this.pendingLevelChange = message;
        break;
      case MessageType.PLAYER_ASSIGNED:
        this.clientPlayerId = message.state.id;
        break;
      default:
        this.pendingMessages.push(message);
        break;
    }
  }
}
const {
  Mesh: Mesh$2,
  CircleBufferGeometry,
  MeshBasicMaterial: MeshBasicMaterial$1
} = self.THREE;
const shadowRadius = 13.0;
const shadowColor = 0x9aa0a6;
const minimumScale = 0.4;
const maximumScale = 1.0;
const minimumOpacity = 0.06;
const maximumOpacity = 0.2;
const geometry = new CircleBufferGeometry(shadowRadius, 24);
const materialTemplate = new MeshBasicMaterial$1({
  color: shadowColor,
  opacity: maximumOpacity,
  transparent: true,
  depthTest: false
});
const EntityMesh = Entity(Mesh$2);
class LandingShadow extends EntityMesh {
  constructor() {
    super(geometry, materialTemplate.clone());
    this.progress = 0.0;
  }
  set progress(value) {
    const clamped = value < 0.0 ? 0.0 : value > 1.0 ? 1.0 : value;
    const scale = minimumScale + (maximumScale - minimumScale) * clamped;
    this.scale.set(scale, scale, 1.0);
    this.material.opacity = minimumOpacity + (maximumOpacity - minimumOpacity) * clamped;
  }
  dispose() {
    this.material.dispose();
  }
}
const {
  Object3D: Object3D$4,
  Mesh: Mesh$1,
  PlaneBufferGeometry,
  MeshBasicMaterial,
  Vector3: Vector3$2
} = self.THREE;
const EntityObject3D$1 = Entity(Object3D$4);
const AllocatableEntityObject3D$1 = Allocatable(EntityObject3D$1);
class Parachute extends AllocatableEntityObject3D$1 {
  constructor() {
    super();
    const size = 64;
    const geometry = new PlaneBufferGeometry(size, size);
    const material = new MeshBasicMaterial({
      color: 0xffffff,
      transparent: true
    });
    const dolly = new Object3D$4();
    dolly.position.z = -size - 20.0;
    this.add(dolly);
    this.dolly = dolly;
    const graphic = new Mesh$1(geometry, material);
    graphic.rotation.x += Math.PI / 6;
    this.add(graphic);
    this.graphic = graphic;
    this.size = size;
    this.collider = Point.allocate(this.position);
  }
  setup(game) {
    if (this.graphic.material.map == null) {
      this.graphic.material.map = parachute(game.assetBaseUrl);
      this.graphic.material.needsUpdate = true;
    }
  }
  set lod(value) {
    if (this.carriedObject) {
      this.carriedObject.lod = value;
    }
  }
  onFreed() {
    this.dolly.remove(this.carriedObject);
    this.carriedObject = null;
  }
  carry(object) {
    object.position.set(0, 0, 0);
    this.carriedObject = object;
    this.dolly.add(object);
  }
}
const {
  Object3D: Object3D$3,
  Vector2: Vector2$3
} = self.THREE;
const intermediateVector2$3 = new Vector2$3();
class ParachuteSystem {
  constructor(frameCount = 300, dropHeight = 420) {
    this.dropHeight = dropHeight;
    this.frameCount = frameCount;
    this.undroppedEntities = [];
    this.droppingEntities = [];
    this.removedEntities = [];
    this.entityParachutes = new Map();
    this.shadowedEntities = new Set();
    this.entityShadows = new Map();
    this.parachuteLayer = new Object3D$3();
  }
  dropEntity(entity, castShadow = false) {
    if (entity.arrival == null) {
      return;
    }
    if (castShadow) {
      this.shadowedEntities.add(entity);
    }
    this.undroppedEntities.push(entity);
  }
  removeEntity(entity) {
    const undroppedIndex = this.undroppedEntities.indexOf(entity);
    if (undroppedIndex !== -1) {
      this.undroppedEntities.splice(undroppedIndex, 1);
    }
    const droppedIndex = this.droppingEntities.indexOf(entity);
    if (droppedIndex !== -1) {
      this.droppingEntities.splice(droppedIndex, 1);
    }
    this.removedEntities.push(entity);
  }
  removeShadow(entity) {
    this.shadowedEntities.delete(entity);
    const shadow = this.entityShadows.get(entity);
    if (shadow !== undefined) {
      this.entityShadows.delete(entity);
      this.parachuteLayer.remove(shadow);
      shadow.dispose();
    }
  }
  teardown() {
    this.undroppedEntities.forEach(entity => this.removeEntity(entity));
    this.droppingEntities.forEach(entity => this.removeEntity(entity));
    this.entityShadows.forEach(shadow => {
      this.parachuteLayer.remove(shadow);
      shadow.dispose();
    });
    this.entityShadows.clear();
    this.shadowedEntities.clear();
  }
  update(game) {
    const {
      lodSystem,
      mapSystem,
      tick
    } = game;
    const {
      grid
    } = mapSystem;
    this.removedEntities.forEach(entity => {
      this.removeShadow(entity);
      const parachute = this.entityParachutes.get(entity);
      if (parachute !== undefined) {
        this.entityParachutes.delete(entity);
        this.parachuteLayer.remove(parachute);
        lodSystem.removeEntity(parachute);
        Parachute.free(parachute);
      }
    });
    this.removedEntities = [];
    while (this.undroppedEntities.length) {
      const entity = this.undroppedEntities.shift();
      const {
        arrival
      } = entity;
      const position = grid.indexToPosition(arrival.tileIndex, intermediateVector2$3);
      const parachute = Parachute.allocate();
      parachute.setup(game);
      parachute.position.x = position.x;
      parachute.position.y = position.y;
      parachute.carry(entity);
      lodSystem.addEntity(parachute);
      this.entityParachutes.set(entity, parachute);
      this.parachuteLayer.add(parachute);
      arrival.droppedAt(tick);
      if (this.shadowedEntities.has(entity)) {
        const shadow = new LandingShadow();
        shadow.position.set(position.x, position.y, grid.cellSize / 4.0);
        this.entityShadows.set(entity, shadow);
        this.parachuteLayer.add(shadow);
      }
      this.droppingEntities.push(entity);
    }
    for (let i = 0; i < this.droppingEntities.length; ++i) {
      const entity = this.droppingEntities[i];
      const {
        arrival
      } = entity;
      const parachute = this.entityParachutes.get(entity);
      const frameDelta = tick - arrival.droppedTick;
      const time = frameDelta / this.frameCount;
      const floor = parachute.size + grid.cellSize / 4.0;
      const position = this.dropHeight - time * this.dropHeight;
      parachute.position.z = position + floor;
      parachute.rotation.y = 0.1 * Math.sin(position / (0.35 * this.dropHeight) * Math.PI);
      const shadow = this.entityShadows.get(entity);
      if (shadow !== undefined) {
        shadow.progress = time;
      }
      if (frameDelta >= this.frameCount) {
        arrival.arrive();
        this.droppingEntities.splice(i--, 1);
        this.entityParachutes.delete(entity);
        this.parachuteLayer.remove(parachute);
        this.removeShadow(entity);
        lodSystem.removeEntity(parachute);
        Parachute.free(parachute);
      }
    }
  }
}
class StateSystem {
  get hasCurrentPopulation() {
    return this.population && this.population.present > -1 && this.population.maximum > -1;
  }
  recordPlayerConnected() {
    this.population.allTime++;
    this.population.present++;
  }
  recordPlayerDisconnected() {
    if (this.population.present > 0) {
      this.population.present--;
    }
  }
  recordPlayerKnockedOut() {
    this.population.knockedOut++;
  }
  finishMatch(tick, winner = null) {
    this.matchFinished = true;
    this.matchFinishTick = tick;
    this.winner = winner;
  }
  setup(game) {
    this.winner = null;
    this.matchFinished = false;
    this.matchFinishTick = -1;
    this.population = {
      allTime: 0,
      present: -1,
      maximum: game.maximumPlayers != null ? game.maximumPlayers : 1,
      knockedOut: 0
    };
  }
  update(game) {
    const {
      playerSystem,
      tick
    } = game;
    const {
      players
    } = playerSystem;
    let lastLivingPlayer = null;
    let livingPlayerCount = 0;
    for (let i = 0; i < players.length; ++i) {
      const player = players[i];
      const {
        health
      } = player;
      if (health.dead) {
        continue;
      }
      lastLivingPlayer = player;
      livingPlayerCount++;
    }
    if (livingPlayerCount < 2) {
      this.finishMatch(tick, lastLivingPlayer);
    }
  }
  teardown(game) {}
}
const {
  Mesh,
  Object3D: Object3D$2,
  CylinderBufferGeometry,
  RawShaderMaterial,
  Vector2: Vector2$2
} = self.THREE;
const vertexShader = `
precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float opacity;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 vPosition;
varying float vOpacity;

${constants}
${rotate2d}

void main() {
  vUv = uv;

  vec3 finalPosition = position;

  finalPosition.xy = rotate2d(PI / 2.0, finalPosition.xy);
  finalPosition.xz = rotate2d(PI / -2.0, finalPosition.xz);

  vPosition = position;
  vOpacity = opacity;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}`;
const fragmentShader = `
precision highp float;

varying vec2 vUv;
varying vec3 vPosition;
varying float vOpacity;

void main() {
  vec2 halfUv = abs(vUv - 0.5);

  float alpha = pow(length(halfUv), 3.0);

  if (vPosition.y < 0.0) {
    alpha = min(0.0, 0.5 - vPosition.y);
  }

  gl_FragColor = vec4(0.6, 0.9, 1.0, (alpha * 0.9 + 0.1) * vOpacity);
}`;
const intermediateVector2$2 = new Vector2$2();
const EntityObject3D = Entity(Object3D$2);
const AllocatableEntityObject3D = Allocatable(EntityObject3D);
class Iceberg extends AllocatableEntityObject3D {
  setup(game) {
    const {
      mapSystem
    } = game;
    const {
      grid
    } = mapSystem;
    const {
      cellSize
    } = grid;
    const radius = cellSize / 2.0;
    this.startTick = game.tick;
    if (this.graphic == null || this.graphic.geometry.parameters.radiusTop !== radius) {
      if (this.graphic != null) {
        this.remove(this.graphic);
      }
      const uniforms = {
        opacity: {
          value: 0
        }
      };
      const geometry = new CylinderBufferGeometry(radius, radius, radius, 6);
      const material = new RawShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        blending: THREE.AdditiveBlending,
        transparent: true,
        side: 2
      });
      const graphic = new Mesh(geometry, material);
      graphic.renderOrder = 1;
      this.add(graphic);
      this.graphic = graphic;
      this.uniforms = uniforms;
    }
  }
  update(game) {
    const {
      mapSystem
    } = game;
    const {
      grid
    } = mapSystem;
    const {
      tick,
      width,
      height
    } = game;
    const tickDelta = tick - this.startTick;
    intermediateVector2$2.set(this.position.x, this.position.y).normalize();
    intermediateVector2$2.normalize();
    this.position.x += intermediateVector2$2.x / 3.0;
    this.position.y += intermediateVector2$2.y / 3.0;
    const scale = Math.min(tickDelta / 75, 1.0);
    const diminish = scale * scale * scale;
    this.rotation.z = Math.sin(tickDelta / 500) * Math.PI;
    this.position.z = Math.cos(tickDelta / 10) * (grid.cellSize / 2.0) * (1.0 - diminish * 0.9);
    this.uniforms.opacity.value = diminish;
  }
}
const {
  Object3D: Object3D$1,
  Vector2: Vector2$1
} = self.THREE;
const intermediateVector2$1 = new Vector2$1();
class EntityRemovalSystem {
  constructor() {
    this.teleportingEntities = [];
    this.freezingEntities = [];
    this.frozenEntities = [];
    this.entityIcebergs = {};
    this.icebergLayer = new Object3D$1();
  }
  teardown(game) {
    for (let entityId in this.entityIcebergs) {
      const iceberg = this.entityIcebergs[entityId];
      iceberg.teardown(game);
      Iceberg.free(iceberg);
      this.icebergLayer.remove(iceberg);
    }
    this.entityIcebergs = {};
    this.teleportingEntities = [];
    this.freezingEntities = [];
    this.frozenEntities = [];
  }
  teleportEntity(entity) {
    if (entity.presence == null || entity.presence.exiting) {
      return;
    }
    entity.presence.exiting = true;
    this.teleportingEntities.push(entity);
  }
  freezeEntity(entity) {
    if (entity.presence == null || entity.presence.exiting) {
      return;
    }
    entity.presence.exiting = true;
    this.freezingEntities.push(entity);
  }
  update(game) {
    const {
      mapSystem
    } = game;
    const {
      grid,
      map
    } = mapSystem;
    const {
      cellSize
    } = grid;
    while (this.freezingEntities.length) {
      const entity = this.freezingEntities.pop();
      const iceberg = Iceberg.allocate();
      const tileIndex = grid.positionToIndex(entity.position);
      console.log('Adding iceberg');
      iceberg.setup(game);
      entity.position.set(0, 0, -16);
      iceberg.add(entity);
      grid.indexToPosition(tileIndex, iceberg.position);
      iceberg.position.y -= 32;
      iceberg.position.z += 32;
      this.entityIcebergs[entity.uuid] = iceberg;
      this.frozenEntities.push(entity);
      this.icebergLayer.add(iceberg);
    }
    if (map == null) {
      return;
    }
    const {
      tileRings
    } = map;
    for (let i = 0; i < this.frozenEntities.length; ++i) {
      const entity = this.frozenEntities[i];
      const iceberg = this.entityIcebergs[entity.uuid];
      const islandRadius = (tileRings.length + 2.0) * cellSize;
      iceberg.update(game);
      intermediateVector2$1.copy(iceberg.position);
      const icebergDistance = intermediateVector2$1.length();
      intermediateVector2$1.set(game.width / 2, game.height / 2);
      const screenDistance = intermediateVector2$1.length() + islandRadius;
      if (icebergDistance > screenDistance) {
        const {
          presence
        } = entity;
        console.log('Removing iceberg');
        iceberg.remove(entity);
        this.icebergLayer.remove(iceberg);
        delete this.entityIcebergs[entity.uuid];
        this.frozenEntities.splice(i--, 1);
        Iceberg.free(iceberg);
        presence.present = presence.exiting = false;
      }
    }
    for (let i = 0; i < this.teleportingEntities.length; ++i) {
      const entity = this.teleportingEntities[i];
      const {
        presence,
        visibility
      } = entity;
      const delta = performance.now() - presence.exitTime;
      const threshold = 1500;
      const elapsed = delta - threshold;
      if (elapsed < 0.0) {
        continue;
      }
      const teleportDuration = 700;
      const time = Math.min(1.0, elapsed / teleportDuration);
      const distance = time * time * grid.cellSize / 1.5;
      const opacity = 1.0 - time;
      entity.position.z = distance;
      if (visibility) {
        visibility.opacity = opacity;
      }
      if (time === 1.0) {
        this.teleportingEntities.splice(i--, 1);
        presence.present = presence.exiting = false;
      }
    }
  }
}
const {
  Object3D,
  Vector2
} = self.THREE;
const intermediateVector2 = new Vector2();
class DropSystem {
  setup(game) {
    this.newDrops = [];
    this.parachutingDrops = [];
    this.drops = [];
    this.dropLayer = new Object3D();
    const {
      gameMode
    } = game;
    this.shieldChance = gameMode && gameMode.shieldChance || 0;
    this.shieldUnlock = gameMode && gameMode.shieldUnlock || {};
    this.shieldsUnlocked = false;
  }
  teardown(game) {
    const drops = this.drops.concat(this.newDrops).concat(this.parachutingDrops);
    for (let i = 0; i < drops.length; ++i) {
      const drop = drops[i];
      this.dropLayer.remove(drop);
      drop.teardown(game);
      Drop.free(drop);
    }
    this.drops = [];
    this.newDrops = [];
    this.parachutingDrops = [];
  }
  addDrop(tileIndex = -1, containedItem = this.rollContents()) {
    const drop = Drop.allocate(containedItem);
    drop.arrival.tileIndex = tileIndex;
    drop.contents.inventory.push(containedItem);
    this.drops.push(drop);
    this.newDrops.push(drop);
  }
  rollContents() {
    if (!this.shieldsUnlocked) {
      return powerupType.BIG_SNOWBALL;
    }
    return Math.random() < this.shieldChance ? powerupType.SHIELD : powerupType.BIG_SNOWBALL;
  }
  shieldsShouldUnlock(game) {
    if (this.shieldChance <= 0) {
      return false;
    }
    const {
      ticks,
      remainingElves,
      tileFraction
    } = this.shieldUnlock;
    const {
      mapSystem,
      stateSystem,
      tick,
      setupTick
    } = game;
    if (ticks != null && tick - setupTick >= ticks) {
      return true;
    }
    const {
      population
    } = stateSystem;
    if (remainingElves != null && population != null && population.maximum - population.knockedOut < remainingElves) {
      return true;
    }
    const {
      map
    } = mapSystem;
    if (tileFraction != null && map != null && map.initialPassableTileCount > 0 && map.passableTileCount <= map.initialPassableTileCount * tileFraction) {
      return true;
    }
    return false;
  }
  update(game) {
    const {
      playerSystem,
      collisionSystem,
      entityRemovalSystem,
      mapSystem,
      parachuteSystem
    } = game;
    const {
      map,
      grid
    } = mapSystem;
    if (!this.shieldsUnlocked && this.shieldsShouldUnlock(game)) {
      this.shieldsUnlocked = true;
    }
    if (map == null) {
      return;
    }
    while (this.newDrops.length) {
      const drop = this.newDrops.shift();
      drop.setup(game);
      const {
        arrival
      } = drop;
      this.parachutingDrops.push(drop);
      if (arrival.tileIndex < 0) {
        arrival.tileIndex = map.getRandomHabitableTileIndex();
      }
      parachuteSystem.dropEntity(drop);
    }
    for (let i = 0; i < this.parachutingDrops.length; ++i) {
      const drop = this.parachutingDrops[i];
      const {
        arrival
      } = drop;
      if (arrival.arrived) {
        this.parachutingDrops.splice(i--, 1);
        const position = grid.indexToPosition(arrival.tileIndex, intermediateVector2);
        drop.position.x = position.x;
        drop.position.y = position.y;
        collisionSystem.addCollidable(drop);
        this.dropLayer.add(drop);
      }
    }
    for (let i = 0; i < this.drops.length; ++i) {
      const drop = this.drops[i];
      const {
        arrival,
        presence
      } = drop;
      if (arrival.arrived) {
        drop.update(game);
      }
      const tileIndex = grid.positionToIndex(drop.position);
      const tileState = map.getTileState(tileIndex);
      if (arrival.arrived) {
        if (!presence.gone) {
          if (!presence.exiting) {
            if (tileState === 4.0) {
              collisionSystem.removeCollidable(drop);
              entityRemovalSystem.freezeEntity(drop);
            } else if (drop.collidingPlayer != null) {
              playerSystem.assignPlayerPowerup(drop.collidingPlayer.playerId, drop.contents.inventory[0]);
              drop.collidingPlayer = null;
              drop.spin();
            }
          } else {
            collisionSystem.removeCollidable(drop);
          }
        } else {
          if (drop.parent === this.dropLayer) {
            this.dropLayer.remove(drop);
          }
          this.drops.splice(i--, 1);
          drop.teardown(game);
          Drop.free(drop);
        }
      }
    }
  }
}
const {
  Math: ThreeMath,
  Vector3: Vector3$1
} = self.THREE;
const EntityClass = Entity();
new Vector3$1();
const isCollectableShield = (drop, tileIndex, map) => {
  const {
    arrival,
    presence,
    contents
  } = drop;
  return arrival.arrived && arrival.tileIndex === tileIndex && !presence.exiting && !presence.gone && contents.inventory[0] === powerupType.SHIELD && map.isTraversable(tileIndex);
};
class Bot extends EntityClass {
  setup(game) {
    const {
      playerSystem
    } = game;
    this.id = ThreeMath.generateUUID();
    this.player = playerSystem.addPlayer();
    this.player.speed.scale = 0.75;
    this.collider = Rectangle.allocate(200, 200, this.player.position);
    this.lastTarget = null;
    this.lastThrowTick = game.tick;
    this.soughtDrop = null;
    this.soughtTile = -1;
    this.seekingShield = false;
  }
  update(game) {
    const {
      playerSystem,
      mapSystem,
      collisionSystem,
      tick
    } = game;
    const {
      map,
      grid
    } = mapSystem;
    const {
      player,
      lastThrowTick
    } = this;
    const {
      path,
      arrival
    } = player;
    if (!arrival.arrived) {
      return;
    }
    if (path.destinationReached) {
      this.seekingShield = false;
      const shieldDrop = Math.random() > 0.95 ? this.findShieldDrop(game) : null;
      if (shieldDrop != null) {
        const index = shieldDrop.arrival.tileIndex;
        this.soughtDrop = shieldDrop;
        this.soughtTile = index;
        this.seekingShield = true;
        playerSystem.assignPlayerDestination(player.playerId, {
          index,
          position: grid.indexToPosition(index)
        });
      } else if (Math.random() > 0.985) {
        const index = map.getRandomNearbyPassableTileIndex(grid.positionToIndex(player.position), 6);
        const position = grid.indexToPosition(index);
        playerSystem.assignPlayerDestination(player.playerId, {
          index,
          position
        });
      }
    } else if (this.seekingShield && !isCollectableShield(this.soughtDrop, this.soughtTile, map)) {
      this.seekingShield = false;
      path.follow(path.waypoints.slice(0, 1));
    }
    const {
      quadTree
    } = collisionSystem;
    const nearbyTargets = quadTree.getObjectsNear(this);
    let nextTarget = null;
    if (this.lastTarget != null) {
      const lastTargetIndex = nearbyTargets.indexOf(this.lastTarget);
      if (lastTargetIndex > -1) {
        nextTarget = this.lastTarget;
      }
    }
    if (nextTarget == null) {
      for (let i = 0; i < nearbyTargets.length; ++i) {
        const target = nearbyTargets[i];
        if (target.playerId == null || target === player || target.position.length() === 0) {
          continue;
        }
        if (Math.random() > 0.25) {
          if (player.position.distanceTo(target.position) < 320) {
            nextTarget = target;
            break;
          }
        }
      }
    }
    if (nextTarget != null && tick - lastThrowTick > 40) {
      if (Math.random() > 0.5) {
        playerSystem.assignPlayerTargetedPosition(player.playerId, nextTarget.position);
      }
      this.lastThrowTick = tick;
    }
    this.lastTarget = nextTarget;
  }
  findShieldDrop(game) {
    const {
      gameMode,
      dropSystem,
      mapSystem
    } = game;
    const range = gameMode != null ? gameMode.botShieldRange : null;
    const {
      player,
      soughtDrop,
      soughtTile
    } = this;
    if (range == null || dropSystem.drops == null || player.health.dead || player.shield.active) {
      return null;
    }
    const {
      map,
      grid
    } = mapSystem;
    const maxDistance = range * grid.cellHeight;
    const maxDistanceSquared = maxDistance * maxDistance;
    let nearest = null;
    let nearestDistanceSquared = Infinity;
    for (let i = 0; i < dropSystem.drops.length; ++i) {
      const drop = dropSystem.drops[i];
      const {
        tileIndex
      } = drop.arrival;
      if (!isCollectableShield(drop, tileIndex, map) || drop === soughtDrop && tileIndex === soughtTile) {
        continue;
      }
      const dx = drop.position.x - player.position.x;
      const dy = drop.position.y - player.position.y;
      const distanceSquared = dx * dx + dy * dy;
      if (distanceSquared <= maxDistanceSquared && distanceSquared < nearestDistanceSquared) {
        nearest = drop;
        nearestDistanceSquared = distanceSquared;
      }
    }
    return nearest;
  }
}
class BotSystem {
  constructor() {
    this.botMap = {};
    this.bots = [];
    this.newBots = [];
    this.oldBots = [];
  }
  teardown(game) {}
  addBot() {
    const bot = new Bot();
    this.botMap[bot.id] = bot;
    this.newBots.push(bot);
  }
  removeBot(id) {
    const bot = this.botMap[id];
    this.oldBots.push(bot);
  }
  update(game) {
    while (this.newBots.length) {
      const bot = this.newBots.shift();
      this.botMap[bot.id] = bot;
      this.bots.push(bot);
      bot.setup(game);
    }
    while (this.oldBots.length) {
      const bot = this.oldBots.shift();
      const index = this.bots.indexOf(bot);
      this.bits.splice(index, 1);
      bot.teardown(game);
      delete this.botMap[bot.id];
    }
    for (let i = 0; i < this.bots.length; ++i) {
      const bot = this.bots[i];
      bot.update(game);
    }
  }
}
class LocalLevel extends MainLevel {
  setup(game) {
    super.setup(game);
    const {
      clientSystem,
      dropSystem,
      mapSystem,
      playerSystem,
      botSystem
    } = game;
    this.lastErosionTick = 0;
    this.lastDropTick = 0;
    this.lastBotTick = 0;
    this.startTime = +new Date();
    this.announcedWin = false;
    const seed = Math.random() * 0x100000000 & 0xffffffff;
    mapSystem.rebuildMap(game, seed);
    const id = 'local';
    const player = playerSystem.addPlayer(id, -1);
    clientSystem.assignPlayer(player);
    const initialDrops = Math.floor(game.maximumPlayers / 4);
    const initialBots = game.initialPlayers != null ? game.initialPlayers : initialDrops;
    for (let i = 0; i < initialDrops; ++i) {
      dropSystem.addDrop(-1, powerupType.BIG_SNOWBALL);
    }
    for (let i = 0; i < initialBots; ++i) {
      botSystem.addBot();
    }
  }
  update(game) {
    super.update(game);
    const {
      mapSystem,
      dropSystem,
      botSystem,
      stateSystem,
      clientSystem,
      tick
    } = game;
    const {
      map
    } = mapSystem;
    const {
      population
    } = stateSystem;
    const {
      gameMode
    } = game;
    const dropInterval = gameMode && gameMode.dropInterval || 625;
    if (map && tick - this.lastDropTick > dropInterval) {
      this.lastDropTick = tick;
      const {
        min = 1,
        max = 1
      } = gameMode && gameMode.dropCount || {};
      const count = min + Math.floor(Math.random() * (max - min + 1));
      for (let i = 0; i < count; ++i) {
        dropSystem.addDrop();
      }
    }
    if (map && tick - this.lastErosionTick > 16) {
      this.lastErosionTick = tick;
      map.erode();
    }
    if (population.allTime < population.maximum) {
      if (map && tick - this.lastBotTick > 128) {
        botSystem.addBot();
        this.lastBotTick = tick;
      }
    }
    const clientPlayer = clientSystem.player;
    const playerSurvives = clientPlayer != null && !clientPlayer.health.dead;
    if (!this.announcedWin && playerSurvives && population.knockedOut >= population.maximum - 1) {
      this.announcedWin = true;
      window.santaApp.fire('game-stop', {
        level: population.knockedOut,
        maxLevel: population.maximum - 1,
        levelLabel: 'iced',
        gameoverMessage: sceneString('snowball_gameover_win')
      });
      gtag('event', 'gameAction', {
        game: 'snowball',
        action: 'win'
      });
      game.finish();
    }
  }
}
const GameType = {
  LOCAL: 'local',
  MULTIPLAYER: 'multiplayer'
};
const GameMode = {
  QUICK: {
    name: 'quick',
    maximumPlayers: 25,
    initialPlayers: 12,
    treeDensity: 0.10,
    unitWidth: 32,
    unitHeight: 32,
    dropInterval: 5 * 60,
    dropCount: {
      min: 1,
      max: 3
    },
    shieldChance: 1 / 2,
    shieldUnlock: {
      ticks: 0
    },
    botShieldRange: 8
  },
  ARENA: {
    name: 'arena',
    maximumPlayers: 100,
    initialPlayers: 25,
    treeDensity: 0.15,
    unitWidth: 64,
    unitHeight: 64,
    dropInterval: 625,
    shieldChance: 1 / 3,
    shieldUnlock: {
      ticks: 60 * 60,
      remainingElves: 70,
      tileFraction: 0.7
    }
  }
};
const TILE_SCALE = 64.0;
class SnowballGame extends Game {
  static get is() {
    return 'snowball-game';
  }
  get maximumPlayers() {
    return this._gameMode.maximumPlayers;
  }
  get initialPlayers() {
    return this._gameMode.initialPlayers;
  }
  get gameMode() {
    return this._gameMode;
  }
  set gameMode(mode) {
    const nextMode = typeof mode === 'string' ? Object.keys(GameMode).map(key => GameMode[key]).find(candidate => candidate.name === mode) : mode;
    if (nextMode == null) {
      console.warn(`Unknown snowball game mode: ${mode}`);
      return;
    }
    this._gameMode = nextMode;
    this.mapSystem.resize(nextMode.unitWidth, nextMode.unitHeight, TILE_SCALE);
  }
  constructor() {
    super();
    this._gameMode = GameMode.ARENA;
    this.assetBaseUrl = '';
    this.collisionSystem = new Collision2DSystem(object => object.collider || object);
    this.lodSystem = new LodSystem();
    this.effectSystem = new EffectSystem();
    this.snowballSystem = new SnowballSystem();
    this.parachuteSystem = new ParachuteSystem();
    this.entityRemovalSystem = new EntityRemovalSystem();
    this.dropSystem = new DropSystem();
    this.mapSystem = new MapSystem(GameMode.ARENA.unitWidth, GameMode.ARENA.unitHeight, TILE_SCALE);
    this.botSystem = new BotSystem();
    this.clientSystem = new ClientSystem();
    this.networkSystem = new NetworkSystem();
    this.playerSystem = new PlayerSystem();
    this.stateSystem = new StateSystem();
    this.renderSystem.renderer.setClearColor(0x71A7DB, 1.0);
  }
  setup() {
    this.setupTick = this.tick;
    super.setup();
    this.mapSystem.setup(this);
    this.playerSystem.setup(this);
    this.clientSystem.setup(this);
    this.networkSystem.setup(this);
    this.dropSystem.setup(this);
    this.stateSystem.setup(this);
  }
  update() {
    super.update();
    this.collisionSystem.update(this);
    this.lodSystem.update(this);
    this.snowballSystem.update(this);
    this.entityRemovalSystem.update(this);
    this.dropSystem.update(this);
    this.parachuteSystem.update(this);
    this.effectSystem.update(this);
    this.mapSystem.update(this);
    this.clientSystem.update(this);
    this.networkSystem.update(this);
    this.botSystem.update(this);
    this.playerSystem.update(this);
  }
  teardown() {
    super.teardown();
    this.collisionSystem.teardown(this);
    this.lodSystem.teardown(this);
    this.snowballSystem.teardown(this);
    this.entityRemovalSystem.teardown(this);
    this.dropSystem.teardown(this);
    this.parachuteSystem.teardown(this);
    this.effectSystem.teardown(this);
    this.mapSystem.teardown(this);
    this.clientSystem.teardown(this);
    this.networkSystem.teardown(this);
    this.botSystem.teardown(this);
    this.playerSystem.teardown(this);
    this.stateSystem.teardown(this);
  }
  start(gameType = GameType.MULTIPLAYER) {
    switch (gameType) {
      case GameType.MULTIPLAYER:
        this.networkSystem.connect();
        this.setLevel(new LobbyLevel());
        break;
      case GameType.LOCAL:
        this.setLevel(new LocalLevel());
        break;
    }
  }
}
customElements.define(SnowballGame.is, SnowballGame);
sceneApi.preload.sounds('snowball_load_sounds');
sceneApi.preload.images('img/sleigh.png', 'img/item-frame.png', 'img/parachute.png', 'img/powerup-1.png', 'img/shield-gift.png', 'img/snowball.png', 'img/tiles.png', 'models/elf-tidy.png', 'models/elf.png');
const awaitAnimation = element => new Promise(resolve => {
  const cleanup = event => {
    element.removeEventListener('animationend', cleanup);
    resolve();
  };
  element.addEventListener('animationend', cleanup);
});
const modeChoice = document.getElementById('modeChoice');
const quickBtn = document.getElementById('quickBtn');
const arenaBtn = document.getElementById('arenaBtn');
const splash = document.getElementById('splash');
let game = null;
let selectedMode = GameMode.ARENA;
sceneApi.ready(async () => {
  const chooseMode = mode => ev => {
    selectedMode = mode;
    modeChoice.hidden = true;
    document.body.classList.add('intro');
    sceneApi.play('generic_button_click');
    awaitAnimation(dropCloud).then(() => startGame());
  };
  quickBtn.addEventListener('click', chooseMode(GameMode.QUICK));
  arenaBtn.addEventListener('click', chooseMode(GameMode.ARENA));
});
sceneApi.addEventListener('restart', ev => {
  startGame();
});
function startGame() {
  sceneApi.play('music_start_ingame');
  if (game !== null) {
    game.teardown();
    document.body.removeChild(game);
  }
  document.body.classList.remove('intro');
  game = document.createElement('snowball-game');
  game.gameMode = selectedMode;
  document.body.insertBefore(game, document.body.firstElementChild);
  game.assetBaseUrl = '';
  window.requestAnimationFrame(() => {
    game.start('local');
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        if (splash.parentNode !== null) {
          document.body.removeChild(splash);
        }
      });
    }, 1000);
  });
}