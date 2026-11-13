;(function(){function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) { n[e] = r[e]; } return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var config = {
  "staticScope": "/ivanguys-web/nochepolar/st/v2026/",
  "version": "v2026",
  "baseurl": "/ivanguys-web/nochepolar/st/"
};
function checkFallback() {
  try {
    if (!('ShadowRoot' in window)) {
      throw 'Shadow DOM';
    }
    if (!('customElements' in window)) {
      throw 'Custom Elements';
    }
    if (!CSS.supports("(--foo: red)")) {
      throw 'CSS Variables';
    }
    if (!('noModule' in HTMLScriptElement.prototype)) {
      throw '<script type="module">';
    }
    if (!('URLSearchParams' in window)) {
      throw 'URLSearchParams';
    }
    if (!('Symbol' in window)) {
      throw 'Symbol';
    }
    if (!('includes' in String.prototype && 'startsWith' in String.prototype && 'includes' in Array.prototype && 'from' in Array)) {
      throw 'arraylike helpers';
    }
    if (!('append' in document.head)) {
      throw 'append';
    }
  } catch (e) {
    console.warn('loading fallback, failure:', e);
    return true;
  }
  return false;
}
function script(src, type) {
  if (type === void 0) {
    type = null;
  }
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    if (type) {
      script.type = type;
    }
    script.setAttribute('crossorigin', 'anonymous');
    script.onload = function () {
      return resolve();
    };
    script.onerror = reject;
    document.head.append(script);
  });
}
function supportScripts(scripts, callback) {
  var next = function next() {
    var src = scripts.shift();
    if (src === undefined) {
      callback();
      return;
    }
    var script = document.createElement('script');
    script.src = src;
    script.setAttribute('crossorigin', 'anonymous');
    script.onload = next;
    script.onerror = function () {
      console.warn('cannot load', src);
      next();
    };
    document.head.appendChild(script);
  };
  next();
}
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deepCopy(value) {
  return deepExtend(undefined, value);
}
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === undefined) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (var prop in source) {
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key) {
  return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = function () {
  function Deferred() {
    var _this = this;
    this.reject = function () {};
    this.resolve = function () {};
    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  Deferred.prototype.wrapCallback = function (callback) {
    var _this = this;
    return function (error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }
      if (typeof callback === 'function') {
        _this.promise.catch(function () {});
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };
  return Deferred;
}();
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
function isBrowser() {
  return typeof self === 'object' && self.self === self;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
var FirebaseError = function (_super) {
  __extends(FirebaseError, _super);
  function FirebaseError(code, message, customData) {
    var _this = _super.call(this, message) || this;
    _this.code = code;
    _this.customData = customData;
    _this.name = ERROR_NAME;
    Object.setPrototypeOf(_this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }
    return _this;
  }
  return FirebaseError;
}(Error);
var ErrorFactory = function () {
  function ErrorFactory(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  ErrorFactory.prototype.create = function (code) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }
    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error';
    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  };
  return ErrorFactory;
}();
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
var ObserverProxy = function () {
  function ObserverProxy(executor, onNoObservers) {
    var _this = this;
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(function () {
      executor(_this);
    }).catch(function (e) {
      _this.error(e);
    });
  }
  ObserverProxy.prototype.next = function (value) {
    this.forEachObserver(function (observer) {
      observer.next(value);
    });
  };
  ObserverProxy.prototype.error = function (error) {
    this.forEachObserver(function (observer) {
      observer.error(error);
    });
    this.close(error);
  };
  ObserverProxy.prototype.complete = function () {
    this.forEachObserver(function (observer) {
      observer.complete();
    });
    this.close();
  };
  ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
    var _this = this;
    var observer;
    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    }
    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error,
        complete: complete
      };
    }
    if (observer.next === undefined) {
      observer.next = noop;
    }
    if (observer.error === undefined) {
      observer.error = noop;
    }
    if (observer.complete === undefined) {
      observer.complete = noop;
    }
    var unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(function () {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {}
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  };
  ObserverProxy.prototype.unsubscribeOne = function (i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  };
  ObserverProxy.prototype.forEachObserver = function (fn) {
    if (this.finalized) {
      return;
    }
    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  };
  ObserverProxy.prototype.sendOne = function (i, fn) {
    var _this = this;
    this.task.then(function () {
      if (_this.observers !== undefined && _this.observers[i] !== undefined) {
        try {
          fn(_this.observers[i]);
        } catch (e) {
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  };
  ObserverProxy.prototype.close = function (err) {
    var _this = this;
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== undefined) {
      this.finalError = err;
    }
    this.task.then(function () {
      _this.observers = undefined;
      _this.onNoObservers = undefined;
    });
  };
  return ObserverProxy;
}();
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
    var method = methods_1[_i];
    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }
  return false;
}
function noop() {}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
var DEFAULT_BACKOFF_FACTOR = 2;
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000;
var RANDOM_FACTOR = 0.5;
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }
  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  }
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  var randomWait = Math.round(RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
var Component = function () {
  function Component(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  Component.prototype.setInstantiationMode = function (mode) {
    this.instantiationMode = mode;
    return this;
  };
  Component.prototype.setMultipleInstances = function (multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };
  Component.prototype.setServiceProps = function (props) {
    this.serviceProps = props;
    return this;
  };
  Component.prototype.setInstanceCreatedCallback = function (callback) {
    this.onInstanceCreated = callback;
    return this;
  };
  return Component;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Provider = function () {
  function Provider(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  Provider.prototype.get = function (identifier) {
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {}
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };
  Provider.prototype.getImmediate = function (options) {
    var _a;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error("Service " + this.name + " is not available");
      }
    }
  };
  Provider.prototype.getComponent = function () {
    return this.component;
  };
  Provider.prototype.setComponent = function (component) {
    var e_1, _a;
    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }
    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({
          instanceIdentifier: DEFAULT_ENTRY_NAME$1
        });
      } catch (e) {}
    }
    try {
      for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2),
          instanceIdentifier = _d[0],
          instanceDeferred = _d[1];
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {}
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  Provider.prototype.clearInstance = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  };
  Provider.prototype.delete = function () {
    return __awaiter(this, void 0, void 0, function () {
      var services;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4, Promise.all(__spreadArray(__spreadArray([], __read(services.filter(function (service) {
              return 'INTERNAL' in service;
            }).map(function (service) {
              return service.INTERNAL.delete();
            }))), __read(services.filter(function (service) {
              return '_delete' in service;
            }).map(function (service) {
              return service._delete();
            }))))];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  Provider.prototype.isComponentSet = function () {
    return this.component != null;
  };
  Provider.prototype.isInitialized = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    return this.instances.has(identifier);
  };
  Provider.prototype.getOptions = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    return this.instancesOptions.get(identifier) || {};
  };
  Provider.prototype.initialize = function (opts) {
    var e_2, _a;
    if (opts === void 0) {
      opts = {};
    }
    var _b = opts.options,
      options = _b === void 0 ? {} : _b;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
    }
    if (!this.isComponentSet()) {
      throw Error("Component " + this.name + " has not been registered yet");
    }
    var instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options: options
    });
    try {
      for (var _c = __values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2),
          instanceIdentifier = _e[0],
          instanceDeferred = _e[1];
        var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return instance;
  };
  Provider.prototype.onInit = function (callback, identifier) {
    var _a;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    var existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return function () {
      existingCallbacks.delete(callback);
    };
  };
  Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
    var e_3, _a;
    var callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    try {
      for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
        var callback = callbacks_1_1.value;
        try {
          callback(instance, identifier);
        } catch (_b) {}
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  Provider.prototype.getOrInitializeService = function (_a) {
    var instanceIdentifier = _a.instanceIdentifier,
      _b = _a.options,
      options = _b === void 0 ? {} : _b;
    var instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options: options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_c) {}
      }
    }
    return instance || null;
  };
  Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
    } else {
      return identifier;
    }
  };
  Provider.prototype.shouldAutoInitialize = function () {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  };
  return Provider;
}();
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? undefined : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ComponentContainer = function () {
  function ComponentContainer(name) {
    this.name = name;
    this.providers = new Map();
  }
  ComponentContainer.prototype.addComponent = function (component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }
    provider.setComponent(component);
  };
  ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  };
  ComponentContainer.prototype.getProvider = function (name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    }
    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  };
  ComponentContainer.prototype.getProviders = function () {
    return Array.from(this.providers.values());
  };
  return ComponentContainer;
}();
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }
  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }
  return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$3;
var instances = [];
var LogLevel;
(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = (_a$3 = {}, _a$3[LogLevel.DEBUG] = 'log', _a$3[LogLevel.VERBOSE] = 'log', _a$3[LogLevel.INFO] = 'info', _a$3[LogLevel.WARN] = 'warn', _a$3[LogLevel.ERROR] = 'error', _a$3);
var defaultLogHandler = function defaultLogHandler(instance, logType) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (logType < instance.logLevel) {
    return;
  }
  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];
  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};
var Logger = function () {
  function Logger(name) {
    this.name = name;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function get() {
      return this._logLevel;
    },
    set: function set(val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
      }
      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger.prototype.setLogLevel = function (val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };
  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function get() {
      return this._logHandler;
    },
    set: function set(val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }
      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger.prototype.debug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };
  Logger.prototype.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };
  Logger.prototype.info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };
  Logger.prototype.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };
  Logger.prototype.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };
  return Logger;
}();
function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _loop_1 = function _loop_1(instance) {
    var customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };
  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];
    _loop_1(instance);
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1$1;
var ERRORS = (_a$1$1 = {}, _a$1$1["no-app"] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a$1$1["bad-app-name"] = "Illegal App name: '{$appName}", _a$1$1["duplicate-app"] = "Firebase App named '{$appName}' already exists", _a$1$1["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a$1$1["invalid-app-argument"] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a$1$1["invalid-log-argument"] = 'First argument to `onLog` must be null or a function.', _a$1$1);
var ERROR_FACTORY$2 = new ErrorFactory('app', 'Firebase', ERRORS);
var name$c = "@firebase/app";
var version$1$1 = "0.6.30";
var name$b = "@firebase/analytics";
var name$a = "@firebase/app-check";
var name$9 = "@firebase/auth";
var name$8 = "@firebase/database";
var name$7 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$5 = "@firebase/messaging";
var name$4 = "@firebase/performance";
var name$3 = "@firebase/remote-config";
var name$2$1 = "@firebase/storage";
var name$1$1 = "@firebase/firestore";
var name$d = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$2;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$2 = {}, _a$2[name$c] = 'fire-core', _a$2[name$b] = 'fire-analytics', _a$2[name$a] = 'fire-app-check', _a$2[name$9] = 'fire-auth', _a$2[name$8] = 'fire-rtdb', _a$2[name$7] = 'fire-fn', _a$2[name$6] = 'fire-iid', _a$2[name$5] = 'fire-fcm', _a$2[name$4] = 'fire-perf', _a$2[name$3] = 'fire-rc', _a$2[name$2$1] = 'fire-gcs', _a$2[name$1$1] = 'fire-fst', _a$2['fire-js'] = 'fire-js', _a$2[name$d] = 'fire-js-all', _a$2);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = function () {
  function FirebaseAppImpl(options, config, firebase_) {
    var _this = this;
    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = deepCopy(options);
    this.container = new ComponentContainer(config.name);
    this._addComponent(new Component('app', function () {
      return _this;
    }, "PUBLIC"));
    this.firebase_.INTERNAL.components.forEach(function (component) {
      return _this._addComponent(component);
    });
  }
  Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
    get: function get() {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function set(val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "name", {
    get: function get() {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "options", {
    get: function get() {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });
  FirebaseAppImpl.prototype.delete = function () {
    var _this = this;
    return new Promise(function (resolve) {
      _this.checkDestroyed_();
      resolve();
    }).then(function () {
      _this.firebase_.INTERNAL.removeApp(_this.name_);
      return Promise.all(_this.container.getProviders().map(function (provider) {
        return provider.delete();
      }));
    }).then(function () {
      _this.isDeleted_ = true;
    });
  };
  FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
    var _a;
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.checkDestroyed_();
    var provider = this.container.getProvider(name);
    if (!provider.isInitialized() && ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT") {
      provider.initialize();
    }
    return provider.getImmediate({
      identifier: instanceIdentifier
    });
  };
  FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.container.getProvider(name).clearInstance(instanceIdentifier);
  };
  FirebaseAppImpl.prototype._addComponent = function (component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };
  FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
    this.container.addOrOverwriteComponent(component);
  };
  FirebaseAppImpl.prototype.toJSON = function () {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  };
  FirebaseAppImpl.prototype.checkDestroyed_ = function () {
    if (this.isDeleted_) {
      throw ERROR_FACTORY$2.create("app-deleted", {
        appName: this.name_
      });
    }
  };
  return FirebaseAppImpl;
}();
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
var version$3 = "8.10.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {};
  var components = new Map();
  var namespace = {
    __esModule: true,
    initializeApp: initializeApp,
    app: app,
    registerVersion: registerVersion,
    setLogLevel: setLogLevel,
    onLog: onLog,
    apps: null,
    SDK_VERSION: version$3,
    INTERNAL: {
      registerComponent: registerComponent,
      removeApp: removeApp,
      components: components,
      useAsService: useAsService
    }
  };
  namespace['default'] = namespace;
  Object.defineProperty(namespace, 'apps', {
    get: getApps
  });
  function removeApp(name) {
    delete apps[name];
  }
  function app(name) {
    name = name || DEFAULT_ENTRY_NAME;
    if (!contains(apps, name)) {
      throw ERROR_FACTORY$2.create("no-app", {
        appName: name
      });
    }
    return apps[name];
  }
  app['App'] = firebaseAppImpl;
  function initializeApp(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }
    if (typeof rawConfig !== 'object' || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = {
        name: name_1
      };
    }
    var config = rawConfig;
    if (config.name === undefined) {
      config.name = DEFAULT_ENTRY_NAME;
    }
    var name = config.name;
    if (typeof name !== 'string' || !name) {
      throw ERROR_FACTORY$2.create("bad-app-name", {
        appName: String(name)
      });
    }
    if (contains(apps, name)) {
      throw ERROR_FACTORY$2.create("duplicate-app", {
        appName: name
      });
    }
    var app = new firebaseAppImpl(options, config, namespace);
    apps[name] = app;
    return app;
  }
  function getApps() {
    return Object.keys(apps).map(function (name) {
      return apps[name];
    });
  }
  function registerComponent(component) {
    var componentName = component.name;
    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC" ? namespace[componentName] : null;
    }
    components.set(componentName, component);
    if (component.type === "PUBLIC") {
      var serviceNamespace = function serviceNamespace(appArg) {
        if (appArg === void 0) {
          appArg = app();
        }
        if (typeof appArg[componentName] !== 'function') {
          throw ERROR_FACTORY$2.create("invalid-app-argument", {
            appName: componentName
          });
        }
        return appArg[componentName]();
      };
      if (component.serviceProps !== undefined) {
        deepExtend(serviceNamespace, component.serviceProps);
      }
      namespace[componentName] = serviceNamespace;
      firebaseAppImpl.prototype[componentName] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }
    for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
      var appName = _a[_i];
      apps[appName]._addComponent(component);
    }
    return component.type === "PUBLIC" ? namespace[componentName] : null;
  }
  function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += "-" + variant;
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];
      if (libraryMismatch) {
        warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
      }
      if (libraryMismatch && versionMismatch) {
        warning.push('and');
      }
      if (versionMismatch) {
        warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
      }
      logger.warn(warning.join(' '));
      return;
    }
    registerComponent(new Component(library + "-version", function () {
      return {
        library: library,
        version: version
      };
    }, "VERSION"));
  }
  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
      throw ERROR_FACTORY$2.create("invalid-log-argument");
    }
    setUserLogHandler(logCallback, options);
  }
  function useAsService(app, name) {
    if (name === 'serverAuth') {
      return null;
    }
    var useService = name;
    return useService;
  }
  return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = _assign(_assign({}, namespace.INTERNAL), {
    createFirebaseNamespace: createFirebaseNamespace,
    extendNamespace: extendNamespace,
    createSubscribe: createSubscribe,
    ErrorFactory: ErrorFactory,
    deepExtend: deepExtend
  });
  function extendNamespace(props) {
    deepExtend(namespace, props);
  }
  return namespace;
}
var firebase$1 = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = function () {
  function PlatformLoggerService(container) {
    this.container = container;
  }
  PlatformLoggerService.prototype.getPlatformInfoString = function () {
    var providers = this.container.getProviders();
    return providers.map(function (provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function (logString) {
      return logString;
    }).join(' ');
  };
  return PlatformLoggerService;
}();
function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
  firebase.INTERNAL.registerComponent(new Component('platform-logger', function (container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"));
  firebase.registerVersion(name$c, version$1$1, variant);
  firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (isBrowser() && self.firebase !== undefined) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
  var sdkVersion = self.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}
var initializeApp = firebase$1.initializeApp;
firebase$1.initializeApp = function () {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (isNode()) {
    logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
  }
  return initializeApp.apply(undefined, args);
};
var firebase = firebase$1;
registerCoreComponents(firebase);
var name$2 = "firebase";
var version$2 = "8.10.1";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name$2, version$2, 'app');
firebase.SDK_VERSION = version$2;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var idb = {
  exports: {}
};
(function (module, exports) {
  (function (global, factory) {
    factory(exports);
  })(commonjsGlobal, function (exports) {
    function toArray(arr) {
      return Array.prototype.slice.call(arr);
    }
    function promisifyRequest(request) {
      return new Promise(function (resolve, reject) {
        request.onsuccess = function () {
          resolve(request.result);
        };
        request.onerror = function () {
          reject(request.error);
        };
      });
    }
    function promisifyRequestCall(obj, method, args) {
      var request;
      var p = new Promise(function (resolve, reject) {
        request = obj[method].apply(obj, args);
        promisifyRequest(request).then(resolve, reject);
      });
      p.request = request;
      return p;
    }
    function promisifyCursorRequestCall(obj, method, args) {
      var p = promisifyRequestCall(obj, method, args);
      return p.then(function (value) {
        if (!value) return;
        return new Cursor(value, p.request);
      });
    }
    function proxyProperties(ProxyClass, targetProp, properties) {
      properties.forEach(function (prop) {
        Object.defineProperty(ProxyClass.prototype, prop, {
          get: function get() {
            return this[targetProp][prop];
          },
          set: function set(val) {
            this[targetProp][prop] = val;
          }
        });
      });
    }
    function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
      properties.forEach(function (prop) {
        if (!(prop in Constructor.prototype)) return;
        ProxyClass.prototype[prop] = function () {
          return promisifyRequestCall(this[targetProp], prop, arguments);
        };
      });
    }
    function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
      properties.forEach(function (prop) {
        if (!(prop in Constructor.prototype)) return;
        ProxyClass.prototype[prop] = function () {
          return this[targetProp][prop].apply(this[targetProp], arguments);
        };
      });
    }
    function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
      properties.forEach(function (prop) {
        if (!(prop in Constructor.prototype)) return;
        ProxyClass.prototype[prop] = function () {
          return promisifyCursorRequestCall(this[targetProp], prop, arguments);
        };
      });
    }
    function Index(index) {
      this._index = index;
    }
    proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
    proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
    proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);
    function Cursor(cursor, request) {
      this._cursor = cursor;
      this._request = request;
    }
    proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
    proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']);
    ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
      if (!(methodName in IDBCursor.prototype)) return;
      Cursor.prototype[methodName] = function () {
        var cursor = this;
        var args = arguments;
        return Promise.resolve().then(function () {
          cursor._cursor[methodName].apply(cursor._cursor, args);
          return promisifyRequest(cursor._request).then(function (value) {
            if (!value) return;
            return new Cursor(value, cursor._request);
          });
        });
      };
    });
    function ObjectStore(store) {
      this._store = store;
    }
    ObjectStore.prototype.createIndex = function () {
      return new Index(this._store.createIndex.apply(this._store, arguments));
    };
    ObjectStore.prototype.index = function () {
      return new Index(this._store.index.apply(this._store, arguments));
    };
    proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
    proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
    proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
    proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);
    function Transaction(idbTransaction) {
      this._tx = idbTransaction;
      this.complete = new Promise(function (resolve, reject) {
        idbTransaction.oncomplete = function () {
          resolve();
        };
        idbTransaction.onerror = function () {
          reject(idbTransaction.error);
        };
        idbTransaction.onabort = function () {
          reject(idbTransaction.error);
        };
      });
    }
    Transaction.prototype.objectStore = function () {
      return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
    };
    proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
    proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);
    function UpgradeDB(db, oldVersion, transaction) {
      this._db = db;
      this.oldVersion = oldVersion;
      this.transaction = new Transaction(transaction);
    }
    UpgradeDB.prototype.createObjectStore = function () {
      return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
    };
    proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
    proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);
    function DB(db) {
      this._db = db;
    }
    DB.prototype.transaction = function () {
      return new Transaction(this._db.transaction.apply(this._db, arguments));
    };
    proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
    proxyMethods(DB, '_db', IDBDatabase, ['close']);
    ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
      [ObjectStore, Index].forEach(function (Constructor) {
        if (!(funcName in Constructor.prototype)) return;
        Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
          var args = toArray(arguments);
          var callback = args[args.length - 1];
          var nativeObject = this._store || this._index;
          var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
          request.onsuccess = function () {
            callback(request.result);
          };
        };
      });
    });
    [Index, ObjectStore].forEach(function (Constructor) {
      if (Constructor.prototype.getAll) return;
      Constructor.prototype.getAll = function (query, count) {
        var instance = this;
        var items = [];
        return new Promise(function (resolve) {
          instance.iterateCursor(query, function (cursor) {
            if (!cursor) {
              resolve(items);
              return;
            }
            items.push(cursor.value);
            if (count !== undefined && items.length == count) {
              resolve(items);
              return;
            }
            cursor.continue();
          });
        });
      };
    });
    function openDb(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;
      if (request) {
        request.onupgradeneeded = function (event) {
          if (upgradeCallback) {
            upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
          }
        };
      }
      return p.then(function (db) {
        return new DB(db);
      });
    }
    function deleteDb(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
    exports.openDb = openDb;
    exports.deleteDb = deleteDb;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  });
})(idb, idb.exports);
var name$1 = "@firebase/installations";
var version$1 = "0.4.32";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version$1;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000;
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var ERROR_DESCRIPTION_MAP$1 = (_a$1 = {}, _a$1["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', _a$1["not-registered"] = 'Firebase Installation is not registered.', _a$1["installation-not-found"] = 'Firebase Installation not found.', _a$1["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a$1["app-offline"] = 'Could not process request. Application offline.', _a$1["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", _a$1);
var ERROR_FACTORY$1 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP$1);
function isServerError(error) {
  return error instanceof FirebaseError && error.code.includes("request-failed");
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a) {
  var projectId = _a.projectId;
  return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
function getErrorFromResponse(requestName, response) {
  return __awaiter(this, void 0, void 0, function () {
    var responseJson, errorData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, response.json()];
        case 1:
          responseJson = _a.sent();
          errorData = responseJson.error;
          return [2, ERROR_FACTORY$1.create("request-failed", {
            requestName: requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
          })];
      }
    });
  });
}
function getHeaders(_a) {
  var apiKey = _a.apiKey;
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
function getHeadersWithAuth(appConfig, _a) {
  var refreshToken = _a.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append('Authorization', getAuthorizationHeader(refreshToken));
  return headers;
}
function retryIfServerError(fn) {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, fn()];
        case 1:
          result = _a.sent();
          if (result.status >= 500 && result.status < 600) {
            return [2, fn()];
          }
          return [2, result];
      }
    });
  });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
  return INTERNAL_AUTH_VERSION + " " + refreshToken;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(appConfig, _a) {
  var fid = _a.fid;
  return __awaiter(this, void 0, void 0, function () {
    var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          endpoint = getInstallationsEndpoint(appConfig);
          headers = getHeaders(appConfig);
          body = {
            fid: fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          return [4, retryIfServerError(function () {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _b.sent();
          if (!response.ok) return [3, 3];
          return [4, response.json()];
        case 2:
          responseValue = _b.sent();
          registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return [2, registeredInstallationEntry];
        case 3:
          return [4, getErrorFromResponse('Create Installation', response)];
        case 4:
          throw _b.sent();
      }
    });
  });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, __spreadArray([], __read(array))));
  return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
function generateFid() {
  try {
    var fidByteArray = new Uint8Array(17);
    var crypto_1 = self.crypto || self.msCrypto;
    crypto_1.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getKey(appConfig) {
  return appConfig.appName + "!" + appConfig.appId;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = new Map();
function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }
  callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    return;
  }
  callbackSet.delete(callback);
  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  }
  closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
  var e_1, _a;
  var callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  try {
    for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
      var callback = callbacks_1_1.value;
      callback(fid);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}
function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({
      key: key,
      fid: fid
    });
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && 'BroadcastChannel' in self) {
    broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
    broadcastChannel.onmessage = function (e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = idb.exports.openDb(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }
  return dbPromise;
}
function set(appConfig, value) {
  return __awaiter(this, void 0, void 0, function () {
    var key, db, tx, objectStore, oldValue;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          objectStore = tx.objectStore(OBJECT_STORE_NAME);
          return [4, objectStore.get(key)];
        case 2:
          oldValue = _a.sent();
          return [4, objectStore.put(value, key)];
        case 3:
          _a.sent();
          return [4, tx.complete];
        case 4:
          _a.sent();
          if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
          }
          return [2, value];
      }
    });
  });
}
function remove(appConfig) {
  return __awaiter(this, void 0, void 0, function () {
    var key, db, tx;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
        case 2:
          _a.sent();
          return [4, tx.complete];
        case 3:
          _a.sent();
          return [2];
      }
    });
  });
}
function update(appConfig, updateFn) {
  return __awaiter(this, void 0, void 0, function () {
    var key, db, tx, store, oldValue, newValue;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          store = tx.objectStore(OBJECT_STORE_NAME);
          return [4, store.get(key)];
        case 2:
          oldValue = _a.sent();
          newValue = updateFn(oldValue);
          if (!(newValue === undefined)) return [3, 4];
          return [4, store.delete(key)];
        case 3:
          _a.sent();
          return [3, 6];
        case 4:
          return [4, store.put(newValue, key)];
        case 5:
          _a.sent();
          _a.label = 6;
        case 6:
          return [4, tx.complete];
        case 7:
          _a.sent();
          if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
          }
          return [2, newValue];
      }
    });
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationEntry(appConfig) {
  return __awaiter(this, void 0, void 0, function () {
    var registrationPromise, installationEntry;
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4, update(appConfig, function (oldEntry) {
            var installationEntry = updateOrCreateInstallationEntry(oldEntry);
            var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
          })];
        case 1:
          installationEntry = _b.sent();
          if (!(installationEntry.fid === INVALID_FID)) return [3, 3];
          _a = {};
          return [4, registrationPromise];
        case 2:
          return [2, (_a.installationEntry = _b.sent(), _a)];
        case 3:
          return [2, {
            installationEntry: installationEntry,
            registrationPromise: registrationPromise
          }];
      }
    });
  });
}
function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      var registrationPromiseWithError = Promise.reject(ERROR_FACTORY$1.create("app-offline"));
      return {
        installationEntry: installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    var inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    var registrationPromise = registerInstallation(appConfig, inProgressEntry);
    return {
      installationEntry: inProgressEntry,
      registrationPromise: registrationPromise
    };
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry: installationEntry,
      registrationPromise: waitUntilFidRegistration(appConfig)
    };
  } else {
    return {
      installationEntry: installationEntry
    };
  }
}
function registerInstallation(appConfig, installationEntry) {
  return __awaiter(this, void 0, void 0, function () {
    var registeredInstallationEntry, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 7]);
          return [4, createInstallationRequest(appConfig, installationEntry)];
        case 1:
          registeredInstallationEntry = _a.sent();
          return [2, set(appConfig, registeredInstallationEntry)];
        case 2:
          e_1 = _a.sent();
          if (!(isServerError(e_1) && e_1.customData.serverCode === 409)) return [3, 4];
          return [4, remove(appConfig)];
        case 3:
          _a.sent();
          return [3, 6];
        case 4:
          return [4, set(appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0
          })];
        case 5:
          _a.sent();
          _a.label = 6;
        case 6:
          throw e_1;
        case 7:
          return [2];
      }
    });
  });
}
function waitUntilFidRegistration(appConfig) {
  return __awaiter(this, void 0, void 0, function () {
    var entry, _a, installationEntry, registrationPromise;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4, updateInstallationRequest(appConfig)];
        case 1:
          entry = _b.sent();
          _b.label = 2;
        case 2:
          if (!(entry.registrationStatus === 1)) return [3, 5];
          return [4, sleep(100)];
        case 3:
          _b.sent();
          return [4, updateInstallationRequest(appConfig)];
        case 4:
          entry = _b.sent();
          return [3, 2];
        case 5:
          if (!(entry.registrationStatus === 0)) return [3, 7];
          return [4, getInstallationEntry(appConfig)];
        case 6:
          _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
          if (registrationPromise) {
            return [2, registrationPromise];
          } else {
            return [2, installationEntry];
          }
        case 7:
          return [2, entry];
      }
    });
  });
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY$1.create("installation-not-found");
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_a, installationEntry) {
  var appConfig = _a.appConfig,
    platformLoggerProvider = _a.platformLoggerProvider;
  return __awaiter(this, void 0, void 0, function () {
    var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          platformLogger = platformLoggerProvider.getImmediate({
            optional: true
          });
          if (platformLogger) {
            headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
          }
          body = {
            installation: {
              sdkVersion: PACKAGE_VERSION
            }
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          return [4, retryIfServerError(function () {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _b.sent();
          if (!response.ok) return [3, 3];
          return [4, response.json()];
        case 2:
          responseValue = _b.sent();
          completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return [2, completedAuthToken];
        case 3:
          return [4, getErrorFromResponse('Generate Auth Token', response)];
        case 4:
          throw _b.sent();
      }
    });
  });
}
function getGenerateAuthTokenEndpoint(appConfig, _a) {
  var fid = _a.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function refreshAuthToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  return __awaiter(this, void 0, void 0, function () {
    var tokenPromise, entry, authToken, _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4, update(dependencies.appConfig, function (oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY$1.create("not-registered");
            }
            var oldAuthToken = oldEntry.authToken;
            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              return oldEntry;
            } else if (oldAuthToken.requestStatus === 1) {
              tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
              return oldEntry;
            } else {
              if (!navigator.onLine) {
                throw ERROR_FACTORY$1.create("app-offline");
              }
              var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
              return inProgressEntry;
            }
          })];
        case 1:
          entry = _b.sent();
          if (!tokenPromise) return [3, 3];
          return [4, tokenPromise];
        case 2:
          _a = _b.sent();
          return [3, 4];
        case 3:
          _a = entry.authToken;
          _b.label = 4;
        case 4:
          authToken = _a;
          return [2, authToken];
      }
    });
  });
}
function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
  return __awaiter(this, void 0, void 0, function () {
    var entry, authToken;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, updateAuthTokenRequest(dependencies.appConfig)];
        case 1:
          entry = _a.sent();
          _a.label = 2;
        case 2:
          if (!(entry.authToken.requestStatus === 1)) return [3, 5];
          return [4, sleep(100)];
        case 3:
          _a.sent();
          return [4, updateAuthTokenRequest(dependencies.appConfig)];
        case 4:
          entry = _a.sent();
          return [3, 2];
        case 5:
          authToken = entry.authToken;
          if (authToken.requestStatus === 0) {
            return [2, refreshAuthToken(dependencies, forceRefresh)];
          } else {
            return [2, authToken];
          }
      }
    });
  });
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY$1.create("not-registered");
    }
    var oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return _assign(_assign({}, oldEntry), {
        authToken: {
          requestStatus: 0
        }
      });
    }
    return oldEntry;
  });
}
function fetchAuthTokenFromServer(dependencies, installationEntry) {
  return __awaiter(this, void 0, void 0, function () {
    var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 8]);
          return [4, generateAuthTokenRequest(dependencies, installationEntry)];
        case 1:
          authToken = _a.sent();
          updatedInstallationEntry = _assign(_assign({}, installationEntry), {
            authToken: authToken
          });
          return [4, set(dependencies.appConfig, updatedInstallationEntry)];
        case 2:
          _a.sent();
          return [2, authToken];
        case 3:
          e_1 = _a.sent();
          if (!(isServerError(e_1) && (e_1.customData.serverCode === 401 || e_1.customData.serverCode === 404))) return [3, 5];
          return [4, remove(dependencies.appConfig)];
        case 4:
          _a.sent();
          return [3, 7];
        case 5:
          updatedInstallationEntry = _assign(_assign({}, installationEntry), {
            authToken: {
              requestStatus: 0
            }
          });
          return [4, set(dependencies.appConfig, updatedInstallationEntry)];
        case 6:
          _a.sent();
          _a.label = 7;
        case 7:
          throw e_1;
        case 8:
          return [2];
      }
    });
  });
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== undefined && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return _assign(_assign({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getId(dependencies) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, installationEntry, registrationPromise;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4, getInstallationEntry(dependencies.appConfig)];
        case 1:
          _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
          if (registrationPromise) {
            registrationPromise.catch(console.error);
          } else {
            refreshAuthToken(dependencies).catch(console.error);
          }
          return [2, installationEntry.fid];
      }
    });
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  return __awaiter(this, void 0, void 0, function () {
    var authToken;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, completeInstallationRegistration(dependencies.appConfig)];
        case 1:
          _a.sent();
          return [4, refreshAuthToken(dependencies, forceRefresh)];
        case 2:
          authToken = _a.sent();
          return [2, authToken.token];
      }
    });
  });
}
function completeInstallationRegistration(appConfig) {
  return __awaiter(this, void 0, void 0, function () {
    var registrationPromise;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, getInstallationEntry(appConfig)];
        case 1:
          registrationPromise = _a.sent().registrationPromise;
          if (!registrationPromise) return [3, 3];
          return [4, registrationPromise];
        case 2:
          _a.sent();
          _a.label = 3;
        case 3:
          return [2];
      }
    });
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallationRequest(appConfig, installationEntry) {
  return __awaiter(this, void 0, void 0, function () {
    var endpoint, headers, request, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          endpoint = getDeleteEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          request = {
            method: 'DELETE',
            headers: headers
          };
          return [4, retryIfServerError(function () {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _a.sent();
          if (!!response.ok) return [3, 3];
          return [4, getErrorFromResponse('Delete Installation', response)];
        case 2:
          throw _a.sent();
        case 3:
          return [2];
      }
    });
  });
}
function getDeleteEndpoint(appConfig, _a) {
  var fid = _a.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation(dependencies) {
  return __awaiter(this, void 0, void 0, function () {
    var appConfig, entry;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          appConfig = dependencies.appConfig;
          return [4, update(appConfig, function (oldEntry) {
            if (oldEntry && oldEntry.registrationStatus === 0) {
              return undefined;
            }
            return oldEntry;
          })];
        case 1:
          entry = _a.sent();
          if (!entry) return [3, 6];
          if (!(entry.registrationStatus === 1)) return [3, 2];
          throw ERROR_FACTORY$1.create("delete-pending-registration");
        case 2:
          if (!(entry.registrationStatus === 2)) return [3, 6];
          if (!!navigator.onLine) return [3, 3];
          throw ERROR_FACTORY$1.create("app-offline");
        case 3:
          return [4, deleteInstallationRequest(appConfig, entry)];
        case 4:
          _a.sent();
          return [4, remove(appConfig)];
        case 5:
          _a.sent();
          _a.label = 6;
        case 6:
          return [2];
      }
    });
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _onIdChange(_a, callback) {
  var appConfig = _a.appConfig;
  addCallback(appConfig, callback);
  return function () {
    removeCallback(appConfig, callback);
  };
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  var e_1, _a;
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }
  if (!app.name) {
    throw getMissingValueError('App Name');
  }
  var configKeys = ['projectId', 'apiKey', 'appId'];
  try {
    for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;
      if (!app.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY$1.create("missing-app-config-values", {
    valueName: valueName
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerInstallations(instance) {
  var installationsName = 'installations';
  instance.INTERNAL.registerComponent(new Component(installationsName, function (container) {
    var app = container.getProvider('app').getImmediate();
    var appConfig = extractAppConfig(app);
    var platformLoggerProvider = container.getProvider('platform-logger');
    var dependencies = {
      appConfig: appConfig,
      platformLoggerProvider: platformLoggerProvider
    };
    var installations = {
      app: app,
      getId: function getId() {
        return _getId(dependencies);
      },
      getToken: function getToken(forceRefresh) {
        return _getToken(dependencies, forceRefresh);
      },
      delete: function _delete() {
        return deleteInstallation(dependencies);
      },
      onIdChange: function onIdChange(callback) {
        return _onIdChange(dependencies, callback);
      }
    };
    return installations;
  }, "PUBLIC"));
  instance.registerVersion(name$1, version$1);
}
registerInstallations(firebase);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CachingClient = function () {
  function CachingClient(client, storage, storageCache, logger) {
    this.client = client;
    this.storage = storage;
    this.storageCache = storageCache;
    this.logger = logger;
  }
  CachingClient.prototype.isCachedDataFresh = function (cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
    if (!lastSuccessfulFetchTimestampMillis) {
      this.logger.debug('Config fetch cache check. Cache unpopulated.');
      return false;
    }
    var cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
    var isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
    this.logger.debug('Config fetch cache check.' + (" Cache age millis: " + cacheAgeMillis + ".") + (" Cache max age millis (minimumFetchIntervalMillis setting): " + cacheMaxAgeMillis + ".") + (" Is cache hit: " + isCachedDataFresh + "."));
    return isCachedDataFresh;
  };
  CachingClient.prototype.fetch = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse, response, storageOperations;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];
          case 1:
            _a = _b.sent(), lastSuccessfulFetchTimestampMillis = _a[0], lastSuccessfulFetchResponse = _a[1];
            if (lastSuccessfulFetchResponse && this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
              return [2, lastSuccessfulFetchResponse];
            }
            request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
            return [4, this.client.fetch(request)];
          case 2:
            response = _b.sent();
            storageOperations = [this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];
            if (response.status === 200) {
              storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
            }
            return [4, Promise.all(storageOperations)];
          case 3:
            _b.sent();
            return [2, response];
        }
      });
    });
  };
  return CachingClient;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {}, _a["registration-window"] = 'Undefined window object. This SDK only supports usage in a browser environment.', _a["registration-project-id"] = 'Undefined project identifier. Check Firebase app initialization.', _a["registration-api-key"] = 'Undefined API key. Check Firebase app initialization.', _a["registration-app-id"] = 'Undefined app identifier. Check Firebase app initialization.', _a["storage-open"] = 'Error thrown when opening storage. Original error: {$originalErrorMessage}.', _a["storage-get"] = 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.', _a["storage-set"] = 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.', _a["storage-delete"] = 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.', _a["fetch-client-network"] = 'Fetch client failed to connect to a network. Check Internet connection.' + ' Original error: {$originalErrorMessage}.', _a["fetch-timeout"] = 'The config fetch request timed out. ' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.', _a["fetch-throttle"] = 'The config fetch request timed out while in an exponential backoff state.' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["fetch-client-parse"] = 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.', _a["fetch-status"] = 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.', _a);
var ERROR_FACTORY = new ErrorFactory('remoteconfig', 'Remote Config', ERROR_DESCRIPTION_MAP);
function hasErrorCode(e, errorCode) {
  return e instanceof FirebaseError && e.code.indexOf(errorCode) !== -1;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUserLanguage(navigatorLanguage) {
  if (navigatorLanguage === void 0) {
    navigatorLanguage = navigator;
  }
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RestClient = function () {
  function RestClient(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
    this.firebaseInstallations = firebaseInstallations;
    this.sdkVersion = sdkVersion;
    this.namespace = namespace;
    this.projectId = projectId;
    this.apiKey = apiKey;
    this.appId = appId;
  }
  RestClient.prototype.fetch = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, installationId, installationToken, urlBase, url, headers, requestBody, options, fetchPromise, timeoutPromise, response, originalError_1, errorCode, status, responseEtag, config, state, responseBody, originalError_2;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];
          case 1:
            _a = _b.sent(), installationId = _a[0], installationToken = _a[1];
            urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || 'https://firebaseremoteconfig.googleapis.com';
            url = urlBase + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey;
            headers = {
              'Content-Type': 'application/json',
              'Content-Encoding': 'gzip',
              'If-None-Match': request.eTag || '*'
            };
            requestBody = {
              sdk_version: this.sdkVersion,
              app_instance_id: installationId,
              app_instance_id_token: installationToken,
              app_id: this.appId,
              language_code: getUserLanguage()
            };
            options = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(requestBody)
            };
            fetchPromise = fetch(url, options);
            timeoutPromise = new Promise(function (_resolve, reject) {
              request.signal.addEventListener(function () {
                var error = new Error('The operation was aborted.');
                error.name = 'AbortError';
                reject(error);
              });
            });
            _b.label = 2;
          case 2:
            _b.trys.push([2, 5,, 6]);
            return [4, Promise.race([fetchPromise, timeoutPromise])];
          case 3:
            _b.sent();
            return [4, fetchPromise];
          case 4:
            response = _b.sent();
            return [3, 6];
          case 5:
            originalError_1 = _b.sent();
            errorCode = "fetch-client-network";
            if (originalError_1.name === 'AbortError') {
              errorCode = "fetch-timeout";
            }
            throw ERROR_FACTORY.create(errorCode, {
              originalErrorMessage: originalError_1.message
            });
          case 6:
            status = response.status;
            responseEtag = response.headers.get('ETag') || undefined;
            if (!(response.status === 200)) return [3, 11];
            responseBody = void 0;
            _b.label = 7;
          case 7:
            _b.trys.push([7, 9,, 10]);
            return [4, response.json()];
          case 8:
            responseBody = _b.sent();
            return [3, 10];
          case 9:
            originalError_2 = _b.sent();
            throw ERROR_FACTORY.create("fetch-client-parse", {
              originalErrorMessage: originalError_2.message
            });
          case 10:
            config = responseBody['entries'];
            state = responseBody['state'];
            _b.label = 11;
          case 11:
            if (state === 'INSTANCE_STATE_UNSPECIFIED') {
              status = 500;
            } else if (state === 'NO_CHANGE') {
              status = 304;
            } else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
              config = {};
            }
            if (status !== 304 && status !== 200) {
              throw ERROR_FACTORY.create("fetch-status", {
                httpStatus: status
              });
            }
            return [2, {
              status: status,
              eTag: responseEtag,
              config: config
            }];
        }
      });
    });
  };
  return RestClient;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RemoteConfigAbortSignal = function () {
  function RemoteConfigAbortSignal() {
    this.listeners = [];
  }
  RemoteConfigAbortSignal.prototype.addEventListener = function (listener) {
    this.listeners.push(listener);
  };
  RemoteConfigAbortSignal.prototype.abort = function () {
    this.listeners.forEach(function (listener) {
      return listener();
    });
  };
  return RemoteConfigAbortSignal;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_VALUE_FOR_BOOLEAN = false;
var DEFAULT_VALUE_FOR_STRING = '';
var DEFAULT_VALUE_FOR_NUMBER = 0;
var BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];
var Value = function () {
  function Value(_source, _value) {
    if (_value === void 0) {
      _value = DEFAULT_VALUE_FOR_STRING;
    }
    this._source = _source;
    this._value = _value;
  }
  Value.prototype.asString = function () {
    return this._value;
  };
  Value.prototype.asBoolean = function () {
    if (this._source === 'static') {
      return DEFAULT_VALUE_FOR_BOOLEAN;
    }
    return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
  };
  Value.prototype.asNumber = function () {
    if (this._source === 'static') {
      return DEFAULT_VALUE_FOR_NUMBER;
    }
    var num = Number(this._value);
    if (isNaN(num)) {
      num = DEFAULT_VALUE_FOR_NUMBER;
    }
    return num;
  };
  Value.prototype.getSource = function () {
    return this._source;
  };
  return Value;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000;
var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000;
var RemoteConfig = function () {
  function RemoteConfig(app, _client, _storageCache, _storage, _logger) {
    this.app = app;
    this._client = _client;
    this._storageCache = _storageCache;
    this._storage = _storage;
    this._logger = _logger;
    this._isInitializationComplete = false;
    this.settings = {
      fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
      minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
    };
    this.defaultConfig = {};
  }
  RemoteConfig.prototype.setLogLevel = function (logLevel) {
    switch (logLevel) {
      case 'debug':
        this._logger.logLevel = LogLevel.DEBUG;
        break;
      case 'silent':
        this._logger.logLevel = LogLevel.SILENT;
        break;
      default:
        this._logger.logLevel = LogLevel.ERROR;
    }
  };
  Object.defineProperty(RemoteConfig.prototype, "fetchTimeMillis", {
    get: function get() {
      return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(RemoteConfig.prototype, "lastFetchStatus", {
    get: function get() {
      return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
    },
    enumerable: false,
    configurable: true
  });
  RemoteConfig.prototype.activate = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, lastSuccessfulFetchResponse, activeConfigEtag;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];
          case 1:
            _a = _b.sent(), lastSuccessfulFetchResponse = _a[0], activeConfigEtag = _a[1];
            if (!lastSuccessfulFetchResponse || !lastSuccessfulFetchResponse.config || !lastSuccessfulFetchResponse.eTag || lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
              return [2, false];
            }
            return [4, Promise.all([this._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config), this._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)])];
          case 2:
            _b.sent();
            return [2, true];
        }
      });
    });
  };
  RemoteConfig.prototype.ensureInitialized = function () {
    var _this = this;
    if (!this._initializePromise) {
      this._initializePromise = this._storageCache.loadFromStorage().then(function () {
        _this._isInitializationComplete = true;
      });
    }
    return this._initializePromise;
  };
  RemoteConfig.prototype.fetch = function () {
    return __awaiter(this, void 0, void 0, function () {
      var abortSignal, e_1, lastFetchStatus;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            abortSignal = new RemoteConfigAbortSignal();
            setTimeout(function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  abortSignal.abort();
                  return [2];
                });
              });
            }, this.settings.fetchTimeoutMillis);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 4,, 6]);
            return [4, this._client.fetch({
              cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
              signal: abortSignal
            })];
          case 2:
            _a.sent();
            return [4, this._storageCache.setLastFetchStatus('success')];
          case 3:
            _a.sent();
            return [3, 6];
          case 4:
            e_1 = _a.sent();
            lastFetchStatus = hasErrorCode(e_1, "fetch-throttle") ? 'throttle' : 'failure';
            return [4, this._storageCache.setLastFetchStatus(lastFetchStatus)];
          case 5:
            _a.sent();
            throw e_1;
          case 6:
            return [2];
        }
      });
    });
  };
  RemoteConfig.prototype.fetchAndActivate = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.fetch()];
          case 1:
            _a.sent();
            return [2, this.activate()];
        }
      });
    });
  };
  RemoteConfig.prototype.getAll = function () {
    var _this = this;
    return getAllKeys(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function (allConfigs, key) {
      allConfigs[key] = _this.getValue(key);
      return allConfigs;
    }, {});
  };
  RemoteConfig.prototype.getBoolean = function (key) {
    return this.getValue(key).asBoolean();
  };
  RemoteConfig.prototype.getNumber = function (key) {
    return this.getValue(key).asNumber();
  };
  RemoteConfig.prototype.getString = function (key) {
    return this.getValue(key).asString();
  };
  RemoteConfig.prototype.getValue = function (key) {
    if (!this._isInitializationComplete) {
      this._logger.debug("A value was requested for key \"" + key + "\" before SDK initialization completed." + ' Await on ensureInitialized if the intent was to get a previously activated value.');
    }
    var activeConfig = this._storageCache.getActiveConfig();
    if (activeConfig && activeConfig[key] !== undefined) {
      return new Value('remote', activeConfig[key]);
    } else if (this.defaultConfig && this.defaultConfig[key] !== undefined) {
      return new Value('default', String(this.defaultConfig[key]));
    }
    this._logger.debug("Returning static value for key \"" + key + "\"." + ' Define a default or remote value if this is unintentional.');
    return new Value('static');
  };
  return RemoteConfig;
}();
function getAllKeys(obj1, obj2) {
  if (obj1 === void 0) {
    obj1 = {};
  }
  if (obj2 === void 0) {
    obj2 = {};
  }
  return Object.keys(_assign(_assign({}, obj1), obj2));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toFirebaseError(event, errorCode) {
  var originalError = event.target.error || undefined;
  return ERROR_FACTORY.create(errorCode, {
    originalErrorMessage: originalError && originalError.message
  });
}
var APP_NAMESPACE_STORE = 'app_namespace_store';
var DB_NAME = 'firebase_remote_config';
var DB_VERSION = 1;
function openDatabase() {
  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = function (event) {
      reject(toFirebaseError(event, "storage-open"));
    };
    request.onsuccess = function (event) {
      resolve(event.target.result);
    };
    request.onupgradeneeded = function (event) {
      var db = event.target.result;
      switch (event.oldVersion) {
        case 0:
          db.createObjectStore(APP_NAMESPACE_STORE, {
            keyPath: 'compositeKey'
          });
      }
    };
  });
}
var Storage = function () {
  function Storage(appId, appName, namespace, openDbPromise) {
    if (openDbPromise === void 0) {
      openDbPromise = openDatabase();
    }
    this.appId = appId;
    this.appName = appName;
    this.namespace = namespace;
    this.openDbPromise = openDbPromise;
  }
  Storage.prototype.getLastFetchStatus = function () {
    return this.get('last_fetch_status');
  };
  Storage.prototype.setLastFetchStatus = function (status) {
    return this.set('last_fetch_status', status);
  };
  Storage.prototype.getLastSuccessfulFetchTimestampMillis = function () {
    return this.get('last_successful_fetch_timestamp_millis');
  };
  Storage.prototype.setLastSuccessfulFetchTimestampMillis = function (timestamp) {
    return this.set('last_successful_fetch_timestamp_millis', timestamp);
  };
  Storage.prototype.getLastSuccessfulFetchResponse = function () {
    return this.get('last_successful_fetch_response');
  };
  Storage.prototype.setLastSuccessfulFetchResponse = function (response) {
    return this.set('last_successful_fetch_response', response);
  };
  Storage.prototype.getActiveConfig = function () {
    return this.get('active_config');
  };
  Storage.prototype.setActiveConfig = function (config) {
    return this.set('active_config', config);
  };
  Storage.prototype.getActiveConfigEtag = function () {
    return this.get('active_config_etag');
  };
  Storage.prototype.setActiveConfigEtag = function (etag) {
    return this.set('active_config_etag', etag);
  };
  Storage.prototype.getThrottleMetadata = function () {
    return this.get('throttle_metadata');
  };
  Storage.prototype.setThrottleMetadata = function (metadata) {
    return this.set('throttle_metadata', metadata);
  };
  Storage.prototype.deleteThrottleMetadata = function () {
    return this.delete('throttle_metadata');
  };
  Storage.prototype.get = function (key) {
    return __awaiter(this, void 0, void 0, function () {
      var db;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.openDbPromise];
          case 1:
            db = _a.sent();
            return [2, new Promise(function (resolve, reject) {
              var transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
              var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
              var compositeKey = _this.createCompositeKey(key);
              try {
                var request = objectStore.get(compositeKey);
                request.onerror = function (event) {
                  reject(toFirebaseError(event, "storage-get"));
                };
                request.onsuccess = function (event) {
                  var result = event.target.result;
                  if (result) {
                    resolve(result.value);
                  } else {
                    resolve(undefined);
                  }
                };
              } catch (e) {
                reject(ERROR_FACTORY.create("storage-get", {
                  originalErrorMessage: e && e.message
                }));
              }
            })];
        }
      });
    });
  };
  Storage.prototype.set = function (key, value) {
    return __awaiter(this, void 0, void 0, function () {
      var db;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.openDbPromise];
          case 1:
            db = _a.sent();
            return [2, new Promise(function (resolve, reject) {
              var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
              var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
              var compositeKey = _this.createCompositeKey(key);
              try {
                var request = objectStore.put({
                  compositeKey: compositeKey,
                  value: value
                });
                request.onerror = function (event) {
                  reject(toFirebaseError(event, "storage-set"));
                };
                request.onsuccess = function () {
                  resolve();
                };
              } catch (e) {
                reject(ERROR_FACTORY.create("storage-set", {
                  originalErrorMessage: e && e.message
                }));
              }
            })];
        }
      });
    });
  };
  Storage.prototype.delete = function (key) {
    return __awaiter(this, void 0, void 0, function () {
      var db;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.openDbPromise];
          case 1:
            db = _a.sent();
            return [2, new Promise(function (resolve, reject) {
              var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
              var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
              var compositeKey = _this.createCompositeKey(key);
              try {
                var request = objectStore.delete(compositeKey);
                request.onerror = function (event) {
                  reject(toFirebaseError(event, "storage-delete"));
                };
                request.onsuccess = function () {
                  resolve();
                };
              } catch (e) {
                reject(ERROR_FACTORY.create("storage-delete", {
                  originalErrorMessage: e && e.message
                }));
              }
            })];
        }
      });
    });
  };
  Storage.prototype.createCompositeKey = function (key) {
    return [this.appId, this.appName, this.namespace, key].join();
  };
  return Storage;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StorageCache = function () {
  function StorageCache(storage) {
    this.storage = storage;
  }
  StorageCache.prototype.getLastFetchStatus = function () {
    return this.lastFetchStatus;
  };
  StorageCache.prototype.getLastSuccessfulFetchTimestampMillis = function () {
    return this.lastSuccessfulFetchTimestampMillis;
  };
  StorageCache.prototype.getActiveConfig = function () {
    return this.activeConfig;
  };
  StorageCache.prototype.loadFromStorage = function () {
    return __awaiter(this, void 0, void 0, function () {
      var lastFetchStatusPromise, lastSuccessfulFetchTimestampMillisPromise, activeConfigPromise, lastFetchStatus, lastSuccessfulFetchTimestampMillis, activeConfig;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            lastFetchStatusPromise = this.storage.getLastFetchStatus();
            lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
            activeConfigPromise = this.storage.getActiveConfig();
            return [4, lastFetchStatusPromise];
          case 1:
            lastFetchStatus = _a.sent();
            if (lastFetchStatus) {
              this.lastFetchStatus = lastFetchStatus;
            }
            return [4, lastSuccessfulFetchTimestampMillisPromise];
          case 2:
            lastSuccessfulFetchTimestampMillis = _a.sent();
            if (lastSuccessfulFetchTimestampMillis) {
              this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
            }
            return [4, activeConfigPromise];
          case 3:
            activeConfig = _a.sent();
            if (activeConfig) {
              this.activeConfig = activeConfig;
            }
            return [2];
        }
      });
    });
  };
  StorageCache.prototype.setLastFetchStatus = function (status) {
    this.lastFetchStatus = status;
    return this.storage.setLastFetchStatus(status);
  };
  StorageCache.prototype.setLastSuccessfulFetchTimestampMillis = function (timestampMillis) {
    this.lastSuccessfulFetchTimestampMillis = timestampMillis;
    return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
  };
  StorageCache.prototype.setActiveConfig = function (activeConfig) {
    this.activeConfig = activeConfig;
    return this.storage.setActiveConfig(activeConfig);
  };
  return StorageCache;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function (resolve, reject) {
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(function () {
      clearTimeout(timeout);
      reject(ERROR_FACTORY.create("fetch-throttle", {
        throttleEndTimeMillis: throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError) || !e.customData) {
    return false;
  }
  var httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var RetryingClient = function () {
  function RetryingClient(client, storage) {
    this.client = client;
    this.storage = storage;
  }
  RetryingClient.prototype.fetch = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var throttleMetadata;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.storage.getThrottleMetadata()];
          case 1:
            throttleMetadata = _a.sent() || {
              backoffCount: 0,
              throttleEndTimeMillis: Date.now()
            };
            return [2, this.attemptFetch(request, throttleMetadata)];
        }
      });
    });
  };
  RetryingClient.prototype.attemptFetch = function (request, _a) {
    var throttleEndTimeMillis = _a.throttleEndTimeMillis,
      backoffCount = _a.backoffCount;
    return __awaiter(this, void 0, void 0, function () {
      var response, e_1, throttleMetadata;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, setAbortableTimeout(request.signal, throttleEndTimeMillis)];
          case 1:
            _b.sent();
            _b.label = 2;
          case 2:
            _b.trys.push([2, 5,, 7]);
            return [4, this.client.fetch(request)];
          case 3:
            response = _b.sent();
            return [4, this.storage.deleteThrottleMetadata()];
          case 4:
            _b.sent();
            return [2, response];
          case 5:
            e_1 = _b.sent();
            if (!isRetriableError(e_1)) {
              throw e_1;
            }
            throttleMetadata = {
              throttleEndTimeMillis: Date.now() + calculateBackoffMillis(backoffCount),
              backoffCount: backoffCount + 1
            };
            return [4, this.storage.setThrottleMetadata(throttleMetadata)];
          case 6:
            _b.sent();
            return [2, this.attemptFetch(request, throttleMetadata)];
          case 7:
            return [2];
        }
      });
    });
  };
  return RetryingClient;
}();
var name = "@firebase/remote-config";
var version = "0.1.43";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerRemoteConfig(firebaseInstance) {
  firebaseInstance.INTERNAL.registerComponent(new Component('remoteConfig', remoteConfigFactory, "PUBLIC").setMultipleInstances(true));
  firebaseInstance.registerVersion(name, version);
  function remoteConfigFactory(container, _a) {
    var namespace = _a.instanceIdentifier;
    var app = container.getProvider('app').getImmediate();
    var installations = container.getProvider('installations').getImmediate();
    if (typeof window === 'undefined') {
      throw ERROR_FACTORY.create("registration-window");
    }
    var _b = app.options,
      projectId = _b.projectId,
      apiKey = _b.apiKey,
      appId = _b.appId;
    if (!projectId) {
      throw ERROR_FACTORY.create("registration-project-id");
    }
    if (!apiKey) {
      throw ERROR_FACTORY.create("registration-api-key");
    }
    if (!appId) {
      throw ERROR_FACTORY.create("registration-app-id");
    }
    namespace = namespace || 'firebase';
    var storage = new Storage(appId, app.name, namespace);
    var storageCache = new StorageCache(storage);
    var logger = new Logger(name);
    logger.logLevel = LogLevel.ERROR;
    var restClient = new RestClient(installations, firebaseInstance.SDK_VERSION, namespace, projectId, apiKey, appId);
    var retryingClient = new RetryingClient(restClient, storage);
    var cachingClient = new CachingClient(retryingClient, storage, storageCache, logger);
    var remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger);
    remoteConfigInstance.ensureInitialized();
    return remoteConfigInstance;
  }
}
registerRemoteConfig(firebase);
var defaults = {
  featured: {},
  nav: ['@cityquiz', '@rocketsleigh', '@dasherdancer', '@snowballrun', '@presenttoss', '@penguinswim', 'santaselfie', 'codeboogie', 'jetpack', 'jamband', 'snowball', 'elfmaker', 'codelab', 'wrapbattle', 'penguindash', 'build', 'matching', 'museum', 'boatload', 'takeoff', 'gumball', 'presentbounce', 'glider', 'speedsketch', 'santascanvas', 'seasonofgiving', 'penguinproof', 'traditions', 'wheressanta', 'santasearch', 'translations', 'runner', 'snowbox', 'mercator', 'windtunnel'],
  fallbackIndexScene: 'retro',
  indexScene: 'modvil',
  switchOff: false,
  upgradeToVersion: '',
  sceneRedirect: {
    'educators': 'familyguide',
    'press': 'familyguide',
    'tracker': '',
    'village': ''
  },
  routeUrl: 'https://firebasestorage.googleapis.com/v0/b/santa-tracker-firebase.appspot.com/o/route%2Fsanta_|LANG|.json?alt=media&2018b',
  sceneLock: {},
  videos: ['carpool', 'comroom', 'jingle', 'liftoff', 'museum', 'office', 'onvacation', 'penguinproof', 'reindeerworries', 'reload', 'santasback', 'satellite', 'selfies', 'slackingoff', 'takeoff', 'temptation', 'tired', 'wheressanta', 'workshop', 'likealight', 'yulelog'],
  refreshEvery: 60,
  useGeoIP: true,
  showTracker: false,
  routeJitter: 10
};
var now = new Date();
if (now.getMonth() === 9 || now.getMonth() === 10) ;else if (now.getMonth() !== 11) ;else ;
for (var key in defaults) {
  var v = defaults[key];
  if (typeof v !== 'string') {
    defaults[key] = JSON.stringify(defaults[key]);
  }
}
var sessionStorage = window.sessionStorage || {};
function isAndroidTWA(force) {
  if (force === void 0) {
    force = false;
  }
  if (sessionStorage['android-twa'] || document.referrer.startsWith('android-app://com.google.android.apps.santatracker') || force) {
    sessionStorage['android-twa'] = true;
    document.body.setAttribute('data-mode', 'android');
    return true;
  }
  return false;
}
var firebaseConfig = {
  apiKey: 'AIzaSyBrNcGcna0TMn2uLRxhMBwxVwXUBjlZqzU',
  authDomain: 'santa-api.firebaseapp.com',
  databaseURL: 'https://santa-api.firebaseio.com',
  projectId: 'santa-api',
  storageBucket: 'santa-api.appspot.com',
  messagingSenderId: '593146395815',
  appId: '1:593146395815:web:d766962076fbbd13492f82',
  measurementId: 'G-EWRYGZS6D3'
};
function initialize() {
  if (isAndroidTWA()) {
    firebaseConfig.appId = '1:593146395815:web:aefb4c5b5e01137f492f82';
    firebaseConfig.measurementId = 'G-0X2VE68GZD';
  } else if (window.location.hostname !== 'santatracker.google.com') {
    firebaseConfig.appId = '1:593146395815:web:54c339298196fd10492f82';
    firebaseConfig.measurementId = 'G-GPEHME4LVG';
  }
  firebase.initializeApp(firebaseConfig);
  var minimumFetchIntervalMillis = 1000 * 60;
  if (!navigator.onLine) {
    minimumFetchIntervalMillis *= 12 * 60;
  }
  var remoteConfig = firebase.remoteConfig();
  remoteConfig.settings = {
    fetchTimeoutMillis: 30 * 1000,
    minimumFetchIntervalMillis: minimumFetchIntervalMillis
  };
  remoteConfig.defaultConfig = defaults;
  window.firebase = firebase;
  return Promise.resolve().catch(function (err) {
    gtag('event', 'firebase', {
      action: 'failure'
    });
    console.warn('could not fetch remoteConfig, using defaults', err);
  }).then(function () {
    return remoteConfig;
  });
}
var done = document.readyState === 'interactive' || document.readyState === 'complete';
var all;
if (!done) {
  all = [];
  window.addEventListener('DOMContentLoaded', function () {
    done = true;
    all.forEach(function (fn) {
      return fn();
    });
    all = undefined;
  });
}
function onInteractive(fn) {
  if (!done) {
    all.push(fn);
  } else {
    fn();
  }
}
window.santaConfig = config;
var documentLang = document.documentElement.lang || null;
var isProd = documentLang !== null;
var fallback = checkFallback() || (location.search || '').match(/\bfallback=.*?\b/);
var ignoreErrors = (location.search || '').match(/\bignore=.*?\b/);
console.info('Santa Tracker', config.version, documentLang, fallback ? '(fallback)' : '');
var loaded = false;
window.onerror = function (msg, file, line, col, error) {
  console.error('error (loaded=' + loaded + ')', msg, file, line, col, error);
  if (location.hostname === 'santatracker.google.com' && !loaded && !ignoreErrors) {
    window.location.href = 'error.html';
  }
};
window.onunhandledrejection = function (event) {
  console.warn('rejection (loaded=' + loaded + ')', event.reason);
  if (location.hostname === 'santatracker.google.com' && !loaded && !ignoreErrors) {
    window.location.href = 'error.html';
  }
};
window.installEvent = null;
window.addEventListener('beforeinstallprompt', function (event) {
  window.installEvent = event;
});
window.sw = null;
if ('serviceWorker' in navigator && !location.hostname.endsWith('github.io')) {
  var params = new URLSearchParams();
  if (isProd) {
    params.set('baseurl', config.baseurl);
  }
  window.sw = navigator.serviceWorker.register("/sw.js?" + params.toString()).catch(function (err) {
    console.warn('sw failed to register', err);
    return null;
  });
  Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    loaded = true;
    window.location.reload();
  });
}
if (fallback && isProd) {
  supportScripts([config.staticScope + 'support.js', config.staticScope + 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'], function () {
    WebComponents.waitFor(function () {
      onInteractive(startup);
    });
  });
} else {
  onInteractive(startup);
}
function sanitizeStaticScope(arg) {
  var staticScopeUrl = new URL(arg, window.location);
  if (!staticScopeUrl.pathname.match(/\/$/)) {
    staticScopeUrl.pathname += '/';
  }
  return staticScopeUrl.toString();
}
function startup() {
  var startParams = new URLSearchParams(window.location.search);
  isAndroidTWA(startParams.has('android'));
  var ready = Promise.all([initialize(), window.sw]);
  ready.then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      remoteConfig = _ref2[0],
      registration = _ref2[1];
    if (remoteConfig.getBoolean('switchOff')) {
      throw new Error('switchOff');
    }
    var forceStaticScope = remoteConfig.getString('staticScope') || null;
    if (forceStaticScope) {
      if (!isProd) {
        console.warn('ignoring custom static scope for dev', forceStaticScope);
      } else {
        console.warn('using custom static scope', forceStaticScope);
        try {
          config.staticScope = sanitizeStaticScope(forceStaticScope);
        } catch (e) {}
      }
    }
    document.body.setAttribute('static', config.staticScope);
    var entrypoint = config.staticScope + (fallback ? 'fallback' : 'entrypoint') + (isProd ? '_' + documentLang : '') + '.js';
    return script(entrypoint, fallback && isProd ? '' : 'module').then(function () {
      loaded = true;
    });
  });
}
/**/})();