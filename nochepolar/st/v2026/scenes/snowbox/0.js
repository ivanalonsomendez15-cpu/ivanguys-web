import { s as sceneApi } from '../../_e310d67a.js';
import { i as isTouchDevice } from '../../_271b59a1.js';
import '../../_e1311d95.js';
function createCustomEvent(eventName, data = {}) {
  const event = new window.CustomEvent(eventName, {
    detail: data
  });
  return event;
}
class RAFManager {
  constructor() {
    this.handleRAF = this.handleRAF.bind(this);
    this.now = 0;
  }
  init() {
    this.handleRAF(this.now);
  }
  handleRAF(now) {
    this.now = now;
    window.dispatchEvent(createCustomEvent('RAF', {
      now
    }));
    this.raf = window.requestAnimationFrame(this.handleRAF);
  }
  cancel() {
    window.cancelAnimationFrame(this.raf);
  }
}
var RAFManager$1 = new RAFManager();
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function toRadian(degrees) {
  return degrees * Math.PI / 180;
}
function subtractLight(color, amount) {
  let cc = parseInt(color, 16) - amount;
  let c = cc < 0 ? 0 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
  return c;
}
function darken(color, amount) {
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  amount = parseInt(255 * amount / 100);
  return color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(color.substring(2, 4), amount)}${subtractLight(color.substring(4, 6), amount)}`;
}
var CONFIG$4 = {
  BACKGROUND_COLOR: 0x2c96ff,
  COLORS: {
    ICE: 0x56b8e1,
    ICE_HEXA: '#56b8e1',
    TERRAIN: 0xd2d2d2,
    GHOST: 0xf0f0f0
  },
  SHININESS: 330,
  MODEL_UNIT: 198.8005,
  SCENE_SIZE: 1000,
  TIMESTEP: 1 / 60,
  ELEVATE_SCALE: 0.05,
  CASE_SIZE: 1,
  EDGES_PERCENT_SIZE: 0.05
};
var cubeConfig = {
  NAME: 'cube',
  NORMAL_MAP: './models/1_cube.jpg',
  OBJ: './models/1_cube.obj',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 0.93
};
var archConfig = {
  NAME: 'arch',
  NORMAL_MAP: './models/arch.jpg',
  OBJ: './models/arch.obj',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 1
};
var sphereConfig = {
  NAME: 'sphere',
  OBJ: './models/4_sphere.obj',
  NORMAL_MAP: './models/4_sphere.jpg',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 1
};
var treeConfig = {
  NAME: 'tree',
  MASS: 25,
  SELECTABLE: true,
  COLLIDABLE: true,
  SIZE: 1,
  OBJ: './models/pine-tree.obj',
  WRL: './models/pine-tree.wrl',
  COLORS: [0x03B4CA, 0x5B4438],
  MAIN_COLOR_HEXA: '#03B4CA'
};
var quarterCircleConfig = {
  NAME: 'quarter-circle',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 1,
  OBJ: './models/quarter-circle.obj',
  WRL: './models/quarter-circle.wrl',
  NORMAL_MAP: './models/quarter-circle.jpg',
  ROTATION_Y: Math.PI / 2
};
var prismConfig = {
  NAME: 'prism',
  NORMAL_MAP: './models/prism.jpg',
  OBJ: './models/prism.obj',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 1
};
var giftConfig = {
  NAME: 'gift',
  OBJ: './models/gift.obj',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 1.05,
  COLORS: [0xF9D231, 0x009BFF],
  MAIN_COLOR_HEXA: '#009BFF'
};
var snowmanConfig = {
  NAME: 'snowman',
  MASS: 8,
  SELECTABLE: true,
  COLLIDABLE: true,
  SIZE: 1,
  OBJ: './models/snowman.obj',
  WRL: './models/snowman.wrl',
  MAP: './models/snowman.jpg',
  NORMAL_MAP: './models/snowman_normal.jpg',
  COLOR: 0xffffff,
  MAIN_COLOR_HEXA: '#ffffff'
};
var pyramidConfig = {
  NAME: 'pyramid',
  MASS: 8,
  SELECTABLE: true,
  SIZE: 1,
  OBJ: './models/pyramid.obj',
  WRL: './models/pyramid.wrl',
  NORMAL_MAP: './models/pyramid.jpg'
};
class WRLLoader {
  load(path) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('GET', path);
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          this.parse(xhr.responseText, resolve, reject);
        }
      });
      xhr.send(null);
    });
  }
  parse(string, resolve, reject) {
    const groups = [];
    const shapes = string.split('Shape');
    shapes.shift();
    for (let i = 0; i < shapes.length; i++) {
      const vertices = [];
      const faces = [];
      let points = shapes[i].split('point [');
      let coordIndexs = shapes[i].split('coordIndex [');
      points.shift();
      coordIndexs.shift();
      let indexA = points[0].indexOf(']');
      let indexB = coordIndexs[0].indexOf(']');
      points = points[0].slice(0, indexA);
      coordIndexs = coordIndexs[0].slice(0, indexB);
      points = points.split(' ').filter(function (entry) {
        return /\S/.test(entry);
      });
      coordIndexs = coordIndexs.split(' ').filter(function (entry) {
        return /\S/.test(entry) && entry.trim() != '-1,';
      });
      for (let p = 0; p < points.length; p++) {
        let point = points[p];
        let lastIndex = point[point.length - 1];
        if (point[lastIndex] == ',') {
          point = point.slice(0, lastIndex);
        }
        vertices.push(parseInt(point));
      }
      for (let c = 0; c < coordIndexs.length; c++) {
        let coordIndex = coordIndexs[c];
        let lastIndex = coordIndex[coordIndex.length - 1];
        if (coordIndex[lastIndex] == ',') {
          coordIndex = coordIndex.slice(0, lastIndex);
        }
        faces.push(parseInt(coordIndex));
      }
      groups.push({
        vertices,
        faces
      });
    }
    resolve(groups);
  }
}
class LoaderManager {
  constructor() {
    this.subjects = {};
    this.textureLoader = new THREE.TextureLoader();
    this.OBJLoader = new THREE.OBJLoader();
    this.WRLLoader = new WRLLoader();
    this.load = this.load.bind(this);
  }
  load(object, callback) {
    if (this.subjects[object.name]) {
      callback();
      return;
    }
    const {
      name,
      normalMap,
      map,
      obj,
      wrl,
      skybox
    } = object;
    const promises = [];
    this.subjects[name] = {};
    if (normalMap) {
      promises.push(this.loadTexture(normalMap, name, 'normalMap'));
    }
    if (map) {
      promises.push(this.loadTexture(map, name, 'map'));
    }
    if (obj) {
      promises.push(this.loadOBJ(obj, name));
    }
    if (wrl) {
      promises.push(this.loadWRL(wrl, name));
    }
    if (skybox) {
      if (!this.subjects[name].textures) {
        this.subjects[name].textures = [];
      }
      const {
        prefix,
        directions,
        suffix
      } = skybox;
      for (let i = 0; i < 6; i++) {
        promises.push(this.loadTexture(prefix + directions[i] + suffix, name, 'multiple', i));
      }
    }
    if (object.gif) {
      this.subjects[object.name].sources = [];
      object.gif.forEach(source => {
        promises.push(this.loadGIF(object.name, source));
      });
    }
    Promise.all(promises).then(callback);
  }
  loadOBJ(url, name) {
    return new Promise(resolve => {
      this.OBJLoader.load(url, result => {
        this.subjects[name].obj = result;
        resolve(result);
      });
    });
  }
  loadWRL(url, name) {
    return new Promise(resolve => {
      this.WRLLoader.load(url).then(result => {
        this.subjects[name].wrl = result;
        resolve(result);
      });
    });
  }
  loadTexture(url, name, type, order = null) {
    return new Promise(resolve => {
      this.textureLoader.load(url, result => {
        if (type === 'multiple') {
          result.order = order;
          this.subjects[name].textures.push(result);
        } else {
          this.subjects[name][type] = result;
        }
        resolve(result);
      });
    });
  }
  loadGIF(name, source) {
    return new Promise(resolve => {
      const image = new Image();
      image.src = source;
      image.onload = () => {
        this.subjects[name].sources.push(image);
        resolve(image);
      };
    });
  }
}
var LoaderManager$1 = new LoaderManager();
class SoundManager {
  constructor() {
    window.addEventListener('shape_collide', this.playCollisionSound.bind(this));
    this.lastCollisionTime = 0;
    this.maxMassForShape = {
      arch: 850,
      sphere: 67,
      tree: 486,
      cube: 411,
      gift: 592,
      pyramid: 536,
      prism: 555,
      snowman: 100
    };
  }
  playCollisionSound(e) {
    const {
      force,
      type,
      mass
    } = e.detail;
    const pitch = this.getPitch(type, mass);
    const volume = Math.max(0, Math.min(1, (force - 0.5) / 3));
    this.play('snowbox_collision', volume, pitch, mass > 40);
  }
  getPitch(type, mass) {
    const maxMass = this.maxMassForShape[type] || 100;
    const massPitch = Math.min(2, Math.max(0.3, mass / maxMass));
    return Math.abs(1 - massPitch) + 0.5 + Math.random() * 0.2;
  }
  play(event, ...args) {
    const argsToSend = [].slice.call(arguments);
    argsToSend.unshift('sound-trigger');
    window.santaApp.fire.apply(this, argsToSend);
  }
  highlightShape(subject) {
    const pitch = this.getPitch(subject.name, subject.currentMass);
    this.play('snowbox_world_shape_highlight', pitch);
  }
}
var SoundManager$1 = new SoundManager();
class Lights {
  constructor(scene) {
    const light = new THREE.SpotLight(0xbbbbbb, 0.2, 0, 100);
    light.position.set(-250, 250, -300);
    scene.add(light);
    scene.spotLight = light;
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.85);
    scene.add(hemisphereLight);
  }
}
var CONFIG$3 = {
  NAME: 'skybox',
  PREFIX: './img/skybox_v09/',
  DIRECTIONS: ['xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg'],
  SUFFIX: '.jpg',
  SCALE: 1.7,
  Y_POS: -30,
  Y_ROTATION: 25
};
class Sky {
  constructor(scene) {
    this.scene = scene;
    this.init = this.init.bind(this);
    LoaderManager$1.load({
      name: CONFIG$3.NAME,
      skybox: {
        prefix: CONFIG$3.PREFIX,
        directions: CONFIG$3.DIRECTIONS,
        suffix: CONFIG$3.SUFFIX
      }
    }, this.init);
  }
  init() {
    const geometry = new THREE.CubeGeometry(62, 62, 62);
    const {
      textures
    } = LoaderManager$1.subjects[CONFIG$3.NAME];
    const material = [];
    textures.sort((a, b) => a.order > b.order ? 1 : -1);
    textures.forEach(texture => {
      material.push(new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide
      }));
    });
    this.skyBox = new THREE.Mesh(geometry, material);
    this.skyBox.position.y = CONFIG$3.Y_POS;
    this.skyBox.rotation.y = toRadian(CONFIG$3.Y_ROTATION);
    this.skyBox.scale.set(CONFIG$3.SCALE, CONFIG$3.SCALE, CONFIG$3.SCALE);
    this.scene.add(this.skyBox);
  }
}
var CONFIG$2 = {
  SELECTABLE: false,
  MODEL_UNIT: 20,
  NUMBER_TREES: 10,
  NUMBER_ROCKS: 60,
  MOUNT: {
    NAME: 'mount',
    OBJ: './models/mountain/mount.obj',
    MAP: './models/mountain/mount.jpg',
    TOP_RADIUS: 18.225,
    BOTTOM_RADIUS: 18.225 * 1.45,
    HEIGHT: 18
  },
  BOARD: {
    NAME: 'board',
    OBJ: './models/mountain/board.obj',
    MAP: './models/mountain/board.jpg'
  },
  TREE: {
    NAME: 'mountain-tree',
    OBJ: './models/mountain/tree.obj',
    COLOR: 0x03B4CA
  },
  ROCK_01: {
    NAME: 'rock_01',
    OBJ: './models/mountain/rock_01.obj'
  },
  ROCK_02: {
    NAME: 'rock_02',
    OBJ: './models/mountain/rock_02.obj'
  }
};
class Mountain {
  constructor(scene, world, sceneSubjects) {
    this.scene = scene;
    this.world = world;
    this.sceneSubjects = sceneSubjects;
    this.selectable = CONFIG$2.SELECTABLE;
    this.bind();
    this.object = new THREE.Object3D();
    this.scene.add(this.object);
    LoaderManager$1.load({
      name: CONFIG$2.MOUNT.NAME,
      obj: CONFIG$2.MOUNT.OBJ,
      map: CONFIG$2.MOUNT.MAP
    }, this.initMount);
    this.initMarker();
  }
  bind() {
    this.initTrees = this.initTrees.bind(this);
    this.initMount = this.initMount.bind(this);
    this.initRocks = this.initRocks.bind(this);
    this.initBoard = this.initBoard.bind(this);
  }
  initMount() {
    const {
      obj,
      map
    } = LoaderManager$1.subjects[CONFIG$2.MOUNT.NAME];
    const geometry = obj.children[0].geometry;
    geometry.computeBoundingBox();
    this.mountBox = geometry.boundingBox;
    const material = new THREE.MeshPhongMaterial({
      map,
      color: CONFIG$4.COLORS.GHOST,
      shininess: 150
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.multiplyScalar(1 / CONFIG$2.MODEL_UNIT);
    mesh.position.y = -(this.mountBox.max.y - this.mountBox.min.y) / CONFIG$2.MODEL_UNIT / 2;
    this.object.add(mesh);
    const shape = new CANNON.Cylinder(CONFIG$2.MOUNT.TOP_RADIUS, CONFIG$2.MOUNT.BOTTOM_RADIUS, CONFIG$2.MOUNT.HEIGHT, 50);
    this.mountBody = new CANNON.Body({
      mass: 0,
      shape
    });
    this.mountBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.mountBody.position.set(0, -(CONFIG$2.MOUNT.HEIGHT / 2) - 0.08, 0);
    this.world.addBody(this.mountBody);
    LoaderManager$1.load({
      name: CONFIG$2.TREE.NAME,
      obj: CONFIG$2.TREE.OBJ
    }, this.initTrees);
    LoaderManager$1.load({
      name: CONFIG$2.ROCK_01.NAME,
      obj: CONFIG$2.ROCK_01.OBJ
    }, () => {
      LoaderManager$1.load({
        name: CONFIG$2.ROCK_02.NAME,
        obj: CONFIG$2.ROCK_02.OBJ
      }, this.initRocks);
      LoaderManager$1.load({
        name: CONFIG$2.BOARD.NAME,
        obj: CONFIG$2.BOARD.OBJ,
        map: CONFIG$2.BOARD.MAP
      }, this.initBoard);
    });
  }
  initTrees() {
    const {
      obj
    } = LoaderManager$1.subjects[CONFIG$2.TREE.NAME];
    const material = new THREE.MeshToonMaterial({
      color: CONFIG$2.TREE.COLOR,
      shininess: 100
    });
    const geometry = obj.children[0].geometry;
    for (let i = 0; i < CONFIG$2.NUMBER_TREES; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      const angle = toRadian(randomInt(0, 360));
      const offset = randomInt(-2, 2);
      const scale = randomFloat(1.9, 2.4);
      mesh.scale.multiplyScalar(1 / CONFIG$2.MODEL_UNIT * scale);
      mesh.position.y = -(this.mountBox.max.y - this.mountBox.min.y) / CONFIG$2.MODEL_UNIT;
      mesh.position.x = Math.cos(angle) * (CONFIG$2.MOUNT.BOTTOM_RADIUS + offset);
      mesh.position.z = -Math.sin(angle) * (CONFIG$2.MOUNT.BOTTOM_RADIUS + offset);
      this.object.add(mesh);
    }
  }
  initRocks() {
    const {
      obj: obj1
    } = LoaderManager$1.subjects[CONFIG$2.ROCK_01.NAME];
    const {
      obj: obj2
    } = LoaderManager$1.subjects[CONFIG$2.ROCK_02.NAME];
    const material = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.GHOST,
      shininess: 100
    });
    const geometries = [obj1.children[0].geometry, obj2.children[0].geometry];
    for (let i = 0; i < CONFIG$2.NUMBER_ROCKS; i++) {
      const mesh = new THREE.Mesh(geometries[randomInt(0, 1)], material);
      const angle = toRadian(randomInt(0, 360));
      const offset = randomInt(-CONFIG$2.MOUNT.TOP_RADIUS, -1);
      const scale = randomFloat(0.07, 0.2);
      const rotation = toRadian(randomInt(0, 360));
      mesh.scale.multiplyScalar(1 / CONFIG$2.MODEL_UNIT * scale);
      mesh.position.y = 0;
      mesh.position.x = Math.cos(angle) * (CONFIG$2.MOUNT.TOP_RADIUS + offset);
      mesh.position.z = -Math.sin(angle) * (CONFIG$2.MOUNT.TOP_RADIUS + offset);
      mesh.rotation.y = rotation;
      this.object.add(mesh);
    }
  }
  initBoard() {
    const board = new THREE.Object3D();
    const {
      obj,
      map
    } = LoaderManager$1.subjects[CONFIG$2.BOARD.NAME];
    const angle = toRadian(-135);
    const distance = CONFIG$2.MOUNT.TOP_RADIUS * 0.8;
    const scale = 0.8;
    const geometry = obj.children[0].geometry;
    geometry.scale(1 / CONFIG$2.MODEL_UNIT * scale, 1 / CONFIG$2.MODEL_UNIT * scale, 1 / CONFIG$2.MODEL_UNIT * scale);
    const material = new THREE.MeshPhongMaterial({
      map,
      color: CONFIG$4.COLORS.GHOST,
      shininess: 345
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 2;
    mesh.position.x = Math.cos(angle) * distance;
    mesh.position.z = -Math.sin(angle) * distance;
    mesh.rotation.y = toRadian(90);
    board.add(mesh);
    const {
      obj: rockObj1
    } = LoaderManager$1.subjects[CONFIG$2.ROCK_01.NAME];
    const rockMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.GHOST,
      shininess: 100
    });
    const rockGeometry = rockObj1.children[0].geometry;
    const rockMesh = new THREE.Mesh(rockGeometry, rockMaterial);
    rockMesh.scale.multiplyScalar(1 / CONFIG$2.MODEL_UNIT * 0.5);
    rockMesh.position.copy(mesh.position);
    rockMesh.position.y = 0;
    rockMesh.position.x += 1;
    board.add(rockMesh);
    const rockMesh2 = new THREE.Mesh(rockGeometry, rockMaterial);
    rockMesh2.scale.multiplyScalar(1 / CONFIG$2.MODEL_UNIT * 0.4);
    rockMesh2.position.copy(mesh.position);
    rockMesh2.position.y = 0;
    rockMesh2.position.x -= 1;
    rockMesh2.position.z += 1;
    rockMesh2.rotation.y = toRadian(120);
    board.add(rockMesh2);
    const rockMesh3 = new THREE.Mesh(rockGeometry, rockMaterial);
    rockMesh3.scale.multiplyScalar(1 / CONFIG$2.MODEL_UNIT * 1);
    rockMesh3.position.copy(mesh.position);
    rockMesh3.position.y = 0;
    rockMesh3.position.z -= 1.5;
    rockMesh3.position.x -= 1.5;
    rockMesh3.rotation.y = toRadian(45);
    board.add(rockMesh3);
    this.object.add(board);
    const box = new THREE.Box3().setFromObject(board);
    const shape = new CANNON.Box(new CANNON.Vec3((box.max.x - box.min.x) / 2 * 0.1, (box.max.y - box.min.y) / 2, (box.max.z - box.min.z) / 2 * 0.7));
    const body = new CANNON.Body({
      mass: 0,
      shape,
      material: CONFIG$4.NORMAL_MATERIAL
    });
    body.position.x = mesh.position.x;
    body.position.y = mesh.position.y - 0.3;
    body.position.z = mesh.position.z;
    this.world.addBody(body);
    const subject = {
      body,
      mesh: board,
      selectable: false,
      collidable: true
    };
    this.sceneSubjects.push(subject);
  }
  initMarker() {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshLambertMaterial({
      color: 0x8cf0ff
    });
    this.markerMesh = new THREE.Mesh(geometry, material);
  }
  addPositionMarker(position) {
    let {
      x,
      z
    } = position;
    this.markerMesh.position.set(x, 0.01, z);
    this.markerMesh.quaternion.copy(this.mountBody.quaternion);
    this.scene.add(this.markerMesh);
  }
  removePositionMarker() {
    this.scene.remove(this.markerMesh);
  }
  movePositionMarker(x, z) {
    this.markerMesh.position.set(x, 0.01, z);
  }
}
const DEBUG_MODE = false;
const RELEASE_BUTTON_TIME = 200;
const SHAPE_COLORS = {};
class PlaneHelper {
  constructor(scene) {
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.2,
      visible: DEBUG_MODE
    });
    const geometry = new THREE.PlaneGeometry(50, 50, 1, 1);
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = 1;
    this.mesh.rotation.x = -Math.PI / 2;
    scene.add(this.mesh);
  }
}
var CONFIG$1 = {
  SCALE_FACTOR: 1.1,
  ROTATE_CIRCLE_MATERIAL: new THREE.MeshBasicMaterial({
    color: 0xFFCF51,
    side: THREE.DoubleSide,
    depthTest: false,
    transparent: true,
    opacity: 0.4
  }),
  HELPER_MATERIAL: new THREE.PointsMaterial({
    visible: DEBUG_MODE,
    color: 0xff000
  }),
  Y_POS_LIMIT: -20
};
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
class Shape {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.selectable = false;
    this.editable = true;
    this.selected = false;
    this.rotationY = 0;
    this.rotationX = 0;
    this.scaleFactor = 1.5;
    this.scaleIndex = 0;
    this.isMoving = false;
    this.geoMats = [];
    this.centerOffsetY = 0;
    this.highlightColor = new THREE.Color(darken(CONFIG$4.COLORS.ICE_HEXA, 15));
    this.stableThreshold = 0.01;
    this.stableThrottleTime = 500;
    this.lastBodyPosition = {
      x: 0,
      y: 0,
      z: 0
    };
    if (this.init) {
      this.init = this.init.bind(this);
    }
    this.load = this.load.bind(this);
    this.onCollide = this.onCollide.bind(this);
    this.isStable = this.isStable.bind(this);
  }
  load(callback) {
    this.callback = callback;
    const {
      name,
      normalMap,
      obj,
      wrl
    } = this;
    LoaderManager$1.load({
      name,
      normalMap,
      obj,
      wrl
    }, this.init);
  }
  setShape(defaultMaterial) {
    const highlightMaterial = defaultMaterial.clone();
    highlightMaterial.color = this.highlightColor;
    highlightMaterial.needsUpdate = true;
    const ghostMaterial = defaultMaterial.clone();
    ghostMaterial.color.setHex(CONFIG$4.COLORS.GHOST);
    ghostMaterial.needsUpdate = true;
    this.materials = {
      default: defaultMaterial,
      highlight: highlightMaterial,
      ghost: ghostMaterial
    };
    this.mesh = new THREE.Object3D();
    for (let i = 0; i < this.geoMats.length; i++) {
      const mesh = new THREE.Mesh(this.geoMats[i].geometry, this.geoMats[i].material);
      this.geoMats[i].geometry.computeBoundingBox();
      this.mesh.add(mesh);
    }
    this.mesh.scale.multiplyScalar(1 / CONFIG$4.MODEL_UNIT);
    this.defaultMeshScale = this.mesh.scale.clone();
    this.mesh.scale.set(this.defaultMeshScale.x * this.scaleFactor, this.defaultMeshScale.y * this.scaleFactor, this.defaultMeshScale.z * this.scaleFactor);
    this.mesh.updateMatrix();
    this.mesh.position.set(0, 100, 0);
    if (this.rotationY) {
      this.mesh.rotation.y = this.rotationY;
    }
    this.mesh.matrixWorldNeedsUpdate = true;
    this.mesh.visible = false;
    this.updateDefaultColors();
    this.scene.add(this.mesh);
    this.createBody();
    if (this.callback) {
      this.callback(this);
    }
    if (this.name !== 'tree') {
      this.stable = throttle(this.isStable, this.stableThrottleTime);
      window.addEventListener('RAF', this.stable);
    }
  }
  createBody() {
    if (this.body) {
      this.body.removeEventListener('collide', this.collide);
      this.body.shapes = [];
      this.world.remove(this.body);
    }
    this.body = new CANNON.Body({
      mass: this.mass,
      fixedRotation: false,
      linearDamping: 0,
      angularDamping: 0
    });
    this.createShapes(this.scaleFactor);
    this.currentMass = this.mass;
    this.body.position.copy(this.mesh.position);
    this.body.quaternion.copy(this.mesh.quaternion);
    this.world.add(this.body);
    this.collide = throttle(this.onCollide, 50);
    this.body.addEventListener('collide', this.collide);
  }
  isStable() {
    if (this.body) {
      const diffPosition = Math.abs(this.body.position.x - this.lastBodyPosition.x) + Math.abs(this.body.position.y - this.lastBodyPosition.y) + Math.abs(this.body.position.z - this.lastBodyPosition.z);
      if (diffPosition < this.stableThreshold && this.body.sleepState !== 2) {
        this.body.sleep();
      }
      this.lastBodyPosition.x = this.body.position.x;
      this.lastBodyPosition.y = this.body.position.y;
      this.lastBodyPosition.z = this.body.position.z;
    }
  }
  createShapesFromWRL(models, scale) {
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      const vertices = [];
      const faces = [];
      for (let i = 0; i < model.vertices.length; i += 3) {
        vertices.push(new CANNON.Vec3(model.vertices[i] / CONFIG$4.MODEL_UNIT * scale, model.vertices[i + 1] / CONFIG$4.MODEL_UNIT * scale, model.vertices[i + 2] / CONFIG$4.MODEL_UNIT * scale));
      }
      for (let i = 0; i < model.faces.length; i += 3) {
        faces.push([model.faces[i], model.faces[i + 1], model.faces[i + 2]]);
      }
      const shape = new CANNON.ConvexPolyhedron(vertices, faces);
      this.body.addShape(shape);
    }
  }
  onCollide(e) {
    const relativeVelocity = e.contact.getImpactVelocityAlongNormal();
    if (Math.abs(relativeVelocity) > 0.25) {
      window.dispatchEvent(createCustomEvent('shape_collide', {
        force: relativeVelocity,
        type: this.name,
        mass: this.currentMass,
        scale: this.scaleFactor
      }));
    }
  }
  select(isAddingShape) {
    if (this.selectable && !this.selected) {
      this.selected = true;
      this.body.sleep();
      this.mesh.visible = true;
      if (isAddingShape) {
        this.showGhost();
      }
    }
  }
  unselect() {
    if (this.selectable && this.selected) {
      this.selected = false;
      if (this.body.sleepState > 0) {
        this.body.wakeUp();
      }
      this.hideGhost();
    }
  }
  update(cameraPosition) {
    if (this.mesh) {
      this.mesh.position.copy(this.body.position);
      this.mesh.quaternion.copy(this.body.quaternion);
      if (this.mesh.position.y < CONFIG$1.Y_POS_LIMIT) {
        window.dispatchEvent(createCustomEvent('LEAVE_EDIT'));
        this.delete();
        return;
      }
      this.isMoving = this.body.velocity.norm2() + this.body.angularVelocity.norm2() > 1;
      if (this.xCircle) {
        this.xCircle.position.copy(this.ghost ? this.ghost.position : this.mesh.position);
      }
      if (this.yCircle) {
        this.yCircle.position.copy(this.ghost ? this.ghost.position : this.mesh.position);
      }
      if (CONFIG$1.DEBUG) {
        this.ghostHelper.update();
      }
      if (this.circles) {
        this.circles.position.copy(this.mesh.position);
        this.circles.lookAt(cameraPosition);
      }
    }
  }
  rotate(direction, angle, currentCameraYRotation) {
    if (!this.ghost) {
      this.showGhost();
    }
    let axis;
    switch (direction) {
      default:
        break;
      case 'right':
        axis = new THREE.Vector3(0, 1, 0);
        break;
      case 'bottom':
        axis = new THREE.Vector3(1, 0, 0);
        axis.applyAxisAngle(new THREE.Vector3(0, 1, 0), toRadian(currentCameraYRotation - 45));
        break;
    }
    this.ghost.rotateOnWorldAxis(axis, angle);
  }
  moveTo(xNew, yNew, zNew) {
    let {
      x,
      y,
      z
    } = this.ghost.position;
    if (xNew != null) {
      x = xNew;
    }
    if (yNew != null) {
      y = yNew;
    }
    if (zNew != null) {
      z = zNew;
    }
    this.ghost.position.set(x, y + this.centerOffsetY * this.scaleFactor, z);
  }
  scale(value) {
    if (!this.ghost) {
      this.showGhost();
    }
    const scaleFactor = parseInt(value) / 10;
    this.ghost.scale.set(this.defaultMeshScale.x * scaleFactor, this.defaultMeshScale.y * scaleFactor, this.defaultMeshScale.z * scaleFactor);
    this.scaleFactor = scaleFactor;
    this.mesh.scale.copy(this.ghost.scale);
  }
  updateBody() {
    this.createBody();
    let shapeVolume = 0;
    for (let i = 0; i < this.body.shapes.length; i++) {
      shapeVolume += this.body.shapes[i].volume();
    }
    const mass = this.mass * shapeVolume;
    this.body.invMass = mass;
    this.currentMass = mass;
    this.body.updateMassProperties();
  }
  highlight() {
    if (this.mesh) {
      for (let i = 0; i < this.mesh.children.length; i++) {
        const child = this.mesh.children[i];
        if (this.mulipleMaterials) {
          if (this.name === 'gift' && i === 4) {
            child.material = this.materials.highlight;
          } else if (this.name === 'tree' && i === 0) {
            child.material = this.materials.highlight;
          }
        } else {
          child.material = this.materials.highlight;
        }
      }
    }
  }
  unhighlight() {
    if (this.mesh) {
      for (let i = 0; i < this.mesh.children.length; i++) {
        const child = this.mesh.children[i];
        if (this.mulipleMaterials) {
          if (this.name === 'gift' && i === 4) {
            child.material = this.materials.default;
          } else if (this.name === 'tree' && i === 0) {
            child.material = this.materials.default;
          }
        } else {
          child.material = this.materials.default;
        }
      }
    }
  }
  showGhost() {
    this.createGhost();
    if (this.ghost) {
      this.ghost.visible = true;
    }
    if (this.mesh) {
      this.mesh.visible = false;
    }
  }
  hideGhost() {
    if (this.moveToGhost) {
      if (this.mesh && !this.mesh.visible) {
        this.mesh.visible = true;
      }
    }
    if (!this.mesh.visible) {
      this.mesh.visible = true;
    }
    this.deleteGhost();
  }
  createGhost() {
    const {
      position,
      quaternion,
      scale
    } = this.mesh;
    this.ghost = new THREE.Object3D();
    for (let i = 0; i < this.geoMats.length; i++) {
      const mesh = new THREE.Mesh(this.geoMats[i].geometry, this.materials.ghost);
      this.ghost.add(mesh);
    }
    this.ghost.position.copy(position);
    this.ghost.quaternion.copy(quaternion);
    this.ghost.scale.copy(scale);
    this.scene.add(this.ghost);
    this.ghost.updateMatrixWorld();
  }
  createRotateCircle(zoom) {
    const box = new THREE.Box3().setFromObject(this.mesh);
    let maxRadius = Math.max((box.max.x - box.min.x) * 0.8, (box.max.y - box.min.y) * 0.8);
    maxRadius = clamp(maxRadius, 2.5, 4);
    const geometry = new THREE.TorusBufferGeometry(maxRadius, 0.04, 32, 32);
    const helperGeometry = new THREE.Geometry();
    helperGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    this.circles = new THREE.Object3D();
    const xCircle = new THREE.Mesh(geometry, CONFIG$1.ROTATE_CIRCLE_MATERIAL);
    xCircle.rotation.x = toRadian(125);
    xCircle.rotation.z = toRadian(50);
    const xArrowHelper = new THREE.Points(helperGeometry, CONFIG$1.HELPER_MATERIAL);
    xArrowHelper.position.x = maxRadius;
    xArrowHelper.name = 'arrow-helper-x';
    xCircle.add(xArrowHelper);
    const yCircle = new THREE.Mesh(geometry, CONFIG$1.ROTATE_CIRCLE_MATERIAL);
    yCircle.rotation.x = toRadian(30);
    yCircle.rotation.y = toRadian(55);
    yCircle.rotation.z = toRadian(10);
    const yArrowHelper = new THREE.Points(helperGeometry, CONFIG$1.HELPER_MATERIAL);
    yArrowHelper.position.y = maxRadius;
    yArrowHelper.name = 'arrow-helper-y';
    yCircle.add(yArrowHelper);
    const trashHelper = new THREE.Points(helperGeometry, CONFIG$1.HELPER_MATERIAL);
    trashHelper.position.x = maxRadius * 1;
    trashHelper.position.y = maxRadius * 0.775 - this.centerOffsetY * this.scaleFactor;
    trashHelper.name = 'trash-helper';
    const toolbarHelper = new THREE.Points(helperGeometry, CONFIG$1.HELPER_MATERIAL);
    toolbarHelper.position.y = -(maxRadius * 1.85) - this.centerOffsetY * this.scaleFactor;
    toolbarHelper.name = 'toolbar-helper';
    yCircle.add(toolbarHelper);
    this.circles.add(trashHelper);
    if (this.editable) {
      this.circles.add(xCircle);
      this.circles.add(yCircle);
      this.updateRotatingCircle(zoom);
    } else {
      this.circles.add(toolbarHelper);
    }
    this.scene.add(this.circles);
  }
  updateRotatingCircle(zoom) {
    this.circles.scale.set(1 / zoom, 1 / zoom, 1 / zoom);
  }
  updateDefaultColors() {
    if (!SHAPE_COLORS[this.name]) {
      SHAPE_COLORS[this.name] = {};
    }
    if (SHAPE_COLORS[this.name].default) {
      for (let i = 0; i < this.mesh.children.length; i++) {
        const child = this.mesh.children[i];
        if (this.name === 'gift') {
          if (i === 4) {
            child.material.color = SHAPE_COLORS[this.name].default;
          }
        } else {
          child.material.color = SHAPE_COLORS[this.name].default;
        }
      }
      this.materials.highlight.color = SHAPE_COLORS[this.name].highlight;
    }
  }
  delete() {
    this.scene.remove(this.mesh);
    this.mesh = undefined;
    this.world.remove(this.body);
    this.box = undefined;
    this.deleteGhost();
    this.deleteRotateCircle();
  }
  deleteGhost() {
    if (this.ghost) {
      this.scene.remove(this.ghost);
      this.ghost = undefined;
    }
    if (CONFIG$1.DEBUG) {
      this.scene.remove(this.ghostHelper);
      this.ghostHelper = undefined;
      this.ghostHelper = new THREE.BoxHelper(this.mesh, 0x00ff00);
      this.scene.add(this.ghostHelper);
    }
  }
  deleteRotateCircle() {
    if (this.circles) {
      this.scene.remove(this.circles);
    }
  }
  moveToGhost() {
    const {
      position,
      quaternion
    } = this.ghost;
    this.updateBody();
    this.body.velocity.setZero();
    this.body.angularVelocity.setZero();
    this.body.position.set(position.x, position.y, position.z);
    this.body.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    this.mesh.position.copy(position);
    this.mesh.quaternion.copy(quaternion);
    this.mesh.updateMatrixWorld(true);
  }
}
class Cube extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = cubeConfig.SELECTABLE;
    this.mass = cubeConfig.MASS;
    this.size = cubeConfig.SIZE;
    this.name = cubeConfig.NAME;
    this.normalMap = cubeConfig.NORMAL_MAP;
    this.obj = cubeConfig.OBJ;
  }
  init() {
    const {
      obj,
      normalMap
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.ICE,
      shininess: CONFIG$4.SHININESS,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      geometry.center();
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    const shape = new CANNON.Box(new CANNON.Vec3(cubeConfig.SIZE / 2 * scale, cubeConfig.SIZE / 2 * scale, cubeConfig.SIZE / 2 * scale));
    this.body.addShape(shape, new CANNON.Vec3(0, -0.03, 0));
  }
}
class Arch extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = archConfig.SELECTABLE;
    this.mass = archConfig.MASS;
    this.size = archConfig.SIZE;
    this.name = archConfig.NAME;
    this.normalMap = archConfig.NORMAL_MAP;
    this.obj = archConfig.OBJ;
  }
  init() {
    const {
      obj,
      normalMap
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.ICE,
      shininess: CONFIG$4.SHININESS,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      geometry.center();
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    let s = this.size * scale;
    const topBoxVector = new CANNON.Vec3(s, s * 0.25, s * 0.5);
    const topShape = new CANNON.Box(topBoxVector);
    const bottomBoxVector = new CANNON.Vec3(s * 0.33, s * 0.25, s * 0.5);
    const bottomShape = new CANNON.Box(bottomBoxVector);
    const offset1 = new CANNON.Vec3(0, s * 0.25, 0);
    const offset2 = new CANNON.Vec3(-s * 0.66, -s * 0.25, 0);
    const offset3 = new CANNON.Vec3(s * 0.66, -s * 0.25, 0);
    this.body.addShape(topShape, offset1);
    this.body.addShape(bottomShape, offset2);
    this.body.addShape(bottomShape, offset3);
  }
}
class Tree extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = treeConfig.SELECTABLE;
    this.collidable = treeConfig.COLLIDABLE;
    this.editable = false;
    this.mass = treeConfig.MASS;
    this.size = treeConfig.SIZE;
    this.name = treeConfig.NAME;
    this.obj = treeConfig.OBJ;
    this.wrl = treeConfig.WRL;
    this.mulipleMaterials = true;
    this.centerOffsetY = -1.5;
    this.highlightColor = new THREE.Color(darken(treeConfig.MAIN_COLOR_HEXA, 15));
  }
  init() {
    const {
      obj
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: treeConfig.COLORS[0],
      shininess: 345
    });
    defaultMaterial.needsUpdate = true;
    const secondMaterial = new THREE.MeshToonMaterial({
      color: treeConfig.COLORS[1],
      shininess: 10
    });
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      let material;
      if (i === 0) {
        material = defaultMaterial;
      } else {
        material = secondMaterial;
      }
      this.geoMats.push({
        geometry,
        material
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    const s = this.size * scale;
    const cone = new CANNON.Cylinder(0, 0.4 * s, 1.5 * s, 13);
    const coneOffset = new CANNON.Vec3(0, 1.8 * s, 0);
    const cylinder = new CANNON.Cylinder(0.08 * s, 0.08 * s, 0.6 * s, 10);
    const cylinderOffset = new CANNON.Vec3(0, 0.8 * s, 0);
    const coneQuaternion = new THREE.Quaternion();
    coneQuaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
    this.body.addShape(cone, coneOffset, coneQuaternion);
    this.body.addShape(cylinder, cylinderOffset, coneQuaternion);
  }
}
class Sphere extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = sphereConfig.SELECTABLE;
    this.mass = sphereConfig.MASS;
    this.size = sphereConfig.SIZE;
    this.name = sphereConfig.NAME;
    this.normalMap = sphereConfig.NORMAL_MAP;
    this.obj = sphereConfig.OBJ;
  }
  init() {
    const {
      obj,
      normalMap
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.ICE,
      shininess: CONFIG$4.SHININESS,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      geometry.center();
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    const shape = new CANNON.Sphere(sphereConfig.SIZE / 2 * scale);
    this.body.addShape(shape);
  }
}
class Pyramid extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = pyramidConfig.SELECTABLE;
    this.mass = pyramidConfig.MASS;
    this.rotationY = pyramidConfig.ROTATION_Y;
    this.size = pyramidConfig.SIZE;
    this.name = pyramidConfig.NAME;
    this.obj = pyramidConfig.OBJ;
    this.wrl = pyramidConfig.WRL;
    this.scaleFactor = 1;
  }
  init() {
    const {
      obj,
      normalMap
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.ICE,
      shininess: CONFIG$4.SHININESS,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    const s = this.size * scale;
    const offset = new CANNON.Vec3(0, -0.5 * s, 0);
    const axisRotation = new THREE.Vector3(0, 1, 0);
    const tetras = [{
      shape: this.createTetraShape(s),
      offset,
      quaternion: new THREE.Quaternion().setFromAxisAngle(axisRotation, Math.PI / 4)
    }, {
      shape: this.createTetraShape(s),
      offset,
      quaternion: new THREE.Quaternion().setFromAxisAngle(axisRotation, -Math.PI / 4)
    }, {
      shape: this.createTetraShape(s),
      offset,
      quaternion: new THREE.Quaternion().setFromAxisAngle(axisRotation, Math.PI * 3 / 4)
    }, {
      shape: this.createTetraShape(s),
      offset,
      quaternion: new THREE.Quaternion().setFromAxisAngle(axisRotation, -Math.PI * 3 / 4)
    }];
    tetras.forEach(tetra => {
      const {
        shape,
        quaternion
      } = tetra;
      this.body.addShape(shape, offset, quaternion);
    });
  }
  createTetraShape(s) {
    const verts = [new CANNON.Vec3(0, 0, 0), new CANNON.Vec3(0.73 * s, 0, 0), new CANNON.Vec3(0, 1 * s, 0), new CANNON.Vec3(0, 0, 0.73 * s)];
    const faces = [[0, 3, 2], [0, 1, 3], [0, 2, 1], [1, 2, 3]];
    return new CANNON.ConvexPolyhedron(verts, faces);
  }
}
class QuarterCircle extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = quarterCircleConfig.SELECTABLE;
    this.mass = quarterCircleConfig.MASS;
    this.rotationY = quarterCircleConfig.ROTATION_Y;
    this.size = quarterCircleConfig.SIZE;
    this.name = quarterCircleConfig.NAME;
    this.obj = quarterCircleConfig.OBJ;
    this.wrl = quarterCircleConfig.WRL;
  }
  init() {
    const {
      obj,
      wrl,
      normalMap
    } = LoaderManager$1.subjects[this.name];
    this.collisionModel = wrl;
    console.log(obj, wrl);
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.ICE,
      shininess: CONFIG$4.SHININESS,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    this.createShapesFromWRL(this.collisionModel, scale);
  }
}
class Tetra extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = prismConfig.SELECTABLE;
    this.mass = prismConfig.MASS;
    this.size = prismConfig.SIZE;
    this.name = prismConfig.NAME;
    this.normalMap = prismConfig.NORMAL_MAP;
    this.obj = prismConfig.OBJ;
  }
  init() {
    const {
      obj,
      normalMap
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: CONFIG$4.COLORS.ICE,
      shininess: CONFIG$4.SHININESS,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    const s = this.size * scale;
    const axisRotation = new THREE.Vector3(0, 1, 0);
    const tetras = [{
      shape: this.createTetraShape([new CANNON.Vec3(0, 0, 0), new CANNON.Vec3(1 * s, 0, 0), new CANNON.Vec3(0, 1 * s, 0), new CANNON.Vec3(0, 0, 1 * s)]),
      offset: new CANNON.Vec3(-0.5 * s, -0.35 * s, 0.27 * s),
      quaternion: new THREE.Quaternion().setFromAxisAngle(axisRotation, Math.PI / 2)
    }, {
      shape: this.createTetraShape([new CANNON.Vec3(0, 0, 0), new CANNON.Vec3(1 * s, 0, 1 * s), new CANNON.Vec3(0, 1 * s, 0), new CANNON.Vec3(0, 0, 1 * s)]),
      offset: new CANNON.Vec3(0.5 * s, -0.35 * s, 0.27 * s),
      quaternion: new THREE.Quaternion().setFromAxisAngle(axisRotation, Math.PI)
    }, {
      shape: this.createTetraShape([new CANNON.Vec3(0, 0, 0), new CANNON.Vec3(1 * s, 1 * s, 1 * s), new CANNON.Vec3(0, 1 * s, 1 * s), new CANNON.Vec3(1 * s, 0, 1 * s)]),
      offset: new CANNON.Vec3(-0.5 * s, -0.35 * s, -0.7 * s),
      quaternion: null
    }];
    tetras.forEach(tetra => {
      const {
        shape,
        offset,
        quaternion
      } = tetra;
      this.body.addShape(shape, offset, quaternion);
    });
  }
  createTetraShape(verts) {
    const faces = [[0, 3, 2], [0, 1, 3], [0, 2, 1], [1, 2, 3]];
    return new CANNON.ConvexPolyhedron(verts, faces);
  }
}
class Gift extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = giftConfig.SELECTABLE;
    this.mass = giftConfig.MASS;
    this.size = giftConfig.SIZE;
    this.name = giftConfig.NAME;
    this.normalMap = giftConfig.NORMAL_MAP;
    this.obj = giftConfig.OBJ;
    this.mulipleMaterials = true;
    this.highlightColor = new THREE.Color(darken(giftConfig.MAIN_COLOR_HEXA, 15));
  }
  init() {
    const {
      obj
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: giftConfig.COLORS[0],
      shininess: CONFIG$4.SHININESS
    });
    defaultMaterial.needsUpdate = true;
    const secondMaterial = new THREE.MeshToonMaterial({
      color: giftConfig.COLORS[1],
      shininess: CONFIG$4.SHININESS
    });
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      let material;
      if (i !== 4) {
        material = defaultMaterial;
      } else {
        material = secondMaterial;
      }
      this.geoMats.push({
        geometry,
        material
      });
    }
    this.setShape(secondMaterial);
  }
  createShapes(scale = 1) {
    const shape = new CANNON.Box(new CANNON.Vec3(giftConfig.SIZE / 2 * scale, giftConfig.SIZE / 2 * scale, giftConfig.SIZE / 2 * scale));
    const offset = new CANNON.Vec3(-0.09 * scale, -0.015 * scale, 0.05 * scale);
    this.body.addShape(shape, offset);
  }
}
class Snowman extends Shape {
  constructor(scene, world, material) {
    super(scene, world);
    this.material = material;
    this.selectable = snowmanConfig.SELECTABLE;
    this.collidable = snowmanConfig.COLLIDABLE;
    this.mass = snowmanConfig.MASS;
    this.size = snowmanConfig.SIZE;
    this.name = snowmanConfig.NAME;
    this.obj = snowmanConfig.OBJ;
    this.highlightColor = new THREE.Color(darken(snowmanConfig.MAIN_COLOR_HEXA, 15));
  }
  init() {
    const {
      obj,
      normalMap,
      map
    } = LoaderManager$1.subjects[this.name];
    const defaultMaterial = new THREE.MeshToonMaterial({
      color: snowmanConfig.COLOR,
      shininess: CONFIG$4.SHININESS,
      map,
      normalMap
    });
    defaultMaterial.needsUpdate = true;
    for (let i = 0; i < obj.children.length; i++) {
      const geometry = obj.children[i].geometry;
      this.geoMats.push({
        geometry,
        material: defaultMaterial
      });
    }
    this.setShape(defaultMaterial);
  }
  createShapes(scale = 1) {
    const s = this.size * scale;
    const sphere = new CANNON.Sphere(0.5 * s);
    const cone = new CANNON.Cylinder(0, 0.1 * s, 0.45 * s, 10 * s);
    const coneOffset = new CANNON.Vec3(0.7 * s, 0, 0);
    const coneQuaternion = new THREE.Quaternion();
    coneQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    this.body.addShape(sphere);
    this.body.addShape(cone, coneOffset, coneQuaternion);
  }
}
THREE.CannonDebugRenderer = function (scene, world, options) {
  this.scene = scene;
  this.world = world;
  this._meshes = [];
  this._material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  });
  this._sphereGeometry = new THREE.SphereGeometry(1);
  this._boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  this._planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
  this._cylinderGeometry = new THREE.CylinderGeometry(1, 1, 10, 10);
};
THREE.CannonDebugRenderer.prototype = {
  tmpVec0: new CANNON.Vec3(),
  tmpVec1: new CANNON.Vec3(),
  tmpVec2: new CANNON.Vec3(),
  tmpQuat0: new CANNON.Vec3(),
  update: function () {
    var bodies = this.world.bodies;
    var meshes = this._meshes;
    var shapeWorldPosition = this.tmpVec0;
    var shapeWorldQuaternion = this.tmpQuat0;
    var meshIndex = 0;
    for (var i = 0; i !== bodies.length; i++) {
      var body = bodies[i];
      for (var j = 0; j !== body.shapes.length; j++) {
        var shape = body.shapes[j];
        this._updateMesh(meshIndex, body, shape);
        var mesh = meshes[meshIndex];
        if (mesh) {
          body.quaternion.vmult(body.shapeOffsets[j], shapeWorldPosition);
          body.position.vadd(shapeWorldPosition, shapeWorldPosition);
          body.quaternion.mult(body.shapeOrientations[j], shapeWorldQuaternion);
          mesh.position.copy(shapeWorldPosition);
          mesh.quaternion.copy(shapeWorldQuaternion);
        }
        meshIndex++;
      }
    }
    for (var i = meshIndex; i < meshes.length; i++) {
      var mesh = meshes[i];
      if (mesh) {
        this.scene.remove(mesh);
      }
    }
    meshes.length = meshIndex;
  },
  _updateMesh: function (index, body, shape) {
    var mesh = this._meshes[index];
    if (!this._typeMatch(mesh, shape)) {
      if (mesh) {
        this.scene.remove(mesh);
      }
      mesh = this._meshes[index] = this._createMesh(shape);
    }
    this._scaleMesh(mesh, shape);
  },
  _typeMatch: function (mesh, shape) {
    if (!mesh) {
      return false;
    }
    var geo = mesh.geometry;
    return geo instanceof THREE.SphereGeometry && shape instanceof CANNON.Sphere || geo instanceof THREE.BoxGeometry && shape instanceof CANNON.Box || geo instanceof THREE.PlaneGeometry && shape instanceof CANNON.Plane || geo.id === shape.geometryId && shape instanceof CANNON.ConvexPolyhedron || geo.id === shape.geometryId && shape instanceof CANNON.Trimesh || geo.id === shape.geometryId && shape instanceof CANNON.Heightfield;
  },
  _createMesh: function (shape) {
    var mesh;
    var material = this._material;
    switch (shape.type) {
      case CANNON.Shape.types.SPHERE:
        mesh = new THREE.Mesh(this._sphereGeometry, material);
        break;
      case CANNON.Shape.types.BOX:
        mesh = new THREE.Mesh(this._boxGeometry, material);
        break;
      case CANNON.Shape.types.PLANE:
        mesh = new THREE.Mesh(this._planeGeometry, material);
        break;
      case CANNON.Shape.types.CONVEXPOLYHEDRON:
        var geo = new THREE.Geometry();
        for (var i = 0; i < shape.vertices.length; i++) {
          var v = shape.vertices[i];
          geo.vertices.push(new THREE.Vector3(v.x, v.y, v.z));
        }
        for (var i = 0; i < shape.faces.length; i++) {
          var face = shape.faces[i];
          var a = face[0];
          for (var j = 1; j < face.length - 1; j++) {
            var b = face[j];
            var c = face[j + 1];
            geo.faces.push(new THREE.Face3(a, b, c));
          }
        }
        geo.computeBoundingSphere();
        geo.computeFaceNormals();
        mesh = new THREE.Mesh(geo, material);
        shape.geometryId = geo.id;
        break;
      case CANNON.Shape.types.TRIMESH:
        var geometry = new THREE.Geometry();
        var v0 = this.tmpVec0;
        var v1 = this.tmpVec1;
        var v2 = this.tmpVec2;
        for (var i = 0; i < shape.indices.length / 3; i++) {
          shape.getTriangleVertices(i, v0, v1, v2);
          geometry.vertices.push(new THREE.Vector3(v0.x, v0.y, v0.z), new THREE.Vector3(v1.x, v1.y, v1.z), new THREE.Vector3(v2.x, v2.y, v2.z));
          var j = geometry.vertices.length - 3;
          geometry.faces.push(new THREE.Face3(j, j + 1, j + 2));
        }
        geometry.computeBoundingSphere();
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        shape.geometryId = geometry.id;
        break;
      case CANNON.Shape.types.HEIGHTFIELD:
        var geometry = new THREE.Geometry();
        var v0 = this.tmpVec0;
        var v1 = this.tmpVec1;
        var v2 = this.tmpVec2;
        for (var xi = 0; xi < shape.data.length - 1; xi++) {
          for (var yi = 0; yi < shape.data[xi].length - 1; yi++) {
            for (var k = 0; k < 2; k++) {
              shape.getConvexTrianglePillar(xi, yi, k === 0);
              v0.copy(shape.pillarConvex.vertices[0]);
              v1.copy(shape.pillarConvex.vertices[1]);
              v2.copy(shape.pillarConvex.vertices[2]);
              v0.vadd(shape.pillarOffset, v0);
              v1.vadd(shape.pillarOffset, v1);
              v2.vadd(shape.pillarOffset, v2);
              geometry.vertices.push(new THREE.Vector3(v0.x, v0.y, v0.z), new THREE.Vector3(v1.x, v1.y, v1.z), new THREE.Vector3(v2.x, v2.y, v2.z));
              var i = geometry.vertices.length - 3;
              geometry.faces.push(new THREE.Face3(i, i + 1, i + 2));
            }
          }
        }
        geometry.computeBoundingSphere();
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        shape.geometryId = geometry.id;
        break;
    }
    if (mesh) {
      this.scene.add(mesh);
    }
    return mesh;
  },
  _scaleMesh: function (mesh, shape) {
    switch (shape.type) {
      case CANNON.Shape.types.SPHERE:
        var radius = shape.radius;
        mesh.scale.set(radius, radius, radius);
        break;
      case CANNON.Shape.types.BOX:
        mesh.scale.copy(shape.halfExtents);
        mesh.scale.multiplyScalar(2);
        break;
      case CANNON.Shape.types.CONVEXPOLYHEDRON:
        mesh.scale.set(1, 1, 1);
        break;
      case CANNON.Shape.types.TRIMESH:
        mesh.scale.copy(shape.scale);
        break;
      case CANNON.Shape.types.HEIGHTFIELD:
        mesh.scale.set(1, 1, 1);
        break;
    }
  }
};
var CONFIG = {
  ANIMATE_SPEED: 100,
  BOX: 125,
  POSITION: {
    Y: 50,
    Z: 100
  },
  ROTATE: {
    Y: 45,
    XZ: 45 / 2,
    XZ_MIN: 22.5,
    XZ_MAX: -45,
    SPEED: 800,
    FORCE_ON_WHEEL: 2,
    FORCE_ON_TOUCH: 2.2
  },
  ZOOM: {
    FOV: 0.6,
    MAX: -60,
    MIN: 30,
    SPEED: 800,
    FORCE: 30
  },
  EDGES_SPEED: 0.15,
  CONTROLS: {
    MIN: 10,
    MAX: 500,
    MIN_ANGLE: 0,
    MAX_ANGLE: Math.PI,
    KEYS: false,
    PAN: true,
    ROTATE: false,
    DAMPING: true,
    DAMPING_FACTOR: 0.06,
    ZOOM: false
  },
  MOBILE_CONTROLS: {
    MIN: 20,
    MAX: 100,
    MIN_ANGLE: 0,
    MAX_ANGLE: Math.PI / 2 - 0.1,
    ROTATE: true,
    ZOOM: true
  }
};
function outExpo(n) {
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
}
function outElastic(n) {
  var s,
    a = 0.1,
    p = 0.4;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  } else s = p * Math.asin(1 / a) / (2 * Math.PI);
  return a * Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p) + 1;
}
class CameraController {
  constructor() {
    this.rotationY = 0;
    this.rotationXZ = 0;
    this.raycaster = new THREE.Raycaster();
    this.currentZoom = 0;
    this.zoomMin = CONFIG.ZOOM.MIN;
    this.zoomMax = CONFIG.ZOOM.MAX;
    this.rotationXZMin = CONFIG.ROTATE.XZ_MIN;
    this.rotationXZMax = CONFIG.ROTATE.XZ_MAX;
    this.isTouchDevice = isTouchDevice();
  }
  init(screenDimensions, canvas) {
    const {
      width,
      height
    } = screenDimensions;
    const aspectRatio = width / height;
    const fieldOfView = 10;
    const nearPlane = 1;
    const farPlane = 1000;
    this.canvas = canvas;
    this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    this.camera.position.set(0, CONFIG.POSITION.Y, CONFIG.POSITION.Z);
    this.camera.lookAt(0, 0, 0);
    this.camera.zoom = CONFIG.ZOOM.FOV;
    this.camera.updateProjectionMatrix();
    this.buildControls();
    this.buildBox();
    this.buildFakeGround();
  }
  buildControls() {
    this.controls = {
      enabled: false
    };
  }
  buildBox() {
    this.box = new THREE.Box3(new THREE.Vector3(-CONFIG.BOX, -CONFIG.BOX, -CONFIG.BOX), new THREE.Vector3(CONFIG.BOX, CONFIG.BOX, CONFIG.BOX));
  }
  buildFakeGround() {
    const geometry = new THREE.PlaneGeometry(50, 50);
    const material = new THREE.MeshBasicMaterial({
      visible: false,
      color: 0xff0000
    });
    this.fakeGround = new THREE.Mesh(geometry, material);
    this.fakeGround.rotation.x = toRadian(-90);
  }
  rotate(direction, noAnimation = false, angle = 1) {
    if (this.isZooming || this.isRotating) return;
    this.controls.enabled = false;
    switch (direction) {
      default:
        break;
      case 'left':
        this.axis = new THREE.Vector3(0, 1, 0);
        if (noAnimation) {
          this.targetAngle = angle;
        } else {
          this.targetAngle = CONFIG.ROTATE.Y;
        }
        this.rotationY += this.targetAngle;
        break;
      case 'right':
        this.axis = new THREE.Vector3(0, 1, 0);
        if (noAnimation) {
          this.targetAngle = -angle;
        } else {
          this.targetAngle = -CONFIG.ROTATE.Y;
        }
        this.rotationY += this.targetAngle;
        break;
      case 'top':
        this.axis = this.getPerpendicularXZAxisManually();
        if (noAnimation) {
          this.targetAngle = -angle;
        } else {
          this.targetAngle = -CONFIG.ROTATE.XZ;
        }
        if (this.rotationXZ === CONFIG.ROTATE.XZ_MAX) {
          return false;
        }
        this.rotationXZ = Math.max(this.rotationXZ + this.targetAngle, CONFIG.ROTATE.XZ_MAX);
        break;
      case 'bottom':
        this.axis = this.getPerpendicularXZAxisManually();
        if (noAnimation) {
          this.targetAngle = angle;
        } else {
          this.targetAngle = CONFIG.ROTATE.XZ;
        }
        if (this.rotationXZ === CONFIG.ROTATE.XZ_MIN) {
          return false;
        }
        this.rotationXZ = Math.min(this.rotationXZ + this.targetAngle, CONFIG.ROTATE.XZ_MIN);
        break;
    }
    const intersects = this.getLookAtPointOnTerrain();
    this.lookAt = intersects.length > 0 ? intersects[0].point : new THREE.Vector3(0, 0, 0);
    this.lookAt.y = 0;
    this.cameraPositionOrigin = this.camera.position.clone();
    if (noAnimation) {
      this.rotateAboutPoint(this.camera, this.cameraPositionOrigin, this.lookAt, this.axis, toRadian(this.targetAngle));
    } else {
      this.isRotating = true;
      this.isMoving = true;
      this.rotateOrigin = 0;
      this.rotateTarget = this.targetAngle;
      this.rotateSpeed = CONFIG.ROTATE.SPEED;
      this.rotateStart = RAFManager$1.now;
    }
  }
  animateRotate(now) {
    const percent = (now - this.rotateStart) / this.rotateSpeed;
    if (percent < 1) {
      const angle = this.rotateOrigin + (this.rotateTarget - this.rotateOrigin) * outExpo(percent);
      this.rotateAboutPoint(this.camera, this.cameraPositionOrigin, this.lookAt, this.axis, toRadian(angle));
    } else {
      this.isRotating = false;
      this.isMoving = false;
    }
  }
  zoom(direction, noAnimation = false, force = CONFIG.ZOOM.FORCE) {
    if (this.isZooming || this.isRotating) return;
    this.cameraPositionOrigin = this.camera.position.clone();
    this.lookAtVector = new THREE.Vector3();
    this.camera.getWorldDirection(this.lookAtVector);
    switch (direction) {
      default:
        break;
      case 'out':
        this.lookAtVector.negate();
        this.zoomTarget = force;
        if (this.currentZoom === CONFIG.ZOOM.MIN) {
          SoundManager$1.play('snowbox_fail');
          return false;
        }
        SoundManager$1.play('snowbox_zoom_out');
        this.currentZoom = Math.min(this.currentZoom + this.zoomTarget, CONFIG.ZOOM.MIN);
        break;
      case 'in':
        this.zoomTarget = force;
        if (this.currentZoom === CONFIG.ZOOM.MAX) {
          SoundManager$1.play('snowbox_fail');
          return false;
        }
        SoundManager$1.play('snowbox_zoom_in');
        this.currentZoom = Math.max(this.currentZoom - this.zoomTarget, CONFIG.ZOOM.MAX);
        break;
    }
    if (noAnimation) {
      this.translateFromVector(this.camera, this.cameraPositionOrigin, this.lookAtVector, this.zoomTarget);
    } else {
      this.zoomOrigin = 0;
      this.zoomSpeed = CONFIG.ZOOM.SPEED;
      this.zoomStart = RAFManager$1.now;
      this.isZooming = true;
      this.isMoving = true;
    }
  }
  animateZoom(now) {
    const percent = (now - this.zoomStart) / this.zoomSpeed;
    if (percent < 1) {
      const translation = this.zoomOrigin + (this.zoomTarget - this.zoomOrigin) * outElastic(percent);
      this.translateFromVector(this.camera, this.cameraPositionOrigin, this.lookAtVector, translation);
    } else {
      this.isZooming = false;
      this.isMoving = false;
    }
  }
  moveOnEdges(edge) {
    const speed = CONFIG.EDGES_SPEED;
    let x;
    let z;
    const angle = toRadian(this.rotationY);
    switch (edge) {
      default:
        break;
      case 'top':
        x = -speed * Math.sin(angle);
        z = -speed * Math.cos(angle);
        break;
      case 'right':
        x = speed * Math.cos(angle);
        z = -speed * Math.sin(angle);
        break;
      case 'bottom':
        x = speed * Math.sin(angle);
        z = speed * Math.cos(angle);
        break;
      case 'left':
        x = -speed * Math.cos(angle);
        z = speed * Math.sin(angle);
        break;
    }
    this.camera.position.x += x;
    this.camera.position.z += z;
  }
  getLookAtPointOnTerrain() {
    const worldPos = new THREE.Vector3();
    this.camera.getWorldPosition(worldPos);
    const worldDir = new THREE.Vector3();
    this.camera.getWorldDirection(worldDir);
    this.raycaster.set(worldPos, worldDir);
    return this.raycaster.intersectObjects([this.fakeGround]);
  }
  rotateAboutPoint(camera, origin, point, axis, theta) {
    const helper = new THREE.Object3D();
    helper.position.copy(origin);
    helper.position.sub(point);
    helper.position.applyAxisAngle(axis, theta);
    helper.position.add(point);
    helper.rotateOnAxis(axis, theta);
    camera.position.copy(helper.position);
    camera.lookAt(point);
    helper.remove();
  }
  translateFromVector(camera, origin, vector, translate) {
    const helper = new THREE.Object3D();
    helper.position.copy(origin);
    const vectorHelper = new THREE.Vector3();
    vectorHelper.copy(vector);
    vectorHelper.multiplyScalar(translate);
    helper.position.add(vectorHelper);
    camera.position.copy(helper.position);
    helper.remove();
  }
  getPerpendicularXZAxisManually() {
    const finalAxis = new THREE.Vector3(1, 0, 0);
    finalAxis.applyAxisAngle(new THREE.Vector3(0, 1, 0), toRadian(this.rotationY));
    return finalAxis;
  }
  resetControls() {
    const target = this.getLookAtPointOnTerrain();
    if (target[0] && this.controls.target) {
      this.controls.target.set(target[0].point.x, target[0].point.y, target[0].point.z);
    }
  }
}
var CameraController$1 = new CameraController();
const world = new CANNON.World();
world.gravity.set(0, -9.8, 0);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 10;
world.defaultContactMaterial.friction = 1;
world.defaultContactMaterial.restitution = 0.05;
new CANNON.Material('iceMaterial');
class Scene {
  constructor() {
    this.isTouchDevice = isTouchDevice();
    this.sceneSubjects = [];
    this.mode = '';
    this.isPinchZooming = false;
    this.bind();
  }
  bind() {
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.shapeLoaded = this.shapeLoaded.bind(this);
    this.addShape = this.addShape.bind(this);
    this.onScaleInput = this.onScaleInput.bind(this);
    this.colorSubject = this.colorSubject.bind(this);
    this.onCanvasTouchMove = this.onCanvasTouchMove.bind(this);
  }
  init(canvas) {
    this.canvas = canvas;
    this.screenDimensions = {
      width: this.canvas.clientWidth,
      height: this.canvas.clientHeight
    };
    this.ui = {
      module: document.body.querySelector('#module-snowglobe'),
      toolbar: document.body.querySelector('[toolbar]'),
      UI: document.body.querySelector('.ui')
    };
    this.preloadShapes();
    this.setUnits();
    this.initCannon();
    this.buildScene();
    this.buildRender();
    this.buildCamera();
    this.buildSceneSubjects();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clock = new THREE.Clock();
    this.moveOffset = {
      x: 0,
      y: 0,
      z: 0
    };
    this.scene.add(CameraController$1.fakeGround);
    CameraController$1.rotate('left', true, 45);
    this.events();
  }
  preloadShapes() {
    LoaderManager$1.load({
      name: cubeConfig.NAME,
      normalMap: cubeConfig.NORMAL_MAP,
      obj: cubeConfig.OBJ
    });
    LoaderManager$1.load({
      name: giftConfig.NAME,
      obj: giftConfig.OBJ
    });
    LoaderManager$1.load({
      name: archConfig.NAME,
      normalMap: archConfig.NORMAL_MAP,
      obj: archConfig.OBJ
    });
    LoaderManager$1.load({
      name: prismConfig.NAME,
      normalMap: prismConfig.NORMAL_MAP,
      obj: prismConfig.OBJ
    });
    LoaderManager$1.load({
      name: sphereConfig.NAME,
      normalMap: sphereConfig.NORMAL_MAP,
      obj: sphereConfig.OBJ
    });
    LoaderManager$1.load({
      name: treeConfig.NAME,
      normalMap: treeConfig.NORMAL_MAP,
      obj: treeConfig.OBJ
    });
    LoaderManager$1.load({
      name: pyramidConfig.NAME,
      normalMap: pyramidConfig.NORMAL_MAP,
      obj: pyramidConfig.OBJ
    });
    LoaderManager$1.load({
      name: quarterCircleConfig.NAME,
      normalMap: quarterCircleConfig.NORMAL_MAP,
      obj: quarterCircleConfig.OBJ,
      wrl: quarterCircleConfig.WRL
    });
    LoaderManager$1.load({
      name: snowmanConfig.NAME,
      normalMap: snowmanConfig.NORMAL_MAP,
      map: snowmanConfig.MAP,
      obj: snowmanConfig.OBJ
    });
  }
  initCannon() {
    this.world = world;
  }
  buildScene() {
    this.scene = new THREE.Scene();
  }
  buildRender() {
    const {
      width,
      height
    } = this.screenDimensions;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setClearColor(0x000000, 1);
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.renderer.setPixelRatio(DPR);
    this.renderer.setSize(width, height);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;
  }
  buildCamera() {
    CameraController$1.init(this.screenDimensions, this.renderer.domElement);
  }
  buildHelpers() {
    const dir = new THREE.Vector3(0, 1, 0);
    dir.normalize();
    const origin = new THREE.Vector3(0, 0, 0);
    const length = 1;
    const hex = 0xff00ff;
    const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    this.scene.add(arrowHelper);
    const gridHelper = new THREE.GridHelper(CONFIG$4.SCENE_SIZE, CONFIG$4.SCENE_SIZE / 10);
    this.scene.add(gridHelper);
  }
  buildSceneSubjects() {
    this.lights = new Lights(this.scene);
    this.sky = new Sky(this.scene);
    this.mountain = new Mountain(this.scene, this.world, this.sceneSubjects);
    this.planeHelper = new PlaneHelper(this.scene).mesh;
  }
  events() {
    window.addEventListener('resize', this.onWindowResize, {
      passive: true
    });
    if (this.isTouchDevice) {
      this.canvas.addEventListener('touchstart', this.onMouseDown);
      document.body.addEventListener('touchend', this.onMouseUp);
      document.body.addEventListener('touchmove', this.onMouseMove);
      this.canvas.addEventListener('touchmove', this.onCanvasTouchMove, false);
    } else {
      this.canvas.addEventListener('mousemove', this.onMouseMove);
      this.canvas.addEventListener('mousedown', this.onMouseDown);
      this.canvas.addEventListener('mouseup', this.onMouseUp);
      this.canvas.addEventListener('wheel', this.onWheel);
    }
  }
  update(now) {
    const {
      camera,
      controls
    } = CameraController$1;
    if (controls && controls.enabled && controls.target) controls.update();
    if (CameraController$1.isRotating) {
      CameraController$1.animateRotate(now);
    }
    if (CameraController$1.isZooming) {
      CameraController$1.animateZoom(now);
    }
    if (this.mode === 'edit' && this.activeSubject) {
      if (CameraController$1.isMoving || this.activeSubject.isMoving) {
        window.dispatchEvent(createCustomEvent('UPDATE_EDIT'));
      }
      if (CameraController$1.isZooming) {
        this.activeSubject.updateRotatingCircle(CameraController$1.camera.zoom);
      }
    }
    this.world.step(CONFIG$4.TIMESTEP);
    for (let i = 0; i < this.sceneSubjects.length; i++) {
      if (this.sceneSubjects[i].update) {
        this.sceneSubjects[i].update(CameraController$1.camera.position);
      }
    }
    if (this.cannonDebugRenderer) this.cannonDebugRenderer.update();
    this.renderer.render(this.scene, camera);
  }
  onWindowResize() {
    this.setUnits();
    CameraController$1.camera.aspect = this.width / this.height;
    CameraController$1.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
  onMouseMove(e) {
    if (e.type !== 'touchmove') {
      e.preventDefault();
    }
    if (this.mouseState === 'down' && this.mode === '') {
      this.setMode('drag');
    }
    if (e) {
      const x = e.clientX || e.touches && e.touches[0].clientX;
      const y = e.clientY || e.touches && e.touches[0].clientY;
      this.mouse.x = x / this.width * 2 - 1;
      this.mouse.y = -(y / this.height) * 2 + 1;
      this.isInCanvas = this.mouse.y > -1 && this.mouse.y < 1;
      if (this.selectedSubject && this.isSelectingMouseDown && !this.selectedSubject.ghost && this.mode !== 'edit') {
        this.selectedSubject.showGhost();
      }
      if (!this.selectedSubject && this.mode !== 'drag' && this.mode !== 'move') {
        const hit = this.getNearestObject();
        if (hit) {
          const subject = this.getSubjectfromMesh(hit.object.parent);
          this.highlightSubject(subject);
        } else {
          this.highlightSubject(false);
        }
        this.mouseInEdge = null;
      } else if (this.mode === 'move' && this.selectedSubject && this.isInCanvas) {
        this.moveSelectedSubject();
        this.checkCollision();
      }
    }
    if (CameraController$1.camera) this.raycaster.setFromCamera(this.mouse, CameraController$1.camera);
  }
  onMouseDown(e) {
    if (e.type === 'touchstart') {
      this.detectTouches(e);
    } else {
      e.preventDefault();
    }
    this.mouseState = 'down';
    const hit = this.getNearestObject();
    if (hit.point && (hit.object.geometry instanceof THREE.Geometry || hit.object.geometry instanceof THREE.BufferGeometry)) {
      const newSelectedSubject = this.sceneSubjects.find(subject => subject.mesh ? subject.mesh.uuid === hit.object.parent.uuid : false);
      this.selectSubject(newSelectedSubject);
      clearTimeout(this.isSelectingMouseDownTimeOut);
      this.isSelectingMouseDownTimeOut = setTimeout(() => {
        this.isSelectingMouseDown = true;
      }, 200);
    } else {
      this.setMode();
    }
  }
  onMouseUp(e) {
    if (e.type !== 'touchend') {
      e.preventDefault();
    } else if (this.selectedSubject && this.mouseState !== 'down' && this.mode !== 'edit' && this.isInCanvas) {
      this.unselectSubject();
      this.setMode();
    }
    if (this.selectedSubject && this.mode === 'move' && this.mouseState === 'down' && !this.isAddingShape) {
      this.activeSubject = this.selectedSubject;
      this.setMode('edit');
    } else if (!this.isTouchDevice) {
      this.setMode();
    }
    this.mouseState = 'up';
    if (this.isPinchZooming) {
      this.isPinchZooming = false;
    }
    this.isAddingShape = false;
  }
  onWheel(e) {
    if (CameraController$1.isZooming || CameraController$1.isRotating) return;
    CameraController$1.isMoving = true;
    if (e.deltaY < 0) {
      CameraController$1.rotate('left', true, 2);
    } else if (e.deltaY > 0) {
      CameraController$1.rotate('right', true, 2);
    }
    clearTimeout(this.onWheelTimeout);
    this.onWheelTimeout = setTimeout(() => {
      CameraController$1.isMoving = false;
    }, 1000);
  }
  detectTouches(e) {
    this.mouse.x = e.targetTouches[0].clientX / this.width * 2 - 1;
    this.mouse.y = -(e.targetTouches[0].clientY / this.height) * 2 + 1;
    if (CameraController$1.camera) this.raycaster.setFromCamera(this.mouse, CameraController$1.camera);
    if (this.mode === 'edit' || this.mode === 'move') return;
    if (e.touches.length === 2) {
      this.isPinchZooming = true;
      return;
    }
    this.xTouchStart = e.touches[0].clientX;
    this.yTouchStart = e.touches[0].clientY;
  }
  onCanvasTouchMove(e) {
    if (this.mode === 'edit' || this.mode === 'move') return;
    if (this.isPinchZooming) {
      const distancePinch = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
      if (distancePinch > this.lastDistancePinch) {
        CameraController$1.zoom('in', true, 2);
      } else {
        CameraController$1.zoom('out', true, 2);
      }
      this.lastDistancePinch = distancePinch;
      return;
    }
    const xUp = e.touches[0].clientX;
    const yUp = e.touches[0].clientY;
    const xDiff = this.xTouchStart - xUp;
    const yDiff = this.yTouchStart - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        CameraController$1.rotate('left', true, 2.2);
      } else {
        CameraController$1.rotate('right', true, 2.2);
      }
    } else {
      if (yDiff > 0) {
        CameraController$1.rotate('bottom', true, 0.88);
      } else {
        CameraController$1.rotate('top', true, 0.88);
      }
    }
    this.xTouchStart = e.touches[0].clientX;
    this.yTouchStart = e.touches[0].clientY;
  }
  colorSubject(e) {
    const el = e.currentTarget;
    const {
      colorSubject
    } = el.dataset;
    if (this.activeSubject) {
      const threeColor = new THREE.Color(colorSubject);
      const threeHighlightedColor = new THREE.Color(darken(colorSubject, 15));
      for (let i = 0; i < this.activeSubject.mesh.children.length; i++) {
        const child = this.activeSubject.mesh.children[i];
        if (this.activeSubject.name === 'gift') {
          if (i === 4) {
            child.material.color = threeColor;
          }
        } else {
          child.material.color = threeColor;
        }
      }
      this.activeSubject.materials.default.color = threeColor;
      this.activeSubject.materials.highlight.color = threeHighlightedColor;
      SHAPE_COLORS[this.activeSubject.name].default = threeColor;
      SHAPE_COLORS[this.activeSubject.name].highlight = threeHighlightedColor;
      SoundManager$1.play('snowbox_pick_color');
    }
  }
  onScaleInput(e) {
    if (this.activeSubject && !this.selectedSubject) {
      this.selectedSubject = this.activeSubject;
      this.selectedSubject.select();
    }
    if (this.selectedSubject) {
      this.selectedSubject.scale(e.target.value);
      this.checkCollision(true);
    }
    SoundManager$1.play('snowbox_scale', parseFloat((e.target.value - 5) / 35));
  }
  rotateObject(el) {
    const direction = el.dataset.rotateObject;
    if (this.activeSubject && !this.selectedSubject) {
      this.selectedSubject = this.activeSubject;
      this.selectedSubject.select();
    }
    if (this.selectedSubject && this.mode === 'edit') {
      const angle = direction === 'right' || direction === 'bottom' ? toRadian(45) : toRadian(-45);
      this.selectedSubject.rotate(direction, angle, CameraController$1.rotationY);
      this.checkCollision(true);
    }
    SoundManager$1.play('snowbox_rotate');
  }
  addShape(shape, material = 'snow') {
    if (this.mode === 'move') return;
    let subject;
    switch (shape) {
      case 'cube':
        subject = new Cube(this.scene, this.world, material);
        break;
      case 'pyramid':
        subject = new Pyramid(this.scene, this.world, material);
        break;
      case 'arch':
        subject = new Arch(this.scene, this.world, material);
        break;
      case 'tree':
        subject = new Tree(this.scene, this.world, material);
        break;
      case 'sphere':
        subject = new Sphere(this.scene, this.world, material);
        break;
      case 'quarter-circle':
        subject = new QuarterCircle(this.scene, this.world, material);
        break;
      case 'prism':
        subject = new Tetra(this.scene, this.world, material);
        break;
      case 'gift':
        subject = new Gift(this.scene, this.world, material);
        break;
      case 'snowman':
        subject = new Snowman(this.scene, this.world, material);
        break;
    }
    subject.load(this.shapeLoaded);
  }
  shapeLoaded(subject) {
    this.isAddingShape = true;
    this.sceneSubjects.push(subject);
    this.selectSubject(subject, true);
    const box = new THREE.Box3().setFromObject(subject.ghost);
    this.planeHelper.position.y = subject.size / 2 * (box.max.y - box.min.y);
  }
  unselectSubject(unmove) {
    CameraController$1.resetControls();
    if (!unmove && this.selectedSubject.ghost) {
      this.selectedSubject.moveToGhost();
    }
    this.wakeUpBodies();
    this.selectedSubject.unselect();
    this.mountain.removePositionMarker();
    this.selectedSubject = null;
    SoundManager$1.play('snowbox_unselect_subject');
  }
  selectSubject(newSelectedSubject, fromToolbar = false) {
    this.setMode('move');
    this.selectedSubject = newSelectedSubject;
    this.selectedSubject.select(this.isAddingShape);
    const {
      position
    } = this.selectedSubject.body;
    this.moveOffset.y = 0;
    if (fromToolbar) {
      this.moveOffset.x = 0;
      this.moveOffset.z = 0;
      this.mountain.addPositionMarker({
        x: 100,
        y: 100,
        z: 100
      });
    } else {
      SoundManager$1.play('snowbox_select_subject');
      const box = new THREE.Box3().setFromObject(this.selectedSubject.mesh);
      this.planeHelper.position.y = (box.max.y - box.min.y) / 2;
      this.renderer.render(this.scene, CameraController$1.camera);
      const posPlaneHelper = this.getCurrentPosOnPlaneHelper();
      this.moveOffset.x = -(posPlaneHelper.x - position.x);
      this.moveOffset.z = -(posPlaneHelper.z - position.z);
      this.mountain.addPositionMarker({
        x: posPlaneHelper.x + this.moveOffset.x,
        y: this.planeHelper.position.y + this.moveOffset.y,
        z: posPlaneHelper.z + this.moveOffset.z
      });
    }
  }
  moveSelectedSubject() {
    const posPlaneHelper = this.getCurrentPosOnPlaneHelper();
    if (posPlaneHelper) {
      const x = posPlaneHelper.x + this.moveOffset.x;
      const z = posPlaneHelper.z + this.moveOffset.z;
      const y = this.planeHelper.position.y + this.moveOffset.y;
      this.selectedSubject.moveTo(x, y, z);
      this.mountain.movePositionMarker(x, z);
    }
  }
  findNearestIntersectingObject(objects) {
    const hits = this.raycaster.intersectObjects(objects, true);
    const closest = hits.length > 0 ? hits[0] : false;
    return closest;
  }
  getCurrentPosOnPlaneHelper() {
    const intersects = [];
    this.planeHelper.raycast(this.raycaster, intersects);
    if (intersects.length > 0) {
      const {
        point
      } = intersects[0];
      return point;
    }
    return false;
  }
  getNearestObject() {
    const objects = this.getObjectsList();
    return this.findNearestIntersectingObject(objects);
  }
  getSubjectfromMesh(mesh) {
    return this.sceneSubjects.find(subject => subject.mesh ? subject.mesh.uuid === mesh.uuid : false);
  }
  highlightSubject(subject) {
    if (subject && subject !== this.highlightedSubject) {
      this.cleanHighlightedSubjects();
      this.canvas.classList.add('is-pointing');
      subject.highlight();
      this.highlightedSubject = subject;
      SoundManager$1.highlightShape(subject);
    } else if (!subject) {
      if (this.highlightedSubject && this.highlightedSubject !== this.activeSubject) {
        this.highlightedSubject.unhighlight();
      }
      this.canvas.classList.remove('is-pointing');
      this.highlightedSubject = null;
    }
  }
  cleanHighlightedSubjects() {
    for (let i = 0; i < this.sceneSubjects.length; i++) {
      if (this.sceneSubjects[i].unhighlight && this.sceneSubjects[i] !== this.activeSubject) {
        this.sceneSubjects[i].unhighlight();
      }
    }
  }
  getObjectsList(collidable = false) {
    return this.sceneSubjects.filter(subject => {
      if (collidable) {
        return subject.selectable || subject.collidable;
      } else {
        return subject.selectable;
      }
    }).map(subject => subject.mesh).filter(object => object);
  }
  getObjectBoxesList(filter) {
    return this.sceneSubjects.filter(subject => subject !== this.selectedSubject && subject.selectable).map(subject => subject.box).filter(box => box);
  }
  detectMouseInEdge(e) {
    const x = e.clientX;
    const y = e.clientY;
    if (x < this.edgesSize) {
      this.mouseInEdge = 'left';
    } else if (x > this.width - this.edgesSize) {
      this.mouseInEdge = 'right';
    } else if (y < this.edgesSize) {
      this.mouseInEdge = 'top';
    } else if (y > this.height - this.edgesSize) {
      this.mouseInEdge = 'bottom';
    } else {
      this.mouseInEdge = null;
    }
  }
  getScreenPosition(obj) {
    const vector = new THREE.Vector3();
    const widthHalf = 0.5 * this.width;
    const heightHalf = 0.5 * this.height;
    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(CameraController$1.camera);
    vector.x = vector.x * widthHalf + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;
    return {
      x: vector.x,
      y: vector.y
    };
  }
  checkCollision(isEditing = false) {
    let box = new THREE.Box3().setFromObject(this.selectedSubject.ghost);
    const objects = this.getObjectsList(true).filter(subject => subject !== this.selectedSubject.mesh);
    const sizeY = box.max.y - box.min.y;
    const boxHelper = new THREE.Box3().copy(box);
    boxHelper.max.y = sizeY;
    boxHelper.min.y = 0;
    let elevate = 0;
    const offsetDetectionY = 0.01;
    const detectCollision = () => {
      let collision = false;
      for (let index = 0; index < objects.length; index++) {
        const boxItem = new THREE.Box3().setFromObject(objects[index]);
        if (boxHelper.intersectsBox(boxItem)) {
          elevate = Math.max(elevate, boxItem.max.y);
          collision = true;
        }
      }
      if (collision) {
        boxHelper.max.y = elevate + sizeY;
        boxHelper.min.y = elevate + offsetDetectionY;
        detectCollision();
      } else {
        this.moveOffset.y = boxHelper.min.y - 0.05 * this.selectedSubject.scaleFactor;
        if (isEditing) {
          this.selectedSubject.moveTo(null, sizeY / 2 + this.moveOffset.y, null);
          box = new THREE.Box3().setFromObject(this.selectedSubject.ghost);
          if (box.min.y < 0) {
            this.moveOffset.y += -box.min.y;
            this.selectedSubject.moveTo(null, sizeY / 2 + this.moveOffset.y, null);
          }
        }
      }
    };
    detectCollision();
  }
  setMode(mode = '') {
    const {
      controls
    } = CameraController$1;
    this.canvas.classList.remove('is-dragging');
    this.canvas.classList.remove('is-pointing');
    if (this.selectedSubject) {
      this.unselectSubject();
    }
    if (this.mode === 'edit' && mode !== 'edit') {
      if (this.activeSubject) {
        this.activeSubject.deleteRotateCircle();
        window.dispatchEvent(createCustomEvent('LEAVE_EDIT'));
        this.activeSubject = null;
      }
    }
    switch (mode) {
      default:
        this.cleanHighlightedSubjects();
        controls.enabled = true;
        break;
      case 'drag':
        this.cleanHighlightedSubjects();
        this.canvas.classList.add('is-dragging');
        break;
      case 'move':
        this.canvas.classList.add('is-dragging');
        controls.enabled = false;
        break;
      case 'edit':
        this.cleanHighlightedSubjects();
        if (this.activeSubject) {
          this.activeSubject.createRotateCircle(CameraController$1.camera.zoom);
          window.dispatchEvent(createCustomEvent('ENTER_EDIT'));
          this.activeSubject.highlight();
        }
        controls.enabled = false;
        break;
    }
    this.mode = mode;
  }
  deleteSelected() {
    if (this.mode === 'move' && this.selectedSubject || this.mode === 'edit' && this.selectedSubject) {
      this.deleteObject();
    }
  }
  deleteObject() {
    this.sceneSubjects = this.sceneSubjects.filter(subject => subject !== this.selectedSubject);
    if (this.selectedSubject) {
      this.selectedSubject.delete();
    } else if (this.activeSubject) {
      this.activeSubject.delete();
    }
    this.selectedSubject = null;
    this.activeSubject = null;
    this.setMode();
    this.mountain.removePositionMarker();
  }
  wakeUpBodies() {
    const bodies = this.sceneSubjects.filter(subject => subject.selectable || subject.collidable).map(subject => subject.body);
    for (let i = 0; i < bodies.length; i++) {
      if (bodies[i].sleepState > 0) {
        bodies[i].wakeUp();
      }
    }
  }
  setUnits() {
    this.ui.UI.style.height = `${window.innerHeight}px`;
    this.ui.module.style.height = `${window.innerHeight}px`;
    this.width = this.ui.module.offsetWidth;
    this.height = this.ui.module.offsetHeight - this.ui.toolbar.offsetHeight;
    this.edgesSize = CONFIG$4.EDGES_PERCENT_SIZE * this.width;
  }
}
var Scene$1 = new Scene();
const isClicked = {};
function pushButton(el, disable, callback, sound) {
  if (isClicked[el]) return;
  el.classList.add('is-clicked');
  isClicked[el] = true;
  if (sound) {
    SoundManager$1.play('generic_button_click');
  }
  setTimeout(() => {
    isClicked[el] = false;
    el.classList.remove('is-clicked');
    if (disable) {
      el.classList.add('is-disabled');
    }
    if (callback) {
      callback();
    }
  }, RELEASE_BUTTON_TIME);
}
class Toolbar {
  constructor(el) {
    this.el = el;
    this.ui = {
      items: [...this.el.querySelectorAll('[data-toolbar-shape]')],
      arrows: [...this.el.querySelectorAll('[data-toolbar-arrow]')],
      slider: this.el.querySelector('.toolbar__slider')
    };
    this.isTouchDevice = isTouchDevice();
    this.currentIndex = 0;
    this.x = 0;
    this.onArrowDown = this.onArrowDown.bind(this);
    this.setUnits = this.setUnits.bind(this);
    this.setUnits();
    this.events();
  }
  events() {
    window.addEventListener('resize', this.setUnits);
    this.ui.arrows.forEach(arrow => {
      arrow.addEventListener('mousedown', this.onArrowDown);
      arrow.addEventListener('mouseenter', this.onArrowOver);
    });
    this.ui.items.forEach(item => {
      if (this.isTouchDevice) {
        item.addEventListener('touchstart', this.onClickShape);
      } else {
        item.addEventListener('mousedown', this.onClickShape);
        item.addEventListener('mouseenter', this.onMouseOver);
        item.addEventListener('mouseout', this.onMouseOut);
      }
    });
  }
  onMouseOver() {
    SoundManager$1.play('snowbox_shape_mouseover');
  }
  onMouseOut() {
    SoundManager$1.play('snowbox_shape_mouseout');
  }
  onClickShape(e) {
    if (e.type !== 'touchstart') {
      e.preventDefault();
    }
    const button = e.currentTarget;
    const {
      toolbarShape,
      shapeMaterial
    } = button.dataset;
    Scene$1.isInCanvas = false;
    Scene$1.addShape(toolbarShape, shapeMaterial);
    SoundManager$1.play('snowbox_toolbox_select');
  }
  onArrowOver() {
    SoundManager$1.play('snowbox_generic_hover');
  }
  onArrowDown(e) {
    if (this.offsetXSlider > 0) return;
    const el = e.currentTarget;
    pushButton(el);
    const {
      toolbarArrow
    } = el.dataset;
    let index = this.currentIndex;
    let direction = 1;
    if (toolbarArrow === 'left') {
      direction = -1;
      index -= 1;
    }
    if (index < 0 || index === this.ui.items.length - 1 || this.x < this.offsetXSlider - this.ui.items[this.ui.items.length - 1].offsetWidth && direction === 1) return;
    this.x += this.ui.items[index].offsetWidth * -direction;
    this.currentIndex += direction;
    this.ui.items.forEach(item => {
      if (item.classList.contains('no-transition')) {
        item.classList.remove('no-transition');
      }
      item.style.transform = `translateX(${this.x}px)`;
    });
    SoundManager$1.play('generic_button_click');
  }
  setUnits() {
    this.x = 0;
    this.currentIndex = 0;
    this.totalItemsWidth = 0;
    this.ui.items.forEach(item => {
      this.totalItemsWidth += item.offsetWidth;
      item.classList.add('no-transition');
      item.style.transform = 'none';
    });
    this.sliderWidth = this.ui.slider.offsetWidth;
    this.offsetXSlider = this.sliderWidth - this.totalItemsWidth;
    if (this.offsetXSlider > 0) {
      this.el.classList.add('no-arrow');
    } else {
      this.el.classList.remove('no-arrow');
    }
  }
}
class CameraControls {
  constructor(el) {
    this.el = el;
    this.ui = {
      zoomButtons: [...this.el.querySelectorAll('[data-zoom]')],
      rotateButtons: [...this.el.querySelectorAll('[data-rotate-camera]')]
    };
    this.onClickZoom = this.onClickZoom.bind(this);
    this.onClickRotate = this.onClickRotate.bind(this);
    this.events();
  }
  events() {
    this.ui.zoomButtons.forEach(button => {
      button.addEventListener('click', this.onClickZoom);
      button.addEventListener('mouseenter', this.playHoverSound);
    });
    this.ui.rotateButtons.forEach(button => {
      button.addEventListener('click', this.onClickRotate);
      button.addEventListener('mouseenter', this.playHoverSound);
    });
  }
  onClickZoom(e) {
    const el = e.currentTarget;
    CameraController$1.zoom(el.dataset.zoom);
    this.ui.zoomButtons.forEach(button => {
      if (button.classList.contains('is-disabled') && button !== el) button.classList.remove('is-disabled');
    });
    const {
      currentZoom,
      zoomMin,
      zoomMax
    } = CameraController$1;
    const disable = currentZoom === zoomMin || currentZoom === zoomMax;
    pushButton(el, disable);
  }
  onClickRotate(e) {
    const el = e.currentTarget;
    if (el.classList.contains('is-disabled')) {
      SoundManager$1.play('snowbox_fail');
    } else {
      SoundManager$1.play('snowbox_rotate_camera');
    }
    const {
      rotateCamera
    } = el.dataset;
    CameraController$1.rotate(rotateCamera);
    let disable = false;
    if (rotateCamera === 'top' || rotateCamera === 'bottom') {
      this.ui.rotateButtons.forEach(button => {
        if (button.classList.contains('is-disabled') && button !== el) button.classList.remove('is-disabled');
      });
      const {
        rotationXZ,
        rotationXZMin,
        rotationXZMax
      } = CameraController$1;
      disable = rotationXZ === rotationXZMin || rotationXZ === rotationXZMax;
    }
    pushButton(el, disable);
  }
  playHoverSound() {
    SoundManager$1.play('snowbox_generic_hover');
  }
}
class ObjectEditTool {
  constructor(el) {
    this.el = el;
    this.ui = {
      rotateButtons: [...this.el.querySelectorAll('[data-rotate-object]')],
      colorButtons: [...this.el.querySelectorAll('[data-color-subject]')],
      scaleButton: this.el.querySelector('[object-scale-slider]'),
      colorIconButton: this.el.querySelector('[data-open-colors]'),
      toolbar: this.el.querySelector('[object-toolbar-ui]'),
      rotateRight: this.el.querySelector('[object-rotate-right-ui]'),
      rotateBottom: this.el.querySelector('[object-rotate-bottom-ui]'),
      trash: this.el.querySelector('[object-trash-ui]'),
      trashButton: this.el.querySelector('[data-trash-object]')
    };
    this.state = 'is-hidden';
    this.resetRotateTimeout = {};
    this.rotateIntervals = {};
    this.isTouchDevice = isTouchDevice();
    this.bind();
    this.hide();
    this.events();
  }
  bind() {
    this.updatePosition = this.updatePosition.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.hide = this.hide.bind(this);
    this.resetRotateButtons = this.resetRotateButtons.bind(this);
    this.onMouseDownRotate = this.onMouseDownRotate.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
  }
  events() {
    if (this.isTouchDevice) {
      this.ui.colorIconButton.addEventListener('touchstart', this.onClickColorIcon);
      this.ui.trashButton.addEventListener('touchstart', this.deleteObject);
    } else {
      this.ui.colorIconButton.addEventListener('click', this.onClickColorIcon);
      this.ui.trashButton.addEventListener('mousedown', this.deleteObject);
      this.ui.trashButton.addEventListener('mouseenter', this.playHoverSound);
    }
    this.ui.scaleButton.addEventListener('input', Scene$1.onScaleInput);
    window.addEventListener('resize', this.updatePosition);
    this.ui.colorButtons.forEach(button => {
      if (this.isTouchDevice) {
        button.addEventListener('touchstart', Scene$1.colorSubject);
      } else {
        button.addEventListener('click', Scene$1.colorSubject);
      }
    });
    this.ui.rotateButtons.forEach(button => {
      if (this.isTouchDevice) {
        button.addEventListener('touchstart', this.onMouseDownRotate);
        button.addEventListener('touchend', this.resetRotateButtons);
      } else {
        button.addEventListener('mousedown', this.onMouseDownRotate);
        button.addEventListener('mouseup', this.resetRotateButtons);
        button.addEventListener('mouseenter', this.playHoverSound);
      }
    });
    window.addEventListener('ENTER_EDIT', this.enterEditMode);
    window.addEventListener('LEAVE_EDIT', this.hide);
    window.addEventListener('UPDATE_EDIT', this.updatePosition);
  }
  enterEditMode() {
    if (!Scene$1.activeSubject) return;
    const {
      scaleFactor
    } = Scene$1.activeSubject;
    this.ui.scaleButton.value = scaleFactor * 10;
    setTimeout(() => {
      this.show();
      this.updatePosition();
    }, 100);
  }
  show() {
    if (Scene$1.activeSubject) {
      this.el.classList.add('is-showed');
      this.state = 'is-showed';
      if (!Scene$1.activeSubject.editable) {
        this.el.classList.add('not-editable');
      }
    }
  }
  hide() {
    this.resetRotateButtons();
    this.ui.colorIconButton.classList.remove('is-open');
    this.el.classList.remove('is-showed');
    this.state = 'is-hidden';
    this.el.classList.remove('not-editable');
  }
  updatePosition() {
    if (this.state === 'is-hidden') return;
    if (Scene$1.activeSubject && Scene$1.activeSubject.editable) {
      const xArrowHelper = Scene$1.scene.getObjectByName('arrow-helper-x');
      if (xArrowHelper) {
        const xArrowHelperPos = Scene$1.getScreenPosition(xArrowHelper);
        this.ui.rotateRight.style.transform = `translate(-50%, -50%) translate(${xArrowHelperPos.x}px,${xArrowHelperPos.y}px)`;
      }
      const yArrowHelper = Scene$1.scene.getObjectByName('arrow-helper-y');
      if (yArrowHelper) {
        const yArrowHelperPos = Scene$1.getScreenPosition(yArrowHelper);
        this.ui.rotateBottom.style.transform = `translate(-50%, -50%) translate(${yArrowHelperPos.x}px,${yArrowHelperPos.y}px)`;
      }
    }
    const trashHelper = Scene$1.scene.getObjectByName('trash-helper');
    if (trashHelper) {
      const trashHelperPos = Scene$1.getScreenPosition(trashHelper);
      this.ui.trash.style.transform = `translate(-50%, -50%) translate(${trashHelperPos.x}px,${trashHelperPos.y}px)`;
    }
    const toolbarHelper = Scene$1.scene.getObjectByName('toolbar-helper');
    if (toolbarHelper) {
      const toolbarHelperPos = Scene$1.getScreenPosition(toolbarHelper);
      this.ui.toolbar.style.transform = `translate(-50%, -50%) translate(${toolbarHelperPos.x}px,${toolbarHelperPos.y}px)`;
    }
  }
  onClickColorIcon(e) {
    const el = e.currentTarget;
    el.classList.toggle('is-open');
    if (el.classList.contains('is-open')) {
      SoundManager$1.play('snowbox_open_colors');
    }
  }
  playHoverSound() {
    SoundManager$1.play('snowbox_generic_hover');
  }
  onMouseDownRotate(e) {
    this.ui.rotateButtons.forEach(button => {
      clearInterval(this.rotateIntervals[button]);
      clearTimeout(this.resetRotateTimeout[button]);
    });
    const el = e.currentTarget;
    Scene$1.rotateObject(el);
    el.classList.add('is-clicked');
    this.rotateIntervals[el] = setInterval(() => {
      Scene$1.rotateObject(el);
    }, RELEASE_BUTTON_TIME);
  }
  resetRotateButtons() {
    this.ui.rotateButtons.forEach(button => {
      clearInterval(this.rotateIntervals[button]);
      this.resetRotateTimeout[button] = setTimeout(() => {
        button.classList.remove('is-clicked');
      }, RELEASE_BUTTON_TIME);
    });
  }
  deleteObject(e) {
    const el = e.currentTarget;
    el.classList.add('is-clicked');
    setTimeout(() => {
      SoundManager$1.play('snowbox_shape_delete');
      Scene$1.deleteObject();
      this.hide();
      el.classList.remove('is-clicked');
    }, RELEASE_BUTTON_TIME);
  }
}
class Download {
  constructor(el) {
    this.el = el;
    this.ui = {
      popin: document.body.querySelector('[download-popin]'),
      gif: document.body.querySelector('[gif]'),
      link: document.body.querySelector('[download-link]'),
      exit: document.body.querySelector('[download-exit]'),
      canvas: document.body.querySelector('#canvas')
    };
    this.maxGIFWidth = 1200;
    this.bind();
    this.events();
    this.updateAspectRatio();
  }
  bind() {
    this.generateGIF = this.generateGIF.bind(this);
    this.renderFrames = this.renderFrames.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
    this.open = this.open.bind(this);
    this.exit = this.exit.bind(this);
  }
  events() {
    document.body.addEventListener('click', this.onClickOutside);
    this.el.addEventListener('mousedown', this.open);
    this.el.addEventListener('mouseenter', this.playHoverSound);
    this.ui.popin.addEventListener('click', e => e.stopPropagation);
    this.ui.link.addEventListener('click', e => {
      SoundManager$1.play('generic_button_click');
      e.stopPropagation();
    });
    this.ui.exit.addEventListener('mousedown', this.exit);
    this.ui.exit.addEventListener('mouseenter', this.playHoverSound);
    this.ui.popin.addEventListener('mouseenter', this.playHoverSound);
    this.ui.link.addEventListener('mouseenter', this.playHoverSound);
  }
  open() {
    pushButton(this.el, null, this.renderFrames, true);
    this.updateAspectRatio();
    this.ui.popin.classList.add('is-open');
    this.ui.popin.classList.add('is-loading');
  }
  exit() {
    pushButton(this.ui.exit, null, null, true);
    this.ui.popin.classList.remove('is-open');
    this.ui.popin.classList.remove('is-loading');
    SoundManager$1.play('snowbox_generate_gif_end');
  }
  renderFrames() {
    SoundManager$1.play('snowbox_generate_gif_start');
    Scene$1.setMode();
    const originWidth = this.ui.canvas.width;
    const originHeight = this.ui.canvas.height;
    const width = Math.min(this.maxGIFWidth, originWidth);
    const height = width * originHeight / originWidth;
    this.resizeScene(width, height);
    const sources = [];
    for (let i = 0; i < 16; i++) {
      CameraController$1.rotate('right', true, 22.5);
      Scene$1.renderer.render(Scene$1.scene, CameraController$1.camera);
      const base64 = Scene$1.renderer.domElement.toDataURL();
      sources.push(base64);
    }
    this.resizeScene(originWidth, originHeight);
    LoaderManager$1.subjects['gif'] = null;
    LoaderManager$1.load({
      name: 'gif',
      gif: sources
    }, this.generateGIF);
  }
  resizeScene(width, height) {
    Scene$1.renderer.setSize(width / window.devicePixelRatio, height / window.devicePixelRatio, false);
    CameraController$1.camera.aspect = width / height;
    CameraController$1.camera.updateProjectionMatrix();
  }
  generateGIF() {
    const {
      sources
    } = LoaderManager$1.subjects['gif'];
    const gif = new GIF({
      workers: 4,
      workerScript: '../../third_party/lib/gif/gif.worker.js',
      quality: 30
    });
    sources.forEach(source => {
      gif.addFrame(source, {
        delay: 200
      });
    });
    gif.on('finished', blob => {
      if (this.ui.popin.classList.contains('is-loading')) {
        SoundManager$1.play('snowbox_generate_gif_complete');
      }
      this.ui.popin.classList.remove('is-loading');
      this.ui.gif.src = URL.createObjectURL(blob);
      this.ui.link.href = URL.createObjectURL(blob);
      SoundManager$1.play('snowbox_generate_gif_end');
    });
    gif.render();
  }
  playHoverSound() {
    SoundManager$1.play('snowbox_generic_hover');
  }
  updateAspectRatio() {
    const ratio = this.ui.canvas.offsetHeight / this.ui.canvas.offsetWidth * 100;
    this.ui.gif.parentNode.style.paddingBottom = `${ratio}%`;
  }
  onClickOutside() {
    const el = this.ui.popin;
    if (el.classList.contains('is-open') && !el.classList.contains('is-loading')) {
      el.classList.remove('is-open');
    }
  }
}
class SnowglobeGame {
  static get is() {
    return 'snowglobe-game';
  }
  constructor(el) {
    this.ui = {
      canvas: el.querySelector('#canvas'),
      toolbar: el.querySelector('[toolbar]'),
      cameraControls: el.querySelector('[camera-controls]'),
      objectEditTool: el.querySelector('[object-edit-tool]'),
      download: el.querySelector('[data-download]')
    };
    this.render = this.render.bind(this);
    this.isTouchDevice = isTouchDevice();
    Scene$1.init(this.ui.canvas);
    RAFManager$1.init();
    new Toolbar(this.ui.toolbar);
    new CameraControls(this.ui.cameraControls);
    new ObjectEditTool(this.ui.objectEditTool);
    new Download(this.ui.download);
    window.addEventListener('RAF', this.render);
  }
  render(e) {
    const {
      now
    } = e.detail;
    Scene$1.update(now);
  }
  setup() {}
  update() {}
  teardown() {}
  start() {}
  pause() {}
  resume() {}
}
customElements.define(SnowglobeGame.is, SnowglobeGame);
const game = new SnowglobeGame(document.getElementById('module-snowglobe'));
sceneApi.preload.sounds('snowbox_load_sounds');
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  sound: ['snowbox_music_start']
});
sceneApi.ready(async () => {});