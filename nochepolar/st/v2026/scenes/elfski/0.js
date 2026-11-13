import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
class Grad {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  dot2(x, y) {
    return this.x * x + this.y * y;
  }
}
var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
var perm = new Array(512);
var gradP = new Array(512);
function seed(seed) {
  if (seed > 0 && seed < 1) {
    seed *= 65536;
  }
  seed = Math.floor(seed);
  if (seed < 256) {
    seed |= seed << 8;
  }
  for (var i = 0; i < 256; i++) {
    var v;
    if (i & 1) {
      v = p[i] ^ seed & 255;
    } else {
      v = p[i] ^ seed >> 8 & 255;
    }
    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
}
seed(0);
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a, b, t) {
  return (1 - t) * a + t * b;
}
function noise(x, y) {
  var X = Math.floor(x),
    Y = Math.floor(y);
  x = x - X;
  y = y - Y;
  X = X & 255;
  Y = Y & 255;
  var n00 = gradP[X + perm[Y]].dot2(x, y);
  var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
  var u = fade(x);
  return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
}
const gltfLoader = new THREE.GLTFLoader();
const textureLoader = new THREE.TextureLoader();
gltfLoader.setCrossOrigin('anonymous');
textureLoader.crossOrigin = 'anonymous';
function gltf(path, base = '.') {
  return new Promise((resolve, reject) => {
    gltfLoader.load(`${base}models/${path}.gltf`, resolve, () => {}, reject);
  });
}
function texture(path, base = '.', cb = null) {
  return new Promise((resolve, reject) => {
    const texture = textureLoader.load(`${base}img/${path}.png`, resolve, () => {}, reject);
    cb && cb(texture);
  });
}
const vertexShader = `
uniform float spriteSize;
uniform float devicePixelRatio;
attribute float spriteIndex;
varying float vSpriteIndex;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  vSpriteIndex = spriteIndex;  // passed through without modification
  gl_PointSize = spriteSize * devicePixelRatio;
  gl_Position = projectionMatrix * mvPosition;
}
`;
const fragmentShader = `
uniform float spritesPerRow;
uniform sampler2D textures[1];
varying float vSpriteIndex;

void main() {
  if (vSpriteIndex < 0.0) {
    discard;  // used to indicate no sprite
  }

  float row = floor(vSpriteIndex / spritesPerRow);
  float col = (vSpriteIndex - (row * spritesPerRow));

  float factor = (1.0 / spritesPerRow);
  vec2 upperLeftTC = vec2(factor * col, factor * row);
  vec2 pos = upperLeftTC + gl_PointCoord * factor;

  vec4 startColor = vec4(1.0, 1.0, 1.0, 1.0);
  vec4 finalColor = texture2D(textures[0], pos);

  if (finalColor.a < 0.1) {
    discard;  // sanity discard if blend mode is bad
  }

  gl_FragColor = startColor * finalColor;
}
`;
const spriteSize = 128;
class Points extends THREE.Object3D {
  constructor(points, texture) {
    super();
    this._points = points;
    this._texture = texture;
    const uniforms = {
      'spritesPerRow': {
        type: 'f',
        value: 4
      },
      'textures': {
        type: 'tv',
        value: [texture]
      },
      'spriteSize': {
        type: 'f',
        value: spriteSize
      },
      'devicePixelRatio': {
        type: 'f',
        value: window.devicePixelRatio
      }
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });
    material.extensions.fragDepth = true;
    material.fog = true;
    material.flatShading = true;
    this._material = material;
    const geometry = new THREE.BufferGeometry();
    this._offsets = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
    this._sprites = new THREE.BufferAttribute(new Float32Array(points), 1);
    this._offsets.setUsage(THREE.DynamicDrawUsage);
    this._sprites.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute('position', this._offsets);
    geometry.setAttribute('spriteIndex', this._sprites);
    for (let i = 0; i < points; ++i) {
      this._offsets.setXYZ(i, 0, 0, 0);
      this._sprites.setX(i, -1);
    }
    this._used = 0;
    this._free = [];
    const particles = new THREE.Points(geometry, material);
    particles.sortParticles = true;
    particles.frustumCulled = false;
    this._updateLow = -1;
    this._updateHigh = -1;
    this._knownDPI = window.devicePixelRatio || 1;
    this.add(particles);
  }
  _next() {
    if (this._free.length) {
      return this._free.pop();
    } else if (this._used < this._points) {
      const out = this._used;
      ++this._used;
      return out;
    }
    throw new Error(`can't allocate new ID, no free from ${this._points} ${this._free.length}`);
  }
  _growUpdate(i) {
    if (this._updateLow === -1) {
      this._updateLow = i;
      this._updateHigh = i + 1;
    } else if (i < this._updateLow) {
      this._updateLow = i;
    } else if (i >= this._updateHigh) {
      this._updateHigh = i + 1;
    }
  }
  free(i) {
    if (i >= this._used || i < 0 || this._free.indexOf(i) !== -1) {
      throw new Error(`can't free unused item: ${i}`);
    }
    this._sprites.setX(i, -1);
    this._free.push(i);
    this._growUpdate(i);
  }
  alloc(x, y, sprite) {
    const i = this._next();
    const fromGround = 72;
    this._offsets.setXYZ(i, y, fromGround, -x);
    this._sprites.setX(i, sprite);
    this._growUpdate(i);
    return i;
  }
  update() {
    const updateDPI = window.devicePixelRatio;
    if (this._knownDPI !== updateDPI) {
      this._material.uniforms['devicePixelRatio'].value = updateDPI;
      this._knownDPI = updateDPI;
    }
    if (this._updateLow === -1) {
      return;
    }
    this._offsets.updateRange.offset = this._updateLow * 3;
    this._offsets.updateRange.count = (this._updateHigh - this._updateLow) * 3;
    this._sprites.updateRange.offset = this._updateLow;
    this._sprites.updateRange.count = this._updateHigh - this._updateLow;
    this._updateLow = -1;
    this._updateHigh = -1;
    this._offsets.needsUpdate = true;
    this._sprites.needsUpdate = true;
  }
}
const zero = Object.freeze({
  x: 0,
  y: 0
});
function multVec(vecA, vecB) {
  return {
    x: vecA.x * vecB.x,
    y: vecA.y * vecB.y
  };
}
function dist(vecA, vecB) {
  const dx = vecA.x - vecB.x;
  const dy = vecA.y - vecB.y;
  return Math.sqrt(dx * dx + dy * dy);
}
const lineSegments = 80;
const lineDistance = 5;
class SkiTrail extends THREE.Object3D {
  constructor(start) {
    super();
    this._geometry = new THREE.Geometry();
    for (let i = 0; i < lineSegments; ++i) {
      this._geometry.vertices.push(this._vecFor(start));
    }
    this._last = start;
    this._line = new MeshLine();
    this._line.setGeometry(this._geometry);
    const material = new MeshLineMaterial({
      lineWidth: 0.015,
      color: new THREE.Color(0xcccccc),
      sizeAttenuation: 1
    });
    const mesh = new THREE.Mesh(this._line.geometry, material);
    mesh.frustumCulled = false;
    mesh.position.x = -10;
    this.add(mesh);
    this._topLine = new MeshLine();
    this._topLine.setGeometry(this._geometry);
    const topMaterial = new MeshLineMaterial({
      lineWidth: 0.01,
      color: new THREE.Color(0xffffff),
      sizeAttenuation: 1
    });
    const topMesh = new THREE.Mesh(this._topLine.geometry, topMaterial);
    topMesh.frustumCulled = false;
    topMesh.position.y = 6;
    this.add(topMesh);
    this._widthFunc = this._widthFunc.bind(this);
  }
  _widthFunc(point) {
    const v = Math.sin(point * Math.PI / 2);
    if (point * Math.PI > 2) {
      const vmax = Math.cos(point * Math.PI + 4);
      return Math.min(v, vmax);
    }
    return v;
  }
  push(position) {
    const v = this._geometry.vertices;
    const dist$1 = dist(this._last, position);
    if (dist$1 === 0) {
      return;
    } else if (dist$1 < lineDistance) {
      v[v.length - 1] = this._vecFor(position);
    } else {
      v.push(this._vecFor(position));
      v.shift();
      this._last = {
        x: position.x,
        y: position.y
      };
    }
    this._line.setGeometry(this._geometry, this._widthFunc);
    this._topLine.setGeometry(this._geometry, this._widthFunc);
  }
  _vecFor(p) {
    return new THREE.Vector3(p.y, 16, -p.x);
  }
}
const geometry = new THREE.BufferGeometry();
const normals = new THREE.BufferAttribute(new Float32Array([-1, 0, -0, -1, 0, -0, -1, 0, -0, 0, -0.0, -1, 0, -0.0, -1, 0, -0.0, -1, 1, -0, 0, 1, -0, 0, 1, -0, 0, 0, 0.0, 1, 0, 0.0, 1, 0, 0.0, 1, 0, -1, 0.0, 0, -1, 0.0, 0, -1, 0.0, 0, 1, -0.0, 0, 1, -0.0, 0, 1, -0.0, -1, 0, 0, -0, -0.0, -1, 1, 0, 0, -0, 0.0, 1, 0, -1, 0.0, 0, 1, -0.0]), 3);
const uvs = new THREE.BufferAttribute(new Float32Array([0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0, 0, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0.5, 0, 0, 0.5, 0, 0, 1, 0.5, 0.5, 0.5, 1, 0, 1, 0.5, 0.5, 0.5, 1, 0.5, 0.0, 0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0.5]), 2);
const positions = new THREE.BufferAttribute(new Float32Array([-0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5]), 3);
const indices = new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 18, 1, 3, 19, 4, 6, 20, 7, 9, 21, 10, 12, 22, 13, 15, 23, 16]), 1);
geometry.setAttribute('position', positions);
geometry.setAttribute('uv', uvs);
geometry.setAttribute('normal', normals);
geometry.setIndex(indices);
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
const k = Object.keys(colorCombos);
function randomColorCombo() {
  const choice = ~~(Math.random() * k.length);
  return colorCombos[k[choice]];
}
class Present extends THREE.Object3D {
  constructor() {
    super();
    const material = new THREE.MeshPhongMaterial({
      map: new THREE.Texture(),
      transparent: true
    });
    this._model = new THREE.Mesh(geometry, material);
    this.add(this._model);
    this._model.scale.set(Math.random() * 7 + 12, Math.random() * 7 + 12, Math.random() * 5 + 10);
    const colorCombo = randomColorCombo();
    this._model.material.map.image = generateDropTexture(colorCombo[0], colorCombo[1]);
    this._model.material.map.needsUpdate = true;
    this._model.rotation.y = Math.random() * Math.PI * 2;
    this._time = Math.random() * Math.PI * 2;
    this._dir = Math.random() > 0.5 ? -1 : +1;
    this._pickupAt = 0;
  }
  get collected() {
    return Boolean(this._pickupAt);
  }
  pickup() {
    if (!this._pickupAt) {
      this._pickupAt = this._time;
      return true;
    }
    return false;
  }
  tick(delta) {
    this._time += delta;
    this._model.rotation.y += delta * Math.PI * this._dir / 4;
    this._model.position.y = 24 + Math.sin(this._time) * 4;
    if (this._pickupAt) {
      const scale = 1 - (this._time - this._pickupAt) * 2;
      if (scale <= 0) {
        return false;
      }
      this.scale.set(scale, scale, scale);
    }
    return true;
  }
}
const slerpRatio = 4;
const accelerationBar = 0.5;
const maximumSpeed = 0.66;
const initialAngle = Math.PI / 2;
class Character {
  constructor() {
    this._speed = 0;
    this._angle = initialAngle;
    this._line = 0;
  }
  get speed() {
    return this._speed;
  }
  get speedRatio() {
    return this._speed / maximumSpeed;
  }
  get lineWidth() {
    return this._line;
  }
  get angle() {
    return this._angle;
  }
  get angleVec() {
    return {
      x: Math.sin(this._angle),
      y: Math.cos(this._angle)
    };
  }
  set angle(v) {
    this._angle = v;
  }
  crash() {
    this._speed = 0;
    this._angle = math.sign(this._angle) * initialAngle;
  }
  reset() {
    this._speed = 0;
    this._angle = initialAngle;
    this._line = 0;
  }
  tick(delta, targetAngle) {
    if (Number.isFinite(targetAngle)) {
      targetAngle = Math.min(Math.max(-Math.PI / 2, targetAngle), Math.PI / 2);
      const by = slerpRatio * delta * (maximumSpeed * 2 - this._speed);
      this._angle = this._angle + by * (targetAngle - this._angle);
      this._line = Math.abs(targetAngle - this._angle);
    } else {
      this._line = 0;
    }
    const angle = this.angle;
    let accel = Math.cos(angle) - accelerationBar;
    if (accel < 0) {
      accel = Math.tan(accel);
    }
    this._speed += accel * delta;
    if (this._speed < 0) {
      this._speed = 0;
    } else if (this._speed > maximumSpeed) {
      this._speed = maximumSpeed;
    }
    return {
      x: this._speed * Math.sin(angle) * delta,
      y: this._speed * Math.cos(angle) * delta
    };
  }
}
const cameraOffset = Object.freeze(new THREE.Vector3(800, 800, 0));
const startAtY = 800;
const treeStartAtY = 1000;
const skiierSize = 48;
const crashThreshold = 12;
const crashDuration = 2;
const distanceScoreRatio = 100;
const presentScore = 25;
const unitScale = {
  x: 400,
  y: -600
};
class GameThree {
  constructor(canvas, assetBaseUrl) {
    this._canvas = canvas;
    const opts = {
      canvas,
      premultipliedAlpha: false
    };
    this._renderer = new THREE.WebGLRenderer(opts);
    this._renderer.autoClear = true;
    this._renderer.setClearColor(0xf5f2e2);
    this._renderer.gammaOutput = true;
    {
      this._camera = new THREE.OrthographicCamera(1, 1, 1, 1, 1, 2000);
    }
    this._width = 0;
    this._height = 0;
    this._skiier = null;
    this._decorator = null;
    this._p = null;
    this._character = new Character();
    this._hitTreeAt = undefined;
    this._snowball = null;
    this._presentsFound = 0;
    this._scene = new THREE.Scene();
    this._cameraFocus(10, startAtY);
    const scene = this._scene;
    const spot = new THREE.SpotLight(0xffffff);
    spot.power = Math.PI * 2;
    this._spot = spot;
    scene.add(this._spot);
    scene.add(new THREE.AmbientLight(0xaaaaaa));
    gltf('elf-ski', assetBaseUrl).then(gltf => this._prepareModel(gltf)).then(object => {
      this._scene.add(object);
      object.position.set(startAtY, skiierSize / 2, 0);
      object.lookAt(startAtY, skiierSize / 2, -100);
      this._skiier = object;
      this._spottarget = object;
      this._internalTick();
    });
    texture('tiles', assetBaseUrl).then(texture => {
      texture.flipY = false;
      const p = new Points(10000, texture);
      scene.add(p);
      this._p = p;
      this._decorator = new SceneDecorator(this._p);
    });
    this._trail = new SkiTrail({
      x: 0,
      y: startAtY
    });
    scene.add(this._trail);
  }
  measure() {
    this._canvas.style.width = null;
    this._canvas.style.height = null;
    const w = this._canvas.offsetWidth;
    const h = this._canvas.offsetHeight;
    const c = this._camera;
    if (c.isOrthographicCamera) {
      c.aspect = w / h;
      c.left = -w / 2;
      c.right = w / 2;
      c.top = h / 2;
      c.bottom = -h / 2;
      c.updateProjectionMatrix();
      c.updateMatrixWorld();
    }
    this._width = w;
    this._height = h;
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setSize(w, h, true);
    this._internalTick();
  }
  _cameraFocus(x, y) {
    y += this._canvas.offsetHeight / 4;
    this._camera.position.set(y, 0, -x);
    this._camera.position.add(cameraOffset);
    this._camera.lookAt(y, 0, -x);
  }
  get presentsFound() {
    return this._presentsFound;
  }
  render() {
    if (this._p && this._hitTreeAt === undefined) {
      this._p.update();
      const p = this.playerAt;
      const viewport = {
        from: p.y - this._height / 2 * 1,
        at: p.y + this._height / 2 * 2.5,
        l: p.x - this._width / 2 * 2.5,
        r: p.x + this._width / 2 * 2.5
      };
      this._decorator.update(viewport);
    }
    this._renderer.render(this._scene, this._camera);
  }
  dispose() {}
  tick(delta, targetAngle, ended) {
    if (this._decorator) {
      this._decorator.tick(delta);
    }
    if (!this._skiier) {
      return false;
    } else if (this._hitTreeAt !== undefined) {
      if (this._hitTreeAt < crashDuration) {
        this._hitTreeAt = Math.min(crashDuration, this._hitTreeAt + delta);
        const scale = this._hitTreeAt / crashDuration;
        this._snowball.scale.set(scale, scale, scale);
        const change = this._character.tick(delta * (1 - scale), null);
        const cv = multVec(change, unitScale);
        const p = this._skiier.position;
        this._skiier.position.set(p.x - cv.y, skiierSize / 2, p.z - cv.x);
        this._trail.push({
          x: -p.z,
          y: p.x
        });
        this._skiier.rotateX(delta * -Math.random());
        this._skiier.rotateY(delta * (Math.random() - 0.5));
        this._skiier.rotateZ(delta * (Math.random() - 0.5));
      }
      return true;
    }
    const change = ended ? {
      x: 0,
      y: 0
    } : this._character.tick(delta, targetAngle);
    const cv = multVec(change, unitScale);
    if (cv.x || cv.y) {
      this._internalTick(cv);
    }
  }
  _internalTick(cv = zero) {
    if (!this._skiier) {
      return;
    }
    const p = this._skiier.position;
    this._skiier.position.set(p.x - cv.y, skiierSize / 2, p.z - cv.x);
    this._trail.push({
      x: -p.z,
      y: p.x
    });
    const angle = this._character.angleVec;
    const lookAt = new THREE.Vector3(p.x + angle.y, skiierSize / 2, p.z - angle.x);
    this._skiier.lookAt(lookAt.x, lookAt.y, lookAt.z);
    this._spot.position.set(p.x + angle.y * 10, skiierSize * 2, p.z - angle.x * 10);
    this._cameraFocus(-p.z + angle.x * 10, p.x + angle.y * 50);
    const playerAt = this.playerAt;
    if (this._decorator && this._character.speedRatio > 0) {
      const pickups = this._decorator.presentsNear(playerAt);
      if (pickups.length) {
        pickups.forEach(pickup => pickup.pickup());
        this._presentsFound += pickups.length;
      }
    }
    if (this._decorator && this._character.speedRatio > 0.5) {
      const nearby = this._decorator.treesNear(playerAt);
      const hit = nearby.some(at => {
        const dist$1 = dist(at, playerAt);
        return dist$1 < crashThreshold;
      });
      if (hit) {
        const size = 5;
        const geometry = new THREE.SphereGeometry(size, 8, 8);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.scale.set(0.001, 0.001, 0.001);
        sphere.position.y = (4 - size) / 2;
        this._skiier.add(sphere);
        this._snowball = sphere;
        this._hitTreeAt = 0;
        return true;
      }
    }
    return false;
  }
  get playerAt() {
    if (!this._skiier) {
      return zero;
    }
    const p = this._skiier.position;
    return {
      x: -p.z,
      y: p.x
    };
  }
  get score() {
    const p = this.playerAt;
    const scoreFrom = startAtY + 50;
    const rawScore = Math.floor((p.y - scoreFrom) / distanceScoreRatio) + this._presentsFound * presentScore;
    return Math.max(0, rawScore);
  }
  get angle() {
    return this._character.angle;
  }
  get speed() {
    return this._character.speed;
  }
  _prepareModel(gltf) {
    const object = gltf.scene;
    const elf = object.children[0];
    const material = elf.material.clone();
    material.map.clone();
    material.transparent = true;
    elf.scale.multiplyScalar(5.0);
    return elf;
  }
}
class SceneDecorator {
  constructor(points, dim = 96) {
    this._points = points;
    const ox = Math.random() * 1000 - 500;
    const oy = Math.random() * 1000 - 500;
    this._noise = (x, y) => {
      return noise(x + ox, y + oy);
    };
    this._dim = dim;
    this._depth = 0;
    this._presents = [];
    this._presentCellY = new WeakMap();
    this._ranges = [];
  }
  update(args) {
    const {
      from,
      at,
      l,
      r
    } = args;
    this._depth;
    const high = Math.ceil(at / this._dim);
    for (; this._depth < high; ++this._depth) {
      this._ranges.push({
        l: 0,
        r: 0,
        alloc: []
      });
    }
    const low = Math.floor(from / this._dim);
    let freedAny = false;
    while (this._ranges.length > high - low) {
      const last = this._ranges.shift();
      last.alloc.forEach(id => this._points.free(id));
      freedAny = true;
    }
    if (freedAny) {
      this._presents = this._presents.filter(present => {
        const cellY = this._presentCellY.get(present) || -1;
        if (cellY < low) {
          this._points.remove(present);
          return false;
        }
        return true;
      });
    }
    const lc = Math.floor(l / this._dim);
    const rc = Math.ceil(r / this._dim);
    const offsetLow = this._depth - this._ranges.length;
    this._ranges.forEach((range, off) => {
      while (range.l > lc) {
        this._decorate(--range.l, off + offsetLow, range.alloc);
      }
      while (range.r <= rc) {
        this._decorate(range.r++, off + offsetLow, range.alloc);
      }
    });
  }
  _treeType(x, y) {
    const treeCount = 6;
    const type = ~~((0.5 + this._noise(x / 1.00124, y / 0.1241)) * treeCount);
    if (type < 0) {
      return 0;
    } else if (type >= treeCount) {
      return treeCount - 1;
    } else {
      return type;
    }
  }
  treesNear(at) {
    const x = Math.round(at.x / this._dim);
    const y = Math.round(at.y / this._dim);
    const out = [];
    for (let i = -1; i < 2; ++i) {
      for (let j = -1; j < 2; ++j) {
        const at = this._treeForCell(x + i, y + j);
        at && out.push(at);
      }
    }
    return out;
  }
  presentsNear(at) {
    return this._presents.filter(present => {
      if (present.collected) {
        return false;
      }
      const p = {
        x: -present.position.z,
        y: present.position.x
      };
      const dist$1 = dist(at, p);
      if (dist$1 < crashThreshold * 2) {
        return true;
      }
      return false;
    });
  }
  _treeForCell(x, y) {
    const ay = y;
    y -= Math.floor(treeStartAtY / this._dim);
    if (y < 0) {
      return null;
    }
    let v = this._noise(x / 3.27, y / 8.742);
    if (y < 5) {
      v -= (5 - y) * 0.1;
    }
    if (v <= -y * 0.001 && v > -0.5) {
      return null;
    }
    const offX = 2 * this._noise(x / 4.1222, y / 8.2421);
    const offY = 2 * this._noise(x / 1.21, y / 2.31);
    return {
      x: this._dim * (x + 0.5 + offX),
      y: this._dim * (ay + 0.5 + offY)
    };
  }
  _presentForCell(x, y) {
    if (y < Math.floor(treeStartAtY / this._dim) * 2) {
      return null;
    }
    const v = this._noise(x / 12.24, y / 13.531);
    if (v < 0.0 || v > 0.12) {
      return null;
    }
    const offX = 2 * this._noise(x / 3.1051, y / 3.951);
    const offY = 2 * this._noise(x / 6.71, y / 152.1535);
    return {
      x: this._dim * (x + 0.5 + offX),
      y: this._dim * (y + 0.5 + offY)
    };
  }
  tick(delta) {
    this._prensets = this._presents.filter(present => {
      if (present.tick(delta)) {
        return true;
      }
      this._points.remove(present);
      return false;
    });
  }
  _decorate(x, y, alloc) {
    const at = this._treeForCell(x, y);
    if (at) {
      const type = this._treeType(x, y);
      const id = this._points.alloc(at.x, at.y, type);
      alloc.push(id);
    }
    const presentAt = this._presentForCell(x, y);
    if (presentAt) {
      const p = new Present();
      p.position.set(presentAt.y, 0, -presentAt.x);
      this._points.add(p);
      this._presents.push(p);
      this._presentCellY.set(p, y);
    }
  }
}
sceneApi.preload.images('img/tiles.png');
sceneApi.preload.sounds('elfski_load_sounds');
sceneApi.preload.sounds('glider');
sceneApi.config({
  sound: ['music_start_ingame']
});
class LocalGame {
  constructor(canvas) {
    this._canvas = canvas;
    this._skiingNoises = false;
    this._tutorialDismissed = false;
    sceneApi.tutorialQueue('elfski.mp4');
    this.restart();
  }
  set skiingNoises(v) {
    if (v !== this._skiingNoises) {
      this._skiingNoises = v;
      sceneApi.play('elfski_loop_' + (v ? 'start' : 'stop'));
    }
  }
  render() {
    this._game.render();
  }
  dismissTutorial() {
    if (!this._tutorialDismissed) {
      this._tutorialDismissed = true;
      sceneApi.tutorialDismiss('elfski.mp4');
    }
  }
  onResize({
    width,
    height
  }) {
    this._canvas.width = width;
    this._canvas.height = height;
    this._game.measure();
  }
  onPointerDown(ev) {
    if (ev.target && ev.target.setPointerCapture) {
      ev.target.setPointerCapture(ev.pointerId);
    }
    this.onPointerMove(ev, true);
  }
  onPointerMove(ev, force) {
    if (!force && ev.pressure !== undefined && ev.pressure < 0.5) {
      return;
    }
    if (ev && 'buttons' in ev && !ev.buttons) {
      return;
    }
    this._pointer = {
      x: ev.offsetX - ev.target.offsetWidth / 2,
      y: ev.offsetY - ev.target.offsetHeight / 3
    };
    this.dismissTutorial();
  }
  onPointerUp(ev) {
    this._pointer = null;
  }
  onKeyDown(ev) {
    this._trackedKeys[ev.key] = true;
    this.dismissTutorial();
  }
  onKeyUp(ev) {
    this._trackedKeys[ev.key] = false;
  }
  get score() {
    return this._game.score;
  }
  targetAngle() {
    if (this._pointer) {
      return Math.atan2(this._pointer.x, this._pointer.y);
    }
    const left = this._trackedKeys['ArrowLeft'] || false;
    const right = this._trackedKeys['ArrowRight'] || false;
    const down = this._trackedKeys['ArrowDown'] || false;
    if (left || right || down) {
      return (left * (-Math.PI / 2) + right * Math.PI / 2) / (left + right + down);
    }
    return undefined;
  }
  tick(now) {
    const delta = (now - this._lastFrameAt) / 1000;
    this._lastFrameAt = now;
    if (!this._gameStartAt) {
      this._gameStartAt = now;
    }
    const crashed = this._game.tick(delta, this.targetAngle(), Boolean(this._gameEndAt));
    this.skiingNoises = Boolean(this._game.speed) && !this._gameEndAt;
    if (!crashed) {
      if (this._gameStartAt && !this._gameEndAt) {
        sceneApi.score({
          score: this.score,
          time: (performance.now() - this._gameStartAt) / 1000
        });
        this._lastValidScore = this.score;
      }
      const presentsFound = this._game.presentsFound;
      if (this._lastPresentsFound !== presentsFound) {
        console.info('presents found', presentsFound);
        sceneApi.play('generic_score');
        this._lastPresentsFound = presentsFound;
      }
      return;
    }
    if (!this._playerCrashedAt) {
      sceneApi.play('elfski_crash');
      this._playerCrashedAt = now;
    }
    const GAMEOVER_AFTER_SECONDS = 3;
    if (!this._gameEndAt && now - this._playerCrashedAt > GAMEOVER_AFTER_SECONDS * 1000) {
      this._gameEndAt = now;
      sceneApi.gameover({
        score: this._lastValidScore
      });
      sceneApi.play('music_ingame_gameover');
    }
  }
  restart() {
    this._lastFrameAt = performance.now();
    this._gameStartAt = 0.0;
    this._gameEndAt = 0.0;
    this._playerCrashedAt = 0.0;
    this._lastValidScore = 0;
    this._lastPresentsFound = 0;
    this.skiingNoises = false;
    this._trackedKeys = {};
    this._game && this._game.dispose();
    this._game = new GameThree(this._canvas, './');
    this._pointer = null;
    sceneApi.score({});
    sceneApi.play('music_start_ingame');
  }
}
const lg = new LocalGame(document.getElementById('gl3d'));
sceneApi.addEventListener('restart', ev => {
  lg.restart();
  window.dispatchEvent(new Event('resize'));
});
sceneApi.ready(async () => {
  const mountain = document.getElementById('mountain');
  const tickInterval = 1000 / 60;
  window.setInterval(() => lg.tick(performance.now()), tickInterval);
  (function draw() {
    window.requestAnimationFrame(draw);
    lg.render();
  })();
  window.addEventListener('resize', ev => {
    const width = mountain.offsetWidth;
    const height = mountain.offsetHeight;
    lg.onResize({
      width,
      height
    });
  });
  window.dispatchEvent(new Event('resize'));
  if ('onpointerdown' in document.body) {
    mountain.addEventListener('pointerdown', ev => lg.onPointerDown(ev));
    mountain.addEventListener('pointermove', ev => lg.onPointerMove(ev));
    mountain.addEventListener('pointerup', ev => lg.onPointerUp(ev));
  } else {
    mountain.addEventListener('mousedown', ev => lg.onPointerMove(ev, true));
    mountain.addEventListener('mousemove', ev => {
      ev.which && lg.onPointerMove(ev);
    });
    mountain.addEventListener('mouseup', ev => lg.onPointerUp(ev));
    const touchMove = ev => {
      ev.preventDefault();
      const t = ev.touches[0];
      const fakeEvent = {
        offsetX: t.clientX,
        offsetY: t.clientY,
        target: mountain
      };
      lg.onPointerMove(fakeEvent, true);
    };
    mountain.addEventListener('touchdown', touchMove);
    mountain.addEventListener('touchmove', touchMove);
    mountain.addEventListener('touchup', ev => lg.onPointerUp(ev));
  }
  document.addEventListener('keydown', ev => lg.onKeyDown(ev));
  document.addEventListener('keyup', ev => lg.onKeyUp(ev));
});