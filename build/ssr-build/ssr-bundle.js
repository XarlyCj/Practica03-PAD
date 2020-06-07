module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "6KOv":
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	} else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	} else {
		// Global (browser)
		root.CryptoJS = factory();
	}
})(this, function () {

	/*globals window, global, require*/

	/**
  * CryptoJS core components.
  */
	var CryptoJS = CryptoJS || function (Math, undefined) {

		var crypto;

		// Native crypto from window (Browser)
		if (typeof window !== 'undefined' && window.crypto) {
			crypto = window.crypto;
		}

		// Native (experimental IE 11) crypto from window (Browser)
		if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
			crypto = window.msCrypto;
		}

		// Native crypto from global (NodeJS)
		if (!crypto && typeof global !== 'undefined' && global.crypto) {
			crypto = global.crypto;
		}

		// Native crypto import via require (NodeJS)
		if (!crypto && "function" === 'function') {
			try {
				crypto = __webpack_require__("Wum3");
			} catch (err) {}
		}

		/*
   * Cryptographically secure pseudorandom number generator
   *
   * As Math.random() is cryptographically not safe to use
   */
		var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
			if (crypto) {
				// Use getRandomValues method (Browser)
				if (typeof crypto.getRandomValues === 'function') {
					try {
						return crypto.getRandomValues(new Uint32Array(1))[0];
					} catch (err) {}
				}

				// Use randomBytes method (NodeJS)
				if (typeof crypto.randomBytes === 'function') {
					try {
						return crypto.randomBytes(4).readInt32LE();
					} catch (err) {}
				}
			}

			throw new Error('Native crypto module could not be used to get secure random number.');
		};

		/*
   * Local polyfill of Object.create
    */
		var create = Object.create || function () {
			function F() {}

			return function (obj) {
				var subtype;

				F.prototype = obj;

				subtype = new F();

				F.prototype = null;

				return subtype;
			};
		}();

		/**
   * CryptoJS namespace.
   */
		var C = {};

		/**
   * Library namespace.
   */
		var C_lib = C.lib = {};

		/**
   * Base object for prototypal inheritance.
   */
		var Base = C_lib.Base = function () {

			return {
				/**
     * Creates a new object that inherits from this object.
     *
     * @param {Object} overrides Properties to copy into the new object.
     *
     * @return {Object} The new object.
     *
     * @static
     *
     * @example
     *
     *     var MyType = CryptoJS.lib.Base.extend({
     *         field: 'value',
     *
     *         method: function () {
     *         }
     *     });
     */
				extend: function extend(overrides) {
					// Spawn
					var subtype = create(this);

					// Augment
					if (overrides) {
						subtype.mixIn(overrides);
					}

					// Create default initializer
					if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
						subtype.init = function () {
							subtype.$super.init.apply(this, arguments);
						};
					}

					// Initializer's prototype is the subtype object
					subtype.init.prototype = subtype;

					// Reference supertype
					subtype.$super = this;

					return subtype;
				},

				/**
     * Extends this object and runs the init method.
     * Arguments to create() will be passed to init().
     *
     * @return {Object} The new object.
     *
     * @static
     *
     * @example
     *
     *     var instance = MyType.create();
     */
				create: function create() {
					var instance = this.extend();
					instance.init.apply(instance, arguments);

					return instance;
				},

				/**
     * Initializes a newly created object.
     * Override this method to add some logic when your objects are created.
     *
     * @example
     *
     *     var MyType = CryptoJS.lib.Base.extend({
     *         init: function () {
     *             // ...
     *         }
     *     });
     */
				init: function init() {},

				/**
     * Copies properties into this object.
     *
     * @param {Object} properties The properties to mix in.
     *
     * @example
     *
     *     MyType.mixIn({
     *         field: 'value'
     *     });
     */
				mixIn: function mixIn(properties) {
					for (var propertyName in properties) {
						if (properties.hasOwnProperty(propertyName)) {
							this[propertyName] = properties[propertyName];
						}
					}

					// IE won't copy toString using the loop above
					if (properties.hasOwnProperty('toString')) {
						this.toString = properties.toString;
					}
				},

				/**
     * Creates a copy of this object.
     *
     * @return {Object} The clone.
     *
     * @example
     *
     *     var clone = instance.clone();
     */
				clone: function clone() {
					return this.init.prototype.extend(this);
				}
			};
		}();

		/**
   * An array of 32-bit words.
   *
   * @property {Array} words The array of 32-bit words.
   * @property {number} sigBytes The number of significant bytes in this word array.
   */
		var WordArray = C_lib.WordArray = Base.extend({
			/**
    * Initializes a newly created word array.
    *
    * @param {Array} words (Optional) An array of 32-bit words.
    * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    *
    * @example
    *
    *     var wordArray = CryptoJS.lib.WordArray.create();
    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
    */
			init: function init(words, sigBytes) {
				words = this.words = words || [];

				if (sigBytes != undefined) {
					this.sigBytes = sigBytes;
				} else {
					this.sigBytes = words.length * 4;
				}
			},

			/**
    * Converts this word array to a string.
    *
    * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
    *
    * @return {string} The stringified word array.
    *
    * @example
    *
    *     var string = wordArray + '';
    *     var string = wordArray.toString();
    *     var string = wordArray.toString(CryptoJS.enc.Utf8);
    */
			toString: function toString(encoder) {
				return (encoder || Hex).stringify(this);
			},

			/**
    * Concatenates a word array to this word array.
    *
    * @param {WordArray} wordArray The word array to append.
    *
    * @return {WordArray} This word array.
    *
    * @example
    *
    *     wordArray1.concat(wordArray2);
    */
			concat: function concat(wordArray) {
				// Shortcuts
				var thisWords = this.words;
				var thatWords = wordArray.words;
				var thisSigBytes = this.sigBytes;
				var thatSigBytes = wordArray.sigBytes;

				// Clamp excess bits
				this.clamp();

				// Concat
				if (thisSigBytes % 4) {
					// Copy one byte at a time
					for (var i = 0; i < thatSigBytes; i++) {
						var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
						thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
					}
				} else {
					// Copy one word at a time
					for (var i = 0; i < thatSigBytes; i += 4) {
						thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
					}
				}
				this.sigBytes += thatSigBytes;

				// Chainable
				return this;
			},

			/**
    * Removes insignificant bits.
    *
    * @example
    *
    *     wordArray.clamp();
    */
			clamp: function clamp() {
				// Shortcuts
				var words = this.words;
				var sigBytes = this.sigBytes;

				// Clamp
				words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
				words.length = Math.ceil(sigBytes / 4);
			},

			/**
    * Creates a copy of this word array.
    *
    * @return {WordArray} The clone.
    *
    * @example
    *
    *     var clone = wordArray.clone();
    */
			clone: function clone() {
				var clone = Base.clone.call(this);
				clone.words = this.words.slice(0);

				return clone;
			},

			/**
    * Creates a word array filled with random bytes.
    *
    * @param {number} nBytes The number of random bytes to generate.
    *
    * @return {WordArray} The random word array.
    *
    * @static
    *
    * @example
    *
    *     var wordArray = CryptoJS.lib.WordArray.random(16);
    */
			random: function random(nBytes) {
				var words = [];

				for (var i = 0; i < nBytes; i += 4) {
					words.push(cryptoSecureRandomInt());
				}

				return new WordArray.init(words, nBytes);
			}
		});

		/**
   * Encoder namespace.
   */
		var C_enc = C.enc = {};

		/**
   * Hex encoding strategy.
   */
		var Hex = C_enc.Hex = {
			/**
    * Converts a word array to a hex string.
    *
    * @param {WordArray} wordArray The word array.
    *
    * @return {string} The hex string.
    *
    * @static
    *
    * @example
    *
    *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
    */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var hexChars = [];
				for (var i = 0; i < sigBytes; i++) {
					var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
					hexChars.push((bite >>> 4).toString(16));
					hexChars.push((bite & 0x0f).toString(16));
				}

				return hexChars.join('');
			},

			/**
    * Converts a hex string to a word array.
    *
    * @param {string} hexStr The hex string.
    *
    * @return {WordArray} The word array.
    *
    * @static
    *
    * @example
    *
    *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
    */
			parse: function parse(hexStr) {
				// Shortcut
				var hexStrLength = hexStr.length;

				// Convert
				var words = [];
				for (var i = 0; i < hexStrLength; i += 2) {
					words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
				}

				return new WordArray.init(words, hexStrLength / 2);
			}
		};

		/**
   * Latin1 encoding strategy.
   */
		var Latin1 = C_enc.Latin1 = {
			/**
    * Converts a word array to a Latin1 string.
    *
    * @param {WordArray} wordArray The word array.
    *
    * @return {string} The Latin1 string.
    *
    * @static
    *
    * @example
    *
    *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
    */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var latin1Chars = [];
				for (var i = 0; i < sigBytes; i++) {
					var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
					latin1Chars.push(String.fromCharCode(bite));
				}

				return latin1Chars.join('');
			},

			/**
    * Converts a Latin1 string to a word array.
    *
    * @param {string} latin1Str The Latin1 string.
    *
    * @return {WordArray} The word array.
    *
    * @static
    *
    * @example
    *
    *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
    */
			parse: function parse(latin1Str) {
				// Shortcut
				var latin1StrLength = latin1Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < latin1StrLength; i++) {
					words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
				}

				return new WordArray.init(words, latin1StrLength);
			}
		};

		/**
   * UTF-8 encoding strategy.
   */
		var Utf8 = C_enc.Utf8 = {
			/**
    * Converts a word array to a UTF-8 string.
    *
    * @param {WordArray} wordArray The word array.
    *
    * @return {string} The UTF-8 string.
    *
    * @static
    *
    * @example
    *
    *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
    */
			stringify: function stringify(wordArray) {
				try {
					return decodeURIComponent(escape(Latin1.stringify(wordArray)));
				} catch (e) {
					throw new Error('Malformed UTF-8 data');
				}
			},

			/**
    * Converts a UTF-8 string to a word array.
    *
    * @param {string} utf8Str The UTF-8 string.
    *
    * @return {WordArray} The word array.
    *
    * @static
    *
    * @example
    *
    *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
    */
			parse: function parse(utf8Str) {
				return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
			}
		};

		/**
   * Abstract buffered block algorithm template.
   *
   * The property blockSize must be implemented in a concrete subtype.
   *
   * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
   */
		var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
			/**
    * Resets this block algorithm's data buffer to its initial state.
    *
    * @example
    *
    *     bufferedBlockAlgorithm.reset();
    */
			reset: function reset() {
				// Initial values
				this._data = new WordArray.init();
				this._nDataBytes = 0;
			},

			/**
    * Adds new data to this block algorithm's buffer.
    *
    * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
    *
    * @example
    *
    *     bufferedBlockAlgorithm._append('data');
    *     bufferedBlockAlgorithm._append(wordArray);
    */
			_append: function _append(data) {
				// Convert string to WordArray, else assume WordArray already
				if (typeof data == 'string') {
					data = Utf8.parse(data);
				}

				// Append
				this._data.concat(data);
				this._nDataBytes += data.sigBytes;
			},

			/**
    * Processes available data blocks.
    *
    * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
    *
    * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
    *
    * @return {WordArray} The processed data.
    *
    * @example
    *
    *     var processedData = bufferedBlockAlgorithm._process();
    *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
    */
			_process: function _process(doFlush) {
				var processedWords;

				// Shortcuts
				var data = this._data;
				var dataWords = data.words;
				var dataSigBytes = data.sigBytes;
				var blockSize = this.blockSize;
				var blockSizeBytes = blockSize * 4;

				// Count blocks ready
				var nBlocksReady = dataSigBytes / blockSizeBytes;
				if (doFlush) {
					// Round up to include partial blocks
					nBlocksReady = Math.ceil(nBlocksReady);
				} else {
					// Round down to include only full blocks,
					// less the number of blocks that must remain in the buffer
					nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
				}

				// Count words ready
				var nWordsReady = nBlocksReady * blockSize;

				// Count bytes ready
				var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

				// Process blocks
				if (nWordsReady) {
					for (var offset = 0; offset < nWordsReady; offset += blockSize) {
						// Perform concrete-algorithm logic
						this._doProcessBlock(dataWords, offset);
					}

					// Remove processed words
					processedWords = dataWords.splice(0, nWordsReady);
					data.sigBytes -= nBytesReady;
				}

				// Return processed words
				return new WordArray.init(processedWords, nBytesReady);
			},

			/**
    * Creates a copy of this object.
    *
    * @return {Object} The clone.
    *
    * @example
    *
    *     var clone = bufferedBlockAlgorithm.clone();
    */
			clone: function clone() {
				var clone = Base.clone.call(this);
				clone._data = this._data.clone();

				return clone;
			},

			_minBufferSize: 0
		});

		/**
   * Abstract hasher template.
   *
   * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
   */
		var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
			/**
    * Configuration options.
    */
			cfg: Base.extend(),

			/**
    * Initializes a newly created hasher.
    *
    * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
    *
    * @example
    *
    *     var hasher = CryptoJS.algo.SHA256.create();
    */
			init: function init(cfg) {
				// Apply config defaults
				this.cfg = this.cfg.extend(cfg);

				// Set initial values
				this.reset();
			},

			/**
    * Resets this hasher to its initial state.
    *
    * @example
    *
    *     hasher.reset();
    */
			reset: function reset() {
				// Reset data buffer
				BufferedBlockAlgorithm.reset.call(this);

				// Perform concrete-hasher logic
				this._doReset();
			},

			/**
    * Updates this hasher with a message.
    *
    * @param {WordArray|string} messageUpdate The message to append.
    *
    * @return {Hasher} This hasher.
    *
    * @example
    *
    *     hasher.update('message');
    *     hasher.update(wordArray);
    */
			update: function update(messageUpdate) {
				// Append
				this._append(messageUpdate);

				// Update the hash
				this._process();

				// Chainable
				return this;
			},

			/**
    * Finalizes the hash computation.
    * Note that the finalize operation is effectively a destructive, read-once operation.
    *
    * @param {WordArray|string} messageUpdate (Optional) A final message update.
    *
    * @return {WordArray} The hash.
    *
    * @example
    *
    *     var hash = hasher.finalize();
    *     var hash = hasher.finalize('message');
    *     var hash = hasher.finalize(wordArray);
    */
			finalize: function finalize(messageUpdate) {
				// Final message update
				if (messageUpdate) {
					this._append(messageUpdate);
				}

				// Perform concrete-hasher logic
				var hash = this._doFinalize();

				return hash;
			},

			blockSize: 512 / 32,

			/**
    * Creates a shortcut function to a hasher's object interface.
    *
    * @param {Hasher} hasher The hasher to create a helper for.
    *
    * @return {Function} The shortcut function.
    *
    * @static
    *
    * @example
    *
    *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
    */
			_createHelper: function _createHelper(hasher) {
				return function (message, cfg) {
					return new hasher.init(cfg).finalize(message);
				};
			},

			/**
    * Creates a shortcut function to the HMAC's object interface.
    *
    * @param {Hasher} hasher The hasher to use in this HMAC helper.
    *
    * @return {Function} The shortcut function.
    *
    * @static
    *
    * @example
    *
    *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
    */
			_createHmacHelper: function _createHmacHelper(hasher) {
				return function (message, key) {
					return new C_algo.HMAC.init(hasher, key).finalize(message);
				};
			}
		});

		/**
   * Algorithm namespace.
   */
		var C_algo = C.algo = {};

		return C;
	}(Math);

	return CryptoJS;
});

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact/devtools/dist/devtools.module.js
"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.4.4", preact_min["options"], { Fragment: preact_min["Fragment"], Component: preact_min["Component"] });
//# sourceMappingURL=devtools.module.js.map
// CONCATENATED MODULE: ../node_modules/preact/debug/dist/debug.module.js
var debug_module_o = {};function debug_module_r() {
  debug_module_o = {};
}function debug_module_a(n) {
  return n.type === preact_min["Fragment"] ? "Fragment" : "function" == typeof n.type ? n.type.displayName || n.type.name : "string" == typeof n.type ? n.type : "#text";
}var debug_module_i = [],
    s = [];function debug_module_c() {
  return debug_module_i.length > 0 ? debug_module_i[debug_module_i.length - 1] : null;
}var debug_module_l = !1;function debug_module_u(n) {
  return "function" == typeof n.type && n.type != preact_min["Fragment"];
}function p(n) {
  for (var e = [n], t = n; null != t.__o;) {
    e.push(t.__o), t = t.__o;
  }return e.reduce(function (n, e) {
    n += "  in " + debug_module_a(e);var t = e.__source;return t ? n += " (at " + t.fileName + ":" + t.lineNumber + ")" : debug_module_l || (debug_module_l = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
  }, "");
}var f = "function" == typeof WeakMap,
    debug_module_d = preact_min["Component"].prototype.setState;preact_min["Component"].prototype.setState = function (n, e) {
  return null == this.__v ? null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + p(debug_module_c())) : null == this.__P && console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + p(this.__v)), debug_module_d.call(this, n, e);
};var debug_module_h = preact_min["Component"].prototype.forceUpdate;function y(n) {
  var e = n.props,
      t = debug_module_a(n),
      o = "";for (var r in e) {
    if (e.hasOwnProperty(r) && "children" !== r) {
      var i = e[r];"function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
    }
  }var s = e.children;return "<" + t + o + (s && s.length ? ">..</" + t + ">" : " />");
}preact_min["Component"].prototype.forceUpdate = function (n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + p(debug_module_c())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + p(this.__v)), debug_module_h.call(this, n);
}, function () {
  !function () {
    var e = preact_min["options"].__b,
        t = preact_min["options"].diffed,
        o = preact_min["options"].__,
        r = preact_min["options"].vnode,
        a = preact_min["options"].__r;preact_min["options"].diffed = function (n) {
      debug_module_u(n) && s.pop(), debug_module_i.pop(), t && t(n);
    }, preact_min["options"].__b = function (n) {
      debug_module_u(n) && debug_module_i.push(n), e && e(n);
    }, preact_min["options"].__ = function (n, e) {
      s = [], o && o(n, e);
    }, preact_min["options"].vnode = function (n) {
      n.__o = s.length > 0 ? s[s.length - 1] : null, r && r(n);
    }, preact_min["options"].__r = function (n) {
      debug_module_u(n) && s.push(n), a && a(n);
    };
  }();var e = preact_min["options"].__b,
      t = preact_min["options"].diffed,
      r = preact_min["options"].vnode,
      c = preact_min["options"].__e,
      l = preact_min["options"].__,
      d = preact_min["options"].__h,
      h = f ? { useEffect: new WeakMap(), useLayoutEffect: new WeakMap(), lazyPropTypes: new WeakMap() } : null;preact_min["options"].__e = function (n, e, t) {
    if (e && e.__c && "function" == typeof n.then) {
      var o = n;n = new Error("Missing Suspense. The throwing component was: " + debug_module_a(e));for (var r = e; r; r = r.__) {
        if (r.__c && r.__c.__c) {
          n = o;break;
        }
      }if (n instanceof Error) throw n;
    }c(n, e, t);
  }, preact_min["options"].__ = function (n, e) {
    if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch (e.nodeType) {case 1:case 11:case 9:
        t = !0;break;default:
        t = !1;}if (!t) {
      var o = debug_module_a(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + o + " />, " + e + ");");
    }l && l(n, e);
  }, preact_min["options"].__b = function (n) {
    var t,
        r,
        i,
        s = n.type,
        c = function n(e) {
      return e ? "function" == typeof e.type ? n(e.__) : e : {};
    }(n.__);if (void 0 === s) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(n) + "\n\n" + p(n));if (null != s && "object" == typeof s) {
      if (void 0 !== s.__k && void 0 !== s.__e) throw new Error("Invalid type passed to createElement(): " + s + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + debug_module_a(n) + " = " + y(s) + ";\n  let vnode = <My" + debug_module_a(n) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + p(n));throw new Error("Invalid type passed to createElement(): " + (Array.isArray(s) ? "array" : s));
    }if ("thead" !== s && "tfoot" !== s && "tbody" !== s || "table" === c.type ? "tr" === s && "thead" !== c.type && "tfoot" !== c.type && "tbody" !== c.type && "table" !== c.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(n) + "\n\n" + p(n)) : "td" === s && "tr" !== c.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(n) + "\n\n" + p(n)) : "th" === s && "tr" !== c.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(n) + "\n\n" + p(n)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(n) + "\n\n" + p(n)), void 0 !== n.ref && "function" != typeof n.ref && "object" != typeof n.ref && !("$$typeof" in n)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof n.ref + "] instead\n" + y(n) + "\n\n" + p(n));if ("string" == typeof n.type) for (var l in n.props) {
      if ("o" === l[0] && "n" === l[1] && "function" != typeof n.props[l] && null != n.props[l]) throw new Error("Component's \"" + l + '" property should be a function, but got [' + typeof n.props[l] + "] instead\n" + y(n) + "\n\n" + p(n));
    }if ("function" == typeof n.type && n.type.propTypes) {
      if ("Lazy" === n.type.displayName && h && !h.lazyPropTypes.has(n.type)) {
        var u = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try {
          var f = n.type();h.lazyPropTypes.set(n.type, !0), console.warn(u + "Component wrapped in lazy() is " + debug_module_a(f));
        } catch (n) {
          console.warn(u + "We will log the wrapped component's name once it is loaded.");
        }
      }t = n.type.propTypes, r = n.props, i = debug_module_a(n), Object.keys(t).forEach(function (n) {
        var e;try {
          e = t[n](r, n, i, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
        } catch (n) {
          e = n;
        }!e || e.message in debug_module_o || (debug_module_o[e.message] = !0, console.error("Failed prop type: " + e.message));
      });
    }e && e(n);
  }, preact_min["options"].__h = function (n, e, t) {
    if (!n) throw new Error("Hook can only be invoked from render methods.");d && d(n, e, t);
  };var m = function m(n, e) {
    return { get: function get() {
        console.warn("getting vnode." + n + " is deprecated, " + e);
      }, set: function set() {
        console.warn("setting vnode." + n + " is not allowed, " + e);
      } };
  },
      v = { nodeName: m("nodeName", "use vnode.type"), attributes: m("attributes", "use vnode.props"), children: m("children", "use vnode.props.children") },
      b = Object.create({}, v);preact_min["options"].vnode = function (n) {
    var e = n.props;if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
      var t = n.props = {};for (var o in e) {
        var a = e[o];"__source" === o ? n.__source = a : "__self" === o ? n.__self = a : t[o] = a;
      }
    }n.__proto__ = b, r && r(n);
  }, preact_min["options"].diffed = function (n) {
    n.__k && n.__k.forEach(function (e) {
      if (e && void 0 === e.type) {
        delete e.__, delete e.__b;var t = Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + p(n));
      }
    });var e = n.__c;if (e && e.__H) {
      var o = e.__H;Array.isArray(o.__) && o.__.forEach(function (e) {
        if (e.__h && (!e.__H || !Array.isArray(e.__H))) {
          var t = debug_module_a(n);console.warn("In " + t + " you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.\n\n" + p(n));
        }
      });
    }if (t && t(n), null != n.__k) for (var r = [], i = 0; i < n.__k.length; i++) {
      var s = n.__k[i];if (s && null != s.key) {
        var c = s.key;if (-1 !== r.indexOf(c)) {
          console.error('Following component has two or more children with the same key attribute: "' + c + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(n) + "\n\n" + p(n));break;
        }r.push(c);
      }
    }
  };
}();
//# sourceMappingURL=debug.module.js.map
// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.props;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (preact_router_es_canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}
	routeFromLink(e.currentTarget || e.target || this);
	return prevent(e);
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		var children = Object(preact_min["toChildArray"])(this.props.children);
		return this.getMatchingChildren(children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this.setState({ url: url });

		var didRoute = this.canRoute(url);

		// trigger a manual re-route if we're not in the middle of an update:
		if (!this.updating) {
			this.forceUpdate();
		}

		return didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.props.path, vnode.props);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(Object(preact_min["toChildArray"])(children), url, true);

		var current = active[0] || null;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["createElement"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["createElement"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ../node_modules/react-https-redirect/lib/index.js
var lib = __webpack_require__("sL3J");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/header/Header.js




var Header__ref = Object(preact_min["h"])(
	'header',
	{ 'class': 'header' },
	Object(preact_min["h"])(
		'h1',
		null,
		'Tasks List'
	)
);

var Header = function Header() {
	return Header__ref;
};

/* harmony default export */ var header_Header = (Header);
// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,
    hooks_module_u,
    hooks_module_r,
    hooks_module_i = 0,
    hooks_module_o = [],
    hooks_module_c = preact_min["options"].__r,
    hooks_module_f = preact_min["options"].diffed,
    hooks_module_e = preact_min["options"].__c,
    hooks_module_a = preact_min["options"].unmount;function hooks_module_v(t, r) {
  preact_min["options"].__h && preact_min["options"].__h(hooks_module_u, t, hooks_module_i || r), hooks_module_i = 0;var o = hooks_module_u.__H || (hooks_module_u.__H = { __: [], __h: [] });return t >= o.__.length && o.__.push({}), o.__[t];
}function hooks_module_m(n) {
  return hooks_module_i = 1, hooks_module_p(E, n);
}function hooks_module_p(n, r, i) {
  var o = hooks_module_v(hooks_module_t++, 2);return o.t = n, o.__c || (o.__c = hooks_module_u, o.__ = [i ? i(r) : E(void 0, r), function (n) {
    var t = o.t(o.__[0], n);o.__[0] !== t && (o.__[0] = t, o.__c.setState({}));
  }]), o.__;
}function hooks_module_l(r, i) {
  var o = hooks_module_v(hooks_module_t++, 3);!preact_min["options"].__s && x(o.__H, i) && (o.__ = r, o.__H = i, hooks_module_u.__H.__h.push(o));
}function hooks_module_y(r, i) {
  var o = hooks_module_v(hooks_module_t++, 4);!preact_min["options"].__s && x(o.__H, i) && (o.__ = r, o.__H = i, hooks_module_u.__h.push(o));
}function hooks_module_d(n) {
  return hooks_module_i = 5, hooks_module_h(function () {
    return { current: n };
  }, []);
}function hooks_module_s(n, t, u) {
  hooks_module_i = 6, hooks_module_y(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}function hooks_module_h(n, u) {
  var r = hooks_module_v(hooks_module_t++, 7);return x(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}function T(n, t) {
  return hooks_module_i = 8, hooks_module_h(function () {
    return n;
  }, t);
}function w(n) {
  var r = hooks_module_u.context[n.__c],
      i = hooks_module_v(hooks_module_t++, 9);return i.__c = n, r ? (null == i.__ && (i.__ = !0, r.sub(hooks_module_u)), r.props.value) : n.__;
}function A(t, u) {
  preact_min["options"].useDebugValue && preact_min["options"].useDebugValue(u ? u(t) : t);
}function F(n) {
  var r = hooks_module_v(hooks_module_t++, 10),
      i = hooks_module_m();return r.__ = n, hooks_module_u.componentDidCatch || (hooks_module_u.componentDidCatch = function (n) {
    r.__ && r.__(n), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}function _() {
  hooks_module_o.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(q), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], preact_min["options"].__e(u, t.__v), !0;
    }
  }), hooks_module_o = [];
}function g(n) {
  "function" == typeof n.u && n.u();
}function q(n) {
  n.u = n.__();
}function x(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}function E(n, t) {
  return "function" == typeof t ? t(n) : t;
}preact_min["options"].__r = function (n) {
  hooks_module_c && hooks_module_c(n), hooks_module_t = 0;var r = (hooks_module_u = n.__c).__H;r && (r.__h.forEach(g), r.__h.forEach(q), r.__h = []);
}, preact_min["options"].diffed = function (t) {
  hooks_module_f && hooks_module_f(t);var u = t.__c;u && u.__H && u.__H.__h.length && (1 !== hooks_module_o.push(u) && hooks_module_r === preact_min["options"].requestAnimationFrame || ((hooks_module_r = preact_min["options"].requestAnimationFrame) || function (n) {
    var t,
        u = function u() {
      clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);"undefined" != typeof window && (t = requestAnimationFrame(u));
  })(_));
}, preact_min["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || q(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact_min["options"].__e(r, t.__v);
    }
  }), hooks_module_e && hooks_module_e(t, u);
}, preact_min["options"].unmount = function (t) {
  hooks_module_a && hooks_module_a(t);var u = t.__c;if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    preact_min["options"].__e(t, u.__v);
  }
};
//# sourceMappingURL=hooks.module.js.map
// CONCATENATED MODULE: ./components/Button.js




var Button_Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      type = _ref.type;
  return Object(preact_min["h"])(
    'button',
    { 'class': 'button', type: type, onClick: onClick },
    children
  );
};

/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./components/Input.js



var Input_Input = function Input(_ref) {
	var stateValue = _ref.stateValue,
	    setStateValue = _ref.setStateValue;


	return Object(preact_min["h"])("input", { "class": "input", type: "text", placeholder: "Escribe tu tarea", onChange: function onChange(e) {
			return setStateValue(e.target.value);
		}, value: stateValue });
};

/* harmony default export */ var components_Input = (Input_Input);
// EXTERNAL MODULE: ../node_modules/crypto-js/md5.js
var md5 = __webpack_require__("Pylf");
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./components/Tasks.js







var _ref2 = Object(preact_min["h"])(
	components_Button,
	{ type: 'submit' },
	'Guardar'
);

var Tasks_Task = function Task(_ref) {
	var _ref$value = _ref.value,
	    value = _ref$value === undefined ? '' : _ref$value,
	    parentState = _ref.parentState,
	    setParentState = _ref.setParentState;

	var _useState = hooks_module_m(false),
	    modifyTask = _useState[0],
	    setModifyTask = _useState[1];

	var _useState2 = hooks_module_m(value),
	    stateValue = _useState2[0],
	    setStateValue = _useState2[1];

	function toggleModifyTask() {
		setStateValue(value);
		setModifyTask(!modifyTask);
	}

	function submitTask(e) {
		e.preventDefault();
		if (stateValue != "") {
			var tasks = {};
			var md5Text = "";
			var md5OldText = "";
			tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
			md5Text = md5_default()(stateValue);
			if (Object.prototype.hasOwnProperty.call(tasks, md5Text)) {
				alert("Esta tarea ya existe");
			} else {
				md5OldText = md5_default()(value);
				if (Object.prototype.hasOwnProperty.call(tasks, md5OldText)) {
					delete tasks[md5OldText];
				}
				tasks[md5Text] = stateValue;
				localStorage.tasks = JSON.stringify(tasks);
				value = stateValue;
				setModifyTask(false);
				setParentState(!parentState);
			}
		} else {
			alert("No se puede crear una tarea sin texto");
		}
	}
	function deleteTask(e) {
		e.preventDefault();
		if (confirm("¿Seguro que quieres eliminar la tarea?")) {
			var tasks = {};
			var md5OldText = "";
			tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
			md5OldText = md5_default()(value);
			if (Object.prototype.hasOwnProperty.call(tasks, md5OldText)) {
				delete tasks[md5OldText];
			}
			localStorage.tasks = JSON.stringify(tasks);
			setModifyTask(false);
			setParentState(!parentState);
		}
	}
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'task' },
		modifyTask ? Object(preact_min["h"])(
			'form',
			{ 'class': 'form', onSubmit: function onSubmit(e) {
					return submitTask(e);
				} },
			Object(preact_min["h"])(components_Input, { stateValue: stateValue, setStateValue: setStateValue }),
			Object(preact_min["h"])(
				'div',
				{ 'class': 'button-container' },
				Object(preact_min["h"])(
					components_Button,
					{ onClick: function onClick(e) {
							return deleteTask(e);
						} },
					'Eliminar'
				),
				_ref2,
				Object(preact_min["h"])(
					components_Button,
					{ onClick: function onClick() {
							return toggleModifyTask();
						} },
					'Cancelar'
				)
			)
		) : Object(preact_min["h"])(
			components_Button,
			{ onClick: function onClick() {
					return toggleModifyTask();
				} },
			stateValue
		)
	);
};

/* harmony default export */ var Tasks = (Tasks_Task);
// CONCATENATED MODULE: ./routes/home/Home.js









var Home__ref = Object(preact_min["h"])(
	'h1',
	null,
	'Organiza tu tiempo con ',
	Object(preact_min["h"])(
		'span',
		null,
		'Task List'
	)
);

var Home__ref2 = Object(preact_min["h"])(
	'h2',
	null,
	'Multiplica tu productividad: Crea tarea, gu\xE1rdalas, ed\xEDtalas y elim\xEDnalas cuando las hayas terminado.'
);

var _ref3 = Object(preact_min["h"])(
	components_Button,
	null,
	'Guardar'
);

var _ref4 = Object(preact_min["h"])(
	'div',
	null,
	Object(preact_min["h"])(
		'h3',
		null,
		'Tareas pendientes'
	),
	Object(preact_min["h"])(
		'h2',
		null,
		'Pincha encima de alguna de las tareas para modificarla o eliminarla'
	)
);

var Home_Home = function Home() {
	var _useState = hooks_module_m(false),
	    addTask = _useState[0],
	    setAddTask = _useState[1];

	var _useState2 = hooks_module_m(''),
	    stateValue = _useState2[0],
	    setStateValue = _useState2[1];

	var _useState3 = hooks_module_m(false),
	    renderState = _useState3[0],
	    setRenderState = _useState3[1];

	var value = '';
	function toggleAddTask() {
		setStateValue('');
		setAddTask(!addTask);
	}

	function submitTask(e) {
		e.preventDefault();
		if (stateValue != "") {
			var tasks = {};
			var md5Text = "";
			var md5OldText = "";
			tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
			md5Text = md5_default()(stateValue);
			if (Object.prototype.hasOwnProperty.call(tasks, md5Text)) {
				alert("Esta tarea ya existe");
			} else {
				md5OldText = md5_default()(value);
				if (Object.prototype.hasOwnProperty.call(tasks, md5OldText)) {
					delete tasks[md5OldText];
				}
				tasks[md5Text] = stateValue;
				localStorage.tasks = JSON.stringify(tasks);
				setAddTask(false);
				setStateValue('');
			}
		} else {
			alert("No se puede crear una tarea sin texto");
		}
	}

	function objectSize(obj) {
		var size = 0;
		for (var key in obj) {
			size++;
		}
		return size;
	}

	var tasksList = function tasksList() {
		if (renderState) {
			setRenderState(!renderState);
			return [];
		}
		var tasks = {};
		var taskComponents = [];
		tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
		for (var prop in tasks) {
			taskComponents.push(Object(preact_min["h"])(Tasks, { value: tasks[prop], parentState: renderState, setParentState: setRenderState }));
		}
		return taskComponents;
	};

	return Object(preact_min["h"])(
		'div',
		{ 'class': 'home' },
		Home__ref,
		Home__ref2,
		Object(preact_min["h"])(
			components_Button,
			{ onClick: function onClick() {
					return toggleAddTask();
				} },
			'A\xF1adir tarea'
		),
		addTask && Object(preact_min["h"])(
			'form',
			{ 'class': 'form', onSubmit: function onSubmit(e) {
					return submitTask(e, value);
				} },
			Object(preact_min["h"])(components_Input, { stateValue: stateValue, setStateValue: setStateValue }),
			Object(preact_min["h"])(
				'div',
				{ 'class': 'button-container' },
				_ref3,
				Object(preact_min["h"])(
					components_Button,
					{ onClick: function onClick() {
							return toggleAddTask();
						} },
					'Cancelar'
				)
			)
		),
		objectSize(localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {}) > 0 && _ref4,
		tasksList()
	);
};

/* harmony default export */ var home_Home = (Home_Home);
// CONCATENATED MODULE: ./components/app.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// Code-splitting is automated for routes


var app__ref = Object(preact_min["h"])(header_Header, null);

var app__ref2 = Object(preact_min["h"])(home_Home, { path: '/' });

var app_App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			Object(preact_min["h"])(
				lib_default.a,
				null,
				app__ref,
				Object(preact_min["h"])(
					preact_router_es_Router,
					{ onChange: this.handleRoute },
					app__ref2
				)
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js






/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports) {

var n,
    l,
    u,
    t,
    i,
    r,
    o,
    e,
    f = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n, l) {
  for (var u in l) {
    n[u] = l[u];
  }return n;
}function p(n) {
  var l = n.parentNode;l && l.removeChild(n);
}function v(n, l, u) {
  var t,
      i = arguments,
      r = {};for (t in l) {
    "key" !== t && "ref" !== t && (r[t] = l[t]);
  }if (arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) {
    u.push(i[t]);
  }if (null != u && (r.children = u), "function" == typeof n && null != n.defaultProps) for (t in n.defaultProps) {
    void 0 === r[t] && (r[t] = n.defaultProps[t]);
  }return h(n, r, l && l.key, l && l.ref, null);
}function h(l, u, t, i, r) {
  var o = { type: l, props: u, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r };return null == r && (o.__v = o), n.vnode && n.vnode(o), o;
}function y(n) {
  return n.children;
}function d(n, l) {
  this.props = n, this.context = l;
}function x(n, l) {
  if (null == l) return n.__ ? x(n.__, n.__.__k.indexOf(n) + 1) : null;for (var u; l < n.__k.length; l++) {
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  }return "function" == typeof n.type ? x(n) : null;
}function m(n) {
  var l, u;if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;break;
      }
    }return m(n);
  }
}function w(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !t++ || r !== n.debounceRendering) && ((r = n.debounceRendering) || i)(k);
}function k() {
  for (var n; t = u.length;) {
    n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), u = [], n.some(function (n) {
      var l, u, t, i, r, o, e;n.__d && (o = (r = (l = n).__v).__e, (e = l.__P) && (u = [], (t = a({}, r)).__v = t, i = C(e, r, t, l.__n, void 0 !== e.ownerSVGElement, null, u, null == o ? x(r) : o), N(u, r), i != o && m(r)));
    });
  }
}function g(n, l, u, t, i, r, o, e, s, a) {
  var v,
      d,
      m,
      w,
      k,
      g,
      _,
      b,
      A,
      P = t && t.__k || c,
      N = P.length;for (s == f && (s = null != o ? o[0] : N ? x(t, 0) : null), u.__k = [], v = 0; v < l.length; v++) {
    if (null != (w = u.__k[v] = null == (w = l[v]) || "boolean" == typeof w ? null : "string" == typeof w || "number" == typeof w ? h(null, w, null, null, w) : Array.isArray(w) ? h(y, { children: w }, null, null, null) : null != w.__e || null != w.__c ? h(w.type, w.props, w.key, null, w.__v) : w)) {
      if (w.__ = u, w.__b = u.__b + 1, null === (m = P[v]) || m && w.key == m.key && w.type === m.type) P[v] = void 0;else for (d = 0; d < N; d++) {
        if ((m = P[d]) && w.key == m.key && w.type === m.type) {
          P[d] = void 0;break;
        }m = null;
      }if (k = C(n, w, m = m || f, i, r, o, e, s, a), (d = w.ref) && m.ref != d && (b || (b = []), m.ref && b.push(m.ref, null, w), b.push(d, w.__c || k, w)), null != k) {
        if (null == _ && (_ = k), A = void 0, void 0 !== w.__d) A = w.__d, w.__d = void 0;else if (o == m || k != s || null == k.parentNode) {
          n: if (null == s || s.parentNode !== n) n.appendChild(k), A = null;else {
            for (g = s, d = 0; (g = g.nextSibling) && d < N; d += 2) {
              if (g == k) break n;
            }n.insertBefore(k, s), A = s;
          }"option" == u.type && (n.value = "");
        }s = void 0 !== A ? A : k.nextSibling, "function" == typeof u.type && (u.__d = s);
      } else s && m.__e == s && s.parentNode != n && (s = x(m));
    }
  }if (u.__e = _, null != o && "function" != typeof u.type) for (v = o.length; v--;) {
    null != o[v] && p(o[v]);
  }for (v = N; v--;) {
    null != P[v] && $(P[v], P[v]);
  }if (b) for (v = 0; v < b.length; v++) {
    T(b[v], b[++v], b[++v]);
  }
}function _(n, l, u, t, i) {
  var r;for (r in u) {
    "children" === r || "key" === r || r in l || A(n, r, null, u[r], t);
  }for (r in l) {
    i && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || A(n, r, l[r], u[r], t);
  }
}function b(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === s.test(l) ? u + "px" : null == u ? "" : u;
}function A(n, l, u, t, i) {
  var r, o, e, f, c;if (i ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof t && (r.cssText = "", t = null), t) for (f in t) {
        u && f in u || b(r, f, "");
      }if (u) for (c in u) {
        t && u[c] === t[c] || b(r, c, u[c]);
      }
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), e = l.toLowerCase(), l = (e in n ? e : l).slice(2), u ? (t || n.addEventListener(l, P, o), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, P, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}function P(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}function C(l, u, t, i, r, o, e, f, c) {
  var s,
      p,
      v,
      h,
      x,
      m,
      w,
      k,
      _,
      b,
      A,
      P = u.type;if (void 0 !== u.constructor) return null;(s = n.__b) && s(u);try {
    n: if ("function" == typeof P) {
      if (k = u.props, _ = (s = P.contextType) && i[s.__c], b = s ? _ ? _.props.value : s.__ : i, t.__c ? w = (p = u.__c = t.__c).__ = p.__E : ("prototype" in P && P.prototype.render ? u.__c = p = new P(k, b) : (u.__c = p = new d(k, b), p.constructor = P, p.render = j), _ && _.sub(p), p.props = k, p.state || (p.state = {}), p.context = b, p.__n = i, v = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != P.getDerivedStateFromProps && (p.__s == p.state && (p.__s = a({}, p.__s)), a(p.__s, P.getDerivedStateFromProps(k, p.__s))), h = p.props, x = p.state, v) null == P.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(k, b), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(k, p.__s, b) || u.__v === t.__v) {
          for (p.props = k, p.state = p.__s, u.__v !== t.__v && (p.__d = !1), p.__v = u, u.__e = t.__e, u.__k = t.__k, p.__h.length && e.push(p), s = 0; s < u.__k.length; s++) {
            u.__k[s] && (u.__k[s].__ = u);
          }break n;
        }null != p.componentWillUpdate && p.componentWillUpdate(k, p.__s, b), null != p.componentDidUpdate && p.__h.push(function () {
          p.componentDidUpdate(h, x, m);
        });
      }p.context = b, p.props = k, p.state = p.__s, (s = n.__r) && s(u), p.__d = !1, p.__v = u, p.__P = l, s = p.render(p.props, p.state, p.context), null != p.getChildContext && (i = a(a({}, i), p.getChildContext())), v || null == p.getSnapshotBeforeUpdate || (m = p.getSnapshotBeforeUpdate(h, x)), A = null != s && s.type == y && null == s.key ? s.props.children : s, g(l, Array.isArray(A) ? A : [A], u, t, i, r, o, e, f, c), p.base = u.__e, p.__h.length && e.push(p), w && (p.__E = p.__ = null), p.__e = !1;
    } else null == o && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z(t.__e, u, t, i, r, o, e, c);(s = n.diffed) && s(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, t);
  }return u.__e;
}function N(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}function z(n, l, u, t, i, r, o, e) {
  var s,
      a,
      p,
      v,
      h,
      y = u.props,
      d = l.props;if (i = "svg" === l.type || i, null != r) for (s = 0; s < r.length; s++) {
    if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
      n = a, r[s] = null;break;
    }
  }if (null == n) {
    if (null === l.type) return document.createTextNode(d);n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && { is: d.is }), r = null, e = !1;
  }if (null === l.type) y !== d && n.data != d && (n.data = d);else {
    if (null != r && (r = c.slice.call(n.childNodes)), p = (y = u.props || f).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !e) {
      if (null != r) for (y = {}, h = 0; h < n.attributes.length; h++) {
        y[n.attributes[h].name] = n.attributes[h].value;
      }(v || p) && (v && p && v.__html == p.__html || (n.innerHTML = v && v.__html || ""));
    }_(n, d, y, i, e), v ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, t, "foreignObject" !== l.type && i, r, o, f, e)), e || ("value" in d && void 0 !== (s = d.value) && s !== n.value && A(n, "value", s, y.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && A(n, "checked", s, y.checked, !1));
  }return n;
}function T(l, u, t) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, t);
  }
}function $(l, u, t) {
  var i, r, o;if (n.unmount && n.unmount(l), (i = l.ref) && (i.current && i.current !== l.__e || T(i, null, u)), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.__d = void 0, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }i.base = i.__P = null;
  }if (i = l.__k) for (o = 0; o < i.length; o++) {
    i[o] && $(i[o], u, t);
  }null != r && p(r);
}function j(n, l, u) {
  return this.constructor(n, u);
}function D(l, u, t) {
  var i, r, e;n.__ && n.__(l, u), r = (i = t === o) ? null : t && t.__k || u.__k, l = v(y, null, [l]), e = [], C(u, (i ? u : t || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : r ? null : u.childNodes.length ? c.slice.call(u.childNodes) : null, e, t || f, i), N(e, l);
}n = { __e: function __e(n, l) {
    for (var u, t; l = l.__;) {
      if ((u = l.__c) && !u.__) try {
        if (u.constructor && null != u.constructor.getDerivedStateFromError && (t = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (t = !0, u.componentDidCatch(n)), t) return w(u.__E = u);
      } catch (l) {
        n = l;
      }
    }throw n;
  } }, l = function l(n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;u = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), w(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, d.prototype.render = y, u = [], t = 0, i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = f, e = 0, exports.render = D, exports.hydrate = function (n, l) {
  D(n, l, o);
}, exports.createElement = v, exports.h = v, exports.Fragment = y, exports.createRef = function () {
  return {};
}, exports.isValidElement = l, exports.Component = d, exports.cloneElement = function (n, l) {
  var u, t;for (t in l = a(a({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), u = {}, l) {
    "key" !== t && "ref" !== t && (u[t] = l[t]);
  }return h(n.type, u, l.key || n.key, l.ref || n.ref, null);
}, exports.createContext = function (n) {
  var l = {},
      u = { __c: "__cC" + e++, __: n, Consumer: function Consumer(n, l) {
      return n.children(l);
    }, Provider: function Provider(n) {
      var t,
          i = this;return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (n) {
        i.props.value !== n.value && t.some(function (l) {
          l.context = n.value, w(l);
        });
      }, this.sub = function (n) {
        t.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    } };return u.Consumer.contextType = u, u.Provider.__ = u, u;
}, exports.toChildArray = function n(l) {
  return null == l || "boolean" == typeof l ? [] : Array.isArray(l) ? c.concat.apply([], l.map(n)) : [l];
}, exports._e = $, exports.options = n;
//# sourceMappingURL=preact.js.map

/***/ }),

/***/ "Pylf":
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__("6KOv"));
	} else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	} else {
		// Global (browser)
		factory(root.CryptoJS);
	}
})(this, function (CryptoJS) {

	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Constants table
		var T = [];

		// Compute constants
		(function () {
			for (var i = 0; i < 64; i++) {
				T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
			}
		})();

		/**
   * MD5 hash algorithm.
   */
		var MD5 = C_algo.MD5 = Hasher.extend({
			_doReset: function _doReset() {
				this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Swap endian
				for (var i = 0; i < 16; i++) {
					// Shortcuts
					var offset_i = offset + i;
					var M_offset_i = M[offset_i];

					M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
				}

				// Shortcuts
				var H = this._hash.words;

				var M_offset_0 = M[offset + 0];
				var M_offset_1 = M[offset + 1];
				var M_offset_2 = M[offset + 2];
				var M_offset_3 = M[offset + 3];
				var M_offset_4 = M[offset + 4];
				var M_offset_5 = M[offset + 5];
				var M_offset_6 = M[offset + 6];
				var M_offset_7 = M[offset + 7];
				var M_offset_8 = M[offset + 8];
				var M_offset_9 = M[offset + 9];
				var M_offset_10 = M[offset + 10];
				var M_offset_11 = M[offset + 11];
				var M_offset_12 = M[offset + 12];
				var M_offset_13 = M[offset + 13];
				var M_offset_14 = M[offset + 14];
				var M_offset_15 = M[offset + 15];

				// Working varialbes
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];

				// Computation
				a = FF(a, b, c, d, M_offset_0, 7, T[0]);
				d = FF(d, a, b, c, M_offset_1, 12, T[1]);
				c = FF(c, d, a, b, M_offset_2, 17, T[2]);
				b = FF(b, c, d, a, M_offset_3, 22, T[3]);
				a = FF(a, b, c, d, M_offset_4, 7, T[4]);
				d = FF(d, a, b, c, M_offset_5, 12, T[5]);
				c = FF(c, d, a, b, M_offset_6, 17, T[6]);
				b = FF(b, c, d, a, M_offset_7, 22, T[7]);
				a = FF(a, b, c, d, M_offset_8, 7, T[8]);
				d = FF(d, a, b, c, M_offset_9, 12, T[9]);
				c = FF(c, d, a, b, M_offset_10, 17, T[10]);
				b = FF(b, c, d, a, M_offset_11, 22, T[11]);
				a = FF(a, b, c, d, M_offset_12, 7, T[12]);
				d = FF(d, a, b, c, M_offset_13, 12, T[13]);
				c = FF(c, d, a, b, M_offset_14, 17, T[14]);
				b = FF(b, c, d, a, M_offset_15, 22, T[15]);

				a = GG(a, b, c, d, M_offset_1, 5, T[16]);
				d = GG(d, a, b, c, M_offset_6, 9, T[17]);
				c = GG(c, d, a, b, M_offset_11, 14, T[18]);
				b = GG(b, c, d, a, M_offset_0, 20, T[19]);
				a = GG(a, b, c, d, M_offset_5, 5, T[20]);
				d = GG(d, a, b, c, M_offset_10, 9, T[21]);
				c = GG(c, d, a, b, M_offset_15, 14, T[22]);
				b = GG(b, c, d, a, M_offset_4, 20, T[23]);
				a = GG(a, b, c, d, M_offset_9, 5, T[24]);
				d = GG(d, a, b, c, M_offset_14, 9, T[25]);
				c = GG(c, d, a, b, M_offset_3, 14, T[26]);
				b = GG(b, c, d, a, M_offset_8, 20, T[27]);
				a = GG(a, b, c, d, M_offset_13, 5, T[28]);
				d = GG(d, a, b, c, M_offset_2, 9, T[29]);
				c = GG(c, d, a, b, M_offset_7, 14, T[30]);
				b = GG(b, c, d, a, M_offset_12, 20, T[31]);

				a = HH(a, b, c, d, M_offset_5, 4, T[32]);
				d = HH(d, a, b, c, M_offset_8, 11, T[33]);
				c = HH(c, d, a, b, M_offset_11, 16, T[34]);
				b = HH(b, c, d, a, M_offset_14, 23, T[35]);
				a = HH(a, b, c, d, M_offset_1, 4, T[36]);
				d = HH(d, a, b, c, M_offset_4, 11, T[37]);
				c = HH(c, d, a, b, M_offset_7, 16, T[38]);
				b = HH(b, c, d, a, M_offset_10, 23, T[39]);
				a = HH(a, b, c, d, M_offset_13, 4, T[40]);
				d = HH(d, a, b, c, M_offset_0, 11, T[41]);
				c = HH(c, d, a, b, M_offset_3, 16, T[42]);
				b = HH(b, c, d, a, M_offset_6, 23, T[43]);
				a = HH(a, b, c, d, M_offset_9, 4, T[44]);
				d = HH(d, a, b, c, M_offset_12, 11, T[45]);
				c = HH(c, d, a, b, M_offset_15, 16, T[46]);
				b = HH(b, c, d, a, M_offset_2, 23, T[47]);

				a = II(a, b, c, d, M_offset_0, 6, T[48]);
				d = II(d, a, b, c, M_offset_7, 10, T[49]);
				c = II(c, d, a, b, M_offset_14, 15, T[50]);
				b = II(b, c, d, a, M_offset_5, 21, T[51]);
				a = II(a, b, c, d, M_offset_12, 6, T[52]);
				d = II(d, a, b, c, M_offset_3, 10, T[53]);
				c = II(c, d, a, b, M_offset_10, 15, T[54]);
				b = II(b, c, d, a, M_offset_1, 21, T[55]);
				a = II(a, b, c, d, M_offset_8, 6, T[56]);
				d = II(d, a, b, c, M_offset_15, 10, T[57]);
				c = II(c, d, a, b, M_offset_6, 15, T[58]);
				b = II(b, c, d, a, M_offset_13, 21, T[59]);
				a = II(a, b, c, d, M_offset_4, 6, T[60]);
				d = II(d, a, b, c, M_offset_11, 10, T[61]);
				c = II(c, d, a, b, M_offset_2, 15, T[62]);
				b = II(b, c, d, a, M_offset_9, 21, T[63]);

				// Intermediate hash value
				H[0] = H[0] + a | 0;
				H[1] = H[1] + b | 0;
				H[2] = H[2] + c | 0;
				H[3] = H[3] + d | 0;
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;

				var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
				var nBitsTotalL = nBitsTotal;
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;

				data.sigBytes = (dataWords.length + 1) * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var hash = this._hash;
				var H = hash.words;

				// Swap endian
				for (var i = 0; i < 4; i++) {
					// Shortcut
					var H_i = H[i];

					H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
				}

				// Return final computed hash
				return hash;
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			}
		});

		function FF(a, b, c, d, x, s, t) {
			var n = a + (b & c | ~b & d) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		function GG(a, b, c, d, x, s, t) {
			var n = a + (b & d | c & ~d) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		function HH(a, b, c, d, x, s, t) {
			var n = a + (b ^ c ^ d) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		function II(a, b, c, d, x, s, t) {
			var n = a + (c ^ (b | ~d)) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		/**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.MD5('message');
   *     var hash = CryptoJS.MD5(wordArray);
   */
		C.MD5 = Hasher._createHelper(MD5);

		/**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacMD5(message, key);
   */
		C.HmacMD5 = Hasher._createHmacHelper(MD5);
	})(Math);

	return CryptoJS.MD5;
});

/***/ }),

/***/ "Wum3":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sL3J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var isLocalHost = function isLocalHost(hostname) {
  return !!(hostname === 'localhost' || hostname === '[::1]' || hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
};

var HttpsRedirect = function HttpsRedirect(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children;

  if (!disabled && typeof window !== 'undefined' && window.location && window.location.protocol === 'http:' && !isLocalHost(window.location.hostname)) {
    window.location.href = window.location.href.replace(/^http(?!s)/, 'https');
    return null;
  }

  return children;
};

HttpsRedirect.propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool
};

exports.default = HttpsRedirect;

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map