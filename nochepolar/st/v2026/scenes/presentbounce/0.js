import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var c = c || {};
  c.global = this || self;
  c.exportPath_ = function (a, b, d) {
    a = a.split(".");
    d = d || c.global;
    a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {} : d[e] = b;
  };
  c.define = function (a, b) {
    return b;
  };
  c.FEATURESET_YEAR = 2012;
  c.DEBUG = !0;
  c.LOCALE = "en";
  c.TRUSTED_SITE = !0;
  c.STRICT_MODE_COMPATIBLE = !1;
  c.DISALLOW_TEST_ONLY_CODE = !c.DEBUG;
  c.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
  c.provide = function (a) {
    if (c.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
    c.constructNamespace_(a);
  };
  c.constructNamespace_ = function (a, b) {
    c.exportPath_(a, b);
  };
  c.getScriptNonce = function (a) {
    if (a && a != c.global) return c.getScriptNonce_(a.document);
    null === c.cspNonce_ && (c.cspNonce_ = c.getScriptNonce_(c.global.document));
    return c.cspNonce_;
  };
  c.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
  c.cspNonce_ = null;
  c.getScriptNonce_ = function (a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && c.NONCE_PATTERN_.test(a) ? a : "";
  };
  c.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
  c.module = function (a) {
    if ("string" !== typeof a || !a || -1 == a.search(c.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
    if (!c.isInGoogModuleLoader_()) throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
    if (c.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
    c.moduleLoaderState_.moduleName = a;
  };
  c.module.get = function (a) {
    return c.module.getInternal_(a);
  };
  c.module.getInternal_ = function () {
    return null;
  };
  c.ModuleType = {
    ES6: "es6",
    GOOG: "goog"
  };
  c.moduleLoaderState_ = null;
  c.isInModuleLoader_ = function () {
    return c.isInGoogModuleLoader_() || c.isInEs6ModuleLoader_();
  };
  c.isInGoogModuleLoader_ = function () {
    return !!c.moduleLoaderState_ && c.moduleLoaderState_.type == c.ModuleType.GOOG;
  };
  c.isInEs6ModuleLoader_ = function () {
    if (c.moduleLoaderState_ && c.moduleLoaderState_.type == c.ModuleType.ES6) return !0;
    var a = c.global.$jscomp;
    return a ? "function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath() : !1;
  };
  c.module.declareLegacyNamespace = function () {
    c.moduleLoaderState_.declareLegacyNamespace = !0;
  };
  c.declareModuleId = function (a) {
    if (c.moduleLoaderState_) c.moduleLoaderState_.moduleName = a;else {
      var b = c.global.$jscomp;
      if (!b || "function" != typeof b.getCurrentModulePath) throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
      b = b.require(b.getCurrentModulePath());
      c.loadedModules_[a] = {
        exports: b,
        type: c.ModuleType.ES6,
        moduleId: a
      };
    }
  };
  c.setTestOnly = function (a) {
    if (c.DISALLOW_TEST_ONLY_CODE) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  };
  c.forwardDeclare = function () {};
  c.getObjectByName = function (a, b) {
    a = a.split(".");
    b = b || c.global;
    for (var d = 0; d < a.length; d++) if (b = b[a[d]], null == b) return null;
    return b;
  };
  c.globalize = function (a, b) {
    b = b || c.global;
    for (var d in a) b[d] = a[d];
  };
  c.addDependency = function () {};
  c.ENABLE_DEBUG_LOADER = !0;
  c.logToConsole_ = function (a) {
    c.global.console && c.global.console.error(a);
  };
  c.require = function () {};
  c.requireType = function () {
    return {};
  };
  c.basePath = "";
  c.nullFunction = function () {};
  c.abstractMethod = function () {
    throw Error("unimplemented abstract method");
  };
  c.addSingletonGetter = function (a) {
    a.instance_ = void 0;
    a.getInstance = function () {
      if (a.instance_) return a.instance_;
      c.DEBUG && (c.instantiatedSingletons_[c.instantiatedSingletons_.length] = a);
      return a.instance_ = new a();
    };
  };
  c.instantiatedSingletons_ = [];
  c.LOAD_MODULE_USING_EVAL = !0;
  c.SEAL_MODULE_EXPORTS = c.DEBUG;
  c.loadedModules_ = {};
  c.DEPENDENCIES_ENABLED = !1;
  c.TRANSPILE = "detect";
  c.ASSUME_ES_MODULES_TRANSPILED = !1;
  c.TRANSPILE_TO_LANGUAGE = "";
  c.TRANSPILER = "transpile.js";
  c.hasBadLetScoping = null;
  c.useSafari10Workaround = function () {
    if (null == c.hasBadLetScoping) {
      try {
        var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
      } catch (b) {
        a = !1;
      }
      c.hasBadLetScoping = a;
    }
    return c.hasBadLetScoping;
  };
  c.workaroundSafari10EvalBug = function (a) {
    return "(function(){" + a + "\n;})();\n";
  };
  c.loadModule = function (a) {
    var b = c.moduleLoaderState_;
    try {
      c.moduleLoaderState_ = {
        moduleName: "",
        declareLegacyNamespace: !1,
        type: c.ModuleType.GOOG
      };
      if (c.isFunction(a)) var d = a.call(void 0, {});else if ("string" === typeof a) c.useSafari10Workaround() && (a = c.workaroundSafari10EvalBug(a)), d = c.loadModuleFromSource_.call(void 0, a);else throw Error("Invalid module definition");
      var e = c.moduleLoaderState_.moduleName;
      if ("string" === typeof e && e) c.moduleLoaderState_.declareLegacyNamespace ? c.constructNamespace_(e, d) : c.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof d && null != d && Object.seal(d), c.loadedModules_[e] = {
        exports: d,
        type: c.ModuleType.GOOG,
        moduleId: c.moduleLoaderState_.moduleName
      };else throw Error('Invalid module name "' + e + '"');
    } finally {
      c.moduleLoaderState_ = b;
    }
  };
  c.loadModuleFromSource_ = function (a) {
    eval(a);
    return {};
  };
  c.normalizePath_ = function (a) {
    a = a.split("/");
    for (var b = 0; b < a.length;) "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
    return a.join("/");
  };
  c.loadFileSync_ = function (a) {
    if (c.global.CLOSURE_LOAD_FILE_SYNC) return c.global.CLOSURE_LOAD_FILE_SYNC(a);
    try {
      var b = new c.global.XMLHttpRequest();
      b.open("get", a, !1);
      b.send();
      return 0 == b.status || 200 == b.status ? b.responseText : null;
    } catch (d) {
      return null;
    }
  };
  c.transpile_ = function (a, b, d) {
    var e = c.global.$jscomp;
    e || (c.global.$jscomp = e = {});
    var f = e.transpile;
    if (!f) {
      var g = c.basePath + c.TRANSPILER,
        h = c.loadFileSync_(g);
      if (h) {
        (function () {
          (0, eval)(h + "\n//# sourceURL=" + g);
        }).call(c.global);
        if (c.global.$gwtExport && c.global.$gwtExport.$jscomp && !c.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(c.global.$gwtExport));
        c.global.$jscomp.transpile = c.global.$gwtExport.$jscomp.transpile;
        e = c.global.$jscomp;
        f = e.transpile;
      }
    }
    f || (f = e.transpile = function (a, b) {
      c.logToConsole_(b + " requires transpilation but no transpiler was found.");
      return a;
    });
    return f(a, b, d);
  };
  c.typeOf = function (a) {
    var b = typeof a;
    if ("object" == b) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var d = Object.prototype.toString.call(a);
        if ("[object Window]" == d) return "object";
        if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  };
  c.isArray = function (a) {
    return "array" == c.typeOf(a);
  };
  c.isArrayLike = function (a) {
    var b = c.typeOf(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  };
  c.isDateLike = function (a) {
    return c.isObject(a) && "function" == typeof a.getFullYear;
  };
  c.isFunction = function (a) {
    return "function" == c.typeOf(a);
  };
  c.isObject = function (a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  };
  c.getUid = function (a) {
    return Object.prototype.hasOwnProperty.call(a, c.UID_PROPERTY_) && a[c.UID_PROPERTY_] || (a[c.UID_PROPERTY_] = ++c.uidCounter_);
  };
  c.hasUid = function (a) {
    return !!a[c.UID_PROPERTY_];
  };
  c.removeUid = function (a) {
    null !== a && "removeAttribute" in a && a.removeAttribute(c.UID_PROPERTY_);
    try {
      delete a[c.UID_PROPERTY_];
    } catch (b) {}
  };
  c.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
  c.uidCounter_ = 0;
  c.getHashCode = c.getUid;
  c.removeHashCode = c.removeUid;
  c.cloneObject = function (a) {
    var b = c.typeOf(a);
    if ("object" == b || "array" == b) {
      if ("function" === typeof a.clone) return a.clone();
      b = "array" == b ? [] : {};
      for (var d in a) b[d] = c.cloneObject(a[d]);
      return b;
    }
    return a;
  };
  c.bindNative_ = function (a, b, d) {
    return a.call.apply(a.bind, arguments);
  };
  c.bindJs_ = function (a, b, d) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var e = Array.prototype.slice.call(arguments, 2);
      return function () {
        var d = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(d, e);
        return a.apply(b, d);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  };
  c.bind = function (a, b, d) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? c.bind = c.bindNative_ : c.bind = c.bindJs_;
    return c.bind.apply(null, arguments);
  };
  c.partial = function (a, b) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = d.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  };
  c.mixin = function (a, b) {
    for (var d in b) a[d] = b[d];
  };
  c.now = c.TRUSTED_SITE && Date.now || function () {
    return +new Date();
  };
  c.globalEval = function (a) {
    if (c.global.execScript) c.global.execScript(a, "JavaScript");else if (c.global.eval) {
      if (null == c.evalWorksForGlobals_) {
        try {
          c.global.eval("var _evalTest_ = 1;");
        } catch (e) {}
        if ("undefined" != typeof c.global._evalTest_) {
          try {
            delete c.global._evalTest_;
          } catch (e) {}
          c.evalWorksForGlobals_ = !0;
        } else c.evalWorksForGlobals_ = !1;
      }
      if (c.evalWorksForGlobals_) c.global.eval(a);else {
        var b = c.global.document,
          d = b.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(b.createTextNode(a));
        b.head.appendChild(d);
        b.head.removeChild(d);
      }
    } else throw Error("goog.globalEval not available");
  };
  c.evalWorksForGlobals_ = null;
  c.getCssName = function (a, b) {
    function d(a) {
      a = a.split("-");
      for (var b = [], d = 0; d < a.length; d++) b.push(e(a[d]));
      return b.join("-");
    }
    function e(a) {
      return c.cssNameMapping_[a] || a;
    }
    if ("." == String(a).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
    var f = c.cssNameMapping_ ? "BY_WHOLE" == c.cssNameMappingStyle_ ? e : d : function (a) {
      return a;
    };
    a = b ? a + "-" + f(b) : f(a);
    return c.global.CLOSURE_CSS_NAME_MAP_FN ? c.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
  };
  c.setCssNameMapping = function (a, b) {
    c.cssNameMapping_ = a;
    c.cssNameMappingStyle_ = b;
  };
  c.getMsg = function (a, b, d) {
    d && d.html && (a = a.replace(/</g, "&lt;"));
    b && (a = a.replace(/\{\$([^}]+)}/g, function (a, d) {
      return null != b && d in b ? b[d] : a;
    }));
    return a;
  };
  c.getMsgWithFallback = function (a) {
    return a;
  };
  c.exportSymbol = function (a, b, d) {
    c.exportPath_(a, b, d);
  };
  c.exportProperty = function (a, b, d) {
    a[b] = d;
  };
  c.inherits = function (a, b) {
    function d() {}
    d.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new d();
    a.prototype.constructor = a;
    a.base = function (a, d, g) {
      for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
      return b.prototype[d].apply(a, e);
    };
  };
  c.scope = function (a) {
    if (c.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
    a.call(c.global);
  };
  c.defineClass = function (a, b) {
    var d = b.constructor,
      e = b.statics;
    d && d != Object.prototype.constructor || (d = function () {
      throw Error("cannot instantiate an interface (no constructor defined).");
    });
    d = c.defineClass.createSealingConstructor_(d, a);
    a && c.inherits(d, a);
    delete b.constructor;
    delete b.statics;
    c.defineClass.applyProperties_(d.prototype, b);
    null != e && (e instanceof Function ? e(d) : c.defineClass.applyProperties_(d, e));
    return d;
  };
  c.defineClass.SEAL_CLASS_INSTANCES = c.DEBUG;
  c.defineClass.createSealingConstructor_ = function (a, b) {
    function d() {
      var b = a.apply(this, arguments) || this;
      b[c.UID_PROPERTY_] = b[c.UID_PROPERTY_];
      this.constructor === d && e && Object.seal instanceof Function && Object.seal(b);
      return b;
    }
    if (!c.defineClass.SEAL_CLASS_INSTANCES) return a;
    var e = !c.defineClass.isUnsealable_(b);
    return d;
  };
  c.defineClass.isUnsealable_ = function (a) {
    return a && a.prototype && a.prototype[c.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
  };
  c.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  c.defineClass.applyProperties_ = function (a, b) {
    for (var d in b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
    for (var e = 0; e < c.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; e++) d = c.defineClass.OBJECT_PROTOTYPE_FIELDS_[e], Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
  };
  c.tagUnsealableClass = function () {};
  c.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
  c.TRUSTED_TYPES_POLICY_NAME = "";
  c.identity_ = function (a) {
    return a;
  };
  c.createTrustedTypesPolicy = function (a) {
    var b = null,
      d = c.global.trustedTypes || c.global.TrustedTypes;
    if (!d || !d.createPolicy) return b;
    try {
      b = d.createPolicy(a, {
        createHTML: c.identity_,
        createScript: c.identity_,
        createScriptURL: c.identity_,
        createURL: c.identity_
      });
    } catch (e) {
      c.logToConsole_(e.message);
    }
    return b;
  };
  c.TRUSTED_TYPES_POLICY_ = c.TRUSTED_TYPES_POLICY_NAME ? c.createTrustedTypesPolicy(c.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
  var k = {
      shared: {}
    },
    l = {
      waiting: [],
      reset: function () {
        l.waiting = [];
      },
      after: function (a, b) {
        l.waiting.push({
          remaining: a,
          callback: b
        });
      },
      step: function (a, b, d) {
        l.waiting.push({
          total: a,
          remaining: a,
          callback: d,
          step: b
        });
      },
      stepReverse: function (a, b, d) {
        l.waiting.push({
          total: a,
          remaining: a,
          callback: d,
          step: b,
          reverse: !0
        });
      },
      onFrame: function (a) {
        for (let b = 0, d; d = l.waiting[b]; b++) {
          d.remaining -= a;
          0 > d.remaining && (d.remaining = 0);
          if (d.step) {
            let a = d.remaining / d.total;
            d.reverse || (a = 1 - a);
            d.step(a);
          }
          0 >= d.remaining && (d.callback(), l.waiting.splice(b--, 1));
        }
      }
    };
  k.shared.Coordinator = l;
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
  k.shared.LevelUp = r;
  function r(a, b, d) {
    this.bgElem = $(b);
    this.numberElem = $(d);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  r.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  r.prototype.onResize_ = function () {
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
  r.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  r.prototype.numberShown_ = function () {
    t(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  r.prototype.show = function (a, b) {
    this.bgElem.addClass("is-visible");
    t(this.bgElem, "transitionend", 1, b);
    this.bgElem.css("border-width", this.bgBorderWidth);
    t(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function t(a, b, d, e) {
    function f() {
      g || (g = !0, a.removeEventListener(b, f), e && e());
    }
    a = k.shared.utils.unwrapElement(a);
    var g = !1;
    a.addEventListener(b, f);
    window.setTimeout(f, 1E3 * d);
  }
  k.shared.pools = function () {
    const a = [];
    return {
      mixin(b, d) {
        function e(a) {
          d.fixed || 0 !== b.pool_.length || b.pool(a);
        }
        function f(a, b) {
          a && a.onInit.apply(a, Array.prototype.slice.call(b, 1));
          return a || null;
        }
        d = d || {};
        b.pool_ = [];
        a.push(b);
        b.pop = function (a) {
          e(a);
          const d = b.pool_.shift();
          return f(d, arguments);
        };
        b.popRandom = function (a) {
          e(a);
          const d = Math.floor(Math.random() * b.pool_.length),
            g = b.pool_[d],
            n = b.pool_.pop();
          n && g !== n && (b.pool_[d] = n);
          return f(g, arguments);
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
  k.Constants = {
    TOTAL_LEVELS: 10,
    INITIAL_COUNTDOWN: 0,
    COUNTDOWN_FLASH: -1,
    CANVAS_WIDTH: 1600,
    CANVAS_HEIGHT: 900,
    VIEWPORT_MIN_WIDTH: 1600,
    VIEWPORT_MIN_HEIGHT: 900,
    SHADOW_OFFSET_PX: 10,
    CONVEYOR_BELT_SPEED: 6,
    CORNER_RESOLUTION: 10,
    USER_OBJECT_TYPE_BELT: "USER_OBJECT_TYPE_BELT",
    USER_OBJECT_TYPE_SPRING: "USER_OBJECT_TYPE_SPRING",
    PHYSICS_GRAVITY: 150,
    PHYSICS_SCALE: 30,
    PHYSICS_TIME_STEP: 1 / 60,
    PHYSICS_VELOCITY_ITERATIONS: 8,
    PHYSICS_POSITION_ITERATIONS: 8
  };
  var D = k.Constants;
  k.shared.Scoreboard = E;
  function F(a, b) {
    a = D ? D[a] : void 0;
    return +a === a ? a : b;
  }
  function E(a, b, d) {
    this.game = a;
    this.initialCountdown_ = F("INITIAL_COUNTDOWN", 60);
    this.levels = d || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  E.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  E.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  E.prototype.onFrame = function (a) {
    this.countdown -= a;
    const b = Math.ceil(this.countdown);
    b !== this.lastSeconds && (this.lastSeconds = b, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = F("COUNTDOWN_FLASH", 10), a = b <= a && 0 !== b, this.losing !== a && (this.losing = a, 0 < b && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  E.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  E.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  E.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  E.prototype.announce_ = function () {
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
  function H(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  k.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = H(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...b) {
      a = H(a).concat(b).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  k.config = {};
  k.config.Materials = {
    snowGlobe: {
      globeDensity: 1,
      plateDensity: 1.5,
      friction: .2,
      restitution: 0
    },
    present: {
      density: 1,
      friction: .2,
      restitution: 0
    },
    target: {
      density: 1,
      friction: 1,
      restitution: 0
    },
    fixedObject: {
      density: 1,
      friction: .4,
      restitution: .3
    },
    conveyorBelt: {
      density: 1,
      friction: .9,
      restitution: .2
    },
    spring: {
      density: 1,
      friction: 1,
      restitution: 1.1
    }
  };
  k.config.Styles = {
    dropper: {
      className: "dropper",
      width: 361,
      height: 220,
      innerHTML: '\n        <div class="js-dropper__button dropper__button">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.2 131.2"><path fill="#D4D4D6" d="M0 0h131.2v131.2H0z"></path><circle fill="#77787C" cx="12.2" cy="12.2" r="6.2"></circle><circle fill="#77787C" cx="119" cy="12.2" r="6.2"></circle><circle  fill="#77787C" cx="12.2" cy="119" r="6.2"></circle><circle fill="#77787C" cx="119" cy="119" r="6.2"></circle><circle class="dropper__button__shadow" opacity=".25" fill="#434343" cx="72.6" cy="72.6" r="48.6"></circle><circle class="dropper__button__side" fill="#378F43" cx="65.6" cy="65.6" r="48.6"></circle><g class="dropper__button__hitarea"><circle class="dropper__button__surface" fill="#3BB34A" cx="60.9" cy="60.9" r="48.6"></circle><path fill="#378F43" class="dropper__button__pointer" d="M29 64.9h63.8L60.9 96.8zM44.9 33h31.9v31.9H44.9z"></path></g></svg>\n        </div>\n        <div class="dropper__pipe">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-273.6 67 204 260"><path opacity=".25" fill="#424242" d="M-69.6 133.4V117h-8.6V65.9h-179.7V117h-8.6v16.4h8.6v142.4h-8.6v16.3h197v-16.3h-8.6V133.4h8.5z"/><path fill="#D3D4D6" d="M-265 65.9h179.7v203.4H-265V65.9z"/><path fill="#FFF" d="M-265 65.9h161.6v203.4H-265V65.9z"/><path fill="#E53935" d="M-273.6 110h197v16.3h-197V110zm0 158.8h197v16.3h-197v-16.3z"/><path fill="#333" d="M-87.8 308.5c-4.8 0-8.7 3.9-8.7 8.7h8.7v-8.7z"/><path fill="#FFE200" d="M-79 317.2c0-4.8-3.9-8.7-8.7-8.7v8.7h8.7z"/><path fill="#333" d="M-79 317.2h-8.7v8.7c4.7 0 8.7-3.9 8.7-8.7z"/><path fill="#FFE200" d="M-96.5 317.2c0 4.8 3.9 8.7 8.7 8.7v-8.7h-8.7z"/><path fill="#333" d="M-262.5 308.5c-4.8 0-8.7 3.9-8.7 8.7h8.7v-8.7z"/><path fill="#FFE200" d="M-253.7 317.2c0-4.8-3.9-8.7-8.7-8.7v8.7h8.7z"/><path fill="#333" d="M-253.7 317.2h-8.7v8.7c4.8 0 8.7-3.9 8.7-8.7z"/><path fill="#FFE200" d="M-271.2 317.2c0 4.8 3.9 8.7 8.7 8.7v-8.7h-8.7z"/><g><path fill="#333" d="M-204.2 308.5c-4.8 0-8.7 3.9-8.7 8.7h8.7v-8.7z"/><path fill="#FFE200" d="M-195.5 317.2c0-4.8-3.9-8.7-8.7-8.7v8.7h8.7z"/><path fill="#333" d="M-195.5 317.2h-8.7v8.7c4.8 0 8.7-3.9 8.7-8.7z"/><path fill="#FFE200" d="M-213 317.2c0 4.8 3.9 8.7 8.7 8.7v-8.7h-8.7z"/></g><g><path fill="#333" d="M-146 308.5c-4.8 0-8.7 3.9-8.7 8.7h8.7v-8.7z"/><path fill="#FFE200" d="M-137.3 317.2c0-4.8-3.9-8.7-8.7-8.7v8.7h8.7z"/><path fill="#333" d="M-137.3 317.2h-8.7v8.7c4.8 0 8.7-3.9 8.7-8.7z"/><path fill="#FFE200" d="M-154.7 317.2c0 4.8 3.9 8.7 8.7 8.7v-8.7h-8.7z"/></g></svg>\n        </div>\n    ',
      marginTop: -90
    },
    snowGlobe: {
      className: "object--snowglobe snowglobe",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.1 47.7"><defs><circle id="a" cx="20.1" cy="20.1" r="20.1"/></defs><path fill="#F9CE1D" d="M37 47.7H3.2l3.3-10.1h27.2"/><circle fill="#86BAD6" cx="20.1" cy="20.1" r="20.1"/><defs><circle id="b" cx="20.1" cy="20.1" r="20.1"/></defs><clipPath id="c"><use xlink:href="#b" overflow="visible"/></clipPath><path clip-path="url(#c)" fill="#FFF" d="M2.2 29.3c2.5-2.1 5.9-2.8 9-2 2.1.6 4.1 1.8 6.2 1.3 1.7-.4 2.9-1.8 4.5-2.4 1.3-.5 2.8-.4 4.2-.1 1.4.3 2.7.9 4.1 1.3 2.7.8 5.6 1 8.4.5v5.3l-8.9 8.9H6.4l-4.8-7.3.6-5.5z"/><path clip-path="url(#c)" fill="none" stroke="#FFF" stroke-width="1.215" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="0,27.3375" d="M23.1 11.1c-1.7-.2-3.4-.2-5 .1-.7.1-1.4.4-1.6 1-.2.5 0 1 .4 1.4.3.4.8.6 1.3.9l7.5 3.9c.8.4 1.7 1.1 1.5 2-.2.7-1 1-1.7 1.1-2.5.4-5.2.1-7.5-.8-.9-.3-1.7-.8-2.3-1.5s-.8-1.8-.3-2.6c.6-.9 1.7-1.1 2.8-1.1 1.9-.1 3.8.2 5.7.1 1.9 0 3.9-.4 5.4-1.6s2.5-3.2 1.8-5c-.4-1.2-1.4-2.1-2.5-2.8-5.7-4-13.4-5-19.9-2.6-1.8.7-3.5 1.6-4.9 3s-2.3 3.2-2.4 5.1c-.1 2 .9 3.9 2.1 5.5 3.1 4 8.4 6.1 13.5 6s10-2.3 14-5.6c.9-.8 1.8-1.6 2.8-2.2 1-.6 2.3-.9 3.4-.5s2 1.4 2.5 2.5.6 2.3.8 3.5c.1.9.2 1.9-.4 2.7-.6.8-1.7 1-2.7 1-5.6.1-11.1-3-13.8-7.9-1.2-2.2-2-4.9-4.1-6.3-1.9-1.3-4.4-1.2-6.6-.4-2.1.8-3.9 2.3-5.7 3.8-1.2 1-2.4 2-2.7 3.5-.4 2 1.2 3.8 2.9 4.7 2.6 1.3 5.7 1.1 8.5.1 2.7-1 5.2-2.6 7.7-4.1 2.5-1.5 5-3 7.9-3.6"/><path opacity=".2" fill="#4D4D4D" d="M31.3 3.4C34.8 7 37 12 37 17.4c0 11.1-9 20.2-20.2 20.2-3.9 0-7.5-1.1-10.6-3 3.6 3.5 8.5 5.6 13.9 5.6 11.1 0 20.1-9 20.1-20.1 0-7-3.5-13.1-8.9-16.7z"/><path fill="none" stroke="#F9CE1D" stroke-width="5.982" stroke-linecap="round" stroke-miterlimit="10" d="M3.7 37.6h32.8"/><circle fill="#FFF" cx="11.3" cy="11.4" r="2.7"/><circle opacity=".7" fill="#FFF" cx="7.4" cy="17.1" r="1.2"/><g><path opacity=".3" fill="#4D4D4D" d="M5.5 40.6l30.7 5.2-1.6-5.2"/></g><g><defs><circle id="d" cx="20.1" cy="20.1" r="20.1"/></defs></g></svg>',
      width: 50,
      height: 50 * 1.15,
      dynamicShadow: !0
    },
    presentBall: {
      className: "object--present-circle present present--circle",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.6 49.6"><circle fill="#DA4737" cx="24.8" cy="24.8" r="24.8"/><path fill="#F0B31D" d="M40.3 18.1c0-4.8-3.9-8.8-8.8-8.8-1.8 0-3.4.5-4.8 1.4V.1c-.5-.1-1.2-.1-1.9-.1s-1.3 0-2 .1v10.6c-1.4-.9-3-1.4-4.8-1.4-4.8 0-8.8 3.9-8.8 8.8 0 1.8.5 3.4 1.4 4.8H.1c-.1.6-.1 1.2-.1 1.9s0 1.3.1 2h18c-.2.2-.4.5-.6.7-2.2 2.4-4.3 4.7-7.2 4.7v4c4.7 0 7.7-3.3 10.2-6 .8-.9 1.6-1.8 2.4-2.4v21.8c.7.1 1.3.1 2 .1s1.3 0 2-.1V27.8c.8.6 1.6 1.5 2.4 2.4 2.4 2.7 5.5 6 10.2 6v-4c-2.9 0-5-2.3-7.2-4.7-.2-.2-.4-.5-.6-.7h18c.1-.7.1-1.3.1-2s0-1.3-.1-2H38.9c.9-1.4 1.4-3 1.4-4.7zM18 22.8c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.8v4.8H18zm13.6 0h-4.8V18c0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8s-2.2 4.8-4.8 4.8z"/></svg>',
      width: 50,
      height: 50,
      dynamicShadow: !0
    },
    presentSquare: {
      className: "object--present-square present present--square",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.6 49.6"><path fill="#DA4737" d="M0 0h49.6v49.6H0z"/><path fill="#F0B31D" d="M40.3 18.1c0-4.8-3.9-8.8-8.8-8.8-1.8 0-3.4.5-4.8 1.4V0h-4v10.7c-1.4-.9-3-1.4-4.8-1.4-4.8 0-8.8 3.9-8.8 8.8 0 1.8.5 3.4 1.4 4.8H0v4h18c-.2.2-.4.5-.6.7-2.2 2.4-4.3 4.7-7.2 4.7v4c4.7 0 7.7-3.3 10.2-6 .8-.9 1.6-1.8 2.4-2.4v21.8h4V27.8c.8.6 1.6 1.5 2.4 2.4 2.4 2.7 5.5 6 10.2 6v-4c-2.9 0-5-2.3-7.2-4.7-.2-.2-.4-.5-.6-.7h18v-4H38.9c.9-1.4 1.4-3 1.4-4.7zM18 22.8c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.8v4.8H18zm13.6 0h-4.8V18c0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8s-2.2 4.8-4.8 4.8z"/></svg>',
      width: 50,
      height: 50,
      dynamicShadow: !0
    },
    presentRectangle: {
      className: "object--present-rect",
      innerHTML: "",
      width: 50,
      height: 80,
      dynamicShadow: !0
    },
    target: {
      className: "object--target",
      innerHTML: '\n      <div class="target">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 170"><path opacity=".25" fill="#434343" d="M7 117.6c0 11.1 9 20.1 20.1 20.1h31.1V178h68.5v-40.4h31.1c11.1 0 20.1-9 20.1-20.1H7z"/><path opacity=".25" fill="#434343" d="M136 27.5c.2-.3.3-.7.3-1 0-.8-.4-1.5-1-1.9L146.7 7H38.4l11.5 17.6c-.6.4-1 1.1-1 1.9 0 .4.1.7.3 1-14.9 8.1-25 23.9-25 42.1 0 26.5 21.5 48 48.1 48h40.8c26.6 0 48.1-21.5 48.1-48-.2-18.2-10.3-33.9-25.2-42.1z"/><path fill="#333" d="M151 130.6H20c-11 0-20-9-20-20v-.1h171v.1c0 11-9 20-20 20z"/><path fill="#D4D4D6" d="M51.2 130.6h68.5V178H51.2z"/><path fill="#989898" d="M109.7 130.6h10V178h-10z"/><g><path fill="#E53A35" d="M127 19.5L139.6 0H31.3L44 19.5c-16 7.8-27 24.2-27 43.1 0 26.5 21.5 48 48.1 48h40.8c26.6 0 48.1-21.5 48.1-48-.1-19-11.1-35.3-27-43.1z"/><path fill="#434343" d="M127 19.5L139.6 0h-26.3l-12.7 19.5c16 7.8 27 24.2 27 43.1 0 24.9-19.1 45.4-43.5 47.7 1.5.1 20.2.2 21.8.2 26.6 0 48.1-21.5 48.1-48-.1-18.9-11.1-35.2-27-43z" opacity=".25"/><path fill="none" stroke="#FED600" stroke-width="4.434" stroke-linecap="round" stroke-miterlimit="10" d="M44 19.5h83M110.8 19.5c2.7 0 5.2 1.1 6.3 3.5s.4 5.3-1.6 7c-.8.7-1.8 1.2-2.5 1.9-1.6 1.8-1.5 4.7-.1 6.7s3.8 3 6.1 3.5"/><path fill="none" stroke="#FED600" stroke-width="4.434" stroke-linecap="round" stroke-miterlimit="10" d="M113.2 19.5c5.3 0 10.6 2.9 11.7 6.3.4 1.2.1 2.5-.7 3.5-.5.6-1.3 1-1.7 1.7-.9 1.2-.5 3 .6 4.1 1 1.1 2.6 1.5 4 1.7"/></g></svg>\n      </div>\n    ',
      width: 200,
      height: 177,
      objectWidth: 128,
      objectHeight: 100
    },
    angledBeam: {
      className: "",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 396.3 236.6"><circle fill="#B4B4B4" cx="32.9" cy="32.9" r="32.9"/><circle fill="#B4B4B4" cx="363.4" cy="203.7" r="32.9"/><g fill="#77787C"><circle cx="10.4" cy="23.6" r="3.1"/><circle cx="55.4" cy="42.2" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="55.4" r="3.1"/><circle cx="42.2" cy="10.4" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="10.4" r="3.1"/><circle cx="42.2" cy="55.4" r="3.1"/></g><g fill="#77787C"><circle cx="10.4" cy="42.2" r="3.1"/><circle cx="55.4" cy="23.6" r="3.1"/></g><g fill="#77787C"><circle cx="354" cy="226.2" r="3.1"/><circle cx="372.7" cy="181.2" r="3.1"/></g><g fill="#77787C"><circle cx="385.9" cy="213" r="3.1"/><circle cx="340.9" cy="194.4" r="3.1"/></g><g fill="#77787C"><circle cx="340.9" cy="213" r="3.1"/><circle cx="385.9" cy="194.4" r="3.1"/></g><g fill="#77787C"><circle cx="372.7" cy="226.2" r="3.1"/><circle cx="354" cy="181.2" r="3.1"/></g><path opacity=".25" fill="#434343" d="M388 112.7c0-49.9-40.5-90.4-90.4-90.4H39.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.6c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6l.1-98z"/><path fill="#FFF" d="M381 105.7c0-49.9-40.5-90.4-90.4-90.4H32.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.6c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6l.1-98z"/><clipPath id="beam-angled-b"><path id="beam-angled-a" d="M381 105.7c0-49.9-40.5-90.4-90.4-90.4H32.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.6c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6l.1-98z"/></clipPath><g clip-path="url(#beam-angled-b)"><path fill="#DA4737" d="M95.5 51.2H29.2L-8.5 14.7h66.4zM209.9 51.2h-66.3l-37.7-36.5h66.3zM314.8 57s-.2-.1-.5-.3c-.3-.2-.8-.4-1.4-.7-.6-.3-1.4-.6-2.2-1-.9-.4-1.9-.8-3-1.1-2.2-.8-4.8-1.5-7.7-2-2.9-.5-6-.9-9.1-.9H258l-37.7-36.5h66.3l1.6 1.6c.5.5 1.1 1.1 1.9 1.8.8.7 1.8 1.5 2.8 2.4 4 3.5 8.8 8.6 12.4 14.1 3.7 5.4 6.3 11.1 7.6 15.4.7 2.1 1.2 3.9 1.5 5.1.3 1.4.4 2.1.4 2.1zM345.1 139.6v-33.2c0-.8 0-1.6-.1-2.4 0-.8-.1-1.5-.1-2.3 0-.8-.1-1.5-.2-2.3-.1-.7-.2-1.5-.3-2.2-.4-2.9-1.2-5.5-1.8-7.7-.7-2.2-1.4-4-2-5.3-.6-1.2-.9-1.9-.9-1.9s.3-.7.8-1.8c.3-.6.6-1.3.9-2.1.3-.8.7-1.8 1.1-2.8 1.5-4.2 3-10.3 3.3-16.9.5-6.5-.2-13.5-1.2-18.8-.5-2.6-1.1-4.9-1.5-6.4-.5-1.6-.7-2.4-.7-2.4s.3.2.8.5c.5.4 1.2.9 2.1 1.5.9.7 2 1.5 3.2 2.5 1.2 1 2.6 2.2 4 3.5 5.7 5.3 12.5 13.2 17.5 22.3 2.5 4.5 4.7 9.3 6.3 13.8 1.7 4.6 2.7 9 3.6 12.8.7 3.8 1.1 7 1.4 9.3.2 2.3.3 3.5.3 3.5s-.1.2-.4.5c-.3.4-.6.9-1.1 1.5-1 1.3-2.3 3.2-4.1 4.8-3.4 3.5-8 8.2-12.6 12.9-9.2 9.7-18.3 19.1-18.3 19.1zM345.1 254v-66.3l36.5-37.7v66.3z"/></g><g opacity=".25" fill="#434343"><path d="M32.9 50.5c-9.7 0-17.6-7.9-17.6-17.6 0-1.2.1-2.4.4-3.6 1.7 8 8.7 14 17.2 14H74l216.5 7.2H32.9zM381 203.7c0 9.7-7.9 17.6-17.6 17.6-1.2 0-2.4-.1-3.6-.4 8-1.7 14-8.7 14-17.2v-98h7.2v98z"/><path d="M373.8 105.7c0-49.9-33.3-90.3-83.2-90.3 54.3 0 90.4 43.8 90.4 90.3h-7.2z"/></g></svg>',
      width: 365,
      height: 205,
      stroke: 36,
      padding: 15,
      hasAngle: !0
    },
    angledBeamInvertedShadow: {
      className: "",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 396.3 236.6"><circle fill="#B4B4B4" cx="32.9" cy="32.9" r="32.9"/><circle fill="#B4B4B4" cx="363.4" cy="203.7" r="32.9"/><g fill="#77787C"><circle cx="10.4" cy="23.6" r="3.1"/><circle cx="55.4" cy="42.2" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="55.4" r="3.1"/><circle cx="42.2" cy="10.4" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="10.4" r="3.1"/><circle cx="42.2" cy="55.4" r="3.1"/></g><g fill="#77787C"><circle cx="10.4" cy="42.2" r="3.1"/><circle cx="55.4" cy="23.6" r="3.1"/></g><g fill="#77787C"><circle cx="354" cy="226.2" r="3.1"/><circle cx="372.7" cy="181.2" r="3.1"/></g><g fill="#77787C"><circle cx="385.9" cy="213" r="3.1"/><circle cx="340.9" cy="194.4" r="3.1"/></g><g fill="#77787C"><circle cx="340.9" cy="213" r="3.1"/><circle cx="385.9" cy="194.4" r="3.1"/></g><g fill="#77787C"><circle cx="372.7" cy="226.2" r="3.1"/><circle cx="354" cy="181.2" r="3.1"/></g><path opacity=".25" fill="#434343" d="M374 98.7c0-49.9-40.5-90.4-90.4-90.4H25.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.6c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6l.1-98z"/><path fill="#FFF" d="M381 105.7c0-49.9-40.5-90.4-90.4-90.4H32.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.6c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6l.1-98z"/><clipPath id="beam-angled-inverted-b"><path id="beam-angled-inverted-a" d="M381 105.7c0-49.9-40.5-90.4-90.4-90.4H32.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.6c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6l.1-98z"/></clipPath><g clip-path="url(#beam-angled-inverted-b)"><path fill="#DA4737" d="M95.5 51.2H29.2L-8.5 14.7h66.4zM209.9 51.2h-66.3l-37.7-36.5h66.3zM314.8 57s-.2-.1-.5-.3c-.3-.2-.8-.4-1.4-.7-.6-.3-1.4-.6-2.2-1-.9-.4-1.9-.8-3-1.1-2.2-.8-4.8-1.5-7.7-2-2.9-.5-6-.9-9.1-.9H258l-37.7-36.5h66.3l1.6 1.6c.5.5 1.1 1.1 1.9 1.8.8.7 1.8 1.5 2.8 2.4 4 3.5 8.8 8.6 12.4 14.1 3.7 5.4 6.3 11.1 7.6 15.4.7 2.1 1.2 3.9 1.5 5.1.3 1.4.4 2.1.4 2.1zM345.1 139.6v-33.2c0-.8 0-1.6-.1-2.4 0-.8-.1-1.5-.1-2.3 0-.8-.1-1.5-.2-2.3-.1-.7-.2-1.5-.3-2.2-.4-2.9-1.2-5.5-1.8-7.7-.7-2.2-1.4-4-2-5.3-.6-1.2-.9-1.9-.9-1.9s.3-.7.8-1.8c.3-.6.6-1.3.9-2.1.3-.8.7-1.8 1.1-2.8 1.5-4.2 3-10.3 3.3-16.9.5-6.5-.2-13.5-1.2-18.8-.5-2.6-1.1-4.9-1.5-6.4-.5-1.6-.7-2.4-.7-2.4s.3.2.8.5c.5.4 1.2.9 2.1 1.5.9.7 2 1.5 3.2 2.5 1.2 1 2.6 2.2 4 3.5 5.7 5.3 12.5 13.2 17.5 22.3 2.5 4.5 4.7 9.3 6.3 13.8 1.7 4.6 2.7 9 3.6 12.8.7 3.8 1.1 7 1.4 9.3.2 2.3.3 3.5.3 3.5s-.1.2-.4.5c-.3.4-.6.9-1.1 1.5-1 1.3-2.3 3.2-4.1 4.8-3.4 3.5-8 8.2-12.6 12.9-9.2 9.7-18.3 19.1-18.3 19.1zM345.1 254v-66.3l36.5-37.7v66.3z"/></g><g opacity=".25" fill="#434343"><path d="M32.9 15.3c-9.7 0-17.6 7.9-17.6 17.6 0 1.2.1 2.4.4 3.6 1.7-8 8.7-14 17.2-14H74l216.5-7.2H32.9zM345.8 203.7c0 9.7 7.9 17.6 17.6 17.6 1.2 0 2.4-.1 3.6-.4-8-1.7-14-8.7-14-17.2v-98h-7.2v98z"/><path d="M345.8 105.7c0-30.2-24.3-55.2-55.2-55.2 30.3 0 62.4 19.9 62.4 55.2h-7.2z"/></g></svg>',
      width: 365,
      height: 205,
      stroke: 36,
      padding: 15,
      hasAngle: !0
    },
    angledBeamInvertedShadow2: {
      className: "",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 396.3 236.6"><circle fill="#B4B4B4" cx="32.9" cy="32.9" r="32.9"/><circle fill="#B4B4B4" cx="363.4" cy="203.7" r="32.9"/><g fill="#77787C"><circle cx="10.4" cy="23.6" r="3.1"/><circle cx="55.4" cy="42.2" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="55.4" r="3.1"/><circle cx="42.2" cy="10.4" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="10.4" r="3.1"/><circle cx="42.2" cy="55.4" r="3.1"/></g><g fill="#77787C"><circle cx="10.4" cy="42.2" r="3.1"/><circle cx="55.4" cy="23.6" r="3.1"/></g><g fill="#77787C"><circle cx="354" cy="226.2" r="3.1"/><circle cx="372.7" cy="181.2" r="3.1"/></g><g fill="#77787C"><circle cx="385.9" cy="213" r="3.1"/><circle cx="340.9" cy="194.4" r="3.1"/></g><g fill="#77787C"><circle cx="340.9" cy="213" r="3.1"/><circle cx="385.9" cy="194.4" r="3.1"/></g><g fill="#77787C"><circle cx="372.7" cy="226.2" r="3.1"/><circle cx="354" cy="181.2" r="3.1"/></g><path opacity=".25" fill="#434343" d="M388 112.7c0-49.9-40.5-90.4-90.4-90.4H39.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.7c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6v-98z"/><path fill="#FFF" d="M381 105.7c0-49.9-40.5-90.4-90.4-90.4H32.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.7c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6v-98z"/><clipPath id="angled-beam-inverted2-b"><path id="angled-beam-inverted2-a" d="M381 105.7c0-49.9-40.5-90.4-90.4-90.4H32.9c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h257.7c30.5 0 55.2 24.7 55.2 55.2v98c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6v-98z"/></clipPath><g clip-path="url(#angled-beam-inverted2-b)"><path fill="#DA4737" d="M95.5 51.2H29.2L-8.5 14.7h66.4zM209.9 51.2h-66.3l-37.7-36.5h66.3zM314.8 57s-.2-.1-.5-.3c-.3-.2-.8-.4-1.4-.7-.6-.3-1.4-.6-2.3-1-.9-.4-1.9-.8-3-1.1-2.2-.8-4.8-1.5-7.7-2-2.9-.5-6-.9-9.1-.9h-32.9l-37.7-36.5h66.3l1.6 1.6c.5.5 1.1 1.1 1.9 1.8.8.7 1.8 1.5 2.8 2.4 4 3.5 8.8 8.6 12.4 14.1 3.7 5.4 6.3 11.1 7.6 15.4.7 2.1 1.2 3.9 1.5 5.1.4 1.4.5 2.1.5 2.1zM345.1 139.6v-33.2c0-.8 0-1.6-.1-2.4 0-.8-.1-1.5-.1-2.3 0-.8-.1-1.5-.2-2.3-.1-.7-.2-1.5-.3-2.2-.4-2.9-1.2-5.5-1.8-7.7-.7-2.2-1.4-4-2-5.3-.6-1.2-.9-1.9-.9-1.9s.3-.7.8-1.8c.3-.6.6-1.3.9-2.1.3-.8.7-1.8 1.1-2.8 1.5-4.2 3-10.3 3.3-16.9.5-6.5-.2-13.5-1.2-18.8-.5-2.6-1.1-4.9-1.5-6.4-.5-1.6-.7-2.4-.7-2.4s.3.2.8.5c.5.4 1.2.9 2.1 1.5.9.7 2 1.5 3.2 2.5 1.2 1 2.6 2.2 4 3.5 5.7 5.3 12.5 13.2 17.5 22.3 2.5 4.5 4.7 9.3 6.3 13.8 1.7 4.6 2.7 9 3.6 12.8.7 3.8 1.1 7 1.4 9.3.2 2.3.3 3.5.3 3.5s-.1.2-.4.5c-.3.4-.6.9-1.1 1.5-1 1.3-2.3 3.2-4.1 4.8-3.4 3.5-8 8.2-12.6 12.9-9.2 9.7-18.3 19.1-18.3 19.1zM345.1 254v-66.3l36.5-37.7v66.3z"/></g><g opacity=".25" fill="#434343"><path d="M32.9 50.5c-9.7 0-17.6-7.9-17.6-17.6 0-1.2.1-2.4.4-3.6 1.7 8 8.7 14 17.2 14H74l216.5 7.2H32.9zM381 203.7c0 9.7-7.9 17.6-17.6 17.6-1.2 0-2.4-.1-3.6-.4 8-1.7 14-8.7 14-17.2v-98h7.2v98z"/><path d="M373.8 105.7c0-49.9-33.3-90.3-83.2-90.3 54.3 0 90.4 43.8 90.4 90.3h-7.2z"/></g></svg>',
      width: 365,
      height: 205,
      stroke: 36,
      padding: 15,
      hasAngle: !0
    },
    straightBeam: {
      className: "",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 321.8 65.8"><circle fill="#B4B4B4" cx="32.9" cy="32.9" r="32.9"/><g fill="#77787C"><circle cx="10.4" cy="23.6" r="3.1"/><circle cx="55.4" cy="42.2" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="55.4" r="3.1"/><circle cx="42.2" cy="10.4" r="3.1"/></g><g fill="#77787C"><circle cx="23.6" cy="10.4" r="3.1"/><circle cx="42.2" cy="55.4" r="3.1"/></g><g fill="#77787C"><circle cx="10.4" cy="42.2" r="3.1"/><circle cx="55.4" cy="23.6" r="3.1"/></g><circle fill="#B4B4B4" cx="288.9" cy="32.9" r="32.9"/><g fill="#77787C"><circle cx="266.4" cy="23.6" r="3.1"/><circle cx="311.4" cy="42.2" r="3.1"/></g><g fill="#77787C"><circle cx="279.6" cy="55.4" r="3.1"/><circle cx="298.2" cy="10.4" r="3.1"/></g><g fill="#77787C"><circle cx="279.6" cy="10.4" r="3.1"/><circle cx="298.2" cy="55.4" r="3.1"/></g><g fill="#77787C"><circle cx="266.4" cy="42.2" r="3.1"/><circle cx="311.4" cy="23.6" r="3.1"/></g><path opacity=".25" fill="#434343" d="M313.5 40.8c0-9.7-7.9-17.6-17.6-17.6h-256c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h256c9.7 0 17.6-7.9 17.6-17.6z"/><path fill="#FFF" d="M306.5 32.9c0-9.7-7.9-17.6-17.6-17.6h-256c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h256c9.7 0 17.6-7.9 17.6-17.6z"/><g><clipPath id="b"><path id="a" d="M306.5 32.9c0-9.7-7.9-17.6-17.6-17.6h-256c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h256c9.7 0 17.6-7.9 17.6-17.6z"/></clipPath><g clip-path="url(#b)"><path fill="#DA4737" d="M105.4 51.2h-59L12.9 14.7h59zM207.2 51.2h-59l-33.5-36.5h59zM308.9 51.2h-59l-33.5-36.5h59z"/></g></g><path opacity=".25" fill="#434343" d="M15.3 32.9c0-1.2.1-2.4.4-3.6 1.7 8 8.7 14 17.2 14h256c8.5 0 15.6-6 17.2-14 .2 1.2.4 2.4.4 3.6 0 9.7-7.9 17.6-17.6 17.6h-256c-9.7 0-17.6-7.9-17.6-17.6z"/></svg>',
      width: 290,
      padding: 15,
      height: 36,
      hasAngle: !1
    },
    straightBeamInvertedShadow: {
      className: "",
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="180 20.4 321.8 65.8"><circle fill="#B4B4B4" cx="212.9" cy="53.3" r="32.9"/><circle fill="#77787C" cx="190.4" cy="44" r="3.1"/><circle fill="#77787C" cx="235.4" cy="62.6" r="3.1"/><circle fill="#77787C" cx="203.6" cy="75.8" r="3.1"/><circle fill="#77787C" cx="222.2" cy="30.8" r="3.1"/><circle fill="#77787C" cx="203.6" cy="30.8" r="3.1"/><circle fill="#77787C" cx="222.2" cy="75.8" r="3.1"/><circle fill="#77787C" cx="190.4" cy="62.6" r="3.1"/><circle fill="#77787C" cx="235.4" cy="44" r="3.1"/><circle fill="#B4B4B4" cx="468.9" cy="53.3" r="32.9"/><circle fill="#77787C" cx="446.4" cy="44" r="3.1"/><circle fill="#77787C" cx="491.4" cy="62.6" r="3.1"/><circle fill="#77787C" cx="459.6" cy="75.8" r="3.1"/><circle fill="#77787C" cx="478.2" cy="30.8" r="3.1"/><g fill="#77787C"><circle cx="459.6" cy="30.8" r="3.1"/><circle cx="478.2" cy="75.8" r="3.1"/></g><g fill="#77787C"><circle cx="446.4" cy="62.6" r="3.1"/><circle cx="491.4" cy="44" r="3.1"/></g><path opacity=".25" fill="#434343" d="M479.5 61.2c0-9.7-7.9-17.6-17.6-17.6h-256c-9.7 0-17.6 7.9-17.6 17.6s7.9 17.6 17.6 17.6h256c9.7 0 17.6-7.9 17.6-17.6z"/><path fill="#FFF" d="M486.5 53.3c0-9.7-7.9-17.6-17.6-17.6h-256c-9.7 0-17.6 7.9-17.6 17.6s7.9 17.6 17.6 17.6h256c9.7 0 17.6-7.9 17.6-17.6z"/><clipPath id="straight-beam-inverted-shadow-b"><path id="straight-beam-inverted-shadow-a" d="M486.5 53.3c0-9.7-7.9-17.6-17.6-17.6h-256c-9.7 0-17.6 7.9-17.6 17.6s7.9 17.6 17.6 17.6h256c9.7 0 17.6-7.9 17.6-17.6z"/></clipPath><path clip-path="url(#straight-beam-inverted-shadow-b)" fill="#DA4737" d="M285.4 71.6h-59l-33.5-36.5h59l33.5 36.5zm101.8 0h-59l-33.5-36.5h59l33.5 36.5zm101.7 0h-59l-33.5-36.5h59l33.5 36.5z"/><path opacity=".25" fill="#434343" d="M195.3 53.3c0-1.2.1-2.4.4-3.6 1.7 8 8.7 14 17.2 14h256c8.5 0 15.6-6 17.2-14 .2 1.2.4 2.4.4 3.6 0 9.7-7.9 17.6-17.6 17.6h-256c-9.7 0-17.6-7.9-17.6-17.6z"/></svg>',
      width: 290,
      padding: 15,
      height: 36,
      hasAngle: !1
    },
    conveyorBelt: {
      className: "js-object-conveyorBelt object--conveyorBelt conveyor",
      innerHTML: '\n      <div class="conveyor__belt">\n        <div class="conveyor__wheel conveyor__wheel--first">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle fill="#ED6D23" cx="32" cy="32" r="32"/><path fill="#FFF" d="M62.8 23.6c.3 8-2.6 16.1-8.7 22.2-9.2 9.2-24.2 9.2-33.5 0-7.3-7.3-7.3-19.1 0-26.3 2.8-2.8 6.4-4.3 10.3-4.3 3.9 0 7.6 1.5 10.3 4.3 2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8c-1.7 1.7-3.8 2.6-6.2 2.6-2.3 0-4.5-.9-6.2-2.6a6.64 6.64 0 0 1 0-9.4c1-1 2.2-1.5 3.6-1.5 1.3 0 2.6.5 3.5 1.5.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1.1 2.6c-1 1-2.7 1-3.7 0-.7-.7-.7-1.9 0-2.5.6-.6.6-1.6 0-2.3-.6-.6-1.6-.6-2.3 0-1.9 1.9-1.9 5.2 0 7.1 2.3 2.3 6 2.3 8.3 0 1.3-1.3 2-3 2-4.9 0-1.8-.7-3.6-2-4.9-1.6-1.6-3.6-2.4-5.8-2.4s-4.3.9-5.8 2.4c-3.8 3.8-3.8 10.1 0 14 2.3 2.3 5.3 3.5 8.4 3.5 3.2 0 6.2-1.2 8.4-3.5 2.7-2.7 4.3-6.4 4.3-10.3s-1.5-7.5-4.3-10.3C40 13.8 35.6 12 30.8 12c-4.7 0-9.2 1.8-12.6 5.2-8.5 8.5-8.5 22.3 0 30.8 10.5 10.5 27.5 10.5 38 0 3.1-3.1 5.5-6.7 7.1-10.5.3-1.8.5-3.7.5-5.6.1-2.8-.3-5.6-1-8.3z"/></svg>\n        </div>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="151.4 -7 388.4 81.4"><path class="js-belt-shadow-path belt shadow" opacity=".25" fill="none" stroke="#424242" stroke-width="8" stroke-miterlimit="10" stroke-dasharray="24" d="M535.8 38.7c0 17.5-14.2 31.7-31.7 31.7h-307c-17.5-.1-31.7-14.2-31.7-31.7S179.6 7 197.1 7h307.1c17.5 0 31.6 14.2 31.6 31.7"/><g class="wheelshadow" opacity=".25"><circle fill="#424242" cx="196.7" cy="38.4" r="32"/><circle fill="#424242" cx="503.8" cy="38.4" r="32"/></g><path class="js-belt-path belt" fill="none" stroke="#F9CE1D" stroke-width="8" stroke-miterlimit="10" stroke-dasharray="24" d="M530.4 33.4c0 17.5-14.2 31.7-31.7 31.7h-307C174.2 65 160 50.9 160 33.4s14.2-31.7 31.7-31.7h307.1c17.5 0 31.6 14.2 31.6 31.7"/></svg>\n        <div class="conveyor__wheel conveyor__wheel--last">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle fill="#3BB34A" cx="32" cy="32" r="32"/><path fill="#FFF" d="M1.1 23.6c-.3 8 2.6 16.1 8.7 22.2C19 55 34 55 43.3 45.8c7.3-7.3 7.3-19.1 0-26.3-2.8-2.8-6.4-4.3-10.3-4.3s-7.6 1.5-10.3 4.3c-2.1 2.1-3.3 5-3.3 8s1.2 5.9 3.3 8c1.7 1.7 3.8 2.6 6.2 2.6 2.3 0 4.5-.9 6.2-2.6 2.6-2.6 2.6-6.8 0-9.4-1-1-2.2-1.5-3.6-1.5-1.3 0-2.6.5-3.5 1.5-.7.7-1.1 1.6-1.1 2.6s.4 1.9 1.1 2.6c1 1 2.7 1 3.7 0 .7-.7.7-1.9 0-2.5-.6-.6-.6-1.6 0-2.3.6-.6 1.6-.6 2.3 0 1.9 1.9 1.9 5.2 0 7.1-2.3 2.3-6 2.3-8.3 0-1.3-1.3-2-3-2-4.9 0-1.8.7-3.6 2-4.9 1.6-1.6 3.6-2.4 5.8-2.4 2.2 0 4.3.9 5.8 2.4 3.8 3.8 3.8 10.1 0 14-2.3 2.3-5.3 3.5-8.4 3.5-3.2 0-6.2-1.2-8.4-3.5-2.7-2.7-4.3-6.4-4.3-10.3s1.5-7.5 4.3-10.3c3.4-3.4 7.8-5.2 12.6-5.2 4.7 0 9.2 1.8 12.6 5.2 8.5 8.5 8.5 22.3 0 30.8-10.5 10.5-27.5 10.5-38 0-3.1-3.1-5.5-6.7-7.1-10.5-.3-1.8-.5-3.7-.5-5.6-.1-2.8.3-5.6 1-8.3z"/></svg>\n        </div>\n      </div>\n      <div class="object__rotate-handle js-rotate-handle">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 34.7"><circle opacity=".25" fill="#424242" cx="20.9" cy="20.9" r="13.9"/><circle fill="#E91C24" cx="13.9" cy="13.9" r="13.9"/><g fill="none" stroke="#FFF" stroke-width="2" stroke-miterlimit="10"><path d="M17.5 8.4c1.9 1.3 2.9 3.3 2.9 5.5 0 3.6-2.9 6.6-6.6 6.6s-6.6-2.9-6.6-6.6 2.9-6.6 6.6-6.6"/><path d="M10.7 5.3l3.2 2-2 3.1"/></g></svg>\n      </div>',
      width: 380,
      height: 70,
      padding: 5
    },
    spring: {
      className: "js-object-spring object--spring",
      innerHTML: '\n      <div class="spring">\n        <div class="spring__top">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.1 11.8"><path fill="#D32E2E" d="M64.3 11.8H11.8C5.3 11.8 0 6.5 0 0h76.1c0 6.5-5.3 11.8-11.8 11.8z"/></svg>\n        </div>\n        <div class="spring__bottom">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.1 87.7">\n            <g opacity=".1"><path fill="none" stroke="#010101" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" d="M68.7 33l-51.5-6.6M68.7 19.8l-51.5-6.6M68.7 46.2l-51.5-6.6M68.7 59.4l-51.5-6.6M68.7 72.6L17.2 66M68.7 85.8l-51.5-6.6M17.2 26.4l51.5-6.6M17.2 39.6L68.7 33M17.2 52.8l51.5-6.6M17.2 66l51.5-6.6M17.2 79.2l51.5-6.6M42.9 89.1l25.8-3.3"/><path fill="#010101" d="M69.2 16.7H16.7c-6.5 0-11.8-5.3-11.8-11.8H81c0 6.5-5.3 11.8-11.8 11.8z"/></g><g fill="none" stroke="#CDCCCC" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10"><path d="M63.8 28.1l-51.5-6.6M63.8 14.9L12.3 8.3M63.8 41.3l-51.5-6.6M63.8 54.5l-51.5-6.6M63.8 67.7l-51.5-6.6M63.8 80.9l-51.5-6.6"/></g><g fill="none" stroke="#FFF" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10"><path d="M12.3 21.5l51.5-6.6M12.3 34.7l51.5-6.6M12.3 47.9l51.5-6.6M12.3 61.1l51.5-6.6M12.3 74.3l51.5-6.6M38 84.2l25.8-3.3"/></g>\n          </svg>\n        </div>\n      </div>\n      <div class="object__rotate-handle js-rotate-handle">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 34.7"><circle opacity=".25" fill="#424242" cx="20.9" cy="20.9" r="13.9"/><circle fill="#E91C24" cx="13.9" cy="13.9" r="13.9"/><g fill="none" stroke="#FFF" stroke-width="2" stroke-miterlimit="10"><path d="M17.5 8.4c1.9 1.3 2.9 3.3 2.9 5.5 0 3.6-2.9 6.6-6.6 6.6s-6.6-2.9-6.6-6.6 2.9-6.6 6.6-6.6"/><path d="M10.7 5.3l3.2 2-2 3.1"/></g></svg>\n      </div>',
      height: 80,
      width: 75
    }
  };
  function I(a) {
    this.doTrack = !1;
    this.id = a;
    this.freeCount = this.getCount = this.createCount = 0;
    this.creates = {};
    this.gets = {};
    this.frees = {};
    this.callers = [];
    I.trackers.push(this);
    I.trackersByID[a] = this;
  }
  I.trackers = [];
  I.trackersByID = {};
  I.ENABLED = !1;
  I.ENABLED || (I.dummyTracker = new I("NotTracking"));
  I.get = function (a) {
    if (!I.ENABLED) return I.dummyTracker;
    var b = I.trackersByID[a];
    null == b && (b = new I(a));
    return b;
  };
  I.logStatsToConsole = function () {
    for (var a = 0; a < I.trackers.length; a++) {
      var b = I.trackers[a],
        d = b.getCount - b.freeCount;
      window.console.log(b.id + ": " + b.createCount + "; " + b.getCount + " - " + b.freeCount + " = " + d + (0 < d ? " (" + Math.round(d / b.getCount * 1E4) / 100 + "%)" : ""));
    }
  };
  I.prototype.trackCreate = function () {
    I.ENABLED && (this.createCount++, this.doTrack && this.increment(this.creates, this.getCallers()));
  };
  I.prototype.trackGet = function () {
    I.ENABLED && (this.getCount++, this.doTrack && this.increment(this.gets, this.getCallers()));
  };
  I.prototype.trackFree = function () {
    I.ENABLED && (this.freeCount++, this.doTrack && this.increment(this.frees, this.getCallers()));
  };
  I.prototype.getOffenders = function () {
    for (var a = [], b = 0; b < this.callers.length; b++) {
      var d = this.gets[this.callers[b]] - this.frees[this.callers[b]];
      0 != d && a.push(this.callers[b] + " = " + d);
    }
    return a;
  };
  I.prototype.increment = function (a, b) {
    for (var d = 0; d < b.length; d++) {
      var e = b[d];
      null == a[e] && (this.gets[e] = 0, this.frees[e] = 0, this.creates[e] = 0, this.callers.push(e));
      a[e]++;
    }
  };
  I.prototype.getCallers = function () {
    var a = ["unknown"];
    try {
      this.nonMethod();
    } catch (d) {
      var b = d.stack.match(/[A-Za-z0-9]+\.js:\d+:\d+/g).splice(3);
      0 != b.length && (a = b);
    }
    return a;
  };
  var L = {
    Common: {}
  };
  L.Common.Math = {};
  L.Common.Math.b2Vec2 = function (a, b) {
    I.get("Box2D.Common.Math.b2Vec2").trackCreate();
    this.x = a;
    this.y = b;
  };
  L.Common.Math.b2Vec2._freeCache = [];
  L.Common.Math.b2Vec2.Get = function (a, b) {
    I.get("Box2D.Common.Math.b2Vec2").trackGet();
    if (0 < L.Common.Math.b2Vec2._freeCache.length) {
      var d = L.Common.Math.b2Vec2._freeCache.pop();
      d.Set(a, b);
      return d;
    }
    return new L.Common.Math.b2Vec2(a, b);
  };
  L.Common.Math.b2Vec2.Free = function (a) {
    null != a && (I.get("Box2D.Common.Math.b2Vec2").trackFree(), L.Common.Math.b2Vec2._freeCache.push(a));
  };
  L.Common.Math.b2Vec2.prototype.SetZero = function () {
    this.y = this.x = 0;
  };
  L.Common.Math.b2Vec2.prototype.Set = function (a, b) {
    this.x = a;
    this.y = b;
  };
  L.Common.Math.b2Vec2.prototype.SetV = function (a) {
    this.x = a.x;
    this.y = a.y;
  };
  L.Common.Math.b2Vec2.prototype.GetNegative = function () {
    return L.Common.Math.b2Vec2.Get(-this.x, -this.y);
  };
  L.Common.Math.b2Vec2.prototype.NegativeSelf = function () {
    this.x = -this.x;
    this.y = -this.y;
  };
  L.Common.Math.b2Vec2.prototype.Copy = function () {
    return L.Common.Math.b2Vec2.Get(this.x, this.y);
  };
  L.Common.Math.b2Vec2.prototype.Add = function (a) {
    this.x += a.x;
    this.y += a.y;
  };
  L.Common.Math.b2Vec2.prototype.Subtract = function (a) {
    this.x -= a.x;
    this.y -= a.y;
  };
  L.Common.Math.b2Vec2.prototype.Multiply = function (a) {
    this.x *= a;
    this.y *= a;
  };
  L.Common.Math.b2Vec2.prototype.MulM = function (a) {
    var b = this.x;
    this.x = a.col1.x * b + a.col2.x * this.y;
    this.y = a.col1.y * b + a.col2.y * this.y;
  };
  L.Common.Math.b2Vec2.prototype.MulTM = function (a) {
    var b = this.x * a.col1.x + this.y * a.col1.y;
    this.y = this.x * a.col2.x + this.y * a.col2.y;
    this.x = b;
  };
  L.Common.Math.b2Vec2.prototype.CrossVF = function (a) {
    var b = this.x;
    this.x = a * this.y;
    this.y = -a * b;
  };
  L.Common.Math.b2Vec2.prototype.CrossFV = function (a) {
    var b = this.x;
    this.x = -a * this.y;
    this.y = a * b;
  };
  L.Common.Math.b2Vec2.prototype.MinV = function (a) {
    this.x = Math.min(this.x, a.x);
    this.y = Math.min(this.y, a.y);
  };
  L.Common.Math.b2Vec2.prototype.MaxV = function (a) {
    this.x = Math.max(this.x, a.x);
    this.y = Math.max(this.y, a.y);
  };
  L.Common.Math.b2Vec2.prototype.Abs = function () {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
  };
  L.Common.Math.b2Vec2.prototype.Length = function () {
    return Math.sqrt(this.LengthSquared());
  };
  L.Common.Math.b2Vec2.prototype.LengthSquared = function () {
    return this.x * this.x + this.y * this.y;
  };
  L.Common.Math.b2Vec2.prototype.Normalize = function () {
    var a = this.Length();
    if (a < Number.MIN_VALUE) return 0;
    var b = 1 / a;
    this.x *= b;
    this.y *= b;
    return a;
  };
  L.Common.Math.b2Vec2.prototype.IsValid = function () {
    return isFinite(this.x) && isFinite(this.y);
  };
  L.Dynamics = {};
  L.Dynamics.b2BodyDef = function () {
    I.get("Box2D.Dynamics.b2BodyDef").trackCreate();
    this.position = L.Common.Math.b2Vec2.Get(0, 0);
    this.linearVelocity = L.Common.Math.b2Vec2.Get(0, 0);
    this.angularDamping = this.linearDamping = this.angularVelocity = this.angle = 0;
    this.awake = this.allowSleep = !0;
    this.bullet = this.fixedRotation = !1;
    this.type = L.Dynamics.b2BodyDef.b2_staticBody;
    this.active = !0;
    this.inertiaScale = 1;
  };
  L.Dynamics.b2BodyDef.b2_staticBody = 0;
  L.Dynamics.b2BodyDef.b2_kinematicBody = 1;
  L.Dynamics.b2BodyDef.b2_dynamicBody = 2;
  L.Common.b2Settings = {};
  L.Common.b2Settings.b2MixFriction = function (a, b) {
    return Math.sqrt(a * b);
  };
  L.Common.b2Settings.b2MixRestitution = function (a, b) {
    return a > b ? a : b;
  };
  L.Common.b2Settings.b2Assert = function (a) {
    if (!a) throw "Assertion Failed";
  };
  L.Common.b2Settings.VERSION = "2.1alpha-illandril";
  L.Common.b2Settings.USHRT_MAX = 65535;
  L.Common.b2Settings.b2_maxManifoldPoints = 2;
  L.Common.b2Settings.b2_aabbExtension = .1;
  L.Common.b2Settings.b2_aabbMultiplier = 2;
  L.Common.b2Settings.b2_polygonRadius = 2 * L.Common.b2Settings.b2_linearSlop;
  L.Common.b2Settings.b2_linearSlop = .005;
  L.Common.b2Settings.b2_angularSlop = 2 / 180 * Math.PI;
  L.Common.b2Settings.b2_toiSlop = 8 * L.Common.b2Settings.b2_linearSlop;
  L.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
  L.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
  L.Common.b2Settings.b2_velocityThreshold = 1;
  L.Common.b2Settings.b2_maxLinearCorrection = .2;
  L.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * Math.PI;
  L.Common.b2Settings.b2_maxTranslation = 2;
  L.Common.b2Settings.b2_maxTranslationSquared = L.Common.b2Settings.b2_maxTranslation * L.Common.b2Settings.b2_maxTranslation;
  L.Common.b2Settings.b2_maxRotation = .5 * Math.PI;
  L.Common.b2Settings.b2_maxRotationSquared = L.Common.b2Settings.b2_maxRotation * L.Common.b2Settings.b2_maxRotation;
  L.Common.b2Settings.b2_contactBaumgarte = .2;
  L.Common.b2Settings.b2_timeToSleep = .5;
  L.Common.b2Settings.b2_linearSleepTolerance = .01;
  L.Common.b2Settings.b2_linearSleepToleranceSquared = L.Common.b2Settings.b2_linearSleepTolerance * L.Common.b2Settings.b2_linearSleepTolerance;
  L.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * Math.PI;
  L.Common.b2Settings.b2_angularSleepToleranceSquared = L.Common.b2Settings.b2_angularSleepTolerance * L.Common.b2Settings.b2_angularSleepTolerance;
  L.Common.b2Settings.MIN_VALUE_SQUARED = Number.MIN_VALUE * Number.MIN_VALUE;
  L.Common.Math.b2Mat22 = function () {
    I.get("Box2D.Common.Math.b2Mat22").trackCreate();
    this.col1 = L.Common.Math.b2Vec2.Get(0, 0);
    this.col2 = L.Common.Math.b2Vec2.Get(0, 0);
    this.SetIdentity();
  };
  L.Common.Math.b2Mat22._freeCache = [];
  L.Common.Math.b2Mat22.Get = function () {
    I.get("Box2D.Common.Math.b2Mat22").trackGet();
    if (0 < L.Common.Math.b2Mat22._freeCache.length) {
      var a = L.Common.Math.b2Mat22._freeCache.pop();
      a.SetZero();
      return a;
    }
    return new L.Common.Math.b2Mat22();
  };
  L.Common.Math.b2Mat22.Free = function (a) {
    null != a && (I.get("Box2D.Common.Math.b2Mat22").trackFree(), L.Common.Math.b2Mat22._freeCache.push(a));
  };
  L.Common.Math.b2Mat22.FromAngle = function (a) {
    var b = L.Common.Math.b2Mat22.Get();
    b.Set(a);
    return b;
  };
  L.Common.Math.b2Mat22.FromVV = function (a, b) {
    var d = L.Common.Math.b2Mat22.Get();
    d.SetVV(a, b);
    return d;
  };
  L.Common.Math.b2Mat22.prototype.Set = function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.col1.Set(b, a);
    this.col2.Set(-a, b);
  };
  L.Common.Math.b2Mat22.prototype.SetVV = function (a, b) {
    this.col1.SetV(a);
    this.col2.SetV(b);
  };
  L.Common.Math.b2Mat22.prototype.Copy = function () {
    var a = L.Common.Math.b2Mat22.Get();
    a.SetM(this);
    return a;
  };
  L.Common.Math.b2Mat22.prototype.SetM = function (a) {
    this.col1.SetV(a.col1);
    this.col2.SetV(a.col2);
  };
  L.Common.Math.b2Mat22.prototype.AddM = function (a) {
    this.col1.Add(a.col1);
    this.col2.Add(a.col2);
  };
  L.Common.Math.b2Mat22.prototype.SetIdentity = function () {
    this.col1.Set(1, 0);
    this.col2.Set(0, 1);
  };
  L.Common.Math.b2Mat22.prototype.SetZero = function () {
    this.col1.Set(0, 0);
    this.col2.Set(0, 0);
  };
  L.Common.Math.b2Mat22.prototype.GetAngle = function () {
    return Math.atan2(this.col1.y, this.col1.x);
  };
  L.Common.Math.b2Mat22.prototype.GetInverse = function (a) {
    var b = this.col1.x * this.col2.y - this.col2.x * this.col1.y;
    0 !== b && (b = 1 / b);
    a.col1.x = b * this.col2.y;
    a.col2.x = -b * this.col2.x;
    a.col1.y = -b * this.col1.y;
    a.col2.y = b * this.col1.x;
    return a;
  };
  L.Common.Math.b2Mat22.prototype.Solve = function (a, b, d) {
    var e = this.col1.x * this.col2.y - this.col2.x * this.col1.y;
    0 !== e && (e = 1 / e);
    a.x = e * (this.col2.y * b - this.col2.x * d);
    a.y = e * (this.col1.x * d - this.col1.y * b);
    return a;
  };
  L.Common.Math.b2Mat22.prototype.Abs = function () {
    this.col1.Abs();
    this.col2.Abs();
  };
  L.Common.Math.b2Transform = function (a, b) {
    I.get("Box2D.Common.Math.b2Transform").trackCreate();
    this.position = L.Common.Math.b2Vec2.Get(0, 0);
    this.R = L.Common.Math.b2Mat22.Get();
    a && this.position.SetV(a);
    b && this.R.SetM(b);
  };
  L.Common.Math.b2Transform.prototype.Initialize = function (a, b) {
    this.position.SetV(a);
    this.R.SetM(b);
  };
  L.Common.Math.b2Transform.prototype.SetIdentity = function () {
    this.position.SetZero();
    this.R.SetIdentity();
  };
  L.Common.Math.b2Transform.prototype.Set = function (a) {
    this.position.SetV(a.position);
    this.R.SetM(a.R);
  };
  L.Common.Math.b2Transform.prototype.GetAngle = function () {
    return Math.atan2(this.R.col1.y, this.R.col1.x);
  };
  L.Common.Math.b2Sweep = function () {
    I.get("Box2D.Common.Math.b2Sweep").trackCreate();
    this.localCenter = L.Common.Math.b2Vec2.Get(0, 0);
    this.c0 = L.Common.Math.b2Vec2.Get(0, 0);
    this.c = L.Common.Math.b2Vec2.Get(0, 0);
    this.t0 = this.a = this.a0 = null;
  };
  L.Common.Math.b2Sweep.prototype.Set = function (a) {
    this.localCenter.SetV(a.localCenter);
    this.c0.SetV(a.c0);
    this.c.SetV(a.c);
    this.a0 = a.a0;
    this.a = a.a;
    this.t0 = a.t0;
  };
  L.Common.Math.b2Sweep.prototype.Copy = function () {
    var a = new L.Common.Math.b2Sweep();
    a.localCenter.SetV(this.localCenter);
    a.c0.SetV(this.c0);
    a.c.SetV(this.c);
    a.a0 = this.a0;
    a.a = this.a;
    a.t0 = this.t0;
    return a;
  };
  L.Common.Math.b2Sweep.prototype.GetTransform = function (a, b) {
    void 0 === b && (b = 0);
    a.position.x = (1 - b) * this.c0.x + b * this.c.x;
    a.position.y = (1 - b) * this.c0.y + b * this.c.y;
    a.R.Set((1 - b) * this.a0 + b * this.a);
    b = a.R;
    a.position.x -= b.col1.x * this.localCenter.x + b.col2.x * this.localCenter.y;
    a.position.y -= b.col1.y * this.localCenter.x + b.col2.y * this.localCenter.y;
  };
  L.Common.Math.b2Sweep.prototype.Advance = function (a) {
    void 0 === a && (a = 0);
    if (this.t0 < a && 1 - this.t0 > Number.MIN_VALUE) {
      var b = (a - this.t0) / (1 - this.t0);
      this.c0.x = (1 - b) * this.c0.x + b * this.c.x;
      this.c0.y = (1 - b) * this.c0.y + b * this.c.y;
      this.a0 = (1 - b) * this.a0 + b * this.a;
      this.t0 = a;
    }
  };
  L.Common.Math.b2Math = {};
  L.Common.Math.b2Math.Dot = function (a, b) {
    return a.x * b.x + a.y * b.y;
  };
  L.Common.Math.b2Math.CrossVV = function (a, b) {
    return a.x * b.y - a.y * b.x;
  };
  L.Common.Math.b2Math.CrossVF = function (a, b) {
    return L.Common.Math.b2Vec2.Get(b * a.y, -b * a.x);
  };
  L.Common.Math.b2Math.CrossFV = function (a, b) {
    return L.Common.Math.b2Vec2.Get(-a * b.y, a * b.x);
  };
  L.Common.Math.b2Math.MulMV = function (a, b) {
    return L.Common.Math.b2Vec2.Get(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y);
  };
  L.Common.Math.b2Math.MulTMV = function (a, b) {
    return L.Common.Math.b2Vec2.Get(L.Common.Math.b2Math.Dot(b, a.col1), L.Common.Math.b2Math.Dot(b, a.col2));
  };
  L.Common.Math.b2Math.MulX = function (a, b) {
    b = L.Common.Math.b2Math.MulMV(a.R, b);
    b.x += a.position.x;
    b.y += a.position.y;
    return b;
  };
  L.Common.Math.b2Math.MulXT = function (a, b) {
    b = L.Common.Math.b2Math.SubtractVV(b, a.position);
    var d = b.x * a.R.col1.x + b.y * a.R.col1.y;
    b.y = b.x * a.R.col2.x + b.y * a.R.col2.y;
    b.x = d;
    return b;
  };
  L.Common.Math.b2Math.AddVV = function (a, b) {
    return L.Common.Math.b2Vec2.Get(a.x + b.x, a.y + b.y);
  };
  L.Common.Math.b2Math.SubtractVV = function (a, b) {
    return L.Common.Math.b2Vec2.Get(a.x - b.x, a.y - b.y);
  };
  L.Common.Math.b2Math.Distance = function (a, b) {
    return Math.sqrt(L.Common.Math.b2Math.DistanceSquared(a, b));
  };
  L.Common.Math.b2Math.DistanceSquared = function (a, b) {
    var d = a.x - b.x;
    a = a.y - b.y;
    return d * d + a * a;
  };
  L.Common.Math.b2Math.MulFV = function (a, b) {
    return L.Common.Math.b2Vec2.Get(a * b.x, a * b.y);
  };
  L.Common.Math.b2Math.AddMM = function (a, b) {
    var d = L.Common.Math.b2Math.AddVV(a.col1, b.col1);
    a = L.Common.Math.b2Math.AddVV(a.col2, b.col2);
    b = L.Common.Math.b2Mat22.FromVV(d, a);
    L.Common.Math.b2Vec2.Free(d);
    L.Common.Math.b2Vec2.Free(a);
    return b;
  };
  L.Common.Math.b2Math.MulMM = function (a, b) {
    var d = L.Common.Math.b2Math.MulMV(a, b.col1);
    a = L.Common.Math.b2Math.MulMV(a, b.col2);
    b = L.Common.Math.b2Mat22.FromVV(d, a);
    L.Common.Math.b2Vec2.Free(d);
    L.Common.Math.b2Vec2.Free(a);
    return b;
  };
  L.Common.Math.b2Math.MulTMM = function (a, b) {
    var d = L.Common.Math.b2Vec2.Get(L.Common.Math.b2Math.Dot(a.col1, b.col1), L.Common.Math.b2Math.Dot(a.col2, b.col1));
    a = L.Common.Math.b2Vec2.Get(L.Common.Math.b2Math.Dot(a.col1, b.col2), L.Common.Math.b2Math.Dot(a.col2, b.col2));
    b = L.Common.Math.b2Mat22.FromVV(d, a);
    L.Common.Math.b2Vec2.Free(d);
    L.Common.Math.b2Vec2.Free(a);
    return b;
  };
  L.Common.Math.b2Math.AbsV = function (a) {
    return L.Common.Math.b2Vec2.Get(Math.abs(a.x), Math.abs(a.y));
  };
  L.Common.Math.b2Math.AbsM = function (a) {
    var b = L.Common.Math.b2Math.AbsV(a.col1);
    a = L.Common.Math.b2Math.AbsV(a.col2);
    var d = L.Common.Math.b2Mat22.FromVV(b, a);
    L.Common.Math.b2Vec2.Free(b);
    L.Common.Math.b2Vec2.Free(a);
    return d;
  };
  L.Common.Math.b2Math.Clamp = function (a, b, d) {
    return a < b ? b : a > d ? d : a;
  };
  L.Common.Math.b2Math.ClampV = function (a, b, d) {
    var e = L.Common.Math.b2Math.Clamp(a.x, b.x, d.x);
    a = L.Common.Math.b2Math.Clamp(a.y, b.y, d.y);
    return L.Common.Math.b2Vec2.Get(e, a);
  };
  L.Dynamics.Contacts = {};
  L.Dynamics.Contacts.b2ContactListNode = function (a) {
    this.contact = a;
    this.previous = this.next = null;
  };
  L.Dynamics.Contacts.b2ContactListNode.freeNodes = [];
  L.Dynamics.Contacts.b2ContactListNode.GetNode = function (a) {
    if (0 < L.Dynamics.Contacts.b2ContactListNode.freeNodes.length) {
      var b = L.Dynamics.Contacts.b2ContactListNode.freeNodes.pop();
      b.contact = a;
      return b;
    }
    return new L.Dynamics.Contacts.b2ContactListNode(a);
  };
  L.Dynamics.Contacts.b2ContactListNode.FreeNode = function (a) {
    a.next = null;
    a.previous = null;
    a.contact = null;
    L.Dynamics.Contacts.b2ContactListNode.freeNodes.push(a);
  };
  L.Dynamics.Contacts.b2ContactListNode.prototype.SetNextNode = function (a) {
    this.next = a;
  };
  L.Dynamics.Contacts.b2ContactListNode.prototype.SetPreviousNode = function (a) {
    this.previous = a;
  };
  L.Dynamics.Contacts.b2ContactListNode.prototype.GetContact = function () {
    return this.contact;
  };
  L.Dynamics.Contacts.b2ContactListNode.prototype.GetNextNode = function () {
    return this.next;
  };
  L.Dynamics.Contacts.b2ContactListNode.prototype.GetPreviousNode = function () {
    return this.previous;
  };
  c.debug = {};
  c.debug.Error = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, c.debug.Error);else {
      const a = Error().stack;
      a && (this.stack = a);
    }
    a && (this.message = String(a));
    this.reportErrorToServer = !0;
  };
  c.inherits(c.debug.Error, Error);
  c.debug.Error.prototype.name = "CustomError";
  c.dom = {};
  c.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
  };
  c.asserts = {};
  c.asserts.ENABLE_ASSERTS = c.DEBUG;
  c.asserts.AssertionError = function (a, b) {
    c.debug.Error.call(this, c.asserts.subs_(a, b));
    this.messagePattern = a;
  };
  c.inherits(c.asserts.AssertionError, c.debug.Error);
  c.asserts.AssertionError.prototype.name = "AssertionError";
  c.asserts.DEFAULT_ERROR_HANDLER = function (a) {
    throw a;
  };
  c.asserts.errorHandler_ = c.asserts.DEFAULT_ERROR_HANDLER;
  c.asserts.subs_ = function (a, b) {
    a = a.split("%s");
    for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
    return d + a[e];
  };
  c.asserts.doAssertFailure_ = function (a, b, d, e) {
    var f = "Assertion failed";
    if (d) {
      f += ": " + d;
      var g = e;
    } else a && (f += ": " + a, g = b);
    a = new c.asserts.AssertionError("" + f, g || []);
    c.asserts.errorHandler_(a);
  };
  c.asserts.setErrorHandler = function (a) {
    c.asserts.ENABLE_ASSERTS && (c.asserts.errorHandler_ = a);
  };
  c.asserts.assert = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && !a && c.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertExists = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && null == a && c.asserts.doAssertFailure_("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.fail = function (a, b) {
    c.asserts.ENABLE_ASSERTS && c.asserts.errorHandler_(new c.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
  };
  c.asserts.assertNumber = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && "number" !== typeof a && c.asserts.doAssertFailure_("Expected number but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertString = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && "string" !== typeof a && c.asserts.doAssertFailure_("Expected string but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertFunction = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && !c.isFunction(a) && c.asserts.doAssertFailure_("Expected function but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertObject = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && !c.isObject(a) && c.asserts.doAssertFailure_("Expected object but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertArray = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && !Array.isArray(a) && c.asserts.doAssertFailure_("Expected array but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertBoolean = function (a, b, d) {
    c.asserts.ENABLE_ASSERTS && "boolean" !== typeof a && c.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertElement = function (a, b, d) {
    !c.asserts.ENABLE_ASSERTS || c.isObject(a) && a.nodeType == c.dom.NodeType.ELEMENT || c.asserts.doAssertFailure_("Expected Element but got %s: %s.", [c.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertInstanceof = function (a, b, d, e) {
    !c.asserts.ENABLE_ASSERTS || a instanceof b || c.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [c.asserts.getType_(b), c.asserts.getType_(a)], d, Array.prototype.slice.call(arguments, 3));
    return a;
  };
  c.asserts.assertFinite = function (a, b, d) {
    !c.asserts.ENABLE_ASSERTS || "number" == typeof a && isFinite(a) || c.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a], b, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  c.asserts.assertObjectPrototypeIsIntact = function () {
    for (var a in Object.prototype) c.asserts.fail(a + " should not be enumerable in Object.prototype.");
  };
  c.asserts.getType_ = function (a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
  };
  c.array = {};
  c.NATIVE_ARRAY_PROTOTYPES = c.TRUSTED_SITE;
  c.array.ASSUME_NATIVE_FUNCTIONS = 2012 < c.FEATURESET_YEAR;
  c.array.peek = function (a) {
    return a[a.length - 1];
  };
  c.array.last = c.array.peek;
  c.array.indexOf = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    return Array.prototype.indexOf.call(a, b, d);
  } : function (a, b, d) {
    d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, d);
    for (; d < a.length; d++) if (d in a && a[d] === b) return d;
    return -1;
  };
  c.array.lastIndexOf = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    return Array.prototype.lastIndexOf.call(a, b, null == d ? a.length - 1 : d);
  } : function (a, b, d) {
    d = null == d ? a.length - 1 : d;
    0 > d && (d = Math.max(0, a.length + d));
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, d);
    for (; 0 <= d; d--) if (d in a && a[d] === b) return d;
    return -1;
  };
  c.array.forEach = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    Array.prototype.forEach.call(a, b, d);
  } : function (a, b, d) {
    for (var e = a.length, f = "string" === typeof a ? a.split("") : a, g = 0; g < e; g++) g in f && b.call(d, f[g], g, a);
  };
  c.array.forEachRight = function (a, b, d) {
    var e = a.length,
      f = "string" === typeof a ? a.split("") : a;
    for (--e; 0 <= e; --e) e in f && b.call(d, f[e], e, a);
  };
  c.array.filter = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    return Array.prototype.filter.call(a, b, d);
  } : function (a, b, d) {
    for (var e = a.length, f = [], g = 0, h = "string" === typeof a ? a.split("") : a, m = 0; m < e; m++) if (m in h) {
      var n = h[m];
      b.call(d, n, m, a) && (f[g++] = n);
    }
    return f;
  };
  c.array.map = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    return Array.prototype.map.call(a, b, d);
  } : function (a, b, d) {
    for (var e = a.length, f = Array(e), g = "string" === typeof a ? a.split("") : a, h = 0; h < e; h++) h in g && (f[h] = b.call(d, g[h], h, a));
    return f;
  };
  c.array.reduce = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (a, b, d, e) {
    c.asserts.assert(null != a.length);
    e && (b = c.bind(b, e));
    return Array.prototype.reduce.call(a, b, d);
  } : function (a, b, d, e) {
    var f = d;
    c.array.forEach(a, function (d, h) {
      f = b.call(e, f, d, h, a);
    });
    return f;
  };
  c.array.reduceRight = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (a, b, d, e) {
    c.asserts.assert(null != a.length);
    c.asserts.assert(null != b);
    e && (b = c.bind(b, e));
    return Array.prototype.reduceRight.call(a, b, d);
  } : function (a, b, d, e) {
    var f = d;
    c.array.forEachRight(a, function (d, h) {
      f = b.call(e, f, d, h, a);
    });
    return f;
  };
  c.array.some = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    return Array.prototype.some.call(a, b, d);
  } : function (a, b, d) {
    for (var e = a.length, f = "string" === typeof a ? a.split("") : a, g = 0; g < e; g++) if (g in f && b.call(d, f[g], g, a)) return !0;
    return !1;
  };
  c.array.every = c.NATIVE_ARRAY_PROTOTYPES && (c.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (a, b, d) {
    c.asserts.assert(null != a.length);
    return Array.prototype.every.call(a, b, d);
  } : function (a, b, d) {
    for (var e = a.length, f = "string" === typeof a ? a.split("") : a, g = 0; g < e; g++) if (g in f && !b.call(d, f[g], g, a)) return !1;
    return !0;
  };
  c.array.count = function (a, b, d) {
    var e = 0;
    c.array.forEach(a, function (a, g, h) {
      b.call(d, a, g, h) && ++e;
    }, d);
    return e;
  };
  c.array.find = function (a, b, d) {
    b = c.array.findIndex(a, b, d);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  };
  c.array.findIndex = function (a, b, d) {
    for (var e = a.length, f = "string" === typeof a ? a.split("") : a, g = 0; g < e; g++) if (g in f && b.call(d, f[g], g, a)) return g;
    return -1;
  };
  c.array.findRight = function (a, b, d) {
    b = c.array.findIndexRight(a, b, d);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  };
  c.array.findIndexRight = function (a, b, d) {
    var e = a.length,
      f = "string" === typeof a ? a.split("") : a;
    for (--e; 0 <= e; e--) if (e in f && b.call(d, f[e], e, a)) return e;
    return -1;
  };
  c.array.contains = function (a, b) {
    return 0 <= c.array.indexOf(a, b);
  };
  c.array.isEmpty = function (a) {
    return 0 == a.length;
  };
  c.array.clear = function (a) {
    if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
  };
  c.array.insert = function (a, b) {
    c.array.contains(a, b) || a.push(b);
  };
  c.array.insertAt = function (a, b, d) {
    c.array.splice(a, d, 0, b);
  };
  c.array.insertArrayAt = function (a, b, d) {
    c.partial(c.array.splice, a, d, 0).apply(null, b);
  };
  c.array.insertBefore = function (a, b, d) {
    var e;
    2 == arguments.length || 0 > (e = c.array.indexOf(a, d)) ? a.push(b) : c.array.insertAt(a, b, e);
  };
  c.array.remove = function (a, b) {
    b = c.array.indexOf(a, b);
    var d;
    (d = 0 <= b) && c.array.removeAt(a, b);
    return d;
  };
  c.array.removeLast = function (a, b) {
    b = c.array.lastIndexOf(a, b);
    return 0 <= b ? (c.array.removeAt(a, b), !0) : !1;
  };
  c.array.removeAt = function (a, b) {
    c.asserts.assert(null != a.length);
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  };
  c.array.removeIf = function (a, b, d) {
    b = c.array.findIndex(a, b, d);
    return 0 <= b ? (c.array.removeAt(a, b), !0) : !1;
  };
  c.array.removeAllIf = function (a, b, d) {
    var e = 0;
    c.array.forEachRight(a, function (f, g) {
      b.call(d, f, g, a) && c.array.removeAt(a, g) && e++;
    });
    return e;
  };
  c.array.concat = function (a) {
    return Array.prototype.concat.apply([], arguments);
  };
  c.array.join = function (a) {
    return Array.prototype.concat.apply([], arguments);
  };
  c.array.toArray = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var d = Array(b), e = 0; e < b; e++) d[e] = a[e];
      return d;
    }
    return [];
  };
  c.array.clone = c.array.toArray;
  c.array.extend = function (a, b) {
    for (var d = 1; d < arguments.length; d++) {
      var e = arguments[d];
      if (c.isArrayLike(e)) {
        var f = a.length || 0,
          g = e.length || 0;
        a.length = f + g;
        for (var h = 0; h < g; h++) a[f + h] = e[h];
      } else a.push(e);
    }
  };
  c.array.splice = function (a, b, d, e) {
    c.asserts.assert(null != a.length);
    return Array.prototype.splice.apply(a, c.array.slice(arguments, 1));
  };
  c.array.slice = function (a, b, d) {
    c.asserts.assert(null != a.length);
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, d);
  };
  c.array.removeDuplicates = function (a, b, d) {
    function e(a) {
      return c.isObject(a) ? "o" + c.getUid(a) : (typeof a).charAt(0) + a;
    }
    b = b || a;
    d = d || e;
    for (var f = {}, g = 0, h = 0; h < a.length;) {
      var m = a[h++],
        n = d(m);
      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = !0, b[g++] = m);
    }
    b.length = g;
  };
  c.array.binarySearch = function (a, b, d) {
    return c.array.binarySearch_(a, d || c.array.defaultCompare, !1, b);
  };
  c.array.binarySelect = function (a, b, d) {
    return c.array.binarySearch_(a, b, !0, void 0, d);
  };
  c.array.binarySearch_ = function (a, b, d, e, f) {
    for (var g = 0, h = a.length, m; g < h;) {
      var n = g + (h - g >>> 1);
      var p = d ? b.call(f, a[n], n, a) : b(e, a[n]);
      0 < p ? g = n + 1 : (h = n, m = !p);
    }
    return m ? g : -g - 1;
  };
  c.array.sort = function (a, b) {
    a.sort(b || c.array.defaultCompare);
  };
  c.array.stableSort = function (a, b) {
    for (var d = Array(a.length), e = 0; e < a.length; e++) d[e] = {
      index: e,
      value: a[e]
    };
    var f = b || c.array.defaultCompare;
    c.array.sort(d, function (a, b) {
      return f(a.value, b.value) || a.index - b.index;
    });
    for (e = 0; e < a.length; e++) a[e] = d[e].value;
  };
  c.array.sortByKey = function (a, b, d) {
    var e = d || c.array.defaultCompare;
    c.array.sort(a, function (a, d) {
      return e(b(a), b(d));
    });
  };
  c.array.sortObjectsByKey = function (a, b, d) {
    c.array.sortByKey(a, function (a) {
      return a[b];
    }, d);
  };
  c.array.isSorted = function (a, b, d) {
    b = b || c.array.defaultCompare;
    for (var e = 1; e < a.length; e++) {
      var f = b(a[e - 1], a[e]);
      if (0 < f || 0 == f && d) return !1;
    }
    return !0;
  };
  c.array.equals = function (a, b, d) {
    if (!c.isArrayLike(a) || !c.isArrayLike(b) || a.length != b.length) return !1;
    var e = a.length;
    d = d || c.array.defaultCompareEquality;
    for (var f = 0; f < e; f++) if (!d(a[f], b[f])) return !1;
    return !0;
  };
  c.array.compare3 = function (a, b, d) {
    d = d || c.array.defaultCompare;
    for (var e = Math.min(a.length, b.length), f = 0; f < e; f++) {
      var g = d(a[f], b[f]);
      if (0 != g) return g;
    }
    return c.array.defaultCompare(a.length, b.length);
  };
  c.array.defaultCompare = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  };
  c.array.inverseDefaultCompare = function (a, b) {
    return -c.array.defaultCompare(a, b);
  };
  c.array.defaultCompareEquality = function (a, b) {
    return a === b;
  };
  c.array.binaryInsert = function (a, b, d) {
    d = c.array.binarySearch(a, b, d);
    return 0 > d ? (c.array.insertAt(a, b, -(d + 1)), !0) : !1;
  };
  c.array.binaryRemove = function (a, b, d) {
    b = c.array.binarySearch(a, b, d);
    return 0 <= b ? c.array.removeAt(a, b) : !1;
  };
  c.array.bucket = function (a, b, d) {
    for (var e = {}, f = 0; f < a.length; f++) {
      var g = a[f],
        h = b.call(d, g, f, a);
      void 0 !== h && (e[h] || (e[h] = [])).push(g);
    }
    return e;
  };
  c.array.toObject = function (a, b, d) {
    var e = {};
    c.array.forEach(a, function (f, g) {
      e[b.call(d, f, g, a)] = f;
    });
    return e;
  };
  c.array.range = function (a, b, d) {
    var e = [],
      f = 0,
      g = a;
    d = d || 1;
    void 0 !== b && (f = a, g = b);
    if (0 > d * (g - f)) return [];
    if (0 < d) for (a = f; a < g; a += d) e.push(a);else for (a = f; a > g; a += d) e.push(a);
    return e;
  };
  c.array.repeat = function (a, b) {
    for (var d = [], e = 0; e < b; e++) d[e] = a;
    return d;
  };
  c.array.flatten = function (a) {
    for (var b = [], d = 0; d < arguments.length; d++) {
      var e = arguments[d];
      if (Array.isArray(e)) for (var f = 0; f < e.length; f += 8192) {
        var g = c.array.slice(e, f, f + 8192);
        g = c.array.flatten.apply(null, g);
        for (var h = 0; h < g.length; h++) b.push(g[h]);
      } else b.push(e);
    }
    return b;
  };
  c.array.rotate = function (a, b) {
    c.asserts.assert(null != a.length);
    a.length && (b %= a.length, 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b)));
    return a;
  };
  c.array.moveItem = function (a, b, d) {
    c.asserts.assert(0 <= b && b < a.length);
    c.asserts.assert(0 <= d && d < a.length);
    b = Array.prototype.splice.call(a, b, 1);
    Array.prototype.splice.call(a, d, 0, b[0]);
  };
  c.array.zip = function (a) {
    if (!arguments.length) return [];
    for (var b = [], d = arguments[0].length, e = 1; e < arguments.length; e++) arguments[e].length < d && (d = arguments[e].length);
    for (e = 0; e < d; e++) {
      for (var f = [], g = 0; g < arguments.length; g++) f.push(arguments[g][e]);
      b.push(f);
    }
    return b;
  };
  c.array.shuffle = function (a, b) {
    b = b || Math.random;
    for (var d = a.length - 1; 0 < d; d--) {
      var e = Math.floor(b() * (d + 1)),
        f = a[d];
      a[d] = a[e];
      a[e] = f;
    }
  };
  c.array.copyByIndex = function (a, b) {
    var d = [];
    c.array.forEach(b, function (b) {
      d.push(a[b]);
    });
    return d;
  };
  c.array.concatMap = function (a, b, d) {
    return c.array.concat.apply([], c.array.map(a, b, d));
  };
  L.Dynamics.Contacts.b2ContactList = function () {
    this.contactFirstNodes = [];
    for (var a = 0; a <= L.Dynamics.Contacts.b2ContactList.TYPES.allContacts; a++) this.contactFirstNodes[a] = null;
    this.contactLastNodes = [];
    for (a = 0; a <= L.Dynamics.Contacts.b2ContactList.TYPES.allContacts; a++) this.contactLastNodes[a] = null;
    this.contactNodeLookup = {};
    this.contactCount = 0;
  };
  L.Dynamics.Contacts.b2ContactList.prototype.ForEachContact = function (a, b) {
    a = this.contactFirstNodes[a];
    for (var d; null !== a && (d = a, a = d.GetNextNode(), !0 !== b(d.contact)););
  };
  L.Dynamics.Contacts.b2ContactList.prototype.AddContact = function (a) {
    var b = a.ID;
    if (null == this.contactNodeLookup[b]) {
      this.contactNodeLookup[b] = [];
      for (var d = 0; d <= L.Dynamics.Contacts.b2ContactList.TYPES.allContacts; d++) this.contactNodeLookup[b][d] = null;
      this.CreateNode(a, b, L.Dynamics.Contacts.b2ContactList.TYPES.allContacts);
      this.contactCount++;
    }
  };
  L.Dynamics.Contacts.b2ContactList.prototype.UpdateContact = function (a, b, d) {
    b ? this.CreateNode(a, a.ID, L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledTouchingContacts) : this.RemoveNode(a.ID, L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledTouchingContacts);
    d ? this.CreateNode(a, a.ID, L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledContinuousContacts) : this.RemoveNode(a.ID, L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledContinuousContacts);
  };
  L.Dynamics.Contacts.b2ContactList.prototype.RemoveContact = function (a) {
    a = a.ID;
    if (null != this.contactNodeLookup[a]) {
      for (var b = 0; b <= L.Dynamics.Contacts.b2ContactList.TYPES.allContacts; b++) this.RemoveNode(a, b);
      delete this.contactNodeLookup[a];
      this.contactCount--;
    }
  };
  L.Dynamics.Contacts.b2ContactList.prototype.RemoveNode = function (a, b) {
    var d = this.contactNodeLookup[a];
    if (null != d && (a = d[b], null != a)) {
      d[b] = null;
      d = a.GetPreviousNode();
      var e = a.GetNextNode();
      null == d ? this.contactFirstNodes[b] = e : d.SetNextNode(e);
      null == e ? this.contactLastNodes[b] = d : e.SetPreviousNode(d);
      L.Dynamics.Contacts.b2ContactListNode.FreeNode(a);
    }
  };
  L.Dynamics.Contacts.b2ContactList.prototype.CreateNode = function (a, b, d) {
    b = this.contactNodeLookup[b];
    null == b[d] && (b[d] = L.Dynamics.Contacts.b2ContactListNode.GetNode(a), a = this.contactLastNodes[d], null != a ? (a.SetNextNode(b[d]), b[d].SetPreviousNode(a)) : this.contactFirstNodes[d] = b[d], this.contactLastNodes[d] = b[d]);
  };
  L.Dynamics.Contacts.b2ContactList.prototype.GetContactCount = function () {
    return this.contactCount;
  };
  L.Dynamics.Contacts.b2ContactList.TYPES = {
    nonSensorEnabledTouchingContacts: 0,
    nonSensorEnabledContinuousContacts: 1,
    allContacts: 2
  };
  L.Dynamics.b2FilterData = function () {
    I.get("Box2D.Dynamics.b2FilterData").trackCreate();
    this.categoryBits = 1;
    this.maskBits = 65535;
    this.groupIndex = 0;
  };
  L.Dynamics.b2FilterData.prototype.Copy = function () {
    var a = new L.Dynamics.b2FilterData();
    a.categoryBits = this.categoryBits;
    a.maskBits = this.maskBits;
    a.groupIndex = this.groupIndex;
    return a;
  };
  L.Collision = {};
  L.Collision.b2AABB = function () {
    I.get("Box2D.Collision.b2AABB").trackCreate();
    this.lowerBound = L.Common.Math.b2Vec2.Get(0, 0);
    this.upperBound = L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.b2AABB._freeCache = [];
  L.Collision.b2AABB.Get = function () {
    I.get("Box2D.Collision.b2AABB").trackGet();
    if (0 < L.Collision.b2AABB._freeCache.length) {
      var a = L.Collision.b2AABB._freeCache.pop();
      a.SetZero();
      return a;
    }
    return new L.Collision.b2AABB();
  };
  L.Collision.b2AABB.Free = function (a) {
    null != a && (I.get("Box2D.Collision.b2AABB").trackFree(), L.Collision.b2AABB._freeCache.push(a));
  };
  L.Collision.b2AABB.prototype.Set = function (a, b, d, e) {
    this.lowerBound.Set(a, b);
    this.upperBound.Set(d, e);
  };
  L.Collision.b2AABB.prototype.SetVV = function (a, b) {
    this.lowerBound.SetV(a);
    this.upperBound.SetV(b);
  };
  L.Collision.b2AABB.prototype.SetZero = function () {
    this.lowerBound.Set(0, 0);
    this.upperBound.Set(0, 0);
  };
  L.Collision.b2AABB.prototype.IsValid = function () {
    return 0 > this.upperBound.x - this.lowerBound.x || 0 > this.upperBound.y - this.lowerBound.y ? !1 : this.lowerBound.IsValid() && this.upperBound.IsValid();
  };
  L.Collision.b2AABB.prototype.GetCenter = function () {
    return L.Common.Math.b2Vec2.Get((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
  };
  L.Collision.b2AABB.prototype.SetCenter = function (a) {
    var b = this.GetCenter();
    this.lowerBound.Subtract(b);
    this.upperBound.Subtract(b);
    this.lowerBound.Add(a);
    this.upperBound.Add(a);
    L.Common.Math.b2Vec2.Free(b);
  };
  L.Collision.b2AABB.prototype.GetExtents = function () {
    return L.Common.Math.b2Vec2.Get((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
  };
  L.Collision.b2AABB.prototype.Contains = function (a) {
    return this.lowerBound.x <= a.lowerBound.x && this.lowerBound.y <= a.lowerBound.y && a.upperBound.x <= this.upperBound.x && a.upperBound.y <= this.upperBound.y;
  };
  L.Collision.b2AABB.prototype.RayCast = function (a, b) {
    var d = -Number.MAX_VALUE,
      e = Number.MAX_VALUE,
      f = b.p2.x - b.p1.x;
    if (Math.abs(f) < Number.MIN_VALUE) {
      if (b.p1.x < this.lowerBound.x || this.upperBound.x < b.p1.x) return !1;
    } else {
      var g = 1 / f;
      f = (this.lowerBound.x - b.p1.x) * g;
      g *= this.upperBound.x - b.p1.x;
      var h = -1;
      f > g && (h = f, f = g, g = h, h = 1);
      f > d && (a.normal.x = h, a.normal.y = 0, d = f);
      e = Math.min(e, g);
      if (d > e) return !1;
    }
    f = b.p2.y - b.p1.y;
    if (Math.abs(f) < Number.MIN_VALUE) {
      if (b.p1.y < this.lowerBound.y || this.upperBound.y < b.p1.y) return !1;
    } else if (g = 1 / f, f = (this.lowerBound.y - b.p1.y) * g, g *= this.upperBound.y - b.p1.y, h = -1, f > g && (h = f, f = g, g = h, h = 1), f > d && (a.normal.y = h, a.normal.x = 0, d = f), e = Math.min(e, g), d > e) return !1;
    a.fraction = d;
    return !0;
  };
  L.Collision.b2AABB.prototype.TestOverlap = function (a) {
    return 0 < a.lowerBound.x - this.upperBound.x || 0 < a.lowerBound.y - this.upperBound.y || 0 < this.lowerBound.x - a.upperBound.x || 0 < this.lowerBound.y - a.upperBound.y ? !1 : !0;
  };
  L.Collision.b2AABB.Combine = function (a, b) {
    var d = L.Collision.b2AABB.Get();
    d.Combine(a, b);
    return d;
  };
  L.Collision.b2AABB.prototype.Combine = function (a, b) {
    this.lowerBound.x = Math.min(a.lowerBound.x, b.lowerBound.x);
    this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
    this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
    this.upperBound.y = Math.max(a.upperBound.y, b.upperBound.y);
  };
  L.Collision.b2AABB.prototype.GetMinX = function () {
    return this.lowerBound.x;
  };
  L.Collision.b2AABB.prototype.GetMaxX = function () {
    return this.upperBound.x;
  };
  L.Collision.b2AABB.prototype.GetMinY = function () {
    return this.lowerBound.y;
  };
  L.Collision.b2AABB.prototype.GetMaxY = function () {
    return this.upperBound.y;
  };
  L.Collision.Shapes = {};
  L.Collision.Shapes.b2MassData = function () {
    I.get("Box2D.Collision.Shapes.b2MassData").trackCreate();
    this.mass = 0;
    this.center = L.Common.Math.b2Vec2.Get(0, 0);
    this.I = 0;
  };
  L.Collision.Shapes.b2MassData._freeCache = [];
  L.Collision.Shapes.b2MassData.Get = function () {
    I.get("Box2D.Collision.Shapes.b2MassData").trackGet();
    if (0 < L.Collision.Shapes.b2MassData._freeCache.length) {
      var a = L.Collision.Shapes.b2MassData._freeCache.pop();
      a.mass = 0;
      a.center.SetZero();
      a.I = 0;
      return a;
    }
    return new L.Collision.Shapes.b2MassData();
  };
  L.Collision.Shapes.b2MassData.Free = function (a) {
    null != a && (I.get("Box2D.Collision.Shapes.b2MassData").trackFree(), L.Collision.Shapes.b2MassData._freeCache.push(a));
  };
  L.Collision.Shapes.b2MassData.prototype.SetV = function (a, b, d) {
    this.mass = a;
    this.center.SetV(b);
    this.I = d;
  };
  L.Collision.Shapes.b2MassData.prototype.Set = function (a, b, d, e) {
    this.mass = a;
    this.center.Set(b, d);
    this.I = e;
  };
  L.Dynamics.b2Fixture = function (a, b, d) {
    I.get("Box2D.Dynamics.b2Fixture").trackCreate();
    this.ID = "Fixture" + L.Dynamics.b2Fixture.NEXT_ID++;
    this.m_filter = d.filter.Copy();
    this.m_aabb = L.Collision.b2AABB.Get();
    this.m_aabb_temp = L.Collision.b2AABB.Get();
    this.m_body = a;
    this.m_shape = d.shape.Copy();
    this.m_density = d.density;
    this.m_friction = d.friction;
    this.m_restitution = d.restitution;
    this.m_isSensor = d.isSensor;
    this.m_proxy = null;
  };
  L.Dynamics.b2Fixture.prototype.GetShape = function () {
    return this.m_shape;
  };
  L.Dynamics.b2Fixture.prototype.SetSensor = function (a) {
    if (this.m_isSensor != a && (this.m_isSensor = a, null != this.m_body)) {
      var b = this;
      this.m_body.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
        var d = a.GetFixtureA(),
          f = a.GetFixtureB();
        d != b && f != b || a.SetSensor(d.IsSensor() || f.IsSensor());
      });
    }
  };
  L.Dynamics.b2Fixture.prototype.IsSensor = function () {
    return this.m_isSensor;
  };
  L.Dynamics.b2Fixture.prototype.SetFilterData = function (a) {
    this.m_filter = a.Copy();
    if (null != this.m_body) {
      var b = this;
      this.m_body.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
        a.GetFixtureA() != b && a.GetFixtureB() != b || a.FlagForFiltering();
      });
    }
  };
  L.Dynamics.b2Fixture.prototype.GetFilterData = function () {
    return this.m_filter;
  };
  L.Dynamics.b2Fixture.prototype.GetBody = function () {
    return this.m_body;
  };
  L.Dynamics.b2Fixture.prototype.TestPoint = function (a) {
    return this.m_shape.TestPoint(this.m_body.GetTransform(), a);
  };
  L.Dynamics.b2Fixture.prototype.RayCast = function (a, b) {
    return this.m_shape.RayCast(a, b, this.m_body.GetTransform());
  };
  L.Dynamics.b2Fixture.prototype.GetMassData = function (a) {
    a || (a = L.Collision.Shapes.b2MassData.Get());
    this.m_shape.ComputeMass(a, this.m_density);
    return a;
  };
  L.Dynamics.b2Fixture.prototype.SetDensity = function (a) {
    this.m_density = a;
  };
  L.Dynamics.b2Fixture.prototype.GetDensity = function () {
    return this.m_density;
  };
  L.Dynamics.b2Fixture.prototype.GetFriction = function () {
    return this.m_friction;
  };
  L.Dynamics.b2Fixture.prototype.SetFriction = function (a) {
    this.m_friction = a;
  };
  L.Dynamics.b2Fixture.prototype.GetRestitution = function () {
    return this.m_restitution;
  };
  L.Dynamics.b2Fixture.prototype.SetRestitution = function (a) {
    this.m_restitution = a;
  };
  L.Dynamics.b2Fixture.prototype.GetAABB = function () {
    return this.m_aabb;
  };
  L.Dynamics.b2Fixture.prototype.Destroy = function () {
    L.Collision.b2AABB.Free(this.m_aabb);
  };
  L.Dynamics.b2Fixture.prototype.CreateProxy = function (a, b) {
    this.m_shape.ComputeAABB(this.m_aabb, b);
    this.m_proxy = a.CreateProxy(this.m_aabb, this);
  };
  L.Dynamics.b2Fixture.prototype.DestroyProxy = function (a) {
    null != this.m_proxy && (a.DestroyProxy(this.m_proxy), this.m_proxy = null);
  };
  L.Dynamics.b2Fixture.prototype.Synchronize = function (a, b, d) {
    this.m_proxy && (this.m_shape.ComputeAABB(this.m_aabb, b), this.m_shape.ComputeAABB(this.m_aabb_temp, d), this.m_aabb.Combine(this.m_aabb, this.m_aabb_temp), b = L.Common.Math.b2Math.SubtractVV(d.position, b.position), a.MoveProxy(this.m_proxy, this.m_aabb, b), L.Common.Math.b2Vec2.Free(b));
  };
  L.Dynamics.b2Fixture.NEXT_ID = 0;
  L.Dynamics.b2FixtureDef = function () {
    I.get("Box2D.Dynamics.b2FixtureDef").trackCreate();
    this.filter = new L.Dynamics.b2FilterData();
    this.filter.categoryBits = 1;
    this.filter.maskBits = 65535;
    this.filter.groupIndex = 0;
    this.shape = null;
    this.friction = .2;
    this.density = this.restitution = 0;
    this.isSensor = !1;
  };
  L.Dynamics.b2FixtureListNode = function (a) {
    I.get("Box2D.Dynamics.b2FixtureListNode").trackCreate();
    this.fixture = a;
    this.previous = this.next = null;
  };
  L.Dynamics.b2FixtureListNode.prototype.SetNextNode = function (a) {
    this.next = a;
  };
  L.Dynamics.b2FixtureListNode.prototype.SetPreviousNode = function (a) {
    this.previous = a;
  };
  L.Dynamics.b2FixtureListNode.prototype.GetNextNode = function () {
    return this.next;
  };
  L.Dynamics.b2FixtureListNode.prototype.GetPreviousNode = function () {
    return this.previous;
  };
  L.Dynamics.b2FixtureList = function () {
    I.get("Box2D.Dynamics.b2FixtureList").trackCreate();
    this.fixtureLastNode = this.fixtureFirstNode = null;
    this.fixtureNodeLookup = {};
    this.fixtureCount = 0;
  };
  L.Dynamics.b2FixtureList.prototype.GetFirstNode = function () {
    return this.fixtureFirstNode;
  };
  L.Dynamics.b2FixtureList.prototype.AddFixture = function (a) {
    var b = a.ID;
    if (null == this.fixtureNodeLookup[b]) {
      a = new L.Dynamics.b2FixtureListNode(a);
      var d = this.fixtureLastNode;
      null != d ? d.SetNextNode(a) : this.fixtureFirstNode = a;
      a.SetPreviousNode(d);
      this.fixtureLastNode = a;
      this.fixtureNodeLookup[b] = a;
      this.fixtureCount++;
    }
  };
  L.Dynamics.b2FixtureList.prototype.RemoveFixture = function (a) {
    a = a.ID;
    var b = this.fixtureNodeLookup[a];
    if (null != b) {
      var d = b.GetPreviousNode();
      b = b.GetNextNode();
      null == d ? this.fixtureFirstNode = b : d.SetNextNode(b);
      null == b ? this.fixtureLastNode = d : b.SetPreviousNode(d);
      delete this.fixtureNodeLookup[a];
      this.fixtureCount--;
    }
  };
  L.Dynamics.b2FixtureList.prototype.GetFixtureCount = function () {
    return this.fixtureCount;
  };
  L.Dynamics.Controllers = {};
  L.Dynamics.Controllers.b2ControllerListNode = function (a) {
    this.controller = a;
    this.previous = this.next = null;
  };
  L.Dynamics.Controllers.b2ControllerListNode.prototype.SetNextNode = function (a) {
    this.next = a;
  };
  L.Dynamics.Controllers.b2ControllerListNode.prototype.SetPreviousNode = function (a) {
    this.previous = a;
  };
  L.Dynamics.Controllers.b2ControllerListNode.prototype.GetNextNode = function () {
    return this.next;
  };
  L.Dynamics.Controllers.b2ControllerListNode.prototype.GetPreviousNode = function () {
    return this.previous;
  };
  L.Dynamics.Controllers.b2ControllerList = function () {
    this.controllerLastNode = this.controllerFirstNode = null;
    this.controllerNodeLookup = {};
    this.controllerCount = 0;
  };
  L.Dynamics.Controllers.b2ControllerList.prototype.GetFirstNode = function () {
    return this.controllerFirstNode;
  };
  L.Dynamics.Controllers.b2ControllerList.prototype.AddController = function (a) {
    var b = a.ID;
    if (null == this.controllerNodeLookup[b]) {
      a = new L.Dynamics.Controllers.b2ControllerListNode(a);
      var d = this.controllerLastNode;
      null != d ? d.SetNextNode(a) : this.controllerFirstNode = a;
      a.SetPreviousNode(d);
      this.controllerLastNode = a;
      this.controllerNodeLookup[b] = a;
      this.controllerCount++;
    }
  };
  L.Dynamics.Controllers.b2ControllerList.prototype.RemoveController = function (a) {
    a = a.ID;
    var b = this.controllerNodeLookup[a];
    if (null != b) {
      var d = b.GetPreviousNode();
      b = b.GetNextNode();
      null == d ? this.controllerFirstNode = b : d.SetNextNode(b);
      null == b ? this.controllerLastNode = d : b.SetPreviousNode(d);
      delete this.controllerNodeLookup[a];
      this.controllerCount--;
    }
  };
  L.Dynamics.Controllers.b2ControllerList.prototype.GetControllerCount = function () {
    return this.controllerCount;
  };
  L.Dynamics.b2Body = function (a, b) {
    I.get("Box2D.Dynamics.b2Body").trackCreate();
    this.ID = "Body" + L.Dynamics.b2Body.NEXT_ID++;
    this.m_xf = new L.Common.Math.b2Transform();
    this.m_xf.position.SetV(a.position);
    this.m_xf.R.Set(a.angle);
    this.m_sweep = new L.Common.Math.b2Sweep();
    this.m_sweep.localCenter.SetZero();
    this.m_sweep.t0 = 1;
    this.m_sweep.a0 = this.m_sweep.a = a.angle;
    this.m_sweep.c.x = this.m_xf.R.col1.x * this.m_sweep.localCenter.x + this.m_xf.R.col2.x * this.m_sweep.localCenter.y;
    this.m_sweep.c.y = this.m_xf.R.col1.y * this.m_sweep.localCenter.x + this.m_xf.R.col2.y * this.m_sweep.localCenter.y;
    this.m_sweep.c.x += this.m_xf.position.x;
    this.m_sweep.c.y += this.m_xf.position.y;
    this.m_sweep.c0.SetV(this.m_sweep.c);
    this.m_linearVelocity = a.linearVelocity.Copy();
    this.m_force = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_bullet = a.bullet;
    this.m_fixedRotation = a.fixedRotation;
    this.m_allowSleep = a.allowSleep;
    this.m_awake = a.awake;
    this.m_active = a.active;
    this.m_world = b;
    this.m_jointList = null;
    this.contactList = new L.Dynamics.Contacts.b2ContactList();
    this.controllerList = new L.Dynamics.Controllers.b2ControllerList();
    this.m_controllerCount = 0;
    this.m_angularVelocity = a.angularVelocity;
    this.m_linearDamping = a.linearDamping;
    this.m_angularDamping = a.angularDamping;
    this.m_sleepTime = this.m_torque = 0;
    this.m_type = a.type;
    this.m_mass = this.m_type == L.Dynamics.b2BodyDef.b2_dynamicBody ? 1 : 0;
    this.m_invMass = this.m_type == L.Dynamics.b2BodyDef.b2_dynamicBody ? 1 : 0;
    this.m_invI = this.m_I = 0;
    this.m_inertiaScale = a.inertiaScale;
    this.fixtureList = new L.Dynamics.b2FixtureList();
    this.m_lists = [];
  };
  L.Dynamics.b2Body.prototype.CreateFixture = function (a) {
    L.Common.b2Settings.b2Assert(!this.m_world.IsLocked());
    a = new L.Dynamics.b2Fixture(this, this.m_xf, a);
    this.m_active && a.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
    this.fixtureList.AddFixture(a);
    a.m_body = this;
    0 < a.m_density && this.ResetMassData();
    this.m_world.m_newFixture = !0;
    return a;
  };
  L.Dynamics.b2Body.prototype.CreateFixture2 = function (a, b) {
    var d = new L.Dynamics.b2FixtureDef();
    d.shape = a;
    d.density = b;
    return this.CreateFixture(d);
  };
  L.Dynamics.b2Body.prototype.Destroy = function () {
    L.Common.Math.b2Vec2.Free(this.m_linearVelocity);
    L.Common.Math.b2Vec2.Free(this.m_force);
  };
  L.Dynamics.b2Body.prototype.DestroyFixture = function (a) {
    L.Common.b2Settings.b2Assert(!this.m_world.IsLocked());
    this.fixtureList.RemoveFixture(a);
    var b = this;
    this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (d) {
      a != d.GetFixtureA() && a != d.GetFixtureB() || b.m_world.m_contactManager.Destroy(d);
    });
    this.m_active && a.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
    a.Destroy();
    this.ResetMassData();
  };
  L.Dynamics.b2Body.prototype.SetPositionAndAngle = function (a, b) {
    L.Common.b2Settings.b2Assert(!this.m_world.IsLocked());
    this.m_xf.R.Set(b);
    this.m_xf.position.SetV(a);
    a = this.m_xf.R;
    var d = this.m_sweep.localCenter;
    this.m_sweep.c.x = a.col1.x * d.x + a.col2.x * d.y;
    this.m_sweep.c.y = a.col1.y * d.x + a.col2.y * d.y;
    this.m_sweep.c.x += this.m_xf.position.x;
    this.m_sweep.c.y += this.m_xf.position.y;
    this.m_sweep.c0.SetV(this.m_sweep.c);
    this.m_sweep.a0 = this.m_sweep.a = b;
    b = this.m_world.m_contactManager.m_broadPhase;
    for (a = this.fixtureList.GetFirstNode(); a; a = a.GetNextNode()) a.fixture.Synchronize(b, this.m_xf, this.m_xf);
    this.m_world.m_contactManager.FindNewContacts();
  };
  L.Dynamics.b2Body.prototype.SetTransform = function (a) {
    this.SetPositionAndAngle(a.position, a.GetAngle());
  };
  L.Dynamics.b2Body.prototype.GetTransform = function () {
    return this.m_xf;
  };
  L.Dynamics.b2Body.prototype.GetPosition = function () {
    return this.m_xf.position;
  };
  L.Dynamics.b2Body.prototype.SetPosition = function (a) {
    this.SetPositionAndAngle(a, this.GetAngle());
  };
  L.Dynamics.b2Body.prototype.GetAngle = function () {
    return this.m_sweep.a;
  };
  L.Dynamics.b2Body.prototype.SetCalculatedAngle = function (a) {
    this.m_sweep.a = a;
  };
  L.Dynamics.b2Body.prototype.SetAngle = function (a) {
    this.SetPositionAndAngle(this.GetPosition(), a);
  };
  L.Dynamics.b2Body.prototype.GetWorldCenter = function () {
    return this.m_sweep.c;
  };
  L.Dynamics.b2Body.prototype.GetLocalCenter = function () {
    return this.m_sweep.localCenter;
  };
  L.Dynamics.b2Body.prototype.SetLinearVelocity = function (a) {
    this.m_type != L.Dynamics.b2BodyDef.b2_staticBody && this.m_linearVelocity.SetV(a);
  };
  L.Dynamics.b2Body.prototype.GetLinearVelocity = function () {
    return this.m_linearVelocity;
  };
  L.Dynamics.b2Body.prototype.SetAngularVelocity = function (a) {
    this.m_type != L.Dynamics.b2BodyDef.b2_staticBody && (this.m_angularVelocity = a);
  };
  L.Dynamics.b2Body.prototype.GetAngularVelocity = function () {
    return this.m_angularVelocity;
  };
  L.Dynamics.b2Body.prototype.GetDefinition = function () {
    var a = new L.Dynamics.b2BodyDef();
    a.type = this.GetType();
    a.allowSleep = this.m_allowSleep;
    a.angle = this.GetAngle();
    a.angularDamping = this.m_angularDamping;
    a.angularVelocity = this.m_angularVelocity;
    a.fixedRotation = this.m_fixedRotation;
    a.bullet = this.m_bullet;
    a.active = this.m_active;
    a.awake = this.m_awake;
    a.linearDamping = this.m_linearDamping;
    a.linearVelocity.SetV(this.GetLinearVelocity());
    a.position.SetV(this.GetPosition());
    return a;
  };
  L.Dynamics.b2Body.prototype.ApplyForce = function (a, b) {
    this.m_type == L.Dynamics.b2BodyDef.b2_dynamicBody && (this.SetAwake(!0), this.m_force.x += a.x, this.m_force.y += a.y, this.m_torque += (b.x - this.m_sweep.c.x) * a.y - (b.y - this.m_sweep.c.y) * a.x);
  };
  L.Dynamics.b2Body.prototype.ApplyTorque = function (a) {
    this.m_type == L.Dynamics.b2BodyDef.b2_dynamicBody && (this.SetAwake(!0), this.m_torque += a);
  };
  L.Dynamics.b2Body.prototype.ApplyImpulse = function (a, b) {
    this.m_type == L.Dynamics.b2BodyDef.b2_dynamicBody && (this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * a.x, this.m_linearVelocity.y += this.m_invMass * a.y, this.m_angularVelocity += this.m_invI * ((b.x - this.m_sweep.c.x) * a.y - (b.y - this.m_sweep.c.y) * a.x));
  };
  L.Dynamics.b2Body.prototype.Split = function (a) {
    for (var b = this.GetLinearVelocity().Copy(), d = this.GetAngularVelocity(), e = this.GetWorldCenter(), f = this.m_world.CreateBody(this.GetDefinition()), g = this.fixtureList.GetFirstNode(); g; g = g.GetNextNode()) {
      var h = g.fixture;
      a(h) && (this.fixtureList.RemoveFixture(h), f.fixtureList.AddFixture(h));
    }
    this.ResetMassData();
    f.ResetMassData();
    g = this.GetWorldCenter();
    a = f.GetWorldCenter();
    h = L.Common.Math.b2Math.SubtractVV(g, e);
    g = L.Common.Math.b2Math.CrossFV(d, h);
    L.Common.Math.b2Vec2.Free(h);
    h = L.Common.Math.b2Math.AddVV(b, g);
    L.Common.Math.b2Vec2.Free(g);
    this.SetLinearVelocity(h);
    L.Common.Math.b2Vec2.Free(h);
    a = L.Common.Math.b2Math.SubtractVV(a, e);
    e = L.Common.Math.b2Math.CrossFV(d, a);
    L.Common.Math.b2Vec2.Free(a);
    a = L.Common.Math.b2Math.AddVV(b, e);
    L.Common.Math.b2Vec2.Free(e);
    f.SetLinearVelocity(a);
    L.Common.Math.b2Vec2.Free(a);
    L.Common.Math.b2Vec2.Free(b);
    this.SetAngularVelocity(d);
    f.SetAngularVelocity(d);
    this.SynchronizeFixtures();
    f.SynchronizeFixtures();
    return f;
  };
  L.Dynamics.b2Body.prototype.Merge = function (a) {
    for (var b = a.fixtureList.GetFirstNode(); b; b = b.GetNextNode()) this.fixtureList.AddFixture(b.fixture), a.fixtureList.RemoveFixture(b.fixture);
    a.ResetMassData();
    this.ResetMassData();
    this.SynchronizeFixtures();
  };
  L.Dynamics.b2Body.prototype.GetMass = function () {
    return this.m_mass;
  };
  L.Dynamics.b2Body.prototype.GetInverseMass = function () {
    return this.m_invMass;
  };
  L.Dynamics.b2Body.prototype.GetInertia = function () {
    return this.m_I;
  };
  L.Dynamics.b2Body.prototype.GetInverseInertia = function () {
    return this.m_invI;
  };
  L.Dynamics.b2Body.prototype.GetMassData = function (a) {
    a || (a = L.Collision.Shapes.b2MassData.Get());
    a.mass = this.m_mass;
    a.I = this.m_I;
    a.center.SetV(this.m_sweep.localCenter);
    return a;
  };
  L.Dynamics.b2Body.prototype.SetMassData = function (a) {
    L.Common.b2Settings.b2Assert(!this.m_world.IsLocked());
    if (this.m_type == L.Dynamics.b2BodyDef.b2_dynamicBody) {
      this.m_invI = this.m_I = this.m_invMass = 0;
      this.m_mass = a.mass;
      0 >= this.m_mass && (this.m_mass = 1);
      this.m_invMass = 1 / this.m_mass;
      0 < a.I && !this.m_fixedRotation && (this.m_I = a.I - this.m_mass * (a.center.x * a.center.x + a.center.y * a.center.y), this.m_invI = 1 / this.m_I);
      var b = this.m_sweep.c.Copy();
      this.m_sweep.localCenter.SetV(a.center);
      this.m_sweep.c0.SetV(L.Common.Math.b2Math.MulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - b.y);
      this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - b.x);
      L.Common.Math.b2Vec2.Free(b);
    }
  };
  L.Dynamics.b2Body.prototype.ResetMassData = function () {
    this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
    this.m_sweep.localCenter.SetZero();
    if (this.m_type != L.Dynamics.b2BodyDef.b2_staticBody && this.m_type != L.Dynamics.b2BodyDef.b2_kinematicBody) {
      for (var a = L.Common.Math.b2Vec2.Get(0, 0), b = this.fixtureList.GetFirstNode(); b; b = b.GetNextNode()) {
        var d = b.fixture;
        0 != d.m_density && (d = d.GetMassData(), this.m_mass += d.mass, a.x += d.center.x * d.mass, a.y += d.center.y * d.mass, this.m_I += d.I);
      }
      0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, a.x *= this.m_invMass, a.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
      0 < this.m_I && !this.m_fixedRotation ? (this.m_I -= this.m_mass * (a.x * a.x + a.y * a.y), this.m_I *= this.m_inertiaScale, L.Common.b2Settings.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
      b = this.m_sweep.c.Copy();
      this.m_sweep.localCenter.SetV(a);
      this.m_sweep.c0.SetV(L.Common.Math.b2Math.MulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - b.y);
      this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - b.x);
      L.Common.Math.b2Vec2.Free(a);
      L.Common.Math.b2Vec2.Free(b);
    }
  };
  L.Dynamics.b2Body.prototype.GetWorldPoint = function (a) {
    var b = this.m_xf.R;
    a = L.Common.Math.b2Vec2.Get(b.col1.x * a.x + b.col2.x * a.y, b.col1.y * a.x + b.col2.y * a.y);
    a.x += this.m_xf.position.x;
    a.y += this.m_xf.position.y;
    return a;
  };
  L.Dynamics.b2Body.prototype.GetWorldVector = function (a) {
    return L.Common.Math.b2Math.MulMV(this.m_xf.R, a);
  };
  L.Dynamics.b2Body.prototype.GetLocalPoint = function (a) {
    return L.Common.Math.b2Math.MulXT(this.m_xf, a);
  };
  L.Dynamics.b2Body.prototype.GetLocalVector = function (a) {
    return L.Common.Math.b2Math.MulTMV(this.m_xf.R, a);
  };
  L.Dynamics.b2Body.prototype.GetLinearVelocityFromWorldPoint = function (a) {
    return L.Common.Math.b2Vec2.Get(this.m_linearVelocity.x - this.m_angularVelocity * (a.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (a.x - this.m_sweep.c.x));
  };
  L.Dynamics.b2Body.prototype.GetLinearVelocityFromLocalPoint = function (a) {
    var b = this.m_xf.R;
    a = L.Common.Math.b2Vec2.Get(b.col1.x * a.x + b.col2.x * a.y, b.col1.y * a.x + b.col2.y * a.y);
    a.x += this.m_xf.position.x;
    a.y += this.m_xf.position.y;
    b = L.Common.Math.b2Vec2.Get(this.m_linearVelocity.x - this.m_angularVelocity * (a.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (a.x - this.m_sweep.c.x));
    L.Common.Math.b2Vec2.Free(a);
    return b;
  };
  L.Dynamics.b2Body.prototype.GetLinearDamping = function () {
    return this.m_linearDamping;
  };
  L.Dynamics.b2Body.prototype.SetLinearDamping = function (a) {
    this.m_linearDamping = a;
  };
  L.Dynamics.b2Body.prototype.GetAngularDamping = function () {
    return this.m_angularDamping;
  };
  L.Dynamics.b2Body.prototype.SetAngularDamping = function (a) {
    this.m_angularDamping = a;
  };
  L.Dynamics.b2Body.prototype.SetType = function (a) {
    if (this.m_type != a) for (this.m_type = a, this.ResetMassData(), this.m_type == L.Dynamics.b2BodyDef.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0, this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
      a.FlagForFiltering();
    }), a = 0; a < this.m_lists.length; a++) this.m_lists[a].UpdateBody(this);
  };
  L.Dynamics.b2Body.prototype.GetType = function () {
    return this.m_type;
  };
  L.Dynamics.b2Body.prototype.SetBullet = function (a) {
    this.m_bullet = a;
  };
  L.Dynamics.b2Body.prototype.IsBullet = function () {
    return this.m_bullet;
  };
  L.Dynamics.b2Body.prototype.SetSleepingAllowed = function (a) {
    (this.m_allowSleep = a) || this.SetAwake(!0);
  };
  L.Dynamics.b2Body.prototype.SetAwake = function (a) {
    if (this.m_awake != a) for (this.m_awake = a, this.m_sleepTime = 0, a || (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0), a = 0; a < this.m_lists.length; a++) this.m_lists[a].UpdateBody(this);
  };
  L.Dynamics.b2Body.prototype.IsAwake = function () {
    return this.m_awake;
  };
  L.Dynamics.b2Body.prototype.SetFixedRotation = function (a) {
    this.m_fixedRotation = a;
    this.ResetMassData();
  };
  L.Dynamics.b2Body.prototype.IsFixedRotation = function () {
    return this.m_fixedRotation;
  };
  L.Dynamics.b2Body.prototype.SetActive = function (a) {
    if (a != this.m_active) {
      if (a) {
        this.m_active = !0;
        a = this.m_world.m_contactManager.m_broadPhase;
        for (var b = this.fixtureList.GetFirstNode(); b; b = b.GetNextNode()) b.fixture.CreateProxy(a, this.m_xf);
      } else {
        this.m_active = !1;
        a = this.m_world.m_contactManager.m_broadPhase;
        for (b = this.fixtureList.GetFirstNode(); b; b = b.GetNextNode()) b.fixture.DestroyProxy(a);
        var d = this;
        this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
          d.m_world.m_contactManager.Destroy(a);
        });
      }
      for (a = 0; a < this.m_lists.length; a++) this.m_lists[a].UpdateBody(this);
    }
  };
  L.Dynamics.b2Body.prototype.IsActive = function () {
    return this.m_active;
  };
  L.Dynamics.b2Body.prototype.IsSleepingAllowed = function () {
    return this.m_allowSleep;
  };
  L.Dynamics.b2Body.prototype.GetFixtureList = function () {
    return this.fixtureList;
  };
  L.Dynamics.b2Body.prototype.GetJointList = function () {
    return this.m_jointList;
  };
  L.Dynamics.b2Body.prototype.GetControllerList = function () {
    return this.controllerList;
  };
  L.Dynamics.b2Body.prototype.AddController = function (a) {
    this.controllerList.AddController(a);
  };
  L.Dynamics.b2Body.prototype.RemoveController = function (a) {
    this.controllerList.RemoveController(a);
  };
  L.Dynamics.b2Body.prototype.GetContactList = function () {
    return this.contactList;
  };
  L.Dynamics.b2Body.prototype.GetWorld = function () {
    return this.m_world;
  };
  L.Dynamics.b2Body.prototype.SynchronizeFixtures = function () {
    var a = L.Dynamics.b2Body.s_xf1;
    a.R.Set(this.m_sweep.a0);
    var b = a.R,
      d = this.m_sweep.localCenter;
    a.position.x = this.m_sweep.c0.x - (b.col1.x * d.x + b.col2.x * d.y);
    a.position.y = this.m_sweep.c0.y - (b.col1.y * d.x + b.col2.y * d.y);
    b = this.m_world.m_contactManager.m_broadPhase;
    for (d = this.fixtureList.GetFirstNode(); d; d = d.GetNextNode()) d.fixture.Synchronize(b, a, this.m_xf);
  };
  L.Dynamics.b2Body.prototype.SynchronizeTransform = function () {
    this.m_xf.R.Set(this.m_sweep.a);
    var a = this.m_xf.R,
      b = this.m_sweep.localCenter;
    this.m_xf.position.x = this.m_sweep.c.x - (a.col1.x * b.x + a.col2.x * b.y);
    this.m_xf.position.y = this.m_sweep.c.y - (a.col1.y * b.x + a.col2.y * b.y);
  };
  L.Dynamics.b2Body.prototype.ShouldCollide = function (a) {
    if (this.m_type != L.Dynamics.b2BodyDef.b2_dynamicBody && a.m_type != L.Dynamics.b2BodyDef.b2_dynamicBody) return !1;
    for (var b = this.m_jointList; b; b = b.next) if (b.other == a && 0 == b.joint.m_collideConnected) return !1;
    return !0;
  };
  L.Dynamics.b2Body.prototype.Advance = function (a) {
    this.m_sweep.Advance(a);
    this.m_sweep.c.SetV(this.m_sweep.c0);
    this.m_sweep.a = this.m_sweep.a0;
    this.SynchronizeTransform();
  };
  L.Dynamics.b2Body.NEXT_ID = 0;
  L.Dynamics.b2Body.s_xf1 = new L.Common.Math.b2Transform();
  c.structs = {};
  c.structs.Queue = function () {
    this.front_ = [];
    this.back_ = [];
  };
  c.structs.Queue.prototype.maybeFlip_ = function () {
    c.array.isEmpty(this.front_) && (this.front_ = this.back_, this.front_.reverse(), this.back_ = []);
  };
  c.structs.Queue.prototype.enqueue = function (a) {
    this.back_.push(a);
  };
  c.structs.Queue.prototype.dequeue = function () {
    this.maybeFlip_();
    return this.front_.pop();
  };
  c.structs.Queue.prototype.peek = function () {
    this.maybeFlip_();
    return c.array.peek(this.front_);
  };
  c.structs.Queue.prototype.getCount = function () {
    return this.front_.length + this.back_.length;
  };
  c.structs.Queue.prototype.isEmpty = function () {
    return c.array.isEmpty(this.front_) && c.array.isEmpty(this.back_);
  };
  c.structs.Queue.prototype.clear = function () {
    this.front_ = [];
    this.back_ = [];
  };
  c.structs.Queue.prototype.contains = function (a) {
    return c.array.contains(this.front_, a) || c.array.contains(this.back_, a);
  };
  c.structs.Queue.prototype.remove = function (a) {
    return c.array.removeLast(this.front_, a) || c.array.remove(this.back_, a);
  };
  c.structs.Queue.prototype.getValues = function () {
    for (var a = [], b = this.front_.length - 1; 0 <= b; --b) a.push(this.front_[b]);
    var d = this.back_.length;
    for (b = 0; b < d; ++b) a.push(this.back_[b]);
    return a;
  };
  L.Collision.b2RayCastInput = function (a, b, d) {
    I.get("Box2D.Collision.b2RayCastInput").trackCreate();
    this.p1 = L.Common.Math.b2Vec2.Get(a.x, a.y);
    this.p2 = L.Common.Math.b2Vec2.Get(b.x, b.y);
    this.maxFraction = d;
  };
  L.Collision.b2RayCastOutput = function () {
    I.get("Box2D.Collision.b2RayCastOutput").trackCreate();
    this.normal = L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.b2SimplexVertex = function () {
    I.get("Box2D.Collision.b2SimplexVertex").trackCreate();
    this.wA = L.Common.Math.b2Vec2.Get(0, 0);
    this.wB = L.Common.Math.b2Vec2.Get(0, 0);
    this.w = L.Common.Math.b2Vec2.Get(0, 0);
    this.indexB = this.indexA = this.a = 0;
  };
  L.Collision.b2SimplexVertex.prototype.Set = function (a) {
    this.wA.SetV(a.wA);
    this.wB.SetV(a.wB);
    this.w.SetV(a.w);
    this.a = a.a;
    this.indexA = a.indexA;
    this.indexB = a.indexB;
  };
  L.Collision.b2Simplex = function () {
    I.get("Box2D.Collision.b2Simplex").trackCreate();
    this.m_v1 = new L.Collision.b2SimplexVertex();
    this.m_v2 = new L.Collision.b2SimplexVertex();
    this.m_v3 = new L.Collision.b2SimplexVertex();
    this.m_vertices = [this.m_v1, this.m_v2, this.m_v3];
  };
  L.Collision.b2Simplex._freeCache = [];
  L.Collision.b2Simplex.Get = function () {
    if (0 < L.Collision.b2Simplex._freeCache.length) {
      for (var a = L.Collision.b2Simplex._freeCache.pop(), b = 0; b < a.m_vertices.length; b++) {
        var d = a.m_vertices[b];
        null != d.wA && d.wA.Set(0, 0);
        null != d.wB && d.wB.Set(0, 0);
        null != d.w && d.w.Set(0, 0);
        d.indexA = 0;
        d.indexB = 0;
        d.a = 0;
      }
      return a;
    }
    return new L.Collision.b2Simplex();
  };
  L.Collision.b2Simplex.Free = function (a) {
    null != a && L.Collision.b2Simplex._freeCache.push(a);
  };
  L.Collision.b2Simplex.prototype.ReadCache = function (a, b, d, e, f) {
    L.Common.b2Settings.b2Assert(0 <= a.count && 3 >= a.count);
    this.m_count = a.count;
    for (var g = this.m_vertices, h = 0; h < this.m_count; h++) {
      var m = g[h];
      m.indexA = a.indexA[h];
      m.indexB = a.indexB[h];
      var n = b.GetVertex(m.indexA);
      var p = e.GetVertex(m.indexB);
      L.Common.Math.b2Vec2.Free(m.wA);
      L.Common.Math.b2Vec2.Free(m.wB);
      L.Common.Math.b2Vec2.Free(m.w);
      m.wA = L.Common.Math.b2Math.MulX(d, n);
      m.wB = L.Common.Math.b2Math.MulX(f, p);
      m.w = L.Common.Math.b2Math.SubtractVV(m.wB, m.wA);
      m.a = 0;
    }
    1 < this.m_count && (a = a.metric, n = this.GetMetric(), n < .5 * a || 2 * a < n || n < Number.MIN_VALUE) && (this.m_count = 0);
    0 == this.m_count && (m = g[0], m.indexA = 0, m.indexB = 0, n = b.GetVertex(0), p = e.GetVertex(0), L.Common.Math.b2Vec2.Free(m.wA), L.Common.Math.b2Vec2.Free(m.wB), L.Common.Math.b2Vec2.Free(m.w), m.wA = L.Common.Math.b2Math.MulX(d, n), m.wB = L.Common.Math.b2Math.MulX(f, p), m.w = L.Common.Math.b2Math.SubtractVV(m.wB, m.wA), this.m_count = 1);
  };
  L.Collision.b2Simplex.prototype.WriteCache = function (a) {
    a.metric = this.GetMetric();
    a.count = this.m_count;
    for (var b = this.m_vertices, d = 0; d < this.m_count; d++) a.indexA[d] = b[d].indexA, a.indexB[d] = b[d].indexB;
  };
  L.Collision.b2Simplex.prototype.GetSearchDirection = function () {
    if (1 == this.m_count) return this.m_v1.w.GetNegative();
    if (2 == this.m_count) {
      var a = L.Common.Math.b2Math.SubtractVV(this.m_v2.w, this.m_v1.w),
        b = this.m_v1.w.GetNegative(),
        d = L.Common.Math.b2Math.CrossVV(a, b);
      L.Common.Math.b2Vec2.Free(b);
      b = 0 < d ? L.Common.Math.b2Math.CrossFV(1, a) : L.Common.Math.b2Math.CrossVF(a, 1);
      L.Common.Math.b2Vec2.Free(a);
      return b;
    }
    L.Common.b2Settings.b2Assert(!1);
    return L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.b2Simplex.prototype.GetClosestPoint = function () {
    if (1 == this.m_count) return this.m_v1.w;
    if (2 == this.m_count) return L.Common.Math.b2Vec2.Get(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
    L.Common.b2Settings.b2Assert(!1);
    return L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.b2Simplex.prototype.GetWitnessPoints = function (a, b) {
    1 == this.m_count ? (a.SetV(this.m_v1.wA), b.SetV(this.m_v1.wB)) : 2 == this.m_count ? (a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x, a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y, b.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x, b.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y) : 3 == this.m_count ? (b.x = a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x, b.y = a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y) : L.Common.b2Settings.b2Assert(!1);
  };
  L.Collision.b2Simplex.prototype.GetMetric = function () {
    if (1 == this.m_count) return 0;
    if (2 == this.m_count) {
      var a = L.Common.Math.b2Math.SubtractVV(this.m_v1.w, this.m_v2.w),
        b = a.Length();
      L.Common.Math.b2Vec2.Free(a);
      return b;
    }
    if (3 == this.m_count) {
      a = L.Common.Math.b2Math.SubtractVV(this.m_v2.w, this.m_v1.w);
      var d = L.Common.Math.b2Math.SubtractVV(this.m_v3.w, this.m_v1.w);
      b = L.Common.Math.b2Math.CrossVV(a, d);
      L.Common.Math.b2Vec2.Free(a);
      L.Common.Math.b2Vec2.Free(d);
      return b;
    }
    L.Common.b2Settings.b2Assert(!1);
    return 0;
  };
  L.Collision.b2Simplex.prototype.Solve2 = function () {
    var a = this.m_v1.w,
      b = this.m_v2.w,
      d = L.Common.Math.b2Math.SubtractVV(b, a);
    a = -(a.x * d.x + a.y * d.y);
    0 >= a ? (L.Common.Math.b2Vec2.Free(d), this.m_count = this.m_v1.a = 1) : (b = b.x * d.x + b.y * d.y, L.Common.Math.b2Vec2.Free(d), 0 >= b ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : (d = 1 / (b + a), this.m_v1.a = b * d, this.m_v2.a = a * d, this.m_count = 2));
  };
  L.Collision.b2Simplex.prototype.Solve3 = function () {
    var a = this.m_v1.w,
      b = this.m_v2.w,
      d = this.m_v3.w,
      e = L.Common.Math.b2Math.SubtractVV(b, a),
      f = L.Common.Math.b2Math.Dot(a, e),
      g = L.Common.Math.b2Math.Dot(b, e);
    f = -f;
    var h = L.Common.Math.b2Math.SubtractVV(d, a),
      m = L.Common.Math.b2Math.Dot(a, h),
      n = L.Common.Math.b2Math.Dot(d, h),
      p = L.Common.Math.b2Math.CrossVV(e, h);
    L.Common.Math.b2Vec2.Free(e);
    L.Common.Math.b2Vec2.Free(h);
    e = -m;
    m = L.Common.Math.b2Math.SubtractVV(d, b);
    var q = L.Common.Math.b2Math.Dot(b, m);
    h = L.Common.Math.b2Math.Dot(d, m);
    L.Common.Math.b2Vec2.Free(m);
    m = -q;
    q = p * L.Common.Math.b2Math.CrossVV(b, d);
    d = p * L.Common.Math.b2Math.CrossVV(d, a);
    a = p * L.Common.Math.b2Math.CrossVV(a, b);
    0 >= f && 0 >= e ? this.m_count = this.m_v1.a = 1 : 0 < g && 0 < f && 0 >= a ? (n = 1 / (g + f), this.m_v1.a = g * n, this.m_v2.a = f * n, this.m_count = 2) : 0 < n && 0 < e && 0 >= d ? (g = 1 / (n + e), this.m_v1.a = n * g, this.m_v3.a = e * g, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= g && 0 >= m ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= n && 0 >= h ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < h && 0 < m && 0 >= q ? (g = 1 / (h + m), this.m_v2.a = h * g, this.m_v3.a = m * g, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (g = 1 / (q + d + a), this.m_v1.a = q * g, this.m_v2.a = d * g, this.m_v3.a = a * g, this.m_count = 3);
  };
  L.Collision.b2Distance = {};
  L.Collision.b2Distance.Distance = function (a, b, d) {
    var e = L.Collision.b2Simplex.Get();
    e.ReadCache(b, d.proxyA, d.transformA, d.proxyB, d.transformB);
    (1 > e.m_count || 3 < e.m_count) && L.Common.b2Settings.b2Assert(!1);
    for (var f = 0; 20 > f;) {
      for (var g = [], h = 0; h < e.m_count; h++) g[h] = {}, g[h].indexA = e.m_vertices[h].indexA, g[h].indexB = e.m_vertices[h].indexB;
      2 == e.m_count ? e.Solve2() : 3 == e.m_count && e.Solve3();
      if (3 == e.m_count) break;
      h = e.GetSearchDirection();
      if (h.LengthSquared() < L.Common.b2Settings.MIN_VALUE_SQUARED) {
        L.Common.Math.b2Vec2.Free(h);
        break;
      }
      L.Common.Math.b2Vec2.Free(e.m_vertices[e.m_count].wA);
      L.Common.Math.b2Vec2.Free(e.m_vertices[e.m_count].wB);
      L.Common.Math.b2Vec2.Free(e.m_vertices[e.m_count].w);
      var m = h.GetNegative(),
        n = L.Common.Math.b2Math.MulTMV(d.transformA.R, m);
      L.Common.Math.b2Vec2.Free(m);
      e.m_vertices[e.m_count].indexA = d.proxyA.GetSupport(n);
      L.Common.Math.b2Vec2.Free(n);
      e.m_vertices[e.m_count].wA = L.Common.Math.b2Math.MulX(d.transformA, d.proxyA.GetVertex(e.m_vertices[e.m_count].indexA));
      m = L.Common.Math.b2Math.MulTMV(d.transformB.R, h);
      L.Common.Math.b2Vec2.Free(h);
      e.m_vertices[e.m_count].indexB = d.proxyB.GetSupport(m);
      L.Common.Math.b2Vec2.Free(m);
      e.m_vertices[e.m_count].wB = L.Common.Math.b2Math.MulX(d.transformB, d.proxyB.GetVertex(e.m_vertices[e.m_count].indexB));
      e.m_vertices[e.m_count].w = L.Common.Math.b2Math.SubtractVV(e.m_vertices[e.m_count].wB, e.m_vertices[e.m_count].wA);
      f++;
      m = !1;
      for (h = 0; h < g.length; h++) if (e.m_vertices[e.m_count].indexA == g[h].indexA && e.m_vertices[e.m_count].indexB == g[h].indexB) {
        m = !0;
        break;
      }
      if (m) break;
      e.m_count++;
    }
    e.GetWitnessPoints(a.pointA, a.pointB);
    f = L.Common.Math.b2Math.SubtractVV(a.pointA, a.pointB);
    a.distance = f.Length();
    L.Common.Math.b2Vec2.Free(f);
    e.WriteCache(b);
    L.Collision.b2Simplex.Free(e);
    d.useRadii && (b = d.proxyA.GetRadius(), d = d.proxyB.GetRadius(), a.distance > b + d && a.distance > Number.MIN_VALUE ? (a.distance -= b + d, e = L.Common.Math.b2Math.SubtractVV(a.pointB, a.pointA), e.Normalize(), a.pointA.x += b * e.x, a.pointA.y += b * e.y, a.pointB.x -= d * e.x, a.pointB.y -= d * e.y, L.Common.Math.b2Vec2.Free(e)) : (d = L.Common.Math.b2Vec2.Get(0, 0), d.x = .5 * (a.pointA.x + a.pointB.x), d.y = .5 * (a.pointA.y + a.pointB.y), a.pointA.x = a.pointB.x = d.x, a.pointA.y = a.pointB.y = d.y, a.distance = 0, L.Common.Math.b2Vec2.Free(d)));
  };
  L.Collision.b2DistanceInput = function () {
    I.get("Box2D.Collision.b2DistanceInput").trackCreate();
    this.useRadii = !1;
    this.transformB = this.transformA = this.proxyB = this.proxyA = null;
  };
  L.Collision.b2DistanceOutput = function () {
    I.get("Box2D.Collision.b2DistanceOutput").trackCreate();
    this.pointA = L.Common.Math.b2Vec2.Get(0, 0);
    this.pointB = L.Common.Math.b2Vec2.Get(0, 0);
    this.distance = 0;
  };
  L.Collision.b2DistanceProxy = function () {
    I.get("Box2D.Collision.b2DistanceProxy").trackCreate();
    this.m_radius = this.m_count = 0;
    this.m_vertices = [];
  };
  L.Collision.b2DistanceProxy.prototype.SetValues = function (a, b, d) {
    this.m_count = a;
    this.m_radius = b;
    this.m_vertices = d;
  };
  L.Collision.b2DistanceProxy.prototype.Set = function (a) {
    a.SetDistanceProxy(this);
  };
  L.Collision.b2DistanceProxy.prototype.GetSupport = function (a) {
    for (var b = 0, d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_count; e++) {
      var f = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
      f > d && (b = e, d = f);
    }
    return b;
  };
  L.Collision.b2DistanceProxy.prototype.GetSupportVertex = function (a) {
    return this.m_vertices[this.GetSupport(a)];
  };
  L.Collision.b2DistanceProxy.prototype.GetVertexCount = function () {
    return this.m_count;
  };
  L.Collision.b2DistanceProxy.prototype.GetVertex = function (a) {
    void 0 === a && (a = 0);
    L.Common.b2Settings.b2Assert(0 <= a && a < this.m_count);
    return this.m_vertices[a];
  };
  L.Collision.b2DistanceProxy.prototype.GetRadius = function () {
    return this.m_radius;
  };
  L.Collision.b2SimplexCache = function () {
    I.get("Box2D.Collision.b2SimplexCache").trackCreate();
    this.indexA = [0, 0, 0];
    this.indexB = [0, 0, 0];
  };
  L.Collision.Shapes.b2Shape = function () {
    I.get("Box2D.Collision.Shapes.b2Shape").trackCreate();
    this.m_radius = L.Common.b2Settings.b2_linearSlop;
  };
  L.Collision.Shapes.b2Shape.prototype.GetTypeName = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.Copy = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.Set = function (a) {
    this.m_radius = a.m_radius;
  };
  L.Collision.Shapes.b2Shape.prototype.TestPoint = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.RayCast = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.ComputeAABB = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.ComputeMass = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.ComputeSubmergedArea = c.abstractMethod;
  L.Collision.Shapes.b2Shape.prototype.SetDistanceProxy = c.abstractMethod;
  L.Collision.Shapes.b2Shape.TestOverlap = function (a, b, d, e) {
    var f = new L.Collision.b2DistanceInput();
    f.proxyA = new L.Collision.b2DistanceProxy();
    f.proxyA.Set(a);
    f.proxyB = new L.Collision.b2DistanceProxy();
    f.proxyB.Set(d);
    f.transformA = b;
    f.transformB = e;
    f.useRadii = !0;
    a = new L.Collision.b2SimplexCache();
    a.count = 0;
    b = new L.Collision.b2DistanceOutput();
    L.Collision.b2Distance.Distance(b, a, f);
    L.Common.Math.b2Vec2.Free(b.pointA);
    L.Common.Math.b2Vec2.Free(b.pointB);
    return b.distance < 10 * Number.MIN_VALUE;
  };
  L.Collision.Shapes.b2Shape.prototype.GetRadius = function () {
    return this.m_radius;
  };
  L.Collision.Shapes.b2Shape.e_startsInsideCollide = -1;
  L.Collision.Shapes.b2Shape.e_missCollide = 0;
  L.Collision.Shapes.b2Shape.e_hitCollide = 1;
  L.Collision.Shapes.b2EdgeShape = function (a, b) {
    I.get("Box2D.Collision.Shapes.b2EdgeShape").trackCreate();
    L.Collision.Shapes.b2Shape.call(this);
    this.m_nextEdge = this.m_prevEdge = null;
    this.m_v1 = a;
    this.m_v2 = b;
    this.m_direction = L.Common.Math.b2Vec2.Get(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
    this.m_length = this.m_direction.Normalize();
    this.m_normal = L.Common.Math.b2Vec2.Get(this.m_direction.y, -this.m_direction.x);
    this.m_coreV1 = L.Common.Math.b2Vec2.Get(-L.Common.b2Settings.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -L.Common.b2Settings.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
    this.m_coreV2 = L.Common.Math.b2Vec2.Get(-L.Common.b2Settings.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -L.Common.b2Settings.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
    this.m_cornerDir1 = this.m_normal;
    this.m_cornerDir2 = L.Common.Math.b2Vec2.Get(-this.m_normal.x, -this.m_normal.y);
    this.m_cornerConvex2 = this.m_cornerConvex1 = !1;
  };
  c.inherits(L.Collision.Shapes.b2EdgeShape, L.Collision.Shapes.b2Shape);
  L.Collision.Shapes.b2EdgeShape.prototype.GetTypeName = function () {
    return L.Collision.Shapes.b2EdgeShape.NAME;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.TestPoint = function () {
    return !1;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.RayCast = function (a, b, d) {
    var e = b.p2.x - b.p1.x,
      f = b.p2.y - b.p1.y,
      g = d.R,
      h = d.position.x + (g.col1.x * this.m_v1.x + g.col2.x * this.m_v1.y),
      m = d.position.y + (g.col1.y * this.m_v1.x + g.col2.y * this.m_v1.y),
      n = d.position.y + (g.col1.y * this.m_v2.x + g.col2.y * this.m_v2.y) - m;
    d = -(d.position.x + (g.col1.x * this.m_v2.x + g.col2.x * this.m_v2.y) - h);
    g = 100 * Number.MIN_VALUE;
    var p = -(e * n + f * d);
    if (p > g) {
      h = b.p1.x - h;
      var q = b.p1.y - m;
      m = h * n + q * d;
      if (0 <= m && m <= b.maxFraction * p && (b = -e * q + f * h, -g * p <= b && b <= p * (1 + g))) return a.fraction = m / p, b = Math.sqrt(n * n + d * d), a.normal.x = n / b, a.normal.y = d / b, !0;
    }
    return !1;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.ComputeAABB = function (a, b) {
    var d = b.R,
      e = b.position.x + (d.col1.x * this.m_v1.x + d.col2.x * this.m_v1.y),
      f = b.position.y + (d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
      g = b.position.x + (d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y);
    b = b.position.y + (d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
    e < g ? (a.lowerBound.x = e, a.upperBound.x = g) : (a.lowerBound.x = g, a.upperBound.x = e);
    f < b ? (a.lowerBound.y = f, a.upperBound.y = b) : (a.lowerBound.y = b, a.upperBound.y = f);
  };
  L.Collision.Shapes.b2EdgeShape.prototype.ComputeMass = function (a) {
    a.mass = 0;
    a.center.SetV(this.m_v1);
    a.I = 0;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.ComputeSubmergedArea = function (a, b, d, e) {
    void 0 === b && (b = 0);
    var f = L.Common.Math.b2Vec2.Get(a.x * b, a.y * b),
      g = L.Common.Math.b2Math.MulX(d, this.m_v1);
    d = L.Common.Math.b2Math.MulX(d, this.m_v2);
    var h = L.Common.Math.b2Math.Dot(a, g) - b;
    a = L.Common.Math.b2Math.Dot(a, d) - b;
    if (0 < h) {
      if (0 < a) return 0;
      g.x = -a / (h - a) * g.x + h / (h - a) * d.x;
      g.y = -a / (h - a) * g.y + h / (h - a) * d.y;
    } else 0 < a && (d.x = -a / (h - a) * g.x + h / (h - a) * d.x, d.y = -a / (h - a) * g.y + h / (h - a) * d.y);
    e.x = (f.x + g.x + d.x) / 3;
    e.y = (f.y + g.y + d.y) / 3;
    return .5 * ((g.x - f.x) * (d.y - f.y) - (g.y - f.y) * (d.x - f.x));
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetLength = function () {
    return this.m_length;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetVertex1 = function () {
    return this.m_v1;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetVertex2 = function () {
    return this.m_v2;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetCoreVertex1 = function () {
    return this.m_coreV1;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetCoreVertex2 = function () {
    return this.m_coreV2;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetNormalVector = function () {
    return this.m_normal;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetDirectionVector = function () {
    return this.m_direction;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetCorner1Vector = function () {
    return this.m_cornerDir1;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetCorner2Vector = function () {
    return this.m_cornerDir2;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.Corner1IsConvex = function () {
    return this.m_cornerConvex1;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.Corner2IsConvex = function () {
    return this.m_cornerConvex2;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetFirstVertex = function (a) {
    var b = a.R;
    return L.Common.Math.b2Vec2.Get(a.position.x + (b.col1.x * this.m_coreV1.x + b.col2.x * this.m_coreV1.y), a.position.y + (b.col1.y * this.m_coreV1.x + b.col2.y * this.m_coreV1.y));
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetNextEdge = function () {
    return this.m_nextEdge;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.GetPrevEdge = function () {
    return this.m_prevEdge;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.Support = function (a, b, d) {
    var e = a.R,
      f = a.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
      g = a.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
      h = a.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
    a = a.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
    return f * b + g * d > h * b + a * d ? L.Common.Math.b2Vec2.Get(f, g) : L.Common.Math.b2Vec2.Get(h, a);
  };
  L.Collision.Shapes.b2EdgeShape.prototype.SetPrevEdge = function (a, b, d, e) {
    this.m_prevEdge = a;
    this.m_coreV1 = b;
    this.m_cornerDir1 = d;
    this.m_cornerConvex1 = e;
  };
  L.Collision.Shapes.b2EdgeShape.prototype.SetNextEdge = function (a, b, d, e) {
    this.m_nextEdge = a;
    this.m_coreV2 = b;
    this.m_cornerDir2 = d;
    this.m_cornerConvex2 = e;
  };
  L.Collision.Shapes.b2EdgeShape.NAME = "b2EdgeShape";
  L.Common.b2Color = function (a, b, d) {
    I.get("Box2D.Common.b2Color").trackCreate();
    this._r = 255 * L.Common.Math.b2Math.Clamp(a, 0, 1);
    this._g = 255 * L.Common.Math.b2Math.Clamp(b, 0, 1);
    this._b = 255 * L.Common.Math.b2Math.Clamp(d, 0, 1);
  };
  L.Common.b2Color.prototype.Set = function (a, b, d) {
    this._r = 255 * L.Common.Math.b2Math.Clamp(a, 0, 1);
    this._g = 255 * L.Common.Math.b2Math.Clamp(b, 0, 1);
    this._b = 255 * L.Common.Math.b2Math.Clamp(d, 0, 1);
  };
  L.Common.b2Color.prototype.GetColor = function () {
    return this._r << 16 | this._g << 8 | this._b;
  };
  L.Dynamics.b2BodyListNode = function (a) {
    I.get("Box2D.Dynamics.b2BodyListNode").trackCreate();
    this.body = a;
    this.previous = this.next = null;
  };
  L.Dynamics.b2BodyListNode.prototype.SetNextNode = function (a) {
    this.next = a;
  };
  L.Dynamics.b2BodyListNode.prototype.SetPreviousNode = function (a) {
    this.previous = a;
  };
  L.Dynamics.b2BodyListNode.prototype.GetBody = function () {
    return this.body;
  };
  L.Dynamics.b2BodyListNode.prototype.GetNextNode = function () {
    return this.next;
  };
  L.Dynamics.b2BodyListNode.prototype.GetPreviousNode = function () {
    return this.previous;
  };
  L.Dynamics.b2BodyList = function () {
    I.get("Box2D.Dynamics.b2BodyList").trackCreate();
    this.bodyFirstNodes = [];
    for (var a = 0; a <= L.Dynamics.b2BodyList.TYPES.allBodies; a++) this.bodyFirstNodes[a] = null;
    this.bodyLastNodes = [];
    for (a = 0; a <= L.Dynamics.b2BodyList.TYPES.allBodies; a++) this.bodyLastNodes[a] = null;
    this.bodyNodeLookup = {};
    this.bodyCount = 0;
  };
  L.Dynamics.b2BodyList.prototype.GetFirstNode = function (a) {
    return this.bodyFirstNodes[a];
  };
  L.Dynamics.b2BodyList.prototype.AddBody = function (a) {
    var b = a.ID;
    null == this.bodyNodeLookup[b] && (this.CreateNode(a, b, L.Dynamics.b2BodyList.TYPES.allBodies), this.UpdateBody(a), a.m_lists.push(this), this.bodyCount++);
  };
  L.Dynamics.b2BodyList.prototype.UpdateBody = function (a) {
    var b = a.GetType(),
      d = a.ID,
      e = a.IsAwake(),
      f = a.IsActive();
    b == L.Dynamics.b2BodyDef.b2_dynamicBody ? this.CreateNode(a, d, L.Dynamics.b2BodyList.TYPES.dynamicBodies) : this.RemoveNode(d, L.Dynamics.b2BodyList.TYPES.dynamicBodies);
    b != L.Dynamics.b2BodyDef.b2_staticBody ? this.CreateNode(a, d, L.Dynamics.b2BodyList.TYPES.nonStaticBodies) : this.RemoveNode(d, L.Dynamics.b2BodyList.TYPES.nonStaticBodies);
    b != L.Dynamics.b2BodyDef.b2_staticBody && f && e ? this.CreateNode(a, d, L.Dynamics.b2BodyList.TYPES.nonStaticActiveAwakeBodies) : this.RemoveNode(d, L.Dynamics.b2BodyList.TYPES.nonStaticActiveAwakeBodies);
    e ? this.CreateNode(a, d, L.Dynamics.b2BodyList.TYPES.awakeBodies) : this.RemoveNode(d, L.Dynamics.b2BodyList.TYPES.awakeBodies);
    f ? this.CreateNode(a, d, L.Dynamics.b2BodyList.TYPES.activeBodies) : this.RemoveNode(d, L.Dynamics.b2BodyList.TYPES.activeBodies);
  };
  L.Dynamics.b2BodyList.prototype.RemoveBody = function (a) {
    var b = a.ID;
    if (null != this.bodyNodeLookup[b]) {
      c.array.remove(a.m_lists, this);
      for (a = 0; a <= L.Dynamics.b2BodyList.TYPES.allBodies; a++) this.RemoveNode(b, a);
      delete this.bodyNodeLookup[b];
      this.bodyCount--;
    }
  };
  L.Dynamics.b2BodyList.prototype.RemoveNode = function (a, b) {
    var d = this.bodyNodeLookup[a];
    null != d && (a = d[b], null != a && (d[b] = null, d = a.GetPreviousNode(), a = a.GetNextNode(), null == d ? this.bodyFirstNodes[b] = a : d.SetNextNode(a), null == a ? this.bodyLastNodes[b] = d : a.SetPreviousNode(d)));
  };
  L.Dynamics.b2BodyList.prototype.CreateNode = function (a, b, d) {
    var e = this.bodyNodeLookup[b];
    if (null == e) {
      e = [];
      for (var f = 0; f <= L.Dynamics.b2BodyList.TYPES.allBodies; f++) e[f] = null;
      this.bodyNodeLookup[b] = e;
    }
    null == e[d] && (e[d] = new L.Dynamics.b2BodyListNode(a), a = this.bodyLastNodes[d], null != a ? a.SetNextNode(e[d]) : this.bodyFirstNodes[d] = e[d], e[d].SetPreviousNode(a), this.bodyLastNodes[d] = e[d]);
  };
  L.Dynamics.b2BodyList.prototype.GetBodyCount = function () {
    return this.bodyCount;
  };
  L.Dynamics.b2BodyList.TYPES = {
    dynamicBodies: 0,
    nonStaticBodies: 1,
    activeBodies: 2,
    nonStaticActiveAwakeBodies: 3,
    awakeBodies: 4,
    allBodies: 5
  };
  L.Collision.b2ContactID = function () {
    I.get("Box2D.Collision.b2ContactID").trackCreate();
    this._incidentVertex = this._incidentEdge = this._referenceEdge = this._key = 0;
  };
  L.Collision.b2ContactID.prototype.GetKey = function () {
    return this._key;
  };
  L.Collision.b2ContactID.prototype.SetKey = function (a) {
    this._key = a;
    this._referenceEdge = this._key & 255;
    this._incidentEdge = (this._key & 65280) >> 8 & 255;
    this._incidentVertex = (this._key & 16711680) >> 16 & 255;
    this._flip = (this._key & 4278190080) >> 24 & 255;
  };
  L.Collision.b2ContactID.prototype.Set = function (a) {
    this.SetKey(a._key);
  };
  L.Collision.b2ContactID.prototype.SetReferenceEdge = function (a) {
    this._referenceEdge = a;
    this._key = this._key & 4294967040 | this._referenceEdge & 255;
  };
  L.Collision.b2ContactID.prototype.SetIncidentEdge = function (a) {
    this._incidentEdge = a;
    this._key = this._key & 4294902015 | this._incidentEdge << 8 & 65280;
  };
  L.Collision.b2ContactID.prototype.SetIncidentVertex = function (a) {
    this._incidentVertex = a;
    this._key = this._key & 4278255615 | this._incidentVertex << 16 & 16711680;
  };
  L.Collision.b2ContactID.prototype.SetFlip = function (a) {
    this._flip = a;
    this._key = this._key & 16777215 | this._flip << 24 & 4278190080;
  };
  L.Collision.b2ContactID.prototype.Copy = function () {
    var a = new L.Collision.b2ContactID();
    a.Set(this);
    return a;
  };
  L.Collision.b2ContactPoint = function () {
    I.get("Box2D.Collision.b2ContactPoint").trackCreate();
    this.position = L.Common.Math.b2Vec2.Get(0, 0);
    this.velocity = L.Common.Math.b2Vec2.Get(0, 0);
    this.normal = L.Common.Math.b2Vec2.Get(0, 0);
    this.id = new L.Collision.b2ContactID();
  };
  L.Collision.b2DynamicTreeNode = function (a) {
    I.get("Box2D.Collision.b2DynamicTreeNode").trackCreate();
    this.aabb = L.Collision.b2AABB.Get();
    this.parent = this.child2 = this.child1 = null;
    this.fixture = a;
  };
  L.Collision.b2DynamicTreeNode._freeCache = [];
  L.Collision.b2DynamicTreeNode.Get = function (a) {
    "undefined" == typeof a && (a = null);
    if (0 < L.Collision.b2DynamicTreeNode._freeCache.length) {
      var b = L.Collision.b2DynamicTreeNode._freeCache.pop();
      b.fixture = a;
      b.aabb.SetZero();
      return b;
    }
    return new L.Collision.b2DynamicTreeNode(a);
  };
  L.Collision.b2DynamicTreeNode.prototype.Destroy = function () {
    this.fixture = this.parent = this.child2 = this.child1 = null;
    L.Collision.b2DynamicTreeNode._freeCache.push(this);
  };
  L.Collision.b2DynamicTreeNode.prototype.IsLeaf = function () {
    return null === this.child1;
  };
  L.Collision.b2DynamicTreeNode.prototype.SetChild1 = function (a) {
    this.child1 = a;
  };
  L.Collision.b2DynamicTreeNode.prototype.GetChild1 = function () {
    return this.child1;
  };
  L.Collision.b2DynamicTreeNode.prototype.SetChild2 = function (a) {
    this.child2 = a;
  };
  L.Collision.b2DynamicTreeNode.prototype.GetChild2 = function () {
    return this.child2;
  };
  L.Collision.b2DynamicTreeNode.prototype.SetParent = function (a) {
    this.parent = a;
  };
  L.Collision.b2DynamicTreeNode.prototype.GetParent = function () {
    return this.parent;
  };
  L.Collision.b2DynamicTreeNode.prototype.GetAABB = function () {
    return this.aabb;
  };
  L.Collision.b2DynamicTreeNode.prototype.GetFixture = function () {
    return this.fixture;
  };
  L.Collision.b2DynamicTree = function () {
    I.get("Box2D.Collision.b2DynamicTree").trackCreate();
    this.m_root = null;
    this.m_path = 0;
  };
  L.Collision.b2DynamicTree.prototype.CreateProxy = function (a, b) {
    b = L.Collision.b2DynamicTreeNode.Get(b);
    var d = L.Common.b2Settings.b2_aabbExtension,
      e = L.Common.b2Settings.b2_aabbExtension;
    b.GetAABB().Set(a.GetMinX() - d, a.GetMinY() - e, a.GetMaxX() + d, a.GetMaxY() + e);
    this.InsertLeaf(b);
    return b;
  };
  L.Collision.b2DynamicTree.prototype.DestroyProxy = function (a) {
    this.RemoveLeaf(a);
    a.Destroy();
  };
  L.Collision.b2DynamicTree.prototype.MoveProxy = function (a, b, d) {
    L.Common.b2Settings.b2Assert(a.IsLeaf());
    if (a.GetAABB().Contains(b)) return !1;
    this.RemoveLeaf(a);
    var e = L.Common.b2Settings.b2_aabbExtension + L.Common.b2Settings.b2_aabbMultiplier * Math.abs(d.x);
    d = L.Common.b2Settings.b2_aabbExtension + L.Common.b2Settings.b2_aabbMultiplier * Math.abs(d.y);
    a.GetAABB().Set(b.GetMinX() - e, b.GetMinY() - d, b.GetMaxX() + e, b.GetMaxY() + d);
    this.InsertLeaf(a);
    return !0;
  };
  L.Collision.b2DynamicTree.prototype.Rebalance = function (a) {
    if (null !== this.m_root) for (var b = 0; b < a; b++) {
      for (var d = this.m_root, e = 0; !d.IsLeaf();) d = this.m_path >> e & 1 ? d.GetChild2() : d.GetChild1(), e = e + 1 & 31;
      this.m_path++;
      this.RemoveLeaf(d);
      this.InsertLeaf(d);
    }
  };
  L.Collision.b2DynamicTree.prototype.GetFatAABB = function (a) {
    return a.GetAABB();
  };
  L.Collision.b2DynamicTree.prototype.Query = function (a, b, d) {
    if (null !== this.m_root) {
      var e = [];
      for (e.push(this.m_root); 0 < e.length;) {
        var f = e.pop();
        if (f.GetAABB().TestOverlap(b)) if (f.IsLeaf()) {
          if (!a.call(d, f.fixture)) break;
        } else e.push(f.GetChild1()), e.push(f.GetChild2());
      }
    }
  };
  L.Collision.b2DynamicTree.prototype.RayCast = function (a, b) {
    if (null !== this.m_root) {
      var d = L.Common.Math.b2Math.SubtractVV(b.p1, b.p2);
      d.Normalize();
      var e = L.Common.Math.b2Math.CrossFV(1, d);
      L.Common.Math.b2Vec2.Free(d);
      d = L.Common.Math.b2Math.AbsV(e);
      var f = b.maxFraction,
        g = b.p1.x + f * (b.p2.x - b.p1.x);
      f = b.p1.y + f * (b.p2.y - b.p1.y);
      var h = L.Collision.b2AABB.Get();
      h.Set(Math.min(b.p1.x, g), Math.min(b.p1.y, f), Math.max(b.p1.x, g), Math.max(b.p1.y, f));
      var m = [];
      for (m.push(this.m_root); 0 < m.length;) if (g = m.pop(), g.GetAABB().TestOverlap(h)) {
        f = g.GetAABB().GetCenter();
        var n = g.GetAABB().GetExtents(),
          p = Math.abs(e.x * (b.p1.x - f.x) + e.y * (b.p1.y - f.y)) - d.x * n.x - d.y * n.y;
        L.Common.Math.b2Vec2.Free(f);
        L.Common.Math.b2Vec2.Free(n);
        if (!(0 < p)) if (g.IsLeaf()) {
          new L.Collision.b2RayCastInput(b.p1, b.p2, b.maxFraction);
          f = a(b, g.GetFixture());
          if (0 == f) break;
          0 < f && (g = b.p1.x + f * (b.p2.x - b.p1.x), f = b.p1.y + f * (b.p2.y - b.p1.y), h.Set(Math.min(b.p1.x, g), Math.min(b.p1.y, f), Math.max(b.p1.x, g), Math.max(b.p1.y, f)));
        } else m.push(g.GetChild1()), m.push(g.GetChild2());
      }
      L.Common.Math.b2Vec2.Free(e);
      L.Common.Math.b2Vec2.Free(d);
      L.Collision.b2AABB.Free(h);
    }
  };
  L.Collision.b2DynamicTree.prototype.InsertLeaf = function (a) {
    if (null === this.m_root) this.m_root = a, this.m_root.SetParent(null);else {
      var b = this.GetBestSibling(a),
        d = b.GetParent(),
        e = L.Collision.b2DynamicTreeNode.Get();
      e.SetParent(d);
      e.GetAABB().Combine(a.GetAABB(), b.GetAABB());
      if (d) for (b.GetParent().GetChild1() == b ? d.SetChild1(e) : d.SetChild2(e), e.SetChild1(b), e.SetChild2(a), b.SetParent(e), a.SetParent(e); d && !d.GetAABB().Contains(e.GetAABB());) d.GetAABB().Combine(d.GetChild1().GetAABB(), d.GetChild2().GetAABB()), e = d, d = d.GetParent();else e.SetChild1(b), e.SetChild2(a), b.SetParent(e), a.SetParent(e), this.m_root = e;
    }
  };
  L.Collision.b2DynamicTree.prototype.GetBestSibling = function (a) {
    a = a.GetAABB().GetCenter();
    for (var b = this.m_root; !b.IsLeaf();) {
      var d = b.GetChild1();
      b = b.GetChild2();
      var e = Math.abs((d.GetAABB().GetMinX() + d.GetAABB().GetMaxX()) / 2 - a.x) + Math.abs((d.GetAABB().GetMinY() + d.GetAABB().GetMaxY()) / 2 - a.y),
        f = Math.abs((b.GetAABB().GetMinX() + b.GetAABB().GetMaxX()) / 2 - a.x) + Math.abs((b.GetAABB().GetMinY() + b.GetAABB().GetMaxY()) / 2 - a.y);
      b = e < f ? d : b;
    }
    L.Common.Math.b2Vec2.Free(a);
    return b;
  };
  L.Collision.b2DynamicTree.prototype.RemoveLeaf = function (a) {
    if (a == this.m_root) this.m_root = null;else {
      var b = a.GetParent(),
        d = b.GetParent();
      a = b.GetChild1() == a ? b.GetChild2() : b.GetChild1();
      if (d) for (d.GetChild1() == b ? d.SetChild1(a) : d.SetChild2(a), a.SetParent(d); d;) {
        a = d.GetAABB();
        d.GetAABB().Combine(d.GetChild1().GetAABB(), d.GetChild2().GetAABB());
        if (a.Contains(d.GetAABB())) break;
        d = d.GetParent();
      } else this.m_root = a, a.SetParent(null);
      b.Destroy();
    }
  };
  L.Collision.b2DynamicTreePair = function (a, b) {
    I.get("Box2D.Collision.b2DynamicTreePair").trackCreate();
    this.fixtureA = a;
    this.fixtureB = b;
  };
  L.Collision.b2DynamicTreePair._freeCache = [];
  L.Collision.b2DynamicTreePair.Get = function (a, b) {
    I.get("Box2D.Collision.b2DynamicTreePair").trackGet();
    if (0 < L.Collision.b2DynamicTreePair._freeCache.length) {
      var d = L.Collision.b2DynamicTreePair._freeCache.pop();
      d.fixtureA = a;
      d.fixtureB = b;
      return d;
    }
    return new L.Collision.b2DynamicTreePair(a, b);
  };
  L.Collision.b2DynamicTreePair.Free = function (a) {
    null != a && (I.get("Box2D.Collision.b2DynamicTreePair").trackFree(), L.Collision.b2DynamicTreePair._freeCache.push(a));
  };
  L.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
  L.Collision.b2DynamicTreeBroadPhase = function () {
    I.get("Box2D.Collision.b2DynamicTreeBroadPhase").trackCreate();
    this.m_tree = new L.Collision.b2DynamicTree();
    this.m_moveBuffer = [];
    this.queryProxy = this.updatePairsCallback = this.lastQueryFixtureB = this.lastQueryFixtureA = null;
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.CreateProxy = function (a, b) {
    a = this.m_tree.CreateProxy(a, b);
    this.BufferMove(a);
    return a;
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.DestroyProxy = function (a) {
    this.UnBufferMove(a);
    this.m_tree.DestroyProxy(a);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.MoveProxy = function (a, b, d) {
    this.m_tree.MoveProxy(a, b, d) && this.BufferMove(a);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.TestOverlap = function (a, b) {
    a = this.m_tree.GetFatAABB(a);
    b = this.m_tree.GetFatAABB(b);
    return a.TestOverlap(b);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.GetFatAABB = function (a) {
    return this.m_tree.GetFatAABB(a);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.UpdatePairs = function (a) {
    this.lastQueryFixtureB = this.lastQueryFixtureA = null;
    for (this.updatePairsCallback = a; 0 < this.m_moveBuffer.length;) this.queryProxy = this.m_moveBuffer.pop(), this.m_tree.Query(this.QueryCallback, this.m_tree.GetFatAABB(this.queryProxy), this);
    this.queryProxy = this.updatePairsCallback = this.lastQueryFixtureB = this.lastQueryFixtureA = null;
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.QueryCallback = function (a) {
    a == this.queryProxy.fixture || this.queryProxy.fixture == this.lastQueryFixtureA && a == this.lastQueryFixtureB || this.queryProxy.fixture == this.lastQueryFixtureB && a == this.lastQueryFixtureA || (this.updatePairsCallback(this.queryProxy.fixture, a), this.lastQueryFixtureA = this.queryProxy.fixture, this.lastQueryFixtureB = a);
    return !0;
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.Query = function (a, b) {
    this.m_tree.Query(a, b);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.RayCast = function (a, b) {
    this.m_tree.RayCast(a, b);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.Rebalance = function (a) {
    this.m_tree.Rebalance(a);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.BufferMove = function (a) {
    this.m_moveBuffer.push(a);
  };
  L.Collision.b2DynamicTreeBroadPhase.prototype.UnBufferMove = function (a) {
    c.array.remove(this.m_moveBuffer, a);
  };
  L.Collision.b2DynamicTreeBroadPhase.__implements = {};
  L.Collision.b2DynamicTreeBroadPhase.__implements[L.Collision.IBroadPhase] = !0;
  L.Dynamics.iContactFilter = function () {};
  L.Dynamics.iContactFilter.prototype.ShouldCollide = function () {};
  L.Dynamics.b2ContactFilter = function () {
    I.get("Box2D.Dynamics.b2ContactFilter").trackCreate();
  };
  L.Dynamics.b2ContactFilter.prototype.ShouldCollide = function (a, b) {
    a = a.GetFilterData();
    b = b.GetFilterData();
    return a.groupIndex == b.groupIndex && 0 != a.groupIndex ? 0 < a.groupIndex : 0 != (a.maskBits & b.categoryBits) && 0 != (a.categoryBits & b.maskBits);
  };
  L.Dynamics.b2ContactFilter.b2_defaultFilter = new L.Dynamics.b2ContactFilter();
  L.Dynamics.iContactListener = function () {};
  L.Dynamics.iContactListener.prototype.BeginContact = function () {};
  L.Dynamics.iContactListener.prototype.EndContact = function () {};
  L.Dynamics.iContactListener.prototype.PreSolve = function () {};
  L.Dynamics.iContactListener.prototype.PostSolve = function () {};
  L.Dynamics.b2ContactListener = function () {
    I.get("Box2D.Dynamics.b2DebugDraw").trackCreate();
  };
  L.Dynamics.b2ContactListener.prototype.BeginContact = function () {};
  L.Dynamics.b2ContactListener.prototype.EndContact = function () {};
  L.Dynamics.b2ContactListener.prototype.PreSolve = function () {};
  L.Dynamics.b2ContactListener.prototype.PostSolve = function () {};
  L.Dynamics.b2ContactListener.b2_defaultListener = new L.Dynamics.b2ContactListener();
  L.Dynamics.Contacts.b2ContactRegister = function () {
    this.pool = null;
    this.poolCount = 0;
  };
  L.Collision.b2ManifoldPoint = function () {
    I.get("Box2D.Collision.b2ManifoldPoint").trackCreate();
    this.m_localPoint = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_id = new L.Collision.b2ContactID();
    this.m_tangentImpulse = this.m_normalImpulse = 0;
  };
  L.Collision.b2ManifoldPoint.prototype.Reset = function () {
    this.m_localPoint.SetZero();
    this.m_tangentImpulse = this.m_normalImpulse = 0;
    this.m_id.SetKey(0);
  };
  L.Collision.b2ManifoldPoint.prototype.Set = function (a) {
    this.m_localPoint.SetV(a.m_localPoint);
    this.m_normalImpulse = a.m_normalImpulse;
    this.m_tangentImpulse = a.m_tangentImpulse;
    this.m_id.Set(a.m_id);
  };
  L.Collision.b2Manifold = function () {
    I.get("Box2D.Collision.b2Manifold").trackCreate();
    this.m_type = this.m_pointCount = 0;
    this.m_points = [];
    for (var a = 0; a < L.Common.b2Settings.b2_maxManifoldPoints; a++) this.m_points[a] = new L.Collision.b2ManifoldPoint();
    this.m_localPlaneNormal = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_localPoint = L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.b2Manifold.prototype.Reset = function () {
    for (var a = 0; a < L.Common.b2Settings.b2_maxManifoldPoints; a++) this.m_points[a].Reset();
    this.m_localPlaneNormal.SetZero();
    this.m_localPoint.SetZero();
    this.m_pointCount = this.m_type = 0;
  };
  L.Collision.b2Manifold.prototype.Set = function (a) {
    this.m_pointCount = a.m_pointCount;
    for (var b = 0; b < L.Common.b2Settings.b2_maxManifoldPoints; b++) this.m_points[b].Set(a.m_points[b]);
    this.m_localPlaneNormal.SetV(a.m_localPlaneNormal);
    this.m_localPoint.SetV(a.m_localPoint);
    this.m_type = a.m_type;
  };
  L.Collision.b2Manifold.prototype.Copy = function () {
    var a = new L.Collision.b2Manifold();
    a.Set(this);
    return a;
  };
  L.Collision.b2Manifold.prototype.SetPointCount = function (a) {
    this.m_pointCount = a;
  };
  L.Collision.b2Manifold.prototype.SetType = function (a) {
    this.m_type = a;
  };
  L.Collision.b2Manifold.e_circles = 1;
  L.Collision.b2Manifold.e_faceA = 2;
  L.Collision.b2Manifold.e_faceB = 4;
  L.Collision.b2TOIInput = function () {
    I.get("Box2D.Collision.b2TOIInput").trackCreate();
    this.proxyA = new L.Collision.b2DistanceProxy();
    this.proxyB = new L.Collision.b2DistanceProxy();
    this.sweepA = new L.Common.Math.b2Sweep();
    this.sweepB = new L.Common.Math.b2Sweep();
  };
  L.Collision.b2SeparationFunction = function () {
    I.get("Box2D.Collision.b2SeparationFunction").trackCreate();
    this.m_localPoint = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_axis = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_proxyB = this.m_proxyA = null;
  };
  L.Collision.b2SeparationFunction.prototype.Initialize = function (a, b, d, e, f) {
    this.m_proxyA = b;
    this.m_proxyB = e;
    b = a.count;
    L.Common.b2Settings.b2Assert(0 < b && 3 > b);
    if (1 == b) {
      this.m_type = L.Collision.b2SeparationFunction.e_points;
      var g = this.m_proxyA.GetVertex(a.indexA[0]);
      a = this.m_proxyB.GetVertex(a.indexB[0]);
      var h = g;
      var m = d.R;
      g = d.position.x + (m.col1.x * h.x + m.col2.x * h.y);
      d = d.position.y + (m.col1.y * h.x + m.col2.y * h.y);
      h = a;
      m = f.R;
      a = f.position.x + (m.col1.x * h.x + m.col2.x * h.y);
      f = f.position.y + (m.col1.y * h.x + m.col2.y * h.y);
      this.m_axis.x = a - g;
      this.m_axis.y = f - d;
      this.m_axis.Normalize();
    } else if (a.indexB[0] == a.indexB[1]) {
      this.m_type = L.Collision.b2SeparationFunction.e_faceA;
      b = this.m_proxyA.GetVertex(a.indexA[0]);
      e = this.m_proxyA.GetVertex(a.indexA[1]);
      a = this.m_proxyB.GetVertex(a.indexB[0]);
      this.m_localPoint.x = .5 * (b.x + e.x);
      this.m_localPoint.y = .5 * (b.y + e.y);
      var n = L.Common.Math.b2Math.SubtractVV(e, b);
      L.Common.Math.b2Vec2.Free(this.m_axis);
      this.m_axis = L.Common.Math.b2Math.CrossVF(n, 1);
      L.Common.Math.b2Vec2.Free(n);
      this.m_axis.Normalize();
      h = this.m_axis;
      m = d.R;
      b = m.col1.x * h.x + m.col2.x * h.y;
      e = m.col1.y * h.x + m.col2.y * h.y;
      h = this.m_localPoint;
      m = d.R;
      g = d.position.x + (m.col1.x * h.x + m.col2.x * h.y);
      d = d.position.y + (m.col1.y * h.x + m.col2.y * h.y);
      h = a;
      m = f.R;
      a = f.position.x + (m.col1.x * h.x + m.col2.x * h.y);
      f = f.position.y + (m.col1.y * h.x + m.col2.y * h.y);
      0 > (a - g) * b + (f - d) * e && this.m_axis.NegativeSelf();
    } else if (a.indexA[0] == a.indexA[0]) this.m_type = L.Collision.b2SeparationFunction.e_faceB, m = this.m_proxyB.GetVertex(a.indexB[0]), h = this.m_proxyB.GetVertex(a.indexB[1]), g = this.m_proxyA.GetVertex(a.indexA[0]), this.m_localPoint.x = .5 * (m.x + h.x), this.m_localPoint.y = .5 * (m.y + h.y), n = L.Common.Math.b2Math.SubtractVV(h, m), L.Common.Math.b2Vec2.Free(this.m_axis), this.m_axis = L.Common.Math.b2Math.CrossVF(n, 1), L.Common.Math.b2Vec2.Free(n), this.m_axis.Normalize(), h = this.m_axis, m = f.R, b = m.col1.x * h.x + m.col2.x * h.y, e = m.col1.y * h.x + m.col2.y * h.y, h = this.m_localPoint, m = f.R, a = f.position.x + (m.col1.x * h.x + m.col2.x * h.y), f = f.position.y + (m.col1.y * h.x + m.col2.y * h.y), h = g, m = d.R, g = d.position.x + (m.col1.x * h.x + m.col2.x * h.y), d = d.position.y + (m.col1.y * h.x + m.col2.y * h.y), 0 > (g - a) * b + (d - f) * e && this.m_axis.NegativeSelf();else {
      b = this.m_proxyA.GetVertex(a.indexA[0]);
      e = this.m_proxyA.GetVertex(a.indexA[1]);
      m = this.m_proxyB.GetVertex(a.indexB[0]);
      h = this.m_proxyB.GetVertex(a.indexB[1]);
      n = L.Common.Math.b2Math.SubtractVV(e, b);
      var p = L.Common.Math.b2Math.MulMV(d.R, n);
      L.Common.Math.b2Vec2.Free(n);
      n = L.Common.Math.b2Math.SubtractVV(h, m);
      f = L.Common.Math.b2Math.MulMV(f.R, n);
      L.Common.Math.b2Vec2.Free(n);
      d = p.x * p.x + p.y * p.y;
      g = f.x * f.x + f.y * f.y;
      var q = L.Common.Math.b2Math.SubtractVV(f, p);
      a = p.x * q.x + p.y * q.y;
      n = f.x * q.x + f.y * q.y;
      L.Common.Math.b2Vec2.Free(q);
      p = p.x * f.x + p.y * f.y;
      q = d * g - p * p;
      f = 0;
      0 != q && (f = L.Common.Math.b2Math.Clamp((p * n - a * g) / q, 0, 1));
      0 > (p * f + n) / g && (f = L.Common.Math.b2Math.Clamp((p - a) / d, 0, 1));
      g = L.Common.Math.b2Vec2.Get(0, 0);
      g.x = b.x + f * (e.x - b.x);
      g.y = b.y + f * (e.y - b.y);
      a = L.Common.Math.b2Vec2.Get(0, 0);
      a.x = m.x + f * (h.x - m.x);
      a.y = m.y + f * (h.y - m.y);
      0 == f || 1 == f ? (this.m_type = L.Collision.b2SeparationFunction.e_faceB, n = L.Common.Math.b2Math.SubtractVV(h, m), L.Common.Math.b2Vec2.Free(this.m_axis), this.m_axis = L.Common.Math.b2Math.CrossVF(n, 1), L.Common.Math.b2Vec2.Free(n), this.m_axis.Normalize(), this.m_localPoint = a) : (this.m_type = L.Collision.b2SeparationFunction.e_faceA, n = L.Common.Math.b2Math.SubtractVV(e, b), L.Common.Math.b2Vec2.Free(this.m_axis), this.m_axis = L.Common.Math.b2Math.CrossVF(n, 1), L.Common.Math.b2Vec2.Free(n), this.m_localPoint = g);
      0 > f && this.m_axis.NegativeSelf();
      L.Common.Math.b2Vec2.Free(g);
      L.Common.Math.b2Vec2.Free(a);
    }
  };
  L.Collision.b2SeparationFunction.prototype.Evaluate = function (a, b) {
    var d = 0;
    switch (this.m_type) {
      case L.Collision.b2SeparationFunction.e_points:
        var e = L.Common.Math.b2Math.MulTMV(a.R, this.m_axis),
          f = this.m_axis.GetNegative();
        d = L.Common.Math.b2Math.MulTMV(b.R, f);
        L.Common.Math.b2Vec2.Free(f);
        var g = this.m_proxyA.GetSupportVertex(e);
        L.Common.Math.b2Vec2.Free(e);
        e = this.m_proxyB.GetSupportVertex(d);
        L.Common.Math.b2Vec2.Free(d);
        a = L.Common.Math.b2Math.MulX(a, g);
        b = L.Common.Math.b2Math.MulX(b, e);
        d = (b.x - a.x) * this.m_axis.x + (b.y - a.y) * this.m_axis.y;
        L.Common.Math.b2Vec2.Free(a);
        L.Common.Math.b2Vec2.Free(b);
        break;
      case L.Collision.b2SeparationFunction.e_faceA:
        f = L.Common.Math.b2Math.MulMV(a.R, this.m_axis);
        g = f.GetNegative();
        d = L.Common.Math.b2Math.MulTMV(b.R, g);
        L.Common.Math.b2Vec2.Free(g);
        e = this.m_proxyB.GetSupportVertex(d);
        L.Common.Math.b2Vec2.Free(d);
        a = L.Common.Math.b2Math.MulX(a, this.m_localPoint);
        b = L.Common.Math.b2Math.MulX(b, e);
        d = (b.x - a.x) * f.x + (b.y - a.y) * f.y;
        L.Common.Math.b2Vec2.Free(f);
        L.Common.Math.b2Vec2.Free(a);
        L.Common.Math.b2Vec2.Free(b);
        break;
      case L.Collision.b2SeparationFunction.e_faceB:
        f = L.Common.Math.b2Math.MulMV(b.R, this.m_axis);
        g = f.GetNegative();
        e = L.Common.Math.b2Math.MulTMV(a.R, g);
        L.Common.Math.b2Vec2.Free(g);
        g = this.m_proxyA.GetSupportVertex(e);
        L.Common.Math.b2Vec2.Free(e);
        a = L.Common.Math.b2Math.MulX(a, g);
        b = L.Common.Math.b2Math.MulX(b, this.m_localPoint);
        d = (a.x - b.x) * f.x + (a.y - b.y) * f.y;
        L.Common.Math.b2Vec2.Free(f);
        L.Common.Math.b2Vec2.Free(a);
        L.Common.Math.b2Vec2.Free(b);
        break;
      default:
        L.Common.b2Settings.b2Assert(!1);
    }
    return d;
  };
  L.Collision.b2SeparationFunction.e_points = 1;
  L.Collision.b2SeparationFunction.e_faceA = 2;
  L.Collision.b2SeparationFunction.e_faceB = 4;
  L.Collision.b2TimeOfImpact = {};
  L.Collision.b2TimeOfImpact.TimeOfImpact = function (a) {
    L.Collision.b2TimeOfImpact.b2_toiCalls++;
    var b = a.proxyA,
      d = a.proxyB,
      e = a.sweepA,
      f = a.sweepB;
    L.Common.b2Settings.b2Assert(e.t0 == f.t0);
    L.Common.b2Settings.b2Assert(1 - e.t0 > Number.MIN_VALUE);
    var g = b.m_radius + d.m_radius;
    a = a.tolerance;
    var h = 0,
      m = 0,
      n = 0;
    L.Collision.b2TimeOfImpact.s_cache.count = 0;
    for (L.Collision.b2TimeOfImpact.s_distanceInput.useRadii = !1;;) {
      e.GetTransform(L.Collision.b2TimeOfImpact.s_xfA, h);
      f.GetTransform(L.Collision.b2TimeOfImpact.s_xfB, h);
      L.Collision.b2TimeOfImpact.s_distanceInput.proxyA = b;
      L.Collision.b2TimeOfImpact.s_distanceInput.proxyB = d;
      L.Collision.b2TimeOfImpact.s_distanceInput.transformA = L.Collision.b2TimeOfImpact.s_xfA;
      L.Collision.b2TimeOfImpact.s_distanceInput.transformB = L.Collision.b2TimeOfImpact.s_xfB;
      L.Collision.b2Distance.Distance(L.Collision.b2TimeOfImpact.s_distanceOutput, L.Collision.b2TimeOfImpact.s_cache, L.Collision.b2TimeOfImpact.s_distanceInput);
      if (0 >= L.Collision.b2TimeOfImpact.s_distanceOutput.distance) {
        h = 1;
        break;
      }
      L.Collision.b2TimeOfImpact.s_fcn.Initialize(L.Collision.b2TimeOfImpact.s_cache, b, L.Collision.b2TimeOfImpact.s_xfA, d, L.Collision.b2TimeOfImpact.s_xfB);
      var p = L.Collision.b2TimeOfImpact.s_fcn.Evaluate(L.Collision.b2TimeOfImpact.s_xfA, L.Collision.b2TimeOfImpact.s_xfB);
      if (0 >= p) {
        h = 1;
        break;
      }
      0 == m && (n = p > g ? Math.max(g - a, .75 * g) : Math.max(p - a, .02 * g));
      if (p - n < .5 * a) {
        if (0 == m) {
          h = 1;
          break;
        }
        break;
      }
      var q = h,
        u = h,
        v = 1;
      e.GetTransform(L.Collision.b2TimeOfImpact.s_xfA, v);
      f.GetTransform(L.Collision.b2TimeOfImpact.s_xfB, v);
      var w = L.Collision.b2TimeOfImpact.s_fcn.Evaluate(L.Collision.b2TimeOfImpact.s_xfA, L.Collision.b2TimeOfImpact.s_xfB);
      if (w >= n) {
        h = 1;
        break;
      }
      for (var x = 0;;) {
        var y = x & 1 ? u + (n - p) * (v - u) / (w - p) : .5 * (u + v);
        e.GetTransform(L.Collision.b2TimeOfImpact.s_xfA, y);
        f.GetTransform(L.Collision.b2TimeOfImpact.s_xfB, y);
        var z = L.Collision.b2TimeOfImpact.s_fcn.Evaluate(L.Collision.b2TimeOfImpact.s_xfA, L.Collision.b2TimeOfImpact.s_xfB);
        if (Math.abs(z - n) < .025 * a) {
          q = y;
          break;
        }
        z > n ? (u = y, p = z) : (v = y, w = z);
        x++;
        L.Collision.b2TimeOfImpact.b2_toiRootIters++;
        if (50 == x) break;
      }
      L.Collision.b2TimeOfImpact.b2_toiMaxRootIters = Math.max(L.Collision.b2TimeOfImpact.b2_toiMaxRootIters, x);
      if (q < (1 + 100 * Number.MIN_VALUE) * h) break;
      h = q;
      m++;
      L.Collision.b2TimeOfImpact.b2_toiIters++;
      if (1E3 == m) break;
    }
    L.Collision.b2TimeOfImpact.b2_toiMaxIters = Math.max(L.Collision.b2TimeOfImpact.b2_toiMaxIters, m);
    return h;
  };
  L.Collision.b2TimeOfImpact.b2_toiCalls = 0;
  L.Collision.b2TimeOfImpact.b2_toiIters = 0;
  L.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
  L.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
  L.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
  L.Collision.b2TimeOfImpact.s_cache = new L.Collision.b2SimplexCache();
  L.Collision.b2TimeOfImpact.s_distanceInput = new L.Collision.b2DistanceInput();
  L.Collision.b2TimeOfImpact.s_xfA = new L.Common.Math.b2Transform();
  L.Collision.b2TimeOfImpact.s_xfB = new L.Common.Math.b2Transform();
  L.Collision.b2TimeOfImpact.s_fcn = new L.Collision.b2SeparationFunction();
  L.Collision.b2TimeOfImpact.s_distanceOutput = new L.Collision.b2DistanceOutput();
  L.Dynamics.Contacts.b2Contact = function (a, b) {
    I.get("Box2D.Dynamics.Contacts.b2Contact").trackCreate();
    this.ID = "Contact" + L.Dynamics.Contacts.b2Contact.NEXT_ID++;
    this.m_manifold = new L.Collision.b2Manifold();
    this.m_oldManifold = new L.Collision.b2Manifold();
    this.touching = !1;
    var d = a.GetBody(),
      e = b.GetBody();
    this.continuous = d.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody || d.IsBullet() || e.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody || e.IsBullet();
    this.sensor = a.IsSensor() || b.IsSensor();
    this.filtering = !1;
    this.m_fixtureA = a;
    this.m_fixtureB = b;
    this.enabled = !0;
    this.bodyAList = d.GetContactList();
    this.bodyBList = e.GetContactList();
    this.worldList = e.GetWorld().GetContactList();
    this.AddToLists();
  };
  L.Dynamics.Contacts.b2Contact.prototype.Reset = function (a, b) {
    this.m_manifold.Reset();
    this.m_oldManifold.Reset();
    this.touching = !1;
    var d = a.GetBody(),
      e = b.GetBody();
    this.continuous = d.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody || d.IsBullet() || e.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody || e.IsBullet();
    this.sensor = a.IsSensor() || b.IsSensor();
    this.filtering = !1;
    this.m_fixtureA = a;
    this.m_fixtureB = b;
    this.enabled = !0;
    this.bodyAList = d.GetContactList();
    this.bodyBList = e.GetContactList();
    this.worldList = e.GetWorld().GetContactList();
    this.AddToLists();
  };
  L.Dynamics.Contacts.b2Contact.prototype.AddToLists = function () {
    this.bodyAList.AddContact(this);
    this.bodyBList.AddContact(this);
    this.worldList.AddContact(this);
    this.UpdateLists();
  };
  L.Dynamics.Contacts.b2Contact.prototype.UpdateLists = function () {
    var a = !1,
      b = !1;
    !this.IsSensor() && this.IsEnabled() && (this.IsTouching() && (a = !0), this.IsContinuous() && (b = !0));
    this.bodyAList.UpdateContact(this, a, b);
    this.bodyBList.UpdateContact(this, a, b);
    this.worldList.UpdateContact(this, a, b);
  };
  L.Dynamics.Contacts.b2Contact.prototype.RemoveFromLists = function () {
    this.bodyAList.RemoveContact(this);
    this.bodyBList.RemoveContact(this);
    this.worldList.RemoveContact(this);
  };
  L.Dynamics.Contacts.b2Contact.prototype.GetManifold = function () {
    return this.m_manifold;
  };
  L.Dynamics.Contacts.b2Contact.prototype.GetWorldManifold = function (a) {
    var b = this.m_fixtureA.GetBody(),
      d = this.m_fixtureB.GetBody(),
      e = this.m_fixtureA.GetShape(),
      f = this.m_fixtureB.GetShape();
    a.Initialize(this.m_manifold, b.GetTransform(), e.m_radius, d.GetTransform(), f.m_radius);
  };
  L.Dynamics.Contacts.b2Contact.prototype.IsTouching = function () {
    return this.touching;
  };
  L.Dynamics.Contacts.b2Contact.prototype.IsContinuous = function () {
    return this.continuous;
  };
  L.Dynamics.Contacts.b2Contact.prototype.SetSensor = function (a) {
    this.sensor = a;
    this.UpdateLists();
  };
  L.Dynamics.Contacts.b2Contact.prototype.IsSensor = function () {
    return this.sensor;
  };
  L.Dynamics.Contacts.b2Contact.prototype.SetEnabled = function (a) {
    this.enabled = a;
    this.UpdateLists();
  };
  L.Dynamics.Contacts.b2Contact.prototype.IsEnabled = function () {
    return this.enabled;
  };
  L.Dynamics.Contacts.b2Contact.prototype.GetNext = function () {
    return this.m_next;
  };
  L.Dynamics.Contacts.b2Contact.prototype.GetFixtureA = function () {
    return this.m_fixtureA;
  };
  L.Dynamics.Contacts.b2Contact.prototype.GetFixtureB = function () {
    return this.m_fixtureB;
  };
  L.Dynamics.Contacts.b2Contact.prototype.GetOther = function (a) {
    var b = this.m_fixtureA.GetBody();
    return b != a ? b : this.m_fixtureB.GetBody();
  };
  L.Dynamics.Contacts.b2Contact.prototype.FlagForFiltering = function () {
    this.filtering = !0;
  };
  L.Dynamics.Contacts.b2Contact.prototype.ClearFiltering = function () {
    this.filtering = !1;
  };
  L.Dynamics.Contacts.b2Contact.prototype.IsFiltering = function () {
    return this.filtering;
  };
  L.Dynamics.Contacts.b2Contact.prototype.Update = function (a) {
    var b = this.m_oldManifold;
    this.m_oldManifold = this.m_manifold;
    this.m_manifold = b;
    this.enabled = !0;
    b = !1;
    var d = this.IsTouching(),
      e = this.m_fixtureA.GetBody(),
      f = this.m_fixtureB.GetBody(),
      g = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
    if (this.sensor) g && (b = L.Collision.Shapes.b2Shape.TestOverlap(this.m_fixtureA.GetShape(), e.GetTransform(), this.m_fixtureB.GetShape(), f.GetTransform())), this.m_manifold.m_pointCount = 0;else {
      e.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody || e.IsBullet() || f.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody || f.IsBullet() ? this.continuous = !0 : this.continuous = !1;
      if (g) for (this.Evaluate(), b = 0 < this.m_manifold.m_pointCount, g = 0; g < this.m_manifold.m_pointCount; g++) {
        var h = this.m_manifold.m_points[g];
        h.m_normalImpulse = 0;
        for (var m = h.m_tangentImpulse = 0; m < this.m_oldManifold.m_pointCount; m++) {
          var n = this.m_oldManifold.m_points[m];
          if (n.m_id.GetKey() == h.m_id.GetKey()) {
            h.m_normalImpulse = n.m_normalImpulse;
            h.m_tangentImpulse = n.m_tangentImpulse;
            break;
          }
        }
      } else this.m_manifold.m_pointCount = 0;
      b != d && (e.SetAwake(!0), f.SetAwake(!0));
    }
    this.touching = b;
    b != d && this.UpdateLists();
    !d && b && a.BeginContact(this);
    d && !b && a.EndContact(this);
    this.sensor || a.PreSolve(this, this.m_oldManifold);
  };
  L.Dynamics.Contacts.b2Contact.prototype.Evaluate = function () {};
  L.Dynamics.Contacts.b2Contact.prototype.ComputeTOI = function (a, b) {
    L.Dynamics.Contacts.b2Contact.s_input.proxyA.Set(this.m_fixtureA.GetShape());
    L.Dynamics.Contacts.b2Contact.s_input.proxyB.Set(this.m_fixtureB.GetShape());
    L.Dynamics.Contacts.b2Contact.s_input.sweepA = a;
    L.Dynamics.Contacts.b2Contact.s_input.sweepB = b;
    L.Dynamics.Contacts.b2Contact.s_input.tolerance = L.Common.b2Settings.b2_linearSlop;
    return L.Collision.b2TimeOfImpact.TimeOfImpact(L.Dynamics.Contacts.b2Contact.s_input);
  };
  L.Dynamics.Contacts.b2Contact.s_input = new L.Collision.b2TOIInput();
  L.Dynamics.Contacts.b2Contact.NEXT_ID = 0;
  L.Collision.ClipVertex = function () {
    I.get("Box2D.Collision.ClipVertex").trackCreate();
    this.v = L.Common.Math.b2Vec2.Get(0, 0);
    this.id = new L.Collision.b2ContactID();
  };
  L.Collision.ClipVertex.prototype.Set = function (a) {
    this.v.SetV(a.v);
    this.id.Set(a.id);
  };
  L.Collision.b2Collision = {};
  L.Collision.b2Collision.ClipSegmentToLine = function (a, b, d, e) {
    var f = 0,
      g = b[0].v,
      h = b[1].v,
      m = d.x * g.x + d.y * g.y - e;
    d = d.x * h.x + d.y * h.y - e;
    0 >= m && a[f++].Set(b[0]);
    0 >= d && a[f++].Set(b[1]);
    0 > m * d && (d = m / (m - d), e = a[f].v, e.x = g.x + d * (h.x - g.x), e.y = g.y + d * (h.y - g.y), a[f].id = 0 < m ? b[0].id : b[1].id, f++);
    return f;
  };
  L.Collision.b2Collision.EdgeSeparation = function (a, b, d, e, f) {
    for (var g = b.R.col1.x * a.GetNormal(d).x + b.R.col2.x * a.GetNormal(d).y, h = b.R.col1.y * a.GetNormal(d).x + b.R.col2.y * a.GetNormal(d).y, m = f.R.col1.x * g + f.R.col1.y * h, n = f.R.col2.x * g + f.R.col2.y * h, p = 0, q = Number.MAX_VALUE, u = 0; u < e.m_vertexCount; u++) {
      var v = e.GetVertex(u).x * m + e.GetVertex(u).y * n;
      v < q && (q = v, p = u);
    }
    m = b.position.x + (b.R.col1.x * a.GetVertex(d).x + b.R.col2.x * a.GetVertex(d).y);
    a = b.position.y + (b.R.col1.y * a.GetVertex(d).x + b.R.col2.y * a.GetVertex(d).y);
    b = f.position.x + (f.R.col1.x * e.GetVertex(p).x + f.R.col2.x * e.GetVertex(p).y);
    e = f.position.y + (f.R.col1.y * e.GetVertex(p).x + f.R.col2.y * e.GetVertex(p).y);
    return (b - m) * g + (e - a) * h;
  };
  L.Collision.b2Collision.FindMaxSeparation = function (a, b, d, e) {
    var f = e.position.x + (e.R.col1.x * d.GetCentroid().x + e.R.col2.x * d.GetCentroid().y),
      g = e.position.y + (e.R.col1.y * d.GetCentroid().x + e.R.col2.y * d.GetCentroid().y);
    f -= b.position.x + (b.R.col1.x * a.GetCentroid().x + b.R.col2.x * a.GetCentroid().y);
    g -= b.position.y + (b.R.col1.y * a.GetCentroid().x + b.R.col2.y * a.GetCentroid().y);
    var h = f * b.R.col1.x + g * b.R.col1.y;
    g = f * b.R.col2.x + g * b.R.col2.y;
    f = 0;
    for (var m = -Number.MAX_VALUE, n = 0; n < a.m_vertexCount; ++n) {
      var p = a.GetNormal(n).x * h + a.GetNormal(n).y * g;
      p > m && (m = p, f = n);
    }
    h = L.Collision.b2Collision.EdgeSeparation(a, b, f, d, e);
    n = f - 1;
    0 > n && (n = a.m_vertexCount - 1);
    g = L.Collision.b2Collision.EdgeSeparation(a, b, n, d, e);
    p = f + 1;
    p >= a.m_vertexCount && (p = 0);
    m = L.Collision.b2Collision.EdgeSeparation(a, b, p, d, e);
    if (g > h && g > m) {
      for (;;) if (f = n - 1, 0 > f && (f = a.m_vertexCount - 1), h = L.Collision.b2Collision.EdgeSeparation(a, b, f, d, e), h > g) n = f, g = h;else break;
    } else if (m > h) {
      for (n = p, g = m;;) if (f = n + 1, f >= a.m_vertexCount && (f = 0), h = L.Collision.b2Collision.EdgeSeparation(a, b, f, d, e), h > g) n = f, g = h;else break;
    } else n = f, g = h;
    return {
      bestEdge: n,
      separation: g
    };
  };
  L.Collision.b2Collision.FindIncidentEdge = function (a, b, d, e, f, g) {
    var h = d.R.col1.x * b.GetNormal(e).x + d.R.col2.x * b.GetNormal(e).y;
    b = d.R.col1.y * b.GetNormal(e).x + d.R.col2.y * b.GetNormal(e).y;
    d = g.R.col1.x * h + g.R.col1.y * b;
    b = g.R.col2.x * h + g.R.col2.y * b;
    h = d;
    d = 0;
    for (var m = Number.MAX_VALUE, n = 0; n < f.m_vertexCount; n++) {
      var p = h * f.GetNormal(n).x + b * f.GetNormal(n).y;
      p < m && (m = p, d = n);
    }
    h = d + 1;
    h >= f.m_vertexCount && (h = 0);
    a[0].v.x = g.position.x + (g.R.col1.x * f.GetVertex(d).x + g.R.col2.x * f.GetVertex(d).y);
    a[0].v.y = g.position.y + (g.R.col1.y * f.GetVertex(d).x + g.R.col2.y * f.GetVertex(d).y);
    a[0].id.SetReferenceEdge(e);
    a[0].id.SetIncidentEdge(d);
    a[0].id.SetIncidentVertex(0);
    a[1].v.x = g.position.x + (g.R.col1.x * f.GetVertex(h).x + g.R.col2.x * f.GetVertex(h).y);
    a[1].v.y = g.position.y + (g.R.col1.y * f.GetVertex(h).x + g.R.col2.y * f.GetVertex(h).y);
    a[1].id.SetReferenceEdge(e);
    a[1].id.SetIncidentEdge(h);
    a[1].id.SetIncidentVertex(1);
  };
  L.Collision.b2Collision.MakeClipPointVector = function () {
    return [new L.Collision.ClipVertex(), new L.Collision.ClipVertex()];
  };
  L.Collision.b2Collision.CollidePolygons = function (a, b, d, e, f) {
    a.SetPointCount(0);
    var g = b.GetRadius() + e.GetRadius(),
      h = L.Collision.b2Collision.FindMaxSeparation(b, d, e, f);
    if (!(h.separation > g)) {
      var m = L.Collision.b2Collision.FindMaxSeparation(e, f, b, d);
      if (!(m.separation > g)) {
        var n = b,
          p = e,
          q = d,
          u = f,
          v = 0,
          w = h.bestEdge;
        a.SetType(L.Collision.b2Manifold.e_faceA);
        m.separation > .98 * h.separation + .001 && (n = e, p = b, q = f, u = d, w = m.bestEdge, a.SetType(L.Collision.b2Manifold.e_faceB), v = 1);
        b = L.Collision.b2Collision.s_incidentEdge;
        L.Collision.b2Collision.FindIncidentEdge(b, n, q, w, p, u);
        p = n.GetVertex(w);
        n = w + 1 < n.m_vertexCount ? n.GetVertex(w + 1) : n.GetVertex(0);
        L.Collision.b2Collision.s_localTangent.Set(n.x - p.x, n.y - p.y);
        L.Collision.b2Collision.s_localTangent.Normalize();
        L.Collision.b2Collision.s_localNormal.x = L.Collision.b2Collision.s_localTangent.y;
        L.Collision.b2Collision.s_localNormal.y = -L.Collision.b2Collision.s_localTangent.x;
        L.Collision.b2Collision.s_planePoint.Set(.5 * (p.x + n.x), .5 * (p.y + n.y));
        L.Collision.b2Collision.s_tangent.x = q.R.col1.x * L.Collision.b2Collision.s_localTangent.x + q.R.col2.x * L.Collision.b2Collision.s_localTangent.y;
        L.Collision.b2Collision.s_tangent.y = q.R.col1.y * L.Collision.b2Collision.s_localTangent.x + q.R.col2.y * L.Collision.b2Collision.s_localTangent.y;
        L.Collision.b2Collision.s_tangent2.x = -L.Collision.b2Collision.s_tangent.x;
        L.Collision.b2Collision.s_tangent2.y = -L.Collision.b2Collision.s_tangent.y;
        L.Collision.b2Collision.s_normal.x = L.Collision.b2Collision.s_tangent.y;
        L.Collision.b2Collision.s_normal.y = -L.Collision.b2Collision.s_tangent.x;
        L.Collision.b2Collision.s_v11.x = q.position.x + (q.R.col1.x * p.x + q.R.col2.x * p.y);
        L.Collision.b2Collision.s_v11.y = q.position.y + (q.R.col1.y * p.x + q.R.col2.y * p.y);
        L.Collision.b2Collision.s_v12.x = q.position.x + (q.R.col1.x * n.x + q.R.col2.x * n.y);
        L.Collision.b2Collision.s_v12.y = q.position.y + (q.R.col1.y * n.x + q.R.col2.y * n.y);
        if (!(2 > L.Collision.b2Collision.ClipSegmentToLine(L.Collision.b2Collision.s_clipPoints1, b, L.Collision.b2Collision.s_tangent2, -L.Collision.b2Collision.s_tangent.x * L.Collision.b2Collision.s_v11.x - L.Collision.b2Collision.s_tangent.y * L.Collision.b2Collision.s_v11.y + g) || 2 > L.Collision.b2Collision.ClipSegmentToLine(L.Collision.b2Collision.s_clipPoints2, L.Collision.b2Collision.s_clipPoints1, L.Collision.b2Collision.s_tangent, L.Collision.b2Collision.s_tangent.x * L.Collision.b2Collision.s_v12.x + L.Collision.b2Collision.s_tangent.y * L.Collision.b2Collision.s_v12.y + g))) {
          a.m_localPlaneNormal.SetV(L.Collision.b2Collision.s_localNormal);
          a.m_localPoint.SetV(L.Collision.b2Collision.s_planePoint);
          q = L.Collision.b2Collision.s_normal.x * L.Collision.b2Collision.s_v11.x + L.Collision.b2Collision.s_normal.y * L.Collision.b2Collision.s_v11.y;
          for (w = n = 0; w < L.Common.b2Settings.b2_maxManifoldPoints; ++w) L.Collision.b2Collision.s_normal.x * L.Collision.b2Collision.s_clipPoints2[w].v.x + L.Collision.b2Collision.s_normal.y * L.Collision.b2Collision.s_clipPoints2[w].v.y - q <= g && (p = L.Collision.b2Collision.s_clipPoints2[w].v.x - u.position.x, b = L.Collision.b2Collision.s_clipPoints2[w].v.y - u.position.y, a.m_points[n].m_localPoint.x = p * u.R.col1.x + b * u.R.col1.y, a.m_points[n].m_localPoint.y = p * u.R.col2.x + b * u.R.col2.y, a.m_points[n].m_id.Set(L.Collision.b2Collision.s_clipPoints2[w].id), a.m_points[n].m_id.SetFlip(v), n++);
          a.SetPointCount(n);
        }
      }
    }
  };
  L.Collision.b2Collision.CollideCircles = function (a, b, d, e, f) {
    a.SetPointCount(0);
    var g = d.position.x + (d.R.col1.x * b.GetLocalPosition().x + d.R.col2.x * b.GetLocalPosition().y);
    d = d.position.y + (d.R.col1.y * b.GetLocalPosition().x + d.R.col2.y * b.GetLocalPosition().y);
    var h = f.position.x + (f.R.col1.x * e.GetLocalPosition().x + f.R.col2.x * e.GetLocalPosition().y);
    f = f.position.y + (f.R.col1.y * e.GetLocalPosition().x + f.R.col2.y * e.GetLocalPosition().y);
    g = h - g;
    d = f - d;
    g = g * g + d * d;
    d = b.GetRadius() + e.GetRadius();
    g > d * d || (a.SetType(L.Collision.b2Manifold.e_circles), a.m_localPoint.SetV(b.GetLocalPosition()), a.m_localPlaneNormal.SetZero(), a.SetPointCount(1), a.m_points[0].m_localPoint.SetV(e.GetLocalPosition()), a.m_points[0].m_id.SetKey(0));
  };
  L.Collision.b2Collision.CollidePolygonAndCircle = function (a, b, d, e, f) {
    a.SetPointCount(0);
    var g = f.position.x + (f.R.col1.x * e.GetLocalPosition().x + f.R.col2.x * e.GetLocalPosition().y) - d.position.x,
      h = f.position.y + (f.R.col1.y * e.GetLocalPosition().x + f.R.col2.y * e.GetLocalPosition().y) - d.position.y;
    f = g * d.R.col1.x + h * d.R.col1.y;
    d = g * d.R.col2.x + h * d.R.col2.y;
    g = 0;
    h = -Number.MAX_VALUE;
    for (var m = b.GetRadius() + e.GetRadius(), n = 0; n < b.m_vertexCount; ++n) {
      var p = b.GetNormal(n).x * (f - b.GetVertex(n).x) + b.GetNormal(n).y * (d - b.GetVertex(n).y);
      if (p > m) return;
      p > h && (h = p, g = n);
    }
    p = g + 1;
    p >= b.m_vertexCount && (p = 0);
    n = b.GetVertex(g);
    var q = b.GetVertex(p);
    if (h < Number.MIN_VALUE) a.SetPointCount(1), a.SetType(L.Collision.b2Manifold.e_faceA), a.m_localPlaneNormal.SetV(b.GetNormal(g)), a.m_localPoint.x = .5 * (n.x + q.x), a.m_localPoint.y = .5 * (n.y + q.y);else if (0 >= (f - n.x) * (q.x - n.x) + (d - n.y) * (q.y - n.y)) {
      if ((f - n.x) * (f - n.x) + (d - n.y) * (d - n.y) > m * m) return;
      a.SetPointCount(1);
      a.SetType(L.Collision.b2Manifold.e_faceA);
      a.m_localPlaneNormal.x = f - n.x;
      a.m_localPlaneNormal.y = d - n.y;
      a.m_localPlaneNormal.Normalize();
      a.m_localPoint.SetV(n);
    } else if (0 >= (f - q.x) * (n.x - q.x) + (d - q.y) * (n.y - q.y)) {
      if ((f - q.x) * (f - q.x) + (d - q.y) * (d - q.y) > m * m) return;
      a.SetPointCount(1);
      a.SetType(L.Collision.b2Manifold.e_faceA);
      a.m_localPlaneNormal.x = f - q.x;
      a.m_localPlaneNormal.y = d - q.y;
      a.m_localPlaneNormal.Normalize();
      a.m_localPoint.SetV(q);
    } else {
      p = .5 * (n.x + q.x);
      n = .5 * (n.y + q.y);
      h = (f - p) * b.GetNormal(g).x + (d - n) * b.GetNormal(g).y;
      if (h > m) return;
      a.SetPointCount(1);
      a.SetType(L.Collision.b2Manifold.e_faceA);
      a.m_localPlaneNormal.x = b.GetNormal(g).x;
      a.m_localPlaneNormal.y = b.GetNormal(g).y;
      a.m_localPlaneNormal.Normalize();
      a.m_localPoint.Set(p, n);
    }
    a.m_points[0].m_localPoint.SetV(e.GetLocalPosition());
    a.m_points[0].m_id.SetKey(0);
  };
  L.Collision.b2Collision.s_incidentEdge = L.Collision.b2Collision.MakeClipPointVector();
  L.Collision.b2Collision.s_clipPoints1 = L.Collision.b2Collision.MakeClipPointVector();
  L.Collision.b2Collision.s_clipPoints2 = L.Collision.b2Collision.MakeClipPointVector();
  L.Collision.b2Collision.s_localTangent = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_localNormal = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_planePoint = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_normal = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_tangent = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_tangent2 = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_v11 = L.Common.Math.b2Vec2.Get(0, 0);
  L.Collision.b2Collision.s_v12 = L.Common.Math.b2Vec2.Get(0, 0);
  L.Dynamics.Contacts.b2CircleContact = function (a, b) {
    L.Dynamics.Contacts.b2Contact.call(this, a, b);
  };
  c.inherits(L.Dynamics.Contacts.b2CircleContact, L.Dynamics.Contacts.b2Contact);
  L.Dynamics.Contacts.b2CircleContact.prototype.Reset = function (a, b) {
    L.Dynamics.Contacts.b2Contact.prototype.Reset.call(this, a, b);
  };
  L.Dynamics.Contacts.b2CircleContact.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetShape(),
      b = this.m_fixtureB.GetShape();
    L.Collision.b2Collision.CollideCircles(this.m_manifold, a, this.m_fixtureA.GetBody().GetTransform(), b, this.m_fixtureB.GetBody().GetTransform());
  };
  L.Collision.Shapes.b2CircleShape = function (a) {
    I.get("Box2D.Collision.Shapes.b2CircleShape").trackCreate();
    L.Collision.Shapes.b2Shape.call(this);
    this.m_radius = a;
    this.m_radiusSquared = a * a;
    this.m_p = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_vertices = [this.m_p];
  };
  c.inherits(L.Collision.Shapes.b2CircleShape, L.Collision.Shapes.b2Shape);
  L.Collision.Shapes.b2CircleShape.prototype.GetTypeName = function () {
    return L.Collision.Shapes.b2CircleShape.NAME;
  };
  L.Collision.Shapes.b2CircleShape.prototype.Copy = function () {
    var a = new L.Collision.Shapes.b2CircleShape(this.m_radius);
    a.Set(this);
    return a;
  };
  L.Collision.Shapes.b2CircleShape.prototype.Set = function (a) {
    L.Collision.Shapes.b2Shape.prototype.Set.call(this, a);
    a instanceof L.Collision.Shapes.b2CircleShape && this.m_p.SetV(a.m_p);
  };
  L.Collision.Shapes.b2CircleShape.prototype.TestPoint = function (a, b) {
    var d = b.x - (a.position.x + (a.R.col1.x * this.m_p.x + a.R.col2.x * this.m_p.y));
    a = b.y - (a.position.y + (a.R.col1.y * this.m_p.x + a.R.col2.y * this.m_p.y));
    return d * d + a * a <= this.m_radiusSquared;
  };
  L.Collision.Shapes.b2CircleShape.prototype.RayCast = function (a, b, d) {
    var e = d.R,
      f = b.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
    d = b.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
    e = b.p2.x - b.p1.x;
    var g = b.p2.y - b.p1.y,
      h = f * e + d * g,
      m = e * e + g * g,
      n = h * h - m * (f * f + d * d - this.m_radiusSquared);
    if (0 > n || m < Number.MIN_VALUE) return !1;
    h = -(h + Math.sqrt(n));
    return 0 <= h && h <= b.maxFraction * m ? (h /= m, a.fraction = h, a.normal.x = f + h * e, a.normal.y = d + h * g, a.normal.Normalize(), !0) : !1;
  };
  L.Collision.Shapes.b2CircleShape.prototype.ComputeAABB = function (a, b) {
    var d = b.R,
      e = b.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y);
    b = b.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
    a.lowerBound.Set(e - this.m_radius, b - this.m_radius);
    a.upperBound.Set(e + this.m_radius, b + this.m_radius);
  };
  L.Collision.Shapes.b2CircleShape.prototype.ComputeMass = function (a, b) {
    b = b * Math.PI * this.m_radiusSquared;
    a.SetV(b, this.m_p, b * (.5 * this.m_radiusSquared + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y)));
  };
  L.Collision.Shapes.b2CircleShape.prototype.ComputeSubmergedArea = function (a, b, d, e) {
    d = L.Common.Math.b2Math.MulX(d, this.m_p);
    var f = -(L.Common.Math.b2Math.Dot(a, d) - b);
    if (f < -this.m_radius + Number.MIN_VALUE) return L.Common.Math.b2Vec2.Free(d), 0;
    if (f > this.m_radius) return L.Common.Math.b2Vec2.Free(d), e.SetV(d), Math.PI * this.m_radiusSquared;
    b = f * f;
    f = this.m_radiusSquared * (Math.asin(f / this.m_radius) + Math.PI / 2) + f * Math.sqrt(this.m_radiusSquared - b);
    b = -2 / 3 * Math.pow(this.m_radiusSquared - b, 1.5) / f;
    e.x = d.x + a.x * b;
    e.y = d.y + a.y * b;
    L.Common.Math.b2Vec2.Free(d);
    return f;
  };
  L.Collision.Shapes.b2CircleShape.prototype.SetDistanceProxy = function (a) {
    a.SetValues(1, this.m_radius, this.m_vertices);
  };
  L.Collision.Shapes.b2CircleShape.prototype.GetLocalPosition = function () {
    return this.m_p;
  };
  L.Collision.Shapes.b2CircleShape.prototype.SetLocalPosition = function (a) {
    this.m_p.SetV(a);
  };
  L.Collision.Shapes.b2CircleShape.prototype.GetRadius = function () {
    return this.m_radius;
  };
  L.Collision.Shapes.b2CircleShape.prototype.SetRadius = function (a) {
    this.m_radius = a;
    this.m_radiusSquared = a * a;
  };
  L.Collision.Shapes.b2CircleShape.NAME = "b2CircleShape";
  L.Collision.Shapes.b2PolygonShape = function () {
    I.get("Box2D.Collision.Shapes.b2PolygonShape").trackCreate();
    L.Collision.Shapes.b2Shape.call(this);
    this.m_centroid = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_vertices = [];
    this.m_normals = [];
  };
  c.inherits(L.Collision.Shapes.b2PolygonShape, L.Collision.Shapes.b2Shape);
  L.Collision.Shapes.b2PolygonShape.prototype.GetTypeName = function () {
    return L.Collision.Shapes.b2PolygonShape.NAME;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.Copy = function () {
    var a = new L.Collision.Shapes.b2PolygonShape();
    a.Set(this);
    return a;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.Set = function (a) {
    L.Collision.Shapes.b2Shape.prototype.Set.call(this, a);
    if (a instanceof L.Collision.Shapes.b2PolygonShape) {
      this.m_centroid.SetV(a.m_centroid);
      this.m_vertexCount = a.m_vertexCount;
      this.Reserve(this.m_vertexCount);
      for (var b = 0; b < this.m_vertexCount; b++) this.m_vertices[b].SetV(a.m_vertices[b]), this.m_normals[b].SetV(a.m_normals[b]);
    }
  };
  L.Collision.Shapes.b2PolygonShape.prototype.SetAsArray = function (a) {
    this.SetAsVector(a);
  };
  L.Collision.Shapes.b2PolygonShape.AsArray = function (a) {
    var b = new L.Collision.Shapes.b2PolygonShape();
    b.SetAsArray(a);
    return b;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.SetAsVector = function (a) {
    var b = a.length;
    L.Common.b2Settings.b2Assert(2 <= b);
    this.m_vertexCount = b;
    this.Reserve(b);
    for (b = 0; b < this.m_vertexCount; b++) this.m_vertices[b].SetV(a[b]);
    for (b = 0; b < this.m_vertexCount; ++b) {
      a = L.Common.Math.b2Math.SubtractVV(this.m_vertices[b + 1 < this.m_vertexCount ? b + 1 : 0], this.m_vertices[b]);
      L.Common.b2Settings.b2Assert(a.LengthSquared() > Number.MIN_VALUE);
      var d = L.Common.Math.b2Math.CrossVF(a, 1);
      L.Common.Math.b2Vec2.Free(a);
      this.m_normals[b].SetV(d);
      L.Common.Math.b2Vec2.Free(d);
      this.m_normals[b].Normalize();
    }
    this.m_centroid = L.Collision.Shapes.b2PolygonShape.ComputeCentroid(this.m_vertices, this.m_vertexCount);
  };
  L.Collision.Shapes.b2PolygonShape.AsVector = function (a) {
    var b = new L.Collision.Shapes.b2PolygonShape();
    b.SetAsVector(a);
    return b;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.SetAsBox = function (a, b) {
    this.m_vertexCount = 4;
    this.Reserve(4);
    this.m_vertices[0].Set(-a, -b);
    this.m_vertices[1].Set(a, -b);
    this.m_vertices[2].Set(a, b);
    this.m_vertices[3].Set(-a, b);
    this.m_normals[0].Set(0, -1);
    this.m_normals[1].Set(1, 0);
    this.m_normals[2].Set(0, 1);
    this.m_normals[3].Set(-1, 0);
    this.m_centroid.SetZero();
  };
  L.Collision.Shapes.b2PolygonShape.AsBox = function (a, b) {
    var d = new L.Collision.Shapes.b2PolygonShape();
    d.SetAsBox(a, b);
    return d;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.SetAsOrientedBox = function (a, b, d, e) {
    this.m_vertexCount = 4;
    this.Reserve(4);
    this.m_vertices[0].Set(-a, -b);
    this.m_vertices[1].Set(a, -b);
    this.m_vertices[2].Set(a, b);
    this.m_vertices[3].Set(-a, b);
    this.m_normals[0].Set(0, -1);
    this.m_normals[1].Set(1, 0);
    this.m_normals[2].Set(0, 1);
    this.m_normals[3].Set(-1, 0);
    this.m_centroid = d;
    a = L.Common.Math.b2Mat22.Get();
    a.Set(e);
    d = new L.Common.Math.b2Transform(d, a);
    for (e = 0; e < this.m_vertexCount; ++e) this.m_vertices[e] = L.Common.Math.b2Math.MulX(d, this.m_vertices[e]), this.m_normals[e] = L.Common.Math.b2Math.MulMV(d.R, this.m_normals[e]);
  };
  L.Collision.Shapes.b2PolygonShape.AsOrientedBox = function (a, b, d, e) {
    var f = new L.Collision.Shapes.b2PolygonShape();
    f.SetAsOrientedBox(a, b, d, e);
    return f;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.SetAsEdge = function (a, b) {
    this.m_vertexCount = 2;
    this.Reserve(2);
    this.m_vertices[0].SetV(a);
    this.m_vertices[1].SetV(b);
    this.m_centroid.x = .5 * (a.x + b.x);
    this.m_centroid.y = .5 * (a.y + b.y);
    a = L.Common.Math.b2Math.SubtractVV(b, a);
    b = L.Common.Math.b2Math.CrossVF(a, 1);
    L.Common.Math.b2Vec2.Free(a);
    this.m_normals[0] = b;
    this.m_normals[0].Normalize();
    this.m_normals[1].x = -this.m_normals[0].x;
    this.m_normals[1].y = -this.m_normals[0].y;
  };
  L.Collision.Shapes.b2PolygonShape.AsEdge = function (a, b) {
    var d = new L.Collision.Shapes.b2PolygonShape();
    d.SetAsEdge(a, b);
    return d;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.TestPoint = function (a, b) {
    var d = a.R;
    var e = b.x - a.position.x;
    a = b.y - a.position.y;
    b = e * d.col1.x + a * d.col1.y;
    for (var f = e * d.col2.x + a * d.col2.y, g = 0; g < this.m_vertexCount; ++g) if (d = this.m_vertices[g], e = b - d.x, a = f - d.y, d = this.m_normals[g], 0 < d.x * e + d.y * a) return !1;
    return !0;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.RayCast = function (a, b, d) {
    var e = 0,
      f = b.maxFraction;
    var g = b.p1.x - d.position.x;
    var h = b.p1.y - d.position.y;
    var m = d.R;
    var n = g * m.col1.x + h * m.col1.y,
      p = g * m.col2.x + h * m.col2.y;
    g = b.p2.x - d.position.x;
    h = b.p2.y - d.position.y;
    m = d.R;
    b = g * m.col1.x + h * m.col1.y - n;
    m = g * m.col2.x + h * m.col2.y - p;
    for (var q = -1, u = 0; u < this.m_vertexCount; ++u) {
      var v = this.m_vertices[u];
      g = v.x - n;
      h = v.y - p;
      v = this.m_normals[u];
      g = v.x * g + v.y * h;
      h = v.x * b + v.y * m;
      if (0 == h) {
        if (0 > g) return !1;
      } else 0 > h && g < e * h ? (e = g / h, q = u) : 0 < h && g < f * h && (f = g / h);
      if (f < e - Number.MIN_VALUE) return !1;
    }
    return 0 <= q ? (a.fraction = e, m = d.R, v = this.m_normals[q], a.normal.x = m.col1.x * v.x + m.col2.x * v.y, a.normal.y = m.col1.y * v.x + m.col2.y * v.y, !0) : !1;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.ComputeAABB = function (a, b) {
    for (var d = b.R, e = this.m_vertices[0], f = b.position.x + (d.col1.x * e.x + d.col2.x * e.y), g = b.position.y + (d.col1.y * e.x + d.col2.y * e.y), h = f, m = g, n = 1; n < this.m_vertexCount; ++n) {
      e = this.m_vertices[n];
      var p = b.position.x + (d.col1.x * e.x + d.col2.x * e.y);
      e = b.position.y + (d.col1.y * e.x + d.col2.y * e.y);
      f = f < p ? f : p;
      g = g < e ? g : e;
      h = h > p ? h : p;
      m = m > e ? m : e;
    }
    a.lowerBound.x = f - this.m_radius;
    a.lowerBound.y = g - this.m_radius;
    a.upperBound.x = h + this.m_radius;
    a.upperBound.y = m + this.m_radius;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.ComputeMass = function (a, b) {
    if (2 == this.m_vertexCount) a.center.x = .5 * (this.m_vertices[0].x + this.m_vertices[1].x), a.center.y = .5 * (this.m_vertices[0].y + this.m_vertices[1].y), a.mass = 0, a.I = 0;else {
      for (var d = 0, e = 0, f = 0, g = 0, h = 1 / 3, m = 0; m < this.m_vertexCount; ++m) {
        var n = this.m_vertices[m],
          p = m + 1 < this.m_vertexCount ? this.m_vertices[m + 1] : this.m_vertices[0],
          q = n.x - 0,
          u = n.y - 0,
          v = p.x - 0,
          w = p.y - 0,
          x = q * w - u * v,
          y = .5 * x;
        f += y;
        d += y * h * (0 + n.x + p.x);
        e += y * h * (0 + n.y + p.y);
        n = q;
        g += x * (h * (.25 * (n * n + v * n + v * v) + (0 * n + 0 * v)) + h * (.25 * (u * u + w * u + w * w) + (0 * u + 0 * w)));
      }
      a.Set(b * f, 1 / f * d, 1 / f * e, b * g);
    }
  };
  L.Collision.Shapes.b2PolygonShape.prototype.ComputeSubmergedArea = function (a, b, d, e) {
    var f = L.Common.Math.b2Math.MulTMV(d.R, a),
      g = b - L.Common.Math.b2Math.Dot(a, d.position),
      h = [],
      m = 0,
      n = -1;
    b = -1;
    var p = !1;
    for (a = 0; a < this.m_vertexCount; ++a) {
      h[a] = L.Common.Math.b2Math.Dot(f, this.m_vertices[a]) - g;
      var q = h[a] < -Number.MIN_VALUE;
      0 < a && (q ? p || (n = a - 1, m++) : p && (b = a - 1, m++));
      p = q;
    }
    L.Common.Math.b2Vec2.Free(f);
    switch (m) {
      case 0:
        return p ? (a = L.Collision.Shapes.b2MassData.Get(), this.ComputeMass(a, 1), d = L.Common.Math.b2Math.MulX(d, a.center), e.SetV(d), L.Common.Math.b2Vec2.Free(d), e = a.mass, L.Collision.Shapes.b2MassData.Free(a), e) : 0;
      case 1:
        -1 == n ? n = this.m_vertexCount - 1 : b = this.m_vertexCount - 1;
    }
    a = (n + 1) % this.m_vertexCount;
    f = (b + 1) % this.m_vertexCount;
    g = (0 - h[n]) / (h[a] - h[n]);
    h = (0 - h[b]) / (h[f] - h[b]);
    n = L.Common.Math.b2Vec2.Get(this.m_vertices[n].x * (1 - g) + this.m_vertices[a].x * g, this.m_vertices[n].y * (1 - g) + this.m_vertices[a].y * g);
    g = L.Common.Math.b2Vec2.Get(this.m_vertices[b].x * (1 - h) + this.m_vertices[f].x * h, this.m_vertices[b].y * (1 - h) + this.m_vertices[f].y * h);
    b = 0;
    h = L.Common.Math.b2Vec2.Get(0, 0);
    for (m = this.m_vertices[a]; a != f;) a = (a + 1) % this.m_vertexCount, p = a == f ? g : this.m_vertices[a], q = .5 * ((m.x - n.x) * (p.y - n.y) - (m.y - n.y) * (p.x - n.x)), b += q, h.x += q * (n.x + m.x + p.x) / 3, h.y += q * (n.y + m.y + p.y) / 3, m = p;
    L.Common.Math.b2Vec2.Free(n);
    L.Common.Math.b2Vec2.Free(g);
    h.Multiply(1 / b);
    d = L.Common.Math.b2Math.MulX(d, h);
    L.Common.Math.b2Vec2.Free(h);
    e.SetV(d);
    L.Common.Math.b2Vec2.Free(d);
    return b;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.SetDistanceProxy = function (a) {
    a.SetValues(this.m_vertexCount, this.m_radius, this.m_vertices);
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetVertexCount = function () {
    return this.m_vertexCount;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetVertices = function () {
    return this.m_vertices;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetVertex = function (a) {
    return this.m_vertices[a];
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetNormals = function () {
    return this.m_normals;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetNormal = function (a) {
    return this.m_normals[a];
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetCentroid = function () {
    return this.m_centroid;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetSupport = function (a) {
    for (var b = 0, d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_vertexCount; ++e) {
      var f = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
      f > d && (b = e, d = f);
    }
    return b;
  };
  L.Collision.Shapes.b2PolygonShape.prototype.GetSupportVertex = function (a) {
    for (var b = 0, d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_vertexCount; ++e) {
      var f = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
      f > d && (b = e, d = f);
    }
    return this.m_vertices[b];
  };
  L.Collision.Shapes.b2PolygonShape.prototype.Reserve = function (a) {
    for (var b = 0; b < this.m_vertices.length; b++) L.Common.Math.b2Vec2.Free(this.m_vertices[b]), L.Common.Math.b2Vec2.Free(this.m_normals[b]);
    this.m_vertices = [];
    this.m_normals = [];
    for (b = 0; b < a; b++) this.m_vertices[b] = L.Common.Math.b2Vec2.Get(0, 0), this.m_normals[b] = L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.Shapes.b2PolygonShape.ComputeCentroid = function (a, b) {
    for (var d = L.Common.Math.b2Vec2.Get(0, 0), e = 0, f = 1 / 3, g = 0; g < b; ++g) {
      var h = a[g],
        m = g + 1 < b ? a[g + 1] : a[0],
        n = .5 * ((h.x - 0) * (m.y - 0) - (h.y - 0) * (m.x - 0));
      e += n;
      d.x += n * f * (0 + h.x + m.x);
      d.y += n * f * (0 + h.y + m.y);
    }
    d.x *= 1 / e;
    d.y *= 1 / e;
    return d;
  };
  L.Collision.Shapes.b2PolygonShape.s_mat = L.Common.Math.b2Mat22.Get();
  L.Collision.Shapes.b2PolygonShape.NAME = "b2PolygonShape";
  L.Dynamics.Contacts.b2PolyAndCircleContact = function (a, b) {
    L.Common.b2Settings.b2Assert(a.GetShape() instanceof L.Collision.Shapes.b2PolygonShape);
    L.Common.b2Settings.b2Assert(b.GetShape() instanceof L.Collision.Shapes.b2CircleShape);
    L.Dynamics.Contacts.b2Contact.call(this, a, b);
  };
  c.inherits(L.Dynamics.Contacts.b2PolyAndCircleContact, L.Dynamics.Contacts.b2Contact);
  L.Dynamics.Contacts.b2PolyAndCircleContact.prototype.Reset = function (a, b) {
    L.Common.b2Settings.b2Assert(a.GetShape() instanceof L.Collision.Shapes.b2PolygonShape);
    L.Common.b2Settings.b2Assert(b.GetShape() instanceof L.Collision.Shapes.b2CircleShape);
    L.Dynamics.Contacts.b2Contact.prototype.Reset.call(this, a, b);
  };
  L.Dynamics.Contacts.b2PolyAndCircleContact.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetShape(),
      b = this.m_fixtureB.GetShape();
    L.Collision.b2Collision.CollidePolygonAndCircle(this.m_manifold, a, this.m_fixtureA.GetBody().GetTransform(), b, this.m_fixtureB.GetBody().GetTransform());
  };
  L.Dynamics.Contacts.b2PolygonContact = function (a, b) {
    L.Dynamics.Contacts.b2Contact.call(this, a, b);
  };
  c.inherits(L.Dynamics.Contacts.b2PolygonContact, L.Dynamics.Contacts.b2Contact);
  L.Dynamics.Contacts.b2PolygonContact.prototype.Reset = function (a, b) {
    L.Dynamics.Contacts.b2Contact.prototype.Reset.call(this, a, b);
  };
  L.Dynamics.Contacts.b2PolygonContact.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetShape(),
      b = this.m_fixtureB.GetShape();
    L.Collision.b2Collision.CollidePolygons(this.m_manifold, a, this.m_fixtureA.GetBody().GetTransform(), b, this.m_fixtureB.GetBody().GetTransform());
  };
  L.Dynamics.Contacts.b2EdgeAndCircleContact = function (a, b) {
    L.Dynamics.Contacts.b2Contact.call(this, a, b);
  };
  c.inherits(L.Dynamics.Contacts.b2EdgeAndCircleContact, L.Dynamics.Contacts.b2Contact);
  L.Dynamics.Contacts.b2EdgeAndCircleContact.prototype.Reset = function (a, b) {
    L.Dynamics.Contacts.b2Contact.prototype.Reset.call(this, a, b);
  };
  L.Dynamics.Contacts.b2EdgeAndCircleContact.prototype.Evaluate = function () {
    this.m_fixtureA.GetBody();
    this.m_fixtureB.GetBody();
    this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape(), this.m_fixtureA.GetBody().GetTransform(), this.m_fixtureB.GetShape(), this.m_fixtureB.GetBody().GetTransform());
  };
  L.Dynamics.Contacts.b2EdgeAndCircleContact.prototype.b2CollideEdgeAndCircle = function () {};
  L.Dynamics.Contacts.b2PolyAndEdgeContact = function (a, b) {
    L.Common.b2Settings.b2Assert(a.GetShape() instanceof L.Collision.Shapes.b2PolygonShape);
    L.Common.b2Settings.b2Assert(b.GetShape() instanceof L.Collision.Shapes.b2EdgeShape);
    L.Dynamics.Contacts.b2Contact.call(this, a, b);
  };
  c.inherits(L.Dynamics.Contacts.b2PolyAndEdgeContact, L.Dynamics.Contacts.b2Contact);
  L.Dynamics.Contacts.b2PolyAndEdgeContact.prototype.Reset = function (a, b) {
    L.Common.b2Settings.b2Assert(a.GetShape() instanceof L.Collision.Shapes.b2PolygonShape);
    L.Common.b2Settings.b2Assert(b.GetShape() instanceof L.Collision.Shapes.b2EdgeShape);
    L.Dynamics.Contacts.b2Contact.prototype.Reset.call(this, a, b);
  };
  L.Dynamics.Contacts.b2PolyAndEdgeContact.prototype.Evaluate = function () {
    this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape(), this.m_fixtureA.GetBody().GetTransform(), this.m_fixtureB.GetShape(), this.m_fixtureB.GetBody().GetTransform());
  };
  L.Dynamics.Contacts.b2PolyAndEdgeContact.prototype.b2CollidePolyAndEdge = function () {};
  L.Dynamics.Contacts.b2ContactFactory = function () {
    this.m_registers = {};
    this.m_freeContacts = {};
    this.AddType(L.Dynamics.Contacts.b2CircleContact, L.Collision.Shapes.b2CircleShape.NAME, L.Collision.Shapes.b2CircleShape.NAME);
    this.AddType(L.Dynamics.Contacts.b2PolyAndCircleContact, L.Collision.Shapes.b2PolygonShape.NAME, L.Collision.Shapes.b2CircleShape.NAME);
    this.AddType(L.Dynamics.Contacts.b2PolygonContact, L.Collision.Shapes.b2PolygonShape.NAME, L.Collision.Shapes.b2PolygonShape.NAME);
    this.AddType(L.Dynamics.Contacts.b2EdgeAndCircleContact, L.Collision.Shapes.b2EdgeShape.NAME, L.Collision.Shapes.b2CircleShape.NAME);
    this.AddType(L.Dynamics.Contacts.b2PolyAndEdgeContact, L.Collision.Shapes.b2PolygonShape.NAME, L.Collision.Shapes.b2EdgeShape.NAME);
  };
  L.Dynamics.Contacts.b2ContactFactory.prototype.AddType = function (a, b, d) {
    this.m_freeContacts[b] = this.m_freeContacts[b] || {};
    this.m_freeContacts[b][d] = this.m_freeContacts[b][d] || [];
    this.m_registers[b] = this.m_registers[b] || {};
    this.m_registers[b][d] = new L.Dynamics.Contacts.b2ContactRegister();
    this.m_registers[b][d].ctor = a;
    this.m_registers[b][d].primary = !0;
    b != d && (this.m_registers[d] = this.m_registers[d] || {}, this.m_registers[d][b] = new L.Dynamics.Contacts.b2ContactRegister(), this.m_registers[d][b].ctor = a, this.m_registers[d][b].primary = !1);
  };
  L.Dynamics.Contacts.b2ContactFactory.prototype.Create = function (a, b) {
    I.get("Box2D.Dynamics.Contacts.b2Contact").trackGet();
    var d = a.GetShape().GetTypeName(),
      e = b.GetShape().GetTypeName(),
      f = this.m_registers[d][e],
      g = f.ctor;
    return null != g ? f.primary ? 0 < this.m_freeContacts[d][e].length ? (d = this.m_freeContacts[d][e].pop(), d.Reset(a, b), d) : new g(a, b) : 0 < this.m_freeContacts[e][d].length ? (d = this.m_freeContacts[e][d].pop(), d.Reset(b, a), d) : new g(b, a) : null;
  };
  L.Dynamics.Contacts.b2ContactFactory.prototype.Destroy = function (a) {
    I.get("Box2D.Dynamics.Contacts.b2Contact").trackFree();
    var b = a.GetFixtureA().GetShape().GetTypeName(),
      d = a.GetFixtureB().GetShape().GetTypeName();
    this.m_freeContacts[b][d].push(a);
  };
  L.Dynamics.b2ContactManager = function (a) {
    I.get("Box2D.Dynamics.b2ContactManager").trackCreate();
    this.m_world = a;
    this.m_contactFilter = L.Dynamics.b2ContactFilter.b2_defaultFilter;
    this.m_contactListener = L.Dynamics.b2ContactListener.b2_defaultListener;
    this.m_contactFactory = new L.Dynamics.Contacts.b2ContactFactory();
    this.m_broadPhase = new L.Collision.b2DynamicTreeBroadPhase();
  };
  L.Dynamics.b2ContactManager.prototype.AddPair = function (a, b) {
    var d = a.GetBody(),
      e = b.GetBody();
    if (d != e && e.ShouldCollide(d) && this.m_contactFilter.ShouldCollide(a, b)) {
      var f = !1;
      e.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (d) {
        var e = d.GetFixtureA();
        if (e == a) {
          if (d = d.GetFixtureB(), d == b) return f = !0;
        } else if (e == b && (d = d.GetFixtureB(), d == a)) return f = !0;
      });
      f || this.m_contactFactory.Create(a, b);
    }
  };
  L.Dynamics.b2ContactManager.prototype.FindNewContacts = function () {
    var a = this;
    this.m_broadPhase.UpdatePairs(function (b, d) {
      a.AddPair(b, d);
    });
  };
  L.Dynamics.b2ContactManager.prototype.Destroy = function (a) {
    var b = a.GetFixtureA(),
      d = a.GetFixtureB();
    b = b.GetBody();
    d = d.GetBody();
    a.IsTouching() && this.m_contactListener.EndContact(a);
    0 < a.m_manifold.m_pointCount && (b.SetAwake(!0), d.SetAwake(!0));
    a.RemoveFromLists();
    this.m_contactFactory.Destroy(a);
  };
  L.Dynamics.b2ContactManager.prototype.Collide = function () {
    var a = this;
    this.m_world.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (b) {
      var d = b.GetFixtureA(),
        e = b.GetFixtureB(),
        f = d.GetBody(),
        g = e.GetBody();
      if (f.IsAwake() || g.IsAwake()) {
        if (b.IsFiltering()) {
          if (!g.ShouldCollide(f)) {
            a.Destroy(b);
            return;
          }
          if (!a.m_contactFilter.ShouldCollide(d, e)) {
            a.Destroy(b);
            return;
          }
          b.ClearFiltering();
        }
        a.m_broadPhase.TestOverlap(d.m_proxy, e.m_proxy) ? b.Update(a.m_contactListener) : a.Destroy(b);
      }
    });
  };
  L.Dynamics.b2ContactManager.s_evalCP = new L.Collision.b2ContactPoint();
  L.Dynamics.b2DebugDraw = function () {
    I.get("Box2D.Dynamics.b2DebugDraw").trackCreate();
    this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
    this.m_drawFlags = 0;
    this.m_ctx = null;
  };
  L.Dynamics.b2DebugDraw.prototype.Clear = function () {
    this.m_ctx.clearRect(0, 0, this.m_ctx.canvas.width, this.m_ctx.canvas.height);
  };
  L.Dynamics.b2DebugDraw.prototype._color = function (a, b) {
    return "rgba(" + ((a & 16711680) >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + b + ")";
  };
  L.Dynamics.b2DebugDraw.prototype.SetFlags = function (a) {
    this.m_drawFlags = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetFlags = function () {
    return this.m_drawFlags;
  };
  L.Dynamics.b2DebugDraw.prototype.AppendFlags = function (a) {
    this.m_drawFlags |= a;
  };
  L.Dynamics.b2DebugDraw.prototype.ClearFlags = function (a) {
    this.m_drawFlags &= ~a;
  };
  L.Dynamics.b2DebugDraw.prototype.SetSprite = function (a) {
    this.m_ctx = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetSprite = function () {
    return this.m_ctx;
  };
  L.Dynamics.b2DebugDraw.prototype.SetDrawScale = function (a) {
    this.m_drawScale = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetDrawScale = function () {
    return this.m_drawScale;
  };
  L.Dynamics.b2DebugDraw.prototype.SetLineThickness = function (a) {
    this.m_lineThickness = a;
    this.m_ctx.strokeWidth = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetLineThickness = function () {
    return this.m_lineThickness;
  };
  L.Dynamics.b2DebugDraw.prototype.SetAlpha = function (a) {
    this.m_alpha = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetAlpha = function () {
    return this.m_alpha;
  };
  L.Dynamics.b2DebugDraw.prototype.SetFillAlpha = function (a) {
    this.m_fillAlpha = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetFillAlpha = function () {
    return this.m_fillAlpha;
  };
  L.Dynamics.b2DebugDraw.prototype.SetXFormScale = function (a) {
    this.m_xformScale = a;
  };
  L.Dynamics.b2DebugDraw.prototype.GetXFormScale = function () {
    return this.m_xformScale;
  };
  (function (a) {
    a.prototype.DrawPolygon = function (a, d, e) {
      if (d) {
        var b = this.m_ctx,
          g = this.m_drawScale;
        b.beginPath();
        b.strokeStyle = this._color(e.GetColor(), this.m_alpha);
        b.moveTo(a[0].x * g, a[0].y * g);
        for (e = 1; e < d; e++) b.lineTo(a[e].x * g, a[e].y * g);
        b.lineTo(a[0].x * g, a[0].y * g);
        b.closePath();
        b.stroke();
      }
    };
    a.prototype.DrawSolidPolygon = function (a, d, e) {
      if (d) {
        var b = this.m_ctx,
          g = this.m_drawScale;
        b.beginPath();
        b.strokeStyle = this._color(e.GetColor(), this.m_alpha);
        b.fillStyle = this._color(e.GetColor(), this.m_fillAlpha);
        b.moveTo(a[0].x * g, a[0].y * g);
        for (e = 1; e < d; e++) b.lineTo(a[e].x * g, a[e].y * g);
        b.lineTo(a[0].x * g, a[0].y * g);
        b.closePath();
        b.fill();
        b.stroke();
      }
    };
    a.prototype.DrawCircle = function (a, d, e) {
      if (d) {
        var b = this.m_ctx,
          g = this.m_drawScale;
        b.beginPath();
        b.strokeStyle = this._color(e.GetColor(), this.m_alpha);
        b.arc(a.x * g, a.y * g, d * g, 0, 2 * Math.PI, !0);
        b.closePath();
        b.stroke();
      }
    };
    a.prototype.DrawSolidCircle = function (a, d, e, f) {
      if (d) {
        var b = this.m_ctx,
          h = this.m_drawScale,
          m = a.x * h,
          n = a.y * h;
        b.moveTo(0, 0);
        b.beginPath();
        b.strokeStyle = this._color(f.GetColor(), this.m_alpha);
        b.fillStyle = this._color(f.GetColor(), this.m_fillAlpha);
        b.arc(m, n, d * h, 0, 2 * Math.PI, !0);
        b.moveTo(m, n);
        b.lineTo((a.x + e.x * d) * h, (a.y + e.y * d) * h);
        b.closePath();
        b.fill();
        b.stroke();
      }
    };
    a.prototype.DrawSegment = function (a, d, e) {
      var b = this.m_ctx,
        g = this.m_drawScale;
      b.strokeStyle = this._color(e.GetColor(), this.m_alpha);
      b.beginPath();
      b.moveTo(a.x * g, a.y * g);
      b.lineTo(d.x * g, d.y * g);
      b.closePath();
      b.stroke();
    };
    a.prototype.DrawTransform = function (a) {
      var b = this.m_ctx,
        e = this.m_drawScale;
      b.beginPath();
      b.strokeStyle = this._color(16711680, this.m_alpha);
      b.moveTo(a.position.x * e, a.position.y * e);
      b.lineTo((a.position.x + this.m_xformScale * a.R.col1.x) * e, (a.position.y + this.m_xformScale * a.R.col1.y) * e);
      b.strokeStyle = this._color(65280, this.m_alpha);
      b.moveTo(a.position.x * e, a.position.y * e);
      b.lineTo((a.position.x + this.m_xformScale * a.R.col2.x) * e, (a.position.y + this.m_xformScale * a.R.col2.y) * e);
      b.closePath();
      b.stroke();
    };
  })(L.Dynamics.b2DebugDraw);
  L.Dynamics.b2DebugDraw.e_shapeBit = 1;
  L.Dynamics.b2DebugDraw.e_jointBit = 2;
  L.Dynamics.b2DebugDraw.e_aabbBit = 4;
  L.Dynamics.b2DebugDraw.e_pairBit = 8;
  L.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
  L.Dynamics.b2DebugDraw.e_controllerBit = 32;
  L.Dynamics.b2ContactImpulse = function () {
    I.get("Box2D.Dynamics.b2ContactImpulse").trackCreate();
    this.normalImpulses = [];
    this.tangentImpulses = [];
  };
  L.Dynamics.b2ContactImpulse.prototype.Reset = function () {
    this.normalImpulses = [];
    this.tangentImpulses = [];
  };
  L.Dynamics.b2Island = function (a, b) {
    I.get("Box2D.Dynamics.b2Island").trackCreate();
    this.m_listener = a;
    this.m_contactSolver = b;
    this.m_bodies = [];
    this.m_dynamicBodies = [];
    this.m_nonStaticBodies = [];
    this.m_contacts = [];
    this.m_joints = [];
    this.impulse = new L.Dynamics.b2ContactImpulse();
  };
  L.Dynamics.b2Island.prototype.Reset = function (a, b) {
    this.m_listener = a;
    this.m_contactSolver = b;
  };
  L.Dynamics.b2Island.prototype.Clear = function () {
    this.m_bodies = [];
    this.m_dynamicBodies = [];
    this.m_nonStaticBodies = [];
    this.m_contacts = [];
    this.m_joints = [];
  };
  L.Dynamics.b2Island.prototype.Solve = function (a, b, d) {
    this._InitializeVelocities(a, b);
    this.m_contactSolver.Initialize(a, this.m_contacts, this.m_contacts.length);
    this._SolveVelocityConstraints(a);
    this._SolveBodies(a);
    this._SolvePositionConstraints(a);
    this.Report(this.m_contactSolver.m_constraints);
    d && this._SleepIfTired(a);
  };
  L.Dynamics.b2Island.prototype._InitializeVelocities = function (a, b) {
    for (var d = 0; d < this.m_dynamicBodies.length; d++) {
      var e = this.m_dynamicBodies[d];
      e.m_linearVelocity.x += a.dt * (b.x + e.m_invMass * e.m_force.x);
      e.m_linearVelocity.y += a.dt * (b.y + e.m_invMass * e.m_force.y);
      e.m_angularVelocity += a.dt * e.m_invI * e.m_torque;
      e.m_linearVelocity.Multiply(L.Common.Math.b2Math.Clamp(1 - a.dt * e.m_linearDamping, 0, 1));
      e.m_angularVelocity *= L.Common.Math.b2Math.Clamp(1 - a.dt * e.m_angularDamping, 0, 1);
    }
  };
  L.Dynamics.b2Island.prototype._SolveVelocityConstraints = function (a) {
    this.m_contactSolver.InitVelocityConstraints(a);
    for (var b = 0; b < this.m_joints.length; b++) this.m_joints[b].InitVelocityConstraints(a);
    for (b = 0; b < a.velocityIterations; b++) {
      for (var d = 0; d < this.m_joints.length; d++) this.m_joints[d].SolveVelocityConstraints(a);
      this.m_contactSolver.SolveVelocityConstraints();
    }
    for (a = 0; a < this.m_joints.length; a++) this.m_joints[a].FinalizeVelocityConstraints();
    this.m_contactSolver.FinalizeVelocityConstraints();
  };
  L.Dynamics.b2Island.prototype._SolveBodies = function (a) {
    for (var b = 0; b < this.m_nonStaticBodies.length; ++b) {
      var d = this.m_nonStaticBodies[b],
        e = a.dt * d.m_linearVelocity.x,
        f = a.dt * d.m_linearVelocity.y;
      e * e + f * f > L.Common.b2Settings.b2_maxTranslationSquared && (d.m_linearVelocity.Normalize(), d.m_linearVelocity.x = d.m_linearVelocity.x * L.Common.b2Settings.b2_maxTranslation * a.inv_dt, d.m_linearVelocity.y = d.m_linearVelocity.y * L.Common.b2Settings.b2_maxTranslation * a.inv_dt);
      e = a.dt * d.m_angularVelocity;
      e * e > L.Common.b2Settings.b2_maxRotationSquared && (d.m_angularVelocity = 0 > d.m_angularVelocity ? -L.Common.b2Settings.b2_maxRotation * a.inv_dt : L.Common.b2Settings.b2_maxRotation * a.inv_dt);
      d.m_sweep.c0.SetV(d.m_sweep.c);
      d.m_sweep.a0 = d.m_sweep.a;
      d.m_sweep.c.x += a.dt * d.m_linearVelocity.x;
      d.m_sweep.c.y += a.dt * d.m_linearVelocity.y;
      d.m_sweep.a += a.dt * d.m_angularVelocity;
      d.SynchronizeTransform();
    }
  };
  L.Dynamics.b2Island.prototype._SolvePositionConstraints = function (a) {
    for (var b = 0; b < a.positionIterations; b++) {
      for (var d = this.m_contactSolver.SolvePositionConstraints(L.Common.b2Settings.b2_contactBaumgarte), e = !0, f = 0; f < this.m_joints.length; f++) {
        var g = this.m_joints[f].SolvePositionConstraints(L.Common.b2Settings.b2_contactBaumgarte);
        e = e && g;
      }
      if (d && e) break;
    }
  };
  L.Dynamics.b2Island.prototype._SleepIfTired = function (a) {
    for (var b = Number.MAX_VALUE, d = 0; d < this.m_nonStaticBodies.length; d++) {
      var e = this.m_nonStaticBodies[d];
      !e.m_allowSleep || Math.abs(e.m_angularVelocity) > L.Common.b2Settings.b2_angularSleepTolerance || L.Common.Math.b2Math.Dot(e.m_linearVelocity, e.m_linearVelocity) > L.Common.b2Settings.b2_linearSleepToleranceSquared ? b = e.m_sleepTime = 0 : (e.m_sleepTime += a.dt, b = Math.min(b, e.m_sleepTime));
    }
    if (b >= L.Common.b2Settings.b2_timeToSleep) for (a = 0; a < this.m_bodies.length; a++) this.m_bodies[a].SetAwake(!1);
  };
  L.Dynamics.b2Island.prototype.SolveTOI = function (a) {
    var b, d;
    this.m_contactSolver.Initialize(a, this.m_contacts, this.m_contacts.length);
    var e = this.m_contactSolver;
    for (b = 0; b < this.m_joints.length; ++b) this.m_joints[b].InitVelocityConstraints(a);
    for (b = 0; b < a.velocityIterations; ++b) for (e.SolveVelocityConstraints(), d = 0; d < this.m_joints.length; ++d) this.m_joints[d].SolveVelocityConstraints(a);
    for (b = 0; b < this.m_nonStaticBodies.length; ++b) {
      d = this.m_nonStaticBodies[b];
      var f = a.dt * d.m_linearVelocity.x,
        g = a.dt * d.m_linearVelocity.y;
      f * f + g * g > L.Common.b2Settings.b2_maxTranslationSquared && (d.m_linearVelocity.Normalize(), d.m_linearVelocity.x = d.m_linearVelocity.x * L.Common.b2Settings.b2_maxTranslation * a.inv_dt, d.m_linearVelocity.y = d.m_linearVelocity.y * L.Common.b2Settings.b2_maxTranslation * a.inv_dt);
      f = a.dt * d.m_angularVelocity;
      f * f > L.Common.b2Settings.b2_maxRotationSquared && (d.m_angularVelocity = 0 > d.m_angularVelocity ? -L.Common.b2Settings.b2_maxRotation * a.inv_dt : L.Common.b2Settings.b2_maxRotation * a.inv_dt);
      d.m_sweep.c0.SetV(d.m_sweep.c);
      d.m_sweep.a0 = d.m_sweep.a;
      d.m_sweep.c.x += a.dt * d.m_linearVelocity.x;
      d.m_sweep.c.y += a.dt * d.m_linearVelocity.y;
      d.m_sweep.a += a.dt * d.m_angularVelocity;
      d.SynchronizeTransform();
    }
    for (b = 0; b < a.positionIterations; ++b) {
      f = e.SolvePositionConstraints(.75);
      g = !0;
      for (d = 0; d < this.m_joints.length; ++d) {
        var h = this.m_joints[d].SolvePositionConstraints(L.Common.b2Settings.b2_contactBaumgarte);
        g = g && h;
      }
      if (f && g) break;
    }
    this.Report(e.m_constraints);
  };
  L.Dynamics.b2Island.prototype.Report = function (a) {
    if (null != this.m_listener) for (var b = 0; b < this.m_contacts.length; ++b) {
      var d = this.m_contacts[b],
        e = a[b];
      this.impulse.Reset();
      for (var f = 0; f < e.pointCount; ++f) this.impulse.normalImpulses[f] = e.points[f].normalImpulse, this.impulse.tangentImpulses[f] = e.points[f].tangentImpulse;
      this.m_listener.PostSolve(d, this.impulse);
    }
  };
  L.Dynamics.b2Island.prototype.AddBody = function (a) {
    this.m_bodies.push(a);
    a.GetType() != L.Dynamics.b2BodyDef.b2_staticBody && (this.m_nonStaticBodies.push(a), a.GetType() == L.Dynamics.b2BodyDef.b2_dynamicBody && this.m_dynamicBodies.push(a));
  };
  L.Dynamics.b2Island.prototype.AddContact = function (a) {
    this.m_contacts.push(a);
  };
  L.Dynamics.b2Island.prototype.AddJoint = function (a) {
    this.m_joints.push(a);
  };
  L.Dynamics.b2TimeStep = function (a, b, d, e, f) {
    I.get("Box2D.Dynamics.b2TimeStep").trackCreate();
    this.Reset(a, b, d, e, f);
  };
  L.Dynamics.b2TimeStep.prototype.Reset = function (a, b, d, e, f) {
    this.dt = a;
    var g = 0;
    0 < a && (g = 1 / a);
    this.inv_dt = g;
    this.dtRatio = b;
    this.positionIterations = d;
    this.velocityIterations = e;
    this.warmStarting = f;
  };
  L.Dynamics.Contacts.b2ContactConstraintPoint = function () {
    I.get("Box2D.Dynamics.Contacts.b2ContactConstraintPoint").trackCreate();
    this.localPoint = L.Common.Math.b2Vec2.Get(0, 0);
    this.rA = L.Common.Math.b2Vec2.Get(0, 0);
    this.rB = L.Common.Math.b2Vec2.Get(0, 0);
    this.tangentImpulse = this.normalImpulse = 0;
  };
  L.Dynamics.Contacts.b2ContactConstraintPoint.prototype.Reset = function () {
    this.localPoint.Set(0, 0);
    this.rA.Set(0, 0);
    this.rB.Set(0, 0);
    this.tangentImpulse = this.normalImpulse = 0;
  };
  L.Dynamics.Contacts.b2ContactConstraint = function () {
    I.get("Box2D.Dynamics.Contacts.b2ContactConstraint").trackCreate();
    this.localPlaneNormal = L.Common.Math.b2Vec2.Get(0, 0);
    this.localPoint = L.Common.Math.b2Vec2.Get(0, 0);
    this.normal = L.Common.Math.b2Vec2.Get(0, 0);
    this.normalMass = L.Common.Math.b2Mat22.Get();
    this.K = L.Common.Math.b2Mat22.Get();
    this.points = [];
    for (var a = 0; a < L.Common.b2Settings.b2_maxManifoldPoints; a++) this.points[a] = new L.Dynamics.Contacts.b2ContactConstraintPoint();
  };
  L.Collision.b2WorldManifold = function () {
    I.get("Box2D.Collision.b2WorldManifold").trackCreate();
    this.m_normal = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_points = [];
    for (var a = this.m_pointCount = 0; a < L.Common.b2Settings.b2_maxManifoldPoints; a++) this.m_points[a] = L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Collision.b2WorldManifold.prototype.Initialize = function (a, b, d, e, f) {
    if (0 != a.m_pointCount) switch (a.m_type) {
      case L.Collision.b2Manifold.e_circles:
        var g = b.R;
        var h = a.m_localPoint;
        var m = b.position.x + g.col1.x * h.x + g.col2.x * h.y;
        b = b.position.y + g.col1.y * h.x + g.col2.y * h.y;
        g = e.R;
        h = a.m_points[0].m_localPoint;
        a = e.position.x + g.col1.x * h.x + g.col2.x * h.y;
        e = e.position.y + g.col1.y * h.x + g.col2.y * h.y;
        h = a - m;
        g = e - b;
        var n = h * h + g * g;
        n > L.Common.b2Settings.MIN_VALUE_SQUARED ? (n = Math.sqrt(n), this.m_normal.x = h / n, this.m_normal.y = g / n) : (this.m_normal.x = 1, this.m_normal.y = 0);
        h = b + d * this.m_normal.y;
        e -= f * this.m_normal.y;
        this.m_points[0].x = .5 * (m + d * this.m_normal.x + (a - f * this.m_normal.x));
        this.m_points[0].y = .5 * (h + e);
        break;
      case L.Collision.b2Manifold.e_faceA:
        g = b.R;
        h = a.m_localPlaneNormal;
        n = g.col1.x * h.x + g.col2.x * h.y;
        var p = g.col1.y * h.x + g.col2.y * h.y;
        g = b.R;
        h = a.m_localPoint;
        var q = b.position.x + g.col1.x * h.x + g.col2.x * h.y;
        var u = b.position.y + g.col1.y * h.x + g.col2.y * h.y;
        this.m_normal.x = n;
        this.m_normal.y = p;
        for (m = 0; m < a.m_pointCount; m++) {
          g = e.R;
          h = a.m_points[m].m_localPoint;
          var v = e.position.x + g.col1.x * h.x + g.col2.x * h.y;
          h = e.position.y + g.col1.y * h.x + g.col2.y * h.y;
          this.m_points[m].x = v + .5 * (d - (v - q) * n - (h - u) * p - f) * n;
          this.m_points[m].y = h + .5 * (d - (v - q) * n - (h - u) * p - f) * p;
        }
        break;
      case L.Collision.b2Manifold.e_faceB:
        for (g = e.R, h = a.m_localPlaneNormal, n = g.col1.x * h.x + g.col2.x * h.y, p = g.col1.y * h.x + g.col2.y * h.y, g = e.R, h = a.m_localPoint, q = e.position.x + g.col1.x * h.x + g.col2.x * h.y, u = e.position.y + g.col1.y * h.x + g.col2.y * h.y, this.m_normal.x = -n, this.m_normal.y = -p, m = 0; m < a.m_pointCount; m++) g = b.R, h = a.m_points[m].m_localPoint, v = b.position.x + g.col1.x * h.x + g.col2.x * h.y, h = b.position.y + g.col1.y * h.x + g.col2.y * h.y, this.m_points[m].x = v + .5 * (f - (v - q) * n - (h - u) * p - d) * n, this.m_points[m].y = h + .5 * (f - (v - q) * n - (h - u) * p - d) * p;
    }
  };
  L.Dynamics.Contacts.b2PositionSolverManifold = function () {
    this.m_normal = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_separations = [];
    this.m_points = [];
    for (var a = 0; a < L.Common.b2Settings.b2_maxManifoldPoints; a++) this.m_points[a] = L.Common.Math.b2Vec2.Get(0, 0);
  };
  L.Dynamics.Contacts.b2PositionSolverManifold.prototype.Initialize = function (a) {
    L.Common.b2Settings.b2Assert(0 < a.pointCount);
    switch (a.type) {
      case L.Collision.b2Manifold.e_circles:
        this._InitializeCircles(a);
        break;
      case L.Collision.b2Manifold.e_faceA:
        this._InitializeFaceA(a);
        break;
      case L.Collision.b2Manifold.e_faceB:
        this._InitializeFaceB(a);
    }
  };
  L.Dynamics.Contacts.b2PositionSolverManifold.prototype._InitializeCircles = function (a) {
    var b = a.bodyA.m_xf.R,
      d = a.localPoint,
      e = a.bodyA.m_xf.position.x + (b.col1.x * d.x + b.col2.x * d.y),
      f = a.bodyA.m_xf.position.y + (b.col1.y * d.x + b.col2.y * d.y);
    b = a.bodyB.m_xf.R;
    d = a.points[0].localPoint;
    var g = a.bodyB.m_xf.position.x + (b.col1.x * d.x + b.col2.x * d.y);
    b = a.bodyB.m_xf.position.y + (b.col1.y * d.x + b.col2.y * d.y);
    d = g - e;
    var h = b - f,
      m = d * d + h * h;
    m > L.Common.b2Settings.MIN_VALUE_SQUARED ? (m = Math.sqrt(m), this.m_normal.x = d / m, this.m_normal.y = h / m) : (this.m_normal.x = 1, this.m_normal.y = 0);
    this.m_points[0].x = .5 * (e + g);
    this.m_points[0].y = .5 * (f + b);
    this.m_separations[0] = d * this.m_normal.x + h * this.m_normal.y - a.radius;
  };
  L.Dynamics.Contacts.b2PositionSolverManifold.prototype._InitializeFaceA = function (a) {
    this.m_normal.x = a.bodyA.m_xf.R.col1.x * a.localPlaneNormal.x + a.bodyA.m_xf.R.col2.x * a.localPlaneNormal.y;
    this.m_normal.y = a.bodyA.m_xf.R.col1.y * a.localPlaneNormal.x + a.bodyA.m_xf.R.col2.y * a.localPlaneNormal.y;
    for (var b = a.bodyA.m_xf.position.x + (a.bodyA.m_xf.R.col1.x * a.localPoint.x + a.bodyA.m_xf.R.col2.x * a.localPoint.y), d = a.bodyA.m_xf.position.y + (a.bodyA.m_xf.R.col1.y * a.localPoint.x + a.bodyA.m_xf.R.col2.y * a.localPoint.y), e = 0; e < a.pointCount; e++) {
      var f = a.bodyB.m_xf.position.x + (a.bodyB.m_xf.R.col1.x * a.points[e].localPoint.x + a.bodyB.m_xf.R.col2.x * a.points[e].localPoint.y),
        g = a.bodyB.m_xf.position.y + (a.bodyB.m_xf.R.col1.y * a.points[e].localPoint.x + a.bodyB.m_xf.R.col2.y * a.points[e].localPoint.y);
      this.m_separations[e] = (f - b) * this.m_normal.x + (g - d) * this.m_normal.y - a.radius;
      this.m_points[e].x = f;
      this.m_points[e].y = g;
    }
  };
  L.Dynamics.Contacts.b2PositionSolverManifold.prototype._InitializeFaceB = function (a) {
    this.m_normal.x = a.bodyB.m_xf.R.col1.x * a.localPlaneNormal.x + a.bodyB.m_xf.R.col2.x * a.localPlaneNormal.y;
    this.m_normal.y = a.bodyB.m_xf.R.col1.y * a.localPlaneNormal.x + a.bodyB.m_xf.R.col2.y * a.localPlaneNormal.y;
    for (var b = a.bodyB.m_xf.position.x + (a.bodyB.m_xf.R.col1.x * a.localPoint.x + a.bodyB.m_xf.R.col2.x * a.localPoint.y), d = a.bodyB.m_xf.position.y + (a.bodyB.m_xf.R.col1.y * a.localPoint.x + a.bodyB.m_xf.R.col2.y * a.localPoint.y), e = 0; e < a.pointCount; e++) {
      var f = a.bodyA.m_xf.position.x + (a.bodyA.m_xf.R.col1.x * a.points[e].localPoint.x + a.bodyA.m_xf.R.col2.x * a.points[e].localPoint.y),
        g = a.bodyA.m_xf.position.y + (a.bodyA.m_xf.R.col1.y * a.points[e].localPoint.x + a.bodyA.m_xf.R.col2.y * a.points[e].localPoint.y);
      this.m_separations[e] = (f - b) * this.m_normal.x + (g - d) * this.m_normal.y - a.radius;
      this.m_points[e].Set(f, g);
    }
    this.m_normal.x *= -1;
    this.m_normal.y *= -1;
  };
  L.Dynamics.Contacts.b2ContactSolver = function () {
    this.m_constraints = [];
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.Initialize = function (a, b, d) {
    for (this.m_constraintCount = d; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new L.Dynamics.Contacts.b2ContactConstraint();
    for (a = 0; a < d; a++) {
      var e = b[a],
        f = e.m_fixtureA,
        g = e.m_fixtureB,
        h = f.m_shape.m_radius,
        m = g.m_shape.m_radius,
        n = f.GetBody(),
        p = g.GetBody(),
        q = e.GetManifold(),
        u = L.Common.b2Settings.b2MixFriction(f.GetFriction(), g.GetFriction()),
        v = L.Common.b2Settings.b2MixRestitution(f.GetRestitution(), g.GetRestitution()),
        w = n.m_linearVelocity.x,
        x = n.m_linearVelocity.y,
        y = p.m_linearVelocity.x,
        z = p.m_linearVelocity.y,
        A = n.m_angularVelocity,
        N = p.m_angularVelocity;
      L.Common.b2Settings.b2Assert(0 < q.m_pointCount);
      L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.Initialize(q, n.GetTransform(), h, p.GetTransform(), m);
      g = L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.m_normal.x;
      e = L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.m_normal.y;
      f = this.m_constraints[a];
      f.bodyA = n;
      f.bodyB = p;
      f.manifold = q;
      f.normal.x = g;
      f.normal.y = e;
      f.pointCount = q.m_pointCount;
      f.friction = u;
      f.restitution = v;
      f.localPlaneNormal.x = q.m_localPlaneNormal.x;
      f.localPlaneNormal.y = q.m_localPlaneNormal.y;
      f.localPoint.x = q.m_localPoint.x;
      f.localPoint.y = q.m_localPoint.y;
      f.radius = h + m;
      f.type = q.m_type;
      for (h = 0; h < f.pointCount; ++h) {
        u = q.m_points[h];
        m = f.points[h];
        m.normalImpulse = u.m_normalImpulse;
        m.tangentImpulse = u.m_tangentImpulse;
        m.localPoint.SetV(u.m_localPoint);
        u = m.rA.x = L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.m_points[h].x - n.GetWorldCenter().x;
        v = m.rA.y = L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.m_points[h].y - n.GetWorldCenter().y;
        var J = m.rB.x = L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.m_points[h].x - p.GetWorldCenter().x,
          K = m.rB.y = L.Dynamics.Contacts.b2ContactSolver.s_worldManifold.m_points[h].y - p.GetWorldCenter().y,
          C = u * e - v * g,
          B = J * e - K * g;
        C *= C;
        B *= B;
        var G = n.GetInverseMass() + p.GetInverseMass() + n.GetInverseInertia() * C + p.GetInverseInertia() * B;
        m.normalMass = 1 / G;
        G = n.m_mass * n.GetInverseMass() + p.m_mass * p.GetInverseMass();
        G += n.m_mass * n.GetInverseInertia() * C + p.m_mass * p.GetInverseInertia() * B;
        m.equalizedMass = 1 / G;
        B = e;
        G = -g;
        C = u * G - v * B;
        B = J * G - K * B;
        C *= C;
        B *= B;
        C = n.GetInverseMass() + p.GetInverseMass() + n.GetInverseInertia() * C + p.GetInverseInertia() * B;
        m.tangentMass = 1 / C;
        m.velocityBias = 0;
        u = f.normal.x * (y + -N * K - w - -A * v) + f.normal.y * (z + N * J - x - A * u);
        u < -L.Common.b2Settings.b2_velocityThreshold && (m.velocityBias += -f.restitution * u);
      }
      2 == f.pointCount && (z = f.points[0], y = f.points[1], q = n.GetInverseMass(), n = n.GetInverseInertia(), w = p.GetInverseMass(), p = p.GetInverseInertia(), x = z.rA.x * e - z.rA.y * g, z = z.rB.x * e - z.rB.y * g, A = y.rA.x * e - y.rA.y * g, y = y.rB.x * e - y.rB.y * g, g = q + w + n * x * x + p * z * z, e = q + w + n * A * A + p * y * y, p = q + w + n * x * A + p * z * y, g * g < 100 * (g * e - p * p) ? (f.K.col1.Set(g, p), f.K.col2.Set(p, e), f.K.GetInverse(f.normalMass)) : f.pointCount = 1);
    }
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.InitVelocityConstraints = function (a) {
    for (var b = 0; b < this.m_constraintCount; ++b) {
      var d = this.m_constraints[b],
        e = d.bodyA,
        f = d.bodyB,
        g = e.GetInverseMass(),
        h = e.GetInverseInertia(),
        m = f.GetInverseMass(),
        n = f.GetInverseInertia(),
        p = d.normal.x,
        q = d.normal.y,
        u = q,
        v = -p,
        w;
      if (a.warmStarting) {
        var x = d.pointCount;
        for (w = 0; w < x; ++w) {
          var y = d.points[w];
          y.normalImpulse *= a.dtRatio;
          y.tangentImpulse *= a.dtRatio;
          var z = y.normalImpulse * p + y.tangentImpulse * u,
            A = y.normalImpulse * q + y.tangentImpulse * v;
          e.m_angularVelocity -= h * (y.rA.x * A - y.rA.y * z);
          e.m_linearVelocity.x -= g * z;
          e.m_linearVelocity.y -= g * A;
          f.m_angularVelocity += n * (y.rB.x * A - y.rB.y * z);
          f.m_linearVelocity.x += m * z;
          f.m_linearVelocity.y += m * A;
        }
      } else for (x = d.pointCount, w = 0; w < x; ++w) e = d.points[w], e.normalImpulse = 0, e.tangentImpulse = 0;
    }
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.SolveVelocityConstraints = function () {
    for (var a = 0; a < this.m_constraintCount; a++) this.SolveVelocityConstraints_Constraint(this.m_constraints[a]);
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.SolveVelocityConstraints_Constraint = function (a) {
    for (var b = a.normal.x, d = a.normal.y, e = 0; e < a.pointCount; e++) L.Dynamics.Contacts.b2ContactSolver.prototype.SolveVelocityConstraints_ConstraintPoint(a, a.points[e]);
    if (1 == a.pointCount) {
      e = a.points[0];
      var f = e.normalImpulse - e.normalMass * ((a.bodyB.m_linearVelocity.x - a.bodyB.m_angularVelocity * e.rB.y - a.bodyA.m_linearVelocity.x + a.bodyA.m_angularVelocity * e.rA.y) * b + (a.bodyB.m_linearVelocity.y + a.bodyB.m_angularVelocity * e.rB.x - a.bodyA.m_linearVelocity.y - a.bodyA.m_angularVelocity * e.rA.x) * d - e.velocityBias);
      f = 0 < f ? f : 0;
      var g = f - e.normalImpulse,
        h = g * b;
      d *= g;
      a.bodyA.m_linearVelocity.x -= a.bodyA.GetInverseMass() * h;
      a.bodyA.m_linearVelocity.y -= a.bodyA.GetInverseMass() * d;
      a.bodyA.m_angularVelocity -= a.bodyA.GetInverseInertia() * (e.rA.x * d - e.rA.y * h);
      a.bodyB.m_linearVelocity.x += a.bodyB.GetInverseMass() * h;
      a.bodyB.m_linearVelocity.y += a.bodyB.GetInverseMass() * d;
      a.bodyB.m_angularVelocity += a.bodyB.GetInverseInertia() * (e.rB.x * d - e.rB.y * h);
      e.normalImpulse = f;
    } else {
      e = a.points[0];
      f = a.points[1];
      g = e.normalImpulse;
      h = f.normalImpulse;
      var m = (a.bodyB.m_linearVelocity.x - a.bodyB.m_angularVelocity * e.rB.y - a.bodyA.m_linearVelocity.x + a.bodyA.m_angularVelocity * e.rA.y) * b + (a.bodyB.m_linearVelocity.y + a.bodyB.m_angularVelocity * e.rB.x - a.bodyA.m_linearVelocity.y - a.bodyA.m_angularVelocity * e.rA.x) * d - e.velocityBias;
      d = (a.bodyB.m_linearVelocity.x - a.bodyB.m_angularVelocity * f.rB.y - a.bodyA.m_linearVelocity.x + a.bodyA.m_angularVelocity * f.rA.y) * b + (a.bodyB.m_linearVelocity.y + a.bodyB.m_angularVelocity * f.rB.x - a.bodyA.m_linearVelocity.y - a.bodyA.m_angularVelocity * f.rA.x) * d - f.velocityBias;
      m -= a.K.col1.x * g + a.K.col2.x * h;
      for (d -= a.K.col1.y * g + a.K.col2.y * h;;) {
        b = -(a.normalMass.col1.x * m + a.normalMass.col2.x * d);
        if (0 <= b) {
          var n = -(a.normalMass.col1.y * m + a.normalMass.col2.y * d);
          if (0 <= n) {
            this.SolveVelocityConstraints_ConstraintPointUpdate(a, e, f, b - g, n - h);
            e.normalImpulse = b;
            f.normalImpulse = n;
            break;
          }
        }
        b = -e.normalMass * m;
        if (0 <= b && 0 <= a.K.col1.y * b + d) {
          this.SolveVelocityConstraints_ConstraintPointUpdate(a, e, f, b - g, -h);
          e.normalImpulse = b;
          f.normalImpulse = 0;
          break;
        }
        b = -f.normalMass * d;
        if (0 <= b && 0 <= a.K.col2.x * b + m) {
          this.SolveVelocityConstraints_ConstraintPointUpdate(a, e, f, -g, b - h);
          e.normalImpulse = 0;
          f.normalImpulse = b;
          break;
        }
        if (0 <= m && 0 <= d) {
          this.SolveVelocityConstraints_ConstraintPointUpdate(a, e, f, -g, -h);
          e.normalImpulse = 0;
          f.normalImpulse = 0;
          break;
        }
        break;
      }
    }
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.SolveVelocityConstraints_ConstraintPoint = function (a, b) {
    var d = a.normal.y,
      e = -a.normal.x,
      f = a.friction * b.normalImpulse;
    f = L.Common.Math.b2Math.Clamp(b.tangentImpulse - b.tangentMass * ((a.bodyB.m_linearVelocity.x - a.bodyB.m_angularVelocity * b.rB.y - a.bodyA.m_linearVelocity.x + a.bodyA.m_angularVelocity * b.rA.y) * d + (a.bodyB.m_linearVelocity.y + a.bodyB.m_angularVelocity * b.rB.x - a.bodyA.m_linearVelocity.y - a.bodyA.m_angularVelocity * b.rA.x) * e), -f, f);
    var g = f - b.tangentImpulse;
    d *= g;
    e *= g;
    a.bodyA.m_linearVelocity.x -= a.bodyA.GetInverseMass() * d;
    a.bodyA.m_linearVelocity.y -= a.bodyA.GetInverseMass() * e;
    a.bodyA.m_angularVelocity -= a.bodyA.GetInverseInertia() * (b.rA.x * e - b.rA.y * d);
    a.bodyB.m_linearVelocity.x += a.bodyB.GetInverseMass() * d;
    a.bodyB.m_linearVelocity.y += a.bodyB.GetInverseMass() * e;
    a.bodyB.m_angularVelocity += a.bodyB.GetInverseInertia() * (b.rB.x * e - b.rB.y * d);
    b.tangentImpulse = f;
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.SolveVelocityConstraints_ConstraintPointUpdate = function (a, b, d, e, f) {
    var g = e * a.normal.x;
    e *= a.normal.y;
    var h = f * a.normal.x;
    f *= a.normal.y;
    a.bodyA.m_linearVelocity.x -= a.bodyA.GetInverseMass() * (g + h);
    a.bodyA.m_linearVelocity.y -= a.bodyA.GetInverseMass() * (e + f);
    a.bodyA.m_angularVelocity -= a.bodyA.GetInverseInertia() * (b.rA.x * e - b.rA.y * g + d.rA.x * f - d.rA.y * h);
    a.bodyB.m_linearVelocity.x += a.bodyB.GetInverseMass() * (g + h);
    a.bodyB.m_linearVelocity.y += a.bodyB.GetInverseMass() * (e + f);
    a.bodyB.m_angularVelocity += a.bodyB.GetInverseInertia() * (b.rB.x * e - b.rB.y * g + d.rB.x * f - d.rB.y * h);
    b.normalImpulse = 0;
    d.normalImpulse = 0;
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.FinalizeVelocityConstraints = function () {
    for (var a = 0; a < this.m_constraintCount; ++a) for (var b = this.m_constraints[a], d = b.manifold, e = 0; e < b.pointCount; ++e) {
      var f = d.m_points[e],
        g = b.points[e];
      f.m_normalImpulse = g.normalImpulse;
      f.m_tangentImpulse = g.tangentImpulse;
    }
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.SolvePositionConstraints = function (a) {
    void 0 === a && (a = 0);
    for (var b = 0, d = 0; d < this.m_constraintCount; d++) {
      var e = this.m_constraints[d],
        f = e.bodyA,
        g = e.bodyB,
        h = f.m_mass * f.GetInverseMass(),
        m = f.m_mass * f.GetInverseInertia(),
        n = g.m_mass * g.GetInverseMass(),
        p = g.m_mass * g.GetInverseInertia();
      L.Dynamics.Contacts.b2ContactSolver.s_psm.Initialize(e);
      for (var q = L.Dynamics.Contacts.b2ContactSolver.s_psm.m_normal, u = 0; u < e.pointCount; u++) {
        var v = e.points[u],
          w = L.Dynamics.Contacts.b2ContactSolver.s_psm.m_points[u],
          x = L.Dynamics.Contacts.b2ContactSolver.s_psm.m_separations[u],
          y = w.x - f.GetWorldCenter().x,
          z = w.y - f.GetWorldCenter().y,
          A = w.x - g.GetWorldCenter().x;
        w = w.y - g.GetWorldCenter().y;
        b = b < x ? b : x;
        x = L.Common.Math.b2Math.Clamp(a * (x + L.Common.b2Settings.b2_linearSlop), -L.Common.b2Settings.b2_maxLinearCorrection, 0);
        x *= -v.equalizedMass;
        v = x * q.x;
        x *= q.y;
        f.GetWorldCenter().x -= h * v;
        f.GetWorldCenter().y -= h * x;
        f.SetCalculatedAngle(f.GetAngle() - m * (y * x - z * v));
        f.SynchronizeTransform();
        g.GetWorldCenter().x += n * v;
        g.GetWorldCenter().y += n * x;
        g.SetCalculatedAngle(g.GetAngle() + p * (A * x - w * v));
        g.SynchronizeTransform();
      }
    }
    return b > -1.5 * L.Common.b2Settings.b2_linearSlop;
  };
  L.Dynamics.Contacts.b2ContactSolver.prototype.SolvePositionConstraints_NEW = function (a) {
    void 0 === a && (a = 0);
    for (var b = 0, d = 0; d < this.m_constraintCount; d++) {
      var e = this.m_constraints[d],
        f = e.bodyA,
        g = e.bodyB,
        h = f.m_mass * f.GetInverseMass(),
        m = f.m_mass * f.GetInverseInertia(),
        n = g.m_mass * g.GetInverseMass(),
        p = g.m_mass * g.GetInverseInertia();
      L.Dynamics.Contacts.b2ContactSolver.s_psm.Initialize(e);
      for (var q = L.Dynamics.Contacts.b2ContactSolver.s_psm.m_normal, u = 0; u < e.pointCount; u++) {
        var v = e.points[u],
          w = L.Dynamics.Contacts.b2ContactSolver.s_psm.m_points[u],
          x = L.Dynamics.Contacts.b2ContactSolver.s_psm.m_separations[u],
          y = w.x - f.GetWorldCenter().x,
          z = w.y - f.GetWorldCenter().y,
          A = w.x - g.GetWorldCenter().x;
        w = w.y - g.GetWorldCenter().y;
        x < b && (b = x);
        0 != a && L.Common.Math.b2Math.Clamp(a * (x + L.Common.b2Settings.b2_linearSlop), -L.Common.b2Settings.b2_maxLinearCorrection, 0);
        x = 0 * -v.equalizedMass;
        v = x * q.x;
        x *= q.y;
        f.GetWorldCenter().x -= h * v;
        f.GetWorldCenter().y -= h * x;
        f.SetAngle(f.GetAngle() - m * (y * x - z * v));
        f.SynchronizeTransform();
        g.GetWorldCenter().x += n * v;
        g.GetWorldCenter().y += n * x;
        g.SetAngle(g.GetAngle() + p * (A * x - w * v));
        g.SynchronizeTransform();
      }
    }
    return b > -1.5 * L.Common.b2Settings.b2_linearSlop;
  };
  L.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new L.Collision.b2WorldManifold();
  L.Dynamics.Contacts.b2ContactSolver.s_psm = new L.Dynamics.Contacts.b2PositionSolverManifold();
  L.Dynamics.Joints = {};
  L.Dynamics.Joints.b2JointEdge = function () {};
  L.Dynamics.Joints.b2Joint = function (a) {
    this.m_edgeA = new L.Dynamics.Joints.b2JointEdge();
    this.m_edgeB = new L.Dynamics.Joints.b2JointEdge();
    this.m_localCenterA = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_localCenterB = L.Common.Math.b2Vec2.Get(0, 0);
    L.Common.b2Settings.b2Assert(a.bodyA != a.bodyB);
    this.m_type = a.type;
    this.m_next = this.m_prev = null;
    this.m_bodyA = a.bodyA;
    this.m_bodyB = a.bodyB;
    this.m_collideConnected = a.collideConnected;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetType = function () {
    return this.m_type;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetAnchorA = function () {
    return null;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetAnchorB = function () {
    return null;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetReactionForce = function () {
    return null;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetReactionTorque = function () {
    return 0;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetBodyA = function () {
    return this.m_bodyA;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetBodyB = function () {
    return this.m_bodyB;
  };
  L.Dynamics.Joints.b2Joint.prototype.GetNext = function () {
    return this.m_next;
  };
  L.Dynamics.Joints.b2Joint.prototype.IsActive = function () {
    return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
  };
  L.Dynamics.Joints.b2Joint.Create = function (a) {
    return a.Create();
  };
  L.Dynamics.Joints.b2Joint.prototype.InitVelocityConstraints = function () {};
  L.Dynamics.Joints.b2Joint.prototype.SolveVelocityConstraints = function () {};
  L.Dynamics.Joints.b2Joint.prototype.FinalizeVelocityConstraints = function () {};
  L.Dynamics.Joints.b2Joint.prototype.SolvePositionConstraints = function () {
    return !1;
  };
  L.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
  L.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
  L.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
  L.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
  L.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
  L.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
  L.Dynamics.Joints.b2Joint.e_gearJoint = 6;
  L.Dynamics.Joints.b2Joint.e_lineJoint = 7;
  L.Dynamics.Joints.b2Joint.e_weldJoint = 8;
  L.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
  L.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
  L.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
  L.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
  L.Dynamics.Joints.b2Joint.e_equalLimits = 3;
  L.Dynamics.Joints.b2DistanceJoint = function (a) {
    L.Dynamics.Joints.b2Joint.call(this, a);
    this.m_localAnchor1 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_localAnchor2 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_u = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_length = a.length;
    this.m_frequencyHz = a.frequencyHz;
    this.m_dampingRatio = a.dampingRatio;
    this.m_bias = this.m_gamma = this.m_impulse = 0;
  };
  c.inherits(L.Dynamics.Joints.b2DistanceJoint, L.Dynamics.Joints.b2Joint);
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetReactionForce = function (a) {
    return L.Common.Math.b2Vec2.Get(a * this.m_impulse * this.m_u.x, a * this.m_impulse * this.m_u.y);
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetReactionTorque = function () {
    return 0;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetLength = function () {
    return this.m_length;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.SetLength = function (a) {
    this.m_length = a;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetFrequency = function () {
    return this.m_frequencyHz;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.SetFrequency = function (a) {
    this.m_frequencyHz = a;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.GetDampingRatio = function () {
    return this.m_dampingRatio;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.SetDampingRatio = function (a) {
    this.m_dampingRatio = a;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.InitVelocityConstraints = function (a) {
    var b = this.m_bodyA,
      d = this.m_bodyB;
    var e = b.m_xf.R;
    var f = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
      g = this.m_localAnchor1.y - b.m_sweep.localCenter.y;
    var h = e.col1.x * f + e.col2.x * g;
    g = e.col1.y * f + e.col2.y * g;
    f = h;
    e = d.m_xf.R;
    var m = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
      n = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
    h = e.col1.x * m + e.col2.x * n;
    n = e.col1.y * m + e.col2.y * n;
    m = h;
    this.m_u.x = d.m_sweep.c.x + m - b.m_sweep.c.x - f;
    this.m_u.y = d.m_sweep.c.y + n - b.m_sweep.c.y - g;
    h = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
    h > L.Common.b2Settings.b2_linearSlop ? this.m_u.Multiply(1 / h) : this.m_u.SetZero();
    e = f * this.m_u.y - g * this.m_u.x;
    var p = m * this.m_u.y - n * this.m_u.x;
    e = b.m_invMass + b.m_invI * e * e + d.m_invMass + d.m_invI * p * p;
    this.m_mass = 0 != e ? 1 / e : 0;
    if (0 < this.m_frequencyHz) {
      h -= this.m_length;
      p = 2 * Math.PI * this.m_frequencyHz;
      var q = this.m_mass * p * p;
      this.m_gamma = a.dt * (2 * this.m_mass * this.m_dampingRatio * p + a.dt * q);
      this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
      this.m_bias = h * a.dt * q * this.m_gamma;
      this.m_mass = e + this.m_gamma;
      this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0;
    }
    a.warmStarting ? (this.m_impulse *= a.dtRatio, a = this.m_impulse * this.m_u.x, e = this.m_impulse * this.m_u.y, b.m_linearVelocity.x -= b.m_invMass * a, b.m_linearVelocity.y -= b.m_invMass * e, b.m_angularVelocity -= b.m_invI * (f * e - g * a), d.m_linearVelocity.x += d.m_invMass * a, d.m_linearVelocity.y += d.m_invMass * e, d.m_angularVelocity += d.m_invI * (m * e - n * a)) : this.m_impulse = 0;
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.SolveVelocityConstraints = function () {
    var a = this.m_localAnchor1.x - this.m_bodyA.m_sweep.localCenter.x,
      b = this.m_localAnchor1.y - this.m_bodyA.m_sweep.localCenter.y,
      d = this.m_bodyA.m_xf.R.col1.x * a + this.m_bodyA.m_xf.R.col2.x * b;
    b = this.m_bodyA.m_xf.R.col1.y * a + this.m_bodyA.m_xf.R.col2.y * b;
    a = d;
    var e = this.m_localAnchor2.x - this.m_bodyB.m_sweep.localCenter.x,
      f = this.m_localAnchor2.y - this.m_bodyB.m_sweep.localCenter.y;
    d = this.m_bodyB.m_xf.R.col1.x * e + this.m_bodyB.m_xf.R.col2.x * f;
    f = this.m_bodyB.m_xf.R.col1.y * e + this.m_bodyB.m_xf.R.col2.y * f;
    e = d;
    var g = -this.m_mass * (this.m_u.x * (this.m_bodyB.m_linearVelocity.x - this.m_bodyB.m_angularVelocity * f - (this.m_bodyA.m_linearVelocity.x - this.m_bodyA.m_angularVelocity * b)) + this.m_u.y * (this.m_bodyB.m_linearVelocity.y + this.m_bodyB.m_angularVelocity * e - (this.m_bodyA.m_linearVelocity.y + this.m_bodyA.m_angularVelocity * a)) + this.m_bias + this.m_gamma * this.m_impulse);
    this.m_impulse += g;
    d = g * this.m_u.x;
    g *= this.m_u.y;
    this.m_bodyA.m_linearVelocity.x -= this.m_bodyA.m_invMass * d;
    this.m_bodyA.m_linearVelocity.y -= this.m_bodyA.m_invMass * g;
    this.m_bodyA.m_angularVelocity -= this.m_bodyA.m_invI * (a * g - b * d);
    this.m_bodyB.m_linearVelocity.x += this.m_bodyB.m_invMass * d;
    this.m_bodyB.m_linearVelocity.y += this.m_bodyB.m_invMass * g;
    this.m_bodyB.m_angularVelocity += this.m_bodyB.m_invI * (e * g - f * d);
  };
  L.Dynamics.Joints.b2DistanceJoint.prototype.SolvePositionConstraints = function () {
    if (0 < this.m_frequencyHz) return !0;
    var a = this.m_localAnchor1.x - this.m_bodyA.m_sweep.localCenter.x,
      b = this.m_localAnchor1.y - this.m_bodyA.m_sweep.localCenter.y,
      d = this.m_bodyA.m_xf.R.col1.x * a + this.m_bodyA.m_xf.R.col2.x * b;
    b = this.m_bodyA.m_xf.R.col1.y * a + this.m_bodyA.m_xf.R.col2.y * b;
    a = d;
    var e = this.m_localAnchor2.x - this.m_bodyB.m_sweep.localCenter.x,
      f = this.m_localAnchor2.y - this.m_bodyB.m_sweep.localCenter.y;
    d = this.m_bodyB.m_xf.R.col1.x * e + this.m_bodyB.m_xf.R.col2.x * f;
    f = this.m_bodyB.m_xf.R.col1.y * e + this.m_bodyB.m_xf.R.col2.y * f;
    e = d;
    var g = this.m_bodyB.m_sweep.c.x + e - this.m_bodyA.m_sweep.c.x - a,
      h = this.m_bodyB.m_sweep.c.y + f - this.m_bodyA.m_sweep.c.y - b;
    d = Math.sqrt(g * g + h * h);
    g /= d;
    h /= d;
    d = L.Common.Math.b2Math.Clamp(d - this.m_length, -L.Common.b2Settings.b2_maxLinearCorrection, L.Common.b2Settings.b2_maxLinearCorrection);
    var m = -this.m_mass * d;
    this.m_u.Set(g, h);
    g = m * this.m_u.x;
    h = m * this.m_u.y;
    this.m_bodyA.m_sweep.c.x -= this.m_bodyA.m_invMass * g;
    this.m_bodyA.m_sweep.c.y -= this.m_bodyA.m_invMass * h;
    this.m_bodyA.m_sweep.a -= this.m_bodyA.m_invI * (a * h - b * g);
    this.m_bodyB.m_sweep.c.x += this.m_bodyB.m_invMass * g;
    this.m_bodyB.m_sweep.c.y += this.m_bodyB.m_invMass * h;
    this.m_bodyB.m_sweep.a += this.m_bodyB.m_invI * (e * h - f * g);
    this.m_bodyA.SynchronizeTransform();
    this.m_bodyB.SynchronizeTransform();
    return Math.abs(d) < L.Common.b2Settings.b2_linearSlop;
  };
  L.Dynamics.Joints.b2MouseJoint = function (a) {
    L.Dynamics.Joints.b2Joint.call(this, a);
    this.K = L.Common.Math.b2Mat22.Get();
    this.K1 = L.Common.Math.b2Mat22.Get();
    this.K2 = L.Common.Math.b2Mat22.Get();
    this.m_localAnchor = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_target = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_impulse = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_mass = L.Common.Math.b2Mat22.Get();
    this.m_C = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_target.SetV(a.target);
    var b = this.m_target.x - this.m_bodyB.m_xf.position.x,
      d = this.m_target.y - this.m_bodyB.m_xf.position.y,
      e = this.m_bodyB.m_xf.R;
    this.m_localAnchor.x = b * e.col1.x + d * e.col1.y;
    this.m_localAnchor.y = b * e.col2.x + d * e.col2.y;
    this.m_maxForce = a.maxForce;
    this.m_impulse.SetZero();
    this.m_frequencyHz = a.frequencyHz;
    this.m_dampingRatio = a.dampingRatio;
    this.m_gamma = this.m_beta = 0;
  };
  c.inherits(L.Dynamics.Joints.b2MouseJoint, L.Dynamics.Joints.b2Joint);
  L.Dynamics.Joints.b2MouseJoint.prototype.GetAnchorA = function () {
    return L.Common.Math.b2Vec2.Get(this.m_target.x, this.m_target.y);
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return L.Common.Math.b2Vec2.Get(a * this.m_impulse.x, a * this.m_impulse.y);
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetReactionTorque = function () {
    return 0;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetTarget = function () {
    return this.m_target;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.SetTarget = function (a) {
    0 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
    this.m_target = a;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetMaxForce = function () {
    return this.m_maxForce;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.SetMaxForce = function (a) {
    void 0 === a && (a = 0);
    this.m_maxForce = a;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetFrequency = function () {
    return this.m_frequencyHz;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.SetFrequency = function (a) {
    void 0 === a && (a = 0);
    this.m_frequencyHz = a;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.GetDampingRatio = function () {
    return this.m_dampingRatio;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.SetDampingRatio = function (a) {
    void 0 === a && (a = 0);
    this.m_dampingRatio = a;
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.InitVelocityConstraints = function (a) {
    var b = this.m_bodyB,
      d = b.GetMass(),
      e = 2 * Math.PI * this.m_frequencyHz,
      f = d * e * e;
    this.m_gamma = a.dt * (2 * d * this.m_dampingRatio * e + a.dt * f);
    this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
    this.m_beta = a.dt * f * this.m_gamma;
    f = b.m_xf.R;
    d = this.m_localAnchor.x - b.m_sweep.localCenter.x;
    e = this.m_localAnchor.y - b.m_sweep.localCenter.y;
    var g = f.col1.x * d + f.col2.x * e;
    e = f.col1.y * d + f.col2.y * e;
    d = g;
    f = b.m_invMass;
    g = b.m_invI;
    this.K1.col1.x = f;
    this.K1.col2.x = 0;
    this.K1.col1.y = 0;
    this.K1.col2.y = f;
    this.K2.col1.x = g * e * e;
    this.K2.col2.x = -g * d * e;
    this.K2.col1.y = -g * d * e;
    this.K2.col2.y = g * d * d;
    this.K.SetM(this.K1);
    this.K.AddM(this.K2);
    this.K.col1.x += this.m_gamma;
    this.K.col2.y += this.m_gamma;
    this.K.GetInverse(this.m_mass);
    this.m_C.x = b.m_sweep.c.x + d - this.m_target.x;
    this.m_C.y = b.m_sweep.c.y + e - this.m_target.y;
    b.m_angularVelocity *= .98;
    this.m_impulse.x *= a.dtRatio;
    this.m_impulse.y *= a.dtRatio;
    b.m_linearVelocity.x += f * this.m_impulse.x;
    b.m_linearVelocity.y += f * this.m_impulse.y;
    b.m_angularVelocity += g * (d * this.m_impulse.y - e * this.m_impulse.x);
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.SolveVelocityConstraints = function (a) {
    var b = this.m_bodyB;
    var d = b.m_xf.R;
    var e = this.m_localAnchor.x - b.m_sweep.localCenter.x,
      f = this.m_localAnchor.y - b.m_sweep.localCenter.y;
    var g = d.col1.x * e + d.col2.x * f;
    f = d.col1.y * e + d.col2.y * f;
    e = g;
    g = b.m_linearVelocity.x + -b.m_angularVelocity * f;
    var h = b.m_linearVelocity.y + b.m_angularVelocity * e;
    d = this.m_mass;
    g = g + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
    var m = h + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
    h = -(d.col1.x * g + d.col2.x * m);
    m = -(d.col1.y * g + d.col2.y * m);
    d = this.m_impulse.x;
    g = this.m_impulse.y;
    this.m_impulse.x += h;
    this.m_impulse.y += m;
    a = a.dt * this.m_maxForce;
    this.m_impulse.LengthSquared() > a * a && this.m_impulse.Multiply(a / this.m_impulse.Length());
    h = this.m_impulse.x - d;
    m = this.m_impulse.y - g;
    b.m_linearVelocity.x += b.m_invMass * h;
    b.m_linearVelocity.y += b.m_invMass * m;
    b.m_angularVelocity += b.m_invI * (e * m - f * h);
  };
  L.Dynamics.Joints.b2MouseJoint.prototype.SolvePositionConstraints = function () {
    return !0;
  };
  L.Dynamics.Joints.b2PulleyJoint = function (a) {
    L.Dynamics.Joints.b2Joint.call(this, a);
    this.m_groundAnchor1 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_groundAnchor2 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_localAnchor1 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_localAnchor2 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_u1 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_u2 = L.Common.Math.b2Vec2.Get(0, 0);
    this.m_ground = this.m_bodyA.m_world.m_groundBody;
    this.m_groundAnchor1.x = a.groundAnchorA.x - this.m_ground.m_xf.position.x;
    this.m_groundAnchor1.y = a.groundAnchorA.y - this.m_ground.m_xf.position.y;
    this.m_groundAnchor2.x = a.groundAnchorB.x - this.m_ground.m_xf.position.x;
    this.m_groundAnchor2.y = a.groundAnchorB.y - this.m_ground.m_xf.position.y;
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_ratio = a.ratio;
    this.m_constant = a.lengthA + this.m_ratio * a.lengthB;
    this.m_maxLength1 = Math.min(a.maxLengthA, this.m_constant - this.m_ratio * L.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength);
    this.m_maxLength2 = Math.min(a.maxLengthB, (this.m_constant - L.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength) / this.m_ratio);
    this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
  };
  c.inherits(L.Dynamics.Joints.b2PulleyJoint, L.Dynamics.Joints.b2Joint);
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return L.Common.Math.b2Vec2.Get(a * this.m_impulse * this.m_u2.x, a * this.m_impulse * this.m_u2.y);
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetReactionTorque = function () {
    return 0;
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetGroundAnchorA = function () {
    var a = this.m_ground.m_xf.position.Copy();
    a.Add(this.m_groundAnchor1);
    return a;
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetGroundAnchorB = function () {
    var a = this.m_ground.m_xf.position.Copy();
    a.Add(this.m_groundAnchor2);
    return a;
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetLength1 = function () {
    var a = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
      b = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x);
    a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
    return Math.sqrt(b * b + a * a);
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetLength2 = function () {
    var a = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
      b = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x);
    a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
    return Math.sqrt(b * b + a * a);
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.GetRatio = function () {
    return this.m_ratio;
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.InitVelocityConstraints = function (a) {
    var b = this.m_bodyA,
      d = this.m_bodyB;
    var e = b.m_xf.R;
    var f = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
      g = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
      h = e.col1.x * f + e.col2.x * g;
    g = e.col1.y * f + e.col2.y * g;
    f = h;
    e = d.m_xf.R;
    var m = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
      n = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
    h = e.col1.x * m + e.col2.x * n;
    n = e.col1.y * m + e.col2.y * n;
    m = h;
    e = d.m_sweep.c.x + m;
    h = d.m_sweep.c.y + n;
    var p = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
      q = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
    this.m_u1.Set(b.m_sweep.c.x + f - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), b.m_sweep.c.y + g - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
    this.m_u2.Set(e - p, h - q);
    e = this.m_u1.Length();
    h = this.m_u2.Length();
    e > L.Common.b2Settings.b2_linearSlop ? this.m_u1.Multiply(1 / e) : this.m_u1.SetZero();
    h > L.Common.b2Settings.b2_linearSlop ? this.m_u2.Multiply(1 / h) : this.m_u2.SetZero();
    0 < this.m_constant - e - this.m_ratio * h ? (this.m_state = L.Dynamics.Joints.b2Joint.e_inactiveLimit, this.m_impulse = 0) : this.m_state = L.Dynamics.Joints.b2Joint.e_atUpperLimit;
    e < this.m_maxLength1 ? (this.m_limitState1 = L.Dynamics.Joints.b2Joint.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = L.Dynamics.Joints.b2Joint.e_atUpperLimit;
    h < this.m_maxLength2 ? (this.m_limitState2 = L.Dynamics.Joints.b2Joint.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = L.Dynamics.Joints.b2Joint.e_atUpperLimit;
    e = f * this.m_u1.y - g * this.m_u1.x;
    h = m * this.m_u2.y - n * this.m_u2.x;
    this.m_limitMass1 = b.m_invMass + b.m_invI * e * e;
    this.m_limitMass2 = d.m_invMass + d.m_invI * h * h;
    this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
    this.m_limitMass1 = 1 / this.m_limitMass1;
    this.m_limitMass2 = 1 / this.m_limitMass2;
    this.m_pulleyMass = 1 / this.m_pulleyMass;
    a.warmStarting ? (this.m_impulse *= a.dtRatio, this.m_limitImpulse1 *= a.dtRatio, this.m_limitImpulse2 *= a.dtRatio, a = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, e = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, h = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, p = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * a, b.m_linearVelocity.y += b.m_invMass * e, b.m_angularVelocity += b.m_invI * (f * e - g * a), d.m_linearVelocity.x += d.m_invMass * h, d.m_linearVelocity.y += d.m_invMass * p, d.m_angularVelocity += d.m_invI * (m * p - n * h)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.SolveVelocityConstraints = function () {
    var a = this.m_bodyA,
      b = this.m_bodyB;
    var d = a.m_xf.R;
    var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
      f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
      g = d.col1.x * e + d.col2.x * f;
    f = d.col1.y * e + d.col2.y * f;
    e = g;
    d = b.m_xf.R;
    var h = this.m_localAnchor2.x - b.m_sweep.localCenter.x,
      m = this.m_localAnchor2.y - b.m_sweep.localCenter.y;
    g = d.col1.x * h + d.col2.x * m;
    m = d.col1.y * h + d.col2.y * m;
    h = g;
    if (this.m_state == L.Dynamics.Joints.b2Joint.e_atUpperLimit) {
      d = a.m_linearVelocity.x + -a.m_angularVelocity * f;
      g = a.m_linearVelocity.y + a.m_angularVelocity * e;
      var n = b.m_linearVelocity.x + -b.m_angularVelocity * m;
      var p = b.m_linearVelocity.y + b.m_angularVelocity * h;
      d = -(this.m_u1.x * d + this.m_u1.y * g) - this.m_ratio * (this.m_u2.x * n + this.m_u2.y * p);
      p = this.m_pulleyMass * -d;
      d = this.m_impulse;
      this.m_impulse = Math.max(0, this.m_impulse + p);
      p = this.m_impulse - d;
      d = -p * this.m_u1.x;
      g = -p * this.m_u1.y;
      n = -this.m_ratio * p * this.m_u2.x;
      p = -this.m_ratio * p * this.m_u2.y;
      a.m_linearVelocity.x += a.m_invMass * d;
      a.m_linearVelocity.y += a.m_invMass * g;
      a.m_angularVelocity += a.m_invI * (e * g - f * d);
      b.m_linearVelocity.x += b.m_invMass * n;
      b.m_linearVelocity.y += b.m_invMass * p;
      b.m_angularVelocity += b.m_invI * (h * p - m * n);
    }
    this.m_limitState1 == L.Dynamics.Joints.b2Joint.e_atUpperLimit && (d = a.m_linearVelocity.x + -a.m_angularVelocity * f, g = a.m_linearVelocity.y + a.m_angularVelocity * e, d = -(this.m_u1.x * d + this.m_u1.y * g), p = -this.m_limitMass1 * d, d = this.m_limitImpulse1, this.m_limitImpulse1 = Math.max(0, this.m_limitImpulse1 + p), p = this.m_limitImpulse1 - d, d = -p * this.m_u1.x, g = -p * this.m_u1.y, a.m_linearVelocity.x += a.m_invMass * d, a.m_linearVelocity.y += a.m_invMass * g, a.m_angularVelocity += a.m_invI * (e * g - f * d));
    this.m_limitState2 == L.Dynamics.Joints.b2Joint.e_atUpperLimit && (n = b.m_linearVelocity.x + -b.m_angularVelocity * m, p = b.m_linearVelocity.y + b.m_angularVelocity * h, d = -(this.m_u2.x * n + this.m_u2.y * p), p = -this.m_limitMass2 * d, d = this.m_limitImpulse2, this.m_limitImpulse2 = Math.max(0, this.m_limitImpulse2 + p), p = this.m_limitImpulse2 - d, n = -p * this.m_u2.x, p = -p * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * n, b.m_linearVelocity.y += b.m_invMass * p, b.m_angularVelocity += b.m_invI * (h * p - m * n));
  };
  L.Dynamics.Joints.b2PulleyJoint.prototype.SolvePositionConstraints = function () {
    var a = this.m_bodyA,
      b = this.m_bodyB,
      d = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
      e = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
      f = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
      g = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
      h = 0;
    if (this.m_state == L.Dynamics.Joints.b2Joint.e_atUpperLimit) {
      var m = a.m_xf.R;
      var n = this.m_localAnchor1.x - a.m_sweep.localCenter.x;
      var p = this.m_localAnchor1.y - a.m_sweep.localCenter.y;
      var q = m.col1.x * n + m.col2.x * p;
      p = m.col1.y * n + m.col2.y * p;
      n = q;
      m = b.m_xf.R;
      var u = this.m_localAnchor2.x - b.m_sweep.localCenter.x;
      var v = this.m_localAnchor2.y - b.m_sweep.localCenter.y;
      q = m.col1.x * u + m.col2.x * v;
      v = m.col1.y * u + m.col2.y * v;
      u = q;
      m = a.m_sweep.c.x + n;
      q = a.m_sweep.c.y + p;
      var w = b.m_sweep.c.x + u;
      var x = b.m_sweep.c.y + v;
      this.m_u1.Set(m - d, q - e);
      this.m_u2.Set(w - f, x - g);
      m = this.m_u1.Length();
      q = this.m_u2.Length();
      m > L.Common.b2Settings.b2_linearSlop ? this.m_u1.Multiply(1 / m) : this.m_u1.SetZero();
      q > L.Common.b2Settings.b2_linearSlop ? this.m_u2.Multiply(1 / q) : this.m_u2.SetZero();
      m = this.m_constant - m - this.m_ratio * q;
      h = Math.max(h, -m);
      m = L.Common.Math.b2Math.Clamp(m + L.Common.b2Settings.b2_linearSlop, -L.Common.b2Settings.b2_maxLinearCorrection, 0);
      x = -this.m_pulleyMass * m;
      m = -x * this.m_u1.x;
      q = -x * this.m_u1.y;
      w = -this.m_ratio * x * this.m_u2.x;
      x = -this.m_ratio * x * this.m_u2.y;
      a.m_sweep.c.x += a.m_invMass * m;
      a.m_sweep.c.y += a.m_invMass * q;
      a.m_sweep.a += a.m_invI * (n * q - p * m);
      b.m_sweep.c.x += b.m_invMass * w;
      b.m_sweep.c.y += b.m_invMass * x;
      b.m_sweep.a += b.m_invI * (u * x - v * w);
      a.SynchronizeTransform();
      b.SynchronizeTransform();
    }
    this.m_limitState1 == L.Dynamics.Joints.b2Joint.e_atUpperLimit && (m = a.m_xf.R, n = this.m_localAnchor1.x - a.m_sweep.localCenter.x, p = this.m_localAnchor1.y - a.m_sweep.localCenter.y, q = m.col1.x * n + m.col2.x * p, p = m.col1.y * n + m.col2.y * p, n = q, m = a.m_sweep.c.x + n, q = a.m_sweep.c.y + p, this.m_u1.Set(m - d, q - e), m = this.m_u1.Length(), m > L.Common.b2Settings.b2_linearSlop ? (this.m_u1.x *= 1 / m, this.m_u1.y *= 1 / m) : this.m_u1.SetZero(), m = this.m_maxLength1 - m, h = Math.max(h, -m), m = L.Common.Math.b2Math.Clamp(m + L.Common.b2Settings.b2_linearSlop, -L.Common.b2Settings.b2_maxLinearCorrection, 0), x = -this.m_limitMass1 * m, m = -x * this.m_u1.x, q = -x * this.m_u1.y, a.m_sweep.c.x += a.m_invMass * m, a.m_sweep.c.y += a.m_invMass * q, a.m_sweep.a += a.m_invI * (n * q - p * m), a.SynchronizeTransform());
    this.m_limitState2 == L.Dynamics.Joints.b2Joint.e_atUpperLimit && (m = b.m_xf.R, u = this.m_localAnchor2.x - b.m_sweep.localCenter.x, v = this.m_localAnchor2.y - b.m_sweep.localCenter.y, q = m.col1.x * u + m.col2.x * v, v = m.col1.y * u + m.col2.y * v, u = q, w = b.m_sweep.c.x + u, x = b.m_sweep.c.y + v, this.m_u2.Set(w - f, x - g), q = this.m_u2.Length(), q > L.Common.b2Settings.b2_linearSlop ? (this.m_u2.x *= 1 / q, this.m_u2.y *= 1 / q) : this.m_u2.SetZero(), m = this.m_maxLength2 - q, h = Math.max(h, -m), m = L.Common.Math.b2Math.Clamp(m + L.Common.b2Settings.b2_linearSlop, -L.Common.b2Settings.b2_maxLinearCorrection, 0), x = -this.m_limitMass2 * m, w = -x * this.m_u2.x, x = -x * this.m_u2.y, b.m_sweep.c.x += b.m_invMass * w, b.m_sweep.c.y += b.m_invMass * x, b.m_sweep.a += b.m_invI * (u * x - v * w), b.SynchronizeTransform());
    return h < L.Common.b2Settings.b2_linearSlop;
  };
  L.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 1;
  L.Dynamics.b2World = function (a, b) {
    this.m_contactManager = new L.Dynamics.b2ContactManager(this);
    this.m_contactSolver = new L.Dynamics.Contacts.b2ContactSolver();
    this.m_newFixture = this.m_isLocked = !1;
    this.m_debugDraw = this.m_destructionListener = null;
    this.bodyList = new L.Dynamics.b2BodyList();
    this.contactList = new L.Dynamics.Contacts.b2ContactList();
    this.m_jointList = null;
    this.controllerList = new L.Dynamics.Controllers.b2ControllerList();
    this.m_jointCount = 0;
    this.m_continuousPhysics = this.m_warmStarting = !0;
    this.m_allowSleep = b;
    this.m_gravity = a;
    this.m_inv_dt0 = 0;
    this.m_groundBody = this.CreateBody(new L.Dynamics.b2BodyDef());
    this.mainTimeStep = new L.Dynamics.b2TimeStep(0, 0, 0, 0, this.m_warmStarting);
    this.islandTimeStep = new L.Dynamics.b2TimeStep(0, 0, 0, 0, this.m_warmStarting);
    this.island = new L.Dynamics.b2Island(this.m_contactManager.m_contactListener, this.m_contactSolver);
  };
  L.Dynamics.b2World.MAX_TOI = 1 - 100 * Number.MIN_VALUE;
  L.Dynamics.b2World.prototype.SetDestructionListener = function (a) {
    this.m_destructionListener = a;
  };
  L.Dynamics.b2World.prototype.SetContactFilter = function (a) {
    this.m_contactManager.m_contactFilter = a;
  };
  L.Dynamics.b2World.prototype.SetContactListener = function (a) {
    this.m_contactManager.m_contactListener = a;
  };
  L.Dynamics.b2World.prototype.SetDebugDraw = function (a) {
    this.m_debugDraw = a;
  };
  L.Dynamics.b2World.prototype.SetBroadPhase = function (a) {
    var b = this.m_contactManager.m_broadPhase;
    this.m_contactManager.m_broadPhase = a;
    for (var d = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.allBodies); d; d = d.GetNextNode()) for (var e = d.body.GetFixtureList().GetFirstNode(); e; e = e.GetNextNode()) {
      var f = e.fixture;
      f.m_proxy = a.CreateProxy(b.GetFatAABB(f.m_proxy), f);
    }
  };
  L.Dynamics.b2World.prototype.CreateBody = function (a) {
    L.Common.b2Settings.b2Assert(!this.IsLocked());
    a = new L.Dynamics.b2Body(a, this);
    this.bodyList.AddBody(a);
    return a;
  };
  L.Dynamics.b2World.prototype.DestroyBody = function (a) {
    L.Common.b2Settings.b2Assert(!this.IsLocked());
    for (var b = a.m_jointList; b;) {
      var d = b;
      b = b.next;
      this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(d.joint);
      this.DestroyJoint(d.joint);
    }
    for (b = a.GetControllerList().GetFirstNode(); b; b = b.GetNextNode()) b.controller.RemoveBody(a);
    var e = this;
    a.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
      e.m_contactManager.Destroy(a);
    });
    for (b = a.GetFixtureList().GetFirstNode(); b; b = b.GetNextNode()) this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(b.fixture), a.DestroyFixture(b.fixture);
    a.Destroy();
    this.bodyList.RemoveBody(a);
  };
  L.Dynamics.b2World.prototype.CreateJoint = function (a) {
    var b = L.Dynamics.Joints.b2Joint.Create(a);
    b.m_prev = null;
    if (b.m_next = this.m_jointList) this.m_jointList.m_prev = b;
    this.m_jointList = b;
    this.m_jointCount++;
    b.m_edgeA.joint = b;
    b.m_edgeA.other = b.m_bodyB;
    b.m_edgeA.prev = null;
    if (b.m_edgeA.next = b.m_bodyA.m_jointList) b.m_bodyA.m_jointList.prev = b.m_edgeA;
    b.m_bodyA.m_jointList = b.m_edgeA;
    b.m_edgeB.joint = b;
    b.m_edgeB.other = b.m_bodyA;
    b.m_edgeB.prev = null;
    if (b.m_edgeB.next = b.m_bodyB.m_jointList) b.m_bodyB.m_jointList.prev = b.m_edgeB;
    b.m_bodyB.m_jointList = b.m_edgeB;
    var d = a.bodyA,
      e = a.bodyB;
    a.collideConnected || e.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
      a.GetOther(e) == d && a.FlagForFiltering();
    });
    return b;
  };
  L.Dynamics.b2World.prototype.DestroyJoint = function (a) {
    var b = a.m_collideConnected;
    a.m_prev && (a.m_prev.m_next = a.m_next);
    a.m_next && (a.m_next.m_prev = a.m_prev);
    a == this.m_jointList && (this.m_jointList = a.m_next);
    a.m_next = null;
    a.m_prev = null;
    var d = a.m_bodyA,
      e = a.m_bodyB;
    d.SetAwake(!0);
    e.SetAwake(!0);
    a.m_edgeA.prev && (a.m_edgeA.prev.next = a.m_edgeA.next);
    a.m_edgeA.next && (a.m_edgeA.next.prev = a.m_edgeA.prev);
    a.m_edgeA == d.m_jointList && (d.m_jointList = a.m_edgeA.next);
    a.m_edgeA.prev = null;
    a.m_edgeA.next = null;
    a.m_edgeB.prev && (a.m_edgeB.prev.next = a.m_edgeB.next);
    a.m_edgeB.next && (a.m_edgeB.next.prev = a.m_edgeB.prev);
    a.m_edgeB == e.m_jointList && (e.m_jointList = a.m_edgeB.next);
    a.m_edgeB.prev = null;
    a.m_edgeB.next = null;
    this.m_jointCount--;
    b || e.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
      a.GetOther(e) == d && a.FlagForFiltering();
    });
  };
  L.Dynamics.b2World.prototype.GetControllerList = function () {
    return this.controllerList;
  };
  L.Dynamics.b2World.prototype.AddController = function (a) {
    if (null !== a.m_world && a.m_world != this) throw Error("Controller can only be a member of one world");
    this.controllerList.AddController(a);
    a.m_world = this;
    return a;
  };
  L.Dynamics.b2World.prototype.RemoveController = function (a) {
    this.controllerList.RemoveController(a);
    a.m_world = null;
    a.Clear();
  };
  L.Dynamics.b2World.prototype.CreateController = function (a) {
    return this.AddController(a);
  };
  L.Dynamics.b2World.prototype.DestroyController = function (a) {
    this.RemoveController(a);
  };
  L.Dynamics.b2World.prototype.SetWarmStarting = function (a) {
    this.m_warmStarting = a;
  };
  L.Dynamics.b2World.prototype.SetContinuousPhysics = function (a) {
    this.m_continuousPhysics = a;
  };
  L.Dynamics.b2World.prototype.GetBodyCount = function () {
    return this.bodyList.GetBodyCount();
  };
  L.Dynamics.b2World.prototype.GetJointCount = function () {
    return this.m_jointCount;
  };
  L.Dynamics.b2World.prototype.GetContactCount = function () {
    return this.contactList.GetContactCount();
  };
  L.Dynamics.b2World.prototype.SetGravity = function (a) {
    this.m_gravity = a;
  };
  L.Dynamics.b2World.prototype.GetGravity = function () {
    return this.m_gravity;
  };
  L.Dynamics.b2World.prototype.GetGroundBody = function () {
    return this.m_groundBody;
  };
  L.Dynamics.b2World.prototype.Step = function (a, b, d) {
    this.m_newFixture && (this.m_contactManager.FindNewContacts(), this.m_newFixture = !1);
    this.m_isLocked = !0;
    this.mainTimeStep.Reset(a, this.m_inv_dt0 * a, b, d, this.m_warmStarting);
    this.m_contactManager.Collide();
    0 < this.mainTimeStep.dt && (this.Solve(this.mainTimeStep), this.m_continuousPhysics && this.SolveTOI(this.mainTimeStep), this.m_inv_dt0 = this.mainTimeStep.inv_dt);
    this.m_isLocked = !1;
  };
  L.Dynamics.b2World.prototype.ClearForces = function () {
    for (var a = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.dynamicBodies); a; a = a.GetNextNode()) a.body.m_force.SetZero(), a.body.m_torque = 0;
  };
  L.Dynamics.b2World.prototype.DrawDebugData = function () {
    if (null !== this.m_debugDraw) {
      this.m_debugDraw.Clear();
      var a = this.m_debugDraw.GetFlags();
      if (a & L.Dynamics.b2DebugDraw.e_shapeBit) for (var b = L.Dynamics.b2World.s_color_inactive, d = L.Dynamics.b2World.s_color_static, e = L.Dynamics.b2World.s_color_kinematic, f = L.Dynamics.b2World.s_color_dynamic_sleeping, g = L.Dynamics.b2World.s_color_dynamic_awake, h = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.allBodies); h; h = h.GetNextNode()) for (var m = h.body, n = m.GetFixtureList().GetFirstNode(); n; n = n.GetNextNode()) {
        var p = n.fixture;
        p = p.GetShape();
        m.IsActive() ? m.GetType() == L.Dynamics.b2BodyDef.b2_staticBody ? this.DrawShape(p, m.m_xf, d) : m.GetType() == L.Dynamics.b2BodyDef.b2_kinematicBody ? this.DrawShape(p, m.m_xf, e) : m.IsAwake() ? this.DrawShape(p, m.m_xf, g) : this.DrawShape(p, m.m_xf, f) : this.DrawShape(p, m.m_xf, b);
      }
      if (a & L.Dynamics.b2DebugDraw.e_jointBit) for (h = this.m_jointList; h; h = h.m_next) this.DrawJoint(h);
      if (a & L.Dynamics.b2DebugDraw.e_controllerBit) for (h = this.controllerList.GetFirstNode(); h; h = h.GetNextNode()) h.controller.Draw(this.m_debugDraw);
      if (a & L.Dynamics.b2DebugDraw.e_pairBit) {
        var q = L.Dynamics.b2World.s_pairColor,
          u = this;
        this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
          var b = a.GetFixtureA();
          a = a.GetFixtureB();
          b = b.GetAABB().GetCenter();
          a = a.GetAABB().GetCenter();
          u.m_debugDraw.DrawSegment(b, a, q);
          L.Common.Math.b2Vec2.Free(b);
          L.Common.Math.b2Vec2.Free(a);
        });
      }
      if (a & L.Dynamics.b2DebugDraw.e_aabbBit) for (b = L.Dynamics.b2World.s_aabbColor, h = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.activeBodies); h; h = h.GetNextNode()) for (m = h.body, n = m.GetFixtureList().GetFirstNode(); n; n = n.GetNextNode()) p = n.fixture, m = this.m_contactManager.m_broadPhase.GetFatAABB(p.m_proxy), m = [L.Common.Math.b2Vec2.Get(m.lowerBound.x, m.lowerBound.y), L.Common.Math.b2Vec2.Get(m.upperBound.x, m.lowerBound.y), L.Common.Math.b2Vec2.Get(m.upperBound.x, m.upperBound.y), L.Common.Math.b2Vec2.Get(m.lowerBound.x, m.upperBound.y)], this.m_debugDraw.DrawPolygon(m, 4, b), L.Common.Math.b2Vec2.Free(m[0]), L.Common.Math.b2Vec2.Free(m[1]), L.Common.Math.b2Vec2.Free(m[2]), L.Common.Math.b2Vec2.Free(m[3]);
      if (a & L.Dynamics.b2DebugDraw.e_centerOfMassBit) for (h = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.allBodies); h; h = h.GetNextNode()) m = h.body, L.Dynamics.b2World.s_xf.R = m.m_xf.R, L.Dynamics.b2World.s_xf.position = m.GetWorldCenter(), this.m_debugDraw.DrawTransform(L.Dynamics.b2World.s_xf);
    }
  };
  L.Dynamics.b2World.prototype.QueryAABB = function (a, b) {
    this.m_contactManager.m_broadPhase.Query(a, b);
  };
  L.Dynamics.b2World.prototype.QueryPoint = function (a, b) {
    var d = L.Collision.b2AABB.Get();
    d.lowerBound.Set(b.x - L.Common.b2Settings.b2_linearSlop, b.y - L.Common.b2Settings.b2_linearSlop);
    d.upperBound.Set(b.x + L.Common.b2Settings.b2_linearSlop, b.y + L.Common.b2Settings.b2_linearSlop);
    this.m_contactManager.m_broadPhase.Query(function (d) {
      return d.TestPoint(b) ? a(d) : !0;
    }, d);
    L.Collision.b2AABB.Free(d);
  };
  L.Dynamics.b2World.prototype.RayCast = function (a, b, d) {
    var e = this.m_contactManager.m_broadPhase,
      f = new L.Collision.b2RayCastOutput(),
      g = new L.Collision.b2RayCastInput(b, d, 1);
    e.RayCast(function (e, g) {
      return g.RayCast(f, e) ? (e = 1 - f.fraction, e = L.Common.Math.b2Vec2.Get(e * b.x + f.fraction * d.x, e * b.y + f.fraction * d.y), g = a(g, e, f.normal, f.fraction), L.Common.Math.b2Vec2.Free(e), g) : e.maxFraction;
    }, g);
  };
  L.Dynamics.b2World.prototype.RayCastOne = function (a, b) {
    var d = null;
    this.RayCast(function (a, b, g, h) {
      d = a;
      return h;
    }, a, b);
    return d;
  };
  L.Dynamics.b2World.prototype.RayCastAll = function (a, b) {
    var d = [];
    this.RayCast(function (a) {
      d.push(a);
      return 1;
    }, a, b);
    return d;
  };
  L.Dynamics.b2World.prototype.GetBodyList = function () {
    return this.bodyList;
  };
  L.Dynamics.b2World.prototype.GetJointList = function () {
    return this.m_jointList;
  };
  L.Dynamics.b2World.prototype.GetContactList = function () {
    return this.contactList;
  };
  L.Dynamics.b2World.prototype.IsLocked = function () {
    return this.m_isLocked;
  };
  L.Dynamics.b2World.prototype.Solve = function (a) {
    for (var b = this.controllerList.GetFirstNode(); b; b = b.GetNextNode()) b.controller.Step(a);
    var d = this.island;
    d.Reset(this.m_contactManager.m_contactListener, this.m_contactSolver);
    for (b = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.allBodies); b; b = b.GetNextNode()) b.body.m_islandFlag = !1;
    this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
      a.m_islandFlag = !1;
    });
    for (b = this.m_jointList; b; b = b.m_next) b.m_islandFlag = !1;
    for (b = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.nonStaticActiveAwakeBodies); b; b = b.GetNextNode()) {
      var e = b.body;
      if (!e.m_islandFlag) {
        d.Clear();
        var f = [];
        f.push(e);
        for (e.m_islandFlag = !0; 0 < f.length;) {
          var g = f.pop();
          d.AddBody(g);
          g.IsAwake() || g.SetAwake(!0);
          if (g.GetType() != L.Dynamics.b2BodyDef.b2_staticBody) for (g.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledTouchingContacts, function (a) {
            a.m_islandFlag || (d.AddContact(a), a.m_islandFlag = !0, a = a.GetOther(g), a.m_islandFlag || (f.push(a), a.m_islandFlag = !0));
          }), e = g.m_jointList; e; e = e.next) !e.joint.m_islandFlag && e.other.IsActive() && (d.AddJoint(e.joint), e.joint.m_islandFlag = !0, e.other.m_islandFlag || (f.push(e.other), e.other.m_islandFlag = !0));
        }
        d.Solve(a, this.m_gravity, this.m_allowSleep);
      }
    }
    for (b = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.nonStaticActiveAwakeBodies); b; b = b.GetNextNode()) b.body.SynchronizeFixtures();
    this.m_contactManager.FindNewContacts();
  };
  L.Dynamics.b2World.prototype.SolveTOI = function (a) {
    var b = this.island;
    b.Reset(this.m_contactManager.m_contactListener, this.m_contactSolver);
    for (var d = this.bodyList.GetFirstNode(L.Dynamics.b2BodyList.TYPES.allBodies); d; d = d.GetNextNode()) {
      var e = d.body;
      e.m_islandFlag = !1;
      e.m_sweep.t0 = 0;
    }
    this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
      a.m_islandFlag = !1;
      a.m_toi = null;
    });
    for (d = this.m_jointList; d; d = d.m_next) d.m_islandFlag = !1;
    for (;;) {
      var f = this._SolveTOI2(a);
      d = f.minContact;
      var g = f.minTOI;
      if (null === d || L.Dynamics.b2World.MAX_TOI < g) break;
      var h = d.m_fixtureA.GetBody();
      f = d.m_fixtureB.GetBody();
      L.Dynamics.b2World.s_backupA.Set(h.m_sweep);
      L.Dynamics.b2World.s_backupB.Set(f.m_sweep);
      h.Advance(g);
      f.Advance(g);
      d.Update(this.m_contactManager.m_contactListener);
      d.m_toi = null;
      if (d.IsSensor() || !d.IsEnabled()) h.m_sweep.Set(L.Dynamics.b2World.s_backupA), f.m_sweep.Set(L.Dynamics.b2World.s_backupB), h.SynchronizeTransform(), f.SynchronizeTransform();else if (d.IsTouching()) {
        d = h;
        d.GetType() != L.Dynamics.b2BodyDef.b2_dynamicBody && (d = f);
        b.Clear();
        var m = new c.structs.Queue();
        m.enqueue(d);
        for (d.m_islandFlag = !0; 0 < m.size;) if (e = m.dequeue(), b.AddBody(e), e.IsAwake() || e.SetAwake(!0), e.GetType() == L.Dynamics.b2BodyDef.b2_dynamicBody) for (e.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledTouchingContacts, function (a) {
          if (b.m_contacts.length == L.Common.b2Settings.b2_maxTOIContactsPerIsland) return !0;
          a.m_islandFlag || (b.AddContact(a), a.m_islandFlag = !0, a = a.GetOther(e), a.m_islandFlag || (a.GetType() != L.Dynamics.b2BodyDef.b2_staticBody && (a.Advance(g), a.SetAwake(!0), m.enqueue(a)), a.m_islandFlag = !0));
        }), d = e.m_jointList; d; d = d.next) b.m_jointCount != L.Common.b2Settings.b2_maxTOIJointsPerIsland && !d.joint.m_islandFlag && d.other.IsActive() && (b.AddJoint(d.joint), d.joint.m_islandFlag = !0, d.other.m_islandFlag || (d.other.GetType() != L.Dynamics.b2BodyDef.b2_staticBody && (d.other.Advance(g), d.other.SetAwake(!0), m.enqueue(d.other)), d.other.m_islandFlag = !0));
        this.islandTimeStep.Reset((1 - g) * a.dt, 0, a.velocityIterations, a.positionIterations, !1);
        b.SolveTOI(this.islandTimeStep);
        for (d = 0; d < b.m_bodies.length; d++) b.m_bodies[d].m_islandFlag = !1, b.m_bodies[d].IsAwake() && b.m_bodies[d].GetType() == L.Dynamics.b2BodyDef.b2_dynamicBody && (b.m_bodies[d].SynchronizeFixtures(), b.m_bodies[d].contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.allContacts, function (a) {
          a.m_toi = null;
        }));
        for (d = 0; d < b.m_contactCount; d++) b.m_contacts[d].m_islandFlag = !1, b.m_contacts[d].m_toi = null;
        for (d = 0; d < b.m_jointCount; d++) b.m_joints[d].m_islandFlag = !1;
        this.m_contactManager.FindNewContacts();
      }
    }
  };
  L.Dynamics.b2World.prototype._SolveTOI2 = function (a) {
    var b = null,
      d = 1,
      e = this;
    this.contactList.ForEachContact(L.Dynamics.Contacts.b2ContactList.TYPES.nonSensorEnabledContinuousContacts, function (f) {
      if (!e._SolveTOI2SkipContact(a, f)) {
        if (null != f.m_toi) var g = f.m_toi;else {
          if (f.IsTouching()) g = 1;else {
            g = f.m_fixtureA.GetBody();
            var h = f.m_fixtureB.GetBody(),
              m = g.m_sweep.t0;
            g.m_sweep.t0 < h.m_sweep.t0 ? (m = h.m_sweep.t0, g.m_sweep.Advance(m)) : h.m_sweep.t0 < g.m_sweep.t0 && (m = g.m_sweep.t0, h.m_sweep.Advance(m));
            g = f.ComputeTOI(g.m_sweep, h.m_sweep);
            L.Common.b2Settings.b2Assert(0 <= g && 1 >= g);
            0 < g && 1 > g && (g = (1 - g) * m + g);
          }
          f.m_toi = g;
        }
        Number.MIN_VALUE < g && g < d && (b = f, d = g);
      }
    });
    return {
      minContact: b,
      minTOI: d
    };
  };
  L.Dynamics.b2World.prototype._SolveTOI2SkipContact = function (a, b) {
    a = b.m_fixtureA.GetBody();
    b = b.m_fixtureB.GetBody();
    return a.GetType() == L.Dynamics.b2BodyDef.b2_dynamicBody && a.IsAwake() || b.GetType() == L.Dynamics.b2BodyDef.b2_dynamicBody && b.IsAwake() ? !1 : !0;
  };
  L.Dynamics.b2World.prototype.DrawJoint = function (a) {
    if (a instanceof L.Dynamics.Joints.b2DistanceJoint || a instanceof L.Dynamics.Joints.b2MouseJoint) {
      var b = a.GetAnchorA(),
        d = a.GetAnchorB();
      this.m_debugDraw.DrawSegment(b, d, L.Dynamics.b2World.s_jointColor);
      L.Common.Math.b2Vec2.Free(b);
      L.Common.Math.b2Vec2.Free(d);
    } else if (a instanceof L.Dynamics.Joints.b2PulleyJoint) {
      b = a.GetAnchorA();
      d = a.GetAnchorB();
      var e = a.GetGroundAnchorA();
      a = a.GetGroundAnchorB();
      this.m_debugDraw.DrawSegment(e, b, L.Dynamics.b2World.s_jointColor);
      this.m_debugDraw.DrawSegment(a, d, L.Dynamics.b2World.s_jointColor);
      this.m_debugDraw.DrawSegment(e, a, L.Dynamics.b2World.s_jointColor);
      L.Common.Math.b2Vec2.Free(b);
      L.Common.Math.b2Vec2.Free(d);
      L.Common.Math.b2Vec2.Free(e);
      L.Common.Math.b2Vec2.Free(a);
    } else b = a.GetAnchorA(), d = a.GetAnchorB(), a.GetBodyA() != this.m_groundBody && this.m_debugDraw.DrawSegment(a.GetBodyA().m_xf.position, b, L.Dynamics.b2World.s_jointColor), this.m_debugDraw.DrawSegment(b, d, L.Dynamics.b2World.s_jointColor), a.GetBodyB() != this.m_groundBody && this.m_debugDraw.DrawSegment(a.GetBodyB().m_xf.position, d, L.Dynamics.b2World.s_jointColor), L.Common.Math.b2Vec2.Free(b), L.Common.Math.b2Vec2.Free(d);
  };
  L.Dynamics.b2World.prototype.DrawShape = function (a, b, d) {
    if (a instanceof L.Collision.Shapes.b2CircleShape) {
      var e = L.Common.Math.b2Math.MulX(b, a.m_p);
      this.m_debugDraw.DrawSolidCircle(e, a.m_radius, b.R.col1, d);
      L.Common.Math.b2Vec2.Free(e);
    } else if (a instanceof L.Collision.Shapes.b2PolygonShape) {
      e = a.GetVertexCount();
      var f = a.GetVertices(),
        g = [];
      for (a = 0; a < e; a++) g[a] = L.Common.Math.b2Math.MulX(b, f[a]);
      this.m_debugDraw.DrawSolidPolygon(g, e, d);
      for (a = 0; a < e; a++) L.Common.Math.b2Vec2.Free(g[a]);
    } else a instanceof L.Collision.Shapes.b2EdgeShape && (e = L.Common.Math.b2Math.MulX(b, a.GetVertex1()), b = L.Common.Math.b2Math.MulX(b, a.GetVertex2()), this.m_debugDraw.DrawSegment(e, b, d), L.Common.Math.b2Vec2.Free(e), L.Common.Math.b2Vec2.Free(b));
  };
  L.Dynamics.b2World.s_xf = new L.Common.Math.b2Transform();
  L.Dynamics.b2World.s_backupA = new L.Common.Math.b2Sweep();
  L.Dynamics.b2World.s_backupB = new L.Common.Math.b2Sweep();
  L.Dynamics.b2World.s_jointColor = new L.Common.b2Color(.5, .8, .8);
  L.Dynamics.b2World.s_color_inactive = new L.Common.b2Color(.5, .5, .3);
  L.Dynamics.b2World.s_color_static = new L.Common.b2Color(.5, .9, .5);
  L.Dynamics.b2World.s_color_kinematic = new L.Common.b2Color(.5, .5, .9);
  L.Dynamics.b2World.s_color_dynamic_sleeping = new L.Common.b2Color(.6, .6, .6);
  L.Dynamics.b2World.s_color_dynamic_awake = new L.Common.b2Color(.9, .7, .7);
  L.Dynamics.b2World.s_pairColor = new L.Common.b2Color(.3, .9, .9);
  L.Dynamics.b2World.s_aabbColor = new L.Common.b2Color(0, 0, .8);
  L.Dynamics.Joints.b2JointDef = function () {
    this.type = L.Dynamics.Joints.b2Joint.e_unknownJoint;
    this.bodyB = this.bodyA = null;
    this.collideConnected = !1;
  };
  L.Dynamics.Joints.b2MouseJointDef = function () {
    L.Dynamics.Joints.b2JointDef.call(this);
    this.target = L.Common.Math.b2Vec2.Get(0, 0);
    this.type = L.Dynamics.Joints.b2Joint.e_mouseJoint;
    this.maxForce = 0;
    this.frequencyHz = 5;
    this.dampingRatio = .7;
  };
  c.inherits(L.Dynamics.Joints.b2MouseJointDef, L.Dynamics.Joints.b2JointDef);
  L.Dynamics.Joints.b2MouseJointDef.prototype.Create = function () {
    return new L.Dynamics.Joints.b2MouseJoint(this);
  };
  var M = {};
  M.AABB = L.Collision.b2AABB;
  M.Vec2 = L.Common.Math.b2Vec2;
  M.BodyDef = L.Dynamics.b2BodyDef;
  M.Body = L.Dynamics.b2Body;
  M.FixtureDef = L.Dynamics.b2FixtureDef;
  M.Fixture = L.Dynamics.b2Fixture;
  M.World = L.Dynamics.b2World;
  M.PolygonShape = L.Collision.Shapes.b2PolygonShape;
  M.CircleShape = L.Collision.Shapes.b2CircleShape;
  M.DebugDraw = L.Dynamics.b2DebugDraw;
  M.MouseJointDef = L.Dynamics.Joints.b2MouseJointDef;
  M.ContactListener = L.Dynamics.b2ContactListener;
  k.Unit = class {
    static fromWorld(a) {
      return a * k.Constants.PHYSICS_SCALE;
    }
    static toWorld(a) {
      return a / k.Constants.PHYSICS_SCALE;
    }
    static relativeWorld(a, b) {
      a = k.Unit.toWorld(k.Constants.CANVAS_WIDTH * a);
      b = k.Unit.toWorld(k.Constants.CANVAS_HEIGHT * b);
      return {
        x: a,
        y: b
      };
    }
  };
  k.world = {};
  k.world.LevelObject = class {
    constructor(a, b, d) {
      this.level_ = a;
      this.world_ = b;
      this.config_ = d;
      this.hasRendered_ = !1;
      this.collisionFixture = null;
      this.initialWorldPos_ = k.Unit.relativeWorld(this.config_.relX, this.config_.relY);
      this.shadowEl_ = this.createShadowDOMNode_();
      this.$shadowEl_ = $(this.shadowEl_);
      this.el_ = this.createTextureDOMNode_();
      this.$el_ = $(this.el_);
      window.setTimeout(() => {
        this.$el_.removeClass("object--hidden");
        this.$shadowEl_.removeClass("object--hidden");
      }, 50);
      this.body_ = null;
    }
    setCollisionFixture(a) {
      this.collisionFixture = a;
    }
    registerForCollisions(a) {
      this.body_.collisionCallback = a;
    }
    unregisterForCollisions() {
      this.body_.collisionCallback && delete this.body_.collisionCallback;
    }
    createTextureDOMNode_() {
      const a = document.createElement("div");
      a.className = "object object--hidden " + this.config_.style.className;
      a.innerHTML = this.config_.style.innerHTML || "";
      this.setElementStyle_(a);
      $(this.level_.elem).append(a);
      return a;
    }
    createShadowDOMNode_() {
      if (this.config_.style.dynamicShadow) {
        const a = document.createElement("div");
        a.className = "object object--shadow object--hidden " + this.config_.style.className;
        this.setElementStyle_(a);
        $(this.level_.elem).append(a);
        return a;
      }
    }
    setElementStyle_(a) {
      let b = this.config_.style.width,
        d = this.config_.style.height;
      var e = this.config_.style.padding;
      b = e ? b + 2 * e : b;
      d = e ? d + 2 * e : d;
      e = -.5 * d;
      "undefined" !== typeof this.config_.style.marginTop && (e = this.config_.style.marginTop);
      let f = -.5 * b;
      "undefined" !== typeof this.config_.style.marginLeft && (f = this.config_.style.marginLeft);
      a.style.width = b + "px";
      a.style.height = d + "px";
      a.style.marginTop = e + "px";
      a.style.marginLeft = f + "px";
    }
    transformEl_(a, b, d, e) {
      a.style.transform = "translate3d(" + b + "px, " + d + "px, 0) rotate(" + e + "rad)";
    }
    update() {}
    pause() {}
    resume() {}
    buildBody_() {}
    position() {
      let a;
      if (this.body_) {
        var b = this.body_.GetPosition();
        a = k.Unit.fromWorld(b.x);
        b = k.Unit.fromWorld(b.y);
      }
      return {
        x: a,
        y: b
      };
    }
    draw() {
      if (this.body_ && (!this.hasRendered_ || this.body_.IsAwake())) {
        var a = this.body_.GetPosition(),
          b = this.body_.GetAngle();
        const d = k.Unit.fromWorld(a.x);
        a = k.Unit.fromWorld(a.y);
        b = b.toFixed(6);
        this.transformEl_(this.el_, d, a, b);
        this.shadowEl_ && this.transformEl_(this.shadowEl_, d + k.Constants.SHADOW_OFFSET_PX, a + k.Constants.SHADOW_OFFSET_PX, b);
        this.hasRendered_ = !0;
      }
    }
    setRestitution_(a) {
      if (this.body_) {
        let b = this.body_.GetFixtureList().GetFirstNode();
        for (; b;) "undefined" !== typeof a ? (b.fixture.originalRestitution_ = b.fixture.GetRestitution(), b.fixture.SetRestitution(a)) : "undefined" !== typeof b.fixture.originalRestitution_ && b.fixture.SetRestitution(b.fixture.originalRestitution_), b = b.GetNextNode();
      }
    }
    resetRestitution_() {
      if (this.body_) {
        let a = this.body_.GetFixtureList().GetFirstNode();
        for (; a;) "undefined" !== typeof a.fixture.originalRestitution_ && a.fixture.SetRestitution(a.fixture.originalRestitution_), a = a.GetNextNode();
      }
    }
    onUserInteractionStart() {
      this.setRestitution_(0);
      this.level_.onInteraction();
    }
    onUserInteractionEnd() {
      this.resetRestitution_();
    }
    destroy() {
      this.world_ && this.body_ && this.world_.DestroyBody(this.body_);
      this.unregisterForCollisions();
      $(this.el_).remove();
      $(this.shadowEl_).remove();
    }
  };
  k.world.GravityObject = class extends k.world.LevelObject {
    update() {
      this.body_.ApplyForce(new M.Vec2(0, k.Constants.PHYSICS_GRAVITY), this.body_.GetPosition());
    }
  };
  k.world.SnowGlobe = class extends k.world.GravityObject {
    constructor(...a) {
      super(...a);
      this.body_ = this.buildBody_();
    }
    buildBody_() {
      var a = this.config_.style.width / 2;
      const b = .4 * this.config_.style.width,
        d = this.config_.style.height - this.config_.style.width,
        e = new M.BodyDef();
      e.type = M.BodyDef.b2_dynamicBody;
      e.position.Set(this.initialWorldPos_.x, this.initialWorldPos_.y);
      const f = new M.FixtureDef();
      f.density = this.config_.material.globeDensity;
      f.friction = this.config_.material.friction;
      f.restitution = this.config_.material.restitution;
      f.shape = new M.CircleShape(k.Unit.toWorld(a));
      f.shape.SetLocalPosition(new M.Vec2(0, k.Unit.toWorld(-d / 2)));
      const g = new M.FixtureDef();
      g.density = this.config_.material.plateDensity;
      g.friction = this.config_.material.friction;
      g.restitution = this.config_.material.restitution;
      g.shape = new M.PolygonShape();
      g.shape.SetAsOrientedBox(k.Unit.toWorld(b), k.Unit.toWorld(d), new M.Vec2(0, k.Unit.toWorld(a - d / 2)), 0);
      a = this.world_.CreateBody(e);
      a.CreateFixture(f);
      a.CreateFixture(g);
      return a;
    }
  };
  k.InputEvent = {};
  (function () {
    let a = "mousedown",
      b = "mousemove",
      d = "mouseup mouseout",
      e = "mouseup";
    window.PointerEvent ? (a = "pointerdown", b = "pointermove", d = "pointerup pointerout", e = "pointerup") : k.shared.utils.touchEnabled && (a += " touchstart", b += " touchmove", d += " touchend touchleave touchcancel", e += " touchend");
    k.InputEvent = {
      CANCEL: d,
      START: a,
      MOVE: b,
      END: e,
      normalize(a) {
        a = a.originalEvent ? a.originalEvent : a;
        return a = a.touches ? a.touches[0] : a;
      }
    };
  })();
  k.world.UserObject = class extends k.world.LevelObject {
    constructor(...a) {
      super(...a);
      this.$document = $(document);
      this.$rotateHandle = this.$el_.find(".js-rotate-handle");
      this.isInteractive_ = !1;
      this.bodyStartAngle_ = this.ground_ = null;
      this.wasRotated = this.wasDragged = !1;
      this.moveAngle_ = this.startAngle_ = this.mouseJoint_ = null;
      this.onDragStart_ = this.onDragStart_.bind(this);
      this.onDragMove_ = this.onDragMove_.bind(this);
      this.onDragEnd_ = this.onDragEnd_.bind(this);
      this.onRotateHandleStart_ = this.onRotateHandleStart_.bind(this);
      this.onRotateHandleMove_ = this.onRotateHandleMove_.bind(this);
      this.onRotateHandleEnd_ = this.onRotateHandleEnd_.bind(this);
      this.addEventListeners_();
      this.buildReferenceBody_();
    }
    onTapEnd() {}
    onDragEnd() {}
    onRotateEnd() {}
    buildBody_() {}
    buildReferenceBody_() {
      const a = new M.BodyDef();
      a.type = M.BodyDef.b2_staticBody;
      a.position.Set(0, 0);
      this.ground_ = this.world_.CreateBody(a);
    }
    isBoundingBoxOverlappingOtherObject() {
      let a = !1,
        b = null,
        d = this.body_.GetFixtureList().GetFirstNode();
      for (; d;) b = b ? M.AABB.Combine(b, d.fixture.GetAABB()) : d.fixture.GetAABB(), d = d.GetNextNode();
      this.world_.QueryAABB(b => {
        let d = this.body_.GetFixtureList().GetFirstNode();
        for (; d;) {
          if (b === d.fixture) return !0;
          d = d.GetNextNode();
        }
        a = !0;
        return !1;
      }, b);
      return a;
    }
    getMouseWorldVector(a, b) {
      const d = this.level_.getViewport(),
        e = d.scale;
      b = (b - (d.sceneOffset.top + (d.viewportHeight - k.Constants.CANVAS_HEIGHT * e) / 2)) / e;
      return new M.Vec2(k.Unit.toWorld((a - (d.sceneOffset.left + (d.viewportWidth - k.Constants.CANVAS_WIDTH * e) / 2)) / e), k.Unit.toWorld(b));
    }
    getTouchRadianAngle_(a) {
      a = a.originalEvent ? a.originalEvent : a;
      return a.touches && 1 < a.touches.length ? Math.atan2(a.touches[1].clientY - a.touches[0].clientY, a.touches[1].clientX - a.touches[0].clientX) : null;
    }
    getHandleRadianAngle_(a) {
      a = k.InputEvent.normalize(a);
      a = this.getMouseWorldVector(a.clientX, a.clientY);
      const b = this.body_.GetPosition();
      return Math.atan2(b.y - a.y, b.x - a.x);
    }
    update() {
      if (this.isInteractive_) {
        var a = this.bodyStartAngle_ - (this.startAngle_ - this.moveAngle_),
          b = this.body_.GetAngle() + this.body_.GetAngularVelocity() / 60;
        a -= b;
        for (b = Math.PI / 180; a < -180 * b;) a += 360 * b;
        for (; a > 180 * b;) a -= 360 * b;
        a *= 60;
        a = this.body_.GetInertia() * a / (1 / 60);
        this.body_.ApplyTorque(a);
        this.body_.SetLinearVelocity(new M.Vec2(0, 0));
      }
    }
    setRotation_() {
      null === this.startAngle_ && (this.startAngle_ = this.moveAngle_, this.wasRotated = !0);
    }
    createMouseJoint_(a) {
      var b = this.body_.GetPosition().x;
      const d = this.body_.GetPosition().y;
      this.body_.SetPosition(new M.Vec2(0, 0));
      this.body_.SetPosition(new M.Vec2(b, d));
      this.body_.SetFixedRotation(!1);
      b = new M.MouseJointDef();
      b.bodyA = this.ground_;
      b.bodyB = this.body_;
      b.target = this.getMouseWorldVector(a.clientX || 0, a.clientY || 0);
      b.collideConnected = !1;
      b.maxForce = 1E4 * this.body_.GetMass();
      b.dampingRatio = .5;
      b.frequencyHz = 5;
      this.mouseJoint_ = this.world_.CreateJoint(b);
    }
    enterInteractiveMode_() {
      this.isInteractive_ = !0;
      this.moveAngle_ = this.startAngle_ = null;
      this.bodyStartAngle_ = this.body_.GetAngle();
      this.level_.onUserInteractionStart();
      this.body_.SetType(M.BodyDef.b2_dynamicBody);
    }
    exitInteractiveMode_() {
      this.body_.SetType(M.BodyDef.b2_staticBody);
      this.level_.onUserInteractionEnd();
      this.isInteractive_ = !1;
      if (this.wasDragged) this.onDragEnd();
      if (this.wasRotated) this.onRotateEnd();
      if (!this.wasDragged && !this.wasRotated) this.onTapEnd();
      this.wasRotated = this.wasDragged = !1;
    }
    onRotateHandleStart_(a) {
      a.stopPropagation();
      k.InputEvent.normalize(a);
      this.body_.SetType(M.BodyDef.b2_dynamicBody);
      this.enterInteractiveMode_();
      this.$document.on(k.InputEvent.MOVE, this.onRotateHandleMove_);
      this.$document.on(k.InputEvent.END, this.onRotateHandleEnd_);
    }
    onRotateHandleMove_(a) {
      a.preventDefault();
      this.moveAngle_ = this.getHandleRadianAngle_(a);
      null !== this.moveAngle_ && this.setRotation_();
    }
    onRotateHandleEnd_() {
      this.$document.off(k.InputEvent.MOVE, this.onRotateHandleMove_);
      this.$document.off(k.InputEvent.END, this.onRotateHandleEnd_);
      this.exitInteractiveMode_();
    }
    onDragStart_(a) {
      a = k.InputEvent.normalize(a);
      this.enterInteractiveMode_();
      this.mouseJoint_ || (this.$document.on(k.InputEvent.MOVE, this.onDragMove_), this.$document.on(k.InputEvent.END, this.onDragEnd_), this.createMouseJoint_(a));
    }
    onDragMove_(a) {
      a.preventDefault();
      this.moveAngle_ = this.getTouchRadianAngle_(a);
      a = k.InputEvent.normalize(a);
      null !== this.moveAngle_ ? this.setRotation_() : this.mouseJoint_ && (this.wasDragged = !0, this.mouseJoint_.SetTarget(this.getMouseWorldVector(a.clientX, a.clientY)));
    }
    onDragEnd_() {
      this.$document.off(k.InputEvent.MOVE, this.onDragMove_);
      this.$document.off(k.InputEvent.END, this.onDragEnd_);
      this.body_.SetFixedRotation(!1);
      this.exitInteractiveMode_();
      this.mouseJoint_ && (this.world_.DestroyJoint(this.mouseJoint_), this.mouseJoint_ = null);
    }
    onUserInteractionStart() {
      super.onUserInteractionStart();
      this.isInteractive_ || this.removeEventListeners_();
    }
    onUserInteractionEnd() {
      super.onUserInteractionEnd();
      this.isInteractive_ || this.addEventListeners_();
    }
    addEventListeners_() {
      this.$el_.on(k.InputEvent.START, this.onDragStart_);
      this.$rotateHandle.on(k.InputEvent.START, this.onRotateHandleStart_);
    }
    removeEventListeners_() {
      this.$el_.off(k.InputEvent.START, this.onDragStart_);
      this.$document.off(k.InputEvent.MOVE, this.onDragMove_);
      this.$document.off(k.InputEvent.END, this.onDragEnd_);
      this.$rotateHandle.off(k.InputEvent.START, this.onRotateHandleStart_);
      this.$document.off(k.InputEvent.MOVE, this.onRotateHandleMove_);
      this.$document.off(k.InputEvent.END, this.onRotateHandleEnd_);
    }
    destroy() {
      this.removeEventListeners_();
      super.destroy();
    }
  };
  k.world.ConveyorBelt = class extends k.world.UserObject {
    constructor(...a) {
      super(...a);
      this.currentDirection_ = 1;
      this.path = this.$el_.find(".js-belt-path")[0];
      this.pathShadow = this.$el_.find(".js-belt-shadow-path")[0];
      this.offset = 0;
      this.pathLength = this.path.getTotalLength() || -813;
      this.rAFID = null;
      this.body_ = this.buildBody_();
      this.BELT_SPEED = 2;
      this.isPaused = !1;
      this.animateBelt_ = this.animateBelt_.bind(this);
    }
    updateBeltDirection_(a) {
      this.body_.m_linearVelocity = a;
    }
    getBeltDirectionVector_(a = this.currentDirection_) {
      return new M.Vec2(k.Constants.CONVEYOR_BELT_SPEED * a, 0);
    }
    toggleBeltDirection_() {
      this.currentDirection_ *= -1;
      this.$el_.toggleClass("js-animation-reverse", -1 === this.currentDirection_);
      this.updateBeltDirection_(this.getBeltDirectionVector_());
      window.santaApp.fire("sound-trigger", "pb_conveyorbelt_change_direction");
    }
    pause() {
      this.isPaused = !0;
      this.pauseBelt_();
      window.santaApp.fire("sound-trigger", "pb_conveyorbelt_stop");
    }
    resume() {
      this.isPaused = !1;
      this.resumeBelt_();
      window.santaApp.fire("sound-trigger", "pb_conveyorbelt_start");
    }
    play() {
      this.resume();
    }
    pauseBelt_() {
      this.$el_.addClass("js-animation-paused");
      cancelAnimationFrame(this.rAFID);
      this.updateBeltDirection_(this.getBeltDirectionVector_(0));
    }
    resumeBelt_() {
      this.$el_.removeClass("js-animation-paused");
      cancelAnimationFrame(this.rAFID);
      this.animateBelt_();
      this.updateBeltDirection_(this.getBeltDirectionVector_());
    }
    animateBelt_() {
      this.isPaused || (this.rAFID = requestAnimationFrame(this.animateBelt_), 0 > this.offset && (this.offset = this.pathLength), this.path.style.strokeDashoffset = this.offset, this.pathShadow.style.strokeDashoffset = this.offset, this.offset -= this.BELT_SPEED * this.currentDirection_);
    }
    getPlateFixtureDef_() {
      const a = new M.FixtureDef(),
        b = this.config_.style.width,
        d = this.config_.style.height;
      a.density = this.config_.material.density;
      a.friction = this.config_.material.friction;
      a.restitution = this.config_.material.restitution;
      a.shape = new M.PolygonShape();
      a.shape.SetAsOrientedBox(k.Unit.toWorld(b / 2 - d / 2), k.Unit.toWorld(d / 2), new M.Vec2(0, 0), 0);
      return a;
    }
    getCornerFixtureDef_(a) {
      const b = new M.FixtureDef();
      b.density = this.config_.material.density;
      b.friction = this.config_.material.friction;
      b.restitution = this.config_.material.restitution;
      b.shape = new M.CircleShape(k.Unit.toWorld(this.config_.style.height / 2));
      b.shape.SetLocalPosition(new M.Vec2(k.Unit.toWorld(a), 0));
      return b;
    }
    buildBody_() {
      var a = new M.BodyDef(),
        b = this.config_.style.width;
      const d = this.config_.style.height;
      a.type = M.BodyDef.b2_staticBody;
      var e = this.getMouseWorldVector(this.config_.mouseX, this.config_.mouseY);
      a.position.Set(e.x, e.y);
      a.linearVelocity = this.getBeltDirectionVector_();
      var f = this.getPlateFixtureDef_();
      e = this.getCornerFixtureDef_(-b / 2 + d / 2);
      b = this.getCornerFixtureDef_(b / 2 - d / 2);
      a = this.world_.CreateBody(a);
      f = a.CreateFixture(f);
      a.CreateFixture(e);
      a.CreateFixture(b);
      f.collisionID = k.world.ConveyorBelt.COLLISION_ID;
      return a;
    }
    onTapEnd() {
      this.toggleBeltDirection_();
    }
    onUserInteractionStart() {
      super.onUserInteractionStart();
      this.pause();
    }
    onUserInteractionEnd() {
      super.onUserInteractionEnd();
      this.resume();
    }
  };
  k.world.ConveyorBelt.COLLISION_ID = "conveyorBeltFixture";
  k.world.PresentBall = class extends k.world.GravityObject {
    constructor(...a) {
      super(...a);
      this.body_ = this.buildBody_();
      this.previousAngularVelocity = null;
      this.onCollision_ = this.onCollision_.bind(this);
      this.registerForCollisions(this.onCollision_);
    }
    onCollision_(a) {
      !a || a.GetFixtureA().collisionID !== k.world.ConveyorBelt.COLLISION_ID && a.GetFixtureB().collisionID !== k.world.ConveyorBelt.COLLISION_ID || (window.santaApp.fire("sound-trigger", "pb_conveyorbelt_bounce"), this.previousAngularVelocity && Math.round(10 * this.previousAngularVelocity) / 10 == Math.round(10 * this.body_.GetAngularVelocity()) / 10 && this.body_.SetAngularVelocity(0), this.previousAngularVelocity = this.body_.GetAngularVelocity());
    }
    buildBody_() {
      var a = new M.BodyDef();
      a.type = M.BodyDef.b2_dynamicBody;
      a.position.Set(this.initialWorldPos_.x, this.initialWorldPos_.y);
      const b = new M.FixtureDef();
      b.density = this.config_.material.density;
      b.friction = this.config_.material.friction;
      b.restitution = this.config_.material.restitution;
      b.shape = new M.CircleShape(k.Unit.toWorld(this.config_.style.width / 2));
      a = this.world_.CreateBody(a);
      a.CreateFixture(b).collisionID = k.world.PresentBall.COLLISION_ID;
      return a;
    }
  };
  k.world.PresentBall.COLLISION_ID = "presentBallFixture";
  k.world.PresentSquare = class extends k.world.GravityObject {
    constructor(...a) {
      super(...a);
      this.body_ = this.buildBody_();
    }
    buildBody_() {
      var a = new M.BodyDef();
      a.type = M.BodyDef.b2_dynamicBody;
      a.position.Set(this.initialWorldPos_.x, this.initialWorldPos_.y);
      const b = new M.FixtureDef(),
        d = this.config_.style.width,
        e = this.config_.style.height;
      b.density = this.config_.material.density;
      b.friction = this.config_.material.friction;
      b.restitution = this.config_.material.restitution;
      b.shape = new M.PolygonShape();
      b.shape.SetAsBox(k.Unit.toWorld(d / 2), k.Unit.toWorld(e / 2));
      a = this.world_.CreateBody(a);
      a.CreateFixture(b).collisionID = k.world.PresentSquare.COLLISION_ID;
      return a;
    }
  };
  k.world.PresentSquare.COLLISION_ID = "presentSquareFixture";
  k.config.Levels = [{
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentBall,
      objectType: k.world.PresentBall,
      relX: .25,
      relY: 0
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .3,
      relY: .07
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .5,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .8,
      relY: .4,
      rotation: 0
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .4,
      relY: .8,
      rotation: 270
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: []
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentBall,
      objectType: k.world.PresentBall,
      relX: .2,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .25,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .75,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .55,
      relY: .25,
      rotation: 45
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .6,
      relY: .75,
      rotation: 270
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .35,
      relY: .7,
      rotation: 270
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.angledBeam,
      relX: .15,
      relY: .75,
      rotation: 0
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentBall,
      objectType: k.world.PresentBall,
      relX: .35,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .4,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .75,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.angledBeamInvertedShadow,
      relX: .15,
      relY: .85,
      rotation: 180
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .42,
      relY: .38,
      rotation: -45
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .49,
      relY: .72,
      rotation: -45
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .8,
      relY: .6,
      rotation: 225
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentBall,
      objectType: k.world.PresentBall,
      relX: .75,
      relY: 0
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .8,
      relY: .07
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .25,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .7,
      relY: .8,
      rotation: 35
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .54,
      relY: .6,
      rotation: 35
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .28,
      relY: .3,
      rotation: 35
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.angledBeamInvertedShadow2,
      relX: .1,
      relY: .25,
      rotation: -90
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentBall,
      objectType: k.world.PresentBall,
      relX: .3,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .35,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .75,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.angledBeamInvertedShadow,
      relX: .18,
      relY: .6,
      rotation: 180
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .5,
      relY: .25,
      rotation: 270
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .5,
      relY: .75,
      rotation: 270
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.angledBeam,
      relX: .8,
      relY: .65,
      rotation: 0
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentBall,
      objectType: k.world.PresentBall,
      relX: .75,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .8,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .2,
      relY: .55
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .7,
      relY: .6,
      rotation: 315
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .5,
      relY: .45,
      rotation: 0
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .5,
      relY: .85,
      rotation: 0
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentSquare,
      objectType: k.world.PresentSquare,
      relX: .25,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .3,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .25,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .2,
      relY: .7,
      rotation: 315
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .4,
      relY: .6,
      rotation: 0
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.angledBeamInvertedShadow,
      relX: .8,
      relY: .3,
      rotation: 180
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentSquare,
      objectType: k.world.PresentSquare,
      relX: .15,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .2,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .45,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .35,
      relY: .2,
      rotation: 315
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .4,
      relY: .6,
      rotation: 315
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .25,
      relY: .8,
      rotation: 270
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .6,
      relY: .45,
      rotation: 0
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentSquare,
      objectType: k.world.PresentSquare,
      relX: .5,
      relY: .15
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .55,
      relY: .1
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .2,
      relY: .9
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .35,
      relY: .4,
      rotation: 270
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .5,
      relY: .6,
      rotation: 0
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }, {
    ball: {
      material: k.config.Materials.present,
      style: k.config.Styles.presentSquare,
      objectType: k.world.PresentSquare,
      relX: .25,
      relY: 0
    },
    dropper: {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.dropper,
      relX: .3,
      relY: .3
    },
    target: {
      material: k.config.Materials.target,
      style: k.config.Styles.target,
      relX: .8,
      relY: .5
    },
    fixedObjects: [{
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeam,
      relX: .25,
      relY: .8,
      rotation: 0
    }, {
      material: k.config.Materials.fixedObject,
      style: k.config.Styles.straightBeamInvertedShadow,
      relX: .6,
      relY: .5,
      rotation: 270
    }],
    conveyorBelts: [{
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }, {
      material: k.config.Materials.conveyorBelt,
      style: k.config.Styles.conveyorBelt
    }],
    springs: [{
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }, {
      material: k.config.Materials.spring,
      style: k.config.Styles.spring
    }]
  }];
  function O(a, b) {
    let d = 0,
      e = 0;
    return function () {
      function f() {
        e = m;
        a.apply(h, g);
      }
      const g = arguments,
        h = this,
        m = +new Date();
      window.clearTimeout(d);
      m >= e + b ? f() : d = window.setTimeout(f, b);
    };
  }
  k.world.Dropper = class extends k.world.LevelObject {
    constructor(...a) {
      super(...a);
      this.body_ = this.buildBody_();
      this.$button_ = this.$el_.find(".js-dropper__button");
      this.onDropClick = O(this.onDropClick.bind(this), 250);
      this.addEventListeners_();
    }
    addEventListeners_() {
      this.$button_.on(k.InputEvent.START, this.onDropClick);
    }
    removeEventListeners_() {
      this.$button_.off(k.InputEvent.START, this.onDropClick);
    }
    onDropClick() {
      this.level_.isGamePaused() || (this.level_.dropBall(), this.level_.onInteraction(), window.santaApp.fire("sound-trigger", "pb_button"), window.santaApp.fire("sound-trigger", "pb_present_fall"));
    }
    buildButtonFixture_(a, b, d, e) {
      const f = new M.FixtureDef();
      f.density = b.globeDensity;
      f.friction = b.friction;
      f.restitution = b.restitution;
      f.shape = new M.PolygonShape();
      f.shape.SetAsOrientedBox(.18 * e, .3 * d, new M.Vec2(.32 * e, .13 * d), 0);
      a.CreateFixture(f);
    }
    buildPipeFixture_(a, b, d, e) {
      const f = new M.FixtureDef();
      f.density = b.globeDensity;
      f.friction = b.friction;
      f.restitution = b.restitution;
      f.shape = M.PolygonShape.AsEdge(new M.Vec2(.48 * -e, -d), new M.Vec2(.48 * -e, .5 * d));
      const g = new M.FixtureDef();
      g.density = b.globeDensity;
      g.friction = b.friction;
      g.restitution = b.restitution;
      g.shape = M.PolygonShape.AsEdge(new M.Vec2(0 * -e, -d), new M.Vec2(0 * -e, .5 * d));
      a.CreateFixture(f);
      a.CreateFixture(g);
    }
    buildBody_() {
      var a = new M.BodyDef();
      a.type = M.BodyDef.b2_staticBody;
      a.position.Set(this.initialWorldPos_.x, this.initialWorldPos_.y);
      const b = this.config_.material,
        d = k.Unit.toWorld(this.config_.style.width),
        e = k.Unit.toWorld(this.config_.style.height);
      a = this.world_.CreateBody(a);
      this.buildButtonFixture_(a, b, e, d);
      this.buildPipeFixture_(a, b, e, d);
      return a;
    }
    destroy() {
      super.destroy();
      this.removeEventListeners_();
    }
  };
  k.world.Target = class extends k.world.LevelObject {
    constructor(...a) {
      super(...a);
      this.body_ = this.buildBody_();
      this.onCollision_ = this.onCollision_.bind(this);
      this.registerForCollisions(this.onCollision_);
    }
    onCollision_(a) {
      if (this.collisionFixture) {
        a = a.GetFixtureA().ID === this.collisionFixture.ID || a.GetFixtureB().ID === this.collisionFixture.ID;
        var b = this.level_ && "function" === typeof this.level_.onLevelCompleted;
        a && b && (this.unregisterForCollisions(), this.level_.onLevelCompleted());
      }
    }
    buildBowlFixtures_(a, b, d, e) {
      const f = new M.FixtureDef();
      f.density = b.globeDensity;
      f.friction = b.friction;
      f.restitution = b.restitution;
      f.shape = M.PolygonShape.AsEdge(new M.Vec2(-e / 2.2, -d / 2), new M.Vec2(.4 * -e, .4 * -d));
      const g = new M.FixtureDef();
      g.density = b.globeDensity;
      g.friction = b.friction;
      g.restitution = b.restitution;
      g.shape = M.PolygonShape.AsEdge(new M.Vec2(.4 * -e, .4 * -d), new M.Vec2(.6 * -e, .15 * d));
      const h = new M.FixtureDef();
      h.density = b.globeDensity;
      h.friction = b.friction;
      h.restitution = b.restitution;
      h.shape = M.PolygonShape.AsEdge(new M.Vec2(.6 * -e, .15 * d), new M.Vec2(.45 * -e, .6 * d));
      const m = new M.FixtureDef();
      m.density = b.globeDensity;
      m.friction = b.friction;
      m.restitution = b.restitution;
      m.shape = M.PolygonShape.AsEdge(new M.Vec2(.45 * -e, .6 * d), new M.Vec2(.45 * e, .6 * d));
      const n = new M.FixtureDef();
      n.density = b.globeDensity;
      n.friction = b.friction;
      n.restitution = b.restitution;
      n.shape = M.PolygonShape.AsEdge(new M.Vec2(.45 * e, .6 * d), new M.Vec2(.6 * e, .15 * d));
      const p = new M.FixtureDef();
      p.density = b.globeDensity;
      p.friction = b.friction;
      p.restitution = b.restitution;
      p.shape = M.PolygonShape.AsEdge(new M.Vec2(.6 * e, .15 * d), new M.Vec2(.4 * e, .4 * -d));
      const q = new M.FixtureDef();
      q.density = b.globeDensity;
      q.friction = b.friction;
      q.restitution = b.restitution;
      q.shape = M.PolygonShape.AsEdge(new M.Vec2(.4 * e, .4 * -d), new M.Vec2(e / 2.2, -d / 2));
      a.CreateFixture(f);
      a.CreateFixture(g);
      a.CreateFixture(h);
      a.CreateFixture(m);
      a.CreateFixture(n);
      a.CreateFixture(p);
      a.CreateFixture(q);
    }
    buildBaseFixtures_(a, b, d, e) {
      const f = new M.FixtureDef();
      f.density = b.globeDensity;
      f.friction = b.friction;
      f.restitution = b.restitution;
      f.shape = new M.PolygonShape();
      f.shape.SetAsOrientedBox(.75 * e, .1 * d, new M.Vec2(0, .78 * d), 0);
      const g = new M.FixtureDef();
      g.density = b.globeDensity;
      g.friction = b.friction;
      g.restitution = b.restitution;
      g.shape = new M.PolygonShape();
      g.shape.SetAsOrientedBox(.3 * e, 3 * d, new M.Vec2(0, 3.9 * d), 0);
      a.CreateFixture(f);
      a.CreateFixture(g);
    }
    buildBody_() {
      var a = new M.BodyDef();
      a.type = M.BodyDef.b2_staticBody;
      a.position.Set(this.initialWorldPos_.x, this.initialWorldPos_.y - k.Unit.toWorld(30));
      var b = this.config_.style.objectHeight;
      const d = this.config_.material,
        e = k.Unit.toWorld(this.config_.style.objectWidth);
      b = k.Unit.toWorld(b);
      a = this.world_.CreateBody(a);
      this.buildBowlFixtures_(a, d, b, e);
      this.buildBaseFixtures_(a, d, b, e);
      const f = new M.FixtureDef();
      f.density = d.globeDensity;
      f.friction = d.friction;
      f.restitution = d.restitution;
      f.shape = M.PolygonShape.AsEdge(new M.Vec2(.3 * -e, b / 2.5), new M.Vec2(.3 * e, b / 2.5));
      this.setCollisionFixture(a.CreateFixture(f));
      return a;
    }
  };
  k.world.CandyCane = class extends k.world.LevelObject {
    constructor(...a) {
      super(...a);
      this.body_ = this.buildBody_();
      this.registerForCollisions(this.onCollision);
    }
    onCollision(a) {
      !a || a.GetFixtureA().collisionID !== k.world.PresentBall.COLLISION_ID && a.GetFixtureA().collisionID !== k.world.PresentSquare.COLLISION_ID && a.GetFixtureB().collisionID !== k.world.PresentBall.COLLISION_ID && a.GetFixtureB().collisionID !== k.world.PresentSquare.COLLISION_ID || window.santaApp.fire("sound-trigger", "pb_wall");
    }
    addOuterRadiusVertices_(a, b, d, e) {
      const f = 90 / (k.Constants.CORNER_RESOLUTION - 1);
      b -= e;
      d += e;
      for (let g = k.Constants.CORNER_RESOLUTION - 1; 0 <= g; g--) {
        const h = this.pointOnCircle_(e, f * g * -1, {
          x: b,
          y: d
        });
        a.push(new M.Vec2(k.Unit.toWorld(h.x), k.Unit.toWorld(h.y)));
      }
    }
    addInnerRadiusVertices_(a, b, d, e, f) {
      const g = 90 / (k.Constants.CORNER_RESOLUTION - 1);
      b = b - e - f / 2;
      d = d + e + f / 2;
      for (let h = 0; h < k.Constants.CORNER_RESOLUTION; h++) {
        const m = this.pointOnCircle_(e - f / 2, g * h * -1, {
          x: b,
          y: d
        });
        a.push(new M.Vec2(k.Unit.toWorld(m.x), k.Unit.toWorld(m.y)));
      }
    }
    addCornerVertices_(a, b, d, e, f) {
      const g = 180 / (k.Constants.CORNER_RESOLUTION - 1);
      b -= e;
      d += e;
      for (let h = k.Constants.CORNER_RESOLUTION - 1; 0 <= h; h--) {
        const m = this.pointOnCircle_(e, f + g * h * -1, {
          x: b,
          y: d
        });
        a.push(new M.Vec2(k.Unit.toWorld(m.x), k.Unit.toWorld(m.y)));
      }
    }
    buildVertices_() {
      const a = [],
        b = this.config_.style.width,
        d = this.config_.style.height,
        e = this.config_.style.stroke;
      this.config_.style.hasAngle ? (this.addCornerVertices_(a, -b / 2 + e, -d / 2, e / 2, -90), this.addOuterRadiusVertices_(a, b / 2, -d / 2, 2.5 * e), this.addCornerVertices_(a, b / 2, d / 2 - e, e / 2, 180), this.addInnerRadiusVertices_(a, b / 2, -d / 2, 2 * e, e)) : (this.addCornerVertices_(a, -b / 2 + d, -d / 2, d / 2, -90), this.addCornerVertices_(a, b / 2, -d / 2, d / 2, 90));
      return a;
    }
    buildBody_() {
      const a = this.buildVertices_();
      var b = new M.BodyDef();
      b.type = M.BodyDef.b2_staticBody;
      b.position.Set(this.initialWorldPos_.x, this.initialWorldPos_.y);
      b.angle = this.config_.rotation * Math.PI / 180;
      b = this.world_.CreateBody(b);
      const d = a.length;
      for (let e = 0; e < d; e++) {
        const f = new M.FixtureDef();
        f.density = this.config_.material.density;
        f.friction = this.config_.material.friction;
        f.restitution = this.config_.material.restitution;
        f.shape = M.PolygonShape.AsEdge(a[e], a[(e + 1) % d]);
        b.CreateFixture(f);
      }
      return b;
    }
    pointOnCircle_(a, b, d) {
      b = b * Math.PI / 180;
      return {
        x: a * Math.cos(b) + d.x,
        y: a * Math.sin(b) + d.y
      };
    }
  };
  k.world.Spring = class extends k.world.UserObject {
    constructor(...a) {
      super(...a);
      this.topPlateFixture_ = null;
      this.body_ = this.buildBody_();
      this.onCollision = this.onCollision.bind(this);
      this.registerForCollisions(this.onCollision);
    }
    onCollision(a) {
      if (a && a.GetFixtureA() === this.topPlateFixture_ || a.GetFixtureB() === this.topPlateFixture_ && (a.GetFixtureA().collisionID === k.world.PresentBall.COLLISION_ID || a.GetFixtureA().collisionID === k.world.PresentSquare.COLLISION_ID || a.GetFixtureB().collisionID === k.world.PresentBall.COLLISION_ID || a.GetFixtureB().collisionID === k.world.PresentSquare.COLLISION_ID)) k.shared.utils.animWithClass(this.$el_, "animate"), window.santaApp.fire("sound-trigger", "pb_boing"), gtag("event", "gameAction", {
        game: "presentbounce",
        action: "bounce"
      });
    }
    buildBody_() {
      var a = new M.BodyDef();
      a.type = M.BodyDef.b2_staticBody;
      var b = this.getMouseWorldVector(this.config_.mouseX, this.config_.mouseY);
      a.position.Set(b.x, b.y);
      const d = this.config_.style.width,
        e = this.config_.style.height;
      b = new M.FixtureDef();
      b.density = this.config_.material.density;
      b.friction = this.config_.material.friction;
      b.restitution = this.config_.material.restitution;
      b.shape = new M.PolygonShape();
      b.shape.SetAsOrientedBox(k.Unit.toWorld(d / 2), k.Unit.toWorld(1), new M.Vec2(0, -k.Unit.toWorld(e / 2)), 0);
      const f = new M.FixtureDef();
      f.density = this.config_.material.density;
      f.friction = this.config_.material.friction;
      f.restitution = .3;
      f.shape = new M.PolygonShape();
      f.shape.SetAsBox(k.Unit.toWorld(.4 * d), k.Unit.toWorld(e / 2));
      a = this.world_.CreateBody(a);
      a.CreateFixture(f);
      this.topPlateFixture_ = a.CreateFixture(b);
      return a;
    }
  };
  k.world.Level = class {
    constructor(a, b, d, e, f, g, h) {
      this.game_ = a;
      this.elem = b;
      this.levelData_ = d;
      this.onCompleteCallback = e;
      this.tutorial = f || null;
      this.scoreboard = g || null;
      this.drawer = h || null;
      this.$debugCanvas_ = null;
      this.userObjects_ = [];
      this.levelObjects_ = [];
      this.target_ = this.dropper_ = this.ball_ = this.world_ = null;
      this.isLevelLoaded_ = !1;
      this.debug_ = !!location.search.match(/[?&]debug=true/);
      this.hasInteractionStarted = !1;
      this.hasFirstBeltDropped = 0 < this.game_.level || !1;
      this.hasBeltInteractionStarted = !1;
      this.attempt_ = this.numObjectsAvailable = 0;
      this.elem.css("visibility", "hidden");
      this.buildWorld_();
      a = new M.ContactListener();
      a.BeginContact = this.onBeginContact_;
      a.EndContact = this.onEndContact_;
      a.PostSolve = this.onPostSolve_;
      a.PreSolve = this.onPreSolve_;
      this.world_.SetContactListener(a);
      this.onUserObjectDropped_ = this.onUserObjectDropped_.bind(this);
      this.onTestDropObject_ = this.onTestDropObject_.bind(this);
      this.onInteraction = this.onInteraction.bind(this);
      this.addEventListeners_();
      this.CLASS_PRESENT_STYLE_PREFIX = "present--style-";
      this.CLASS_PRESENT_ACTIVE = "present--active";
      this.init_();
    }
    addEventListeners_() {
      this.elem.on("click", this.onInteraction);
    }
    removeEventListeners_() {
      this.elem.off("click", this.onInteraction);
    }
    onLevelCompleted() {
      1 === this.attempt_ && gtag("event", "gameAction", {
        game: "presentbounce",
        action: "firsttry"
      });
      var a = this.scoreboard.countdown;
      this.hideBall();
      a = 50 * Math.max(30 / a, 0);
      a += 50 * this.numObjectsAvailable;
      this.onCompleteCallback(Math.round(a));
    }
    hideBall() {
      this.ball_.$el_.css("visibility", "hidden");
      this.ball_.$shadowEl_.css("visibility", "hidden");
    }
    onBeginContact_(a) {
      const b = a.GetFixtureA().GetBody(),
        d = a.GetFixtureB().GetBody();
      b && "function" === typeof b.collisionCallback && b.collisionCallback(a);
      d && "function" === typeof d.collisionCallback && d.collisionCallback(a);
    }
    onEndContact_() {}
    onPreSolve_() {}
    onPostSolve_() {}
    positionWrapperElement_(a) {
      a.css({
        position: "absolute",
        zIndex: 100,
        left: "50%",
        top: "50%",
        margin: "-" + k.Constants.CANVAS_HEIGHT / 2 + "px 0 0 -" + k.Constants.CANVAS_WIDTH / 2 + "px",
        width: k.Constants.CANVAS_WIDTH + "px",
        height: k.Constants.CANVAS_HEIGHT + "px"
      });
    }
    buildWorld_() {
      this.world_ = new M.World(new M.Vec2(0, 0), !0);
      this.positionWrapperElement_(this.elem);
      if (this.debug_) {
        this.$debugCanvas_ = $("<canvas>").addClass("js-debug-canvas").attr({
          width: k.Constants.CANVAS_WIDTH,
          height: k.Constants.CANVAS_HEIGHT
        }).appendTo(this.elem);
        const a = new M.DebugDraw();
        a.SetSprite(this.$debugCanvas_[0].getContext("2d"));
        a.SetDrawScale(k.Constants.PHYSICS_SCALE);
        a.SetFillAlpha(.3);
        a.SetLineThickness(1);
        a.SetFlags(M.DebugDraw.e_shapeBit | M.DebugDraw.e_jointBit);
        this.world_.SetDebugDraw(a);
      }
    }
    init_() {
      this.isLevelLoaded_ = !0;
      this.drawer.reset();
      this.buildLevelObjects_();
      this.buildUserObjects_();
      window.setTimeout(() => {
        this.show_();
      }, 50);
    }
    show_() {
      this.elem.css("visibility", "visible");
    }
    buildLevelObjects_() {
      this.dropper_ = new k.world.Dropper(this, this.world_, this.levelData_.dropper);
      this.target_ = new k.world.Target(this, this.world_, this.levelData_.target);
      this.levelObjects_.push(this.dropper_);
      this.levelObjects_.push(this.target_);
      for (let a of this.levelData_.fixedObjects) {
        const b = new k.world.CandyCane(this, this.world_, a);
        this.levelObjects_.push(b);
      }
    }
    buildUserObjects_() {
      for (let a of this.levelData_.conveyorBelts) this.drawer.add(a, k.Constants.USER_OBJECT_TYPE_BELT, this.onUserObjectDropped_, this.onTestDropObject_), this.numObjectsAvailable++;
      for (let a of this.levelData_.springs) this.drawer.add(a, k.Constants.USER_OBJECT_TYPE_SPRING, this.onUserObjectDropped_, this.onTestDropObject_), this.numObjectsAvailable++;
      this.drawer.updateDrawersVisibility();
    }
    toggleBeltTutorial_() {
      this.hasFirstBeltDropped || (this.hasFirstBeltDropped = !0);
    }
    onUserObjectDropped_(a, b, d, e) {
      a.mouseX = d.x;
      a.mouseY = d.y;
      b === k.Constants.USER_OBJECT_TYPE_BELT ? (b = new k.world.ConveyorBelt(this, this.world_, a), b.isBoundingBoxOverlappingOtherObject() ? (b.destroy(), a = !0) : (a = !1, this.userObjects_.push(b), window.santaApp.fire("sound-trigger", "pb_conveyorbelt_start"), b.play(), this.toggleBeltTutorial_()), e(a)) : b === k.Constants.USER_OBJECT_TYPE_SPRING && (b = new k.world.Spring(this, this.world_, a), b.isBoundingBoxOverlappingOtherObject() ? (b.destroy(), a = !0) : (a = !1, this.userObjects_.push(b)), e(a));
    }
    onTestDropObject_(a, b, d, e) {
      a.mouseX = d.x;
      a.mouseY = d.y;
      b === k.Constants.USER_OBJECT_TYPE_BELT ? (a = new k.world.ConveyorBelt(this, this.world_, a), e(!a.isBoundingBoxOverlappingOtherObject()), a.destroy()) : b === k.Constants.USER_OBJECT_TYPE_SPRING && (a = new k.world.Spring(this, this.world_, a), e(!a.isBoundingBoxOverlappingOtherObject()), a.destroy());
    }
    dropBall() {
      this.tutorial.off("presentbounce_go.mp4");
      ++this.attempt_;
      const a = this.randomIntFromInterval(0, 3);
      this.destroyBall();
      const b = this.levelData_.ball;
      this.ball_ = new b.objectType(this, this.world_, b);
      window.setTimeout(() => {
        this.ball_.$el_.addClass(this.CLASS_PRESENT_ACTIVE).addClass(this.CLASS_PRESENT_STYLE_PREFIX + a);
        this.ball_.$shadowEl_.addClass(this.CLASS_PRESENT_ACTIVE);
      }, 50);
    }
    randomIntFromInterval(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    destroyBall() {
      this.ball_ && (this.ball_.destroy(), this.ball_ = null);
    }
    getViewport() {
      return this.game_.getViewport();
    }
    updateFrame_() {
      this.ball_ && this.ball_.update();
      for (let a of this.levelObjects_) a.update();
      for (let a of this.userObjects_) a.update();
    }
    drawFrame_() {
      this.ball_ && (this.ball_.draw(), this.hasBallExitedScreen_() && (this.destroyBall(), window.santaApp.fire("sound-trigger", "pb_ball_fallout")));
      for (let a of this.levelObjects_) a.draw();
      for (let a of this.userObjects_) a.draw();
    }
    onInteraction() {
      this.hasInteractionStarted || (this.hasInteractionStarted = !0, this.tutorial.off("presentbounce_drag.mp4"));
      this.hasFirstBeltDropped && !this.hasBeltInteractionStarted && (this.hasBeltInteractionStarted = !0, this.tutorial.off("presentbounce_conveyor.mp4"));
    }
    hasBallExitedScreen_() {
      return this.ball_ ? this.ball_.position().y > 1.3 * this.game_.getViewport().height : !1;
    }
    onFrame() {
      this.updateFrame_();
      this.world_.Step(k.Constants.PHYSICS_TIME_STEP, k.Constants.PHYSICS_VELOCITY_ITERATIONS, k.Constants.PHYSICS_POSITION_ITERATIONS);
      this.drawFrame_();
      this.world_.ClearForces();
      this.debug_ && this.world_.DrawDebugData();
    }
    onUserInteractionStart() {
      this.destroyBall();
      for (let a of this.levelObjects_) a.onUserInteractionStart();
      for (let a of this.userObjects_) a.onUserInteractionStart();
    }
    onUserInteractionEnd() {
      for (let a of this.levelObjects_) a.onUserInteractionEnd();
      for (let a of this.userObjects_) a.onUserInteractionEnd();
    }
    isGamePaused() {
      return this.game_.paused;
    }
    pause() {
      for (let a of this.levelObjects_) a.pause();
      for (let a of this.userObjects_) a.pause();
    }
    resume() {
      for (let a of this.levelObjects_) a.resume();
      for (let a of this.userObjects_) a.resume();
    }
    destroy() {
      this.isLevelLoaded_ = !1;
      this.destroyBall();
      this.removeEventListeners_();
      window.santaApp.fire("sound-trigger", "pb_conveyorbelt_stop");
      for (let a of this.levelObjects_) a.destroy();
      for (let a of this.userObjects_) a.destroy();
      this.userObjects_.length = 0;
      this.levelObjects_.length = 0;
      this.world_ = null;
      window.santaApp.fire("sound-trigger", "pb_conveyorbelt_stop");
      this.$debugCanvas_ && this.$debugCanvas_.remove();
    }
  };
  k.Draggable = function (a, b, d, e, f, g, h) {
    this.el = $(a);
    this.rootEl = b;
    this.onDropCallback = d;
    this.testDropCallback = e;
    this.drawer = f;
    this.data_ = g;
    this.game_ = h;
    this.container = $(a).parent();
    this.el.data("container", this.container);
    this.$document = $(document);
    this.onInputStart_ = this.onInputStart_.bind(this);
    this.onInputMove_ = this.onInputMove_.bind(this);
    this.onInputEnd_ = this.onInputEnd_.bind(this);
    this.el.on(k.InputEvent.START, this.onInputStart_);
    this.el.addClass("draggable");
  };
  k.Draggable.prototype.dragStart_ = function (a, b) {
    var d = this.game_.getViewport().scale,
      e = this.data_.style.padding || 0;
    const f = (this.data_.style.width + 2 * e) * d;
    e = (this.data_.style.height + 2 * e) * d;
    this.el.css({
      width: f,
      height: e,
      marginLeft: f / -2,
      marginTop: e / -2,
      transform: "none"
    });
    this.startX = a;
    this.startY = b;
    d = this.el[0].getBoundingClientRect();
    b = d.top - (b - e / 2);
    this.startOffsetX = d.left - (a - f / 2);
    this.startOffsetY = b;
    this.el.addClass("dragging");
    this.drawer.onDrag(this.el);
  };
  k.Draggable.prototype.dragMove_ = function (a, b, d, e) {
    this.el.css({
      position: "absolute",
      transform: "translate3d(" + a + "px, " + b + "px, 0px)"
    });
    this.testDropCallback(d + this.startOffsetX, e + this.startOffsetY, a => {
      this.el.toggleClass("no-drop", !a);
    });
  };
  k.Draggable.prototype.dragEnd_ = function (a, b) {
    if (this.rootEl.find(".js-drop-target").filter(function (d, e) {
      d = e.getBoundingClientRect();
      return d.left < a && a < d.left + d.width && d.top < b && b < d.top + d.height;
    }).first().length) this.onDropCallback(a + this.startOffsetX, b + this.startOffsetY, a => {
      if (a) this.drawer.onDropError(this.el);else this.drawer.onDropSuccess(this.el);
    });else this.drawer.onDropError(this.el);
    this.el.css({
      position: "",
      transform: "",
      margin: "",
      width: "",
      height: ""
    });
    this.el.removeClass("dragging");
  };
  k.Draggable.prototype.onInputStart_ = function (a) {
    if (!this.drawer.isPaused()) {
      a.preventDefault();
      a = k.InputEvent.normalize(a);
      if (a.hasOwnProperty("touches")) {
        var b = a.touches[0].clientX;
        a = a.touches[0].clientY;
      } else b = a.clientX, a = a.clientY;
      this.dragStart_(b, a);
      this.$document.on(k.InputEvent.MOVE, this.onInputMove_);
      this.$document.on(k.InputEvent.END, this.onInputEnd_);
    }
  };
  k.Draggable.prototype.onInputMove_ = function (a) {
    a.preventDefault();
    a = k.InputEvent.normalize(a);
    if (a.hasOwnProperty("touches")) {
      var b = a.touches[0].clientX - this.startX;
      var d = a.touches[0].clientY - this.startY;
      this.x = a.touches[0].clientX;
      this.y = a.touches[0].clientY;
    } else b = a.clientX - this.startX, d = a.clientY - this.startY, this.x = a.clientX, this.y = a.clientY;
    this.dragMove_(b, d, this.x, this.y);
  };
  k.Draggable.prototype.onInputEnd_ = function (a) {
    this.dragEnd_(this.x, this.y);
    this.$document.off(k.InputEvent.MOVE, this.onInputMove_);
    this.$document.off(k.InputEvent.END, this.onInputEnd_);
    a.preventDefault();
  };
  k.Drawer = function (a, b) {
    this.elem = a;
    this.$elem = $(a);
    this.game_ = b;
    this.onDrag = this.onDrag.bind(this);
    this.hasInteractionStarted = !1;
    this.interactionCallback = null;
    this.isGamePaused = !1;
    this.$drawers = {};
    this.$restart = this.$elem.find("." + this.CLASS_RESTART);
    this.$tray = this.$elem.find(".tray");
    this.setDrawers();
    this.$drawers[D.USER_OBJECT_TYPE_BELT].$node.data("type", D.USER_OBJECT_TYPE_BELT);
    this.$drawers[D.USER_OBJECT_TYPE_SPRING].$node.data("type", D.USER_OBJECT_TYPE_SPRING);
  };
  k.Drawer.prototype.CLASS_DRAWER_SPRING = "js-drawer-spring";
  k.Drawer.prototype.CLASS_DRAWER_BELT = "js-drawer-belt";
  k.Drawer.prototype.CLASS_DRAWER_HOLDER = "js-drawer-holder";
  k.Drawer.prototype.CLASS_SPRING = "js-object-spring";
  k.Drawer.prototype.CLASS_BELT = "js-object-conveyorBelt";
  k.Drawer.prototype.CLASS_INACTIVE = "is-inactive";
  k.Drawer.prototype.CLASS_COUNTER = "js-drawer-counter";
  k.Drawer.prototype.CLASS_RESTART = "js-drawer-restart";
  k.Drawer.prototype.CLASS_DRAGGABLE = "js-draggable";
  k.Drawer.prototype.CLASS_HOLDER_VISIBLE = "drawer__holder--visible";
  k.Drawer.prototype.CLASS_COUNT_VISIBLE = "drawer__counter--visible";
  k.Drawer.prototype.CLASS_OBJECT_VISIBLE = "object--visible";
  k.Drawer.prototype.CLASS_ANIMATE = "animate";
  k.Drawer.prototype.CLASS_TRAY_HIDDEN = "tray--hidden";
  k.Drawer.prototype.pause = function () {
    this.isGamePaused = !0;
  };
  k.Drawer.prototype.resume = function () {
    this.isGamePaused = !1;
  };
  k.Drawer.prototype.isPaused = function () {
    return this.isGamePaused;
  };
  k.Drawer.prototype.reset = function () {
    this.setDrawers();
    for (var a in this.$drawers) this.$drawers.hasOwnProperty(a) && this.getDraggableEl_(this.$drawers[a].$node).remove();
  };
  k.Drawer.prototype.setDrawers = function () {
    this.$drawers[D.USER_OBJECT_TYPE_SPRING] = {
      count: 0,
      $node: this.$elem.find("." + this.CLASS_DRAWER_SPRING)
    };
    this.$drawers[D.USER_OBJECT_TYPE_BELT] = {
      count: 0,
      $node: this.$elem.find("." + this.CLASS_DRAWER_BELT)
    };
  };
  k.Drawer.prototype.add = function (a, b, d, e) {
    var f = this.$drawers[b],
      g = this.createDraggableElement_(a);
    f.$node.append(g).find(".js-rotate-handle").remove();
    this.incrementCount(f);
    new k.Draggable(g, this.elem, (e, f, g) => {
      d(a, b, {
        x: e,
        y: f
      }, g);
    }, (d, f, g) => {
      e(a, b, {
        x: d,
        y: f
      }, g);
    }, this, a, this.game_);
  };
  k.Drawer.prototype.getDrawerTypeFromEl_ = function (a) {
    return a.closest("." + this.CLASS_DRAWER_HOLDER).data("type");
  };
  k.Drawer.prototype.onDrag = function (a) {
    a = this.getDrawerTypeFromEl_(a);
    this.decrementCount(this.$drawers[a]);
    window.santaApp.fire("sound-trigger", "pb_grab_item");
    this.hasInteractionStarted || (this.hasInteractionStarted = !0, "function" === typeof this.interactionCallback && this.interactionCallback());
  };
  k.Drawer.prototype.setInteractionCallback = function (a) {
    this.hasInteractionStarted = !1;
    this.interactionCallback = a;
  };
  k.Drawer.prototype.onDropError = function (a) {
    a = this.getDrawerTypeFromEl_(a);
    a = this.$drawers[a];
    var b = this.getCounterEl_(a.$node);
    0 === a.count && this.showDrawer(a);
    this.incrementCount(a);
    this.showCounter(b);
    window.santaApp.fire("sound-trigger", "pb_error");
  };
  k.Drawer.prototype.onDropSuccess = function (a) {
    var b = this.getDrawerTypeFromEl_(a);
    b = this.$drawers[b];
    a.remove();
    this.hideTray();
    0 === b.count && this.hideDrawer(b);
    window.santaApp.fire("sound-trigger", "pb_place_item");
  };
  k.Drawer.prototype.showDrawer = function (a) {
    this.showTray();
    var b = a.$node;
    b.addClass(this.CLASS_HOLDER_VISIBLE);
    setTimeout(function () {
      this.showObject(this.getDraggableEl_(b));
      this.showCounter(this.getCounterEl_(b));
    }.bind(this), 200);
  };
  k.Drawer.prototype.hideDrawer = function (a) {
    a = a.$node;
    a.removeClass(this.CLASS_HOLDER_VISIBLE);
    this.hideCounter(this.getCounterEl_(a));
  };
  k.Drawer.prototype.showTray = function () {
    this.$tray.removeClass(this.CLASS_TRAY_HIDDEN);
  };
  k.Drawer.prototype.hideTray = function () {
    0 == this.$drawers.USER_OBJECT_TYPE_BELT.count && 0 == this.$drawers.USER_OBJECT_TYPE_SPRING.count && this.$tray.addClass(this.CLASS_TRAY_HIDDEN);
  };
  k.Drawer.prototype.getCounterEl_ = function (a) {
    return a.find("." + this.CLASS_COUNTER);
  };
  k.Drawer.prototype.getDraggableEl_ = function (a) {
    return a.find("." + this.CLASS_DRAGGABLE);
  };
  k.Drawer.prototype.showObject = function (a) {
    a.addClass(this.CLASS_OBJECT_VISIBLE);
  };
  k.Drawer.prototype.hideObject = function (a) {
    a.removeClass(this.CLASS_OBJECT_VISIBLE);
  };
  k.Drawer.prototype.showCounter = function (a) {
    a.addClass(this.CLASS_COUNT_VISIBLE);
  };
  k.Drawer.prototype.hideCounter = function (a) {
    a.removeClass(this.CLASS_COUNT_VISIBLE);
  };
  k.Drawer.prototype.showRestart = function () {
    this.$restart.addClass(this.CLASS_HOLDER_VISIBLE);
  };
  k.Drawer.prototype.createDraggableElement_ = function (a) {
    var b = [this.CLASS_DRAGGABLE, "object " + a.style.className];
    return $("<div />").addClass(b.join(" ")).html(a.style.innerHTML || "");
  };
  k.Drawer.prototype.updateDrawersVisibility = function (a) {
    var b = function (a) {
      a && 0 < a.count ? this.showDrawer(a) : this.hideDrawer(a);
    }.bind(this);
    if (a) b(a);else for (var d in this.$drawers) this.$drawers.hasOwnProperty(d) && b(this.$drawers[d]);
    this.showRestart();
  };
  k.Drawer.prototype.incrementCount = function (a) {
    0 === a.count && this.showCounter(a.$node);
    a.count++;
    this.updateCounterText(a);
  };
  k.Drawer.prototype.decrementCount = function (a) {
    a.count = Math.max(a.count - 1, 0);
    0 === a.count && this.hideCounter(this.getCounterEl_(a.$node));
    this.updateCounterText(a);
  };
  k.Drawer.prototype.updateCounterText = function (a) {
    var b = this.getCounterEl_(a.$node);
    b.text(a.count);
    this.animateCounter(b);
  };
  k.Drawer.prototype.animateCounter = function (a) {
    k.shared.utils.animWithClass(a, this.CLASS_ANIMATE);
  };
  k.Game = function (a) {
    this.elem = $(a);
    this.viewportElem = this.elem.find(".js-viewport");
    this.sceneElem = this.elem.find(".scene");
    this.levelElem = this.elem.find(".levelboard");
    this.backgroundElem = this.elem.find(".bg");
    this.scoreboard = new k.shared.Scoreboard(this, null, k.Constants.TOTAL_LEVELS);
    this.drawer = new k.Drawer(this.elem, this);
    this.gameoverView = new k.shared.Gameover(this, this.elem.find(".gameover"));
    this.levelUp = new k.shared.LevelUp(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
    this.tutorial = new k.shared.Tutorial("presentbounce_drag.mp4 presentbounce_conveyor.mp4 presentbounce_go.mp4");
    this.paused = this.isPlaying = !1;
    this.scale = 1;
    this.gameStartTime = +new Date();
    this.onFrame_ = this.onFrame_.bind(this);
    this.loadNextLevel_ = this.loadNextLevel_.bind(this);
    this.onLevelCompleted = this.onLevelCompleted.bind(this);
    this.onInteraction = this.onInteraction.bind(this);
    this.addEventListeners_();
  };
  k.Game.prototype.addEventListeners_ = function () {
    this.backgroundElem.on("click", this.onInteraction);
    this.elem.on("click", ".tutorial", this.onInteraction);
  };
  k.Game.prototype.removeEventListeners_ = function () {
    this.backgroundElem.off("click", this.onInteraction);
    this.elem.off("click", ".tutorial", this.onInteraction);
  };
  k.Game.prototype.start = function (a = null) {
    this.watchSceneSize_();
    this.restart(a && +a.level || 1);
    this.tutorial.start();
  };
  k.Game.prototype.restart = function (a = 1) {
    this.level = a - 2;
    if (0 > this.level || ~~this.level !== this.level) this.level = -1;
    this.paused = !1;
    this.scoreboard.reset();
    this.loadNextLevel_();
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "presentbounce"
    });
    this.unfreezeGame();
  };
  k.Game.prototype.restartLevel = function () {
    this.paused = !1;
    this.scoreboard.resetTimer();
    this.scoreboard.unpause();
    this.loadLevel_();
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "presentbounce"
    });
    this.unfreezeGame();
  };
  k.Game.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var a = +new Date() / 1E3,
        b = Math.min(1, a - this.lastFrame);
      this.lastFrame = a;
      this.currentLevel_.onFrame(b);
      this.scoreboard.onFrame(-b);
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  k.Game.prototype.onInteraction = function () {
    if (this.currentLevel_) this.currentLevel_.onInteraction();
  };
  k.Game.prototype.loadNextLevel_ = function () {
    this.level++;
    this.loadLevel_(!0);
    this.scoreboard.setLevel(this.level);
    this.scoreboard.restart();
  };
  k.Game.prototype.loadLevel_ = function (a) {
    var b = k.config.Levels[this.level % k.config.Levels.length];
    a && 0 < this.level && window.santaApp.fire("sound-trigger", "pb_level_up");
    this.currentLevel_ && this.currentLevel_.destroy();
    this.currentLevel_ = new k.world.Level(this, this.levelElem, b, this.onLevelCompleted, this.tutorial, this.scoreboard, this.drawer);
    this.drawer.setInteractionCallback(this.onInteraction.bind(this));
  };
  k.Game.prototype.onLevelCompleted = function (a) {
    a && this.scoreboard.addScore(a);
    window.santaApp.fire("sound-trigger", "pd_ball_finish");
    window.santaApp.fire("sound-trigger", "pb_conveyorbelt_stop");
    this.level === k.config.Levels.length - 1 ? this.gameover() : this.levelUp.show(this.level + 2, this.loadNextLevel_);
  };
  k.Game.prototype.freezeGame = function () {
    this.isPlaying && (this.isPlaying = !1, this.elem.addClass("frozen"), this.drawer.pause(), this.currentLevel_.pause(), window.cancelAnimationFrame(this.requestId));
  };
  k.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen").focus(), this.isPlaying = !0, this.drawer.resume(), this.currentLevel_.resume(), this.lastFrame = +new Date() / 1E3, window.cancelAnimationFrame(this.requestId), this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  k.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverView.show();
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "presentbounce",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  k.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  k.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  k.Game.prototype.setScale = function (a, b, d) {
    this.scale = a;
    this.viewportWidth = b;
    this.viewportHeight = d;
    this.sceneElem.css({
      transform: "scale(" + a + ")",
      width: b / a + "px",
      height: d / a + "px"
    });
  };
  k.Game.prototype.getViewport = function () {
    return {
      sceneOffset: this.sceneOffset,
      scale: this.scale,
      width: this.viewportWidth / this.scale,
      height: this.viewportHeight / this.scale,
      viewportWidth: this.viewportWidth,
      viewportHeight: this.viewportHeight
    };
  };
  k.Game.prototype.watchSceneSize_ = function () {
    function a() {
      var a = b.width(),
        f = b.height(),
        g = a < k.Constants.VIEWPORT_MIN_WIDTH ? a / k.Constants.VIEWPORT_MIN_WIDTH : 1;
      g = f < k.Constants.VIEWPORT_MIN_HEIGHT ? Math.min(f / k.Constants.VIEWPORT_MIN_HEIGHT, g) : g;
      d.setScale(g, a, f);
      d.sceneOffset = b[0].getBoundingClientRect();
    }
    var b = this.viewportElem,
      d = this;
    a();
    $(window).on("resize.presentbounce", a);
  };
  k.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "presentbounce",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.isPlaying = !1;
    window.santaApp.fire("sound-trigger", "pb_conveyorbelt_stop");
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".presentbounce");
    $(document).off(".presentbounce");
    this.removeEventListeners_();
    this.levelUp.dispose();
    this.tutorial.dispose();
  };
  _globalExport = k.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('pb_load_sounds', 40);
sceneApi.preload.images('img/mouse.svg', 'img/pipe-part.svg', 'img/target-part.svg');
const game = new Game(document.getElementById('module-presentbounce'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.config({
  pause: true,
  sound: [],
  orientation: 'landscape'
});
sceneApi.ready(async data => {
  game.start(data);
});