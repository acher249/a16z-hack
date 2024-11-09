import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __filename = topLevelFileUrlToPath(import.meta.url)
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/obliterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/obliterator/iterator.js"(exports, module) {
    function Iterator(next) {
      Object.defineProperty(this, "_next", {
        writable: false,
        enumerable: false,
        value: next
      });
      this.done = false;
    }
    __name(Iterator, "Iterator");
    Iterator.prototype.next = function() {
      if (this.done)
        return { done: true };
      var step = this._next();
      if (step.done)
        this.done = true;
      return step;
    };
    if (typeof Symbol !== "undefined")
      Iterator.prototype[Symbol.iterator] = function() {
        return this;
      };
    Iterator.of = function() {
      var args = arguments, l5 = args.length, i5 = 0;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        return { done: false, value: args[i5++] };
      });
    };
    Iterator.empty = function() {
      var iterator = new Iterator(null);
      iterator.done = true;
      return iterator;
    };
    Iterator.is = function(value) {
      if (value instanceof Iterator)
        return true;
      return typeof value === "object" && value !== null && typeof value.next === "function";
    };
    module.exports = Iterator;
  }
});

// node_modules/obliterator/foreach.js
var require_foreach = __commonJS({
  "node_modules/obliterator/foreach.js"(exports, module) {
    var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
    var SYMBOL_SUPPORT = typeof Symbol !== "undefined";
    function forEach(iterable, callback) {
      var iterator, k5, i5, l5, s5;
      if (!iterable)
        throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i5 = 0, l5 = iterable.length; i5 < l5; i5++)
          callback(iterable[i5], i5);
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i5 = 0;
        while (s5 = iterator.next(), s5.done !== true) {
          callback(s5.value, i5);
          i5++;
        }
        return;
      }
      for (k5 in iterable) {
        if (iterable.hasOwnProperty(k5)) {
          callback(iterable[k5], k5);
        }
      }
      return;
    }
    __name(forEach, "forEach");
    forEach.forEachWithNullKeys = function(iterable, callback) {
      var iterator, k5, i5, l5, s5;
      if (!iterable)
        throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i5 = 0, l5 = iterable.length; i5 < l5; i5++)
          callback(iterable[i5], null);
        return;
      }
      if (iterable instanceof Set) {
        iterable.forEach(function(value) {
          callback(value, null);
        });
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i5 = 0;
        while (s5 = iterator.next(), s5.done !== true) {
          callback(s5.value, null);
          i5++;
        }
        return;
      }
      for (k5 in iterable) {
        if (iterable.hasOwnProperty(k5)) {
          callback(iterable[k5], k5);
        }
      }
      return;
    };
    module.exports = forEach;
  }
});

// node_modules/mnemonist/utils/typed-arrays.js
var require_typed_arrays = __commonJS({
  "node_modules/mnemonist/utils/typed-arrays.js"(exports) {
    var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
    var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
    var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
    var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
    var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
    var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
    exports.getPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_8BIT_INTEGER)
        return Uint8Array;
      if (maxIndex <= MAX_16BIT_INTEGER)
        return Uint16Array;
      if (maxIndex <= MAX_32BIT_INTEGER)
        return Uint32Array;
      return Float64Array;
    };
    exports.getSignedPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
        return Int8Array;
      if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
        return Int16Array;
      if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
        return Int32Array;
      return Float64Array;
    };
    exports.getNumberType = function(value) {
      if (value === (value | 0)) {
        if (Math.sign(value) === -1) {
          if (value <= 127 && value >= -128)
            return Int8Array;
          if (value <= 32767 && value >= -32768)
            return Int16Array;
          return Int32Array;
        } else {
          if (value <= 255)
            return Uint8Array;
          if (value <= 65535)
            return Uint16Array;
          return Uint32Array;
        }
      }
      return Float64Array;
    };
    var TYPE_PRIORITY = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    exports.getMinimalRepresentation = function(array, getter) {
      var maxType = null, maxPriority = 0, p5, t5, v6, i5, l5;
      for (i5 = 0, l5 = array.length; i5 < l5; i5++) {
        v6 = getter ? getter(array[i5]) : array[i5];
        t5 = exports.getNumberType(v6);
        p5 = TYPE_PRIORITY[t5.name];
        if (p5 > maxPriority) {
          maxPriority = p5;
          maxType = t5;
        }
      }
      return maxType;
    };
    exports.isTypedArray = function(value) {
      return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
    };
    exports.concat = function() {
      var length = 0, i5, o5, l5;
      for (i5 = 0, l5 = arguments.length; i5 < l5; i5++)
        length += arguments[i5].length;
      var array = new arguments[0].constructor(length);
      for (i5 = 0, o5 = 0; i5 < l5; i5++) {
        array.set(arguments[i5], o5);
        o5 += arguments[i5].length;
      }
      return array;
    };
    exports.indices = function(length) {
      var PointerArray = exports.getPointerArray(length);
      var array = new PointerArray(length);
      for (var i5 = 0; i5 < length; i5++)
        array[i5] = i5;
      return array;
    };
  }
});

// node_modules/mnemonist/utils/iterables.js
var require_iterables = __commonJS({
  "node_modules/mnemonist/utils/iterables.js"(exports) {
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    function isArrayLike(target) {
      return Array.isArray(target) || typed.isTypedArray(target);
    }
    __name(isArrayLike, "isArrayLike");
    function guessLength(target) {
      if (typeof target.length === "number")
        return target.length;
      if (typeof target.size === "number")
        return target.size;
      return;
    }
    __name(guessLength, "guessLength");
    function toArray(target) {
      var l5 = guessLength(target);
      var array = typeof l5 === "number" ? new Array(l5) : [];
      var i5 = 0;
      forEach(target, function(value) {
        array[i5++] = value;
      });
      return array;
    }
    __name(toArray, "toArray");
    function toArrayWithIndices(target) {
      var l5 = guessLength(target);
      var IndexArray = typeof l5 === "number" ? typed.getPointerArray(l5) : Array;
      var array = typeof l5 === "number" ? new Array(l5) : [];
      var indices = typeof l5 === "number" ? new IndexArray(l5) : [];
      var i5 = 0;
      forEach(target, function(value) {
        array[i5] = value;
        indices[i5] = i5++;
      });
      return [array, indices];
    }
    __name(toArrayWithIndices, "toArrayWithIndices");
    exports.isArrayLike = isArrayLike;
    exports.guessLength = guessLength;
    exports.toArray = toArray;
    exports.toArrayWithIndices = toArrayWithIndices;
  }
});

// node_modules/mnemonist/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/mnemonist/lru-cache.js"(exports, module) {
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUCache2(Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      this.capacity = capacity;
      if (typeof this.capacity !== "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-cache: capacity should be positive number.");
      var PointerArray = typed.getPointerArray(capacity);
      this.forward = new PointerArray(capacity);
      this.backward = new PointerArray(capacity);
      this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
      this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    }
    __name(LRUCache2, "LRUCache");
    LRUCache2.prototype.clear = function() {
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    };
    LRUCache2.prototype.splayOnTop = function(pointer) {
      var oldHead = this.head;
      if (this.head === pointer)
        return this;
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.tail === pointer) {
        this.tail = previous;
      } else {
        this.backward[next] = previous;
      }
      this.forward[previous] = next;
      this.backward[oldHead] = pointer;
      this.head = pointer;
      this.forward[pointer] = oldHead;
      return this;
    };
    LRUCache2.prototype.set = function(key, value) {
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUCache2.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUCache2.prototype.has = function(key) {
      return key in this.items;
    };
    LRUCache2.prototype.get = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      this.splayOnTop(pointer);
      return this.V[pointer];
    };
    LRUCache2.prototype.peek = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      return this.V[pointer];
    };
    LRUCache2.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var i5 = 0, l5 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      while (i5 < l5) {
        callback.call(scope, values[pointer], keys[pointer], this);
        pointer = forward[pointer];
        i5++;
      }
    };
    LRUCache2.prototype.keys = function() {
      var i5 = 0, l5 = this.size;
      var pointer = this.head, keys = this.K, forward = this.forward;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        var key = keys[pointer];
        i5++;
        if (i5 < l5)
          pointer = forward[pointer];
        return {
          done: false,
          value: key
        };
      });
    };
    LRUCache2.prototype.values = function() {
      var i5 = 0, l5 = this.size;
      var pointer = this.head, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        var value = values[pointer];
        i5++;
        if (i5 < l5)
          pointer = forward[pointer];
        return {
          done: false,
          value
        };
      });
    };
    LRUCache2.prototype.entries = function() {
      var i5 = 0, l5 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        var key = keys[pointer], value = values[pointer];
        i5++;
        if (i5 < l5)
          pointer = forward[pointer];
        return {
          done: false,
          value: [key, value]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.iterator] = LRUCache2.prototype.entries;
    LRUCache2.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Map();
      var iterator = this.entries(), step;
      while (step = iterator.next(), !step.done)
        proxy.set(step.value[0], step.value[1]);
      Object.defineProperty(proxy, "constructor", {
        value: LRUCache2,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache2.prototype.inspect;
    LRUCache2.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache = new LRUCache2(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache.set(key, value);
      });
      return cache;
    };
    module.exports = LRUCache2;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig;
var init_httpExtensionConfiguration = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
    getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let httpHandler = runtimeConfig.httpHandler;
      return {
        setHttpHandler(handler) {
          httpHandler = handler;
        },
        httpHandler() {
          return httpHandler;
        },
        updateHttpClientConfig(key, value) {
          httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration");
    resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    init_httpExtensionConfiguration();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/abort.js
var init_abort = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/abort.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation2;
var init_auth = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/auth.js"() {
    (function(HttpAuthLocation5) {
      HttpAuthLocation5["HEADER"] = "header";
      HttpAuthLocation5["QUERY"] = "query";
    })(HttpAuthLocation2 || (HttpAuthLocation2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation2;
var init_HttpApiKeyAuth = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    (function(HttpApiKeyAuthLocation5) {
      HttpApiKeyAuthLocation5["HEADER"] = "header";
      HttpApiKeyAuthLocation5["QUERY"] = "query";
    })(HttpApiKeyAuthLocation2 || (HttpApiKeyAuthLocation2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/auth/index.js"() {
    init_auth();
    init_HttpApiKeyAuth();
    init_HttpAuthScheme();
    init_HttpAuthSchemeProvider();
    init_HttpSigner();
    init_IdentityProviderConfig();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/checksum.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/client.js
var init_client = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/client.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/command.js
var init_command = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/command.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/config.js
var init_config = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/config.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/manager.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/pool.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/connection/index.js"() {
    init_config();
    init_manager();
    init_pool();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/crypto.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/encode.js
var init_encode = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/encode.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme2;
var init_endpoint = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoint.js"() {
    (function(EndpointURLScheme5) {
      EndpointURLScheme5["HTTP"] = "http";
      EndpointURLScheme5["HTTPS"] = "https";
    })(EndpointURLScheme2 || (EndpointURLScheme2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    init_EndpointRuleObject();
    init_ErrorRuleObject();
    init_RuleSetObject();
    init_shared();
    init_TreeRuleObject();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/eventStream.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId2;
var init_checksum2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    (function(AlgorithmId5) {
      AlgorithmId5["MD5"] = "md5";
      AlgorithmId5["CRC32"] = "crc32";
      AlgorithmId5["CRC32C"] = "crc32c";
      AlgorithmId5["SHA1"] = "sha1";
      AlgorithmId5["SHA256"] = "sha256";
    })(AlgorithmId2 || (AlgorithmId2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    init_checksum2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_defaultClientConfiguration();
    init_defaultExtensionConfiguration();
    init_checksum2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/http.js
var FieldPosition2;
var init_http = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/http.js"() {
    (function(FieldPosition5) {
      FieldPosition5[FieldPosition5["HEADER"] = 0] = "HEADER";
      FieldPosition5[FieldPosition5["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition2 || (FieldPosition2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/identity.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/identity/index.js"() {
    init_apiKeyIdentity();
    init_awsCredentialIdentity();
    init_identity();
    init_tokenIdentity();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/logger.js
var init_logger = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/logger.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY;
var init_middleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/middleware.js"() {
    SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/pagination.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType2;
var init_profile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/profile.js"() {
    (function(IniSectionType5) {
      IniSectionType5["PROFILE"] = "profile";
      IniSectionType5["SSO_SESSION"] = "sso-session";
      IniSectionType5["SERVICES"] = "services";
    })(IniSectionType2 || (IniSectionType2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/response.js
var init_response = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/response.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/retry.js
var init_retry = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/retry.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/serde.js
var init_serde = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/serde.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/shapes.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/signature.js
var init_signature = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/signature.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/stream.js
var init_stream = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/stream.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol2;
var init_transfer = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transfer.js"() {
    (function(RequestHandlerProtocol5) {
      RequestHandlerProtocol5["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol5["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol5["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol2 || (RequestHandlerProtocol2 = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/uri.js
var init_uri = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/uri.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/util.js
var init_util = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/util.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/waiter.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/types/dist-es/index.js"() {
    init_abort();
    init_auth2();
    init_blob_payload_input_types();
    init_checksum();
    init_client();
    init_command();
    init_connection();
    init_crypto();
    init_encode();
    init_endpoint();
    init_endpoints();
    init_eventStream();
    init_extensions2();
    init_http();
    init_httpHandlerInitialization();
    init_identity2();
    init_logger();
    init_middleware();
    init_pagination();
    init_profile();
    init_response();
    init_retry();
    init_serde();
    init_shapes();
    init_signature();
    init_stream();
    init_streaming_blob_common_types();
    init_streaming_blob_payload_input_types();
    init_streaming_blob_payload_output_types();
    init_transfer();
    init_client_payload_blob_type_narrow();
    init_no_undefined();
    init_type_transform();
    init_uri();
    init_util();
    init_waiter();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/Field.js"() {
    init_dist_es();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest2;
var init_httpRequest = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    HttpRequest2 = class _HttpRequest {
      static {
        __name(this, "HttpRequest");
      }
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request2) {
        const cloned = new _HttpRequest({
          ...request2,
          headers: { ...request2.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request2) {
        if (!request2) {
          return false;
        }
        const req = request2;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
    __name(cloneQuery, "cloneQuery");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse;
var init_httpResponse = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    HttpResponse = class {
      static {
        __name(this, "HttpResponse");
      }
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/protocol-http/dist-es/index.js"() {
    init_extensions();
    init_Field();
    init_Fields();
    init_httpHandler();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostname();
    init_types();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin;
var init_dist_es3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js"() {
    init_dist_es2();
    __name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
    hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
      if (!HttpRequest2.isInstance(args.request))
        return next(args);
      const { request: request2 } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request2.headers[":authority"]) {
        delete request2.headers["host"];
        request2.headers[":authority"] = request2.hostname + (request2.port ? ":" + request2.port : "");
      } else if (!request2.headers["host"]) {
        let host = request2.hostname;
        if (request2.port != null)
          host += `:${request2.port}`;
        request2.headers["host"] = host;
      }
      return next(args);
    }, "hostHeaderMiddleware");
    hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }, "applyToStack")
    }), "getHostHeaderPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin;
var init_loggerMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js"() {
    loggerMiddleware = /* @__PURE__ */ __name(() => (next, context) => async (args) => {
      try {
        const response = await next(args);
        const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger3?.info?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger3?.error?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    }, "loggerMiddleware");
    loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }, "applyToStack")
    }), "getLoggerPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-logger/dist-es/index.js
var init_dist_es4 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-logger/dist-es/index.js"() {
    init_loggerMiddleware();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME, ENV_LAMBDA_FUNCTION_NAME, ENV_TRACE_ID, recursionDetectionMiddleware, addRecursionDetectionMiddlewareOptions, getRecursionDetectionPlugin;
var init_dist_es5 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js"() {
    init_dist_es2();
    TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest2.isInstance(request2) || options.runtime !== "node" || request2.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceId = process.env[ENV_TRACE_ID];
      const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request2.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request: request2
      });
    }, "recursionDetectionMiddleware");
    addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
      }, "applyToStack")
    }), "getRecursionDetectionPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
  };
}
var init_configurations = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js"() {
    __name(resolveUserAgentConfig, "resolveUserAgentConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX, isIpAddress;
var init_isIpAddress = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js"() {
    IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX, isValidHostLabel;
var init_isValidHostLabel = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js"() {
    VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    }, "isValidHostLabel");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
var customEndpointFunctions;
var init_customEndpointFunctions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js"() {
    customEndpointFunctions = {};
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
var debugId;
var init_debugId = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js"() {
    debugId = "endpoints";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
var init_toDebugString = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js"() {
    __name(toDebugString, "toDebugString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/debug/index.js
var init_debug = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/debug/index.js"() {
    init_debugId();
    init_toDebugString();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError;
var init_EndpointError = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js"() {
    EndpointError = class extends Error {
      static {
        __name(this, "EndpointError");
      }
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
var init_EndpointFunctions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/shared.js
var init_shared2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/index.js
var init_types2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError();
    init_EndpointFunctions();
    init_EndpointRuleObject2();
    init_ErrorRuleObject2();
    init_RuleSetObject2();
    init_TreeRuleObject2();
    init_shared2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals;
var init_booleanEquals = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js"() {
    booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList;
var init_getAttrPathList = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js"() {
    init_types2();
    getAttrPathList = /* @__PURE__ */ __name((path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    }, "getAttrPathList");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr;
var init_getAttr = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js"() {
    init_types2();
    init_getAttrPathList();
    getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value), "getAttr");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
var isSet;
var init_isSet = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js"() {
    isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/not.js
var not;
var init_not = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/not.js"() {
    not = /* @__PURE__ */ __name((value) => !value, "not");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS, parseURL;
var init_parseURL = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js"() {
    init_dist_es();
    init_isIpAddress();
    DEFAULT_PORTS = {
      [EndpointURLScheme2.HTTP]: 80,
      [EndpointURLScheme2.HTTPS]: 443
    };
    parseURL = /* @__PURE__ */ __name((value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k5, v6]) => `${k5}=${v6}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(EndpointURLScheme2).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    }, "parseURL");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals;
var init_stringEquals = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js"() {
    stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
var substring;
var init_substring = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js"() {
    substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    }, "substring");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode;
var init_uriEncode = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js"() {
    uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/index.js
var init_lib = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/lib/index.js"() {
    init_booleanEquals();
    init_getAttr();
    init_isSet();
    init_isValidHostLabel();
    init_not();
    init_parseURL();
    init_stringEquals();
    init_substring();
    init_uriEncode();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions;
var init_endpointFunctions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js"() {
    init_lib();
    endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate;
var init_evaluateTemplate = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js"() {
    init_lib();
    evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    }, "evaluateTemplate");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue;
var init_getReferenceValue = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js"() {
    getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    }, "getReferenceValue");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression;
var init_evaluateExpression = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js"() {
    init_types2();
    init_callFunction();
    init_evaluateTemplate();
    init_getReferenceValue();
    evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    }, "evaluateExpression");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction;
var init_callFunction = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js"() {
    init_customEndpointFunctions();
    init_endpointFunctions();
    init_evaluateExpression();
    callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    }, "callFunction");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition;
var init_evaluateCondition = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js"() {
    init_debug();
    init_types2();
    init_callFunction();
    evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    }, "evaluateCondition");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions;
var init_evaluateConditions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js"() {
    init_debug();
    init_evaluateCondition();
    evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    }, "evaluateConditions");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders;
var init_getEndpointHeaders = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js"() {
    init_types2();
    init_evaluateExpression();
    getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      })
    }), {}), "getEndpointHeaders");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
var getEndpointProperty;
var init_getEndpointProperty = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js"() {
    init_types2();
    init_evaluateTemplate();
    init_getEndpointProperties();
    getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    }, "getEndpointProperty");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties;
var init_getEndpointProperties = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js"() {
    init_getEndpointProperty();
    getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: getEndpointProperty(propertyVal, options)
    }), {}), "getEndpointProperties");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl;
var init_getEndpointUrl = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js"() {
    init_types2();
    init_evaluateExpression();
    getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    }, "getEndpointUrl");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule;
var init_evaluateEndpointRule = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js"() {
    init_debug();
    init_evaluateConditions();
    init_getEndpointHeaders();
    init_getEndpointProperties();
    init_getEndpointUrl();
    evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    }, "evaluateEndpointRule");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule;
var init_evaluateErrorRule = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js"() {
    init_types2();
    init_evaluateConditions();
    init_evaluateExpression();
    evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      }));
    }, "evaluateErrorRule");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
var evaluateTreeRule;
var init_evaluateTreeRule = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js"() {
    init_evaluateConditions();
    init_evaluateRules();
    evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    }, "evaluateTreeRule");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules;
var init_evaluateRules = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js"() {
    init_types2();
    init_evaluateEndpointRule();
    init_evaluateErrorRule();
    init_evaluateTreeRule();
    evaluateRules = /* @__PURE__ */ __name((rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError(`Rules evaluation failed`);
    }, "evaluateRules");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/index.js
var init_utils = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/utils/index.js"() {
    init_customEndpointFunctions();
    init_evaluateRules();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint;
var init_resolveEndpoint = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js"() {
    init_debug();
    init_types2();
    init_utils();
    resolveEndpoint = /* @__PURE__ */ __name((ruleSetObject, options) => {
      const { endpointParams, logger: logger3 } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v6]) => v6.default != null).map(([k5, v6]) => [k5, v6.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v6]) => v6.required).map(([k5]) => k5);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger: logger3, referenceRecord: {} });
      if (options.endpointParams?.Endpoint) {
        try {
          const givenEndpoint = new URL(options.endpointParams.Endpoint);
          const { protocol, port } = givenEndpoint;
          endpoint.url.protocol = protocol;
          endpoint.url.port = port;
        } catch (e5) {
        }
      }
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    }, "resolveEndpoint");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/index.js
var init_dist_es6 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-endpoints/dist-es/index.js"() {
    init_isIpAddress();
    init_isValidHostLabel();
    init_customEndpointFunctions();
    init_resolveEndpoint();
    init_types2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
var init_isIpAddress2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js"() {
    init_dist_es6();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket;
var init_isVirtualHostableS3Bucket = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js"() {
    init_dist_es6();
    init_isIpAddress2();
    isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!isValidHostLabel(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if (isIpAddress(value)) {
        return false;
      }
      return true;
    }, "isVirtualHostableS3Bucket");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var parseArn;
var init_parseArn = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js"() {
    parseArn = /* @__PURE__ */ __name((value) => {
      const segments = value.split(":");
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourceId] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
        return null;
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
      };
    }, "parseArn");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default;
var init_partitions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json"() {
    partitions_default = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "aws-global": {
            description: "AWS Standard global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "AWS China global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "AWS GovCloud (US) global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "c2s.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "AWS ISO (US) global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "sc2s.sgov.gov",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "AWS ISOB (US) global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "cloud.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "csp.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {}
      }],
      version: "1.1"
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo, selectedUserAgentPrefix, partition, getUserAgentPrefix;
var init_partition = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js"() {
    init_partitions();
    selectedPartitionsInfo = partitions_default;
    selectedUserAgentPrefix = "";
    partition = /* @__PURE__ */ __name((value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    }, "partition");
    getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions;
var init_aws = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js"() {
    init_dist_es6();
    init_isVirtualHostableS3Bucket();
    init_parseArn();
    init_partition();
    awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
var init_resolveEndpoint2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js"() {
    init_dist_es6();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
var init_EndpointError2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js"() {
    init_dist_es6();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
var init_shared3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
var init_types3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError2();
    init_EndpointRuleObject3();
    init_ErrorRuleObject3();
    init_RuleSetObject3();
    init_TreeRuleObject3();
    init_shared3();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/index.js
var init_dist_es7 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-endpoints/dist-es/index.js"() {
    init_aws();
    init_partition();
    init_isIpAddress2();
    init_resolveEndpoint2();
    init_types3();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_NAME_SEPARATOR, UA_NAME_ESCAPE_REGEX, UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR;
var init_constants = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js"() {
    USER_AGENT = "user-agent";
    X_AMZ_USER_AGENT = "x-amz-user-agent";
    SPACE = " ";
    UA_NAME_SEPARATOR = "/";
    UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    UA_ESCAPE_CHAR = "-";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware, escapeUserAgent, getUserAgentMiddlewareOptions, getUserAgentPlugin;
var init_user_agent_middleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js"() {
    init_dist_es7();
    init_dist_es2();
    init_constants();
    userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest2.isInstance(request2))
        return next(args);
      const { headers } = request2;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const prefix = getUserAgentPrefix();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request: request2
      });
    }, "userAgentMiddleware");
    escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    }, "escapeUserAgent");
    getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    getUserAgentPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }, "applyToStack")
    }), "getUserAgentPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
var init_dist_es8 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js"() {
    init_configurations();
    init_user_agent_middleware();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var booleanSelector;
var init_booleanSelector = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    }, "booleanSelector");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
var init_numberSelector = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType;
var init_types4 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/types.js"() {
    (function(SelectorType2) {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
    })(SelectorType || (SelectorType = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/index.js
var init_dist_es9 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-config-provider/dist-es/index.js"() {
    init_booleanSelector();
    init_numberSelector();
    init_types4();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var ENV_USE_DUALSTACK_ENDPOINT, CONFIG_USE_DUALSTACK_ENDPOINT, NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseDualstackEndpointConfigOptions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"() {
    init_dist_es9();
    ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => booleanSelector(env3, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV), "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG), "configFileSelector"),
      default: false
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var ENV_USE_FIPS_ENDPOINT, CONFIG_USE_FIPS_ENDPOINT, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseFipsEndpointConfigOptions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"() {
    init_dist_es9();
    ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => booleanSelector(env3, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV), "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG), "configFileSelector"),
      default: false
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext;
var init_getSmithyContext = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
    init_dist_es();
    getSmithyContext = /* @__PURE__ */ __name((context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
    normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es10 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-middleware/dist-es/index.js"() {
    init_getSmithyContext();
    init_normalizeProvider();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
var init_resolveCustomEndpointsConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js"() {
    init_dist_es10();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
var init_getEndpointFromRegion = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
var init_resolveEndpointsConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js"() {
    init_dist_es10();
    init_getEndpointFromRegion();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
var init_endpointsConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js"() {
    init_NodeUseDualstackEndpointConfigOptions();
    init_NodeUseFipsEndpointConfigOptions();
    init_resolveCustomEndpointsConfig();
    init_resolveEndpointsConfig();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
var REGION_ENV_NAME, REGION_INI_NAME, NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS;
var init_config2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js"() {
    REGION_ENV_NAME = "AWS_REGION";
    REGION_INI_NAME = "region";
    NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => env3[REGION_ENV_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[REGION_INI_NAME], "configFileSelector"),
      default: /* @__PURE__ */ __name(() => {
        throw new Error("Region is missing");
      }, "default")
    };
    NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion;
var init_isFipsRegion = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
    isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion;
var init_getRealRegion = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion();
    getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig;
var init_resolveRegionConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_getRealRegion();
    init_isFipsRegion();
    resolveRegionConfig = /* @__PURE__ */ __name((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return {
        ...input,
        region: /* @__PURE__ */ __name(async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        }, "region"),
        useFipsEndpoint: /* @__PURE__ */ __name(async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }, "useFipsEndpoint")
      };
    }, "resolveRegionConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
var init_regionConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js"() {
    init_config2();
    init_resolveRegionConfig();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
var init_PartitionHash = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
var init_RegionHash = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
var init_getHostnameFromVariants = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
var init_getResolvedHostname = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
var init_getResolvedPartition = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
var init_getResolvedSigningRegion = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
var init_getRegionInfo = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js"() {
    init_getHostnameFromVariants();
    init_getResolvedHostname();
    init_getResolvedPartition();
    init_getResolvedSigningRegion();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
var init_regionInfo = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js"() {
    init_PartitionHash();
    init_RegionHash();
    init_getRegionInfo();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/index.js
var init_dist_es11 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/config-resolver/dist-es/index.js"() {
    init_endpointsConfig();
    init_regionConfig();
    init_regionInfo();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map2 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map2.set(scheme.schemeId, scheme);
  }
  return map2;
}
var httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    init_dist_es();
    init_dist_es10();
    __name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
    httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = getSmithyContext(context);
      const failureReasons = [];
      for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    }, "httpAuthSchemeMiddleware");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
var init_s3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
    resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    }, "resolveParamsForS3");
    DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    DOTS_PATTERN = /\.\./;
    isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
    isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
      const [arn, partition2, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition2 && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    }, "isArnBucketName");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
var init_service_customizations = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
    init_s3();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider;
var init_createConfigValueProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
    createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config) => {
      const configProvider = /* @__PURE__ */ __name(async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      }, "configProvider");
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    }, "createConfigValueProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError;
var init_ProviderError = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
    ProviderError = class _ProviderError extends Error {
      static {
        __name(this, "ProviderError");
      }
      constructor(message, options = true) {
        let logger3;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger3 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger3 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger3?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError;
var init_CredentialsProviderError = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
    init_ProviderError();
    CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
      static {
        __name(this, "CredentialsProviderError");
      }
      constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var TokenProviderError;
var init_TokenProviderError = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
    init_ProviderError();
    TokenProviderError = class _TokenProviderError extends ProviderError {
      static {
        __name(this, "TokenProviderError");
      }
      constructor(message, options = true) {
        super(message, options);
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/chain.js
var chain;
var init_chain = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/chain.js"() {
    init_ProviderError();
    chain = /* @__PURE__ */ __name((...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    }, "chain");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/fromStatic.js
var fromStatic;
var init_fromStatic = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize;
var init_memoize = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/memoize.js"() {
    memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    }, "memoize");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/index.js
var init_dist_es12 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/property-provider/dist-es/index.js"() {
    init_CredentialsProviderError();
    init_ProviderError();
    init_TokenProviderError();
    init_chain();
    init_fromStatic();
    init_memoize();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js
function getSelectorName(functionString) {
  try {
    const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
    constants.delete("CONFIG");
    constants.delete("CONFIG_PREFIX_SEPARATOR");
    constants.delete("ENV");
    return [...constants].join(", ");
  } catch (e5) {
    return functionString;
  }
}
var init_getSelectorName = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js"() {
    __name(getSelectorName, "getSelectorName");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/fromEnv.js
var fromEnv;
var init_fromEnv = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/fromEnv.js"() {
    init_dist_es12();
    init_getSelectorName();
    fromEnv = /* @__PURE__ */ __name((envVarSelector, logger3) => async () => {
      try {
        const config = envVarSelector(process.env);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e5) {
        throw new CredentialsProviderError(e5.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: logger3 });
      }
    }, "fromEnv");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js
import { homedir } from "os";
import { sep } from "path";
var homeDirCache, getHomeDirCacheKey, getHomeDir;
var init_getHomeDir = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js"() {
    homeDirCache = {};
    getHomeDirCacheKey = /* @__PURE__ */ __name(() => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    }, "getHomeDirCacheKey");
    getHomeDir = /* @__PURE__ */ __name(() => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = homedir();
      return homeDirCache[homeDirCacheKey];
    }, "getHomeDir");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE, DEFAULT_PROFILE, getProfileName;
var init_getProfileName = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js"() {
    ENV_PROFILE = "AWS_PROFILE";
    DEFAULT_PROFILE = "default";
    getProfileName = /* @__PURE__ */ __name((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
import { createHash } from "crypto";
import { join } from "path";
var getSSOTokenFilepath;
var init_getSSOTokenFilepath = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js"() {
    init_getHomeDir();
    getSSOTokenFilepath = /* @__PURE__ */ __name((id) => {
      const hasher = createHash("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
    }, "getSSOTokenFilepath");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
import { promises as fsPromises } from "fs";
var readFile, getSSOTokenFromFile;
var init_getSSOTokenFromFile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js"() {
    init_getSSOTokenFilepath();
    ({ readFile } = fsPromises);
    getSSOTokenFromFile = /* @__PURE__ */ __name(async (id) => {
      const ssoTokenFilepath = getSSOTokenFilepath(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    }, "getSSOTokenFromFile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js
var getConfigData;
var init_getConfigData = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getConfigData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(IniSectionType2).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType2.PROFILE ? key.substring(indexOfSeparator + 1) : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    }), "getConfigData");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js
import { join as join2 } from "path";
var ENV_CONFIG_PATH, getConfigFilepath;
var init_getConfigFilepath = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js"() {
    init_getHomeDir();
    ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    getConfigFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CONFIG_PATH] || join2(getHomeDir(), ".aws", "config"), "getConfigFilepath");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
import { join as join3 } from "path";
var ENV_CREDENTIALS_PATH, getCredentialsFilepath;
var init_getCredentialsFilepath = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js"() {
    init_getHomeDir();
    ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    getCredentialsFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CREDENTIALS_PATH] || join3(getHomeDir(), ".aws", "credentials"), "getCredentialsFilepath");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js
var prefixKeyRegex, profileNameBlockList, parseIni;
var init_parseIni = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    profileNameBlockList = ["__proto__", "profile __proto__"];
    parseIni = /* @__PURE__ */ __name((iniData) => {
      const map2 = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(IniSectionType2).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map2[currentSection] = map2[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map2[currentSection][key] = value;
            }
          }
        }
      }
      return map2;
    }, "parseIni");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js
import { promises as fsPromises2 } from "fs";
var readFile2, filePromisesHash, slurpFile;
var init_slurpFile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js"() {
    ({ readFile: readFile2 } = fsPromises2);
    filePromisesHash = {};
    slurpFile = /* @__PURE__ */ __name((path, options) => {
      if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = readFile2(path, "utf8");
      }
      return filePromisesHash[path];
    }, "slurpFile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
import { join as join4 } from "path";
var swallowError, CONFIG_PREFIX_SEPARATOR, loadSharedConfigFiles;
var init_loadSharedConfigFiles = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js"() {
    init_getConfigData();
    init_getConfigFilepath();
    init_getCredentialsFilepath();
    init_getHomeDir();
    init_parseIni();
    init_slurpFile();
    swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
    CONFIG_PREFIX_SEPARATOR = ".";
    loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = getHomeDir();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = join4(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = join4(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        slurpFile(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        slurpFile(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    }, "loadSharedConfigFiles");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js
var getSsoSessionData;
var init_getSsoSessionData = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getSsoSessionData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => key.startsWith(IniSectionType2.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {}), "getSsoSessionData");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var swallowError2, loadSsoSessionData;
var init_loadSsoSessionData = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js"() {
    init_getConfigFilepath();
    init_getSsoSessionData();
    init_parseIni();
    init_slurpFile();
    swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
    loadSsoSessionData = /* @__PURE__ */ __name(async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var mergeConfigFiles;
var init_mergeConfigFiles = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js"() {
    mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    }, "mergeConfigFiles");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js
var parseKnownFiles;
var init_parseKnownFiles = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js"() {
    init_loadSharedConfigFiles();
    init_mergeConfigFiles();
    parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    }, "parseKnownFiles");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/types.js
var init_types5 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/index.js
var init_dist_es13 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/shared-ini-file-loader/dist-es/index.js"() {
    init_getHomeDir();
    init_getProfileName();
    init_getSSOTokenFilepath();
    init_getSSOTokenFromFile();
    init_loadSharedConfigFiles();
    init_loadSsoSessionData();
    init_parseKnownFiles();
    init_types5();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles;
var init_fromSharedConfigFiles = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js"() {
    init_dist_es12();
    init_dist_es13();
    init_getSelectorName();
    fromSharedConfigFiles = /* @__PURE__ */ __name((configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = getProfileName(init);
      const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e5) {
        throw new CredentialsProviderError(e5.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    }, "fromSharedConfigFiles");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/fromStatic.js
var isFunction, fromStatic2;
var init_fromStatic2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/fromStatic.js"() {
    init_dist_es12();
    isFunction = /* @__PURE__ */ __name((func) => typeof func === "function", "isFunction");
    fromStatic2 = /* @__PURE__ */ __name((defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue), "fromStatic");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/configLoader.js
var loadConfig;
var init_configLoader = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/configLoader.js"() {
    init_dist_es12();
    init_fromEnv();
    init_fromSharedConfigFiles();
    init_fromStatic2();
    loadConfig = /* @__PURE__ */ __name(({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue))), "loadConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/index.js
var init_dist_es14 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-config-provider/dist-es/index.js"() {
    init_configLoader();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js
var ENV_ENDPOINT_URL, CONFIG_ENDPOINT_URL, getEndpointUrlConfig;
var init_getEndpointUrlConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js"() {
    init_dist_es13();
    ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    CONFIG_ENDPOINT_URL = "endpoint_url";
    getEndpointUrlConfig = /* @__PURE__ */ __name((serviceId) => ({
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => {
        const serviceSuffixParts = serviceId.split(" ").map((w5) => w5.toUpperCase());
        const serviceEndpointUrl = env3[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env3[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w5) => w5.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      }, "configFileSelector"),
      default: void 0
    }), "getEndpointUrlConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js
var getEndpointFromConfig;
var init_getEndpointFromConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js"() {
    init_dist_es14();
    init_getEndpointUrlConfig();
    getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => loadConfig(getEndpointUrlConfig(serviceId))(), "getEndpointFromConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_dist_es15 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/querystring-parser/dist-es/index.js"() {
    __name(parseQueryString, "parseQueryString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl;
var init_dist_es16 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/url-parser/dist-es/index.js"() {
    init_dist_es15();
    parseUrl = /* @__PURE__ */ __name((url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    }, "parseUrl");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
    init_dist_es16();
    toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return parseUrl(endpoint.url);
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    }, "toEndpointV1");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions, resolveParams;
var init_getEndpointFromInstructions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
    init_service_customizations();
    init_createConfigValueProvider();
    init_getEndpointFromConfig();
    init_toEndpointV1();
    getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    }, "getEndpointFromInstructions");
    resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    }, "resolveParams");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
var init_adaptors = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
    init_getEndpointFromInstructions();
    init_toEndpointV1();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware;
var init_endpointMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
    init_dist_es10();
    init_getEndpointFromInstructions();
    endpointMiddleware = /* @__PURE__ */ __name(({ config, instructions }) => {
      return (next, context) => async (args) => {
        const endpoint = await getEndpointFromInstructions(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    }, "endpointMiddleware");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware;
var init_deserializerMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
    deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          error.message += "\n  " + hint;
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
        }
        throw error;
      }
    }, "deserializerMiddleware");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware;
var init_serializerMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
    serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context) => async (args) => {
      const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request2 = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request: request2
      });
    }, "serializerMiddleware");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: /* @__PURE__ */ __name((commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }, "applyToStack")
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_serdePlugin = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
    init_deserializerMiddleware();
    init_serializerMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    __name(getSerdePlugin, "getSerdePlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/index.js
var init_dist_es17 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-serde/dist-es/index.js"() {
    init_deserializerMiddleware();
    init_serdePlugin();
    init_serializerMiddleware();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions, getEndpointPlugin;
var init_getEndpointPlugin = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
    init_dist_es17();
    init_endpointMiddleware();
    endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
    getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
          config,
          instructions
        }), endpointMiddlewareOptions);
      }, "applyToStack")
    }), "getEndpointPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig;
var init_resolveEndpointConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
    init_dist_es10();
    init_toEndpointV1();
    resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
      const tls = input.tls ?? true;
      const { endpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
      };
    }, "resolveEndpointConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/types.js
var init_types6 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/index.js
var init_dist_es18 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
    init_adaptors();
    init_endpointMiddleware();
    init_getEndpointPlugin();
    init_resolveEndpointConfig();
    init_types6();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_dist_es18();
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: endpointMiddlewareOptions.name
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpAuthSchemeEndpointRuleSetPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions;
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    init_dist_es17();
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    init_dist_es2();
    init_dist_es();
    init_dist_es10();
    defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error) => {
      throw error;
    }, "defaultErrorHandler");
    defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
    }, "defaultSuccessHandler");
    httpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      if (!HttpRequest2.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = getSmithyContext(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    }, "httpSigningMiddleware");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE;
var init_config3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/config.js"() {
    (function(RETRY_MODES2) {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
    })(RETRY_MODES || (RETRY_MODES = {}));
    DEFAULT_MAX_ATTEMPTS = 3;
    DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, NODEJS_TIMEOUT_ERROR_CODES;
var init_constants2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/service-error-classification/dist-es/constants.js"() {
    THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError, isThrottlingError, isTransientError, isServerError;
var init_dist_es19 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/service-error-classification/dist-es/index.js"() {
    init_constants2();
    isClockSkewCorrectedError = /* @__PURE__ */ __name((error) => error.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
    isThrottlingError = /* @__PURE__ */ __name((error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true, "isThrottlingError");
    isTransientError = /* @__PURE__ */ __name((error) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0), "isTransientError");
    isServerError = /* @__PURE__ */ __name((error) => {
      if (error.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    }, "isServerError");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter;
var init_DefaultRateLimiter = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js"() {
    init_dist_es19();
    DefaultRateLimiter = class {
      static {
        __name(this, "DefaultRateLimiter");
      }
      constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (isThrottlingError(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t5 = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t5 * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, THROTTLING_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, RETRY_COST, TIMEOUT_RETRY_COST, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER;
var init_constants3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/constants.js"() {
    DEFAULT_RETRY_DELAY_BASE = 100;
    MAXIMUM_RETRY_DELAY = 20 * 1e3;
    THROTTLING_RETRY_DELAY_BASE = 500;
    INITIAL_RETRY_TOKENS = 500;
    RETRY_COST = 5;
    TIMEOUT_RETRY_COST = 10;
    NO_RETRY_INCREMENT = 1;
    INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    REQUEST_HEADER = "amz-sdk-request";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy;
var init_defaultRetryBackoffStrategy = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js"() {
    init_constants3();
    getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      }, "computeNextBackoffDelay");
      const setDelayBase = /* @__PURE__ */ __name((delay) => {
        delayBase = delay;
      }, "setDelayBase");
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    }, "getDefaultRetryBackoffStrategy");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken;
var init_defaultRetryToken = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js"() {
    init_constants3();
    createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
      const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
      const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    }, "createDefaultRetryToken");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy;
var init_StandardRetryStrategy = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js"() {
    init_config3();
    init_constants3();
    init_defaultRetryBackoffStrategy();
    init_defaultRetryToken();
    StandardRetryStrategy = class {
      static {
        __name(this, "StandardRetryStrategy");
      }
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = RETRY_MODES.STANDARD;
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy;
var init_AdaptiveRetryStrategy = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_config3();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    AdaptiveRetryStrategy = class {
      static {
        __name(this, "AdaptiveRetryStrategy");
      }
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
var init_ConfiguredRetryStrategy = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js"() {
    init_constants3();
    init_StandardRetryStrategy();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/types.js
var init_types7 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/index.js
var init_dist_es20 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy();
    init_ConfiguredRetryStrategy();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    init_config3();
    init_constants3();
    init_types7();
  }
});

// node_modules/uuid/dist/esm-node/rng.js
import crypto2 from "crypto";
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto2.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
var rnds8Pool, poolPtr;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-node/rng.js"() {
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
    __name(rng, "rng");
  }
});

// node_modules/uuid/dist/esm-node/stringify.js
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
var byteToHex;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-node/stringify.js"() {
    byteToHex = [];
    for (let i5 = 0; i5 < 256; ++i5) {
      byteToHex.push((i5 + 256).toString(16).slice(1));
    }
    __name(unsafeStringify, "unsafeStringify");
  }
});

// node_modules/uuid/dist/esm-node/native.js
import crypto3 from "crypto";
var native_default;
var init_native = __esm({
  "node_modules/uuid/dist/esm-node/native.js"() {
    native_default = {
      randomUUID: crypto3.randomUUID
    };
  }
});

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i5 = 0; i5 < 16; ++i5) {
      buf[offset + i5] = rnds[i5];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-node/v4.js"() {
    init_native();
    init_rng();
    init_stringify();
    __name(v4, "v4");
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-node/index.js
var init_esm_node = __esm({
  "node_modules/uuid/dist/esm-node/index.js"() {
    init_v4();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
var init_defaultRetryQuota = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js"() {
    init_dist_es20();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
var init_delayDecider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/delayDecider.js"() {
    init_dist_es20();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
var init_retryDecider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/retryDecider.js"() {
    init_dist_es19();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError;
var init_util2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/util.js"() {
    asSdkError = /* @__PURE__ */ __name((error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    }, "asSdkError");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
var init_StandardRetryStrategy2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js"() {
    init_dist_es2();
    init_dist_es19();
    init_dist_es20();
    init_defaultRetryQuota();
    init_delayDecider();
    init_retryDecider();
    init_util2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
var init_AdaptiveRetryStrategy2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_dist_es20();
    init_StandardRetryStrategy2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/configurations.js
var ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, resolveRetryConfig, ENV_RETRY_MODE, CONFIG_RETRY_MODE, NODE_RETRY_MODE_CONFIG_OPTIONS;
var init_configurations2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/configurations.js"() {
    init_dist_es10();
    init_dist_es20();
    ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    CONFIG_MAX_ATTEMPTS = "max_attempts";
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => {
        const value = env3[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      }, "configFileSelector"),
      default: DEFAULT_MAX_ATTEMPTS
    };
    resolveRetryConfig = /* @__PURE__ */ __name((input) => {
      const { retryStrategy } = input;
      const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
      return {
        ...input,
        maxAttempts,
        retryStrategy: /* @__PURE__ */ __name(async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await normalizeProvider(input.retryMode)();
          if (retryMode === RETRY_MODES.ADAPTIVE) {
            return new AdaptiveRetryStrategy(maxAttempts);
          }
          return new StandardRetryStrategy(maxAttempts);
        }, "retryStrategy")
      };
    }, "resolveRetryConfig");
    ENV_RETRY_MODE = "AWS_RETRY_MODE";
    CONFIG_RETRY_MODE = "retry_mode";
    NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => env3[ENV_RETRY_MODE], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_RETRY_MODE], "configFileSelector"),
      default: DEFAULT_RETRY_MODE
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
var init_omitRetryHeadersMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js"() {
    init_dist_es2();
    init_dist_es20();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger;
var init_NoOpLogger = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
    NoOpLogger = class {
      static {
        __name(this, "NoOpLogger");
      }
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
var init_MiddlewareStack = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
    getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    }, "getAllAliases");
    getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases");
    constructStack = /* @__PURE__ */ __name(() => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = /* @__PURE__ */ __name((entries) => entries.sort((a5, b5) => stepWeights[b5.step] - stepWeights[a5.step] || priorityWeights[b5.priority || "normal"] - priorityWeights[a5.priority || "normal"]), "sort");
      const removeByName = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByName");
      const removeByReference = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByReference");
      const cloneTo = /* @__PURE__ */ __name((toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      }, "cloneTo");
      const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      }, "expandRelativeMiddlewareList");
      const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      }, "getMiddlewareList");
      const stack = {
        add: /* @__PURE__ */ __name((middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        }, "add"),
        addRelativeTo: /* @__PURE__ */ __name((middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        }, "addRelativeTo"),
        clone: /* @__PURE__ */ __name(() => cloneTo(constructStack()), "clone"),
        use: /* @__PURE__ */ __name((plugin) => {
          plugin.applyToStack(stack);
        }, "use"),
        remove: /* @__PURE__ */ __name((toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        }, "remove"),
        removeByTag: /* @__PURE__ */ __name((toRemove) => {
          let isRemoved = false;
          const filterCb = /* @__PURE__ */ __name((entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          }, "filterCb");
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        }, "removeByTag"),
        concat: /* @__PURE__ */ __name((from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        }, "concat"),
        applyToStack: cloneTo,
        identify: /* @__PURE__ */ __name(() => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        }, "identify"),
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: /* @__PURE__ */ __name((handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }, "resolve")
      };
      return stack;
    }, "constructStack");
    stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es21 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-stack/dist-es/index.js"() {
    init_MiddlewareStack();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/client.js
var Client;
var init_client2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/client.js"() {
    init_dist_es21();
    Client = class {
      static {
        __name(this, "Client");
      }
      constructor(config) {
        this.middlewareStack = constructStack();
        this.config = config;
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
          handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        if (this.config.requestHandler.destroy)
          this.config.requestHandler.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es22 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer, fromString;
var init_dist_es23 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es22();
    fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer2.from(input, offset, length);
    }, "fromArrayBuffer");
    fromString = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
    }, "fromString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX, fromBase64;
var init_fromBase64 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/dist-es/fromBase64.js"() {
    init_dist_es23();
    BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    fromBase64 = /* @__PURE__ */ __name((input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = fromString(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }, "fromBase64");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer3 } from "buffer";
var fromArrayBuffer2, fromString2;
var init_dist_es24 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es22();
    fromArrayBuffer2 = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer3.from(input, offset, length);
    }, "fromArrayBuffer");
    fromString2 = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer3.from(input, encoding) : Buffer3.from(input);
    }, "fromString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf8;
var init_fromUtf8 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js"() {
    init_dist_es24();
    fromUtf8 = /* @__PURE__ */ __name((input) => {
      const buf = fromString2(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf8();
    toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf8;
var init_toUtf8 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/toUtf8.js"() {
    init_dist_es24();
    toUtf8 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer2(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    }, "toUtf8");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es25 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_fromUtf8();
    init_toUint8Array();
    init_toUtf8();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64;
var init_toBase64 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/dist-es/toBase64.js"() {
    init_dist_es23();
    init_dist_es25();
    toBase64 = /* @__PURE__ */ __name((_input) => {
      let input;
      if (typeof _input === "string") {
        input = fromUtf8(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    }, "toBase64");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es26 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-base64/dist-es/index.js"() {
    init_fromBase64();
    init_toBase64();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
var init_transforms = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
    init_dist_es26();
    init_dist_es25();
    init_Uint8ArrayBlobAdapter();
    __name(transformToString, "transformToString");
    __name(transformFromString, "transformFromString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter;
var init_Uint8ArrayBlobAdapter = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
    init_transforms();
    Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static {
        __name(this, "Uint8ArrayBlobAdapter");
      }
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
var init_getAwsChunkedEncodingStream = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri, hexEncode;
var init_escape_uri = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
    hexEncode = /* @__PURE__ */ __name((c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
    init_escape_uri();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es27 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    init_escape_uri();
    init_escape_uri_path();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i5 = 0, iLen = value.length; i5 < iLen; i5++) {
        parts.push(`${key}=${escapeUri(value[i5])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
var init_dist_es28 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/querystring-builder/dist-es/index.js"() {
    init_dist_es27();
    __name(buildQueryString, "buildQueryString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES2;
var init_constants4 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/constants.js"() {
    NODEJS_TIMEOUT_ERROR_CODES2 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders;
var init_get_transformed_headers = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js"() {
    getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var setConnectionTimeout;
var init_set_connection_timeout = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js"() {
    setConnectionTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request2.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
          name: "TimeoutError"
        }));
      }, timeoutInMs);
      request2.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    }, "setConnectionTimeout");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var setSocketKeepAlive;
var init_set_socket_keep_alive = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js"() {
    setSocketKeepAlive = /* @__PURE__ */ __name((request2, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request2.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    }, "setSocketKeepAlive");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var setSocketTimeout;
var init_set_socket_timeout = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js"() {
    setSocketTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
      request2.setTimeout(timeoutInMs, () => {
        request2.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    }, "setSocketTimeout");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
import { Readable } from "stream";
async function writeRequestBody(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME) {
  const headers = request2.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];
  let timeoutId = -1;
  let hasError = false;
  if (expect === "100-continue") {
    await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          clearTimeout(timeoutId);
          resolve();
        });
        httpRequest2.on("error", () => {
          hasError = true;
          clearTimeout(timeoutId);
          resolve();
        });
      })
    ]);
  }
  if (!hasError) {
    writeBody(httpRequest2, request2.body);
  }
}
function writeBody(httpRequest2, body) {
  if (body instanceof Readable) {
    body.pipe(httpRequest2);
    return;
  }
  if (body) {
    if (Buffer.isBuffer(body) || typeof body === "string") {
      httpRequest2.end(body);
      return;
    }
    const uint8 = body;
    if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
      httpRequest2.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
      return;
    }
    httpRequest2.end(Buffer.from(body));
    return;
  }
  httpRequest2.end();
}
var MIN_WAIT_TIME;
var init_write_request_body = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/write-request-body.js"() {
    MIN_WAIT_TIME = 1e3;
    __name(writeRequestBody, "writeRequestBody");
    __name(writeBody, "writeBody");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
import { Agent as hAgent, request as hRequest } from "http";
import { Agent as hsAgent, request as hsRequest } from "https";
var NodeHttpHandler;
var init_node_http_handler = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js"() {
    init_dist_es2();
    init_dist_es28();
    init_constants4();
    init_get_transformed_headers();
    init_set_connection_timeout();
    init_set_socket_keep_alive();
    init_set_socket_timeout();
    init_write_request_body();
    NodeHttpHandler = class _NodeHttpHandler {
      static {
        __name(this, "NodeHttpHandler");
      }
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger3 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger3?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      resolveDefaultConfig(options) {
        const { requestTimeout: requestTimeout4, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout4 ?? socketTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof hAgent || typeof httpAgent?.destroy === "function") {
              return httpAgent;
            }
            return new hAgent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof hsAgent || typeof httpsAgent?.destroy === "function") {
              return httpsAgent;
            }
            return new hsAgent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: console
        };
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request2, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _reject(arg);
          }, "reject");
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request2.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          socketCheckTimeoutId = setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, this.config.logger);
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3));
          const queryString = buildQueryString(request2.query || {});
          let auth = void 0;
          if (request2.username != null || request2.password != null) {
            const username = request2.username ?? "";
            const password = request2.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request2.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request2.fragment) {
            path += `#${request2.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request2.headers,
            host: request2.hostname,
            method: request2.method,
            path,
            port: request2.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? hsRequest : hRequest;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES2.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          setConnectionTimeout(req, reject, this.config.connectionTimeout);
          setSocketTimeout(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            const onAbort = /* @__PURE__ */ __name(() => {
              req.destroy();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            setSocketKeepAlive(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = writeRequestBody(req, request2, this.config.requestTimeout).catch((e5) => {
            clearTimeout(socketCheckTimeoutId);
            return _reject(e5);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var init_node_http2_connection_pool = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js
var init_node_http2_connection_manager = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js"() {
    init_node_http2_connection_pool();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js"() {
    init_dist_es2();
    init_dist_es28();
    init_get_transformed_headers();
    init_node_http2_connection_manager();
    init_write_request_body();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
import { Writable } from "stream";
var Collector;
var init_collector = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js"() {
    Collector = class extends Writable {
      static {
        __name(this, "Collector");
      }
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
async function collectReadableStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
var streamCollector, isReadableStreamInstance;
var init_stream_collector = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js"() {
    init_collector();
    streamCollector = /* @__PURE__ */ __name((stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    isReadableStreamInstance = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream, "isReadableStreamInstance");
    __name(collectReadableStream, "collectReadableStream");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es29 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/node-http-handler/dist-es/index.js"() {
    init_node_http_handler();
    init_node_http2_handler();
    init_stream_collector();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/node_modules/@smithy/util-buffer-from/dist-es/index.js
var init_dist_es30 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es22();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
var init_request_timeout = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var init_fetch_http_handler = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
    init_dist_es2();
    init_dist_es28();
    init_request_timeout();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
var init_stream_collector2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
    init_dist_es26();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/index.js
var init_dist_es31 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
    init_fetch_http_handler();
    init_stream_collector2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i5 = 0; i5 < encoded.length; i5 += 2) {
    const encodedByte = encoded.slice(i5, i5 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i5 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i5 = 0; i5 < bytes.byteLength; i5++) {
    out += SHORT_TO_HEX[bytes[i5]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es32 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i5 = 0; i5 < 256; i5++) {
      let encodedByte = i5.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i5] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i5;
    }
    __name(fromHex, "fromHex");
    __name(toHex, "toHex");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/stream-type-check.js
var init_stream_type_check = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/stream-type-check.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var init_sdk_stream_mixin_browser = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
    init_dist_es31();
    init_dist_es26();
    init_dist_es32();
    init_dist_es25();
    init_stream_type_check();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
var init_sdk_stream_mixin = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js"() {
    init_dist_es29();
    init_dist_es30();
    init_sdk_stream_mixin_browser();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
var init_splitStream_browser = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/splitStream.js
var init_splitStream = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/splitStream.js"() {
    init_splitStream_browser();
    init_stream_type_check();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/headStream.browser.js
var init_headStream_browser = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/headStream.browser.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/headStream.js
var init_headStream = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/headStream.js"() {
    init_headStream_browser();
    init_stream_type_check();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es33 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-stream/dist-es/index.js"() {
    init_Uint8ArrayBlobAdapter();
    init_getAwsChunkedEncodingStream();
    init_sdk_stream_mixin();
    init_splitStream();
    init_headStream();
    init_stream_type_check();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var collectBody;
var init_collect_stream_body = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
    init_dist_es33();
    collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return Uint8ArrayBlobAdapter.mutate(await fromContext);
    }, "collectBody");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/command.js
var Command, ClassBuilder;
var init_command2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/command.js"() {
    init_dist_es21();
    init_dist_es();
    Command = class {
      static {
        __name(this, "Command");
      }
      constructor() {
        this.middlewareStack = constructStack();
      }
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger3 } = configuration;
        const handlerExecutionContext = {
          logger: logger3,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [SMITHY_CONTEXT_KEY]: {
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
      }
    };
    ClassBuilder = class {
      static {
        __name(this, "ClassBuilder");
      }
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_2) => _2;
        this._outputFilterSensitiveLog = (_2) => _2;
        this._serializer = null;
        this._deserializer = null;
      }
      init(cb) {
        this._init = cb;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_2) => _2, outputFilter = (_2) => _2) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          static {
            __name(this, "CommandRef");
          }
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
          }
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        };
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/constants.js
var SENSITIVE_STRING;
var init_constants5 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/constants.js"() {
    SENSITIVE_STRING = "***SensitiveInformation***";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var createAggregatedClient;
var init_create_aggregated_client = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
    createAggregatedClient = /* @__PURE__ */ __name((commands4, Client3) => {
      for (const command of Object.keys(commands4)) {
        const CommandCtor = commands4[command];
        const methodImpl = /* @__PURE__ */ __name(async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        }, "methodImpl");
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client3.prototype[methodName] = methodImpl;
      }
    }, "createAggregatedClient");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var expectBoolean, expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectInt32, expectShort, expectByte, expectSizedInt, castInt, expectNonNull, expectObject, expectString, expectUnion, strictParseFloat32, NUMBER_REGEX, parseNumber, limitedParseDouble, parseFloatString, strictParseInt32, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/parse-utils.js"() {
    expectBoolean = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    }, "expectBoolean");
    expectNumber = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    expectLong = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
    expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
    expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
    expectSizedInt = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    castInt = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    expectNonNull = /* @__PURE__ */ __name((value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    }, "expectNonNull");
    expectObject = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    }, "expectObject");
    expectString = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    }, "expectString");
    expectUnion = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = expectObject(value);
      const setKeys = Object.entries(asObject).filter(([, v6]) => v6 != null).map(([k5]) => k5);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    }, "expectUnion");
    strictParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    }, "strictParseFloat32");
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    limitedParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber(value);
    }, "limitedParseDouble");
    parseFloatString = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    }, "parseFloatString");
    strictParseInt32 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    }, "strictParseInt32");
    strictParseShort = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    }, "strictParseShort");
    strictParseByte = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    }, "strictParseByte");
    stackTraceWarning = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s5) => !s5.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/date-utils.js
var MONTHS, RFC3339, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, buildDate, FIFTY_YEARS_IN_MILLIS, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/date-utils.js"() {
    init_parse_utils();
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    }, "parseRfc3339DateTimeWithOffset");
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
    }, "buildDate");
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    }, "validateDayOfMonth");
    isLeapYear = /* @__PURE__ */ __name((year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }, "isLeapYear");
    parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    parseMilliseconds = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    }, "parseMilliseconds");
    parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    }, "parseOffsetToMilliseconds");
    stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException, decorateServiceException;
var init_exceptions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
    ServiceException = class _ServiceException extends Error {
      static {
        __name(this, "ServiceException");
      }
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, _ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
    };
    decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
      Object.entries(additions).filter(([, v6]) => v6 !== void 0).forEach(([k5, v6]) => {
        if (exception[k5] == void 0 || exception[k5] === "") {
          exception[k5] = v6;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    }, "decorateServiceException");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError, withBaseException, deserializeMetadata;
var init_default_error_handler = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
    init_exceptions();
    throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    }, "throwDefaultError");
    withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    }, "withBaseException");
    deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode;
var init_defaults_mode = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
    loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var warningEmitted, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    warningEmitted = false;
    emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var getChecksumConfiguration3, resolveChecksumRuntimeConfig3;
var init_checksum3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
    init_dist_es();
    getChecksumConfiguration3 = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in AlgorithmId2) {
        const algorithmId = AlgorithmId2[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: /* @__PURE__ */ __name(() => algorithmId, "algorithmId"),
          checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig[algorithmId], "checksumConstructor")
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    resolveChecksumRuntimeConfig3 = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var getRetryConfiguration, resolveRetryRuntimeConfig;
var init_retry2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
    getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let _retryStrategy = runtimeConfig.retryStrategy;
      return {
        setRetryStrategy(retryStrategy) {
          _retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return _retryStrategy;
        }
      };
    }, "getRetryConfiguration");
    resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    }, "resolveRetryRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig;
var init_defaultExtensionConfiguration2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
    init_checksum3();
    init_retry2();
    getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration3(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig)
      };
    }, "getDefaultExtensionConfiguration");
    resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig3(config),
        ...resolveRetryRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
    init_defaultExtensionConfiguration2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c5) {
    return "%" + c5.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
    __name(extendedEncodeURIComponent, "extendedEncodeURIComponent");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var init_get_array_if_single_item = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode;
var init_get_value_from_text_node = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    }, "getValueFromTextNode");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var StringWrapper;
var init_lazy_json = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/lazy-json.js"() {
    StringWrapper = /* @__PURE__ */ __name(function() {
      const Class = Object.getPrototypeOf(this).constructor;
      const Constructor = Function.bind.apply(String, [null, ...arguments]);
      const instance = new Constructor();
      Object.setPrototypeOf(instance, Class.prototype);
      return instance;
    }, "StringWrapper");
    StringWrapper.prototype = Object.create(String.prototype, {
      constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(StringWrapper, String);
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
var take, mapWithFilter, applyInstruction, nonNullish, pass;
var init_object_mapping = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
    __name(map, "map");
    take = /* @__PURE__ */ __name((source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    }, "take");
    mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
      return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    }, "mapWithFilter");
    applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    }, "applyInstruction");
    nonNullish = /* @__PURE__ */ __name((_2) => _2 != null, "nonNullish");
    pass = /* @__PURE__ */ __name((_2) => _2, "pass");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var resolvedPath;
var init_resolve_path = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath = /* @__PURE__ */ __name((resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    }, "resolvedPath");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var init_ser_utils = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/serde-json.js
var _json;
var init_serde_json = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
    _json = /* @__PURE__ */ __name((obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_2) => _2 != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    }, "_json");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/split-every.js
var init_split_every = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/split-every.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es34 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/smithy-client/dist-es/index.js"() {
    init_NoOpLogger();
    init_client2();
    init_collect_stream_body();
    init_command2();
    init_constants5();
    init_create_aggregated_client();
    init_date_utils();
    init_default_error_handler();
    init_defaults_mode();
    init_emitWarningIfUnsupportedVersion();
    init_extensions3();
    init_exceptions();
    init_extended_encode_uri_component();
    init_get_array_if_single_item();
    init_get_value_from_text_node();
    init_lazy_json();
    init_object_mapping();
    init_parse_utils();
    init_resolve_path();
    init_ser_utils();
    init_serde_json();
    init_split_every();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js
import { Readable as Readable2 } from "stream";
var isStreamingPayload;
var init_isStreamingPayload = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js"() {
    isStreamingPayload = /* @__PURE__ */ __name((request2) => request2?.body instanceof Readable2 || typeof ReadableStream !== "undefined" && request2?.body instanceof ReadableStream, "isStreamingPayload");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware, isRetryStrategyV2, getRetryErrorInfo, getRetryErrorType, retryMiddlewareOptions, getRetryPlugin, getRetryAfterHint;
var init_retryMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js"() {
    init_dist_es2();
    init_dist_es19();
    init_dist_es34();
    init_dist_es20();
    init_esm_node();
    init_isStreamingPayload();
    init_util2();
    retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request: request2 } = args;
        const isRequest = HttpRequest2.isInstance(request2);
        if (isRequest) {
          request2.headers[INVOCATION_ID_HEADER] = v4_default();
        }
        while (true) {
          try {
            if (isRequest) {
              request2.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e5) {
            const retryErrorInfo = getRetryErrorInfo(e5);
            lastError = asSdkError(e5);
            if (isRequest && isStreamingPayload(request2)) {
              (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    }, "retryMiddleware");
    isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
    getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = getRetryAfterHint(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    }, "getRetryErrorInfo");
    getRetryErrorType = /* @__PURE__ */ __name((error) => {
      if (isThrottlingError(error))
        return "THROTTLING";
      if (isTransientError(error))
        return "TRANSIENT";
      if (isServerError(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    }, "getRetryErrorType");
    retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    getRetryPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }, "applyToStack")
    }), "getRetryPlugin");
    getRetryAfterHint = /* @__PURE__ */ __name((response) => {
      if (!HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    }, "getRetryAfterHint");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/index.js
var init_dist_es35 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy2();
    init_StandardRetryStrategy2();
    init_configurations2();
    init_delayDecider();
    init_omitRetryHeadersMiddleware();
    init_retryDecider();
    init_retryMiddleware();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_dist_es35();
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: retryMiddlewareOptions.name
    };
    getHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpSigningPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      static {
        __name(this, "DefaultIdentityProviderConfig");
      }
      constructor(config) {
        this.authSchemes = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var init_httpApiKeyAuth = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    init_dist_es2();
    init_dist_es();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var init_httpBearerAuth = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    init_dist_es2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      static {
        __name(this, "NoAuthSigner");
      }
      async sign(httpRequest2, identity, signingProperties) {
        return httpRequest2;
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs, "createIsIdentityExpiredFunction");
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
    memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    }, "memoizeIdentityProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/getSmithyContext.js
var init_getSmithyContext2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    init_dist_es();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2;
var init_normalizeProvider2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider2 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var RequestBuilder;
var init_requestBuilder = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
    init_dist_es2();
    init_dist_es34();
    __name(requestBuilder, "requestBuilder");
    RequestBuilder = class {
      static {
        __name(this, "RequestBuilder");
      }
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new HttpRequest2({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return /* @__PURE__ */ __name(async function* paginateOperation(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input[inputTokenName] = token;
      if (pageSizeTokenName) {
        input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  }, "paginateOperation");
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = /* @__PURE__ */ __name(async (CommandCtor, client, input, ...args) => {
      return await client.send(new CommandCtor(input), ...args);
    }, "makePagedClientRequest");
    __name(createPaginator, "createPaginator");
    get = /* @__PURE__ */ __name((fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    }, "get");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/index.js
var init_dist_es36 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/core/dist-es/index.js"() {
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_util_identity_and_auth();
    init_getSmithyContext2();
    init_normalizeProvider2();
    init_requestBuilder();
    init_createPaginator();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-content-length/dist-es/index.js
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request2 = args.request;
    if (HttpRequest2.isInstance(request2)) {
      const { body, headers } = request2;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request2.headers = {
            ...request2.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
var CONTENT_LENGTH_HEADER, contentLengthMiddlewareOptions, getContentLengthPlugin;
var init_dist_es37 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/middleware-content-length/dist-es/index.js"() {
    init_dist_es2();
    CONTENT_LENGTH_HEADER = "content-length";
    __name(contentLengthMiddleware, "contentLengthMiddleware");
    contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }, "applyToStack")
    }), "getContentLengthPlugin");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var warningEmitted2, emitWarningIfUnsupportedVersion2;
var init_emitWarningIfUnsupportedVersion2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    warningEmitted2 = false;
    emitWarningIfUnsupportedVersion2 = /* @__PURE__ */ __name((version) => {
      if (version && !warningEmitted2 && parseInt(version.substring(1, version.indexOf("."))) < 18) {
        warningEmitted2 = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
      }
    }, "emitWarningIfUnsupportedVersion");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var getDateHeader;
var init_getDateHeader = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    init_dist_es2();
    getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    }, "getUpdatedSystemClockOffset");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    init_dist_es2();
    init_utils2();
    throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    }, "throwSigningPropertyError");
    validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingName
      };
    }, "validateSigningProperties");
    AwsSdkSigV4Signer = class {
      static {
        __name(this, "AwsSdkSigV4Signer");
      }
      async sign(httpRequest2, identity, signingProperties) {
        if (!HttpRequest2.isInstance(httpRequest2)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
        const signedRequest = await signer.sign(httpRequest2, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader(error.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
var init_constants6 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/constants.js"() {
    ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    AUTH_HEADER = "authorization";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    DATE_HEADER = "date";
    GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    SHA256_HEADER = "x-amz-content-sha256";
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    PROXY_HEADER_PATTERN = /^proxy-/;
    SEC_HEADER_PATTERN = /^sec-/;
    ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    MAX_CACHE_SIZE = 50;
    KEY_TYPE_IDENTIFIER = "aws4_request";
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
var init_credentialDerivation = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
    init_dist_es32();
    init_dist_es25();
    init_constants6();
    signingKeyCache = {};
    cacheQueue = [];
    createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
    getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    }, "getSigningKey");
    hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update(toUint8Array(data));
      return hash.digest();
    }, "hmac");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders;
var init_getCanonicalHeaders = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
    init_constants6();
    getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery;
var init_getCanonicalQuery = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
    init_dist_es27();
    init_constants6();
    getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
          serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).sort().join("&");
        }
      }
      return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    }, "getCanonicalQuery");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash;
var init_getPayloadHash = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
    init_dist_es22();
    init_dist_es32();
    init_dist_es25();
    init_constants6();
    getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
function negate(bytes) {
  for (let i5 = 0; i5 < 8; i5++) {
    bytes[i5] ^= 255;
  }
  for (let i5 = 7; i5 > -1; i5--) {
    bytes[i5]++;
    if (bytes[i5] !== 0)
      break;
  }
}
var HeaderFormatter, HEADER_VALUE_TYPE, UUID_PATTERN, Int64;
var init_HeaderFormatter = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
    init_dist_es32();
    init_dist_es25();
    HeaderFormatter = class {
      static {
        __name(this, "HeaderFormatter");
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    (function(HEADER_VALUE_TYPE2) {
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    Int64 = class _Int64 {
      static {
        __name(this, "Int64");
      }
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
          bytes[i5] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(negate, "negate");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader;
var init_headerUtil = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
    hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery;
var init_moveHeadersToQuery = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
    init_dist_es2();
    moveHeadersToQuery = /* @__PURE__ */ __name((request2, options = {}) => {
      const { headers, query = {} } = HttpRequest2.clone(request2);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request2,
        headers,
        query
      };
    }, "moveHeadersToQuery");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest;
var init_prepareRequest = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
    init_dist_es2();
    init_constants6();
    prepareRequest = /* @__PURE__ */ __name((request2) => {
      request2 = HttpRequest2.clone(request2);
      for (const headerName of Object.keys(request2.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request2.headers[headerName];
        }
      }
      return request2;
    }, "prepareRequest");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601, toDate;
var init_utilDate = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
    iso8601 = /* @__PURE__ */ __name((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
    toDate = /* @__PURE__ */ __name((time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    }, "toDate");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4, formatDate, getCanonicalHeaderList;
var init_SignatureV4 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
    init_dist_es32();
    init_dist_es10();
    init_dist_es27();
    init_dist_es25();
    init_constants6();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_HeaderFormatter();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_utilDate();
    SignatureV4 = class {
      static {
        __name(this, "SignatureV4");
      }
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.headerFormatter = new HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request2 = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
          request2.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request2.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request2.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request2.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request2.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        request2.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request2.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request2;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request2 = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request2.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request2.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request2, this.sha256);
        if (!hasHeader(SHA256_HEADER, request2.headers) && this.applyChecksum) {
          request2.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, payloadHash));
        request2.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request2;
      }
      createCanonicalRequest(request2, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request2.method}
${this.getCanonicalPath(request2)}
${getCanonicalQuery(request2)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
    };
    formatDate = /* @__PURE__ */ __name((now) => {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }, "formatDate");
    getCanonicalHeaderList = /* @__PURE__ */ __name((headers) => Object.keys(headers).sort().join(";"), "getCanonicalHeaderList");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es38 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/signature-v4/dist-es/index.js"() {
    init_SignatureV4();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_credentialDerivation();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_dist_es36();
    init_dist_es38();
    resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config) => {
      let normalizedCreds;
      if (config.credentials) {
        normalizedCreds = memoizeIdentityProvider(config.credentials, isIdentityExpired, doesIdentityRequireRefresh);
      }
      if (!normalizedCreds) {
        if (config.credentialDefaultProvider) {
          normalizedCreds = normalizeProvider2(config.credentialDefaultProvider(Object.assign({}, config, {
            parentClientConfig: config
          })));
        } else {
          normalizedCreds = /* @__PURE__ */ __name(async () => {
            throw new Error("`credentials` is missing");
          }, "normalizedCreds");
        }
      }
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider2(config.signer);
      } else if (config.regionInfoProvider) {
        signer = /* @__PURE__ */ __name(() => normalizeProvider2(config.region)().then(async (region) => [
          await config.regionInfoProvider(region, {
            useFipsEndpoint: await config.useFipsEndpoint(),
            useDualstackEndpoint: await config.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: normalizedCreds,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        }), "signer");
      } else {
        signer = /* @__PURE__ */ __name(async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config.signingName || config.defaultSigningName,
            signingRegion: await normalizeProvider2(config.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: normalizedCreds,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        }, "signer");
      }
      return {
        ...config,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer
      };
    }, "resolveAwsSdkSigV4Config");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_resolveAwsSdkSigV4Config();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var init_coercing_serializers = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var awsExpectUnion;
var init_awsExpectUnion = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    init_dist_es34();
    awsExpectUnion = /* @__PURE__ */ __name((value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return expectUnion(value);
    }, "awsExpectUnion");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString;
var init_common = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    init_dist_es34();
    collectBodyString = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e5) {
          if (e5?.name === "SyntaxError") {
            Object.defineProperty(e5, "$responseBodyText", {
              value: encoded
            });
          }
          throw e5;
        }
      }
      return {};
    }), "parseJsonBody");
    parseJsonErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    }, "parseJsonErrorBody");
    loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
      const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase()), "findKey");
      const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      }, "sanitizeErrorCode");
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    }, "loadRestJsonErrorCode");
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = /* @__PURE__ */ __name(function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    }, "getAllMatches");
    var isName = /* @__PURE__ */ __name(function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    }, "isName");
    exports.isExist = function(v6) {
      return typeof v6 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a5, arrayMode) {
      if (a5) {
        const keys = Object.keys(a5);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          if (arrayMode === "strict") {
            target[keys[i5]] = [a5[keys[i5]]];
          } else {
            target[keys[i5]] = a5[keys[i5]];
          }
        }
      }
    };
    exports.getValue = function(v6) {
      if (exports.isExist(v6)) {
        return v6;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<" && xmlData[i5 + 1] === "?") {
          i5 += 2;
          i5 = readPI(xmlData, i5);
          if (i5.err) return i5;
        } else if (xmlData[i5] === "<") {
          let tagStartPos = i5;
          i5++;
          if (xmlData[i5] === "!") {
            i5 = readCommentAndCDATA(xmlData, i5);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i5] === "/") {
              closingTag = true;
              i5++;
            }
            let tagName = "";
            for (; i5 < xmlData.length && xmlData[i5] !== ">" && xmlData[i5] !== " " && xmlData[i5] !== "	" && xmlData[i5] !== "\n" && xmlData[i5] !== "\r"; i5++) {
              tagName += xmlData[i5];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i5--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i5));
            }
            const result = readAttributeStr(xmlData, i5);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i5));
            }
            let attrStr = result.value;
            i5 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i5 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i5));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i5 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i5));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i5++; i5 < xmlData.length; i5++) {
              if (xmlData[i5] === "<") {
                if (xmlData[i5 + 1] === "!") {
                  i5++;
                  i5 = readCommentAndCDATA(xmlData, i5);
                  continue;
                } else if (xmlData[i5 + 1] === "?") {
                  i5 = readPI(xmlData, ++i5);
                  if (i5.err) return i5;
                } else {
                  break;
                }
              } else if (xmlData[i5] === "&") {
                const afterAmp = validateAmpersand(xmlData, i5);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i5));
                i5 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i5])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i5));
                }
              }
            }
            if (xmlData[i5] === "<") {
              i5--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i5])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i5] + "' is not expected.", getLineNumberForPosition(xmlData, i5));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t5) => t5.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    __name(isWhiteSpace, "isWhiteSpace");
    function readPI(xmlData, i5) {
      const start = i5;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] == "?" || xmlData[i5] == " ") {
          const tagname = xmlData.substr(start, i5 - start);
          if (i5 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i5));
          } else if (xmlData[i5] == "?" && xmlData[i5 + 1] == ">") {
            i5++;
            break;
          } else {
            continue;
          }
        }
      }
      return i5;
    }
    __name(readPI, "readPI");
    function readCommentAndCDATA(xmlData, i5) {
      if (xmlData.length > i5 + 5 && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === "-") {
        for (i5 += 3; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "-" && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      } else if (xmlData.length > i5 + 8 && xmlData[i5 + 1] === "D" && xmlData[i5 + 2] === "O" && xmlData[i5 + 3] === "C" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "Y" && xmlData[i5 + 6] === "P" && xmlData[i5 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i5] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i5 + 9 && xmlData[i5 + 1] === "[" && xmlData[i5 + 2] === "C" && xmlData[i5 + 3] === "D" && xmlData[i5 + 4] === "A" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "A" && xmlData[i5 + 7] === "[") {
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "]" && xmlData[i5 + 1] === "]" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      }
      return i5;
    }
    __name(readCommentAndCDATA, "readCommentAndCDATA");
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i5) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === doubleQuote || xmlData[i5] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i5];
          } else if (startChar !== xmlData[i5]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i5] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i5];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i5,
        tagClosed
      };
    }
    __name(readAttributeStr, "readAttributeStr");
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i5 = 0; i5 < matches.length; i5++) {
        if (matches[i5][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' has no space in starting.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] !== void 0 && matches[i5][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' is without value.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i5][2] + "' is not allowed.", getPositionFromMatch(matches[i5]));
        }
        const attrName = matches[i5][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i5]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i5]));
        }
      }
      return true;
    }
    __name(validateAttributeString, "validateAttributeString");
    function validateNumberAmpersand(xmlData, i5) {
      let re = /\d/;
      if (xmlData[i5] === "x") {
        i5++;
        re = /[\da-fA-F]/;
      }
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === ";")
          return i5;
        if (!xmlData[i5].match(re))
          break;
      }
      return -1;
    }
    __name(validateNumberAmpersand, "validateNumberAmpersand");
    function validateAmpersand(xmlData, i5) {
      i5++;
      if (xmlData[i5] === ";")
        return -1;
      if (xmlData[i5] === "#") {
        i5++;
        return validateNumberAmpersand(xmlData, i5);
      }
      let count = 0;
      for (; i5 < xmlData.length; i5++, count++) {
        if (xmlData[i5].match(/\w/) && count < 20)
          continue;
        if (xmlData[i5] === ";")
          break;
        return -1;
      }
      return i5;
    }
    __name(validateAmpersand, "validateAmpersand");
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    __name(getErrorObject, "getErrorObject");
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    __name(validateAttrName, "validateAttrName");
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    __name(validateTagName, "validateTagName");
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    __name(getLineNumberForPosition, "getLineNumberForPosition");
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
    __name(getPositionFromMatch, "getPositionFromMatch");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: /* @__PURE__ */ __name(function(tagName, val2) {
        return val2;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, val2) {
        return val2;
      }, "attributeValueProcessor"),
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: /* @__PURE__ */ __name(() => false, "isArray"),
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: /* @__PURE__ */ __name(function(tagName, jPath, attrs) {
        return tagName;
      }, "updateTag")
      // skipEmptyListItem: false
    };
    var buildOptions = /* @__PURE__ */ __name(function(options) {
      return Object.assign({}, defaultOptions, options);
    }, "buildOptions");
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
    "use strict";
    var XmlNode = class {
      static {
        __name(this, "XmlNode");
      }
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
    var util = require_util();
    function readDocType(xmlData, i5) {
      const entities = {};
      if (xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "C" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "Y" && xmlData[i5 + 7] === "P" && xmlData[i5 + 8] === "E") {
        i5 = i5 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i5)) {
              i5 += 7;
              [entityName, val, i5] = readEntityExp(xmlData, i5 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i5)) i5 += 8;
            else if (hasBody && isAttlist(xmlData, i5)) i5 += 8;
            else if (hasBody && isNotation(xmlData, i5)) i5 += 9;
            else if (isComment) comment = true;
            else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i5] === ">") {
            if (comment) {
              if (xmlData[i5 - 1] === "-" && xmlData[i5 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i5] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i5];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i5 };
    }
    __name(readDocType, "readDocType");
    function readEntityExp(xmlData, i5) {
      let entityName2 = "";
      for (; i5 < xmlData.length && (xmlData[i5] !== "'" && xmlData[i5] !== '"'); i5++) {
        entityName2 += xmlData[i5];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
      const startChar = xmlData[i5++];
      let val2 = "";
      for (; i5 < xmlData.length && xmlData[i5] !== startChar; i5++) {
        val2 += xmlData[i5];
      }
      return [entityName2, val2, i5];
    }
    __name(readEntityExp, "readEntityExp");
    function isComment(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "-" && xmlData[i5 + 3] === "-") return true;
      return false;
    }
    __name(isComment, "isComment");
    function isEntity(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "N" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "I" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "Y") return true;
      return false;
    }
    __name(isEntity, "isEntity");
    function isElement(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "L" && xmlData[i5 + 4] === "E" && xmlData[i5 + 5] === "M" && xmlData[i5 + 6] === "E" && xmlData[i5 + 7] === "N" && xmlData[i5 + 8] === "T") return true;
      return false;
    }
    __name(isElement, "isElement");
    function isAttlist(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "A" && xmlData[i5 + 3] === "T" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "L" && xmlData[i5 + 6] === "I" && xmlData[i5 + 7] === "S" && xmlData[i5 + 8] === "T") return true;
      return false;
    }
    __name(isAttlist, "isAttlist");
    function isNotation(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "N" && xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "A" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "I" && xmlData[i5 + 8] === "O" && xmlData[i5 + 9] === "N") return true;
      return false;
    }
    __name(isNotation, "isNotation");
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    __name(validateEntityName, "validateEntityName");
    module.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (eNotation) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr) return num;
              else if (sign + numTrimmedByZeros === numStr) return num;
              else return str;
            }
            if (trimmedStr === numStr) return num;
            else if (trimmedStr === sign + numStr) return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    __name(toNumber, "toNumber");
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    __name(trimZeros, "trimZeros");
    module.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      static {
        __name(this, "OrderedObjParser");
      }
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i5 = 0; i5 < entKeys.length; i5++) {
        const ent = entKeys[i5];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    __name(addExternalEntities, "addExternalEntities");
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    __name(parseTextData, "parseTextData");
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    __name(resolveNameSpace, "resolveNameSpace");
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i5 = 0; i5 < len; i5++) {
          const attrName = this.resolveNameSpace(matches[i5][1]);
          let oldVal = matches[i5][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__") aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    __name(buildAttributesMap, "buildAttributesMap");
    var parseXml = /* @__PURE__ */ __name(function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        const ch = xmlData[i5];
        if (ch === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            let tagData = readTagExp(xmlData, i5, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i5 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i5 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i5 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i5 = endIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i5);
            this.docTypeEntities = result.entities;
            i5 = result.i;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i5 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0) val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i5 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i5, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i5 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i5 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${tagName}`);
                i5 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i5 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i5];
        }
      }
      return xmlObj.child;
    }, "parseXml");
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    __name(addChild, "addChild");
    var replaceEntitiesValue = /* @__PURE__ */ __name(function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    }, "replaceEntitiesValue");
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    __name(saveTextToParentTag, "saveTextToParentTag");
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
      }
      return false;
    }
    __name(isItStopNode, "isItStopNode");
    function tagExpWithClosingIndex(xmlData, i5, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i5; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary) attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
    function findClosingIndex(xmlData, str, i5, errMsg) {
      const closingIndex = xmlData.indexOf(str, i5);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    __name(findClosingIndex, "findClosingIndex");
    function readTagExp(xmlData, i5, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i5 + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    __name(readTagExp, "readTagExp");
    function readStopNodeData(xmlData, tagName, i5) {
      const startIndex = i5;
      let openTagCount = 1;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i5),
                  i: closeIndex
                };
              }
            }
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i5 + 1, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i5 + 3, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "StopNode is not closed.") - 2;
            i5 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i5, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i5 = tagData.closeIndex;
            }
          }
        }
      }
    }
    __name(readStopNodeData, "readStopNodeData");
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    __name(parseValue, "parseValue");
    module.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    __name(prettify, "prettify");
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
            else val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    __name(compress, "compress");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@") return key;
      }
    }
    __name(propName, "propName");
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          const atrrName = keys[i5];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    __name(assignAttributes, "assignAttributes");
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    __name(isLeafTag, "isLeafTag");
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      static {
        __name(this, "XMLParser");
      }
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    __name(toXml, "toXml");
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    __name(arrToStr, "arrToStr");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@") return key;
      }
    }
    __name(propName, "propName");
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    __name(attr_to_str, "attr_to_str");
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    __name(isStopNode, "isStopNode");
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i5 = 0; i5 < options.entities.length; i5++) {
          const entity = options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    __name(replaceEntitiesValue, "replaceEntitiesValue");
    module.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: /* @__PURE__ */ __name(function(key, a5) {
        return a5;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, a5) {
        return a5;
      }, "attributeValueProcessor"),
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    __name(Builder, "Builder");
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j5 = 0; j5 < arrLen; j5++) {
            const item = jObj[key][j5];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j5 = 0; j5 < L; j5++) {
              attrStr += this.buildAttrPairStr(Ks[j5], "" + jObj[key][Ks[j5]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    __name(processTextOrObjNode, "processTextOrObjNode");
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i5 = 0; i5 < this.options.entities.length; i5++) {
          const entity = this.options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    __name(indentate, "indentate");
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    __name(isAttribute, "isAttribute");
    module.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_fast_xml_parser, parseXmlBody, parseXmlErrorBody;
var init_parseXmlBody = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    init_dist_es34();
    import_fast_xml_parser = __toESM(require_fxp());
    init_common();
    parseXmlBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: /* @__PURE__ */ __name((_2, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0, "tagValueProcessor")
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e5) {
          if (e5 && typeof e5 === "object") {
            Object.defineProperty(e5, "$responseBodyText", {
              value: encoded
            });
          }
          throw e5;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
      }
      return {};
    }), "parseXmlBody");
    parseXmlErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    }, "parseXmlErrorBody");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_coercing_serializers();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_parseXmlBody();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/index.js
var init_dist_es39 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client3();
    init_httpAuthSchemes2();
    init_protocols();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var ENV_KEY, ENV_SECRET, ENV_SESSION, ENV_EXPIRATION, ENV_CREDENTIAL_SCOPE, fromEnv2;
var init_fromEnv2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js"() {
    init_dist_es12();
    ENV_KEY = "AWS_ACCESS_KEY_ID";
    ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    ENV_SESSION = "AWS_SESSION_TOKEN";
    ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
    fromEnv2 = /* @__PURE__ */ __name((init) => async () => {
      init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const accessKeyId = process.env[ENV_KEY];
      const secretAccessKey = process.env[ENV_SECRET];
      const sessionToken = process.env[ENV_SESSION];
      const expiry = process.env[ENV_EXPIRATION];
      const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
      if (accessKeyId && secretAccessKey) {
        return {
          accessKeyId,
          secretAccessKey,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) },
          ...credentialScope && { credentialScope }
        };
      }
      throw new CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
    }, "fromEnv");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-env/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  ENV_CREDENTIAL_SCOPE: () => ENV_CREDENTIAL_SCOPE,
  ENV_EXPIRATION: () => ENV_EXPIRATION,
  ENV_KEY: () => ENV_KEY,
  ENV_SECRET: () => ENV_SECRET,
  ENV_SESSION: () => ENV_SESSION,
  fromEnv: () => fromEnv2
});
var init_dist_es40 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-env/dist-es/index.js"() {
    init_fromEnv2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js
import { Buffer as Buffer4 } from "buffer";
import { request } from "http";
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = request({
      method: "GET",
      ...options,
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(Buffer4.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
var init_httpRequest2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js"() {
    init_dist_es12();
    __name(httpRequest, "httpRequest");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
var isImdsCredentials, fromImdsCredentials;
var init_ImdsCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js"() {
    isImdsCredentials = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
    fromImdsCredentials = /* @__PURE__ */ __name((creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration),
      ...creds.AccountId && { accountId: creds.AccountId }
    }), "fromImdsCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
var DEFAULT_TIMEOUT, DEFAULT_MAX_RETRIES, providerConfigFromInit;
var init_RemoteProviderInit = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js"() {
    DEFAULT_TIMEOUT = 1e3;
    DEFAULT_MAX_RETRIES = 0;
    providerConfigFromInit = /* @__PURE__ */ __name(({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout }), "providerConfigFromInit");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
var retry;
var init_retry3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js"() {
    retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i5 = 0; i5 < maxRetries; i5++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    }, "retry");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js
import { parse } from "url";
var ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, ENV_CMDS_AUTH_TOKEN, fromContainerMetadata, requestFromEcsImds, CMDS_IP, GREENGRASS_HOSTS, GREENGRASS_PROTOCOLS, getCmdsUri;
var init_fromContainerMetadata = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js"() {
    init_dist_es12();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri({ logger: init.logger });
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: init.logger
          });
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    }, "fromContainerMetadata");
    requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout
      });
      return buffer.toString();
    }, "requestFromEcsImds");
    CMDS_IP = "169.254.170.2";
    GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    getCmdsUri = /* @__PURE__ */ __name(async ({ logger: logger3 }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = parse(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: false,
            logger: logger3
          });
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: false,
            logger: logger3
          });
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, {
        tryNextLink: false,
        logger: logger3
      });
    }, "getCmdsUri");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js
var InstanceMetadataV1FallbackError;
var init_InstanceMetadataV1FallbackError = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js"() {
    init_dist_es12();
    InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends CredentialsProviderError {
      static {
        __name(this, "InstanceMetadataV1FallbackError");
      }
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
var init_Endpoint = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js"() {
    (function(Endpoint2) {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
    })(Endpoint || (Endpoint = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
var ENV_ENDPOINT_NAME, CONFIG_ENDPOINT_NAME, ENDPOINT_CONFIG_OPTIONS;
var init_EndpointConfigOptions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js"() {
    ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => env3[ENV_ENDPOINT_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_ENDPOINT_NAME], "configFileSelector"),
      default: void 0
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
var init_EndpointMode = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js"() {
    (function(EndpointMode2) {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
    })(EndpointMode || (EndpointMode = {}));
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js
var ENV_ENDPOINT_MODE_NAME, CONFIG_ENDPOINT_MODE_NAME, ENDPOINT_MODE_CONFIG_OPTIONS;
var init_EndpointModeConfigOptions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js"() {
    init_EndpointMode();
    ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => env3[ENV_ENDPOINT_MODE_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_ENDPOINT_MODE_NAME], "configFileSelector"),
      default: EndpointMode.IPv4
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js
var getInstanceMetadataEndpoint, getFromEndpointConfig, getFromEndpointModeConfig;
var init_getInstanceMetadataEndpoint = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js"() {
    init_dist_es14();
    init_dist_es16();
    init_Endpoint();
    init_EndpointConfigOptions();
    init_EndpointMode();
    init_EndpointModeConfigOptions();
    getInstanceMetadataEndpoint = /* @__PURE__ */ __name(async () => parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
    getFromEndpointConfig = /* @__PURE__ */ __name(async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
    getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
      const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case EndpointMode.IPv4:
          return Endpoint.IPv4;
        case EndpointMode.IPv6:
          return Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    }, "getFromEndpointModeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS, STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS, STATIC_STABILITY_DOC_URL, getExtendedInstanceMetadataCredentials;
var init_getExtendedInstanceMetadataCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js"() {
    STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger3) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger3.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL);
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    }, "getExtendedInstanceMetadataCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js
var staticStabilityProvider;
var init_staticStabilityProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js"() {
    init_getExtendedInstanceMetadataCredentials();
    staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
      const logger3 = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger3);
          }
        } catch (e5) {
          if (pastCredentials) {
            logger3.warn("Credential renew failed: ", e5);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger3);
          } else {
            throw e5;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    }, "staticStabilityProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js
var IMDS_PATH, IMDS_TOKEN_PATH, AWS_EC2_METADATA_V1_DISABLED, PROFILE_AWS_EC2_METADATA_V1_DISABLED, X_AWS_EC2_METADATA_TOKEN, fromInstanceMetadata, getInstanceMetadataProvider, getMetadataToken, getProfile, getCredentialsFromProfile;
var init_fromInstanceMetadata = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js"() {
    init_dist_es14();
    init_dist_es12();
    init_InstanceMetadataV1FallbackError();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    init_getInstanceMetadataEndpoint();
    init_staticStabilityProvider();
    IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    IMDS_TOKEN_PATH = "/latest/api/token";
    AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    fromInstanceMetadata = /* @__PURE__ */ __name((init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger }), "fromInstanceMetadata");
    getInstanceMetadataProvider = /* @__PURE__ */ __name((init = {}) => {
      let disableFetchToken = false;
      const { logger: logger3, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials2 = /* @__PURE__ */ __name(async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await loadConfig({
            environmentVariableSelector: /* @__PURE__ */ __name((env3) => {
              const envValue = env3[AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
              if (envValue === void 0) {
                throw new CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`, { logger: init.logger });
              }
              return fallbackBlockedFromProcessEnv;
            }, "environmentVariableSelector"),
            configFileSelector: /* @__PURE__ */ __name((profile2) => {
              const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
              return fallbackBlockedFromProfile;
            }, "configFileSelector"),
            default: false
          }, {
            profile
          })();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      }, "getCredentials");
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials2(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if (error?.statusCode === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials2(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials2(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    }, "getInstanceMetadataProvider");
    getMetadataToken = /* @__PURE__ */ __name(async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }), "getMetadataToken");
    getProfile = /* @__PURE__ */ __name(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
    getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options, init) => {
      const credentialsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile
      })).toString());
      if (!isImdsCredentials(credentialsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: init.logger
        });
      }
      return fromImdsCredentials(credentialsResponse);
    }, "getCredentialsFromProfile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/types.js
var init_types8 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
  DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
  ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
  ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
  Endpoint: () => Endpoint,
  fromContainerMetadata: () => fromContainerMetadata,
  fromInstanceMetadata: () => fromInstanceMetadata,
  getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
  httpRequest: () => httpRequest,
  providerConfigFromInit: () => providerConfigFromInit
});
var init_dist_es41 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/credential-provider-imds/dist-es/index.js"() {
    init_fromContainerMetadata();
    init_fromInstanceMetadata();
    init_RemoteProviderInit();
    init_types8();
    init_httpRequest2();
    init_getInstanceMetadataEndpoint();
    init_Endpoint();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var init_httpExtensionConfiguration2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    init_httpExtensionConfiguration2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/abort.js
var init_abort2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/abort.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation3;
var init_auth3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/auth.js"() {
    (function(HttpAuthLocation5) {
      HttpAuthLocation5["HEADER"] = "header";
      HttpAuthLocation5["QUERY"] = "query";
    })(HttpAuthLocation3 || (HttpAuthLocation3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation3;
var init_HttpApiKeyAuth2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    (function(HttpApiKeyAuthLocation5) {
      HttpApiKeyAuthLocation5["HEADER"] = "header";
      HttpApiKeyAuthLocation5["QUERY"] = "query";
    })(HttpApiKeyAuthLocation3 || (HttpApiKeyAuthLocation3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/index.js
var init_auth4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/auth/index.js"() {
    init_auth3();
    init_HttpApiKeyAuth2();
    init_HttpAuthScheme2();
    init_HttpAuthSchemeProvider2();
    init_HttpSigner2();
    init_IdentityProviderConfig2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/checksum.js
var init_checksum4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/checksum.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/client.js
var init_client4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/client.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/command.js
var init_command3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/command.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/config.js
var init_config4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/config.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/manager.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/pool.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/index.js
var init_connection2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/connection/index.js"() {
    init_config4();
    init_manager2();
    init_pool2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/crypto.js
var init_crypto2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/crypto.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/encode.js
var init_encode2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/encode.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme3;
var init_endpoint2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoint.js"() {
    (function(EndpointURLScheme5) {
      EndpointURLScheme5["HTTP"] = "http";
      EndpointURLScheme5["HTTPS"] = "https";
    })(EndpointURLScheme3 || (EndpointURLScheme3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    init_EndpointRuleObject4();
    init_ErrorRuleObject4();
    init_RuleSetObject4();
    init_shared4();
    init_TreeRuleObject4();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/eventStream.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId3;
var init_checksum5 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    (function(AlgorithmId5) {
      AlgorithmId5["MD5"] = "md5";
      AlgorithmId5["CRC32"] = "crc32";
      AlgorithmId5["CRC32C"] = "crc32c";
      AlgorithmId5["SHA1"] = "sha1";
      AlgorithmId5["SHA256"] = "sha256";
    })(AlgorithmId3 || (AlgorithmId3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    init_checksum5();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions5 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_defaultClientConfiguration2();
    init_defaultExtensionConfiguration3();
    init_checksum5();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/http.js
var FieldPosition3;
var init_http2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/http.js"() {
    (function(FieldPosition5) {
      FieldPosition5[FieldPosition5["HEADER"] = 0] = "HEADER";
      FieldPosition5[FieldPosition5["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition3 || (FieldPosition3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/identity.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/index.js
var init_identity4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/identity/index.js"() {
    init_apiKeyIdentity2();
    init_awsCredentialIdentity2();
    init_identity3();
    init_tokenIdentity2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/logger.js
var init_logger2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/logger.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/middleware.js
var init_middleware2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/middleware.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/pagination.js
var init_pagination2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/pagination.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType3;
var init_profile2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/profile.js"() {
    (function(IniSectionType5) {
      IniSectionType5["PROFILE"] = "profile";
      IniSectionType5["SSO_SESSION"] = "sso-session";
      IniSectionType5["SERVICES"] = "services";
    })(IniSectionType3 || (IniSectionType3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/response.js
var init_response2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/response.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/retry.js
var init_retry4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/retry.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/serde.js
var init_serde2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/serde.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/shapes.js
var init_shapes2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/shapes.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/signature.js
var init_signature2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/signature.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/stream.js
var init_stream2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/stream.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol3;
var init_transfer2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transfer.js"() {
    (function(RequestHandlerProtocol5) {
      RequestHandlerProtocol5["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol5["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol5["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol3 || (RequestHandlerProtocol3 = {}));
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/uri.js
var init_uri2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/uri.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/util.js
var init_util3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/util.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/waiter.js
var init_waiter2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/waiter.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/index.js
var init_dist_es42 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/types/dist-es/index.js"() {
    init_abort2();
    init_auth4();
    init_blob_payload_input_types2();
    init_checksum4();
    init_client4();
    init_command3();
    init_connection2();
    init_crypto2();
    init_encode2();
    init_endpoint2();
    init_endpoints2();
    init_eventStream2();
    init_extensions5();
    init_http2();
    init_httpHandlerInitialization2();
    init_identity4();
    init_logger2();
    init_middleware2();
    init_pagination2();
    init_profile2();
    init_response2();
    init_retry4();
    init_serde2();
    init_shapes2();
    init_signature2();
    init_stream2();
    init_streaming_blob_common_types2();
    init_streaming_blob_payload_input_types2();
    init_streaming_blob_payload_output_types2();
    init_transfer2();
    init_client_payload_blob_type_narrow2();
    init_no_undefined2();
    init_type_transform2();
    init_uri2();
    init_util3();
    init_waiter2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/Field.js"() {
    init_dist_es42();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery2(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest3;
var init_httpRequest3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    HttpRequest3 = class _HttpRequest {
      static {
        __name(this, "HttpRequest");
      }
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request2) {
        const cloned = new _HttpRequest({
          ...request2,
          headers: { ...request2.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery2(cloned.query);
        }
        return cloned;
      }
      static isInstance(request2) {
        if (!request2) {
          return false;
        }
        const req = request2;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
    __name(cloneQuery2, "cloneQuery");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse2;
var init_httpResponse2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    HttpResponse2 = class {
      static {
        __name(this, "HttpResponse");
      }
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/types.js
var init_types9 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es43 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/protocol-http/dist-es/index.js"() {
    init_extensions4();
    init_Field2();
    init_Fields2();
    init_httpHandler2();
    init_httpRequest3();
    init_httpResponse2();
    init_isValidHostname2();
    init_types9();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri2, hexEncode2;
var init_escape_uri2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    escapeUri2 = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode2), "escapeUri");
    hexEncode2 = /* @__PURE__ */ __name((c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
    init_escape_uri2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es44 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    init_escape_uri2();
    init_escape_uri_path2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString2(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri2(key);
    if (Array.isArray(value)) {
      for (let i5 = 0, iLen = value.length; i5 < iLen; i5++) {
        parts.push(`${key}=${escapeUri2(value[i5])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri2(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
var init_dist_es45 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/querystring-builder/dist-es/index.js"() {
    init_dist_es44();
    __name(buildQueryString2, "buildQueryString");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES3;
var init_constants7 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/constants.js"() {
    NODEJS_TIMEOUT_ERROR_CODES3 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders2;
var init_get_transformed_headers2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js"() {
    getTransformedHeaders2 = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var setConnectionTimeout2;
var init_set_connection_timeout2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js"() {
    setConnectionTimeout2 = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request2.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
          name: "TimeoutError"
        }));
      }, timeoutInMs);
      request2.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    }, "setConnectionTimeout");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var setSocketKeepAlive2;
var init_set_socket_keep_alive2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js"() {
    setSocketKeepAlive2 = /* @__PURE__ */ __name((request2, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request2.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    }, "setSocketKeepAlive");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var setSocketTimeout2;
var init_set_socket_timeout2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js"() {
    setSocketTimeout2 = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
      request2.setTimeout(timeoutInMs, () => {
        request2.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    }, "setSocketTimeout");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
import { Readable as Readable3 } from "stream";
async function writeRequestBody2(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME2) {
  const headers = request2.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];
  let timeoutId = -1;
  let hasError = false;
  if (expect === "100-continue") {
    await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME2, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          clearTimeout(timeoutId);
          resolve();
        });
        httpRequest2.on("error", () => {
          hasError = true;
          clearTimeout(timeoutId);
          resolve();
        });
      })
    ]);
  }
  if (!hasError) {
    writeBody2(httpRequest2, request2.body);
  }
}
function writeBody2(httpRequest2, body) {
  if (body instanceof Readable3) {
    body.pipe(httpRequest2);
    return;
  }
  if (body) {
    if (Buffer.isBuffer(body) || typeof body === "string") {
      httpRequest2.end(body);
      return;
    }
    const uint8 = body;
    if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
      httpRequest2.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
      return;
    }
    httpRequest2.end(Buffer.from(body));
    return;
  }
  httpRequest2.end();
}
var MIN_WAIT_TIME2;
var init_write_request_body2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/write-request-body.js"() {
    MIN_WAIT_TIME2 = 1e3;
    __name(writeRequestBody2, "writeRequestBody");
    __name(writeBody2, "writeBody");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
import { Agent as hAgent2, request as hRequest2 } from "http";
import { Agent as hsAgent2, request as hsRequest2 } from "https";
var NodeHttpHandler2;
var init_node_http_handler2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js"() {
    init_dist_es43();
    init_dist_es45();
    init_constants7();
    init_get_transformed_headers2();
    init_set_connection_timeout2();
    init_set_socket_keep_alive2();
    init_set_socket_timeout2();
    init_write_request_body2();
    NodeHttpHandler2 = class _NodeHttpHandler {
      static {
        __name(this, "NodeHttpHandler");
      }
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger3 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger3?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      resolveDefaultConfig(options) {
        const { requestTimeout: requestTimeout4, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout4 ?? socketTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof hAgent2 || typeof httpAgent?.destroy === "function") {
              return httpAgent;
            }
            return new hAgent2({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof hsAgent2 || typeof httpsAgent?.destroy === "function") {
              return httpsAgent;
            }
            return new hsAgent2({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: console
        };
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request2, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _reject(arg);
          }, "reject");
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request2.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          socketCheckTimeoutId = setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, this.config.logger);
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3));
          const queryString = buildQueryString2(request2.query || {});
          let auth = void 0;
          if (request2.username != null || request2.password != null) {
            const username = request2.username ?? "";
            const password = request2.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request2.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request2.fragment) {
            path += `#${request2.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request2.headers,
            host: request2.hostname,
            method: request2.method,
            path,
            port: request2.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? hsRequest2 : hRequest2;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new HttpResponse2({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders2(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES3.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          setConnectionTimeout2(req, reject, this.config.connectionTimeout);
          setSocketTimeout2(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            const onAbort = /* @__PURE__ */ __name(() => {
              req.destroy();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            setSocketKeepAlive2(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = writeRequestBody2(req, request2, this.config.requestTimeout).catch((e5) => {
            clearTimeout(socketCheckTimeoutId);
            return _reject(e5);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var init_node_http2_connection_pool2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js
var init_node_http2_connection_manager2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js"() {
    init_node_http2_connection_pool2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js"() {
    init_dist_es43();
    init_dist_es45();
    init_get_transformed_headers2();
    init_node_http2_connection_manager2();
    init_write_request_body2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
import { Writable as Writable2 } from "stream";
var Collector2;
var init_collector2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js"() {
    Collector2 = class extends Writable2 {
      static {
        __name(this, "Collector");
      }
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
async function collectReadableStream2(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
var streamCollector3, isReadableStreamInstance2;
var init_stream_collector3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js"() {
    init_collector2();
    streamCollector3 = /* @__PURE__ */ __name((stream) => {
      if (isReadableStreamInstance2(stream)) {
        return collectReadableStream2(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector2();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    isReadableStreamInstance2 = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream, "isReadableStreamInstance");
    __name(collectReadableStream2, "collectReadableStream");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es46 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/node-http-handler/dist-es/index.js"() {
    init_node_http_handler2();
    init_node_http2_handler2();
    init_stream_collector3();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError2;
var init_ProviderError2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
    ProviderError2 = class _ProviderError extends Error {
      static {
        __name(this, "ProviderError");
      }
      constructor(message, options = true) {
        let logger3;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger3 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger3 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger3?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError2;
var init_CredentialsProviderError2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
    init_ProviderError2();
    CredentialsProviderError2 = class _CredentialsProviderError extends ProviderError2 {
      static {
        __name(this, "CredentialsProviderError");
      }
      constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var init_TokenProviderError2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
    init_ProviderError2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/chain.js
var init_chain2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/chain.js"() {
    init_ProviderError2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/fromStatic.js
var init_fromStatic3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/memoize.js
var init_memoize2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/memoize.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/index.js
var init_dist_es47 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/property-provider/dist-es/index.js"() {
    init_CredentialsProviderError2();
    init_ProviderError2();
    init_TokenProviderError2();
    init_chain2();
    init_fromStatic3();
    init_memoize2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js
var ECS_CONTAINER_HOST, EKS_CONTAINER_HOST_IPv4, EKS_CONTAINER_HOST_IPv6, checkUrl;
var init_checkUrl = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js"() {
    init_dist_es47();
    ECS_CONTAINER_HOST = "169.254.170.2";
    EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    checkUrl = /* @__PURE__ */ __name((url, logger3) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = /* @__PURE__ */ __name((component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        }, "inRange");
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new CredentialsProviderError2(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger: logger3 });
    }, "checkUrl");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var init_NoOpLogger2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var init_MiddlewareStack2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es48 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/middleware-stack/dist-es/index.js"() {
    init_MiddlewareStack2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/client.js
var init_client5 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/client.js"() {
    init_dist_es48();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer2;
var init_dist_es49 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    isArrayBuffer2 = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer5 } from "buffer";
var fromArrayBuffer4, fromString3;
var init_dist_es50 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es49();
    fromArrayBuffer4 = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer2(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer5.from(input, offset, length);
    }, "fromArrayBuffer");
    fromString3 = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer5.from(input, encoding) : Buffer5.from(input);
    }, "fromString");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX2, fromBase642;
var init_fromBase642 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-base64/dist-es/fromBase64.js"() {
    init_dist_es50();
    BASE64_REGEX2 = /^[A-Za-z0-9+/]*={0,2}$/;
    fromBase642 = /* @__PURE__ */ __name((input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX2.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = fromString3(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }, "fromBase64");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf82;
var init_fromUtf82 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js"() {
    init_dist_es50();
    fromUtf82 = /* @__PURE__ */ __name((input) => {
      const buf = fromString3(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var init_toUint8Array2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf82();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf82;
var init_toUtf82 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/toUtf8.js"() {
    init_dist_es50();
    toUtf82 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer4(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    }, "toUtf8");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es51 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_fromUtf82();
    init_toUint8Array2();
    init_toUtf82();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase642;
var init_toBase642 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-base64/dist-es/toBase64.js"() {
    init_dist_es50();
    init_dist_es51();
    toBase642 = /* @__PURE__ */ __name((_input) => {
      let input;
      if (typeof _input === "string") {
        input = fromUtf82(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer4(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    }, "toBase64");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es52 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-base64/dist-es/index.js"() {
    init_fromBase642();
    init_toBase642();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/blob/transforms.js
var init_transforms2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
    init_dist_es52();
    init_dist_es51();
    init_Uint8ArrayBlobAdapter2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var init_Uint8ArrayBlobAdapter2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
    init_transforms2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
var init_getAwsChunkedEncodingStream2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
var init_request_timeout2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var init_fetch_http_handler2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
    init_dist_es43();
    init_dist_es45();
    init_request_timeout2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase642(base64);
  return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
var streamCollector4;
var init_stream_collector4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
    init_dist_es52();
    streamCollector4 = /* @__PURE__ */ __name((stream) => {
      if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
      }
      return collectStream(stream);
    }, "streamCollector");
    __name(collectBlob, "collectBlob");
    __name(collectStream, "collectStream");
    __name(readToBase64, "readToBase64");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/index.js
var init_dist_es53 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
    init_fetch_http_handler2();
    init_stream_collector4();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-hex-encoding/dist-es/index.js
function toHex2(bytes) {
  let out = "";
  for (let i5 = 0; i5 < bytes.byteLength; i5++) {
    out += SHORT_TO_HEX2[bytes[i5]];
  }
  return out;
}
var SHORT_TO_HEX2, HEX_TO_SHORT2;
var init_dist_es54 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    SHORT_TO_HEX2 = {};
    HEX_TO_SHORT2 = {};
    for (let i5 = 0; i5 < 256; i5++) {
      let encodedByte = i5.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX2[i5] = encodedByte;
      HEX_TO_SHORT2[encodedByte] = i5;
    }
    __name(toHex2, "toHex");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/stream-type-check.js
var isReadableStream2;
var init_stream_type_check2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/stream-type-check.js"() {
    isReadableStream2 = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream), "isReadableStream");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED, sdkStreamMixin2, isBlobInstance;
var init_sdk_stream_mixin_browser2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
    init_dist_es53();
    init_dist_es52();
    init_dist_es54();
    init_dist_es51();
    init_stream_type_check2();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    sdkStreamMixin2 = /* @__PURE__ */ __name((stream) => {
      if (!isBlobInstance(stream) && !isReadableStream2(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = /* @__PURE__ */ __name(async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await streamCollector4(stream);
      }, "transformToByteArray");
      const blobToWebStream = /* @__PURE__ */ __name((blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      }, "blobToWebStream");
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: /* @__PURE__ */ __name(async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return toBase642(buf);
          } else if (encoding === "hex") {
            return toHex2(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return toUtf82(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        }, "transformToString"),
        transformToWebStream: /* @__PURE__ */ __name(() => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if (isReadableStream2(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }, "transformToWebStream")
      });
    }, "sdkStreamMixin");
    isBlobInstance = /* @__PURE__ */ __name((stream) => typeof Blob === "function" && stream instanceof Blob, "isBlobInstance");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
import { Readable as Readable4 } from "stream";
import { TextDecoder as TextDecoder2 } from "util";
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2, sdkStreamMixin3;
var init_sdk_stream_mixin2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js"() {
    init_dist_es46();
    init_dist_es50();
    init_sdk_stream_mixin_browser2();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2 = "The stream has already been transformed.";
    sdkStreamMixin3 = /* @__PURE__ */ __name((stream) => {
      if (!(stream instanceof Readable4)) {
        try {
          return sdkStreamMixin2(stream);
        } catch (e5) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = /* @__PURE__ */ __name(async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
        }
        transformed = true;
        return await streamCollector3(stream);
      }, "transformToByteArray");
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: /* @__PURE__ */ __name(async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return fromArrayBuffer4(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new TextDecoder2(encoding);
            return decoder.decode(buf);
          }
        }, "transformToString"),
        transformToWebStream: /* @__PURE__ */ __name(() => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof Readable4.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          }
          transformed = true;
          return Readable4.toWeb(stream);
        }, "transformToWebStream")
      });
    }, "sdkStreamMixin");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
var init_splitStream_browser2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/splitStream.js
var init_splitStream2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/splitStream.js"() {
    init_splitStream_browser2();
    init_stream_type_check2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/headStream.browser.js
var init_headStream_browser2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/headStream.browser.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/headStream.js
var init_headStream2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/headStream.js"() {
    init_headStream_browser2();
    init_stream_type_check2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es55 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/util-stream/dist-es/index.js"() {
    init_Uint8ArrayBlobAdapter2();
    init_getAwsChunkedEncodingStream2();
    init_sdk_stream_mixin2();
    init_splitStream2();
    init_headStream2();
    init_stream_type_check2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var init_collect_stream_body2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
    init_dist_es55();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/command.js
var init_command4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/command.js"() {
    init_dist_es48();
    init_dist_es42();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/constants.js
var init_constants8 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/constants.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var init_create_aggregated_client2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var expectNumber2, MAX_FLOAT2, expectFloat322, expectLong2, expectShort2, expectByte2, expectSizedInt2, castInt2, strictParseFloat322, NUMBER_REGEX2, parseNumber2, strictParseShort2, strictParseByte2, stackTraceWarning2, logger2;
var init_parse_utils2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/parse-utils.js"() {
    expectNumber2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger2.warn(stackTraceWarning2(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    MAX_FLOAT2 = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat322 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber2(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT2) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    expectLong2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    expectShort2 = /* @__PURE__ */ __name((value) => expectSizedInt2(value, 16), "expectShort");
    expectByte2 = /* @__PURE__ */ __name((value) => expectSizedInt2(value, 8), "expectByte");
    expectSizedInt2 = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong2(value);
      if (expected !== void 0 && castInt2(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    castInt2 = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    strictParseFloat322 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat322(parseNumber2(value));
      }
      return expectFloat322(value);
    }, "strictParseFloat32");
    NUMBER_REGEX2 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber2 = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX2);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    strictParseShort2 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort2(parseNumber2(value));
      }
      return expectShort2(value);
    }, "strictParseShort");
    strictParseByte2 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte2(parseNumber2(value));
      }
      return expectByte2(value);
    }, "strictParseByte");
    stackTraceWarning2 = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s5) => !s5.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    logger2 = {
      warn: console.warn
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/date-utils.js
var MONTHS2, RFC33392, parseRfc3339DateTime, RFC3339_WITH_OFFSET2, IMF_FIXDATE2, RFC_850_DATE2, ASC_TIME2, buildDate2, FIFTY_YEARS_IN_MILLIS2, DAYS_IN_MONTH2, validateDayOfMonth2, isLeapYear2, parseDateValue2, parseMilliseconds2, stripLeadingZeroes2;
var init_date_utils2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/date-utils.js"() {
    init_parse_utils2();
    MONTHS2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC33392 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC33392.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort2(stripLeadingZeroes2(yearStr));
      const month = parseDateValue2(monthStr, "month", 1, 12);
      const day = parseDateValue2(dayStr, "day", 1, 31);
      return buildDate2(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    }, "parseRfc3339DateTime");
    RFC3339_WITH_OFFSET2 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    IMF_FIXDATE2 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE2 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME2 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    buildDate2 = /* @__PURE__ */ __name((year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth2(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue2(time.hours, "hour", 0, 23), parseDateValue2(time.minutes, "minute", 0, 59), parseDateValue2(time.seconds, "seconds", 0, 60), parseMilliseconds2(time.fractionalMilliseconds)));
    }, "buildDate");
    FIFTY_YEARS_IN_MILLIS2 = 50 * 365 * 24 * 60 * 60 * 1e3;
    DAYS_IN_MONTH2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth2 = /* @__PURE__ */ __name((year, month, day) => {
      let maxDays = DAYS_IN_MONTH2[month];
      if (month === 1 && isLeapYear2(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS2[month]} in ${year}: ${day}`);
      }
    }, "validateDayOfMonth");
    isLeapYear2 = /* @__PURE__ */ __name((year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }, "isLeapYear");
    parseDateValue2 = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte2(stripLeadingZeroes2(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    parseMilliseconds2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat322("0." + value) * 1e3;
    }, "parseMilliseconds");
    stripLeadingZeroes2 = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/exceptions.js
var init_exceptions2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var init_default_error_handler2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
    init_exceptions2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var init_defaults_mode2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var init_emitWarningIfUnsupportedVersion3 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var init_checksum6 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
    init_dist_es42();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var init_retry5 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration4 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
    init_checksum6();
    init_retry5();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions6 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
    init_defaultExtensionConfiguration4();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
var init_extended_encode_uri_component2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var init_get_array_if_single_item2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var init_get_value_from_text_node2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var StringWrapper2;
var init_lazy_json2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/lazy-json.js"() {
    StringWrapper2 = /* @__PURE__ */ __name(function() {
      const Class = Object.getPrototypeOf(this).constructor;
      const Constructor = Function.bind.apply(String, [null, ...arguments]);
      const instance = new Constructor();
      Object.setPrototypeOf(instance, Class.prototype);
      return instance;
    }, "StringWrapper");
    StringWrapper2.prototype = Object.create(String.prototype, {
      constructor: {
        value: StringWrapper2,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(StringWrapper2, String);
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/object-mapping.js
var init_object_mapping2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var init_resolve_path2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
    init_extended_encode_uri_component2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var init_ser_utils2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/serde-json.js
var init_serde_json2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/split-every.js
var init_split_every2 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/split-every.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es56 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/node_modules/@smithy/smithy-client/dist-es/index.js"() {
    init_NoOpLogger2();
    init_client5();
    init_collect_stream_body2();
    init_command4();
    init_constants8();
    init_create_aggregated_client2();
    init_date_utils2();
    init_default_error_handler2();
    init_defaults_mode2();
    init_emitWarningIfUnsupportedVersion3();
    init_extensions6();
    init_exceptions2();
    init_extended_encode_uri_component2();
    init_get_array_if_single_item2();
    init_get_value_from_text_node2();
    init_lazy_json2();
    init_object_mapping2();
    init_parse_utils2();
    init_resolve_path2();
    init_ser_utils2();
    init_serde_json2();
    init_split_every2();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js
function createGetRequest(url) {
  return new HttpRequest3({
    protocol: url.protocol,
    hostname: url.hostname,
    port: Number(url.port),
    path: url.pathname,
    query: Array.from(url.searchParams.entries()).reduce((acc, [k5, v6]) => {
      acc[k5] = v6;
      return acc;
    }, {}),
    fragment: url.hash
  });
}
async function getCredentials(response, logger3) {
  const stream = sdkStreamMixin3(response.body);
  const str = await stream.transformToString();
  if (response.statusCode === 200) {
    const parsed = JSON.parse(str);
    if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
      throw new CredentialsProviderError2("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: logger3 });
    }
    return {
      accessKeyId: parsed.AccessKeyId,
      secretAccessKey: parsed.SecretAccessKey,
      sessionToken: parsed.Token,
      expiration: parseRfc3339DateTime(parsed.Expiration)
    };
  }
  if (response.statusCode >= 400 && response.statusCode < 500) {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(str);
    } catch (e5) {
    }
    throw Object.assign(new CredentialsProviderError2(`Server responded with status: ${response.statusCode}`, { logger: logger3 }), {
      Code: parsedBody.Code,
      Message: parsedBody.Message
    });
  }
  throw new CredentialsProviderError2(`Server responded with status: ${response.statusCode}`, { logger: logger3 });
}
var init_requestHelpers = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js"() {
    init_dist_es47();
    init_dist_es43();
    init_dist_es56();
    init_dist_es55();
    __name(createGetRequest, "createGetRequest");
    __name(getCredentials, "getCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
var retryWrapper;
var init_retry_wrapper = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js"() {
    retryWrapper = /* @__PURE__ */ __name((toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i5 = 0; i5 < maxRetries; ++i5) {
          try {
            return await toRetry();
          } catch (e5) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    }, "retryWrapper");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js
import fs from "fs/promises";
var AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, DEFAULT_LINK_LOCAL_HOST, AWS_CONTAINER_CREDENTIALS_FULL_URI, AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE, AWS_CONTAINER_AUTHORIZATION_TOKEN, fromHttp;
var init_fromHttp = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js"() {
    init_dist_es46();
    init_dist_es47();
    init_checkUrl();
    init_requestHelpers();
    init_retry_wrapper();
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromHttp = /* @__PURE__ */ __name((options = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger ? console.warn : options.logger.warn;
      if (relative && full) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new CredentialsProviderError2(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
      }
      const url = new URL(host);
      checkUrl(url, options.logger);
      const requestHandler = new NodeHttpHandler2({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return retryWrapper(async () => {
        const request2 = createGetRequest(url);
        if (token) {
          request2.headers.Authorization = token;
        } else if (tokenFile) {
          request2.headers.Authorization = (await fs.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request2);
          return getCredentials(result.response);
        } catch (e5) {
          throw new CredentialsProviderError2(String(e5), { logger: options.logger });
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    }, "fromHttp");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/index.js
var dist_es_exports3 = {};
__export(dist_es_exports3, {
  fromHttp: () => fromHttp
});
var init_dist_es57 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/index.js"() {
    init_fromHttp();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
var ENV_IMDS_DISABLED, remoteProvider;
var init_remoteProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js"() {
    init_dist_es12();
    ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    remoteProvider = /* @__PURE__ */ __name(async (init) => {
      const { ENV_CMDS_FULL_URI: ENV_CMDS_FULL_URI2, ENV_CMDS_RELATIVE_URI: ENV_CMDS_RELATIVE_URI2, fromContainerMetadata: fromContainerMetadata2, fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es41(), dist_es_exports2));
      if (process.env[ENV_CMDS_RELATIVE_URI2] || process.env[ENV_CMDS_FULL_URI2]) {
        init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es57(), dist_es_exports3));
        return chain(fromHttp2(init), fromContainerMetadata2(init));
      }
      if (process.env[ENV_IMDS_DISABLED]) {
        return async () => {
          throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
        };
      }
      init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
      return fromInstanceMetadata2(init);
    }, "remoteProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile;
var init_isSsoProfile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js"() {
    isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS, REFRESH_MESSAGE;
var init_constants9 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/constants.js"() {
    EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig2;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es39();
    init_dist_es10();
    defaultSSOOIDCHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSSOOIDCHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption2, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption, "createSmithyApiNoAuthHttpAuthOption");
    defaultSSOOIDCHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "RegisterClient": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "StartDeviceAuthorization": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
        }
      }
      return options;
    }, "defaultSSOOIDCHttpAuthSchemeProvider");
    resolveHttpAuthSchemeConfig2 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return {
        ...config_0
      };
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2, commonParams2;
var init_EndpointParameters = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters2 = /* @__PURE__ */ __name((options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      };
    }, "resolveClientEndpointParameters");
    commonParams2 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/package.json
var package_default2;
var init_package = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/package.json"() {
    package_default2 = {
      name: "@aws-sdk/client-sso-oidc",
      description: "AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",
      version: "3.616.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso-oidc",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso-oidc"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.616.0",
        "@aws-sdk/credential-provider-node": "3.616.0",
        "@aws-sdk/middleware-host-header": "3.616.0",
        "@aws-sdk/middleware-logger": "3.609.0",
        "@aws-sdk/middleware-recursion-detection": "3.616.0",
        "@aws-sdk/middleware-user-agent": "3.616.0",
        "@aws-sdk/region-config-resolver": "3.614.0",
        "@aws-sdk/types": "3.609.0",
        "@aws-sdk/util-endpoints": "3.614.0",
        "@aws-sdk/util-user-agent-browser": "3.609.0",
        "@aws-sdk/util-user-agent-node": "3.614.0",
        "@smithy/config-resolver": "^3.0.5",
        "@smithy/core": "^2.2.7",
        "@smithy/fetch-http-handler": "^3.2.2",
        "@smithy/hash-node": "^3.0.3",
        "@smithy/invalid-dependency": "^3.0.3",
        "@smithy/middleware-content-length": "^3.0.4",
        "@smithy/middleware-endpoint": "^3.0.5",
        "@smithy/middleware-retry": "^3.0.10",
        "@smithy/middleware-serde": "^3.0.3",
        "@smithy/middleware-stack": "^3.0.3",
        "@smithy/node-config-provider": "^3.1.4",
        "@smithy/node-http-handler": "^3.1.3",
        "@smithy/protocol-http": "^4.0.4",
        "@smithy/smithy-client": "^3.1.8",
        "@smithy/types": "^3.3.0",
        "@smithy/url-parser": "^3.0.3",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.10",
        "@smithy/util-defaults-mode-node": "^3.0.10",
        "@smithy/util-endpoints": "^2.0.5",
        "@smithy/util-middleware": "^3.0.3",
        "@smithy/util-retry": "^3.0.3",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      peerDependencies: {
        "@aws-sdk/client-sts": "^3.616.0"
      },
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso-oidc"
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
var crtAvailability;
var init_crt_availability = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js"() {
    crtAvailability = {
      isCrtAvailable: false
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var isCrtAvailable;
var init_is_crt_available = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js"() {
    init_crt_availability();
    isCrtAvailable = /* @__PURE__ */ __name(() => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    }, "isCrtAvailable");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
import { platform, release } from "os";
import { env as env2, versions } from "process";
var UA_APP_ID_ENV_NAME, UA_APP_ID_INI_NAME, defaultUserAgent;
var init_dist_es58 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js"() {
    init_dist_es14();
    init_is_crt_available();
    init_crt_availability();
    UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    UA_APP_ID_INI_NAME = "sdk-ua-app-id";
    defaultUserAgent = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
      const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${platform()}`, release()],
        ["lang/js"],
        ["md/nodejs", `${versions.node}`]
      ];
      const crtAvailable = isCrtAvailable();
      if (crtAvailable) {
        sections.push(crtAvailable);
      }
      if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
      }
      if (env2.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${env2.AWS_EXECUTION_ENV}`]);
      }
      const appIdPromise = loadConfig({
        environmentVariableSelector: /* @__PURE__ */ __name((env3) => env3[UA_APP_ID_ENV_NAME], "environmentVariableSelector"),
        configFileSelector: /* @__PURE__ */ __name((profile) => profile[UA_APP_ID_INI_NAME], "configFileSelector"),
        default: void 0
      })();
      let resolvedUserAgent = void 0;
      return async () => {
        if (!resolvedUserAgent) {
          const appId = await appIdPromise;
          resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
      };
    }, "defaultUserAgent");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/hash-node/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer6 } from "buffer";
var fromArrayBuffer5, fromString4;
var init_dist_es59 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/hash-node/node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es22();
    fromArrayBuffer5 = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer6.from(input, offset, length);
    }, "fromArrayBuffer");
    fromString4 = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer6.from(input, encoding) : Buffer6.from(input);
    }, "fromString");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/hash-node/dist-es/index.js
import { Buffer as Buffer7 } from "buffer";
import { createHash as createHash2, createHmac } from "crypto";
function castSourceData(toCast, encoding) {
  if (Buffer7.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return fromString4(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer5(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return fromArrayBuffer5(toCast);
}
var Hash;
var init_dist_es60 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/hash-node/dist-es/index.js"() {
    init_dist_es59();
    init_dist_es25();
    Hash = class {
      static {
        __name(this, "Hash");
      }
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? createHmac(this.algorithmIdentifier, castSourceData(this.secret)) : createHash2(this.algorithmIdentifier);
      }
    };
    __name(castSourceData, "castSourceData");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js
import { fstatSync, lstatSync } from "fs";
var calculateBodyLength;
var init_calculateBodyLength = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js"() {
    calculateBodyLength = /* @__PURE__ */ __name((body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return lstatSync(body.path).size;
      } else if (typeof body.fd === "number") {
        return fstatSync(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-body-length-node/dist-es/index.js
var init_dist_es61 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-body-length-node/dist-es/index.js"() {
    init_calculateBodyLength();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js"() {
    u = "required";
    v = "fn";
    w = "argv";
    x = "ref";
    a = true;
    b = "isSet";
    c = "booleanEquals";
    d = "error";
    e = "endpoint";
    f = "tree";
    g = "PartitionResult";
    h = "getAttr";
    i = { [u]: false, "type": "String" };
    j = { [u]: true, "default": false, "type": "Boolean" };
    k = { [x]: "Endpoint" };
    l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    n = {};
    o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    p = { [x]: g };
    q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    r = [l];
    s = [m];
    t = [{ [x]: "Region" }];
    _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es7();
    init_dist_es6();
    init_ruleset();
    defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return resolveEndpoint(ruleSet, {
        endpointParams,
        logger: context.logger
      });
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js
var getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js"() {
    init_dist_es39();
    init_dist_es36();
    init_dist_es34();
    init_dist_es16();
    init_dist_es26();
    init_dist_es25();
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    getRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
var AWS_EXECUTION_ENV, AWS_REGION_ENV, AWS_DEFAULT_REGION_ENV, ENV_IMDS_DISABLED2, DEFAULTS_MODE_OPTIONS, IMDS_REGION_PATH;
var init_constants10 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js"() {
    AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    AWS_REGION_ENV = "AWS_REGION";
    AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    ENV_IMDS_DISABLED2 = "AWS_EC2_METADATA_DISABLED";
    DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    IMDS_REGION_PATH = "/latest/meta-data/placement/region";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
var AWS_DEFAULTS_MODE_ENV, AWS_DEFAULTS_MODE_CONFIG, NODE_DEFAULTS_MODE_CONFIG_OPTIONS;
var init_defaultsModeConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js"() {
    AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env3) => {
        return env3[AWS_DEFAULTS_MODE_ENV];
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      }, "configFileSelector"),
      default: "legacy"
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig, resolveNodeDefaultsModeAuto, inferPhysicalRegion;
var init_resolveDefaultsModeConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js"() {
    init_dist_es11();
    init_dist_es14();
    init_dist_es12();
    init_constants10();
    init_defaultsModeConfig();
    resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => memoize(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode?.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
      }
    }), "resolveDefaultsModeConfig");
    resolveNodeDefaultsModeAuto = /* @__PURE__ */ __name(async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    }, "resolveNodeDefaultsModeAuto");
    inferPhysicalRegion = /* @__PURE__ */ __name(async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED2]) {
        try {
          const { getInstanceMetadataEndpoint: getInstanceMetadataEndpoint2, httpRequest: httpRequest2 } = await Promise.resolve().then(() => (init_dist_es41(), dist_es_exports2));
          const endpoint = await getInstanceMetadataEndpoint2();
          return (await httpRequest2({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e5) {
        }
      }
    }, "inferPhysicalRegion");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/index.js
var init_dist_es62 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@smithy/util-defaults-mode-node/dist-es/index.js"() {
    init_resolveDefaultsModeConfig();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js
var getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js"() {
    init_package();
    init_dist_es39();
    init_dist_es72();
    init_dist_es58();
    init_dist_es11();
    init_dist_es60();
    init_dist_es35();
    init_dist_es14();
    init_dist_es29();
    init_dist_es61();
    init_dist_es20();
    init_runtimeConfig_shared();
    init_dist_es34();
    init_dist_es62();
    init_dist_es34();
    getRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig(config);
      emitWarningIfUnsupportedVersion2(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
var getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration;
var init_extensions7 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js"() {
    getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let runtimeConfigRegion = /* @__PURE__ */ __name(async () => {
        if (runtimeConfig.region === void 0) {
          throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
          return region;
        }
        return region();
      }, "runtimeConfigRegion");
      return {
        setRegion(region) {
          runtimeConfigRegion = region;
        },
        region() {
          return runtimeConfigRegion;
        }
      };
    }, "getAwsRegionExtensionConfiguration");
    resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    }, "resolveAwsRegionExtensionConfiguration");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
var init_config5 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
var init_isFipsRegion2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
var init_getRealRegion2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var init_resolveRegionConfig2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_getRealRegion2();
    init_isFipsRegion2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
var init_regionConfig2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js"() {
    init_config5();
    init_resolveRegionConfig2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
var init_dist_es63 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/region-config-resolver/dist-es/index.js"() {
    init_extensions7();
    init_regionConfig2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js
var asPartial, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js"() {
    init_dist_es63();
    init_dist_es2();
    init_dist_es34();
    init_httpAuthExtensionConfiguration();
    asPartial = /* @__PURE__ */ __name((t5) => t5, "asPartial");
    resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
      };
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js
var SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es8();
    init_dist_es11();
    init_dist_es36();
    init_dist_es37();
    init_dist_es18();
    init_dist_es35();
    init_dist_es34();
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOOIDCClient = class extends Client {
      static {
        __name(this, "SSOOIDCClient");
      }
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        const _config_1 = resolveClientEndpointParameters2(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveHostHeaderConfig(_config_3);
        const _config_5 = resolveUserAgentConfig(_config_4);
        const _config_6 = resolveRetryConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSSOOIDCHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js
var SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js"() {
    init_dist_es34();
    SSOOIDCServiceException = class _SSOOIDCServiceException extends ServiceException {
      static {
        __name(this, "SSOOIDCServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js
var AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException, InvalidRequestRegionException, InvalidClientMetadataException, InvalidRedirectUriException, CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog, CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog, RegisterClientResponseFilterSensitiveLog, StartDeviceAuthorizationRequestFilterSensitiveLog;
var init_models_0 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js"() {
    init_dist_es34();
    init_SSOOIDCServiceException();
    AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      static {
        __name(this, "AccessDeniedException");
      }
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      static {
        __name(this, "AuthorizationPendingException");
      }
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      static {
        __name(this, "ExpiredTokenException");
      }
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      static {
        __name(this, "InternalServerException");
      }
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidClientException");
      }
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidGrantException");
      }
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidRequestException");
      }
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidScopeException");
      }
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      static {
        __name(this, "SlowDownException");
      }
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      static {
        __name(this, "UnauthorizedClientException");
      }
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      static {
        __name(this, "UnsupportedGrantTypeException");
      }
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestRegionException = class _InvalidRequestRegionException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidRequestRegionException");
      }
      constructor(opts) {
        super({
          name: "InvalidRequestRegionException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestRegionException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
      }
    };
    InvalidClientMetadataException = class _InvalidClientMetadataException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidClientMetadataException");
      }
      constructor(opts) {
        super({
          name: "InvalidClientMetadataException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRedirectUriException = class _InvalidRedirectUriException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidRedirectUriException");
      }
      constructor(opts) {
        super({
          name: "InvalidRedirectUriException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRedirectUriException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRedirectUriException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    CreateTokenRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }
    }), "CreateTokenRequestFilterSensitiveLog");
    CreateTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.idToken && { idToken: SENSITIVE_STRING }
    }), "CreateTokenResponseFilterSensitiveLog");
    CreateTokenWithIAMRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.assertion && { assertion: SENSITIVE_STRING },
      ...obj.subjectToken && { subjectToken: SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }
    }), "CreateTokenWithIAMRequestFilterSensitiveLog");
    CreateTokenWithIAMResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.idToken && { idToken: SENSITIVE_STRING }
    }), "CreateTokenWithIAMResponseFilterSensitiveLog");
    RegisterClientResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING }
    }), "RegisterClientResponseFilterSensitiveLog");
    StartDeviceAuthorizationRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING }
    }), "StartDeviceAuthorizationRequestFilterSensitiveLog");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js
var se_CreateTokenCommand, se_CreateTokenWithIAMCommand, se_RegisterClientCommand, se_StartDeviceAuthorizationCommand, de_CreateTokenCommand, de_CreateTokenWithIAMCommand, de_RegisterClientCommand, de_StartDeviceAuthorizationCommand, de_CommandError2, throwDefaultError3, de_AccessDeniedExceptionRes, de_AuthorizationPendingExceptionRes, de_ExpiredTokenExceptionRes, de_InternalServerExceptionRes, de_InvalidClientExceptionRes, de_InvalidClientMetadataExceptionRes, de_InvalidGrantExceptionRes, de_InvalidRedirectUriExceptionRes, de_InvalidRequestExceptionRes, de_InvalidRequestRegionExceptionRes, de_InvalidScopeExceptionRes, de_SlowDownExceptionRes, de_UnauthorizedClientExceptionRes, de_UnsupportedGrantTypeExceptionRes, deserializeMetadata3, _ai;
var init_Aws_restJson1 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js"() {
    init_dist_es39();
    init_dist_es36();
    init_dist_es34();
    init_models_0();
    init_SSOOIDCServiceException();
    se_CreateTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/token");
      let body;
      body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        codeVerifier: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: /* @__PURE__ */ __name((_2) => _json(_2), "scope")
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    }, "se_CreateTokenCommand");
    se_CreateTokenWithIAMCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/token");
      const query = map({
        [_ai]: [, "t"]
      });
      let body;
      body = JSON.stringify(take(input, {
        assertion: [],
        clientId: [],
        code: [],
        codeVerifier: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        requestedTokenType: [],
        scope: /* @__PURE__ */ __name((_2) => _json(_2), "scope"),
        subjectToken: [],
        subjectTokenType: []
      }));
      b5.m("POST").h(headers).q(query).b(body);
      return b5.build();
    }, "se_CreateTokenWithIAMCommand");
    se_RegisterClientCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/client/register");
      let body;
      body = JSON.stringify(take(input, {
        clientName: [],
        clientType: [],
        entitledApplicationArn: [],
        grantTypes: /* @__PURE__ */ __name((_2) => _json(_2), "grantTypes"),
        issuerUrl: [],
        redirectUris: /* @__PURE__ */ __name((_2) => _json(_2), "redirectUris"),
        scopes: /* @__PURE__ */ __name((_2) => _json(_2), "scopes")
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    }, "se_RegisterClientCommand");
    se_StartDeviceAuthorizationCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/device_authorization");
      let body;
      body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        startUrl: []
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    }, "se_StartDeviceAuthorizationCommand");
    de_CreateTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        refreshToken: expectString,
        tokenType: expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_CreateTokenCommand");
    de_CreateTokenWithIAMCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        issuedTokenType: expectString,
        refreshToken: expectString,
        scope: _json,
        tokenType: expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_CreateTokenWithIAMCommand");
    de_RegisterClientCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        authorizationEndpoint: expectString,
        clientId: expectString,
        clientIdIssuedAt: expectLong,
        clientSecret: expectString,
        clientSecretExpiresAt: expectLong,
        tokenEndpoint: expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_RegisterClientCommand");
    de_StartDeviceAuthorizationCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        deviceCode: expectString,
        expiresIn: expectInt32,
        interval: expectInt32,
        userCode: expectString,
        verificationUri: expectString,
        verificationUriComplete: expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_StartDeviceAuthorizationCommand");
    de_CommandError2 = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        case "InvalidRequestRegionException":
        case "com.amazonaws.ssooidc#InvalidRequestRegionException":
          throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
          throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        case "InvalidRedirectUriException":
        case "com.amazonaws.ssooidc#InvalidRedirectUriException":
          throw await de_InvalidRedirectUriExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError3({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    throwDefaultError3 = withBaseException(SSOOIDCServiceException);
    de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_AccessDeniedExceptionRes");
    de_AuthorizationPendingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_AuthorizationPendingExceptionRes");
    de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_ExpiredTokenExceptionRes");
    de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InternalServerExceptionRes");
    de_InvalidClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidClientExceptionRes");
    de_InvalidClientMetadataExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidClientMetadataExceptionRes");
    de_InvalidGrantExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidGrantExceptionRes");
    de_InvalidRedirectUriExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRedirectUriException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidRedirectUriExceptionRes");
    de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidRequestExceptionRes");
    de_InvalidRequestRegionExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        endpoint: expectString,
        error: expectString,
        error_description: expectString,
        region: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestRegionException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidRequestRegionExceptionRes");
    de_InvalidScopeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidScopeExceptionRes");
    de_SlowDownExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_SlowDownExceptionRes");
    de_UnauthorizedClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_UnauthorizedClientExceptionRes");
    de_UnsupportedGrantTypeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_UnsupportedGrantTypeExceptionRes");
    deserializeMetadata3 = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    _ai = "aws_iam";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js
var CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
      static {
        __name(this, "CreateTokenCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenWithIAMCommand.js
var CreateTokenWithIAMCommand;
var init_CreateTokenWithIAMCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenWithIAMCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenWithIAMCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateTokenWithIAM", {}).n("SSOOIDCClient", "CreateTokenWithIAMCommand").f(CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog).ser(se_CreateTokenWithIAMCommand).de(de_CreateTokenWithIAMCommand).build() {
      static {
        __name(this, "CreateTokenWithIAMCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/RegisterClientCommand.js
var RegisterClientCommand;
var init_RegisterClientCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/RegisterClientCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    RegisterClientCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "RegisterClient", {}).n("SSOOIDCClient", "RegisterClientCommand").f(void 0, RegisterClientResponseFilterSensitiveLog).ser(se_RegisterClientCommand).de(de_RegisterClientCommand).build() {
      static {
        __name(this, "RegisterClientCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/StartDeviceAuthorizationCommand.js
var StartDeviceAuthorizationCommand;
var init_StartDeviceAuthorizationCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/StartDeviceAuthorizationCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    StartDeviceAuthorizationCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "StartDeviceAuthorization", {}).n("SSOOIDCClient", "StartDeviceAuthorizationCommand").f(StartDeviceAuthorizationRequestFilterSensitiveLog, void 0).ser(se_StartDeviceAuthorizationCommand).de(de_StartDeviceAuthorizationCommand).build() {
      static {
        __name(this, "StartDeviceAuthorizationCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDC.js
var commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDC.js"() {
    init_dist_es34();
    init_CreateTokenCommand();
    init_CreateTokenWithIAMCommand();
    init_RegisterClientCommand();
    init_StartDeviceAuthorizationCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand,
      CreateTokenWithIAMCommand,
      RegisterClientCommand,
      StartDeviceAuthorizationCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
      static {
        __name(this, "SSOOIDC");
      }
    };
    createAggregatedClient(commands, SSOOIDC);
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/index.js
var init_commands = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/index.js"() {
    init_CreateTokenCommand();
    init_CreateTokenWithIAMCommand();
    init_RegisterClientCommand();
    init_StartDeviceAuthorizationCommand();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/models/index.js
var init_models = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/models/index.js"() {
    init_models_0();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/index.js
var dist_es_exports4 = {};
__export(dist_es_exports4, {
  $Command: () => Command,
  AccessDeniedException: () => AccessDeniedException,
  AuthorizationPendingException: () => AuthorizationPendingException,
  CreateTokenCommand: () => CreateTokenCommand,
  CreateTokenRequestFilterSensitiveLog: () => CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog: () => CreateTokenResponseFilterSensitiveLog,
  CreateTokenWithIAMCommand: () => CreateTokenWithIAMCommand,
  CreateTokenWithIAMRequestFilterSensitiveLog: () => CreateTokenWithIAMRequestFilterSensitiveLog,
  CreateTokenWithIAMResponseFilterSensitiveLog: () => CreateTokenWithIAMResponseFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException,
  InternalServerException: () => InternalServerException,
  InvalidClientException: () => InvalidClientException,
  InvalidClientMetadataException: () => InvalidClientMetadataException,
  InvalidGrantException: () => InvalidGrantException,
  InvalidRedirectUriException: () => InvalidRedirectUriException,
  InvalidRequestException: () => InvalidRequestException,
  InvalidRequestRegionException: () => InvalidRequestRegionException,
  InvalidScopeException: () => InvalidScopeException,
  RegisterClientCommand: () => RegisterClientCommand,
  RegisterClientResponseFilterSensitiveLog: () => RegisterClientResponseFilterSensitiveLog,
  SSOOIDC: () => SSOOIDC,
  SSOOIDCClient: () => SSOOIDCClient,
  SSOOIDCServiceException: () => SSOOIDCServiceException,
  SlowDownException: () => SlowDownException,
  StartDeviceAuthorizationCommand: () => StartDeviceAuthorizationCommand,
  StartDeviceAuthorizationRequestFilterSensitiveLog: () => StartDeviceAuthorizationRequestFilterSensitiveLog,
  UnauthorizedClientException: () => UnauthorizedClientException,
  UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
  __Client: () => Client
});
var init_dist_es64 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso-oidc/dist-es/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_models();
    init_SSOOIDCServiceException();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var ssoOidcClientsHash, getSsoOidcClient;
var init_getSsoOidcClient = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js"() {
    ssoOidcClientsHash = {};
    getSsoOidcClient = /* @__PURE__ */ __name(async (ssoRegion) => {
      const { SSOOIDCClient: SSOOIDCClient2 } = await Promise.resolve().then(() => (init_dist_es64(), dist_es_exports4));
      if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
      }
      const ssoOidcClient = new SSOOIDCClient2({ region: ssoRegion });
      ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
      return ssoOidcClient;
    }, "getSsoOidcClient");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken;
var init_getNewSsoOidcToken = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js"() {
    init_getSsoOidcClient();
    getNewSsoOidcToken = /* @__PURE__ */ __name(async (ssoToken, ssoRegion) => {
      const { CreateTokenCommand: CreateTokenCommand2 } = await Promise.resolve().then(() => (init_dist_es64(), dist_es_exports4));
      const ssoOidcClient = await getSsoOidcClient(ssoRegion);
      return ssoOidcClient.send(new CreateTokenCommand2({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    }, "getNewSsoOidcToken");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var validateTokenExpiry;
var init_validateTokenExpiry = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js"() {
    init_dist_es12();
    init_constants9();
    validateTokenExpiry = /* @__PURE__ */ __name((token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    }, "validateTokenExpiry");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var validateTokenKey;
var init_validateTokenKey = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js"() {
    init_dist_es12();
    init_constants9();
    validateTokenKey = /* @__PURE__ */ __name((key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
      }
    }, "validateTokenKey");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
import { promises as fsPromises3 } from "fs";
var writeFile, writeSSOTokenToFile;
var init_writeSSOTokenToFile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js"() {
    init_dist_es13();
    ({ writeFile } = fsPromises3);
    writeSSOTokenToFile = /* @__PURE__ */ __name((id, ssoToken) => {
      const tokenFilepath = getSSOTokenFilepath(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    }, "writeSSOTokenToFile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var lastRefreshAttemptTime, fromSso;
var init_fromSso = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/fromSso.js"() {
    init_dist_es12();
    init_dist_es13();
    init_constants9();
    init_getNewSsoOidcToken();
    init_validateTokenExpiry();
    init_validateTokenKey();
    init_writeSSOTokenToFile();
    lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    fromSso = /* @__PURE__ */ __name((init = {}) => async () => {
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await parseKnownFiles(init);
      const profileName = getProfileName(init);
      const profile = profiles[profileName];
      if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await loadSsoSessionData(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
      } catch (e5) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    }, "fromSso");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js
var init_fromStatic4 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js"() {
    init_dist_es12();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js
var init_nodeProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js"() {
    init_dist_es12();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/index.js
var init_dist_es65 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/token-providers/dist-es/index.js"() {
    init_fromSso();
    init_fromStatic4();
    init_nodeProvider();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption3(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "awsssoportal",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption2(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOHttpAuthSchemeParametersProvider, defaultSSOHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig3;
var init_httpAuthSchemeProvider2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es39();
    init_dist_es10();
    defaultSSOHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSSOHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption3, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption2, "createSmithyApiNoAuthHttpAuthOption");
    defaultSSOHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "ListAccountRoles": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "ListAccounts": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "Logout": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption3(authParameters));
        }
      }
      return options;
    }, "defaultSSOHttpAuthSchemeProvider");
    resolveHttpAuthSchemeConfig3 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return {
        ...config_0
      };
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters3, commonParams3;
var init_EndpointParameters2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters3 = /* @__PURE__ */ __name((options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      };
    }, "resolveClientEndpointParameters");
    commonParams3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/package.json
var package_default3;
var init_package2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/package.json"() {
    package_default3 = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.616.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.616.0",
        "@aws-sdk/middleware-host-header": "3.616.0",
        "@aws-sdk/middleware-logger": "3.609.0",
        "@aws-sdk/middleware-recursion-detection": "3.616.0",
        "@aws-sdk/middleware-user-agent": "3.616.0",
        "@aws-sdk/region-config-resolver": "3.614.0",
        "@aws-sdk/types": "3.609.0",
        "@aws-sdk/util-endpoints": "3.614.0",
        "@aws-sdk/util-user-agent-browser": "3.609.0",
        "@aws-sdk/util-user-agent-node": "3.614.0",
        "@smithy/config-resolver": "^3.0.5",
        "@smithy/core": "^2.2.7",
        "@smithy/fetch-http-handler": "^3.2.2",
        "@smithy/hash-node": "^3.0.3",
        "@smithy/invalid-dependency": "^3.0.3",
        "@smithy/middleware-content-length": "^3.0.4",
        "@smithy/middleware-endpoint": "^3.0.5",
        "@smithy/middleware-retry": "^3.0.10",
        "@smithy/middleware-serde": "^3.0.3",
        "@smithy/middleware-stack": "^3.0.3",
        "@smithy/node-config-provider": "^3.1.4",
        "@smithy/node-http-handler": "^3.1.3",
        "@smithy/protocol-http": "^4.0.4",
        "@smithy/smithy-client": "^3.1.8",
        "@smithy/types": "^3.3.0",
        "@smithy/url-parser": "^3.0.3",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.10",
        "@smithy/util-defaults-mode-node": "^3.0.10",
        "@smithy/util-endpoints": "^2.0.5",
        "@smithy/util-middleware": "^3.0.3",
        "@smithy/util-retry": "^3.0.3",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
var u2, v2, w2, x2, a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, _data2, ruleSet2;
var init_ruleset2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js"() {
    u2 = "required";
    v2 = "fn";
    w2 = "argv";
    x2 = "ref";
    a2 = true;
    b2 = "isSet";
    c2 = "booleanEquals";
    d2 = "error";
    e2 = "endpoint";
    f2 = "tree";
    g2 = "PartitionResult";
    h2 = "getAttr";
    i2 = { [u2]: false, "type": "String" };
    j2 = { [u2]: true, "default": false, "type": "Boolean" };
    k2 = { [x2]: "Endpoint" };
    l2 = { [v2]: c2, [w2]: [{ [x2]: "UseFIPS" }, true] };
    m2 = { [v2]: c2, [w2]: [{ [x2]: "UseDualStack" }, true] };
    n2 = {};
    o2 = { [v2]: h2, [w2]: [{ [x2]: g2 }, "supportsFIPS"] };
    p2 = { [x2]: g2 };
    q2 = { [v2]: c2, [w2]: [true, { [v2]: h2, [w2]: [p2, "supportsDualStack"] }] };
    r2 = [l2];
    s2 = [m2];
    t2 = [{ [x2]: "Region" }];
    _data2 = { version: "1.0", parameters: { Region: i2, UseDualStack: j2, UseFIPS: j2, Endpoint: i2 }, rules: [{ conditions: [{ [v2]: b2, [w2]: [k2] }], rules: [{ conditions: r2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d2 }, { conditions: s2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d2 }, { endpoint: { url: k2, properties: n2, headers: n2 }, type: e2 }], type: f2 }, { conditions: [{ [v2]: b2, [w2]: t2 }], rules: [{ conditions: [{ [v2]: "aws.partition", [w2]: t2, assign: g2 }], rules: [{ conditions: [l2, m2], rules: [{ conditions: [{ [v2]: c2, [w2]: [a2, o2] }, q2], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d2 }], type: f2 }, { conditions: r2, rules: [{ conditions: [{ [v2]: c2, [w2]: [o2, a2] }], rules: [{ conditions: [{ [v2]: "stringEquals", [w2]: [{ [v2]: h2, [w2]: [p2, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n2, headers: n2 }, type: e2 }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d2 }], type: f2 }, { conditions: s2, rules: [{ conditions: [q2], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d2 }], type: f2 }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }], type: f2 }, { error: "Invalid Configuration: Missing Region", type: d2 }] };
    ruleSet2 = _data2;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver2;
var init_endpointResolver2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es7();
    init_dist_es6();
    init_ruleset2();
    defaultEndpointResolver2 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return resolveEndpoint(ruleSet2, {
        endpointParams,
        logger: context.logger
      });
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js
var getRuntimeConfig3;
var init_runtimeConfig_shared2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js"() {
    init_dist_es39();
    init_dist_es36();
    init_dist_es34();
    init_dist_es16();
    init_dist_es26();
    init_dist_es25();
    init_httpAuthSchemeProvider2();
    init_endpointResolver2();
    getRuntimeConfig3 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js
var getRuntimeConfig4;
var init_runtimeConfig2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js"() {
    init_package2();
    init_dist_es39();
    init_dist_es58();
    init_dist_es11();
    init_dist_es60();
    init_dist_es35();
    init_dist_es14();
    init_dist_es29();
    init_dist_es61();
    init_dist_es20();
    init_runtimeConfig_shared2();
    init_dist_es34();
    init_dist_es62();
    init_dist_es34();
    getRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig3(config);
      emitWarningIfUnsupportedVersion2(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default3.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration2, resolveHttpAuthRuntimeConfig2;
var init_httpAuthExtensionConfiguration2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js
var asPartial2, resolveRuntimeExtensions2;
var init_runtimeExtensions2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js"() {
    init_dist_es63();
    init_dist_es2();
    init_dist_es34();
    init_httpAuthExtensionConfiguration2();
    asPartial2 = /* @__PURE__ */ __name((t5) => t5, "asPartial");
    resolveRuntimeExtensions2 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial2(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial2(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial2(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial2(getHttpAuthExtensionConfiguration2(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig2(extensionConfiguration)
      };
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js
var SSOClient;
var init_SSOClient = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es8();
    init_dist_es11();
    init_dist_es36();
    init_dist_es37();
    init_dist_es18();
    init_dist_es35();
    init_dist_es34();
    init_httpAuthSchemeProvider2();
    init_EndpointParameters2();
    init_runtimeConfig2();
    init_runtimeExtensions2();
    SSOClient = class extends Client {
      static {
        __name(this, "SSOClient");
      }
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig4(configuration || {});
        const _config_1 = resolveClientEndpointParameters3(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveHostHeaderConfig(_config_3);
        const _config_5 = resolveUserAgentConfig(_config_4);
        const _config_6 = resolveRetryConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig3(_config_6);
        const _config_8 = resolveRuntimeExtensions2(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSSOHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js
var SSOServiceException;
var init_SSOServiceException = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js"() {
    init_dist_es34();
    SSOServiceException = class _SSOServiceException extends ServiceException {
      static {
        __name(this, "SSOServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js
var InvalidRequestException2, ResourceNotFoundException2, TooManyRequestsException, UnauthorizedException, GetRoleCredentialsRequestFilterSensitiveLog, RoleCredentialsFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog, ListAccountRolesRequestFilterSensitiveLog, ListAccountsRequestFilterSensitiveLog, LogoutRequestFilterSensitiveLog;
var init_models_02 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js"() {
    init_dist_es34();
    init_SSOServiceException();
    InvalidRequestException2 = class _InvalidRequestException extends SSOServiceException {
      static {
        __name(this, "InvalidRequestException");
      }
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    ResourceNotFoundException2 = class _ResourceNotFoundException extends SSOServiceException {
      static {
        __name(this, "ResourceNotFoundException");
      }
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
      static {
        __name(this, "TooManyRequestsException");
      }
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
      static {
        __name(this, "UnauthorizedException");
      }
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
    GetRoleCredentialsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    }), "GetRoleCredentialsRequestFilterSensitiveLog");
    RoleCredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: SENSITIVE_STRING }
    }), "RoleCredentialsFilterSensitiveLog");
    GetRoleCredentialsResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
    }), "GetRoleCredentialsResponseFilterSensitiveLog");
    ListAccountRolesRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    }), "ListAccountRolesRequestFilterSensitiveLog");
    ListAccountsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    }), "ListAccountsRequestFilterSensitiveLog");
    LogoutRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    }), "LogoutRequestFilterSensitiveLog");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js
var se_GetRoleCredentialsCommand, se_ListAccountRolesCommand, se_ListAccountsCommand, se_LogoutCommand, de_GetRoleCredentialsCommand, de_ListAccountRolesCommand, de_ListAccountsCommand, de_LogoutCommand, de_CommandError3, throwDefaultError4, de_InvalidRequestExceptionRes2, de_ResourceNotFoundExceptionRes2, de_TooManyRequestsExceptionRes, de_UnauthorizedExceptionRes, deserializeMetadata4, isSerializableHeaderValue, _aI, _aT, _ai2, _mR, _mr, _nT, _nt, _rN, _rn, _xasbt;
var init_Aws_restJson12 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js"() {
    init_dist_es39();
    init_dist_es36();
    init_dist_es34();
    init_models_02();
    init_SSOServiceException();
    se_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/federation/credentials");
      const query = map({
        [_rn]: [, expectNonNull(input[_rN], `roleName`)],
        [_ai2]: [, expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    }, "se_GetRoleCredentialsCommand");
    se_ListAccountRolesCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/assignment/roles");
      const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai2]: [, expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    }, "se_ListAccountRolesCommand");
    se_ListAccountsCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/assignment/accounts");
      const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    }, "se_ListAccountsCommand");
    se_LogoutCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/logout");
      let body;
      b5.m("POST").h(headers).b(body);
      return b5.build();
    }, "se_LogoutCommand");
    de_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        roleCredentials: _json
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_GetRoleCredentialsCommand");
    de_ListAccountRolesCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        nextToken: expectString,
        roleList: _json
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_ListAccountRolesCommand");
    de_ListAccountsCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accountList: _json,
        nextToken: expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_ListAccountsCommand");
    de_LogoutCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      await collectBody(output.body, context);
      return contents;
    }, "de_LogoutCommand");
    de_CommandError3 = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes2(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes2(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError4({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    throwDefaultError4 = withBaseException(SSOServiceException);
    de_InvalidRequestExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException2({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_InvalidRequestExceptionRes");
    de_ResourceNotFoundExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new ResourceNotFoundException2({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_ResourceNotFoundExceptionRes");
    de_TooManyRequestsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_TooManyRequestsExceptionRes");
    de_UnauthorizedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    }, "de_UnauthorizedExceptionRes");
    deserializeMetadata4 = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    isSerializableHeaderValue = /* @__PURE__ */ __name((value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0), "isSerializableHeaderValue");
    _aI = "accountId";
    _aT = "accessToken";
    _ai2 = "account_id";
    _mR = "maxResults";
    _mr = "max_result";
    _nT = "nextToken";
    _nt = "next_token";
    _rN = "roleName";
    _rn = "role_name";
    _xasbt = "x-amz-sso_bearer_token";
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js
var GetRoleCredentialsCommand;
var init_GetRoleCredentialsCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    GetRoleCredentialsCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
      static {
        __name(this, "GetRoleCredentialsCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountRolesCommand.js
var ListAccountRolesCommand;
var init_ListAccountRolesCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountRolesCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    ListAccountRolesCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
      static {
        __name(this, "ListAccountRolesCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountsCommand.js
var ListAccountsCommand;
var init_ListAccountsCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountsCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    ListAccountsCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
      static {
        __name(this, "ListAccountsCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/LogoutCommand.js
var LogoutCommand;
var init_LogoutCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/LogoutCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    LogoutCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
      static {
        __name(this, "LogoutCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/SSO.js
var commands2, SSO;
var init_SSO = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/SSO.js"() {
    init_dist_es34();
    init_GetRoleCredentialsCommand();
    init_ListAccountRolesCommand();
    init_ListAccountsCommand();
    init_LogoutCommand();
    init_SSOClient();
    commands2 = {
      GetRoleCredentialsCommand,
      ListAccountRolesCommand,
      ListAccountsCommand,
      LogoutCommand
    };
    SSO = class extends SSOClient {
      static {
        __name(this, "SSO");
      }
    };
    createAggregatedClient(commands2, SSO);
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/index.js
var init_commands2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/commands/index.js"() {
    init_GetRoleCredentialsCommand();
    init_ListAccountRolesCommand();
    init_ListAccountsCommand();
    init_LogoutCommand();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/Interfaces.js
var init_Interfaces = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/Interfaces.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountRolesPaginator.js
var paginateListAccountRoles;
var init_ListAccountRolesPaginator = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountRolesPaginator.js"() {
    init_dist_es36();
    init_ListAccountRolesCommand();
    init_SSOClient();
    paginateListAccountRoles = createPaginator(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountsPaginator.js
var paginateListAccounts;
var init_ListAccountsPaginator = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountsPaginator.js"() {
    init_dist_es36();
    init_ListAccountsCommand();
    init_SSOClient();
    paginateListAccounts = createPaginator(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/index.js
var init_pagination3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/pagination/index.js"() {
    init_Interfaces();
    init_ListAccountRolesPaginator();
    init_ListAccountsPaginator();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/models/index.js
var init_models2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/models/index.js"() {
    init_models_02();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/index.js
var init_dist_es66 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sso/dist-es/index.js"() {
    init_SSOClient();
    init_SSO();
    init_commands2();
    init_pagination3();
    init_models2();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js
var loadSso_exports = {};
__export(loadSso_exports, {
  GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
  SSOClient: () => SSOClient
});
var init_loadSso = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js"() {
    init_dist_es66();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var SHOULD_FAIL_CREDENTIAL_CHAIN, resolveSSOCredentials;
var init_resolveSSOCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js"() {
    init_dist_es65();
    init_dist_es12();
    init_dist_es13();
    SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    resolveSSOCredentials = /* @__PURE__ */ __name(async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, profile, logger: logger3 }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await fromSso({ profile })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e5) {
          throw new CredentialsProviderError(e5.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger3
          });
        }
      } else {
        try {
          token = await getSSOTokenFromFile(ssoStartUrl);
        } catch (e5) {
          throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger3
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(() => (init_loadSso(), loadSso_exports));
      const sso = ssoClient || new SSOClient2(Object.assign({}, clientConfig ?? {}, {
        region: clientConfig?.region ?? ssoRegion
      }));
      let ssoResp;
      try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand2({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e5) {
        throw new CredentialsProviderError(e5, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
    }, "resolveSSOCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var validateSsoProfile;
var init_validateSsoProfile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js"() {
    init_dist_es12();
    validateSsoProfile = /* @__PURE__ */ __name((profile, logger3) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: logger3 });
      }
      return profile;
    }, "validateSsoProfile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var fromSSO;
var init_fromSSO = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js"() {
    init_dist_es12();
    init_dist_es13();
    init_isSsoProfile();
    init_resolveSSOCredentials();
    init_validateSsoProfile();
    fromSSO = /* @__PURE__ */ __name((init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = getProfileName(init);
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await loadSsoSessionData(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          profile: profileName
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          profile: profileName
        });
      }
    }, "fromSSO");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js
var init_types10 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js
var dist_es_exports5 = {};
__export(dist_es_exports5, {
  fromSSO: () => fromSSO,
  isSsoProfile: () => isSsoProfile,
  validateSsoProfile: () => validateSsoProfile
});
var init_dist_es67 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js"() {
    init_fromSSO();
    init_isSsoProfile();
    init_types10();
    init_validateSsoProfile();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var resolveCredentialSource;
var init_resolveCredentialSource = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js"() {
    init_dist_es12();
    resolveCredentialSource = /* @__PURE__ */ __name((credentialSource, profileName, logger3) => {
      const sourceProvidersMap = {
        EcsContainer: /* @__PURE__ */ __name(async (options) => {
          const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es57(), dist_es_exports3));
          const { fromContainerMetadata: fromContainerMetadata2 } = await Promise.resolve().then(() => (init_dist_es41(), dist_es_exports2));
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return chain(fromHttp2(options ?? {}), fromContainerMetadata2(options));
        }, "EcsContainer"),
        Ec2InstanceMetadata: /* @__PURE__ */ __name(async (options) => {
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es41(), dist_es_exports2));
          return fromInstanceMetadata2(options);
        }, "Ec2InstanceMetadata"),
        Environment: /* @__PURE__ */ __name(async (options) => {
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv: fromEnv3 } = await Promise.resolve().then(() => (init_dist_es40(), dist_es_exports));
          return fromEnv3(options);
        }, "Environment")
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger: logger3 });
      }
    }, "resolveCredentialSource");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption4(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption3(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig4;
var init_httpAuthSchemeProvider3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es39();
    init_dist_es10();
    init_STSClient();
    defaultSTSHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSTSHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption4, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption3, "createSmithyApiNoAuthHttpAuthOption");
    defaultSTSHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption4(authParameters));
        }
      }
      return options;
    }, "defaultSTSHttpAuthSchemeProvider");
    resolveStsAuthConfig = /* @__PURE__ */ __name((input) => ({
      ...input,
      stsClientCtor: STSClient
    }), "resolveStsAuthConfig");
    resolveHttpAuthSchemeConfig4 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveStsAuthConfig(config);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      return {
        ...config_1
      };
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters4, commonParams4;
var init_EndpointParameters3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters4 = /* @__PURE__ */ __name((options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      };
    }, "resolveClientEndpointParameters");
    commonParams4 = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/package.json
var package_default4;
var init_package3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/package.json"() {
    package_default4 = {
      name: "@aws-sdk/client-sts",
      description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
      version: "3.616.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sts",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
        test: "yarn test:unit",
        "test:unit": "jest"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/client-sso-oidc": "3.616.0",
        "@aws-sdk/core": "3.616.0",
        "@aws-sdk/credential-provider-node": "3.616.0",
        "@aws-sdk/middleware-host-header": "3.616.0",
        "@aws-sdk/middleware-logger": "3.609.0",
        "@aws-sdk/middleware-recursion-detection": "3.616.0",
        "@aws-sdk/middleware-user-agent": "3.616.0",
        "@aws-sdk/region-config-resolver": "3.614.0",
        "@aws-sdk/types": "3.609.0",
        "@aws-sdk/util-endpoints": "3.614.0",
        "@aws-sdk/util-user-agent-browser": "3.609.0",
        "@aws-sdk/util-user-agent-node": "3.614.0",
        "@smithy/config-resolver": "^3.0.5",
        "@smithy/core": "^2.2.7",
        "@smithy/fetch-http-handler": "^3.2.2",
        "@smithy/hash-node": "^3.0.3",
        "@smithy/invalid-dependency": "^3.0.3",
        "@smithy/middleware-content-length": "^3.0.4",
        "@smithy/middleware-endpoint": "^3.0.5",
        "@smithy/middleware-retry": "^3.0.10",
        "@smithy/middleware-serde": "^3.0.3",
        "@smithy/middleware-stack": "^3.0.3",
        "@smithy/node-config-provider": "^3.1.4",
        "@smithy/node-http-handler": "^3.1.3",
        "@smithy/protocol-http": "^4.0.4",
        "@smithy/smithy-client": "^3.1.8",
        "@smithy/types": "^3.3.0",
        "@smithy/url-parser": "^3.0.3",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.10",
        "@smithy/util-defaults-mode-node": "^3.0.10",
        "@smithy/util-endpoints": "^2.0.5",
        "@smithy/util-middleware": "^3.0.3",
        "@smithy/util-retry": "^3.0.3",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sts"
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
var F, G, H, I, J, a3, b3, c3, d3, e3, f3, g3, h3, i3, j3, k3, l3, m3, n3, o3, p3, q3, r3, s3, t3, u3, v3, w3, x3, y, z, A, B, C, D, E, _data3, ruleSet3;
var init_ruleset3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js"() {
    F = "required";
    G = "type";
    H = "fn";
    I = "argv";
    J = "ref";
    a3 = false;
    b3 = true;
    c3 = "booleanEquals";
    d3 = "stringEquals";
    e3 = "sigv4";
    f3 = "sts";
    g3 = "us-east-1";
    h3 = "endpoint";
    i3 = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    j3 = "tree";
    k3 = "error";
    l3 = "getAttr";
    m3 = { [F]: false, [G]: "String" };
    n3 = { [F]: true, "default": false, [G]: "Boolean" };
    o3 = { [J]: "Endpoint" };
    p3 = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    q3 = { [J]: "Region" };
    r3 = { [H]: "aws.partition", [I]: [q3], "assign": "PartitionResult" };
    s3 = { [J]: "UseFIPS" };
    t3 = { [J]: "UseDualStack" };
    u3 = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e3, "signingName": f3, "signingRegion": g3 }] }, "headers": {} };
    v3 = {};
    w3 = { "conditions": [{ [H]: d3, [I]: [q3, "aws-global"] }], [h3]: u3, [G]: h3 };
    x3 = { [H]: c3, [I]: [s3, true] };
    y = { [H]: c3, [I]: [t3, true] };
    z = { [H]: l3, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    A = { [J]: "PartitionResult" };
    B = { [H]: c3, [I]: [true, { [H]: l3, [I]: [A, "supportsDualStack"] }] };
    C = [{ [H]: "isSet", [I]: [o3] }];
    D = [x3];
    E = [y];
    _data3 = { version: "1.0", parameters: { Region: m3, UseDualStack: n3, UseFIPS: n3, Endpoint: m3, UseGlobalEndpoint: n3 }, rules: [{ conditions: [{ [H]: c3, [I]: [{ [J]: "UseGlobalEndpoint" }, b3] }, { [H]: "not", [I]: C }, p3, r3, { [H]: c3, [I]: [s3, a3] }, { [H]: c3, [I]: [t3, a3] }], rules: [{ conditions: [{ [H]: d3, [I]: [q3, "ap-northeast-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "ap-south-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "ap-southeast-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "ap-southeast-2"] }], endpoint: u3, [G]: h3 }, w3, { conditions: [{ [H]: d3, [I]: [q3, "ca-central-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-central-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-north-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-west-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-west-2"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-west-3"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "sa-east-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, g3] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "us-east-2"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "us-west-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "us-west-2"] }], endpoint: u3, [G]: h3 }, { endpoint: { url: i3, properties: { authSchemes: [{ name: e3, signingName: f3, signingRegion: "{Region}" }] }, headers: v3 }, [G]: h3 }], [G]: j3 }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k3 }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k3 }, { endpoint: { url: o3, properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { conditions: [p3], rules: [{ conditions: [r3], rules: [{ conditions: [x3, y], rules: [{ conditions: [{ [H]: c3, [I]: [b3, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k3 }], [G]: j3 }, { conditions: D, rules: [{ conditions: [{ [H]: c3, [I]: [z, b3] }], rules: [{ conditions: [{ [H]: d3, [I]: [{ [H]: l3, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v3, headers: v3 }, [G]: h3 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k3 }], [G]: j3 }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k3 }], [G]: j3 }, w3, { endpoint: { url: i3, properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }], [G]: j3 }, { error: "Invalid Configuration: Missing Region", [G]: k3 }] };
    ruleSet3 = _data3;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver3;
var init_endpointResolver3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es7();
    init_dist_es6();
    init_ruleset3();
    defaultEndpointResolver3 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return resolveEndpoint(ruleSet3, {
        endpointParams,
        logger: context.logger
      });
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js
var getRuntimeConfig5;
var init_runtimeConfig_shared3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js"() {
    init_dist_es39();
    init_dist_es36();
    init_dist_es34();
    init_dist_es16();
    init_dist_es26();
    init_dist_es25();
    init_httpAuthSchemeProvider3();
    init_endpointResolver3();
    getRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver3,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
var getRuntimeConfig6;
var init_runtimeConfig3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js"() {
    init_package3();
    init_dist_es39();
    init_dist_es72();
    init_dist_es58();
    init_dist_es11();
    init_dist_es36();
    init_dist_es60();
    init_dist_es35();
    init_dist_es14();
    init_dist_es29();
    init_dist_es61();
    init_dist_es20();
    init_runtimeConfig_shared3();
    init_dist_es34();
    init_dist_es62();
    init_dist_es34();
    getRuntimeConfig6 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig5(config);
      emitWarningIfUnsupportedVersion2(process.version);
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default4.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await defaultProvider(idProps?.__config || {})()), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration3, resolveHttpAuthRuntimeConfig3;
var init_httpAuthExtensionConfiguration3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration3 = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig3 = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js
var asPartial3, resolveRuntimeExtensions3;
var init_runtimeExtensions3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js"() {
    init_dist_es63();
    init_dist_es2();
    init_dist_es34();
    init_httpAuthExtensionConfiguration3();
    asPartial3 = /* @__PURE__ */ __name((t5) => t5, "asPartial");
    resolveRuntimeExtensions3 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial3(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial3(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial3(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial3(getHttpAuthExtensionConfiguration3(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig3(extensionConfiguration)
      };
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/STSClient.js
var STSClient;
var init_STSClient = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/STSClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es8();
    init_dist_es11();
    init_dist_es36();
    init_dist_es37();
    init_dist_es18();
    init_dist_es35();
    init_dist_es34();
    init_httpAuthSchemeProvider3();
    init_EndpointParameters3();
    init_runtimeConfig3();
    init_runtimeExtensions3();
    STSClient = class extends Client {
      static {
        __name(this, "STSClient");
      }
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig6(configuration || {});
        const _config_1 = resolveClientEndpointParameters4(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveHostHeaderConfig(_config_3);
        const _config_5 = resolveUserAgentConfig(_config_4);
        const _config_6 = resolveRetryConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig4(_config_6);
        const _config_8 = resolveRuntimeExtensions3(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSTSHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        });
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js
var STSServiceException;
var init_STSServiceException = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js"() {
    init_dist_es34();
    STSServiceException = class _STSServiceException extends ServiceException {
      static {
        __name(this, "STSServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js
var ExpiredTokenException2, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, IDPCommunicationErrorException, InvalidAuthorizationMessageException, CredentialsFilterSensitiveLog, AssumeRoleResponseFilterSensitiveLog, AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog, AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog, GetFederationTokenResponseFilterSensitiveLog, GetSessionTokenResponseFilterSensitiveLog;
var init_models_03 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js"() {
    init_dist_es34();
    init_STSServiceException();
    ExpiredTokenException2 = class _ExpiredTokenException extends STSServiceException {
      static {
        __name(this, "ExpiredTokenException");
      }
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
      static {
        __name(this, "MalformedPolicyDocumentException");
      }
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
      static {
        __name(this, "PackedPolicyTooLargeException");
      }
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class _RegionDisabledException extends STSServiceException {
      static {
        __name(this, "RegionDisabledException");
      }
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
      static {
        __name(this, "IDPRejectedClaimException");
      }
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
      static {
        __name(this, "InvalidIdentityTokenException");
      }
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
      static {
        __name(this, "IDPCommunicationErrorException");
      }
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
    InvalidAuthorizationMessageException = class _InvalidAuthorizationMessageException extends STSServiceException {
      static {
        __name(this, "InvalidAuthorizationMessageException");
      }
      constructor(opts) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidAuthorizationMessageException.prototype);
      }
    };
    CredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }
    }), "CredentialsFilterSensitiveLog");
    AssumeRoleResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleResponseFilterSensitiveLog");
    AssumeRoleWithSAMLRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.SAMLAssertion && { SAMLAssertion: SENSITIVE_STRING }
    }), "AssumeRoleWithSAMLRequestFilterSensitiveLog");
    AssumeRoleWithSAMLResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleWithSAMLResponseFilterSensitiveLog");
    AssumeRoleWithWebIdentityRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: SENSITIVE_STRING }
    }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog");
    AssumeRoleWithWebIdentityResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog");
    GetFederationTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "GetFederationTokenResponseFilterSensitiveLog");
    GetSessionTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "GetSessionTokenResponseFilterSensitiveLog");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js
var se_AssumeRoleCommand, se_AssumeRoleWithSAMLCommand, se_AssumeRoleWithWebIdentityCommand, se_DecodeAuthorizationMessageCommand, se_GetAccessKeyInfoCommand, se_GetCallerIdentityCommand, se_GetFederationTokenCommand, se_GetSessionTokenCommand, de_AssumeRoleCommand, de_AssumeRoleWithSAMLCommand, de_AssumeRoleWithWebIdentityCommand, de_DecodeAuthorizationMessageCommand, de_GetAccessKeyInfoCommand, de_GetCallerIdentityCommand, de_GetFederationTokenCommand, de_GetSessionTokenCommand, de_CommandError4, de_ExpiredTokenExceptionRes2, de_IDPCommunicationErrorExceptionRes, de_IDPRejectedClaimExceptionRes, de_InvalidAuthorizationMessageExceptionRes, de_InvalidIdentityTokenExceptionRes, de_MalformedPolicyDocumentExceptionRes, de_PackedPolicyTooLargeExceptionRes, de_RegionDisabledExceptionRes, se_AssumeRoleRequest, se_AssumeRoleWithSAMLRequest, se_AssumeRoleWithWebIdentityRequest, se_DecodeAuthorizationMessageRequest, se_GetAccessKeyInfoRequest, se_GetCallerIdentityRequest, se_GetFederationTokenRequest, se_GetSessionTokenRequest, se_policyDescriptorListType, se_PolicyDescriptorType, se_ProvidedContext, se_ProvidedContextsListType, se_Tag, se_tagKeyListType, se_tagListType, de_AssumedRoleUser, de_AssumeRoleResponse, de_AssumeRoleWithSAMLResponse, de_AssumeRoleWithWebIdentityResponse, de_Credentials, de_DecodeAuthorizationMessageResponse, de_ExpiredTokenException, de_FederatedUser, de_GetAccessKeyInfoResponse, de_GetCallerIdentityResponse, de_GetFederationTokenResponse, de_GetSessionTokenResponse, de_IDPCommunicationErrorException, de_IDPRejectedClaimException, de_InvalidAuthorizationMessageException, de_InvalidIdentityTokenException, de_MalformedPolicyDocumentException, de_PackedPolicyTooLargeException, de_RegionDisabledException, deserializeMetadata5, throwDefaultError5, buildHttpRpcRequest2, SHARED_HEADERS, _, _A, _AKI, _AR, _ARI, _ARU, _ARWSAML, _ARWWI, _Ac, _Ar, _Au, _C, _CA, _DAM, _DM, _DS, _E, _EI, _EM, _FU, _FUI, _GAKI, _GCI, _GFT, _GST, _I, _K, _N, _NQ, _P, _PA, _PAr, _PAro, _PC, _PI, _PPS, _Pr, _RA, _RSN, _S, _SAK, _SAMLA, _SFWIT, _SI, _SN, _ST, _STe, _T, _TC, _TTK, _UI, _V, _Va, _WIT, _a, _m, buildFormUrlencodedString, loadQueryErrorCode;
var init_Aws_query = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js"() {
    init_dist_es39();
    init_dist_es2();
    init_dist_es34();
    init_models_03();
    init_STSServiceException();
    se_AssumeRoleCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_AssumeRoleCommand");
    se_AssumeRoleWithSAMLCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        [_A]: _ARWSAML,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_AssumeRoleWithSAMLCommand");
    se_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_AssumeRoleWithWebIdentityCommand");
    se_DecodeAuthorizationMessageCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        [_A]: _DAM,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_DecodeAuthorizationMessageCommand");
    se_GetAccessKeyInfoCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        [_A]: _GAKI,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_GetAccessKeyInfoCommand");
    se_GetCallerIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        [_A]: _GCI,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_GetCallerIdentityCommand");
    se_GetFederationTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        [_A]: _GFT,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_GetFederationTokenCommand");
    se_GetSessionTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        [_A]: _GST,
        [_V]: _
      });
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_GetSessionTokenCommand");
    de_AssumeRoleCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleCommand");
    de_AssumeRoleWithSAMLCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleWithSAMLCommand");
    de_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleWithWebIdentityCommand");
    de_DecodeAuthorizationMessageCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_DecodeAuthorizationMessageCommand");
    de_GetAccessKeyInfoCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_GetAccessKeyInfoCommand");
    de_GetCallerIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_GetCallerIdentityCommand");
    de_GetFederationTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_GetFederationTokenCommand");
    de_GetSessionTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    }, "de_GetSessionTokenCommand");
    de_CommandError4 = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseXmlErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes2(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
          throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError5({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    }, "de_CommandError");
    de_ExpiredTokenExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new ExpiredTokenException2({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_ExpiredTokenExceptionRes");
    de_IDPCommunicationErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_IDPCommunicationErrorExceptionRes");
    de_IDPRejectedClaimExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_IDPRejectedClaimExceptionRes");
    de_InvalidAuthorizationMessageExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
      const exception = new InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_InvalidAuthorizationMessageExceptionRes");
    de_InvalidIdentityTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_InvalidIdentityTokenExceptionRes");
    de_MalformedPolicyDocumentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_MalformedPolicyDocumentExceptionRes");
    de_PackedPolicyTooLargeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_PackedPolicyTooLargeExceptionRes");
    de_RegionDisabledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new RegionDisabledException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    }, "de_RegionDisabledExceptionRes");
    se_AssumeRoleRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EI] != null) {
        entries[_EI] = input[_EI];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      if (input[_SI] != null) {
        entries[_SI] = input[_SI];
      }
      if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (input[_PC]?.length === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_AssumeRoleRequest");
    se_AssumeRoleWithSAMLRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
      }
      if (input[_SAMLA] != null) {
        entries[_SAMLA] = input[_SAMLA];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    }, "se_AssumeRoleWithSAMLRequest");
    se_AssumeRoleWithWebIdentityRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
      }
      if (input[_PI] != null) {
        entries[_PI] = input[_PI];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    }, "se_AssumeRoleWithWebIdentityRequest");
    se_DecodeAuthorizationMessageRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_EM] != null) {
        entries[_EM] = input[_EM];
      }
      return entries;
    }, "se_DecodeAuthorizationMessageRequest");
    se_GetAccessKeyInfoRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
      }
      return entries;
    }, "se_GetAccessKeyInfoRequest");
    se_GetCallerIdentityRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      return entries;
    }, "se_GetCallerIdentityRequest");
    se_GetFederationTokenRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_N] != null) {
        entries[_N] = input[_N];
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_GetFederationTokenRequest");
    se_GetSessionTokenRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      return entries;
    }, "se_GetSessionTokenRequest");
    se_policyDescriptorListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_policyDescriptorListType");
    se_PolicyDescriptorType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_a] != null) {
        entries[_a] = input[_a];
      }
      return entries;
    }, "se_PolicyDescriptorType");
    se_ProvidedContext = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_PAro] != null) {
        entries[_PAro] = input[_PAro];
      }
      if (input[_CA] != null) {
        entries[_CA] = input[_CA];
      }
      return entries;
    }, "se_ProvidedContext");
    se_ProvidedContextsListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_ProvidedContextsListType");
    se_Tag = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    }, "se_Tag");
    se_tagKeyListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_tagKeyListType");
    se_tagListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_tagListType");
    de_AssumedRoleUser = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_ARI] != null) {
        contents[_ARI] = expectString(output[_ARI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    }, "de_AssumedRoleUser");
    de_AssumeRoleResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleResponse");
    de_AssumeRoleWithSAMLResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_S] != null) {
        contents[_S] = expectString(output[_S]);
      }
      if (output[_ST] != null) {
        contents[_ST] = expectString(output[_ST]);
      }
      if (output[_I] != null) {
        contents[_I] = expectString(output[_I]);
      }
      if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
      }
      if (output[_NQ] != null) {
        contents[_NQ] = expectString(output[_NQ]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleWithSAMLResponse");
    de_AssumeRoleWithWebIdentityResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_SFWIT] != null) {
        contents[_SFWIT] = expectString(output[_SFWIT]);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_Pr] != null) {
        contents[_Pr] = expectString(output[_Pr]);
      }
      if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleWithWebIdentityResponse");
    de_Credentials = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_AKI] != null) {
        contents[_AKI] = expectString(output[_AKI]);
      }
      if (output[_SAK] != null) {
        contents[_SAK] = expectString(output[_SAK]);
      }
      if (output[_STe] != null) {
        contents[_STe] = expectString(output[_STe]);
      }
      if (output[_E] != null) {
        contents[_E] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_E]));
      }
      return contents;
    }, "de_Credentials");
    de_DecodeAuthorizationMessageResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_DM] != null) {
        contents[_DM] = expectString(output[_DM]);
      }
      return contents;
    }, "de_DecodeAuthorizationMessageResponse");
    de_ExpiredTokenException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_ExpiredTokenException");
    de_FederatedUser = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_FUI] != null) {
        contents[_FUI] = expectString(output[_FUI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    }, "de_FederatedUser");
    de_GetAccessKeyInfoResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_Ac] != null) {
        contents[_Ac] = expectString(output[_Ac]);
      }
      return contents;
    }, "de_GetAccessKeyInfoResponse");
    de_GetCallerIdentityResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_UI] != null) {
        contents[_UI] = expectString(output[_UI]);
      }
      if (output[_Ac] != null) {
        contents[_Ac] = expectString(output[_Ac]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    }, "de_GetCallerIdentityResponse");
    de_GetFederationTokenResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_FU] != null) {
        contents[_FU] = de_FederatedUser(output[_FU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      return contents;
    }, "de_GetFederationTokenResponse");
    de_GetSessionTokenResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      return contents;
    }, "de_GetSessionTokenResponse");
    de_IDPCommunicationErrorException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_IDPCommunicationErrorException");
    de_IDPRejectedClaimException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_IDPRejectedClaimException");
    de_InvalidAuthorizationMessageException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_InvalidAuthorizationMessageException");
    de_InvalidIdentityTokenException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_InvalidIdentityTokenException");
    de_MalformedPolicyDocumentException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_MalformedPolicyDocumentException");
    de_PackedPolicyTooLargeException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_PackedPolicyTooLargeException");
    de_RegionDisabledException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    }, "de_RegionDisabledException");
    deserializeMetadata5 = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    throwDefaultError5 = withBaseException(STSServiceException);
    buildHttpRpcRequest2 = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new HttpRequest2(contents);
    }, "buildHttpRpcRequest");
    SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    _ = "2011-06-15";
    _A = "Action";
    _AKI = "AccessKeyId";
    _AR = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARU = "AssumedRoleUser";
    _ARWSAML = "AssumeRoleWithSAML";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _Ac = "Account";
    _Ar = "Arn";
    _Au = "Audience";
    _C = "Credentials";
    _CA = "ContextAssertion";
    _DAM = "DecodeAuthorizationMessage";
    _DM = "DecodedMessage";
    _DS = "DurationSeconds";
    _E = "Expiration";
    _EI = "ExternalId";
    _EM = "EncodedMessage";
    _FU = "FederatedUser";
    _FUI = "FederatedUserId";
    _GAKI = "GetAccessKeyInfo";
    _GCI = "GetCallerIdentity";
    _GFT = "GetFederationToken";
    _GST = "GetSessionToken";
    _I = "Issuer";
    _K = "Key";
    _N = "Name";
    _NQ = "NameQualifier";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "PrincipalArn";
    _PAro = "ProviderArn";
    _PC = "ProvidedContexts";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RSN = "RoleSessionName";
    _S = "Subject";
    _SAK = "SecretAccessKey";
    _SAMLA = "SAMLAssertion";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST = "SubjectType";
    _STe = "SessionToken";
    _T = "Tags";
    _TC = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _UI = "UserId";
    _V = "Version";
    _Va = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _m = "message";
    buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&"), "buildFormUrlencodedString");
    loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
      if (data.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    }, "loadQueryErrorCode");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js
var AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
      static {
        __name(this, "AssumeRoleCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithSAMLCommand.js
var AssumeRoleWithSAMLCommand;
var init_AssumeRoleWithSAMLCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithSAMLCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleWithSAMLCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").f(AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog).ser(se_AssumeRoleWithSAMLCommand).de(de_AssumeRoleWithSAMLCommand).build() {
      static {
        __name(this, "AssumeRoleWithSAMLCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js
var AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleWithWebIdentityCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
      static {
        __name(this, "AssumeRoleWithWebIdentityCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/DecodeAuthorizationMessageCommand.js
var DecodeAuthorizationMessageCommand;
var init_DecodeAuthorizationMessageCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/DecodeAuthorizationMessageCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_Aws_query();
    DecodeAuthorizationMessageCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").f(void 0, void 0).ser(se_DecodeAuthorizationMessageCommand).de(de_DecodeAuthorizationMessageCommand).build() {
      static {
        __name(this, "DecodeAuthorizationMessageCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetAccessKeyInfoCommand.js
var GetAccessKeyInfoCommand;
var init_GetAccessKeyInfoCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetAccessKeyInfoCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_Aws_query();
    GetAccessKeyInfoCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").f(void 0, void 0).ser(se_GetAccessKeyInfoCommand).de(de_GetAccessKeyInfoCommand).build() {
      static {
        __name(this, "GetAccessKeyInfoCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetCallerIdentityCommand.js
var GetCallerIdentityCommand;
var init_GetCallerIdentityCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetCallerIdentityCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_Aws_query();
    GetCallerIdentityCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").f(void 0, void 0).ser(se_GetCallerIdentityCommand).de(de_GetCallerIdentityCommand).build() {
      static {
        __name(this, "GetCallerIdentityCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetFederationTokenCommand.js
var GetFederationTokenCommand;
var init_GetFederationTokenCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetFederationTokenCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    GetFederationTokenCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").f(void 0, GetFederationTokenResponseFilterSensitiveLog).ser(se_GetFederationTokenCommand).de(de_GetFederationTokenCommand).build() {
      static {
        __name(this, "GetFederationTokenCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetSessionTokenCommand.js
var GetSessionTokenCommand;
var init_GetSessionTokenCommand = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/GetSessionTokenCommand.js"() {
    init_dist_es18();
    init_dist_es17();
    init_dist_es34();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    GetSessionTokenCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command3, cs, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").f(void 0, GetSessionTokenResponseFilterSensitiveLog).ser(se_GetSessionTokenCommand).de(de_GetSessionTokenCommand).build() {
      static {
        __name(this, "GetSessionTokenCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/STS.js
var commands3, STS;
var init_STS = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/STS.js"() {
    init_dist_es34();
    init_AssumeRoleCommand();
    init_AssumeRoleWithSAMLCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_DecodeAuthorizationMessageCommand();
    init_GetAccessKeyInfoCommand();
    init_GetCallerIdentityCommand();
    init_GetFederationTokenCommand();
    init_GetSessionTokenCommand();
    init_STSClient();
    commands3 = {
      AssumeRoleCommand,
      AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand,
      GetCallerIdentityCommand,
      GetFederationTokenCommand,
      GetSessionTokenCommand
    };
    STS = class extends STSClient {
      static {
        __name(this, "STS");
      }
    };
    createAggregatedClient(commands3, STS);
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/index.js
var init_commands3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithSAMLCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_DecodeAuthorizationMessageCommand();
    init_GetAccessKeyInfoCommand();
    init_GetCallerIdentityCommand();
    init_GetFederationTokenCommand();
    init_GetSessionTokenCommand();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/models/index.js
var init_models3 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/models/index.js"() {
    init_models_03();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js
var ASSUME_ROLE_DEFAULT_REGION, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity;
var init_defaultStsRoleAssumers = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    resolveRegion = /* @__PURE__ */ __name(async (_region, _parentRegion, credentialProviderLogger) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (provider)`, `${parentRegion} (parent client)`, `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`);
      return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
    }, "resolveRegion");
    getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger: logger3 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          stsClient = new stsClientCtor({
            credentialDefaultProvider: /* @__PURE__ */ __name(() => async () => closureSourceCreds, "credentialDefaultProvider"),
            region: resolvedRegion,
            requestHandler,
            logger: logger3
          });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          credentialScope: Credentials.CredentialScope
        };
      };
    }, "getDefaultRoleAssumer");
    getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger: logger3 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          stsClient = new stsClientCtor({
            region: resolvedRegion,
            requestHandler,
            logger: logger3
          });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          credentialScope: Credentials.CredentialScope
        };
      };
    }, "getDefaultRoleAssumerWithWebIdentity");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider;
var init_defaultRoleAssumers = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          static {
            __name(this, "CustomizableSTSClient");
          }
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    }, "getCustomizableStsClientCtor");
    getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumer");
    getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
    decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    }), "decorateDefaultCredentialProvider");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/index.js
var dist_es_exports6 = {};
__export(dist_es_exports6, {
  $Command: () => Command,
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithSAMLCommand: () => AssumeRoleWithSAMLCommand,
  AssumeRoleWithSAMLRequestFilterSensitiveLog: () => AssumeRoleWithSAMLRequestFilterSensitiveLog,
  AssumeRoleWithSAMLResponseFilterSensitiveLog: () => AssumeRoleWithSAMLResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
  DecodeAuthorizationMessageCommand: () => DecodeAuthorizationMessageCommand,
  ExpiredTokenException: () => ExpiredTokenException2,
  GetAccessKeyInfoCommand: () => GetAccessKeyInfoCommand,
  GetCallerIdentityCommand: () => GetCallerIdentityCommand,
  GetFederationTokenCommand: () => GetFederationTokenCommand,
  GetFederationTokenResponseFilterSensitiveLog: () => GetFederationTokenResponseFilterSensitiveLog,
  GetSessionTokenCommand: () => GetSessionTokenCommand,
  GetSessionTokenResponseFilterSensitiveLog: () => GetSessionTokenResponseFilterSensitiveLog,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  InvalidAuthorizationMessageException: () => InvalidAuthorizationMessageException,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  RegionDisabledException: () => RegionDisabledException,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  __Client: () => Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_dist_es68 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/client-sts/dist-es/index.js"() {
    init_STSClient();
    init_STS();
    init_commands3();
    init_models3();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var isAssumeRoleProfile, isAssumeRoleWithSourceProfile, isCredentialSourceProfile, resolveAssumeRoleCredentials;
var init_resolveAssumeRoleCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js"() {
    init_dist_es12();
    init_dist_es13();
    init_resolveCredentialSource();
    init_resolveProfileData();
    isAssumeRoleProfile = /* @__PURE__ */ __name((arg, { profile = "default", logger: logger3 } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger: logger3 }) || isCredentialSourceProfile(arg, { profile, logger: logger3 }));
    }, "isAssumeRoleProfile");
    isAssumeRoleWithSourceProfile = /* @__PURE__ */ __name((arg, { profile, logger: logger3 }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger3?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    }, "isAssumeRoleWithSourceProfile");
    isCredentialSourceProfile = /* @__PURE__ */ __name((arg, { profile, logger: logger3 }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger3?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    }, "isCredentialSourceProfile");
    resolveAssumeRoleCredentials = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const data = profiles[profileName];
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer: getDefaultRoleAssumer3 } = await Promise.resolve().then(() => (init_dist_es68(), dist_es_exports6));
        options.roleAssumer = getDefaultRoleAssumer3({
          ...options.clientConfig,
          credentialProviderLogger: options.logger,
          parentClientConfig: options?.parentClientConfig
        }, options.clientPlugins);
      }
      const { source_profile } = data;
      if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
      }
      options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
      const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, {
        ...profiles,
        [source_profile]: {
          ...profiles[source_profile],
          role_arn: data.role_arn ?? profiles[source_profile].role_arn
        }
      }, options, {
        ...visitedProfiles,
        [source_profile]: true
      }) : (await resolveCredentialSource(data.credential_source, profileName, options.logger)(options))();
      const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10)
      };
      const { mfa_serial } = data;
      if (mfa_serial) {
        if (!options.mfaCodeProvider) {
          throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
      }
      const sourceCreds = await sourceCredsProvider;
      return options.roleAssumer(sourceCreds, params);
    }, "resolveAssumeRoleCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var getValidatedProcessCredentials;
var init_getValidatedProcessCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js"() {
    getValidatedProcessCredentials = /* @__PURE__ */ __name((profileName, data) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope }
      };
    }, "getValidatedProcessCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
import { exec } from "child_process";
import { promisify } from "util";
var resolveProcessCredentials;
var init_resolveProcessCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js"() {
    init_dist_es12();
    init_getValidatedProcessCredentials();
    resolveProcessCredentials = /* @__PURE__ */ __name(async (profileName, profiles, logger3) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = promisify(exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data);
          } catch (error) {
            throw new CredentialsProviderError(error.message, { logger: logger3 });
          }
        } else {
          throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger: logger3 });
        }
      } else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
          logger: logger3
        });
      }
    }, "resolveProcessCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var fromProcess;
var init_fromProcess = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js"() {
    init_dist_es13();
    init_resolveProcessCredentials();
    fromProcess = /* @__PURE__ */ __name((init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      const profiles = await parseKnownFiles(init);
      return resolveProcessCredentials(getProfileName(init), profiles, init.logger);
    }, "fromProcess");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js
var dist_es_exports7 = {};
__export(dist_es_exports7, {
  fromProcess: () => fromProcess
});
var init_dist_es69 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js"() {
    init_fromProcess();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var isProcessProfile, resolveProcessCredentials2;
var init_resolveProcessCredentials2 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js"() {
    isProcessProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
    resolveProcessCredentials2 = /* @__PURE__ */ __name(async (options, profile) => Promise.resolve().then(() => (init_dist_es69(), dist_es_exports7)).then(({ fromProcess: fromProcess2 }) => fromProcess2({
      ...options,
      profile
    })()), "resolveProcessCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var resolveSsoCredentials, isSsoProfile2;
var init_resolveSsoCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js"() {
    resolveSsoCredentials = /* @__PURE__ */ __name(async (profile, options = {}) => {
      const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es67(), dist_es_exports5));
      return fromSSO2({
        profile,
        logger: options.logger
      })();
    }, "resolveSsoCredentials");
    isSsoProfile2 = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var isStaticCredsProfile, resolveStaticCredentials;
var init_resolveStaticCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js"() {
    isStaticCredsProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1, "isStaticCredsProfile");
    resolveStaticCredentials = /* @__PURE__ */ __name((profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope
      });
    }, "resolveStaticCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken;
var init_fromWebToken = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js"() {
    fromWebToken = /* @__PURE__ */ __name((init) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity3 } = await Promise.resolve().then(() => (init_dist_es68(), dist_es_exports6));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity3({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: init.parentClientConfig
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    }, "fromWebToken");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
import { readFileSync as readFileSync2 } from "fs";
var ENV_TOKEN_FILE, ENV_ROLE_ARN, ENV_ROLE_SESSION_NAME, fromTokenFile;
var init_fromTokenFile = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js"() {
    init_dist_es12();
    init_fromWebToken();
    ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    ENV_ROLE_ARN = "AWS_ROLE_ARN";
    ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    fromTokenFile = /* @__PURE__ */ __name((init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified", {
          logger: init.logger
        });
      }
      return fromWebToken({
        ...init,
        webIdentityToken: readFileSync2(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })();
    }, "fromTokenFile");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js
var dist_es_exports8 = {};
__export(dist_es_exports8, {
  fromTokenFile: () => fromTokenFile,
  fromWebToken: () => fromWebToken
});
var init_dist_es70 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js"() {
    init_fromTokenFile();
    init_fromWebToken();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var isWebIdentityProfile, resolveWebIdentityCredentials;
var init_resolveWebIdentityCredentials = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js"() {
    isWebIdentityProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
    resolveWebIdentityCredentials = /* @__PURE__ */ __name(async (profile, options) => Promise.resolve().then(() => (init_dist_es70(), dist_es_exports8)).then(({ fromTokenFile: fromTokenFile2 }) => fromTokenFile2({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig
    })()), "resolveWebIdentityCredentials");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var resolveProfileData;
var init_resolveProfileData = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js"() {
    init_dist_es12();
    init_resolveAssumeRoleCredentials();
    init_resolveProcessCredentials2();
    init_resolveSsoCredentials();
    init_resolveStaticCredentials();
    init_resolveWebIdentityCredentials();
    resolveProfileData = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials2(options, profileName);
      }
      if (isSsoProfile2(data)) {
        return await resolveSsoCredentials(profileName, options);
      }
      throw new CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
    }, "resolveProfileData");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var fromIni;
var init_fromIni = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js"() {
    init_dist_es13();
    init_resolveProfileData();
    fromIni = /* @__PURE__ */ __name((init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await parseKnownFiles(init);
      return resolveProfileData(getProfileName(init), profiles, init);
    }, "fromIni");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js
var dist_es_exports9 = {};
__export(dist_es_exports9, {
  fromIni: () => fromIni
});
var init_dist_es71 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js"() {
    init_fromIni();
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var multipleCredentialSourceWarningEmitted, defaultProvider, credentialsWillNeedRefresh, credentialsTreatedAsExpired;
var init_defaultProvider = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js"() {
    init_dist_es40();
    init_dist_es12();
    init_dist_es13();
    init_remoteProvider();
    multipleCredentialSourceWarningEmitted = false;
    defaultProvider = /* @__PURE__ */ __name((init = {}) => memoize(chain(async () => {
      const profile = init.profile ?? process.env[ENV_PROFILE];
      if (profile) {
        const envStaticCredentialsAreSet = process.env[ENV_KEY] && process.env[ENV_SECRET];
        if (envStaticCredentialsAreSet) {
          if (!multipleCredentialSourceWarningEmitted) {
            const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn : console.warn;
            warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
            multipleCredentialSourceWarningEmitted = true;
          }
        }
        throw new CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
          logger: init.logger,
          tryNextLink: true
        });
      }
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
      return fromEnv2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        throw new CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
      }
      const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es67(), dist_es_exports5));
      return fromSSO2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
      const { fromIni: fromIni2 } = await Promise.resolve().then(() => (init_dist_es71(), dist_es_exports9));
      return fromIni2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
      const { fromProcess: fromProcess2 } = await Promise.resolve().then(() => (init_dist_es69(), dist_es_exports7));
      return fromProcess2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
      const { fromTokenFile: fromTokenFile2 } = await Promise.resolve().then(() => (init_dist_es70(), dist_es_exports8));
      return fromTokenFile2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
      return (await remoteProvider(init))();
    }, async () => {
      throw new CredentialsProviderError("Could not load credentials from any providers", {
        tryNextLink: false,
        logger: init.logger
      });
    }), credentialsTreatedAsExpired, credentialsWillNeedRefresh), "defaultProvider");
    credentialsWillNeedRefresh = /* @__PURE__ */ __name((credentials) => credentials?.expiration !== void 0, "credentialsWillNeedRefresh");
    credentialsTreatedAsExpired = /* @__PURE__ */ __name((credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, "credentialsTreatedAsExpired");
  }
});

// node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-node/dist-es/index.js
var init_dist_es72 = __esm({
  "node_modules/@aws-sdk/client-dynamodb/node_modules/@aws-sdk/credential-provider-node/dist-es/index.js"() {
    init_defaultProvider();
  }
});

// node_modules/sst/dist/resource.js
import { env } from "process";
import { readFileSync } from "fs";
import crypto from "crypto";
var raw = {
  // @ts-expect-error,
  ...globalThis.$SST_LINKS
};
var environment = {
  ...env,
  ...globalThis.process?.env
};
for (const [key, value] of Object.entries(environment)) {
  if (key.startsWith("SST_RESOURCE_") && value) {
    raw[key.slice("SST_RESOURCE_".length)] = JSON.parse(value);
  }
}
if (env.SST_KEY_FILE && env.SST_KEY && !globalThis.SST_KEY_FILE_DATA) {
  const key = Buffer.from(env.SST_KEY, "base64");
  const encryptedData = readFileSync(env.SST_KEY_FILE);
  const nonce = Buffer.alloc(12, 0);
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, nonce);
  const authTag = encryptedData.subarray(-16);
  const actualCiphertext = encryptedData.subarray(0, -16);
  decipher.setAuthTag(authTag);
  let decrypted = decipher.update(actualCiphertext);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const decryptedData = JSON.parse(decrypted.toString());
  Object.assign(raw, decryptedData);
}
if (globalThis.SST_KEY_FILE_DATA) {
  Object.assign(raw, globalThis.SST_KEY_FILE_DATA);
}
var Resource = new Proxy(raw, {
  get(_target, prop) {
    if (prop in raw) {
      return raw[prop];
    }
    if (!env.SST_RESOURCE_App) {
      throw new Error("It does not look like SST links are active. If this is in local development and you are not starting this process through the multiplexer, wrap your command with `sst dev -- <command>`");
    }
    let msg = `"${prop}" is not linked in your sst.config.ts`;
    if (env.AWS_LAMBDA_FUNCTION_NAME) {
      msg += ` to ${env.AWS_LAMBDA_FUNCTION_NAME}`;
    }
    throw new Error(msg);
  }
});

// packages/core/src/util/index.ts
var Util;
((Util2) => {
  function handler(lambda) {
    return async function(event, context) {
      let body, statusCode;
      try {
        body = await lambda(event, context);
        statusCode = 200;
      } catch (error) {
        statusCode = 500;
        body = JSON.stringify({
          error: error instanceof Error ? error.message : String(error)
        });
      }
      return {
        body,
        statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      };
    };
  }
  Util2.handler = handler;
  __name(handler, "handler");
})(Util || (Util = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js
var ENV_ENDPOINT_DISCOVERY = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"];
var CONFIG_ENDPOINT_DISCOVERY = "endpoint_discovery_enabled";
var isFalsy = /* @__PURE__ */ __name((value) => ["false", "0"].indexOf(value) >= 0, "isFalsy");
var NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS = {
  environmentVariableSelector: /* @__PURE__ */ __name((env3) => {
    for (let i5 = 0; i5 < ENV_ENDPOINT_DISCOVERY.length; i5++) {
      const envKey = ENV_ENDPOINT_DISCOVERY[i5];
      if (envKey in env3) {
        const value = env3[envKey];
        if (value === "") {
          throw Error(`Environment variable ${envKey} can't be empty of undefined, got "${value}"`);
        }
        return !isFalsy(value);
      }
    }
  }, "environmentVariableSelector"),
  configFileSelector: /* @__PURE__ */ __name((profile) => {
    if (CONFIG_ENDPOINT_DISCOVERY in profile) {
      const value = profile[CONFIG_ENDPOINT_DISCOVERY];
      if (value === void 0) {
        throw Error(`Shared config entry ${CONFIG_ENDPOINT_DISCOVERY} can't be undefined, got "${value}"`);
      }
      return !isFalsy(value);
    }
  }, "configFileSelector"),
  default: void 0
};

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
(function(HttpAuthLocation5) {
  HttpAuthLocation5["HEADER"] = "header";
  HttpAuthLocation5["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
(function(HttpApiKeyAuthLocation5) {
  HttpApiKeyAuthLocation5["HEADER"] = "header";
  HttpApiKeyAuthLocation5["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function(EndpointURLScheme5) {
  EndpointURLScheme5["HTTP"] = "http";
  EndpointURLScheme5["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function(AlgorithmId5) {
  AlgorithmId5["MD5"] = "md5";
  AlgorithmId5["CRC32"] = "crc32";
  AlgorithmId5["CRC32C"] = "crc32c";
  AlgorithmId5["SHA1"] = "sha1";
  AlgorithmId5["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
(function(FieldPosition5) {
  FieldPosition5[FieldPosition5["HEADER"] = 0] = "HEADER";
  FieldPosition5[FieldPosition5["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
(function(IniSectionType5) {
  IniSectionType5["PROFILE"] = "profile";
  IniSectionType5["SSO_SESSION"] = "sso-session";
  IniSectionType5["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

// node_modules/@aws-sdk/middleware-endpoint-discovery/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function(RequestHandlerProtocol5) {
  RequestHandlerProtocol5["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol5["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol5["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js
var import_lru_cache = __toESM(require_lru_cache());
var EndpointCache = class {
  static {
    __name(this, "EndpointCache");
  }
  constructor(capacity) {
    this.cache = new import_lru_cache.default(capacity);
  }
  getEndpoint(key) {
    const endpointsWithExpiry = this.get(key);
    if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
      return void 0;
    }
    const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
  }
  get(key) {
    if (!this.has(key)) {
      return;
    }
    const value = this.cache.get(key);
    if (!value) {
      return;
    }
    const now = Date.now();
    const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
    if (endpointsWithExpiry.length === 0) {
      this.delete(key);
      return void 0;
    }
    return endpointsWithExpiry;
  }
  set(key, endpoints) {
    const now = Date.now();
    this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
      Address,
      Expires: now + CachePeriodInMinutes * 60 * 1e3
    })));
  }
  delete(key) {
    this.cache.set(key, []);
  }
  has(key) {
    if (!this.cache.has(key)) {
      return false;
    }
    const endpoints = this.cache.peek(key);
    if (!endpoints) {
      return false;
    }
    return endpoints.length > 0;
  }
  clear() {
    this.cache.clear();
  }
};

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
var resolveEndpointDiscoveryConfig = /* @__PURE__ */ __name((input, { endpointDiscoveryCommandCtor }) => ({
  ...input,
  endpointDiscoveryCommandCtor,
  endpointCache: new EndpointCache(input.endpointCacheSize ?? 1e3),
  endpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0 ? () => Promise.resolve(input.endpointDiscoveryEnabled) : input.endpointDiscoveryEnabledProvider,
  isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0
}), "resolveEndpointDiscoveryConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
init_dist_es3();
init_dist_es4();
init_dist_es5();
init_dist_es8();
init_dist_es11();
init_dist_es36();
init_dist_es37();
init_dist_es18();
init_dist_es35();
init_dist_es34();

// node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js
init_dist_es39();
init_dist_es10();
var defaultDynamoDBHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "defaultDynamoDBHttpAuthSchemeParametersProvider");
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "dynamodb",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
var defaultDynamoDBHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
}, "defaultDynamoDBHttpAuthSchemeProvider");
var resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config) => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  return {
    ...config_0
  };
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
init_dist_es18();
init_dist_es17();
init_dist_es34();

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "dynamodb"
  };
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
init_dist_es39();
init_dist_es2();
init_dist_es34();

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js
init_dist_es34();
var DynamoDBServiceException = class _DynamoDBServiceException extends ServiceException {
  static {
    __name(this, "DynamoDBServiceException");
  }
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _DynamoDBServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js
var BackupInUseException = class _BackupInUseException extends DynamoDBServiceException {
  static {
    __name(this, "BackupInUseException");
  }
  constructor(opts) {
    super({
      name: "BackupInUseException",
      $fault: "client",
      ...opts
    });
    this.name = "BackupInUseException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _BackupInUseException.prototype);
  }
};
var BackupNotFoundException = class _BackupNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "BackupNotFoundException");
  }
  constructor(opts) {
    super({
      name: "BackupNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "BackupNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _BackupNotFoundException.prototype);
  }
};
var InternalServerError = class _InternalServerError extends DynamoDBServiceException {
  static {
    __name(this, "InternalServerError");
  }
  constructor(opts) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerError";
    this.$fault = "server";
    Object.setPrototypeOf(this, _InternalServerError.prototype);
  }
};
var RequestLimitExceeded = class _RequestLimitExceeded extends DynamoDBServiceException {
  static {
    __name(this, "RequestLimitExceeded");
  }
  constructor(opts) {
    super({
      name: "RequestLimitExceeded",
      $fault: "client",
      ...opts
    });
    this.name = "RequestLimitExceeded";
    this.$fault = "client";
    Object.setPrototypeOf(this, _RequestLimitExceeded.prototype);
  }
};
var InvalidEndpointException = class _InvalidEndpointException extends DynamoDBServiceException {
  static {
    __name(this, "InvalidEndpointException");
  }
  constructor(opts) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidEndpointException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
};
var ProvisionedThroughputExceededException = class _ProvisionedThroughputExceededException extends DynamoDBServiceException {
  static {
    __name(this, "ProvisionedThroughputExceededException");
  }
  constructor(opts) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts
    });
    this.name = "ProvisionedThroughputExceededException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ProvisionedThroughputExceededException.prototype);
  }
};
var ResourceNotFoundException = class _ResourceNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "ResourceNotFoundException");
  }
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ResourceNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
  }
};
var ItemCollectionSizeLimitExceededException = class _ItemCollectionSizeLimitExceededException extends DynamoDBServiceException {
  static {
    __name(this, "ItemCollectionSizeLimitExceededException");
  }
  constructor(opts) {
    super({
      name: "ItemCollectionSizeLimitExceededException",
      $fault: "client",
      ...opts
    });
    this.name = "ItemCollectionSizeLimitExceededException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ItemCollectionSizeLimitExceededException.prototype);
  }
};
var ContinuousBackupsUnavailableException = class _ContinuousBackupsUnavailableException extends DynamoDBServiceException {
  static {
    __name(this, "ContinuousBackupsUnavailableException");
  }
  constructor(opts) {
    super({
      name: "ContinuousBackupsUnavailableException",
      $fault: "client",
      ...opts
    });
    this.name = "ContinuousBackupsUnavailableException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ContinuousBackupsUnavailableException.prototype);
  }
};
var LimitExceededException = class _LimitExceededException extends DynamoDBServiceException {
  static {
    __name(this, "LimitExceededException");
  }
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    this.name = "LimitExceededException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _LimitExceededException.prototype);
  }
};
var TableInUseException = class _TableInUseException extends DynamoDBServiceException {
  static {
    __name(this, "TableInUseException");
  }
  constructor(opts) {
    super({
      name: "TableInUseException",
      $fault: "client",
      ...opts
    });
    this.name = "TableInUseException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TableInUseException.prototype);
  }
};
var TableNotFoundException = class _TableNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "TableNotFoundException");
  }
  constructor(opts) {
    super({
      name: "TableNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "TableNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TableNotFoundException.prototype);
  }
};
var GlobalTableAlreadyExistsException = class _GlobalTableAlreadyExistsException extends DynamoDBServiceException {
  static {
    __name(this, "GlobalTableAlreadyExistsException");
  }
  constructor(opts) {
    super({
      name: "GlobalTableAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    this.name = "GlobalTableAlreadyExistsException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _GlobalTableAlreadyExistsException.prototype);
  }
};
var ResourceInUseException = class _ResourceInUseException extends DynamoDBServiceException {
  static {
    __name(this, "ResourceInUseException");
  }
  constructor(opts) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts
    });
    this.name = "ResourceInUseException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ResourceInUseException.prototype);
  }
};
var TransactionConflictException = class _TransactionConflictException extends DynamoDBServiceException {
  static {
    __name(this, "TransactionConflictException");
  }
  constructor(opts) {
    super({
      name: "TransactionConflictException",
      $fault: "client",
      ...opts
    });
    this.name = "TransactionConflictException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TransactionConflictException.prototype);
  }
};
var PolicyNotFoundException = class _PolicyNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "PolicyNotFoundException");
  }
  constructor(opts) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "PolicyNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _PolicyNotFoundException.prototype);
  }
};
var ExportNotFoundException = class _ExportNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "ExportNotFoundException");
  }
  constructor(opts) {
    super({
      name: "ExportNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ExportNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ExportNotFoundException.prototype);
  }
};
var GlobalTableNotFoundException = class _GlobalTableNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "GlobalTableNotFoundException");
  }
  constructor(opts) {
    super({
      name: "GlobalTableNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "GlobalTableNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _GlobalTableNotFoundException.prototype);
  }
};
var ImportNotFoundException = class _ImportNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "ImportNotFoundException");
  }
  constructor(opts) {
    super({
      name: "ImportNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ImportNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ImportNotFoundException.prototype);
  }
};
var DuplicateItemException = class _DuplicateItemException extends DynamoDBServiceException {
  static {
    __name(this, "DuplicateItemException");
  }
  constructor(opts) {
    super({
      name: "DuplicateItemException",
      $fault: "client",
      ...opts
    });
    this.name = "DuplicateItemException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _DuplicateItemException.prototype);
  }
};
var IdempotentParameterMismatchException = class _IdempotentParameterMismatchException extends DynamoDBServiceException {
  static {
    __name(this, "IdempotentParameterMismatchException");
  }
  constructor(opts) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts
    });
    this.name = "IdempotentParameterMismatchException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
};
var TransactionInProgressException = class _TransactionInProgressException extends DynamoDBServiceException {
  static {
    __name(this, "TransactionInProgressException");
  }
  constructor(opts) {
    super({
      name: "TransactionInProgressException",
      $fault: "client",
      ...opts
    });
    this.name = "TransactionInProgressException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TransactionInProgressException.prototype);
    this.Message = opts.Message;
  }
};
var ExportConflictException = class _ExportConflictException extends DynamoDBServiceException {
  static {
    __name(this, "ExportConflictException");
  }
  constructor(opts) {
    super({
      name: "ExportConflictException",
      $fault: "client",
      ...opts
    });
    this.name = "ExportConflictException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ExportConflictException.prototype);
  }
};
var InvalidExportTimeException = class _InvalidExportTimeException extends DynamoDBServiceException {
  static {
    __name(this, "InvalidExportTimeException");
  }
  constructor(opts) {
    super({
      name: "InvalidExportTimeException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidExportTimeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidExportTimeException.prototype);
  }
};
var PointInTimeRecoveryUnavailableException = class _PointInTimeRecoveryUnavailableException extends DynamoDBServiceException {
  static {
    __name(this, "PointInTimeRecoveryUnavailableException");
  }
  constructor(opts) {
    super({
      name: "PointInTimeRecoveryUnavailableException",
      $fault: "client",
      ...opts
    });
    this.name = "PointInTimeRecoveryUnavailableException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _PointInTimeRecoveryUnavailableException.prototype);
  }
};
var ImportConflictException = class _ImportConflictException extends DynamoDBServiceException {
  static {
    __name(this, "ImportConflictException");
  }
  constructor(opts) {
    super({
      name: "ImportConflictException",
      $fault: "client",
      ...opts
    });
    this.name = "ImportConflictException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ImportConflictException.prototype);
  }
};
var TableAlreadyExistsException = class _TableAlreadyExistsException extends DynamoDBServiceException {
  static {
    __name(this, "TableAlreadyExistsException");
  }
  constructor(opts) {
    super({
      name: "TableAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    this.name = "TableAlreadyExistsException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TableAlreadyExistsException.prototype);
  }
};
var InvalidRestoreTimeException = class _InvalidRestoreTimeException extends DynamoDBServiceException {
  static {
    __name(this, "InvalidRestoreTimeException");
  }
  constructor(opts) {
    super({
      name: "InvalidRestoreTimeException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRestoreTimeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidRestoreTimeException.prototype);
  }
};
var ReplicaAlreadyExistsException = class _ReplicaAlreadyExistsException extends DynamoDBServiceException {
  static {
    __name(this, "ReplicaAlreadyExistsException");
  }
  constructor(opts) {
    super({
      name: "ReplicaAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    this.name = "ReplicaAlreadyExistsException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ReplicaAlreadyExistsException.prototype);
  }
};
var ReplicaNotFoundException = class _ReplicaNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "ReplicaNotFoundException");
  }
  constructor(opts) {
    super({
      name: "ReplicaNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ReplicaNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ReplicaNotFoundException.prototype);
  }
};
var IndexNotFoundException = class _IndexNotFoundException extends DynamoDBServiceException {
  static {
    __name(this, "IndexNotFoundException");
  }
  constructor(opts) {
    super({
      name: "IndexNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "IndexNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _IndexNotFoundException.prototype);
  }
};
var AttributeValue;
(function(AttributeValue2) {
  AttributeValue2.visit = (value, visitor) => {
    if (value.S !== void 0)
      return visitor.S(value.S);
    if (value.N !== void 0)
      return visitor.N(value.N);
    if (value.B !== void 0)
      return visitor.B(value.B);
    if (value.SS !== void 0)
      return visitor.SS(value.SS);
    if (value.NS !== void 0)
      return visitor.NS(value.NS);
    if (value.BS !== void 0)
      return visitor.BS(value.BS);
    if (value.M !== void 0)
      return visitor.M(value.M);
    if (value.L !== void 0)
      return visitor.L(value.L);
    if (value.NULL !== void 0)
      return visitor.NULL(value.NULL);
    if (value.BOOL !== void 0)
      return visitor.BOOL(value.BOOL);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AttributeValue || (AttributeValue = {}));
var ConditionalCheckFailedException = class _ConditionalCheckFailedException extends DynamoDBServiceException {
  static {
    __name(this, "ConditionalCheckFailedException");
  }
  constructor(opts) {
    super({
      name: "ConditionalCheckFailedException",
      $fault: "client",
      ...opts
    });
    this.name = "ConditionalCheckFailedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ConditionalCheckFailedException.prototype);
    this.Item = opts.Item;
  }
};
var TransactionCanceledException = class _TransactionCanceledException extends DynamoDBServiceException {
  static {
    __name(this, "TransactionCanceledException");
  }
  constructor(opts) {
    super({
      name: "TransactionCanceledException",
      $fault: "client",
      ...opts
    });
    this.name = "TransactionCanceledException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TransactionCanceledException.prototype);
    this.Message = opts.Message;
    this.CancellationReasons = opts.CancellationReasons;
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
var se_DeleteItemCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = sharedHeaders("DeleteItem");
  let body;
  body = JSON.stringify(se_DeleteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteItemCommand");
var se_DescribeEndpointsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = sharedHeaders("DescribeEndpoints");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DescribeEndpointsCommand");
var de_DeleteItemCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseJsonBody(output.body, context);
  let contents = {};
  contents = de_DeleteItemOutput(data, context);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_DeleteItemCommand");
var de_DescribeEndpointsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseJsonBody(output.body, context);
  let contents = {};
  contents = _json(data);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_DescribeEndpointsCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseJsonErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context);
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
      throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.dynamodb#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ExportNotFoundException":
    case "com.amazonaws.dynamodb#ExportNotFoundException":
      throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "ImportNotFoundException":
    case "com.amazonaws.dynamodb#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateItemException":
    case "com.amazonaws.dynamodb#DuplicateItemException":
      throw await de_DuplicateItemExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
    case "ExportConflictException":
    case "com.amazonaws.dynamodb#ExportConflictException":
      throw await de_ExportConflictExceptionRes(parsedOutput, context);
    case "InvalidExportTimeException":
    case "com.amazonaws.dynamodb#InvalidExportTimeException":
      throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
    case "ImportConflictException":
    case "com.amazonaws.dynamodb#ImportConflictException":
      throw await de_ImportConflictExceptionRes(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CommandError");
var de_BackupInUseExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new BackupInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_BackupInUseExceptionRes");
var de_BackupNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new BackupNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_BackupNotFoundExceptionRes");
var de_ConditionalCheckFailedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ConditionalCheckFailedException(body, context);
  const exception = new ConditionalCheckFailedException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ConditionalCheckFailedExceptionRes");
var de_ContinuousBackupsUnavailableExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ContinuousBackupsUnavailableException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ContinuousBackupsUnavailableExceptionRes");
var de_DuplicateItemExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new DuplicateItemException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_DuplicateItemExceptionRes");
var de_ExportConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExportConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ExportConflictExceptionRes");
var de_ExportNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExportNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ExportNotFoundExceptionRes");
var de_GlobalTableAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new GlobalTableAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_GlobalTableAlreadyExistsExceptionRes");
var de_GlobalTableNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new GlobalTableNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_GlobalTableNotFoundExceptionRes");
var de_IdempotentParameterMismatchExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IdempotentParameterMismatchExceptionRes");
var de_ImportConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ImportConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ImportConflictExceptionRes");
var de_ImportNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ImportNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ImportNotFoundExceptionRes");
var de_IndexNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new IndexNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IndexNotFoundExceptionRes");
var de_InternalServerErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InternalServerErrorRes");
var de_InvalidEndpointExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidEndpointExceptionRes");
var de_InvalidExportTimeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidExportTimeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidExportTimeExceptionRes");
var de_InvalidRestoreTimeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidRestoreTimeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidRestoreTimeExceptionRes");
var de_ItemCollectionSizeLimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ItemCollectionSizeLimitExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ItemCollectionSizeLimitExceededExceptionRes");
var de_LimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_LimitExceededExceptionRes");
var de_PointInTimeRecoveryUnavailableExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new PointInTimeRecoveryUnavailableException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_PointInTimeRecoveryUnavailableExceptionRes");
var de_PolicyNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_PolicyNotFoundExceptionRes");
var de_ProvisionedThroughputExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ProvisionedThroughputExceededExceptionRes");
var de_ReplicaAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicaAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ReplicaAlreadyExistsExceptionRes");
var de_ReplicaNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicaNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ReplicaNotFoundExceptionRes");
var de_RequestLimitExceededRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_RequestLimitExceededRes");
var de_ResourceInUseExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceInUseExceptionRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceNotFoundExceptionRes");
var de_TableAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TableAlreadyExistsExceptionRes");
var de_TableInUseExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TableInUseExceptionRes");
var de_TableNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TableNotFoundExceptionRes");
var de_TransactionCanceledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_TransactionCanceledException(body, context);
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TransactionCanceledExceptionRes");
var de_TransactionConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TransactionConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TransactionConflictExceptionRes");
var de_TransactionInProgressExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TransactionInProgressExceptionRes");
var se_AttributeValue = /* @__PURE__ */ __name((input, context) => {
  return AttributeValue.visit(input, {
    B: /* @__PURE__ */ __name((value) => ({ B: context.base64Encoder(value) }), "B"),
    BOOL: /* @__PURE__ */ __name((value) => ({ BOOL: value }), "BOOL"),
    BS: /* @__PURE__ */ __name((value) => ({ BS: se_BinarySetAttributeValue(value, context) }), "BS"),
    L: /* @__PURE__ */ __name((value) => ({ L: se_ListAttributeValue(value, context) }), "L"),
    M: /* @__PURE__ */ __name((value) => ({ M: se_MapAttributeValue(value, context) }), "M"),
    N: /* @__PURE__ */ __name((value) => ({ N: value }), "N"),
    NS: /* @__PURE__ */ __name((value) => ({ NS: _json(value) }), "NS"),
    NULL: /* @__PURE__ */ __name((value) => ({ NULL: value }), "NULL"),
    S: /* @__PURE__ */ __name((value) => ({ S: value }), "S"),
    SS: /* @__PURE__ */ __name((value) => ({ SS: _json(value) }), "SS"),
    _: /* @__PURE__ */ __name((name, value) => ({ name: value }), "_")
  });
}, "se_AttributeValue");
var se_AttributeValueList = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e5) => e5 != null).map((entry) => {
    return se_AttributeValue(entry, context);
  });
}, "se_AttributeValueList");
var se_BinarySetAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e5) => e5 != null).map((entry) => {
    return context.base64Encoder(entry);
  });
}, "se_BinarySetAttributeValue");
var se_DeleteItemInput = /* @__PURE__ */ __name((input, context) => {
  return take(input, {
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: /* @__PURE__ */ __name((_2) => se_ExpectedAttributeMap(_2, context), "Expected"),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: /* @__PURE__ */ __name((_2) => se_ExpressionAttributeValueMap(_2, context), "ExpressionAttributeValues"),
    Key: /* @__PURE__ */ __name((_2) => se_Key(_2, context), "Key"),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
}, "se_DeleteItemInput");
var se_ExpectedAttributeMap = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ExpectedAttributeValue(value, context);
    return acc;
  }, {});
}, "se_ExpectedAttributeMap");
var se_ExpectedAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return take(input, {
    AttributeValueList: /* @__PURE__ */ __name((_2) => se_AttributeValueList(_2, context), "AttributeValueList"),
    ComparisonOperator: [],
    Exists: [],
    Value: /* @__PURE__ */ __name((_2) => se_AttributeValue(_2, context), "Value")
  });
}, "se_ExpectedAttributeValue");
var se_ExpressionAttributeValueMap = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
}, "se_ExpressionAttributeValueMap");
var se_Key = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
}, "se_Key");
var se_ListAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e5) => e5 != null).map((entry) => {
    return se_AttributeValue(entry, context);
  });
}, "se_ListAttributeValue");
var se_MapAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
}, "se_MapAttributeValue");
var de_AttributeMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context);
    return acc;
  }, {});
}, "de_AttributeMap");
var de_AttributeValue = /* @__PURE__ */ __name((output, context) => {
  if (output.B != null) {
    return {
      B: context.base64Decoder(output.B)
    };
  }
  if (expectBoolean(output.BOOL) !== void 0) {
    return { BOOL: expectBoolean(output.BOOL) };
  }
  if (output.BS != null) {
    return {
      BS: de_BinarySetAttributeValue(output.BS, context)
    };
  }
  if (output.L != null) {
    return {
      L: de_ListAttributeValue(output.L, context)
    };
  }
  if (output.M != null) {
    return {
      M: de_MapAttributeValue(output.M, context)
    };
  }
  if (expectString(output.N) !== void 0) {
    return { N: expectString(output.N) };
  }
  if (output.NS != null) {
    return {
      NS: _json(output.NS)
    };
  }
  if (expectBoolean(output.NULL) !== void 0) {
    return { NULL: expectBoolean(output.NULL) };
  }
  if (expectString(output.S) !== void 0) {
    return { S: expectString(output.S) };
  }
  if (output.SS != null) {
    return {
      SS: _json(output.SS)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_AttributeValue");
var de_BinarySetAttributeValue = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return context.base64Decoder(entry);
  });
  return retVal;
}, "de_BinarySetAttributeValue");
var de_CancellationReason = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    Code: expectString,
    Item: /* @__PURE__ */ __name((_2) => de_AttributeMap(_2, context), "Item"),
    Message: expectString
  });
}, "de_CancellationReason");
var de_CancellationReasonList = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return de_CancellationReason(entry, context);
  });
  return retVal;
}, "de_CancellationReasonList");
var de_Capacity = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    ReadCapacityUnits: limitedParseDouble,
    WriteCapacityUnits: limitedParseDouble
  });
}, "de_Capacity");
var de_ConditionalCheckFailedException = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    Item: /* @__PURE__ */ __name((_2) => de_AttributeMap(_2, context), "Item"),
    message: expectString
  });
}, "de_ConditionalCheckFailedException");
var de_ConsumedCapacity = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    GlobalSecondaryIndexes: /* @__PURE__ */ __name((_2) => de_SecondaryIndexesCapacityMap(_2, context), "GlobalSecondaryIndexes"),
    LocalSecondaryIndexes: /* @__PURE__ */ __name((_2) => de_SecondaryIndexesCapacityMap(_2, context), "LocalSecondaryIndexes"),
    ReadCapacityUnits: limitedParseDouble,
    Table: /* @__PURE__ */ __name((_2) => de_Capacity(_2, context), "Table"),
    TableName: expectString,
    WriteCapacityUnits: limitedParseDouble
  });
}, "de_ConsumedCapacity");
var de_DeleteItemOutput = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    Attributes: /* @__PURE__ */ __name((_2) => de_AttributeMap(_2, context), "Attributes"),
    ConsumedCapacity: /* @__PURE__ */ __name((_2) => de_ConsumedCapacity(_2, context), "ConsumedCapacity"),
    ItemCollectionMetrics: /* @__PURE__ */ __name((_2) => de_ItemCollectionMetrics(_2, context), "ItemCollectionMetrics")
  });
}, "de_DeleteItemOutput");
var de_ItemCollectionKeyAttributeMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context);
    return acc;
  }, {});
}, "de_ItemCollectionKeyAttributeMap");
var de_ItemCollectionMetrics = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    ItemCollectionKey: /* @__PURE__ */ __name((_2) => de_ItemCollectionKeyAttributeMap(_2, context), "ItemCollectionKey"),
    SizeEstimateRangeGB: /* @__PURE__ */ __name((_2) => de_ItemCollectionSizeEstimateRange(_2, context), "SizeEstimateRangeGB")
  });
}, "de_ItemCollectionMetrics");
var de_ItemCollectionSizeEstimateRange = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return limitedParseDouble(entry);
  });
  return retVal;
}, "de_ItemCollectionSizeEstimateRange");
var de_ListAttributeValue = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return de_AttributeValue(awsExpectUnion(entry), context);
  });
  return retVal;
}, "de_ListAttributeValue");
var de_MapAttributeValue = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context);
    return acc;
  }, {});
}, "de_MapAttributeValue");
var de_SecondaryIndexesCapacityMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Capacity(value, context);
    return acc;
  }, {});
}, "de_SecondaryIndexesCapacityMap");
var de_TransactionCanceledException = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    CancellationReasons: /* @__PURE__ */ __name((_2) => de_CancellationReasonList(_2, context), "CancellationReasons"),
    Message: expectString
  });
}, "de_TransactionCanceledException");
var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var throwDefaultError2 = withBaseException(DynamoDBServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest2(contents);
}, "buildHttpRpcRequest");
function sharedHeaders(operation) {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `DynamoDB_20120810.${operation}`
  };
}
__name(sharedHeaders, "sharedHeaders");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
var DescribeEndpointsCommand = class extends Command.classBuilder().ep({
  ...commonParams
}).m(function(Command3, cs, config, o5) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "DescribeEndpoints", {}).n("DynamoDBClient", "DescribeEndpointsCommand").f(void 0, void 0).ser(se_DescribeEndpointsCommand).de(de_DescribeEndpointsCommand).build() {
  static {
    __name(this, "DescribeEndpointsCommand");
  }
};

// node_modules/@aws-sdk/client-dynamodb/package.json
var package_default = {
  name: "@aws-sdk/client-dynamodb",
  description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
  version: "3.619.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-dynamodb",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo dynamodb"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/client-sso-oidc": "3.616.0",
    "@aws-sdk/client-sts": "3.616.0",
    "@aws-sdk/core": "3.616.0",
    "@aws-sdk/credential-provider-node": "3.616.0",
    "@aws-sdk/middleware-endpoint-discovery": "3.616.0",
    "@aws-sdk/middleware-host-header": "3.616.0",
    "@aws-sdk/middleware-logger": "3.609.0",
    "@aws-sdk/middleware-recursion-detection": "3.616.0",
    "@aws-sdk/middleware-user-agent": "3.616.0",
    "@aws-sdk/region-config-resolver": "3.614.0",
    "@aws-sdk/types": "3.609.0",
    "@aws-sdk/util-endpoints": "3.614.0",
    "@aws-sdk/util-user-agent-browser": "3.609.0",
    "@aws-sdk/util-user-agent-node": "3.614.0",
    "@smithy/config-resolver": "^3.0.5",
    "@smithy/core": "^2.2.7",
    "@smithy/fetch-http-handler": "^3.2.2",
    "@smithy/hash-node": "^3.0.3",
    "@smithy/invalid-dependency": "^3.0.3",
    "@smithy/middleware-content-length": "^3.0.4",
    "@smithy/middleware-endpoint": "^3.0.5",
    "@smithy/middleware-retry": "^3.0.10",
    "@smithy/middleware-serde": "^3.0.3",
    "@smithy/middleware-stack": "^3.0.3",
    "@smithy/node-config-provider": "^3.1.4",
    "@smithy/node-http-handler": "^3.1.3",
    "@smithy/protocol-http": "^4.0.4",
    "@smithy/smithy-client": "^3.1.8",
    "@smithy/types": "^3.3.0",
    "@smithy/url-parser": "^3.0.3",
    "@smithy/util-base64": "^3.0.0",
    "@smithy/util-body-length-browser": "^3.0.0",
    "@smithy/util-body-length-node": "^3.0.0",
    "@smithy/util-defaults-mode-browser": "^3.0.10",
    "@smithy/util-defaults-mode-node": "^3.0.10",
    "@smithy/util-endpoints": "^2.0.5",
    "@smithy/util-middleware": "^3.0.3",
    "@smithy/util-retry": "^3.0.3",
    "@smithy/util-utf8": "^3.0.0",
    "@smithy/util-waiter": "^3.1.2",
    tslib: "^2.6.2",
    uuid: "^9.0.1"
  },
  devDependencies: {
    "@tsconfig/node16": "16.1.3",
    "@types/node": "^16.18.96",
    "@types/uuid": "^9.0.4",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=16.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-dynamodb"
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.js
init_dist_es39();
init_dist_es72();
init_dist_es58();
init_dist_es11();
init_dist_es60();
init_dist_es35();
init_dist_es14();
init_dist_es29();
init_dist_es61();
init_dist_es20();

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
init_dist_es39();
init_dist_es34();
init_dist_es16();
init_dist_es26();
init_dist_es25();

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
init_dist_es7();
init_dist_es6();

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
var w4 = "required";
var x4 = "fn";
var y2 = "argv";
var z2 = "ref";
var a4 = true;
var b4 = "isSet";
var c4 = "booleanEquals";
var d4 = "error";
var e4 = "endpoint";
var f4 = "tree";
var g4 = "PartitionResult";
var h4 = "getAttr";
var i4 = "stringEquals";
var j4 = { [w4]: false, "type": "String" };
var k4 = { [w4]: true, "default": false, "type": "Boolean" };
var l4 = { [z2]: "Endpoint" };
var m4 = { [x4]: c4, [y2]: [{ [z2]: "UseFIPS" }, true] };
var n4 = { [x4]: c4, [y2]: [{ [z2]: "UseDualStack" }, true] };
var o4 = {};
var p4 = { [z2]: "Region" };
var q4 = { [x4]: h4, [y2]: [{ [z2]: g4 }, "supportsFIPS"] };
var r4 = { [z2]: g4 };
var s4 = { [x4]: c4, [y2]: [true, { [x4]: h4, [y2]: [r4, "supportsDualStack"] }] };
var t4 = [m4];
var u4 = [n4];
var v5 = [p4];
var _data4 = { version: "1.0", parameters: { Region: j4, UseDualStack: k4, UseFIPS: k4, Endpoint: j4 }, rules: [{ conditions: [{ [x4]: b4, [y2]: [l4] }], rules: [{ conditions: t4, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d4 }, { conditions: u4, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d4 }, { endpoint: { url: l4, properties: o4, headers: o4 }, type: e4 }], type: f4 }, { conditions: [{ [x4]: b4, [y2]: v5 }], rules: [{ conditions: [{ [x4]: "aws.partition", [y2]: v5, assign: g4 }], rules: [{ conditions: [m4, n4], rules: [{ conditions: [{ [x4]: c4, [y2]: [a4, q4] }, s4], rules: [{ endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d4 }], type: f4 }, { conditions: t4, rules: [{ conditions: [{ [x4]: c4, [y2]: [q4, a4] }], rules: [{ conditions: [{ [x4]: i4, [y2]: [{ [x4]: h4, [y2]: [r4, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://dynamodb.{Region}.amazonaws.com", properties: o4, headers: o4 }, type: e4 }, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d4 }], type: f4 }, { conditions: u4, rules: [{ conditions: [s4], rules: [{ endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d4 }], type: f4 }, { conditions: [{ [x4]: i4, [y2]: [p4, "local"] }], endpoint: { url: "http://localhost:8000", properties: { authSchemes: [{ name: "sigv4", signingName: "dynamodb", signingRegion: "us-east-1" }] }, headers: o4 }, type: e4 }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }], type: f4 }, { error: "Invalid Configuration: Missing Region", type: d4 }] };
var ruleSet4 = _data4;

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver4 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet4, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
var getRuntimeConfig7 = /* @__PURE__ */ __name((config) => {
  return {
    apiVersion: "2012-08-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver4,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
        signer: new AwsSdkSigV4Signer()
      }
    ],
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "DynamoDB",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.js
init_dist_es34();
init_dist_es62();
init_dist_es34();
var getRuntimeConfig8 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig7(config);
  emitWarningIfUnsupportedVersion2(process.version);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? loadConfig(NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
init_dist_es63();
init_dist_es2();
init_dist_es34();

// node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration4 = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
var asPartial4 = /* @__PURE__ */ __name((t5) => t5, "asPartial");
var resolveRuntimeExtensions4 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = {
    ...asPartial4(getAwsRegionExtensionConfiguration(runtimeConfig)),
    ...asPartial4(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial4(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    ...asPartial4(getHttpAuthExtensionConfiguration4(runtimeConfig))
  };
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return {
    ...runtimeConfig,
    ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    ...resolveHttpAuthRuntimeConfig4(extensionConfiguration)
  };
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
var DynamoDBClient = class extends Client {
  static {
    __name(this, "DynamoDBClient");
  }
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig8(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    const _config_6 = resolveRetryConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
      endpointDiscoveryCommandCtor: DescribeEndpointsCommand
    });
    const _config_9 = resolveRuntimeExtensions4(_config_8, configuration?.extensions || []);
    super(_config_9);
    this.config = _config_9;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
      identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
  getDefaultHttpAuthSchemeParametersProvider() {
    return defaultDynamoDBHttpAuthSchemeParametersProvider;
  }
  getIdentityProviderConfigProvider() {
    return async (config) => new DefaultIdentityProviderConfig({
      "aws.auth#sigv4": config.credentials
    });
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteItemCommand.js
init_dist_es18();
init_dist_es17();
init_dist_es34();
var DeleteItemCommand = class extends Command.classBuilder().ep({
  ...commonParams
}).m(function(Command3, cs, config, o5) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command3.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "DeleteItem", {}).n("DynamoDBClient", "DeleteItemCommand").f(void 0, void 0).ser(se_DeleteItemCommand).de(de_DeleteItemCommand).build() {
  static {
    __name(this, "DeleteItemCommand");
  }
};

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases2 = /* @__PURE__ */ __name((name, aliases) => {
  const _aliases = [];
  if (name) {
    _aliases.push(name);
  }
  if (aliases) {
    for (const alias of aliases) {
      _aliases.push(alias);
    }
  }
  return _aliases;
}, "getAllAliases");
var getMiddlewareNameWithAliases2 = /* @__PURE__ */ __name((name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
}, "getMiddlewareNameWithAliases");
var constructStack3 = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a5, b5) => stepWeights2[b5.step] - stepWeights2[a5.step] || priorityWeights2[b5.priority || "normal"] - priorityWeights2[a5.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      const aliases = getAllAliases2(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases2(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases2(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases2(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases2(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: /* @__PURE__ */ __name((middleware, options = {}) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      const aliases = getAllAliases2(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases2(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
              throw new Error(`"${getMiddlewareNameWithAliases2(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases2(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      absoluteEntries.push(entry);
    }, "add"),
    addRelativeTo: /* @__PURE__ */ __name((middleware, options) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        middleware,
        ...options
      };
      const aliases = getAllAliases2(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases2(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${getMiddlewareNameWithAliases2(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases2(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      relativeEntries.push(entry);
    }, "addRelativeTo"),
    clone: /* @__PURE__ */ __name(() => cloneTo(constructStack3()), "clone"),
    use: /* @__PURE__ */ __name((plugin) => {
      plugin.applyToStack(stack);
    }, "use"),
    remove: /* @__PURE__ */ __name((toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    }, "remove"),
    removeByTag: /* @__PURE__ */ __name((toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name, aliases: _aliases } = entry;
        if (tags && tags.includes(toRemove)) {
          const aliases = getAllAliases2(name, _aliases);
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    }, "removeByTag"),
    concat: /* @__PURE__ */ __name((from) => {
      const cloned = cloneTo(constructStack3());
      cloned.use(from);
      cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
      return cloned;
    }, "concat"),
    applyToStack: cloneTo,
    identify: /* @__PURE__ */ __name(() => {
      return getMiddlewareList(true).map((mw) => {
        const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
        return getMiddlewareNameWithAliases2(mw.name, mw.aliases) + " - " + step;
      });
    }, "identify"),
    identifyOnResolve(toggle) {
      if (typeof toggle === "boolean")
        identifyOnResolve = toggle;
      return identifyOnResolve;
    },
    resolve: /* @__PURE__ */ __name((handler, context) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context);
      }
      if (identifyOnResolve) {
        console.log(stack.identify());
      }
      return handler;
    }, "resolve")
  };
  return stack;
}, "constructStack");
var stepWeights2 = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights2 = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/smithy-client/dist-es/client.js
var Client2 = class {
  static {
    __name(this, "Client");
  }
  constructor(config) {
    this.middlewareStack = constructStack3();
    this.config = config;
  }
  send(command, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    if (callback) {
      handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    if (this.config.requestHandler.destroy)
      this.config.requestHandler.destroy();
  }
};

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation4;
(function(HttpAuthLocation5) {
  HttpAuthLocation5["HEADER"] = "header";
  HttpAuthLocation5["QUERY"] = "query";
})(HttpAuthLocation4 || (HttpAuthLocation4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation4;
(function(HttpApiKeyAuthLocation5) {
  HttpApiKeyAuthLocation5["HEADER"] = "header";
  HttpApiKeyAuthLocation5["QUERY"] = "query";
})(HttpApiKeyAuthLocation4 || (HttpApiKeyAuthLocation4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme4;
(function(EndpointURLScheme5) {
  EndpointURLScheme5["HTTP"] = "http";
  EndpointURLScheme5["HTTPS"] = "https";
})(EndpointURLScheme4 || (EndpointURLScheme4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId4;
(function(AlgorithmId5) {
  AlgorithmId5["MD5"] = "md5";
  AlgorithmId5["CRC32"] = "crc32";
  AlgorithmId5["CRC32C"] = "crc32c";
  AlgorithmId5["SHA1"] = "sha1";
  AlgorithmId5["SHA256"] = "sha256";
})(AlgorithmId4 || (AlgorithmId4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/http.js
var FieldPosition4;
(function(FieldPosition5) {
  FieldPosition5[FieldPosition5["HEADER"] = 0] = "HEADER";
  FieldPosition5[FieldPosition5["TRAILER"] = 1] = "TRAILER";
})(FieldPosition4 || (FieldPosition4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY3 = "__smithy_context";

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType4;
(function(IniSectionType5) {
  IniSectionType5["PROFILE"] = "profile";
  IniSectionType5["SSO_SESSION"] = "sso-session";
  IniSectionType5["SERVICES"] = "services";
})(IniSectionType4 || (IniSectionType4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol4;
(function(RequestHandlerProtocol5) {
  RequestHandlerProtocol5["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol5["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol5["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol4 || (RequestHandlerProtocol4 = {}));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/util-hex-encoding/dist-es/index.js
var SHORT_TO_HEX3 = {};
var HEX_TO_SHORT3 = {};
for (let i5 = 0; i5 < 256; i5++) {
  let encodedByte = i5.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX3[i5] = encodedByte;
  HEX_TO_SHORT3[encodedByte] = i5;
}

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/smithy-client/dist-es/command.js
var Command2 = class {
  static {
    __name(this, "Command");
  }
  constructor() {
    this.middlewareStack = constructStack3();
  }
  static classBuilder() {
    return new ClassBuilder2();
  }
  resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger3 } = configuration;
    const handlerExecutionContext = {
      logger: logger3,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY3]: {
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
};
var ClassBuilder2 = class {
  static {
    __name(this, "ClassBuilder");
  }
  constructor() {
    this._init = () => {
    };
    this._ep = {};
    this._middlewareFn = () => [];
    this._commandName = "";
    this._clientName = "";
    this._additionalContext = {};
    this._smithyContext = {};
    this._inputFilterSensitiveLog = (_2) => _2;
    this._outputFilterSensitiveLog = (_2) => _2;
    this._serializer = null;
    this._deserializer = null;
  }
  init(cb) {
    this._init = cb;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_2) => _2, outputFilter = (_2) => _2) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return CommandRef = class extends Command2 {
      static {
        __name(this, "CommandRef");
      }
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.serialize = closure._serializer;
        this.deserialize = closure._deserializer;
        this.input = input ?? {};
        closure._init(this);
      }
      resolveMiddleware(stack, configuration, options) {
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
    };
  }
};

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var MAX_FLOAT3 = Math.ceil(2 ** 127 * (2 - 2 ** -23));

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/smithy-client/dist-es/date-utils.js
var RFC33393 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET3 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var IMF_FIXDATE3 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE3 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME3 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var FIFTY_YEARS_IN_MILLIS3 = 50 * 365 * 24 * 60 * 60 * 1e3;

// node_modules/@aws-sdk/lib-dynamodb/node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var StringWrapper3 = /* @__PURE__ */ __name(function() {
  const Class = Object.getPrototypeOf(this).constructor;
  const Constructor = Function.bind.apply(String, [null, ...arguments]);
  const instance = new Constructor();
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
}, "StringWrapper");
StringWrapper3.prototype = Object.create(String.prototype, {
  constructor: {
    value: StringWrapper3,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(StringWrapper3, String);

// node_modules/@aws-sdk/util-dynamodb/dist-es/NumberValue.js
var NumberValue = class _NumberValue {
  static {
    __name(this, "NumberValue");
  }
  constructor(value) {
    if (typeof value === "object" && "N" in value) {
      this.value = String(value.N);
    } else {
      this.value = String(value);
    }
    const valueOf = typeof value.valueOf() === "number" ? value.valueOf() : 0;
    const imprecise = valueOf > Number.MAX_SAFE_INTEGER || valueOf < Number.MIN_SAFE_INTEGER || Math.abs(valueOf) === Infinity || Number.isNaN(valueOf);
    if (imprecise) {
      throw new Error(`NumberValue should not be initialized with an imprecise number=${valueOf}. Use a string instead.`);
    }
  }
  static from(value) {
    return new _NumberValue(value);
  }
  toAttributeValue() {
    return {
      N: this.toString()
    };
  }
  toBigInt() {
    const stringValue = this.toString();
    return BigInt(stringValue);
  }
  toString() {
    return String(this.value);
  }
  valueOf() {
    return this.toString();
  }
};

// node_modules/@aws-sdk/util-dynamodb/dist-es/convertToAttr.js
var convertToAttr = /* @__PURE__ */ __name((data, options) => {
  if (data === void 0) {
    throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
  } else if (data === null && typeof data === "object") {
    return convertToNullAttr();
  } else if (Array.isArray(data)) {
    return convertToListAttr(data, options);
  } else if (data?.constructor?.name === "Set") {
    return convertToSetAttr(data, options);
  } else if (data?.constructor?.name === "Map") {
    return convertToMapAttrFromIterable(data, options);
  } else if (data?.constructor?.name === "Object" || !data.constructor && typeof data === "object") {
    return convertToMapAttrFromEnumerableProps(data, options);
  } else if (isBinary(data)) {
    if (data.length === 0 && options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    return convertToBinaryAttr(data);
  } else if (typeof data === "boolean" || data?.constructor?.name === "Boolean") {
    return { BOOL: data.valueOf() };
  } else if (typeof data === "number" || data?.constructor?.name === "Number") {
    return convertToNumberAttr(data);
  } else if (data instanceof NumberValue) {
    return data.toAttributeValue();
  } else if (typeof data === "bigint") {
    return convertToBigIntAttr(data);
  } else if (typeof data === "string" || data?.constructor?.name === "String") {
    if (data.length === 0 && options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    return convertToStringAttr(data);
  } else if (options?.convertClassInstanceToMap && typeof data === "object") {
    return convertToMapAttrFromEnumerableProps(data, options);
  }
  throw new Error(`Unsupported type passed: ${data}. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.`);
}, "convertToAttr");
var convertToListAttr = /* @__PURE__ */ __name((data, options) => ({
  L: data.filter((item) => typeof item !== "function" && (!options?.removeUndefinedValues || options?.removeUndefinedValues && item !== void 0)).map((item) => convertToAttr(item, options))
}), "convertToListAttr");
var convertToSetAttr = /* @__PURE__ */ __name((set, options) => {
  const setToOperate = options?.removeUndefinedValues ? new Set([...set].filter((value) => value !== void 0)) : set;
  if (!options?.removeUndefinedValues && setToOperate.has(void 0)) {
    throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
  }
  if (setToOperate.size === 0) {
    if (options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    throw new Error(`Pass a non-empty set, or options.convertEmptyValues=true.`);
  }
  const item = setToOperate.values().next().value;
  if (item instanceof NumberValue) {
    return {
      NS: Array.from(setToOperate).map((_2) => _2.toString())
    };
  } else if (typeof item === "number") {
    return {
      NS: Array.from(setToOperate).map(convertToNumberAttr).map((item2) => item2.N)
    };
  } else if (typeof item === "bigint") {
    return {
      NS: Array.from(setToOperate).map(convertToBigIntAttr).map((item2) => item2.N)
    };
  } else if (typeof item === "string") {
    return {
      SS: Array.from(setToOperate).map(convertToStringAttr).map((item2) => item2.S)
    };
  } else if (isBinary(item)) {
    return {
      BS: Array.from(setToOperate).map(convertToBinaryAttr).map((item2) => item2.B)
    };
  } else {
    throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
  }
}, "convertToSetAttr");
var convertToMapAttrFromIterable = /* @__PURE__ */ __name((data, options) => ({
  M: ((data2) => {
    const map2 = {};
    for (const [key, value] of data2) {
      if (typeof value !== "function" && (value !== void 0 || !options?.removeUndefinedValues)) {
        map2[key] = convertToAttr(value, options);
      }
    }
    return map2;
  })(data)
}), "convertToMapAttrFromIterable");
var convertToMapAttrFromEnumerableProps = /* @__PURE__ */ __name((data, options) => ({
  M: ((data2) => {
    const map2 = {};
    for (const key in data2) {
      const value = data2[key];
      if (typeof value !== "function" && (value !== void 0 || !options?.removeUndefinedValues)) {
        map2[key] = convertToAttr(value, options);
      }
    }
    return map2;
  })(data)
}), "convertToMapAttrFromEnumerableProps");
var convertToNullAttr = /* @__PURE__ */ __name(() => ({ NULL: true }), "convertToNullAttr");
var convertToBinaryAttr = /* @__PURE__ */ __name((data) => ({ B: data }), "convertToBinaryAttr");
var convertToStringAttr = /* @__PURE__ */ __name((data) => ({ S: data.toString() }), "convertToStringAttr");
var convertToBigIntAttr = /* @__PURE__ */ __name((data) => ({ N: data.toString() }), "convertToBigIntAttr");
var validateBigIntAndThrow = /* @__PURE__ */ __name((errorPrefix) => {
  throw new Error(`${errorPrefix} ${typeof BigInt === "function" ? "Use BigInt." : "Pass string value instead."} `);
}, "validateBigIntAndThrow");
var convertToNumberAttr = /* @__PURE__ */ __name((num) => {
  if ([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].map((val2) => val2.toString()).includes(num.toString())) {
    throw new Error(`Special numeric value ${num.toString()} is not allowed`);
  } else if (num > Number.MAX_SAFE_INTEGER) {
    validateBigIntAndThrow(`Number ${num.toString()} is greater than Number.MAX_SAFE_INTEGER.`);
  } else if (num < Number.MIN_SAFE_INTEGER) {
    validateBigIntAndThrow(`Number ${num.toString()} is lesser than Number.MIN_SAFE_INTEGER.`);
  }
  return { N: num.toString() };
}, "convertToNumberAttr");
var isBinary = /* @__PURE__ */ __name((data) => {
  const binaryTypes = [
    "ArrayBuffer",
    "Blob",
    "Buffer",
    "DataView",
    "File",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  if (data?.constructor) {
    return binaryTypes.includes(data.constructor.name);
  }
  return false;
}, "isBinary");

// node_modules/@aws-sdk/util-dynamodb/dist-es/convertToNative.js
var convertToNative = /* @__PURE__ */ __name((data, options) => {
  for (const [key, value] of Object.entries(data)) {
    if (value !== void 0) {
      switch (key) {
        case "NULL":
          return null;
        case "BOOL":
          return Boolean(value);
        case "N":
          return convertNumber(value, options);
        case "B":
          return convertBinary(value);
        case "S":
          return convertString(value);
        case "L":
          return convertList(value, options);
        case "M":
          return convertMap(value, options);
        case "NS":
          return new Set(value.map((item) => convertNumber(item, options)));
        case "BS":
          return new Set(value.map(convertBinary));
        case "SS":
          return new Set(value.map(convertString));
        default:
          throw new Error(`Unsupported type passed: ${key}`);
      }
    }
  }
  throw new Error(`No value defined: ${JSON.stringify(data)}`);
}, "convertToNative");
var convertNumber = /* @__PURE__ */ __name((numString, options) => {
  if (options?.wrapNumbers) {
    return NumberValue.from(numString);
  }
  const num = Number(numString);
  const infinityValues = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  const isLargeFiniteNumber = (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && !infinityValues.includes(num);
  if (isLargeFiniteNumber) {
    if (typeof BigInt === "function") {
      try {
        return BigInt(numString);
      } catch (error) {
        throw new Error(`${numString} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
      }
    } else {
      throw new Error(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
    }
  }
  return num;
}, "convertNumber");
var convertString = /* @__PURE__ */ __name((stringValue) => stringValue, "convertString");
var convertBinary = /* @__PURE__ */ __name((binaryValue) => binaryValue, "convertBinary");
var convertList = /* @__PURE__ */ __name((list, options) => list.map((item) => convertToNative(item, options)), "convertList");
var convertMap = /* @__PURE__ */ __name((map2, options) => Object.entries(map2).reduce((acc, [key, value]) => (acc[key] = convertToNative(value, options), acc), {}), "convertMap");

// node_modules/@aws-sdk/util-dynamodb/dist-es/marshall.js
function marshall(data, options) {
  const attributeValue = convertToAttr(data, options);
  const [key, value] = Object.entries(attributeValue)[0];
  switch (key) {
    case "M":
    case "L":
      return options?.convertTopLevelContainer ? attributeValue : value;
    case "SS":
    case "NS":
    case "BS":
    case "S":
    case "N":
    case "B":
    case "NULL":
    case "BOOL":
    case "$unknown":
    default:
      return attributeValue;
  }
}
__name(marshall, "marshall");

// node_modules/@aws-sdk/util-dynamodb/dist-es/unmarshall.js
var unmarshall = /* @__PURE__ */ __name((data, options) => {
  if (options?.convertWithoutMapWrapper) {
    return convertToNative(data, options);
  }
  return convertToNative({ M: data }, options);
}, "unmarshall");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/utils.js
var SELF = null;
var ALL_VALUES = {};
var ALL_MEMBERS = [];
var NEXT_LEVEL = "*";
var processObj = /* @__PURE__ */ __name((obj, processFunc, keyNodes) => {
  if (obj !== void 0) {
    if (keyNodes == null) {
      return processFunc(obj);
    } else {
      const keys = Object.keys(keyNodes);
      const goToNextLevel = keys.length === 1 && keys[0] === NEXT_LEVEL;
      const someChildren = keys.length >= 1 && !goToNextLevel;
      const allChildren = keys.length === 0;
      if (someChildren) {
        return processKeysInObj(obj, processFunc, keyNodes);
      } else if (allChildren) {
        return processAllKeysInObj(obj, processFunc, SELF);
      } else if (goToNextLevel) {
        return Object.entries(obj ?? {}).reduce((acc, [k5, v6]) => {
          if (typeof v6 !== "function") {
            acc[k5] = processObj(v6, processFunc, keyNodes[NEXT_LEVEL]);
          }
          return acc;
        }, Array.isArray(obj) ? [] : {});
      }
    }
  }
  return void 0;
}, "processObj");
var processKeysInObj = /* @__PURE__ */ __name((obj, processFunc, keyNodes) => {
  let accumulator;
  if (Array.isArray(obj)) {
    accumulator = obj.filter((item) => typeof item !== "function");
  } else {
    accumulator = {};
    for (const [k5, v6] of Object.entries(obj)) {
      if (typeof v6 !== "function") {
        accumulator[k5] = v6;
      }
    }
  }
  for (const [nodeKey, nodes] of Object.entries(keyNodes)) {
    if (typeof obj[nodeKey] === "function") {
      continue;
    }
    const processedValue = processObj(obj[nodeKey], processFunc, nodes);
    if (processedValue !== void 0 && typeof processedValue !== "function") {
      accumulator[nodeKey] = processedValue;
    }
  }
  return accumulator;
}, "processKeysInObj");
var processAllKeysInObj = /* @__PURE__ */ __name((obj, processFunc, keyNodes) => {
  if (Array.isArray(obj)) {
    return obj.filter((item) => typeof item !== "function").map((item) => processObj(item, processFunc, keyNodes));
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "function") {
      return acc;
    }
    const processedValue = processObj(value, processFunc, keyNodes);
    if (processedValue !== void 0 && typeof processedValue !== "function") {
      acc[key] = processedValue;
    }
    return acc;
  }, {});
}, "processAllKeysInObj");
var marshallInput = /* @__PURE__ */ __name((obj, keyNodes, options) => {
  const marshallFunc = /* @__PURE__ */ __name((toMarshall) => marshall(toMarshall, options), "marshallFunc");
  return processKeysInObj(obj, marshallFunc, keyNodes);
}, "marshallInput");
var unmarshallOutput = /* @__PURE__ */ __name((obj, keyNodes, options) => {
  const unmarshallFunc = /* @__PURE__ */ __name((toMarshall) => unmarshall(toMarshall, options), "unmarshallFunc");
  return processKeysInObj(obj, unmarshallFunc, keyNodes);
}, "unmarshallOutput");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/baseCommand/DynamoDBDocumentClientCommand.js
var DynamoDBDocumentClientCommand = class _DynamoDBDocumentClientCommand extends Command2 {
  static {
    __name(this, "DynamoDBDocumentClientCommand");
  }
  addMarshallingMiddleware(configuration) {
    const { marshallOptions = {}, unmarshallOptions = {} } = configuration.translateConfig || {};
    marshallOptions.convertTopLevelContainer = marshallOptions.convertTopLevelContainer ?? true;
    unmarshallOptions.convertWithoutMapWrapper = unmarshallOptions.convertWithoutMapWrapper ?? true;
    this.clientCommand.middlewareStack.addRelativeTo((next, context) => async (args) => {
      args.input = marshallInput(this.input, this.inputKeyNodes, marshallOptions);
      context.dynamoDbDocumentClientOptions = context.dynamoDbDocumentClientOptions || _DynamoDBDocumentClientCommand.defaultLogFilterOverrides;
      const input = args.input;
      context.dynamoDbDocumentClientOptions.overrideInputFilterSensitiveLog = () => {
        return context.inputFilterSensitiveLog?.(input);
      };
      return next(args);
    }, {
      name: "DocumentMarshall",
      relation: "before",
      toMiddleware: "serializerMiddleware",
      override: true
    });
    this.clientCommand.middlewareStack.addRelativeTo((next, context) => async (args) => {
      const deserialized = await next(args);
      const output = deserialized.output;
      context.dynamoDbDocumentClientOptions = context.dynamoDbDocumentClientOptions || _DynamoDBDocumentClientCommand.defaultLogFilterOverrides;
      context.dynamoDbDocumentClientOptions.overrideOutputFilterSensitiveLog = () => {
        return context.outputFilterSensitiveLog?.(output);
      };
      deserialized.output = unmarshallOutput(deserialized.output, this.outputKeyNodes, unmarshallOptions);
      return deserialized;
    }, {
      name: "DocumentUnmarshall",
      relation: "before",
      toMiddleware: "deserializerMiddleware",
      override: true
    });
  }
};
DynamoDBDocumentClientCommand.defaultLogFilterOverrides = {
  overrideInputFilterSensitiveLog(...args) {
  },
  overrideOutputFilterSensitiveLog(...args) {
  }
};

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/DeleteCommand.js
var DeleteCommand = class extends DynamoDBDocumentClientCommand {
  static {
    __name(this, "DeleteCommand");
  }
  constructor(input) {
    super();
    this.input = input;
    this.inputKeyNodes = {
      Key: ALL_VALUES,
      Expected: {
        "*": {
          Value: SELF,
          AttributeValueList: ALL_MEMBERS
        }
      },
      ExpressionAttributeValues: ALL_VALUES
    };
    this.outputKeyNodes = {
      Attributes: ALL_VALUES,
      ItemCollectionMetrics: {
        ItemCollectionKey: ALL_VALUES
      }
    };
    this.clientCommand = new DeleteItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};

// node_modules/@aws-sdk/lib-dynamodb/dist-es/DynamoDBDocumentClient.js
var DynamoDBDocumentClient = class _DynamoDBDocumentClient extends Client2 {
  static {
    __name(this, "DynamoDBDocumentClient");
  }
  constructor(client, translateConfig) {
    super(client.config);
    this.config = client.config;
    this.config.translateConfig = translateConfig;
    this.middlewareStack = client.middlewareStack;
  }
  static from(client, translateConfig) {
    return new _DynamoDBDocumentClient(client, translateConfig);
  }
  destroy() {
  }
};

// packages/functions/src/delete.ts
var dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));
var main = Util.handler(async (event) => {
  const params = {
    TableName: Resource.Notes.name,
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      noteId: event?.pathParameters?.id
      // The id of the note from the path
    }
  };
  await dynamoDb.send(new DeleteCommand(params));
  return JSON.stringify({ status: true });
});
export {
  main
};
