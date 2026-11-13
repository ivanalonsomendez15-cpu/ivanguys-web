import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var b = b || {};
  b.scope = {};
  var e = e || {};
  e.global = this || self;
  e.exportPath_ = function (a, c, d) {
    a = a.split(".");
    d = d || e.global;
    a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
    for (var f; a.length && (f = a.shift());) a.length || void 0 === c ? d = d[f] && d[f] !== Object.prototype[f] ? d[f] : d[f] = {} : d[f] = c;
  };
  e.define = function (a, c) {
    return c;
  };
  e.FEATURESET_YEAR = 2012;
  e.DEBUG = !0;
  e.LOCALE = "en";
  e.TRUSTED_SITE = !0;
  e.STRICT_MODE_COMPATIBLE = !1;
  e.DISALLOW_TEST_ONLY_CODE = !e.DEBUG;
  e.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
  e.provide = function (a) {
    if (e.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
    e.constructNamespace_(a);
  };
  e.constructNamespace_ = function (a, c) {
    e.exportPath_(a, c);
  };
  e.getScriptNonce = function (a) {
    if (a && a != e.global) return e.getScriptNonce_(a.document);
    null === e.cspNonce_ && (e.cspNonce_ = e.getScriptNonce_(e.global.document));
    return e.cspNonce_;
  };
  e.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
  e.cspNonce_ = null;
  e.getScriptNonce_ = function (a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && e.NONCE_PATTERN_.test(a) ? a : "";
  };
  e.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
  e.module = function (a) {
    if ("string" !== typeof a || !a || -1 == a.search(e.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
    if (!e.isInGoogModuleLoader_()) throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
    if (e.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
    e.moduleLoaderState_.moduleName = a;
  };
  e.module.get = function (a) {
    return e.module.getInternal_(a);
  };
  e.module.getInternal_ = function () {
    return null;
  };
  e.ModuleType = {
    ES6: "es6",
    GOOG: "goog"
  };
  e.moduleLoaderState_ = null;
  e.isInModuleLoader_ = function () {
    return e.isInGoogModuleLoader_() || e.isInEs6ModuleLoader_();
  };
  e.isInGoogModuleLoader_ = function () {
    return !!e.moduleLoaderState_ && e.moduleLoaderState_.type == e.ModuleType.GOOG;
  };
  e.isInEs6ModuleLoader_ = function () {
    if (e.moduleLoaderState_ && e.moduleLoaderState_.type == e.ModuleType.ES6) return !0;
    var a = e.global.$jscomp;
    return a ? "function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath() : !1;
  };
  e.module.declareLegacyNamespace = function () {
    e.moduleLoaderState_.declareLegacyNamespace = !0;
  };
  e.declareModuleId = function (a) {
    if (e.moduleLoaderState_) e.moduleLoaderState_.moduleName = a;else {
      var c = e.global.$jscomp;
      if (!c || "function" != typeof c.getCurrentModulePath) throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
      c = c.require(c.getCurrentModulePath());
      e.loadedModules_[a] = {
        exports: c,
        type: e.ModuleType.ES6,
        moduleId: a
      };
    }
  };
  e.setTestOnly = function (a) {
    if (e.DISALLOW_TEST_ONLY_CODE) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  };
  e.forwardDeclare = function () {};
  e.getObjectByName = function (a, c) {
    a = a.split(".");
    c = c || e.global;
    for (var d = 0; d < a.length; d++) if (c = c[a[d]], null == c) return null;
    return c;
  };
  e.globalize = function (a, c) {
    c = c || e.global;
    for (var d in a) c[d] = a[d];
  };
  e.addDependency = function () {};
  e.ENABLE_DEBUG_LOADER = !0;
  e.logToConsole_ = function (a) {
    e.global.console && e.global.console.error(a);
  };
  e.require = function () {};
  e.requireType = function () {
    return {};
  };
  e.basePath = "";
  e.nullFunction = function () {};
  e.abstractMethod = function () {
    throw Error("unimplemented abstract method");
  };
  e.addSingletonGetter = function (a) {
    a.instance_ = void 0;
    a.getInstance = function () {
      if (a.instance_) return a.instance_;
      e.DEBUG && (e.instantiatedSingletons_[e.instantiatedSingletons_.length] = a);
      return a.instance_ = new a();
    };
  };
  e.instantiatedSingletons_ = [];
  e.LOAD_MODULE_USING_EVAL = !0;
  e.SEAL_MODULE_EXPORTS = e.DEBUG;
  e.loadedModules_ = {};
  e.DEPENDENCIES_ENABLED = !1;
  e.TRANSPILE = "detect";
  e.ASSUME_ES_MODULES_TRANSPILED = !1;
  e.TRANSPILE_TO_LANGUAGE = "";
  e.TRANSPILER = "transpile.js";
  e.hasBadLetScoping = null;
  e.useSafari10Workaround = function () {
    if (null == e.hasBadLetScoping) {
      try {
        var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
      } catch (c) {
        a = !1;
      }
      e.hasBadLetScoping = a;
    }
    return e.hasBadLetScoping;
  };
  e.workaroundSafari10EvalBug = function (a) {
    return "(function(){" + a + "\n;})();\n";
  };
  e.loadModule = function (a) {
    var c = e.moduleLoaderState_;
    try {
      e.moduleLoaderState_ = {
        moduleName: "",
        declareLegacyNamespace: !1,
        type: e.ModuleType.GOOG
      };
      if (e.isFunction(a)) var d = a.call(void 0, {});else if ("string" === typeof a) e.useSafari10Workaround() && (a = e.workaroundSafari10EvalBug(a)), d = e.loadModuleFromSource_.call(void 0, a);else throw Error("Invalid module definition");
      var f = e.moduleLoaderState_.moduleName;
      if ("string" === typeof f && f) e.moduleLoaderState_.declareLegacyNamespace ? e.constructNamespace_(f, d) : e.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof d && null != d && Object.seal(d), e.loadedModules_[f] = {
        exports: d,
        type: e.ModuleType.GOOG,
        moduleId: e.moduleLoaderState_.moduleName
      };else throw Error('Invalid module name "' + f + '"');
    } finally {
      e.moduleLoaderState_ = c;
    }
  };
  e.loadModuleFromSource_ = function (a) {
    eval(a);
    return {};
  };
  e.normalizePath_ = function (a) {
    a = a.split("/");
    for (var c = 0; c < a.length;) "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
    return a.join("/");
  };
  e.loadFileSync_ = function (a) {
    if (e.global.CLOSURE_LOAD_FILE_SYNC) return e.global.CLOSURE_LOAD_FILE_SYNC(a);
    try {
      var c = new e.global.XMLHttpRequest();
      c.open("get", a, !1);
      c.send();
      return 0 == c.status || 200 == c.status ? c.responseText : null;
    } catch (d) {
      return null;
    }
  };
  e.transpile_ = function (a, c, d) {
    var f = e.global.$jscomp;
    f || (e.global.$jscomp = f = {});
    var g = f.transpile;
    if (!g) {
      var h = e.basePath + e.TRANSPILER,
        k = e.loadFileSync_(h);
      if (k) {
        (function () {
          (0, eval)(k + "\n//# sourceURL=" + h);
        }).call(e.global);
        if (e.global.$gwtExport && e.global.$gwtExport.$jscomp && !e.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(e.global.$gwtExport));
        e.global.$jscomp.transpile = e.global.$gwtExport.$jscomp.transpile;
        f = e.global.$jscomp;
        g = f.transpile;
      }
    }
    g || (g = f.transpile = function (a, c) {
      e.logToConsole_(c + " requires transpilation but no transpiler was found.");
      return a;
    });
    return g(a, c, d);
  };
  e.typeOf = function (a) {
    var c = typeof a;
    if ("object" == c) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return c;
        var d = Object.prototype.toString.call(a);
        if ("[object Window]" == d) return "object";
        if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == c && "undefined" == typeof a.call) return "object";
    return c;
  };
  e.isArray = function (a) {
    return "array" == e.typeOf(a);
  };
  e.isArrayLike = function (a) {
    var c = e.typeOf(a);
    return "array" == c || "object" == c && "number" == typeof a.length;
  };
  e.isDateLike = function (a) {
    return e.isObject(a) && "function" == typeof a.getFullYear;
  };
  e.isFunction = function (a) {
    return "function" == e.typeOf(a);
  };
  e.isObject = function (a) {
    var c = typeof a;
    return "object" == c && null != a || "function" == c;
  };
  e.getUid = function (a) {
    return Object.prototype.hasOwnProperty.call(a, e.UID_PROPERTY_) && a[e.UID_PROPERTY_] || (a[e.UID_PROPERTY_] = ++e.uidCounter_);
  };
  e.hasUid = function (a) {
    return !!a[e.UID_PROPERTY_];
  };
  e.removeUid = function (a) {
    null !== a && "removeAttribute" in a && a.removeAttribute(e.UID_PROPERTY_);
    try {
      delete a[e.UID_PROPERTY_];
    } catch (c) {}
  };
  e.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
  e.uidCounter_ = 0;
  e.getHashCode = e.getUid;
  e.removeHashCode = e.removeUid;
  e.cloneObject = function (a) {
    var c = e.typeOf(a);
    if ("object" == c || "array" == c) {
      if ("function" === typeof a.clone) return a.clone();
      c = "array" == c ? [] : {};
      for (var d in a) c[d] = e.cloneObject(a[d]);
      return c;
    }
    return a;
  };
  e.bindNative_ = function (a, c, d) {
    return a.call.apply(a.bind, arguments);
  };
  e.bindJs_ = function (a, c, d) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var f = Array.prototype.slice.call(arguments, 2);
      return function () {
        var d = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(d, f);
        return a.apply(c, d);
      };
    }
    return function () {
      return a.apply(c, arguments);
    };
  };
  e.bind = function (a, c, d) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e.bind = e.bindNative_ : e.bind = e.bindJs_;
    return e.bind.apply(null, arguments);
  };
  e.partial = function (a, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
      var c = d.slice();
      c.push.apply(c, arguments);
      return a.apply(this, c);
    };
  };
  e.mixin = function (a, c) {
    for (var d in c) a[d] = c[d];
  };
  e.now = e.TRUSTED_SITE && Date.now || function () {
    return +new Date();
  };
  e.globalEval = function (a) {
    if (e.global.execScript) e.global.execScript(a, "JavaScript");else if (e.global.eval) {
      if (null == e.evalWorksForGlobals_) {
        try {
          e.global.eval("var _evalTest_ = 1;");
        } catch (f) {}
        if ("undefined" != typeof e.global._evalTest_) {
          try {
            delete e.global._evalTest_;
          } catch (f) {}
          e.evalWorksForGlobals_ = !0;
        } else e.evalWorksForGlobals_ = !1;
      }
      if (e.evalWorksForGlobals_) e.global.eval(a);else {
        var c = e.global.document,
          d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.head.appendChild(d);
        c.head.removeChild(d);
      }
    } else throw Error("goog.globalEval not available");
  };
  e.evalWorksForGlobals_ = null;
  e.getCssName = function (a, c) {
    function d(a) {
      a = a.split("-");
      for (var c = [], d = 0; d < a.length; d++) c.push(f(a[d]));
      return c.join("-");
    }
    function f(a) {
      return e.cssNameMapping_[a] || a;
    }
    if ("." == String(a).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
    var g = e.cssNameMapping_ ? "BY_WHOLE" == e.cssNameMappingStyle_ ? f : d : function (a) {
      return a;
    };
    a = c ? a + "-" + g(c) : g(a);
    return e.global.CLOSURE_CSS_NAME_MAP_FN ? e.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
  };
  e.setCssNameMapping = function (a, c) {
    e.cssNameMapping_ = a;
    e.cssNameMappingStyle_ = c;
  };
  e.getMsg = function (a, c, d) {
    d && d.html && (a = a.replace(/</g, "&lt;"));
    c && (a = a.replace(/\{\$([^}]+)}/g, function (a, d) {
      return null != c && d in c ? c[d] : a;
    }));
    return a;
  };
  e.getMsgWithFallback = function (a) {
    return a;
  };
  e.exportSymbol = function (a, c, d) {
    e.exportPath_(a, c, d);
  };
  e.exportProperty = function (a, c, d) {
    a[c] = d;
  };
  e.inherits = function (a, c) {
    function d() {}
    d.prototype = c.prototype;
    a.superClass_ = c.prototype;
    a.prototype = new d();
    a.prototype.constructor = a;
    a.base = function (a, d, h) {
      for (var f = Array(arguments.length - 2), g = 2; g < arguments.length; g++) f[g - 2] = arguments[g];
      return c.prototype[d].apply(a, f);
    };
  };
  e.scope = function (a) {
    if (e.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
    a.call(e.global);
  };
  e.defineClass = function (a, c) {
    var d = c.constructor,
      f = c.statics;
    d && d != Object.prototype.constructor || (d = function () {
      throw Error("cannot instantiate an interface (no constructor defined).");
    });
    d = e.defineClass.createSealingConstructor_(d, a);
    a && e.inherits(d, a);
    delete c.constructor;
    delete c.statics;
    e.defineClass.applyProperties_(d.prototype, c);
    null != f && (f instanceof Function ? f(d) : e.defineClass.applyProperties_(d, f));
    return d;
  };
  e.defineClass.SEAL_CLASS_INSTANCES = e.DEBUG;
  e.defineClass.createSealingConstructor_ = function (a, c) {
    function d() {
      var c = a.apply(this, arguments) || this;
      c[e.UID_PROPERTY_] = c[e.UID_PROPERTY_];
      this.constructor === d && f && Object.seal instanceof Function && Object.seal(c);
      return c;
    }
    if (!e.defineClass.SEAL_CLASS_INSTANCES) return a;
    var f = !e.defineClass.isUnsealable_(c);
    return d;
  };
  e.defineClass.isUnsealable_ = function (a) {
    return a && a.prototype && a.prototype[e.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
  };
  e.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  e.defineClass.applyProperties_ = function (a, c) {
    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    for (var f = 0; f < e.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; f++) d = e.defineClass.OBJECT_PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  };
  e.tagUnsealableClass = function () {};
  e.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
  e.TRUSTED_TYPES_POLICY_NAME = "";
  e.identity_ = function (a) {
    return a;
  };
  e.createTrustedTypesPolicy = function (a) {
    var c = null,
      d = e.global.trustedTypes || e.global.TrustedTypes;
    if (!d || !d.createPolicy) return c;
    try {
      c = d.createPolicy(a, {
        createHTML: e.identity_,
        createScript: e.identity_,
        createScriptURL: e.identity_,
        createURL: e.identity_
      });
    } catch (f) {
      e.logToConsole_(f.message);
    }
    return c;
  };
  e.TRUSTED_TYPES_POLICY_ = e.TRUSTED_TYPES_POLICY_NAME ? e.createTrustedTypesPolicy(e.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
  var l = {
    triggerEvent: function (...a) {
      window.santaApp.fire("sound-trigger", ...a);
    }
  };
  e.debug = {};
  e.debug.Error = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, e.debug.Error);else {
      const a = Error().stack;
      a && (this.stack = a);
    }
    a && (this.message = String(a));
    this.reportErrorToServer = !0;
  };
  e.inherits(e.debug.Error, Error);
  e.debug.Error.prototype.name = "CustomError";
  e.dom = {};
  e.dom.NodeType = {
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
  e.asserts = {};
  e.asserts.ENABLE_ASSERTS = e.DEBUG;
  e.asserts.AssertionError = function (a, c) {
    e.debug.Error.call(this, e.asserts.subs_(a, c));
    this.messagePattern = a;
  };
  e.inherits(e.asserts.AssertionError, e.debug.Error);
  e.asserts.AssertionError.prototype.name = "AssertionError";
  e.asserts.DEFAULT_ERROR_HANDLER = function (a) {
    throw a;
  };
  e.asserts.errorHandler_ = e.asserts.DEFAULT_ERROR_HANDLER;
  e.asserts.subs_ = function (a, c) {
    a = a.split("%s");
    for (var d = "", f = a.length - 1, g = 0; g < f; g++) d += a[g] + (g < c.length ? c[g] : "%s");
    return d + a[f];
  };
  e.asserts.doAssertFailure_ = function (a, c, d, f) {
    var g = "Assertion failed";
    if (d) {
      g += ": " + d;
      var h = f;
    } else a && (g += ": " + a, h = c);
    a = new e.asserts.AssertionError("" + g, h || []);
    e.asserts.errorHandler_(a);
  };
  e.asserts.setErrorHandler = function (a) {
    e.asserts.ENABLE_ASSERTS && (e.asserts.errorHandler_ = a);
  };
  e.asserts.assert = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && !a && e.asserts.doAssertFailure_("", null, c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertExists = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && null == a && e.asserts.doAssertFailure_("Expected to exist: %s.", [a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.fail = function (a, c) {
    e.asserts.ENABLE_ASSERTS && e.asserts.errorHandler_(new e.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
  };
  e.asserts.assertNumber = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && "number" !== typeof a && e.asserts.doAssertFailure_("Expected number but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertString = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && "string" !== typeof a && e.asserts.doAssertFailure_("Expected string but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertFunction = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && !e.isFunction(a) && e.asserts.doAssertFailure_("Expected function but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertObject = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && !e.isObject(a) && e.asserts.doAssertFailure_("Expected object but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertArray = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && !Array.isArray(a) && e.asserts.doAssertFailure_("Expected array but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertBoolean = function (a, c, d) {
    e.asserts.ENABLE_ASSERTS && "boolean" !== typeof a && e.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertElement = function (a, c, d) {
    !e.asserts.ENABLE_ASSERTS || e.isObject(a) && a.nodeType == e.dom.NodeType.ELEMENT || e.asserts.doAssertFailure_("Expected Element but got %s: %s.", [e.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertInstanceof = function (a, c, d, f) {
    !e.asserts.ENABLE_ASSERTS || a instanceof c || e.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [e.asserts.getType_(c), e.asserts.getType_(a)], d, Array.prototype.slice.call(arguments, 3));
    return a;
  };
  e.asserts.assertFinite = function (a, c, d) {
    !e.asserts.ENABLE_ASSERTS || "number" == typeof a && isFinite(a) || e.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a], c, Array.prototype.slice.call(arguments, 2));
    return a;
  };
  e.asserts.assertObjectPrototypeIsIntact = function () {
    for (var a in Object.prototype) e.asserts.fail(a + " should not be enumerable in Object.prototype.");
  };
  e.asserts.getType_ = function (a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
  };
  e.array = {};
  e.NATIVE_ARRAY_PROTOTYPES = e.TRUSTED_SITE;
  e.array.ASSUME_NATIVE_FUNCTIONS = 2012 < e.FEATURESET_YEAR;
  e.array.peek = function (a) {
    return a[a.length - 1];
  };
  e.array.last = e.array.peek;
  e.array.indexOf = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    return Array.prototype.indexOf.call(a, c, d);
  } : function (a, c, d) {
    d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
    if ("string" === typeof a) return "string" !== typeof c || 1 != c.length ? -1 : a.indexOf(c, d);
    for (; d < a.length; d++) if (d in a && a[d] === c) return d;
    return -1;
  };
  e.array.lastIndexOf = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    return Array.prototype.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
  } : function (a, c, d) {
    d = null == d ? a.length - 1 : d;
    0 > d && (d = Math.max(0, a.length + d));
    if ("string" === typeof a) return "string" !== typeof c || 1 != c.length ? -1 : a.lastIndexOf(c, d);
    for (; 0 <= d; d--) if (d in a && a[d] === c) return d;
    return -1;
  };
  e.array.forEach = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    Array.prototype.forEach.call(a, c, d);
  } : function (a, c, d) {
    for (var f = a.length, g = "string" === typeof a ? a.split("") : a, h = 0; h < f; h++) h in g && c.call(d, g[h], h, a);
  };
  e.array.forEachRight = function (a, c, d) {
    var f = a.length,
      g = "string" === typeof a ? a.split("") : a;
    for (--f; 0 <= f; --f) f in g && c.call(d, g[f], f, a);
  };
  e.array.filter = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    return Array.prototype.filter.call(a, c, d);
  } : function (a, c, d) {
    for (var f = a.length, g = [], h = 0, k = "string" === typeof a ? a.split("") : a, m = 0; m < f; m++) if (m in k) {
      var n = k[m];
      c.call(d, n, m, a) && (g[h++] = n);
    }
    return g;
  };
  e.array.map = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    return Array.prototype.map.call(a, c, d);
  } : function (a, c, d) {
    for (var f = a.length, g = Array(f), h = "string" === typeof a ? a.split("") : a, k = 0; k < f; k++) k in h && (g[k] = c.call(d, h[k], k, a));
    return g;
  };
  e.array.reduce = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (a, c, d, f) {
    e.asserts.assert(null != a.length);
    f && (c = e.bind(c, f));
    return Array.prototype.reduce.call(a, c, d);
  } : function (a, c, d, f) {
    var g = d;
    e.array.forEach(a, function (d, k) {
      g = c.call(f, g, d, k, a);
    });
    return g;
  };
  e.array.reduceRight = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (a, c, d, f) {
    e.asserts.assert(null != a.length);
    e.asserts.assert(null != c);
    f && (c = e.bind(c, f));
    return Array.prototype.reduceRight.call(a, c, d);
  } : function (a, c, d, f) {
    var g = d;
    e.array.forEachRight(a, function (d, k) {
      g = c.call(f, g, d, k, a);
    });
    return g;
  };
  e.array.some = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    return Array.prototype.some.call(a, c, d);
  } : function (a, c, d) {
    for (var f = a.length, g = "string" === typeof a ? a.split("") : a, h = 0; h < f; h++) if (h in g && c.call(d, g[h], h, a)) return !0;
    return !1;
  };
  e.array.every = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (a, c, d) {
    e.asserts.assert(null != a.length);
    return Array.prototype.every.call(a, c, d);
  } : function (a, c, d) {
    for (var f = a.length, g = "string" === typeof a ? a.split("") : a, h = 0; h < f; h++) if (h in g && !c.call(d, g[h], h, a)) return !1;
    return !0;
  };
  e.array.count = function (a, c, d) {
    var f = 0;
    e.array.forEach(a, function (a, h, k) {
      c.call(d, a, h, k) && ++f;
    }, d);
    return f;
  };
  e.array.find = function (a, c, d) {
    c = e.array.findIndex(a, c, d);
    return 0 > c ? null : "string" === typeof a ? a.charAt(c) : a[c];
  };
  e.array.findIndex = function (a, c, d) {
    for (var f = a.length, g = "string" === typeof a ? a.split("") : a, h = 0; h < f; h++) if (h in g && c.call(d, g[h], h, a)) return h;
    return -1;
  };
  e.array.findRight = function (a, c, d) {
    c = e.array.findIndexRight(a, c, d);
    return 0 > c ? null : "string" === typeof a ? a.charAt(c) : a[c];
  };
  e.array.findIndexRight = function (a, c, d) {
    var f = a.length,
      g = "string" === typeof a ? a.split("") : a;
    for (--f; 0 <= f; f--) if (f in g && c.call(d, g[f], f, a)) return f;
    return -1;
  };
  e.array.contains = function (a, c) {
    return 0 <= e.array.indexOf(a, c);
  };
  e.array.isEmpty = function (a) {
    return 0 == a.length;
  };
  e.array.clear = function (a) {
    if (!Array.isArray(a)) for (var c = a.length - 1; 0 <= c; c--) delete a[c];
    a.length = 0;
  };
  e.array.insert = function (a, c) {
    e.array.contains(a, c) || a.push(c);
  };
  e.array.insertAt = function (a, c, d) {
    e.array.splice(a, d, 0, c);
  };
  e.array.insertArrayAt = function (a, c, d) {
    e.partial(e.array.splice, a, d, 0).apply(null, c);
  };
  e.array.insertBefore = function (a, c, d) {
    var f;
    2 == arguments.length || 0 > (f = e.array.indexOf(a, d)) ? a.push(c) : e.array.insertAt(a, c, f);
  };
  e.array.remove = function (a, c) {
    c = e.array.indexOf(a, c);
    var d;
    (d = 0 <= c) && e.array.removeAt(a, c);
    return d;
  };
  e.array.removeLast = function (a, c) {
    c = e.array.lastIndexOf(a, c);
    return 0 <= c ? (e.array.removeAt(a, c), !0) : !1;
  };
  e.array.removeAt = function (a, c) {
    e.asserts.assert(null != a.length);
    return 1 == Array.prototype.splice.call(a, c, 1).length;
  };
  e.array.removeIf = function (a, c, d) {
    c = e.array.findIndex(a, c, d);
    return 0 <= c ? (e.array.removeAt(a, c), !0) : !1;
  };
  e.array.removeAllIf = function (a, c, d) {
    var f = 0;
    e.array.forEachRight(a, function (g, h) {
      c.call(d, g, h, a) && e.array.removeAt(a, h) && f++;
    });
    return f;
  };
  e.array.concat = function (a) {
    return Array.prototype.concat.apply([], arguments);
  };
  e.array.join = function (a) {
    return Array.prototype.concat.apply([], arguments);
  };
  e.array.toArray = function (a) {
    var c = a.length;
    if (0 < c) {
      for (var d = Array(c), f = 0; f < c; f++) d[f] = a[f];
      return d;
    }
    return [];
  };
  e.array.clone = e.array.toArray;
  e.array.extend = function (a, c) {
    for (var d = 1; d < arguments.length; d++) {
      var f = arguments[d];
      if (e.isArrayLike(f)) {
        var g = a.length || 0,
          h = f.length || 0;
        a.length = g + h;
        for (var k = 0; k < h; k++) a[g + k] = f[k];
      } else a.push(f);
    }
  };
  e.array.splice = function (a, c, d, f) {
    e.asserts.assert(null != a.length);
    return Array.prototype.splice.apply(a, e.array.slice(arguments, 1));
  };
  e.array.slice = function (a, c, d) {
    e.asserts.assert(null != a.length);
    return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d);
  };
  e.array.removeDuplicates = function (a, c, d) {
    function f(a) {
      return e.isObject(a) ? "o" + e.getUid(a) : (typeof a).charAt(0) + a;
    }
    c = c || a;
    d = d || f;
    for (var g = {}, h = 0, k = 0; k < a.length;) {
      var m = a[k++],
        n = d(m);
      Object.prototype.hasOwnProperty.call(g, n) || (g[n] = !0, c[h++] = m);
    }
    c.length = h;
  };
  e.array.binarySearch = function (a, c, d) {
    return e.array.binarySearch_(a, d || e.array.defaultCompare, !1, c);
  };
  e.array.binarySelect = function (a, c, d) {
    return e.array.binarySearch_(a, c, !0, void 0, d);
  };
  e.array.binarySearch_ = function (a, c, d, f, g) {
    for (var h = 0, k = a.length, m; h < k;) {
      var n = h + (k - h >>> 1);
      var p = d ? c.call(g, a[n], n, a) : c(f, a[n]);
      0 < p ? h = n + 1 : (k = n, m = !p);
    }
    return m ? h : -h - 1;
  };
  e.array.sort = function (a, c) {
    a.sort(c || e.array.defaultCompare);
  };
  e.array.stableSort = function (a, c) {
    for (var d = Array(a.length), f = 0; f < a.length; f++) d[f] = {
      index: f,
      value: a[f]
    };
    var g = c || e.array.defaultCompare;
    e.array.sort(d, function (a, c) {
      return g(a.value, c.value) || a.index - c.index;
    });
    for (f = 0; f < a.length; f++) a[f] = d[f].value;
  };
  e.array.sortByKey = function (a, c, d) {
    var f = d || e.array.defaultCompare;
    e.array.sort(a, function (a, d) {
      return f(c(a), c(d));
    });
  };
  e.array.sortObjectsByKey = function (a, c, d) {
    e.array.sortByKey(a, function (a) {
      return a[c];
    }, d);
  };
  e.array.isSorted = function (a, c, d) {
    c = c || e.array.defaultCompare;
    for (var f = 1; f < a.length; f++) {
      var g = c(a[f - 1], a[f]);
      if (0 < g || 0 == g && d) return !1;
    }
    return !0;
  };
  e.array.equals = function (a, c, d) {
    if (!e.isArrayLike(a) || !e.isArrayLike(c) || a.length != c.length) return !1;
    var f = a.length;
    d = d || e.array.defaultCompareEquality;
    for (var g = 0; g < f; g++) if (!d(a[g], c[g])) return !1;
    return !0;
  };
  e.array.compare3 = function (a, c, d) {
    d = d || e.array.defaultCompare;
    for (var f = Math.min(a.length, c.length), g = 0; g < f; g++) {
      var h = d(a[g], c[g]);
      if (0 != h) return h;
    }
    return e.array.defaultCompare(a.length, c.length);
  };
  e.array.defaultCompare = function (a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  };
  e.array.inverseDefaultCompare = function (a, c) {
    return -e.array.defaultCompare(a, c);
  };
  e.array.defaultCompareEquality = function (a, c) {
    return a === c;
  };
  e.array.binaryInsert = function (a, c, d) {
    d = e.array.binarySearch(a, c, d);
    return 0 > d ? (e.array.insertAt(a, c, -(d + 1)), !0) : !1;
  };
  e.array.binaryRemove = function (a, c, d) {
    c = e.array.binarySearch(a, c, d);
    return 0 <= c ? e.array.removeAt(a, c) : !1;
  };
  e.array.bucket = function (a, c, d) {
    for (var f = {}, g = 0; g < a.length; g++) {
      var h = a[g],
        k = c.call(d, h, g, a);
      void 0 !== k && (f[k] || (f[k] = [])).push(h);
    }
    return f;
  };
  e.array.toObject = function (a, c, d) {
    var f = {};
    e.array.forEach(a, function (g, h) {
      f[c.call(d, g, h, a)] = g;
    });
    return f;
  };
  e.array.range = function (a, c, d) {
    var f = [],
      g = 0,
      h = a;
    d = d || 1;
    void 0 !== c && (g = a, h = c);
    if (0 > d * (h - g)) return [];
    if (0 < d) for (a = g; a < h; a += d) f.push(a);else for (a = g; a > h; a += d) f.push(a);
    return f;
  };
  e.array.repeat = function (a, c) {
    for (var d = [], f = 0; f < c; f++) d[f] = a;
    return d;
  };
  e.array.flatten = function (a) {
    for (var c = [], d = 0; d < arguments.length; d++) {
      var f = arguments[d];
      if (Array.isArray(f)) for (var g = 0; g < f.length; g += 8192) {
        var h = e.array.slice(f, g, g + 8192);
        h = e.array.flatten.apply(null, h);
        for (var k = 0; k < h.length; k++) c.push(h[k]);
      } else c.push(f);
    }
    return c;
  };
  e.array.rotate = function (a, c) {
    e.asserts.assert(null != a.length);
    a.length && (c %= a.length, 0 < c ? Array.prototype.unshift.apply(a, a.splice(-c, c)) : 0 > c && Array.prototype.push.apply(a, a.splice(0, -c)));
    return a;
  };
  e.array.moveItem = function (a, c, d) {
    e.asserts.assert(0 <= c && c < a.length);
    e.asserts.assert(0 <= d && d < a.length);
    c = Array.prototype.splice.call(a, c, 1);
    Array.prototype.splice.call(a, d, 0, c[0]);
  };
  e.array.zip = function (a) {
    if (!arguments.length) return [];
    for (var c = [], d = arguments[0].length, f = 1; f < arguments.length; f++) arguments[f].length < d && (d = arguments[f].length);
    for (f = 0; f < d; f++) {
      for (var g = [], h = 0; h < arguments.length; h++) g.push(arguments[h][f]);
      c.push(g);
    }
    return c;
  };
  e.array.shuffle = function (a, c) {
    c = c || Math.random;
    for (var d = a.length - 1; 0 < d; d--) {
      var f = Math.floor(c() * (d + 1)),
        g = a[d];
      a[d] = a[f];
      a[f] = g;
    }
  };
  e.array.copyByIndex = function (a, c) {
    var d = [];
    e.array.forEach(c, function (c) {
      d.push(a[c]);
    });
    return d;
  };
  e.array.concatMap = function (a, c, d) {
    return e.array.concat.apply([], e.array.map(a, c, d));
  };
  e.string = {};
  e.string.internal = {};
  e.string.internal.startsWith = function (a, c) {
    return 0 == a.lastIndexOf(c, 0);
  };
  e.string.internal.endsWith = function (a, c) {
    const d = a.length - c.length;
    return 0 <= d && a.indexOf(c, d) == d;
  };
  e.string.internal.caseInsensitiveStartsWith = function (a, c) {
    return 0 == e.string.internal.caseInsensitiveCompare(c, a.substr(0, c.length));
  };
  e.string.internal.caseInsensitiveEndsWith = function (a, c) {
    return 0 == e.string.internal.caseInsensitiveCompare(c, a.substr(a.length - c.length, c.length));
  };
  e.string.internal.caseInsensitiveEquals = function (a, c) {
    return a.toLowerCase() == c.toLowerCase();
  };
  e.string.internal.isEmptyOrWhitespace = function (a) {
    return /^[\s\xa0]*$/.test(a);
  };
  e.string.internal.trim = e.TRUSTED_SITE && String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  e.string.internal.caseInsensitiveCompare = function (a, c) {
    a = String(a).toLowerCase();
    c = String(c).toLowerCase();
    return a < c ? -1 : a == c ? 0 : 1;
  };
  e.string.internal.newLineToBr = function (a, c) {
    return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
  };
  e.string.internal.htmlEscape = function (a, c) {
    if (c) a = a.replace(e.string.internal.AMP_RE_, "&amp;").replace(e.string.internal.LT_RE_, "&lt;").replace(e.string.internal.GT_RE_, "&gt;").replace(e.string.internal.QUOT_RE_, "&quot;").replace(e.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(e.string.internal.NULL_RE_, "&#0;");else {
      if (!e.string.internal.ALL_RE_.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(e.string.internal.AMP_RE_, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(e.string.internal.LT_RE_, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(e.string.internal.GT_RE_, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(e.string.internal.QUOT_RE_, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(e.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(e.string.internal.NULL_RE_, "&#0;"));
    }
    return a;
  };
  e.string.internal.AMP_RE_ = /&/g;
  e.string.internal.LT_RE_ = /</g;
  e.string.internal.GT_RE_ = />/g;
  e.string.internal.QUOT_RE_ = /"/g;
  e.string.internal.SINGLE_QUOTE_RE_ = /'/g;
  e.string.internal.NULL_RE_ = /\x00/g;
  e.string.internal.ALL_RE_ = /[\x00&<>"']/;
  e.string.internal.whitespaceEscape = function (a, c) {
    return e.string.internal.newLineToBr(a.replace(/  /g, " &#160;"), c);
  };
  e.string.internal.contains = function (a, c) {
    return -1 != a.indexOf(c);
  };
  e.string.internal.caseInsensitiveContains = function (a, c) {
    return e.string.internal.contains(a.toLowerCase(), c.toLowerCase());
  };
  e.string.internal.compareVersions = function (a, c) {
    var d = 0;
    a = e.string.internal.trim(String(a)).split(".");
    c = e.string.internal.trim(String(c)).split(".");
    const f = Math.max(a.length, c.length);
    for (let k = 0; 0 == d && k < f; k++) {
      var g = a[k] || "",
        h = c[k] || "";
      do {
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
        if (0 == g[0].length && 0 == h[0].length) break;
        d = 0 == g[1].length ? 0 : parseInt(g[1], 10);
        const a = 0 == h[1].length ? 0 : parseInt(h[1], 10);
        d = e.string.internal.compareElements_(d, a) || e.string.internal.compareElements_(0 == g[2].length, 0 == h[2].length) || e.string.internal.compareElements_(g[2], h[2]);
        g = g[3];
        h = h[3];
      } while (0 == d);
    }
    return d;
  };
  e.string.internal.compareElements_ = function (a, c) {
    return a < c ? -1 : a > c ? 1 : 0;
  };
  e.labs = {};
  e.labs.userAgent = {};
  e.labs.userAgent.util = {};
  e.labs.userAgent.util.getNativeUserAgentString_ = function () {
    var a = e.labs.userAgent.util.getNavigator_();
    return a && (a = a.userAgent) ? a : "";
  };
  e.labs.userAgent.util.getNavigator_ = function () {
    return e.global.navigator;
  };
  e.labs.userAgent.util.userAgent_ = e.labs.userAgent.util.getNativeUserAgentString_();
  e.labs.userAgent.util.setUserAgent = function (a) {
    e.labs.userAgent.util.userAgent_ = a || e.labs.userAgent.util.getNativeUserAgentString_();
  };
  e.labs.userAgent.util.getUserAgent = function () {
    return e.labs.userAgent.util.userAgent_;
  };
  e.labs.userAgent.util.matchUserAgent = function (a) {
    var c = e.labs.userAgent.util.getUserAgent();
    return e.string.internal.contains(c, a);
  };
  e.labs.userAgent.util.matchUserAgentIgnoreCase = function (a) {
    var c = e.labs.userAgent.util.getUserAgent();
    return e.string.internal.caseInsensitiveContains(c, a);
  };
  e.labs.userAgent.util.extractVersionTuples = function (a) {
    for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], f; f = c.exec(a);) d.push([f[1], f[2], f[3] || void 0]);
    return d;
  };
  e.object = {};
  e.object.is = function (a, c) {
    return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
  };
  e.object.forEach = function (a, c, d) {
    for (const f in a) c.call(d, a[f], f, a);
  };
  e.object.filter = function (a, c, d) {
    const f = {};
    for (const g in a) c.call(d, a[g], g, a) && (f[g] = a[g]);
    return f;
  };
  e.object.map = function (a, c, d) {
    const f = {};
    for (const g in a) f[g] = c.call(d, a[g], g, a);
    return f;
  };
  e.object.some = function (a, c, d) {
    for (const f in a) if (c.call(d, a[f], f, a)) return !0;
    return !1;
  };
  e.object.every = function (a, c, d) {
    for (const f in a) if (!c.call(d, a[f], f, a)) return !1;
    return !0;
  };
  e.object.getCount = function (a) {
    let c = 0;
    for (const d in a) c++;
    return c;
  };
  e.object.getAnyKey = function (a) {
    for (const c in a) return c;
  };
  e.object.getAnyValue = function (a) {
    for (const c in a) return a[c];
  };
  e.object.contains = function (a, c) {
    return e.object.containsValue(a, c);
  };
  e.object.getValues = function (a) {
    const c = [];
    let d = 0;
    for (const f in a) c[d++] = a[f];
    return c;
  };
  e.object.getKeys = function (a) {
    const c = [];
    let d = 0;
    for (const f in a) c[d++] = f;
    return c;
  };
  e.object.getValueByKeys = function (a, c) {
    var d = e.isArrayLike(c);
    const f = d ? c : arguments;
    for (d = d ? 0 : 1; d < f.length; d++) {
      if (null == a) return;
      a = a[f[d]];
    }
    return a;
  };
  e.object.containsKey = function (a, c) {
    return null !== a && c in a;
  };
  e.object.containsValue = function (a, c) {
    for (const d in a) if (a[d] == c) return !0;
    return !1;
  };
  e.object.findKey = function (a, c, d) {
    for (const f in a) if (c.call(d, a[f], f, a)) return f;
  };
  e.object.findValue = function (a, c, d) {
    return (c = e.object.findKey(a, c, d)) && a[c];
  };
  e.object.isEmpty = function (a) {
    for (const c in a) return !1;
    return !0;
  };
  e.object.clear = function (a) {
    for (const c in a) delete a[c];
  };
  e.object.remove = function (a, c) {
    let d;
    (d = c in a) && delete a[c];
    return d;
  };
  e.object.add = function (a, c, d) {
    if (null !== a && c in a) throw Error('The object already contains the key "' + c + '"');
    e.object.set(a, c, d);
  };
  e.object.get = function (a, c, d) {
    return null !== a && c in a ? a[c] : d;
  };
  e.object.set = function (a, c, d) {
    a[c] = d;
  };
  e.object.setIfUndefined = function (a, c, d) {
    return c in a ? a[c] : a[c] = d;
  };
  e.object.setWithReturnValueIfNotSet = function (a, c, d) {
    if (c in a) return a[c];
    d = d();
    return a[c] = d;
  };
  e.object.equals = function (a, c) {
    for (const d in a) if (!(d in c) || a[d] !== c[d]) return !1;
    for (const d in c) if (!(d in a)) return !1;
    return !0;
  };
  e.object.clone = function (a) {
    const c = {};
    for (const d in a) c[d] = a[d];
    return c;
  };
  e.object.unsafeClone = function (a) {
    var c = e.typeOf(a);
    if ("object" == c || "array" == c) {
      if (e.isFunction(a.clone)) return a.clone();
      c = "array" == c ? [] : {};
      for (const d in a) c[d] = e.object.unsafeClone(a[d]);
      return c;
    }
    return a;
  };
  e.object.transpose = function (a) {
    const c = {};
    for (const d in a) c[a[d]] = d;
    return c;
  };
  e.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  e.object.extend = function (a, c) {
    let d, f;
    for (let c = 1; c < arguments.length; c++) {
      f = arguments[c];
      for (d in f) a[d] = f[d];
      for (let c = 0; c < e.object.PROTOTYPE_FIELDS_.length; c++) d = e.object.PROTOTYPE_FIELDS_[c], Object.prototype.hasOwnProperty.call(f, d) && (a[d] = f[d]);
    }
  };
  e.object.create = function (a) {
    const c = arguments.length;
    if (1 == c && Array.isArray(arguments[0])) return e.object.create.apply(null, arguments[0]);
    if (c % 2) throw Error("Uneven number of arguments");
    const d = {};
    for (let a = 0; a < c; a += 2) d[arguments[a]] = arguments[a + 1];
    return d;
  };
  e.object.createSet = function (a) {
    const c = arguments.length;
    if (1 == c && Array.isArray(arguments[0])) return e.object.createSet.apply(null, arguments[0]);
    const d = {};
    for (let a = 0; a < c; a++) d[arguments[a]] = !0;
    return d;
  };
  e.object.createImmutableView = function (a) {
    let c = a;
    Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
    return c;
  };
  e.object.isImmutableView = function (a) {
    return !!Object.isFrozen && Object.isFrozen(a);
  };
  e.object.getAllPropertyNames = function (a, c, d) {
    if (!a) return [];
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return e.object.getKeys(a);
    const f = {};
    for (; a && (a !== Object.prototype || c) && (a !== Function.prototype || d);) {
      const c = Object.getOwnPropertyNames(a);
      for (let a = 0; a < c.length; a++) f[c[a]] = !0;
      a = Object.getPrototypeOf(a);
    }
    return e.object.getKeys(f);
  };
  e.object.getSuperClass = function (a) {
    return (a = Object.getPrototypeOf(a.prototype)) && a.constructor;
  };
  e.labs.userAgent.browser = {};
  e.labs.userAgent.browser.matchOpera_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Opera");
  };
  e.labs.userAgent.browser.matchIE_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Trident") || e.labs.userAgent.util.matchUserAgent("MSIE");
  };
  e.labs.userAgent.browser.matchEdgeHtml_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Edge");
  };
  e.labs.userAgent.browser.matchEdgeChromium_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Edg/");
  };
  e.labs.userAgent.browser.matchOperaChromium_ = function () {
    return e.labs.userAgent.util.matchUserAgent("OPR");
  };
  e.labs.userAgent.browser.matchFirefox_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Firefox") || e.labs.userAgent.util.matchUserAgent("FxiOS");
  };
  e.labs.userAgent.browser.matchSafari_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Safari") && !(e.labs.userAgent.browser.matchChrome_() || e.labs.userAgent.browser.matchCoast_() || e.labs.userAgent.browser.matchOpera_() || e.labs.userAgent.browser.matchEdgeHtml_() || e.labs.userAgent.browser.matchEdgeChromium_() || e.labs.userAgent.browser.matchOperaChromium_() || e.labs.userAgent.browser.matchFirefox_() || e.labs.userAgent.browser.isSilk() || e.labs.userAgent.util.matchUserAgent("Android"));
  };
  e.labs.userAgent.browser.matchCoast_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Coast");
  };
  e.labs.userAgent.browser.matchIosWebview_ = function () {
    return (e.labs.userAgent.util.matchUserAgent("iPad") || e.labs.userAgent.util.matchUserAgent("iPhone")) && !e.labs.userAgent.browser.matchSafari_() && !e.labs.userAgent.browser.matchChrome_() && !e.labs.userAgent.browser.matchCoast_() && !e.labs.userAgent.browser.matchFirefox_() && e.labs.userAgent.util.matchUserAgent("AppleWebKit");
  };
  e.labs.userAgent.browser.matchChrome_ = function () {
    return (e.labs.userAgent.util.matchUserAgent("Chrome") || e.labs.userAgent.util.matchUserAgent("CriOS")) && !e.labs.userAgent.browser.matchEdgeHtml_();
  };
  e.labs.userAgent.browser.matchAndroidBrowser_ = function () {
    return e.labs.userAgent.util.matchUserAgent("Android") && !(e.labs.userAgent.browser.isChrome() || e.labs.userAgent.browser.isFirefox() || e.labs.userAgent.browser.isOpera() || e.labs.userAgent.browser.isSilk());
  };
  e.labs.userAgent.browser.isOpera = e.labs.userAgent.browser.matchOpera_;
  e.labs.userAgent.browser.isIE = e.labs.userAgent.browser.matchIE_;
  e.labs.userAgent.browser.isEdge = e.labs.userAgent.browser.matchEdgeHtml_;
  e.labs.userAgent.browser.isEdgeChromium = e.labs.userAgent.browser.matchEdgeChromium_;
  e.labs.userAgent.browser.isOperaChromium = e.labs.userAgent.browser.matchOperaChromium_;
  e.labs.userAgent.browser.isFirefox = e.labs.userAgent.browser.matchFirefox_;
  e.labs.userAgent.browser.isSafari = e.labs.userAgent.browser.matchSafari_;
  e.labs.userAgent.browser.isCoast = e.labs.userAgent.browser.matchCoast_;
  e.labs.userAgent.browser.isIosWebview = e.labs.userAgent.browser.matchIosWebview_;
  e.labs.userAgent.browser.isChrome = e.labs.userAgent.browser.matchChrome_;
  e.labs.userAgent.browser.isAndroidBrowser = e.labs.userAgent.browser.matchAndroidBrowser_;
  e.labs.userAgent.browser.isSilk = function () {
    return e.labs.userAgent.util.matchUserAgent("Silk");
  };
  e.labs.userAgent.browser.getVersion = function () {
    function a(a) {
      a = e.array.find(a, f);
      return d[a] || "";
    }
    var c = e.labs.userAgent.util.getUserAgent();
    if (e.labs.userAgent.browser.isIE()) return e.labs.userAgent.browser.getIEVersion_(c);
    c = e.labs.userAgent.util.extractVersionTuples(c);
    var d = {};
    e.array.forEach(c, function (a) {
      d[a[0]] = a[1];
    });
    var f = e.partial(e.object.containsKey, d);
    return e.labs.userAgent.browser.isOpera() ? a(["Version", "Opera"]) : e.labs.userAgent.browser.isEdge() ? a(["Edge"]) : e.labs.userAgent.browser.isEdgeChromium() ? a(["Edg"]) : e.labs.userAgent.browser.isChrome() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (c = c[2]) && c[1] || "";
  };
  e.labs.userAgent.browser.isVersionOrHigher = function (a) {
    return 0 <= e.string.internal.compareVersions(e.labs.userAgent.browser.getVersion(), a);
  };
  e.labs.userAgent.browser.getIEVersion_ = function (a) {
    var c = /rv: *([\d\.]*)/.exec(a);
    if (c && c[1]) return c[1];
    c = "";
    var d = /MSIE +([\d\.]+)/.exec(a);
    if (d && d[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) switch (a[1]) {
        case "4.0":
          c = "8.0";
          break;
        case "5.0":
          c = "9.0";
          break;
        case "6.0":
          c = "10.0";
          break;
        case "7.0":
          c = "11.0";
      } else c = "7.0";
    } else c = d[1];
    return c;
  };
  e.dom.asserts = {};
  e.dom.asserts.assertIsLocation = function (a) {
    if (e.asserts.ENABLE_ASSERTS) {
      var c = e.dom.asserts.getWindow_(a);
      c && (!a || !(a instanceof c.Location) && a instanceof c.Element) && e.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", e.dom.asserts.debugStringForType_(a));
    }
    return a;
  };
  e.dom.asserts.assertIsElementType_ = function (a, c) {
    if (e.asserts.ENABLE_ASSERTS) {
      var d = e.dom.asserts.getWindow_(a);
      d && "undefined" != typeof d[c] && (a && (a instanceof d[c] || !(a instanceof d.Location || a instanceof d.Element)) || e.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", c, e.dom.asserts.debugStringForType_(a)));
    }
    return a;
  };
  e.dom.asserts.assertIsHTMLAnchorElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLAnchorElement");
  };
  e.dom.asserts.assertIsHTMLButtonElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLButtonElement");
  };
  e.dom.asserts.assertIsHTMLLinkElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLLinkElement");
  };
  e.dom.asserts.assertIsHTMLImageElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLImageElement");
  };
  e.dom.asserts.assertIsHTMLAudioElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLAudioElement");
  };
  e.dom.asserts.assertIsHTMLVideoElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLVideoElement");
  };
  e.dom.asserts.assertIsHTMLInputElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLInputElement");
  };
  e.dom.asserts.assertIsHTMLTextAreaElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLTextAreaElement");
  };
  e.dom.asserts.assertIsHTMLCanvasElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLCanvasElement");
  };
  e.dom.asserts.assertIsHTMLEmbedElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLEmbedElement");
  };
  e.dom.asserts.assertIsHTMLFormElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLFormElement");
  };
  e.dom.asserts.assertIsHTMLFrameElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLFrameElement");
  };
  e.dom.asserts.assertIsHTMLIFrameElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLIFrameElement");
  };
  e.dom.asserts.assertIsHTMLObjectElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLObjectElement");
  };
  e.dom.asserts.assertIsHTMLScriptElement = function (a) {
    return e.dom.asserts.assertIsElementType_(a, "HTMLScriptElement");
  };
  e.dom.asserts.debugStringForType_ = function (a) {
    if (e.isObject(a)) try {
      return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
    } catch (c) {
      return "<object could not be stringified>";
    } else return void 0 === a ? "undefined" : null === a ? "null" : typeof a;
  };
  e.dom.asserts.getWindow_ = function (a) {
    try {
      var c = a && a.ownerDocument,
        d = c && (c.defaultView || c.parentWindow);
      d = d || e.global;
      if (d.Element && d.Location) return d;
    } catch (f) {}
    return null;
  };
  e.functions = {};
  e.functions.constant = function (a) {
    return function () {
      return a;
    };
  };
  e.functions.FALSE = function () {
    return !1;
  };
  e.functions.TRUE = function () {
    return !0;
  };
  e.functions.NULL = function () {
    return null;
  };
  e.functions.identity = function (a) {
    return a;
  };
  e.functions.error = function (a) {
    return function () {
      throw Error(a);
    };
  };
  e.functions.fail = function (a) {
    return function () {
      throw a;
    };
  };
  e.functions.lock = function (a, c) {
    c = c || 0;
    return function () {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
    };
  };
  e.functions.nth = function (a) {
    return function () {
      return arguments[a];
    };
  };
  e.functions.partialRight = function (a, c) {
    const d = Array.prototype.slice.call(arguments, 1);
    return function () {
      const c = Array.prototype.slice.call(arguments);
      c.push.apply(c, d);
      return a.apply(this, c);
    };
  };
  e.functions.withReturnValue = function (a, c) {
    return e.functions.sequence(a, e.functions.constant(c));
  };
  e.functions.equalTo = function (a, c) {
    return function (d) {
      return c ? a == d : a === d;
    };
  };
  e.functions.compose = function (a, c) {
    const d = arguments,
      f = d.length;
    return function () {
      let a;
      f && (a = d[f - 1].apply(this, arguments));
      for (let c = f - 2; 0 <= c; c--) a = d[c].call(this, a);
      return a;
    };
  };
  e.functions.sequence = function (a) {
    const c = arguments,
      d = c.length;
    return function () {
      let a;
      for (let f = 0; f < d; f++) a = c[f].apply(this, arguments);
      return a;
    };
  };
  e.functions.and = function (a) {
    const c = arguments,
      d = c.length;
    return function () {
      for (let a = 0; a < d; a++) if (!c[a].apply(this, arguments)) return !1;
      return !0;
    };
  };
  e.functions.or = function (a) {
    const c = arguments,
      d = c.length;
    return function () {
      for (let a = 0; a < d; a++) if (c[a].apply(this, arguments)) return !0;
      return !1;
    };
  };
  e.functions.not = function (a) {
    return function () {
      return !a.apply(this, arguments);
    };
  };
  e.functions.create = function (a, c) {
    function d() {}
    d.prototype = a.prototype;
    const f = new d();
    a.apply(f, Array.prototype.slice.call(arguments, 1));
    return f;
  };
  e.functions.CACHE_RETURN_VALUE = !0;
  e.functions.cacheReturnValue = function (a) {
    let c = !1,
      d;
    return function () {
      if (!e.functions.CACHE_RETURN_VALUE) return a();
      c || (d = a(), c = !0);
      return d;
    };
  };
  e.functions.once = function (a) {
    let c = a;
    return function () {
      if (c) {
        const a = c;
        c = null;
        a();
      }
    };
  };
  e.functions.debounce = function (a, c, d) {
    let f = 0;
    return function (g) {
      e.global.clearTimeout(f);
      const h = arguments;
      f = e.global.setTimeout(function () {
        a.apply(d, h);
      }, c);
    };
  };
  e.functions.throttle = function (a, c, d) {
    function f() {
      h = e.global.setTimeout(g, c);
      a.apply(d, m);
    }
    function g() {
      h = 0;
      k && (k = !1, f());
    }
    let h = 0,
      k = !1,
      m = [];
    return function (a) {
      m = arguments;
      h ? k = !0 : f();
    };
  };
  e.functions.rateLimit = function (a, c, d) {
    function f() {
      g = 0;
    }
    let g = 0;
    return function (h) {
      g || (g = e.global.setTimeout(f, c), a.apply(d, arguments));
    };
  };
  e.dom.HtmlElement = function () {};
  e.dom.TagName = function (a) {
    this.tagName_ = a;
  };
  e.dom.TagName.prototype.toString = function () {
    return this.tagName_;
  };
  e.dom.TagName.A = new e.dom.TagName("A");
  e.dom.TagName.ABBR = new e.dom.TagName("ABBR");
  e.dom.TagName.ACRONYM = new e.dom.TagName("ACRONYM");
  e.dom.TagName.ADDRESS = new e.dom.TagName("ADDRESS");
  e.dom.TagName.APPLET = new e.dom.TagName("APPLET");
  e.dom.TagName.AREA = new e.dom.TagName("AREA");
  e.dom.TagName.ARTICLE = new e.dom.TagName("ARTICLE");
  e.dom.TagName.ASIDE = new e.dom.TagName("ASIDE");
  e.dom.TagName.AUDIO = new e.dom.TagName("AUDIO");
  e.dom.TagName.B = new e.dom.TagName("B");
  e.dom.TagName.BASE = new e.dom.TagName("BASE");
  e.dom.TagName.BASEFONT = new e.dom.TagName("BASEFONT");
  e.dom.TagName.BDI = new e.dom.TagName("BDI");
  e.dom.TagName.BDO = new e.dom.TagName("BDO");
  e.dom.TagName.BIG = new e.dom.TagName("BIG");
  e.dom.TagName.BLOCKQUOTE = new e.dom.TagName("BLOCKQUOTE");
  e.dom.TagName.BODY = new e.dom.TagName("BODY");
  e.dom.TagName.BR = new e.dom.TagName("BR");
  e.dom.TagName.BUTTON = new e.dom.TagName("BUTTON");
  e.dom.TagName.CANVAS = new e.dom.TagName("CANVAS");
  e.dom.TagName.CAPTION = new e.dom.TagName("CAPTION");
  e.dom.TagName.CENTER = new e.dom.TagName("CENTER");
  e.dom.TagName.CITE = new e.dom.TagName("CITE");
  e.dom.TagName.CODE = new e.dom.TagName("CODE");
  e.dom.TagName.COL = new e.dom.TagName("COL");
  e.dom.TagName.COLGROUP = new e.dom.TagName("COLGROUP");
  e.dom.TagName.COMMAND = new e.dom.TagName("COMMAND");
  e.dom.TagName.DATA = new e.dom.TagName("DATA");
  e.dom.TagName.DATALIST = new e.dom.TagName("DATALIST");
  e.dom.TagName.DD = new e.dom.TagName("DD");
  e.dom.TagName.DEL = new e.dom.TagName("DEL");
  e.dom.TagName.DETAILS = new e.dom.TagName("DETAILS");
  e.dom.TagName.DFN = new e.dom.TagName("DFN");
  e.dom.TagName.DIALOG = new e.dom.TagName("DIALOG");
  e.dom.TagName.DIR = new e.dom.TagName("DIR");
  e.dom.TagName.DIV = new e.dom.TagName("DIV");
  e.dom.TagName.DL = new e.dom.TagName("DL");
  e.dom.TagName.DT = new e.dom.TagName("DT");
  e.dom.TagName.EM = new e.dom.TagName("EM");
  e.dom.TagName.EMBED = new e.dom.TagName("EMBED");
  e.dom.TagName.FIELDSET = new e.dom.TagName("FIELDSET");
  e.dom.TagName.FIGCAPTION = new e.dom.TagName("FIGCAPTION");
  e.dom.TagName.FIGURE = new e.dom.TagName("FIGURE");
  e.dom.TagName.FONT = new e.dom.TagName("FONT");
  e.dom.TagName.FOOTER = new e.dom.TagName("FOOTER");
  e.dom.TagName.FORM = new e.dom.TagName("FORM");
  e.dom.TagName.FRAME = new e.dom.TagName("FRAME");
  e.dom.TagName.FRAMESET = new e.dom.TagName("FRAMESET");
  e.dom.TagName.H1 = new e.dom.TagName("H1");
  e.dom.TagName.H2 = new e.dom.TagName("H2");
  e.dom.TagName.H3 = new e.dom.TagName("H3");
  e.dom.TagName.H4 = new e.dom.TagName("H4");
  e.dom.TagName.H5 = new e.dom.TagName("H5");
  e.dom.TagName.H6 = new e.dom.TagName("H6");
  e.dom.TagName.HEAD = new e.dom.TagName("HEAD");
  e.dom.TagName.HEADER = new e.dom.TagName("HEADER");
  e.dom.TagName.HGROUP = new e.dom.TagName("HGROUP");
  e.dom.TagName.HR = new e.dom.TagName("HR");
  e.dom.TagName.HTML = new e.dom.TagName("HTML");
  e.dom.TagName.I = new e.dom.TagName("I");
  e.dom.TagName.IFRAME = new e.dom.TagName("IFRAME");
  e.dom.TagName.IMG = new e.dom.TagName("IMG");
  e.dom.TagName.INPUT = new e.dom.TagName("INPUT");
  e.dom.TagName.INS = new e.dom.TagName("INS");
  e.dom.TagName.ISINDEX = new e.dom.TagName("ISINDEX");
  e.dom.TagName.KBD = new e.dom.TagName("KBD");
  e.dom.TagName.KEYGEN = new e.dom.TagName("KEYGEN");
  e.dom.TagName.LABEL = new e.dom.TagName("LABEL");
  e.dom.TagName.LEGEND = new e.dom.TagName("LEGEND");
  e.dom.TagName.LI = new e.dom.TagName("LI");
  e.dom.TagName.LINK = new e.dom.TagName("LINK");
  e.dom.TagName.MAIN = new e.dom.TagName("MAIN");
  e.dom.TagName.MAP = new e.dom.TagName("MAP");
  e.dom.TagName.MARK = new e.dom.TagName("MARK");
  e.dom.TagName.MATH = new e.dom.TagName("MATH");
  e.dom.TagName.MENU = new e.dom.TagName("MENU");
  e.dom.TagName.MENUITEM = new e.dom.TagName("MENUITEM");
  e.dom.TagName.META = new e.dom.TagName("META");
  e.dom.TagName.METER = new e.dom.TagName("METER");
  e.dom.TagName.NAV = new e.dom.TagName("NAV");
  e.dom.TagName.NOFRAMES = new e.dom.TagName("NOFRAMES");
  e.dom.TagName.NOSCRIPT = new e.dom.TagName("NOSCRIPT");
  e.dom.TagName.OBJECT = new e.dom.TagName("OBJECT");
  e.dom.TagName.OL = new e.dom.TagName("OL");
  e.dom.TagName.OPTGROUP = new e.dom.TagName("OPTGROUP");
  e.dom.TagName.OPTION = new e.dom.TagName("OPTION");
  e.dom.TagName.OUTPUT = new e.dom.TagName("OUTPUT");
  e.dom.TagName.P = new e.dom.TagName("P");
  e.dom.TagName.PARAM = new e.dom.TagName("PARAM");
  e.dom.TagName.PICTURE = new e.dom.TagName("PICTURE");
  e.dom.TagName.PRE = new e.dom.TagName("PRE");
  e.dom.TagName.PROGRESS = new e.dom.TagName("PROGRESS");
  e.dom.TagName.Q = new e.dom.TagName("Q");
  e.dom.TagName.RP = new e.dom.TagName("RP");
  e.dom.TagName.RT = new e.dom.TagName("RT");
  e.dom.TagName.RTC = new e.dom.TagName("RTC");
  e.dom.TagName.RUBY = new e.dom.TagName("RUBY");
  e.dom.TagName.S = new e.dom.TagName("S");
  e.dom.TagName.SAMP = new e.dom.TagName("SAMP");
  e.dom.TagName.SCRIPT = new e.dom.TagName("SCRIPT");
  e.dom.TagName.SECTION = new e.dom.TagName("SECTION");
  e.dom.TagName.SELECT = new e.dom.TagName("SELECT");
  e.dom.TagName.SMALL = new e.dom.TagName("SMALL");
  e.dom.TagName.SOURCE = new e.dom.TagName("SOURCE");
  e.dom.TagName.SPAN = new e.dom.TagName("SPAN");
  e.dom.TagName.STRIKE = new e.dom.TagName("STRIKE");
  e.dom.TagName.STRONG = new e.dom.TagName("STRONG");
  e.dom.TagName.STYLE = new e.dom.TagName("STYLE");
  e.dom.TagName.SUB = new e.dom.TagName("SUB");
  e.dom.TagName.SUMMARY = new e.dom.TagName("SUMMARY");
  e.dom.TagName.SUP = new e.dom.TagName("SUP");
  e.dom.TagName.SVG = new e.dom.TagName("SVG");
  e.dom.TagName.TABLE = new e.dom.TagName("TABLE");
  e.dom.TagName.TBODY = new e.dom.TagName("TBODY");
  e.dom.TagName.TD = new e.dom.TagName("TD");
  e.dom.TagName.TEMPLATE = new e.dom.TagName("TEMPLATE");
  e.dom.TagName.TEXTAREA = new e.dom.TagName("TEXTAREA");
  e.dom.TagName.TFOOT = new e.dom.TagName("TFOOT");
  e.dom.TagName.TH = new e.dom.TagName("TH");
  e.dom.TagName.THEAD = new e.dom.TagName("THEAD");
  e.dom.TagName.TIME = new e.dom.TagName("TIME");
  e.dom.TagName.TITLE = new e.dom.TagName("TITLE");
  e.dom.TagName.TR = new e.dom.TagName("TR");
  e.dom.TagName.TRACK = new e.dom.TagName("TRACK");
  e.dom.TagName.TT = new e.dom.TagName("TT");
  e.dom.TagName.U = new e.dom.TagName("U");
  e.dom.TagName.UL = new e.dom.TagName("UL");
  e.dom.TagName.VAR = new e.dom.TagName("VAR");
  e.dom.TagName.VIDEO = new e.dom.TagName("VIDEO");
  e.dom.TagName.WBR = new e.dom.TagName("WBR");
  e.dom.tags = {};
  e.dom.tags.VOID_TAGS_ = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };
  e.dom.tags.isVoidTag = function (a) {
    return !0 === e.dom.tags.VOID_TAGS_[a];
  };
  e.html = {};
  e.html.trustedtypes = {};
  e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = e.TRUSTED_TYPES_POLICY_NAME ? e.createTrustedTypesPolicy(e.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
  e.string.TypedString = function () {};
  e.string.Const = function (a, c) {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a === e.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && c || "";
    this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = e.string.Const.TYPE_MARKER_;
  };
  e.string.Const.prototype.implementsGoogStringTypedString = !0;
  e.string.Const.prototype.getTypedStringValue = function () {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  };
  e.DEBUG && (e.string.Const.prototype.toString = function () {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
  });
  e.string.Const.unwrap = function (a) {
    if (a instanceof e.string.Const && a.constructor === e.string.Const && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === e.string.Const.TYPE_MARKER_) return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    e.asserts.fail("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  };
  e.string.Const.from = function (a) {
    return new e.string.Const(e.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a);
  };
  e.string.Const.TYPE_MARKER_ = {};
  e.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  e.string.Const.EMPTY = e.string.Const.from("");
  e.html.SafeScript = function () {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
    this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
  };
  e.html.SafeScript.prototype.implementsGoogStringTypedString = !0;
  e.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  e.html.SafeScript.fromConstant = function (a) {
    a = e.string.Const.unwrap(a);
    return 0 === a.length ? e.html.SafeScript.EMPTY : e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeScript.fromConstantAndArgs = function (a, c) {
    for (var d = [], f = 1; f < arguments.length; f++) d.push(e.html.SafeScript.stringify_(arguments[f]));
    return e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + e.string.Const.unwrap(a) + ")(" + d.join(", ") + ");");
  };
  e.html.SafeScript.fromJson = function (a) {
    return e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e.html.SafeScript.stringify_(a));
  };
  e.html.SafeScript.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
  };
  e.DEBUG && (e.html.SafeScript.prototype.toString = function () {
    return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
  });
  e.html.SafeScript.unwrap = function (a) {
    return e.html.SafeScript.unwrapTrustedScript(a).toString();
  };
  e.html.SafeScript.unwrapTrustedScript = function (a) {
    if (a instanceof e.html.SafeScript && a.constructor === e.html.SafeScript && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;
    e.asserts.fail("expected object of type SafeScript, got '" + a + "' of type " + e.typeOf(a));
    return "type_error:SafeScript";
  };
  e.html.SafeScript.stringify_ = function (a) {
    return JSON.stringify(a).replace(/</g, "\\x3c");
  };
  e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (a) {
    return new e.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a);
  };
  e.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (a) {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a) : a;
    return this;
  };
  e.html.SafeScript.EMPTY = e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  e.fs = {};
  e.fs.url = {};
  e.fs.url.createObjectUrl = function (a) {
    return e.fs.url.getUrlObject_().createObjectURL(a);
  };
  e.fs.url.revokeObjectUrl = function (a) {
    e.fs.url.getUrlObject_().revokeObjectURL(a);
  };
  e.fs.url.UrlObject_ = function () {};
  e.fs.url.UrlObject_.prototype.createObjectURL = function () {};
  e.fs.url.UrlObject_.prototype.revokeObjectURL = function () {};
  e.fs.url.getUrlObject_ = function () {
    const a = e.fs.url.findUrlObject_();
    if (null != a) return a;
    throw Error("This browser doesn't seem to support blob URLs");
  };
  e.fs.url.findUrlObject_ = function () {
    return void 0 !== e.global.URL && void 0 !== e.global.URL.createObjectURL ? e.global.URL : void 0 !== e.global.webkitURL && void 0 !== e.global.webkitURL.createObjectURL ? e.global.webkitURL : void 0 !== e.global.createObjectURL ? e.global : null;
  };
  e.fs.url.browserSupportsObjectUrls = function () {
    return null != e.fs.url.findUrlObject_();
  };
  e.fs.blob = {};
  e.fs.blob.getBlob = function (a) {
    var c = e.global.BlobBuilder || e.global.WebKitBlobBuilder;
    if (void 0 !== c) {
      c = new c();
      for (var d = 0; d < arguments.length; d++) c.append(arguments[d]);
      return c.getBlob();
    }
    return e.fs.blob.getBlobWithProperties(e.array.toArray(arguments));
  };
  e.fs.blob.getBlobWithProperties = function (a, c, d) {
    var f = e.global.BlobBuilder || e.global.WebKitBlobBuilder;
    if (void 0 !== f) {
      f = new f();
      for (var g = 0; g < a.length; g++) f.append(a[g], d);
      return f.getBlob(c);
    }
    if (void 0 !== e.global.Blob) return f = {}, c && (f.type = c), d && (f.endings = d), new Blob(a, f);
    throw Error("This browser doesn't seem to support creating Blobs");
  };
  e.i18n = {};
  e.i18n.bidi = {};
  e.i18n.bidi.FORCE_RTL = !1;
  e.i18n.bidi.IS_RTL = e.i18n.bidi.FORCE_RTL || ("ar" == e.LOCALE.substring(0, 2).toLowerCase() || "fa" == e.LOCALE.substring(0, 2).toLowerCase() || "he" == e.LOCALE.substring(0, 2).toLowerCase() || "iw" == e.LOCALE.substring(0, 2).toLowerCase() || "ps" == e.LOCALE.substring(0, 2).toLowerCase() || "sd" == e.LOCALE.substring(0, 2).toLowerCase() || "ug" == e.LOCALE.substring(0, 2).toLowerCase() || "ur" == e.LOCALE.substring(0, 2).toLowerCase() || "yi" == e.LOCALE.substring(0, 2).toLowerCase()) && (2 == e.LOCALE.length || "-" == e.LOCALE.substring(2, 3) || "_" == e.LOCALE.substring(2, 3)) || 3 <= e.LOCALE.length && "ckb" == e.LOCALE.substring(0, 3).toLowerCase() && (3 == e.LOCALE.length || "-" == e.LOCALE.substring(3, 4) || "_" == e.LOCALE.substring(3, 4)) || 7 <= e.LOCALE.length && ("-" == e.LOCALE.substring(2, 3) || "_" == e.LOCALE.substring(2, 3)) && ("adlm" == e.LOCALE.substring(3, 7).toLowerCase() || "arab" == e.LOCALE.substring(3, 7).toLowerCase() || "hebr" == e.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == e.LOCALE.substring(3, 7).toLowerCase() || "rohg" == e.LOCALE.substring(3, 7).toLowerCase() || "thaa" == e.LOCALE.substring(3, 7).toLowerCase()) || 8 <= e.LOCALE.length && ("-" == e.LOCALE.substring(3, 4) || "_" == e.LOCALE.substring(3, 4)) && ("adlm" == e.LOCALE.substring(4, 8).toLowerCase() || "arab" == e.LOCALE.substring(4, 8).toLowerCase() || "hebr" == e.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == e.LOCALE.substring(4, 8).toLowerCase() || "rohg" == e.LOCALE.substring(4, 8).toLowerCase() || "thaa" == e.LOCALE.substring(4, 8).toLowerCase());
  e.i18n.bidi.Format = {
    LRE: "\u202a",
    RLE: "\u202b",
    PDF: "\u202c",
    LRM: "\u200e",
    RLM: "\u200f"
  };
  e.i18n.bidi.Dir = {
    LTR: 1,
    RTL: -1,
    NEUTRAL: 0
  };
  e.i18n.bidi.RIGHT = "right";
  e.i18n.bidi.LEFT = "left";
  e.i18n.bidi.I18N_RIGHT = e.i18n.bidi.IS_RTL ? e.i18n.bidi.LEFT : e.i18n.bidi.RIGHT;
  e.i18n.bidi.I18N_LEFT = e.i18n.bidi.IS_RTL ? e.i18n.bidi.RIGHT : e.i18n.bidi.LEFT;
  e.i18n.bidi.toDir = function (a, c) {
    return "number" == typeof a ? 0 < a ? e.i18n.bidi.Dir.LTR : 0 > a ? e.i18n.bidi.Dir.RTL : c ? null : e.i18n.bidi.Dir.NEUTRAL : null == a ? null : a ? e.i18n.bidi.Dir.RTL : e.i18n.bidi.Dir.LTR;
  };
  e.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
  e.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
  e.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
  e.i18n.bidi.stripHtmlIfNeeded_ = function (a, c) {
    return c ? a.replace(e.i18n.bidi.htmlSkipReg_, "") : a;
  };
  e.i18n.bidi.rtlCharReg_ = new RegExp("[" + e.i18n.bidi.rtlChars_ + "]");
  e.i18n.bidi.ltrCharReg_ = new RegExp("[" + e.i18n.bidi.ltrChars_ + "]");
  e.i18n.bidi.hasAnyRtl = function (a, c) {
    return e.i18n.bidi.rtlCharReg_.test(e.i18n.bidi.stripHtmlIfNeeded_(a, c));
  };
  e.i18n.bidi.hasRtlChar = e.i18n.bidi.hasAnyRtl;
  e.i18n.bidi.hasAnyLtr = function (a, c) {
    return e.i18n.bidi.ltrCharReg_.test(e.i18n.bidi.stripHtmlIfNeeded_(a, c));
  };
  e.i18n.bidi.ltrRe_ = new RegExp("^[" + e.i18n.bidi.ltrChars_ + "]");
  e.i18n.bidi.rtlRe_ = new RegExp("^[" + e.i18n.bidi.rtlChars_ + "]");
  e.i18n.bidi.isRtlChar = function (a) {
    return e.i18n.bidi.rtlRe_.test(a);
  };
  e.i18n.bidi.isLtrChar = function (a) {
    return e.i18n.bidi.ltrRe_.test(a);
  };
  e.i18n.bidi.isNeutralChar = function (a) {
    return !e.i18n.bidi.isLtrChar(a) && !e.i18n.bidi.isRtlChar(a);
  };
  e.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + e.i18n.bidi.rtlChars_ + "]*[" + e.i18n.bidi.ltrChars_ + "]");
  e.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + e.i18n.bidi.ltrChars_ + "]*[" + e.i18n.bidi.rtlChars_ + "]");
  e.i18n.bidi.startsWithRtl = function (a, c) {
    return e.i18n.bidi.rtlDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(a, c));
  };
  e.i18n.bidi.isRtlText = e.i18n.bidi.startsWithRtl;
  e.i18n.bidi.startsWithLtr = function (a, c) {
    return e.i18n.bidi.ltrDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(a, c));
  };
  e.i18n.bidi.isLtrText = e.i18n.bidi.startsWithLtr;
  e.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
  e.i18n.bidi.isNeutralText = function (a, c) {
    a = e.i18n.bidi.stripHtmlIfNeeded_(a, c);
    return e.i18n.bidi.isRequiredLtrRe_.test(a) || !e.i18n.bidi.hasAnyLtr(a) && !e.i18n.bidi.hasAnyRtl(a);
  };
  e.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + e.i18n.bidi.ltrChars_ + "][^" + e.i18n.bidi.rtlChars_ + "]*$");
  e.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + e.i18n.bidi.rtlChars_ + "][^" + e.i18n.bidi.ltrChars_ + "]*$");
  e.i18n.bidi.endsWithLtr = function (a, c) {
    return e.i18n.bidi.ltrExitDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(a, c));
  };
  e.i18n.bidi.isLtrExitText = e.i18n.bidi.endsWithLtr;
  e.i18n.bidi.endsWithRtl = function (a, c) {
    return e.i18n.bidi.rtlExitDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(a, c));
  };
  e.i18n.bidi.isRtlExitText = e.i18n.bidi.endsWithRtl;
  e.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
  e.i18n.bidi.isRtlLanguage = function (a) {
    return e.i18n.bidi.rtlLocalesRe_.test(a);
  };
  e.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
  e.i18n.bidi.guardBracketInText = function (a, c) {
    c = (void 0 === c ? e.i18n.bidi.hasAnyRtl(a) : c) ? e.i18n.bidi.Format.RLM : e.i18n.bidi.Format.LRM;
    return a.replace(e.i18n.bidi.bracketGuardTextRe_, c + "$&" + c);
  };
  e.i18n.bidi.enforceRtlInHtml = function (a) {
    return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>";
  };
  e.i18n.bidi.enforceRtlInText = function (a) {
    return e.i18n.bidi.Format.RLE + a + e.i18n.bidi.Format.PDF;
  };
  e.i18n.bidi.enforceLtrInHtml = function (a) {
    return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>";
  };
  e.i18n.bidi.enforceLtrInText = function (a) {
    return e.i18n.bidi.Format.LRE + a + e.i18n.bidi.Format.PDF;
  };
  e.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
  e.i18n.bidi.leftRe_ = /left/gi;
  e.i18n.bidi.rightRe_ = /right/gi;
  e.i18n.bidi.tempRe_ = /%%%%/g;
  e.i18n.bidi.mirrorCSS = function (a) {
    return a.replace(e.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(e.i18n.bidi.leftRe_, "%%%%").replace(e.i18n.bidi.rightRe_, e.i18n.bidi.LEFT).replace(e.i18n.bidi.tempRe_, e.i18n.bidi.RIGHT);
  };
  e.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
  e.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
  e.i18n.bidi.normalizeHebrewQuote = function (a) {
    return a.replace(e.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(e.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3");
  };
  e.i18n.bidi.wordSeparatorRe_ = /\s+/;
  e.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
  e.i18n.bidi.rtlDetectionThreshold_ = .4;
  e.i18n.bidi.estimateDirection = function (a, c) {
    let d = 0,
      f = 0,
      g = !1;
    a = e.i18n.bidi.stripHtmlIfNeeded_(a, c).split(e.i18n.bidi.wordSeparatorRe_);
    for (c = 0; c < a.length; c++) {
      const h = a[c];
      e.i18n.bidi.startsWithRtl(h) ? (d++, f++) : e.i18n.bidi.isRequiredLtrRe_.test(h) ? g = !0 : e.i18n.bidi.hasAnyLtr(h) ? f++ : e.i18n.bidi.hasNumeralsRe_.test(h) && (g = !0);
    }
    return 0 == f ? g ? e.i18n.bidi.Dir.LTR : e.i18n.bidi.Dir.NEUTRAL : d / f > e.i18n.bidi.rtlDetectionThreshold_ ? e.i18n.bidi.Dir.RTL : e.i18n.bidi.Dir.LTR;
  };
  e.i18n.bidi.detectRtlDirectionality = function (a, c) {
    return e.i18n.bidi.estimateDirection(a, c) == e.i18n.bidi.Dir.RTL;
  };
  e.i18n.bidi.setElementDirAndAlign = function (a, c) {
    a && (c = e.i18n.bidi.toDir(c)) && (a.style.textAlign = c == e.i18n.bidi.Dir.RTL ? e.i18n.bidi.RIGHT : e.i18n.bidi.LEFT, a.dir = c == e.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
  };
  e.i18n.bidi.setElementDirByTextDirectionality = function (a, c) {
    switch (e.i18n.bidi.estimateDirection(c)) {
      case e.i18n.bidi.Dir.LTR:
        a.dir = "ltr";
        break;
      case e.i18n.bidi.Dir.RTL:
        a.dir = "rtl";
        break;
      default:
        a.removeAttribute("dir");
    }
  };
  e.i18n.bidi.DirectionalString = function () {};
  e.html.TrustedResourceUrl = function (a, c) {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = a === e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && c || "";
    this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
  };
  e.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
  e.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
  };
  e.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
  e.html.TrustedResourceUrl.prototype.getDirection = function () {
    return e.i18n.bidi.Dir.LTR;
  };
  e.html.TrustedResourceUrl.prototype.cloneWithParams = function (a, c) {
    var d = e.html.TrustedResourceUrl.unwrap(this);
    d = e.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(d);
    var f = d[3] || "";
    return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(d[1] + e.html.TrustedResourceUrl.stringifyParams_("?", d[2] || "", a) + e.html.TrustedResourceUrl.stringifyParams_("#", f, c));
  };
  e.DEBUG && (e.html.TrustedResourceUrl.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
  });
  e.html.TrustedResourceUrl.unwrap = function (a) {
    return e.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString();
  };
  e.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (a) {
    if (a instanceof e.html.TrustedResourceUrl && a.constructor === e.html.TrustedResourceUrl && a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
    e.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "' of type " + e.typeOf(a));
    return "type_error:TrustedResourceUrl";
  };
  e.html.TrustedResourceUrl.format = function (a, c) {
    var d = e.string.Const.unwrap(a);
    if (!e.html.TrustedResourceUrl.BASE_URL_.test(d)) throw Error("Invalid TrustedResourceUrl format: " + d);
    a = d.replace(e.html.TrustedResourceUrl.FORMAT_MARKER_, function (a, g) {
      if (!Object.prototype.hasOwnProperty.call(c, g)) throw Error('Found marker, "' + g + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(c));
      a = c[g];
      return a instanceof e.string.Const ? e.string.Const.unwrap(a) : encodeURIComponent(String(a));
    });
    return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
  e.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
  e.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  e.html.TrustedResourceUrl.formatWithParams = function (a, c, d, f) {
    return e.html.TrustedResourceUrl.format(a, c).cloneWithParams(d, f);
  };
  e.html.TrustedResourceUrl.fromConstant = function (a) {
    return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e.string.Const.unwrap(a));
  };
  e.html.TrustedResourceUrl.fromConstants = function (a) {
    for (var c = "", d = 0; d < a.length; d++) c += e.string.Const.unwrap(a[d]);
    return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c);
  };
  e.html.TrustedResourceUrl.fromSafeScript = function (a) {
    a = e.fs.blob.getBlobWithProperties([e.html.SafeScript.unwrap(a)], "text/javascript");
    a = e.fs.url.createObjectUrl(a);
    return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (a) {
    a = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a) : a;
    return new e.html.TrustedResourceUrl(e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a);
  };
  e.html.TrustedResourceUrl.stringifyParams_ = function (a, c, d) {
    if (null == d) return c;
    if ("string" === typeof d) return d ? a + encodeURIComponent(d) : "";
    for (var f in d) {
      var g = d[f];
      g = Array.isArray(g) ? g : [g];
      for (var h = 0; h < g.length; h++) {
        var k = g[h];
        null != k && (c || (c = a), c += (c.length > a.length ? "&" : "") + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)));
      }
    }
    return c;
  };
  e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  e.html.SafeUrl = function (a, c) {
    this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = a === e.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && c || "";
    this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
  };
  e.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
  e.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
  e.html.SafeUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
  };
  e.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
  e.html.SafeUrl.prototype.getDirection = function () {
    return e.i18n.bidi.Dir.LTR;
  };
  e.DEBUG && (e.html.SafeUrl.prototype.toString = function () {
    return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
  });
  e.html.SafeUrl.unwrap = function (a) {
    if (a instanceof e.html.SafeUrl && a.constructor === e.html.SafeUrl && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;
    e.asserts.fail("expected object of type SafeUrl, got '" + a + "' of type " + e.typeOf(a));
    return "type_error:SafeUrl";
  };
  e.html.SafeUrl.fromConstant = function (a) {
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e.string.Const.unwrap(a));
  };
  e.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
  e.html.SafeUrl.isSafeMimeType = function (a) {
    return e.html.SAFE_MIME_TYPE_PATTERN_.test(a);
  };
  e.html.SafeUrl.fromBlob = function (a) {
    a = e.html.SafeUrl.isSafeMimeType(a.type) ? e.fs.url.createObjectUrl(a) : e.html.SafeUrl.INNOCUOUS_STRING;
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.fromMediaSource = function (a) {
    e.asserts.assert("MediaSource" in e.global, "No support for MediaSource");
    a = a instanceof MediaSource ? e.fs.url.createObjectUrl(a) : e.html.SafeUrl.INNOCUOUS_STRING;
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
  e.html.SafeUrl.fromDataUrl = function (a) {
    a = a.replace(/(%0A|%0D)/g, "");
    var c = a.match(e.html.DATA_URL_PATTERN_);
    c = c && e.html.SafeUrl.isSafeMimeType(c[1]);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(c ? a : e.html.SafeUrl.INNOCUOUS_STRING);
  };
  e.html.SafeUrl.fromTelUrl = function (a) {
    e.string.internal.caseInsensitiveStartsWith(a, "tel:") || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
  e.html.SafeUrl.fromSipUrl = function (a) {
    e.html.SIP_URL_PATTERN_.test(decodeURIComponent(a)) || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.fromFacebookMessengerUrl = function (a) {
    e.string.internal.caseInsensitiveStartsWith(a, "fb-messenger://share") || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.fromWhatsAppUrl = function (a) {
    e.string.internal.caseInsensitiveStartsWith(a, "whatsapp://send") || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.fromSmsUrl = function (a) {
    e.string.internal.caseInsensitiveStartsWith(a, "sms:") && e.html.SafeUrl.isSmsUrlBodyValid_(a) || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.isSmsUrlBodyValid_ = function (a) {
    var c = a.indexOf("#");
    0 < c && (a = a.substring(0, c));
    c = a.match(/[?&]body=/gi);
    if (!c) return !0;
    if (1 < c.length) return !1;
    a = a.match(/[?&]body=([^&]*)/)[1];
    if (!a) return !0;
    try {
      decodeURIComponent(a);
    } catch (d) {
      return !1;
    }
    return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a);
  };
  e.html.SafeUrl.fromSshUrl = function (a) {
    e.string.internal.caseInsensitiveStartsWith(a, "ssh://") || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.sanitizeChromeExtensionUrl = function (a, c) {
    return e.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a, c);
  };
  e.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (a, c) {
    return e.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a, c);
  };
  e.html.SafeUrl.sanitizeEdgeExtensionUrl = function (a, c) {
    return e.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a, c);
  };
  e.html.SafeUrl.sanitizeExtensionUrl_ = function (a, c, d) {
    (a = a.exec(c)) ? (a = a[1], -1 == (d instanceof e.string.Const ? [e.string.Const.unwrap(d)] : d.map(function (a) {
      return e.string.Const.unwrap(a);
    })).indexOf(a) && (c = e.html.SafeUrl.INNOCUOUS_STRING)) : c = e.html.SafeUrl.INNOCUOUS_STRING;
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(c);
  };
  e.html.SafeUrl.fromTrustedResourceUrl = function (a) {
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e.html.TrustedResourceUrl.unwrap(a));
  };
  e.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  e.html.SafeUrl.SAFE_URL_PATTERN = e.html.SAFE_URL_PATTERN_;
  e.html.SafeUrl.sanitize = function (a) {
    if (a instanceof e.html.SafeUrl) return a;
    a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
    e.html.SAFE_URL_PATTERN_.test(a) || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.sanitizeAssertUnchanged = function (a, c) {
    if (a instanceof e.html.SafeUrl) return a;
    a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
    if (c && /^data:/i.test(a) && (c = e.html.SafeUrl.fromDataUrl(a), c.getTypedStringValue() == a)) return c;
    e.asserts.assert(e.html.SAFE_URL_PATTERN_.test(a), "%s does not match the safe URL pattern", a) || (a = e.html.SafeUrl.INNOCUOUS_STRING);
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (a) {
    return new e.html.SafeUrl(e.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a);
  };
  e.html.SafeUrl.ABOUT_BLANK = e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
  e.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  e.html.SafeStyle = function () {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
    this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
  };
  e.html.SafeStyle.prototype.implementsGoogStringTypedString = !0;
  e.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  e.html.SafeStyle.fromConstant = function (a) {
    a = e.string.Const.unwrap(a);
    if (0 === a.length) return e.html.SafeStyle.EMPTY;
    e.asserts.assert(e.string.internal.endsWith(a, ";"), "Last character of style string is not ';': " + a);
    e.asserts.assert(e.string.internal.contains(a, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a);
    return e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeStyle.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
  };
  e.DEBUG && (e.html.SafeStyle.prototype.toString = function () {
    return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
  });
  e.html.SafeStyle.unwrap = function (a) {
    if (a instanceof e.html.SafeStyle && a.constructor === e.html.SafeStyle && a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    e.asserts.fail("expected object of type SafeStyle, got '" + a + "' of type " + e.typeOf(a));
    return "type_error:SafeStyle";
  };
  e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (a) {
    return new e.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a);
  };
  e.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (a) {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a;
    return this;
  };
  e.html.SafeStyle.EMPTY = e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
  e.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
  e.html.SafeStyle.create = function (a) {
    var c = "",
      d;
    for (d in a) {
      if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
      var f = a[d];
      null != f && (f = Array.isArray(f) ? e.array.map(f, e.html.SafeStyle.sanitizePropertyValue_).join(" ") : e.html.SafeStyle.sanitizePropertyValue_(f), c += d + ":" + f + ";");
    }
    return c ? e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(c) : e.html.SafeStyle.EMPTY;
  };
  e.html.SafeStyle.sanitizePropertyValue_ = function (a) {
    if (a instanceof e.html.SafeUrl) return 'url("' + e.html.SafeUrl.unwrap(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a = a instanceof e.string.Const ? e.string.Const.unwrap(a) : e.html.SafeStyle.sanitizePropertyValueString_(String(a));
    if (/[{;}]/.test(a)) throw new e.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a]);
    return a;
  };
  e.html.SafeStyle.sanitizePropertyValueString_ = function (a) {
    var c = a.replace(e.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(e.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(e.html.SafeStyle.URL_RE_, "url");
    if (e.html.SafeStyle.VALUE_RE_.test(c)) {
      if (e.html.SafeStyle.COMMENT_RE_.test(a)) return e.asserts.fail("String value disallows comments, got: " + a), e.html.SafeStyle.INNOCUOUS_STRING;
      if (!e.html.SafeStyle.hasBalancedQuotes_(a)) return e.asserts.fail("String value requires balanced quotes, got: " + a), e.html.SafeStyle.INNOCUOUS_STRING;
      if (!e.html.SafeStyle.hasBalancedSquareBrackets_(a)) return e.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), e.html.SafeStyle.INNOCUOUS_STRING;
    } else return e.asserts.fail("String value allows only " + e.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a), e.html.SafeStyle.INNOCUOUS_STRING;
    return e.html.SafeStyle.sanitizeUrl_(a);
  };
  e.html.SafeStyle.hasBalancedQuotes_ = function (a) {
    for (var c = !0, d = !0, f = 0; f < a.length; f++) {
      var g = a.charAt(f);
      "'" == g && d ? c = !c : '"' == g && c && (d = !d);
    }
    return c && d;
  };
  e.html.SafeStyle.hasBalancedSquareBrackets_ = function (a) {
    for (var c = !0, d = /^[-_a-zA-Z0-9]$/, f = 0; f < a.length; f++) {
      var g = a.charAt(f);
      if ("]" == g) {
        if (c) return !1;
        c = !0;
      } else if ("[" == g) {
        if (!c) return !1;
        c = !1;
      } else if (!c && !d.test(g)) return !1;
    }
    return c;
  };
  e.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
  e.html.SafeStyle.VALUE_RE_ = new RegExp("^" + e.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
  e.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
  e.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
  e.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + e.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
  e.html.SafeStyle.COMMENT_RE_ = /\/\*/;
  e.html.SafeStyle.sanitizeUrl_ = function (a) {
    return a.replace(e.html.SafeStyle.URL_RE_, function (a, d, f, g) {
      var c = "";
      f = f.replace(/^(['"])(.*)\1$/, function (a, d, f) {
        c = d;
        return f;
      });
      a = e.html.SafeUrl.sanitize(f).getTypedStringValue();
      return d + c + a + c + g;
    });
  };
  e.html.SafeStyle.concat = function (a) {
    function c(a) {
      Array.isArray(a) ? e.array.forEach(a, c) : d += e.html.SafeStyle.unwrap(a);
    }
    var d = "";
    e.array.forEach(arguments, c);
    return d ? e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(d) : e.html.SafeStyle.EMPTY;
  };
  e.html.SafeStyleSheet = function () {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
    this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
  };
  e.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0;
  e.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  e.html.SafeStyleSheet.createRule = function (a, c) {
    if (e.string.internal.contains(a, "<")) throw Error("Selector does not allow '<', got: " + a);
    var d = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
    if (!e.html.SafeStyleSheet.hasBalancedBrackets_(d)) throw Error("() and [] in selector must be balanced, got: " + a);
    c instanceof e.html.SafeStyle || (c = e.html.SafeStyle.create(c));
    a = a + "{" + e.html.SafeStyle.unwrap(c).replace(/</g, "\\3C ") + "}";
    return e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeStyleSheet.hasBalancedBrackets_ = function (a) {
    for (var c = {
        "(": ")",
        "[": "]"
      }, d = [], f = 0; f < a.length; f++) {
      var g = a[f];
      if (c[g]) d.push(c[g]);else if (e.object.contains(c, g) && d.pop() != g) return !1;
    }
    return 0 == d.length;
  };
  e.html.SafeStyleSheet.concat = function (a) {
    function c(a) {
      Array.isArray(a) ? e.array.forEach(a, c) : d += e.html.SafeStyleSheet.unwrap(a);
    }
    var d = "";
    e.array.forEach(arguments, c);
    return e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(d);
  };
  e.html.SafeStyleSheet.fromConstant = function (a) {
    a = e.string.Const.unwrap(a);
    if (0 === a.length) return e.html.SafeStyleSheet.EMPTY;
    e.asserts.assert(!e.string.internal.contains(a, "<"), "Forbidden '<' character in style sheet string: " + a);
    return e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
  };
  e.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  };
  e.DEBUG && (e.html.SafeStyleSheet.prototype.toString = function () {
    return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
  });
  e.html.SafeStyleSheet.unwrap = function (a) {
    if (a instanceof e.html.SafeStyleSheet && a.constructor === e.html.SafeStyleSheet && a.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    e.asserts.fail("expected object of type SafeStyleSheet, got '" + a + "' of type " + e.typeOf(a));
    return "type_error:SafeStyleSheet";
  };
  e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (a) {
    return new e.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a);
  };
  e.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (a) {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a;
    return this;
  };
  e.html.SafeStyleSheet.EMPTY = e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
  e.html.SafeHtml = function () {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    this.dir_ = null;
  };
  e.html.SafeHtml.ENABLE_ERROR_MESSAGES = e.DEBUG;
  e.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0;
  e.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0;
  e.html.SafeHtml.prototype.getDirection = function () {
    return this.dir_;
  };
  e.html.SafeHtml.prototype.implementsGoogStringTypedString = !0;
  e.html.SafeHtml.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
  };
  e.DEBUG && (e.html.SafeHtml.prototype.toString = function () {
    return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
  });
  e.html.SafeHtml.unwrap = function (a) {
    return e.html.SafeHtml.unwrapTrustedHTML(a).toString();
  };
  e.html.SafeHtml.unwrapTrustedHTML = function (a) {
    if (a instanceof e.html.SafeHtml && a.constructor === e.html.SafeHtml && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    e.asserts.fail("expected object of type SafeHtml, got '" + a + "' of type " + e.typeOf(a));
    return "type_error:SafeHtml";
  };
  e.html.SafeHtml.htmlEscape = function (a) {
    if (a instanceof e.html.SafeHtml) return a;
    var c = "object" == typeof a,
      d = null;
    c && a.implementsGoogI18nBidiDirectionalString && (d = a.getDirection());
    a = c && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e.string.internal.htmlEscape(a), d);
  };
  e.html.SafeHtml.htmlEscapePreservingNewlines = function (a) {
    if (a instanceof e.html.SafeHtml) return a;
    a = e.html.SafeHtml.htmlEscape(a);
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e.string.internal.newLineToBr(e.html.SafeHtml.unwrap(a)), a.getDirection());
  };
  e.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (a) {
    if (a instanceof e.html.SafeHtml) return a;
    a = e.html.SafeHtml.htmlEscape(a);
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e.string.internal.whitespaceEscape(e.html.SafeHtml.unwrap(a)), a.getDirection());
  };
  e.html.SafeHtml.from = e.html.SafeHtml.htmlEscape;
  e.html.SafeHtml.comment = function (a) {
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + e.string.internal.htmlEscape(a) + "--\x3e", null);
  };
  e.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
  e.html.SafeHtml.URL_ATTRIBUTES_ = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  };
  e.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
  };
  e.html.SafeHtml.create = function (a, c, d) {
    e.html.SafeHtml.verifyTagName(String(a));
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a), c, d);
  };
  e.html.SafeHtml.verifyTagName = function (a) {
    if (!e.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a)) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a + ">." : "");
    if (a.toUpperCase() in e.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a + "> is not allowed for SafeHtml." : "");
  };
  e.html.SafeHtml.createIframe = function (a, c, d, f) {
    a && e.html.TrustedResourceUrl.unwrap(a);
    var g = {};
    g.src = a || null;
    g.srcdoc = c && e.html.SafeHtml.unwrap(c);
    a = e.html.SafeHtml.combineAttributes(g, {
      sandbox: ""
    }, d);
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, f);
  };
  e.html.SafeHtml.createSandboxIframe = function (a, c, d, f) {
    if (!e.html.SafeHtml.canUseSandboxIframe()) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
    var g = {};
    g.src = a ? e.html.SafeUrl.unwrap(e.html.SafeUrl.sanitize(a)) : null;
    g.srcdoc = c || null;
    g.sandbox = "";
    a = e.html.SafeHtml.combineAttributes(g, {}, d);
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, f);
  };
  e.html.SafeHtml.canUseSandboxIframe = function () {
    return e.global.HTMLIFrameElement && "sandbox" in e.global.HTMLIFrameElement.prototype;
  };
  e.html.SafeHtml.createScriptSrc = function (a, c) {
    e.html.TrustedResourceUrl.unwrap(a);
    a = e.html.SafeHtml.combineAttributes({
      src: a
    }, {}, c);
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a);
  };
  e.html.SafeHtml.createScript = function (a, c) {
    for (var d in c) {
      var f = d.toLowerCase();
      if ("language" == f || "src" == f || "text" == f || "type" == f) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + f + '" attribute' : "");
    }
    d = "";
    a = e.array.concat(a);
    for (f = 0; f < a.length; f++) d += e.html.SafeScript.unwrap(a[f]);
    a = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d, e.i18n.bidi.Dir.NEUTRAL);
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", c, a);
  };
  e.html.SafeHtml.createStyle = function (a, c) {
    c = e.html.SafeHtml.combineAttributes({
      type: "text/css"
    }, {}, c);
    var d = "";
    a = e.array.concat(a);
    for (var f = 0; f < a.length; f++) d += e.html.SafeStyleSheet.unwrap(a[f]);
    a = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d, e.i18n.bidi.Dir.NEUTRAL);
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", c, a);
  };
  e.html.SafeHtml.createMetaRefresh = function (a, c) {
    a = e.html.SafeUrl.unwrap(e.html.SafeUrl.sanitize(a));
    (e.labs.userAgent.browser.isIE() || e.labs.userAgent.browser.isEdge()) && e.string.internal.contains(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'");
    return e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
      "http-equiv": "refresh",
      content: (c || 0) + "; url=" + a
    });
  };
  e.html.SafeHtml.getAttrNameAndValue_ = function (a, c, d) {
    if (d instanceof e.string.Const) d = e.string.Const.unwrap(d);else if ("style" == c.toLowerCase()) {
      if (e.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE) d = e.html.SafeHtml.getStyleValue_(d);else throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
    } else {
      if (/^on/i.test(c)) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.' : "");
      if (c.toLowerCase() in e.html.SafeHtml.URL_ATTRIBUTES_) if (d instanceof e.html.TrustedResourceUrl) d = e.html.TrustedResourceUrl.unwrap(d);else if (d instanceof e.html.SafeUrl) d = e.html.SafeUrl.unwrap(d);else if ("string" === typeof d) d = e.html.SafeUrl.sanitize(d).getTypedStringValue();else throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + c + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.' : "");
    }
    d.implementsGoogStringTypedString && (d = d.getTypedStringValue());
    e.asserts.assert("string" === typeof d || "number" === typeof d, "String or number value expected, got " + typeof d + " with value: " + d);
    return c + '="' + e.string.internal.htmlEscape(String(d)) + '"';
  };
  e.html.SafeHtml.getStyleValue_ = function (a) {
    if (!e.isObject(a)) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a : "");
    a instanceof e.html.SafeStyle || (a = e.html.SafeStyle.create(a));
    return e.html.SafeStyle.unwrap(a);
  };
  e.html.SafeHtml.createWithDir = function (a, c, d, f) {
    c = e.html.SafeHtml.create(c, d, f);
    c.dir_ = a;
    return c;
  };
  e.html.SafeHtml.join = function (a, c) {
    function d(a) {
      Array.isArray(a) ? e.array.forEach(a, d) : (a = e.html.SafeHtml.htmlEscape(a), g.push(e.html.SafeHtml.unwrap(a)), a = a.getDirection(), f == e.i18n.bidi.Dir.NEUTRAL ? f = a : a != e.i18n.bidi.Dir.NEUTRAL && f != a && (f = null));
    }
    a = e.html.SafeHtml.htmlEscape(a);
    var f = a.getDirection(),
      g = [];
    e.array.forEach(c, d);
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(g.join(e.html.SafeHtml.unwrap(a)), f);
  };
  e.html.SafeHtml.concat = function (a) {
    return e.html.SafeHtml.join(e.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
  };
  e.html.SafeHtml.concatWithDir = function (a, c) {
    var d = e.html.SafeHtml.concat(e.array.slice(arguments, 1));
    d.dir_ = a;
    return d;
  };
  e.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (a, c) {
    return new e.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a, c);
  };
  e.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (a, c) {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a) : a;
    this.dir_ = c;
    return this;
  };
  e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (a, c, d) {
    var f = null;
    var g = "<" + a + e.html.SafeHtml.stringifyAttributes(a, c);
    null == d ? d = [] : Array.isArray(d) || (d = [d]);
    e.dom.tags.isVoidTag(a.toLowerCase()) ? (e.asserts.assert(!d.length, "Void tag <" + a + "> does not allow content."), g += ">") : (f = e.html.SafeHtml.concat(d), g += ">" + e.html.SafeHtml.unwrap(f) + "</" + a + ">", f = f.getDirection());
    (a = c && c.dir) && (f = /^(ltr|rtl|auto)$/i.test(a) ? e.i18n.bidi.Dir.NEUTRAL : null);
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(g, f);
  };
  e.html.SafeHtml.stringifyAttributes = function (a, c) {
    var d = "";
    if (c) for (var f in c) {
      if (!e.html.SafeHtml.VALID_NAMES_IN_TAG_.test(f)) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + f + '".' : "");
      var g = c[f];
      null != g && (d += " " + e.html.SafeHtml.getAttrNameAndValue_(a, f, g));
    }
    return d;
  };
  e.html.SafeHtml.combineAttributes = function (a, c, d) {
    var f = {},
      g;
    for (g in a) e.asserts.assert(g.toLowerCase() == g, "Must be lower case"), f[g] = a[g];
    for (g in c) e.asserts.assert(g.toLowerCase() == g, "Must be lower case"), f[g] = c[g];
    if (d) for (g in d) {
      var h = g.toLowerCase();
      if (h in a) throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + h + '" attribute, got "' + g + '" with value "' + d[g] + '"' : "");
      h in c && delete f[h];
      f[g] = d[g];
    }
    return f;
  };
  e.html.SafeHtml.DOCTYPE_HTML = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", e.i18n.bidi.Dir.NEUTRAL);
  e.html.SafeHtml.EMPTY = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", e.i18n.bidi.Dir.NEUTRAL);
  e.html.SafeHtml.BR = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", e.i18n.bidi.Dir.NEUTRAL);
  e.html.uncheckedconversions = {};
  e.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (a, c, d) {
    e.asserts.assertString(e.string.Const.unwrap(a), "must provide justification");
    e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(a)), "must provide non-empty justification");
    return e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, d || null);
  };
  e.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (a, c) {
    e.asserts.assertString(e.string.Const.unwrap(a), "must provide justification");
    e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(a)), "must provide non-empty justification");
    return e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(c);
  };
  e.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (a, c) {
    e.asserts.assertString(e.string.Const.unwrap(a), "must provide justification");
    e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(a)), "must provide non-empty justification");
    return e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(c);
  };
  e.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (a, c) {
    e.asserts.assertString(e.string.Const.unwrap(a), "must provide justification");
    e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(a)), "must provide non-empty justification");
    return e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(c);
  };
  e.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (a, c) {
    e.asserts.assertString(e.string.Const.unwrap(a), "must provide justification");
    e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(a)), "must provide non-empty justification");
    return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(c);
  };
  e.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (a, c) {
    e.asserts.assertString(e.string.Const.unwrap(a), "must provide justification");
    e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(a)), "must provide non-empty justification");
    return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c);
  };
  e.dom.safe = {};
  e.dom.safe.InsertAdjacentHtmlPosition = {
    AFTERBEGIN: "afterbegin",
    AFTEREND: "afterend",
    BEFOREBEGIN: "beforebegin",
    BEFOREEND: "beforeend"
  };
  e.dom.safe.insertAdjacentHtml = function (a, c, d) {
    a.insertAdjacentHTML(c, e.html.SafeHtml.unwrapTrustedHTML(d));
  };
  e.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
    MATH: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
  };
  e.dom.safe.isInnerHtmlCleanupRecursive_ = e.functions.cacheReturnValue(function () {
    if (e.DEBUG && "undefined" === typeof document) return !1;
    var a = document.createElement("div"),
      c = document.createElement("div");
    c.appendChild(document.createElement("div"));
    a.appendChild(c);
    if (e.DEBUG && !a.firstChild) return !1;
    c = a.firstChild.firstChild;
    a.innerHTML = e.html.SafeHtml.unwrapTrustedHTML(e.html.SafeHtml.EMPTY);
    return !c.parentElement;
  });
  e.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (a, c) {
    if (e.dom.safe.isInnerHtmlCleanupRecursive_()) for (; a.lastChild;) a.removeChild(a.lastChild);
    a.innerHTML = e.html.SafeHtml.unwrapTrustedHTML(c);
  };
  e.dom.safe.setInnerHtml = function (a, c) {
    if (e.asserts.ENABLE_ASSERTS) {
      var d = a.tagName.toUpperCase();
      if (e.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[d]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
    }
    e.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a, c);
  };
  e.dom.safe.setOuterHtml = function (a, c) {
    a.outerHTML = e.html.SafeHtml.unwrapTrustedHTML(c);
  };
  e.dom.safe.setFormElementAction = function (a, c) {
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    e.dom.asserts.assertIsHTMLFormElement(a).action = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setButtonFormAction = function (a, c) {
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    e.dom.asserts.assertIsHTMLButtonElement(a).formAction = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setInputFormAction = function (a, c) {
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    e.dom.asserts.assertIsHTMLInputElement(a).formAction = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setStyle = function (a, c) {
    a.style.cssText = e.html.SafeStyle.unwrap(c);
  };
  e.dom.safe.documentWrite = function (a, c) {
    a.write(e.html.SafeHtml.unwrapTrustedHTML(c));
  };
  e.dom.safe.setAnchorHref = function (a, c) {
    e.dom.asserts.assertIsHTMLAnchorElement(a);
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    a.href = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setImageSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLImageElement(a);
    if (!(c instanceof e.html.SafeUrl)) {
      var d = /^data:image\//i.test(c);
      c = e.html.SafeUrl.sanitizeAssertUnchanged(c, d);
    }
    a.src = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setAudioSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLAudioElement(a);
    if (!(c instanceof e.html.SafeUrl)) {
      var d = /^data:audio\//i.test(c);
      c = e.html.SafeUrl.sanitizeAssertUnchanged(c, d);
    }
    a.src = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setVideoSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLVideoElement(a);
    if (!(c instanceof e.html.SafeUrl)) {
      var d = /^data:video\//i.test(c);
      c = e.html.SafeUrl.sanitizeAssertUnchanged(c, d);
    }
    a.src = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.setEmbedSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLEmbedElement(a);
    a.src = e.html.TrustedResourceUrl.unwrapTrustedScriptURL(c);
  };
  e.dom.safe.setFrameSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLFrameElement(a);
    a.src = e.html.TrustedResourceUrl.unwrap(c);
  };
  e.dom.safe.setIframeSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLIFrameElement(a);
    a.src = e.html.TrustedResourceUrl.unwrap(c);
  };
  e.dom.safe.setIframeSrcdoc = function (a, c) {
    e.dom.asserts.assertIsHTMLIFrameElement(a);
    a.srcdoc = e.html.SafeHtml.unwrapTrustedHTML(c);
  };
  e.dom.safe.setLinkHrefAndRel = function (a, c, d) {
    e.dom.asserts.assertIsHTMLLinkElement(a);
    a.rel = d;
    e.string.internal.caseInsensitiveContains(d, "stylesheet") ? (e.asserts.assert(c instanceof e.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a.href = e.html.TrustedResourceUrl.unwrap(c)) : a.href = c instanceof e.html.TrustedResourceUrl ? e.html.TrustedResourceUrl.unwrap(c) : c instanceof e.html.SafeUrl ? e.html.SafeUrl.unwrap(c) : e.html.SafeUrl.unwrap(e.html.SafeUrl.sanitizeAssertUnchanged(c));
  };
  e.dom.safe.setObjectData = function (a, c) {
    e.dom.asserts.assertIsHTMLObjectElement(a);
    a.data = e.html.TrustedResourceUrl.unwrapTrustedScriptURL(c);
  };
  e.dom.safe.setScriptSrc = function (a, c) {
    e.dom.asserts.assertIsHTMLScriptElement(a);
    a.src = e.html.TrustedResourceUrl.unwrapTrustedScriptURL(c);
    (c = e.getScriptNonce()) && a.setAttribute("nonce", c);
  };
  e.dom.safe.setScriptContent = function (a, c) {
    e.dom.asserts.assertIsHTMLScriptElement(a);
    a.text = e.html.SafeScript.unwrapTrustedScript(c);
    (c = e.getScriptNonce()) && a.setAttribute("nonce", c);
  };
  e.dom.safe.setLocationHref = function (a, c) {
    e.dom.asserts.assertIsLocation(a);
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    a.href = e.html.SafeUrl.unwrap(c);
  };
  e.dom.safe.assignLocation = function (a, c) {
    e.dom.asserts.assertIsLocation(a);
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    a.assign(e.html.SafeUrl.unwrap(c));
  };
  e.dom.safe.replaceLocation = function (a, c) {
    c = c instanceof e.html.SafeUrl ? c : e.html.SafeUrl.sanitizeAssertUnchanged(c);
    a.replace(e.html.SafeUrl.unwrap(c));
  };
  e.dom.safe.openInWindow = function (a, c, d, f, g) {
    a = a instanceof e.html.SafeUrl ? a : e.html.SafeUrl.sanitizeAssertUnchanged(a);
    c = c || e.global;
    d = d instanceof e.string.Const ? e.string.Const.unwrap(d) : d || "";
    return c.open(e.html.SafeUrl.unwrap(a), d, f, g);
  };
  e.dom.safe.parseFromStringHtml = function (a, c) {
    return e.dom.safe.parseFromString(a, c, "text/html");
  };
  e.dom.safe.parseFromString = function (a, c, d) {
    return a.parseFromString(e.html.SafeHtml.unwrapTrustedHTML(c), d);
  };
  e.dom.safe.createImageFromBlob = function (a) {
    if (!/^image\/.*/g.test(a.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
    var c = e.global.URL.createObjectURL(a);
    a = new e.global.Image();
    a.onload = function () {
      e.global.URL.revokeObjectURL(c);
    };
    e.dom.safe.setImageSrc(a, e.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(e.string.Const.from("Image blob URL."), c));
    return a;
  };
  e.string.DETECT_DOUBLE_ESCAPING = !1;
  e.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
  e.string.Unicode = {
    NBSP: "\u00a0"
  };
  e.string.startsWith = e.string.internal.startsWith;
  e.string.endsWith = e.string.internal.endsWith;
  e.string.caseInsensitiveStartsWith = e.string.internal.caseInsensitiveStartsWith;
  e.string.caseInsensitiveEndsWith = e.string.internal.caseInsensitiveEndsWith;
  e.string.caseInsensitiveEquals = e.string.internal.caseInsensitiveEquals;
  e.string.subs = function (a, c) {
    for (var d = a.split("%s"), f = "", g = Array.prototype.slice.call(arguments, 1); g.length && 1 < d.length;) f += d.shift() + g.shift();
    return f + d.join("%s");
  };
  e.string.collapseWhitespace = function (a) {
    return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
  };
  e.string.isEmptyOrWhitespace = e.string.internal.isEmptyOrWhitespace;
  e.string.isEmptyString = function (a) {
    return 0 == a.length;
  };
  e.string.isEmpty = e.string.isEmptyOrWhitespace;
  e.string.isEmptyOrWhitespaceSafe = function (a) {
    return e.string.isEmptyOrWhitespace(e.string.makeSafe(a));
  };
  e.string.isEmptySafe = e.string.isEmptyOrWhitespaceSafe;
  e.string.isBreakingWhitespace = function (a) {
    return !/[^\t\n\r ]/.test(a);
  };
  e.string.isAlpha = function (a) {
    return !/[^a-zA-Z]/.test(a);
  };
  e.string.isNumeric = function (a) {
    return !/[^0-9]/.test(a);
  };
  e.string.isAlphaNumeric = function (a) {
    return !/[^a-zA-Z0-9]/.test(a);
  };
  e.string.isSpace = function (a) {
    return " " == a;
  };
  e.string.isUnicodeChar = function (a) {
    return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
  };
  e.string.stripNewlines = function (a) {
    return a.replace(/(\r\n|\r|\n)+/g, " ");
  };
  e.string.canonicalizeNewlines = function (a) {
    return a.replace(/(\r\n|\r|\n)/g, "\n");
  };
  e.string.normalizeWhitespace = function (a) {
    return a.replace(/\xa0|\s/g, " ");
  };
  e.string.normalizeSpaces = function (a) {
    return a.replace(/\xa0|[ \t]+/g, " ");
  };
  e.string.collapseBreakingSpaces = function (a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
  };
  e.string.trim = e.string.internal.trim;
  e.string.trimLeft = function (a) {
    return a.replace(/^[\s\xa0]+/, "");
  };
  e.string.trimRight = function (a) {
    return a.replace(/[\s\xa0]+$/, "");
  };
  e.string.caseInsensitiveCompare = e.string.internal.caseInsensitiveCompare;
  e.string.numberAwareCompare_ = function (a, c, d) {
    if (a == c) return 0;
    if (!a) return -1;
    if (!c) return 1;
    for (var f = a.toLowerCase().match(d), g = c.toLowerCase().match(d), h = Math.min(f.length, g.length), k = 0; k < h; k++) {
      d = f[k];
      var m = g[k];
      if (d != m) return a = parseInt(d, 10), !isNaN(a) && (c = parseInt(m, 10), !isNaN(c) && a - c) ? a - c : d < m ? -1 : 1;
    }
    return f.length != g.length ? f.length - g.length : a < c ? -1 : 1;
  };
  e.string.intAwareCompare = function (a, c) {
    return e.string.numberAwareCompare_(a, c, /\d+|\D+/g);
  };
  e.string.floatAwareCompare = function (a, c) {
    return e.string.numberAwareCompare_(a, c, /\d+|\.\d+|\D+/g);
  };
  e.string.numerateCompare = e.string.floatAwareCompare;
  e.string.urlEncode = function (a) {
    return encodeURIComponent(String(a));
  };
  e.string.urlDecode = function (a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
  };
  e.string.newLineToBr = e.string.internal.newLineToBr;
  e.string.htmlEscape = function (a, c) {
    a = e.string.internal.htmlEscape(a, c);
    e.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(e.string.E_RE_, "&#101;"));
    return a;
  };
  e.string.E_RE_ = /e/g;
  e.string.unescapeEntities = function (a) {
    return e.string.contains(a, "&") ? !e.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in e.global ? e.string.unescapeEntitiesUsingDom_(a) : e.string.unescapePureXmlEntities_(a) : a;
  };
  e.string.unescapeEntitiesWithDocument = function (a, c) {
    return e.string.contains(a, "&") ? e.string.unescapeEntitiesUsingDom_(a, c) : a;
  };
  e.string.unescapeEntitiesUsingDom_ = function (a, c) {
    var d = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"'
    };
    var f = c ? c.createElement("div") : e.global.document.createElement("div");
    return a.replace(e.string.HTML_ENTITY_PATTERN_, function (a, c) {
      var g = d[a];
      if (g) return g;
      "#" == c.charAt(0) && (c = Number("0" + c.substr(1)), isNaN(c) || (g = String.fromCharCode(c)));
      g || (e.dom.safe.setInnerHtml(f, e.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(e.string.Const.from("Single HTML entity."), a + " ")), g = f.firstChild.nodeValue.slice(0, -1));
      return d[a] = g;
    });
  };
  e.string.unescapePureXmlEntities_ = function (a) {
    return a.replace(/&([^;]+);/g, function (a, d) {
      switch (d) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return "#" != d.charAt(0) || (d = Number("0" + d.substr(1)), isNaN(d)) ? a : String.fromCharCode(d);
      }
    });
  };
  e.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
  e.string.whitespaceEscape = function (a, c) {
    return e.string.newLineToBr(a.replace(/  /g, " &#160;"), c);
  };
  e.string.preserveSpaces = function (a) {
    return a.replace(/(^|[\n ]) /g, "$1" + e.string.Unicode.NBSP);
  };
  e.string.stripQuotes = function (a, c) {
    for (var d = c.length, f = 0; f < d; f++) {
      var g = 1 == d ? c : c.charAt(f);
      if (a.charAt(0) == g && a.charAt(a.length - 1) == g) return a.substring(1, a.length - 1);
    }
    return a;
  };
  e.string.truncate = function (a, c, d) {
    d && (a = e.string.unescapeEntities(a));
    a.length > c && (a = a.substring(0, c - 3) + "...");
    d && (a = e.string.htmlEscape(a));
    return a;
  };
  e.string.truncateMiddle = function (a, c, d, f) {
    d && (a = e.string.unescapeEntities(a));
    if (f && a.length > c) {
      f > c && (f = c);
      var g = a.length - f;
      a = a.substring(0, c - f) + "..." + a.substring(g);
    } else a.length > c && (f = Math.floor(c / 2), g = a.length - f, a = a.substring(0, f + c % 2) + "..." + a.substring(g));
    d && (a = e.string.htmlEscape(a));
    return a;
  };
  e.string.specialEscapeChars_ = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C"
  };
  e.string.jsEscapeCache_ = {
    "'": "\\'"
  };
  e.string.quote = function (a) {
    a = String(a);
    for (var c = ['"'], d = 0; d < a.length; d++) {
      var f = a.charAt(d),
        g = f.charCodeAt(0);
      c[d + 1] = e.string.specialEscapeChars_[f] || (31 < g && 127 > g ? f : e.string.escapeChar(f));
    }
    c.push('"');
    return c.join("");
  };
  e.string.escapeString = function (a) {
    for (var c = [], d = 0; d < a.length; d++) c[d] = e.string.escapeChar(a.charAt(d));
    return c.join("");
  };
  e.string.escapeChar = function (a) {
    if (a in e.string.jsEscapeCache_) return e.string.jsEscapeCache_[a];
    if (a in e.string.specialEscapeChars_) return e.string.jsEscapeCache_[a] = e.string.specialEscapeChars_[a];
    var c = a.charCodeAt(0);
    if (31 < c && 127 > c) var d = a;else {
      if (256 > c) {
        if (d = "\\x", 16 > c || 256 < c) d += "0";
      } else d = "\\u", 4096 > c && (d += "0");
      d += c.toString(16).toUpperCase();
    }
    return e.string.jsEscapeCache_[a] = d;
  };
  e.string.contains = e.string.internal.contains;
  e.string.caseInsensitiveContains = e.string.internal.caseInsensitiveContains;
  e.string.countOf = function (a, c) {
    return a && c ? a.split(c).length - 1 : 0;
  };
  e.string.removeAt = function (a, c, d) {
    var f = a;
    0 <= c && c < a.length && 0 < d && (f = a.substr(0, c) + a.substr(c + d, a.length - c - d));
    return f;
  };
  e.string.remove = function (a, c) {
    return a.replace(c, "");
  };
  e.string.removeAll = function (a, c) {
    c = new RegExp(e.string.regExpEscape(c), "g");
    return a.replace(c, "");
  };
  e.string.replaceAll = function (a, c, d) {
    c = new RegExp(e.string.regExpEscape(c), "g");
    return a.replace(c, d.replace(/\$/g, "$$$$"));
  };
  e.string.regExpEscape = function (a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  };
  e.string.repeat = String.prototype.repeat ? function (a, c) {
    return a.repeat(c);
  } : function (a, c) {
    return Array(c + 1).join(a);
  };
  e.string.padNumber = function (a, c, d) {
    a = void 0 !== d ? a.toFixed(d) : String(a);
    d = a.indexOf(".");
    -1 == d && (d = a.length);
    return e.string.repeat("0", Math.max(0, c - d)) + a;
  };
  e.string.makeSafe = function (a) {
    return null == a ? "" : String(a);
  };
  e.string.buildString = function (a) {
    return Array.prototype.join.call(arguments, "");
  };
  e.string.getRandomString = function () {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ e.now()).toString(36);
  };
  e.string.compareVersions = e.string.internal.compareVersions;
  e.string.hashCode = function (a) {
    for (var c = 0, d = 0; d < a.length; ++d) c = 31 * c + a.charCodeAt(d) >>> 0;
    return c;
  };
  e.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
  e.string.createUniqueString = function () {
    return "goog_" + e.string.uniqueStringCounter_++;
  };
  e.string.toNumber = function (a) {
    var c = Number(a);
    return 0 == c && e.string.isEmptyOrWhitespace(a) ? NaN : c;
  };
  e.string.isLowerCamelCase = function (a) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
  };
  e.string.isUpperCamelCase = function (a) {
    return /^([A-Z][a-z]*)+$/.test(a);
  };
  e.string.toCamelCase = function (a) {
    return String(a).replace(/\-([a-z])/g, function (a, d) {
      return d.toUpperCase();
    });
  };
  e.string.toSelectorCase = function (a) {
    return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
  };
  e.string.toTitleCase = function (a, c) {
    c = "string" === typeof c ? e.string.regExpEscape(c) : "\\s";
    return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function (a, c, g) {
      return c + g.toUpperCase();
    });
  };
  e.string.capitalize = function (a) {
    return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
  };
  e.string.parseInt = function (a) {
    isFinite(a) && (a = String(a));
    return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
  };
  e.string.splitLimit = function (a, c, d) {
    a = a.split(c);
    for (var f = []; 0 < d && a.length;) f.push(a.shift()), d--;
    a.length && f.push(a.join(c));
    return f;
  };
  e.string.lastComponent = function (a, c) {
    if (c) "string" == typeof c && (c = [c]);else return a;
    for (var d = -1, f = 0; f < c.length; f++) if ("" != c[f]) {
      var g = a.lastIndexOf(c[f]);
      g > d && (d = g);
    }
    return -1 == d ? a : a.slice(d + 1);
  };
  e.string.editDistance = function (a, c) {
    var d = [],
      f = [];
    if (a == c) return 0;
    if (!a.length || !c.length) return Math.max(a.length, c.length);
    for (var g = 0; g < c.length + 1; g++) d[g] = g;
    for (g = 0; g < a.length; g++) {
      f[0] = g + 1;
      for (var h = 0; h < c.length; h++) f[h + 1] = Math.min(f[h] + 1, d[h + 1] + 1, d[h] + Number(a[g] != c[h]));
      for (h = 0; h < d.length; h++) d[h] = f[h];
    }
    return f[c.length];
  };
  e.labs.userAgent.engine = {};
  e.labs.userAgent.engine.isPresto = function () {
    return e.labs.userAgent.util.matchUserAgent("Presto");
  };
  e.labs.userAgent.engine.isTrident = function () {
    return e.labs.userAgent.util.matchUserAgent("Trident") || e.labs.userAgent.util.matchUserAgent("MSIE");
  };
  e.labs.userAgent.engine.isEdge = function () {
    return e.labs.userAgent.util.matchUserAgent("Edge");
  };
  e.labs.userAgent.engine.isWebKit = function () {
    return e.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !e.labs.userAgent.engine.isEdge();
  };
  e.labs.userAgent.engine.isGecko = function () {
    return e.labs.userAgent.util.matchUserAgent("Gecko") && !e.labs.userAgent.engine.isWebKit() && !e.labs.userAgent.engine.isTrident() && !e.labs.userAgent.engine.isEdge();
  };
  e.labs.userAgent.engine.getVersion = function () {
    var a = e.labs.userAgent.util.getUserAgent();
    if (a) {
      a = e.labs.userAgent.util.extractVersionTuples(a);
      var c = e.labs.userAgent.engine.getEngineTuple_(a);
      if (c) return "Gecko" == c[0] ? e.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : c[1];
      a = a[0];
      var d;
      if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) return d[1];
    }
    return "";
  };
  e.labs.userAgent.engine.getEngineTuple_ = function (a) {
    if (!e.labs.userAgent.engine.isEdge()) return a[1];
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      if ("Edge" == d[0]) return d;
    }
  };
  e.labs.userAgent.engine.isVersionOrHigher = function (a) {
    return 0 <= e.string.compareVersions(e.labs.userAgent.engine.getVersion(), a);
  };
  e.labs.userAgent.engine.getVersionForKey_ = function (a, c) {
    return (a = e.array.find(a, function (a) {
      return c == a[0];
    })) && a[1] || "";
  };
  e.labs.userAgent.platform = {};
  e.labs.userAgent.platform.isAndroid = function () {
    return e.labs.userAgent.util.matchUserAgent("Android");
  };
  e.labs.userAgent.platform.isIpod = function () {
    return e.labs.userAgent.util.matchUserAgent("iPod");
  };
  e.labs.userAgent.platform.isIphone = function () {
    return e.labs.userAgent.util.matchUserAgent("iPhone") && !e.labs.userAgent.util.matchUserAgent("iPod") && !e.labs.userAgent.util.matchUserAgent("iPad");
  };
  e.labs.userAgent.platform.isIpad = function () {
    return e.labs.userAgent.util.matchUserAgent("iPad");
  };
  e.labs.userAgent.platform.isIos = function () {
    return e.labs.userAgent.platform.isIphone() || e.labs.userAgent.platform.isIpad() || e.labs.userAgent.platform.isIpod();
  };
  e.labs.userAgent.platform.isMacintosh = function () {
    return e.labs.userAgent.util.matchUserAgent("Macintosh");
  };
  e.labs.userAgent.platform.isLinux = function () {
    return e.labs.userAgent.util.matchUserAgent("Linux");
  };
  e.labs.userAgent.platform.isWindows = function () {
    return e.labs.userAgent.util.matchUserAgent("Windows");
  };
  e.labs.userAgent.platform.isChromeOS = function () {
    return e.labs.userAgent.util.matchUserAgent("CrOS");
  };
  e.labs.userAgent.platform.isChromecast = function () {
    return e.labs.userAgent.util.matchUserAgent("CrKey");
  };
  e.labs.userAgent.platform.isKaiOS = function () {
    return e.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
  };
  e.labs.userAgent.platform.getVersion = function () {
    var a = e.labs.userAgent.util.getUserAgent(),
      c = "";
    e.labs.userAgent.platform.isWindows() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : e.labs.userAgent.platform.isIos() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : e.labs.userAgent.platform.isMacintosh() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : e.labs.userAgent.platform.isKaiOS() ? (c = /(?:KaiOS)\/(\S+)/i, c = (a = c.exec(a)) && a[1]) : e.labs.userAgent.platform.isAndroid() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : e.labs.userAgent.platform.isChromeOS() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, c = (a = c.exec(a)) && a[1]);
    return c || "";
  };
  e.labs.userAgent.platform.isVersionOrHigher = function (a) {
    return 0 <= e.string.compareVersions(e.labs.userAgent.platform.getVersion(), a);
  };
  e.reflect = {};
  e.reflect.object = function (a, c) {
    return c;
  };
  e.reflect.objectProperty = function (a) {
    return a;
  };
  e.reflect.sinkValue = function (a) {
    e.reflect.sinkValue[" "](a);
    return a;
  };
  e.reflect.sinkValue[" "] = e.nullFunction;
  e.reflect.canAccessProperty = function (a, c) {
    try {
      return e.reflect.sinkValue(a[c]), !0;
    } catch (d) {}
    return !1;
  };
  e.reflect.cache = function (a, c, d, f) {
    f = f ? f(c) : c;
    return Object.prototype.hasOwnProperty.call(a, f) ? a[f] : a[f] = d(c);
  };
  e.userAgent = {};
  e.userAgent.ASSUME_IE = !1;
  e.userAgent.ASSUME_EDGE = !1;
  e.userAgent.ASSUME_GECKO = !1;
  e.userAgent.ASSUME_WEBKIT = !1;
  e.userAgent.ASSUME_MOBILE_WEBKIT = !1;
  e.userAgent.ASSUME_OPERA = !1;
  e.userAgent.ASSUME_ANY_VERSION = !1;
  e.userAgent.BROWSER_KNOWN_ = e.userAgent.ASSUME_IE || e.userAgent.ASSUME_EDGE || e.userAgent.ASSUME_GECKO || e.userAgent.ASSUME_MOBILE_WEBKIT || e.userAgent.ASSUME_WEBKIT || e.userAgent.ASSUME_OPERA;
  e.userAgent.getUserAgentString = function () {
    return e.labs.userAgent.util.getUserAgent();
  };
  e.userAgent.getNavigatorTyped = function () {
    return e.global.navigator || null;
  };
  e.userAgent.getNavigator = function () {
    return e.userAgent.getNavigatorTyped();
  };
  e.userAgent.OPERA = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_OPERA : e.labs.userAgent.browser.isOpera();
  e.userAgent.IE = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_IE : e.labs.userAgent.browser.isIE();
  e.userAgent.EDGE = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_EDGE : e.labs.userAgent.engine.isEdge();
  e.userAgent.EDGE_OR_IE = e.userAgent.EDGE || e.userAgent.IE;
  e.userAgent.GECKO = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_GECKO : e.labs.userAgent.engine.isGecko();
  e.userAgent.WEBKIT = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_WEBKIT || e.userAgent.ASSUME_MOBILE_WEBKIT : e.labs.userAgent.engine.isWebKit();
  e.userAgent.isMobile_ = function () {
    return e.userAgent.WEBKIT && e.labs.userAgent.util.matchUserAgent("Mobile");
  };
  e.userAgent.MOBILE = e.userAgent.ASSUME_MOBILE_WEBKIT || e.userAgent.isMobile_();
  e.userAgent.SAFARI = e.userAgent.WEBKIT;
  e.userAgent.determinePlatform_ = function () {
    var a = e.userAgent.getNavigatorTyped();
    return a && a.platform || "";
  };
  e.userAgent.PLATFORM = e.userAgent.determinePlatform_();
  e.userAgent.ASSUME_MAC = !1;
  e.userAgent.ASSUME_WINDOWS = !1;
  e.userAgent.ASSUME_LINUX = !1;
  e.userAgent.ASSUME_X11 = !1;
  e.userAgent.ASSUME_ANDROID = !1;
  e.userAgent.ASSUME_IPHONE = !1;
  e.userAgent.ASSUME_IPAD = !1;
  e.userAgent.ASSUME_IPOD = !1;
  e.userAgent.ASSUME_KAIOS = !1;
  e.userAgent.PLATFORM_KNOWN_ = e.userAgent.ASSUME_MAC || e.userAgent.ASSUME_WINDOWS || e.userAgent.ASSUME_LINUX || e.userAgent.ASSUME_X11 || e.userAgent.ASSUME_ANDROID || e.userAgent.ASSUME_IPHONE || e.userAgent.ASSUME_IPAD || e.userAgent.ASSUME_IPOD;
  e.userAgent.MAC = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_MAC : e.labs.userAgent.platform.isMacintosh();
  e.userAgent.WINDOWS = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_WINDOWS : e.labs.userAgent.platform.isWindows();
  e.userAgent.isLegacyLinux_ = function () {
    return e.labs.userAgent.platform.isLinux() || e.labs.userAgent.platform.isChromeOS();
  };
  e.userAgent.LINUX = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_LINUX : e.userAgent.isLegacyLinux_();
  e.userAgent.isX11_ = function () {
    var a = e.userAgent.getNavigatorTyped();
    return !!a && e.string.contains(a.appVersion || "", "X11");
  };
  e.userAgent.X11 = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_X11 : e.userAgent.isX11_();
  e.userAgent.ANDROID = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_ANDROID : e.labs.userAgent.platform.isAndroid();
  e.userAgent.IPHONE = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPHONE : e.labs.userAgent.platform.isIphone();
  e.userAgent.IPAD = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPAD : e.labs.userAgent.platform.isIpad();
  e.userAgent.IPOD = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPOD : e.labs.userAgent.platform.isIpod();
  e.userAgent.IOS = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPHONE || e.userAgent.ASSUME_IPAD || e.userAgent.ASSUME_IPOD : e.labs.userAgent.platform.isIos();
  e.userAgent.KAIOS = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_KAIOS : e.labs.userAgent.platform.isKaiOS();
  e.userAgent.determineVersion_ = function () {
    var a = "",
      c = e.userAgent.getVersionRegexResult_();
    c && (a = c ? c[1] : "");
    return e.userAgent.IE && (c = e.userAgent.getDocumentMode_(), null != c && c > parseFloat(a)) ? String(c) : a;
  };
  e.userAgent.getVersionRegexResult_ = function () {
    var a = e.userAgent.getUserAgentString();
    if (e.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(a);
    if (e.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(a);
    if (e.userAgent.IE) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (e.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(a);
    if (e.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(a);
  };
  e.userAgent.getDocumentMode_ = function () {
    var a = e.global.document;
    return a ? a.documentMode : void 0;
  };
  e.userAgent.VERSION = e.userAgent.determineVersion_();
  e.userAgent.compare = function (a, c) {
    return e.string.compareVersions(a, c);
  };
  e.userAgent.isVersionOrHigherCache_ = {};
  e.userAgent.isVersionOrHigher = function (a) {
    return e.userAgent.ASSUME_ANY_VERSION || e.reflect.cache(e.userAgent.isVersionOrHigherCache_, a, function () {
      return 0 <= e.string.compareVersions(e.userAgent.VERSION, a);
    });
  };
  e.userAgent.isVersion = e.userAgent.isVersionOrHigher;
  e.userAgent.isDocumentModeOrHigher = function (a) {
    return Number(e.userAgent.DOCUMENT_MODE) >= a;
  };
  e.userAgent.isDocumentMode = e.userAgent.isDocumentModeOrHigher;
  var u = e.userAgent,
    x;
  if (e.global.document && e.userAgent.IE) {
    var z = e.userAgent.getDocumentMode_();
    x = z ? z : parseInt(e.userAgent.VERSION, 10) || void 0;
  } else x = void 0;
  u.DOCUMENT_MODE = x;
  var A = {
    BlockSvg: function (a) {
      this.block_ = a;
      this.svgGroup_ = A.createSvgElement("g", {}, null);
      this.svgPathDark_ = A.createSvgElement("path", {
        "class": "blocklyPathDark",
        transform: "translate(0, 5)"
      }, this.svgGroup_);
      this.svgPath_ = A.createSvgElement("path", {
        "class": "blocklyPath"
      }, this.svgGroup_);
      this.block_.getFillPattern() && (this.svgPathFill_ = A.createSvgElement("path", {
        "class": "blocklyPath"
      }, this.svgGroup_));
      this.svgPathLight_ = A.createSvgElement("path", {
        "class": "blocklyPathLight"
      }, this.svgGroup_);
      this.svgPathTouch_ = A.createSvgElement("path", {
        "class": "blocklyPathTouch",
        transform: "translate(8, 14)",
        d: A.BlockSvg.TOUCH_PATH
      }, this.svgGroup_);
      this.svgPath_.tooltip = this.block_;
      A.Tooltip.bindMouseEvents(this.svgPath_);
      this.updateMovable();
    }
  };
  A.BlockSvg.prototype.height = 0;
  A.BlockSvg.prototype.width = 0;
  A.BlockSvg.INLINE = -1;
  A.BlockSvg.prototype.init = function () {
    var a = this.block_;
    this.updateColour();
    for (var c = 0, d; d = a.inputList[c]; c++) d.init();
    a.mutator && a.mutator.createIcon();
  };
  A.BlockSvg.prototype.updateMovable = function () {
    this.block_.isMovable() ? A.addClass_(this.svgGroup_, "blocklyDraggable") : A.removeClass_(this.svgGroup_, "blocklyDraggable");
  };
  A.BlockSvg.prototype.getRootElement = function () {
    return this.svgGroup_;
  };
  A.BlockSvg.SEP_SPACE_X = 12;
  A.BlockSvg.SEP_SPACE_Y = 20;
  A.BlockSvg.INLINE_PADDING_Y = 5;
  A.BlockSvg.MIN_BLOCK_Y = 42;
  A.BlockSvg.TAB_HEIGHT = 20;
  A.BlockSvg.TAB_WIDTH = 8;
  A.BlockSvg.NOTCH_WIDTH = 40;
  A.BlockSvg.NOTCH_RADIUS = 8;
  A.BlockSvg.CORNER_RADIUS = 8;
  A.BlockSvg.FIELD_HEIGHT = 26;
  A.BlockSvg.DISTANCE_45_INSIDE = (1 - Math.SQRT1_2) * (A.BlockSvg.CORNER_RADIUS - 1) + 1;
  A.BlockSvg.DISTANCE_45_OUTSIDE = (1 - Math.SQRT1_2) * (A.BlockSvg.CORNER_RADIUS + 1) - 1;
  A.BlockSvg.NOTCH_PATH_LEFT = "a " + A.BlockSvg.NOTCH_RADIUS + "," + A.BlockSvg.NOTCH_RADIUS + " 0 0,1 " + 2 * A.BlockSvg.NOTCH_RADIUS + ",0";
  A.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT = "a " + A.BlockSvg.NOTCH_RADIUS + "," + A.BlockSvg.NOTCH_RADIUS + " 0 0,1 " + 2 * A.BlockSvg.NOTCH_RADIUS + ",0";
  A.BlockSvg.NOTCH_PATH_RIGHT = "a " + A.BlockSvg.NOTCH_RADIUS + "," + A.BlockSvg.NOTCH_RADIUS + " 0 1,0 " + 2 * -A.BlockSvg.NOTCH_RADIUS + ",0";
  A.BlockSvg.NOTCH_HIGHLIGHT = "m " + (2 * -A.BlockSvg.NOTCH_RADIUS - 5) + ",0 h 5 " + A.BlockSvg.NOTCH_PATH_LEFT + " h 5";
  A.BlockSvg.NOTCH_HIGHLIGHT_RTL = "m -5,0 h 5 " + A.BlockSvg.NOTCH_PATH_LEFT + " h 5";
  A.BlockSvg.JAGGED_TEETH = "l 8,0 0,4 8,4 -16,8 8,4";
  A.BlockSvg.JAGGED_TEETH_HEIGHT = 20;
  A.BlockSvg.JAGGED_TEETH_WIDTH = 15;
  A.BlockSvg.TAB_PATH_DOWN = "v 5 c 0,10 -" + A.BlockSvg.TAB_WIDTH + ",-8 -" + A.BlockSvg.TAB_WIDTH + ",7.5 s " + A.BlockSvg.TAB_WIDTH + ",-2.5 " + A.BlockSvg.TAB_WIDTH + ",7.5";
  A.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL = "v 6.5 m -" + .98 * A.BlockSvg.TAB_WIDTH + ",2.5 q -" + .05 * A.BlockSvg.TAB_WIDTH + ",10 " + .27 * A.BlockSvg.TAB_WIDTH + ",10 m " + .71 * A.BlockSvg.TAB_WIDTH + ",-2.5 v 1.5";
  A.BlockSvg.TOP_LEFT_CORNER_START = "m 0," + A.BlockSvg.CORNER_RADIUS;
  A.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL = "m " + A.BlockSvg.DISTANCE_45_INSIDE + "," + A.BlockSvg.DISTANCE_45_INSIDE;
  A.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR = "m 1," + (A.BlockSvg.CORNER_RADIUS - 1);
  A.BlockSvg.TOP_LEFT_CORNER = "A " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS + " 0 0,1 " + A.BlockSvg.CORNER_RADIUS + ",0";
  A.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT = "A " + (A.BlockSvg.CORNER_RADIUS - 1) + "," + (A.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 " + A.BlockSvg.CORNER_RADIUS + ",1";
  A.BlockSvg.TOP_RIGHT_CORNER = "a " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS + " 0 0,1 " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS;
  A.BlockSvg.TOP_RIGHT_CORNER_HIGHLIGHT = "a " + (A.BlockSvg.CORNER_RADIUS - 1) + "," + (A.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 " + A.BlockSvg.CORNER_RADIUS + "," + (A.BlockSvg.CORNER_RADIUS + 1);
  A.BlockSvg.BOTTOM_RIGHT_CORNER = "a " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS + " 0 0,1 " + -A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS;
  A.BlockSvg.INNER_TOP_LEFT_CORNER = A.BlockSvg.NOTCH_PATH_RIGHT + " h -" + (A.BlockSvg.NOTCH_WIDTH - 2 * A.BlockSvg.NOTCH_RADIUS - A.BlockSvg.CORNER_RADIUS) + " a " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS + " 0 0,0 -" + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS;
  A.BlockSvg.INNER_BOTTOM_LEFT_CORNER = "a " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS + " 0 0,0 " + A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS;
  A.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (A.BlockSvg.CORNER_RADIUS + 1) + "," + (A.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (-A.BlockSvg.DISTANCE_45_OUTSIDE - 1) + "," + (A.BlockSvg.CORNER_RADIUS - A.BlockSvg.DISTANCE_45_OUTSIDE);
  A.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (A.BlockSvg.CORNER_RADIUS + 1) + "," + (A.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (A.BlockSvg.CORNER_RADIUS + 1) + "," + (A.BlockSvg.CORNER_RADIUS + 1);
  A.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR = "a " + (A.BlockSvg.CORNER_RADIUS + 1) + "," + (A.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (A.BlockSvg.CORNER_RADIUS - A.BlockSvg.DISTANCE_45_OUTSIDE) + "," + (A.BlockSvg.DISTANCE_45_OUTSIDE + 1);
  A.BlockSvg.TOUCH_PATH = "M13.5,3h-12C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0h12C14.3,0,15,0.7,15,1.5S14.3,3,13.5,3zM15,7.5C15,6.7,14.3,6,13.5,6h-12C0.7,6,0,6.7,0,7.5C0,8.3,0.7,9,1.5,9h12C14.3,9,15,8.3,15,7.5zM15,13.5c0-0.8-0.7-1.5-1.5-1.5h-12C0.7,12,0,12.7,0,13.5S0.7,15,1.5,15h12C14.3,15,15,14.3,15,13.5z";
  A.BlockSvg.prototype.dispose = function () {
    e.dom.removeNode(this.svgGroup_);
    this.block_ = this.svgPathTouch_ = this.svgPathDark_ = this.svgPathLight_ = this.svgPath_ = this.svgGroup_ = null;
  };
  A.BlockSvg.prototype.disposeUiEffect = function () {
    A.playAudio("delete");
    l.triggerEvent("computer_trash");
    var a = A.getSvgXY_(this.svgGroup_),
      c = this.svgGroup_.cloneNode(!0);
    c.translateX_ = a.x;
    c.translateY_ = a.y;
    c.setAttribute("transform", "translate(" + c.translateX_ + "," + c.translateY_ + ")");
    A.svg.appendChild(c);
    c.bBox_ = c.getBBox();
    c.startDate_ = new Date();
    A.BlockSvg.disposeUiStep_(c);
  };
  A.BlockSvg.disposeUiStep_ = function (a) {
    var c = (new Date() - a.startDate_) / 150;
    1 < c ? e.dom.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.translateX_ + (A.RTL ? -1 : 1) * a.bBox_.width / 2 * c + ", " + (a.translateY_ + a.bBox_.height * c)) + ") scale(" + (1 - c) + ")"), window.setTimeout(function () {
      A.BlockSvg.disposeUiStep_(a);
    }, 10));
  };
  A.BlockSvg.prototype.connectionUiEffect = function () {
    A.playAudio("click");
    l.triggerEvent("computer_connect");
    var a = A.getSvgXY_(this.svgGroup_);
    this.block_.outputConnection ? (a.x += A.RTL ? 3 : -3, a.y += 13) : this.block_.previousConnection && (a.x += A.RTL ? -23 : 23, a.y += 3);
    a = A.createSvgElement("circle", {
      cx: a.x,
      cy: a.y,
      r: 0,
      fill: "none",
      stroke: "#888",
      "stroke-width": 10
    }, A.svg);
    a.startDate_ = new Date();
    A.BlockSvg.connectionUiStep_(a);
  };
  A.BlockSvg.connectionUiStep_ = function (a) {
    var c = (new Date() - a.startDate_) / 150;
    1 < c ? e.dom.removeNode(a) : (a.setAttribute("r", 25 * c), a.style.opacity = 1 - c, window.setTimeout(function () {
      A.BlockSvg.connectionUiStep_(a);
    }, 10));
  };
  A.BlockSvg.prototype.updateColour = function () {
    if (!this.block_.disabled) {
      var a = this.block_.getHexColour(),
        c = e.color.hexToRgb(a);
      c = e.color.darken(c, .2);
      this.svgPathDark_.setAttribute("fill", e.color.rgbArrayToHex(c));
      this.svgPath_.setAttribute("fill", a);
      this.svgPathTouch_.setAttribute("fill", e.color.rgbArrayToHex(c));
      (a = this.block_.getFillPattern()) && this.svgPathFill_.setAttribute("fill", "url(#" + a + ")");
    }
  };
  A.BlockSvg.prototype.updateDisabled = function () {
    this.block_.disabled || this.block_.getInheritedDisabled() ? (A.addClass_(this.svgGroup_, "blocklyDisabled"), this.svgPath_.setAttribute("fill", "url(#blocklyDisabledPattern)")) : (A.removeClass_(this.svgGroup_, "blocklyDisabled"), this.updateColour());
    for (var a = this.block_.getChildren(), c = 0, d; d = a[c]; c++) d.svg_.updateDisabled();
  };
  A.BlockSvg.prototype.addSelect = function () {
    A.addClass_(this.svgGroup_, "blocklySelected");
    !this.block_.isInFlyout && this.svgGroup_.parentNode && this.svgGroup_.parentNode.lastChild !== this.svgGroup_ && this.svgGroup_.parentNode.appendChild(this.svgGroup_);
  };
  A.BlockSvg.prototype.removeSelect = function () {
    A.removeClass_(this.svgGroup_, "blocklySelected");
  };
  A.BlockSvg.prototype.addDragging = function () {
    A.addClass_(this.svgGroup_, "blocklyDragging");
  };
  A.BlockSvg.prototype.removeDragging = function () {
    A.removeClass_(this.svgGroup_, "blocklyDragging");
  };
  A.BlockSvg.prototype.rowIndent = function () {
    return A.touch && !this.block_.mini ? 3.5 * A.BlockSvg.SEP_SPACE_X : A.BlockSvg.SEP_SPACE_X;
  };
  A.BlockSvg.prototype.render = function () {
    this.block_.rendered = !0;
    var a = A.BlockSvg.SEP_SPACE_X;
    A.RTL && (a = -a);
    for (var c = this.block_.getIcons(), d = 0; d < c.length; d++) a = c[d].renderIcon(a);
    a += A.RTL ? A.BlockSvg.SEP_SPACE_X : -A.BlockSvg.SEP_SPACE_X;
    c = this.renderCompute_(a);
    this.renderDraw_(a, c);
    (a = this.block_.getParent()) ? a.render() : A.fireUiEvent(window, "resize");
  };
  A.BlockSvg.prototype.renderFields_ = function (a, c, d) {
    A.RTL && (c = -c);
    for (var f = 0, g; g = a[f]; f++) A.RTL ? (c -= g.renderSep + g.renderWidth, g.getRootElement().setAttribute("transform", "translate(" + c + ", " + d + ")"), g.renderWidth && (c -= A.BlockSvg.SEP_SPACE_X)) : (g.getRootElement().setAttribute("transform", "translate(" + (c + g.renderSep) + ", " + d + ")"), g.renderWidth && (c += g.renderSep + g.renderWidth + A.BlockSvg.SEP_SPACE_X));
    return A.RTL ? -c : c;
  };
  A.BlockSvg.prototype.renderCompute_ = function (a) {
    var c = this.block_.inputList,
      d = [];
    d.rightEdge = a + 2 * A.BlockSvg.SEP_SPACE_X;
    if (this.block_.previousConnection || this.block_.nextConnection) d.rightEdge = Math.max(d.rightEdge, A.BlockSvg.NOTCH_WIDTH + A.BlockSvg.SEP_SPACE_X);
    for (var f = 0, g = 0, h = !1, k = !1, m = !1, n = void 0, p = this.block_.inputsInline && !this.block_.isCollapsed(), r = 0, q; q = c[r]; r++) if (q.isVisible()) {
      if (p && n && n != A.NEXT_STATEMENT && q.type != A.NEXT_STATEMENT) var v = d[d.length - 1];else n = q.type, v = [], v.type = p && q.type != A.NEXT_STATEMENT ? A.BlockSvg.INLINE : q.type, v.height = 0, d.push(v);
      v.push(q);
      q.renderHeight = A.BlockSvg.MIN_BLOCK_Y;
      q.renderWidth = p && q.type == A.INPUT_VALUE ? A.BlockSvg.TAB_WIDTH + 1.25 * A.BlockSvg.SEP_SPACE_X : 0;
      if (q.connection && q.connection.targetConnection) {
        var t = q.connection.targetBlock().getHeightWidth();
        q.renderHeight = Math.max(q.renderHeight, t.height + 4 + 3);
        q.renderWidth = Math.max(q.renderWidth, t.width);
      }
      r == c.length - 1 && q.renderHeight--;
      v.height = Math.max(v.height, q.renderHeight);
      q.fieldWidth = 0;
      1 == d.length && (q.fieldWidth += A.RTL ? -a : a);
      t = !1;
      for (var w = 0, y; y = q.fieldRow[w]; w++) {
        0 != w && (q.fieldWidth += A.BlockSvg.SEP_SPACE_X);
        var C = y.getSize();
        y.renderWidth = C.width;
        y.renderSep = t && y.EDITABLE ? A.BlockSvg.SEP_SPACE_X : 0;
        q.fieldWidth += y.renderWidth + y.renderSep;
        v.height = Math.max(v.height, C.height);
        t = y.EDITABLE;
      }
      v.type != A.BlockSvg.INLINE && (v.type == A.NEXT_STATEMENT ? (k = !0, g = Math.max(g, q.fieldWidth)) : (v.type == A.INPUT_VALUE ? h = !0 : v.type == A.DUMMY_INPUT && (m = !0), f = Math.max(f, q.fieldWidth)));
    }
    for (a = 0; v = d[a]; a++) if (v.thicker = !1, v.type == A.BlockSvg.INLINE) for (c = 0; q = v[c]; c++) if (q.type == A.INPUT_VALUE) {
      v.height += 2 * A.BlockSvg.INLINE_PADDING_Y;
      v.thicker = !0;
      break;
    }
    d.statementEdge = 2 * A.BlockSvg.SEP_SPACE_X + g;
    k && (d.rightEdge = Math.max(d.rightEdge, d.statementEdge + A.BlockSvg.NOTCH_WIDTH));
    h ? d.rightEdge = Math.max(d.rightEdge, f + this.rowIndent() + A.BlockSvg.SEP_SPACE_X + A.BlockSvg.TAB_WIDTH) : m && (d.rightEdge = Math.max(d.rightEdge, f + this.rowIndent() + A.BlockSvg.SEP_SPACE_X));
    d.hasValue = h;
    d.hasStatement = k;
    d.hasDummy = m;
    return d;
  };
  A.BlockSvg.prototype.renderDraw_ = function (a, c) {
    if (this.block_.outputConnection) this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !0;else if (this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !1, this.block_.previousConnection) {
      var d = this.block_.previousConnection.targetBlock();
      d && d.getNextBlock();
    }
    var f = this.block_.getRelativeToSurfaceXY(),
      g = [],
      h = [];
    d = [];
    var k = [];
    this.renderDrawTop_(g, d, f, c.rightEdge);
    a = this.renderDrawRight_(g, d, h, k, f, c, a);
    this.renderDrawBottom_(g, d, f, a);
    this.renderDrawLeft_(g, d, f, a);
    a = g.join(" ") + "\n" + h.join(" ");
    this.svgPath_.setAttribute("d", a);
    this.svgPathFill_ && this.svgPathFill_.setAttribute("d", a);
    this.svgPathDark_.setAttribute("d", a);
    a = d.join(" ") + "\n" + k.join(" ");
    this.svgPathLight_.setAttribute("d", a);
    this.svgPathTouch_.setAttribute("display", A.touch && !this.block_.mini ? "" : "none");
    A.RTL && (this.svgPath_.setAttribute("transform", "scale(-1 1)"), this.svgPathLight_.setAttribute("transform", "scale(-1 1)"), this.svgPathDark_.setAttribute("transform", "translate(0,5) scale(-1 1)"), this.svgPathTouch_.setAttribute("transform", "translate(-8,14) scale(-1 1)"));
  };
  A.BlockSvg.prototype.renderDrawTop_ = function (a, c, d, f) {
    this.squareTopLeftCorner_ ? (a.push("m 0,0"), c.push("m 1,1")) : (a.push(A.BlockSvg.TOP_LEFT_CORNER_START), c.push(A.RTL ? A.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL : A.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR), a.push(A.BlockSvg.TOP_LEFT_CORNER), c.push(A.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT));
    this.block_.previousConnection && (a.push("H", A.BlockSvg.NOTCH_WIDTH - 2 * A.BlockSvg.NOTCH_RADIUS), c.push("H", A.BlockSvg.NOTCH_WIDTH - 2 * A.BlockSvg.NOTCH_RADIUS), a.push(A.BlockSvg.NOTCH_PATH_LEFT), c.push(A.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT), this.block_.previousConnection.moveTo(d.x + (A.RTL ? -A.BlockSvg.NOTCH_WIDTH : A.BlockSvg.NOTCH_WIDTH), d.y));
    a.push("H", f - A.BlockSvg.CORNER_RADIUS);
    a.push(A.BlockSvg.TOP_RIGHT_CORNER);
    c.push("H", f - A.BlockSvg.CORNER_RADIUS + (A.RTL ? -1 : 0));
    c.push(A.BlockSvg.TOP_RIGHT_CORNER_HIGHLIGHT);
    this.width = f;
  };
  A.BlockSvg.prototype.renderDrawRight_ = function (a, c, d, f, g, h, k) {
    for (var m, n = 0, p, r, q = 0, v; v = h[q]; q++) {
      m = this.rowIndent();
      0 == q && (m += A.RTL ? -k : k);
      c.push("M", h.rightEdge - 1 + "," + (n + 1));
      if (this.block_.isCollapsed()) {
        var t = v[0];
        p = n + A.BlockSvg.FIELD_HEIGHT;
        this.renderFields_(t.fieldRow, m, p);
        a.push(A.BlockSvg.JAGGED_TEETH);
        A.RTL ? c.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4") : c.push("h 8");
        this.renderDrawRightEdge_(a, c, n + (v.height - A.BlockSvg.JAGGED_TEETH_HEIGHT), q === h.length - 1);
        this.width += A.BlockSvg.JAGGED_TEETH_WIDTH;
      } else if (v.type == A.BlockSvg.INLINE) {
        for (var w = 0; t = v[w]; w++) p = n + A.BlockSvg.FIELD_HEIGHT, v.thicker && (p += A.BlockSvg.INLINE_PADDING_Y), m = this.renderFields_(t.fieldRow, m, p), t.type != A.DUMMY_INPUT && (m += t.renderWidth + A.BlockSvg.SEP_SPACE_X), t.type == A.INPUT_VALUE && (d.push("M", m - A.BlockSvg.SEP_SPACE_X + "," + (n + A.BlockSvg.INLINE_PADDING_Y)), d.push("h", A.BlockSvg.TAB_WIDTH - 2 - t.renderWidth), d.push(A.BlockSvg.TAB_PATH_DOWN), d.push("v", t.renderHeight + 1 - A.BlockSvg.TAB_HEIGHT), d.push("h", t.renderWidth + 2 - A.BlockSvg.TAB_WIDTH), d.push("z"), A.RTL ? (f.push("M", m - A.BlockSvg.SEP_SPACE_X - 3 + A.BlockSvg.TAB_WIDTH - t.renderWidth + "," + (n + A.BlockSvg.INLINE_PADDING_Y + 1)), f.push(A.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL), f.push("v", t.renderHeight - A.BlockSvg.TAB_HEIGHT + 3), f.push("h", t.renderWidth - A.BlockSvg.TAB_WIDTH + 1)) : (f.push("M", m - A.BlockSvg.SEP_SPACE_X + 1 + "," + (n + A.BlockSvg.INLINE_PADDING_Y + 1)), f.push("v", t.renderHeight + 1), f.push("h", A.BlockSvg.TAB_WIDTH - 2 - t.renderWidth), f.push("M", m - t.renderWidth - A.BlockSvg.SEP_SPACE_X + .8 + "," + (n + A.BlockSvg.INLINE_PADDING_Y + A.BlockSvg.TAB_HEIGHT - .4)), f.push("l", .42 * A.BlockSvg.TAB_WIDTH + ",-1.8")), p = A.RTL ? g.x - m - A.BlockSvg.TAB_WIDTH + A.BlockSvg.SEP_SPACE_X + t.renderWidth + 1 : g.x + m + A.BlockSvg.TAB_WIDTH - A.BlockSvg.SEP_SPACE_X - t.renderWidth - 1, r = g.y + n + A.BlockSvg.INLINE_PADDING_Y + 1, t.connection.moveTo(p, r), t.connection.targetConnection && t.connection.tighten_());
        m = Math.max(m, h.rightEdge);
        this.width = Math.max(this.width, m);
        a.push("H", m);
        c.push("H", m + (A.RTL ? -1 : 0));
        this.renderDrawRightEdge_(n + v.height, !1);
      } else v.type == A.INPUT_VALUE ? (t = v[0], p = n + A.BlockSvg.FIELD_HEIGHT, t.align != A.ALIGN_LEFT && (w = h.rightEdge - t.fieldWidth - A.BlockSvg.TAB_WIDTH - 2 * A.BlockSvg.SEP_SPACE_X, t.align == A.ALIGN_RIGHT ? m += w : t.align == A.ALIGN_CENTRE && (m += (w + m) / 2)), this.renderFields_(t.fieldRow, m, p), a.push(A.BlockSvg.TAB_PATH_DOWN), w = v.height - A.BlockSvg.TAB_HEIGHT, a.push("v", w), A.RTL ? (c.push(A.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL), c.push("v", w)) : (c.push("M", h.rightEdge - 4.2 + "," + (n + A.BlockSvg.TAB_HEIGHT - .4)), c.push("l", .42 * A.BlockSvg.TAB_WIDTH + ",-1.8")), p = g.x + (A.RTL ? -h.rightEdge - 1 : h.rightEdge + 1), r = g.y + n, t.connection.moveTo(p, r), t.connection.targetConnection && (t.connection.tighten_(), this.width = Math.max(this.width, h.rightEdge + t.connection.targetBlock().getHeightWidth().width - A.BlockSvg.TAB_WIDTH + 1))) : v.type == A.DUMMY_INPUT ? (t = v[0], p = n + A.BlockSvg.FIELD_HEIGHT, t.align != A.ALIGN_LEFT && (w = h.rightEdge - t.fieldWidth - 2 * A.BlockSvg.SEP_SPACE_X, h.hasValue && (w -= A.BlockSvg.TAB_WIDTH), t.align == A.ALIGN_RIGHT ? m += w : t.align == A.ALIGN_CENTRE && (m += (w + m) / 2)), this.renderFields_(t.fieldRow, m, p), this.renderDrawRightEdge_(a, c, n + v.height, q === h.length - 1)) : v.type == A.NEXT_STATEMENT && (t = v[0], 0 == q && (a.push("v", A.BlockSvg.SEP_SPACE_Y), A.RTL && c.push("v", A.BlockSvg.SEP_SPACE_Y - 1), n += A.BlockSvg.SEP_SPACE_Y), p = n + A.BlockSvg.FIELD_HEIGHT, t.align != A.ALIGN_LEFT && (w = h.statementEdge - t.fieldWidth - 2 * A.BlockSvg.SEP_SPACE_X, t.align == A.ALIGN_RIGHT ? m += w : t.align == A.ALIGN_CENTRE && (m += (w + m) / 2)), this.renderFields_(t.fieldRow, m, p), m = h.statementEdge + A.BlockSvg.NOTCH_WIDTH, a.push("H", m), a.push(A.BlockSvg.INNER_TOP_LEFT_CORNER), a.push("v", v.height - 2 * A.BlockSvg.CORNER_RADIUS), a.push(A.BlockSvg.INNER_BOTTOM_LEFT_CORNER), a.push("H", h.rightEdge), A.RTL ? (c.push("M", m - A.BlockSvg.NOTCH_WIDTH + A.BlockSvg.DISTANCE_45_OUTSIDE + "," + (n + A.BlockSvg.DISTANCE_45_OUTSIDE)), c.push(A.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL), c.push("v", v.height - 2 * A.BlockSvg.CORNER_RADIUS), c.push(A.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL), c.push("H", h.rightEdge - 1)) : (c.push("M", m - A.BlockSvg.NOTCH_WIDTH + A.BlockSvg.DISTANCE_45_OUTSIDE + "," + (n + v.height - A.BlockSvg.DISTANCE_45_OUTSIDE)), c.push(A.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR), c.push("H", h.rightEdge)), p = g.x + (A.RTL ? -m : m), r = g.y + n + 1, t.connection.moveTo(p, r), t.connection.targetConnection && (t.connection.tighten_(), this.width = Math.max(this.width, h.statementEdge + t.connection.targetBlock().getHeightWidth().width)), q == h.length - 1 || h[q + 1].type == A.NEXT_STATEMENT) && (this.renderDrawRightEdge_(a, c, n + v.height + A.BlockSvg.SEP_SPACE_Y, q === h.length - 1), n += A.BlockSvg.SEP_SPACE_Y);
      n += v.height;
    }
    h.length || (n = A.BlockSvg.MIN_BLOCK_Y, this.renderDrawRightEdge_(a, c, n, !0));
    return n;
  };
  A.BlockSvg.prototype.renderDrawRightEdge_ = function (a, c, d, f) {
    f ? (a.push("V", d - A.BlockSvg.CORNER_RADIUS), a.push(A.BlockSvg.BOTTOM_RIGHT_CORNER), A.RTL && c.push("V", d - A.BlockSvg.CORNER_RADIUS - 1)) : (a.push("V", d), A.RTL && c.push("V", d - 1));
  };
  A.BlockSvg.prototype.renderDrawBottom_ = function (a, c, d, f) {
    this.height = f + 1;
    this.block_.nextConnection && (a.push("H", A.BlockSvg.NOTCH_WIDTH + " " + A.BlockSvg.NOTCH_PATH_RIGHT), this.block_.nextConnection.moveTo(A.RTL ? d.x - A.BlockSvg.NOTCH_WIDTH : d.x + A.BlockSvg.NOTCH_WIDTH, d.y + f + 1), this.block_.nextConnection.targetConnection && this.block_.nextConnection.tighten_(), this.height += 4);
    this.squareBottomLeftCorner_ ? (a.push("H 0"), A.RTL || c.push("M", "1," + f)) : (a.push("H", A.BlockSvg.CORNER_RADIUS), a.push("a", A.BlockSvg.CORNER_RADIUS + "," + A.BlockSvg.CORNER_RADIUS + " 0 0,1 -" + A.BlockSvg.CORNER_RADIUS + ",-" + A.BlockSvg.CORNER_RADIUS), A.RTL || (c.push("M", A.BlockSvg.DISTANCE_45_INSIDE + "," + (f - A.BlockSvg.DISTANCE_45_INSIDE)), c.push("A", A.BlockSvg.CORNER_RADIUS - 1 + "," + (A.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 1," + (f - A.BlockSvg.CORNER_RADIUS))));
  };
  A.BlockSvg.prototype.renderDrawLeft_ = function (a, c, d) {
    this.block_.outputConnection ? (this.block_.outputConnection.moveTo(d.x, d.y), a.push("V", A.BlockSvg.TAB_HEIGHT), a.push("c 0,-10 -" + A.BlockSvg.TAB_WIDTH + ",8 -" + A.BlockSvg.TAB_WIDTH + ",-7.5 s " + A.BlockSvg.TAB_WIDTH + ",2.5 " + A.BlockSvg.TAB_WIDTH + ",-7.5"), A.RTL ? (c.push("M", -.3 * A.BlockSvg.TAB_WIDTH + ",8.9"), c.push("l", -.45 * A.BlockSvg.TAB_WIDTH + ",-2.1")) : (c.push("V", A.BlockSvg.TAB_HEIGHT - 1), c.push("m", -.92 * A.BlockSvg.TAB_WIDTH + ",-1 q " + -.19 * A.BlockSvg.TAB_WIDTH + ",-5.5 0,-11"), c.push("m", .92 * A.BlockSvg.TAB_WIDTH + ",1 V 1 H 2")), this.width += A.BlockSvg.TAB_WIDTH) : A.RTL || (this.squareTopLeftCorner_ ? c.push("V", 1) : c.push("V", A.BlockSvg.CORNER_RADIUS));
    a.push("z");
  };
  A.Blocks = {};
  A.Blocks.addTemplate = function (a) {
    e.asserts.assert(a.blockName);
    e.asserts.assert(A.Blocks[a.blockName], "Blockly.Blocks already has a field named ", a.blockName);
    e.asserts.assert(a.message);
    e.asserts.assert(a.colour && "number" == typeof a.colour && 0 <= a.colour && 360 > a.colour, "details.colour must be a number from 0 to 360 (exclusive)");
    "undefined" != a.output && (e.asserts.assert(!a.previousStatement, "When details.output is defined, details.previousStatement must not be true."), e.asserts.assert(!a.nextStatement, "When details.output is defined, details.nextStatement must not be true."));
    var c = {
      init: function () {
        var c = this;
        this.setColour(a.colour);
        this.setHelpUrl(a.helpUrl);
        "string" == typeof a.tooltip ? this.setTooltip(a.tooltip) : "function" == typeof a.tooltip && this.setTooltip(function () {
          return a.tooltip(c);
        });
        "undefined" != a.output ? this.setOutput(!0, a.output) : (this.setPreviousStatement("undefined" == typeof a.previousStatement ? !0 : a.previousStatement), this.setNextStatement("undefined" == typeof a.nextStatement ? !0 : a.nextStatement));
        var f = [];
        f.push(a.text);
        a.args && a.args.forEach(function (a) {
          e.asserts.assert(a.name);
          e.asserts.assert("undefined" != a.check);
          "undefined" == a.type || a.type == A.INPUT_VALUE ? f.push([a.name, a.check, "undefined" == typeof a.align ? A.ALIGN_RIGHT : a.align]) : e.asserts.fail("addTemplate() can only handle value inputs.");
        });
        f.push(A.ALIGN_RIGHT);
        a.inline && this.setInlineInputs(a.inline);
        A.Block.prototype.interpolateMsg.apply(this, f);
      }
    };
    c.mutationToDom = a.switchable ? function () {
      var c = a.mutationToDomFunc ? a.mutatationToDomFunc() : document.createElement("mutation");
      c.setAttribute("is_statement", this.isStatement || !1);
      return c;
    } : a.mutationToDomFunc;
    A.Blocks[a.blockName] = c;
  };
  A.ScrollbarPair = function (a) {
    this.workspace_ = a;
    this.oldHostMetrics_ = null;
    this.hScroll = new A.Scrollbar(a, !0, !0);
    this.vScroll = new A.Scrollbar(a, !1, !0);
    this.corner_ = A.createSvgElement("rect", {
      height: A.Scrollbar.scrollbarThickness,
      width: A.Scrollbar.scrollbarThickness,
      style: "fill: #fff"
    }, null);
    A.Scrollbar.insertAfter_(this.corner_, a.getBubbleCanvas());
  };
  A.ScrollbarPair.prototype.dispose = function () {
    A.unbindEvent_(this.onResizeWrapper_);
    this.onResizeWrapper_ = null;
    e.dom.removeNode(this.corner_);
    this.oldHostMetrics_ = this.workspace_ = this.corner_ = null;
    this.hScroll.dispose();
    this.hScroll = null;
    this.vScroll.dispose();
    this.vScroll = null;
  };
  A.ScrollbarPair.prototype.resize = function () {
    var a = this.workspace_.getMetrics();
    if (a) {
      var c = !1,
        d = !1;
      this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth == a.viewWidth && this.oldHostMetrics_.viewHeight == a.viewHeight && this.oldHostMetrics_.absoluteTop == a.absoluteTop && this.oldHostMetrics_.absoluteLeft == a.absoluteLeft ? (this.oldHostMetrics_ && this.oldHostMetrics_.contentWidth == a.contentWidth && this.oldHostMetrics_.viewLeft == a.viewLeft && this.oldHostMetrics_.contentLeft == a.contentLeft || (c = !0), this.oldHostMetrics_ && this.oldHostMetrics_.contentHeight == a.contentHeight && this.oldHostMetrics_.viewTop == a.viewTop && this.oldHostMetrics_.contentTop == a.contentTop || (d = !0)) : d = c = !0;
      c && this.hScroll.resize(a);
      d && this.vScroll.resize(a);
      this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth == a.viewWidth && this.oldHostMetrics_.absoluteLeft == a.absoluteLeft || this.corner_.setAttribute("x", this.vScroll.xCoordinate);
      this.oldHostMetrics_ && this.oldHostMetrics_.viewHeight == a.viewHeight && this.oldHostMetrics_.absoluteTop == a.absoluteTop || this.corner_.setAttribute("y", this.hScroll.yCoordinate);
      this.oldHostMetrics_ = a;
    }
  };
  A.ScrollbarPair.prototype.set = function (a, c) {
    this.hScroll.set(a);
    this.vScroll.set(c);
  };
  A.Scrollbar = function (a, c, d) {
    this.workspace_ = a;
    this.pair_ = d || !1;
    this.horizontal_ = c;
    this.createDom_();
    c ? (this.svgBackground_.setAttribute("height", A.Scrollbar.scrollbarThickness), this.svgKnob_.setAttribute("height", A.Scrollbar.scrollbarThickness - 6), this.svgKnob_.setAttribute("y", 3)) : (this.svgBackground_.setAttribute("width", A.Scrollbar.scrollbarThickness), this.svgKnob_.setAttribute("width", A.Scrollbar.scrollbarThickness - 6), this.svgKnob_.setAttribute("x", 3));
    this.onMouseDownBarWrapper_ = A.bindEvent_(this.svgBackground_, "mousedown", this, this.onMouseDownBar_);
    this.onMouseDownKnobWrapper_ = A.bindEvent_(this.svgKnob_, "mousedown", this, this.onMouseDownKnob_);
  };
  A.Scrollbar.scrollbarThickness = "ontouchstart" in document.documentElement ? 25 : 15;
  A.Scrollbar.prototype.dispose = function () {
    this.onMouseUpKnob_();
    this.onResizeWrapper_ && (A.unbindEvent_(this.onResizeWrapper_), this.onResizeWrapper_ = null);
    A.unbindEvent_(this.onMouseDownBarWrapper_);
    this.onMouseDownBarWrapper_ = null;
    A.unbindEvent_(this.onMouseDownKnobWrapper_);
    this.onMouseDownKnobWrapper_ = null;
    e.dom.removeNode(this.svgGroup_);
    this.workspace_ = this.svgKnob_ = this.svgBackground_ = this.svgGroup_ = null;
  };
  A.Scrollbar.prototype.resize = function (a) {
    if (!a && (a = this.workspace_.getMetrics(), !a)) return;
    if (this.horizontal_) {
      var c = a.viewWidth;
      this.pair_ ? c -= A.Scrollbar.scrollbarThickness : this.setVisible(c < a.contentHeight);
      this.ratio_ = c / a.contentWidth;
      if (-Infinity === this.ratio_ || Infinity === this.ratio_ || isNaN(this.ratio_)) this.ratio_ = 0;
      var d = a.viewWidth * this.ratio_,
        f = (a.viewLeft - a.contentLeft) * this.ratio_;
      this.svgKnob_.setAttribute("width", Math.max(0, d));
      this.xCoordinate = a.absoluteLeft;
      this.pair_ && A.RTL && (this.xCoordinate += a.absoluteLeft + A.Scrollbar.scrollbarThickness);
      this.yCoordinate = a.absoluteTop + a.viewHeight - A.Scrollbar.scrollbarThickness;
      this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")");
      this.svgBackground_.setAttribute("width", Math.max(0, c));
      this.svgKnob_.setAttribute("x", this.constrainKnob_(f));
    } else {
      c = a.viewHeight;
      this.pair_ ? c -= A.Scrollbar.scrollbarThickness : this.setVisible(c < a.contentHeight);
      this.ratio_ = c / a.contentHeight;
      if (-Infinity === this.ratio_ || Infinity === this.ratio_ || isNaN(this.ratio_)) this.ratio_ = 0;
      d = a.viewHeight * this.ratio_;
      f = (a.viewTop - a.contentTop) * this.ratio_;
      this.svgKnob_.setAttribute("height", Math.max(0, d));
      this.xCoordinate = a.absoluteLeft;
      A.RTL || (this.xCoordinate += a.viewWidth - A.Scrollbar.scrollbarThickness);
      this.yCoordinate = a.absoluteTop;
      this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")");
      this.svgBackground_.setAttribute("height", Math.max(0, c));
      this.svgKnob_.setAttribute("y", this.constrainKnob_(f));
    }
    this.onScroll_();
  };
  A.Scrollbar.prototype.createDom_ = function () {
    this.svgGroup_ = A.createSvgElement("g", {}, null);
    this.svgBackground_ = A.createSvgElement("rect", {
      "class": "blocklyScrollbarBackground"
    }, this.svgGroup_);
    var a = Math.floor((A.Scrollbar.scrollbarThickness - 6) / 2);
    this.svgKnob_ = A.createSvgElement("rect", {
      "class": "blocklyScrollbarKnob",
      rx: a,
      ry: a
    }, this.svgGroup_);
    A.Scrollbar.insertAfter_(this.svgGroup_, this.workspace_.getBubbleCanvas());
  };
  A.Scrollbar.prototype.isVisible = function () {
    return "none" != this.svgGroup_.getAttribute("display");
  };
  A.Scrollbar.prototype.setVisible = function (a) {
    if (a != this.isVisible()) {
      if (this.pair_) throw "Unable to toggle visibility of paired scrollbars.";
      a ? this.svgGroup_.setAttribute("display", "block") : (this.workspace_.setMetrics({
        x: 0,
        y: 0
      }), this.svgGroup_.setAttribute("display", "none"));
    }
  };
  A.Scrollbar.prototype.onMouseDownBar_ = function (a) {
    this.onMouseUpKnob_();
    if (!A.isRightButton(a)) {
      var c = A.mouseToSvg(a);
      c = this.horizontal_ ? c.x : c.y;
      var d = A.getSvgXY_(this.svgKnob_);
      d = this.horizontal_ ? d.x : d.y;
      var f = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "width" : "height")),
        g = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
        h = .95 * f;
      c <= d ? g -= h : c >= d + f && (g += h);
      this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(g));
      this.onScroll_();
    }
    a.stopPropagation();
  };
  A.Scrollbar.prototype.onMouseDownKnob_ = function (a) {
    this.onMouseUpKnob_();
    A.isRightButton(a) || (this.startDragKnob = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")), this.startDragMouse = this.horizontal_ ? a.clientX : a.clientY, A.Scrollbar.onMouseUpWrapper_ = A.bindEvent_(document, "mouseup", this, this.onMouseUpKnob_), A.Scrollbar.onMouseMoveWrapper_ = A.bindEvent_(document, "mousemove", this, this.onMouseMoveKnob_));
    a.stopPropagation();
  };
  A.Scrollbar.prototype.onMouseMoveKnob_ = function (a) {
    this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(this.startDragKnob + ((this.horizontal_ ? a.clientX : a.clientY) - this.startDragMouse)));
    this.onScroll_();
  };
  A.Scrollbar.prototype.onMouseUpKnob_ = function () {
    A.removeAllRanges();
    A.hideChaff(!0);
    A.Scrollbar.onMouseUpWrapper_ && (A.unbindEvent_(A.Scrollbar.onMouseUpWrapper_), A.Scrollbar.onMouseUpWrapper_ = null);
    A.Scrollbar.onMouseMoveWrapper_ && (A.unbindEvent_(A.Scrollbar.onMouseMoveWrapper_), A.Scrollbar.onMouseMoveWrapper_ = null);
  };
  A.Scrollbar.prototype.constrainKnob_ = function (a) {
    if (0 >= a || isNaN(a)) a = 0;else {
      var c = this.horizontal_ ? "width" : "height",
        d = parseFloat(this.svgBackground_.getAttribute(c));
      c = parseFloat(this.svgKnob_.getAttribute(c));
      a = Math.min(a, d - c);
    }
    return a;
  };
  A.Scrollbar.prototype.onScroll_ = function () {
    var a = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
      c = parseFloat(this.svgBackground_.getAttribute(this.horizontal_ ? "width" : "height"));
    a /= c;
    isNaN(a) && (a = 0);
    c = {};
    this.horizontal_ ? c.x = a : c.y = a;
    this.workspace_.setMetrics(c);
  };
  A.Scrollbar.prototype.set = function (a) {
    this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", a * this.ratio_);
    this.onScroll_();
  };
  A.Scrollbar.insertAfter_ = function (a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c) throw "Reference node has no parent.";
    d ? c.insertBefore(a, d) : c.appendChild(a);
  };
  e.Thenable = function () {};
  e.Thenable.prototype.then = function () {};
  e.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
  e.Thenable.addImplementation = function (a) {
    a.prototype[e.Thenable.IMPLEMENTED_BY_PROP] = !0;
  };
  e.Thenable.isImplementedBy = function (a) {
    if (!a) return !1;
    try {
      return !!a[e.Thenable.IMPLEMENTED_BY_PROP];
    } catch (c) {
      return !1;
    }
  };
  e.async = {};
  e.async.FreeList = class {
    constructor(a, c, d) {
      this.limit_ = d;
      this.create_ = a;
      this.reset_ = c;
      this.occupants_ = 0;
      this.head_ = null;
    }
    get() {
      let a;
      0 < this.occupants_ ? (this.occupants_--, a = this.head_, this.head_ = a.next, a.next = null) : a = this.create_();
      return a;
    }
    put(a) {
      this.reset_(a);
      this.occupants_ < this.limit_ && (this.occupants_++, a.next = this.head_, this.head_ = a);
    }
    occupants() {
      return this.occupants_;
    }
  };
  e.async.WorkQueue = function () {
    this.workTail_ = this.workHead_ = null;
  };
  e.async.WorkQueue.DEFAULT_MAX_UNUSED = 100;
  e.async.WorkQueue.freelist_ = new e.async.FreeList(function () {
    return new e.async.WorkItem();
  }, function (a) {
    a.reset();
  }, e.async.WorkQueue.DEFAULT_MAX_UNUSED);
  e.async.WorkQueue.prototype.add = function (a, c) {
    var d = this.getUnusedItem_();
    d.set(a, c);
    this.workTail_ ? this.workTail_.next = d : (e.asserts.assert(!this.workHead_), this.workHead_ = d);
    this.workTail_ = d;
  };
  e.async.WorkQueue.prototype.remove = function () {
    var a = null;
    this.workHead_ && (a = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), a.next = null);
    return a;
  };
  e.async.WorkQueue.prototype.returnUnused = function (a) {
    e.async.WorkQueue.freelist_.put(a);
  };
  e.async.WorkQueue.prototype.getUnusedItem_ = function () {
    return e.async.WorkQueue.freelist_.get();
  };
  e.async.WorkItem = function () {
    this.next = this.scope = this.fn = null;
  };
  e.async.WorkItem.prototype.set = function (a, c) {
    this.fn = a;
    this.scope = c;
    this.next = null;
  };
  e.async.WorkItem.prototype.reset = function () {
    this.next = this.scope = this.fn = null;
  };
  e.debug.entryPointRegistry = {};
  e.debug.EntryPointMonitor = function () {};
  e.debug.entryPointRegistry.refList_ = [];
  e.debug.entryPointRegistry.monitors_ = [];
  e.debug.entryPointRegistry.monitorsMayExist_ = !1;
  e.debug.entryPointRegistry.register = function (a) {
    e.debug.entryPointRegistry.refList_[e.debug.entryPointRegistry.refList_.length] = a;
    if (e.debug.entryPointRegistry.monitorsMayExist_) for (var c = e.debug.entryPointRegistry.monitors_, d = 0; d < c.length; d++) a(e.bind(c[d].wrap, c[d]));
  };
  e.debug.entryPointRegistry.monitorAll = function (a) {
    e.debug.entryPointRegistry.monitorsMayExist_ = !0;
    for (var c = e.bind(a.wrap, a), d = 0; d < e.debug.entryPointRegistry.refList_.length; d++) e.debug.entryPointRegistry.refList_[d](c);
    e.debug.entryPointRegistry.monitors_.push(a);
  };
  e.debug.entryPointRegistry.unmonitorAllIfPossible = function (a) {
    var c = e.debug.entryPointRegistry.monitors_;
    e.asserts.assert(a == c[c.length - 1], "Only the most recent monitor can be unwrapped.");
    a = e.bind(a.unwrap, a);
    for (var d = 0; d < e.debug.entryPointRegistry.refList_.length; d++) e.debug.entryPointRegistry.refList_[d](a);
    c.length--;
  };
  e.dom.BrowserFeature = {};
  e.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = !1;
  e.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = !1;
  e.dom.BrowserFeature.detectOffscreenCanvas_ = function (a) {
    try {
      return !!new self.OffscreenCanvas(0, 0).getContext(a);
    } catch (c) {}
    return !1;
  };
  e.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !e.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (e.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || e.dom.BrowserFeature.detectOffscreenCanvas_("2d"));
  e.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9);
  e.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = !e.userAgent.GECKO && !e.userAgent.IE || e.userAgent.IE && e.userAgent.isDocumentModeOrHigher(9) || e.userAgent.GECKO && e.userAgent.isVersionOrHigher("1.9.1");
  e.dom.BrowserFeature.CAN_USE_INNER_TEXT = e.userAgent.IE && !e.userAgent.isVersionOrHigher("9");
  e.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = e.userAgent.IE || e.userAgent.OPERA || e.userAgent.WEBKIT;
  e.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = e.userAgent.IE;
  e.dom.BrowserFeature.LEGACY_IE_RANGES = e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(9);
  e.math = {};
  e.math.randomInt = function (a) {
    return Math.floor(Math.random() * a);
  };
  e.math.uniformRandom = function (a, c) {
    return a + Math.random() * (c - a);
  };
  e.math.clamp = function (a, c, d) {
    return Math.min(Math.max(a, c), d);
  };
  e.math.modulo = function (a, c) {
    a %= c;
    return 0 > a * c ? a + c : a;
  };
  e.math.lerp = function (a, c, d) {
    return a + d * (c - a);
  };
  e.math.nearlyEquals = function (a, c, d) {
    return Math.abs(a - c) <= (d || 1E-6);
  };
  e.math.standardAngle = function (a) {
    return e.math.modulo(a, 360);
  };
  e.math.standardAngleInRadians = function (a) {
    return e.math.modulo(a, 2 * Math.PI);
  };
  e.math.toRadians = function (a) {
    return a * Math.PI / 180;
  };
  e.math.toDegrees = function (a) {
    return 180 * a / Math.PI;
  };
  e.math.angleDx = function (a, c) {
    return c * Math.cos(e.math.toRadians(a));
  };
  e.math.angleDy = function (a, c) {
    return c * Math.sin(e.math.toRadians(a));
  };
  e.math.angle = function (a, c, d, f) {
    return e.math.standardAngle(e.math.toDegrees(Math.atan2(f - c, d - a)));
  };
  e.math.angleDifference = function (a, c) {
    a = e.math.standardAngle(c) - e.math.standardAngle(a);
    180 < a ? a -= 360 : -180 >= a && (a = 360 + a);
    return a;
  };
  e.math.sign = function (a) {
    return 0 < a ? 1 : 0 > a ? -1 : a;
  };
  e.math.longestCommonSubsequence = function (a, c, d, f) {
    d = d || function (a, c) {
      return a == c;
    };
    f = f || function (c) {
      return a[c];
    };
    for (var g = a.length, h = c.length, k = [], m = 0; m < g + 1; m++) k[m] = [], k[m][0] = 0;
    for (var n = 0; n < h + 1; n++) k[0][n] = 0;
    for (m = 1; m <= g; m++) for (n = 1; n <= h; n++) d(a[m - 1], c[n - 1]) ? k[m][n] = k[m - 1][n - 1] + 1 : k[m][n] = Math.max(k[m - 1][n], k[m][n - 1]);
    var p = [];
    m = g;
    for (n = h; 0 < m && 0 < n;) d(a[m - 1], c[n - 1]) ? (p.unshift(f(m - 1, n - 1)), m--, n--) : k[m - 1][n] > k[m][n - 1] ? m-- : n--;
    return p;
  };
  e.math.sum = function (a) {
    return e.array.reduce(arguments, function (a, d) {
      return a + d;
    }, 0);
  };
  e.math.average = function (a) {
    return e.math.sum.apply(null, arguments) / arguments.length;
  };
  e.math.sampleVariance = function (a) {
    var c = arguments.length;
    if (2 > c) return 0;
    var d = e.math.average.apply(null, arguments);
    return e.math.sum.apply(null, e.array.map(arguments, function (a) {
      return Math.pow(a - d, 2);
    })) / (c - 1);
  };
  e.math.standardDeviation = function (a) {
    return Math.sqrt(e.math.sampleVariance.apply(null, arguments));
  };
  e.math.isInt = function (a) {
    return isFinite(a) && 0 == a % 1;
  };
  e.math.isFiniteNumber = function (a) {
    return isFinite(a);
  };
  e.math.isNegativeZero = function (a) {
    return 0 == a && 0 > 1 / a;
  };
  e.math.log10Floor = function (a) {
    if (0 < a) {
      var c = Math.round(Math.log(a) * Math.LOG10E);
      return c - (parseFloat("1e" + c) > a ? 1 : 0);
    }
    return 0 == a ? -Infinity : NaN;
  };
  e.math.safeFloor = function (a, c) {
    e.asserts.assert(void 0 === c || 0 < c);
    return Math.floor(a + (c || 2E-15));
  };
  e.math.safeCeil = function (a, c) {
    e.asserts.assert(void 0 === c || 0 < c);
    return Math.ceil(a - (c || 2E-15));
  };
  e.math.Coordinate = function (a, c) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== c ? c : 0;
  };
  e.math.Coordinate.prototype.clone = function () {
    return new e.math.Coordinate(this.x, this.y);
  };
  e.DEBUG && (e.math.Coordinate.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
  });
  e.math.Coordinate.prototype.equals = function (a) {
    return a instanceof e.math.Coordinate && e.math.Coordinate.equals(this, a);
  };
  e.math.Coordinate.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
  };
  e.math.Coordinate.distance = function (a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a);
  };
  e.math.Coordinate.magnitude = function (a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
  };
  e.math.Coordinate.azimuth = function (a) {
    return e.math.angle(0, 0, a.x, a.y);
  };
  e.math.Coordinate.squaredDistance = function (a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return d * d + a * a;
  };
  e.math.Coordinate.difference = function (a, c) {
    return new e.math.Coordinate(a.x - c.x, a.y - c.y);
  };
  e.math.Coordinate.sum = function (a, c) {
    return new e.math.Coordinate(a.x + c.x, a.y + c.y);
  };
  e.math.Coordinate.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  e.math.Coordinate.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  e.math.Coordinate.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  e.math.Coordinate.prototype.translate = function (a, c) {
    a instanceof e.math.Coordinate ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof c && (this.y += c));
    return this;
  };
  e.math.Coordinate.prototype.scale = function (a, c) {
    this.x *= a;
    this.y *= "number" === typeof c ? c : a;
    return this;
  };
  e.math.Coordinate.prototype.rotateRadians = function (a, c) {
    c = c || new e.math.Coordinate(0, 0);
    var d = this.x,
      f = this.y,
      g = Math.cos(a);
    a = Math.sin(a);
    this.x = (d - c.x) * g - (f - c.y) * a + c.x;
    this.y = (d - c.x) * a + (f - c.y) * g + c.y;
  };
  e.math.Coordinate.prototype.rotateDegrees = function (a, c) {
    this.rotateRadians(e.math.toRadians(a), c);
  };
  e.math.Size = function (a, c) {
    this.width = a;
    this.height = c;
  };
  e.math.Size.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
  };
  e.math.Size.prototype.clone = function () {
    return new e.math.Size(this.width, this.height);
  };
  e.DEBUG && (e.math.Size.prototype.toString = function () {
    return "(" + this.width + " x " + this.height + ")";
  });
  e.math.Size.prototype.getLongest = function () {
    return Math.max(this.width, this.height);
  };
  e.math.Size.prototype.getShortest = function () {
    return Math.min(this.width, this.height);
  };
  e.math.Size.prototype.area = function () {
    return this.width * this.height;
  };
  e.math.Size.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  e.math.Size.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  e.math.Size.prototype.isEmpty = function () {
    return !this.area();
  };
  e.math.Size.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  e.math.Size.prototype.fitsInside = function (a) {
    return this.width <= a.width && this.height <= a.height;
  };
  e.math.Size.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  e.math.Size.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  e.math.Size.prototype.scale = function (a, c) {
    this.width *= a;
    this.height *= "number" === typeof c ? c : a;
    return this;
  };
  e.math.Size.prototype.scaleToCover = function (a) {
    a = this.aspectRatio() <= a.aspectRatio() ? a.width / this.width : a.height / this.height;
    return this.scale(a);
  };
  e.math.Size.prototype.scaleToFit = function (a) {
    a = this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height;
    return this.scale(a);
  };
  e.dom.ASSUME_QUIRKS_MODE = !1;
  e.dom.ASSUME_STANDARDS_MODE = !1;
  e.dom.COMPAT_MODE_KNOWN_ = e.dom.ASSUME_QUIRKS_MODE || e.dom.ASSUME_STANDARDS_MODE;
  e.dom.getDomHelper = function (a) {
    return a ? new e.dom.DomHelper(e.dom.getOwnerDocument(a)) : e.dom.defaultDomHelper_ || (e.dom.defaultDomHelper_ = new e.dom.DomHelper());
  };
  e.dom.getDocument = function () {
    return document;
  };
  e.dom.getElement = function (a) {
    return e.dom.getElementHelper_(document, a);
  };
  e.dom.getElementHelper_ = function (a, c) {
    return "string" === typeof c ? a.getElementById(c) : c;
  };
  e.dom.getRequiredElement = function (a) {
    return e.dom.getRequiredElementHelper_(document, a);
  };
  e.dom.getRequiredElementHelper_ = function (a, c) {
    e.asserts.assertString(c);
    a = e.dom.getElementHelper_(a, c);
    return a = e.asserts.assertElement(a, "No element found with id: " + c);
  };
  e.dom.$ = e.dom.getElement;
  e.dom.getElementsByTagName = function (a, c) {
    return (c || document).getElementsByTagName(String(a));
  };
  e.dom.getElementsByTagNameAndClass = function (a, c, d) {
    return e.dom.getElementsByTagNameAndClass_(document, a, c, d);
  };
  e.dom.getElementByTagNameAndClass = function (a, c, d) {
    return e.dom.getElementByTagNameAndClass_(document, a, c, d);
  };
  e.dom.getElementsByClass = function (a, c) {
    var d = c || document;
    return e.dom.canUseQuerySelector_(d) ? d.querySelectorAll("." + a) : e.dom.getElementsByTagNameAndClass_(document, "*", a, c);
  };
  e.dom.getElementByClass = function (a, c) {
    var d = c || document;
    return (d.getElementsByClassName ? d.getElementsByClassName(a)[0] : e.dom.getElementByTagNameAndClass_(document, "*", a, c)) || null;
  };
  e.dom.getRequiredElementByClass = function (a, c) {
    c = e.dom.getElementByClass(a, c);
    return e.asserts.assert(c, "No element found with className: " + a);
  };
  e.dom.canUseQuerySelector_ = function (a) {
    return !(!a.querySelectorAll || !a.querySelector);
  };
  e.dom.getElementsByTagNameAndClass_ = function (a, c, d, f) {
    a = f || a;
    c = c && "*" != c ? String(c).toUpperCase() : "";
    if (e.dom.canUseQuerySelector_(a) && (c || d)) return a.querySelectorAll(c + (d ? "." + d : ""));
    if (d && a.getElementsByClassName) {
      a = a.getElementsByClassName(d);
      if (c) {
        f = {};
        for (var g = 0, h = 0, k; k = a[h]; h++) c == k.nodeName && (f[g++] = k);
        f.length = g;
        return f;
      }
      return a;
    }
    a = a.getElementsByTagName(c || "*");
    if (d) {
      f = {};
      for (h = g = 0; k = a[h]; h++) c = k.className, "function" == typeof c.split && e.array.contains(c.split(/\s+/), d) && (f[g++] = k);
      f.length = g;
      return f;
    }
    return a;
  };
  e.dom.getElementByTagNameAndClass_ = function (a, c, d, f) {
    var g = f || a,
      h = c && "*" != c ? String(c).toUpperCase() : "";
    return e.dom.canUseQuerySelector_(g) && (h || d) ? g.querySelector(h + (d ? "." + d : "")) : e.dom.getElementsByTagNameAndClass_(a, c, d, f)[0] || null;
  };
  e.dom.$$ = e.dom.getElementsByTagNameAndClass;
  e.dom.setProperties = function (a, c) {
    e.object.forEach(c, function (c, f) {
      c && "object" == typeof c && c.implementsGoogStringTypedString && (c = c.getTypedStringValue());
      "style" == f ? a.style.cssText = c : "class" == f ? a.className = c : "for" == f ? a.htmlFor = c : e.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty(f) ? a.setAttribute(e.dom.DIRECT_ATTRIBUTE_MAP_[f], c) : e.string.startsWith(f, "aria-") || e.string.startsWith(f, "data-") ? a.setAttribute(f, c) : a[f] = c;
    });
  };
  e.dom.DIRECT_ATTRIBUTE_MAP_ = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  e.dom.getViewportSize = function (a) {
    return e.dom.getViewportSize_(a || window);
  };
  e.dom.getViewportSize_ = function (a) {
    a = a.document;
    a = e.dom.isCss1CompatMode_(a) ? a.documentElement : a.body;
    return new e.math.Size(a.clientWidth, a.clientHeight);
  };
  e.dom.getDocumentHeight = function () {
    return e.dom.getDocumentHeight_(window);
  };
  e.dom.getDocumentHeightForWindow = function (a) {
    return e.dom.getDocumentHeight_(a);
  };
  e.dom.getDocumentHeight_ = function (a) {
    var c = a.document,
      d = 0;
    if (c) {
      d = c.body;
      var f = c.documentElement;
      if (!f || !d) return 0;
      a = e.dom.getViewportSize_(a).height;
      if (e.dom.isCss1CompatMode_(c) && f.scrollHeight) d = f.scrollHeight != a ? f.scrollHeight : f.offsetHeight;else {
        c = f.scrollHeight;
        var g = f.offsetHeight;
        f.clientHeight != g && (c = d.scrollHeight, g = d.offsetHeight);
        d = c > a ? c > g ? c : g : c < g ? c : g;
      }
    }
    return d;
  };
  e.dom.getPageScroll = function (a) {
    return e.dom.getDomHelper((a || e.global || window).document).getDocumentScroll();
  };
  e.dom.getDocumentScroll = function () {
    return e.dom.getDocumentScroll_(document);
  };
  e.dom.getDocumentScroll_ = function (a) {
    var c = e.dom.getDocumentScrollElement_(a);
    a = e.dom.getWindow_(a);
    return e.userAgent.IE && e.userAgent.isVersionOrHigher("10") && a.pageYOffset != c.scrollTop ? new e.math.Coordinate(c.scrollLeft, c.scrollTop) : new e.math.Coordinate(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop);
  };
  e.dom.getDocumentScrollElement = function () {
    return e.dom.getDocumentScrollElement_(document);
  };
  e.dom.getDocumentScrollElement_ = function (a) {
    return a.scrollingElement ? a.scrollingElement : !e.userAgent.WEBKIT && e.dom.isCss1CompatMode_(a) ? a.documentElement : a.body || a.documentElement;
  };
  e.dom.getWindow = function (a) {
    return a ? e.dom.getWindow_(a) : window;
  };
  e.dom.getWindow_ = function (a) {
    return a.parentWindow || a.defaultView;
  };
  e.dom.createDom = function (a, c, d) {
    return e.dom.createDom_(document, arguments);
  };
  e.dom.createDom_ = function (a, c) {
    var d = String(c[0]),
      f = c[1];
    if (!e.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && f && (f.name || f.type)) {
      d = ["<", d];
      f.name && d.push(' name="', e.string.htmlEscape(f.name), '"');
      if (f.type) {
        d.push(' type="', e.string.htmlEscape(f.type), '"');
        var g = {};
        e.object.extend(g, f);
        delete g.type;
        f = g;
      }
      d.push(">");
      d = d.join("");
    }
    d = e.dom.createElement_(a, d);
    f && ("string" === typeof f ? d.className = f : Array.isArray(f) ? d.className = f.join(" ") : e.dom.setProperties(d, f));
    2 < c.length && e.dom.append_(a, d, c, 2);
    return d;
  };
  e.dom.append_ = function (a, c, d, f) {
    function g(d) {
      d && c.appendChild("string" === typeof d ? a.createTextNode(d) : d);
    }
    for (; f < d.length; f++) {
      var h = d[f];
      e.isArrayLike(h) && !e.dom.isNodeLike(h) ? e.array.forEach(e.dom.isNodeList(h) ? e.array.toArray(h) : h, g) : g(h);
    }
  };
  e.dom.$dom = e.dom.createDom;
  e.dom.createElement = function (a) {
    return e.dom.createElement_(document, a);
  };
  e.dom.createElement_ = function (a, c) {
    c = String(c);
    "application/xhtml+xml" === a.contentType && (c = c.toLowerCase());
    return a.createElement(c);
  };
  e.dom.createTextNode = function (a) {
    return document.createTextNode(String(a));
  };
  e.dom.createTable = function (a, c, d) {
    return e.dom.createTable_(document, a, c, !!d);
  };
  e.dom.createTable_ = function (a, c, d, f) {
    for (var g = e.dom.createElement_(a, "TABLE"), h = g.appendChild(e.dom.createElement_(a, "TBODY")), k = 0; k < c; k++) {
      for (var m = e.dom.createElement_(a, "TR"), n = 0; n < d; n++) {
        var p = e.dom.createElement_(a, "TD");
        f && e.dom.setTextContent(p, e.string.Unicode.NBSP);
        m.appendChild(p);
      }
      h.appendChild(m);
    }
    return g;
  };
  e.dom.constHtmlToNode = function (a) {
    var c = e.array.map(arguments, e.string.Const.unwrap);
    c = e.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(e.string.Const.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), c.join(""));
    return e.dom.safeHtmlToNode(c);
  };
  e.dom.safeHtmlToNode = function (a) {
    return e.dom.safeHtmlToNode_(document, a);
  };
  e.dom.safeHtmlToNode_ = function (a, c) {
    var d = e.dom.createElement_(a, "DIV");
    e.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (e.dom.safe.setInnerHtml(d, e.html.SafeHtml.concat(e.html.SafeHtml.BR, c)), d.removeChild(e.asserts.assert(d.firstChild))) : e.dom.safe.setInnerHtml(d, c);
    return e.dom.childrenToNode_(a, d);
  };
  e.dom.childrenToNode_ = function (a, c) {
    if (1 == c.childNodes.length) return c.removeChild(e.asserts.assert(c.firstChild));
    for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
    return a;
  };
  e.dom.isCss1CompatMode = function () {
    return e.dom.isCss1CompatMode_(document);
  };
  e.dom.isCss1CompatMode_ = function (a) {
    return e.dom.COMPAT_MODE_KNOWN_ ? e.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == a.compatMode;
  };
  e.dom.canHaveChildren = function (a) {
    if (a.nodeType != e.dom.NodeType.ELEMENT) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  e.dom.appendChild = function (a, c) {
    e.asserts.assert(null != a && null != c, "goog.dom.appendChild expects non-null arguments");
    a.appendChild(c);
  };
  e.dom.append = function (a, c) {
    e.dom.append_(e.dom.getOwnerDocument(a), a, arguments, 1);
  };
  e.dom.removeChildren = function (a) {
    for (var c; c = a.firstChild;) a.removeChild(c);
  };
  e.dom.insertSiblingBefore = function (a, c) {
    e.asserts.assert(null != a && null != c, "goog.dom.insertSiblingBefore expects non-null arguments");
    c.parentNode && c.parentNode.insertBefore(a, c);
  };
  e.dom.insertSiblingAfter = function (a, c) {
    e.asserts.assert(null != a && null != c, "goog.dom.insertSiblingAfter expects non-null arguments");
    c.parentNode && c.parentNode.insertBefore(a, c.nextSibling);
  };
  e.dom.insertChildAt = function (a, c, d) {
    e.asserts.assert(null != a, "goog.dom.insertChildAt expects a non-null parent");
    a.insertBefore(c, a.childNodes[d] || null);
  };
  e.dom.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  e.dom.replaceNode = function (a, c) {
    e.asserts.assert(null != a && null != c, "goog.dom.replaceNode expects non-null arguments");
    var d = c.parentNode;
    d && d.replaceChild(a, c);
  };
  e.dom.flattenElement = function (a) {
    var c,
      d = a.parentNode;
    if (d && d.nodeType != e.dom.NodeType.DOCUMENT_FRAGMENT) {
      if (a.removeNode) return a.removeNode(!1);
      for (; c = a.firstChild;) d.insertBefore(c, a);
      return e.dom.removeNode(a);
    }
  };
  e.dom.getChildren = function (a) {
    return e.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != a.children ? a.children : e.array.filter(a.childNodes, function (a) {
      return a.nodeType == e.dom.NodeType.ELEMENT;
    });
  };
  e.dom.getFirstElementChild = function (a) {
    return void 0 !== a.firstElementChild ? a.firstElementChild : e.dom.getNextElementNode_(a.firstChild, !0);
  };
  e.dom.getLastElementChild = function (a) {
    return void 0 !== a.lastElementChild ? a.lastElementChild : e.dom.getNextElementNode_(a.lastChild, !1);
  };
  e.dom.getNextElementSibling = function (a) {
    return void 0 !== a.nextElementSibling ? a.nextElementSibling : e.dom.getNextElementNode_(a.nextSibling, !0);
  };
  e.dom.getPreviousElementSibling = function (a) {
    return void 0 !== a.previousElementSibling ? a.previousElementSibling : e.dom.getNextElementNode_(a.previousSibling, !1);
  };
  e.dom.getNextElementNode_ = function (a, c) {
    for (; a && a.nodeType != e.dom.NodeType.ELEMENT;) a = c ? a.nextSibling : a.previousSibling;
    return a;
  };
  e.dom.getNextNode = function (a) {
    if (!a) return null;
    if (a.firstChild) return a.firstChild;
    for (; a && !a.nextSibling;) a = a.parentNode;
    return a ? a.nextSibling : null;
  };
  e.dom.getPreviousNode = function (a) {
    if (!a) return null;
    if (!a.previousSibling) return a.parentNode;
    for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
    return a;
  };
  e.dom.isNodeLike = function (a) {
    return e.isObject(a) && 0 < a.nodeType;
  };
  e.dom.isElement = function (a) {
    return e.isObject(a) && a.nodeType == e.dom.NodeType.ELEMENT;
  };
  e.dom.isWindow = function (a) {
    return e.isObject(a) && a.window == a;
  };
  e.dom.getParentElement = function (a) {
    var c;
    if (e.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY && !(e.userAgent.IE && e.userAgent.isVersionOrHigher("9") && !e.userAgent.isVersionOrHigher("10") && e.global.SVGElement && a instanceof e.global.SVGElement) && (c = a.parentElement)) return c;
    c = a.parentNode;
    return e.dom.isElement(c) ? c : null;
  };
  e.dom.contains = function (a, c) {
    if (!a || !c) return !1;
    if (a.contains && c.nodeType == e.dom.NodeType.ELEMENT) return a == c || a.contains(c);
    if ("undefined" != typeof a.compareDocumentPosition) return a == c || !!(a.compareDocumentPosition(c) & 16);
    for (; c && a != c;) c = c.parentNode;
    return c == a;
  };
  e.dom.compareNodeOrder = function (a, c) {
    if (a == c) return 0;
    if (a.compareDocumentPosition) return a.compareDocumentPosition(c) & 2 ? 1 : -1;
    if (e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(9)) {
      if (a.nodeType == e.dom.NodeType.DOCUMENT) return -1;
      if (c.nodeType == e.dom.NodeType.DOCUMENT) return 1;
    }
    if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
      var d = a.nodeType == e.dom.NodeType.ELEMENT,
        f = c.nodeType == e.dom.NodeType.ELEMENT;
      if (d && f) return a.sourceIndex - c.sourceIndex;
      var g = a.parentNode,
        h = c.parentNode;
      return g == h ? e.dom.compareSiblingOrder_(a, c) : !d && e.dom.contains(g, c) ? -1 * e.dom.compareParentsDescendantNodeIe_(a, c) : !f && e.dom.contains(h, a) ? e.dom.compareParentsDescendantNodeIe_(c, a) : (d ? a.sourceIndex : g.sourceIndex) - (f ? c.sourceIndex : h.sourceIndex);
    }
    f = e.dom.getOwnerDocument(a);
    d = f.createRange();
    d.selectNode(a);
    d.collapse(!0);
    a = f.createRange();
    a.selectNode(c);
    a.collapse(!0);
    return d.compareBoundaryPoints(e.global.Range.START_TO_END, a);
  };
  e.dom.compareParentsDescendantNodeIe_ = function (a, c) {
    var d = a.parentNode;
    if (d == c) return -1;
    for (; c.parentNode != d;) c = c.parentNode;
    return e.dom.compareSiblingOrder_(c, a);
  };
  e.dom.compareSiblingOrder_ = function (a, c) {
    for (; c = c.previousSibling;) if (c == a) return -1;
    return 1;
  };
  e.dom.findCommonAncestor = function (a) {
    var c,
      d = arguments.length;
    if (!d) return null;
    if (1 == d) return arguments[0];
    var f = [],
      g = Infinity;
    for (c = 0; c < d; c++) {
      for (var h = [], k = arguments[c]; k;) h.unshift(k), k = k.parentNode;
      f.push(h);
      g = Math.min(g, h.length);
    }
    h = null;
    for (c = 0; c < g; c++) {
      k = f[0][c];
      for (var m = 1; m < d; m++) if (k != f[m][c]) return h;
      h = k;
    }
    return h;
  };
  e.dom.isInDocument = function (a) {
    return 16 == (a.ownerDocument.compareDocumentPosition(a) & 16);
  };
  e.dom.getOwnerDocument = function (a) {
    e.asserts.assert(a, "Node cannot be null or undefined.");
    return a.nodeType == e.dom.NodeType.DOCUMENT ? a : a.ownerDocument || a.document;
  };
  e.dom.getFrameContentDocument = function (a) {
    return a.contentDocument || a.contentWindow.document;
  };
  e.dom.getFrameContentWindow = function (a) {
    try {
      return a.contentWindow || (a.contentDocument ? e.dom.getWindow(a.contentDocument) : null);
    } catch (c) {}
    return null;
  };
  e.dom.setTextContent = function (a, c) {
    e.asserts.assert(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent" in a) a.textContent = c;else if (a.nodeType == e.dom.NodeType.TEXT) a.data = String(c);else if (a.firstChild && a.firstChild.nodeType == e.dom.NodeType.TEXT) {
      for (; a.lastChild != a.firstChild;) a.removeChild(e.asserts.assert(a.lastChild));
      a.firstChild.data = String(c);
    } else {
      e.dom.removeChildren(a);
      var d = e.dom.getOwnerDocument(a);
      a.appendChild(d.createTextNode(String(c)));
    }
  };
  e.dom.getOuterHtml = function (a) {
    e.asserts.assert(null !== a, "goog.dom.getOuterHtml expects a non-null value for element");
    if ("outerHTML" in a) return a.outerHTML;
    var c = e.dom.getOwnerDocument(a);
    c = e.dom.createElement_(c, "DIV");
    c.appendChild(a.cloneNode(!0));
    return c.innerHTML;
  };
  e.dom.findNode = function (a, c) {
    var d = [];
    return e.dom.findNodes_(a, c, d, !0) ? d[0] : void 0;
  };
  e.dom.findNodes = function (a, c) {
    var d = [];
    e.dom.findNodes_(a, c, d, !1);
    return d;
  };
  e.dom.findNodes_ = function (a, c, d, f) {
    if (null != a) for (a = a.firstChild; a;) {
      if (c(a) && (d.push(a), f) || e.dom.findNodes_(a, c, d, f)) return !0;
      a = a.nextSibling;
    }
    return !1;
  };
  e.dom.findElement = function (a, c) {
    for (a = e.dom.getChildrenReverse_(a); 0 < a.length;) {
      var d = a.pop();
      if (c(d)) return d;
      for (d = d.lastElementChild; d; d = d.previousElementSibling) a.push(d);
    }
    return null;
  };
  e.dom.findElements = function (a, c) {
    var d = [];
    for (a = e.dom.getChildrenReverse_(a); 0 < a.length;) {
      var f = a.pop();
      c(f) && d.push(f);
      for (f = f.lastElementChild; f; f = f.previousElementSibling) a.push(f);
    }
    return d;
  };
  e.dom.getChildrenReverse_ = function (a) {
    if (a.nodeType == e.dom.NodeType.DOCUMENT) return [a.documentElement];
    var c = [];
    for (a = a.lastElementChild; a; a = a.previousElementSibling) c.push(a);
    return c;
  };
  e.dom.TAGS_TO_IGNORE_ = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
  };
  e.dom.PREDEFINED_TAG_VALUES_ = {
    IMG: " ",
    BR: "\n"
  };
  e.dom.isFocusableTabIndex = function (a) {
    return e.dom.hasSpecifiedTabIndex_(a) && e.dom.isTabIndexFocusable_(a);
  };
  e.dom.setFocusableTabIndex = function (a, c) {
    c ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
  };
  e.dom.isFocusable = function (a) {
    var c;
    return (c = e.dom.nativelySupportsFocus_(a) ? !a.disabled && (!e.dom.hasSpecifiedTabIndex_(a) || e.dom.isTabIndexFocusable_(a)) : e.dom.isFocusableTabIndex(a)) && e.userAgent.IE ? e.dom.hasNonZeroBoundingRect_(a) : c;
  };
  e.dom.hasSpecifiedTabIndex_ = function (a) {
    return e.userAgent.IE && !e.userAgent.isVersionOrHigher("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex");
  };
  e.dom.isTabIndexFocusable_ = function (a) {
    a = a.tabIndex;
    return "number" === typeof a && 0 <= a && 32768 > a;
  };
  e.dom.nativelySupportsFocus_ = function (a) {
    return "A" == a.tagName && a.hasAttribute("href") || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName;
  };
  e.dom.hasNonZeroBoundingRect_ = function (a) {
    a = !e.isFunction(a.getBoundingClientRect) || e.userAgent.IE && null == a.parentElement ? {
      height: a.offsetHeight,
      width: a.offsetWidth
    } : a.getBoundingClientRect();
    return null != a && 0 < a.height && 0 < a.width;
  };
  e.dom.getTextContent = function (a) {
    if (e.dom.BrowserFeature.CAN_USE_INNER_TEXT && null !== a && "innerText" in a) a = e.string.canonicalizeNewlines(a.innerText);else {
      var c = [];
      e.dom.getTextContent_(a, c, !0);
      a = c.join("");
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    e.dom.BrowserFeature.CAN_USE_INNER_TEXT || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a;
  };
  e.dom.getRawTextContent = function (a) {
    var c = [];
    e.dom.getTextContent_(a, c, !1);
    return c.join("");
  };
  e.dom.getTextContent_ = function (a, c, d) {
    if (!(a.nodeName in e.dom.TAGS_TO_IGNORE_)) if (a.nodeType == e.dom.NodeType.TEXT) d ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);else if (a.nodeName in e.dom.PREDEFINED_TAG_VALUES_) c.push(e.dom.PREDEFINED_TAG_VALUES_[a.nodeName]);else for (a = a.firstChild; a;) e.dom.getTextContent_(a, c, d), a = a.nextSibling;
  };
  e.dom.getNodeTextLength = function (a) {
    return e.dom.getTextContent(a).length;
  };
  e.dom.getNodeTextOffset = function (a, c) {
    c = c || e.dom.getOwnerDocument(a).body;
    for (var d = []; a && a != c;) {
      for (var f = a; f = f.previousSibling;) d.unshift(e.dom.getTextContent(f));
      a = a.parentNode;
    }
    return e.string.trimLeft(d.join("")).replace(/ +/g, " ").length;
  };
  e.dom.getNodeAtOffset = function (a, c, d) {
    a = [a];
    for (var f = 0, g = null; 0 < a.length && f < c;) if (g = a.pop(), !(g.nodeName in e.dom.TAGS_TO_IGNORE_)) if (g.nodeType == e.dom.NodeType.TEXT) {
      var h = g.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
      f += h.length;
    } else if (g.nodeName in e.dom.PREDEFINED_TAG_VALUES_) f += e.dom.PREDEFINED_TAG_VALUES_[g.nodeName].length;else for (h = g.childNodes.length - 1; 0 <= h; h--) a.push(g.childNodes[h]);
    e.isObject(d) && (d.remainder = g ? g.nodeValue.length + c - f - 1 : 0, d.node = g);
    return g;
  };
  e.dom.isNodeList = function (a) {
    if (a && "number" == typeof a.length) {
      if (e.isObject(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (e.isFunction(a)) return "function" == typeof a.item;
    }
    return !1;
  };
  e.dom.getAncestorByTagNameAndClass = function (a, c, d, f) {
    if (!c && !d) return null;
    var g = c ? String(c).toUpperCase() : null;
    return e.dom.getAncestor(a, function (a) {
      return (!g || a.nodeName == g) && (!d || "string" === typeof a.className && e.array.contains(a.className.split(/\s+/), d));
    }, !0, f);
  };
  e.dom.getAncestorByClass = function (a, c, d) {
    return e.dom.getAncestorByTagNameAndClass(a, null, c, d);
  };
  e.dom.getAncestor = function (a, c, d, f) {
    a && !d && (a = a.parentNode);
    for (d = 0; a && (null == f || d <= f);) {
      e.asserts.assert("parentNode" != a.name);
      if (c(a)) return a;
      a = a.parentNode;
      d++;
    }
    return null;
  };
  e.dom.getActiveElement = function (a) {
    try {
      var c = a && a.activeElement;
      return c && c.nodeName ? c : null;
    } catch (d) {
      return null;
    }
  };
  e.dom.getPixelRatio = function () {
    var a = e.dom.getWindow();
    return void 0 !== a.devicePixelRatio ? a.devicePixelRatio : a.matchMedia ? e.dom.matchesPixelRatio_(3) || e.dom.matchesPixelRatio_(2) || e.dom.matchesPixelRatio_(1.5) || e.dom.matchesPixelRatio_(1) || .75 : 1;
  };
  e.dom.matchesPixelRatio_ = function (a) {
    return e.dom.getWindow().matchMedia("(min-resolution: " + a + "dppx),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + 96 * a + "dpi)").matches ? a : 0;
  };
  e.dom.getCanvasContext2D = function (a) {
    return a.getContext("2d");
  };
  e.dom.DomHelper = function (a) {
    this.document_ = a || e.global.document || document;
  };
  e.dom.DomHelper.prototype.getDomHelper = e.dom.getDomHelper;
  e.dom.DomHelper.prototype.setDocument = function (a) {
    this.document_ = a;
  };
  e.dom.DomHelper.prototype.getDocument = function () {
    return this.document_;
  };
  e.dom.DomHelper.prototype.getElement = function (a) {
    return e.dom.getElementHelper_(this.document_, a);
  };
  e.dom.DomHelper.prototype.getRequiredElement = function (a) {
    return e.dom.getRequiredElementHelper_(this.document_, a);
  };
  e.dom.DomHelper.prototype.$ = e.dom.DomHelper.prototype.getElement;
  e.dom.DomHelper.prototype.getElementsByTagName = function (a, c) {
    return (c || this.document_).getElementsByTagName(String(a));
  };
  e.dom.DomHelper.prototype.getElementsByTagNameAndClass = function (a, c, d) {
    return e.dom.getElementsByTagNameAndClass_(this.document_, a, c, d);
  };
  e.dom.DomHelper.prototype.getElementByTagNameAndClass = function (a, c, d) {
    return e.dom.getElementByTagNameAndClass_(this.document_, a, c, d);
  };
  e.dom.DomHelper.prototype.getElementsByClass = function (a, c) {
    return e.dom.getElementsByClass(a, c || this.document_);
  };
  e.dom.DomHelper.prototype.getElementByClass = function (a, c) {
    return e.dom.getElementByClass(a, c || this.document_);
  };
  e.dom.DomHelper.prototype.getRequiredElementByClass = function (a, c) {
    return e.dom.getRequiredElementByClass(a, c || this.document_);
  };
  e.dom.DomHelper.prototype.$$ = e.dom.DomHelper.prototype.getElementsByTagNameAndClass;
  e.dom.DomHelper.prototype.setProperties = e.dom.setProperties;
  e.dom.DomHelper.prototype.getViewportSize = function (a) {
    return e.dom.getViewportSize(a || this.getWindow());
  };
  e.dom.DomHelper.prototype.getDocumentHeight = function () {
    return e.dom.getDocumentHeight_(this.getWindow());
  };
  e.dom.DomHelper.prototype.createDom = function (a, c, d) {
    return e.dom.createDom_(this.document_, arguments);
  };
  e.dom.DomHelper.prototype.$dom = e.dom.DomHelper.prototype.createDom;
  e.dom.DomHelper.prototype.createElement = function (a) {
    return e.dom.createElement_(this.document_, a);
  };
  e.dom.DomHelper.prototype.createTextNode = function (a) {
    return this.document_.createTextNode(String(a));
  };
  e.dom.DomHelper.prototype.createTable = function (a, c, d) {
    return e.dom.createTable_(this.document_, a, c, !!d);
  };
  e.dom.DomHelper.prototype.safeHtmlToNode = function (a) {
    return e.dom.safeHtmlToNode_(this.document_, a);
  };
  e.dom.DomHelper.prototype.isCss1CompatMode = function () {
    return e.dom.isCss1CompatMode_(this.document_);
  };
  e.dom.DomHelper.prototype.getWindow = function () {
    return e.dom.getWindow_(this.document_);
  };
  e.dom.DomHelper.prototype.getDocumentScrollElement = function () {
    return e.dom.getDocumentScrollElement_(this.document_);
  };
  e.dom.DomHelper.prototype.getDocumentScroll = function () {
    return e.dom.getDocumentScroll_(this.document_);
  };
  e.dom.DomHelper.prototype.getActiveElement = function (a) {
    return e.dom.getActiveElement(a || this.document_);
  };
  e.dom.DomHelper.prototype.appendChild = e.dom.appendChild;
  e.dom.DomHelper.prototype.append = e.dom.append;
  e.dom.DomHelper.prototype.canHaveChildren = e.dom.canHaveChildren;
  e.dom.DomHelper.prototype.removeChildren = e.dom.removeChildren;
  e.dom.DomHelper.prototype.insertSiblingBefore = e.dom.insertSiblingBefore;
  e.dom.DomHelper.prototype.insertSiblingAfter = e.dom.insertSiblingAfter;
  e.dom.DomHelper.prototype.insertChildAt = e.dom.insertChildAt;
  e.dom.DomHelper.prototype.removeNode = e.dom.removeNode;
  e.dom.DomHelper.prototype.replaceNode = e.dom.replaceNode;
  e.dom.DomHelper.prototype.flattenElement = e.dom.flattenElement;
  e.dom.DomHelper.prototype.getChildren = e.dom.getChildren;
  e.dom.DomHelper.prototype.getFirstElementChild = e.dom.getFirstElementChild;
  e.dom.DomHelper.prototype.getLastElementChild = e.dom.getLastElementChild;
  e.dom.DomHelper.prototype.getNextElementSibling = e.dom.getNextElementSibling;
  e.dom.DomHelper.prototype.getPreviousElementSibling = e.dom.getPreviousElementSibling;
  e.dom.DomHelper.prototype.getNextNode = e.dom.getNextNode;
  e.dom.DomHelper.prototype.getPreviousNode = e.dom.getPreviousNode;
  e.dom.DomHelper.prototype.isNodeLike = e.dom.isNodeLike;
  e.dom.DomHelper.prototype.isElement = e.dom.isElement;
  e.dom.DomHelper.prototype.isWindow = e.dom.isWindow;
  e.dom.DomHelper.prototype.getParentElement = e.dom.getParentElement;
  e.dom.DomHelper.prototype.contains = e.dom.contains;
  e.dom.DomHelper.prototype.compareNodeOrder = e.dom.compareNodeOrder;
  e.dom.DomHelper.prototype.findCommonAncestor = e.dom.findCommonAncestor;
  e.dom.DomHelper.prototype.getOwnerDocument = e.dom.getOwnerDocument;
  e.dom.DomHelper.prototype.getFrameContentDocument = e.dom.getFrameContentDocument;
  e.dom.DomHelper.prototype.getFrameContentWindow = e.dom.getFrameContentWindow;
  e.dom.DomHelper.prototype.setTextContent = e.dom.setTextContent;
  e.dom.DomHelper.prototype.getOuterHtml = e.dom.getOuterHtml;
  e.dom.DomHelper.prototype.findNode = e.dom.findNode;
  e.dom.DomHelper.prototype.findNodes = e.dom.findNodes;
  e.dom.DomHelper.prototype.isFocusableTabIndex = e.dom.isFocusableTabIndex;
  e.dom.DomHelper.prototype.setFocusableTabIndex = e.dom.setFocusableTabIndex;
  e.dom.DomHelper.prototype.isFocusable = e.dom.isFocusable;
  e.dom.DomHelper.prototype.getTextContent = e.dom.getTextContent;
  e.dom.DomHelper.prototype.getNodeTextLength = e.dom.getNodeTextLength;
  e.dom.DomHelper.prototype.getNodeTextOffset = e.dom.getNodeTextOffset;
  e.dom.DomHelper.prototype.getNodeAtOffset = e.dom.getNodeAtOffset;
  e.dom.DomHelper.prototype.isNodeList = e.dom.isNodeList;
  e.dom.DomHelper.prototype.getAncestorByTagNameAndClass = e.dom.getAncestorByTagNameAndClass;
  e.dom.DomHelper.prototype.getAncestorByClass = e.dom.getAncestorByClass;
  e.dom.DomHelper.prototype.getAncestor = e.dom.getAncestor;
  e.dom.DomHelper.prototype.getCanvasContext2D = e.dom.getCanvasContext2D;
  e.async.throwException = function (a) {
    e.global.setTimeout(function () {
      throw a;
    }, 0);
  };
  e.async.nextTick = function (a, c, d) {
    var f = a;
    c && (f = e.bind(a, c));
    f = e.async.nextTick.wrapCallback_(f);
    e.isFunction(e.global.setImmediate) && (d || e.async.nextTick.useSetImmediate_()) ? e.global.setImmediate(f) : (e.async.nextTick.setImmediate_ || (e.async.nextTick.setImmediate_ = e.async.nextTick.getSetImmediateEmulator_()), e.async.nextTick.setImmediate_(f));
  };
  e.async.nextTick.useSetImmediate_ = function () {
    return e.global.Window && e.global.Window.prototype && !e.labs.userAgent.browser.isEdge() && e.global.Window.prototype.setImmediate == e.global.setImmediate ? !1 : !0;
  };
  e.async.nextTick.getSetImmediateEmulator_ = function () {
    var a = e.global.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !e.labs.userAgent.engine.isPresto() && (a = function () {
      var a = e.dom.createElement("IFRAME");
      a.style.display = "none";
      e.dom.safe.setIframeSrc(a, e.html.TrustedResourceUrl.fromConstant(e.string.Const.EMPTY));
      document.documentElement.appendChild(a);
      var c = a.contentWindow;
      a = c.document;
      a.open();
      e.dom.safe.documentWrite(a, e.html.SafeHtml.EMPTY);
      a.close();
      var d = "callImmediate" + Math.random(),
        f = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host;
      a = e.bind(function (a) {
        if (("*" == f || a.origin == f) && a.data == d) this.port1.onmessage();
      }, this);
      c.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          c.postMessage(d, f);
        }
      };
    });
    if ("undefined" !== typeof a && !e.labs.userAgent.browser.isIE()) {
      var c = new a(),
        d = {},
        f = d;
      c.port1.onmessage = function () {
        if (void 0 !== d.next) {
          d = d.next;
          var a = d.cb;
          d.cb = null;
          a();
        }
      };
      return function (a) {
        f.next = {
          cb: a
        };
        f = f.next;
        c.port2.postMessage(0);
      };
    }
    return function (a) {
      e.global.setTimeout(a, 0);
    };
  };
  e.async.nextTick.wrapCallback_ = e.functions.identity;
  e.debug.entryPointRegistry.register(function (a) {
    e.async.nextTick.wrapCallback_ = a;
  });
  e.ASSUME_NATIVE_PROMISE = !1;
  e.async.run = function (a, c) {
    e.async.run.schedule_ || e.async.run.initializeRunner_();
    e.async.run.workQueueScheduled_ || (e.async.run.schedule_(), e.async.run.workQueueScheduled_ = !0);
    e.async.run.workQueue_.add(a, c);
  };
  e.async.run.initializeRunner_ = function () {
    if (e.ASSUME_NATIVE_PROMISE || e.global.Promise && e.global.Promise.resolve) {
      var a = e.global.Promise.resolve(void 0);
      e.async.run.schedule_ = function () {
        a.then(e.async.run.processWorkQueue);
      };
    } else e.async.run.schedule_ = function () {
      e.async.nextTick(e.async.run.processWorkQueue);
    };
  };
  e.async.run.forceNextTick = function (a) {
    e.async.run.schedule_ = function () {
      e.async.nextTick(e.async.run.processWorkQueue);
      a && a(e.async.run.processWorkQueue);
    };
  };
  e.async.run.workQueueScheduled_ = !1;
  e.async.run.workQueue_ = new e.async.WorkQueue();
  e.DEBUG && (e.async.run.resetQueue = function () {
    e.async.run.workQueueScheduled_ = !1;
    e.async.run.workQueue_ = new e.async.WorkQueue();
  });
  e.async.run.processWorkQueue = function () {
    for (var a; a = e.async.run.workQueue_.remove();) {
      try {
        a.fn.call(a.scope);
      } catch (c) {
        e.async.throwException(c);
      }
      e.async.run.workQueue_.returnUnused(a);
    }
    e.async.run.workQueueScheduled_ = !1;
  };
  e.promise = {};
  e.promise.Resolver = function () {};
  e.Promise = function (a, c) {
    this.state_ = e.Promise.State_.PENDING;
    this.result_ = void 0;
    this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null;
    this.executing_ = !1;
    0 < e.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == e.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1);
    e.Promise.LONG_STACK_TRACES && (this.stack_ = [], this.addStackTrace_(Error("created")), this.currentStep_ = 0);
    if (a != e.nullFunction) try {
      var d = this;
      a.call(c, function (a) {
        d.resolve_(e.Promise.State_.FULFILLED, a);
      }, function (a) {
        if (e.DEBUG && !(a instanceof e.Promise.CancellationError)) try {
          if (a instanceof Error) throw a;
          throw Error("Promise rejected.");
        } catch (g) {}
        d.resolve_(e.Promise.State_.REJECTED, a);
      });
    } catch (f) {
      this.resolve_(e.Promise.State_.REJECTED, f);
    }
  };
  e.Promise.LONG_STACK_TRACES = !1;
  e.Promise.UNHANDLED_REJECTION_DELAY = 0;
  e.Promise.State_ = {
    PENDING: 0,
    BLOCKED: 1,
    FULFILLED: 2,
    REJECTED: 3
  };
  e.Promise.CallbackEntry_ = function () {
    this.next = this.context = this.onRejected = this.onFulfilled = this.child = null;
    this.always = !1;
  };
  e.Promise.CallbackEntry_.prototype.reset = function () {
    this.context = this.onRejected = this.onFulfilled = this.child = null;
    this.always = !1;
  };
  e.Promise.DEFAULT_MAX_UNUSED = 100;
  e.Promise.freelist_ = new e.async.FreeList(function () {
    return new e.Promise.CallbackEntry_();
  }, function (a) {
    a.reset();
  }, e.Promise.DEFAULT_MAX_UNUSED);
  e.Promise.getCallbackEntry_ = function (a, c, d) {
    var f = e.Promise.freelist_.get();
    f.onFulfilled = a;
    f.onRejected = c;
    f.context = d;
    return f;
  };
  e.Promise.returnEntry_ = function (a) {
    e.Promise.freelist_.put(a);
  };
  e.Promise.resolve = function (a) {
    if (a instanceof e.Promise) return a;
    var c = new e.Promise(e.nullFunction);
    c.resolve_(e.Promise.State_.FULFILLED, a);
    return c;
  };
  e.Promise.reject = function (a) {
    return new e.Promise(function (c, d) {
      d(a);
    });
  };
  e.Promise.resolveThen_ = function (a, c, d) {
    e.Promise.maybeThen_(a, c, d, null) || e.async.run(e.partial(c, a));
  };
  e.Promise.race = function (a) {
    return new e.Promise(function (c, d) {
      a.length || c(void 0);
      for (var f = 0, g; f < a.length; f++) g = a[f], e.Promise.resolveThen_(g, c, d);
    });
  };
  e.Promise.all = function (a) {
    return new e.Promise(function (c, d) {
      var f = a.length,
        g = [];
      if (f) for (var h = function (a, d) {
          f--;
          g[a] = d;
          0 == f && c(g);
        }, k = function (a) {
          d(a);
        }, m = 0, n; m < a.length; m++) n = a[m], e.Promise.resolveThen_(n, e.partial(h, m), k);else c(g);
    });
  };
  e.Promise.allSettled = function (a) {
    return new e.Promise(function (c) {
      var d = a.length,
        f = [];
      if (d) for (var g = function (a, g, h) {
          d--;
          f[a] = g ? {
            fulfilled: !0,
            value: h
          } : {
            fulfilled: !1,
            reason: h
          };
          0 == d && c(f);
        }, h = 0, k; h < a.length; h++) k = a[h], e.Promise.resolveThen_(k, e.partial(g, h, !0), e.partial(g, h, !1));else c(f);
    });
  };
  e.Promise.firstFulfilled = function (a) {
    return new e.Promise(function (c, d) {
      var f = a.length,
        g = [];
      if (f) for (var h = function (a) {
          c(a);
        }, k = function (a, c) {
          f--;
          g[a] = c;
          0 == f && d(g);
        }, m = 0, n; m < a.length; m++) n = a[m], e.Promise.resolveThen_(n, h, e.partial(k, m));else c(void 0);
    });
  };
  e.Promise.withResolver = function () {
    var a,
      c,
      d = new e.Promise(function (d, g) {
        a = d;
        c = g;
      });
    return new e.Promise.Resolver_(d, a, c);
  };
  e.Promise.prototype.then = function (a, c, d) {
    null != a && e.asserts.assertFunction(a, "opt_onFulfilled should be a function.");
    null != c && e.asserts.assertFunction(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
    return this.addChildPromise_(e.isFunction(a) ? a : null, e.isFunction(c) ? c : null, d);
  };
  e.Thenable.addImplementation(e.Promise);
  e.Promise.prototype.thenVoid = function (a, c, d) {
    null != a && e.asserts.assertFunction(a, "opt_onFulfilled should be a function.");
    null != c && e.asserts.assertFunction(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
    this.addCallbackEntry_(e.Promise.getCallbackEntry_(a || e.nullFunction, c || null, d));
  };
  e.Promise.prototype.thenAlways = function (a, c) {
    e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenAlways"));
    a = e.Promise.getCallbackEntry_(a, a, c);
    a.always = !0;
    this.addCallbackEntry_(a);
    return this;
  };
  e.Promise.prototype.thenCatch = function (a, c) {
    e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenCatch"));
    return this.addChildPromise_(null, a, c);
  };
  e.Promise.prototype.cancel = function (a) {
    if (this.state_ == e.Promise.State_.PENDING) {
      var c = new e.Promise.CancellationError(a);
      e.async.run(function () {
        this.cancelInternal_(c);
      }, this);
    }
  };
  e.Promise.prototype.cancelInternal_ = function (a) {
    this.state_ == e.Promise.State_.PENDING && (this.parent_ ? (this.parent_.cancelChild_(this, a), this.parent_ = null) : this.resolve_(e.Promise.State_.REJECTED, a));
  };
  e.Promise.prototype.cancelChild_ = function (a, c) {
    if (this.callbackEntries_) {
      for (var d = 0, f = null, g = null, h = this.callbackEntries_; h && (h.always || (d++, h.child == a && (f = h), !(f && 1 < d))); h = h.next) f || (g = h);
      f && (this.state_ == e.Promise.State_.PENDING && 1 == d ? this.cancelInternal_(c) : (g ? this.removeEntryAfter_(g) : this.popEntry_(), this.executeCallback_(f, e.Promise.State_.REJECTED, c)));
    }
  };
  e.Promise.prototype.addCallbackEntry_ = function (a) {
    this.hasEntry_() || this.state_ != e.Promise.State_.FULFILLED && this.state_ != e.Promise.State_.REJECTED || this.scheduleCallbacks_();
    this.queueEntry_(a);
  };
  e.Promise.prototype.addChildPromise_ = function (a, c, d) {
    var f = e.Promise.getCallbackEntry_(null, null, null);
    f.child = new e.Promise(function (g, h) {
      f.onFulfilled = a ? function (c) {
        try {
          var f = a.call(d, c);
          g(f);
        } catch (n) {
          h(n);
        }
      } : g;
      f.onRejected = c ? function (a) {
        try {
          var f = c.call(d, a);
          void 0 === f && a instanceof e.Promise.CancellationError ? h(a) : g(f);
        } catch (n) {
          h(n);
        }
      } : h;
    });
    f.child.parent_ = this;
    this.addCallbackEntry_(f);
    return f.child;
  };
  e.Promise.prototype.unblockAndFulfill_ = function (a) {
    e.asserts.assert(this.state_ == e.Promise.State_.BLOCKED);
    this.state_ = e.Promise.State_.PENDING;
    this.resolve_(e.Promise.State_.FULFILLED, a);
  };
  e.Promise.prototype.unblockAndReject_ = function (a) {
    e.asserts.assert(this.state_ == e.Promise.State_.BLOCKED);
    this.state_ = e.Promise.State_.PENDING;
    this.resolve_(e.Promise.State_.REJECTED, a);
  };
  e.Promise.prototype.resolve_ = function (a, c) {
    this.state_ == e.Promise.State_.PENDING && (this === c && (a = e.Promise.State_.REJECTED, c = new TypeError("Promise cannot resolve to itself")), this.state_ = e.Promise.State_.BLOCKED, e.Promise.maybeThen_(c, this.unblockAndFulfill_, this.unblockAndReject_, this) || (this.result_ = c, this.state_ = a, this.parent_ = null, this.scheduleCallbacks_(), a != e.Promise.State_.REJECTED || c instanceof e.Promise.CancellationError || e.Promise.addUnhandledRejection_(this, c)));
  };
  e.Promise.maybeThen_ = function (a, c, d, f) {
    if (a instanceof e.Promise) return a.thenVoid(c, d, f), !0;
    if (e.Thenable.isImplementedBy(a)) return a.then(c, d, f), !0;
    if (e.isObject(a)) try {
      var g = a.then;
      if (e.isFunction(g)) return e.Promise.tryThen_(a, g, c, d, f), !0;
    } catch (h) {
      return d.call(f, h), !0;
    }
    return !1;
  };
  e.Promise.tryThen_ = function (a, c, d, f, g) {
    function h(a) {
      m || (m = !0, f.call(g, a));
    }
    function k(a) {
      m || (m = !0, d.call(g, a));
    }
    var m = !1;
    try {
      c.call(a, k, h);
    } catch (n) {
      h(n);
    }
  };
  e.Promise.prototype.scheduleCallbacks_ = function () {
    this.executing_ || (this.executing_ = !0, e.async.run(this.executeCallbacks_, this));
  };
  e.Promise.prototype.hasEntry_ = function () {
    return !!this.callbackEntries_;
  };
  e.Promise.prototype.queueEntry_ = function (a) {
    e.asserts.assert(null != a.onFulfilled);
    this.callbackEntriesTail_ ? this.callbackEntriesTail_.next = a : this.callbackEntries_ = a;
    this.callbackEntriesTail_ = a;
  };
  e.Promise.prototype.popEntry_ = function () {
    var a = null;
    this.callbackEntries_ && (a = this.callbackEntries_, this.callbackEntries_ = a.next, a.next = null);
    this.callbackEntries_ || (this.callbackEntriesTail_ = null);
    null != a && e.asserts.assert(null != a.onFulfilled);
    return a;
  };
  e.Promise.prototype.removeEntryAfter_ = function (a) {
    e.asserts.assert(this.callbackEntries_);
    e.asserts.assert(null != a);
    a.next == this.callbackEntriesTail_ && (this.callbackEntriesTail_ = a);
    a.next = a.next.next;
  };
  e.Promise.prototype.executeCallbacks_ = function () {
    for (var a; a = this.popEntry_();) e.Promise.LONG_STACK_TRACES && this.currentStep_++, this.executeCallback_(a, this.state_, this.result_);
    this.executing_ = !1;
  };
  e.Promise.prototype.executeCallback_ = function (a, c, d) {
    c == e.Promise.State_.REJECTED && a.onRejected && !a.always && this.removeUnhandledRejection_();
    if (a.child) a.child.parent_ = null, e.Promise.invokeCallback_(a, c, d);else try {
      a.always ? a.onFulfilled.call(a.context) : e.Promise.invokeCallback_(a, c, d);
    } catch (f) {
      e.Promise.handleRejection_.call(null, f);
    }
    e.Promise.returnEntry_(a);
  };
  e.Promise.invokeCallback_ = function (a, c, d) {
    c == e.Promise.State_.FULFILLED ? a.onFulfilled.call(a.context, d) : a.onRejected && a.onRejected.call(a.context, d);
  };
  e.Promise.prototype.addStackTrace_ = function (a) {
    if (e.Promise.LONG_STACK_TRACES && "string" === typeof a.stack) {
      var c = a.stack.split("\n", 4)[3];
      a = a.message;
      a += Array(11 - a.length).join(" ");
      this.stack_.push(a + c);
    }
  };
  e.Promise.prototype.appendLongStack_ = function (a) {
    if (e.Promise.LONG_STACK_TRACES && a && "string" === typeof a.stack && this.stack_.length) {
      for (var c = ["Promise trace:"], d = this; d; d = d.parent_) {
        for (var f = this.currentStep_; 0 <= f; f--) c.push(d.stack_[f]);
        c.push("Value: [" + (d.state_ == e.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String(d.result_) + ">");
      }
      a.stack += "\n\n" + c.join("\n");
    }
  };
  e.Promise.prototype.removeUnhandledRejection_ = function () {
    if (0 < e.Promise.UNHANDLED_REJECTION_DELAY) for (var a = this; a && a.unhandledRejectionId_; a = a.parent_) e.global.clearTimeout(a.unhandledRejectionId_), a.unhandledRejectionId_ = 0;else if (0 == e.Promise.UNHANDLED_REJECTION_DELAY) for (a = this; a && a.hadUnhandledRejection_; a = a.parent_) a.hadUnhandledRejection_ = !1;
  };
  e.Promise.addUnhandledRejection_ = function (a, c) {
    0 < e.Promise.UNHANDLED_REJECTION_DELAY ? a.unhandledRejectionId_ = e.global.setTimeout(function () {
      a.appendLongStack_(c);
      e.Promise.handleRejection_.call(null, c);
    }, e.Promise.UNHANDLED_REJECTION_DELAY) : 0 == e.Promise.UNHANDLED_REJECTION_DELAY && (a.hadUnhandledRejection_ = !0, e.async.run(function () {
      a.hadUnhandledRejection_ && (a.appendLongStack_(c), e.Promise.handleRejection_.call(null, c));
    }));
  };
  e.Promise.handleRejection_ = e.async.throwException;
  e.Promise.setUnhandledRejectionHandler = function (a) {
    e.Promise.handleRejection_ = a;
  };
  e.Promise.CancellationError = function (a) {
    e.debug.Error.call(this, a);
  };
  e.inherits(e.Promise.CancellationError, e.debug.Error);
  e.Promise.CancellationError.prototype.name = "cancel";
  e.Promise.Resolver_ = function (a, c, d) {
    this.promise = a;
    this.resolve = c;
    this.reject = d;
  };
  e.disposable = {};
  e.disposable.IDisposable = function () {};
  e.disposable.IDisposable.prototype.dispose = e.abstractMethod;
  e.disposable.IDisposable.prototype.isDisposed = e.abstractMethod;
  e.Disposable = function () {
    e.Disposable.MONITORING_MODE != e.Disposable.MonitoringMode.OFF && (e.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack), e.Disposable.instances_[e.getUid(this)] = this);
    this.disposed_ = this.disposed_;
    this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
  };
  e.Disposable.MonitoringMode = {
    OFF: 0,
    PERMANENT: 1,
    INTERACTIVE: 2
  };
  e.Disposable.MONITORING_MODE = 0;
  e.Disposable.INCLUDE_STACK_ON_CREATION = !0;
  e.Disposable.instances_ = {};
  e.Disposable.getUndisposedObjects = function () {
    var a = [],
      c;
    for (c in e.Disposable.instances_) e.Disposable.instances_.hasOwnProperty(c) && a.push(e.Disposable.instances_[Number(c)]);
    return a;
  };
  e.Disposable.clearUndisposedObjects = function () {
    e.Disposable.instances_ = {};
  };
  e.Disposable.prototype.disposed_ = !1;
  e.Disposable.prototype.isDisposed = function () {
    return this.disposed_;
  };
  e.Disposable.prototype.getDisposed = e.Disposable.prototype.isDisposed;
  e.Disposable.prototype.dispose = function () {
    if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), e.Disposable.MONITORING_MODE != e.Disposable.MonitoringMode.OFF)) {
      var a = e.getUid(this);
      if (e.Disposable.MONITORING_MODE == e.Disposable.MonitoringMode.PERMANENT && !e.Disposable.instances_.hasOwnProperty(a)) throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
      if (e.Disposable.MONITORING_MODE != e.Disposable.MonitoringMode.OFF && this.onDisposeCallbacks_ && 0 < this.onDisposeCallbacks_.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
      delete e.Disposable.instances_[a];
    }
  };
  e.Disposable.prototype.registerDisposable = function (a) {
    this.addOnDisposeCallback(e.partial(e.dispose, a));
  };
  e.Disposable.prototype.addOnDisposeCallback = function (a, c) {
    this.disposed_ ? void 0 !== c ? a.call(c) : a() : (this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []), this.onDisposeCallbacks_.push(void 0 !== c ? e.bind(a, c) : a));
  };
  e.Disposable.prototype.disposeInternal = function () {
    if (this.onDisposeCallbacks_) for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()();
  };
  e.Disposable.isDisposed = function (a) {
    return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
  };
  e.dispose = function (a) {
    a && "function" == typeof a.dispose && a.dispose();
  };
  e.disposeAll = function (a) {
    for (var c = 0, d = arguments.length; c < d; ++c) {
      var f = arguments[c];
      e.isArrayLike(f) ? e.disposeAll.apply(null, f) : e.dispose(f);
    }
  };
  e.debug.errorcontext = {};
  e.debug.errorcontext.addErrorContext = function (a, c, d) {
    a[e.debug.errorcontext.CONTEXT_KEY_] || (a[e.debug.errorcontext.CONTEXT_KEY_] = {});
    a[e.debug.errorcontext.CONTEXT_KEY_][c] = d;
  };
  e.debug.errorcontext.getErrorContext = function (a) {
    return a[e.debug.errorcontext.CONTEXT_KEY_] || {};
  };
  e.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";
  e.debug.LOGGING_ENABLED = e.DEBUG;
  e.debug.FORCE_SLOPPY_STACKS = !1;
  e.debug.catchErrors = function (a, c, d) {
    d = d || e.global;
    var f = d.onerror,
      g = !!c;
    e.userAgent.WEBKIT && !e.userAgent.isVersionOrHigher("535.3") && (g = !g);
    d.onerror = function (c, d, m, n, p) {
      f && f(c, d, m, n, p);
      a({
        message: c,
        fileName: d,
        line: m,
        lineNumber: m,
        col: n,
        error: p
      });
      return g;
    };
  };
  e.debug.expose = function (a, c) {
    if ("undefined" == typeof a) return "undefined";
    if (null == a) return "NULL";
    var d = [],
      f;
    for (f in a) if (c || !e.isFunction(a[f])) {
      var g = f + " = ";
      try {
        g += a[f];
      } catch (h) {
        g += "*** " + h + " ***";
      }
      d.push(g);
    }
    return d.join("\n");
  };
  e.debug.deepExpose = function (a, c) {
    function d(a, m) {
      var k = m + "  ";
      try {
        if (void 0 === a) f.push("undefined");else if (null === a) f.push("NULL");else if ("string" === typeof a) f.push('"' + a.replace(/\n/g, "\n" + m) + '"');else if (e.isFunction(a)) f.push(String(a).replace(/\n/g, "\n" + m));else if (e.isObject(a)) {
          e.hasUid(a) || g.push(a);
          var p = e.getUid(a);
          if (h[p]) f.push("*** reference loop detected (id=" + p + ") ***");else {
            h[p] = !0;
            f.push("{");
            for (var r in a) if (c || !e.isFunction(a[r])) f.push("\n"), f.push(k), f.push(r + " = "), d(a[r], k);
            f.push("\n" + m + "}");
            delete h[p];
          }
        } else f.push(a);
      } catch (q) {
        f.push("*** " + q + " ***");
      }
    }
    var f = [],
      g = [],
      h = {};
    d(a, "");
    for (a = 0; a < g.length; a++) e.removeUid(g[a]);
    return f.join("");
  };
  e.debug.exposeArray = function (a) {
    for (var c = [], d = 0; d < a.length; d++) Array.isArray(a[d]) ? c.push(e.debug.exposeArray(a[d])) : c.push(a[d]);
    return "[ " + c.join(", ") + " ]";
  };
  e.debug.normalizeErrorObject = function (a) {
    var c = e.getObjectByName("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: c,
      stack: "Not available"
    };
    var d = !1;
    try {
      var f = a.lineNumber || a.line || "Not available";
    } catch (h) {
      f = "Not available", d = !0;
    }
    try {
      var g = a.fileName || a.filename || a.sourceURL || e.global.$googDebugFname || c;
    } catch (h) {
      g = "Not available", d = !0;
    }
    return !d && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : (c = a.message, null == c && (c = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : e.debug.getFunctionName(a.constructor)) + '"' : "Unknown Error of unknown type"), {
      message: c,
      name: a.name || "UnknownError",
      lineNumber: f,
      fileName: g,
      stack: a.stack || "Not available"
    });
  };
  e.debug.enhanceError = function (a, c) {
    a instanceof Error || (a = Error(a), Error.captureStackTrace && Error.captureStackTrace(a, e.debug.enhanceError));
    a.stack || (a.stack = e.debug.getStacktrace(e.debug.enhanceError));
    if (c) {
      for (var d = 0; a["message" + d];) ++d;
      a["message" + d] = String(c);
    }
    return a;
  };
  e.debug.enhanceErrorWithContext = function (a, c) {
    a = e.debug.enhanceError(a);
    if (c) for (var d in c) e.debug.errorcontext.addErrorContext(a, d, c[d]);
    return a;
  };
  e.debug.getStacktraceSimple = function (a) {
    if (!e.debug.FORCE_SLOPPY_STACKS) {
      var c = e.debug.getNativeStackTrace_(e.debug.getStacktraceSimple);
      if (c) return c;
    }
    c = [];
    for (var d = arguments.callee.caller, f = 0; d && (!a || f < a);) {
      c.push(e.debug.getFunctionName(d));
      c.push("()\n");
      try {
        d = d.caller;
      } catch (g) {
        c.push("[exception trying to get caller]\n");
        break;
      }
      f++;
      if (f >= e.debug.MAX_STACK_DEPTH) {
        c.push("[...long stack...]");
        break;
      }
    }
    a && f >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
    return c.join("");
  };
  e.debug.MAX_STACK_DEPTH = 50;
  e.debug.getNativeStackTrace_ = function (a) {
    var c = Error();
    if (Error.captureStackTrace) return Error.captureStackTrace(c, a), String(c.stack);
    try {
      throw c;
    } catch (d) {
      c = d;
    }
    return (a = c.stack) ? String(a) : null;
  };
  e.debug.getStacktrace = function (a) {
    var c;
    e.debug.FORCE_SLOPPY_STACKS || (c = e.debug.getNativeStackTrace_(a || e.debug.getStacktrace));
    c || (c = e.debug.getStacktraceHelper_(a || arguments.callee.caller, []));
    return c;
  };
  e.debug.getStacktraceHelper_ = function (a, c) {
    var d = [];
    if (e.array.contains(c, a)) d.push("[...circular reference...]");else if (a && c.length < e.debug.MAX_STACK_DEPTH) {
      d.push(e.debug.getFunctionName(a) + "(");
      for (var f = a.arguments, g = 0; f && g < f.length; g++) {
        0 < g && d.push(", ");
        var h = f[g];
        switch (typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = String(h);
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = e.debug.getFunctionName(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h;
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        d.push(h);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(e.debug.getStacktraceHelper_(a.caller, c));
      } catch (k) {
        d.push("[exception trying to get caller]\n");
      }
    } else a ? d.push("[...long stack...]") : d.push("[end]");
    return d.join("");
  };
  e.debug.getFunctionName = function (a) {
    if (e.debug.fnNameCache_[a]) return e.debug.fnNameCache_[a];
    a = String(a);
    if (!e.debug.fnNameCache_[a]) {
      var c = /function\s+([^\(]+)/m.exec(a);
      e.debug.fnNameCache_[a] = c ? c[1] : "[Anonymous]";
    }
    return e.debug.fnNameCache_[a];
  };
  e.debug.makeWhitespaceVisible = function (a) {
    return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
  };
  e.debug.runtimeType = function (a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
  };
  e.debug.fnNameCache_ = {};
  e.debug.freezeInternal_ = e.DEBUG && Object.freeze || function (a) {
    return a;
  };
  e.debug.freeze = function (a) {
    return e.debug.freezeInternal_(a);
  };
  e.events = {};
  b.scope.purify = function (a) {
    return {
      valueOf: a
    }.valueOf();
  };
  e.events.BrowserFeature = {
    HAS_W3C_BUTTON: !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9),
    HAS_W3C_EVENT_SUPPORT: !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9),
    SET_KEY_CODE_TO_PREVENT_DEFAULT: e.userAgent.IE && !e.userAgent.isVersionOrHigher("9"),
    HAS_NAVIGATOR_ONLINE_PROPERTY: !e.userAgent.WEBKIT || e.userAgent.isVersionOrHigher("528"),
    HAS_HTML5_NETWORK_EVENT_SUPPORT: e.userAgent.GECKO && e.userAgent.isVersionOrHigher("1.9b") || e.userAgent.IE && e.userAgent.isVersionOrHigher("8") || e.userAgent.OPERA && e.userAgent.isVersionOrHigher("9.5") || e.userAgent.WEBKIT && e.userAgent.isVersionOrHigher("528"),
    HTML5_NETWORK_EVENTS_FIRE_ON_BODY: e.userAgent.GECKO && !e.userAgent.isVersionOrHigher("8") || e.userAgent.IE && !e.userAgent.isVersionOrHigher("9"),
    TOUCH_ENABLED: "ontouchstart" in e.global || !!(e.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!e.global.navigator || !e.global.navigator.maxTouchPoints && !e.global.navigator.msMaxTouchPoints),
    POINTER_EVENTS: "PointerEvent" in e.global,
    MSPOINTER_EVENTS: "MSPointerEvent" in e.global && !(!e.global.navigator || !e.global.navigator.msPointerEnabled),
    PASSIVE_EVENTS: (0, b.scope.purify)(function () {
      if (!e.global.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        c = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          }
        });
      try {
        e.global.addEventListener("test", e.nullFunction, c), e.global.removeEventListener("test", e.nullFunction, c);
      } catch (d) {}
      return a;
    })
  };
  e.events.EventId = function (a) {
    this.id = a;
  };
  e.events.EventId.prototype.toString = function () {
    return this.id;
  };
  e.events.Event = function (a, c) {
    this.type = a instanceof e.events.EventId ? String(a) : a;
    this.currentTarget = this.target = c;
    this.defaultPrevented = this.propagationStopped_ = !1;
  };
  e.events.Event.prototype.hasPropagationStopped = function () {
    return this.propagationStopped_;
  };
  e.events.Event.prototype.stopPropagation = function () {
    this.propagationStopped_ = !0;
  };
  e.events.Event.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  e.events.Event.stopPropagation = function (a) {
    a.stopPropagation();
  };
  e.events.Event.preventDefault = function (a) {
    a.preventDefault();
  };
  e.events.getVendorPrefixedName_ = function (a) {
    return e.userAgent.WEBKIT ? "webkit" + a : e.userAgent.OPERA ? "o" + a.toLowerCase() : a.toLowerCase();
  };
  e.events.EventType = {
    CLICK: "click",
    RIGHTCLICK: "rightclick",
    DBLCLICK: "dblclick",
    AUXCLICK: "auxclick",
    MOUSEDOWN: "mousedown",
    MOUSEUP: "mouseup",
    MOUSEOVER: "mouseover",
    MOUSEOUT: "mouseout",
    MOUSEMOVE: "mousemove",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    MOUSECANCEL: "mousecancel",
    SELECTIONCHANGE: "selectionchange",
    SELECTSTART: "selectstart",
    WHEEL: "wheel",
    KEYPRESS: "keypress",
    KEYDOWN: "keydown",
    KEYUP: "keyup",
    BLUR: "blur",
    FOCUS: "focus",
    DEACTIVATE: "deactivate",
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout",
    CHANGE: "change",
    RESET: "reset",
    SELECT: "select",
    SUBMIT: "submit",
    INPUT: "input",
    PROPERTYCHANGE: "propertychange",
    DRAGSTART: "dragstart",
    DRAG: "drag",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DRAGLEAVE: "dragleave",
    DROP: "drop",
    DRAGEND: "dragend",
    TOUCHSTART: "touchstart",
    TOUCHMOVE: "touchmove",
    TOUCHEND: "touchend",
    TOUCHCANCEL: "touchcancel",
    BEFOREUNLOAD: "beforeunload",
    CONSOLEMESSAGE: "consolemessage",
    CONTEXTMENU: "contextmenu",
    DEVICECHANGE: "devicechange",
    DEVICEMOTION: "devicemotion",
    DEVICEORIENTATION: "deviceorientation",
    DOMCONTENTLOADED: "DOMContentLoaded",
    ERROR: "error",
    HELP: "help",
    LOAD: "load",
    LOSECAPTURE: "losecapture",
    ORIENTATIONCHANGE: "orientationchange",
    READYSTATECHANGE: "readystatechange",
    RESIZE: "resize",
    SCROLL: "scroll",
    UNLOAD: "unload",
    CANPLAY: "canplay",
    CANPLAYTHROUGH: "canplaythrough",
    DURATIONCHANGE: "durationchange",
    EMPTIED: "emptied",
    ENDED: "ended",
    LOADEDDATA: "loadeddata",
    LOADEDMETADATA: "loadedmetadata",
    PAUSE: "pause",
    PLAY: "play",
    PLAYING: "playing",
    PROGRESS: "progress",
    RATECHANGE: "ratechange",
    SEEKED: "seeked",
    SEEKING: "seeking",
    STALLED: "stalled",
    SUSPEND: "suspend",
    TIMEUPDATE: "timeupdate",
    VOLUMECHANGE: "volumechange",
    WAITING: "waiting",
    SOURCEOPEN: "sourceopen",
    SOURCEENDED: "sourceended",
    SOURCECLOSED: "sourceclosed",
    ABORT: "abort",
    UPDATE: "update",
    UPDATESTART: "updatestart",
    UPDATEEND: "updateend",
    HASHCHANGE: "hashchange",
    PAGEHIDE: "pagehide",
    PAGESHOW: "pageshow",
    POPSTATE: "popstate",
    COPY: "copy",
    PASTE: "paste",
    CUT: "cut",
    BEFORECOPY: "beforecopy",
    BEFORECUT: "beforecut",
    BEFOREPASTE: "beforepaste",
    ONLINE: "online",
    OFFLINE: "offline",
    MESSAGE: "message",
    CONNECT: "connect",
    INSTALL: "install",
    ACTIVATE: "activate",
    FETCH: "fetch",
    FOREIGNFETCH: "foreignfetch",
    MESSAGEERROR: "messageerror",
    STATECHANGE: "statechange",
    UPDATEFOUND: "updatefound",
    CONTROLLERCHANGE: "controllerchange",
    ANIMATIONSTART: e.events.getVendorPrefixedName_("AnimationStart"),
    ANIMATIONEND: e.events.getVendorPrefixedName_("AnimationEnd"),
    ANIMATIONITERATION: e.events.getVendorPrefixedName_("AnimationIteration"),
    TRANSITIONEND: e.events.getVendorPrefixedName_("TransitionEnd"),
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTERCANCEL: "pointercancel",
    POINTERMOVE: "pointermove",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    GOTPOINTERCAPTURE: "gotpointercapture",
    LOSTPOINTERCAPTURE: "lostpointercapture",
    MSGESTURECHANGE: "MSGestureChange",
    MSGESTUREEND: "MSGestureEnd",
    MSGESTUREHOLD: "MSGestureHold",
    MSGESTURESTART: "MSGestureStart",
    MSGESTURETAP: "MSGestureTap",
    MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
    MSINERTIASTART: "MSInertiaStart",
    MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
    MSPOINTERCANCEL: "MSPointerCancel",
    MSPOINTERDOWN: "MSPointerDown",
    MSPOINTERENTER: "MSPointerEnter",
    MSPOINTERHOVER: "MSPointerHover",
    MSPOINTERLEAVE: "MSPointerLeave",
    MSPOINTERMOVE: "MSPointerMove",
    MSPOINTEROUT: "MSPointerOut",
    MSPOINTEROVER: "MSPointerOver",
    MSPOINTERUP: "MSPointerUp",
    TEXT: "text",
    TEXTINPUT: e.userAgent.IE ? "textinput" : "textInput",
    COMPOSITIONSTART: "compositionstart",
    COMPOSITIONUPDATE: "compositionupdate",
    COMPOSITIONEND: "compositionend",
    BEFOREINPUT: "beforeinput",
    EXIT: "exit",
    LOADABORT: "loadabort",
    LOADCOMMIT: "loadcommit",
    LOADREDIRECT: "loadredirect",
    LOADSTART: "loadstart",
    LOADSTOP: "loadstop",
    RESPONSIVE: "responsive",
    SIZECHANGED: "sizechanged",
    UNRESPONSIVE: "unresponsive",
    VISIBILITYCHANGE: "visibilitychange",
    STORAGE: "storage",
    DOMSUBTREEMODIFIED: "DOMSubtreeModified",
    DOMNODEINSERTED: "DOMNodeInserted",
    DOMNODEREMOVED: "DOMNodeRemoved",
    DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument",
    DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument",
    DOMATTRMODIFIED: "DOMAttrModified",
    DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified",
    BEFOREPRINT: "beforeprint",
    AFTERPRINT: "afterprint",
    BEFOREINSTALLPROMPT: "beforeinstallprompt",
    APPINSTALLED: "appinstalled"
  };
  e.events.getPointerFallbackEventName_ = function (a, c, d) {
    return e.events.BrowserFeature.POINTER_EVENTS ? a : e.events.BrowserFeature.MSPOINTER_EVENTS ? c : d;
  };
  e.events.PointerFallbackEventType = {
    POINTERDOWN: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERDOWN, e.events.EventType.MSPOINTERDOWN, e.events.EventType.MOUSEDOWN),
    POINTERUP: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERUP, e.events.EventType.MSPOINTERUP, e.events.EventType.MOUSEUP),
    POINTERCANCEL: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERCANCEL, e.events.EventType.MSPOINTERCANCEL, e.events.EventType.MOUSECANCEL),
    POINTERMOVE: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERMOVE, e.events.EventType.MSPOINTERMOVE, e.events.EventType.MOUSEMOVE),
    POINTEROVER: e.events.getPointerFallbackEventName_(e.events.EventType.POINTEROVER, e.events.EventType.MSPOINTEROVER, e.events.EventType.MOUSEOVER),
    POINTEROUT: e.events.getPointerFallbackEventName_(e.events.EventType.POINTEROUT, e.events.EventType.MSPOINTEROUT, e.events.EventType.MOUSEOUT),
    POINTERENTER: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERENTER, e.events.EventType.MSPOINTERENTER, e.events.EventType.MOUSEENTER),
    POINTERLEAVE: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERLEAVE, e.events.EventType.MSPOINTERLEAVE, e.events.EventType.MOUSELEAVE)
  };
  e.events.PointerTouchFallbackEventType = {
    POINTERDOWN: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERDOWN, e.events.EventType.MSPOINTERDOWN, e.events.EventType.TOUCHSTART),
    POINTERUP: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERUP, e.events.EventType.MSPOINTERUP, e.events.EventType.TOUCHEND),
    POINTERCANCEL: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERCANCEL, e.events.EventType.MSPOINTERCANCEL, e.events.EventType.TOUCHCANCEL),
    POINTERMOVE: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERMOVE, e.events.EventType.MSPOINTERMOVE, e.events.EventType.TOUCHMOVE)
  };
  e.events.PointerAsMouseEventType = {
    MOUSEDOWN: e.events.PointerFallbackEventType.POINTERDOWN,
    MOUSEUP: e.events.PointerFallbackEventType.POINTERUP,
    MOUSECANCEL: e.events.PointerFallbackEventType.POINTERCANCEL,
    MOUSEMOVE: e.events.PointerFallbackEventType.POINTERMOVE,
    MOUSEOVER: e.events.PointerFallbackEventType.POINTEROVER,
    MOUSEOUT: e.events.PointerFallbackEventType.POINTEROUT,
    MOUSEENTER: e.events.PointerFallbackEventType.POINTERENTER,
    MOUSELEAVE: e.events.PointerFallbackEventType.POINTERLEAVE
  };
  e.events.MouseAsMouseEventType = {
    MOUSEDOWN: e.events.EventType.MOUSEDOWN,
    MOUSEUP: e.events.EventType.MOUSEUP,
    MOUSECANCEL: e.events.EventType.MOUSECANCEL,
    MOUSEMOVE: e.events.EventType.MOUSEMOVE,
    MOUSEOVER: e.events.EventType.MOUSEOVER,
    MOUSEOUT: e.events.EventType.MOUSEOUT,
    MOUSEENTER: e.events.EventType.MOUSEENTER,
    MOUSELEAVE: e.events.EventType.MOUSELEAVE
  };
  e.events.PointerAsTouchEventType = {
    TOUCHCANCEL: e.events.PointerTouchFallbackEventType.POINTERCANCEL,
    TOUCHEND: e.events.PointerTouchFallbackEventType.POINTERUP,
    TOUCHMOVE: e.events.PointerTouchFallbackEventType.POINTERMOVE,
    TOUCHSTART: e.events.PointerTouchFallbackEventType.POINTERDOWN
  };
  e.events.USE_LAYER_XY_AS_OFFSET_XY = !1;
  e.events.BrowserEvent = function (a, c) {
    e.events.Event.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.platformModifierKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.event_ = null;
    a && this.init(a, c);
  };
  e.inherits(e.events.BrowserEvent, e.events.Event);
  e.events.BrowserEvent.MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
  };
  e.events.BrowserEvent.PointerType = {
    MOUSE: "mouse",
    PEN: "pen",
    TOUCH: "touch"
  };
  e.events.BrowserEvent.IEButtonMap = e.debug.freeze([1, 4, 2]);
  e.events.BrowserEvent.IE_BUTTON_MAP = e.events.BrowserEvent.IEButtonMap;
  e.events.BrowserEvent.IE_POINTER_TYPE_MAP = e.debug.freeze({
    2: e.events.BrowserEvent.PointerType.TOUCH,
    3: e.events.BrowserEvent.PointerType.PEN,
    4: e.events.BrowserEvent.PointerType.MOUSE
  });
  e.events.BrowserEvent.prototype.init = function (a, c) {
    var d = this.type = a.type,
      f = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = c;
    (c = a.relatedTarget) ? e.userAgent.GECKO && (e.reflect.canAccessProperty(c, "nodeName") || (c = null)) : d == e.events.EventType.MOUSEOVER ? c = a.fromElement : d == e.events.EventType.MOUSEOUT && (c = a.toElement);
    this.relatedTarget = c;
    f ? (this.clientX = void 0 !== f.clientX ? f.clientX : f.pageX, this.clientY = void 0 !== f.clientY ? f.clientY : f.pageY, this.screenX = f.screenX || 0, this.screenY = f.screenY || 0) : (e.events.USE_LAYER_XY_AS_OFFSET_XY ? (this.offsetX = void 0 !== a.layerX ? a.layerX : a.offsetX, this.offsetY = void 0 !== a.layerY ? a.layerY : a.offsetY) : (this.offsetX = e.userAgent.WEBKIT || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = e.userAgent.WEBKIT || void 0 !== a.offsetY ? a.offsetY : a.layerY), this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.platformModifierKey = e.userAgent.MAC ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = e.events.BrowserEvent.getPointerType_(a);
    this.state = a.state;
    this.event_ = a;
    a.defaultPrevented && this.preventDefault();
  };
  e.events.BrowserEvent.prototype.isButton = function (a) {
    return e.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == a : "click" == this.type ? a == e.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & e.events.BrowserEvent.IE_BUTTON_MAP[a]);
  };
  e.events.BrowserEvent.prototype.isMouseActionButton = function () {
    return this.isButton(e.events.BrowserEvent.MouseButton.LEFT) && !(e.userAgent.WEBKIT && e.userAgent.MAC && this.ctrlKey);
  };
  e.events.BrowserEvent.prototype.stopPropagation = function () {
    e.events.BrowserEvent.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0;
  };
  e.events.BrowserEvent.prototype.preventDefault = function () {
    e.events.BrowserEvent.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, e.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (c) {}
  };
  e.events.BrowserEvent.prototype.getBrowserEvent = function () {
    return this.event_;
  };
  e.events.BrowserEvent.getPointerType_ = function (a) {
    return "string" === typeof a.pointerType ? a.pointerType : e.events.BrowserEvent.IE_POINTER_TYPE_MAP[a.pointerType] || "";
  };
  e.events.Listenable = function () {};
  e.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1E6 * Math.random() | 0);
  e.events.Listenable.addImplementation = function (a) {
    a.prototype[e.events.Listenable.IMPLEMENTED_BY_PROP] = !0;
  };
  e.events.Listenable.isImplementedBy = function (a) {
    return !(!a || !a[e.events.Listenable.IMPLEMENTED_BY_PROP]);
  };
  e.events.ListenableKey = function () {};
  e.events.ListenableKey.counter_ = 0;
  e.events.ListenableKey.reserveKey = function () {
    return ++e.events.ListenableKey.counter_;
  };
  e.events.Listener = function (a, c, d, f, g, h) {
    e.events.Listener.ENABLE_MONITORING && (this.creationStack = Error().stack);
    this.listener = a;
    this.proxy = c;
    this.src = d;
    this.type = f;
    this.capture = !!g;
    this.handler = h;
    this.key = e.events.ListenableKey.reserveKey();
    this.removed = this.callOnce = !1;
  };
  e.events.Listener.ENABLE_MONITORING = !1;
  e.events.Listener.prototype.markAsRemoved = function () {
    this.removed = !0;
    this.handler = this.src = this.proxy = this.listener = null;
  };
  e.events.ListenerMap = function (a) {
    this.src = a;
    this.listeners = {};
    this.typeCount_ = 0;
  };
  e.events.ListenerMap.prototype.getTypeCount = function () {
    return this.typeCount_;
  };
  e.events.ListenerMap.prototype.getListenerCount = function () {
    var a = 0,
      c;
    for (c in this.listeners) a += this.listeners[c].length;
    return a;
  };
  e.events.ListenerMap.prototype.add = function (a, c, d, f, g) {
    var h = a.toString();
    a = this.listeners[h];
    a || (a = this.listeners[h] = [], this.typeCount_++);
    var k = e.events.ListenerMap.findListenerIndex_(a, c, f, g);
    -1 < k ? (c = a[k], d || (c.callOnce = !1)) : (c = new e.events.Listener(c, null, this.src, h, !!f, g), c.callOnce = d, a.push(c));
    return c;
  };
  e.events.ListenerMap.prototype.remove = function (a, c, d, f) {
    a = a.toString();
    if (!(a in this.listeners)) return !1;
    var g = this.listeners[a];
    c = e.events.ListenerMap.findListenerIndex_(g, c, d, f);
    return -1 < c ? (g[c].markAsRemoved(), e.array.removeAt(g, c), 0 == g.length && (delete this.listeners[a], this.typeCount_--), !0) : !1;
  };
  e.events.ListenerMap.prototype.removeByKey = function (a) {
    var c = a.type;
    if (!(c in this.listeners)) return !1;
    var d = e.array.remove(this.listeners[c], a);
    d && (a.markAsRemoved(), 0 == this.listeners[c].length && (delete this.listeners[c], this.typeCount_--));
    return d;
  };
  e.events.ListenerMap.prototype.removeAll = function (a) {
    a = a && a.toString();
    var c = 0,
      d;
    for (d in this.listeners) if (!a || d == a) {
      for (var f = this.listeners[d], g = 0; g < f.length; g++) ++c, f[g].markAsRemoved();
      delete this.listeners[d];
      this.typeCount_--;
    }
    return c;
  };
  e.events.ListenerMap.prototype.getListeners = function (a, c) {
    a = this.listeners[a.toString()];
    var d = [];
    if (a) for (var f = 0; f < a.length; ++f) {
      var g = a[f];
      g.capture == c && d.push(g);
    }
    return d;
  };
  e.events.ListenerMap.prototype.getListener = function (a, c, d, f) {
    a = this.listeners[a.toString()];
    var g = -1;
    a && (g = e.events.ListenerMap.findListenerIndex_(a, c, d, f));
    return -1 < g ? a[g] : null;
  };
  e.events.ListenerMap.prototype.hasListener = function (a, c) {
    var d = void 0 !== a,
      f = d ? a.toString() : "",
      g = void 0 !== c;
    return e.object.some(this.listeners, function (a) {
      for (var h = 0; h < a.length; ++h) if (!(d && a[h].type != f || g && a[h].capture != c)) return !0;
      return !1;
    });
  };
  e.events.ListenerMap.findListenerIndex_ = function (a, c, d, f) {
    for (var g = 0; g < a.length; ++g) {
      var h = a[g];
      if (!h.removed && h.listener == c && h.capture == !!d && h.handler == f) return g;
    }
    return -1;
  };
  e.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1E6 * Math.random() | 0);
  e.events.onString_ = "on";
  e.events.onStringMap_ = {};
  e.events.CaptureSimulationMode = {
    OFF_AND_FAIL: 0,
    OFF_AND_SILENT: 1,
    ON: 2
  };
  e.events.CAPTURE_SIMULATION_MODE = 2;
  e.events.listenerCountEstimate_ = 0;
  e.events.listen = function (a, c, d, f, g) {
    if (f && f.once) return e.events.listenOnce(a, c, d, f, g);
    if (Array.isArray(c)) {
      for (var h = 0; h < c.length; h++) e.events.listen(a, c[h], d, f, g);
      return null;
    }
    d = e.events.wrapListener(d);
    return e.events.Listenable.isImplementedBy(a) ? (f = e.isObject(f) ? !!f.capture : !!f, a.listen(c, d, f, g)) : e.events.listen_(a, c, d, !1, f, g);
  };
  e.events.listen_ = function (a, c, d, f, g, h) {
    if (!c) throw Error("Invalid event type");
    var k = e.isObject(g) ? !!g.capture : !!g;
    if (k && !e.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
      if (e.events.CAPTURE_SIMULATION_MODE == e.events.CaptureSimulationMode.OFF_AND_FAIL) return e.asserts.fail("Can not register capture listener in IE8-."), null;
      if (e.events.CAPTURE_SIMULATION_MODE == e.events.CaptureSimulationMode.OFF_AND_SILENT) return null;
    }
    var m = e.events.getListenerMap_(a);
    m || (a[e.events.LISTENER_MAP_PROP_] = m = new e.events.ListenerMap(a));
    d = m.add(c, d, f, k, h);
    if (d.proxy) return d;
    f = e.events.getProxy();
    d.proxy = f;
    f.src = a;
    f.listener = d;
    if (a.addEventListener) e.events.BrowserFeature.PASSIVE_EVENTS || (g = k), void 0 === g && (g = !1), a.addEventListener(c.toString(), f, g);else if (a.attachEvent) a.attachEvent(e.events.getOnString_(c.toString()), f);else if (a.addListener && a.removeListener) e.asserts.assert("change" === c, "MediaQueryList only has a change event"), a.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");
    e.events.listenerCountEstimate_++;
    return d;
  };
  e.events.getProxy = function () {
    var a = e.events.handleBrowserEvent_,
      c = e.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function (d) {
        return a.call(c.src, c.listener, d);
      } : function (d) {
        d = a.call(c.src, c.listener, d);
        if (!d) return d;
      };
    return c;
  };
  e.events.listenOnce = function (a, c, d, f, g) {
    if (Array.isArray(c)) {
      for (var h = 0; h < c.length; h++) e.events.listenOnce(a, c[h], d, f, g);
      return null;
    }
    d = e.events.wrapListener(d);
    return e.events.Listenable.isImplementedBy(a) ? (f = e.isObject(f) ? !!f.capture : !!f, a.listenOnce(c, d, f, g)) : e.events.listen_(a, c, d, !0, f, g);
  };
  e.events.listenWithWrapper = function (a, c, d, f, g) {
    c.listen(a, d, f, g);
  };
  e.events.unlisten = function (a, c, d, f, g) {
    if (Array.isArray(c)) {
      for (var h = 0; h < c.length; h++) e.events.unlisten(a, c[h], d, f, g);
      return null;
    }
    f = e.isObject(f) ? !!f.capture : !!f;
    d = e.events.wrapListener(d);
    if (e.events.Listenable.isImplementedBy(a)) return a.unlisten(c, d, f, g);
    if (!a) return !1;
    if (a = e.events.getListenerMap_(a)) if (c = a.getListener(c, d, f, g)) return e.events.unlistenByKey(c);
    return !1;
  };
  e.events.unlistenByKey = function (a) {
    if ("number" === typeof a || !a || a.removed) return !1;
    var c = a.src;
    if (e.events.Listenable.isImplementedBy(c)) return c.unlistenByKey(a);
    var d = a.type,
      f = a.proxy;
    c.removeEventListener ? c.removeEventListener(d, f, a.capture) : c.detachEvent ? c.detachEvent(e.events.getOnString_(d), f) : c.addListener && c.removeListener && c.removeListener(f);
    e.events.listenerCountEstimate_--;
    (d = e.events.getListenerMap_(c)) ? (d.removeByKey(a), 0 == d.getTypeCount() && (d.src = null, c[e.events.LISTENER_MAP_PROP_] = null)) : a.markAsRemoved();
    return !0;
  };
  e.events.unlistenWithWrapper = function (a, c, d, f, g) {
    c.unlisten(a, d, f, g);
  };
  e.events.removeAll = function (a, c) {
    if (!a) return 0;
    if (e.events.Listenable.isImplementedBy(a)) return a.removeAllListeners(c);
    a = e.events.getListenerMap_(a);
    if (!a) return 0;
    var d = 0;
    c = c && c.toString();
    for (var f in a.listeners) if (!c || f == c) for (var g = a.listeners[f].concat(), h = 0; h < g.length; ++h) e.events.unlistenByKey(g[h]) && ++d;
    return d;
  };
  e.events.getListeners = function (a, c, d) {
    return e.events.Listenable.isImplementedBy(a) ? a.getListeners(c, d) : a ? (a = e.events.getListenerMap_(a)) ? a.getListeners(c, d) : [] : [];
  };
  e.events.getListener = function (a, c, d, f, g) {
    d = e.events.wrapListener(d);
    f = !!f;
    return e.events.Listenable.isImplementedBy(a) ? a.getListener(c, d, f, g) : a ? (a = e.events.getListenerMap_(a)) ? a.getListener(c, d, f, g) : null : null;
  };
  e.events.hasListener = function (a, c, d) {
    if (e.events.Listenable.isImplementedBy(a)) return a.hasListener(c, d);
    a = e.events.getListenerMap_(a);
    return !!a && a.hasListener(c, d);
  };
  e.events.expose = function (a) {
    var c = [],
      d;
    for (d in a) a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
    return c.join("\n");
  };
  e.events.getOnString_ = function (a) {
    return a in e.events.onStringMap_ ? e.events.onStringMap_[a] : e.events.onStringMap_[a] = e.events.onString_ + a;
  };
  e.events.fireListeners = function (a, c, d, f) {
    return e.events.Listenable.isImplementedBy(a) ? a.fireListeners(c, d, f) : e.events.fireListeners_(a, c, d, f);
  };
  e.events.fireListeners_ = function (a, c, d, f) {
    var g = !0;
    if (a = e.events.getListenerMap_(a)) if (c = a.listeners[c.toString()]) for (c = c.concat(), a = 0; a < c.length; a++) {
      var h = c[a];
      h && h.capture == d && !h.removed && (h = e.events.fireListener(h, f), g = g && !1 !== h);
    }
    return g;
  };
  e.events.fireListener = function (a, c) {
    var d = a.listener,
      f = a.handler || a.src;
    a.callOnce && e.events.unlistenByKey(a);
    return d.call(f, c);
  };
  e.events.getTotalListenerCount = function () {
    return e.events.listenerCountEstimate_;
  };
  e.events.dispatchEvent = function (a, c) {
    e.asserts.assert(e.events.Listenable.isImplementedBy(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
    return a.dispatchEvent(c);
  };
  e.events.protectBrowserEventEntryPoint = function (a) {
    e.events.handleBrowserEvent_ = a.protectEntryPoint(e.events.handleBrowserEvent_);
  };
  e.events.handleBrowserEvent_ = function (a, c) {
    if (a.removed) return !0;
    if (!e.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
      var d = c || e.getObjectByName("window.event");
      c = new e.events.BrowserEvent(d, this);
      var f = !0;
      if (e.events.CAPTURE_SIMULATION_MODE == e.events.CaptureSimulationMode.ON) {
        if (!e.events.isMarkedIeEvent_(d)) {
          e.events.markIeEvent_(d);
          d = [];
          for (var g = c.currentTarget; g; g = g.parentNode) d.push(g);
          a = a.type;
          for (g = d.length - 1; !c.hasPropagationStopped() && 0 <= g; g--) {
            c.currentTarget = d[g];
            var h = e.events.fireListeners_(d[g], a, !0, c);
            f = f && h;
          }
          for (g = 0; !c.hasPropagationStopped() && g < d.length; g++) c.currentTarget = d[g], h = e.events.fireListeners_(d[g], a, !1, c), f = f && h;
        }
      } else f = e.events.fireListener(a, c);
      return f;
    }
    return e.events.fireListener(a, new e.events.BrowserEvent(c, this));
  };
  e.events.markIeEvent_ = function (a) {
    var c = !1;
    if (0 == a.keyCode) try {
      a.keyCode = -1;
      return;
    } catch (d) {
      c = !0;
    }
    if (c || void 0 == a.returnValue) a.returnValue = !0;
  };
  e.events.isMarkedIeEvent_ = function (a) {
    return 0 > a.keyCode || void 0 != a.returnValue;
  };
  e.events.uniqueIdCounter_ = 0;
  e.events.getUniqueId = function (a) {
    return a + "_" + e.events.uniqueIdCounter_++;
  };
  e.events.getListenerMap_ = function (a) {
    a = a[e.events.LISTENER_MAP_PROP_];
    return a instanceof e.events.ListenerMap ? a : null;
  };
  e.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  e.events.wrapListener = function (a) {
    e.asserts.assert(a, "Listener can not be null.");
    if (e.isFunction(a)) return a;
    e.asserts.assert(a.handleEvent, "An object listener must have handleEvent method.");
    a[e.events.LISTENER_WRAPPER_PROP_] || (a[e.events.LISTENER_WRAPPER_PROP_] = function (c) {
      return a.handleEvent(c);
    });
    return a[e.events.LISTENER_WRAPPER_PROP_];
  };
  e.debug.entryPointRegistry.register(function (a) {
    e.events.handleBrowserEvent_ = a(e.events.handleBrowserEvent_);
  });
  e.events.EventTarget = function () {
    e.Disposable.call(this);
    this.eventTargetListeners_ = new e.events.ListenerMap(this);
    this.actualEventTarget_ = this;
    this.parentEventTarget_ = null;
  };
  e.inherits(e.events.EventTarget, e.Disposable);
  e.events.Listenable.addImplementation(e.events.EventTarget);
  e.events.EventTarget.MAX_ANCESTORS_ = 1E3;
  e.events.EventTarget.prototype.getParentEventTarget = function () {
    return this.parentEventTarget_;
  };
  e.events.EventTarget.prototype.setParentEventTarget = function (a) {
    this.parentEventTarget_ = a;
  };
  e.events.EventTarget.prototype.addEventListener = function (a, c, d, f) {
    e.events.listen(this, a, c, d, f);
  };
  e.events.EventTarget.prototype.removeEventListener = function (a, c, d, f) {
    e.events.unlisten(this, a, c, d, f);
  };
  e.events.EventTarget.prototype.dispatchEvent = function (a) {
    this.assertInitialized_();
    var c = this.getParentEventTarget();
    if (c) {
      var d = [];
      for (var f = 1; c; c = c.getParentEventTarget()) d.push(c), e.asserts.assert(++f < e.events.EventTarget.MAX_ANCESTORS_, "infinite loop");
    }
    return e.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, a, d);
  };
  e.events.EventTarget.prototype.disposeInternal = function () {
    e.events.EventTarget.superClass_.disposeInternal.call(this);
    this.removeAllListeners();
    this.parentEventTarget_ = null;
  };
  e.events.EventTarget.prototype.listen = function (a, c, d, f) {
    this.assertInitialized_();
    return this.eventTargetListeners_.add(String(a), c, !1, d, f);
  };
  e.events.EventTarget.prototype.listenOnce = function (a, c, d, f) {
    return this.eventTargetListeners_.add(String(a), c, !0, d, f);
  };
  e.events.EventTarget.prototype.unlisten = function (a, c, d, f) {
    return this.eventTargetListeners_.remove(String(a), c, d, f);
  };
  e.events.EventTarget.prototype.unlistenByKey = function (a) {
    return this.eventTargetListeners_.removeByKey(a);
  };
  e.events.EventTarget.prototype.removeAllListeners = function (a) {
    return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll(a) : 0;
  };
  e.events.EventTarget.prototype.fireListeners = function (a, c, d) {
    a = this.eventTargetListeners_.listeners[String(a)];
    if (!a) return !0;
    a = a.concat();
    for (var f = !0, g = 0; g < a.length; ++g) {
      var h = a[g];
      if (h && !h.removed && h.capture == c) {
        var k = h.listener,
          m = h.handler || h.src;
        h.callOnce && this.unlistenByKey(h);
        f = !1 !== k.call(m, d) && f;
      }
    }
    return f && !d.defaultPrevented;
  };
  e.events.EventTarget.prototype.getListeners = function (a, c) {
    return this.eventTargetListeners_.getListeners(String(a), c);
  };
  e.events.EventTarget.prototype.getListener = function (a, c, d, f) {
    return this.eventTargetListeners_.getListener(String(a), c, d, f);
  };
  e.events.EventTarget.prototype.hasListener = function (a, c) {
    return this.eventTargetListeners_.hasListener(void 0 !== a ? String(a) : void 0, c);
  };
  e.events.EventTarget.prototype.setTargetForTesting = function (a) {
    this.actualEventTarget_ = a;
  };
  e.events.EventTarget.prototype.assertInitialized_ = function () {
    e.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
  };
  e.events.EventTarget.dispatchEventInternal_ = function (a, c, d) {
    var f = c.type || c;
    if ("string" === typeof c) c = new e.events.Event(c, a);else if (c instanceof e.events.Event) c.target = c.target || a;else {
      var g = c;
      c = new e.events.Event(f, a);
      e.object.extend(c, g);
    }
    g = !0;
    if (d) for (var h = d.length - 1; !c.hasPropagationStopped() && 0 <= h; h--) {
      var k = c.currentTarget = d[h];
      g = k.fireListeners(f, !0, c) && g;
    }
    c.hasPropagationStopped() || (k = c.currentTarget = a, g = k.fireListeners(f, !0, c) && g, c.hasPropagationStopped() || (g = k.fireListeners(f, !1, c) && g));
    if (d) for (h = 0; !c.hasPropagationStopped() && h < d.length; h++) k = c.currentTarget = d[h], g = k.fireListeners(f, !1, c) && g;
    return g;
  };
  e.Timer = function (a, c) {
    e.events.EventTarget.call(this);
    this.interval_ = a || 1;
    this.timerObject_ = c || e.Timer.defaultTimerObject;
    this.boundTick_ = e.bind(this.tick_, this);
    this.last_ = e.now();
  };
  e.inherits(e.Timer, e.events.EventTarget);
  e.Timer.MAX_TIMEOUT_ = 2147483647;
  e.Timer.INVALID_TIMEOUT_ID_ = -1;
  e.Timer.prototype.enabled = !1;
  e.Timer.defaultTimerObject = e.global;
  e.Timer.intervalScale = .8;
  e.Timer.prototype.timer_ = null;
  e.Timer.prototype.getInterval = function () {
    return this.interval_;
  };
  e.Timer.prototype.setInterval = function (a) {
    this.interval_ = a;
    this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop();
  };
  e.Timer.prototype.tick_ = function () {
    if (this.enabled) {
      var a = e.now() - this.last_;
      0 < a && a < this.interval_ * e.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.stop(), this.start()));
    }
  };
  e.Timer.prototype.dispatchTick = function () {
    this.dispatchEvent(e.Timer.TICK);
  };
  e.Timer.prototype.start = function () {
    this.enabled = !0;
    this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = e.now());
  };
  e.Timer.prototype.stop = function () {
    this.enabled = !1;
    this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null);
  };
  e.Timer.prototype.disposeInternal = function () {
    e.Timer.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.timerObject_;
  };
  e.Timer.TICK = "tick";
  e.Timer.callOnce = function (a, c, d) {
    if (e.isFunction(a)) d && (a = e.bind(a, d));else if (a && "function" == typeof a.handleEvent) a = e.bind(a.handleEvent, a);else throw Error("Invalid listener argument");
    return Number(c) > e.Timer.MAX_TIMEOUT_ ? e.Timer.INVALID_TIMEOUT_ID_ : e.Timer.defaultTimerObject.setTimeout(a, c || 0);
  };
  e.Timer.clear = function (a) {
    e.Timer.defaultTimerObject.clearTimeout(a);
  };
  e.Timer.promise = function (a, c) {
    var d = null;
    return new e.Promise(function (f, g) {
      d = e.Timer.callOnce(function () {
        f(c);
      }, a);
      d == e.Timer.INVALID_TIMEOUT_ID_ && g(Error("Failed to schedule timer."));
    }).thenCatch(function (a) {
      e.Timer.clear(d);
      throw a;
    });
  };
  A.Trashcan = function (a) {
    this.workspace_ = a;
  };
  A.Trashcan.prototype.SPRITE_URL_ = "media/sprites.png";
  A.Trashcan.prototype.LID_URL_ = "media/trashlid.png";
  A.Trashcan.prototype.WIDTH_ = 47;
  A.Trashcan.prototype.BODY_HEIGHT_ = 45;
  A.Trashcan.prototype.LID_HEIGHT_ = 15;
  A.Trashcan.prototype.MARGIN_BOTTOM_ = 35;
  A.Trashcan.prototype.MARGIN_SIDE_ = 35;
  A.Trashcan.prototype.MARGIN_HOTSPOT_ = 25;
  A.Trashcan.prototype.isOpen = !1;
  A.Trashcan.prototype.svgGroup_ = null;
  A.Trashcan.prototype.svgLid_ = null;
  A.Trashcan.prototype.lidTask_ = 0;
  A.Trashcan.prototype.lidAngle_ = 0;
  A.Trashcan.prototype.left_ = 0;
  A.Trashcan.prototype.top_ = 0;
  A.Trashcan.prototype.createDom = function () {
    this.svgGroup_ = A.createSvgElement("g", {
      filter: "url(#blocklyTrashcanShadowFilter)"
    }, null);
    var a = A.createSvgElement("clipPath", {
      id: "blocklyTrashBodyClipPath"
    }, this.svgGroup_);
    A.createSvgElement("rect", {
      width: this.WIDTH_,
      height: this.BODY_HEIGHT_,
      y: this.LID_HEIGHT_
    }, a);
    A.createSvgElement("image", {
      width: A.SPRITE.width,
      height: A.SPRITE.height,
      y: -32,
      "clip-path": "url(#blocklyTrashBodyClipPath)"
    }, this.svgGroup_).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", A.pathToBlockly + A.SPRITE.url);
    a = A.createSvgElement("clipPath", {
      id: "blocklyTrashLidClipPath"
    }, this.svgGroup_);
    A.createSvgElement("rect", {
      width: this.WIDTH_,
      height: this.LID_HEIGHT_
    }, a);
    this.svgLid_ = A.createSvgElement("image", {
      width: A.SPRITE.width,
      height: A.SPRITE.height,
      y: -32,
      "clip-path": "url(#blocklyTrashLidClipPath)"
    }, this.svgGroup_);
    this.svgLid_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", A.pathToBlockly + A.SPRITE.url);
    return this.svgGroup_;
  };
  A.Trashcan.prototype.init = function () {
    this.setOpen_(!1);
    this.position_();
    A.bindEvent_(window, "resize", this, this.position_);
  };
  A.Trashcan.prototype.dispose = function () {
    this.svgGroup_ && (e.dom.removeNode(this.svgGroup_), this.svgGroup_ = null);
    this.workspace_ = this.svgLid_ = null;
    e.Timer.clear(this.lidTask_);
  };
  A.Trashcan.prototype.position_ = function () {
    var a = this.workspace_.getMetrics();
    a && (this.left_ = A.RTL ? this.MARGIN_SIDE_ : a.viewWidth + a.absoluteLeft - this.WIDTH_ - this.MARGIN_SIDE_, this.top_ = a.viewHeight + a.absoluteTop - (this.BODY_HEIGHT_ + this.LID_HEIGHT_) - this.MARGIN_BOTTOM_, this.svgGroup_.setAttribute("transform", "translate(" + this.left_ + "," + this.top_ + ")"));
  };
  A.Trashcan.prototype.onMouseMove = function (a) {
    if (this.svgGroup_) {
      a = A.mouseToSvg(a);
      var c = A.getSvgXY_(this.svgGroup_);
      a = a.x > c.x - this.MARGIN_HOTSPOT_ && a.x < c.x + this.WIDTH_ + this.MARGIN_HOTSPOT_ && a.y > c.y - this.MARGIN_HOTSPOT_ && a.y < c.y + this.BODY_HEIGHT_ + this.LID_HEIGHT_ + this.MARGIN_HOTSPOT_;
      this.isOpen != a && this.setOpen_(a);
    }
  };
  A.Trashcan.prototype.setOpen_ = function (a) {
    this.isOpen != a && (e.Timer.clear(this.lidTask_), this.isOpen = a, this.animateLid_());
  };
  A.Trashcan.prototype.animateLid_ = function () {
    this.lidAngle_ += this.isOpen ? 10 : -10;
    this.lidAngle_ = Math.max(0, this.lidAngle_);
    this.svgLid_.setAttribute("transform", "rotate(" + (A.RTL ? -this.lidAngle_ : this.lidAngle_) + ", " + (A.RTL ? 4 : this.WIDTH_ - 4) + ", " + (this.LID_HEIGHT_ - 2) + ")");
    if (this.isOpen ? 45 > this.lidAngle_ : 0 < this.lidAngle_) this.lidTask_ = e.Timer.callOnce(this.animateLid_, 5, this);
  };
  A.Trashcan.prototype.close = function () {
    this.setOpen_(!1);
  };
  A.Xml = {};
  A.Xml.workspaceToDom = function (a) {
    if (A.RTL) var c = a.getMetrics().viewWidth;
    var d = e.dom.createDom("xml");
    a = a.getTopBlocks(!0);
    for (var f = 0, g; g = a[f]; f++) {
      var h = A.Xml.blockToDom_(g);
      g = g.getRelativeToSurfaceXY();
      h.setAttribute("x", A.RTL ? c - g.x : g.x);
      h.setAttribute("y", g.y);
      d.appendChild(h);
    }
    return d;
  };
  A.Xml.blockToDom_ = function (a) {
    var c = e.dom.createDom("block");
    c.setAttribute("type", a.type);
    c.setAttribute("id", a.id);
    if (a.mutationToDom) {
      var d = a.mutationToDom();
      d && c.appendChild(d);
    }
    for (var f = 0; d = a.inputList[f]; f++) for (var g = 0, h; h = d.fieldRow[g]; g++) if (h.name && h.EDITABLE) {
      var k = e.dom.createDom("field", null, h.getValue());
      k.setAttribute("name", h.name);
      c.appendChild(k);
    }
    a.comment && (d = e.dom.createDom("comment", null, a.comment.getText()), d.setAttribute("pinned", a.comment.isVisible()), f = a.comment.getBubbleSize(), d.setAttribute("h", f.height), d.setAttribute("w", f.width), c.appendChild(d));
    f = !1;
    for (g = 0; d = a.inputList[g]; g++) if (h = !0, d.type != A.DUMMY_INPUT) {
      k = d.connection.targetBlock();
      if (d.type == A.INPUT_VALUE) {
        var m = e.dom.createDom("value");
        f = !0;
      } else d.type == A.NEXT_STATEMENT && (m = e.dom.createDom("statement"));
      k && (m.appendChild(A.Xml.blockToDom_(k)), h = !1);
      m.setAttribute("name", d.name);
      h || c.appendChild(m);
    }
    f && c.setAttribute("inline", a.inputsInline);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.isDeletable() || c.setAttribute("deletable", !1);
    a.isMovable() || c.setAttribute("movable", !1);
    a.isEditable() || c.setAttribute("editable", !1);
    if (a = a.getNextBlock()) m = e.dom.createDom("next", null, A.Xml.blockToDom_(a)), c.appendChild(m);
    return c;
  };
  A.Xml.domToText = function (a) {
    return new XMLSerializer().serializeToString(a);
  };
  A.Xml.domToPrettyText = function (a) {
    a = A.Xml.domToText(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
      var f = a[d];
      "/" == f[0] && (c = c.substring(2));
      a[d] = c + "<" + f;
      "/" != f[0] && "/>" != f.slice(-2) && (c += "  ");
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "");
  };
  A.Xml.textToDom = function (a) {
    a = new DOMParser().parseFromString(a, "text/xml");
    if (!a || !a.firstChild || "xml" != a.firstChild.nodeName.toLowerCase() || a.firstChild !== a.lastChild) throw "Blockly.Xml.textToDom did not obtain a valid XML tree.";
    return a.firstChild;
  };
  A.Xml.domToWorkspace = function (a, c) {
    if (A.RTL) var d = a.getMetrics().viewWidth;
    for (var f = 0, g; g = c.childNodes[f]; f++) if ("block" == g.nodeName.toLowerCase()) {
      var h = A.Xml.domToBlock(a, g),
        k = parseInt(g.getAttribute("x"), 10);
      g = parseInt(g.getAttribute("y"), 10);
      isNaN(k) || isNaN(g) || h.moveBy(A.RTL ? d - k : k, g);
    }
  };
  A.Xml.domToBlock = function (a, c, d) {
    var f = null,
      g = c.getAttribute("type");
    if (!g) throw "Block type unspecified: \n" + c.outerHTML;
    var h = c.getAttribute("id");
    if (d && h) {
      f = A.Block.getById(h, a);
      if (!f) throw "Couldn't get Block with id: " + h;
      h = f.getParent();
      f.workspace && f.dispose(!0, !1, !0);
      f.fill(a, g);
      f.parent_ = h;
    } else f = A.Block.obtain(a, g);
    f.svg_ || f.initSvg();
    (h = c.getAttribute("inline")) && f.setInputsInline("true" == h);
    (h = c.getAttribute("disabled")) && f.setDisabled("true" == h);
    (h = c.getAttribute("deletable")) && f.setDeletable("true" == h);
    (h = c.getAttribute("movable")) && f.setMovable("true" == h);
    (h = c.getAttribute("editable")) && f.setEditable("true" == h);
    var k = null;
    h = 0;
    for (var m; m = c.childNodes[h]; h++) if (3 != m.nodeType || !m.data.match(/^\s*$/)) {
      k = null;
      for (var n = 0, p; p = m.childNodes[n]; n++) 3 == p.nodeType && p.data.match(/^\s*$/) || (k = p);
      n = m.getAttribute("name");
      switch (m.nodeName.toLowerCase()) {
        case "mutation":
          f.domToMutation && f.domToMutation(m);
          break;
        case "comment":
          f.setCommentText(m.textContent);
          var r = m.getAttribute("pinned");
          r && setTimeout(function () {
            f.comment.setVisible("true" == r);
          }, 1);
          k = parseInt(m.getAttribute("w"), 10);
          m = parseInt(m.getAttribute("h"), 10);
          isNaN(k) || isNaN(m) || f.comment.setBubbleSize(k, m);
          break;
        case "title":
        case "field":
          f.setFieldValue(m.textContent, n);
          break;
        case "value":
        case "statement":
          m = f.getInput(n);
          if (!m) throw "Input " + n + " does not exist in block " + g;
          if (k && "block" == k.nodeName.toLowerCase()) if (k = A.Xml.domToBlock(a, k, d), k.outputConnection) m.connection.connect(k.outputConnection);else if (k.previousConnection) m.connection.connect(k.previousConnection);else throw "Child block does not have output or previous statement.";
          break;
        case "next":
          if (k && "block" == k.nodeName.toLowerCase()) {
            if (!f.nextConnection) throw "Next statement does not exist.";
            if (f.nextConnection.targetConnection) throw "Next statement is already connected.";
            k = A.Xml.domToBlock(a, k, d);
            if (!k.previousConnection) throw "Next block does not have previous statement.";
            f.nextConnection.connect(k.previousConnection);
          }
          break;
        case "clone":
          k && "block" == k.nodeName.toLowerCase() && f.setCloneBlock(k);
      }
    }
    (a = c.getAttribute("collapsed")) && f.setCollapsed("true" == a);
    (a = f.getNextBlock()) ? a.render() : f.render();
    return f;
  };
  A.Xml.deleteNext = function (a) {
    for (var c = 0, d; d = a.childNodes[c]; c++) if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
  };
  window.Blockly || (window.Blockly = {});
  window.Blockly.Xml || (window.Blockly.Xml = {});
  window.Blockly.Xml.domToText = A.Xml.domToText;
  window.Blockly.Xml.domToWorkspace = A.Xml.domToWorkspace;
  window.Blockly.Xml.textToDom = A.Xml.textToDom;
  window.Blockly.Xml.workspaceToDom = A.Xml.workspaceToDom;
  A.Workspace = function (a, c) {
    this.getMetrics = a;
    this.setMetrics = c;
    this.isFlyout = !1;
    this.topBlocks_ = [];
    this.maxBlocks = Infinity;
    A.ConnectionDB.init(this);
  };
  A.Workspace.SCAN_ANGLE = 3;
  A.Workspace.prototype.dragMode = !1;
  A.Workspace.prototype.scrollX = 0;
  A.Workspace.prototype.scrollY = 0;
  A.Workspace.prototype.trashcan = null;
  A.Workspace.prototype.fireChangeEventPid_ = null;
  A.Workspace.prototype.scrollbar = null;
  A.Workspace.prototype.createDom = function () {
    this.svgGroup_ = A.createSvgElement("g", {}, null);
    this.svgBlockCanvas_ = A.createSvgElement("g", {}, this.svgGroup_);
    this.svgBubbleCanvas_ = A.createSvgElement("g", {}, this.svgGroup_);
    this.fireChangeEvent();
    return this.svgGroup_;
  };
  A.Workspace.prototype.dispose = function () {
    this.svgGroup_ && (e.dom.removeNode(this.svgGroup_), this.svgGroup_ = null);
    this.svgBubbleCanvas_ = this.svgBlockCanvas_ = null;
    this.trashcan && (this.trashcan.dispose(), this.trashcan = null);
  };
  A.Workspace.prototype.addTrashcan = function () {
    if (A.hasTrashcan && !A.readOnly) {
      this.trashcan = new A.Trashcan(this);
      var a = this.trashcan.createDom();
      this.svgGroup_.insertBefore(a, this.svgBlockCanvas_);
      this.trashcan.init();
    }
  };
  A.Workspace.prototype.getCanvas = function () {
    return this.svgBlockCanvas_;
  };
  A.Workspace.prototype.getBubbleCanvas = function () {
    return this.svgBubbleCanvas_;
  };
  A.Workspace.prototype.addTopBlock = function (a) {
    this.topBlocks_.push(a);
    A.Realtime.isEnabled() && this == A.mainWorkspace && A.Realtime.addTopBlock(a);
    this.fireChangeEvent();
  };
  A.Workspace.prototype.removeTopBlock = function (a) {
    for (var c = !1, d, f = 0; d = this.topBlocks_[f]; f++) if (d == a) {
      this.topBlocks_.splice(f, 1);
      c = !0;
      break;
    }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
    A.Realtime.isEnabled() && this == A.mainWorkspace && A.Realtime.removeTopBlock(a);
    this.fireChangeEvent();
  };
  A.Workspace.prototype.getTopBlocks = function (a) {
    var c = [].concat(this.topBlocks_);
    if (a && 1 < c.length) {
      var d = Math.sin(A.Workspace.SCAN_ANGLE / 180 * Math.PI);
      A.RTL && (d *= -1);
      c.sort(function (a, c) {
        a = a.getRelativeToSurfaceXY();
        c = c.getRelativeToSurfaceXY();
        return a.y + d * a.x - (c.y + d * c.x);
      });
    }
    return c;
  };
  A.Workspace.prototype.getAllBlocks = function () {
    for (var a = this.getTopBlocks(!1), c = 0; c < a.length; c++) a.push.apply(a, a[c].getChildren());
    return a;
  };
  A.Workspace.prototype.clear = function () {
    for (A.hideChaff(); this.topBlocks_.length;) this.topBlocks_[0].dispose();
  };
  A.Workspace.prototype.render = function () {
    for (var a = this.getAllBlocks(), c = 0, d; d = a[c]; c++) d.getChildren().length || d.render();
  };
  A.Workspace.prototype.getBlockById = function (a) {
    for (var c = this.getAllBlocks(), d = 0, f; f = c[d]; d++) if (f.id == a) return f;
    return null;
  };
  A.Workspace.prototype.traceOn = function (a) {
    this.traceOn_ = a;
    this.traceWrapper_ && (A.unbindEvent_(this.traceWrapper_), this.traceWrapper_ = null);
    a && (this.traceWrapper_ = A.bindEvent_(this.svgBlockCanvas_, "blocklySelectChange", this, function () {
      this.traceOn_ = !1;
    }));
  };
  A.Workspace.prototype.highlightBlock = function (a) {
    this.traceOn_ && 0 != A.Block.dragMode_ && this.traceOn(!1);
    if (this.traceOn_) {
      var c = null;
      if (a && (c = this.getBlockById(a), !c)) return;
      this.traceOn(!1);
      c ? c.select() : A.selected && A.selected.unselect();
      var d = this;
      setTimeout(function () {
        d.traceOn(!0);
      }, 1);
    }
  };
  A.Workspace.prototype.fireChangeEvent = function () {
    this.fireChangeEventPid_ && window.clearTimeout(this.fireChangeEventPid_);
    var a = this.svgBlockCanvas_;
    a && (this.fireChangeEventPid_ = window.setTimeout(function () {
      A.fireUiEvent(a, "blocklyWorkspaceChange");
    }, 0));
  };
  A.Workspace.prototype.paste = function (a) {
    if (!(a.getElementsByTagName("block").length >= this.remainingCapacity())) {
      var c = A.Xml.domToBlock(this, a),
        d = parseInt(a.getAttribute("x"), 10);
      a = parseInt(a.getAttribute("y"), 10);
      if (!isNaN(d) && !isNaN(a)) {
        A.RTL && (d = -d);
        do for (var f = !1, g = this.getAllBlocks(), h = 0, k; k = g[h]; h++) k = k.getRelativeToSurfaceXY(), 1 >= Math.abs(d - k.x) && 1 >= Math.abs(a - k.y) && (d = A.RTL ? d - A.SNAP_RADIUS : d + A.SNAP_RADIUS, a += 2 * A.SNAP_RADIUS, f = !0); while (f);
        c.moveBy(d, a);
      }
      c.select();
    }
  };
  A.Workspace.prototype.remainingCapacity = function () {
    return Infinity == this.maxBlocks ? Infinity : this.maxBlocks - this.getAllBlocks().length;
  };
  A.Workspace.prototype.clear = A.Workspace.prototype.clear;
  A.Bubble = function (a, c, d, f, g, h, k) {
    var m = A.Bubble.ARROW_ANGLE;
    A.RTL && (m = -m);
    this.arrow_radians_ = m / 360 * Math.PI * 2;
    this.workspace_ = a;
    this.content_ = c;
    this.shape_ = d;
    a.getBubbleCanvas().appendChild(this.createDom_(c, !(!h || !k)));
    this.setAnchorLocation(f, g);
    h && k || (a = this.content_.getBBox(), h = a.width + 2 * A.Bubble.BORDER_WIDTH, k = a.height + 2 * A.Bubble.BORDER_WIDTH);
    this.setBubbleSize(h, k);
    this.positionBubble_();
    this.renderArrow_();
    this.rendered_ = !0;
    A.readOnly || (A.bindEvent_(this.bubbleBack_, "mousedown", this, this.bubbleMouseDown_), this.resizeGroup_ && A.bindEvent_(this.resizeGroup_, "mousedown", this, this.resizeMouseDown_));
  };
  A.Bubble.BORDER_WIDTH = 6;
  A.Bubble.ARROW_THICKNESS = 10;
  A.Bubble.ARROW_ANGLE = 20;
  A.Bubble.ARROW_BEND = 4;
  A.Bubble.ANCHOR_RADIUS = 8;
  A.Bubble.onMouseUpWrapper_ = null;
  A.Bubble.onMouseMoveWrapper_ = null;
  A.Bubble.unbindDragEvents_ = function () {
    A.Bubble.onMouseUpWrapper_ && (A.unbindEvent_(A.Bubble.onMouseUpWrapper_), A.Bubble.onMouseUpWrapper_ = null);
    A.Bubble.onMouseMoveWrapper_ && (A.unbindEvent_(A.Bubble.onMouseMoveWrapper_), A.Bubble.onMouseMoveWrapper_ = null);
  };
  A.Bubble.prototype.rendered_ = !1;
  A.Bubble.prototype.anchorX_ = 0;
  A.Bubble.prototype.anchorY_ = 0;
  A.Bubble.prototype.relativeLeft_ = 0;
  A.Bubble.prototype.relativeTop_ = 0;
  A.Bubble.prototype.width_ = 0;
  A.Bubble.prototype.height_ = 0;
  A.Bubble.prototype.autoLayout_ = !0;
  A.Bubble.prototype.createDom_ = function (a, c) {
    this.bubbleGroup_ = A.createSvgElement("g", {}, null);
    var d = A.createSvgElement("g", {
      filter: "url(#blocklyEmboss)"
    }, this.bubbleGroup_);
    this.bubbleArrow_ = A.createSvgElement("path", {}, d);
    this.bubbleBack_ = A.createSvgElement("rect", {
      "class": "blocklyDraggable",
      x: 0,
      y: 0,
      rx: A.Bubble.BORDER_WIDTH,
      ry: A.Bubble.BORDER_WIDTH
    }, d);
    c ? (this.resizeGroup_ = A.createSvgElement("g", {
      "class": A.RTL ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.bubbleGroup_), c = 2 * A.Bubble.BORDER_WIDTH, A.createSvgElement("polygon", {
      points: "0,x x,x x,0".replace(/x/g, c.toString())
    }, this.resizeGroup_), A.createSvgElement("line", {
      "class": "blocklyResizeLine",
      x1: c / 3,
      y1: c - 1,
      x2: c - 1,
      y2: c / 3
    }, this.resizeGroup_), A.createSvgElement("line", {
      "class": "blocklyResizeLine",
      x1: 2 * c / 3,
      y1: c - 1,
      x2: c - 1,
      y2: 2 * c / 3
    }, this.resizeGroup_)) : this.resizeGroup_ = null;
    this.bubbleGroup_.appendChild(a);
    return this.bubbleGroup_;
  };
  A.Bubble.prototype.bubbleMouseDown_ = function (a) {
    this.promote_();
    A.Bubble.unbindDragEvents_();
    A.isRightButton(a) || A.isTargetInput_(a) || (A.setCursorHand_(!0), this.dragDeltaX = A.RTL ? this.relativeLeft_ + a.clientX : this.relativeLeft_ - a.clientX, this.dragDeltaY = this.relativeTop_ - a.clientY, A.Bubble.onMouseUpWrapper_ = A.bindEvent_(document, "mouseup", this, A.Bubble.unbindDragEvents_), A.Bubble.onMouseMoveWrapper_ = A.bindEvent_(document, "mousemove", this, this.bubbleMouseMove_), A.hideChaff(), a.stopPropagation());
  };
  A.Bubble.prototype.bubbleMouseMove_ = function (a) {
    this.autoLayout_ = !1;
    this.relativeLeft_ = A.RTL ? this.dragDeltaX - a.clientX : this.dragDeltaX + a.clientX;
    this.relativeTop_ = this.dragDeltaY + a.clientY;
    this.positionBubble_();
    this.renderArrow_();
  };
  A.Bubble.prototype.resizeMouseDown_ = function (a) {
    this.promote_();
    A.Bubble.unbindDragEvents_();
    A.isRightButton(a) || (A.setCursorHand_(!0), this.resizeDeltaWidth = A.RTL ? this.width_ + a.clientX : this.width_ - a.clientX, this.resizeDeltaHeight = this.height_ - a.clientY, A.Bubble.onMouseUpWrapper_ = A.bindEvent_(document, "mouseup", this, A.Bubble.unbindDragEvents_), A.Bubble.onMouseMoveWrapper_ = A.bindEvent_(document, "mousemove", this, this.resizeMouseMove_), A.hideChaff(), a.stopPropagation());
  };
  A.Bubble.prototype.resizeMouseMove_ = function (a) {
    this.autoLayout_ = !1;
    var c = this.resizeDeltaWidth,
      d = this.resizeDeltaHeight + a.clientY;
    c = A.RTL ? c - a.clientX : c + a.clientX;
    this.setBubbleSize(c, d);
    A.RTL && this.positionBubble_();
  };
  A.Bubble.prototype.registerResizeEvent = function (a, c) {
    A.bindEvent_(this.bubbleGroup_, "resize", a, c);
  };
  A.Bubble.prototype.promote_ = function () {
    this.bubbleGroup_.parentNode.appendChild(this.bubbleGroup_);
  };
  A.Bubble.prototype.setAnchorLocation = function (a, c) {
    this.anchorX_ = a;
    this.anchorY_ = c;
    this.rendered_ && this.positionBubble_();
  };
  A.Bubble.prototype.layoutBubble_ = function () {
    var a = -this.width_ / 4,
      c = -this.height_ - A.BlockSvg.MIN_BLOCK_Y,
      d = this.workspace_.getMetrics();
    A.RTL ? this.anchorX_ - d.viewLeft - a - this.width_ < A.Scrollbar.scrollbarThickness ? a = this.anchorX_ - d.viewLeft - this.width_ - A.Scrollbar.scrollbarThickness : this.anchorX_ - d.viewLeft - a > d.viewWidth && (a = this.anchorX_ - d.viewLeft - d.viewWidth) : this.anchorX_ + a < d.viewLeft ? a = d.viewLeft - this.anchorX_ : d.viewLeft + d.viewWidth < this.anchorX_ + a + this.width_ + A.BlockSvg.SEP_SPACE_X + A.Scrollbar.scrollbarThickness && (a = d.viewLeft + d.viewWidth - this.anchorX_ - this.width_ - A.Scrollbar.scrollbarThickness);
    this.anchorY_ + c < d.viewTop && (c = this.shape_.getBBox().height);
    this.relativeLeft_ = a;
    this.relativeTop_ = c;
  };
  A.Bubble.prototype.positionBubble_ = function () {
    this.bubbleGroup_.setAttribute("transform", "translate(" + (A.RTL ? this.anchorX_ - this.relativeLeft_ - this.width_ : this.anchorX_ + this.relativeLeft_) + ", " + (this.relativeTop_ + this.anchorY_) + ")");
  };
  A.Bubble.prototype.getBubbleSize = function () {
    return {
      width: this.width_,
      height: this.height_
    };
  };
  A.Bubble.prototype.setBubbleSize = function (a, c) {
    var d = 2 * A.Bubble.BORDER_WIDTH;
    a = Math.max(a, d + 45);
    c = Math.max(c, d + A.BlockSvg.FIELD_HEIGHT);
    this.width_ = a;
    this.height_ = c;
    this.bubbleBack_.setAttribute("width", a);
    this.bubbleBack_.setAttribute("height", c);
    this.resizeGroup_ && (A.RTL ? this.resizeGroup_.setAttribute("transform", "translate(" + 2 * A.Bubble.BORDER_WIDTH + ", " + (c - d) + ") scale(-1 1)") : this.resizeGroup_.setAttribute("transform", "translate(" + (a - d) + ", " + (c - d) + ")"));
    this.rendered_ && (this.autoLayout_ && this.layoutBubble_(), this.positionBubble_(), this.renderArrow_());
    A.fireUiEvent(this.bubbleGroup_, "resize");
  };
  A.Bubble.prototype.renderArrow_ = function () {
    var a = [],
      c = this.width_ / 2,
      d = this.height_ / 2,
      f = -this.relativeLeft_,
      g = -this.relativeTop_;
    if (c == f && d == g) a.push("M " + c + "," + d);else {
      g -= d;
      f -= c;
      A.RTL && (f *= -1);
      var h = Math.sqrt(g * g + f * f),
        k = Math.acos(f / h);
      0 > g && (k = 2 * Math.PI - k);
      var m = k + Math.PI / 2;
      m > 2 * Math.PI && (m -= 2 * Math.PI);
      var n = Math.sin(m),
        p = Math.cos(m),
        r = this.getBubbleSize();
      m = (r.width + r.height) / A.Bubble.ARROW_THICKNESS;
      m = Math.min(m, r.width, r.height) / 2;
      r = 1 - A.Bubble.ANCHOR_RADIUS / h;
      f = c + r * f;
      g = d + r * g;
      r = c + m * p;
      var q = d + m * n;
      c -= m * p;
      d -= m * n;
      n = k + this.arrow_radians_;
      n > 2 * Math.PI && (n -= 2 * Math.PI);
      k = Math.sin(n) * h / A.Bubble.ARROW_BEND;
      h = Math.cos(n) * h / A.Bubble.ARROW_BEND;
      a.push("M" + r + "," + q);
      a.push("C" + (r + h) + "," + (q + k) + " " + f + "," + g + " " + f + "," + g);
      a.push("C" + f + "," + g + " " + (c + h) + "," + (d + k) + " " + c + "," + d);
    }
    a.push("z");
    this.bubbleArrow_.setAttribute("d", a.join(" "));
  };
  A.Bubble.prototype.setColour = function (a) {
    this.bubbleBack_.setAttribute("fill", a);
    this.bubbleArrow_.setAttribute("fill", a);
  };
  A.Bubble.prototype.dispose = function () {
    A.Bubble.unbindDragEvents_();
    e.dom.removeNode(this.bubbleGroup_);
    this.shape_ = this.content_ = this.workspace_ = this.bubbleGroup_ = null;
  };
  A.Icon = function (a) {
    this.block_ = a;
  };
  A.Icon.RADIUS = 8;
  A.Icon.prototype.bubble_ = null;
  A.Icon.prototype.iconX_ = 0;
  A.Icon.prototype.iconY_ = 0;
  A.Icon.prototype.createIcon_ = function () {
    this.iconGroup_ = A.createSvgElement("g", {}, null);
    this.block_.getSvgRoot().appendChild(this.iconGroup_);
    A.bindEvent_(this.iconGroup_, "mouseup", this, this.iconClick_);
    this.updateEditable();
  };
  A.Icon.prototype.dispose = function () {
    e.dom.removeNode(this.iconGroup_);
    this.iconGroup_ = null;
    this.setVisible(!1);
    this.block_ = null;
  };
  A.Icon.prototype.updateEditable = function () {
    this.block_.isInFlyout ? A.removeClass_(this.iconGroup_, "blocklyIconGroup") : A.addClass_(this.iconGroup_, "blocklyIconGroup");
  };
  A.Icon.prototype.isVisible = function () {
    return !!this.bubble_;
  };
  A.Icon.prototype.iconClick_ = function () {
    this.block_.isInFlyout || this.setVisible(!this.isVisible());
  };
  A.Icon.prototype.updateColour = function () {
    if (this.isVisible()) {
      var a = A.makeColour(this.block_.getColour());
      this.bubble_.setColour(a);
    }
  };
  A.Icon.prototype.renderIcon = function (a) {
    if (this.block_.isCollapsed()) return this.iconGroup_.setAttribute("display", "none"), a;
    this.iconGroup_.setAttribute("display", "block");
    var c = 2 * A.Icon.RADIUS;
    A.RTL && (a -= c);
    this.iconGroup_.setAttribute("transform", "translate(" + a + ", 5)");
    this.computeIconLocation();
    return a = A.RTL ? a - A.BlockSvg.SEP_SPACE_X : a + (c + A.BlockSvg.SEP_SPACE_X);
  };
  A.Icon.prototype.setIconLocation = function (a, c) {
    this.iconX_ = a;
    this.iconY_ = c;
    this.isVisible() && this.bubble_.setAnchorLocation(a, c);
  };
  A.Icon.prototype.computeIconLocation = function () {
    var a = this.block_.getRelativeToSurfaceXY(),
      c = A.getRelativeXY_(this.iconGroup_),
      d = a.x + c.x + A.Icon.RADIUS;
    a = a.y + c.y + A.Icon.RADIUS;
    d === this.iconX_ && a === this.iconY_ || this.setIconLocation(d, a);
  };
  A.Icon.prototype.getIconLocation = function () {
    return {
      x: this.iconX_,
      y: this.iconY_
    };
  };
  A.Comment = function (a) {
    A.Comment.superClass_.constructor.call(this, a);
    this.createIcon_();
  };
  e.inherits(A.Comment, A.Icon);
  A.Comment.prototype.text_ = "";
  A.Comment.prototype.width_ = 160;
  A.Comment.prototype.height_ = 80;
  A.Comment.prototype.createIcon_ = function () {
    A.Icon.prototype.createIcon_.call(this);
    A.createSvgElement("circle", {
      "class": "blocklyIconShield",
      r: A.Icon.RADIUS,
      cx: A.Icon.RADIUS,
      cy: A.Icon.RADIUS
    }, this.iconGroup_);
    this.iconMark_ = A.createSvgElement("text", {
      "class": "blocklyIconMark",
      x: A.Icon.RADIUS,
      y: 2 * A.Icon.RADIUS - 3
    }, this.iconGroup_);
    this.iconMark_.appendChild(document.createTextNode("?"));
  };
  A.Comment.prototype.createEditor_ = function () {
    this.foreignObject_ = A.createSvgElement("foreignObject", {
      x: A.Bubble.BORDER_WIDTH,
      y: A.Bubble.BORDER_WIDTH
    }, null);
    var a = document.createElementNS(A.HTML_NS, "body");
    a.setAttribute("xmlns", A.HTML_NS);
    a.className = "blocklyMinimalBody";
    this.textarea_ = document.createElementNS(A.HTML_NS, "textarea");
    this.textarea_.className = "blocklyCommentTextarea";
    this.textarea_.setAttribute("dir", A.RTL ? "RTL" : "LTR");
    a.appendChild(this.textarea_);
    this.foreignObject_.appendChild(a);
    A.bindEvent_(this.textarea_, "mouseup", this, this.textareaFocus_);
    return this.foreignObject_;
  };
  A.Comment.prototype.updateEditable = function () {
    this.isVisible() && (this.setVisible(!1), this.setVisible(!0));
    A.Icon.prototype.updateEditable.call(this);
  };
  A.Comment.prototype.resizeBubble_ = function () {
    var a = this.bubble_.getBubbleSize(),
      c = 2 * A.Bubble.BORDER_WIDTH;
    this.foreignObject_.setAttribute("width", a.width - c);
    this.foreignObject_.setAttribute("height", a.height - c);
    this.textarea_.style.width = a.width - c - 4 + "px";
    this.textarea_.style.height = a.height - c - 4 + "px";
  };
  A.Comment.prototype.setVisible = function (a) {
    if (a != this.isVisible()) if (!this.block_.isEditable() && !this.textarea_ || e.userAgent.IE) A.Warning.prototype.setVisible.call(this, a);else {
      var c = this.getText(),
        d = this.getBubbleSize();
      a ? (this.bubble_ = new A.Bubble(this.block_.workspace, this.createEditor_(), this.block_.svg_.svgPath_, this.iconX_, this.iconY_, this.width_, this.height_), this.bubble_.registerResizeEvent(this, this.resizeBubble_), this.updateColour(), this.text_ = null) : (this.bubble_.dispose(), this.foreignObject_ = this.textarea_ = this.bubble_ = null);
      this.setText(c);
      this.setBubbleSize(d.width, d.height);
    }
  };
  A.Comment.prototype.textareaFocus_ = function () {
    this.bubble_.promote_();
    this.textarea_.focus();
  };
  A.Comment.prototype.getBubbleSize = function () {
    return this.isVisible() ? this.bubble_.getBubbleSize() : {
      width: this.width_,
      height: this.height_
    };
  };
  A.Comment.prototype.setBubbleSize = function (a, c) {
    this.textarea_ ? this.bubble_.setBubbleSize(a, c) : (this.width_ = a, this.height_ = c);
  };
  A.Comment.prototype.getText = function () {
    return this.textarea_ ? this.textarea_.value : this.text_;
  };
  A.Comment.prototype.setText = function (a) {
    this.textarea_ ? this.textarea_.value = a : this.text_ = a;
  };
  A.Comment.prototype.dispose = function () {
    this.block_.comment = null;
    A.Icon.prototype.dispose.call(this);
  };
  A.Connection = function (a, c) {
    this.sourceBlock_ = a;
    this.targetConnection = null;
    this.type = c;
    this.y_ = this.x_ = 0;
    this.inDB_ = !1;
    this.dbList_ = this.sourceBlock_.workspace.connectionDBList;
  };
  A.Connection.prototype.dispose = function () {
    if (this.targetConnection) throw "Disconnect connection before disposing of it.";
    this.inDB_ && this.dbList_[this.type].removeConnection_(this);
    this.inDB_ = !1;
    A.highlightedConnection_ == this && (A.highlightedConnection_ = null);
    A.localConnection_ == this && (A.localConnection_ = null);
  };
  A.Connection.prototype.isSuperior = function () {
    return this.type == A.INPUT_VALUE || this.type == A.NEXT_STATEMENT;
  };
  A.Connection.prototype.connect = function (a) {
    if (this.sourceBlock_ == a.sourceBlock_) throw "Attempted to connect a block to itself.";
    if (this.sourceBlock_.workspace !== a.sourceBlock_.workspace) throw "Blocks are on different workspaces.";
    if (A.OPPOSITE_TYPE[this.type] != a.type) throw "Attempt to connect incompatible types.";
    if (this.type == A.INPUT_VALUE || this.type == A.OUTPUT_VALUE) {
      if (this.targetConnection) throw "Source connection already connected (value).";
      if (a.targetConnection) {
        var c = a.targetBlock();
        c.setParent(null);
        if (!c.outputConnection) throw "Orphan block does not have an output connection.";
        for (var d = this.sourceBlock_; d = A.Connection.singleConnection_(d, c);) if (d.targetBlock()) d = d.targetBlock();else {
          d.connect(c.outputConnection);
          c = null;
          break;
        }
        c && window.setTimeout(function () {
          c.outputConnection.bumpAwayFrom_(a);
        }, A.BUMP_DELAY);
      }
    } else {
      if (this.targetConnection) throw "Source connection already connected (block).";
      if (a.targetConnection) {
        if (this.type != A.PREVIOUS_STATEMENT) throw "Can only do a mid-stack connection with the top of a block.";
        c = a.targetBlock();
        c.setParent(null);
        if (!c.previousConnection) throw "Orphan block does not have a previous connection.";
        for (d = this.sourceBlock_; d.nextConnection;) if (d.nextConnection.targetConnection) d = d.getNextBlock();else {
          d.nextConnection.connect(c.previousConnection);
          c = null;
          break;
        }
        c && window.setTimeout(function () {
          c.previousConnection.bumpAwayFrom_(a);
        }, A.BUMP_DELAY);
      }
    }
    if (this.isSuperior()) {
      d = this.sourceBlock_;
      var f = a.sourceBlock_;
    } else d = a.sourceBlock_, f = this.sourceBlock_;
    this.targetConnection = a;
    a.targetConnection = this;
    f.setParent(d);
    d.rendered && d.svg_.updateDisabled();
    f.rendered && f.svg_.updateDisabled();
    d.rendered && f.rendered && (this.type == A.NEXT_STATEMENT || this.type == A.PREVIOUS_STATEMENT ? f.render() : d.render());
  };
  A.Connection.singleConnection_ = function (a, c) {
    for (var d = !1, f = 0; f < a.inputList.length; f++) {
      var g = a.inputList[f].connection;
      if (g && g.type == A.INPUT_VALUE && c.outputConnection.checkType_(g)) {
        if (d) return null;
        d = g;
      }
    }
    return d;
  };
  A.Connection.prototype.disconnect = function () {
    var a = this.targetConnection;
    if (!a) throw "Source connection not connected.";
    if (a.targetConnection != this) throw "Target connection not connected to source connection.";
    this.targetConnection = a.targetConnection = null;
    if (this.isSuperior()) {
      var c = this.sourceBlock_;
      a = a.sourceBlock_;
    } else c = a.sourceBlock_, a = this.sourceBlock_;
    c.rendered && c.render();
    a.rendered && (a.svg_.updateDisabled(), a.render());
  };
  A.Connection.prototype.targetBlock = function () {
    return this.targetConnection ? this.targetConnection.sourceBlock_ : null;
  };
  A.Connection.prototype.bumpAwayFrom_ = function (a) {
    if (0 == A.Block.dragMode_) {
      var c = this.sourceBlock_.getRootBlock();
      if (!c.isInFlyout) {
        var d = !1;
        if (!c.isMovable()) {
          c = a.sourceBlock_.getRootBlock();
          if (!c.isMovable()) return;
          a = this;
          d = !0;
        }
        c.getSvgRoot().parentNode.appendChild(c.getSvgRoot());
        var f = a.x_ + A.SNAP_RADIUS - this.x_;
        a = a.y_ + A.SNAP_RADIUS - this.y_;
        d && (a = -a);
        A.RTL && (f = -f);
        c.moveBy(f, a);
      }
    }
  };
  A.Connection.prototype.moveTo = function (a, c) {
    this.inDB_ && this.dbList_[this.type].removeConnection_(this);
    this.x_ = a;
    this.y_ = c;
    this.dbList_[this.type].addConnection_(this);
  };
  A.Connection.prototype.moveBy = function (a, c) {
    this.moveTo(this.x_ + a, this.y_ + c);
  };
  A.Connection.prototype.highlight = function () {
    if (this.type == A.INPUT_VALUE || this.type == A.OUTPUT_VALUE) {
      var a = A.RTL ? -A.BlockSvg.TAB_WIDTH : A.BlockSvg.TAB_WIDTH;
      a = "m 0,0 v 5 c 0,10 " + -a + ",-8 " + -a + ",7.5 s " + a + ",-2.5 " + a + ",7.5 v 5";
    } else a = A.RTL ? A.BlockSvg.NOTCH_HIGHLIGHT_RTL : A.BlockSvg.NOTCH_HIGHLIGHT;
    var c = this.sourceBlock_.getRelativeToSurfaceXY();
    A.Connection.highlightedPath_ = A.createSvgElement("path", {
      "class": "blocklyHighlightedConnectionPath",
      d: a,
      transform: "translate(" + (this.x_ - c.x) + ", " + (this.y_ - c.y) + ")"
    }, this.sourceBlock_.getSvgRoot());
  };
  A.Connection.prototype.unhighlight = function () {
    e.dom.removeNode(A.Connection.highlightedPath_);
    delete A.Connection.highlightedPath_;
  };
  A.Connection.prototype.tighten_ = function () {
    var a = Math.round(this.targetConnection.x_ - this.x_),
      c = Math.round(this.targetConnection.y_ - this.y_);
    if (0 != a || 0 != c) {
      var d = this.targetBlock(),
        f = d.getSvgRoot();
      if (!f) throw "block is not rendered.";
      f = A.getRelativeXY_(f);
      d.getSvgRoot().setAttribute("transform", "translate(" + (f.x - a) + ", " + (f.y - c) + ")");
      d.moveConnections_(-a, -c);
    }
  };
  A.Connection.prototype.closest = function (a, c, d) {
    function f(c) {
      var d = g[c];
      if ((d.type == A.OUTPUT_VALUE || d.type == A.PREVIOUS_STATEMENT) && d.targetConnection || d.type == A.INPUT_VALUE && d.targetConnection && !d.targetBlock().isMovable() || !r.checkType_(d)) return !0;
      d = d.sourceBlock_;
      do {
        if (p == d) return !0;
        d = d.getParent();
      } while (d);
      var f = h - g[c].x_;
      d = k - g[c].y_;
      f = Math.sqrt(f * f + d * d);
      f <= a && (n = g[c], a = f);
      return d < a;
    }
    if (this.targetConnection) return {
      connection: null,
      radius: a
    };
    var g = this.dbList_[A.OPPOSITE_TYPE[this.type]],
      h = this.x_ + c,
      k = this.y_ + d;
    c = 0;
    for (var m = d = g.length - 2; c < m;) g[m].y_ < k ? c = m : d = m, m = Math.floor((c + d) / 2);
    d = c = m;
    var n = null,
      p = this.sourceBlock_,
      r = this;
    if (g.length) {
      for (; 0 <= c && f(c);) c--;
      do d++; while (d < g.length && f(d));
    }
    return {
      connection: n,
      radius: a
    };
  };
  A.Connection.prototype.checkType_ = function (a) {
    if (!this.check_ || !a.check_) return !0;
    for (var c = 0; c < this.check_.length; c++) if (-1 != a.check_.indexOf(this.check_[c])) return !0;
    return !1;
  };
  A.Connection.prototype.setCheck = function (a) {
    a ? (e.isArray(a) || (a = [a]), this.check_ = a, this.targetConnection && !this.checkType_(this.targetConnection) && (this.isSuperior() ? this.targetBlock().setParent(null) : this.sourceBlock_.setParent(null), this.sourceBlock_.bumpNeighbours_())) : this.check_ = null;
    return this;
  };
  A.Connection.prototype.neighbours_ = function (a) {
    function c(c) {
      var h = f - d[c].x_,
        k = g - d[c].y_;
      Math.sqrt(h * h + k * k) <= a && n.push(d[c]);
      return k < a;
    }
    for (var d = this.dbList_[A.OPPOSITE_TYPE[this.type]], f = this.x_, g = this.y_, h = 0, k = d.length - 2, m = k; h < m;) d[m].y_ < g ? h = m : k = m, m = Math.floor((h + k) / 2);
    k = h = m;
    var n = [];
    if (d.length) {
      for (; 0 <= h && c(h);) h--;
      do k++; while (k < d.length && c(k));
    }
    return n;
  };
  A.Connection.prototype.hideAll = function () {
    this.inDB_ && this.dbList_[this.type].removeConnection_(this);
    if (this.targetConnection) for (var a = this.targetBlock().getDescendants(), c = 0; c < a.length; c++) {
      for (var d = a[c], f = d.getConnections_(!0), g = 0; g < f.length; g++) {
        var h = f[g];
        h.inDB_ && this.dbList_[h.type].removeConnection_(h);
      }
      d = d.getIcons();
      for (f = 0; f < d.length; f++) d[f].setVisible(!1);
    }
  };
  A.Connection.prototype.unhideAll = function () {
    this.inDB_ || this.dbList_[this.type].addConnection_(this);
    var a = [];
    if (this.type != A.INPUT_VALUE && this.type != A.NEXT_STATEMENT) return a;
    var c = this.targetBlock();
    if (c) {
      if (c.isCollapsed()) {
        var d = [];
        c.outputConnection && d.push(c.outputConnection);
        c.nextConnection && d.push(c.nextConnection);
        c.previousConnection && d.push(c.previousConnection);
      } else d = c.getConnections_(!0);
      for (var f = 0; f < d.length; f++) a.push.apply(a, d[f].unhideAll());
      0 == a.length && (a[0] = c);
    }
    return a;
  };
  A.ConnectionDB = function () {};
  A.ConnectionDB.prototype = [];
  A.ConnectionDB.constructor = A.ConnectionDB;
  A.ConnectionDB.prototype.addConnection_ = function (a) {
    if (a.inDB_) throw "Connection already in database.";
    for (var c = 0, d = this.length; c < d;) {
      var f = Math.floor((c + d) / 2);
      if (this[f].y_ < a.y_) c = f + 1;else if (this[f].y_ > a.y_) d = f;else {
        c = f;
        break;
      }
    }
    this.splice(c, 0, a);
    a.inDB_ = !0;
  };
  A.ConnectionDB.prototype.removeConnection_ = function (a) {
    if (!a.inDB_) throw "Connection not in database.";
    a.inDB_ = !1;
    for (var c = 0, d = this.length - 2, f = d; c < f;) this[f].y_ < a.y_ ? c = f : d = f, f = Math.floor((c + d) / 2);
    for (d = c = f; 0 <= c && this[c].y_ == a.y_;) {
      if (this[c] == a) {
        this.splice(c, 1);
        return;
      }
      c--;
    }
    do {
      if (this[d] == a) {
        this.splice(d, 1);
        return;
      }
      d++;
    } while (d < this.length && this[d].y_ == a.y_);
    throw "Unable to find connection in connectionDB.";
  };
  A.ConnectionDB.init = function (a) {
    var c = [];
    c[A.INPUT_VALUE] = new A.ConnectionDB();
    c[A.OUTPUT_VALUE] = new A.ConnectionDB();
    c[A.NEXT_STATEMENT] = new A.ConnectionDB();
    c[A.PREVIOUS_STATEMENT] = new A.ConnectionDB();
    a.connectionDBList = c;
  };
  e.dom.vendor = {};
  e.dom.vendor.getVendorJsPrefix = function () {
    return e.userAgent.WEBKIT ? "Webkit" : e.userAgent.GECKO ? "Moz" : e.userAgent.IE ? "ms" : e.userAgent.OPERA ? "O" : null;
  };
  e.dom.vendor.getVendorPrefix = function () {
    return e.userAgent.WEBKIT ? "-webkit" : e.userAgent.GECKO ? "-moz" : e.userAgent.IE ? "-ms" : e.userAgent.OPERA ? "-o" : null;
  };
  e.dom.vendor.getPrefixedPropertyName = function (a, c) {
    if (c && a in c) return a;
    var d = e.dom.vendor.getVendorJsPrefix();
    return d ? (d = d.toLowerCase(), a = d + e.string.toTitleCase(a), void 0 === c || a in c ? a : null) : null;
  };
  e.dom.vendor.getPrefixedEventType = function (a) {
    return ((e.dom.vendor.getVendorJsPrefix() || "") + a).toLowerCase();
  };
  e.math.Box = function (a, c, d, f) {
    this.top = a;
    this.right = c;
    this.bottom = d;
    this.left = f;
  };
  e.math.Box.boundingBox = function (a) {
    for (var c = new e.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x), d = 1; d < arguments.length; d++) c.expandToIncludeCoordinate(arguments[d]);
    return c;
  };
  e.math.Box.prototype.getWidth = function () {
    return this.right - this.left;
  };
  e.math.Box.prototype.getHeight = function () {
    return this.bottom - this.top;
  };
  e.math.Box.prototype.clone = function () {
    return new e.math.Box(this.top, this.right, this.bottom, this.left);
  };
  e.DEBUG && (e.math.Box.prototype.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
  });
  e.math.Box.prototype.contains = function (a) {
    return e.math.Box.contains(this, a);
  };
  e.math.Box.prototype.expand = function (a, c, d, f) {
    e.isObject(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(c), this.bottom += Number(d), this.left -= Number(f));
    return this;
  };
  e.math.Box.prototype.expandToInclude = function (a) {
    this.left = Math.min(this.left, a.left);
    this.top = Math.min(this.top, a.top);
    this.right = Math.max(this.right, a.right);
    this.bottom = Math.max(this.bottom, a.bottom);
  };
  e.math.Box.prototype.expandToIncludeCoordinate = function (a) {
    this.top = Math.min(this.top, a.y);
    this.right = Math.max(this.right, a.x);
    this.bottom = Math.max(this.bottom, a.y);
    this.left = Math.min(this.left, a.x);
  };
  e.math.Box.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.top == c.top && a.right == c.right && a.bottom == c.bottom && a.left == c.left : !1;
  };
  e.math.Box.contains = function (a, c) {
    return a && c ? c instanceof e.math.Box ? c.left >= a.left && c.right <= a.right && c.top >= a.top && c.bottom <= a.bottom : c.x >= a.left && c.x <= a.right && c.y >= a.top && c.y <= a.bottom : !1;
  };
  e.math.Box.relativePositionX = function (a, c) {
    return c.x < a.left ? c.x - a.left : c.x > a.right ? c.x - a.right : 0;
  };
  e.math.Box.relativePositionY = function (a, c) {
    return c.y < a.top ? c.y - a.top : c.y > a.bottom ? c.y - a.bottom : 0;
  };
  e.math.Box.distance = function (a, c) {
    var d = e.math.Box.relativePositionX(a, c);
    a = e.math.Box.relativePositionY(a, c);
    return Math.sqrt(d * d + a * a);
  };
  e.math.Box.intersects = function (a, c) {
    return a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom;
  };
  e.math.Box.intersectsWithPadding = function (a, c, d) {
    return a.left <= c.right + d && c.left <= a.right + d && a.top <= c.bottom + d && c.top <= a.bottom + d;
  };
  e.math.Box.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  e.math.Box.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  e.math.Box.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  e.math.Box.prototype.translate = function (a, c) {
    a instanceof e.math.Coordinate ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (e.asserts.assertNumber(a), this.left += a, this.right += a, "number" === typeof c && (this.top += c, this.bottom += c));
    return this;
  };
  e.math.Box.prototype.scale = function (a, c) {
    c = "number" === typeof c ? c : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this;
  };
  e.math.IRect = function () {};
  e.math.Rect = function (a, c, d, f) {
    this.left = a;
    this.top = c;
    this.width = d;
    this.height = f;
  };
  e.math.Rect.prototype.clone = function () {
    return new e.math.Rect(this.left, this.top, this.width, this.height);
  };
  e.math.Rect.prototype.toBox = function () {
    return new e.math.Box(this.top, this.left + this.width, this.top + this.height, this.left);
  };
  e.math.Rect.createFromPositionAndSize = function (a, c) {
    return new e.math.Rect(a.x, a.y, c.width, c.height);
  };
  e.math.Rect.createFromBox = function (a) {
    return new e.math.Rect(a.left, a.top, a.right - a.left, a.bottom - a.top);
  };
  e.DEBUG && (e.math.Rect.prototype.toString = function () {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
  });
  e.math.Rect.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.left == c.left && a.width == c.width && a.top == c.top && a.height == c.height : !1;
  };
  e.math.Rect.prototype.intersection = function (a) {
    var c = Math.max(this.left, a.left),
      d = Math.min(this.left + this.width, a.left + a.width);
    if (c <= d) {
      var f = Math.max(this.top, a.top);
      a = Math.min(this.top + this.height, a.top + a.height);
      if (f <= a) return this.left = c, this.top = f, this.width = d - c, this.height = a - f, !0;
    }
    return !1;
  };
  e.math.Rect.intersection = function (a, c) {
    var d = Math.max(a.left, c.left),
      f = Math.min(a.left + a.width, c.left + c.width);
    if (d <= f) {
      var g = Math.max(a.top, c.top);
      a = Math.min(a.top + a.height, c.top + c.height);
      if (g <= a) return new e.math.Rect(d, g, f - d, a - g);
    }
    return null;
  };
  e.math.Rect.intersects = function (a, c) {
    return a.left <= c.left + c.width && c.left <= a.left + a.width && a.top <= c.top + c.height && c.top <= a.top + a.height;
  };
  e.math.Rect.prototype.intersects = function (a) {
    return e.math.Rect.intersects(this, a);
  };
  e.math.Rect.difference = function (a, c) {
    var d = e.math.Rect.intersection(a, c);
    if (!d || !d.height || !d.width) return [a.clone()];
    d = [];
    var f = a.top,
      g = a.height,
      h = a.left + a.width,
      k = a.top + a.height,
      m = c.left + c.width,
      n = c.top + c.height;
    c.top > a.top && (d.push(new e.math.Rect(a.left, a.top, a.width, c.top - a.top)), f = c.top, g -= c.top - a.top);
    n < k && (d.push(new e.math.Rect(a.left, n, a.width, k - n)), g = n - f);
    c.left > a.left && d.push(new e.math.Rect(a.left, f, c.left - a.left, g));
    m < h && d.push(new e.math.Rect(m, f, h - m, g));
    return d;
  };
  e.math.Rect.prototype.difference = function (a) {
    return e.math.Rect.difference(this, a);
  };
  e.math.Rect.prototype.boundingRect = function (a) {
    var c = Math.max(this.left + this.width, a.left + a.width),
      d = Math.max(this.top + this.height, a.top + a.height);
    this.left = Math.min(this.left, a.left);
    this.top = Math.min(this.top, a.top);
    this.width = c - this.left;
    this.height = d - this.top;
  };
  e.math.Rect.boundingRect = function (a, c) {
    if (!a || !c) return null;
    a = new e.math.Rect(a.left, a.top, a.width, a.height);
    a.boundingRect(c);
    return a;
  };
  e.math.Rect.prototype.contains = function (a) {
    return a instanceof e.math.Coordinate ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
  };
  e.math.Rect.prototype.squaredDistance = function (a) {
    var c = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
    a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
    return c * c + a * a;
  };
  e.math.Rect.prototype.distance = function (a) {
    return Math.sqrt(this.squaredDistance(a));
  };
  e.math.Rect.prototype.getSize = function () {
    return new e.math.Size(this.width, this.height);
  };
  e.math.Rect.prototype.getTopLeft = function () {
    return new e.math.Coordinate(this.left, this.top);
  };
  e.math.Rect.prototype.getCenter = function () {
    return new e.math.Coordinate(this.left + this.width / 2, this.top + this.height / 2);
  };
  e.math.Rect.prototype.getBottomRight = function () {
    return new e.math.Coordinate(this.left + this.width, this.top + this.height);
  };
  e.math.Rect.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  e.math.Rect.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  e.math.Rect.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  e.math.Rect.prototype.translate = function (a, c) {
    a instanceof e.math.Coordinate ? (this.left += a.x, this.top += a.y) : (this.left += e.asserts.assertNumber(a), "number" === typeof c && (this.top += c));
    return this;
  };
  e.math.Rect.prototype.scale = function (a, c) {
    c = "number" === typeof c ? c : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this;
  };
  e.style = {};
  e.style.setStyle = function (a, c, d) {
    if ("string" === typeof c) e.style.setStyle_(a, d, c);else for (var f in c) e.style.setStyle_(a, c[f], f);
  };
  e.style.setStyle_ = function (a, c, d) {
    (d = e.style.getVendorJsStyleName_(a, d)) && (a.style[d] = c);
  };
  e.style.styleNameCache_ = {};
  e.style.getVendorJsStyleName_ = function (a, c) {
    var d = e.style.styleNameCache_[c];
    if (!d) {
      var f = e.string.toCamelCase(c);
      d = f;
      void 0 === a.style[f] && (f = e.dom.vendor.getVendorJsPrefix() + e.string.toTitleCase(f), void 0 !== a.style[f] && (d = f));
      e.style.styleNameCache_[c] = d;
    }
    return d;
  };
  e.style.getVendorStyleName_ = function (a, c) {
    var d = e.string.toCamelCase(c);
    return void 0 === a.style[d] && (d = e.dom.vendor.getVendorJsPrefix() + e.string.toTitleCase(d), void 0 !== a.style[d]) ? e.dom.vendor.getVendorPrefix() + "-" + c : c;
  };
  e.style.getStyle = function (a, c) {
    var d = a.style[e.string.toCamelCase(c)];
    return "undefined" !== typeof d ? d : a.style[e.style.getVendorJsStyleName_(a, c)] || "";
  };
  e.style.getComputedStyle = function (a, c) {
    var d = e.dom.getOwnerDocument(a);
    return d.defaultView && d.defaultView.getComputedStyle && (a = d.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : "";
  };
  e.style.getCascadedStyle = function (a, c) {
    return a.currentStyle ? a.currentStyle[c] : null;
  };
  e.style.getStyle_ = function (a, c) {
    return e.style.getComputedStyle(a, c) || e.style.getCascadedStyle(a, c) || a.style && a.style[c];
  };
  e.style.getComputedBoxSizing = function (a) {
    return e.style.getStyle_(a, "boxSizing") || e.style.getStyle_(a, "MozBoxSizing") || e.style.getStyle_(a, "WebkitBoxSizing") || null;
  };
  e.style.getComputedPosition = function (a) {
    return e.style.getStyle_(a, "position");
  };
  e.style.getBackgroundColor = function (a) {
    return e.style.getStyle_(a, "backgroundColor");
  };
  e.style.getComputedOverflowX = function (a) {
    return e.style.getStyle_(a, "overflowX");
  };
  e.style.getComputedOverflowY = function (a) {
    return e.style.getStyle_(a, "overflowY");
  };
  e.style.getComputedZIndex = function (a) {
    return e.style.getStyle_(a, "zIndex");
  };
  e.style.getComputedTextAlign = function (a) {
    return e.style.getStyle_(a, "textAlign");
  };
  e.style.getComputedCursor = function (a) {
    return e.style.getStyle_(a, "cursor");
  };
  e.style.getComputedTransform = function (a) {
    var c = e.style.getVendorStyleName_(a, "transform");
    return e.style.getStyle_(a, c) || e.style.getStyle_(a, "transform");
  };
  e.style.setPosition = function (a, c, d) {
    if (c instanceof e.math.Coordinate) {
      var f = c.x;
      c = c.y;
    } else f = c, c = d;
    a.style.left = e.style.getPixelStyleValue_(f, !1);
    a.style.top = e.style.getPixelStyleValue_(c, !1);
  };
  e.style.getPosition = function (a) {
    return new e.math.Coordinate(a.offsetLeft, a.offsetTop);
  };
  e.style.getClientViewportElement = function (a) {
    a = a ? e.dom.getOwnerDocument(a) : e.dom.getDocument();
    return !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9) || e.dom.getDomHelper(a).isCss1CompatMode() ? a.documentElement : a.body;
  };
  e.style.getViewportPageOffset = function (a) {
    var c = a.body;
    a = a.documentElement;
    return new e.math.Coordinate(c.scrollLeft || a.scrollLeft, c.scrollTop || a.scrollTop);
  };
  e.style.getBoundingClientRect_ = function (a) {
    try {
      var c = a.getBoundingClientRect();
    } catch (d) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
    }
    e.userAgent.IE && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
    return c;
  };
  e.style.getOffsetParent = function (a) {
    if (e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(8)) return e.asserts.assert(a && "offsetParent" in a), a.offsetParent;
    var c = e.dom.getOwnerDocument(a),
      d = e.style.getStyle_(a, "position"),
      f = "fixed" == d || "absolute" == d;
    for (a = a.parentNode; a && a != c; a = a.parentNode) if (a.nodeType == e.dom.NodeType.DOCUMENT_FRAGMENT && a.host && (a = a.host), d = e.style.getStyle_(a, "position"), f = f && "static" == d && a != c.documentElement && a != c.body, !f && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == d || "absolute" == d || "relative" == d)) return a;
    return null;
  };
  e.style.getVisibleRectForElement = function (a) {
    for (var c = new e.math.Box(0, Infinity, Infinity, 0), d = e.dom.getDomHelper(a), f = d.getDocument().body, g = d.getDocument().documentElement, h = d.getDocumentScrollElement(); a = e.style.getOffsetParent(a);) if (!(e.userAgent.IE && 0 == a.clientWidth || e.userAgent.WEBKIT && 0 == a.clientHeight && a == f) && a != f && a != g && "visible" != e.style.getStyle_(a, "overflow")) {
      var k = e.style.getPageOffset(a),
        m = e.style.getClientLeftTop(a);
      k.x += m.x;
      k.y += m.y;
      c.top = Math.max(c.top, k.y);
      c.right = Math.min(c.right, k.x + a.clientWidth);
      c.bottom = Math.min(c.bottom, k.y + a.clientHeight);
      c.left = Math.max(c.left, k.x);
    }
    f = h.scrollLeft;
    h = h.scrollTop;
    c.left = Math.max(c.left, f);
    c.top = Math.max(c.top, h);
    d = d.getViewportSize();
    c.right = Math.min(c.right, f + d.width);
    c.bottom = Math.min(c.bottom, h + d.height);
    return 0 <= c.top && 0 <= c.left && c.bottom > c.top && c.right > c.left ? c : null;
  };
  e.style.getContainerOffsetToScrollInto = function (a, c, d) {
    var f = c || e.dom.getDocumentScrollElement(),
      g = e.style.getPageOffset(a),
      h = e.style.getPageOffset(f),
      k = e.style.getBorderBox(f);
    f == e.dom.getDocumentScrollElement() ? (c = g.x - f.scrollLeft, g = g.y - f.scrollTop, e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(10) && (c += k.left, g += k.top)) : (c = g.x - h.x - k.left, g = g.y - h.y - k.top);
    k = e.style.getSizeWithDisplay_(a);
    a = f.clientWidth - k.width;
    k = f.clientHeight - k.height;
    h = f.scrollLeft;
    f = f.scrollTop;
    d ? (h += c - a / 2, f += g - k / 2) : (h += Math.min(c, Math.max(c - a, 0)), f += Math.min(g, Math.max(g - k, 0)));
    return new e.math.Coordinate(h, f);
  };
  e.style.scrollIntoContainerView = function (a, c, d) {
    c = c || e.dom.getDocumentScrollElement();
    a = e.style.getContainerOffsetToScrollInto(a, c, d);
    c.scrollLeft = a.x;
    c.scrollTop = a.y;
  };
  e.style.getClientLeftTop = function (a) {
    return new e.math.Coordinate(a.clientLeft, a.clientTop);
  };
  e.style.getPageOffset = function (a) {
    var c = e.dom.getOwnerDocument(a);
    e.asserts.assertObject(a, "Parameter is required");
    var d = new e.math.Coordinate(0, 0),
      f = e.style.getClientViewportElement(c);
    if (a == f) return d;
    a = e.style.getBoundingClientRect_(a);
    c = e.dom.getDomHelper(c).getDocumentScroll();
    d.x = a.left + c.x;
    d.y = a.top + c.y;
    return d;
  };
  e.style.getPageOffsetLeft = function (a) {
    return e.style.getPageOffset(a).x;
  };
  e.style.getPageOffsetTop = function (a) {
    return e.style.getPageOffset(a).y;
  };
  e.style.getFramedPageOffset = function (a, c) {
    var d = new e.math.Coordinate(0, 0),
      f = e.dom.getWindow(e.dom.getOwnerDocument(a));
    if (!e.reflect.canAccessProperty(f, "parent")) return d;
    do {
      var g = f == c ? e.style.getPageOffset(a) : e.style.getClientPositionForElement_(e.asserts.assert(a));
      d.x += g.x;
      d.y += g.y;
    } while (f && f != c && f != f.parent && (a = f.frameElement) && (f = f.parent));
    return d;
  };
  e.style.translateRectForAnotherFrame = function (a, c, d) {
    if (c.getDocument() != d.getDocument()) {
      var f = c.getDocument().body;
      d = e.style.getFramedPageOffset(f, d.getWindow());
      d = e.math.Coordinate.difference(d, e.style.getPageOffset(f));
      !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9) || c.isCss1CompatMode() || (d = e.math.Coordinate.difference(d, c.getDocumentScroll()));
      a.left += d.x;
      a.top += d.y;
    }
  };
  e.style.getRelativePosition = function (a, c) {
    a = e.style.getClientPosition(a);
    c = e.style.getClientPosition(c);
    return new e.math.Coordinate(a.x - c.x, a.y - c.y);
  };
  e.style.getClientPositionForElement_ = function (a) {
    a = e.style.getBoundingClientRect_(a);
    return new e.math.Coordinate(a.left, a.top);
  };
  e.style.getClientPosition = function (a) {
    e.asserts.assert(a);
    if (a.nodeType == e.dom.NodeType.ELEMENT) return e.style.getClientPositionForElement_(a);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new e.math.Coordinate(a.clientX, a.clientY);
  };
  e.style.setPageOffset = function (a, c, d) {
    var f = e.style.getPageOffset(a);
    c instanceof e.math.Coordinate && (d = c.y, c = c.x);
    c = e.asserts.assertNumber(c) - f.x;
    e.style.setPosition(a, a.offsetLeft + c, a.offsetTop + (Number(d) - f.y));
  };
  e.style.setSize = function (a, c, d) {
    if (c instanceof e.math.Size) d = c.height, c = c.width;else if (void 0 == d) throw Error("missing height argument");
    e.style.setWidth(a, c);
    e.style.setHeight(a, d);
  };
  e.style.getPixelStyleValue_ = function (a, c) {
    "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
    return a;
  };
  e.style.setHeight = function (a, c) {
    a.style.height = e.style.getPixelStyleValue_(c, !0);
  };
  e.style.setWidth = function (a, c) {
    a.style.width = e.style.getPixelStyleValue_(c, !0);
  };
  e.style.getSize = function (a) {
    return e.style.evaluateWithTemporaryDisplay_(e.style.getSizeWithDisplay_, a);
  };
  e.style.evaluateWithTemporaryDisplay_ = function (a, c) {
    if ("none" != e.style.getStyle_(c, "display")) return a(c);
    var d = c.style,
      f = d.display,
      g = d.visibility,
      h = d.position;
    d.visibility = "hidden";
    d.position = "absolute";
    d.display = "inline";
    a = a(c);
    d.display = f;
    d.position = h;
    d.visibility = g;
    return a;
  };
  e.style.getSizeWithDisplay_ = function (a) {
    var c = a.offsetWidth,
      d = a.offsetHeight,
      f = e.userAgent.WEBKIT && !c && !d;
    return (void 0 === c || f) && a.getBoundingClientRect ? (a = e.style.getBoundingClientRect_(a), new e.math.Size(a.right - a.left, a.bottom - a.top)) : new e.math.Size(c, d);
  };
  e.style.getTransformedSize = function (a) {
    if (!a.getBoundingClientRect) return null;
    a = e.style.evaluateWithTemporaryDisplay_(e.style.getBoundingClientRect_, a);
    return new e.math.Size(a.right - a.left, a.bottom - a.top);
  };
  e.style.getBounds = function (a) {
    var c = e.style.getPageOffset(a);
    a = e.style.getSize(a);
    return new e.math.Rect(c.x, c.y, a.width, a.height);
  };
  e.style.toCamelCase = function (a) {
    return e.string.toCamelCase(String(a));
  };
  e.style.toSelectorCase = function (a) {
    return e.string.toSelectorCase(a);
  };
  e.style.getOpacity = function (a) {
    e.asserts.assert(a);
    var c = a.style;
    a = "";
    "opacity" in c ? a = c.opacity : "MozOpacity" in c ? a = c.MozOpacity : "filter" in c && (c = c.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a = String(c[1] / 100));
    return "" == a ? a : Number(a);
  };
  e.style.setOpacity = function (a, c) {
    e.asserts.assert(a);
    a = a.style;
    "opacity" in a ? a.opacity = c : "MozOpacity" in a ? a.MozOpacity = c : "filter" in a && (a.filter = "" === c ? "" : "alpha(opacity=" + 100 * Number(c) + ")");
  };
  e.style.setTransparentBackgroundImage = function (a, c) {
    a = a.style;
    e.userAgent.IE && !e.userAgent.isVersionOrHigher("8") ? a.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + c + '", sizingMethod="crop")' : (a.backgroundImage = "url(" + c + ")", a.backgroundPosition = "top left", a.backgroundRepeat = "no-repeat");
  };
  e.style.clearTransparentBackgroundImage = function (a) {
    a = a.style;
    "filter" in a ? a.filter = "" : a.backgroundImage = "none";
  };
  e.style.showElement = function (a, c) {
    e.style.setElementShown(a, c);
  };
  e.style.setElementShown = function (a, c) {
    a.style.display = c ? "" : "none";
  };
  e.style.isElementShown = function (a) {
    return "none" != a.style.display;
  };
  e.style.installSafeStyleSheet = function (a, c) {
    c = e.dom.getDomHelper(c);
    var d = c.getDocument();
    if (e.userAgent.IE && d.createStyleSheet) return c = d.createStyleSheet(), e.style.setSafeStyleSheet(c, a), c;
    d = c.getElementsByTagNameAndClass("HEAD")[0];
    if (!d) {
      var f = c.getElementsByTagNameAndClass("BODY")[0];
      d = c.createDom("HEAD");
      f.parentNode.insertBefore(d, f);
    }
    f = c.createDom("STYLE");
    e.style.setSafeStyleSheet(f, a);
    c.appendChild(d, f);
    return f;
  };
  e.style.uninstallStyles = function (a) {
    e.dom.removeNode(a.ownerNode || a.owningElement || a);
  };
  e.style.setSafeStyleSheet = function (a, c) {
    c = e.html.SafeStyleSheet.unwrap(c);
    e.userAgent.IE && void 0 !== a.cssText ? a.cssText = c : e.global.trustedTypes ? e.dom.setTextContent(a, c) : a.innerHTML = c;
  };
  e.style.setPreWrap = function (a) {
    a = a.style;
    e.userAgent.IE && !e.userAgent.isVersionOrHigher("8") ? (a.whiteSpace = "pre", a.wordWrap = "break-word") : a.whiteSpace = e.userAgent.GECKO ? "-moz-pre-wrap" : "pre-wrap";
  };
  e.style.setInlineBlock = function (a) {
    a = a.style;
    a.position = "relative";
    e.userAgent.IE && !e.userAgent.isVersionOrHigher("8") ? (a.zoom = "1", a.display = "inline") : a.display = "inline-block";
  };
  e.style.isRightToLeft = function (a) {
    return "rtl" == e.style.getStyle_(a, "direction");
  };
  e.style.unselectableStyle_ = e.userAgent.GECKO ? "MozUserSelect" : e.userAgent.WEBKIT || e.userAgent.EDGE ? "WebkitUserSelect" : null;
  e.style.isUnselectable = function (a) {
    return e.style.unselectableStyle_ ? "none" == a.style[e.style.unselectableStyle_].toLowerCase() : e.userAgent.IE || e.userAgent.OPERA ? "on" == a.getAttribute("unselectable") : !1;
  };
  e.style.setUnselectable = function (a, c, d) {
    d = d ? null : a.getElementsByTagName("*");
    var f = e.style.unselectableStyle_;
    if (f) {
      if (c = c ? "none" : "", a.style && (a.style[f] = c), d) {
        a = 0;
        for (var g; g = d[a]; a++) g.style && (g.style[f] = c);
      }
    } else if (e.userAgent.IE || e.userAgent.OPERA) if (c = c ? "on" : "", a.setAttribute("unselectable", c), d) for (a = 0; g = d[a]; a++) g.setAttribute("unselectable", c);
  };
  e.style.getBorderBoxSize = function (a) {
    return new e.math.Size(a.offsetWidth, a.offsetHeight);
  };
  e.style.setBorderBoxSize = function (a, c) {
    var d = e.dom.getOwnerDocument(a),
      f = e.dom.getDomHelper(d).isCss1CompatMode();
    !e.userAgent.IE || e.userAgent.isVersionOrHigher("10") || f && e.userAgent.isVersionOrHigher("8") ? e.style.setBoxSizingSize_(a, c, "border-box") : (d = a.style, f ? (f = e.style.getPaddingBox(a), a = e.style.getBorderBox(a), d.pixelWidth = c.width - a.left - f.left - f.right - a.right, d.pixelHeight = c.height - a.top - f.top - f.bottom - a.bottom) : (d.pixelWidth = c.width, d.pixelHeight = c.height));
  };
  e.style.getContentBoxSize = function (a) {
    var c = e.dom.getOwnerDocument(a),
      d = e.userAgent.IE && a.currentStyle;
    if (d && e.dom.getDomHelper(c).isCss1CompatMode() && "auto" != d.width && "auto" != d.height && !d.boxSizing) return c = e.style.getIePixelValue_(a, d.width, "width", "pixelWidth"), a = e.style.getIePixelValue_(a, d.height, "height", "pixelHeight"), new e.math.Size(c, a);
    d = e.style.getBorderBoxSize(a);
    c = e.style.getPaddingBox(a);
    a = e.style.getBorderBox(a);
    return new e.math.Size(d.width - a.left - c.left - c.right - a.right, d.height - a.top - c.top - c.bottom - a.bottom);
  };
  e.style.setContentBoxSize = function (a, c) {
    var d = e.dom.getOwnerDocument(a),
      f = e.dom.getDomHelper(d).isCss1CompatMode();
    !e.userAgent.IE || e.userAgent.isVersionOrHigher("10") || f && e.userAgent.isVersionOrHigher("8") ? e.style.setBoxSizingSize_(a, c, "content-box") : (d = a.style, f ? (d.pixelWidth = c.width, d.pixelHeight = c.height) : (f = e.style.getPaddingBox(a), a = e.style.getBorderBox(a), d.pixelWidth = c.width + a.left + f.left + f.right + a.right, d.pixelHeight = c.height + a.top + f.top + f.bottom + a.bottom));
  };
  e.style.setBoxSizingSize_ = function (a, c, d) {
    a = a.style;
    e.userAgent.GECKO ? a.MozBoxSizing = d : e.userAgent.WEBKIT ? a.WebkitBoxSizing = d : a.boxSizing = d;
    a.width = Math.max(c.width, 0) + "px";
    a.height = Math.max(c.height, 0) + "px";
  };
  e.style.getIePixelValue_ = function (a, c, d, f) {
    if (/^\d+px?$/.test(c)) return parseInt(c, 10);
    var g = a.style[d],
      h = a.runtimeStyle[d];
    a.runtimeStyle[d] = a.currentStyle[d];
    a.style[d] = c;
    c = a.style[f];
    a.style[d] = g;
    a.runtimeStyle[d] = h;
    return +c;
  };
  e.style.getIePixelDistance_ = function (a, c) {
    return (c = e.style.getCascadedStyle(a, c)) ? e.style.getIePixelValue_(a, c, "left", "pixelLeft") : 0;
  };
  e.style.getBox_ = function (a, c) {
    if (e.userAgent.IE) {
      var d = e.style.getIePixelDistance_(a, c + "Left"),
        f = e.style.getIePixelDistance_(a, c + "Right"),
        g = e.style.getIePixelDistance_(a, c + "Top");
      a = e.style.getIePixelDistance_(a, c + "Bottom");
      return new e.math.Box(g, f, a, d);
    }
    d = e.style.getComputedStyle(a, c + "Left");
    f = e.style.getComputedStyle(a, c + "Right");
    g = e.style.getComputedStyle(a, c + "Top");
    a = e.style.getComputedStyle(a, c + "Bottom");
    return new e.math.Box(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(d));
  };
  e.style.getPaddingBox = function (a) {
    return e.style.getBox_(a, "padding");
  };
  e.style.getMarginBox = function (a) {
    return e.style.getBox_(a, "margin");
  };
  e.style.ieBorderWidthKeywords_ = {
    thin: 2,
    medium: 4,
    thick: 6
  };
  e.style.getIePixelBorder_ = function (a, c) {
    if ("none" == e.style.getCascadedStyle(a, c + "Style")) return 0;
    c = e.style.getCascadedStyle(a, c + "Width");
    return c in e.style.ieBorderWidthKeywords_ ? e.style.ieBorderWidthKeywords_[c] : e.style.getIePixelValue_(a, c, "left", "pixelLeft");
  };
  e.style.getBorderBox = function (a) {
    if (e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(9)) {
      var c = e.style.getIePixelBorder_(a, "borderLeft"),
        d = e.style.getIePixelBorder_(a, "borderRight"),
        f = e.style.getIePixelBorder_(a, "borderTop");
      a = e.style.getIePixelBorder_(a, "borderBottom");
      return new e.math.Box(f, d, a, c);
    }
    c = e.style.getComputedStyle(a, "borderLeftWidth");
    d = e.style.getComputedStyle(a, "borderRightWidth");
    f = e.style.getComputedStyle(a, "borderTopWidth");
    a = e.style.getComputedStyle(a, "borderBottomWidth");
    return new e.math.Box(parseFloat(f), parseFloat(d), parseFloat(a), parseFloat(c));
  };
  e.style.getFontFamily = function (a) {
    var c = e.dom.getOwnerDocument(a),
      d = "";
    if (c.body.createTextRange && e.dom.contains(c, a)) {
      c = c.body.createTextRange();
      c.moveToElementText(a);
      try {
        d = c.queryCommandValue("FontName");
      } catch (f) {
        d = "";
      }
    }
    d || (d = e.style.getStyle_(a, "fontFamily"));
    a = d.split(",");
    1 < a.length && (d = a[0]);
    return e.string.stripQuotes(d, "\"'");
  };
  e.style.lengthUnitRegex_ = /[^\d]+$/;
  e.style.getLengthUnits = function (a) {
    return (a = a.match(e.style.lengthUnitRegex_)) && a[0] || null;
  };
  e.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {
    cm: 1,
    "in": 1,
    mm: 1,
    pc: 1,
    pt: 1
  };
  e.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {
    em: 1,
    ex: 1
  };
  e.style.getFontSize = function (a) {
    var c = e.style.getStyle_(a, "fontSize"),
      d = e.style.getLengthUnits(c);
    if (c && "px" == d) return parseInt(c, 10);
    if (e.userAgent.IE) {
      if (String(d) in e.style.ABSOLUTE_CSS_LENGTH_UNITS_) return e.style.getIePixelValue_(a, c, "left", "pixelLeft");
      if (a.parentNode && a.parentNode.nodeType == e.dom.NodeType.ELEMENT && String(d) in e.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) return a = a.parentNode, d = e.style.getStyle_(a, "fontSize"), e.style.getIePixelValue_(a, c == d ? "1em" : c, "left", "pixelLeft");
    }
    d = e.dom.createDom("SPAN", {
      style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
    });
    e.dom.appendChild(a, d);
    c = d.offsetHeight;
    e.dom.removeNode(d);
    return c;
  };
  e.style.parseStyleAttribute = function (a) {
    var c = {};
    e.array.forEach(a.split(/\s*;\s*/), function (a) {
      var d = a.match(/\s*([\w-]+)\s*:(.+)/);
      d && (a = d[1], d = e.string.trim(d[2]), c[e.string.toCamelCase(a.toLowerCase())] = d);
    });
    return c;
  };
  e.style.toStyleAttribute = function (a) {
    var c = [];
    e.object.forEach(a, function (a, f) {
      c.push(e.string.toSelectorCase(f), ":", a, ";");
    });
    return c.join("");
  };
  e.style.setFloat = function (a, c) {
    a.style[e.userAgent.IE ? "styleFloat" : "cssFloat"] = c;
  };
  e.style.getFloat = function (a) {
    return a.style[e.userAgent.IE ? "styleFloat" : "cssFloat"] || "";
  };
  e.style.getScrollbarWidth = function (a) {
    var c = e.dom.createElement("DIV");
    a && (c.className = a);
    c.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
    a = e.dom.createElement("DIV");
    e.style.setSize(a, "200px", "200px");
    c.appendChild(a);
    e.dom.appendChild(e.dom.getDocument().body, c);
    a = c.offsetWidth - c.clientWidth;
    e.dom.removeNode(c);
    return a;
  };
  e.style.MATRIX_TRANSLATION_REGEX_ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  e.style.getCssTranslation = function (a) {
    a = e.style.getComputedTransform(a);
    return a ? (a = a.match(e.style.MATRIX_TRANSLATION_REGEX_)) ? new e.math.Coordinate(parseFloat(a[1]), parseFloat(a[2])) : new e.math.Coordinate(0, 0) : new e.math.Coordinate(0, 0);
  };
  e.events.EventHandler = function (a) {
    e.Disposable.call(this);
    this.handler_ = a;
    this.keys_ = {};
  };
  e.inherits(e.events.EventHandler, e.Disposable);
  e.events.EventHandler.typeArray_ = [];
  e.events.EventHandler.prototype.listen = function (a, c, d, f) {
    return this.listen_(a, c, d, f);
  };
  e.events.EventHandler.prototype.listenWithScope = function (a, c, d, f, g) {
    return this.listen_(a, c, d, f, g);
  };
  e.events.EventHandler.prototype.listen_ = function (a, c, d, f, g) {
    Array.isArray(c) || (c && (e.events.EventHandler.typeArray_[0] = c.toString()), c = e.events.EventHandler.typeArray_);
    for (var h = 0; h < c.length; h++) {
      var k = e.events.listen(a, c[h], d || this.handleEvent, f || !1, g || this.handler_ || this);
      if (!k) break;
      this.keys_[k.key] = k;
    }
    return this;
  };
  e.events.EventHandler.prototype.listenOnce = function (a, c, d, f) {
    return this.listenOnce_(a, c, d, f);
  };
  e.events.EventHandler.prototype.listenOnceWithScope = function (a, c, d, f, g) {
    return this.listenOnce_(a, c, d, f, g);
  };
  e.events.EventHandler.prototype.listenOnce_ = function (a, c, d, f, g) {
    if (Array.isArray(c)) for (var h = 0; h < c.length; h++) this.listenOnce_(a, c[h], d, f, g);else {
      a = e.events.listenOnce(a, c, d || this.handleEvent, f, g || this.handler_ || this);
      if (!a) return this;
      this.keys_[a.key] = a;
    }
    return this;
  };
  e.events.EventHandler.prototype.listenWithWrapper = function (a, c, d, f) {
    return this.listenWithWrapper_(a, c, d, f);
  };
  e.events.EventHandler.prototype.listenWithWrapperAndScope = function (a, c, d, f, g) {
    return this.listenWithWrapper_(a, c, d, f, g);
  };
  e.events.EventHandler.prototype.listenWithWrapper_ = function (a, c, d, f, g) {
    c.listen(a, d, f, g || this.handler_ || this, this);
    return this;
  };
  e.events.EventHandler.prototype.getListenerCount = function () {
    var a = 0,
      c;
    for (c in this.keys_) Object.prototype.hasOwnProperty.call(this.keys_, c) && a++;
    return a;
  };
  e.events.EventHandler.prototype.unlisten = function (a, c, d, f, g) {
    if (Array.isArray(c)) for (var h = 0; h < c.length; h++) this.unlisten(a, c[h], d, f, g);else if (f = e.isObject(f) ? !!f.capture : !!f, a = e.events.getListener(a, c, d || this.handleEvent, f, g || this.handler_ || this)) e.events.unlistenByKey(a), delete this.keys_[a.key];
    return this;
  };
  e.events.EventHandler.prototype.unlistenWithWrapper = function (a, c, d, f, g) {
    c.unlisten(a, d, f, g || this.handler_ || this, this);
    return this;
  };
  e.events.EventHandler.prototype.removeAll = function () {
    e.object.forEach(this.keys_, function (a, c) {
      this.keys_.hasOwnProperty(c) && e.events.unlistenByKey(a);
    }, this);
    this.keys_ = {};
  };
  e.events.EventHandler.prototype.disposeInternal = function () {
    e.events.EventHandler.superClass_.disposeInternal.call(this);
    this.removeAll();
  };
  e.events.EventHandler.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  e.ui = {};
  e.ui.IdGenerator = function () {};
  e.addSingletonGetter(e.ui.IdGenerator);
  e.ui.IdGenerator.prototype.nextId_ = 0;
  e.ui.IdGenerator.prototype.idPrefix_ = "";
  e.ui.IdGenerator.prototype.setIdPrefix = function (a) {
    this.idPrefix_ = a;
  };
  e.ui.IdGenerator.prototype.getNextUniqueId = function () {
    return this.idPrefix_ + ":" + (this.nextId_++).toString(36);
  };
  e.ui.Component = function (a) {
    e.events.EventTarget.call(this);
    this.dom_ = a || e.dom.getDomHelper();
    this.rightToLeft_ = e.ui.Component.defaultRightToLeft_;
    this.id_ = null;
    this.inDocument_ = !1;
    this.element_ = null;
    this.googUiComponentHandler_ = void 0;
    this.childIndex_ = this.children_ = this.parent_ = this.model_ = null;
    this.pointerEventsEnabled_ = this.wasDecorated_ = !1;
  };
  e.inherits(e.ui.Component, e.events.EventTarget);
  e.ui.Component.ALLOW_DETACHED_DECORATION = !1;
  e.ui.Component.prototype.idGenerator_ = e.ui.IdGenerator.getInstance();
  e.ui.Component.DEFAULT_BIDI_DIR = 0;
  e.ui.Component.defaultRightToLeft_ = 1 == e.ui.Component.DEFAULT_BIDI_DIR ? !1 : -1 == e.ui.Component.DEFAULT_BIDI_DIR ? !0 : null;
  e.ui.Component.EventType = {
    BEFORE_SHOW: "beforeshow",
    SHOW: "show",
    HIDE: "hide",
    DISABLE: "disable",
    ENABLE: "enable",
    HIGHLIGHT: "highlight",
    UNHIGHLIGHT: "unhighlight",
    ACTIVATE: "activate",
    DEACTIVATE: "deactivate",
    SELECT: "select",
    UNSELECT: "unselect",
    CHECK: "check",
    UNCHECK: "uncheck",
    FOCUS: "focus",
    BLUR: "blur",
    OPEN: "open",
    CLOSE: "close",
    ENTER: "enter",
    LEAVE: "leave",
    ACTION: "action",
    CHANGE: "change"
  };
  e.ui.Component.Error = {
    NOT_SUPPORTED: "Method not supported",
    DECORATE_INVALID: "Invalid element to decorate",
    ALREADY_RENDERED: "Component already rendered",
    PARENT_UNABLE_TO_BE_SET: "Unable to set parent component",
    CHILD_INDEX_OUT_OF_BOUNDS: "Child component index out of bounds",
    NOT_OUR_CHILD: "Child is not in parent component",
    NOT_IN_DOCUMENT: "Operation not supported while component is not in document",
    STATE_INVALID: "Invalid component state"
  };
  e.ui.Component.State = {
    ALL: 255,
    DISABLED: 1,
    HOVER: 2,
    ACTIVE: 4,
    SELECTED: 8,
    CHECKED: 16,
    FOCUSED: 32,
    OPENED: 64
  };
  e.ui.Component.getStateTransitionEvent = function (a, c) {
    switch (a) {
      case e.ui.Component.State.DISABLED:
        return c ? e.ui.Component.EventType.DISABLE : e.ui.Component.EventType.ENABLE;
      case e.ui.Component.State.HOVER:
        return c ? e.ui.Component.EventType.HIGHLIGHT : e.ui.Component.EventType.UNHIGHLIGHT;
      case e.ui.Component.State.ACTIVE:
        return c ? e.ui.Component.EventType.ACTIVATE : e.ui.Component.EventType.DEACTIVATE;
      case e.ui.Component.State.SELECTED:
        return c ? e.ui.Component.EventType.SELECT : e.ui.Component.EventType.UNSELECT;
      case e.ui.Component.State.CHECKED:
        return c ? e.ui.Component.EventType.CHECK : e.ui.Component.EventType.UNCHECK;
      case e.ui.Component.State.FOCUSED:
        return c ? e.ui.Component.EventType.FOCUS : e.ui.Component.EventType.BLUR;
      case e.ui.Component.State.OPENED:
        return c ? e.ui.Component.EventType.OPEN : e.ui.Component.EventType.CLOSE;
    }
    throw Error(e.ui.Component.Error.STATE_INVALID);
  };
  e.ui.Component.setDefaultRightToLeft = function (a) {
    e.ui.Component.defaultRightToLeft_ = a;
  };
  e.ui.Component.prototype.getId = function () {
    return this.id_ || (this.id_ = this.idGenerator_.getNextUniqueId());
  };
  e.ui.Component.prototype.setId = function (a) {
    this.parent_ && this.parent_.childIndex_ && (e.object.remove(this.parent_.childIndex_, this.id_), e.object.add(this.parent_.childIndex_, a, this));
    this.id_ = a;
  };
  e.ui.Component.prototype.getElement = function () {
    return this.element_;
  };
  e.ui.Component.prototype.getElementStrict = function () {
    var a = this.element_;
    e.asserts.assert(a, "Can not call getElementStrict before rendering/decorating.");
    return a;
  };
  e.ui.Component.prototype.setElementInternal = function (a) {
    this.element_ = a;
  };
  e.ui.Component.prototype.getElementsByClass = function (a) {
    return this.element_ ? this.dom_.getElementsByClass(a, this.element_) : [];
  };
  e.ui.Component.prototype.getElementByClass = function (a) {
    return this.element_ ? this.dom_.getElementByClass(a, this.element_) : null;
  };
  e.ui.Component.prototype.getRequiredElementByClass = function (a) {
    var c = this.getElementByClass(a);
    e.asserts.assert(c, "Expected element in component with class: %s", a);
    return c;
  };
  e.ui.Component.prototype.getHandler = function () {
    this.googUiComponentHandler_ || (this.googUiComponentHandler_ = new e.events.EventHandler(this));
    return e.asserts.assert(this.googUiComponentHandler_);
  };
  e.ui.Component.prototype.setParent = function (a) {
    if (this == a) throw Error(e.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    if (a && this.parent_ && this.id_ && this.parent_.getChild(this.id_) && this.parent_ != a) throw Error(e.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    this.parent_ = a;
    e.ui.Component.superClass_.setParentEventTarget.call(this, a);
  };
  e.ui.Component.prototype.getParent = function () {
    return this.parent_;
  };
  e.ui.Component.prototype.setParentEventTarget = function (a) {
    if (this.parent_ && this.parent_ != a) throw Error(e.ui.Component.Error.NOT_SUPPORTED);
    e.ui.Component.superClass_.setParentEventTarget.call(this, a);
  };
  e.ui.Component.prototype.getDomHelper = function () {
    return this.dom_;
  };
  e.ui.Component.prototype.isInDocument = function () {
    return this.inDocument_;
  };
  e.ui.Component.prototype.createDom = function () {
    this.element_ = this.dom_.createElement("DIV");
  };
  e.ui.Component.prototype.render = function (a) {
    this.render_(a);
  };
  e.ui.Component.prototype.renderBefore = function (a) {
    this.render_(a.parentNode, a);
  };
  e.ui.Component.prototype.render_ = function (a, c) {
    if (this.inDocument_) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.element_ || this.createDom();
    a ? a.insertBefore(this.element_, c || null) : this.dom_.getDocument().body.appendChild(this.element_);
    this.parent_ && !this.parent_.isInDocument() || this.enterDocument();
  };
  e.ui.Component.prototype.decorate = function (a) {
    if (this.inDocument_) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    if (a && this.canDecorate(a)) {
      this.wasDecorated_ = !0;
      var c = e.dom.getOwnerDocument(a);
      this.dom_ && this.dom_.getDocument() == c || (this.dom_ = e.dom.getDomHelper(a));
      this.decorateInternal(a);
      e.ui.Component.ALLOW_DETACHED_DECORATION && !e.dom.contains(c, a) || this.enterDocument();
    } else throw Error(e.ui.Component.Error.DECORATE_INVALID);
  };
  e.ui.Component.prototype.canDecorate = function () {
    return !0;
  };
  e.ui.Component.prototype.wasDecorated = function () {
    return this.wasDecorated_;
  };
  e.ui.Component.prototype.decorateInternal = function (a) {
    this.element_ = a;
  };
  e.ui.Component.prototype.enterDocument = function () {
    this.inDocument_ = !0;
    this.forEachChild(function (a) {
      !a.isInDocument() && a.getElement() && a.enterDocument();
    });
  };
  e.ui.Component.prototype.exitDocument = function () {
    this.forEachChild(function (a) {
      a.isInDocument() && a.exitDocument();
    });
    this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll();
    this.inDocument_ = !1;
  };
  e.ui.Component.prototype.disposeInternal = function () {
    this.inDocument_ && this.exitDocument();
    this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
    this.forEachChild(function (a) {
      a.dispose();
    });
    !this.wasDecorated_ && this.element_ && e.dom.removeNode(this.element_);
    this.parent_ = this.model_ = this.element_ = this.childIndex_ = this.children_ = null;
    e.ui.Component.superClass_.disposeInternal.call(this);
  };
  e.ui.Component.prototype.makeId = function (a) {
    return this.getId() + "." + a;
  };
  e.ui.Component.prototype.makeIds = function (a) {
    var c = {},
      d;
    for (d in a) c[d] = this.makeId(a[d]);
    return c;
  };
  e.ui.Component.prototype.getModel = function () {
    return this.model_;
  };
  e.ui.Component.prototype.setModel = function (a) {
    this.model_ = a;
  };
  e.ui.Component.prototype.getFragmentFromId = function (a) {
    return a.substring(this.getId().length + 1);
  };
  e.ui.Component.prototype.getElementByFragment = function (a) {
    if (!this.inDocument_) throw Error(e.ui.Component.Error.NOT_IN_DOCUMENT);
    return this.dom_.getElement(this.makeId(a));
  };
  e.ui.Component.prototype.addChild = function (a, c) {
    this.addChildAt(a, this.getChildCount(), c);
  };
  e.ui.Component.prototype.addChildAt = function (a, c, d) {
    e.asserts.assert(!!a, "Provided element must not be null.");
    if (a.inDocument_ && (d || !this.inDocument_)) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    if (0 > c || c > this.getChildCount()) throw Error(e.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);
    this.childIndex_ && this.children_ || (this.childIndex_ = {}, this.children_ = []);
    a.getParent() == this ? (e.object.set(this.childIndex_, a.getId(), a), e.array.remove(this.children_, a)) : e.object.add(this.childIndex_, a.getId(), a);
    a.setParent(this);
    e.array.insertAt(this.children_, a, c);
    a.inDocument_ && this.inDocument_ && a.getParent() == this ? (d = this.getContentElement(), c = d.childNodes[c] || null, c != a.getElement() && d.insertBefore(a.getElement(), c)) : d ? (this.element_ || this.createDom(), c = this.getChildAt(c + 1), a.render_(this.getContentElement(), c ? c.element_ : null)) : this.inDocument_ && !a.inDocument_ && a.element_ && a.element_.parentNode && a.element_.parentNode.nodeType == e.dom.NodeType.ELEMENT && a.enterDocument();
  };
  e.ui.Component.prototype.getContentElement = function () {
    return this.element_;
  };
  e.ui.Component.prototype.isRightToLeft = function () {
    null == this.rightToLeft_ && (this.rightToLeft_ = e.style.isRightToLeft(this.inDocument_ ? this.element_ : this.dom_.getDocument().body));
    return this.rightToLeft_;
  };
  e.ui.Component.prototype.setRightToLeft = function (a) {
    if (this.inDocument_) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.rightToLeft_ = a;
  };
  e.ui.Component.prototype.hasChildren = function () {
    return !!this.children_ && 0 != this.children_.length;
  };
  e.ui.Component.prototype.getChildCount = function () {
    return this.children_ ? this.children_.length : 0;
  };
  e.ui.Component.prototype.getChildIds = function () {
    var a = [];
    this.forEachChild(function (c) {
      a.push(c.getId());
    });
    return a;
  };
  e.ui.Component.prototype.getChild = function (a) {
    return this.childIndex_ && a ? e.object.get(this.childIndex_, a) || null : null;
  };
  e.ui.Component.prototype.getChildAt = function (a) {
    return this.children_ ? this.children_[a] || null : null;
  };
  e.ui.Component.prototype.forEachChild = function (a, c) {
    this.children_ && e.array.forEach(this.children_, a, c);
  };
  e.ui.Component.prototype.indexOfChild = function (a) {
    return this.children_ && a ? e.array.indexOf(this.children_, a) : -1;
  };
  e.ui.Component.prototype.removeChild = function (a, c) {
    if (a) {
      var d = "string" === typeof a ? a : a.getId();
      a = this.getChild(d);
      d && a && (e.object.remove(this.childIndex_, d), e.array.remove(this.children_, a), c && (a.exitDocument(), a.element_ && e.dom.removeNode(a.element_)), a.setParent(null));
    }
    if (!a) throw Error(e.ui.Component.Error.NOT_OUR_CHILD);
    return a;
  };
  e.ui.Component.prototype.removeChildAt = function (a, c) {
    return this.removeChild(this.getChildAt(a), c);
  };
  e.ui.Component.prototype.removeChildren = function (a) {
    for (var c = []; this.hasChildren();) c.push(this.removeChildAt(0, a));
    return c;
  };
  e.ui.Component.prototype.pointerEventsEnabled = function () {
    return this.pointerEventsEnabled_;
  };
  e.ui.Component.prototype.setPointerEventsEnabled = function (a) {
    if (this.inDocument_) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.pointerEventsEnabled_ = a;
  };
  e.a11y = {};
  e.a11y.aria = {};
  e.a11y.aria.Role = {
    ALERT: "alert",
    ALERTDIALOG: "alertdialog",
    APPLICATION: "application",
    ARTICLE: "article",
    BANNER: "banner",
    BUTTON: "button",
    CHECKBOX: "checkbox",
    COLUMNHEADER: "columnheader",
    COMBOBOX: "combobox",
    COMPLEMENTARY: "complementary",
    CONTENTINFO: "contentinfo",
    DEFINITION: "definition",
    DIALOG: "dialog",
    DIRECTORY: "directory",
    DOCUMENT: "document",
    FORM: "form",
    GRID: "grid",
    GRIDCELL: "gridcell",
    GROUP: "group",
    HEADING: "heading",
    IMG: "img",
    LINK: "link",
    LIST: "list",
    LISTBOX: "listbox",
    LISTITEM: "listitem",
    LOG: "log",
    MAIN: "main",
    MARQUEE: "marquee",
    MATH: "math",
    MENU: "menu",
    MENUBAR: "menubar",
    MENU_ITEM: "menuitem",
    MENU_ITEM_CHECKBOX: "menuitemcheckbox",
    MENU_ITEM_RADIO: "menuitemradio",
    NAVIGATION: "navigation",
    NOTE: "note",
    OPTION: "option",
    PRESENTATION: "presentation",
    PROGRESSBAR: "progressbar",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    REGION: "region",
    ROW: "row",
    ROWGROUP: "rowgroup",
    ROWHEADER: "rowheader",
    SCROLLBAR: "scrollbar",
    SEARCH: "search",
    SEPARATOR: "separator",
    SLIDER: "slider",
    SPINBUTTON: "spinbutton",
    STATUS: "status",
    TAB: "tab",
    TAB_LIST: "tablist",
    TAB_PANEL: "tabpanel",
    TEXTBOX: "textbox",
    TEXTINFO: "textinfo",
    TIMER: "timer",
    TOOLBAR: "toolbar",
    TOOLTIP: "tooltip",
    TREE: "tree",
    TREEGRID: "treegrid",
    TREEITEM: "treeitem"
  };
  e.a11y.aria.State = {
    ACTIVEDESCENDANT: "activedescendant",
    ATOMIC: "atomic",
    AUTOCOMPLETE: "autocomplete",
    BUSY: "busy",
    CHECKED: "checked",
    COLINDEX: "colindex",
    CONTROLS: "controls",
    DESCRIBEDBY: "describedby",
    DISABLED: "disabled",
    DROPEFFECT: "dropeffect",
    EXPANDED: "expanded",
    FLOWTO: "flowto",
    GRABBED: "grabbed",
    HASPOPUP: "haspopup",
    HIDDEN: "hidden",
    INVALID: "invalid",
    LABEL: "label",
    LABELLEDBY: "labelledby",
    LEVEL: "level",
    LIVE: "live",
    MULTILINE: "multiline",
    MULTISELECTABLE: "multiselectable",
    ORIENTATION: "orientation",
    OWNS: "owns",
    POSINSET: "posinset",
    PRESSED: "pressed",
    READONLY: "readonly",
    RELEVANT: "relevant",
    REQUIRED: "required",
    ROWINDEX: "rowindex",
    SELECTED: "selected",
    SETSIZE: "setsize",
    SORT: "sort",
    VALUEMAX: "valuemax",
    VALUEMIN: "valuemin",
    VALUENOW: "valuenow",
    VALUETEXT: "valuetext"
  };
  e.a11y.aria.AutoCompleteValues = {
    INLINE: "inline",
    LIST: "list",
    BOTH: "both",
    NONE: "none"
  };
  e.a11y.aria.DropEffectValues = {
    COPY: "copy",
    MOVE: "move",
    LINK: "link",
    EXECUTE: "execute",
    POPUP: "popup",
    NONE: "none"
  };
  e.a11y.aria.LivePriority = {
    OFF: "off",
    POLITE: "polite",
    ASSERTIVE: "assertive"
  };
  e.a11y.aria.OrientationValues = {
    VERTICAL: "vertical",
    HORIZONTAL: "horizontal"
  };
  e.a11y.aria.RelevantValues = {
    ADDITIONS: "additions",
    REMOVALS: "removals",
    TEXT: "text",
    ALL: "all"
  };
  e.a11y.aria.SortValues = {
    ASCENDING: "ascending",
    DESCENDING: "descending",
    NONE: "none",
    OTHER: "other"
  };
  e.a11y.aria.CheckedValues = {
    TRUE: "true",
    FALSE: "false",
    MIXED: "mixed",
    UNDEFINED: "undefined"
  };
  e.a11y.aria.ExpandedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
  };
  e.a11y.aria.GrabbedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
  };
  e.a11y.aria.InvalidValues = {
    FALSE: "false",
    TRUE: "true",
    GRAMMAR: "grammar",
    SPELLING: "spelling"
  };
  e.a11y.aria.PressedValues = {
    TRUE: "true",
    FALSE: "false",
    MIXED: "mixed",
    UNDEFINED: "undefined"
  };
  e.a11y.aria.SelectedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
  };
  e.a11y.aria.datatables = {};
  e.a11y.aria.datatables.getDefaultValuesMap = function () {
    e.a11y.aria.DefaultStateValueMap_ || (e.a11y.aria.DefaultStateValueMap_ = {
      [e.a11y.aria.State.ATOMIC]: !1,
      [e.a11y.aria.State.AUTOCOMPLETE]: "none",
      [e.a11y.aria.State.DROPEFFECT]: "none",
      [e.a11y.aria.State.HASPOPUP]: !1,
      [e.a11y.aria.State.LIVE]: "off",
      [e.a11y.aria.State.MULTILINE]: !1,
      [e.a11y.aria.State.MULTISELECTABLE]: !1,
      [e.a11y.aria.State.ORIENTATION]: "vertical",
      [e.a11y.aria.State.READONLY]: !1,
      [e.a11y.aria.State.RELEVANT]: "additions text",
      [e.a11y.aria.State.REQUIRED]: !1,
      [e.a11y.aria.State.SORT]: "none",
      [e.a11y.aria.State.BUSY]: !1,
      [e.a11y.aria.State.DISABLED]: !1,
      [e.a11y.aria.State.HIDDEN]: !1,
      [e.a11y.aria.State.INVALID]: "false"
    });
    return e.a11y.aria.DefaultStateValueMap_;
  };
  e.a11y.aria.ARIA_PREFIX_ = "aria-";
  e.a11y.aria.ROLE_ATTRIBUTE_ = "role";
  e.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = e.object.createSet("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
  e.a11y.aria.CONTAINER_ROLES_ = [e.a11y.aria.Role.COMBOBOX, e.a11y.aria.Role.GRID, e.a11y.aria.Role.GROUP, e.a11y.aria.Role.LISTBOX, e.a11y.aria.Role.MENU, e.a11y.aria.Role.MENUBAR, e.a11y.aria.Role.RADIOGROUP, e.a11y.aria.Role.ROW, e.a11y.aria.Role.ROWGROUP, e.a11y.aria.Role.TAB_LIST, e.a11y.aria.Role.TEXTBOX, e.a11y.aria.Role.TOOLBAR, e.a11y.aria.Role.TREE, e.a11y.aria.Role.TREEGRID];
  e.a11y.aria.setRole = function (a, c) {
    c ? (e.asserts.ENABLE_ASSERTS && e.asserts.assert(e.object.containsValue(e.a11y.aria.Role, c), "No such ARIA role " + c), a.setAttribute(e.a11y.aria.ROLE_ATTRIBUTE_, c)) : e.a11y.aria.removeRole(a);
  };
  e.a11y.aria.getRole = function (a) {
    return a.getAttribute(e.a11y.aria.ROLE_ATTRIBUTE_) || null;
  };
  e.a11y.aria.removeRole = function (a) {
    a.removeAttribute(e.a11y.aria.ROLE_ATTRIBUTE_);
  };
  e.a11y.aria.setState = function (a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    var f = e.a11y.aria.getAriaAttributeName_(c);
    "" === d || void 0 == d ? (d = e.a11y.aria.datatables.getDefaultValuesMap(), c in d ? a.setAttribute(f, d[c]) : a.removeAttribute(f)) : a.setAttribute(f, d);
  };
  e.a11y.aria.toggleState = function (a, c) {
    var d = e.a11y.aria.getState(a, c);
    e.string.isEmptyOrWhitespace(e.string.makeSafe(d)) || "true" == d || "false" == d ? e.a11y.aria.setState(a, c, "true" == d ? "false" : "true") : e.a11y.aria.removeState(a, c);
  };
  e.a11y.aria.removeState = function (a, c) {
    a.removeAttribute(e.a11y.aria.getAriaAttributeName_(c));
  };
  e.a11y.aria.getState = function (a, c) {
    a = a.getAttribute(e.a11y.aria.getAriaAttributeName_(c));
    return null == a || void 0 == a ? "" : String(a);
  };
  e.a11y.aria.getActiveDescendant = function (a) {
    var c = e.a11y.aria.getState(a, e.a11y.aria.State.ACTIVEDESCENDANT);
    return e.dom.getOwnerDocument(a).getElementById(c);
  };
  e.a11y.aria.setActiveDescendant = function (a, c) {
    var d = "";
    c && (d = c.id, e.asserts.assert(d, "The active element should have an id."));
    e.a11y.aria.setState(a, e.a11y.aria.State.ACTIVEDESCENDANT, d);
  };
  e.a11y.aria.getLabel = function (a) {
    return e.a11y.aria.getState(a, e.a11y.aria.State.LABEL);
  };
  e.a11y.aria.setLabel = function (a, c) {
    e.a11y.aria.setState(a, e.a11y.aria.State.LABEL, c);
  };
  e.a11y.aria.assertRoleIsSetInternalUtil = function (a, c) {
    e.a11y.aria.TAGS_WITH_ASSUMED_ROLES_[a.tagName] || (a = e.a11y.aria.getRole(a), e.asserts.assert(null != a, "The element ARIA role cannot be null."), e.asserts.assert(e.array.contains(c, a), 'Non existing or incorrect role set for element.The role set is "' + a + '". The role should be any of "' + c + '". Check the ARIA specification for more details http://www.w3.org/TR/wai-aria/roles.'));
  };
  e.a11y.aria.getStateBoolean = function (a, c) {
    a = a.getAttribute(e.a11y.aria.getAriaAttributeName_(c));
    e.asserts.assert("boolean" === typeof a || null == a || "true" == a || "false" == a);
    return null == a ? a : "boolean" === typeof a ? a : "true" == a;
  };
  e.a11y.aria.getStateNumber = function (a, c) {
    a = a.getAttribute(e.a11y.aria.getAriaAttributeName_(c));
    e.asserts.assert((null == a || !isNaN(Number(a))) && "boolean" !== typeof a);
    return null == a ? null : Number(a);
  };
  e.a11y.aria.getStateString = function (a, c) {
    a = a.getAttribute(e.a11y.aria.getAriaAttributeName_(c));
    e.asserts.assert((null == a || "string" === typeof a) && ("" == a || isNaN(Number(a))) && "true" != a && "false" != a);
    return null == a || "" == a ? null : a;
  };
  e.a11y.aria.getStringArrayStateInternalUtil = function (a, c) {
    a = a.getAttribute(e.a11y.aria.getAriaAttributeName_(c));
    return e.a11y.aria.splitStringOnWhitespace_(a);
  };
  e.a11y.aria.hasState = function (a, c) {
    return a.hasAttribute(e.a11y.aria.getAriaAttributeName_(c));
  };
  e.a11y.aria.isContainerRole = function (a) {
    a = e.a11y.aria.getRole(a);
    return e.array.contains(e.a11y.aria.CONTAINER_ROLES_, a);
  };
  e.a11y.aria.splitStringOnWhitespace_ = function (a) {
    return a ? a.split(/\s+/) : [];
  };
  e.a11y.aria.getAriaAttributeName_ = function (a) {
    e.asserts.ENABLE_ASSERTS && (e.asserts.assert(a, "ARIA attribute cannot be empty."), e.asserts.assert(e.object.containsValue(e.a11y.aria.State, a), "No such ARIA attribute " + a));
    return e.a11y.aria.ARIA_PREFIX_ + a;
  };
  e.events.KeyCodes = {
    WIN_KEY_FF_LINUX: 0,
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PLUS_SIGN: 43,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    FF_SEMICOLON: 59,
    FF_EQUALS: 61,
    FF_DASH: 173,
    FF_HASH: 163,
    FF_JP_QUOTE: 58,
    QUESTION_MARK: 63,
    AT_SIGN: 64,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SCROLL_LOCK: 145,
    FIRST_MEDIA_KEY: 166,
    LAST_MEDIA_KEY: 183,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    TILDE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    MAC_WK_CMD_LEFT: 91,
    MAC_WK_CMD_RIGHT: 93,
    WIN_IME: 229,
    VK_NONAME: 252,
    PHANTOM: 255
  };
  e.events.KeyCodes.isTextModifyingKeyEvent = function (a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || a.keyCode >= e.events.KeyCodes.F1 && a.keyCode <= e.events.KeyCodes.F12) return !1;
    if (e.events.KeyCodes.isCharacterKey(a.keyCode)) return !0;
    switch (a.keyCode) {
      case e.events.KeyCodes.ALT:
      case e.events.KeyCodes.CAPS_LOCK:
      case e.events.KeyCodes.CONTEXT_MENU:
      case e.events.KeyCodes.CTRL:
      case e.events.KeyCodes.DOWN:
      case e.events.KeyCodes.END:
      case e.events.KeyCodes.ESC:
      case e.events.KeyCodes.HOME:
      case e.events.KeyCodes.INSERT:
      case e.events.KeyCodes.LEFT:
      case e.events.KeyCodes.MAC_FF_META:
      case e.events.KeyCodes.META:
      case e.events.KeyCodes.NUMLOCK:
      case e.events.KeyCodes.NUM_CENTER:
      case e.events.KeyCodes.PAGE_DOWN:
      case e.events.KeyCodes.PAGE_UP:
      case e.events.KeyCodes.PAUSE:
      case e.events.KeyCodes.PHANTOM:
      case e.events.KeyCodes.PRINT_SCREEN:
      case e.events.KeyCodes.RIGHT:
      case e.events.KeyCodes.SCROLL_LOCK:
      case e.events.KeyCodes.SHIFT:
      case e.events.KeyCodes.UP:
      case e.events.KeyCodes.VK_NONAME:
      case e.events.KeyCodes.WIN_KEY:
      case e.events.KeyCodes.WIN_KEY_RIGHT:
        return !1;
      case e.events.KeyCodes.WIN_KEY_FF_LINUX:
        return !e.userAgent.GECKO;
      default:
        return a.keyCode < e.events.KeyCodes.FIRST_MEDIA_KEY || a.keyCode > e.events.KeyCodes.LAST_MEDIA_KEY;
    }
  };
  e.events.KeyCodes.firesKeyPressEvent = function (a, c, d, f, g, h) {
    if (e.userAgent.WEBKIT && !e.userAgent.isVersionOrHigher("525")) return !0;
    if (e.userAgent.MAC && g) return e.events.KeyCodes.isCharacterKey(a);
    if (g && !f) return !1;
    if (!e.userAgent.GECKO) {
      "number" === typeof c && (c = e.events.KeyCodes.normalizeKeyCode(c));
      var k = c == e.events.KeyCodes.CTRL || c == e.events.KeyCodes.ALT || e.userAgent.MAC && c == e.events.KeyCodes.META,
        m = c == e.events.KeyCodes.SHIFT && (f || h);
      if ((!d || e.userAgent.MAC) && k || e.userAgent.MAC && m) return !1;
    }
    if ((e.userAgent.WEBKIT || e.userAgent.EDGE) && f && d) switch (a) {
      case e.events.KeyCodes.BACKSLASH:
      case e.events.KeyCodes.OPEN_SQUARE_BRACKET:
      case e.events.KeyCodes.CLOSE_SQUARE_BRACKET:
      case e.events.KeyCodes.TILDE:
      case e.events.KeyCodes.SEMICOLON:
      case e.events.KeyCodes.DASH:
      case e.events.KeyCodes.EQUALS:
      case e.events.KeyCodes.COMMA:
      case e.events.KeyCodes.PERIOD:
      case e.events.KeyCodes.SLASH:
      case e.events.KeyCodes.APOSTROPHE:
      case e.events.KeyCodes.SINGLE_QUOTE:
        return !1;
    }
    if (e.userAgent.IE && f && c == a) return !1;
    switch (a) {
      case e.events.KeyCodes.ENTER:
        return e.userAgent.GECKO ? h || g ? !1 : !(d && f) : !0;
      case e.events.KeyCodes.ESC:
        return !(e.userAgent.WEBKIT || e.userAgent.EDGE || e.userAgent.GECKO);
    }
    return e.userAgent.GECKO && (f || g || h) ? !1 : e.events.KeyCodes.isCharacterKey(a);
  };
  e.events.KeyCodes.isCharacterKey = function (a) {
    if (a >= e.events.KeyCodes.ZERO && a <= e.events.KeyCodes.NINE || a >= e.events.KeyCodes.NUM_ZERO && a <= e.events.KeyCodes.NUM_MULTIPLY || a >= e.events.KeyCodes.A && a <= e.events.KeyCodes.Z || (e.userAgent.WEBKIT || e.userAgent.EDGE) && 0 == a) return !0;
    switch (a) {
      case e.events.KeyCodes.SPACE:
      case e.events.KeyCodes.PLUS_SIGN:
      case e.events.KeyCodes.QUESTION_MARK:
      case e.events.KeyCodes.AT_SIGN:
      case e.events.KeyCodes.NUM_PLUS:
      case e.events.KeyCodes.NUM_MINUS:
      case e.events.KeyCodes.NUM_PERIOD:
      case e.events.KeyCodes.NUM_DIVISION:
      case e.events.KeyCodes.SEMICOLON:
      case e.events.KeyCodes.FF_SEMICOLON:
      case e.events.KeyCodes.DASH:
      case e.events.KeyCodes.EQUALS:
      case e.events.KeyCodes.FF_EQUALS:
      case e.events.KeyCodes.COMMA:
      case e.events.KeyCodes.PERIOD:
      case e.events.KeyCodes.SLASH:
      case e.events.KeyCodes.APOSTROPHE:
      case e.events.KeyCodes.SINGLE_QUOTE:
      case e.events.KeyCodes.OPEN_SQUARE_BRACKET:
      case e.events.KeyCodes.BACKSLASH:
      case e.events.KeyCodes.CLOSE_SQUARE_BRACKET:
      case e.events.KeyCodes.FF_HASH:
      case e.events.KeyCodes.FF_JP_QUOTE:
        return !0;
      case e.events.KeyCodes.FF_DASH:
        return e.userAgent.GECKO;
      default:
        return !1;
    }
  };
  e.events.KeyCodes.normalizeKeyCode = function (a) {
    return e.userAgent.GECKO ? e.events.KeyCodes.normalizeGeckoKeyCode(a) : e.userAgent.MAC && e.userAgent.WEBKIT ? e.events.KeyCodes.normalizeMacWebKitKeyCode(a) : a;
  };
  e.events.KeyCodes.normalizeGeckoKeyCode = function (a) {
    switch (a) {
      case e.events.KeyCodes.FF_EQUALS:
        return e.events.KeyCodes.EQUALS;
      case e.events.KeyCodes.FF_SEMICOLON:
        return e.events.KeyCodes.SEMICOLON;
      case e.events.KeyCodes.FF_DASH:
        return e.events.KeyCodes.DASH;
      case e.events.KeyCodes.MAC_FF_META:
        return e.events.KeyCodes.META;
      case e.events.KeyCodes.WIN_KEY_FF_LINUX:
        return e.events.KeyCodes.WIN_KEY;
      default:
        return a;
    }
  };
  e.events.KeyCodes.normalizeMacWebKitKeyCode = function (a) {
    switch (a) {
      case e.events.KeyCodes.MAC_WK_CMD_RIGHT:
        return e.events.KeyCodes.META;
      default:
        return a;
    }
  };
  e.events.KeyHandler = function (a, c) {
    e.events.EventTarget.call(this);
    a && this.attach(a, c);
  };
  e.inherits(e.events.KeyHandler, e.events.EventTarget);
  e.events.KeyHandler.prototype.element_ = null;
  e.events.KeyHandler.prototype.keyPressKey_ = null;
  e.events.KeyHandler.prototype.keyDownKey_ = null;
  e.events.KeyHandler.prototype.keyUpKey_ = null;
  e.events.KeyHandler.prototype.lastKey_ = -1;
  e.events.KeyHandler.prototype.keyCode_ = -1;
  e.events.KeyHandler.prototype.altKey_ = !1;
  e.events.KeyHandler.EventType = {
    KEY: "key"
  };
  e.events.KeyHandler.safariKey_ = {
    3: e.events.KeyCodes.ENTER,
    12: e.events.KeyCodes.NUMLOCK,
    63232: e.events.KeyCodes.UP,
    63233: e.events.KeyCodes.DOWN,
    63234: e.events.KeyCodes.LEFT,
    63235: e.events.KeyCodes.RIGHT,
    63236: e.events.KeyCodes.F1,
    63237: e.events.KeyCodes.F2,
    63238: e.events.KeyCodes.F3,
    63239: e.events.KeyCodes.F4,
    63240: e.events.KeyCodes.F5,
    63241: e.events.KeyCodes.F6,
    63242: e.events.KeyCodes.F7,
    63243: e.events.KeyCodes.F8,
    63244: e.events.KeyCodes.F9,
    63245: e.events.KeyCodes.F10,
    63246: e.events.KeyCodes.F11,
    63247: e.events.KeyCodes.F12,
    63248: e.events.KeyCodes.PRINT_SCREEN,
    63272: e.events.KeyCodes.DELETE,
    63273: e.events.KeyCodes.HOME,
    63275: e.events.KeyCodes.END,
    63276: e.events.KeyCodes.PAGE_UP,
    63277: e.events.KeyCodes.PAGE_DOWN,
    63289: e.events.KeyCodes.NUMLOCK,
    63302: e.events.KeyCodes.INSERT
  };
  e.events.KeyHandler.keyIdentifier_ = {
    Up: e.events.KeyCodes.UP,
    Down: e.events.KeyCodes.DOWN,
    Left: e.events.KeyCodes.LEFT,
    Right: e.events.KeyCodes.RIGHT,
    Enter: e.events.KeyCodes.ENTER,
    F1: e.events.KeyCodes.F1,
    F2: e.events.KeyCodes.F2,
    F3: e.events.KeyCodes.F3,
    F4: e.events.KeyCodes.F4,
    F5: e.events.KeyCodes.F5,
    F6: e.events.KeyCodes.F6,
    F7: e.events.KeyCodes.F7,
    F8: e.events.KeyCodes.F8,
    F9: e.events.KeyCodes.F9,
    F10: e.events.KeyCodes.F10,
    F11: e.events.KeyCodes.F11,
    F12: e.events.KeyCodes.F12,
    "U+007F": e.events.KeyCodes.DELETE,
    Home: e.events.KeyCodes.HOME,
    End: e.events.KeyCodes.END,
    PageUp: e.events.KeyCodes.PAGE_UP,
    PageDown: e.events.KeyCodes.PAGE_DOWN,
    Insert: e.events.KeyCodes.INSERT
  };
  e.events.KeyHandler.USES_KEYDOWN_ = !e.userAgent.WEBKIT || e.userAgent.isVersionOrHigher("525");
  e.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ = e.userAgent.MAC && e.userAgent.GECKO;
  e.events.KeyHandler.prototype.handleKeyDown_ = function (a) {
    (e.userAgent.WEBKIT || e.userAgent.EDGE) && (this.lastKey_ == e.events.KeyCodes.CTRL && !a.ctrlKey || this.lastKey_ == e.events.KeyCodes.ALT && !a.altKey || e.userAgent.MAC && this.lastKey_ == e.events.KeyCodes.META && !a.metaKey) && this.resetState();
    -1 == this.lastKey_ && (a.ctrlKey && a.keyCode != e.events.KeyCodes.CTRL ? this.lastKey_ = e.events.KeyCodes.CTRL : a.altKey && a.keyCode != e.events.KeyCodes.ALT ? this.lastKey_ = e.events.KeyCodes.ALT : a.metaKey && a.keyCode != e.events.KeyCodes.META && (this.lastKey_ = e.events.KeyCodes.META));
    e.events.KeyHandler.USES_KEYDOWN_ && !e.events.KeyCodes.firesKeyPressEvent(a.keyCode, this.lastKey_, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.keyCode_ = e.events.KeyCodes.normalizeKeyCode(a.keyCode), e.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (this.altKey_ = a.altKey));
  };
  e.events.KeyHandler.prototype.resetState = function () {
    this.keyCode_ = this.lastKey_ = -1;
  };
  e.events.KeyHandler.prototype.handleKeyup_ = function (a) {
    this.resetState();
    this.altKey_ = a.altKey;
  };
  e.events.KeyHandler.prototype.handleEvent = function (a) {
    var c = a.getBrowserEvent(),
      d = c.altKey;
    if (e.userAgent.IE && a.type == e.events.EventType.KEYPRESS) {
      var f = this.keyCode_;
      var g = f != e.events.KeyCodes.ENTER && f != e.events.KeyCodes.ESC ? c.keyCode : 0;
    } else (e.userAgent.WEBKIT || e.userAgent.EDGE) && a.type == e.events.EventType.KEYPRESS ? (f = this.keyCode_, g = 0 <= c.charCode && 63232 > c.charCode && e.events.KeyCodes.isCharacterKey(f) ? c.charCode : 0) : e.userAgent.OPERA && !e.userAgent.WEBKIT ? (f = this.keyCode_, g = e.events.KeyCodes.isCharacterKey(f) ? c.keyCode : 0) : (a.type == e.events.EventType.KEYPRESS ? (e.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (d = this.altKey_), c.keyCode == c.charCode ? 32 > c.keyCode ? (f = c.keyCode, g = 0) : (f = this.keyCode_, g = c.charCode) : (f = c.keyCode || this.keyCode_, g = c.charCode || 0)) : (f = c.keyCode || this.keyCode_, g = c.charCode || 0), e.userAgent.MAC && g == e.events.KeyCodes.QUESTION_MARK && f == e.events.KeyCodes.WIN_KEY && (f = e.events.KeyCodes.SLASH));
    var h = f = e.events.KeyCodes.normalizeKeyCode(f);
    f ? 63232 <= f && f in e.events.KeyHandler.safariKey_ ? h = e.events.KeyHandler.safariKey_[f] : 25 == f && a.shiftKey && (h = 9) : c.keyIdentifier && c.keyIdentifier in e.events.KeyHandler.keyIdentifier_ && (h = e.events.KeyHandler.keyIdentifier_[c.keyIdentifier]);
    e.userAgent.GECKO && e.events.KeyHandler.USES_KEYDOWN_ && a.type == e.events.EventType.KEYPRESS && !e.events.KeyCodes.firesKeyPressEvent(h, this.lastKey_, a.shiftKey, a.ctrlKey, d, a.metaKey) || (a = h == this.lastKey_, this.lastKey_ = h, c = new e.events.KeyEvent(h, g, a, c), c.altKey = d, this.dispatchEvent(c));
  };
  e.events.KeyHandler.prototype.getElement = function () {
    return this.element_;
  };
  e.events.KeyHandler.prototype.attach = function (a, c) {
    this.keyUpKey_ && this.detach();
    this.element_ = a;
    this.keyPressKey_ = e.events.listen(this.element_, e.events.EventType.KEYPRESS, this, c);
    this.keyDownKey_ = e.events.listen(this.element_, e.events.EventType.KEYDOWN, this.handleKeyDown_, c, this);
    this.keyUpKey_ = e.events.listen(this.element_, e.events.EventType.KEYUP, this.handleKeyup_, c, this);
  };
  e.events.KeyHandler.prototype.detach = function () {
    this.keyPressKey_ && (e.events.unlistenByKey(this.keyPressKey_), e.events.unlistenByKey(this.keyDownKey_), e.events.unlistenByKey(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null);
    this.element_ = null;
    this.keyCode_ = this.lastKey_ = -1;
  };
  e.events.KeyHandler.prototype.disposeInternal = function () {
    e.events.KeyHandler.superClass_.disposeInternal.call(this);
    this.detach();
  };
  e.events.KeyEvent = function (a, c, d, f) {
    e.events.BrowserEvent.call(this, f);
    this.type = e.events.KeyHandler.EventType.KEY;
    this.keyCode = a;
    this.charCode = c;
    this.repeat = d;
  };
  e.inherits(e.events.KeyEvent, e.events.BrowserEvent);
  e.ui.ComponentUtil = {};
  e.ui.ComponentUtil.getMouseEventType = function (a) {
    return a.pointerEventsEnabled() ? e.events.PointerAsMouseEventType : e.events.MouseAsMouseEventType;
  };
  e.dom.classlist = {};
  e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = !1;
  e.dom.classlist.getClassName_ = function (a) {
    return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "";
  };
  e.dom.classlist.get = function (a) {
    return e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? a.classList : e.dom.classlist.getClassName_(a).match(/\S+/g) || [];
  };
  e.dom.classlist.set = function (a, c) {
    "string" == typeof a.className ? a.className = c : a.setAttribute && a.setAttribute("class", c);
  };
  e.dom.classlist.contains = function (a, c) {
    return e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? a.classList.contains(c) : e.array.contains(e.dom.classlist.get(a), c);
  };
  e.dom.classlist.add = function (a, c) {
    if (e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList) a.classList.add(c);else if (!e.dom.classlist.contains(a, c)) {
      var d = e.dom.classlist.getClassName_(a);
      e.dom.classlist.set(a, d + (0 < d.length ? " " + c : c));
    }
  };
  e.dom.classlist.addAll = function (a, c) {
    if (e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList) e.array.forEach(c, function (c) {
      e.dom.classlist.add(a, c);
    });else {
      var d = {};
      e.array.forEach(e.dom.classlist.get(a), function (a) {
        d[a] = !0;
      });
      e.array.forEach(c, function (a) {
        d[a] = !0;
      });
      c = "";
      for (var f in d) c += 0 < c.length ? " " + f : f;
      e.dom.classlist.set(a, c);
    }
  };
  e.dom.classlist.remove = function (a, c) {
    e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? a.classList.remove(c) : e.dom.classlist.contains(a, c) && e.dom.classlist.set(a, e.array.filter(e.dom.classlist.get(a), function (a) {
      return a != c;
    }).join(" "));
  };
  e.dom.classlist.removeAll = function (a, c) {
    e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? e.array.forEach(c, function (c) {
      e.dom.classlist.remove(a, c);
    }) : e.dom.classlist.set(a, e.array.filter(e.dom.classlist.get(a), function (a) {
      return !e.array.contains(c, a);
    }).join(" "));
  };
  e.dom.classlist.enable = function (a, c, d) {
    d ? e.dom.classlist.add(a, c) : e.dom.classlist.remove(a, c);
  };
  e.dom.classlist.enableAll = function (a, c, d) {
    (d ? e.dom.classlist.addAll : e.dom.classlist.removeAll)(a, c);
  };
  e.dom.classlist.swap = function (a, c, d) {
    return e.dom.classlist.contains(a, c) ? (e.dom.classlist.remove(a, c), e.dom.classlist.add(a, d), !0) : !1;
  };
  e.dom.classlist.toggle = function (a, c) {
    var d = !e.dom.classlist.contains(a, c);
    e.dom.classlist.enable(a, c, d);
    return d;
  };
  e.dom.classlist.addRemove = function (a, c, d) {
    e.dom.classlist.remove(a, c);
    e.dom.classlist.add(a, d);
  };
  e.ui.registry = {};
  e.ui.registry.getDefaultRenderer = function (a) {
    for (var c; a;) {
      c = e.getUid(a);
      if (c = e.ui.registry.defaultRenderers_[c]) break;
      a = e.object.getSuperClass(a);
    }
    return c ? e.isFunction(c.getInstance) ? c.getInstance() : new c() : null;
  };
  e.ui.registry.setDefaultRenderer = function (a, c) {
    if (!e.isFunction(a)) throw Error("Invalid component class " + a);
    if (!e.isFunction(c)) throw Error("Invalid renderer class " + c);
    a = e.getUid(a);
    e.ui.registry.defaultRenderers_[a] = c;
  };
  e.ui.registry.getDecoratorByClassName = function (a) {
    return a in e.ui.registry.decoratorFunctions_ ? e.ui.registry.decoratorFunctions_[a]() : null;
  };
  e.ui.registry.setDecoratorByClassName = function (a, c) {
    if (!a) throw Error("Invalid class name " + a);
    if (!e.isFunction(c)) throw Error("Invalid decorator function " + c);
    e.ui.registry.decoratorFunctions_[a] = c;
  };
  e.ui.registry.getDecorator = function (a) {
    e.asserts.assert(a);
    for (var c = e.dom.classlist.get(a), d = 0, f = c.length; d < f; d++) if (a = e.ui.registry.getDecoratorByClassName(c[d])) return a;
    return null;
  };
  e.ui.registry.reset = function () {
    e.ui.registry.defaultRenderers_ = {};
    e.ui.registry.decoratorFunctions_ = {};
  };
  e.ui.registry.defaultRenderers_ = {};
  e.ui.registry.decoratorFunctions_ = {};
  e.ui.ContainerRenderer = function (a) {
    this.ariaRole_ = a;
  };
  e.addSingletonGetter(e.ui.ContainerRenderer);
  e.ui.ContainerRenderer.getCustomRenderer = function (a, c) {
    a = new a();
    a.getCssClass = function () {
      return c;
    };
    return a;
  };
  e.ui.ContainerRenderer.CSS_CLASS = "goog-container";
  e.ui.ContainerRenderer.prototype.getAriaRole = function () {
    return this.ariaRole_;
  };
  e.ui.ContainerRenderer.prototype.enableTabIndex = function (a, c) {
    a && (a.tabIndex = c ? 0 : -1);
  };
  e.ui.ContainerRenderer.prototype.createDom = function (a) {
    return a.getDomHelper().createDom("DIV", this.getClassNames(a).join(" "));
  };
  e.ui.ContainerRenderer.prototype.getContentElement = function (a) {
    return a;
  };
  e.ui.ContainerRenderer.prototype.canDecorate = function (a) {
    return "DIV" == a.tagName;
  };
  e.ui.ContainerRenderer.prototype.decorate = function (a, c) {
    c.id && a.setId(c.id);
    var d = this.getCssClass(),
      f = !1,
      g = e.dom.classlist.get(c);
    g && e.array.forEach(g, function (c) {
      c == d ? f = !0 : c && this.setStateFromClassName(a, c, d);
    }, this);
    f || e.dom.classlist.add(c, d);
    this.decorateChildren(a, this.getContentElement(c));
    return c;
  };
  e.ui.ContainerRenderer.prototype.setStateFromClassName = function (a, c, d) {
    c == d + "-disabled" ? a.setEnabled(!1) : c == d + "-horizontal" ? a.setOrientation(e.ui.Container.Orientation.HORIZONTAL) : c == d + "-vertical" && a.setOrientation(e.ui.Container.Orientation.VERTICAL);
  };
  e.ui.ContainerRenderer.prototype.decorateChildren = function (a, c, d) {
    if (c) {
      d = d || c.firstChild;
      for (var f; d && d.parentNode == c;) {
        f = d.nextSibling;
        if (d.nodeType == e.dom.NodeType.ELEMENT) {
          var g = this.getDecoratorForChild(d);
          g && (g.setElementInternal(d), a.isEnabled() || g.setEnabled(!1), a.addChild(g), g.decorate(d));
        } else d.nodeValue && "" != e.string.trim(d.nodeValue) || c.removeChild(d);
        d = f;
      }
    }
  };
  e.ui.ContainerRenderer.prototype.getDecoratorForChild = function (a) {
    return e.ui.registry.getDecorator(a);
  };
  e.ui.ContainerRenderer.prototype.initializeDom = function (a) {
    a = a.getElement();
    e.asserts.assert(a, "The container DOM element cannot be null.");
    e.style.setUnselectable(a, !0, e.userAgent.GECKO);
    e.userAgent.IE && (a.hideFocus = !0);
    var c = this.getAriaRole();
    c && e.a11y.aria.setRole(a, c);
  };
  e.ui.ContainerRenderer.prototype.getKeyEventTarget = function (a) {
    return a.getElement();
  };
  e.ui.ContainerRenderer.prototype.getCssClass = function () {
    return e.ui.ContainerRenderer.CSS_CLASS;
  };
  e.ui.ContainerRenderer.prototype.getClassNames = function (a) {
    var c = this.getCssClass(),
      d = a.getOrientation() == e.ui.Container.Orientation.HORIZONTAL;
    d = [c, d ? c + "-horizontal" : c + "-vertical"];
    a.isEnabled() || d.push(c + "-disabled");
    return d;
  };
  e.ui.ContainerRenderer.prototype.getDefaultOrientation = function () {
    return e.ui.Container.Orientation.VERTICAL;
  };
  e.ui.ControlRenderer = function () {};
  e.addSingletonGetter(e.ui.ControlRenderer);
  e.tagUnsealableClass(e.ui.ControlRenderer);
  e.ui.ControlRenderer.getCustomRenderer = function (a, c) {
    a = new a();
    a.getCssClass = function () {
      return c;
    };
    return a;
  };
  e.ui.ControlRenderer.CSS_CLASS = "goog-control";
  e.ui.ControlRenderer.IE6_CLASS_COMBINATIONS = [];
  e.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_ = {
    [e.a11y.aria.Role.BUTTON]: e.a11y.aria.State.PRESSED,
    [e.a11y.aria.Role.CHECKBOX]: e.a11y.aria.State.CHECKED,
    [e.a11y.aria.Role.MENU_ITEM]: e.a11y.aria.State.SELECTED,
    [e.a11y.aria.Role.MENU_ITEM_CHECKBOX]: e.a11y.aria.State.CHECKED,
    [e.a11y.aria.Role.MENU_ITEM_RADIO]: e.a11y.aria.State.CHECKED,
    [e.a11y.aria.Role.RADIO]: e.a11y.aria.State.CHECKED,
    [e.a11y.aria.Role.TAB]: e.a11y.aria.State.SELECTED,
    [e.a11y.aria.Role.TREEITEM]: e.a11y.aria.State.SELECTED
  };
  e.ui.ControlRenderer.prototype.getAriaRole = function () {};
  e.ui.ControlRenderer.prototype.createDom = function (a) {
    return a.getDomHelper().createDom("DIV", this.getClassNames(a).join(" "), a.getContent());
  };
  e.ui.ControlRenderer.prototype.getContentElement = function (a) {
    return a;
  };
  e.ui.ControlRenderer.prototype.enableClassName = function (a, c, d) {
    if (a = a.getElement ? a.getElement() : a) {
      var f = [c];
      e.userAgent.IE && !e.userAgent.isVersionOrHigher("7") && (f = this.getAppliedCombinedClassNames_(e.dom.classlist.get(a), c), f.push(c));
      e.dom.classlist.enableAll(a, f, d);
    }
  };
  e.ui.ControlRenderer.prototype.enableExtraClassName = function (a, c, d) {
    this.enableClassName(a, c, d);
  };
  e.ui.ControlRenderer.prototype.canDecorate = function () {
    return !0;
  };
  e.ui.ControlRenderer.prototype.decorate = function (a, c) {
    c.id && a.setId(c.id);
    var d = this.getContentElement(c);
    d && d.firstChild ? a.setContentInternal(d.firstChild.nextSibling ? e.array.clone(d.childNodes) : d.firstChild) : a.setContentInternal(null);
    var f = 0,
      g = this.getCssClass(),
      h = this.getStructuralCssClass(),
      k = !1,
      m = !1,
      n = !1,
      p = e.array.toArray(e.dom.classlist.get(c));
    e.array.forEach(p, function (a) {
      k || a != g ? m || a != h ? f |= this.getStateFromClass(a) : m = !0 : (k = !0, h == g && (m = !0));
      this.getStateFromClass(a) == e.ui.Component.State.DISABLED && (e.asserts.assertElement(d), e.dom.isFocusableTabIndex(d) && e.dom.setFocusableTabIndex(d, !1));
    }, this);
    a.setStateInternal(f);
    k || (p.push(g), h == g && (m = !0));
    m || p.push(h);
    (a = a.getExtraClassNames()) && p.push.apply(p, a);
    if (e.userAgent.IE && !e.userAgent.isVersionOrHigher("7")) {
      var r = this.getAppliedCombinedClassNames_(p);
      0 < r.length && (p.push.apply(p, r), n = !0);
    }
    k && m && !a && !n || e.dom.classlist.set(c, p.join(" "));
    return c;
  };
  e.ui.ControlRenderer.prototype.initializeDom = function (a) {
    a.isRightToLeft() && this.setRightToLeft(a.getElement(), !0);
    a.isEnabled() && this.setFocusable(a, a.isVisible());
  };
  e.ui.ControlRenderer.prototype.setAriaRole = function (a, c) {
    if (c = c || this.getAriaRole()) {
      e.asserts.assert(a, "The element passed as a first parameter cannot be null.");
      var d = e.a11y.aria.getRole(a);
      c != d && e.a11y.aria.setRole(a, c);
    }
  };
  e.ui.ControlRenderer.prototype.setAriaStates = function (a, c) {
    e.asserts.assert(a);
    e.asserts.assert(c);
    var d = a.getAriaLabel();
    null != d && this.setAriaLabel(c, d);
    a.isVisible() || e.a11y.aria.setState(c, e.a11y.aria.State.HIDDEN, !a.isVisible());
    a.isEnabled() || this.updateAriaState(c, e.ui.Component.State.DISABLED, !a.isEnabled());
    a.isSupportedState(e.ui.Component.State.SELECTED) && this.updateAriaState(c, e.ui.Component.State.SELECTED, a.isSelected());
    a.isSupportedState(e.ui.Component.State.CHECKED) && this.updateAriaState(c, e.ui.Component.State.CHECKED, a.isChecked());
    a.isSupportedState(e.ui.Component.State.OPENED) && this.updateAriaState(c, e.ui.Component.State.OPENED, a.isOpen());
  };
  e.ui.ControlRenderer.prototype.setAriaLabel = function (a, c) {
    e.a11y.aria.setLabel(a, c);
  };
  e.ui.ControlRenderer.prototype.setAllowTextSelection = function (a, c) {
    e.style.setUnselectable(a, !c, !e.userAgent.IE && !e.userAgent.OPERA);
  };
  e.ui.ControlRenderer.prototype.setRightToLeft = function (a, c) {
    this.enableClassName(a, this.getStructuralCssClass() + "-rtl", c);
  };
  e.ui.ControlRenderer.prototype.isFocusable = function (a) {
    var c;
    return a.isSupportedState(e.ui.Component.State.FOCUSED) && (c = a.getKeyEventTarget()) ? e.dom.isFocusableTabIndex(c) : !1;
  };
  e.ui.ControlRenderer.prototype.setFocusable = function (a, c) {
    var d;
    if (a.isSupportedState(e.ui.Component.State.FOCUSED) && (d = a.getKeyEventTarget())) {
      if (!c && a.isFocused()) {
        try {
          d.blur();
        } catch (f) {}
        a.isFocused() && a.handleBlur(null);
      }
      e.dom.isFocusableTabIndex(d) != c && e.dom.setFocusableTabIndex(d, c);
    }
  };
  e.ui.ControlRenderer.prototype.setVisible = function (a, c) {
    e.style.setElementShown(a, c);
    a && e.a11y.aria.setState(a, e.a11y.aria.State.HIDDEN, !c);
  };
  e.ui.ControlRenderer.prototype.setState = function (a, c, d) {
    var f = a.getElement();
    if (f) {
      var g = this.getClassForState(c);
      g && this.enableClassName(a, g, d);
      this.updateAriaState(f, c, d);
    }
  };
  e.ui.ControlRenderer.prototype.updateAriaState = function (a, c, d) {
    e.ui.ControlRenderer.ariaAttributeMap_ || (e.ui.ControlRenderer.ariaAttributeMap_ = {
      [e.ui.Component.State.DISABLED]: e.a11y.aria.State.DISABLED,
      [e.ui.Component.State.SELECTED]: e.a11y.aria.State.SELECTED,
      [e.ui.Component.State.CHECKED]: e.a11y.aria.State.CHECKED,
      [e.ui.Component.State.OPENED]: e.a11y.aria.State.EXPANDED
    });
    e.asserts.assert(a, "The element passed as a first parameter cannot be null.");
    (c = e.ui.ControlRenderer.getAriaStateForAriaRole_(a, e.ui.ControlRenderer.ariaAttributeMap_[c])) && e.a11y.aria.setState(a, c, d);
  };
  e.ui.ControlRenderer.getAriaStateForAriaRole_ = function (a, c) {
    a = e.a11y.aria.getRole(a);
    if (!a) return c;
    a = e.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_[a] || c;
    return e.ui.ControlRenderer.isAriaState_(c) ? a : c;
  };
  e.ui.ControlRenderer.isAriaState_ = function (a) {
    return a == e.a11y.aria.State.CHECKED || a == e.a11y.aria.State.SELECTED;
  };
  e.ui.ControlRenderer.prototype.setContent = function (a, c) {
    var d = this.getContentElement(a);
    d && (e.dom.removeChildren(d), c && ("string" === typeof c ? e.dom.setTextContent(d, c) : (a = function (a) {
      if (a) {
        var c = e.dom.getOwnerDocument(d);
        d.appendChild("string" === typeof a ? c.createTextNode(a) : a);
      }
    }, Array.isArray(c) ? e.array.forEach(c, a) : !e.isArrayLike(c) || "nodeType" in c ? a(c) : e.array.forEach(e.array.clone(c), a))));
  };
  e.ui.ControlRenderer.prototype.getKeyEventTarget = function (a) {
    return a.getElement();
  };
  e.ui.ControlRenderer.prototype.getCssClass = function () {
    return e.ui.ControlRenderer.CSS_CLASS;
  };
  e.ui.ControlRenderer.prototype.getIe6ClassCombinations = function () {
    return [];
  };
  e.ui.ControlRenderer.prototype.getStructuralCssClass = function () {
    return this.getCssClass();
  };
  e.ui.ControlRenderer.prototype.getClassNames = function (a) {
    var c = this.getCssClass(),
      d = [c],
      f = this.getStructuralCssClass();
    f != c && d.push(f);
    c = this.getClassNamesForState(a.getState());
    d.push.apply(d, c);
    (a = a.getExtraClassNames()) && d.push.apply(d, a);
    e.userAgent.IE && !e.userAgent.isVersionOrHigher("7") && d.push.apply(d, this.getAppliedCombinedClassNames_(d));
    return d;
  };
  e.ui.ControlRenderer.prototype.getAppliedCombinedClassNames_ = function (a, c) {
    var d = [];
    c && (a = e.array.concat(a, [c]));
    e.array.forEach(this.getIe6ClassCombinations(), function (f) {
      !e.array.every(f, e.partial(e.array.contains, a)) || c && !e.array.contains(f, c) || d.push(f.join("_"));
    });
    return d;
  };
  e.ui.ControlRenderer.prototype.getClassNamesForState = function (a) {
    for (var c = []; a;) {
      var d = a & -a;
      c.push(this.getClassForState(d));
      a &= ~d;
    }
    return c;
  };
  e.ui.ControlRenderer.prototype.getClassForState = function (a) {
    this.classByState_ || this.createClassByStateMap_();
    return this.classByState_[a];
  };
  e.ui.ControlRenderer.prototype.getStateFromClass = function (a) {
    this.stateByClass_ || this.createStateByClassMap_();
    a = parseInt(this.stateByClass_[a], 10);
    return isNaN(a) ? 0 : a;
  };
  e.ui.ControlRenderer.prototype.createClassByStateMap_ = function () {
    var a = this.getStructuralCssClass(),
      c = !e.string.contains(e.string.normalizeWhitespace(a), " ");
    e.asserts.assert(c, "ControlRenderer has an invalid css class: '" + a + "'");
    this.classByState_ = {
      [e.ui.Component.State.DISABLED]: a + "-disabled",
      [e.ui.Component.State.HOVER]: a + "-hover",
      [e.ui.Component.State.ACTIVE]: a + "-active",
      [e.ui.Component.State.SELECTED]: a + "-selected",
      [e.ui.Component.State.CHECKED]: a + "-checked",
      [e.ui.Component.State.FOCUSED]: a + "-focused",
      [e.ui.Component.State.OPENED]: a + "-open"
    };
  };
  e.ui.ControlRenderer.prototype.createStateByClassMap_ = function () {
    this.classByState_ || this.createClassByStateMap_();
    this.stateByClass_ = e.object.transpose(this.classByState_);
  };
  e.ui.Control = function (a, c, d) {
    e.ui.Component.call(this, d);
    this.renderer_ = c || e.ui.registry.getDefaultRenderer(this.constructor);
    this.setContentInternal(void 0 !== a ? a : null);
    this.ariaLabel_ = null;
  };
  e.inherits(e.ui.Control, e.ui.Component);
  e.tagUnsealableClass(e.ui.Control);
  e.ui.Control.registerDecorator = e.ui.registry.setDecoratorByClassName;
  e.ui.Control.getDecorator = e.ui.registry.getDecorator;
  e.ui.Control.prototype.content_ = null;
  e.ui.Control.prototype.state_ = 0;
  e.ui.Control.prototype.supportedStates_ = e.ui.Component.State.DISABLED | e.ui.Component.State.HOVER | e.ui.Component.State.ACTIVE | e.ui.Component.State.FOCUSED;
  e.ui.Control.prototype.autoStates_ = e.ui.Component.State.ALL;
  e.ui.Control.prototype.statesWithTransitionEvents_ = 0;
  e.ui.Control.prototype.visible_ = !0;
  e.ui.Control.prototype.extraClassNames_ = null;
  e.ui.Control.prototype.handleMouseEvents_ = !0;
  e.ui.Control.prototype.allowTextSelection_ = !1;
  e.ui.Control.prototype.preferredAriaRole_ = null;
  e.ui.Control.prototype.isHandleMouseEvents = function () {
    return this.handleMouseEvents_;
  };
  e.ui.Control.prototype.setHandleMouseEvents = function (a) {
    this.isInDocument() && a != this.handleMouseEvents_ && this.enableMouseEventHandling_(a);
    this.handleMouseEvents_ = a;
  };
  e.ui.Control.prototype.getKeyEventTarget = function () {
    return this.renderer_.getKeyEventTarget(this);
  };
  e.ui.Control.prototype.getKeyHandler = function () {
    return this.keyHandler_ || (this.keyHandler_ = new e.events.KeyHandler());
  };
  e.ui.Control.prototype.getRenderer = function () {
    return this.renderer_;
  };
  e.ui.Control.prototype.setRenderer = function (a) {
    if (this.isInDocument()) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.getElement() && this.setElementInternal(null);
    this.renderer_ = a;
  };
  e.ui.Control.prototype.getExtraClassNames = function () {
    return this.extraClassNames_;
  };
  e.ui.Control.prototype.addClassName = function (a) {
    a && (this.extraClassNames_ ? e.array.contains(this.extraClassNames_, a) || this.extraClassNames_.push(a) : this.extraClassNames_ = [a], this.renderer_.enableExtraClassName(this, a, !0));
  };
  e.ui.Control.prototype.removeClassName = function (a) {
    a && this.extraClassNames_ && e.array.remove(this.extraClassNames_, a) && (0 == this.extraClassNames_.length && (this.extraClassNames_ = null), this.renderer_.enableExtraClassName(this, a, !1));
  };
  e.ui.Control.prototype.enableClassName = function (a, c) {
    c ? this.addClassName(a) : this.removeClassName(a);
  };
  e.ui.Control.prototype.createDom = function () {
    var a = this.renderer_.createDom(this);
    this.setElementInternal(a);
    this.renderer_.setAriaRole(a, this.getPreferredAriaRole());
    this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(a, !1);
    this.isVisible() || this.renderer_.setVisible(a, !1);
  };
  e.ui.Control.prototype.getPreferredAriaRole = function () {
    return this.preferredAriaRole_;
  };
  e.ui.Control.prototype.setPreferredAriaRole = function (a) {
    this.preferredAriaRole_ = a;
  };
  e.ui.Control.prototype.getAriaLabel = function () {
    return this.ariaLabel_;
  };
  e.ui.Control.prototype.setAriaLabel = function (a) {
    this.ariaLabel_ = a;
    var c = this.getElement();
    c && this.renderer_.setAriaLabel(c, a);
  };
  e.ui.Control.prototype.getContentElement = function () {
    return this.renderer_.getContentElement(this.getElement());
  };
  e.ui.Control.prototype.canDecorate = function (a) {
    return this.renderer_.canDecorate(a);
  };
  e.ui.Control.prototype.decorateInternal = function (a) {
    a = this.renderer_.decorate(this, a);
    this.setElementInternal(a);
    this.renderer_.setAriaRole(a, this.getPreferredAriaRole());
    this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(a, !1);
    this.visible_ = "none" != a.style.display;
  };
  e.ui.Control.prototype.enterDocument = function () {
    e.ui.Control.superClass_.enterDocument.call(this);
    this.renderer_.setAriaStates(this, this.getElementStrict());
    this.renderer_.initializeDom(this);
    if (this.supportedStates_ & ~e.ui.Component.State.DISABLED && (this.isHandleMouseEvents() && this.enableMouseEventHandling_(!0), this.isSupportedState(e.ui.Component.State.FOCUSED))) {
      var a = this.getKeyEventTarget();
      if (a) {
        var c = this.getKeyHandler();
        c.attach(a);
        this.getHandler().listen(c, e.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(a, e.events.EventType.FOCUS, this.handleFocus).listen(a, e.events.EventType.BLUR, this.handleBlur);
      }
    }
  };
  e.ui.Control.prototype.enableMouseEventHandling_ = function (a) {
    var c = e.ui.ComponentUtil.getMouseEventType(this),
      d = this.getHandler(),
      f = this.getElement();
    a ? (d.listen(f, c.MOUSEDOWN, this.handleMouseDown).listen(f, [c.MOUSEUP, c.MOUSECANCEL], this.handleMouseUp).listen(f, e.events.EventType.MOUSEOVER, this.handleMouseOver).listen(f, e.events.EventType.MOUSEOUT, this.handleMouseOut), this.pointerEventsEnabled() && d.listen(f, e.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_), this.handleContextMenu != e.nullFunction && d.listen(f, e.events.EventType.CONTEXTMENU, this.handleContextMenu), e.userAgent.IE && (e.userAgent.isVersionOrHigher(9) || d.listen(f, e.events.EventType.DBLCLICK, this.handleDblClick), this.ieMouseEventSequenceSimulator_ || (this.ieMouseEventSequenceSimulator_ = new e.ui.Control.IeMouseEventSequenceSimulator_(this), this.registerDisposable(this.ieMouseEventSequenceSimulator_)))) : (d.unlisten(f, c.MOUSEDOWN, this.handleMouseDown).unlisten(f, [c.MOUSEUP, c.MOUSECANCEL], this.handleMouseUp).unlisten(f, e.events.EventType.MOUSEOVER, this.handleMouseOver).unlisten(f, e.events.EventType.MOUSEOUT, this.handleMouseOut), this.pointerEventsEnabled() && d.unlisten(f, e.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_), this.handleContextMenu != e.nullFunction && d.unlisten(f, e.events.EventType.CONTEXTMENU, this.handleContextMenu), e.userAgent.IE && (e.userAgent.isVersionOrHigher(9) || d.unlisten(f, e.events.EventType.DBLCLICK, this.handleDblClick), e.dispose(this.ieMouseEventSequenceSimulator_), this.ieMouseEventSequenceSimulator_ = null));
  };
  e.ui.Control.prototype.exitDocument = function () {
    e.ui.Control.superClass_.exitDocument.call(this);
    this.keyHandler_ && this.keyHandler_.detach();
    this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, !1);
  };
  e.ui.Control.prototype.disposeInternal = function () {
    e.ui.Control.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_);
    delete this.renderer_;
    this.ieMouseEventSequenceSimulator_ = this.extraClassNames_ = this.content_ = null;
  };
  e.ui.Control.prototype.getContent = function () {
    return this.content_;
  };
  e.ui.Control.prototype.setContent = function (a) {
    this.renderer_.setContent(this.getElement(), a);
    this.setContentInternal(a);
  };
  e.ui.Control.prototype.setContentInternal = function (a) {
    this.content_ = a;
  };
  e.ui.Control.prototype.getCaption = function () {
    var a = this.getContent();
    if (!a) return "";
    a = "string" === typeof a ? a : Array.isArray(a) ? e.array.map(a, e.dom.getRawTextContent).join("") : e.dom.getTextContent(a);
    return e.string.collapseBreakingSpaces(a);
  };
  e.ui.Control.prototype.setCaption = function (a) {
    this.setContent(a);
  };
  e.ui.Control.prototype.setRightToLeft = function (a) {
    e.ui.Control.superClass_.setRightToLeft.call(this, a);
    var c = this.getElement();
    c && this.renderer_.setRightToLeft(c, a);
  };
  e.ui.Control.prototype.isAllowTextSelection = function () {
    return this.allowTextSelection_;
  };
  e.ui.Control.prototype.setAllowTextSelection = function (a) {
    this.allowTextSelection_ = a;
    var c = this.getElement();
    c && this.renderer_.setAllowTextSelection(c, a);
  };
  e.ui.Control.prototype.isVisible = function () {
    return this.visible_;
  };
  e.ui.Control.prototype.setVisible = function (a, c) {
    return c || this.visible_ != a && this.dispatchEvent(a ? e.ui.Component.EventType.SHOW : e.ui.Component.EventType.HIDE) ? ((c = this.getElement()) && this.renderer_.setVisible(c, a), this.isEnabled() && this.renderer_.setFocusable(this, a), this.visible_ = a, !0) : !1;
  };
  e.ui.Control.prototype.isEnabled = function () {
    return !this.hasState(e.ui.Component.State.DISABLED);
  };
  e.ui.Control.prototype.isParentDisabled_ = function () {
    var a = this.getParent();
    return !!a && "function" == typeof a.isEnabled && !a.isEnabled();
  };
  e.ui.Control.prototype.setEnabled = function (a) {
    !this.isParentDisabled_() && this.isTransitionAllowed(e.ui.Component.State.DISABLED, !a) && (a || (this.setActive(!1), this.setHighlighted(!1)), this.isVisible() && this.renderer_.setFocusable(this, a), this.setState(e.ui.Component.State.DISABLED, !a, !0));
  };
  e.ui.Control.prototype.isHighlighted = function () {
    return this.hasState(e.ui.Component.State.HOVER);
  };
  e.ui.Control.prototype.setHighlighted = function (a) {
    this.isTransitionAllowed(e.ui.Component.State.HOVER, a) && this.setState(e.ui.Component.State.HOVER, a);
  };
  e.ui.Control.prototype.isActive = function () {
    return this.hasState(e.ui.Component.State.ACTIVE);
  };
  e.ui.Control.prototype.setActive = function (a) {
    this.isTransitionAllowed(e.ui.Component.State.ACTIVE, a) && this.setState(e.ui.Component.State.ACTIVE, a);
  };
  e.ui.Control.prototype.isSelected = function () {
    return this.hasState(e.ui.Component.State.SELECTED);
  };
  e.ui.Control.prototype.setSelected = function (a) {
    this.isTransitionAllowed(e.ui.Component.State.SELECTED, a) && this.setState(e.ui.Component.State.SELECTED, a);
  };
  e.ui.Control.prototype.isChecked = function () {
    return this.hasState(e.ui.Component.State.CHECKED);
  };
  e.ui.Control.prototype.setChecked = function (a) {
    this.isTransitionAllowed(e.ui.Component.State.CHECKED, a) && this.setState(e.ui.Component.State.CHECKED, a);
  };
  e.ui.Control.prototype.isFocused = function () {
    return this.hasState(e.ui.Component.State.FOCUSED);
  };
  e.ui.Control.prototype.setFocused = function (a) {
    this.isTransitionAllowed(e.ui.Component.State.FOCUSED, a) && this.setState(e.ui.Component.State.FOCUSED, a);
  };
  e.ui.Control.prototype.isOpen = function () {
    return this.hasState(e.ui.Component.State.OPENED);
  };
  e.ui.Control.prototype.setOpen = function (a) {
    this.isTransitionAllowed(e.ui.Component.State.OPENED, a) && this.setState(e.ui.Component.State.OPENED, a);
  };
  e.ui.Control.prototype.getState = function () {
    return this.state_;
  };
  e.ui.Control.prototype.hasState = function (a) {
    return !!(this.state_ & a);
  };
  e.ui.Control.prototype.setState = function (a, c, d) {
    d || a != e.ui.Component.State.DISABLED ? this.isSupportedState(a) && c != this.hasState(a) && (this.renderer_.setState(this, a, c), this.state_ = c ? this.state_ | a : this.state_ & ~a) : this.setEnabled(!c);
  };
  e.ui.Control.prototype.setStateInternal = function (a) {
    this.state_ = a;
  };
  e.ui.Control.prototype.isSupportedState = function (a) {
    return !!(this.supportedStates_ & a);
  };
  e.ui.Control.prototype.setSupportedState = function (a, c) {
    if (this.isInDocument() && this.hasState(a) && !c) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    !c && this.hasState(a) && this.setState(a, !1);
    this.supportedStates_ = c ? this.supportedStates_ | a : this.supportedStates_ & ~a;
  };
  e.ui.Control.prototype.isAutoState = function (a) {
    return !!(this.autoStates_ & a) && this.isSupportedState(a);
  };
  e.ui.Control.prototype.setAutoStates = function (a, c) {
    this.autoStates_ = c ? this.autoStates_ | a : this.autoStates_ & ~a;
  };
  e.ui.Control.prototype.isDispatchTransitionEvents = function (a) {
    return !!(this.statesWithTransitionEvents_ & a) && this.isSupportedState(a);
  };
  e.ui.Control.prototype.setDispatchTransitionEvents = function (a, c) {
    this.statesWithTransitionEvents_ = c ? this.statesWithTransitionEvents_ | a : this.statesWithTransitionEvents_ & ~a;
  };
  e.ui.Control.prototype.isTransitionAllowed = function (a, c) {
    return this.isSupportedState(a) && this.hasState(a) != c && (!(this.statesWithTransitionEvents_ & a) || this.dispatchEvent(e.ui.Component.getStateTransitionEvent(a, c))) && !this.isDisposed();
  };
  e.ui.Control.prototype.handleMouseOver = function (a) {
    !e.ui.Control.isMouseEventWithinElement_(a, this.getElement()) && this.dispatchEvent(e.ui.Component.EventType.ENTER) && this.isEnabled() && this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!0);
  };
  e.ui.Control.prototype.handleMouseOut = function (a) {
    !e.ui.Control.isMouseEventWithinElement_(a, this.getElement()) && this.dispatchEvent(e.ui.Component.EventType.LEAVE) && (this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!1), this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!1));
  };
  e.ui.Control.prototype.preventPointerCapture_ = function (a) {
    var c = a.target;
    c.releasePointerCapture && c.releasePointerCapture(a.pointerId);
  };
  e.ui.Control.prototype.handleContextMenu = e.nullFunction;
  e.ui.Control.isMouseEventWithinElement_ = function (a, c) {
    return !!a.relatedTarget && e.dom.contains(c, a.relatedTarget);
  };
  e.ui.Control.prototype.handleMouseDown = function (a) {
    this.isEnabled() && (this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!0), a.isMouseActionButton() && (this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!0), this.renderer_ && this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus()));
    !this.isAllowTextSelection() && a.isMouseActionButton() && a.preventDefault();
  };
  e.ui.Control.prototype.handleMouseUp = function (a) {
    this.isEnabled() && (this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!0), this.isActive() && this.performActionInternal(a) && this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!1));
  };
  e.ui.Control.prototype.handleDblClick = function (a) {
    this.isEnabled() && this.performActionInternal(a);
  };
  e.ui.Control.prototype.performActionInternal = function (a) {
    this.isAutoState(e.ui.Component.State.CHECKED) && this.setChecked(!this.isChecked());
    this.isAutoState(e.ui.Component.State.SELECTED) && this.setSelected(!0);
    this.isAutoState(e.ui.Component.State.OPENED) && this.setOpen(!this.isOpen());
    var c = new e.events.Event(e.ui.Component.EventType.ACTION, this);
    a && (c.altKey = a.altKey, c.ctrlKey = a.ctrlKey, c.metaKey = a.metaKey, c.shiftKey = a.shiftKey, c.platformModifierKey = a.platformModifierKey);
    return this.dispatchEvent(c);
  };
  e.ui.Control.prototype.handleFocus = function () {
    this.isAutoState(e.ui.Component.State.FOCUSED) && this.setFocused(!0);
  };
  e.ui.Control.prototype.handleBlur = function () {
    this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!1);
    this.isAutoState(e.ui.Component.State.FOCUSED) && this.setFocused(!1);
  };
  e.ui.Control.prototype.handleKeyEvent = function (a) {
    return this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
  };
  e.ui.Control.prototype.handleKeyEventInternal = function (a) {
    return a.keyCode == e.events.KeyCodes.ENTER && this.performActionInternal(a);
  };
  e.ui.registry.setDefaultRenderer(e.ui.Control, e.ui.ControlRenderer);
  e.ui.registry.setDecoratorByClassName(e.ui.ControlRenderer.CSS_CLASS, function () {
    return new e.ui.Control(null);
  });
  e.ui.Control.IeMouseEventSequenceSimulator_ = function (a) {
    e.Disposable.call(this);
    this.control_ = a;
    this.clickExpected_ = !1;
    this.handler_ = new e.events.EventHandler(this);
    this.registerDisposable(this.handler_);
    var c = this.control_.getElementStrict();
    a = e.ui.ComponentUtil.getMouseEventType(a);
    this.handler_.listen(c, a.MOUSEDOWN, this.handleMouseDown_).listen(c, a.MOUSEUP, this.handleMouseUp_).listen(c, e.events.EventType.CLICK, this.handleClick_);
  };
  e.inherits(e.ui.Control.IeMouseEventSequenceSimulator_, e.Disposable);
  e.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_ = !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9);
  e.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseDown_ = function () {
    this.clickExpected_ = !1;
  };
  e.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseUp_ = function () {
    this.clickExpected_ = !0;
  };
  e.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_ = function (a, c) {
    if (!e.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_) return a.button = e.events.BrowserEvent.MouseButton.LEFT, a.type = c, a;
    var d = document.createEvent("MouseEvents");
    d.initMouseEvent(c, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, e.events.BrowserEvent.MouseButton.LEFT, a.relatedTarget || null);
    return d;
  };
  e.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleClick_ = function (a) {
    if (this.clickExpected_) this.clickExpected_ = !1;else {
      var c = a.getBrowserEvent(),
        d = c.button,
        f = c.type,
        g = e.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_(c, e.events.EventType.MOUSEDOWN);
      this.control_.handleMouseDown(new e.events.BrowserEvent(g, a.currentTarget));
      g = e.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_(c, e.events.EventType.MOUSEUP);
      this.control_.handleMouseUp(new e.events.BrowserEvent(g, a.currentTarget));
      e.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_ || (c.button = d, c.type = f);
    }
  };
  e.ui.Control.IeMouseEventSequenceSimulator_.prototype.disposeInternal = function () {
    this.control_ = null;
    e.ui.Control.IeMouseEventSequenceSimulator_.superClass_.disposeInternal.call(this);
  };
  e.ui.Container = function (a, c, d) {
    e.ui.Component.call(this, d);
    this.renderer_ = c || e.ui.ContainerRenderer.getInstance();
    this.orientation_ = a || this.renderer_.getDefaultOrientation();
  };
  e.inherits(e.ui.Container, e.ui.Component);
  e.tagUnsealableClass(e.ui.Container);
  e.ui.Container.EventType = {
    AFTER_SHOW: "aftershow",
    AFTER_HIDE: "afterhide"
  };
  e.ui.Container.Orientation = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
  };
  e.ui.Container.prototype.keyEventTarget_ = null;
  e.ui.Container.prototype.keyHandler_ = null;
  e.ui.Container.prototype.renderer_ = null;
  e.ui.Container.prototype.orientation_ = null;
  e.ui.Container.prototype.visible_ = !0;
  e.ui.Container.prototype.enabled_ = !0;
  e.ui.Container.prototype.focusable_ = !0;
  e.ui.Container.prototype.highlightedIndex_ = -1;
  e.ui.Container.prototype.openItem_ = null;
  e.ui.Container.prototype.mouseButtonPressed_ = !1;
  e.ui.Container.prototype.allowFocusableChildren_ = !1;
  e.ui.Container.prototype.openFollowsHighlight_ = !0;
  e.ui.Container.prototype.childElementIdMap_ = null;
  e.ui.Container.prototype.getKeyEventTarget = function () {
    return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this);
  };
  e.ui.Container.prototype.setKeyEventTarget = function (a) {
    if (this.focusable_) {
      var c = this.getKeyEventTarget(),
        d = this.isInDocument();
      this.keyEventTarget_ = a;
      var f = this.getKeyEventTarget();
      d && (this.keyEventTarget_ = c, this.enableFocusHandling_(!1), this.keyEventTarget_ = a, this.getKeyHandler().attach(f), this.enableFocusHandling_(!0));
    } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
  };
  e.ui.Container.prototype.getKeyHandler = function () {
    return this.keyHandler_ || (this.keyHandler_ = new e.events.KeyHandler(this.getKeyEventTarget()));
  };
  e.ui.Container.prototype.getRenderer = function () {
    return this.renderer_;
  };
  e.ui.Container.prototype.setRenderer = function (a) {
    if (this.getElement()) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.renderer_ = a;
  };
  e.ui.Container.prototype.createDom = function () {
    this.setElementInternal(this.renderer_.createDom(this));
  };
  e.ui.Container.prototype.getContentElement = function () {
    return this.renderer_.getContentElement(this.getElement());
  };
  e.ui.Container.prototype.canDecorate = function (a) {
    return this.renderer_.canDecorate(a);
  };
  e.ui.Container.prototype.decorateInternal = function (a) {
    this.setElementInternal(this.renderer_.decorate(this, a));
    "none" == a.style.display && (this.visible_ = !1);
  };
  e.ui.Container.prototype.enterDocument = function () {
    e.ui.Container.superClass_.enterDocument.call(this);
    this.forEachChild(function (a) {
      a.isInDocument() && this.registerChildId_(a);
    }, this);
    var a = this.getElement();
    this.renderer_.initializeDom(this);
    this.setVisible(this.visible_, !0);
    var c = e.ui.ComponentUtil.getMouseEventType(this);
    this.getHandler().listen(this, e.ui.Component.EventType.ENTER, this.handleEnterItem).listen(this, e.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem).listen(this, e.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem).listen(this, e.ui.Component.EventType.OPEN, this.handleOpenItem).listen(this, e.ui.Component.EventType.CLOSE, this.handleCloseItem).listen(a, c.MOUSEDOWN, this.handleMouseDown).listen(e.dom.getOwnerDocument(a), [c.MOUSEUP, c.MOUSECANCEL], this.handleDocumentMouseUp).listen(a, [c.MOUSEDOWN, c.MOUSEUP, c.MOUSECANCEL, e.events.EventType.MOUSEOVER, e.events.EventType.MOUSEOUT, e.events.EventType.CONTEXTMENU], this.handleChildMouseEvents);
    this.pointerEventsEnabled() && this.getHandler().listen(a, e.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_);
    this.isFocusable() && this.enableFocusHandling_(!0);
  };
  e.ui.Container.prototype.preventPointerCapture_ = function (a) {
    var c = a.target;
    c.releasePointerCapture && c.releasePointerCapture(a.pointerId);
  };
  e.ui.Container.prototype.enableFocusHandling_ = function (a) {
    var c = this.getHandler(),
      d = this.getKeyEventTarget();
    a ? c.listen(d, e.events.EventType.FOCUS, this.handleFocus).listen(d, e.events.EventType.BLUR, this.handleBlur).listen(this.getKeyHandler(), e.events.KeyHandler.EventType.KEY, this.handleKeyEvent) : c.unlisten(d, e.events.EventType.FOCUS, this.handleFocus).unlisten(d, e.events.EventType.BLUR, this.handleBlur).unlisten(this.getKeyHandler(), e.events.KeyHandler.EventType.KEY, this.handleKeyEvent);
  };
  e.ui.Container.prototype.exitDocument = function () {
    this.setHighlightedIndex(-1);
    this.openItem_ && this.openItem_.setOpen(!1);
    this.mouseButtonPressed_ = !1;
    e.ui.Container.superClass_.exitDocument.call(this);
  };
  e.ui.Container.prototype.disposeInternal = function () {
    e.ui.Container.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), this.keyHandler_ = null);
    this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = null;
  };
  e.ui.Container.prototype.handleEnterItem = function () {
    return !0;
  };
  e.ui.Container.prototype.handleHighlightItem = function (a) {
    var c = this.indexOfChild(a.target);
    if (-1 < c && c != this.highlightedIndex_) {
      var d = this.getHighlighted();
      d && d.setHighlighted(!1);
      this.highlightedIndex_ = c;
      d = this.getHighlighted();
      this.isMouseButtonPressed() && d.setActive(!0);
      this.openFollowsHighlight_ && this.openItem_ && d != this.openItem_ && (d.isSupportedState(e.ui.Component.State.OPENED) ? d.setOpen(!0) : this.openItem_.setOpen(!1));
    }
    c = this.getElement();
    e.asserts.assert(c, "The DOM element for the container cannot be null.");
    null != a.target.getElement() && e.a11y.aria.setState(c, e.a11y.aria.State.ACTIVEDESCENDANT, a.target.getElement().id);
  };
  e.ui.Container.prototype.handleUnHighlightItem = function (a) {
    a.target == this.getHighlighted() && (this.highlightedIndex_ = -1);
    a = this.getElement();
    e.asserts.assert(a, "The DOM element for the container cannot be null.");
    e.a11y.aria.removeState(a, e.a11y.aria.State.ACTIVEDESCENDANT);
  };
  e.ui.Container.prototype.handleOpenItem = function (a) {
    (a = a.target) && a != this.openItem_ && a.getParent() == this && (this.openItem_ && this.openItem_.setOpen(!1), this.openItem_ = a);
  };
  e.ui.Container.prototype.handleCloseItem = function (a) {
    a.target == this.openItem_ && (this.openItem_ = null);
    var c = this.getElement(),
      d = a.target.getElement();
    c && a.target.isHighlighted() && d && e.a11y.aria.setActiveDescendant(c, d);
  };
  e.ui.Container.prototype.handleMouseDown = function (a) {
    this.enabled_ && this.setMouseButtonPressed(!0);
    var c = this.getKeyEventTarget();
    c && e.dom.isFocusableTabIndex(c) ? c.focus() : a.preventDefault();
  };
  e.ui.Container.prototype.handleDocumentMouseUp = function () {
    this.setMouseButtonPressed(!1);
  };
  e.ui.Container.prototype.handleChildMouseEvents = function (a) {
    var c = e.ui.ComponentUtil.getMouseEventType(this),
      d = this.getOwnerControl(a.target);
    if (d) switch (a.type) {
      case c.MOUSEDOWN:
        d.handleMouseDown(a);
        break;
      case c.MOUSEUP:
      case c.MOUSECANCEL:
        d.handleMouseUp(a);
        break;
      case e.events.EventType.MOUSEOVER:
        d.handleMouseOver(a);
        break;
      case e.events.EventType.MOUSEOUT:
        d.handleMouseOut(a);
        break;
      case e.events.EventType.CONTEXTMENU:
        d.handleContextMenu(a);
    }
  };
  e.ui.Container.prototype.getOwnerControl = function (a) {
    if (this.childElementIdMap_) for (var c = this.getElement(); a && a !== c;) {
      var d = a.id;
      if (d in this.childElementIdMap_) return this.childElementIdMap_[d];
      a = a.parentNode;
    }
    return null;
  };
  e.ui.Container.prototype.handleFocus = function () {};
  e.ui.Container.prototype.handleBlur = function () {
    this.setHighlightedIndex(-1);
    this.setMouseButtonPressed(!1);
    this.openItem_ && this.openItem_.setOpen(!1);
  };
  e.ui.Container.prototype.handleKeyEvent = function (a) {
    return this.isEnabled() && this.isVisible() && (0 != this.getChildCount() || this.keyEventTarget_) && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
  };
  e.ui.Container.prototype.handleKeyEventInternal = function (a) {
    var c = this.getHighlighted();
    if (c && "function" == typeof c.handleKeyEvent && c.handleKeyEvent(a) || this.openItem_ && this.openItem_ != c && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
      case e.events.KeyCodes.ESC:
        if (this.isFocusable()) this.getKeyEventTarget().blur();else return !1;
        break;
      case e.events.KeyCodes.HOME:
        this.highlightFirst();
        break;
      case e.events.KeyCodes.END:
        this.highlightLast();
        break;
      case e.events.KeyCodes.UP:
        if (this.orientation_ == e.ui.Container.Orientation.VERTICAL) this.highlightPrevious();else return !1;
        break;
      case e.events.KeyCodes.LEFT:
        if (this.orientation_ == e.ui.Container.Orientation.HORIZONTAL) this.isRightToLeft() ? this.highlightNext() : this.highlightPrevious();else return !1;
        break;
      case e.events.KeyCodes.DOWN:
        if (this.orientation_ == e.ui.Container.Orientation.VERTICAL) this.highlightNext();else return !1;
        break;
      case e.events.KeyCodes.RIGHT:
        if (this.orientation_ == e.ui.Container.Orientation.HORIZONTAL) this.isRightToLeft() ? this.highlightPrevious() : this.highlightNext();else return !1;
        break;
      default:
        return !1;
    }
    return !0;
  };
  e.ui.Container.prototype.registerChildId_ = function (a) {
    var c = a.getElement();
    c = c.id || (c.id = a.getId());
    this.childElementIdMap_ || (this.childElementIdMap_ = {});
    this.childElementIdMap_[c] = a;
  };
  e.ui.Container.prototype.addChild = function (a, c) {
    e.asserts.assertInstanceof(a, e.ui.Control, "The child of a container must be a control");
    e.ui.Container.superClass_.addChild.call(this, a, c);
  };
  e.ui.Container.prototype.addChildAt = function (a, c, d) {
    e.asserts.assertInstanceof(a, e.ui.Control);
    a.setDispatchTransitionEvents(e.ui.Component.State.HOVER, !0);
    a.setDispatchTransitionEvents(e.ui.Component.State.OPENED, !0);
    !this.isFocusable() && this.isFocusableChildrenAllowed() || a.setSupportedState(e.ui.Component.State.FOCUSED, !1);
    a.setHandleMouseEvents(!1);
    var f = a.getParent() == this ? this.indexOfChild(a) : -1;
    e.ui.Container.superClass_.addChildAt.call(this, a, c, d);
    a.isInDocument() && this.isInDocument() && this.registerChildId_(a);
    this.updateHighlightedIndex_(f, c);
  };
  e.ui.Container.prototype.updateHighlightedIndex_ = function (a, c) {
    -1 == a && (a = this.getChildCount());
    a == this.highlightedIndex_ ? this.highlightedIndex_ = Math.min(this.getChildCount() - 1, c) : a > this.highlightedIndex_ && c <= this.highlightedIndex_ ? this.highlightedIndex_++ : a < this.highlightedIndex_ && c > this.highlightedIndex_ && this.highlightedIndex_--;
  };
  e.ui.Container.prototype.removeChild = function (a, c) {
    a = "string" === typeof a ? this.getChild(a) : a;
    e.asserts.assertInstanceof(a, e.ui.Control);
    if (a) {
      var d = this.indexOfChild(a);
      -1 != d && (d == this.highlightedIndex_ ? (a.setHighlighted(!1), this.highlightedIndex_ = -1) : d < this.highlightedIndex_ && this.highlightedIndex_--);
      (d = a.getElement()) && d.id && this.childElementIdMap_ && e.object.remove(this.childElementIdMap_, d.id);
    }
    a = e.ui.Container.superClass_.removeChild.call(this, a, c);
    a.setHandleMouseEvents(!0);
    return a;
  };
  e.ui.Container.prototype.getOrientation = function () {
    return this.orientation_;
  };
  e.ui.Container.prototype.setOrientation = function (a) {
    if (this.getElement()) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.orientation_ = a;
  };
  e.ui.Container.prototype.isVisible = function () {
    return this.visible_;
  };
  e.ui.Container.prototype.setVisible = function (a, c) {
    if (c || this.visible_ != a && this.dispatchEvent(a ? e.ui.Component.EventType.SHOW : e.ui.Component.EventType.HIDE)) {
      this.visible_ = a;
      var d = this.getElement();
      d && (e.style.setElementShown(d, a), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), this.enabled_ && this.visible_), c || this.dispatchEvent(this.visible_ ? e.ui.Container.EventType.AFTER_SHOW : e.ui.Container.EventType.AFTER_HIDE));
      return !0;
    }
    return !1;
  };
  e.ui.Container.prototype.isEnabled = function () {
    return this.enabled_;
  };
  e.ui.Container.prototype.setEnabled = function (a) {
    this.enabled_ != a && this.dispatchEvent(a ? e.ui.Component.EventType.ENABLE : e.ui.Component.EventType.DISABLE) && (a ? (this.enabled_ = !0, this.forEachChild(function (a) {
      a.wasDisabled ? delete a.wasDisabled : a.setEnabled(!0);
    })) : (this.forEachChild(function (a) {
      a.isEnabled() ? a.setEnabled(!1) : a.wasDisabled = !0;
    }), this.enabled_ = !1, this.setMouseButtonPressed(!1)), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), a && this.visible_));
  };
  e.ui.Container.prototype.isFocusable = function () {
    return this.focusable_;
  };
  e.ui.Container.prototype.setFocusable = function (a) {
    a != this.focusable_ && this.isInDocument() && this.enableFocusHandling_(a);
    this.focusable_ = a;
    this.enabled_ && this.visible_ && this.renderer_.enableTabIndex(this.getKeyEventTarget(), a);
  };
  e.ui.Container.prototype.isFocusableChildrenAllowed = function () {
    return this.allowFocusableChildren_;
  };
  e.ui.Container.prototype.setFocusableChildrenAllowed = function (a) {
    this.allowFocusableChildren_ = a;
  };
  e.ui.Container.prototype.isOpenFollowsHighlight = function () {
    return this.openFollowsHighlight_;
  };
  e.ui.Container.prototype.setOpenFollowsHighlight = function (a) {
    this.openFollowsHighlight_ = a;
  };
  e.ui.Container.prototype.getHighlightedIndex = function () {
    return this.highlightedIndex_;
  };
  e.ui.Container.prototype.setHighlightedIndex = function (a) {
    (a = this.getChildAt(a)) ? a.setHighlighted(!0) : -1 < this.highlightedIndex_ && this.getHighlighted().setHighlighted(!1);
  };
  e.ui.Container.prototype.setHighlighted = function (a) {
    this.setHighlightedIndex(this.indexOfChild(a));
  };
  e.ui.Container.prototype.getHighlighted = function () {
    return this.getChildAt(this.highlightedIndex_);
  };
  e.ui.Container.prototype.highlightFirst = function () {
    this.highlightHelper(function (a, c) {
      return (a + 1) % c;
    }, this.getChildCount() - 1);
  };
  e.ui.Container.prototype.highlightLast = function () {
    this.highlightHelper(function (a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    }, 0);
  };
  e.ui.Container.prototype.highlightNext = function () {
    this.highlightHelper(function (a, c) {
      return (a + 1) % c;
    }, this.highlightedIndex_);
  };
  e.ui.Container.prototype.highlightPrevious = function () {
    this.highlightHelper(function (a, c) {
      a--;
      return 0 > a ? c - 1 : a;
    }, this.highlightedIndex_);
  };
  e.ui.Container.prototype.highlightHelper = function (a, c) {
    c = 0 > c ? this.indexOfChild(this.openItem_) : c;
    var d = this.getChildCount();
    c = a.call(this, c, d);
    for (var f = 0; f <= d;) {
      var g = this.getChildAt(c);
      if (g && this.canHighlightItem(g)) return this.setHighlightedIndexFromKeyEvent(c), !0;
      f++;
      c = a.call(this, c, d);
    }
    return !1;
  };
  e.ui.Container.prototype.canHighlightItem = function (a) {
    return a.isVisible() && a.isEnabled() && a.isSupportedState(e.ui.Component.State.HOVER);
  };
  e.ui.Container.prototype.setHighlightedIndexFromKeyEvent = function (a) {
    this.setHighlightedIndex(a);
  };
  e.ui.Container.prototype.getOpenItem = function () {
    return this.openItem_;
  };
  e.ui.Container.prototype.isMouseButtonPressed = function () {
    return this.mouseButtonPressed_;
  };
  e.ui.Container.prototype.setMouseButtonPressed = function (a) {
    this.mouseButtonPressed_ = a;
  };
  e.ui.MenuHeaderRenderer = function () {
    e.ui.ControlRenderer.call(this);
  };
  e.inherits(e.ui.MenuHeaderRenderer, e.ui.ControlRenderer);
  e.addSingletonGetter(e.ui.MenuHeaderRenderer);
  e.ui.MenuHeaderRenderer.CSS_CLASS = "goog-menuheader";
  e.ui.MenuHeaderRenderer.prototype.getCssClass = function () {
    return e.ui.MenuHeaderRenderer.CSS_CLASS;
  };
  e.ui.MenuHeader = function (a, c, d) {
    e.ui.Control.call(this, a, d || e.ui.MenuHeaderRenderer.getInstance(), c);
    this.setSupportedState(e.ui.Component.State.DISABLED, !1);
    this.setSupportedState(e.ui.Component.State.HOVER, !1);
    this.setSupportedState(e.ui.Component.State.ACTIVE, !1);
    this.setSupportedState(e.ui.Component.State.FOCUSED, !1);
    this.setStateInternal(e.ui.Component.State.DISABLED);
  };
  e.inherits(e.ui.MenuHeader, e.ui.Control);
  e.ui.registry.setDecoratorByClassName(e.ui.MenuHeaderRenderer.CSS_CLASS, function () {
    return new e.ui.MenuHeader(null);
  });
  e.ui.MenuItemRenderer = function () {
    e.ui.ControlRenderer.call(this);
    this.classNameCache_ = [];
  };
  e.inherits(e.ui.MenuItemRenderer, e.ui.ControlRenderer);
  e.addSingletonGetter(e.ui.MenuItemRenderer);
  e.ui.MenuItemRenderer.CSS_CLASS = "goog-menuitem";
  e.ui.MenuItemRenderer.CompositeCssClassIndex_ = {
    HOVER: 0,
    CHECKBOX: 1,
    CONTENT: 2
  };
  e.ui.MenuItemRenderer.prototype.getCompositeCssClass_ = function (a) {
    var c = this.classNameCache_[a];
    if (!c) {
      switch (a) {
        case e.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER:
          c = this.getStructuralCssClass() + "-highlight";
          break;
        case e.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX:
          c = this.getStructuralCssClass() + "-checkbox";
          break;
        case e.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT:
          c = this.getStructuralCssClass() + "-content";
      }
      this.classNameCache_[a] = c;
    }
    return c;
  };
  e.ui.MenuItemRenderer.prototype.getAriaRole = function () {
    return e.a11y.aria.Role.MENU_ITEM;
  };
  e.ui.MenuItemRenderer.prototype.createDom = function (a) {
    var c = a.getDomHelper().createDom("DIV", this.getClassNames(a).join(" "), this.createContent(a.getContent(), a.getDomHelper()));
    this.setEnableCheckBoxStructure(a, c, a.isSupportedState(e.ui.Component.State.SELECTED) || a.isSupportedState(e.ui.Component.State.CHECKED));
    return c;
  };
  e.ui.MenuItemRenderer.prototype.getContentElement = function (a) {
    return a && a.firstChild;
  };
  e.ui.MenuItemRenderer.prototype.decorate = function (a, c) {
    e.asserts.assert(c);
    this.hasContentStructure(c) || c.appendChild(this.createContent(c.childNodes, a.getDomHelper()));
    e.dom.classlist.contains(c, "goog-option") && (a.setCheckable(!0), this.setCheckable(a, c, !0));
    return e.ui.MenuItemRenderer.superClass_.decorate.call(this, a, c);
  };
  e.ui.MenuItemRenderer.prototype.setContent = function (a, c) {
    var d = this.getContentElement(a),
      f = this.hasCheckBoxStructure(a) ? d.firstChild : null;
    e.ui.MenuItemRenderer.superClass_.setContent.call(this, a, c);
    f && !this.hasCheckBoxStructure(a) && d.insertBefore(f, d.firstChild || null);
  };
  e.ui.MenuItemRenderer.prototype.hasContentStructure = function (a) {
    a = e.dom.getFirstElementChild(a);
    var c = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
    return !!a && e.dom.classlist.contains(a, c);
  };
  e.ui.MenuItemRenderer.prototype.createContent = function (a, c) {
    var d = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
    return c.createDom("DIV", d, a);
  };
  e.ui.MenuItemRenderer.prototype.setSelectable = function (a, c, d) {
    a && c && this.setEnableCheckBoxStructure(a, c, d);
  };
  e.ui.MenuItemRenderer.prototype.setCheckable = function (a, c, d) {
    a && c && this.setEnableCheckBoxStructure(a, c, d);
  };
  e.ui.MenuItemRenderer.prototype.hasCheckBoxStructure = function (a) {
    if (a = this.getContentElement(a)) {
      a = a.firstChild;
      var c = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);
      return !!a && e.dom.isElement(a) && e.dom.classlist.contains(a, c);
    }
    return !1;
  };
  e.ui.MenuItemRenderer.prototype.setEnableCheckBoxStructure = function (a, c, d) {
    this.setAriaRole(c, a.getPreferredAriaRole());
    this.setAriaStates(a, c);
    d != this.hasCheckBoxStructure(c) && (e.dom.classlist.enable(c, "goog-option", d), c = this.getContentElement(c), d ? (d = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX), c.insertBefore(a.getDomHelper().createDom("DIV", d), c.firstChild || null)) : c.removeChild(c.firstChild));
  };
  e.ui.MenuItemRenderer.prototype.getClassForState = function (a) {
    switch (a) {
      case e.ui.Component.State.HOVER:
        return this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
      case e.ui.Component.State.CHECKED:
      case e.ui.Component.State.SELECTED:
        return "goog-option-selected";
      default:
        return e.ui.MenuItemRenderer.superClass_.getClassForState.call(this, a);
    }
  };
  e.ui.MenuItemRenderer.prototype.getStateFromClass = function (a) {
    var c = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
    switch (a) {
      case "goog-option-selected":
        return e.ui.Component.State.CHECKED;
      case c:
        return e.ui.Component.State.HOVER;
      default:
        return e.ui.MenuItemRenderer.superClass_.getStateFromClass.call(this, a);
    }
  };
  e.ui.MenuItemRenderer.prototype.getCssClass = function () {
    return e.ui.MenuItemRenderer.CSS_CLASS;
  };
  e.ui.MenuItem = function (a, c, d, f) {
    e.ui.Control.call(this, a, f || e.ui.MenuItemRenderer.getInstance(), d);
    this.setValue(c);
  };
  e.inherits(e.ui.MenuItem, e.ui.Control);
  e.tagUnsealableClass(e.ui.MenuItem);
  e.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_ = "goog-menuitem-mnemonic-separator";
  e.ui.MenuItem.ACCELERATOR_CLASS = "goog-menuitem-accel";
  e.ui.MenuItem.prototype.getValue = function () {
    var a = this.getModel();
    return null != a ? a : this.getCaption();
  };
  e.ui.MenuItem.prototype.setValue = function (a) {
    this.setModel(a);
  };
  e.ui.MenuItem.prototype.setSupportedState = function (a, c) {
    e.ui.MenuItem.superClass_.setSupportedState.call(this, a, c);
    switch (a) {
      case e.ui.Component.State.SELECTED:
        this.setSelectableInternal_(c);
        break;
      case e.ui.Component.State.CHECKED:
        this.setCheckableInternal_(c);
    }
  };
  e.ui.MenuItem.prototype.setSelectable = function (a) {
    this.setSupportedState(e.ui.Component.State.SELECTED, a);
  };
  e.ui.MenuItem.prototype.setSelectableInternal_ = function (a) {
    this.isChecked() && !a && this.setChecked(!1);
    var c = this.getElement();
    c && this.getRenderer().setSelectable(this, c, a);
  };
  e.ui.MenuItem.prototype.setCheckable = function (a) {
    this.setSupportedState(e.ui.Component.State.CHECKED, a);
  };
  e.ui.MenuItem.prototype.setCheckableInternal_ = function (a) {
    var c = this.getElement();
    c && this.getRenderer().setCheckable(this, c, a);
  };
  e.ui.MenuItem.prototype.getCaption = function () {
    var a = this.getContent();
    if (Array.isArray(a)) {
      var c = e.ui.MenuItem.ACCELERATOR_CLASS,
        d = e.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_;
      a = e.array.map(a, function (a) {
        return e.dom.isElement(a) && (e.dom.classlist.contains(a, c) || e.dom.classlist.contains(a, d)) ? "" : e.dom.getRawTextContent(a);
      }).join("");
      return e.string.collapseBreakingSpaces(a);
    }
    return e.ui.MenuItem.superClass_.getCaption.call(this);
  };
  e.ui.MenuItem.prototype.getAccelerator = function () {
    var a = this.getDomHelper(),
      c = this.getContent();
    return Array.isArray(c) && (c = e.array.find(c, function (a) {
      return e.dom.classlist.contains(a, e.ui.MenuItem.ACCELERATOR_CLASS);
    })) ? a.getTextContent(c) : null;
  };
  e.ui.MenuItem.prototype.handleMouseUp = function (a) {
    var c = this.getParent();
    if (c) {
      var d = c.openingCoords;
      c.openingCoords = null;
      if (d && "number" === typeof a.clientX && (c = new e.math.Coordinate(a.clientX, a.clientY), e.math.Coordinate.equals(d, c))) return;
    }
    e.ui.MenuItem.superClass_.handleMouseUp.call(this, a);
  };
  e.ui.MenuItem.prototype.handleKeyEventInternal = function (a) {
    return a.keyCode == this.getMnemonic() && this.performActionInternal(a) ? !0 : e.ui.MenuItem.superClass_.handleKeyEventInternal.call(this, a);
  };
  e.ui.MenuItem.prototype.setMnemonic = function (a) {
    this.mnemonicKey_ = a;
  };
  e.ui.MenuItem.prototype.getMnemonic = function () {
    return this.mnemonicKey_;
  };
  e.ui.registry.setDecoratorByClassName(e.ui.MenuItemRenderer.CSS_CLASS, function () {
    return new e.ui.MenuItem(null);
  });
  e.ui.MenuItem.prototype.getPreferredAriaRole = function () {
    return this.isSupportedState(e.ui.Component.State.CHECKED) ? e.a11y.aria.Role.MENU_ITEM_CHECKBOX : this.isSupportedState(e.ui.Component.State.SELECTED) ? e.a11y.aria.Role.MENU_ITEM_RADIO : e.ui.MenuItem.superClass_.getPreferredAriaRole.call(this);
  };
  e.ui.MenuItem.prototype.getParent = function () {
    return e.ui.Control.prototype.getParent.call(this);
  };
  e.ui.MenuItem.prototype.getParentEventTarget = function () {
    return e.ui.Control.prototype.getParentEventTarget.call(this);
  };
  e.ui.MenuSeparatorRenderer = function () {
    e.ui.ControlRenderer.call(this);
  };
  e.inherits(e.ui.MenuSeparatorRenderer, e.ui.ControlRenderer);
  e.addSingletonGetter(e.ui.MenuSeparatorRenderer);
  e.ui.MenuSeparatorRenderer.CSS_CLASS = "goog-menuseparator";
  e.ui.MenuSeparatorRenderer.prototype.createDom = function (a) {
    return a.getDomHelper().createDom("DIV", this.getCssClass());
  };
  e.ui.MenuSeparatorRenderer.prototype.decorate = function (a, c) {
    c.id && a.setId(c.id);
    if ("HR" == c.tagName) {
      var d = c;
      c = this.createDom(a);
      e.dom.insertSiblingBefore(c, d);
      e.dom.removeNode(d);
    } else e.dom.classlist.add(c, this.getCssClass());
    return c;
  };
  e.ui.MenuSeparatorRenderer.prototype.setContent = function () {};
  e.ui.MenuSeparatorRenderer.prototype.getCssClass = function () {
    return e.ui.MenuSeparatorRenderer.CSS_CLASS;
  };
  e.ui.Separator = function (a, c) {
    e.ui.Control.call(this, null, a || e.ui.MenuSeparatorRenderer.getInstance(), c);
    this.setSupportedState(e.ui.Component.State.DISABLED, !1);
    this.setSupportedState(e.ui.Component.State.HOVER, !1);
    this.setSupportedState(e.ui.Component.State.ACTIVE, !1);
    this.setSupportedState(e.ui.Component.State.FOCUSED, !1);
    this.setStateInternal(e.ui.Component.State.DISABLED);
  };
  e.inherits(e.ui.Separator, e.ui.Control);
  e.ui.Separator.prototype.enterDocument = function () {
    e.ui.Separator.superClass_.enterDocument.call(this);
    var a = this.getElement();
    e.asserts.assert(a, "The DOM element for the separator cannot be null.");
    e.a11y.aria.setRole(a, "separator");
  };
  e.ui.registry.setDecoratorByClassName(e.ui.MenuSeparatorRenderer.CSS_CLASS, function () {
    return new e.ui.Separator();
  });
  e.ui.MenuRenderer = function (a) {
    e.ui.ContainerRenderer.call(this, a || e.a11y.aria.Role.MENU);
  };
  e.inherits(e.ui.MenuRenderer, e.ui.ContainerRenderer);
  e.addSingletonGetter(e.ui.MenuRenderer);
  e.ui.MenuRenderer.CSS_CLASS = "goog-menu";
  e.ui.MenuRenderer.prototype.canDecorate = function (a) {
    return "UL" == a.tagName || e.ui.MenuRenderer.superClass_.canDecorate.call(this, a);
  };
  e.ui.MenuRenderer.prototype.getDecoratorForChild = function (a) {
    return "HR" == a.tagName ? new e.ui.Separator() : e.ui.MenuRenderer.superClass_.getDecoratorForChild.call(this, a);
  };
  e.ui.MenuRenderer.prototype.containsElement = function (a, c) {
    return e.dom.contains(a.getElement(), c);
  };
  e.ui.MenuRenderer.prototype.getCssClass = function () {
    return e.ui.MenuRenderer.CSS_CLASS;
  };
  e.ui.MenuRenderer.prototype.initializeDom = function (a) {
    e.ui.MenuRenderer.superClass_.initializeDom.call(this, a);
    a = a.getElement();
    e.asserts.assert(a, "The menu DOM element cannot be null.");
    e.a11y.aria.setState(a, e.a11y.aria.State.HASPOPUP, "true");
  };
  e.ui.MenuSeparator = function (a) {
    e.ui.Separator.call(this, e.ui.MenuSeparatorRenderer.getInstance(), a);
  };
  e.inherits(e.ui.MenuSeparator, e.ui.Separator);
  e.ui.registry.setDecoratorByClassName(e.ui.MenuSeparatorRenderer.CSS_CLASS, function () {
    return new e.ui.Separator();
  });
  e.ui.Menu = function (a, c) {
    e.ui.Container.call(this, e.ui.Container.Orientation.VERTICAL, c || e.ui.MenuRenderer.getInstance(), a);
    this.setFocusable(!1);
  };
  e.inherits(e.ui.Menu, e.ui.Container);
  e.tagUnsealableClass(e.ui.Menu);
  e.ui.Menu.EventType = {
    BEFORE_SHOW: e.ui.Component.EventType.BEFORE_SHOW,
    SHOW: e.ui.Component.EventType.SHOW,
    BEFORE_HIDE: e.ui.Component.EventType.HIDE,
    HIDE: e.ui.Component.EventType.HIDE
  };
  e.ui.Menu.CSS_CLASS = e.ui.MenuRenderer.CSS_CLASS;
  e.ui.Menu.prototype.allowAutoFocus_ = !0;
  e.ui.Menu.prototype.allowHighlightDisabled_ = !1;
  e.ui.Menu.prototype.getCssClass = function () {
    return this.getRenderer().getCssClass();
  };
  e.ui.Menu.prototype.containsElement = function (a) {
    if (this.getRenderer().containsElement(this, a)) return !0;
    for (var c = 0, d = this.getChildCount(); c < d; c++) {
      var f = this.getChildAt(c);
      if ("function" == typeof f.containsElement && f.containsElement(a)) return !0;
    }
    return !1;
  };
  e.ui.Menu.prototype.addItem = function (a) {
    this.addChild(a, !0);
  };
  e.ui.Menu.prototype.addItemAt = function (a, c) {
    this.addChildAt(a, c, !0);
  };
  e.ui.Menu.prototype.removeItem = function (a) {
    (a = this.removeChild(a, !0)) && a.dispose();
  };
  e.ui.Menu.prototype.removeItemAt = function (a) {
    (a = this.removeChildAt(a, !0)) && a.dispose();
  };
  e.ui.Menu.prototype.getItemAt = function (a) {
    return this.getChildAt(a);
  };
  e.ui.Menu.prototype.getItemCount = function () {
    return this.getChildCount();
  };
  e.ui.Menu.prototype.getItems = function () {
    var a = [];
    this.forEachChild(function (c) {
      a.push(c);
    });
    return a;
  };
  e.ui.Menu.prototype.setPosition = function (a, c) {
    var d = this.isVisible();
    d || e.style.setElementShown(this.getElement(), !0);
    e.style.setPageOffset(this.getElement(), a, c);
    d || e.style.setElementShown(this.getElement(), !1);
  };
  e.ui.Menu.prototype.getPosition = function () {
    return this.isVisible() ? e.style.getPageOffset(this.getElement()) : null;
  };
  e.ui.Menu.prototype.setAllowAutoFocus = function (a) {
    (this.allowAutoFocus_ = a) && this.setFocusable(!0);
  };
  e.ui.Menu.prototype.getAllowAutoFocus = function () {
    return this.allowAutoFocus_;
  };
  e.ui.Menu.prototype.setAllowHighlightDisabled = function (a) {
    this.allowHighlightDisabled_ = a;
  };
  e.ui.Menu.prototype.getAllowHighlightDisabled = function () {
    return this.allowHighlightDisabled_;
  };
  e.ui.Menu.prototype.setVisible = function (a, c, d) {
    (c = e.ui.Menu.superClass_.setVisible.call(this, a, c)) && a && this.isInDocument() && this.allowAutoFocus_ && this.getKeyEventTarget().focus();
    this.openingCoords = a && d && "number" === typeof d.clientX ? new e.math.Coordinate(d.clientX, d.clientY) : null;
    return c;
  };
  e.ui.Menu.prototype.handleEnterItem = function (a) {
    this.allowAutoFocus_ && this.getKeyEventTarget().focus();
    return e.ui.Menu.superClass_.handleEnterItem.call(this, a);
  };
  e.ui.Menu.prototype.highlightNextPrefix = function (a) {
    var c = new RegExp("^" + e.string.regExpEscape(a), "i");
    return this.highlightHelper(function (a, f) {
      var d = 0 > a ? 0 : a,
        h = !1;
      do {
        ++a;
        a == f && (a = 0, h = !0);
        var k = this.getChildAt(a).getCaption();
        if (k && k.match(c)) return a;
      } while (!h || a != d);
      return this.getHighlightedIndex();
    }, this.getHighlightedIndex());
  };
  e.ui.Menu.prototype.canHighlightItem = function (a) {
    return (this.allowHighlightDisabled_ || a.isEnabled()) && a.isVisible() && a.isSupportedState(e.ui.Component.State.HOVER);
  };
  e.ui.Menu.prototype.decorateInternal = function (a) {
    this.decorateContent(a);
    e.ui.Menu.superClass_.decorateInternal.call(this, a);
  };
  e.ui.Menu.prototype.handleKeyEventInternal = function (a) {
    var c = e.ui.Menu.superClass_.handleKeyEventInternal.call(this, a);
    c || this.forEachChild(function (d) {
      !c && d.getMnemonic && d.getMnemonic() == a.keyCode && (this.isEnabled() && this.setHighlighted(d), c = d.handleKeyEvent(a));
    }, this);
    return c;
  };
  e.ui.Menu.prototype.setHighlightedIndex = function (a) {
    e.ui.Menu.superClass_.setHighlightedIndex.call(this, a);
    (a = this.getChildAt(a)) && e.style.scrollIntoContainerView(a.getElement(), this.getElement());
  };
  e.ui.Menu.prototype.decorateContent = function (a) {
    var c = this.getRenderer();
    a = this.getDomHelper().getElementsByTagNameAndClass("DIV", c.getCssClass() + "-content", a);
    for (var d = a.length, f = 0; f < d; f++) c.decorateChildren(this, a[f]);
  };
  A.ContextMenu = {};
  A.ContextMenu.currentBlock = null;
  A.ContextMenu.show = function (a, c) {
    A.WidgetDiv.show(A.ContextMenu, null);
    if (c.length) {
      for (var d = new e.ui.Menu(), f = 0, g; g = c[f]; f++) {
        var h = new e.ui.MenuItem(g.text);
        d.addChild(h, !0);
        h.setEnabled(g.enabled);
        g.enabled && e.events.listen(h, e.ui.Component.EventType.ACTION, function (a) {
          return function () {
            A.doCommand(a);
          };
        }(g.callback));
      }
      e.events.listen(d, e.ui.Component.EventType.ACTION, A.ContextMenu.hide);
      c = e.dom.getViewportSize();
      g = e.style.getViewportPageOffset(document);
      d.render(A.WidgetDiv.DIV);
      var k = d.getElement();
      A.addClass_(k, "blocklyContextMenu");
      h = e.style.getSize(k);
      f = a.clientX + g.x;
      var m = a.clientY + g.y;
      a.clientY + h.height >= c.height && (m -= h.height);
      A.RTL ? h.width >= a.clientX && (f += h.width) : a.clientX + h.width >= c.width && (f -= h.width);
      A.WidgetDiv.position(f, m, c, g);
      d.setAllowAutoFocus(!0);
      setTimeout(function () {
        k.focus();
      }, 1);
      A.ContextMenu.currentBlock = null;
    } else A.ContextMenu.hide();
  };
  A.ContextMenu.hide = function () {
    A.WidgetDiv.hideIfOwner(A.ContextMenu);
    A.ContextMenu.currentBlock = null;
  };
  A.ContextMenu.callbackFactory = function (a, c) {
    return function () {
      var d = A.Xml.domToBlock(a.workspace, c),
        f = a.getRelativeToSurfaceXY();
      f.x = A.RTL ? f.x - A.SNAP_RADIUS : f.x + A.SNAP_RADIUS;
      f.y += 2 * A.SNAP_RADIUS;
      d.moveBy(f.x, f.y);
      d.select();
    };
  };
  A.Field = function (a) {
    this.sourceBlock_ = null;
    this.fieldGroup_ = A.createSvgElement("g", {}, null);
    this.borderRect_ = A.createSvgElement("rect", {
      rx: 4,
      ry: 4,
      x: -A.BlockSvg.SEP_SPACE_X / 2,
      y: -16,
      height: 22
    }, this.fieldGroup_);
    this.textElement_ = A.createSvgElement("text", {
      "class": "blocklyText"
    }, this.fieldGroup_);
    this.size_ = {
      height: 25,
      width: 0
    };
    this.setText(a);
    this.visible_ = !0;
  };
  A.Field.prototype.clone = function () {
    e.asserts.fail("There should never be an instance of Field, only its derived classes.");
  };
  A.Field.NBSP = "\u00a0";
  A.Field.prototype.EDITABLE = !0;
  A.Field.prototype.init = function (a) {
    if (this.sourceBlock_) throw "Field has already been initialized once.";
    this.sourceBlock_ = a;
    this.updateEditable();
    a.getSvgRoot().appendChild(this.fieldGroup_);
    this.mouseUpWrapper_ = A.bindEvent_(this.fieldGroup_, "mouseup", this, this.onMouseUp_);
    this.setText(null);
  };
  A.Field.prototype.dispose = function () {
    this.mouseUpWrapper_ && (A.unbindEvent_(this.mouseUpWrapper_), this.mouseUpWrapper_ = null);
    this.sourceBlock_ = null;
    e.dom.removeNode(this.fieldGroup_);
    this.borderRect_ = this.textElement_ = this.fieldGroup_ = null;
  };
  A.Field.prototype.updateEditable = function () {
    this.EDITABLE && (this.sourceBlock_.isEditable() ? (A.addClass_(this.fieldGroup_, "blocklyEditableText"), A.removeClass_(this.fieldGroup_, "blocklyNoNEditableText"), this.fieldGroup_.style.cursor = this.CURSOR) : (A.addClass_(this.fieldGroup_, "blocklyNonEditableText"), A.removeClass_(this.fieldGroup_, "blocklyEditableText"), this.fieldGroup_.style.cursor = ""));
  };
  A.Field.prototype.isVisible = function () {
    return this.visible_;
  };
  A.Field.prototype.setVisible = function (a) {
    this.visible_ = a;
    this.getRootElement().style.display = a ? "block" : "none";
    this.render_();
  };
  A.Field.prototype.getRootElement = function () {
    return this.fieldGroup_;
  };
  A.Field.prototype.render_ = function () {
    try {
      var a = this.textElement_.getComputedTextLength();
    } catch (c) {
      a = 8 * this.textElement_.childNodes[0].length;
    }
    this.borderRect_ && this.borderRect_.setAttribute("width", a + A.BlockSvg.SEP_SPACE_X);
    this.size_.width = a;
  };
  A.Field.prototype.getSize = function () {
    this.size_.width || this.render_();
    return this.size_;
  };
  A.Field.prototype.getText = function () {
    return this.text_;
  };
  A.Field.prototype.setText = function (a) {
    null !== a && a !== this.text_ && (this.text_ = a, this.updateTextNode_(), this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_(), this.sourceBlock_.workspace.fireChangeEvent()));
  };
  A.Field.prototype.updateTextNode_ = function () {
    var a = this.text_;
    e.dom.removeChildren(this.textElement_);
    a = a.replace(/\s/g, A.Field.NBSP);
    A.RTL && a && (a += "\u200f");
    a || (a = A.Field.NBSP);
    a = document.createTextNode(a);
    this.textElement_.appendChild(a);
    this.size_.width = 0;
  };
  A.Field.prototype.getValue = function () {
    return this.getText();
  };
  A.Field.prototype.setValue = function (a) {
    this.setText(a);
  };
  A.Field.prototype.onMouseUp_ = function (a) {
    A.isRightButton(a) || 2 != A.Block.dragMode_ && this.sourceBlock_.isEditable() && this.showEditor_();
  };
  A.Field.prototype.setTooltip = function () {};
  A.goog = {};
  A.goog.isDef = function (a) {
    return void 0 !== a;
  };
  A.goog.isNull = function (a) {
    return null === a;
  };
  A.goog.isDefAndNotNull = function (a) {
    return null != a;
  };
  A.goog.isString = function (a) {
    return "string" == typeof a;
  };
  A.goog.isBoolean = function (a) {
    return "boolean" == typeof a;
  };
  A.goog.isNumber = function (a) {
    return "number" == typeof a;
  };
  A.goog.isFunction = function (a) {
    return "function" == typeof a;
  };
  A.goog.isArray = function (a) {
    return Array.isArray(a);
  };
  A.Tooltip = {};
  A.Tooltip.visible = !1;
  A.Tooltip.LIMIT = 50;
  A.Tooltip.mouseOutPid_ = 0;
  A.Tooltip.showPid_ = 0;
  A.Tooltip.lastXY_ = {
    x: 0,
    y: 0
  };
  A.Tooltip.element_ = null;
  A.Tooltip.poisonedElement_ = null;
  A.Tooltip.svgGroup_ = null;
  A.Tooltip.svgText_ = null;
  A.Tooltip.svgBackground_ = null;
  A.Tooltip.svgShadow_ = null;
  A.Tooltip.OFFSET_X = 0;
  A.Tooltip.OFFSET_Y = 10;
  A.Tooltip.RADIUS_OK = 10;
  A.Tooltip.HOVER_MS = 1E3;
  A.Tooltip.MARGINS = 5;
  A.Tooltip.createDom = function () {
    var a = A.createSvgElement("g", {
      "class": "blocklyHidden"
    }, null);
    A.Tooltip.svgGroup_ = a;
    A.Tooltip.svgShadow_ = A.createSvgElement("rect", {
      "class": "blocklyTooltipShadow",
      x: 2,
      y: 2
    }, a);
    A.Tooltip.svgBackground_ = A.createSvgElement("rect", {
      "class": "blocklyTooltipBackground"
    }, a);
    A.Tooltip.svgText_ = A.createSvgElement("text", {
      "class": "blocklyTooltipText"
    }, a);
    return a;
  };
  A.Tooltip.bindMouseEvents = function (a) {
    A.bindEvent_(a, "mouseover", null, A.Tooltip.onMouseOver_);
    A.bindEvent_(a, "mouseout", null, A.Tooltip.onMouseOut_);
    A.bindEvent_(a, "mousemove", null, A.Tooltip.onMouseMove_);
  };
  A.Tooltip.onMouseOver_ = function (a) {
    for (a = a.target; !A.goog.isString(a.tooltip) && !A.goog.isFunction(a.tooltip);) a = a.tooltip;
    A.Tooltip.element_ != a && (A.Tooltip.hide(), A.Tooltip.poisonedElement_ = null, A.Tooltip.element_ = a);
    window.clearTimeout(A.Tooltip.mouseOutPid_);
  };
  A.Tooltip.onMouseOut_ = function () {
    A.Tooltip.mouseOutPid_ = window.setTimeout(function () {
      A.Tooltip.element_ = null;
      A.Tooltip.poisonedElement_ = null;
      A.Tooltip.hide();
    }, 1);
    window.clearTimeout(A.Tooltip.showPid_);
  };
  A.Tooltip.onMouseMove_ = function (a) {
    A.Tooltip.element_ && A.Tooltip.element_.tooltip && 0 == A.Block.dragMode_ && !A.WidgetDiv.isVisible() && (A.Tooltip.visible ? (a = A.mouseToSvg(a), Math.sqrt(Math.pow(A.Tooltip.lastXY_.x - a.x, 2) + Math.pow(A.Tooltip.lastXY_.y - a.y, 2)) > A.Tooltip.RADIUS_OK && A.Tooltip.hide()) : A.Tooltip.poisonedElement_ != A.Tooltip.element_ && (window.clearTimeout(A.Tooltip.showPid_), A.Tooltip.lastXY_ = A.mouseToSvg(a), A.Tooltip.showPid_ = window.setTimeout(A.Tooltip.show_, A.Tooltip.HOVER_MS)));
  };
  A.Tooltip.hide = function () {
    A.Tooltip.visible && (A.Tooltip.visible = !1, A.Tooltip.svgGroup_ && (A.Tooltip.svgGroup_.style.display = "none"));
    window.clearTimeout(A.Tooltip.showPid_);
  };
  A.Tooltip.show_ = function () {
    A.Tooltip.poisonedElement_ = A.Tooltip.element_;
    if (A.Tooltip.svgGroup_) {
      e.dom.removeChildren(A.Tooltip.svgText_);
      var a = A.Tooltip.element_.tooltip;
      A.goog.isFunction(a) && (a = a());
      a = A.Tooltip.wrap_(a, A.Tooltip.LIMIT);
      a = a.split("\n");
      for (var c = 0; c < a.length; c++) {
        var d = A.createSvgElement("tspan", {
            dy: "1em",
            x: A.Tooltip.MARGINS
          }, A.Tooltip.svgText_),
          f = document.createTextNode(a[c]);
        d.appendChild(f);
      }
      A.Tooltip.visible = !0;
      A.Tooltip.svgGroup_.style.display = "block";
      a = A.Tooltip.svgText_.getBBox();
      c = 2 * A.Tooltip.MARGINS + a.width;
      d = a.height;
      A.Tooltip.svgBackground_.setAttribute("width", c);
      A.Tooltip.svgBackground_.setAttribute("height", d);
      A.Tooltip.svgShadow_.setAttribute("width", c);
      A.Tooltip.svgShadow_.setAttribute("height", d);
      if (A.RTL) {
        d = a.width;
        f = 0;
        for (var g; g = A.Tooltip.svgText_.childNodes[f]; f++) g.setAttribute("text-anchor", "end"), g.setAttribute("x", d + A.Tooltip.MARGINS);
      }
      d = A.Tooltip.lastXY_.x;
      d = A.RTL ? d - (A.Tooltip.OFFSET_X + c) : d + A.Tooltip.OFFSET_X;
      c = A.Tooltip.lastXY_.y + A.Tooltip.OFFSET_Y;
      f = A.svgSize();
      c + a.height > f.height && (c -= a.height + 2 * A.Tooltip.OFFSET_Y);
      A.RTL ? d = Math.max(A.Tooltip.MARGINS, d) : d + a.width > f.width - 2 * A.Tooltip.MARGINS && (d = f.width - a.width - 2 * A.Tooltip.MARGINS);
      A.Tooltip.svgGroup_.setAttribute("transform", "translate(" + d + "," + c + ")");
    }
  };
  A.Tooltip.wrap_ = function (a, c) {
    if (a.length <= c) return a;
    for (var d = a.trim().split(/\s+/), f = 0; f < d.length; f++) d[f].length > c && (c = d[f].length);
    f = -Infinity;
    var g = 1;
    do {
      var h = f;
      var k = a;
      a = [];
      var m = d.length / g,
        n = 1;
      for (f = 0; f < d.length - 1; f++) n < (f + 1.5) / m ? (n++, a[f] = !0) : a[f] = !1;
      a = A.Tooltip.wrapMutate_(d, a, c);
      f = A.Tooltip.wrapScore_(d, a, c);
      a = A.Tooltip.wrapToText_(d, a);
      g++;
    } while (f > h);
    return k;
  };
  A.Tooltip.wrapScore_ = function (a, c, d) {
    for (var f = [0], g = [], h = 0; h < a.length; h++) f[f.length - 1] += a[h].length, !0 === c[h] ? (f.push(0), g.push(a[h].charAt(a[h].length - 1))) : !1 === c[h] && f[f.length - 1]++;
    a = Math.max.apply(Math, f);
    for (h = c = 0; h < f.length; h++) c -= 2 * Math.pow(Math.abs(d - f[h]), 1.5), c -= Math.pow(a - f[h], 1.5), -1 != ".?!".indexOf(g[h]) ? c += d / 3 : -1 != ",;)]}".indexOf(g[h]) && (c += d / 4);
    1 < f.length && f[f.length - 1] <= f[f.length - 2] && (c += .5);
    return c;
  };
  A.Tooltip.wrapMutate_ = function (a, c, d) {
    for (var f = A.Tooltip.wrapScore_(a, c, d), g, h = 0; h < c.length - 1; h++) if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var m = A.Tooltip.wrapScore_(a, k, d);
      m > f && (f = m, g = k);
    }
    return g ? A.Tooltip.wrapMutate_(a, g, d) : c;
  };
  A.Tooltip.wrapToText_ = function (a, c) {
    for (var d = [], f = 0; f < a.length; f++) d.push(a[f]), void 0 !== c[f] && d.push(c[f] ? "\n" : " ");
    return d.join("");
  };
  A.FieldLabel = function (a) {
    this.sourceBlock_ = null;
    this.textElement_ = A.createSvgElement("text", {
      "class": "blocklyText"
    }, null);
    this.size_ = {
      height: 25,
      width: 0
    };
    this.setText(a);
  };
  e.inherits(A.FieldLabel, A.Field);
  A.FieldLabel.prototype.clone = function () {
    return new A.FieldLabel(this.getText());
  };
  A.FieldLabel.prototype.EDITABLE = !1;
  A.FieldLabel.prototype.init = function (a) {
    if (this.sourceBlock_) throw "Text has already been initialized once.";
    this.sourceBlock_ = a;
    a.getSvgRoot().appendChild(this.textElement_);
    this.textElement_.tooltip = this.sourceBlock_;
    A.Tooltip.bindMouseEvents(this.textElement_);
  };
  A.FieldLabel.prototype.dispose = function () {
    e.dom.removeNode(this.textElement_);
    this.textElement_ = null;
  };
  A.FieldLabel.prototype.getRootElement = function () {
    return this.textElement_;
  };
  A.FieldLabel.prototype.setTooltip = function (a) {
    this.textElement_.tooltip = a;
  };
  A.Input = function (a, c, d, f) {
    this.type = a;
    this.name = c;
    this.sourceBlock_ = d;
    this.connection = f;
    this.fieldRow = [];
    this.align = A.ALIGN_LEFT;
    this.visible_ = !0;
  };
  A.Input.prototype.appendField = function (a, c) {
    if (!a && !c) return this;
    A.goog.isString(a) && (a = new A.FieldLabel(a));
    this.sourceBlock_.svg_ && a.init(this.sourceBlock_);
    a.name = c;
    a.prefixField && this.appendField(a.prefixField);
    this.fieldRow.push(a);
    a.suffixField && this.appendField(a.suffixField);
    this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_());
    return this;
  };
  A.Input.prototype.appendTitle = function (a, c) {
    console.log("Deprecated call to appendTitle, use appendField instead.");
    return this.appendField(a, c);
  };
  A.Input.prototype.removeField = function (a) {
    for (var c = 0, d; d = this.fieldRow[c]; c++) if (d.name === a) {
      d.dispose();
      this.fieldRow.splice(c, 1);
      this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_());
      return;
    }
    e.asserts.fail('Field "%s" not found.', a);
  };
  A.Input.prototype.isVisible = function () {
    return this.visible_;
  };
  A.Input.prototype.setVisible = function (a) {
    var c = [];
    if (this.visible_ == a) return c;
    for (var d = (this.visible_ = a) ? "block" : "none", f = 0, g; g = this.fieldRow[f]; f++) g.setVisible(a);
    this.connection && (a ? c = this.connection.unhideAll() : this.connection.hideAll(), f = this.connection.targetBlock()) && (f.svg_.getRootElement().style.display = d, a || (f.rendered = !1));
    return c;
  };
  A.Input.prototype.setCheck = function (a) {
    if (!this.connection) throw "This input does not have a connection.";
    this.connection.setCheck(a);
    return this;
  };
  A.Input.prototype.setAlign = function (a) {
    this.align = a;
    this.sourceBlock_.rendered && this.sourceBlock_.render();
    return this;
  };
  A.Input.prototype.init = function () {
    for (var a = 0; a < this.fieldRow.length; a++) this.fieldRow[a].init(this.sourceBlock_);
  };
  A.Input.prototype.dispose = function () {
    for (var a = 0, c; c = this.fieldRow[a]; a++) c.dispose();
    this.connection && this.connection.dispose();
    this.sourceBlock_ = null;
  };
  A.Msg = {};
  A.Mutator = function (a) {
    A.Mutator.superClass_.constructor.call(this, null);
    this.quarkXml_ = [];
    for (var c = 0; c < a.length; c++) {
      var d = e.dom.createDom("block", {
        type: a[c]
      });
      this.quarkXml_[c] = d;
    }
  };
  e.inherits(A.Mutator, A.Icon);
  A.Mutator.prototype.workspaceWidth_ = 0;
  A.Mutator.prototype.workspaceHeight_ = 0;
  A.Mutator.prototype.createIcon = function () {
    A.Icon.prototype.createIcon_.call(this);
    var a = A.Icon.RADIUS / 2;
    A.createSvgElement("rect", {
      "class": "blocklyIconShield",
      width: 4 * a,
      height: 4 * a,
      rx: a,
      ry: a
    }, this.iconGroup_);
    this.iconMark_ = A.createSvgElement("text", {
      "class": "blocklyIconMark",
      x: A.Icon.RADIUS,
      y: 2 * A.Icon.RADIUS - 4
    }, this.iconGroup_);
    this.iconMark_.appendChild(document.createTextNode("\u2605"));
  };
  A.Mutator.prototype.iconClick_ = function (a) {
    this.block_.isEditable() && A.Icon.prototype.iconClick_.call(this, a);
  };
  A.Mutator.prototype.createEditor_ = function () {
    this.svgDialog_ = A.createSvgElement("svg", {
      x: A.Bubble.BORDER_WIDTH,
      y: A.Bubble.BORDER_WIDTH
    }, null);
    A.createSvgElement("rect", {
      "class": "blocklyMutatorBackground",
      height: "100%",
      width: "100%"
    }, this.svgDialog_);
    var a = this;
    this.workspace_ = new A.Workspace(function () {
      return a.getFlyoutMetrics_();
    }, null);
    this.flyout_ = new A.Flyout();
    this.flyout_.autoClose = !1;
    this.svgDialog_.appendChild(this.flyout_.createDom());
    this.svgDialog_.appendChild(this.workspace_.createDom());
    return this.svgDialog_;
  };
  A.Mutator.prototype.updateEditable = function () {
    this.block_.isEditable() ? A.Icon.prototype.updateEditable.call(this) : (this.setVisible(!1), A.removeClass_(this.iconGroup_, "blocklyIconGroup"));
  };
  A.Mutator.prototype.resizeBubble_ = function () {
    var a = 2 * A.Bubble.BORDER_WIDTH,
      c = this.workspace_.getCanvas().getBBox(),
      d = this.flyout_.getMetrics_();
    var f = A.RTL ? -c.x : c.width + c.x;
    c = Math.max(c.height + 3 * a, d.contentHeight + 20);
    f += 3 * a;
    if (Math.abs(this.workspaceWidth_ - f) > a || Math.abs(this.workspaceHeight_ - c) > a) this.workspaceWidth_ = f, this.workspaceHeight_ = c, this.bubble_.setBubbleSize(f + a, c + a), this.svgDialog_.setAttribute("width", this.workspaceWidth_), this.svgDialog_.setAttribute("height", this.workspaceHeight_);
    A.RTL && (a = "translate(" + this.workspaceWidth_ + ",0)", this.workspace_.getCanvas().setAttribute("transform", a));
  };
  A.Mutator.prototype.setVisible = function (a) {
    if (a != this.isVisible()) if (a) {
      this.bubble_ = new A.Bubble(this.block_.workspace, this.createEditor_(), this.block_.svg_.svgPath_, this.iconX_, this.iconY_, null, null);
      var c = this;
      this.flyout_.init(this.workspace_);
      this.flyout_.show(this.quarkXml_);
      this.rootBlock_ = this.block_.decompose(this.workspace_);
      a = this.rootBlock_.getDescendants();
      for (var d = 0, f; f = a[d]; d++) f.render();
      this.rootBlock_.setMovable(!1);
      this.rootBlock_.setDeletable(!1);
      a = 2 * this.flyout_.CORNER_RADIUS;
      d = this.flyout_.width_ + a;
      A.RTL && (d = -d);
      this.rootBlock_.moveBy(d, a);
      this.block_.saveConnections && (this.block_.saveConnections(this.rootBlock_), this.sourceListener_ = A.bindEvent_(this.block_.workspace.getCanvas(), "blocklyWorkspaceChange", this.block_, function () {
        c.block_.saveConnections(c.rootBlock_);
      }));
      this.resizeBubble_();
      A.bindEvent_(this.workspace_.getCanvas(), "blocklyWorkspaceChange", this.block_, function () {
        c.workspaceChanged_();
      });
      this.updateColour();
    } else this.svgDialog_ = null, this.flyout_.dispose(), this.flyout_ = null, this.workspace_.dispose(), this.rootBlock_ = this.workspace_ = null, this.bubble_.dispose(), this.bubble_ = null, this.workspaceHeight_ = this.workspaceWidth_ = 0, this.sourceListener_ && (A.unbindEvent_(this.sourceListener_), this.sourceListener_ = null);
  };
  A.Mutator.prototype.workspaceChanged_ = function () {
    if (0 == A.Block.dragMode_) for (var a = this.workspace_.getTopBlocks(!1), c = 0, d; d = a[c]; c++) {
      var f = d.getRelativeToSurfaceXY(),
        g = d.getHeightWidth();
      d.isDeletable() && (A.RTL ? f.x > -this.flyout_.width_ + 20 : f.x < this.flyout_.width_ - 20) ? d.dispose(!1, !0) : 20 > f.y + g.height && d.moveBy(0, 20 - g.height - f.y);
    }
    this.rootBlock_.workspace == this.workspace_ && (a = this.block_.rendered, this.block_.rendered = !1, this.block_.compose(this.rootBlock_), this.block_.rendered = a, this.block_.rendered && this.block_.render(), this.resizeBubble_(), this.block_.workspace.fireChangeEvent());
  };
  A.Mutator.prototype.getFlyoutMetrics_ = function () {
    var a = 0;
    A.RTL && (a += this.workspaceWidth_);
    return {
      viewHeight: this.workspaceHeight_,
      viewWidth: 0,
      absoluteTop: 0,
      absoluteLeft: a
    };
  };
  A.Mutator.prototype.dispose = function () {
    this.block_.mutator = null;
    A.Icon.prototype.dispose.call(this);
  };
  A.Warning = function (a) {
    A.Warning.superClass_.constructor.call(this, a);
    this.createIcon_();
  };
  e.inherits(A.Warning, A.Icon);
  A.Warning.textToDom_ = function (a) {
    var c = A.createSvgElement("text", {
      "class": "blocklyText blocklyBubbleText",
      y: A.Bubble.BORDER_WIDTH
    }, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
      var f = A.createSvgElement("tspan", {
          dy: "1em",
          x: A.Bubble.BORDER_WIDTH
        }, c),
        g = document.createTextNode(a[d]);
      f.appendChild(g);
    }
    return c;
  };
  A.Warning.prototype.text_ = "";
  A.Warning.prototype.createIcon_ = function () {
    A.Icon.prototype.createIcon_.call(this);
    A.createSvgElement("path", {
      "class": "blocklyIconShield",
      d: "M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"
    }, this.iconGroup_);
    this.iconMark_ = A.createSvgElement("text", {
      "class": "blocklyIconMark",
      x: A.Icon.RADIUS,
      y: 2 * A.Icon.RADIUS - 3
    }, this.iconGroup_);
    this.iconMark_.appendChild(document.createTextNode("!"));
  };
  A.Warning.prototype.setVisible = function (a) {
    if (a != this.isVisible()) if (a) {
      a = A.Warning.textToDom_(this.text_);
      this.bubble_ = new A.Bubble(this.block_.workspace, a, this.block_.svg_.svgPath_, this.iconX_, this.iconY_, null, null);
      if (A.RTL) for (var c = a.getBBox().width, d = 0, f; f = a.childNodes[d]; d++) f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + A.Bubble.BORDER_WIDTH);
      this.updateColour();
      a = this.bubble_.getBubbleSize();
      this.bubble_.setBubbleSize(a.width, a.height);
    } else this.bubble_.dispose(), this.body_ = this.bubble_ = null;
  };
  A.Warning.prototype.bodyFocus_ = function () {
    this.bubble_.promote_();
  };
  A.Warning.prototype.setText = function (a) {
    this.text_ != a && (this.text_ = a, this.isVisible() && (this.setVisible(!1), this.setVisible(!0)));
  };
  A.Warning.prototype.dispose = function () {
    this.block_.warning = null;
    A.Icon.prototype.dispose.call(this);
  };
  A.uidCounter_ = 0;
  A.getUidCounter = function () {
    return A.uidCounter_;
  };
  A.setUidCounter = function (a) {
    A.uidCounter_ = a;
  };
  A.genUid = function () {
    var a = (++A.uidCounter_).toString();
    return A.Realtime.isEnabled() ? A.Realtime.genUid(a) : a;
  };
  A.Block = function () {
    e.asserts.assert(0 == arguments.length, "Please use Blockly.Block.obtain.");
  };
  A.Block.obtain = function (a, c) {
    if (A.Realtime.isEnabled()) return A.Realtime.obtainBlock(a, c);
    var d = new A.Block();
    d.initialize(a, c);
    return d;
  };
  A.Block.prototype.initialize = function (a, c) {
    this.id = A.genUid();
    a.addTopBlock(this);
    this.fill(a, c);
    A.goog.isFunction(this.onchange) && A.bindEvent_(a.getCanvas(), "blocklyWorkspaceChange", this, this.onchange);
  };
  A.Block.prototype.fill = function (a, c) {
    this.previousConnection = this.nextConnection = this.outputConnection = null;
    this.inputList = [];
    this.mini = this.disabled = this.rendered = this.inputsInline = !1;
    this.tooltip = "";
    this.contextMenu = !0;
    this.parentBlock_ = null;
    this.childBlocks_ = [];
    this.editable_ = this.movable_ = this.deletable_ = !0;
    this.collapsed_ = !1;
    this.cloneBlock_ = null;
    this.workspace = a;
    this.isInFlyout = a.isFlyout;
    this.colourSaturation_ = .45;
    this.colourValue_ = .65;
    this.fillPattern_ = null;
    c && (this.type = c, a = A.Blocks[c], e.asserts.assertObject(a, 'Error: "%s" is an unknown language block.', c), e.mixin(this, a));
    A.goog.isFunction(this.init) && this.init();
  };
  A.Block.getById = function (a, c) {
    return A.Realtime.isEnabled() ? A.Realtime.getBlockById(a) : c.getBlockById(a);
  };
  A.Block.prototype.svg_ = null;
  A.Block.prototype.mutator = null;
  A.Block.prototype.comment = null;
  A.Block.prototype.warning = null;
  A.Block.prototype.getIcons = function () {
    var a = [];
    this.mutator && a.push(this.mutator);
    this.comment && a.push(this.comment);
    this.warning && a.push(this.warning);
    return a;
  };
  A.Block.prototype.initSvg = function () {
    this.svg_ = new A.BlockSvg(this);
    this.svg_.init();
    A.readOnly || A.bindEvent_(this.svg_.getRootElement(), "mousedown", this, this.onMouseDown_);
    this.workspace.getCanvas().appendChild(this.svg_.getRootElement());
  };
  A.Block.prototype.getSvgRoot = function () {
    return this.svg_ && this.svg_.getRootElement();
  };
  A.Block.dragMode_ = 0;
  A.Block.onMouseUpWrapper_ = null;
  A.Block.onMouseMoveWrapper_ = null;
  A.Block.terminateDrag_ = function () {
    A.Block.onMouseUpWrapper_ && (A.unbindEvent_(A.Block.onMouseUpWrapper_), A.Block.onMouseUpWrapper_ = null);
    A.Block.onMouseMoveWrapper_ && (A.unbindEvent_(A.Block.onMouseMoveWrapper_), A.Block.onMouseMoveWrapper_ = null);
    var a = A.selected;
    if (2 == A.Block.dragMode_ && a) {
      var c = a.getRelativeToSurfaceXY();
      a.moveConnections_(c.x - a.startDragX, c.y - a.startDragY);
      delete a.draggedBubbles_;
      a.setDragging_(!1);
      a.render();
      e.Timer.callOnce(a.bumpNeighbours_, A.BUMP_DELAY, a);
      A.fireUiEvent(window, "resize");
    }
    a && a.workspace.fireChangeEvent();
    A.Block.dragMode_ = 0;
  };
  A.Block.prototype.select = function () {
    e.asserts.assertObject(this.svg_, "Block is not rendered.");
    A.selected && A.selected.unselect();
    A.selected = this;
    this.svg_.addSelect();
    A.fireUiEvent(this.workspace.getCanvas(), "blocklySelectChange");
  };
  A.Block.prototype.unselect = function () {
    e.asserts.assertObject(this.svg_, "Block is not rendered.");
    A.selected = null;
    this.svg_.removeSelect();
    A.fireUiEvent(this.workspace.getCanvas(), "blocklySelectChange");
  };
  A.Block.prototype.dispose = function (a, c, d) {
    this.rendered = !1;
    this.unplug(a, !1);
    c && this.svg_ && this.svg_.disposeUiEffect();
    this.workspace && !d && (this.workspace.removeTopBlock(this), this.workspace = null);
    A.selected == this && (A.selected = null, A.terminateDrag_());
    A.ContextMenu.currentBlock == this && A.ContextMenu.hide();
    for (a = this.childBlocks_.length - 1; 0 <= a; a--) this.childBlocks_[a].dispose(!1);
    c = this.getIcons();
    for (a = 0; a < c.length; a++) c[a].dispose();
    for (a = 0; c = this.inputList[a]; a++) c.dispose();
    this.inputList = [];
    c = this.getConnections_(!0);
    for (a = 0; a < c.length; a++) d = c[a], d.targetConnection && d.disconnect(), c[a].dispose();
    this.svg_ && (this.svg_.dispose(), this.svg_ = null);
    A.Realtime.isEnabled() && !A.Realtime.withinSync && A.Realtime.removeBlock(this);
  };
  A.Block.prototype.unplug = function (a, c) {
    c = c && !!this.getParent();
    if (this.outputConnection) this.outputConnection.targetConnection && this.setParent(null);else {
      var d = null;
      this.previousConnection && this.previousConnection.targetConnection && (d = this.previousConnection.targetConnection, this.setParent(null));
      var f = this.getNextBlock();
      a && f && (a = this.nextConnection.targetConnection, f.setParent(null), d && d.connect(a));
    }
    c && this.moveBy(A.SNAP_RADIUS * (A.RTL ? -1 : 1), 2 * A.SNAP_RADIUS);
  };
  A.Block.prototype.getRelativeToSurfaceXY = function () {
    var a = 0,
      c = 0;
    if (this.svg_) {
      var d = this.svg_.getRootElement();
      do {
        var f = A.getRelativeXY_(d);
        a += f.x;
        c += f.y;
        d = d.parentNode;
      } while (d && d != this.workspace.getCanvas());
    }
    return {
      x: a,
      y: c
    };
  };
  A.Block.prototype.moveBy = function (a, c) {
    var d = this.getRelativeToSurfaceXY();
    this.svg_.getRootElement().setAttribute("transform", "translate(" + (d.x + a) + ", " + (d.y + c) + ")");
    this.moveConnections_(a, c);
    A.Realtime.blockChanged(this);
  };
  A.Block.prototype.getHeightWidth = function () {
    var a = this.svg_.height,
      c = this.svg_.width,
      d = this.getNextBlock();
    d && (d = d.getHeightWidth(), a += d.height - 4, c = Math.max(c, d.width));
    return {
      height: a,
      width: c
    };
  };
  A.Block.prototype.onMouseDown_ = function (a) {
    if (!this.isInFlyout) {
      A.svgResize();
      A.terminateDrag_();
      this.select();
      A.hideChaff();
      if (A.isRightButton(a)) this.showContextMenu_(a);else if (this.isMovable()) {
        A.removeAllRanges();
        A.setCursorHand_(!0);
        var c = this.getRelativeToSurfaceXY();
        this.startDragX = c.x;
        this.startDragY = c.y;
        this.startDragMouseX = a.clientX;
        this.startDragMouseY = a.clientY;
        A.Block.dragMode_ = 1;
        A.Block.onMouseUpWrapper_ = A.bindEvent_(document, "mouseup", this, this.onMouseUp_);
        A.Block.onMouseMoveWrapper_ = A.bindEvent_(document, "mousemove", this, this.onMouseMove_);
        this.draggedBubbles_ = [];
        c = this.getDescendants();
        for (var d = 0, f; f = c[d]; d++) {
          f = f.getIcons();
          for (var g = 0; g < f.length; g++) {
            var h = f[g].getIconLocation();
            h.bubble = f[g];
            this.draggedBubbles_.push(h);
          }
        }
      } else return;
      a.stopPropagation();
    }
  };
  A.Block.prototype.onMouseUp_ = function () {
    var a = this;
    A.doCommand(function () {
      A.terminateDrag_();
      l.triggerEvent("computer_place");
      if (A.selected && A.highlightedConnection_) A.localConnection_.connect(A.highlightedConnection_), a.svg_ && (A.localConnection_.isSuperior() ? A.highlightedConnection_ : A.localConnection_).sourceBlock_.svg_.connectionUiEffect(), a.workspace.trashcan && a.workspace.trashcan.isOpen && a.workspace.trashcan.close();else if (a.workspace.trashcan && a.workspace.trashcan.isOpen) {
        var c = a.workspace.trashcan;
        e.Timer.callOnce(c.close, 100, c);
        A.selected.dispose(!1, !0);
        A.fireUiEvent(window, "resize");
      }
      A.highlightedConnection_ && (A.highlightedConnection_.unhighlight(), A.highlightedConnection_ = null);
    });
  };
  A.Block.prototype.showHelp_ = function () {
    var a = A.goog.isFunction(this.helpUrl) ? this.helpUrl() : this.helpUrl;
    a && window.open(a);
  };
  A.Block.prototype.duplicate_ = function () {
    var a = A.Xml.blockToDom_(this);
    A.Xml.deleteNext(a);
    a = A.Xml.domToBlock(this.workspace, a);
    var c = this.getRelativeToSurfaceXY();
    c.x = A.RTL ? c.x - A.SNAP_RADIUS : c.x + A.SNAP_RADIUS;
    c.y += 2 * A.SNAP_RADIUS;
    a.moveBy(c.x, c.y);
    a.select();
    return a;
  };
  A.Block.prototype.showContextMenu_ = function (a) {
    if (!A.readOnly && this.contextMenu) {
      var c = this,
        d = [];
      if (this.isDeletable() && this.isMovable() && !c.isInFlyout) {
        var f = {
          text: A.Msg.DUPLICATE_BLOCK,
          enabled: !0,
          callback: function () {
            c.duplicate_();
          }
        };
        this.getDescendants().length > this.workspace.remainingCapacity() && (f.enabled = !1);
        d.push(f);
        this.isEditable() && !this.collapsed_ && A.comments && (f = {
          enabled: !0
        }, this.comment ? (f.text = A.Msg.REMOVE_COMMENT, f.callback = function () {
          c.setCommentText(null);
        }) : (f.text = A.Msg.ADD_COMMENT, f.callback = function () {
          c.setCommentText("");
        }), d.push(f));
        if (!this.collapsed_) for (f = 0; f < this.inputList.length; f++) if (this.inputList[f].type == A.INPUT_VALUE) {
          f = {
            enabled: !0
          };
          f.text = this.inputsInline ? A.Msg.EXTERNAL_INPUTS : A.Msg.INLINE_INPUTS;
          f.callback = function () {
            c.setInputsInline(!c.inputsInline);
          };
          d.push(f);
          break;
        }
        A.collapse && (this.collapsed_ ? (f = {
          enabled: !0
        }, f.text = A.Msg.EXPAND_BLOCK, f.callback = function () {
          c.setCollapsed(!1);
        }, d.push(f)) : (f = {
          enabled: !0
        }, f.text = A.Msg.COLLAPSE_BLOCK, f.callback = function () {
          c.setCollapsed(!0);
        }, d.push(f)));
        A.disable && (f = {
          text: this.disabled ? A.Msg.ENABLE_BLOCK : A.Msg.DISABLE_BLOCK,
          enabled: !this.getInheritedDisabled(),
          callback: function () {
            c.setDisabled(!c.disabled);
          }
        }, d.push(f));
        f = this.getDescendants().length;
        var g = this.getNextBlock();
        g && (f -= g.getDescendants().length);
        f = {
          text: 1 == f ? A.Msg.DELETE_BLOCK : A.Msg.DELETE_X_BLOCKS.replace("%1", String(f)),
          enabled: !0,
          callback: function () {
            c.dispose(!0, !0);
          }
        };
        d.push(f);
      }
      f = {
        enabled: !(A.goog.isFunction(this.helpUrl) ? !this.helpUrl() : !this.helpUrl)
      };
      f.text = A.Msg.HELP;
      f.callback = function () {
        c.showHelp_();
      };
      d.push(f);
      this.customContextMenu && !c.isInFlyout && this.customContextMenu(d);
      A.ContextMenu.show(a, d);
      A.ContextMenu.currentBlock = this;
    }
  };
  A.Block.prototype.getConnections_ = function (a) {
    var c = [];
    if (a || this.rendered) if (this.outputConnection && c.push(this.outputConnection), this.nextConnection && c.push(this.nextConnection), this.previousConnection && c.push(this.previousConnection), a || !this.collapsed_) {
      a = 0;
      for (var d; d = this.inputList[a]; a++) d.connection && c.push(d.connection);
    }
    return c;
  };
  A.Block.prototype.moveConnections_ = function (a, c) {
    if (this.rendered) {
      for (var d = this.getConnections_(!1), f = 0; f < d.length; f++) d[f].moveBy(a, c);
      d = this.getIcons();
      for (f = 0; f < d.length; f++) d[f].computeIconLocation();
      for (f = 0; f < this.childBlocks_.length; f++) this.childBlocks_[f].moveConnections_(a, c);
    }
  };
  A.Block.prototype.setDragging_ = function (a) {
    a ? this.svg_.addDragging() : this.svg_.removeDragging();
    for (var c = 0; c < this.childBlocks_.length; c++) this.childBlocks_[c].setDragging_(a);
  };
  A.Block.prototype.onMouseMove_ = function (a) {
    var c = this;
    A.doCommand(function () {
      if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();else {
        A.removeAllRanges();
        var d = a.clientX - c.startDragMouseX,
          f = a.clientY - c.startDragMouseY;
        1 == A.Block.dragMode_ && Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) > A.DRAG_RADIUS && (A.Block.dragMode_ = 2, c.setParent(null), c.setDragging_(!0), A.fireUiEvent(c.workspace.getCanvas(), "blocklyDragBlock"), l.triggerEvent("computer_pickup"));
        if (2 == A.Block.dragMode_) {
          var g = c.startDragX + d,
            h = c.startDragY + f;
          c.svg_.getRootElement().setAttribute("transform", "translate(" + g + ", " + h + ")");
          for (g = 0; g < c.draggedBubbles_.length; g++) h = c.draggedBubbles_[g], h.bubble.setIconLocation(h.x + d, h.y + f);
          h = c.getConnections_(!1);
          var k = null,
            m = null,
            n = A.SNAP_RADIUS;
          for (g = 0; g < h.length; g++) {
            var p = h[g],
              r = p.closest(n, d, f);
            r.connection && (k = r.connection, m = p, n = r.radius);
          }
          A.highlightedConnection_ && A.highlightedConnection_ != k && (A.highlightedConnection_.unhighlight(), A.highlightedConnection_ = null, A.localConnection_ = null);
          k && k != A.highlightedConnection_ && (k.highlight(), A.highlightedConnection_ = k, A.localConnection_ = m);
          if (c.workspace.trashcan && c.isDeletable()) c.workspace.trashcan.onMouseMove(a);
        }
        a.stopPropagation();
        a.preventDefault();
      }
    });
  };
  A.Block.prototype.bumpNeighbours_ = function () {
    if (0 == A.Block.dragMode_) {
      var a = this.getRootBlock();
      if (!a.isInFlyout) for (var c = this.getConnections_(!1), d = 0; d < c.length; d++) {
        var f = c[d];
        f.targetConnection && f.isSuperior() && f.targetBlock().bumpNeighbours_();
        for (var g = f.neighbours_(A.SNAP_RADIUS), h = 0; h < g.length; h++) {
          var k = g[h];
          f.targetConnection && k.targetConnection || k.sourceBlock_.getRootBlock() != a && (f.isSuperior() ? k.bumpAwayFrom_(f) : f.bumpAwayFrom_(k));
        }
      }
    }
  };
  A.Block.prototype.getParent = function () {
    return this.parentBlock_;
  };
  A.Block.prototype.getSurroundParent = function () {
    for (var a = this;;) {
      do {
        var c = a;
        a = a.getParent();
        if (!a) return null;
      } while (a.getNextBlock() == c);
      return a;
    }
  };
  A.Block.prototype.getNextBlock = function () {
    return this.nextConnection && this.nextConnection.targetBlock();
  };
  A.Block.prototype.getRootBlock = function () {
    var a = this;
    do {
      var c = a;
      a = c.parentBlock_;
    } while (a);
    return c;
  };
  A.Block.prototype.getChildren = function () {
    return this.childBlocks_;
  };
  A.Block.prototype.setParent = function (a) {
    if (this.parentBlock_) {
      for (var c = this.parentBlock_.childBlocks_, d, f = 0; d = c[f]; f++) if (d == this) {
        c.splice(f, 1);
        break;
      }
      c = this.getRelativeToSurfaceXY();
      this.workspace.getCanvas().appendChild(this.svg_.getRootElement());
      this.svg_.getRootElement().setAttribute("transform", "translate(" + c.x + ", " + c.y + ")");
      this.parentBlock_ = null;
      this.previousConnection && this.previousConnection.targetConnection && this.previousConnection.disconnect();
      this.outputConnection && this.outputConnection.targetConnection && this.outputConnection.disconnect();
    } else e.array.contains(this.workspace.getTopBlocks(!1), this) && this.workspace.removeTopBlock(this);
    (this.parentBlock_ = a) ? (a.childBlocks_.push(this), c = this.getRelativeToSurfaceXY(), a.svg_ && this.svg_ && a.svg_.getRootElement().appendChild(this.svg_.getRootElement()), a = this.getRelativeToSurfaceXY(), this.moveConnections_(a.x - c.x, a.y - c.y)) : this.workspace.addTopBlock(this);
  };
  A.Block.prototype.setCloneBlock = function (a) {
    this.cloneBlock_ = a;
  };
  A.Block.prototype.getCloneBlock = function () {
    return this.cloneBlock_;
  };
  A.Block.prototype.getDescendants = function () {
    for (var a = [this], c, d = 0; c = this.childBlocks_[d]; d++) a.push.apply(a, c.getDescendants());
    return a;
  };
  A.Block.prototype.isDeletable = function () {
    return this.deletable_ && !A.readOnly;
  };
  A.Block.prototype.setDeletable = function (a) {
    this.deletable_ = a;
    this.svg_ && this.svg_.updateMovable();
  };
  A.Block.prototype.isMovable = function () {
    return this.movable_ && !A.readOnly;
  };
  A.Block.prototype.setMovable = function (a) {
    this.movable_ = a;
    this.svg_ && this.svg_.updateMovable();
  };
  A.Block.prototype.isEditable = function () {
    return this.editable_ && !A.readOnly;
  };
  A.Block.prototype.setEditable = function (a) {
    this.editable_ = a;
    a = 0;
    for (var c; c = this.inputList[a]; a++) for (var d = 0, f; f = c.fieldRow[d]; d++) f.updateEditable();
    c = this.getIcons();
    for (a = 0; a < c.length; a++) c[a].updateEditable();
  };
  A.Block.prototype.setHelpUrl = function (a) {
    this.helpUrl = a;
  };
  A.Block.prototype.getHexColour = function () {
    return A.makeColour(this.getColour(), this.getSaturation(), this.getValue());
  };
  A.Block.prototype.getColour = function () {
    return this.colourHue_;
  };
  A.Block.prototype.getSaturation = function () {
    return this.colourSaturation_;
  };
  A.Block.prototype.getValue = function () {
    return this.colourValue_;
  };
  A.Block.prototype.getFillPattern = function () {
    return this.fillPattern_;
  };
  A.Block.prototype.setColour = function (a) {
    this.colourHue_ = a;
    this.svg_ && this.svg_.updateColour();
    var c = this.getIcons();
    for (a = 0; a < c.length; a++) c[a].updateColour();
    if (this.rendered) {
      for (a = 0; c = this.inputList[a]; a++) for (var d = 0, f; f = c.fieldRow[d]; d++) f.setText(null);
      this.render();
    }
  };
  A.Block.prototype.setFillPattern = function (a) {
    this.fillPattern_ = a;
  };
  A.Block.prototype.setHSV = function (a, c, d) {
    this.colourHue_ = a;
    this.colourSaturation_ = c;
    this.colourValue_ = d;
    this.svg_ && this.svg_.updateColour();
    c = this.getIcons();
    for (a = 0; a < c.length; a++) c[a].updateColour();
    if (this.rendered) {
      for (a = 0; c = this.inputList[a]; a++) {
        d = 0;
        for (var f; f = c.titleRow[d]; d++) f.setText(null);
      }
      this.render();
    }
  };
  A.Block.prototype.getField_ = function (a) {
    for (var c = 0, d; d = this.inputList[c]; c++) for (var f = 0, g; g = d.fieldRow[f]; f++) if (g.name === a) return g;
    return null;
  };
  A.Block.prototype.getFieldValue = function (a) {
    return (a = this.getField_(a)) ? a.getValue() : null;
  };
  A.Block.prototype.getTitleValue = function (a) {
    console.log("Deprecated call to getTitleValue, use getFieldValue instead.");
    return this.getFieldValue(a);
  };
  A.Block.prototype.setFieldValue = function (a, c) {
    var d = this.getField_(c);
    e.asserts.assertObject(d, 'Field "%s" not found.', c);
    d.setValue(a);
  };
  A.Block.prototype.setTitleValue = function (a, c) {
    console.log("Deprecated call to setTitleValue, use setFieldValue instead.");
    this.setFieldValue(a, c);
  };
  A.Block.prototype.setTooltip = function (a) {
    this.tooltip = a;
  };
  A.Block.prototype.setPreviousStatement = function (a, c) {
    this.previousConnection && (e.asserts.assert(!this.previousConnection.targetConnection, "Must disconnect previous statement before removing connection."), this.previousConnection.dispose(), this.previousConnection = null);
    a && (e.asserts.assert(!this.outputConnection, "Remove output connection prior to adding previous connection."), void 0 === c && (c = null), this.previousConnection = new A.Connection(this, A.PREVIOUS_STATEMENT), this.previousConnection.setCheck(c));
    this.rendered && (this.render(), this.bumpNeighbours_());
  };
  A.Block.prototype.setNextStatement = function (a, c) {
    this.nextConnection && (e.asserts.assert(!this.nextConnection.targetConnection, "Must disconnect next statement before removing connection."), this.nextConnection.dispose(), this.nextConnection = null);
    a && (void 0 === c && (c = null), this.nextConnection = new A.Connection(this, A.NEXT_STATEMENT), this.nextConnection.setCheck(c));
    this.rendered && (this.render(), this.bumpNeighbours_());
  };
  A.Block.prototype.setOutput = function (a, c) {
    this.outputConnection && (e.asserts.assert(!this.outputConnection.targetConnection, "Must disconnect output value before removing connection."), this.outputConnection.dispose(), this.outputConnection = null);
    a && (e.asserts.assert(!this.previousConnection, "Remove previous connection prior to adding output connection."), void 0 === c && (c = null), this.outputConnection = new A.Connection(this, A.OUTPUT_VALUE), this.outputConnection.setCheck(c));
    this.rendered && (this.render(), this.bumpNeighbours_());
  };
  A.Block.prototype.changeOutput = function (a) {
    e.asserts.assert(this.outputConnection, "Only use changeOutput() on blocks that already have an output.");
    this.outputConnection.setCheck(a);
  };
  A.Block.prototype.setInputsInline = function (a) {
    this.inputsInline = a;
    this.rendered && (this.render(), this.bumpNeighbours_(), this.workspace.fireChangeEvent());
  };
  A.Block.prototype.setMini = function (a) {
    this.mini = a;
    this.rendered && (this.render(), this.bumpNeighbours_(), this.workspace.fireChangeEvent());
  };
  A.Block.prototype.setDisabled = function (a) {
    this.disabled != a && (this.disabled = a, this.svg_.updateDisabled(), this.workspace.fireChangeEvent());
  };
  A.Block.prototype.getInheritedDisabled = function () {
    for (var a = this;;) {
      a = a.getSurroundParent();
      if (!a) return !1;
      if (a.disabled) return !0;
    }
  };
  A.Block.prototype.isCollapsed = function () {
    return this.collapsed_;
  };
  A.Block.prototype.setCollapsed = function (a) {
    if (this.collapsed_ != a) {
      this.collapsed_ = a;
      for (var c = [], d = 0, f; f = this.inputList[d]; d++) c.push.apply(c, f.setVisible(!a));
      if (a) {
        a = this.getIcons();
        for (d = 0; d < a.length; d++) a[d].setVisible(!1);
        d = this.toString(A.COLLAPSE_CHARS);
        this.appendDummyInput("_TEMP_COLLAPSED_INPUT").appendField(d);
      } else this.removeInput("_TEMP_COLLAPSED_INPUT");
      c.length || (c[0] = this);
      if (this.rendered) {
        for (d = 0; a = c[d]; d++) a.render();
        this.bumpNeighbours_();
      }
    }
  };
  A.Block.prototype.toString = function (a) {
    for (var c = [], d = 0, f; f = this.inputList[d]; d++) {
      for (var g = 0, h; h = f.fieldRow[g]; g++) c.push(h.getText());
      f.connection && ((f = f.connection.targetBlock()) ? c.push(f.toString()) : c.push("?"));
    }
    c = e.string.trim(c.join(" ")) || "???";
    a && (c = e.string.truncate(c, a));
    return c;
  };
  A.Block.prototype.appendValueInput = function (a) {
    return this.appendInput_(A.INPUT_VALUE, a);
  };
  A.Block.prototype.appendStatementInput = function (a) {
    return this.appendInput_(A.NEXT_STATEMENT, a);
  };
  A.Block.prototype.appendDummyInput = function (a) {
    return this.appendInput_(A.DUMMY_INPUT, a || "");
  };
  A.Block.prototype.interpolateMsg = function (a, c) {
    function d(a) {
      a instanceof A.Field ? this.appendField(a) : (e.asserts.assert(A.goog.isArray(a)), this.appendField(a[1], a[0]));
    }
    e.asserts.assertString(a);
    var f = arguments[arguments.length - 1];
    e.asserts.assert(f === A.ALIGN_LEFT || f === A.ALIGN_CENTRE || f === A.ALIGN_RIGHT, 'Illegal final argument "%d" is not an alignment.', f);
    --arguments.length;
    for (var g = a.split(this.interpolateMsg.SPLIT_REGEX_), h = [], k = 0; k < g.length; k += 2) {
      var m = e.string.trim(g[k]),
        n = void 0;
      m && h.push(new A.FieldLabel(m));
      if ((m = g[k + 1]) && "%" == m.charAt(0)) {
        var p = parseInt(m.substring(1), 10),
          r = arguments[p];
        e.asserts.assertArray(r, 'Message symbol "%s" is out of range.', m);
        e.asserts.assertArray(r, 'Argument "%s" is not a tuple.', m);
        r[1] instanceof A.Field ? h.push([r[0], r[1]]) : n = this.appendValueInput(r[0]).setCheck(r[1]).setAlign(r[2]);
        arguments[p] = null;
      } else "\n" == m && h.length && (n = this.appendDummyInput());
      n && h.length && (h.forEach(d, n), h = []);
    }
    h.length && (n = this.appendDummyInput().setAlign(f), h.forEach(d, n));
    for (k = 1; k < arguments.length - 1; k++) e.asserts.assert(null === arguments[k], 'Input "%%s" not used in message: "%s"', k, a);
    this.setInputsInline(!a.match(this.interpolateMsg.INLINE_REGEX_));
  };
  A.Block.prototype.interpolateMsg.SPLIT_REGEX_ = /(%\d+|\n)/;
  A.Block.prototype.interpolateMsg.INLINE_REGEX_ = /%1\s*$/;
  A.Block.prototype.appendInput_ = function (a, c) {
    var d = null;
    if (a == A.INPUT_VALUE || a == A.NEXT_STATEMENT) d = new A.Connection(this, a);
    a = new A.Input(a, c, this, d);
    this.inputList.push(a);
    this.rendered && (this.render(), this.bumpNeighbours_());
    return a;
  };
  A.Block.prototype.moveInputBefore = function (a, c) {
    if (a != c) {
      for (var d = -1, f = c ? -1 : this.inputList.length, g = 0, h; h = this.inputList[g]; g++) if (h.name == a) {
        if (d = g, -1 != f) break;
      } else if (c && h.name == c && (f = g, -1 != d)) break;
      e.asserts.assert(-1 != d, 'Named input "%s" not found.', a);
      e.asserts.assert(-1 != f, 'Reference input "%s" not found.', c);
      this.moveNumberedInputBefore(d, f);
    }
  };
  A.Block.prototype.moveNumberedInputBefore = function (a, c) {
    e.asserts.assert(a != c, "Can't move input to itself.");
    e.asserts.assert(a < this.inputList.length, "Input index " + a + " out of bounds.");
    e.asserts.assert(c <= this.inputList.length, "Reference input " + c + " out of bounds.");
    var d = this.inputList[a];
    this.inputList.splice(a, 1);
    a < c && c--;
    this.inputList.splice(c, 0, d);
    this.rendered && (this.render(), this.bumpNeighbours_());
  };
  A.Block.prototype.removeInput = function (a, c) {
    for (var d = 0, f; f = this.inputList[d]; d++) if (f.name == a) {
      f.connection && f.connection.targetConnection && f.connection.targetBlock().setParent(null);
      f.dispose();
      this.inputList.splice(d, 1);
      this.rendered && (this.render(), this.bumpNeighbours_());
      return;
    }
    c || e.asserts.fail('Input "%s" not found.', a);
  };
  A.Block.prototype.getInput = function (a) {
    for (var c = 0, d; d = this.inputList[c]; c++) if (d.name == a) return d;
    return null;
  };
  A.Block.prototype.getInputTargetBlock = function (a) {
    return (a = this.getInput(a)) && a.connection && a.connection.targetBlock();
  };
  A.Block.prototype.setMutator = function (a) {
    this.mutator && this.mutator !== a && this.mutator.dispose();
    a && (a.block_ = this, this.mutator = a, this.svg_ && a.createIcon());
  };
  A.Block.prototype.getCommentText = function () {
    return this.comment ? this.comment.getText().replace(/\s+$/, "").replace(/ +\n/g, "\n") : "";
  };
  A.Block.prototype.setCommentText = function (a) {
    var c = !1;
    A.goog.isString(a) ? (this.comment || (this.comment = new A.Comment(this), c = !0), this.comment.setText(a)) : this.comment && (this.comment.dispose(), c = !0);
    this.rendered && (this.render(), c && this.bumpNeighbours_());
  };
  A.Block.prototype.setWarningText = function (a) {
    this.isInFlyout && (a = null);
    var c = !1;
    A.goog.isString(a) ? (this.warning || (this.warning = new A.Warning(this), c = !0), this.warning.setText(a)) : this.warning && (this.warning.dispose(), c = !0);
    c && this.rendered && (this.render(), this.bumpNeighbours_());
  };
  A.Block.prototype.render = function () {
    e.asserts.assertObject(this.svg_, "Uninitialized block cannot be rendered.  Call block.initSvg()");
    this.svg_.render();
    A.Realtime.blockChanged(this);
  };
  A.FieldTextInput = function (a, c) {
    A.FieldTextInput.superClass_.constructor.call(this, a);
    this.changeHandler_ = c;
  };
  e.inherits(A.FieldTextInput, A.Field);
  A.FieldTextInput.prototype.clone = function () {
    return new A.FieldTextInput(this.getText(), this.changeHandler_);
  };
  A.FieldTextInput.prototype.CURSOR = "text";
  A.FieldTextInput.prototype.dispose = function () {
    A.WidgetDiv.hideIfOwner(this);
    A.FieldTextInput.superClass_.dispose.call(this);
  };
  A.FieldTextInput.prototype.setText = function (a) {
    if (null !== a) {
      if (this.changeHandler_) {
        var c = this.changeHandler_(a);
        null !== c && void 0 !== c && (a = c);
      }
      A.Field.prototype.setText.call(this, a);
    }
  };
  A.FieldTextInput.prototype.showEditor_ = function (a) {
    var c = a || !1;
    if (!c && (e.userAgent.MOBILE || e.userAgent.ANDROID || e.userAgent.IPAD)) a = window.prompt(A.Msg.CHANGE_VALUE_TITLE, this.text_), this.changeHandler_ && (c = this.changeHandler_(a), void 0 !== c && (a = c)), null !== a && this.setText(a);else {
      A.WidgetDiv.show(this, this.widgetDispose_());
      var d = A.WidgetDiv.DIV;
      a = e.dom.createDom("input", "blocklyHtmlInput");
      A.FieldTextInput.htmlInput_ = a;
      d.appendChild(a);
      a.value = a.defaultValue = this.text_;
      a.oldValue_ = null;
      this.validate_();
      this.resizeEditor_();
      c || (a.focus(), a.select());
      a.onKeyUpWrapper_ = A.bindEvent_(a, "keyup", this, this.onHtmlInputChange_);
      a.onKeyPressWrapper_ = A.bindEvent_(a, "keypress", this, this.onHtmlInputChange_);
      c = this.sourceBlock_.workspace.getCanvas();
      a.onWorkspaceChangeWrapper_ = A.bindEvent_(c, "blocklyWorkspaceChange", this, this.resizeEditor_);
    }
  };
  A.FieldTextInput.prototype.onHtmlInputChange_ = function (a) {
    var c = A.FieldTextInput.htmlInput_;
    13 == a.keyCode ? A.WidgetDiv.hide() : 27 == a.keyCode ? (this.setText(c.defaultValue), A.WidgetDiv.hide()) : (a = c.value, a !== c.oldValue_ ? (c.oldValue_ = a, this.setText(a), this.validate_()) : e.userAgent.WEBKIT && this.sourceBlock_.render());
  };
  A.FieldTextInput.prototype.validate_ = function () {
    var a = !0;
    e.asserts.assertObject(A.FieldTextInput.htmlInput_);
    var c = A.FieldTextInput.htmlInput_;
    this.changeHandler_ && (a = this.changeHandler_(c.value));
    null === a ? A.addClass_(c, "blocklyInvalidInput") : A.removeClass_(c, "blocklyInvalidInput");
  };
  A.FieldTextInput.prototype.resizeEditor_ = function () {
    var a = A.WidgetDiv.DIV,
      c = this.fieldGroup_.getBBox();
    a.style.width = c.width + "px";
    c = A.getAbsoluteXY_(this.borderRect_);
    if (A.RTL) {
      var d = this.borderRect_.getBBox();
      c.x += d.width;
      c.x -= a.offsetWidth;
    }
    c.y += 1;
    e.userAgent.WEBKIT && (c.y -= 3);
    a.style.left = c.x + "px";
    a.style.top = c.y + "px";
  };
  A.FieldTextInput.prototype.widgetDispose_ = function () {
    var a = this;
    return function () {
      var c = A.FieldTextInput.htmlInput_,
        d = c.value;
      a.changeHandler_ && (d = a.changeHandler_(d), null === d && (d = c.defaultValue));
      a.setText(d);
      a.sourceBlock_.rendered && a.sourceBlock_.render();
      A.unbindEvent_(c.onKeyUpWrapper_);
      A.unbindEvent_(c.onKeyPressWrapper_);
      A.unbindEvent_(c.onWorkspaceChangeWrapper_);
      A.FieldTextInput.htmlInput_ = null;
      A.WidgetDiv.DIV.style.width = "auto";
    };
  };
  A.FieldTextInput.numberValidator = function (a) {
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0);
    return isNaN(a) ? null : String(a);
  };
  A.FieldTextInput.nonnegativeIntegerValidator = function (a) {
    (a = A.FieldTextInput.numberValidator(a)) && (a = String(Math.max(0, Math.floor(a))));
    return a;
  };
  A.FieldAngle = function (a, c) {
    if (c) {
      var d = this;
      var f = function (a) {
        a = A.FieldAngle.angleValidator.call(d, a);
        null !== a && c.call(d, a);
        return a;
      };
    } else f = A.FieldAngle.angleValidator;
    this.symbol_ = A.createSvgElement("tspan", {}, null);
    this.symbol_.appendChild(document.createTextNode("\u00b0"));
    A.FieldAngle.superClass_.constructor.call(this, a, f);
  };
  e.inherits(A.FieldAngle, A.FieldTextInput);
  A.FieldAngle.prototype.clone = function () {
    return new A.FieldAngle(this.getText(), this.changeHandler_);
  };
  A.FieldAngle.ROUND = 15;
  A.FieldAngle.HALF = 50;
  A.FieldAngle.RADIUS = A.FieldAngle.HALF - 1;
  A.FieldAngle.prototype.dispose_ = function () {
    var a = this;
    return function () {
      A.FieldAngle.superClass_.dispose_.call(a)();
      a.gauge_ = null;
      a.clickWrapper_ && A.unbindEvent_(a.clickWrapper_);
      a.moveWrapper1_ && A.unbindEvent_(a.moveWrapper1_);
      a.moveWrapper2_ && A.unbindEvent_(a.moveWrapper2_);
    };
  };
  A.FieldAngle.prototype.showEditor_ = function () {
    A.FieldAngle.superClass_.showEditor_.call(this, e.userAgent.MOBILE || e.userAgent.ANDROID || e.userAgent.IPAD);
    var a = A.WidgetDiv.DIV;
    if (a.firstChild) {
      a = A.createSvgElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        height: 2 * A.FieldAngle.HALF + "px",
        width: 2 * A.FieldAngle.HALF + "px"
      }, a);
      var c = A.createSvgElement("circle", {
        cx: A.FieldAngle.HALF,
        cy: A.FieldAngle.HALF,
        r: A.FieldAngle.RADIUS,
        "class": "blocklyAngleCircle"
      }, a);
      this.gauge_ = A.createSvgElement("path", {
        "class": "blocklyAngleGauge"
      }, a);
      this.line_ = A.createSvgElement("line", {
        x1: A.FieldAngle.HALF,
        y1: A.FieldAngle.HALF,
        "class": "blocklyAngleLine"
      }, a);
      for (var d = 0; 360 > d; d += 15) A.createSvgElement("line", {
        x1: A.FieldAngle.HALF + A.FieldAngle.RADIUS,
        y1: A.FieldAngle.HALF,
        x2: A.FieldAngle.HALF + A.FieldAngle.RADIUS - (0 == d % 45 ? 10 : 5),
        y2: A.FieldAngle.HALF,
        "class": "blocklyAngleMarks",
        transform: "rotate(" + d + ", " + A.FieldAngle.HALF + ", " + A.FieldAngle.HALF + ")"
      }, a);
      a.style.marginLeft = "-35px";
      this.clickWrapper_ = A.bindEvent_(a, "click", this, A.WidgetDiv.hide);
      this.moveWrapper1_ = A.bindEvent_(c, "mousemove", this, this.onMouseMove);
      this.moveWrapper2_ = A.bindEvent_(this.gauge_, "mousemove", this, this.onMouseMove);
      this.updateGraph_();
    }
  };
  A.FieldAngle.prototype.onMouseMove = function (a) {
    var c = this.gauge_.ownerSVGElement.getBoundingClientRect(),
      d = a.clientX - c.left - A.FieldAngle.HALF;
    a = a.clientY - c.top - A.FieldAngle.HALF;
    c = Math.atan(-a / d);
    isNaN(c) || (c = c / Math.PI * 180, 0 > d ? c += 180 : 0 < a && (c += 360), A.FieldAngle.ROUND && (c = Math.round(c / A.FieldAngle.ROUND) * A.FieldAngle.ROUND), 360 <= c && (c -= 360), c = String(c), A.FieldTextInput.htmlInput_.value = c, this.setText(c));
  };
  A.FieldAngle.prototype.setText = function (a) {
    A.FieldAngle.superClass_.setText.call(this, a);
    this.updateGraph_();
    A.RTL ? this.textElement_.insertBefore(this.symbol_, this.textElement_.firstChild) : this.textElement_.appendChild(this.symbol_);
    this.size_.width = 0;
  };
  A.FieldAngle.prototype.updateGraph_ = function () {
    if (this.gauge_) {
      var a = Number(this.getText()) / 180 * Math.PI;
      if (isNaN(a)) this.gauge_.setAttribute("d", "M " + A.FieldAngle.HALF + ", " + A.FieldAngle.HALF), this.line_.setAttribute("x2", A.FieldAngle.HALF), this.line_.setAttribute("y2", A.FieldAngle.HALF);else {
        var c = A.FieldAngle.HALF + Math.cos(a) * A.FieldAngle.RADIUS,
          d = A.FieldAngle.HALF + Math.sin(a) * -A.FieldAngle.RADIUS;
        this.gauge_.setAttribute("d", "M " + A.FieldAngle.HALF + ", " + A.FieldAngle.HALF + " h " + A.FieldAngle.RADIUS + " A " + A.FieldAngle.RADIUS + "," + A.FieldAngle.RADIUS + " 0 " + (a > Math.PI ? 1 : 0) + " 0 " + c + "," + d + " z");
        this.line_.setAttribute("x2", c);
        this.line_.setAttribute("y2", d);
      }
    }
  };
  A.FieldAngle.angleValidator = function (a) {
    a = A.FieldTextInput.numberValidator(a);
    null !== a && (a %= 360, 0 > a && (a += 360), a = String(a));
    return a;
  };
  A.FieldCheckbox = function (a, c) {
    A.FieldCheckbox.superClass_.constructor.call(this, "");
    this.changeHandler_ = c;
    this.checkElement_ = A.createSvgElement("text", {
      "class": "blocklyText",
      x: -3
    }, this.fieldGroup_);
    c = document.createTextNode("\u2713");
    this.checkElement_.appendChild(c);
    this.setValue(a);
  };
  e.inherits(A.FieldCheckbox, A.Field);
  A.FieldCheckbox.prototype.clone = function () {
    return new A.FieldCheckbox(this.getValue(), this.changeHandler_);
  };
  A.FieldCheckbox.prototype.CURSOR = "default";
  A.FieldCheckbox.prototype.getValue = function () {
    return String(this.state_).toUpperCase();
  };
  A.FieldCheckbox.prototype.setValue = function (a) {
    a = "TRUE" == a;
    this.state_ !== a && (this.state_ = a, this.checkElement_.style.display = a ? "block" : "none", this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.workspace.fireChangeEvent());
  };
  A.FieldCheckbox.prototype.showEditor_ = function () {
    var a = !this.state_;
    if (this.changeHandler_) {
      var c = this.changeHandler_(a);
      void 0 !== c && (a = c);
    }
    null !== a && this.setValue(String(a).toUpperCase());
  };
  e.color = {};
  e.color.names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  e.color.parse = function (a) {
    var c = {};
    a = String(a);
    var d = e.color.prependHashIfNecessaryHelper(a);
    if (e.color.isValidHexColor_(d)) return c.hex = e.color.normalizeHex(d), c.type = "hex", c;
    d = e.color.isValidRgbColor_(a);
    if (d.length) return c.hex = e.color.rgbArrayToHex(d), c.type = "rgb", c;
    if (e.color.names && (d = e.color.names[a.toLowerCase()])) return c.hex = d, c.type = "named", c;
    throw Error(a + " is not a valid color string");
  };
  e.color.isValidColor = function (a) {
    var c = e.color.prependHashIfNecessaryHelper(a);
    return !!(e.color.isValidHexColor_(c) || e.color.isValidRgbColor_(a).length || e.color.names && e.color.names[a.toLowerCase()]);
  };
  e.color.parseRgb = function (a) {
    var c = e.color.isValidRgbColor_(a);
    if (!c.length) throw Error(a + " is not a valid RGB color");
    return c;
  };
  e.color.hexToRgbStyle = function (a) {
    return e.color.rgbStyle_(e.color.hexToRgb(a));
  };
  e.color.hexTripletRe_ = /#(.)(.)(.)/;
  e.color.normalizeHex = function (a) {
    if (!e.color.isValidHexColor_(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(e.color.hexTripletRe_, "#$1$1$2$2$3$3"));
    return a.toLowerCase();
  };
  e.color.hexToRgb = function (a) {
    a = e.color.normalizeHex(a);
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255];
  };
  e.color.rgbToHex = function (a, c, d) {
    a = Number(a);
    c = Number(c);
    d = Number(d);
    if (a != (a & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + a + "," + c + "," + d + '") is not a valid RGB color');
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16);
  };
  e.color.rgbArrayToHex = function (a) {
    return e.color.rgbToHex(a[0], a[1], a[2]);
  };
  e.color.rgbToHsl = function (a, c, d) {
    a /= 255;
    c /= 255;
    d /= 255;
    var f = Math.max(a, c, d),
      g = Math.min(a, c, d),
      h = 0,
      k = 0,
      m = .5 * (f + g);
    f != g && (f == a ? h = 60 * (c - d) / (f - g) : f == c ? h = 60 * (d - a) / (f - g) + 120 : f == d && (h = 60 * (a - c) / (f - g) + 240), k = 0 < m && .5 >= m ? (f - g) / (2 * m) : (f - g) / (2 - 2 * m));
    return [Math.round(h + 360) % 360, k, m];
  };
  e.color.rgbArrayToHsl = function (a) {
    return e.color.rgbToHsl(a[0], a[1], a[2]);
  };
  e.color.hueToRgb_ = function (a, c, d) {
    0 > d ? d += 1 : 1 < d && --d;
    return 1 > 6 * d ? a + 6 * (c - a) * d : 1 > 2 * d ? c : 2 > 3 * d ? a + (c - a) * (2 / 3 - d) * 6 : a;
  };
  e.color.hslToRgb = function (a, c, d) {
    a /= 360;
    if (0 == c) d = c = a = 255 * d;else {
      var f = .5 > d ? d * (1 + c) : d + c - c * d;
      var g = 2 * d - f;
      d = 255 * e.color.hueToRgb_(g, f, a + 1 / 3);
      c = 255 * e.color.hueToRgb_(g, f, a);
      a = 255 * e.color.hueToRgb_(g, f, a - 1 / 3);
    }
    return [Math.round(d), Math.round(c), Math.round(a)];
  };
  e.color.hslArrayToRgb = function (a) {
    return e.color.hslToRgb(a[0], a[1], a[2]);
  };
  e.color.validHexColorRe_ = /^#(?:[0-9a-f]{3}){1,2}$/i;
  e.color.isValidHexColor_ = function (a) {
    return e.color.validHexColorRe_.test(a);
  };
  e.color.rgbColorRe_ = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
  e.color.isValidRgbColor_ = function (a) {
    var c = a.match(e.color.rgbColorRe_);
    if (c) {
      a = Number(c[1]);
      var d = Number(c[2]);
      c = Number(c[3]);
      if (0 <= a && 255 >= a && 0 <= d && 255 >= d && 0 <= c && 255 >= c) return [a, d, c];
    }
    return [];
  };
  e.color.prependZeroIfNecessaryHelper = function (a) {
    return 1 == a.length ? "0" + a : a;
  };
  e.color.prependHashIfNecessaryHelper = function (a) {
    return "#" == a.charAt(0) ? a : "#" + a;
  };
  e.color.rgbStyle_ = function (a) {
    return "rgb(" + a.join(",") + ")";
  };
  e.color.hsvToRgb = function (a, c, d) {
    var f = 0,
      g = 0,
      h = 0;
    if (0 == c) h = g = f = d;else {
      var k = Math.floor(a / 60),
        m = a / 60 - k;
      a = d * (1 - c);
      var n = d * (1 - c * m);
      c = d * (1 - c * (1 - m));
      switch (k) {
        case 1:
          f = n;
          g = d;
          h = a;
          break;
        case 2:
          f = a;
          g = d;
          h = c;
          break;
        case 3:
          f = a;
          g = n;
          h = d;
          break;
        case 4:
          f = c;
          g = a;
          h = d;
          break;
        case 5:
          f = d;
          g = a;
          h = n;
          break;
        case 6:
        case 0:
          f = d, g = c, h = a;
      }
    }
    return [Math.round(f), Math.round(g), Math.round(h)];
  };
  e.color.rgbToHsv = function (a, c, d) {
    var f = Math.max(Math.max(a, c), d),
      g = Math.min(Math.min(a, c), d);
    if (g == f) g = a = 0;else {
      var h = f - g;
      g = h / f;
      a = 60 * (a == f ? (c - d) / h : c == f ? 2 + (d - a) / h : 4 + (a - c) / h);
      0 > a && (a += 360);
      360 < a && (a -= 360);
    }
    return [a, g, f];
  };
  e.color.rgbArrayToHsv = function (a) {
    return e.color.rgbToHsv(a[0], a[1], a[2]);
  };
  e.color.hsvArrayToRgb = function (a) {
    return e.color.hsvToRgb(a[0], a[1], a[2]);
  };
  e.color.hexToHsl = function (a) {
    a = e.color.hexToRgb(a);
    return e.color.rgbToHsl(a[0], a[1], a[2]);
  };
  e.color.hslToHex = function (a, c, d) {
    return e.color.rgbArrayToHex(e.color.hslToRgb(a, c, d));
  };
  e.color.hslArrayToHex = function (a) {
    return e.color.rgbArrayToHex(e.color.hslToRgb(a[0], a[1], a[2]));
  };
  e.color.hexToHsv = function (a) {
    return e.color.rgbArrayToHsv(e.color.hexToRgb(a));
  };
  e.color.hsvToHex = function (a, c, d) {
    return e.color.rgbArrayToHex(e.color.hsvToRgb(a, c, d));
  };
  e.color.hsvArrayToHex = function (a) {
    return e.color.hsvToHex(a[0], a[1], a[2]);
  };
  e.color.hslDistance = function (a, c) {
    var d = .5 >= a[2] ? a[1] * a[2] : a[1] * (1 - a[2]);
    var f = .5 >= c[2] ? c[1] * c[2] : c[1] * (1 - c[2]);
    return (a[2] - c[2]) * (a[2] - c[2]) + d * d + f * f - 2 * d * f * Math.cos(2 * (a[0] / 360 - c[0] / 360) * Math.PI);
  };
  e.color.blend = function (a, c, d) {
    d = e.math.clamp(d, 0, 1);
    return [Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2]))];
  };
  e.color.darken = function (a, c) {
    return e.color.blend([0, 0, 0], a, c);
  };
  e.color.lighten = function (a, c) {
    return e.color.blend([255, 255, 255], a, c);
  };
  e.color.highContrast = function (a, c) {
    for (var d = [], f = 0; f < c.length; f++) d.push({
      color: c[f],
      diff: e.color.yiqBrightnessDiff_(c[f], a) + e.color.colorDiff_(c[f], a)
    });
    d.sort(function (a, c) {
      return c.diff - a.diff;
    });
    return d[0].color;
  };
  e.color.yiqBrightness_ = function (a) {
    return Math.round((299 * a[0] + 587 * a[1] + 114 * a[2]) / 1E3);
  };
  e.color.yiqBrightnessDiff_ = function (a, c) {
    return Math.abs(e.color.yiqBrightness_(a) - e.color.yiqBrightness_(c));
  };
  e.color.colorDiff_ = function (a, c) {
    return Math.abs(a[0] - c[0]) + Math.abs(a[1] - c[1]) + Math.abs(a[2] - c[2]);
  };
  e.iter = {};
  e.iter.StopIteration = "StopIteration" in e.global ? e.global.StopIteration : {
    message: "StopIteration",
    stack: ""
  };
  e.iter.Iterator = function () {};
  e.iter.Iterator.prototype.next = function () {
    throw e.iter.StopIteration;
  };
  e.iter.Iterator.prototype.__iterator__ = function () {
    return this;
  };
  e.iter.toIterator = function (a) {
    if (a instanceof e.iter.Iterator) return a;
    if ("function" == typeof a.__iterator__) return a.__iterator__(!1);
    if (e.isArrayLike(a)) {
      var c = 0,
        d = new e.iter.Iterator();
      d.next = function () {
        for (;;) {
          if (c >= a.length) throw e.iter.StopIteration;
          if (c in a) return a[c++];
          c++;
        }
      };
      return d;
    }
    throw Error("Not implemented");
  };
  e.iter.forEach = function (a, c, d) {
    if (e.isArrayLike(a)) try {
      e.array.forEach(a, c, d);
    } catch (f) {
      if (f !== e.iter.StopIteration) throw f;
    } else {
      a = e.iter.toIterator(a);
      try {
        for (;;) c.call(d, a.next(), void 0, a);
      } catch (f) {
        if (f !== e.iter.StopIteration) throw f;
      }
    }
  };
  e.iter.filter = function (a, c, d) {
    var f = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    a.next = function () {
      for (;;) {
        var a = f.next();
        if (c.call(d, a, void 0, f)) return a;
      }
    };
    return a;
  };
  e.iter.filterFalse = function (a, c, d) {
    return e.iter.filter(a, e.functions.not(c), d);
  };
  e.iter.range = function (a, c, d) {
    var f = 0,
      g = a,
      h = d || 1;
    1 < arguments.length && (f = a, g = +c);
    if (0 == h) throw Error("Range step argument must not be zero");
    var k = new e.iter.Iterator();
    k.next = function () {
      if (0 < h && f >= g || 0 > h && f <= g) throw e.iter.StopIteration;
      var a = f;
      f += h;
      return a;
    };
    return k;
  };
  e.iter.join = function (a, c) {
    return e.iter.toArray(a).join(c);
  };
  e.iter.map = function (a, c, d) {
    var f = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    a.next = function () {
      var a = f.next();
      return c.call(d, a, void 0, f);
    };
    return a;
  };
  e.iter.reduce = function (a, c, d, f) {
    var g = d;
    e.iter.forEach(a, function (a) {
      g = c.call(f, g, a);
    });
    return g;
  };
  e.iter.some = function (a, c, d) {
    a = e.iter.toIterator(a);
    try {
      for (;;) if (c.call(d, a.next(), void 0, a)) return !0;
    } catch (f) {
      if (f !== e.iter.StopIteration) throw f;
    }
    return !1;
  };
  e.iter.every = function (a, c, d) {
    a = e.iter.toIterator(a);
    try {
      for (;;) if (!c.call(d, a.next(), void 0, a)) return !1;
    } catch (f) {
      if (f !== e.iter.StopIteration) throw f;
    }
    return !0;
  };
  e.iter.chain = function (a) {
    return e.iter.chainFromIterable(arguments);
  };
  e.iter.chainFromIterable = function (a) {
    var c = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    var d = null;
    a.next = function () {
      for (;;) {
        if (null == d) {
          var a = c.next();
          d = e.iter.toIterator(a);
        }
        try {
          return d.next();
        } catch (g) {
          if (g !== e.iter.StopIteration) throw g;
          d = null;
        }
      }
    };
    return a;
  };
  e.iter.dropWhile = function (a, c, d) {
    var f = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    var g = !0;
    a.next = function () {
      for (;;) {
        var a = f.next();
        if (!g || !c.call(d, a, void 0, f)) return g = !1, a;
      }
    };
    return a;
  };
  e.iter.takeWhile = function (a, c, d) {
    var f = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    a.next = function () {
      var a = f.next();
      if (c.call(d, a, void 0, f)) return a;
      throw e.iter.StopIteration;
    };
    return a;
  };
  e.iter.toArray = function (a) {
    if (e.isArrayLike(a)) return e.array.toArray(a);
    a = e.iter.toIterator(a);
    var c = [];
    e.iter.forEach(a, function (a) {
      c.push(a);
    });
    return c;
  };
  e.iter.equals = function (a, c, d) {
    a = e.iter.zipLongest({}, a, c);
    var f = d || e.array.defaultCompareEquality;
    return e.iter.every(a, function (a) {
      return f(a[0], a[1]);
    });
  };
  e.iter.nextOrValue = function (a, c) {
    try {
      return e.iter.toIterator(a).next();
    } catch (d) {
      if (d != e.iter.StopIteration) throw d;
      return c;
    }
  };
  e.iter.product = function (a) {
    if (e.array.some(arguments, function (a) {
      return !a.length;
    }) || !arguments.length) return new e.iter.Iterator();
    var c = new e.iter.Iterator(),
      d = arguments,
      f = e.array.repeat(0, d.length);
    c.next = function () {
      if (f) {
        for (var a = e.array.map(f, function (a, c) {
            return d[c][a];
          }), c = f.length - 1; 0 <= c; c--) {
          e.asserts.assert(f);
          if (f[c] < d[c].length - 1) {
            f[c]++;
            break;
          }
          if (0 == c) {
            f = null;
            break;
          }
          f[c] = 0;
        }
        return a;
      }
      throw e.iter.StopIteration;
    };
    return c;
  };
  e.iter.cycle = function (a) {
    var c = e.iter.toIterator(a),
      d = [],
      f = 0;
    a = new e.iter.Iterator();
    var g = !1;
    a.next = function () {
      var a = null;
      if (!g) try {
        return a = c.next(), d.push(a), a;
      } catch (k) {
        if (k != e.iter.StopIteration || e.array.isEmpty(d)) throw k;
        g = !0;
      }
      a = d[f];
      f = (f + 1) % d.length;
      return a;
    };
    return a;
  };
  e.iter.count = function (a, c) {
    var d = a || 0,
      f = void 0 !== c ? c : 1;
    a = new e.iter.Iterator();
    a.next = function () {
      var a = d;
      d += f;
      return a;
    };
    return a;
  };
  e.iter.repeat = function (a) {
    var c = new e.iter.Iterator();
    c.next = e.functions.constant(a);
    return c;
  };
  e.iter.accumulate = function (a) {
    var c = e.iter.toIterator(a),
      d = 0;
    a = new e.iter.Iterator();
    a.next = function () {
      return d += c.next();
    };
    return a;
  };
  e.iter.zip = function (a) {
    var c = arguments,
      d = new e.iter.Iterator();
    if (0 < c.length) {
      var f = e.array.map(c, e.iter.toIterator);
      d.next = function () {
        return e.array.map(f, function (a) {
          return a.next();
        });
      };
    }
    return d;
  };
  e.iter.zipLongest = function (a, c) {
    var d = e.array.slice(arguments, 1),
      f = new e.iter.Iterator();
    if (0 < d.length) {
      var g = e.array.map(d, e.iter.toIterator);
      f.next = function () {
        var c = !1,
          d = e.array.map(g, function (d) {
            try {
              var f = d.next();
              c = !0;
            } catch (p) {
              if (p !== e.iter.StopIteration) throw p;
              f = a;
            }
            return f;
          });
        if (!c) throw e.iter.StopIteration;
        return d;
      };
    }
    return f;
  };
  e.iter.compress = function (a, c) {
    var d = e.iter.toIterator(c);
    return e.iter.filter(a, function () {
      return !!d.next();
    });
  };
  e.iter.GroupByIterator_ = function (a, c) {
    this.iterator = e.iter.toIterator(a);
    this.keyFunc = c || e.functions.identity;
  };
  e.inherits(e.iter.GroupByIterator_, e.iter.Iterator);
  e.iter.GroupByIterator_.prototype.next = function () {
    for (; this.currentKey == this.targetKey;) this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
    this.targetKey = this.currentKey;
    return [this.currentKey, this.groupItems_(this.targetKey)];
  };
  e.iter.GroupByIterator_.prototype.groupItems_ = function (a) {
    for (var c = []; this.currentKey == a;) {
      c.push(this.currentValue);
      try {
        this.currentValue = this.iterator.next();
      } catch (d) {
        if (d !== e.iter.StopIteration) throw d;
        break;
      }
      this.currentKey = this.keyFunc(this.currentValue);
    }
    return c;
  };
  e.iter.groupBy = function (a, c) {
    return new e.iter.GroupByIterator_(a, c);
  };
  e.iter.starMap = function (a, c, d) {
    var f = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    a.next = function () {
      var a = e.iter.toArray(f.next());
      return c.apply(d, e.array.concat(a, void 0, f));
    };
    return a;
  };
  e.iter.tee = function (a, c) {
    function d() {
      var a = f.next();
      e.array.forEach(g, function (c) {
        c.push(a);
      });
    }
    var f = e.iter.toIterator(a),
      g = e.array.map(e.array.range("number" === typeof c ? c : 2), function () {
        return [];
      });
    return e.array.map(g, function (a) {
      var c = new e.iter.Iterator();
      c.next = function () {
        e.array.isEmpty(a) && d();
        e.asserts.assert(!e.array.isEmpty(a));
        return a.shift();
      };
      return c;
    });
  };
  e.iter.enumerate = function (a, c) {
    return e.iter.zip(e.iter.count(c), a);
  };
  e.iter.limit = function (a, c) {
    e.asserts.assert(e.math.isInt(c) && 0 <= c);
    var d = e.iter.toIterator(a);
    a = new e.iter.Iterator();
    var f = c;
    a.next = function () {
      if (0 < f--) return d.next();
      throw e.iter.StopIteration;
    };
    return a;
  };
  e.iter.consume = function (a, c) {
    e.asserts.assert(e.math.isInt(c) && 0 <= c);
    for (a = e.iter.toIterator(a); 0 < c--;) e.iter.nextOrValue(a, null);
    return a;
  };
  e.iter.slice = function (a, c, d) {
    e.asserts.assert(e.math.isInt(c) && 0 <= c);
    a = e.iter.consume(a, c);
    "number" === typeof d && (e.asserts.assert(e.math.isInt(d) && d >= c), a = e.iter.limit(a, d - c));
    return a;
  };
  e.iter.hasDuplicates_ = function (a) {
    var c = [];
    e.array.removeDuplicates(a, c);
    return a.length != c.length;
  };
  e.iter.permutations = function (a, c) {
    a = e.iter.toArray(a);
    c = e.array.repeat(a, "number" === typeof c ? c : a.length);
    c = e.iter.product.apply(void 0, c);
    return e.iter.filter(c, function (a) {
      return !e.iter.hasDuplicates_(a);
    });
  };
  e.iter.combinations = function (a, c) {
    function d(a) {
      return f[a];
    }
    var f = e.iter.toArray(a);
    a = e.iter.range(f.length);
    c = e.iter.permutations(a, c);
    var g = e.iter.filter(c, function (a) {
      return e.array.isSorted(a);
    });
    c = new e.iter.Iterator();
    c.next = function () {
      return e.array.map(g.next(), d);
    };
    return c;
  };
  e.iter.combinationsWithReplacement = function (a, c) {
    function d(a) {
      return f[a];
    }
    var f = e.iter.toArray(a);
    a = e.array.range(f.length);
    c = e.array.repeat(a, c);
    c = e.iter.product.apply(void 0, c);
    var g = e.iter.filter(c, function (a) {
      return e.array.isSorted(a);
    });
    c = new e.iter.Iterator();
    c.next = function () {
      return e.array.map(g.next(), d);
    };
    return c;
  };
  e.dom.TagWalkType = {
    START_TAG: 1,
    OTHER: 0,
    END_TAG: -1
  };
  e.dom.TagIterator = function (a, c, d, f, g) {
    this.reversed = !!c;
    this.node = null;
    this.tagType = e.dom.TagWalkType.OTHER;
    this.started_ = !1;
    this.constrained = !d;
    a && this.setPosition(a, f);
    this.depth = void 0 != g ? g : this.tagType || 0;
    this.reversed && (this.depth *= -1);
  };
  e.inherits(e.dom.TagIterator, e.iter.Iterator);
  e.dom.TagIterator.prototype.setPosition = function (a, c, d) {
    if (this.node = a) this.tagType = "number" === typeof c ? c : this.node.nodeType != e.dom.NodeType.ELEMENT ? e.dom.TagWalkType.OTHER : this.reversed ? e.dom.TagWalkType.END_TAG : e.dom.TagWalkType.START_TAG;
    "number" === typeof d && (this.depth = d);
  };
  e.dom.TagIterator.prototype.copyFrom = function (a) {
    this.node = a.node;
    this.tagType = a.tagType;
    this.depth = a.depth;
    this.reversed = a.reversed;
    this.constrained = a.constrained;
  };
  e.dom.TagIterator.prototype.clone = function () {
    return new e.dom.TagIterator(this.node, this.reversed, !this.constrained, this.tagType, this.depth);
  };
  e.dom.TagIterator.prototype.skipTag = function () {
    var a = this.reversed ? e.dom.TagWalkType.END_TAG : e.dom.TagWalkType.START_TAG;
    this.tagType == a && (this.tagType = -1 * a, this.depth += this.tagType * (this.reversed ? -1 : 1));
  };
  e.dom.TagIterator.prototype.restartTag = function () {
    var a = this.reversed ? e.dom.TagWalkType.START_TAG : e.dom.TagWalkType.END_TAG;
    this.tagType == a && (this.tagType = -1 * a, this.depth += this.tagType * (this.reversed ? -1 : 1));
  };
  e.dom.TagIterator.prototype.next = function () {
    if (this.started_) {
      if (!this.node || this.constrained && 0 == this.depth) throw e.iter.StopIteration;
      var a = this.node;
      var c = this.reversed ? e.dom.TagWalkType.END_TAG : e.dom.TagWalkType.START_TAG;
      if (this.tagType == c) {
        var d = this.reversed ? a.lastChild : a.firstChild;
        d ? this.setPosition(d) : this.setPosition(a, -1 * c);
      } else (d = this.reversed ? a.previousSibling : a.nextSibling) ? this.setPosition(d) : this.setPosition(a.parentNode, -1 * c);
      this.depth += this.tagType * (this.reversed ? -1 : 1);
    } else this.started_ = !0;
    a = this.node;
    if (!this.node) throw e.iter.StopIteration;
    return a;
  };
  e.dom.TagIterator.prototype.isStarted = function () {
    return this.started_;
  };
  e.dom.TagIterator.prototype.isStartTag = function () {
    return this.tagType == e.dom.TagWalkType.START_TAG;
  };
  e.dom.TagIterator.prototype.isEndTag = function () {
    return this.tagType == e.dom.TagWalkType.END_TAG;
  };
  e.dom.TagIterator.prototype.isNonElement = function () {
    return this.tagType == e.dom.TagWalkType.OTHER;
  };
  e.dom.TagIterator.prototype.equals = function (a) {
    return a.node == this.node && (!this.node || a.tagType == this.tagType);
  };
  e.dom.TagIterator.prototype.splice = function (a) {
    var c = this.node;
    this.restartTag();
    this.reversed = !this.reversed;
    e.dom.TagIterator.prototype.next.call(this);
    this.reversed = !this.reversed;
    for (var d = e.isArrayLike(arguments[0]) ? arguments[0] : arguments, f = d.length - 1; 0 <= f; f--) e.dom.insertSiblingAfter(d[f], c);
    e.dom.removeNode(c);
  };
  e.dom.NodeIterator = function (a, c, d, f) {
    e.dom.TagIterator.call(this, a, c, d, null, f);
  };
  e.inherits(e.dom.NodeIterator, e.dom.TagIterator);
  e.dom.NodeIterator.prototype.next = function () {
    do e.dom.NodeIterator.superClass_.next.call(this); while (this.isEndTag());
    return this.node;
  };
  e.userAgent.product = {};
  e.userAgent.product.ASSUME_FIREFOX = !1;
  e.userAgent.product.ASSUME_IPHONE = !1;
  e.userAgent.product.ASSUME_IPAD = !1;
  e.userAgent.product.ASSUME_ANDROID = !1;
  e.userAgent.product.ASSUME_CHROME = !1;
  e.userAgent.product.ASSUME_SAFARI = !1;
  e.userAgent.product.PRODUCT_KNOWN_ = e.userAgent.ASSUME_IE || e.userAgent.ASSUME_EDGE || e.userAgent.ASSUME_OPERA || e.userAgent.product.ASSUME_FIREFOX || e.userAgent.product.ASSUME_IPHONE || e.userAgent.product.ASSUME_IPAD || e.userAgent.product.ASSUME_ANDROID || e.userAgent.product.ASSUME_CHROME || e.userAgent.product.ASSUME_SAFARI;
  e.userAgent.product.OPERA = e.userAgent.OPERA;
  e.userAgent.product.IE = e.userAgent.IE;
  e.userAgent.product.EDGE = e.userAgent.EDGE;
  e.userAgent.product.FIREFOX = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_FIREFOX : e.labs.userAgent.browser.isFirefox();
  e.userAgent.product.isIphoneOrIpod_ = function () {
    return e.labs.userAgent.platform.isIphone() || e.labs.userAgent.platform.isIpod();
  };
  e.userAgent.product.IPHONE = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_IPHONE : e.userAgent.product.isIphoneOrIpod_();
  e.userAgent.product.IPAD = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_IPAD : e.labs.userAgent.platform.isIpad();
  e.userAgent.product.ANDROID = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_ANDROID : e.labs.userAgent.browser.isAndroidBrowser();
  e.userAgent.product.CHROME = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_CHROME : e.labs.userAgent.browser.isChrome();
  e.userAgent.product.isSafariDesktop_ = function () {
    return e.labs.userAgent.browser.isSafari() && !e.labs.userAgent.platform.isIos();
  };
  e.userAgent.product.SAFARI = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_SAFARI : e.userAgent.product.isSafariDesktop_();
  e.dom.dataset = {};
  e.dom.dataset.ALLOWED_ = !e.userAgent.product.IE && !e.labs.userAgent.browser.isSafari();
  e.dom.dataset.PREFIX_ = "data-";
  e.dom.dataset.isValidProperty_ = function (a) {
    return !/-[a-z]/.test(a);
  };
  e.dom.dataset.set = function (a, c, d) {
    if (e.dom.dataset.ALLOWED_ && a.dataset) a.dataset[c] = d;else if (e.dom.dataset.isValidProperty_(c)) a.setAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(c), d);else throw Error(e.DEBUG ? '"' + c + '" is not a valid dataset property name.' : "");
  };
  e.dom.dataset.get = function (a, c) {
    if (!e.dom.dataset.isValidProperty_(c)) return null;
    if (e.dom.dataset.ALLOWED_ && a.dataset) {
      if (e.labs.userAgent.browser.isAndroidBrowser() && !(c in a.dataset)) return null;
      a = a.dataset[c];
      return void 0 === a ? null : a;
    }
    return a.getAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(c));
  };
  e.dom.dataset.remove = function (a, c) {
    e.dom.dataset.isValidProperty_(c) && (e.dom.dataset.ALLOWED_ && a.dataset ? e.dom.dataset.has(a, c) && delete a.dataset[c] : a.removeAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(c)));
  };
  e.dom.dataset.has = function (a, c) {
    return e.dom.dataset.isValidProperty_(c) ? e.dom.dataset.ALLOWED_ && a.dataset ? c in a.dataset : a.hasAttribute ? a.hasAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(c)) : !!a.getAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(c)) : !1;
  };
  e.dom.dataset.getAll = function (a) {
    if (e.dom.dataset.ALLOWED_ && a.dataset) return a.dataset;
    var c = {};
    a = a.attributes;
    for (var d = 0; d < a.length; ++d) {
      var f = a[d];
      if (e.string.startsWith(f.name, e.dom.dataset.PREFIX_)) {
        var g = e.string.toCamelCase(f.name.substr(5));
        c[g] = f.value;
      }
    }
    return c;
  };
  e.ui.PaletteRenderer = function () {
    e.ui.ControlRenderer.call(this);
  };
  e.inherits(e.ui.PaletteRenderer, e.ui.ControlRenderer);
  e.addSingletonGetter(e.ui.PaletteRenderer);
  e.ui.PaletteRenderer.cellId_ = 0;
  e.ui.PaletteRenderer.CSS_CLASS = "goog-palette";
  e.ui.PaletteRenderer.GRID_WIDTH_ATTRIBUTE = "gridWidth";
  e.ui.PaletteRenderer.prototype.createDom = function (a) {
    var c = this.getClassNames(a);
    c = a.getDomHelper().createDom("DIV", c, this.createGrid(a.getContent(), a.getSize(), a.getDomHelper()));
    e.a11y.aria.setRole(c, e.a11y.aria.Role.GRID);
    e.dom.dataset.set(c, e.ui.PaletteRenderer.GRID_WIDTH_ATTRIBUTE, a.getSize().width);
    return c;
  };
  e.ui.PaletteRenderer.prototype.createGrid = function (a, c, d) {
    for (var f = [], g = 0, h = 0; g < c.height; g++) {
      for (var k = [], m = 0; m < c.width; m++) {
        var n = a && a[h++];
        k.push(this.createCell(n, d));
      }
      f.push(this.createRow(k, d));
    }
    return this.createTable(f, d);
  };
  e.ui.PaletteRenderer.prototype.createTable = function (a, c) {
    a = c.createDom("TABLE", this.getCssClass() + "-table", c.createDom("TBODY", this.getCssClass() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0";
    return a;
  };
  e.ui.PaletteRenderer.prototype.createRow = function (a, c) {
    a = c.createDom("TR", this.getCssClass() + "-row", a);
    e.a11y.aria.setRole(a, e.a11y.aria.Role.ROW);
    return a;
  };
  e.ui.PaletteRenderer.prototype.createCell = function (a, c) {
    a = c.createDom("TD", {
      "class": this.getCssClass() + "-cell",
      id: this.getCssClass() + "-cell-" + e.ui.PaletteRenderer.cellId_++
    }, a);
    e.a11y.aria.setRole(a, e.a11y.aria.Role.GRIDCELL);
    e.a11y.aria.setState(a, e.a11y.aria.State.SELECTED, !1);
    this.maybeUpdateAriaLabel_(a);
    return a;
  };
  e.ui.PaletteRenderer.prototype.maybeUpdateAriaLabel_ = function (a) {
    if (!e.dom.getTextContent(a) && !e.a11y.aria.getLabel(a)) {
      for (var c = new e.dom.NodeIterator(a), d = "", f; !d && (f = e.iter.nextOrValue(c, null));) f.nodeType == e.dom.NodeType.ELEMENT && (d = e.a11y.aria.getLabel(f) || f.title);
      d && e.a11y.aria.setLabel(a, d);
    }
  };
  e.ui.PaletteRenderer.prototype.canDecorate = function () {
    return !1;
  };
  e.ui.PaletteRenderer.prototype.decorate = function () {
    return null;
  };
  e.ui.PaletteRenderer.prototype.setContent = function (a, c) {
    if (a) {
      var d = e.dom.getElementsByTagNameAndClass("TBODY", this.getCssClass() + "-body", a)[0];
      if (d) {
        var f = 0;
        e.array.forEach(d.rows, function (a) {
          e.array.forEach(a.cells, function (a) {
            e.dom.removeChildren(a);
            e.a11y.aria.removeState(a, e.a11y.aria.State.LABEL);
            if (c) {
              var d = c[f++];
              d && (e.dom.appendChild(a, d), this.maybeUpdateAriaLabel_(a));
            }
          }, this);
        }, this);
        if (f < c.length) {
          for (var g = [], h = e.dom.getDomHelper(a), k = e.dom.dataset.get(a, e.ui.PaletteRenderer.GRID_WIDTH_ATTRIBUTE); f < c.length;) {
            var m = c[f++];
            g.push(this.createCell(m, h));
            g.length == k && (m = this.createRow(g, h), e.dom.appendChild(d, m), g.length = 0);
          }
          if (0 < g.length) {
            for (; g.length < k;) g.push(this.createCell("", h));
            m = this.createRow(g, h);
            e.dom.appendChild(d, m);
          }
        }
      }
      e.style.setUnselectable(a, !0, e.userAgent.GECKO);
    }
  };
  e.ui.PaletteRenderer.prototype.getContainingItem = function (a, c) {
    for (a = a.getElement(); c && c.nodeType == e.dom.NodeType.ELEMENT && c != a;) {
      if ("TD" == c.tagName && e.dom.classlist.contains(c, this.getCssClass() + "-cell")) return c.firstChild;
      c = c.parentNode;
    }
    return null;
  };
  e.ui.PaletteRenderer.prototype.highlightCell = function (a, c, d) {
    c && (c = this.getCellForItem(c), e.asserts.assert(c), e.dom.classlist.enable(c, this.getCssClass() + "-cell-hover", d), d ? e.a11y.aria.setState(a.getElementStrict(), e.a11y.aria.State.ACTIVEDESCENDANT, c.id) : c.id == e.a11y.aria.getState(a.getElementStrict(), e.a11y.aria.State.ACTIVEDESCENDANT) && e.a11y.aria.removeState(a.getElementStrict(), e.a11y.aria.State.ACTIVEDESCENDANT));
  };
  e.ui.PaletteRenderer.prototype.getCellForItem = function (a) {
    return a ? a.parentNode : null;
  };
  e.ui.PaletteRenderer.prototype.selectCell = function (a, c, d) {
    c && (a = c.parentNode, e.dom.classlist.enable(a, this.getCssClass() + "-cell-selected", d), e.a11y.aria.setState(a, e.a11y.aria.State.SELECTED, d));
  };
  e.ui.PaletteRenderer.prototype.getCssClass = function () {
    return e.ui.PaletteRenderer.CSS_CLASS;
  };
  e.ui.SelectionModel = function (a) {
    e.events.EventTarget.call(this);
    this.items_ = [];
    this.addItems(a);
  };
  e.inherits(e.ui.SelectionModel, e.events.EventTarget);
  e.tagUnsealableClass(e.ui.SelectionModel);
  e.ui.SelectionModel.prototype.selectedItem_ = null;
  e.ui.SelectionModel.prototype.selectionHandler_ = null;
  e.ui.SelectionModel.prototype.getSelectionHandler = function () {
    return this.selectionHandler_;
  };
  e.ui.SelectionModel.prototype.setSelectionHandler = function (a) {
    this.selectionHandler_ = a;
  };
  e.ui.SelectionModel.prototype.getItemCount = function () {
    return this.items_.length;
  };
  e.ui.SelectionModel.prototype.indexOfItem = function (a) {
    return a ? e.array.indexOf(this.items_, a) : -1;
  };
  e.ui.SelectionModel.prototype.getFirst = function () {
    return this.items_[0];
  };
  e.ui.SelectionModel.prototype.getLast = function () {
    return this.items_[this.items_.length - 1];
  };
  e.ui.SelectionModel.prototype.getItemAt = function (a) {
    return this.items_[a] || null;
  };
  e.ui.SelectionModel.prototype.addItems = function (a) {
    a && (e.array.forEach(a, function (a) {
      this.selectItem_(a, !1);
    }, this), e.array.extend(this.items_, a));
  };
  e.ui.SelectionModel.prototype.addItem = function (a) {
    this.addItemAt(a, this.getItemCount());
  };
  e.ui.SelectionModel.prototype.addItemAt = function (a, c) {
    a && (this.selectItem_(a, !1), e.array.insertAt(this.items_, a, c));
  };
  e.ui.SelectionModel.prototype.removeItem = function (a) {
    a && e.array.remove(this.items_, a) && a == this.selectedItem_ && (this.selectedItem_ = null, this.dispatchEvent(e.events.EventType.SELECT));
  };
  e.ui.SelectionModel.prototype.removeItemAt = function (a) {
    this.removeItem(this.getItemAt(a));
  };
  e.ui.SelectionModel.prototype.getSelectedItem = function () {
    return this.selectedItem_;
  };
  e.ui.SelectionModel.prototype.getItems = function () {
    return e.array.clone(this.items_);
  };
  e.ui.SelectionModel.prototype.setSelectedItem = function (a) {
    a != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1), this.selectedItem_ = a, this.selectItem_(a, !0));
    this.dispatchEvent(e.events.EventType.SELECT);
  };
  e.ui.SelectionModel.prototype.getSelectedIndex = function () {
    return this.indexOfItem(this.selectedItem_);
  };
  e.ui.SelectionModel.prototype.setSelectedIndex = function (a) {
    this.setSelectedItem(this.getItemAt(a));
  };
  e.ui.SelectionModel.prototype.clear = function () {
    e.array.clear(this.items_);
    this.selectedItem_ = null;
  };
  e.ui.SelectionModel.prototype.disposeInternal = function () {
    e.ui.SelectionModel.superClass_.disposeInternal.call(this);
    delete this.items_;
    this.selectedItem_ = null;
  };
  e.ui.SelectionModel.prototype.selectItem_ = function (a, c) {
    a && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_(a, c) : "function" == typeof a.setSelected && a.setSelected(c));
  };
  e.ui.Palette = function (a, c, d) {
    e.ui.Control.call(this, a, c || e.ui.PaletteRenderer.getInstance(), d);
    this.setAutoStates(e.ui.Component.State.CHECKED | e.ui.Component.State.SELECTED | e.ui.Component.State.OPENED, !1);
    this.currentCellControl_ = new e.ui.Palette.CurrentCell_();
    this.currentCellControl_.setParentEventTarget(this);
    this.lastHighlightedIndex_ = -1;
  };
  e.inherits(e.ui.Palette, e.ui.Control);
  e.tagUnsealableClass(e.ui.Palette);
  e.ui.Palette.EventType = {
    AFTER_HIGHLIGHT: e.events.getUniqueId("afterhighlight")
  };
  e.ui.Palette.prototype.size_ = null;
  e.ui.Palette.prototype.highlightedIndex_ = -1;
  e.ui.Palette.prototype.selectionModel_ = null;
  e.ui.Palette.prototype.disposeInternal = function () {
    e.ui.Palette.superClass_.disposeInternal.call(this);
    this.selectionModel_ && (this.selectionModel_.dispose(), this.selectionModel_ = null);
    this.size_ = null;
    this.currentCellControl_.dispose();
  };
  e.ui.Palette.prototype.setContentInternal = function (a) {
    e.ui.Palette.superClass_.setContentInternal.call(this, a);
    this.adjustSize_();
    this.selectionModel_ ? (this.selectionModel_.clear(), this.selectionModel_.addItems(a)) : (this.selectionModel_ = new e.ui.SelectionModel(a), this.selectionModel_.setSelectionHandler(e.bind(this.selectItem_, this)), this.getHandler().listen(this.selectionModel_, e.events.EventType.SELECT, this.handleSelectionChange));
    this.highlightedIndex_ = -1;
  };
  e.ui.Palette.prototype.getCaption = function () {
    return "";
  };
  e.ui.Palette.prototype.setCaption = function () {};
  e.ui.Palette.prototype.handleMouseOver = function (a) {
    e.ui.Palette.superClass_.handleMouseOver.call(this, a);
    var c = this.getRenderer().getContainingItem(this, a.target);
    c && a.relatedTarget && e.dom.contains(c, a.relatedTarget) || c != this.getHighlightedItem() && this.setHighlightedItem(c);
  };
  e.ui.Palette.prototype.handleMouseDown = function (a) {
    e.ui.Palette.superClass_.handleMouseDown.call(this, a);
    this.isActive() && (a = this.getRenderer().getContainingItem(this, a.target), a != this.getHighlightedItem() && this.setHighlightedItem(a));
  };
  e.ui.Palette.prototype.performActionInternal = function (a) {
    var c = this.getHighlightedItem();
    return c ? (a && this.shouldSelectHighlightedItem_(a) && this.setSelectedItem(c), e.ui.Palette.superClass_.performActionInternal.call(this, a)) : !1;
  };
  e.ui.Palette.prototype.shouldSelectHighlightedItem_ = function (a) {
    return this.getSelectedItem() ? "mouseup" != a.type ? !0 : !!this.getRenderer().getContainingItem(this, a.target) : !0;
  };
  e.ui.Palette.prototype.handleKeyEvent = function (a) {
    var c = this.getContent();
    c = c ? c.length : 0;
    var d = this.size_.width;
    if (0 == c || !this.isEnabled()) return !1;
    if (a.keyCode == e.events.KeyCodes.ENTER || a.keyCode == e.events.KeyCodes.SPACE) return this.performActionInternal(a);
    if (a.keyCode == e.events.KeyCodes.HOME) return this.setHighlightedIndexInternal_(0, !0), !0;
    if (a.keyCode == e.events.KeyCodes.END) return this.setHighlightedIndexInternal_(c - 1, !0), !0;
    var f = 0 > this.highlightedIndex_ ? this.getSelectedIndex() : this.highlightedIndex_;
    switch (a.keyCode) {
      case e.events.KeyCodes.LEFT:
        if (-1 == f || 0 == f) f = c;
        this.setHighlightedIndexInternal_(f - 1, !0);
        a.preventDefault();
        return !0;
      case e.events.KeyCodes.RIGHT:
        return f == c - 1 && (f = -1), this.setHighlightedIndexInternal_(f + 1, !0), a.preventDefault(), !0;
      case e.events.KeyCodes.UP:
        -1 == f && (f = c + d - 1);
        if (f >= d) return this.setHighlightedIndexInternal_(f - d, !0), a.preventDefault(), !0;
        break;
      case e.events.KeyCodes.DOWN:
        if (-1 == f && (f = -d), f < c - d) return this.setHighlightedIndexInternal_(f + d, !0), a.preventDefault(), !0;
    }
    return !1;
  };
  e.ui.Palette.prototype.handleSelectionChange = function () {};
  e.ui.Palette.prototype.getSize = function () {
    return this.size_;
  };
  e.ui.Palette.prototype.setSize = function (a, c) {
    if (this.getElement()) throw Error(e.ui.Component.Error.ALREADY_RENDERED);
    this.size_ = "number" === typeof a ? new e.math.Size(a, c) : a;
    this.adjustSize_();
  };
  e.ui.Palette.prototype.getHighlightedIndex = function () {
    return this.highlightedIndex_;
  };
  e.ui.Palette.prototype.getHighlightedItem = function () {
    var a = this.getContent();
    return a && a[this.highlightedIndex_];
  };
  e.ui.Palette.prototype.getHighlightedCellElement_ = function () {
    return this.getRenderer().getCellForItem(this.getHighlightedItem());
  };
  e.ui.Palette.prototype.setHighlightedIndex = function (a) {
    this.setHighlightedIndexInternal_(a, !1);
  };
  e.ui.Palette.prototype.setHighlightedIndexInternal_ = function (a, c) {
    a != this.highlightedIndex_ && (this.highlightIndex_(this.highlightedIndex_, !1), this.lastHighlightedIndex_ = this.highlightedIndex_, this.highlightedIndex_ = a, this.highlightIndex_(a, !0), c && (a = e.asserts.assert(this.getHighlightedCellElement_(), "Highlighted item must exist to scroll to make it visible in container. Please check that index is non-negative and valid."), e.style.scrollIntoContainerView(a, this.getParent().getElementStrict())), this.dispatchEvent(e.ui.Palette.EventType.AFTER_HIGHLIGHT));
  };
  e.ui.Palette.prototype.setHighlightedItem = function (a) {
    var c = this.getContent();
    this.setHighlightedIndex(c && a ? e.array.indexOf(c, a) : -1);
  };
  e.ui.Palette.prototype.getSelectedIndex = function () {
    return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1;
  };
  e.ui.Palette.prototype.getSelectedItem = function () {
    return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null;
  };
  e.ui.Palette.prototype.setSelectedIndex = function (a) {
    this.selectionModel_ && this.selectionModel_.setSelectedIndex(a);
  };
  e.ui.Palette.prototype.setSelectedItem = function (a) {
    this.selectionModel_ && this.selectionModel_.setSelectedItem(a);
  };
  e.ui.Palette.prototype.highlightIndex_ = function (a, c) {
    if (this.getElement()) {
      var d = this.getContent();
      if (d && 0 <= a && a < d.length) {
        var f = this.getHighlightedCellElement_();
        this.currentCellControl_.getElement() != f && this.currentCellControl_.setElementInternal(f);
        this.currentCellControl_.tryHighlight(c) && this.getRenderer().highlightCell(this, d[a], c);
      }
    }
  };
  e.ui.Palette.prototype.setHighlighted = function (a) {
    a && -1 == this.highlightedIndex_ ? this.setHighlightedIndex(-1 < this.lastHighlightedIndex_ ? this.lastHighlightedIndex_ : 0) : a || this.setHighlightedIndex(-1);
    e.ui.Palette.superClass_.setHighlighted.call(this, a);
  };
  e.ui.Palette.prototype.selectItem_ = function (a, c) {
    this.getElement() && this.getRenderer().selectCell(this, a, c);
  };
  e.ui.Palette.prototype.adjustSize_ = function () {
    var a = this.getContent();
    if (a) {
      if (this.size_ && this.size_.width) {
        if (a = Math.ceil(a.length / this.size_.width), "number" !== typeof this.size_.height || this.size_.height < a) this.size_.height = a;
      } else a = Math.ceil(Math.sqrt(a.length)), this.size_ = new e.math.Size(a, a);
    } else this.size_ = new e.math.Size(0, 0);
  };
  e.ui.Palette.CurrentCell_ = function () {
    e.ui.Control.call(this, null);
    this.setDispatchTransitionEvents(e.ui.Component.State.HOVER, !0);
  };
  e.inherits(e.ui.Palette.CurrentCell_, e.ui.Control);
  e.ui.Palette.CurrentCell_.prototype.tryHighlight = function (a) {
    this.setHighlighted(a);
    return this.isHighlighted() == a;
  };
  e.ui.ColorPalette = function (a, c, d) {
    this.colors_ = a || [];
    e.ui.Palette.call(this, null, c || e.ui.PaletteRenderer.getInstance(), d);
    this.setColors(this.colors_);
  };
  e.inherits(e.ui.ColorPalette, e.ui.Palette);
  e.tagUnsealableClass(e.ui.ColorPalette);
  e.ui.ColorPalette.prototype.normalizedColors_ = null;
  e.ui.ColorPalette.prototype.labels_ = null;
  e.ui.ColorPalette.prototype.getColors = function () {
    return this.colors_;
  };
  e.ui.ColorPalette.prototype.setColors = function (a, c) {
    this.colors_ = a;
    this.labels_ = c || null;
    this.normalizedColors_ = null;
    this.setContent(this.createColorNodes());
  };
  e.ui.ColorPalette.prototype.getSelectedColor = function () {
    var a = this.getSelectedItem();
    return a ? (a = e.style.getStyle(a, "background-color"), e.ui.ColorPalette.parseColor_(a)) : null;
  };
  e.ui.ColorPalette.prototype.setSelectedColor = function (a) {
    a = e.ui.ColorPalette.parseColor_(a);
    this.normalizedColors_ || (this.normalizedColors_ = e.array.map(this.colors_, function (a) {
      return e.ui.ColorPalette.parseColor_(a);
    }));
    this.setSelectedIndex(a ? e.array.indexOf(this.normalizedColors_, a) : -1);
  };
  e.ui.ColorPalette.prototype.createColorNodes = function () {
    return e.array.map(this.colors_, function (a, c) {
      var d = this.getDomHelper().createDom("DIV", {
        "class": this.getRenderer().getCssClass() + "-colorswatch",
        style: "background-color:" + a
      });
      d.title = this.labels_ && this.labels_[c] ? this.labels_[c] : "#" == a.charAt(0) ? "RGB (" + e.color.hexToRgb(a).join(", ") + ")" : a;
      return d;
    }, this);
  };
  e.ui.ColorPalette.parseColor_ = function (a) {
    if (a) try {
      return e.color.parse(a).hex;
    } catch (c) {}
    return null;
  };
  e.ui.ColorPicker = function (a, c) {
    e.ui.Component.call(this, a);
    this.colorPalette_ = c || null;
    this.getHandler().listen(this, e.ui.Component.EventType.ACTION, this.onColorPaletteAction_);
  };
  e.inherits(e.ui.ColorPicker, e.ui.Component);
  e.ui.ColorPicker.DEFAULT_NUM_COLS = 5;
  e.ui.ColorPicker.EventType = {
    CHANGE: "change"
  };
  e.ui.ColorPicker.prototype.focusable_ = !0;
  e.ui.ColorPicker.prototype.getColors = function () {
    return this.colorPalette_ ? this.colorPalette_.getColors() : null;
  };
  e.ui.ColorPicker.prototype.setColors = function (a) {
    this.colorPalette_ ? this.colorPalette_.setColors(a) : this.createColorPalette_(a);
  };
  e.ui.ColorPicker.prototype.addColors = function (a) {
    this.setColors(a);
  };
  e.ui.ColorPicker.prototype.setSize = function (a) {
    this.colorPalette_ || this.createColorPalette_([]);
    this.colorPalette_.setSize(a);
  };
  e.ui.ColorPicker.prototype.getSize = function () {
    return this.colorPalette_ ? this.colorPalette_.getSize() : null;
  };
  e.ui.ColorPicker.prototype.setColumnCount = function (a) {
    this.setSize(a);
  };
  e.ui.ColorPicker.prototype.getSelectedIndex = function () {
    return this.colorPalette_ ? this.colorPalette_.getSelectedIndex() : -1;
  };
  e.ui.ColorPicker.prototype.setSelectedIndex = function (a) {
    this.colorPalette_ && this.colorPalette_.setSelectedIndex(a);
  };
  e.ui.ColorPicker.prototype.getSelectedColor = function () {
    return this.colorPalette_ ? this.colorPalette_.getSelectedColor() : null;
  };
  e.ui.ColorPicker.prototype.setSelectedColor = function (a) {
    this.colorPalette_ && this.colorPalette_.setSelectedColor(a);
  };
  e.ui.ColorPicker.prototype.isFocusable = function () {
    return this.focusable_;
  };
  e.ui.ColorPicker.prototype.setFocusable = function (a) {
    this.focusable_ = a;
    this.colorPalette_ && this.colorPalette_.setSupportedState(e.ui.Component.State.FOCUSED, a);
  };
  e.ui.ColorPicker.prototype.canDecorate = function () {
    return !1;
  };
  e.ui.ColorPicker.prototype.enterDocument = function () {
    e.ui.ColorPicker.superClass_.enterDocument.call(this);
    this.colorPalette_ && this.colorPalette_.render(this.getElement());
    this.getElement().unselectable = "on";
  };
  e.ui.ColorPicker.prototype.disposeInternal = function () {
    e.ui.ColorPicker.superClass_.disposeInternal.call(this);
    this.colorPalette_ && (this.colorPalette_.dispose(), this.colorPalette_ = null);
  };
  e.ui.ColorPicker.prototype.focus = function () {
    this.colorPalette_ && this.colorPalette_.getElement().focus();
  };
  e.ui.ColorPicker.prototype.onColorPaletteAction_ = function (a) {
    a.stopPropagation();
    this.dispatchEvent(e.ui.ColorPicker.EventType.CHANGE);
  };
  e.ui.ColorPicker.prototype.createColorPalette_ = function (a) {
    a = new e.ui.ColorPalette(a, null, this.getDomHelper());
    a.setSize(e.ui.ColorPicker.DEFAULT_NUM_COLS);
    a.setSupportedState(e.ui.Component.State.FOCUSED, this.focusable_);
    this.addChild(a);
    this.colorPalette_ = a;
    this.isInDocument() && this.colorPalette_.render(this.getElement());
  };
  e.ui.ColorPicker.createSimpleColorGrid = function (a) {
    a = new e.ui.ColorPicker(a);
    a.setSize(7);
    a.setColors(e.ui.ColorPicker.SIMPLE_GRID_COLORS);
    return a;
  };
  e.ui.ColorPicker.SIMPLE_GRID_COLORS = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");
  A.FieldColour = function (a, c) {
    A.FieldColour.superClass_.constructor.call(this, "\u00a0\u00a0\u00a0");
    this.changeHandler_ = c;
    this.borderRect_.style.fillOpacity = 1;
    this.setValue(a);
  };
  e.inherits(A.FieldColour, A.Field);
  A.FieldColour.prototype.clone = function () {
    return new A.FieldColour(this.getValue(), this.changeHandler_);
  };
  A.FieldColour.prototype.CURSOR = "default";
  A.FieldColour.prototype.dispose = function () {
    A.WidgetDiv.hideIfOwner(this);
    A.FieldColour.superClass_.dispose.call(this);
  };
  A.FieldColour.prototype.getValue = function () {
    return this.colour_;
  };
  A.FieldColour.prototype.setValue = function (a) {
    this.colour_ = a;
    this.borderRect_.style.fill = a;
    this.sourceBlock_ && this.sourceBlock_.rendered && (A.Realtime.blockChanged(this.sourceBlock_), this.sourceBlock_.workspace.fireChangeEvent());
  };
  A.FieldColour.COLOURS = e.ui.ColorPicker.SIMPLE_GRID_COLORS;
  A.FieldColour.COLUMNS = 7;
  A.FieldColour.prototype.showEditor_ = function () {
    A.WidgetDiv.show(this, A.FieldColour.widgetDispose_);
    var a = new e.ui.ColorPicker();
    a.setSize(A.FieldColour.COLUMNS);
    a.setColors(A.FieldColour.COLOURS);
    var c = e.dom.getViewportSize(),
      d = e.style.getViewportPageOffset(document),
      f = A.getAbsoluteXY_(this.borderRect_),
      g = this.borderRect_.getBBox();
    a.render(A.WidgetDiv.DIV);
    a.setSelectedColor(this.getValue());
    var h = e.style.getSize(a.getElement());
    f.y = f.y + h.height + g.height >= c.height + d.y ? f.y - (h.height - 1) : f.y + (g.height - 1);
    A.RTL ? (f.x += g.width, f.x -= h.width, f.x < d.x && (f.x = d.x)) : f.x > c.width + d.x - h.width && (f.x = c.width + d.x - h.width);
    A.WidgetDiv.position(f.x, f.y, c, d);
    var k = this;
    A.FieldColour.changeEventKey_ = e.events.listen(a, e.ui.ColorPicker.EventType.CHANGE, function (a) {
      a = a.target.getSelectedColor() || "#000000";
      A.WidgetDiv.hide();
      if (k.changeHandler_) {
        var c = k.changeHandler_(a);
        void 0 !== c && (a = c);
      }
      null !== a && k.setValue(a);
    });
  };
  A.FieldColour.widgetDispose_ = function () {
    A.FieldColour.changeEventKey_ && e.events.unlistenByKey(A.FieldColour.changeEventKey_);
  };
  A.FieldDropdown = function (a, c) {
    this.menuGenerator_ = a;
    this.changeHandler_ = c;
    this.trimOptions_();
    a = this.getOptions_()[0];
    this.value_ = a[1];
    this.arrow_ = A.createSvgElement("tspan", {}, null);
    this.arrow_.appendChild(document.createTextNode(A.RTL ? A.FieldDropdown.ARROW_CHAR + " " : " " + A.FieldDropdown.ARROW_CHAR));
    A.FieldDropdown.superClass_.constructor.call(this, a[0]);
  };
  e.inherits(A.FieldDropdown, A.Field);
  A.FieldDropdown.CHECKMARK_OVERHANG = 25;
  A.FieldDropdown.ARROW_CHAR = e.userAgent.ANDROID ? "\u25bc" : "\u25be";
  A.FieldDropdown.prototype.clone = function () {
    return new A.FieldDropdown(this.menuGenerator_, this.changeHandler_);
  };
  A.FieldDropdown.prototype.CURSOR = "default";
  A.FieldDropdown.prototype.showEditor_ = function () {
    A.WidgetDiv.show(this, null);
    for (var a = this, c = new e.ui.Menu(), d = this.getOptions_(), f = 0; f < d.length; f++) {
      var g = d[f][1],
        h = new e.ui.MenuItem(d[f][0]);
      h.setValue(g);
      h.setCheckable(!0);
      c.addChild(h, !0);
      h.setChecked(g == this.value_);
    }
    e.events.listen(c, e.ui.Component.EventType.ACTION, function (c) {
      if (c = c.target) {
        c = c.getValue();
        if (a.changeHandler_) {
          var d = a.changeHandler_(c);
          void 0 !== d && (c = d);
        }
        null !== c && a.setValue(c);
      }
      A.WidgetDiv.hideIfOwner(a);
    });
    c.getHandler().listen(c.getElement(), e.events.EventType.TOUCHSTART, function (a) {
      this.getOwnerControl(a.target).handleMouseDown(a);
    });
    c.getHandler().listen(c.getElement(), e.events.EventType.TOUCHEND, function (a) {
      this.getOwnerControl(a.target).performActionInternal(a);
    });
    d = e.dom.getViewportSize();
    f = e.style.getViewportPageOffset(document);
    g = A.getAbsoluteXY_(this.borderRect_);
    h = this.borderRect_.getBBox();
    c.render(A.WidgetDiv.DIV);
    var k = c.getElement();
    A.addClass_(k, "blocklyDropdownMenu");
    var m = e.style.getSize(k);
    g.y = g.y + m.height + h.height >= d.height + f.y ? g.y - m.height : g.y + h.height;
    A.RTL ? (g.x += h.width, g.x += A.FieldDropdown.CHECKMARK_OVERHANG, g.x < f.x + m.width && (g.x = f.x + m.width)) : (g.x -= A.FieldDropdown.CHECKMARK_OVERHANG, g.x > d.width + f.x - m.width && (g.x = d.width + f.x - m.width));
    A.WidgetDiv.position(g.x, g.y, d, f);
    c.setAllowAutoFocus(!0);
    k.focus();
  };
  A.FieldDropdown.prototype.trimOptions_ = function () {
    this.suffixField = this.prefixField = null;
    var a = this.menuGenerator_;
    if (e.isArray(a) && !(2 > a.length)) {
      var c = a.map(function (a) {
          return a[0];
        }),
        d = A.shortestStringLength(c),
        f = A.commonWordPrefix(c, d),
        g = A.commonWordSuffix(c, d);
      if ((f || g) && !(d <= f + g)) {
        f && (this.prefixField = c[0].substring(0, f - 1));
        g && (this.suffixField = c[0].substr(1 - g));
        c = [];
        for (d = 0; d < a.length; d++) {
          var h = a[d][0],
            k = a[d][1];
          h = h.substring(f, h.length - g);
          c[d] = [h, k];
        }
        this.menuGenerator_ = c;
      }
    }
  };
  A.FieldDropdown.prototype.getOptions_ = function () {
    return A.goog.isFunction(this.menuGenerator_) ? this.menuGenerator_.call(this) : this.menuGenerator_;
  };
  A.FieldDropdown.prototype.getValue = function () {
    return this.value_;
  };
  A.FieldDropdown.prototype.setValue = function (a) {
    this.value_ = a;
    for (var c = this.getOptions_(), d = 0; d < c.length; d++) if (c[d][1] == a) {
      this.setText(c[d][0]);
      return;
    }
    this.setText(a);
  };
  A.FieldDropdown.prototype.setText = function (a) {
    this.sourceBlock_ && (this.arrow_.style.fill = this.sourceBlock_.getHexColour());
    null !== a && a !== this.text_ && (this.text_ = a, this.updateTextNode_(), A.RTL ? this.textElement_.insertBefore(this.arrow_, this.textElement_.firstChild) : this.textElement_.appendChild(this.arrow_), this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_(), this.sourceBlock_.workspace.fireChangeEvent()));
  };
  A.FieldDropdown.prototype.dispose = function () {
    A.WidgetDiv.hideIfOwner(this);
    A.FieldDropdown.superClass_.dispose.call(this);
  };
  A.FieldImage = function (a, c, d, f) {
    this.sourceBlock_ = null;
    this.height_ = Number(d);
    this.width_ = Number(c);
    this.size_ = {
      height: this.height_ + 10,
      width: this.width_
    };
    this.text_ = f || "";
    c = 6 - A.BlockSvg.FIELD_HEIGHT;
    this.fieldGroup_ = A.createSvgElement("g", {}, null);
    this.imageElement_ = A.createSvgElement("image", {
      height: this.height_ + "px",
      width: this.width_ + "px",
      y: c
    }, this.fieldGroup_);
    this.setValue(a);
    e.userAgent.GECKO && (this.rectElement_ = A.createSvgElement("rect", {
      height: this.height_ + "px",
      width: this.width_ + "px",
      y: c,
      "fill-opacity": 0
    }, this.fieldGroup_));
  };
  e.inherits(A.FieldImage, A.Field);
  A.FieldImage.prototype.clone = function () {
    return new A.FieldImage(this.getSrc(), this.width_, this.height_, this.getText());
  };
  A.FieldImage.prototype.rectElement_ = null;
  A.FieldImage.prototype.EDITABLE = !1;
  A.FieldImage.prototype.init = function (a) {
    if (this.sourceBlock_) throw "Image has already been initialized once.";
    this.sourceBlock_ = a;
    a.getSvgRoot().appendChild(this.fieldGroup_);
    a = this.rectElement_ || this.imageElement_;
    a.tooltip = this.sourceBlock_;
    A.Tooltip.bindMouseEvents(a);
  };
  A.FieldImage.prototype.dispose = function () {
    e.dom.removeNode(this.fieldGroup_);
    this.rectElement_ = this.imageElement_ = this.fieldGroup_ = null;
  };
  A.FieldImage.prototype.setTooltip = function (a) {
    (this.rectElement_ || this.imageElement_).tooltip = a;
  };
  A.FieldImage.prototype.getValue = function () {
    return this.src_;
  };
  A.FieldImage.prototype.setValue = function (a) {
    null !== a && (this.src_ = a, this.imageElement_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", A.goog.isString(a) ? a : ""));
  };
  A.FieldImage.prototype.setText = function (a) {
    null !== a && (this.text_ = a);
  };
  A.Flyout = function () {
    var a = this;
    this.workspace_ = new A.Workspace(function () {
      return a.getMetrics_();
    }, function (c) {
      return a.setMetrics_(c);
    });
    this.workspace_.isFlyout = !0;
    this.eventWrappers_ = [];
    this.height_ = this.width_ = 0;
    this.buttons_ = [];
    this.listeners_ = [];
    this.enabled_ = !0;
  };
  A.Flyout.prototype.autoClose = !0;
  A.Flyout.prototype.layoutProvider = null;
  A.Flyout.prototype.CORNER_RADIUS = 0;
  A.Flyout.prototype.WHITESPACE = 8;
  A.Flyout.prototype.createDom = function () {
    this.svgGroup_ = A.createSvgElement("g", {}, null);
    this.svgBackground_ = A.createSvgElement("path", {
      "class": "blocklyFlyoutBackground"
    }, this.svgGroup_);
    this.svgGroup_.appendChild(this.workspace_.createDom());
    return this.svgGroup_;
  };
  A.Flyout.prototype.dispose = function () {
    this.hide();
    A.unbindEvent_(this.eventWrappers_);
    this.eventWrappers_.length = 0;
    this.scrollbar_ && (this.scrollbar_.dispose(), this.scrollbar_ = null);
    this.workspace_ = null;
    this.svgGroup_ && (e.dom.removeNode(this.svgGroup_), this.svgGroup_ = null);
    this.targetWorkspace_ = this.svgBackground_ = null;
  };
  A.Flyout.prototype.getMetrics_ = function () {
    if (!this.isVisible()) return null;
    var a = this.height_ - 2 * this.WHITESPACE,
      c = this.width_;
    try {
      var d = this.workspace_.getCanvas().getBBox();
    } catch (f) {
      d = {
        height: 0,
        y: 0
      };
    }
    return {
      viewHeight: a,
      viewWidth: c,
      contentHeight: d.height + d.y,
      viewTop: -this.workspace_.scrollY,
      contentTop: 0,
      absoluteTop: 0,
      absoluteLeft: 0
    };
  };
  A.Flyout.prototype.setMetrics_ = function (a) {
    var c = this.getMetrics_();
    c && (A.goog.isNumber(a.y) && (this.workspace_.scrollY = -c.contentHeight * a.y - c.contentTop), a = this.workspace_.scrollY + c.absoluteTop, this.workspace_.getCanvas().setAttribute("transform", "translate(0," + a + ")"));
  };
  A.Flyout.prototype.init = function (a) {
    this.targetWorkspace_ = a;
    this.scrollbar_ = new A.Scrollbar(this.workspace_, !1, !1);
    this.hide();
    this.eventWrappers_.concat(A.bindEvent_(window, e.events.EventType.RESIZE, this, this.position_));
    this.position_();
    this.eventWrappers_.concat(A.bindEvent_(this.svgGroup_, "wheel", this, this.wheel_));
    this.eventWrappers_.concat(A.bindEvent_(this.svgGroup_, "mousewheel", this, this.wheel_));
    this.eventWrappers_.concat(A.bindEvent_(this.targetWorkspace_.getCanvas(), "blocklyWorkspaceChange", this, this.filterForCapacity_));
    this.eventWrappers_.concat(A.bindEvent_(this.svgGroup_, "mousedown", this, this.onMouseDown_));
  };
  A.Flyout.prototype.position_ = function () {
    if (this.isVisible()) {
      var a = this.targetWorkspace_.getMetrics();
      if (a) {
        var c = this.width_ - this.CORNER_RADIUS;
        A.RTL && (c *= -1);
        var d = ["M " + (A.RTL ? this.width_ : 0) + ",0"];
        d.push("h", c);
        d.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, A.RTL ? 0 : 1, A.RTL ? -this.CORNER_RADIUS : this.CORNER_RADIUS, this.CORNER_RADIUS);
        d.push("v", Math.max(0, a.viewHeight - 2 * this.CORNER_RADIUS));
        d.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, A.RTL ? 0 : 1, A.RTL ? this.CORNER_RADIUS : -this.CORNER_RADIUS, this.CORNER_RADIUS);
        d.push("h", -c);
        d.push("z");
        this.svgBackground_.setAttribute("d", d.join(" "));
        c = a.absoluteLeft;
        A.RTL && (c += a.viewWidth, c -= this.width_);
        this.svgGroup_.setAttribute("transform", "translate(" + c + "," + a.absoluteTop + ")");
        this.height_ = a.viewHeight;
        this.scrollbar_ && this.scrollbar_.resize();
      }
    }
  };
  A.Flyout.prototype.wheel_ = function (a) {
    var c = a.deltaY || -a.wheelDeltaY;
    if (c) {
      e.userAgent.GECKO && (c *= 10);
      var d = this.getMetrics_();
      c = d.viewTop + c;
      c = Math.min(c, d.contentHeight - d.viewHeight);
      c = Math.max(c, 0);
      this.scrollbar_.set(c);
      a.preventDefault();
    }
  };
  A.Flyout.prototype.isVisible = function () {
    return this.svgGroup_ && "block" == this.svgGroup_.style.display;
  };
  A.Flyout.prototype.hide = function () {
    if (this.isVisible()) {
      this.svgGroup_.style.display = "none";
      for (var a = 0, c; c = this.listeners_[a]; a++) A.unbindEvent_(c);
      this.listeners_.length = 0;
      this.reflowWrapper_ && (A.unbindEvent_(this.reflowWrapper_), this.reflowWrapper_ = null);
    }
  };
  A.Flyout.prototype.show = function (a) {
    this.hide();
    for (var c = this.workspace_.getTopBlocks(!1), d = 0, f; f = c[d]; d++) f.workspace == this.workspace_ && f.dispose(!1, !1);
    d = 0;
    for (var g; g = this.buttons_[d]; d++) e.dom.removeNode(g);
    this.buttons_.length = 0;
    var h = this.WHITESPACE;
    this.svgGroup_.style.display = "block";
    c = [];
    var k = [];
    if (a == A.Variables.NAME_TYPE) A.Variables.flyoutCategory(c, k, h, this.workspace_);else if (a == A.Procedures.NAME_TYPE) A.Procedures.flyoutCategory(c, k, h, this.workspace_);else for (var m = 0; f = a[m]; m++) f.tagName && "BLOCK" == f.tagName.toUpperCase() && (f = A.Xml.domToBlock(this.workspace_, f), c.push(f), k.push(3 * h));
    a = 70;
    for (m = 0; f = c[m]; m++) {
      d = f.getDescendants();
      g = 0;
      for (var n; n = d[g]; g++) n.isInFlyout = !0, n.setCommentText(null);
      f.render();
      n = f.getSvgRoot();
      g = f.getHeightWidth();
      d = A.RTL ? 0 : h + A.BlockSvg.TAB_WIDTH;
      f.moveBy(d, a);
      a += g.height + k[m];
      g = A.createSvgElement("rect", {
        "fill-opacity": 0
      }, null);
      this.workspace_.getCanvas().insertBefore(g, f.getSvgRoot());
      f.flyoutRect_ = g;
      this.buttons_[m] = g;
      this.autoClose ? this.listeners_.push(A.bindEvent_(n, "mousedown", null, this.createBlockFunc_(f))) : this.listeners_.push(A.bindEvent_(n, "mousedown", null, this.blockMouseDown_(f)));
      this.listeners_.push(A.bindEvent_(n, "mouseover", f.svg_, f.svg_.addSelect));
      this.listeners_.push(A.bindEvent_(n, "mouseout", f.svg_, f.svg_.removeSelect));
      this.listeners_.push(A.bindEvent_(g, "mousedown", null, this.createBlockFunc_(f)));
      this.listeners_.push(A.bindEvent_(g, "mouseover", f.svg_, f.svg_.addSelect));
      this.listeners_.push(A.bindEvent_(g, "mouseout", f.svg_, f.svg_.removeSelect));
    }
    this.listeners_.push(A.bindEvent_(this.svgBackground_, "mouseover", this, function () {
      for (var a = this.workspace_.getTopBlocks(!1), c = 0, d; d = a[c]; c++) d.svg_.removeSelect();
    }));
    this.width_ = 0;
    this.reflow();
    this.filterForCapacity_();
    A.fireUiEventNow(window, "resize");
    this.reflowWrapper_ = A.bindEvent_(this.workspace_.getCanvas(), "blocklyWorkspaceChange", this, this.reflow);
    this.workspace_.fireChangeEvent();
  };
  A.Flyout.prototype.reflow = function () {
    if (this.layoutProvider) this.externalReflow_();else {
      for (var a = 0, c = this.WHITESPACE, d = this.workspace_.getTopBlocks(!1), f = 0, g; g = d[f]; f++) {
        g.getSvgRoot();
        var h = g.getHeightWidth();
        a = Math.max(a, h.width);
      }
      0 < a && (a += c + A.BlockSvg.TAB_WIDTH + c / 2 + A.Scrollbar.scrollbarThickness);
      if (this.width_ != a) {
        for (f = 0; g = d[f]; f++) {
          h = g.getHeightWidth();
          var k = g.getRelativeToSurfaceXY();
          if (A.RTL) {
            var m = a - c - A.BlockSvg.TAB_WIDTH - k.x;
            g.moveBy(m, 0);
            k.x += m;
          }
          g.flyoutRect_ && (g.flyoutRect_.setAttribute("width", h.width), g.flyoutRect_.setAttribute("height", h.height), g.flyoutRect_.setAttribute("x", A.RTL ? k.x - h.width : k.x), g.flyoutRect_.setAttribute("y", k.y));
        }
        this.width_ = a;
        A.fireUiEvent(window, "resize");
      }
    }
  };
  A.Flyout.prototype.externalReflow_ = function () {
    for (var a = this.workspace_.getTopBlocks(!1), c = this.layoutProvider(a), d = 0, f; f = a[d]; d++) {
      var g = f.getHeightWidth(),
        h = f.getRelativeToSurfaceXY();
      f.flyoutRect_ && (f.flyoutRect_.setAttribute("width", g.width), f.flyoutRect_.setAttribute("height", g.height), f.flyoutRect_.setAttribute("x", A.RTL ? h.x - g.width : h.x), f.flyoutRect_.setAttribute("y", h.y));
    }
    this.width_ != c && (this.width_ = c, A.mainWorkspace.scrollX = this.width_, A.RTL && (A.mainWorkspace.scrollX *= -1), a = "translate(" + A.mainWorkspace.scrollX + ", 0)", A.mainWorkspace.getCanvas().setAttribute("transform", a), A.mainWorkspace.getBubbleCanvas().setAttribute("transform", a), A.fireUiEvent(window, "resize"));
  };
  A.Block.prototype.moveTo = function (a, c) {
    var d = this.getRelativeToSurfaceXY();
    this.svg_.getRootElement().setAttribute("transform", "translate(" + a + ", " + c + ")");
    this.moveConnections_(a - d.x, c - d.y);
  };
  A.Flyout.prototype.blockMouseDown_ = function (a) {
    var c = this;
    return function (d) {
      c.enabled_ && (A.terminateDrag_(), A.hideChaff(), A.isRightButton(d) ? a.showContextMenu_(d) : (A.removeAllRanges(), A.setCursorHand_(!0), A.Flyout.startDownEvent_ = d, A.Flyout.startBlock_ = a, A.Flyout.startFlyout_ = c, A.Flyout.onMouseUpWrapper_ = A.bindEvent_(document, "mouseup", c, c.onMouseUpBlock_), A.Flyout.onMouseMoveBlockWrapper_ = A.bindEvent_(document, "mousemove", c, c.onMouseMoveBlock_)), d.stopPropagation());
    };
  };
  A.Flyout.prototype.onMouseDown_ = function (a) {
    A.isRightButton(a) || (A.hideChaff(!0), A.Flyout.terminateDrag_(), this.startDragMouseY_ = a.clientY, A.Flyout.onMouseMoveWrapper_ = A.bindEvent_(document, "mousemove", this, this.onMouseMove_), A.Flyout.onMouseUpWrapper_ = A.bindEvent_(document, "mouseup", this, A.Flyout.terminateDrag_), a.preventDefault(), a.stopPropagation());
  };
  A.Flyout.prototype.onMouseMove_ = function (a) {
    var c = a.clientY - this.startDragMouseY_;
    this.startDragMouseY_ = a.clientY;
    a = this.getMetrics_();
    c = a.viewTop - c;
    c = Math.min(c, a.contentHeight - a.viewHeight);
    c = Math.max(c, 0);
    this.scrollbar_.set(c);
  };
  A.Flyout.prototype.onMouseMoveBlock_ = function (a) {
    "mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button ? a.stopPropagation() : (A.removeAllRanges(), Math.sqrt(Math.pow(a.clientX - A.Flyout.startDownEvent_.clientX, 2) + Math.pow(a.clientY - A.Flyout.startDownEvent_.clientY, 2)) > A.DRAG_RADIUS && A.Flyout.startFlyout_.createBlockFunc_(A.Flyout.startBlock_)(A.Flyout.startDownEvent_));
  };
  A.Flyout.prototype.onMouseUpBlock_ = function () {
    A.fireUiEvent(this.workspace_.getCanvas(), "blocklyClickFlyoutBlock");
    A.terminateDrag_();
  };
  A.Flyout.prototype.createBlockFunc_ = function (a) {
    var c = this;
    return function (d) {
      if (c.enabled_ && !A.isRightButton(d) && !a.disabled) {
        var f = a.getCloneBlock();
        null == f && (f = A.Xml.blockToDom_(a));
        f = A.Xml.domToBlock(c.targetWorkspace_, f);
        var g = a.getSvgRoot();
        if (!g) throw "originBlock is not rendered.";
        g = A.getSvgXY_(g);
        var h = f.getSvgRoot();
        if (!h) throw "block is not rendered.";
        h = A.getSvgXY_(h);
        f.moveBy(g.x - h.x, g.y - h.y);
        c.autoClose ? c.hide() : c.filterForCapacity_();
        f.onMouseDown_(d);
      }
    };
  };
  A.Flyout.prototype.filterForCapacity_ = function () {
    for (var a = this.targetWorkspace_.remainingCapacity(), c = this.workspace_.getTopBlocks(!1), d = 0, f; f = c[d]; d++) {
      var g = f.getDescendants().length > a;
      f.setDisabled(g);
    }
  };
  A.Flyout.terminateDrag_ = function () {
    A.Flyout.onMouseUpWrapper_ && (A.unbindEvent_(A.Flyout.onMouseUpWrapper_), A.Flyout.onMouseUpWrapper_ = null);
    A.Flyout.onMouseMoveBlockWrapper_ && (A.unbindEvent_(A.Flyout.onMouseMoveBlockWrapper_), A.Flyout.onMouseMoveBlockWrapper_ = null);
    A.Flyout.onMouseMoveWrapper_ && (A.unbindEvent_(A.Flyout.onMouseMoveWrapper_), A.Flyout.onMouseMoveWrapper_ = null);
    A.Flyout.onMouseUpWrapper_ && (A.unbindEvent_(A.Flyout.onMouseUpWrapper_), A.Flyout.onMouseUpWrapper_ = null);
    A.Flyout.startDownEvent_ = null;
    A.Flyout.startBlock_ = null;
    A.Flyout.startFlyout_ = null;
  };
  A.Flyout.prototype.setEnabled = function (a) {
    this.enabled_ = a;
  };
  A.Flyout.prototype.getWidth = function () {
    return this.width_;
  };
  e.events.FocusHandler = function (a) {
    e.events.EventTarget.call(this);
    this.element_ = a;
    a = e.userAgent.IE ? "focusout" : "blur";
    this.listenKeyIn_ = e.events.listen(this.element_, e.userAgent.IE ? "focusin" : "focus", this, !e.userAgent.IE);
    this.listenKeyOut_ = e.events.listen(this.element_, a, this, !e.userAgent.IE);
  };
  e.inherits(e.events.FocusHandler, e.events.EventTarget);
  e.events.FocusHandler.EventType = {
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout"
  };
  e.events.FocusHandler.prototype.handleEvent = function (a) {
    var c = a.getBrowserEvent();
    c = new e.events.BrowserEvent(c);
    c.type = "focusin" == a.type || "focus" == a.type ? e.events.FocusHandler.EventType.FOCUSIN : e.events.FocusHandler.EventType.FOCUSOUT;
    this.dispatchEvent(c);
  };
  e.events.FocusHandler.prototype.disposeInternal = function () {
    e.events.FocusHandler.superClass_.disposeInternal.call(this);
    e.events.unlistenByKey(this.listenKeyIn_);
    e.events.unlistenByKey(this.listenKeyOut_);
    delete this.element_;
  };
  e.debug.LogRecord = function (a, c, d, f, g) {
    this.reset(a, c, d, f, g);
  };
  e.debug.LogRecord.prototype.sequenceNumber_ = 0;
  e.debug.LogRecord.prototype.exception_ = null;
  e.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0;
  e.debug.LogRecord.nextSequenceNumber_ = 0;
  e.debug.LogRecord.prototype.reset = function (a, c, d, f, g) {
    e.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && (this.sequenceNumber_ = "number" == typeof g ? g : e.debug.LogRecord.nextSequenceNumber_++);
    this.time_ = f || e.now();
    this.level_ = a;
    this.msg_ = c;
    this.loggerName_ = d;
    delete this.exception_;
  };
  e.debug.LogRecord.prototype.getLoggerName = function () {
    return this.loggerName_;
  };
  e.debug.LogRecord.prototype.getException = function () {
    return this.exception_;
  };
  e.debug.LogRecord.prototype.setException = function (a) {
    this.exception_ = a;
  };
  e.debug.LogRecord.prototype.setLoggerName = function (a) {
    this.loggerName_ = a;
  };
  e.debug.LogRecord.prototype.getLevel = function () {
    return this.level_;
  };
  e.debug.LogRecord.prototype.setLevel = function (a) {
    this.level_ = a;
  };
  e.debug.LogRecord.prototype.getMessage = function () {
    return this.msg_;
  };
  e.debug.LogRecord.prototype.setMessage = function (a) {
    this.msg_ = a;
  };
  e.debug.LogRecord.prototype.getMillis = function () {
    return this.time_;
  };
  e.debug.LogRecord.prototype.setMillis = function (a) {
    this.time_ = a;
  };
  e.debug.LogRecord.prototype.getSequenceNumber = function () {
    return this.sequenceNumber_;
  };
  e.debug.LogBuffer = function () {
    e.asserts.assert(e.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
    this.clear();
  };
  e.debug.LogBuffer.getInstance = function () {
    e.debug.LogBuffer.instance_ || (e.debug.LogBuffer.instance_ = new e.debug.LogBuffer());
    return e.debug.LogBuffer.instance_;
  };
  e.debug.LogBuffer.CAPACITY = 0;
  e.debug.LogBuffer.prototype.addRecord = function (a, c, d) {
    var f = (this.curIndex_ + 1) % e.debug.LogBuffer.CAPACITY;
    this.curIndex_ = f;
    if (this.isFull_) return f = this.buffer_[f], f.reset(a, c, d), f;
    this.isFull_ = f == e.debug.LogBuffer.CAPACITY - 1;
    return this.buffer_[f] = new e.debug.LogRecord(a, c, d);
  };
  e.debug.LogBuffer.isBufferingEnabled = function () {
    return 0 < e.debug.LogBuffer.CAPACITY;
  };
  e.debug.LogBuffer.prototype.clear = function () {
    this.buffer_ = Array(e.debug.LogBuffer.CAPACITY);
    this.curIndex_ = -1;
    this.isFull_ = !1;
  };
  e.debug.LogBuffer.prototype.forEachRecord = function (a) {
    var c = this.buffer_;
    if (c[0]) {
      var d = this.curIndex_,
        f = this.isFull_ ? d : -1;
      do f = (f + 1) % e.debug.LogBuffer.CAPACITY, a(c[f]); while (f != d);
    }
  };
  e.debug.Logger = function (a) {
    this.name_ = a;
    this.handlers_ = this.children_ = this.level_ = this.parent_ = null;
  };
  e.debug.Logger.ROOT_LOGGER_NAME = "";
  e.debug.Logger.ENABLE_HIERARCHY = !0;
  e.debug.Logger.ENABLE_PROFILER_LOGGING = !1;
  e.debug.Logger.ENABLE_HIERARCHY || (e.debug.Logger.rootHandlers_ = []);
  e.debug.Logger.Level = function (a, c) {
    this.name = a;
    this.value = c;
  };
  e.debug.Logger.Level.prototype.toString = function () {
    return this.name;
  };
  e.debug.Logger.Level.OFF = new e.debug.Logger.Level("OFF", Infinity);
  e.debug.Logger.Level.SHOUT = new e.debug.Logger.Level("SHOUT", 1200);
  e.debug.Logger.Level.SEVERE = new e.debug.Logger.Level("SEVERE", 1E3);
  e.debug.Logger.Level.WARNING = new e.debug.Logger.Level("WARNING", 900);
  e.debug.Logger.Level.INFO = new e.debug.Logger.Level("INFO", 800);
  e.debug.Logger.Level.CONFIG = new e.debug.Logger.Level("CONFIG", 700);
  e.debug.Logger.Level.FINE = new e.debug.Logger.Level("FINE", 500);
  e.debug.Logger.Level.FINER = new e.debug.Logger.Level("FINER", 400);
  e.debug.Logger.Level.FINEST = new e.debug.Logger.Level("FINEST", 300);
  e.debug.Logger.Level.ALL = new e.debug.Logger.Level("ALL", 0);
  e.debug.Logger.Level.PREDEFINED_LEVELS = [e.debug.Logger.Level.OFF, e.debug.Logger.Level.SHOUT, e.debug.Logger.Level.SEVERE, e.debug.Logger.Level.WARNING, e.debug.Logger.Level.INFO, e.debug.Logger.Level.CONFIG, e.debug.Logger.Level.FINE, e.debug.Logger.Level.FINER, e.debug.Logger.Level.FINEST, e.debug.Logger.Level.ALL];
  e.debug.Logger.Level.predefinedLevelsCache_ = null;
  e.debug.Logger.Level.createPredefinedLevelsCache_ = function () {
    e.debug.Logger.Level.predefinedLevelsCache_ = {};
    for (var a = 0, c; c = e.debug.Logger.Level.PREDEFINED_LEVELS[a]; a++) e.debug.Logger.Level.predefinedLevelsCache_[c.value] = c, e.debug.Logger.Level.predefinedLevelsCache_[c.name] = c;
  };
  e.debug.Logger.Level.getPredefinedLevel = function (a) {
    e.debug.Logger.Level.predefinedLevelsCache_ || e.debug.Logger.Level.createPredefinedLevelsCache_();
    return e.debug.Logger.Level.predefinedLevelsCache_[a] || null;
  };
  e.debug.Logger.Level.getPredefinedLevelByValue = function (a) {
    e.debug.Logger.Level.predefinedLevelsCache_ || e.debug.Logger.Level.createPredefinedLevelsCache_();
    if (a in e.debug.Logger.Level.predefinedLevelsCache_) return e.debug.Logger.Level.predefinedLevelsCache_[a];
    for (var c = 0; c < e.debug.Logger.Level.PREDEFINED_LEVELS.length; ++c) {
      var d = e.debug.Logger.Level.PREDEFINED_LEVELS[c];
      if (d.value <= a) return d;
    }
    return null;
  };
  e.debug.Logger.getLogger = function (a) {
    return e.debug.LogManager.getLogger(a);
  };
  e.debug.Logger.logToProfilers = function (a) {
    if (e.debug.Logger.ENABLE_PROFILER_LOGGING) {
      var c = e.global.msWriteProfilerMark;
      c ? c(a) : (c = e.global.console) && c.timeStamp && c.timeStamp(a);
    }
  };
  e.debug.Logger.prototype.getName = function () {
    return this.name_;
  };
  e.debug.Logger.prototype.addHandler = function (a) {
    e.debug.LOGGING_ENABLED && (e.debug.Logger.ENABLE_HIERARCHY ? (this.handlers_ || (this.handlers_ = []), this.handlers_.push(a)) : (e.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), e.debug.Logger.rootHandlers_.push(a)));
  };
  e.debug.Logger.prototype.removeHandler = function (a) {
    if (e.debug.LOGGING_ENABLED) {
      var c = e.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : e.debug.Logger.rootHandlers_;
      return !!c && e.array.remove(c, a);
    }
    return !1;
  };
  e.debug.Logger.prototype.getParent = function () {
    return this.parent_;
  };
  e.debug.Logger.prototype.getChildren = function () {
    this.children_ || (this.children_ = {});
    return this.children_;
  };
  e.debug.Logger.prototype.setLevel = function (a) {
    e.debug.LOGGING_ENABLED && (e.debug.Logger.ENABLE_HIERARCHY ? this.level_ = a : (e.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), e.debug.Logger.rootLevel_ = a));
  };
  e.debug.Logger.prototype.getLevel = function () {
    return e.debug.LOGGING_ENABLED ? this.level_ : e.debug.Logger.Level.OFF;
  };
  e.debug.Logger.prototype.getEffectiveLevel = function () {
    if (!e.debug.LOGGING_ENABLED) return e.debug.Logger.Level.OFF;
    if (!e.debug.Logger.ENABLE_HIERARCHY) return e.debug.Logger.rootLevel_;
    if (this.level_) return this.level_;
    if (this.parent_) return this.parent_.getEffectiveLevel();
    e.asserts.fail("Root logger has no level set.");
    return null;
  };
  e.debug.Logger.prototype.isLoggable = function (a) {
    return e.debug.LOGGING_ENABLED && a.value >= this.getEffectiveLevel().value;
  };
  e.debug.Logger.prototype.log = function (a, c, d) {
    e.debug.LOGGING_ENABLED && this.isLoggable(a) && (e.isFunction(c) && (c = c()), this.doLogRecord_(this.getLogRecord(a, c, d)));
  };
  e.debug.Logger.prototype.getLogRecord = function (a, c, d) {
    a = e.debug.LogBuffer.isBufferingEnabled() ? e.debug.LogBuffer.getInstance().addRecord(a, c, this.name_) : new e.debug.LogRecord(a, String(c), this.name_);
    d && a.setException(d);
    return a;
  };
  e.debug.Logger.prototype.shout = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.SHOUT, a, c);
  };
  e.debug.Logger.prototype.severe = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.SEVERE, a, c);
  };
  e.debug.Logger.prototype.warning = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.WARNING, a, c);
  };
  e.debug.Logger.prototype.info = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.INFO, a, c);
  };
  e.debug.Logger.prototype.config = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.CONFIG, a, c);
  };
  e.debug.Logger.prototype.fine = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.FINE, a, c);
  };
  e.debug.Logger.prototype.finer = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.FINER, a, c);
  };
  e.debug.Logger.prototype.finest = function (a, c) {
    e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.FINEST, a, c);
  };
  e.debug.Logger.prototype.logRecord = function (a) {
    e.debug.LOGGING_ENABLED && this.isLoggable(a.getLevel()) && this.doLogRecord_(a);
  };
  e.debug.Logger.prototype.doLogRecord_ = function (a) {
    e.debug.Logger.ENABLE_PROFILER_LOGGING && e.debug.Logger.logToProfilers("log:" + a.getMessage());
    if (e.debug.Logger.ENABLE_HIERARCHY) for (var c = this; c;) c.callPublish_(a), c = c.getParent();else {
      c = 0;
      for (var d; d = e.debug.Logger.rootHandlers_[c++];) d(a);
    }
  };
  e.debug.Logger.prototype.callPublish_ = function (a) {
    if (this.handlers_) for (var c = 0, d; d = this.handlers_[c]; c++) d(a);
  };
  e.debug.Logger.prototype.setParent_ = function (a) {
    this.parent_ = a;
  };
  e.debug.Logger.prototype.addChild_ = function (a, c) {
    this.getChildren()[a] = c;
  };
  e.debug.LogManager = {};
  e.debug.LogManager.loggers_ = {};
  e.debug.LogManager.rootLogger_ = null;
  e.debug.LogManager.initialize = function () {
    e.debug.LogManager.rootLogger_ || (e.debug.LogManager.rootLogger_ = new e.debug.Logger(e.debug.Logger.ROOT_LOGGER_NAME), e.debug.LogManager.loggers_[e.debug.Logger.ROOT_LOGGER_NAME] = e.debug.LogManager.rootLogger_, e.debug.LogManager.rootLogger_.setLevel(e.debug.Logger.Level.CONFIG));
  };
  e.debug.LogManager.getLoggers = function () {
    return e.debug.LogManager.loggers_;
  };
  e.debug.LogManager.getRoot = function () {
    e.debug.LogManager.initialize();
    return e.debug.LogManager.rootLogger_;
  };
  e.debug.LogManager.getLogger = function (a) {
    e.debug.LogManager.initialize();
    return e.debug.LogManager.loggers_[a] || e.debug.LogManager.createLogger_(a);
  };
  e.debug.LogManager.createFunctionForCatchErrors = function (a) {
    return function (c) {
      (a || e.debug.LogManager.getRoot()).severe("Error: " + c.message + " (" + c.fileName + " @ Line: " + c.line + ")");
    };
  };
  e.debug.LogManager.createLogger_ = function (a) {
    var c = new e.debug.Logger(a);
    if (e.debug.Logger.ENABLE_HIERARCHY) {
      var d = a.lastIndexOf("."),
        f = a.substr(0, d);
      d = a.substr(d + 1);
      f = e.debug.LogManager.getLogger(f);
      f.addChild_(d, c);
      c.setParent_(f);
    }
    return e.debug.LogManager.loggers_[a] = c;
  };
  e.log = {};
  e.log.ENABLED = e.debug.LOGGING_ENABLED;
  e.log.ROOT_LOGGER_NAME = e.debug.Logger.ROOT_LOGGER_NAME;
  e.log.Logger = e.debug.Logger;
  e.log.Level = e.debug.Logger.Level;
  e.log.LogRecord = e.debug.LogRecord;
  e.log.getLogger = function (a, c) {
    return e.log.ENABLED ? (a = e.debug.LogManager.getLogger(a), c && a && a.setLevel(c), a) : null;
  };
  e.log.addHandler = function (a, c) {
    e.log.ENABLED && a && a.addHandler(c);
  };
  e.log.removeHandler = function (a, c) {
    return e.log.ENABLED && a ? a.removeHandler(c) : !1;
  };
  e.log.log = function (a, c, d, f) {
    e.log.ENABLED && a && a.log(c, d, f);
  };
  e.log.error = function (a, c, d) {
    e.log.ENABLED && a && a.severe(c, d);
  };
  e.log.warning = function (a, c, d) {
    e.log.ENABLED && a && a.warning(c, d);
  };
  e.log.info = function (a, c, d) {
    e.log.ENABLED && a && a.info(c, d);
  };
  e.log.fine = function (a, c, d) {
    e.log.ENABLED && a && a.fine(c, d);
  };
  e.string.StringBuffer = function (a, c) {
    null != a && this.append.apply(this, arguments);
  };
  e.string.StringBuffer.prototype.buffer_ = "";
  e.string.StringBuffer.prototype.set = function (a) {
    this.buffer_ = "" + a;
  };
  e.string.StringBuffer.prototype.append = function (a, c, d) {
    this.buffer_ += String(a);
    if (null != c) for (let a = 1; a < arguments.length; a++) this.buffer_ += arguments[a];
    return this;
  };
  e.string.StringBuffer.prototype.clear = function () {
    this.buffer_ = "";
  };
  e.string.StringBuffer.prototype.getLength = function () {
    return this.buffer_.length;
  };
  e.string.StringBuffer.prototype.toString = function () {
    return this.buffer_;
  };
  e.ui.tree = {};
  e.ui.tree.BaseNode = function (a, c, d) {
    e.ui.Component.call(this, d);
    this.config_ = c || e.ui.tree.BaseNode.defaultConfig;
    this.html_ = e.html.SafeHtml.htmlEscapePreservingNewlines(a);
    this.expanded_ = this.selected_ = !1;
    this.toolTip_ = null;
    this.afterLabelHtml_ = e.html.SafeHtml.EMPTY;
    this.isUserCollapsible_ = !0;
    this.depth_ = -1;
  };
  e.inherits(e.ui.tree.BaseNode, e.ui.Component);
  e.ui.tree.BaseNode.EventType = {
    BEFORE_EXPAND: "beforeexpand",
    EXPAND: "expand",
    BEFORE_COLLAPSE: "beforecollapse",
    COLLAPSE: "collapse"
  };
  e.ui.tree.BaseNode.allNodes = {};
  e.ui.tree.BaseNode.prototype.disposeInternal = function () {
    e.ui.tree.BaseNode.superClass_.disposeInternal.call(this);
    this.tree && (this.tree.removeNode(this), this.tree = null);
    this.setElementInternal(null);
  };
  e.ui.tree.BaseNode.prototype.initAccessibility = function () {
    var a = this.getElement();
    if (a) {
      var c = this.getLabelElement();
      c && !c.id && (c.id = this.getId() + ".label");
      e.a11y.aria.setRole(a, "treeitem");
      e.a11y.aria.setState(a, "selected", !1);
      e.a11y.aria.setState(a, "level", this.getDepth());
      c && e.a11y.aria.setState(a, "labelledby", c.id);
      (c = this.getIconElement()) && e.a11y.aria.setRole(c, "presentation");
      (c = this.getExpandIconElement()) && e.a11y.aria.setRole(c, "presentation");
      if (c = this.getChildrenElement()) if (e.a11y.aria.setRole(c, "group"), c.hasChildNodes()) for (e.a11y.aria.setState(a, e.a11y.aria.State.EXPANDED, !1), a = this.getChildCount(), c = 1; c <= a; c++) {
        var d = this.getChildAt(c - 1).getElement();
        e.asserts.assert(d, "The child element cannot be null");
        e.a11y.aria.setState(d, "setsize", a);
        e.a11y.aria.setState(d, "posinset", c);
      }
    }
  };
  e.ui.tree.BaseNode.prototype.createDom = function () {
    var a = this.getDomHelper().safeHtmlToNode(this.toSafeHtml());
    this.setElementInternal(a);
  };
  e.ui.tree.BaseNode.prototype.enterDocument = function () {
    e.ui.tree.BaseNode.superClass_.enterDocument.call(this);
    e.ui.tree.BaseNode.allNodes[this.getId()] = this;
    this.initAccessibility();
  };
  e.ui.tree.BaseNode.prototype.exitDocument = function () {
    e.ui.tree.BaseNode.superClass_.exitDocument.call(this);
    delete e.ui.tree.BaseNode.allNodes[this.getId()];
  };
  e.ui.tree.BaseNode.prototype.addChildAt = function (a, c) {
    e.asserts.assert(!a.getParent());
    e.asserts.assertInstanceof(a, e.ui.tree.BaseNode);
    var d = this.getChildAt(c - 1),
      f = this.getChildAt(c);
    e.ui.tree.BaseNode.superClass_.addChildAt.call(this, a, c);
    a.previousSibling_ = d;
    a.nextSibling_ = f;
    d ? d.nextSibling_ = a : this.firstChild_ = a;
    f ? f.previousSibling_ = a : this.lastChild_ = a;
    (c = this.getTree()) && a.setTreeInternal(c);
    a.setDepth_(this.getDepth() + 1);
    if (c = this.getElement()) if (this.updateExpandIcon(), e.a11y.aria.setState(c, e.a11y.aria.State.EXPANDED, this.getExpanded()), this.getExpanded()) {
      c = this.getChildrenElement();
      a.getElement() || a.createDom();
      var g = a.getElement(),
        h = f && f.getElement();
      c.insertBefore(g, h);
      this.isInDocument() && a.enterDocument();
      f || (d ? d.updateExpandIcon() : (e.style.setElementShown(c, !0), this.setExpanded(this.getExpanded())));
    }
  };
  e.ui.tree.BaseNode.prototype.add = function (a, c) {
    e.asserts.assert(!c || c.getParent() == this, "Can only add nodes before siblings");
    a.getParent() && a.getParent().removeChild(a);
    this.addChildAt(a, c ? this.indexOfChild(c) : this.getChildCount());
    return a;
  };
  e.ui.tree.BaseNode.prototype.removeChild = function (a) {
    var c = this.getTree(),
      d = c ? c.getSelectedItem() : null;
    if (d == a || a.contains(d)) c.hasFocus() ? (this.select(), e.Timer.callOnce(this.onTimeoutSelect_, 10, this)) : this.select();
    e.ui.tree.BaseNode.superClass_.removeChild.call(this, a);
    this.lastChild_ == a && (this.lastChild_ = a.previousSibling_);
    this.firstChild_ == a && (this.firstChild_ = a.nextSibling_);
    a.previousSibling_ && (a.previousSibling_.nextSibling_ = a.nextSibling_);
    a.nextSibling_ && (a.nextSibling_.previousSibling_ = a.previousSibling_);
    d = a.isLastSibling();
    a.tree = null;
    a.depth_ = -1;
    if (c && (c.removeNode(a), this.isInDocument())) {
      c = this.getChildrenElement();
      if (a.isInDocument()) {
        var f = a.getElement();
        c.removeChild(f);
        a.exitDocument();
      }
      d && (d = this.getLastChild()) && d.updateExpandIcon();
      this.hasChildren() || (c.style.display = "none", this.updateExpandIcon(), this.updateIcon_(), (d = this.getElement()) && e.a11y.aria.removeState(d, e.a11y.aria.State.EXPANDED));
    }
    return a;
  };
  e.ui.tree.BaseNode.prototype.remove = e.ui.tree.BaseNode.prototype.removeChild;
  e.ui.tree.BaseNode.prototype.onTimeoutSelect_ = function () {
    this.select();
  };
  e.ui.tree.BaseNode.prototype.getTree = e.abstractMethod;
  e.ui.tree.BaseNode.prototype.getDepth = function () {
    var a = this.depth_;
    0 > a && (a = this.computeDepth_(), this.setDepth_(a));
    return a;
  };
  e.ui.tree.BaseNode.prototype.computeDepth_ = function () {
    var a = this.getParent();
    return a ? a.getDepth() + 1 : 0;
  };
  e.ui.tree.BaseNode.prototype.setDepth_ = function (a) {
    if (a != this.depth_) {
      this.depth_ = a;
      var c = this.getRowElement();
      if (c) {
        var d = this.getPixelIndent_() + "px";
        this.isRightToLeft() ? c.style.paddingRight = d : c.style.paddingLeft = d;
      }
      this.forEachChild(function (c) {
        c.setDepth_(a + 1);
      });
    }
  };
  e.ui.tree.BaseNode.prototype.contains = function (a) {
    for (; a;) {
      if (a == this) return !0;
      a = a.getParent();
    }
    return !1;
  };
  e.ui.tree.BaseNode.EMPTY_CHILDREN_ = [];
  e.ui.tree.BaseNode.prototype.getChildren = function () {
    var a = [];
    this.forEachChild(function (c) {
      a.push(c);
    });
    return a;
  };
  e.ui.tree.BaseNode.prototype.getFirstChild = function () {
    return this.getChildAt(0);
  };
  e.ui.tree.BaseNode.prototype.getLastChild = function () {
    return this.getChildAt(this.getChildCount() - 1);
  };
  e.ui.tree.BaseNode.prototype.getPreviousSibling = function () {
    return this.previousSibling_;
  };
  e.ui.tree.BaseNode.prototype.getNextSibling = function () {
    return this.nextSibling_;
  };
  e.ui.tree.BaseNode.prototype.isLastSibling = function () {
    return !this.nextSibling_;
  };
  e.ui.tree.BaseNode.prototype.isSelected = function () {
    return this.selected_;
  };
  e.ui.tree.BaseNode.prototype.select = function () {
    var a = this.getTree();
    a && a.setSelectedItem(this);
  };
  e.ui.tree.BaseNode.prototype.deselect = e.nullFunction;
  e.ui.tree.BaseNode.prototype.setSelectedInternal = function (a) {
    if (this.selected_ != a) {
      this.selected_ = a;
      this.updateRow();
      var c = this.getElement();
      c && (e.a11y.aria.setState(c, "selected", a), a && (a = this.getTree().getElement(), e.asserts.assert(a, "The DOM element for the tree cannot be null"), e.a11y.aria.setState(a, "activedescendant", this.getId())));
    }
  };
  e.ui.tree.BaseNode.prototype.getExpanded = function () {
    return this.expanded_;
  };
  e.ui.tree.BaseNode.prototype.setExpandedInternal = function (a) {
    this.expanded_ = a;
  };
  e.ui.tree.BaseNode.prototype.setExpanded = function (a) {
    var c = a != this.expanded_;
    if (!c || this.dispatchEvent(a ? e.ui.tree.BaseNode.EventType.BEFORE_EXPAND : e.ui.tree.BaseNode.EventType.BEFORE_COLLAPSE)) {
      this.expanded_ = a;
      var d = this.getTree();
      var f = this.getElement();
      if (this.hasChildren()) {
        if (!a && d && this.contains(d.getSelectedItem()) && this.select(), f) {
          if (d = this.getChildrenElement()) if (e.style.setElementShown(d, a), e.a11y.aria.setState(f, e.a11y.aria.State.EXPANDED, a), a && this.isInDocument() && !d.hasChildNodes()) {
            var g = [];
            this.forEachChild(function (a) {
              g.push(a.toSafeHtml());
            });
            e.dom.safe.setInnerHtml(d, e.html.SafeHtml.concat(g));
            this.forEachChild(function (a) {
              a.enterDocument();
            });
          }
          this.updateExpandIcon();
        }
      } else (d = this.getChildrenElement()) && e.style.setElementShown(d, !1);
      f && this.updateIcon_();
      c && this.dispatchEvent(a ? e.ui.tree.BaseNode.EventType.EXPAND : e.ui.tree.BaseNode.EventType.COLLAPSE);
    }
  };
  e.ui.tree.BaseNode.prototype.toggle = function () {
    this.setExpanded(!this.getExpanded());
  };
  e.ui.tree.BaseNode.prototype.expand = function () {
    this.setExpanded(!0);
  };
  e.ui.tree.BaseNode.prototype.collapse = function () {
    this.setExpanded(!1);
  };
  e.ui.tree.BaseNode.prototype.collapseChildren = function () {
    this.forEachChild(function (a) {
      a.collapseAll();
    });
  };
  e.ui.tree.BaseNode.prototype.collapseAll = function () {
    this.collapseChildren();
    this.collapse();
  };
  e.ui.tree.BaseNode.prototype.expandChildren = function () {
    this.forEachChild(function (a) {
      a.expandAll();
    });
  };
  e.ui.tree.BaseNode.prototype.expandAll = function () {
    this.expandChildren();
    this.expand();
  };
  e.ui.tree.BaseNode.prototype.reveal = function () {
    var a = this.getParent();
    a && (a.setExpanded(!0), a.reveal());
  };
  e.ui.tree.BaseNode.prototype.setIsUserCollapsible = function (a) {
    (this.isUserCollapsible_ = a) || this.expand();
    this.getElement() && this.updateExpandIcon();
  };
  e.ui.tree.BaseNode.prototype.isUserCollapsible = function () {
    return this.isUserCollapsible_;
  };
  e.ui.tree.BaseNode.prototype.toSafeHtml = function () {
    var a = this.getTree(),
      c = !a.getShowLines() || a == this.getParent() && !a.getShowRootLines() ? this.config_.cssChildrenNoLines : this.config_.cssChildren;
    a = this.getExpanded() && this.hasChildren();
    c = {
      "class": c,
      style: this.getLineStyle()
    };
    var d = [];
    a && this.forEachChild(function (a) {
      d.push(a.toSafeHtml());
    });
    a = e.html.SafeHtml.create("div", c, d);
    return e.html.SafeHtml.create("div", {
      "class": this.config_.cssItem,
      id: this.getId()
    }, [this.getRowSafeHtml(), a]);
  };
  e.ui.tree.BaseNode.prototype.getPixelIndent_ = function () {
    return Math.max(0, (this.getDepth() - 1) * this.config_.indentWidth);
  };
  e.ui.tree.BaseNode.prototype.getRowSafeHtml = function () {
    var a = {};
    a["padding-" + (this.isRightToLeft() ? "right" : "left")] = this.getPixelIndent_() + "px";
    a = {
      "class": this.getRowClassName(),
      style: a
    };
    var c = [this.getExpandIconSafeHtml(), this.getIconSafeHtml(), this.getLabelSafeHtml()];
    return e.html.SafeHtml.create("div", a, c);
  };
  e.ui.tree.BaseNode.prototype.getRowClassName = function () {
    var a = this.isSelected() ? " " + this.config_.cssSelectedRow : "";
    return this.config_.cssTreeRow + a;
  };
  e.ui.tree.BaseNode.prototype.getLabelSafeHtml = function () {
    var a = e.html.SafeHtml.create("span", {
      "class": this.config_.cssItemLabel,
      title: this.getToolTip() || null
    }, this.getSafeHtml());
    return e.html.SafeHtml.concat(a, e.html.SafeHtml.create("span", {}, this.getAfterLabelSafeHtml()));
  };
  e.ui.tree.BaseNode.prototype.getAfterLabelHtml = function () {
    return e.html.SafeHtml.unwrap(this.getAfterLabelSafeHtml());
  };
  e.ui.tree.BaseNode.prototype.getAfterLabelSafeHtml = function () {
    return this.afterLabelHtml_;
  };
  e.ui.tree.BaseNode.prototype.setAfterLabelSafeHtml = function (a) {
    this.afterLabelHtml_ = a;
    var c = this.getAfterLabelElement();
    c && e.dom.safe.setInnerHtml(c, a);
  };
  e.ui.tree.BaseNode.prototype.getIconSafeHtml = function () {
    return e.html.SafeHtml.create("span", {
      style: {
        display: "inline-block"
      },
      "class": this.getCalculatedIconClass()
    });
  };
  e.ui.tree.BaseNode.prototype.getCalculatedIconClass = e.abstractMethod;
  e.ui.tree.BaseNode.prototype.getExpandIconSafeHtml = function () {
    return e.html.SafeHtml.create("span", {
      type: "expand",
      style: {
        display: "inline-block"
      },
      "class": this.getExpandIconClass()
    });
  };
  e.ui.tree.BaseNode.prototype.getExpandIconClass = function () {
    var a = this.getTree(),
      c = !a.getShowLines() || a == this.getParent() && !a.getShowRootLines(),
      d = this.config_,
      f = new e.string.StringBuffer();
    f.append(d.cssTreeIcon, " ", d.cssExpandTreeIcon, " ");
    if (this.hasChildren()) {
      var g = 0;
      a.getShowExpandIcons() && this.isUserCollapsible_ && (g = this.getExpanded() ? 2 : 1);
      c || (g = this.isLastSibling() ? g + 4 : g + 8);
      switch (g) {
        case 1:
          f.append(d.cssExpandTreeIconPlus);
          break;
        case 2:
          f.append(d.cssExpandTreeIconMinus);
          break;
        case 4:
          f.append(d.cssExpandTreeIconL);
          break;
        case 5:
          f.append(d.cssExpandTreeIconLPlus);
          break;
        case 6:
          f.append(d.cssExpandTreeIconLMinus);
          break;
        case 8:
          f.append(d.cssExpandTreeIconT);
          break;
        case 9:
          f.append(d.cssExpandTreeIconTPlus);
          break;
        case 10:
          f.append(d.cssExpandTreeIconTMinus);
          break;
        default:
          f.append(d.cssExpandTreeIconBlank);
      }
    } else c ? f.append(d.cssExpandTreeIconBlank) : this.isLastSibling() ? f.append(d.cssExpandTreeIconL) : f.append(d.cssExpandTreeIconT);
    return f.toString();
  };
  e.ui.tree.BaseNode.prototype.getLineStyle = function () {
    var a = this.getExpanded() && this.hasChildren();
    return e.html.SafeStyle.create({
      "background-position": this.getBackgroundPosition(),
      display: a ? null : "none"
    });
  };
  e.ui.tree.BaseNode.prototype.getBackgroundPosition = function () {
    return (this.isLastSibling() ? "-100" : (this.getDepth() - 1) * this.config_.indentWidth) + "px 0";
  };
  e.ui.tree.BaseNode.prototype.getElement = function () {
    var a = e.ui.tree.BaseNode.superClass_.getElement.call(this);
    a || (a = this.getDomHelper().getElement(this.getId()), this.setElementInternal(a));
    return a;
  };
  e.ui.tree.BaseNode.prototype.getRowElement = function () {
    var a = this.getElement();
    return a ? a.firstChild : null;
  };
  e.ui.tree.BaseNode.prototype.getExpandIconElement = function () {
    var a = this.getRowElement();
    return a ? a.firstChild : null;
  };
  e.ui.tree.BaseNode.prototype.getIconElement = function () {
    var a = this.getRowElement();
    return a ? a.childNodes[1] : null;
  };
  e.ui.tree.BaseNode.prototype.getLabelElement = function () {
    var a = this.getRowElement();
    return a && a.lastChild ? a.lastChild.previousSibling : null;
  };
  e.ui.tree.BaseNode.prototype.getAfterLabelElement = function () {
    var a = this.getRowElement();
    return a ? a.lastChild : null;
  };
  e.ui.tree.BaseNode.prototype.getChildrenElement = function () {
    var a = this.getElement();
    return a ? a.lastChild : null;
  };
  e.ui.tree.BaseNode.prototype.setIconClass = function (a) {
    this.iconClass_ = a;
    this.isInDocument() && this.updateIcon_();
  };
  e.ui.tree.BaseNode.prototype.getIconClass = function () {
    return this.iconClass_;
  };
  e.ui.tree.BaseNode.prototype.setExpandedIconClass = function (a) {
    this.expandedIconClass_ = a;
    this.isInDocument() && this.updateIcon_();
  };
  e.ui.tree.BaseNode.prototype.getExpandedIconClass = function () {
    return this.expandedIconClass_;
  };
  e.ui.tree.BaseNode.prototype.setText = function (a) {
    this.setSafeHtml(e.html.SafeHtml.htmlEscape(a));
  };
  e.ui.tree.BaseNode.prototype.getText = function () {
    return e.string.unescapeEntities(e.html.SafeHtml.unwrap(this.html_));
  };
  e.ui.tree.BaseNode.prototype.setSafeHtml = function (a) {
    this.html_ = a;
    var c = this.getLabelElement();
    c && e.dom.safe.setInnerHtml(c, a);
    (a = this.getTree()) && a.setNode(this);
  };
  e.ui.tree.BaseNode.prototype.getHtml = function () {
    return e.html.SafeHtml.unwrap(this.getSafeHtml());
  };
  e.ui.tree.BaseNode.prototype.getSafeHtml = function () {
    return this.html_;
  };
  e.ui.tree.BaseNode.prototype.setToolTip = function (a) {
    this.toolTip_ = a;
    var c = this.getLabelElement();
    c && (c.title = a);
  };
  e.ui.tree.BaseNode.prototype.getToolTip = function () {
    return this.toolTip_;
  };
  e.ui.tree.BaseNode.prototype.updateRow = function () {
    var a = this.getRowElement();
    a && (a.className = this.getRowClassName());
  };
  e.ui.tree.BaseNode.prototype.updateExpandIcon = function () {
    var a = this.getExpandIconElement();
    a && (a.className = this.getExpandIconClass());
    if (a = this.getChildrenElement()) a.style.backgroundPosition = this.getBackgroundPosition();
  };
  e.ui.tree.BaseNode.prototype.updateIcon_ = function () {
    this.getIconElement().className = this.getCalculatedIconClass();
  };
  e.ui.tree.BaseNode.prototype.onMouseDown = function (a) {
    "expand" == a.target.getAttribute("type") && this.hasChildren() ? this.isUserCollapsible_ && this.toggle() : (this.select(), this.updateRow());
  };
  e.ui.tree.BaseNode.prototype.onClick_ = e.events.Event.preventDefault;
  e.ui.tree.BaseNode.prototype.onDoubleClick_ = function (a) {
    "expand" == a.target.getAttribute("type") && this.hasChildren() || this.isUserCollapsible_ && this.toggle();
  };
  e.ui.tree.BaseNode.prototype.onKeyDown = function (a) {
    var c = !0;
    switch (a.keyCode) {
      case e.events.KeyCodes.RIGHT:
        if (a.altKey) break;
        this.hasChildren() && (this.getExpanded() ? this.getFirstChild().select() : this.setExpanded(!0));
        break;
      case e.events.KeyCodes.LEFT:
        if (a.altKey) break;
        if (this.hasChildren() && this.getExpanded() && this.isUserCollapsible_) this.setExpanded(!1);else {
          var d = this.getParent(),
            f = this.getTree();
          d && (f.getShowRootNode() || d != f) && d.select();
        }
        break;
      case e.events.KeyCodes.DOWN:
        (d = this.getNextShownNode()) && d.select();
        break;
      case e.events.KeyCodes.UP:
        (d = this.getPreviousShownNode()) && d.select();
        break;
      default:
        c = !1;
    }
    c && (a.preventDefault(), (f = this.getTree()) && f.clearTypeAhead());
    return c;
  };
  e.ui.tree.BaseNode.prototype.getLastShownDescendant = function () {
    return this.getExpanded() && this.hasChildren() ? this.getLastChild().getLastShownDescendant() : this;
  };
  e.ui.tree.BaseNode.prototype.getNextShownNode = function () {
    if (this.hasChildren() && this.getExpanded()) return this.getFirstChild();
    for (var a = this, c; a != this.getTree();) {
      c = a.getNextSibling();
      if (null != c) return c;
      a = a.getParent();
    }
    return null;
  };
  e.ui.tree.BaseNode.prototype.getPreviousShownNode = function () {
    var a = this.getPreviousSibling();
    if (null != a) return a.getLastShownDescendant();
    a = this.getParent();
    var c = this.getTree();
    return !c.getShowRootNode() && a == c || this == c ? null : a;
  };
  e.ui.tree.BaseNode.prototype.getClientData = e.ui.tree.BaseNode.prototype.getModel;
  e.ui.tree.BaseNode.prototype.setClientData = e.ui.tree.BaseNode.prototype.setModel;
  e.ui.tree.BaseNode.prototype.getConfig = function () {
    return this.config_;
  };
  e.ui.tree.BaseNode.prototype.setTreeInternal = function (a) {
    this.tree != a && (this.tree = a, a.setNode(this), this.forEachChild(function (c) {
      c.setTreeInternal(a);
    }));
  };
  e.ui.tree.BaseNode.defaultConfig = {
    indentWidth: 19,
    cssRoot: "goog-tree-root goog-tree-item",
    cssHideRoot: "goog-tree-hide-root",
    cssItem: "goog-tree-item",
    cssChildren: "goog-tree-children",
    cssChildrenNoLines: "goog-tree-children-nolines",
    cssTreeRow: "goog-tree-row",
    cssItemLabel: "goog-tree-item-label",
    cssTreeIcon: "goog-tree-icon",
    cssExpandTreeIcon: "goog-tree-expand-icon",
    cssExpandTreeIconPlus: "goog-tree-expand-icon-plus",
    cssExpandTreeIconMinus: "goog-tree-expand-icon-minus",
    cssExpandTreeIconTPlus: "goog-tree-expand-icon-tplus",
    cssExpandTreeIconTMinus: "goog-tree-expand-icon-tminus",
    cssExpandTreeIconLPlus: "goog-tree-expand-icon-lplus",
    cssExpandTreeIconLMinus: "goog-tree-expand-icon-lminus",
    cssExpandTreeIconT: "goog-tree-expand-icon-t",
    cssExpandTreeIconL: "goog-tree-expand-icon-l",
    cssExpandTreeIconBlank: "goog-tree-expand-icon-blank",
    cssExpandedFolderIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedFolderIcon: "goog-tree-collapsed-folder-icon",
    cssFileIcon: "goog-tree-file-icon",
    cssExpandedRootIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedRootIcon: "goog-tree-collapsed-folder-icon",
    cssSelectedRow: "selected"
  };
  e.ui.tree.TreeNode = function (a, c, d) {
    e.ui.tree.BaseNode.call(this, a, c, d);
  };
  e.inherits(e.ui.tree.TreeNode, e.ui.tree.BaseNode);
  e.ui.tree.TreeNode.prototype.getTree = function () {
    if (this.tree) return this.tree;
    var a = this.getParent();
    return a && (a = a.getTree()) ? (this.setTreeInternal(a), a) : null;
  };
  e.ui.tree.TreeNode.prototype.getCalculatedIconClass = function () {
    var a = this.getExpanded(),
      c = this.getExpandedIconClass();
    if (a && c) return c;
    c = this.getIconClass();
    if (!a && c) return c;
    c = this.getConfig();
    if (this.hasChildren()) {
      if (a && c.cssExpandedFolderIcon) return c.cssTreeIcon + " " + c.cssExpandedFolderIcon;
      if (!a && c.cssCollapsedFolderIcon) return c.cssTreeIcon + " " + c.cssCollapsedFolderIcon;
    } else if (c.cssFileIcon) return c.cssTreeIcon + " " + c.cssFileIcon;
    return "";
  };
  e.structs = {};
  e.structs.getCount = function (a) {
    return a.getCount && "function" == typeof a.getCount ? a.getCount() : e.isArrayLike(a) || "string" === typeof a ? a.length : e.object.getCount(a);
  };
  e.structs.getValues = function (a) {
    if (a.getValues && "function" == typeof a.getValues) return a.getValues();
    if ("string" === typeof a) return a.split("");
    if (e.isArrayLike(a)) {
      for (var c = [], d = a.length, f = 0; f < d; f++) c.push(a[f]);
      return c;
    }
    return e.object.getValues(a);
  };
  e.structs.getKeys = function (a) {
    if (a.getKeys && "function" == typeof a.getKeys) return a.getKeys();
    if (!a.getValues || "function" != typeof a.getValues) {
      if (e.isArrayLike(a) || "string" === typeof a) {
        var c = [];
        a = a.length;
        for (var d = 0; d < a; d++) c.push(d);
        return c;
      }
      return e.object.getKeys(a);
    }
  };
  e.structs.contains = function (a, c) {
    return a.contains && "function" == typeof a.contains ? a.contains(c) : a.containsValue && "function" == typeof a.containsValue ? a.containsValue(c) : e.isArrayLike(a) || "string" === typeof a ? e.array.contains(a, c) : e.object.containsValue(a, c);
  };
  e.structs.isEmpty = function (a) {
    return a.isEmpty && "function" == typeof a.isEmpty ? a.isEmpty() : e.isArrayLike(a) || "string" === typeof a ? e.array.isEmpty(a) : e.object.isEmpty(a);
  };
  e.structs.clear = function (a) {
    a.clear && "function" == typeof a.clear ? a.clear() : e.isArrayLike(a) ? e.array.clear(a) : e.object.clear(a);
  };
  e.structs.forEach = function (a, c, d) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(c, d);else if (e.isArrayLike(a) || "string" === typeof a) e.array.forEach(a, c, d);else for (var f = e.structs.getKeys(a), g = e.structs.getValues(a), h = g.length, k = 0; k < h; k++) c.call(d, g[k], f && f[k], a);
  };
  e.structs.filter = function (a, c, d) {
    if ("function" == typeof a.filter) return a.filter(c, d);
    if (e.isArrayLike(a) || "string" === typeof a) return e.array.filter(a, c, d);
    var f = e.structs.getKeys(a),
      g = e.structs.getValues(a),
      h = g.length;
    if (f) {
      var k = {};
      for (var m = 0; m < h; m++) c.call(d, g[m], f[m], a) && (k[f[m]] = g[m]);
    } else for (k = [], m = 0; m < h; m++) c.call(d, g[m], void 0, a) && k.push(g[m]);
    return k;
  };
  e.structs.map = function (a, c, d) {
    if ("function" == typeof a.map) return a.map(c, d);
    if (e.isArrayLike(a) || "string" === typeof a) return e.array.map(a, c, d);
    var f = e.structs.getKeys(a),
      g = e.structs.getValues(a),
      h = g.length;
    if (f) {
      var k = {};
      for (var m = 0; m < h; m++) k[f[m]] = c.call(d, g[m], f[m], a);
    } else for (k = [], m = 0; m < h; m++) k[m] = c.call(d, g[m], void 0, a);
    return k;
  };
  e.structs.some = function (a, c, d) {
    if ("function" == typeof a.some) return a.some(c, d);
    if (e.isArrayLike(a) || "string" === typeof a) return e.array.some(a, c, d);
    for (var f = e.structs.getKeys(a), g = e.structs.getValues(a), h = g.length, k = 0; k < h; k++) if (c.call(d, g[k], f && f[k], a)) return !0;
    return !1;
  };
  e.structs.every = function (a, c, d) {
    if ("function" == typeof a.every) return a.every(c, d);
    if (e.isArrayLike(a) || "string" === typeof a) return e.array.every(a, c, d);
    for (var f = e.structs.getKeys(a), g = e.structs.getValues(a), h = g.length, k = 0; k < h; k++) if (!c.call(d, g[k], f && f[k], a)) return !1;
    return !0;
  };
  e.structs.Trie = function (a) {
    this.value_ = void 0;
    this.childNodes_ = {};
    a && this.setAll(a);
  };
  e.structs.Trie.prototype.set = function (a, c) {
    this.setOrAdd_(a, c, !1);
  };
  e.structs.Trie.prototype.add = function (a, c) {
    this.setOrAdd_(a, c, !0);
  };
  e.structs.Trie.prototype.setOrAdd_ = function (a, c, d) {
    for (var f = this, g = 0; g < a.length; g++) {
      var h = a.charAt(g);
      f.childNodes_[h] || (f.childNodes_[h] = new e.structs.Trie());
      f = f.childNodes_[h];
    }
    if (d && void 0 !== f.value_) throw Error('The collection already contains the key "' + a + '"');
    f.value_ = c;
  };
  e.structs.Trie.prototype.setAll = function (a) {
    var c = e.structs.getKeys(a);
    a = e.structs.getValues(a);
    for (var d = 0; d < c.length; d++) this.set(c[d], a[d]);
  };
  e.structs.Trie.prototype.getChildNode_ = function (a) {
    for (var c = this, d = 0; d < a.length; d++) {
      var f = a.charAt(d);
      c = c.childNodes_[f];
      if (!c) return;
    }
    return c;
  };
  e.structs.Trie.prototype.get = function (a) {
    return (a = this.getChildNode_(a)) ? a.value_ : void 0;
  };
  e.structs.Trie.prototype.getKeyAndPrefixes = function (a, c) {
    var d = this,
      f = {};
    c = c || 0;
    void 0 !== d.value_ && (f[c] = d.value_);
    for (; c < a.length; c++) {
      var g = a.charAt(c);
      if (!(g in d.childNodes_)) break;
      d = d.childNodes_[g];
      void 0 !== d.value_ && (f[c] = d.value_);
    }
    return f;
  };
  e.structs.Trie.prototype.getValues = function () {
    var a = [];
    this.getValuesInternal_(a);
    return a;
  };
  e.structs.Trie.prototype.getValuesInternal_ = function (a) {
    void 0 !== this.value_ && a.push(this.value_);
    for (var c in this.childNodes_) this.childNodes_[c].getValuesInternal_(a);
  };
  e.structs.Trie.prototype.getKeys = function (a) {
    var c = [];
    if (a) {
      for (var d = this, f = 0; f < a.length; f++) {
        var g = a.charAt(f);
        if (!d.childNodes_[g]) return [];
        d = d.childNodes_[g];
      }
      d.getKeysInternal_(a, c);
    } else this.getKeysInternal_("", c);
    return c;
  };
  e.structs.Trie.prototype.getKeysInternal_ = function (a, c) {
    void 0 !== this.value_ && c.push(a);
    for (var d in this.childNodes_) this.childNodes_[d].getKeysInternal_(a + d, c);
  };
  e.structs.Trie.prototype.containsKey = function (a) {
    return void 0 !== this.get(a);
  };
  e.structs.Trie.prototype.containsPrefix = function (a) {
    return 0 == a.length ? !this.isEmpty() : !!this.getChildNode_(a);
  };
  e.structs.Trie.prototype.containsValue = function (a) {
    if (this.value_ === a) return !0;
    for (var c in this.childNodes_) if (this.childNodes_[c].containsValue(a)) return !0;
    return !1;
  };
  e.structs.Trie.prototype.clear = function () {
    this.childNodes_ = {};
    this.value_ = void 0;
  };
  e.structs.Trie.prototype.remove = function (a) {
    for (var c = this, d = [], f = 0; f < a.length; f++) {
      var g = a.charAt(f);
      if (!c.childNodes_[g]) throw Error('The collection does not have the key "' + a + '"');
      d.push([c, g]);
      c = c.childNodes_[g];
    }
    a = c.value_;
    for (delete c.value_; 0 < d.length;) if (g = d.pop(), c = g[0], g = g[1], c.childNodes_[g].isEmpty()) delete c.childNodes_[g];else break;
    return a;
  };
  e.structs.Trie.prototype.clone = function () {
    return new e.structs.Trie(this);
  };
  e.structs.Trie.prototype.getCount = function () {
    return e.structs.getCount(this.getValues());
  };
  e.structs.Trie.prototype.isEmpty = function () {
    return void 0 === this.value_ && e.object.isEmpty(this.childNodes_);
  };
  e.ui.tree.TypeAhead = function () {
    this.nodeMap_ = new e.structs.Trie();
    this.buffer_ = "";
    this.matchingNodes_ = this.matchingLabels_ = null;
    this.matchingNodeIndex_ = this.matchingLabelIndex_ = 0;
  };
  e.ui.tree.TypeAhead.Offset = {
    DOWN: 1,
    UP: -1
  };
  e.ui.tree.TypeAhead.prototype.handleNavigation = function (a) {
    var c = !1;
    switch (a.keyCode) {
      case e.events.KeyCodes.DOWN:
      case e.events.KeyCodes.UP:
        a.ctrlKey && (this.jumpTo_(a.keyCode == e.events.KeyCodes.DOWN ? e.ui.tree.TypeAhead.Offset.DOWN : e.ui.tree.TypeAhead.Offset.UP), c = !0);
        break;
      case e.events.KeyCodes.BACKSPACE:
        a = this.buffer_.length - 1;
        c = !0;
        0 < a ? (this.buffer_ = this.buffer_.substring(0, a), this.jumpToLabel_(this.buffer_)) : 0 == a ? this.buffer_ = "" : c = !1;
        break;
      case e.events.KeyCodes.ESC:
        this.buffer_ = "", c = !0;
    }
    return c;
  };
  e.ui.tree.TypeAhead.prototype.handleTypeAheadChar = function (a) {
    var c = !1;
    if (!a.ctrlKey && !a.altKey) {
      var d = "";
      a.charCode ? d = String.fromCharCode(a.charCode).toLowerCase() : e.events.KeyCodes.isCharacterKey(a.keyCode) && (d = String.fromCharCode(a.keyCode).toLowerCase());
      d && e.string.isUnicodeChar(d) && (" " != d || this.buffer_) && (this.buffer_ += d, c = this.jumpToLabel_(this.buffer_));
    }
    return c;
  };
  e.ui.tree.TypeAhead.prototype.setNodeInMap = function (a) {
    var c = a.getText();
    if (c && !e.string.isEmptyOrWhitespace(e.string.makeSafe(c))) {
      c = c.toLowerCase();
      var d = this.nodeMap_.get(c);
      d ? d.push(a) : this.nodeMap_.set(c, [a]);
    }
  };
  e.ui.tree.TypeAhead.prototype.removeNodeFromMap = function (a) {
    var c = a.getText();
    if (c && !e.string.isEmptyOrWhitespace(e.string.makeSafe(c))) {
      c = c.toLowerCase();
      var d = this.nodeMap_.get(c);
      if (d) {
        for (var f = a.getChildCount(), g = 0; g < f; g++) this.removeNodeFromMap(a.getChildAt(g));
        e.array.remove(d, a);
        d.length || this.nodeMap_.remove(c);
      }
    }
  };
  e.ui.tree.TypeAhead.prototype.jumpToLabel_ = function (a) {
    var c = !1;
    (a = this.nodeMap_.getKeys(a)) && a.length && (this.matchingLabelIndex_ = this.matchingNodeIndex_ = 0, c = this.nodeMap_.get(a[0]), c = this.selectMatchingNode_(c)) && (this.matchingLabels_ = a);
    return c;
  };
  e.ui.tree.TypeAhead.prototype.jumpTo_ = function (a) {
    var c = !1,
      d = this.matchingLabels_;
    if (d) {
      c = null;
      var f = !1;
      if (this.matchingNodes_) {
        var g = this.matchingNodeIndex_ + a;
        0 <= g && g < this.matchingNodes_.length ? (this.matchingNodeIndex_ = g, c = this.matchingNodes_) : f = !0;
      }
      c || (g = this.matchingLabelIndex_ + a, 0 <= g && g < d.length && (this.matchingLabelIndex_ = g), d.length > this.matchingLabelIndex_ && (c = this.nodeMap_.get(d[this.matchingLabelIndex_])), c && c.length && f && (this.matchingNodeIndex_ = a == e.ui.tree.TypeAhead.Offset.UP ? c.length - 1 : 0));
      if (c = this.selectMatchingNode_(c)) this.matchingLabels_ = d;
    }
    return c;
  };
  e.ui.tree.TypeAhead.prototype.selectMatchingNode_ = function (a) {
    if (a) {
      if (this.matchingNodeIndex_ < a.length) {
        var c = a[this.matchingNodeIndex_];
        this.matchingNodes_ = a;
      }
      c && (c.reveal(), c.select());
    }
    return !!c;
  };
  e.ui.tree.TypeAhead.prototype.clear = function () {
    this.buffer_ = "";
  };
  e.ui.tree.TreeControl = function (a, c, d) {
    e.ui.tree.BaseNode.call(this, a, c, d);
    this.setExpandedInternal(!0);
    this.setSelectedInternal(!0);
    this.selectedItem_ = this;
    this.typeAhead_ = new e.ui.tree.TypeAhead();
    this.focusHandler_ = this.keyHandler_ = null;
    this.logger_ = e.log.getLogger("this");
    this.focused_ = !1;
    this.focusedNode_ = null;
    this.showRootLines_ = this.showRootNode_ = this.showExpandIcons_ = this.showLines_ = !0;
    if (e.userAgent.IE) try {
      document.execCommand("BackgroundImageCache", !1, !0);
    } catch (f) {
      e.log.warning(this.logger_, "Failed to enable background image cache");
    }
  };
  e.inherits(e.ui.tree.TreeControl, e.ui.tree.BaseNode);
  e.ui.tree.TreeControl.prototype.getTree = function () {
    return this;
  };
  e.ui.tree.TreeControl.prototype.getDepth = function () {
    return 0;
  };
  e.ui.tree.TreeControl.prototype.reveal = function () {};
  e.ui.tree.TreeControl.prototype.handleFocus_ = function () {
    this.focused_ = !0;
    e.dom.classlist.add(e.asserts.assert(this.getElement()), "focused");
    this.selectedItem_ && this.selectedItem_.select();
  };
  e.ui.tree.TreeControl.prototype.handleBlur_ = function () {
    this.focused_ = !1;
    e.dom.classlist.remove(e.asserts.assert(this.getElement()), "focused");
  };
  e.ui.tree.TreeControl.prototype.hasFocus = function () {
    return this.focused_;
  };
  e.ui.tree.TreeControl.prototype.getExpanded = function () {
    return !this.showRootNode_ || e.ui.tree.TreeControl.superClass_.getExpanded.call(this);
  };
  e.ui.tree.TreeControl.prototype.setExpanded = function (a) {
    this.showRootNode_ ? e.ui.tree.TreeControl.superClass_.setExpanded.call(this, a) : this.setExpandedInternal(a);
  };
  e.ui.tree.TreeControl.prototype.getExpandIconSafeHtml = function () {
    return e.html.SafeHtml.EMPTY;
  };
  e.ui.tree.TreeControl.prototype.getIconElement = function () {
    var a = this.getRowElement();
    return a ? a.firstChild : null;
  };
  e.ui.tree.TreeControl.prototype.getExpandIconElement = function () {
    return null;
  };
  e.ui.tree.TreeControl.prototype.updateExpandIcon = function () {};
  e.ui.tree.TreeControl.prototype.getRowClassName = function () {
    return e.ui.tree.TreeControl.superClass_.getRowClassName.call(this) + (this.showRootNode_ ? "" : " " + this.getConfig().cssHideRoot);
  };
  e.ui.tree.TreeControl.prototype.getCalculatedIconClass = function () {
    var a = this.getExpanded(),
      c = this.getExpandedIconClass();
    if (a && c) return c;
    c = this.getIconClass();
    if (!a && c) return c;
    c = this.getConfig();
    return a && c.cssExpandedRootIcon ? c.cssTreeIcon + " " + c.cssExpandedRootIcon : !a && c.cssCollapsedRootIcon ? c.cssTreeIcon + " " + c.cssCollapsedRootIcon : "";
  };
  e.ui.tree.TreeControl.prototype.setSelectedItem = function (a) {
    if (this.selectedItem_ != a) {
      var c = !1;
      this.selectedItem_ && (c = this.selectedItem_ == this.focusedNode_, this.selectedItem_.setSelectedInternal(!1));
      if (this.selectedItem_ = a) a.setSelectedInternal(!0), c && a.select();
      this.dispatchEvent(e.events.EventType.CHANGE);
    }
  };
  e.ui.tree.TreeControl.prototype.getSelectedItem = function () {
    return this.selectedItem_;
  };
  e.ui.tree.TreeControl.prototype.setShowLines = function (a) {
    this.showLines_ != a && (this.showLines_ = a, this.isInDocument() && this.updateLinesAndExpandIcons_());
  };
  e.ui.tree.TreeControl.prototype.getShowLines = function () {
    return this.showLines_;
  };
  e.ui.tree.TreeControl.prototype.updateLinesAndExpandIcons_ = function () {
    function a(g) {
      var h = g.getChildrenElement();
      if (h) {
        var k = !d || c == g.getParent() && !f ? g.getConfig().cssChildrenNoLines : g.getConfig().cssChildren;
        h.className = k;
        if (h = g.getExpandIconElement()) h.className = g.getExpandIconClass();
      }
      g.forEachChild(a);
    }
    var c = this,
      d = c.getShowLines(),
      f = c.getShowRootLines();
    a(this);
  };
  e.ui.tree.TreeControl.prototype.setShowRootLines = function (a) {
    this.showRootLines_ != a && (this.showRootLines_ = a, this.isInDocument() && this.updateLinesAndExpandIcons_());
  };
  e.ui.tree.TreeControl.prototype.getShowRootLines = function () {
    return this.showRootLines_;
  };
  e.ui.tree.TreeControl.prototype.setShowExpandIcons = function (a) {
    this.showExpandIcons_ != a && (this.showExpandIcons_ = a, this.isInDocument() && this.updateLinesAndExpandIcons_());
  };
  e.ui.tree.TreeControl.prototype.getShowExpandIcons = function () {
    return this.showExpandIcons_;
  };
  e.ui.tree.TreeControl.prototype.setShowRootNode = function (a) {
    if (this.showRootNode_ != a) {
      this.showRootNode_ = a;
      if (this.isInDocument()) {
        var c = this.getRowElement();
        c && (c.className = this.getRowClassName());
      }
      !a && this.getSelectedItem() == this && this.getFirstChild() && this.setSelectedItem(this.getFirstChild());
    }
  };
  e.ui.tree.TreeControl.prototype.getShowRootNode = function () {
    return this.showRootNode_;
  };
  e.ui.tree.TreeControl.prototype.initAccessibility = function () {
    e.ui.tree.TreeControl.superClass_.initAccessibility.call(this);
    var a = this.getElement();
    e.asserts.assert(a, "The DOM element for the tree cannot be null.");
    e.a11y.aria.setRole(a, "tree");
    e.a11y.aria.setState(a, "labelledby", this.getLabelElement().id);
  };
  e.ui.tree.TreeControl.prototype.enterDocument = function () {
    e.ui.tree.TreeControl.superClass_.enterDocument.call(this);
    var a = this.getElement();
    a.className = this.getConfig().cssRoot;
    a.setAttribute("hideFocus", "true");
    this.attachEvents_();
    this.initAccessibility();
  };
  e.ui.tree.TreeControl.prototype.exitDocument = function () {
    e.ui.tree.TreeControl.superClass_.exitDocument.call(this);
    this.detachEvents_();
  };
  e.ui.tree.TreeControl.prototype.attachEvents_ = function () {
    var a = this.getElement();
    a.tabIndex = 0;
    var c = this.keyHandler_ = new e.events.KeyHandler(a),
      d = this.focusHandler_ = new e.events.FocusHandler(a);
    this.getHandler().listen(d, e.events.FocusHandler.EventType.FOCUSOUT, this.handleBlur_).listen(d, e.events.FocusHandler.EventType.FOCUSIN, this.handleFocus_).listen(c, e.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(a, e.events.EventType.MOUSEDOWN, this.handleMouseEvent_).listen(a, e.events.EventType.CLICK, this.handleMouseEvent_).listen(a, e.events.EventType.DBLCLICK, this.handleMouseEvent_);
  };
  e.ui.tree.TreeControl.prototype.detachEvents_ = function () {
    this.keyHandler_.dispose();
    this.keyHandler_ = null;
    this.focusHandler_.dispose();
    this.focusHandler_ = null;
  };
  e.ui.tree.TreeControl.prototype.handleMouseEvent_ = function (a) {
    e.log.fine(this.logger_, "Received event " + a.type);
    var c = this.getNodeFromEvent_(a);
    if (c) switch (a.type) {
      case e.events.EventType.MOUSEDOWN:
        c.onMouseDown(a);
        break;
      case e.events.EventType.CLICK:
        c.onClick_(a);
        break;
      case e.events.EventType.DBLCLICK:
        c.onDoubleClick_(a);
    }
  };
  e.ui.tree.TreeControl.prototype.handleKeyEvent = function (a) {
    var c;
    (c = this.typeAhead_.handleNavigation(a) || this.selectedItem_ && this.selectedItem_.onKeyDown(a) || this.typeAhead_.handleTypeAheadChar(a)) && a.preventDefault();
    return c;
  };
  e.ui.tree.TreeControl.prototype.getNodeFromEvent_ = function (a) {
    for (var c = a.target; null != c;) {
      if (a = e.ui.tree.BaseNode.allNodes[c.id]) return a;
      if (c == this.getElement()) break;
      c = c.parentNode;
    }
    return null;
  };
  e.ui.tree.TreeControl.prototype.createNode = function (a) {
    return new e.ui.tree.TreeNode(a || e.html.SafeHtml.EMPTY, this.getConfig(), this.getDomHelper());
  };
  e.ui.tree.TreeControl.prototype.setNode = function (a) {
    this.typeAhead_.setNodeInMap(a);
  };
  e.ui.tree.TreeControl.prototype.removeNode = function (a) {
    this.typeAhead_.removeNodeFromMap(a);
  };
  e.ui.tree.TreeControl.prototype.clearTypeAhead = function () {
    this.typeAhead_.clear();
  };
  e.ui.tree.TreeControl.defaultConfig = e.ui.tree.BaseNode.defaultConfig;
  A.Toolbox = {};
  A.Toolbox.width = 0;
  A.Toolbox.selectedOption_ = null;
  A.Toolbox.CONFIG_ = {
    indentWidth: 19,
    cssRoot: "blocklyTreeRoot",
    cssHideRoot: "blocklyHidden",
    cssItem: "",
    cssTreeRow: "blocklyTreeRow",
    cssItemLabel: "blocklyTreeLabel",
    cssTreeIcon: "blocklyTreeIcon",
    cssExpandedFolderIcon: "blocklyTreeIconOpen",
    cssFileIcon: "blocklyTreeIconNone",
    cssSelectedRow: "blocklyTreeSelected"
  };
  A.Toolbox.createDom = function (a, c) {
    A.Toolbox.HtmlDiv = e.dom.createDom("div", "blocklyToolboxDiv");
    A.Toolbox.HtmlDiv.setAttribute("dir", A.RTL ? "RTL" : "LTR");
    c.appendChild(A.Toolbox.HtmlDiv);
    A.Toolbox.flyout_ = new A.Flyout();
    a.appendChild(A.Toolbox.flyout_.createDom());
    A.bindEvent_(A.Toolbox.HtmlDiv, "mousedown", null, function (a) {
      A.isRightButton(a) || a.target == A.Toolbox.HtmlDiv ? A.hideChaff(!1) : A.hideChaff(!0);
    });
  };
  A.Toolbox.init = function () {
    A.Toolbox.CONFIG_.cleardotPath = A.pathToBlockly + "media/1x1.gif";
    A.Toolbox.CONFIG_.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (A.RTL ? "Rtl" : "Ltr");
    var a = new A.Toolbox.TreeControl(e.html.SafeHtml.EMPTY, A.Toolbox.CONFIG_);
    A.Toolbox.tree_ = a;
    a.setShowRootNode(!1);
    a.setShowLines(!1);
    a.setShowExpandIcons(!1);
    a.setSelectedItem(null);
    A.Toolbox.HtmlDiv.style.display = "block";
    A.Toolbox.flyout_.init(A.mainWorkspace);
    A.Toolbox.populate_();
    a.render(A.Toolbox.HtmlDiv);
    e.events.listen(window, e.events.EventType.RESIZE, A.Toolbox.position_);
    A.Toolbox.position_();
  };
  A.Toolbox.position_ = function () {
    var a = A.Toolbox.HtmlDiv,
      c = e.style.getBorderBox(A.svg),
      d = A.svgSize();
    A.RTL ? (c = A.convertCoordinates(0, 0, !1), a.style.left = c.x + d.width - a.offsetWidth + "px") : a.style.marginLeft = c.left;
    a.style.height = d.height + 1 + "px";
    A.Toolbox.width = a.offsetWidth;
    A.RTL || --A.Toolbox.width;
  };
  A.Toolbox.populate_ = function () {
    function a(d, f) {
      for (var g = 0, h; h = d.childNodes[g]; g++) if (h.tagName) {
        var k = h.tagName.toUpperCase();
        if ("CATEGORY" == k) {
          k = c.createNode(h.getAttribute("name"));
          k.blocks = [];
          f.add(k);
          var m = h.getAttribute("custom");
          m ? k.blocks = m : a(h, k);
        } else "BLOCK" == k && f.blocks.push(h);
      }
    }
    var c = A.Toolbox.tree_;
    c.removeChildren();
    c.blocks = [];
    a(A.languageTree, A.Toolbox.tree_);
    if (c.blocks.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    A.fireUiEvent(window, "resize");
  };
  A.Toolbox.clearSelection = function () {
    A.Toolbox.tree_.setSelectedItem(null);
  };
  A.Toolbox.TreeControl = function (a, c, d) {
    e.ui.tree.TreeControl.call(this, a, c, d);
  };
  e.inherits(A.Toolbox.TreeControl, e.ui.tree.TreeControl);
  A.Toolbox.TreeControl.prototype.enterDocument = function () {
    A.Toolbox.TreeControl.superClass_.enterDocument.call(this);
    if (e.events.BrowserFeature.TOUCH_ENABLED) {
      var a = this.getElement();
      A.bindEvent_(a, e.events.EventType.TOUCHSTART, this, this.handleTouchEvent_);
    }
  };
  A.Toolbox.TreeControl.prototype.handleTouchEvent_ = function (a) {
    a.preventDefault();
    var c = this.getNodeFromEvent_(a);
    c && a.type === e.events.EventType.TOUCHSTART && window.setTimeout(function () {
      c.onMouseDown(a);
    }, 1);
  };
  A.Toolbox.TreeControl.prototype.createNode = function (a) {
    return new A.Toolbox.TreeNode(a ? e.html.SafeHtml.htmlEscape(a) : e.html.SafeHtml.EMPTY, this.getConfig(), this.getDomHelper());
  };
  A.Toolbox.TreeControl.prototype.setSelectedItem = function (a) {
    this.selectedItem_ != a && (e.ui.tree.TreeControl.prototype.setSelectedItem.call(this, a), a && a.blocks && a.blocks.length ? A.Toolbox.flyout_.show(a.blocks) : A.Toolbox.flyout_.hide());
  };
  A.Toolbox.TreeNode = function (a, c, d) {
    function f() {
      A.fireUiEvent(window, "resize");
    }
    e.ui.tree.TreeNode.call(this, a, c, d);
    e.events.listen(A.Toolbox.tree_, e.ui.tree.BaseNode.EventType.EXPAND, f);
    e.events.listen(A.Toolbox.tree_, e.ui.tree.BaseNode.EventType.COLLAPSE, f);
  };
  e.inherits(A.Toolbox.TreeNode, e.ui.tree.TreeNode);
  e.ui.tree.BaseNode.prototype.getExpandIconSafeHtml = function () {
    return e.html.SafeHtml.create("span");
  };
  A.Toolbox.TreeNode.prototype.onMouseDown = function () {
    this.hasChildren() && this.isUserCollapsible_ ? (this.toggle(), this.select()) : this.isSelected() ? this.getTree().setSelectedItem(null) : this.select();
    this.updateRow();
  };
  A.Toolbox.TreeNode.prototype.onDoubleClick_ = function () {};
  A.Variables = {};
  A.Variables.NAME_TYPE = "VARIABLE";
  A.Variables.allVariables = function (a) {
    var c = a ? a.getDescendants() : A.mainWorkspace.getAllBlocks();
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
      var f = c[d].getVars;
      if (f) {
        f = f.call(c[d]);
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          h && (a[h.toLowerCase()] = h);
        }
      }
    }
    c = [];
    for (var k in a) c.push(a[k]);
    return c;
  };
  A.Variables.renameVariable = function (a, c) {
    for (var d = A.mainWorkspace.getAllBlocks(), f = 0; f < d.length; f++) {
      var g = d[f].renameVar;
      g && g.call(d[f], a, c);
    }
  };
  A.Variables.flyoutCategory = function (a, c, d, f) {
    var g = A.Variables.allVariables();
    g.sort(e.string.caseInsensitiveCompare);
    g.unshift(null);
    for (var h = void 0, k = 0; k < g.length; k++) if (g[k] !== h) {
      var m = A.Blocks.variables_get ? A.Block.obtain(f, "variables_get") : null;
      m && m.initSvg();
      var n = A.Blocks.variables_set ? A.Block.obtain(f, "variables_set") : null;
      n && n.initSvg();
      null === g[k] ? h = (m || n).getVars()[0] : (m && m.setFieldValue(g[k], "VAR"), n && n.setFieldValue(g[k], "VAR"));
      n && a.push(n);
      m && a.push(m);
      m && n ? c.push(d, 3 * d) : c.push(2 * d);
    }
  };
  A.Variables.generateUniqueName = function () {
    var a = A.Variables.allVariables(),
      c = "";
    if (a.length) {
      a.sort(e.string.caseInsensitiveCompare);
      for (var d = 0, f = "i", g, h; !c;) {
        g = 0;
        for (h = !1; g < a.length && !h;) a[g].toLowerCase() == f && (h = !0), g++;
        h ? ("z" === f[0] ? (d++, f = "a") : (f = String.fromCharCode(f.charCodeAt(0) + 1), "l" == f[0] && (f = String.fromCharCode(f.charCodeAt(0) + 1))), 0 < d && (f += d)) : c = f;
      }
    } else c = "i";
    return c;
  };
  A.FieldVariable = function (a, c) {
    if (c) {
      var d = this;
      var f = function (a) {
        var f = A.FieldVariable.dropdownChange.call(d, a);
        a = void 0 === f ? a : null === f ? d.getValue() : f;
        c.call(d, a);
        return f;
      };
    } else f = A.FieldVariable.dropdownChange;
    A.FieldVariable.superClass_.constructor.call(this, A.FieldVariable.dropdownCreate, f);
    a ? this.setValue(a) : this.setValue(A.Variables.generateUniqueName());
  };
  e.inherits(A.FieldVariable, A.FieldDropdown);
  A.FieldVariable.prototype.clone = function () {
    return new A.FieldVariable(this.getValue(), this.changeHandler_);
  };
  A.FieldVariable.prototype.getValue = function () {
    return this.getText();
  };
  A.FieldVariable.prototype.setValue = function (a) {
    this.value_ = a;
    this.setText(a);
  };
  A.FieldVariable.dropdownCreate = function () {
    var a = A.Variables.allVariables(),
      c = this.getText();
    c && -1 == a.indexOf(c) && a.push(c);
    a.sort(e.string.caseInsensitiveCompare);
    a.push(A.Msg.RENAME_VARIABLE);
    a.push(A.Msg.NEW_VARIABLE);
    c = [];
    for (var d = 0; d < a.length; d++) c[d] = [a[d], a[d]];
    return c;
  };
  A.FieldVariable.dropdownChange = function (a) {
    function c(a, c) {
      A.hideChaff();
      return (a = window.prompt(a, c)) && a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    }
    if (a == A.Msg.RENAME_VARIABLE) {
      var d = this.getText();
      (a = c(A.Msg.RENAME_VARIABLE_TITLE.replace("%1", d), d)) && A.Variables.renameVariable(d, a);
      return null;
    }
    if (a == A.Msg.NEW_VARIABLE) return (a = c(A.Msg.NEW_VARIABLE_TITLE, "")) ? (A.Variables.renameVariable(a, a), a) : null;
  };
  A.Generator = function (a) {
    this.name_ = a;
    this.RESERVED_WORDS_ = "";
    this.FUNCTION_NAME_PLACEHOLDER_REGEXP_ = new RegExp(this.FUNCTION_NAME_PLACEHOLDER_, "g");
  };
  A.Generator.NAME_TYPE = "generated_function";
  A.Generator.prototype.INFINITE_LOOP_TRAP = null;
  A.Generator.prototype.STATEMENT_PREFIX = null;
  A.Generator.prototype.workspaceToCode = function () {
    var a = [];
    this.init();
    for (var c = A.mainWorkspace.getTopBlocks(!0), d = 0, f; f = c[d]; d++) {
      var g = this.blockToCode(f);
      A.goog.isArray(g) && (g = g[0]);
      g && (f.outputConnection && this.scrubNakedValue && (g = this.scrubNakedValue(g)), a.push(g));
    }
    a = a.join("\n");
    a = this.finish(a);
    a = a.replace(/^\s+\n/, "");
    a = a.replace(/\n\s+$/, "\n");
    return a = a.replace(/[ \t]+\n/g, "\n");
  };
  A.Generator.prototype.prefixLines = function (a, c) {
    return c + a.replace(/\n(.)/g, "\n" + c + "$1");
  };
  A.Generator.prototype.allNestedComments = function (a) {
    var c = [];
    a = a.getDescendants();
    for (var d = 0; d < a.length; d++) {
      var f = a[d].getCommentText();
      f && c.push(f);
    }
    c.length && c.push("");
    return c.join("\n");
  };
  A.Generator.prototype.blockToCode = function (a) {
    if (!a) return "";
    if (a.disabled) return this.blockToCode(a.getNextBlock());
    var c = this[a.type];
    if (!c) throw 'Language "' + this.name_ + '" does not know how to generate code for block type "' + a.type + '".';
    c = c.call(a, a);
    if (A.goog.isArray(c)) return [this.scrub_(a, c[0]), c[1]];
    if (A.goog.isString(c)) return this.STATEMENT_PREFIX && (c = this.STATEMENT_PREFIX.replace(/%1/g, "'" + a.id + "'") + c), this.scrub_(a, c);
    if (null === c) return "";
    throw "Invalid code generated: " + c;
  };
  A.Generator.prototype.valueToCode = function (a, c, d) {
    if (isNaN(d)) throw 'Expecting valid order from block "' + a.type + '".';
    a = a.getInputTargetBlock(c);
    if (!a) return "";
    var f = this.blockToCode(a);
    if ("" === f) return "";
    if (!A.goog.isArray(f)) throw 'Expecting tuple from value block "' + a.type + '".';
    c = f[0];
    f = f[1];
    if (isNaN(f)) throw 'Expecting valid order from value block "' + a.type + '".';
    c && d <= f && d != f && 0 != d && 99 != d && (c = "(" + c + ")");
    return c;
  };
  A.Generator.prototype.statementToCode = function (a, c) {
    a = a.getInputTargetBlock(c);
    c = this.blockToCode(a);
    if (!A.goog.isString(c)) throw 'Expecting code from statement block "' + a.type + '".';
    c && (c = this.prefixLines(c, this.INDENT));
    return c;
  };
  A.Generator.prototype.addLoopTrap = function (a, c) {
    this.INFINITE_LOOP_TRAP && (a = this.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + c + "'") + a);
    this.STATEMENT_PREFIX && (a += this.prefixLines(this.STATEMENT_PREFIX.replace(/%1/g, "'" + c + "'"), this.INDENT));
    return a;
  };
  A.Generator.prototype.INDENT = "  ";
  A.Generator.prototype.addReservedWords = function (a) {
    this.RESERVED_WORDS_ += a + ",";
  };
  A.Generator.prototype.FUNCTION_NAME_PLACEHOLDER_ = "{leCUI8hutHZI4480Dc}";
  A.Generator.prototype.provideFunction_ = function (a, c) {
    if (!this.definitions_[a]) {
      var d = this.variableDB_.getDistinctName(a, this.NAME_TYPE);
      this.functionNames_[a] = d;
      this.definitions_[a] = c.join("\n").replace(this.FUNCTION_NAME_PLACEHOLDER_REGEXP_, d);
    }
    return this.functionNames_[a];
  };
  A.Names = function (a) {
    this.reservedDict_ = Object.create(null);
    if (a) {
      a = a.split(",");
      for (var c = 0; c < a.length; c++) this.reservedDict_[a[c]] = !0;
    }
    this.reset();
  };
  A.Names.prototype.reset = function () {
    this.db_ = Object.create(null);
    this.dbReverse_ = Object.create(null);
  };
  A.Names.prototype.getName = function (a, c) {
    var d = a.toLowerCase() + "_" + c;
    if (d in this.db_) return this.db_[d];
    a = this.getDistinctName(a, c);
    return this.db_[d] = a;
  };
  A.Names.prototype.getDistinctName = function (a) {
    a = this.safeName_(a);
    for (var c = ""; this.dbReverse_[a + c] || a + c in this.reservedDict_;) c = c ? c + 1 : 2;
    a += c;
    this.dbReverse_[a] = !0;
    return a;
  };
  A.Names.prototype.safeName_ = function (a) {
    a ? (a = encodeURI(a.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(a[0]) && (a = "my_" + a)) : a = "unnamed";
    return a;
  };
  A.Names.equals = function (a, c) {
    return a.toLowerCase() == c.toLowerCase();
  };
  A.Procedures = {};
  A.Procedures.NAME_TYPE = "PROCEDURE";
  A.Procedures.allProcedures = function () {
    for (var a = A.mainWorkspace.getAllBlocks(), c = [], d = [], f = 0; f < a.length; f++) {
      var g = a[f].getProcedureDef;
      g && (g = g.call(a[f])) && (g[2] ? c.push(g) : d.push(g));
    }
    d.sort(A.Procedures.procTupleComparator_);
    c.sort(A.Procedures.procTupleComparator_);
    return [d, c];
  };
  A.Procedures.procTupleComparator_ = function (a, c) {
    a = a[0].toLowerCase();
    c = c[0].toLowerCase();
    return a > c ? 1 : a < c ? -1 : 0;
  };
  A.Procedures.findLegalName = function (a, c) {
    if (c.isInFlyout) return a;
    for (; !A.Procedures.isLegalName(a, c.workspace, c);) {
      var d = a.match(/^(.*?)(\d+)$/);
      a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
    }
    return a;
  };
  A.Procedures.isLegalName = function (a, c, d) {
    c = c.getAllBlocks();
    for (var f = 0; f < c.length; f++) if (c[f] != d) {
      var g = c[f].getProcedureDef;
      if (g && (g = g.call(c[f]), A.Names.equals(g[0], a))) return !1;
    }
    return !0;
  };
  A.Procedures.rename = function (a) {
    a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    a = A.Procedures.findLegalName(a, this.sourceBlock_);
    for (var c = this.sourceBlock_.workspace.getAllBlocks(), d = 0; d < c.length; d++) {
      var f = c[d].renameProcedure;
      f && f.call(c[d], this.text_, a);
    }
    return a;
  };
  A.Procedures.flyoutCategory = function (a, c, d, f) {
    function g(g, h) {
      for (var k = 0; k < g.length; k++) {
        var m = A.Block.obtain(f, h);
        m.setFieldValue(g[k][0], "NAME");
        for (var r = [], q = 0; q < g[k][1].length; q++) r[q] = "ARG" + q;
        m.setProcedureParameters(g[k][1], r);
        m.initSvg();
        a.push(m);
        c.push(2 * d);
      }
    }
    if (A.Blocks.procedures_defnoreturn) {
      var h = A.Block.obtain(f, "procedures_defnoreturn");
      h.initSvg();
      a.push(h);
      c.push(2 * d);
    }
    A.Blocks.procedures_defreturn && (h = A.Block.obtain(f, "procedures_defreturn"), h.initSvg(), a.push(h), c.push(2 * d));
    A.Blocks.procedures_ifreturn && (h = A.Block.obtain(f, "procedures_ifreturn"), h.initSvg(), a.push(h), c.push(2 * d));
    c.length && (c[c.length - 1] = 3 * d);
    h = A.Procedures.allProcedures();
    g(h[0], "procedures_callnoreturn");
    g(h[1], "procedures_callreturn");
  };
  A.Procedures.getCallers = function (a, c) {
    var d = [];
    c = c.getAllBlocks();
    for (var f = 0; f < c.length; f++) {
      var g = c[f].getProcedureCall;
      g && (g = g.call(c[f])) && A.Names.equals(g, a) && d.push(c[f]);
    }
    return d;
  };
  A.Procedures.disposeCallers = function (a, c) {
    a = A.Procedures.getCallers(a, c);
    for (c = 0; c < a.length; c++) a[c].dispose(!0, !1);
  };
  A.Procedures.mutateCallers = function (a, c, d, f) {
    a = A.Procedures.getCallers(a, c);
    for (c = 0; c < a.length; c++) a[c].setProcedureParameters(d, f);
  };
  A.Procedures.getDefinition = function (a, c) {
    c = c.getAllBlocks();
    for (var d = 0; d < c.length; d++) {
      var f = c[d].getProcedureDef;
      if (f && (f = f.call(c[d])) && A.Names.equals(f[0], a)) return c[d];
    }
    return null;
  };
  var B = {
    INSTALL_SCOPE: "https://www.googleapis.com/auth/drive.install",
    FILE_SCOPE: "https://www.googleapis.com/auth/drive.file",
    APPDATA_SCOPE: "https://www.googleapis.com/auth/drive.appdata",
    OPENID_SCOPE: "openid",
    REALTIME_MIMETYPE: "application/vnd.google-apps.drive-sdk",
    FOLDER_KEY: "folderId",
    getParams: function () {
      function a(a) {
        a = a.slice(1).split("&");
        for (var d = 0; d < a.length; d++) {
          var f = a[d].split("=");
          c[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
        }
      }
      var c = {},
        d = window.location.hash;
      d && a(d);
      (d = window.location.search) && a(d);
      return c;
    }
  };
  B.params = B.getParams();
  B.getOption = function (a, c, d) {
    if (a.hasOwnProperty(c)) return a[c];
    void 0 === d && console.error(c + " should be present in the options.");
    return d;
  };
  B.Authorizer = function (a) {
    this.clientId = B.getOption(a, "clientId");
    this.userId = B.params.userId;
    this.authButton = document.getElementById(B.getOption(a, "authButtonElementId"));
    this.authDiv = document.getElementById(B.getOption(a, "authDivElementId"));
  };
  B.Authorizer.prototype.start = function (a) {
    var c = this;
    gapi.load("auth:client,drive-realtime,drive-share", function () {
      c.authorize(a);
    });
  };
  B.Authorizer.prototype.authorize = function (a) {
    function c() {
      gapi.auth.authorize({
        client_id: f,
        scope: [B.INSTALL_SCOPE, B.FILE_SCOPE, B.OPENID_SCOPE, B.APPDATA_SCOPE],
        user_id: g,
        immediate: !1
      }, d);
    }
    function d(d) {
      d && !d.error ? (h.authButton.disabled = !0, h.fetchUserId(a), h.authDiv.style.display = "none") : (h.authButton.disabled = !1, h.authButton.onclick = c, h.authDiv.style.display = "block");
    }
    var f = this.clientId,
      g = this.userId,
      h = this;
    gapi.auth.authorize({
      client_id: f,
      scope: [B.INSTALL_SCOPE, B.FILE_SCOPE, B.OPENID_SCOPE, B.APPDATA_SCOPE],
      user_id: g,
      immediate: !0
    }, d);
  };
  B.Authorizer.prototype.fetchUserId = function (a) {
    var c = this;
    gapi.client.load("oauth2", "v2", function () {
      gapi.client.oauth2.userinfo.get().execute(function (d) {
        d.id && (c.userId = d.id);
        a && a();
      });
    });
  };
  B.createRealtimeFile = function (a, c, d, f) {
    function g(d) {
      gapi.client.drive.files.insert({
        resource: {
          mimeType: c,
          title: a,
          parents: [{
            id: d
          }]
        }
      }).execute(f);
    }
    function h() {
      function a(a) {
        gapi.client.drive.properties.insert({
          fileId: "appdata",
          resource: {
            key: B.FOLDER_KEY,
            value: a
          }
        }).execute(function () {
          g(a);
        });
      }
      function c() {
        gapi.client.drive.files.insert({
          resource: {
            mimeType: "application/vnd.google-apps.folder",
            title: d
          }
        }).execute(function (c) {
          a(c.id);
        });
      }
      gapi.client.drive.properties.get({
        fileId: "appdata",
        propertyKey: B.FOLDER_KEY
      }).execute(function (f) {
        if (f.error) d ? c() : a("root");else {
          var h = f.result.value;
          gapi.client.drive.files.get({
            fileId: h
          }).execute(function (a) {
            a.error || a.labels.trashed ? c() : g(h);
          });
        }
      });
    }
    gapi.client.load("drive", "v2", function () {
      h();
    });
  };
  B.getFileMetadata = function (a, c) {
    gapi.client.load("drive", "v2", function () {
      gapi.client.drive.files.get({
        fileId: a
      }).execute(c);
    });
  };
  B.parseState = function (a) {
    try {
      return JSON.parse(a);
    } catch (c) {
      return null;
    }
  };
  B.RealtimeLoader = function (a) {
    this.onFileLoaded = B.getOption(a, "onFileLoaded");
    this.newFileMimeType = B.getOption(a, "newFileMimeType", B.REALTIME_MIMETYPE);
    this.initializeModel = B.getOption(a, "initializeModel");
    this.registerTypes = B.getOption(a, "registerTypes", function () {});
    this.afterAuth = B.getOption(a, "afterAuth", function () {});
    this.autoCreate = B.getOption(a, "autoCreate", !1);
    this.defaultTitle = B.getOption(a, "defaultTitle", "New Realtime File");
    this.defaultFolderTitle = B.getOption(a, "defaultFolderTitle", "");
    this.afterCreate = B.getOption(a, "afterCreate", function () {});
    this.authorizer = new B.Authorizer(a);
  };
  B.RealtimeLoader.prototype.redirectTo = function (a, c) {
    var d = [];
    a && d.push("fileIds=" + a.join(","));
    c && d.push("userId=" + c);
    c = 0 == d.length ? window.location.pathname : window.location.pathname + "#" + d.join("&");
    window.history && window.history.replaceState ? window.history.replaceState("Google Drive Realtime API Playground", "Google Drive Realtime API Playground", c) : window.location.href = c;
    B.params = B.getParams();
    for (var f in a) gapi.drive.realtime.load(a[f], this.onFileLoaded, this.initializeModel, this.handleErrors);
  };
  B.RealtimeLoader.prototype.start = function () {
    var a = this;
    this.authorizer.start(function () {
      a.registerTypes && a.registerTypes();
      a.afterAuth && a.afterAuth();
      a.load();
    });
  };
  B.RealtimeLoader.prototype.handleErrors = function (a) {
    a.type == gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED ? this.authorizer.authorize() : a.type == gapi.drive.realtime.ErrorType.CLIENT_ERROR ? (alert("An Error happened: " + a.message), window.location.href = "/") : a.type == gapi.drive.realtime.ErrorType.NOT_FOUND && (alert("The file was not found. It does not exist or you do not have read access to the file."), window.location.href = "/");
  };
  B.RealtimeLoader.prototype.load = function () {
    var a = B.params.fileIds;
    a && (a = a.split(","));
    var c = B.params.state;
    if (a) for (var d in a) gapi.drive.realtime.load(a[d], this.onFileLoaded, this.initializeModel, this.handleErrors);else {
      if (c && (c = B.parseState(c), "open" == c.action)) {
        a = c.ids;
        c = c.userId;
        this.redirectTo(a, c);
        return;
      }
      this.autoCreate && this.createNewFileAndRedirect();
    }
  };
  B.RealtimeLoader.prototype.createNewFileAndRedirect = function () {
    var a = this;
    B.createRealtimeFile(this.defaultTitle, this.newFileMimeType, this.defaultFolderTitle, function (c) {
      c.id ? (a.afterCreate && a.afterCreate(c.id), a.redirectTo([c.id], a.authorizer.userId)) : (console.error("Error creating file."), console.error(c));
    });
  };
  A.Realtime = {};
  A.Realtime.PROGRESS_URL_ = "media/progress.gif";
  A.Realtime.enabled_ = !1;
  A.Realtime.document_ = null;
  A.Realtime.model_ = null;
  A.Realtime.sessionId_ = null;
  A.Realtime.initUi_ = null;
  A.Realtime.blocksMap_ = null;
  A.Realtime.withinSync = !1;
  A.Realtime.realtimeLoader_ = null;
  A.Realtime.chatBoxElementId_ = null;
  A.Realtime.chatBoxInitialText_ = null;
  A.Realtime.withinUndo_ = !1;
  A.Realtime.isEnabled = function () {
    return A.Realtime.enabled_;
  };
  A.Realtime.undoElementId_ = null;
  A.Realtime.redoElementId_ = null;
  A.Realtime.PROGRESS_URL_ = "media/progress.gif";
  A.Realtime.ANONYMOUS_URL_ = "media/anon.jpeg";
  A.Realtime.initializeModel_ = function (a) {
    A.Realtime.model_ = a;
    var c = a.createMap();
    a.getRoot().set("blocks", c);
    c = a.createList();
    a.getRoot().set("topBlocks", c);
    A.Realtime.chatBoxElementId_ && a.getRoot().set(A.Realtime.chatBoxElementId_, a.createString(A.Realtime.chatBoxInitialText_));
  };
  A.Realtime.removeBlock = function (a) {
    A.Realtime.blocksMap_["delete"](a.id.toString());
  };
  A.Realtime.addTopBlock = function (a) {
    -1 == A.Realtime.topBlocks_.indexOf(a) && A.Realtime.topBlocks_.push(a);
  };
  A.Realtime.removeTopBlock = function (a) {
    A.Realtime.topBlocks_.removeValue(a);
  };
  A.Realtime.obtainBlock = function (a, c) {
    return A.Realtime.model_.create(A.Block, a, c);
  };
  A.Realtime.getBlockById = function (a) {
    return A.Realtime.blocksMap_.get(a);
  };
  A.Realtime.logEvent_ = function (a) {
    console.log("Object event:");
    console.log("  id: " + a.target.id);
    console.log("  type: " + a.type);
    if (a = a.events) for (var c = a.length, d = 0; d < c; d++) {
      var f = a[d];
      console.log("  child event:");
      console.log("    id: " + f.target.id);
      console.log("    type: " + f.type);
    }
  };
  A.Realtime.onObjectChange_ = function (a) {
    var c = a.events;
    a = a.events.length;
    for (var d = 0; d < a; d++) {
      var f = c[d];
      if (!f.isLocal || A.Realtime.withinUndo_) {
        var g = f.target;
        "value_changed" == f.type && ("xmlDom" == f.property ? A.Realtime.doWithinSync_(function () {
          A.Realtime.placeBlockOnWorkspace_(g, !1);
          A.Realtime.moveBlock_(g);
        }) : ("relativeX" == f.property || "relativeY" == f.property) && A.Realtime.doWithinSync_(function () {
          g.svg_ || A.Realtime.placeBlockOnWorkspace_(g, !1);
          A.Realtime.moveBlock_(g);
        }));
      }
    }
  };
  A.Realtime.onBlocksMapChange_ = function (a) {
    if (!a.isLocal || A.Realtime.withinUndo_) {
      var c = a.newValue;
      c ? A.Realtime.placeBlockOnWorkspace_(c, !a.oldValue) : (c = a.oldValue, A.Realtime.deleteBlock(c));
    }
  };
  A.Realtime.doWithinSync_ = function (a) {
    if (A.Realtime.withinSync) a();else try {
      A.Realtime.withinSync = !0, a();
    } finally {
      A.Realtime.withinSync = !1;
    }
  };
  A.Realtime.placeBlockOnWorkspace_ = function (a, c) {
    A.Realtime.doWithinSync_(function () {
      var d = A.Xml.textToDom(a.xmlDom).firstChild;
      if (d = A.Xml.domToBlock(A.mainWorkspace, d, !0)) c && d.workspace.addTopBlock(d), (c || e.array.contains(A.Realtime.topBlocks_, d)) && A.Realtime.moveBlock_(d);
    });
  };
  A.Realtime.moveBlock_ = function (a) {
    if (!isNaN(a.relativeX) && !isNaN(a.relativeY)) {
      var c = A.svgSize().width,
        d = a.getRelativeToSurfaceXY(),
        f = a.relativeX - d.x;
      a.moveBy(A.RTL ? c - f : f, a.relativeY - d.y);
    }
  };
  A.Realtime.deleteBlock = function (a) {
    A.Realtime.doWithinSync_(function () {
      a.dispose(!0, !0, !0);
    });
  };
  A.Realtime.loadBlocks_ = function () {
    for (var a = A.Realtime.topBlocks_, c = 0; c < a.length; c++) {
      var d = a.get(c);
      A.Realtime.placeBlockOnWorkspace_(d, !0);
    }
  };
  A.Realtime.blockChanged = function (a) {
    if (a.workspace == A.mainWorkspace && A.Realtime.isEnabled() && !A.Realtime.withinSync) {
      a = a.getRootBlock();
      var c = a.getRelativeToSurfaceXY(),
        d = !1,
        f = A.Xml.blockToDom_(a);
      f.setAttribute("id", a.id);
      var g = e.dom.createDom("xml");
      g.appendChild(f);
      f = A.Xml.domToText(g);
      f != a.xmlDom && (d = !0, a.xmlDom = f);
      if (a.relativeX != c.x || a.relativeY != c.y) a.relativeX = c.x, a.relativeY = c.y, d = !0;
      d && A.Realtime.blocksMap_.set(a.id.toString(), a);
    }
  };
  A.Realtime.onFileLoaded_ = function (a) {
    A.Realtime.document_ = a;
    A.Realtime.sessionId_ = A.Realtime.getSessionId_(a);
    A.Realtime.model_ = a.getModel();
    A.Realtime.blocksMap_ = A.Realtime.model_.getRoot().get("blocks");
    A.Realtime.topBlocks_ = A.Realtime.model_.getRoot().get("topBlocks");
    A.Realtime.model_.getRoot().addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, A.Realtime.onObjectChange_);
    A.Realtime.blocksMap_.addEventListener(gapi.drive.realtime.EventType.VALUE_CHANGED, A.Realtime.onBlocksMapChange_);
    A.Realtime.initUi_();
    a.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_JOINED, A.Realtime.onCollaboratorJoined_);
    a.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_LEFT, A.Realtime.onCollaboratorLeft_);
    A.Realtime.updateCollabUi_();
    A.Realtime.loadBlocks_();
  };
  A.Realtime.getSessionId_ = function (a) {
    a = a.getCollaborators();
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      if (d.isMe) return d.sessionId;
    }
  };
  A.Realtime.registerTypes_ = function () {
    var a = gapi.drive.realtime.custom;
    a.registerType(A.Block, "Block");
    A.Block.prototype.id = a.collaborativeField("id");
    A.Block.prototype.xmlDom = a.collaborativeField("xmlDom");
    A.Block.prototype.relativeX = a.collaborativeField("relativeX");
    A.Block.prototype.relativeY = a.collaborativeField("relativeY");
    a.setInitializer(A.Block, A.Block.prototype.initialize);
  };
  A.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_ = 18E5;
  A.Realtime.afterAuth_ = function () {
    window.setTimeout(function () {
      A.Realtime.realtimeLoader_.authorizer.authorize(A.Realtime.afterAuth_);
    }, A.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_);
  };
  A.Realtime.afterCreate_ = function (a) {
    var c = gapi.client.drive.permissions.insert({
      fileId: a,
      resource: {
        type: "anyone",
        role: "writer",
        value: "default",
        withLink: !0
      }
    });
    c.execute(function (d) {
      d.error && A.Realtime.getUserDomain(a, function (d) {
        c = gapi.client.drive.permissions.insert({
          fileId: a,
          resource: {
            type: "domain",
            role: "writer",
            value: d,
            withLink: !0
          }
        });
        c.execute(function () {});
      });
    });
  };
  A.Realtime.getUserDomain = function (a, c) {
    gapi.client.drive.permissions.list({
      fileId: a
    }).execute(function (a) {
      for (var d = 0; d < a.items.length; d++) {
        var g = a.items[d];
        if ("owner" == g.role) {
          c(g.domain);
          break;
        }
      }
    });
  };
  A.Realtime.rtclientOptions_ = {
    clientId: null,
    authButtonElementId: "authorizeButton",
    authDivElementId: "authButtonDiv",
    initializeModel: A.Realtime.initializeModel_,
    autoCreate: !0,
    defaultTitle: "Realtime Blockly File",
    defaultFolderTitle: "Realtime Blockly Folder",
    newFileMimeType: null,
    onFileLoaded: A.Realtime.onFileLoaded_,
    registerTypes: A.Realtime.registerTypes_,
    afterAuth: A.Realtime.afterAuth_,
    afterCreate: A.Realtime.afterCreate_
  };
  A.Realtime.parseOptions_ = function (a) {
    var c = B.getOption(a, "chatbox");
    c && (A.Realtime.chatBoxElementId_ = B.getOption(c, "elementId"), A.Realtime.chatBoxInitialText_ = B.getOption(c, "initText", A.Msg.CHAT));
    A.Realtime.rtclientOptions_.clientId = B.getOption(a, "clientId");
    A.Realtime.collabElementId = B.getOption(a, "collabElementId");
  };
  A.Realtime.startRealtime = function (a, c, d) {
    A.Realtime.parseOptions_(d);
    A.Realtime.enabled_ = !0;
    A.Realtime.addAuthUi_(c);
    A.Realtime.initUi_ = function () {
      a();
      if (A.Realtime.chatBoxElementId_) {
        var c = A.Realtime.model_.getRoot().get(A.Realtime.chatBoxElementId_),
          d = document.getElementById(A.Realtime.chatBoxElementId_);
        gapi.drive.realtime.databinding.bindString(c, d);
        d.disabled = !1;
      }
    };
    A.Realtime.realtimeLoader_ = new B.RealtimeLoader(A.Realtime.rtclientOptions_);
    A.Realtime.realtimeLoader_.start();
  };
  A.Realtime.addAuthUi_ = function (a) {
    a.style.background = "url(" + A.pathToBlockly + A.Realtime.PROGRESS_URL_ + ") no-repeat center center";
    var c = e.style.getBounds(a),
      d = e.dom.createDom("div");
    d.id = A.Realtime.rtclientOptions_.authDivElementId;
    var f = e.dom.createDom("p", null, A.Msg.AUTH);
    d.appendChild(f);
    f = e.dom.createDom("button", null, "Authorize");
    f.id = A.Realtime.rtclientOptions_.authButtonElementId;
    d.appendChild(f);
    a.appendChild(d);
    d.style.display = "none";
    d.style.position = "relative";
    d.style.textAlign = "center";
    d.style.border = "1px solid";
    d.style.backgroundColor = "#f6f9ff";
    d.style.borderRadius = "15px";
    d.style.boxShadow = "10px 10px 5px #888";
    d.style.width = c.width / 3 + "px";
    a = e.style.getBounds(d);
    d.style.left = (c.width - a.width) / 3 + "px";
    d.style.top = (c.height - a.height) / 4 + "px";
    return d;
  };
  A.Realtime.updateCollabUi_ = function () {
    if (A.Realtime.collabElementId) {
      var a = e.dom.getElement(A.Realtime.collabElementId);
      e.dom.removeChildren(a);
      for (var c = A.Realtime.document_.getCollaborators(), d = 0; d < c.length; d++) {
        var f = c[d],
          g = e.dom.createDom("img", {
            src: f.photoUrl || A.pathToBlockly + A.Realtime.ANONYMOUS_URL_,
            alt: f.displayName,
            title: f.displayName + (f.isMe ? " (" + A.Msg.ME + ")" : "")
          });
        g.style.backgroundColor = f.color;
        e.dom.appendChild(a, g);
      }
    }
  };
  A.Realtime.onCollaboratorJoined_ = function () {
    A.Realtime.updateCollabUi_();
  };
  A.Realtime.onCollaboratorLeft_ = function () {
    A.Realtime.updateCollabUi_();
  };
  A.Realtime.doCommand = function (a) {
    a();
  };
  A.Realtime.genUid = function (a) {
    var c = A.Realtime.sessionId_ + "-" + a;
    return A.Realtime.blocksMap_.has(c) ? A.Realtime.genUid("-" + a) : c;
  };
  e.cssom = {};
  e.cssom.CssRuleType = {
    STYLE: 1,
    IMPORT: 3,
    MEDIA: 4,
    FONT_FACE: 5,
    PAGE: 6,
    NAMESPACE: 7
  };
  e.cssom.getAllCssText = function (a) {
    return e.cssom.getAllCss_(a || document.styleSheets, !0);
  };
  e.cssom.getAllCssStyleRules = function (a) {
    return e.cssom.getAllCss_(a || document.styleSheets, !1);
  };
  e.cssom.getCssRulesFromStyleSheet = function (a) {
    var c = null;
    try {
      c = a.cssRules || a.rules;
    } catch (d) {
      if (15 == d.code) throw d.styleSheet = a, d;
    }
    return c;
  };
  e.cssom.getAllCssStyleSheets = function (a, c) {
    var d = [];
    a = a || document.styleSheets;
    c = void 0 !== c ? c : !1;
    if (a.imports && a.imports.length) for (var f = 0, g = a.imports.length; f < g; f++) e.array.extend(d, e.cssom.getAllCssStyleSheets(a.imports[f]));else if (a.length) for (f = 0, g = a.length; f < g; f++) e.array.extend(d, e.cssom.getAllCssStyleSheets(a[f]));else {
      var h = e.cssom.getCssRulesFromStyleSheet(a);
      if (h && h.length) {
        f = 0;
        g = h.length;
        for (var k; f < g; f++) k = h[f], k.styleSheet && e.array.extend(d, e.cssom.getAllCssStyleSheets(k.styleSheet));
      }
    }
    !(a.type || a.rules || a.cssRules) || a.disabled && !c || d.push(a);
    return d;
  };
  e.cssom.getCssTextFromCssRule = function (a) {
    var c = "";
    try {
      c = a.cssText;
    } catch (d) {
      return "";
    }
    !c && a.style && a.style.cssText && a.selectorText && (c = a.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""), c = a.selectorText + " { " + c + " }");
    return c;
  };
  e.cssom.getCssRuleIndexInParentStyleSheet = function (a, c) {
    if (a.style && a.style["-closure-rule-index"]) return a.style["-closure-rule-index"];
    c = c || e.cssom.getParentStyleSheet(a);
    if (!c) throw Error("Cannot find a parentStyleSheet.");
    if ((c = e.cssom.getCssRulesFromStyleSheet(c)) && c.length) for (var d = 0, f = c.length, g; d < f; d++) if (g = c[d], g == a) return d;
    return -1;
  };
  e.cssom.getParentStyleSheet = function (a) {
    return a.parentStyleSheet || a.style && a.style["-closure-parent-stylesheet"];
  };
  e.cssom.replaceCssRule = function (a, c, d, f) {
    if (d = d || e.cssom.getParentStyleSheet(a)) {
      if (a = 0 <= Number(f) ? Number(f) : e.cssom.getCssRuleIndexInParentStyleSheet(a, d), 0 <= a) e.cssom.removeCssRule(d, a), e.cssom.addCssRule(d, c, a);else throw Error("Cannot proceed without the index of the cssRule.");
    } else throw Error("Cannot proceed without the parentStyleSheet.");
  };
  e.cssom.addCssRule = function (a, c, d) {
    if (void 0 == d || 0 > d) d = e.cssom.getCssRulesFromStyleSheet(a).length;
    if (a.insertRule) a.insertRule(c, d);else if (c = /^([^\{]+)\{([^\{]+)\}/.exec(c), 3 == c.length) a.addRule(c[1], c[2], d);else throw Error("Your CSSRule appears to be ill-formatted.");
  };
  e.cssom.removeCssRule = function (a, c) {
    a.deleteRule ? a.deleteRule(c) : a.removeRule(c);
  };
  e.cssom.addCssText = function (a, c) {
    var d = c || e.dom.getDomHelper(),
      f = d.getDocument();
    c = d.createElement("STYLE");
    c.type = "text/css";
    d.getElementsByTagName("HEAD")[0].appendChild(c);
    c.styleSheet ? c.styleSheet.cssText = a : (a = f.createTextNode(a), c.appendChild(a));
    return c;
  };
  e.cssom.getFileNameFromStyleSheet = function (a) {
    return (a = a.href) ? /([^\/\?]+)[^\/]*$/.exec(a)[1] : null;
  };
  e.cssom.getAllCss_ = function (a, c) {
    for (var d = [], f = e.cssom.getAllCssStyleSheets(a), g = 0; a = f[g]; g++) {
      var h = e.cssom.getCssRulesFromStyleSheet(a);
      if (h && h.length) for (var k = 0, m = 0, n = h.length, p; m < n; m++) p = h[m], c && !p.href ? (p = e.cssom.getCssTextFromCssRule(p), d.push(p)) : p.href || (p.style && (p.parentStyleSheet || (p.style["-closure-parent-stylesheet"] = a), p.style["-closure-rule-index"] = c ? void 0 : k), d.push(p)), c || k++;
    }
    return c ? d.join(" ") : d;
  };
  A.Css = {};
  A.Css.inject = function () {
    var a = A.Css.CONTENT.join("\n"),
      c = A.pathToBlockly.replace(/[\\\/]$/, "");
    a = a.replace(/<<<PATH>>>/g, c);
    e.cssom.addCssText(a);
  };
  A.Css.CONTENT = [".blocklySvg {", "  background-color: #fff;", "  border: 1px solid #ddd;", "  overflow: hidden;", "}", ".blocklyWidgetDiv {", "  position: absolute;", "  display: none;", "  z-index: 999;", "}", ".blocklyDraggable {", "  cursor: url(<<<PATH>>>/media/handopen.cur) 8 5, auto;", "}", ".blocklyResizeSE {", "  fill: #aaa;", "  cursor: se-resize;", "}", ".blocklyResizeSW {", "  fill: #aaa;", "  cursor: sw-resize;", "}", ".blocklyResizeLine {", "  stroke-width: 1;", "  stroke: #888;", "}", ".blocklyHighlightedConnectionPath {", "  stroke-width: 4px;", "  stroke: #fc3;", "  fill: none;", "}", ".blocklyPathLight {", "  fill: none;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklySelected>.blocklyPath {", "  stroke-width: 3px;", "  stroke: #fc3;", "}", ".blocklySelected>.blocklyPathLight {", "  display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "  fill-opacity: .8;", "  stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "  display: none;", "}", ".blocklyDisabled>.blocklyPath {", "  fill-opacity: .5;", "  stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "  display: none;", "}", ".blocklyText {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 11pt;", "  fill: #fff;", "}", ".blocklyNonEditableText>text {", "  pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "  fill: #fff;", "  fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "  fill: #000;", "}", ".blocklyEditableText:hover>rect {", "  stroke-width: 2;", "  stroke: #fff;", "}", ".blocklyBubbleText {", "  fill: #000;", "}", ".blocklySvg text {", "  -moz-user-select: none;", "  -webkit-user-select: none;", "  user-select: none;", "  cursor: inherit;", "}", ".blocklyHidden {", "  display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "  display: block;", "}", ".blocklyTooltipBackground {", "  fill: #ffffc7;", "  stroke-width: 1px;", "  stroke: #d8d8d8;", "}", ".blocklyTooltipShadow,", ".blocklyDropdownMenuShadow {", "  fill: #bbb;", "  filter: url(#blocklyShadowFilter);", "}", ".blocklyTooltipText {", "  font-family: sans-serif;", "  font-size: 9pt;", "  fill: #000;", "}", ".blocklyIconShield {", "  cursor: default;", "  fill: #00c;", "  stroke-width: 1px;", "  stroke: #ccc;", "}", ".blocklyIconGroup:hover>.blocklyIconShield {", "  fill: #00f;", "  stroke: #fff;", "}", ".blocklyIconGroup:hover>.blocklyIconMark {", "  fill: #fff;", "}", ".blocklyIconMark {", "  cursor: default !important;", "  font-family: sans-serif;", "  font-size: 9pt;", "  font-weight: bold;", "  fill: #ccc;", "  text-anchor: middle;", "}", ".blocklyWarningBody {", "}", ".blocklyMinimalBody {", "  margin: 0;", "  padding: 0;", "}", ".blocklyCommentTextarea {", "  margin: 0;", "  padding: 2px;", "  border: 0;", "  resize: none;", "  background-color: #ffc;", "}", ".blocklyHtmlInput {", "  font-family: sans-serif;", "  font-size: 11pt;", "  border: none;", "  outline: none;", "  width: 100%", "}", ".blocklyMutatorBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #ddd;", "}", ".blocklyFlyoutBackground {", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyColourBackground {", "  fill: #666;", "}", ".blocklyScrollbarBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #e4e4e4;", "}", ".blocklyScrollbarKnob {", "  fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,", ".blocklyScrollbarKnob:hover {", "  fill: #bbb;", "}", ".blocklyInvalidInput {", "  background: #faa;", "}", ".blocklyAngleCircle {", "  stroke: #444;", "  stroke-width: 1;", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyAngleMarks {", "  stroke: #444;", "  stroke-width: 1;", "}", ".blocklyAngleGauge {", "  fill: #f88;", "  fill-opacity: .8;  ", "}", ".blocklyAngleLine {", "  stroke: #f00;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklyContextMenu {", "  border-radius: 4px;", "}", ".blocklyDropdownMenu {", "  padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(<<<PATH>>>/media/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "  background-color: #ddd;", "  display: none;", "  overflow-x: visible;", "  overflow-y: auto;", "  position: absolute;", "}", ".blocklyTreeRoot {", "  padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "  outline: none;", "}", ".blocklyTreeRow {", "  line-height: 22px;", "  height: 22px;", "  padding-right: 1em;", "  white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "  padding-right: 0;", "  padding-left: 1em !important;", "}", ".blocklyTreeRow:hover {", "  background-color: #e4e4e4;", "}", ".blocklyTreeIcon {", "  height: 16px;", "  width: 16px;", "  vertical-align: middle;", "  background-image: url(<<<PATH>>>/media/sprites.png);", "}", ".blocklyTreeIconClosedLtr {", "  background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "  background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "  background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "  background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "  background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "  background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "  background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 16px;", "  padding: 0 3px;", "  vertical-align: middle;", "}", ".blocklyTreeSelected  {", "  background-color: #57e !important;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "  outline: none;", "  cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "  border: 1px solid #666;", "  border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "  height: 13px;", "  width: 15px;", "  margin: 0;", "  border: 0;", "  text-align: center;", "  vertical-align: middle;", "  border-right: 1px solid #666;", "  font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "  position: relative;", "  height: 13px;", "  width: 15px;", "  border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "  border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "  border: 1px solid #000;", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "  background: #fff;", "  border-color: #ccc #666 #666 #ccc;", "  border-style: solid;", "  border-width: 1px;", "  cursor: default;", "  font: normal 13px Arial, sans-serif;", "  margin: 0;", "  outline: none;", "  padding: 4px 0;", "  position: absolute;", "  z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "  list-style: none;", "  margin: 0;", "  padding: 4px 7em 4px 28px;", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "  padding-left: 7em;", "  padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "  padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "  padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "  color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "  opacity: 0.3;", "  -moz-opacity: 0.3;", "  filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "  background-color: #d6e9f8;", "  border-color: #d6e9f8;", "  border-style: dotted;", "  border-width: 1px 0;", "  padding-bottom: 3px;", "  padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "  background-repeat: no-repeat;", "  height: 16px;", "  left: 6px;", "  position: absolute;", "  right: auto;", "  vertical-align: middle;", "  width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "  left: auto;", "  right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "  color: #999;", "  direction: ltr;", "  left: auto;", "  padding: 0 6px;", "  position: absolute;", "  right: 0;", "  text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "  left: 0;", "  right: auto;", "  text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "  text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "  color: #999;", "  font-size: 12px;", "  padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "  border-top: 1px solid #ccc;", "  margin: 4px 0;", "  padding: 0;", "}", ""];
  A.WidgetDiv = {};
  A.WidgetDiv.DIV = null;
  A.WidgetDiv.owner_ = null;
  A.WidgetDiv.dispose_ = null;
  A.WidgetDiv.show = function (a, c) {
    A.WidgetDiv.hide();
    A.WidgetDiv.owner_ = a;
    A.WidgetDiv.dispose_ = c;
    A.WidgetDiv.DIV.style.display = "block";
  };
  A.WidgetDiv.hide = function () {
    A.WidgetDiv.owner_ && (A.WidgetDiv.DIV.style.display = "none", A.WidgetDiv.dispose_ && A.WidgetDiv.dispose_(), A.WidgetDiv.owner_ = null, A.WidgetDiv.dispose_ = null, e.dom.removeChildren(A.WidgetDiv.DIV));
  };
  A.WidgetDiv.isVisible = function () {
    return !!A.WidgetDiv.owner_;
  };
  A.WidgetDiv.hideIfOwner = function (a) {
    A.WidgetDiv.owner_ == a && A.WidgetDiv.hide();
  };
  A.WidgetDiv.position = function (a, c, d, f) {
    c < f.y && (c = f.y);
    A.RTL ? a > d.width + f.x && (a = d.width + f.x) : a < f.x && (a = f.x);
    A.WidgetDiv.DIV.style.left = a + "px";
    A.WidgetDiv.DIV.style.top = c + "px";
  };
  A.inject = function (a, c) {
    function d() {
      A.createDom_(a);
      A.init_();
    }
    if (!e.dom.contains(document, a)) throw "Error: container is not in current document.";
    c && A.parseOptions_(c);
    if (A.enableRealtime) {
      if (c = document.getElementById("realtime")) c.style.display = "block";
      A.Realtime.startRealtime(d, a, A.realtimeOptions);
    } else d();
  };
  A.parseToolboxTree_ = function (a) {
    a ? ("string" != typeof a && "undefined" == typeof XSLTProcessor && (a = a.outerHTML), "string" == typeof a && (a = A.Xml.textToDom(a))) : a = null;
    return a;
  };
  A.parseOptions_ = function (a) {
    var c = !!a.readOnly;
    if (c) var d = !1,
      f = !1,
      g = !1,
      h = !1,
      k = !1,
      m = null;else m = A.parseToolboxTree_(a.toolbox), d = !(!m || !m.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = d), g = a.collapse, void 0 === g && (g = d), h = a.comments, void 0 === h && (h = d), k = a.disable, void 0 === k && (k = d);
    if (m && !d) var n = !1;else n = a.scrollbars, void 0 === n && (n = !0);
    var p = a.sounds;
    void 0 === p && (p = !0);
    var r = !!a.realtime,
      q = r ? a.realtimeOptions : void 0,
      v = a.touch;
    void 0 === v && (v = e.events.BrowserFeature.TOUCH_ENABLED);
    var t = a.toolboxLayout || null;
    A.RTL = !!a.rtl;
    A.touch = v;
    A.collapse = g;
    A.comments = h;
    A.disable = k;
    A.readOnly = c;
    A.maxBlocks = a.maxBlocks || Infinity;
    A.pathToBlockly = a.path || "./";
    A.hasCategories = d;
    A.hasScrollbars = n;
    A.hasTrashcan = f;
    A.hasSounds = p;
    A.languageTree = m;
    A.enableRealtime = r;
    A.realtimeOptions = q;
    A.toolboxLayout = t;
  };
  A.createDom_ = function (a) {
    a.setAttribute("dir", "LTR");
    e.ui.Component.setDefaultRightToLeft(A.RTL);
    A.Css.inject();
    var c = A.createSvgElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
      }, null),
      d = A.createSvgElement("defs", {
        id: "blocklySvgDefs"
      }, c);
    var f = A.createSvgElement("filter", {
      id: "blocklyEmboss"
    }, d);
    A.createSvgElement("feGaussianBlur", {
      "in": "SourceAlpha",
      stdDeviation: 1,
      result: "blur"
    }, f);
    var g = A.createSvgElement("feSpecularLighting", {
      "in": "blur",
      surfaceScale: 1,
      specularConstant: .5,
      specularExponent: 10,
      "lighting-color": "white",
      result: "specOut"
    }, f);
    A.createSvgElement("fePointLight", {
      x: -5E3,
      y: -1E4,
      z: 2E4
    }, g);
    A.createSvgElement("feComposite", {
      "in": "specOut",
      in2: "SourceAlpha",
      operator: "in",
      result: "specOut"
    }, f);
    A.createSvgElement("feComposite", {
      "in": "SourceGraphic",
      in2: "specOut",
      operator: "arithmetic",
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0
    }, f);
    f = A.createSvgElement("filter", {
      id: "blocklyTrashcanShadowFilter"
    }, d);
    A.createSvgElement("feGaussianBlur", {
      "in": "SourceAlpha",
      stdDeviation: 2,
      result: "blur"
    }, f);
    A.createSvgElement("feOffset", {
      "in": "blur",
      dx: 1,
      dy: 1,
      result: "offsetBlur"
    }, f);
    f = A.createSvgElement("feMerge", {}, f);
    A.createSvgElement("feMergeNode", {
      "in": "offsetBlur"
    }, f);
    A.createSvgElement("feMergeNode", {
      "in": "SourceGraphic"
    }, f);
    f = A.createSvgElement("filter", {
      id: "blocklyShadowFilter"
    }, d);
    A.createSvgElement("feGaussianBlur", {
      stdDeviation: 2
    }, f);
    d = A.createSvgElement("pattern", {
      id: "blocklyDisabledPattern",
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10
    }, d);
    A.createSvgElement("rect", {
      width: 10,
      height: 10,
      fill: "#aaa"
    }, d);
    A.createSvgElement("path", {
      d: "M 0 0 L 10 10 M 10 0 L 0 10",
      stroke: "#cc0"
    }, d);
    A.mainWorkspace = new A.Workspace(A.getMainWorkspaceMetrics_, A.setMainWorkspaceMetrics_);
    c.appendChild(A.mainWorkspace.createDom());
    A.mainWorkspace.maxBlocks = A.maxBlocks;
    A.readOnly || (A.hasCategories ? A.Toolbox.createDom(c, a) : (A.mainWorkspace.flyout_ = new A.Flyout(), d = A.mainWorkspace.flyout_, f = d.createDom(), d.autoClose = !1, d.layoutProvider = A.toolboxLayout, e.dom.insertSiblingBefore(f, A.mainWorkspace.svgGroup_), A.addChangeListener(function () {
      if (0 == A.Block.dragMode_) {
        var a = A.mainWorkspace.getMetrics();
        if (0 > a.contentTop || a.contentTop + a.contentHeight > a.viewHeight + a.viewTop || a.contentLeft < (A.RTL ? a.viewLeft : 0) || a.contentLeft + a.contentWidth > (A.RTL ? a.viewWidth : a.viewWidth + a.viewLeft)) for (var c = A.mainWorkspace.getTopBlocks(!1), d = 0, f; f = c[d]; d++) {
          var g = f.getRelativeToSurfaceXY(),
            r = f.getHeightWidth(),
            q = a.viewTop + 25 - r.height - g.y;
          0 < q && f.moveBy(0, q);
          q = a.viewTop + a.viewHeight - 25 - g.y;
          0 > q && f.moveBy(0, q);
          q = 25 + a.viewLeft - g.x - (A.RTL ? 0 : r.width);
          0 < q && f.moveBy(q, 0);
          q = a.viewLeft + a.viewWidth - 25 - g.x + (A.RTL ? r.width : 0);
          0 > q && f.moveBy(q, 0);
          f.isDeletable() && 50 < (A.RTL ? g.x - a.viewWidth : -g.x) && f.dispose(!1, !0);
        }
      }
    })));
    A.mainWorkspace.setEnableToolbox = function (a) {
      A.mainWorkspace.flyout_ ? A.mainWorkspace.flyout_.setEnabled(a) : A.Toolbox.enabled = a;
    };
    c.appendChild(A.Tooltip.createDom());
    a.appendChild(c);
    A.svg = c;
    A.svgResize();
    A.WidgetDiv.DIV = e.dom.createDom("div", "blocklyWidgetDiv");
    A.WidgetDiv.DIV.style.direction = A.RTL ? "rtl" : "ltr";
    document.body.appendChild(A.WidgetDiv.DIV);
  };
  A.init_ = function () {
    A.bindEvent_(A.svg, "mousedown", null, A.onMouseDown_);
    A.bindEvent_(A.svg, "contextmenu", null, A.onContextMenu_);
    A.bindEvent_(A.WidgetDiv.DIV, "contextmenu", null, A.onContextMenu_);
    A.documentEventsBound_ || (A.bindEvent_(window, "resize", document, A.svgResize), A.bindEvent_(document, "keydown", null, A.onKeyDown_), document.addEventListener("mouseup", A.onMouseUp_, !1), e.userAgent.IPAD && A.bindEvent_(window, "orientationchange", document, function () {
      A.fireUiEvent(window, "resize");
    }), A.documentEventsBound_ = !0);
    if (A.languageTree) if (A.hasCategories) A.Toolbox.init();else {
      A.mainWorkspace.flyout_.init(A.mainWorkspace);
      A.mainWorkspace.flyout_.show(A.languageTree.childNodes);
      A.mainWorkspace.scrollX = A.mainWorkspace.flyout_.width_;
      A.RTL && (A.mainWorkspace.scrollX *= -1);
      var a = "translate(" + A.mainWorkspace.scrollX + ", 0)";
      A.mainWorkspace.getCanvas().setAttribute("transform", a);
      A.mainWorkspace.getBubbleCanvas().setAttribute("transform", a);
    }
    A.hasScrollbars && (A.mainWorkspace.scrollbar = new A.ScrollbarPair(A.mainWorkspace), A.mainWorkspace.scrollbar.resize());
    A.mainWorkspace.addTrashcan();
    if (A.hasSounds) {
      A.loadAudio_(["media/click.mp3", "media/click.wav", "media/click.ogg"], "click");
      A.loadAudio_(["media/delete.mp3", "media/delete.ogg", "media/delete.wav"], "delete");
      var c = [];
      a = function () {
        for (; c.length;) A.unbindEvent_(c.pop());
        A.preloadAudio_();
      };
      c.push(A.bindEvent_(document, "mousemove", null, a));
      c.push(A.bindEvent_(document, "touchstart", null, a));
    }
  };
  A.updateToolbox = function (a) {
    if (a = A.parseToolboxTree_(a)) {
      if (!A.languageTree) throw "Existing toolbox is null.  Can't create new toolbox.";
      if (a.getElementsByTagName("category").length) {
        if (!A.hasCategories) throw "Existing toolbox has no categories.  Can't change mode.";
        A.languageTree = a;
        A.Toolbox.populate_();
      } else {
        if (A.hasCategories) throw "Existing toolbox has categories.  Can't change mode.";
        A.languageTree = a;
        A.mainWorkspace.flyout_.show(A.languageTree.childNodes);
      }
    } else if (A.languageTree) throw "Can't nullify an existing toolbox.";
  };
  A.utils = {};
  A.addClass_ = function (a, c) {
    var d = a.getAttribute("class") || "";
    -1 == (" " + d + " ").indexOf(" " + c + " ") && (d && (d += " "), a.setAttribute("class", d + c));
  };
  A.removeClass_ = function (a, c) {
    var d = a.getAttribute("class");
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
      d = d.split(/\s+/);
      for (var f = 0; f < d.length; f++) d[f] && d[f] != c || (d.splice(f, 1), f--);
      d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class");
    }
  };
  A.bindEvent_ = function (a, c, d, f) {
    function g(a) {
      f.apply(d, arguments);
    }
    a.addEventListener(c, g, !1);
    var h = [[a, c, g]];
    if (c in A.bindEvent_.TOUCH_MAP) {
      g = function (a) {
        if (1 == a.changedTouches.length) {
          var c = a.changedTouches[0];
          a.clientX = c.clientX;
          a.clientY = c.clientY;
        }
        f.apply(d, arguments);
        a.preventDefault();
      };
      for (var k = 0, m; m = A.bindEvent_.TOUCH_MAP[c][k]; k++) a.addEventListener(m, g, !1), h.push([a, m, g]);
    }
    return h;
  };
  A.bindEvent_.TOUCH_MAP = {};
  e.events.BrowserFeature.TOUCH_ENABLED && (A.bindEvent_.TOUCH_MAP = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
  });
  A.unbindEvent_ = function (a) {
    for (; a.length;) {
      var c = a.pop(),
        d = c[2];
      c[0].removeEventListener(c[1], d, !1);
    }
    return d;
  };
  A.fireUiEventNow = function (a, c) {
    var d = document;
    if (d.createEvent) d = d.createEvent("UIEvents"), d.initEvent(c, !0, !0), a.dispatchEvent(d);else if (d.createEventObject) d = d.createEventObject(), a.fireEvent("on" + c, d);else throw "FireEvent: No event creation mechanism.";
  };
  A.fireUiEvent = function (a, c) {
    setTimeout(function () {
      A.fireUiEventNow(a, c);
    }, 0);
  };
  A.noEvent = function (a) {
    a.preventDefault();
    a.stopPropagation();
  };
  A.getRelativeXY_ = function (a) {
    var c = {
        x: 0,
        y: 0
      },
      d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y")) c.y = parseInt(d, 10);
    if (a = (a = a.getAttribute("transform")) && a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/)) c.x += parseInt(a[1], 10), a[3] && (c.y += parseInt(a[3], 10));
    return c;
  };
  A.getSvgXY_ = function (a) {
    var c = 0,
      d = 0;
    do {
      var f = A.getRelativeXY_(a);
      c += f.x;
      d += f.y;
      a = a.parentNode;
    } while (a && a != A.svg);
    return {
      x: c,
      y: d
    };
  };
  A.getAbsoluteXY_ = function (a) {
    a = A.getSvgXY_(a);
    return A.convertCoordinates(a.x, a.y, !1);
  };
  A.createSvgElement = function (a, c, d) {
    a = document.createElementNS(A.SVG_NS, a);
    for (var f in c) a.setAttribute(f, c[f]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a;
  };
  A.isRightButton = function (a) {
    return 2 == a.button || a.ctrlKey;
  };
  A.convertCoordinates = function (a, c, d) {
    d && (a -= window.scrollX || window.pageXOffset, c -= window.scrollY || window.pageYOffset);
    var f = A.svg.createSVGPoint();
    f.x = a;
    f.y = c;
    a = A.svg.getScreenCTM();
    d && (a = a.inverse());
    f = f.matrixTransform(a);
    d || (f.x += window.scrollX || window.pageXOffset, f.y += window.scrollY || window.pageYOffset);
    return f;
  };
  A.mouseToSvg = function (a) {
    return A.convertCoordinates(a.clientX + (window.scrollX || window.pageXOffset), a.clientY + (window.scrollY || window.pageYOffset), !0);
  };
  A.shortestStringLength = function (a) {
    if (!a.length) return 0;
    for (var c = a[0].length, d = 1; d < a.length; d++) c = Math.min(c, a[d].length);
    return c;
  };
  A.commonWordPrefix = function (a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || A.shortestStringLength(a);
    for (var f = 0; f < c; f++) {
      for (var g = a[0][f], h = 1; h < a.length; h++) if (g != a[h][f]) return d;
      " " == g && (d = f + 1);
    }
    for (h = 1; h < a.length; h++) if ((g = a[h][f]) && " " != g) return d;
    return c;
  };
  A.commonWordSuffix = function (a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || A.shortestStringLength(a);
    for (var f = 0; f < c; f++) {
      for (var g = a[0].substr(-f - 1, 1), h = 1; h < a.length; h++) if (g != a[h].substr(-f - 1, 1)) return d;
      " " == g && (d = f + 1);
    }
    for (h = 1; h < a.length; h++) if ((g = a[h].charAt(a[h].length - f - 1)) && " " != g) return d;
    return c;
  };
  A.isNumber = function (a) {
    return !!a.match(/^\s*-?\d+(\.\d+)?\s*$/);
  };
  A.pathToBlockly = "./";
  A.SVG_NS = "http://www.w3.org/2000/svg";
  A.HTML_NS = "http://www.w3.org/1999/xhtml";
  A.HSV_SATURATION = .45;
  A.HSV_VALUE = .65;
  A.SPRITE = {
    width: 64,
    height: 92,
    url: "media/sprites.png"
  };
  A.makeColour = function (a, c, d) {
    return e.color.hsvToHex(a, c, 256 * d);
  };
  A.INPUT_VALUE = 1;
  A.OUTPUT_VALUE = 2;
  A.NEXT_STATEMENT = 3;
  A.PREVIOUS_STATEMENT = 4;
  A.DUMMY_INPUT = 5;
  A.ALIGN_LEFT = -1;
  A.ALIGN_CENTRE = 0;
  A.ALIGN_RIGHT = 1;
  A.OPPOSITE_TYPE = [];
  A.OPPOSITE_TYPE[A.INPUT_VALUE] = A.OUTPUT_VALUE;
  A.OPPOSITE_TYPE[A.OUTPUT_VALUE] = A.INPUT_VALUE;
  A.OPPOSITE_TYPE[A.NEXT_STATEMENT] = A.PREVIOUS_STATEMENT;
  A.OPPOSITE_TYPE[A.PREVIOUS_STATEMENT] = A.NEXT_STATEMENT;
  A.SOUNDS_ = Object.create(null);
  A.selected = null;
  A.readOnly = !1;
  A.highlightedConnection_ = null;
  A.localConnection_ = null;
  A.DRAG_RADIUS = 5;
  A.SNAP_RADIUS = 20;
  A.BUMP_DELAY = 250;
  A.COLLAPSE_CHARS = 30;
  A.mainWorkspace = null;
  A.clipboard_ = null;
  A.onTouchUpWrapper_ = null;
  A.svgSize = function () {
    return {
      width: A.svg.cachedWidth_,
      height: A.svg.cachedHeight_
    };
  };
  A.svgResize = function () {
    var a = A.svg,
      c = a.parentNode,
      d = c.offsetWidth;
    c = c.offsetHeight;
    a.cachedWidth_ != d && (a.setAttribute("width", d + "px"), a.cachedWidth_ = d);
    a.cachedHeight_ != c && (a.setAttribute("height", c + "px"), a.cachedHeight_ = c);
    A.mainWorkspace.scrollbar && A.mainWorkspace.scrollbar.resize();
  };
  A.onMouseDown_ = function (a) {
    A.svgResize();
    A.terminateDrag_();
    A.hideChaff();
    var c = a.target && a.target.nodeName && "svg" == a.target.nodeName.toLowerCase();
    !A.readOnly && A.selected && c && A.selected.unselect();
    a.target == A.svg && A.isRightButton(a) ? A.showContextMenu_(a) : (A.readOnly || c) && A.mainWorkspace.scrollbar && (A.mainWorkspace.dragMode = !0, A.mainWorkspace.startDragMouseX = a.clientX, A.mainWorkspace.startDragMouseY = a.clientY, A.mainWorkspace.startDragMetrics = A.mainWorkspace.getMetrics(), A.mainWorkspace.startScrollX = A.mainWorkspace.scrollX, A.mainWorkspace.startScrollY = A.mainWorkspace.scrollY, "mouseup" in A.bindEvent_.TOUCH_MAP && (A.onTouchUpWrapper_ = A.bindEvent_(document, "mouseup", null, A.onMouseUp_)), A.onMouseMoveWrapper_ = A.bindEvent_(document, "mousemove", null, A.onMouseMove_));
  };
  A.onMouseUp_ = function () {
    A.setCursorHand_(!1);
    A.mainWorkspace.dragMode = !1;
    A.onTouchUpWrapper_ && (A.unbindEvent_(A.onTouchUpWrapper_), A.onTouchUpWrapper_ = null);
    A.onMouseMoveWrapper_ && (A.unbindEvent_(A.onMouseMoveWrapper_), A.onMouseMoveWrapper_ = null);
  };
  A.onMouseMove_ = function (a) {
    if (A.mainWorkspace.dragMode) {
      A.removeAllRanges();
      var c = A.mainWorkspace.startDragMetrics,
        d = A.mainWorkspace.startScrollX + (a.clientX - A.mainWorkspace.startDragMouseX),
        f = A.mainWorkspace.startScrollY + (a.clientY - A.mainWorkspace.startDragMouseY);
      d = Math.min(d, -c.contentLeft);
      f = Math.min(f, -c.contentTop);
      d = Math.max(d, c.viewWidth - c.contentLeft - c.contentWidth);
      f = Math.max(f, c.viewHeight - c.contentTop - c.contentHeight);
      A.mainWorkspace.scrollbar.set(-d - c.contentLeft, -f - c.contentTop);
      a.stopPropagation();
    }
  };
  A.onKeyDown_ = function (a) {
    if (!A.isTargetInput_(a)) if (27 == a.keyCode) A.hideChaff();else if (8 == a.keyCode || 46 == a.keyCode) try {
      A.selected && A.selected.isDeletable() && (A.hideChaff(), A.selected.dispose(!0, !0));
    } finally {
      a.preventDefault();
    } else if (a.altKey || a.ctrlKey || a.metaKey) A.selected && A.selected.isDeletable() && A.selected.isMovable() && A.selected.workspace == A.mainWorkspace && (A.hideChaff(), 67 == a.keyCode ? A.copy_(A.selected) : 88 == a.keyCode && (A.copy_(A.selected), A.selected.dispose(!0, !0))), 86 == a.keyCode && A.clipboard_ && A.mainWorkspace.paste(A.clipboard_);
  };
  A.terminateDrag_ = function () {
    A.Block.terminateDrag_();
    A.Flyout.terminateDrag_();
  };
  A.copy_ = function (a) {
    var c = A.Xml.blockToDom_(a);
    A.Xml.deleteNext(c);
    a = a.getRelativeToSurfaceXY();
    c.setAttribute("x", A.RTL ? -a.x : a.x);
    c.setAttribute("y", a.y);
    A.clipboard_ = c;
  };
  A.showContextMenu_ = function (a) {
    if (!A.readOnly) {
      var c = [];
      if (A.collapse) {
        for (var d = !1, f = !1, g = A.mainWorkspace.getTopBlocks(!1), h = 0; h < g.length; h++) for (var k = g[h]; k;) k.isCollapsed() ? d = !0 : f = !0, k = k.getNextBlock();
        f = {
          enabled: f
        };
        f.text = A.Msg.COLLAPSE_ALL;
        f.callback = function () {
          for (var a = 0, c = 0; c < g.length; c++) for (var d = g[c]; d;) setTimeout(d.setCollapsed.bind(d, !0), a), d = d.getNextBlock(), a += 10;
        };
        c.push(f);
        d = {
          enabled: d
        };
        d.text = A.Msg.EXPAND_ALL;
        d.callback = function () {
          for (var a = 0, c = 0; c < g.length; c++) for (var d = g[c]; d;) setTimeout(d.setCollapsed.bind(d, !1), a), d = d.getNextBlock(), a += 10;
        };
        c.push(d);
      }
      A.ContextMenu.show(a, c);
    }
  };
  A.onContextMenu_ = function (a) {
    A.isTargetInput_(a) || a.preventDefault();
  };
  A.hideChaff = function (a) {
    A.Tooltip.hide();
    A.WidgetDiv.hide();
    !a && A.Toolbox.flyout_ && A.Toolbox.flyout_.autoClose && A.Toolbox.clearSelection();
  };
  A.removeAllRanges = function () {
    if (window.getSelection) {
      var a = window.getSelection();
      a && a.removeAllRanges && (a.removeAllRanges(), window.setTimeout(function () {
        try {
          window.getSelection().removeAllRanges();
        } catch (c) {}
      }, 0));
    }
  };
  A.isTargetInput_ = function (a) {
    return "textarea" == a.target.type || "text" == a.target.type;
  };
  A.loadAudio_ = function (a, c) {
    if (window.Audio && a.length) {
      for (var d, f = new window.Audio(), g = 0; g < a.length; g++) {
        var h = a[g],
          k = h.match(/\.(\w+)$/);
        if (k && f.canPlayType("audio/" + k[1])) {
          d = new window.Audio(A.pathToBlockly + h);
          break;
        }
      }
      d && d.play && (A.SOUNDS_[c] = d);
    }
  };
  A.preloadAudio_ = function () {
    for (var a in A.SOUNDS_) {
      var c = A.SOUNDS_[a];
      c.volume = .01;
      c.play();
      c.pause();
      if (e.userAgent.IPAD || e.userAgent.IPHONE) break;
    }
  };
  A.playAudio = function (a, c) {
    if (a = A.SOUNDS_[a]) a = e.userAgent.DOCUMENT_MODE && 9 === e.userAgent.DOCUMENT_MODE || e.userAgent.IPAD || e.userAgent.ANDROID ? a : a.cloneNode(), a.volume = void 0 === c ? 1 : c, a.play();
  };
  A.setCursorHand_ = function (a) {
    if (!A.readOnly) {
      var c = "";
      a && (c = "url(" + A.pathToBlockly + "media/handclosed.cur) 7 3, auto");
      A.selected && (A.selected.getSvgRoot().style.cursor = c);
      A.svg.style.cursor = c;
    }
  };
  A.getMainWorkspaceMetrics_ = function () {
    var a = A.svgSize();
    a.width -= A.Toolbox.width;
    var c = a.width - A.Scrollbar.scrollbarThickness,
      d = a.height - A.Scrollbar.scrollbarThickness;
    try {
      var f = A.mainWorkspace.getCanvas().getBBox();
    } catch (k) {
      return null;
    }
    if (A.mainWorkspace.scrollbar) {
      var g = Math.min(f.x - c / 2, f.x + f.width - c);
      c = Math.max(f.x + f.width + c / 2, f.x + c);
      var h = Math.min(f.y - d / 2, f.y + f.height - d);
      d = Math.max(f.y + f.height + d / 2, f.y + d);
    } else g = f.x, c = g + f.width, h = f.y, d = h + f.height;
    return {
      viewHeight: a.height,
      viewWidth: a.width,
      contentHeight: d - h,
      contentWidth: c - g,
      viewTop: -A.mainWorkspace.scrollY,
      viewLeft: -A.mainWorkspace.scrollX,
      contentTop: h,
      contentLeft: g,
      absoluteTop: 0,
      absoluteLeft: A.RTL ? 0 : A.Toolbox.width
    };
  };
  A.setMainWorkspaceMetrics_ = function (a) {
    if (!A.mainWorkspace.scrollbar) throw "Attempt to set main workspace scroll without scrollbars.";
    var c = A.getMainWorkspaceMetrics_();
    A.goog.isNumber(a.x) && (A.mainWorkspace.scrollX = -c.contentWidth * a.x - c.contentLeft);
    A.goog.isNumber(a.y) && (A.mainWorkspace.scrollY = -c.contentHeight * a.y - c.contentTop);
    a = "translate(" + (A.mainWorkspace.scrollX + c.absoluteLeft) + "," + (A.mainWorkspace.scrollY + c.absoluteTop) + ")";
    A.mainWorkspace.getCanvas().setAttribute("transform", a);
    A.mainWorkspace.getBubbleCanvas().setAttribute("transform", a);
  };
  A.doCommand = function (a) {
    A.Realtime.isEnabled ? A.Realtime.doCommand(a) : a();
  };
  A.addChangeListener = function (a) {
    return A.bindEvent_(A.mainWorkspace.getCanvas(), "blocklyWorkspaceChange", null, a);
  };
  A.removeChangeListener = function (a) {
    A.unbindEvent_(a);
  };
  A.getMainWorkspace = function () {
    return A.mainWorkspace;
  };
  window.Blockly || (window.Blockly = {});
  window.Blockly.getMainWorkspace = A.getMainWorkspace;
  window.Blockly.addChangeListener = A.addChangeListener;
  window.Blockly.removeChangeListener = A.removeChangeListener;
  var D = {};
  D.BlocklyLayout = class {
    constructor(a, c) {
      this.blockly_ = a;
      this.layoutRequest_ = null;
      this.game_ = c;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", this.onResize_.bind(this), !1);
    }
    scheduleLayout() {
      null == this.layoutRequest_ && (this.layoutRequest_ = setTimeout(this.layoutWorkspace_.bind(this), 0));
    }
    onResize_() {
      if (this.windowHeight !== window.innerHeight || this.windowWidth !== window.innerWidth) this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.blockly_.reflowToolbar(), this.scheduleLayout();
    }
    layoutToolbox(a) {
      return 0 === a.length ? 0 : 1024 < this.windowWidth ? this.layoutToolboxCardinal_(a) : this.layoutToolboxRow_(a);
    }
    layoutToolboxRow_(a) {
      let c = 0,
        d = D.BlocklyLayout.TOOLBOX_GAP,
        f = D.BlocklyLayout.TOOLBOX_MARGIN,
        g = D.BlocklyLayout.TOOLBOX_TOP;
      660 < this.windowWidth && (f = D.BlocklyLayout.TOOLBOX_SM_MARGIN, g = D.BlocklyLayout.TOOLBOX_SM_TOP);
      for (let h = 0, k = null; k = a[h]; h++) {
        let a = k.getHeightWidth();
        c = a.width;
        k.moveTo(f, g);
        g += a.height + d;
      }
      return c + 2 * f;
    }
    layoutToolboxCardinal_(a) {
      let c = this.windowHeight >= D.BlocklyLayout.MQ_LARGER_BOARD ? D.BlocklyLayout.TOOLBOX_MD_TOP : D.BlocklyLayout.TOOLBOX_MD_SHORT_TOP;
      var d = D.BlocklyLayout.TOOLBOX_MD_MARGIN;
      let f = D.BlocklyLayout.TOOLBOX_MD_GAP,
        g = a[0].getHeightWidth();
      d = 2 * (g.width + f) - f + 2 * d;
      let h = d / 2 - (g.width + f / 2),
        k = d / 2 + f / 2;
      for (let d = 0, n = null; n = a[d]; d++) 0 < d && 0 === d % 2 && (c += g.height + f), n.moveTo(0 === d % 2 ? h : k, c);
      return d;
    }
    layoutWorkspace_() {
      this.layoutRequest_ = null;
      this.blockly_.getToolbarWidth();
      var a = this.windowWidth - this.game_.scene.getWidth();
      this.blockly_.el.style.width = a + "px";
      a = D.BlocklyLayout.WHENRUN_LEFT;
      let c = D.BlocklyLayout.WHENRUN_TOP;
      660 < this.windowWidth && (a = D.BlocklyLayout.WHENRUN_SM_LEFT, c = D.BlocklyLayout.WHENRUN_SM_TOP);
      1024 < this.windowWidth && (a = D.BlocklyLayout.WHENRUN_MD_LEFT, c = D.BlocklyLayout.WHENRUN_MD_TOP);
      let d = this.blockly_.getTopBlocks(!1);
      for (let f = 0, g = null; g = d[f]; f++) "when_run" === g.type && g.moveTo(a, c);
    }
  };
  D.BlocklyLayout.TOOLBOX_GAP = 10;
  D.BlocklyLayout.TOOLBOX_MD_GAP = 24;
  D.BlocklyLayout.TOOLBOX_MARGIN = 10;
  D.BlocklyLayout.TOOLBOX_SM_MARGIN = 24;
  D.BlocklyLayout.TOOLBOX_MD_MARGIN = 59;
  D.BlocklyLayout.TOOLBOX_TOP = 80;
  D.BlocklyLayout.TOOLBOX_SM_TOP = 105;
  D.BlocklyLayout.TOOLBOX_MD_TOP = 105;
  D.BlocklyLayout.TOOLBOX_MD_SHORT_TOP = 80;
  D.BlocklyLayout.WHENRUN_TOP = 80;
  D.BlocklyLayout.WHENRUN_SM_TOP = 105;
  D.BlocklyLayout.WHENRUN_MD_TOP = 105;
  D.BlocklyLayout.WHENRUN_LEFT = 10;
  D.BlocklyLayout.WHENRUN_SM_LEFT = 24;
  D.BlocklyLayout.WHENRUN_MD_LEFT = 32;
  D.BlocklyLayout.MQ_LARGER_BOARD = 544;
  A.JavaScript = new A.Generator("JavaScript");
  A.JavaScript.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
  A.JavaScript.ORDER_ATOMIC = 0;
  A.JavaScript.ORDER_MEMBER = 1;
  A.JavaScript.ORDER_NEW = 1;
  A.JavaScript.ORDER_FUNCTION_CALL = 2;
  A.JavaScript.ORDER_INCREMENT = 3;
  A.JavaScript.ORDER_DECREMENT = 3;
  A.JavaScript.ORDER_LOGICAL_NOT = 4;
  A.JavaScript.ORDER_BITWISE_NOT = 4;
  A.JavaScript.ORDER_UNARY_PLUS = 4;
  A.JavaScript.ORDER_UNARY_NEGATION = 4;
  A.JavaScript.ORDER_TYPEOF = 4;
  A.JavaScript.ORDER_VOID = 4;
  A.JavaScript.ORDER_DELETE = 4;
  A.JavaScript.ORDER_MULTIPLICATION = 5;
  A.JavaScript.ORDER_DIVISION = 5;
  A.JavaScript.ORDER_MODULUS = 5;
  A.JavaScript.ORDER_ADDITION = 6;
  A.JavaScript.ORDER_SUBTRACTION = 6;
  A.JavaScript.ORDER_BITWISE_SHIFT = 7;
  A.JavaScript.ORDER_RELATIONAL = 8;
  A.JavaScript.ORDER_IN = 8;
  A.JavaScript.ORDER_INSTANCEOF = 8;
  A.JavaScript.ORDER_EQUALITY = 9;
  A.JavaScript.ORDER_BITWISE_AND = 10;
  A.JavaScript.ORDER_BITWISE_XOR = 11;
  A.JavaScript.ORDER_BITWISE_OR = 12;
  A.JavaScript.ORDER_LOGICAL_AND = 13;
  A.JavaScript.ORDER_LOGICAL_OR = 14;
  A.JavaScript.ORDER_CONDITIONAL = 15;
  A.JavaScript.ORDER_ASSIGNMENT = 16;
  A.JavaScript.ORDER_COMMA = 17;
  A.JavaScript.ORDER_NONE = 99;
  A.JavaScript.init = function () {
    A.JavaScript.definitions_ = Object.create(null);
    A.JavaScript.functionNames_ = Object.create(null);
    A.JavaScript.variableDB_ ? A.JavaScript.variableDB_.reset() : A.JavaScript.variableDB_ = new A.Names(A.JavaScript.RESERVED_WORDS_);
    for (var a = [], c = A.Variables.allVariables(), d = 0; d < c.length; d++) a[d] = "var " + A.JavaScript.variableDB_.getName(c[d], A.Variables.NAME_TYPE) + ";";
    A.JavaScript.definitions_.variables = a.join("\n");
  };
  A.JavaScript.finish = function (a) {
    var c = [],
      d;
    for (d in A.JavaScript.definitions_) c.push(A.JavaScript.definitions_[d]);
    return c.join("\n\n") + "\n\n\n" + a;
  };
  A.JavaScript.scrubNakedValue = function (a) {
    return a + ";\n";
  };
  A.JavaScript.quote_ = function (a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'";
  };
  A.JavaScript.scrub_ = function (a, c) {
    var d = "";
    if (!a.outputConnection || !a.outputConnection.targetConnection) {
      var f = a.getCommentText();
      f && (d += A.JavaScript.prefixLines(f, "// ") + "\n");
      for (var g = 0; g < a.inputList.length; g++) a.inputList[g].type == A.INPUT_VALUE && (f = a.inputList[g].connection.targetBlock()) && (f = A.JavaScript.allNestedComments(f)) && (d += A.JavaScript.prefixLines(f, "// "));
    }
    a = a.nextConnection && a.nextConnection.targetBlock();
    a = A.JavaScript.blockToCode(a);
    return d + c + a;
  };
  D.Patterns = function () {
    function a(a) {
      var d = !0,
        f = c[a.id];
      if (!f) return !1;
      Object.keys(a).forEach(function (c) {
        a[c] !== f[c] && (d = !1);
      });
      if (!d) throw Error("Can't add attribute of same id with different attributes");
      return !0;
    }
    var c = {},
      d = null,
      f = [];
    return {
      addPattern: function (g, h, k, m, n, p) {
        var r = {
          id: g,
          imagePath: h,
          width: k,
          height: m,
          offsetX: n,
          offsetY: p
        };
        a(r) || (n = A.createSvgElement("pattern", {
          id: g,
          patternUnits: "userSpaceOnUse",
          width: "100%",
          height: "100%",
          x: -n,
          y: -p
        }), k = A.createSvgElement("image", {
          width: k,
          height: m
        }, n), k.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", h), c[r.id] = r, d ? d.appendChild(n) : f.push(n));
        return g;
      },
      inject: function () {
        d = document.getElementById("blocklySvgDefs");
        f.forEach(function (a) {
          d.appendChild(a);
        });
      }
    };
  }();
  D.Step = {
    LEFT_ARM: "pointLeft",
    RIGHT_ARM: "pointRight",
    LEFT_FOOT: "stepLeft",
    RIGHT_FOOT: "stepRight",
    JUMP: "jump",
    SPLIT: "splits",
    SHAKE: "hip",
    FLOSS: "floss",
    HIPHOP: "hiphop",
    MCHAMMER: "mchammer",
    PONY: "pony",
    IDLE: "idle",
    FAIL: "fail",
    WATCH: "watch"
  };
  D.blocks = {};
  D.blocks.miniBlockXml = function (a) {
    return '<block type="' + a + '_mini"><clone>' + D.blocks.blockXml(a) + "</clone></block>";
  };
  D.blocks.blockXml = function (a, c, d, f, g) {
    a = '<block type="' + a + '"';
    if (c) for (var h in c) c.hasOwnProperty(h) && null != c[h] && (a += " " + h + '="' + c[h] + '"');
    a += ">";
    if (d) for (h in d) d.hasOwnProperty(h) && (a += '<field name="' + h + '">' + d[h] + "</field>");
    f && (a += '<statement name="DO">' + f + "</statement>");
    g && (a += "<next>" + g + "</next>");
    return a + "</block>";
  };
  D.blocks.install = function () {
    function a(a, d) {
      for (var c = []; a <= d; a++) c.push([a.toString(), a]);
      return c;
    }
    (function () {
      function a(a) {
        return function () {
          return "api." + a + "('block_id_" + this.id + "');\n";
        };
      }
      function d(a) {
        var c = h[a],
          d = c.image;
        return {
          helpUrl: "",
          init: function () {
            this.contextMenu = !1;
            this.setHSV(296, .491, .624);
            this.appendDummyInput().appendField(new A.FieldImage(null, 24, 33));
            this.setFillPattern(D.Patterns.addPattern("minipat_" + a, d, 48, 43, 0, 0));
            this.setMini(!0);
            this.setTooltip(c.tooltip);
          }
        };
      }
      function f(a) {
        var c = h[a],
          d = c.image;
        return {
          helpUrl: "",
          init: function () {
            this.contextMenu = !1;
            this.setHSV(296, .491, .624);
            this.appendDummyInput().appendField(new A.FieldImage(null, 23, 32)).appendField(new A.FieldLabel(c.letter));
            this.setFillPattern(D.Patterns.addPattern("pat_" + a, d, 48, 43, -28, 0));
            this.setPreviousStatement(!0);
            this.setNextStatement(!0);
            this.setTooltip(c.tooltip);
          }
        };
      }
      function g(c) {
        A.Blocks["dance_" + c] = f(c);
        A.Blocks["dance_" + c + "_mini"] = d(c);
        A.JavaScript["dance_" + c] = a(c);
      }
      var h = {
        [D.Step.LEFT_ARM]: {
          letter: "\u0421\u043E\u0447\u0435\u043D\u0435 \u043D\u0430\u043B\u044F\u0432\u043E",
          image: "img/block-point-left.svg",
          tooltip: "\u041F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u0430\u043B\u044F\u0432\u043E."
        },
        [D.Step.RIGHT_ARM]: {
          letter: "\u0421\u043E\u0447\u0435\u043D\u0435 \u043D\u0430\u0434\u044F\u0441\u043D\u043E",
          image: "img/block-point-right.svg",
          tooltip: "\u041F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u0430\u0434\u044F\u0441\u043D\u043E."
        },
        [D.Step.LEFT_FOOT]: {
          letter: "\u0421\u0442\u044A\u043F\u043A\u0430 \u043D\u0430\u043B\u044F\u0432\u043E",
          image: "img/block-step-left.svg",
          tooltip: "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u0442\u0435 \u0441\u0442\u044A\u043F\u043A\u0430 \u043D\u0430\u043B\u044F\u0432\u043E."
        },
        [D.Step.RIGHT_FOOT]: {
          letter: "\u0421\u0442\u044A\u043F\u043A\u0430 \u043D\u0430\u0434\u044F\u0441\u043D\u043E",
          image: "img/block-step-right.svg",
          tooltip: "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u0442\u0435 \u0441\u0442\u044A\u043F\u043A\u0430 \u043D\u0430\u0434\u044F\u0441\u043D\u043E."
        },
        [D.Step.JUMP]: {
          letter: "\u041F\u043E\u0434\u0441\u043A\u043E\u043A",
          image: "img/block-jump.svg",
          tooltip: "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u0442\u0435 \u043F\u043E\u0434\u0441\u043A\u043E\u043A."
        },
        [D.Step.SPLIT]: {
          letter: "\u0428\u043F\u0430\u0433\u0430\u0442",
          image: "img/block-splits.svg",
          tooltip: "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u0442\u0435 \u0448\u043F\u0430\u0433\u0430\u0442."
        },
        [D.Step.SHAKE]: {
          letter: "\u0427\u0443\u043F\u043A\u0438 \u0432 \u043A\u0440\u044A\u0441\u0442\u0430",
          image: "img/block-hip-shake.svg",
          tooltip: "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u0442\u0435 \u0447\u0443\u043F\u043A\u0438 \u0432 \u043A\u0440\u044A\u0441\u0442\u0430."
        }
      };
      g(D.Step.LEFT_ARM);
      g(D.Step.RIGHT_ARM);
      g(D.Step.LEFT_FOOT);
      g(D.Step.RIGHT_FOOT);
      g(D.Step.JUMP);
      g(D.Step.SPLIT);
      g(D.Step.SHAKE);
    })();
    A.Blocks.when_run = {
      init: function () {
        this.contextMenu = !1;
        this.setHSV(26, .77, .96);
        this.appendDummyInput().appendField("\u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435");
        this.setNextStatement(!0);
      }
    };
    A.JavaScript.when_run = function () {
      return "\n";
    };
    A.Blocks.controls_repeat = {
      init: function () {
        this.contextMenu = !1;
        this.setHSV(187, 1, .753);
        this.appendDummyInput().appendField(new A.FieldImage("img/block-repeat.svg", 28, 32)).appendField(new A.FieldDropdown(a(2, 6)), "TIMES").appendField("\u043F\u044A\u0442\u0438");
        this.appendStatementInput("DO");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip("\u041F\u043E\u0432\u0442\u043E\u0440\u0435\u0442\u0435 \u043D\u044F\u043A\u043E\u0438 \u0442\u0432\u044A\u0440\u0434\u0435\u043D\u0438\u044F \u043F\u043E \u043D\u044F\u043A\u043E\u043B\u043A\u043E \u043F\u044A\u0442\u0438.");
      }
    };
    A.Blocks.controls_repeat_mini = {
      init: function () {
        this.contextMenu = !1;
        this.setHSV(187, 1, .753);
        this.appendDummyInput().appendField(new A.FieldImage("img/block-repeat.svg", 23, 32));
        this.setMini(!0);
        this.setTooltip("\u041F\u043E\u0432\u0442\u043E\u0440\u0435\u0442\u0435 \u043D\u044F\u043A\u043E\u0438 \u0442\u0432\u044A\u0440\u0434\u0435\u043D\u0438\u044F \u043F\u043E \u043D\u044F\u043A\u043E\u043B\u043A\u043E \u043F\u044A\u0442\u0438.");
      }
    };
    A.JavaScript.controls_repeat = function () {
      var a = Number(this.getFieldValue("TIMES")),
        d = A.JavaScript.statementToCode(this, "DO");
      A.JavaScript.INFINITE_LOOP_TRAP && (d = A.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + d);
      var f = A.JavaScript.variableDB_.getDistinctName("count", A.Variables.NAME_TYPE);
      return "for (var " + f + " = 0; " + f + " < " + a + "; " + f + "++) {\n" + d + "}\n";
    };
  };
  D.Blockly = function (a, c) {
    this.currentLevel = this.changeListener_ = null;
    this.el = a;
    this.game = c;
    this.layout = new D.BlocklyLayout(this, c);
    this.initBlockly_();
  };
  D.Blockly.prototype = {
    initBlockly_: function () {
      null != this.el && (D.blocks.install(), A.SNAP_RADIUS = 60, A.inject(this.el, {
        scrollbars: !1,
        path: "./img/",
        sounds: !1,
        toolbox: "<xml></xml>",
        toolboxLayout: this.layout.layoutToolbox.bind(this.layout),
        touch: !0
      }), D.Patterns.inject());
    },
    setLevel: function (a) {
      this.changeListener_ && (A.removeChangeListener(this.changeListener_), this.changeListener_ = null);
      this.currentLevel = a;
      A.updateToolbox(this.currentLevel.toolbox);
      this.resetToolboxScroll_();
      this.loadBlocks_();
      this.layout.scheduleLayout();
    },
    resetToolboxScroll_: function () {
      A.mainWorkspace.scrollX = A.mainWorkspace.flyout_.getWidth();
      A.RTL && (A.mainWorkspace.scrollX *= -1);
      var a = "translate(" + A.mainWorkspace.scrollX + ", 0)";
      A.mainWorkspace.getCanvas().setAttribute("transform", a);
      A.mainWorkspace.getBubbleCanvas().setAttribute("transform", a);
    },
    reflowToolbar: function () {
      A.mainWorkspace.flyout_.reflow();
    },
    getToolbarWidth: function () {
      return A.mainWorkspace.flyout_.getWidth();
    },
    loadBlocks_: function () {
      var a = A.Xml.textToDom(this.currentLevel.startBlocks);
      this.currentLevel.insertWhenRun && this.insertWhenRunBlock_(a);
      this.arrangeBlockPosition_(a);
      A.mainWorkspace.clear();
      A.Xml.domToWorkspace(A.mainWorkspace, a);
    },
    insertWhenRunBlock_: function (a) {
      var c = a.parentNode,
        d = c.createElement("block");
      d.setAttribute("type", "when_run");
      d.setAttribute("movable", "false");
      d.setAttribute("deletable", "false");
      for (var f = a.childNodes ? a.childNodes.length : 0, g = null, h = 0; h < f && null === g;) {
        var k = a.childNodes[h];
        1 === k.nodeType && (g = a.removeChild(k), f--);
        h++;
      }
      null !== g && (c = c.createElement("next"), c.appendChild(g), d.appendChild(c));
      0 < f ? a.insertBefore(d, a.childNodes[0]) : a.appendChild(d);
    },
    arrangeBlockPosition_: function (a) {
      for (var c = D.Constants.BLOCK_Y_COORDINATE, d = 0, f; a.childNodes && d < a.childNodes.length; d++) f = a.childNodes[d], 1 === f.nodeType && (f.setAttribute("x", f.getAttribute("x") || D.Constants.BLOCK_X_COORDINATE), f.setAttribute("y", f.getAttribute("y") || c), c = f.getAttribute("height") ? c + (+f.getAttribute("height") + 20) : c + D.Constants.BLOCK_Y_COORDINATE_INTERVAL);
    },
    highlightBlock: function (a) {
      if (a) {
        var c = a.match(/^block_id_(\d+)$/);
        c && (a = c[1]);
      }
      A.mainWorkspace.highlightBlock(a);
    },
    toggleExecution: function (a) {
      a || this.highlightBlock(null);
      A.mainWorkspace.traceOn(a);
    },
    getCode: function () {
      return A.JavaScript.workspaceToCode();
    },
    getUserCode: function () {
      var a = this.getCode();
      return a = a.replace(/(,\s*)?'block_id_\d+'/g, "").replace(/\s*api\.highlightLoop\('\d+'\);/gm, "").replace(/api\./g, "").replace(/\bcount2\b/g, "j").replace(/\bcount\b/g, "i").replace(/\s*$/gm, "");
    },
    getTopBlocks: function (a) {
      return A.mainWorkspace.getTopBlocks(a);
    },
    getUserBlocks: function () {
      return A.mainWorkspace.getAllBlocks().filter(function (a) {
        return !a.disabled && a.isEditable() && "when_run" !== a.type;
      });
    },
    getCountableBlocks: function () {
      return A.mainWorkspace.getAllBlocks().filter(function (a) {
        return !a.disabled && "when_run" !== a.type;
      });
    },
    hasEmptyContainerBlocks: function () {
      for (var a = A.mainWorkspace.getAllBlocks(), c = 0; c < a.length; c++) for (var d = a[c], f = 0; f < d.inputList.length; f++) {
        var g = d.inputList[f];
        if (g.type == A.NEXT_STATEMENT && !g.connection.targetConnection) return !0;
      }
      return !1;
    },
    hasExtraTopBlocks: function () {
      for (var a = A.mainWorkspace.getTopBlocks(!1), c = 0; c < a.length; c++) if (!a[c].disabled && a[c].previousConnection) return !0;
      return !1;
    },
    getMissingBlocks: function (a) {
      var c = [];
      if (!a.length) return c;
      for (var d = this.getUserBlocks(), f = 0; f < a.length; f++) {
        for (var g = a[f], h = !1, k = 0; k < d.length; k++) if (d[k].type === g) {
          h = !0;
          break;
        }
        h || c.push(g);
      }
      return c;
    }
  };
  D.Constants = {
    BLOCK_X_COORDINATE: 20,
    BLOCK_Y_COORDINATE: 24,
    BLOCK_Y_COORDINATE_INTERVAL: 170,
    BLOCKLY_MIN_WIDTH: 220,
    EDGE_MIN_WIDTH: 48,
    SCENE_TOGGLE_DURATION: 300,
    SCENE_TOGGLE_MIN_DRAG: 20
  };
  D.Result = class {
    constructor(a, c) {
      this.el = a;
      this.game = c;
      this.codeEl = a.querySelector(".result__code");
      this.detailsEl = a.querySelector(".result__details");
      this.graphicEl = a.querySelector(".result__graphic-type");
      this.missingBlockEl = a.querySelector(".result__missing-block");
      this.missingBlockImageEl = a.querySelector(".result__missing-block-image");
      this.shareButtonEl = a.querySelector(".result__button--share");
      this.retryButtonEl = a.querySelector(".result__button--retry");
      this.codeLinkEl = a.querySelector(".result__code-link");
      this.continueText = (this.continueButtonEl = a.querySelector(".result__button--continue")) && this.continueButtonEl.textContent;
      this.finishText = "\u041A\u0440\u0430\u0439";
      this.retryText = "\u041E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E";
      this.keepDancingText = "\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0430\u043D\u0446\u0430";
      this.shareUrl = null;
      this.defaultGraphic = this.graphicEl.getAttribute("xlink:href");
      this.bindEvents_();
    }
    bindEvents_() {
      this.retryButtonEl && this.retryButtonEl.addEventListener("click", this.onRetry.bind(this), !1);
      this.shareButtonEl && this.shareButtonEl.addEventListener("click", this.onShare.bind(this), !1);
      this.continueButtonEl && this.continueButtonEl.addEventListener("click", this.onContinue.bind(this), !1);
      this.codeLinkEl && this.codeLinkEl.addEventListener("click", this.onShowCode.bind(this), !1);
    }
    show(a) {
      this.detailsEl.style.display = a.message ? "block" : "none";
      this.detailsEl.textContent = a.message || "";
      this.retryButtonEl && (this.retryButtonEl.style.display = a.allowRetry ? "inline-block" : "none", this.retryButtonEl.textContent = a.freestyle ? this.keepDancingText : this.retryText);
      this.shareButtonEl && (this.shareButtonEl.style.display = a.shareUrl ? "inline-block" : "none", this.shareUrl = a.shareUrl);
      var c = a.missingBlocks[0];
      this.missingBlockEl.style.display = c ? "block" : "none";
      c && this.missingBlockImageEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#block-" + c);
      this.graphicEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.overlayGraphic || this.defaultGraphic);
      this.continueButtonEl && (this.continueButtonEl.textContent = a.isFinalLevel ? this.finishText : this.continueText);
      this.codeEl && (this.codeLinkEl.hidden = !a.code, this.codeEl.value = a.code || "");
      this.el.classList.remove("result--show-code");
      this.el.classList.add("is-visible");
    }
    hide() {
      this.el.classList.remove("is-visible");
    }
    onRetry() {
      this.hide();
      this.game.restartLevel();
    }
    onShare() {
      this.hide();
      this.game.share(this.shareUrl);
    }
    onContinue() {
      this.hide();
      this.game.bumpLevel();
    }
    onShowCode() {
      this.el.classList.add("result--show-code");
    }
  };
  D.AnimationData = () => ({
    clap_0: {
      width: 255,
      height: 346,
      offsetX: 450,
      offsetY: 153
    },
    clap_1: {
      width: 259,
      height: 347,
      offsetX: 446,
      offsetY: 153
    },
    floss_0: {
      width: 222,
      height: 345,
      offsetX: 449,
      offsetY: 154
    },
    floss_1: {
      width: 245,
      height: 342,
      offsetX: 465,
      offsetY: 157
    },
    floss_2: {
      width: 248,
      height: 343,
      offsetX: 454,
      offsetY: 156
    },
    floss_3: {
      width: 256,
      height: 343,
      offsetX: 454,
      offsetY: 156
    },
    hip_0: {
      width: 198,
      height: 350,
      offsetX: 468,
      offsetY: 150
    },
    hip_1: {
      width: 194,
      height: 349,
      offsetX: 486,
      offsetY: 150
    },
    hiphop_0: {
      width: 196,
      height: 345,
      offsetX: 476,
      offsetY: 154
    },
    hiphop_1: {
      width: 196,
      height: 309,
      offsetX: 476,
      offsetY: 190
    },
    hiphop_2: {
      width: 196,
      height: 309,
      offsetX: 476,
      offsetY: 190
    },
    hiphop_3: {
      width: 196,
      height: 334,
      offsetX: 476,
      offsetY: 165
    },
    idle_0: {
      width: 190,
      height: 348,
      offsetX: 481,
      offsetY: 151
    },
    jump_0: {
      width: 275,
      height: 459,
      offsetX: 441,
      offsetY: 40
    },
    jump_1: {
      width: 261,
      height: 457,
      offsetX: 437,
      offsetY: 42
    },
    mchammer_0: {
      width: 258,
      height: 345,
      offsetX: 414,
      offsetY: 154
    },
    mchammer_1: {
      width: 248,
      height: 309,
      offsetX: 360,
      offsetY: 190
    },
    mchammer_2: {
      width: 251,
      height: 313,
      offsetX: 368,
      offsetY: 186
    },
    mchammer_3: {
      width: 243,
      height: 343,
      offsetX: 429,
      offsetY: 156
    },
    pointLeft_0: {
      width: 194,
      height: 345,
      offsetX: 472,
      offsetY: 154
    },
    pointLeft_1: {
      width: 282,
      height: 345,
      offsetX: 459,
      offsetY: 156
    },
    pointRight_0: {
      width: 240,
      height: 345,
      offsetX: 474,
      offsetY: 154
    },
    pointRight_1: {
      width: 242,
      height: 340,
      offsetX: 474,
      offsetY: 159
    },
    pony_0: {
      width: 205,
      height: 363,
      offsetX: 464,
      offsetY: 136
    },
    pony_1: {
      width: 205,
      height: 363,
      offsetX: 464,
      offsetY: 136
    },
    pony_2: {
      width: 205,
      height: 363,
      offsetX: 464,
      offsetY: 136
    },
    pony_3: {
      width: 205,
      height: 364,
      offsetX: 464,
      offsetY: 135
    },
    pony_4: {
      width: 205,
      height: 345,
      offsetX: 464,
      offsetY: 154
    },
    splits_0: {
      width: 223,
      height: 345,
      offsetX: 443,
      offsetY: 144
    },
    splits_1: {
      width: 247,
      height: 367,
      offsetX: 433,
      offsetY: 144
    },
    splits_2: {
      width: 249,
      height: 354,
      offsetX: 421,
      offsetY: 172
    },
    splits_3: {
      width: 180,
      height: 346,
      offsetX: 486,
      offsetY: 154
    },
    stepLeft_0: {
      width: 305,
      height: 362,
      offsetX: 396,
      offsetY: 139
    },
    stepLeft_1: {
      width: 338,
      height: 387,
      offsetX: 328,
      offsetY: 112
    },
    stepRight_0: {
      width: 266,
      height: 345,
      offsetX: 478,
      offsetY: 154
    },
    stepRight_1: {
      width: 257,
      height: 344,
      offsetX: 493,
      offsetY: 155
    },
    watch_0: {
      width: 200,
      height: 346,
      offsetX: 466,
      offsetY: 153
    },
    watch_1: {
      width: 189,
      height: 345,
      offsetX: 476,
      offsetY: 154
    },
    fail_0: {
      width: 285,
      height: 346,
      offsetX: 411,
      offsetY: 153
    },
    fail_1: {
      width: 293,
      height: 328,
      offsetX: 409,
      offsetY: 171
    }
  });
  const E = {
    [D.Step.IDLE]: 12,
    [D.Step.FAIL]: 48,
    [D.Step.WATCH]: 48,
    [D.Step.LEFT_ARM]: 48,
    [D.Step.RIGHT_ARM]: 48,
    [D.Step.LEFT_FOOT]: 48,
    [D.Step.RIGHT_FOOT]: 48,
    [D.Step.JUMP]: 48,
    [D.Step.SHAKE]: 48,
    [D.Step.SPLIT]: 96,
    [D.Step.FLOSS]: 96,
    [D.Step.HIPHOP]: 96,
    [D.Step.MCHAMMER]: 96,
    [D.Step.PONY]: 104
  };
  D.Animation = class {
    constructor(a, c, d) {
      this.name = a;
      this.frame = 0;
      this.frameCount = E[a];
      this.frameDuration = 1E3 / 24 * (60 / c) * 2;
      this.elapsedTime = 0;
      this.paused = !0;
      this.data = d;
    }
    play() {
      this.frame = 0;
      this.paused = !1;
    }
    getFrame(a, c) {
      a = `${a}_${Math.floor(c / 24)}`;
      let d = this.data[a];
      if (!d) throw Error(`Missing data for ${a}`);
      return {
        x: c % 24 * d.width,
        y: 0,
        width: d.width,
        height: d.height,
        offsetX: d.offsetX - 265,
        offsetY: d.offsetY - 35,
        sprite: a
      };
    }
    update(a) {
      if (this.paused) return this.getFrame(this.name, this.frame);
      this.elapsedTime += a;
      this.elapsedTime > this.frameDuration && (a = Math.floor(this.elapsedTime / this.frameDuration), this.frame += a, this.frame %= this.frameCount, this.elapsedTime -= a * this.frameDuration);
      return this.getFrame(this.name, this.frame);
    }
  };
  D.Character = class {
    constructor(a, c) {
      this.currentState = this.animation = null;
      this.el = a;
      this.data = D.AnimationData();
      this.lastFrame = null;
      this.color = c;
      let d = document.createElement("canvas");
      d.width = 622;
      d.height = 578;
      a.appendChild(d);
      this.context = d.getContext("2d");
      this.images = {};
      this.renderSprites_(c);
    }
    renderSprites_(a) {
      Object.keys(this.data).forEach(c => {
        this.loadImage(c, a);
      });
    }
    loadImage(a, c) {
      let d = new Image();
      d.onload = () => {
        this.images[a] = d;
      };
      d.onerror = () => {
        d.onerror = null;
        setTimeout(() => {
          d.src += "?" + +new Date();
        }, 1E3);
      };
      d.src = `img/steps/${c}/${a}.png`;
    }
    update(a) {
      if (this.animation && (a = this.animation.update(a), a !== this.lastFrame)) {
        var c = this.images[a.sprite];
        c ? (this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height), this.context.drawImage(c, a.x, a.y, a.width, a.height, a.offsetX, a.offsetY, a.width, a.height)) : 0 === a.x && this.loadImage(a.sprite, this.color);
        this.lastFrame = a;
      }
    }
    setState(a) {
      a !== this.currentState && (this.currentState && this.el.classList.remove(this.currentState), this.currentState = a, this.el.classList.add(this.currentState));
    }
    play(a, c) {
      this.animation = new D.Animation(a, c, this.data);
      this.animation.play();
    }
    setColor(a) {
      this.color !== a && (this.color = a, this.renderSprites_(a));
    }
  };
  D.Level = class {
    constructor(a) {
      this.startBlocks = a.startBlocks || "";
      this.startBlocks.match(/^<xml/) || (this.startBlocks = "<xml>" + this.startBlocks + "</xml>");
      this.toolbox = a.toolbox || "";
      this.toolbox.match(/^<xml/) || (this.toolbox = "<xml>" + this.toolbox + "</xml>");
      this.insertWhenRun = !1;
      this.id = D.Level.idCounter++;
      this.type = null;
    }
    introAnimation() {}
    processResult() {}
    className() {
      return "level--" + this.type + " level--" + this.id;
    }
  };
  D.Level.idCounter = 0;
  D.LevelResult = class {
    constructor(a, c, d) {
      d = d || {};
      this.allowRetry = null == d.allowRetry ? !0 : d.allowRetry;
      this.code = d.code || null;
      this.skipAnimation = d.skipAnimation || !1;
      this.overlayGraphic = d.overlayGraphic || null;
      this.levelComplete = a;
      this.isFinalLevel = d.isFinalLevel || !1;
      this.message = c || "";
      this.missingBlocks = d.missingBlocks || [];
      d.idealBlockCount && (this.message = this.message.replace("{{ideal}}", d.idealBlockCount));
    }
    showResult() {
      return !0;
    }
  };
  const F = {
    [D.Step.LEFT_ARM]: "\u0421\u043E\u0447\u0435\u043D\u0435 \u043D\u0430\u043B\u044F\u0432\u043E",
    [D.Step.RIGHT_ARM]: "\u0421\u043E\u0447\u0435\u043D\u0435 \u043D\u0430\u0434\u044F\u0441\u043D\u043E",
    [D.Step.LEFT_FOOT]: "\u0421\u0442\u044A\u043F\u043A\u0430 \u043D\u0430\u043B\u044F\u0432\u043E",
    [D.Step.RIGHT_FOOT]: "\u0421\u0442\u044A\u043F\u043A\u0430 \u043D\u0430\u0434\u044F\u0441\u043D\u043E",
    [D.Step.JUMP]: "\u041F\u043E\u0434\u0441\u043A\u043E\u043A",
    [D.Step.SPLIT]: "\u0428\u043F\u0430\u0433\u0430\u0442",
    [D.Step.SHAKE]: "\u0427\u0443\u043F\u043A\u0438 \u0432 \u043A\u0440\u044A\u0441\u0442\u0430"
  };
  D.DanceStatus = {
    NO_STEPS: "NO_STEPS",
    NOT_ENOUGH_STEPS: "NOT_ENOUGH_STEPS",
    WRONG_STEPS: "WRONG_STEPS",
    TOO_MANY_STEPS: "TOO_MANY_STEPS",
    SUCCESS: "SUCCESS"
  };
  D.DanceLevel = class extends D.Level {
    constructor(a) {
      super(a);
      this.insertWhenRun = !0;
      this.type = "dance";
      this.freestyle = a.freestyle || !1;
      this.steps = a.steps;
      this.track = a.track;
      this.bpm = a.bpm;
      this.longerIntro = a.longerIntro || !1;
      this.stage = a.stage || "stage0";
      this.idealBlockCount = a.idealBlockCount || Infinity;
      this.requiredBlocks = a.requiredBlocks || [];
      this.fadeTiles = null == a.fadeTiles ? !0 : a.fadeTiles;
      this.ceilingLights = "stage2" === this.stage || "stage3" === this.stage;
      this.floorLights = "stage3" === this.stage;
      this.specialMove = a.specialMove;
    }
    introAnimation() {
      let a = D.DanceStatus.NO_STEPS,
        c = this.createAnimationQueue([], a),
        d = this.longerIntro ? 4 : 2;
      for (var f = 1; f < d; f++) c.unshift({
        teacherStep: D.Step.IDLE,
        playerStep: D.Step.IDLE,
        title: "\u0413\u043B\u0435\u0434\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u043D\u043E!",
        isIntro: !0
      });
      return new D.DanceLevelResult(!1, null, {
        animationQueue: c,
        danceStatus: a,
        endTitle: "\u0412\u0438\u0435 \u0441\u0442\u0435 \u043D\u0430 \u0445\u043E\u0434"
      });
    }
    processResult(a, c) {
      if (c.hasEmptyContainerBlocks()) return new D.DanceLevelResult(!1, "\u0411\u043B\u043E\u043A\u0447\u0435\u0442\u043E \u201E\u041F\u043E\u0432\u0442\u043E\u0440\u0435\u0442\u0435\u201C \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0434\u0440\u0443\u0433\u0438 \u0431\u043B\u043E\u043A\u0447\u0435\u0442\u0430 \u0432 \u0441\u0435\u0431\u0435 \u0441\u0438, \u0437\u0430 \u0434\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0430.", {
        skipAnimation: !0
      });
      if (c.hasExtraTopBlocks()) return new D.DanceLevelResult(!1, "\u041D\u044F\u043A\u043E\u0438 \u043E\u0442 \u0431\u043B\u043E\u043A\u0447\u0435\u0442\u0430\u0442\u0430 \u043D\u0435 \u0441\u0430 \u0437\u0430\u043A\u0440\u0435\u043F\u0435\u043D\u0438 \u0435\u0434\u043D\u043E \u0437\u0430 \u0434\u0440\u0443\u0433\u043E \u043F\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u043D\u0438\u044F \u043D\u0430\u0447\u0438\u043D.", {
        skipAnimation: !0
      });
      var d = a.filter(a => !!a.step).length;
      if (this.freestyle && d > D.DanceLevel.FREESTYLE_STEP_LIMIT) return new D.DanceLevelResult(!1, "\u041D\u0430\u043F\u0440\u0430\u0432\u0438\u0445\u0442\u0435 \u0442\u0432\u044A\u0440\u0434\u0435 \u043C\u043D\u043E\u0433\u043E \u0441\u0442\u044A\u043F\u043A\u0438.", {
        skipAnimation: !0
      });
      d = this.evaluateStatus(a);
      a = this.createAnimationQueue(a, d);
      var f = d === D.DanceStatus.SUCCESS,
        g = c.getUserCode(),
        h = c.getMissingBlocks(this.requiredBlocks);
      c = c.getCountableBlocks().length;
      var k = "";
      this.freestyle || (k = d === D.DanceStatus.NO_STEPS ? "\u0412\u0438\u0435 \u0441\u0442\u0435 \u043D\u0430 \u0445\u043E\u0434" : f ? "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F!" : "\u041E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E");
      var m = !0,
        n = null,
        p = this.serialize(a);
      h.length ? n = f ? "\u0417\u043D\u0430\u0435\u0442\u0435 \u043B\u0438, \u0447\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0442\u043E\u0437\u0438 \u0442\u0430\u043D\u0446 \u0441\u0430\u043C\u043E \u0441 {{ideal}} \u0431\u043B\u043E\u043A\u0447\u0435\u0442\u0430? \u041E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u0441 \u0442\u0435\u0437\u0438 \u043F\u043E-\u0434\u043E\u043B\u0443." : "\u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0431\u043B\u043E\u043A\u0447\u0435\u0442\u0430\u0442\u0430 \u043F\u043E-\u0434\u043E\u043B\u0443, \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0442\u0430\u043D\u0446\u0430." : f ? c > this.idealBlockCount ? n = "\u0417\u043D\u0430\u0435\u0442\u0435 \u043B\u0438, \u0447\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0442\u043E\u0437\u0438 \u0442\u0430\u043D\u0446 \u0441\u0430\u043C\u043E \u0441 {{ideal}} \u0431\u043B\u043E\u043A\u0447\u0435\u0442\u0430?" : this.freestyle ? (n = "\u0421\u043F\u043E\u0434\u0435\u043B\u0435\u0442\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F\u0442\u0430 \u0441\u0438 \u0438 \u043F\u0440\u0435\u0434\u0438\u0437\u0432\u0438\u043A\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u044F\u0442\u0435\u043B\u0438 \u0441\u0438", k = "\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0430\u043D\u0446\u0430") : m = !1 : n = Infinity !== this.idealBlockCount && c < this.idealBlockCount ? "\u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043D\u0438\u0442\u0435 \u0431\u043B\u043E\u043A\u0447\u0435\u0442\u0430, \u043D\u043E \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u043F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 \u0442\u044F\u0445, \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0442\u0430\u043D\u0446\u0430." : "\u041C\u0430\u0439 \u0441\u0435 \u0438\u0437\u0433\u0443\u0431\u0438\u0445\u0442\u0435!";
      return new D.DanceLevelResult(f, n, {
        allowRetry: m,
        animationQueue: a,
        code: g,
        endTitle: k,
        danceStatus: d,
        idealBlockCount: this.idealBlockCount,
        missingBlocks: h,
        freestyle: this.freestyle,
        shareUrl: p
      });
    }
    evaluateStatus(a) {
      if (this.freestyle) return 0 === a.length ? D.DanceStatus.NO_STEPS : D.DanceStatus.SUCCESS;
      let c = 0;
      for (let d = 0, f = null; f = a[d]; d++) if (f.step) {
        if (c >= this.steps.length) return D.DanceStatus.TOO_MANY_STEPS;
        if (f.step !== this.steps[c]) return a.splice(d + 1, a.length), D.DanceStatus.WRONG_STEPS;
        c++;
      }
      return 0 === c ? D.DanceStatus.NO_STEPS : c < this.steps.length ? D.DanceStatus.NOT_ENOUGH_STEPS : D.DanceStatus.SUCCESS;
    }
    createAnimationQueue(a, c) {
      let d = [];
      a = a.filter(a => a.step);
      this.freestyle && (this.steps = a.map(a => a.step));
      for (let c = 0, g = null; g = this.steps[c]; c++) {
        let f = a[c];
        d.push({
          teacherStep: g,
          playerStep: f ? f.step : "watch",
          tile: g,
          blockId: f && f.blockId,
          title: F[g] || "?"
        });
      }
      c === D.DanceStatus.WRONG_STEPS && (a.length === this.steps.length ? d.push({
        teacherStep: D.Step.WATCH,
        playerStep: D.Step.FAIL,
        title: "\u0410\u043C\u0438 \u0441\u0435\u0433\u0430!"
      }) : (d[a.length].playerStep = D.Step.FAIL, d[a.length].title = "\u0410\u043C\u0438 \u0441\u0435\u0433\u0430!"));
      c === D.DanceStatus.TOO_MANY_STEPS && (a = a[this.steps.length], d.push({
        teacherStep: D.Step.WATCH,
        playerStep: a.step,
        blockId: a.blockId,
        title: "\u0410\u043C\u0438 \u0441\u0435\u0433\u0430!"
      }), d.push({
        teacherStep: D.Step.WATCH,
        playerStep: D.Step.FAIL,
        title: "\u0410\u043C\u0438 \u0441\u0435\u0433\u0430!"
      }));
      c !== D.DanceStatus.SUCCESS || this.freestyle || (a = this.specialMove || D.Step.PONY, d.push({
        teacherStep: a,
        playerStep: a,
        title: "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F!"
      }));
      this.freestyle && c === D.DanceStatus.NO_STEPS || d.unshift({
        teacherStep: D.Step.IDLE,
        playerStep: D.Step.IDLE,
        title: c === D.DanceStatus.NO_STEPS ? "\u0413\u043B\u0435\u0434\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u043D\u043E!" : "\u0414\u0430 \u0442\u0430\u043D\u0446\u0443\u0432\u0430\u043C\u0435",
        isCountdown: !0,
        isIntro: !0
      });
      return d;
    }
    className() {
      return super.className() + " level--" + this.stage + " level--bpm" + this.bpm + (this.freestyle ? " level--freestyle" : "");
    }
    static deserialize(a) {
      let c = null,
        d = [];
      a = window.atob(a);
      for (let f = 0; f < a.length; f++) if (parseInt(a[f], 16), 0 === f) {
        if (c = D.DanceLevel.SERIALIZE_LEVELS[parseInt(a[f], 16)], null == c) return null;
      } else if (f < D.DanceLevel.FREESTYLE_STEP_LIMIT + 1) {
        let c = D.DanceLevel.SERIALIZE_STEPS[parseInt(a[f], 16)];
        if (null == c) return null;
        d.push(c);
      } else return null;
      return new D.DanceLevel({
        bpm: c.bpm,
        track: c.track,
        longerIntro: !0,
        stage: c.stage,
        steps: d,
        toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("dance_splits") + D.blocks.miniBlockXml("dance_hip") + D.blocks.miniBlockXml("controls_repeat"),
        specialMove: c.specialMove
      });
    }
    serialize(a) {
      const c = D.DanceLevel.SERIALIZE_LEVELS.findIndex(a => a.stage == this.stage);
      a = a.map(a => D.DanceLevel.SERIALIZE_STEPS.indexOf(a.teacherStep)).filter(a => 0 <= a);
      return this.freestyle && 0 !== a.length ? btoa(c + a.join("")) : null;
    }
  };
  D.DanceLevel.SERIALIZE_STEPS = [D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.LEFT_FOOT, D.Step.RIGHT_FOOT, D.Step.JUMP, D.Step.SPLIT, D.Step.SHAKE];
  D.DanceLevel.SERIALIZE_LEVELS = [{
    stage: "stage1",
    bpm: 120,
    track: 0,
    specialMove: D.Step.PONY
  }, {
    stage: "stage2",
    bpm: 130,
    track: 1,
    specialMove: D.Step.HIPHOP
  }, {
    stage: "stage3",
    bpm: 140,
    track: 2,
    specialMove: D.Step.FLOSS
  }];
  D.DanceLevel.FREESTYLE_STEP_LIMIT = 32;
  D.DanceLevelResult = class extends D.LevelResult {
    constructor(a, c, d) {
      d = d || {};
      super(a, c, d);
      this.animationQueue = d.animationQueue || [];
      this.danceStatus = d.danceStatus || D.DanceStatus.NO_STEPS;
      this.freestyle = d.freestyle || !1;
      this.endTitle = d.endTitle;
      this.shareUrl = d.shareUrl;
    }
    watching() {
      return this.freestyle ? !1 : this.danceStatus === D.DanceStatus.NO_STEPS;
    }
    showResult() {
      return this.freestyle && 0 === this.animationQueue.length ? !1 : this.skipAnimation || !this.watching();
    }
  };
  D.Lights = class {
    constructor(a) {
      this.floorActive = this.ceilingActive = !1;
      this.whiteBeams = Array.from(a.querySelectorAll(".ceilingLight__beam--white"));
      this.redBeams = Array.from(a.querySelectorAll(".ceilingLight__beam--red"));
      this.greenBeams = Array.from(a.querySelectorAll(".ceilingLight__beam--green"));
      this.tiles = [];
      a = a.querySelector(".scene__tiles");
      for (let c = 0; 9 > c; c++) {
        let d = document.createElement("div");
        d.classList.add("scene__light");
        d.style.backgroundImage = `url(img/lights/disco_${c + 1}.svg)`;
        d.style.opacity = 0;
        a.appendChild(d);
        this.tiles.push(d);
      }
    }
    setLevel(a) {
      this.ceilingActive = a.ceilingLights;
      this.floorActive = a.floorLights;
    }
    onBeat(a, c, d) {
      this.floorActive && (this.shuffle_(this.tiles), this.tiles.forEach((a, c) => {
        a.style.opacity = 4 > c ? 1 : 0;
      }));
      this.ceilingActive && (this.whiteBeams.forEach(a => {
        a.style.opacity = d ? 0 : 1;
      }), [this.redBeams[0], this.greenBeams[1], this.greenBeams[0], this.redBeams[1]].forEach((c, g) => {
        c.style.opacity = d && a % 4 === g ? 1 : 0;
      }));
    }
    shuffle_(a) {
      for (var c = a.length - 1; 0 < c; c--) {
        var d = Math.floor(Math.random() * (c + 1)),
          f = a[c];
        a[c] = a[d];
        a[d] = f;
      }
      return a;
    }
  };
  D.MoveTiles = class {
    constructor(a) {
      this.el = a;
      this.fadeTiles = !0;
    }
    setLevel(a) {
      this.fadeTiles = a.fadeTiles;
      this.setLength(a.steps.length);
    }
    setLength(a) {
      a = a ? Math.min(a, 4) : 4;
      this.el.style.width = `${124 * a / 10}em`;
      this.el.style.left = `calc(50% + ${a / 2 * 124 / 10}em + 0.5em)`;
    }
    add(a) {
      var c = document.createElement("div");
      c.className = `scene__moves-move fade-in move__${a}`;
      this.el.appendChild(c);
      a = Array.from(this.el.querySelectorAll(".scene__moves-move"));
      c = a.length;
      this.el.style.transform = `translate3d(-${124 * c / 10}em, 0, 0)`;
      this.el.style.transitionDuration = 1 === c ? "0s" : "";
      4 < c && a.slice(0, c - 4).forEach(a => {
        a.classList.add("fade-out");
      });
    }
    reset() {
      this._removeTiles();
    }
    clear() {
      this.fadeTiles && this._removeTiles();
    }
    _removeTiles() {
      Array.from(this.el.querySelectorAll(".scene__moves-move")).forEach(a => {
        a.classList.add("fade-out");
      });
      setTimeout(() => {
        for (; this.el.hasChildNodes();) this.el.removeChild(this.el.lastChild);
      }, 200);
    }
  };
  D.Title = class {
    constructor(a) {
      this.titleEl = a;
      this.currentText = this.subTextEl = this.textEl = null;
      this.currentSmallness = !1;
      this.currentCount = 0;
      this.toRemove = [];
    }
    setTitle(a, c, d) {
      0 < d && (this.currentCount = d);
      this.currentText = a;
      this.currentSmallness = c;
      this.updateTitle_();
    }
    updateTitle_() {
      let a = 0 < this.currentCount ? this.currentCount : null;
      this.textEl = this.switchText_(this.textEl, this.currentText, this.currentSmallness ? "title title--small" : "title");
      this.subTextEl = this.switchText_(this.subTextEl, a, "title title--small title--sub");
    }
    switchText_(a, c, d) {
      let f = a ? c !== a.textContent : c;
      a && f && (a.className += " title--destroy", this.toRemove.push(a), a = null);
      c && f && (a = document.createElement("span"), a.textContent = c, a.className = d, this.titleEl.appendChild(a));
      return a;
    }
    onBeat() {
      let a;
      for (; a = this.toRemove.pop();) this.titleEl.removeChild(a);
      0 < this.currentCount && (this.currentCount++, this.updateTitle_(), this.currentCount %= 4);
    }
  };
  class G {
    constructor() {
      this.handlers = new Map();
    }
    addEventListener(a, c) {
      this.handlers.has(a) || this.handlers.set(a, new Set());
      this.handlers.get(a).add(c);
    }
    listen(a, c) {
      return this.addEventListener(a, c);
    }
    dispatchEvent({
      type: a,
      data: c
    }) {
      const d = {
        type: a,
        data: c
      };
      (this.handlers.get(a) || []).forEach(a => a(d));
    }
  }
  D.AnimationPlayer = class extends G {
    constructor(a) {
      super();
      this.el = a;
      this.player = new D.Character(a.querySelector(".scene__character--player"), "red");
      this.teacher = new D.Character(a.querySelector(".scene__character--teacher"), "green");
      this.title = new D.Title(a.querySelector(".scene__word-title"));
      this.moveTiles = new D.MoveTiles(a.querySelector(".scene__moves"));
      this.lastResult = null;
      this.lights = new D.Lights(a.querySelector(".scene__lights"));
      this.animationQueue = [];
      this.currentAnimation = null;
      this.lastUpdateTime = 0;
      this.isPlaying = !1;
      this.bpm = 0;
      this.update(0);
    }
    update(a) {
      let c = a - this.lastUpdateTime;
      this.player.update(c);
      this.teacher.update(c);
      this.lastUpdateTime = a;
      window.requestAnimationFrame(a => this.update(a));
    }
    start(a) {
      a.freestyle && this.moveTiles.setLength(a.animationQueue.length - 1);
      this.lastResult = a;
      this.animationQueue = a.animationQueue.slice();
      this.moveTiles.reset();
      this.title.setTitle(this.animationQueue[0] && this.animationQueue[0].title, !0);
      a.watching() && (this.player.setState("is-watching"), this.teacher.setState("is-showing"));
      if (0 === this.animationQueue.length) this.onFinish_();
    }
    onFinish_() {
      this.dispatchEvent({
        type: "finish"
      });
      this.moveTiles.clear();
      this.isPlaying = !1;
      this.player.setState(null);
      this.teacher.setState(null);
    }
    onMusicBar() {
      let a = this.currentAnimation;
      if (a) a.isCountdown && (this.dispatchEvent({
        type: "start"
      }), this.isPlaying = !0), a.tile && this.moveTiles.add(a.tile), a.teacherStep !== D.Step.IDLE && (a.playerStep === a.teacherStep ? l.triggerEvent("cb_ingame_win") : a.playerStep === D.Step.FAIL && l.triggerEvent("cb_ingame_fail")), a.isCountdown && !this.title.currentCount && this.title.setTitle(a.title, !0, 2), this.dispatchEvent({
        type: "step",
        data: a.blockId
      });else if (this.isPlaying) this.onFinish_();
    }
    onAnimationBar(a) {
      let c = this.animationQueue[0];
      c ? (this.teacher.play(c.teacherStep, a), this.player.play(c.playerStep, a), this.title.setTitle(c.title, c.isIntro, c.isCountdown ? 1 : null)) : (this.teacher.play(D.Step.IDLE, a), this.player.play(D.Step.IDLE, a), this.title.setTitle(this.lastResult && this.lastResult.endTitle));
    }
    onBeat(a, c) {
      const d = a % 4 + 1;
      this.title.onBeat();
      1 === d && (this.currentAnimation = this.animationQueue.shift(), this.onMusicBar());
      if (4 === d) this.onAnimationBar(c);
      this.currentAnimation && this.currentAnimation.isCountdown && l.triggerEvent(`cb_count_in_${d}`);
      this.lights.onBeat(a, c, this.isPlaying && this.currentAnimation && !this.currentAnimation.isCountdown);
    }
    setLevel(a) {
      this.moveTiles.setLevel(a);
      this.lights.setLevel(a);
      this.player.setColor(a.freestyle ? "green" : "red");
    }
  };
  D.shared = {};
  D.shared.utils = function () {
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
      animWithClass: function (a, d, f) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(d);
          const c = () => {
            a.classList.remove(d);
            a.removeEventListener("animationend", c);
            a.removeEventListener("transitionend", c);
            f && (f(), f = null);
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
        let f;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = c.getPropertyValue(a + "transform");
          if (!a) return !1;
          f = a;
          return !0;
        });
        if ("none" === f) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let g;
        try {
          g = f.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (h) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: g[4],
          y: g[5],
          rotate: 180 / Math.PI * Math.atan2(g[1], g[0])
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
  D.ResultType = {
    UNSET: "UNSET",
    SUCCESS: "SUCCESS",
    TIMEOUT: "TIMEOUT",
    ERROR: "ERROR"
  };
  D.BlockRunnerState = {
    NOT_ANIMATING: "NOT_ANIMATING",
    ANIMATING: "ANIMATING"
  };
  D.BlockRunner = class {
    constructor(a, c) {
      this.api = this.createExecuteContext();
      this.blockly = c;
      this.scene = a;
      this.levelResult = null;
      A.JavaScript.INFINITE_LOOP_TRAP = "  api.highlightLoop(%1);\n";
      a.player.addEventListener("step", this.onStep_.bind(this));
      a.player.addEventListener("finish", this.onFinishAnimations_.bind(this));
      this.reset_();
    }
    reset_() {
      this.stepQueue_ = [];
      this.state_ = D.BlockRunnerState.NOT_ANIMATING;
      this.levelResult = null;
    }
    execute() {
      this.reset_();
      var a = this.blockly.getCode();
      try {
        this.evalWith_(a, this.api);
      } catch (c) {
        console.warn(c);
      }
      this.runAnimation(this.scene.level.processResult(this.stepQueue_, this.blockly));
    }
    runAnimation(a) {
      this.levelResult = a;
      this.levelResult.skipAnimation ? this.reportExecution_() : this.runAnimations_();
    }
    beforeAnimations_() {
      this.blockly.toggleExecution(!0);
    }
    onStep_(a) {
      this.blockly.highlightBlock(a.data);
    }
    onFinishAnimations_() {
      this.state_ !== D.BlockRunnerState.NOT_ANIMATING && (this.reportExecution_(), this.blockly.toggleExecution(!1), this.state_ = D.BlockRunnerState.NOT_ANIMATING);
    }
    reportExecution_() {
      this.scene.onFinishExecution(this.levelResult);
    }
    runAnimations_() {
      this.beforeAnimations_();
      this.state_ = D.BlockRunnerState.ANIMATING;
      this.scene.player.start(this.levelResult);
    }
    restartLevel() {
      this.state_ = D.BlockRunnerState.NOT_ANIMATING;
    }
    evalWith_(a, c) {
      function d() {
        return Function.apply(this, f);
      }
      var f = [],
        g = [],
        h;
      for (h in c) c.hasOwnProperty(h) && (f.push(h), g.push(c[h]));
      f.push(a);
      d.prototype = Function.prototype;
      return new d().apply(null, g);
    }
    createExecuteContext() {
      const a = a => c => this.stepQueue_.push({
          step: a,
          blockId: c
        }),
        c = a => this.stepQueue_.push({
          blockId: a
        });
      return {
        api: {
          pointLeft: a(D.Step.LEFT_ARM),
          pointRight: a(D.Step.RIGHT_ARM),
          stepLeft: a(D.Step.LEFT_FOOT),
          stepRight: a(D.Step.RIGHT_FOOT),
          jump: a(D.Step.JUMP),
          splits: a(D.Step.SPLIT),
          hip: a(D.Step.SHAKE),
          highlightLoop: a => c(a)
        }
      };
    }
  };
  D.BlockRunner.INJECTED_HIGHLIGHT_DURATION = 150;
  D.InputEvent = {};
  (function () {
    let a = "mousedown",
      c = "mousemove",
      d = "mouseup mouseout",
      f = "mouseup";
    window.PointerEvent ? (a = "pointerdown", c = "pointermove", d = "pointerup pointerout", f = "pointerup") : D.shared.utils.touchEnabled && (a += " touchstart", c += " touchmove", d += " touchend touchleave touchcancel", f += " touchend");
    D.InputEvent = {
      CANCEL: d,
      START: a,
      MOVE: c,
      END: f,
      normalize(a) {
        a = a.originalEvent ? a.originalEvent : a;
        return a = a.touches ? a.touches[0] : a;
      }
    };
  })();
  D.Scene = class {
    constructor(a, c, d) {
      this.blockly_ = d;
      this.player = new D.AnimationPlayer(a);
      this.blockRunner_ = new D.BlockRunner(this, d);
      this.cachedWindowWidth_ = this.cachedWindowHeight_ = null;
      this.el_ = a;
      this.game = c;
      this.level = null;
      this.portraitMode_ = !1;
      this.scaleRatio_ = 1;
      this.visible_ = !1;
      this.width_ = 0;
      this.parentEl_ = a.parentNode;
      this.underlayEl_ = a.parentNode.querySelector(".scene-underlay");
      this.charactersEl_ = a.querySelector(".scene__characters");
      this.buttonEl_ = a.querySelector(".scene__play");
      this.calculateViewport_ = this.calculateViewport_.bind(this);
      this.onClickRun_ = this.onClickRun_.bind(this);
      this.onClickScene_ = this.onClickScene_.bind(this);
      this.onClickUnderlay_ = this.onClickUnderlay_.bind(this);
      window.addEventListener("resize", this.calculateViewport_, !1);
      window.requestAnimationFrame(() => this.calculateViewport_(!0));
      this.calculateViewport_();
      this.buttonEl_.addEventListener("click", this.onClickRun_, !1);
      this.el_.addEventListener("click", this.onClickScene_, !1);
      this.underlayEl_.addEventListener("click", this.onClickUnderlay_, !1);
    }
    dispose() {
      window.removeEventListener("resize", this.calculateViewport_, !1);
      this.buttonEl_.removeEventListener("click", this.onClickRun_, !1);
      this.el_.removeEventListener("click", this.onClickScene_, !1);
      this.underlayEl_.removeEventListener("click", this.onClickUnderlay_, !1);
    }
    reset() {
      this.level = null;
    }
    getPortraitMode() {
      return this.portraitMode_;
    }
    setLevel(a) {
      this.level = a;
      this.player.setLevel(a);
      this.portraitToggleScene(!0);
      (a = !a.freestyle && a.introAnimation()) ? this.blockRunner_.runAnimation(a) : this.showTutorials_();
    }
    restartLevel() {
      this.blockRunner_.restartLevel();
    }
    calculateViewport_(a = !1) {
      if (a || window.innerHeight !== this.cachedWindowHeight_ || window.innerWidth !== this.cachedWindowWidth_) {
        this.cachedWindowHeight_ = window.innerHeight;
        this.cachedWindowWidth_ = window.innerWidth;
        a = window.innerHeight;
        var c = a * Math.max(Math.min(window.innerWidth / 2 / a, D.Scene.CONTENT_ASPECT_RATIO_MAX), D.Scene.CONTENT_ASPECT_RATIO_MIN),
          d = !1;
        window.innerWidth - this.blockly_.getToolbarWidth() - c < D.Constants.BLOCKLY_MIN_WIDTH && (d = !0, c = window.innerWidth - D.Constants.EDGE_MIN_WIDTH);
        this.portraitMode_ = d;
        this.parentEl_.classList.toggle("responsive", this.portraitMode_);
        this.width_ = c;
        this.scaleRatio_ = Math.min(c / 540, a / D.Scene.CONTENT_HEIGHT);
        this.el_.style.fontSize = 10 * this.scaleRatio_ + "px";
        this.el_.style.width = c + "px";
        this.charactersEl_.style.transform = "scale(" + Math.min(1, this.scaleRatio_) + ")";
      }
    }
    onClickScene_() {
      this.portraitToggleScene(!0, !0);
    }
    onClickUnderlay_() {
      this.portraitToggleScene(!1, !0);
    }
    portraitToggleScene(a, c) {
      c && this.game.dismissTutorial("codeboogie_tray.mp4");
      this.parentEl_.classList.toggle("show", !a);
    }
    onClickRun_(a) {
      a.stopPropagation();
      this.buttonEl_.blur();
      this.game.dismissTutorial();
      this.portraitMode_ ? (this.portraitToggleScene(!0), window.setTimeout(() => this.blockRunner_.execute(), D.Constants.SCENE_TOGGLE_DURATION)) : (this.blockRunner_.execute(), l.triggerEvent("generic_button_click"));
    }
    showTutorials_() {
      const a = ["codeboogie.gif"];
      this.portraitMode_ && a.unshift("codeboogie_tray.mp4");
      this.game.showTutorial(a);
    }
    onFinishExecution(a) {
      a.showResult() ? (this.level === this.game.levels[this.game.levels.length - 1] && (a.isFinalLevel = !0), a.levelComplete ? (l.triggerEvent("cb_win"), this.game.successResult.show(a)) : (l.triggerEvent("cb_fail"), this.game.failureResult.show(a))) : this.showTutorials_();
    }
    getWidth() {
      return this.visible_ ? this.portraitMode_ ? D.Constants.EDGE_MIN_WIDTH : this.width_ : 0;
    }
    toggleVisibility(a) {
      this.visible_ = a;
      this.el_.hidden = !a;
      this.underlayEl_.hidden = !a;
    }
  };
  D.Scene.CONTENT_HEIGHT = 800;
  D.Scene.CONTENT_ASPECT_RATIO_MAX = 1;
  D.Scene.CONTENT_ASPECT_RATIO_MIN = .5;
  D.Scene.SCENE_PADDING = 20;
  D.freestyleLevel = {};
  D.Levels = {
    getDanceClasses: () => H,
    createFreestyleLevel(a) {
      a = {
        studio: {
          stage: "stage1",
          track: 0,
          bpm: 120
        },
        stage: {
          stage: "stage2",
          track: 1,
          bpm: 130
        },
        disco: {
          stage: "stage3",
          track: 2,
          bpm: 140
        }
      }[a];
      return [new D.DanceLevel({
        freestyle: !0,
        bpm: a.bpm,
        track: a.track,
        idealBlockCount: Infinity,
        stage: a.stage,
        steps: [],
        toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("dance_splits") + D.blocks.miniBlockXml("dance_hip") + D.blocks.miniBlockXml("controls_repeat"),
        specialMove: D.Step.PONY
      })];
    }
  };
  const H = [new D.DanceLevel({
    bpm: 120,
    track: 0,
    idealBlockCount: 2,
    longerIntro: !0,
    stage: "stage1",
    steps: [D.Step.LEFT_ARM, D.Step.RIGHT_ARM],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight"),
    fadeTiles: !1,
    specialMove: D.Step.PONY
  }), new D.DanceLevel({
    bpm: 120,
    track: 0,
    idealBlockCount: 4,
    stage: "stage1",
    steps: [D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.LEFT_FOOT, D.Step.RIGHT_FOOT],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight"),
    fadeTiles: !1,
    specialMove: D.Step.PONY
  }), new D.DanceLevel({
    bpm: 120,
    track: 0,
    idealBlockCount: 6,
    stage: "stage1",
    steps: [D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.LEFT_FOOT, D.Step.RIGHT_FOOT, D.Step.LEFT_FOOT, D.Step.RIGHT_FOOT],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.PONY,
    startBlocks: D.blocks.blockXml("controls_repeat", null, {
      TIMES: "2"
    }, D.blocks.blockXml("dance_pointLeft", null, null, null, D.blocks.blockXml("dance_pointRight")))
  }), new D.DanceLevel({
    bpm: 130,
    track: 1,
    idealBlockCount: 5,
    longerIntro: !0,
    stage: "stage2",
    steps: [D.Step.JUMP, D.Step.LEFT_ARM, D.Step.JUMP, D.Step.RIGHT_ARM, D.Step.JUMP, D.Step.LEFT_ARM, D.Step.JUMP, D.Step.RIGHT_ARM],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.HIPHOP
  }), new D.DanceLevel({
    bpm: 130,
    track: 1,
    idealBlockCount: 5,
    stage: "stage2",
    steps: [D.Step.JUMP, D.Step.RIGHT_FOOT, D.Step.LEFT_ARM, D.Step.LEFT_FOOT, D.Step.JUMP, D.Step.RIGHT_FOOT, D.Step.LEFT_ARM, D.Step.LEFT_FOOT],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.HIPHOP
  }), new D.DanceLevel({
    bpm: 130,
    track: 1,
    idealBlockCount: 7,
    stage: "stage2",
    steps: [D.Step.JUMP, D.Step.SPLIT, D.Step.JUMP, D.Step.SPLIT, D.Step.RIGHT_FOOT, D.Step.LEFT_ARM, D.Step.JUMP, D.Step.SPLIT],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("dance_splits") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.HIPHOP
  }), new D.DanceLevel({
    bpm: 140,
    track: 2,
    idealBlockCount: 6,
    longerIntro: !0,
    stage: "stage3",
    steps: [D.Step.SHAKE, D.Step.SHAKE, D.Step.SHAKE, D.Step.SHAKE, D.Step.JUMP, D.Step.RIGHT_FOOT, D.Step.LEFT_FOOT, D.Step.SHAKE],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("dance_splits") + D.blocks.miniBlockXml("dance_hip") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.FLOSS
  }), new D.DanceLevel({
    bpm: 140,
    track: 2,
    idealBlockCount: 8,
    stage: "stage3",
    steps: [D.Step.RIGHT_FOOT, D.Step.JUMP, D.Step.SHAKE, D.Step.LEFT_ARM, D.Step.LEFT_FOOT, D.Step.JUMP, D.Step.SPLIT, D.Step.RIGHT_ARM],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("dance_splits") + D.blocks.miniBlockXml("dance_hip") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.FLOSS
  }), new D.DanceLevel({
    bpm: 140,
    track: 2,
    idealBlockCount: 10,
    stage: "stage3",
    steps: [D.Step.SHAKE, D.Step.LEFT_FOOT, D.Step.JUMP, D.Step.RIGHT_FOOT, D.Step.SHAKE, D.Step.LEFT_FOOT, D.Step.JUMP, D.Step.RIGHT_FOOT, D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.LEFT_ARM, D.Step.RIGHT_ARM, D.Step.JUMP, D.Step.SPLIT],
    toolbox: D.blocks.miniBlockXml("dance_pointLeft") + D.blocks.miniBlockXml("dance_pointRight") + D.blocks.miniBlockXml("dance_stepLeft") + D.blocks.miniBlockXml("dance_stepRight") + D.blocks.miniBlockXml("dance_jump") + D.blocks.miniBlockXml("dance_splits") + D.blocks.miniBlockXml("dance_hip") + D.blocks.miniBlockXml("controls_repeat"),
    specialMove: D.Step.FLOSS
  })];
  D.monkeypatches = {};
  e.dom.vendor.getVendorJsPrefix = function () {
    return e.userAgent.WEBKIT ? "webkit" : e.userAgent.GECKO ? "moz" : e.userAgent.IE ? "ms" : e.userAgent.OPERA ? "O" : null;
  };
  D.Sequencer = class {
    constructor(a) {
      this._active = !1;
      this._bpm = this._variant = 0;
      this._playScheduled = -1;
      this._callback = a;
      this._playAt = 0;
      this._beat = -1;
      this._update = this._update.bind(this);
    }
    setTrack(a, c) {
      this._track = a;
      this._bpm = c;
      this._variant = 0;
      this._play();
    }
    setVariant(a) {
      this._variant = a;
      this._playScheduled = 4 * (Math.floor(this._beat / 4) + 1);
    }
    _play() {
      this._playScheduled = -1;
      this._playAt = performance.now();
      window.santaApp.fire("sound-trigger", "codeboogie_play_track", 2 * this._track + this._variant);
    }
    start() {
      this._active || (this._active = !0, this._update());
    }
    _update() {
      window.requestAnimationFrame(this._update);
      var a = (performance.now() - this._playAt) / 1E3;
      a = Math.max(0, Math.floor(a / (60 / this._bpm)));
      isNaN(a) && (a = -1);
      if (0 <= this._playScheduled && this._playScheduled <= a) this._play(), a = 0;else if (this._beat === a) return;
      this._beat = a;
      this._callback(this._beat, this._bpm);
    }
  };
  D.GameMode = {
    TEACHER: "teacher",
    FREESTYLE: "freestyle",
    CUSTOM: "custom"
  };
  D.Game = class {
    constructor(a) {
      this.blockly = new D.Blockly(a.querySelector(".blockly"), this);
      this.elem = a;
      this.currentMode = this.level = this.levelNumber = null;
      this.isPlaying = !1;
      const c = a.querySelector(".result--success");
      this.successResult = new D.Result(c, this);
      this.failureResult = new D.Result(a.querySelector(".result--failure"), this);
      this.scene = new D.Scene(a.querySelector(".scene"), this, this.blockly);
      this.sequencer = new D.Sequencer((a, c) => this.scene.player.onBeat(a, c));
      this.scene.player.listen("start", () => this.sequencer.setVariant(1));
      this.scene.player.listen("finish", () => this.sequencer.setVariant(0));
      this.dismissBlocklyTutorial = () => this.dismissTutorial("codeboogie.gif");
      document.body.addEventListener("blocklyDragBlock", this.dismissBlocklyTutorial, !1);
    }
    dispose_() {
      document.body.removeEventListener("blocklyDragBlock", this.dismissBlocklyTutorial, !1);
      this.scene.dispose();
    }
    bumpLevel() {
      this.levelNumber++;
      (this.level = this.levels[this.levelNumber]) ? (this.currentMode === D.GameMode.TEACHER && window.santaApp.fire("game-score", {
        level: this.levelNumber + 1,
        maxLevel: this.levels.length
      }), this.sequencer.setTrack(this.level.track, this.level.bpm), this.elem.className = this.level.className(), this.blockly.setLevel(this.level), this.scene.setLevel(this.level), this.scene.toggleVisibility(!0)) : this.currentMode === D.GameMode.TEACHER ? window.santaApp.fire("game-stop", {
        level: this.levelNumber
      }) : this.restart(D.GameMode.TEACHER);
    }
    showTutorial(a = []) {
      window.santaApp.fire("tutorial-queue", a);
    }
    dismissTutorial(a) {
      window.santaApp.fire("tutorial-dismiss", [a]);
    }
    restartLevel() {
      this.scene.restartLevel();
    }
    share(a) {
      window.santaApp.fire("game-data", {
        dance: a
      });
      window.santaApp.fire("game-stop");
    }
    start() {
      this.sequencer.start();
    }
    restart(a, c) {
      if (a !== D.GameMode.FREESTYLE || this.currentMode !== a) {
        this.levelNumber = -1;
        this.currentMode = a || D.GameMode.TEACHER;
        if (a === D.GameMode.FREESTYLE) this.levels = D.Levels.createFreestyleLevel(c);else if (a === D.GameMode.CUSTOM) {
          if (a = D.DanceLevel.deserialize(c)) this.levels = [a];
        } else {
          this.levels = D.Levels.getDanceClasses();
          this.levelNumber = ~~(+c - 1 || 0);
          if (0 > this.levelNumber || this.levelNumber >= this.levels.length) this.levelNumber = 0;
          this.levelNumber--;
        }
        this.scene.reset();
        this.bumpLevel();
      }
    }
  };
  _globalExport = D.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('codeboogie_load_sounds');
sceneApi.preload.images('img/choose-mode/mode-class.svg', 'img/choose-mode/mode-freestyle.svg', 'img/stages/stage1.svg', 'img/stages/stage2.svg', 'img/stages/stage3.svg', 'img/blank.png', 'img/block-hip-shake.svg', 'img/block-jump.svg', 'img/block-point-left.svg', 'img/block-point-right.svg', 'img/block-repeat.svg', 'img/block-splits.svg', 'img/block-step-left.svg', 'img/block-step-right.svg', 'img/icons_hip-shake-white.svg', 'img/icons_jump-white.svg', 'img/icons_point-left-white.svg', 'img/icons_point-right-white.svg', 'img/icons_splits-white.svg', 'img/icons_step-left-white.svg', 'img/icons_step-right-white.svg', 'img/lights/ceiling-light--green.svg', 'img/lights/ceiling-light--red.svg', 'img/lights/ceiling-light.svg', 'img/lights/ceiling.svg', 'img/lights/disco_1.svg', 'img/lights/disco_2.svg', 'img/lights/disco_3.svg', 'img/lights/disco_4.svg', 'img/lights/disco_5.svg', 'img/lights/disco_6.svg', 'img/lights/disco_7.svg', 'img/lights/disco_8.svg', 'img/lights/disco_9.svg', 'img/loading.png', 'img/logo.svg', 'img/madewithcode.svg', 'img/media/handclosed.cur', 'img/media/handopen.cur', 'img/queue-hip-shake.svg', 'img/queue-jump.svg', 'img/queue-point-left.svg', 'img/queue-point-right.svg', 'img/queue-splits.svg', 'img/queue-step-left.svg', 'img/queue-step-right.svg', 'img/stages/stage1.svg', 'img/stages/stage2.svg', 'img/stages/stage3.svg', 'img/steps/green/clap_0.png', 'img/steps/green/clap_1.png', 'img/steps/green/fail_0.png', 'img/steps/green/fail_1.png', 'img/steps/green/floss_0.png', 'img/steps/green/floss_1.png', 'img/steps/green/floss_2.png', 'img/steps/green/floss_3.png', 'img/steps/green/hip_0.png', 'img/steps/green/hip_1.png', 'img/steps/green/hiphop_0.png', 'img/steps/green/hiphop_1.png', 'img/steps/green/hiphop_2.png', 'img/steps/green/hiphop_3.png', 'img/steps/green/idle_0.png', 'img/steps/green/jump_0.png', 'img/steps/green/jump_1.png', 'img/steps/green/pointLeft_0.png', 'img/steps/green/pointLeft_1.png', 'img/steps/green/pointRight_0.png', 'img/steps/green/pointRight_1.png', 'img/steps/green/pony_0.png', 'img/steps/green/pony_1.png', 'img/steps/green/pony_2.png', 'img/steps/green/pony_3.png', 'img/steps/green/splits_0.png', 'img/steps/green/splits_1.png', 'img/steps/green/splits_2.png', 'img/steps/green/splits_3.png', 'img/steps/green/stepLeft_0.png', 'img/steps/green/stepLeft_1.png', 'img/steps/green/stepRight_0.png', 'img/steps/green/stepRight_1.png', 'img/steps/green/watch_0.png', 'img/steps/green/watch_1.png', 'img/steps/red/clap_0.png', 'img/steps/red/clap_1.png', 'img/steps/red/fail_0.png', 'img/steps/red/fail_1.png', 'img/steps/red/floss_0.png', 'img/steps/red/floss_1.png', 'img/steps/red/floss_2.png', 'img/steps/red/floss_3.png', 'img/steps/red/hip_0.png', 'img/steps/red/hip_1.png', 'img/steps/red/hiphop_0.png', 'img/steps/red/hiphop_1.png', 'img/steps/red/hiphop_2.png', 'img/steps/red/hiphop_3.png', 'img/steps/red/idle_0.png', 'img/steps/red/jump_0.png', 'img/steps/red/jump_1.png', 'img/steps/red/pointLeft_0.png', 'img/steps/red/pointLeft_1.png', 'img/steps/red/pointRight_0.png', 'img/steps/red/pointRight_1.png', 'img/steps/red/pony_0.png', 'img/steps/red/pony_1.png', 'img/steps/red/pony_2.png', 'img/steps/red/pony_3.png', 'img/steps/red/splits_0.png', 'img/steps/red/splits_1.png', 'img/steps/red/splits_2.png', 'img/steps/red/splits_3.png', 'img/steps/red/stepLeft_0.png', 'img/steps/red/stepLeft_1.png', 'img/steps/red/stepRight_0.png', 'img/steps/red/stepRight_1.png', 'img/steps/red/watch_0.png', 'img/steps/red/watch_1.png');
const gameModule = document.getElementById('module-codeboogie');
const gui = document.getElementById('gui');
const rest = document.getElementById('actual-scene');
gui.addEventListener('animationend', () => {
  if (gui.hasAttribute('is-closed')) {
    gui.setAttribute('hidden', '');
  }
});
const game = new Game(gameModule);
const start = (mode, param, removeGuiNow) => {
  if (rest.hasAttribute('hidden')) {
    rest.removeAttribute('hidden');
    if (removeGuiNow || gui.hasAttribute('hidden')) {
      gui.setAttribute('hidden', '');
    } else {
      gui.classList.remove('is-open');
      gui.classList.add('is-closed');
    }
    game.start();
  }
  game.restart(mode, param);
};
sceneApi.addEventListener('restart', ev => {
  ev.preventDefault();
  console.info('got restart');
});
sceneApi.config({
  sound: ['cb_start'],
  orientation: 'portrait'
});
sceneApi.ready(async data => {
  const stages = ['studio', 'stage', 'disco'];
  if (data && data.dance) {
    start('custom', data.dance, true);
  } else if (data && data.level) {
    start('teacher', data.level || 1, true);
  } else {
    const modeTeacherButton = document.getElementById('mode-teacher');
    const modeFreestyleButton = document.getElementById('mode-freestyle');
    modeTeacherButton.addEventListener('click', ev => {
      start('teacher');
      sceneApi.play('cb_ingame_win');
    });
    modeFreestyleButton.addEventListener('click', ev => {
      const choice = stages[~~(Math.random() * stages.length)];
      start('freestyle', choice);
      sceneApi.play('cb_ingame_win');
    });
  }
});